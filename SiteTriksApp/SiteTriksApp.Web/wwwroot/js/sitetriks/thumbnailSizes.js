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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/thumbnailSizes.js");
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

/***/ "./scripts/sitetriks/thumbnailSizes.js":
/*!*********************************************!*\
  !*** ./scripts/sitetriks/thumbnailSizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createEditThumbnailSize = createEditThumbnailSize;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function createEditThumbnailSize() {
    var $thumbSizeId = $('#thumbSizeId');
    var $fullForm = $('.form-horizontal');
    var $sizeType = $('#size-type');
    var $sizeName = $('#size-name');
    var $multiplierY = $('#multipliery');
    var $multiplierX = $('#multiplierx');
    var $offsety = $('#offsety');
    var $offsetx = $('#offsetx');
    var $sizeHeight = $('#size-height');
    var $sizeWidth = $('#size-width');
    var $btndisplayForm = $('.display-add-form');
    var $deletePopup = $('.delete-popup-wrapper');

    $btndisplayForm.on('click', displayForm);
    _warningWindow.WarningWindow.attach();

    function displayForm() {
        $('.create-thumbnail-size-form').css('display', 'block');
        $('.create-thumbnail-size-form input').val('');
    }

    function fillEditForm(id, name, type, width, height, multiplierX, multiplierY, offsetX, offsetY) {
        $thumbSizeId.val(id);
        $sizeType.val(type);
        $sizeName.val(name);
        $multiplierY.val(multiplierY);
        $multiplierX.val(multiplierX);
        $offsety.val(offsetY);
        $offsetx.val(offsetX);
        $sizeHeight.val(height);
        $sizeWidth.val(width);
    }

    $('.thumbnail-sizes-multiselect').on('click', '.glyphicon-pencil', function () {

        var $target = $(this).parent().find('.checkbox');
        var id = $target.find('input').val();
        var url = '/sitetriks/thumbnailssizes/edit?id=';

        _data.Data.getJson({ url: url + id }).then(function (res) {
            // open the 
            console.log(res);
            var model = res.model;
            console.log(model);
            displayForm();

            fillEditForm(model.id, model.name, model.type, model.width, model.height, model.multiplierX, model.multiplierY, model.offsetX, model.offsetY);
            return model;
        });
    });

    $(document).ready(function () {
        var selectionContainer = $('.selected-thumbnail-options');
        var selectedOptions = void 0;

        if (selectionContainer.length > 0) {
            selectedOptions = $('.selected-thumbnail-options').html().trim().split(' ');
        }

        function setSelectedOptions() {
            if (selectedOptions !== undefined && selectedOptions.length > 0) {
                var $multiselectSizes = $('#multiselect-sizes input');
                var $multiselectOptions = $('#multiselect-thumbnails option');

                for (var i = 0; i < $multiselectSizes.length; i += 1) {
                    for (var j = 0; j < selectedOptions.length; j += 1) {

                        if ($($multiselectSizes[i]).val() == selectedOptions[j]) {
                            $($multiselectOptions[i]).prop('selected', true);
                            $($multiselectSizes[i]).prop('checked', true);
                        }
                    }
                }
            }
        }
        setSelectedOptions();
    });

    $('.thumbnail-sizes-multiselect').on('click', 'input[type="checkbox"]', function () {

        var $target = $(this);
        var id = $target.parent().find('input').val();

        var $selectOption = $('#multiselect-thumbnails option[value=' + id + ']');

        if ($selectOption.length > 0 && $selectOption.is(':selected') == false) {
            $selectOption.prop('selected', true);
        } else if ($selectOption.length > 0 && $selectOption.is(':selected') == true) {
            $selectOption.prop('selected', false);
        }
    });

    $('.thumbnails-label-container').on('click', '.glyphicon-remove', displayDeleteThumbSizePopup);
    $('.delete-thumbnail-size').on('click', '.glyphicon-remove', hideDeleteLibraryPopup);

    $('.delete-thumbnail-size').on('click', '#cancel-delete', hideDeleteLibraryPopup);
    $('#delete-thumbnail-size').on('click', deleteThumbnailSize);

    function deleteThumbnailSize() {
        var $target = $(this);

        var id = $('#thumbnailSizeId').val();
        var url = '/sitetriks/thumbnailssizes/DeleteSingleItem?id=';

        if (id.length > 0) {
            _data.Data.postJson({ url: url + id }).then(function (res) {
                if (res.success) {
                    location.reload();
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'success', message: 'The thumbnail size has been deleted successfully.' });
                } else {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'The thumbnail was not deleted.' });
                }
            });
        }
    }

    function displayDeleteThumbSizePopup(ev) {
        var $target = $(this);
        var id = $target.parent().find('input').val();
        $deletePopup.css('display', 'block');
        $('#thumbnailSizeId').val(id);
    }
    function hideDeleteLibraryPopup(ev) {
        $deletePopup.css('display', 'none');
    }

    $('#create-thumbnail-size').on('click', function (ev) {
        var _this = $('.create-thumbnail-size-form');
        ev.preventDefault();

        var flag = true;

        var formData = new FormData();

        formData.append('Id', $thumbSizeId.val());
        formData.append('Name', $sizeName.val());
        formData.append('Height', $sizeHeight.val());
        formData.append('Width', $sizeWidth.val());
        formData.append('multipliery', $multiplierY.val());

        flag = checkInputCombination();

        if (flag) {
            _loader.Loader.show(true);
            _data.Data.postForm({ url: '/sitetriks/thumbnailssizes/createedit', formData: formData }).then(function (res) {
                if (!res.success) {
                    _loader.Loader.hide();
                }
                return res;
            }).then(function (res) {
                if (res.success) {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'success', message: 'The thumbnail size has been created successfully.' });
                    _loader.Loader.hide();
                    $('.create-thumbnail-size-form').css('display', 'none');
                    location.reload();
                } else {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'The thumbnail size was not created.' });
                    _loader.Loader.hide();
                }
            });
        }

        return false;
    });

    // Check if the inputs are valid numbers

    // check name
    $sizeName.on('input', function (ev) {
        var $name = $(this);
        var pattern = $name.val();

        if (pattern.length < 3) {
            $name.next().text('Thumbnails name must be atleast 3 charecters');
            $name.addClass('input-error');
        } else {
            $name.next().text('');
            $name.removeClass('input-error');
        }
    });

    $sizeType.on('input', hideOffsetOptions);
    $(window).load(function () {

        hideOffsetOptions();
    });

    // check all numbers
    $fullForm.on('input', 'input', function () {
        var $input = $(this);
        var inputValue = $input.val();

        if ($input.attr('type') === 'number') {
            if (!$(this).hasClass('ratio')) {
                checkIfNumber($input, inputValue);
            }

            if ($(this).hasClass('ratio')) {
                checkRatioValue($input, inputValue);
            }
        }
    });

    // check type
    function hideOffsetOptions() {
        var selection = $sizeType.val();
        var $offsetWrapper = $('.offsets');

        if (selection == '0') {
            $offsetWrapper.css('display', 'none');
        } else {
            $offsetWrapper.css('display', 'block');
        }
    }

    function checkRatioValue(input, value) {
        var regex = /^[0-9/,/.]+$/;

        if (!value.match(regex) || +value > 1 || +value < 0) {
            input.next().text('The input value must be a valid decimal number between 0 and 1 separated by ","');
            input.addClass('input-error');
        } else {
            input.next().text('');
            input.removeClass('input-error');
        }
    }

    function checkIfNumber(input, value) {
        var regex = /^[0-9/,/.]+$/;

        if (!value.match(regex)) {
            input.next().text('The input value must be a valid number');
            input.addClass('input-error');
        } else {
            input.next().text('');
            input.removeClass('input-error');
        }
    }

    function checkInputCombination() {

        var sizeName = $sizeName.val();
        var multiplierY = +$multiplierY.val();
        var multiplierX = +$multiplierX.val();
        var offsety = +$offsety.val();
        var offsetx = +$offsetx.val();
        var sizeHeight = +$sizeHeight.val();
        var sizeWidth = +$sizeWidth.val();
        var type = $sizeType.val();

        var isValidResize = multiplierX * sizeWidth + multiplierY * sizeHeight == 0;
        var isValidCropWindow = sizeWidth * sizeHeight > 0;
        var isValidCropSize = multiplierX * offsetx + multiplierY * offsety == 0;

        if (sizeName.length < 3) {
            $sizeName.next().text('The name should be at least 3 symbols.');
            return false;
        }
        if (type == '1') {
            if (!isValidCropWindow) {
                $sizeHeight.addClass('input-error');
                $sizeWidth.addClass('input-error');
                return false;
            } else {
                $multiplierY.next().text('');
                $sizeHeight.removeClass('input-error');
                $sizeWidth.removeClass('input-error');
            }

            if (!isValidCropSize) {
                $multiplierY.next().text('If you have selected to resize with the use of the multipliers, you cannot use an offset. In case you choose to resize by the offsets the multipliers should be equal to 0.');
                $offsety.addClass('input-error');
                $offsetx.addClass('input-error');
                $multiplierY.addClass('input-error');
                $multiplierX.addClass('input-error');
                return false;
            } else {
                $multiplierY.next().text('');
                $offsety.removeClass('input-error');
                $offsetx.removeClass('input-error');
                $multiplierY.removeClass('input-error');
                $multiplierX.removeClass('input-error');
            }
            return true;
        }

        if (type == '0') {
            if (!isValidResize) {
                $multiplierY.next().text('If you have selected to resize with the use of the multipliers, you cannot set width or height. In case you choose to resize by width and height the multipliers should be equal to 0.');
                $multiplierY.addClass('input-error');
                $multiplierX.addClass('input-error');
                $sizeHeight.addClass('input-error');
                $sizeWidth.addClass('input-error');
                return false;
            } else {
                $multiplierY.next().text('');
                $multiplierY.removeClass('input-error');
                $multiplierX.removeClass('input-error');
                $sizeHeight.removeClass('input-error');
                $sizeWidth.removeClass('input-error');
            }
        }
        return true;
    }
}

window.createEditThumbnailSize = createEditThumbnailSize;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL3RodW1ibmFpbFNpemVzLmpzIl0sIm5hbWVzIjpbIkRhdGEiLCJtYWtlUmVxdWVzdCIsImZldGNoIiwiaXNGdW5jdGlvbiIsIm1ha2VGZXRjaFJlcXVlc3QiLCJtYWtlQWpheFJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsImlzRm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyYW1zIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCIkIiwiYWpheCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImdldCIsImluZGV4T2YiLCJqc29uIiwidGV4dCIsImdldEpzb24iLCJkaXNhYmxlQ2FjaGUiLCJwb3N0SnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0Rm9ybSIsImZvcm1EYXRhIiwiZGVsZXRlSnNvbiIsImRlZmF1bHRFcnJvciIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZnVuYyIsInRvU3RyaW5nIiwiY2FsbCIsIkxvYWRlciIsImdpZlNyYyIsInNob3ciLCJjb2xvciIsImltZ1NyYyIsIkJsdXIiLCJhZGQiLCJhcHBlbmQiLCJzcmMiLCJjbGFzcyIsImhpZGUiLCJyZW1vdmUiLCJvbiIsImV2IiwiJHRhcmdldCIsInRhcmdldCIsImF0dHIiLCIkY29udGFpbmVyIiwiaGlkZU9uQ2xpY2siLCJhcHBlbmRUbyIsIlBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTIiwiUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTUyIsIkJMVVJfRUxFTUVOVF9DTEFTUyIsImFkZEJsdXIiLCJvcGFjaXR5IiwiYWRkQ2xhc3MiLCIkYmx1ckVsZW1lbnQiLCIkaXRlbUNvbnRhaW5lciIsIiRwcmV2aWV3Q29udGFpbmVyIiwicmVtb3ZlQmx1ciIsImNzcyIsImlzTmFOIiwiZmluZCIsInJlbW92ZUNsYXNzIiwiTm90aWZpZXIiLCJjcmVhdGVBbGVydCIsImNvbnRhaW5lcklkIiwidGl0bGUiLCJtZXNzYWdlIiwic2Vjb25kcyIsImlzUGVybWFuZW50Iiwic2VsZWN0b3IiLCIkdGl0bGUiLCIkY2xvc2VCdXR0b24iLCJodG1sIiwiJG1lc3NhZ2UiLCIkYWxlcnQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIldhcm5pbmdXaW5kb3ciLCJsb2dnZXIiLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJlIiwiaGFzQ2hhbmdlcyIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJldmVudCIsInNyY0VsZW1lbnQiLCJoYXNUZXh0QXJlYXNXaXRoVGV4dCIsIiR0ZXh0YXJlYXMiLCJoYXNJbnB1dHNXaXRoVGV4dCIsImhhc1RleHQiLCIkaW5wdXRzIiwiZWFjaCIsInZhbCIsImNoZWNrRWxlbWVudEZvckRhdGFBdHRyIiwiYXR0cmlidXRlIiwiY2hlY2tVcmwiLCJsaW5rUGF0aCIsImdldExhc3RDbGlja2VkRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCIkZWxlbWVudCIsInN1Ym1pdEJ1dHRvbkNoZWNrIiwiZWxlbWVudCIsInRhZ05hbWUiLCJoYXNDbGFzcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbnB1dENoYW5nZWQiLCJkZWZhdWx0U3RvcExlYXZlIiwiaXNTYXZpbmciLCJhdHRhY2giLCJvbmJlZm9yZXVubG9hZCIsImRldGFjaCIsImZvcmNlIiwiY3JlYXRlRWRpdFRodW1ibmFpbFNpemUiLCIkdGh1bWJTaXplSWQiLCIkZnVsbEZvcm0iLCIkc2l6ZVR5cGUiLCIkc2l6ZU5hbWUiLCIkbXVsdGlwbGllclkiLCIkbXVsdGlwbGllclgiLCIkb2Zmc2V0eSIsIiRvZmZzZXR4IiwiJHNpemVIZWlnaHQiLCIkc2l6ZVdpZHRoIiwiJGJ0bmRpc3BsYXlGb3JtIiwiJGRlbGV0ZVBvcHVwIiwiZGlzcGxheUZvcm0iLCJmaWxsRWRpdEZvcm0iLCJpZCIsIm5hbWUiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJtdWx0aXBsaWVyWCIsIm11bHRpcGxpZXJZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwYXJlbnQiLCJtb2RlbCIsInJlYWR5Iiwic2VsZWN0aW9uQ29udGFpbmVyIiwic2VsZWN0ZWRPcHRpb25zIiwidHJpbSIsInNwbGl0Iiwic2V0U2VsZWN0ZWRPcHRpb25zIiwidW5kZWZpbmVkIiwiJG11bHRpc2VsZWN0U2l6ZXMiLCIkbXVsdGlzZWxlY3RPcHRpb25zIiwiaiIsInByb3AiLCIkc2VsZWN0T3B0aW9uIiwiaXMiLCJkaXNwbGF5RGVsZXRlVGh1bWJTaXplUG9wdXAiLCJoaWRlRGVsZXRlTGlicmFyeVBvcHVwIiwiZGVsZXRlVGh1bWJuYWlsU2l6ZSIsInJlbG9hZCIsIl90aGlzIiwiZmxhZyIsIkZvcm1EYXRhIiwiY2hlY2tJbnB1dENvbWJpbmF0aW9uIiwiJG5hbWUiLCJwYXR0ZXJuIiwibmV4dCIsImhpZGVPZmZzZXRPcHRpb25zIiwibG9hZCIsIiRpbnB1dCIsImlucHV0VmFsdWUiLCJjaGVja0lmTnVtYmVyIiwiY2hlY2tSYXRpb1ZhbHVlIiwic2VsZWN0aW9uIiwiJG9mZnNldFdyYXBwZXIiLCJpbnB1dCIsInZhbHVlIiwicmVnZXgiLCJtYXRjaCIsInNpemVOYW1lIiwib2Zmc2V0eSIsIm9mZnNldHgiLCJzaXplSGVpZ2h0Iiwic2l6ZVdpZHRoIiwiaXNWYWxpZFJlc2l6ZSIs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b0I7QUFDaEI5RCw2QkFBYTRDLElBQWIsR0FBb0I3SixJQUFwQixDQUF5Qix3TEFBekI7QUFDQWlILDZCQUFhdEUsUUFBYixDQUFzQixhQUF0QjtBQUNBdUUsNkJBQWF2RSxRQUFiLENBQXNCLGFBQXRCO0FBQ0EwRSw0QkFBWTFFLFFBQVosQ0FBcUIsYUFBckI7QUFDQTJFLDJCQUFXM0UsUUFBWCxDQUFvQixhQUFwQjtBQUNBLHVCQUFPLEtBQVA7QUFDSCxhQVBELE1BUUs7QUFDRHNFLDZCQUFhNEMsSUFBYixHQUFvQjdKLElBQXBCLENBQXlCLEVBQXpCO0FBQ0FpSCw2QkFBYTlELFdBQWIsQ0FBeUIsYUFBekI7QUFDQStELDZCQUFhL0QsV0FBYixDQUF5QixhQUF6QjtBQUNBa0UsNEJBQVlsRSxXQUFaLENBQXdCLGFBQXhCO0FBQ0FtRSwyQkFBV25FLFdBQVgsQ0FBdUIsYUFBdkI7QUFDSDtBQUNKO0FBQ0QsZUFBTyxJQUFQO0FBQ0g7QUFFSjs7QUFFRDJCLE9BQU84Qix1QkFBUCxHQUFpQ0EsdUJBQWpDLEMiLCJmaWxlIjoianMvc2l0ZXRyaWtzL3RodW1ibmFpbFNpemVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvdGh1bWJuYWlsU2l6ZXMuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBXYXJuaW5nV2luZG93ID0gKGZ1bmN0aW9uIChsb2dnZXIpIHtcclxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCBjb25zb2xlO1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9ICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGJlZW4gZWRpdGluZyBzb21ldGhpbmcuICdcclxuICAgICAgICArICdJZiB5b3UgbGVhdmUgYmVmb3JlIHNhdmluZywgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcclxuICAgICAgICBpZiAoIWhhc0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBvblVubG9hZDtcclxuICAgIC8vdmFyIGxhc3RDbGlja09uRWxlbWVudDtcclxuICAgIC8vJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICBsYXN0Q2xpY2tPbkVsZW1lbnQ9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vfSk7XHJcblxyXG4gICAgdmFyIGxhc3RDbGlja2VkRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIC8vbGFzdENsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgJHRleHRhcmVhcyA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgLy9BZGQgdGlueW1jZSBnZXQgdGV4dCBmcm9tIHRleHRhcmVhIGxpa2VzIGlucHV0XHJcbiAgICAgICAgaWYgKCR0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNJbnB1dHNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkaW5wdXRzID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgYXR0ciA9ICQobGFzdENsaWNrZWRFbGVtZW50KS5kYXRhKGF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVXJsKGxpbmtQYXRoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIkNoZWNrIHVybFwiKTtcclxuICAgICAgICBsZXQgYXR0ciA9IGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGdldExhc3RDbGlja2VkRWxlbWVudCgpLCBcImRpc2FibGVMaW5rXCIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2tpbmcgaXMgZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNra2luZyBpcyBlbmFibGVkXCIpXHJcblxyXG4gICAgICAgIGlmIChsaW5rUGF0aC5pbmRleE9mKCdjcmVhdGUnKSA9PSAtMSAmJiBsaW5rUGF0aC5pbmRleE9mKCdlZGl0JykgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuaGFzQ2xhc3MoXCJidXR0b24tc3VibWl0XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50LmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuYXR0cignZGF0YS1kaXNhYmxlLXdhcm5pbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghbGFzdENsaWNrZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBsaW5rUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICRlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBcImRpc2FibGUtd2FybmluZ1wiKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tVcmwobGlua1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNDaGFuZ2VzID0gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB8fCBoYXNJbnB1dHNXaXRoVGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0b3BMZWF2ZShldikge1xyXG4gICAgICAgIGxldCBpc1NhdmluZyA9IGxhc3RDbGlja2VkRWxlbWVudCAmJiAhc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkKGxhc3RDbGlja2VkRWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChpc1NhdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlucHV0Q2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LCBcclxuICAgICAgICBmb3JjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgV2FybmluZ1dpbmRvdyB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21tb24vbG9hZGVyLmpzJztcclxuaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICcuLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5pbXBvcnQgeyBXYXJuaW5nV2luZG93IH0gZnJvbSAnLi4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdFRodW1ibmFpbFNpemUoKSB7XHJcbiAgICBsZXQgJHRodW1iU2l6ZUlkID0gJCgnI3RodW1iU2l6ZUlkJyk7XHJcbiAgICBsZXQgJGZ1bGxGb3JtID0gJCgnLmZvcm0taG9yaXpvbnRhbCcpO1xyXG4gICAgbGV0ICRzaXplVHlwZSA9ICQoJyNzaXplLXR5cGUnKTtcclxuICAgIGxldCAkc2l6ZU5hbWUgPSAkKCcjc2l6ZS1uYW1lJyk7XHJcbiAgICBsZXQgJG11bHRpcGxpZXJZID0gJCgnI211bHRpcGxpZXJ5Jyk7XHJcbiAgICBsZXQgJG11bHRpcGxpZXJYID0gJCgnI211bHRpcGxpZXJ4Jyk7XHJcbiAgICBsZXQgJG9mZnNldHkgPSAkKCcjb2Zmc2V0eScpO1xyXG4gICAgbGV0ICRvZmZzZXR4ID0gJCgnI29mZnNldHgnKTtcclxuICAgIGxldCAkc2l6ZUhlaWdodCA9ICQoJyNzaXplLWhlaWdodCcpO1xyXG4gICAgbGV0ICRzaXplV2lkdGggPSAkKCcjc2l6ZS13aWR0aCcpO1xyXG4gICAgbGV0ICRidG5kaXNwbGF5Rm9ybSA9ICQoJy5kaXNwbGF5LWFkZC1mb3JtJyk7XHJcbiAgICBsZXQgJGRlbGV0ZVBvcHVwID0gJCgnLmRlbGV0ZS1wb3B1cC13cmFwcGVyJyk7XHJcblxyXG4gICAgJGJ0bmRpc3BsYXlGb3JtLm9uKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUZvcm0oKSB7XHJcbiAgICAgICAgJCgnLmNyZWF0ZS10aHVtYm5haWwtc2l6ZS1mb3JtJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnLmNyZWF0ZS10aHVtYm5haWwtc2l6ZS1mb3JtIGlucHV0JykudmFsKCcnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbEVkaXRGb3JtKGlkLCBuYW1lLCB0eXBlLCB3aWR0aCwgaGVpZ2h0LCBtdWx0aXBsaWVyWCwgbXVsdGlwbGllclksIG9mZnNldFgsIG9mZnNldFkpIHtcclxuICAgICAgICAkdGh1bWJTaXplSWQudmFsKGlkKTtcclxuICAgICAgICAkc2l6ZVR5cGUudmFsKHR5cGUpO1xyXG4gICAgICAgICRzaXplTmFtZS52YWwobmFtZSk7XHJcbiAgICAgICAgJG11bHRpcGxpZXJZLnZhbChtdWx0aXBsaWVyWSk7XHJcbiAgICAgICAgJG11bHRpcGxpZXJYLnZhbChtdWx0aXBsaWVyWCk7XHJcbiAgICAgICAgJG9mZnNldHkudmFsKG9mZnNldFkpO1xyXG4gICAgICAgICRvZmZzZXR4LnZhbChvZmZzZXRYKTtcclxuICAgICAgICAkc2l6ZUhlaWdodC52YWwoaGVpZ2h0KTtcclxuICAgICAgICAkc2l6ZVdpZHRoLnZhbCh3aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnRodW1ibmFpbC1zaXplcy1tdWx0aXNlbGVjdCcpLm9uKCdjbGljaycsICcuZ2x5cGhpY29uLXBlbmNpbCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5jaGVja2JveCcpO1xyXG4gICAgICAgIGxldCBpZCA9ICR0YXJnZXQuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICBsZXQgdXJsID0gJy9zaXRldHJpa3MvdGh1bWJuYWlsc3NpemVzL2VkaXQ/aWQ9JztcclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiB1cmwgKyBpZCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gb3BlbiB0aGUgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IHJlcy5tb2RlbDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybSgpO1xyXG5cclxuICAgICAgICAgICAgZmlsbEVkaXRGb3JtKG1vZGVsLmlkLCBtb2RlbC5uYW1lLCBtb2RlbC50eXBlLCBtb2RlbC53aWR0aCwgbW9kZWwuaGVpZ2h0LCBtb2RlbC5tdWx0aXBsaWVyWCwgbW9kZWwubXVsdGlwbGllclksIG1vZGVsLm9mZnNldFgsIG1vZGVsLm9mZnNldFkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb25Db250YWluZXIgPSAkKCcuc2VsZWN0ZWQtdGh1bWJuYWlsLW9wdGlvbnMnKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbkNvbnRhaW5lci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucyA9ICQoJy5zZWxlY3RlZC10aHVtYm5haWwtb3B0aW9ucycpLmh0bWwoKS50cmltKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJG11bHRpc2VsZWN0U2l6ZXMgPSAkKCcjbXVsdGlzZWxlY3Qtc2l6ZXMgaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGxldCAkbXVsdGlzZWxlY3RPcHRpb25zID0gJCgnI211bHRpc2VsZWN0LXRodW1ibmFpbHMgb3B0aW9uJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJG11bHRpc2VsZWN0U2l6ZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJG11bHRpc2VsZWN0U2l6ZXNbaV0pLnZhbCgpID09IHNlbGVjdGVkT3B0aW9uc1tqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgkbXVsdGlzZWxlY3RPcHRpb25zW2ldKS5wcm9wKCdzZWxlY3RlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgkbXVsdGlzZWxlY3RTaXplc1tpXSkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbnMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy50aHVtYm5haWwtc2l6ZXMtbXVsdGlzZWxlY3QnKS5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IGlkID0gJHRhcmdldC5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG5cclxuICAgICAgICBsZXQgJHNlbGVjdE9wdGlvbiA9ICQoJyNtdWx0aXNlbGVjdC10aHVtYm5haWxzIG9wdGlvblt2YWx1ZT0nICsgaWQgKyAnXScpO1xyXG5cclxuICAgICAgICBpZiAoJHNlbGVjdE9wdGlvbi5sZW5ndGggPiAwICYmICRzZWxlY3RPcHRpb24uaXMoJzpzZWxlY3RlZCcpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICRzZWxlY3RPcHRpb24ucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzZWxlY3RPcHRpb24ubGVuZ3RoID4gMCAmJiAkc2VsZWN0T3B0aW9uLmlzKCc6c2VsZWN0ZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICRzZWxlY3RPcHRpb24ucHJvcCgnc2VsZWN0ZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJCgnLnRodW1ibmFpbHMtbGFiZWwtY29udGFpbmVyJykub24oJ2NsaWNrJywgJy5nbHlwaGljb24tcmVtb3ZlJywgZGlzcGxheURlbGV0ZVRodW1iU2l6ZVBvcHVwKTtcclxuICAgICQoJy5kZWxldGUtdGh1bWJuYWlsLXNpemUnKS5vbignY2xpY2snLCAnLmdseXBoaWNvbi1yZW1vdmUnLCBoaWRlRGVsZXRlTGlicmFyeVBvcHVwKTtcclxuXHJcbiAgICAkKCcuZGVsZXRlLXRodW1ibmFpbC1zaXplJykub24oJ2NsaWNrJywgJyNjYW5jZWwtZGVsZXRlJywgaGlkZURlbGV0ZUxpYnJhcnlQb3B1cCk7XHJcbiAgICAkKCcjZGVsZXRlLXRodW1ibmFpbC1zaXplJykub24oJ2NsaWNrJywgZGVsZXRlVGh1bWJuYWlsU2l6ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVGh1bWJuYWlsU2l6ZSgpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBpZCA9ICQoJyN0aHVtYm5haWxTaXplSWQnKS52YWwoKTtcclxuICAgICAgICBsZXQgdXJsID0gJy9zaXRldHJpa3MvdGh1bWJuYWlsc3NpemVzL0RlbGV0ZVNpbmdsZUl0ZW0/aWQ9JztcclxuXHJcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogdXJsICsgaWQgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIHR5cGU6ICdzdWNjZXNzJywgbWVzc2FnZTogJ1RoZSB0aHVtYm5haWwgc2l6ZSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIHR5cGU6ICdkYW5nZXInLCBtZXNzYWdlOiAnVGhlIHRodW1ibmFpbCB3YXMgbm90IGRlbGV0ZWQuJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RGVsZXRlVGh1bWJTaXplUG9wdXAoZXYpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IGlkID0gJHRhcmdldC5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgICRkZWxldGVQb3B1cC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAkKCcjdGh1bWJuYWlsU2l6ZUlkJykudmFsKGlkKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVEZWxldGVMaWJyYXJ5UG9wdXAoZXYpIHtcclxuICAgICAgICAkZGVsZXRlUG9wdXAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJCgnI2NyZWF0ZS10aHVtYm5haWwtc2l6ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9ICQoJy5jcmVhdGUtdGh1bWJuYWlsLXNpemUtZm9ybScpO1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnSWQnLCAkdGh1bWJTaXplSWQudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnTmFtZScsICRzaXplTmFtZS52YWwoKSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdIZWlnaHQnLCAkc2l6ZUhlaWdodC52YWwoKSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdXaWR0aCcsICRzaXplV2lkdGgudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbXVsdGlwbGllcnknLCAkbXVsdGlwbGllclkudmFsKCkpO1xyXG5cclxuXHJcbiAgICAgICAgZmxhZyA9IGNoZWNrSW5wdXRDb21iaW5hdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICBMb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICAgICAgRGF0YS5wb3N0Rm9ybSh7IHVybDogJy9zaXRldHJpa3MvdGh1bWJuYWlsc3NpemVzL2NyZWF0ZWVkaXQnLCBmb3JtRGF0YTogZm9ybURhdGEgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNhbGVydHMnLCB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdUaGUgdGh1bWJuYWlsIHNpemUgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkuJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5jcmVhdGUtdGh1bWJuYWlsLXNpemUtZm9ybScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIHR5cGU6ICdkYW5nZXInLCBtZXNzYWdlOiAnVGhlIHRodW1ibmFpbCBzaXplIHdhcyBub3QgY3JlYXRlZC4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgaW5wdXRzIGFyZSB2YWxpZCBudW1iZXJzXHJcblxyXG4gICAgLy8gY2hlY2sgbmFtZVxyXG4gICAgJHNpemVOYW1lLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkbmFtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAkbmFtZS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHBhdHRlcm4ubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAkbmFtZS5uZXh0KCkudGV4dCgnVGh1bWJuYWlscyBuYW1lIG11c3QgYmUgYXRsZWFzdCAzIGNoYXJlY3RlcnMnKTtcclxuICAgICAgICAgICAgJG5hbWUuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG5hbWUubmV4dCgpLnRleHQoJycpO1xyXG4gICAgICAgICAgICAkbmFtZS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJHNpemVUeXBlLm9uKCdpbnB1dCcsIGhpZGVPZmZzZXRPcHRpb25zKTtcclxuICAgICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaGlkZU9mZnNldE9wdGlvbnMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNoZWNrIGFsbCBudW1iZXJzXHJcbiAgICAkZnVsbEZvcm0ub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gJGlucHV0LnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoJGlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdyYXRpbycpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0lmTnVtYmVyKCRpbnB1dCwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdyYXRpbycpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja1JhdGlvVmFsdWUoJGlucHV0LCBpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNoZWNrIHR5cGVcclxuICAgIGZ1bmN0aW9uIGhpZGVPZmZzZXRPcHRpb25zKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSAkc2l6ZVR5cGUudmFsKCk7XHJcbiAgICAgICAgbGV0ICRvZmZzZXRXcmFwcGVyID0gJCgnLm9mZnNldHMnKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbiA9PSAnMCcpIHtcclxuICAgICAgICAgICAgJG9mZnNldFdyYXBwZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkb2Zmc2V0V3JhcHBlci5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tSYXRpb1ZhbHVlKGlucHV0LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZWdleCA9IC9eWzAtOS8sLy5dKyQvO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlLm1hdGNoKHJlZ2V4KSB8fCArdmFsdWUgPiAxIHx8ICt2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgaW5wdXQubmV4dCgpLnRleHQoJ1RoZSBpbnB1dCB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgZGVjaW1hbCBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIHNlcGFyYXRlZCBieSBcIixcIicpO1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dC5uZXh0KCkudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0lmTnVtYmVyKGlucHV0LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZWdleCA9IC9eWzAtOS8sLy5dKyQvO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlLm1hdGNoKHJlZ2V4KSkge1xyXG4gICAgICAgICAgICBpbnB1dC5uZXh0KCkudGV4dCgnVGhlIGlucHV0IHZhbHVlIG11c3QgYmUgYSB2YWxpZCBudW1iZXInKTtcclxuICAgICAgICAgICAgaW5wdXQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQubmV4dCgpLnRleHQoJycpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dENvbWJpbmF0aW9uKCkge1xyXG5cclxuICAgICAgICBsZXQgc2l6ZU5hbWUgPSAkc2l6ZU5hbWUudmFsKCk7XHJcbiAgICAgICAgbGV0IG11bHRpcGxpZXJZID0gKyRtdWx0aXBsaWVyWS52YWwoKTtcclxuICAgICAgICBsZXQgbXVsdGlwbGllclggPSArJG11bHRpcGxpZXJYLnZhbCgpO1xyXG4gICAgICAgIGxldCBvZmZzZXR5ID0gKyRvZmZzZXR5LnZhbCgpO1xyXG4gICAgICAgIGxldCBvZmZzZXR4ID0gKyRvZmZzZXR4LnZhbCgpO1xyXG4gICAgICAgIGxldCBzaXplSGVpZ2h0ID0gKyRzaXplSGVpZ2h0LnZhbCgpO1xyXG4gICAgICAgIGxldCBzaXplV2lkdGggPSArJHNpemVXaWR0aC52YWwoKTtcclxuICAgICAgICBsZXQgdHlwZSA9ICRzaXplVHlwZS52YWwoKTtcclxuXHJcblxyXG4gICAgICAgIHZhciBpc1ZhbGlkUmVzaXplID0gbXVsdGlwbGllclggKiBzaXplV2lkdGggKyBtdWx0aXBsaWVyWSAqIHNpemVIZWlnaHQgPT0gMDtcclxuICAgICAgICB2YXIgaXNWYWxpZENyb3BXaW5kb3cgPSBzaXplV2lkdGggKiBzaXplSGVpZ2h0ID4gMDtcclxuICAgICAgICB2YXIgaXNWYWxpZENyb3BTaXplID0gbXVsdGlwbGllclggKiBvZmZzZXR4ICsgbXVsdGlwbGllclkgKiBvZmZzZXR5ID09IDA7XHJcblxyXG4gICAgICAgIGlmIChzaXplTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICRzaXplTmFtZS5uZXh0KCkudGV4dCgnVGhlIG5hbWUgc2hvdWxkIGJlIGF0IGxlYXN0IDMgc3ltYm9scy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PSAnMScpIHtcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ3JvcFdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgJHNpemVIZWlnaHQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkc2l6ZVdpZHRoLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLm5leHQoKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgICAgICRzaXplSGVpZ2h0LnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJHNpemVXaWR0aC5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ3JvcFNpemUpIHtcclxuICAgICAgICAgICAgICAgICRtdWx0aXBsaWVyWS5uZXh0KCkudGV4dCgnSWYgeW91IGhhdmUgc2VsZWN0ZWQgdG8gcmVzaXplIHdpdGggdGhlIHVzZSBvZiB0aGUgbXVsdGlwbGllcnMsIHlvdSBjYW5ub3QgdXNlIGFuIG9mZnNldC4gSW4gY2FzZSB5b3UgY2hvb3NlIHRvIHJlc2l6ZSBieSB0aGUgb2Zmc2V0cyB0aGUgbXVsdGlwbGllcnMgc2hvdWxkIGJlIGVxdWFsIHRvIDAuJyk7XHJcbiAgICAgICAgICAgICAgICAkb2Zmc2V0eS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRvZmZzZXR4LmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJYLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLm5leHQoKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgICAgICRvZmZzZXR5LnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJG9mZnNldHgucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlwbGllclkucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlwbGllclgucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PSAnMCcpIHtcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkUmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlwbGllclkubmV4dCgpLnRleHQoJ0lmIHlvdSBoYXZlIHNlbGVjdGVkIHRvIHJlc2l6ZSB3aXRoIHRoZSB1c2Ugb2YgdGhlIG11bHRpcGxpZXJzLCB5b3UgY2Fubm90IHNldCB3aWR0aCBvciBoZWlnaHQuIEluIGNhc2UgeW91IGNob29zZSB0byByZXNpemUgYnkgd2lkdGggYW5kIGhlaWdodCB0aGUgbXVsdGlwbGllcnMgc2hvdWxkIGJlIGVxdWFsIHRvIDAuJyk7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlwbGllclkuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlwbGllclguYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkc2l6ZUhlaWdodC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRzaXplV2lkdGguYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlwbGllclkubmV4dCgpLnRleHQoJycpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJYLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJHNpemVIZWlnaHQucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkc2l6ZVdpZHRoLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxud2luZG93LmNyZWF0ZUVkaXRUaHVtYm5haWxTaXplID0gY3JlYXRlRWRpdFRodW1ibmFpbFNpemU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=