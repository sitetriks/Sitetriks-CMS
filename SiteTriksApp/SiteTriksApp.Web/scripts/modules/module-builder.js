/* globals w */

import { Utils } from '../common/utils.js';
import { initLayout } from './layout-control.js';
import { WidgetsDraggable } from '../widgets-draggable.js';
import { widgetsModule } from './widgets.js';
import { scrollControl } from './scroll-control.js';

import { widgets } from '../widgets';

var ModuleBuilder = (function () {
    let instancesCache = {};
    let _mediator;
    let _logger;

    function init(mediator, logger) {
        _mediator = mediator;
        _logger = logger;
    }

    /**
     * Create scroll control.
     * @param {any} wrapperId wrapper id
     * @param {any} scrollViewClass scroll view class
     * @param {any} innerContentClass inner conten class
     * @param {{styles: Map<string, string>}} config config
     * @return {scrollControl} scroll-control
     */
    function createScroll(wrapperId, scrollViewClass, innerContentClass, config) {
        let $element = $(wrapperId);
        let scroll = scrollControl($element, scrollViewClass, innerContentClass, config);

        $element.data('scroll-bar', scroll);
        instancesCache[wrapperId] = { 'scroll-bar': scroll };

        return scroll;
    }

    function createWidgets(addWidgetContainerId, pageContent) {
        let initFunctions = getSiteTriksWidgets();

        let widgets = widgetsModule($(addWidgetContainerId), initFunctions, pageContent);
        instancesCache[addWidgetContainerId] = { 'widgets': widgets };

        return widgets;
    }

    function initializeLayout(wrapperSelector, layout, resolutionsSelector, optionsSelector, resolutionValidation) {
        let $wrapper = $(wrapperSelector);

        initLayout($wrapper, layout, $(resolutionsSelector), $(optionsSelector), resolutionValidation);

        instancesCache[wrapperSelector] = { 'layout-control': layout };
        $wrapper.data('layout-control', layout);

        return layout;
    }

    function renderLayout(layout, $container, deletedPlaceholders, widgets) {
        if (!$container || !$container.length) { return false; }

        for (let i = 0; i < (deletedPlaceholders || []).length; i += 1) {
            $container.find(`div[data-placeholder="${deletedPlaceholders[i]}"]`).remove();
            w.removeWidgetForPlaceholder(deletedPlaceholders[i], widgets);
        }

        let $rows = $container.children('.row');

        for (let i = 0; i < layout.length; i += 1) {
            let isExistingRow = $rows.length > i;
            let $row = isExistingRow ? $($rows[i]) : $(`<${layout[i].tag}></${layout[i].tag}>`);
            $row.removeClass().addClass(`row ${layout[i].cssClass} `);

            for (let j = 0; j < layout[i].columns.length; j++) {
                let col = layout[i].columns[j];
                let cssClass = 'layout-preview-col';
                for (let key in col.resolutions) {
                    cssClass += ` col-${key}-${col.resolutions[key].size} st-col-${key}-${col.resolutions[key].size} `;
                }

                if (col.properties && col.properties.cssClass && col.properties.cssClass.trim()) {
                    cssClass += ' ' + (col.properties.cssClass || '') + ' ';
                }

                let $col = $container.find(`div[data-placeholder="${col.properties.placeholder}"]`);

                if ($col.length > 0) {
                    $col.attr('class', cssClass + 'drop drop-layout connected-widget-container placeholder');
                } else {
                    $col = $('<div></div>', {
                        class: cssClass + 'drop drop-layout connected-widget-container placeholder',
                        'data-placeholder': col.properties.placeholder
                    }).appendTo($row);
                }
            }

            if (!isExistingRow) {
                $row.appendTo($container);
            }
        }
    }

    function getSiteTriksWidgets() {
        let initFunctions = {};
        for (var key in widgets) {
            if (!Utils.isFunction(widgets[key])) {
                _logger.error(`widget ${key} does not export function!`);
                continue;
            }

            initFunctions[key] = widgets[key]({ mediator: _mediator, logger: _logger });

            //backwards compatibility
            if (initFunctions[key].init && !initFunctions[key].add) {
                initFunctions[key].add = initFunctions[key].init;
            }

            if (initFunctions[key].show && !initFunctions[key].edit) {
                initFunctions[key].edit = initFunctions[key].show;
            }
        }

        initFunctions['layoutBuilder'] = {
            add: function () {
                let l = [];
                ModuleBuilder.initializeLayout('#layout-widget-wrapper', [], '.resolution-widget', '#layout-widget-options', function () { return true; });
            },
            edit: function (element) {
                let el = JSON.parse(element);
                ModuleBuilder.initializeLayout('#layout-widget-wrapper', el.layoutRows, '.resolutions-widget', '#layout-widget-options', function () { return true; });
            },
            save: function () {
                let layout = ModuleBuilder.getInstance('#layout-widget-wrapper', 'layout-control').map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });

                let model = {
                    layoutRows: layout
                };

                return JSON.stringify(model);
            },
            callback: function (id) {
                let l = getInstance('#layout-widget-wrapper', ModuleBuilder.LAYOUT);
                let layoutRows = l.map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });
                renderLayout(layoutRows, $(`div.preview-placeholder[data-identifier="${id}"]`).find('.layout-content').first(), l.deletedPlaceholders);

                WidgetsDraggable.init(w);
            }
        };

        return initFunctions;
    }

    // get cached instance
    function getInstance(selector, type) {
        if (instancesCache[selector]) {
            return instancesCache[selector][type];
        }

        return undefined;
    }

    function setInstance(selector, type, data) {

        if (!instancesCache[selector]) {
            instancesCache[selector] = {};
        }

        instancesCache[selector][type] = data;

        if (type !== 'widgets') {
            $(selector).data(type, data);
        }
    }

    return {
        init,
        createScroll,
        createWidgets,
        initializeLayout,
        renderLayout,
        getInstance,
        setInstance,
        SCROLL: 'scroll-bar',
        WIDGETS: 'widgets',
        LAYOUT: 'layout-control'
    };
}());

export { ModuleBuilder };
window.ModuleBuilder = ModuleBuilder;
