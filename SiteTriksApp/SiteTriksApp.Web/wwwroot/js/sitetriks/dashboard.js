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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/dashboard.js");
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

/***/ "./scripts/sitetriks/dashboard.js":
/*!****************************************!*\
  !*** ./scripts/sitetriks/dashboard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _googleAnalyticsDashboard = __webpack_require__(/*! ./google-analytics-dashboard.js */ "./scripts/sitetriks/google-analytics-dashboard.js");

$(document).ready(function () {
    (function (w, d, s, g, js, fs) {
        g = w.gapi || (w.gapi = {});g.analytics = { q: [], ready: function ready(f) {
                this.q.push(f);
            } };
        js = d.createElement(s);fs = d.getElementsByTagName(s)[0];
        js.src = 'https://apis.google.com/js/platform.js';
        fs.parentNode.insertBefore(js, fs);js.onload = function () {
            g.load('analytics');
        };
    })(window, document, 'script');

    gapi.analytics.ready(function () {
        if ($('.google-analytics-widget').length != 0) {
            _googleAnalyticsDashboard.googleAnalyticsWidgets.initGAOverview();
        }

        if ($('.google-analytics-countries').length != 0) {
            _googleAnalyticsDashboard.googleAnalyticsWidgets.initGACountry();
        }

        if ($('.google-analytics-browsers').length != 0) {
            _googleAnalyticsDashboard.googleAnalyticsWidgets.initGABrowsers();
        }

        if ($('.google-analytics-site-speed').length != 0) {
            _googleAnalyticsDashboard.googleAnalyticsWidgets.initGASiteSpeed();
        }
    });

    $('#dashbpard-widgets').sortable({
        stop: function stop(event, ui) {
            var sortedIDs = $('#dashbpard-widgets').sortable('toArray', { attribute: 'data-type' });

            _loader.Loader.show('#fff');
            _data.Data.postJson({ url: '/sitetriks/dashboardconfiguration/save', data: { names: sortedIDs } }).then(function (res) {
                _loader.Loader.hide();
            }, _data.Data.defaultError);
        }
    });

    var $container = $('.st-body-content');
    var dashboard = $container.find('.dashboard-wrapper');

    var $sideMenuButton = $('.open-side-nav.btn-side-nav img');
    if (dashboard.length >= 1) {
        $sideMenuButton.attr('src', '/images/show_white.svg');
    } else {
        $sideMenuButton.attr('src', '/images/show.svg');
    }
}); /* globals gapi */

/***/ }),

/***/ "./scripts/sitetriks/google-analytics-dashboard.js":
/*!*********************************************************!*\
  !*** ./scripts/sitetriks/google-analytics-dashboard.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* globals gapi */

var googleAnalyticsWidgets = function () {
    var viewId = 'ga:175953132';
    var clientId = '878677551693-jbqirg4cgnhu9dfr1c40rbno1t6a2tpb.apps.googleusercontent.com';

    function initGAOverview() {
        handleLogin();

        $('#ga-select').on('change', function (e) {
            $('#chart-container').html('');
            var selected = $('#ga-select option:selected').val();

            if (selected == 0) {
                var currSessionChart = new gapi.analytics.googleCharts.DataChart(sessionChartInfo);
                currSessionChart.set({ query: { ids: viewId } }).execute();
            } else {
                var currUserChart = new gapi.analytics.googleCharts.DataChart(usersChartInfo);
                currUserChart.set({ query: { ids: viewId } }).execute();
            }
        });

        var sessionChartInfo = {
            query: {
                metrics: 'ga:sessions',
                dimensions: 'ga:day',
                'start-date': '30daysAgo',
                'end-date': 'yesterday'
            },
            chart: {
                container: 'chart-container-overview-widget',
                type: 'LINE',
                options: {
                    width: '100%'
                }
            }
        };

        var usersChartInfo = {
            query: {
                metrics: 'ga:users',
                dimensions: 'ga:day',
                'start-date': '30daysAgo',
                'end-date': 'yesterday'
            },
            chart: {
                container: 'chart-container-overview-widget',
                type: 'LINE',
                options: {
                    width: '100%'
                }
            }
        };

        new gapi.analytics.googleCharts.DataChart(sessionChartInfo).set({ query: { ids: viewId } }).execute();
    }

    function initGACountry() {
        handleLogin();
        var sessionChartInfo = {
            query: {
                metrics: 'ga:sessions',
                dimensions: 'ga:country',
                'start-date': '30daysAgo',
                'end-date': 'yesterday',
                'max-results': 6,
                sort: '-ga:sessions'
            },
            chart: {
                container: 'chart-container-countries-widget',
                type: 'PIE',
                options: {
                    width: '100%',
                    pieHole: 4 / 9
                }
            }

        };
        new gapi.analytics.googleCharts.DataChart(sessionChartInfo).set({ query: { ids: viewId } }).execute();
    }

    function initGABrowsers() {
        handleLogin();

        var browsersChartInfo = {
            query: {
                metrics: 'ga:users',
                dimensions: 'ga:browser',
                'start-date': '30daysAgo',
                'end-date': 'yesterday',
                'max-results': 6,
                sort: '-ga:users'
            },
            chart: {
                container: 'chart-container-browsers-widget',
                type: 'PIE',
                options: {
                    width: '100%',
                    pieHole: 4 / 9
                }
            }
        };

        var osChartInfo = {
            query: {
                metrics: 'ga:users',
                dimensions: 'ga:operatingSystem',
                'start-date': '30daysAgo',
                'end-date': 'yesterday',
                'max-results': 6,
                sort: '-ga:users'
            },
            chart: {
                container: 'chart-container-browsers-widget',
                type: 'PIE',
                options: {
                    width: '100%',
                    pieHole: 4 / 9
                }
            }
        };

        $('#ga-browsers-select').on('change', function (e) {
            $('#chart-container-browsers-widget').html('');
            var selected = $('#ga-browsers-select option:selected').val();

            if (selected == 0) {
                var currSessionChart = new gapi.analytics.googleCharts.DataChart(browsersChartInfo);
                currSessionChart.set({ query: { ids: viewId } }).execute();
            } else {
                var currUserChart = new gapi.analytics.googleCharts.DataChart(osChartInfo);
                currUserChart.set({ query: { ids: viewId } }).execute();
            }
        });

        new gapi.analytics.googleCharts.DataChart(browsersChartInfo).set({ query: { ids: viewId } }).execute();
    }

    function initGASiteSpeed() {
        handleLogin();

        var siteSpeedChartInfo = {
            query: {
                metrics: 'ga:speedMetricsSample',
                dimensions: 'ga:day',
                'start-date': '30daysAgo',
                'end-date': 'yesterday'
            },
            chart: {
                container: 'chart-container-site-speed-widget',
                type: 'LINE',
                options: {
                    width: '100%'
                }
            }
        };

        new gapi.analytics.googleCharts.DataChart(siteSpeedChartInfo).set({ query: { ids: viewId } }).execute();
    }

    function handleLogin() {
        gapi.analytics.auth.authorize({
            container: 'embed-api-auth-container',
            clientid: clientId
        });
    }

    return {
        initGAOverview: initGAOverview,
        initGACountry: initGACountry,
        initGABrowsers: initGABrowsers,
        initGASiteSpeed: initGASiteSpeed
    };
}();

exports.googleAnalyticsWidgets = googleAnalyticsWidgets;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zaXRldHJpa3MvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL2dvb2dsZS1hbmFseXRpY3MtZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhdGEiLCJtYWtlUmVxdWVzdCIsImZldGNoIiwiaXNGdW5jdGlvbiIsIm1ha2VGZXRjaFJlcXVlc3QiLCJtYWtlQWpheFJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsImlzRm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyYW1zIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCIkIiwiYWpheCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImdldCIsImluZGV4T2YiLCJqc29uIiwidGV4dCIsImdldEpzb24iLCJkaXNhYmxlQ2FjaGUiLCJwb3N0SnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0Rm9ybSIsImZvcm1EYXRhIiwiZGVsZXRlSnNvbiIsImRlZmF1bHRFcnJvciIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZnVuYyIsInRvU3RyaW5nIiwiY2FsbCIsIkxvYWRlciIsImdpZlNyYyIsInNob3ciLCJjb2xvciIsImltZ1NyYyIsIkJsdXIiLCJhZGQiLCJhcHBlbmQiLCJzcmMiLCJjbGFzcyIsImhpZGUiLCJyZW1vdmUiLCJvbiIsImV2IiwiJHRhcmdldCIsInRhcmdldCIsImF0dHIiLCIkY29udGFpbmVyIiwiaGlkZU9uQ2xpY2siLCJhcHBlbmRUbyIsIlBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTIiwiUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTUyIsIkJMVVJfRUxFTUVOVF9DTEFTUyIsImFkZEJsdXIiLCJvcGFjaXR5IiwiYWRkQ2xhc3MiLCIkYmx1ckVsZW1lbnQiLCIkaXRlbUNvbnRhaW5lciIsIiRwcmV2aWV3Q29udGFpbmVyIiwicmVtb3ZlQmx1ciIsImNzcyIsImlzTmFOIiwiZmluZCIsInJlbW92ZUNsYXNzIiwiZG9jdW1lbnQiLCJyZWFkeSIsInciLCJkIiwicyIsImciLCJqcyIsImZzIiwiZ2FwaSIsImFuYWx5dGljcyIsInEiLCJmIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbmxvYWQiLCJsb2FkIiwid2luZG93IiwiZ29vZ2xlQW5hbHl0aWNzV2lkZ2V0cyIsImluaXRHQU92ZXJ2aWV3IiwiaW5pdEdBQ291bnRyeSIsImluaXRHQUJyb3dzZXJzIiwiaW5pdEdBU2l0ZVNwZWVkIiwic29ydGFibGUiLCJzdG9wIiwiZXZlbnQiLCJ1aSIsInNvcnRlZElEcyIsImF0dHJpYnV0ZSIsIm5hbWVzIiwiZGFzaGJvYXJkIiwiJHNpZGVNZW51QnV0dG9uIiwidmlld0lkIiwiY2xpZW50SWQiLCJoYW5kbGVMb2dpbiIsImUiLCJodG1sIiwic2VsZWN0ZWQiLCJ2YWwiLCJjdXJyU2Vzc2lvbkNoYXJ0IiwiZ29vZ2xlQ2hhcnRzIiwiRGF0YUNoYXJ0Iiwic2Vzc2lvbkNoYXJ0SW5mbyIsInNldCIsInF1ZXJ5IiwiaWRzIiwiZXhlY3V0ZSIsImN1cnJVc2VyQ2hhcnQiLCJ1c2Vyc0NoYXJ0SW5mbyIsIm1ldHJpY3MiLCJkaW1lbnNpb25zIiwiY2hhcnQiLCJjb250YWluZXIiLCJ0eXBlIiwib3B0aW9ucyIsIndpZHRoIiwic29ydCIsInBpZUhvbGUiLCJicm93c2Vyc0NoYXJ0SW5mbyIsIm9zQ2hhcnRJbmZvIiwic2l0ZVNwZWVkQ2hhcnRJbmZvIiwiYXV0aCIsImF1dGhvcml6ZSIsImNsaWVu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O0FBQ3JCaEIsbUJBQU87QUFDSEsseUJBQVMsdUJBRE47QUFFSEMsNEJBQVksUUFGVDtBQUdILDhCQUFjLFdBSFg7QUFJSCw0QkFBWTtBQUpULGFBRGM7QUFPckJDLG1CQUFPO0FBQ0hDLDJCQUFXLG1DQURSO0FBRUhDLHNCQUFNLE1BRkg7QUFHSEMseUJBQVM7QUFDTEMsMkJBQU87QUFERjtBQUhOO0FBUGMsU0FBekI7O0FBZ0JBLFlBQUlqRCxLQUFLQyxTQUFMLENBQWVpQyxZQUFmLENBQTRCQyxTQUFoQyxDQUEwQ21CLGtCQUExQyxFQUE4RGpCLEdBQTlELENBQWtFLEVBQUVDLE9BQU8sRUFBRUMsS0FBS2IsTUFBUCxFQUFULEVBQWxFLEVBQThGYyxPQUE5RjtBQUNIOztBQUVELGFBQVNaLFdBQVQsR0FBdUI7QUFDbkI1QixhQUFLQyxTQUFMLENBQWVzRCxJQUFmLENBQW9CQyxTQUFwQixDQUE4QjtBQUMxQlYsdUJBQVcsMEJBRGU7QUFFMUJXLHNCQUFVOUI7QUFGZ0IsU0FBOUI7QUFJSDs7QUFFRCxXQUFPO0FBQ0hkLHNDQURHO0FBRUhDLG9DQUZHO0FBR0hDLHNDQUhHO0FBSUhDO0FBSkcsS0FBUDtBQU1ILENBOUs0QixFQUE3Qjs7UUFnTFNKLHNCLEdBQUFBLHNCIiwiZmlsZSI6ImpzL3NpdGV0cmlrcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL3NpdGV0cmlrcy9kYXNoYm9hcmQuanNcIik7XG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsIi8qIGdsb2JhbHMgZ2FwaSAqLyBcclxuXHJcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3NXaWRnZXRzIH0gZnJvbSAnLi9nb29nbGUtYW5hbHl0aWNzLWRhc2hib2FyZC5qcyc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAoZnVuY3Rpb24gKHcsIGQsIHMsIGcsIGpzLCBmcykge1xyXG4gICAgICAgIGcgPSB3LmdhcGkgfHwgKHcuZ2FwaSA9IHt9KTsgZy5hbmFseXRpY3MgPSB7IHE6IFtdLCByZWFkeTogZnVuY3Rpb24gKGYpIHsgdGhpcy5xLnB1c2goZik7IH0gfTtcclxuICAgICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsgZnMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG4gICAgICAgIGpzLnNyYyA9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbGF0Zm9ybS5qcyc7XHJcbiAgICAgICAgZnMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZzKTsganMub25sb2FkID0gZnVuY3Rpb24gKCkgeyBnLmxvYWQoJ2FuYWx5dGljcycpOyB9O1xyXG4gICAgfSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JykpO1xyXG5cclxuXHJcbiAgICBnYXBpLmFuYWx5dGljcy5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoJy5nb29nbGUtYW5hbHl0aWNzLXdpZGdldCcpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGdvb2dsZUFuYWx5dGljc1dpZGdldHMuaW5pdEdBT3ZlcnZpZXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCcuZ29vZ2xlLWFuYWx5dGljcy1jb3VudHJpZXMnKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICBnb29nbGVBbmFseXRpY3NXaWRnZXRzLmluaXRHQUNvdW50cnkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCcuZ29vZ2xlLWFuYWx5dGljcy1icm93c2VycycpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGdvb2dsZUFuYWx5dGljc1dpZGdldHMuaW5pdEdBQnJvd3NlcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCcuZ29vZ2xlLWFuYWx5dGljcy1zaXRlLXNwZWVkJykubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgZ29vZ2xlQW5hbHl0aWNzV2lkZ2V0cy5pbml0R0FTaXRlU3BlZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZGFzaGJwYXJkLXdpZGdldHMnKS5zb3J0YWJsZSh7XHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICB2YXIgc29ydGVkSURzID0gJCgnI2Rhc2hicGFyZC13aWRnZXRzJykuc29ydGFibGUoJ3RvQXJyYXknLCB7IGF0dHJpYnV0ZTogJ2RhdGEtdHlwZScgfSk7XHJcblxyXG4gICAgICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9kYXNoYm9hcmRjb25maWd1cmF0aW9uL3NhdmUnLCBkYXRhOiB7IG5hbWVzOiBzb3J0ZWRJRHMgfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgJGNvbnRhaW5lciA9ICQoJy5zdC1ib2R5LWNvbnRlbnQnKTtcclxuICAgIGxldCBkYXNoYm9hcmQgPSAkY29udGFpbmVyLmZpbmQoJy5kYXNoYm9hcmQtd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCAkc2lkZU1lbnVCdXR0b24gPSAkKCcub3Blbi1zaWRlLW5hdi5idG4tc2lkZS1uYXYgaW1nJyk7XHJcbiAgICBpZiAoZGFzaGJvYXJkLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgJHNpZGVNZW51QnV0dG9uLmF0dHIoJ3NyYycsICcvaW1hZ2VzL3Nob3dfd2hpdGUuc3ZnJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkc2lkZU1lbnVCdXR0b24uYXR0cignc3JjJywgJy9pbWFnZXMvc2hvdy5zdmcnKTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8qIGdsb2JhbHMgZ2FwaSAqL1xyXG5cclxudmFyIGdvb2dsZUFuYWx5dGljc1dpZGdldHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHZpZXdJZCA9ICdnYToxNzU5NTMxMzInO1xyXG4gICAgbGV0IGNsaWVudElkID0gJzg3ODY3NzU1MTY5My1qYnFpcmc0Y2duaHU5ZGZyMWM0MHJibm8xdDZhMnRwYi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEdBT3ZlcnZpZXcoKSB7XHJcbiAgICAgICAgaGFuZGxlTG9naW4oKTtcclxuXHJcbiAgICAgICAgJCgnI2dhLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAkKCcjY2hhcnQtY29udGFpbmVyJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9ICQoJyNnYS1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJTZXNzaW9uQ2hhcnQgPSBuZXcgZ2FwaS5hbmFseXRpY3MuZ29vZ2xlQ2hhcnRzLkRhdGFDaGFydChzZXNzaW9uQ2hhcnRJbmZvKTtcclxuICAgICAgICAgICAgICAgIGN1cnJTZXNzaW9uQ2hhcnQuc2V0KHsgcXVlcnk6IHsgaWRzOiB2aWV3SWQgfSB9KS5leGVjdXRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyclVzZXJDaGFydCA9IG5ldyBnYXBpLmFuYWx5dGljcy5nb29nbGVDaGFydHMuRGF0YUNoYXJ0KHVzZXJzQ2hhcnRJbmZvKTtcclxuICAgICAgICAgICAgICAgIGN1cnJVc2VyQ2hhcnQuc2V0KHsgcXVlcnk6IHsgaWRzOiB2aWV3SWQgfSB9KS5leGVjdXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzZXNzaW9uQ2hhcnRJbmZvID0ge1xyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgbWV0cmljczogJ2dhOnNlc3Npb25zJyxcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6ICdnYTpkYXknLFxyXG4gICAgICAgICAgICAgICAgJ3N0YXJ0LWRhdGUnOiAnMzBkYXlzQWdvJyxcclxuICAgICAgICAgICAgICAgICdlbmQtZGF0ZSc6ICd5ZXN0ZXJkYXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdjaGFydC1jb250YWluZXItb3ZlcnZpZXctd2lkZ2V0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMSU5FJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgdXNlcnNDaGFydEluZm8gPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBtZXRyaWNzOiAnZ2E6dXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogJ2dhOmRheScsXHJcbiAgICAgICAgICAgICAgICAnc3RhcnQtZGF0ZSc6ICczMGRheXNBZ28nLFxyXG4gICAgICAgICAgICAgICAgJ2VuZC1kYXRlJzogJ3llc3RlcmRheSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2NoYXJ0LWNvbnRhaW5lci1vdmVydmlldy13aWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xJTkUnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBuZXcgZ2FwaS5hbmFseXRpY3MuZ29vZ2xlQ2hhcnRzLkRhdGFDaGFydChzZXNzaW9uQ2hhcnRJbmZvKS5zZXQoeyBxdWVyeTogeyBpZHM6IHZpZXdJZCB9IH0pLmV4ZWN1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0R0FDb3VudHJ5KCkge1xyXG4gICAgICAgIGhhbmRsZUxvZ2luKCk7XHJcbiAgICAgICAgbGV0IHNlc3Npb25DaGFydEluZm8gPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBtZXRyaWNzOiAnZ2E6c2Vzc2lvbnMnLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogJ2dhOmNvdW50cnknLFxyXG4gICAgICAgICAgICAgICAgJ3N0YXJ0LWRhdGUnOiAnMzBkYXlzQWdvJyxcclxuICAgICAgICAgICAgICAgICdlbmQtZGF0ZSc6ICd5ZXN0ZXJkYXknLFxyXG4gICAgICAgICAgICAgICAgJ21heC1yZXN1bHRzJzogNixcclxuICAgICAgICAgICAgICAgIHNvcnQ6ICctZ2E6c2Vzc2lvbnMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdjaGFydC1jb250YWluZXItY291bnRyaWVzLXdpZGdldCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUElFJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpZUhvbGU6IDQgLyA5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgZ2FwaS5hbmFseXRpY3MuZ29vZ2xlQ2hhcnRzLkRhdGFDaGFydChzZXNzaW9uQ2hhcnRJbmZvKS5zZXQoeyBxdWVyeTogeyBpZHM6IHZpZXdJZCB9IH0pLmV4ZWN1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0R0FCcm93c2VycygpIHtcclxuICAgICAgICBoYW5kbGVMb2dpbigpO1xyXG5cclxuICAgICAgICBsZXQgYnJvd3NlcnNDaGFydEluZm8gPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBtZXRyaWNzOiAnZ2E6dXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uczogJ2dhOmJyb3dzZXInLFxyXG4gICAgICAgICAgICAgICAgJ3N0YXJ0LWRhdGUnOiAnMzBkYXlzQWdvJyxcclxuICAgICAgICAgICAgICAgICdlbmQtZGF0ZSc6ICd5ZXN0ZXJkYXknLFxyXG4gICAgICAgICAgICAgICAgJ21heC1yZXN1bHRzJzogNixcclxuICAgICAgICAgICAgICAgIHNvcnQ6ICctZ2E6dXNlcnMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdjaGFydC1jb250YWluZXItYnJvd3NlcnMtd2lkZ2V0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQSUUnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGllSG9sZTogNCAvIDlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBvc0NoYXJ0SW5mbyA9IHtcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIG1ldHJpY3M6ICdnYTp1c2VycycsXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiAnZ2E6b3BlcmF0aW5nU3lzdGVtJyxcclxuICAgICAgICAgICAgICAgICdzdGFydC1kYXRlJzogJzMwZGF5c0FnbycsXHJcbiAgICAgICAgICAgICAgICAnZW5kLWRhdGUnOiAneWVzdGVyZGF5JyxcclxuICAgICAgICAgICAgICAgICdtYXgtcmVzdWx0cyc6IDYsXHJcbiAgICAgICAgICAgICAgICBzb3J0OiAnLWdhOnVzZXJzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnY2hhcnQtY29udGFpbmVyLWJyb3dzZXJzLXdpZGdldCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUElFJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpZUhvbGU6IDQgLyA5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKCcjZ2EtYnJvd3NlcnMtc2VsZWN0Jykub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICQoJyNjaGFydC1jb250YWluZXItYnJvd3NlcnMtd2lkZ2V0JykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9ICQoJyNnYS1icm93c2Vycy1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJTZXNzaW9uQ2hhcnQgPSBuZXcgZ2FwaS5hbmFseXRpY3MuZ29vZ2xlQ2hhcnRzLkRhdGFDaGFydChicm93c2Vyc0NoYXJ0SW5mbyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyU2Vzc2lvbkNoYXJ0LnNldCh7IHF1ZXJ5OiB7IGlkczogdmlld0lkIH0gfSkuZXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJVc2VyQ2hhcnQgPSBuZXcgZ2FwaS5hbmFseXRpY3MuZ29vZ2xlQ2hhcnRzLkRhdGFDaGFydChvc0NoYXJ0SW5mbyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyVXNlckNoYXJ0LnNldCh7IHF1ZXJ5OiB7IGlkczogdmlld0lkIH0gfSkuZXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBuZXcgZ2FwaS5hbmFseXRpY3MuZ29vZ2xlQ2hhcnRzLkRhdGFDaGFydChicm93c2Vyc0NoYXJ0SW5mbykuc2V0KHsgcXVlcnk6IHsgaWRzOiB2aWV3SWQgfSB9KS5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEdBU2l0ZVNwZWVkKCkge1xyXG4gICAgICAgIGhhbmRsZUxvZ2luKCk7XHJcblxyXG4gICAgICAgIGxldCBzaXRlU3BlZWRDaGFydEluZm8gPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBtZXRyaWNzOiAnZ2E6c3BlZWRNZXRyaWNzU2FtcGxlJyxcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6ICdnYTpkYXknLFxyXG4gICAgICAgICAgICAgICAgJ3N0YXJ0LWRhdGUnOiAnMzBkYXlzQWdvJyxcclxuICAgICAgICAgICAgICAgICdlbmQtZGF0ZSc6ICd5ZXN0ZXJkYXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdjaGFydC1jb250YWluZXItc2l0ZS1zcGVlZC13aWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xJTkUnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG5ldyBnYXBpLmFuYWx5dGljcy5nb29nbGVDaGFydHMuRGF0YUNoYXJ0KHNpdGVTcGVlZENoYXJ0SW5mbykuc2V0KHsgcXVlcnk6IHsgaWRzOiB2aWV3SWQgfSB9KS5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTG9naW4oKSB7XHJcbiAgICAgICAgZ2FwaS5hbmFseXRpY3MuYXV0aC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdlbWJlZC1hcGktYXV0aC1jb250YWluZXInLFxyXG4gICAgICAgICAgICBjbGllbnRpZDogY2xpZW50SWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRHQU92ZXJ2aWV3LFxyXG4gICAgICAgIGluaXRHQUNvdW50cnksXHJcbiAgICAgICAgaW5pdEdBQnJvd3NlcnMsXHJcbiAgICAgICAgaW5pdEdBU2l0ZVNwZWVkXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgZ29vZ2xlQW5hbHl0aWNzV2lkZ2V0cyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9