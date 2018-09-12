"use strict";

$(document).ready(function () {
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    $(document).on("keydown", "input[type=number]", function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        if (e.keyCode == 69) {
            e.preventDefault();

            return;
        }

        if (e.keyCode == 190) {
            var matchesCount = $(e.target).val().split(".").length - 1;

            if (matchesCount > 0) {
                e.preventDefault();

                return;
            }
        }

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl/cmd+A
        e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: Ctrl/cmd+C
        e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: Ctrl/cmd+X
        e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: Ctrl/cmd+v
        e.keyCode == 86 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: home, end, left, right
        e.keyCode >= 35 && e.keyCode <= 39) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $(document).on("keyup", "input[type=number]", function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        // Ensure that it is a number and stop the keypress
        $(e.target).val($(e.target).val());
    });
});