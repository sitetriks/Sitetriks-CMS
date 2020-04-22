import { Data } from '../common/data.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';

export function stwLicenseApplication() {
    const formSelecter = '.license-form';

    $('#apply-btn').on('click', function () {
        let flag = true;

        // get form input values

        let $name = $(`${formSelecter} input[name="name"]`);
        let $email = $(`${formSelecter} input[name="email"]`);
        let $company = $(`${formSelecter} input[name="company"]`);
        let $position = $(`${formSelecter} input[name="position"]`);

        // Validations

        let formFields = [$name, $email, $company, $position];
        for (let i = 0; i < formFields.length; i++) {
            if (!fieldValidation(formFields[i])) {
                flag = false;
            };
        }

        if (flag) {
            let licenceApplicationModel = {
                name: $name.val(),
                email: $email.val(),
                company: $company.val(),
                position: $position.val()
            };

            function emptyFieldsAfterSuccess(fields) {
                for (let i = 0; i < fields.length; i++) {
                    console.log(fields);
                    if (i === fields.length - 1) {
                        fields[i].val(0);
                    }
                    fields[i].val('');
                }
            }

            Data.postJson({ url: '/sitetriks/licenseApplication/SendEmails', data: licenceApplicationModel }).then(function (res) {
                if (res.success) {
                    Data.postJson({ url: '/sitetriks/licenseApplication/Create', data: licenceApplicationModel }).then(function (res) {
                        if (res.success) {
                            Notifier.createAlert({ containerId: '#licenseAlert', message: res.message, status: (res.success ? 'info' : 'warning'), seconds: 5 });
                            emptyFieldsAfterSuccess(formFields);
                        } else {
                            Notifier.createAlert({ containerId: '#licenseAlert', message: res.message, status: 'danger', seconds: 5 });
                        }
                    })
                } else {
                    Notifier.createAlert({ containerId: '#licenseAlert', message: res.message, status: 'danger', seconds: 5 });
                }
            })
        }

    })

    $('.license-triggerer-wrapper').on('click', function () {
        $('.license-form-expanded').toggle();
    })

    function fieldValidation(field) {
        let flag = true;
        let $currentField = field;
        let fieldName = $currentField.attr('name');

        switch (fieldName) {
            case 'name':
                if (!Validator.validate($currentField, '', function (val) {
                    return Validator.hasMinimumLength(val.trim(), 3) && Validator.isStartingWithLetter(val.trim());
                })) {
                    $(`span.${fieldName}-validation`).text('Name must be at least 3 letters.');
                    flag = false;
                } else {
                    $(`span.${fieldName}-validation`).text('');
                    flag = true;
                }
                break;
            case 'email':
                if (!Validator.validate($currentField, '', function (val) {
                    return Validator.validateEmail(val);
                })) {
                    $(`span.${fieldName}-validation`).text('Must enter valid email.');
                    flag = false;
                } else {
                    $(`span.${fieldName}-validation`).text('');
                    flag = true;
                }
                break;
            case 'company':
                if (!Validator.validate($currentField, '', function (val) {
                    return Validator.hasMinimumLength(val.trim(), 1);
                })) {
                    $(`span.${fieldName}-validation`).text('Company field is required.');
                    flag = false;
                } else {
                    removeValidationText(fieldName);
                }
                break;
            case 'position':
                if (!Validator.validate($currentField, '', function (val) {
                    return Validator.hasMinimumLength(val.trim(), 1);
                })) {
                    $(`span.${fieldName}-validation`).text('Position field is required.');
                    flag = false;
                } else {
                    removeValidationText(fieldName);
                }
                break;
            default:
                break;
        }

        function removeValidationText(fieldName) {
            $(`span.${fieldName}-validation`).text('');
            flag = true;
        }

        return flag;

    }

} 