'use strict';

$(document).ready(function () {
    var windowWidth = $(window).width();
    var $image = $('.login-image');
    var imageFourk = '/images/homepage/Login_img_4k.jpg';
    var imageHD = '/images/homepage/Login_img_HD.jpg';
    var imageMiddle = '/images/homepage/Login_image.jpg';

    console.log(windowWidth);

    function selectLoginImage() {
        if (windowWidth >= 2800) {
            $image.attr('src', imageFourk);
        } else if (windowWidth < 2800 && windowWidth > 1200) {
            $image.attr('src', imageHD);
        } else if (windowWidth <= 1200 && windowWidth > 767) {
            $image.attr('src', imageMiddle);
        } else if (windowWidth <= 767) {
            $image('src', '');
        }
    }

    $(window).ready(selectLoginImage);
    $(window).resize(selectLoginImage);
});