'use strict';

function createDiscussion() {
    textEditor.initWithoutImages('#content', 500, 300);

    $('#create-discussion').on('submit', function (evt) {
        evt.preventDefault();

        hideError();

        var areFieldsValid = validateAllFields('', '#create-discussion');

        if (areFieldsValid === false) {
            return;
        }

        $('#content').val(tinymce.activeEditor.getContent());

        var form = $(this)[0];
        var formData = new FormData(form);

        $.ajax({
            url: this.action,
            type: this.method,
            data: formData,
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
            success: function success(response) {
                if (response.success) {
                    window.location.replace('/forum/discussions');
                } else {
                    showError(response.message);
                }
            }
        });

        return false;
    });
}

function editDiscussion() {
    $('#edit-discussion').on('submit', function (evt) {
        evt.preventDefault();

        hideError();

        var areFieldsValid = validateAllFields('', '#create-discussion');

        if (areFieldsValid === false) {
            return;
        }

        $('#content').val(tinymce.activeEditor.getContent());

        var form = $(this)[0];
        var formData = new FormData(form);

        $.ajax({
            url: this.action,
            type: this.method,
            data: formData,
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
            success: function success(response) {
                if (response.success) {
                    window.location.replace('/forum/discussions');
                } else {
                    showError(response.message);
                }
            }
        });

        return false;
    });
}