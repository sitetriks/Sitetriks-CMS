/* globals Data, Utils, Notifier, textEditor */

var SharedBlocks = function () {
    function addShare(editorSelector) {
        let $shareContainer = $('<div></div>', {
            class: 'share-container inline-block'
        });

        let $input = $('<input/>', {
            placeholder: 'Title of shared block',
            class: 'form-control inline-block',
            type: 'text'
        }).appendTo($shareContainer);

        let $button = $('<input/>', {
            value: 'Share',
            class: 'btn btn-backend',
            type: 'button'
        }).appendTo($shareContainer);

        $shareContainer.appendTo('.html-widget-config');

        $button.on('click', function () {
            let title = $input.val();
            if (!title || title.length < 3) {
                Notifier.createAlert({ containerId: '.html-widget-notifier', status: 'danger', message: 'Shared block title must be atleast 3 characters long!' });
                return;
            }

            let body = {
                title,
                content: textEditor.getContent(editorSelector)
            };

            Data.postJson({ url: '/sitetriks/HtmlBlocks/Share', data: body }).then(function (res) {
                console.log(res);
                if (res && res.success) {
                    Notifier.createAlert({ containerId: '.html-widget-notifier', status: 'success', message: 'Shared block created successfuly!' });
                }
            });
        });
    }

    function loadSharedBlocks($container, selected) {
        Data.getJson({ url: '/sitetriks/HtmlBlocks/GetAllSharedBlocks' }).then(function (res) {
            let items = JSON.parse(res);
            $('<label></label>', {
                text: 'Shared Block: '
            }).appendTo($container);

            let $select = $('<select></select>', {
                id: 'shared-block-titles',
                class: 'form-control inline-block'
            });

            for (let i = 0; i < items.length; i++) {
                $('<option></option>', {
                    class: 'shared-block-options',
                    value: items[i].Id,
                    text: items[i].Title
                }).appendTo($select);
            }

            $container.append($select);
            if (selected && Utils.isGuid(selected)) {
                $select.val(selected);
            }
        });
    }

    return {
        init: function (type, $container, element) {
            $('.share-container').remove();
            $container.html('');
            textEditor.remove('add-html-content');

            if (type === 'new') {
                $('<textarea></textarea>', {
                    id: 'add-html-content',
                    text: element && !Utils.isGuid(element) ? element : ''
                }).appendTo($container);

                textEditor.init('#add-html-content', 800, 300);
                addShare('add-html-content');
            } else if (type === 'shared') {

                loadSharedBlocks($container, element);
            }
        }
    };
}();