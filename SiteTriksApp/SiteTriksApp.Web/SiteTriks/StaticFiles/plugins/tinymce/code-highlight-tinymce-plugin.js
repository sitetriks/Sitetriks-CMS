/* globals tinymce */

//tinymce.PluginManager.add('codeHighl',  function (editor, url) {
//    editor.ui.registry.addButton('codeHighl', {
//        text: 'InsCode',
//        icon: false,
//        onclick: function() {
//            editor.windowManager.open({
//                title: 'Insert Source Code',
//                size: 'normal',
//                body: [
//                    {
//                        type: 'listbox',
//                        name: 'language',
//                        values: [
//                            { text: 'HTML5', value: 'HTML' },
//                            { text: 'CSS', value: 'CSS' },
//                            { text: 'JavaScript', value: 'JavaScript' },
//                            { text: 'C#', value: 'C#' }
//                        ]
//                    },
//                    {
//                        type: 'textbox',
//                        name: 'code',                        
//                        size:'normal',
//                        multiline: true
//                    }
//                ],
//                onsubmit: function (e) {
                   
//                    var data = e.getData();
//                    var heading = '<h5>' + data.language + ' Code: </h5>';
//                    var content = heading + ' <pre class="prettyprint"><code>';
//                    content += data.code;
//                    content += '</code></pre>';
//                    editor.insertContent(content);
//                    e.close();
//                }
//            });
//        }
//    });
//});