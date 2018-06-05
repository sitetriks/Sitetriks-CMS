'use strict';

/**
* Create scroll control.
* @param {JQuery} $scrollView
* @param {string} scrollContent
* @param {string} innerContent
* @param {{styles: Map<string, string>}} config
*/

function scrollControl($scrollView, scrollContent, innerContent, config) {
    var $scrollContent = $scrollView.find(scrollContent);
    var forbidenStyles = ['top', 'bottom', 'left', 'right', 'width', 'height', 'position'];

    // hide browser scrollbar and setup
    $scrollView.css('overflow', 'hidden').css('position', 'relative');
    $scrollContent.css('position', 'absolute').css('top', 0).css('bottom', 0).css('left', 0).css('right', -17).css('overflow-y', 'scroll');

    $scrollContent.on('scroll', function (ev) {
        var $trigger = $(this);
        // return if called while draging ($.scrollTop() uses the same event)
        if ($trigger.attr('data-drag')) {
            $trigger.removeAttr('data-drag');
            return;
        }

        var contentHeight = $trigger.find(innerContent).height();
        var $scrollbar = $scrollView.find('.st-scrollbar');

        $scrollbar.css('top', $trigger.scrollTop() / contentHeight * 100 + '%');
    });

    // build or update scrollbar
    function buildScrollbar(newStyles) {
        var selectorHeight = $scrollContent.height();
        var contentHeight = $scrollContent.find(innerContent).height();
        var scrollHeight = selectorHeight / contentHeight * 100;

        // Update scrollbar if already exists.
        var $scroll = $scrollView.find('.st-scrollbar');
        if ($scroll.length > 0) {
            if (contentHeight < selectorHeight) {
                // hide scrollbar if content is small enough
                $scroll.height('100%');
                $scroll.hide();
            } else {
                $scroll.height(scrollHeight + '%');
                $scroll.show();
            }

            if (newStyles) {
                updateStyles($scroll, newStyles);
            }

            return;
        }

        // Build scrollbar, styles should be inline
        $scroll = $('<div></div>', {
            class: 'st-scrollbar'
        }).css('background-color', '#000').css('top', 0).css('position', 'sticky').css('opacity', 0);

        if (config && config.styles) {
            updateStyles($scroll, config.styles);
        }

        // hide scrollbar if content is small enough
        if (contentHeight < selectorHeight) {
            $scroll.height('100%');
            $scroll.hide();
        } else {
            $scroll.height(scrollHeight + '%');
        }

        // Build scroll wrapper and attach needed events.
        var $wrapper = $('<div></div>', {
            width: 20,
            height: '100%'
        }).on('mousedown', function (ev) {
            $(this).find('.st-scrollbar').attr('data-y', ev.pageY);
            $(this).on('mousemove', dragScroll);
        }).on('mouseup mouseout', function (ev) {
            $(this).off('mousemove', dragScroll);
        }).on('click', function (ev) {
            if ($(ev.target).hasClass('st-scrollbar')) {
                return;
            }

            var $scroll = $(this).find('.st-scrollbar');
            var top = +$scroll.css('top').replace('px', '').replace('%', '');
            var height = $scroll.height();
            var y = ev.clientY;
            var maxHeight = $(this).height();
            var contentHeight = $scrollContent.find(innerContent).height();
            var case1 = height / 2 < y;
            var case2 = y + height / 2 < maxHeight - height / 2;

            if (case1 && case2) {
                top = (y - height / 2) / maxHeight * 100;
            } else if (case2 && !case1) {
                top = 0;
            } else if (case1 && !case2) {
                top = (maxHeight - height) / maxHeight * 100;
            }

            $scroll.css('top', top + '%');
            $scrollContent.scrollTop(top * contentHeight / 100);
        }).css('position', 'sticky').css('float', 'right').css('top', 0).css('z-index', 110).append($scroll).appendTo($scrollView);
    }

    // show scrollbar when mouseover the wrapper
    $scrollView.on('mouseover', function (ev) {
        buildScrollbar(); // update is needed due to async resizing of the page's content
        $(this).find('.st-scrollbar').css('opacity', 1);
    });

    // hide scrollbar when mouse is away
    $scrollView.on('mouseout', function (ev) {
        buildScrollbar();
        $(this).find('.st-scrollbar').css('opacity', 0);
    });

    // Drag event handler
    function dragScroll(ev) {
        var $trigger = $(ev.target).first('.st-scrollbar');
        if ($trigger.length !== 1) {
            return;
        }

        var move = ev.clientY - $trigger.attr('data-y');
        var top = +$trigger.css('top').replace('px', '').replace('%', '');
        var height = $trigger.height();
        var maxHeight = $trigger.parent().height();
        var contentHeight = $scrollContent.find(innerContent).height();
        var newTop = (top + move) / maxHeight * 100;
        if (newTop < 100 - height / maxHeight * 100) {
            $trigger.css('top', newTop + '%');
        } else if (newTop < 0) {
            newTop = 0;
            $trigger.css('top', '0%');
        }

        $trigger.attr('data-y', ev.clientY);
        $scrollContent.attr('data-drag', true);
        $scrollContent.scrollTop(newTop * contentHeight / 100);
    }

    function updateStyles($element, styles) {
        for (var key in styles) {
            if (forbidenStyles.indexOf(key) > -1) {
                continue;
            }

            $element.css(key, styles[key]);
        }
    }

    return {
        update: buildScrollbar
    };
}