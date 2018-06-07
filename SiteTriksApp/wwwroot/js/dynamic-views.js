"use strict";

var DynamicViews = function () {
    return {
        setupWidgetNameDropdown: function setupWidgetNameDropdown(selector) {
            $(selector).change(function () {
                var $location = $("#location");
                var $info = $("#custom-location-info");

                if ($(this).val() == "none") {
                    $location.val("");
                    $info.text("");
                    $info.attr("hidden", "hidden");
                    $location.removeAttr("hidden");
                } else if ($(this).val().indexOf("dynamic/") != -1) {
                    var dynamicClassName = $(this).val().replace("dynamic/", "");
                    $location.removeAttr("hidden");
                    $info.removeAttr("hidden");

                    $location.val("Views/Shared/Components/DynamicWidget/" + dynamicClassName + "/{ViewType}/{ViewName}.cshtml");
                    $("#custom-location-info").text("Change {ViewType} and {ViewName} placeholders!");
                } else {
                    $location.attr("hidden", "hidden");
                    $info.attr("hidden", "hidden");

                    $location.val("");
                    $info.val("");
                }
            });
        }
    };
}();