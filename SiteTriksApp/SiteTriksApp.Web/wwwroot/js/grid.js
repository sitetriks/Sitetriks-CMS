'use strict'

var Grid = function () {

    //var gridConfig = {
    //    columns : [],
    //    pager : {},
    //    data : {},
    //    filters : {},
    //    sorting : {},
    //    additional : {}
    //}

    /*var gridData = {
        items : [],
        filters : [],
        sortedColumn : [],
        page: int
        pageSize :int
    }*/

    function validateCol(colConfig) {

        //TODO; Validation for conConfig

        return true;
    }

    function buildColumnConfig(colConfigs, config) {
        config.columns = [];

        for (var i = 0; i < colConfigs.length; i++) {
            if (validateCol(colConfigs[i])) {
                config.columns.push(colConfigs[i]);
            }
        }

        return config;
    }

    function buildPagerConfig(pagerData, config) {
        //validations
        if (!Array.isArray(pagerData.pageSizes)) {
            throw Error("pageSizes not array");
        }

        let def = undefined;
        for (var i = 0; i < pagerData.pageSizes.length; i++) {
            var item = pagerData.pageSizes[i];

            if (+item == NaN || +item < 0) {
                throw Error("pageSizes not a number");
            }

            if (item === pagerData.default) {
                def = pagerData.default;
            }
        }

        config.pager = {};
        config.pager.pageSizes = pagerData.pageSizes;
        config.pager.pageReadOnly = pagerData.pageReadOnly;
        config.pager.default = def;

        return config;
    }

    function buildDataConfig(dataConfig, config) {
        config.data = {};
        config.data.onGetData = getData;
        config.data.link = dataConfig.link;
        config.data.serverSide = dataConfig.serverSide;
        config.data.hasNesting = dataConfig.hasNesting || false;
        config.data.nestingPropertyName = dataConfig.nestingPropertyName || null;

        return config;
    }

    function getData() {
        Loader.show(true);

        let body;
        if (this.config.data.serverSide && this.pageSize !== 'all') {
            body = {
                skip: (this.page - 1) * this.pageSize,
                take: this.pageSize
            }
        } else {
            body = {};
        }

        body.filters = this.filters || [];
        if (this.config.defaultFilters && this.config.defaultFilters.length > 0) {
            body.filters = body.filters.concat(this.config.defaultFilters);
        }

        if (this.sortedColumn && this.sortedColumn.column) {
            body.sortBy = {
                column: this.sortedColumn.column,
                order: this.sortedColumn.order
            }
        }


        let gridIsEmpty;
        return Data.postJson({ url: this.config.data.link, data: body }).then(
            function (res) {
                if (res.success && res.items) {
                    let itemsCount = res.items.length;

                    let $grid = $('.grid');
                    if (itemsCount === 0) {
                        $grid.addClass('empty');
                    } else {
                        $grid.removeClass('empty');
                    }
                } else {
                    console.warn('No items found in grid.');
                }
                return res;
            }) .then(function (res) {
                // console.log(res)
                Loader.hide();
                return res;
            });
    }

    function updateData(isForced) {
        let data = this;
        let config = this.config;

        let gridIsEmpty;
        if (!!config.data.serverSide === true) {
            gridIsEmpty = this.getData().then(function (res) {
                if (res.success) {
                    data.items = res.items;
                    data.filterItems = data.items;
                }

                if (res.nextPageExists) {
                    data.nextPageExists = true;
                } else {
                    data.nextPageExists = false;
                }

                if (data.pageSize !== 'all' && res.count > 0) {
                    data.pagesCount = Math.ceil(res.count / data.pageSize);
                } else {
                    data.pagesCount = 1;
                }

                data.itemsCount = res.count;

                return res;
            });
        } else if (isForced) {
            gridIsEmpty = this.getData().then(function (res) {
                let items = res.items;

                let filteredItems = clientSideFilter(items, data.filters);

                let sortedItems = clientSideSorting(filteredItems, data.sortedColumn);
                let pagedData;
                if (data.pageSize === 'all') {
                    pagedData = sortedItems;
                    data.nextPageExists = false;
                } else {
                    pagedData = clientSidePaging(sortedItems, data.page - 1, data.pageSize);

                    if ((pagedData.length < data.pageSize) || ((data.page) * data.pageSize >= sortedItems.length)) {
                        data.nextPageExists = false;
                    } else {
                        data.nextPageExists = true;
                    }
                }

                data.filterItems = pagedData;
                if (data.pageSize !== 'all' && res.count > 0) {
                    data.pagesCount = Math.ceil(res.count / data.pageSize);
                } else {
                    data.pagesCount = 1;
                }

                data.itemsCount = res.count;

                return { success: true, items: pagedData };
            });
        } else {
            gridIsEmpty = new Promise(function (resolve, reject) {
                var items = data.items;

                var filteredItems = clientSideFilter(items, data.filters);

                var sortedItems = clientSideSorting(filteredItems, data.sortedColumn);
                let pagedData;
                if (data.pageSize === 'all') {
                    pagedData = sortedItems;
                    data.nextPageExists = false;
                } else {
                    pagedData = clientSidePaging(sortedItems, data.page - 1, data.pageSize);

                    if ((pagedData.length < data.pageSize) || ((data.page) * data.pageSize >= sortedItems.length)) {
                        data.nextPageExists = false;
                    } else {
                        data.nextPageExists = true;
                    }
                }

                data.filterItems = pagedData;
                if (data.pageSize !== 'all' && sortedItems.length > 0) {
                    data.pagesCount = Math.ceil(sortedItems.length / data.pageSize);
                } else {
                    data.pagesCount = 1;
                }
                resolve({ success: true, items: JSON.parse(JSON.stringify(pagedData)) });
            });
        }

        return gridIsEmpty.then(
            function (res) {
                if (res.success && res.items) {
                    let itemsCount = res.items.length;
                    let $grid = $(data.selector);
                    console.log($grid);
                    if (itemsCount === 0) {
                        $grid.addClass('empty');
                    } else {
                        $grid.removeClass('empty');
                    }
                } else {
                    console.warn('No items found in grid.');
                }
                return res;
            });
    }

    function clientSidePaging(items, page, pageSize) {
        let start = page * pageSize;
        let end = start + +pageSize;
        if (end > items.length) {
            end = items.length;
        }

        return items.slice(start, end);
    }

    function clientSideSorting(items, sortedColumn) {
        if (!sortedColumn || !sortedColumn.column) {
            return items;
        }
        //{name, direction} name - name of field/column, direction - is ascedning
        var sorted = items;
        var direction = 1;
        if (+sortedColumn.order === 1) {
            direction = -1;
        }

        sorted = sorted.sort(function (a, b) {
            let result = 0;
            let left = a[sortedColumn.column] || '';
            let right = b[sortedColumn.column] || '';

            if (left > right) {
                result = 1 * direction;
            }

            if (left < right) {
                result = -1 * direction;
            }
            return result;
        });

        return sorted;

    }

    function clientSideFilter(items, filters) {
        // filter structure
        // { name, type, value}

        var result = items; // array

        for (var i = 0; i < filters.length; i++) {
            if (result.length == 0) {
                break;
            }

            var filter = filters[i];

            if (filter.value == null) {
                continue;
            }

            if (filter.comparison === 7) {
                result = result.filter(function (item) {
                    return filterStringContains(item, filter.propertyName, filter.value);
                })
            }

            if (filter.comparison === 4) {
                result = result.filter(function (item) {
                    return filterNumberGreater(item, filter.propertyName, filter.value);
                })
            }

            if (filter.comparison === 1) {
                result = result.filter(function (item) {
                    return filterNumberEquals(item, filter.propertyName, filter.value);
                })
            }

            if (filter.comparison === 2) {
                result = result.filter(function (item) {
                    return filterNumberSmaller(item, filter.propertyName, filter.value);
                })
            }
        }

        return result;
    }

    // filter functions
    function filterNumberGreater(item, field, value) {
        return item[field] > value;
    }

    function filterNumberSmaller(item, field, value) {
        return item[field] < value;
    }

    function filterNumberEquals(item, field, value) {
        return item[field] == value;
    }

    function filterStringContains(item, field, value) {
        if (item[field]) {
            return item[field].toLowerCase().includes(value.toLowerCase());
        }

        return false;
    }
    // end of filter functions

    //paging
    function onNextPage() {
        this.page += 1;
        return this.updateData();
    }

    function onPreviousPage() {
        if (this.page > 0) {
            this.page -= 1;
            return this.updateData();
        }

        return Promise.reject(new Error('onPreviousPage Error'));
    }

    function onSetPage(page) {
        let condition = this.pageSize * (page - 1) < this.filterItems.length;
        if (page > 0 && condition) {
            this.page = page;
            return this.updateData()
        }

        return Promise.reject(new Error('onSetPage Error'));
    }

    // set pagesize
    function setPageSize(pageSize) {
        // get all data
        //var data = $(table).data('sitetriksGrid');

        //if (pageSizeIndex < 0 && table.data('sitetriksGrid').config.pager.pageSizes.length <= pageSizeIndex) {
        //    throw new Error("Invalid page size");
        //}

        //$(table).data('sitetriksGrid').pageSize = table.data('sitetriksGrid').config.pager.pageSizes[pageSizeIndex];

        // changed to pageSize from index, simplifies testing
        this.pageSize = pageSize;
        this.page = 1;
        if (pageSize !== 'all' && this.itemsCount > 0) {
            this.pagesCount = Math.ceil(this.itemsCount / this.pageSize);
        } else {
            this.pagesCount = 1;
        }

        // update the table according to the page size
        return this.updateData();
    }

    function buildGridConfig(columns, buttons, pager, data) {

        let config = {};

        config = buildColumnConfig(columns, config);
        config = buildPagerConfig(pager, config);
        config = buildDataConfig(data, config);
        config.buttons = buttons;
        config.defaultFilters = [];

        return config;
    }

    function init(selector, config) {
        let pageSize = config.pager.pageSizes[0];
        if (config.pager.default) {
            pageSize = config.pager.default;
        }

        let page = 1;
        let tableData = {
            selector: selector,
            config: config,
            filters: [],
            sortedColumn: {},
            page: page,
            pageSize: pageSize,
            getData: config.data.onGetData,
            updateData: updateData,
            nextPage: onNextPage,
            previousPage: onPreviousPage,
            setPage: onSetPage,
            setPageSize: setPageSize,
            update: update,
            createButtons: createButtons,
            createHeader: createHeader,
            createBody: createBody,
            buildBody: buildBody,
            updateBody: updateBody,
            createPager: createPager,
            changeDefaultFilter: changeDefaultFilter
        };

        tableData.getData({ config: config, page: page, pageSize: pageSize }).then(function (res) {
            if (res.success) {

                let $parent = $(selector);

                let $table = $(document.createElement('ul'))
                    .addClass('st-table')
                    .attr('id', 'test');

                let items = res.items
                let filterItems;

                let nextPageExists;

                if (config.data.serverSide) {
                    if (res.nextPageExists) {
                        nextPageExists = true;
                    } else {
                        nextPageExists = false;
                    }

                    filterItems = items;
                } else {
                    if (pageSize === 'all') {
                        filterItems = items;
                        nextPageExists = false;
                    } else {
                        filterItems = clientSidePaging(items, page - 1, pageSize);

                        if ((filterItems.length < pageSize) || ((page) * pageSize >= items.length)) {
                            nextPageExists = false;
                        } else {
                            nextPageExists = true;
                        }
                    }
                }

                if (pageSize !== 'all' && res.count > 0) {
                    tableData.pagesCount = Math.ceil(res.count / pageSize);
                } else {
                    tableData.pagesCount = 1;
                }

                tableData.itemsCount = res.count;
                tableData.items = items;
                tableData.filterItems = filterItems;
                tableData.nextPageExists = nextPageExists;
                $table.data('sitetriksGrid', tableData);

                tableData.createHeader().appendTo($table);
                tableData.createBody().appendTo($table);
                tableData.createPager().appendTo($table);

                $parent.on('click', '#nextPageArrow', function (ev) {
                    if (tableData.nextPageExists) {
                        tableData.nextPage().then(function () {
                            tableData.updateBody();

                            $('#previousPageArrow').removeClass('btn-disabled');
                            if (!tableData.nextPageExists) {
                                $('#nextPageArrow').addClass('btn-disabled');
                            }

                            $('#pageNumber').text(tableData.page);
                        });
                    }
                })

                $parent.on('click', '#previousPageArrow', function (ev) {
                    if (tableData.page > 1) {
                        tableData.previousPage().then(function () {
                            tableData.updateBody();

                            $('#nextPageArrow').removeClass('btn-disabled');
                            if (tableData.page <= 1) {
                                $('#previousPageArrow').addClass('btn-disabled');
                            }

                            $('#pageNumber').text(tableData.page);
                        });
                    }
                })

                $parent.on('change', '#pageSize', function (ev) {
                    let pageSize = $(this).val();
                    tableData.setPageSize(pageSize).then(function () {
                        tableData.updateBody();

                        $('#nextPageArrow').removeClass('btn-disabled');
                        if (tableData.page <= 1) {
                            $('#previousPageArrow').addClass('btn-disabled');
                        }

                        if (!tableData.nextPageExists) {
                            $('#nextPageArrow').addClass('btn-disabled');
                        }

                        $('#pageNumber').text(tableData.page);
                        $('#pagesCount').text(tableData.pagesCount);
                    });
                })

                // sorting
                $parent.on('click', '.btn-sort', function (ev) {
                    let $trigger = $(this);

                    sortableButtonClick($trigger);
                    tableData.sortedColumn = { column: $trigger.attr('data-property'), order: $trigger.attr('data-order') };
                    tableData.page = 1;

                    tableData.update();
                })

                tableData.createButtons($table).appendTo($parent);

                $table.appendTo($parent);
            }
        });

        return tableData;
    }

    function createButtons($table) {
        let $fragment = $(document.createElement('div'))
            .addClass('buttons-row');
        let tableId = $table.attr('id');
        let data = this;

        // -----------------------------------------------
        // search logic; 
        if (data.config.columns.filter(c => c.filter).length > 0) {
            $('<a></a>', {
                text: 'Search',
                class: 'btn btn-grid'
            }).on('click', function (ev) {
                let $fields = $('.search-field');

                data.filters = [];

                $fields.each(function (index, elem) {
                    let $element = $(elem);
                    let pattern = $element.val();

                    if (pattern && pattern.length >= 1) {
                        let comparison;
                        switch ($element.attr('data-type')) {
                            case 'string':
                                comparison = 7;
                                break;
                            case 'number':
                                comparison = 1;
                                break;
                            default:
                        }

                        data.filters.push({
                            propertyName: $element.attr('data-property'),
                            comparison: comparison,
                            value: pattern
                        })
                    }
                })

                data.page = 1;

                data.update();
            }).appendTo($fragment);
        }

        // -----------------------------------------------

        let buttons = this.config.buttons;

        buttons.forEach(function (element, index) {
            let $button = $('<a></a>', {
                text: element.title,
                class: 'btn btn-grid'
            }).on('click', function (ev) {
                let collection = {};
                if (element.extraFields) {
                    for (var i = 0; i < element.extraFields.length; i++) {
                        collection[element.extraFields[i] + 's'] = [];
                    }
                }
                let collectionName = element.collectionName || 'ids';
                let ids = [];
                $('#' + tableId)
                    .find('input.st-grid-checkbox[type=checkbox]:checked')
                    .each(function (ind, el) {
                        ids.push($(el).attr('data-id'));
                        if (element.extraFields) {
                            for (var i = 0; i < element.extraFields.length; i++) {
                                collection[element.extraFields[i] + 's'].push($(el).attr('data-' + element.extraFields[i].toLowerCase()));
                            }
                        }
                    });

                if (ids.length > 0) {

                    Loader.show(true);
                    collection[collectionName] = ids;
                    Data.postJson({ url: element.postUrl, data: collection }).then(function (res) {
                        return data.update(true);
                    }).then(function (res) {
                        Loader.hide();

                        if (element.callback && {}.toString.call(element.callback) === '[object Function]') {
                            element.callback(res);
                        }
                    });
                }
            });

            switch (element.type) {
                case 'success':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-ok'
                    }).css('color', 'lime').prependTo($button);
                    break;
                case 'warning':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-ok'
                    }).css('color', 'red').prependTo($button);
                    break;
                case 'danger':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-remove'
                    }).css('color', 'red').prependTo($button);
                    break;

                default:
                    break;
            }

            $button.appendTo($fragment);
        })

        return $fragment;
    }

    function createHeader() {
        // add thead
        let config = this.config;

        let $tHead = $(document.createElement('li'))
            .attr('id', "tableHeader");

        // get column configuration

        let columnConfiguration = config.columns;

        // create header row
        let $headerRow = $(document.createElement('ul')).addClass('first-header-row');

        let $secondHeaderRow = $(document.createElement('ul')).addClass('second-header-row');

        // add header cell for each configuration and use the title property for the text
        for (var i = 0; i < columnConfiguration.length; i++) {
            let content;
            if (columnConfiguration[i].headerTemplate) {
                content = columnConfiguration[i].headerTemplate.replace('#item#', columnConfiguration[i].title)
            } else {
                if (columnConfiguration[i].type === 'checkbox') {
                    content = '<input type="checkbox" class="st-select-all-checkbox" />';
                } else {
                    content = columnConfiguration[i].title;
                }
            }



            let $cell2 = $('<li></li>', {
                class: 'col-' + (columnConfiguration[i].size || 2),
                html: content
            });

            let $cell = $('<li></li>', {
                class: 'col-' + (columnConfiguration[i].size || 2),
            });

            let $cellContainer = $('<div class="search-container"></div>');
            $cellContainer.appendTo($cell);

            if (columnConfiguration[i].filter) {
                //let $icon = $('<span></span>', {
                //    class: 'glyphicon glyphicon-search'
                //});


                //let $filterButton = $('<button></button>', {
                //    class: 'btn btn-info'
                //});

                //$filterButton.append($icon);

                //$filterButton.on('click', function () {
                //    $cell.children('.search-field').toggleClass('hidden');
                //});

                // $($cell.children().first()).append($filterButton);

                var $searchIconWrapper = $('<span/>', {
                    class: 'btn search-btn'
                });

                $searchIconWrapper.on('click', function (e) {
                    var $target = $(e.target);

                    if ($($target[0]).hasClass('search-icon-image')) {
                        $target = $($target[0].parentNode);
                    }

                    var $inputSearch = $target.siblings('.search-field');
                    $inputSearch.width('100px');

                    $target.hide();
                    $inputSearch.show();
                });

                $('<span/>', {
                    class: 'search-icon-image'
                }).appendTo($searchIconWrapper);

                $searchIconWrapper.appendTo($cellContainer);



                $('<input/>', {
                    type: 'text',
                    placeholder: 'SEARCH',
                    'data-property': columnConfiguration[i].name,
                    'data-type': columnConfiguration[i].type,
                    // class: 'search-field hidden'
                    class: 'search-field'
                }).appendTo($cellContainer);
            }

            if (columnConfiguration[i].sort) {
                let $ascendingIcon = $('<span></span>', {
                    class: 'glyphicon glyphicon-sort-by-attributes'
                });

                let $filterButton = $('<button></button>', {
                    class: 'btn-sort btn no-sort',
                    'data-property': columnConfiguration[i].name
                });

                $filterButton.append($ascendingIcon);

                // $($cell.children().first()).append($filterButton);
                $cellContainer.prepend($filterButton);

            }

            $headerRow.append($cell);
            $secondHeaderRow.append($cell2);

        }

        // append header row
        $headerRow.appendTo($tHead);
        $secondHeaderRow.appendTo($tHead);

        return $tHead;
    }

    function sortableButtonClick($filterButton) {
        let sortingClass;
        if ($filterButton.hasClass('no-sort') || $filterButton.hasClass('asc-sort')) {
            $filterButton.removeClass('no-sort')
                .removeClass('asc-sort')
                .addClass('dsc-sort')
                .attr('data-order', 1);

            sortingClass = 'glyphicon glyphicon-sort-by-attributes-alt';
        }
        else {
            $filterButton.removeClass('no-sort')
                .removeClass('dsc-sort')
                .addClass('asc-sort')
                .attr('data-order', 0);

            sortingClass = 'glyphicon glyphicon-sort-by-attributes';
        }

        $filterButton.children('span')
            .removeClass()
            .addClass(sortingClass);
    }

    function createBody() {
        // add tbody
        let $tBody = $('<div></div>', {
            class: 'tableBody'
        });

        return this.buildBody($tBody);
    }


    function updateBody() {
        // get tbody
        let $tBody = $('.tableBody')
            .html('');

        return this.buildBody($tBody);
    }

    function buildBody($tBody) {
        let data = this;
        let config = data.config;
        let pageSize = data.pageSize;
        let hasNesting = config.data.hasNesting;
        let nestingPropertyName = config.data.nestingPropertyName;

        // get data
        let tableData = data.filterItems;
        pageSize = pageSize || tableData.length;
        if (pageSize > tableData.length || pageSize === 'all') {
            pageSize = tableData.length;
        }

        let $selectAll = $('.st-select-all-checkbox')
        if ($selectAll.length > 0) {
            $selectAll[0].checked = false;
        }

        // get column configuration
        let columnConfiguration = config.columns;

        // for each item add row and fill in cells corresponding to column configuration
        for (let i = 0; i < pageSize; i++) {

            // for each column create a cell and fill it in with the column.name corresponding field

            let $bodyRow = createBodyRow(tableData[i], columnConfiguration);

            if (hasNesting) {
                if (tableData[i][nestingPropertyName] != undefined && tableData[i][nestingPropertyName].length > 0) {
                    let $childRow = generateNesting(tableData[i], columnConfiguration, $bodyRow, nestingPropertyName);

                    $bodyRow.append($childRow);
                }
            }

            $tBody.append($bodyRow, columnConfiguration);
        }

        return $tBody;
    }

    function generateNesting(item, columnConfiguration, $bodyRow, nestingPropertyName) {
        if (item[nestingPropertyName] != undefined && item[nestingPropertyName].length > 0) {
            let $li = $('<li>');
            let $btn = $('<button>');
            let $arrow = $('<i>');

            $btn.attr('class', 'btn-xs btn-default child-expand');
            $arrow.attr('class', 'glyphicon glyphicon-plus');
            $arrow.attr('aria-hidden', 'true');

            $btn.append($arrow);
            //   $li.append($btn);
            $bodyRow.append($li);

            for (let d = 0; d < item[nestingPropertyName].length; d++) {
                let $childRow = createBodyRow(item[nestingPropertyName][d], columnConfiguration, true);

                $bodyRow.append($childRow);

                generateNesting(item[nestingPropertyName][d], columnConfiguration, $childRow, nestingPropertyName);
            }
        }

        return $bodyRow;
    }

    // TODO: events should be registrated on wrapper instead on hardcoded '.grid'
    $('.grid').on('click', '.child-expand', expandChildren);
    $('.grid').on('click', '.st-select-all-checkbox', selecteAll);
    $('.grid').on('click', '.st-grid-checkbox', selectSingle);

    function expandChildren() {
        if ($(this).children().first().hasClass('glyphicon-plus')) {
            $(this).children().first().removeClass('glyphicon-plus');
            $(this).children().first().addClass('glyphicon-minus');
        }
        else {
            $(this).children().first().addClass('glyphicon-plus');
            $(this).children().first().removeClass('glyphicon-minus');
        }

        $(this).parent().parent().removeClass('hidden');
        $(this).parent().parent().children('.child').toggleClass('hidden');

        setBackgroundColor();
    }

    function selecteAll(ev) {
        let $target = $(this);
        $target.parents('.st-table').find('.st-grid-checkbox').each(function (_, element) {
            element.checked = $target[0].checked;
        });
    }

    function selectSingle(ev) {
        let $target = $(this);
        let $wrapper = $target.parents('.st-table');
        let uncheckedExists = false;
        let selectAllCheckBox = $wrapper.find('.st-select-all-checkbox')[0];

        $wrapper.find('.st-grid-checkbox').each(function (_, element) {
            if (!element.checked) {
                uncheckedExists = true;
            }
        });

        if (uncheckedExists) {
            selectAllCheckBox.checked = false;
        } else {
            selectAllCheckBox.checked = true;
        }
    }

    /*1.1 Setting the grid background color if we have nested pages / elements*/

    function setBackgroundColor() {
        if ($('.page-title-link')) {
            $('.page-title-link').parents('.bodyRow')
                .css('background', 'white')
                .removeClass('darkColor');

            var $rows = $('.page-title-link').parents('.bodyRow');

            $rows.each(function () {
                if ($(this).hasClass('hidden')) {
                    return;
                } else {
                    $(this).addClass('darkColor');
                }
            });
            for (var i = 0; i <= $(".darkColor").length; i += 2) {
                $(".darkColor:eq(" + i + ")").css('background-color', '#f9f9f9');
            }

        } else {
            return false;
        }
    };

    //function drawNestedItemsLines{

    //};

    // 

    //$('.grid').on('click', '.child-expand', function () {
    //    let $gridParents = $('[data-id="nested-test-parent"]');

    //    let position = $gridParents.position();

    //    // create vertical div element

    //    let verticalLine = $('<div class="vertical-line"></div>');
    //    verticalLine.css('top', position.top + 20);
    //    verticalLine.css('left', position.left);


    //    $gridParents.parent().append(verticalLine);



    //    let $gridChildren = $('[data-id="nested-test-child"]').length;

    //    console.log(position);
    //})



    function createBodyRow(data, columnConfiguration, isChild = false) {
        let $bodyRow = $(document.createElement('ul'))
            .attr('class', 'bodyRow');

        for (var j = 0; j < columnConfiguration.length; j++) {

            let content;

            switch (columnConfiguration[j].type) {
                case 'checkbox':
                    content = `<input type="checkbox" class="st-grid-checkbox" data-id="${data[columnConfiguration[j].name]}"`
                    if (columnConfiguration[j].extraFields) {
                        for (var i = 0; i < columnConfiguration[j].extraFields.length; i++) {
                            content += ` data-${columnConfiguration[j].extraFields[i]}="${data[columnConfiguration[j].extraFields[i]]}"`;
                        }
                    }

                    content += `/>`;

                    break;

                case 'date':
                    let str = data[columnConfiguration[j].name];
                    if (!str) {
                        break;
                    }

                    if (str[0] === 'D') {
                        // Handle asp.net framework 4.5.2 weird data format
                        str = parseInt(str.substr(6, str.length - 2 - 6));
                    }

                    let options = {
                        month: 'numeric',
                        year: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    };

                    // parse date to formated string
                    content = new Date(str).toLocaleString('en', options);

                    break;
                case 'image':
                    let src;
                    if (columnConfiguration[j].source) {
                        // build source from source template
                        src = columnConfiguration[j].source.replace('#item#', data[columnConfiguration[j].name]);
                    } else {
                        // get source from data object
                        src = data[columnConfiguration[j].name];
                    }

                    if (columnConfiguration[j].contentTemplate) {
                        // build image from template using the source
                        content = replaceAll(columnConfiguration[j].contentTemplate, '#item#', src)
                    } else {
                        // default template
                        content = `<img src="${src}" class="display-image" />`;
                    }

                    break;

                case 'bool':
                    if (data[columnConfiguration[j].name]) {
                        content = columnConfiguration[j].trueTemplate;
                    } else {
                        content = columnConfiguration[j].falseTemplate;
                    }

                    break;

                case 'list':
                    let list = data[columnConfiguration[j].name];
                    if (list instanceof Array) {
                        content = list.join('; ');
                    } else {
                        content = list || '';
                    }

                    if (columnConfiguration[j].contentTemplate && content) {
                        content = replaceAll(columnConfiguration[j].contentTemplate, '#item#', content);
                    }

                    break;

                default:
                    if (columnConfiguration[j].contentTemplate) {
                        // build cell from template
                        content = replaceAll(columnConfiguration[j].contentTemplate, '#item#', data[columnConfiguration[j].name]);
                    } else {
                        // use content directly
                        content = data[columnConfiguration[j].name];
                    }
                    break;
            }

            // console.log(data);
            if (typeof config != 'undefined') {
                if (j === 0 && data[config.data.nestingPropertyName] != undefined && data[config.data.nestingPropertyName].length > 0) {
                    content = '<button class="btn-xs btn-default child-expand"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i></button>' + content;
                }
            }


            if (columnConfiguration[j].extraFields && columnConfiguration[j].extraFields.length > 0) {
                for (let i = 0; i < columnConfiguration[j].extraFields.length; i++) {
                    content = replaceAll(content, `#item${i}#`, data[columnConfiguration[j].extraFields[i]]);
                }
            }

            let childClass = isChild ? 'nested' : '';

            $(document.createElement('li'))
                .addClass('col-' + (columnConfiguration[j].size || 2))
                .addClass(childClass)
                .html(content || '')
                .appendTo($bodyRow);
        }

        if (isChild) {
            $bodyRow.addClass('child');
            $bodyRow.addClass('hidden');
        }

        return $bodyRow;

    }

    function createPager() {
        let config = this.config;
        // add tfooter
        let $tFooter = $(document.createElement('div'));

        // get pager configuration
        let pagerConfiguration = config.pager;
        let def = pagerConfiguration.default;

        // add pager row
        let $pagerRow = $(document.createElement('ul'));

        // create previous and next arrow

        let $pagerContainer = $('<li></li>', {
            class: 'col-10',
            id: 'pagerContainer'
        });

        let $previousPageArrow = $('<span></span>', {
            //class: 'glyphicon glyphicon-arrow-left btn-pager btn-disabled',
            id: 'previousPageArrow',
            class: 'btn-disabled'
        });

        let $nextPageArrow = $('<span></span>', {
            //class: 'glyphicon glyphicon-arrow-right btn-pager',
            id: 'nextPageArrow'
        });

        if (!this.nextPageExists) {
            $nextPageArrow.addClass('btn-disabled');
        }

        // page size

        let $pageSize = $('<select></select>', {
            id: 'pageSize'
        });

        pagerConfiguration.pageSizes.forEach(function (element, index) {
            let $option = $('<option></option>', {
                val: element,
                text: element
            });

            if (def && +def === +element) {
                $option.attr('selected', 'selected');
            }

            $option.appendTo($pageSize);
        });

        // page number
        let $pageNumber = $('<span></span>', {
            text: 1,
            id: 'pageNumber'
        });

        let $pagesCount = $('<span></span>', {
            text: this.pagesCount,
            id: 'pagesCount'
        });

        // append elements
        $pagerContainer.append($pageSize)
            .append($previousPageArrow)
            .append($pageNumber)
            .append($pagesCount)
            .append($nextPageArrow)
            .appendTo($pagerRow);

        $pagerRow.appendTo($tFooter);

        return $tFooter;
    }

    function changeDefaultFilter(filter) {
        let data = this;

        if (filter && filter.propertyName) {
            if (data.config.defaultFilters.filter(function (f) {
                return f.propertyName === filter.propertyName &&
                    f.comparison === filter.comparison &&
                    f.value === filter.value;
            }).length > 0) {
                return;
            }

            data.config.defaultFilters = [filter];
        } else {
            if (data.config.defaultFilters.length === 0) {
                return;
            }

            data.config.defaultFilters = [];
        }

        data.update(true);
    }

    function update(isForced) {
        let _this = this;
        return this.updateData(isForced).then(function (res) {
            $('#nextPageArrow').removeClass('btn-disabled');
            if (_this.page <= 1) {
                $('#previousPageArrow').addClass('btn-disabled');
            }

            if (!_this.nextPageExists) {
                $('#nextPageArrow').addClass('btn-disabled');
            }

            $('#pageNumber').text(_this.page);

            _this.updateBody();

            return res;
        });
    }

    $(document).on('refreshGrid', {}, function () {

        $('.st-table').each(function () {
            $(this).data('sitetriksGrid').update(true);
        });
    });


    var defaultPager = {
        pageSizes: [5, 10, 20, 50, 100, 'all'],
        pageReadOnly: true,
        default: 20
    }



    return {
        init: init,
        build: buildGridConfig,
        defaultPager: defaultPager,
    };
}
