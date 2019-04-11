import './layout.js';

import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { textEditor } from '../text-editor.js';
import { WarningWindow } from '../modules/warning-window.js';

function editSubscribeInfo(selectedGroups) {
    let groupsString = selectedGroups.toString();
    for (let i = 0; i < groupsString.length; i++) {

        if (i == 0) {
            $('input[name="features-releases"][value="' + groupsString[i] + '"]').attr('checked', 'checked');
        } else if (i == 1) {
            $('input[name="promotional-materials"][value="' + groupsString[i] + '"]').attr('checked', 'checked');
        }

    }

    $('input[type=submit]').on('click', function (e) {
        let $email = $('#email');
        let $name = $('#name');
        let $featuresReleases = $('input[name="features-releases"]:checked');
        let $promotionalMaterials = $('input[name="promotional-materials"]:checked');
        let flag = true;

        e.preventDefault();

        if (!Validator.validate($('#email'), 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!Validator.validate($('#name'), 'Name must be at least 3 symbols', function (val) {
            return Validator.hasMinimumLength(val, 3) && Validator.isStartingWithLetter(val);
        })) {
            flag = false;
        }

        if (flag) {
            var emailGroups = $featuresReleases.val().toString() + $promotionalMaterials.val().toString();

            var subscriberData = {
                Name: $name.val(),
                Email: $email.val(),
                Groups: emailGroups
            };

            Data.postJson({ url: '/sitetriks/marketingEmails/editsubscribeinfo', data: subscriberData }).then(function (res) {
                Notifier.createAlert({ containerId: '#subscription-form-container', message: res.message, status: (res.success ? 'info' : 'warning'), seconds: 5 });

                setTimeout(function () {
                    window.location = '/';
                }, 1000);
            });
        }
    });
}

function sendEmails() {
    let $emailGroup = $('input[name="email-group"]:checked');
    let hasReseivers = false;
    let userEmails = [];

    WarningWindow.attach();
    textEditor.init('#content-area', 500, 300);

    $('input[type="checkbox"]').change(function () {
        let usersContainer = $('#users');
        usersContainer.empty();
        let messageBox = $('<p></p>');
        messageBox.empty();
        let usersList = $('<p></p>');


        let selectedGroups = [];

        $('input:checkbox:checked').each(function () {
            let intValue = parseInt($(this).val());
            selectedGroups.push(intValue);
        });

        let model = {
            Indexes: selectedGroups
        };

        Data.postJson({ url: '/sitetriks/marketingEmails/GetAllUsersInGroup', data: model }).then(function (res) {
            if (res.success == true) {
                hasReseivers = true;
                userEmails = res.users;
                usersList.text('Email receivers: ' + res.users.join(';'));
            } else {
                hasReseivers = false;
                messageBox.text(res.message);
            }

            usersContainer.append(messageBox).append(usersList);
        });
    });

    $('input[type=submit]').on('click', function (e) {
        Loader.show(true);
        let $validationBox = $('#email-group-options > .validation-output');

        e.preventDefault();

        let flag = true;

        if (!Validator.validate($('#sender'), 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!Validator.validate($('#checkboxes'), 'Must select users from groups.', function (val) {
            if (!hasReseivers) {
                return false;
            }
            return true;
        })) {
            flag = false;
        }
        if (flag) {
            var emailData = {
                Sender: $('#sender').val(),
                Subject: $('#subject').val(),
                Content: textEditor.getContent('content-area'),
                Receivers: userEmails
            };

            Data.postJson({ url: '/sitetriks/marketingEmails/sendEmails', data: emailData }).then(function (res) {
                Notifier.createAlert({ containerId: '#alert', message: 'Email was send successfully', success: 'success' });
                setTimeout(function () {
                    window.location = '/sitetriks/marketingemails/sendemails';
                }, 1000);
            });
        }

        Loader.hide();
    });
}

window.editSubscribeInfo = editSubscribeInfo;
window.sendEmails = sendEmails;
