import { Validator } from '../common/validator.js';
import { WarningWindow } from '../modules/warning-window.js';

function createRole() {
    WarningWindow.attach();
    $('#create-roles-form').on('submit', function (e) {
        let flag = true;

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
    WarningWindow.attach();
    $('#edit-roles-form').on('submit', function (e) {
        let flag = true;

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

window.createRole = createRole;
window.editRole = editRole;
