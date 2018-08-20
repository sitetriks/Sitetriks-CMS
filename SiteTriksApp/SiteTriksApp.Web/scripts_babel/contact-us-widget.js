'use strict';

function initSomeForm() {

    $('body').on('click', '.mail-contact', function () {
        $('.expanded-contacts.mail').css('display', 'block');
        $('.contact-us-widget.main-container').css('display', 'none');
        $('.expanded-contacts.phone').css('display', 'none');
    });

    $('body').on('click', '.go-back-button', function () {
        $('.expanded-contacts.mail').css('display', 'none');
        $('.expanded-contacts.phone').css('display', 'none');
        $('.contact-us-widget.main-container').css('display', 'block');
    });
};

function submitContactForm(ev) {
    ev.preventDefault();
    var $targer = $(this);

    var $name = $targer.find('.inputName').val();
    var $email = $targer.find('.inputEmail').val();
    var $number = $targer.find('.inputNumber').val();
    var $message = $targer.find('.textareaMessage').val();
    var $notifier = $targer.find('.file-handler-notifier');
    if ($name) {
        if ($name.length === 0 && $name || $email.length === 0 || $number.length === 0 || $message.length === 0) {
            // alert("One or more fields were not filled in successfully. Please fill them in and try again.");
            $notifier.addClass('alert alert-danger  fade in');
            $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> One or more fields were not filled in successfully. Please fill them in and try again.');

            setTimeout(function () {
                $notifier.removeClass('in');
                $notifier.html('');
            }, 5000);

            return false;
        }
    } else {

        if ($message.length === 0) {
            // alert("One or more fields were not filled in successfully. Please fill them in and try again.");
            $notifier.addClass('alert alert-danger  fade in ');
            $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> One or more fields were not filled in successfully. Please fill them in and try again.');

            setTimeout(function () {
                $notifier.removeClass('in');
                $notifier.html('');
            }, 5000);

            return false;
        }
    }

    var formData = new FormData(this);
    // var $notifier = $('#test-form #file-handler-notfier');
    Data.postForm({ url: this.action, formData: formData }).then(function (res) {

        $("input").val("");
        $("textarea").val("");

        $notifier.addClass('alert alert-success  fade in');
        $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> Your request was sent successfully!');

        setTimeout(function () {
            $notifier.removeClass('in');
            $notifier.html('');
        }, 5000);
    }).catch(function (err) {
        $notifier.addClass('alert alert-danger  fade in');
        $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> One or more fields were not filled in successfully. Please fill them in and try again.');

        setTimeout(function () {
            $notifier.removeClass('in');
            $notifier.html('');
        }, 5000);
    });
    ev.preventDefault();
    return false;
};

function submitContactFormOne(ev) {
    ev.preventDefault();
    var $targer = $(this);
    var $notifier = $targer.find('.file-handler-notifier');
    var formData = new FormData(this);
    // var $notifier = $('#test-form #file-handler-notfier');
    Data.postForm({ url: this.action, formData: formData }).then(function (res) {

        $("input").val("");
        $("textarea").val("");

        $notifier.addClass('alert alert-success  fade in');
        $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> Your request was sent successfully!');

        setTimeout(function () {
            $notifier.removeClass('in');
            $notifier.html('');
        }, 5000);
    }).catch(function (err) {
        $notifier.addClass('alert alert-danger  fade in');
        $notifier.html('<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a> One or more fields were not filled in successfully. Please fill them in and try again.');

        setTimeout(function () {
            $notifier.removeClass('in');
            $notifier.html('');
        }, 5000);
    });
    ev.preventDefault();
    return false;
};

function filterListOfRegions() {
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
};

$('body').on('click', '.list-of-regions li', filterListOfRegions);
$('body').on('submit', '.contact-us-form', submitContactForm);
$('body').on('submit', '.contact-us-form', submitContactFormOne);

$(document).on('initSomeForm', initSomeForm);
$(document).trigger('initSomeForm');