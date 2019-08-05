$(document).ready(function () {
    let windowWidth = $(window).width();
    let $image = $('.login-image');
    let imageFourk = 'https://sitetriksblob.blob.core.windows.net/static-files/images/homepage/Login_4K.jpg';
    let imageHD = 'https://sitetriksblob.blob.core.windows.net/static-files/images/homepage/Login_Wide.jpg';
    let imageMiddle = 'https://sitetriksblob.blob.core.windows.net/static-files/images/homepage/Login_image.jpg';

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