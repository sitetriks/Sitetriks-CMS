'use strict';

function initFilesEdit(expirationDate, libraryAllowed) {
    var $notifier = '#file-edit-notfier';

    $('#date-picker').datetimepicker({
        minDate: new Date()
    }).val(expirationDate);

    $('.date-picker-group span').on('click', function () {
        $('#date-picker').focus();
    });

    var libraryAllowed = replaceAll(replaceAll(libraryAllowed, '*', ''), ',', '|');

    $('#input-update-file').on('change', editFileDisplayImage);

    function editFileDisplayImage(ev) {
        var file = $(this)[0].files[0];

        var regExp = new RegExp(libraryAllowed);

        if (!regExp.test(file.name) && !regExp.test(file.type)) {
            Notifier.createAlert({
                containerId: '#alerts',
                status: 'danger',
                title: 'Error',
                message: file.name + ' file type is not supported by selected library and will not be uploaded!'
            });

            return;
        } else {
            var fileName = file.name.substring(0, file.name.lastIndexOf('.'));
            $('#title').val(fileName);
            $('#alt').val(fileName);
            $('.display-image').attr('src', window.URL.createObjectURL(file));
        }
    }

    if ($('#input-update-file')[0].files.length === 1) {
        editFileDisplayImage.apply($('#input-update-file'));
    }

    $('#submit-form').on('submit', function (evt) {
        Loader.show('#fff');
        var flag = false;

        if (!Validator.validate($('#title'), 'Name must be atleast 3 characters!', function (val) {
            return Validator.hasMinimumLength(val.trim(), 3);
        })) {
            flag = true;
        }

        if (!flag) {
            Data.postForm({ url: '/sitetriks/files/edit', formData: new FormData(this) }).then(function (res) {
                if (res.success) {
                    location.replace('/sitetriks/libraries');
                } else {
                    Loader.hide();

                    Notifier.createAlert({
                        containerId: $notifier,
                        message: res.message,
                        status: 'danger'
                    });
                }
            });
        } else {
            Loader.hide();
        }

        evt.preventDefault();
        return false;
    });
}