function createStore(validateUrlLink, isNameAvailableLink) {
    let $createForm = $('#create-store-form');
    let $inputUrl = $createForm.find('input.url-field');
    let $inputTitle = $createForm.find('input.title-field');

    let validateTitle = Validator.createValidateOnChangeHandler('name', isNameAvailableLink, 3);
    let validateUrl = Validator.createValidateOnChangeHandler('url', validateUrlLink, 3, { 'prefix': 'store' });
    let isFormValid = Validator.createFieldsValidation();
    bindEvents();

    // TODO: rework
    function populate(ev) {
        let titleValue = $inputTitle.val().toLowerCase();
        $inputUrl.val(titleValue.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase());
        validateUrl.apply($inputUrl[0]);
    }

    function submitCreateForm(ev) {
        let _this = this;
        if (!isFormValid.apply(_this)) {
            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');
        Data.getJson({ url: validateUrlLink + '?prefix=store&url=' + $inputUrl.val() }).then(function (res) {
            if (res.success) {
                let name = $inputTitle.val();
                return Data.postJson({ url: isNameAvailableLink, data: { name: name } });
            } else {
                Validator.validate($inputUrl, res.message || 'Url is invalid or already in use!', function (val) { return res.success; });
                Loader.hide();
                return Promise.reject();
            }
        }).then(function (res) {
            if (res.success) {
                return Data.postForm({ formData: new FormData(_this) });
            } else {
                Validator.validate($inputTitle, res.message || 'Name is already taken!', function (val) { return res.success; });
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
