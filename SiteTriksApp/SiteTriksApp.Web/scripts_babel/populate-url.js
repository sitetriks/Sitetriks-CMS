'use strict';

function populateUrl(inputId, urlId, callback) {
    if (!inputId || !urlId) {
        return;
    }

    var $title = $(inputId);
    var $url = $(urlId);

    var titleValue = $title.val().replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();
    var urlValue = $url.val().toLowerCase();

    if (urlValue.indexOf(titleValue) !== -1) {
        urlValue = urlValue.replace(titleValue, '');
    };

    $title.on('input', function (evt) {
        titleValue = $title.val().toLowerCase();

        $url.val(titleValue.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase());

        if (callback) {
            callback(evt);
        }
    });
}