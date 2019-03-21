import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { handleApplicationRestart } from '../restart-app.js';

function setupInitialization(url) {
    $('#create-site-btn').on('click', (e) => {
        if ($('#default-site-checkbox').is(':checked')) {
            e.preventDefault();
            Loader.show('#fff');
            let formData = new FormData();

            Data.postForm({ url: url, formData: formData }).then((res) => {
                if (res.success) {
                    handleApplicationRestart({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
                }
                else {
                    Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                    Loader.hide();
                }
            }, (res) => { console.log(res); });
        } else {
            $('#create-site-btn').attr('href', '/setup/registeruser');
        }
    });
}

function uploadLicense(urlWithUpload, urlWithCurrent) {
    $('input[type=file]').change(function (e) {
        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $('.selected-file').addClass('alert-success');
        $('.selected-file').html('Selected file:' + filename);
    });

    $('button[type=submit]').on('click', (e) => {
        Loader.show('#fff');
        e.preventDefault();
        let formData = new FormData();
        let licenseFile = $('#license-file')[0].files[0];
        formData.append('file', licenseFile);

        let url = urlWithUpload;

        Data.postForm({ url: url, formData: formData }).then((res) => {
            if (res.success) {
                handleApplicationRestart({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
            }
            else {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                Loader.hide();
            }
        }, (res) => { console.log(res); });
    });

    $('#continue').on('click', (e) => {
        Loader.show('#fff');
        e.preventDefault();
        let url = urlWithCurrent;

        Data.getJson({ url: url }).then((res) => {
            if (res.success) {
                handleApplicationRestart({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
            } else {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                Loader.hide();
            }
        });
    });
}

window.setupInitialization = setupInitialization;
window.uploadLicense = uploadLicense;
