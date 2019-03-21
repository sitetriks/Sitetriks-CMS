import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { WarningWindow } from '../modules/warning-window.js';

export function createEditThumbnailSize() {
    let $thumbSizeId = $('#thumbSizeId');
    let $fullForm = $('.form-horizontal');
    let $sizeType = $('#size-type');
    let $sizeName = $('#size-name');
    let $multiplierY = $('#multipliery');
    let $multiplierX = $('#multiplierx');
    let $offsety = $('#offsety');
    let $offsetx = $('#offsetx');
    let $sizeHeight = $('#size-height');
    let $sizeWidth = $('#size-width');
    let $btndisplayForm = $('.display-add-form');
    let $deletePopup = $('.delete-popup-wrapper');

    $btndisplayForm.on('click', displayForm);
    WarningWindow.attach();

    function displayForm() {
        $('.create-thumbnail-size-form').css('display', 'block');
        $('.create-thumbnail-size-form input').val('');

    }

    function fillEditForm(id, name, type, width, height, multiplierX, multiplierY, offsetX, offsetY) {
        $thumbSizeId.val(id);
        $sizeType.val(type);
        $sizeName.val(name);
        $multiplierY.val(multiplierY);
        $multiplierX.val(multiplierX);
        $offsety.val(offsetY);
        $offsetx.val(offsetX);
        $sizeHeight.val(height);
        $sizeWidth.val(width);
    }

    $('.thumbnail-sizes-multiselect').on('click', '.glyphicon-pencil', function () {

        let $target = $(this).parent().find('.checkbox');
        let id = $target.find('input').val();
        let url = '/sitetriks/thumbnailssizes/edit?id=';

        Data.getJson({ url: url + id }).then(function (res) {
            // open the 
            console.log(res);
            let model = res.model;
            console.log(model);
            displayForm();

            fillEditForm(model.id, model.name, model.type, model.width, model.height, model.multiplierX, model.multiplierY, model.offsetX, model.offsetY);
            return model;
        });
    });


    $(document).ready(function () {
        let selectionContainer = $('.selected-thumbnail-options');
        let selectedOptions;


        if (selectionContainer.length > 0) {
            selectedOptions = $('.selected-thumbnail-options').html().trim().split(' ');
        }

        function setSelectedOptions() {
            if (selectedOptions !== undefined && selectedOptions.length > 0) {
                let $multiselectSizes = $('#multiselect-sizes input');
                let $multiselectOptions = $('#multiselect-thumbnails option');


                for (let i = 0; i < $multiselectSizes.length; i += 1) {
                    for (let j = 0; j < selectedOptions.length; j += 1) {

                        if ($($multiselectSizes[i]).val() == selectedOptions[j]) {
                            $($multiselectOptions[i]).prop('selected', true);
                            $($multiselectSizes[i]).prop('checked', true);
                        }
                    }
                }
            }

        }
        setSelectedOptions();
    });

    $('.thumbnail-sizes-multiselect').on('click', 'input[type="checkbox"]', function () {

        let $target = $(this);
        let id = $target.parent().find('input').val();

        let $selectOption = $('#multiselect-thumbnails option[value=' + id + ']');

        if ($selectOption.length > 0 && $selectOption.is(':selected') == false) {
            $selectOption.prop('selected', true);
        } else if ($selectOption.length > 0 && $selectOption.is(':selected') == true) {
            $selectOption.prop('selected', false);

        }
    });



    $('.thumbnails-label-container').on('click', '.glyphicon-remove', displayDeleteThumbSizePopup);
    $('.delete-thumbnail-size').on('click', '.glyphicon-remove', hideDeleteLibraryPopup);

    $('.delete-thumbnail-size').on('click', '#cancel-delete', hideDeleteLibraryPopup);
    $('#delete-thumbnail-size').on('click', deleteThumbnailSize);

    function deleteThumbnailSize() {
        let $target = $(this);

        let id = $('#thumbnailSizeId').val();
        let url = '/sitetriks/thumbnailssizes/DeleteSingleItem?id=';

        if (id.length > 0) {
            Data.postJson({ url: url + id }).then(function (res) {
                if (res.success) {
                    location.reload();
                    Notifier.createAlert({ containerId: '#alerts', type: 'success', message: 'The thumbnail size has been deleted successfully.' });
                } else {
                    Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'The thumbnail was not deleted.' });
                }
            });
        }

    }

    function displayDeleteThumbSizePopup(ev) {
        let $target = $(this);
        let id = $target.parent().find('input').val();
        $deletePopup.css('display', 'block');
        $('#thumbnailSizeId').val(id);
    }
    function hideDeleteLibraryPopup(ev) {
        $deletePopup.css('display', 'none');
    }


    $('#create-thumbnail-size').on('click', function (ev) {
        var _this = $('.create-thumbnail-size-form');
        ev.preventDefault();

        let flag = true;

        let formData = new FormData();

        formData.append('Id', $thumbSizeId.val());
        formData.append('Name', $sizeName.val());
        formData.append('Height', $sizeHeight.val());
        formData.append('Width', $sizeWidth.val());
        formData.append('multipliery', $multiplierY.val());


        flag = checkInputCombination();

        if (flag) {
            Loader.show(true);
            Data.postForm({ url: '/sitetriks/thumbnailssizes/createedit', formData: formData }).then(function (res) {
                if (!res.success) {
                    Loader.hide();
                }
                return res;
            }).then(function (res) {
                if (res.success) {
                    Notifier.createAlert({ containerId: '#alerts', type: 'success', message: 'The thumbnail size has been created successfully.' });
                    Loader.hide();
                    $('.create-thumbnail-size-form').css('display', 'none');
                    location.reload();

                } else {
                    Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'The thumbnail size was not created.' });
                    Loader.hide();
                }
            });
        }

        return false;

    });


    // Check if the inputs are valid numbers

    // check name
    $sizeName.on('input', function (ev) {
        let $name = $(this);
        let pattern = $name.val();

        if (pattern.length < 3) {
            $name.next().text('Thumbnails name must be atleast 3 charecters');
            $name.addClass('input-error');
        } else {
            $name.next().text('');
            $name.removeClass('input-error');
        }
    });


    $sizeType.on('input', hideOffsetOptions);
    $(window).load(function () {

        hideOffsetOptions();
    });

    // check all numbers
    $fullForm.on('input', 'input', function () {
        let $input = $(this);
        let inputValue = $input.val();

        if ($input.attr('type') === 'number') {
            if (!$(this).hasClass('ratio')) {
                checkIfNumber($input, inputValue);
            }

            if ($(this).hasClass('ratio')) {
                checkRatioValue($input, inputValue);
            }
        }
    });

    // check type
    function hideOffsetOptions() {
        let selection = $sizeType.val();
        let $offsetWrapper = $('.offsets');

        if (selection == '0') {
            $offsetWrapper.css('display', 'none');
        } else {
            $offsetWrapper.css('display', 'block');
        }
    }

    function checkRatioValue(input, value) {
        let regex = /^[0-9/,/.]+$/;

        if (!value.match(regex) || +value > 1 || +value < 0) {
            input.next().text('The input value must be a valid decimal number between 0 and 1 separated by ","');
            input.addClass('input-error');
        } else {
            input.next().text('');
            input.removeClass('input-error');
        }
    }

    function checkIfNumber(input, value) {
        let regex = /^[0-9/,/.]+$/;

        if (!value.match(regex)) {
            input.next().text('The input value must be a valid number');
            input.addClass('input-error');
        } else {
            input.next().text('');
            input.removeClass('input-error');
        }
    }

    function checkInputCombination() {

        let sizeName = $sizeName.val();
        let multiplierY = +$multiplierY.val();
        let multiplierX = +$multiplierX.val();
        let offsety = +$offsety.val();
        let offsetx = +$offsetx.val();
        let sizeHeight = +$sizeHeight.val();
        let sizeWidth = +$sizeWidth.val();
        let type = $sizeType.val();


        var isValidResize = multiplierX * sizeWidth + multiplierY * sizeHeight == 0;
        var isValidCropWindow = sizeWidth * sizeHeight > 0;
        var isValidCropSize = multiplierX * offsetx + multiplierY * offsety == 0;

        if (sizeName.length < 3) {
            $sizeName.next().text('The name should be at least 3 symbols.');
            return false;
        }
        if (type == '1') {
            if (!isValidCropWindow) {
                $sizeHeight.addClass('input-error');
                $sizeWidth.addClass('input-error');
                return false;
            }
            else {
                $multiplierY.next().text('');
                $sizeHeight.removeClass('input-error');
                $sizeWidth.removeClass('input-error');
            }

            if (!isValidCropSize) {
                $multiplierY.next().text('If you have selected to resize with the use of the multipliers, you cannot use an offset. In case you choose to resize by the offsets the multipliers should be equal to 0.');
                $offsety.addClass('input-error');
                $offsetx.addClass('input-error');
                $multiplierY.addClass('input-error');
                $multiplierX.addClass('input-error');
                return false;
            }
            else {
                $multiplierY.next().text('');
                $offsety.removeClass('input-error');
                $offsetx.removeClass('input-error');
                $multiplierY.removeClass('input-error');
                $multiplierX.removeClass('input-error');
            }
            return true;
        }

        if (type == '0') {
            if (!isValidResize) {
                $multiplierY.next().text('If you have selected to resize with the use of the multipliers, you cannot set width or height. In case you choose to resize by width and height the multipliers should be equal to 0.');
                $multiplierY.addClass('input-error');
                $multiplierX.addClass('input-error');
                $sizeHeight.addClass('input-error');
                $sizeWidth.addClass('input-error');
                return false;
            }
            else {
                $multiplierY.next().text('');
                $multiplierY.removeClass('input-error');
                $multiplierX.removeClass('input-error');
                $sizeHeight.removeClass('input-error');
                $sizeWidth.removeClass('input-error');
            }
        }
        return true;
    }

}

window.createEditThumbnailSize = createEditThumbnailSize;
