import { Multiselect } from '../common/multiselect-setup.js';

function initWidgetConfiguration(grid) {
    const $modal = $('#edit-widget-roles');
    const $btnSave = $('#btn-save');
    const $rolesListBox = $('#roles-listbox');
    Multiselect.Setup('roles-listbox');

    function editWidgetRoles(widget, roles, trackable) {
        $modal.find('.track-widget-checkbox').prop('checked', trackable === 'true');
        $rolesListBox.val('');
        $.each(roles.split(','), function (_, e) {
            $rolesListBox.find('option[value="' + e.trim() + '"]').prop('selected', true);
        });

        Multiselect.Refresh('roles-listbox');
        $btnSave.attr('data-widget', widget);
        $modal.modal('show');
    }

    $btnSave.on('click', function () {
        let widget = this.getAttribute('data-widget');
        let roles = $rolesListBox.val();
        let isTrackable = $modal.find('.track-widget-checkbox').prop('checked') == true;

        $.ajax({
            method: 'POST',
            url: '/sitetriks/widgetconfiguration/edit',
            data: { widget, roles, isTrackable },
            success: function (res) {
                if (res.success) {
                    grid.load(true);
                    $modal.modal('hide');
                }
            }
        });
    });

    $('body').on('click', '.edit-widget-config', function (ev) {
        editWidgetRoles(this.getAttribute('data-widget'), this.getAttribute('data-roles'), this.getAttribute('data-trackable'));
    });
}

window.initWidgetConfiguration = initWidgetConfiguration;
