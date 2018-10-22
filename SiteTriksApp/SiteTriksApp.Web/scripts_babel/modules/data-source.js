/* globals Data, Loader */
'use strict';

function DataSource(dataSource) {
    var type = dataSource.type;
    var sourceUrl = dataSource.url;
    var defaultFilters = dataSource.defaultFilters || [];
    var cachedData = [];

    var clientFilters = {
        1: function _(item, property, value) {
            // number equal
            return item[property] === value;
        },
        2: function _(item, property, value) {
            // number lower than 
            return +item[property] < +value;
        },
        4: function _(item, property, value) {
            // number greater than
            return +item[property] > +value;
        },
        7: function _(item, property, value) {
            //string contains pattern
            return item[property] && item[property].toLowerCase().includes(value.toLowerCase());
        }
    };

    function getData(_ref) {
        var filters = _ref.filters,
            paging = _ref.paging,
            sorting = _ref.sorting,
            isForced = _ref.isForced;

        var request = void 0;
        if (type === 'server') {
            // pass the filters to server and return data;
            request = loadData({ filters: filters, paging: paging, sorting: sorting });
        } else {
            if (isForced) {
                // pass the filters to server;
                request = loadData({}).then(function (res) {
                    cachedData = res.items;
                    return res;
                });
                // update cached data;
            } else {
                // get cached data;
                request = new Promise(function (resolve, reject) {
                    resolve({ success: true, items: JSON.parse(JSON.stringify(cachedData)) });
                });
            }

            // then apply client side filters

            request = request.then(function (res) {
                var result = filter(res.items, filters);
                result = sort(result, sorting);
                var count = result.length;
                var nextPageExists = false;
                if (paging.size !== 'all' && res.items.length > paging.size && paging.page * paging.size < count) {
                    nextPageExists = true;
                }

                result = page(result, paging);

                return { success: res.success, count: count, items: result, nextPageExists: nextPageExists };
            });
        }

        // return promise with the data
        return request;
    }

    function loadData(_ref2) {
        var filters = _ref2.filters,
            paging = _ref2.paging,
            sorting = _ref2.sorting;

        Loader.show('#fff');
        var body = { filters: [] };
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
        var result = items;

        var _loop = function _loop(i) {
            if (typeof filters[i].value === 'undefined' || filters[i].value === null || !clientFilters[filters[i].comparison]) {
                return 'continue';
            }

            result = result.filter(function (item) {
                return clientFilters[filters[i].comparison](item, filters[i].propertyName, filters[i].value);
            });
        };

        for (var i = 0; i < filters.length; i += 1) {
            var _ret = _loop(i);

            if (_ret === 'continue') continue;
        }

        return result;
    }

    function sort(items, sorting) {
        if (!sorting || !sorting.by) {
            return items;
        }

        var direction = 1;
        if (+sorting.order === 1) {
            direction = -1;
        }

        return items.sort(function (a, b) {
            var left = a[sorting.by] || '';
            var right = b[sorting.by] || '';

            return (left > right ? 1 : left < right ? -1 : 0) * direction;
        });
    }

    function page(items, paging) {
        if (paging.size === 'all') {
            return items;
        }

        var start = (paging.page - 1) * paging.size;
        var end = start + +paging.size;
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

    return {
        getData: getData,
        updateDefaultFilters: updateDefaultFilters
    };
}