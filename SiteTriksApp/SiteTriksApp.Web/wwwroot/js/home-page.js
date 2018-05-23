//Hide blue navbar on scroll

//activate the scroll event

$(window).scroll(function () {
    // removeSideMenu();
    var scrollBottom = $(window).scrollTop() + $(window).height();
    // console.log(scrollBottom);
    // console.log($(window).height());

    if ($(this).scrollTop() >= 100) {
        $(".header-blue").css("height", "0px")
            .css("transition", "height 1s")
            .css(".-webkit-transition", "height 1s");
    }

    if ($(this).scrollTop() <= 80) {
        $(".header-blue").css("height", "40px")
            .css("transition", "height .25s");
    }
});


////////////////////////////////////////////////////////////

// Draw the snowflake menu

var LineIndex = 0;

function addLine(selector, lines, customClass) {
    var parent = $(selector);

    var lines = GetLine(3, lines, "diamondLine");


    for (var i = 0; i < lines.length; i++) {
        // lines[i].addClass('diamondLine');
        lines[i].addClass(customClass);
        parent.append(lines[i]);
    }

    $(".diamondLine").hover(function () {

        for (var i = 0; i < lines.length; i++) {
            lines[i].addClass('hover');
        }
    }, function () {
        for (var i = 0; i < lines.length; i++) {
            lines[i].removeClass('hover');
        };
    });

    for (var i = 0; i < lines.length; i++) {
        parent.append(lines[i]);
    }
}

var circleIndex = 0;

//function addCircle(size, angle, ratioOfRadius, selector, lines) {

//    var parent = $(selector);
//    var maxRadius = parent.width() / 2;
//    var angleInRad = DegreesToRad(angle);

//    var radius = maxRadius * ratioOfRadius;
//    var top = maxRadius - Math.sin(angleInRad) * radius - size / 2;
//    var left = maxRadius + Math.cos(angleInRad) * radius - size / 2;

//    var element = $("<div>")
//        .addClass("small-circle")
//        //.addClass(additionalClass)
//        // .css("width", size * 3)
//        .css("top", top)
//        .css("left", left);

//    element.attr("data-order", circleIndex);

//    // console.log(circleIndex);

//    circleIndex++;

//    //[{ x: 200, y: 200 }, { x: 100, y: 150 }, { x: left, y: top }]
//    var lines = GetLine(3, lines, "line");


//    for (var i = 0; i < lines.length; i++) {
//        parent.append(lines[i])
//    }

//    $(element).hover(function () {

//        for (var i = 0; i < lines.length; i++) {
//            lines[i].addClass('hover');
//        }
//    }, function () {
//        for (var i = 0; i < lines.length; i++) {
//            lines[i].removeClass('hover');
//        };
//    });

//    parent.append(element);

//    for (var i = 0; i < lines.length; i++) {
//        parent.append(lines[i]);
//    }
//}

var index = 0;


function addElement(height, width, angle, ratioOfRadius, selector, text, lines, parentDevider, maxRadius, customClass) {

    var parent = $(selector);
    var angleInRad = DegreesToRad(angle);

    var customClass = customClass || "default-icon-class";

    var radius = maxRadius * ratioOfRadius;
    var top = maxRadius - Math.sin(angleInRad) * radius - height / 2;
    var left = maxRadius + Math.cos(angleInRad) * radius - height / 2;

    // var additionalClass = ["0", "30", "60", "80", "90", "120", "150", "180","210", "240", "270", "300", "330", "350"]

    var element = $("<div>").addClass("element")
        .addClass(customClass)
        .css("width", width).css("height", height).css("top", top).css("left", left).html(text);

    element.attr("data-index", index);

    // console.log(index);

    index++;

    //[{ x: 200, y: 200 }, { x: 100, y: 150 }, { x: left, y: top }]
    var lines = GetLine(3, lines, "line");

    for (var i = 0; i < lines.length; i++) {
        parent.append(lines[i]);
    }

    $(element).hover(function () {

        for (var i = 0; i < lines.length; i++) {
            $('.logo-center').css('z-index', '1046');
             lines[i].addClass('hover');

        }
    }, function () {
        for (var i = 0; i < lines.length; i++) {
            lines[i].removeClass('hover');
        };
    });

    parent.append(element);

    for (var i = 0; i < lines.length; i++) {
        parent.append(lines[i]);
    }
}



function DegreesToRad(angle) {
    return (angle / 180) * Math.PI;
}

function RadToDegree(rad) {
    return (rad / Math.PI) * 180;
}

function GetLine(width, points, customClass) {
    let segments = [];

    for (var i = 0; i < points.length; i += 1) {
        let startPoint = points[i];
        let endPoint = points[i + 1];
        //  console.log(startPoint);
        //  console.log(endPoint);

        let lenght = Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow((endPoint.y - startPoint.y),
            2));
        let angle = RadToDegree(Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x)) - 90;

        let shadow = "";

        if ((angle == 45 || (angle > -47 && angle < -43) || angle == 315) && customClass === "line") {
            shadow = "0 3px 5px #c8d0d4";
        }
        else if ((angle >= -230 && angle < -200) && customClass === "line") { // rule for 10: 30 and 11 oclock
            shadow = "1px 0 5px #c8d0d4";
        }
        else if ((angle == 90 || (angle >= 40 && angle < 50) || angle == 0) && customClass === "line") {
            shadow = "3px 0 5px #c8d0d4";
        }
        else if ((angle > 90 && angle < 270) && customClass === "line") {
            shadow = "3px 0 5px #c8d0d4";
        } else if ((angle <= 90 || angle >= 270) && customClass === "line") {
            shadow = "-3px 0 5px #c8d0d4";
            // console.log(angle);
        }
        //  console.log("l:" + lenght);
        //   console.log("a:" + angle);

        var line = $("<div>")
            .addClass(customClass)
            // .addClass("line" + LineIndex)            
            .css("height", lenght)
            .css("width", width)
            .css("top", startPoint.y)
            .css("left", startPoint.x)
            .css("transform", "rotate(" + angle + "deg)")
            .css("transform-origin", "50% 0%")
            .css("box-shadow", shadow);

        segments.push(line)

        LineIndex++;

        if (i + 1 == points.length - 1) {
            break;
        }
    }

    return segments;
}


function radialToXY(r, angle, centerX, centerY) {

    var angleInRad = DegreesToRad(angle);

    var top = centerY - Math.sin(angleInRad) * r;
    var left = centerX + Math.cos(angleInRad) * r;

    return {
        x: left,
        y: top
    }
}


var drawSnowflake = function (halfwidth, elementSizeBase, parentDevider) {

    // halfwidth = halfwidth;
    index = 0;

    var twelveOclock = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.50 * halfwidth, 90, halfwidth, halfwidth)
    ];
    //0.01
    // 0.2

    var oneThirty = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, 45, halfwidth, halfwidth)
    ];

    var threeOclock = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.55 * halfwidth, 0, halfwidth, halfwidth)

    ];

    var fourThirty = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, -45, halfwidth, halfwidth)
    ];

    var sixOclock = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.75 * halfwidth, -90, halfwidth, halfwidth)
    ];

    var sevenThirty = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, -135, halfwidth, halfwidth)
    ];

    var nineOclock = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.55 * halfwidth, 180, halfwidth, halfwidth)
    ];
    // 0.88
    // 0.98

    var tenThirty = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, 135, halfwidth, halfwidth)
    ];

    // smaller lines

    var two = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.3 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, 20, halfwidth, halfwidth)
    ];


    var four = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.3 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, -20, halfwidth, halfwidth),
    ];

    var ten = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.3 * halfwidth, 180, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, 160, halfwidth, halfwidth)
    ];

    var eight = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.3 * halfwidth, 180, halfwidth, halfwidth),
        radialToXY(0.5 * halfwidth, 200, halfwidth, halfwidth),
    ];

    var eleven = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.25 * halfwidth, 90, halfwidth, halfwidth),
        radialToXY(0.47 * halfwidth, 113, halfwidth, halfwidth)
    ];


    var one = [
        radialToXY(0 * halfwidth, 0, halfwidth, halfwidth),
        radialToXY(0.25 * halfwidth, 90, halfwidth, halfwidth),
        radialToXY(0.47 * halfwidth, 66, halfwidth, halfwidth)
    ];


    addElement(0.7 * elementSizeBase, 0.8 * elementSizeBase * 3, 109, 0.65, ".dandelion-menu", "environment sync", twelveOclock, parentDevider, halfwidth, "environment_sync"); //12
    addElement(0.9 * elementSizeBase, 0.9 * elementSizeBase * 3, 50, 0.65, ".dandelion-menu", "import tool (Sitefinity content)", one, parentDevider, halfwidth, "import_tool"); // 1
    addElement(0.8 * elementSizeBase, 0.8 * elementSizeBase * 3, 27, 0.75, ".dandelion-menu", "version control (revision history)", oneThirty, parentDevider, halfwidth, "version_control"); // 1.5
    addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, 8, 0.9, ".dandelion-menu", "auto sitemap", two, parentDevider, halfwidth, "auto_sitemap"); // 2
    addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -3, 0.85, ".dandelion-menu", "multilingual", threeOclock, parentDevider, halfwidth, "multilingual"); // 3
    addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -18, 0.8, ".dandelion-menu", "forums", four, parentDevider, halfwidth, "forums"); // 4
    addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -40, 0.7, ".dandelion-menu", "modular", fourThirty, parentDevider, halfwidth, "modular"); // 4.5
    addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -150, 0.9, ".dandelion-menu", "blogs", sevenThirty, parentDevider, halfwidth, "blogs"); // 7.5
    addElement(0.6 * elementSizeBase, 0.6 * elementSizeBase * 3, -167, 1.1, ".dandelion-menu", "tagging", eight, parentDevider, halfwidth, "tagging"); // 8
    addElement(0.6 * elementSizeBase, 0.7 * elementSizeBase * 3, -178, 1.25, ".dandelion-menu", "dynamic content", nineOclock, parentDevider, halfwidth, "dynamic_content"); // 9
    addElement(0.7 * elementSizeBase, 0.9 * elementSizeBase * 3, -185, 1.3, ".dandelion-menu", "multisite management", ten, parentDevider, halfwidth, "multisite_management"); // 10
    addElement(0.7 * elementSizeBase, 0.7 * elementSizeBase * 3, 163, 1.2, ".dandelion-menu", "(DDOS) attack protection", tenThirty, parentDevider, halfwidth, "attack_protection"); // 10.5
    addElement(0.9 * elementSizeBase, 0.9 * elementSizeBase * 3, 150, 1, ".dandelion-menu", "search " + '</br>' + "(Google integration)", eleven, parentDevider, halfwidth, "google_integration"); // 11

    addLine(".dandelion-menu", sixOclock, "sixOclock"); // 6
    addElement(80, 80, 180, 0, ".dandelion-menu", '<div class="logo-center"><img src="../../images/Sitetriks_logo.svg" alt="logo" style="width: 80px; height: 80px; padding-left:2px; margin-top:2px;"></div>', [], parentDevider, halfwidth); // 11

}


/* Mobile View functionality */

/* Diamond figure resize */
var wrapperHalfWidth;

var state = -1;

// state = 0 - > 1280
// state = 1 - 1280 - 900
// state =2  - < 900

var reDrawSnowflake = function () {
    let windowWidth = $(window).width();

    let containerHalfWidth;

    if ((windowWidth > 1280) && !(state == 0)) {
        $('.dandelion-menu').html('');
        $('.dandelion-menu').css('height', '700px')
            .css('width', '802px');
        drawSnowflake(400, 100, 2);
        state = 0;
    } else if ((windowWidth <= 1280 && windowWidth > 993) && !(state == 1)) {
        $('.dandelion-menu').html('');

        //$('.diamond-figure').css('margin', '-3% auto');
        $('.dandelion-menu').css('height', '525px')
            .css('width', '602px');
        drawSnowflake(300, 70, 2.5);
        state = 1;

        // containerHalfWidth = $('.diamond-figure').width() / 2;
    } else if ((windowWidth <= 992) && !(state == 2)) {
        $('.dandelion-menu').html('');
        //$('.diamond-figure').css('margin', '-3% auto');
        $('.dandelion-menu').css('height', '437px')
            .css('width', '502px');
        drawSnowflake(250, 70, 5);
        state = 2;
    };
}

$(window).ready(reDrawSnowflake);
$(window).resize(reDrawSnowflake);


/* Hamburger menu */

var clicked = false;
var hamburgerCompress = '/images/mobile/Compress.gif';
var hamburgerExpand = '/images/mobile/Expand.gif';

$('#hamburger-menu img').click(function (ev) {
    if ($(':animated').length) {
        return false;
    };
    if (clicked == false) {
        $('#mobile-view-top-menu').slideDown("slow");
        $('.hamburger-image').attr('src', hamburgerCompress);
        setTimeout(function () {
            $('.logo-mobile-image').toggle();
            $('.logo-container-mobile').css('background-color', '#123e7a');
        }, 800);
        clicked = true;
        $('.hidden-by-menu').toggle();

    } else if (clicked == true) {
        $('#mobile-view-top-menu').slideUp("slow");
        $('.hamburger-image').attr('src', hamburgerExpand);
        setTimeout(function () {
            $('.logo-mobile-image').toggle();
            $('.logo-container-mobile').css('background-color', 'white');
        }, 800);
        clicked = false;
        $('.hidden-by-menu').toggle();
    }
});

/* Hamburger menu functionality as bottom menu */

/*Load proper content on click*/

$('#mobile-view-top-menu').on('click', '.menu-icon', function (event) {
    var $button = $(event.target);

    if (!$button.hasClass('menu-icon')) {
        $button = $button.parents('.menu-icon');
    }

    $('#static-section').remove();
    if ($button.hasClass('active')) {
        $button.removeClass('active');

    } else if (!$button.hasClass('active')) {
        $('.menu-icon').removeClass('active');
        $button.addClass('active');
        $button.parent().parent().next().html(selectedSection);
    }

});


/*Change the middle box sign */

var changeSlogan = function () {
    let windowWidth = $(window).width();

    if (windowWidth < 768) {
        $('.entreprice-description').text('(Free basic license available)');
        $('#middle-box .arrows').css('display', 'inline-block');
    } else if (windowWidth >= 768) {
        $('.entreprice-description').text('Available with SiteTriks\'s free basic license.');
        $('#middle-box .arrows').css('display', 'none');
    }
};

$(window).ready(changeSlogan);
$(window).resize(changeSlogan);

/* Main menu */

let $detailedMenuItem = $('.wrapper-menu-items');
let $mainDropdown = $('#middle-box');

$mainDropdown.click(function () {
    $detailedMenuItem.toggle();
    $('.main-arrows').toggle();
});

/* Separate Menu items */

$('.wrapper-menu-items').on('click', ($('.item-header')), function (event) {
    var button = $(event.target);
    //$('.item-arrow').toggle();
    if (!button.hasClass('item-header')) {
        button = button.parents('.item-header');
    }

    button.toggleClass('whiteText');
    button.next().toggle();
    button.children('img').toggle();
});

/* Technology and advantages */
let $advanatagesDropdown = $('.advantages-block');

let $technologyDropdown = $('.technology-block');

$advanatagesDropdown.click(function () {
    $('.bullets').toggle();
    $('.dropdownOne-advantage').toggle();
})

$technologyDropdown.click(function () {
    $('.technology-links').toggle();
    $('.dropdownOne-tech').toggle();
})

/* Bottom menu display and functionality*/
let menusChanged = false;

let changeMenu = function () {
    let windowWidth = $(window).width();
    let mobileView = $('#mobile-view-menu');
    let desktopView = $('#desktop-view-menu');

    if (windowWidth < 768) {
        Blur.remove();
        $('#desktop-view-menu').css('display', 'none');
        $('#mobile-view-menu').css('display', 'block');

    } else if (windowWidth >= 768) {
        // check state of toggle menu and close if expanded
        if ($(".toggle-menu").attr("data-open-state") === "expanded" && windowWidth <= 768) {
            $('.shrink-menu').click();
        }

        $('#desktop-view-menu').css('display', 'block');
        $('#mobile-view-menu').css('display', 'none');

    }
}

$(window).ready(changeMenu);
$(window).resize(changeMenu);

/*Load proper content on click*/

$('#mobile-view-menu').on('click', '.menu-icon', function (event) {
    var $button = $(event.target);

    if (!$button.hasClass('menu-icon')) {
        $button = $button.parents('.menu-icon');
    }

    $('#static-section').remove();
    // check if it was already clicked
    if ($button.hasClass('active')) {
        // console.log($button);
        $button.removeClass('active');

    } else if (!$button.hasClass('active')) {
        // $('.menu-icon').addClass('active');
        $('.menu-icon').removeClass('active');
        $button.addClass('active');
        $button.parent().parent().next().html(selectedSection);
    }

    // console.log(button);
    console.log($button.attr('data-order'));

});

var selectedSection = "<div class=\"col col-xs-12\"><div class=\"selected-feature\" id=\"static-section\"><div class=\"feature-content\"></div></div></div>";


/*To Move - Logic for Contact Us page*/

function initSomeForm() {
    $('body').on('click', '.phone-contact', function () {
        $('.expanded-contacts.phone').css('display', 'block');
        $('.contact-us-widget.main-container').css('display', 'none');
        $('.expanded-contacts.mail').css('display', 'none');
    })

    $('body').on('click', '.mail-contact', function () {
        $('.expanded-contacts.mail').css('display', 'block');
        $('.contact-us-widget.main-container').css('display', 'none');
        $('.expanded-contacts.phone').css('display', 'none');
    })

    $('body').on('click', '.go-back-button', function () {
        $('.expanded-contacts.mail').css('display', 'none');
        $('.expanded-contacts.phone').css('display', 'none');
        $('.contact-us-widget.main-container').css('display', 'block');
    })

};

$(document).on('initSomeForm', initSomeForm);

$(document).trigger('initSomeForm');


$('body').on('submit', '.contact-us-form', function (ev) {
    ev.preventDefault();
    let $targer = $(this);

    let $name = $targer.find('.inputName').val();
    let $email = $targer.find('.inputEmail').val();
    let $number = $targer.find('.inputNumber').val();
    let $message = $targer.find('.textareaMessage').val();
    var $notifier = $targer.find('.file-handler-notifier');

    if ($name.length === 0 || $email.length === 0 || $number.length === 0 || $message.length === 0) {
       // alert("One or more fields were not filled in successfully. Please fill them in and try again.");
        $notifier.addClass('alert alert-danger  fade in alert-dismissible');
        $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> One or more fields were not filled in successfully. Please fill them in and try again.');

        return false;
    }

    let formData = new FormData(this);
    // var $notifier = $('#test-form #file-handler-notfier');
    Data.postForm({ url: this.action, formData: formData })
        .then(function (res) {

            $("input").val("");
            $("textarea").val("");

            $notifier.addClass('alert alert-success  fade in alert-dismissible');
            $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> Your request was sent successfully!');

        })
        .catch(function (err) {
            console.log(err);
            $notifier.addClass('alert alert-danger  fade in alert-dismissible');
            $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> One or more fields were not filled in successfully. Please fill them in and try again.');
        })
    ev.preventDefault();
    return false;

})



/* Filter the phone number according to the selected */

$('body').on('click', '.list-of-regions li', function () {

    $('.list-of-regions li').each(function () {
        if ($(this).hasClass('selected-region')) {
            $(this).removeClass('selected-region');
        }
    });
    $(this).toggleClass('selected-region');

    switch ($(this).attr('data-region')) {
        case "europe":
            $('.list-of-contacts').html("<p>Contacts within Europe: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359876645789\">Bulgaria: +359876645789</a></li></ul>");
            break;
        case "north-america":
            $('.list-of-contacts').html("<p>Contacts within North America: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +443 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
            break;
        case "south-america":
            $('.list-of-contacts').html("<p>Contacts within South America: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
            break;
        case "asia":
            $('.list-of-contacts').html("<p>Contacts within Asia: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
            break;
        case "australia":
            $('.list-of-contacts').html("<p>Contacts within Australia: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
            break;
        case "africa":
            $('.list-of-contacts').html("<p>Contacts within Africa</p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
            break;
        default:
            $('.list-of-contacts').html("<p>Contacts within Europe: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
            break;
    }
})

/*Toggle button animation - Display menu and buttons with delay*/

$('.letter-2').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
        $('.leaf-button-text').css('display', 'none');
        $('.leaf-button-1').css('display', 'inline-block');
        $('.close-menu').css('display', 'inline-block');
    });

$('.leaf-button-2').on('click', function () {
    $("html").attr("class", "no-overflow");
});

// Lead to a certain icon in the menu

$(document).ready(function () {
    var elements = $('.element');
    elements.on('click', moveToIcon);

    function scrollcb(target) {
        let targetclass = target.className.split(' ')[1];
        // find the corresponding element
        let $targetIcon;
       //  $targetIcon = $(`#${targetclass}`);

        $targetIcon = $("#" + targetclass);
        let scrollDistance = $targetIcon.offset().top - 125;

        // scroll to the element
        $('html,body').animate({
            scrollTop: scrollDistance
        },
            'slow');
    };

    // Click buttn before lookig for elements
    function moveToIcon(e) {
        let target = e.target;

        if (!$('.more-items').hasClass('more-clicked')) {
            $('.more-items').unbind().trigger('click');
            scrollcb(target);
        } else {
            scrollcb(target);
        }

    }
});


/********************************************************************************************/
/******************************Subsciption functionality ************************************/
/********************************************************************************************/
function toggleForm() {
    $('.subscription-button').on('click', function () {
        console.log($(this));
        $(this).next().toggle();
    });
};

 $(window).ready(toggleForm());
