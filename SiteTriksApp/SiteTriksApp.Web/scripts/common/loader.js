/* Loader.js version 1.1 */
var Loader = (function () {
    var gifSrc = '/images/loading.gif';

    return {
        //showWithProgress: function (progressBarData, color) {
        //    if (color === true) {
        //        color = '#fff';
        //    }

        //    let $parent = Blur.add({ color });

        //    let bar = ProgressBar.build({ data: progressBarData, $parent: $parent, cssClass: 'blur-content' })[0];
        //    let data = $(bar).data(progressBarData.name)
        //        .onStart();
        //},
        show: function (color, imgSrc) {
            if (color === true) {
                color = '#fff';
            }

            if (!imgSrc) {
                imgSrc = gifSrc;
            }

            Blur.add({ color })
                .append($('<img/>', {
                    src: imgSrc,
                    class: 'blur-content'
                }));
        },
        hide: function () {
            Blur.remove();
        }
    };
})();

export { Loader };

// Gallery registration
(function () {
    $('body').on('click', 'img.display-image, img.gallery-image', function (ev) {
        let $target = $(ev.target);
        let src = $target.attr('src');

        let $container = Blur.add({ hideOnClick: true });
        $('<img />', {
            class: 'blur-content preview-image',
            src: src
        }).appendTo($container);
    });
})();

// Helper class for loader and gallery
var Blur = (function () {
    const PREVIEW_CONTAINER_CLASS = 'preview-container';
    const PREVIEW_ITEM_CONTAINER_CLASS = 'preview-item-container';
    const BLUR_ELEMENT_CLASS = 'blur';

    function addBlur({ hideOnClick, color, opacity }) {
        if (hideOnClick !== true) {
            hideOnClick = false;
        }

        $('html').addClass('st-no-overflow');

        let $blurElement = $('<div></div>', {
            class: BLUR_ELEMENT_CLASS
        });

        let $itemContainer = $('<div></div>', {
            class: PREVIEW_ITEM_CONTAINER_CLASS
        });

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

        if (opacity && isNaN(+opacity) && opacity >= 0 && opacity <= 1) {
            $blurElement.css('opacity', opacity);
        }

        $previewContainer.append($itemContainer);
        $('body').append($previewContainer);
        $('body').append($blurElement);

        return $itemContainer;
    }

    function removeBlur() {
        $('body').find('.' + BLUR_ELEMENT_CLASS).remove();
        $('body').find('.' + PREVIEW_CONTAINER_CLASS).remove();
        $('html').removeClass('st-no-overflow');
    }

    return {
        add: addBlur,
        remove: removeBlur
    };
})();

export { Blur };
