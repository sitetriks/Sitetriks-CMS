function handleAppRestart({ url, timeout, cutUrl }) {
    if (!url) {
        url = window.location.toString();
        url = removeLastAttributeFromUrl(url);
    }

    if (isNaN(timeout)) {
        timeout = 1000;
    }

    if (cutUrl == true && url) {        
        url = removeLastAttributeFromUrl();
    }

    validateSiteResponds(url, timeout)
}

function removeLastAttributeFromUrl(url) {
    var lastIndexOfSlash = url.lastIndexOf('/');

    url = url.substring(0, lastIndexOfSlash);

    return url;
}

function validateSiteResponds(validateUrl, timeout) {
    $.ajax({
        method: 'GET',
        url: validateUrl,
        contentType: 'application/json',
        success: function success(res) {
            window.location = validateUrl;
        },
        error: function error(res) {
            setTimeout(function () {
                validateSiteResponds(validateUrl, timeout);
            }, timeout);
        }
    });
}