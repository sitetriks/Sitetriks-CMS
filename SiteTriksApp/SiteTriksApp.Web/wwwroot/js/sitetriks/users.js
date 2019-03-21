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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/users.js");
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

/***/ "./scripts/common/multiselect-setup.js":
/*!*********************************************!*\
  !*** ./scripts/common/multiselect-setup.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Multiselect = function () {
    function setup(id, onChangeCallback) {
        setupElement($('#' + id), onChangeCallback);
    }

    function setupElement($element, callback) {
        $element.multiselect({
            multiple: true,
            height: '105px',
            header: '',
            noneSelectedText: 'None',
            numberDisplayed: '',
            selectedText: function selectedText(numChecked, numTotal, checkedItems) {
                return numChecked + ' of ' + numTotal + ' checked';
            },
            selectedList: false,
            show: ['blind', 200],
            hide: ['fade', 200],
            position: {
                my: 'left top',
                at: 'left bottom'
            },
            onChange: callback
        });
    }

    function refresh(id) {
        $('#' + id).multiselect('refresh');
    }

    function destroy(id) {
        $('#' + id).multiselect('destroy');
    }

    return {
        Setup: setup,
        SetupElement: setupElement,
        Refresh: refresh,
        Destroy: destroy
    };
}();

exports.Multiselect = Multiselect;

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

/***/ "./scripts/sitetriks/users.js":
/*!************************************!*\
  !*** ./scripts/sitetriks/users.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _multiselectSetup = __webpack_require__(/*! ../common/multiselect-setup.js */ "./scripts/common/multiselect-setup.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function initUserCreate() {
    _warningWindow.WarningWindow.attach();
    _multiselectSetup.Multiselect.Setup('multiselect-roles', function (option, checked, select) {
        var opselected = $(option).text();
        if (checked === true) {
            if (opselected === 'Admin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'Admin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'SuperAdmin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });

                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
        }
        if (checked === false) {
            if (opselected === 'Admin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
        }
    });

    $('button[type=submit]').on('click', function (e) {
        _loader.Loader.show(true);
        var flag = true;
        if (!_validator.Validator.validate($('#email'), 'Invalid email', function (val) {
            return _validator.Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
        _loader.Loader.hide();
    });
}

function initUserEdit() {
    _warningWindow.WarningWindow.attach();
    _multiselectSetup.Multiselect.Setup('multiselect-roles', function (option, checked, select) {
        var opselected = $(option).text();
        if (checked === true) {
            if (opselected === 'Admin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'Admin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'SuperAdmin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });

                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
        }
        if (checked === false) {
            if (opselected === 'Admin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
        }
    });

    $('.multiselect-container label:has(input:checked)').each(function (index) {
        if ($(this)[index].innerText.trimStart() === 'SuperAdmin') {
            $('#email').attr('readonly', 'readonly');
            $('.multiselect-native-select .btn-group').html('<div>SuperAdmin</div>');
            $('.multiselect-native-select .dropdown-toggle').attr('disabled', 'disabled');
        }
    });

    $('input[type=submit]').on('click', function (e) {
        _loader.Loader.show(true);
        var flag = true;
        if (!_validator.Validator.validate($('#email'), 'Invalid email', function (val) {
            return _validator.Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
        _loader.Loader.hide();
    });

    initialDeselect('SuperAdmin');
    initialDeselect('Admin');
}

function initialDeselect(role) {
    var rolesIds = $('#multiselect-roles').val();
    $('#multiselect-roles option').each(function (index) {
        if ($(this).text() === role) {
            if (jQuery.inArray($(this).val(), rolesIds) !== -1) {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' ' + role) {
                        $(this).css('display', 'none');
                    }
                });
                _multiselectSetup.Multiselect.Refresh();
            }
        }
    });
}

window.initUserCreate = initUserCreate;
window.initUserEdit = initUserEdit;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbXVsdGlzZWxlY3Qtc2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy91c2Vycy5qcyJdLCJuYW1lcyI6WyJEYXRhIiwibWFrZVJlcXVlc3QiLCJmZXRjaCIsImlzRnVuY3Rpb24iLCJtYWtlRmV0Y2hSZXF1ZXN0IiwibWFrZUFqYXhSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJpc0Zvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcmFtcyIsImRhdGEiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiJCIsImFqYXgiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsInRleHQiLCJnZXRKc29uIiwiZGlzYWJsZUNhY2hlIiwicG9zdEpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdEZvcm0iLCJmb3JtRGF0YSIsImRlbGV0ZUpzb24iLCJkZWZhdWx0RXJyb3IiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJ0b1N0cmluZyIsImNhbGwiLCJMb2FkZXIiLCJnaWZTcmMiLCJzaG93IiwiY29sb3IiLCJpbWdTcmMiLCJCbHVyIiwiYWRkIiwiYXBwZW5kIiwic3JjIiwiY2xhc3MiLCJoaWRlIiwicmVtb3ZlIiwib24iLCJldiIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJhdHRyIiwiJGNvbnRhaW5lciIsImhpZGVPbkNsaWNrIiwiYXBwZW5kVG8iLCJQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyIsIlBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MiLCJCTFVSX0VMRU1FTlRfQ0xBU1MiLCJhZGRCbHVyIiwib3BhY2l0eSIsImFkZENsYXNzIiwiJGJsdXJFbGVtZW50IiwiJGl0ZW1Db250YWluZXIiLCIkcHJldmlld0NvbnRhaW5lciIsInJlbW92ZUJsdXIiLCJjc3MiLCJpc05hTiIsImZpbmQiLCJyZW1vdmVDbGFzcyIsIk11bHRpc2VsZWN0Iiwic2V0dXAiLCJpZCIsIm9uQ2hhbmdlQ2FsbGJhY2siLCJzZXR1cEVsZW1lbnQiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwibXVsdGlzZWxlY3QiLCJtdWx0aXBsZSIsImhlaWdodCIsImhlYWRlciIsIm5vbmVTZWxlY3RlZFRleHQiLCJudW1iZXJEaXNwbGF5ZWQiLCJzZWxlY3RlZFRleHQiLCJudW1DaGVja2VkIiwibnVtVG90YWwiLCJjaGVja2VkSXRlbXMiLCJzZWxlY3RlZExpc3QiLCJwb3NpdGlvbiIsIm15IiwiYXQiLCJvbkNoYW5nZSIsInJlZnJlc2giLCJkZXN0cm95IiwiU2V0dXAiLCJTZXR1cEVsZW1lbnQiLCJSZWZyZXNoIiwiRGVzdHJveSIsIlZhbGlkYXRvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGVGdW5jIiwidmFsdWUiLCJ2YWwiLCJuZXh0IiwiaGFzTWluaW11bUxlbmd0aCIsIm1pbkxlbmdodCIsImhhc01heGltdW1MZW5ndGgiLCJtYXhMZW5naHQiLCJpc0FscGhhTnVtZXJpYyIsInBhdHRlcm4iLCJ0ZXN0IiwiaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24iLCJpc1Bhc3NpbmciLCJpc1VybEZyaWVuZGx5IiwiaXNTdGFydGluZ1dpdGhMZXR0ZXIiLCJ2YWxpZGF0ZUVtYWlsIiwiaXNEZWNpbWFsTnVtYmVyIiwibWF0Y2hlc1BhdHRlcm4iLCJpc051bWJlciIsImlzR3VpZCIsInN0cmluZ1RvVGVzdCIsInN1YnN0cmluZyIsInJlZ2V4R3VpZCIsImlzSW50ZWdlciIsInBhcnNlSW50IiwiaXNOdW1iZXJJblJhbmdlIiwibWluIiwibWF4IiwiaXNMZW5naHRJblJhbmdlIiwiY3JlYXRlRmllbGRzVmFsaWRhdGlvbiIsImN1c3RvbVZhbGlkYXRpb25GdW5jIiwidmFsaWRhdGVGaWVsZHMiLCIkZWxlbWVudHNUb1ZhbGlkYXRlIiwiZmxhZyIsImVhY2giLCJfIiwiZWxlbWVudCIsInZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJ2YWxpZGF0aW9uVHlwZXMiLCJzcGxpdCIsImlubmVyRmxhZyIsInZhbGlkYXRpb25NZXNzYWdlIiwibmFtZSIsInBhcnNlRmxvYXQiLCJjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyIiwiY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIiLCJleHRyYVZhbHVlcyIsInRpbWVyIiwidmFsaWRhdGVVcmxPbkNoYW5nZSIsIiRpbnB1dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJrZXkiLCJtZXNzYWdlIiwidmFsaWRhdGVVcmwiLCIkdXJsRmllbGQiLCIkYnRuU3VibWl0IiwiUmVnRXhwIiwidiIsInZhbGlkYXRlVW5pcXVlbmVzIiwiY2xhc3NUb1ZhbGlkYXRlIiwiY291bnRlciIsIiRhbGxOYW1lcyIsIldhcm5pbmdXaW5kb3ciLCJsb2dnZXIiLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJlIiwiaGFzQ2hhbmdlcyIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJldmVudCIsInNyY0VsZW1lbnQiLCJoYXNUZXh0QXJlYXNXaXRoVGV4dCIsIiR0ZXh0YXJlYXMiLCJoYXNJbnB1dHNXaXRoVGV4dCIsImhhc1RleHQiLCIkaW5wdXRzIiwiY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIiLCJhdHRyaWJ1dGUiLCJjaGVja1VybCIsImxpbmtQYXRoIiwiZ2V0TGFzdENsaWNrZWRFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInN1Ym1pdEJ1dHRvbkNoZWNrIiwidGFnTmFtZSIsImhhc0NsYXNzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlucHV0Q2hhbmdlZCIsImRlZmF1bHRTdG9wTGVhdmUiLCJpc1NhdmluZyIsImF0dGFjaCIsIm9uYmVmb3JldW5sb2FkIiwiZGV0YWNoIiwiZm9yY2UiLCJpbml0VXNlckNyZWF0ZSIsIm9wdGlvbiIsImNoZWNrZWQiLCJzZWxlY3QiLCJvcHNlbGVjdGVkIiwiaW5kZXgiLCJpbml0VXNlckVkaXQiLCJpbm5lclRleHQiLCJ0cmltU3RhcnQiLCJodG1sIiwiaW5pdGlhbERlc2VsZWN0Iiwicm9sZSIsInJvbGVzSWRzIiwialF1ZXJ5IiwiaW5BcnJheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7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SUMsV0FBVzdNLEVBQUUsb0JBQUYsRUFBd0I4RixHQUF4QixFQUFmO0FBQ0E5RixNQUFFLDJCQUFGLEVBQStCOEgsSUFBL0IsQ0FBb0MsVUFBVXdFLEtBQVYsRUFBaUI7QUFDakQsWUFBSXRNLEVBQUUsSUFBRixFQUFRUyxJQUFSLE9BQW1CbU0sSUFBdkIsRUFBNkI7QUFDekIsZ0JBQUlFLE9BQU9DLE9BQVAsQ0FBZS9NLEVBQUUsSUFBRixFQUFROEYsR0FBUixFQUFmLEVBQThCK0csUUFBOUIsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNoRDdNLGtCQUFFLFdBQUYsRUFBZThILElBQWYsQ0FBb0IsVUFBVXdFLEtBQVYsRUFBaUI7QUFDakMsd0JBQUl0TSxFQUFFLElBQUYsRUFBUVMsSUFBUixPQUFtQixNQUFNbU0sSUFBN0IsRUFBbUM7QUFDL0I1TSwwQkFBRSxJQUFGLEVBQVF5RCxHQUFSLENBQVksU0FBWixFQUF1QixNQUF2QjtBQUNIO0FBQ0osaUJBSkQ7QUFLQUksOENBQVkwQixPQUFaO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZSDs7QUFFRGdGLE9BQU8wQixjQUFQLEdBQXdCQSxjQUF4QjtBQUNBMUIsT0FBT2dDLFlBQVAsR0FBc0JBLFlBQXRCLEMiLCJmaWxlIjoianMvc2l0ZXRyaWtzL3VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvdXNlcnMuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBNdWx0aXNlbGVjdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBzZXR1cChpZCwgb25DaGFuZ2VDYWxsYmFjaykge1xyXG4gICAgICAgIHNldHVwRWxlbWVudCgkKCcjJyArIGlkKSwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXBFbGVtZW50KCRlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgICRlbGVtZW50Lm11bHRpc2VsZWN0KHtcclxuICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwNXB4JyxcclxuICAgICAgICAgICAgaGVhZGVyOiAnJyxcclxuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogJ05vbmUnLFxyXG4gICAgICAgICAgICBudW1iZXJEaXNwbGF5ZWQ6ICcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFRleHQ6IGZ1bmN0aW9uIChudW1DaGVja2VkLCBudW1Ub3RhbCwgY2hlY2tlZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtQ2hlY2tlZCArICcgb2YgJyArIG51bVRvdGFsICsgJyBjaGVja2VkJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRMaXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdzogWydibGluZCcsIDIwMF0sXHJcbiAgICAgICAgICAgIGhpZGU6IFsnZmFkZScsIDIwMF0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBteTogJ2xlZnQgdG9wJyxcclxuICAgICAgICAgICAgICAgIGF0OiAnbGVmdCBib3R0b20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBjYWxsYmFja1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2goaWQpIHtcclxuICAgICAgICAkKCcjJyArIGlkKS5tdWx0aXNlbGVjdCgncmVmcmVzaCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koaWQpIHtcclxuICAgICAgICAkKCcjJyArIGlkKS5tdWx0aXNlbGVjdCgnZGVzdHJveScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgU2V0dXA6IHNldHVwLFxyXG4gICAgICAgIFNldHVwRWxlbWVudDogc2V0dXBFbGVtZW50LFxyXG4gICAgICAgIFJlZnJlc2g6IHJlZnJlc2gsXHJcbiAgICAgICAgRGVzdHJveTogZGVzdHJveVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IE11bHRpc2VsZWN0IH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxudmFyIFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoJGVsZW1lbnQsIGVycm9yTWVzc2FnZSwgdmFsaWRhdGVGdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRnVuYyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnJyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkICNmZjY4NjgnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoZXJyb3JNZXNzYWdlIHx8ICdJbnZhbGlkIHZhbHVlIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbkxlbmdodCkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IG1pbkxlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heExlbmdodCkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWModmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKFthLXowLTldKykkL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24odmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOTtdKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1VybEZyaWVuZGx5KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTktX10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3RhcnRpbmdXaXRoTGV0dGVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpdL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eXFxkK1xcLlxcZHswLDJ9JC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14tP1xcZCtcXC4/XFxkKiQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNHdWlkKHN0cmluZ1RvVGVzdCkge1xyXG4gICAgICAgIGlmIChzdHJpbmdUb1Rlc3RbMF0gPT09ICd7Jykge1xyXG4gICAgICAgICAgICBzdHJpbmdUb1Rlc3QgPSBzdHJpbmdUb1Rlc3Quc3Vic3RyaW5nKDEsIHN0cmluZ1RvVGVzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ2V4R3VpZCA9IC9eKFxceyl7MCwxfVswLTlhLWZBLUZdezh9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17MTJ9KFxcfSl7MCwxfSQvZ2k7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4R3VpZC50ZXN0KHN0cmluZ1RvVGVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHBhcnNlSW50KHZhbHVlKSA9PSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBsb3dlciBvciBlcXVhbCB0byAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtYXggPyArdmFsdWUgPD0gK21heCA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byAke21pbn0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtaW4gPyArdmFsdWUgPj0gK21pbiA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmcuYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW4pOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSBtYXhpbXVtIHBlcm1pdHRlZCBjaGFyYWN0ZXJzIGxlbmd0aCBpcyAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXgpOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdmFsaWRhdGUgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgJ3ZhbGlkYXRlJyBpbnNpZGUgdGhlIHdyYXBwZXIuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21WYWxpZGF0aW9uRnVuYyBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgc3BlY2lmaWMgbG9naWMuIFdpbGwgcmVjaWV2ZSB0aGUgSFRNTEVsZW1lbnQuXHJcbiAgICAgKiBNdXN0IHJldHVybiB0cnVlIGlmIHZhbGlkYXRpb24gaXMgcGFzc2luZy5cclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRzVmFsaWRhdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzKGV2KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcyAmJiAhZXYgJiYgIWV2LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gSFRNTEVsZW1lbnQgaGFzIGJlZW4gcHJvdmlkZWQsICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgJGVsZW1lbnRzVG9WYWxpZGF0ZSA9ICQodGhpcyB8fCBldi50YXJnZXQpLmZpbmQoJy52YWxpZGF0ZScpO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnRzVG9WYWxpZGF0ZS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIWZsYWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnUmVxdWlyZWQgZmllbGQhJyxcclxuICAgICAgICAgICAgJ2VtYWlsJzogJ0ludmFsaWQgRS1NYWlsIScsXHJcbiAgICAgICAgICAgICdpbnQnOiAnTm90IGFuIGludGVnZXIgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdudW1iZXInOiAnTm90IGEgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdndWlkJzogJ0ludmFsaWQgZ3VpZCEnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25UeXBlcyA9ICgkZWxlbWVudC5hdHRyKCdkYXRhLXZhbGlkYXRpb24tdHlwZScpIHx8ICcnKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCBpbm5lckZsYWcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWluID0gJGVsZW1lbnQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICBsZXQgbWF4ID0gJGVsZW1lbnQuYXR0cignZGF0YS1tYXgnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0aW9uVHlwZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJGVsZW1lbnQuYXR0cignZGF0YS1tZXNzYWdlLScgKyB2YWxpZGF0aW9uVHlwZXNbaV0pIHx8IHZhbGlkYXRpb25NZXNzYWdlc1t2YWxpZGF0aW9uVHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh2YWxpZGF0aW9uVHlwZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhIXZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIHZhbGlkYXRlRW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG91YmxlJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zsb2F0JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgbmFtZSArICcgbXVzdCBiZSBkZWNpbWFsIGZsb2F0aW5nIHBvaW50IG51bWJlciEnLCAodmFsdWUpID0+IHsgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUpID09IHZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ludCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzSW50ZWdlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3VpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzR3VpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWN1c3RvbVZhbGlkYXRpb25GdW5jKCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5uZXJGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhaW5uZXJGbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIoY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gZXYgPyAkKGV2LnRhcmdldCkgOiAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKCR0YXJnZXQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyKG5hbWUsIHVybCwgbWluTGVuZ2h0LCBleHRyYVZhbHVlcykge1xyXG4gICAgICAgIGxldCB0aW1lciA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsT25DaGFuZ2UoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGxldCBtaW4gPSBtaW5MZW5naHQgfHwgJGlucHV0LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG1pbiAmJiAhVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0bGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZyFgLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBWYWxpZGF0b3IuaGFzTWluaW11bUxlbmd0aCh2YWwsICttaW4pOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5W2tleV0gPSBleHRyYVZhbHVlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiB1cmwsIGRhdGE6IGJvZHkgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIHJlcy5tZXNzYWdlIHx8ICdWYWx1ZSBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHJlcy5zdWNjZXNzOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlVXJsT25DaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVcmwodmFsaWRhdGVVcmwsICR1cmxGaWVsZCwgJGJ0blN1Ym1pdCkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXltcXHdcXC1cXC5dKyQvaSk7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgY2FuIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoKC0pLCBwb2ludCguKSBhbmQgdW5kZXJzY29yZShfKSAhJywgKHYpID0+IG1hdGNoZXNQYXR0ZXJuKHYsIHBhdHRlcm4pKSkge1xyXG4gICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogdmFsaWRhdGVVcmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCAodik9PiByZXMuc3VjY2VzcykpIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVuaXF1ZW5lcyhuYW1lLCBjbGFzc1RvVmFsaWRhdGUpIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgdmFyICRhbGxOYW1lcyA9ICQoJy4nICsgY2xhc3NUb1ZhbGlkYXRlKTtcclxuICAgICAgICBmb3IgKG5hbWUgaW4gJGFsbE5hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICgkYWxsTmFtZXNbbmFtZV0udmFsdWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZGF0ZSxcclxuICAgICAgICBpc0FscGhhTnVtZXJpYyxcclxuICAgICAgICBoYXNNaW5pbXVtTGVuZ3RoLFxyXG4gICAgICAgIHZhbGlkYXRlRW1haWwsXHJcbiAgICAgICAgaXNTdGFydGluZ1dpdGhMZXR0ZXIsXHJcbiAgICAgICAgaXNVcmxGcmllbmRseSxcclxuICAgICAgICBpc051bWJlcixcclxuICAgICAgICBpc0RlY2ltYWxOdW1iZXIsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24sXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBpc0d1aWQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRzVmFsaWRhdGlvbixcclxuICAgICAgICBpc0ludGVnZXIsXHJcbiAgICAgICAgY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVGaWVsZCxcclxuICAgICAgICBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlVW5pcXVlbmVzLFxyXG4gICAgICAgIHZhbGlkYXRlVXJsXHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgVmFsaWRhdG9yIH07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBXYXJuaW5nV2luZG93ID0gKGZ1bmN0aW9uIChsb2dnZXIpIHtcclxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCBjb25zb2xlO1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9ICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGJlZW4gZWRpdGluZyBzb21ldGhpbmcuICdcclxuICAgICAgICArICdJZiB5b3UgbGVhdmUgYmVmb3JlIHNhdmluZywgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcclxuICAgICAgICBpZiAoIWhhc0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBvblVubG9hZDtcclxuICAgIC8vdmFyIGxhc3RDbGlja09uRWxlbWVudDtcclxuICAgIC8vJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICBsYXN0Q2xpY2tPbkVsZW1lbnQ9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vfSk7XHJcblxyXG4gICAgdmFyIGxhc3RDbGlja2VkRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIC8vbGFzdENsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgJHRleHRhcmVhcyA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgLy9BZGQgdGlueW1jZSBnZXQgdGV4dCBmcm9tIHRleHRhcmVhIGxpa2VzIGlucHV0XHJcbiAgICAgICAgaWYgKCR0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNJbnB1dHNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkaW5wdXRzID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgYXR0ciA9ICQobGFzdENsaWNrZWRFbGVtZW50KS5kYXRhKGF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVXJsKGxpbmtQYXRoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIkNoZWNrIHVybFwiKTtcclxuICAgICAgICBsZXQgYXR0ciA9IGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGdldExhc3RDbGlja2VkRWxlbWVudCgpLCBcImRpc2FibGVMaW5rXCIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2tpbmcgaXMgZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNra2luZyBpcyBlbmFibGVkXCIpXHJcblxyXG4gICAgICAgIGlmIChsaW5rUGF0aC5pbmRleE9mKCdjcmVhdGUnKSA9PSAtMSAmJiBsaW5rUGF0aC5pbmRleE9mKCdlZGl0JykgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuaGFzQ2xhc3MoXCJidXR0b24tc3VibWl0XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50LmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuYXR0cignZGF0YS1kaXNhYmxlLXdhcm5pbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghbGFzdENsaWNrZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBsaW5rUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICRlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBcImRpc2FibGUtd2FybmluZ1wiKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tVcmwobGlua1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNDaGFuZ2VzID0gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB8fCBoYXNJbnB1dHNXaXRoVGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0b3BMZWF2ZShldikge1xyXG4gICAgICAgIGxldCBpc1NhdmluZyA9IGxhc3RDbGlja2VkRWxlbWVudCAmJiAhc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkKGxhc3RDbGlja2VkRWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChpc1NhdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlucHV0Q2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LCBcclxuICAgICAgICBmb3JjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgV2FybmluZ1dpbmRvdyB9O1xyXG4iLCJpbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21tb24vbG9hZGVyLmpzJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tbW9uL3ZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IE11bHRpc2VsZWN0IH0gZnJvbSAnLi4vY29tbW9uL211bHRpc2VsZWN0LXNldHVwLmpzJztcclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4uL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMnO1xyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJDcmVhdGUoKSB7XHJcbiAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgTXVsdGlzZWxlY3QuU2V0dXAoJ211bHRpc2VsZWN0LXJvbGVzJywgZnVuY3Rpb24gKG9wdGlvbiwgY2hlY2tlZCwgc2VsZWN0KSB7XHJcbiAgICAgICAgdmFyIG9wc2VsZWN0ZWQgPSAkKG9wdGlvbikudGV4dCgpO1xyXG4gICAgICAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHNlbGVjdGVkID09PSAnQWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbXVsdGlzZWxlY3Qtcm9sZXMgb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkgIT09ICdBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI211bHRpc2VsZWN0LXJvbGVzJykubXVsdGlzZWxlY3QoJ2Rlc2VsZWN0JywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnRleHQoKSAhPT0gJyBBZG1pbicgJiYgJCh0aGlzKS50ZXh0KCkgIT09ICcgU3VwZXJBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgTXVsdGlzZWxlY3QuUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHNlbGVjdGVkID09PSAnU3VwZXJBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtdWx0aXNlbGVjdC1yb2xlcyBvcHRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnRleHQoKSAhPT0gJ1N1cGVyQWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtdWx0aXNlbGVjdC1yb2xlcycpLm11bHRpc2VsZWN0KCdkZXNlbGVjdCcsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5jaGVja2JveCcpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykudGV4dCgpICE9PSAnIFN1cGVyQWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIE11bHRpc2VsZWN0LlJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKG9wc2VsZWN0ZWQgPT09ICdBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICQoJy5jaGVja2JveCcpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykudGV4dCgpICE9PSAnIEFkbWluJyAmJiAkKHRoaXMpLnRleHQoKSAhPT0gJyBTdXBlckFkbWluJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgTXVsdGlzZWxlY3QuUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHNlbGVjdGVkID09PSAnU3VwZXJBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICQoJy5jaGVja2JveCcpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykudGV4dCgpICE9PSAnIFN1cGVyQWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBNdWx0aXNlbGVjdC5SZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdidXR0b25bdHlwZT1zdWJtaXRdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBMb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJCgnI2VtYWlsJyksICdJbnZhbGlkIGVtYWlsJywgZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9yLnZhbGlkYXRlRW1haWwodmFsKTtcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRWRpdCgpIHtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICBNdWx0aXNlbGVjdC5TZXR1cCgnbXVsdGlzZWxlY3Qtcm9sZXMnLCBmdW5jdGlvbiAob3B0aW9uLCBjaGVja2VkLCBzZWxlY3QpIHtcclxuICAgICAgICB2YXIgb3BzZWxlY3RlZCA9ICQob3B0aW9uKS50ZXh0KCk7XHJcbiAgICAgICAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKG9wc2VsZWN0ZWQgPT09ICdBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtdWx0aXNlbGVjdC1yb2xlcyBvcHRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnRleHQoKSAhPT0gJ0FkbWluJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbXVsdGlzZWxlY3Qtcm9sZXMnKS5tdWx0aXNlbGVjdCgnZGVzZWxlY3QnLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJy5jaGVja2JveCcpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykudGV4dCgpICE9PSAnIEFkbWluJyAmJiAkKHRoaXMpLnRleHQoKSAhPT0gJyBTdXBlckFkbWluJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBNdWx0aXNlbGVjdC5SZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wc2VsZWN0ZWQgPT09ICdTdXBlckFkbWluJykge1xyXG4gICAgICAgICAgICAgICAgJCgnI211bHRpc2VsZWN0LXJvbGVzIG9wdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykudGV4dCgpICE9PSAnU3VwZXJBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI211bHRpc2VsZWN0LXJvbGVzJykubXVsdGlzZWxlY3QoJ2Rlc2VsZWN0JywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLmNoZWNrYm94JykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkgIT09ICcgU3VwZXJBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgTXVsdGlzZWxlY3QuUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAob3BzZWxlY3RlZCA9PT0gJ0FkbWluJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmNoZWNrYm94JykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkgIT09ICcgQWRtaW4nICYmICQodGhpcykudGV4dCgpICE9PSAnIFN1cGVyQWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBNdWx0aXNlbGVjdC5SZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wc2VsZWN0ZWQgPT09ICdTdXBlckFkbWluJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmNoZWNrYm94JykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkgIT09ICcgU3VwZXJBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIE11bHRpc2VsZWN0LlJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tdWx0aXNlbGVjdC1jb250YWluZXIgbGFiZWw6aGFzKGlucHV0OmNoZWNrZWQpJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKVtpbmRleF0uaW5uZXJUZXh0LnRyaW1TdGFydCgpID09PSAnU3VwZXJBZG1pbicpIHtcclxuICAgICAgICAgICAgJCgnI2VtYWlsJykuYXR0cigncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgICAgICAgICAgJCgnLm11bHRpc2VsZWN0LW5hdGl2ZS1zZWxlY3QgLmJ0bi1ncm91cCcpLmh0bWwoJzxkaXY+U3VwZXJBZG1pbjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKCcubXVsdGlzZWxlY3QtbmF0aXZlLXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnaW5wdXRbdHlwZT1zdWJtaXRdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBMb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJCgnI2VtYWlsJyksICdJbnZhbGlkIGVtYWlsJywgZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9yLnZhbGlkYXRlRW1haWwodmFsKTtcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5pdGlhbERlc2VsZWN0KCdTdXBlckFkbWluJyk7XHJcbiAgICBpbml0aWFsRGVzZWxlY3QoJ0FkbWluJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxEZXNlbGVjdChyb2xlKSB7XHJcbiAgICB2YXIgcm9sZXNJZHMgPSAkKCcjbXVsdGlzZWxlY3Qtcm9sZXMnKS52YWwoKTtcclxuICAgICQoJyNtdWx0aXNlbGVjdC1yb2xlcyBvcHRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnRleHQoKSA9PT0gcm9sZSkge1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5LmluQXJyYXkoJCh0aGlzKS52YWwoKSwgcm9sZXNJZHMpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmNoZWNrYm94JykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkgIT09ICcgJyArIHJvbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgTXVsdGlzZWxlY3QuUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5pbml0VXNlckNyZWF0ZSA9IGluaXRVc2VyQ3JlYXRlO1xyXG53aW5kb3cuaW5pdFVzZXJFZGl0ID0gaW5pdFVzZXJFZGl0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9