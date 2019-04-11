//===================================================================================================
// Widgets 2.01
// - v. 2.01 - add func getRoles() and getUserGroups() for loading multiselect dropdowns
//         for widgets AllowedRoles, AllowedGroups 
// - v. 2.1 - refactor, unified modals, removed most of duplicating logic for add/edit
//===================================================================================================

import 'jquery-ui';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/ui/widgets/droppable';
import 'jquery-ui/ui/widgets/sortable';

import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { Multiselect } from '../common/multiselect-setup.js';
import { WarningWindow } from './warning-window.js';

export function widgetsModule($widgetContainer, initFunctions, pageContent) {
    const $dialog = $('#Dialog-Box').dialog({ autoOpen: false, height: 700, width: '80%', modal: true, dialogClass: 'widget-dialog' });
    const $dialogTitle = $('<span></span>', { class: 'widget-dialog-title', text: 'title' }).appendTo('.widget-dialog .ui-dialog-titlebar');
    const $btnSaveWidget = $('<button></button>', {
        class: 'btn btn-success btn-sm btn-save-widget',
        html: '<span class="glyphicon glyphicon-edit"></span> Save'
    }).prop('disabled', true).appendTo(`.widget-dialog .ui-dialog-titlebar`);
    $dialog.find('.ui-dialog-titlebar-close').addClass('btn');

    bindEvents();

    function bindEvents() {
        $('.ui-dialog').on('click', '.btn-save-widget[data-mode="add"]', addWidget);
        $('.ui-dialog').on('click', '.btn-save-widget[data-mode="edit"]', saveEditedWidget);
        $('body').on('click', '.edit-widget', editWidget);
        $('body').on('click', '.delete-widget', removeWidget);
    }

    function getRoles(selectedRoles) {
        var selectedRolesNames = !selectedRoles ? [] : selectedRoles.split(';');

        return Data.getJson({ url: '/sitetriks/roles/getAllRolesNames' }).then(function (data) {
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

        return Data.getJson({ url: '/sitetriks/userGroups/getAllUserGroupsNames' }).then(function (data) {
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

    function createAlert(action, data, status, $dialog, modalId) {
        Notifier.createAlert({
            containerId: '#alerts',
            message: `${action} ${data.type} widget`,
            status: status
        });

        if ($dialog) {
            $dialog.dialog('close');
        }
        if (modalId) {
            $(modalId).modal('hide');
        }

        $(document).trigger('initCarousel');
        $widgetContainer.html('');
        Loader.hide();
    }

    function makeDrop(target) {
        target.droppable({
            accept: '.drag',
            greedy: true,
            tolerance: 'touch',
            drop: function (ev, ui) {
                $('.drop').removeClass('drag-hover');
                if (ui.draggable.hasClass('preview-placeholder')) {
                    return;
                }

                let $drag = ui.draggable.first();
                ui.helper.detach();

                let placeholder = $(ev.target).attr('data-placeholder');
                let type = $drag.attr('data-type');
                let extra = $drag.attr('data-extra');

                setupDialog('add', $drag.text(), { placeholder, type });
                loadWidgetConfig({ type, extra });
            },
            over: function (event, ui) {
                $('.drop').removeClass('drag-hover');
                $(this).addClass('drag-hover');
            },
            out: function () {
                $(this).removeClass('drag-hover');
            }
        });
    }

    function renderWidget(widget) {
        let body = { content: widget, preview: 'preview' };
        Loader.show(true);
        return Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body });
    }

    function loadWidgetTemplates(type, selected) {
        var $templatesSelector = $dialog.find('#template-selector');
        if (!$templatesSelector.length) {
            return Promise.resolve();
        }

        return Data.getJson({ url: '/SiteTriks/Widgets/GetTemplateNames?widgetName=' + type }).then(function (data) {
            $templatesSelector.empty();
            for (let i = 0; i < data.templateNames.length; i++) {
                $('<option></option>', {
                    text: data.templateNames[i],
                    value: data.templateNames[i],
                    selected: selected && data.templateNames[i] === selected
                }).appendTo($templatesSelector);
            }
        });
    }

    function getWidgetData(type) {
        let data = { valid: true };
        if (initFunctions[type] && Utils.isFunction(initFunctions[type].validate)) {
            let validation = initFunctions[type].validate();
            if (!validation.isValid) {
                Notifier.createAlert({ containerId: '#add-modal-alerts', message: validation.message, status: 'danger' });
                return validation;
            }
        }

        data.cssClass = $dialog.find('#css-class').val();
        data.templateName = $dialog.find('#template-selector').val();
        data.allowedRoles = ($dialog.find('#allowed-roles').val() || []).join(';');
        data.allowedGroups = ($dialog.find('#allowed-groups').val() || []).join(';');

        if (initFunctions[type] && Utils.isFunction(initFunctions[type].save)) {
            data.element = initFunctions[type].save();
        }

        return data;
    }

    function loadWidgetConfig({ type, extra, data }) {
        $widgetContainer.html('<p>Loading...</p>');
        return Data.getJson({ url: '/sitetriks/widgets/addwidget?name=' + type + (extra ? '&extra=' + extra : '') }).then(function success(res) {
            $widgetContainer.html(res);
            $('.btn-save-widget').prop('disabled', false);
            setModalFocus($widgetContainer);
            if (data) {
                $('#css-class').val(data.cssClass);
                if (initFunctions[type] && Utils.isFunction(initFunctions[type].edit)) {
                    initFunctions[type].edit(data.element || '');
                }

                return Promise.all([loadWidgetTemplates(type, data.templateName), getRoles(data.allowedRoles), getUserGroups(data.allowedGroups)]);
            } else {
                if (initFunctions[type] && Utils.isFunction(initFunctions[type].add)) {
                    initFunctions[type].add();
                }

                return Promise.all([loadWidgetTemplates(type), getRoles(), getUserGroups()]);
            }
        });
    }

    //=================================================================================================================================================
    // Dialogs
    //=================================================================================================================================================

    // TODO: keep state instead of saving in attributes
    function setupDialog(mode, displayName, params) {
        $dialog.dialog('open').parent().css({ position: 'fixed', top: '10%' });
        $dialogTitle.text(displayName);
        $widgetContainer.html('');
        $btnSaveWidget.prop('disabled', true).attr('data-mode', mode);
        $dialog.find('#widget-info').html('');
        $dialog.find('.widget-title-status').text(mode === 'edit' ? 'Edit' : 'Create');

        if (params) {
            for (let param in params) {
                $dialog.attr(`data-${param}`, params[param]);
            }
        }
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

    function addWidget() {
        let type = $dialog.attr('data-type');
        let placeholder = type === 'css' || type === 'javascript' ? type : $dialog.attr('data-placeholder');
        let data = getWidgetData(type);
        if (!data.valid) {
            return;
        }

        let order = Math.max.apply(Math, pageContent.map(function (c) { return c.order; })) + 1;
        order = order === -Infinity ? 0 : order || 0;
        let id = Utils.guid();

        let widget = {
            type: type,
            id: id,
            element: data.element,
            cssClass: data.cssClass,
            templateName: data.templateName
        };

        renderWidget(widget).then(function (view) {
            $(document).trigger('removeCarousel');

            pageContent.push({
                id: id,
                cssClass: data.cssClass,
                allowedRoles: data.allowedRoles,
                allowedGroups: data.allowedGroups,
                element: data.element,
                templateName: data.templateName,
                order: order || 0,
                placeholder: placeholder,
                type: type
            });

            $('.placeholder[data-placeholder="' + placeholder + '"]').append(view);
        }).then(function () {
            WarningWindow.force();
            createAlert('Successfully Added', { type }, 'success', $dialog, null);
            if (initFunctions[type] && Utils.isFunction(initFunctions[type].callback)) {
                initFunctions[type].callback(id);
            }
        }, function (error) {
            $(document).trigger('removeCarousel');
            createAlert('Failed to Add', { type }, 'danger', $dialog, null);
        });
    }

    //=================================================================================================================================================
    // Edit widget
    //=================================================================================================================================================

    function editWidget(ev) {
        let type = ev.target.getAttribute('data-type');
        let id = ev.target.getAttribute('data-id');
        let displayName = ev.target.getAttribute('data-display');

        let data = pageContent.find(e => e.id === id && e.type === type);
        setupDialog('edit', displayName || type, { id, type });
        $dialog.find('#widget-info').html(`<span class="label label-default">Order: ${data.order}</span><span>,</span><span class="label label-default">Type: ${data.type}</span><hr/>`);
        loadWidgetConfig({ type, data });
    }

    function saveEditedWidget() {
        let id = $dialog.attr('data-id');
        let type = $dialog.attr('data-type');
        let data = getWidgetData(type);
        if (!data.valid) {
            return;
        }

        let item = pageContent.find(e => e.id === id && e.type === type);
        let widget = {
            type: type,
            id: id,
            element: data.element,
            cssClass: data.cssClass,
            templateName: data.templateName,
            isLocked: item.isLocked,
            isStatic: item.isStatic
        };

        renderWidget(widget).then(function (view) {
            $(document).trigger('removeCarousel');

            item.element = data.element;
            item.cssClass = data.cssClass;
            item.allowedRoles = data.allowedRoles;
            item.allowedGroups = data.allowedGroups;
            item.templateName = data.templateName;
            item.isModifiedOnChild = item.isInherited ? true : item.isModifiedOnChild;

            if (type !== 'layoutBuilder') {
                let $old = $(`.preview-placeholder[data-identifier="${id}"]`);
                $old.after(view);
                $old.remove();
            }
        }).then(function () {
            WarningWindow.force();
            createAlert('Edited', { type }, 'warning', $dialog, null);
            if (initFunctions[type] && Utils.isFunction(initFunctions[type].callback)) {
                initFunctions[type].callback(id);
            }
        }, function (error) {
            $(document).trigger('removeCarousel');
            createAlert('Failed to Edit', { type }, 'danger', $dialog, null);
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

        $element.parents(`.preview-placeholder[data-identifier="${id}"]`).remove();
        WarningWindow.force();
        createAlert('Removed', { type }, 'danger', null, '#delete-confirm');
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

    return {
        makeDrop,
        getPageContent: () => pageContent,
        setPageContent: (content) => pageContent = content,
        removeWidgetForPlaceholder
    };
}
