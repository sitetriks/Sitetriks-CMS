import './layout.js';

import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { textEditor } from '../text-editor.js';
import { WarningWindow } from '../modules/warning-window.js';



let marketingEmails = (function () {
    const containerClass = '.smtp-senders-container';
    const listClass = '.smtp-sender-list';
    const formClass = '.marketing-smtp-form';
    const marketingContainer = '.marketing-smtp';
    const addSenderBtnClass = '.smtp-add-btn';
    const inputSenderClass = '.smtp-sender-name';
    const smtpSenderLiClass = '.smtp-sender';
    const removeSenderBtn = '.remove-smtp-sender';

    const createUrl = '/sitetriks/marketingemailssmtp/create';
    const editUrl = '/sitetriks/marketingemailssmtp/edit';
    let sendersArray = [];

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
        let $container = $('.marketing-email-sender');

        WarningWindow.attach();
        textEditor.init('#content-area', '100%', 300);

        $container.on('change', '.marketing-smtp-model', loadSenderOptions);

        function loadSenderOptions(ev) {
            let name = $(ev.target).val();
            let url = `/sitetriks/marketingEmailsSmtp/GetSendersForSmtpConfiguration?name=${name}`;

            Data.getJson({ url: url }).then(function (res) {
                console.log(res);
                if (res.success) {
                    for (let i = 0; i < res.senders.length; i++) {
                        let currSender = res.senders[i];
                        $(`<option value="${currSender}">${currSender}</option>`).appendTo($('.email-senders'));
                    }
				}		
            });
        }

        $container.on('click', 'input[type = submit]', sendMarketingEmail)

        function sendMarketingEmail(ev) {
            Loader.show(true);
            ev.preventDefault();
            let $validationBox = $('#email-group-options > .validation-output');
            let flag = true;

            function getGroupNames() {
                var checkedCheckboxes = $container.find('input[type="checkbox"]:checked');
                console.log(checkedCheckboxes);
                let groupNames = [];

                if (checkedCheckboxes == undefined) {
                    return groupNames;
                }

                for (let i = 0; i < checkedCheckboxes.length; i++) {
                    let $currElement = $(checkedCheckboxes[i]);
                    console.log($currElement.val());

                    if ($currElement.val() != undefined) {
                        groupNames.push($currElement.val());
                    }
                }

                return groupNames;
            }

            function buildQueryUrl(groupNames) {
                let emailGroupSubscribersGetUrl = '/sitetriks/marketingEmailGroups/GetEmailGroupsSubscribers';
                let query = emailGroupSubscribersGetUrl;
                for (let i = 0; i < groupNames.length; i++) {
                    if (i == 0) {
                        query += `?groupNames=${groupNames[i]}`;
                    }
                    else {
                        query += `&groupNames=${groupNames[i]}`;
                    }
                }

                return query;
            }

            let groupNames = getGroupNames();
            let query = buildQueryUrl(groupNames);

            if (flag) {
                Data.getJson({ url: query }).then(function (res) {
                    console.log(res);
                    if (res.success) {
                        //userEmails = res.subscribers;
                        return res.subscribers;
                    }
                }).then(function (subscribersEmails) {
                    var emailData = {
                        Sender: $container.find('select.email-senders option:selected').val(),
                        Subject: $('#subject').val(),
                        OptionName: $container.find('select.marketing-smtp-model option:selected').val(),
                        Content: textEditor.getContent('content-area'),
                        Receivers: subscribersEmails
                    };

                    console.log('email-data', emailData);

                    Data.postJson({ url: '/sitetriks/marketingEmails/sendEmails', data: emailData }).then(function (res) {
                        if (res.success) {
                            Notifier.createAlert({ containerId: '#alert', message: 'Email was send successfully', success: 'success' });
                            setTimeout(function () {
                                window.location = '/sitetriks/marketingemails/sendemails';
                            }, 1000);
                        } else {
                            Notifier.createAlert({ containerId: '#alert', message: res.message, status: 'danger', seconds: 5 });
                        }
                    });
                });
            }

            Loader.hide();
        }
    }


    function createSmtpConfiguration() {

        function onSubmit(ev) {
            ev.preventDefault();
            submitSmtpForm(createUrl, ev);
        }

        $(marketingContainer).on('submit', formClass, onSubmit);
    }

    function editSmtpConfiguration(senders) {

        sendersArray = senders.split(',');

        for (let i = 0; i < sendersArray.length; i++) {
            addEmailToList(sendersArray[i]);
        }

        function onSubmit(ev) {
            ev.preventDefault();

            submitSmtpForm(editUrl, ev);
        }

        $(marketingContainer).on('submit', formClass, onSubmit);
    }

    function submitSmtpForm(url, ev) {
        let formData = new FormData(ev.target);
        formData.append('senders', sendersArray);


        Data.postForm({ url: url, formData: formData }).then(function (res) {  
            if (res.success==true) {
                window.location = '/sitetriks/marketingEmailsSmtp'
            }
            else {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger', seconds: 5 })
            }
        });
    }

    function addSenderEvent() {
        let email = $(inputSenderClass).val();
        let flag = Validator.validateEmail(email);

        if (sendersArray.indexOf(email) === -1 && flag) {
            Notifier.createAlert({ containerId: '#alerts', message: 'Successfully added email', status: 'success', seconds: 5 });
        }

        if (flag) {
            sendersArray.push(email);
            addEmailToList(email);
            $(inputSenderClass).val('');
        }
        else {
            Notifier.createAlert({ containerId: '#alerts', message: 'Invalid sender email', status: 'danger', seconds: 5 });
        }
    }

    function addEmailToList(email) {
        $(listClass).append(`<li class="smtp-sender" data-email="${email}">${email}<a class="btn remove-smtp-sender">Remove</a></li>`);
    }

    function removeSenderEvent(ev) {
        let emailToRemove = $(this).parent().data('email');

        let index = sendersArray.indexOf(emailToRemove);

        if (index !== -1) {
            sendersArray.splice(index, 1);
        }

        $(this).parent().remove();
    }


    $(containerClass).on('click', addSenderBtnClass, addSenderEvent);
    $(containerClass).on('click', removeSenderBtn, removeSenderEvent);


    function removeSubscriber() {

        $('.remove-subscriber').on("click", function () {
            let mail = $(this).attr('data-email');
            let groupId = $("#hidden").val();
            let subscriber = $(this).parent();

            Data.getJson({ url: `/sitetriks/marketingEmailGroups/removeSubscriberFromGroup?subscriber=${mail}&groupId=${groupId}`}).then(function (res) {
                if (res.success) {
                    subscriber.remove();
                    Notifier.createAlert({ containerId: '#alerts', message: 'Successfuly removed subscriber', status: 'success', seconds: 5 });
                } else {
                    Notifier.createAlert({ containerId: '#alerts', message: 'Failed to removed subscriber', status: 'danger', seconds: 5 });
                }
            });
        });
    }

    return {
        createSmtpConfiguration,
        editSmtpConfiguration,
        removeSubscriber,
        sendEmails,
        editSubscribeInfo
    }

})();

window.marketingEmails = marketingEmails;
