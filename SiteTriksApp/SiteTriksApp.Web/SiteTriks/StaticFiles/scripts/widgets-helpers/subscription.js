import { Data } from '../common/data.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';

let subscriptionWidget = (function () {
    console.log('subscriptionWidget');

    let formUlr = '/sitetriks/marketingEmailGroups/subscribe';
    let emailValidationMessage = 'Please, enter valid email.';
    let nameValidationMessage = 'Please, enter a name with at least 3 symbols.';

    let subscriptionWidgetContainerClass = '.subscription-widget';
    let checkBoxesContainerClass = '.group-checkboxes';
    let subscriptionRadioGroupClass = '.subscription-radio-group';
    let subscriptionFormWrapperClass = '.subscription-form-wrapper';

    function getGroupIds() {
        let groupIds = [];
        let groupCheckboxes = $(`${subscriptionWidgetContainerClass} > ${checkBoxesContainerClass}`).find(subscriptionRadioGroupClass);

        if (groupCheckboxes.length == 0) {
            return;
        }

        for (let i = 0; i < groupCheckboxes.length; i++) {
            let $currItem = $(groupCheckboxes[i]);

            let inputOfItem = $currItem.find(`input[name="${$currItem.data('groupname')}"]:checked`)

            let value = $(inputOfItem).val();

            console.log('value', value);

            if (value == 1) {
                groupIds.push($currItem.data('id'));
            }
        }

        return groupIds;
    }

    function getInputByName(name) {
        let $item = $(subscriptionWidgetContainerClass).find(`input[name="${name}"]`)

        return $item;
    }

    function init() {
        $('.subscription-widget').on('click', '.subscription-submit', function (e) {
            getGroupIds();
            let flag = true;
            let $name = getInputByName('name');
            let $email = getInputByName('email');
            let $company = getInputByName('company');
            let $country = getInputByName('country');

            if (!Validator.validate($email, nameValidationMessage, function (val) {
                return Validator.validateEmail(val);
            })) {
                flag = false;
            }

            if (!Validator.validate($name, emailValidationMessage, function (val) {
                return Validator.hasMinimumLength(val.trim(), 3) && Validator.isStartingWithLetter(val.trim());
            })) {
                flag = false;
            }

            let groupCheckboxes = $(`${subscriptionWidgetContainerClass} > ${checkBoxesContainerClass}`).find(subscriptionRadioGroupClass);

            if (groupCheckboxes.length == 0) {
                return;
            }

            for (let i = 0; i < groupCheckboxes.length; i++) {
                let $currItem = $(groupCheckboxes[i]);
                let inputOfItem = $currItem.find(`input[name="${$currItem.data('groupname')}"]:checked`)

                if (!inputOfItem.length > 0) {
                    $currItem.find('.validation-output').text('Please check one of the options.')
                    flag = false
                }
            }

            if (flag) {
                var subscriptionModel = {
                    name: $name.val(),
                    email: $email.val(),
                    company: $company.val(),
                    country: $country.val(),
                    groupIds: getGroupIds()
                }

                console.log('subscription-model', subscriptionModel);


                Data.postJson({ url: formUlr, data: subscriptionModel }).then(function (res) {
                    if (res.success) {
                        Notifier.createAlert({ containerId: subscriptionFormWrapperClass, message: res.message, status: (res.success ? 'info' : 'warning'), seconds: 5 });
                        $name.val('');
                        $email.val('');
                    } else {
                        Notifier.createAlert({ containerId: subscriptionFormWrapperClass, message: res.message, status: 'danger', seconds: 5 });
                    }

                }, Data.defaultError);
            }
        });
    }

    return {
        getGroupIds,
        init
    }
})();

export { subscriptionWidget }