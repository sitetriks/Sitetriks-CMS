'use strict';

// version 2.0.1
$(document).ready(function () {
    $('body').on('click', 'img.display-image, img.gallery-image', function (ev) {
        var $target = $(ev.target);
        var src = void 0;

        src = $target.attr('src');

        var $container = Blur.add({ hideOnClick: true });
        $('<img />', {
            class: 'blur-content preview-image',
            src: src
        }).appendTo($container);
    });
});

// temporaly removed fading, due async problems
var Blur = function () {
    var PREVIEW_CONTAINER_CLASS = 'preview-container';
    var PREVIEW_ITEM_CONTAINER_CLASS = 'preview-item-container';
    var BLUR_ELEMENT_ID = 'blurElement';

    function addBlur(_ref) {
        var hideOnClick = _ref.hideOnClick,
            color = _ref.color,
            opacity = _ref.opacity;

        if (hideOnClick !== true) {
            hideOnClick = false;
        }

        $('html').addClass('no-overflow');

        var $blurElement = $('<div></div>', {
            class: 'blur',
            id: BLUR_ELEMENT_ID
        });
        //.css('display', 'none');

        var $itemContainer = $('<div></div>', {
            class: PREVIEW_ITEM_CONTAINER_CLASS
        });

        // Inception
        var $previewContainer = $('<div></div>', {
            class: PREVIEW_CONTAINER_CLASS
        });

        if (hideOnClick) {
            $previewContainer.on('click', removeBlur);
            $blurElement.on('click', removeBlur);
        }

        if (color) {
            $blurElement.css('background-color', color);
        }

        if (opacity && isNumeric(opacity) && opacity >= 0 && opacity <= 1) {
            $blurElement.css('opacity', opacity);
        }

        $previewContainer.append($itemContainer);
        $('body').append($previewContainer);
        $('body').append($blurElement);

        //$blurElement.toggle('fade', 300);

        return $itemContainer;
    }

    function removeBlur() {
        //let $blurElement = $('body').find('#' + BLUR_ELEMENT_ID);
        //$blurElement.toggle("fade", 300, function () {
        //    $blurElement.remove();
        //    $('body').find('.' + PREVIEW_CONTAINER_CLASS).remove();
        //    $('html').removeClass('no-overflow');
        //});
        $('body').find('#' + BLUR_ELEMENT_ID).remove();
        $('body').find('.' + PREVIEW_CONTAINER_CLASS).remove();
        $('html').removeClass('no-overflow');
    }

    return {
        add: addBlur,
        remove: removeBlur
    };
}();