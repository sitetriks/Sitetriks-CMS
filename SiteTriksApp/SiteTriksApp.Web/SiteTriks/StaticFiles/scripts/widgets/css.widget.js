/* globals CodeMirror */

import { WidgetToggleGenerator } from '../widget-toggle-generator.js';

export function css() {
    var editor;
    return {
        add: function () {
            WidgetToggleGenerator.generate('#css-widget-options',
                { firstId: 'raw-btn', firstLabel: 'Switch to code', secondId: 'url-btn', secondLabel: 'Switch to url' }, '#raw-css-container', '#url-css-container');

            editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                lineNumbers: true,
                mode: 'css'
            });
        },
        edit: function (element) {
            editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                lineNumbers: true,
                mode: 'css'
            });

            WidgetToggleGenerator.generate('#css-widget-options',
                { firstId: 'raw-btn', firstLabel: 'Switch to code', secondId: 'url-btn', secondLabel: 'Switch to url' }, '#raw-css-container', '#url-css-container');

            let $cssWidgetOptions = $('#css-widget-options');
            let $selectedValue = $('#option-selected-id');

            try {
                let model = JSON.parse(element);

                if (model.IsRaw) {
                    $cssWidgetOptions.val('Switch to code');
                    $selectedValue.val('url-btn');
                    $cssWidgetOptions.click();

                    if (editor) {
                        editor.setValue(model.RawCode);
                    }
                }
                else {
                    $cssWidgetOptions.val('Switch to url');
                    $selectedValue.val('raw-btn');
                    $cssWidgetOptions.click();

                    $('#css-url').val(model.Url);
                }
            }
            catch (ex) {
                $cssWidgetOptions.val('Switch to code');
                $selectedValue.val('url-btn');
                $cssWidgetOptions.click();

                if (editor) {
                    editor.setValue(element);
                }
            }
        },
        save: function () {
            let $resourceUrl = $('#css-url');
            let elementContent = editor.getValue();
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
                        RawCode: elementContent,
                        PreviewRawCode: previewElementSet()
                    };

                    console.log(previewElementSet());

                    return JSON.stringify(model);
                }
            }

            function previewElementSet() {
                let rules = elementContent.split('}');

                let result =  rules.map(function (el, ind) {            
                    return ('#stwPreviewContent ' + el + '}')
                })

                let fullString = ((result.toString()).split(',').join(''));
                return fullString.replace('#stwPreviewContent }', '');
            }

            return '';
        }


    };
}
