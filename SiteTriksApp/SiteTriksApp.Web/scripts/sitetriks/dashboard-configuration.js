<<<<<<< HEAD
﻿import './layout.js';

import { Data } from '../common/data.js';

function initConfiguration() {
=======
﻿import { Data } from '../common/data.js';
import { WarningWindow } from '../modules/warning-window.js';

function initConfiguration() {
    WarningWindow.attach();
>>>>>>> origin/master
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
<<<<<<< HEAD
s
=======
>>>>>>> origin/master
