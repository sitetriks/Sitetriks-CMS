/*============================================================================
 *                           --- file-handler ---
 *                           
 *  -v3.0 overall refactor.
 *      - upload and select moved to separete module
 *      - removed usage specific logic, now accessed via mediator
 *  
 *============================================================================*/

/* globals Data, Utils */
'use strict';

let FileHandler = function ($container, modes, selectedLibrary, mediator, logger, multipleSelection) {
    let modules = {
        'Upload': { ctor: fileHandlerUpload, instance: undefined, status: 'not-active' },
        'Select': { ctor: fileHandlerSelect, instance: undefined, status: 'not-active' },
        'Selected': { ctor: fileHandlerSelected, instance: undefined, status: 'not-active' }

    };

    let $nav = $('<ul></ul>', { class: 'nav nav-tabs file-handler-nav' }).appendTo($container);
    let $contentRow = $('<div></div>', { class: 'file-handler-content-row' }).appendTo($container);

    for (var key of modes) {
        if (modules[key]) {

            let $btnNav = $('<li></li>', {
                class: ``,
                html: `<a class="file-handler-nav-btn" data-type="${key}">${key}</a>`,
                role: 'presentation'
            });

            $nav.append($btnNav);

            let $wrapper = $('<div></div>', {
                class: `file-handler-container file-handler-${key}`
            });

            $contentRow.append($wrapper);

            modules[key].instance = modules[key].ctor(logger, $wrapper, mediator, selectedLibrary, multipleSelection);
            modules[key].status = 'active';
        }
    }

    openModule({ target: $nav.find('.file-handler-nav-btn').first() });
    bindEvents();

    function bindEvents() {
        let $selectedButton = $('[data-type=Selected]');
        $nav.on('click', '.file-handler-nav-btn', openModule);
        $selectedButton.on('click', fileHandlerSelected);
        mediator.on('fileHandlerTypeChange', openModule.bind(this, { target: $nav.find('.file-handler-nav-btn').first() }), 'uploadTypeChange', 'FileHandler');
    }

    function dispose() {
        $nav.off('click', '.file-handler-nav-btn', openModule);
        mediator.off('fileHandlerTypeChange', 'uploadTypeChange', 'FileHandler');

        for (var key in modules) {
            if (modules[key].status === 'active') {
                modules[key].instance.dispose();
                modules[key].instance = undefined;
                modules[key].status === 'not-active';
            }
        }

        $container.html('');
    }

    function openModule(ev) {
        let $target = $(ev.target);

        $nav.find('.file-handler-nav-btn.active').each(function (_, element) {
            let $element = $(element);
            $element.removeClass('active');
            $element.parent('li').removeClass('active');
        });

        $contentRow.find('.file-handler-container.active').each(function (_, element) {
            $(element).removeClass('active');
        });

        $target.addClass('active');
        $target.parent('li').addClass('active');

        $contentRow.find(`.file-handler-container.file-handler-${$target.attr('data-type')}`).addClass('active');
    }

    return {
        dispose
    };
};


function fileHandlerUpload(logger, $container, mediator, libraryId, isMultiple) {
    let $inputFiles;
    let $notifier;
    let $filesContainer;
    let $libraries;
    let $btnUpload;
    let $dropArea;
    let $uploadBtn;

    let libraryPrefix = '';
    let libraryAllowed = '';
    let files = [];
    let uploadedFiles = [];
    let templatesCache = {};
    let templates = [{ name: 'file-upload', url: '/templates/file-upload.html' }];
    let requester;

    logger.log('initialazing upload module...');
    let url = `/sitetriks/files/uploadTemplate?isMultiple=${isMultiple}&libraryId=${libraryId}`;

    Data.getJson({ url: url, disableCache: true }).then(function (res) {
        $container.html(res);

        $inputFiles = $container.find('.input-files');
        $notifier = $container.find('.accepted-formats');
        $filesContainer = $container.find('.files-container');
        $libraries = $container.find('.file-upload-library');
        $btnUpload = $container.find('.btn-submit-images');
        $dropArea = $container.find('#drop-area');
        $uploadBtn = $container.find('.btn-submit-images');

        return Utils.loadHandlebarsTemplates(templatesCache, templates);
    }, Data.defaultError).then(function (res) {
        bindEvents();
    }, Data.defaultError);

    function bindEvents() {
        $libraries.on('change', loadAllowedTypes);
        $inputFiles.on('change', renderFiles);
        $btnUpload.on('click', uploadFiles);
        $container.on('keyup', '.input-url', validateFileUrl);
        $dropArea.on('dragover', dragOver);
        $dropArea.on('dragenter', dragEnter);
        $dropArea.on('dragleave', dragLeave);
        $dropArea.on('drop', drop);
        mediator.on('fileLibraryChange', selectLibrary, 'selectLibrary', 'FileHandlerUpload');
        mediator.on('fileHandlerTypeChange', typeChange, 'uploadTypeChange', 'FileHandlerUpload');
        mediator.on('fileHandlerClean', cleanUp, 'cleanContent', 'FileHandlerUpload');

        $libraries.trigger('change');
    }

    function dispose() {
        $libraries.off('change', loadAllowedTypes);
        $inputFiles.off('change', renderFiles);
        $btnUpload.off('click', uploadFiles);
        $container.off('keyup', '.input-url', validateFileUrl);
        $dropArea.off('dragover', dragOver);
        $dropArea.off('dragenter', dragEnter);
        $dropArea.off('dragleave', dragLeave);
        $dropArea.on('drop', drop);
        mediator.off('fileLibraryChange', 'selectLibrary', 'FileHandlerUpload');
        mediator.off('fileHandlerTypeChange', 'uploadTypeChange', 'FileHandlerUpload');
        mediator.off('fileHandlerClean', 'cleanContent', 'FileHandlerUpload');
    }

    function loadAllowedTypes(ev) {
        libraryId = ev.target.value;
        cleanUp();

        return Data.getJson({ url: '/sitetriks/libraries/GetAllowedForLibrary?id=' + libraryId }).then(function (res) {
            if (typeof res === 'string' || res instanceof String) {
                res = JSON.parse(res);
            }

            if (res.success) {
                $inputFiles.attr('disabled', false)
                    .attr('accept', res.ext);
                $dropArea.removeClass('disabled');
                $notifier.text('Accepted files: ' + (res.type.displayName || res.type.extensions));
                libraryAllowed = Utils.replaceAll(Utils.replaceAll(res.ext, '*', ''), ',', '|');
                libraryPrefix = res.prefix;
            } else {
                $inputFiles.attr('disabled', true);
                $dropArea.addClass('disabled');
            }
        }, Data.defaultError);
    }

    function renderFiles() {
        files = [];
        $filesContainer.html('');
        uploadedFiles = [];
        let date = Date.parse(new Date());
        let template = templatesCache['file-upload'];
        for (var i = 0; i < $inputFiles[0].files.length; i++) {
            let currentFile = $inputFiles[0].files[i];
            var regExp = new RegExp(libraryAllowed);

            if (!regExp.test(currentFile.name) && !regExp.test(currentFile.type)) {
                $filesContainer.append(`<p><strong><span class="text-danger">${currentFile.name} file type is not supported by selected library and will not be uploaded!</span></strong></p>`);
                continue;
            }

            let $fragment = $('<div></div>', {
                class: 'img-upload-wrapper upload-element-' + i
            });

            let fileName = currentFile.name.substring(0, currentFile.name.lastIndexOf('.'));
            let fileUrl = currentFile.name.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();
            let id = Utils.guid();

            $fragment.append(template({ index: id, name: fileName, alt: fileName, url: fileUrl }));

            if (currentFile.type && currentFile.type.indexOf('image/') >= 0) {
                let file = window.URL.createObjectURL(currentFile);
                $fragment.append(`<img src="${file}" class="display-image">`);
            } else {
                $fragment.append('<img src="/Images/default-document-image.png">');
            }

            $filesContainer.append($fragment);
            validateFileUrl($fragment.find('.input-url'));

            files.push(currentFile);
            uploadedFiles.push({
                name: fileName + '-' + date,
                url: fileUrl + '-' + date,
                alt: fileName,
                originalName: currentFile.name,
                id
            });
        }

        if (files.length > 0) {
            $uploadBtn.removeClass('disabled');
        }
    }

    function uploadFiles() {
        let notifier = '.file-handler-notifier';
        if (uploadedFiles.length === 0 || files.length === 0) {
            mediator.dispatch('alert', { selector: notifier, message: 'No files have been selected!', status: 'warning' });
            return;
        }

        let urls = [];
        let flag = false;
        $container.find('.input-url').each(function (i, obj) {
            let $element = $(obj);
            let url = $element.val();
            if (url.length < 3) {
                flag = true;
            }

            if (libraryPrefix) {
                url = libraryPrefix + '/' + url;
            }

            if (urls.indexOf(url) > -1 || flag) {
                $element.css('border', '1px solid red').focus();
                flag = true;
                return false;
            }

            urls.push(url);
        });

        if (flag) {
            mediator.dispatch('alert', { selector: notifier, message: 'Urls must be unique and alteast 3 characters long!', status: 'danger' });
            return;
        }

        $container.find('.input-name').each(function (i, obj) {
            var name = $(obj).val().trim();

            if (name.length < 3) {
                flag = true;
                return;
            }
        });

        if (flag) {
            mediator.dispatch('alert', { selector: notifier, message: 'Name must be atleast 3 characters!', status: 'danger' });
            return;
        }

        return Data.postJson({ url: '/sitetriks/pages/validateUrls', data: { urls } }).then(function (res) {

            if (res.success) {
                updateFilesInfo(uploadedFiles);

                let formData = new FormData();

                uploadedFiles.forEach(function (element) {
                    formData.append('filesInfo', JSON.stringify(element));
                });

                for (var i = 0; i < files.length; i++) {
                    formData.append('files', files[i], files[i].name);
                }

                formData.append('library', libraryId);

                return Data.postForm({ url: '/sitetriks/files/uploadfile', formData: formData });

            } else {
                mediator.dispatch('alert', { selector: notifier, title: 'Not all urls are valid!', message: res.message, status: 'danger' });
                return Promise.reject();
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {

                mediator.dispatch('filesUploaded', { fileIds: res.ids, libraryId: libraryId, requester });
                mediator.dispatch('uploadedFilesEvent', { fileIds: res.ids, sizeName: 'Original', libraryId: libraryId, requester });

                cleanUp();
            }
        }, Data.defaultError);
    }

    // NB:

    function updateFilesInfo(files) {
        for (var i = 0; i < files.length; i++) {
            files[i].name = $container.find('#input-name-' + files[i].id).val();
            files[i].url = $container.find('#input-url-' + files[i].id).val();
            files[i].alt = $container.find('#input-alt-' + files[i].id).val();
            files[i].type = $container.find('#dropdown-type-' + files[i].id).val();
        }
    }

    function validateFileUrl(ev) {
        let $urlField = $(ev.target ? ev.target : ev);
        let url = $urlField.val();

        if (!url || url.length < 3) {
            $urlField.css('border', '1px solid red');
        } else {
            validateUrl(`/sitetriks/files/ValidateUrl?url=${url}&prefix=${libraryPrefix}`, $urlField, $('<div></div>'), $('<div></div>'));
        }
    }

    function selectLibrary(libraryId) {
        $libraries.val(libraryId.toUpperCase());
        $libraries.trigger('change');
    }

    function dragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function dragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function dragLeave(e) {
        // $(this).removeClass('drop-highlight');
        e.preventDefault();
        e.stopPropagation();
    }

    function drop(e) {
        if ($('#drop-area').hasClass('disabled')) {
            return false;
        }
        if (e.originalEvent.dataTransfer) {
            if (e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();

                let filesValue = e.originalEvent.dataTransfer.files;
                $inputFiles.attr('disabled', false);
                $inputFiles.prop('files', filesValue);
                renderFiles();
            }
        }
    }

    function typeChange(data) {
        if (data.type === 'multiple') {
            $inputFiles.attr('multiple', data.type);
        } else {
            $inputFiles.removeAttr('multiple');
        }

        requester = data.requester;
        cleanUp();
    }

    function cleanUp() {
        files = [];
        uploadedFiles = [];
        $inputFiles.val('');
        $filesContainer.html('');
        $uploadBtn.addClass('disabled');
        $('.file-handler-notifier').html('');
    }

    return {
        dispose
    };
}

function fileHandlerSelect(logger, $container, mediator, libraryId, isMultiple) {
    let $filesContainer;
    let $libraries;
    let templatesCache = {};
    let templates = [{ name: 'file-select', url: '/templates/file-select.html' }];
    let page = 0;
    let $btnNext;
    let $btnPrev;
    let $pageNumber;
    const pageSize = 9;
    let nextPageExists = false;
    let $btnSelect;
    let requester;
    let selectedFiles = {};

    logger.log('init select module');

    let url = `/sitetriks/files/selectTemplate?libraryId=${libraryId}`;
    Data.getJson({ url: url }).then(function (res) {
        $container.html(res);
        $filesContainer = $container.find('.files-container');
        $libraries = $container.find('.file-select-library');
        $btnNext = $container.find('.next-page');
        $btnPrev = $container.find('.previous-page');
        $pageNumber = $container.find('.page-number');
        $btnSelect = $container.find('.btn-select');

        return Utils.loadHandlebarsTemplates(templatesCache, templates);
    }).then(function (res) {
        bindEvents();
        loadImages();

        logger.log('select module initialized');
    }, Data.defaultError);

    let $btnSave = $('#btn-save-widget');
    let $btnEdit = $('#btn-edit-widget');

    function selectUploadedFiles(data) {
        let selectedLinkIds = data.fileIds;

        logger.log(selectedLinkIds);
        for (var i = 0; i < selectedLinkIds.length; i += 1) {
            selectedFiles[selectedLinkIds[i]] = {
                selectedLinkId: selectedLinkIds[i],
                sizeName: 'Original'
            };
        }

        loadImages();
    }

    function bindEvents() {
        logger.log('bind select module events');
        $libraries.on('change', changeLibrary);
        $btnNext.on('click', nextPage);
        $btnPrev.on('click', prevPage);
        $container.on('change', '.thumbnailSelect', selectSize);
        $container.on('click', '.image-checkbox', checkCheckbox);
        $container.on('click', '.checkmark', triggerCheckbox);
        $container.on('click', '.image-checkbox', toggleSelectDropdown);
        $btnSave.on('click', selectFiles);
        $btnEdit.on('click', selectFiles);
        $btnSelect.on('click', selectFiles);
        mediator.on('fileLibraryChange', selectLibrary, 'selectLibrary', 'FileHandlerSelect');
        mediator.on('fileHandlerTypeChange', typeChange, 'selectTypeChange', 'FileHandlerSelect');
        mediator.on('populatedSelected', populateSelected, 'populateSelectedFiles', 'FileHandlerSelect');
        mediator.on('uploadedFilesEvent', selectUploadedFiles, 'selectUploadedFiles', 'FileHandlerSelect');

    }

    function dispose() {
        logger.log('destoy select module');
        $libraries.off('change', changeLibrary);
        $container.off('change', '.thumbnailSelect', selectSize);
        $container.off('click', '.image-checkbox', checkCheckbox);
        $container.off('click', '.checkmark', triggerCheckbox);
        $container.off('click', '.image-checkbox', toggleSelectDropdown);
        $btnSave.off('click', selectFiles);
        $btnEdit.off('click', selectFiles);
        $btnSelect.off('click', selectFiles);
        $btnNext.off('click', nextPage);
        $btnPrev.off('click', prevPage);
        mediator.off('fileLibraryChange', 'selectLibrary', 'FileHandlerSelect');
        mediator.off('fileHandlerTypeChange', 'selectTypeChange', 'FileHandlerSelect');
        mediator.off('populatedSelected', 'populateSelectedFiles', 'FileHandlerSelect');
        mediator.off('uploadedFilesEvent', 'selectUploadedFiles', 'FileHandlerSelect');
    }

    function loadImages() {
        $filesContainer.html('<p>Loading...</p>');
        let template = templatesCache['file-select'];
        let inputType = isMultiple ? 'checkbox' : 'radio';

        let filters = [];

        if (libraryId) {
            filters.push({
                comparison: 1,
                propertyName: 'LibraryId',
                value: libraryId
            });
        }

        let skip = page * pageSize;
        Data.postJson({ url: '/sitetriks/files/grid', data: { filters, take: pageSize, skip } }).then(function (res) {
            if (res.success) {
                $filesContainer.html('');
                $(res.items).each(function (_, element) {
                    if (+element.type === 0) {
                        $filesContainer.append(template({ title: element.title, id: element.id, linkId: element.linkId, url: element.url, thumbnails: element.thumbnails, inputType }));
                    }
                });

                if (page === 0) {
                    $btnPrev.attr('disabled', true).hide();
                } else {
                    $btnPrev.attr('disabled', false).show();
                }

                nextPageExists = res.nextPageExists;
                if (!res.nextPageExists) {
                    $btnNext.attr('disabled', true).hide();
                } else {
                    $btnNext.attr('disabled', false).show();
                }

                $pageNumber.text(`${page + 1}/${Math.max(Math.ceil(res.count / pageSize), 1)}`);
                logger.log('images rendered');

                setSelectedImages();
            }
        }, Data.defaultError);
    }

    function nextPage() {
        if (!nextPageExists) {
            return;
        }

        page += 1;
        loadImages();
    }

    function prevPage() {
        if (page <= 0) {
            return;
        }

        page -= 1;
        loadImages();
    }

    function changeLibrary(ev) {
        libraryId = ev.target.value;
        loadImages();
    }

    function selectSize() {
        let $option = $(this);
        let selectedId = $option.val();
        let id = $option.attr('data-id');
        let sizeName = $option.find(':selected').attr('data-sizename');

        selectedFiles[id] = {
            selectedLinkId: selectedId,
            sizeName: sizeName
        };
    }

    function triggerCheckbox(ev) {
        let $checkTick = $(this);
        let $checkbox = $(this).parent().find('.image-checkbox');

        $checkTick.on('click', function () {
            $checkbox.prop('checked', false);
        });

        checkCheckbox();
    }

    function checkCheckbox(ev) {
        let $checkbox = $(this);
        let id = $checkbox.attr('data-id');

        if ($checkbox.is(':checked')) {
            let selectedId = id;
            let sizeName = 'Original';
            if ($checkbox.attr('type') === 'radio') {
                selectedFiles = {};
            }

            let $select = $checkbox.parents('.image-container2').find('.thumbnailSelect');
            if ($select.length > 0) {
                selectedId = $select.val() || selectedId;
                sizeName = $select.find(':selected').attr('data-sizename') || sizeName;
            }

            selectedFiles[id] = {
                selectedLinkId: selectedId,
                sizeName: sizeName
            };

        } else {
            delete selectedFiles[id];
        }

        selectFileUI();
    }

    function selectFiles() {
        let selectedImagesFullInfo = JSON.stringify(selectedFiles);
        let selectedLinkIds = [];

        for (const key in selectedFiles) {
            selectedLinkIds.push(selectedFiles[key].selectedLinkId);
        }

        $('#selectedImages').attr('data-selectedImages', JSON.stringify(selectedImagesFullInfo));
        $('#image').val(selectedLinkIds);

        mediator.dispatch('filesSelected', { fileIds: selectedLinkIds, selectedImagesFullInfo: selectedImagesFullInfo, libraryId: libraryId, requester });
    }

    function populateSelected(selected) {
        selectedFiles = JSON.parse(JSON.stringify(selected)) || {};
        loadImages();
    }


    function selectFileUI() {
        $('input[name=images-list]').each(function (_, element) {
            let $selected = $(element);
            if ($selected.is(':checked')) {
                $selected.parents('.image-container2').addClass('selected');
            } else {
                $selected.parents('.image-container2').removeClass('selected');
            }
        });
    }

    function selectLibrary(libraryId) {
        $libraries.val(libraryId.toUpperCase());
        $libraries.trigger('change');
    }

    function typeChange(data) {
        isMultiple = data.type === 'multiple';
        requester = data.requester;
        page = 0;
        loadImages();
    }


    function setSelectedImages() {
        let selectedImagesFullInfo = selectedFiles;
        let selectedIds = [];

        for (const [key, value] of Object.entries(selectedImagesFullInfo)) {
            selectedIds.push(key);
        }

        for (var i = 0; i < selectedIds.length; i++) {
            let selectedImageId = selectedIds[i];

            $('input[name=images-list]').each(function (_, element) {
                let $selected = $(this);
                let fileName = selectedImagesFullInfo[selectedImageId].selectedLinkId;

                $selected.attr('data-alt-id', fileName);
                let $currentThumbnail = $selected.parent().parent().find('.thumbnailSelect');

                if ($selected.attr('data-id') == selectedImageId) {
                    $selected.prop('checked', true);

                    $currentThumbnail.val(fileName);
                }
                selectFileUI();
            });
        }
    }

    function toggleSelectDropdown(ev) {
        let $checkbox = $(ev.target);
        if ($checkbox.is(':checked')) {
            let $target = $checkbox.parent().parent().find('.thumbnailSelect.dropdown');
            let $clone = $target.clone().removeAttr('data-click-id');
            $clone.val($target.val()).addClass('cloned').attr('size', $clone.find('option').length > 10 ? 10 : $clone.find('option').length).change(function () {
                $target.val($clone.val());
            }).on('click blur keypress', function (e) {
                if (e.type !== 'keypress' || e.which === 13) {
                    $(this).remove();
                }
            });
            $checkbox.parents('.select-parent').append($clone);
            $clone.focus();
        }
    }

    return {
        dispose
    };
}

function fileHandlerSelected() {

    return { dispose: function () { } };

}
