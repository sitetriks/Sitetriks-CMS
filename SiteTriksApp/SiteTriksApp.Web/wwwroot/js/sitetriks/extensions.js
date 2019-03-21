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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/extensions.js");
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

/***/ "./scripts/sitetriks/extensions.js":
/*!*****************************************!*\
  !*** ./scripts/sitetriks/extensions.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! common/loader.js */ "./scripts/common/loader.js");

var _notifier = __webpack_require__(/*! common/notifier.js */ "./scripts/common/notifier.js");

var _restartApp = __webpack_require__(/*! restart-app.js */ "./scripts/restart-app.js");

function initExtensions() {
    var $dropArea = $('#drop-area');

    $('body').on('change', '.activate-module', function (ev) {
        var isActive = this.checked;
        var name = $(this).attr('data-name');

        _loader.Loader.show('#fff');
        _data.Data.postJson({ url: '/sitetriks/extensions/UpdateModule', data: { isActive: isActive, name: name } }).then(function (res) {
            if (res.success) {
                if (res.doNotRefresh) {
                    _loader.Loader.hide();
                    return;
                }

                (0, _restartApp.handleApplicationRestart)({ url: '/sitetriks/extensions' });
            } else {
                _loader.Loader.hide();
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                $(ev.target).bootstrapToggle('off');
            }
        }, _data.Data.defaultError);
    });

    $('.drop-info-btn').on('click', function (ev) {
        $('#input-files').trigger('click');
    });

    $('#input-files').on('change', function (ev) {
        upload(this.files);
    });

    function upload(files) {
        var formData = new FormData();

        for (var i = 0; i < files.length; i++) {
            formData.append('files', files[i], files[i].name);
        }

        _loader.Loader.show('#fff');
        _data.Data.postForm({ url: '/sitetriks/extensions/index', formData: formData }).then(function (res) {
            var $extensions = $('.extensions-installed');

            if (res.success) {
                for (var _i = 0; _i < res.installed.length; _i += 1) {
                    $extensions.append('<label class="module-name clearfix">' + res.installed[_i].displayName + ' <input class="activate-module" type="checkbox" data-size="mini" data-onstyle="success" data-toggle="toggle"  data-name="' + res.installed[_i].name + '" /></label>');
                }

                $('.activate-module').bootstrapToggle();
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
            }

            _loader.Loader.hide();
        }, _data.Data.defaultError);
    }

    $dropArea.on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $dropArea.on('dragenter', function (e) {
        $(this).addClass('drop-highlight');
        e.preventDefault();
        e.stopPropagation();
    });

    $dropArea.on('dragleave', function (e) {
        $(this).removeClass('drop-highlight');
        e.preventDefault();
        e.stopPropagation();
    });

    $dropArea.on('drop', function (e) {
        if (e.originalEvent.dataTransfer) {
            if (e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();

                upload(e.originalEvent.dataTransfer.files);
            }
        }
    });

    $('.upload-tab').on('click', function (ev) {
        $('.upload-tab.active').removeClass('active');
        $(this).addClass('active');
    });
}

window.initExtensions = initExtensions;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9yZXN0YXJ0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy9leHRlbnNpb25zLmpzIl0sIm5hbWVzIjpbIkRhdGEiLCJtYWtlUmVxdWVzdCIsImZldGNoIiwiaXNGdW5jdGlvbiIsIm1ha2VGZXRjaFJlcXVlc3QiLCJtYWtlQWpheFJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsImlzRm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyYW1zIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCIkIiwiYWpheCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImdldCIsImluZGV4T2YiLCJqc29uIiwidGV4dCIsImdldEpzb24iLCJkaXNhYmxlQ2FjaGUiLCJwb3N0SnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0Rm9ybSIsImZvcm1EYXRhIiwiZGVsZXRlSnNvbiIsImRlZmF1bHRFcnJvciIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZnVuYyIsInRvU3RyaW5nIiwiY2FsbCIsIkxvYWRlciIsImdpZlNyYyIsInNob3ciLCJjb2xvciIsImltZ1NyYyIsIkJsdXIiLCJhZGQiLCJhcHBlbmQiLCJzcmMiLCJjbGFzcyIsImhpZGUiLCJyZW1vdmUiLCJvbiIsImV2IiwiJHRhcmdldCIsInRhcmdldCIsImF0dHIiLCIkY29udGFpbmVyIiwiaGlkZU9uQ2xpY2siLCJhcHBlbmRUbyIsIlBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTIiwiUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTUyIsIkJMVVJfRUxFTUVOVF9DTEFTUyIsImFkZEJsdXIiLCJvcGFjaXR5IiwiYWRkQ2xhc3MiLCIkYmx1ckVsZW1lbnQiLCIkaXRlbUNvbnRhaW5lciIsIiRwcmV2aWV3Q29udGFpbmVyIiwicmVtb3ZlQmx1ciIsImNzcyIsImlzTmFOIiwiZmluZCIsInJlbW92ZUNsYXNzIiwiTm90aWZpZXIiLCJjcmVhdGVBbGVydCIsImNvbnRhaW5lcklkIiwidGl0bGUiLCJtZXNzYWdlIiwic2Vjb25kcyIsImlzUGVybWFuZW50Iiwic2VsZWN0b3IiLCIkdGl0bGUiLCIkY2xvc2VCdXR0b24iLCJodG1sIiwiJG1lc3NhZ2UiLCIkYWxlcnQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsImhhbmRsZUFwcGxpY2F0aW9uUmVzdGFydCIsInRpbWVvdXQiLCJjdXRVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbW92ZUxhc3RBdHRyaWJ1dGVGcm9tVXJsIiwidmFsaWRhdGVTaXRlUmVzcG9uZHMiLCJsYXN0SW5kZXhPZlNsYXNoIiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJ2YWxpZGF0ZVVybCIsImhhbmRsZUFwcFJlc3RhcnQiLCJpbml0RXh0ZW5zaW9ucyIsIiRkcm9wQXJlYSIsImlzQWN0aXZlIiwiY2hlY2tlZCIsIm5hbWUiLCJkb05vdFJlZnJlc2giLCJib290c3RyYXBUb2dnbGUiLCJ0cmlnZ2VyIiwidXBsb2FkIiwiZmlsZXMiLCJGb3JtRGF0YSIsIiRleHRlbnNpb25zIiwiaW5zdGFsbGVkIiwiZGlzcGxheU5hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcmlnaW5hbEV2ZW50IiwiZGF0YVRyYW5zZmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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ZXh0ZW5zaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NjcmlwdHMvc2l0ZXRyaWtzL2V4dGVuc2lvbnMuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQoeyB1cmwsIHRpbWVvdXQsIGN1dFVybCB9KSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHVybCA9IHJlbW92ZUxhc3RBdHRyaWJ1dGVGcm9tVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHRpbWVvdXQpKSB7XHJcbiAgICAgICAgdGltZW91dCA9IDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1dFVybCAmJiB1cmwpIHtcclxuICAgICAgICB1cmwgPSByZW1vdmVMYXN0QXR0cmlidXRlRnJvbVVybCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlU2l0ZVJlc3BvbmRzKHVybCwgdGltZW91dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUxhc3RBdHRyaWJ1dGVGcm9tVXJsKHVybCkge1xyXG4gICAgdmFyIGxhc3RJbmRleE9mU2xhc2ggPSB1cmwubGFzdEluZGV4T2YoJy8nKTtcclxuICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMCwgbGFzdEluZGV4T2ZTbGFzaCk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVNpdGVSZXNwb25kcyh2YWxpZGF0ZVVybCwgdGltZW91dCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiB2YWxpZGF0ZVVybCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHZhbGlkYXRlVXJsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVNpdGVSZXNwb25kcyh2YWxpZGF0ZVVybCwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIHRpbWVvdXQpO1xyXG59XHJcblxyXG53aW5kb3cuaGFuZGxlQXBwUmVzdGFydCA9IGhhbmRsZUFwcGxpY2F0aW9uUmVzdGFydDtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJ2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnY29tbW9uL2xvYWRlci5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnY29tbW9uL25vdGlmaWVyLmpzJztcclxuaW1wb3J0IHsgaGFuZGxlQXBwbGljYXRpb25SZXN0YXJ0IH0gZnJvbSAncmVzdGFydC1hcHAuanMnO1xyXG5cclxuZnVuY3Rpb24gaW5pdEV4dGVuc2lvbnMoKSB7XHJcbiAgICBsZXQgJGRyb3BBcmVhID0gJCgnI2Ryb3AtYXJlYScpO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5hY3RpdmF0ZS1tb2R1bGUnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLmNoZWNrZWQ7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbmFtZScpO1xyXG5cclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2V4dGVuc2lvbnMvVXBkYXRlTW9kdWxlJywgZGF0YTogeyBpc0FjdGl2ZSwgbmFtZSB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZG9Ob3RSZWZyZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQXBwbGljYXRpb25SZXN0YXJ0KHsgdXJsOiAnL3NpdGV0cmlrcy9leHRlbnNpb25zJyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgJChldi50YXJnZXQpLmJvb3RzdHJhcFRvZ2dsZSgnb2ZmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZHJvcC1pbmZvLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICQoJyNpbnB1dC1maWxlcycpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjaW5wdXQtZmlsZXMnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgdXBsb2FkKHRoaXMuZmlsZXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBsb2FkKGZpbGVzKSB7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgRGF0YS5wb3N0Rm9ybSh7IHVybDogJy9zaXRldHJpa3MvZXh0ZW5zaW9ucy9pbmRleCcsIGZvcm1EYXRhOiBmb3JtRGF0YSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgbGV0ICRleHRlbnNpb25zID0gJCgnLmV4dGVuc2lvbnMtaW5zdGFsbGVkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmluc3RhbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRleHRlbnNpb25zLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwibW9kdWxlLW5hbWUgY2xlYXJmaXhcIj4nICsgcmVzLmluc3RhbGxlZFtpXS5kaXNwbGF5TmFtZSArICcgPGlucHV0IGNsYXNzPVwiYWN0aXZhdGUtbW9kdWxlXCIgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1zaXplPVwibWluaVwiIGRhdGEtb25zdHlsZT1cInN1Y2Nlc3NcIiBkYXRhLXRvZ2dsZT1cInRvZ2dsZVwiICBkYXRhLW5hbWU9XCInICsgcmVzLmluc3RhbGxlZFtpXS5uYW1lICsgJ1wiIC8+PC9sYWJlbD4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuYWN0aXZhdGUtbW9kdWxlJykuYm9vdHN0cmFwVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAkZHJvcEFyZWEub24oXHJcbiAgICAgICAgJ2RyYWdvdmVyJyxcclxuICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAkZHJvcEFyZWEub24oXHJcbiAgICAgICAgJ2RyYWdlbnRlcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZHJvcC1oaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgJGRyb3BBcmVhLm9uKFxyXG4gICAgICAgICdkcmFnbGVhdmUnLFxyXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Ryb3AtaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgICRkcm9wQXJlYS5vbihcclxuICAgICAgICAnZHJvcCcsXHJcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGxvYWQoZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgICQoJy51cGxvYWQtdGFiJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgJCgnLnVwbG9hZC10YWIuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5pbml0RXh0ZW5zaW9ucyA9IGluaXRFeHRlbnNpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9