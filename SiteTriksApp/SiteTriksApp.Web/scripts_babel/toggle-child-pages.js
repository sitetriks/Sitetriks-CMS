'use strict';

function showHide(event) {
    var trigger = event.target;
    var tempClass = 'child-pages-';
    var childClass = void 0;
    var elementClass = void 0;
    var $trigger = $(trigger);
    if ($trigger.is('a') || $trigger.is('select') || $trigger.is('option')) {
        return;
    }

    var $element = $($trigger.closest('.page-item'));

    var childClassNumber = void 0;

    var $arrowRight = '<span class="glyphicon glyphicon-chevron-right"></span>';
    var $arrowDown = '<span class="glyphicon glyphicon-chevron-down"></span>';

    var $glyph = $element.find('.page-toggle');
    $glyph.html() === '<span class="glyphicon glyphicon-chevron-down"></span>' ? $glyph.html($arrowRight) : $glyph.html($arrowDown);

    for (var i = 0; i < 5; i++) {
        if ($element.hasClass(tempClass + i)) {
            elementClass = tempClass + i;
            childClass = tempClass + (i + 1);
            childClassNumber = i + 1;
        }
    }

    $element.nextUntil($('.' + elementClass)).each(function (index, elem) {
        var $elem = $(elem);
        if ($elem.hasClass(childClass)) {
            $elem.find('.page-toggle').html($arrowRight);
            $elem.toggle();
        } else {
            for (var i = 0; i < 4; i++) {
                if ($elem.hasClass(tempClass + (childClassNumber + i))) {
                    var found = $elem.find('.page-toggle');
                    found.html($arrowRight);
                    $elem.hide();
                }
            }
        }
    });
}