'use strict';

/* globals Data, Loader, Validator */

function initEndpointCreateEdit(selectedType, selectedJoinTable, selectedJoinKey, selectedColumn) {
    $('#select-request-type').on('change', function (ev) {
        var $trigger = $(this);
        if ($trigger.val() === 'GET') {
            $('.section-get').show();
        } else {
            $('.section-get').hide();
        }
    }).trigger('change');

    var $selectType = $('#select-type');
    Loader.show('#fff');
    Data.getJson({ url: '/sitetriks/endpoints/gettables' }).then(function (res) {
        if (res.success) {
            for (var i = 0; i < res.tables.length; i++) {
                $('<option></option>', {
                    value: res.tables[i],
                    text: res.tables[i],
                    selected: selectedJoinTable && selectedJoinTable.toLowerCase() === res.tables[i].toLowerCase()
                }).appendTo('#select-join-table');

                $('<option></option>', {
                    value: res.tables[i],
                    text: res.tables[i],
                    selected: selectedType && selectedType.toLowerCase() === res.tables[i].toLowerCase()
                }).appendTo($selectType);
            }
        }

        Loader.hide();
        return res;
    }).then(function (res) {
        if (res.success) {
            $selectType.trigger('change');
        }
    });

    $selectType.on('change', function (ev) {
        var table = $(this).val();
        var $select = $('#select-join-key');
        $select.html('');

        if (table) {
            Loader.show('#fff');

            Data.getJson({ url: '/sitetriks/endpoints/getcolumns?table=' + table }).then(function (res) {
                if (res.success) {
                    for (var i = 0; i < res.columns.length; i++) {
                        $('<option></option>', {
                            value: res.columns[i],
                            text: res.columns[i],
                            selected: selectedJoinKey && selectedJoinKey === res.columns[i]
                        }).appendTo($select);

                        $('<option></option>', {
                            value: res.columns[i],
                            text: res.columns[i],
                            selected: selectedColumn && selectedColumn === res.columns[i]
                        }).appendTo('#select-column');
                    }
                }

                Loader.hide();
            });
        }
    });

    $('#form-endpoint').on('submit', function (ev) {
        var flag = false;

        if (!Validator.validate($('#select-type'), 'Type must be selected!', function (val) {
            return !!val;
        })) {
            flag = true;
        }

        $('.input-name').each(function (_, element) {
            if (!Validator.validate($(element), 'Name must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) {
                return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3);
            })) {
                flag = true;
            }
        });

        if ($('#select-request-type').val() === 'GET') {
            if (!Validator.validate($('#select-column'), 'Column is required! Type must be selected first!', function (val) {
                return !!val;
            })) {
                flag = true;
            }

            $('.input-joinfields').each(function (_, element) {
                var value = $(element).val();
                if (value && value.trim()) {
                    if (!Validator.validate($(element), 'JoinFields can contain only english letters, numbers and semicolon!', function (val) {
                        return Validator.isAlphaNumericAndSemicolon(val);
                    })) {
                        flag = true;
                    }
                } else {
                    if (!Validator.validate($(element), '', function (val) {
                        return true;
                    })) {
                        flag = true;
                    }
                }
            });

            $('.input-paging').each(function (_, element) {
                var value = $(element).val();
                if (value && value.trim()) {
                    if (!Validator.validate($(element), 'Must be positive number or zero!', function (val) {
                        return Validator.isInteger(val) && +val >= 0;
                    })) {
                        flag = true;
                    }
                } else {
                    if (!Validator.validate($(element), '', function (val) {
                        return true;
                    })) {
                        flag = true;
                    }
                }
            });
        }

        if (flag) {
            ev.preventDefault();
            return false;
        }
    });
}