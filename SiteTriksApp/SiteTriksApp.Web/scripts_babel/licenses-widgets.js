'use strict';

$(document).ready(function (ev) {
    $('html').on('submit', '.generate-license-form', function (ev) {
        ev.preventDefault();

        var formData = new FormData(this);
        var $notifier = $(ev.target).find('.notifier');
        $notifier.text('');

        Data.postForm({ url: '/widget/licensegeneration/index', formData: formData }).then(function (res) {
            console.log(res);

            if (res) {
                download('license.lic', res);
            }
        }, function (res) {
            $notifier.text(res.responseJSON.message);
        });

        return false;
    });

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
});