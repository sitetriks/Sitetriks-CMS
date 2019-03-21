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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/templates.js");
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

/***/ "./scripts/sitetriks/templates.js":
/*!****************************************!*\
  !*** ./scripts/sitetriks/templates.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _utils = __webpack_require__(/*! ../common/utils.js */ "./scripts/common/utils.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function createTemplate(checkValidUrlLink) {
    _warningWindow.WarningWindow.attach();
    $(document).ready(function () {
        _utils.Utils.populateUrl('#title', '#url', validateUrlOnChange);
    });

    $(function () {
        $('#date-picker').datetimepicker({
            defaultDate: '',
            minDate: new Date()
        });

        $('#date-picker').val('');
    });

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');

    var timer = 0;
    $urlField.on('input', function (e) {
        validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                _validator.Validator.validateUrl(checkValidUrlLink + '?url=' + url, $urlField, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css('border', '1px solid red');
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $('.title-field').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css('border', '1px solid green');
            $target.siblings('strong').children('span').text('');
        } else {
            $target.css('border', '1px solid red');
            $target.siblings('strong').children('span').text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#create-page-form').on('submit', function (evt) {
        var _this = this;

        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        if (flag) {
            evt.preventDefault();
            $notfier.text('Titles are required and must be atleast 3 characters long!');
            return false;
        }

        if (url.length < 3) {
            evt.preventDefault();
            $notfier.text('Please provide valid information in the required fields!');
            return false;
        }

        var dateVal = $('#date-picker').val();

        if (!!dateVal) {
            var dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan(new Date().addMinutes(10))) {
                evt.preventDefault();
                $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
                return false;
            }
        }

        _loader.Loader.show(true);

        $btnSubmit.attr('disabled', true);

        _data.Data.getJson({ url: checkValidUrlLink + '?url=' + url }).then(function success(res) {
            if (res.success) {
                $btnSubmit.attr('disabled', false);
                return _data.Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                $urlField.css('border', '1px solid red');
                $urlValidation.text('Url is invalid or already in use!');
                _loader.Loader.hide();
                return Promise.reject();
            }
        }).then(function success(res) {
            if (res.success) {
                window.location.replace('/sitetriks/templates/editcontent?url=' + res.url);
            } else {
                $notfier.text(res.message);
                _loader.Loader.hide();
            }

            $btnSubmit.attr('disabled', false);
        });

        evt.preventDefault();
        return false;
    });
}

function editTemplate(templateId, checkValidUrlLink) {
    _warningWindow.WarningWindow.attach();
    $(document).ready(function () {
        _utils.Utils.populateUrl('#title', '#url', validateUrlOnChange);
    });

    $(function () {
        $('#date-picker').datetimepicker({
            minDate: new Date()
        });

        $('#date-picker').val('');
    });

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');

    var timer = 0;
    $urlField.on('input', function (e) {
        return validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }
        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                return _validator.Validator.validateUrl(checkValidUrlLink + '?url=' + url + '&id=' + templateId, $urlField, $urlValidation, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css('border', '1px solid red');
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $('.title-field').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css('border', '1px solid green');
            $target.siblings('strong').children('span').text('');
        } else {
            $target.css('border', '1px solid red');
            $target.siblings('strong').children('span').text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#edit-page-form').on('submit', function (evt) {
        var _this = this;

        window.onbeforeunload = null;
        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        if (flag) {
            evt.preventDefault();
            $notfier.text('Titles required and must be atleast 3 characters long!');
            return false;
        }

        if (url.length < 3) {
            evt.preventDefault();
            $notfier.text('Please provide valid information in the required fields!');
            return false;
        }

        var dateVal = $('#date-picker').val();

        if (!!dateVal) {
            var dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan(new Date().addMinutes(10))) {
                evt.preventDefault();
                $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
                return false;
            }
        }

        _loader.Loader.show(true);

        $btnSubmit.attr('disabled', true);
        _data.Data.getJson({ url: checkValidUrlLink + '?url=' + url + '&id=' + templateId }).then(function success(res) {
            if (res.success) {
                $btnSubmit.attr('disabled', false);
                return _data.Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                $urlField.css('border', '1px solid red');
                $urlValidation.text('Url is invalid or already in use!');
                _loader.Loader.hide();
                return Promise.reject();
            }
        }).then(function success(res) {
            if (res.success) {
                window.location.replace('/sitetriks/templates/editcontent?url=' + res.url);
            } else {
                $notfier.text(res.message);
                _loader.Loader.hide();
            }

            $btnSubmit.attr('disabled', false);
        });

        evt.preventDefault();
        return false;
    });
}

window.createTemplate = createTemplate;
window.editTemplate = editTemplate;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOlsiRGF0YSIsIm1ha2VSZXF1ZXN0IiwiZmV0Y2giLCJpc0Z1bmN0aW9uIiwibWFrZUZldGNoUmVxdWVzdCIsIm1ha2VBamF4UmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiaXNGb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJhbXMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIiQiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJ0ZXh0IiwiZ2V0SnNvbiIsImRpc2FibGVDYWNoZSIsInBvc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RGb3JtIiwiZm9ybURhdGEiLCJkZWxldGVKc29uIiwiZGVmYXVsdEVycm9yIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwidG9TdHJpbmciLCJjYWxsIiwiTG9hZGVyIiwiZ2lmU3JjIiwic2hvdyIsImNvbG9yIiwiaW1nU3JjIiwiQmx1ciIsImFkZCIsImFwcGVuZCIsInNyYyIsImNsYXNzIiwiaGlkZSIsInJlbW92ZSIsIm9uIiwiZXYiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiYXR0ciIsIiRjb250YWluZXIiLCJoaWRlT25DbGljayIsImFwcGVuZFRvIiwiUFJFVklFV19DT05UQUlORVJfQ0xBU1MiLCJQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTIiwiQkxVUl9FTEVNRU5UX0NMQVNTIiwiYWRkQmx1ciIsIm9wYWNpdHkiLCJhZGRDbGFzcyIsIiRibHVyRWxlbWVudCIsIiRpdGVtQ29udGFpbmVyIiwiJHByZXZpZXdDb250YWluZXIiLCJyZW1vdmVCbHVyIiwiY3NzIiwiaXNOYU4iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJVdGlscyIsInM0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiZ3VpZCIsImlzR3VpZCIsInN0cmluZ1RvVGVzdCIsInJlZ2V4R3VpZCIsInRlc3QiLCJsb2FkanNjc3NmaWxlIiwiZmlsZW5hbWUiLCJmaWxldHlwZSIsImZpbGVyZWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwiaXNMb2FkaW5nIiwibG9hZGpzY3NzZmlsZUFzeW5jIiwib25sb2FkIiwib25lcnJvciIsInJlbW92ZWpzY3NzZmlsZSIsInRhcmdldGVsZW1lbnQiLCJ0YXJnZXRhdHRyIiwiYWxsc3VzcGVjdHMiLCJnZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlciIsInVyaSIsImtleSIsInZhbHVlIiwicmUiLCJSZWdFeHAiLCJzZXBhcmF0b3IiLCJtYXRjaCIsInJlcGxhY2UiLCJvcGVuSW5OZXdUYWIiLCJodG1sIiwibmV3V2luZG93Iiwid2luZG93Iiwib3BlbiIsImNsb3NlZCIsIndyaXRlIiwiY2xvc2UiLCJmb2N1cyIsImVzY2FwZVJlZ0V4cCIsInN0ciIsInJlcGxhY2VBbGwiLCJnZXRBbGxTZWxlY3RvcnMiLCJyZXQiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJ4Iiwic2VsZWN0b3JUZXh0IiwicHVzaCIsImNzc1NlbGVjdG9yRXhpc3RzIiwic2VsZWN0b3IiLCJzZWxlY3RvcnMiLCJwb3B1bGF0ZVVybCIsImlucHV0SWQiLCJ1cmxJZCIsImNhbGxiYWNrIiwiJHRpdGxlIiwiJHVybCIsInRpdGxlVmFsdWUiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsInVybFZhbHVlIiwiZXZ0IiwiJHRyaWdnZXIiLCJpcyIsImVhY2giLCJfIiwiZWxlbWVudCIsIlZhbGlkYXRvciIsInZhbGlkYXRlIiwiJGVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZUZ1bmMiLCJuZXh0IiwiaGFzTWluaW11bUxlbmd0aCIsIm1pbkxlbmdodCIsImhhc01heGltdW1MZW5ndGgiLCJtYXhMZW5naHQiLCJpc0FscGhhTnVtZXJpYyIsInBhdHRlcm4iLCJpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbiIsImlzUGFzc2luZyIsImlzVXJsRnJpZW5kbHkiLCJpc1N0YXJ0aW5nV2l0aExldHRlciIsInZhbGlkYXRlRW1haWwiLCJpc0RlY2ltYWxOdW1iZXIiLCJtYXRjaGVzUGF0dGVybiIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwicGFyc2VJbnQiLCJpc051bWJlckluUmFuZ2UiLCJtaW4iLCJtYXgiLCJpc0xlbmdodEluUmFuZ2UiLCJjcmVhdGVGaWVsZHNWYWxpZGF0aW9uIiwiY3VzdG9tVmFsaWRhdGlvbkZ1bmMiLCJ2YWxpZGF0ZUZpZWxkcyIsIiRlbGVtZW50c1RvVmFsaWRhdGUiLCJmbGFnIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlcyIsInZhbGlkYXRpb25UeXBlcyIsInNwbGl0IiwiaW5uZXJGbGFnIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJuYW1lIiwicGFyc2VGbG9hdCIsImNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIiLCJjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlciIsImV4dHJhVmFsdWVzIiwidGltZXIiLCJ2YWxpZGF0ZVVybE9uQ2hhbmdlIiwiJGlucHV0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZVVybCIsIiR1cmxGaWVsZCIsIiRidG5TdWJtaXQiLCJ2IiwidmFsaWRhdGVVbmlxdWVuZXMiLCJjbGFzc1RvVmFsaWRhdGUiLCJjb3VudGVyIiwiJGFsbE5hbWVzIiwiV2FybmluZ1dpbmRvdyIsImxvZ2dlciIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJvblVubG9hZCIsImUiLCJoYXNDaGFuZ2VzIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImxhc3RDbGlja2VkRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNyY0VsZW1lbnQiLCJoYXNUZXh0QXJlYXNXaXRoVGV4dCIsIiR0ZXh0YXJlYXMiLCJoYXNJbnB1dHNXaXRoVGV4dCIsImhhc1RleHQiLCIkaW5wdXRzIiwiY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIiLCJhdHRyaWJ1dGUiLCJjaGVja1VybCIsImxpbmtQYXRoIiwiZ2V0TGFzdENsaWNrZWRFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInN1Ym1pdEJ1dHRvbkNoZWNrIiwidGFnTmFtZSIsImhhc0NsYXNzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlucHV0Q2hhbmdlZCIsImRlZmF1bHRTdG9wTGVhdmUiLCJpc1NhdmluZyIsImF0dGFjaCIsIm9uYmVmb3JldW5sb2FkIiwiZGV0YWNoIiwiZm9yY2UiLCJjcmVhdGVUZW1wbGF0ZSIsImNoZWNrVmFsaWRVcmxMaW5rIiwicmVhZHkiLCJkYXRldGltZXBpY2tlciIsImRlZmF1bHREYXRlIiwibWluRGF0ZSIsIkRhdGUiLCIkdXJsVmFsaWRhdGlvbiIsInNpYmxpbmdzIiwiY2hpbGRyZW4iLCIkbm90ZmllciIsIl90aGlzIiwiaW5kZXgiLCJkYXRlVmFsIiwiZGF0ZVRvQmVQdWJsaXNoZWQiLCJsYXRlclRoYW4iLCJhZGRNaW51dGVzIiwiYWN0aW9uIiwiRm9ybURhdGEiLCJlZGl0VGVtcGxhdGUi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Q2I0Ryx1QkFBT3NILFFBQVAsQ0FBZ0IxSCxPQUFoQixDQUF3QiwwQ0FBMENoRyxJQUFJbEIsR0FBdEU7QUFDSCxhQUZELE1BRU87QUFDSCtQLHlCQUFTeE8sSUFBVCxDQUFjTCxJQUFJdUwsT0FBbEI7QUFDQWhLLCtCQUFPVSxJQUFQO0FBQ0g7O0FBRUR5Six1QkFBV25KLElBQVgsQ0FBZ0IsVUFBaEIsRUFBNEIsS0FBNUI7QUFDSCxTQW5CRDs7QUFxQkEyRixZQUFJb0UsY0FBSjtBQUNBLGVBQU8sS0FBUDtBQUNILEtBaEVEO0FBaUVIOztBQUVEbEcsT0FBTytILGNBQVAsR0FBd0JBLGNBQXhCO0FBQ0EvSCxPQUFPa0osWUFBUCxHQUFzQkEsWUFBdEIsQyIsImZpbGUiOiJqcy9zaXRldHJpa3MvdGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvdGVtcGxhdGVzLmpzXCIpO1xuIiwidmFyIERhdGEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG1ha2VSZXF1ZXN0ID0gdHlwZW9mIGZldGNoICE9PSAndW5kZWZpbmVkJyAmJiBpc0Z1bmN0aW9uKGZldGNoKSA/IG1ha2VGZXRjaFJlcXVlc3QgOiBtYWtlQWpheFJlcXVlc3Q7IC8vIGZhbGxiYWNrIHRvIGFqYXggaWYgb2xkZXIgYnJvd3NlclxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VBamF4UmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBib2R5LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGlzRm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNvbnRlbnRUeXBlID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBwcm9jZXNzIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHJvY2Vzc0RhdGEgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHNldCBjb250ZW50VHlwZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgocGFyYW1zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlRmV0Y2hSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMgfHwge307XHJcbiAgICAgICAgaWYgKGlzRm9ybSkge1xyXG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyc1snQ29udGVudC1UeXBlJ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICYmIHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXMudGV4dCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEpzb24oeyB1cmwsIGRpc2FibGVDYWNoZSB9KSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoZGlzYWJsZUNhY2hlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAnUHJhZ21hJzogJ25vLWNhY2hlJyxcclxuICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEZvcm0oeyB1cmwsIGZvcm1EYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSwgaXNGb3JtOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnREVMRVRFJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RXJyb3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRKc29uLFxyXG4gICAgICAgIHBvc3RKc29uLFxyXG4gICAgICAgIHBvc3RGb3JtLFxyXG4gICAgICAgIGRlbGV0ZUpzb24sXHJcbiAgICAgICAgZGVmYXVsdEVycm9yXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBEYXRhIH07XHJcbiIsIi8qIExvYWRlci5qcyB2ZXJzaW9uIDEuMSAqL1xyXG52YXIgTG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBnaWZTcmMgPSAnL2ltYWdlcy9sb2FkaW5nLmdpZic7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3Nob3dXaXRoUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0JhckRhdGEsIGNvbG9yKSB7XHJcbiAgICAgICAgLy8gICAgaWYgKGNvbG9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgIGNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgbGV0ICRwYXJlbnQgPSBCbHVyLmFkZCh7IGNvbG9yIH0pO1xyXG5cclxuICAgICAgICAvLyAgICBsZXQgYmFyID0gUHJvZ3Jlc3NCYXIuYnVpbGQoeyBkYXRhOiBwcm9ncmVzc0JhckRhdGEsICRwYXJlbnQ6ICRwYXJlbnQsIGNzc0NsYXNzOiAnYmx1ci1jb250ZW50JyB9KVswXTtcclxuICAgICAgICAvLyAgICBsZXQgZGF0YSA9ICQoYmFyKS5kYXRhKHByb2dyZXNzQmFyRGF0YS5uYW1lKVxyXG4gICAgICAgIC8vICAgICAgICAub25TdGFydCgpO1xyXG4gICAgICAgIC8vfSxcclxuICAgICAgICBzaG93OiBmdW5jdGlvbiAoY29sb3IsIGltZ1NyYykge1xyXG4gICAgICAgICAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWltZ1NyYykge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gZ2lmU3JjO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBCbHVyLmFkZCh7IGNvbG9yIH0pXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzxpbWcvPicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGltZ1NyYyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2JsdXItY29udGVudCdcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgQmx1ci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgTG9hZGVyIH07XHJcblxyXG4vLyBHYWxsZXJ5IHJlZ2lzdHJhdGlvblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdpbWcuZGlzcGxheS1pbWFnZSwgaW1nLmdhbGxlcnktaW1hZ2UnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXYudGFyZ2V0KTtcclxuICAgICAgICBsZXQgc3JjID0gJHRhcmdldC5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSBCbHVyLmFkZCh7IGhpZGVPbkNsaWNrOiB0cnVlIH0pO1xyXG4gICAgICAgICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50IHByZXZpZXctaW1hZ2UnLFxyXG4gICAgICAgICAgICBzcmM6IHNyY1xyXG4gICAgICAgIH0pLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG4vLyBIZWxwZXIgY2xhc3MgZm9yIGxvYWRlciBhbmQgZ2FsbGVyeVxyXG52YXIgQmx1ciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyA9ICdwcmV2aWV3LWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctaXRlbS1jb250YWluZXInO1xyXG4gICAgY29uc3QgQkxVUl9FTEVNRU5UX0NMQVNTID0gJ2JsdXInO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJsdXIoeyBoaWRlT25DbGljaywgY29sb3IsIG9wYWNpdHkgfSkge1xyXG4gICAgICAgIGlmIChoaWRlT25DbGljayAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoaWRlT25DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCdzdC1uby1vdmVyZmxvdycpO1xyXG5cclxuICAgICAgICBsZXQgJGJsdXJFbGVtZW50ID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBCTFVSX0VMRU1FTlRfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRpdGVtQ29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCAkcHJldmlld0NvbnRhaW5lciA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogUFJFVklFV19DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICRwcmV2aWV3Q29udGFpbmVyLm9uKCdjbGljaycsIHJlbW92ZUJsdXIpO1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ICYmIGlzTmFOKCtvcGFjaXR5KSAmJiBvcGFjaXR5ID49IDAgJiYgb3BhY2l0eSA8PSAxKSB7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwcmV2aWV3Q29udGFpbmVyLmFwcGVuZCgkaXRlbUNvbnRhaW5lcik7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkYmx1ckVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGl0ZW1Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQmx1cigpIHtcclxuICAgICAgICAkKCdib2R5JykuZmluZCgnLicgKyBCTFVSX0VMRU1FTlRfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6IGFkZEJsdXIsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmVCbHVyXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgQmx1ciB9O1xyXG4iLCJ2YXIgVXRpbHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBndWlkKCkge1xyXG4gICAgICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcclxuICAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0d1aWQoc3RyaW5nVG9UZXN0KSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ1RvVGVzdFswXSA9PT0gJ3snKSB7XHJcbiAgICAgICAgICAgIHN0cmluZ1RvVGVzdCA9IHN0cmluZ1RvVGVzdC5zdWJzdHJpbmcoMSwgc3RyaW5nVG9UZXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVnZXhHdWlkID0gL14oXFx7KXswLDF9WzAtOWEtZkEtRl17OH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXsxMn0oXFx9KXswLDF9JC9naTtcclxuICAgICAgICByZXR1cm4gcmVnZXhHdWlkLnRlc3Qoc3RyaW5nVG9UZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkanNjc3NmaWxlKGZpbGVuYW1lLCBmaWxldHlwZSkge1xyXG4gICAgICAgIGxldCBmaWxlcmVmO1xyXG4gICAgICAgIGlmIChmaWxldHlwZSA9PT0gJ2pzJykgeyAvL2lmIGZpbGVuYW1lIGlzIGEgZXh0ZXJuYWwgSmF2YVNjcmlwdCBmaWxlXHJcbiAgICAgICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZpbGV0eXBlID09PSAnY3NzJykgeyAvL2lmIGZpbGVuYW1lIGlzIGFuIGV4dGVybmFsIENTUyBmaWxlXHJcbiAgICAgICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xyXG4gICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xyXG4gICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsIGZpbGVuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlcmVmICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGZpbGVyZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWNoaW5nIGxvYWRpbmcgcHJvbWlzZSB0byBhdm9pZCBkdXBsaWNhdGlvbnNcclxuICAgIGxldCBpc0xvYWRpbmcgPSB7fTtcclxuICAgIGZ1bmN0aW9uIGxvYWRqc2Nzc2ZpbGVBc3luYyhmaWxlbmFtZSwgZmlsZXR5cGUpIHtcclxuICAgICAgICBpc0xvYWRpbmdbZmlsZW5hbWVdID0gaXNMb2FkaW5nW2ZpbGVuYW1lXSB8fCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlcmVmO1xyXG4gICAgICAgICAgICBpZiAoZmlsZXR5cGUgPT09ICdqcycpIHsgLy9pZiBmaWxlbmFtZSBpcyBhIGV4dGVybmFsIEphdmFTY3JpcHQgZmlsZVxyXG4gICAgICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbGV0eXBlID09PSAnY3NzJykgeyAvL2lmIGZpbGVuYW1lIGlzIGFuIGV4dGVybmFsIENTUyBmaWxlXHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xyXG4gICAgICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWxlcmVmICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgZmlsZXJlZi5vbmxvYWQgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICAgICAgZmlsZXJlZi5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChmaWxlcmVmKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7IGRlbGV0ZSBpc0xvYWRpbmdbZmlsZW5hbWVdOyByZXR1cm4gcmVzOyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzTG9hZGluZ1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlanNjc3NmaWxlKGZpbGVuYW1lLCBmaWxldHlwZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXRlbGVtZW50ID0gZmlsZXR5cGUgPT09ICdqcycgPyAnc2NyaXB0JyA6IGZpbGV0eXBlID09PSAnY3NzJyA/ICdsaW5rJyA6ICdub25lJzsgLy9kZXRlcm1pbmUgZWxlbWVudCB0eXBlIHRvIGNyZWF0ZSBub2RlbGlzdCBmcm9tXHJcbiAgICAgICAgbGV0IHRhcmdldGF0dHIgPSBmaWxldHlwZSA9PT0gJ2pzJyA/ICdzcmMnIDogZmlsZXR5cGUgPT09ICdjc3MnID8gJ2hyZWYnIDogJ25vbmUnOyAvL2RldGVybWluZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZSB0byB0ZXN0IGZvclxyXG4gICAgICAgIGxldCBhbGxzdXNwZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhcmdldGVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBhbGxzdXNwZWN0cy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7IC8vc2VhcmNoIGJhY2t3YXJkcyB3aXRoaW4gbm9kZWxpc3QgZm9yIG1hdGNoaW5nIGVsZW1lbnRzIHRvIHJlbW92ZVxyXG4gICAgICAgICAgICBpZiAoYWxsc3VzcGVjdHNbaV0gJiYgYWxsc3VzcGVjdHNbaV0uZ2V0QXR0cmlidXRlKHRhcmdldGF0dHIpICE9PSBudWxsICYmIGFsbHN1c3BlY3RzW2ldLmdldEF0dHJpYnV0ZSh0YXJnZXRhdHRyKS5pbmRleE9mKGZpbGVuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGFsbHN1c3BlY3RzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWxsc3VzcGVjdHNbaV0pOyAvL3JlbW92ZSBlbGVtZW50IGJ5IGNhbGxpbmcgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIodXJpLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnKFs/Jl0pJyArIGtleSArICc9Lio/KCZ8JCknLCAnaScpO1xyXG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSB1cmkuaW5kZXhPZignPycpICE9PSAtMSA/ICcmJyA6ICc/JztcclxuICAgICAgICBpZiAodXJpLm1hdGNoKHJlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJpLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyAnPScgKyB2YWx1ZSArICckMicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVyaSArIHNlcGFyYXRvciArIGtleSArICc9JyArIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5Jbk5ld1RhYihodG1sKSB7XHJcbiAgICAgICAgbGV0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKCdhYm91dDpibGFuaycpO1xyXG4gICAgICAgIGlmICghbmV3V2luZG93IHx8IG5ld1dpbmRvdy5jbG9zZWQgfHwgdHlwZW9mIG5ld1dpbmRvdy5jbG9zZWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8vUE9QVVAgQkxPQ0tFRFxyXG4gICAgICAgICAgICAvL2lmIChOb3RpZmllcikge1xyXG4gICAgICAgICAgICAvLyAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIG1lc3NhZ2U6ICdCcm93c2VyIGRvZXMgbm90IGFsbG93IG9wZW5pbmcgcG9wdXAgd2luZG93cyEnLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XHJcbiAgICAgICAgICAgIG5ld1dpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xyXG4gICAgICAgICAgICBuZXdXaW5kb3cuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUFsbChzdHIsIGZpbmQsIHJlcGxhY2UpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFsbFNlbGVjdG9ycygpIHtcclxuICAgICAgICBsZXQgcmV0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5ydWxlcyB8fCBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5jc3NSdWxlcztcclxuICAgICAgICAgICAgZm9yICh2YXIgeCBpbiBydWxlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBydWxlc1t4XS5zZWxlY3RvclRleHQgPT09ICdzdHJpbmcnKSByZXQucHVzaChydWxlc1t4XS5zZWxlY3RvclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3NzU2VsZWN0b3JFeGlzdHMoc2VsZWN0b3IpIHtcclxuICAgICAgICBsZXQgc2VsZWN0b3JzID0gZ2V0QWxsU2VsZWN0b3JzKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yc1tpXSA9PT0gc2VsZWN0b3IpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVcmwoaW5wdXRJZCwgdXJsSWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCFpbnB1dElkIHx8ICF1cmxJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgJHRpdGxlID0gJChpbnB1dElkKTtcclxuICAgICAgICB2YXIgJHVybCA9ICQodXJsSWQpO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGVWYWx1ZSA9ICR0aXRsZS52YWwoKS5yZXBsYWNlKC9cXHMrL2csICctJykucmVwbGFjZSgvLSsvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB1cmxWYWx1ZSA9ICR1cmwudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHVybFZhbHVlLmluZGV4T2YodGl0bGVWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHVybFZhbHVlID0gdXJsVmFsdWUucmVwbGFjZSh0aXRsZVZhbHVlLCAnJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHRpdGxlLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgdGl0bGVWYWx1ZSA9ICR0aXRsZS52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgJHVybC52YWwodGl0bGVWYWx1ZS5yZXBsYWNlKC9cXHMrL2csICctJykucmVwbGFjZSgvLSsvZywgJy0nKS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgczQsXHJcbiAgICAgICAgZ3VpZCxcclxuICAgICAgICBpc0d1aWQsXHJcbiAgICAgICAgbG9hZGpzY3NzZmlsZSxcclxuICAgICAgICBsb2FkanNjc3NmaWxlQXN5bmMsXHJcbiAgICAgICAgcmVtb3ZlanNjc3NmaWxlLFxyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyLFxyXG4gICAgICAgIGlzRnVuY3Rpb24sXHJcbiAgICAgICAgb3BlbkluTmV3VGFiLFxyXG4gICAgICAgIHJlcGxhY2VBbGwsXHJcbiAgICAgICAgY3NzU2VsZWN0b3JFeGlzdHMsXHJcbiAgICAgICAgcG9wdWxhdGVVcmxcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBHbG9iYWwgdXRpbGl0aWVzIGV2ZW50c1xyXG5cclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLnN0LXRvZ2dsZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgbGV0ICR0cmlnZ2VyID0gJCh0aGlzKTtcclxuICAgIGxldCAkdGFyZ2V0ID0gJCgkdHJpZ2dlci5hdHRyKCdkYXRhLXRvZ2dsZScpKTtcclxuXHJcbiAgICBpZiAoJHRyaWdnZXIuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAkdGFyZ2V0LmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHsgJChlbGVtZW50KS5zaG93KCk7IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkdGFyZ2V0LmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHsgJChlbGVtZW50KS5oaWRlKCk7IH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCB7IFV0aWxzIH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxudmFyIFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoJGVsZW1lbnQsIGVycm9yTWVzc2FnZSwgdmFsaWRhdGVGdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRnVuYyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnJyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkICNmZjY4NjgnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoZXJyb3JNZXNzYWdlIHx8ICdJbnZhbGlkIHZhbHVlIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbkxlbmdodCkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IG1pbkxlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heExlbmdodCkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWModmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKFthLXowLTldKykkL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24odmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOTtdKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1VybEZyaWVuZGx5KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTktX10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3RhcnRpbmdXaXRoTGV0dGVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpdL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eXFxkK1xcLlxcZHswLDJ9JC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14tP1xcZCtcXC4/XFxkKiQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNHdWlkKHN0cmluZ1RvVGVzdCkge1xyXG4gICAgICAgIGlmIChzdHJpbmdUb1Rlc3RbMF0gPT09ICd7Jykge1xyXG4gICAgICAgICAgICBzdHJpbmdUb1Rlc3QgPSBzdHJpbmdUb1Rlc3Quc3Vic3RyaW5nKDEsIHN0cmluZ1RvVGVzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ2V4R3VpZCA9IC9eKFxceyl7MCwxfVswLTlhLWZBLUZdezh9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17MTJ9KFxcfSl7MCwxfSQvZ2k7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4R3VpZC50ZXN0KHN0cmluZ1RvVGVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHBhcnNlSW50KHZhbHVlKSA9PSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBsb3dlciBvciBlcXVhbCB0byAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtYXggPyArdmFsdWUgPD0gK21heCA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byAke21pbn0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtaW4gPyArdmFsdWUgPj0gK21pbiA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmcuYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW4pOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSBtYXhpbXVtIHBlcm1pdHRlZCBjaGFyYWN0ZXJzIGxlbmd0aCBpcyAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXgpOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdmFsaWRhdGUgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgJ3ZhbGlkYXRlJyBpbnNpZGUgdGhlIHdyYXBwZXIuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21WYWxpZGF0aW9uRnVuYyBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgc3BlY2lmaWMgbG9naWMuIFdpbGwgcmVjaWV2ZSB0aGUgSFRNTEVsZW1lbnQuXHJcbiAgICAgKiBNdXN0IHJldHVybiB0cnVlIGlmIHZhbGlkYXRpb24gaXMgcGFzc2luZy5cclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRzVmFsaWRhdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzKGV2KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcyAmJiAhZXYgJiYgIWV2LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gSFRNTEVsZW1lbnQgaGFzIGJlZW4gcHJvdmlkZWQsICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgJGVsZW1lbnRzVG9WYWxpZGF0ZSA9ICQodGhpcyB8fCBldi50YXJnZXQpLmZpbmQoJy52YWxpZGF0ZScpO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnRzVG9WYWxpZGF0ZS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIWZsYWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnUmVxdWlyZWQgZmllbGQhJyxcclxuICAgICAgICAgICAgJ2VtYWlsJzogJ0ludmFsaWQgRS1NYWlsIScsXHJcbiAgICAgICAgICAgICdpbnQnOiAnTm90IGFuIGludGVnZXIgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdudW1iZXInOiAnTm90IGEgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdndWlkJzogJ0ludmFsaWQgZ3VpZCEnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25UeXBlcyA9ICgkZWxlbWVudC5hdHRyKCdkYXRhLXZhbGlkYXRpb24tdHlwZScpIHx8ICcnKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCBpbm5lckZsYWcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWluID0gJGVsZW1lbnQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICBsZXQgbWF4ID0gJGVsZW1lbnQuYXR0cignZGF0YS1tYXgnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0aW9uVHlwZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJGVsZW1lbnQuYXR0cignZGF0YS1tZXNzYWdlLScgKyB2YWxpZGF0aW9uVHlwZXNbaV0pIHx8IHZhbGlkYXRpb25NZXNzYWdlc1t2YWxpZGF0aW9uVHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh2YWxpZGF0aW9uVHlwZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhIXZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIHZhbGlkYXRlRW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG91YmxlJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zsb2F0JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgbmFtZSArICcgbXVzdCBiZSBkZWNpbWFsIGZsb2F0aW5nIHBvaW50IG51bWJlciEnLCAodmFsdWUpID0+IHsgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUpID09IHZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ludCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzSW50ZWdlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3VpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzR3VpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWN1c3RvbVZhbGlkYXRpb25GdW5jKCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5uZXJGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhaW5uZXJGbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIoY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gZXYgPyAkKGV2LnRhcmdldCkgOiAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKCR0YXJnZXQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyKG5hbWUsIHVybCwgbWluTGVuZ2h0LCBleHRyYVZhbHVlcykge1xyXG4gICAgICAgIGxldCB0aW1lciA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsT25DaGFuZ2UoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGxldCBtaW4gPSBtaW5MZW5naHQgfHwgJGlucHV0LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG1pbiAmJiAhVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0bGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZyFgLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBWYWxpZGF0b3IuaGFzTWluaW11bUxlbmd0aCh2YWwsICttaW4pOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5W2tleV0gPSBleHRyYVZhbHVlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiB1cmwsIGRhdGE6IGJvZHkgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIHJlcy5tZXNzYWdlIHx8ICdWYWx1ZSBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHJlcy5zdWNjZXNzOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlVXJsT25DaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVcmwodmFsaWRhdGVVcmwsICR1cmxGaWVsZCwgJGJ0blN1Ym1pdCkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXltcXHdcXC1cXC5dKyQvaSk7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgY2FuIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoKC0pLCBwb2ludCguKSBhbmQgdW5kZXJzY29yZShfKSAhJywgKHYpID0+IG1hdGNoZXNQYXR0ZXJuKHYsIHBhdHRlcm4pKSkge1xyXG4gICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogdmFsaWRhdGVVcmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCAodik9PiByZXMuc3VjY2VzcykpIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVuaXF1ZW5lcyhuYW1lLCBjbGFzc1RvVmFsaWRhdGUpIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgdmFyICRhbGxOYW1lcyA9ICQoJy4nICsgY2xhc3NUb1ZhbGlkYXRlKTtcclxuICAgICAgICBmb3IgKG5hbWUgaW4gJGFsbE5hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICgkYWxsTmFtZXNbbmFtZV0udmFsdWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZGF0ZSxcclxuICAgICAgICBpc0FscGhhTnVtZXJpYyxcclxuICAgICAgICBoYXNNaW5pbXVtTGVuZ3RoLFxyXG4gICAgICAgIHZhbGlkYXRlRW1haWwsXHJcbiAgICAgICAgaXNTdGFydGluZ1dpdGhMZXR0ZXIsXHJcbiAgICAgICAgaXNVcmxGcmllbmRseSxcclxuICAgICAgICBpc051bWJlcixcclxuICAgICAgICBpc0RlY2ltYWxOdW1iZXIsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24sXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBpc0d1aWQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRzVmFsaWRhdGlvbixcclxuICAgICAgICBpc0ludGVnZXIsXHJcbiAgICAgICAgY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVGaWVsZCxcclxuICAgICAgICBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlVW5pcXVlbmVzLFxyXG4gICAgICAgIHZhbGlkYXRlVXJsXHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgVmFsaWRhdG9yIH07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBXYXJuaW5nV2luZG93ID0gKGZ1bmN0aW9uIChsb2dnZXIpIHtcclxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCBjb25zb2xlO1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9ICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGJlZW4gZWRpdGluZyBzb21ldGhpbmcuICdcclxuICAgICAgICArICdJZiB5b3UgbGVhdmUgYmVmb3JlIHNhdmluZywgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcclxuICAgICAgICBpZiAoIWhhc0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBvblVubG9hZDtcclxuICAgIC8vdmFyIGxhc3RDbGlja09uRWxlbWVudDtcclxuICAgIC8vJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICBsYXN0Q2xpY2tPbkVsZW1lbnQ9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vfSk7XHJcblxyXG4gICAgdmFyIGxhc3RDbGlja2VkRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIC8vbGFzdENsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgJHRleHRhcmVhcyA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgLy9BZGQgdGlueW1jZSBnZXQgdGV4dCBmcm9tIHRleHRhcmVhIGxpa2VzIGlucHV0XHJcbiAgICAgICAgaWYgKCR0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNJbnB1dHNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkaW5wdXRzID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgYXR0ciA9ICQobGFzdENsaWNrZWRFbGVtZW50KS5kYXRhKGF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVXJsKGxpbmtQYXRoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIkNoZWNrIHVybFwiKTtcclxuICAgICAgICBsZXQgYXR0ciA9IGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGdldExhc3RDbGlja2VkRWxlbWVudCgpLCBcImRpc2FibGVMaW5rXCIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2tpbmcgaXMgZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNra2luZyBpcyBlbmFibGVkXCIpXHJcblxyXG4gICAgICAgIGlmIChsaW5rUGF0aC5pbmRleE9mKCdjcmVhdGUnKSA9PSAtMSAmJiBsaW5rUGF0aC5pbmRleE9mKCdlZGl0JykgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuaGFzQ2xhc3MoXCJidXR0b24tc3VibWl0XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50LmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuYXR0cignZGF0YS1kaXNhYmxlLXdhcm5pbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghbGFzdENsaWNrZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBsaW5rUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICRlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBcImRpc2FibGUtd2FybmluZ1wiKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tVcmwobGlua1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNDaGFuZ2VzID0gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB8fCBoYXNJbnB1dHNXaXRoVGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0b3BMZWF2ZShldikge1xyXG4gICAgICAgIGxldCBpc1NhdmluZyA9IGxhc3RDbGlja2VkRWxlbWVudCAmJiAhc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkKGxhc3RDbGlja2VkRWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChpc1NhdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlucHV0Q2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LCBcclxuICAgICAgICBmb3JjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgV2FybmluZ1dpbmRvdyB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5qcyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi9jb21tb24vdmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4uL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoY2hlY2tWYWxpZFVybExpbmspIHtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgVXRpbHMucG9wdWxhdGVVcmwoJyN0aXRsZScsICcjdXJsJywgdmFsaWRhdGVVcmxPbkNoYW5nZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjZGF0ZS1waWNrZXInKS5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRlOiAnJyxcclxuICAgICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZGF0ZS1waWNrZXInKS52YWwoJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyICR1cmxGaWVsZCA9ICQoJyN1cmwnKTtcclxuICAgIHZhciAkdXJsVmFsaWRhdGlvbiA9ICQoJyN1cmwtdmFsaWRhdGlvbicpO1xyXG4gICAgdmFyICRidG5TdWJtaXQgPSAkKCcjc3VibWl0Jyk7XHJcblxyXG4gICAgdmFyIHRpbWVyID0gMDtcclxuICAgICR1cmxGaWVsZC5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhbGlkYXRlVXJsT25DaGFuZ2UoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybE9uQ2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB1cmwgPSAkdXJsRmllbGQudmFsKCk7XHJcblxyXG4gICAgICAgIGlmICh1cmwubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZVVybChjaGVja1ZhbGlkVXJsTGluayArICc/dXJsPScgKyB1cmwsICR1cmxGaWVsZCwgJGJ0blN1Ym1pdCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICR1cmxWYWxpZGF0aW9uLnRleHQoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICR1cmxGaWVsZC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgcmVkJyk7XHJcbiAgICAgICAgICAgICR1cmxWYWxpZGF0aW9uLnRleHQoJ1VybCBtdXN0IGJlIGF0bGVhc3QgMyBzeW1ib2xzIScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKCcudGl0bGUtZmllbGQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKCR0YXJnZXQudmFsKCkubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgJHRhcmdldC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgZ3JlZW4nKTtcclxuICAgICAgICAgICAgJHRhcmdldC5zaWJsaW5ncygnc3Ryb25nJykuY2hpbGRyZW4oJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkdGFyZ2V0LmNzcygnYm9yZGVyJywgJzFweCBzb2xpZCByZWQnKTtcclxuICAgICAgICAgICAgJHRhcmdldC5zaWJsaW5ncygnc3Ryb25nJykuY2hpbGRyZW4oJ3NwYW4nKS50ZXh0KCdUaXR0bGUgbXVzdCBiZSBhdGxlYXN0IDMgc3ltYm9scyEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgJG5vdGZpZXIgPSAkKCcjbm90aWZpZXInKTtcclxuICAgICQoJyNjcmVhdGUtcGFnZS1mb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgdXJsID0gJHVybEZpZWxkLnZhbCgpO1xyXG4gICAgICAgICRub3RmaWVyLnRleHQoJycpO1xyXG4gICAgICAgIHZhciBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICQoJy50aXRsZS1maWVsZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLnZhbCgpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkbm90Zmllci50ZXh0KCdUaXRsZXMgYXJlIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmchJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmwubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJG5vdGZpZXIudGV4dCgnUGxlYXNlIHByb3ZpZGUgdmFsaWQgaW5mb3JtYXRpb24gaW4gdGhlIHJlcXVpcmVkIGZpZWxkcyEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGVWYWwgPSAkKCcjZGF0ZS1waWNrZXInKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZGF0ZVZhbCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZVRvQmVQdWJsaXNoZWQgPSBuZXcgRGF0ZShkYXRlVmFsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0ZVRvQmVQdWJsaXNoZWQubGF0ZXJUaGFuKChuZXcgRGF0ZSgpKS5hZGRNaW51dGVzKDEwKSkpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJG5vdGZpZXIudGV4dCgnRGF0ZSB0byBiZSBwdWJsaXNoZWQgY2Fubm90IGJlIHNvb25lciB0aGFuIDEwIG1pbnV0ZXMgZnJvbSBub3chJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRlci5zaG93KHRydWUpO1xyXG5cclxuICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogY2hlY2tWYWxpZFVybExpbmsgKyAnP3VybD0nICsgdXJsIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEucG9zdEZvcm0oeyB1cmw6IF90aGlzLmFjdGlvbiwgZm9ybURhdGE6IG5ldyBGb3JtRGF0YShfdGhpcykgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkdXJsRmllbGQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkIHJlZCcpO1xyXG4gICAgICAgICAgICAgICAgJHVybFZhbGlkYXRpb24udGV4dCgnVXJsIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJyk7XHJcbiAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9zaXRldHJpa3MvdGVtcGxhdGVzL2VkaXRjb250ZW50P3VybD0nICsgcmVzLnVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbm90Zmllci50ZXh0KHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGVtcGxhdGUodGVtcGxhdGVJZCwgY2hlY2tWYWxpZFVybExpbmspIHtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgVXRpbHMucG9wdWxhdGVVcmwoJyN0aXRsZScsICcjdXJsJywgdmFsaWRhdGVVcmxPbkNoYW5nZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjZGF0ZS1waWNrZXInKS5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2RhdGUtcGlja2VyJykudmFsKCcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciAkdXJsRmllbGQgPSAkKCcjdXJsJyk7XHJcbiAgICB2YXIgJHVybFZhbGlkYXRpb24gPSAkKCcjdXJsLXZhbGlkYXRpb24nKTtcclxuICAgIHZhciAkYnRuU3VibWl0ID0gJCgnI3N1Ym1pdCcpO1xyXG5cclxuICAgIHZhciB0aW1lciA9IDA7XHJcbiAgICAkdXJsRmllbGQub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVVcmxPbkNoYW5nZShlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsT25DaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXJsID0gJHVybEZpZWxkLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAodXJsLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9yLnZhbGlkYXRlVXJsKGNoZWNrVmFsaWRVcmxMaW5rICsgJz91cmw9JyArIHVybCArICcmaWQ9JyArIHRlbXBsYXRlSWQsICR1cmxGaWVsZCwgJHVybFZhbGlkYXRpb24sICRidG5TdWJtaXQpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAkdXJsVmFsaWRhdGlvbi50ZXh0KCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkdXJsRmllbGQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkIHJlZCcpO1xyXG4gICAgICAgICAgICAkdXJsVmFsaWRhdGlvbi50ZXh0KCdVcmwgbXVzdCBiZSBhdGxlYXN0IDMgc3ltYm9scyEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnRpdGxlLWZpZWxkJykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGlmICgkdGFyZ2V0LnZhbCgpLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgICR0YXJnZXQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkIGdyZWVuJyk7XHJcbiAgICAgICAgICAgICR0YXJnZXQuc2libGluZ3MoJ3N0cm9uZycpLmNoaWxkcmVuKCdzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHRhcmdldC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgcmVkJyk7XHJcbiAgICAgICAgICAgICR0YXJnZXQuc2libGluZ3MoJ3N0cm9uZycpLmNoaWxkcmVuKCdzcGFuJykudGV4dCgnVGl0dGxlIG11c3QgYmUgYXRsZWFzdCAzIHN5bWJvbHMhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyICRub3RmaWVyID0gJCgnI25vdGlmaWVyJyk7XHJcbiAgICAkKCcjZWRpdC1wYWdlLWZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHVybCA9ICR1cmxGaWVsZC52YWwoKTtcclxuICAgICAgICAkbm90Zmllci50ZXh0KCcnKTtcclxuICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAkKCcudGl0bGUtZmllbGQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoJChlbGVtZW50KS52YWwoKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJG5vdGZpZXIudGV4dCgnVGl0bGVzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmchJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmwubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJG5vdGZpZXIudGV4dCgnUGxlYXNlIHByb3ZpZGUgdmFsaWQgaW5mb3JtYXRpb24gaW4gdGhlIHJlcXVpcmVkIGZpZWxkcyEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGVWYWwgPSAkKCcjZGF0ZS1waWNrZXInKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZGF0ZVZhbCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZVRvQmVQdWJsaXNoZWQgPSBuZXcgRGF0ZShkYXRlVmFsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0ZVRvQmVQdWJsaXNoZWQubGF0ZXJUaGFuKChuZXcgRGF0ZSgpKS5hZGRNaW51dGVzKDEwKSkpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJG5vdGZpZXIudGV4dCgnRGF0ZSB0byBiZSBwdWJsaXNoZWQgY2Fubm90IGJlIHNvb25lciB0aGFuIDEwIG1pbnV0ZXMgZnJvbSBub3chJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRlci5zaG93KHRydWUpO1xyXG5cclxuICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiBjaGVja1ZhbGlkVXJsTGluayArICc/dXJsPScgKyB1cmwgKyAnJmlkPScgKyB0ZW1wbGF0ZUlkIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEucG9zdEZvcm0oeyB1cmw6IF90aGlzLmFjdGlvbiwgZm9ybURhdGE6IG5ldyBGb3JtRGF0YShfdGhpcykgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkdXJsRmllbGQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkIHJlZCcpO1xyXG4gICAgICAgICAgICAgICAgJHVybFZhbGlkYXRpb24udGV4dCgnVXJsIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJyk7XHJcbiAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9zaXRldHJpa3MvdGVtcGxhdGVzL2VkaXRjb250ZW50P3VybD0nICsgcmVzLnVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbm90Zmllci50ZXh0KHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuY3JlYXRlVGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZTtcclxud2luZG93LmVkaXRUZW1wbGF0ZSA9IGVkaXRUZW1wbGF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==