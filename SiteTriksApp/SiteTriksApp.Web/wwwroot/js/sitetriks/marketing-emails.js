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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/marketing-emails.js");
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

/***/ "./scripts/sitetriks/marketing-emails.js":
/*!***********************************************!*\
  !*** ./scripts/sitetriks/marketing-emails.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _textEditor = __webpack_require__(/*! ../text-editor.js */ "./scripts/text-editor.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function editSubscribeInfo(selectedGroups) {
    var groupsString = selectedGroups.toString();
    for (var i = 0; i < groupsString.length; i++) {

        if (i == 0) {
            $('input[name="features-releases"][value="' + groupsString[i] + '"]').attr('checked', 'checked');
        } else if (i == 1) {
            $('input[name="promotional-materials"][value="' + groupsString[i] + '"]').attr('checked', 'checked');
        }
    }

    $('input[type=submit]').on('click', function (e) {
        var $email = $('#email');
        var $name = $('#name');
        var $featuresReleases = $('input[name="features-releases"]:checked');
        var $promotionalMaterials = $('input[name="promotional-materials"]:checked');
        var flag = true;

        e.preventDefault();

        if (!_validator.Validator.validate($('#email'), 'Must enter valid email', function (val) {
            return _validator.Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!_validator.Validator.validate($('#name'), 'Name must be at least 3 symbols', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3) && _validator.Validator.isStartingWithLetter(val);
        })) {
            flag = false;
        }

        if (flag) {
            var emailGroups = $featuresReleases.val().toString() + $promotionalMaterials.val().toString();

            var subscriberData = {
                Name: $name.val(),
                Email: $email.val(),
                Groups: emailGroups
            };

            _data.Data.postJson({ url: '/sitetriks/marketingEmails/editsubscribeinfo', data: subscriberData }).then(function (res) {
                _notifier.Notifier.createAlert({ containerId: '#subscription-form-container', message: res.message, status: res.success ? 'info' : 'warning', seconds: 5 });

                setTimeout(function () {
                    window.location = '/';
                }, 1000);
            });
        }
    });
}

function sendEmails() {
    var $emailGroup = $('input[name="email-group"]:checked');
    var hasReseivers = false;
    var userEmails = [];

    _warningWindow.WarningWindow.attach();
    _textEditor.textEditor.init('#content-area', 500, 300);

    $('input[type="checkbox"]').change(function () {
        var usersContainer = $('#users');
        usersContainer.empty();
        var messageBox = $('<p></p>');
        messageBox.empty();
        var usersList = $('<p></p>');

        var selectedGroups = [];

        $('input:checkbox:checked').each(function () {
            var intValue = parseInt($(this).val());
            selectedGroups.push(intValue);
        });

        var model = {
            Indexes: selectedGroups
        };

        _data.Data.postJson({ url: '/sitetriks/marketingEmails/GetAllUsersInGroup', data: model }).then(function (res) {
            if (res.success == true) {
                hasReseivers = true;
                userEmails = res.users;
                usersList.text('Email receivers: ' + res.users.join(';'));
            } else {
                hasReseivers = false;
                messageBox.text(res.message);
            }

            usersContainer.append(messageBox).append(usersList);
        });
    });

    $('input[type=submit]').on('click', function (e) {
        _loader.Loader.show(true);
        var $validationBox = $('#email-group-options > .validation-output');

        e.preventDefault();

        var flag = true;

        if (!_validator.Validator.validate($('#sender'), 'Must enter valid email', function (val) {
            return _validator.Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!_validator.Validator.validate($('#checkboxes'), 'Must select users from groups.', function (val) {
            if (!hasReseivers) {
                return false;
            }
            return true;
        })) {
            flag = false;
        }
        if (flag) {
            var emailData = {
                Sender: $('#sender').val(),
                Subject: $('#subject').val(),
                Content: _textEditor.textEditor.getContent('content-area'),
                Receivers: userEmails
            };

            _data.Data.postJson({ url: '/sitetriks/marketingEmails/sendEmails', data: emailData }).then(function (res) {
                _notifier.Notifier.createAlert({ containerId: '#alert', message: 'Email was send successfully', success: 'success' });
                setTimeout(function () {
                    window.location = '/sitetriks/marketingemails/sendemails';
                }, 1000);
            });
        }

        _loader.Loader.hide();
    });
}

window.editSubscribeInfo = editSubscribeInfo;
window.sendEmails = sendEmails;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy9tYXJrZXRpbmctZW1haWxzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdGV4dC1lZGl0b3IuanMiXSwibmFtZXMiOlsiRGF0YSIsIm1ha2VSZXF1ZXN0IiwiZmV0Y2giLCJpc0Z1bmN0aW9uIiwibWFrZUZldGNoUmVxdWVzdCIsIm1ha2VBamF4UmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiaXNGb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJhbXMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIiQiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJ0ZXh0IiwiZ2V0SnNvbiIsImRpc2FibGVDYWNoZSIsInBvc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RGb3JtIiwiZm9ybURhdGEiLCJkZWxldGVKc29uIiwiZGVmYXVsdEVycm9yIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwidG9TdHJpbmciLCJjYWxsIiwiTG9hZGVyIiwiZ2lmU3JjIiwic2hvdyIsImNvbG9yIiwiaW1nU3JjIiwiQmx1ciIsImFkZCIsImFwcGVuZCIsInNyYyIsImNsYXNzIiwiaGlkZSIsInJlbW92ZSIsIm9uIiwiZXYiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiYXR0ciIsIiRjb250YWluZXIiLCJoaWRlT25DbGljayIsImFwcGVuZFRvIiwiUFJFVklFV19DT05UQUlORVJfQ0xBU1MiLCJQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTIiwiQkxVUl9FTEVNRU5UX0NMQVNTIiwiYWRkQmx1ciIsIm9wYWNpdHkiLCJhZGRDbGFzcyIsIiRibHVyRWxlbWVudCIsIiRpdGVtQ29udGFpbmVyIiwiJHByZXZpZXdDb250YWluZXIiLCJyZW1vdmVCbHVyIiwiY3NzIiwiaXNOYU4iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJOb3RpZmllciIsImNyZWF0ZUFsZXJ0IiwiY29udGFpbmVySWQiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzZWNvbmRzIiwiaXNQZXJtYW5lbnQiLCJzZWxlY3RvciIsIiR0aXRsZSIsIiRjbG9zZUJ1dHRvbiIsImh0bWwiLCIkbWVzc2FnZSIsIiRhbGVydCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiVmFsaWRhdG9yIiwidmFsaWRhdGUiLCIkZWxlbWVudCIsImVycm9yTWVzc2FnZSIsInZhbGlkYXRlRnVuYyIsInZhbHVlIiwidmFsIiwibmV4dCIsImhhc01pbmltdW1MZW5ndGgiLCJtaW5MZW5naHQiLCJoYXNNYXhpbXVtTGVuZ3RoIiwibWF4TGVuZ2h0IiwiaXNBbHBoYU51bWVyaWMiLCJwYXR0ZXJuIiwidGVzdCIsImlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uIiwiaXNQYXNzaW5nIiwiaXNVcmxGcmllbmRseSIsImlzU3RhcnRpbmdXaXRoTGV0dGVyIiwidmFsaWRhdGVFbWFpbCIsImlzRGVjaW1hbE51bWJlciIsIm1hdGNoZXNQYXR0ZXJuIiwiaXNOdW1iZXIiLCJpc0d1aWQiLCJzdHJpbmdUb1Rlc3QiLCJzdWJzdHJpbmciLCJyZWdleEd1aWQiLCJpc0ludGVnZXIiLCJwYXJzZUludCIsImlzTnVtYmVySW5SYW5nZSIsIm1pbiIsIm1heCIsImlzTGVuZ2h0SW5SYW5nZSIsImNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24iLCJjdXN0b21WYWxpZGF0aW9uRnVuYyIsInZhbGlkYXRlRmllbGRzIiwiJGVsZW1lbnRzVG9WYWxpZGF0ZSIsImZsYWciLCJlYWNoIiwiXyIsImVsZW1lbnQiLCJ2YWxpZGF0ZUZpZWxkIiwidmFsaWRhdGlvbk1lc3NhZ2VzIiwidmFsaWRhdGlvblR5cGVzIiwic3BsaXQiLCJpbm5lckZsYWciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIm5hbWUiLCJwYXJzZUZsb2F0IiwiY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlciIsImNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyIiwiZXh0cmFWYWx1ZXMiLCJ0aW1lciIsInZhbGlkYXRlVXJsT25DaGFuZ2UiLCIkaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJrZXkiLCJ2YWxpZGF0ZVVybCIsIiR1cmxGaWVsZCIsIiRidG5TdWJtaXQiLCJSZWdFeHAiLCJ2IiwidmFsaWRhdGVVbmlxdWVuZXMiLCJjbGFzc1RvVmFsaWRhdGUiLCJjb3VudGVyIiwiJGFsbE5hbWVzIiwiV2FybmluZ1dpbmRvdyIsImxvZ2dlciIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJvblVubG9hZCIsImUiLCJoYXNDaGFuZ2VzIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImxhc3RDbGlja2VkRWxlbWVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImV2ZW50Iiwic3JjRWxlbWVudCIsImhhc1RleHRBcmVhc1dpdGhUZXh0IiwiJHRleHRhcmVhcyIsImhhc0lucHV0c1dpdGhUZXh0IiwiaGFzVGV4dCIsIiRpbnB1dHMiLCJjaGVja0VsZW1lbnRGb3JEYXRhQXR0ciIsImF0dHJpYnV0ZSIsImNoZWNrVXJsIiwibGlua1BhdGgiLCJnZXRMYXN0Q2xpY2tlZEVsZW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3VibWl0QnV0dG9uQ2hlY2siLCJ0YWdOYW1lIiwiaGFzQ2xhc3MiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5wdXRDaGFuZ2VkIiwiZGVmYXVsdFN0b3BMZWF2ZSIsImlzU2F2aW5nIiwiYXR0YWNoIiwib25iZWZvcmV1bmxvYWQiLCJkZXRhY2giLCJmb3JjZSIsImVkaXRTdWJzY3JpYmVJbmZvIiwic2VsZWN0ZWRHcm91cHMiLCJncm91cHNTdHJpbmciLCIkZW1haWwiLCIkbmFtZSIsIiRmZWF0dXJlc1JlbGVhc2VzIiwiJHByb21vdGlvbmFsTWF0ZXJpYWxzIiwiZW1haWxHcm91cHMiLCJzdWJzY3JpYmVyRGF0YSIsIk5hbWUiLCJFbWFpbCIsIkdyb3VwcyIsInNlbmRFbWFpbHMiLCIkZW1haWxHcm91cCIsImhhc1Jlc2VpdmVycyIsInVzZXJFbWFpbHMiLCJ0ZXh0RWRpdG9yIiwiaW5pdCIsImNoYW5nZSIsInVzZXJzQ29udGFpbmVyIiwiZW1wdHkiLCJtZXNzYWdlQm94IiwidXNlcnNMaXN0IiwiaW50VmFsdWUiLCJwdXNoIiwibW9kZWwiLCJJbmRleGVzIiwidXNlcnMiLCJqb2luIiwiJHZhbGlkYXRpb25Cb3giLCJlbWFpbERhdGEiLCJTZW5kZXIiLCJTdWJqZWN0IiwiQ29udGVudCIsImdldENvbnRlbnQiLCJSZWNlaXZlcnMiLCJpbml0SW5zdGFjZUNhbGxiYWNrIiwiZWRpdG9yIiwic2V0dXBFZGl0b3IiLCJvbkluaXRDYWxsYmFjayIsImFkZEJ1dHRvbiIsInR5cGUiLCJpY29uIiwibWVudSIsIm9uY2xpY2siLCJpbnNlcnRDb250ZW50IiwidGlueW1jZSIsInRyaWdnZXJTYXZlIiwiaW1hZ2VfbGlzdCIsImltYWdlcyIsImZpbGVfcGlja2VyX2NhbGxiYWNrIiwiY2IiLCJtZXRhIiwiaW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaWQiLCJEYXRlIiwiZ2V0VGltZSIsImJsb2JDYWNoZSIsImFjdGl2ZUVkaXRvciIsImVkaXRvclVwbG9hZCIsImJhc2U2NCIsInJlc3VsdCIsImJsb2JJbmZvIiwiY3JlYXRlIiwiYmxvYlVyaSIsInJlYWRBc0RhdGFVUkwiLCJjbGljayIsImNyZWF0ZUJhc2VDb25maWciLCJ3aWR0aCIsImhlaWdodCIsInZlcmlmeV9odG1sIiwiZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHMiLCJjZmciLCJpbml0V2l0aG91dEltYWdlcyIsInJlbW92ZUFsbCIsImNsZWFyIiwic2V0Q29udGVudCIsImFkZEVkaXRvciIsIndhcm4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxPQUFRLFlBQVk7QUFDcEIsUUFBSUMsY0FBYyxPQUFPQyxLQUFQLEtBQWlCLFdBQWpCLElBQWdDQyxXQUFXRCxLQUFYLENBQWhDLEdBQW9ERSxnQkFBcEQsR0FBdUVDLGVBQXpGLENBRG9CLENBQ3NGOztBQUUxRyxhQUFTQSxlQUFULE9BQWlFO0FBQUEsWUFBdENDLEdB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SDs7QUFFRCxXQUFPO0FBQ0g1RCxrQkFERztBQUVIZ0UsNENBRkc7QUFHSC9DLDhCQUhHO0FBSUgvSyxzQkFKRztBQUtIK04sNEJBTEc7QUFNSEMsb0JBTkc7QUFPSEU7QUFQRyxLQUFQO0FBU0gsQ0F4S2dCLEVBQWpCOztRQTBLU3JFLFUsR0FBQUEsVSIsImZpbGUiOiJqcy9zaXRldHJpa3MvbWFya2V0aW5nLWVtYWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NjcmlwdHMvc2l0ZXRyaWtzL21hcmtldGluZy1lbWFpbHMuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxudmFyIFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoJGVsZW1lbnQsIGVycm9yTWVzc2FnZSwgdmFsaWRhdGVGdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRnVuYyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnJyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkICNmZjY4NjgnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoZXJyb3JNZXNzYWdlIHx8ICdJbnZhbGlkIHZhbHVlIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbkxlbmdodCkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IG1pbkxlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heExlbmdodCkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWModmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKFthLXowLTldKykkL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24odmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOTtdKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1VybEZyaWVuZGx5KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTktX10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3RhcnRpbmdXaXRoTGV0dGVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpdL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eXFxkK1xcLlxcZHswLDJ9JC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14tP1xcZCtcXC4/XFxkKiQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNHdWlkKHN0cmluZ1RvVGVzdCkge1xyXG4gICAgICAgIGlmIChzdHJpbmdUb1Rlc3RbMF0gPT09ICd7Jykge1xyXG4gICAgICAgICAgICBzdHJpbmdUb1Rlc3QgPSBzdHJpbmdUb1Rlc3Quc3Vic3RyaW5nKDEsIHN0cmluZ1RvVGVzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ2V4R3VpZCA9IC9eKFxceyl7MCwxfVswLTlhLWZBLUZdezh9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17MTJ9KFxcfSl7MCwxfSQvZ2k7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4R3VpZC50ZXN0KHN0cmluZ1RvVGVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHBhcnNlSW50KHZhbHVlKSA9PSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBsb3dlciBvciBlcXVhbCB0byAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtYXggPyArdmFsdWUgPD0gK21heCA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byAke21pbn0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtaW4gPyArdmFsdWUgPj0gK21pbiA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmcuYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW4pOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSBtYXhpbXVtIHBlcm1pdHRlZCBjaGFyYWN0ZXJzIGxlbmd0aCBpcyAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXgpOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdmFsaWRhdGUgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgJ3ZhbGlkYXRlJyBpbnNpZGUgdGhlIHdyYXBwZXIuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21WYWxpZGF0aW9uRnVuYyBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgc3BlY2lmaWMgbG9naWMuIFdpbGwgcmVjaWV2ZSB0aGUgSFRNTEVsZW1lbnQuXHJcbiAgICAgKiBNdXN0IHJldHVybiB0cnVlIGlmIHZhbGlkYXRpb24gaXMgcGFzc2luZy5cclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRzVmFsaWRhdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzKGV2KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcyAmJiAhZXYgJiYgIWV2LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gSFRNTEVsZW1lbnQgaGFzIGJlZW4gcHJvdmlkZWQsICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgJGVsZW1lbnRzVG9WYWxpZGF0ZSA9ICQodGhpcyB8fCBldi50YXJnZXQpLmZpbmQoJy52YWxpZGF0ZScpO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnRzVG9WYWxpZGF0ZS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIWZsYWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnUmVxdWlyZWQgZmllbGQhJyxcclxuICAgICAgICAgICAgJ2VtYWlsJzogJ0ludmFsaWQgRS1NYWlsIScsXHJcbiAgICAgICAgICAgICdpbnQnOiAnTm90IGFuIGludGVnZXIgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdudW1iZXInOiAnTm90IGEgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdndWlkJzogJ0ludmFsaWQgZ3VpZCEnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25UeXBlcyA9ICgkZWxlbWVudC5hdHRyKCdkYXRhLXZhbGlkYXRpb24tdHlwZScpIHx8ICcnKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCBpbm5lckZsYWcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWluID0gJGVsZW1lbnQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICBsZXQgbWF4ID0gJGVsZW1lbnQuYXR0cignZGF0YS1tYXgnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0aW9uVHlwZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJGVsZW1lbnQuYXR0cignZGF0YS1tZXNzYWdlLScgKyB2YWxpZGF0aW9uVHlwZXNbaV0pIHx8IHZhbGlkYXRpb25NZXNzYWdlc1t2YWxpZGF0aW9uVHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh2YWxpZGF0aW9uVHlwZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhIXZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIHZhbGlkYXRlRW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG91YmxlJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zsb2F0JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgbmFtZSArICcgbXVzdCBiZSBkZWNpbWFsIGZsb2F0aW5nIHBvaW50IG51bWJlciEnLCAodmFsdWUpID0+IHsgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUpID09IHZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ludCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzSW50ZWdlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3VpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzR3VpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWN1c3RvbVZhbGlkYXRpb25GdW5jKCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5uZXJGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhaW5uZXJGbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIoY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gZXYgPyAkKGV2LnRhcmdldCkgOiAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKCR0YXJnZXQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyKG5hbWUsIHVybCwgbWluTGVuZ2h0LCBleHRyYVZhbHVlcykge1xyXG4gICAgICAgIGxldCB0aW1lciA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsT25DaGFuZ2UoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGxldCBtaW4gPSBtaW5MZW5naHQgfHwgJGlucHV0LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG1pbiAmJiAhVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0bGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZyFgLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBWYWxpZGF0b3IuaGFzTWluaW11bUxlbmd0aCh2YWwsICttaW4pOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5W2tleV0gPSBleHRyYVZhbHVlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiB1cmwsIGRhdGE6IGJvZHkgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIHJlcy5tZXNzYWdlIHx8ICdWYWx1ZSBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHJlcy5zdWNjZXNzOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlVXJsT25DaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVcmwodmFsaWRhdGVVcmwsICR1cmxGaWVsZCwgJGJ0blN1Ym1pdCkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXltcXHdcXC1cXC5dKyQvaSk7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgY2FuIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoKC0pLCBwb2ludCguKSBhbmQgdW5kZXJzY29yZShfKSAhJywgKHYpID0+IG1hdGNoZXNQYXR0ZXJuKHYsIHBhdHRlcm4pKSkge1xyXG4gICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogdmFsaWRhdGVVcmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCAodik9PiByZXMuc3VjY2VzcykpIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVuaXF1ZW5lcyhuYW1lLCBjbGFzc1RvVmFsaWRhdGUpIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgdmFyICRhbGxOYW1lcyA9ICQoJy4nICsgY2xhc3NUb1ZhbGlkYXRlKTtcclxuICAgICAgICBmb3IgKG5hbWUgaW4gJGFsbE5hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICgkYWxsTmFtZXNbbmFtZV0udmFsdWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZGF0ZSxcclxuICAgICAgICBpc0FscGhhTnVtZXJpYyxcclxuICAgICAgICBoYXNNaW5pbXVtTGVuZ3RoLFxyXG4gICAgICAgIHZhbGlkYXRlRW1haWwsXHJcbiAgICAgICAgaXNTdGFydGluZ1dpdGhMZXR0ZXIsXHJcbiAgICAgICAgaXNVcmxGcmllbmRseSxcclxuICAgICAgICBpc051bWJlcixcclxuICAgICAgICBpc0RlY2ltYWxOdW1iZXIsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24sXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBpc0d1aWQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRzVmFsaWRhdGlvbixcclxuICAgICAgICBpc0ludGVnZXIsXHJcbiAgICAgICAgY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVGaWVsZCxcclxuICAgICAgICBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlVW5pcXVlbmVzLFxyXG4gICAgICAgIHZhbGlkYXRlVXJsXHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgVmFsaWRhdG9yIH07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBXYXJuaW5nV2luZG93ID0gKGZ1bmN0aW9uIChsb2dnZXIpIHtcclxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCBjb25zb2xlO1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9ICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGJlZW4gZWRpdGluZyBzb21ldGhpbmcuICdcclxuICAgICAgICArICdJZiB5b3UgbGVhdmUgYmVmb3JlIHNhdmluZywgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcclxuICAgICAgICBpZiAoIWhhc0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBvblVubG9hZDtcclxuICAgIC8vdmFyIGxhc3RDbGlja09uRWxlbWVudDtcclxuICAgIC8vJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICBsYXN0Q2xpY2tPbkVsZW1lbnQ9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vfSk7XHJcblxyXG4gICAgdmFyIGxhc3RDbGlja2VkRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIC8vbGFzdENsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgJHRleHRhcmVhcyA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgLy9BZGQgdGlueW1jZSBnZXQgdGV4dCBmcm9tIHRleHRhcmVhIGxpa2VzIGlucHV0XHJcbiAgICAgICAgaWYgKCR0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNJbnB1dHNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkaW5wdXRzID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgYXR0ciA9ICQobGFzdENsaWNrZWRFbGVtZW50KS5kYXRhKGF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVXJsKGxpbmtQYXRoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIkNoZWNrIHVybFwiKTtcclxuICAgICAgICBsZXQgYXR0ciA9IGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGdldExhc3RDbGlja2VkRWxlbWVudCgpLCBcImRpc2FibGVMaW5rXCIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2tpbmcgaXMgZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNra2luZyBpcyBlbmFibGVkXCIpXHJcblxyXG4gICAgICAgIGlmIChsaW5rUGF0aC5pbmRleE9mKCdjcmVhdGUnKSA9PSAtMSAmJiBsaW5rUGF0aC5pbmRleE9mKCdlZGl0JykgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuaGFzQ2xhc3MoXCJidXR0b24tc3VibWl0XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50LmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuYXR0cignZGF0YS1kaXNhYmxlLXdhcm5pbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghbGFzdENsaWNrZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBsaW5rUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICRlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBcImRpc2FibGUtd2FybmluZ1wiKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tVcmwobGlua1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNDaGFuZ2VzID0gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB8fCBoYXNJbnB1dHNXaXRoVGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0b3BMZWF2ZShldikge1xyXG4gICAgICAgIGxldCBpc1NhdmluZyA9IGxhc3RDbGlja2VkRWxlbWVudCAmJiAhc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkKGxhc3RDbGlja2VkRWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChpc1NhdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlucHV0Q2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LCBcclxuICAgICAgICBmb3JjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgV2FybmluZ1dpbmRvdyB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21tb24vbG9hZGVyLmpzJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tbW9uL3ZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnLi4vY29tbW9uL25vdGlmaWVyLmpzJztcclxuaW1wb3J0IHsgdGV4dEVkaXRvciB9IGZyb20gJy4uL3RleHQtZWRpdG9yLmpzJztcclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4uL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMnO1xyXG5cclxuZnVuY3Rpb24gZWRpdFN1YnNjcmliZUluZm8oc2VsZWN0ZWRHcm91cHMpIHtcclxuICAgIGxldCBncm91cHNTdHJpbmcgPSBzZWxlY3RlZEdyb3Vwcy50b1N0cmluZygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cHNTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZmVhdHVyZXMtcmVsZWFzZXNcIl1bdmFsdWU9XCInICsgZ3JvdXBzU3RyaW5nW2ldICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcm9tb3Rpb25hbC1tYXRlcmlhbHNcIl1bdmFsdWU9XCInICsgZ3JvdXBzU3RyaW5nW2ldICsgJ1wiXScpLmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJCgnaW5wdXRbdHlwZT1zdWJtaXRdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgJGVtYWlsID0gJCgnI2VtYWlsJyk7XHJcbiAgICAgICAgbGV0ICRuYW1lID0gJCgnI25hbWUnKTtcclxuICAgICAgICBsZXQgJGZlYXR1cmVzUmVsZWFzZXMgPSAkKCdpbnB1dFtuYW1lPVwiZmVhdHVyZXMtcmVsZWFzZXNcIl06Y2hlY2tlZCcpO1xyXG4gICAgICAgIGxldCAkcHJvbW90aW9uYWxNYXRlcmlhbHMgPSAkKCdpbnB1dFtuYW1lPVwicHJvbW90aW9uYWwtbWF0ZXJpYWxzXCJdOmNoZWNrZWQnKTtcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJCgnI2VtYWlsJyksICdNdXN0IGVudGVyIHZhbGlkIGVtYWlsJywgZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9yLnZhbGlkYXRlRW1haWwodmFsKTtcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkKCcjbmFtZScpLCAnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgc3ltYm9scycsIGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgMykgJiYgVmFsaWRhdG9yLmlzU3RhcnRpbmdXaXRoTGV0dGVyKHZhbCk7XHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsR3JvdXBzID0gJGZlYXR1cmVzUmVsZWFzZXMudmFsKCkudG9TdHJpbmcoKSArICRwcm9tb3Rpb25hbE1hdGVyaWFscy52YWwoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN1YnNjcmliZXJEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogJG5hbWUudmFsKCksXHJcbiAgICAgICAgICAgICAgICBFbWFpbDogJGVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBzOiBlbWFpbEdyb3Vwc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogJy9zaXRldHJpa3MvbWFya2V0aW5nRW1haWxzL2VkaXRzdWJzY3JpYmVpbmZvJywgZGF0YTogc3Vic2NyaWJlckRhdGEgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI3N1YnNjcmlwdGlvbi1mb3JtLWNvbnRhaW5lcicsIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLCBzdGF0dXM6IChyZXMuc3VjY2VzcyA/ICdpbmZvJyA6ICd3YXJuaW5nJyksIHNlY29uZHM6IDUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy8nO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kRW1haWxzKCkge1xyXG4gICAgbGV0ICRlbWFpbEdyb3VwID0gJCgnaW5wdXRbbmFtZT1cImVtYWlsLWdyb3VwXCJdOmNoZWNrZWQnKTtcclxuICAgIGxldCBoYXNSZXNlaXZlcnMgPSBmYWxzZTtcclxuICAgIGxldCB1c2VyRW1haWxzID0gW107XHJcblxyXG4gICAgV2FybmluZ1dpbmRvdy5hdHRhY2goKTtcclxuICAgIHRleHRFZGl0b3IuaW5pdCgnI2NvbnRlbnQtYXJlYScsIDUwMCwgMzAwKTtcclxuXHJcbiAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB1c2Vyc0NvbnRhaW5lciA9ICQoJyN1c2VycycpO1xyXG4gICAgICAgIHVzZXJzQ29udGFpbmVyLmVtcHR5KCk7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VCb3ggPSAkKCc8cD48L3A+Jyk7XHJcbiAgICAgICAgbWVzc2FnZUJveC5lbXB0eSgpO1xyXG4gICAgICAgIGxldCB1c2Vyc0xpc3QgPSAkKCc8cD48L3A+Jyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWRHcm91cHMgPSBbXTtcclxuXHJcbiAgICAgICAgJCgnaW5wdXQ6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaW50VmFsdWUgPSBwYXJzZUludCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRHcm91cHMucHVzaChpbnRWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBtb2RlbCA9IHtcclxuICAgICAgICAgICAgSW5kZXhlczogc2VsZWN0ZWRHcm91cHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9tYXJrZXRpbmdFbWFpbHMvR2V0QWxsVXNlcnNJbkdyb3VwJywgZGF0YTogbW9kZWwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNSZXNlaXZlcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdXNlckVtYWlscyA9IHJlcy51c2VycztcclxuICAgICAgICAgICAgICAgIHVzZXJzTGlzdC50ZXh0KCdFbWFpbCByZWNlaXZlcnM6ICcgKyByZXMudXNlcnMuam9pbignOycpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhhc1Jlc2VpdmVycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0KHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXNlcnNDb250YWluZXIuYXBwZW5kKG1lc3NhZ2VCb3gpLmFwcGVuZCh1c2Vyc0xpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnaW5wdXRbdHlwZT1zdWJtaXRdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBMb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICBsZXQgJHZhbGlkYXRpb25Cb3ggPSAkKCcjZW1haWwtZ3JvdXAtb3B0aW9ucyA+IC52YWxpZGF0aW9uLW91dHB1dCcpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJCgnI3NlbmRlcicpLCAnTXVzdCBlbnRlciB2YWxpZCBlbWFpbCcsIGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvci52YWxpZGF0ZUVtYWlsKHZhbCk7XHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJCgnI2NoZWNrYm94ZXMnKSwgJ011c3Qgc2VsZWN0IHVzZXJzIGZyb20gZ3JvdXBzLicsIGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKCFoYXNSZXNlaXZlcnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBTZW5kZXI6ICQoJyNzZW5kZXInKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIFN1YmplY3Q6ICQoJyNzdWJqZWN0JykudmFsKCksXHJcbiAgICAgICAgICAgICAgICBDb250ZW50OiB0ZXh0RWRpdG9yLmdldENvbnRlbnQoJ2NvbnRlbnQtYXJlYScpLFxyXG4gICAgICAgICAgICAgICAgUmVjZWl2ZXJzOiB1c2VyRW1haWxzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9tYXJrZXRpbmdFbWFpbHMvc2VuZEVtYWlscycsIGRhdGE6IGVtYWlsRGF0YSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnQnLCBtZXNzYWdlOiAnRW1haWwgd2FzIHNlbmQgc3VjY2Vzc2Z1bGx5Jywgc3VjY2VzczogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9zaXRldHJpa3MvbWFya2V0aW5nZW1haWxzL3NlbmRlbWFpbHMnO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuZWRpdFN1YnNjcmliZUluZm8gPSBlZGl0U3Vic2NyaWJlSW5mbztcclxud2luZG93LnNlbmRFbWFpbHMgPSBzZW5kRW1haWxzO1xyXG4iLCIvKiBnbG9iYWxzIHRpbnltY2UgKi9cclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcblxyXG52YXIgdGV4dEVkaXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0SW5zdGFjZUNhbGxiYWNrKGVkaXRvcikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgV2FybmluZ1dpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgV2FybmluZ1dpbmRvdy5mb3JjZSkge1xyXG4gICAgICAgICAgICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgV2FybmluZ1dpbmRvdy5mb3JjZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIGVkaXRvci5hZGRCdXR0b24oJ2N1c3RvbWJ1dHRvbicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ21lbnVidXR0b24nLFxyXG4gICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tJyxcclxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbnU6IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nb3V0IGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5pbnNlcnRDb250ZW50KCc8YSBocmVmPVwiL2xvZ291dFwiPkxvZ291dDwvYT4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGlmIChvbkluaXRDYWxsYmFjayAmJiB7fS50b1N0cmluZy5jYWxsKG9uSW5pdENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xyXG4gICAgICAgICAgICAgICAgb25Jbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBlbmFibGUgYXV0by1zeW5jIHdpdGggdGhlIHRleHRhcmVhXHJcbiAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbnltY2UudHJpZ2dlclNhdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbWFnZV9saXN0KHN1Y2Nlc3MpIHtcclxuICAgICAgICAkLmdldCgnL3NpdGV0cmlrcy9maWxlcy9nZXRhbGxpbWFnZXMnLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzLmltYWdlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsZV9waWNrZXJfY2FsbGJhY2soY2IsIHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2ltYWdlLyonKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGlucHV0KTtcclxuXHJcbiAgICAgICAgLy8gTm90ZTogSW4gbW9kZXJuIGJyb3dzZXJzIGlucHV0W3R5cGU9XCJmaWxlXCJdIGlzIGZ1bmN0aW9uYWwgd2l0aG91dCBcclxuICAgICAgICAvLyBldmVuIGFkZGluZyBpdCB0byB0aGUgRE9NLCBidXQgdGhhdCBtaWdodCBub3QgYmUgdGhlIGNhc2UgaW4gc29tZSBvbGRlclxyXG4gICAgICAgIC8vIG9yIHF1aXJreSBicm93c2VycyBsaWtlIElFLCBzbyB5b3UgbWlnaHQgd2FudCB0byBhZGQgaXQgdG8gdGhlIERPTVxyXG4gICAgICAgIC8vIGp1c3QgaW4gY2FzZSwgYW5kIHZpc3VhbGx5IGhpZGUgaXQuIEFuZCBkbyBub3QgZm9yZ2V0IGRvIHJlbW92ZSBpdFxyXG4gICAgICAgIC8vIG9uY2UgeW91IGRvIG5vdCBuZWVkIGl0IGFueW1vcmUuXHJcblxyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IE5vdyB3ZSBuZWVkIHRvIHJlZ2lzdGVyIHRoZSBibG9iIGluIFRpbnlNQ0VzIGltYWdlIGJsb2JcclxuICAgICAgICAgICAgICAgIC8vIHJlZ2lzdHJ5LiBJbiB0aGUgbmV4dCByZWxlYXNlIHRoaXMgcGFydCBob3BlZnVsbHkgd29uJ3QgYmVcclxuICAgICAgICAgICAgICAgIC8vIG5lY2Vzc2FyeSwgYXMgd2UgYXJlIGxvb2tpbmcgdG8gaGFuZGxlIGl0IGludGVybmFsbHkuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAnYmxvYmlkJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkNhY2hlID0gdGlueW1jZS5hY3RpdmVFZGl0b3IuZWRpdG9yVXBsb2FkLmJsb2JDYWNoZTtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkluZm8gPSBibG9iQ2FjaGUuY3JlYXRlKGlkLCBmaWxlLCBiYXNlNjQpO1xyXG4gICAgICAgICAgICAgICAgYmxvYkNhY2hlLmFkZChibG9iSW5mbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgYW5kIHBvcHVsYXRlIHRoZSBUaXRsZSBmaWVsZCB3aXRoIHRoZSBmaWxlIG5hbWVcclxuICAgICAgICAgICAgICAgIGNiKGJsb2JJbmZvLmJsb2JVcmkoKSwgeyB0aXRsZTogZmlsZS5uYW1lIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICB2ZXJpZnlfaHRtbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnc3BhbicsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnZGl2W2NsYXNzfGlkfHN0eWxlfHNwYW5dLHNwYW5bY2xhc3N8aWR8c3R5bGVdJyxcclxuICAgICAgICAgICAgZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHM6ICdkaXZbKl0sc3BhblsqXScsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnbW9kZXJuJyxcclxuICAgICAgICAgICAgbW9kZTogJ3RleHRhcmVhcycsXHJcbiAgICAgICAgICAgIGZvcmNlX2JyX25ld2xpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VfcF9uZXdsaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlZF9yb290X2Jsb2NrOiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgcGx1Z2luczogWydhZHZsaXN0IGF1dG9saW5rIGNvZGVzYW1wbGUgbGluayBpbWFnZSBsaXN0cyBjaGFybWFwIHByaW50IHByZXZpZXcgaHIgYW5jaG9yIHBhZ2VicmVhayBmdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHdvcmRjb3VudCB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgY29kZSBpbnNlcnRkYXRldGltZSBub25icmVha2luZycsICdzYXZlIHRhYmxlIGNvbnRleHRtZW51IGRpcmVjdGlvbmFsaXR5IHBhc3RlIHRleHRjb2xvciddLFxyXG4gICAgICAgICAgICBleHRlcm5hbF9wbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAnY29kZUhpZ2hsJzogJy9wbHVnaW5zL3RpbnltY2UvY29kZS1oaWdobGlnaHQtdGlueW1jZS1wbHVnaW4uanMnLFxyXG4gICAgICAgICAgICAgICAgJ2h0bWxCbG9ja3MnOiAnL3BsdWdpbnMvdGlueW1jZS9odG1sLWNvbXBvbmVudHMtdGlueW1jZS1wbHVnaW4uanMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyb3dzZXJfc3BlbGxjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGV4dG1lbnU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXN0ZV9hc190ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9jYXB0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9hZHZ0YWI6IHRydWUsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnZmlsZSBpbWFnZSBtZWRpYScsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX2NhbGxiYWNrOiBmaWxlX3BpY2tlcl9jYWxsYmFjayxcclxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlIHwgcHJpbnQgcHJldmlldyBtZWRpYSBmdWxscGFnZSB8IGZvcmVjb2xvciBiYWNrY29sb3IgY29kZSB8IGNvZGVIaWdobCB8IGZvbnRzaXplc2VsZWN0IHwgZm9udHNlbGVjdCB8IGN1c3RvbWJ1dHRvbicsXHJcbiAgICAgICAgICAgIGZvbnRzaXplX2Zvcm1hdHM6ICc4cHggMTBweCAxMnB4IDE0cHggMTZweCAxOHB4IDIwcHggMjJweCAyNHB4IDM2cHggNDhweCcsXHJcbiAgICAgICAgICAgIHNldHVwOiBlZGl0b3IgPT4gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjayksXHJcbiAgICAgICAgICAgIGluaXRfaW5zdGFuY2VfY2FsbGJhY2s6IGluaXRJbnN0YWNlQ2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGNmZyA9IGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKTtcclxuICAgICAgICBjZmcuaW1hZ2VfbGlzdCA9IGltYWdlX2xpc3Q7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFdpdGhvdXRJbWFnZXMoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGVkaXRvciA9IHRpbnltY2UuZ2V0KHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWRpdG9yKSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIHRpbnltY2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBsZXQgZWRpdG9yID0gdGlueW1jZS5nZXQoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgZWRpdG9yLnNldENvbnRlbnQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3RvciBtdXN0IGJlIElkXHJcbiAgICBmdW5jdGlvbiBnZXRDb250ZW50KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbnltY2UuZ2V0KGlkKS5nZXRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRWRpdG9yKGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0lkIGZvciB0aGUgdGV4dCBlZGl0b3IgbXVzdCBiZSBzcGVjaWZpZWQhJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgNjAwO1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAzMDA7XHJcbiAgICAgICAgaWYgKGlkWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoaWQuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLnJlbW92ZShpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0RWRpdG9yLmluaXQoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCxcclxuICAgICAgICBpbml0V2l0aG91dEltYWdlcyxcclxuICAgICAgICBnZXRDb250ZW50LFxyXG4gICAgICAgIHJlbW92ZSxcclxuICAgICAgICByZW1vdmVBbGwsXHJcbiAgICAgICAgY2xlYXIsXHJcbiAgICAgICAgYWRkRWRpdG9yXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgdGV4dEVkaXRvciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9