'use strict';

function createStoreItem(efc, storeId, logger, mediator, currentExtraFields) {
    currentExtraFields = currentExtraFields || {};
    var $extraFields = $('.extra-fields-wrapper');
    var $multiselect = $('#categories-multiselect');
    var $form = $('#create-store-item-form');
    var $imagesInput = $form.find('input#images');
    var $mainImageInput = $form.find('input#main-image');

    var $modal = $('#file-upload-modal');
    var $container = $modal.find('.file-handler-wrapper');
    var fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

    var fieldValidationHandler = Validator.createFieldValidationHandler();
    var isFormValid = Validator.createFieldsValidation().bind($form[0]);

    bindEvents();
    $multiselect.parent().find('input[type="checkbox"]').each(function (_, element) {
        displayExtaFieldsMultiple($(element), element.checked);
    });

    function removeImage(ev) {
        var $trigger = $(this);
        var imgId = $trigger.attr('data-id');
        var fieldId = $trigger.attr('data-field');

        if (fieldId && fieldId !== '') {
            var currentImages = $('#' + fieldId).val();
            if (currentImages) {
                $('#' + fieldId).val(currentImages.replace(imgId, ''));
            }
        }

        $trigger.parent().remove();
    }

    function createImageView(fieldId, imgLinkId) {
        var $container = $('<div class="news-listed-images-container"></div>');
        var $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
        var $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

        $container.append($deleteBtn).append($img).appendTo('#' + fieldId + '-container');
    }

    function selectFiles(data) {
        if (data.requester === 'images') {
            var currentImages = $imagesInput.val();
            if (currentImages) {
                if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
                    currentImages += ';';
                }

                $imagesInput.val(currentImages + data.fileIds.join(';'));
            } else {
                $imagesInput.val(data.fileIds.join(';'));
            }

            var imagesInputId = $imagesInput.attr('id');
            for (var i = 0; i < data.fileIds.length; i += 1) {
                createImageView(imagesInputId, data.fileIds[i]);
            }
        } else if (data.requester === 'main-image') {
            $mainImageInput.val(data.fileIds[0]);
            var mainImgInputId = $mainImageInput.attr('id');
            $('#' + mainImgInputId + '-container').html('');
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
        var id = option.val();
        var selected = $multiselect.val() || [];

        if (checked) {
            for (var i = 0; i < efc[id].length; i += 1) {
                var $input = $('input[data-id="' + efc[id][i].id + '"]');

                if (!$input.length) {
                    createField(efc[id][i]).appendTo($extraFields);
                }
            }
        } else {
            var _loop = function _loop(_i) {
                var flag = true;
                for (var j = 0; j < selected.length; j++) {
                    if (efc[selected[j]] && efc[selected[j]].filter(function (config) {
                        return config.id === efc[id][_i].id;
                    }).length) {
                        flag = false;
                    }
                }

                if (flag) {
                    $('input[data-id="' + efc[id][_i].id + '"]').parents('.extra-field').remove();
                }
            };

            for (var _i = 0; _i < efc[id].length; _i += 1) {
                _loop(_i);
            }
        }
    }

    function createField(config) {
        var $wrapper = $('<div></div>', {
            class: 'extra-field form-group row description-row'
        });

        $('<label></label>', {
            class: 'control-label col-md-2',
            text: config.name
        }).appendTo($wrapper);

        var $innerWrapper = $('<div></div>', {
            class: 'col-md-10'
        });

        $('<input/>', {
            class: 'form-control inline-block validate',
            type: 'text',
            value: currentExtraFields[config.id] || '',
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

        var extraFields = [];

        $('.extra-field input').each(function (_, element) {
            var $element = $(element);

            extraFields.push({
                id: $element.attr('data-id'),
                value: $element.val()
            });
        });

        var formData = new FormData($form[0]);
        var categories = $multiselect.val() || [];
        if (Validator.isFunction(formData.set)) {
            formData.set('extraFields', JSON.stringify(extraFields));
            formData.set('selectedCategories', JSON.stringify(categories));
        } else {
            formData.append('extraFields', JSON.stringify(extraFields));
        }

        Loader.show('#fff');
        Data.postForm({ url: $form[0].action, formData: formData }).then(function (res) {
            if (res.success && storeId) {
                window.location.replace('/ecommerse/storemanager/details/' + storeId);
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