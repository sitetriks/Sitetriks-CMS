
$(document).ready(function () {
    let $window = $(window);
    let $sideNavControl = $('.side-navigation-control');
    let $sideNavCollapse = $('.side-nav-collapse');
    let $menuButtons = $('.btn-icon');
    let $tooltips = $('.st-tooltip');

    // Event handlers
    $sideNavControl.on('click', '.btn-nav', detectClick);
    $window.on('click', function (ev) {
        if (($sideNavCollapse.has(ev.target).length == 0) && !$sideNavCollapse.is(ev.target) && !$sideNavControl.is(ev.target) && $sideNavControl.has(ev.target).length == 0) {
            $sideNavCollapse.removeClass('active');
            $menuButtons.removeClass('selected');
        }
    })

    // Helper functions

    function detectClick(ev) {
        let $target = $(this);

        let selectedCategory = $target.data('category');

        $menuButtons.removeClass('selected');
        $target.addClass('selected');

        activateSubMenu(selectedCategory);

        if ($sideNavCollapse.hasClass('active')) {
            return;
        } else {
            $sideNavCollapse.addClass('active');
        }
    }

    function activateSubMenu(category) {
        let $selectedCategory = $sideNavCollapse.find('.' + category);
        let $categories = $('.category');

        $categories.removeClass('current');
        $selectedCategory.addClass('current');
    }
});
