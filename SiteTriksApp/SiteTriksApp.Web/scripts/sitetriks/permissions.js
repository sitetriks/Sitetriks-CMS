import { WarningWindow } from '../modules/warning-window.js';
import { Data } from '../common/data.js';
import { Notifier } from '../common/notifier.js';


function editPermission(id) {
WarningWindow.attach();
    $('.move-to-right').on('click', function () {
        $('.all-permissions-select option:selected').each(function (_, element) {
            $(element).remove();
            $('.permissions-to-role-select').append($('<option>', {
                value: element.value,
                text: element.value
            }));
        });
    });

    $('.move-to-left').on('click', function () {
        $('.permissions-to-role-select option:selected').each(function (_, element) {
            $(element).remove();
            $('.all-permissions-select').append($('<option>', {
                value: element.value,
                text: element.value
            }));
        });

    });

    function getAllRoles() {
        var roles = [];
        $('.permissions-to-role-select option').each(function (_, element) {
            roles.push(element.value);
        });

        return roles;
    }

    $('#permission-form').on('submit', function (ev) {
        ev.preventDefault();

        var model = {
            id: id,
            roles: getAllRoles()
        };

        Data.postJson({ url: this.action, data: model }).then(function (res) {
            Notifier.createAlert({ containerId: '#alerts', title: 'Success!', message: 'Permission was edited successfully', status: 'success' });
            if (res && res.success) {
                window.location.replace('/sitetriks/permission');
                return;
            }

            Notification.createAlert({ containerId: '#alerts', message: res.message || 'Something went wrong', status: 'danger' });
        }, Data.defaultError);

        return false;
    });
}

window.editPermission = editPermission;