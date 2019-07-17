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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/widget-configuration.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./scripts/sitetriks/widget-configuration.js":
/*!***************************************************!*\
  !*** ./scripts/sitetriks/widget-configuration.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _multiselectSetup = __webpack_require__(/*! ../common/multiselect-setup.js */ "./scripts/common/multiselect-setup.js");

function initWidgetConfiguration(grid) {
    var $modal = $('#edit-widget-roles');
    var $btnSave = $('#btn-save');
    var $rolesListBox = $('#roles-listbox');
    _multiselectSetup.Multiselect.Setup('roles-listbox');

    function editWidgetRoles(widget, roles, trackable) {
        $modal.find('.track-widget-checkbox').prop('checked', trackable === 'true');
        $rolesListBox.val('');
        $.each(roles.split(','), function (_, e) {
            $rolesListBox.find('option[value="' + e.trim() + '"]').prop('selected', true);
        });

        _multiselectSetup.Multiselect.Refresh('roles-listbox');
        $btnSave.attr('data-widget', widget);
        $modal.modal('show');
    }

    $btnSave.on('click', function () {
        var widget = this.getAttribute('data-widget');
        var roles = $rolesListBox.val();
        var isTrackable = $modal.find('.track-widget-checkbox').prop('checked') == true;

        $.ajax({
            method: 'POST',
            url: '/sitetriks/widgetconfiguration/edit',
            data: { widget: widget, roles: roles, isTrackable: isTrackable },
            success: function success(res) {
                if (res.success) {
                    grid.load(true);
                    $modal.modal('hide');
                }
            }
        });
    });

    $('body').on('click', '.edit-widget-config', function (ev) {
        editWidgetRoles(this.getAttribute('data-widget'), this.getAttribute('data-roles'), this.getAttribute('data-trackable'));
    });
}

window.initWidgetConfiguration = initWidgetConfiguration;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbXVsdGlzZWxlY3Qtc2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zaXRldHJpa3Mvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOlsiTXVsdGlzZWxlY3QiLCJzZXR1cCIsImlkIiwib25DaGFuZ2VDYWxsYmFjayIsInNldHVwRWxlbWVudCIsIiQiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwibXVsdGlzZWxlY3QiLCJtdWx0aXBsZSIsImhlaWdodCIsImhlYWRlciIsIm5vbmVTZWxlY3RlZFRleHQiLCJudW1iZXJEaXNwbGF5ZWQiLCJzZWxlY3RlZFRleHQiLCJudW1DaGVja2VkIiwibnVtVG90YWwiLCJjaGVja2VkSXRlbXMiLCJzZWxlY3RlZExpc3QiLCJzaG93IiwiaGlkZSIsInBvc2l0aW9uIiwibXkiLCJhdCIsIm9uQ2hhbmdlIiwicmVmcmVzaCIsImRlc3Ryb3kiLCJTZXR1cCIsIlNldHVwRWxlbWVudCIsIlJlZnJlc2giLCJEZXN0cm95IiwiaW5pdFdpZGdldENvbmZpZ3VyYXRpb24iLCJncmlkIiwiJG1vZGFsIiwiJGJ0blNhdmUiLCIkcm9sZXNMaXN0Qm94IiwiZWRpdFdpZGdldFJvbGVzIiwid2lkZ2V0Iiwicm9sZXMiLCJ0cmFja2FibGUiLCJmaW5kIiwicHJvcCIsInZhbCIsImVhY2giLCJzcGxpdCIsIl8iLCJlIiwidHJpbSIsImF0dHIiLCJtb2RhbCIsIm9uIiwiZ2V0QXR0cmlidXRlIiwiaXNUcmFja2FibGUiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJsb2FkIiwiZXYiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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dGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NjcmlwdHMvc2l0ZXRyaWtzL3dpZGdldC1jb25maWd1cmF0aW9uLmpzXCIpO1xuIiwidmFyIE11bHRpc2VsZWN0ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHNldHVwKGlkLCBvbkNoYW5nZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgc2V0dXBFbGVtZW50KCQoJyMnICsgaWQpLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cEVsZW1lbnQoJGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgJGVsZW1lbnQubXVsdGlzZWxlY3Qoe1xyXG4gICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTA1cHgnLFxyXG4gICAgICAgICAgICBoZWFkZXI6ICcnLFxyXG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiAnTm9uZScsXHJcbiAgICAgICAgICAgIG51bWJlckRpc3BsYXllZDogJycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGV4dDogZnVuY3Rpb24gKG51bUNoZWNrZWQsIG51bVRvdGFsLCBjaGVja2VkSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW1DaGVja2VkICsgJyBvZiAnICsgbnVtVG90YWwgKyAnIGNoZWNrZWQnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3RlZExpc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93OiBbJ2JsaW5kJywgMjAwXSxcclxuICAgICAgICAgICAgaGlkZTogWydmYWRlJywgMjAwXSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG15OiAnbGVmdCB0b3AnLFxyXG4gICAgICAgICAgICAgICAgYXQ6ICdsZWZ0IGJvdHRvbSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGNhbGxiYWNrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaChpZCkge1xyXG4gICAgICAgICQoJyMnICsgaWQpLm11bHRpc2VsZWN0KCdyZWZyZXNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVzdHJveShpZCkge1xyXG4gICAgICAgICQoJyMnICsgaWQpLm11bHRpc2VsZWN0KCdkZXN0cm95Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBTZXR1cDogc2V0dXAsXHJcbiAgICAgICAgU2V0dXBFbGVtZW50OiBzZXR1cEVsZW1lbnQsXHJcbiAgICAgICAgUmVmcmVzaDogcmVmcmVzaCxcclxuICAgICAgICBEZXN0cm95OiBkZXN0cm95XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgTXVsdGlzZWxlY3QgfTtcclxuIiwiaW1wb3J0IHsgTXVsdGlzZWxlY3QgfSBmcm9tICcuLi9jb21tb24vbXVsdGlzZWxlY3Qtc2V0dXAuanMnO1xyXG5cclxuZnVuY3Rpb24gaW5pdFdpZGdldENvbmZpZ3VyYXRpb24oZ3JpZCkge1xyXG4gICAgY29uc3QgJG1vZGFsID0gJCgnI2VkaXQtd2lkZ2V0LXJvbGVzJyk7XHJcbiAgICBjb25zdCAkYnRuU2F2ZSA9ICQoJyNidG4tc2F2ZScpO1xyXG4gICAgY29uc3QgJHJvbGVzTGlzdEJveCA9ICQoJyNyb2xlcy1saXN0Ym94Jyk7XHJcbiAgICBNdWx0aXNlbGVjdC5TZXR1cCgncm9sZXMtbGlzdGJveCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRXaWRnZXRSb2xlcyh3aWRnZXQsIHJvbGVzLCB0cmFja2FibGUpIHtcclxuICAgICAgICAkbW9kYWwuZmluZCgnLnRyYWNrLXdpZGdldC1jaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0cmFja2FibGUgPT09ICd0cnVlJyk7XHJcbiAgICAgICAgJHJvbGVzTGlzdEJveC52YWwoJycpO1xyXG4gICAgICAgICQuZWFjaChyb2xlcy5zcGxpdCgnLCcpLCBmdW5jdGlvbiAoXywgZSkge1xyXG4gICAgICAgICAgICAkcm9sZXNMaXN0Qm94LmZpbmQoJ29wdGlvblt2YWx1ZT1cIicgKyBlLnRyaW0oKSArICdcIl0nKS5wcm9wKCdzZWxlY3RlZCcsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBNdWx0aXNlbGVjdC5SZWZyZXNoKCdyb2xlcy1saXN0Ym94Jyk7XHJcbiAgICAgICAgJGJ0blNhdmUuYXR0cignZGF0YS13aWRnZXQnLCB3aWRnZXQpO1xyXG4gICAgICAgICRtb2RhbC5tb2RhbCgnc2hvdycpO1xyXG4gICAgfVxyXG5cclxuICAgICRidG5TYXZlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgd2lkZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkZ2V0Jyk7XHJcbiAgICAgICAgbGV0IHJvbGVzID0gJHJvbGVzTGlzdEJveC52YWwoKTtcclxuICAgICAgICBsZXQgaXNUcmFja2FibGUgPSAkbW9kYWwuZmluZCgnLnRyYWNrLXdpZGdldC1jaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnL3NpdGV0cmlrcy93aWRnZXRjb25maWd1cmF0aW9uL2VkaXQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHdpZGdldCwgcm9sZXMsIGlzVHJhY2thYmxlIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQubG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kYWwubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZWRpdC13aWRnZXQtY29uZmlnJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgZWRpdFdpZGdldFJvbGVzKHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZGdldCcpLCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1yb2xlcycpLCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFja2FibGUnKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmluaXRXaWRnZXRDb25maWd1cmF0aW9uID0gaW5pdFdpZGdldENvbmZpZ3VyYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=