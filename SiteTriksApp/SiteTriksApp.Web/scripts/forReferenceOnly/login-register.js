// DEPRECATED
$(document).ready(function () {
    $('#suc-loging').on('click', function () {
        $('#register-form-container').addClass('hidden');
        $('#login-form-container').removeClass('hidden');
    });

    $('#suc-register').on('click', function () {
        $('#register-form-container').removeClass('hidden');
        $('#login-form-container').addClass('hidden');
    });

    $('#login-form').on('submit', function (evt) {
        evt.preventDefault();

        var email = $('#Login_Email');
        var password = $('#Login_Password');
        var rememberMe = $('#Login_RememberMe').prop('checked');
        var token = $('#login-form').find('input[name="__RequestVerificationToken"]').val();

        if (email.val().trim() === '') {
            email.addClass('border-error');
            return;
        } else {
            email.removeClass('border-error');
        }

        if (password.val().trim() === '') {
            password.addClass('border-error');
            return;
        } else {
            password.removeClass('border-error');
        }

        var data = {
            Email: email.val(),
            Password: password.val(),
            RememberMe: rememberMe,
            __RequestVerificationToken: token
        }

        $.ajax({
            url: '/widget/userwidget/login',
            method: 'POST',
            async: true,
            data: data,
            success: function (response) {
                if (response.success) {
                    // These are cool, but they won't work if there are login based widgets on the page :(
                    //$('#btn-login').remove();            
                    //$('#btn-register').remove();
                    //$('#btn-logout').removeClass('hidden');
                    //$('#close-modal').click();

                    //So brute force!
                    location.reload();
                } else {
                    $('#login-error').removeClass('hidden');
                    password.val('');
                }
            }
        });

        return false;
    });

    $('#register-form').on('submit', function (evt) {
        evt.preventDefault();

        var email = $('#Register_Email');
        var password = $('#Register_Password');
        var confirmPassword = $('#Register_ConfirmPassword');
        var token = $('#register-form').find('input[name="__RequestVerificationToken"]').val();

        if (email.val().trim() === '') {
            email.addClass('border-error');
            return;
        } else {
            email.removeClass('border-error');
        }

        if (password.val().trim() === '') {
            password.addClass('border-error');
            return;
        } else {
            password.removeClass('border-error');
        }

        if (confirmPassword.val().trim() === '') {
            confirmPassword.addClass('border-error');
            return;
        } else {
            confirmPassword.removeClass('border-error');
        }

        var data = {
            Email: email.val(),
            Password: password.val(),
            ConfirmPassword: confirmPassword.val(),
            __RequestVerificationToken: token
        }

        $.ajax({
            url: '/widget/userwidget/register',
            method: 'POST',
            async: true,
            data: data,
            success: function (response) {
                if (response.success) {
                    // These are cool, but they won't work if there are login based widgets on the page :(
                    //$('#btn-login').remove();            
                    //$('#btn-register').remove();
                    //$('#btn-logout').removeClass('hidden');
                    //$('#close-modal').click();

                    //So brute force!
                    location.reload();
                } else {
                    $('#register-error').removeClass('hidden');
                    password.val('');
                    confirmPassword.val('');
                }
            }
        });

        return false;
    });
});