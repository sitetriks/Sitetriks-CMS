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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/dynamic-views.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./scripts/razor-views-editor.js":
/*!***************************************!*\
  !*** ./scripts/razor-views-editor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* globals ace */

var RazorViewsEditor = function () {
    function init(source, formSelector, hiddenFieldSelector) {
        ace.require('ace/ext/language_tools');
        var editor = ace.edit('editor');
        editor.session.setMode('ace/mode/razor');

        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false
        });
        editor.session.setNewLineMode('windows');
        editor.setValue(source, 1);

        $(document).ready(function () {
            $(formSelector).on('submit', function () {
                var code = editor.getValue();

                $(hiddenFieldSelector).val(code);
            });
        });
    }

    return {
        init: init
    };
}();

exports.RazorViewsEditor = RazorViewsEditor;

/***/ }),

/***/ "./scripts/sitetriks/dynamic-views.js":
/*!********************************************!*\
  !*** ./scripts/sitetriks/dynamic-views.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _razorViewsEditor = __webpack_require__(/*! ../razor-views-editor.js */ "./scripts/razor-views-editor.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

var DynamicViews = function () {
    function setupWidgetNameDropdown(selector) {
        $(selector).change(function () {
            var value = $(this).val();
            var $location = $('#location');
            var $info = $('#custom-location-info');

            if (value.indexOf('dynamic/') >= 0) {

                var dynamicClassName = value.replace('dynamic/', '');
                $location.show();
                $info.show();

                $location.val('/Views/Shared/Components/DynamicWidget/' + dynamicClassName + '/{ViewType}/{ViewName}.cshtml');
                $info.text('Change {ViewType} and {ViewName} placeholders!');
            } else {

                if (value === 'none') {
                    $location.show();
                } else {
                    $location.hide();
                }

                $location.val('');
                $info.hide();
                $info.val('');
            }
        });
    }

    function init(viewsSource, fromSelector, hiddenViewFieldSelector, widgetsDropdownSelector) {
        _razorViewsEditor.RazorViewsEditor.init(viewsSource, fromSelector, hiddenViewFieldSelector);
        setupWidgetNameDropdown(widgetsDropdownSelector);
        _warningWindow.WarningWindow.attach();
    }

    return {
        init: init
    };
}();

window.DynamicViews = DynamicViews;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvcmF6b3Itdmlld3MtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL2R5bmFtaWMtdmlld3MuanMiXSwibmFtZXMiOlsiV2FybmluZ1dpbmRvdyIsImxvZ2dlciIsImNvbnNvbGUiLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJlIiwiaGFzQ2hhbmdlcyIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJldmVudCIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJoYXNUZXh0QXJlYXNXaXRoVGV4dCIsIiR0ZXh0YXJlYXMiLCIkIiwibGVuZ3RoIiwiaGFzSW5wdXRzV2l0aFRleHQiLCJoYXNUZXh0IiwiJGlucHV0cyIsImVhY2giLCJ2YWwiLCJjaGVja0VsZW1lbnRGb3JEYXRhQXR0ciIsImF0dHJpYnV0ZSIsImF0dHIiLCJkYXRhIiwiY2hlY2tVcmwiLCJsaW5rUGF0aCIsImxvZyIsImdldExhc3RDbGlja2VkRWxlbWVudCIsImluZGV4T2YiLCJhY3RpdmVFbGVtZW50IiwiJGVsZW1lbnQiLCJzdWJtaXRCdXR0b25DaGVjayIsImVsZW1lbnQiLCJ0YWdOYW1lIiwiaGFzQ2xhc3MiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5wdXRDaGFuZ2VkIiwiZXYiLCJkZWZhdWx0U3RvcExlYXZlIiwiaXNTYXZpbmciLCJhdHRhY2giLCJvbmJlZm9yZXVubG9hZCIsImRldGFjaCIsImZvcmNlIiwiUmF6b3JWaWV3c0VkaXRvciIsImluaXQiLCJzb3VyY2UiLCJmb3JtU2VsZWN0b3IiLCJoaWRkZW5GaWVsZFNlbGVjdG9yIiwiYWNlIiwicmVxdWlyZSIsImVkaXRvciIsImVkaXQiLCJzZXNzaW9uIiwic2V0TW9kZSIsInNldE9wdGlvbnMiLCJlbmFibGVCYXNpY0F1dG9jb21wbGV0aW9uIiwiZW5hYmxlU25pcHBldHMiLCJlbmFibGVMaXZlQXV0b2NvbXBsZXRpb24iLCJzZXROZXdMaW5lTW9kZSIsInNldFZhbHVlIiwicmVhZHkiLCJvbiIsImNvZGUiLCJnZXRWYWx1ZSIsIkR5bmFtaWNWaWV3cyIsInNldHVwV2lkZ2V0TmFtZURyb3Bkb3duIiwic2VsZWN0b3IiLCJjaGFuZ2UiLCJ2YWx1ZSIsIiRsb2NhdGlvbiIsIiRpbmZvIiwiZHluYW1pY0NsYXNzTmFtZSIsInJlcGxhY2UiLCJzaG93IiwidGV4dCIsImhpZGUiLCJ2aWV3c1NvdXJjZSIsImZyb21TZWxlY3RvciIsImhpZGRlblZpZXdGaWVsZFNlbGVjdG9yIiwid2lkZ2V0c0Ryb3Bkb3duU2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FB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c0JnQyxXQUF0QixFQUFtQ0MsWUFBbkMsRUFBaURDLHVCQUFqRDtBQUNBYixnQ0FBd0JjLHVCQUF4QjtBQUNBdEYscUNBQWM4QyxNQUFkO0FBQ0g7O0FBRUQsV0FBTztBQUNISztBQURHLEtBQVA7QUFHSCxDQXhDa0IsRUFBbkI7O0FBMENBdkMsT0FBTzJELFlBQVAsR0FBc0JBLFlBQXRCLEMiLCJmaWxlIjoianMvc2l0ZXRyaWtzL2R5bmFtaWMtdmlld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL3NpdGV0cmlrcy9keW5hbWljLXZpZXdzLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFdhcm5pbmdXaW5kb3cgPSAoZnVuY3Rpb24gKGxvZ2dlcikge1xyXG4gICAgbG9nZ2VyID0gbG9nZ2VyIHx8IGNvbnNvbGU7XHJcbiAgICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gJ0l0IGxvb2tzIGxpa2UgeW91IGhhdmUgYmVlbiBlZGl0aW5nIHNvbWV0aGluZy4gJ1xyXG4gICAgICAgICsgJ0lmIHlvdSBsZWF2ZSBiZWZvcmUgc2F2aW5nLCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0Lic7XHJcblxyXG4gICAgZnVuY3Rpb24gb25VbmxvYWQoZSkge1xyXG4gICAgICAgIGlmICghaGFzQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG9uVW5sb2FkO1xyXG4gICAgLy92YXIgbGFzdENsaWNrT25FbGVtZW50O1xyXG4gICAgLy8kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgIGxhc3RDbGlja09uRWxlbWVudD0gJChldmVudC50YXJnZXQpO1xyXG4gICAgLy99KTtcclxuXHJcbiAgICB2YXIgbGFzdENsaWNrZWRFbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgLy9sYXN0Q2xpY2tlZCA9IHRhcmdldC50ZXh0Q29udGVudCB8fCB0YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhc1RleHRBcmVhc1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCAkdGV4dGFyZWFzID0gJCgndGV4dGFyZWEnKTtcclxuICAgICAgICAvL0FkZCB0aW55bWNlIGdldCB0ZXh0IGZyb20gdGV4dGFyZWEgbGlrZXMgaW5wdXRcclxuICAgICAgICBpZiAoJHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0lucHV0c1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCBoYXNUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0ICRpbnB1dHMgPSAkKCdpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGxldCBhdHRyID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpLmRhdGEoYXR0cmlidXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVcmwobGlua1BhdGgpIHtcclxuICAgICAgICBsb2dnZXIubG9nKFwiQ2hlY2sgdXJsXCIpO1xyXG4gICAgICAgIGxldCBhdHRyID0gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIoZ2V0TGFzdENsaWNrZWRFbGVtZW50KCksIFwiZGlzYWJsZUxpbmtcIik7XHJcblxyXG4gICAgICAgIGlmIChhdHRyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2luZyBpcyBkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2traW5nIGlzIGVuYWJsZWRcIilcclxuXHJcbiAgICAgICAgaWYgKGxpbmtQYXRoLmluZGV4T2YoJ2NyZWF0ZScpID09IC0xICYmIGxpbmtQYXRoLmluZGV4T2YoJ2VkaXQnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSB7XHJcbiAgICAgICAgbGV0IGxhc3RDbGlja2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PT0gXCJzdWJtaXRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5oYXNDbGFzcyhcImJ1dHRvbi1zdWJtaXRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuYXR0cigndHlwZScpID09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhZWxlbWVudC5hdHRyKCdkYXRhLWRpc2FibGUtd2FybmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0NoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKCFsYXN0Q2xpY2tlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGxpbmtQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIFwiZGlzYWJsZS13YXJuaW5nXCIpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGVja1VybChsaW5rUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhhc0NoYW5nZXMgPSBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHx8IGhhc0lucHV0c1dpdGhUZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RvcExlYXZlKGV2KSB7XHJcbiAgICAgICAgbGV0IGlzU2F2aW5nID0gbGFzdENsaWNrZWRFbGVtZW50ICYmICFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICQobGFzdENsaWNrZWRFbGVtZW50KSk7XHJcbiAgICAgICAgaWYgKGlzU2F2aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5wdXRDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgIGV2LnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGZvcmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBXYXJuaW5nV2luZG93IH07XHJcbiIsIi8qIGdsb2JhbHMgYWNlICovXHJcblxyXG52YXIgUmF6b3JWaWV3c0VkaXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0KHNvdXJjZSwgZm9ybVNlbGVjdG9yLCBoaWRkZW5GaWVsZFNlbGVjdG9yKSB7XHJcbiAgICAgICAgYWNlLnJlcXVpcmUoJ2FjZS9leHQvbGFuZ3VhZ2VfdG9vbHMnKTtcclxuICAgICAgICB2YXIgZWRpdG9yID0gYWNlLmVkaXQoJ2VkaXRvcicpO1xyXG4gICAgICAgIGVkaXRvci5zZXNzaW9uLnNldE1vZGUoJ2FjZS9tb2RlL3Jhem9yJyk7XHJcblxyXG4gICAgICAgIGVkaXRvci5zZXRPcHRpb25zKHtcclxuICAgICAgICAgICAgZW5hYmxlQmFzaWNBdXRvY29tcGxldGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZW5hYmxlU25pcHBldHM6IHRydWUsXHJcbiAgICAgICAgICAgIGVuYWJsZUxpdmVBdXRvY29tcGxldGlvbjogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXROZXdMaW5lTW9kZSgnd2luZG93cycpO1xyXG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZShzb3VyY2UsIDEpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoZm9ybVNlbGVjdG9yKS5vbignc3VibWl0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGhpZGRlbkZpZWxkU2VsZWN0b3IpLnZhbChjb2RlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgUmF6b3JWaWV3c0VkaXRvciB9O1xyXG4iLCJpbXBvcnQgeyBSYXpvclZpZXdzRWRpdG9yIH0gZnJvbSAnLi4vcmF6b3Itdmlld3MtZWRpdG9yLmpzJztcclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4uL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMnO1xyXG5cclxudmFyIER5bmFtaWNWaWV3cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHNldHVwV2lkZ2V0TmFtZURyb3Bkb3duKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgJChzZWxlY3RvcikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0ICRsb2NhdGlvbiA9ICQoJyNsb2NhdGlvbicpO1xyXG4gICAgICAgICAgICBsZXQgJGluZm8gPSAkKCcjY3VzdG9tLWxvY2F0aW9uLWluZm8nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdkeW5hbWljLycpID49IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZHluYW1pY0NsYXNzTmFtZSA9IHZhbHVlLnJlcGxhY2UoJ2R5bmFtaWMvJywgJycpO1xyXG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRpbmZvLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkbG9jYXRpb24udmFsKCcvVmlld3MvU2hhcmVkL0NvbXBvbmVudHMvRHluYW1pY1dpZGdldC8nICsgZHluYW1pY0NsYXNzTmFtZSArICcve1ZpZXdUeXBlfS97Vmlld05hbWV9LmNzaHRtbCcpO1xyXG4gICAgICAgICAgICAgICAgJGluZm8udGV4dCgnQ2hhbmdlIHtWaWV3VHlwZX0gYW5kIHtWaWV3TmFtZX0gcGxhY2Vob2xkZXJzIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkbG9jYXRpb24udmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICRpbmZvLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRpbmZvLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KHZpZXdzU291cmNlLCBmcm9tU2VsZWN0b3IsIGhpZGRlblZpZXdGaWVsZFNlbGVjdG9yLCB3aWRnZXRzRHJvcGRvd25TZWxlY3Rvcikge1xyXG4gICAgICAgIFJhem9yVmlld3NFZGl0b3IuaW5pdCh2aWV3c1NvdXJjZSwgZnJvbVNlbGVjdG9yLCBoaWRkZW5WaWV3RmllbGRTZWxlY3Rvcik7XHJcbiAgICAgICAgc2V0dXBXaWRnZXROYW1lRHJvcGRvd24od2lkZ2V0c0Ryb3Bkb3duU2VsZWN0b3IpO1xyXG4gICAgICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG53aW5kb3cuRHluYW1pY1ZpZXdzID0gRHluYW1pY1ZpZXdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9