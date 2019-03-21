/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/files.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/common/data.js":
/*!********************************!*\
  !*** ./scripts/common/data.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Data = function () {
    var makeRequest = typeof fetch !== 'undefined' && isFunction(fetch) ? makeFetchRequest : makeAjaxRequest; // fallback to ajax if older browser

    function makeAjaxRequest(_ref) {
        var url = _ref.url,
            method = _ref.method,
            body = _ref.body,
            headers = _ref.headers,
            isForm = _ref.isForm;

        return new Promise(function (resolve, reject) {
            var params = {
                url: url,
                method: method,
                data: body,
                success: resolve,
                error: reject
            };
            if (isForm) {
                params.contentType = false; // tell jQuery not to process the data
                params.processData = false; // tell jQuery not to set contentType
            } else {
                params.headers = headers;
            }

            $.ajax(params);
        });
    }

    function makeFetchRequest(_ref2) {
        var url = _ref2.url,
            method = _ref2.method,
            body = _ref2.body,
            headers = _ref2.headers,
            isForm = _ref2.isForm;

        headers = headers || {};
        if (isForm) {
            delete headers['Content-Type'];
        } else {
            headers['Content-Type'] = 'application/json';
        }

        return fetch(url, {
            method: method,
            body: body,
            headers: headers,
            credentials: 'include'
        }).then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                if (res.headers.get('Content-Type') && res.headers.get('Content-Type').indexOf('application/json') > -1) {
                    return res.json();
                }

                return res.text();
            } else {
                return Promise.reject(res.text());
            }
        });
    }

    function getJson(_ref3) {
        var url = _ref3.url,
            disableCache = _ref3.disableCache;

        var headers = {};
        if (disableCache === true) {
            headers = {
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            };
        }

        return makeRequest({ url: url, method: 'GET', headers: headers });
    }

    function postJson(_ref4) {
        var url = _ref4.url,
            data = _ref4.data;

        return makeRequest({ url: url, method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    }

    function postForm(_ref5) {
        var url = _ref5.url,
            formData = _ref5.formData;

        return makeRequest({ url: url, method: 'POST', body: formData, isForm: true });
    }

    function deleteJson(_ref6) {
        var url = _ref6.url,
            data = _ref6.data;

        return makeRequest({ url: url, method: 'DELETE', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    }

    function defaultError() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    return {
        getJson: getJson,
        postJson: postJson,
        postForm: postForm,
        deleteJson: deleteJson,
        defaultError: defaultError
    };

    function isFunction(func) {
        return func && {}.toString.call(func) === '[object Function]';
    }
}();

exports.Data = Data;

/***/ }),

/***/ "./scripts/common/loader.js":
/*!**********************************!*\
  !*** ./scripts/common/loader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* Loader.js version 1.1 */
var Loader = function () {
    var gifSrc = '/images/loading.gif';

    return {
        //showWithProgress: function (progressBarData, color) {
        //    if (color === true) {
        //        color = '#fff';
        //    }

        //    let $parent = Blur.add({ color });

        //    let bar = ProgressBar.build({ data: progressBarData, $parent: $parent, cssClass: 'blur-content' })[0];
        //    let data = $(bar).data(progressBarData.name)
        //        .onStart();
        //},
        show: function show(color, imgSrc) {
            if (color === true) {
                color = '#fff';
            }

            if (!imgSrc) {
                imgSrc = gifSrc;
            }

            Blur.add({ color: color }).append($('<img/>', {
                src: imgSrc,
                class: 'blur-content'
            }));
        },
        hide: function hide() {
            Blur.remove();
        }
    };
}();

exports.Loader = Loader;

// Gallery registration

(function () {
    $('body').on('click', 'img.display-image, img.gallery-image', function (ev) {
        var $target = $(ev.target);
        var src = $target.attr('src');

        var $container = Blur.add({ hideOnClick: true });
        $('<img />', {
            class: 'blur-content preview-image',
            src: src
        }).appendTo($container);
    });
})();

// Helper class for loader and gallery
var Blur = function () {
    var PREVIEW_CONTAINER_CLASS = 'preview-container';
    var PREVIEW_ITEM_CONTAINER_CLASS = 'preview-item-container';
    var BLUR_ELEMENT_CLASS = 'blur';

    function addBlur(_ref) {
        var hideOnClick = _ref.hideOnClick,
            color = _ref.color,
            opacity = _ref.opacity;

        if (hideOnClick !== true) {
            hideOnClick = false;
        }

        $('html').addClass('st-no-overflow');

        var $blurElement = $('<div></div>', {
            class: BLUR_ELEMENT_CLASS
        });

        var $itemContainer = $('<div></div>', {
            class: PREVIEW_ITEM_CONTAINER_CLASS
        });

        var $previewContainer = $('<div></div>', {
            class: PREVIEW_CONTAINER_CLASS
        });

        if (hideOnClick) {
            $previewContainer.on('click', removeBlur);
            $blurElement.on('click', removeBlur);
        }

        if (color) {
            $blurElement.css('background-color', color);
        }

        if (opacity && isNaN(+opacity) && opacity >= 0 && opacity <= 1) {
            $blurElement.css('opacity', opacity);
        }

        $previewContainer.append($itemContainer);
        $('body').append($previewContainer);
        $('body').append($blurElement);

        return $itemContainer;
    }

    function removeBlur() {
        $('body').find('.' + BLUR_ELEMENT_CLASS).remove();
        $('body').find('.' + PREVIEW_CONTAINER_CLASS).remove();
        $('html').removeClass('st-no-overflow');
    }

    return {
        add: addBlur,
        remove: removeBlur
    };
}();

exports.Blur = Blur;

/***/ }),

/***/ "./scripts/common/notifier.js":
/*!************************************!*\
  !*** ./scripts/common/notifier.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Notifier = function () {

    // status is following bootstrap convention: 'danger'(red), 'warning'(yellow), 'success'(green), 'info'(blue)
    function createAlert(_ref) {
        var containerId = _ref.containerId,
            title = _ref.title,
            message = _ref.message,
            status = _ref.status,
            seconds = _ref.seconds,
            isPermanent = _ref.isPermanent,
            selector = _ref.selector;

        var $title = $('<strong></strong>', { text: title || '' });
        var $closeButton = $('<a></a>', {
            class: 'close',
            'data-dismiss': 'alert',
            'aria-label': 'close',
            html: '&times;'
        });
        var $message = $('<span></span>', { text: ' ' + (message || '') });
        var $alert = $('<div></div>', { class: 'alert alert-' + (status || 'info') });

        $alert.append($title).append($message).append($closeButton).appendTo(selector || containerId || 'body');

        if (!isPermanent) {
            setTimeout(function () {
                $alert.fadeOut(500, function () {
                    $alert.remove();
                });
            }, (seconds || 10) * 1000);
        }
    }

    return {
        createAlert: createAlert
    };
}();

exports.Notifier = Notifier;

/***/ }),

/***/ "./scripts/common/utils.js":
/*!*********************************!*\
  !*** ./scripts/common/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

    // caching loading promise to avoid duplications
    var isLoading = {};
    function loadjscssfileAsync(filename, filetype) {
        isLoading[filename] = isLoading[filename] || new Promise(function (resolve, reject) {
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
                fileref.onload = resolve;
                fileref.onerror = reject;
                document.getElementsByTagName('head')[0].appendChild(fileref);
            } else {
                reject();
            }
        }).then(function (res) {
            delete isLoading[filename];return res;
        });

        return isLoading[filename];
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

    function openInNewTab(html) {
        var newWindow = window.open('about:blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            //POPUP BLOCKED
            //if (Notifier) {
            //    Notifier.createAlert({ containerId: '#alerts', message: 'Browser does not allow opening popup windows!', status: 'danger' });
            //}
        } else {
            newWindow.document.write(html);
            newWindow.document.close();
            newWindow.focus();
        }
    }

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    }

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }

    function getAllSelectors() {
        var ret = [];
        for (var i = 0; i < document.styleSheets.length; i++) {
            var rules = document.styleSheets[i].rules || document.styleSheets[i].cssRules;
            for (var x in rules) {
                if (typeof rules[x].selectorText === 'string') ret.push(rules[x].selectorText);
            }
        }
        return ret;
    }

    function cssSelectorExists(selector) {
        var selectors = getAllSelectors();
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] === selector) return true;
        }
        return false;
    }

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

    return {
        s4: s4,
        guid: guid,
        isGuid: isGuid,
        loadjscssfile: loadjscssfile,
        loadjscssfileAsync: loadjscssfileAsync,
        removejscssfile: removejscssfile,
        updateQueryStringParameter: updateQueryStringParameter,
        isFunction: isFunction,
        openInNewTab: openInNewTab,
        replaceAll: replaceAll,
        cssSelectorExists: cssSelectorExists,
        populateUrl: populateUrl
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

exports.Utils = Utils;

/***/ }),

/***/ "./scripts/common/validator.js":
/*!*************************************!*\
  !*** ./scripts/common/validator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validator = undefined;

var _data = __webpack_require__(/*! ./data.js */ "./scripts/common/data.js");

var Validator = function () {

    function validate($element, errorMessage, validateFunc) {
        var value = $element.val();
        if (validateFunc(value)) {
            $element.css('border', '');
            $element.next('span').text('');
            return true;
        } else {
            $element.css('border', '1px solid #ff6868');
            $element.next('span').text(errorMessage || 'Invalid value!');
            return false;
        }
    }

    function hasMinimumLength(value, minLenght) {

        if (value && value.length >= minLenght) {
            return true;
        } else {
            return false;
        }
    }

    function hasMaximumLength(value, maxLenght) {
        if (value.length <= maxLenght) {
            return true;
        } else {
            return false;
        }
    }

    function isAlphaNumeric(value) {
        var pattern = /^([a-z0-9]+)$/i;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isAlphaNumericAndSemicolon(value) {
        var pattern = /^[a-zA-Z0-9;]+$/;

        return isPassing(value, pattern);
    }

    function isUrlFriendly(value) {
        var pattern = /^[a-zA-Z0-9-_]+$/;

        return isPassing(value, pattern);
    }

    function isStartingWithLetter(value) {
        var pattern = /^[a-z]/i;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function validateEmail(value) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isPassing(value, pattern) {
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isDecimalNumber(value) {
        var pattern = /^\d+\.\d{0,2}$/;
        return matchesPattern(value, pattern);
    }

    function isNumber(value) {
        var pattern = /^-?\d+\.?\d*$/;
        return matchesPattern(value, pattern);
    }

    function matchesPattern(value, pattern) {
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isFunction(func) {
        return func && {}.toString.call(func) === '[object Function]';
    }

    function isGuid(stringToTest) {
        if (stringToTest[0] === '{') {
            stringToTest = stringToTest.substring(1, stringToTest.length - 1);
        }
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(stringToTest);
    }

    function isInteger(value) {
        return value && parseInt(value) == value;
    }

    function isNumberInRange($element, min, max) {
        if (min && !validate($element, 'The value must be lower or equal to ' + max + '.', function (value) {
            return max ? +value <= +max : true;
        })) {
            return false;
        }

        if (max && !validate($element, 'The value must be greater or equal to ' + min + '.', function (value) {
            return min ? +value >= +min : true;
        })) {
            return false;
        }

        return true;
    }

    function isLenghtInRange($element, min, max) {
        if (min && !validate($element, 'The value must be at least ' + min + ' characters long.', function (value) {
            return hasMinimumLength(value, min);
        })) {
            return false;
        }

        if (max && !validate($element, 'The maximum permitted characters length is ' + max + '.', function (value) {
            return hasMaximumLength(value, max);
        })) {
            return false;
        }

        return true;
    }

    /**
     * Creates a function that will validate all elements with class 'validate' inside the wrapper.
     * @param {Function} customValidationFunc custom validation function for handling specific logic. Will recieve the HTMLElement.
     * Must return true if validation is passing.
     * @returns {Function} Function
     */
    function createFieldsValidation(customValidationFunc) {
        function validateFields(ev) {
            if (!this && !ev && !ev.target) {
                console.error('No HTMLElement has been provided, ');
                return false;
            }

            var $elementsToValidate = $(this || ev.target).find('.validate');
            var flag = false;

            $elementsToValidate.each(function (_, element) {
                var $element = $(element);
                if (!validateField($element, customValidationFunc)) {
                    flag = true;
                }
            });

            return !flag;
        }

        return validateFields;
    }

    function validateField($element, customValidationFunc) {
        var validationMessages = {
            'required': 'Required field!',
            'email': 'Invalid E-Mail!',
            'int': 'Not an integer number!',
            'number': 'Not a number!',
            'guid': 'Invalid guid!'
        };

        var validationTypes = ($element.attr('data-validation-type') || '').split(' ');
        var innerFlag = false;
        var min = $element.attr('data-min');
        var max = $element.attr('data-max');

        for (var i = 0; i < validationTypes.length; i += 1) {
            var validationMessage = $element.attr('data-message-' + validationTypes[i]) || validationMessages[validationTypes[i]];

            switch (validationTypes[i]) {
                case 'required':
                    if (!validate($element, validationMessage, function (value) {
                        return !!value;
                    })) {
                        innerFlag = true;
                    }

                    break;
                case 'email':
                    if (!validate($element, validationMessage, validateEmail)) {
                        innerFlag = true;
                    }

                    break;
                case 'number':
                    if (!validate($element, validationMessage, isNumber)) {
                        innerFlag = true;
                        break;
                    }

                    innerFlag = !isNumberInRange($element, min, max);
                    break;
                case 'decimal':
                case 'double':
                case 'float':
                    if (!Validator.validate($element, name + ' must be decimal floating point number!', function (value) {
                        return value && parseFloat(value) == value;
                    })) {
                        innerFlag = true;
                        break;
                    }

                    innerFlag = !isNumberInRange($element, min, max);
                    break;
                case 'int':
                    if (!validate($element, validationMessage, isInteger)) {
                        innerFlag = true;
                        break;
                    }

                    innerFlag = !isNumberInRange($element, min, max);
                    break;

                case 'guid':
                    if (!validate($element, validationMessage, isGuid)) {
                        innerFlag = true;
                    }

                    break;
                case 'length':
                    innerFlag = !isLenghtInRange($element, min, max);

                    break;
                default:
                    if (isFunction(customValidationFunc)) {
                        innerFlag = !customValidationFunc($element);
                    }

                    break;
            }

            if (innerFlag) {
                return false;
            }
        }

        return !innerFlag;
    }

    function createFieldValidationHandler(customValidationFunc) {
        return function (ev) {
            var $target = ev ? $(ev.target) : $(this);
            validateField($target, customValidationFunc);
        };
    }

    function createValidateOnChangeHandler(name, url, minLenght, extraValues) {
        var timer = 0;

        function validateUrlOnChange(ev) {
            var $input = $(this);
            var min = minLenght || $input.attr('data-min');
            if (timer) {
                clearTimeout(timer);
            }

            var flag = false;
            if (min && !Validator.validate($input, 'The value must be atleast ' + min + ' characters long!', function (val) {
                return Validator.hasMinimumLength(val, +min);
            })) {
                flag = true;
            }

            if (!flag) {
                var value = $input.val();
                timer = setTimeout(function () {
                    var body = {};
                    body[name] = value;
                    if (extraValues) {
                        for (var key in extraValues) {
                            body[key] = extraValues[key];
                        }
                    }

                    _data.Data.postJson({ url: url, data: body }).then(function (res) {
                        Validator.validate($input, res.message || 'Value is invalid or already in use!', function (val) {
                            return res.success;
                        });
                    }, _data.Data.defaultError);
                }, 500);
                $input.next('span').text('');
            }
        }

        return validateUrlOnChange;
    }

    function validateUrl(validateUrl, $urlField, $btnSubmit) {
        var pattern = new RegExp(/^[\w\-\.]+$/i);
        if (!validate($urlField, 'Url can only contain letters, numbers, dash(-), point(.) and underscore(_) !', function (v) {
            return matchesPattern(v, pattern);
        })) {
            $btnSubmit.attr('disabled', true);
            return;
        }

        _data.Data.getJson({ url: validateUrl }).then(function (res) {
            if (validate($urlField, 'Url is invalid or already in use!', function (v) {
                return res.success;
            })) {
                $btnSubmit.attr('disabled', false);
            } else {
                $btnSubmit.attr('disabled', true);
            }
        });
    }

    function validateUniquenes(name, classToValidate) {
        var counter = 0;
        var $allNames = $('.' + classToValidate);
        for (name in $allNames) {
            if ($allNames[name].value === name) {
                counter++;
            }
        }

        if (counter > 1) {
            return false;
        } else {
            return true;
        }
    }

    return {
        validate: validate,
        isAlphaNumeric: isAlphaNumeric,
        hasMinimumLength: hasMinimumLength,
        validateEmail: validateEmail,
        isStartingWithLetter: isStartingWithLetter,
        isUrlFriendly: isUrlFriendly,
        isNumber: isNumber,
        isDecimalNumber: isDecimalNumber,
        isAlphaNumericAndSemicolon: isAlphaNumericAndSemicolon,
        isFunction: isFunction,
        isGuid: isGuid,
        createFieldsValidation: createFieldsValidation,
        isInteger: isInteger,
        createValidateOnChangeHandler: createValidateOnChangeHandler,
        validateField: validateField,
        createFieldValidationHandler: createFieldValidationHandler,
        validateUniquenes: validateUniquenes,
        validateUrl: validateUrl
    };
}();

exports.Validator = Validator;

/***/ }),

/***/ "./scripts/modules/warning-window.js":
/*!*******************************************!*\
  !*** ./scripts/modules/warning-window.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WarningWindow = function (logger) {
    logger = logger || console;
    var confirmationMessage = 'It looks like you have been editing something. ' + 'If you leave before saving, your changes will be lost.';

    function onUnload(e) {
        if (!hasChanges()) {
            return;
        }

        e.preventDefault();
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    //window.onbeforeunload = onUnload;
    //var lastClickOnElement;
    //$(document).click(function (event) {
    //    lastClickOnElement= $(event.target);
    //});

    var lastClickedElement;
    document.addEventListener('click', function (e) {
        e = e || window.event;
        lastClickedElement = e.target || e.srcElement;
        //lastClicked = target.textContent || target.innerText;
    }, false);

    function hasTextAreasWithText() {
        var $textareas = $('textarea');
        //Add tinymce get text from textarea likes input
        if ($textareas.length > 0) {
            return true;
        }

        return false;
    }

    function hasInputsWithText() {
        var hasText = false;
        var $inputs = $('input[type=text]').each(function () {
            if ($(this).val() != '') {
                hasText = true;
                return;
            }
        });

        return hasText;
    }

    function checkElementForDataAttr(lastClickedElement, attribute) {
        var attr = $(lastClickedElement).data(attribute);

        if (attr) {
            return attr;
        }

        return '';
    }

    function checkUrl(linkPath) {
        logger.log("Check url");
        var attr = checkElementForDataAttr(getLastClickedElement(), "disableLink");

        if (attr != "") {
            logger.log("Url checking is disabled");
            return true;
        }
        logger.log("Url checkking is enabled");

        if (linkPath.indexOf('create') == -1 && linkPath.indexOf('edit') == -1) {
            return false;
        }

        return true;
    }

    function getLastClickedElement() {
        var lastClickedElement = document.activeElement;
        var $element = $(lastClickedElement);

        return $element;
    }

    function submitButtonCheck(lastClickedElement, element) {
        if (lastClickedElement.tagName === "INPUT" && element.attr("type") === "submit") {
            return false;
        }

        if (lastClickedElement.tagName === "BUTTON" && element.hasClass("button-submit")) {
            return false;
        }

        if (lastClickedElement.tagName === "BUTTON" && element.attr('type') == 'submit') {
            return false;
        }

        return !element.attr('data-disable-warning');
    }

    function hasChanges() {
        if (!lastClickedElement) {
            return;
        }

        console.log(lastClickedElement);
        var $element = $(lastClickedElement);
        var linkPath = window.location.pathname;

        if (!submitButtonCheck(lastClickedElement, $element)) {
            return false;
        }

        if (checkElementForDataAttr(lastClickedElement, "disable-warning") != "") {
            return false;
        }

        if (!checkUrl(linkPath)) {
            return false;
        }

        var hasChanges = hasTextAreasWithText() || hasInputsWithText();

        return hasChanges;
    }

    //---------------------------------------------------------------------------------------------------------
    var inputChanged = false;
    document.addEventListener('input', function (ev) {
        inputChanged = true;
    });

    function defaultStopLeave(ev) {
        var isSaving = lastClickedElement && !submitButtonCheck(lastClickedElement, $(lastClickedElement));
        if (isSaving) {
            return;
        }

        if (!inputChanged) {
            return;
        }

        ev.preventDefault;
        ev.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    //window.onbeforeunload = defaultStopLeave;

    return {
        attach: function attach() {
            inputChanged = false;
            lastClickedElement = null;
            window.onbeforeunload = defaultStopLeave;
            return this;
        },
        detach: function detach() {
            window.onbeforeunload = null;
            return this;
        },
        force: function force() {
            inputChanged = true;
            return this;
        }
    };
}();

exports.WarningWindow = WarningWindow;

/***/ }),

/***/ "./scripts/sitetriks/files.js":
/*!************************************!*\
  !*** ./scripts/sitetriks/files.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initFilesEdit = initFilesEdit;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _utils = __webpack_require__(/*! ../common/utils.js */ "./scripts/common/utils.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function initFilesEdit(expirationDate, libraryAllowed) {
    var $inputFile = $('#input-update-file');
    var $dateTimePicker = $('#date-picker');
    var $title = $('#title');
    var $altText = $('#alt');
    var $notifier = $('#alerts');

    _warningWindow.WarningWindow.attach();

    $dateTimePicker.datetimepicker({
        minDate: new Date()
    }).val(expirationDate);

    var libraryAllowed = _utils.Utils.replaceAll(_utils.Utils.replaceAll(libraryAllowed, '*', ''), ',', '|');

    if ($inputFile[0].files.length === 1) {
        editFileDisplayImage.apply($inputFile);
    }

    //------------------------------------------------------------------
    // moved from edit-file-scripts.js
    var $advancedFeatures = $('.advanced-features');
    var $advancedButton = $advancedFeatures.find('.toggle-button');
    var $featuresList = $advancedFeatures.find('.features-list');
    var $arrows = $advancedFeatures.find('.arrow');

    $advancedButton.on('click', function () {
        $arrows.toggle();
        $featuresList.toggle();
    });

    //------------------------------------------------------------------

    bindEvents();

    function editFileDisplayImage(ev) {
        var file = $(this)[0].files[0];

        var regExp = new RegExp(libraryAllowed);

        if (!regExp.test(file.name) && !regExp.test(file.type)) {
            _notifier.Notifier.createAlert({
                containerId: '#alerts',
                status: 'danger',
                title: 'Error',
                message: file.name + ' file type is not supported by selected library and will not be uploaded!'
            });

            return;
        } else {
            var fileName = file.name.substring(0, file.name.lastIndexOf('.'));
            $title.val(fileName);
            $altText.val(fileName);
            $('.display-image').attr('src', window.URL.createObjectURL(file));
        }
    }

    function submitFileForm(ev) {
        _loader.Loader.show('#fff');
        var flag = false;

        if (!_validator.Validator.validate($title, 'Name must be atleast 3 characters!', function (val) {
            return _validator.Validator.hasMinimumLength(val.trim(), 3);
        })) {
            flag = true;
        }

        if (!flag) {
            _data.Data.postForm({ url: '/sitetriks/files/edit', formData: new FormData(this) }).then(function (res) {
                if (res.success) {
                    location.replace('/sitetriks/libraries');
                } else {
                    _loader.Loader.hide();

                    _notifier.Notifier.createAlert({
                        containerId: '#alerts',
                        message: res.message,
                        status: 'danger'
                    });
                }
            });
        } else {
            _loader.Loader.hide();
        }

        ev.preventDefault();
        return false;
    }

    $('.thumbnail-image-delete').on('click', function () {
        var id = $(this).attr('data-id');
        var $wrapper = $(this).parents('.thumbnail-wrapper');

        _data.Data.getJson({ url: '/sitetriks/files/DeleteSingleFile?id=' + id, formData: new FormData() }).then(function (res) {
            if (res.success) {
                $wrapper.remove();
                _notifier.Notifier.createAlert({
                    containerId: $notifier,
                    message: 'Successfully deleting a thumbnail',
                    status: 'success'
                });
            } else {
                _notifier.Notifier.createAlert({
                    containerId: $notifier,
                    message: 'We were unable to delete this thumbnail',
                    status: 'danger'
                });
            }
        }).then(function () {
            location.reload();
        });
    });

    $('#generate-thumbnails').on('click', function () {
        var id = $(this).attr('data-fileId');

        _data.Data.postJson({ url: '/sitetriks/files/GenerateThumbnailsForFile', data: id }).then(function (res) {
            if (res.success) {
                _notifier.Notifier.createAlert({
                    containerId: $notifier,
                    message: 'Successfully regenerated thumbnails',
                    status: 'success'
                });
                location.reload();
            } else {
                _notifier.Notifier.createAlert({
                    containerId: $notifier,
                    message: 'We were unable to generate thumbnails for the image.',
                    status: 'danger'
                });
            }
        });
    });

    function openDatePicker() {
        $dateTimePicker.focus();
    }

    function bindEvents() {
        $inputFile.on('change', editFileDisplayImage);
        $('#submit-form').on('submit', submitFileForm);
        $dateTimePicker.next('span.input-group-addon').on('click', openDatePicker);
    }

    function dispose() {
        $inputFile.off('change', editFileDisplayImage);
        $('#submit-form').off('submit', submitFileForm);
        $dateTimePicker.next('span.input-group-addon').off('click', openDatePicker);
    }
}

window.initFilesEdit = initFilesEdit;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy9maWxlcy5qcyJdLCJuYW1lcyI6WyJEYXRhIiwibWFrZVJlcXVlc3QiLCJmZXRjaCIsImlzRnVuY3Rpb24iLCJtYWtlRmV0Y2hSZXF1ZXN0IiwibWFrZUFqYXhSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJpc0Zvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcmFtcyIsImRhdGEiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiJCIsImFqYXgiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsInRleHQiLCJnZXRKc29uIiwiZGlzYWJsZUNhY2hlIiwicG9zdEpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdEZvcm0iLCJmb3JtRGF0YSIsImRlbGV0ZUpzb24iLCJkZWZhdWx0RXJyb3IiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJ0b1N0cmluZyIsImNhbGwiLCJMb2FkZXIiLCJnaWZTcmMiLCJzaG93IiwiY29sb3IiLCJpbWdTcmMiLCJCbHVyIiwiYWRkIiwiYXBwZW5kIiwic3JjIiwiY2xhc3MiLCJoaWRlIiwicmVtb3ZlIiwib24iLCJldiIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJhdHRyIiwiJGNvbnRhaW5lciIsImhpZGVPbkNsaWNrIiwiYXBwZW5kVG8iLCJQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyIsIlBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MiLCJCTFVSX0VMRU1FTlRfQ0xBU1MiLCJhZGRCbHVyIiwib3BhY2l0eSIsImFkZENsYXNzIiwiJGJsdXJFbGVtZW50IiwiJGl0ZW1Db250YWluZXIiLCIkcHJldmlld0NvbnRhaW5lciIsInJlbW92ZUJsdXIiLCJjc3MiLCJpc05hTiIsImZpbmQiLCJyZW1vdmVDbGFzcyIsIk5vdGlmaWVyIiwiY3JlYXRlQWxlcnQiLCJjb250YWluZXJJZCIsInRpdGxlIiwibWVzc2FnZSIsInNlY29uZHMiLCJpc1Blcm1hbmVudCIsInNlbGVjdG9yIiwiJHRpdGxlIiwiJGNsb3NlQnV0dG9uIiwiaHRtbCIsIiRtZXNzYWdlIiwiJGFsZXJ0Iiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJVdGlscyIsInM0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiZ3VpZCIsImlzR3VpZCIsInN0cmluZ1RvVGVzdCIsInJlZ2V4R3VpZCIsInRlc3QiLCJsb2FkanNjc3NmaWxlIiwiZmlsZW5hbWUiLCJmaWxldHlwZSIsImZpbGVyZWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwiaXNMb2FkaW5nIiwibG9hZGpzY3NzZmlsZUFzeW5jIiwib25sb2FkIiwib25lcnJvciIsInJlbW92ZWpzY3NzZmlsZSIsInRhcmdldGVsZW1lbnQiLCJ0YXJnZXRhdHRyIiwiYWxsc3VzcGVjdHMiLCJnZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlciIsInVyaSIsImtleSIsInZhbHVlIiwicmUiLCJSZWdFeHAiLCJzZXBhcmF0b3IiLCJtYXRjaCIsInJlcGxhY2UiLCJvcGVuSW5OZXdUYWIiLCJuZXdXaW5kb3ciLCJ3aW5kb3ciLCJvcGVuIiwiY2xvc2VkIiwid3JpdGUiLCJjbG9zZSIsImZvY3VzIiwiZXNjYXBlUmVnRXhwIiwic3RyIiwicmVwbGFjZUFsbCIsImdldEFsbFNlbGVjdG9ycyIsInJldCIsInN0eWxlU2hlZXRzIiwicnVsZXMiLCJjc3NSdWxlcyIsIngiLCJzZWxlY3RvclRleHQiLCJwdXNoIiwiY3NzU2VsZWN0b3JFeGlzdHMiLCJzZWxlY3RvcnMiLCJwb3B1bGF0ZVVybCIsImlucHV0SWQiLCJ1cmxJZCIsImNhbGxiYWNrIiwiJHVybCIsInRpdGxlVmFsdWUiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsInVybFZhbHVlIiwiZXZ0IiwiJHRyaWdnZXIiLCJpcyIsImVhY2giLCJfIiwiZWxlbWVudCIsIlZhbGlkYXRvciIsInZhbGlkYXRlIiwiJGVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZUZ1bmMiLCJuZXh0IiwiaGFzTWluaW11bUxlbmd0aCIsIm1pbkxlbmdodCIsImhhc01heGltdW1MZW5ndGgiLCJtYXhMZW5naHQiLCJpc0FscGhhTnVtZXJpYyIsInBhdHRlcm4iLCJpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbiIsImlzUGFzc2luZyIsImlzVXJsRnJpZW5kbHkiLCJpc1N0YXJ0aW5nV2l0aExldHRlciIsInZhbGlkYXRlRW1haWwiLCJpc0RlY2ltYWxOdW1iZXIiLCJtYXRjaGVzUGF0dGVybiIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwicGFyc2VJbnQiLCJpc051bWJlckluUmFuZ2UiLCJtaW4iLCJtYXgiLCJpc0xlbmdodEluUmFuZ2UiLCJjcmVhdGVGaWVsZHNWYWxpZGF0aW9uIiwiY3VzdG9tVmFsaWRhdGlvbkZ1bmMiLCJ2YWxpZGF0ZUZpZWxkcyIsIiRlbGVtZW50c1RvVmFsaWRhdGUiLCJmbGFnIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlcyIsInZhbGlkYXRpb25UeXBlcyIsInNwbGl0IiwiaW5uZXJGbGFnIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJuYW1lIiwicGFyc2VGbG9hdCIsImNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIiLCJjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlciIsImV4dHJhVmFsdWVzIiwidGltZXIiLCJ2YWxpZGF0ZVVybE9uQ2hhbmdlIiwiJGlucHV0IiwiY2xlYXJUaW1lb3V0IiwidmFsaWRhdGVVcmwiLCIkdXJsRmllbGQiLCIkYnRuU3VibWl0IiwidiIsInZhbGlkYXRlVW5pcXVlbmVzIiwiY2xhc3NUb1ZhbGlkYXRlIiwiY291bnRlciIsIiRhbGxOYW1lcyIsIldhcm5pbmdXaW5kb3ciLCJsb2dnZXIiLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJlIiwiaGFzQ2hhbmdlcyIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaGFzVGV4dEFyZWFzV2l0aFRleHQiLCIkdGV4dGFyZWFzIiwiaGFzSW5wdXRzV2l0aFRleHQiLCJoYXNUZXh0IiwiJGlucHV0cyIsImNoZWNrRWxlbWVudEZvckRhdGFBdHRyIiwiYXR0cmlidXRlIiwiY2hlY2tVcmwiLCJsaW5rUGF0aCIsImdldExhc3RDbGlja2VkRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdWJtaXRCdXR0b25DaGVjayIsInRhZ05hbWUiLCJoYXNDbGFzcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbnB1dENoYW5nZWQiLCJkZWZhdWx0U3RvcExlYXZlIiwiaXNTYXZpbmciLCJhdHRhY2giLCJvbmJlZm9yZXVubG9hZCIsImRldGFjaCIsImZvcmNlIiwiaW5pdEZpbGVzRWRpdCIsImV4cGlyYXRpb25EYXRlIiwibGlicmFyeUFsbG93ZWQiLCIkaW5wdXRGaWxlIiwiJGRhdGVUaW1lUGlja2VyIiwiJGFsdFRleHQiLCIkbm90aWZpZXIiLCJkYXRldGltZXBpY2tlciIsIm1pbkRhdGUiLCJEYXRlIiwiZmlsZXMiLCJlZGl0RmlsZURpc3BsYXlJbWFnZSIsImFwcGx5IiwiJGFkdmFuY2VkRmVhdHVyZXMiLCIkYWR2YW5jZWRCdXR0b24iLCIkZmVhdHVyZXNMaXN0IiwiJGFycm93cyIsInRvZ2dsZSIsImJpbmRFdmVudHMiLCJmaWxlIiwicmVnRXhwIiwidHlwZSIsImZpbGVOYW1lIiwibGFzdEluZGV4T2YiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdWJtaXRGaWxlRm9ybSIsInRyaW0iLCJGb3JtRGF0YSIsImlkIiwiJHdyYXBwZXIiLCJwYXJlbnRzIiwicmVsb2FkIiwib3BlbkRhdGVQaWNrZXIiLCJkaXNwb3NlIiwib2ZmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsT0FBUSxZQUFZO0FBQ3BCLFFBQUlDLGNBQWMsT0FBT0MsS0FB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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvZmlsZXMuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsInZhciBVdGlscyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzR3VpZChzdHJpbmdUb1Rlc3QpIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9UZXN0WzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgc3RyaW5nVG9UZXN0ID0gc3RyaW5nVG9UZXN0LnN1YnN0cmluZygxLCBzdHJpbmdUb1Rlc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWdleEd1aWQgPSAvXihcXHspezAsMX1bMC05YS1mQS1GXXs4fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezEyfShcXH0pezAsMX0kL2dpO1xyXG4gICAgICAgIHJldHVybiByZWdleEd1aWQudGVzdChzdHJpbmdUb1Rlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRqc2Nzc2ZpbGUoZmlsZW5hbWUsIGZpbGV0eXBlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVyZWY7XHJcbiAgICAgICAgaWYgKGZpbGV0eXBlID09PSAnanMnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYSBleHRlcm5hbCBKYXZhU2NyaXB0IGZpbGVcclxuICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZmlsZXR5cGUgPT09ICdjc3MnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYW4gZXh0ZXJuYWwgQ1NTIGZpbGVcclxuICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdocmVmJywgZmlsZW5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGZpbGVyZWYgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZmlsZXJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhY2hpbmcgbG9hZGluZyBwcm9taXNlIHRvIGF2b2lkIGR1cGxpY2F0aW9uc1xyXG4gICAgbGV0IGlzTG9hZGluZyA9IHt9O1xyXG4gICAgZnVuY3Rpb24gbG9hZGpzY3NzZmlsZUFzeW5jKGZpbGVuYW1lLCBmaWxldHlwZSkge1xyXG4gICAgICAgIGlzTG9hZGluZ1tmaWxlbmFtZV0gPSBpc0xvYWRpbmdbZmlsZW5hbWVdIHx8IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpbGVyZWY7XHJcbiAgICAgICAgICAgIGlmIChmaWxldHlwZSA9PT0gJ2pzJykgeyAvL2lmIGZpbGVuYW1lIGlzIGEgZXh0ZXJuYWwgSmF2YVNjcmlwdCBmaWxlXHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZXR5cGUgPT09ICdjc3MnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYW4gZXh0ZXJuYWwgQ1NTIGZpbGVcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVyZWYgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGZpbGVyZWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgZGVsZXRlIGlzTG9hZGluZ1tmaWxlbmFtZV07IHJldHVybiByZXM7IH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNMb2FkaW5nW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVqc2Nzc2ZpbGUoZmlsZW5hbWUsIGZpbGV0eXBlKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldGVsZW1lbnQgPSBmaWxldHlwZSA9PT0gJ2pzJyA/ICdzY3JpcHQnIDogZmlsZXR5cGUgPT09ICdjc3MnID8gJ2xpbmsnIDogJ25vbmUnOyAvL2RldGVybWluZSBlbGVtZW50IHR5cGUgdG8gY3JlYXRlIG5vZGVsaXN0IGZyb21cclxuICAgICAgICBsZXQgdGFyZ2V0YXR0ciA9IGZpbGV0eXBlID09PSAnanMnID8gJ3NyYycgOiBmaWxldHlwZSA9PT0gJ2NzcycgPyAnaHJlZicgOiAnbm9uZSc7IC8vZGV0ZXJtaW5lIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHRvIHRlc3QgZm9yXHJcbiAgICAgICAgbGV0IGFsbHN1c3BlY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFyZ2V0ZWxlbWVudCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGFsbHN1c3BlY3RzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHsgLy9zZWFyY2ggYmFja3dhcmRzIHdpdGhpbiBub2RlbGlzdCBmb3IgbWF0Y2hpbmcgZWxlbWVudHMgdG8gcmVtb3ZlXHJcbiAgICAgICAgICAgIGlmIChhbGxzdXNwZWN0c1tpXSAmJiBhbGxzdXNwZWN0c1tpXS5nZXRBdHRyaWJ1dGUodGFyZ2V0YXR0cikgIT09IG51bGwgJiYgYWxsc3VzcGVjdHNbaV0uZ2V0QXR0cmlidXRlKHRhcmdldGF0dHIpLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYWxsc3VzcGVjdHNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhbGxzdXNwZWN0c1tpXSk7IC8vcmVtb3ZlIGVsZW1lbnQgYnkgY2FsbGluZyBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmksIGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcoWz8mXSknICsga2V5ICsgJz0uKj8oJnwkKScsICdpJyk7XHJcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nO1xyXG4gICAgICAgIGlmICh1cmkubWF0Y2gocmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmkucmVwbGFjZShyZSwgJyQxJyArIGtleSArICc9JyArIHZhbHVlICsgJyQyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJpICsgc2VwYXJhdG9yICsga2V5ICsgJz0nICsgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkluTmV3VGFiKGh0bWwpIHtcclxuICAgICAgICBsZXQgbmV3V2luZG93ID0gd2luZG93Lm9wZW4oJ2Fib3V0OmJsYW5rJyk7XHJcbiAgICAgICAgaWYgKCFuZXdXaW5kb3cgfHwgbmV3V2luZG93LmNsb3NlZCB8fCB0eXBlb2YgbmV3V2luZG93LmNsb3NlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy9QT1BVUCBCTE9DS0VEXHJcbiAgICAgICAgICAgIC8vaWYgKE5vdGlmaWVyKSB7XHJcbiAgICAgICAgICAgIC8vICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgbWVzc2FnZTogJ0Jyb3dzZXIgZG9lcyBub3QgYWxsb3cgb3BlbmluZyBwb3B1cCB3aW5kb3dzIScsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1dpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcclxuICAgICAgICAgICAgbmV3V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIG5ld1dpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQWxsKHN0ciwgZmluZCwgcmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsU2VsZWN0b3JzKCkge1xyXG4gICAgICAgIGxldCByZXQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBydWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLnJ1bGVzIHx8IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLmNzc1J1bGVzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4IGluIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJ1bGVzW3hdLnNlbGVjdG9yVGV4dCA9PT0gJ3N0cmluZycpIHJldC5wdXNoKHJ1bGVzW3hdLnNlbGVjdG9yVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjc3NTZWxlY3RvckV4aXN0cyhzZWxlY3Rvcikge1xyXG4gICAgICAgIGxldCBzZWxlY3RvcnMgPSBnZXRBbGxTZWxlY3RvcnMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzW2ldID09PSBzZWxlY3RvcikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVybChpbnB1dElkLCB1cmxJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWlucHV0SWQgfHwgIXVybElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciAkdGl0bGUgPSAkKGlucHV0SWQpO1xyXG4gICAgICAgIHZhciAkdXJsID0gJCh1cmxJZCk7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZVZhbHVlID0gJHRpdGxlLnZhbCgpLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHVybFZhbHVlID0gJHVybC52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAodXJsVmFsdWUuaW5kZXhPZih0aXRsZVZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdXJsVmFsdWUgPSB1cmxWYWx1ZS5yZXBsYWNlKHRpdGxlVmFsdWUsICcnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkdGl0bGUub24oJ2lucHV0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICB0aXRsZVZhbHVlID0gJHRpdGxlLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAkdXJsLnZhbCh0aXRsZVZhbHVlLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzNCxcclxuICAgICAgICBndWlkLFxyXG4gICAgICAgIGlzR3VpZCxcclxuICAgICAgICBsb2FkanNjc3NmaWxlLFxyXG4gICAgICAgIGxvYWRqc2Nzc2ZpbGVBc3luYyxcclxuICAgICAgICByZW1vdmVqc2Nzc2ZpbGUsXHJcbiAgICAgICAgdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIsXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBvcGVuSW5OZXdUYWIsXHJcbiAgICAgICAgcmVwbGFjZUFsbCxcclxuICAgICAgICBjc3NTZWxlY3RvckV4aXN0cyxcclxuICAgICAgICBwb3B1bGF0ZVVybFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEdsb2JhbCB1dGlsaXRpZXMgZXZlbnRzXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuc3QtdG9nZ2xlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICBsZXQgJHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgbGV0ICR0YXJnZXQgPSAkKCR0cmlnZ2VyLmF0dHIoJ2RhdGEtdG9nZ2xlJykpO1xyXG5cclxuICAgIGlmICgkdHJpZ2dlci5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkgeyAkKGVsZW1lbnQpLnNob3coKTsgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkgeyAkKGVsZW1lbnQpLmhpZGUoKTsgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgVXRpbHMgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vZGF0YS5qcyc7XHJcblxyXG52YXIgVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZSgkZWxlbWVudCwgZXJyb3JNZXNzYWdlLCB2YWxpZGF0ZUZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAkZWxlbWVudC52YWwoKTtcclxuICAgICAgICBpZiAodmFsaWRhdGVGdW5jKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgI2ZmNjg2OCcpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5uZXh0KCdzcGFuJykudGV4dChlcnJvck1lc3NhZ2UgfHwgJ0ludmFsaWQgdmFsdWUhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWluaW11bUxlbmd0aCh2YWx1ZSwgbWluTGVuZ2h0KSB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPj0gbWluTGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWF4aW11bUxlbmd0aCh2YWx1ZSwgbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5naHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpYyh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oW2EtejAtOV0rKSQvaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16QS1aMC05O10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVXJsRnJpZW5kbHkodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOS1fXSskLztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTdGFydGluZ1dpdGhMZXR0ZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2Etel0vaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRGVjaW1hbE51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15cXGQrXFwuXFxkezAsMn0kLztcclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXi0/XFxkK1xcLj9cXGQqJC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0d1aWQoc3RyaW5nVG9UZXN0KSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ1RvVGVzdFswXSA9PT0gJ3snKSB7XHJcbiAgICAgICAgICAgIHN0cmluZ1RvVGVzdCA9IHN0cmluZ1RvVGVzdC5zdWJzdHJpbmcoMSwgc3RyaW5nVG9UZXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVnZXhHdWlkID0gL14oXFx7KXswLDF9WzAtOWEtZkEtRl17OH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXsxMn0oXFx9KXswLDF9JC9naTtcclxuICAgICAgICByZXR1cm4gcmVnZXhHdWlkLnRlc3Qoc3RyaW5nVG9UZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgJiYgcGFyc2VJbnQodmFsdWUpID09IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGxvd2VyIG9yIGVxdWFsIHRvICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1heCA/ICt2YWx1ZSA8PSArbWF4IDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heCAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvICR7bWlufS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1pbiA/ICt2YWx1ZSA+PSArbWluIDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmIChtaW4gJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZy5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbik7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIG1heGltdW0gcGVybWl0dGVkIGNoYXJhY3RlcnMgbGVuZ3RoIGlzICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heCk7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB2YWxpZGF0ZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAndmFsaWRhdGUnIGluc2lkZSB0aGUgd3JhcHBlci5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbVZhbGlkYXRpb25GdW5jIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciBoYW5kbGluZyBzcGVjaWZpYyBsb2dpYy4gV2lsbCByZWNpZXZlIHRoZSBIVE1MRWxlbWVudC5cclxuICAgICAqIE11c3QgcmV0dXJuIHRydWUgaWYgdmFsaWRhdGlvbiBpcyBwYXNzaW5nLlxyXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMoZXYpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzICYmICFldiAmJiAhZXYudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBIVE1MRWxlbWVudCBoYXMgYmVlbiBwcm92aWRlZCwgJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCAkZWxlbWVudHNUb1ZhbGlkYXRlID0gJCh0aGlzIHx8IGV2LnRhcmdldCkuZmluZCgnLnZhbGlkYXRlJyk7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudHNUb1ZhbGlkYXRlLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoJGVsZW1lbnQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhZmxhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZUZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZXMgPSB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCBmaWVsZCEnLFxyXG4gICAgICAgICAgICAnZW1haWwnOiAnSW52YWxpZCBFLU1haWwhJyxcclxuICAgICAgICAgICAgJ2ludCc6ICdOb3QgYW4gaW50ZWdlciBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ251bWJlcic6ICdOb3QgYSBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ2d1aWQnOiAnSW52YWxpZCBndWlkISdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdGlvblR5cGVzID0gKCRlbGVtZW50LmF0dHIoJ2RhdGEtdmFsaWRhdGlvbi10eXBlJykgfHwgJycpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IGlubmVyRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtaW4gPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1pbicpO1xyXG4gICAgICAgIGxldCBtYXggPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1heCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRpb25UeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1lc3NhZ2UtJyArIHZhbGlkYXRpb25UeXBlc1tpXSkgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW3ZhbGlkYXRpb25UeXBlc1tpXV07XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkYXRpb25UeXBlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICEhdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgdmFsaWRhdGVFbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVjaW1hbCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkb3VibGUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmxvYXQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCRlbGVtZW50LCBuYW1lICsgJyBtdXN0IGJlIGRlY2ltYWwgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIScsICh2YWx1ZSkgPT4geyByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZSkgPT0gdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW50JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdndWlkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNHdWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc0xlbmdodEluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhY3VzdG9tVmFsaWRhdGlvbkZ1bmMoJGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbm5lckZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFpbm5lckZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSBldiA/ICQoZXYudGFyZ2V0KSA6ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmllbGQoJHRhcmdldCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIobmFtZSwgdXJsLCBtaW5MZW5naHQsIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVVcmxPbkNoYW5nZShldikge1xyXG4gICAgICAgICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgbGV0IG1pbiA9IG1pbkxlbmdodCB8fCAkaW5wdXQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAobWluICYmICFWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0LCBgVGhlIHZhbHVlIG11c3QgYmUgYXRsZWFzdCAke21pbn0gY2hhcmFjdGVycyBsb25nIWAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgK21pbik7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkaW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRyYVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlba2V5XSA9IGV4dHJhVmFsdWVzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IHVybCwgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgcmVzLm1lc3NhZ2UgfHwgJ1ZhbHVlIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gcmVzLnN1Y2Nlc3M7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVVcmxPbkNoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybCh2YWxpZGF0ZVVybCwgJHVybEZpZWxkLCAkYnRuU3VibWl0KSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eW1xcd1xcLVxcLl0rJC9pKTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBjYW4gb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGRhc2goLSksIHBvaW50KC4pIGFuZCB1bmRlcnNjb3JlKF8pICEnLCAodikgPT4gbWF0Y2hlc1BhdHRlcm4odiwgcGF0dGVybikpKSB7XHJcbiAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiB2YWxpZGF0ZVVybCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsICh2KT0+IHJlcy5zdWNjZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVW5pcXVlbmVzKG5hbWUsIGNsYXNzVG9WYWxpZGF0ZSkge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgJGFsbE5hbWVzID0gJCgnLicgKyBjbGFzc1RvVmFsaWRhdGUpO1xyXG4gICAgICAgIGZvciAobmFtZSBpbiAkYWxsTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKCRhbGxOYW1lc1tuYW1lXS52YWx1ZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbGlkYXRlLFxyXG4gICAgICAgIGlzQWxwaGFOdW1lcmljLFxyXG4gICAgICAgIGhhc01pbmltdW1MZW5ndGgsXHJcbiAgICAgICAgdmFsaWRhdGVFbWFpbCxcclxuICAgICAgICBpc1N0YXJ0aW5nV2l0aExldHRlcixcclxuICAgICAgICBpc1VybEZyaWVuZGx5LFxyXG4gICAgICAgIGlzTnVtYmVyLFxyXG4gICAgICAgIGlzRGVjaW1hbE51bWJlcixcclxuICAgICAgICBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbixcclxuICAgICAgICBpc0Z1bmN0aW9uLFxyXG4gICAgICAgIGlzR3VpZCxcclxuICAgICAgICBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uLFxyXG4gICAgICAgIGlzSW50ZWdlcixcclxuICAgICAgICBjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcixcclxuICAgICAgICB2YWxpZGF0ZUZpZWxkLFxyXG4gICAgICAgIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVVbmlxdWVuZXMsXHJcbiAgICAgICAgdmFsaWRhdGVVcmxcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBWYWxpZGF0b3IgfTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFdhcm5pbmdXaW5kb3cgPSAoZnVuY3Rpb24gKGxvZ2dlcikge1xyXG4gICAgbG9nZ2VyID0gbG9nZ2VyIHx8IGNvbnNvbGU7XHJcbiAgICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gJ0l0IGxvb2tzIGxpa2UgeW91IGhhdmUgYmVlbiBlZGl0aW5nIHNvbWV0aGluZy4gJ1xyXG4gICAgICAgICsgJ0lmIHlvdSBsZWF2ZSBiZWZvcmUgc2F2aW5nLCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0Lic7XHJcblxyXG4gICAgZnVuY3Rpb24gb25VbmxvYWQoZSkge1xyXG4gICAgICAgIGlmICghaGFzQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG9uVW5sb2FkO1xyXG4gICAgLy92YXIgbGFzdENsaWNrT25FbGVtZW50O1xyXG4gICAgLy8kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgIGxhc3RDbGlja09uRWxlbWVudD0gJChldmVudC50YXJnZXQpO1xyXG4gICAgLy99KTtcclxuXHJcbiAgICB2YXIgbGFzdENsaWNrZWRFbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgLy9sYXN0Q2xpY2tlZCA9IHRhcmdldC50ZXh0Q29udGVudCB8fCB0YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhc1RleHRBcmVhc1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCAkdGV4dGFyZWFzID0gJCgndGV4dGFyZWEnKTtcclxuICAgICAgICAvL0FkZCB0aW55bWNlIGdldCB0ZXh0IGZyb20gdGV4dGFyZWEgbGlrZXMgaW5wdXRcclxuICAgICAgICBpZiAoJHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0lucHV0c1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCBoYXNUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0ICRpbnB1dHMgPSAkKCdpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGxldCBhdHRyID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpLmRhdGEoYXR0cmlidXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVcmwobGlua1BhdGgpIHtcclxuICAgICAgICBsb2dnZXIubG9nKFwiQ2hlY2sgdXJsXCIpO1xyXG4gICAgICAgIGxldCBhdHRyID0gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIoZ2V0TGFzdENsaWNrZWRFbGVtZW50KCksIFwiZGlzYWJsZUxpbmtcIik7XHJcblxyXG4gICAgICAgIGlmIChhdHRyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2luZyBpcyBkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2traW5nIGlzIGVuYWJsZWRcIilcclxuXHJcbiAgICAgICAgaWYgKGxpbmtQYXRoLmluZGV4T2YoJ2NyZWF0ZScpID09IC0xICYmIGxpbmtQYXRoLmluZGV4T2YoJ2VkaXQnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSB7XHJcbiAgICAgICAgbGV0IGxhc3RDbGlja2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PT0gXCJzdWJtaXRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5oYXNDbGFzcyhcImJ1dHRvbi1zdWJtaXRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuYXR0cigndHlwZScpID09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhZWxlbWVudC5hdHRyKCdkYXRhLWRpc2FibGUtd2FybmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0NoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKCFsYXN0Q2xpY2tlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGxpbmtQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIFwiZGlzYWJsZS13YXJuaW5nXCIpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGVja1VybChsaW5rUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhhc0NoYW5nZXMgPSBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHx8IGhhc0lucHV0c1dpdGhUZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RvcExlYXZlKGV2KSB7XHJcbiAgICAgICAgbGV0IGlzU2F2aW5nID0gbGFzdENsaWNrZWRFbGVtZW50ICYmICFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICQobGFzdENsaWNrZWRFbGVtZW50KSk7XHJcbiAgICAgICAgaWYgKGlzU2F2aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5wdXRDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgIGV2LnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGZvcmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBXYXJuaW5nV2luZG93IH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzLmpzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vY29tbW9uL2xvYWRlci5qcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4uL2NvbW1vbi92YWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgeyBOb3RpZmllciB9IGZyb20gJy4uL2NvbW1vbi9ub3RpZmllci5qcyc7XHJcbmltcG9ydCB7IFdhcm5pbmdXaW5kb3cgfSBmcm9tICcuLi9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RmlsZXNFZGl0KGV4cGlyYXRpb25EYXRlLCBsaWJyYXJ5QWxsb3dlZCkge1xyXG4gICAgbGV0ICRpbnB1dEZpbGUgPSAkKCcjaW5wdXQtdXBkYXRlLWZpbGUnKTtcclxuICAgIGxldCAkZGF0ZVRpbWVQaWNrZXIgPSAkKCcjZGF0ZS1waWNrZXInKTtcclxuICAgIGxldCAkdGl0bGUgPSAkKCcjdGl0bGUnKTtcclxuICAgIGxldCAkYWx0VGV4dCA9ICQoJyNhbHQnKTtcclxuICAgIGxldCAkbm90aWZpZXIgPSAkKCcjYWxlcnRzJyk7XHJcbiAgICBcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcblxyXG4gICAgJGRhdGVUaW1lUGlja2VyLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICB9KS52YWwoZXhwaXJhdGlvbkRhdGUpO1xyXG5cclxuICAgIHZhciBsaWJyYXJ5QWxsb3dlZCA9IFV0aWxzLnJlcGxhY2VBbGwoVXRpbHMucmVwbGFjZUFsbChsaWJyYXJ5QWxsb3dlZCwgJyonLCAnJyksICcsJywgJ3wnKTtcclxuXHJcbiAgICBpZiAoJGlucHV0RmlsZVswXS5maWxlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBlZGl0RmlsZURpc3BsYXlJbWFnZS5hcHBseSgkaW5wdXRGaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbW92ZWQgZnJvbSBlZGl0LWZpbGUtc2NyaXB0cy5qc1xyXG4gICAgbGV0ICRhZHZhbmNlZEZlYXR1cmVzID0gJCgnLmFkdmFuY2VkLWZlYXR1cmVzJyk7XHJcbiAgICBsZXQgJGFkdmFuY2VkQnV0dG9uID0gJGFkdmFuY2VkRmVhdHVyZXMuZmluZCgnLnRvZ2dsZS1idXR0b24nKTtcclxuICAgIGxldCAkZmVhdHVyZXNMaXN0ID0gJGFkdmFuY2VkRmVhdHVyZXMuZmluZCgnLmZlYXR1cmVzLWxpc3QnKTtcclxuICAgIGxldCAkYXJyb3dzID0gJGFkdmFuY2VkRmVhdHVyZXMuZmluZCgnLmFycm93Jyk7XHJcblxyXG4gICAgJGFkdmFuY2VkQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkYXJyb3dzLnRvZ2dsZSgpO1xyXG4gICAgICAgICRmZWF0dXJlc0xpc3QudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0RmlsZURpc3BsYXlJbWFnZShldikge1xyXG4gICAgICAgIHZhciBmaWxlID0gJCh0aGlzKVswXS5maWxlc1swXTtcclxuXHJcbiAgICAgICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAobGlicmFyeUFsbG93ZWQpO1xyXG5cclxuICAgICAgICBpZiAoIXJlZ0V4cC50ZXN0KGZpbGUubmFtZSkgJiYgIXJlZ0V4cC50ZXN0KGZpbGUudHlwZSkpIHtcclxuICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVySWQ6ICcjYWxlcnRzJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZpbGUubmFtZSArICcgZmlsZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgc2VsZWN0ZWQgbGlicmFyeSBhbmQgd2lsbCBub3QgYmUgdXBsb2FkZWQhJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBmaWxlLm5hbWUuc3Vic3RyaW5nKDAsIGZpbGUubmFtZS5sYXN0SW5kZXhPZignLicpKTtcclxuICAgICAgICAgICAgJHRpdGxlLnZhbChmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICRhbHRUZXh0LnZhbChmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICQoJy5kaXNwbGF5LWltYWdlJykuYXR0cignc3JjJywgd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRGaWxlRm9ybShldikge1xyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgdmFyIGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJHRpdGxlLCAnTmFtZSBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyYWN0ZXJzIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbC50cmltKCksIDMpOyB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICBEYXRhLnBvc3RGb3JtKHsgdXJsOiAnL3NpdGV0cmlrcy9maWxlcy9lZGl0JywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSh0aGlzKSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9zaXRldHJpa3MvbGlicmFyaWVzJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySWQ6ICcjYWxlcnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2RhbmdlcidcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnRodW1ibmFpbC1pbWFnZS1kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgdmFyICR3cmFwcGVyID0gJCh0aGlzKS5wYXJlbnRzKCcudGh1bWJuYWlsLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9maWxlcy9EZWxldGVTaW5nbGVGaWxlP2lkPScgKyBpZCwgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICR3cmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklkOiAkbm90aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBkZWxldGluZyBhIHRodW1ibmFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklkOiAkbm90aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlIHdlcmUgdW5hYmxlIHRvIGRlbGV0ZSB0aGlzIHRodW1ibmFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZ2VuZXJhdGUtdGh1bWJuYWlscycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsZUlkJyk7XHJcblxyXG4gICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2ZpbGVzL0dlbmVyYXRlVGh1bWJuYWlsc0ZvckZpbGUnLCBkYXRhOiBpZCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySWQ6ICRub3RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHJlZ2VuZXJhdGVkIHRodW1ibmFpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklkOiAkbm90aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlIHdlcmUgdW5hYmxlIHRvIGdlbmVyYXRlIHRodW1ibmFpbHMgZm9yIHRoZSBpbWFnZS4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2RhbmdlcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9wZW5EYXRlUGlja2VyKCkge1xyXG4gICAgICAgICRkYXRlVGltZVBpY2tlci5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgJGlucHV0RmlsZS5vbignY2hhbmdlJywgZWRpdEZpbGVEaXNwbGF5SW1hZ2UpO1xyXG4gICAgICAgICQoJyNzdWJtaXQtZm9ybScpLm9uKCdzdWJtaXQnLCBzdWJtaXRGaWxlRm9ybSk7XHJcbiAgICAgICAgJGRhdGVUaW1lUGlja2VyLm5leHQoJ3NwYW4uaW5wdXQtZ3JvdXAtYWRkb24nKS5vbignY2xpY2snLCBvcGVuRGF0ZVBpY2tlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICAkaW5wdXRGaWxlLm9mZignY2hhbmdlJywgZWRpdEZpbGVEaXNwbGF5SW1hZ2UpO1xyXG4gICAgICAgICQoJyNzdWJtaXQtZm9ybScpLm9mZignc3VibWl0Jywgc3VibWl0RmlsZUZvcm0pO1xyXG4gICAgICAgICRkYXRlVGltZVBpY2tlci5uZXh0KCdzcGFuLmlucHV0LWdyb3VwLWFkZG9uJykub2ZmKCdjbGljaycsIG9wZW5EYXRlUGlja2VyKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmluaXRGaWxlc0VkaXQgPSBpbml0RmlsZXNFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9