
/* Hamburger menu */

var clicked = false;
var hamburgerCompress = '/SiteTriks/StaticFiles/images/mobile/Compress.gif';
var hamburgerExpand = '/SiteTriks/StaticFiles/images/mobile/Expand.gif';
var logoDark = '/SiteTriks/StaticFiles/images/mobile/LOGO_mob.svg';
var logoWhite = '/SiteTriks/StaticFiles/images/mobile/LOGO_mob_w.svg';


$('.navigation-widget-wrapper #hamburger-menu img').click(function (ev) {
    if ($(':animated').length) {
        return false;
    };
    if (clicked == false) {
        expandMobileMenu();
        clicked = true;
    } else if (clicked == true) {
        closeMobileMenu();
        clicked = false;
    }
});

function closeMobileMenu() {
    $('.navigation-widget-wrapper').removeClass('expanded');
    $('.hamburger-image').attr('src', hamburgerExpand);
    setTimeout(function () {
        $('.logo-mobile-image').attr('src', logoDark);
        $('.logo-container-mobile').css('background-color', 'white');
    }, 800);
    $('.hidden-by-menu').css('display', 'block');
};

function expandMobileMenu() {
    $('.navigation-widget-wrapper').addClass('expanded');
    $('.hamburger-image').attr('src', hamburgerCompress);
    setTimeout(function () {
        $('.logo-mobile-image').attr('src', logoWhite);
        $('.logo-container-mobile').css('background-color', '#123e7a');
    }, 800);
};
