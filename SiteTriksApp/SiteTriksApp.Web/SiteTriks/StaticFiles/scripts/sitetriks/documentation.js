﻿import './layout.js';
import 'jquery-ui';

import { Data } from '../common/data.js';
import { Loader, Blur } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { WarningWindow } from '../modules/warning-window.js';
import { textEditor } from '../text-editor.js';
import { Notifier } from '../common/notifier.js';
import { _Grid } from '../modules/grid.js';


function createDocumentation() {
    let $parentInput = $('#parent');
    let $form = $('#create-topic-form');
    let validateFormFunc = Validator.createFieldsValidation();

    bindEvents();
    WarningWindow.attach();

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
    $('#parent').on('input', autocompleteDocumentationParent);

    //---------------------------------------------------
    // consts
    const contentNameField = '#contentName';
    const contentField = '#Content';
    const titleInput = '#Title';
    const upToVersionInput = '#up-to-version';
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
            $(upToVersionInput).val('');
            $(contentIdInput).val('');
            return;
        }

        Loader.show('#fff');

        // Data.getJson({ url: '/sitetriks/documentation/gettopicversion/' + versionId }).then(function (res) {
        //     if (res.success) {
        //         $(contentNameField).html(res.contentName);
        //         $(contentField).html(res.content);
        //         $(titleInput).val(res.title);
        //         $(upToVersionInput).val(res.upToVersion || '');
        //         $(contentIdInput).val(res.contentId);
        //     }
        //
        //     Loader.hide();
        // });
    } //

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
            height: '70%'
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
        if (!$(contentField).html()) {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error', message: 'Content is missing!', status: 'danger' });
            ev.preventDefault();
            return false;
        }
        Loader.show('#fff');

        let formData = new FormData(this);
        if (formData.set && {}.toString.call(formData.set) === '[object Function]') {
            formData.set('Version', $(versionDropDownSelected).text());
            formData.set('VersionId', $(versionDropDown).val());
            formData.set('UpToVersion', $(upToVersionInput).val());
        } else {
            formData.append('Version', $(versionDropDownSelected).text());
            formData.append('VersionId', $(versionDropDown).val());
            formData.append('UpToVersion', $(upToVersionInput).val());
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

function documentationInit() {

    let $wrapper = $('.backend-wrapper');
    let $typeContainer = $('.type-container');
    let $versionContainer = $('.versions-container');
    let $contentContainer = $('.content-container');
    let $topicContainer = $('.topic-container');
    let $row = $('.type-row');
    let $versionRow = $('.version-row');
    let versionNames = [];
    let versionIds = [];
    let docButton = $('.document-button');
    let versionButton = $('.versions-button');
    let topicButton = $('.topic-button');
    let contentButton = $('.content-button');
    docButton.addClass('current');

    bindEvents();




    //Documentation Type functions
    function createType() {
        $('.dialog-ovelay').remove()
        if ($('.createInput').length < 1) {
            let $div = $('<div/>', {
                'class': 'docType',
            });
            $('<input/>', {
                'class': "createInput"

            }).appendTo($div);


            $('<button/>', {
                'class': 'btn btn-default cancel-type',
                text: 'Cancel',
            }).appendTo($div);

            $('<button/>', {
                'class': 'btn btn-default save-type',
                text: 'Save',
            }).appendTo($div);



            $row.append($div)

            $('.save-type').on('click', saveType);
            $('.cancel-type').on('click', cancelCreateType);
        }
    }

    function editType() {
        $('.dialog-ovelay').remove()
        let editInput = $('.editInput');
        if (editInput.length < 1) {
            let $target = $(this);
            let parent = $($target).parent();
            let typename = $target.siblings('span').text();
            $target.siblings('span').remove();
            $target.siblings('.delete-type').remove();
            $target.siblings('input').prop('type', 'text');
            $target.siblings('input').prop('value', typename);
            $target.siblings('input').removeClass('doc-checkbox').addClass('editInput');
            $target.text('Save');
            $target.removeClass('edit-type').addClass('save-edit');

            $('<button/>', {
                'class': 'btn btn-default cancelEdit-type',
                text: 'Cancel',
            }).prependTo(parent);



            $('.save-edit').on('click', saveEditedType);
            $('.cancelEdit-type').on('click', cancelEditType);

        } else {
            Notifier.createAlert(Notifier.createAlert({ containerId: '#alerts', title: '', message: 'Plese finish editing the previously selected type', status: 'warning' }));
        }


    }

    function saveType() {
        let $typeInput = $('.createInput');

        if ($typeInput.val() !== undefined && $typeInput.val().trim() !== "") {

            let name = $typeInput.val();
            let data = new FormData()
            data.append('name', name);
            Data.postForm({ url: '/sitetriks/documentation/createType?', formData: data }).then(function (res) {
                if (res.message == undefined) {
                    $typeInput.parent().remove();
                    $row.append($(res));
                } else {
                    Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                }

            });


        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The field you want to add is empty', status: 'danger' });
        }
    }

    function cancelCreateType() {
        let ev = $(this).parent();
        ev.remove();
    }

    function saveEditedType() {
        let $typeInput = $('.editInput');
        let target = $(this).parent();
        let id = target.attr('value');
        let data = new FormData();
        let stringInput = $typeInput.val();

        if (stringInput !== undefined && stringInput.trim() !== "") {
            if (/^[a-zA-Z- ]*$/.test(stringInput) === true) {
                let name = $typeInput.val();
                data.append('name', name);
                data.append('id', id);

                Data.postForm({ url: '/sitetriks/documentation/editType', formData: data }).then(function (res) {
                    if (res.message == undefined) {
                        $typeInput.siblings('.save-edit').remove();
                        $typeInput.remove();
                        target.append(res);
                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                    }


                });
            } else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The field you want to add must contain only letters or/and "-" ', status: 'danger' });
            }


        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The field you want to add is empty', status: 'danger' });
        }
    }

    function cancelEditType() {
        let target = $(this).parent();
        let id = target.attr('value');
        target.remove();
        Data.getJson({ url: "/sitetriks/documentation/getType?id=" + id }).then(function (res) {
            $('.type-row').append(res);
        });
    }

    function deleteType() {
        let target = $(this).parent();
        let name = $(this).siblings('span').text()
        let id;
        $('.dialog-ovelay').remove()
        if (target !== undefined) {
            if (target.attr('value') !== undefined) {
                id = target.attr('value');
                let title = 'Deleteing this type will remove all version and topics connected to it.';
                let msg = `Are you sure you want to delete ${name}?`;
                let selector = '.confirm';
                let url = '/sitetriks/documentation/deleteType?id=';

                confirm(title, msg, selector, url, id, target);

            }

        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The item cannot be deleted', status: 'danger' });
        }
    }

    //Version Functions

    function loadVersions() {
        $('.dialog-ovelay').remove()
        let docCheckbox = $('input:checkbox[class=doc-checkbox]:checked');


        if (docButton.val() === undefined || docButton.val().trim() === "") {
            $('.versions-button').text("Versions");
            Notifier.createAlert({ containerId: '#alerts', title: '', message: 'Plese select a documentation type', status: 'warning' });
        } else {

            if (docCheckbox.length < 1) {
                Notifier.createAlert({ containerId: '#alerts', title: '', message: 'Plese select a documentation type', status: 'warning' });
            } else {
                versionButton.removeClass('done').addClass('current');
                docButton.removeClass('current').addClass('done')
                toggleVersions();
                let id = docButton.val();
                $(".versionType").remove();

                Data.getJson({ url: "/sitetriks/documentation/getTopicVersion?id=" + id }).then(function (res) {
                    if (res.message == undefined) {
                        if (res.success == undefined) {
                            $versionRow.append(res);

                            let versionTypes = $('.versionType');
                            for (let v of versionTypes) {
                                let $value = $(v).attr('value');
                                if (versionIds.includes($value)) {
                                    $(v).children('input').prop('checked', true);
                                }
                            }
                        }
                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                    }

                });


            }
        }
    }

    function createVersion() {
        if ($('.createVersionInput').length < 1) {

            let $div = $('<div/>', {
                'class': 'versionType',
            });
            $('<input/>', {
                'class': "createVersionInput",
                'placeholder': "e.g. 0.01"

            }).appendTo($div);

            $('<button/>', {
                'class': 'btn btn-default cancel-version',
                text: 'Cancel',
            }).appendTo($div);

            $('<button/>', {
                'class': 'btn btn-default save-versionType',
                text: 'Save',
            }).appendTo($div);

            $versionRow.append($div)

            $('.save-versionType').on('click', saveVersion);
            $('.cancel-version').on('click', cancelCreateVersion);
        }

    }

    function saveVersion() {

        let $versionInput = $('.createVersionInput');

        if ($versionInput.val() !== undefined && $versionInput.val().trim() !== "") {

            if (Validator.isNumber($versionInput.val())) {

                let version = parseFloat($versionInput.val());
                let data = new FormData()
                let $documentButton = $('.document-button');
                let id = $documentButton.val();

                data.append('id', id)
                data.append('version', version);
                Data.postForm({ url: '/sitetriks/documentation/createVersion', formData: data }).then(function (res) {
                    $versionInput.parent().remove();
                    $versionRow.append($(res));
                });


            } else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'Input version must be a valid number (0.01)', status: 'danger' });

            }
        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The field you want to add is empty', status: 'danger' });
        }
    }

    function cancelCreateVersion() {
        let ev = $(this).parent();
        ev.remove();
    }

    function editVersion() {
        let versionInput = $('.editVersionInput')
        if (versionInput.length < 1) {
            let $target = $(this);
            let parent = $($target.parent());
            let version = $target.siblings('span').text().replace("version ", "");
            $target.siblings('span').remove();
            $target.siblings('.delete-version').remove();
            $target.siblings('input').prop('type', 'text');
            $target.siblings('input').prop('value', version);
            $target.siblings('input').removeClass('version-checkbox').addClass('editVersionInput');
            $target.text('Save');
            $target.removeClass('edit-version').addClass('save-versionedit');

            $('<button/>', {
                'class': 'btn btn-default cancel-Editversion',
                text: 'Cancel',
            }).prependTo(parent);

            $('.save-versionedit').on('click', saveEditedVersion);
            $('.cancel-Editversion').on('click', cancelEditVerion);
        } else {
            Notifier.createAlert(Notifier.createAlert({ containerId: '#alerts', title: '', message: 'Plese finish editing the previously version', status: 'warning' }));
        }



    }

    function saveEditedVersion() {
        let $versionInput = $('.editVersionInput');
        let target = $(this).parent();
        let id = target.attr('value');
        let data = new FormData();
        if ($versionInput.val() !== undefined && $versionInput.val().trim() !== "") {
            if (Validator.isNumber($versionInput.val())) {
                let version = parseFloat($versionInput.val());
                data.append('version', version);
                data.append('id', id);

                Data.postForm({ url: '/sitetriks/documentation/EditVersion', formData: data }).then(function (res) {
                    if (res.message == undefined) {
                        $versionInput.siblings('.save-versionedit').remove();
                        $versionInput.remove();
                        target.append(res);
                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                    }


                });
            } else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'Input version must be a valid number (0.01)', status: 'danger' });
            }
        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The field you want to add is empty', status: 'danger' });
        }
    }

    function cancelEditVerion() {
        let target = $(this).parent();
        let id = target.attr('value');
        target.remove();
        Data.getJson({ url: "/sitetriks/documentation/GetSingleTopic?id=" + id }).then(function (res) {
            $versionRow.append(res);
        });
    }

    function deleteVersion() {
        let target = $(this).parent();
        let name = $(this).siblings('span').text()
        let id;
        $('.dialog-ovelay').remove();
        if (target !== undefined) {
            if (target.attr('value') !== undefined) {

                id = target.attr('value');
                let title = 'Deleteing version';
                let msg = `Are you sure you want to delete ${name}?`;
                let selector = '.confirm';
                let url = '/sitetriks/documentation/deleteVersion?id=';

                confirm(title, msg, selector, url, id, target);

            }

        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The item cannot be deleted', status: 'danger' });
        }
    }

    //Topic Functions
    function createTopic() {

        $('.grid').remove();
        let url = '/sitetriks/documentation/createtopicsview'

        Data.getJson({ url: url }).then(function (res) {
            $('.grid-container').append(res);
            $('.cancel-topicType').on('click', cancelTopicCreate)
            $('.save-topicType').on('click', saveTopic);
        });

       

       


    }

    function saveTopic() {

        let $topicInput = $('.createTopicInput');
        let parent = $('.topic-parent').val();
        let order = $('.topic-order').val();

        if ($topicInput.val() !== undefined && $topicInput.val().trim() !== "") {
            let topic = $topicInput.val();
            if (Validator.isNumber(order)) {

                let data = new FormData();
                data.append('topic', topic);
                data.append('parent', parent);
                data.append('order', order);
                console.log(order);
                Data.postForm({ url: '/sitetriks/documentation/createtopic', formData: data }).then(function (res) {
                    if (res.success) {
                        $('.topicType').remove();
                        createGrid();
                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                    }
                });
            }
            else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'Order need to be a number', status: 'warning' })
            }
        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The field you want to add is empty', status: 'danger' });
        }
    }

    function cancelTopicCreate() {
        let target = $(this).parent();
        target.remove()
        createGrid();
    }

    function deleteTopic() {
        let id = $(this).attr('data-id');

        if (id !== undefined) {

            Data.postJson({ url: '/sitetriks/documentation/deleteTopic?id=' + id }).then(function (res) {
                if (res.success == true) {
                    $topicContainer.css('display', 'none');
                    $('.grid').remove();
                    createGrid();
                } else {
                    Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                }
            });


        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The item cannot be deleted', status: 'danger' });
        }
    }

    function editTopic() {
        let id = $(this).attr('data-id');
      
        $('.grid').remove();


        let url = `/sitetriks/documentation/edittopicsview?id=${id}`

        Data.getJson({ url: url }).then(function (res) {
            $('.grid-container').append(res);
            $('.save-topicedit').on('click', saveEditedTopic);
            $('.cancel-topicEdit').on('click', cancelTopicEdit);
        });
       

    }

    function saveEditedTopic() {
        let $topicInput = $('.editTopicInput');
        let target = $(this).parent();
        let id = target.attr('value');
        let data = new FormData();
        let parent = $('.topic-parent').val();
        let order = $('.topic-order').val();


        if ($topicInput.val() !== undefined && $topicInput.val().trim() !== "") {
            if (Validator.isNumber(order)) {
                let topic = $topicInput.val();
                data.append('topic', topic);
                data.append('id', id);
                data.append('parent', parent);
                data.append('order', order);

                Data.postForm({ url: '/sitetriks/documentation/editTopic', formData: data }).then(function (res) {
                    if (res.message == undefined) {
                        $('.editType').remove();
                        createGrid();
                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                    }

                    
                });
            } else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'Order need to be a number', status: 'warning' })
            }
        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The field you want to add is empty', status: 'danger' });
        }
    }

    function cancelTopicEdit() {
        let target = $(this).parent();
        target.remove()
        createGrid();
    }

    //Content Functions
    function loadContent() {
        $('.dialog-ovelay').remove()
        let versionIds = [];
        let selectedVersions = $('input:checkbox[class=version-checkbox]:checked');
        let selectedTopic = $('input:checkbox[class=st-grid-checkbox]:checked').attr('data-id');
        GoogleAnalyticsSend(selectedTopic);


        for (let versions of selectedVersions) {
            let currentVersion = $(versions).parent().attr('value');
            versionIds.push(currentVersion)
        }

        if (selectedTopic !== undefined) {
            if (selectedTopic.length > 0) {
                topicButton.removeClass('current').addClass('done');
                contentButton.removeClass('done').addClass('current');

                let data = new FormData()
                data.append('topicId', selectedTopic);

                versionIds = versionIds.join(',')

                data.append('versionIds', versionIds);
                toggleContent()
                Data.postForm({ url: '/sitetriks/documentation/content', formData: data }).then(function (res) {
                    $('.content-type').remove();
                    $contentContainer.append(res);

                    textEditor.init('#content-area');
                });

            } else {
                Notifier.createAlert({ containerId: '#alerts', title: '', message: "Please select a topic", status: 'warning' });
            }

        } else {
            Notifier.createAlert({ containerId: '#alerts', title: '', message: "Please select a topic", status: 'warning' });
        }

    }

    function createCotent() {
        let contentName = $('.content-name').val();
        let topicId = $('.topic-id').val();
        let topicOrder = $('.topic-order').val();
        let versionIds = $('.version-ids').val();
        let content = $('#content-area').val();


        if (contentName !== undefined && contentName.trim() !== "") {
            if (content !== undefined && content.trim() !== "") {

                let data = new FormData();
                data.append("name", contentName);
                data.append("topicId", topicId);
                data.append("topicOrder", topicOrder);
                data.append("versionIds", versionIds);
                data.append("content", content);

                Data.postForm({ url: '/sitetriks/documentation/createContent', formData: data }).then(function (res) {
                    if (res.success) {
                        $('#contentModal').modal();

                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                    }

                });

            } else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The content field you want to add is empty', status: 'danger' });
            }


        } else {
            Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: 'The content name field you want to add is empty', status: 'danger' });
        }

    }

    //Other Functions

    function GoogleAnalyticsSend(selectedTopic) {
        window['GoogleAnalyticsObject'] = 'ga';
        window['ga'] = window['ga'] || function () {
            (window['ga'].q = window['ga'].q || []).push(arguments)
        };
        ga('send', { hitType: 'pageview', page: `/documentation/${selectedTopic}` });
    }

    function toggle() {

        docButton.removeClass('done').addClass('current');

        if (docButton.hasClass('current')) {
            versionIds = []
            versionNames = []
            $('.versions-button').text("Versions");
            $typeContainer.css('display', 'block');
            versionButton.removeClass(['current', 'done']);
            topicButton.removeClass(['current', 'done']);
            contentButton.removeClass(['current', 'done']);
            $('.grid').remove();
            $('.versionType').remove();
            $('.content-type').remove();
            $('.topicType').remove();
            $('.editType').remove();
            $versionContainer.css('display', 'none');
        }


    }

    function toggleVersions() {


        if (versionButton.hasClass('current')) {
            $typeContainer.css('display', 'none');
            $versionContainer.css('display', 'block');
            topicButton.removeClass(['current', 'done']);
            contentButton.removeClass(['current', 'done']);
            $('.grid').remove();
            $('.content-type').remove();
            $('.topicType').remove();
            $('.editType').remove();
        }

    }

    function toggleGrid() {
        $('.dialog-ovelay').remove()
        let versionCheckbox = versionIds;

        if (versionCheckbox.length < 1) {
            Notifier.createAlert({ containerId: '#alerts', title: '', message: 'Plese select at least one version', status: 'warning' });
        } else {
            topicButton.removeClass('done').addClass('current');
            versionButton.removeClass('current').addClass('done');
            if (topicButton.hasClass('current')) {
                $('.grid-container').css('display', 'block');
                $versionContainer.css('display', 'none');
                contentButton.removeClass(['current', 'done']);
                $('.content-type').remove();
                $('.topicType').remove();
                $('.editType').remove();
            }
            if ($('.grid').length < 1) {
                createGrid();
            }
        }


    }

    function toggleContent() {

        textEditor.removeAll();

        if (contentButton.hasClass('current')) {
            $contentContainer.show();
            $('.grid-container').css('display', 'none');
        }
    }

    function createGrid() {
        $('.grid-container').append($("<div/>", { 'class': 'grid' }));
        let columns = [{
            name: 'id',
            type: 'checkbox',
            class: 'topic-checkbox',
            size: 1
        },
        {
            name: "name",
            title: "Name",
            type: 'string',
            filter: true,
            sort: true,
            size: 5,
            headerTemplate: '<b>#item#</b>'
        },
        {
            name: "id",
            title: "Action",
            type: 'string',
            filter: false,
            sort: false,
            size: 2,
            headerTemplate: '<strong>#item#</strong>',
            contentTemplate: '<a class="btn edit-topic" data-id="#item#" ><img src="/SiteTriks/StaticFiles/images/site-sync/pencil.svg"></a> <a class="btn delete-topic" data-id="#item#"><img src="/SiteTriks/StaticFiles/images/site-sync/delete.svg"></a>'
        }
        ];

        let buttons = [{
            title: 'Create',
            class: "create-topic"
        }];
        new _Grid({
            wrapperId: '.grid',
            type: 'table',
            fields: columns,
            sourceConfig: { type: 'client', url: '/sitetriks/documentation/GridTopics' },
            customActions: buttons,
            nestingProperty: 'children'
        }).load(true);
    }

    function singleSelect() {

        let $documentButton = $('.document-button');
        $('.doc-checkbox').prop('checked', false);
        $(this).prop('checked', true);
        let name = $(this).siblings('span').text();
        let typeid = $(this).parent('.docType').attr('value');
        $documentButton.html('<span class="selection-state"></span>' + name);
        $documentButton.val(typeid);
    }

    function versionSelect() {
        let $ev = $(this);

        let versionName = $ev.siblings('span').text().replace('version', 'v.');
        let $versionButton = $('.versions-button');
        let versionTypes = $ev.parent('.versionType').attr('value');
        if ($ev.prop('checked') === true) {
            if (versionIds.includes(versionTypes)) {
                $ev.prop('checked', true);

            } else {
                versionIds.push(versionTypes);
                versionNames.push(versionName);
            }


        } else {
            $ev.prop('checked', false);

            versionNames = versionNames.filter(item => item !== versionName);
            versionIds = versionIds.filter(item => item !== versionTypes);

        }

        $versionButton.val(versionIds.join(','));
        if (versionIds.length < 1) {
            $versionButton.text('Versions')
        } else {
            $versionButton.html('<span class="selection-state"></span>' + versionNames.join(','));
        }

    }

    function gridSelect() {
        if ($(this).prop('checked') == true) {
            $('.st-grid-checkbox').prop('checked', false);
            $(this).prop('checked', true);

        } else {
            $('.st-grid-checkbox').prop('checked', false);
            $(this).prop('checked', false);
        }


    }

    function confirm(title, msg, selector, url, id, target) {
        var $content = "<div class='dialog-ovelay'>" +
            "<div class='dialog'><header>" +
            " <h3> " + title + " </h3> " +
            "</header>" +
            "<div class='dialog-msg'>" +
            " <p> " + msg + " </p> " +
            "</div>" +
            "<footer>" +
            "<div class='controls'>" +
            " <button class='btn btn-success doAction'> YES </button> " +
            " <button class='btn btn-danger cancelAction'> NO </button> " +
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";

        $(selector).prepend($content);
        $('.doAction').click(function () {
            if (target)
                Data.postJson({ url: url + id }).then(function (res) {
                    if (res.success == true) {
                        $(target).remove();
                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Error:', message: res.message, status: 'danger' });
                    }
                });
            $('.dialog-ovelay').remove();

        });
        $('.cancelAction').click(function () {
            $('.dialog-ovelay').remove();
        });
    }

    function bindEvents() {

        $row.on('change', '.doc-checkbox', singleSelect);
        $versionRow.on('change', '.version-checkbox', versionSelect);

        $wrapper.on('click', '.document-button', toggle);

        $typeContainer.on('click', '.create-type', createType);
        $typeContainer.on('click', '.delete-type', deleteType);
        $typeContainer.on('click', '.edit-type', editType);

        $wrapper.on('click', '.versions-button', loadVersions);
        $versionContainer.on('click', '.create-version', createVersion);
        $versionContainer.on('click', '.edit-version', editVersion);
        $versionContainer.on('click', '.delete-version', deleteVersion);

        $wrapper.on('click', '.topic-button', toggleGrid)
        $wrapper.on('click', '.create-topic', createTopic);
        $wrapper.on('click', '.delete-topic', deleteTopic);
        $wrapper.on('click', '.edit-topic', editTopic);

        $wrapper.on('click', '.content-button', loadContent);
        $contentContainer.on('click', '.create-content', createCotent)
        $('.grid-container').on('change', 'input:checkbox[class=st-grid-checkbox]', gridSelect);

        //Modal Buttons
        $('.dashboard-button').on('click', function () { window.location = window.location.origin + '/sitetriks/' });
        $('.contents-list').on('click', function () { window.location = window.location.origin + '/sitetriks/documentation/topiccontents' });
        $('.add-another').on('click', function () { window.location.reload() })
    }
}

window.createDocumentation = createDocumentation;
window.createContent = createContent;
window.editDocumentation = editDocumentation;
window.editContent = editContent;
window.documentationInit = documentationInit;
