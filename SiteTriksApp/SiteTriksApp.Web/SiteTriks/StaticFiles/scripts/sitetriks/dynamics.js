import './layout.js';

import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { handleApplicationRestart } from '../restart-app.js';
import { FileHandler } from '../modules/file-handler.js';
import { WarningWindow } from '../modules/warning-window.js';
import { textEditor } from '../text-editor.js';

function createClass(assemblyName) {
    let $fieldsContainer = $('#fields-container');
    let $inputTitle = $('#input-class-title');
    let $form = $('#form-create-class');
    let template = '';

    Loader.show('#fff');
    Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        Loader.hide();
        template = res;
        bindEvents();
        WarningWindow.attach();
    });

    function addField(ev) {
        $(document.createElement('div')).html(template)
            .addClass('field-item')
            .appendTo($fieldsContainer);
    }

    function deleteField(ev) {
        $(ev.target).parents('.field-item').remove();
    }

    //A field with this name already exist. Please choose a different name.
    function customValidation($element) {
        if ($element.hasClass('validate-field-name')) {
            return Validator.validate($element, 'The field name must consist of at least 3 symbols. Please, use only alphanumeric symbols and do not use blank spaces.', function (val) {
                return Validator.hasMinimumLength(val, 3) && Validator.isAlphaNumeric(val) && Validator.isStartingWithLetter(val);
            }) && Validator.validate($element, 'Title and link are system reserved words.', function (val) {
                return val.toLocaleLowerCase() !== 'link' && val.toLocaleLowerCase() !== 'title';
            }) && Validator.validate($element, 'A field with this name already exist. Please choose a different name.',
                function (val) {
                    return Validator.validateUniquenes(val, 'validate-field-name');
                });
        }
    }

    let isFormValid = Validator.createFieldsValidation(customValidation).bind($form[0]);

    function submitCreateForm(ev) {
        Loader.show('#fff');

        if (!isFormValid()) {
            Loader.hide();

            ev.preventDefault();
            return false;
        }

        let formData = new FormData();
        let name = $('#input-class-name').val();
        let properties = [];
        $('.field-item').each((_, element) => {
            let name = $(element).find('input:text').val();
            let type = $(element).find('select').val();
            properties.push({ name, type });
        });

        if (Validator.isFunction(formData.set)) {
            formData.set('name', name);
            formData.set('title', $inputTitle.val());
            formData.set('assemblyName', assemblyName);
            formData.set('properties', JSON.stringify(properties));
        } else {
            formData.append('name', name);
            formData.append('title', $inputTitle.val());
            formData.append('assemblyName', assemblyName);
            formData.append('properties', JSON.stringify(properties));
        }

        Data.postForm({ url: '/sitetriks/dynamic/createclass', formData }).then((res) => {
            if (res.success) {
                handleApplicationRestart({});
            }
            else {
                Notifier.createAlert({ containerId: '#alerts', message: 'Dynamic class with this name already exist.', status: 'danger' });
                Loader.hide();
            }
        }, Data.defaultError);

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $fieldsContainer.on('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').on('click', addField);
        $form.on('submit', submitCreateForm);
    }

    function dispose() {
        $fieldsContainer.off('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').off('click', addField);
        $form.off('submit', submitCreateForm);
    }
}

function dynamicClassesList() {
    bindEvents();

    function deleteClass(ev) {
        let $target = $(ev.target);
        let assemblyName = $target.data('assemblyName');
        let className = $target.data('className');

        Loader.show('#fff');
        Data.getJson({ url: '/sitetriks/dynamic/deleteClass?assemblyName=' + assemblyName + '&className=' + className }).then(function success(res) {
            handleApplicationRestart({ url: '/sitetriks/dynamic' });
        });
    }

    function bindEvents() {
        $('body').on('click', '.delete-dynamic-class', deleteClass);
    }

    function dispose() {
        $('body').off('click', '.delete-dynamic-class', deleteClass);
    }
}

function editClass(modelName, assemblyName) {
    let $fieldsContainer = $('#fields-container');
    let $inputTitle = $('#input-class-title');
    let $form = $('#form-edit-class');
    let template = '';

    Loader.show('#fff');
    Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        Loader.hide();
        template = res;
        bindEvents();
        WarningWindow.attach();
    });

    function addField(ev) {
        $(document.createElement('div')).html(template)
            .addClass('field-item')
            .appendTo($fieldsContainer);
    }

    function deleteField(ev) {
        $(ev.target).parents('.field-item').remove();
    }

    function customValidation($element) {
        if ($element.hasClass('validate-field-name')) {
            return Validator.validate($element, 'Field Name must be atleast 3 symbols and alphanumeric and can not start with number! Whitespace is not alphanumeric! Field name must be different from Title!', function (val) {
                return Validator.hasMinimumLength(val, 3) && Validator.isAlphaNumeric(val) && Validator.isStartingWithLetter(val) && val !== 'Title';
            });
        }
    }

    let isFormValid = Validator.createFieldsValidation(customValidation).bind($form[0]);

    function submitEditForm(ev) {
        Loader.show('#fff');

        if (!isFormValid()) {
            Loader.hide();

            ev.preventDefault();
            return false;
        }

        let formData = new FormData();
        let newName = $('#input-class-name').val();
        let oldName = modelName;
        let properties = [];

        $('.field-item').each((_, element) => {
            let name = $(element).find('input:text').val();
            let type = $(element).find('select').val();
            properties.push({ name, type });
        });

        if (Validator.isFunction(formData.set)) {
            formData.set('oldName', oldName);
            formData.set('newName', newName);
            formData.set('title', $('#input-class-title').val());
            formData.set('assemblyName', assemblyName);
            formData.set('properties', JSON.stringify(properties));
        } else {
            formData.append('oldName', oldName);
            formData.append('newName', newName);
            formData.append('title', $('#input-class-title').val());
            formData.append('assemblyName', assemblyName);
            formData.append('properties', JSON.stringify(properties));
        }

        Data.postForm({ url: '/sitetriks/dynamic/editclass', formData }).then((res) => {
            if (res.success) {
                handleApplicationRestart({});
            }
        }, Data.defaultError);

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $fieldsContainer.on('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').on('click', addField);
        $form.on('submit', submitEditForm);
    }

    function dispose() {
        $fieldsContainer.off('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').off('click', addField);
        $form.off('submit', submitEditForm);
    }
}

var Dynamics = (function () {
    function createItem(modelName, assemblyName, logger, mediator) {
        let $modal = $('#file-upload-modal');
        let $container = $modal.find('.file-handler-wrapper');
        let fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

        let selectImages = createSelectImagesHandler(mediator);
        let displayImages = createDisplayImagesHandler($modal);

        bindEvents();
        WarningWindow.attach();
        initHtmlAreas();

        function createDynamicItem(ev) {
            let result = populateProperties($('.class-property'));
            if (result.validationFailed) {
                return;
            }

            let body = {
                className: modelName,
                assemblyName: assemblyName,
                properties: result.properties
            };

            Data.postJson({ url: '/sitetriks/dynamic/createitem', data: body }).then(function (res) {
                if (res.success) {
                    window.location.replace(`/sitetriks/dynamic/classdetails?assemblyName=${body.assemblyName}&className=${body.className}`);
                }
            }, Data.defaultError);
        }

        function bindEvents() {
            $('#btn-create-item').on('click', createDynamicItem);
            $('.select-dynamic-images').on('click', selectImages);
            $('body').on('click', '.news-listed-image-delete', removeImage);

            mediator.on('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.on('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }

        function dispose() {
            $('#btn-create-item').off('click', createDynamicItem);
            $('.select-dynamic-images').off('click', selectImages);
            $('body').off('click', '.news-listed-image-delete', removeImage);

            mediator.off('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.off('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }
    }

    function editItem(id, className, assemblyName, logger, mediator) {
        let $modal = $('#file-upload-modal');
        let $container = $modal.find('.file-handler-wrapper');
        let fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

        let selectImages = createSelectImagesHandler(mediator);
        let displayImages = createDisplayImagesHandler($modal);

        $('input.dynamic-images').each(function (_, element) {
            let $imagesInput = $(element);
            let $imgContainer = $imagesInput.next('.dynamic-images-container');
            let inputSelector = `.dynamic-images[data-name='${$imagesInput.attr('data-name')}']`;

            let currentImages = $imagesInput.val();
            let fileIds = currentImages.split(';');
            for (let i = 0; i < fileIds.length; i += 1) {
                if (fileIds[i]) {
                    createImageView(inputSelector, fileIds[i], $imgContainer);
                }
            }
        });

        bindEvents();
        WarningWindow.attach();
        initHtmlAreas();

        function editDynamicItem(ev) {
            let result = populateProperties($('.class-property'));

            if (result.validationFailed) {
                return;
            }

            let body = {
                id: id,
                className: className,
                assemblyName: assemblyName,
                properties: result.properties
            };

            Data.postJson({ url: '/sitetriks/dynamic/edititem', data: body }).then(function (res) {
                if (res.success) {
                    window.location.replace(`/sitetriks/dynamic/classdetails?assemblyName=${body.assemblyName}&className=${body.className}`);
                }

                Loader.hide();
            }, Data.defaultError);
        }

        function bindEvents() {
            $('#btn-edit-item').on('click', editDynamicItem);
            $('.select-dynamic-images').on('click', selectImages);
            $('body').on('click', '.news-listed-image-delete', removeImage);

            mediator.on('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.on('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }

        function dispose() {
            $('#btn-edit-item').off('click', editDynamicItem);
            $('.select-dynamic-images').off('click', selectImages);
            $('body').off('click', '.news-listed-image-delete', removeImage);

            mediator.off('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.off('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }
    }

    function populateProperties(fields) {
        let properties = [];
        let flag = false;

        for (let i = 0; i < fields.length; i += 1) {
            let $item = $(fields[i]);
            let name = $item.attr('data-name');
            let type = $item.attr('data-type');
            let value = $item.val();
            if (type === 'string-html') {
                value = textEditor.getContent('area-' + name);
            }

            if (!Validator.validateField($item)) {
                flag = true;
            }

            properties.push(JSON.stringify({
                name: name,
                type: type,
                value: value
            }));
        }

        return {
            properties,
            validationFailed: flag
        };
    }

    function createImageView(fieldId, imgLinkId, $imgContainer) {
        let $container = $('<div class="news-listed-images-container"></div>');
        let $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="fa fa-times"></span></div>');
        let $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

        $container.append($deleteBtn)
            .append($img)
            .appendTo($imgContainer);
    }

    function removeImage(ev) {
        let $trigger = $(this);
        let imgId = $trigger.attr('data-id');
        let selector = $trigger.attr('data-field');

        if (selector && selector !== '') {
            let $field = $(selector);
            let currentImages = $field.val();
            if (currentImages) {
                $field.val(currentImages.replace(imgId, ''));
            }
        }

        $trigger.parent().remove();
    }

    function createSelectImagesHandler(mediator) {
        return function selectImages(ev) {
            let $target = $(ev.target);
            let requester = $target.attr('data-name');

            mediator.dispatch('fileHandlerTypeChange', { type: 'multiple', requester });
            //let $imagesInput = $(`.dynamic-images[data-name='${requester}']`);
            //mediator.dispatch('populatedSelected', $imagesInput.val());
        };
    }

    function createDisplayImagesHandler($modal) {
        return function displayImages(data) {
            let inputSelector = `.dynamic-images[data-name='${data.requester}']`;
            let $imagesInput = $(inputSelector);
            let $imgContainer = $imagesInput.next('.dynamic-images-container');

            //let currentImages = $imagesInput.val();
            //if (currentImages) {
            //    if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
            //        currentImages += ';';
            //    }

            //    $imagesInput.val(currentImages + data.fileIds.join(';'));
            //} else {
            $imagesInput.val(data.fileIds.join(';'));
            //}
            $imgContainer.html('');
            console.log(data);

            for (let i = 0; i < data.fileIds.length; i += 1) {
                createImageView(inputSelector, data.fileIds[i], $imgContainer);
            }

            $modal.modal('hide');
        };
    }

    function initHtmlAreas() {
        $('textarea.html-area').each((_, element) => {
            textEditor.init('#'+element.id, 500, 300);
        });
    }

    return {
        createItem,
        editItem
    };
})();

window.createClass = createClass;
window.dynamicClassesList = dynamicClassesList;
window.editClass = editClass;
window.Dynamics = Dynamics;
