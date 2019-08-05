import { Data } from '../common/data.js';
import { Notifier } from '../common/notifier';
import { Validator } from '../common/validator';


export function contactFormWidget() {

    let $container = $('#contactForm');
    let $validateFields = $container.find('.validate');
    let $inputFields = $('.form-control');
    let $popup = $('.popup-redirect');
    let homepage = 'https://sitetriks.com';
    let $cancelButton = $('#cancel');
    let $homepageRedirect = $('#homepageRedirect');

    $validateFields.on('input', Validator.createFieldValidationHandler());

    $('#contactForm').on('submit', function (evt) {
        evt.preventDefault();

        Data.postForm({ url: this.action, formData: new FormData(this) }).then(function success(res) {
            if (res.success) {
                console.log('successful submit');
                $inputFields.val('');
                displayPopup();

            } else {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
            }
        });

        return false;
    });

    function displayPopup() {
        $popup.css('display', 'block');
        $container.css('opacity', '0.2');
    }

    function removePopup() {
        $popup.css('display', 'none');
        $container.css('opacity', '1');
    }

    $cancelButton.on('click', removePopup);
    $homepageRedirect.on('click', function () {
        $(location).attr('href', homepage);
    });

}

