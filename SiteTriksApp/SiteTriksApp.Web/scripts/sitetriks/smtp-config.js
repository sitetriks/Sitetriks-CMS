import './layout.js';

import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { handleApplicationRestart } from '../restart-app.js';

function validateSmtp() {
    $('#validateSmtp').on('click', function () {
        let url = '/sitetriks/emails/CheckSmtp';
        let $formContent = $('#smtp-configuration-form');
        let formData = new FormData($formContent[0]);

        Data.postForm({ url: url, formData: formData }).then((res) => {
            console.log(res);
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
        });

    });
}

function sendTestEmail() {
    $('#sendTestEmail').on('click', function () {
        let url = '/sitetriks/emails/SendTestEmail';
        let $formContent = $('#smtp-configuration-form');
        let formData = new FormData($formContent[0]);
        let emailAddress = $('.test-email-address').val();

        formData.append('testEmail', emailAddress);
        console.log(formData);

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
        });

    });
}

window.validateSmtp = validateSmtp;
window.sendTestEmail = sendTestEmail;