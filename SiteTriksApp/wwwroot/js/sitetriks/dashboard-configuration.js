"use strict";

function initConfiguration() {
    $(document).ready(function () {
        $("#save-dashboard-config").on('click', function () {
            var dashboardWidgetNames = [];
            $(".checkboxes input:checked").each(function () {
                dashboardWidgetNames.push($(this).attr('name'));
            });

            $.ajax({
                url: '/sitetriks/DashboardConfiguration/Save',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ names: dashboardWidgetNames }),
                success: function success(data) {
                    window.location.replace('/sitetriks');
                },
                error: function error() {}
            });
        });
    });
}