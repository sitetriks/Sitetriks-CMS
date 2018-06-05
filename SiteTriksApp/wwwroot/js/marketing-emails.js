'use strict';

function editSubscribeInfo() {
    $('input[type=submit]').on('click', function (e) {
        var flag = true;

        if (!Validator.validate($('#email'), 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!Validator.validate($('#name'), 'Name must be at least 3 symbols', function (val) {
            return Validator.hasMinimumLength(val, 3) && Validator.isStartingWithLetter(val);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
    });
}

function sendEmails() {
    $('input[type=submit]').on("click", function (e) {

        e.preventDefault();

        var flag = true;

        if (!Validator.validate($('#sender'), 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (flag) {
            var emailData = JSON.stringify({
                Sender: $('#sender').val(),
                Subject: $('#subject').val(),
                Content: tinyMCE.get('content-area').getContent()
            });

            $.ajax({
                type: 'POST',
                url: '/sitetriks/marketingEmails/sendEmails',
                contentType: 'application/json',
                data: emailData,
                success: function success(data, status) {
                    Notifier.createAlert({ containerId: '#alert', message: 'Email was send successfully', success: 'success' });
                    window.location = '/sitetriks/marketingemails/sendemails';
                },
                error: function error(err) {
                    console.log(err);
                }
            });
        }
    });
}