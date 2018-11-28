/* globals Data, Loader */
'use strict';

function DataSource(dataSource) {
    let type = dataSource.type;
    let sourceUrl = dataSource.url;
    let defaultFilters = dataSource.defaultFilters || [];
    let cachedData = [];

    let clientFilters = {
        1: function (item, property, value) { // number equal
            return item[property] === value;
        },
        2: function (item, property, value) { // number lower than 
            return +item[property] < +value;
        },
        4: function (item, property, value) { // number greater than
            return +item[property] > +value;
        },
        7: function (item, property, value) { //string contains pattern
            return item[property] && item[property].toLowerCase().includes(value.toLowerCase());
        }
    };

    function getData({ filters, paging, sorting, isForced }) {
        let request;
        if (type === 'server') {
            // pass the filters to server and return data;
            request = loadData({ filters, paging, sorting });
        } else {
            if (isForced) {
                // pass the filters to server;
                request = loadData({}).then(res => {
                    cachedData = res.items;
                    return res;
                });
                // update cached data;
            } else {
                // get cached data;
                request = new Promise((resolve, reject) => {
                    resolve({ success: true, items: JSON.parse(JSON.stringify(cachedData)) });
                });
            }

            // then apply client side filters

            request = request.then(res => {
                let result = filter(res.items, filters);
                result = sort(result, sorting);
                let count = result.length;
                let nextPageExists = false;
                if (paging.size !== 'all' && res.items.length > paging.size && paging.page * paging.size < count) {
                    nextPageExists = true;
                }

                result = page(result, paging);

                return { success: res.success, count, items: result, nextPageExists };
            });
        }

        // return promise with the data
        return request;
    }

    function loadData({ filters, paging, sorting }) {
        Loader.show('#fff');
        let body = { filters: [] };
        if (type === 'server' && paging.size !== 'all') {
            body.filters = filters || [];
            body.skip = (paging.page - 1) * paging.size;
            body.take = paging.size;

            if (defaultFilters && defaultFilters.length > 0) {
                body.filters = body.filters.concat(defaultFilters);
            }

            if (sorting && sorting.by) {
                body.sortBy = {
                    column: sorting.by,
                    order: sorting.order
                };
            }
        }

        return Data.postJson({ url: sourceUrl, data: body }).then(function (res) {
            Loader.hide();
            return res;
        });
    }

    // client side method
    function filter(items, filters) {
        filters = (filters || []).concat(defaultFilters);
        let result = items;
        for (let i = 0; i < filters.length; i += 1) {
            if (typeof filters[i].value === 'undefined' || filters[i].value === null || !clientFilters[filters[i].comparison]) {
                continue;
            }

            result = result.filter(item => clientFilters[filters[i].comparison](item, filters[i].propertyName, filters[i].value));
        }

        return result;
    }

    function sort(items, sorting) {
        if (!sorting || !sorting.by) {
            return items;
        }

        let direction = 1;
        if (+sorting.order === 1) {
            direction = -1;
        }

        return items.sort(function (a, b) {
            let left = a[sorting.by] || '';
            let right = b[sorting.by] || '';

            return (left > right ? 1 : left < right ? -1 : 0) * direction;
        });
    }

    function page(items, paging) {
        if (paging.size === 'all') {
            return items;
        }

        let start = (paging.page - 1) * paging.size;
        let end = start + +paging.size;
        if (end > items.length) {
            end = items.length;
        }

        return items.slice(start, end);
    }

    function updateDefaultFilters(filters, clear) {
        if (filters) {
            if (clear) {
                defaultFilters = filters;
            } else {
                defaultFilters = defaultFilters.concat(filters);
            }
        } else {
            defaultFilters = [];
        }
    }

    function updateConfig(dataSource) {
        if (dataSource) {
            type = dataSource.type || type;
            sourceUrl = dataSource.url || sourceUrl;
            defaultFilters = dataSource.defaultFilters || defaultFilters || [];
        }
    }

    return {
        getData,
        updateDefaultFilters,
        updateConfig
    };
}
