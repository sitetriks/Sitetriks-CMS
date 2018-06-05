'use strict';

// TODO: redo to module!

var DocumentationWidget = function DocumentationWidget() {
    if ($('.docs-menu').length < 1) {
        //console.log('--- Documentation Skipped! ---');
        return;
    }

    //console.log('--- Init Documentation Widget ---');

    var $first = $('.docs-menu').find('a').first();
    loadTopic($first.attr('data-id'));
    var $btnNext = $('#next-doc');
    var $btnPrev = $('#prev-doc');
    $btnNext.attr('data-id', $first.attr('data-next'));
    $btnPrev.attr('data-id', $first.attr('data-prev'));
    $btnPrev.hide();

    if (!$first.attr('data-next')) {
        $btnNext.hide();
    }

    $('.docs-menu').on('click', 'a', function (ev) {
        var $trigger = $(this);
        var nextId = $trigger.attr('data-next');
        var prevId = $trigger.attr('data-prev');

        if (!nextId) {
            $btnNext.hide();
        } else {
            $btnNext.show();
        }

        if (!prevId) {
            $btnPrev.hide();
        } else {
            $btnPrev.show();
        }

        $btnNext.attr('data-id', nextId);
        $btnPrev.attr('data-id', prevId);

        var id = $trigger.attr('data-id');
        loadTopic(id);
    });

    function loadTopic(id) {
        Data.postJson({ url: '/sitetriks/documentation/getcontent', data: { id: id } }).then(function (res) {
            $('.topic-details').html(res);
        }, function (res) {
            console.log(res);
        }).then(function () {
            if ($('pre').length > 0) {
                Prism.highlightAll();
            }

            if ($('.prettyprint').length > 0) {
                prettify();
            }
        });
    }

    $('#next-doc, #prev-doc').on('click', function (ev) {
        var id = $(this).attr('data-id');
        if (!id) {
            return;
        }

        $('.docs-menu a[data-id="' + id + '"]').click();
    });

    $('.docs-menu').on('click', '.glyphicon-menu-right', function () {
        $(this).parent().next('ul').show();
        $(this).removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
    });

    $('.docs-menu').on('click', '.glyphicon-menu-down', function () {
        var $toHide = $(this).parent().next('ul');
        $toHide.hide();

        var descendants = Array.prototype.slice.call($toHide[0].querySelectorAll('ul'), 0);

        descendants.forEach(function (descendant) {
            $(descendant).hide();
        });

        $(this).removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');

        var descendantIcons = Array.prototype.slice.call($toHide[0].querySelectorAll('span.glyphicon-menu-down'), 0);

        descendantIcons.forEach(function (descendant) {
            $(descendant).removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
        });
    });
};