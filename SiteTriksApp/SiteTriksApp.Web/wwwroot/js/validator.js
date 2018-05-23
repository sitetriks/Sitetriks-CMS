var Validator = (function () {

    function validate($element, errorMessage, validateFunc) {
        let value = $element.val();
        if (validateFunc(value)) {
            $element.css('border', '1px solid #ccc');
            $element.next('span').text('');
            return true;
        } else {
            $element.css('border', '1px solid #f00');
            $element.next('span').text(errorMessage || 'Invalid value!');
            return false
        }
    }

    function hasMinimumLength(value, minLenght) {

        if (value && value.length >= minLenght) {
            return true;
        } else {
            return false;
        }
    }

    function isAlphaNumeric(value) {
        let pattern = /^([a-z0-9]+)$/i;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isAlphaNumericAndSemicolon(value) {
        let pattern = /^[a-zA-Z0-9;]+$/;

        return isPassing(value, pattern);
    }

    function isUrlFriendly(value) {
        let pattern = /^[a-zA-Z0-9-_]+$/;

        return isPassing(value, pattern);
    }

    function isStartingWithLetter(value) {
        let pattern = /^[a-z]/i;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function validateEmail(value) {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isPassing(value, pattern) {
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isDecimalNumber(value) {
        let pattern = /^\d+\.\d{0,2}$/;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isNumber(value) {
        let pattern = /^-?\d+\.?\d*$/;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    return {
        validate,
        isAlphaNumeric,
        hasMinimumLength,
        validateEmail,
        isStartingWithLetter,
        isUrlFriendly,
        isNumber,
        isDecimalNumber,
        isAlphaNumericAndSemicolon
    }
}());
