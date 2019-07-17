import './layout.js';
import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { Validator } from '../common/validator.js';

function validateSmtp() {
    $('#validateSmtp').on('click', function () {
        let url = '/sitetriks/emails/CheckSmtp';
        let $formContent = $('#smtp-configuration-form');
        let formData = new FormData($formContent[0]);
        console.log($formContent);
        console.log(formData);
        Loader.show('#fff');

        Data.postForm({ url: url, formData: formData }).then((res) => {
            if (res.success) {
                Notifier.createAlert({
                    containerId: '#alerts',
                    message: 'The Smtp settings are valid!',
                    status: 'success'
                });
            } else {
                Notifier.createAlert({
                    containerId: '#alerts',
                    message: 'The Smtp settings validation failed!',
                    status: 'danger'
                });
            }
            Loader.hide();
        });

    });
}

function sendTestEmail() {
    $('#sendTestEmail').on('click', function () {
        let url = '/sitetriks/emails/SendTestEmail';
        let $formContent = $('#smtp-configuration-form');
        let formData = new FormData($formContent[0]);
        let $emailAddress = $('.test-email-address');

        let flag = true;

        if (!Validator.validate($emailAddress, 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        formData.append('testEmail', $emailAddress.val());
        if (flag) {
            Loader.show('#fff');
            Data.postForm({ url: url, formData: formData }).then((res) => {
                if (res.success) {
                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: 'The email was sent successfully!',
                        status: 'success'
                    });
                } else {
                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: 'Email sent failed!',
                        status: 'danger'
                    });
                }
                Loader.hide();

            });
        }

    });
}

function sendMarketingTestEmail() {
    $('#sendTestEmail').on('click', function () {
        let url = '/sitetriks/MarketingEmailsSmtp/SendMarketingTestEmail';
        let $formContent = $('#smtp-configuration-form');
        let formData = new FormData($formContent[0]);
        let $emailAddress = $('.test-email-address');
        let $senderList = $('.smtp-sender-list .smtp-sender');

        for (let i = 0; i < $senderList.length; i++) {
            formData.append(`Senders[${i}]`, $($senderList[i]).data().email)
        }
        
        

        let flag = true;

        if (!Validator.validate($emailAddress, 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        formData.append('testEmail', $emailAddress.val());
        if (flag) {
            Loader.show('#fff');
            Data.postForm({ url: url, formData: formData }).then((res) => {
                if (res.success) {
                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: 'The email was sent successfully!',
                        status: 'success'
                    });
                } else {
                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: 'Email sent failed!',
                        status: 'danger'
                    });
                }
                Loader.hide();

            });
        }

    });
}
window.validateSmtp = validateSmtp;
window.sendTestEmail = sendTestEmail;
window.sendMarketingTestEmail = sendMarketingTestEmail;