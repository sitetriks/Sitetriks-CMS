'use strict';

var Utils = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    function guid() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function isGuid(stringToTest) {
        if (stringToTest[0] === '{') {
            stringToTest = stringToTest.substring(1, stringToTest.length - 1);
        }
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(stringToTest);
    }

    function addEditor(id, width, height) {
        if (!id) {
            console.warn('Id for the text editor must be specified!');

            return;
        }
        width = width || 600;
        height = height || 300;
        if (id[0] === '#') {
            textEditor.remove(id.substring(1));
        } else {
            textEditor.remove(id);
        }

        textEditor.init(id, width, height);
    }

    function loadjscssfile(filename, filetype) {
        var fileref = void 0;
        if (filetype === 'js') {
            //if filename is a external JavaScript file
            fileref = document.createElement('script');
            fileref.setAttribute('type', 'text/javascript');
            fileref.setAttribute('src', filename);
        } else if (filetype === 'css') {
            //if filename is an external CSS file
            fileref = document.createElement('link');
            fileref.setAttribute('rel', 'stylesheet');
            fileref.setAttribute('type', 'text/css');
            fileref.setAttribute('href', filename);
        }
        if (typeof fileref !== 'undefined') {
            document.getElementsByTagName('head')[0].appendChild(fileref);
        }
    }

    function removejscssfile(filename, filetype) {
        var targetelement = filetype === 'js' ? 'script' : filetype === 'css' ? 'link' : 'none'; //determine element type to create nodelist from
        var targetattr = filetype === 'js' ? 'src' : filetype === 'css' ? 'href' : 'none'; //determine corresponding attribute to test for
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i >= 0; i--) {
            //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) !== null && allsuspects[i].getAttribute(targetattr).indexOf(filename) !== -1) {
                allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
            }
        }
    }

    function loadHandlebarsTemplates(templatesCache, templates) {
        var promises = [];

        var _loop = function _loop(i) {
            promises.push(Data.getJson({ url: templates[i].url }).then(function (res) {
                var template = Handlebars.compile(res);
                templatesCache[templates[i].name] = template;

                return true;
            }, function (res) {
                return false;
            }));
        };

        for (var i = 0; i < templates.length; i += 1) {
            _loop(i);
        }

        return Promise.all(promises);
    }

    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
        var separator = uri.indexOf('?') !== -1 ? '&' : '?';
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + '=' + value + '$2');
        } else {
            return uri + separator + key + '=' + value;
        }
    }

    function isFunction(func) {
        return func && {}.toString.call(func) === '[object Function]';
    }

    return {
        s4: s4,
        guid: guid,
        isGuid: isGuid,
        addEditor: addEditor,
        loadjscssfile: loadjscssfile,
        removejscssfile: removejscssfile,
        loadHandlebarsTemplates: loadHandlebarsTemplates,
        updateQueryStringParameter: updateQueryStringParameter,
        isFunction: isFunction
    };
}();

//---------------------------------------------------------------------------------------------------------------------------
// Global utilities events

$('body').on('change', '.st-toggle', function (ev) {
    var $trigger = $(this);
    var $target = $($trigger.attr('data-toggle'));

    if ($trigger.is(':checked')) {
        $target.each(function (_, element) {
            $(element).show();
        });
    } else {
        $target.each(function (_, element) {
            $(element).hide();
        });
    }
});