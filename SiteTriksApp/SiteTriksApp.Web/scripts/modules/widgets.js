//===================================================================================================
// Widgets 2.01
// - v. 2.01 - add func getRoles() and getUserGroups() for loading multiselect dropdowns
//         for widgets AllowedRoles, AllowedGroups 
//===================================================================================================

import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { Multiselect } from '../common/multiselect-setup.js';
import { WarningWindow } from './warning-window.js';

export function widgetsModule($widgetContainer, initFunctions, pageContent) {
    function getRoles(selectedRoles) {
        var selectedRolesNames = !selectedRoles ? [] : selectedRoles.split(';');

        Data.getJson({ url: '/sitetriks/roles/getAllRolesNames' }).then(function (data) {
            $.each(data.names, function (index, item) {
                $('<option></option>', {
                    value: item,
                    html: item,
                    selected: selectedRolesNames.indexOf(item) >= 0
                }).appendTo('#allowed-roles');
            });

            Multiselect.Setup('allowed-roles');
        });
    }

    function getUserGroups(selectedUserGroups) {
        var selectedUserGroupsNames = !selectedUserGroups ? [] : selectedUserGroups.split(';');

        Data.getJson({ url: '/sitetriks/userGroups/getAllUserGroupsNames' }).then(function (data) {
            $.each(data.names, function (index, item) {
                $('<option></option>', {
                    value: item,
                    html: item,
                    selected: selectedUserGroupsNames.indexOf(item) >= 0
                }).appendTo('#allowed-groups');
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
                return Promise.resolve();
            }

            return Data.getJson({ url: '/SiteTriks/Widgets/GetTemplateNames?widgetName=' + type }).then(function (data) {
                let templateNames = data.templateNames;
                $templatesSelector.empty();

                for (let i = 0; i < templateNames.length; i++) {
                    let $option = $('<option></option>');
                    $option.text(templateNames[i]);
                    $option.val(templateNames[i]);

                    $templatesSelector.append($option);
                }
            });
        }).then(function (res) {
            setModalFocus($widgetContainer);
        });
    }

    function createAlert(action, data, status, dialogId, modalId, isLocal) {
        Notifier.createAlert({
            containerId: '#alerts',
            //title: 'Successfully ',
            message: `${action} ${data.type} widget`,
            status: status
        });

        if (dialogId) {
            $(dialogId).dialog('close');
        }
        if (modalId) {
            $(modalId).modal('hide');
        }

        if (!isLocal) {
            $(document).trigger('updatePreview');
        } else {
            $(document).trigger('initCarousel');
        }

        $widgetContainer.html('');
        $('#edit-widget-container').html('');
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

                    setupDialog($addDialog, 'add-widget-dialog', $drag.text(), 'btn-add-widget');
                    $addDialog.data('placeholder', placeholder);

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
    // Dialogs
    //=================================================================================================================================================

    let dialogConfig = {
        autoOpen: false,
        height: 700,
        width: '80%',
        modal: true
    };

    const $addDialog = $('#Dialog-Box').dialog(dialogConfig);
    const $editDialog = $('#Dialog-Box-Edit').dialog(dialogConfig);

    function setupDialog($dialog, dialogClass, displayName, btnSaveClass) {
        $dialog.dialog('option', 'dialogClass', dialogClass)
            .dialog('open')
            .parent().css({ position: 'fixed', top: '10%' });

        $widgetContainer.html('');
        $('#edit-widget-container').html('');

        $('.btn-add-widget').remove();
        $('.btn-edit-widget').remove();

        $('<button></button>', {
            class: 'btn btn-success btn-sm ' + btnSaveClass,
            html: '<span class="glyphicon glyphicon-edit"></span> Save'
        }).prop('disabled', true)
            .appendTo(`.${dialogClass} .ui-dialog-titlebar`);

        $dialog.find('.ui-dialog-titlebar-close').addClass('btn');
        $('.widget-dialog-title').remove();

        $('<span></span>', {
            class: 'widget-dialog-title',
            text: displayName
        }).appendTo(`.${dialogClass} .ui-dialog-titlebar`);
    }

    function setModalFocus($container) {
        let elementToFocus = $container.find('input:first');
        if (elementToFocus.length === 0) {
            elementToFocus = $container.find('textarea:first');
        }

        if (elementToFocus.length === 0) {
            elementToFocus = $container.find('select:first');
        }

        elementToFocus.focus();
    }

    //=================================================================================================================================================
    // Add widget
    //=================================================================================================================================================

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

        addWidgetLocal(type, element, placeholder, cssClass, templateName, allowedRoles, allowedGroups).then(function (id) {
            if (initFunctions[type] && Utils.isFunction(initFunctions[type].callback)) {
                initFunctions[type].callback(id);
            }
        });
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

        return Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {
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

            WarningWindow.force();
            if (!noAlert) {
                createAlert('Successfully Added', { type }, 'success', '#Dialog-Box', null, true);
            } else {
                Loader.hide();
            }

            return id;
        }, function (error) {
            $(document).trigger('removeCarousel');
            createAlert('Failed to Add', { type }, 'danger', '#Dialog-Box', null, true);
        });
    }

    //=================================================================================================================================================
    // Edit widget
    //=================================================================================================================================================

    function editWidget(type, id) {
        var item = pageContent.find(function (e) {
            return e.id === id && e.type === type;
        });
        showWidget({ order: item.order, type: type, element: item.element, templateName: item.templateName, cssClass: item.cssClass, allowedRoles: item.allowedRoles, allowedGroups: item.allowedGroups, placeholder: item.placeholder, id: id });
    }

    $('body').on('click', '.edit-widget', function (ev) {
        let $trigger = $(this);
        let type = $trigger.attr('data-type');
        let id = $trigger.attr('data-id');
        let displayName = $trigger.attr('data-display');

        setupDialog($editDialog, 'edit-widget-dialog', displayName || type, 'btn-edit-widget');
        editWidget(type, id);
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
        var allowedRoles = ($('#allowed-roles').val() || []).join(';');
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

        saveEditWidgetLocal(type, element, id, placeholder, cssClass, templateName, allowedRoles, allowedGroups).then(function () {
            if (initFunctions[type] && Utils.isFunction(initFunctions[type].callback)) {
                initFunctions[type].callback(id);
            }
        });
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

        return Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {
            $(document).trigger('removeCarousel');

            if (type !== 'layoutBuilder') {
                $old.after(data);
                $old.remove();
            }

            WarningWindow.force();
            createAlert('Edited', { type: type }, 'warning', '#Dialog-Box-Edit', null, true);
        });
    }

    function showWidget(data) {
        $('#order').text('Order: ' + data.order);
        $('#type').text('Type: ' + data.type);

        var type = data.type;
        var $widgetContainer = $('#edit-widget-container');
        $widgetContainer.html('<p>Loading...</p>');
        $('.btn-edit-widget').prop('disabled', true);
        $('.btn-edit-widget').removeAttr('data-type');
        var element = data.element || '';

        Data.getJson({ url: '/sitetriks/widgets/addwidget?name=' + type }).then(function success(res) {
            $widgetContainer.html(res);
            var $templatesSelector = $('#template-selector');

            if ($templatesSelector.length) {
                Data.getJson({ url: '/SiteTriks/Widgets/GetTemplateNames?widgetName=' + type }).then(function (tempData) {
                    let templateNames = tempData.templateNames;
                    $templatesSelector.empty();

                    for (let i = 0; i < templateNames.length; i++) {
                        let $option = $('<option></option>');
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

            $('.edit-widget-dialog .btn-edit-widget').prop('disabled', false).attr('data-id', data.id)
                .attr('data-placeholder', data.placeholder).attr('data-type', type).attr('data-order', data.order);

            setModalFocus($widgetContainer);
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

    if (type === 'edit') {
        containerId = '#edit-modal-alerts';
    }

    Notifier.createAlert({
        containerId: containerId,
        message: msg,
        status: 'danger'
    });
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
            createErrorAlert('You must select images or library first!', method);
            return false;
            break;
        case 'dynamic':
            createErrorAlert('You must select class!', method);
            return false;
            break;
        default:
            return true;
            break;
    }
}
