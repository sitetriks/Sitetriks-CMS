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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/helpers.js");
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

/***/ "./scripts/sitetriks/helpers.js":
/*!**************************************!*\
  !*** ./scripts/sitetriks/helpers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupAjaxForm = setupAjaxForm;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

var _textEditor = __webpack_require__(/*! ../text-editor.js */ "./scripts/text-editor.js");

function setupAjaxForm(formSelector, redirectUrl, textEditorAreasIds) {
    _warningWindow.WarningWindow.attach();
    var validation = _validator.Validator.createFieldsValidation();
    if (textEditorAreasIds && textEditorAreasIds.length) {
        for (var i = 0; i < textEditorAreasIds.length; i++) {
            _textEditor.textEditor.init(textEditorAreasIds[i], 500, 300);
        }
    }

    $(formSelector).on('submit', function (evt) {
        evt.preventDefault();
        if (!validation.apply(this)) {
            return false;
        }

        _loader.Loader.show('#fff');
        _data.Data.postForm({ url: this.action, formData: new FormData(this) }).then(function success(res) {
            if (res.success) {
                window.location.replace(redirectUrl);
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                _loader.Loader.hide();
            }
        });

        return false;
    });
}

window.setupAjaxForm = setupAjaxForm;

/***/ }),

/***/ "./scripts/text-editor.js":
/*!********************************!*\
  !*** ./scripts/text-editor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.textEditor = undefined;

var _warningWindow = __webpack_require__(/*! ./modules/warning-window.js */ "./scripts/modules/warning-window.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* globals tinymce */


var textEditor = function () {
    function initInstaceCallback(editor) {
        if (typeof _warningWindow.WarningWindow !== 'undefined' && _warningWindow.WarningWindow.force) {
            editor.on('NodeChange', function (e) {
                _warningWindow.WarningWindow.force();
            });
        }
    }

    function setupEditor(editor, onInitCallback) {
        editor.addButton('custombutton', {
            type: 'menubutton',
            text: 'Custom',
            icon: false,
            menu: [{
                text: 'Logout link',
                onclick: function onclick() {
                    editor.insertContent('<a href="/logout">Logout</a>');
                }
            }]
        });

        editor.on('init', function (ev) {
            if (onInitCallback && {}.toString.call(onInitCallback) === '[object Function]') {
                onInitCallback();
            }
        });

        // enable auto-sync with the textarea
        editor.on('change', function () {
            tinymce.triggerSave();
        });
    }

    function image_list(success) {
        $.get('/sitetriks/files/getallimages', function (res) {
            success(res.images);
        });
    }

    function file_picker_callback(cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        $('body').append(input);

        // Note: In modern browsers input[type="file"] is functional without 
        // even adding it to the DOM, but that might not be the case in some older
        // or quirky browsers like IE, so you might want to add it to the DOM
        // just in case, and visually hide it. And do not forget do remove it
        // once you do not need it anymore.

        input.onchange = function () {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function () {
                // Note: Now we need to register the blob in TinyMCEs image blob
                // registry. In the next release this part hopefully won't be
                // necessary, as we are looking to handle it internally.
                var id = 'blobid' + new Date().getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                // call the callback and populate the Title field with the file name
                cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
        };

        input.click();
    }

    function createBaseConfig(selector, width, height, onInitCallback) {
        var _ref;

        return _ref = {
            selector: selector,
            verify_html: false,
            extended_valid_elements: 'span'
        }, _defineProperty(_ref, 'extended_valid_elements', 'div[class|id|style|span],span[class|id|style]'), _defineProperty(_ref, 'extended_valid_elements', 'div[*],span[*]'), _defineProperty(_ref, 'theme', 'modern'), _defineProperty(_ref, 'mode', 'textareas'), _defineProperty(_ref, 'force_br_newlines', false), _defineProperty(_ref, 'force_p_newlines', false), _defineProperty(_ref, 'forced_root_block', ''), _defineProperty(_ref, 'width', width), _defineProperty(_ref, 'height', height), _defineProperty(_ref, 'plugins', ['advlist autolink codesample link image lists charmap print preview hr anchor pagebreak fullscreen', 'searchreplace wordcount visualblocks visualchars code insertdatetime nonbreaking', 'save table contextmenu directionality paste textcolor']), _defineProperty(_ref, 'external_plugins', {
            'codeHighl': '/plugins/tinymce/code-highlight-tinymce-plugin.js',
            'htmlBlocks': '/plugins/tinymce/html-components-tinymce-plugin.js'
        }), _defineProperty(_ref, 'browser_spellcheck', true), _defineProperty(_ref, 'contextmenu', false), _defineProperty(_ref, 'paste_as_text', true), _defineProperty(_ref, 'image_caption', true), _defineProperty(_ref, 'image_advtab', true), _defineProperty(_ref, 'file_picker_types', 'file image media'), _defineProperty(_ref, 'file_picker_callback', file_picker_callback), _defineProperty(_ref, 'toolbar', 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor code | codeHighl | fontsizeselect | fontselect | custombutton'), _defineProperty(_ref, 'fontsize_formats', '8px 10px 12px 14px 16px 18px 20px 22px 24px 36px 48px'), _defineProperty(_ref, 'setup', function setup(editor) {
            return setupEditor(editor, onInitCallback);
        }), _defineProperty(_ref, 'init_instance_callback', initInstaceCallback), _ref;
    }

    function init(selector, width, height, onInitCallback) {
        var cfg = createBaseConfig(selector, width, height, onInitCallback);
        cfg.image_list = image_list;
        tinymce.init(cfg);
    }

    function initWithoutImages(selector, width, height, onInitCallback) {
        tinymce.init(createBaseConfig(selector, width, height, onInitCallback));
    }

    function remove(selector) {
        var editor = tinymce.get(selector);
        if (editor) {
            editor.remove();
        }
    }

    function removeAll() {
        tinymce.remove();
    }

    function clear(selector) {
        var editor = tinymce.get(selector);
        if (editor) {
            editor.setContent('');
        }
    }

    // selector must be Id
    function getContent(id) {
        return tinymce.get(id).getContent();
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

    return {
        init: init,
        initWithoutImages: initWithoutImages,
        getContent: getContent,
        remove: remove,
        removeAll: removeAll,
        clear: clear,
        addEditor: addEditor
    };
}();

exports.textEditor = textEditor;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdGV4dC1lZGl0b3IuanMiXSwibmFtZXMiOlsiRGF0YSIsIm1ha2VSZXF1ZXN0IiwiZmV0Y2giLCJpc0Z1bmN0aW9uIiwibWFrZUZldGNoUmVxdWVzdCIsIm1ha2VBamF4UmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiaXNGb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJhbXMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIiQiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJ0ZXh0IiwiZ2V0SnNvbiIsImRpc2FibGVDYWNoZSIsInBvc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RGb3JtIiwiZm9ybURhdGEiLCJkZWxldGVKc29uIiwiZGVmYXVsdEVycm9yIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwidG9TdHJpbmciLCJjYWxsIiwiTG9hZGVyIiwiZ2lmU3JjIiwic2hvdyIsImNvbG9yIiwiaW1nU3JjIiwiQmx1ciIsImFkZCIsImFwcGVuZCIsInNyYyIsImNsYXNzIiwiaGlkZSIsInJlbW92ZSIsIm9uIiwiZXYiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiYXR0ciIsIiRjb250YWluZXIiLCJoaWRlT25DbGljayIsImFwcGVuZFRvIiwiUFJFVklFV19DT05UQUlORVJfQ0xBU1MiLCJQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTIiwiQkxVUl9FTEVNRU5UX0NMQVNTIiwiYWRkQmx1ciIsIm9wYWNpdHkiLCJhZGRDbGFzcyIsIiRibHVyRWxlbWVudCIsIiRpdGVtQ29udGFpbmVyIiwiJHByZXZpZXdDb250YWluZXIiLCJyZW1vdmVCbHVyIiwiY3NzIiwiaXNOYU4iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJOb3RpZmllciIsImNyZWF0ZUFsZXJ0IiwiY29udGFpbmVySWQiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzZWNvbmRzIiwiaXNQZXJtYW5lbnQiLCJzZWxlY3RvciIsIiR0aXRsZSIsIiRjbG9zZUJ1dHRvbiIsImh0bWwiLCIkbWVzc2FnZSIsIiRhbGVydCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiVmFsaWRhdG9yIiwidmFsaWRhdGUiLCIkZWxlbWVudCIsImVycm9yTWVzc2FnZSIsInZhbGlkYXRlRnVuYyIsInZhbHVlIiwidmFsIiwibmV4dCIsImhhc01pbmltdW1MZW5ndGgiLCJtaW5MZW5naHQiLCJoYXNNYXhpbXVtTGVuZ3RoIiwibWF4TGVuZ2h0IiwiaXNBbHBoYU51bWVyaWMiLCJwYXR0ZXJuIiwidGVzdCIsImlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uIiwiaXNQYXNzaW5nIiwiaXNVcmxGcmllbmRseSIsImlzU3RhcnRpbmdXaXRoTGV0dGVyIiwidmFsaWRhdGVFbWFpbCIsImlzRGVjaW1hbE51bWJlciIsIm1hdGNoZXNQYXR0ZXJuIiwiaXNOdW1iZXIiLCJpc0d1aWQiLCJzdHJpbmdUb1Rlc3QiLCJzdWJzdHJpbmciLCJyZWdleEd1aWQiLCJpc0ludGVnZXIiLCJwYXJzZUludCIsImlzTnVtYmVySW5SYW5nZSIsIm1pbiIsIm1heCIsImlzTGVuZ2h0SW5SYW5nZSIsImNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24iLCJjdXN0b21WYWxpZGF0aW9uRnVuYyIsInZhbGlkYXRlRmllbGRzIiwiJGVsZW1lbnRzVG9WYWxpZGF0ZSIsImZsYWciLCJlYWNoIiwiXyIsImVsZW1lbnQiLCJ2YWxpZGF0ZUZpZWxkIiwidmFsaWRhdGlvbk1lc3NhZ2VzIiwidmFsaWRhdGlvblR5cGVzIiwic3BsaXQiLCJpbm5lckZsYWciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIm5hbWUiLCJwYXJzZUZsb2F0IiwiY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlciIsImNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyIiwiZXh0cmFWYWx1ZXMiLCJ0aW1lciIsInZhbGlkYXRlVXJsT25DaGFuZ2UiLCIkaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJrZXkiLCJ2YWxpZGF0ZVVybCIsIiR1cmxGaWVsZCIsIiRidG5TdWJtaXQiLCJSZWdFeHAiLCJ2IiwidmFsaWRhdGVVbmlxdWVuZXMiLCJjbGFzc1RvVmFsaWRhdGUiLCJjb3VudGVyIiwiJGFsbE5hbWVzIiwiV2FybmluZ1dpbmRvdyIsImxvZ2dlciIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJvblVubG9hZCIsImUiLCJoYXNDaGFuZ2VzIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImxhc3RDbGlja2VkRWxlbWVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImV2ZW50Iiwic3JjRWxlbWVudCIsImhhc1RleHRBcmVhc1dpdGhUZXh0IiwiJHRleHRhcmVhcyIsImhhc0lucHV0c1dpdGhUZXh0IiwiaGFzVGV4dCIsIiRpbnB1dHMiLCJjaGVja0VsZW1lbnRGb3JEYXRhQXR0ciIsImF0dHJpYnV0ZSIsImNoZWNrVXJsIiwibGlua1BhdGgiLCJnZXRMYXN0Q2xpY2tlZEVsZW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3VibWl0QnV0dG9uQ2hlY2siLCJ0YWdOYW1lIiwiaGFzQ2xhc3MiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5wdXRDaGFuZ2VkIiwiZGVmYXVsdFN0b3BMZWF2ZSIsImlzU2F2aW5nIiwiYXR0YWNoIiwib25iZWZvcmV1bmxvYWQiLCJkZXRhY2giLCJmb3JjZSIsInNldHVwQWpheEZvcm0iLCJmb3JtU2VsZWN0b3IiLCJyZWRpcmVjdFVybCIsInRleHRFZGl0b3JBcmVhc0lkcyIsInZhbGlkYXRpb24iLCJ0ZXh0RWRpdG9yIiwiaW5pdCIsImV2dCIsImFwcGx5IiwiYWN0aW9uIiwiRm9ybURhdGEiLCJyZXBsYWNlIiwiaW5pdEluc3RhY2VDYWxsYmFjayIsImVkaXRvciIsInNldHVwRWRpdG9yIiwib25Jbml0Q2FsbGJhY2siLCJhZGRCdXR0b24iLCJ0eXBlIiwiaWNvbiIsIm1lbnUiLCJvbmNsaWNrIiwiaW5zZXJ0Q29udGVudCIsInRpbnltY2UiLCJ0cmlnZ2VyU2F2ZSIsImltYWdlX2xpc3QiLCJpbWFnZXMiLCJmaWxlX3BpY2tlcl9jYWxsYmFjayIsImNiIiwibWV0YSIsImlucHV0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImlkIiwiRGF0ZSIsImdldFRpbWUiLCJibG9iQ2FjaGUiLCJhY3RpdmVFZGl0b3IiLCJlZGl0b3JVcGxvYWQiLCJiYXNlNjQiLCJyZXN1bHQiLCJibG9iSW5mbyIsImNyZWF0ZSIsImJsb2JVcmkiLCJyZWFkQXNEYXRhVVJMIiwiY2xpY2siLCJjcmVhdGVCYXNlQ29uZmlnIiwid2lkdGgiLCJoZWlnaHQiLCJ2ZXJpZnlfaHRtbCIsImV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzIiwiY2ZnIiwiaW5pdFdpdGhvdXRJbWFnZXMiLCJyZW1vdmVBbGwiLCJjbGVhciIsInNldENvbnRlbnQiLCJnZXRDb250ZW50IiwiYWRkRWRpdG9yIiwid2FybiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0g7QUFDSjs7QUFFRDtBQUNBLGFBQVNDLFVBQVQsQ0FBb0J2QixFQUFwQixFQUF3QjtBQUNwQixlQUFPaEIsUUFBUW5NLEdBQVIsQ0FBWW1OLEVBQVosRUFBZ0J1QixVQUFoQixFQUFQO0FBQ0g7O0FBRUQsYUFBU0MsU0FBVCxDQUFtQnhCLEVBQW5CLEVBQXVCYyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0M7QUFDbEMsWUFBSSxDQUFDZixFQUFMLEVBQVM7QUFDTG5NLG9CQUFRNE4sSUFBUixDQUFhLDJDQUFiOztBQUVBO0FBQ0g7QUFDRFgsZ0JBQVFBLFNBQVMsR0FBakI7QUFDQUMsaUJBQVNBLFVBQVUsR0FBbkI7QUFDQSxZQUFJZixHQUFHLENBQUgsTUFBVSxHQUFkLEVBQW1CO0FBQ2ZqQyx1QkFBV2xKLE1BQVgsQ0FBa0JtTCxHQUFHcEgsU0FBSCxDQUFhLENBQWIsQ0FBbEI7QUFDSCxTQUZELE1BRU87QUFDSG1GLHVCQUFXbEosTUFBWCxDQUFrQm1MLEVBQWxCO0FBQ0g7O0FBRURqQyxtQkFBV0MsSUFBWCxDQUFnQmdDLEVBQWhCLEVBQW9CYyxLQUFwQixFQUEyQkMsTUFBM0I7QUFDSDs7QUFFRCxXQUFPO0FBQ0gvQyxrQkFERztBQUVIbUQsNENBRkc7QUFHSEksOEJBSEc7QUFJSDFNLHNCQUpHO0FBS0h1TSw0QkFMRztBQU1IQyxvQkFORztBQU9IRztBQVBHLEtBQVA7QUFTSCxDQXhLZ0IsRUFBakI7O1FBMEtTekQsVSxHQUFBQSxVIiwiZmlsZSI6ImpzL3NpdGV0cmlrcy9oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvaGVscGVycy5qc1wiKTtcbiIsInZhciBEYXRhID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBtYWtlUmVxdWVzdCA9IHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNGdW5jdGlvbihmZXRjaCkgPyBtYWtlRmV0Y2hSZXF1ZXN0IDogbWFrZUFqYXhSZXF1ZXN0OyAvLyBmYWxsYmFjayB0byBhamF4IGlmIG9sZGVyIGJyb3dzZXJcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlQWpheFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gcHJvY2VzcyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnByb2Nlc3NEYXRhID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBzZXQgY29udGVudFR5cGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHBhcmFtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUZldGNoUmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJiByZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzLnRleHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRKc29uKHsgdXJsLCBkaXNhYmxlQ2FjaGUgfSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGRpc2FibGVDYWNoZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgJ1ByYWdtYSc6ICduby1jYWNoZScsXHJcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnR0VUJywgaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0SnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RGb3JtKHsgdXJsLCBmb3JtRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEsIGlzRm9ybTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0RFTEVURScsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdEVycm9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0SnNvbixcclxuICAgICAgICBwb3N0SnNvbixcclxuICAgICAgICBwb3N0Rm9ybSxcclxuICAgICAgICBkZWxldGVKc29uLFxyXG4gICAgICAgIGRlZmF1bHRFcnJvclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgRGF0YSB9O1xyXG4iLCIvKiBMb2FkZXIuanMgdmVyc2lvbiAxLjEgKi9cclxudmFyIExvYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ2lmU3JjID0gJy9pbWFnZXMvbG9hZGluZy5naWYnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9zaG93V2l0aFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NCYXJEYXRhLCBjb2xvcikge1xyXG4gICAgICAgIC8vICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICBjb2xvciA9ICcjZmZmJztcclxuICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIGxldCAkcGFyZW50ID0gQmx1ci5hZGQoeyBjb2xvciB9KTtcclxuXHJcbiAgICAgICAgLy8gICAgbGV0IGJhciA9IFByb2dyZXNzQmFyLmJ1aWxkKHsgZGF0YTogcHJvZ3Jlc3NCYXJEYXRhLCAkcGFyZW50OiAkcGFyZW50LCBjc3NDbGFzczogJ2JsdXItY29udGVudCcgfSlbMF07XHJcbiAgICAgICAgLy8gICAgbGV0IGRhdGEgPSAkKGJhcikuZGF0YShwcm9ncmVzc0JhckRhdGEubmFtZSlcclxuICAgICAgICAvLyAgICAgICAgLm9uU3RhcnQoKTtcclxuICAgICAgICAvL30sXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKGNvbG9yLCBpbWdTcmMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjZmZmJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWdTcmMpIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IGdpZlNyYztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQmx1ci5hZGQoeyBjb2xvciB9KVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8aW1nLz4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBpbWdTcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEJsdXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IExvYWRlciB9O1xyXG5cclxuLy8gR2FsbGVyeSByZWdpc3RyYXRpb25cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnaW1nLmRpc3BsYXktaW1hZ2UsIGltZy5nYWxsZXJ5LWltYWdlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgbGV0IHNyYyA9ICR0YXJnZXQuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gQmx1ci5hZGQoeyBoaWRlT25DbGljazogdHJ1ZSB9KTtcclxuICAgICAgICAkKCc8aW1nIC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2JsdXItY29udGVudCBwcmV2aWV3LWltYWdlJyxcclxuICAgICAgICAgICAgc3JjOiBzcmNcclxuICAgICAgICB9KS5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gSGVscGVyIGNsYXNzIGZvciBsb2FkZXIgYW5kIGdhbGxlcnlcclxudmFyIEJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgUFJFVklFV19DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1jb250YWluZXInO1xyXG4gICAgY29uc3QgUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTUyA9ICdwcmV2aWV3LWl0ZW0tY29udGFpbmVyJztcclxuICAgIGNvbnN0IEJMVVJfRUxFTUVOVF9DTEFTUyA9ICdibHVyJztcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCbHVyKHsgaGlkZU9uQ2xpY2ssIGNvbG9yLCBvcGFjaXR5IH0pIHtcclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2sgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGlkZU9uQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuXHJcbiAgICAgICAgbGV0ICRibHVyRWxlbWVudCA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogQkxVUl9FTEVNRU5UX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCAkaXRlbUNvbnRhaW5lciA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJHByZXZpZXdDb250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChoaWRlT25DbGljaykge1xyXG4gICAgICAgICAgICAkcHJldmlld0NvbnRhaW5lci5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50Lm9uKCdjbGljaycsIHJlbW92ZUJsdXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSAmJiBpc05hTigrb3BhY2l0eSkgJiYgb3BhY2l0eSA+PSAwICYmIG9wYWNpdHkgPD0gMSkge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHJldmlld0NvbnRhaW5lci5hcHBlbmQoJGl0ZW1Db250YWluZXIpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGJsdXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRpdGVtQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJsdXIoKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgQkxVUl9FTEVNRU5UX0NMQVNTKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCdib2R5JykuZmluZCgnLicgKyBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdzdC1uby1vdmVyZmxvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiBhZGRCbHVyLFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlQmx1clxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IEJsdXIgfTtcclxuIiwidmFyIE5vdGlmaWVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzdGF0dXMgaXMgZm9sbG93aW5nIGJvb3RzdHJhcCBjb252ZW50aW9uOiAnZGFuZ2VyJyhyZWQpLCAnd2FybmluZycoeWVsbG93KSwgJ3N1Y2Nlc3MnKGdyZWVuKSwgJ2luZm8nKGJsdWUpXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkLCB0aXRsZSwgbWVzc2FnZSwgc3RhdHVzLCBzZWNvbmRzLCBpc1Blcm1hbmVudCwgc2VsZWN0b3IgfSkge1xyXG4gICAgICAgIGxldCAkdGl0bGUgPSAkKCc8c3Ryb25nPjwvc3Ryb25nPicsIHsgdGV4dDogdGl0bGUgfHwgJycgfSk7XHJcbiAgICAgICAgbGV0ICRjbG9zZUJ1dHRvbiA9ICQoJzxhPjwvYT4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnY2xvc2UnLFxyXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ2FsZXJ0JyxcclxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2xvc2UnLFxyXG4gICAgICAgICAgICBodG1sOiAnJnRpbWVzOydcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgJG1lc3NhZ2UgPSAkKCc8c3Bhbj48L3NwYW4+JywgeyB0ZXh0OiAnICcgKyAobWVzc2FnZSB8fCAnJykgfSk7XHJcbiAgICAgICAgbGV0ICRhbGVydCA9ICQoJzxkaXY+PC9kaXY+JywgeyBjbGFzczogJ2FsZXJ0IGFsZXJ0LScgKyAoc3RhdHVzIHx8ICdpbmZvJykgfSk7XHJcblxyXG4gICAgICAgICRhbGVydC5hcHBlbmQoJHRpdGxlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRtZXNzYWdlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRjbG9zZUJ1dHRvbilcclxuICAgICAgICAgICAgLmFwcGVuZFRvKHNlbGVjdG9yIHx8IGNvbnRhaW5lcklkIHx8ICdib2R5Jyk7XHJcblxyXG4gICAgICAgIGlmICghaXNQZXJtYW5lbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkYWxlcnQuZmFkZU91dCg1MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkYWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgKHNlY29uZHMgfHwgMTApICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlQWxlcnQ6IGNyZWF0ZUFsZXJ0XHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgTm90aWZpZXIgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vZGF0YS5qcyc7XHJcblxyXG52YXIgVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZSgkZWxlbWVudCwgZXJyb3JNZXNzYWdlLCB2YWxpZGF0ZUZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAkZWxlbWVudC52YWwoKTtcclxuICAgICAgICBpZiAodmFsaWRhdGVGdW5jKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgI2ZmNjg2OCcpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5uZXh0KCdzcGFuJykudGV4dChlcnJvck1lc3NhZ2UgfHwgJ0ludmFsaWQgdmFsdWUhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWluaW11bUxlbmd0aCh2YWx1ZSwgbWluTGVuZ2h0KSB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPj0gbWluTGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWF4aW11bUxlbmd0aCh2YWx1ZSwgbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5naHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpYyh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oW2EtejAtOV0rKSQvaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16QS1aMC05O10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVXJsRnJpZW5kbHkodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOS1fXSskLztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTdGFydGluZ1dpdGhMZXR0ZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2Etel0vaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRGVjaW1hbE51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15cXGQrXFwuXFxkezAsMn0kLztcclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXi0/XFxkK1xcLj9cXGQqJC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0d1aWQoc3RyaW5nVG9UZXN0KSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ1RvVGVzdFswXSA9PT0gJ3snKSB7XHJcbiAgICAgICAgICAgIHN0cmluZ1RvVGVzdCA9IHN0cmluZ1RvVGVzdC5zdWJzdHJpbmcoMSwgc3RyaW5nVG9UZXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVnZXhHdWlkID0gL14oXFx7KXswLDF9WzAtOWEtZkEtRl17OH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXsxMn0oXFx9KXswLDF9JC9naTtcclxuICAgICAgICByZXR1cm4gcmVnZXhHdWlkLnRlc3Qoc3RyaW5nVG9UZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgJiYgcGFyc2VJbnQodmFsdWUpID09IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGxvd2VyIG9yIGVxdWFsIHRvICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1heCA/ICt2YWx1ZSA8PSArbWF4IDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heCAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvICR7bWlufS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1pbiA/ICt2YWx1ZSA+PSArbWluIDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmIChtaW4gJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZy5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbik7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIG1heGltdW0gcGVybWl0dGVkIGNoYXJhY3RlcnMgbGVuZ3RoIGlzICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heCk7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB2YWxpZGF0ZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAndmFsaWRhdGUnIGluc2lkZSB0aGUgd3JhcHBlci5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbVZhbGlkYXRpb25GdW5jIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciBoYW5kbGluZyBzcGVjaWZpYyBsb2dpYy4gV2lsbCByZWNpZXZlIHRoZSBIVE1MRWxlbWVudC5cclxuICAgICAqIE11c3QgcmV0dXJuIHRydWUgaWYgdmFsaWRhdGlvbiBpcyBwYXNzaW5nLlxyXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMoZXYpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzICYmICFldiAmJiAhZXYudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBIVE1MRWxlbWVudCBoYXMgYmVlbiBwcm92aWRlZCwgJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCAkZWxlbWVudHNUb1ZhbGlkYXRlID0gJCh0aGlzIHx8IGV2LnRhcmdldCkuZmluZCgnLnZhbGlkYXRlJyk7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudHNUb1ZhbGlkYXRlLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoJGVsZW1lbnQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhZmxhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZUZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZXMgPSB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCBmaWVsZCEnLFxyXG4gICAgICAgICAgICAnZW1haWwnOiAnSW52YWxpZCBFLU1haWwhJyxcclxuICAgICAgICAgICAgJ2ludCc6ICdOb3QgYW4gaW50ZWdlciBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ251bWJlcic6ICdOb3QgYSBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ2d1aWQnOiAnSW52YWxpZCBndWlkISdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdGlvblR5cGVzID0gKCRlbGVtZW50LmF0dHIoJ2RhdGEtdmFsaWRhdGlvbi10eXBlJykgfHwgJycpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IGlubmVyRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtaW4gPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1pbicpO1xyXG4gICAgICAgIGxldCBtYXggPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1heCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRpb25UeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1lc3NhZ2UtJyArIHZhbGlkYXRpb25UeXBlc1tpXSkgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW3ZhbGlkYXRpb25UeXBlc1tpXV07XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkYXRpb25UeXBlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICEhdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgdmFsaWRhdGVFbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVjaW1hbCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkb3VibGUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmxvYXQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCRlbGVtZW50LCBuYW1lICsgJyBtdXN0IGJlIGRlY2ltYWwgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIScsICh2YWx1ZSkgPT4geyByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZSkgPT0gdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW50JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdndWlkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNHdWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc0xlbmdodEluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhY3VzdG9tVmFsaWRhdGlvbkZ1bmMoJGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbm5lckZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFpbm5lckZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSBldiA/ICQoZXYudGFyZ2V0KSA6ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmllbGQoJHRhcmdldCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIobmFtZSwgdXJsLCBtaW5MZW5naHQsIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVVcmxPbkNoYW5nZShldikge1xyXG4gICAgICAgICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgbGV0IG1pbiA9IG1pbkxlbmdodCB8fCAkaW5wdXQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAobWluICYmICFWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0LCBgVGhlIHZhbHVlIG11c3QgYmUgYXRsZWFzdCAke21pbn0gY2hhcmFjdGVycyBsb25nIWAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgK21pbik7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkaW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRyYVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlba2V5XSA9IGV4dHJhVmFsdWVzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IHVybCwgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgcmVzLm1lc3NhZ2UgfHwgJ1ZhbHVlIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gcmVzLnN1Y2Nlc3M7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVVcmxPbkNoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybCh2YWxpZGF0ZVVybCwgJHVybEZpZWxkLCAkYnRuU3VibWl0KSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eW1xcd1xcLVxcLl0rJC9pKTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBjYW4gb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGRhc2goLSksIHBvaW50KC4pIGFuZCB1bmRlcnNjb3JlKF8pICEnLCAodikgPT4gbWF0Y2hlc1BhdHRlcm4odiwgcGF0dGVybikpKSB7XHJcbiAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiB2YWxpZGF0ZVVybCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsICh2KT0+IHJlcy5zdWNjZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVW5pcXVlbmVzKG5hbWUsIGNsYXNzVG9WYWxpZGF0ZSkge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgJGFsbE5hbWVzID0gJCgnLicgKyBjbGFzc1RvVmFsaWRhdGUpO1xyXG4gICAgICAgIGZvciAobmFtZSBpbiAkYWxsTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKCRhbGxOYW1lc1tuYW1lXS52YWx1ZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbGlkYXRlLFxyXG4gICAgICAgIGlzQWxwaGFOdW1lcmljLFxyXG4gICAgICAgIGhhc01pbmltdW1MZW5ndGgsXHJcbiAgICAgICAgdmFsaWRhdGVFbWFpbCxcclxuICAgICAgICBpc1N0YXJ0aW5nV2l0aExldHRlcixcclxuICAgICAgICBpc1VybEZyaWVuZGx5LFxyXG4gICAgICAgIGlzTnVtYmVyLFxyXG4gICAgICAgIGlzRGVjaW1hbE51bWJlcixcclxuICAgICAgICBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbixcclxuICAgICAgICBpc0Z1bmN0aW9uLFxyXG4gICAgICAgIGlzR3VpZCxcclxuICAgICAgICBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uLFxyXG4gICAgICAgIGlzSW50ZWdlcixcclxuICAgICAgICBjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcixcclxuICAgICAgICB2YWxpZGF0ZUZpZWxkLFxyXG4gICAgICAgIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVVbmlxdWVuZXMsXHJcbiAgICAgICAgdmFsaWRhdGVVcmxcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBWYWxpZGF0b3IgfTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFdhcm5pbmdXaW5kb3cgPSAoZnVuY3Rpb24gKGxvZ2dlcikge1xyXG4gICAgbG9nZ2VyID0gbG9nZ2VyIHx8IGNvbnNvbGU7XHJcbiAgICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gJ0l0IGxvb2tzIGxpa2UgeW91IGhhdmUgYmVlbiBlZGl0aW5nIHNvbWV0aGluZy4gJ1xyXG4gICAgICAgICsgJ0lmIHlvdSBsZWF2ZSBiZWZvcmUgc2F2aW5nLCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0Lic7XHJcblxyXG4gICAgZnVuY3Rpb24gb25VbmxvYWQoZSkge1xyXG4gICAgICAgIGlmICghaGFzQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG9uVW5sb2FkO1xyXG4gICAgLy92YXIgbGFzdENsaWNrT25FbGVtZW50O1xyXG4gICAgLy8kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgIGxhc3RDbGlja09uRWxlbWVudD0gJChldmVudC50YXJnZXQpO1xyXG4gICAgLy99KTtcclxuXHJcbiAgICB2YXIgbGFzdENsaWNrZWRFbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgLy9sYXN0Q2xpY2tlZCA9IHRhcmdldC50ZXh0Q29udGVudCB8fCB0YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhc1RleHRBcmVhc1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCAkdGV4dGFyZWFzID0gJCgndGV4dGFyZWEnKTtcclxuICAgICAgICAvL0FkZCB0aW55bWNlIGdldCB0ZXh0IGZyb20gdGV4dGFyZWEgbGlrZXMgaW5wdXRcclxuICAgICAgICBpZiAoJHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0lucHV0c1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCBoYXNUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0ICRpbnB1dHMgPSAkKCdpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGxldCBhdHRyID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpLmRhdGEoYXR0cmlidXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVcmwobGlua1BhdGgpIHtcclxuICAgICAgICBsb2dnZXIubG9nKFwiQ2hlY2sgdXJsXCIpO1xyXG4gICAgICAgIGxldCBhdHRyID0gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIoZ2V0TGFzdENsaWNrZWRFbGVtZW50KCksIFwiZGlzYWJsZUxpbmtcIik7XHJcblxyXG4gICAgICAgIGlmIChhdHRyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2luZyBpcyBkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2traW5nIGlzIGVuYWJsZWRcIilcclxuXHJcbiAgICAgICAgaWYgKGxpbmtQYXRoLmluZGV4T2YoJ2NyZWF0ZScpID09IC0xICYmIGxpbmtQYXRoLmluZGV4T2YoJ2VkaXQnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSB7XHJcbiAgICAgICAgbGV0IGxhc3RDbGlja2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PT0gXCJzdWJtaXRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5oYXNDbGFzcyhcImJ1dHRvbi1zdWJtaXRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuYXR0cigndHlwZScpID09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhZWxlbWVudC5hdHRyKCdkYXRhLWRpc2FibGUtd2FybmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0NoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKCFsYXN0Q2xpY2tlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGxpbmtQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIFwiZGlzYWJsZS13YXJuaW5nXCIpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGVja1VybChsaW5rUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhhc0NoYW5nZXMgPSBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHx8IGhhc0lucHV0c1dpdGhUZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RvcExlYXZlKGV2KSB7XHJcbiAgICAgICAgbGV0IGlzU2F2aW5nID0gbGFzdENsaWNrZWRFbGVtZW50ICYmICFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICQobGFzdENsaWNrZWRFbGVtZW50KSk7XHJcbiAgICAgICAgaWYgKGlzU2F2aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5wdXRDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgIGV2LnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGZvcmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBXYXJuaW5nV2luZG93IH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi9jb21tb24vdmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICcuLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5pbXBvcnQgeyBXYXJuaW5nV2luZG93IH0gZnJvbSAnLi4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcbmltcG9ydCB7IHRleHRFZGl0b3IgfSBmcm9tICcuLi90ZXh0LWVkaXRvci5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBBamF4Rm9ybShmb3JtU2VsZWN0b3IsIHJlZGlyZWN0VXJsLCB0ZXh0RWRpdG9yQXJlYXNJZHMpIHtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICBsZXQgdmFsaWRhdGlvbiA9IFZhbGlkYXRvci5jcmVhdGVGaWVsZHNWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAodGV4dEVkaXRvckFyZWFzSWRzICYmIHRleHRFZGl0b3JBcmVhc0lkcy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRFZGl0b3JBcmVhc0lkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmluaXQodGV4dEVkaXRvckFyZWFzSWRzW2ldLCA1MDAsIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZm9ybVNlbGVjdG9yKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGlvbi5hcHBseSh0aGlzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIERhdGEucG9zdEZvcm0oeyB1cmw6IHRoaXMuYWN0aW9uLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKHRoaXMpIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LnNldHVwQWpheEZvcm0gPSBzZXR1cEFqYXhGb3JtO1xyXG4iLCIvKiBnbG9iYWxzIHRpbnltY2UgKi9cclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcblxyXG52YXIgdGV4dEVkaXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0SW5zdGFjZUNhbGxiYWNrKGVkaXRvcikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgV2FybmluZ1dpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgV2FybmluZ1dpbmRvdy5mb3JjZSkge1xyXG4gICAgICAgICAgICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgV2FybmluZ1dpbmRvdy5mb3JjZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIGVkaXRvci5hZGRCdXR0b24oJ2N1c3RvbWJ1dHRvbicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ21lbnVidXR0b24nLFxyXG4gICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tJyxcclxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbnU6IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nb3V0IGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5pbnNlcnRDb250ZW50KCc8YSBocmVmPVwiL2xvZ291dFwiPkxvZ291dDwvYT4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGlmIChvbkluaXRDYWxsYmFjayAmJiB7fS50b1N0cmluZy5jYWxsKG9uSW5pdENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xyXG4gICAgICAgICAgICAgICAgb25Jbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBlbmFibGUgYXV0by1zeW5jIHdpdGggdGhlIHRleHRhcmVhXHJcbiAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbnltY2UudHJpZ2dlclNhdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbWFnZV9saXN0KHN1Y2Nlc3MpIHtcclxuICAgICAgICAkLmdldCgnL3NpdGV0cmlrcy9maWxlcy9nZXRhbGxpbWFnZXMnLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzLmltYWdlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsZV9waWNrZXJfY2FsbGJhY2soY2IsIHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2ltYWdlLyonKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGlucHV0KTtcclxuXHJcbiAgICAgICAgLy8gTm90ZTogSW4gbW9kZXJuIGJyb3dzZXJzIGlucHV0W3R5cGU9XCJmaWxlXCJdIGlzIGZ1bmN0aW9uYWwgd2l0aG91dCBcclxuICAgICAgICAvLyBldmVuIGFkZGluZyBpdCB0byB0aGUgRE9NLCBidXQgdGhhdCBtaWdodCBub3QgYmUgdGhlIGNhc2UgaW4gc29tZSBvbGRlclxyXG4gICAgICAgIC8vIG9yIHF1aXJreSBicm93c2VycyBsaWtlIElFLCBzbyB5b3UgbWlnaHQgd2FudCB0byBhZGQgaXQgdG8gdGhlIERPTVxyXG4gICAgICAgIC8vIGp1c3QgaW4gY2FzZSwgYW5kIHZpc3VhbGx5IGhpZGUgaXQuIEFuZCBkbyBub3QgZm9yZ2V0IGRvIHJlbW92ZSBpdFxyXG4gICAgICAgIC8vIG9uY2UgeW91IGRvIG5vdCBuZWVkIGl0IGFueW1vcmUuXHJcblxyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IE5vdyB3ZSBuZWVkIHRvIHJlZ2lzdGVyIHRoZSBibG9iIGluIFRpbnlNQ0VzIGltYWdlIGJsb2JcclxuICAgICAgICAgICAgICAgIC8vIHJlZ2lzdHJ5LiBJbiB0aGUgbmV4dCByZWxlYXNlIHRoaXMgcGFydCBob3BlZnVsbHkgd29uJ3QgYmVcclxuICAgICAgICAgICAgICAgIC8vIG5lY2Vzc2FyeSwgYXMgd2UgYXJlIGxvb2tpbmcgdG8gaGFuZGxlIGl0IGludGVybmFsbHkuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAnYmxvYmlkJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkNhY2hlID0gdGlueW1jZS5hY3RpdmVFZGl0b3IuZWRpdG9yVXBsb2FkLmJsb2JDYWNoZTtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkluZm8gPSBibG9iQ2FjaGUuY3JlYXRlKGlkLCBmaWxlLCBiYXNlNjQpO1xyXG4gICAgICAgICAgICAgICAgYmxvYkNhY2hlLmFkZChibG9iSW5mbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgYW5kIHBvcHVsYXRlIHRoZSBUaXRsZSBmaWVsZCB3aXRoIHRoZSBmaWxlIG5hbWVcclxuICAgICAgICAgICAgICAgIGNiKGJsb2JJbmZvLmJsb2JVcmkoKSwgeyB0aXRsZTogZmlsZS5uYW1lIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICB2ZXJpZnlfaHRtbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnc3BhbicsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnZGl2W2NsYXNzfGlkfHN0eWxlfHNwYW5dLHNwYW5bY2xhc3N8aWR8c3R5bGVdJyxcclxuICAgICAgICAgICAgZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHM6ICdkaXZbKl0sc3BhblsqXScsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnbW9kZXJuJyxcclxuICAgICAgICAgICAgbW9kZTogJ3RleHRhcmVhcycsXHJcbiAgICAgICAgICAgIGZvcmNlX2JyX25ld2xpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VfcF9uZXdsaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlZF9yb290X2Jsb2NrOiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgcGx1Z2luczogWydhZHZsaXN0IGF1dG9saW5rIGNvZGVzYW1wbGUgbGluayBpbWFnZSBsaXN0cyBjaGFybWFwIHByaW50IHByZXZpZXcgaHIgYW5jaG9yIHBhZ2VicmVhayBmdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHdvcmRjb3VudCB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgY29kZSBpbnNlcnRkYXRldGltZSBub25icmVha2luZycsICdzYXZlIHRhYmxlIGNvbnRleHRtZW51IGRpcmVjdGlvbmFsaXR5IHBhc3RlIHRleHRjb2xvciddLFxyXG4gICAgICAgICAgICBleHRlcm5hbF9wbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAnY29kZUhpZ2hsJzogJy9wbHVnaW5zL3RpbnltY2UvY29kZS1oaWdobGlnaHQtdGlueW1jZS1wbHVnaW4uanMnLFxyXG4gICAgICAgICAgICAgICAgJ2h0bWxCbG9ja3MnOiAnL3BsdWdpbnMvdGlueW1jZS9odG1sLWNvbXBvbmVudHMtdGlueW1jZS1wbHVnaW4uanMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyb3dzZXJfc3BlbGxjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGV4dG1lbnU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXN0ZV9hc190ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9jYXB0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9hZHZ0YWI6IHRydWUsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnZmlsZSBpbWFnZSBtZWRpYScsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX2NhbGxiYWNrOiBmaWxlX3BpY2tlcl9jYWxsYmFjayxcclxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlIHwgcHJpbnQgcHJldmlldyBtZWRpYSBmdWxscGFnZSB8IGZvcmVjb2xvciBiYWNrY29sb3IgY29kZSB8IGNvZGVIaWdobCB8IGZvbnRzaXplc2VsZWN0IHwgZm9udHNlbGVjdCB8IGN1c3RvbWJ1dHRvbicsXHJcbiAgICAgICAgICAgIGZvbnRzaXplX2Zvcm1hdHM6ICc4cHggMTBweCAxMnB4IDE0cHggMTZweCAxOHB4IDIwcHggMjJweCAyNHB4IDM2cHggNDhweCcsXHJcbiAgICAgICAgICAgIHNldHVwOiBlZGl0b3IgPT4gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjayksXHJcbiAgICAgICAgICAgIGluaXRfaW5zdGFuY2VfY2FsbGJhY2s6IGluaXRJbnN0YWNlQ2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGNmZyA9IGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKTtcclxuICAgICAgICBjZmcuaW1hZ2VfbGlzdCA9IGltYWdlX2xpc3Q7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFdpdGhvdXRJbWFnZXMoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGVkaXRvciA9IHRpbnltY2UuZ2V0KHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWRpdG9yKSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIHRpbnltY2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBsZXQgZWRpdG9yID0gdGlueW1jZS5nZXQoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgZWRpdG9yLnNldENvbnRlbnQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3RvciBtdXN0IGJlIElkXHJcbiAgICBmdW5jdGlvbiBnZXRDb250ZW50KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbnltY2UuZ2V0KGlkKS5nZXRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRWRpdG9yKGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0lkIGZvciB0aGUgdGV4dCBlZGl0b3IgbXVzdCBiZSBzcGVjaWZpZWQhJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgNjAwO1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAzMDA7XHJcbiAgICAgICAgaWYgKGlkWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoaWQuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLnJlbW92ZShpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0RWRpdG9yLmluaXQoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCxcclxuICAgICAgICBpbml0V2l0aG91dEltYWdlcyxcclxuICAgICAgICBnZXRDb250ZW50LFxyXG4gICAgICAgIHJlbW92ZSxcclxuICAgICAgICByZW1vdmVBbGwsXHJcbiAgICAgICAgY2xlYXIsXHJcbiAgICAgICAgYWRkRWRpdG9yXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgdGV4dEVkaXRvciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9