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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/permissions.js");
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

/***/ "./scripts/sitetriks/permissions.js":
/*!******************************************!*\
  !*** ./scripts/sitetriks/permissions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

function editPermission(id) {
    _warningWindow.WarningWindow.attach();
    $('.move-to-right').on('click', function () {
        $('.all-permissions-select option:selected').each(function (_, element) {
            $(element).remove();
            $('.permissions-to-role-select').append($('<option>', {
                value: element.value,
                text: element.value
            }));
        });
    });

    $('.move-to-left').on('click', function () {
        $('.permissions-to-role-select option:selected').each(function (_, element) {
            $(element).remove();
            $('.all-permissions-select').append($('<option>', {
                value: element.value,
                text: element.value
            }));
        });
    });

    function getAllRoles() {
        var roles = [];
        $('.permissions-to-role-select option').each(function (_, element) {
            roles.push(element.value);
        });

        return roles;
    }

    $('#permission-form').on('submit', function (ev) {
        ev.preventDefault();

        var model = {
            id: id,
            roles: getAllRoles()
        };

        _data.Data.postJson({ url: this.action, data: model }).then(function (res) {
            _notifier.Notifier.createAlert({ containerId: '#alerts', title: 'Success!', message: 'Permission was edited successfully', status: 'success' });
            if (res && res.success) {
                window.location.replace('/sitetriks/permission');
                return;
            }

            Notification.createAlert({ containerId: '#alerts', message: res.message || 'Something went wrong', status: 'danger' });
        }, _data.Data.defaultError);

        return false;
    });
}

window.editPermission = editPermission;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9ub3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zaXRldHJpa3MvcGVybWlzc2lvbnMuanMiXSwibmFtZXMiOlsiRGF0YSIsIm1ha2VSZXF1ZXN0IiwiZmV0Y2giLCJpc0Z1bmN0aW9uIiwibWFrZUZldGNoUmVxdWVzdCIsIm1ha2VBamF4UmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiaXNGb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJhbXMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIiQiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJ0ZXh0IiwiZ2V0SnNvbiIsImRpc2FibGVDYWNoZSIsInBvc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RGb3JtIiwiZm9ybURhdGEiLCJkZWxldGVKc29uIiwiZGVmYXVsdEVycm9yIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwidG9TdHJpbmciLCJjYWxsIiwiTm90aWZpZXIiLCJjcmVhdGVBbGVydCIsImNvbnRhaW5lcklkIiwidGl0bGUiLCJtZXNzYWdlIiwic2Vjb25kcyIsImlzUGVybWFuZW50Iiwic2VsZWN0b3IiLCIkdGl0bGUiLCIkY2xvc2VCdXR0b24iLCJjbGFzcyIsImh0bWwiLCIkbWVzc2FnZSIsIiRhbGVydCIsImFwcGVuZCIsImFwcGVuZFRvIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJyZW1vdmUiLCJXYXJuaW5nV2luZG93IiwibG9nZ2VyIiwiY29uZmlybWF0aW9uTWVzc2FnZSIsIm9uVW5sb2FkIiwiZSIsImhhc0NoYW5nZXMiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwibGFzdENsaWNrZWRFbGVtZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiaGFzVGV4dEFyZWFzV2l0aFRleHQiLCIkdGV4dGFyZWFzIiwiaGFzSW5wdXRzV2l0aFRleHQiLCJoYXNUZXh0IiwiJGlucHV0cyIsImVhY2giLCJ2YWwiLCJjaGVja0VsZW1lbnRGb3JEYXRhQXR0ciIsImF0dHJpYnV0ZSIsImF0dHIiLCJjaGVja1VybCIsImxpbmtQYXRoIiwiZ2V0TGFzdENsaWNrZWRFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsIiRlbGVtZW50Iiwic3VibWl0QnV0dG9uQ2hlY2siLCJlbGVtZW50IiwidGFnTmFtZSIsImhhc0NsYXNzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlucHV0Q2hhbmdlZCIsImV2IiwiZGVmYXVsdFN0b3BMZWF2ZSIsImlzU2F2aW5nIiwiYXR0YWNoIiwib25iZWZvcmV1bmxvYWQiLCJkZXRhY2giLCJmb3JjZSIsImVkaXRQZXJtaXNzaW9uIiwiaWQiLCJvbiIsIl8iLCJ2YWx1ZSIsImdldEFsbFJvbGVzIiwicm9sZXMiLCJwdXNoIiwibW9kZWwiLCJhY3Rpb24iLCJyZXBsYWNlIiwiTm90aWZpY2F0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VB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LEVBQW9CeEcsTUFBTXVHLEtBQTFCLEVBQWQsRUFBaUQvRixJQUFqRCxDQUFzRCxVQUFVQyxHQUFWLEVBQWU7QUFDakV1QiwrQkFBU0MsV0FBVCxDQUFxQixFQUFFQyxhQUFhLFNBQWYsRUFBMEJDLE9BQU8sVUFBakMsRUFBNkNDLFNBQVMsb0NBQXRELEVBQTRGMUIsUUFBUSxTQUFwRyxFQUFyQjtBQUNBLGdCQUFJRCxPQUFPQSxJQUFJUixPQUFmLEVBQXdCO0FBQ3BCNkQsdUJBQU91QixRQUFQLENBQWdCb0IsT0FBaEIsQ0FBd0IsdUJBQXhCO0FBQ0E7QUFDSDs7QUFFREMseUJBQWF6RSxXQUFiLENBQXlCLEVBQUVDLGFBQWEsU0FBZixFQUEwQkUsU0FBUzNCLElBQUkyQixPQUFKLElBQWUsc0JBQWxELEVBQTBFMUIsUUFBUSxRQUFsRixFQUF6QjtBQUNILFNBUkQsRUFRR3pCLFdBQUtzQyxZQVJSOztBQVVBLGVBQU8sS0FBUDtBQUNILEtBbkJEO0FBb0JIOztBQUVEdUMsT0FBT2lDLGNBQVAsR0FBd0JBLGNBQXhCLEMiLCJmaWxlIjoianMvc2l0ZXRyaWtzL3Blcm1pc3Npb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvcGVybWlzc2lvbnMuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwidmFyIE5vdGlmaWVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzdGF0dXMgaXMgZm9sbG93aW5nIGJvb3RzdHJhcCBjb252ZW50aW9uOiAnZGFuZ2VyJyhyZWQpLCAnd2FybmluZycoeWVsbG93KSwgJ3N1Y2Nlc3MnKGdyZWVuKSwgJ2luZm8nKGJsdWUpXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkLCB0aXRsZSwgbWVzc2FnZSwgc3RhdHVzLCBzZWNvbmRzLCBpc1Blcm1hbmVudCwgc2VsZWN0b3IgfSkge1xyXG4gICAgICAgIGxldCAkdGl0bGUgPSAkKCc8c3Ryb25nPjwvc3Ryb25nPicsIHsgdGV4dDogdGl0bGUgfHwgJycgfSk7XHJcbiAgICAgICAgbGV0ICRjbG9zZUJ1dHRvbiA9ICQoJzxhPjwvYT4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnY2xvc2UnLFxyXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ2FsZXJ0JyxcclxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2xvc2UnLFxyXG4gICAgICAgICAgICBodG1sOiAnJnRpbWVzOydcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgJG1lc3NhZ2UgPSAkKCc8c3Bhbj48L3NwYW4+JywgeyB0ZXh0OiAnICcgKyAobWVzc2FnZSB8fCAnJykgfSk7XHJcbiAgICAgICAgbGV0ICRhbGVydCA9ICQoJzxkaXY+PC9kaXY+JywgeyBjbGFzczogJ2FsZXJ0IGFsZXJ0LScgKyAoc3RhdHVzIHx8ICdpbmZvJykgfSk7XHJcblxyXG4gICAgICAgICRhbGVydC5hcHBlbmQoJHRpdGxlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRtZXNzYWdlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRjbG9zZUJ1dHRvbilcclxuICAgICAgICAgICAgLmFwcGVuZFRvKHNlbGVjdG9yIHx8IGNvbnRhaW5lcklkIHx8ICdib2R5Jyk7XHJcblxyXG4gICAgICAgIGlmICghaXNQZXJtYW5lbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkYWxlcnQuZmFkZU91dCg1MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkYWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgKHNlY29uZHMgfHwgMTApICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlQWxlcnQ6IGNyZWF0ZUFsZXJ0XHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgTm90aWZpZXIgfTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFdhcm5pbmdXaW5kb3cgPSAoZnVuY3Rpb24gKGxvZ2dlcikge1xyXG4gICAgbG9nZ2VyID0gbG9nZ2VyIHx8IGNvbnNvbGU7XHJcbiAgICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gJ0l0IGxvb2tzIGxpa2UgeW91IGhhdmUgYmVlbiBlZGl0aW5nIHNvbWV0aGluZy4gJ1xyXG4gICAgICAgICsgJ0lmIHlvdSBsZWF2ZSBiZWZvcmUgc2F2aW5nLCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0Lic7XHJcblxyXG4gICAgZnVuY3Rpb24gb25VbmxvYWQoZSkge1xyXG4gICAgICAgIGlmICghaGFzQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG9uVW5sb2FkO1xyXG4gICAgLy92YXIgbGFzdENsaWNrT25FbGVtZW50O1xyXG4gICAgLy8kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgIGxhc3RDbGlja09uRWxlbWVudD0gJChldmVudC50YXJnZXQpO1xyXG4gICAgLy99KTtcclxuXHJcbiAgICB2YXIgbGFzdENsaWNrZWRFbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgLy9sYXN0Q2xpY2tlZCA9IHRhcmdldC50ZXh0Q29udGVudCB8fCB0YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhc1RleHRBcmVhc1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCAkdGV4dGFyZWFzID0gJCgndGV4dGFyZWEnKTtcclxuICAgICAgICAvL0FkZCB0aW55bWNlIGdldCB0ZXh0IGZyb20gdGV4dGFyZWEgbGlrZXMgaW5wdXRcclxuICAgICAgICBpZiAoJHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0lucHV0c1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCBoYXNUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0ICRpbnB1dHMgPSAkKCdpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGxldCBhdHRyID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpLmRhdGEoYXR0cmlidXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVcmwobGlua1BhdGgpIHtcclxuICAgICAgICBsb2dnZXIubG9nKFwiQ2hlY2sgdXJsXCIpO1xyXG4gICAgICAgIGxldCBhdHRyID0gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIoZ2V0TGFzdENsaWNrZWRFbGVtZW50KCksIFwiZGlzYWJsZUxpbmtcIik7XHJcblxyXG4gICAgICAgIGlmIChhdHRyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2luZyBpcyBkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2traW5nIGlzIGVuYWJsZWRcIilcclxuXHJcbiAgICAgICAgaWYgKGxpbmtQYXRoLmluZGV4T2YoJ2NyZWF0ZScpID09IC0xICYmIGxpbmtQYXRoLmluZGV4T2YoJ2VkaXQnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSB7XHJcbiAgICAgICAgbGV0IGxhc3RDbGlja2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PT0gXCJzdWJtaXRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5oYXNDbGFzcyhcImJ1dHRvbi1zdWJtaXRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuYXR0cigndHlwZScpID09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhZWxlbWVudC5hdHRyKCdkYXRhLWRpc2FibGUtd2FybmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0NoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKCFsYXN0Q2xpY2tlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGxpbmtQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIFwiZGlzYWJsZS13YXJuaW5nXCIpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGVja1VybChsaW5rUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhhc0NoYW5nZXMgPSBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHx8IGhhc0lucHV0c1dpdGhUZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RvcExlYXZlKGV2KSB7XHJcbiAgICAgICAgbGV0IGlzU2F2aW5nID0gbGFzdENsaWNrZWRFbGVtZW50ICYmICFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICQobGFzdENsaWNrZWRFbGVtZW50KSk7XHJcbiAgICAgICAgaWYgKGlzU2F2aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5wdXRDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgIGV2LnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGZvcmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBXYXJuaW5nV2luZG93IH07XHJcbiIsImltcG9ydCB7IFdhcm5pbmdXaW5kb3cgfSBmcm9tICcuLi9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICcuLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGVkaXRQZXJtaXNzaW9uKGlkKSB7XHJcbldhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICAkKCcubW92ZS10by1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWxsLXBlcm1pc3Npb25zLXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoJy5wZXJtaXNzaW9ucy10by1yb2xlLXNlbGVjdCcpLmFwcGVuZCgkKCc8b3B0aW9uPicsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBlbGVtZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogZWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW92ZS10by1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5wZXJtaXNzaW9ucy10by1yb2xlLXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoJy5hbGwtcGVybWlzc2lvbnMtc2VsZWN0JykuYXBwZW5kKCQoJzxvcHRpb24+Jywge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVsZW1lbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxSb2xlcygpIHtcclxuICAgICAgICB2YXIgcm9sZXMgPSBbXTtcclxuICAgICAgICAkKCcucGVybWlzc2lvbnMtdG8tcm9sZS1zZWxlY3Qgb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByb2xlcy5wdXNoKGVsZW1lbnQudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm9sZXM7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3Blcm1pc3Npb24tZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgbW9kZWwgPSB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgcm9sZXM6IGdldEFsbFJvbGVzKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiB0aGlzLmFjdGlvbiwgZGF0YTogbW9kZWwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgdGl0bGU6ICdTdWNjZXNzIScsIG1lc3NhZ2U6ICdQZXJtaXNzaW9uIHdhcyBlZGl0ZWQgc3VjY2Vzc2Z1bGx5Jywgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvc2l0ZXRyaWtzL3Blcm1pc3Npb24nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgbWVzc2FnZTogcmVzLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgc3RhdHVzOiAnZGFuZ2VyJyB9KTtcclxuICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuZWRpdFBlcm1pc3Npb24gPSBlZGl0UGVybWlzc2lvbjsiXSwic291cmNlUm9vdCI6IiJ9