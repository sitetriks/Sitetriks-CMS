import './layout.js';

import { Data } from '../common/data.js';

function initConfiguration() {
    $('#save-dashboard-config').on('click', function () {
        var dashboardWidgetNames = [];
        $('.checkboxes input:checked').each(function () {
            dashboardWidgetNames.push($(this).attr('name'));
        });

        Data.postJson({ url: '/sitetriks/DashboardConfiguration/Save', data: { names: dashboardWidgetNames } }).then(function (res) {
            window.location.replace('/sitetriks');
        });
    });
}

window.initConfiguration = initConfiguration;
s