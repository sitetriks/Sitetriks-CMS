function createClass(assemblyName) {
    Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        Loader.hide();

        $('#btn-add-field').on('click', (e) => {
            if ($('.field-item').length > 4) {
                console.log('can not have more than 4 fields');
                return;
            }

            $(document.createElement('div')).html(res)
                .addClass('field-item')
                .appendTo('#fields-container');

            if ($('.field-item').length > 4) {
                $('#btn-add-field').hide();
            }
        });

        $('#fields-container').on('click', '.btn-delete-field', (e) => {
            let $trigger = $(e.target);
            $trigger.parents('.field-item').remove();

            if ($('.field-item').length <= 4) {
                $('#btn-add-field').show();
            }
        });

        $('#form-create-class').on('submit', (e) => {
            Loader.show('#fff', "/images/LOGO.png");

            let flag = false;
            $('input.validate-field-name').each((_, element) => {
                if (!Validator.validate($(element), 'Field Name must be atleast 3 symbols and alphanumeric and can not start with number! Whitespace is not alphanumeric! Field name must be different from Title!', function (val) {
                    return Validator.hasMinimumLength(val, 3) && Validator.isAlphaNumeric(val) && Validator.isStartingWithLetter(val) && val != "Title";
                })) {
                    flag = true;
                }
            });

            $('select.validate-type-dropdown').each((_, element) => {
                if (!Validator.validate($(element), 'Field Type must be selected!', function (val) { return !!val; })) {
                    flag = true;
                }
            });

            if (!Validator.validate($('#input-class-title'), 'Title must be atleast 3 symbols', function (val) { return Validator.hasMinimumLength(val, 3); })) {
                flag = true;
            }

            if (flag) {
                Loader.hide();

                e.preventDefault();
                return false;
            }

            let formData = new FormData();
            let name = $('#input-class-name').val();
            let properties = [];
            $('.field-item').each((_, element) => {
                let name = $(element).find('input:text').val();
                let type = $(element).find('select').val();
                properties.push({ name, type });
            })
            
            if ((formData.set && {}.toString.call(formData.set) === '[object Function]')) {
                formData.set('name', name);
                formData.set('title', $('#input-class-title').val());
                formData.set('assemblyName', assemblyName);
                formData.set("properties", JSON.stringify(properties));
            } else {
                formData.append('name', name);
                formData.append('title', $('#input-class-title').val());
                formData.append('assemblyName', assemblyName);
                formData.append("properties", JSON.stringify(properties));                
            }
            
            Data.postForm({ formData }).then((res) => {
                if (res.success) {
                    handleAppRestart({});                    
                }
                else {
                    Notifier.createAlert({ containerId: '#alerts', message: 'Dynamic class with this name already exist.', status: 'danger' });
                    Loader.hide();
                }
            }, (res) => { console.log(res); })
            
            
            e.preventDefault();
            return false;
        });
    });
}

function deleteClass(element) {
    var assemblyName = $(element).data('assemblyName');
    var className = $(element).data('className');
    
    $.ajax({
        method: 'GET',
        url: '/sitetriks/dynamic/deleteClass?assemblyName=' + assemblyName + '&className=' + className,
        contentType: 'application/json',
        success: function success(res) {
            console.log(res);
            handleAppRestart({url: '/sitetriks/dynamic'})
        }
    });
}

function createItem(modelName, assemblyName) {
    $('#btn-create-item').on('click', function (e) {
        let $notifier = $('#create-class-notifier');
        $notifier.text('');
        let flag;
        let body = {
            className: modelName,
            assemblyName: assemblyName,
            properties: []
        }

        $('.class-property').each(function (_, element) {
            let $item = $(element);
            let name = $item.attr('data-name');
            let type = $item.attr('data-type');
            let value = $item.val();

            switch (type) {
                case 'int':
                    if (parseInt(value) != value) {
                        $notifier.text(name + ' must be integer number!')
                        flag = true;
                    }
                    break;

                case 'decimal':
                    if (parseFloat(value) != value) {
                        $notifier.text(name + ' must be decimal floating point number!')
                        flag = true;
                    }
                    break;

                case 'string-html':
                    value = textEditor.getContent($item.attr('id'));
                    break;

                case 'string-long':
                    if (value && value.length > 3999) {
                        $notifier.text(name + ' must be shorter than 4000 symbols!')
                        flag = true;
                    }
                    break;

                default:
            }

            body.properties.push(JSON.stringify({
                name: name,
                type: type,
                value: value
            }));
        })

        if (flag) {
            return;
        }

        $.ajax({
            method: 'POST',
            url: '/sitetriks/dynamic/createitem',
            data: body,
            success: function (res) {
                if (res.success) {
                    window.location.replace(`/sitetriks/dynamic/classdetails?assemblyName=${body.assemblyName}&className=${body.className}`);
                }
            },
            error: function (res) {
                console.log(res);
            }
        });
    });
}

function editClass(modelName, assemblyName) {
    Loader.show('#fff');

    if ($('.field-item').length > 4) {
        $('#btn-add-field').hide();
    }

    Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        Loader.hide();

        $('#btn-add-field').on('click', (e) => {
            if ($('.field-item').length > 4) {
                console.log('can not have more than 4 fields');
                return;
            }

            $(document.createElement('div')).html(res)
                .addClass('field-item')
                .appendTo('#fields-container');

            if ($('.field-item').length > 4) {
                $('#btn-add-field').hide();
            }
        });

        $('#fields-container').on('click', '.btn-delete-field', (e) => {
            let $trigger = $(e.target);
            $trigger.parents('.field-item').remove();

            if ($('.field-item').length <= 4) {
                $('#btn-add-field').show();
            }
        });

        $('#form-edit-class').on('submit', (e) => {
            Loader.show('#fff');

            let flag = false;
            $('input.validate-field-name').each((_, element) => {
                if (!Validator.validate($(element), 'Field Name must be atleast 3 symbols and alphanumeric and can not start with number! Whitespace is not alphanumeric! Field name must be different from Title!', function (val) {
                    return Validator.hasMinimumLength(val, 3) && Validator.isAlphaNumeric(val) && Validator.isStartingWithLetter(val) && val != "Title";
                })) {
                    flag = true;
                }
            });

            $('select.validate-type-dropdown').each((_, element) => {
                if (!Validator.validate($(element), 'Field Type must be selected!', function (val) { return !!val; })) {
                    flag = true;
                }
            });

            if (!Validator.validate($('#input-class-title'), 'Title must be atleast 3 symbols', function (val) { return Validator.hasMinimumLength(val, 3); })) {
                flag = true;
            }

            if (flag) {
                Loader.hide();

                e.preventDefault();
                return false;
            }

            let formData = new FormData();
            let newName = $('#input-class-name').val();
            let oldName = modelName;
            let properties = [];

            $('.field-item').each((_, element) => {
                let name = $(element).find('input:text').val();
                let type = $(element).find('select').val();
                properties.push({ name, type });
            });
            // let assemblyName = '@ViewBag.AssemblyName';
            if ((formData.set && {}.toString.call(formData.set) === '[object Function]')) {
                formData.set('oldName', oldName);
                formData.set('newName', newName);
                formData.set('title', $('#input-class-title').val());
                formData.set('assemblyName', assemblyName);
                formData.set('properties', JSON.stringify(properties));
            } else {
                formData.append('oldName', oldName);
                formData.append('newName', newName);
                formData.append('title', $('#input-class-title').val());
                formData.append('assemblyName', assemblyName);
                formData.append('properties', JSON.stringify(properties));
            }

            Data.postForm({ formData }).then((res) => {
                if (res.success) {
                    handleAppRestart({});
                }
            }, (res) => { console.log(res); })


            e.preventDefault();
            return false;
        });
    });
}

function editItem(id, className, assemblyName) {
    $('#btn-edit-item').on('click', function (e) {
        Loader.show('#fff');

        let $notifier = $('#edit-class-notifier');
        $notifier.text('');
        let flag;
        let body = {
            id: id,
            className: className,
            assemblyName: assemblyName,
            properties: []
        }

        $('.class-property').each(function (_, element) {
            let $item = $(element);
            let name = $item.attr('data-name');
            let type = $item.attr('data-type');
            let value = $item.val();

            let link = $item.attr('data-link');
            if (link && link.length > 0) {
                body.link = link;
            }

            switch (type) {
                case 'int':
                    if (parseInt(value) != value) {
                        $notifier.text(name + ' must be integer number!')
                        flag = true;
                    }
                    break;

                case 'decimal':
                    if (parseFloat(value) != value) {
                        $notifier.text(name + ' must be decimal floating point number!')
                        flag = true;
                    }
                    break;
                case 'string-html':
                    value = textEditor.getContent($item.attr('id'));
                    break;

                case 'string-long':
                    if (value && value.length > 3999) {
                        $notifier.text(name + ' must be shorter than 4000 symbols!')
                        flag = true;
                    }
                    break;

                default:
            }

            body.properties.push(JSON.stringify({
                name: name,
                type: type,
                value: value
            }));
        });

        if (flag) {
            return;
        }

        Data.postJson({ url: '/sitetriks/dynamic/edititem', data: body }).then(function (res) {
            if (res.success) {
                window.location.replace(`/sitetriks/dynamic/classdetails?assemblyName=${body.assemblyName}&className=${body.className}`);
            }
        }, function (res) {
            Loader.hide();
            console.log(res);
        });
    });
}
