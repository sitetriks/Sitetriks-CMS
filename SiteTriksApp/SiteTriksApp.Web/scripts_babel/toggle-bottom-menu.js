'use strict';

function removeSideMenu(e) {

    var offSet = $('.bottom-menu').offset();
    var distance = offSet ? offSet.top : 0;
    var $scrollBottom = $(window).scrollTop() + $(window).height();
    var $toggleMenu = $('.toggle-menu');

    if (distance && $scrollBottom >= distance && $(window).width() > 767) {
        $toggleMenu.addClass('visuallyhidden');
        $toggleMenu.one('transitionend', function (e) {});
    }

    if (distance && $scrollBottom <= distance) {

        setTimeout(function () {
            $toggleMenu.removeClass('visuallyhidden');
        }, 30);
    }
}

var toggleSideMenu = function () {

    var animateWidth;
    var $selectedFeature = $(".toggle-menu .selected-feature");
    var $featuresSection = $('.toggle-menu .features-section');
    var $sideCol = $('.side-section.col.col-lg-1');
    var $middleSection = $('.middle-section.col-lg-10');
    var menuState = $(".toggle-menu").attr("data-open-state");
    var screenWidth = $(window).width();

    var setShrinkIcon = function setShrinkIcon() {
        $('body').on('resize ready', '.toggle-menu', function () {
            if ($(".toggle-menu").attr("data-open-state") === "expanded") {
                $(".shrink-menu").children('img').attr('src', '/Content/Images/menu-buttons/Decrease_window.png');
            }
        });
    };

    var setFeatureWidth = "240px";

    var expandMenu = function expandMenu(ev) {
        $(".shrink-menu").on("click", function () {
            animateWidth = $('.middle-section.col-lg-10').css('width') == "0px" ? "76%" : "0px";
            var featuresFullWidth = $('.toggle-menu .features-section').css('width') == setFeatureWidth ? "90%" : setFeatureWidth;
            var sideColsWidth = $('.side-section.col.col-lg-1').css('width') == "117px" ? "12%" : "117px";
            var selectedFeatureVisibility = $selectedFeature.css('display') == "block" ? "none" : "block";

            if ($(".toggle-menu").attr("data-open-state") === "closed") {
                return;
            }

            $(".leaf-button-2").toggle();
            $(".leaf-button-3").toggle();

            $('.close-menu').toggle();

            var anumationDuration = 500;
            var color = '#fff';

            $('.middle-section.col-lg-10').animate({ width: animateWidth }, anumationDuration, function () {
                $selectedFeature.toggle("slow");
            });

            $featuresSection.animate({ width: featuresFullWidth }, anumationDuration, function () {});

            $('.side-section').animate({ width: sideColsWidth }, 0, function () {});

            $selectedFeature.animate({ display: selectedFeatureVisibility }, anumationDuration, function () {
                if ($selectedFeature.css('display') === "none") {
                    var $menuIcon = $($(this).parents('.toggle-menu').find('.menu-icon')[4]);
                    loadSection.apply($menuIcon);
                    Blur.add({
                        color: color,
                        opacity: '0.5'
                    });

                    $(".toggle-menu").addClass("toggle-blur-content");
                } else {
                    $(".toggle-menu").removeClass("toggle-blur-content");
                    $("body").append($("#wrapper"));
                    Blur.remove();
                }
            });

            if ($(".toggle-menu").attr("data-open-state") === "opened") {
                $(".toggle-menu").attr("data-open-state", "expanded");
                $('.toggle-menu').css("width", "90%");
            } else {
                $(".toggle-menu").attr("data-open-state", "opened");

                $('.toggle-menu').css("transition", "width 2s");
                $('.toggle-menu').css("width", "auto");
            }
        });
    };

    var closeMenu = function closeMenu() {
        $('.close-menu').on('click', function () {
            if ($(".toggle-menu").attr("data-open-state") === "expanded") {
                return;
            }
            $(".arrows-1").toggle();
            $(".arrows-2").toggle();

            $(".leaf-button-2").toggle();
            $(".leaf-button-1").toggle();

            $featuresSection.css("width", setFeatureWidth);
            $sideCol.css("width", "117px");
            $middleSection.css("width", "0px");
            $selectedFeature.css("display", "none");

            var featureVisibility = $featuresSection.css('display') == "none" ? "inline-block" : "none";
            $featuresSection.toggle("slow");

            if ($(".toggle-menu").attr("data-open-state") === "closed") {
                $(".toggle-menu").attr("data-open-state", "opened");
                $('.toggle-menu').css("width", "auto");
            } else {
                $(".toggle-menu").attr("data-open-state", "closed");
                $('.toggle-menu').css("width", "auto");
            }
        });
    };

    return {
        setShrinkIcon: setShrinkIcon,
        expandMenu: expandMenu,
        closeMenu: closeMenu
    };
}();

function loadSection(ev) {
    var $trigger = $(this);

    $('.menu-icon').each(function () {
        if ($(this).hasClass('clicked')) {
            $(this).children('.icon-image').toggle();
            $(this).css('background-color', '#123e7a');
            $(this).removeClass('clicked');
        }
    });

    $trigger.addClass('clicked');
    $trigger.css('background-color', '#3876cf');
    $trigger.children('.icon-image').toggle();

    var url = $trigger.attr('data-url') || '';
    var $section = $trigger.parents('.features-section').find('.feature-content');
    var $bottomSection = $('.toggle-bottom-menu.container');
    var $toggleMenu = $trigger.parents('.toggle-menu');

    $section.html('');
    $bottomSection.html('');
    Data.getJson({ url: '/sitetriks/display/GetPageString?pageUrl=' + url }).then(function (res) {
        if (res.success) {
            if ($(".toggle-menu").attr("data-open-state") === "opened") {
                $bottomSection.html(res.view);
                scrollToElement($bottomSection);
                $('.close-menu').click();
            } else if ($(".toggle-menu").attr("data-open-state") === "expanded") {
                $section.html(res.view);
            } else if ($(window).width() <= 767) {
                $section.html(res.view);
            }

            DocumentationWidget();

            if ($section.find('.multiple-playlists')) {
                var $container = $('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail');
                var source = void 0;
                $container.each(function (_, element) {
                    source = $(this).data("videoid");
                    var url = getYoutubeData(source).then(function (res) {
                        var finalUrl = res.items[0].snippet.thumbnails.high.url;
                        var title = res.items[0].snippet.title;
                        $(element).children('img').attr('src', finalUrl);
                        $(element).children('.playlist-title').text(title);
                    }, Data.defaultError);
                });
            } else {
                console.warn("Error in toggle menu");
            }
        }
    });
}

$(document).ready(function (ev) {
    $('.features-section').on('click', '.menu-icon', loadSection);
});

$(document).ready(function () {
    $('.letter-2').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
        $('.leaf-button-text').css('display', 'none');
        $('.leaf-button-1').css('display', 'inline-block');
        $('.close-menu').css('display', 'inline-block');
    });
});

function getYoutubeData(playlistId) {
    return Data.getJson({ url: "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=" + playlistId + "&key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8" });
}

function scrollToElement(targetElement) {
    $('html, body').animate({
        scrollTop: $(targetElement).offset().top
    }, 200);
}

$(window).scroll(removeSideMenu);

$(document).ready(function () {
    toggleSideMenu.setShrinkIcon();
    toggleSideMenu.expandMenu();
    toggleSideMenu.closeMenu();
});