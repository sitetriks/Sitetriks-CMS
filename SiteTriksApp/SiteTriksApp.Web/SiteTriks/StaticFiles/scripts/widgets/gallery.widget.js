import { Data } from '../common/data.js';
import { Notifier } from '../common/notifier.js';
import { FileHandler } from '../modules/file-handler';

export function gallery({ mediator, logger }) {
    let fileHandler;

    function init() {
        // TODO: move to event once widgets communicate with mediator
        if (fileHandler && fileHandler.dispose) {
            fileHandler.dispose();
        }

        fileHandler = FileHandler($('.widget-dialog .gallery-images'), ['Select'], '', mediator, logger, true);
       // $('#gallery-source a#images').trigger('click');
    }

    function show(element) {
        let galleryConfig = JSON.parse(element);
        let fieldId = 'image';
        let $field = $('#' + fieldId);
        $field.val(galleryConfig.ids);
        if (galleryConfig.imagesFullInfo) {
            $('#selectedImages').attr('data-selectedImages', galleryConfig.imagesFullInfo);
        }

        $('#input-width').val(galleryConfig.width);
        $('#input-height').val(galleryConfig.height);
        $('#gallery-source').data('source-type', galleryConfig.type);
        $('#gallery-show-type option[value=' + galleryConfig.showType + ']').attr('selected', 'selected');

        if (galleryConfig.type === 'images') {
            let imagesLinksIds = galleryConfig.ids.split(';');

            for (let i = 0; i < imagesLinksIds.length; i++) {
                if (imagesLinksIds[i]) {
                    createImageView(fieldId, imagesLinksIds[i]);
                }
            }
        }

        // TODO: move to event once widgets communicate with mediator
        init();

        // TODO: Redo with promise after file handler initialization.
        setTimeout(function () {
            mediator.dispatch('populatedSelected', JSON.parse(JSON.parse(galleryConfig.imagesFullInfo)));
        }, 1000);
    }

    function save() {
        let currentType = $('#gallery-source').data('source-type');
        let showType = $('#gallery-show-type option:selected').val();
        let ids = $('#image').val();
        let imagesFullInfo = $('#selectedImages').attr('data-selectedImages');

        if (currentType === 'library') {
            ids = $('#gallery-libs').val();
        }

        if (ids.indexOf(';') !== -1 && currentType === 'library') {
            return null;
        }

        if (!ids) {
            return null;
        }

        return JSON.stringify({
            ids: ids,
            width: $('#input-width').val(),
            height: $('#input-height').val(),
            type: currentType,
            showType: showType,
            imagesFullInfo: imagesFullInfo
        });
    }

    $('body').on('click', '#btn-select-library', function (e) {
        $('#image').val($('#gallery-libs').val());

        Notifier.createAlert({
            containerId: '#file-handler-notfier',
            message: 'Library was selected!',
            status: 'success'
        });
    });

    $('body').on('click', '#gallery-source>a', function (e) {
        let source = $(this).attr('id');
        $('#gallery-source').data('source-type', source);
        $('.gallery-button').removeClass('selected');
        //$('#' + source).hide();
        switch (source) {
            case 'images':
                //showChoice();
                $('.gallery-library').hide();
                $('.gallery-images').show();
                $('#images').addClass('selected');
                break;
            case 'library':
                $('#library').addClass('selected');
               // $('#images').show();
                //files = [];
                //uploadedFiles = [];
                $('#files-container').html('');
                $('#files-list').html('');
                $('#choice-file').hide();
                $('#upload-file').hide();
                //cleanUp();

                //$('.gallery-images').hide();
                $('.gallery-images').hide();
                $('.gallery-library').show();

                $('#gallery-libs').html('');

                let selected = $('#' + $('#upload-modal').attr('data-id')).val();

                Data.getJson({ url: '/sitetriks/libraries/GetAllImageLibraries' }).then(function (res) {
                    if (res.success) {
                        for (let i = 0; i < res.libraries.length; i++) {
                            $('<option></option>', {
                                value: res.libraries[i].id,
                                text: res.libraries[i].name,
                                selected: selected && selected === res.libraries[i].id
                            }).appendTo('#gallery-libs');
                        }
                    }
                }, Data.defaultError);
                break;
            default:
        }
    });

    mediator.on('filesUploaded', selectFiles, 'displayUploadedImage', 'GalleryWidget');
    mediator.on('filesSelected', selectFiles, 'displaySelectedImage', 'GalleryWidget');

    function selectFiles(data) {
        let $images = $('.gallery-widget #image');

        let currentImages = $images.val();
        console.log(currentImages);
        let $mainContainer = $('.gallery-main-image-container');

        if (currentImages) {
            if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
                currentImages += ';';
            }

            $images.val(data.fileIds.join(';'));
        } else {
            $images.val(data.fileIds.join(';'));
        }

        $mainContainer.html('');

        for (let i = 0; i < data.fileIds.length; i += 1) {
            console.log(data.fileIds[i]);
            createImageView('image', data.fileIds[i], $mainContainer);
        }
    }

    function createImageView(fieldId, imgLinkId, $mainContainer) {
        let $container = $('<div class="news-listed-images-container"></div>');
        let $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="fa fa-times"></span></div>');
        let $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

        $container.append($deleteBtn)
            .append($img)
            .appendTo($mainContainer);
    }

    return {
        add: init,
        edit: show,
        save,
        validate: function () {
            let type = $('#gallery-source').data('source-type');
            let result = { isValid: false };
            if (type === 'library') {
                result.isValid = !!$('#gallery-libs').val();
                result.message = 'Must select library first!';
            } else {
                result.isValid = !!$('#image').val();
                result.message = 'Must select images!';
            }

            return result;
        }
    };
}
