'use strict';

var StoreSkins = function () {
    function gridSkin(widgets, pageWidgets, logger, mediator, skinId, storeId, postUrl) {
        var l = widgets.find(function (c) {
            return c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0;
        });
        var layout = JSON.parse(l.element);

        var $resolutions = $('.resolution');
        var $defaultResolution = $('.resolution[data-type="lg"]');
        var $showContent = $('.show-content');
        var $showLayout = $('.show-layout');
        var previewLayoutSelector = '#preview-layout';
        var $previewContainer = $('#preview-container');
        var $mainPlaceholder = $previewContainer.find('div[data-placeholder="store-skin"]');

        ModuleBuilder.init(mediator, logger);

        var w = ModuleBuilder.createWidgets('#add-widget-container', pageWidgets, widgets);

        ModuleBuilder.initializeLayout(previewLayoutSelector, layout.layoutRows, '.resolution', '#main-layout-options', function () {
            return $('.selected-option').attr('data-type') === 'layout';
        });
        renderLayout(layout.layoutRows, $mainPlaceholder);
        WidgetsDraggable.init(w);
        renderWidgets(widgets, $mainPlaceholder, 'preview');

        bindEvents();

        function resolutionPreview(ev) {
            var active = $('.selected-option').attr('data-type');

            if (active === 'content') {
                var $target = $(this);
                var targetType = $target.attr('data-type');
                var isActive = false;

                $resolutions.each(function (_, element) {
                    var $el = $(element);
                    if ($el.hasClass('selected')) {
                        var type = $el.attr('data-type');
                        if (type === targetType) {
                            isActive = true;
                            return;
                        }

                        $el.removeClass('selected');
                        Utils.removejscssfile('/css/sitetriks/st-' + type + '-preview.css', 'css');
                    }
                });

                if (!isActive) {
                    $target.addClass('selected');
                    Utils.loadjscssfile('/css/sitetriks/st-' + targetType + '-preview.css', 'css');
                }
            }
        }

        function showLayout(ev) {
            $(previewLayoutSelector).show();
            $('#layout-properties').show();
            $('#widgets-holder').hide();
            $previewContainer.hide();

            // button styles 1.1
            $(this).parent().addClass('selected-option');
            $showContent.parent().removeClass('selected-option');

            //reset resolutions
            $resolutions.each(function (_, element) {
                element.classList.add('selected');
            });
            ModuleBuilder.getInstance(previewLayoutSelector, ModuleBuilder.LAYOUT).resolutions = ['xs', 'sm', 'md', 'lg'];
        }

        function showContent(ev) {
            $(previewLayoutSelector).hide();
            $('#layout-properties').hide();
            $('#widgets-holder').show();
            $previewContainer.show();

            // button styles 1.1
            $(this).parent().addClass('selected-option');
            $showLayout.parent().removeClass('selected-option');

            resolutionPreview.apply($defaultResolution[0]);
        }

        function saveAndRenderLayout(ev) {
            var l = ModuleBuilder.getInstance(previewLayoutSelector, ModuleBuilder.LAYOUT);
            var layout = l.map(function (r) {
                return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass };
            });
            var layoutWidget = w.getPageContent().find(function (c) {
                return c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0;
            });
            var element = JSON.parse(layoutWidget.element);
            element.layoutRows = l.map(function (r) {
                return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass };
            });
            layoutWidget.element = JSON.stringify(element);

            renderLayout(layout, $mainPlaceholder, l.deletedPlaceholders);
            WidgetsDraggable.init(w);
        }

        function checkForContent(e) {
            e.target.dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: e.detail.type, rowIndex: e.detail.rowIndex } }));
        }

        function saveLayoutAndWidgets(ev) {
            var formData = new FormData();
            if (Validator.isFunction(formData.set)) {
                formData.set('SerializedSkin', JSON.stringify(w.getPageContent()));
                formData.set('id', skinId);
            } else {
                formData.append('SerializedSkin', JSON.stringify(w.getPageContent()));
                formData.append('id', skinId);
            }

            Loader.show('#fff');
            Data.postForm({ url: postUrl, formData: formData }).then(function (res) {
                if (res && res.success) {
                    window.location.replace('/ecommerse/storemanager/details/' + storeId);
                } else {
                    Loader.hide();
                }
            });
        }

        function bindEvents() {
            $resolutions.on('click', resolutionPreview);
            $showContent.on('click', saveAndRenderLayout);
            $('.btn-save').on('click', saveLayoutAndWidgets);
            $showContent.on('click', showContent);
            $showLayout.on('click', showLayout);
            document.addEventListener('checkForContent', checkForContent);
        }

        function dispose() {
            $resolutions.off('click', resolutionPreview);
            $showContent.off('click', saveAndRenderLayout);
            $('.btn-save').off('click', saveLayoutAndWidgets);
            $showContent.off('click', showContent);
            $showLayout.off('click', showLayout);
            document.removeEventListener('checkForContent', checkForContent);
        }
    }

    function getGridWidgets(extraFields, baseFields, navigationFields) {
        var storeWidgets = {};

        storeWidgets['storeGrid'] = {
            init: function init() {},
            show: function show(element) {
                var config = JSON.parse(element);

                $('#storeGrid-widget-container .input-items-on-row').val(config.itemsOnRow);
                $('#storeGrid-widget-container .input-has-paging').attr('checked', !!config.hasPaging).trigger('change');
                $('#storeGrid-widget-container .input-rows-per-page').val(config.rowsCount);
            },
            save: function save() {
                var config = {
                    itemsOnRow: $('#storeGrid-widget-container .input-items-on-row').val(),
                    hasPaging: $('#storeGrid-widget-container .input-has-paging').is(':checked'),
                    rowsCount: $('#storeGrid-widget-container .input-rows-per-page').val()
                };

                return JSON.stringify(config);
            }
        };

        function storeFilterInit(element) {
            function getOptionsForType(type, selected) {
                var options = {
                    'int': [{ value: 'range', name: 'range' }],
                    'decimal': [{ value: 'range', name: 'range' }],
                    'float': [{ value: 'range', name: 'range' }],
                    'date': [{ value: 'range', name: 'range' }],
                    'bool': [{ value: 'checkbox', name: 'checkbox' }],
                    'string': [{ value: 'contains', name: 'contains' }, { value: 'select-one', name: 'select one' }, { value: 'multi-select', name: 'multi select' }],
                    'id': [{ value: 'select-one', name: 'select one' }, { value: 'multi-select', name: 'multi select' }]
                };

                var $options = $('<select></select>');
                if (options[type]) {
                    for (var _i = 0; _i < options[type].length; _i++) {
                        var attributes = selected && selected === options[type][_i].value ? 'selected="selected"' : '';
                        $options.append('<option value="' + options[type][_i].value + '" ' + attributes + '>' + options[type][_i].name + '</option>');
                    }
                }

                return $options;
            }

            // used in storeFilter widget drag&drop arrangement
            function createSortable($element, identifier, filter) {
                var type = $element.attr('data-type');
                var name = $element.attr('data-name');
                var field = $element.attr('data-field');

                var $li = $('<li></li>', {
                    class: 'ui-state-default sortable-item',
                    'data-identifier': identifier,
                    'data-name': name,
                    'data-type': type,
                    'data-field': field
                });

                var $span = $('<span></span>', {
                    class: 'ui-icon ui-icon-arrowthick-2-n-s'
                });

                var $text = $('<span></span>', {
                    class: 'name',
                    text: name + ' (' + type + ')'
                });

                $li.append($span).append($text);

                if (type) {
                    $li.append(getOptionsForType(type, filter));
                }

                return $li;
            }

            var $properties = $('#properties-order');
            var $multiselect = $('#multiselect-properties');

            for (var title in baseFields || {}) {
                $('<option></option>', {
                    text: title + ' (' + baseFields[title] + ')',
                    value: title,
                    'data-type': baseFields[title],
                    'data-name': title,
                    'data-field': 'base'
                }).appendTo($multiselect);
            }

            for (var i = 0; i < (extraFields || []).length; i++) {
                $('<option></option>', {
                    text: extraFields[i].name + ' (' + extraFields[i].type + ')',
                    value: extraFields[i].id,
                    'data-type': extraFields[i].type,
                    'data-name': extraFields[i].name,
                    'data-field': 'extra'
                }).appendTo($multiselect);
            }

            for (var title in navigationFields || {}) {
                $('<option></option>', {
                    text: title + ' (' + navigationFields[title] + ')',
                    value: title,
                    'data-type': navigationFields[title],
                    'data-name': title,
                    'data-field': 'navigation'
                }).appendTo($multiselect);
            }

            if (element) {
                var buildItem = function buildItem(item) {
                    if (item.type === 'item') {
                        var $option = $multiselect.find('option[value="' + item.id + '"]');
                        $option.attr('selected', 'selected');
                        return createSortable($option, item.id, item.filter);
                    }

                    if (item.type === 'section') {
                        var content = [];
                        for (var _i2 = 0; _i2 < (item.items || []).length; _i2++) {
                            content.push(buildItem(item.items[_i2]));
                        }

                        var $section = createSection(item.name, content);
                        return $section;
                    }
                };

                var selectedOptions = JSON.parse(element) || { type: 'section', items: [] };

                for (var _i3 = 0; _i3 < (selectedOptions.items || []).length; _i3++) {
                    $properties.append(buildItem(selectedOptions.items[_i3]));
                }
            }

            Multiselect.Setup($multiselect.attr('id'), function (option, checked, select) {
                var $option = $(option);
                var value = $option.val();

                if (!checked) {
                    $properties.find('li[data-identifier="' + value + '"]').first().remove();
                } else {
                    createSortable($option, value).appendTo($properties);
                }
            });

            $properties.sortable({
                opacity: 0.5, connectWith: '.filter-section', change: function change(event, ui) {
                    ui.placeholder.css({ visibility: 'visible', border: '1px solid #000' });
                }
            });
            $properties.disableSelection();

            $('#add-section').on('click', function (ev) {
                var $input = $(this).prev('input');
                createSection($input.val()).appendTo($properties);
                $input.val('');
            });

            function createSection(name, content) {
                var $wrapper = $('<div></div>', {
                    class: 'section-wrapper'
                });

                var $section = $('<div></div>', {
                    class: 'filter-section',
                    'data-name': name
                }).append(content);
                if (name) {
                    $wrapper.append($('<span></span>', {
                        text: name,
                        class: 'section-name'
                    }));
                }

                $wrapper.append($('<span></span>', {
                    class: 'delete-section glyphicon glyphicon-remove'
                }));

                $section.appendTo($wrapper);

                $section.sortable({
                    opacity: 0.5, connectWith: '#properties-order', change: function change(event, ui) {
                        ui.placeholder.css({ visibility: 'visible', border: '1px solid #000' });
                    }
                });

                return $wrapper;
            }

            $('#storeFilter-widget-container').on('click', '.delete-section', function (ev) {
                var $section = $(this).parents('.section-wrapper').first();
                var content = $section.children('.filter-section').html();
                $section.after(content);
                $section.remove();
            });
        }

        storeWidgets['storeFilter'] = {
            init: storeFilterInit,
            show: storeFilterInit,
            save: function save() {
                var ordered = optionsForContainer($('#properties-order'));

                return JSON.stringify(ordered);
            }
        };

        function optionsForContainer($container) {
            var ordered = [];

            $container.children().each(function (_, element) {
                var $element = $(element);
                if ($element.hasClass('sortable-item')) {
                    ordered.push({ type: 'item', id: $element.attr('data-identifier'), text: $element.attr('data-name'), filter: $element.find('select').val(), field: $element.attr('data-field') });
                } else {
                    ordered.push(optionsForContainer($element.children('.filter-section')));
                }
            });

            return { name: $container.attr('data-name'), type: 'section', items: ordered };
        }

        return storeWidgets;
    }

    function getPreviewWidgets(extraFields, baseFields) {
        var previewWidgets = {};
        var editor = void 0;

        previewWidgets['storeItem'] = {
            init: function init() {
                var $area = $('.input-template');
                editor = CodeMirror.fromTextArea($area[0], {
                    lineNumbers: true,
                    mode: 'javascript'
                });
            },
            show: function show(element) {
                var data = JSON.parse(element);

                var $area = $('.input-template');
                editor = CodeMirror.fromTextArea($area[0], {
                    lineNumbers: true,
                    mode: 'javascript'
                });

                editor.setValue(data.template);
                $('.field-name').text(data.fieldName);
            },
            save: function save() {
                var template = editor.getValue(); //$('.input-template').val();
                var fieldName = $('.field-name').text();

                var element = {
                    template: template,
                    fieldName: fieldName
                };

                return JSON.stringify(element);
            }
        };

        return previewWidgets;
    }

    function renderWidgets(widgets, $container, mode) {
        if (!$container || !$container.length) {
            return false;
        }
        var promises = [];
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i].placeholder === 'store-skin' && widgets[i].type === 'layoutBuilder' && widgets[i].order === 0) {
                continue;
            }

            promises.push(getWidget(widgets[i], mode));
        }

        return Promise.all(promises).then(function (res) {
            var ordered = res.sort(function (a, b) {
                return a.order > b.order;
            });
            for (var i = 0; i < ordered.length; i++) {
                $container.find('.placeholder[data-placeholder="' + ordered[i].placeholder + '"]').append(ordered[i].view);
            }
        });
    }

    function getWidget(widget, mode) {
        var body = {
            content: widget,
            preview: mode
        };

        return Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {
            return {
                placeholder: widget.placeholder,
                order: widget.order,
                view: data
            };
        });
    }

    function renderLayout(layout, $container, deletedPlaceholders) {
        if (!$container || !$container.length) {
            return false;
        }

        for (var i = 0; i < (deletedPlaceholders || []).length; i += 1) {
            $container.find('div[data-placeholder="' + deletedPlaceholders[i] + '"]').remove();
        }

        for (var _i4 = 0; _i4 < layout.length; _i4 += 1) {
            var $row = $('<' + layout[_i4].tag + '></' + layout[_i4].tag + '>', {
                class: layout[_i4].cssClass
            });

            for (var j = 0; j < layout[_i4].columns.length; j++) {
                var col = layout[_i4].columns[j];
                var cssClass = '';
                for (var key in col.resolutions) {
                    cssClass += 'col-' + key + '-' + col.resolutions[key].size + ' st-col-' + key + '-' + col.resolutions[key].size + ' ';
                }

                var $col = $('div[data-placeholder="' + col.properties.placeholder + '"]');

                if ($col.length > 0) {
                    $col.attr('class', cssClass + 'drop drop-layout connected-widget-container placeholder');
                } else {
                    $col = $('<div></div>', {
                        class: cssClass + 'drop drop-layout connected-widget-container placeholder',
                        'data-placeholder': col.properties.placeholder
                    }).appendTo($row);
                }
            }

            $row.appendTo($container);
        }
    }

    function compileSkinTemplate(widgets, name) {
        var l = widgets.find(function (c) {
            return c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0;
        });
        var layout = JSON.parse(l.element);

        var $container = $(document.createElement('div'));
        renderLayout(layout.layoutRows, $container);

        return renderWidgets(widgets, $container).then(function (res) {
            var template = Handlebars.compile($container[0].innerHTML);
            var result = {};
            result[name || 'template'] = template;
            return result;
        });
    }

    //-------------------------------------------------------------------------------------------------------
    // grid
    function grid(_ref) {
        var selector = _ref.selector,
            storeId = _ref.storeId,
            template = _ref.template;

        var $grid = $(selector);
        var $container = $grid.find('.store-items-container');
        var page = 0;
        var rows = +$grid.attr('data-rows') || 0;
        var columns = +$grid.attr('data-columns') || 0;
        var hasPaging = $grid.attr('data-paging') === 'true';
        var size = rows * columns;
        var nextPageExists = false;
        var cachedFilters = {};

        var $btnNext = $('.next-page');
        var $btnPrev = $('.previous-page');
        var $pageNumber = $('.page-number');
        if (!hasPaging) {
            $grid.find('.pager').remove();
        }

        bindEvents();
        loadItems({});

        function loadItems(_ref2) {
            var filters = _ref2.filters,
                extraFilters = _ref2.extraFilters,
                multiselectFilters = _ref2.multiselectFilters,
                multiselectExtraFilters = _ref2.multiselectExtraFilters,
                navigationFilters = _ref2.navigationFilters,
                multiSelectNavigationFilters = _ref2.multiSelectNavigationFilters;

            var body = {
                storeId: storeId,
                filters: filters || [],
                extraFilters: extraFilters || [],
                multiselectFilters: multiselectFilters || [],
                multiselectExtraFilters: multiselectExtraFilters || [],
                navigationFilters: navigationFilters || [],
                multiSelectNavigationFilters: multiSelectNavigationFilters || []
            };

            if (hasPaging) {
                body.skip = page * size;
                body.take = size;
            }

            return Data.postJson({ url: '/ecommerse/storemanager/DisplayStoreGrid', data: body }).then(function (res) {
                buildStoreGrid(template, res.items);
                if (hasPaging) {
                    updatePager(res);
                }
            });
        }

        function buildStoreGrid(template, items) {
            $container.html('');
            var size = 100 / columns - 0.0001 + '%';

            var $wrapper = $('<div></div>');
            for (var i = 0; i < items.length; i++) {

                var html = template(items[i]);
                $('<div></div>', {
                    width: size,
                    class: 'inline-block store-item-preview',
                    html: html
                }).prepend($('<a></a>', {
                    class: 'view-details',
                    'data-id': items[i].id,
                    text: 'details'
                })).appendTo($wrapper);

                if (i % columns === 0 && i !== 0 || i === items.length - 1) {
                    $wrapper.appendTo($container);
                    $wrapper = $('<div></div>');
                }
            }
        }

        function updatePager(res) {
            if (page === 0) {
                $btnPrev.attr('disabled', true).hide();
            } else {
                $btnPrev.attr('disabled', false).show();
            }

            nextPageExists = res.nextPageExists;
            if (!res.nextPageExists) {
                $btnNext.attr('disabled', true).hide();
            } else {
                $btnNext.attr('disabled', false).show();
            }

            $pageNumber.text(page + 1 + '/' + Math.max(Math.ceil(res.count / size), 1));
        }

        function nextPage() {
            if (!nextPageExists) {
                return;
            }

            page += 1;
            loadItems(cachedFilters);
        }

        function prevPage() {
            if (page <= 0) {
                return;
            }

            page -= 1;
            loadItems(cachedFilters);
        }

        function bindEvents() {
            if (hasPaging) {
                $btnNext.on('click', nextPage);
                $btnPrev.on('click', prevPage);
            }
        }

        function dispose() {
            if (hasPaging) {
                $btnNext.off('click', nextPage);
                $btnPrev.off('click', prevPage);
            }
        }

        return {
            applyFilters: function applyFilters() {
                cachedFilters = arguments[0];page = 0;loadItems.apply(undefined, arguments);
            },
            dispose: dispose
        };
    }

    //-------------------------------------------------------------------------------------------------------
    // filter
    function filter(mediator, storeId) {
        var $btnSearch = $('.search-filters .btn-apply-filters');

        loadSelects(storeId);
        bindEvents();

        function doSearch(ev) {
            var filters = [];
            var extraFilters = [];
            var multiselectFilters = [];
            var multiselectExtraFilters = [];
            var navigationFilters = [];
            var multiSelectNavigationFilters = [];

            $('.filter').each(function (_, element) {
                var $element = $(element);
                var identifier = $element.attr('data-identifier');
                var type = $element.attr('data-type');
                var field = $element.attr('data-field');
                var value = $element.val();

                if (value) {
                    var comparison = 7;
                    switch (type) {
                        case 'min':
                            comparison = 5;
                            value = parseFloat(value);
                            break;

                        case 'max':
                            comparison = 3;
                            value = parseFloat(value);
                            break;

                        case 'checkbox':
                            value = $element.is(':checked');
                            if (!value) return;
                            comparison = 1;
                            break;

                        case 'select':
                            comparison = 1;
                            break;

                        case 'multiselect':
                            comparison = 1;
                            break;

                        default:
                            break;
                    }

                    switch (field) {
                        case 'base':
                            var _filter = {
                                propertyName: identifier,
                                comparison: comparison,
                                value: value
                            };

                            if (type === 'multiselect') {
                                multiselectFilters.push(_filter);
                            } else {
                                filters.push(_filter);
                            }

                            break;
                        case 'extra':
                            var extraFilter = {
                                id: identifier,
                                comparison: comparison,
                                value: value
                            };

                            if (type === 'multiselect') {
                                multiselectExtraFilters.push(extraFilter);
                            } else {
                                extraFilters.push(extraFilter);
                            }

                            break;
                        case 'navigation':
                            var navigationFilter = {
                                propertyName: identifier,
                                comparison: comparison,
                                value: value
                            };

                            if (type === 'multiselect') {
                                multiSelectNavigationFilters.push(navigationFilter);
                            } else {
                                navigationFilters.push(navigationFilter);
                            }

                            break;
                        default:
                            break;
                    }
                }
            });

            mediator.dispatch('filtergrid', { filters: filters, extraFilters: extraFilters, multiselectFilters: multiselectFilters, multiselectExtraFilters: multiselectExtraFilters, navigationFilters: navigationFilters, multiSelectNavigationFilters: multiSelectNavigationFilters });
        }

        function loadSelects(storeId) {
            $('select.filter').each(function (_, element) {
                var $element = $(element);
                var identifier = $element.attr('data-identifier');
                var field = $element.attr('data-field');

                Data.getJson({ url: '/ecommerse/storemanager/GetDistinctValues?storeId=' + storeId + '&identifier=' + identifier + '&field=' + field }).then(function (res) {
                    if (res.success) {
                        if (field === 'navigation') {
                            for (var key in res.items) {
                                $('<option></option>', {
                                    value: key,
                                    text: res.items[key]
                                }).appendTo($element);
                            }
                        } else {
                            for (var i = 0; i < res.items.length; i += 1) {
                                $('<option></option>', {
                                    value: res.items[i],
                                    text: res.items[i]
                                }).appendTo($element);
                            }
                        }
                    }
                });
            });
        }

        function bindEvents() {
            $btnSearch.on('click', doSearch);
        }

        function dispose() {
            $btnSearch.off('click', doSearch);
        }

        return {
            dispose: dispose
        };
    }

    function displayStore(widgets, storeId, logger, mediator) {
        var l = widgets.find(function (c) {
            return c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0;
        });
        var layout = JSON.parse(l.element);

        var $gridView = $('#store-grid');
        var $fullPageView = $('#store-item');
        var $itemContainer = $fullPageView.find('.item-container');
        var $mainPlaceholder = $gridView.find('div[data-placeholder="store-skin"]');

        var applyFiltersHandler = void 0;
        var viewDetailsHandler = void 0;

        renderLayout(layout.layoutRows, $mainPlaceholder);
        renderWidgets(widgets, $mainPlaceholder).then(function (res) {
            // TODO: compile templates on skin creation
            return Data.getJson({ url: '/ecommerse/storemanager/getskins?id=' + storeId });
        }).then(function (res) {
            var skins = [];
            var previewSkin = JSON.parse(res.previewSkin);
            skins.push(compileSkinTemplate(previewSkin, 'previewTemplate'));

            var fullPageSkin = JSON.parse(res.fullPageSkin);
            skins.push(compileSkinTemplate(fullPageSkin, 'fullPageTemplate'));

            return Promise.all(skins);
        }).then(function (res) {
            var previewTemplate = res[0].previewTemplate;
            var fullPageTemplate = res[1].fullPageTemplate;

            var storeGrid = grid({ selector: '.display-store-grid', storeId: storeId, template: previewTemplate });
            applyFiltersHandler = storeGrid.applyFilters;
            viewDetailsHandler = createDisplayFullPageEventHandler(fullPageTemplate);
            filter(mediator, storeId);

            bindEvents();
        }, Data.defaultError());

        //-------------------------------------------------------------------------------------------------------
        // ui
        function toggleFilterSection(ev) {
            var $target = $(this);
            $target.parents('.section-wrapper').toggleClass('collapsed');
            $target.find('span.glyphicon').toggleClass('glyphicon-chevron-up').toggleClass('glyphicon-chevron-down');
        }

        //-------------------------------------------------------------------------------------------------------
        // full view
        function createDisplayFullPageEventHandler(template) {
            return function (ev) {
                var $target = $(this);
                var id = $target.attr('data-id');
                Data.getJson({ url: '/ecommerse/storemanager/getstoreitem?id=' + id }).then(function (res) {
                    if (res.success) {
                        var html = template(res.item);

                        $fullPageView.show();
                        $gridView.hide();
                        $itemContainer.html(html);
                    }
                });
            };
        }

        function backToGrid(ev) {
            $fullPageView.hide();
            $gridView.show();
            $itemContainer.html('');
        }

        function bindEvents() {
            $('.back-to-store').on('click', backToGrid);
            $('body').on('click', '.section-name', toggleFilterSection);
            $('body').on('click', '.view-details', viewDetailsHandler);

            mediator.on('filtergrid', applyFiltersHandler, 'filter grid', 'StoreGridWidget');
        }

        function dispose() {
            $('.back-to-store').off('click', backToGrid);
            $('body').off('click', '.section-name', toggleFilterSection);
            $('body').off('click', '.view-details', viewDetailsHandler);

            mediator.off('filtergrid', 'filter grid', 'StoreGridWidget');
        }

        return {
            dispose: dispose
        };
    }

    return {
        gridSkin: gridSkin,
        getGridWidgets: getGridWidgets,
        getPreviewWidgets: getPreviewWidgets,
        getFullPageWidgets: getPreviewWidgets,
        displayStore: displayStore
    };
}();