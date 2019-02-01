//===================================================================================================
// Widgets 2.01
// - v. 2.01 - add func getRoles() and getUserGroups() for loading multiselect dropdowns
//         for widgets AllowedRoles, AllowedGroups 
//===================================================================================================

/* globals Data, Loader, Utils, Notifier, Multiselect, WidgetsDraggable, ModuleBuilder, WarningWindow */

function widgetsModule($widgetContainer, initFunctions, pageContent) {
    function getRoles(selectedRoles) {
        if (!selectedRoles) {
            var selectedRolesNames = [];
        } else {
            var selectedRolesNames = selectedRoles.split(';');
        }


        Data.getJson({ url: '/sitetriks/roles/getAllRolesNames' }).then(function (data) {
            $.each(data.names, function (index, item) {
                if (selectedRolesNames.indexOf(item) >= 0) {
                    var option = $('<option></option>');
                    option.val(item).html(item);
                    option.attr('selected', 'selected');
                    $('#allowed-roles').append(option);
                } else {
                    $('#allowed-roles').append(
                        $('<option></option>').val(item).html(item)
                    );
                }

            });
            Multiselect.Setup('allowed-roles');
        });
    }

    function getUserGroups(selectedUserGroups) {

        if (!selectedUserGroups) {
            var selectedUserGroupsNames = [];
        } else {
            var selectedUserGroupsNames = selectedUserGroups.split(';');
        }

        Data.getJson({ url: '/sitetriks/userGroups/getAllUserGroupsNames' }).then(function (data) {
            $.each(data.names, function (index, item) {
                if (selectedUserGroupsNames.indexOf(item) >= 0) {
                    var option = $('<option></option>');
                    option.val(item).html(item);
                    option.attr('selected', 'selected');
                    $('#allowed-groups').append(option);
                } else {
                    $('#allowed-groups').append(
                        $('<option></option>').val(item).html(item)
                    );
                }
            });
            Multiselect.Setup('allowed-groups');
        });
    }

    function LoadWidget(type, extra) {
        $widgetContainer.html('<p>Loading...</p>');

        Data.getJson({ url: '/sitetriks/widgets/addwidget?name=' + type + '&extra=' + extra }).then(function (res) {
            $widgetContainer.html(res);

            if (initFunctions[type] && {}.toString.call(initFunctions[type].init) === '[object Function]') {
                initFunctions[type].init();
            }

            getRoles();
            getUserGroups();

            $('.add-widget-dialog .btn-add-widget').prop('disabled', false);
            $('.add-widget-dialog .btn-add-widget').attr('data-type', type);

            var $templatesSelector = $('#template-selector');

            if ($templatesSelector.length) {
                Data.getJson({ url: '/SiteTriks/Widgets/GetTemplateNames?widgetName=' + type }).then(function (data) {
                    let templateNames = data.templateNames;
                    $templatesSelector.empty();

                    for (let i = 0; i < templateNames.length; i++) {
                        let $option = $('<option></option>');
                        $option.text(templateNames[i]);
                        $option.val(templateNames[i]);

                        $templatesSelector.append($option);
                    }

                    $('#add-widget-container').find('input:first').focus();
                });
            }
        });
    }

    function createAlert(action, data, status, dialogId, modalId, isLocal) {
        Notifier.createAlert({
            containerId: '#alerts',
            title: 'Successfully ',
            message: action + " " + data.type + " widget",
            status: status
        });

        if (dialogId) {
            $(dialogId).dialog('close');
        }
        if (modalId) {
            $(modalId).modal("hide");
        }

        if (!isLocal) {
            $(document).trigger('updatePreview');
        } else {
            $(document).trigger('initCarousel');
        }

        $widgetContainer.html('');
        Loader.hide();
    }

    function makeDrop(target) {
        target.droppable({
            accept: '.drag',
            greedy: true,
            tolerance: 'touch',
            drop: function (event, ui) {

                $('.drop').removeClass('drag-hover');

                if (!ui.draggable.hasClass('preview-placeholder')) {
                    let $drag = ui.draggable.first();
                    ui.helper.detach();

                    var placeholder = $(event.target).attr('data-placeholder');
                    var type = $drag.data('type');
                    let extra = $drag.attr('data-extra');

                    OpenDialog(placeholder).text($drag.text());

                    LoadWidget(type, extra);
                }
            },
            over: function (event, ui) {
                $('.drop').removeClass('drag-hover');
                $(event.target).addClass('drag-hover');
            },
            out: function () {
                $(this).removeClass('drag-hover');
            }
        });
    }

    //=================================================================================================================================================
    // Add widget
    //=================================================================================================================================================

    $('#Dialog-Box').dialog({
        autoOpen: false,
        height: 500,
        width: 800,
        modal: true
    });

    function OpenDialog(placeholder) {

        var alertOpen = $('#add-modal-alerts .alert');
        if (alertOpen) {
            alertOpen.hide();
        }

        $widgetContainer.html('');
        $('#Dialog-Box')
            .data('placeholder', placeholder)
            .dialog('option', 'width', '80%')
            .dialog('option', 'height', 700)
            .dialog('option', 'dialogClass', 'add-widget-dialog')
            .dialog('open');

        $('#Dialog-Box').dialog('option', 'position', "20%");
        $('#Dialog-Box').parent().css({ position: "fixed" })
            .css({ top: "10%" });

        $('.btn-add-widget').remove();
        $('.btn-edit-widget').remove();

        var $btnAddWidget = $(document.createElement('button'));
        $btnAddWidget.html('<span class="glyphicon glyphicon-edit"></span> Save')
            .addClass('btn btn-success btn-sm btn-add-widget')
            .prop('disabled', true)
            .attr('id', 'btn-save-widget');

        if (!($('.add-widget-dialog .ui-dialog-titlebar-close').hasClass('btn'))) {
            $('.add-widget-dialog .ui-dialog-titlebar-close').addClass('btn');
        }

        $btnAddWidget.appendTo('.ui-dialog-titlebar');

        $('.widget-dialog-title').remove();
        let $title = $('<span></span>', {
            class: 'widget-dialog-title'
        }).appendTo('.ui-dialog-titlebar');

        return $title;
    }

    $('div#Dialog-Box-Edit, div#Dialog-Box').on('dialogclose', function (event) {
        $widgetContainer.html('');
    });

    $('.ui-dialog').on('click', '.btn-add-widget', function () {
        var placeholder = $('#Dialog-Box').data('placeholder');
        var type = $(this).attr('data-type');
        if (type === 'css') {
            placeholder = 'css';
        }
        if (type === 'javascript') {
            placeholder = 'javascript';
        }

        var cssClass = $('#css-class').val();
        var templateName = $('#template-selector').val();
        var allowedRoles = ($('#allowed-roles').val() || []).join(';');
        var allowedGroups = ($('#allowed-groups').val() || []).join(';');

        var element;
        if (initFunctions[type] && Utils.isFunction(initFunctions[type].save)) {
            element = initFunctions[type].save();
        }

        if (element && typeof element === 'object') {
            if (!element.success) {
                if (element.message) {
                    createErrorAlert(element.message);
                } else {
                    createErrorAlert('Invalid information');
                }

                Loader.hide();
                return;
            } else {
                element = element.element;
            }
        }

        if (!element) {
            var isValid = widgetValidation(type);

            if (!isValid) {
                return;
            }
        }

        addWidgetLocal(type, element, placeholder, cssClass, templateName, allowedRoles, allowedGroups);
    });

    function addWidgetLocal(type, element, placeholder, cssClass, templateName, allowedRoles, allowedGroups, noAlert) {
        let order = Math.max.apply(Math, pageContent.map(function (c) { return c.order; })) + 1;

        if (order === -Infinity) {
            order = 0;
        }
        var id = Utils.guid();
        var body = {
            content: {
                type: type,
                id: id,
                element: element,
                placeholder: placeholder,
                cssClass: cssClass,
                templateName: templateName,
                allowedRoles: allowedRoles,
                allowedGroups: allowedGroups,
                order: order || 0
            },
            preview: 'preview'
        };

        Loader.show(true);

        Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {
            $(document).trigger('removeCarousel');

            pageContent.push({
                id: id,
                cssClass: cssClass,
                allowedRoles: allowedRoles,
                element: element,
                isLocked: false,
                templateName: templateName,
                order: order || 0,
                placeholder: placeholder,
                type: type
            });

            $('.placeholder[data-placeholder="' + placeholder + '"]').append(data);

            if (type === 'layoutBuilder') {
                console.log('init layout');
                let l = ModuleBuilder.getInstance('#layout-widget-wrapper', ModuleBuilder.LAYOUT);
                let layoutRows = l.map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });
                ModuleBuilder.renderLayout(layoutRows, $(`div.preview-placeholder[data-identifier="${id}"]`).find('.layout-content').first(), l.deletedPlaceholders);

                WidgetsDraggable.init(w);
            }

            WarningWindow.force();
            if (!noAlert) {
                createAlert('Added', { type }, 'success', '#Dialog-Box', null, true);
            } else {
                Loader.hide();
            }
        }, function (error) {
            $(document).trigger('removeCarousel');

            //Move to create alert
            if (type === 'dynamic') {
                Notifier.createAlert({
                    containerId: '#alerts',
                    title: '',
                    message: 'Dynamic View can not be loaded correctly.',
                    status: 'danger',
                    isPermanent: true
                });
            }

            $('#Dialog-Box').dialog('close');
            $(document).trigger('initCarousel');
            $widgetContainer.html('');
            Loader.hide();
        });
    }

    //=================================================================================================================================================
    // Edit widget
    //=================================================================================================================================================

    $('#Dialog-Box-Edit').dialog({
        autoOpen: false,
        height: 500,
        width: 800,
        modal: true
    });

    function OpenEditDialog(type, id, displayName) {
        $('#Dialog-Box-Edit')
            .dialog('option', 'width', '80%')
            .dialog('option', 'height', 700)
            .dialog('option', 'dialogClass', 'edit-widget-dialog')
            .dialog('open');

        $widgetContainer.html('');

        $('#Dialog-Box-Edit').dialog('option', 'position', ['20%', '10%']);
        $('#Dialog-Box-Edit').parent().css({ position: 'fixed', top: '10%' });

        $('.btn-add-widget').remove();
        $('.btn-edit-widget').remove();

        var $btnEditWidget = $(document.createElement('button'));
        $btnEditWidget.html('<span class="glyphicon glyphicon-edit"></span> Save')
            .addClass('btn btn-success btn-sm btn-edit-widget')
            .prop('disabled', true)
            .attr('id', 'btn-edit-widget');

        if (!($('.edit-widget-dialog .ui-dialog-titlebar-close').hasClass('btn'))) {
            $('.edit-widget-dialog .ui-dialog-titlebar-close').addClass('btn');
        }

        $btnEditWidget.appendTo('.edit-widget-dialog .ui-dialog-titlebar');

        $('.widget-dialog-title').remove();
        let $title = $('<span></span>', {
            class: 'widget-dialog-title',
            text: displayName || type
        }).appendTo('.ui-dialog-titlebar');

        editWidget(type, id);
    }

    function editWidget(type, id) {
        var item = pageContent.find(function (e) {
            return e.id === id && e.type === type;
        });
        showWidget({ order: item.order, type: type, element: item.element, templateName: item.templateName, cssClass: item.cssClass, allowedRoles: item.allowedRoles, allowedGroups: item.allowedGroups, placeholder: item.placeholder, id: id });
    }

    $('body').on('click', '.edit-widget', function (ev) {
        let $trigger = $(this);

        OpenEditDialog($trigger.attr('data-type'), $trigger.attr('data-id'), $trigger.attr('data-display'));
    });

    $('.ui-dialog').on('click', '.btn-edit-widget', function () {
        var id = $(this).attr('data-id');
        var placeholder = $(this).attr('data-placeholder');
        var type = $(this).attr('data-type');

        if (type === 'css') {
            placeholder = 'css';
        }
        if (type === 'javascript') {
            placeholder = 'javascript';
        }

        var cssClass = $('#css-class').val();
        var templateName = $('#template-selector').val();
        var allowedRoles = ($('#allowed-roles').val() || [] ).join(';');
        var allowedGroups = ($('#allowed-groups').val() || []).join(';');
        let element;
        if (initFunctions[type] && {}.toString.call(initFunctions[type].save) === '[object Function]') {
            element = initFunctions[type].save(id);
        }

        if (element && typeof element === 'object') {
            if (!element.success) {
                if (element.message) {
                    createErrorAlert(element.message);
                } else {
                    createErrorAlert('Invalid information');
                }

                Loader.hide();
                return;
            } else {
                element = element.element;
            }
        }

        if (!element) {
            let isValid = widgetValidation(type, 'edit');

            if (!isValid) {
                return;
            }
        }

        saveEditWidgetLocal(type, element, id, placeholder, cssClass, templateName, allowedRoles, allowedGroups);
    });

    function saveEditWidgetLocal(type, element, id, placeholder, cssClass, templateName, allowedRoles, allowedGroups) {
        var item = pageContent.find(function (e) {
            return e.id === id && e.type === type;
        });
        item.element = element;
        item.cssClass = cssClass;
        item.allowedRoles = allowedRoles;
        item.allowedGroups = allowedGroups;
        item.templateName = templateName;

        let order = item.order;

        if (item.isInherited) {
            item.isModifiedOnChild = true;
        }

        var $old = $('.preview-placeholder[data-identifier="' + id + '"]');

        var body = {
            content: {
                type: type,
                id: id,
                element: element,
                placeholder: placeholder,
                cssClass: cssClass,
                templateName: templateName,
                allowedRoles: allowedRoles,
                allowedGroups: allowedGroups,
                order: order,
                isLocked: item.isLocked,
                isStatic: item.isStatic
            },
            preview: 'preview'
        };

        Loader.show(true);

        Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {

            $(document).trigger('removeCarousel');


            if (type === 'layoutBuilder') {
                let l = ModuleBuilder.getInstance('#layout-widget-wrapper', ModuleBuilder.LAYOUT);
                let layoutRows = l.map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });
                ModuleBuilder.renderLayout(layoutRows, $(`div.preview-placeholder[data-identifier="${id}"]`).find('.layout-content').first(), l.deletedPlaceholders);

                WidgetsDraggable.init(w);
            } else {
                $old.after(data);
                $old.remove();
            }

            WarningWindow.force();
            createAlert('Edited', { type: type }, 'warning', '#Dialog-Box-Edit', null, true);
        });
    }

    function showWidget(data) {
        $("#order").text("Order: " + data.order);
        $("#type").text("Type: " + data.type);

        var type = data.type;
        var $widgetContainer = $('#edit-widget-container');
        $widgetContainer.html('<p>Loading...</p>');
        $('.btn-edit-widget').prop('disabled', true);
        $('.btn-edit-widget').removeAttr('data-type');
        var element = data.element || '';

        Data.getJson({ url: '/sitetriks/widgets/addwidget?name=' + type }).then(function success(res) {
            $widgetContainer.html(res);
            var elements = void 0;

            var $templatesSelector = $("#template-selector");

            if ($templatesSelector.length) {
                Data.getJson({ url: '/SiteTriks/Widgets/GetTemplateNames?widgetName=' + type }).then(function (tempData) {
                    let templateNames = tempData.templateNames;
                    $templatesSelector.empty();

                    for (let i = 0; i < templateNames.length; i++) {
                        let $option = $("<option></option>");
                        $option.text(templateNames[i]);
                        $option.val(templateNames[i]);

                        $templatesSelector.append($option);
                    }
                    $('#template-selector').val(data.templateName);
                });
            }

            $('#css-class').val(data.cssClass);

            //Add allowedGroups and Roles menus
            getRoles(data.allowedRoles);
            getUserGroups(data.allowedGroups);

            if (initFunctions[type] && {}.toString.call(initFunctions[type].show) === '[object Function]') {
                initFunctions[type].show(element);
            }

            $('.edit-widget-dialog .btn-edit-widget').prop('disabled', false).attr('data-id', data.id).attr('data-placeholder', data.placeholder).attr('data-type', type).attr('data-order', data.order);

            // focus first element to avoid highlighting close button
            let elementToFocus = $('#edit-widget-container').find('input:first');
            if (elementToFocus.length === 0) {
                elementToFocus = $('#edit-widget-container').find('textarea:first');
            }

            if (elementToFocus.length === 0) {
                elementToFocus = $('#edit-widget-container').find('select:first');
            }

            elementToFocus.focus();
        });
    }

    //=================================================================================================================================================
    // Remove widget
    //=================================================================================================================================================

    function removeWidget(ev) {
        let $element = $(this);
        let type = $element.attr('data-type');
        let id = $element.attr('data-id');
        let index = pageContent.findIndex(e => e.type === type && e.id === id);
        removeSingleWidget(index);

        $element.parents('.preview-placeholder[data-identifier="' + id + '"]').remove();
        WarningWindow.force();
        createAlert('Removed', { type }, 'danger', null, '#delete-confirm', true);
    }

    function removeWidgetForPlaceholder(placeholder, widgets) {
        widgets = widgets || pageContent || [];
        let widgetsToDelete = widgets.filter(c => c.placeholder === placeholder);

        for (let i = 0; i < widgetsToDelete.length; i += 1) {
            let index = widgets.findIndex(c => c.id === widgetsToDelete[i].id);
            removeSingleWidget(index, widgets);
        }
    }

    function removeSingleWidget(index, widgets) {
        widgets = widgets || pageContent || [];

        if (index > -1) {
            let widget = widgets.splice(index, 1)[0];
            if (widget.type === 'layoutBuilder') {
                let layout = JSON.parse(widget.element);
                for (let j = 0; j < layout.layoutRows.length; j += 1) {
                    for (let k = 0; k < layout.layoutRows[j].columns.length; k += 1) {
                        removeWidgetForPlaceholder(layout.layoutRows[j].columns[k].properties.placeholder, widgets);
                    }
                }
            }
        }
    }

    $('body').on('click', '.delete-widget', removeWidget);

    return {
        addWidgetLocal,
        saveEditWidgetLocal,
        makeDrop,
        getPageContent: () => pageContent,
        setPageContent: (content) => pageContent = content,
        removeWidgetForPlaceholder
    };
}

function createErrorAlert(msg, type) {
    let containerId = '#add-modal-alerts';

    if (type == 'edit') {
        containerId = '#edit-modal-alerts'
    }

    Notifier.createAlert({
        containerId: containerId,
        message: msg,
        status: 'danger'
    })
}
//MOVE TO CURRENT WIDGET LOGIC
function widgetValidation(widgetType, method) {
    switch (widgetType) {
        case 'detailedNews':
            createErrorAlert('You must select news!', method);
            return false;
            break;
        case 'image':
            createErrorAlert('You must select an image!', method);
            Loader.hide();
            return false;
            break;
        case 'presentation':
            createErrorAlert('You must set a valid url!', method);
            return false;
            break;
        case 'gallery':
            createErrorAlert('You must select images or library first!', method)
            return false;
            break;
        case 'dynamic':
            createErrorAlert('You must select class!', method)
            return false;
            break;
        default:
            return true;
            break;
    }
}
