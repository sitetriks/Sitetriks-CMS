/* globals CodeMirror */
import './layout.js';

import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { Handlebars } from '../common/handlebars.js';
import { Multiselect } from '../common/multiselect-setup.js';
import { ModuleBuilder } from '../modules/module-builder.js';
import { WidgetsDraggable } from '../widgets-draggable.js';

'use strict';

var StoreSkins = (function () {
    function gridSkin(widgets, pageWidgets, logger, mediator, skinId, storeId, postUrl) {
        let l = widgets.find(c => c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0);
        let layout = JSON.parse(l.element);

        let $resolutions = $('.resolution');
        let $defaultResolution = $('.resolution[data-type="lg"]');
        let $showContent = $('.show-content');
        let $showLayout = $('.show-layout');
        let previewLayoutSelector = '#preview-layout';
        let $previewContainer = $('#preview-container');
        let $mainPlaceholder = $previewContainer.find('div[data-placeholder="store-skin"]');

        ModuleBuilder.init(mediator, logger);

        let w = ModuleBuilder.createWidgets('#add-widget-container', pageWidgets, widgets);

        ModuleBuilder.initializeLayout(previewLayoutSelector, layout.layoutRows, '.resolution', '#main-layout-options', function () { return $('.selected-option').attr('data-type') === 'layout'; });
        ModuleBuilder.renderLayout(layout.layoutRows, $mainPlaceholder);
        WidgetsDraggable.init(w);
        renderWidgets(widgets, $mainPlaceholder, 'preview');

        bindEvents();

        function resolutionPreview(ev) {
            let active = $('.selected-option').attr('data-type');

            if (active === 'content') {
                let $target = $(this);
                let targetType = $target.attr('data-type');
                let isActive = false;

                $resolutions.each(function (_, element) {
                    let $el = $(element);
                    if ($el.hasClass('selected')) {
                        let type = $el.attr('data-type');
                        if (type === targetType) {
                            isActive = true;
                            return;
                        }

                        $el.removeClass('selected');
                        Utils.removejscssfile(`/css/sitetriks/st-${type}-preview.css`, 'css');
                    }
                });

                if (!isActive) {
                    $target.addClass('selected');
                    Utils.loadjscssfile(`/css/sitetriks/st-${targetType}-preview.css`, 'css');
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

        function saveLayout() {
            let l = ModuleBuilder.getInstance(previewLayoutSelector, ModuleBuilder.LAYOUT);
            let layoutWidget = w.getPageContent().find(c => c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0);
            let element = JSON.parse(layoutWidget.element);
            element.layoutRows = l.map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });
            layoutWidget.element = JSON.stringify(element);

            return element.layoutRows;
        }

        function saveAndRenderLayout(ev) {
            let layout = saveLayout();
            ModuleBuilder.renderLayout(layout, $mainPlaceholder, l.deletedPlaceholders);
            WidgetsDraggable.init(w);
        }

        function checkForContent(e) {
            e.target.dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: e.detail.type, rowIndex: e.detail.rowIndex } }));
        }

        function saveLayoutAndWidgets(ev) {
            Loader.show('#fff');
            saveLayout();
            compileSkinTemplate(w.getPageContent()).then(function (res) {
                let formData = new FormData();
                if (Validator.isFunction(formData.set)) {
                    formData.set('SerializedSkin', JSON.stringify(w.getPageContent()));
                    formData.set('CompiledSkin', res.template);
                    formData.set('id', skinId);
                } else {
                    formData.append('SerializedSkin', JSON.stringify(w.getPageContent()));
                    formData.append('CompiledSkin', res.template);
                    formData.append('id', skinId);
                }

                return Data.postForm({ url: postUrl, formData });
            }).then(function (res) {
                if (res && res.success) {
                    window.location.replace(`/ecommerse/storemanager/details/${storeId}`);
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
        let storeWidgets = {};

        storeWidgets['storeGrid'] = {
            init: function () {
            },
            show: function (element) {
                let config = JSON.parse(element);

                $('#storeGrid-widget-container .input-items-on-row').val(config.itemsOnRow);
                $('#storeGrid-widget-container .input-has-paging').attr('checked', !!config.hasPaging).trigger('change');
                $('#storeGrid-widget-container .input-rows-per-page').val(config.rowsCount);
            },
            save: function () {
                let config = {
                    itemsOnRow: $('#storeGrid-widget-container .input-items-on-row').val(),
                    hasPaging: $('#storeGrid-widget-container .input-has-paging').is(':checked'),
                    rowsCount: $('#storeGrid-widget-container .input-rows-per-page').val()
                };

                return JSON.stringify(config);
            }
        };

        function storeFilterInit(element) {
            function getOptionsForType(type, selected) {
                let options = {
                    'int': [{ value: 'range', name: 'range' }],
                    'decimal': [{ value: 'range', name: 'range' }],
                    'float': [{ value: 'range', name: 'range' }],
                    'date': [{ value: 'range', name: 'range' }],
                    'bool': [{ value: 'checkbox', name: 'checkbox' }],
                    'string': [{ value: 'contains', name: 'contains' }, { value: 'select-one', name: 'select one' }, { value: 'multi-select', name: 'multi select' }],
                    'id': [{ value: 'select-one', name: 'select one' }, { value: 'multi-select', name: 'multi select' }]
                };

                let $options = $('<select></select>');
                if (options[type]) {
                    for (let i = 0; i < options[type].length; i++) {
                        let attributes = selected && selected === options[type][i].value ? 'selected="selected"' : '';
                        $options.append(`<option value="${options[type][i].value}" ${attributes}>${options[type][i].name}</option>`);
                    }
                }

                return $options;
            }

            // used in storeFilter widget drag&drop arrangement
            function createSortable($element, identifier, filter) {
                let type = $element.attr('data-type');
                let name = $element.attr('data-name');
                let field = $element.attr('data-field');

                let $li = $('<li></li>', {
                    class: 'ui-state-default sortable-item',
                    'data-identifier': identifier,
                    'data-name': name,
                    'data-type': type,
                    'data-field': field
                });

                let $span = $('<span></span>', {
                    class: 'ui-icon ui-icon-arrowthick-2-n-s'
                });

                let $text = $('<span></span>', {
                    class: 'name',
                    text: `${name} (${type})`
                });

                $li.append($span)
                    .append($text);

                if (type) {
                    $li.append(getOptionsForType(type, filter));
                }

                return $li;
            }

            let $properties = $('#properties-order');
            let $multiselect = $('#multiselect-properties');

            for (var title in baseFields || {}) {
                $('<option></option>', {
                    text: `${title} (${baseFields[title]})`,
                    value: title,
                    'data-type': baseFields[title],
                    'data-name': title,
                    'data-field': 'base'
                }).appendTo($multiselect);
            }

            for (var i = 0; i < (extraFields || []).length; i++) {
                $('<option></option>', {
                    text: `${extraFields[i].name} (${extraFields[i].type})`,
                    value: extraFields[i].id,
                    'data-type': extraFields[i].type,
                    'data-name': extraFields[i].name,
                    'data-field': 'extra'
                }).appendTo($multiselect);
            }

            for (var title in navigationFields || {}) {
                $('<option></option>', {
                    text: `${title} (${navigationFields[title]})`,
                    value: title,
                    'data-type': navigationFields[title],
                    'data-name': title,
                    'data-field': 'navigation'
                }).appendTo($multiselect);
            }

            if (element) {
                function buildItem(item) {
                    if (item.type === 'item') {
                        let $option = $multiselect.find(`option[value="${item.id}"]`);
                        $option.attr('selected', 'selected');
                        return createSortable($option, item.id, item.filter);
                    }

                    if (item.type === 'section') {
                        let content = [];
                        for (let i = 0; i < (item.items || []).length; i++) {
                            content.push(buildItem(item.items[i]));
                        }

                        let $section = createSection(item.name, content);
                        return $section;
                    }
                }

                let selectedOptions = JSON.parse(element) || { type: 'section', items: [] };

                for (let i = 0; i < (selectedOptions.items || []).length; i++) {
                    $properties.append(buildItem(selectedOptions.items[i]));
                }
            }

            Multiselect.Setup($multiselect.attr('id'), function (option, checked, select) {
                let $option = $(option);
                let value = $option.val();

                if (!checked) {
                    $properties.find('li[data-identifier="' + value + '"]')
                        .first()
                        .remove();
                }
                else {
                    createSortable($option, value).appendTo($properties);
                }
            });

            $properties.sortable({
                opacity: 0.5, connectWith: '.filter-section', change: function (event, ui) {
                    ui.placeholder.css({ visibility: 'visible', border: '1px solid #000' });
                }
            });
            $properties.disableSelection();

            $('#add-section').on('click', function (ev) {
                let $input = $(this).prev('input');
                createSection($input.val()).appendTo($properties);
                $input.val('');
            });

            function createSection(name, content) {
                let $wrapper = $('<div></div>', {
                    class: 'section-wrapper'
                });

                let $section = $('<div></div>', {
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
                    opacity: 0.5, connectWith: '#properties-order', change: function (event, ui) {
                        ui.placeholder.css({ visibility: 'visible', border: '1px solid #000' });
                    }
                });

                return $wrapper;
            }

            $('#storeFilter-widget-container').on('click', '.delete-section', function (ev) {
                let $section = $(this).parents('.section-wrapper').first();
                let content = $section.children('.filter-section').html();
                $section.after(content);
                $section.remove();
            });
        }

        storeWidgets['storeFilter'] = {
            init: storeFilterInit,
            show: storeFilterInit,
            save: function () {
                let ordered = optionsForContainer($('#properties-order'));

                return JSON.stringify(ordered);
            }
        };

        function optionsForContainer($container) {
            var ordered = [];

            $container.children().each(function (_, element) {
                let $element = $(element);
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
        let previewWidgets = {};
        let editor;

        previewWidgets['storeItem'] = {
            init: function () {
                let $area = $('.input-template');
                editor = CodeMirror.fromTextArea($area[0], {
                    lineNumbers: true,
                    mode: 'javascript'
                });
            },
            show: function (element) {
                let data = JSON.parse(element);

                let $area = $('.input-template');
                editor = CodeMirror.fromTextArea($area[0], {
                    lineNumbers: true,
                    mode: 'javascript'
                });

                editor.setValue(data.template);
                $('.field-name').text(data.fieldName);
            },
            save: function () {
                let template = editor.getValue();//$('.input-template').val();
                let fieldName = $('.field-name').text();

                let element = {
                    template,
                    fieldName
                };

                return JSON.stringify(element);
            }
        };

        return previewWidgets;
    }

    function renderWidgets(widgets, $container, mode) {
        if (!$container || !$container.length) { return false; }
        let promises = [];
        for (let i = 0; i < widgets.length; i++) {
            if (widgets[i].placeholder === 'store-skin' && widgets[i].type === 'layoutBuilder' && widgets[i].order === 0) {
                continue;
            }

            promises.push(getWidget(widgets[i], mode));
        }

        return Promise.all(promises).then(function (res) {
            let ordered = res.sort((a, b) => a.order > b.order);
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

    function compileSkinTemplate(widgets, name) {
        let l = widgets.find(c => c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0);
        let layout = JSON.parse(l.element);

        let $container = $(document.createElement('div'));
        ModuleBuilder.renderLayout(layout.layoutRows, $container);

        return renderWidgets(widgets, $container).then(function (res) {
            let template = $container[0].innerHTML;
            let result = {};
            result[name || 'template'] = template;
            return result;
        });
    }

    //-------------------------------------------------------------------------------------------------------
    // grid
    function grid({ selector, storeId, template }) {
        let $grid = $(selector);
        let $container = $grid.find('.store-items-container');
        let page = 0;
        let rows = +$grid.attr('data-rows') || 0;
        let columns = +$grid.attr('data-columns') || 0;
        let hasPaging = $grid.attr('data-paging') === 'true';
        let size = rows * columns;
        let nextPageExists = false;
        let cachedFilters = {};

        let $btnNext = $('.next-page');
        let $btnPrev = $('.previous-page');
        let $pageNumber = $('.page-number');
        if (!hasPaging) {
            $grid.find('.pager').remove();
        }

        bindEvents();
        loadItems({});

        function loadItems({ filters, extraFilters, multiselectFilters, multiselectExtraFilters, navigationFilters, multiSelectNavigationFilters }) {
            let body = {
                storeId,
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
            let size = `${100 / columns - 0.0001}%`;

            let $wrapper = $('<div></div>');
            for (let i = 0; i < items.length; i++) {
                items[i].price = items[i].price.toFixed(2);
                let html = template(items[i]);
                $('<div></div>', {
                    width: size,
                    class: 'inline-block store-item-preview',
                    html: html
                }).prepend($('<a></a>', {
                    class: 'btn btn-success add-to-cart',
                    'data-id': items[i].id,
                    text: 'Add to Cart'
                })).prepend($('<a></a>', {
                    class: 'btn btn-default view-details',
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

            $pageNumber.text(`${page + 1}/${Math.max(Math.ceil(res.count / size), 1)}`);
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
            applyFilters: function () { cachedFilters = arguments[0]; page = 0; loadItems(...arguments); },
            dispose
        };
    }

    //-------------------------------------------------------------------------------------------------------
    // filter
    function filter(mediator, storeId) {
        let $btnSearch = $('.search-filters .btn-apply-filters');

        loadSelects(storeId);
        bindEvents();

        function doSearch(ev) {
            let filters = [];
            let extraFilters = [];
            let multiselectFilters = [];
            let multiselectExtraFilters = [];
            let navigationFilters = [];
            let multiSelectNavigationFilters = [];

            $('.filter').each(function (_, element) {
                let $element = $(element);
                let identifier = $element.attr('data-identifier');
                let type = $element.attr('data-type');
                let field = $element.attr('data-field');
                let value = $element.val();

                if (value) {
                    let comparison = 7;
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
                            let filter = {
                                propertyName: identifier,
                                comparison,
                                value
                            };

                            if (type === 'multiselect') {
                                multiselectFilters.push(filter);
                            } else {
                                filters.push(filter);
                            }

                            break;
                        case 'extra':
                            let extraFilter = {
                                id: identifier,
                                comparison,
                                value
                            };

                            if (type === 'multiselect') {
                                multiselectExtraFilters.push(extraFilter);
                            } else {
                                extraFilters.push(extraFilter);
                            }

                            break;
                        case 'navigation':
                            let navigationFilter = {
                                propertyName: identifier,
                                comparison,
                                value
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

            mediator.dispatch('filtergrid', { filters, extraFilters, multiselectFilters, multiselectExtraFilters, navigationFilters, multiSelectNavigationFilters });
        }

        function loadSelects(storeId) {
            $('select.filter').each(function (_, element) {
                let $element = $(element);
                let identifier = $element.attr('data-identifier');
                let field = $element.attr('data-field');

                Data.getJson({ url: `/ecommerse/storemanager/GetDistinctValues?storeId=${storeId}&identifier=${identifier}&field=${field}` }).then(function (res) {
                    if (res.success) {
                        if (field === 'navigation') {
                            for (var key in res.items) {
                                $('<option></option>', {
                                    value: key,
                                    text: res.items[key]
                                }).appendTo($element);
                            }
                        } else {
                            for (let i = 0; i < res.items.length; i += 1) {
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
            dispose
        };
    }

    function displayStore(widgets, storeId, logger, mediator) {
        let l = widgets.find(c => c.placeholder === 'store-skin' && c.type === 'layoutBuilder' && c.order === 0);
        let layout = JSON.parse(l.element);

        let $gridView = $('#store-grid');
        let $fullPageView = $('#store-item');
        let $cartView = $('#store-cart');
        let $itemContainer = $fullPageView.find('.item-container');
        let $mainPlaceholder = $gridView.find('div[data-placeholder="store-skin"]');

        let applyFiltersHandler;
        let viewDetailsHandler;

        let cart = new Cart();

        ModuleBuilder.renderLayout(layout.layoutRows, $mainPlaceholder);
        renderWidgets(widgets, $mainPlaceholder).then(function (res) {
            return Data.getJson({ url: '/ecommerse/storemanager/getskins?id=' + storeId });
        }).then(function (res) {
            let previewTemplate = Handlebars.compile(res.compiledPreviewSkin);
            let fullPageTemplate = Handlebars.compile(res.compiledFullPageSkin);

            let storeGrid = grid({ selector: '.display-store-grid', storeId, template: previewTemplate });
            applyFiltersHandler = storeGrid.applyFilters;
            viewDetailsHandler = createDisplayFullPageEventHandler(fullPageTemplate);
            filter(mediator, storeId);

            $('body').on('click', '.add-to-cart', function () {
                let id = this.getAttribute('data-id');
                cart.add(id);
            });

            $('.view-cart').on('click', function () {
                createCartView();
            });

            bindEvents();
        }, Data.defaultError());


        //-------------------------------------------------------------------------------------------------------
        // ui
        function toggleFilterSection(ev) {
            let $target = $(this);
            $target.parents('.section-wrapper').first().toggleClass('collapsed');
            $target.find('span.glyphicon').toggleClass('glyphicon-chevron-up').toggleClass('glyphicon-chevron-down');
        }

        //-------------------------------------------------------------------------------------------------------
        // full view
        function createDisplayFullPageEventHandler(template) {
            return function (ev) {
                let $target = $(this);
                let id = $target.attr('data-id');
                Data.getJson({ url: '/ecommerse/storemanager/getstoreitem?id=' + id }).then(function (res) {
                    if (res.success) {
                        $fullPageView.show();
                        $gridView.hide();
                        $itemContainer.html(template(res.item));
                        $itemContainer.prepend($('<a></a>', {
                            class: 'btn btn-success add-to-cart',
                            'data-id': res.item.id,
                            text: 'Add to Cart'
                        }));
                    }
                });
            };
        }

        function backToGrid(ev) {
            $fullPageView.hide();
            $cartView.hide();
            $gridView.show();
            $itemContainer.html('');
        }

        //-------------------------------------------------------------------------------------------------------
        // cart view
        function createCartView() {
            $gridView.hide();
            $fullPageView.hide();
            $cartView.show();
            let $container = $cartView.find('.item-container');
            $container.html('');
            Loader.show('#fff');
            cart.loadItemsInfo($container).then(Loader.hide);
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
            dispose
        };
    }

    // just setup code, will change when moved to separate widget
    function Cart() {
        let userId;
        let items = {};
        // TODO: bind events after load.
        Data.getJson({ url: '/ecommerse/storeitemmanager/loadcart' }).then(function (res) {
            items = res.items;
            userId = res.userId;
            if (!items) {
                items = loadCart();
            } else {
                syncCart();
            }
        });

        function add(itemId) {
            if (items[itemId]) {
                items[itemId].count += 1;
            } else {
                items[itemId] = { count: 1 };
            }

            Notifier.createAlert({ containerId: '#alerts', message: 'Item added to cart!', status: 'success' });
            syncCart();
            if (userId) {
                Data.getJson({ url: `/ecommerse/storeitemmanager/additemtocart?id=${itemId}&number=${items[itemId].count}` }).then(function (res) {
                    console.log(res);
                });
            }
        }

        function remove(itemId) {
            if (items[itemId]) {
                delete items[itemId];
                Notifier.createAlert({ containerId: '#alerts', message: 'Item removed from cart!', status: 'danger' });
                syncCart();
                if (userId) {
                    Data.getJson({ url: `/ecommerse/storeitemmanager/RemoveFromCart?id=${itemId}` }).then(function (res) {
                        console.log(res);
                    });
                }
            }
        }

        function loadItemsInfo($container) {
            let promises = [];
            for (var id in items) {
                promises.push(Data.getJson({ url: `/ecommerse/storeitemmanager/getiteminfo?id=${id}` }).then(function (res) {
                    items[res.item.id].info = res.item;
                }));
            }

            return Promise.all(promises).then(function (res) {
                for (var key in items) {
                    if (!items[key].info) {
                        console.error('No Information for item - ' + key);
                        continue;
                    }

                    let html =
                        `<div class="cart-item">
                            ${items[key].info.title} - <input class="count-change" value="${items[key].count}" data-id="${key}" type="number"/> x ${items[key].info.price.toFixed(2)} lv 
                            <span class="btn btn-danger glyphicon glyphicon-remove remove-from-cart" data-id="${key}"></span>
                        </div> `;

                    $container.append(html);
                }

                Loader.hide();
            });
        }

        function syncCart() {
            let key = 'store-cart' + (userId || '');
            sessionStorage.setItem(key, JSON.stringify(items));
        }

        function loadCart() {
            let key = 'store-cart' + (userId || '');
            let savedItems = sessionStorage.getItem(key);
            return savedItems ? JSON.parse(savedItems) : {};
        }

        $('body').on('click', '.remove-from-cart', function () {
            let id = this.getAttribute('data-id');
            remove(id);
            if (this.parentElement.classList.contains('cart-item')) {
                this.parentElement.remove();
            }
        });

        $('body').on('input', '.count-change', function (ev) {
            let $target = $(this);
            let id = $target.attr('data-id');
            let value = +$target.val();
            if (items[id]) {
                if (value && value !== NaN && value > 0) {
                    items[id].count = value;
                } else {
                    items[id].count = 1;
                    $target.val(1);
                }

                syncCart();
                if (userId) {
                    Data.getJson({ url: `/ecommerse/storeitemmanager/additemtocart?id=${id}&number=${items[id].count}` }).then(function (res) {
                        console.log(res);
                    });
                }
            }
        });

        $('body').on('click', '.checkout', function () {
            let body = { storeItems: {} };
            for (var id in items) {
                body.storeItems[id] = items[id].count;
            }

            Data.postJson({ url: '/ecommerse/storeitemmanager/checkout', data: body }).then(function (res) {
                if (res.success) {
                    for (var id in items) {
                        delete items[id];
                    }

                    $('#store-cart').find('.item-container').html('');
                    syncCart();
                    Notifier.createAlert({ containerId: '#alerts', title: 'Тhe order was made!', message: res.message, status: 'success' });
                } else {
                    Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                }
            });
        });

        return {
            add,
            remove,
            loadItemsInfo
        };
    }

    return {
        gridSkin,
        getGridWidgets,
        getPreviewWidgets,
        getFullPageWidgets: getPreviewWidgets,
        displayStore
    };
})();

window.StoreSkins = StoreSkins;
