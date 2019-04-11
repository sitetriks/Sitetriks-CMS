$(document).ready(function () {
    var $login = $('#btn-login, #btn-login-request');
    var $logout = $('#btn-logout');
    var $register = $('#btn-register');

    $logout.on('click', function () { logout(); });

    $login.on('click', function () { login(); });

    $register.on('click', function () { register(); });
});

function loadPartialView(element, url) {
    var loadingGif = $('<img />', {
        src: '/content/images/loading.gif',
        class: 'blur-content'
    });
    element.append(loadingGif);

    $.ajax({
        url: url,
        success: function (result) {
            loadingGif.remove();
            element.append(result);
        }
    });
}

function login() {
    var modalContainer = Blur.add({});
    modalContainer.addClass('modal-container');

    $('<div></div>', {
        click: Blur.remove,
        class: 'close-modal glyphicon glyphicon-remove',
        id: 'close-modal'
    }).appendTo(modalContainer);

    loadPartialView(modalContainer, '/widget/userwidget/loginregister?login=true&register=false');
}

function register() {
    var modalContainer = Blur.add({});
    modalContainer.addClass('modal-container');

    $('<div></div>', {
        click: Blur.remove,
        class: 'close-modal glyphicon glyphicon-remove',
        id: 'close-modal'
    }).appendTo(modalContainer);

    loadPartialView(modalContainer, '/widget/userwidget/loginregister?login=false&register=true');
}

function logout() {
    var token = $('#logoutForm').find('input[name="__RequestVerificationToken"]').val();

    $.ajax({
        url: "/widget/userwidget/logoff",
        type: "POST",
        data: {
            __RequestVerificationToken: token
        },
        success: function (response) {
            if (response.success) {
                location.reload();
            }
        }
    });
}