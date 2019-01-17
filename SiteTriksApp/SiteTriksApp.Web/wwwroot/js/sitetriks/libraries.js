/* globals Data, Utils, Loader, Notifier, Validator, FileHandler, Multiselect */

function initLibraries(grid, mediator, logger) {
    let $libs = $('#libs');
    let $btnEditLibrary = $('#btn-edit-lib');
    let $btnDeleteLibrary = $('#btn-delete-lib');

    if ($libs.val()) {
        grid.updateDefaultFilters([{
            propertyName: 'libraryId',
            comparison: 1,
            value: $libs.val()
        }]);
    } else {
        $btnEditLibrary.hide();
        $btnDeleteLibrary.hide();
    }

    grid.load(true);
    let $grid = $('.grid');

    let $modal = $('#file-upload-modal');
    let $container = $modal.find('.file-handler-wrapper');
    let fileHandler = FileHandler($container, ['Upload'], $libs.val(), mediator, logger, true);

    bindEvents();

    // --------------------------------------------------------
    // event handlers   

    function fileUploadedHandler(data) {
        if (data) {
            let id = data.libraryId.toLowerCase();
            if ($libs.val() !== id) {
                $libs.val(id);
                grid.updateDefaultFilters([{
                    propertyName: 'libraryId',
                    comparison: 1,
                    value: id
                }], true).load(true);
            }

            if (!id) {
                grid.updateDefaultFilters();
            }

            grid.load(true);
            $modal.modal('hide');
        }
    }

    function copyUrl(ev) {
        let $target = $(ev.target);
        let url = location.origin + '/files/' + $target.attr('data-url');

        copyToClipboard(url);
    }

    function selectLibrary(ev) {
        let value = $(this).val();

        if (value) {
            grid.updateDefaultFilters([{
                propertyName: 'libraryId',
                comparison: 1,
                value: value
            }], true).load();

            $btnEditLibrary.show();
            $btnDeleteLibrary.show();
        } else {
            grid.updateDefaultFilters().load();

            $btnEditLibrary.hide();
            $btnDeleteLibrary.hide();
        }

        mediator.dispatch('fileLibraryChange', value);
    }

    function editLibrary(ev) {
        let prefix = $('#libs :selected').attr('data-url');

        if (prefix && prefix.length > 0) {
            window.location.href = '/sitetriks/libraries/edit?url=' + prefix;
        }
    }

    function deleteLibrary(ev) {
        let id = $('#libs').val();

        Loader.show('#fff');
        Data.deleteJson({ url: '/sitetriks/libraries/delete/', data: { id } }).then(function (res) {
            if (res.success) {
                location.reload(true);
            } else {
                Loader.hide();
                console.log(res);
            }
        }, Data.defaultError);
    }

    function copyToClipboard(element) {
        var $temp = $('<input/>');
        $('body').append($temp);
        $temp.val(element).select();
        document.execCommand('copy');
        $temp.remove();
    }

    function cleanUp() {
        mediator.dispatch('fileHandlerClean');
    }

    // --------------------------------------------------------
    function bindEvents() {
        $grid.on('click', '.copy', copyUrl);
        $libs.on('change', selectLibrary);
        $btnDeleteLibrary.on('click', deleteLibrary);
        $btnEditLibrary.on('click', editLibrary);
        $modal.on('show.bs.modal hidden.bs.modal', cleanUp);
        mediator.on('filesUploaded', fileUploadedHandler, 'filesUploaded', 'General');
        mediator.on('alert', Notifier.createAlert, 'createAlert', 'Notifier');
    }

    function dispose() {
        $grid.off('click', '.copy', copyUrl);
        $libs.off('change', selectLibrary);
        $btnDeleteLibrary.off('click', deleteLibrary);
        $btnEditLibrary.off('click', editLibrary);
        $modal.off('show.bs.modal hidden.bs.modal', cleanUp);
        mediator.off('filesUploaded', 'filesUploaded', 'General');
        mediator.off('alert', 'createAlert', 'Notifier');
    }

    return {
        dispose
    };
}

function editLibraries(isNameAvailableLink, libraryId) {
    let $inputName = $('#input-name');
    let $editForm = $('#create-library-form');

    Multiselect.SetupElement($('.multiselect-thumbnails'));

    bindEvents();

    function validateName(e) {
        let $target = $(e.target);
        let flag = false;

        if (!Validator.validate($target, 'Title must be atleast 3 characters long!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (!flag) {
            Data.postJson({ url: isNameAvailableLink, data: { name: $target.val(), id: libraryId } }).then(function (res) {
                Validator.validate($target, res.message || 'Name is already taken!', function (val) { return res.success; });
            }, Data.defaultError);
        }
    }

    //function getSelectedThumbnails() {
    //    let $resultInput = $('#thumnails-result');
    //    let $thumbnailSizes = $('#multiselect-thumbnails');
    //    let $thumbnailsCheckbxes = $('.checkbox input');

    //    let result = [];
    //    for (var i = 0; i < $thumbnailsCheckbxes.length; i += 1) {
    //        console.log($thumbnailsCheckbxes[i]);
    //        if ($($thumbnailsCheckbxes[i]).prop('checked') == true) {
    //            result.push($($thumbnailsCheckbxes[i]).val());
    //        }
    //    }

    //    $resultInput.val(result);
    //    console.log($thumbnailSizes.val());

    //}

    function submitEditForm(ev) {
        let flag = false;
        let _this = this;

      //  getSelectedThumbnails();

        if (!Validator.validate($inputName, 'Title must be atleast 3 characters long!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (!flag) {
            Loader.show('#fff');
            Data.postJson({ url: isNameAvailableLink, data: { name: $inputName.val(), id: libraryId } }).then(function (res) {
                if (res.success) {

                    return Data.postForm({ formData: new FormData(_this) });
                } else {
                    Validator.validate($inputName, res.message || 'Name is already taken!', function (val) { return res.success; });
                    Loader.hide();
                }
            }, Data.defaultError).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/libraries/');
                } else {
                    Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'Name  is aready in use!' });
                    Loader.hide();
                }
            }, Data.defaultError);
        }
    }

    function bindEvents() {
        $editForm.on('submit', submitEditForm);
        $inputName.on('input', validateName);
    }

    function dispose() {
        $editForm.on('submit', submitEditForm);
        $inputName.on('input', validateName);
    }
}

function createLibrary(validateUrlLink, isNameAvailableLink) {
    var $btnSubmit = $('input[type="submit"]');
    let $inputName = $('#input-name');
    let $inputPrefix = $('#input-prefix');
    let $prefixValidation = $inputPrefix.next('span.text-danger');
    let $libraryType = $('#library-type');
    let $allowedTypes = $('#allowed-types');
    let $createForm = $('#create-library-form');

    //Multiselect.SetupElement($('.multiselect-thumbnails'));
    populateUrl($inputName, $inputPrefix, validateUrlOnChange);
    displayAllowedTypes.apply($libraryType[0]);
    var timer = 0;
    bindEvents();

    function displayAllowedTypes(ev) {
        $allowedTypes.html('');

        Loader.show('#fff');
        Data.getJson({ url: '/sitetriks/libraries/GetAllowedForType?type=' + this.value }).then(function (res) {
            if (res.success) {
                $allowedTypes.html('Allowed files: ' + (res.type.displayName || res.type.extensions));
            }

            Loader.hide();
        });
    }

    //function getSelectedThumbnails() {
    //    let $resultInput = $('#thumnails-result');
    //    let $thumbnailSizes = $('#multiselect-thumbnails');
    //    let $thumbnailsCheckbxes = $('.checkbox input');

    //    let result = [];
    //    for (var i = 0; i < $thumbnailsCheckbxes.length; i += 1) {
    //        if ($($thumbnailsCheckbxes[i]).is(':checked')) {
    //            result.push($($thumbnailsCheckbxes[i]).val());
    //            console.log($($thumbnailsCheckbxes[i]).val());
    //        }
    //    }

    //    $resultInput.val(result);

   // }

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        let flag = false;
        if (!Validator.validate($inputPrefix, 'Prefix must be atleast 3 characters long!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (!flag) {
            var url = $inputPrefix.val();
            timer = setTimeout(function () {
                validateUrl(validateUrlLink + '?url=' + url, $inputPrefix, $prefixValidation, $btnSubmit);
            }, 500);
            $prefixValidation.text('');
        }
    }

    function validateName(e) {
        let $target = $(e.target);
        let flag = false;

        if (!Validator.validate($target, 'Title must be atleast 3 characters long!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (!flag) {
            Data.postJson({ url: isNameAvailableLink, data: { name: $target.val() } }).then(function (res) {
                Validator.validate($target, res.message || 'Name is already taken!', function (val) { return res.success; });
            }, Data.defaultError);
        }
    }

    function submitCreateForm(ev) {
        let flag = false;
        let _this = this;
     //   getSelectedThumbnails();

        if (!Validator.validate($inputName, 'Title must be atleast 3 characters long!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (!Validator.validate($inputPrefix, 'Prefix must be atleast 3 characters long!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (flag) {
            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');
        Data.getJson({ url: validateUrlLink + '?url=' + $inputPrefix.val() }).then(function (res) {
            if (res.success) {
                return Data.postJson({
                    url: isNameAvailableLink, data: { name: $inputName.val() }
                });
            } else {
                Validator.validate($inputPrefix, res.message || 'Prefix is invalid or already in use!', function (val) { return false; });
                Loader.hide();
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                Validator.validate($inputName, res.message || 'Name is already taken!', function (val) { return false; });
                Loader.hide();
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {
                window.location.replace('/sitetriks/libraries/');
            } else {
                Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'Name or prefix is aready in use!' });
                Loader.hide();
            }
        });

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $createForm.on('submit', submitCreateForm);
        $inputPrefix.on('input change', validateUrlOnChange);
        $libraryType.on('change', displayAllowedTypes);
        $inputName.on('input', validateName);
    }

    function dispose() {
        $createForm.on('submit', submitCreateForm);
        $inputPrefix.on('input change', validateUrlOnChange);
        $libraryType.on('change', displayAllowedTypes);
        $inputName.on('input', validateName);
    }
}


//$(document).ready(function () {

//    let $btnSubmitThumbnailSize = $('#create-thumbnail-size');
//    var createThumbnailSize = (function () {
//        // bindEvents();

//        //function submitCreateSizeForm(ev) {
//        //    console.log('in module');
//        //    let url = '/sitetriks/thumbnailssizes/createedit';
//        //    let $name = $('#size-name');
//        //    let $type = $('#size-type option:selected');
//        //    let $width = $('#size-width');
//        //    let $height = $('#size-height');
//        //    let $multiplierX = $('#multiplierX');
//        //    let $multiplierY = $('#multiplierY');

//        //    let data = {
//        //        name: $name.val(),
//        //        type: $type.val(),
//        //        width: $width.val(),
//        //        height: $height.val(),
//        //        multiplierX : $multiplierX.val(),
//        //        multiplierY : $multiplierY.val()
//        //    };

//        //    Data.postForm({ url: url, data: { name: 'myName' } }).then(function (res) {
//        //        //Validator.validate($target, res.message || 'Name is already taken!', function (val) { return res.success; });
//        //        console.log(res);

//        //    }, Data.defaultError);


//        //}


//        $('#form-create-edit').on('submit', function (ev) {
//            var _this = this;
//            ev.preventDefault();

//            let flag = true;

//           // flag = checkInputCombination();

//            if (flag) {
//                Loader.show(true);
//                Data.postForm({ url: '/sitetriks/thumbnailssizes/createedit', formData: new FormData(_this) }).then(function (res) {
//                    if (!res.success) {
//                        Loader.hide();
//                    }
//                    return res;
//                }).then(function (res) {
//                    if (res.success) {
//                        window.location.replace('/sitetriks/thumbnailssizes');
//                    } else {
//                        Loader.hide();
//                    }
//                })
//            }

//            return false;

//        });

//        //function bindEvents() {
//        //    $btnSubmitThumbnailSize.on('click', submitCreateSizeForm);
//        //}

//        //function dispose() {
//        //    $btnSubmitThumbnailSize.on('click', submitCreateSizeForm);
//        //}

//        //return {
//        //    submitCreateSizeForm: submitCreateSizeForm
//        //};

//    })();

//    //
//  //  $btnSubmitThumbnailSize.on('click', createThumbnailSize.submitCreateSizeForm);
//});