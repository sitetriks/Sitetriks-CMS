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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/endpoints.js");
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

/***/ "./scripts/sitetriks/endpoints.js":
/*!****************************************!*\
  !*** ./scripts/sitetriks/endpoints.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function initEndpointCreateEdit(selectedType, selectedJoinTable, selectedJoinKey, selectedColumn) {
    _warningWindow.WarningWindow.attach();
    $('#select-request-type').on('change', function (ev) {
        var $trigger = $(this);
        if ($trigger.val() === 'GET') {
            $('.section-get').show();
        } else {
            $('.section-get').hide();
        }
    }).trigger('change');

    var $selectType = $('#select-type');
    _loader.Loader.show('#fff');
    _data.Data.getJson({ url: '/sitetriks/endpoints/gettables' }).then(function (res) {
        if (res.success) {
            for (var i = 0; i < res.tables.length; i++) {
                $('<option></option>', {
                    value: res.tables[i],
                    text: res.tables[i],
                    selected: selectedJoinTable && selectedJoinTable.toLowerCase() === res.tables[i].toLowerCase()
                }).appendTo('#select-join-table');

                $('<option></option>', {
                    value: res.tables[i],
                    text: res.tables[i],
                    selected: selectedType && selectedType.toLowerCase() === res.tables[i].toLowerCase()
                }).appendTo($selectType);
            }
        }

        _loader.Loader.hide();
        return res;
    }).then(function (res) {
        if (res.success) {
            $selectType.trigger('change');
        }
    });

    $selectType.on('change', function (ev) {
        var table = $(this).val();
        var $select = $('#select-join-key');
        $select.html('');

        if (table) {
            _loader.Loader.show('#fff');

            _data.Data.getJson({ url: '/sitetriks/endpoints/getcolumns?table=' + table }).then(function (res) {
                if (res.success) {
                    for (var i = 0; i < res.columns.length; i++) {
                        $('<option></option>', {
                            value: res.columns[i],
                            text: res.columns[i],
                            selected: selectedJoinKey && selectedJoinKey === res.columns[i]
                        }).appendTo($select);

                        $('<option></option>', {
                            value: res.columns[i],
                            text: res.columns[i],
                            selected: selectedColumn && selectedColumn === res.columns[i]
                        }).appendTo('#select-column');
                    }
                }

                _loader.Loader.hide();
            });
        }
    });

    $('#form-endpoint').on('submit', function (ev) {
        var flag = false;

        if (!_validator.Validator.validate($('#select-type'), 'Type must be selected!', function (val) {
            return !!val;
        })) {
            flag = true;
        }

        $('.input-name').each(function (_, element) {
            if (!_validator.Validator.validate($(element), 'Name must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) {
                return _validator.Validator.isUrlFriendly(val) && _validator.Validator.hasMinimumLength(val, 3);
            })) {
                flag = true;
            }
        });

        if ($('#select-request-type').val() === 'GET') {
            if (!_validator.Validator.validate($('#select-column'), 'Column is required! Type must be selected first!', function (val) {
                return !!val;
            })) {
                flag = true;
            }

            $('.input-joinfields').each(function (_, element) {
                var value = $(element).val();
                if (value && value.trim()) {
                    if (!_validator.Validator.validate($(element), 'JoinFields can contain only english letters, numbers and semicolon!', function (val) {
                        return _validator.Validator.isAlphaNumericAndSemicolon(val);
                    })) {
                        flag = true;
                    }
                } else {
                    if (!_validator.Validator.validate($(element), '', function (val) {
                        return true;
                    })) {
                        flag = true;
                    }
                }
            });

            $('.input-paging').each(function (_, element) {
                var value = $(element).val();
                if (value && value.trim()) {
                    if (!_validator.Validator.validate($(element), 'Must be positive number or zero!', function (val) {
                        return _validator.Validator.isInteger(val) && +val >= 0;
                    })) {
                        flag = true;
                    }
                } else {
                    if (!_validator.Validator.validate($(element), '', function (val) {
                        return true;
                    })) {
                        flag = true;
                    }
                }
            });
        }

        if (flag) {
            ev.preventDefault();
            return false;
        }
    });
}

window.initEndpointCreateEdit = initEndpointCreateEdit;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy9lbmRwb2ludHMuanMiXSwibmFtZXMiOlsiRGF0YSIsIm1ha2VSZXF1ZXN0IiwiZmV0Y2giLCJpc0Z1bmN0aW9uIiwibWFrZUZldGNoUmVxdWVzdCIsIm1ha2VBamF4UmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiaXNGb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJhbXMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIiQiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJ0ZXh0IiwiZ2V0SnNvbiIsImRpc2FibGVDYWNoZSIsInBvc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RGb3JtIiwiZm9ybURhdGEiLCJkZWxldGVKc29uIiwiZGVmYXVsdEVycm9yIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwidG9TdHJpbmciLCJjYWxsIiwiTG9hZGVyIiwiZ2lmU3JjIiwic2hvdyIsImNvbG9yIiwiaW1nU3JjIiwiQmx1ciIsImFkZCIsImFwcGVuZCIsInNyYyIsImNsYXNzIiwiaGlkZSIsInJlbW92ZSIsIm9uIiwiZXYiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiYXR0ciIsIiRjb250YWluZXIiLCJoaWRlT25DbGljayIsImFwcGVuZFRvIiwiUFJFVklFV19DT05UQUlORVJfQ0xBU1MiLCJQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTIiwiQkxVUl9FTEVNRU5UX0NMQVNTIiwiYWRkQmx1ciIsIm9wYWNpdHkiLCJhZGRDbGFzcyIsIiRibHVyRWxlbWVudCIsIiRpdGVtQ29udGFpbmVyIiwiJHByZXZpZXdDb250YWluZXIiLCJyZW1vdmVCbHVyIiwiY3NzIiwiaXNOYU4iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0ZSIsIiRlbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGVGdW5jIiwidmFsdWUiLCJ2YWwiLCJuZXh0IiwiaGFzTWluaW11bUxlbmd0aCIsIm1pbkxlbmdodCIsImhhc01heGltdW1MZW5ndGgiLCJtYXhMZW5naHQiLCJpc0FscGhhTnVtZXJpYyIsInBhdHRlcm4iLCJ0ZXN0IiwiaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24iLCJpc1Bhc3NpbmciLCJpc1VybEZyaWVuZGx5IiwiaXNTdGFydGluZ1dpdGhMZXR0ZXIiLCJ2YWxpZGF0ZUVtYWlsIiwiaXNEZWNpbWFsTnVtYmVyIiwibWF0Y2hlc1BhdHRlcm4iLCJpc051bWJlciIsImlzR3VpZCIsInN0cmluZ1RvVGVzdCIsInN1YnN0cmluZyIsInJlZ2V4R3VpZCIsImlzSW50ZWdlciIsInBhcnNlSW50IiwiaXNOdW1iZXJJblJhbmdlIiwibWluIiwibWF4IiwiaXNMZW5naHRJblJhbmdlIiwiY3JlYXRlRmllbGRzVmFsaWRhdGlvbiIsImN1c3RvbVZhbGlkYXRpb25GdW5jIiwidmFsaWRhdGVGaWVsZHMiLCIkZWxlbWVudHNUb1ZhbGlkYXRlIiwiZmxhZyIsImVhY2giLCJfIiwiZWxlbWVudCIsInZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJ2YWxpZGF0aW9uVHlwZXMiLCJzcGxpdCIsImlubmVyRmxhZyIsInZhbGlkYXRpb25NZXNzYWdlIiwibmFtZSIsInBhcnNlRmxvYXQiLCJjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyIiwiY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIiLCJleHRyYVZhbHVlcyIsInRpbWVyIiwidmFsaWRhdGVVcmxPbkNoYW5nZSIsIiRpbnB1dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJrZXkiLCJtZXNzYWdlIiwidmFsaWRhdGVVcmwiLCIkdXJsRmllbGQiLCIkYnRuU3VibWl0IiwiUmVnRXhwIiwidiIsInZhbGlkYXRlVW5pcXVlbmVzIiwiY2xhc3NUb1ZhbGlkYXRlIiwiY291bnRlciIsIiRhbGxOYW1lcyIsIldhcm5pbmdXaW5kb3ciLCJsb2dnZXIiLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJlIiwiaGFzQ2hhbmdlcyIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJldmVudCIsInNyY0VsZW1lbnQiLCJoYXNUZXh0QXJlYXNXaXRoVGV4dCIsIiR0ZXh0YXJlYXMiLCJoYXNJbnB1dHNXaXRoVGV4dCIsImhhc1RleHQiLCIkaW5wdXRzIiwiY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIiLCJhdHRyaWJ1dGUiLCJjaGVja1VybCIsImxpbmtQYXRoIiwiZ2V0TGFzdENsaWNrZWRFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInN1Ym1pdEJ1dHRvbkNoZWNrIiwidGFnTmFtZSIsImhhc0NsYXNzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlucHV0Q2hhbmdlZCIsImRlZmF1bHRTdG9wTGVhdmUiLCJpc1NhdmluZyIsImF0dGFjaCIsIm9uYmVmb3JldW5sb2FkIiwiZGV0YWNoIiwiZm9yY2UiLCJpbml0RW5kcG9pbnRDcmVhdGVFZGl0Iiwic2VsZWN0ZWRUeXBlIiwic2VsZWN0ZWRKb2luVGFibGUiLCJzZWxlY3RlZEpvaW5LZXkiLCJzZWxlY3RlZENvbHVtbiIsIiR0cmlnZ2VyIiwidHJpZ2dlciIsIiRzZWxlY3RUeXBlIiwidGFibGVzIiwic2VsZWN0ZWQiLCJ0b0xvd2VyQ2FzZSIsInRhYmxlIiwiJHNlbGVjdCIsImh0bWwiLCJjb2x1bW5zIiwidHJpbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLE9BQVEsWUFBWTtBQUNwQixRQUFJQyxjQUFjLE9BQU9DLEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NDLFdBQVdELEtBQVgsQ0FBaEMsR0FBb0RFLGdCQUFwRCxHQUF1RUMsZUFBekYsQ0FEb0IsQ0FDc0Y7O0FBRTFHLGFBQVNBLGVBQVQsT0FBaUU7QUFBQSxZQUF0Q0MsR0FBc0MsUUFBdENBLEdBQXNDO0FBQUEsWUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLFlBQXpCQyxJQUF5QixRQUF6QkEsSUFBeUI7QUFBQSxZQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsWUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUM3RCxlQUFP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QUFMLEVBQTBFO0FBQ3RFK0IsK0JBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixhQVhEO0FBWUg7O0FBRUQsWUFBSUEsSUFBSixFQUFVO0FBQ04xRCxlQUFHK0YsY0FBSDtBQUNBLG1CQUFPLEtBQVA7QUFDSDtBQUNKLEtBakREO0FBa0RIOztBQUVESyxPQUFPMEIsc0JBQVAsR0FBZ0NBLHNCQUFoQyxDIiwiZmlsZSI6ImpzL3NpdGV0cmlrcy9lbmRwb2ludHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL3NpdGV0cmlrcy9lbmRwb2ludHMuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxudmFyIFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoJGVsZW1lbnQsIGVycm9yTWVzc2FnZSwgdmFsaWRhdGVGdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRnVuYyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnJyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkICNmZjY4NjgnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoZXJyb3JNZXNzYWdlIHx8ICdJbnZhbGlkIHZhbHVlIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbkxlbmdodCkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IG1pbkxlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heExlbmdodCkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWModmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKFthLXowLTldKykkL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24odmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOTtdKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1VybEZyaWVuZGx5KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTktX10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3RhcnRpbmdXaXRoTGV0dGVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpdL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eXFxkK1xcLlxcZHswLDJ9JC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14tP1xcZCtcXC4/XFxkKiQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNHdWlkKHN0cmluZ1RvVGVzdCkge1xyXG4gICAgICAgIGlmIChzdHJpbmdUb1Rlc3RbMF0gPT09ICd7Jykge1xyXG4gICAgICAgICAgICBzdHJpbmdUb1Rlc3QgPSBzdHJpbmdUb1Rlc3Quc3Vic3RyaW5nKDEsIHN0cmluZ1RvVGVzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ2V4R3VpZCA9IC9eKFxceyl7MCwxfVswLTlhLWZBLUZdezh9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17MTJ9KFxcfSl7MCwxfSQvZ2k7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4R3VpZC50ZXN0KHN0cmluZ1RvVGVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHBhcnNlSW50KHZhbHVlKSA9PSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBsb3dlciBvciBlcXVhbCB0byAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtYXggPyArdmFsdWUgPD0gK21heCA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byAke21pbn0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtaW4gPyArdmFsdWUgPj0gK21pbiA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmcuYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW4pOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSBtYXhpbXVtIHBlcm1pdHRlZCBjaGFyYWN0ZXJzIGxlbmd0aCBpcyAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXgpOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdmFsaWRhdGUgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgJ3ZhbGlkYXRlJyBpbnNpZGUgdGhlIHdyYXBwZXIuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21WYWxpZGF0aW9uRnVuYyBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgc3BlY2lmaWMgbG9naWMuIFdpbGwgcmVjaWV2ZSB0aGUgSFRNTEVsZW1lbnQuXHJcbiAgICAgKiBNdXN0IHJldHVybiB0cnVlIGlmIHZhbGlkYXRpb24gaXMgcGFzc2luZy5cclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRzVmFsaWRhdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzKGV2KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcyAmJiAhZXYgJiYgIWV2LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gSFRNTEVsZW1lbnQgaGFzIGJlZW4gcHJvdmlkZWQsICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgJGVsZW1lbnRzVG9WYWxpZGF0ZSA9ICQodGhpcyB8fCBldi50YXJnZXQpLmZpbmQoJy52YWxpZGF0ZScpO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnRzVG9WYWxpZGF0ZS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIWZsYWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnUmVxdWlyZWQgZmllbGQhJyxcclxuICAgICAgICAgICAgJ2VtYWlsJzogJ0ludmFsaWQgRS1NYWlsIScsXHJcbiAgICAgICAgICAgICdpbnQnOiAnTm90IGFuIGludGVnZXIgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdudW1iZXInOiAnTm90IGEgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdndWlkJzogJ0ludmFsaWQgZ3VpZCEnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25UeXBlcyA9ICgkZWxlbWVudC5hdHRyKCdkYXRhLXZhbGlkYXRpb24tdHlwZScpIHx8ICcnKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCBpbm5lckZsYWcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWluID0gJGVsZW1lbnQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICBsZXQgbWF4ID0gJGVsZW1lbnQuYXR0cignZGF0YS1tYXgnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0aW9uVHlwZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJGVsZW1lbnQuYXR0cignZGF0YS1tZXNzYWdlLScgKyB2YWxpZGF0aW9uVHlwZXNbaV0pIHx8IHZhbGlkYXRpb25NZXNzYWdlc1t2YWxpZGF0aW9uVHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh2YWxpZGF0aW9uVHlwZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhIXZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIHZhbGlkYXRlRW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG91YmxlJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zsb2F0JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgbmFtZSArICcgbXVzdCBiZSBkZWNpbWFsIGZsb2F0aW5nIHBvaW50IG51bWJlciEnLCAodmFsdWUpID0+IHsgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUpID09IHZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ludCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzSW50ZWdlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3VpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzR3VpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWN1c3RvbVZhbGlkYXRpb25GdW5jKCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5uZXJGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhaW5uZXJGbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIoY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gZXYgPyAkKGV2LnRhcmdldCkgOiAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKCR0YXJnZXQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyKG5hbWUsIHVybCwgbWluTGVuZ2h0LCBleHRyYVZhbHVlcykge1xyXG4gICAgICAgIGxldCB0aW1lciA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsT25DaGFuZ2UoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGxldCBtaW4gPSBtaW5MZW5naHQgfHwgJGlucHV0LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG1pbiAmJiAhVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0bGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZyFgLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBWYWxpZGF0b3IuaGFzTWluaW11bUxlbmd0aCh2YWwsICttaW4pOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5W2tleV0gPSBleHRyYVZhbHVlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiB1cmwsIGRhdGE6IGJvZHkgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIHJlcy5tZXNzYWdlIHx8ICdWYWx1ZSBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHJlcy5zdWNjZXNzOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlVXJsT25DaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVcmwodmFsaWRhdGVVcmwsICR1cmxGaWVsZCwgJGJ0blN1Ym1pdCkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXltcXHdcXC1cXC5dKyQvaSk7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgY2FuIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoKC0pLCBwb2ludCguKSBhbmQgdW5kZXJzY29yZShfKSAhJywgKHYpID0+IG1hdGNoZXNQYXR0ZXJuKHYsIHBhdHRlcm4pKSkge1xyXG4gICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogdmFsaWRhdGVVcmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCAodik9PiByZXMuc3VjY2VzcykpIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVuaXF1ZW5lcyhuYW1lLCBjbGFzc1RvVmFsaWRhdGUpIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgdmFyICRhbGxOYW1lcyA9ICQoJy4nICsgY2xhc3NUb1ZhbGlkYXRlKTtcclxuICAgICAgICBmb3IgKG5hbWUgaW4gJGFsbE5hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICgkYWxsTmFtZXNbbmFtZV0udmFsdWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZGF0ZSxcclxuICAgICAgICBpc0FscGhhTnVtZXJpYyxcclxuICAgICAgICBoYXNNaW5pbXVtTGVuZ3RoLFxyXG4gICAgICAgIHZhbGlkYXRlRW1haWwsXHJcbiAgICAgICAgaXNTdGFydGluZ1dpdGhMZXR0ZXIsXHJcbiAgICAgICAgaXNVcmxGcmllbmRseSxcclxuICAgICAgICBpc051bWJlcixcclxuICAgICAgICBpc0RlY2ltYWxOdW1iZXIsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24sXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBpc0d1aWQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRzVmFsaWRhdGlvbixcclxuICAgICAgICBpc0ludGVnZXIsXHJcbiAgICAgICAgY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVGaWVsZCxcclxuICAgICAgICBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlVW5pcXVlbmVzLFxyXG4gICAgICAgIHZhbGlkYXRlVXJsXHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgVmFsaWRhdG9yIH07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBXYXJuaW5nV2luZG93ID0gKGZ1bmN0aW9uIChsb2dnZXIpIHtcclxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCBjb25zb2xlO1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9ICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGJlZW4gZWRpdGluZyBzb21ldGhpbmcuICdcclxuICAgICAgICArICdJZiB5b3UgbGVhdmUgYmVmb3JlIHNhdmluZywgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcclxuICAgICAgICBpZiAoIWhhc0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBvblVubG9hZDtcclxuICAgIC8vdmFyIGxhc3RDbGlja09uRWxlbWVudDtcclxuICAgIC8vJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICBsYXN0Q2xpY2tPbkVsZW1lbnQ9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vfSk7XHJcblxyXG4gICAgdmFyIGxhc3RDbGlja2VkRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIC8vbGFzdENsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgJHRleHRhcmVhcyA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgLy9BZGQgdGlueW1jZSBnZXQgdGV4dCBmcm9tIHRleHRhcmVhIGxpa2VzIGlucHV0XHJcbiAgICAgICAgaWYgKCR0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNJbnB1dHNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkaW5wdXRzID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgYXR0ciA9ICQobGFzdENsaWNrZWRFbGVtZW50KS5kYXRhKGF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVXJsKGxpbmtQYXRoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIkNoZWNrIHVybFwiKTtcclxuICAgICAgICBsZXQgYXR0ciA9IGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGdldExhc3RDbGlja2VkRWxlbWVudCgpLCBcImRpc2FibGVMaW5rXCIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2tpbmcgaXMgZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNra2luZyBpcyBlbmFibGVkXCIpXHJcblxyXG4gICAgICAgIGlmIChsaW5rUGF0aC5pbmRleE9mKCdjcmVhdGUnKSA9PSAtMSAmJiBsaW5rUGF0aC5pbmRleE9mKCdlZGl0JykgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuaGFzQ2xhc3MoXCJidXR0b24tc3VibWl0XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50LmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuYXR0cignZGF0YS1kaXNhYmxlLXdhcm5pbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghbGFzdENsaWNrZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBsaW5rUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICRlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBcImRpc2FibGUtd2FybmluZ1wiKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tVcmwobGlua1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNDaGFuZ2VzID0gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB8fCBoYXNJbnB1dHNXaXRoVGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0b3BMZWF2ZShldikge1xyXG4gICAgICAgIGxldCBpc1NhdmluZyA9IGxhc3RDbGlja2VkRWxlbWVudCAmJiAhc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkKGxhc3RDbGlja2VkRWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChpc1NhdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlucHV0Q2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LCBcclxuICAgICAgICBmb3JjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgV2FybmluZ1dpbmRvdyB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21tb24vbG9hZGVyLmpzJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tbW9uL3ZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IFdhcm5pbmdXaW5kb3cgfSBmcm9tICcuLi9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzJztcclxuXHJcbmZ1bmN0aW9uIGluaXRFbmRwb2ludENyZWF0ZUVkaXQoc2VsZWN0ZWRUeXBlLCBzZWxlY3RlZEpvaW5UYWJsZSwgc2VsZWN0ZWRKb2luS2V5LCBzZWxlY3RlZENvbHVtbikge1xyXG4gICAgV2FybmluZ1dpbmRvdy5hdHRhY2goKTtcclxuICAgICQoJyNzZWxlY3QtcmVxdWVzdC10eXBlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdHJpZ2dlciA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKCR0cmlnZ2VyLnZhbCgpID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICAkKCcuc2VjdGlvbi1nZXQnKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnNlY3Rpb24tZ2V0JykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgIGxldCAkc2VsZWN0VHlwZSA9ICQoJyNzZWxlY3QtdHlwZScpO1xyXG4gICAgTG9hZGVyLnNob3coJyNmZmYnKTtcclxuICAgIERhdGEuZ2V0SnNvbih7IHVybDogJy9zaXRldHJpa3MvZW5kcG9pbnRzL2dldHRhYmxlcycgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLnRhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgJCgnPG9wdGlvbj48L29wdGlvbj4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlcy50YWJsZXNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLnRhYmxlc1tpXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRKb2luVGFibGUgJiYgc2VsZWN0ZWRKb2luVGFibGUudG9Mb3dlckNhc2UoKSA9PT0gcmVzLnRhYmxlc1tpXS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbygnI3NlbGVjdC1qb2luLXRhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPG9wdGlvbj48L29wdGlvbj4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlcy50YWJsZXNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLnRhYmxlc1tpXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRUeXBlICYmIHNlbGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpID09PSByZXMudGFibGVzW2ldLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIH0pLmFwcGVuZFRvKCRzZWxlY3RUeXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICRzZWxlY3RUeXBlLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzZWxlY3RUeXBlLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCAkc2VsZWN0ID0gJCgnI3NlbGVjdC1qb2luLWtleScpO1xyXG4gICAgICAgICRzZWxlY3QuaHRtbCgnJyk7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZSkge1xyXG4gICAgICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG5cclxuICAgICAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9lbmRwb2ludHMvZ2V0Y29sdW1ucz90YWJsZT0nICsgdGFibGUgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJzxvcHRpb24+PC9vcHRpb24+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlcy5jb2x1bW5zW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLmNvbHVtbnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRKb2luS2V5ICYmIHNlbGVjdGVkSm9pbktleSA9PT0gcmVzLmNvbHVtbnNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oJHNlbGVjdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnPG9wdGlvbj48L29wdGlvbj4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzLmNvbHVtbnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMuY29sdW1uc1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZENvbHVtbiAmJiBzZWxlY3RlZENvbHVtbiA9PT0gcmVzLmNvbHVtbnNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oJyNzZWxlY3QtY29sdW1uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNmb3JtLWVuZHBvaW50Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCQoJyNzZWxlY3QtdHlwZScpLCAnVHlwZSBtdXN0IGJlIHNlbGVjdGVkIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuICEhdmFsOyB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5pbnB1dC1uYW1lJykuZWFjaCgoXywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkKGVsZW1lbnQpLCAnTmFtZSBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyYWN0ZXJzIGFuZCBjb250YWluIG9ubHkgZW5nbGlzaCBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoKC0pIGFuZCB1bmRlcnNjb3JlKF8pIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5pc1VybEZyaWVuZGx5KHZhbCkgJiYgVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCAzKTsgfSkpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICgkKCcjc2VsZWN0LXJlcXVlc3QtdHlwZScpLnZhbCgpID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkKCcjc2VsZWN0LWNvbHVtbicpLCAnQ29sdW1uIGlzIHJlcXVpcmVkISBUeXBlIG11c3QgYmUgc2VsZWN0ZWQgZmlyc3QhJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gISF2YWw7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLmlucHV0LWpvaW5maWVsZHMnKS5lYWNoKChfLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAkKGVsZW1lbnQpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCQoZWxlbWVudCksICdKb2luRmllbGRzIGNhbiBjb250YWluIG9ubHkgZW5nbGlzaCBsZXR0ZXJzLCBudW1iZXJzIGFuZCBzZW1pY29sb24hJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gVmFsaWRhdG9yLmlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uKHZhbCk7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJChlbGVtZW50KSwgJycsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuaW5wdXQtcGFnaW5nJykuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gJChlbGVtZW50KS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkKGVsZW1lbnQpLCAnTXVzdCBiZSBwb3NpdGl2ZSBudW1iZXIgb3IgemVybyEnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBWYWxpZGF0b3IuaXNJbnRlZ2VyKHZhbCkgJiYgK3ZhbCA+PSAwOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCQoZWxlbWVudCksICcnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiB0cnVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuaW5pdEVuZHBvaW50Q3JlYXRlRWRpdCA9IGluaXRFbmRwb2ludENyZWF0ZUVkaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=