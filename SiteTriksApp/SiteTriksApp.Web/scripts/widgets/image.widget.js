import { FileHandler } from '../modules/file-handler';

export function image({ mediator, logger }) {
    let fileHandler;

    function init() {
        // TODO: move to event once widgets communicate with mediator
        if (fileHandler && fileHandler.dispose) {
            fileHandler.dispose();
        }

        fileHandler = FileHandler($('.file-handler-wrapper'), ['Upload', 'Select', 'Selected'], '', mediator, logger, false);
    }

    function show(element) {
        let parsedElement = JSON.parse(element);
        let id = parsedElement.id;
        init();

        if (parsedElement.width) {
            $('#input-width').val(parsedElement.width);
        }

        if (parsedElement.height) {
            $('#input-height').val(parsedElement.height);
        }
        $('#image').val(id);

        if (id) {
            createImageView('image', id);
        }

        if (parsedElement.imagesFullInfo) {
            $('#selectedImages').attr('data-selectedImages', parsedElement.imagesFullInfo);
        }

        setTimeout(function () {
            mediator.dispatch('populatedSelected', JSON.parse(JSON.parse(parsedElement.imagesFullInfo)));
        }, 500);
    }

    function save() {

        let id = $('#image').val();
        let imagesFullInfo = $('#selectedImages').attr('data-selectedImages');
        if (id) {
            return JSON.stringify({
                id: id,
                imagesFullInfo: imagesFullInfo,
                width: $('#input-width').val(),
                height: $('#input-height').val()
            });
        }

        return null;
    }

    // TODO: move to utils or another helper module
    $(document).on('click', '.news-listed-image-delete', function () {
        let $trigger = $(this);
        let imgId = $trigger.attr('data-id');
        let fieldId = $trigger.attr('data-field');

        if (fieldId && fieldId !== '') {
            let currentImages = $('#' + fieldId).val();
            if (currentImages) {
                $('#' + fieldId).val(currentImages.replace(imgId, ''));
            }
        }

        $trigger.parent().remove();
    });

    function createImageView(fieldId, imgLinkId) {
        let $selectedImageContainer = $('.file-handler-Selected');
        let $container = $('<div class="news-listed-images-container"></div>');
        let $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="fa fa-times"></span></div>');
        let $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

        $selectedImageContainer.html('');

        $container.append($deleteBtn)
            .append($img)
            .appendTo($selectedImageContainer);
    }

    mediator.on('filesUploaded', selectFiles, 'displayUploadedImage', 'ImageWidget');
    mediator.on('filesSelected', selectFiles, 'displaySelectedImage', 'ImageWidget');

    function selectFiles(data) {

        $('.image-widget #image-container').html('');
        $('.image-widget #image').val(data.fileIds[0]);
        createImageView('image', data.fileIds[0]);
    }

    return {
        add: init,
        edit: show,
        save,
        validate: function () {
            return {
                isValid: !!$('#image').val(),
                message: 'You must select an image!'
            };
        }
    };
}
