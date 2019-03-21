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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/sitetriks/layout.js":
/*!*************************************!*\
  !*** ./scripts/sitetriks/layout.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals prettify */

function mobileMenu() {
    $('.with-dd').on('click', '.dropdown-toggle', function () {

        var $buttons = $('.caret-mobile');
        $buttons.each(function (_, caret) {
            return caret.classList.remove('caret-mobile-down');
        });

        var $arrow = $(this).find('.caret-mobile');

        if ($(this).attr('aria-expanded') === 'false' || $(this).attr('aria-expanded') === undefined) {
            $arrow.addClass('caret-mobile-down');
        } else if ($(this).attr('aria-expanded') === 'true') {
            $arrow.removeClass('caret-mobile-down');
        }
    });
}

function hamburgerMenu() {
    var clicked = false;
    var hamburgerExpand = '/images/mobile-backend/shrink-mobile-menu.gif';
    var hamburgerCompress = '/images//mobile-backend/expand-mobile-menu.gif';

    $('.navbar-toggle').click(function (ev) {
        if ($(':animated').length) {
            return false;
        }

        if (!clicked) {
            $('.hamburger-image').attr('src', hamburgerCompress);
            clicked = true;
            $('.st-body-content').addClass('hidden-nested-divs');
            $('body').css('background-color', '#3876cf');
        } else {
            $('.hamburger-image').attr('src', hamburgerExpand);
            clicked = false;
            $('.st-body-content').removeClass('hidden-nested-divs');
            $('body').css('background-color', 'unset');
        }
    });
}

function loadMainLayout() {
    var $window = $(window);

    var lock = false;
    var animateWidth;
    var $btnAccount = $('.login-partial-loged .btn-account'); // login, register, logout 'buttons'

    $('.nav-logo-secondary a').on('click', function () {
        if ($btnAccount.css('color') === 'rgb(234, 234, 234)') {
            $btnAccount.css('color', 'transparent');
        }

        lock = true;
        $('.nav-logo-secondary a img').attr('src', '/images/spinner.gif');
        var width = '60px';
        var windowWidth = $window.width();
        if (windowWidth < 1000) {
            width = '50px';
        }

        if (windowWidth < 800) {
            width = '50px';
        }

        animateWidth = $('.navbar-right').css('width') === '0px' ? width : '0px';

        if ($('.navbar-right').is(':animated')) {
            return false;
        }

        $('.navbar-right').animate({ width: animateWidth }, 500, function () {
            $btnAccount.css('color', '#EAEAEA');
            $('.nav-logo-secondary a img').attr('src', '/images/Sitetriks_logo2.png');
            lock = false;

            $btnAccount.toggle();
        });
    });

    $('.nav-logo-secondary').on('mouseenter', function () {
        if (!lock) {
            $('.nav-logo-secondary a img').attr('src', '/images/spinner.gif');
        }
    });

    $('.nav-logo-secondary').on('mouseleave', function () {
        if (!lock) {
            $('.nav-logo-secondary a img').attr('src', '/images/Sitetriks_logo2.png');
        }
    });

    $window.on('scroll resize', resizeSecondNavigation);
    $window.trigger('scroll');

    function resizeSecondNavigation() {
        var scrollPosition = $window.scrollTop();
        var breakpoint = 30;

        $.each($('.fixed-top-2'), function () {
            var $element = $(this);

            if (scrollPosition > breakpoint) {
                $element.addClass('small');
            } else {
                $element.removeClass('small');
            }
        });

        var $sideNavigationTree = $('.side-nav-collapse');
        if (scrollPosition > breakpoint) {
            $sideNavigationTree.addClass('small');
        } else {
            $sideNavigationTree.removeClass('small');
        }
    }

    // Fixing the focus when using modal with TinyMC
    $(document).on('focusin', function (e) {
        if ($(e.target).closest('.mce-window').length) {
            e.stopImmediatePropagation();
        }
    });

    $('body').on('mouseenter', '.side-nav-collapse', function (ev) {
        $(this).find('.side-navigation-tree').scrollTop(0);
    });
}

function multiSitePopup() {
    var $container = $('.sitetriks-body');
    var $multisiteSelect = $container.find('.multisite-select-wrapper');

    function displayMultiSite() {
        $multisiteSelect.show();
    }

    function hideMultisite() {
        $multisiteSelect.hide();
    }

    $container.on('click', '.selected-site', displayMultiSite);
    $multisiteSelect.on('click', '.glyphicon-remove', hideMultisite);
}

$(document).ready(function () {
    if ($('.prettyprint').length > 0) {
        prettify();
    }

    multiSitePopup();
    loadMainLayout();

    //Mobile menu logic
    mobileMenu();

    /* Hamburger menu */
    hamburgerMenu();

    // permission 
    $('#allowed-roles').parent().hide();
    $('#allowed-groups').parent().hide();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zaXRldHJpa3MvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIm1vYmlsZU1lbnUiLCIkIiwib24iLCIkYnV0dG9ucyIsImVhY2giLCJfIiwiY2FyZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCIkYXJyb3ciLCJmaW5kIiwiYXR0ciIsInVuZGVmaW5lZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYW1idXJnZXJNZW51IiwiY2xpY2tlZCIsImhhbWJ1cmdlckV4cGFuZCIsImhhbWJ1cmdlckNvbXByZXNzIiwiY2xpY2siLCJldiIsImxlbmd0aCIsImNzcyIsImxvYWRNYWluTGF5b3V0IiwiJHdpbmRvdyIsIndpbmRvdyIsImxvY2siLCJhbmltYXRlV2lkdGgiLCIkYnRuQWNjb3VudCIsIndpZHRoIiwid2luZG93V2lkdGgiLCJpcyIsImFuaW1hdGUiLCJ0b2dnbGUiLCJyZXNpemVTZWNvbmROYXZpZ2F0aW9uIiwidHJpZ2dlciIsInNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG9wIiwiYnJlYWtwb2ludCIsIiRlbGVtZW50IiwiJHNpZGVOYXZpZ2F0aW9uVHJlZSIsImRvY3VtZW50IiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtdWx0aVNpdGVQb3B1cCIsIiRjb250YWluZXIiLCIkbXVsdGlzaXRlU2VsZWN0IiwiZGlzcGxheU11bHRpU2l0ZSIsInNob3ciLCJoaWRlTXVsdGlzaXRlIiwiaGlkZSIsInJlYWR5IiwicHJldHRpZnkiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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LEVBQXNDMkIsU0FBdEMsQ0FBZ0QsQ0FBaEQ7QUFDSCxLQUZEO0FBR0g7O0FBRUQsU0FBU1MsY0FBVCxHQUEwQjtBQUN0QixRQUFJQyxhQUFhOUMsRUFBRSxpQkFBRixDQUFqQjtBQUNBLFFBQUkrQyxtQkFBbUJELFdBQVdyQyxJQUFYLENBQWdCLDJCQUFoQixDQUF2Qjs7QUFFQSxhQUFTdUMsZ0JBQVQsR0FBNEI7QUFDeEJELHlCQUFpQkUsSUFBakI7QUFDSDs7QUFFRCxhQUFTQyxhQUFULEdBQXlCO0FBQ3JCSCx5QkFBaUJJLElBQWpCO0FBQ0g7O0FBRURMLGVBQVc3QyxFQUFYLENBQWMsT0FBZCxFQUF1QixnQkFBdkIsRUFBeUMrQyxnQkFBekM7QUFDQUQscUJBQWlCOUMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsbUJBQTdCLEVBQWtEaUQsYUFBbEQ7QUFDSDs7QUFFRGxELEVBQUV3QyxRQUFGLEVBQVlZLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixRQUFJcEQsRUFBRSxjQUFGLEVBQWtCb0IsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUJpQztBQUNIOztBQUVEUjtBQUNBdkI7O0FBRUE7QUFDQXZCOztBQUVBO0FBQ0FlOztBQUVBO0FBQ0FkLE1BQUUsZ0JBQUYsRUFBb0JzRCxNQUFwQixHQUE2QkgsSUFBN0I7QUFDQW5ELE1BQUUsaUJBQUYsRUFBcUJzRCxNQUFyQixHQUE4QkgsSUFBOUI7QUFDSCxDQWpCRCxFIiwiZmlsZSI6ImpzL3NpdGV0cmlrcy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL3NpdGV0cmlrcy9sYXlvdXQuanNcIik7XG4iLCIvKiBnbG9iYWxzIHByZXR0aWZ5ICovXHJcblxyXG5mdW5jdGlvbiBtb2JpbGVNZW51KCkge1xyXG4gICAgJCgnLndpdGgtZGQnKS5vbignY2xpY2snLCAnLmRyb3Bkb3duLXRvZ2dsZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0ICRidXR0b25zID0gJCgnLmNhcmV0LW1vYmlsZScpO1xyXG4gICAgICAgICRidXR0b25zLmVhY2goKF8sIGNhcmV0KSA9PiBjYXJldC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJldC1tb2JpbGUtZG93bicpKTtcclxuXHJcbiAgICAgICAgbGV0ICRhcnJvdyA9ICQodGhpcykuZmluZCgnLmNhcmV0LW1vYmlsZScpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScgfHwgJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAkYXJyb3cuYWRkQ2xhc3MoJ2NhcmV0LW1vYmlsZS1kb3duJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICRhcnJvdy5yZW1vdmVDbGFzcygnY2FyZXQtbW9iaWxlLWRvd24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFtYnVyZ2VyTWVudSgpIHtcclxuICAgIHZhciBjbGlja2VkID0gZmFsc2U7XHJcbiAgICB2YXIgaGFtYnVyZ2VyRXhwYW5kID0gJy9pbWFnZXMvbW9iaWxlLWJhY2tlbmQvc2hyaW5rLW1vYmlsZS1tZW51LmdpZic7XHJcbiAgICB2YXIgaGFtYnVyZ2VyQ29tcHJlc3MgPSAnL2ltYWdlcy8vbW9iaWxlLWJhY2tlbmQvZXhwYW5kLW1vYmlsZS1tZW51LmdpZic7XHJcblxyXG4gICAgJCgnLm5hdmJhci10b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpZiAoJCgnOmFuaW1hdGVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2xpY2tlZCkge1xyXG4gICAgICAgICAgICAkKCcuaGFtYnVyZ2VyLWltYWdlJykuYXR0cignc3JjJywgaGFtYnVyZ2VyQ29tcHJlc3MpO1xyXG4gICAgICAgICAgICBjbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgJCgnLnN0LWJvZHktY29udGVudCcpLmFkZENsYXNzKCdoaWRkZW4tbmVzdGVkLWRpdnMnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjMzg3NmNmJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5oYW1idXJnZXItaW1hZ2UnKS5hdHRyKCdzcmMnLCBoYW1idXJnZXJFeHBhbmQpO1xyXG4gICAgICAgICAgICBjbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQoJy5zdC1ib2R5LWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZGVuLW5lc3RlZC1kaXZzJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAndW5zZXQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1haW5MYXlvdXQoKSB7XHJcbiAgICBsZXQgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcbiAgICB2YXIgbG9jayA9IGZhbHNlO1xyXG4gICAgdmFyIGFuaW1hdGVXaWR0aDtcclxuICAgIGxldCAkYnRuQWNjb3VudCA9ICQoJy5sb2dpbi1wYXJ0aWFsLWxvZ2VkIC5idG4tYWNjb3VudCcpOyAvLyBsb2dpbiwgcmVnaXN0ZXIsIGxvZ291dCAnYnV0dG9ucydcclxuXHJcbiAgICAkKCcubmF2LWxvZ28tc2Vjb25kYXJ5IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCRidG5BY2NvdW50LmNzcygnY29sb3InKSA9PT0gJ3JnYigyMzQsIDIzNCwgMjM0KScpIHtcclxuICAgICAgICAgICAgJGJ0bkFjY291bnQuY3NzKCdjb2xvcicsICd0cmFuc3BhcmVudCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9jayA9IHRydWU7XHJcbiAgICAgICAgJCgnLm5hdi1sb2dvLXNlY29uZGFyeSBhIGltZycpLmF0dHIoJ3NyYycsICcvaW1hZ2VzL3NwaW5uZXIuZ2lmJyk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gJzYwcHgnO1xyXG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcclxuICAgICAgICBpZiAod2luZG93V2lkdGggPCAxMDAwKSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDwgODAwKSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYW5pbWF0ZVdpZHRoID0gJCgnLm5hdmJhci1yaWdodCcpLmNzcygnd2lkdGgnKSA9PT0gJzBweCcgPyB3aWR0aCA6ICcwcHgnO1xyXG5cclxuICAgICAgICBpZiAoJCgnLm5hdmJhci1yaWdodCcpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyLXJpZ2h0JykuYW5pbWF0ZSh7IHdpZHRoOiBhbmltYXRlV2lkdGggfSwgNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRidG5BY2NvdW50LmNzcygnY29sb3InLCAnI0VBRUFFQScpO1xyXG4gICAgICAgICAgICAkKCcubmF2LWxvZ28tc2Vjb25kYXJ5IGEgaW1nJykuYXR0cignc3JjJywgJy9pbWFnZXMvU2l0ZXRyaWtzX2xvZ28yLnBuZycpO1xyXG4gICAgICAgICAgICBsb2NrID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkYnRuQWNjb3VudC50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubmF2LWxvZ28tc2Vjb25kYXJ5Jykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFsb2NrKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXYtbG9nby1zZWNvbmRhcnkgYSBpbWcnKS5hdHRyKCdzcmMnLCAnL2ltYWdlcy9zcGlubmVyLmdpZicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5uYXYtbG9nby1zZWNvbmRhcnknKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWxvY2spIHtcclxuICAgICAgICAgICAgJCgnLm5hdi1sb2dvLXNlY29uZGFyeSBhIGltZycpLmF0dHIoJ3NyYycsICcvaW1hZ2VzL1NpdGV0cmlrc19sb2dvMi5wbmcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKCdzY3JvbGwgcmVzaXplJywgcmVzaXplU2Vjb25kTmF2aWdhdGlvbik7XHJcbiAgICAkd2luZG93LnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZVNlY29uZE5hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuICAgICAgICBsZXQgYnJlYWtwb2ludCA9IDMwO1xyXG5cclxuICAgICAgICAkLmVhY2goJCgnLmZpeGVkLXRvcC0yJyksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKCdzbWFsbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3NtYWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRzaWRlTmF2aWdhdGlvblRyZWUgPSAkKCcuc2lkZS1uYXYtY29sbGFwc2UnKTtcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiBicmVha3BvaW50KSB7XHJcbiAgICAgICAgICAgICRzaWRlTmF2aWdhdGlvblRyZWUuYWRkQ2xhc3MoJ3NtYWxsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNpZGVOYXZpZ2F0aW9uVHJlZS5yZW1vdmVDbGFzcygnc21hbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRml4aW5nIHRoZSBmb2N1cyB3aGVuIHVzaW5nIG1vZGFsIHdpdGggVGlueU1DXHJcbiAgICAkKGRvY3VtZW50KS5vbignZm9jdXNpbicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tY2Utd2luZG93JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy5zaWRlLW5hdi1jb2xsYXBzZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLnNpZGUtbmF2aWdhdGlvbi10cmVlJykuc2Nyb2xsVG9wKDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG11bHRpU2l0ZVBvcHVwKCkge1xyXG4gICAgdmFyICRjb250YWluZXIgPSAkKCcuc2l0ZXRyaWtzLWJvZHknKTtcclxuICAgIHZhciAkbXVsdGlzaXRlU2VsZWN0ID0gJGNvbnRhaW5lci5maW5kKCcubXVsdGlzaXRlLXNlbGVjdC13cmFwcGVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheU11bHRpU2l0ZSgpIHtcclxuICAgICAgICAkbXVsdGlzaXRlU2VsZWN0LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlTXVsdGlzaXRlKCkge1xyXG4gICAgICAgICRtdWx0aXNpdGVTZWxlY3QuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgICRjb250YWluZXIub24oJ2NsaWNrJywgJy5zZWxlY3RlZC1zaXRlJywgZGlzcGxheU11bHRpU2l0ZSk7XHJcbiAgICAkbXVsdGlzaXRlU2VsZWN0Lm9uKCdjbGljaycsICcuZ2x5cGhpY29uLXJlbW92ZScsIGhpZGVNdWx0aXNpdGUpO1xyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnLnByZXR0eXByaW50JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHByZXR0aWZ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlTaXRlUG9wdXAoKTtcclxuICAgIGxvYWRNYWluTGF5b3V0KCk7XHJcblxyXG4gICAgLy9Nb2JpbGUgbWVudSBsb2dpY1xyXG4gICAgbW9iaWxlTWVudSgpO1xyXG5cclxuICAgIC8qIEhhbWJ1cmdlciBtZW51ICovXHJcbiAgICBoYW1idXJnZXJNZW51KCk7XHJcblxyXG4gICAgLy8gcGVybWlzc2lvbiBcclxuICAgICQoJyNhbGxvd2VkLXJvbGVzJykucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgJCgnI2FsbG93ZWQtZ3JvdXBzJykucGFyZW50KCkuaGlkZSgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==