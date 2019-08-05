/* globals gapi */

var googleAnalyticsWidgets = (function () {
    let viewId = 'ga:175953132';
    let clientId = '878677551693-jbqirg4cgnhu9dfr1c40rbno1t6a2tpb.apps.googleusercontent.com';

    function initGAOverview() {
        handleLogin();

        $('#ga-select').on('change', (e) => {
            $('#chart-container').html('');
            var selected = $('#ga-select option:selected').val();

            if (selected == 0) {
                let currSessionChart = new gapi.analytics.googleCharts.DataChart(sessionChartInfo);
                currSessionChart.set({ query: { ids: viewId } }).execute();
            } else {
                let currUserChart = new gapi.analytics.googleCharts.DataChart(usersChartInfo);
                currUserChart.set({ query: { ids: viewId } }).execute();
            }
        });


        let sessionChartInfo = {
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

        let usersChartInfo = {
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
        let sessionChartInfo = {
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

        let browsersChartInfo = {
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

        let osChartInfo = {
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

        $('#ga-browsers-select').on('change', (e) => {
            $('#chart-container-browsers-widget').html('');
            var selected = $('#ga-browsers-select option:selected').val();

            if (selected == 0) {
                let currSessionChart = new gapi.analytics.googleCharts.DataChart(browsersChartInfo);
                currSessionChart.set({ query: { ids: viewId } }).execute();
            } else {
                let currUserChart = new gapi.analytics.googleCharts.DataChart(osChartInfo);
                currUserChart.set({ query: { ids: viewId } }).execute();
            }
        });


        new gapi.analytics.googleCharts.DataChart(browsersChartInfo).set({ query: { ids: viewId } }).execute();
    }

    function initGASiteSpeed() {
        handleLogin();

        let siteSpeedChartInfo = {
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
        initGAOverview,
        initGACountry,
        initGABrowsers,
        initGASiteSpeed
    };
})();

export { googleAnalyticsWidgets };
