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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/user-groups.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./scripts/sitetriks/user-groups.js":
/*!******************************************!*\
  !*** ./scripts/sitetriks/user-groups.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function createUserGroup(url) {
    _warningWindow.WarningWindow.attach();
    $('.move-to-right').on('click', function () {
        $('.users-to-role-select').removeClass('hidden');
        $('.all-users-select option:selected').each(function () {
            $(this).remove();
            var usersToRoleSelect = $('.users-to-role-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    $('.move-to-left').on('click', function () {
        $('.users-to-role-select option:selected').each(function () {
            $(this).remove();
            var usersToAllUsers = $('.all-users-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    function getAllUsersToAddRole() {
        var usernames = [];
        $('.users-to-role-select option').each(function () {
            usernames.push($(this).val());
        });

        return usernames;
    }

    $('#create-user-group').on('submit', function (e) {
        var flag = true;
        if ($('#title').val().length < 3) {
            _notifier.Notifier.createAlert({ containerId: '#alert', message: 'Title must has more than 3 characters', success: 'danger' });
            flag = false;
            //window.location.replace('/sitetriks/userGroups');
        }

        e.preventDefault();

        var userGroup = JSON.stringify({
            Title: $('#title').val(),
            AllUsers: [],
            UserWithCurrentGroup: getAllUsersToAddRole()
        });

        if (flag) {

            $.ajax({
                type: 'POST',
                url: url,
                contentType: 'application/json',
                dataType: 'json',
                data: userGroup,
                success: function success(data, status) {
                    window.location = '/sitetriks/userGroups';
                },
                error: function error(err) {}
            });
        }

        return false;
    });
}

function editUserGroup(url) {
    _warningWindow.WarningWindow.attach();
    $('.move-to-right').on('click', function () {
        $('.all-users-select option:selected').each(function () {
            $(this).remove();
            var usersToRoleSelect = $('.users-to-role-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    $('.move-to-left').on('click', function () {
        $('.users-to-role-select option:selected').each(function () {
            $(this).remove();
            var usersToAllUsers = $('.all-users-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    function getAllUsersToAddRole() {
        var usernames = [];
        $('.users-to-role-select option').each(function () {
            usernames.push($(this).val());
        });

        return usernames;
    }

    $('input[type="submit"]').on('click', function (e) {
        e.preventDefault();
        var userGroup = JSON.stringify({
            Title: $('#title').text(),
            AllUsers: [],
            UserWithCurrentGroup: getAllUsersToAddRole()
        });
        $.ajax({
            type: 'POST',
            url: '@Url.Action("Edit", "UserGroups")',
            contentType: 'application/json',
            dataType: 'json',
            data: userGroup,
            success: function success(data, status) {
                window.location.replace('/sitetriks/usergroups');
            },
            error: function error(_error) {
                _notifier.Notifier.createAlert('alerts', 'Something went wrong');
            }
        });
    });

    $('.delete-btn').on('click', function (e) {
        var userGroup = JSON.stringify({
            Title: $('#title').text(),
            AllUsers: [],
            UserWithCurrentGroup: getAllUsersToAddRole()
        });

        $.ajax({
            type: 'POST',
            url: url,
            contentType: 'application/json',
            data: userGroup,
            success: function success() {
                window.location.replace('/sitetriks/userGroups');
            },
            error: function error() {}
        });
    });
}

window.editUserGroup = editUserGroup;
window.createUserGroup = createUserGroup;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL3VzZXItZ3JvdXBzLmpzIl0sIm5hbWVzIjpbIk5vdGlmaWVyIiwiY3JlYXRlQWxlcnQiLCJjb250YWluZXJJZCIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsInNlY29uZHMiLCJpc1Blcm1hbmVudCIsInNlbGVjdG9yIiwiJHRpdGxlIiwiJCIsInRleHQiLCIkY2xvc2VCdXR0b24iLCJjbGFzcyIsImh0bWwiLCIkbWVzc2FnZSIsIiRhbGVydCIsImFwcGVuZCIsImFwcGVuZFRvIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJyZW1vdmUiLCJXYXJuaW5nV2luZG93IiwibG9nZ2VyIiwiY29uc29sZSIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJvblVubG9hZCIsImUiLCJoYXNDaGFuZ2VzIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImxhc3RDbGlja2VkRWxlbWVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImV2ZW50IiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsImhhc1RleHRBcmVhc1dpdGhUZXh0IiwiJHRleHRhcmVhcyIsImxlbmd0aCIsImhhc0lucHV0c1dpdGhUZXh0IiwiaGFzVGV4dCIsIiRpbnB1dHMiLCJlYWNoIiwidmFsIiwiY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIiLCJhdHRyaWJ1dGUiLCJhdHRyIiwiZGF0YSIsImNoZWNrVXJsIiwibGlua1BhdGgiLCJsb2ciLCJnZXRMYXN0Q2xpY2tlZEVsZW1lbnQiLCJpbmRleE9mIiwiYWN0aXZlRWxlbWVudCIsIiRlbGVtZW50Iiwic3VibWl0QnV0dG9uQ2hlY2siLCJlbGVtZW50IiwidGFnTmFtZSIsImhhc0NsYXNzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlucHV0Q2hhbmdlZCIsImV2IiwiZGVmYXVsdFN0b3BMZWF2ZSIsImlzU2F2aW5nIiwiYXR0YWNoIiwib25iZWZvcmV1bmxvYWQiLCJkZXRhY2giLCJmb3JjZSIsImNyZWF0ZVVzZXJHcm91cCIsInVybCIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJ1c2Vyc1RvUm9sZVNlbGVjdCIsInZhbHVlIiwidXNlcnNUb0FsbFVzZXJzIiwiZ2V0QWxsVXNlcnNUb0FkZFJvbGUiLCJ1c2VybmFtZXMiLCJwdXNoIiwiZmxhZyIsInN1Y2Nlc3MiLCJ1c2VyR3JvdXAiLCJKU09OIiwic3RyaW5naWZ5IiwiVGl0bGUiLCJBbGxVc2VycyIsIlVzZXJXaXRoQ3VycmVudEdyb3VwIiwiYWpheCIsInR5cGUiLCJjb250ZW50VHlwZSIsImRhdGFUeXBlIiwiZXJyb3IiLCJlcnIiLCJlZGl0VXNlckdyb3VwIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtE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VixFQUFhO0FBQ3RDLFlBQUl3RCxZQUFZQyxLQUFLQyxTQUFMLENBQWU7QUFDM0JDLG1CQUFPNUUsRUFBRSxRQUFGLEVBQVlDLElBQVosRUFEb0I7QUFFM0I0RSxzQkFBVSxFQUZpQjtBQUczQkMsa0NBQXNCVjtBQUhLLFNBQWYsQ0FBaEI7O0FBTUFwRSxVQUFFK0UsSUFBRixDQUFPO0FBQ0hDLGtCQUFNLE1BREg7QUFFSGxCLGlCQUFLQSxHQUZGO0FBR0htQix5QkFBYSxrQkFIVjtBQUlIMUMsa0JBQU1rQyxTQUpIO0FBS0hELHFCQUFTLG1CQUFZO0FBQ2pCaEQsdUJBQU8yQixRQUFQLENBQWdCbUMsT0FBaEIsQ0FBd0IsdUJBQXhCO0FBQ0gsYUFQRTtBQVFISCxtQkFBTyxpQkFBWSxDQUNsQjtBQVRFLFNBQVA7QUFZSCxLQW5CRDtBQW9CSDs7QUFFRDNELE9BQU82RCxhQUFQLEdBQXVCQSxhQUF2QjtBQUNBN0QsT0FBT3FDLGVBQVAsR0FBeUJBLGVBQXpCLEMiLCJmaWxlIjoianMvc2l0ZXRyaWtzL3VzZXItZ3JvdXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvdXNlci1ncm91cHMuanNcIik7XG4iLCJ2YXIgTm90aWZpZXIgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHN0YXR1cyBpcyBmb2xsb3dpbmcgYm9vdHN0cmFwIGNvbnZlbnRpb246ICdkYW5nZXInKHJlZCksICd3YXJuaW5nJyh5ZWxsb3cpLCAnc3VjY2VzcycoZ3JlZW4pLCAnaW5mbycoYmx1ZSlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQsIHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMsIHNlY29uZHMsIGlzUGVybWFuZW50LCBzZWxlY3RvciB9KSB7XHJcbiAgICAgICAgbGV0ICR0aXRsZSA9ICQoJzxzdHJvbmc+PC9zdHJvbmc+JywgeyB0ZXh0OiB0aXRsZSB8fCAnJyB9KTtcclxuICAgICAgICBsZXQgJGNsb3NlQnV0dG9uID0gJCgnPGE+PC9hPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdjbG9zZScsXHJcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnYWxlcnQnLFxyXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdjbG9zZScsXHJcbiAgICAgICAgICAgIGh0bWw6ICcmdGltZXM7J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCAkbWVzc2FnZSA9ICQoJzxzcGFuPjwvc3Bhbj4nLCB7IHRleHQ6ICcgJyArIChtZXNzYWdlIHx8ICcnKSB9KTtcclxuICAgICAgICBsZXQgJGFsZXJ0ID0gJCgnPGRpdj48L2Rpdj4nLCB7IGNsYXNzOiAnYWxlcnQgYWxlcnQtJyArIChzdGF0dXMgfHwgJ2luZm8nKSB9KTtcclxuXHJcbiAgICAgICAgJGFsZXJ0LmFwcGVuZCgkdGl0bGUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJGNsb3NlQnV0dG9uKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oc2VsZWN0b3IgfHwgY29udGFpbmVySWQgfHwgJ2JvZHknKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRhbGVydC5mYWRlT3V0KDUwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRhbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAoc2Vjb25kcyB8fCAxMCkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVBbGVydDogY3JlYXRlQWxlcnRcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBOb3RpZmllciB9O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgV2FybmluZ1dpbmRvdyA9IChmdW5jdGlvbiAobG9nZ2VyKSB7XHJcbiAgICBsb2dnZXIgPSBsb2dnZXIgfHwgY29uc29sZTtcclxuICAgIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSAnSXQgbG9va3MgbGlrZSB5b3UgaGF2ZSBiZWVuIGVkaXRpbmcgc29tZXRoaW5nLiAnXHJcbiAgICAgICAgKyAnSWYgeW91IGxlYXZlIGJlZm9yZSBzYXZpbmcsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3QuJztcclxuXHJcbiAgICBmdW5jdGlvbiBvblVubG9hZChlKSB7XHJcbiAgICAgICAgaWYgKCFoYXNDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gb25VbmxvYWQ7XHJcbiAgICAvL3ZhciBsYXN0Q2xpY2tPbkVsZW1lbnQ7XHJcbiAgICAvLyQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAgbGFzdENsaWNrT25FbGVtZW50PSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAvL30pO1xyXG5cclxuICAgIHZhciBsYXN0Q2xpY2tlZEVsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICAvL2xhc3RDbGlja2VkID0gdGFyZ2V0LnRleHRDb250ZW50IHx8IHRhcmdldC5pbm5lclRleHQ7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0ICR0ZXh0YXJlYXMgPSAkKCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIC8vQWRkIHRpbnltY2UgZ2V0IHRleHQgZnJvbSB0ZXh0YXJlYSBsaWtlcyBpbnB1dFxyXG4gICAgICAgIGlmICgkdGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzSW5wdXRzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0IGhhc1RleHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgJGlucHV0cyA9ICQoJ2lucHV0W3R5cGU9dGV4dF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGhhc1RleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgYXR0cmlidXRlKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSAkKGxhc3RDbGlja2VkRWxlbWVudCkuZGF0YShhdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgICBpZiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1VybChsaW5rUGF0aCkge1xyXG4gICAgICAgIGxvZ2dlci5sb2coXCJDaGVjayB1cmxcIik7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSwgXCJkaXNhYmxlTGlua1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNraW5nIGlzIGRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2tpbmcgaXMgZW5hYmxlZFwiKVxyXG5cclxuICAgICAgICBpZiAobGlua1BhdGguaW5kZXhPZignY3JlYXRlJykgPT0gLTEgJiYgbGlua1BhdGguaW5kZXhPZignZWRpdCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldExhc3RDbGlja2VkRWxlbWVudCgpIHtcclxuICAgICAgICBsZXQgbGFzdENsaWNrZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJiBlbGVtZW50LmF0dHIoXCJ0eXBlXCIpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50Lmhhc0NsYXNzKFwiYnV0dG9uLXN1Ym1pdFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5hdHRyKCd0eXBlJykgPT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFlbGVtZW50LmF0dHIoJ2RhdGEtZGlzYWJsZS13YXJuaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAoIWxhc3RDbGlja2VkRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgbGlua1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgICAgIGlmICghc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgXCJkaXNhYmxlLXdhcm5pbmdcIikgIT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoZWNrVXJsKGxpbmtQYXRoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzQ2hhbmdlcyA9IGhhc1RleHRBcmVhc1dpdGhUZXh0KCkgfHwgaGFzSW5wdXRzV2l0aFRleHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHZhciBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRTdG9wTGVhdmUoZXYpIHtcclxuICAgICAgICBsZXQgaXNTYXZpbmcgPSBsYXN0Q2xpY2tlZEVsZW1lbnQgJiYgIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJChsYXN0Q2xpY2tlZEVsZW1lbnQpKTtcclxuICAgICAgICBpZiAoaXNTYXZpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dENoYW5nZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgZXYucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZm9yY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IFdhcm5pbmdXaW5kb3cgfTtcclxuIiwiaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICcuLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5pbXBvcnQgeyBXYXJuaW5nV2luZG93IH0gZnJvbSAnLi4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVVc2VyR3JvdXAodXJsKSB7XHJcbiAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgJCgnLm1vdmUtdG8tcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnVzZXJzLXRvLXJvbGUtc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICQoJy5hbGwtdXNlcnMtc2VsZWN0IG9wdGlvbjpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB2YXIgdXNlcnNUb1JvbGVTZWxlY3QgPSAkKCcudXNlcnMtdG8tcm9sZS1zZWxlY3QnKS5hcHBlbmQoJCgnPG9wdGlvbj4nLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJCh0aGlzKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICQodGhpcykudmFsKClcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vdmUtdG8tbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcudXNlcnMtdG8tcm9sZS1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHZhciB1c2Vyc1RvQWxsVXNlcnMgPSAkKCcuYWxsLXVzZXJzLXNlbGVjdCcpLmFwcGVuZCgkKCc8b3B0aW9uPicsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAkKHRoaXMpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJCh0aGlzKS52YWwoKVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsVXNlcnNUb0FkZFJvbGUoKSB7XHJcbiAgICAgICAgdmFyIHVzZXJuYW1lcyA9IFtdO1xyXG4gICAgICAgICQoJy51c2Vycy10by1yb2xlLXNlbGVjdCBvcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VybmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI2NyZWF0ZS11c2VyLWdyb3VwJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGlmICgkKCcjdGl0bGUnKS52YWwoKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnQnLCBtZXNzYWdlOiAnVGl0bGUgbXVzdCBoYXMgbW9yZSB0aGFuIDMgY2hhcmFjdGVycycsIHN1Y2Nlc3M6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9zaXRldHJpa3MvdXNlckdyb3VwcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgdXNlckdyb3VwID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBUaXRsZTogJCgnI3RpdGxlJykudmFsKCksXHJcbiAgICAgICAgICAgIEFsbFVzZXJzOiBbXSxcclxuICAgICAgICAgICAgVXNlcldpdGhDdXJyZW50R3JvdXA6IGdldEFsbFVzZXJzVG9BZGRSb2xlKClcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZmxhZykge1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB1c2VyR3JvdXAsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9zaXRldHJpa3MvdXNlckdyb3Vwcyc7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRVc2VyR3JvdXAodXJsKSB7XHJcbiAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgJCgnLm1vdmUtdG8tcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFsbC11c2Vycy1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHZhciB1c2Vyc1RvUm9sZVNlbGVjdCA9ICQoJy51c2Vycy10by1yb2xlLXNlbGVjdCcpLmFwcGVuZCgkKCc8b3B0aW9uPicsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAkKHRoaXMpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJCh0aGlzKS52YWwoKVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW92ZS10by1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy51c2Vycy10by1yb2xlLXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdmFyIHVzZXJzVG9BbGxVc2VycyA9ICQoJy5hbGwtdXNlcnMtc2VsZWN0JykuYXBwZW5kKCQoJzxvcHRpb24+Jywge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICQodGhpcykudmFsKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxVc2Vyc1RvQWRkUm9sZSgpIHtcclxuICAgICAgICB2YXIgdXNlcm5hbWVzID0gW107XHJcbiAgICAgICAgJCgnLnVzZXJzLXRvLXJvbGUtc2VsZWN0IG9wdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1c2VybmFtZXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXJuYW1lcztcclxuICAgIH1cclxuXHJcbiAgICAkKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHVzZXJHcm91cCA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgVGl0bGU6ICQoJyN0aXRsZScpLnRleHQoKSxcclxuICAgICAgICAgICAgQWxsVXNlcnM6IFtdLFxyXG4gICAgICAgICAgICBVc2VyV2l0aEN1cnJlbnRHcm91cDogZ2V0QWxsVXNlcnNUb0FkZFJvbGUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnQFVybC5BY3Rpb24oXCJFZGl0XCIsIFwiVXNlckdyb3Vwc1wiKScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IHVzZXJHcm91cCxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9zaXRldHJpa3MvdXNlcmdyb3VwcycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCgnYWxlcnRzJywgJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5kZWxldGUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdXNlckdyb3VwID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBUaXRsZTogJCgnI3RpdGxlJykudGV4dCgpLFxyXG4gICAgICAgICAgICBBbGxVc2VyczogW10sXHJcbiAgICAgICAgICAgIFVzZXJXaXRoQ3VycmVudEdyb3VwOiBnZXRBbGxVc2Vyc1RvQWRkUm9sZSgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IHVzZXJHcm91cCxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9zaXRldHJpa3MvdXNlckdyb3VwcycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5lZGl0VXNlckdyb3VwID0gZWRpdFVzZXJHcm91cDtcclxud2luZG93LmNyZWF0ZVVzZXJHcm91cCA9IGNyZWF0ZVVzZXJHcm91cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==