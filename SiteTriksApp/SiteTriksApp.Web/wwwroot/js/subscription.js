$(document).ready(function () {
    function toggleForm() {
        $('.subscription-button').on('click', function () {
            $(this).next().toggle();
        });
    };

    $(window).ready(toggleForm());

    $('#subscription-submit').on('click', function (e) {
        let flag = true;
        let $name = $('#subscriptionForm input[name="name"]');
        let $email = $('#subscriptionForm input[name="email"]');
        let $featuresReleases = $("input[name='features-releases']:checked");
        let $promotionalMaterials = $("input[name='promotional-materials']:checked");

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

        if (!$featuresReleases.length > 0) {
            $('#features-releases-group .validation-output').text('Please check one of the options.');
            flag = false;
        }
        else {
            $('#features-releases-group .validation-output').text('');
        }

        if (!$promotionalMaterials.length > 0) {
            $('#promotional-materials-group .validation-output').text('Please check one of the options.');
            flag = false;
        }
        else {
            $('#promotional-materials-group .validation-output').text('');
        }

        if (flag) {

            var emailGroups = $featuresReleases.val().toString() + $promotionalMaterials.val().toString() + '0';
            console.log(emailGroups);

            var subscriberData = {
                Name: $name.val(),
                Email: $email.val(),
                MarketingEmailGroups: emailGroups
            };
            
            Data.postJson({ url: '/sitetriks/marketingEmails/subscribe', data: subscriberData }).then(function (res) {
                Notifier.createAlert({ containerId: '#subscription-form-container', message: res.message, status: (res.success ? 'info' : 'warning'), seconds: 5});

                $name.val('');
                $email.val('');
                $promotionalMaterials.attr('checked', false);
                $featuresReleases.attr('checked', false);
                $('.subscription-button').click();
            }, Data.defaultError);
        }
    });
})