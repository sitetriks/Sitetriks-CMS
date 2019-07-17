function showHide(event) {
    let trigger = event.target;
    let tempClass = 'child-pages-';
    let childClass;
    let elementClass;
    const $trigger = $(trigger);
    if ($trigger.is('a') || $trigger.is('select') || $trigger.is('option')) {
        return;
    }

    let $element = $($trigger.closest('.page-item'));

    let childClassNumber;

    let $arrowRight = '<span class="fa fa-angle-right"></span>';
    let $arrowDown = '<span class="fa fa-angle-down"></span>';

    let $glyph = $element.find('.page-toggle');
    $glyph.html() === '<span class="fa fa-angle-down"></span>' ? $glyph.html($arrowRight) : $glyph.html($arrowDown);

    for (var i = 0; i < 5; i++) {
        if ($element.hasClass(tempClass + i)) {
            elementClass = tempClass + i;
            childClass = tempClass + (i + 1);
            childClassNumber = i + 1;
        }
    }

    $element.nextUntil($('.' + elementClass)).each(function (index, elem) {
        let $elem = $(elem);
        if ($elem.hasClass(childClass)) {
            $elem.find('.page-toggle').html($arrowRight);
            $elem.toggle();
        } else {
            for (var i = 0; i < 4; i++) {
                if ($elem.hasClass(tempClass + (childClassNumber + i))) {
                    let found = $elem.find('.page-toggle');
                    found.html($arrowRight);
                    $elem.hide();
                }
            }
        }
    });
}