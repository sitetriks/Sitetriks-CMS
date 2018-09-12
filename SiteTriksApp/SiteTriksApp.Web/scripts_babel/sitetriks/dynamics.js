'use strict';

function createClass(assemblyName) {
    var $fieldsContainer = $('#fields-container');
    var $inputTitle = $('#input-class-title');
    var $form = $('#form-create-class');
    var template = '';

    Loader.show('#fff');
    Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        Loader.hide();
        template = res;
        bindEvents();
    });

    function addField(ev) {
        $(document.createElement('div')).html(template).addClass('field-item').appendTo($fieldsContainer);
    }

    function deleteField(ev) {
        $(ev.target).parents('.field-item').remove();
    }

    function customValidation($element) {
        if ($element.hasClass('validate-field-name')) {
            return Validator.validate($element, 'The field name must consist of at least 3 symbols. Please, use only alphanumeric symbols and do not use blank spaces.', function (val) {
                return Validator.hasMinimumLength(val, 3) && Validator.isAlphaNumeric(val) && Validator.isStartingWithLetter(val);
            }) && Validator.validate($element, 'Title and link are system reserved words.', function (val) {
                return val.toLocaleLowerCase() !== 'link' && val.toLocaleLowerCase() !== 'title';
            });
        }
    }

    var isFormValid = Validator.createFieldsValidation(customValidation).bind($form[0]);

    function submitCreateForm(ev) {
        Loader.show('#fff');

        if (!isFormValid()) {
            Loader.hide();

            ev.preventDefault();
            return false;
        }

        var formData = new FormData();
        var name = $('#input-class-name').val();
        var properties = [];
        $('.field-item').each(function (_, element) {
            var name = $(element).find('input:text').val();
            var type = $(element).find('select').val();
            properties.push({ name: name, type: type });
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

        Data.postForm({ formData: formData }).then(function (res) {
            if (res.success) {
                handleAppRestart({});
            } else {
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
        var $target = $(ev.target);
        var assemblyName = $target.data('assemblyName');
        var className = $target.data('className');

        Loader.show('#fff');
        Data.getJson({ url: '/sitetriks/dynamic/deleteClass?assemblyName=' + assemblyName + '&className=' + className }).then(function success(res) {
            handleAppRestart({ url: '/sitetriks/dynamic' });
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
    var $fieldsContainer = $('#fields-container');
    var $inputTitle = $('#input-class-title');
    var $form = $('#form-edit-class');
    var template = '';

    Loader.show('#fff');
    Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        Loader.hide();
        template = res;
        bindEvents();
    });

    function addField(ev) {
        $(document.createElement('div')).html(template).addClass('field-item').appendTo($fieldsContainer);
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

    var isFormValid = Validator.createFieldsValidation(customValidation).bind($form[0]);

    function submitEditForm(ev) {
        Loader.show('#fff');

        if (!isFormValid()) {
            Loader.hide();

            ev.preventDefault();
            return false;
        }

        var formData = new FormData();
        var newName = $('#input-class-name').val();
        var oldName = modelName;
        var properties = [];

        $('.field-item').each(function (_, element) {
            var name = $(element).find('input:text').val();
            var type = $(element).find('select').val();
            properties.push({ name: name, type: type });
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

        Data.postForm({ formData: formData }).then(function (res) {
            if (res.success) {
                handleAppRestart({});
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

var Dynamics = function () {
    function createItem(modelName, assemblyName, logger, mediator) {
        var $modal = $('#file-upload-modal');
        var $container = $modal.find('.file-handler-wrapper');
        var fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

        var selectImages = createSelectImagesHandler(mediator);
        var displayImages = createDisplayImagesHandler($modal);

        bindEvents();

        function createDynamicItem(ev) {
            var result = populateProperties($('.class-property'));
            if (result.validationFailed) {
                return;
            }

            var body = {
                className: modelName,
                assemblyName: assemblyName,
                properties: result.properties
            };

            Data.post({ url: '/sitetriks/dynamic/createitem', data: body }).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/dynamic/classdetails?assemblyName=' + body.assemblyName + '&className=' + body.className);
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
        var $modal = $('#file-upload-modal');
        var $container = $modal.find('.file-handler-wrapper');
        var fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

        var selectImages = createSelectImagesHandler(mediator);
        var displayImages = createDisplayImagesHandler($modal);

        $('input.dynamic-images').each(function (_, element) {
            var $imagesInput = $(element);
            var $imgContainer = $imagesInput.next('.dynamic-images-container');
            var inputSelector = '.dynamic-images[data-name=\'' + $imagesInput.attr('data-name') + '\']';

            var currentImages = $imagesInput.val();
            var fileIds = currentImages.split(';');
            for (var i = 0; i < fileIds.length; i += 1) {
                if (fileIds[i]) {
                    createImageView(inputSelector, fileIds[i], $imgContainer);
                }
            }
        });

        bindEvents();

        function editDynamicItem(ev) {
            var result = populateProperties($('.class-property'));

            if (result.validationFailed) {
                return;
            }

            var body = {
                id: id,
                className: className,
                assemblyName: assemblyName,
                properties: result.properties
            };

            Data.postJson({ url: '/sitetriks/dynamic/edititem', data: body }).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/dynamic/classdetails?assemblyName=' + body.assemblyName + '&className=' + body.className);
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
        var properties = [];
        var flag = false;

        for (var i = 0; i < fields.length; i += 1) {
            var $item = $(fields[i]);
            var name = $item.attr('data-name');
            var type = $item.attr('data-type');
            var value = $item.val();

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
            properties: properties,
            validationFailed: flag
        };
    }

    function createImageView(fieldId, imgLinkId, $imgContainer) {
        var $container = $('<div class="news-listed-images-container"></div>');
        var $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
        var $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

        $container.append($deleteBtn).append($img).appendTo($imgContainer);
    }

    function removeImage(ev) {
        var $trigger = $(this);
        var imgId = $trigger.attr('data-id');
        var selector = $trigger.attr('data-field');

        if (selector && selector !== '') {
            var $field = $(selector);
            var currentImages = $field.val();
            if (currentImages) {
                $field.val(currentImages.replace(imgId, ''));
            }
        }

        $trigger.parent().remove();
    }

    function createSelectImagesHandler(mediator) {
        return function selectImages(ev) {
            var $target = $(ev.target);
            var requester = $target.attr('data-name');

            mediator.dispatch('fileHandlerTypeChange', { type: 'multiple', requester: requester });
        };
    }

    function createDisplayImagesHandler($modal) {
        return function displayImages(data) {
            var inputSelector = '.dynamic-images[data-name=\'' + data.requester + '\']';
            var $imagesInput = $(inputSelector);
            var $imgContainer = $imagesInput.next('.dynamic-images-container');

            var currentImages = $imagesInput.val();
            if (currentImages) {
                if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
                    currentImages += ';';
                }

                $imagesInput.val(currentImages + data.fileIds.join(';'));
            } else {
                $imagesInput.val(data.fileIds.join(';'));
            }

            for (var i = 0; i < data.fileIds.length; i += 1) {
                createImageView(inputSelector, data.fileIds[i], $imgContainer);
            }

            $modal.modal('hide');
        };
    }

    return {
        createItem: createItem,
        editItem: editItem
    };
}();