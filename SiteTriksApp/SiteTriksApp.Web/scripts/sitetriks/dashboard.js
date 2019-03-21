/* globals gapi */ 

import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { googleAnalyticsWidgets } from './google-analytics-dashboard.js';

$(document).ready(function () {
    (function (w, d, s, g, js, fs) {
        g = w.gapi || (w.gapi = {}); g.analytics = { q: [], ready: function (f) { this.q.push(f); } };
        js = d.createElement(s); fs = d.getElementsByTagName(s)[0];
        js.src = 'https://apis.google.com/js/platform.js';
        fs.parentNode.insertBefore(js, fs); js.onload = function () { g.load('analytics'); };
    }(window, document, 'script'));


    gapi.analytics.ready(function () {
        if ($('.google-analytics-widget').length != 0) {
            googleAnalyticsWidgets.initGAOverview();
        }

        if ($('.google-analytics-countries').length != 0) {
            googleAnalyticsWidgets.initGACountry();
        }

        if ($('.google-analytics-browsers').length != 0) {
            googleAnalyticsWidgets.initGABrowsers();
        }

        if ($('.google-analytics-site-speed').length != 0) {
            googleAnalyticsWidgets.initGASiteSpeed();
        }
    });

    $('#dashbpard-widgets').sortable({
        stop: function (event, ui) {
            var sortedIDs = $('#dashbpard-widgets').sortable('toArray', { attribute: 'data-type' });

            Loader.show('#fff');
            Data.postJson({ url: '/sitetriks/dashboardconfiguration/save', data: { names: sortedIDs } }).then(function (res) {
                Loader.hide();
            }, Data.defaultError);
        }
    });

    let $container = $('.st-body-content');
    let dashboard = $container.find('.dashboard-wrapper');

    let $sideMenuButton = $('.open-side-nav.btn-side-nav img');
    if (dashboard.length >= 1) {
        $sideMenuButton.attr('src', '/images/show_white.svg');
    }
    else {
        $sideMenuButton.attr('src', '/images/show.svg');
    }
});
