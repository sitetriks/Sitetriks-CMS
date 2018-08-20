'use strict';

function createEditBlog() {
    $(document).ready(function () {
        textEditor.init('#summary-area', 500, 150);
        textEditor.init('#content-area', 500, 300);
    });

    $('input[type=submit]').on('click', function (e) {
        var flag = true;

        if (!Validator.validate($('#title'), 'Title must be atleast 3 symbols', function (val) {
            return Validator.hasMinimumLength(val.trim(), 3);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
    });
}