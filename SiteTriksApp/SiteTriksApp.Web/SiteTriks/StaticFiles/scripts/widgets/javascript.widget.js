/* globals CodeMirror */

import { WidgetToggleGenerator } from '../widget-toggle-generator.js';

export function javascript() {
    var editor;

    return {
        add: function () {
            WidgetToggleGenerator.generate('#js-widget-options',
                { firstId: 'raw-btn', firstLabel: 'Switch to code', secondId: 'url-btn', secondLabel: 'Switch to url' }, '#raw-js-container', '#url-js-container');

            editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                lineNumbers: true,
                mode: 'javascript'
            });
        },
        edit: function (element) {
            editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                lineNumbers: true,
                mode: 'javascript'

            });

            WidgetToggleGenerator.generate('#js-widget-options',
                { firstId: 'raw-btn', firstLabel: 'Switch to code', secondId: 'url-btn', secondLabel: 'Switch to url' }, '#raw-js-container', '#url-js-container');

            let $jsWidgetOptions = $('#js-widget-options');
            let $selectedValue = $('#option-selected-id');

            try {
                let model = JSON.parse(element);

                if (model.IsRaw) {
                    $jsWidgetOptions.val('Switch to code');
                    $selectedValue.val('url-btn');
                    $jsWidgetOptions.click();

                    if (editor) {
                        editor.setValue(model.RawCode);
                    }
                }
                else {
                    $jsWidgetOptions.val('Switch to url');
                    $selectedValue.val('raw-btn');
                    $jsWidgetOptions.click();

                    $('#javascript-url').val(model.Url);
                }
            }
            catch (ex) {
                $jsWidgetOptions.val('Switch to code');
                $selectedValue.val('url-btn');
                $jsWidgetOptions.click();

                if (editor) {
                    editor.setValue(element);
                }
            }

        },
        save: function () {
            let $resourceUrl = $('#javascript-url');

            if ($('#option-selected-id').val() === 'url-btn') {
                let model = {
                    IsRaw: false,
                    Url: $resourceUrl.val()
                };

                return JSON.stringify(model);
            }
            else {
                if (editor) {
                    let model = {
                        IsRaw: true,
                        RawCode: editor.getValue()
                    };

                    return JSON.stringify(model);
                }
            }
        }
    };
}
