<<<<<<< HEAD:SiteTriksApp/SiteTriksApp.Web/scripts/carousel.js
﻿import 'slick-carousel';

export function initCarousel() {
=======
﻿export function initCarousel() {
>>>>>>> origin/master:SiteTriksApp/SiteTriksApp.Web/scripts/carousel.js
    $(document).on('initCarousel', {}, function () {
        let $carousels = $('.carousel');
        if ($carousels.length < 1) {
            return;
        }

        if ($('.slick-initialized').length) {
            $carousels.slick('unslick');
        }

        $carousels.each(function (_, element) {
            let $element = $(element);
            let slides_lg = +$element.attr('data-slides-lg') || 3;
            let slides_md = +$element.attr('data-slides-md') || 3;
            let slides_sm = +$element.attr('data-slides-sm') || 2;
            let slides_xs = +$element.attr('data-slides-xs') || 1;

            $element.slick({
                infinite: false,
                slidesToShow: slides_lg,
                slidesToScroll: slides_lg,
                arrows: false,
                dots: true,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: slides_md,
                        slidesToScroll: slides_md
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: slides_sm,
                        slidesToScroll: slides_sm
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: slides_xs,
                        slidesToScroll: slides_xs
                    }
                }]
            });
        });
    });

    $(document).on('removeCarousel', {}, function () {
        if ($('.slick-initialized').length) {
            $('.carousel').slick('unslick');
        }
    });
}
