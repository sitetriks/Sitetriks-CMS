/*============================================================================
 *                           --- file-handler ---
 *                           
 *  -v3.0 overall refactor.
 *      - upload and select moved to separete module
 *      - removed usage specific logic, now accessed via mediator
 *  
 *============================================================================*/

'use strict';

let FileHandler = function ($container, modes, selectedLibrary, mediator, logger, multipleSelection) {
    let libraryAllowed = '';
    let modules = {
        'Upload': { ctor: fileHandlerUpload, instance: undefined, status: 'not-active' },
        'Select': { ctor: fileHandlerSelect, instance: undefined, status: 'not-active' },
        'Selected': { ctor: fileHandlerSelected, instance: undefined, status: 'not-active' }

    }

    let $nav = $('<ul></ul>', { class: 'nav nav-tabs file-handler-nav' }).appendTo($container);
    let $contentRow = $('<div></div>', { class: 'file-handler-content-row' }).appendTo($container);

    for (var key of modes) {
        if (modules[key]) {

            let $btnNav = $('<li></li>', {
                class: ``,
                html: `<a class="file-handler-nav-btn" data-type="${key}">${key}</a>`,
                role: 'presentation'
            });

            $nav.append($btnNav)

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
    }
};


function fileHandlerUpload(logger, $container, mediator, libraryId, isMultiple) {
    let $inputFiles;
    let $notifier;
    let $filesContainer;
    let $libraries;
    let $btnUpload;

    let libraryPrefix = '';
    let libraryAllowed = '';
    let files = [];
    let uploadedFiles = [];
    let templatesCache = {};
    let templates = [{ name: 'file-upload', url: '/templates/file-upload.html' }];
    let requester;

    logger.log('initialazing upload module...')
    let url = `/sitetriks/files/uploadTemplate?isMultiple=${isMultiple}&libraryId=${libraryId}`;

    Data.getJson({ url: url }).then(function (res) {
        $container.html(res);

        $inputFiles = $container.find('.input-files');
        $notifier = $container.find('.accepted-formats');
        $filesContainer = $container.find('.files-container');
        $libraries = $container.find('.file-upload-library');
        $btnUpload = $container.find('.btn-submit-images');

        return Utils.loadHandlebarsTemplates(templatesCache, templates)
    }, Data.defaultError).then(function (res) {
        bindEvents();
    }, Data.defaultError);

    function bindEvents() {
        $libraries.on('change', loadAllowedTypes);
        $inputFiles.on('change', renderFiles);
        $btnUpload.on('click', uploadFiles);
        $container.on('keyup', '.input-url', validateFileUrl);
        mediator.on('fileLibraryChange', selectLibrary, 'selectLibrary', 'FileHandlerUpload');
        mediator.on('fileHandlerTypeChange', typeChange, 'uploadTypeChange', 'FileHandlerUpload');

        $libraries.trigger('change');
    }

    function dispose() {
        $libraries.off('change', loadAllowedTypes);
        $inputFiles.off('change', renderFiles);
        $btnUpload.off('click', uploadFiles);
        $container.off('keyup', '.input-url', validateFileUrl);
        mediator.off('fileLibraryChange', 'selectLibrary', 'FileHandlerUpload');
        mediator.off('fileHandlerTypeChange', 'uploadTypeChange', 'FileHandlerUpload');
    }

    function loadAllowedTypes(ev) {
        libraryId = ev.target.value;
        cleanContent();

        return Data.getJson({ url: '/sitetriks/libraries/GetAllowedForLibrary?id=' + libraryId }).then(function (res) {
            if (typeof res === 'string' || res instanceof String) {
                res = JSON.parse(res);
            }

            if (res.success) {
                $inputFiles.attr('disabled', false)
                    .attr('accept', res.ext);
                $notifier.text('Accepted files: ' + (res.type.displayName || res.type.extensions));
                libraryAllowed = replaceAll(replaceAll(res.ext, '*', ''), ',', '|');
                libraryPrefix = res.prefix;
            } else {
                $inputFiles.attr('disabled', true);
            }
        }, Data.defaultError)
    }

    function renderFiles() {
        files = $inputFiles[0].files;
        $filesContainer.html('');
        uploadedFiles = [];
        let date = Date.parse(new Date());

        let template = templatesCache['file-upload'];

        for (var i = 0; i < files.length; i++) {
            var regExp = new RegExp(libraryAllowed);

            if (!regExp.test(files[i].name) && !regExp.test(files[i].type)) {
                $filesContainer.append(`<p><strong><span class="text-danger">${files[i].name} file type is not supported by selected library and will not be uploaded!</span></strong></p>`);
                continue;
            }

            let $fragment = $('<div></div>', {
                class: 'img-upload-wrapper upload-element-' + i
            });

            let fileName = files[i].name.substring(0, files[i].name.lastIndexOf('.'));
            let fileUrl = files[i].name.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();

            $fragment.append(template({ index: i, name: fileName, alt: fileName, url: fileUrl }));

            if (files[i].type && (files[i].type.indexOf('image/') >= 0)) {
                let file = window.URL.createObjectURL(files[i]);
                $fragment.append(`<img src="${file}" class="display-image">`);
            } else {
                $fragment.append('<img src="/Images/default-document-image.png">');
            }

            $filesContainer.append($fragment);
            validateFileUrl($fragment.find('.input-url'));

            uploadedFiles.push({
                name: fileName + '-' + date,
                url: fileUrl + '-' + date,
                alt: fileName,
                originalName: files[i].name
            });
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
            var url = $(obj).val();
            if (url.length < 3) {
                flag = true;
            }

            if (libraryPrefix) {
                url = libraryPrefix + '/' + url;
            }

            urls.push(url);
        });

        if (flag) {
            mediator.dispatch('alert', { selector: notifier, message: 'Urls must be alteast 3 characters long!', status: 'danger' });
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
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {
                mediator.dispatch('filesUploaded', { fileIds: res.ids, libraryId: libraryId, requester });
            }
        }, Data.defaultError);
    }

    function updateFilesInfo(files) {
        for (var i = 0; i < files.length; i++) {
            files[i].name = $container.find('#input-name-' + i).val();
            files[i].url = $container.find('#input-url-' + i).val();
            files[i].alt = $container.find('#input-alt-' + i).val();
            files[i].type = $container.find('#dropdown-type-' + i).val();
        }
    }

    function validateFileUrl(ev) {
        let $urlField = $(ev.target ? ev.target : ev);
        let url = $urlField.val();

        if (!url || url.length < 3) {
            $urlField.css("border", "1px solid red");
        } else {
            validateUrl(`/sitetriks/files/ValidateUrl?url=${url}&prefix=${libraryPrefix}`, $urlField, $('<div></div>'), $('<div></div>'));
        }
    }

    function selectLibrary(libraryId) {
        $libraries.val(libraryId.toUpperCase());
        $libraries.trigger('change');
    }

    function cleanContent() {
        $filesContainer.html('');
        $inputFiles.val('');
        $notifier.text('');
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
    }

    return {
        dispose
    }
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
    let $btnSelect, $btnSelect2;
    let requester;
    let firstStage = true;
    let $thumbnailSelector = $('.thumbnailSelect');
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
        $btnSelect2 = $container.find('.btn-select-2');


        return Utils.loadHandlebarsTemplates(templatesCache, templates)
    }).then(function (res) {
        bindEvents();
        loadImages();

        logger.log('select module initialized');
    }, Data.defaultError);

    let $btnSave = $('#btn-save-widget');
    let $btnEdit = $('#btn-edit-widget');


    function bindEvents() {
        logger.log('bind select module events');
        $libraries.on('change', changeLibrary);
        $btnNext.on('click', nextPage);
        $btnPrev.on('click', prevPage);
        $container.on('click', '.thumbnailSelect', selectSize);
        $container.on('click', '.image-checkbox', checkCheckbox);
        $btnSave.on('click', selectFiles);
        $btnEdit.on('click', selectFiles);
        $btnSelect.on('click', selectFiles);
        //$container.on('click', '.image-checkbox', selectFileUI);
        mediator.on('fileLibraryChange', selectLibrary, 'selectLibrary', 'FileHandlerSelect');
        mediator.on('fileHandlerTypeChange', typeChange, 'selectTypeChange', 'FileHandlerSelect');
        mediator.on('populatedSelected', populateSelected, 'populateSelectedFiles', 'FileHandlerSelect');

    }

    function dispose() {
        logger.log('destoy select module');
        $libraries.off('change', changeLibrary);
        $container.off('click', '.thumbnailSelect', selectSize);
        $btnSave.off('click', selectFiles);
        $btnEdit.off('click', selectFiles);
        $btnSelect.off('click', selectFiles);
        $btnNext.off('click', nextPage);
        $btnPrev.off('click', prevPage);
        mediator.off('fileLibraryChange', 'selectLibrary', 'FileHandlerSelect');
        mediator.off('fileHandlerTypeChange', 'selectTypeChange', 'FileHandlerSelect');
        mediator.on('populatedSelected', populateSelected, 'populateSelectedFiles', 'FileHandlerSelect');
    }

    function loadImages() {
        $filesContainer.html('<p>Loading...</p>');
        let template = templatesCache['file-select'];
        let inputType = isMultiple ? 'checkbox' : 'radio';

        let filters = []

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
                    if (element.type == 0) {
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

    function loadThumbnailsForImage(imageId) {

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

    // 



    function selectSize() {
        let $option = $(this);
        let selectedId = $option.val();
        let sizeName = $option.find(":selected").attr('data-sizename');
        let $checkbox = $(this).parent().parent().find("input");
        $checkbox.prop('checked', false);
        $($option.parent().parent().find("input")).attr("data-alt-id", selectedId);
        $($option.parent().parent().find("input")).attr("data-sizename", sizeName);

        selectFileUI()
    }


    function checkCheckbox(ev) {
        let $checkbox = $(this);
        let id = $checkbox.attr('data-id');

        if ($checkbox.is(':checked')) {
            // check if it is a single choice
            let thumbnails = $checkbox.attr('data-thumbnails');
            let selectedLinkId = $checkbox.attr('data-alt-id');
            let sizeName = $checkbox.attr('data-sizename');

            if ($checkbox.attr("type") == "radio") {
                selectedFiles = {};

                selectedFiles[id] = {
                    selectedLinkId: selectedLinkId,
                    sizeName: sizeName
                };
            } else {
                if (!(id in selectedFiles)) {
                    console.log('adding');
                    selectedFiles[id] = {
                        selectedLinkId: selectedLinkId,
                        sizeName: sizeName
                    };
                    console.log(selectedFiles);
                } 

            }

        } else {
            delete selectedFiles[id];
        }
        console.log(selectedFiles);

        selectFileUI();
    }

    function selectFiles() {

        console.log(selectedFiles);
        let selectedImagesFullInfo = JSON.stringify(selectedFiles);
        let selectedLinkIds = [];

        for (const [key, value] of Object.entries(selectedFiles)) {
            selectedLinkIds.push(selectedFiles[key].selectedLinkId);
        }

        $('#selectedImages').attr('data-selectedImages', JSON.stringify(selectedImagesFullInfo));
        $('#image').val(JSON.stringify(selectedLinkIds));

        mediator.dispatch('filesSelected', { fileIds: selectedLinkIds, selectedImagesFullInfo: selectedImagesFullInfo, libraryId: libraryId, requester });
    }

    function populateSelected(selected) {

        selectedFiles = JSON.parse(JSON.stringify(selected));
        loadImages();
    }


    function selectFileUI() {
        $('input[name=images-list]').each(function (_, element) {
            let $selected = $(this);
            if ($selected.is(':checked')) {
                $selected.parent().css('background', '#4a90e2');
                $selected.parent().parent().find('.thumbnailSelect').css('background', '#4a90e2')
                    .css('color', '#ffffff');
                $selected.parent().parent().find('.arrow-down').css('display', 'inline-block');

            } else {
                $selected.parent().css('background', 'transparent');
                $selected.parent().parent().find('.thumbnailSelect').css('background', 'white')
                    .css('color', '#4e4e4e');
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
        console.log(selectedFiles);
        let selectedImagesFullInfo = selectedFiles;
        let selectedIds = [];

        for (const [key, value] of Object.entries(selectedImagesFullInfo)) {
            selectedIds.push(key);
        }

        for (var i = 0; i < selectedIds.length; i++) {
            let selectedImageId = selectedIds[i];

            $('input[name=images-list]').each(function (_, element) {
                let $selected = $(this);

                if ($selected.attr('data-id') == selectedImageId) {
                    $selected.prop('checked', true);
                }

                selectFileUI();
            });
        }

    }

    return {
        dispose
    }
}

function fileHandlerSelected() {

    return { dispose: function () { } };

}
