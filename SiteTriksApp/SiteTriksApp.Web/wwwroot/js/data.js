var Data = (function () {

    function getJson({ url, disableCache }) {
        var headers = {};
        
        if (disableCache == true) {
            headers = {
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            }
        }

        return new Promise((resolve, reject) => {
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

    function post({ url, data, contentType }) {
        return new Promise((resolve, reject) => {
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

    function postJson({ url, data }) {
        return post({ url, data: JSON.stringify(data), contentType: 'application/json' })
    }

    function postForm({ url, formData }) {
        return new Promise((resolve, reject) => {
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

    function deleteJson({ url, data }) {
        return new Promise((resolve, reject) => {
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
        for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    return {
        getJson,
        post,
        postJson,
        postForm,
        deleteJson,
        defaultError
    }
}());

//=======================================================================================
// TODO: move
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}