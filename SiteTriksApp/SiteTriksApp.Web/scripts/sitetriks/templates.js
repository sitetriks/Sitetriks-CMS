<<<<<<< HEAD
﻿import './layout.js';
import 'jquery-ui';
import 'eonasdan-bootstrap-datetimepicker';

import { Data } from '../common/data.js';
=======
﻿import { Data } from '../common/data.js';
>>>>>>> origin/master
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { WarningWindow } from '../modules/warning-window.js';

function createTemplate(checkValidUrlLink) {
    WarningWindow.attach();
    $(document).ready(function () {
        Utils.populateUrl('#title', '#url', validateUrlOnChange);
    });

    $(function () {
        $('#date-picker').datetimepicker({
            defaultDate: '',
            minDate: new Date()
        });

        $('#date-picker').val('');
    });

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
                Validator.validateUrl(checkValidUrlLink + '?url=' + url, $urlField, $btnSubmit);
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
            $target.siblings('strong').children('span').text('');
        } else {
            $target.css('border', '1px solid red');
            $target.siblings('strong').children('span').text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#create-page-form').on('submit', function (evt) {
        var _this = this;

        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        if (flag) {
            evt.preventDefault();
            $notfier.text('Titles are required and must be atleast 3 characters long!');
            return false;
        }

        if (url.length < 3) {
            evt.preventDefault();
            $notfier.text('Please provide valid information in the required fields!');
            return false;
        }

        let dateVal = $('#date-picker').val();

        if (!!dateVal) {
            let dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
                evt.preventDefault();
                $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
                return false;
            }
        }

        Loader.show(true);

        $btnSubmit.attr('disabled', true);

        Data.getJson({ url: checkValidUrlLink + '?url=' + url }).then(function success(res) {
            if (res.success) {
                $btnSubmit.attr('disabled', false);
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                $urlField.css('border', '1px solid red');
                $urlValidation.text('Url is invalid or already in use!');
                Loader.hide();
                return Promise.reject();
            }
        }).then(function success(res) {
            if (res.success) {
                window.location.replace('/sitetriks/templates/editcontent?url=' + res.url);
            } else {
                $notfier.text(res.message);
                Loader.hide();
            }

            $btnSubmit.attr('disabled', false);
        });

        evt.preventDefault();
        return false;
    });
}

function editTemplate(templateId, checkValidUrlLink) {
    WarningWindow.attach();
    $(document).ready(function () {
        Utils.populateUrl('#title', '#url', validateUrlOnChange);
    });

    $(function () {
        $('#date-picker').datetimepicker({
            minDate: new Date()
        });

        $('#date-picker').val('');
    });

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
                return Validator.validateUrl(checkValidUrlLink + '?url=' + url + '&id=' + templateId, $urlField, $urlValidation, $btnSubmit);
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
            $target.siblings('strong').children('span').text('');
        } else {
            $target.css('border', '1px solid red');
            $target.siblings('strong').children('span').text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#edit-page-form').on('submit', function (evt) {
        var _this = this;

        window.onbeforeunload = null;
        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        if (flag) {
            evt.preventDefault();
            $notfier.text('Titles required and must be atleast 3 characters long!');
            return false;
        }

        if (url.length < 3) {
            evt.preventDefault();
            $notfier.text('Please provide valid information in the required fields!');
            return false;
        }

        let dateVal = $('#date-picker').val();

        if (!!dateVal) {
            let dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
                evt.preventDefault();
                $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
                return false;
            }
        }

        Loader.show(true);

        $btnSubmit.attr('disabled', true);
        Data.getJson({ url: checkValidUrlLink + '?url=' + url + '&id=' + templateId }).then(function success(res) {
            if (res.success) {
                $btnSubmit.attr('disabled', false);
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                $urlField.css('border', '1px solid red');
                $urlValidation.text('Url is invalid or already in use!');
                Loader.hide();
                return Promise.reject();
            }
        }).then(function success(res) {
            if (res.success) {
                window.location.replace('/sitetriks/templates/editcontent?url=' + res.url);
            } else {
                $notfier.text(res.message);
                Loader.hide();
            }

            $btnSubmit.attr('disabled', false);
        });

        evt.preventDefault();
        return false;
    });
}

window.createTemplate = createTemplate;
window.editTemplate = editTemplate;
