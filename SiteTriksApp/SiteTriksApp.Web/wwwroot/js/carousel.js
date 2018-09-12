$(document).ready(function () {
    $(document).on('initCarousel', {}, function () {
        if ($('.carousel').length < 1) {
            return;
        }
        
        if ($('.slick-initialized').length) {
            $('.carousel').slick('unslick');
        }
        
        $('.carousel').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    });

    $(document).on('removeCarousel', {}, function () {
        if ($('.slick-initialized').length) {
            $('.carousel').slick('unslick');
        }
    });
});
