//// activate the scroll event

//$(window).scroll(function () {
//    removeSideMenu();
//});

//function removeSideMenu(e) {

//    let offSet = $('.bottom-menu').offset();
//    let distance = offSet ? offSet.top : 0;
//    let $scrollBottom = $(window).scrollTop() + $(window).height();
//    let $toggleMenu = $('.toggle-menu');

//    if (distance && ($scrollBottom >= distance) && ($(window).width() > 767)) {
//        $toggleMenu.addClass('visuallyhidden');
//        $toggleMenu.one('transitionend', function (e) {
//        });
//    }

//    if (distance && $scrollBottom <= distance) {

//        setTimeout(function () {
//            $toggleMenu.removeClass('visuallyhidden');
//        }, 30);
//        //$toggleMenu.removeClass('hidden');

//    }
//}

///* Toggle the menu */

//var animateWidth;
//var $selectedFeature = $(".toggle-menu .selected-feature");
//var $featuresSection = $('.toggle-menu .features-section');
//var $sideCol = $('.side-section.col.col-lg-1');
//var $middleSection = $('.middle-section.col-lg-10');

//var screenWidth = $(window).width();

//// var $fullToggleMenu = $('.toggle-menu');
//function setToggleWidth() {
//    $('.toggle-menu').css("width", "40%");

//    if (screenWidth >= 1000) {
//        $('.toggle-menu').css("width", "40%");
//    }
//    if (screenWidth <= 1000 && screenWidth > 768) {
//        $('.toggle-menu').css("width", "45%");
//    }
//    if (screenWidth <= 768) {
//        $('.toggle-menu').css("width", "60%");
//    }
//};


//$('body').on('resize ready', '.toggle-menu', function () {
//    setToggleWidth();
//    if ($(".toggle-menu").attr("data-open-state") === "expanded") {
//        $(".shrink-menu").children('img').attr('src', '/Content/Images/menu-buttons/Decrease_window.png');
//        setToggleWidth();
//    }
//    if ($(".toggle-menu").attr("data-open-state") === "closed" || $(".toggle-menu").attr("data-open-state") === "opened") {
//        setToggleWidth();
//    }
//})

////(function () {
////    setToggleWidth();
////    if ($(".toggle-menu").attr("data-open-state") === "expanded") {
////        $(".shrink-menu").children('img').attr('src', '/Content/Images/menu-buttons/Decrease_window.png');
////        setToggleWidth();
////    }
////    if ($(".toggle-menu").attr("data-open-state") === "closed" || $(".toggle-menu").attr("data-open-state") === "opened") {
////        setToggleWidth();
////    }
////})();

//    var setFeatureWidth = "240px";

//$(".shrink-menu").on("click", expandMenu);

//function expandMenu(ev) {

//    // check window-height

//    //if ($(window).height() <= 800) {
//    //    setFeatureWidth = "260px"
//    //} else {
//    //    setFeatureWidth = "240px";
//    //}

//    // check state

//    if ($(".toggle-menu").attr("data-open-state") === "closed") {
//        return;
//    }

//    animateWidth = $('.middle-section.col-lg-10').css('width') == "0px" ? "76%" : "0px";
//    var featuresFullWidth = $('.toggle-menu .features-section').css('width') == setFeatureWidth ? "90%" : setFeatureWidth;
//    var sideColsWidth = $('.side-section.col.col-lg-1').css('width') == "117px" ? "12%" : "117px";
//    var selectedFeatureVisibility = $selectedFeature.css('display') == "block" ? "none" : "block";

//    // change image
//    $(".leaf-button-2").toggle();
//    $(".leaf-button-3").toggle();

//    // Hide th arrow images when the menu is expanded - 1.1
//    $('.close-menu').toggle();

//    let anumationDuration = 500;
//    let color = '#fff'

//    $('.middle-section.col-lg-10').animate({ width: animateWidth }, anumationDuration, function () {
//        // $(".toggle-menu .selected-feature").animate(".hidden-selected");
//        $selectedFeature.toggle("slow");
//    })

//    $featuresSection.animate({ width: featuresFullWidth }, anumationDuration, function () {
//    });

//    $('.side-section').animate({ width: sideColsWidth }, 0, function () {
//    });

//    $selectedFeature.animate({ display: selectedFeatureVisibility }, anumationDuration, function () {
//        if ($selectedFeature.css('display') === "none") {
//            Blur.add({
//                color: color,
//                opacity: '0.5'
//            });

//            $(".toggle-menu").addClass("toggle-blur-content");
//        } else {
//            $(".toggle-menu").removeClass("toggle-blur-content");
//            $("body").append($("#wrapper"));
//            Blur.remove();
//        }
//    });

//    // set state
//    if ($(".toggle-menu").attr("data-open-state") === "opened") {
//        $(".toggle-menu").attr("data-open-state", "expanded");
//        $('.toggle-menu').css("width", "90%");
//        //$(".shrink-menu").children('img').attr('src', '/Content/Images/menu-buttons/Decrease_window.png');

//    } else {
//        $(".toggle-menu").attr("data-open-state", "opened");
//        // $('.toggle-menu').addClass('toggleWidth');
//        // $('.toggle-menu').css("width", "20%")
//        setToggleWidth();
//        $('.toggle-menu').css("transition", "width 2s");
//    }
//}

//// Close menu

//$('.close-menu').on('click', function () {

//    // check state

//    if ($(".toggle-menu").attr("data-open-state") === "expanded") {
//        return;
//    }

//    // change images on buttons

//    $(".arrows-1").toggle();
//    $(".arrows-2").toggle();

//    $(".leaf-button-2").toggle();
//    $(".leaf-button-1").toggle();

//    // fix features section width
//    $featuresSection.css("width", setFeatureWidth);
//    $sideCol.css("width", "117px");
//    $middleSection.css("width", "0px");
//    $selectedFeature.css("display", "none");


//    let featureVisibility = $featuresSection.css('display') == "none" ? "inline-block" : "none";
//    // console.log(featureVisibility);
//    $featuresSection.toggle("slow");

//    // set state 

//    if ($(".toggle-menu").attr("data-open-state") === "closed") {
//        $(".toggle-menu").attr("data-open-state", "opened");
//    } else {
//        $(".toggle-menu").attr("data-open-state", "closed");
//    }

//})

////--------------------------------------------------------------------------------------------------------------
//// Features Section content loading.

//$(document).ready(function (ev) {
//    $('.features-section').on('click', '.menu-icon', loadSection)
//    //let config = {
//    //    styles: {}
//    //};

//    //config.styles['background-color'] = '#1ac6e9';
//    //config.styles['border'] = '2px solid #1ac6e9';
//    //config.styles['border-radius'] = '10px';

//    //ModuleBuilder.createScroll('#static-section', '.feature-content', '.template-content', config);
//    //ModuleBuilder.createScroll('#floating-section', '.feature-content', '.template-content', config);

//    function loadSection(ev) {
//        let $trigger = $(this);
//        // console.log($trigger);

//        $('.menu-icon').each(function () {
//            if ($(this).hasClass('clicked')) {
//                $(this).children('.icon-image').toggle();
//                $(this).css('background-color', '#123e7a');
//                //$(this).css('border-color', '#3875cf');
//                $(this).removeClass('clicked');
//            }
//        });

//        $trigger.addClass('clicked');
//        $trigger.css('background-color', '#3876cf');
//        //$trigger.css('border-color', '#1ac6e9');
//        $trigger.children('.icon-image').toggle();

//        let url = $trigger.attr('data-url') || '';
//        // console.log(url);
//        let $section = $trigger.parents('.features-section').find('.feature-content');
//        let $toggleMenu = $trigger.parents('.toggle-menu');

//        $section.html('');
//        Data.getJson({ url: '/sitetriks/display/GetPageString?pageUrl=' + url }).then(function (res) {
//            // console.log(res.url);

//            if (res.success) {
//                $section.html(res.view);

//                DocumentationWidget();

//                if ($toggleMenu.length > 0 && $toggleMenu.attr('data-open-state') !== 'expanded') {
//                    expandMenu();
//                }

//                // check if I have the Playlist element loaded

//                if ($section.find('.multiple-playlists')) {
//                    // get all thumbnails ids
//                    let $container = ($('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail'));
//                    let source;

//                    $container.each(function (_, element) {
//                        source = $(this).data("videoid");
//                        let url = getYoutubeData(source).then(function (res) {
//                          //  console.log(res);
//                            let finalUrl = res.items[0].snippet.thumbnails.high.url;
//                            let title = res.items[0].snippet.title;
//                         //   console.log(title);
//                            $(element).children('img').attr('src', finalUrl);
//                            $(element).children('.playlist-title').text( title );
//                        }, Data.defaultError);

//                    })

//                }

//                //if ($(window).width() > 768) {
//                //    $section.parent().data('scroll-bar').update();
//                //}

//                //onImgLoaded(function (ev) {
//                //    setTimeout(function () {
//                //        $section.parent().data('scroll-bar').update();
//                //    }, 200)
//                //});
//            }
//        })
//    }

//    /*******************Get Youtube Playlist Thumbnails ***********************/


//    function getYoutubeData(playlistId) {
//       return Data.getJson({ url: "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=" + playlistId + "&key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8"})
//        //return new Promise((resolve, reject) => {
//        //    $.ajax({
//        //        url: "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=" + playlistId + "&key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8",
//        //        method: 'GET',
//        //        contentType: 'json',
//        //        success: resolve,
//        //        error: reject
//        //    }).then(function (data) {
//        //        let result = JSON.stringify(data.items[0].snippet.thumbnails.high.url);
//        //        console.log(result);
//        //        return result;
//        //        }, Data.defaultError)
//        //});
//    }

//        /********************************** Try Button logic ****************************************/


//        $('.try-button-wrapper').on('click', function () {
//            $('.features-section').each(function (_, element) {
//                let $menuIcon = $($(this).find('.menu-icon')[4]);
//                loadSection.apply($menuIcon);
//            });
//        });


//        $('.features-section').each(function (_, element) {
//            let $menuIcon = $($(this).find('.menu-icon')[2]);
//            loadSection.apply($menuIcon);
//        });

//        function onImgLoaded(callback) {
//            var img = document.querySelector('img');

//            if (img.complete) {
//                callback()
//            } else {
//                img.addEventListener('load', callback)
//                img.addEventListener('error', function () {
//                    console.log('error')
//                })
//            }
//        }
//    })


//$(document).ready(function () {
//    $('.letter-2').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
//        function (e) {
//            $('.leaf-button-text').css('display', 'none');
//            $('.leaf-button-1').css('display', 'inline-block');
//            $('.close-menu').css('display', 'inline-block');

//        });
//});



///*To Move - Logic for Contact Us page*/

//function initSomeForm() {
//    //$('body').on('click', '.phone-contact', function () {
//    //    $('.expanded-contacts.phone').css('display', 'block');
//    //    $('.contact-us-widget.main-container').css('display', 'none');
//    //    $('.expanded-contacts.mail').css('display', 'none');
//    //})

//    $('body').on('click', '.mail-contact', function () {
//        $('.expanded-contacts.mail').css('display', 'block');
//        $('.contact-us-widget.main-container').css('display', 'none');
//        $('.expanded-contacts.phone').css('display', 'none');
//    })

//    $('body').on('click', '.go-back-button', function () {
//        $('.expanded-contacts.mail').css('display', 'none');
//        $('.expanded-contacts.phone').css('display', 'none');
//        $('.contact-us-widget.main-container').css('display', 'block');
//    })

//};

//$(document).on('initSomeForm', initSomeForm);

//$(document).trigger('initSomeForm');


//$('body').on('submit', '.contact-us-form', function (ev) {
//    ev.preventDefault();
//    let $targer = $(this);

//    let $name = $targer.find('.inputName').val();
//    let $email = $targer.find('.inputEmail').val();
//    let $number = $targer.find('.inputNumber').val();
//    let $message = $targer.find('.textareaMessage').val();
//    var $notifier = $targer.find('.file-handler-notifier');

//    if ($name.length === 0 || $email.length === 0 || $number.length === 0 || $message.length === 0) {
//        alert("One or more fields were not filled in successfully. Please fill them in and try again.");
//        // $notifier.addClass('alert alert-primary');
//        // $notifier.html('One or more fields were not filled in successfully. Please fill them in and try again.');
//        return false;
//    }

//    let formData = new FormData(this);
//    // var $notifier = $('#test-form #file-handler-notfier');
//    Data.postForm({ url: this.action, formData: formData })
//        .then(function (res) {

//            $("input").val("");
//            $("textarea").val("");

//            alert('Your request was sent successfully!');

//        })
//        .catch(function (err) {
//            console.log(err);
//            // alert('One or more fields were not filled in successfully. Please fill them in and try again.')
//            alert('One or more fields were not filled in successfully. Please fill them in and try again.');
//        })
//    ev.preventDefault();
//    return false;

//})



///* Filter the phone number according to the selected */

//$('body').on('click', '.list-of-regions li', function () {

//    $('.list-of-regions li').each(function () {
//        if ($(this).hasClass('selected-region')) {
//            $(this).removeClass('selected-region');
//        }
//    });
//    $(this).toggleClass('selected-region');

//    switch ($(this).attr('data-region')) {
//        case "europe":
//            $('.list-of-contacts').html("<p>Contacts within Europe: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359876645789\">Bulgaria: +359876645789</a></li></ul>");
//            break;
//        case "north-america":
//            $('.list-of-contacts').html("<p>Contacts within North America: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +443 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
//            break;
//        case "south-america":
//            $('.list-of-contacts').html("<p>Contacts within South America: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
//            break;
//        case "asia":
//            $('.list-of-contacts').html("<p>Contacts within Asia: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
//            break;
//        case "australia":
//            $('.list-of-contacts').html("<p>Contacts within Australia: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
//            break;
//        case "africa":
//            $('.list-of-contacts').html("<p>Contacts within Africa</p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44444 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
//            break;
//        default:
//            $('.list-of-contacts').html("<p>Contacts within Europe: </p><ul ><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+44 515 772 228\">UK: +44 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+49515772228\">Germany: +49 515 772 228</a></li><li><img src=\"/images/contact-us/tel_blue.svg\"><a href=\"tel:+359515772228\">Bulgaria: +359 515 772 228</a></li></ul>");
//            break;
//    }
//});


