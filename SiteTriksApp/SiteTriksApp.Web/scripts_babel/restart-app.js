'use strict';

(function () {
    function handleApplicationRestart(_ref) {
        var url = _ref.url,
            timeout = _ref.timeout,
            cutUrl = _ref.cutUrl;

        if (!url) {
            url = window.location.toString();
            url = removeLastAttributeFromUrl(url);
        }

        if (isNaN(timeout)) {
            timeout = 1000;
        }

        if (cutUrl && url) {
            url = removeLastAttributeFromUrl();
        }

        validateSiteResponds(url, timeout);
    }

    function removeLastAttributeFromUrl(url) {
        var lastIndexOfSlash = url.lastIndexOf('/');
        url = url.substring(0, lastIndexOfSlash);
        return url;
    }

    function validateSiteResponds(validateUrl, timeout) {
        setTimeout(function () {
            $.ajax({
                method: 'GET',
                url: validateUrl,
                contentType: 'application/json',
                success: function success(res) {
                    window.location = validateUrl;
                },
                error: function error(res) {
                    validateSiteResponds(validateUrl, timeout);
                }
            });
        }, timeout);
    }

    window.handleAppRestart = handleApplicationRestart;
})();