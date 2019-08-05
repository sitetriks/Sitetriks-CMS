/* Loader.js version 1.1 */
var Loader = (function () {
    var gifSrc = '/SiteTriks/StaticFiles/images/loading.gif';

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

// Helper class for loader and gallery
var Blur = (function () {
    const PREVIEW_CONTAINER_CLASS = 'preview-container';
    const PREVIEW_ITEM_CONTAINER_CLASS = 'preview-item-container';
    const BLUR_ELEMENT_CLASS = 'blur';

    function addBlur({ hideOnClick, color, opacity, hideOnBlurClick }) {
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

        if (hideOnClick === true) {
            $previewContainer.on('click', removeBlur);
            $blurElement.on('click', removeBlur);
        }

        if (hideOnBlurClick === true) {
            $previewContainer.on('click', removeBlurOnNonContentTarget);
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

    function removeBlurOnNonContentTarget(ev) {
        let $target = $(this || ev.target);
        if ($target.hasClass('blur-content') || $target.parents('.blur-content').length > 0) {
            return;
        }

        removeBlur();
    }

    return {
        add: addBlur,
        remove: removeBlur
    };
})();

export { Blur };
