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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/home-page.js");
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

/***/ "./scripts/home-page.js":
/*!******************************!*\
  !*** ./scripts/home-page.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ./common/loader.js */ "./scripts/common/loader.js");

/* Desktop */

var homepageDesktopFuncTionality = function () {

    var resizeBlueNavbar = function resizeBlueNavbar() {
        var scrollBottom = $(window).scrollTop() + $(window).height();

        if ($(this).scrollTop() >= 100) {
            $('.header-blue').css('height', '0px').css('transition', 'height 1s').css('.-webkit-transition', 'height 1s');
        }

        if ($(this).scrollTop() <= 80) {
            $('.header-blue').css('height', '40px').css('transition', 'height .25s');
        }
    };

    var leafImageToggle = function leafImageToggle() {
        $('.letter-2').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
            $('.leaf-button-1').css('display', 'inline-block');
            $('.close-menu').css('display', 'inline-block').click();
        });

        $('.leaf-button-2').on('click', function () {
            $('html').addClass('st-no-overflow');
        });
    };

    var drawSnowflakeGlobal = function () {

        var LineIndex = 0;
        var circleIndex = 0;
        var index = 0;

        function addLine(selector, lines, customClass) {
            var parent = $(selector);
            var lines = GetLine(3, lines, 'diamondLine');

            for (var i = 0; i < lines.length; i++) {
                lines[i].addClass(customClass);
                parent.append(lines[i]);
            }

            $('.diamondLine').hover(function () {
                for (var i = 0; i < lines.length; i++) {
                    lines[i].addClass('hover');
                }
            }, function () {
                for (var i = 0; i < lines.length; i++) {
                    lines[i].removeClass('hover');
                }
            });

            for (var i = 0; i < lines.length; i++) {
                parent.append(lines[i]);
            }
        }

        function addElement(height, width, angle, ratioOfRadius, selector, text, lines, parentDevider, maxRadius, customClass) {

            var parent = $(selector);
            var angleInRad = DegreesToRad(angle);
            var customClass = customClass || 'default-icon-class';
            var radius = maxRadius * ratioOfRadius;
            var top = maxRadius - Math.sin(angleInRad) * radius - height / 2;
            var left = maxRadius + Math.cos(angleInRad) * radius - height / 2;

            var element = $('<div>').addClass('element').addClass(customClass).css('width', width).css('height', height).css('top', top).css('left', left).html(text);

            element.attr('data-index', index);

            index++;

            var lines = GetLine(3, lines, 'line');

            for (var i = 0; i < lines.length; i++) {
                parent.append(lines[i]);
            }

            $(element).hover(function () {

                for (var i = 0; i < lines.length; i++) {
                    $('.logo-center').css('z-index', '1046');
                    lines[i].addClass('hover');
                }
            }, function () {
                for (var i = 0; i < lines.length; i++) {
                    lines[i].removeClass('hover');
                }
            });

            parent.append(element);

            for (var i = 0; i < lines.length; i++) {
                parent.append(lines[i]);
            }
        }

        function DegreesToRad(angle) {
            return angle / 180 * Math.PI;
        }

        function RadToDegree(rad) {
            return rad / Math.PI * 180;
        }

        function GetLine(width, points, customClass) {
            var segments = [];

            for (var i = 0; i < points.length; i += 1) {
                var startPoint = points[i];
                var endPoint = points[i + 1];

                var lenght = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
                var angle = RadToDegree(Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x)) - 90;

                var shadow = '';

                if ((angle == 45 || angle > -47 && angle < -43 || angle == 315) && customClass === 'line') {
                    shadow = '0 3px 5px #c8d0d4';
                } else if (angle >= -230 && angle < -200 && customClass === 'line') {
                    // rule for 10: 30 and 11 oclock
                    shadow = '1px 0 5px #c8d0d4';
                } else if ((angle == 90 || angle >= 40 && angle < 50 || angle == 0) && customClass === 'line') {
                    shadow = '3px 0 5px #c8d0d4';
                } else if (angle > 90 && angle < 270 && customClass === 'line') {
                    shadow = '3px 0 5px #c8d0d4';
                } else if ((angle <= 90 || angle >= 270) && customClass === 'line') {
                    shadow = '-3px 0 5px #c8d0d4';
                }

                var line = $('<div>').addClass(customClass)
                // .addClass('line' + LineIndex)            
                .css('height', lenght).css('width', width).css('top', startPoint.y).css('left', startPoint.x).css('transform', 'rotate(' + angle + 'deg)').css('transform-origin', '50% 0%').css('box-shadow', shadow);
                segments.push(line);

                LineIndex++;

                if (i + 1 == points.length - 1) {
                    break;
                }
            }

            return segments;
        }

        function radialToXY(r, angle, centerX, centerY) {

            var angleInRad = DegreesToRad(angle);

            var top = centerY - Math.sin(angleInRad) * r;
            var left = centerX + Math.cos(angleInRad) * r;

            return {
                x: left,
                y: top
            };
        }

        var drawSnowflake = function drawSnowflake(halfwidth, elementSizeBase, parentDevider) {
            index = 0;

            var twelveOclock = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.50 * halfwidth, 90, halfwidth, halfwidth)];

            var oneThirty = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, 45, halfwidth, halfwidth)];

            var threeOclock = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.55 * halfwidth, 0, halfwidth, halfwidth)];

            var fourThirty = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, -45, halfwidth, halfwidth)];

            var sixOclock = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.75 * halfwidth, -90, halfwidth, halfwidth)];

            var sevenThirty = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, -135, halfwidth, halfwidth)];

            var nineOclock = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.55 * halfwidth, 180, halfwidth, halfwidth)];

            var tenThirty = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, 135, halfwidth, halfwidth)];

            // smaller lines
            var two = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.3 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, 20, halfwidth, halfwidth)];

            var four = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.3 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, -20, halfwidth, halfwidth)];

            var ten = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.3 * halfwidth, 180, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, 160, halfwidth, halfwidth)];

            var eight = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.3 * halfwidth, 180, halfwidth, halfwidth), radialToXY(0.5 * halfwidth, 200, halfwidth, halfwidth)];

            var eleven = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.25 * halfwidth, 90, halfwidth, halfwidth), radialToXY(0.47 * halfwidth, 113, halfwidth, halfwidth)];

            var one = [radialToXY(0 * halfwidth, 0, halfwidth, halfwidth), radialToXY(0.25 * halfwidth, 90, halfwidth, halfwidth), radialToXY(0.47 * halfwidth, 66, halfwidth, halfwidth)];

            addElement(0.7 * elementSizeBase, 0.8 * elementSizeBase * 3, 109, 0.7, '.dandelion-menu', 'environment sync', twelveOclock, parentDevider, halfwidth, 'environment_sync'); //12
            addElement(0.5 * elementSizeBase, 0.4 * elementSizeBase * 3, 100, 0.6, '.dandelion-menu', 'instance manager', twelveOclock, parentDevider, halfwidth, 'instance_manager'); //12

            addElement(0.9 * elementSizeBase, 0.9 * elementSizeBase * 3, 45, 0.75, '.dandelion-menu', 'import tool' + '</br>' + '(Sitefinity content)', one, parentDevider, halfwidth, 'import_tool'); // 1
            addElement(0.5 * elementSizeBase, 0.5 * elementSizeBase * 3, 70, 0.52, '.dandelion-menu', '1-click installation', one, parentDevider, halfwidth, 'click_installation'); // 1

            addElement(0.8 * elementSizeBase, 0.8 * elementSizeBase * 3, 25, 0.8, '.dandelion-menu', 'version control (revision history)', oneThirty, parentDevider, halfwidth, 'version_control'); // 1.5
            addElement(0.5 * elementSizeBase, 0.5 * elementSizeBase * 3, 35, 0.5, '.dandelion-menu', 'scheduled publishing', oneThirty, parentDevider, halfwidth, 'scheduled_publishing'); // 1.5

            addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, 8, 0.95, '.dandelion-menu', 'auto sitemap', two, parentDevider, halfwidth, 'auto_sitemap'); // 2

            addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -3, 0.94, '.dandelion-menu', 'multilingual', threeOclock, parentDevider, halfwidth, 'multilingual'); // 3
            addElement(0.5 * elementSizeBase, 0.5 * elementSizeBase * 3, 1, 0.6, '.dandelion-menu', 'thumbnail generation', threeOclock, parentDevider, halfwidth, 'thumbnail_generation'); // 3

            addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -17, 0.8, '.dandelion-menu', 'forums', four, parentDevider, halfwidth, 'forums'); // 4
            addElement(0.5 * elementSizeBase, 0.4 * elementSizeBase * 3, -21, 0.6, '.dandelion-menu', 'seo optimised', four, parentDevider, halfwidth, 'seo_optimised'); // 4

            addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -36, 0.8, '.dandelion-menu', 'modular', fourThirty, parentDevider, halfwidth, 'modular'); // 4.5
            addElement(0.5 * elementSizeBase, 0.3 * elementSizeBase * 3, -51, 0.57, '.dandelion-menu', 'rtl support', fourThirty, parentDevider, halfwidth, 'rtl_support'); // 4.5

            addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -155, 1.1, '.dandelion-menu', 'blogs', sevenThirty, parentDevider, halfwidth, 'blogs'); // 7.5
            addElement(0.5 * elementSizeBase, 0.5 * elementSizeBase * 3, -140, 0.7, '.dandelion-menu', 'multi-device layout builder', sevenThirty, parentDevider, halfwidth, 'layout_builder'); // 7.5

            addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -167, 1.2, '.dandelion-menu', 'tagging', eight, parentDevider, halfwidth, 'tagging'); // 8
            addElement(0.4 * elementSizeBase, 0.4 * elementSizeBase * 3, -165, 0.8, '.dandelion-menu', 'granular permissions', eight, parentDevider, halfwidth, 'granular_permissions'); // 8

            addElement(0.6 * elementSizeBase, 0.7 * elementSizeBase * 3, -178, 1.3, '.dandelion-menu', 'dynamic content', nineOclock, parentDevider, halfwidth, 'dynamic_content'); // 9
            addElement(0.5 * elementSizeBase, 0.4 * elementSizeBase * 3, -180, 0.8, '.dandelion-menu', 'image tracking', nineOclock, parentDevider, halfwidth, 'image_tracking'); // 9

            addElement(0.7 * elementSizeBase, 0.9 * elementSizeBase * 3, -185, 1.4, '.dandelion-menu', 'multisite management', ten, parentDevider, halfwidth, 'multisite_management'); // 10

            addElement(0.5 * elementSizeBase, 0.6 * elementSizeBase * 3, 161, 1.2, '.dandelion-menu', 'personalization', tenThirty, parentDevider, halfwidth, 'personalization'); // 10.5
            addElement(0.5 * elementSizeBase, 0.6 * elementSizeBase * 3, 160, 0.8, '.dandelion-menu', 'cdn integrations azure-amazon', tenThirty, parentDevider, halfwidth, 'cdn_integrations'); // 10.5

            addElement(0.7 * elementSizeBase, 0.9 * elementSizeBase * 3, 150, 1.1, '.dandelion-menu', 'search ' + '</br>' + '(Google integration)', eleven, parentDevider, halfwidth, 'google_integration'); // 11
            addElement(0.5 * elementSizeBase, 0.4 * elementSizeBase * 3, 131, .62, '.dandelion-menu', 'widget tracking', eleven, parentDevider, halfwidth, 'widget_tracking'); // 11

            addLine('.dandelion-menu', sixOclock, 'sixOclock'); // 6
            addElement(80, 80, 180, 0, '.dandelion-menu', '<div class="logo-center"><img src="../../images/Sitetriks_logo.svg" alt="logo" style="width: 80px; height: 80px; padding-left:2px; margin-top:2px;"></div>', [], parentDevider, halfwidth); // 11
        };

        return {
            drawSnowflake: drawSnowflake
        };
    }();

    var redrawSnowflakeGlobal = function () {

        var wrapperHalfWidth;
        var state = -1;

        var reDrawSnowflake = function reDrawSnowflake() {
            var windowWidth = $(window).width();
            var containerHalfWidth = void 0;

            if (windowWidth >= 2880) {
                $('.dandelion-menu').html('');
                $('.dandelion-menu').css('height', '1225px').css('width', '1402px');
                drawSnowflakeGlobal.drawSnowflake(700, 175, 2);
                state = 3;
            } else if (windowWidth > 1280 && windowWidth < 2880 && !(state == 0)) {
                $('.dandelion-menu').html('');
                $('.dandelion-menu').css('height', '700px').css('width', '802px');
                drawSnowflakeGlobal.drawSnowflake(400, 100, 2);
                state = 0;
            } else if (windowWidth <= 1280 && windowWidth > 993 && !(state == 1)) {
                $('.dandelion-menu').html('');
                $('.dandelion-menu').css('height', '525px').css('width', '602px');
                drawSnowflakeGlobal.drawSnowflake(300, 70, 2.5);
                state = 1;
            } else if (windowWidth <= 992 && !(state == 2)) {
                $('.dandelion-menu').html('');
                $('.dandelion-menu').css('height', '437px').css('width', '502px');
                drawSnowflakeGlobal.drawSnowflake(250, 70, 5);
                state = 2;
            }
        };

        return {
            reDrawSnowflake: reDrawSnowflake
        };
    }();

    var moveToMiddleMenuIcon = function moveToMiddleMenuIcon() {

        var $dandelionMenu = $('.dandelion-menu');
        $dandelionMenu.on('click', '.element', moveToIcon);

        function scrollcb(target) {
            var targetclass = target.className.split(' ')[1];
            // find the corresponding element
            var $targetIcon = void 0;
            //  $targetIcon = $(`#${targetclass}`);

            $targetIcon = $('#' + targetclass);
            var scrollDistance = $targetIcon.offset().top - 125;

            // scroll to the element
            $('html,body').animate({
                scrollTop: scrollDistance
            }, 'slow');
        }

        function moveToIcon(e) {
            var target = e.target;

            if (!$('.more-items').hasClass('more-clicked')) {
                $('.more-items').unbind().trigger('click');
                setTimeout(function () {
                    scrollcb(target);
                }, 500);
            } else {
                scrollcb(target);
            }
        }
    };

    return {
        leafImageToggle: leafImageToggle,
        resizeBlueNavbar: resizeBlueNavbar,
        moveToMiddleMenuIcon: moveToMiddleMenuIcon,
        redrawSnowflakeGlobal: redrawSnowflakeGlobal
    };
}();

/* Mobile */

var mobileMenuFunctionality = function () {

    var clicked = false;
    var hamburgerCompress = 'https://sitetriks.azureedge.net/static-files/images/mobile/Compress.gif';
    var hamburgerExpand = 'https://sitetriks.azureedge.net/static-files/images/mobile/Expand.gif';
    var logoDark = 'https://sitetriks.azureedge.net/static-files/images/mobile/LOGO_mob.svg';
    var logoWhite = 'https://sitetriks.azureedge.net/static-files/images/mobile/LOGO_mob_w.svg';
    var selectedSection = '<div class="col col-xs-12"><div class="selected-feature" id="static-section"><div class="feature-content"></div></div></div>';

    var $detailedMenuItem = $('.wrapper-menu-items');
    var $mainDropdown = $('#middle-box');
    var $advanatagesDropdown = $('.advantages-block');
    var $technologyDropdown = $('.technology-block');
    var $mobileViewTopMenu = $('#mobile-view-top-menu');
    var $mobileMenuIcon = $mobileViewTopMenu.find('.menu-icon');
    var windowWidth = $(window).width();

    var closeMobileMenu = function closeMobileMenu() {
        $('#mobile-view-top-menu').slideUp('slow');
        $('.hamburger-image').attr('src', hamburgerExpand);
        setTimeout(function () {
            $('.logo-mobile-image').attr('src', logoDark);
            $('.logo-container-mobile').css('background-color', 'white');
        }, 800);
        $('.hidden-by-menu').css('display', 'block');
    };

    var expandMobileMenu = function expandMobileMenu() {
        $('#mobile-view-top-menu').slideDown('slow');
        $('.hamburger-image').attr('src', hamburgerCompress);
        setTimeout(function () {
            $('.logo-mobile-image').attr('src', logoWhite);
            $('.logo-container-mobile').css('background-color', '#123e7a');
        }, 800);
        if (windowWidth < 768) {
            $('.hidden-by-menu').css('display', 'none');
        }
    };

    var changeSlogan = function changeSlogan() {
        if (windowWidth < 768) {
            $('.entreprice-description').text('(Basic license available)');
            $('#middle-box .arrows').css('display', 'inline-block');
        } else if (windowWidth >= 768) {
            $('.entreprice-description').text('Available with SiteTriks\'s basic license.');
            $('#middle-box .arrows').css('display', 'none');
        }
    };

    var toggleDetailedMenu = function toggleDetailedMenu() {
        $mainDropdown.click(function () {
            $detailedMenuItem.toggle();
            $('.main-arrows').toggle();
        });
    };

    var slideUpDownMenu = function slideUpDownMenu() {
        $('#hamburger-menu img').click(function (ev) {
            if ($(':animated').length) {
                return false;
            }
            if (clicked == false) {
                expandMobileMenu();
                clicked = true;
            } else if (clicked == true) {
                closeMobileMenu();
                clicked = false;
            }
        });
    };

    /* Technology and advantages */
    var advantagesToggle = function advantagesToggle() {
        $advanatagesDropdown.click(function () {
            $('.bullets').toggle();
            $('.dropdownOne-advantage').toggle();
        });
    };

    var technologyListToggle = function technologyListToggle() {
        $technologyDropdown.click(function () {
            $('.technology-links').toggle();
            $('.dropdownOne-tech').toggle();
        });
    };

    var enterpriseFeaturesMenu = function enterpriseFeaturesMenu() {
        $('.wrapper-menu-items').on('click', $('.item-header'), function (event) {
            var button = $(event.target);
            //$('.item-arrow').toggle();
            if (!button.hasClass('item-header')) {
                button = button.parents('.item-header');
            }

            button.toggleClass('whiteText');
            button.next().toggle();
            button.children('img').toggle();
        });
    };

    var mobileIconSelect = function mobileIconSelect() {
        $('#mobile-view-top-menu').on('click', '.menu-icon', function (event) {
            var $button = $(event.target);

            if (!$button.hasClass('menu-icon')) {
                $button = $button.parents('.menu-icon');
            }
            $('#static-section').remove();
            if ($button.hasClass('active')) {
                $button.removeClass('active');
            } else if (!$button.hasClass('active')) {
                $('.menu-icon').removeClass('active');
                $button.addClass('active');
                $button.parent().parent().next().html(selectedSection);
            }
        });
    };

    var removeMobileMenu = function removeMobileMenu() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if (windowWidth > 767 && windowHeight > 620) {
            $('#mobile-view-top-menu').css('display', 'none');
            // $('.hidden-by-menu').css('display', 'block');
            closeMobileMenu();
            clicked = false;
        }
    };

    return {
        changeSlogan: changeSlogan,
        advantagesToggle: advantagesToggle,
        technologyListToggle: technologyListToggle,
        toggleDetailedMenu: toggleDetailedMenu,
        slideUpDownMenu: slideUpDownMenu,
        mobileIconSelect: mobileIconSelect,
        enterpriseFeaturesMenu: enterpriseFeaturesMenu,
        removeMobileMenu: removeMobileMenu
    };
}();

/* Bottom menu display and functionality*/

var bottomMenuFunctionality = function () {
    var menusChanged = false;
    var url = 'downloads';
    var $bottomSection = $('.bottom-menu').find('.feature-content');

    var changeMenu = function changeMenu() {
        var windowWidth = $(window).width();
        var mobileView = $('#mobile-view-menu');
        var desktopView = $('#desktop-view-menu');

        if (windowWidth < 768) {
            _loader.Blur.remove();
            $('#desktop-view-menu').css('display', 'none');
            $('#mobile-view-menu').css('display', 'block');
        } else if (windowWidth >= 768) {
            // check state of toggle menu and close if expanded
            if ($('.toggle-menu').attr('data-open-state') === 'expanded' && windowWidth <= 768) {
                $('.shrink-menu').click();
            }

            $('#desktop-view-menu').css('display', 'block');
            $('#mobile-view-menu').css('display', 'none');
        }
    };

    var loadDefaultBottomMenu = function loadDefaultBottomMenu(url) {

        _data.Data.getJson({ url: '/sitetriks/display/GetPageString?pageUrl=' + url }).then(function (res) {
            if (res.success) {
                $bottomSection.html(res.view);
            }
        });
    };

    return {
        changeMenu: changeMenu,
        loadDefaultBottomMenu: loadDefaultBottomMenu
    };
}();

/* Request demo button */

$('.demo-button').on('click', function () {

    $('html, body').animate({
        scrollTop: $('.bottom-menu').offset().top
    }, 500);

    bottomMenuFunctionality.loadDefaultBottomMenu('contact-us');
});

function attachReadMoreHandler() {
    $('body').on('click', '.read-more', function () {
        var $target = $(this);

        var $textBlocks = $target.parents('.tree-row').find('.content');
        var $readMoreText = $target.parents('.tree-row').find('.read-more');

        $textBlocks.each(function () {
            $(this).toggleClass('short-text');
        });

        $readMoreText.each(function () {
            var $currentTarget = $(this);
            $currentTarget.children('.more').toggle();
            $currentTarget.children('.less').toggle();
        });
    });
}

$(document).ready(function () {
    homepageDesktopFuncTionality.leafImageToggle();
    homepageDesktopFuncTionality.moveToMiddleMenuIcon();

    attachReadMoreHandler();
    //   attachTermsAndContidionsHandlers();
});
$(document).ready(function () {
    mobileMenuFunctionality.toggleDetailedMenu();
    mobileMenuFunctionality.slideUpDownMenu();
    mobileMenuFunctionality.advantagesToggle();
    mobileMenuFunctionality.technologyListToggle();
    mobileMenuFunctionality.enterpriseFeaturesMenu();
    //   moveToMiddleMenuIcon();
});

$(window).scroll(homepageDesktopFuncTionality.resizeBlueNavbar);
$(window).ready(homepageDesktopFuncTionality.moveToMiddleMenuIcon);
//$(window).ready(homepageDesktopFuncTionality.redrawSnowflakeGlobal.reDrawSnowflake);
//$(window).resize(homepageDesktopFuncTionality.redrawSnowflakeGlobal.reDrawSnowflake);

$(window).ready(mobileMenuFunctionality.changeSlogan());
$(window).resize(mobileMenuFunctionality.changeSlogan);
$(window).ready(mobileMenuFunctionality.mobileIconSelect());
$(window).ready(mobileMenuFunctionality.removeMobileMenu);
$(window).resize(mobileMenuFunctionality.removeMobileMenu);

$(window).ready(bottomMenuFunctionality.changeMenu);
$(window).resize(bottomMenuFunctionality.changeMenu);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ob21lLXBhZ2UuanMiXSwibmFtZXMiOlsiRGF0YSIsIm1ha2VSZXF1ZXN0IiwiZmV0Y2giLCJpc0Z1bmN0aW9uIiwibWFrZUZldGNoUmVxdWVzdCIsIm1ha2VBamF4UmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiaXNGb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJhbXMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIiQiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJ0ZXh0IiwiZ2V0SnNvbiIsImRpc2FibGVDYWNoZSIsInBvc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RGb3JtIiwiZm9ybURhdGEiLCJkZWxldGVKc29uIiwiZGVmYXVsdEVycm9yIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwidG9TdHJpbmciLCJjYWxsIiwiTG9hZGVyIiwiZ2lmU3JjIiwic2hvdyIsImNvbG9yIiwiaW1nU3JjIiwiQmx1ciIsImFkZCIsImFwcGVuZCIsInNyYyIsImNsYXNzIiwiaGlkZSIsInJlbW92ZSIsIm9uIiwiZXYiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiYXR0ciIsIiRjb250YWluZXIiLCJoaWRlT25DbGljayIsImFwcGVuZFRvIiwiUFJFVklFV19DT05UQUlORVJfQ0xBU1MiLCJQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTIiwiQkxVUl9FTEVNRU5UX0NMQVNTIiwiYWRkQmx1ciIsIm9wYWNpdHkiLCJhZGRDbGFzcyIsIiRibHVyRWxlbWVudCIsIiRpdGVtQ29udGFpbmVyIiwiJHByZXZpZXdDb250YWluZXIiLCJyZW1vdmVCbHVyIiwiY3NzIiwiaXNOYU4iLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJob21lcGFnZURlc2t0b3BGdW5jVGlvbmFsaXR5IiwicmVzaXplQmx1ZU5hdmJhciIsInNjcm9sbEJvdHRvbSIsIndpbmRvdyIsInNjcm9sbFRvcCIsImhlaWdodCIsImxlYWZJbWFnZVRvZ2dsZSIsIm9uZSIsImUiLCJjbGljayIsImRyYXdTbm93Zmxha2VHbG9iYWwiLCJMaW5lSW5kZXgiLCJjaXJjbGVJbmRleCIsImluZGV4IiwiYWRkTGluZSIsInNlbGVjdG9yIiwibGluZXMiLCJjdXN0b21DbGFzcyIsInBhcmVudCIsIkdldExpbmUiLCJob3ZlciIsImFkZEVsZW1lbnQiLCJ3aWR0aCIsImFuZ2xlIiwicmF0aW9PZlJhZGl1cyIsInBhcmVudERldmlkZXIiLCJtYXhSYWRpdXMiLCJhbmdsZUluUmFkIiwiRGVncmVlc1RvUmFkIiwicmFkaXVzIiwidG9wIiwiTWF0aCIsInNpbiIsImxlZnQiLCJjb3MiLCJlbGVtZW50IiwiaHRtbCIsIlBJIiwiUmFkVG9EZWdyZWUiLCJyYWQiLCJwb2ludHMiLCJzZWdtZW50cyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsImxlbmdodCIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImF0YW4yIiwic2hhZG93IiwibGluZSIsInB1c2giLCJyYWRpYWxUb1hZIiwiciIsImNlbnRlclgiLCJjZW50ZXJZIiwiZHJhd1Nub3dmbGFrZSIsImhhbGZ3aWR0aCIsImVsZW1lbnRTaXplQmFzZSIsInR3ZWx2ZU9jbG9jayIsIm9uZVRoaXJ0eSIsInRocmVlT2Nsb2NrIiwiZm91clRoaXJ0eSIsInNpeE9jbG9jayIsInNldmVuVGhpcnR5IiwibmluZU9jbG9jayIsInRlblRoaXJ0eSIsInR3byIsImZvdXIiLCJ0ZW4iLCJlaWdodCIsImVsZXZlbiIsInJlZHJhd1Nub3dmbGFrZUdsb2JhbCIsIndyYXBwZXJIYWxmV2lkdGgiLCJzdGF0ZSIsInJlRHJhd1Nub3dmbGFrZSIsIndpbmRvd1dpZHRoIiwiY29udGFpbmVySGFsZldpZHRoIiwibW92ZVRvTWlkZGxlTWVudUljb24iLCIkZGFuZGVsaW9uTWVudSIsIm1vdmVUb0ljb24iLCJzY3JvbGxjYiIsInRhcmdldGNsYXNzIiwiY2xhc3NOYW1lIiwic3BsaXQiLCIkdGFyZ2V0SWNvbiIsInNjcm9sbERpc3RhbmNlIiwib2Zmc2V0IiwiYW5pbWF0ZSIsImhhc0NsYXNzIiwidW5iaW5kIiwidHJpZ2dlciIsInNldFRpbWVvdXQiLCJtb2JpbGVNZW51RnVuY3Rpb25hbGl0eSIsImNsaWNrZWQiLCJoYW1idXJnZXJDb21wcmVzcyIsImhhbWJ1cmdlckV4cGFuZCIsImxvZ29EYXJrIiwibG9nb1doaXRlIiwic2VsZWN0ZWRTZWN0aW9uIiwiJGRldGFpbGVkTWVudUl0ZW0iLCIkbWFpbkRyb3Bkb3duIiwiJGFkdmFuYXRhZ2VzRHJvcGRvd24iLCIkdGVjaG5vbG9neURyb3Bkb3duIiwiJG1vYmlsZVZpZXdUb3BNZW51IiwiJG1vYmlsZU1lbnVJY29uIiwiY2xvc2VNb2JpbGVNZW51Iiwic2xpZGVVcCIsImV4cGFuZE1vYmlsZU1lbnUiLCJzbGlkZURvd24iLCJjaGFuZ2VTbG9nYW4iLCJ0b2dnbGVEZXRhaWxlZE1lbnUiLCJ0b2dnbGUiLCJzbGlkZVVwRG93bk1lbnUiLCJhZHZhbnRhZ2VzVG9nZ2xlIiwidGVjaG5vbG9neUxpc3RUb2dnbGUiLCJlbnRlcnByaXNlRmVhdHVyZXNNZW51IiwiZXZlbnQiLCJidXR0b24iLCJwYXJlbnRzIiwidG9nZ2xlQ2xhc3MiLCJuZXh0IiwiY2hpbGRyZW4iLCJtb2JpbGVJY29uU2VsZWN0IiwiJGJ1dHRvbiIsInJlbW92ZU1vYmlsZU1lbnUiLCJ3aW5kb3dIZWlnaHQiLCJib3R0b21NZW51RnVuY3Rpb25hbGl0eSIsIm1lbnVzQ2hhbmdlZCIsIiRib3R0b21TZWN0aW9uIiwiY2hhbmdlTWVudSIsIm1vYmlsZVZpZXciLCJkZXNrdG9wVmlldyIsImxvYWREZWZhdWx0Qm90dG9tTWVudSIsInZpZXciLCJhdHRhY2hSZWFkTW9yZUhhbmRsZXIiLCIkdGV4dEJsb2NrcyIsIiRyZWFkTW9yZVRleHQiLCJlYWNoIiwiJGN1cnJlbnRUYXJnZXQiLCJkb2N1bWVudCIsInJlYWR5Iiwic2Nyb2xsIiwicmVzaXplIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsT0FBUSxZQUFZO0FBQ3BCLFFBQUlDLGNBQWMsT0FBT0MsS0FBUCxLQUFpQixXQUFqQixJQUFnQ0MsV0FBV0QsS0FBWCxDQUFoQyxHQUFvREUsZ0JBQXBELEdBQXVFQyxlQUF6RixDQURvQixDQUNzRjs7QUFFMUcsYUFBU0EsZUFBVCxPQUFpRTtBQUFBLFlBQXRDQyxHQUFzQyxRQUF0Q0EsR0FBc0M7QUFBQSxZQUFqQ0MsTUFBaUMsUUFBakNBLE1BQWlDO0FBQUEsWUFBekJD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LG9CQUF4QjtBQUNBdEIsNEJBQXdCdUIsc0JBQXhCO0FBQ0E7QUFDSCxDQVBEOztBQVNBbEwsRUFBRWdFLE1BQUYsRUFBVTRJLE1BQVYsQ0FBaUIvSSw2QkFBNkJDLGdCQUE5QztBQUNBOUQsRUFBRWdFLE1BQUYsRUFBVTJJLEtBQVYsQ0FBZ0I5SSw2QkFBNkIrRSxvQkFBN0M7QUFDQTtBQUNBOztBQUVBNUksRUFBRWdFLE1BQUYsRUFBVTJJLEtBQVYsQ0FBZ0JoRCx3QkFBd0JpQixZQUF4QixFQUFoQjtBQUNBNUssRUFBRWdFLE1BQUYsRUFBVTZJLE1BQVYsQ0FBaUJsRCx3QkFBd0JpQixZQUF6QztBQUNBNUssRUFBRWdFLE1BQUYsRUFBVTJJLEtBQVYsQ0FBZ0JoRCx3QkFBd0I4QixnQkFBeEIsRUFBaEI7QUFDQXpMLEVBQUVnRSxNQUFGLEVBQVUySSxLQUFWLENBQWdCaEQsd0JBQXdCZ0MsZ0JBQXhDO0FBQ0EzTCxFQUFFZ0UsTUFBRixFQUFVNkksTUFBVixDQUFpQmxELHdCQUF3QmdDLGdCQUF6Qzs7QUFFQTNMLEVBQUVnRSxNQUFGLEVBQVUySSxLQUFWLENBQWdCZCx3QkFBd0JHLFVBQXhDO0FBQ0FoTSxFQUFFZ0UsTUFBRixFQUFVNkksTUFBVixDQUFpQmhCLHdCQUF3QkcsVUFBekMsRSIsImZpbGUiOiJqcy9ob21lLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL2hvbWUtcGFnZS5qc1wiKTtcbiIsInZhciBEYXRhID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBtYWtlUmVxdWVzdCA9IHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNGdW5jdGlvbihmZXRjaCkgPyBtYWtlRmV0Y2hSZXF1ZXN0IDogbWFrZUFqYXhSZXF1ZXN0OyAvLyBmYWxsYmFjayB0byBhamF4IGlmIG9sZGVyIGJyb3dzZXJcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlQWpheFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gcHJvY2VzcyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnByb2Nlc3NEYXRhID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBzZXQgY29udGVudFR5cGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHBhcmFtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUZldGNoUmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJiByZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzLnRleHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRKc29uKHsgdXJsLCBkaXNhYmxlQ2FjaGUgfSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGRpc2FibGVDYWNoZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgJ1ByYWdtYSc6ICduby1jYWNoZScsXHJcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnR0VUJywgaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0SnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RGb3JtKHsgdXJsLCBmb3JtRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEsIGlzRm9ybTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0RFTEVURScsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdEVycm9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0SnNvbixcclxuICAgICAgICBwb3N0SnNvbixcclxuICAgICAgICBwb3N0Rm9ybSxcclxuICAgICAgICBkZWxldGVKc29uLFxyXG4gICAgICAgIGRlZmF1bHRFcnJvclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgRGF0YSB9O1xyXG4iLCIvKiBMb2FkZXIuanMgdmVyc2lvbiAxLjEgKi9cclxudmFyIExvYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ2lmU3JjID0gJy9pbWFnZXMvbG9hZGluZy5naWYnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9zaG93V2l0aFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NCYXJEYXRhLCBjb2xvcikge1xyXG4gICAgICAgIC8vICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICBjb2xvciA9ICcjZmZmJztcclxuICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIGxldCAkcGFyZW50ID0gQmx1ci5hZGQoeyBjb2xvciB9KTtcclxuXHJcbiAgICAgICAgLy8gICAgbGV0IGJhciA9IFByb2dyZXNzQmFyLmJ1aWxkKHsgZGF0YTogcHJvZ3Jlc3NCYXJEYXRhLCAkcGFyZW50OiAkcGFyZW50LCBjc3NDbGFzczogJ2JsdXItY29udGVudCcgfSlbMF07XHJcbiAgICAgICAgLy8gICAgbGV0IGRhdGEgPSAkKGJhcikuZGF0YShwcm9ncmVzc0JhckRhdGEubmFtZSlcclxuICAgICAgICAvLyAgICAgICAgLm9uU3RhcnQoKTtcclxuICAgICAgICAvL30sXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKGNvbG9yLCBpbWdTcmMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjZmZmJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWdTcmMpIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IGdpZlNyYztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQmx1ci5hZGQoeyBjb2xvciB9KVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8aW1nLz4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBpbWdTcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEJsdXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IExvYWRlciB9O1xyXG5cclxuLy8gR2FsbGVyeSByZWdpc3RyYXRpb25cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnaW1nLmRpc3BsYXktaW1hZ2UsIGltZy5nYWxsZXJ5LWltYWdlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgbGV0IHNyYyA9ICR0YXJnZXQuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gQmx1ci5hZGQoeyBoaWRlT25DbGljazogdHJ1ZSB9KTtcclxuICAgICAgICAkKCc8aW1nIC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2JsdXItY29udGVudCBwcmV2aWV3LWltYWdlJyxcclxuICAgICAgICAgICAgc3JjOiBzcmNcclxuICAgICAgICB9KS5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gSGVscGVyIGNsYXNzIGZvciBsb2FkZXIgYW5kIGdhbGxlcnlcclxudmFyIEJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgUFJFVklFV19DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1jb250YWluZXInO1xyXG4gICAgY29uc3QgUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTUyA9ICdwcmV2aWV3LWl0ZW0tY29udGFpbmVyJztcclxuICAgIGNvbnN0IEJMVVJfRUxFTUVOVF9DTEFTUyA9ICdibHVyJztcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCbHVyKHsgaGlkZU9uQ2xpY2ssIGNvbG9yLCBvcGFjaXR5IH0pIHtcclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2sgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGlkZU9uQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuXHJcbiAgICAgICAgbGV0ICRibHVyRWxlbWVudCA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogQkxVUl9FTEVNRU5UX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCAkaXRlbUNvbnRhaW5lciA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJHByZXZpZXdDb250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChoaWRlT25DbGljaykge1xyXG4gICAgICAgICAgICAkcHJldmlld0NvbnRhaW5lci5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50Lm9uKCdjbGljaycsIHJlbW92ZUJsdXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSAmJiBpc05hTigrb3BhY2l0eSkgJiYgb3BhY2l0eSA+PSAwICYmIG9wYWNpdHkgPD0gMSkge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHJldmlld0NvbnRhaW5lci5hcHBlbmQoJGl0ZW1Db250YWluZXIpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGJsdXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRpdGVtQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJsdXIoKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgQkxVUl9FTEVNRU5UX0NMQVNTKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCdib2R5JykuZmluZCgnLicgKyBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdzdC1uby1vdmVyZmxvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiBhZGRCbHVyLFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlQmx1clxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IEJsdXIgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBCbHVyIH0gZnJvbSAnLi9jb21tb24vbG9hZGVyLmpzJztcclxuXHJcbi8qIERlc2t0b3AgKi9cclxuXHJcbnZhciBob21lcGFnZURlc2t0b3BGdW5jVGlvbmFsaXR5ID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIHJlc2l6ZUJsdWVOYXZiYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNjcm9sbEJvdHRvbSA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXItYmx1ZScpLmNzcygnaGVpZ2h0JywgJzBweCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2l0aW9uJywgJ2hlaWdodCAxcycpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCcuLXdlYmtpdC10cmFuc2l0aW9uJywgJ2hlaWdodCAxcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPD0gODApIHtcclxuICAgICAgICAgICAgJCgnLmhlYWRlci1ibHVlJykuY3NzKCdoZWlnaHQnLCAnNDBweCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2l0aW9uJywgJ2hlaWdodCAuMjVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbGVhZkltYWdlVG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5sZXR0ZXItMicpLm9uZSgnd2Via2l0QW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgbXNBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQoJy5sZWFmLWJ1dHRvbi0xJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNsb3NlLW1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJykuY2xpY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5sZWFmLWJ1dHRvbi0yJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBkcmF3U25vd2ZsYWtlR2xvYmFsID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IExpbmVJbmRleCA9IDA7XHJcbiAgICAgICAgdmFyIGNpcmNsZUluZGV4ID0gMDtcclxuICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRMaW5lKHNlbGVjdG9yLCBsaW5lcywgY3VzdG9tQ2xhc3MpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB2YXIgbGluZXMgPSBHZXRMaW5lKDMsIGxpbmVzLCAnZGlhbW9uZExpbmUnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxpbmVzW2ldLmFkZENsYXNzKGN1c3RvbUNsYXNzKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQobGluZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcuZGlhbW9uZExpbmUnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNbaV0uYWRkQ2xhc3MoJ2hvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1tpXS5yZW1vdmVDbGFzcygnaG92ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGxpbmVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudChoZWlnaHQsIHdpZHRoLCBhbmdsZSwgcmF0aW9PZlJhZGl1cywgc2VsZWN0b3IsIHRleHQsIGxpbmVzLCBwYXJlbnREZXZpZGVyLCBtYXhSYWRpdXMsIGN1c3RvbUNsYXNzKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gJChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIHZhciBhbmdsZUluUmFkID0gRGVncmVlc1RvUmFkKGFuZ2xlKTtcclxuICAgICAgICAgICAgdmFyIGN1c3RvbUNsYXNzID0gY3VzdG9tQ2xhc3MgfHwgJ2RlZmF1bHQtaWNvbi1jbGFzcyc7XHJcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBtYXhSYWRpdXMgKiByYXRpb09mUmFkaXVzO1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gbWF4UmFkaXVzIC0gTWF0aC5zaW4oYW5nbGVJblJhZCkgKiByYWRpdXMgLSBoZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICB2YXIgbGVmdCA9IG1heFJhZGl1cyArIE1hdGguY29zKGFuZ2xlSW5SYWQpICogcmFkaXVzIC0gaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZWxlbWVudCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY3VzdG9tQ2xhc3MpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCd3aWR0aCcsIHdpZHRoKS5jc3MoJ2hlaWdodCcsIGhlaWdodCkuY3NzKCd0b3AnLCB0b3ApLmNzcygnbGVmdCcsIGxlZnQpLmh0bWwodGV4dCk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmF0dHIoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgdmFyIGxpbmVzID0gR2V0TGluZSgzLCBsaW5lcywgJ2xpbmUnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQobGluZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ28tY2VudGVyJykuY3NzKCd6LWluZGV4JywgJzEwNDYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1tpXS5hZGRDbGFzcygnaG92ZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1tpXS5yZW1vdmVDbGFzcygnaG92ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChsaW5lc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIERlZ3JlZXNUb1JhZChhbmdsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5nbGUgLyAxODAgKiBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gUmFkVG9EZWdyZWUocmFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByYWQgLyBNYXRoLlBJICogMTgwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gR2V0TGluZSh3aWR0aCwgcG9pbnRzLCBjdXN0b21DbGFzcykge1xyXG4gICAgICAgICAgICBsZXQgc2VnbWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb2ludCA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmRQb2ludCA9IHBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxlbmdodCA9IE1hdGguc3FydChNYXRoLnBvdyhlbmRQb2ludC54IC0gc3RhcnRQb2ludC54LCAyKSArIE1hdGgucG93KGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksXHJcbiAgICAgICAgICAgICAgICAgICAgMikpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gUmFkVG9EZWdyZWUoTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KSkgLSA5MDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2hhZG93ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChhbmdsZSA9PSA0NSB8fCBhbmdsZSA+IC00NyAmJiBhbmdsZSA8IC00MyB8fCBhbmdsZSA9PSAzMTUpICYmIGN1c3RvbUNsYXNzID09PSAnbGluZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3cgPSAnMCAzcHggNXB4ICNjOGQwZDQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYW5nbGUgPj0gLTIzMCAmJiBhbmdsZSA8IC0yMDAgJiYgY3VzdG9tQ2xhc3MgPT09ICdsaW5lJykgeyAvLyBydWxlIGZvciAxMDogMzAgYW5kIDExIG9jbG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdyA9ICcxcHggMCA1cHggI2M4ZDBkNCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoYW5nbGUgPT0gOTAgfHwgYW5nbGUgPj0gNDAgJiYgYW5nbGUgPCA1MCB8fCBhbmdsZSA9PSAwKSAmJiBjdXN0b21DbGFzcyA9PT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93ID0gJzNweCAwIDVweCAjYzhkMGQ0JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFuZ2xlID4gOTAgJiYgYW5nbGUgPCAyNzAgJiYgY3VzdG9tQ2xhc3MgPT09ICdsaW5lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdyA9ICczcHggMCA1cHggI2M4ZDBkNCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChhbmdsZSA8PSA5MCB8fCBhbmdsZSA+PSAyNzApICYmIGN1c3RvbUNsYXNzID09PSAnbGluZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3cgPSAnLTNweCAwIDVweCAjYzhkMGQ0JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGluZSA9ICQoJzxkaXY+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY3VzdG9tQ2xhc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLmFkZENsYXNzKCdsaW5lJyArIExpbmVJbmRleCkgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdoZWlnaHQnLCBsZW5naHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygnd2lkdGgnLCB3aWR0aClcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCd0b3AnLCBzdGFydFBvaW50LnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygnbGVmdCcsIHN0YXJ0UG9pbnQueClcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBhbmdsZSArICdkZWcpJylcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2Zvcm0tb3JpZ2luJywgJzUwJSAwJScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygnYm94LXNoYWRvdycsIHNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICBzZWdtZW50cy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIExpbmVJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpICsgMSA9PSBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VnbWVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByYWRpYWxUb1hZKHIsIGFuZ2xlLCBjZW50ZXJYLCBjZW50ZXJZKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5nbGVJblJhZCA9IERlZ3JlZXNUb1JhZChhbmdsZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9wID0gY2VudGVyWSAtIE1hdGguc2luKGFuZ2xlSW5SYWQpICogcjtcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSBjZW50ZXJYICsgTWF0aC5jb3MoYW5nbGVJblJhZCkgKiByO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHg6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICB5OiB0b3BcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkcmF3U25vd2ZsYWtlID0gZnVuY3Rpb24gKGhhbGZ3aWR0aCwgZWxlbWVudFNpemVCYXNlLCBwYXJlbnREZXZpZGVyKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhciB0d2VsdmVPY2xvY2sgPSBbXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAgKiBoYWxmd2lkdGgsIDAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC41MCAqIGhhbGZ3aWR0aCwgOTAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9uZVRoaXJ0eSA9IFtcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMCAqIGhhbGZ3aWR0aCwgMCwgaGFsZndpZHRoLCBoYWxmd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwLjUgKiBoYWxmd2lkdGgsIDQ1LCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aHJlZU9jbG9jayA9IFtcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMCAqIGhhbGZ3aWR0aCwgMCwgaGFsZndpZHRoLCBoYWxmd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwLjU1ICogaGFsZndpZHRoLCAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB2YXIgZm91clRoaXJ0eSA9IFtcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMCAqIGhhbGZ3aWR0aCwgMCwgaGFsZndpZHRoLCBoYWxmd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwLjUgKiBoYWxmd2lkdGgsIC00NSwgaGFsZndpZHRoLCBoYWxmd2lkdGgpXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB2YXIgc2l4T2Nsb2NrID0gW1xyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwICogaGFsZndpZHRoLCAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuNzUgKiBoYWxmd2lkdGgsIC05MCwgaGFsZndpZHRoLCBoYWxmd2lkdGgpXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB2YXIgc2V2ZW5UaGlydHkgPSBbXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAgKiBoYWxmd2lkdGgsIDAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC41ICogaGFsZndpZHRoLCAtMTM1LCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuaW5lT2Nsb2NrID0gW1xyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwICogaGFsZndpZHRoLCAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuNTUgKiBoYWxmd2lkdGgsIDE4MCwgaGFsZndpZHRoLCBoYWxmd2lkdGgpXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVuVGhpcnR5ID0gW1xyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwICogaGFsZndpZHRoLCAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuNSAqIGhhbGZ3aWR0aCwgMTM1LCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNtYWxsZXIgbGluZXNcclxuICAgICAgICAgICAgdmFyIHR3byA9IFtcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMCAqIGhhbGZ3aWR0aCwgMCwgaGFsZndpZHRoLCBoYWxmd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwLjMgKiBoYWxmd2lkdGgsIDAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC41ICogaGFsZndpZHRoLCAyMCwgaGFsZndpZHRoLCBoYWxmd2lkdGgpXHJcbiAgICAgICAgICAgIF07XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGZvdXIgPSBbXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAgKiBoYWxmd2lkdGgsIDAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC4zICogaGFsZndpZHRoLCAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuNSAqIGhhbGZ3aWR0aCwgLTIwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZW4gPSBbXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAgKiBoYWxmd2lkdGgsIDAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC4zICogaGFsZndpZHRoLCAxODAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC41ICogaGFsZndpZHRoLCAxNjAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVpZ2h0ID0gW1xyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwICogaGFsZndpZHRoLCAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuMyAqIGhhbGZ3aWR0aCwgMTgwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuNSAqIGhhbGZ3aWR0aCwgMjAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGV2ZW4gPSBbXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAgKiBoYWxmd2lkdGgsIDAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC4yNSAqIGhhbGZ3aWR0aCwgOTAsIGhhbGZ3aWR0aCwgaGFsZndpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhZGlhbFRvWFkoMC40NyAqIGhhbGZ3aWR0aCwgMTEzLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuICAgICAgICAgICAgXTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgb25lID0gW1xyXG4gICAgICAgICAgICAgICAgcmFkaWFsVG9YWSgwICogaGFsZndpZHRoLCAwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuMjUgKiBoYWxmd2lkdGgsIDkwLCBoYWxmd2lkdGgsIGhhbGZ3aWR0aCksXHJcbiAgICAgICAgICAgICAgICByYWRpYWxUb1hZKDAuNDcgKiBoYWxmd2lkdGgsIDY2LCBoYWxmd2lkdGgsIGhhbGZ3aWR0aClcclxuICAgICAgICAgICAgXTtcclxuXHJcblxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNyAqIGVsZW1lbnRTaXplQmFzZSwgMC44ICogZWxlbWVudFNpemVCYXNlICogMywgMTA5LCAwLjcsICcuZGFuZGVsaW9uLW1lbnUnLCAnZW52aXJvbm1lbnQgc3luYycsIHR3ZWx2ZU9jbG9jaywgcGFyZW50RGV2aWRlciwgaGFsZndpZHRoLCAnZW52aXJvbm1lbnRfc3luYycpOyAvLzEyXHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC41ICogZWxlbWVudFNpemVCYXNlLCAwLjQgKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCAxMDAsIDAuNiwgJy5kYW5kZWxpb24tbWVudScsICdpbnN0YW5jZSBtYW5hZ2VyJywgdHdlbHZlT2Nsb2NrLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdpbnN0YW5jZV9tYW5hZ2VyJyk7IC8vMTJcclxuXHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC45ICogZWxlbWVudFNpemVCYXNlLCAwLjkgKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCA0NSwgMC43NSwgJy5kYW5kZWxpb24tbWVudScsICdpbXBvcnQgdG9vbCcgKyAnPC9icj4nICsgJyhTaXRlZmluaXR5IGNvbnRlbnQpJywgb25lLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdpbXBvcnRfdG9vbCcpOyAvLyAxXHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC41ICogZWxlbWVudFNpemVCYXNlLCAwLjUgKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCA3MCwgMC41MiwgJy5kYW5kZWxpb24tbWVudScsICcxLWNsaWNrIGluc3RhbGxhdGlvbicsIG9uZSwgcGFyZW50RGV2aWRlciwgaGFsZndpZHRoLCAnY2xpY2tfaW5zdGFsbGF0aW9uJyk7IC8vIDFcclxuXHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC44ICogZWxlbWVudFNpemVCYXNlLCAwLjggKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCAyNSwgMC44LCAnLmRhbmRlbGlvbi1tZW51JywgJ3ZlcnNpb24gY29udHJvbCAocmV2aXNpb24gaGlzdG9yeSknLCBvbmVUaGlydHksIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCwgJ3ZlcnNpb25fY29udHJvbCcpOyAvLyAxLjVcclxuICAgICAgICAgICAgYWRkRWxlbWVudCgwLjUgKiBlbGVtZW50U2l6ZUJhc2UsIDAuNSAqIGVsZW1lbnRTaXplQmFzZSAqIDMsIDM1LCAwLjUsICcuZGFuZGVsaW9uLW1lbnUnLCAnc2NoZWR1bGVkIHB1Ymxpc2hpbmcnLCBvbmVUaGlydHksIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCwgJ3NjaGVkdWxlZF9wdWJsaXNoaW5nJyk7IC8vIDEuNVxyXG5cclxuICAgICAgICAgICAgYWRkRWxlbWVudCgwLjYgKiBlbGVtZW50U2l6ZUJhc2UsIDAuNiAqIGVsZW1lbnRTaXplQmFzZSAqIDMsIDgsIDAuOTUsICcuZGFuZGVsaW9uLW1lbnUnLCAnYXV0byBzaXRlbWFwJywgdHdvLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdhdXRvX3NpdGVtYXAnKTsgLy8gMlxyXG5cclxuICAgICAgICAgICAgYWRkRWxlbWVudCgwLjYgKiBlbGVtZW50U2l6ZUJhc2UsIDAuNiAqIGVsZW1lbnRTaXplQmFzZSAqIDMsIC0zLCAwLjk0LCAnLmRhbmRlbGlvbi1tZW51JywgJ211bHRpbGluZ3VhbCcsIHRocmVlT2Nsb2NrLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdtdWx0aWxpbmd1YWwnKTsgLy8gM1xyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNSAqIGVsZW1lbnRTaXplQmFzZSwgMC41ICogZWxlbWVudFNpemVCYXNlICogMywgMSwgMC42LCAnLmRhbmRlbGlvbi1tZW51JywgJ3RodW1ibmFpbCBnZW5lcmF0aW9uJywgdGhyZWVPY2xvY2ssIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCwgJ3RodW1ibmFpbF9nZW5lcmF0aW9uJyk7IC8vIDNcclxuXHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC42ICogZWxlbWVudFNpemVCYXNlLCAwLjYgKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCAtMTcsIDAuOCwgJy5kYW5kZWxpb24tbWVudScsICdmb3J1bXMnLCBmb3VyLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdmb3J1bXMnKTsgLy8gNFxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNSAqIGVsZW1lbnRTaXplQmFzZSwgMC40ICogZWxlbWVudFNpemVCYXNlICogMywgLTIxLCAwLjYsICcuZGFuZGVsaW9uLW1lbnUnLCAnc2VvIG9wdGltaXNlZCcsIGZvdXIsIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCwgJ3Nlb19vcHRpbWlzZWQnKTsgLy8gNFxyXG5cclxuICAgICAgICAgICAgYWRkRWxlbWVudCgwLjYgKiBlbGVtZW50U2l6ZUJhc2UsIDAuNiAqIGVsZW1lbnRTaXplQmFzZSAqIDMsIC0zNiwgMC44LCAnLmRhbmRlbGlvbi1tZW51JywgJ21vZHVsYXInLCBmb3VyVGhpcnR5LCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdtb2R1bGFyJyk7IC8vIDQuNVxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNSAqIGVsZW1lbnRTaXplQmFzZSwgMC4zICogZWxlbWVudFNpemVCYXNlICogMywgLTUxLCAwLjU3LCAnLmRhbmRlbGlvbi1tZW51JywgJ3J0bCBzdXBwb3J0JywgZm91clRoaXJ0eSwgcGFyZW50RGV2aWRlciwgaGFsZndpZHRoLCAncnRsX3N1cHBvcnQnKTsgLy8gNC41XHJcblxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNiAqIGVsZW1lbnRTaXplQmFzZSwgMC42ICogZWxlbWVudFNpemVCYXNlICogMywgLTE1NSwgMS4xLCAnLmRhbmRlbGlvbi1tZW51JywgJ2Jsb2dzJywgc2V2ZW5UaGlydHksIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCwgJ2Jsb2dzJyk7IC8vIDcuNVxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNSAqIGVsZW1lbnRTaXplQmFzZSwgMC41ICogZWxlbWVudFNpemVCYXNlICogMywgLTE0MCwgMC43LCAnLmRhbmRlbGlvbi1tZW51JywgJ211bHRpLWRldmljZSBsYXlvdXQgYnVpbGRlcicsIHNldmVuVGhpcnR5LCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdsYXlvdXRfYnVpbGRlcicpOyAvLyA3LjVcclxuXHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC42ICogZWxlbWVudFNpemVCYXNlLCAwLjYgKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCAtMTY3LCAxLjIsICcuZGFuZGVsaW9uLW1lbnUnLCAndGFnZ2luZycsIGVpZ2h0LCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICd0YWdnaW5nJyk7IC8vIDhcclxuICAgICAgICAgICAgYWRkRWxlbWVudCgwLjQgKiBlbGVtZW50U2l6ZUJhc2UsIDAuNCAqIGVsZW1lbnRTaXplQmFzZSAqIDMsIC0xNjUsIDAuOCwgJy5kYW5kZWxpb24tbWVudScsICdncmFudWxhciBwZXJtaXNzaW9ucycsIGVpZ2h0LCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdncmFudWxhcl9wZXJtaXNzaW9ucycpOyAvLyA4XHJcblxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNiAqIGVsZW1lbnRTaXplQmFzZSwgMC43ICogZWxlbWVudFNpemVCYXNlICogMywgLTE3OCwgMS4zLCAnLmRhbmRlbGlvbi1tZW51JywgJ2R5bmFtaWMgY29udGVudCcsIG5pbmVPY2xvY2ssIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCwgJ2R5bmFtaWNfY29udGVudCcpOyAvLyA5XHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC41ICogZWxlbWVudFNpemVCYXNlLCAwLjQgKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCAtMTgwLCAwLjgsICcuZGFuZGVsaW9uLW1lbnUnLCAnaW1hZ2UgdHJhY2tpbmcnLCBuaW5lT2Nsb2NrLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdpbWFnZV90cmFja2luZycpOyAvLyA5XHJcblxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNyAqIGVsZW1lbnRTaXplQmFzZSwgMC45ICogZWxlbWVudFNpemVCYXNlICogMywgLTE4NSwgMS40LCAnLmRhbmRlbGlvbi1tZW51JywgJ211bHRpc2l0ZSBtYW5hZ2VtZW50JywgdGVuLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdtdWx0aXNpdGVfbWFuYWdlbWVudCcpOyAvLyAxMFxyXG5cclxuICAgICAgICAgICAgYWRkRWxlbWVudCgwLjUgKiBlbGVtZW50U2l6ZUJhc2UsIDAuNiAqIGVsZW1lbnRTaXplQmFzZSAqIDMsIDE2MSwgMS4yLCAnLmRhbmRlbGlvbi1tZW51JywgJ3BlcnNvbmFsaXphdGlvbicsIHRlblRoaXJ0eSwgcGFyZW50RGV2aWRlciwgaGFsZndpZHRoLCAncGVyc29uYWxpemF0aW9uJyk7IC8vIDEwLjVcclxuICAgICAgICAgICAgYWRkRWxlbWVudCgwLjUgKiBlbGVtZW50U2l6ZUJhc2UsIDAuNiAqIGVsZW1lbnRTaXplQmFzZSAqIDMsIDE2MCwgMC44LCAnLmRhbmRlbGlvbi1tZW51JywgJ2NkbiBpbnRlZ3JhdGlvbnMgYXp1cmUtYW1hem9uJywgdGVuVGhpcnR5LCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICdjZG5faW50ZWdyYXRpb25zJyk7IC8vIDEwLjVcclxuXHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoMC43ICogZWxlbWVudFNpemVCYXNlLCAwLjkgKiBlbGVtZW50U2l6ZUJhc2UgKiAzLCAxNTAsIDEuMSwgJy5kYW5kZWxpb24tbWVudScsICdzZWFyY2ggJyArICc8L2JyPicgKyAnKEdvb2dsZSBpbnRlZ3JhdGlvbiknLCBlbGV2ZW4sIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCwgJ2dvb2dsZV9pbnRlZ3JhdGlvbicpOyAvLyAxMVxyXG4gICAgICAgICAgICBhZGRFbGVtZW50KDAuNSAqIGVsZW1lbnRTaXplQmFzZSwgMC40ICogZWxlbWVudFNpemVCYXNlICogMywgMTMxLCAuNjIsICcuZGFuZGVsaW9uLW1lbnUnLCAnd2lkZ2V0IHRyYWNraW5nJywgZWxldmVuLCBwYXJlbnREZXZpZGVyLCBoYWxmd2lkdGgsICd3aWRnZXRfdHJhY2tpbmcnKTsgLy8gMTFcclxuXHJcbiAgICAgICAgICAgIGFkZExpbmUoJy5kYW5kZWxpb24tbWVudScsIHNpeE9jbG9jaywgJ3NpeE9jbG9jaycpOyAvLyA2XHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQoODAsIDgwLCAxODAsIDAsICcuZGFuZGVsaW9uLW1lbnUnLCAnPGRpdiBjbGFzcz1cImxvZ28tY2VudGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvU2l0ZXRyaWtzX2xvZ28uc3ZnXCIgYWx0PVwibG9nb1wiIHN0eWxlPVwid2lkdGg6IDgwcHg7IGhlaWdodDogODBweDsgcGFkZGluZy1sZWZ0OjJweDsgbWFyZ2luLXRvcDoycHg7XCI+PC9kaXY+JywgW10sIHBhcmVudERldmlkZXIsIGhhbGZ3aWR0aCk7IC8vIDExXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZHJhd1Nub3dmbGFrZTogZHJhd1Nub3dmbGFrZVxyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciByZWRyYXdTbm93Zmxha2VHbG9iYWwgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgd3JhcHBlckhhbGZXaWR0aDtcclxuICAgICAgICB2YXIgc3RhdGUgPSAtMTtcclxuXHJcbiAgICAgICAgdmFyIHJlRHJhd1Nub3dmbGFrZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXJIYWxmV2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93V2lkdGggPj0gMjg4MCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRhbmRlbGlvbi1tZW51JykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZGFuZGVsaW9uLW1lbnUnKS5jc3MoJ2hlaWdodCcsICcxMjI1cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJzE0MDJweCcpO1xyXG4gICAgICAgICAgICAgICAgZHJhd1Nub3dmbGFrZUdsb2JhbC5kcmF3U25vd2ZsYWtlKDcwMCwgMTc1LCAyKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gMztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoKHdpbmRvd1dpZHRoID4gMTI4MCAmJiB3aW5kb3dXaWR0aCA8IDI4ODApICYmICEoc3RhdGUgPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kYW5kZWxpb24tbWVudScpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmRhbmRlbGlvbi1tZW51JykuY3NzKCdoZWlnaHQnLCAnNzAwcHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJzgwMnB4Jyk7XHJcbiAgICAgICAgICAgICAgICBkcmF3U25vd2ZsYWtlR2xvYmFsLmRyYXdTbm93Zmxha2UoNDAwLCAxMDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh3aW5kb3dXaWR0aCA8PSAxMjgwICYmIHdpbmRvd1dpZHRoID4gOTkzKSAmJiAhKHN0YXRlID09IDEpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZGFuZGVsaW9uLW1lbnUnKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgICQoJy5kYW5kZWxpb24tbWVudScpLmNzcygnaGVpZ2h0JywgJzUyNXB4JylcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCd3aWR0aCcsICc2MDJweCcpO1xyXG4gICAgICAgICAgICAgICAgZHJhd1Nub3dmbGFrZUdsb2JhbC5kcmF3U25vd2ZsYWtlKDMwMCwgNzAsIDIuNSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHdpbmRvd1dpZHRoIDw9IDk5MikgJiYgIShzdGF0ZSA9PSAyKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRhbmRlbGlvbi1tZW51JykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZGFuZGVsaW9uLW1lbnUnKS5jc3MoJ2hlaWdodCcsICc0MzdweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnNTAycHgnKTtcclxuICAgICAgICAgICAgICAgIGRyYXdTbm93Zmxha2VHbG9iYWwuZHJhd1Nub3dmbGFrZSgyNTAsIDcwLCA1KTtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlRHJhd1Nub3dmbGFrZTogcmVEcmF3U25vd2ZsYWtlXHJcbiAgICAgICAgfTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIG1vdmVUb01pZGRsZU1lbnVJY29uID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgJGRhbmRlbGlvbk1lbnUgPSAkKCcuZGFuZGVsaW9uLW1lbnUnKTtcclxuICAgICAgICAkZGFuZGVsaW9uTWVudS5vbignY2xpY2snLCAnLmVsZW1lbnQnLCBtb3ZlVG9JY29uKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsY2IodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRjbGFzcyA9IHRhcmdldC5jbGFzc05hbWUuc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0SWNvbjtcclxuICAgICAgICAgICAgLy8gICR0YXJnZXRJY29uID0gJChgIyR7dGFyZ2V0Y2xhc3N9YCk7XHJcblxyXG4gICAgICAgICAgICAkdGFyZ2V0SWNvbiA9ICQoJyMnICsgdGFyZ2V0Y2xhc3MpO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsRGlzdGFuY2UgPSAkdGFyZ2V0SWNvbi5vZmZzZXQoKS50b3AgLSAxMjU7XHJcblxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGVsZW1lbnRcclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHNjcm9sbERpc3RhbmNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnc2xvdycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVRvSWNvbihlKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICghJCgnLm1vcmUtaXRlbXMnKS5oYXNDbGFzcygnbW9yZS1jbGlja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5tb3JlLWl0ZW1zJykudW5iaW5kKCkudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGNiKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbGNiKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlYWZJbWFnZVRvZ2dsZTogbGVhZkltYWdlVG9nZ2xlLFxyXG4gICAgICAgIHJlc2l6ZUJsdWVOYXZiYXI6IHJlc2l6ZUJsdWVOYXZiYXIsXHJcbiAgICAgICAgbW92ZVRvTWlkZGxlTWVudUljb246IG1vdmVUb01pZGRsZU1lbnVJY29uLFxyXG4gICAgICAgIHJlZHJhd1Nub3dmbGFrZUdsb2JhbDogcmVkcmF3U25vd2ZsYWtlR2xvYmFsXHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXHJcbi8qIE1vYmlsZSAqL1xyXG5cclxudmFyIG1vYmlsZU1lbnVGdW5jdGlvbmFsaXR5ID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyQ29tcHJlc3MgPSAnaHR0cHM6Ly9zaXRldHJpa3MuYXp1cmVlZGdlLm5ldC9zdGF0aWMtZmlsZXMvaW1hZ2VzL21vYmlsZS9Db21wcmVzcy5naWYnO1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyRXhwYW5kID0gJ2h0dHBzOi8vc2l0ZXRyaWtzLmF6dXJlZWRnZS5uZXQvc3RhdGljLWZpbGVzL2ltYWdlcy9tb2JpbGUvRXhwYW5kLmdpZic7XHJcbiAgICBjb25zdCBsb2dvRGFyayA9ICdodHRwczovL3NpdGV0cmlrcy5henVyZWVkZ2UubmV0L3N0YXRpYy1maWxlcy9pbWFnZXMvbW9iaWxlL0xPR09fbW9iLnN2Zyc7XHJcbiAgICBjb25zdCBsb2dvV2hpdGUgPSAnaHR0cHM6Ly9zaXRldHJpa3MuYXp1cmVlZGdlLm5ldC9zdGF0aWMtZmlsZXMvaW1hZ2VzL21vYmlsZS9MT0dPX21vYl93LnN2Zyc7XHJcbiAgICBjb25zdCBzZWxlY3RlZFNlY3Rpb24gPSAnPGRpdiBjbGFzcz1cImNvbCBjb2wteHMtMTJcIj48ZGl2IGNsYXNzPVwic2VsZWN0ZWQtZmVhdHVyZVwiIGlkPVwic3RhdGljLXNlY3Rpb25cIj48ZGl2IGNsYXNzPVwiZmVhdHVyZS1jb250ZW50XCI+PC9kaXY+PC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICBsZXQgJGRldGFpbGVkTWVudUl0ZW0gPSAkKCcud3JhcHBlci1tZW51LWl0ZW1zJyk7XHJcbiAgICBsZXQgJG1haW5Ecm9wZG93biA9ICQoJyNtaWRkbGUtYm94Jyk7XHJcbiAgICBsZXQgJGFkdmFuYXRhZ2VzRHJvcGRvd24gPSAkKCcuYWR2YW50YWdlcy1ibG9jaycpO1xyXG4gICAgbGV0ICR0ZWNobm9sb2d5RHJvcGRvd24gPSAkKCcudGVjaG5vbG9neS1ibG9jaycpO1xyXG4gICAgbGV0ICRtb2JpbGVWaWV3VG9wTWVudSA9ICQoJyNtb2JpbGUtdmlldy10b3AtbWVudScpO1xyXG4gICAgbGV0ICRtb2JpbGVNZW51SWNvbiA9ICRtb2JpbGVWaWV3VG9wTWVudS5maW5kKCcubWVudS1pY29uJyk7XHJcbiAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICB2YXIgY2xvc2VNb2JpbGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNtb2JpbGUtdmlldy10b3AtbWVudScpLnNsaWRlVXAoJ3Nsb3cnKTtcclxuICAgICAgICAkKCcuaGFtYnVyZ2VyLWltYWdlJykuYXR0cignc3JjJywgaGFtYnVyZ2VyRXhwYW5kKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLmxvZ28tbW9iaWxlLWltYWdlJykuYXR0cignc3JjJywgbG9nb0RhcmspO1xyXG4gICAgICAgICAgICAkKCcubG9nby1jb250YWluZXItbW9iaWxlJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgfSwgODAwKTtcclxuICAgICAgICAkKCcuaGlkZGVuLWJ5LW1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGV4cGFuZE1vYmlsZU1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI21vYmlsZS12aWV3LXRvcC1tZW51Jykuc2xpZGVEb3duKCdzbG93Jyk7XHJcbiAgICAgICAgJCgnLmhhbWJ1cmdlci1pbWFnZScpLmF0dHIoJ3NyYycsIGhhbWJ1cmdlckNvbXByZXNzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLmxvZ28tbW9iaWxlLWltYWdlJykuYXR0cignc3JjJywgbG9nb1doaXRlKTtcclxuICAgICAgICAgICAgJCgnLmxvZ28tY29udGFpbmVyLW1vYmlsZScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjMTIzZTdhJyk7XHJcbiAgICAgICAgfSwgODAwKTtcclxuICAgICAgICBpZiAod2luZG93V2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgJCgnLmhpZGRlbi1ieS1tZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjaGFuZ2VTbG9nYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgICQoJy5lbnRyZXByaWNlLWRlc2NyaXB0aW9uJykudGV4dCgnKEJhc2ljIGxpY2Vuc2UgYXZhaWxhYmxlKScpO1xyXG4gICAgICAgICAgICAkKCcjbWlkZGxlLWJveCAuYXJyb3dzJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93V2lkdGggPj0gNzY4KSB7XHJcbiAgICAgICAgICAgICQoJy5lbnRyZXByaWNlLWRlc2NyaXB0aW9uJykudGV4dCgnQXZhaWxhYmxlIHdpdGggU2l0ZVRyaWtzXFwncyBiYXNpYyBsaWNlbnNlLicpO1xyXG4gICAgICAgICAgICAkKCcjbWlkZGxlLWJveCAuYXJyb3dzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0b2dnbGVEZXRhaWxlZE1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1haW5Ecm9wZG93bi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRkZXRhaWxlZE1lbnVJdGVtLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcubWFpbi1hcnJvd3MnKS50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHZhciBzbGlkZVVwRG93bk1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI2hhbWJ1cmdlci1tZW51IGltZycpLmNsaWNrKGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBpZiAoJCgnOmFuaW1hdGVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNsaWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGV4cGFuZE1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsaWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyogVGVjaG5vbG9neSBhbmQgYWR2YW50YWdlcyAqL1xyXG4gICAgbGV0IGFkdmFudGFnZXNUb2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGFkdmFuYXRhZ2VzRHJvcGRvd24uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuYnVsbGV0cycpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcuZHJvcGRvd25PbmUtYWR2YW50YWdlJykudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB0ZWNobm9sb2d5TGlzdFRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkdGVjaG5vbG9neURyb3Bkb3duLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnRlY2hub2xvZ3ktbGlua3MnKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJCgnLmRyb3Bkb3duT25lLXRlY2gnKS50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGVudGVycHJpc2VGZWF0dXJlc01lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLndyYXBwZXItbWVudS1pdGVtcycpLm9uKCdjbGljaycsICQoJy5pdGVtLWhlYWRlcicpLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8kKCcuaXRlbS1hcnJvdycpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWJ1dHRvbi5oYXNDbGFzcygnaXRlbS1oZWFkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uID0gYnV0dG9uLnBhcmVudHMoJy5pdGVtLWhlYWRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24udG9nZ2xlQ2xhc3MoJ3doaXRlVGV4dCcpO1xyXG4gICAgICAgICAgICBidXR0b24ubmV4dCgpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICBidXR0b24uY2hpbGRyZW4oJ2ltZycpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbW9iaWxlSWNvblNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjbW9iaWxlLXZpZXctdG9wLW1lbnUnKS5vbignY2xpY2snLCAnLm1lbnUtaWNvbicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgJGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGJ1dHRvbi5oYXNDbGFzcygnbWVudS1pY29uJykpIHtcclxuICAgICAgICAgICAgICAgICRidXR0b24gPSAkYnV0dG9uLnBhcmVudHMoJy5tZW51LWljb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcjc3RhdGljLXNlY3Rpb24nKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKCRidXR0b24uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghJGJ1dHRvbi5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51LWljb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICRidXR0b24ucGFyZW50KCkucGFyZW50KCkubmV4dCgpLmh0bWwoc2VsZWN0ZWRTZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcmVtb3ZlTW9iaWxlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93V2lkdGggPiA3NjcgJiYgd2luZG93SGVpZ2h0ID4gNjIwKSB7XHJcbiAgICAgICAgICAgICQoJyNtb2JpbGUtdmlldy10b3AtbWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIC8vICQoJy5oaWRkZW4tYnktbWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGFuZ2VTbG9nYW46IGNoYW5nZVNsb2dhbixcclxuICAgICAgICBhZHZhbnRhZ2VzVG9nZ2xlOiBhZHZhbnRhZ2VzVG9nZ2xlLFxyXG4gICAgICAgIHRlY2hub2xvZ3lMaXN0VG9nZ2xlOiB0ZWNobm9sb2d5TGlzdFRvZ2dsZSxcclxuICAgICAgICB0b2dnbGVEZXRhaWxlZE1lbnU6IHRvZ2dsZURldGFpbGVkTWVudSxcclxuICAgICAgICBzbGlkZVVwRG93bk1lbnU6IHNsaWRlVXBEb3duTWVudSxcclxuICAgICAgICBtb2JpbGVJY29uU2VsZWN0OiBtb2JpbGVJY29uU2VsZWN0LFxyXG4gICAgICAgIGVudGVycHJpc2VGZWF0dXJlc01lbnU6IGVudGVycHJpc2VGZWF0dXJlc01lbnUsXHJcbiAgICAgICAgcmVtb3ZlTW9iaWxlTWVudTogcmVtb3ZlTW9iaWxlTWVudVxyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcblxyXG4vKiBCb3R0b20gbWVudSBkaXNwbGF5IGFuZCBmdW5jdGlvbmFsaXR5Ki9cclxuXHJcbnZhciBib3R0b21NZW51RnVuY3Rpb25hbGl0eSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWVudXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBsZXQgdXJsID0gJ2Rvd25sb2Fkcyc7XHJcbiAgICB2YXIgJGJvdHRvbVNlY3Rpb24gPSAkKCcuYm90dG9tLW1lbnUnKS5maW5kKCcuZmVhdHVyZS1jb250ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNoYW5nZU1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgbGV0IG1vYmlsZVZpZXcgPSAkKCcjbW9iaWxlLXZpZXctbWVudScpO1xyXG4gICAgICAgIGxldCBkZXNrdG9wVmlldyA9ICQoJyNkZXNrdG9wLXZpZXctbWVudScpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93V2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgQmx1ci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJCgnI2Rlc2t0b3Atdmlldy1tZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgJCgnI21vYmlsZS12aWV3LW1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dXaWR0aCA+PSA3NjgpIHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgc3RhdGUgb2YgdG9nZ2xlIG1lbnUgYW5kIGNsb3NlIGlmIGV4cGFuZGVkXHJcbiAgICAgICAgICAgIGlmICgkKCcudG9nZ2xlLW1lbnUnKS5hdHRyKCdkYXRhLW9wZW4tc3RhdGUnKSA9PT0gJ2V4cGFuZGVkJyAmJiB3aW5kb3dXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zaHJpbmstbWVudScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJyNkZXNrdG9wLXZpZXctbWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAkKCcjbW9iaWxlLXZpZXctbWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGxvYWREZWZhdWx0Qm90dG9tTWVudSA9IGZ1bmN0aW9uICh1cmwpIHtcclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9kaXNwbGF5L0dldFBhZ2VTdHJpbmc/cGFnZVVybD0nICsgdXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICRib3R0b21TZWN0aW9uLmh0bWwocmVzLnZpZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hhbmdlTWVudTogY2hhbmdlTWVudSxcclxuICAgICAgICBsb2FkRGVmYXVsdEJvdHRvbU1lbnU6IGxvYWREZWZhdWx0Qm90dG9tTWVudVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbi8qIFJlcXVlc3QgZGVtbyBidXR0b24gKi9cclxuXHJcbiQoJy5kZW1vLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKCcuYm90dG9tLW1lbnUnKS5vZmZzZXQoKS50b3BcclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgYm90dG9tTWVudUZ1bmN0aW9uYWxpdHkubG9hZERlZmF1bHRCb3R0b21NZW51KCdjb250YWN0LXVzJyk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYXR0YWNoUmVhZE1vcmVIYW5kbGVyKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcucmVhZC1tb3JlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0ICR0ZXh0QmxvY2tzID0gJHRhcmdldC5wYXJlbnRzKCcudHJlZS1yb3cnKS5maW5kKCcuY29udGVudCcpO1xyXG4gICAgICAgIGxldCAkcmVhZE1vcmVUZXh0ID0gJHRhcmdldC5wYXJlbnRzKCcudHJlZS1yb3cnKS5maW5kKCcucmVhZC1tb3JlJyk7XHJcblxyXG4gICAgICAgICR0ZXh0QmxvY2tzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzaG9ydC10ZXh0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyZWFkTW9yZVRleHQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCAkY3VycmVudFRhcmdldCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICRjdXJyZW50VGFyZ2V0LmNoaWxkcmVuKCcubW9yZScpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkY3VycmVudFRhcmdldC5jaGlsZHJlbignLmxlc3MnKS50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBob21lcGFnZURlc2t0b3BGdW5jVGlvbmFsaXR5LmxlYWZJbWFnZVRvZ2dsZSgpO1xyXG4gICAgaG9tZXBhZ2VEZXNrdG9wRnVuY1Rpb25hbGl0eS5tb3ZlVG9NaWRkbGVNZW51SWNvbigpO1xyXG5cclxuICAgIGF0dGFjaFJlYWRNb3JlSGFuZGxlcigpO1xyXG4gICAgLy8gICBhdHRhY2hUZXJtc0FuZENvbnRpZGlvbnNIYW5kbGVycygpO1xyXG59KTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbW9iaWxlTWVudUZ1bmN0aW9uYWxpdHkudG9nZ2xlRGV0YWlsZWRNZW51KCk7XHJcbiAgICBtb2JpbGVNZW51RnVuY3Rpb25hbGl0eS5zbGlkZVVwRG93bk1lbnUoKTtcclxuICAgIG1vYmlsZU1lbnVGdW5jdGlvbmFsaXR5LmFkdmFudGFnZXNUb2dnbGUoKTtcclxuICAgIG1vYmlsZU1lbnVGdW5jdGlvbmFsaXR5LnRlY2hub2xvZ3lMaXN0VG9nZ2xlKCk7XHJcbiAgICBtb2JpbGVNZW51RnVuY3Rpb25hbGl0eS5lbnRlcnByaXNlRmVhdHVyZXNNZW51KCk7XHJcbiAgICAvLyAgIG1vdmVUb01pZGRsZU1lbnVJY29uKCk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChob21lcGFnZURlc2t0b3BGdW5jVGlvbmFsaXR5LnJlc2l6ZUJsdWVOYXZiYXIpO1xyXG4kKHdpbmRvdykucmVhZHkoaG9tZXBhZ2VEZXNrdG9wRnVuY1Rpb25hbGl0eS5tb3ZlVG9NaWRkbGVNZW51SWNvbik7XHJcbi8vJCh3aW5kb3cpLnJlYWR5KGhvbWVwYWdlRGVza3RvcEZ1bmNUaW9uYWxpdHkucmVkcmF3U25vd2ZsYWtlR2xvYmFsLnJlRHJhd1Nub3dmbGFrZSk7XHJcbi8vJCh3aW5kb3cpLnJlc2l6ZShob21lcGFnZURlc2t0b3BGdW5jVGlvbmFsaXR5LnJlZHJhd1Nub3dmbGFrZUdsb2JhbC5yZURyYXdTbm93Zmxha2UpO1xyXG5cclxuJCh3aW5kb3cpLnJlYWR5KG1vYmlsZU1lbnVGdW5jdGlvbmFsaXR5LmNoYW5nZVNsb2dhbigpKTtcclxuJCh3aW5kb3cpLnJlc2l6ZShtb2JpbGVNZW51RnVuY3Rpb25hbGl0eS5jaGFuZ2VTbG9nYW4pO1xyXG4kKHdpbmRvdykucmVhZHkobW9iaWxlTWVudUZ1bmN0aW9uYWxpdHkubW9iaWxlSWNvblNlbGVjdCgpKTtcclxuJCh3aW5kb3cpLnJlYWR5KG1vYmlsZU1lbnVGdW5jdGlvbmFsaXR5LnJlbW92ZU1vYmlsZU1lbnUpO1xyXG4kKHdpbmRvdykucmVzaXplKG1vYmlsZU1lbnVGdW5jdGlvbmFsaXR5LnJlbW92ZU1vYmlsZU1lbnUpO1xyXG5cclxuJCh3aW5kb3cpLnJlYWR5KGJvdHRvbU1lbnVGdW5jdGlvbmFsaXR5LmNoYW5nZU1lbnUpO1xyXG4kKHdpbmRvdykucmVzaXplKGJvdHRvbU1lbnVGdW5jdGlvbmFsaXR5LmNoYW5nZU1lbnUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9