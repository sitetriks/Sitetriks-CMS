import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Multiselect } from '../common/multiselect-setup.js';
import { WarningWindow } from '../modules/warning-window.js';

function initUserCreate() {
    WarningWindow.attach();
    Multiselect.Setup('multiselect-roles', function (option, checked, select) {
        var opselected = $(option).text();
        if (checked === true) {
            if (opselected === 'Admin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'Admin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'SuperAdmin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });

                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                Multiselect.Refresh();
            }
        }
        if (checked === false) {
            if (opselected === 'Admin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                Multiselect.Refresh();
            }
        }
    });

    $('button[type=submit]').on('click', function (e) {
        Loader.show(true);
        let flag = true;
        if (!Validator.validate($('#email'), 'Invalid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
        Loader.hide();
    });
}

function initUserEdit() {
    WarningWindow.attach();
    Multiselect.Setup('multiselect-roles', function (option, checked, select) {
        var opselected = $(option).text();
        if (checked === true) {
            if (opselected === 'Admin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'Admin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('#multiselect-roles option').each(function (index) {
                    if ($(this).text() !== 'SuperAdmin') {
                        $('#multiselect-roles').multiselect('deselect', $(this).val());
                    }
                });

                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'none');
                    }
                });
                Multiselect.Refresh();
            }
        }
        if (checked === false) {
            if (opselected === 'Admin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' Admin' && $(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected === 'SuperAdmin') {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' SuperAdmin') {
                        $(this).css('display', 'block');
                    }
                });
                Multiselect.Refresh();
            }
        }
    });

    $('.multiselect-container label:has(input:checked)').each(function (index) {
        if ($(this)[index].innerText.trimStart() === 'SuperAdmin') {
            $('#email').attr('readonly', 'readonly');
            $('.multiselect-native-select .btn-group').html('<div>SuperAdmin</div>');
            $('.multiselect-native-select .dropdown-toggle').attr('disabled', 'disabled');

        }
    });

    $('input[type=submit]').on('click', function (e) {
        Loader.show(true);
        let flag = true;
        if (!Validator.validate($('#email'), 'Invalid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
        Loader.hide();
    });

    initialDeselect('SuperAdmin');
    initialDeselect('Admin');
}

function initialDeselect(role) {
    var rolesIds = $('#multiselect-roles').val();
    $('#multiselect-roles option').each(function (index) {
        if ($(this).text() === role) {
            if (jQuery.inArray($(this).val(), rolesIds) !== -1) {
                $('.checkbox').each(function (index) {
                    if ($(this).text() !== ' ' + role) {
                        $(this).css('display', 'none');
                    }
                });
                Multiselect.Refresh();
            }
        }
    });
}

window.initUserCreate = initUserCreate;
window.initUserEdit = initUserEdit;
