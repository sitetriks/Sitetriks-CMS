﻿import { textEditor } from '../text-editor.js';
import { SharedBlocks } from '../shared-blocks.js';

export function html() {
    function init(element) {
        let $container = $('#html-widget-holder');
        let $list = $('#html-options-list');

        SharedBlocks.init('new', $container, element);
        $list.on('change', function (ev) {
            SharedBlocks.init(ev.target.value, $container, element);
        });
    }

    return {
        add: init,
        edit: init,
        save: function () {
            let state = $('#html-options-list').val();

            if (state === 'shared') {
                return $('#shared-block-titles').val();
            }
            else {
                return textEditor.getContent('add-html-content');
            }
        }
    };
}
