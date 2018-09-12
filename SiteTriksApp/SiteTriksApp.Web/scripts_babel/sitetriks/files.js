'use strict';

function initFilesEdit(expirationDate, libraryAllowed) {
    var $inputFile = $('#input-update-file');
    var $dateTimePicker = $('#date-picker');
    var $title = $('#title');
    var $altText = $('#alt');
    var $notifier = $('#alerts');

    $dateTimePicker.datetimepicker({
        minDate: new Date()
    }).val(expirationDate);

    var libraryAllowed = replaceAll(replaceAll(libraryAllowed, '*', ''), ',', '|');

    if ($inputFile[0].files.length === 1) {
        editFileDisplayImage.apply($inputFile);
    }

    bindEvents();

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
            $title.val(fileName);
            $altText.val(fileName);
            $('.display-image').attr('src', window.URL.createObjectURL(file));
        }
    }

    function submitFileForm(ev) {
        Loader.show('#fff');
        var flag = false;

        if (!Validator.validate($title, 'Name must be atleast 3 characters!', function (val) {
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
                        containerId: '#alerts',
                        message: res.message,
                        status: 'danger'
                    });
                }
            });
        } else {
            Loader.hide();
        }

        ev.preventDefault();
        return false;
    };

    $('.thumbnail-image-delete').on('click', function () {
        var id = $(this).attr("data-id");
        var $wrapper = $(this).parents('.thumbnail-wrapper');

        Data.getJson({ url: '/sitetriks/files/DeleteSingleFile?id=' + id, formData: new FormData() }).then(function (res) {
            if (res.success) {
                $wrapper.remove();
                Notifier.createAlert({
                    containerId: $notifier,
                    message: "Successfully deleting a thumbnail",
                    status: 'success'
                });
            } else {
                Notifier.createAlert({
                    containerId: $notifier,
                    message: "We were unable to delete this thumbnail",
                    status: 'danger'
                });
            }
        });
    });

    $('#generate-thumbnails').on('click', function () {
        var id = $(this).attr("data-fileId");

        Data.postJson({ url: '/sitetriks/files/GenerateThumbnailsForFile', data: id }).then(function (res) {
            if (res.success) {
                Notifier.createAlert({
                    containerId: $notifier,
                    message: "Successfully regenerated thumbnails",
                    status: 'success'
                });
                location.reload();
            } else {
                Notifier.createAlert({
                    containerId: $notifier,
                    message: "We were unable to generate thumbnails for the image.",
                    status: 'danger'
                });
            }
        });
    });

    function openDatePicker() {
        $dateTimePicker.focus();
    }

    function bindEvents() {
        $inputFile.on('change', editFileDisplayImage);
        $('#submit-form').on('submit', submitFileForm);
        $dateTimePicker.next('span.input-group-addon').on('click', openDatePicker);
    }

    function dispose() {
        $inputFile.off('change', editFileDisplayImage);
        $('#submit-form').off('submit', submitFileForm);
        $dateTimePicker.next('span.input-group-addon').off('click', openDatePicker);
    }
}