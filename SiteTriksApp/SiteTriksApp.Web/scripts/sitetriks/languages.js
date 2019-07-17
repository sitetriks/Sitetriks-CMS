<<<<<<< HEAD
﻿import './layout.js';

import { Data } from '../common/data.js';
=======
﻿import { Data } from '../common/data.js';
>>>>>>> origin/master
import { Loader } from '../common/loader.js';
import { WarningWindow } from '../modules/warning-window.js';

function createEditLanguage(id) {
    WarningWindow.attach();
    $('#form-create-edit').on('submit', function (ev) {
        var _this = this;
        ev.preventDefault();

        let $culture = $('#input-culture');
        let $prefix = $('#input-prefix');
        let flag = true;

        if ($culture.val().length < 3) {
            $culture.next().text('Culture must be atleast 3 charecters');
            flag = false;
        }

        if ($prefix.val().length !== 2) {
            $prefix.next().text('Culture must be exactly 2 charecters');
            flag = false;
        }

        if (flag) {
            Loader.show(true);
            Data.postJson({ url: '/sitetriks/languages/validateculture', data: { id: id, culture: $culture.val() } }).then(function (res) {
                if (!res.success) {
                    $culture.next().text(res.message);
                    Loader.hide();
                }

                return res;
            }).then(function (res) {
                if (res.success) {
                    return Data.postJson({ url: '/sitetriks/languages/validateprefix', data: { id: id, prefix: $prefix.val() } }).then(function (res) {
                        if (!res.success) {
                            $prefix.next().text(res.message);
                            $prefix.css('border', '1px solid red');
                            Loader.hide();
                        }

                        return res;
                    });
                }

                return res;
            }).then(function (res) {
                if (res.success) {
                    return Data.postForm({ url: '/sitetriks/languages/createedit', formData: new FormData(_this) });
                }

                return res;
            }).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/languages');
                } else {
                    Loader.hide();
                }
            });
        }


        return false;
    });

    $('#input-culture').on('change keydown paste input', function (ev) {
        let $culture = $(this);
        let pattern = $culture.val();

        if ($culture.val().length < 3) {
            $culture.next().text('Culture must be atleast 3 charecters');
            $culture.css('border', '1px solid red');
        } else {
            $culture.next().text('');
            $culture.css('border', '1px solid green');
        }

        if (pattern.length >= 3) {
            $('#input-culture').autocomplete({
                source: function (request, response) {
                    Data.getJson({ url: '/sitetriks/languages/getcultures?pattern=' + pattern }).then(function (data) {
                        response(data.cultures);
                    });
                },
                minLength: 3
            });
        }
    });

    $('#input-prefix').on('change keydown paste input', function (ev) {
        let $prefix = $(this);
        let pattern = $prefix.val();

        if ($prefix.val().length !== 2) {
            $prefix.next().text('Culture must be exactly 2 charecters');
            $prefix.css('border', '1px solid red');
        } else {
            $prefix.next().text('');
            $prefix.css('border', '1px solid green');
        }
    });
}

window.createEditLanguage = createEditLanguage;
