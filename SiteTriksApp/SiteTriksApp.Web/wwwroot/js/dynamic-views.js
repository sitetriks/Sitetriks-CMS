var DynamicViews = function () {
    return {
        setupWidgetNameDropdown: function (selector) {
            $(selector).change(function () {
                let $location = $("#location");
                let $info = $("#custom-location-info");

                if ($(this).val() == "none") {
                    $location.val("");
                    $info.text("");
                    $info.attr("hidden", "hidden");
                    $location.removeAttr("hidden");
                }
                else if ($(this).val().indexOf("dynamic/") != -1) {
                    let dynamicClassName = $(this).val().replace("dynamic/", "");
                    $location.removeAttr("hidden");
                    $info.removeAttr("hidden");

                    $location.val("Views/Shared/Components/DynamicWidget/" + dynamicClassName + "/{ViewType}/{ViewName}.cshtml");
                    $("#custom-location-info").text("Change {ViewType} and {ViewName} placeholders!")
                }
                else {
                    $location.attr("hidden", "hidden");
                    $info.attr("hidden", "hidden");

                    $location.val("");
                    $info.val("");
                }
            });
        }
    };
}();