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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/common/mediator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/common/mediator.js":
/*!************************************!*\
  !*** ./scripts/common/mediator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mediator = Mediator;
function Mediator(logger) {
    var events = {};

    function on(event, handler, name, subsciber) {
        if (!events[event]) {
            events[event] = [];
        }

        // TODO: validate for string
        if (!event || !name || !subsciber) {
            logger.error('event, name and subsciber are required fields!');
            return this;
        }

        if (!handler || {}.toString.call(handler) !== '[object Function]') {
            logger.error('handler for ' + event + ' by ' + subsciber + ' with name ' + name + ' must be a function!');
            return this;
        }

        var found = events[event].find(function (element) {
            return element.name === name && element.subsciber === subsciber;
        });
        if (found) {
            found.handler = handler;
        } else {
            events[event].push({ handler: handler, name: name, subsciber: subsciber });
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
            logger.warn(name + ' handler from ' + subsciber + ' was not removed because it was not found in registered events!');
        }

        return this;
    }

    function dispatch(event, data) {
        if (!events[event]) {
            logger.warn(event + ' is not registered!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbWVkaWF0b3IuanMiXSwibmFtZXMiOlsiTWVkaWF0b3IiLCJsb2dnZXIiLCJldmVudHMiLCJvbiIsImV2ZW50IiwiaGFuZGxlciIsIm5hbWUiLCJzdWJzY2liZXIiLCJlcnJvciIsInRvU3RyaW5nIiwiY2FsbCIsImZvdW5kIiwiZmluZCIsImVsZW1lbnQiLCJwdXNoIiwib2ZmIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwid2FybiIsImRpc3BhdGNoIiwiZGF0YSIsImZvckVhY2giLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7Ozs7O1FBRUdBLFEsR0FBQUEsUTtBQUFULFNBQVNBLFFBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQzlCLFFBQUlDLFNBQVMsRUFBYjs7QUFFQSxhQUFTQyxFQUFULENBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCQyxJQUE1QixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDekMsWUFBSSxDQUFDTCxPQUFPRSxLQUFQLENBQUwsRUFBb0I7QUFDaEJGLG1CQUFPRSxLQUFQLElBQWdCLEVBQWhCO0FBQ0g7O0FBRUQ7QUFDQSxZQUFJLENBQUNBLEtBQUQsSUFBVSxDQUFDRSxJQUFYLElBQW1CLENBQUNDLFNBQXhCLEVBQW1DO0FBQy9CTixtQkFBT08sS0FBUCxDQUFhLGdEQUFiO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOztBQUVELFlBQUksQ0FBQ0gsT0FBRCxJQUFZLEdBQUdJLFFBQUgsQ0FBWUMsSUFBWixDQUFpQkwsT0FBakIsTUFBOEIsbUJBQTlDLEVBQW1FO0FBQy9ESixtQkFBT08sS0FBUCxrQkFBNEJKLEtBQTVCLFlBQXdDRyxTQUF4QyxtQkFBK0RELElBQS9EO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOztBQUVELFlBQUlLLFFBQVFULE9BQU9FLEtBQVAsRUFBY1EsSUFBZCxDQUFtQjtBQUFBLG1CQUFXQyxRQUFRUCxJQUFSLEtBQWlCQSxJQUFqQixJQUF5Qk8sUUFBUU4sU0FBUixLQUFzQkEsU0FBMUQ7QUFBQSxTQUFuQixDQUFaO0FBQ0EsWUFBSUksS0FBSixFQUFXO0FBQ1BBLGtCQUFNTixPQUFOLEdBQWdCQSxPQUFoQjtBQUNILFNBRkQsTUFFTztBQUNISCxtQkFBT0UsS0FBUCxFQUFjVSxJQUFkLENBQW1CLEVBQUVULGdCQUFGLEVBQVdDLFVBQVgsRUFBaUJDLG9CQUFqQixFQUFuQjtBQUNIOztBQUVELGVBQU8sSUFBUDtBQUNIOztBQUVELGFBQVNRLEdBQVQsQ0FBYVgsS0FBYixFQUFvQkUsSUFBcEIsRUFBMEJDLFNBQTFCLEVBQXFDO0FBQ2pDLFlBQUksQ0FBQ0wsT0FBT0UsS0FBUCxDQUFMLEVBQW9CO0FBQ2hCRixtQkFBT0UsS0FBUCxJQUFnQixFQUFoQjtBQUNIOztBQUVELFlBQUlPLFFBQVFULE9BQU9FLEtBQVAsRUFBY1EsSUFBZCxDQUFtQjtBQUFBLG1CQUFXQyxRQUFRUCxJQUFSLEtBQWlCQSxJQUFqQixJQUF5Qk8sUUFBUU4sU0FBUixLQUFzQkEsU0FBMUQ7QUFBQSxTQUFuQixDQUFaOztBQUVBLFlBQUlTLFFBQVFkLE9BQU9FLEtBQVAsRUFBY2EsT0FBZCxDQUFzQk4sS0FBdEIsQ0FBWjtBQUNBLFlBQUlLLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ1pkLG1CQUFPRSxLQUFQLEVBQWNjLE1BQWQsQ0FBcUJGLEtBQXJCLEVBQTRCLENBQTVCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hmLG1CQUFPa0IsSUFBUCxDQUFlYixJQUFmLHNCQUFvQ0MsU0FBcEM7QUFDSDs7QUFFRCxlQUFPLElBQVA7QUFDSDs7QUFFRCxhQUFTYSxRQUFULENBQWtCaEIsS0FBbEIsRUFBeUJpQixJQUF6QixFQUErQjtBQUMzQixZQUFJLENBQUNuQixPQUFPRSxLQUFQLENBQUwsRUFBb0I7QUFDaEJILG1CQUFPa0IsSUFBUCxDQUFlZixLQUFmO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOztBQUVERixlQUFPRSxLQUFQLEVBQWNrQixPQUFkLENBQXNCLG1CQUFXO0FBQzdCVCxvQkFBUVIsT0FBUixDQUFnQmdCLElBQWhCO0FBQ0gsU0FGRDs7QUFJQSxlQUFPLElBQVA7QUFDSDs7QUFFRCxXQUFPO0FBQ0hsQixjQURHO0FBRUhZLGdCQUZHO0FBR0hLO0FBSEcsS0FBUDtBQUtIOztBQUVERyxPQUFPdkIsUUFBUCxHQUFrQkEsUUFBbEIsQyIsImZpbGUiOiJqcy9jb21tb24vbWVkaWF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL2NvbW1vbi9tZWRpYXRvci5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNZWRpYXRvciAobG9nZ2VyKSB7XHJcbiAgICBsZXQgZXZlbnRzID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGhhbmRsZXIsIG5hbWUsIHN1YnNjaWJlcikge1xyXG4gICAgICAgIGlmICghZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBldmVudHNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiB2YWxpZGF0ZSBmb3Igc3RyaW5nXHJcbiAgICAgICAgaWYgKCFldmVudCB8fCAhbmFtZSB8fCAhc3Vic2NpYmVyKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignZXZlbnQsIG5hbWUgYW5kIHN1YnNjaWJlciBhcmUgcmVxdWlyZWQgZmllbGRzIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGFuZGxlciB8fCB7fS50b1N0cmluZy5jYWxsKGhhbmRsZXIpICE9PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgaGFuZGxlciBmb3IgJHtldmVudH0gYnkgJHtzdWJzY2liZXJ9IHdpdGggbmFtZSAke25hbWV9IG11c3QgYmUgYSBmdW5jdGlvbiFgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZm91bmQgPSBldmVudHNbZXZlbnRdLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IG5hbWUgJiYgZWxlbWVudC5zdWJzY2liZXIgPT09IHN1YnNjaWJlcik7XHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgIGZvdW5kLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tldmVudF0ucHVzaCh7IGhhbmRsZXIsIG5hbWUsIHN1YnNjaWJlciB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9mZihldmVudCwgbmFtZSwgc3Vic2NpYmVyKSB7XHJcbiAgICAgICAgaWYgKCFldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmb3VuZCA9IGV2ZW50c1tldmVudF0uZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gbmFtZSAmJiBlbGVtZW50LnN1YnNjaWJlciA9PT0gc3Vic2NpYmVyKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gZXZlbnRzW2V2ZW50XS5pbmRleE9mKGZvdW5kKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBldmVudHNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oYCR7bmFtZX0gaGFuZGxlciBmcm9tICR7c3Vic2NpYmVyfSB3YXMgbm90IHJlbW92ZWQgYmVjYXVzZSBpdCB3YXMgbm90IGZvdW5kIGluIHJlZ2lzdGVyZWQgZXZlbnRzIWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGF0Y2goZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBpZiAoIWV2ZW50c1tldmVudF0pIHtcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oYCR7ZXZlbnR9IGlzIG5vdCByZWdpc3RlcmVkIWApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50c1tldmVudF0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5oYW5kbGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9uLFxyXG4gICAgICAgIG9mZixcclxuICAgICAgICBkaXNwYXRjaFxyXG4gICAgfTtcclxufVxyXG5cclxud2luZG93Lk1lZGlhdG9yID0gTWVkaWF0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=