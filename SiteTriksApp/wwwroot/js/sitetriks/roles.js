'use strict';

function createRole() {
    $('#create-roles-form').on('submit', function (e) {
        var flag = true;

        if (!Validator.validate($('#name'), 'Name must be atleast 3 symbols', function (val) {
            return Validator.hasMinimumLength(val, 3);
        })) {
            flag = false;
        }

        if (!flag) {

            e.preventDefault();
        }
    });
}

function editRole() {
    $('#edit-roles-form').on('submit', function (e) {
        var flag = true;

        if (!Validator.validate($('#name'), 'Name must be atleast 3 symbols', function (val) {
            return Validator.hasMinimumLength(val, 3);
        })) {
            flag = false;
        }

        if (!flag) {

            e.preventDefault();
        }
    });
}