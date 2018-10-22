/* globals Data, Handlebars, Pager, DataSource */
'use strict';

function _Grid(_ref) {
    var wrapperId = _ref.wrapperId,
        type = _ref.type,
        sourceConfig = _ref.sourceConfig,
        pagerConfig = _ref.pagerConfig,
        customActions = _ref.customActions,
        fields = _ref.fields,
        nestingProperty = _ref.nestingProperty,
        cellWidth = _ref.cellWidth,
        handlebarsTemplate = _ref.handlebarsTemplate;

    var $wrapper = $(wrapperId);
    var config = {
        wrapperId: wrapperId,
        cellWidth: cellWidth,
        type: type,
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

    var $headerRow = $('<div></div>', { class: 'container-fluid grid-header' });
    $headerRow.append(createButtons()).append(createHeader());
    var $bodyRow = $('<div></div>', { class: 'container-fluid grid-body' });
    var $pagerRow = $('<div></div>', { class: 'container-fluid grid-pager' });

    $wrapper.append($headerRow).append($bodyRow).append($pagerRow);
    $wrapper.addClass('sitetriks-grid');

    var dataSource = new DataSource(sourceConfig);
    var pager = new Pager($pagerRow, pagerConfig, onPageChange);
    var paging = { page: 1, size: pagerConfig.default || 10 };
    var sorting = {};
    var filters = [];
    var dateFormatOptions = {
        month: 'numeric',
        year: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    // data loading
    function loadData(isForced) {
        $bodyRow.html('');
        return dataSource.getData({
            paging: paging,
            filters: filters,
            sorting: sorting,
            isForced: isForced
        }).then(function (res) {
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
        var $target = $(this);
        sorting.by = $target.attr('data-property');
        sorting.order = $target.attr('data-sort') === 'asc' ? 1 : 0;
        paging.page = 1;
        pager.setCurrentPage(1);

        $headerRow.find('button[data-sort="desc"]').attr('data-sort', 'asc');
        $headerRow.find('span.glyphicon-sort-by-attributes-alt').removeClass('glyphicon-sort-by-attributes-alt').addClass('glyphicon-sort-by-attributes');

        if (sorting.order === 1) {
            $target.attr('data-sort', 'desc');
            $target.children('span.glyphicon-sort-by-attributes').removeClass('glyphicon-sort-by-attributes').addClass('glyphicon-sort-by-attributes-alt');
        }

        loadData();
    }

    $bodyRow.on('click', '.child-expand', showChildren);
    function showChildren(ev) {
        var $target = $(this);
        var $icon = $target.children('.glyphicon');
        if ($icon.hasClass('glyphicon-plus')) {
            $icon.removeClass('glyphicon-plus').addClass('glyphicon-minus');
            $target.parents('.grid-item').first().children('.nested-grid-items').show();
        } else {
            $icon.removeClass('glyphicon-minus').addClass('glyphicon-plus');
            $target.parents('.grid-item').first().children('.nested-grid-items').hide();
        }
    }

    $headerRow.on('keypress', '.search-field', function (ev) {
        if (ev.keyCode !== 13) {
            return;
        }

        this.blur();
        onSearch();
    });

    function onSearch(ev) {
        filters.length = 0;
        paging.page = 1;
        pager.setCurrentPage(1);

        $headerRow.find('.search-field').each(function (_, element) {
            var value = element.value;
            if (value && value.length > 0) {
                var property = element.getAttribute('data-property');
                var _type = element.getAttribute('data-type');
                var comparison = void 0;
                switch (_type) {
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
        var key = this.getAttribute('data-action');
        var action = config.customActions[key];
        if (!action) {
            return;
        }

        var collection = {};
        if (action.extraFields) {
            for (var i = 0; i < action.extraFields.length; i++) {
                collection[action.extraFields[i] + 's'] = [];
            }
        }

        var collectionName = action.collectionName || 'ids';
        collection[collectionName] = [];
        $bodyRow.find('input.st-grid-checkbox[type=checkbox]:checked').each(function (_, el) {
            collection[collectionName].push(el.getAttribute('data-id'));
            if (action.extraFields) {
                for (var _i = 0; _i < action.extraFields.length; _i += 1) {
                    collection[action.extraFields[_i] + 's'].push(el.getAttribute('data-' + action.extraFields[_i].toLowerCase()));
                }
            }
        });

        if (collection[collectionName].length < 1) {
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
        var $filterHeader = $('<div></div>', {
            class: 'row first-header-row'
        });

        var $titleHeader = $('<div></div>', {
            class: 'row title-header'
        });

        for (var i = 0; i < config.fields.length; i += 1) {
            var $cell = $('<div></div>', {
                class: config.isGrid ? 'grid-filter' : 'col-xs-' + config.fields[i].size || 2
            });

            if (config.fields[i].sort) {
                var $ascendingIcon = $('<span></span>', {
                    class: 'glyphicon glyphicon-sort-by-attributes'
                });

                var $filterButton = $('<button></button>', {
                    class: 'btn-sort btn no-sort',
                    'data-property': config.fields[i].name,
                    'data-sort': 'asc'
                }).on('click', onSortHandler);

                $filterButton.append($ascendingIcon).appendTo($cell);
            }

            if (config.fields[i].filter) {
                $('<input/>', {
                    type: 'text',
                    placeholder: 'SEARCH: ' + config.fields[i].title,
                    'data-property': config.fields[i].name,
                    'data-type': config.fields[i].type,
                    class: 'search-field'
                }).appendTo($cell);
            }

            $cell.appendTo($filterHeader);

            if (!config.isGrid) {
                var content = config.fields[i].headerTemplate ? replaceAll(config.fields[i].headerTemplate, '#item#', config.fields[i].title) : config.fields[i].title;

                $('<div></div>', {
                    class: config.isGrid ? 'grid-filter' : 'col-xs-' + config.fields[i].size || 2,
                    html: content
                }).appendTo($titleHeader);
            }
        }

        return [$filterHeader, $titleHeader];
    }

    function createButtons() {
        var $buttonsRow = $('<div></div>', { class: 'row buttons-header' });

        if (config.fields.filter(function (c) {
            return c.filter;
        }).length > 0) {
            $('<a></a>', {
                text: 'Search',
                class: 'btn btn-grid'
            }).on('click', onSearch).appendTo($buttonsRow);
        }

        for (var key in config.customActions) {
            if (!config.customActions.hasOwnProperty(key)) continue;

            var $btn = $('<a></a>', {
                text: config.customActions[key].title || key,
                'data-action': key,
                class: 'btn btn-grid'
            }).on('click', onCustomAction);

            switch (config.customActions[key].type) {
                case 'success':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-ok'
                    }).css('color', 'lime').prependTo($btn);
                    break;
                case 'warning':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-ok'
                    }).css('color', 'red').prependTo($btn);
                    break;
                case 'danger':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-remove'
                    }).css('color', 'red').prependTo($btn);
                    break;

                default:
                    break;
            }

            $btn.appendTo($buttonsRow);
        }

        return $buttonsRow;
    }

    function buildBody(items) {
        var rows = [];
        for (var i = 0; i < items.length; i += 1) {
            var $row = void 0;
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
                        class: 'col-xs-12 nested-grid-items'
                    }).hide().append(buildBody(items[i][nestingProperty])).appendTo($row);
                }
            }

            rows.push($row);
        }

        return rows;
    }

    function createItemRow(item) {
        var $bodyRow = $('<div></div>', {
            class: 'grid-item ' + (config.isGrid ? 'grid-cell' : 'row')
        });

        for (var i = 0; i < config.fields.length; i += 1) {
            var columnConfig = config.fields[i];

            var content = void 0;
            var value = item[columnConfig.name];
            if (value === undefined || value === null) {
                var strEnd = columnConfig.name.slice(1);

                value = item[columnConfig.name.charAt(0).toUpperCase() + strEnd];
                if (value === undefined || value === null) {
                    value = item[columnConfig.name.charAt(0).toLowerCase() + strEnd];
                }
            }

            switch (columnConfig.type) {
                case 'checkbox':
                    content = '<input type="checkbox" class="st-grid-checkbox" data-id="' + value + '"';
                    if (columnConfig.extraFields) {
                        for (var j = 0; j < columnConfig.extraFields.length; j += 1) {
                            content += ' data-' + columnConfig.extraFields[j] + '="' + item[columnConfig.extraFields[j]] + '"';
                        }
                    }

                    content += '/>';

                    break;

                case 'date':
                    if (!value) break;
                    var str = value;

                    if (str[0] === 'D') {
                        // Handle asp.net framework 4.5.2 weird data format
                        str = parseInt(str.substr(6, str.length - 2 - 6));
                    }

                    // parse date to formated string
                    content = new Date(str).toLocaleString('en', dateFormatOptions);
                    break;

                case 'image':
                    var src = columnConfig.source ? columnConfig.source.replace('#item#', value) : value;
                    if (columnConfig.contentTemplate) {
                        // build image from template using the source
                        content = src;
                    } else {
                        // default template
                        content = '<img src="' + src + '" class="display-image" />';
                    }

                    break;

                case 'bool':
                    if (value) {
                        content = columnConfig.trueTemplate;
                    } else {
                        content = columnConfig.falseTemplate;
                    }

                    break;

                case 'list':
                    var list = value;
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
                content = replaceAll(columnConfig.contentTemplate, '#item#', content);
            }

            if (content && columnConfig.extraFields && columnConfig.extraFields.length > 0) {
                for (var _i2 = 0; _i2 < columnConfig.extraFields.length; _i2++) {
                    content = replaceAll(content, '#item' + _i2 + '#', item[columnConfig.extraFields[_i2]]);
                }
            }

            if (i === 0 && item[nestingProperty] && item[nestingProperty].length > 0) {
                content = '<button class="btn-xs btn-default child-expand"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i></button>' + content;
            }

            $('<div></div>', {
                class: config.isGrid ? '' : 'col-xs-' + (columnConfig.size || 2),
                html: content
            }).appendTo($bodyRow);
        }

        return $bodyRow;
    }

    return {
        load: function load(isForced) {
            loadData(isForced);return this;
        },
        updateDefaultFilters: function updateDefaultFilters(filters, clear) {
            dataSource.updateDefaultFilters(filters, clear);return this;
        }
    };
}