'use strict';

$(document).ready(function () {
    function toggleForm() {
        $('.subscription-button').on('click', function () {
            console.log($(this));
            $(this).next().toggle();
        });
    };

    $(window).ready(toggleForm());

    $('#subscription-submit').on('click', function (e) {
        var flag = true;
        var $name = $('#subscriptionForm input[name="name"]');
        var $email = $('#subscriptionForm input[name="email"]');
        var $featuresReleases = $("input[name='features-releases']:checked");
        var $promotionalMaterials = $("input[name='promotional-materials']:checked");

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

        if (!$featuresReleases.val()) {
            $('#features-releases-group .validation-output').text('Please check one of the options.');
            flag = false;
        } else {
            $('#features-releases-group .validation-output').text('');
        }

        if (!$promotionalMaterials.val()) {
            $('#promotional-materials-group .validation-output').text('Please check one of the options.');
            flag = false;
        } else {
            $('#promotional-materials-group .validation-output').text('');
        }

        if (flag) {
            var subscriberData = {
                Name: $name.val(),
                Email: $email.val()
            };

            Data.postJson({ url: '/sitetriks/marketingEmails/subscribe', data: subscriberData }).then(function (res) {
                Notifier.createAlert({ message: res.message, status: res.success ? 'success' : 'warning' });
                $name.val('');
                $email.val('');
                $promotionalMaterials.attr('checked', false);
                $featuresReleases.attr('checked', false);
                $('.subscription-button').click();
            }, Data.defaultError);
        }
    });
});