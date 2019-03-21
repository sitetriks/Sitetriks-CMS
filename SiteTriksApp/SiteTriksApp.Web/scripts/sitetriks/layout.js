/* globals prettify */

function mobileMenu() {
    $('.with-dd').on('click', '.dropdown-toggle', function () {

        let $buttons = $('.caret-mobile');
        $buttons.each((_, caret) => caret.classList.remove('caret-mobile-down'));

        let $arrow = $(this).find('.caret-mobile');

        if ($(this).attr('aria-expanded') === 'false' || $(this).attr('aria-expanded') === undefined) {
            $arrow.addClass('caret-mobile-down');
        } else if ($(this).attr('aria-expanded') === 'true') {
            $arrow.removeClass('caret-mobile-down');
        }
    });
}

function hamburgerMenu() {
    var clicked = false;
    var hamburgerExpand = '/images/mobile-backend/shrink-mobile-menu.gif';
    var hamburgerCompress = '/images//mobile-backend/expand-mobile-menu.gif';

    $('.navbar-toggle').click(function (ev) {
        if ($(':animated').length) {
            return false;
        }

        if (!clicked) {
            $('.hamburger-image').attr('src', hamburgerCompress);
            clicked = true;
            $('.st-body-content').addClass('hidden-nested-divs');
            $('body').css('background-color', '#3876cf');

        } else {
            $('.hamburger-image').attr('src', hamburgerExpand);
            clicked = false;
            $('.st-body-content').removeClass('hidden-nested-divs');
            $('body').css('background-color', 'unset');
        }
    });
}

function loadMainLayout() {
    let $window = $(window);

    var lock = false;
    var animateWidth;
    let $btnAccount = $('.login-partial-loged .btn-account'); // login, register, logout 'buttons'

    $('.nav-logo-secondary a').on('click', function () {
        if ($btnAccount.css('color') === 'rgb(234, 234, 234)') {
            $btnAccount.css('color', 'transparent');
        }

        lock = true;
        $('.nav-logo-secondary a img').attr('src', '/images/spinner.gif');
        let width = '60px';
        let windowWidth = $window.width();
        if (windowWidth < 1000) {
            width = '50px';
        }

        if (windowWidth < 800) {
            width = '50px';
        }

        animateWidth = $('.navbar-right').css('width') === '0px' ? width : '0px';

        if ($('.navbar-right').is(':animated')) {
            return false;
        }

        $('.navbar-right').animate({ width: animateWidth }, 500, function () {
            $btnAccount.css('color', '#EAEAEA');
            $('.nav-logo-secondary a img').attr('src', '/images/Sitetriks_logo2.png');
            lock = false;

            $btnAccount.toggle();

        });
    });

    $('.nav-logo-secondary').on('mouseenter', function () {
        if (!lock) {
            $('.nav-logo-secondary a img').attr('src', '/images/spinner.gif');
        }
    });

    $('.nav-logo-secondary').on('mouseleave', function () {
        if (!lock) {
            $('.nav-logo-secondary a img').attr('src', '/images/Sitetriks_logo2.png');
        }
    });

    $window.on('scroll resize', resizeSecondNavigation);
    $window.trigger('scroll');

    function resizeSecondNavigation() {
        let scrollPosition = $window.scrollTop();
        let breakpoint = 30;

        $.each($('.fixed-top-2'), function () {
            let $element = $(this);

            if (scrollPosition > breakpoint) {
                $element.addClass('small');
            } else {
                $element.removeClass('small');
            }
        });

        let $sideNavigationTree = $('.side-nav-collapse');
        if (scrollPosition > breakpoint) {
            $sideNavigationTree.addClass('small');
        } else {
            $sideNavigationTree.removeClass('small');
        }
    }

    // Fixing the focus when using modal with TinyMC
    $(document).on('focusin', function (e) {
        if ($(e.target).closest('.mce-window').length) {
            e.stopImmediatePropagation();
        }
    });

    $('body').on('mouseenter', '.side-nav-collapse', function (ev) {
        $(this).find('.side-navigation-tree').scrollTop(0);
    });
}

function multiSitePopup() {
    var $container = $('.sitetriks-body');
    var $multisiteSelect = $container.find('.multisite-select-wrapper');

    function displayMultiSite() {
        $multisiteSelect.show();
    }

    function hideMultisite() {
        $multisiteSelect.hide();
    }

    $container.on('click', '.selected-site', displayMultiSite);
    $multisiteSelect.on('click', '.glyphicon-remove', hideMultisite);
}

$(document).ready(function () {
    if ($('.prettyprint').length > 0) {
        prettify();
    }

    multiSitePopup();
    loadMainLayout();

    //Mobile menu logic
    mobileMenu();

    /* Hamburger menu */
    hamburgerMenu();

    // permission 
    $('#allowed-roles').parent().hide();
    $('#allowed-groups').parent().hide();
});
