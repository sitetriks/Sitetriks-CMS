'use strict';

function createStore(validateUrlLink, isNameAvailableLink) {
    var $createForm = $('#create-store-form');
    var $inputUrl = $createForm.find('input.url-field');
    var $inputTitle = $createForm.find('input.title-field');

    var validateTitle = Validator.createValidateOnChangeHandler('name', isNameAvailableLink, 3);
    var validateUrl = Validator.createValidateOnChangeHandler('url', validateUrlLink, 3, { 'prefix': 'store' });
    var isFormValid = Validator.createFieldsValidation();
    bindEvents();

    // TODO: rework
    function populate(ev) {
        var titleValue = $inputTitle.val().toLowerCase();
        $inputUrl.val(titleValue.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase());
        validateUrl.apply($inputUrl[0]);
    }

    function submitCreateForm(ev) {
        var _this = this;
        if (!isFormValid.apply(_this)) {
            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');
        Data.getJson({ url: validateUrlLink + '?prefix=store&url=' + $inputUrl.val() }).then(function (res) {
            if (res.success) {
                var name = $inputTitle.val();
                return Data.postJson({ url: isNameAvailableLink, data: { name: name } });
            } else {
                Validator.validate($inputUrl, res.message || 'Url is invalid or already in use!', function (val) {
                    return res.success;
                });
                Loader.hide();
                return Promise.reject();
            }
        }).then(function (res) {
            if (res.success) {
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                Validator.validate($inputTitle, res.message || 'Name is already taken!', function (val) {
                    return res.success;
                });
                Loader.hide();
                return Promise.reject();
            }
        }).then(function (res) {
            if (res.success) {
                window.location.replace('/ecommerse/storemanager/');
            } else {
                Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: res.message || 'Invalid information!' });
                Loader.hide();
            }
        }, Data.defaultError);

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $inputTitle.on('input change', populate);
        $inputTitle.on('input change', validateTitle);
        $inputUrl.on('input change', validateUrl);
        $createForm.on('submit', submitCreateForm);
    }

    function dispose() {
        $inputTitle.off('input change', populate);
        $inputTitle.off('input change', validateTitle);
        $inputUrl.off('input change', validateUrl);
        $createForm.off('submit', submitCreateForm);
    }
}