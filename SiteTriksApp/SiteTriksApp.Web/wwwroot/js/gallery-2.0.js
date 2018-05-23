// version 2.0.1
$(document).ready(function () {
    $('body').on('click', 'img.display-image, img.gallery-image', function (ev) {
        let $target = $(ev.target);
        let src;

        src = $target.attr('src');

        let $container = Blur.add({ hideOnClick: true });
        $('<img />', {
            class: 'blur-content preview-image',
            src: src,
        }).appendTo($container);
    });
});

// temporaly removed fading, due async problems
var Blur = function () {
    const PREVIEW_CONTAINER_CLASS = 'preview-container';
    const PREVIEW_ITEM_CONTAINER_CLASS = 'preview-item-container';
    const BLUR_ELEMENT_ID = 'blurElement';

    function addBlur({ hideOnClick, color, opacity }) {
        if (hideOnClick !== true) {
            hideOnClick = false;
        }

        $('html').addClass('no-overflow');

        let $blurElement = $('<div></div>', {
            class: 'blur',
            id: BLUR_ELEMENT_ID,
        })
            //.css('display', 'none');

        let $itemContainer = $('<div></div>', {
            class: PREVIEW_ITEM_CONTAINER_CLASS
        });

        // Inception
        let $previewContainer = $('<div></div>', {
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
    }
}();
