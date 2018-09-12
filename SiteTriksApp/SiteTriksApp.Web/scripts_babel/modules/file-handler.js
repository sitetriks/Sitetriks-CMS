/*============================================================================
*                           --- file-handler ---
*                           
*  -v3.0 overall refactor.
*      - upload and select moved to separete module
*      - removed usage specific logic, now accessed via mediator
*  
*============================================================================*/

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var FileHandler = function FileHandler($container, modes, selectedLibrary, mediator, logger, multipleSelection) {
    var libraryAllowed = '';
    var modules = {
        'Upload': { ctor: fileHandlerUpload, instance: undefined, status: 'not-active' },
        'Select': { ctor: fileHandlerSelect, instance: undefined, status: 'not-active' },
        'Selected': { ctor: fileHandlerSelected, instance: undefined, status: 'not-active' }

    };

    var $nav = $('<ul></ul>', { class: 'nav nav-tabs file-handler-nav' }).appendTo($container);
    var $contentRow = $('<div></div>', { class: 'file-handler-content-row' }).appendTo($container);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = modes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (modules[key]) {

                var $btnNav = $('<li></li>', {
                    class: '',
                    html: '<a class="file-handler-nav-btn" data-type="' + key + '">' + key + '</a>',
                    role: 'presentation'
                });

                $nav.append($btnNav);

                var $wrapper = $('<div></div>', {
                    class: 'file-handler-container file-handler-' + key
                });

                $contentRow.append($wrapper);

                modules[key].instance = modules[key].ctor(logger, $wrapper, mediator, selectedLibrary, multipleSelection);
                modules[key].status = 'active';
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    openModule({ target: $nav.find('.file-handler-nav-btn').first() });
    bindEvents();

    function bindEvents() {
        var $selectedButton = $('[data-type=Selected]');
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
        var $target = $(ev.target);

        $nav.find('.file-handler-nav-btn.active').each(function (_, element) {
            var $element = $(element);
            $element.removeClass('active');
            $element.parent('li').removeClass('active');
        });

        $contentRow.find('.file-handler-container.active').each(function (_, element) {
            $(element).removeClass('active');
        });

        $target.addClass('active');
        $target.parent('li').addClass('active');

        $contentRow.find('.file-handler-container.file-handler-' + $target.attr('data-type')).addClass('active');
    }

    return {
        dispose: dispose
    };
};

function fileHandlerUpload(logger, $container, mediator, libraryId, isMultiple) {
    var $inputFiles = void 0;
    var $notifier = void 0;
    var $filesContainer = void 0;
    var $libraries = void 0;
    var $btnUpload = void 0;

    var libraryPrefix = '';
    var libraryAllowed = '';
    var files = [];
    var uploadedFiles = [];
    var templatesCache = {};
    var templates = [{ name: 'file-upload', url: '/templates/file-upload.html' }];
    var requester = void 0;

    logger.log('initialazing upload module...');
    var url = '/sitetriks/files/uploadTemplate?isMultiple=' + isMultiple + '&libraryId=' + libraryId;

    Data.getJson({ url: url }).then(function (res) {
        $container.html(res);

        $inputFiles = $container.find('.input-files');
        $notifier = $container.find('.accepted-formats');
        $filesContainer = $container.find('.files-container');
        $libraries = $container.find('.file-upload-library');
        $btnUpload = $container.find('.btn-submit-images');

        return Utils.loadHandlebarsTemplates(templatesCache, templates);
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
                $inputFiles.attr('disabled', false).attr('accept', res.ext);
                $notifier.text('Accepted files: ' + (res.type.displayName || res.type.extensions));
                libraryAllowed = replaceAll(replaceAll(res.ext, '*', ''), ',', '|');
                libraryPrefix = res.prefix;
            } else {
                $inputFiles.attr('disabled', true);
            }
        }, Data.defaultError);
    }

    function renderFiles() {
        files = $inputFiles[0].files;
        $filesContainer.html('');
        uploadedFiles = [];
        var date = Date.parse(new Date());

        var template = templatesCache['file-upload'];

        for (var i = 0; i < files.length; i++) {
            var regExp = new RegExp(libraryAllowed);

            if (!regExp.test(files[i].name) && !regExp.test(files[i].type)) {
                $filesContainer.append('<p><strong><span class="text-danger">' + files[i].name + ' file type is not supported by selected library and will not be uploaded!</span></strong></p>');
                continue;
            }

            var $fragment = $('<div></div>', {
                class: 'img-upload-wrapper upload-element-' + i
            });

            var fileName = files[i].name.substring(0, files[i].name.lastIndexOf('.'));
            var fileUrl = files[i].name.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();

            $fragment.append(template({ index: i, name: fileName, alt: fileName, url: fileUrl }));

            if (files[i].type && files[i].type.indexOf('image/') >= 0) {
                var file = window.URL.createObjectURL(files[i]);
                $fragment.append('<img src="' + file + '" class="display-image">');
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
        var notifier = '.file-handler-notifier';
        if (uploadedFiles.length === 0 || files.length === 0) {
            mediator.dispatch('alert', { selector: notifier, message: 'No files have been selected!', status: 'warning' });
            return;
        }

        var urls = [];
        var flag = false;
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

        return Data.postJson({ url: '/sitetriks/pages/validateUrls', data: { urls: urls } }).then(function (res) {

            if (res.success) {
                updateFilesInfo(uploadedFiles);

                var formData = new FormData();

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
                mediator.dispatch('filesUploaded', { fileIds: res.ids, libraryId: libraryId, requester: requester });
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
        var $urlField = $(ev.target ? ev.target : ev);
        var url = $urlField.val();

        if (!url || url.length < 3) {
            $urlField.css("border", "1px solid red");
        } else {
            validateUrl('/sitetriks/files/ValidateUrl?url=' + url + '&prefix=' + libraryPrefix, $urlField, $('<div></div>'), $('<div></div>'));
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
        dispose: dispose
    };
}

function fileHandlerSelect(logger, $container, mediator, libraryId, isMultiple) {
    var $filesContainer = void 0;
    var $libraries = void 0;
    var templatesCache = {};
    var templates = [{ name: 'file-select', url: '/templates/file-select.html' }];
    var page = 0;
    var $btnNext = void 0;
    var $btnPrev = void 0;
    var $pageNumber = void 0;
    var pageSize = 9;
    var nextPageExists = false;
    var $btnSelect = void 0,
        $btnSelect2 = void 0;
    var requester = void 0;
    var firstStage = true;
    var $thumbnailSelector = $('.thumbnailSelect');
    var selectedFiles = {};

    logger.log('init select module');

    var url = '/sitetriks/files/selectTemplate?libraryId=' + libraryId;
    Data.getJson({ url: url }).then(function (res) {
        $container.html(res);
        $filesContainer = $container.find('.files-container');
        $libraries = $container.find('.file-select-library');
        $btnNext = $container.find('.next-page');
        $btnPrev = $container.find('.previous-page');
        $pageNumber = $container.find('.page-number');
        $btnSelect = $container.find('.btn-select');
        $btnSelect2 = $container.find('.btn-select-2');

        return Utils.loadHandlebarsTemplates(templatesCache, templates);
    }).then(function (res) {
        bindEvents();
        loadImages();

        logger.log('select module initialized');
    }, Data.defaultError);

    var $btnSave = $('#btn-save-widget');
    var $btnEdit = $('#btn-edit-widget');

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
        var template = templatesCache['file-select'];
        var inputType = isMultiple ? 'checkbox' : 'radio';

        var filters = [];

        if (libraryId) {
            filters.push({
                comparison: 1,
                propertyName: 'LibraryId',
                value: libraryId
            });
        }

        var skip = page * pageSize;
        Data.postJson({ url: '/sitetriks/files/grid', data: { filters: filters, take: pageSize, skip: skip } }).then(function (res) {
            if (res.success) {
                $filesContainer.html('');
                $(res.items).each(function (_, element) {
                    if (element.type == 0) {
                        $filesContainer.append(template({ title: element.title, id: element.id, linkId: element.linkId, url: element.url, thumbnails: element.thumbnails, inputType: inputType }));
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

                $pageNumber.text(page + 1 + '/' + Math.max(Math.ceil(res.count / pageSize), 1));
                logger.log('images rendered');

                setSelectedImages();
            }
        }, Data.defaultError);
    }

    function loadThumbnailsForImage(imageId) {}

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
        var $option = $(this);
        var selectedId = $option.val();
        var sizeName = $option.find(":selected").attr('data-sizename');
        var $checkbox = $(this).parent().parent().find("input");
        $checkbox.prop('checked', false);
        $($option.parent().parent().find("input")).attr("data-alt-id", selectedId);
        $($option.parent().parent().find("input")).attr("data-sizename", sizeName);

        selectFileUI();
    }

    function checkCheckbox(ev) {
        var $checkbox = $(this);
        var id = $checkbox.attr('data-id');

        if ($checkbox.is(':checked')) {
            // check if it is a single choice
            var thumbnails = $checkbox.attr('data-thumbnails');
            var selectedLinkId = $checkbox.attr('data-alt-id');
            var sizeName = $checkbox.attr('data-sizename');

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
        var selectedImagesFullInfo = JSON.stringify(selectedFiles);
        var selectedLinkIds = [];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = Object.entries(selectedFiles)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    key = _step2$value[0],
                    value = _step2$value[1];

                selectedLinkIds.push(selectedFiles[key].selectedLinkId);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        $('#selectedImages').attr('data-selectedImages', JSON.stringify(selectedImagesFullInfo));
        $('#image').val(JSON.stringify(selectedLinkIds));

        mediator.dispatch('filesSelected', { fileIds: selectedLinkIds, selectedImagesFullInfo: selectedImagesFullInfo, libraryId: libraryId, requester: requester });
    }

    function populateSelected(selected) {

        selectedFiles = JSON.parse(JSON.stringify(selected));
        loadImages();
    }

    function selectFileUI() {
        $('input[name=images-list]').each(function (_, element) {
            var $selected = $(this);
            if ($selected.is(':checked')) {
                $selected.parent().css('background', '#4a90e2');
                $selected.parent().parent().find('.thumbnailSelect').css('background', '#4a90e2').css('color', '#ffffff');
                $selected.parent().parent().find('.arrow-down').css('display', 'inline-block');
            } else {
                $selected.parent().css('background', 'transparent');
                $selected.parent().parent().find('.thumbnailSelect').css('background', 'white').css('color', '#4e4e4e');
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
        var selectedImagesFullInfo = selectedFiles;
        var selectedIds = [];

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = Object.entries(selectedImagesFullInfo)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                    key = _step3$value[0],
                    value = _step3$value[1];

                selectedIds.push(key);
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        var _loop = function _loop() {
            var selectedImageId = selectedIds[i];

            $('input[name=images-list]').each(function (_, element) {
                var $selected = $(this);

                if ($selected.attr('data-id') == selectedImageId) {
                    $selected.prop('checked', true);
                }

                selectFileUI();
            });
        };

        for (var i = 0; i < selectedIds.length; i++) {
            _loop();
        }
    }

    return {
        dispose: dispose
    };
}

function fileHandlerSelected() {

    return { dispose: function dispose() {} };
}