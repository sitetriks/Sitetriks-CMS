"use strict";

$(function () {

    $(".accordion").accordion({
        active: false,
        collapsible: true,
        animate: false
    });

    $('.accordion-nested').accordion({
        autoHeight: false,
        active: false,
        collapsible: true,
        animate: false
    });

    $(".accordion").accordion("option", "active", activateAccordion('data-year', 'accordion-item'));
    var newsYear = $('#detailed-news-date-created').attr('data-year');
    $('.accordion-nested').each(function (_, el) {
        $(el).accordion("option", "active", activateAccordion('data-month', 'accordion-item-nested-' + newsYear));
    });

    $('.detailed-news').on('click', function (e) {
        var id = $(this).attr('data-id');
        var url = $(this).attr('data-url');

        getNewsDetails(id, url);

        return false;
    });

    if ($(window).width() < 992) {
        $('.accordion').accordion('option', { active: false });
    } else {
        $("#accordion").accordion("activate", 0);
    }

    var newsUrl = getParameterByName("news-url");

    if (newsUrl != undefined && newsUrl != null && newsUrl != "") {
        getNewsDetails(null, newsUrl);
    }
});

// ADJUST WHEN HTML IS CHANGED!
function activateAccordion(data, className) {
    var year = $('#detailed-news-date-created').attr(data);
    var result = 0;

    $('.' + className).each(function (index, el) {
        if ($(el).text() === year) {
            result = index;
            return;
        }
    });

    return result;
}

function getNewsDetails(id, url) {
    $('#news-view-container').html('Loading...');
    $.get('/widget/newswidget/DetailedNews/' + url, function (result) {
        $('#news-view-container').html(result);
        //changeUrl(url)
    });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function changeUrl(url) {
    console.log('DEPRECATED: delete this function call!');
}

function collapseAccordion() {
    if ($(window).width() < 992) {
        $('.accordion').accordion('option', { active: false });
    }
}