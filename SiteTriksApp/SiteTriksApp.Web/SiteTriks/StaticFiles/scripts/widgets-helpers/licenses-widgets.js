import { Data } from '../common/data.js';

export function licenseWidget() {
    if ($('.generate-license-form').length < 1) {
        return;
    }

    $('.generate-license-form').on('submit', function (ev) {
        ev.preventDefault();

        let formData = new FormData(this);
        let $notifier = $(ev.target).find('.notifier');
        $notifier.text('');

        Data.postForm({ url: '/widget/licensegeneration/index', formData }).then(function (res) {
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
}
