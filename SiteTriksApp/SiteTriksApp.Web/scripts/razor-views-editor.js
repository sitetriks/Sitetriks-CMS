/* globals ace */

var RazorViewsEditor = (function () {
    function init(source, formSelector, hiddenFieldSelector) {
        ace.require('ace/ext/language_tools');
        var editor = ace.edit('editor');
        editor.session.setMode('ace/mode/razor');

        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false
        });
        editor.session.setNewLineMode('windows');
        editor.setValue(source, 1);

        $(document).ready(function () {
            $(formSelector).on('submit', function () {
                var code = editor.getValue();

                $(hiddenFieldSelector).val(code);
            });
        });
    }

    return {
        init: init
    };
})();

export { RazorViewsEditor };
