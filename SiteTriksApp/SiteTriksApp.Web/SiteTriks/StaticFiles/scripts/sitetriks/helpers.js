import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { WarningWindow } from '../modules/warning-window.js';
import { textEditor } from '../text-editor.js';

export function setupAjaxForm(formSelector, redirectUrl, textEditorAreasIds) {
    WarningWindow.attach();
    let validation = Validator.createFieldsValidation();
    if (textEditorAreasIds && textEditorAreasIds.length) {
        for (let i = 0; i < textEditorAreasIds.length; i++) {
            textEditor.init(textEditorAreasIds[i], 500, 300);
        }
    }

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

window.setupAjaxForm = setupAjaxForm;
