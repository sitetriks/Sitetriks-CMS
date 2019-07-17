import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { handleApplicationRestart } from '../restart-app.js';
<<<<<<< HEAD
import { format } from 'url';
=======
>>>>>>> origin/master

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

<<<<<<< HEAD
function registerUser() {
    $('#registerUserForm').on('submit', function (ev) {
        ev.preventDefault();
        Loader.show('#fff');
        Data.postForm({ url: this.action, formData: new FormData(this) })
            .then(function (res) {
                if (res.success) {
                    handleApplicationRestart({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
                } else {
                    Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                    Loader.hide();
                }
            });

        return false;
    });
}

=======
>>>>>>> origin/master
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

<<<<<<< HEAD
function validateSmtp() {
    $('#validateSmtp').on('click', function () {
        let url = '/Setup/CheckSmtp';
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

function skipValidation() {
    $('#skipSmtp').on('click', function () {
        let url = '/Setup/FinalizeSetup';
        Data.getJson({ url: url }).then((res) => {
            if (res.success) {
                Loader.show('#fff');
                handleApplicationRestart({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
            }
        });
    });
}

function saveSmtp() {
    $('#smtp-configuration-form').on('submit', function (ev) {
        ev.preventDefault();
        let url = '/Setup/InitialSmtpConfiguration';
        let formData = new FormData(this);

        Data.postForm({ url: url, formData: formData }).then((res) => {
            if (res.success) {
                Loader.show('#fff');
                handleApplicationRestart({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
            } else {
                Notifier.createAlert({
                    containerId: '#alerts',
                    message: 'The Initial setup failed!',
                    status: 'danger'
                });
            }
        });
    });
}

window.setupInitialization = setupInitialization;
window.uploadLicense = uploadLicense;
window.registerUser = registerUser;
window.validateSmtp = validateSmtp;
window.skipValidation = skipValidation;
window.saveSmtp = saveSmtp;
=======
window.setupInitialization = setupInitialization;
window.uploadLicense = uploadLicense;
>>>>>>> origin/master
