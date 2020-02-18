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
            let inlineStylesParsed = buildInlineStylesObject(layout[i].inlineStyles);
            $row.css({
                'background-color': inlineStylesParsed.backgroundColorPicker,
                'color': inlineStylesParsed.fontColorPicker,
                'font-size': inlineStylesParsed.fontSize,
                'margin': inlineStylesParsed.margin,
                'padding': inlineStylesParsed.padding
            })


            for (let j = 0; j < layout[i].columns.length; j++) {
                let col = layout[i].columns[j];
                let cssClass = 'layout-preview-col';
                let inlineStylesParsed = buildInlineStylesObject(col.properties.inlineStyles);
                for (let key in col.resolutions) {
                    cssClass += ` col-${key}-${col.resolutions[key].size} st-col-${key}-${col.resolutions[key].size} st-col-${key}-offset-${col.resolutions[key].offset}  `;
                }

                if (col.properties && col.properties.cssClass && col.properties.cssClass.trim()) {
                    cssClass += ' ' + (col.properties.cssClass || '') + ' ';
                }



                let $col = $container.find(`div[data-placeholder="${col.properties.placeholder}"]`);

                if ($col.length > 0) {
                    $col.attr('class', cssClass + 'drop drop-layout connected-widget-container placeholder')
                        .css({
                            'background-color': inlineStylesParsed.backgroundColorPicker,
                            'color': inlineStylesParsed.fontColorPicker,
                            'font-size': inlineStylesParsed.fontSize,
                            'margin': inlineStylesParsed.margin,
                            'padding': inlineStylesParsed.padding
                        })
                } else {
                    $col = $('<div></div>', {
                        class: cssClass + 'drop drop-layout connected-widget-container placeholder',
                        'data-placeholder': col.properties.placeholder
                    }).css({
                        'background-color': inlineStylesParsed.backgroundColorPicker,
                        'color': inlineStylesParsed.fontColorPicker,
                        'font-size': inlineStylesParsed.fontSize,
                        'margin': inlineStylesParsed.margin,
                        'padding': inlineStylesParsed.padding
                    }).appendTo($row);
                }
            }

            if (!isExistingRow) {
                $row.appendTo($container);
                // addColorEditOption($row);
            }
        }
    }

    function buildInlineStylesObject(inputStyles) {
        if (!inputStyles) {
            return false;
        }

        let stylesArray = inputStyles.split(';');

        // replace them in the object
        let inlineStylesHash = {
            backgroundColorPicker: typeof (stylesArray[0]) !== 'undefined' ? (stylesArray[0].split(':'))[1] : "",
            fontColorPicker: typeof (stylesArray[1]) !== 'undefined' ? (stylesArray[1].split(':'))[1] : "",
            fontSize: typeof (stylesArray[2]) !== 'undefined' ? (stylesArray[2].split(':'))[1] : "",
            margin: typeof (stylesArray[3]) !== 'undefined' ? (stylesArray[3].split(':'))[1] : "",
            padding: typeof (stylesArray[4]) !== 'undefined' ? (stylesArray[4].split(':'))[1] : "",
        }

        // return the object
        return inlineStylesHash;
    }

    function addColorEditOption(currenrRows) {
        currenrRows.each((index, el) => {
            let $inputElement = $(el).find('.color-picker-holder');
            if ($inputElement.length === 0) {
                $(el).find('div').prepend($('<div>Edit background</div>').attr({ class: `color-picker-holder pickr-${currenrRows.length}` }))
            }
        });
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
