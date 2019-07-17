<<<<<<< HEAD
﻿import './layout.js';
import 'jquery-ui';

import { Data } from '../common/data.js';
=======
﻿import { Data } from '../common/data.js';
>>>>>>> origin/master
import { Loader, Blur } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { WarningWindow } from '../modules/warning-window.js';
import { textEditor } from '../text-editor.js';
import { Notifier } from '../common/notifier.js';

function createDocumentation() {
    let $parentInput = $('#parent');
    let $form = $('#create-topic-form');
    let validateFormFunc = Validator.createFieldsValidation();

    bindEvents();
    WarningWindow.attach();

<<<<<<< HEAD
=======
    function autocompleteDocumentationParent(ev) {
        var val = $(ev.target).val();

        if (val.length < 3) {
            return;
        }

        Data.getJson({ url: '/sitetriks/documentation/gettopicnames?pattern=' + val }).then(function (response) {
            console.log(response);
            $parentInput.autocomplete({
                source: response.suggestions,
                select: function (event, ui) {
                    $('#' + $parentInput).val(ui.item.label);
                    $('#' + $parentInput).attr('data-id', ui.item.id);

                    return false;
                }
            }).data('ui-autocomplete')._renderItem = function (ul, item) {
                return $('<li>')
                    .append(`<a data-id=${item.id}>${item.label}</a>`)
                    .appendTo(ul);
            };

        });
    }

>>>>>>> origin/master
    function submitForm(ev) {
        if (!validateFormFunc.apply(this)) {
            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');
        let formData = new FormData(this);
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

<<<<<<< HEAD
function autocompleteDocumentationParent(ev) {
    let $target = $(ev.target);
    let val = $target.val();

    if (val.length < 3) {
        return;
    }

    let currentTopicName = $target.attr('data-name');
    Data.getJson({ url: '/sitetriks/documentation/gettopicnames?pattern=' + val }).then(function (res) {
        let suggestions = res.suggestions;
        if (currentTopicName) {
            suggestions = suggestions.filter(obj => obj.label !== currentTopicName);
        }

        $target.autocomplete({
            source: suggestions
        });
    });
}

=======
>>>>>>> origin/master
function createContent() {
    textEditor.init('#content-area', 700, 300);
    WarningWindow.attach();
    $('input[type=submit]').on('click', function (e) {
        let flag = true;

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
    WarningWindow.attach();
<<<<<<< HEAD
    $('#parent').on('input', autocompleteDocumentationParent);
=======
>>>>>>> origin/master

    //---------------------------------------------------
    // consts
    const contentNameField = '#contentName';
    const contentField = '#Content';
    const titleInput = '#Title';
<<<<<<< HEAD
    const upToVersionInput = '#up-to-version';
=======
    const orderInput = '#Order';
>>>>>>> origin/master
    const contentIdInput = '#contentId';
    const versionDropDown = '#Version';
    const versionDropDownSelected = versionDropDown + ' :selected';
    const topicName = '#Name';

    //---------------------------------------------------
    // select content functionality
    $('.grid').on('click', '.btn-select', function (ev) {
        let $trigger = $(this);
        let topicContentId = $trigger.attr('data-id');

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
            let versionNumber = $(versionDropDownSelected).text();
            let contentName = '';
            if (versionNumber) {
                contentName = $(topicName).text() + ' - ' + versionNumber;
            }

            $(contentNameField).text(contentName);
            $(contentField).html('');
            $(titleInput).val('');
<<<<<<< HEAD
            $(upToVersionInput).val('');
=======
            //  $(orderInput).val('');
>>>>>>> origin/master
            $(contentIdInput).val('');
            return;
        }

        Loader.show('#fff');

        Data.getJson({ url: '/sitetriks/documentation/gettopicversion/' + versionId }).then(function (res) {
            if (res.success) {
<<<<<<< HEAD
                $(contentNameField).html(res.contentName);
                $(contentField).html(res.content);
                $(titleInput).val(res.title);
                $(upToVersionInput).val(res.upToVersion || '');
=======
                console.log(res);

                $(contentNameField).html(res.contentName);
                $(contentField).html(res.content);
                $(titleInput).val(res.title);
                //   $(orderInput).val(res.order);
>>>>>>> origin/master
                $(contentIdInput).val(res.contentId);
            }

            Loader.hide();
        });
    }

    loadVersion($(versionDropDownSelected).val());

    //---------------------------------------------------
    // version controll
    $('#btn-add-version').on('click', function (ev) {
        let $parent = Blur.add({});
        let $modal = $('<div></div>', {
            class: 'blur-content',
            width: 400,
            height: 200
        }).css('background-color', '#fff').css('padding-top', '40px').css('border-radius', '3px').append($('<input/>', {
            id: 'input-version'
        })).append($('<span></span>', {
            class: 'text text-danger'
            //text: 'Input version must be a valid number (0.01)'
        })).append($('<a></a>', {
            class: 'btn btn-success',
            text: 'Add Version'
        }).on('click', function () {
            let version = $('#input-version').val();

            let flag = true;

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
        let versionId = $(versionDropDownSelected).val();
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
        let $parent = Blur.add({});
        textEditor.remove('area-edit');
        let $modal = $('<div></div>', {
            class: 'blur-content',
            width: 800,
            height: '90%'
        }).css('background-color', '#fff').css('padding', '45px')
            .append($('<textarea/>', {
                id: 'area-edit',
                val: $(contentField).html()
            })).append($('<a></a>', {
                class: 'btn btn-success',
                text: 'Save'
            }).on('click', function () {
                let summary = textEditor.getContent('area-edit');
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
        let flag = true;
        if (!$(versionDropDownSelected).text() || !$('#Title').val()) {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'Version data is missing!', status: 'danger' });

            ev.preventDefault();
            return false;
        }

        Loader.show('#fff');

        let formData = new FormData(this);
        if (formData.set && {}.toString.call(formData.set) === '[object Function]') {
            formData.set('Version', $(versionDropDownSelected).text());
            formData.set('VersionId', $(versionDropDown).val());
<<<<<<< HEAD
            formData.set('UpToVersion', $(upToVersionInput).val());
        } else {
            formData.append('Version', $(versionDropDownSelected).text());
            formData.append('VersionId', $(versionDropDown).val());
            formData.append('UpToVersion', $(upToVersionInput).val());
=======
        } else {
            formData.append('Version', $(versionDropDownSelected).text());
            formData.append('VersionId', $(versionDropDown).val());
>>>>>>> origin/master
        }

        if (!$(contentIdInput).val()) {
            formData.append('ContentName', $(topicName).text() + ' - ' + $(versionDropDownSelected).text());
            formData.append('Content', $(contentField).html());
        }


        Data.postForm({ url: this.action, formData }).then(function (res) {
            location.replace('/sitetriks/documentation');
        });

        ev.preventDefault();
        return false;
    });
}

function editContent() {
    textEditor.init('#content-area', 700, 300);
    WarningWindow.attach();
    $('input[type=submit]').on('click', function (e) {
        let flag = true;

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

window.createDocumentation = createDocumentation;
window.createContent = createContent;
window.editDocumentation = editDocumentation;
window.editContent = editContent;
