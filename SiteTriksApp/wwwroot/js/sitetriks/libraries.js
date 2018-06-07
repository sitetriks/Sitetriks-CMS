function initLibraries(grid, config) {
    if ($('#libs').val()) {
        config.defaultFilters = [{
            propertyName: 'LibraryId',
            comparison: 1,
            value: $('#libs').val()
        }];
    }

    let gridObj = grid.init('.grid', config);
    selectLibrary.apply($('#libs'));

    $('.grid').on("click", ".copy", function () {
        let url = location.origin + "/files/" + $(this).attr("data-url");

        $('.copy.btn-success').each(function () {
            $(this).addClass('btn-info');
            $(this).removeClass('btn-success');
        });

        $(this).removeClass('btn-info');
        $(this).addClass('btn-success');

        copyToClipboard(url);
    });

    $('#libs').on('change', selectLibrary);

    function selectLibrary(ev) {
        let value = $(this).val();

        if (value) {
            gridObj.changeDefaultFilter({
                propertyName: 'LibraryId',
                comparison: 1,
                value: value
            });

            $('#btn-edit-lib').show()
            $('#btn-delete-lib').show();
        } else {
            gridObj.changeDefaultFilter();

            $('#btn-edit-lib').hide()
            $('#btn-delete-lib').hide();
        }
    }

    // --------------------------------------------------------
    // edit/delete library

    $('#btn-edit-lib').on('click', function (ev) {
        let prefix = $('#libs :selected').attr('data-url');

        if (prefix && prefix.length > 0) {
            window.location.href = '/sitetriks/libraries/edit?url=' + prefix;
        }
    })


    $('#btn-delete-lib').on('click', function (ev) {
        let id = $('#libs').val();

        Loader.show('#fff');
        Data.deleteJson({ url: '/sitetriks/libraries/delete/', data: { id } }).then(function (res) {
            if (res.success) {
                location.reload(true);
            } else {
                Loader.hide();
                console.log(res);
            }
        })

    })

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(element).select();
        document.execCommand("copy");
        $temp.remove();
    }
}

function editLibraries(isNameAvailableLink) {
    $('#input-name').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css("border", "1px solid green");
            $("#validation-name").text('');

            Data.postJson({ url: isNameAvailableLink, data: { name: $target.val(), id: '@Model.Id' } }).then(function (res) {
                if (!res.success) {
                    $target.css("border", "1px solid red");
                    $("#validation-name").text('Name is already taken!');
                }
            })
        } else {
            $target.css("border", "1px solid red");
            $("#validation-name").text('Tittle must be atleast 3 symbols!');
        }
    });

    $('#create-library-form').on('submit', function (ev) {
        if ($('#input-name').val().length < 3) {
            $('#validation-name').text('Prefix must be atleast 3 characters long!');
            $('#input-name').css("border", "1px solid red");
            ev.preventDefault();
            return false;
        } else {
            $('#validation-name').text('');
            $('#input-name').css("border", "1px solid green");
        }

        Loader.show('#fff');
        Data.postJson({ url: isNameAvailableLink, data: { name: $('#input-name').val(), id: '@Model.Id' } }).then(function (res) {
            if (res.success) {
                return Data.postForm({ formData: new FormData(_this) });
            } else {
                $('#input-name').css("border", "1px solid red");
                $("#validation-name").text('Name is already taken!');
                Loader.hide();
            }
        }).then(function (res) {
            if (res.success) {
                window.location.replace('/sitetriks/libraries/');
            } else {
                Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'Name  is aready in use!' });
                Loader.hide();
            }
        })
    });
}

function createLibrary(validateUrlLink, isNameAvailableLink) {
    var $urlField = $('#input-prefix');
    var $urlValidation = $('#validation-prefix');
    var $btnSubmit = $('input[type="submit"]');
    populateUrl('#input-name', '#input-prefix', validateUrlOnChange);

    var timer = 0;
    $urlField.on('input change', function (e) {
        validateUrlOnChange(e);
    });
    
    $('#library-type').on('change', function (ev) {
        let $allowedTypes = $('#allowed-types');
        $allowedTypes.html('');

        Loader.show('#fff');
        Data.getJson({ url: '/sitetriks/libraries/GetAllowedForType?type=' + this.value }).then(function (res) {
            if (res.success) {
                $allowedTypes.html('Allowed files: ' + res.ext);
            }

            Loader.hide();
        });
    });

    $('#library-type').trigger('change');

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                validateUrl(validateUrlLink + '?url=' + url, $urlField, $urlValidation, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css("border", "1px solid red");
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $('#input-name').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css("border", "1px solid green");
            $("#validation-name").text('');

            Data.postJson({ url: isNameAvailableLink, data: { name: $target.val() } }).then(function (res) {
                if (!res.success) {
                    $target.css("border", "1px solid red");
                    $("#validation-name").text('Name is already taken!');
                }
            })
        } else {
            $target.css("border", "1px solid red");
            $("#validation-name").text('Tittle must be atleast 3 symbols!');
        }
    });

    $('#create-library-form').on('submit', function (ev) {
        let flag = false;
        let _this = this;

        if ($('#input-name').val().length < 3) {
            $('#validation-name').text('Prefix must be atleast 3 characters long!');
            $('#input-name').css("border", "1px solid red");
            flag = true;
        } else {
            $('#validation-name').text('');
            $('#input-name').css("border", "1px solid green");
        }

        if ($('#input-prefix').val().length < 3) {
            $('#validation-prefix').text('Prefix must be atleast 3 characters long!');
            $('#input-prefix').css("border", "1px solid red");
            flag = true;
        } else {
            $('#validation-prefix').text('');
            $('#input-prefix').css("border", "1px solid green");
        }

        if (flag) {
            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');
        Data.getJson({ url: validateUrlLink + '?url=' + $('#input-prefix').val() }).then(function (res) {
            console.log(res.success);
            console.log(isNameAvailableLink);
            if (res.success) {
                return Data.postJson({
                    url: isNameAvailableLink, data: { name: $('#input-name').val() } })

            } else {
                $urlField.css("border", "1px solid red");
                $urlValidation.text('Prefix is invalid or already in use!');
                Loader.hide();
            }
        }).then(function (res) {
            console.log(res);
            if (res.success) {
                return Data.postForm({ formData: new FormData(_this) });
            } else {
                $('#input-name').css("border", "1px solid red");
                $("#validation-name").text('Name is already taken!');
                Loader.hide();
            }
        }).then(function (res) {
            if (res.success) {
                window.location.replace('/sitetriks/libraries/');
            } else {
                Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'Name or prefix is aready in use!' });
                Loader.hide();
            }
        })

        ev.preventDefault();
        return false;
    });
}