'use strict';

function createUserGroup(url) {
    $('.move-to-right').on('click', function () {
        $('.users-to-role-select').removeClass('hidden');
        $('.all-users-select option:selected').each(function () {
            $(this).remove();
            var usersToRoleSelect = $('.users-to-role-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    $('.move-to-left').on('click', function () {
        $('.users-to-role-select option:selected').each(function () {
            $(this).remove();
            var usersToAllUsers = $('.all-users-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    function getAllUsersToAddRole() {
        var usernames = [];
        $('.users-to-role-select option').each(function () {
            usernames.push($(this).val());
        });

        return usernames;
    }

    $('#submit').on('click', function (e) {
        var flag = true;
        if ($('#title').val().length < 3) {
            Notifier.createAlert({ containerId: '#alert', message: 'Title must has more than 3 characters', success: 'danger' });
            flag = false;
            //window.location.replace('/sitetriks/userGroups');
        }

        e.preventDefault();

        var userGroup = JSON.stringify({
            Title: $('#title').val(),
            AllUsers: [],
            UserWithCurrentGroup: getAllUsersToAddRole()
        });

        if (flag) {

            $.ajax({
                type: 'POST',
                url: url,
                contentType: 'application/json',
                dataType: 'json',
                data: userGroup,
                success: function success(data, status) {
                    window.location = '/sitetriks/userGroups';
                },
                error: function error(err) {}
            });
        }
    });
}

function editUserGroup(url) {
    $('.move-to-right').on('click', function () {
        $('.all-users-select option:selected').each(function () {
            $(this).remove();
            var usersToRoleSelect = $('.users-to-role-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    $('.move-to-left').on('click', function () {
        $('.users-to-role-select option:selected').each(function () {
            $(this).remove();
            var usersToAllUsers = $('.all-users-select').append($('<option>', {
                value: $(this).val(),
                text: $(this).val()
            }));
        });
    });

    function getAllUsersToAddRole() {
        var usernames = [];
        $('.users-to-role-select option').each(function () {
            usernames.push($(this).val());
        });

        return usernames;
    }

    $('input[type="submit"]').on('click', function (e) {
        e.preventDefault();
        var userGroup = JSON.stringify({
            Title: $('#title').text(),
            AllUsers: [],
            UserWithCurrentGroup: getAllUsersToAddRole()
        });
        $.ajax({
            type: 'POST',
            url: '@Url.Action("Edit", "UserGroups")',
            contentType: 'application/json',
            dataType: 'json',
            data: userGroup,
            success: function success(data, status) {
                window.location.replace('/sitetriks/usergroups');
            },
            error: function error(_error) {
                Notifier.createAlert('alerts', 'Something went wrong');
            }
        });
    });

    $('.delete-btn').on('click', function (e) {
        var userGroup = JSON.stringify({
            Title: $('#title').text(),
            AllUsers: [],
            UserWithCurrentGroup: getAllUsersToAddRole()
        });

        $.ajax({
            type: 'POST',
            url: url,
            contentType: 'application/json',
            data: userGroup,
            success: function success() {
                window.location.replace('/sitetriks/userGroups');
            },
            error: function error() {}
        });
    });
}