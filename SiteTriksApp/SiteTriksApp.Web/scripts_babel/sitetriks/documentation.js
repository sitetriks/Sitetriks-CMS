'use strict';

/* globals Data, Loader, Validator */

function createDocumentation() {
    var $parentInput = $('#parent');
    var $form = $('#create-topic-form');
    var validateFormFunc = Validator.createFieldsValidation();

    bindEvents();

    function autocompleteDocumentationParent(ev) {
        var val = $(ev.target).val();

        if (val.length < 3) {
            return;
        }

        Data.getJson({ url: '/sitetriks/documentation/gettopicnames?pattern=' + val }).then(function (response) {
            $parentInput.autocomplete({
                source: response.suggestions
            });
        });
    }

    function submitForm(ev) {
        if (!validateFormFunc.apply(this)) {
            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');
        var formData = new FormData(this);
        Data.postForm({ url: this.action, formData: formData }).then(function (res) {
            if (res.success) {
                location.replace('/sitetriks/documentation');
            } else {
                Loader.hide();
            }
        });

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $parentInput.on('input', autocompleteDocumentationParent);
        $form.on('submit', submitForm);
    }

    function dispose() {
        $parentInput.off('input', autocompleteDocumentationParent);
        $form.off('submit', submitForm);
    }
}

function createContent() {
    $('input[type=submit]').on('click', function (e) {
        var flag = true;

        if (!Validator.validate($('#name'), 'Name must be atleast 3 symbols', function (val) {
            return Validator.hasMinimumLength(val, 3);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
    });
}

function editDocumentation(ev) {
    var grid = Grid();
    var data = { link: '/sitetriks/documentation/GridTopicContents', serverSide: false };
    var columns = [{
        name: 'name',
        title: 'Name',
        type: 'string',
        filter: true,
        sort: true,
        size: 8,
        headerTemplate: '<b>#item#</b>', // #item# is the placeholder for the content
        contentTemplate: '<div class="summary-item">#item#</div>'
    }, {
        name: 'id',
        title: 'Select',
        type: 'string',
        size: 2,
        headerTemplate: '<b>#item#</b>',
        contentTemplate: '<a class="btn btn-warning btn-select" data-id="#item#">Select</a>'
    }];

    var config = grid.build(columns, [], grid.defaultPager, data);

    var obj = grid.init('.grid', config);

    //---------------------------------------------------
    // consts
    var contentNameField = '#contentName';
    var contentField = '#Content';
    var titleInput = '#Title';
    var contentIdInput = '#contentId';
    var versionDropDown = '#Version';
    var versionDropDownSelected = versionDropDown + ' :selected';
    var topicName = '#Name';

    //---------------------------------------------------
    // select content functionality
    $('.grid').on('click', '.btn-select', function (ev) {
        var $trigger = $(this);
        var topicContentId = $trigger.attr('data-id');

        $(contentIdInput).val(topicContentId);
        versionContent(topicContentId);
    });

    function versionContent(contentId) {
        Loader.show('#fff');

        Data.getJson({ url: '/sitetriks/documentation/GetTopicContent/' + contentId }).then(function (res) {
            if (res.success) {
                $(contentNameField).html(res.summary);
                $(contentField).html(res.content);

                $(contentIdInput).val(contentId);
            }

            Loader.hide();
        });
    }

    function loadVersion(versionId) {
        if (!versionId) {
            var versionNumber = $(versionDropDownSelected).text();
            var contentName = '';
            if (versionNumber) {
                contentName = $(topicName).text() + ' - ' + versionNumber;
            }

            $(contentNameField).text(contentName);
            $(contentField).html('');
            $(titleInput).val('');
            $(contentIdInput).val('');
            return;
        }

        Loader.show('#fff');

        Data.getJson({ url: '/sitetriks/documentation/gettopicversion/' + versionId }).then(function (res) {
            if (res.success) {
                $(contentNameField).html(res.contentName);
                $(contentField).html(res.content);
                $(titleInput).val(res.title);
                $(contentIdInput).val(res.contentId);
            }

            Loader.hide();
        });
    }

    loadVersion($(versionDropDownSelected).val());

    //---------------------------------------------------
    // version controll
    $('#btn-add-version').on('click', function (ev) {
        var $parent = Blur.add({});
        var $modal = $('<div></div>', {
            class: 'blur-content',
            width: 400,
            height: 400
        }).css('background-color', '#fff').append($('<input/>', {
            id: 'input-version'
        })).append($('<span></span>', {
            class: 'text text-danger'
            //text: 'Input version must be a valid number (0.01)'
        })).append($('<a></a>', {
            class: 'btn btn-success',
            text: 'Add Version'
        }).on('click', function () {
            var version = $('#input-version').val();

            var flag = true;

            if (!Validator.validate($('#input-version'), 'Input version must be a valid number (0.01)', function (val) {
                return Validator.isDecimalNumber(val);
            })) {
                flag = false;
            }

            if (flag) {
                $('<option></option>', {
                    text: version,
                    val: '',
                    selected: 'selected'
                }).prependTo(versionDropDown);
                loadVersion();
                Blur.remove();
            }
        })).append($('<a></a>', {
            class: 'btn btn-danger',
            text: 'Close'
        }).on('click', function () {
            Blur.remove();
        })).appendTo($parent);
    });

    $('#btn-delete-version').on('click', function (ev) {
        var versionId = $(versionDropDownSelected).val();
        if (versionId) {
            Loader.show('#fff');

            Data.postJson({ url: '/sitetriks/documentation/deleteversion', data: { id: versionId } }).then(function (res) {
                console.log(res);
                if (res.success) {
                    $(versionDropDownSelected).remove();
                    loadVersion($(versionDropDownSelected).val());
                }

                Loader.hide();
            });
        } else {
            $(versionDropDownSelected).remove();
            loadVersion($(versionDropDownSelected).val());
        }
    });

    $(versionDropDown).on('change', function (ev) {
        loadVersion($(versionDropDownSelected).val());
    });

    //-------------------------------------------------------------
    // Edit logic

    $('#btn-edit-content').on('click', function (ev) {
        var $parent = Blur.add({});
        textEditor.remove('area-edit');
        var $modal = $('<div></div>', {
            class: 'blur-content',
            width: 800,
            height: '90%'
        }).css('background-color', '#fff').css('padding', '45px').append($('<textarea/>', {
            id: 'area-edit',
            val: $(contentField).html()
        })).append($('<a></a>', {
            class: 'btn btn-success',
            text: 'Save'
        }).on('click', function () {
            var summary = textEditor.getContent('area-edit');
            $(contentField).html(summary);
            $(contentIdInput).val('');

            Blur.remove();
        })).append($('<a></a>', {
            class: 'btn btn-danger',
            text: 'Close'
        }).on('click', function () {
            textEditor.remove('area-edit');
            Blur.remove();
        })).appendTo($parent);

        textEditor.init('#area-edit', 700, 300);
    });

    //----------------------------------------------------
    // form submit

    $('#form-edit-versions').on('submit', function (ev) {
        var flag = true;
        if (!$(versionDropDownSelected).text() || !$('#Title').val()) {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'Version data is missing!', status: 'danger' });

            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');

        var formData = new FormData(this);
        if (formData.set && {}.toString.call(formData.set) === '[object Function]') {
            formData.set('Version', $(versionDropDownSelected).text());
            formData.set('VersionId', $(versionDropDown).val());
        } else {
            formData.append('Version', $(versionDropDownSelected).text());
            formData.append('VersionId', $(versionDropDown).val());
        }

        if (!$(contentIdInput).val()) {
            formData.append('ContentName', $(topicName).text() + ' - ' + $(versionDropDownSelected).text());
            formData.append('Content', $(contentField).html());
        }

        Data.postForm({ url: this.action, formData: formData }).then(function (res) {
            location.replace('/sitetriks/documentation');
        });

        ev.preventDefault();
        return false;
    });
}

function editContent() {
    $('input[type=submit]').on('click', function (e) {
        var flag = true;

        if (!Validator.validate($('#name'), 'Name must be atleast 3 symbols', function (val) {
            return Validator.hasMinimumLength(val, 3);
        })) {
            flag = false;
        }

        if (!flag) {
            e.preventDefault();
        }
    });
}