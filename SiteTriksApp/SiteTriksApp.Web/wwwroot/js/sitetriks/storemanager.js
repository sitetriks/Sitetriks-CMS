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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/storemanager.js");
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

/***/ "./scripts/sitetriks/storemanager.js":
/*!*******************************************!*\
  !*** ./scripts/sitetriks/storemanager.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _multiselectSetup = __webpack_require__(/*! ../common/multiselect-setup.js */ "./scripts/common/multiselect-setup.js");

function createStore(validateUrlLink, isNameAvailableLink) {
    var $createForm = $('#create-store-form');
    var $inputUrl = $createForm.find('input.url-field');
    var $inputTitle = $createForm.find('input.title-field');

    var validateTitle = _validator.Validator.createValidateOnChangeHandler('name', isNameAvailableLink, 3);
    var validateUrl = _validator.Validator.createValidateOnChangeHandler('url', validateUrlLink, 3, { 'prefix': 'store' });
    var isFormValid = _validator.Validator.createFieldsValidation();
    bindEvents();

    // TODO: rework
    function populate(ev) {
        var titleValue = $inputTitle.val().toLowerCase();
        $inputUrl.val(titleValue.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase());
        validateUrl.apply($inputUrl[0]);
    }

    function submitCreateForm(ev) {
        var _this = this;
        if (!isFormValid.apply(_this)) {
            ev.preventDefault();
            return false;
        }

        _loader.Loader.show('#fff');
        _data.Data.getJson({ url: validateUrlLink + '?prefix=store&url=' + $inputUrl.val() }).then(function (res) {
            if (res.success) {
                var name = $inputTitle.val();
                return _data.Data.postJson({ url: isNameAvailableLink, data: { name: name } });
            } else {
                _validator.Validator.validate($inputUrl, res.message || 'Url is invalid or already in use!', function (val) {
                    return res.success;
                });
                _loader.Loader.hide();
                return Promise.reject();
            }
        }).then(function (res) {
            if (res.success) {
                return _data.Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                _validator.Validator.validate($inputTitle, res.message || 'Name is already taken!', function (val) {
                    return res.success;
                });
                _loader.Loader.hide();
                return Promise.reject();
            }
        }).then(function (res) {
            if (res.success) {
                window.location.replace('/ecommerse/storemanager/');
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: res.message || 'Invalid information!' });
                _loader.Loader.hide();
            }
        }, _data.Data.defaultError);

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $inputTitle.on('input change', populate);
        $inputTitle.on('input change', validateTitle);
        $inputUrl.on('input change', validateUrl);
        $createForm.on('submit', submitCreateForm);
    }

    function dispose() {
        $inputTitle.off('input change', populate);
        $inputTitle.off('input change', validateTitle);
        $inputUrl.off('input change', validateUrl);
        $createForm.off('submit', submitCreateForm);
    }
}

function paymentOptions(storeId, postUrl) {
    _multiselectSetup.Multiselect.Setup('multiselect-payment-types', function (option, checked, select) {});

    $('#update-types').on('click', function (ev) {
        var types = [];
        $('#multiselect-payment-types').parent().find('input[type="checkbox"]').each(function (_, element) {
            var $element = $(element);
            if ($element.is(':checked')) {
                types.push($element.val());
            }
        });

        _loader.Loader.show('#fff');
        _data.Data.postJson({ url: postUrl, data: { types: types, storeId: storeId } }).then(function (res) {
            console.log(res);
            _loader.Loader.hide();
        });
    });
}

function selectSkin(grid, storeId) {
    $('body').on('click', '.select-skin', function (ev) {
        var $target = $(ev.target);
        var id = $target.attr('data-id');

        _data.Data.getJson({ url: '/ecommerse/storeskinmanager/selectskin?id=' + id + '&storeId=' + storeId }).then(function (res) {
            if (res.success) {
                grid.load(true);
            }
        });
    });
}

window.createStore = createStore;
window.paymentOptions = paymentOptions;
window.selectSkin = selectSkin;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbXVsdGlzZWxlY3Qtc2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL3N0b3JlbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJEYXRhIiwibWFrZVJlcXVlc3QiLCJmZXRjaCIsImlzRnVuY3Rpb24iLCJtYWtlRmV0Y2hSZXF1ZXN0IiwibWFrZUFqYXhSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJpc0Zvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcmFtcyIsImRhdGEiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiJCIsImFqYXgiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsInRleHQiLCJnZXRKc29uIiwiZGlzYWJsZUNhY2hlIiwicG9zdEpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdEZvcm0iLCJmb3JtRGF0YSIsImRlbGV0ZUpzb24iLCJkZWZhdWx0RXJyb3IiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJ0b1N0cmluZyIsImNhbGwiLCJMb2FkZXIiLCJnaWZTcmMiLCJzaG93IiwiY29sb3IiLCJpbWdTcmMiLCJCbHVyIiwiYWRkIiwiYXBwZW5kIiwic3JjIiwiY2xhc3MiLCJoaWRlIiwicmVtb3ZlIiwib24iLCJldiIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJhdHRyIiwiJGNvbnRhaW5lciIsImhpZGVPbkNsaWNrIiwiYXBwZW5kVG8iLCJQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyIsIlBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MiLCJCTFVSX0VMRU1FTlRfQ0xBU1MiLCJhZGRCbHVyIiwib3BhY2l0eSIsImFkZENsYXNzIiwiJGJsdXJFbGVtZW50IiwiJGl0ZW1Db250YWluZXIiLCIkcHJldmlld0NvbnRhaW5lciIsInJlbW92ZUJsdXIiLCJjc3MiLCJpc05hTiIsImZpbmQiLCJyZW1vdmVDbGFzcyIsIk11bHRpc2VsZWN0Iiwic2V0dXAiLCJpZCIsIm9uQ2hhbmdlQ2FsbGJhY2siLCJzZXR1cEVsZW1lbnQiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwibXVsdGlzZWxlY3QiLCJtdWx0aXBsZSIsImhlaWdodCIsImhlYWRlciIsIm5vbmVTZWxlY3RlZFRleHQiLCJudW1iZXJEaXNwbGF5ZWQiLCJzZWxlY3RlZFRleHQiLCJudW1DaGVja2VkIiwibnVtVG90YWwiLCJjaGVja2VkSXRlbXMiLCJzZWxlY3RlZExpc3QiLCJwb3NpdGlvbiIsIm15IiwiYXQiLCJvbkNoYW5nZSIsInJlZnJlc2giLCJkZXN0cm95IiwiU2V0dXAiLCJTZXR1cEVsZW1lbnQiLCJSZWZyZXNoIiwiRGVzdHJveSIsIk5vdGlmaWVyIiwiY3JlYXRlQWxlcnQiLCJjb250YWluZXJJZCIsInRpdGxlIiwibWVzc2FnZSIsInNlY29uZHMiLCJpc1Blcm1hbmVudCIsInNlbGVjdG9yIiwiJHRpdGxlIiwiJGNsb3NlQnV0dG9uIiwiaHRtbCIsIiRtZXNzYWdlIiwiJGFsZXJ0Iiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInZhbGlkYXRlRnVuYyIsInZhbHVlIiwidmFsIiwibmV4dCIsImhhc01pbmltdW1MZW5ndGgiLCJtaW5MZW5naHQiLCJoYXNNYXhpbXVtTGVuZ3RoIiwibWF4TGVuZ2h0IiwiaXNBbHBoYU51bWVyaWMiLCJwYXR0ZXJuIiwidGVzdCIsImlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uIiwiaXNQYXNzaW5nIiwiaXNVcmxGcmllbmRseSIsImlzU3RhcnRpbmdXaXRoTGV0dGVyIiwidmFsaWRhdGVFbWFpbCIsImlzRGVjaW1hbE51bWJlciIsIm1hdGNoZXNQYXR0ZXJuIiwiaXNOdW1iZXIiLCJpc0d1aWQiLCJzdHJpbmdUb1Rlc3QiLCJzdWJzdHJpbmciLCJyZWdleEd1aWQiLCJpc0ludGVnZXIiLCJwYXJzZUludCIsImlzTnVtYmVySW5SYW5nZSIsIm1pbiIsIm1heCIsImlzTGVuZ2h0SW5SYW5nZSIsImNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24iLCJjdXN0b21WYWxpZGF0aW9uRnVuYyIsInZhbGlkYXRlRmllbGRzIiwiJGVsZW1lbnRzVG9WYWxpZGF0ZSIsImZsYWciLCJlYWNoIiwiXyIsImVsZW1lbnQiLCJ2YWxpZGF0ZUZpZWxkIiwidmFsaWRhdGlvbk1lc3NhZ2VzIiwidmFsaWRhdGlvblR5cGVzIiwic3BsaXQiLCJpbm5lckZsYWciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIm5hbWUiLCJwYXJzZUZsb2F0IiwiY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlciIsImNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyIiwiZXh0cmFWYWx1ZXMiLCJ0aW1lciIsInZhbGlkYXRlVXJsT25DaGFuZ2UiLCIkaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJrZXkiLCJ2YWxpZGF0ZVVybCIsIiR1cmxGaWVsZCIsIiRidG5TdWJtaXQiLCJSZWdFeHAiLCJ2IiwidmFsaWRhdGVVbmlxdWVuZXMiLCJjbGFzc1RvVmFsaWRhdGUiLCJjb3VudGVyIiwiJGFsbE5hbWVzIiwiY3JlYXRlU3RvcmUiLCJ2YWxpZGF0ZVVybExpbmsiLCJpc05hbWVBdmFpbGFibGVMaW5rIiwiJGNyZWF0ZUZvcm0iLCIkaW5wdXRVcmwiLCIkaW5wdXRUaXRsZSIsInZhbGlkYXRlVGl0bGUiLCJpc0Zvcm1WYWxpZCIsImJpbmRFdmVudHMiLCJwb3B1bGF0ZSIsInRpdGxlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJhcHBseSIsInN1Ym1pdENyZWF0ZUZvcm0iLCJfdGhpcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiRm9ybURhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInR5cGUiLCJkaXNwb3NlIiwib2ZmIiwicGF5bWVudE9wdGlvbnMiLCJzdG9yZUlkIiwicG9zdFVybCIsIm9wdGlvbiIsImNoZWNrZWQiLCJzZWxlY3QiLCJ0eXBlcyIsInBhcmVudCIsImlzIiwicHVzaCIsInNlbGVjdFNraW4iLCJncmlkIiwibG9hZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLE9BQVEsWUFBWTtBQUNwQixRQUFJQyxjQUFjLE9BQU9DLEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NDLFdBQVdELEtBQVgsQ0FBaEMsR0FBb0RFLGdCQUFwRCxHQUF1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ZTtBQUMxRWtCLG9CQUFRQyxHQUFSLENBQVluQixHQUFaO0FBQ0F1QiwyQkFBT1UsSUFBUDtBQUNILFNBSEQ7QUFJSCxLQWREO0FBZUg7O0FBRUQsU0FBU3NLLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCVixPQUExQixFQUFtQztBQUMvQmxNLE1BQUUsTUFBRixFQUFVdUMsRUFBVixDQUFhLE9BQWIsRUFBc0IsY0FBdEIsRUFBc0MsVUFBVUMsRUFBVixFQUFjO0FBQ2hELFlBQUlDLFVBQVV6QyxFQUFFd0MsR0FBR0UsTUFBTCxDQUFkO0FBQ0EsWUFBSXFCLEtBQUt0QixRQUFRRSxJQUFSLENBQWEsU0FBYixDQUFUOztBQUVBL0QsbUJBQUs4QixPQUFMLENBQWEsRUFBRXhCLG9EQUFrRDZFLEVBQWxELGlCQUFnRW1JLE9BQWxFLEVBQWIsRUFBNEYvTCxJQUE1RixDQUFpRyxVQUFVQyxHQUFWLEVBQWU7QUFDNUcsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYmdOLHFCQUFLQyxJQUFMLENBQVUsSUFBVjtBQUNIO0FBQ0osU0FKRDtBQUtILEtBVEQ7QUFVSDs7QUFFRGpCLE9BQU9uQixXQUFQLEdBQXFCQSxXQUFyQjtBQUNBbUIsT0FBT0ssY0FBUCxHQUF3QkEsY0FBeEI7QUFDQUwsT0FBT2UsVUFBUCxHQUFvQkEsVUFBcEIsQyIsImZpbGUiOiJqcy9zaXRldHJpa3Mvc3RvcmVtYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3Mvc3RvcmVtYW5hZ2VyLmpzXCIpO1xuIiwidmFyIERhdGEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG1ha2VSZXF1ZXN0ID0gdHlwZW9mIGZldGNoICE9PSAndW5kZWZpbmVkJyAmJiBpc0Z1bmN0aW9uKGZldGNoKSA/IG1ha2VGZXRjaFJlcXVlc3QgOiBtYWtlQWpheFJlcXVlc3Q7IC8vIGZhbGxiYWNrIHRvIGFqYXggaWYgb2xkZXIgYnJvd3NlclxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VBamF4UmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBib2R5LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGlzRm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNvbnRlbnRUeXBlID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBwcm9jZXNzIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHJvY2Vzc0RhdGEgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHNldCBjb250ZW50VHlwZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgocGFyYW1zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlRmV0Y2hSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMgfHwge307XHJcbiAgICAgICAgaWYgKGlzRm9ybSkge1xyXG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyc1snQ29udGVudC1UeXBlJ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICYmIHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXMudGV4dCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEpzb24oeyB1cmwsIGRpc2FibGVDYWNoZSB9KSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoZGlzYWJsZUNhY2hlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAnUHJhZ21hJzogJ25vLWNhY2hlJyxcclxuICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEZvcm0oeyB1cmwsIGZvcm1EYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSwgaXNGb3JtOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnREVMRVRFJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RXJyb3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRKc29uLFxyXG4gICAgICAgIHBvc3RKc29uLFxyXG4gICAgICAgIHBvc3RGb3JtLFxyXG4gICAgICAgIGRlbGV0ZUpzb24sXHJcbiAgICAgICAgZGVmYXVsdEVycm9yXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBEYXRhIH07XHJcbiIsIi8qIExvYWRlci5qcyB2ZXJzaW9uIDEuMSAqL1xyXG52YXIgTG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBnaWZTcmMgPSAnL2ltYWdlcy9sb2FkaW5nLmdpZic7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3Nob3dXaXRoUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0JhckRhdGEsIGNvbG9yKSB7XHJcbiAgICAgICAgLy8gICAgaWYgKGNvbG9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgIGNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgbGV0ICRwYXJlbnQgPSBCbHVyLmFkZCh7IGNvbG9yIH0pO1xyXG5cclxuICAgICAgICAvLyAgICBsZXQgYmFyID0gUHJvZ3Jlc3NCYXIuYnVpbGQoeyBkYXRhOiBwcm9ncmVzc0JhckRhdGEsICRwYXJlbnQ6ICRwYXJlbnQsIGNzc0NsYXNzOiAnYmx1ci1jb250ZW50JyB9KVswXTtcclxuICAgICAgICAvLyAgICBsZXQgZGF0YSA9ICQoYmFyKS5kYXRhKHByb2dyZXNzQmFyRGF0YS5uYW1lKVxyXG4gICAgICAgIC8vICAgICAgICAub25TdGFydCgpO1xyXG4gICAgICAgIC8vfSxcclxuICAgICAgICBzaG93OiBmdW5jdGlvbiAoY29sb3IsIGltZ1NyYykge1xyXG4gICAgICAgICAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWltZ1NyYykge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gZ2lmU3JjO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBCbHVyLmFkZCh7IGNvbG9yIH0pXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzxpbWcvPicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGltZ1NyYyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2JsdXItY29udGVudCdcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgQmx1ci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgTG9hZGVyIH07XHJcblxyXG4vLyBHYWxsZXJ5IHJlZ2lzdHJhdGlvblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdpbWcuZGlzcGxheS1pbWFnZSwgaW1nLmdhbGxlcnktaW1hZ2UnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXYudGFyZ2V0KTtcclxuICAgICAgICBsZXQgc3JjID0gJHRhcmdldC5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSBCbHVyLmFkZCh7IGhpZGVPbkNsaWNrOiB0cnVlIH0pO1xyXG4gICAgICAgICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50IHByZXZpZXctaW1hZ2UnLFxyXG4gICAgICAgICAgICBzcmM6IHNyY1xyXG4gICAgICAgIH0pLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG4vLyBIZWxwZXIgY2xhc3MgZm9yIGxvYWRlciBhbmQgZ2FsbGVyeVxyXG52YXIgQmx1ciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyA9ICdwcmV2aWV3LWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctaXRlbS1jb250YWluZXInO1xyXG4gICAgY29uc3QgQkxVUl9FTEVNRU5UX0NMQVNTID0gJ2JsdXInO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJsdXIoeyBoaWRlT25DbGljaywgY29sb3IsIG9wYWNpdHkgfSkge1xyXG4gICAgICAgIGlmIChoaWRlT25DbGljayAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoaWRlT25DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCdzdC1uby1vdmVyZmxvdycpO1xyXG5cclxuICAgICAgICBsZXQgJGJsdXJFbGVtZW50ID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBCTFVSX0VMRU1FTlRfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRpdGVtQ29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCAkcHJldmlld0NvbnRhaW5lciA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogUFJFVklFV19DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICRwcmV2aWV3Q29udGFpbmVyLm9uKCdjbGljaycsIHJlbW92ZUJsdXIpO1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ICYmIGlzTmFOKCtvcGFjaXR5KSAmJiBvcGFjaXR5ID49IDAgJiYgb3BhY2l0eSA8PSAxKSB7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwcmV2aWV3Q29udGFpbmVyLmFwcGVuZCgkaXRlbUNvbnRhaW5lcik7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkYmx1ckVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGl0ZW1Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQmx1cigpIHtcclxuICAgICAgICAkKCdib2R5JykuZmluZCgnLicgKyBCTFVSX0VMRU1FTlRfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6IGFkZEJsdXIsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmVCbHVyXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgQmx1ciB9O1xyXG4iLCJ2YXIgTXVsdGlzZWxlY3QgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gc2V0dXAoaWQsIG9uQ2hhbmdlQ2FsbGJhY2spIHtcclxuICAgICAgICBzZXR1cEVsZW1lbnQoJCgnIycgKyBpZCksIG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldHVwRWxlbWVudCgkZWxlbWVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICAkZWxlbWVudC5tdWx0aXNlbGVjdCh7XHJcbiAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDVweCcsXHJcbiAgICAgICAgICAgIGhlYWRlcjogJycsXHJcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6ICdOb25lJyxcclxuICAgICAgICAgICAgbnVtYmVyRGlzcGxheWVkOiAnJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0OiBmdW5jdGlvbiAobnVtQ2hlY2tlZCwgbnVtVG90YWwsIGNoZWNrZWRJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bUNoZWNrZWQgKyAnIG9mICcgKyBudW1Ub3RhbCArICcgY2hlY2tlZCc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkTGlzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3c6IFsnYmxpbmQnLCAyMDBdLFxyXG4gICAgICAgICAgICBoaWRlOiBbJ2ZhZGUnLCAyMDBdLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbXk6ICdsZWZ0IHRvcCcsXHJcbiAgICAgICAgICAgICAgICBhdDogJ2xlZnQgYm90dG9tJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogY2FsbGJhY2tcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoKGlkKSB7XHJcbiAgICAgICAgJCgnIycgKyBpZCkubXVsdGlzZWxlY3QoJ3JlZnJlc2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZXN0cm95KGlkKSB7XHJcbiAgICAgICAgJCgnIycgKyBpZCkubXVsdGlzZWxlY3QoJ2Rlc3Ryb3knKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFNldHVwOiBzZXR1cCxcclxuICAgICAgICBTZXR1cEVsZW1lbnQ6IHNldHVwRWxlbWVudCxcclxuICAgICAgICBSZWZyZXNoOiByZWZyZXNoLFxyXG4gICAgICAgIERlc3Ryb3k6IGRlc3Ryb3lcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBNdWx0aXNlbGVjdCB9O1xyXG4iLCJ2YXIgTm90aWZpZXIgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHN0YXR1cyBpcyBmb2xsb3dpbmcgYm9vdHN0cmFwIGNvbnZlbnRpb246ICdkYW5nZXInKHJlZCksICd3YXJuaW5nJyh5ZWxsb3cpLCAnc3VjY2VzcycoZ3JlZW4pLCAnaW5mbycoYmx1ZSlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQsIHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMsIHNlY29uZHMsIGlzUGVybWFuZW50LCBzZWxlY3RvciB9KSB7XHJcbiAgICAgICAgbGV0ICR0aXRsZSA9ICQoJzxzdHJvbmc+PC9zdHJvbmc+JywgeyB0ZXh0OiB0aXRsZSB8fCAnJyB9KTtcclxuICAgICAgICBsZXQgJGNsb3NlQnV0dG9uID0gJCgnPGE+PC9hPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdjbG9zZScsXHJcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnYWxlcnQnLFxyXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdjbG9zZScsXHJcbiAgICAgICAgICAgIGh0bWw6ICcmdGltZXM7J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCAkbWVzc2FnZSA9ICQoJzxzcGFuPjwvc3Bhbj4nLCB7IHRleHQ6ICcgJyArIChtZXNzYWdlIHx8ICcnKSB9KTtcclxuICAgICAgICBsZXQgJGFsZXJ0ID0gJCgnPGRpdj48L2Rpdj4nLCB7IGNsYXNzOiAnYWxlcnQgYWxlcnQtJyArIChzdGF0dXMgfHwgJ2luZm8nKSB9KTtcclxuXHJcbiAgICAgICAgJGFsZXJ0LmFwcGVuZCgkdGl0bGUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJGNsb3NlQnV0dG9uKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oc2VsZWN0b3IgfHwgY29udGFpbmVySWQgfHwgJ2JvZHknKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRhbGVydC5mYWRlT3V0KDUwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRhbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAoc2Vjb25kcyB8fCAxMCkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVBbGVydDogY3JlYXRlQWxlcnRcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBOb3RpZmllciB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbnZhciBWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKCRlbGVtZW50LCBlcnJvck1lc3NhZ2UsIHZhbGlkYXRlRnVuYykge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICRlbGVtZW50LnZhbCgpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUZ1bmModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNzcygnYm9yZGVyJywgJycpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5uZXh0KCdzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNzcygnYm9yZGVyJywgJzFweCBzb2xpZCAjZmY2ODY4Jyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KGVycm9yTWVzc2FnZSB8fCAnSW52YWxpZCB2YWx1ZSEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW5MZW5naHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSBtaW5MZW5naHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXhMZW5naHQpIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IG1heExlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXihbYS16MC05XSspJC9pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTk7XSskLztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNVcmxGcmllbmRseSh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16QS1aMC05LV9dKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1N0YXJ0aW5nV2l0aExldHRlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16XS9pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlxcZCtcXC5cXGR7MCwyfSQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eLT9cXGQrXFwuP1xcZCokLztcclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzR3VpZChzdHJpbmdUb1Rlc3QpIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9UZXN0WzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgc3RyaW5nVG9UZXN0ID0gc3RyaW5nVG9UZXN0LnN1YnN0cmluZygxLCBzdHJpbmdUb1Rlc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWdleEd1aWQgPSAvXihcXHspezAsMX1bMC05YS1mQS1GXXs4fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezEyfShcXH0pezAsMX0kL2dpO1xyXG4gICAgICAgIHJldHVybiByZWdleEd1aWQudGVzdChzdHJpbmdUb1Rlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBwYXJzZUludCh2YWx1ZSkgPT0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmIChtaW4gJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgbG93ZXIgb3IgZXF1YWwgdG8gJHttYXh9LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gbWF4ID8gK3ZhbHVlIDw9ICttYXggOiB0cnVlOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgb3IgZXF1YWwgdG8gJHttaW59LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gbWluID8gK3ZhbHVlID49ICttaW4gOiB0cnVlOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0xlbmdodEluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycyBsb25nLmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaGFzTWluaW11bUxlbmd0aCh2YWx1ZSwgbWluKTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heCAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgbWF4aW11bSBwZXJtaXR0ZWQgY2hhcmFjdGVycyBsZW5ndGggaXMgJHttYXh9LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaGFzTWF4aW11bUxlbmd0aCh2YWx1ZSwgbWF4KTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHZhbGlkYXRlIGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzICd2YWxpZGF0ZScgaW5zaWRlIHRoZSB3cmFwcGVyLlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tVmFsaWRhdGlvbkZ1bmMgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb24gZm9yIGhhbmRsaW5nIHNwZWNpZmljIGxvZ2ljLiBXaWxsIHJlY2lldmUgdGhlIEhUTUxFbGVtZW50LlxyXG4gICAgICogTXVzdCByZXR1cm4gdHJ1ZSBpZiB2YWxpZGF0aW9uIGlzIHBhc3NpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24oY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkcyhldikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMgJiYgIWV2ICYmICFldi50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIEhUTUxFbGVtZW50IGhhcyBiZWVuIHByb3ZpZGVkLCAnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0ICRlbGVtZW50c1RvVmFsaWRhdGUgPSAkKHRoaXMgfHwgZXYudGFyZ2V0KS5maW5kKCcudmFsaWRhdGUnKTtcclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50c1RvVmFsaWRhdGUuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICFmbGFnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlRmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoJGVsZW1lbnQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlcyA9IHtcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ1JlcXVpcmVkIGZpZWxkIScsXHJcbiAgICAgICAgICAgICdlbWFpbCc6ICdJbnZhbGlkIEUtTWFpbCEnLFxyXG4gICAgICAgICAgICAnaW50JzogJ05vdCBhbiBpbnRlZ2VyIG51bWJlciEnLFxyXG4gICAgICAgICAgICAnbnVtYmVyJzogJ05vdCBhIG51bWJlciEnLFxyXG4gICAgICAgICAgICAnZ3VpZCc6ICdJbnZhbGlkIGd1aWQhJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uVHlwZXMgPSAoJGVsZW1lbnQuYXR0cignZGF0YS12YWxpZGF0aW9uLXR5cGUnKSB8fCAnJykuc3BsaXQoJyAnKTtcclxuICAgICAgICBsZXQgaW5uZXJGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1pbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgbGV0IG1heCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWF4Jyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdGlvblR5cGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWVzc2FnZS0nICsgdmFsaWRhdGlvblR5cGVzW2ldKSB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbdmFsaWRhdGlvblR5cGVzW2ldXTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodmFsaWRhdGlvblR5cGVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gISF2YWx1ZTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCB2YWxpZGF0ZUVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc051bWJlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkZWNpbWFsJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RvdWJsZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmbG9hdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJGVsZW1lbnQsIG5hbWUgKyAnIG11c3QgYmUgZGVjaW1hbCBmbG9hdGluZyBwb2ludCBudW1iZXIhJywgKHZhbHVlKSA9PiB7IHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlKSA9PSB2YWx1ZTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc0ludGVnZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2d1aWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc0d1aWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY3VzdG9tVmFsaWRhdGlvbkZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFjdXN0b21WYWxpZGF0aW9uRnVuYygkZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlubmVyRmxhZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWlubmVyRmxhZztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyKGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IGV2ID8gJChldi50YXJnZXQpIDogJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGaWVsZCgkdGFyZ2V0LCBjdXN0b21WYWxpZGF0aW9uRnVuYyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcihuYW1lLCB1cmwsIG1pbkxlbmdodCwgZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICBsZXQgdGltZXIgPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybE9uQ2hhbmdlKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgbWluID0gbWluTGVuZ2h0IHx8ICRpbnB1dC5hdHRyKCdkYXRhLW1pbicpO1xyXG4gICAgICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChtaW4gJiYgIVZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIGBUaGUgdmFsdWUgbXVzdCBiZSBhdGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmchYCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCArbWluKTsgfSkpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICRpbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5W25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBleHRyYVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keVtrZXldID0gZXh0cmFWYWx1ZXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogdXJsLCBkYXRhOiBib2R5IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0LCByZXMubWVzc2FnZSB8fCAnVmFsdWUgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiByZXMuc3VjY2VzczsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dC5uZXh0KCdzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVVybE9uQ2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsKHZhbGlkYXRlVXJsLCAkdXJsRmllbGQsICRidG5TdWJtaXQpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoL15bXFx3XFwtXFwuXSskL2kpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGUoJHVybEZpZWxkLCAnVXJsIGNhbiBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgZGFzaCgtKSwgcG9pbnQoLikgYW5kIHVuZGVyc2NvcmUoXykgIScsICh2KSA9PiBtYXRjaGVzUGF0dGVybih2LCBwYXR0ZXJuKSkpIHtcclxuICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6IHZhbGlkYXRlVXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGUoJHVybEZpZWxkLCAnVXJsIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJywgKHYpPT4gcmVzLnN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVbmlxdWVuZXMobmFtZSwgY2xhc3NUb1ZhbGlkYXRlKSB7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHZhciAkYWxsTmFtZXMgPSAkKCcuJyArIGNsYXNzVG9WYWxpZGF0ZSk7XHJcbiAgICAgICAgZm9yIChuYW1lIGluICRhbGxOYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoJGFsbE5hbWVzW25hbWVdLnZhbHVlID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsaWRhdGUsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWMsXHJcbiAgICAgICAgaGFzTWluaW11bUxlbmd0aCxcclxuICAgICAgICB2YWxpZGF0ZUVtYWlsLFxyXG4gICAgICAgIGlzU3RhcnRpbmdXaXRoTGV0dGVyLFxyXG4gICAgICAgIGlzVXJsRnJpZW5kbHksXHJcbiAgICAgICAgaXNOdW1iZXIsXHJcbiAgICAgICAgaXNEZWNpbWFsTnVtYmVyLFxyXG4gICAgICAgIGlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uLFxyXG4gICAgICAgIGlzRnVuY3Rpb24sXHJcbiAgICAgICAgaXNHdWlkLFxyXG4gICAgICAgIGNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24sXHJcbiAgICAgICAgaXNJbnRlZ2VyLFxyXG4gICAgICAgIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlRmllbGQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcixcclxuICAgICAgICB2YWxpZGF0ZVVuaXF1ZW5lcyxcclxuICAgICAgICB2YWxpZGF0ZVVybFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IFZhbGlkYXRvciB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21tb24vbG9hZGVyLmpzJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tbW9uL3ZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnLi4vY29tbW9uL25vdGlmaWVyLmpzJztcclxuaW1wb3J0IHsgTXVsdGlzZWxlY3QgfSBmcm9tICcuLi9jb21tb24vbXVsdGlzZWxlY3Qtc2V0dXAuanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RvcmUodmFsaWRhdGVVcmxMaW5rLCBpc05hbWVBdmFpbGFibGVMaW5rKSB7XHJcbiAgICBsZXQgJGNyZWF0ZUZvcm0gPSAkKCcjY3JlYXRlLXN0b3JlLWZvcm0nKTtcclxuICAgIGxldCAkaW5wdXRVcmwgPSAkY3JlYXRlRm9ybS5maW5kKCdpbnB1dC51cmwtZmllbGQnKTtcclxuICAgIGxldCAkaW5wdXRUaXRsZSA9ICRjcmVhdGVGb3JtLmZpbmQoJ2lucHV0LnRpdGxlLWZpZWxkJyk7XHJcblxyXG4gICAgbGV0IHZhbGlkYXRlVGl0bGUgPSBWYWxpZGF0b3IuY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIoJ25hbWUnLCBpc05hbWVBdmFpbGFibGVMaW5rLCAzKTtcclxuICAgIGxldCB2YWxpZGF0ZVVybCA9IFZhbGlkYXRvci5jcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcigndXJsJywgdmFsaWRhdGVVcmxMaW5rLCAzLCB7ICdwcmVmaXgnOiAnc3RvcmUnIH0pO1xyXG4gICAgbGV0IGlzRm9ybVZhbGlkID0gVmFsaWRhdG9yLmNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24oKTtcclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAvLyBUT0RPOiByZXdvcmtcclxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlKGV2KSB7XHJcbiAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSAkaW5wdXRUaXRsZS52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICRpbnB1dFVybC52YWwodGl0bGVWYWx1ZS5yZXBsYWNlKC9cXHMrL2csICctJykucmVwbGFjZSgvLSsvZywgJy0nKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB2YWxpZGF0ZVVybC5hcHBseSgkaW5wdXRVcmxbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdENyZWF0ZUZvcm0oZXYpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQuYXBwbHkoX3RoaXMpKSB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiB2YWxpZGF0ZVVybExpbmsgKyAnP3ByZWZpeD1zdG9yZSZ1cmw9JyArICRpbnB1dFVybC52YWwoKSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9ICRpbnB1dFRpdGxlLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEucG9zdEpzb24oeyB1cmw6IGlzTmFtZUF2YWlsYWJsZUxpbmssIGRhdGE6IHsgbmFtZTogbmFtZSB9IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dFVybCwgcmVzLm1lc3NhZ2UgfHwgJ1VybCBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHJlcy5zdWNjZXNzOyB9KTtcclxuICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnBvc3RGb3JtKHt1cmw6IF90aGlzLmFjdGlvbiwgZm9ybURhdGE6IG5ldyBGb3JtRGF0YShfdGhpcykgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0VGl0bGUsIHJlcy5tZXNzYWdlIHx8ICdOYW1lIGlzIGFscmVhZHkgdGFrZW4hJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gcmVzLnN1Y2Nlc3M7IH0pO1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9lY29tbWVyc2Uvc3RvcmVtYW5hZ2VyLycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNhbGVydHMnLCB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogcmVzLm1lc3NhZ2UgfHwgJ0ludmFsaWQgaW5mb3JtYXRpb24hJyB9KTtcclxuICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcblxyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgJGlucHV0VGl0bGUub24oJ2lucHV0IGNoYW5nZScsIHBvcHVsYXRlKTtcclxuICAgICAgICAkaW5wdXRUaXRsZS5vbignaW5wdXQgY2hhbmdlJywgdmFsaWRhdGVUaXRsZSk7XHJcbiAgICAgICAgJGlucHV0VXJsLm9uKCdpbnB1dCBjaGFuZ2UnLCB2YWxpZGF0ZVVybCk7XHJcbiAgICAgICAgJGNyZWF0ZUZvcm0ub24oJ3N1Ym1pdCcsIHN1Ym1pdENyZWF0ZUZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgJGlucHV0VGl0bGUub2ZmKCdpbnB1dCBjaGFuZ2UnLCBwb3B1bGF0ZSk7XHJcbiAgICAgICAgJGlucHV0VGl0bGUub2ZmKCdpbnB1dCBjaGFuZ2UnLCB2YWxpZGF0ZVRpdGxlKTtcclxuICAgICAgICAkaW5wdXRVcmwub2ZmKCdpbnB1dCBjaGFuZ2UnLCB2YWxpZGF0ZVVybCk7XHJcbiAgICAgICAgJGNyZWF0ZUZvcm0ub2ZmKCdzdWJtaXQnLCBzdWJtaXRDcmVhdGVGb3JtKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF5bWVudE9wdGlvbnMoc3RvcmVJZCwgcG9zdFVybCkge1xyXG4gICAgTXVsdGlzZWxlY3QuU2V0dXAoJ211bHRpc2VsZWN0LXBheW1lbnQtdHlwZXMnLCBmdW5jdGlvbiAob3B0aW9uLCBjaGVja2VkLCBzZWxlY3QpIHsgfSk7XHJcblxyXG4gICAgJCgnI3VwZGF0ZS10eXBlcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCB0eXBlcyA9IFtdO1xyXG4gICAgICAgICQoJyNtdWx0aXNlbGVjdC1wYXltZW50LXR5cGVzJykucGFyZW50KCkuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoJGVsZW1lbnQuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goJGVsZW1lbnQudmFsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogcG9zdFVybCwgZGF0YTogeyB0eXBlcywgc3RvcmVJZCB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFNraW4oZ3JpZCwgc3RvcmVJZCkge1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2VsZWN0LXNraW4nLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXYudGFyZ2V0KTtcclxuICAgICAgICBsZXQgaWQgPSAkdGFyZ2V0LmF0dHIoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiBgL2Vjb21tZXJzZS9zdG9yZXNraW5tYW5hZ2VyL3NlbGVjdHNraW4/aWQ9JHtpZH0mc3RvcmVJZD0ke3N0b3JlSWR9YCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLmxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuY3JlYXRlU3RvcmUgPSBjcmVhdGVTdG9yZTtcclxud2luZG93LnBheW1lbnRPcHRpb25zID0gcGF5bWVudE9wdGlvbnM7XHJcbndpbmRvdy5zZWxlY3RTa2luID0gc2VsZWN0U2tpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==