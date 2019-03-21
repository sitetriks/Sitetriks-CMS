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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/setup.js");
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

/***/ "./scripts/restart-app.js":
/*!********************************!*\
  !*** ./scripts/restart-app.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleApplicationRestart = handleApplicationRestart;
function handleApplicationRestart(_ref) {
    var url = _ref.url,
        timeout = _ref.timeout,
        cutUrl = _ref.cutUrl;

    if (!url) {
        url = window.location.toString();
        url = removeLastAttributeFromUrl(url);
    }

    if (isNaN(timeout)) {
        timeout = 1000;
    }

    if (cutUrl && url) {
        url = removeLastAttributeFromUrl();
    }

    validateSiteResponds(url, timeout);
}

function removeLastAttributeFromUrl(url) {
    var lastIndexOfSlash = url.lastIndexOf('/');
    url = url.substring(0, lastIndexOfSlash);
    return url;
}

function validateSiteResponds(validateUrl, timeout) {
    setTimeout(function () {
        $.ajax({
            method: 'GET',
            url: validateUrl,
            contentType: 'application/json',
            success: function success(res) {
                window.location = validateUrl;
            },
            error: function error(res) {
                validateSiteResponds(validateUrl, timeout);
            }
        });
    }, timeout);
}

window.handleAppRestart = handleApplicationRestart;

/***/ }),

/***/ "./scripts/sitetriks/setup.js":
/*!************************************!*\
  !*** ./scripts/sitetriks/setup.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _restartApp = __webpack_require__(/*! ../restart-app.js */ "./scripts/restart-app.js");

function setupInitialization(url) {
    $('#create-site-btn').on('click', function (e) {
        if ($('#default-site-checkbox').is(':checked')) {
            e.preventDefault();
            _loader.Loader.show('#fff');
            var formData = new FormData();

            _data.Data.postForm({ url: url, formData: formData }).then(function (res) {
                if (res.success) {
                    (0, _restartApp.handleApplicationRestart)({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
                } else {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                    _loader.Loader.hide();
                }
            }, function (res) {
                console.log(res);
            });
        } else {
            $('#create-site-btn').attr('href', '/setup/registeruser');
        }
    });
}

function uploadLicense(urlWithUpload, urlWithCurrent) {
    $('input[type=file]').change(function (e) {
        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $('.selected-file').addClass('alert-success');
        $('.selected-file').html('Selected file:' + filename);
    });

    $('button[type=submit]').on('click', function (e) {
        _loader.Loader.show('#fff');
        e.preventDefault();
        var formData = new FormData();
        var licenseFile = $('#license-file')[0].files[0];
        formData.append('file', licenseFile);

        var url = urlWithUpload;

        _data.Data.postForm({ url: url, formData: formData }).then(function (res) {
            if (res.success) {
                (0, _restartApp.handleApplicationRestart)({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                _loader.Loader.hide();
            }
        }, function (res) {
            console.log(res);
        });
    });

    $('#continue').on('click', function (e) {
        _loader.Loader.show('#fff');
        e.preventDefault();
        var url = urlWithCurrent;

        _data.Data.getJson({ url: url }).then(function (res) {
            if (res.success) {
                (0, _restartApp.handleApplicationRestart)({ url: '/Account/Login?ReturnUrl=%2Fsitetriks' });
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                _loader.Loader.hide();
            }
        });
    });
}

window.setupInitialization = setupInitialization;
window.uploadLicense = uploadLicense;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9yZXN0YXJ0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy9zZXR1cC5qcyJdLCJuYW1lcyI6WyJEYXRhIiwibWFrZVJlcXVlc3QiLCJmZXRjaCIsImlzRnVuY3Rpb24iLCJtYWtlRmV0Y2hSZXF1ZXN0IiwibWFrZUFqYXhSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJpc0Zvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcmFtcyIsImRhdGEiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiJCIsImFqYXgiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsInRleHQiLCJnZXRKc29uIiwiZGlzYWJsZUNhY2hlIiwicG9zdEpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdEZvcm0iLCJmb3JtRGF0YSIsImRlbGV0ZUpzb24iLCJkZWZhdWx0RXJyb3IiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJ0b1N0cmluZyIsImNhbGwiLCJMb2FkZXIiLCJnaWZTcmMiLCJzaG93IiwiY29sb3IiLCJpbWdTcmMiLCJCbHVyIiwiYWRkIiwiYXBwZW5kIiwic3JjIiwiY2xhc3MiLCJoaWRlIiwicmVtb3ZlIiwib24iLCJldiIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJhdHRyIiwiJGNvbnRhaW5lciIsImhpZGVPbkNsaWNrIiwiYXBwZW5kVG8iLCJQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyIsIlBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MiLCJCTFVSX0VMRU1FTlRfQ0xBU1MiLCJhZGRCbHVyIiwib3BhY2l0eSIsImFkZENsYXNzIiwiJGJsdXJFbGVtZW50IiwiJGl0ZW1Db250YWluZXIiLCIkcHJldmlld0NvbnRhaW5lciIsInJlbW92ZUJsdXIiLCJjc3MiLCJpc05hTiIsImZpbmQiLCJyZW1vdmVDbGFzcyIsIk5vdGlmaWVyIiwiY3JlYXRlQWxlcnQiLCJjb250YWluZXJJZCIsInRpdGxlIiwibWVzc2FnZSIsInNlY29uZHMiLCJpc1Blcm1hbmVudCIsInNlbGVjdG9yIiwiJHRpdGxlIiwiJGNsb3NlQnV0dG9uIiwiaHRtbCIsIiRtZXNzYWdlIiwiJGFsZXJ0Iiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQiLCJ0aW1lb3V0IiwiY3V0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJyZW1vdmVMYXN0QXR0cmlidXRlRnJvbVVybCIsInZhbGlkYXRlU2l0ZVJlc3BvbmRzIiwibGFzdEluZGV4T2ZTbGFzaCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwidmFsaWRhdGVVcmwiLCJoYW5kbGVBcHBSZXN0YXJ0Iiwic2V0dXBJbml0aWFsaXphdGlvbiIsImUiLCJpcyIsInByZXZlbnREZWZhdWx0IiwiRm9ybURhdGEiLCJ1cGxvYWRMaWNlbnNlIiwidXJsV2l0aFVwbG9hZCIsInVybFdpdGhDdXJyZW50IiwiY2hhbmdlIiwiZmlsZW5hbWUiLCJ2YWwiLCJyZXBsYWNlIiwibGljZW5zZUZpbGUiLCJmaWxlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RB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LEVBQWIsRUFBMkJpQixJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDckMsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYiwwREFBeUIsRUFBRVYsS0FBSyx1Q0FBUCxFQUF6QjtBQUNILGFBRkQsTUFFTztBQUNIMkUsbUNBQVNDLFdBQVQsQ0FBcUIsRUFBRUMsYUFBYSxTQUFmLEVBQTBCRSxTQUFTN0QsSUFBSTZELE9BQXZDLEVBQWdENUQsUUFBUSxRQUF4RCxFQUFyQjtBQUNBc0IsK0JBQU9VLElBQVA7QUFDSDtBQUNKLFNBUEQ7QUFRSCxLQWJEO0FBY0g7O0FBRUQwQyxPQUFPUyxtQkFBUCxHQUE2QkEsbUJBQTdCO0FBQ0FULE9BQU9jLGFBQVAsR0FBdUJBLGFBQXZCLEMiLCJmaWxlIjoianMvc2l0ZXRyaWtzL3NldHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3Mvc2V0dXAuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQoeyB1cmwsIHRpbWVvdXQsIGN1dFVybCB9KSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHVybCA9IHJlbW92ZUxhc3RBdHRyaWJ1dGVGcm9tVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHRpbWVvdXQpKSB7XHJcbiAgICAgICAgdGltZW91dCA9IDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1dFVybCAmJiB1cmwpIHtcclxuICAgICAgICB1cmwgPSByZW1vdmVMYXN0QXR0cmlidXRlRnJvbVVybCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlU2l0ZVJlc3BvbmRzKHVybCwgdGltZW91dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUxhc3RBdHRyaWJ1dGVGcm9tVXJsKHVybCkge1xyXG4gICAgdmFyIGxhc3RJbmRleE9mU2xhc2ggPSB1cmwubGFzdEluZGV4T2YoJy8nKTtcclxuICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMCwgbGFzdEluZGV4T2ZTbGFzaCk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVNpdGVSZXNwb25kcyh2YWxpZGF0ZVVybCwgdGltZW91dCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiB2YWxpZGF0ZVVybCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHZhbGlkYXRlVXJsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVNpdGVSZXNwb25kcyh2YWxpZGF0ZVVybCwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIHRpbWVvdXQpO1xyXG59XHJcblxyXG53aW5kb3cuaGFuZGxlQXBwUmVzdGFydCA9IGhhbmRsZUFwcGxpY2F0aW9uUmVzdGFydDtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vY29tbW9uL2xvYWRlci5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnLi4vY29tbW9uL25vdGlmaWVyLmpzJztcclxuaW1wb3J0IHsgaGFuZGxlQXBwbGljYXRpb25SZXN0YXJ0IH0gZnJvbSAnLi4vcmVzdGFydC1hcHAuanMnO1xyXG5cclxuZnVuY3Rpb24gc2V0dXBJbml0aWFsaXphdGlvbih1cmwpIHtcclxuICAgICQoJyNjcmVhdGUtc2l0ZS1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgkKCcjZGVmYXVsdC1zaXRlLWNoZWNrYm94JykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIERhdGEucG9zdEZvcm0oeyB1cmw6IHVybCwgZm9ybURhdGE6IGZvcm1EYXRhIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXBwbGljYXRpb25SZXN0YXJ0KHsgdXJsOiAnL0FjY291bnQvTG9naW4/UmV0dXJuVXJsPSUyRnNpdGV0cmlrcycgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIChyZXMpID0+IHsgY29uc29sZS5sb2cocmVzKTsgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZS1zaXRlLWJ0bicpLmF0dHIoJ2hyZWYnLCAnL3NldHVwL3JlZ2lzdGVydXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRMaWNlbnNlKHVybFdpdGhVcGxvYWQsIHVybFdpdGhDdXJyZW50KSB7XHJcbiAgICAkKCdpbnB1dFt0eXBlPWZpbGVdJykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9DOlxcXFxmYWtlcGF0aFxcXFwvaSwgJycpO1xyXG4gICAgICAgICQoJy5zZWxlY3RlZC1maWxlJykuYWRkQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MnKTtcclxuICAgICAgICAkKCcuc2VsZWN0ZWQtZmlsZScpLmh0bWwoJ1NlbGVjdGVkIGZpbGU6JyArIGZpbGVuYW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGxldCBsaWNlbnNlRmlsZSA9ICQoJyNsaWNlbnNlLWZpbGUnKVswXS5maWxlc1swXTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBsaWNlbnNlRmlsZSk7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSB1cmxXaXRoVXBsb2FkO1xyXG5cclxuICAgICAgICBEYXRhLnBvc3RGb3JtKHsgdXJsOiB1cmwsIGZvcm1EYXRhOiBmb3JtRGF0YSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQoeyB1cmw6ICcvQWNjb3VudC9Mb2dpbj9SZXR1cm5Vcmw9JTJGc2l0ZXRyaWtzJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgbWVzc2FnZTogcmVzLm1lc3NhZ2UsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKHJlcykgPT4geyBjb25zb2xlLmxvZyhyZXMpOyB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNjb250aW51ZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgTG9hZGVyLnNob3coJyNmZmYnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHVybCA9IHVybFdpdGhDdXJyZW50O1xyXG5cclxuICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6IHVybCB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQoeyB1cmw6ICcvQWNjb3VudC9Mb2dpbj9SZXR1cm5Vcmw9JTJGc2l0ZXRyaWtzJyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgbWVzc2FnZTogcmVzLm1lc3NhZ2UsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LnNldHVwSW5pdGlhbGl6YXRpb24gPSBzZXR1cEluaXRpYWxpemF0aW9uO1xyXG53aW5kb3cudXBsb2FkTGljZW5zZSA9IHVwbG9hZExpY2Vuc2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=