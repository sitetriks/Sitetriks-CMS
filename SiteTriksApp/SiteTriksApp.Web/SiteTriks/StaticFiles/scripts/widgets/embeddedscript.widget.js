/* globals CodeMirror */

var editor;

export function embeddedscript () {
    return {
        add: function () {
            editor = CodeMirror.fromTextArea(document.getElementById('embedded-script'), {
                lineNumbers: true,
                mode: 'javascript'
            });
        },
        edit: function (element) {
            editor = CodeMirror.fromTextArea(document.getElementById('embedded-script'), {
                lineNumbers: true,
                mode: 'javascript'
            });
            let model = JSON.parse(element);

            if (editor) {
                editor.setValue(model.RawCode);
            }
        },
        save: function () {
            if (editor) {
                let model = {
                    RawCode: editor.getValue()
                };
                return JSON.stringify(model);
            }
            return '';
        }
    };
}
