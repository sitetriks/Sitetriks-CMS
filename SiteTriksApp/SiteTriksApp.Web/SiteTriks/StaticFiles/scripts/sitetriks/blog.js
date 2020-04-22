import './layout.js';

import { WarningWindow } from '../modules/warning-window.js';
import { Comments } from '../comments.js';
import { textEditor } from '../text-editor.js';
import { setupAjaxForm } from './helpers.js';
import { DateConversion } from '../common/date-conversion.js';
import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Utils } from '../common/utils.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { loadHandlebarsTemplates } from '../common/handlebars.js';
import { FileHandler } from '../modules/file-handler.js';

function blogDetails(id) {
    Comments.init(id, $('#comments-container'), 'blog-comment-area');
    WarningWindow.attach();
    let element = document.querySelector('.comment-date');
    element.textContent = DateConversion.convertUtcToLocal(element.getAttribute('data-original-date'));
}

function blogForm() {
    textEditor.init('#summary-area', 500, 150);
    textEditor.init('#content-area', 500, 300);

    setupAjaxForm('#blog-form', '/sitetriks/blog');
    WarningWindow.attach();
}


let Blog = (function () {

    function create(mediator, logger) {
        let $modal = $('#file-upload-modal');
        let $container = $modal.find('.file-handler-wrapper');
        let fileHandler = FileHandler($container, ['Upload', 'Select', 'Selected'], '', mediator, logger, true);

        //Classes and 
        let containerClass = '.blog-container';
        let createFormClass = '.blog-create-form';


        let $titleInput;
        let $summaryInput;
        let $contentInput;
        let $mainImageInput = $('#en-main-image');

        let common = blogCommon(mediator, logger, $mainImageInput);

        let validateInput = Validator.createFieldsValidation();

        bindEvents();

        logger.log(common);

        function submitCreate(ev) {
            let flag = validateInput.apply($(this));
            ev.preventDefault();

            if (flag) {
                let form = ev.target;
                logger.log(form);

                Loader.show(true);

                Data.postForm({ url: form.action, formData: new FormData(form) }).then(function (res) {
                    if (res.success) {
                        window.location.replace('/sitetriks/blog');
                    } else {
                        mediator.dispatch('alert', { selector: '#alerts', message: res.message, status: 'danger' });
                        Loader.hide();
                    }
                }, Data.defaultError);
            }
        }




        function bindEvents() {
            $(containerClass).on('submit', createFormClass, submitCreate);
            $('#btn-main-image').on('click', common.selectMainImage);

            mediator.on('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'Create.cshtml');
            mediator.on('filesSelected', common.selectFiles, 'displaySelectedFiles', 'Create.cshtml');
            mediator.on('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            $(document).on('click', '.news-listed-image-delete', common.removeImage);

            textEditor.init('#summary-area', 500, 150);
            textEditor.init('#content-area', 500, 300);
        }

        function dispose() {
            $('#btn-main-image').off('click', common.selectMainImage);

            mediator.off('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'Create.cshtml');
            mediator.off('filesSelected', common.selectFiles, 'displaySelectedFiles', 'Create.cshtml');
            mediator.off('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            $(document).off('click', '.news-listed-image-delete', common.removeImage);

            textEditor.remove('#summary-area');
            textEditor.remove('#content-area');

            fileHandler.dispose();
        }

    }

    function edit(mediator, logger) {
        let $modal = $('#file-upload-modal');
        let $container = $modal.find('.file-handler-wrapper');
        let fileHandler = FileHandler($container, ['Upload', 'Select', 'Selected'], '', mediator, logger, true);

        //Classes and 
        let containerClass = '.blog-container';
        let editFormClass = '.blog-edit-form';

        let $mainImageInput = $('#en-main-image');

        let validateInput = Validator.createFieldsValidation();

        let common = blogCommon(mediator, logger, $mainImageInput);

        bindEvents();

        function submitEdit(ev) {
            console.log(submitEdit);
            let flag = validateInput.apply($(this));
            ev.preventDefault();

            if (flag) {
                let form = ev.target;
                logger.log(form);

                Loader.show(true);

                Data.postForm({ url: form.action, formData: new FormData(form) }).then(function (res) {
                    if (res.success) {
                        window.location.replace('/sitetriks/blog');
                    } else {
                        mediator.dispatch('alert', { selector: '#alerts', message: res.message, status: 'danger' });
                        Loader.hide();
                    }
                }, Data.defaultError);
            }
        }

        function bindEvents() {
            $(containerClass).on('submit', editFormClass, submitEdit);
            $('#btn-main-image').on('click', common.selectMainImage);

            mediator.on('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'Edit.cshtml');
            mediator.on('filesSelected', common.selectFiles, 'displaySelectedFiles', 'Edit.cshtml');
            mediator.on('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            $(document).on('click', '.news-listed-image-delete', common.removeImage);

            textEditor.init('#summary-area', 500, 150);
            textEditor.init('#content-area', 500, 300);
        }

        function dispose() {
            $('#btn-main-image').off('click', common.selectMainImage);
            $(containerClass).off('submit', editFormClass, submitEdit);


            mediator.off('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'Edit.cshtml');
            mediator.off('filesSelected', common.selectFiles, 'displaySelectedFiles', 'Edit.cshtml');
            mediator.off('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            $(document).off('click', '.news-listed-image-delete', common.removeImage);

            textEditor.remove('#summary-area');
            textEditor.remove('#content-area');

            fileHandler.dispose();
        }
    }

    function blogCommon(mediator, logger, $mainImageInput) {


        function selectMainImage(ev) {
            mediator.dispatch('fileHandlerTypeChange', { type: 'single', requester: 'main-image' });
            mediator.dispatch('populatedSelected');
        }

        function selectFiles(data) {
            logger.log(data);
            if (data.requester === 'main-image') {
                logger.log(data.fileIds[0]);

                $mainImageInput.val(data.fileIds[0]);
                let mainImgInputId = $mainImageInput.attr('id');
                console.log(mainImgInputId);
                $(`#${mainImgInputId}-container`).html('');
                createImageView(mainImgInputId, data.fileIds[0], $(`#${mainImgInputId}-container`));
            }

            $('#file-upload-modal').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

        function createImageView(fieldId, imgLinkId, $mainContainer) {
            let $container = $('<div class="news-listed-images-container"></div>');
            let $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="fa fa-times"></span></div>');
            let $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

            $container.append($deleteBtn)
                .append($img)
                .appendTo($mainContainer);
        }

        function removeImage(ev) {
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
        }

        return {
            selectMainImage,
            selectFiles,
            createImageView,
            removeImage
        }
    }

    return {
        create,
        edit
    }

})();

window.Blog = Blog;



window.blog = {
    details: blogDetails,
    setupForm: blogForm
};
