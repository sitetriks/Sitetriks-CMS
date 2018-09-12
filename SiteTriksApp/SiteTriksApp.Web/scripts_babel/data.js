'use strict';

var Data = function () {

    function getJson(_ref) {
        var url = _ref.url,
            disableCache = _ref.disableCache;

        var headers = {};

        if (disableCache == true) {
            headers = {
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            };
        }

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                headers: headers,
                method: 'GET',
                contentType: 'application/json',
                success: resolve,
                error: reject
            });
        });
    }

    function post(_ref2) {
        var url = _ref2.url,
            data = _ref2.data,
            contentType = _ref2.contentType;

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                method: 'POST',
                contentType: contentType,
                data: data,
                success: resolve,
                error: reject
            });
        });
    }

    function postJson(_ref3) {
        var url = _ref3.url,
            data = _ref3.data;

        return post({ url: url, data: JSON.stringify(data), contentType: 'application/json' });
    }

    function postForm(_ref4) {
        var url = _ref4.url,
            formData = _ref4.formData;

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                method: 'POST',
                data: formData,
                processData: false, // tell jQuery not to process the data
                contentType: false, // tell jQuery not to set contentType
                success: resolve,
                error: reject
            });
        });
    }

    function deleteJson(_ref5) {
        var url = _ref5.url,
            data = _ref5.data;

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                method: 'DELETE',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: resolve,
                error: reject
            });
        });
    }

    function defaultError() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    return {
        getJson: getJson,
        post: post,
        postJson: postJson,
        postForm: postForm,
        deleteJson: deleteJson,
        defaultError: defaultError
    };
}();

//=======================================================================================
// TODO: move
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}