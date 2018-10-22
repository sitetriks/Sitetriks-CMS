'use strict';

var ModuleBuilder = function () {
    var instancesCache = {};
    var _mediator = void 0;
    var _logger = void 0;

    function init(mediator, logger) {
        _mediator = mediator;
        _logger = logger;
    }

    /**
     * Create scroll control.
     * @param {any} wrapperId wrapper id
     * @param {any} scrollViewClass scroll view class
     * @param {any} innerContentClass inner conten class
     * @param {{styles: Map<string, string>}} config config
     * @return {scrollControl} scroll-control
     */
    function createScroll(wrapperId, scrollViewClass, innerContentClass, config) {
        var $element = $(wrapperId);
        var scroll = scrollControl($element, scrollViewClass, innerContentClass, config);

        $element.data('scroll-bar', scroll);
        instancesCache[wrapperId] = { 'scroll-bar': scroll };

        return scroll;
    }

    function createWidgets(addWidgetContainerId, customWidgets, pageContent) {
        var initFunctions = getSiteTriksWidgets();

        if (!customWidgets) {
            customWidgets = {};
        }

        for (var key in customWidgets) {
            if (initFunctions[key]) {
                console.warn('Widget "' + key + '" already exists and will not be duplicated!');
            } else {
                initFunctions[key] = customWidgets[key];
            }
        }

        var widgets = widgetsModule($(addWidgetContainerId), initFunctions, pageContent);
        instancesCache[addWidgetContainerId] = { 'widgets': widgets };

        return widgets;
    }

    function initializeLayout(wrapperSelector, layout, resolutionsSelector, optionsSelector, resolutionValidation) {
        var $wrapper = $(wrapperSelector);

        initLayout($wrapper, layout, $(resolutionsSelector), $(optionsSelector), resolutionValidation);

        instancesCache[wrapperSelector] = { 'layout-control': layout };
        $wrapper.data('layout-control', layout);

        return layout;
    }

    function renderLayout(layout, $container, deletedPlaceholders, widgets) {
        if (!$container || !$container.length) {
            return false;
        }

        for (var i = 0; i < (deletedPlaceholders || []).length; i += 1) {
            $container.find('div[data-placeholder="' + deletedPlaceholders[i] + '"]').remove();
            w.removeWidgetForPlaceholder(deletedPlaceholders[i], widgets);
        }

        var $rows = $container.children('.row');

        for (var _i = 0; _i < layout.length; _i += 1) {
            var isExistingRow = $rows.length > _i;
            var $row = isExistingRow ? $($rows[_i]) : $('<' + layout[_i].tag + '></' + layout[_i].tag + '>');
            $row.removeClass().addClass('row ' + layout[_i].cssClass + ' ');

            for (var j = 0; j < layout[_i].columns.length; j++) {
                var col = layout[_i].columns[j];
                var cssClass = '';
                for (var key in col.resolutions) {
                    cssClass += 'col-' + key + '-' + col.resolutions[key].size + ' st-col-' + key + '-' + col.resolutions[key].size + ' ';
                }

                var $col = $container.find('div[data-placeholder="' + col.properties.placeholder + '"]');

                if ($col.length > 0) {
                    $col.attr('class', cssClass + 'drop drop-layout connected-widget-container placeholder');
                } else {
                    $col = $('<div></div>', {
                        class: cssClass + 'drop drop-layout connected-widget-container placeholder',
                        'data-placeholder': col.properties.placeholder
                    }).appendTo($row);
                }
            }

            if (!isExistingRow) {
                $row.appendTo($container);
            }
        }
    }

    function getSiteTriksWidgets() {

        var editor;

        var initFunctions = {};

        function newsTitlesInputKeyUp(ev, selectId) {
            var val = $(ev.target).val();

            if (val.length < 3) {
                return;
            }

            Data.getJson({ url: '/sitetriks/news/getallnewstitles?count=10&text=' + val }).then(function (response) {
                $("#" + selectId).autocomplete({
                    source: response.suggestions,
                    select: function select(event, ui) {
                        $("#" + selectId).val(ui.item.label);
                        $("#" + selectId).attr("data-id", ui.item.id);

                        return false;
                    }
                }).data("ui-autocomplete")._renderItem = function (ul, item) {
                    return $("<li>").append("<a data-id=" + item.id + ">" + item.label + "</a>").appendTo(ul);
                };
            });
        }

        function appendNewsTitles(selectId) {
            $('#' + selectId).unbind('keyup');
            $("#" + selectId).keyup(function (ev) {
                newsTitlesInputKeyUp(ev, selectId);
            });
        }

        initFunctions['html'] = {
            init: function init() {
                var $container = $("#html-widget-holder");
                var $list = $("#html-options-list");

                var $textarea = $("<textarea></textarea>", {
                    id: "add-html-content"
                });

                $container.html($textarea);

                Utils.addEditor('#add-html-content', 800, 300);

                SharedBlocks.addSetup($list, $container, "shared-block-titles");
                SharedBlocks.addShare($container, "add-html-content");
            },
            show: function show(element) {
                var $container = $("#html-widget-holder");
                var $list = $("#html-options-list");

                SharedBlocks.editSetup($list, $container, "shared-block-titles", element);

                if (Utils.isGuid(element)) {
                    $("#html-options-list").val("shared").change();
                    $("#shared-block-id").val(element);
                } else {
                    var $textarea = $("<textarea></textarea>", {
                        id: "add-html-content"
                    });

                    $container.html($textarea);

                    $('#add-html-content').text(element);
                    Utils.addEditor('#add-html-content', 800, 300);

                    $("#html-options-list").val("new").change();
                }
            },
            save: function save() {
                var state = $("#html-options-list").find(":selected").val();
                var id = $("#shared-block-id").val();

                if (state == "shared") {
                    return $("#shared-block-id").val();
                } else {
                    return tinymce.get('add-html-content').getContent();
                }
            }
        };

        initFunctions['css'] = {
            init: function init() {
                WidgetToggleGenerator.generate("#css-widget-options", { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-css-container", "#url-css-container");

                editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                    lineNumbers: true,
                    mode: 'css'
                });
            },
            show: function show(element) {
                editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                    lineNumbers: true,
                    mode: 'css'
                });

                WidgetToggleGenerator.generate("#css-widget-options", { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-css-container", "#url-css-container");

                var $cssWidgetOptions = $('#css-widget-options');
                var $selectedValue = $("#option-selected-id");

                try {
                    var model = JSON.parse(element);

                    if (model.IsRaw) {
                        $cssWidgetOptions.val("Switch to code");
                        $selectedValue.val("url-btn");
                        $cssWidgetOptions.click();

                        if (editor) {
                            editor.setValue(model.RawCode);
                        }
                    } else {
                        $cssWidgetOptions.val("Switch to url");
                        $selectedValue.val("raw-btn");
                        $cssWidgetOptions.click();

                        $("#css-url").val(model.Url);
                    }
                } catch (ex) {
                    $cssWidgetOptions.val("Switch to code");
                    $selectedValue.val("url-btn");
                    $cssWidgetOptions.click();

                    if (editor) {
                        editor.setValue(element);
                    }
                }
            },
            save: function save() {
                var $resourceUrl = $("#css-url");

                if ($("#option-selected-id").val() == "url-btn") {
                    var model = {
                        IsRaw: false,
                        Url: $resourceUrl.val()
                    };

                    return JSON.stringify(model);
                } else {
                    if (editor) {
                        var _model = {
                            IsRaw: true,
                            RawCode: editor.getValue()
                        };

                        return JSON.stringify(_model);
                    }
                }

                return '';
            }
        };

        initFunctions['javascript'] = {
            init: function init() {
                WidgetToggleGenerator.generate("#js-widget-options", { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-js-container", "#url-js-container");

                editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                    lineNumbers: true,
                    mode: 'javascript'
                });
            },
            show: function show(element) {
                editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                    lineNumbers: true,
                    mode: 'javascript'

                });

                WidgetToggleGenerator.generate("#js-widget-options", { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-js-container", "#url-js-container");

                var $jsWidgetOptions = $('#js-widget-options');
                var $selectedValue = $("#option-selected-id");

                try {
                    var model = JSON.parse(element);

                    if (model.IsRaw) {
                        $jsWidgetOptions.val("Switch to code");
                        $selectedValue.val("url-btn");
                        $jsWidgetOptions.click();

                        if (editor) {
                            editor.setValue(model.RawCode);
                        }
                    } else {
                        $jsWidgetOptions.val("Switch to url");
                        $selectedValue.val("raw-btn");
                        $jsWidgetOptions.click();

                        $("#javascript-url").val(model.Url);
                    }
                } catch (ex) {
                    $jsWidgetOptions.val("Switch to code");
                    $selectedValue.val("url-btn");
                    $jsWidgetOptions.click();

                    if (editor) {
                        editor.setValue(element);
                    }
                }
            },
            save: function save() {
                var $resourceUrl = $("#javascript-url");

                if ($("#option-selected-id").val() == "url-btn") {
                    var model = {
                        IsRaw: false,
                        Url: $resourceUrl.val()
                    };

                    return JSON.stringify(model);
                } else {
                    if (editor) {
                        var _model2 = {
                            IsRaw: true,
                            RawCode: editor.getValue()
                        };

                        return JSON.stringify(_model2);
                    }
                }
            }
        };

        initFunctions['embeddedscript'] = {
            init: function init() {
                editor = CodeMirror.fromTextArea(document.getElementById('embedded-script'), {
                    lineNumbers: true,
                    mode: 'javascript'
                });
            },
            show: function show(element) {
                editor = CodeMirror.fromTextArea(document.getElementById('embedded-script'), {
                    lineNumbers: true,
                    mode: 'javascript'
                });
                var model = JSON.parse(element);

                if (editor) {
                    editor.setValue(model.RawCode);
                }
            },
            save: function save() {
                if (editor) {
                    var model = {
                        RawCode: editor.getValue()
                    };
                    return JSON.stringify(model);
                }
                return "";
            }
        };

        initFunctions['image'] = function () {
            var fileHandler = void 0;

            function init() {
                // TODO: move to event once widgets communicate with mediator
                if (fileHandler && fileHandler.dispose) {
                    fileHandler.dispose();
                };

                fileHandler = FileHandler($('.file-handler-wrapper'), ['Upload', 'Select', 'Selected'], '', _mediator, _logger, false);
            }

            function show(element) {
                var parsedElement = JSON.parse(element);
                var id = parsedElement.id;
                init();

                if (parsedElement.width != '') {
                    $('#input-width').val(parsedElement.width);
                }

                if (parsedElement.height != '') {
                    $('#input-height').val(parsedElement.height);
                }
                $('#image').val(id);

                if (id != "") {
                    createImageView('image', id);
                }

                if (parsedElement.imagesFullInfo != '') {
                    $('#selectedImages').attr('data-selectedImages', parsedElement.imagesFullInfo);
                }

                setTimeout(function () {
                    _mediator.dispatch('populatedSelected', JSON.parse(JSON.parse(parsedElement.imagesFullInfo)));
                }, 500);
            }

            function save() {

                var id = $('#image').val();
                var imagesFullInfo = $('#selectedImages').attr('data-selectedImages');
                if (id) {
                    var result = JSON.stringify({
                        id: id,
                        imagesFullInfo: imagesFullInfo,
                        width: $('#input-width').val(),
                        height: $('#input-height').val()
                    });
                    return result;
                }

                return null;
            }

            // TODO: move to utils or another helper module
            $(document).on('click', '.news-listed-image-delete', function () {
                var $trigger = $(this);
                var imgId = $trigger.attr('data-id');
                var fieldId = $trigger.attr('data-field');

                if (fieldId && fieldId !== '') {
                    var currentImages = $('#' + fieldId).val();
                    if (currentImages) {
                        $('#' + fieldId).val(currentImages.replace(imgId, ''));
                    }
                }

                $trigger.parent().remove();
            });

            function createImageView(fieldId, imgLinkId) {
                var $selectedImageContainer = $('.file-handler-Selected');
                var $container = $('<div class="news-listed-images-container"></div>');
                var $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
                var $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

                $selectedImageContainer.html('');

                $container.append($deleteBtn).append($img)
                // .appendTo('.image-widget #' + fieldId + '-container');
                .appendTo($selectedImageContainer);
            }

            _mediator.on('filesUploaded', selectFiles, 'displayUploadedImage', 'ImageWidget');
            _mediator.on('filesSelected', selectFiles, 'displaySelectedImage', 'ImageWidget');

            function selectFiles(data) {

                $('.image-widget #image-container').html('');
                $('.image-widget #image').val(data.fileIds[0]);
                createImageView('image', data.fileIds[0]);
            }

            return {
                init: init,
                show: show,
                save: save
            };
        }();

        initFunctions['gallery'] = function () {
            var fileHandler = void 0;

            function init() {
                // TODO: move to event once widgets communicate with mediator
                if (fileHandler && fileHandler.dispose) {
                    fileHandler.dispose();
                }

                fileHandler = FileHandler($('#Dialog-Box .gallery-images'), ['Select'], '', _mediator, _logger, true);
                $('#gallery-source a#images').trigger('click');
            }

            function show(element) {
                var galleryConfig = JSON.parse(element);
                var fieldId = 'image';
                var $field = $('#' + fieldId);
                $field.val(galleryConfig.ids);
                if (galleryConfig.imagesFullInfo != '') {
                    $('#selectedImages').attr('data-selectedImages', galleryConfig.imagesFullInfo);
                }

                $('#input-width').val(galleryConfig.width);
                $('#input-height').val(galleryConfig.height);
                $('#gallery-source').data("source-type", galleryConfig.type);
                $('#gallery-show-type option[value=' + galleryConfig.showType + ']').attr('selected', 'selected');

                if (galleryConfig.type === 'images') {
                    var imagesLinksIds = galleryConfig.ids.split(';');

                    for (var i = 0; i < imagesLinksIds.length; i++) {
                        if (imagesLinksIds[i] != "") {
                            createImageView(fieldId, imagesLinksIds[i]);
                        }
                    }
                }

                // TODO: move to event once widgets communicate with mediator
                if (fileHandler && fileHandler.dispose) {
                    fileHandler.dispose();
                }

                fileHandler = FileHandler($('#Dialog-Box-Edit .gallery-images'), ['Select'], '', _mediator, _logger, true);
                $('#gallery-source a#images').trigger('click');

                // TODO: Redo with promise after file handler initialization.
                setTimeout(function () {
                    _mediator.dispatch('populatedSelected', JSON.parse(JSON.parse(galleryConfig.imagesFullInfo)));
                }, 1000);
            }

            function save() {
                var currentType = $('#gallery-source').data('source-type');
                var showType = $('#gallery-show-type option:selected').val();
                var ids = $('#image').val();
                console.log(ids);
                var imagesFullInfo = $('#selectedImages').attr('data-selectedImages');

                if (currentType == 'library') {
                    ids = $('#gallery-libs').val();
                }

                if (ids.indexOf(';') !== -1 && currentType == 'library') {
                    return null;
                }

                if (ids == '') {
                    return null;
                }

                return JSON.stringify({
                    ids: ids,
                    width: $('#input-width').val(),
                    height: $('#input-height').val(),
                    type: currentType,
                    showType: showType,
                    imagesFullInfo: imagesFullInfo
                });
            }

            $('body').on('click', '#btn-select-library', function (e) {
                $('#image').val($('#gallery-libs').val());

                Notifier.createAlert({
                    containerId: '#file-handler-notfier',
                    message: 'Library was selected!',
                    status: 'success'
                });
            });

            $('body').on('click', '#gallery-source>a', function (e) {
                var source = $(this).attr('id');
                $('#gallery-source').data('source-type', source);
                $('#' + source).hide();
                switch (source) {
                    case 'images':
                        //showChoice();
                        $('.gallery-library').hide();
                        $('.gallery-images').show();
                        $('#library').show();
                        break;
                    case 'library':
                        $('#images').show();
                        //files = [];
                        //uploadedFiles = [];
                        $('#files-container').html('');
                        $('#files-list').html('');
                        $('#choice-file').hide();
                        $('#upload-file').hide();
                        //cleanUp();

                        //$('.gallery-images').hide();
                        $('.gallery-images').hide();
                        $('.gallery-library').show();

                        $('#gallery-libs').html('');

                        var selected = $('#' + $('#upload-modal').attr('data-id')).val();

                        Data.getJson({ url: '/sitetriks/libraries/GetAllImageLibraries' }).then(function (res) {
                            if (res.success) {
                                for (var i = 0; i < res.libraries.length; i++) {
                                    var $option = $('<option></option>', {
                                        value: res.libraries[i].id,
                                        text: res.libraries[i].name
                                    });

                                    if (selected && selected === res.libraries[i].id) {
                                        $option.attr('selected', true);
                                    }

                                    $option.appendTo('#gallery-libs');
                                }
                            }
                        }, Data.defaultError);
                        break;
                    default:
                }
            });

            _mediator.on('filesUploaded', selectFiles, 'displayUploadedImage', 'GalleryWidget');
            _mediator.on('filesSelected', selectFiles, 'displaySelectedImage', 'GalleryWidget');

            function selectFiles(data) {
                var $images = $('.gallery-widget #image');

                var currentImages = $images.val();
                console.log(currentImages);
                var $mainContainer = $('.gallery-main-image-container');

                if (currentImages) {
                    if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
                        currentImages += ';';
                    }

                    $images.val(data.fileIds.join(';'));
                } else {
                    $images.val(data.fileIds.join(';'));
                }

                $mainContainer.html('');

                for (var i = 0; i < data.fileIds.length; i += 1) {
                    console.log(data.fileIds[i]);
                    createImageView('image', data.fileIds[i], $mainContainer);
                }
            }

            function createImageView(fieldId, imgLinkId, $mainContainer) {
                var $container = $('<div class="news-listed-images-container"></div>');
                var $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
                var $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

                $container.append($deleteBtn).append($img).appendTo($mainContainer);
            }

            return {
                init: init,
                show: show,
                save: save
            };
        }();

        initFunctions['layoutBuilder'] = {
            init: function init() {
                var l = [];
                ModuleBuilder.initializeLayout('#layout-widget-wrapper', [], '.resolution-widget', '#layout-widget-options', function () {
                    return true;
                });
            },
            show: function show(element) {
                var el = JSON.parse(element);
                ModuleBuilder.initializeLayout('#layout-widget-wrapper', el.layoutRows, '.resolutions-widget', '#layout-widget-options', function () {
                    return true;
                });
            },
            save: function save() {
                var layout = ModuleBuilder.getInstance('#layout-widget-wrapper', 'layout-control').map(function (r) {
                    return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass };
                });

                var model = {
                    layoutRows: layout
                };

                return JSON.stringify(model);
            }
        };

        function initNavigation(element) {
            Data.getJson({ url: '/sitetriks/Display/GetAllParentPages' }).then(function (data) {
                var pages = JSON.parse(data);
                var $order = $('#pages-order');
                var $multiselect = $('#multiselect-pages');
                var $allPages = $('#input-all-pages');

                for (var i = 0; i < pages.length; i++) {
                    $('<option>', {
                        value: pages[i].Id,
                        text: pages[i].Title
                    }).appendTo($multiselect);
                }

                Multiselect.Destroy($multiselect.attr('id'));
                Multiselect.Setup($multiselect.attr('id'), function (option, checked, select) {
                    var $option = $(option);
                    if (!checked) {
                        $order.children('li[data-identifier="' + opselected + '"]').first().remove();
                    } else {
                        $order.append(createSortablePage($option.text(), $option.val()));
                    }
                });

                function createSortablePage(text, id) {
                    var $li = $('<li></li>', {
                        'class': 'ui-state-default',
                        'data-identifier': id
                    });
                    $('<span></span>', {
                        class: 'ui-icon ui-icon-arrowthick-2-n-s'
                    }).appendTo($li);

                    $li.append(text);
                    return $li;
                }

                $order.sortable({ opacity: 0.5 });
                $order.disableSelection();

                $allPages.on('click', disableSelection);
                function disableSelection(ev) {
                    if (this.checked) {
                        $order.sortable('disable').parent().hide();
                        $multiselect.multiselect('disable').hide();
                    } else {
                        $order.sortable('enable').parent().show();
                        $multiselect.multiselect('enable').show();
                    }
                }

                if (element) {
                    var content = JSON.parse(element);
                    var selectedOptions = content.pageIds;
                    for (var _i2 = 0; _i2 < selectedOptions.length; _i2++) {
                        var $option = $multiselect.find('option[value="' + selectedOptions[_i2] + '"]').attr('selected', 'selected');
                        $order.append(createSortablePage($option.text(), selectedOptions[_i2]));
                    }

                    var depthOption = content.maxDepth;
                    $('#depth-level option[value="' + depthOption + '"]').attr('selected', 'selected');
                    $allPages[0].checked = !!content.allPages;
                    disableSelection.apply($allPages[0]);
                }
            });
        }

        initFunctions['navigation'] = {
            init: initNavigation,
            show: initNavigation,
            save: function save() {
                var ordered = [];
                $('#pages-order').children().each(function () {
                    ordered.push($(this).attr('data-identifier'));
                });

                var depthLevel = $('#depth-level option:selected').val();
                var allPages = $('#input-all-pages')[0].checked;

                return JSON.stringify({ pageIds: ordered, maxDepth: depthLevel, allPages: allPages });
            }
        };

        initFunctions['detailedNews'] = {
            init: function init() {
                appendNewsTitles('news-list');
            },
            show: function show(element) {
                appendNewsTitles('news-list');
            },
            save: function save() {
                return $('#news-list').attr('data-id') || null;
            }
        };

        initFunctions['subscription'] = {
            init: function init() {},
            show: function show(element) {},
            save: function save() {}
        };

        initFunctions['newsCarousel'] = {
            init: function init() {},
            show: function show(element) {
                var elements = element.split('/');
                $('#order-by-date').prop('checked', elements[0] === 'true');
                $('input[type="radio"][value="' + elements[1] + '"]').prop('checked', true);
                if ($.isNumeric(elements[2])) {
                    $('#latest-news-count').val(elements[2]);
                }
            },
            save: function save() {
                var template = $('input[type="radio"][name="template"]:checked').val() || 'all';
                var isAscending = $('#order-by-date').prop('checked');
                var element = '';

                element = isAscending + '/' + template;

                if (template === 'latest') {
                    // 3 news if it is not specified
                    element += '/' + ($('#latest-news-count').val() || 3);
                }

                return element;
            }
        };

        initFunctions['allNews'] = {
            init: function init() {},
            show: function show() {},
            save: function save() {}
        };

        initFunctions['video'] = function () {
            function onSourceChange(ev) {
                var source = this.value;
                var container = this.closest('.widget-container');
                var instructions = container.querySelector('#customVideoInstructions');
                var defaultVideo = container.querySelector('.default-video');
                instructions.style.display = source === 'youtubeCustomPlaylist' || source === 'youtubeMultiplePlaylists' ? 'block' : 'none';
                defaultVideo.style.display = source === 'youtubeMultiplePlaylists' ? 'block' : 'none';
            }

            return {
                init: function init() {
                    $('#video-source').on('change', onSourceChange);
                },
                show: function show(element) {
                    var elements = element.split('/');
                    $('#video-source').on('change', onSourceChange).val(elements[0]).trigger('change');
                    $('#default-video').val(elements[2]);

                    $('#video-name').val(elements[0] === 'youtube' ? 'https://www.youtube.com/watch?v=' + elements[1] : element[1]);
                },
                save: function save() {
                    var source = $('#video-source').val();
                    var name = $('#video-name').val();
                    if (!name) {
                        return { success: false, message: 'Video name is required!' };
                    }

                    var defaultVideo = $('#default-video').val();
                    switch (source) {
                        case 'youtube':
                            name = parseYouTubeUrl(name);
                            break;
                        case 'database':
                            break;
                        case 'youtubePlaylist':
                            break;
                        case 'youtubeCustomPlaylist':
                            name = parseYoutubeVideosList(name).join(';');
                            break;
                        case 'youtubeMultiplePlaylists':
                            break;
                    }

                    if (!name || name.indexOf('error') > -1) {
                        return { success: false, message: 'Invalid youtube url!' };
                    }

                    return { success: true, element: '' + source + '/' + name + '/' + defaultVideo };
                }
            };
        }();

        initFunctions['presentation'] = {
            init: function init() {},
            show: function show(element) {
                var config = JSON.parse(element);
                $('#presentation-type').val(config.type);
                $('#presentation-url').val(config.url);
            },
            save: function save() {
                var type = $('#presentation-type').val();
                var url = $('#presentation-url').val();
                if (!url || url.length < 3) {
                    return { success: false, message: 'Url is required and must be atleast 3 characters long!' };
                }

                return { success: true, element: JSON.stringify({ type: type, url: url }) };
            }
        };

        initFunctions['dynamic'] = {
            init: function init() {
                initDynamic();
            },
            show: function show(element) {
                var elements = element.split('/');

                var selectedClass = elements[0];
                var selectedType = elements[1];
                var selectedTemplate = elements[2];

                initDynamic(selectedClass, selectedType, selectedTemplate);
            },
            save: function save() {
                var klass = $('#dropdown-classes').val();
                if (!klass) {
                    return null;
                }

                var t = $('#dropdown-types').val() || '';
                var templ = $('#dropdown-templates').val() || '';

                return klass + '/' + t + '/' + templ;
            }
        };

        function initDynamic(selectedClass, selectedType, selectedTemplate) {
            var model = void 0;

            Data.getJson({ url: '/sitetriks/widgets/widgettemplates' }).then(function (res) {
                model = res.model;

                var $classes = $(document.createElement('select')).attr('id', 'dropdown-classes');

                $('<option></option>', {
                    text: '-- Select Class --',
                    value: ''
                }).appendTo($classes);

                for (var klass in model) {
                    $('<option></option>', {
                        text: klass,
                        value: klass,
                        selected: selectedClass === klass
                    }).appendTo($classes);
                }

                $classes.appendTo('#dynamic-container');
                $classes.trigger('change');
                selectedClass = '';
            }, Data.defaultError);

            $('#dynamic-container').on('change', '#dropdown-classes', function (ev) {
                $('#dropdown-types').remove();
                $('#dropdown-templates').remove();
                var klass = $('#dropdown-classes').val();

                if (!klass || klass === '') {
                    return;
                }

                var $types = $(document.createElement('select')).attr('id', 'dropdown-types');

                $('<option></option>', {
                    text: '-- Select Type --',
                    value: ''
                }).appendTo($types);

                for (var type in model[klass]) {
                    $('<option></option>', {
                        text: type,
                        value: type,
                        selected: selectedType === type
                    }).appendTo($types);
                }

                $types.appendTo('#dynamic-container');
                $types.trigger('change');
                selectedType = '';
            });

            $('#dynamic-container').on('change', '#dropdown-types', function (ev) {
                $('#dropdown-templates').remove();
                var klass = $('#dropdown-classes').val();
                var type = $('#dropdown-types').val();

                if (!type || type === '' || !klass || klass === '') {
                    return;
                }

                var $templates = $(document.createElement('select')).attr('id', 'dropdown-templates');

                $(document.createElement('option')).val('').text('-- Select Template --').appendTo($templates);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = model[klass][type][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var template = _step.value;

                        $('<option></option>', {
                            text: template,
                            value: template,
                            selected: selectedTemplate === template
                        }).appendTo($templates);
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

                $templates.appendTo('#dynamic-container');
                selectedTemplate = '';
            });
        }

        initFunctions['market'] = {
            init: function init() {},
            show: function show(element) {},
            save: function save() {}
        };

        initFunctions['userOrders'] = {
            init: function init() {},
            show: function show(element) {},
            save: function save() {}
        };

        return initFunctions;
    }

    function isValidUrl(validateUrl, url) {
        var pattern = new RegExp(/^[\w\-\.]+$/i);
        if (!pattern.test(url)) {
            return false;
        }

        $.ajax({
            method: 'GET',
            url: validateUrl,
            contentType: 'application/json',
            success: function success(res) {
                if (res.success) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }

    // get cached instance
    function getInstance(selector, type) {
        if (instancesCache[selector]) {
            return instancesCache[selector][type];
        }

        return undefined;
    }

    function setInstance(selector, type, data) {

        if (!instancesCache[selector]) {
            instancesCache[selector] = {};
        }

        instancesCache[selector][type] = data;

        if (type !== 'widgets') {
            $(selector).data(type, data);
        }
    }

    return {
        init: init,
        createScroll: createScroll,
        createWidgets: createWidgets,
        initializeLayout: initializeLayout,
        renderLayout: renderLayout,
        getInstance: getInstance,
        setInstance: setInstance,
        SCROLL: 'scroll-bar',
        WIDGETS: 'widgets',
        LAYOUT: 'layout-control'
    };
}();