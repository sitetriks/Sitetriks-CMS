var WidgetToggleGenerator = function () {
    return {
        generate: function (toggleElementId, options, firstContainerId, secondContainerId) {
            let $toggle = $(toggleElementId);

            $toggle.val(options.secondLabel);

            $toggle.on('click', function () {
                let $firstContainer = $(firstContainerId);
                let $secondContainer = $(secondContainerId);
                let $target = $(this);
                let $selectedValue = $('#option-selected-id');

                if ($target.val() == options.firstLabel) {
                    $firstContainer.removeAttr('hidden');
                    $secondContainer.attr('hidden', 'hidden');
                    $target.val(options.secondLabel);
                    $selectedValue.val(options.firstId);
                    $target.removeClass('btn-primary');
                    $target.addClass('btn-info');
                }
                else {
                    $secondContainer.removeAttr('hidden');
                    $firstContainer.attr('hidden', 'hidden');
                    $target.val(options.firstLabel);
                    $selectedValue.val(options.secondId);
                    $target.css('background-color', options.secondColor);
                    $target.removeClass('btn-info');
                    $target.addClass('btn-primary');
                }
            });
        }
    };
}();

export { WidgetToggleGenerator };