/* globals Data, Loader, Validator, Notifier */

function setupAjaxForm(formSelector, redirectUrl) {
    let validation = Validator.createFieldsValidation();
    $(formSelector).on('submit', function (evt) {
        evt.preventDefault();
        if (!validation.apply(this)) {
            return false;
        }

        Loader.show('#fff');
        Data.postForm({ url: this.action, formData: new FormData(this) }).then(function success(res) {
            if (res.success) {
                window.location.replace(redirectUrl);
            } else {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                Loader.hide();
            }
        });

        return false;
    });
}
