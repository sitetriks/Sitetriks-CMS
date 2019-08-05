import { Data } from '../common/data.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';

export function subscriptionWidget() {  

    function getGroupIds() {
        let groupIds = [];
        let groupCheckboxes = $('.subscription-widget > .group-checkboxes').find('.subscription-radio-group');

        if (groupCheckboxes.length == 0) {
            return;
        }

        for (let i = 0; i < groupCheckboxes.length; i++) {
            let $currItem = $(groupCheckboxes[i]);
            console.log($currItem)
            console.log($currItem.data('groupname'));
            let inputOfItem = $currItem.find(`input[name="${$currItem.data('groupname')}"]:checked`)
            console.log('input', $(inputOfItem).val());

            let value = $(inputOfItem).val();

            if (value == 1) {
                groupIds.push($currItem.data('id'));
            }
        }

        return groupIds;
    }

    $('.subscription-widget').on('click', '.subscription-submit', function (e) {
        getGroupIds();
        let flag = true;
        let $name = $('.subscription-widget input[name="name"]');
        let $email = $('.subscription-widget input[name="email"]');

        if (!Validator.validate($email, 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!Validator.validate($name, 'Name must be at least 3 letters.', function (val) {
            return Validator.hasMinimumLength(val.trim(), 3) && Validator.isStartingWithLetter(val.trim());
        })) {
            flag = false;
        }

        let groupCheckboxes = $('.subscription-widget > .group-checkboxes').find('.subscription-radio-group');

        if (groupCheckboxes.length == 0) {
            return;
        }

        for (let i = 0; i < groupCheckboxes.length; i++) {
            let $currItem = $(groupCheckboxes[i]);
            let inputOfItem = $currItem.find(`input[name="${$currItem.data('groupname')}"]:checked`)
            console.log('input', $(inputOfItem).val());

            if (!inputOfItem.length > 0) {
                $currItem.find('.validation-output').text('Please check one of the options.')
            }
            if (inputOfItem.val() <= 0){
                Notifier.createAlert({ containerId: '.subscription-form-wrapper', message: 'You faild to subscribed', status: 'danger', seconds: 5 });
                flag = false;
            }
        }
       
        if (flag) {
            var subscriptionModel = {
                name: $name.val(),
                email: $email.val(),
                groupIds: getGroupIds()
            }

            console.log('subscription-model', subscriptionModel);


            Data.postJson({ url: '/sitetriks/marketingEmailGroups/subscribe', data: subscriptionModel }).then(function (res) {
                if (res.success) {
                    Notifier.createAlert({ containerId: '.subscription-form-wrapper', message: res.message, status: (res.success ? 'info' : 'warning'), seconds: 5 });
                    $name.val('');
                    $email.val('');
                } else {
                    Notifier.createAlert({ containerId: '.subscription-form-wrapper', message: res.message, status: 'danger', seconds: 5 });
                }
              
            }, Data.defaultError);
        }
    });    
}
