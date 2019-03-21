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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/roles.js");
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

/***/ "./scripts/sitetriks/roles.js":
/*!************************************!*\
  !*** ./scripts/sitetriks/roles.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function createRole() {
    _warningWindow.WarningWindow.attach();
    $('#create-roles-form').on('submit', function (e) {
        var flag = true;

        if (!_validator.Validator.validate($('#name'), 'Name must be atleast 3 symbols', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = false;
        }

        if (!flag) {

            e.preventDefault();
        }
    });
}

function editRole() {
    _warningWindow.WarningWindow.attach();
    $('#edit-roles-form').on('submit', function (e) {
        var flag = true;

        if (!_validator.Validator.validate($('#name'), 'Name must be atleast 3 symbols', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = false;
        }

        if (!flag) {

            e.preventDefault();
        }
    });
}

window.createRole = createRole;
window.editRole = editRole;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL3JvbGVzLmpzIl0sIm5hbWVzIjpbIkRhdGEiLCJtYWtlUmVxdWVzdCIsImZldGNoIiwiaXNGdW5jdGlvbiIsIm1ha2VGZXRjaFJlcXVlc3QiLCJtYWtlQWpheFJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsImlzRm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyYW1zIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCIkIiwiYWpheCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImdldCIsImluZGV4T2YiLCJqc29uIiwidGV4dCIsImdldEpzb24iLCJkaXNhYmxlQ2FjaGUiLCJwb3N0SnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0Rm9ybSIsImZvcm1EYXRhIiwiZGVsZXRlSnNvbiIsImRlZmF1bHRFcnJvciIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZnVuYyIsInRvU3RyaW5nIiwiY2FsbCIsIlZhbGlkYXRvciIsInZhbGlkYXRlIiwiJGVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZUZ1bmMiLCJ2YWx1ZSIsInZhbCIsImNzcyIsIm5leHQiLCJoYXNNaW5pbXVtTGVuZ3RoIiwibWluTGVuZ2h0IiwiaGFzTWF4aW11bUxlbmd0aCIsIm1heExlbmdodCIsImlzQWxwaGFOdW1lcmljIiwicGF0dGVybiIsInRlc3QiLCJpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbiIsImlzUGFzc2luZyIsImlzVXJsRnJpZW5kbHkiLCJpc1N0YXJ0aW5nV2l0aExldHRlciIsInZhbGlkYXRlRW1haWwiLCJpc0RlY2ltYWxOdW1iZXIiLCJtYXRjaGVzUGF0dGVybiIsImlzTnVtYmVyIiwiaXNHdWlkIiwic3RyaW5nVG9UZXN0Iiwic3Vic3RyaW5nIiwicmVnZXhHdWlkIiwiaXNJbnRlZ2VyIiwicGFyc2VJbnQiLCJpc051bWJlckluUmFuZ2UiLCJtaW4iLCJtYXgiLCJpc0xlbmdodEluUmFuZ2UiLCJjcmVhdGVGaWVsZHNWYWxpZGF0aW9uIiwiY3VzdG9tVmFsaWRhdGlvbkZ1bmMiLCJ2YWxpZGF0ZUZpZWxkcyIsImV2IiwidGFyZ2V0IiwiJGVsZW1lbnRzVG9WYWxpZGF0ZSIsImZpbmQiLCJmbGFnIiwiZWFjaCIsIl8iLCJlbGVtZW50IiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlcyIsInZhbGlkYXRpb25UeXBlcyIsImF0dHIiLCJzcGxpdCIsImlubmVyRmxhZyIsInZhbGlkYXRpb25NZXNzYWdlIiwibmFtZSIsInBhcnNlRmxvYXQiLCJjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyIiwiJHRhcmdldCIsImNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyIiwiZXh0cmFWYWx1ZXMiLCJ0aW1lciIsInZhbGlkYXRlVXJsT25DaGFuZ2UiLCIkaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwia2V5IiwibWVzc2FnZSIsInZhbGlkYXRlVXJsIiwiJHVybEZpZWxkIiwiJGJ0blN1Ym1pdCIsIlJlZ0V4cCIsInYiLCJ2YWxpZGF0ZVVuaXF1ZW5lcyIsImNsYXNzVG9WYWxpZGF0ZSIsImNvdW50ZXIiLCIkYWxsTmFtZXMiLCJXYXJuaW5nV2luZG93IiwibG9nZ2VyIiwiY29uZmlybWF0aW9uTWVzc2FnZSIsIm9uVW5sb2FkIiwiZSIsImhhc0NoYW5nZXMiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwibGFzdENsaWNrZWRFbGVtZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaGFzVGV4dEFyZWFzV2l0aFRleHQiLCIkdGV4dGFyZWFzIiwiaGFzSW5wdXRzV2l0aFRleHQiLCJoYXNUZXh0IiwiJGlucHV0cyIsImNoZWNrRWxlbWVudEZvckRhdGFBdHRyIiwiYXR0cmlidXRlIiwiY2hlY2tVcmwiLCJsaW5rUGF0aCIsImdldExhc3RDbGlja2VkRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdWJtaXRCdXR0b25DaGVjayIsInRhZ05hbWUiLCJoYXNDbGFzcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbnB1dENoYW5nZWQiLCJkZWZhdWx0U3RvcExlYXZlIiwiaXNTYXZpbmciLCJhdHRhY2giLCJvbmJlZm9yZXVubG9hZCIsImRldGFjaCIsImZvcmNlIiwiY3JlYXRlUm9sZSIsIm9uIiwiZWRpdFJvbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJI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RCxZQUFJLENBQUNBLElBQUwsRUFBVzs7QUFFUHFDLGNBQUVFLGNBQUY7QUFDSDtBQUNKLEtBYkQ7QUFjSDs7QUFFRCxTQUFTaUMsUUFBVCxHQUFvQjtBQUNoQnZDLGlDQUFjaUMsTUFBZDtBQUNBdEksTUFBRSxrQkFBRixFQUFzQjJJLEVBQXRCLENBQXlCLFFBQXpCLEVBQW1DLFVBQVVsQyxDQUFWLEVBQWE7QUFDNUMsWUFBSXJDLE9BQU8sSUFBWDs7QUFFQSxZQUFJLENBQUN6QyxxQkFBVUMsUUFBVixDQUFtQjVCLEVBQUUsT0FBRixDQUFuQixFQUErQixnQ0FBL0IsRUFBaUUsVUFBVWlDLEdBQVYsRUFBZTtBQUNqRixtQkFBT04scUJBQVVTLGdCQUFWLENBQTJCSCxHQUEzQixFQUFnQyxDQUFoQyxDQUFQO0FBQ0gsU0FGSSxDQUFMLEVBRUk7QUFDQW1DLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxZQUFJLENBQUNBLElBQUwsRUFBVzs7QUFFUHFDLGNBQUVFLGNBQUY7QUFDSDtBQUNKLEtBYkQ7QUFjSDs7QUFFREssT0FBTzBCLFVBQVAsR0FBb0JBLFVBQXBCO0FBQ0ExQixPQUFPNEIsUUFBUCxHQUFrQkEsUUFBbEIsQyIsImZpbGUiOiJqcy9zaXRldHJpa3Mvcm9sZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL3NpdGV0cmlrcy9yb2xlcy5qc1wiKTtcbiIsInZhciBEYXRhID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBtYWtlUmVxdWVzdCA9IHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNGdW5jdGlvbihmZXRjaCkgPyBtYWtlRmV0Y2hSZXF1ZXN0IDogbWFrZUFqYXhSZXF1ZXN0OyAvLyBmYWxsYmFjayB0byBhamF4IGlmIG9sZGVyIGJyb3dzZXJcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlQWpheFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gcHJvY2VzcyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnByb2Nlc3NEYXRhID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBzZXQgY29udGVudFR5cGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHBhcmFtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUZldGNoUmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJiByZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzLnRleHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRKc29uKHsgdXJsLCBkaXNhYmxlQ2FjaGUgfSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGRpc2FibGVDYWNoZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgJ1ByYWdtYSc6ICduby1jYWNoZScsXHJcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnR0VUJywgaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0SnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RGb3JtKHsgdXJsLCBmb3JtRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEsIGlzRm9ybTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0RFTEVURScsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdEVycm9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0SnNvbixcclxuICAgICAgICBwb3N0SnNvbixcclxuICAgICAgICBwb3N0Rm9ybSxcclxuICAgICAgICBkZWxldGVKc29uLFxyXG4gICAgICAgIGRlZmF1bHRFcnJvclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgRGF0YSB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbnZhciBWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKCRlbGVtZW50LCBlcnJvck1lc3NhZ2UsIHZhbGlkYXRlRnVuYykge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICRlbGVtZW50LnZhbCgpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUZ1bmModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNzcygnYm9yZGVyJywgJycpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5uZXh0KCdzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNzcygnYm9yZGVyJywgJzFweCBzb2xpZCAjZmY2ODY4Jyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KGVycm9yTWVzc2FnZSB8fCAnSW52YWxpZCB2YWx1ZSEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW5MZW5naHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSBtaW5MZW5naHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXhMZW5naHQpIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IG1heExlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXihbYS16MC05XSspJC9pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTk7XSskLztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNVcmxGcmllbmRseSh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16QS1aMC05LV9dKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1N0YXJ0aW5nV2l0aExldHRlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16XS9pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlxcZCtcXC5cXGR7MCwyfSQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eLT9cXGQrXFwuP1xcZCokLztcclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzR3VpZChzdHJpbmdUb1Rlc3QpIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9UZXN0WzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgc3RyaW5nVG9UZXN0ID0gc3RyaW5nVG9UZXN0LnN1YnN0cmluZygxLCBzdHJpbmdUb1Rlc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWdleEd1aWQgPSAvXihcXHspezAsMX1bMC05YS1mQS1GXXs4fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezEyfShcXH0pezAsMX0kL2dpO1xyXG4gICAgICAgIHJldHVybiByZWdleEd1aWQudGVzdChzdHJpbmdUb1Rlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBwYXJzZUludCh2YWx1ZSkgPT0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmIChtaW4gJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgbG93ZXIgb3IgZXF1YWwgdG8gJHttYXh9LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gbWF4ID8gK3ZhbHVlIDw9ICttYXggOiB0cnVlOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgb3IgZXF1YWwgdG8gJHttaW59LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gbWluID8gK3ZhbHVlID49ICttaW4gOiB0cnVlOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0xlbmdodEluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycyBsb25nLmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaGFzTWluaW11bUxlbmd0aCh2YWx1ZSwgbWluKTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heCAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgbWF4aW11bSBwZXJtaXR0ZWQgY2hhcmFjdGVycyBsZW5ndGggaXMgJHttYXh9LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaGFzTWF4aW11bUxlbmd0aCh2YWx1ZSwgbWF4KTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHZhbGlkYXRlIGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzICd2YWxpZGF0ZScgaW5zaWRlIHRoZSB3cmFwcGVyLlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tVmFsaWRhdGlvbkZ1bmMgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb24gZm9yIGhhbmRsaW5nIHNwZWNpZmljIGxvZ2ljLiBXaWxsIHJlY2lldmUgdGhlIEhUTUxFbGVtZW50LlxyXG4gICAgICogTXVzdCByZXR1cm4gdHJ1ZSBpZiB2YWxpZGF0aW9uIGlzIHBhc3NpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24oY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkcyhldikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMgJiYgIWV2ICYmICFldi50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIEhUTUxFbGVtZW50IGhhcyBiZWVuIHByb3ZpZGVkLCAnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0ICRlbGVtZW50c1RvVmFsaWRhdGUgPSAkKHRoaXMgfHwgZXYudGFyZ2V0KS5maW5kKCcudmFsaWRhdGUnKTtcclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50c1RvVmFsaWRhdGUuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICFmbGFnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlRmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoJGVsZW1lbnQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlcyA9IHtcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ1JlcXVpcmVkIGZpZWxkIScsXHJcbiAgICAgICAgICAgICdlbWFpbCc6ICdJbnZhbGlkIEUtTWFpbCEnLFxyXG4gICAgICAgICAgICAnaW50JzogJ05vdCBhbiBpbnRlZ2VyIG51bWJlciEnLFxyXG4gICAgICAgICAgICAnbnVtYmVyJzogJ05vdCBhIG51bWJlciEnLFxyXG4gICAgICAgICAgICAnZ3VpZCc6ICdJbnZhbGlkIGd1aWQhJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uVHlwZXMgPSAoJGVsZW1lbnQuYXR0cignZGF0YS12YWxpZGF0aW9uLXR5cGUnKSB8fCAnJykuc3BsaXQoJyAnKTtcclxuICAgICAgICBsZXQgaW5uZXJGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1pbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgbGV0IG1heCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWF4Jyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdGlvblR5cGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWVzc2FnZS0nICsgdmFsaWRhdGlvblR5cGVzW2ldKSB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbdmFsaWRhdGlvblR5cGVzW2ldXTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodmFsaWRhdGlvblR5cGVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gISF2YWx1ZTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCB2YWxpZGF0ZUVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc051bWJlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkZWNpbWFsJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RvdWJsZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmbG9hdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJGVsZW1lbnQsIG5hbWUgKyAnIG11c3QgYmUgZGVjaW1hbCBmbG9hdGluZyBwb2ludCBudW1iZXIhJywgKHZhbHVlKSA9PiB7IHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlKSA9PSB2YWx1ZTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc0ludGVnZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2d1aWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc0d1aWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY3VzdG9tVmFsaWRhdGlvbkZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFjdXN0b21WYWxpZGF0aW9uRnVuYygkZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlubmVyRmxhZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWlubmVyRmxhZztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyKGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IGV2ID8gJChldi50YXJnZXQpIDogJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGaWVsZCgkdGFyZ2V0LCBjdXN0b21WYWxpZGF0aW9uRnVuYyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcihuYW1lLCB1cmwsIG1pbkxlbmdodCwgZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICBsZXQgdGltZXIgPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybE9uQ2hhbmdlKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgbWluID0gbWluTGVuZ2h0IHx8ICRpbnB1dC5hdHRyKCdkYXRhLW1pbicpO1xyXG4gICAgICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChtaW4gJiYgIVZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIGBUaGUgdmFsdWUgbXVzdCBiZSBhdGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmchYCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCArbWluKTsgfSkpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICRpbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5W25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBleHRyYVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keVtrZXldID0gZXh0cmFWYWx1ZXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogdXJsLCBkYXRhOiBib2R5IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0LCByZXMubWVzc2FnZSB8fCAnVmFsdWUgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiByZXMuc3VjY2VzczsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dC5uZXh0KCdzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVVybE9uQ2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsKHZhbGlkYXRlVXJsLCAkdXJsRmllbGQsICRidG5TdWJtaXQpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoL15bXFx3XFwtXFwuXSskL2kpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGUoJHVybEZpZWxkLCAnVXJsIGNhbiBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgZGFzaCgtKSwgcG9pbnQoLikgYW5kIHVuZGVyc2NvcmUoXykgIScsICh2KSA9PiBtYXRjaGVzUGF0dGVybih2LCBwYXR0ZXJuKSkpIHtcclxuICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6IHZhbGlkYXRlVXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGUoJHVybEZpZWxkLCAnVXJsIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJywgKHYpPT4gcmVzLnN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVbmlxdWVuZXMobmFtZSwgY2xhc3NUb1ZhbGlkYXRlKSB7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHZhciAkYWxsTmFtZXMgPSAkKCcuJyArIGNsYXNzVG9WYWxpZGF0ZSk7XHJcbiAgICAgICAgZm9yIChuYW1lIGluICRhbGxOYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoJGFsbE5hbWVzW25hbWVdLnZhbHVlID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsaWRhdGUsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWMsXHJcbiAgICAgICAgaGFzTWluaW11bUxlbmd0aCxcclxuICAgICAgICB2YWxpZGF0ZUVtYWlsLFxyXG4gICAgICAgIGlzU3RhcnRpbmdXaXRoTGV0dGVyLFxyXG4gICAgICAgIGlzVXJsRnJpZW5kbHksXHJcbiAgICAgICAgaXNOdW1iZXIsXHJcbiAgICAgICAgaXNEZWNpbWFsTnVtYmVyLFxyXG4gICAgICAgIGlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uLFxyXG4gICAgICAgIGlzRnVuY3Rpb24sXHJcbiAgICAgICAgaXNHdWlkLFxyXG4gICAgICAgIGNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24sXHJcbiAgICAgICAgaXNJbnRlZ2VyLFxyXG4gICAgICAgIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlRmllbGQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcixcclxuICAgICAgICB2YWxpZGF0ZVVuaXF1ZW5lcyxcclxuICAgICAgICB2YWxpZGF0ZVVybFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IFZhbGlkYXRvciB9O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgV2FybmluZ1dpbmRvdyA9IChmdW5jdGlvbiAobG9nZ2VyKSB7XHJcbiAgICBsb2dnZXIgPSBsb2dnZXIgfHwgY29uc29sZTtcclxuICAgIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSAnSXQgbG9va3MgbGlrZSB5b3UgaGF2ZSBiZWVuIGVkaXRpbmcgc29tZXRoaW5nLiAnXHJcbiAgICAgICAgKyAnSWYgeW91IGxlYXZlIGJlZm9yZSBzYXZpbmcsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3QuJztcclxuXHJcbiAgICBmdW5jdGlvbiBvblVubG9hZChlKSB7XHJcbiAgICAgICAgaWYgKCFoYXNDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gb25VbmxvYWQ7XHJcbiAgICAvL3ZhciBsYXN0Q2xpY2tPbkVsZW1lbnQ7XHJcbiAgICAvLyQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAgbGFzdENsaWNrT25FbGVtZW50PSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAvL30pO1xyXG5cclxuICAgIHZhciBsYXN0Q2xpY2tlZEVsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICAvL2xhc3RDbGlja2VkID0gdGFyZ2V0LnRleHRDb250ZW50IHx8IHRhcmdldC5pbm5lclRleHQ7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0ICR0ZXh0YXJlYXMgPSAkKCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIC8vQWRkIHRpbnltY2UgZ2V0IHRleHQgZnJvbSB0ZXh0YXJlYSBsaWtlcyBpbnB1dFxyXG4gICAgICAgIGlmICgkdGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzSW5wdXRzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0IGhhc1RleHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgJGlucHV0cyA9ICQoJ2lucHV0W3R5cGU9dGV4dF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGhhc1RleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgYXR0cmlidXRlKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSAkKGxhc3RDbGlja2VkRWxlbWVudCkuZGF0YShhdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgICBpZiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1VybChsaW5rUGF0aCkge1xyXG4gICAgICAgIGxvZ2dlci5sb2coXCJDaGVjayB1cmxcIik7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSwgXCJkaXNhYmxlTGlua1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNraW5nIGlzIGRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2tpbmcgaXMgZW5hYmxlZFwiKVxyXG5cclxuICAgICAgICBpZiAobGlua1BhdGguaW5kZXhPZignY3JlYXRlJykgPT0gLTEgJiYgbGlua1BhdGguaW5kZXhPZignZWRpdCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldExhc3RDbGlja2VkRWxlbWVudCgpIHtcclxuICAgICAgICBsZXQgbGFzdENsaWNrZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJiBlbGVtZW50LmF0dHIoXCJ0eXBlXCIpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50Lmhhc0NsYXNzKFwiYnV0dG9uLXN1Ym1pdFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5hdHRyKCd0eXBlJykgPT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFlbGVtZW50LmF0dHIoJ2RhdGEtZGlzYWJsZS13YXJuaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAoIWxhc3RDbGlja2VkRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgbGlua1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgICAgIGlmICghc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgXCJkaXNhYmxlLXdhcm5pbmdcIikgIT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoZWNrVXJsKGxpbmtQYXRoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzQ2hhbmdlcyA9IGhhc1RleHRBcmVhc1dpdGhUZXh0KCkgfHwgaGFzSW5wdXRzV2l0aFRleHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHZhciBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRTdG9wTGVhdmUoZXYpIHtcclxuICAgICAgICBsZXQgaXNTYXZpbmcgPSBsYXN0Q2xpY2tlZEVsZW1lbnQgJiYgIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJChsYXN0Q2xpY2tlZEVsZW1lbnQpKTtcclxuICAgICAgICBpZiAoaXNTYXZpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dENoYW5nZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgZXYucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZm9yY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IFdhcm5pbmdXaW5kb3cgfTtcclxuIiwiaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tbW9uL3ZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IFdhcm5pbmdXaW5kb3cgfSBmcm9tICcuLi9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvbGUoKSB7XHJcbiAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgJCgnI2NyZWF0ZS1yb2xlcy1mb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkKCcjbmFtZScpLCAnTmFtZSBtdXN0IGJlIGF0bGVhc3QgMyBzeW1ib2xzJywgZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCAzKTtcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWZsYWcpIHtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFJvbGUoKSB7XHJcbiAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgJCgnI2VkaXQtcm9sZXMtZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJCgnI25hbWUnKSwgJ05hbWUgbXVzdCBiZSBhdGxlYXN0IDMgc3ltYm9scycsIGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgMyk7XHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFmbGFnKSB7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5jcmVhdGVSb2xlID0gY3JlYXRlUm9sZTtcclxud2luZG93LmVkaXRSb2xlID0gZWRpdFJvbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=