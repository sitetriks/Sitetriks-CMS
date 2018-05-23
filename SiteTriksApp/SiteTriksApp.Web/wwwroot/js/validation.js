function validateUrl(validateUrl, $urlField, $validationField, $btnSubmit) {
    let pattern = new RegExp(/^[\w\-\.]+$/i);
    if (!pattern.test($urlField.val())) {
        $urlField.css("border", "1px solid red");
        $validationField.text('Url can only contain letters, numbers, dash(-), point(.) and underscore(_) !');
        $btnSubmit.attr("disabled", true);
        return;
    }

    $.ajax({
        method: 'GET',
        url: validateUrl,
        contentType: 'application/json',
        success: function success(res) {
            if (res.success) {
                $urlField.css("border", "1px solid green");
                $validationField.text('');
                $btnSubmit.attr("disabled", false);
            } else {
                $urlField.css("border", "1px solid red");
                $validationField.text('Url is invalid or already in use!');
                $btnSubmit.attr("disabled", true);
            }
        }
    });
}

function validateTitles($titles, minLength, maxLength) {
    $titles.on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length < minLength) {
            $target.css("border", "1px solid red");
            $target.siblings("strong").children("span").text('&nbsp;&nbsp;Tittle must be atleast ' + minLength + ' symbols!');
        } else if ($target.val().length > maxLength) {
            $target.css("border", "1px solid red");
            $target.siblings("strong").children("span").text('&nbsp;&nbsp;Tittle must be less than ' + maxLength + ' symbols!');
        } else {
            $target.css("border", "1px solid green");
            $target.siblings("strong").children("span").text('');
        }
    });
}

function einValidation($einInput) {
    $einInput.keyup(function () {
        var value = $einInput.val();

        value = removeAllNonNumber(value);

        if (value.length > 2) {
            value = insert(value, 2, '-');
            value = value.slice(0, 10);
        }

        $einInput.val(value);
    });
}

function removeAllNonNumber(text) {
    text = text.replace(/\D/g, '');

    return text;
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function parseYouTubeUrl(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    var result = '';

    if (match && match[2].length == 11) {
        result = match[2];
    } else {
        return 'error';
    }

    var t = getParameterByName('t', url);
    if (t) {
        t = t.replace(/\D/g, ':');

        var time = t.split(':').filter(function (n) { return n != '' }).reverse();
        var seconds = Date.UTC(1970, 0, 1, time[2] || 0, time[1] || 0, time[0]) / 1000;

        result = result + "?start=" + seconds;
    }

    return result;
}

// Adding custom parse function for a list of urls

function parseYoutubeVideosList(input) {
    var videosList = input.split(";");
    console.log(videosList);
    var videoIds = [];

    for (let i = 0; i < videosList.length; i++) {
        let parsedUrl = parseYouTubeUrl(videosList[i]);
        videoIds.push(parsedUrl);
        console.log(videoIds);
    }
    return videoIds;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function validateVideo() {
    var source = $('#video-source').val();
    var name = $('#video-name').val();
    let $validator = $('#video-validation');
    if (name.length < 3) {
        $validator.text('Invalid video source!');
        $('#btn-edit-widget').prop('disabled', true);
        $('#btn-add-widget').prop('disabled', false);
    } else {
        $validator.text('');
        $('#btn-edit-widget').prop('disabled', false);
        $('#btn-add-widget').prop('disabled', false);
    }

    //TODO:finish when have autocomplete
}

function phoneValidation($phoneInput) {
    $phoneInput.keyup(function () {
        var value = $phoneInput.val();

        value = removeAllNonNumber(value);

        if (value.length == 0) {
            value = '';
            $phoneInput.val(value);
            return;
        }

        value = value.slice(0, 10);

        var resValue = value;

        resValue = insert(value, 0, '(');

        if (value.length > 3) {
            resValue = insert(resValue, 4, ')');
            resValue = insert(resValue, 5, ' ');
        }

        if (value.length > 6) {
            resValue = insert(resValue, 9, '-');
        }

        $phoneInput.val(resValue);
    });
}

$('body').on('focusout', '.should-validate-not-empty', function (ev) {
    validateFieldRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-email-not-empty', function (ev) {
    validateEmailRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-email-not-required', function (ev) {
    validateEmailNotRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-ein-not-empty', function (ev) {
    validateEinRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-phone-not-required', function (ev) {
    validatePhoneNotRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-phone-not-empty', function (ev) {
    validatePhoneRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-password-not-empty', function (ev) {
    validatePasswordRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-day-required', function (ev) {
    validateNumberRequired($(ev.target), 1, 31);
});

$('body').on('focusout', '.should-validate-month-required', function (ev) {
    validateNumberRequired($(ev.target), 1, 12);
});

$('body').on('focusout', '.should-validate-year-required', function (ev) {
    validateNumberRequired($(ev.target), 1970, 9999);
});

$('body').on('focusout', '.should-validate-hour-required', function (ev) {
    validateNumberRequired($(ev.target), 0, 24);
});

$('body').on('focusout', '.should-validate-integer-not-required', function (ev) {
    validateNumberIsIntegerNotRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-dropdown-required', function (ev) {
    validateDropdownRequired($(ev.target));
});

$('body').on('change', '.should-validate-dropdown-required', function (ev) {
    validateDropdownRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-same-password-required', function (ev) {
    validateSamePasswordRequired($(ev.target));
});

$('body').on('focusout', '.should-validate-same-email-required', function (ev) {
    validateSameEmailRequired($(ev.target));
});

function focusOutErrorMessage($field, show, message) {
    if (!message) {
        message = '';
    }
    var errorLabelId = 'error-' + $field.attr('id');
    $('#' + errorLabelId).remove();

    if (show) {
        $('<span id="' + errorLabelId + '" class="input-error">' + message + '</span>')
            .insertAfter($field);
    }
}

function validateFieldRequired($field) {

    if (!isFieldValid($field)) {
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Required &nbsp;&nbsp;');

        return false;
    }

    focusOutErrorMessage($field, false);
    return true;
}

function validatePasswordRequired($field) {

    if (!validateFieldRequired($field)) {
        return false;
    }

    if (!validatePassword($field.val())) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Incorrrect format. Please refer to help bubble.&nbsp;&nbsp;');

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validateEmailRequired($field) {

    if (!validateFieldRequired($field)) {
        return false;
    }

    if (!validateEmail($field.val())) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Email format is not valid. &nbsp;&nbsp;');

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validateSameEmailRequired($field) {
    var isFieldValid = validateSameFieldsRequired($field)

    if (isFieldValid) {
        isFieldValid = validateEmailRequired($field);
    }

    return isFieldValid;
}

function validateSamePasswordRequired($field) {
    var isFieldValid = validateSameFieldsRequired($field)

    if (isFieldValid) {
        isFieldValid = validatePasswordRequired($field);
    }

    return isFieldValid;
}

function validateEinRequired($field) {

    if (!validateFieldRequired($field)) {
        return false;
    }

    var einVal = $field.val().replace(/\D/g, '');

    if (einVal.length != 9) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;EIN must be exactly 9 digits &nbsp;&nbsp;');
        return false;
    }

    var isEinAvalible = true;

    $.ajax({
        url: '/widget/registrationwidget/iseinavalible?ein=' + einVal,
        type: 'GET',
        success: function success(response) {
            if (response.success) {
                if (!response.isUnique) {
                    isEinAvalible = false;
                }
            } else {
                showError(response.message);
            }
        },
        async: false
    });

    if (isEinAvalible === false) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;The EIN matches an organization that is already registered. Please login to your account at <a href="/widget/account/login" class="link-login">here</a>. If you have questions or need help, please contact ' + einNotUniqueErrorMessageEmailPlaceholder + '.');
        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validateSameFieldsRequired($field) {
    if (!validateFieldRequired($field)) {
        return false;
    }

    var value = $field.val();
    var compareWithId = $field.attr('data-same-id');
    var compareWithField = $('#' + compareWithId);
    var compareWithValue = compareWithField.val();
    var errorMessage = $field.attr('data-error-message');

    if (compareWithValue !== value) {
        $field.addClass('border-error');
        compareWithField.addClass('border-error');

        focusOutErrorMessage($field, true, errorMessage);
        focusOutErrorMessage(compareWithField, true, errorMessage);

        return false;
    }

    $field.removeClass('border-error');
    compareWithField.removeClass('border-error');
    focusOutErrorMessage($field, false);
    focusOutErrorMessage(compareWithField, false);

    return true;
}

function validatePhoneRequired($field) {

    if (!validateFieldRequired($field)) {
        return false;
    }

    var phoneClear = removeAllNonNumber($field.val());

    if (phoneClear.length != 10) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Phone must contain exactly 10 digits &nbsp;&nbsp;');

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validatePhoneNotRequired($field) {
    if ($field.val().length === 0) {
        $field.removeClass('border-error');
        focusOutErrorMessage($field, false);
        return true;
    }

    var phoneClear = removeAllNonNumber($field.val());

    if (phoneClear.length != 10) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Phone must contain exactly 10 digits &nbsp;&nbsp;');

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validateDropdownRequired($field) {
    var selectedVal = $field.val();

    if (selectedVal === undefined || selectedVal === '') {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Required&nbsp;&nbsp;');

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validateEmailNotRequired($field) {
    if ($field.val().length === 0) {
        $field.removeClass('border-error');
        focusOutErrorMessage($field, false);
        return true;
    }

    if (!validateEmail($field.val())) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Email is not in valid format &nbsp;&nbsp;');

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validateNumberRequired($field, min, max) {
    if (!validateFieldRequired($field)) {
        return false;
    }

    let numVal = +$field.val();

    if (!isNumeric(numVal)) {
        focusOutErrorMessage($field, false, '&nbsp;&nbsp;Field is not numeric type &nbsp;&nbsp;');
        return false;
    }

    if (numVal < min || numVal > max) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;The number must be between ' + min + ' and ' + max);

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function validateNumberIsIntegerNotRequired($field) {
    if ($field.val().length === 0) {
        focusOutErrorMessage($field, false);
        $field.removeClass('border-error');
        return true;
    }

    let numVal = +$field.val();

    if (!isNumeric(numVal)) {
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;Field is not numeric type &nbsp;&nbsp;');
        return false;
    }

    if (!isInteger(numVal)) {
        $field.addClass('border-error');
        focusOutErrorMessage($field, true, '&nbsp;&nbsp;The number must be integer &nbsp;&nbsp;');

        return false;
    }

    $field.removeClass('border-error');
    focusOutErrorMessage($field, false);
    return true;
}

function showError(message) {
    $('#error-message').show();
    $('#error-message').text(message);
}

function hideError() {
    $('#error-message').hide();
    $('.input-error').hide();
}

function isFieldValid($obj, errMessage) {
    if (!isInputFilled($obj)) {
        $obj.addClass('border-error');

        if (!!errMessage) {
            showError(errMessage);
        }

        return false;
    } else {
        $obj.removeClass('border-error');

        return true;
    }
}

function isInputFilled($obj) {
    return $obj.val().trim() !== '';
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword(password) {
    var upperLetterCount = 0;
    var lowerLetterCount = 0;
    var digitCount = 0;

    for (var i = 0; i < password.length; ++i) {
        if (isDigit(password[i])) {
            ++digitCount;
        } else if (isUpperCase(password[i])) {
            ++upperLetterCount;
        } else if (isLowerCase(password[i])) {
            ++lowerLetterCount;
        }
    }

    var specialSymbolCount = password.length - upperLetterCount - lowerLetterCount - digitCount;

    if (upperLetterCount === 0 || digitCount === 0 || specialSymbolCount === 0 || password.Length < 6) {
        return false;
    } else {
        return true;
    }
}

function validatePhone(phone) {
    for (var i = 0; i < phone.length; ++i) {
        if (!isDigit(phone[i]) && phone[i] !== '(' && phone[i] !== ')' && phone[i] !== '-' && phone[i] !== '+' && phone[i] !== '/') {
            return false;
        }
    }

    return true;
}

function isInteger(val) {
    return val === (val | 0);
}

var isUpperCase = function isUpperCase(letter) {
    return letter === letter.toUpperCase() && letter.toLowerCase() != letter.toUpperCase();
};

var isLowerCase = function isLowerCase(letter) {
    return letter === letter.toLowerCase() && letter.toLowerCase() != letter.toUpperCase();
};

var isDigit = function (ch) {
    return isNaN(ch) === false;
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validateAllFields(classToAdd, wrapperSelector) {
    if (!classToAdd) {
        classToAdd = '';
    }

    if (!wrapperSelector) {
        wrapperSelector = null;
    }

    var allFieldsValid = true;
    var prefix = '';

    if (wrapperSelector != null) {
        prefix = wrapperSelector + ' ';
    }

    $(prefix + ".should-validate-not-empty" + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateFieldRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-email-not-empty' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateEmailRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-email-not-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateEmailNotRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-ein-not-empty' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateEinRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-phone-not-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validatePhoneNotRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-phone-not-empty' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validatePhoneRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-password-not-empty' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validatePasswordRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-day-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateNumberRequired(el, 1, 31)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-month-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateNumberRequired(el, 1, 12)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-year-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateNumberRequired(el, 1970, 9999)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-hour-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateNumberRequired(el, 0, 24)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-integer-not-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateNumberIsIntegerNotRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-dropdown-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateDropdownRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-same-email-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateSameEmailRequired(el)

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    $(prefix + '.should-validate-same-password-required' + classToAdd).each(function (index) {
        var el = $(this);

        var isFieldValid = validateSamePasswordRequired(el);

        if (isFieldValid === false) {
            allFieldsValid = false;
        }
    });

    return allFieldsValid;
}