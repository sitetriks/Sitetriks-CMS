
//=================================================================================================================================================
// Main Menu set/Unset
//=================================================================================================================================================

var mainMenuModule = (function () {

    let $mainWidgetWrapper = $('.main-widgets-wrapper');

    function toggleMainWidgets() {
        let $glyphs = $mainWidgetWrapper.find('.fa');
        let $widgetsContainer = $('.css-js-container');

        $glyphs.toggle();
        $widgetsContainer.toggle();
    }

    function activateCss() {
        let $cssIcon = $mainWidgetWrapper.find('.css');

        if (!$mainWidgetWrapper.hasClass('active')) {
            $mainWidgetWrapper.addClass('active');
        }

        if (!$cssIcon.hasClass('active-widget-type')) {
            $mainWidgetWrapper.find('.css').addClass('active-widget-type');
        }
    }

    function activateJs() {
        let $jsIcon = $mainWidgetWrapper.find('.js');

        if (!$mainWidgetWrapper.hasClass('active')) {
            $mainWidgetWrapper.addClass('active');
        }

        if (!$jsIcon.hasClass('active-widget-type')) {
            $mainWidgetWrapper.find('.js').addClass('active-widget-type');
        }
    }

    function setMenuOnChange() {
        let $mainWidgetWrapper = $('.main-widgets-wrapper');
        let $cssWidgets = $('.edit-widget[data-display="CSS"]');
        let $jsWidgets = $('.edit-widget[data-display="JavaScript"]');

        if ($cssWidgets.length > 0) {
            activateCss();
        } else {
            $('.css').removeClass('active-widget-type');
        }

        if ($jsWidgets.length > 0) {
            activateJs();
        } else {
            $('.js').removeClass('active-widget-type');
        }

        if ($cssWidgets.length === 0 && $jsWidgets.length === 0 && $mainWidgetWrapper.hasClass('active')) {
            $mainWidgetWrapper.removeClass('active');
        }
    }

    function toggleLockWidget(ev) {
        let target = ev.target;
        let $target = $(target);

        if ($target.hasClass('locked')) {
            $target.removeClass('locked');
            $target.attr('src', '/images/page-builder/lock.svg');
        } else {
            $target.addClass('locked');
            $target.attr('src', '/images/page-builder/locked.svg');
        }

    }

    return {
        setMenuOnChange,
        toggleMainWidgets,
        toggleLockWidget
    }
})();

export { mainMenuModule }