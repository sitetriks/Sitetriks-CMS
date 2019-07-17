import { Data } from '../common/data.js';
<<<<<<< HEAD:SiteTriksApp/SiteTriksApp.Web/scripts/modules/grid.js
import { Utils } from '../common/utils.js';
import { Pager } from './pager.js';
import { DataSource } from './data-source.js';
import { Handlebars } from '../common/handlebars.js';
import { DateConversion } from '../common/date-conversion.js';
=======
import { Pager } from './pager.js';
import { DataSource } from './data-source.js';
import { Handlebars } from '../common/handlebars.js';
>>>>>>> origin/master:SiteTriksApp/SiteTriksApp.Web/scripts/modules/grid.js

'use strict';

function _Grid({ wrapperId, type, sourceConfig, pagerConfig, customActions, fields, nestingProperty, cellWidth, handlebarsTemplate, selectAllButton }) {
    const $wrapper = $(wrapperId);
    const config = {
        wrapperId,
        cellWidth,
        type,
        customActions: customActions || [],
        fields: fields || []
    };

    if (config.type === 'grid') {
        $wrapper.addClass('grid-view');
        config.isGrid = true;
    }

    if (handlebarsTemplate) {
        config.usingHandlebars = true;
        config.template = Handlebars.compile(handlebarsTemplate);
    }

    const $headerRow = $('<div></div>', { class: 'container-fluid grid-header' });
    const $bodyRow = $('<div></div>', { class: 'container-fluid grid-body' });
    const $pagerRow = $('<div></div>', { class: 'container-fluid grid-pager' });
    render();
    bindEvents();

    if (config.type === 'grid') {

        $bodyRow.css('display', 'inline-block');
    }

    const dataSource = new DataSource(sourceConfig);
    pagerConfig = pagerConfig || { pageSizes: [1, 2, 5, 10, 20, 50, 100, 'all'], pageReadOnly: true, default: 20 };
    const pager = new Pager($pagerRow, pagerConfig, onPageChange);
    const paging = { page: 1, size: pagerConfig.default || 10, default: pagerConfig.default };
    const sorting = {};
    const filters = [];

    function render() {
        $headerRow.append(createButtons()).append(createHeader());
        $wrapper.append($headerRow).append($bodyRow).append($pagerRow);
        $wrapper.addClass('sitetriks-grid');
    }

    // data loading
    function loadData(isForced) {
        $bodyRow.html('');
        return dataSource.getData({
            paging,
            filters,
            sorting,
            isForced
        }).then(res => {
            if (paging.size !== 'all') {
                pager.setPagesCount(Math.ceil(res.count / paging.size));
            }

            $bodyRow.html(buildBody(res.items));
            pager.unlock();
            return res;
        });
    }

    // event handlers
    function onPageChange(page, size) {
        paging.page = page;
        paging.size = size;

        loadData();
    }

    function onSortHandler(ev) {
        let $target = $(this);
        sorting.by = $target.attr('data-property');
        sorting.order = $target.attr('data-sort') === 'asc' ? 1 : 0;
        paging.page = 1;
        pager.setCurrentPage(1);

        $headerRow.find('button[data-sort="desc"]').attr('data-sort', 'asc');
        $headerRow.find('span.fa-sort-amount-desc')
            .removeClass('fa-sort-amount-desc')
            .addClass('fa-sort-amount-asc');

        if (sorting.order === 1) {
            $target.attr('data-sort', 'desc');
            $target.children('span.fa-sort-amount-asc')
                .removeClass('fa-sort-amount-asc')
                .addClass('fa-sort-amount-desc');
        }

        loadData();
    }

    function showChildren(ev) {
        let $target = $(this);
        let $icon = $target.children('.fa');
        let $currentNestedRow = $target.parents('.grid-item').first().children('.nested-grid-items');
        if ($icon.hasClass('fa-plus')) {
            $icon.removeClass('fa-plus').addClass('fa-minus');
            $currentNestedRow.show();
            $currentNestedRow.children('.grid-item').addClass('full-row');
        } else {
            $icon.removeClass('fa-minus').addClass('fa-plus');
            $currentNestedRow.hide();
            $currentNestedRow.children('.grid-item').removeClass('full-row');
        }
    }

    function searchOnEnter(ev) {
        if (ev.keyCode !== 13) {
            return;
        }

        this.blur();
        onSearch();
    }

    function onSearch(ev) {
        filters.length = 0;
        paging.page = 1;
        pager.setCurrentPage(1);

        $headerRow.find('.search-field').each((_, element) => {
            let value = element.value;
            if (value && value.length > 0) {
                let property = element.getAttribute('data-property');
                let type = element.getAttribute('data-type');
                let comparison;
                switch (type) {
                    case 'string':
                        comparison = 7;
                        break;
                    case 'number':
                        comparison = 1;
                        break;
                    default:
                }

                filters.push({
                    propertyName: property,
                    comparison: comparison,
                    value: value
                });
            }
        });

        loadData();
    }

    function onCustomAction(ev) {
        let key = this.getAttribute('data-action');
        let action = config.customActions[key];
        if (!action) { return; }

        let collection = {};
        if (action.extraFields) {
            for (let i = 0; i < action.extraFields.length; i++) {
                collection[action.extraFields[i] + 's'] = [];
            }
        }

        let collectionName = action.collectionName || 'ids';
        collection[collectionName] = [];
        $bodyRow.find('input.st-grid-checkbox[type=checkbox]:checked').each(function (_, el) {
            collection[collectionName].push(el.getAttribute('data-id'));
            if (action.extraFields) {
                for (let i = 0; i < action.extraFields.length; i += 1) {
                    collection[action.extraFields[i] + 's'].push(el.getAttribute('data-' + action.extraFields[i].toLowerCase()));
                }
            }
        });

        if (!collection[collectionName].length || !action.postUrl) {
            if (action.callback && {}.toString.call(action.callback) === '[object Function]') {
                action.callback();
            }

            return;
        }

        //Loader.show(true);
        Data.postJson({ url: action.postUrl, data: collection }).then(function (res) {
            return loadData(true);
        }).then(function (res) {
            //Loader.hide();

            if (action.callback && {}.toString.call(action.callback) === '[object Function]') {
                action.callback(res);
            }
        });
    }

    // ui building
    function createHeader() {
        let $filterHeader = $('<div></div>', {
            class: 'row first-header-row'
        });

        let $titleHeader = $('<div></div>', {
            class: 'row title-header'
        });

        for (let i = 0; i < config.fields.length; i += 1) {
            let $cell = $('<div></div>', {
                class: config.isGrid ? 'grid-filter' : 'col-' + config.fields[i].size || 2
            });

            if (config.fields[i].sort) {
                let $ascendingIcon = $('<span></span>', {
                    class: 'fa fa-sort-amount-asc'
                });

                let $filterButton = $('<button></button>', {
                    class: 'btn-sort btn no-sort',
                    'data-property': config.fields[i].name,
                    'data-sort': 'asc'
                }).on('click', onSortHandler);

                $filterButton.append($ascendingIcon).appendTo($cell);
            }

            if (config.fields[i].filter) {
                $('<input/>', {
                    type: 'text',
                    placeholder: 'Search by ' + config.fields[i].title || config.fields[i].type,
                    'data-property': config.fields[i].name,
                    'data-type': config.fields[i].type,
                    class: 'search-field'
                }).appendTo($cell);
            }

            if (!config.isGrid || $cell.children().length) {
                $cell.appendTo($filterHeader);
            }

            if (!config.isGrid) {
                let content = config.fields[i].type === 'checkbox' ? '<input type="checkbox" class="st-select-all-checkbox" />' :
                    config.fields[i].headerTemplate ? Utils.replaceAll(config.fields[i].headerTemplate, '#item#', config.fields[i].title || '') : config.fields[i].title || '';

                $('<div></div>', {
                    class: config.isGrid ? 'grid-filter' : 'col-' + config.fields[i].size || 2,
                    html: content
                }).appendTo($titleHeader);
            }
        }

        //attaching search button
        let $lastSearchCell = $filterHeader.find('.search-field').last().parent();
        if ($lastSearchCell.length) {
            $('<div></div>', {
                class: 'search-icon-wrapper'
            }).append($('<img/>', {
                src: '/images/search-icon.svg'
            })).on('click', onSearch).appendTo($lastSearchCell);
            $lastSearchCell.addClass('searh-background last').prevAll().addClass('searh-background');
        }

        if (selectAllButton && config.isGrid) {
            $('<div></div>', {
                class: 'grid-filter searh-background'
            }).css('width', 'auto').append($('<a></a>', {
                class: 'btn',
                text: 'Select All'
            }).on('click', selectAllRows)).prependTo($filterHeader);
        }

        return [$filterHeader, $titleHeader];
    }

    function selectAllRows(ev) {
        let $target = $(this);
        let value = $target.is('input[type="checkbox"]') ? $target[0].checked : true;
        $bodyRow.find('.st-grid-checkbox').each(function (_, element) {
            element.checked = value;
        });
    }

    function createButtons() {
        let $buttonsRow = $('<div></div>', { class: 'row buttons-header' });
        for (const key in config.customActions) {
            if (!config.customActions.hasOwnProperty(key)) continue;

            let $btn = $('<a></a>', {
                class: 'btn btn-grid'
            });

            if (config.customActions[key].iconOnly) {
                $btn.addClass('icon-only');
            } else {
                $btn.text(config.customActions[key].title || key);
            }

            if (config.customActions[key].redirectUrl) {
                $btn.attr('href', config.customActions[key].redirectUrl);
            } else {
                $btn.attr('data-action', key)
                    .on('click', onCustomAction);
            }

            if (config.customActions[key].attributes) {
                for (var attribute in config.customActions[key].attributes) {
                    $btn.attr(attribute, config.customActions[key].attributes[attribute]);
                }
            }

            if (config.customActions[key].class) {
                $btn.addClass(config.customActions[key].class);
            }

            switch (config.customActions[key].type) {
                case 'success':
                    $('<span></span>', {
                        class: 'fa fa-check'
                    }).css('color', 'lime').prependTo($btn);
                    break;
                case 'warning':
                    $('<span></span>', {
                        class: 'fa fa-check'
                    }).css('color', 'red').prependTo($btn);
                    break;
                case 'danger':
                    $('<span></span>', {
                        class: 'fa fa-times'
                    }).css('color', 'red').prependTo($btn);
                    break;
                case 'add':
                    $('<span></span>', {
                        class: 'fa fa-plus'
                    }).prependTo($btn);
                    $btn.removeClass('btn-grid').removeClass('btn').addClass('btn-grid-add');

                default:
                    break;
            }

            $btn.appendTo($buttonsRow);
        }

        return $buttonsRow;
    }

    function buildBody(items) {
        let rows = [];
        for (let i = 0; i < items.length; i += 1) {
            let $row;
            if (config.isGrid) {
                if (config.usingHandlebars) {
                    $row = $('<div></div>', {
                        class: 'grid-item grid-cell',
                        html: config.template(items[i])
                    });
                } else {
                    $row = createItemRow(items[i]);
                }

                if (config.cellWidth) {
                    $row.css('width', config.cellWidth);
                }
            } else {
                $row = createItemRow(items[i]);

                if (nestingProperty && items[i][nestingProperty] && items[i][nestingProperty].length) {
                    $('<div></div>', {
                        class: 'col-12 nested-grid-items'
                    }).hide()
                        .append(buildBody(items[i][nestingProperty]))
                        .appendTo($row);
                }
            }

            rows.push($row);
        }

        return rows;
    }

    function createItemRow(item) {
        let $bodyRow = $('<div></div>', {
            class: `grid-item ${config.isGrid ? 'grid-cell' : 'row'} full-row`
        });

        for (let i = 0; i < config.fields.length; i += 1) {
            let columnConfig = config.fields[i];

            let content;
            let value = item[columnConfig.name];
            if (value === undefined || value === null) {
                let strEnd = columnConfig.name.slice(1);

                value = item[columnConfig.name.charAt(0).toUpperCase() + strEnd];
                if (value === undefined || value === null) {
                    value = item[columnConfig.name.charAt(0).toLowerCase() + strEnd];
                }
            }

            value = value || value === 0 ? value : '';
            switch (columnConfig.type) {
                case 'checkbox':
                    content = `<input type="checkbox" class="st-grid-checkbox" data-id="${value}"`;
                    if (columnConfig.extraFields) {
                        for (let j = 0; j < columnConfig.extraFields.length; j += 1) {
                            content += ` data-${columnConfig.extraFields[j]}="${item[columnConfig.extraFields[j]]}"`;
                        }
                    }

                    content += `/>`;

                    break;

                case 'date':
                    if (!value) break;
                    let str = value;

                    if (str[0] === 'D') {
                        // Handle asp.net framework 4.5.2 weird data format
                        str = parseInt(str.substr(6, str.length - 2 - 6));
                    }

                    content = DateConversion.convertUtcToLocal(str);
                    break;

                case 'image':
                    let src = columnConfig.source ? columnConfig.source.replace('#item#', value) : value;
                    if (columnConfig.contentTemplate) {
                        // build image from template using the source
                        content = src;
                    } else {
                        // default template
                        content = `<img src="${src}" class="display-image" />`;
                    }

                    break;

                case 'bool':
                    if (value) {
                        content = columnConfig.trueTemplate;
                    } else {
                        content = columnConfig.falseTemplate;
                    }

                    break;

                case 'compare':
                    if (columnConfig.comparer && {}.toString.call(columnConfig.comparer) === '[object Function]' && columnConfig.comparer(value)) {
                        content = columnConfig.trueTemplate || '';
                    } else {
                        content = columnConfig.falseTemplate || '';
                    }

                    break;

                case 'list':
                    let list = value;
                    if (list instanceof Array) {
                        content = list.join('; ');
                    } else {
                        content = list || '';
                    }

                    break;

                default:
                    content = value;
                    break;
            }

            if (columnConfig.contentTemplate) {
                content = Utils.replaceAll(columnConfig.contentTemplate, '#item#', content);
            }

            if (content && columnConfig.extraFields && columnConfig.extraFields.length > 0) {
                for (let i = 0; i < columnConfig.extraFields.length; i++) {
                    content = Utils.replaceAll(content, `#item${i}#`, item[columnConfig.extraFields[i]]);
                }
            }

            if (i === 0 && item[nestingProperty] && item[nestingProperty].length > 0) {
                content = '<button class="btn-xs btn-default child-expand"><i class="fa fa-plus" aria-hidden="true"></i></button>' + content;
            }

            $('<div></div>', {
                class: config.isGrid ? '' : `col-${columnConfig.size || 2}`,
                html: content
            }).appendTo($bodyRow);
        }

        return $bodyRow;
    }

    function updateConfig({ fields, customActions, sourceConfig, pagerConfig }) {
        if (sourceConfig) {
            dataSource.updateConfig(sourceConfig);
        }

        if (pagerConfig) {
            pager.updateConfig(pagerConfig);
        }

        let rebuildHeader = false;
        if (customActions) {
            config.customActions = customActions;
            rebuildHeader = true;
        }

        if (fields) {
            config.fields = fields;
            rebuildHeader = true;
        }

        if (rebuildHeader) {
            $headerRow.html('').append(createButtons()).append(createHeader());
            paging.page = 1;
            paging.size = pager.default || 10;
            pager.setPageSize(paging.size);
            pager.setCurrentPage(paging.page);
        }

        return this;
    }

    function bindEvents() {
        $headerRow.on('keypress', '.search-field', searchOnEnter);
        $headerRow.on('click', '.st-select-all-checkbox', selectAllRows);
        $bodyRow.on('click', '.child-expand', showChildren);
    }

    function dispose() {
        $headerRow.off('keypress', '.search-field', searchOnEnter);
        $bodyRow.off('click', '.child-expand', showChildren);
        $headerRow.off('click', '.st-select-all-checkbox', selectAllRows);

        //dataSource.dispose();
        pager.dispose();
    }

    return {
        load: function (isForced) { loadData(isForced); return this; },
        updateDefaultFilters: function (filters, clear) { dataSource.updateDefaultFilters(filters, clear); return this; },
        updateConfig,
        dispose
    };
}

<<<<<<< HEAD:SiteTriksApp/SiteTriksApp.Web/scripts/modules/grid.js
=======
//=======================================================================================
// TODO: move
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

>>>>>>> origin/master:SiteTriksApp/SiteTriksApp.Web/scripts/modules/grid.js
window._Grid = _Grid;
export { _Grid };
