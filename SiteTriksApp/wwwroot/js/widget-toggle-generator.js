"use strict";

var WidgetToggleGenerator = function () {
    return {
        generate: function generate(toggleElementId, options, firstContainerId, secondContainerId) {
            var $toggle = $(toggleElementId);

            $toggle.val(options.secondLabel);

            $toggle.on("click", function () {
                var $firstContainer = $(firstContainerId);
                var $secondContainer = $(secondContainerId);
                var $target = $(this);
                var $selectedValue = $("#option-selected-id");

                if ($target.val() == options.firstLabel) {
                    $firstContainer.removeAttr("hidden");
                    $secondContainer.attr("hidden", "hidden");
                    $target.val(options.secondLabel);
                    $selectedValue.val(options.firstId);
                    $target.removeClass('btn-primary');
                    $target.addClass('btn-info');
                } else {
                    $secondContainer.removeAttr("hidden");
                    $firstContainer.attr("hidden", "hidden");
                    $target.val(options.firstLabel);
                    $selectedValue.val(options.secondId);
                    $target.css("background-color", options.secondColor);
                    $target.removeClass('btn-info');
                    $target.addClass('btn-primary');
                }
            });
        }
    };
}();