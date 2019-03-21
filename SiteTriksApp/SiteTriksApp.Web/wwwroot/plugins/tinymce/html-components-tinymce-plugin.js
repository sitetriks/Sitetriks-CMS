/* globals tinymce */

tinymce.PluginManager.add('htmlBlocks', function (editor, url) {    
    function createButtons(data) {
        console.log("tinymce");
        var buttons = [];
        for (var i = 0; i < data.length; i++) {
            var obj = {
                type: 'button',
                classes: 'html-blocks-button',
                style: 'width: auto!important; float: left; top: 0px!important;',
                data: data[i]["id"],
                text: checkTitle(data[i]["title"]),
                onclick: function (e) {
                    var url = '/sitetriks/htmlblocks/getcontent/' + this.data.data;
                    $.getJSON(url)
                        .then(function (data) {
                            return data;
                        })
                        .then(function (data) {
                            editor.insertContent(data);
                            editor.windowManager.close();
                        })
                }
            };
            buttons.push(obj);
        }

        return buttons;
    }

    function checkTitle(title) {
        if (title == null) {
            return "No Title";
        }
        return title;
    }

    editor.addMenuItem('htmlBlocks', {
        text: 'Html Blocks',
        context: 'insert',
        onclick: function () {
            $.getJSON('/sitetriks/htmlblocks/getalltitles')
                .then(function (data) {
                    return data;
                })
                .then(function (data) {
                    var bodyArray = createButtons(data);            

                    editor.windowManager.open({
                        title: 'Html Blocks Plugin',
                        width: 800,
                        height: 600,
                        id: 'html-blocks-window',
                        body: bodyArray,
                        buttons: [{
                            text: 'Close',
                            onclick: 'close'
                        }]
                    });
                });               
        }
    });
});