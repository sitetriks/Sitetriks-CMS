$(document).ready(function () {
    if ($('#subscription-forms').length) {
        let isHidden = false;
        $(document).ready(function () {
            $('#subscription-forms > div').hide();
            isHidden = true;
        });

        $('#subscription-submit').on('click', function (e) {
            if (isHidden) {
                console.log(isHidden);
                $('#subscription-forms > div').show();
                isHidden = false;
            } else {
                let flag = true;

                if (!Validator.validate($('#email'), 'Must enter valid email', function (val) {
                    return Validator.validateEmail(val);
                })) {
                    flag = false;
                }

                if (!Validator.validate($('#name'), 'Name must be at least 3 letters.', function (val) {
                    return Validator.hasMinimumLength(val.trim(), 3) && Validator.isStartingWithLetter(val.trim());
                })) {
                    flag = false;
                }

                if (flag) {
                    var subscriberData = {
                        Name: $('#name').val(),
                        Email: $('#email').val()
                    };

                    Data.postJson({ url: '/sitetriks/marketingEmails/subscribe', data: subscriberData }).then(function (res) {
                        Notifier.createAlert({ message: res.message, status: (res.success ? 'success' : 'warning') });
                        isHidden = true;
                        $('#subscription-forms > div').hide();
                    }, Data.defaultError);
                }
            }
        });
    }
})