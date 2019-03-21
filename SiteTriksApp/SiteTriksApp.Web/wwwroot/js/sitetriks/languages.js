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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/languages.js");
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

/***/ "./scripts/sitetriks/languages.js":
/*!****************************************!*\
  !*** ./scripts/sitetriks/languages.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function createEditLanguage(id) {
    _warningWindow.WarningWindow.attach();
    $('#form-create-edit').on('submit', function (ev) {
        var _this = this;
        ev.preventDefault();

        var $culture = $('#input-culture');
        var $prefix = $('#input-prefix');
        var flag = true;

        if ($culture.val().length < 3) {
            $culture.next().text('Culture must be atleast 3 charecters');
            flag = false;
        }

        if ($prefix.val().length !== 2) {
            $prefix.next().text('Culture must be exactly 2 charecters');
            flag = false;
        }

        if (flag) {
            _loader.Loader.show(true);
            _data.Data.postJson({ url: '/sitetriks/languages/validateculture', data: { id: id, culture: $culture.val() } }).then(function (res) {
                if (!res.success) {
                    $culture.next().text(res.message);
                    _loader.Loader.hide();
                }

                return res;
            }).then(function (res) {
                if (res.success) {
                    return _data.Data.postJson({ url: '/sitetriks/languages/validateprefix', data: { id: id, prefix: $prefix.val() } }).then(function (res) {
                        if (!res.success) {
                            $prefix.next().text(res.message);
                            $prefix.css('border', '1px solid red');
                            _loader.Loader.hide();
                        }

                        return res;
                    });
                }

                return res;
            }).then(function (res) {
                if (res.success) {
                    return _data.Data.postForm({ url: '/sitetriks/languages/createedit', formData: new FormData(_this) });
                }

                return res;
            }).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/languages');
                } else {
                    _loader.Loader.hide();
                }
            });
        }

        return false;
    });

    $('#input-culture').on('change keydown paste input', function (ev) {
        var $culture = $(this);
        var pattern = $culture.val();

        if ($culture.val().length < 3) {
            $culture.next().text('Culture must be atleast 3 charecters');
            $culture.css('border', '1px solid red');
        } else {
            $culture.next().text('');
            $culture.css('border', '1px solid green');
        }

        if (pattern.length >= 3) {
            $('#input-culture').autocomplete({
                source: function source(request, response) {
                    _data.Data.getJson({ url: '/sitetriks/languages/getcultures?pattern=' + pattern }).then(function (data) {
                        response(data.cultures);
                    });
                },
                minLength: 3
            });
        }
    });

    $('#input-prefix').on('change keydown paste input', function (ev) {
        var $prefix = $(this);
        var pattern = $prefix.val();

        if ($prefix.val().length !== 2) {
            $prefix.next().text('Culture must be exactly 2 charecters');
            $prefix.css('border', '1px solid red');
        } else {
            $prefix.next().text('');
            $prefix.css('border', '1px solid green');
        }
    });
}

window.createEditLanguage = createEditLanguage;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL2xhbmd1YWdlcy5qcyJdLCJuYW1lcyI6WyJEYXRhIiwibWFrZVJlcXVlc3QiLCJmZXRjaCIsImlzRnVuY3Rpb24iLCJtYWtlRmV0Y2hSZXF1ZXN0IiwibWFrZUFqYXhSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJpc0Zvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcmFtcyIsImRhdGEiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiJCIsImFqYXgiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsInRleHQiLCJnZXRKc29uIiwiZGlzYWJsZUNhY2hlIiwicG9zdEpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdEZvcm0iLCJmb3JtRGF0YSIsImRlbGV0ZUpzb24iLCJkZWZhdWx0RXJyb3IiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJ0b1N0cmluZyIsImNhbGwiLCJMb2FkZXIiLCJnaWZTcmMiLCJzaG93IiwiY29sb3IiLCJpbWdTcmMiLCJCbHVyIiwiYWRkIiwiYXBwZW5kIiwic3JjIiwiY2xhc3MiLCJoaWRlIiwicmVtb3ZlIiwib24iLCJldiIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJhdHRyIiwiJGNvbnRhaW5lciIsImhpZGVPbkNsaWNrIiwiYXBwZW5kVG8iLCJQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyIsIlBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MiLCJCTFVSX0VMRU1FTlRfQ0xBU1MiLCJhZGRCbHVyIiwib3BhY2l0eSIsImFkZENsYXNzIiwiJGJsdXJFbGVtZW50IiwiJGl0ZW1Db250YWluZXIiLCIkcHJldmlld0NvbnRhaW5lciIsInJlbW92ZUJsdXIiLCJjc3MiLCJpc05hTiIsImZpbmQiLCJyZW1vdmVDbGFzcyIsIldhcm5pbmdXaW5kb3ciLCJsb2dnZXIiLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJlIiwiaGFzQ2hhbmdlcyIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJldmVudCIsInNyY0VsZW1lbnQiLCJoYXNUZXh0QXJlYXNXaXRoVGV4dCIsIiR0ZXh0YXJlYXMiLCJoYXNJbnB1dHNXaXRoVGV4dCIsImhhc1RleHQiLCIkaW5wdXRzIiwiZWFjaCIsInZhbCIsImNoZWNrRWxlbWVudEZvckRhdGFBdHRyIiwiYXR0cmlidXRlIiwiY2hlY2tVcmwiLCJsaW5rUGF0aCIsImdldExhc3RDbGlja2VkRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCIkZWxlbWVudCIsInN1Ym1pdEJ1dHRvbkNoZWNrIiwiZWxlbWVudCIsInRhZ05hbWUiLCJoYXNDbGFzcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbnB1dENoYW5nZWQiLCJkZWZhdWx0U3RvcExlYXZlIiwiaXNTYXZpbmciLCJhdHRhY2giLCJvbmJlZm9yZXVubG9hZCIsImRldGFjaCIsImZvcmNlIiwiY3JlYXRlRWRpdExhbmd1YWdlIiwiaWQiLCJfdGhpcyIsIiRjdWx0dXJlIiwiJHByZWZpeCIsImZsYWciLCJuZXh0IiwiY3VsdHVyZSIsIm1lc3NhZ2UiLCJwcmVmaXgiLCJGb3JtRGF0YSIsInJlcGxhY2UiLCJwYXR0ZXJuIiwiYXV0b2NvbXBsZXRlIiwic291cmNlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY3Vs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QztBQVFIO0FBQ0osS0F0QkQ7O0FBd0JBeEgsTUFBRSxlQUFGLEVBQW1CdUMsRUFBbkIsQ0FBc0IsNEJBQXRCLEVBQW9ELFVBQVVDLEVBQVYsRUFBYztBQUM5RCxZQUFJa0UsVUFBVTFHLEVBQUUsSUFBRixDQUFkO0FBQ0EsWUFBSWtILFVBQVVSLFFBQVF6QixHQUFSLEVBQWQ7O0FBRUEsWUFBSXlCLFFBQVF6QixHQUFSLEdBQWM1RCxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzVCcUYsb0JBQVFFLElBQVIsR0FBZW5HLElBQWYsQ0FBb0Isc0NBQXBCO0FBQ0FpRyxvQkFBUWpELEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCO0FBQ0gsU0FIRCxNQUdPO0FBQ0hpRCxvQkFBUUUsSUFBUixHQUFlbkcsSUFBZixDQUFvQixFQUFwQjtBQUNBaUcsb0JBQVFqRCxHQUFSLENBQVksUUFBWixFQUFzQixpQkFBdEI7QUFDSDtBQUNKLEtBWEQ7QUFZSDs7QUFFRGUsT0FBTzhCLGtCQUFQLEdBQTRCQSxrQkFBNUIsQyIsImZpbGUiOiJqcy9zaXRldHJpa3MvbGFuZ3VhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvbGFuZ3VhZ2VzLmpzXCIpO1xuIiwidmFyIERhdGEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG1ha2VSZXF1ZXN0ID0gdHlwZW9mIGZldGNoICE9PSAndW5kZWZpbmVkJyAmJiBpc0Z1bmN0aW9uKGZldGNoKSA/IG1ha2VGZXRjaFJlcXVlc3QgOiBtYWtlQWpheFJlcXVlc3Q7IC8vIGZhbGxiYWNrIHRvIGFqYXggaWYgb2xkZXIgYnJvd3NlclxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VBamF4UmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBib2R5LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGlzRm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNvbnRlbnRUeXBlID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBwcm9jZXNzIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHJvY2Vzc0RhdGEgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHNldCBjb250ZW50VHlwZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgocGFyYW1zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlRmV0Y2hSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMgfHwge307XHJcbiAgICAgICAgaWYgKGlzRm9ybSkge1xyXG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyc1snQ29udGVudC1UeXBlJ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICYmIHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXMudGV4dCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEpzb24oeyB1cmwsIGRpc2FibGVDYWNoZSB9KSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoZGlzYWJsZUNhY2hlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAnUHJhZ21hJzogJ25vLWNhY2hlJyxcclxuICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEZvcm0oeyB1cmwsIGZvcm1EYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSwgaXNGb3JtOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnREVMRVRFJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RXJyb3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRKc29uLFxyXG4gICAgICAgIHBvc3RKc29uLFxyXG4gICAgICAgIHBvc3RGb3JtLFxyXG4gICAgICAgIGRlbGV0ZUpzb24sXHJcbiAgICAgICAgZGVmYXVsdEVycm9yXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBEYXRhIH07XHJcbiIsIi8qIExvYWRlci5qcyB2ZXJzaW9uIDEuMSAqL1xyXG52YXIgTG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBnaWZTcmMgPSAnL2ltYWdlcy9sb2FkaW5nLmdpZic7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3Nob3dXaXRoUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0JhckRhdGEsIGNvbG9yKSB7XHJcbiAgICAgICAgLy8gICAgaWYgKGNvbG9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgIGNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgbGV0ICRwYXJlbnQgPSBCbHVyLmFkZCh7IGNvbG9yIH0pO1xyXG5cclxuICAgICAgICAvLyAgICBsZXQgYmFyID0gUHJvZ3Jlc3NCYXIuYnVpbGQoeyBkYXRhOiBwcm9ncmVzc0JhckRhdGEsICRwYXJlbnQ6ICRwYXJlbnQsIGNzc0NsYXNzOiAnYmx1ci1jb250ZW50JyB9KVswXTtcclxuICAgICAgICAvLyAgICBsZXQgZGF0YSA9ICQoYmFyKS5kYXRhKHByb2dyZXNzQmFyRGF0YS5uYW1lKVxyXG4gICAgICAgIC8vICAgICAgICAub25TdGFydCgpO1xyXG4gICAgICAgIC8vfSxcclxuICAgICAgICBzaG93OiBmdW5jdGlvbiAoY29sb3IsIGltZ1NyYykge1xyXG4gICAgICAgICAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWltZ1NyYykge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gZ2lmU3JjO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBCbHVyLmFkZCh7IGNvbG9yIH0pXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzxpbWcvPicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGltZ1NyYyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2JsdXItY29udGVudCdcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgQmx1ci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgTG9hZGVyIH07XHJcblxyXG4vLyBHYWxsZXJ5IHJlZ2lzdHJhdGlvblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdpbWcuZGlzcGxheS1pbWFnZSwgaW1nLmdhbGxlcnktaW1hZ2UnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXYudGFyZ2V0KTtcclxuICAgICAgICBsZXQgc3JjID0gJHRhcmdldC5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSBCbHVyLmFkZCh7IGhpZGVPbkNsaWNrOiB0cnVlIH0pO1xyXG4gICAgICAgICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50IHByZXZpZXctaW1hZ2UnLFxyXG4gICAgICAgICAgICBzcmM6IHNyY1xyXG4gICAgICAgIH0pLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG4vLyBIZWxwZXIgY2xhc3MgZm9yIGxvYWRlciBhbmQgZ2FsbGVyeVxyXG52YXIgQmx1ciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyA9ICdwcmV2aWV3LWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctaXRlbS1jb250YWluZXInO1xyXG4gICAgY29uc3QgQkxVUl9FTEVNRU5UX0NMQVNTID0gJ2JsdXInO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJsdXIoeyBoaWRlT25DbGljaywgY29sb3IsIG9wYWNpdHkgfSkge1xyXG4gICAgICAgIGlmIChoaWRlT25DbGljayAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoaWRlT25DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCdzdC1uby1vdmVyZmxvdycpO1xyXG5cclxuICAgICAgICBsZXQgJGJsdXJFbGVtZW50ID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBCTFVSX0VMRU1FTlRfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRpdGVtQ29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCAkcHJldmlld0NvbnRhaW5lciA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogUFJFVklFV19DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICRwcmV2aWV3Q29udGFpbmVyLm9uKCdjbGljaycsIHJlbW92ZUJsdXIpO1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ICYmIGlzTmFOKCtvcGFjaXR5KSAmJiBvcGFjaXR5ID49IDAgJiYgb3BhY2l0eSA8PSAxKSB7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwcmV2aWV3Q29udGFpbmVyLmFwcGVuZCgkaXRlbUNvbnRhaW5lcik7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkYmx1ckVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGl0ZW1Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQmx1cigpIHtcclxuICAgICAgICAkKCdib2R5JykuZmluZCgnLicgKyBCTFVSX0VMRU1FTlRfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6IGFkZEJsdXIsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmVCbHVyXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgQmx1ciB9O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgV2FybmluZ1dpbmRvdyA9IChmdW5jdGlvbiAobG9nZ2VyKSB7XHJcbiAgICBsb2dnZXIgPSBsb2dnZXIgfHwgY29uc29sZTtcclxuICAgIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSAnSXQgbG9va3MgbGlrZSB5b3UgaGF2ZSBiZWVuIGVkaXRpbmcgc29tZXRoaW5nLiAnXHJcbiAgICAgICAgKyAnSWYgeW91IGxlYXZlIGJlZm9yZSBzYXZpbmcsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3QuJztcclxuXHJcbiAgICBmdW5jdGlvbiBvblVubG9hZChlKSB7XHJcbiAgICAgICAgaWYgKCFoYXNDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gb25VbmxvYWQ7XHJcbiAgICAvL3ZhciBsYXN0Q2xpY2tPbkVsZW1lbnQ7XHJcbiAgICAvLyQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAgbGFzdENsaWNrT25FbGVtZW50PSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAvL30pO1xyXG5cclxuICAgIHZhciBsYXN0Q2xpY2tlZEVsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICAvL2xhc3RDbGlja2VkID0gdGFyZ2V0LnRleHRDb250ZW50IHx8IHRhcmdldC5pbm5lclRleHQ7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0ICR0ZXh0YXJlYXMgPSAkKCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIC8vQWRkIHRpbnltY2UgZ2V0IHRleHQgZnJvbSB0ZXh0YXJlYSBsaWtlcyBpbnB1dFxyXG4gICAgICAgIGlmICgkdGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzSW5wdXRzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0IGhhc1RleHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgJGlucHV0cyA9ICQoJ2lucHV0W3R5cGU9dGV4dF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGhhc1RleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgYXR0cmlidXRlKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSAkKGxhc3RDbGlja2VkRWxlbWVudCkuZGF0YShhdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgICBpZiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1VybChsaW5rUGF0aCkge1xyXG4gICAgICAgIGxvZ2dlci5sb2coXCJDaGVjayB1cmxcIik7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSwgXCJkaXNhYmxlTGlua1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNraW5nIGlzIGRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2tpbmcgaXMgZW5hYmxlZFwiKVxyXG5cclxuICAgICAgICBpZiAobGlua1BhdGguaW5kZXhPZignY3JlYXRlJykgPT0gLTEgJiYgbGlua1BhdGguaW5kZXhPZignZWRpdCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldExhc3RDbGlja2VkRWxlbWVudCgpIHtcclxuICAgICAgICBsZXQgbGFzdENsaWNrZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJiBlbGVtZW50LmF0dHIoXCJ0eXBlXCIpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50Lmhhc0NsYXNzKFwiYnV0dG9uLXN1Ym1pdFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5hdHRyKCd0eXBlJykgPT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFlbGVtZW50LmF0dHIoJ2RhdGEtZGlzYWJsZS13YXJuaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAoIWxhc3RDbGlja2VkRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgbGlua1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgICAgIGlmICghc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgXCJkaXNhYmxlLXdhcm5pbmdcIikgIT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoZWNrVXJsKGxpbmtQYXRoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzQ2hhbmdlcyA9IGhhc1RleHRBcmVhc1dpdGhUZXh0KCkgfHwgaGFzSW5wdXRzV2l0aFRleHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHZhciBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRTdG9wTGVhdmUoZXYpIHtcclxuICAgICAgICBsZXQgaXNTYXZpbmcgPSBsYXN0Q2xpY2tlZEVsZW1lbnQgJiYgIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJChsYXN0Q2xpY2tlZEVsZW1lbnQpKTtcclxuICAgICAgICBpZiAoaXNTYXZpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dENoYW5nZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgZXYucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZm9yY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IFdhcm5pbmdXaW5kb3cgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vY29tbW9uL2xvYWRlci5qcyc7XHJcbmltcG9ydCB7IFdhcm5pbmdXaW5kb3cgfSBmcm9tICcuLi9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVkaXRMYW5ndWFnZShpZCkge1xyXG4gICAgV2FybmluZ1dpbmRvdy5hdHRhY2goKTtcclxuICAgICQoJyNmb3JtLWNyZWF0ZS1lZGl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0ICRjdWx0dXJlID0gJCgnI2lucHV0LWN1bHR1cmUnKTtcclxuICAgICAgICBsZXQgJHByZWZpeCA9ICQoJyNpbnB1dC1wcmVmaXgnKTtcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICgkY3VsdHVyZS52YWwoKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICRjdWx0dXJlLm5leHQoKS50ZXh0KCdDdWx0dXJlIG11c3QgYmUgYXRsZWFzdCAzIGNoYXJlY3RlcnMnKTtcclxuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRwcmVmaXgudmFsKCkubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgICAgICRwcmVmaXgubmV4dCgpLnRleHQoJ0N1bHR1cmUgbXVzdCBiZSBleGFjdGx5IDIgY2hhcmVjdGVycycpO1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICBMb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogJy9zaXRldHJpa3MvbGFuZ3VhZ2VzL3ZhbGlkYXRlY3VsdHVyZScsIGRhdGE6IHsgaWQ6IGlkLCBjdWx0dXJlOiAkY3VsdHVyZS52YWwoKSB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICRjdWx0dXJlLm5leHQoKS50ZXh0KHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGEucG9zdEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2xhbmd1YWdlcy92YWxpZGF0ZXByZWZpeCcsIGRhdGE6IHsgaWQ6IGlkLCBwcmVmaXg6ICRwcmVmaXgudmFsKCkgfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByZWZpeC5uZXh0KCkudGV4dChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJlZml4LmNzcygnYm9yZGVyJywgJzFweCBzb2xpZCByZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YS5wb3N0Rm9ybSh7IHVybDogJy9zaXRldHJpa3MvbGFuZ3VhZ2VzL2NyZWF0ZWVkaXQnLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKF90aGlzKSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvc2l0ZXRyaWtzL2xhbmd1YWdlcycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjaW5wdXQtY3VsdHVyZScpLm9uKCdjaGFuZ2Uga2V5ZG93biBwYXN0ZSBpbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkY3VsdHVyZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAkY3VsdHVyZS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCRjdWx0dXJlLnZhbCgpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgJGN1bHR1cmUubmV4dCgpLnRleHQoJ0N1bHR1cmUgbXVzdCBiZSBhdGxlYXN0IDMgY2hhcmVjdGVycycpO1xyXG4gICAgICAgICAgICAkY3VsdHVyZS5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgcmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGN1bHR1cmUubmV4dCgpLnRleHQoJycpO1xyXG4gICAgICAgICAgICAkY3VsdHVyZS5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgZ3JlZW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgICQoJyNpbnB1dC1jdWx0dXJlJykuYXV0b2NvbXBsZXRlKHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogZnVuY3Rpb24gKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9sYW5ndWFnZXMvZ2V0Y3VsdHVyZXM/cGF0dGVybj0nICsgcGF0dGVybiB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlKGRhdGEuY3VsdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogM1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjaW5wdXQtcHJlZml4Jykub24oJ2NoYW5nZSBrZXlkb3duIHBhc3RlIGlucHV0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgbGV0ICRwcmVmaXggPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gJHByZWZpeC52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCRwcmVmaXgudmFsKCkubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgICAgICRwcmVmaXgubmV4dCgpLnRleHQoJ0N1bHR1cmUgbXVzdCBiZSBleGFjdGx5IDIgY2hhcmVjdGVycycpO1xyXG4gICAgICAgICAgICAkcHJlZml4LmNzcygnYm9yZGVyJywgJzFweCBzb2xpZCByZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkcHJlZml4Lm5leHQoKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgJHByZWZpeC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgZ3JlZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmNyZWF0ZUVkaXRMYW5ndWFnZSA9IGNyZWF0ZUVkaXRMYW5ndWFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==