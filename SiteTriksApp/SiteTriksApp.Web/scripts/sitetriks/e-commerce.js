function createECommerce() {
    $('#create-ecommerce-item-form').on('submit', function (e) {
        let flag = true;

        if (!Validator.validate($('#price'), 'Price is empty or is not a valid number', function (val) {
            return Validator.isNumber(val);
        })) {
            flag = false;
        }

        if (!Validator.validate($('#title'), 'Title must contains at least 3 symbols', function (val) {
            return Validator.hasMinimumLength(val.trim(), 3);
        })) {
            flag = false;
        }

        if (!flag) {

            e.preventDefault();
        }
    })
}

function editEcommerce() {
    $('#edit-ecommerce-item-form').on('submit', function (e) {
        let flag = true;

        if (!Validator.validate($('#price'), 'Price is empty or is not a valid number', function (val) {
            return Validator.isNumber(val);
        })) {
            flag = false;
        }

        if (!Validator.validate($('#title'), 'Title must contains at least 3 symbols', function (val) {
            return Validator.hasMinimumLength(val.trim(), 3);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
    })
}