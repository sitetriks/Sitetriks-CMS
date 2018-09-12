function createStoreItem(efc, storeId, logger, mediator) {
    let $extraFields = $('.extra-fields-wrapper');
    let $multiselect = $('#categories-multiselect');
    let $form = $('#create-store-item-form');
    let $imagesInput = $form.find('input#images');
    let $mainImageInput = $form.find('input#main-image');
    
    let $modal = $('#file-upload-modal');
    let $container = $modal.find('.file-handler-wrapper');
    let fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

    let fieldValidationHandler = Validator.createFieldValidationHandler();
    let isFormValid = Validator.createFieldsValidation().bind($form[0]);

    bindEvents();
    $multiselect.parent().find('input[type="checkbox"]').each(function (_, element) {
        displayExtaFieldsMultiple($(element), element.checked);
    });
    
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

    function createImageView(fieldId, imgLinkId) {
        let $container = $('<div class="news-listed-images-container"></div>');
        let $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
        let $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

        $container.append($deleteBtn)
            .append($img)
            .appendTo('#' + fieldId + '-container');
    }

    function selectFiles(data) {
        if (data.requester === 'images') {
            let currentImages = $imagesInput.val();
            if (currentImages) {
                if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
                    currentImages += ';';
                }

                $imagesInput.val(currentImages + data.fileIds.join(';'));
            } else {
                $imagesInput.val(data.fileIds.join(';'));
            }

            let imagesInputId = $imagesInput.attr('id');
            for (let i = 0; i < data.fileIds.length; i += 1) {
                createImageView(imagesInputId, data.fileIds[i]);
            }
        } else if (data.requester === 'main-image') {
            $mainImageInput.val(data.fileIds[0]);
            let mainImgInputId = $mainImageInput.attr('id');
            $(`#${mainImgInputId}-container`).html('');
            createImageView(mainImgInputId, data.fileIds[0]);
        }

        $modal.modal('hide');
    }

    function selectMainImage(ev) {
        mediator.dispatch('fileHandlerTypeChange', { type: 'single', requester: 'main-image' });
    }

    function selectImages(ev) {
        mediator.dispatch('fileHandlerTypeChange', { type: 'multiple', requester: 'images' });
    }

    function displayExtaFieldsMultiple(option, checked, select) {
        let id = option.val();
        let selected = $multiselect.val() || [];

        if (checked) {
            for (let i = 0; i < efc[id].length; i += 1) {
                let $input = $(`input[data-id="${efc[id][i].id}"]`);

                if (!$input.length) {
                    createField(efc[id][i]).appendTo($extraFields);
                }
            }
        } else {
            for (let i = 0; i < efc[id].length; i += 1) {
                let flag = true;
                for (let j = 0; j < selected.length; j++) {
                    if (efc[selected[j]] && efc[selected[j]].filter(function (config) { return config.id === efc[id][i].id; }).length) {
                        flag = false;
                    }
                }

                if (flag) {
                    $(`input[data-id="${efc[id][i].id}"]`).parents('.extra-field').remove();
                }
            }
        }
    }

    function createField(config) {
        let $wrapper = $('<div></div>', {
            class: 'extra-field form-group row description-row'
        });

        $('<label></label>', {
            class: 'control-label col-md-2',
            text: config.name
        }).appendTo($wrapper);

        let $innerWrapper = $('<div></div>', {
            class: 'col-md-10'
        });
        
        $('<input/>', {
            class: 'form-control inline-block validate',
            type: 'text',
            'data-validation-type': config.type,
            'data-id': config.id
        }).appendTo($innerWrapper);
        
        $('<span></span>', {
            class: 'text-danger'
        }).appendTo($innerWrapper);

        $innerWrapper.appendTo($wrapper);
        return $wrapper;
    }

    function submitCreateForm(ev) {
        if (!isFormValid()) {
            ev.preventDefault();
            return false;
        }

        let extraFields = [];

        $('.extra-field input').each(function (_, element) {
            let $element = $(element);

            extraFields.push({
                id: $element.attr('data-id'),
                value: $element.val()
            });
        });

        let formData = new FormData($form[0]);
        let categories = $multiselect.val() || [];
        if (Validator.isFunction(formData.set)) {
            formData.set('extraFields', JSON.stringify(extraFields));
            formData.set('selectedCategories', JSON.stringify(categories));
        } else {
            formData.append('extraFields', JSON.stringify(extraFields));
        }

        Loader.show('#fff');
        Data.postForm({ url: $form[0].action, formData }).then(function (res) {
            if (res.success && storeId) {
                window.location.replace(`/ecommerse/storemanager/details/${storeId}`);
            } else {
                Loader.hide();
            }
        });

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        Multiselect.Setup('categories-multiselect', displayExtaFieldsMultiple);
        $form.on('submit', submitCreateForm);
        $('#btn-images').on('click', selectImages);
        $('#btn-main-image').on('click', selectMainImage);
        $(document).on('click', '.news-listed-image-delete', removeImage);
        $('body').on('change', '.validate', fieldValidationHandler);

        mediator.on('filesUploaded', selectFiles, 'displayUploadedFiles', 'CreateNews.cshtml');
        mediator.on('filesSelected', selectFiles, 'displaySelectedFiles', 'CreateNews.cshtml');
    }

    function dispose() {
        Multiselect.Destroy('categories-multiselect');
        $form.off('submit', submitCreateForm);
        $('#btn-images').off('click', selectImages);
        $('#btn-main-image').off('click', selectMainImage);
        $(document).off('click', '.news-listed-image-delete', removeImage);
        $('body').off('change', '.validate', fieldValidationHandler);

        mediator.off('filesUploaded', selectFiles, 'displayUploadedFiles', 'CreateNews.cshtml');
        mediator.off('filesSelected', selectFiles, 'displaySelectedFiles', 'CreateNews.cshtml');
    }
}