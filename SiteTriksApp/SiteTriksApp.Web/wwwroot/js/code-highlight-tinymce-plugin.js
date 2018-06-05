tinymce.PluginManager.add('codeHighl', function(editor, url) {
    editor.addButton('codeHighl', {
        text: 'InsCode',
        icon: false,
        onclick: function() {
            editor.windowManager.open({
                title: 'Insert Source Code',
                width: 768,
                height: 500,
                body: [
                    {
                        type: 'listbox',
                        name: 'language',
                        values: [
                            { text: 'HTML5', value: 'HTML' },
                            { text: 'CSS', value: 'CSS' },
                            { text: 'JavaScript', value: 'JavaScript' },
                            { text: 'C#', value: 'C#' }
                        ]
                    },
                    {
                        type: 'textbox',
                        name: 'code',                        
                        minWigth: 800,
                        minHeight: 400,
                        multiline: true
                    }
                ],
                onsubmit: function (e) {
                    var heading = '<h5>' + e.data.language + ' Code: </h5>';
                    var content = heading + ' <pre class="prettyprint"><code>';
                    content += e.data.code;
                    content += '</code></pre>';
                    editor.insertContent(content);
                }
            });
        }
    });
});