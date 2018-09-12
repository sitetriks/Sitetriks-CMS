function createCategory(storeId) {
    let $form = $('#create-category-form');
    let $title = $form.find('.title-field');
    let $extraFields = $form.find('.extra-fields-wrapper');

    bindEvents();

    function createCategoryForm(ev) {
        let flag = false;
        let selectedFields = [];

        if (!Validator.validate($title, 'Title must be atleast 3 characters long!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        $extraFields.find('input[type="checkbox"]').each(function (_, element) {
            if (element.checked) {
                selectedFields.push($(element).attr('data-id'));
            }
        });

        if (flag) {
            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');
        let name = $title.val();
        let validationForm = new FormData();
        if (Validator.isFunction(validationForm.set)) {
            validationForm.set('storeId', storeId);
            validationForm.set('name', name);
        } else {
            validationForm.append('storeId', storeId);
            validationForm.append('name', name);
        }

        Data.postForm({ url: '/ecommerse/categorymanager/validatecategory', formData: validationForm }).then(function (res) {
            if (res.success) {
                let formData = new FormData($form[0]);
                if (Validator.isFunction(formData.set)) {
                    formData.set('SelectedFields', JSON.stringify(selectedFields));
                } else {
                    formData.append('SelectedFields', JSON.stringify(selectedFields));
                }

                return Data.postForm({ url: $form[0].action, formData });
            }

            Validator.validate($title, res.message || 'Name is already taken!', function (val) { return res.success; });
            Loader.hide();
            return Promise.reject();
        }).then(function (res) {
            if (res.success) {
                window.location.replace(`/ecommerse/storemanager/details/${storeId}`);
            }

            Loader.hide();
        });

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $form.on('submit', createCategoryForm);
    }

    function dispose() {
        $form.off('submit', createCategoryForm);
    }
}