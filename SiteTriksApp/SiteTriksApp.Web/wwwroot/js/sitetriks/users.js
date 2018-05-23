function initUserCreate() {
    Multiselect.Setup("multiselect-roles", function (option, checked, select) {
        var opselected = $(option).text();
        if (checked == true) {
            if (opselected == "Admin") {
                $("#multiselect-roles option").each(function (index) {
                    if ($(this).text() != "Admin") {
                        $("#multiselect-roles").multiselect("deselect", $(this).val());
                    }
                });
                $(".checkbox").each(function (index) {
                    if ($(this).text() != " Admin" && $(this).text() != " SuperAdmin") {
                        $(this).css("display", "none");
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected == "SuperAdmin") {
                $("#multiselect-roles option").each(function (index) {
                    if ($(this).text() != "SuperAdmin") {
                        $("#multiselect-roles").multiselect("deselect", $(this).val());
                    }
                });

                $(".checkbox").each(function (index) {
                    if ($(this).text() != " SuperAdmin") {
                        $(this).css("display", "none");
                    }
                });
                Multiselect.Refresh();
            }
        }
        if (checked == false) {
            if (opselected == "Admin") {
                $(".checkbox").each(function (index) {
                    if ($(this).text() != " Admin" && $(this).text() != " SuperAdmin") {
                        $(this).css("display", "block");
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected == "SuperAdmin") {
                $(".checkbox").each(function (index) {
                    if ($(this).text() != " SuperAdmin") {
                        $(this).css("display", "block");
                    }
                });
                Multiselect.Refresh();
            }
        }
    });

    $('input[type=submit]').on('click', function (e) {
        let flag = true;

        if (!Validator.validate($('#email'), 'Invalid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }

    });
}

function initUserEdit() {
    Multiselect.Setup("multiselect-roles", function (option, checked, select) {
        var opselected = $(option).text();
        if (checked == true) {
            if (opselected == "Admin") {
                $("#multiselect-roles option").each(function (index) {
                    if ($(this).text() != "Admin") {
                        $("#multiselect-roles").multiselect("deselect", $(this).val());
                    }
                });
                $(".checkbox").each(function (index) {
                    if ($(this).text() != " Admin" && $(this).text() != " SuperAdmin") {
                        $(this).css("display", "none");
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected == "SuperAdmin") {
                $("#multiselect-roles option").each(function (index) {
                    if ($(this).text() != "SuperAdmin") {
                        $("#multiselect-roles").multiselect("deselect", $(this).val());
                    }
                });

                $(".checkbox").each(function (index) {
                    if ($(this).text() != " SuperAdmin") {
                        $(this).css("display", "none");
                    }
                });
                Multiselect.Refresh();
            }
        }
        if (checked == false) {
            if (opselected == "Admin") {
                $(".checkbox").each(function (index) {
                    if ($(this).text() != " Admin" && $(this).text() != " SuperAdmin") {
                        $(this).css("display", "block");
                    }
                });
                Multiselect.Refresh();
            }
            if (opselected == "SuperAdmin") {
                $(".checkbox").each(function (index) {
                    if ($(this).text() != " SuperAdmin") {
                        $(this).css("display", "block");
                    }
                });
                Multiselect.Refresh();
            }
        }
    });

    $('input[type=submit]').on('click', function (e) {
        let flag = true;
        console.log("lakdjaskldja");
        if (!Validator.validate($('#email'), 'Invalid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
    });

    initialDeselect("SuperAdmin");
    initialDeselect("Admin");
}

function initialDeselect(role) {
    var rolesIds = $("#multiselect-roles").val();
    $("#multiselect-roles option").each(function (index) {
        if ($(this).text() == role) {
            if (jQuery.inArray($(this).val(), rolesIds) !== -1) {
                $(".checkbox").each(function (index) {
                    if ($(this).text() != " " + role) {
                        $(this).css("display", "none");
                    }
                });
                Multiselect.Refresh();
            }
        }
    });
}