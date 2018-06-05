'use strict';

var scriptManager = function () {

    return {
        appendScript: function appendScript(filepath) {
            if ($('head script[src="' + filepath + '"]').length > 0) return;

            var ele = document.createElement('script');
            ele.setAttribute("type", "text/javascript");
            ele.setAttribute("src", filepath);
            $('head').append(ele);
        },

        appendStyle: function appendStyle(filepath) {
            if ($('head link[href="' + filepath + '"]').length > 0) return;

            var ele = document.createElement('link');
            ele.setAttribute("type", "text/css");
            ele.setAttribute("rel", "Stylesheet");
            ele.setAttribute("href", filepath);
            $('head').append(ele);
        },

        delteScriptCheck: function delteScriptCheck() {
            $("[data-delete='1']").remove();
        }
    };
}();