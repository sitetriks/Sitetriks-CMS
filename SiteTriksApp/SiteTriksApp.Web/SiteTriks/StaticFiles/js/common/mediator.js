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
/******/ 	return __webpack_require__(__webpack_require__.s = "./SiteTriks/StaticFiles/scripts/common/mediator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SiteTriks/StaticFiles/scripts/common/mediator.js":
/*!**********************************************************!*\
  !*** ./SiteTriks/StaticFiles/scripts/common/mediator.js ***!
  \**********************************************************/
/*! exports provided: Mediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mediator", function() { return Mediator; });


function Mediator(logger) {
  var events = {};

  function on(event, handler, name, subsciber) {
    if (!events[event]) {
      events[event] = [];
    } // TODO: validate for string


    if (!event || !name || !subsciber) {
      logger.error('event, name and subsciber are required fields!');
      return this;
    }

    if (!handler || {}.toString.call(handler) !== '[object Function]') {
      logger.error("handler for ".concat(event, " by ").concat(subsciber, " with name ").concat(name, " must be a function!"));
      return this;
    }

    var found = events[event].find(function (element) {
      return element.name === name && element.subsciber === subsciber;
    });

    if (found) {
      found.handler = handler;
    } else {
      events[event].push({
        handler: handler,
        name: name,
        subsciber: subsciber
      });
    }

    return this;
  }

  function off(event, name, subsciber) {
    if (!events[event]) {
      events[event] = [];
    }

    var found = events[event].find(function (element) {
      return element.name === name && element.subsciber === subsciber;
    });
    var index = events[event].indexOf(found);

    if (index > -1) {
      events[event].splice(index, 1);
    } else {
      logger.warn("".concat(name, " handler from ").concat(subsciber, " was not removed because it was not found in registered events!"));
    }

    return this;
  }

  function dispatch(event, data) {
    if (!events[event]) {
      logger.warn("".concat(event, " is not registered!"));
      return this;
    }

    events[event].forEach(function (element) {
      element.handler(data);
    });
    return this;
  }

  return {
    on: on,
    off: off,
    dispatch: dispatch
  };
}
window.Mediator = Mediator;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU2l0ZVRyaWtzL1N0YXRpY0ZpbGVzL3NjcmlwdHMvY29tbW9uL21lZGlhdG9yLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwibG9nZ2VyIiwiZXZlbnRzIiwib24iLCJldmVudCIsImhhbmRsZXIiLCJuYW1lIiwic3Vic2NpYmVyIiwiZXJyb3IiLCJ0b1N0cmluZyIsImNhbGwiLCJmb3VuZCIsImZpbmQiLCJlbGVtZW50IiwicHVzaCIsIm9mZiIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIndhcm4iLCJkaXNwYXRjaCIsImRhdGEiLCJmb3JFYWNoIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBYTs7QUFFTixTQUFTQSxRQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUM5QixNQUFJ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RURHLE1BQU0sQ0FBQ3ZCLFFBQVAsR0FBa0JBLFFBQWxCLEMiLCJmaWxlIjoianMvY29tbW9uL21lZGlhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vU2l0ZVRyaWtzL1N0YXRpY0ZpbGVzL3NjcmlwdHMvY29tbW9uL21lZGlhdG9yLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhdG9yIChsb2dnZXIpIHtcclxuICAgIGxldCBldmVudHMgPSB7fTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlciwgbmFtZSwgc3Vic2NpYmVyKSB7XHJcbiAgICAgICAgaWYgKCFldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRPRE86IHZhbGlkYXRlIGZvciBzdHJpbmdcclxuICAgICAgICBpZiAoIWV2ZW50IHx8ICFuYW1lIHx8ICFzdWJzY2liZXIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdldmVudCwgbmFtZSBhbmQgc3Vic2NpYmVyIGFyZSByZXF1aXJlZCBmaWVsZHMhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYW5kbGVyIHx8IHt9LnRvU3RyaW5nLmNhbGwoaGFuZGxlcikgIT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBoYW5kbGVyIGZvciAke2V2ZW50fSBieSAke3N1YnNjaWJlcn0gd2l0aCBuYW1lICR7bmFtZX0gbXVzdCBiZSBhIGZ1bmN0aW9uIWApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmb3VuZCA9IGV2ZW50c1tldmVudF0uZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gbmFtZSAmJiBlbGVtZW50LnN1YnNjaWJlciA9PT0gc3Vic2NpYmVyKTtcclxuICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgZm91bmQuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXZlbnRzW2V2ZW50XS5wdXNoKHsgaGFuZGxlciwgbmFtZSwgc3Vic2NpYmVyIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb2ZmKGV2ZW50LCBuYW1lLCBzdWJzY2liZXIpIHtcclxuICAgICAgICBpZiAoIWV2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgZXZlbnRzW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZvdW5kID0gZXZlbnRzW2V2ZW50XS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBuYW1lICYmIGVsZW1lbnQuc3Vic2NpYmVyID09PSBzdWJzY2liZXIpO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBldmVudHNbZXZlbnRdLmluZGV4T2YoZm91bmQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybihgJHtuYW1lfSBoYW5kbGVyIGZyb20gJHtzdWJzY2liZXJ9IHdhcyBub3QgcmVtb3ZlZCBiZWNhdXNlIGl0IHdhcyBub3QgZm91bmQgaW4gcmVnaXN0ZXJlZCBldmVudHMhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGlmICghZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybihgJHtldmVudH0gaXMgbm90IHJlZ2lzdGVyZWQhYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmhhbmRsZXIoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb24sXHJcbiAgICAgICAgb2ZmLFxyXG4gICAgICAgIGRpc3BhdGNoXHJcbiAgICB9O1xyXG59XHJcblxyXG53aW5kb3cuTWVkaWF0b3IgPSBNZWRpYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==