import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { Tags } from '../tags.js';
import { Multiselect } from '../common/multiselect-setup.js';
import { WarningWindow } from '../modules/warning-window.js';
import { Handlebars } from '../common/handlebars.js';

export function createPage(validateUrlUrl) {
    Utils.populateUrl('#title', '#url', validateUrlOnChange);
    WarningWindow.attach();
    Multiselect.SetupElement($('.multiselect-roles'));

    $('#date-picker').datetimepicker({
        defaultDate: '',
        minDate: new Date()
    });

    $('#date-picker').val('');
    countSEOWords.apply($('#seo-words'));

    Tags.init();

    $('.date-picker-group span').on('click', function () {
        $('#date-picker').focus();
    });

    $('#seo-words').on('input change', countSEOWords);

    function countSEOWords(ev) {
        let $trigger = $(this);
        let words = $trigger.val().split(',');
        if (words.length === 1 && words[0].trim().length === 0) {
            $('#seo-words-counter').text('');
        } else {
            $('#seo-words-counter').text('Words: ' + words.length);
        }
    }

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');

    var timer = 0;
    $urlField.on('input', function (e) {
        validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                Validator.validateUrl(validateUrlUrl + url, $urlField, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css('border', '1px solid red');
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $('.title-field').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css('border', '1px solid green');
            $target.next('span').text('');
        } else {
            $target.css('border', '1px solid red');
            $target.next('span').text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#create-page-form').on('submit', function (evt) {
        var _this = this;

        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each((_, element) => {
            if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
                flag = true;
            }
        });

        if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) { return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (flag) {
            evt.preventDefault();
            return false;
        }

        //let dateVal = $('#date-picker').val();

        //if (!!dateVal) {
        //    let dateToBePublished = new Date(dateVal);

        //    if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
        //        evt.preventDefault();
        //        $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
        //        return false;
        //    }
        //}

        Loader.show(true);

        $btnSubmit.attr('disabled', true);
        Data.getJson({ url: validateUrlUrl + url }).then(function (res) {
            if (res.success) {
                $btnSubmit.attr('disabled', false);
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                Validator.validate($urlField, 'Url is invalid or already in use!', function (val) { return false; });

                Loader.hide();
                return Promise.reject('Url is invalid or already in use!');
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {
                window.location.replace('/sitetriks/pages/editcontent?url=' + res.url);
            } else {
                $notfier.text(res.message);
                Loader.hide();
            }

            $btnSubmit.attr('disabled', false);
        }, function (error) {
            console.warn(error);
            $btnSubmit.attr('disabled', false);
            $notfier.text(error);
        });

        evt.preventDefault();
        return false;
    });
}

export function editPage(validateUrlUrl, mlf, pageId, mlfUrl, initialUrl) {
    Utils.populateUrl('#title', '#url', validateUrlOnChange);
    WarningWindow.attach();
    Multiselect.SetupElement($('.multiselect-roles'));

    Data.getJson({ url: '/templates/page-multilingual.html' }).then(function (res) {
        for (var key in mlf) {
            $('<option></option>', {
                value: key,
                text: key
            }).appendTo('#languages');
        }

        let template = Handlebars.compile(res);

        $('#languages').on('change', function (ev) {
            let lang = $(this).val();

            if (!lang) {
                $('#mlf-info').html('');
                $('#backend-info').show();
            } else {
                $('#backend-info').hide();

                let current = mlf[lang];
                let html = template({ lang, title: current.Title });

                $('#mlf-info').html(html);
            }
        });
    });

    $('.date-picker-group span').on('click', function () {
        $('#date-picker').focus();
    });

    $('#date-picker').datetimepicker({
        minDate: new Date()
    }).val('');

    Tags.init();

    $('#seo-words').on('input change', countSEOWords);
    countSEOWords.apply($('#seo-words'));

    function countSEOWords(ev) {
        let $trigger = $(this);
        let words = $trigger.val().split(',');
        if (words.length === 1 && words[0].trim().length === 0) {
            $('#seo-words-counter').text('');
        } else {
            $('#seo-words-counter').text('Words: ' + words.length);
        }
    }

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');

    var timer = 0;
    $urlField.on('input', function (e) {
        return validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }
        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                return Validator.validateUrl(validateUrlUrl + url + '&id=' + pageId, $urlField, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css('border', '1px solid red');
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $('.title-field').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css('border', '1px solid green');
            $target.next('span').text('');
        } else {
            $target.css('border', '1px solid red');
            $target.next('span').text('Tittle must be atleast 3 symbols!');
        }
    });

    $('.btn-save-and-exit').on('click', function (ev) {
        $('#edit-page-form').attr('data-exit', true);
    });

    var $notfier = $('#notifier');
    $('#edit-page-form').on('submit', function (evt) {
        var _this = this;
        let $target = $(this);
        let saveAndExit = $target.attr('data-exit');

        //--------------------------------------------------------
        // multi lingual fields logic
        let lang = $('#languages').val();
        if (lang) {
            Loader.show('#fff');

            let $fields = $(`[data-lang="${lang}"]`);
            let body = { lang: lang, parentId: pageId };
            $fields.each(function (index, element) {
                let name = $(element).attr('data-name');
                let value = $(element).val();
                body[name] = value;
            });

            Data.postJson({ url: mlfUrl, data: body }).then(function (res) {
                if (res.success) {
                    if (saveAndExit) {
                        window.location.replace('/sitetriks/pages');
                    }

                    WarningWindow.attach();
                    mlf = res.mlf;
                    Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' });
                } else {
                    Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: 'Page was not updated!', status: 'danger' });
                    $target.removeAttr('data-exit');
                }

                Loader.hide();
            });

            evt.preventDefault();
            return false;
        }

        //--------------------------------------------------------

        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        $('.title-field').each((_, element) => {
            if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
                flag = true;
            }
        });

        if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) { return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (flag) {
            evt.preventDefault();
            return false;
        }

        //let dateVal = $('#date-picker').val();

        //if (!!dateVal) {
        //    let dateToBePublished = new Date(dateVal);

        //    if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
        //        evt.preventDefault();
        //        $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
        //        return false;
        //    }
        //}

        Loader.show(true);

        $btnSubmit.attr('disabled', true);
        Data.getJson({ url: validateUrlUrl + url + '&id=' + pageId }).then(function (res) {
            if (res.success) {
                $btnSubmit.attr('disabled', false);
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                Validator.validate($urlField, res.message, function (val) { return false; });
                $target.removeAttr('data-exit');
                Loader.hide();
                return Promise.reject(res.message);
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {
                if (saveAndExit) {
                    window.location.replace('/sitetriks/pages');
                    return;
                }

                WarningWindow.attach();
                Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' });
                if (url !== initialUrl) {
                    // update url if
                    if (window.history.replaceState) {
                        window.history.replaceState('', '', '/sitetriks/pages/edit?url=' + url);
                    } else {
                        // reload with new url for older browsers
                        window.location.replace('/sitetriks/pages/edit?url=' + url);
                    }
                }
            } else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: res.message, status: 'danger' });
                $target.removeAttr('data-exit');
            }

            $(window).scrollTop(0);
            Loader.hide();

            $btnSubmit.attr('disabled', false);
        }, function (error) {
            console.warn(error);
            $btnSubmit.attr('disabled', false);
            $notfier.text(error);
        });

        evt.preventDefault();
        return false;
    });
}

window.createPage = createPage;
window.editPage = editPage;
