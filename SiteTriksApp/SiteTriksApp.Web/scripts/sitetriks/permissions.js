<<<<<<< HEAD
﻿import './layout.js';

import { WarningWindow } from '../modules/warning-window.js';
=======
﻿import { WarningWindow } from '../modules/warning-window.js';
>>>>>>> origin/master
import { Data } from '../common/data.js';
import { Notifier } from '../common/notifier.js';


function editPermission(id) {
WarningWindow.attach();
<<<<<<< HEAD

    let forms = $('.method-form');
    console.log(forms);

    for(let i = 0; i < forms.length; i++) {
        let form = forms[i];
        console.log(form);

        attachRoleEventsToForm(form);

        updateRoles(form);



    }

    function updateRoles(form) {
        $(form).on('click', '.updateMethodRoles', updateRolesEvent)

        function updateRolesEvent(ev) {
            let fomrMethod = $(form).data('method');
            let formId = $(form).data('id');
            let formAction = $(form).data('action');

            console.log(formAction, fomrMethod)

            let model = 
            {
                id: formId,
                action: formAction,
                method: fomrMethod,
                roles: getAllRoles(form)
            };

            let url = '/sitetriks/permission/edit';

            Data.postJson({ url: url, data: model}).then(function (res) {
                if (res && res.success) {
                    window.location.replace('/sitetriks/permission');
                    return;
                }
    
                Notification.createAlert({ containerId: '#alerts', message: res.message || 'Something went wrong', status: 'danger' });
            })
        }

        function getAllRoles(form) {
            let roles = [];
            $(form).find('.permissions-to-role-select option').each(function (_, element) {
                roles.push(element.value);
            });
    
            return roles;
        }
    }

    function attachRoleEventsToForm(form) {
        $(form).on('click', '.move-to-right', moveToRightEvent);
        $(form).on('click', '.move-to-left', moveToLeftEvent);

        function moveToRightEvent(ev) {
            $(form).find('.all-permissions-select option:selected').each(function (_, element) {
                $(element).remove();
                $(form).find('.permissions-to-role-select').append($('<option>', {
                    value: element.value,
                    text: element.value
                }));
            });
        }

        function moveToLeftEvent(ev) {
            $(form).find('.permissions-to-role-select option:selected').each(function (_, element) {
                $(element).remove();
                $(form).find('.all-permissions-select').append($('<option>', {
                    value: element.value,
                    text: element.value
                }));
            });
        }        
    }


    

=======
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

>>>>>>> origin/master
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