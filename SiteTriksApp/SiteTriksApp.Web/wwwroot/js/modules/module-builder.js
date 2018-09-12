
var ModuleBuilder = (function () {
    let instancesCache = {};
    let _mediator;
    let _logger;

    function init(mediator, logger) {
        _mediator = mediator;
        _logger = logger;
    }

    /**
     * Create scroll control.
     * @param {any} wrapperId
     * @param {any} scrollViewClass
     * @param {any} innerContentClass
     * @param {{styles: Map<string, string>}} config
     */
    function createScroll(wrapperId, scrollViewClass, innerContentClass, config) {
        let $element = $(wrapperId);
        let scroll = scrollControl($element, scrollViewClass, innerContentClass, config);

        $element.data('scroll-bar', scroll);
        instancesCache[wrapperId] = { 'scroll-bar': scroll };

        return scroll;
    }

    function createWidgets(addWidgetContainerId, customWidgets, pageContent) {
        let initFunctions = getSiteTriksWidgets();

        if (!customWidgets) {
            customWidgets = {};
        }

        for (var key in customWidgets) {
            if (initFunctions[key]) {
                console.warn(`Widget "${key}" already exists and will not be duplicated!`);
            } else {
                initFunctions[key] = customWidgets[key];
            }
        }

        let widgets = widgetsModule($(addWidgetContainerId), initFunctions, pageContent);
        instancesCache[addWidgetContainerId] = { 'widgets': widgets };

        return widgets;
    }

    function initializeLayout(wrapperSelector, layout, resolutionsSelector, optionsSelector, resolutionValidation) {
        let $wrapper = $(wrapperSelector);

        initLayout($wrapper, layout, $(resolutionsSelector), $(optionsSelector), resolutionValidation);

        instancesCache[wrapperSelector] = { 'layout-control': layout };
        $wrapper.data('layout-control', layout);

        return layout;
    }

    function getSiteTriksWidgets() {

        var editor;

        let initFunctions = {};

        function newsTitlesInputKeyUp(ev, selectId) {
            var val = $(ev.target).val();

            if (val.length < 3) {
                return;
            }

            Data.getJson({ url: '/sitetriks/news/getallnewstitles?count=10&text=' + val }).then(function (response) {
                $("#" + selectId).autocomplete({
                    source: response.suggestions,
                    select: function (event, ui) {
                        $("#" + selectId).val(ui.item.label);
                        $("#" + selectId).attr("data-id", ui.item.id);

                        return false;
                    }
                }).data("ui-autocomplete")._renderItem = function (ul, item) {
                    return $("<li>")
                        .append("<a data-id=" + item.id + ">" + item.label + "</a>")
                        .appendTo(ul);
                };
            })
        }

        function appendNewsTitles(selectId) {
            $('#' + selectId).unbind('keyup');
            $("#" + selectId).keyup(function (ev) {
                newsTitlesInputKeyUp(ev, selectId)
            });
        }

        initFunctions['html'] = {
            init: function () {
                let $container = $("#html-widget-holder");
                let $list = $("#html-options-list");

                let $textarea = $("<textarea></textarea>", {
                    id: "add-html-content"
                });

                $container.html($textarea);

                Utils.addEditor('#add-html-content', 800, 300);

                SharedBlocks.addSetup($list, $container, "shared-block-titles");
                SharedBlocks.addShare($container, "add-html-content");
            },
            show: function (element) {
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
            save: function () {
                let state = $("#html-options-list").find(":selected").val();
                var id = $("#shared-block-id").val();

                if (state == "shared") {
                    return $("#shared-block-id").val();
                }
                else {
                    return tinymce.get('add-html-content').getContent();
                }
            }
        }

        initFunctions['css'] = {
            init: function () {
                WidgetToggleGenerator.generate("#css-widget-options",
                    { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-css-container", "#url-css-container");

                editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                    lineNumbers: true,
                    mode: 'css'
                });
            },
            show: function (element) {
                editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                    lineNumbers: true,
                    mode: 'css'
                });

                WidgetToggleGenerator.generate("#css-widget-options",
                    { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-css-container", "#url-css-container");

                let $cssWidgetOptions = $('#css-widget-options');
                let $selectedValue = $("#option-selected-id");

                try {
                    let model = JSON.parse(element);

                    if (model.IsRaw) {
                        $cssWidgetOptions.val("Switch to code");
                        $selectedValue.val("url-btn");
                        $cssWidgetOptions.click();

                        if (editor) {
                            editor.setValue(model.RawCode);
                        }
                    }
                    else {
                        $cssWidgetOptions.val("Switch to url");
                        $selectedValue.val("raw-btn");
                        $cssWidgetOptions.click();

                        $("#css-url").val(model.Url);
                    }
                }
                catch (ex) {
                    $cssWidgetOptions.val("Switch to code");
                    $selectedValue.val("url-btn");
                    $cssWidgetOptions.click();

                    if (editor) {
                        editor.setValue(element);
                    }
                }
            },
            save: function () {
                let $resourceUrl = $("#css-url");

                if ($("#option-selected-id").val() == "url-btn") {
                    let model = {
                        IsRaw: false,
                        Url: $resourceUrl.val()
                    };

                    return JSON.stringify(model);
                }
                else {
                    if (editor) {
                        let model = {
                            IsRaw: true,
                            RawCode: editor.getValue()
                        };

                        return JSON.stringify(model);
                    }
                }

                return '';
            }
        }

        initFunctions['javascript'] = {
            init: function () {
                WidgetToggleGenerator.generate("#js-widget-options",
                    { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-js-container", "#url-js-container");

                editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                    lineNumbers: true,
                    mode: 'javascript'
                });
            },
            show: function (element) {
                editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                    lineNumbers: true,
                    mode: 'javascript'

                });

                WidgetToggleGenerator.generate("#js-widget-options",
                    { firstId: "raw-btn", firstLabel: "Switch to code", secondId: "url-btn", secondLabel: "Switch to url" }, "#raw-js-container", "#url-js-container");

                let $jsWidgetOptions = $('#js-widget-options');
                let $selectedValue = $("#option-selected-id");

                try {
                    let model = JSON.parse(element);

                    if (model.IsRaw) {
                        $jsWidgetOptions.val("Switch to code");
                        $selectedValue.val("url-btn");
                        $jsWidgetOptions.click();

                        if (editor) {
                            editor.setValue(model.RawCode);
                        }
                    }
                    else {
                        $jsWidgetOptions.val("Switch to url");
                        $selectedValue.val("raw-btn");
                        $jsWidgetOptions.click();

                        $("#javascript-url").val(model.Url);
                    }
                }
                catch (ex) {
                    $jsWidgetOptions.val("Switch to code");
                    $selectedValue.val("url-btn");
                    $jsWidgetOptions.click();

                    if (editor) {
                        editor.setValue(element);
                    }
                }

            },
            save: function () {
                let $resourceUrl = $("#javascript-url");

                if ($("#option-selected-id").val() == "url-btn") {
                    let model = {
                        IsRaw: false,
                        Url: $resourceUrl.val()
                    };

                    return JSON.stringify(model);
                }
                else {
                    if (editor) {
                        let model = {
                            IsRaw: true,
                            RawCode: editor.getValue()
                        };

                        return JSON.stringify(model);
                    }
                }
            }
        }

        initFunctions['image'] = (function () {
            let fileHandler;

            function init() {
                // TODO: move to event once widgets communicate with mediator
                if (fileHandler && fileHandler.dispose) {
                    fileHandler.dispose();
                };

                fileHandler = FileHandler($('.file-handler-wrapper'), ['Upload', 'Select', 'Selected'], '', _mediator, _logger, false);

            }

            function show(element) {
                let parsedElement = JSON.parse(element);
                let id = parsedElement.id;
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
                }, 1000)
            }

            function save() {

                let id = $('#image').val();
                let imagesFullInfo = $('#selectedImages').attr('data-selectedImages');
                if (id) {
                    let result = JSON.stringify({
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
                let $trigger = $(this);
                let imgId = $trigger.attr('data-id');
                let fieldId = $trigger.attr('data-field');

                if (fieldId && fieldId !== '') {
                    let currentImages = $('#' + fieldId).val();
                    if (currentImages) {
                        $('#' + fieldId).val(currentImages.replace(imgId, ''));
                    }
                }

                $trigger.parent().remove();
            });

            function createImageView(fieldId, imgLinkId) {
                let $selectedImageContainer = $('.file-handler-Selected');
                let $container = $('<div class="news-listed-images-container"></div>');
                let $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
                let $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

                $selectedImageContainer.html('');

                $container.append($deleteBtn)
                    .append($img)
                    // .appendTo('.image-widget #' + fieldId + '-container');
                    .appendTo($selectedImageContainer);
            }

            _mediator.on('filesUploaded', selectFiles, 'displayUploadedImage', 'ImageWidget');
            _mediator.on('filesSelected', selectFiles, 'displaySelectedImage', 'ImageWidget')

            function selectFiles(data) {

                $('.image-widget #image-container').html('');
                $('.image-widget #image').val(data.fileIds[0]);
                createImageView('image', data.fileIds[0]);
            }

            return {
                init,
                show,
                save
            }
        })();

        initFunctions['gallery'] = (function () {
            let fileHandler;


            function init() {
                // TODO: move to event once widgets communicate with mediator
                if (fileHandler && fileHandler.dispose) {
                    fileHandler.dispose();
                }

                fileHandler = FileHandler($('#Dialog-Box .gallery-images'), ['Select'], '', _mediator, _logger, true);
                $('#gallery-source a#images').trigger('click');
            }

            function show(element) {
                let galleryConfig = JSON.parse(element);
                let fieldId = 'image';
                let $field = $('#' + fieldId);
                $field.val(galleryConfig.ids);

                if (galleryConfig.imagesFullInfo != '') {
                    $('#selectedImages').attr('data-selectedImages', galleryConfig.imagesFullInfo);
                }

                $('#input-width').val(galleryConfig.width);
                $('#input-height').val(galleryConfig.height);
                $('#gallery-source').data("source-type", galleryConfig.type)
                $('#gallery-show-type option[value=' + galleryConfig.showType + ']').attr('selected', 'selected');

                if (galleryConfig.type === 'images') {
                    let imagesLinksIds = galleryConfig.ids.split(';');

                    for (let i = 0; i < imagesLinksIds.length; i++) {
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
                }, 1000)
            }

            function save() {
                let currentType = $('#gallery-source').data('source-type');
                let showType = $('#gallery-show-type option:selected').val();
                let ids = $('#image').val();
                let imagesFullInfo = $('#selectedImages').attr('data-selectedImages');

                if (currentType == 'images' && ids.indexOf(';') !== 0) {
                    //ids = ids.substring(ids.indexOf(';'), ids.length); // what is the purpose of this line?
                }

                if (ids.indexOf(';') == -1 && currentType == 'images') {
                    $('#image').val('');
                    return null;
                }

                if (ids.indexOf(';') !== -1 && currentType == 'library') {
                    return null;
                }

                if (ids == '') {
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
                let source = $(this).attr('id')
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

                        let selected = $('#' + $('#upload-modal').attr('data-id')).val();

                        Data.getJson({ url: '/sitetriks/libraries/GetAllImageLibraries' }).then(function (res) {
                            if (res.success) {
                                for (let i = 0; i < res.libraries.length; i++) {
                                    let $option = $('<option></option>', {
                                        value: res.libraries[i].id,
                                        text: res.libraries[i].name
                                    });

                                    if ((selected && selected === res.libraries[i].id)) {
                                        $option.attr('selected', true);
                                    }

                                    $option.appendTo('#gallery-libs')
                                }
                            }
                        }, Data.defaultError);
                        break;
                    default:
                }
            });

            _mediator.on('filesUploaded', selectFiles, 'displayUploadedImage', 'GalleryWidget');
            _mediator.on('filesSelected', selectFiles, 'displaySelectedImage', 'GalleryWidget')

            function selectFiles(data) {
                let $images = $('.gallery-widget #image');
                let currentImages = $images.val();
                let $mainContainer = $('.gallery-main-image-container');
                if (currentImages) {
                    if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
                        currentImages += ';';
                    }

                    $images.val(currentImages + data.fileIds.join(';'));
                } else {
                    $images.val(data.fileIds.join(';'));
                }

                $mainContainer.html('');

                for (let i = 0; i < data.fileIds.length; i += 1) {
                    createImageView('image', data.fileIds[i], $mainContainer);
                }
            }

            function createImageView(fieldId, imgLinkId, $mainContainer) {
                let $container = $('<div class="news-listed-images-container"></div>');
                let $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
                let $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

                $container.append($deleteBtn)
                    .append($img)
                    .appendTo($mainContainer);
            }

            return {
                init,
                show,
                save
            }
        })();

        initFunctions['layoutBuilder'] = {
            init: function () {
                let l = [];
                ModuleBuilder.initializeLayout('#layout-widget-wrapper', [], '.resolution-widget', '#layout-widget-options', function () { return true });
            },
            show: function (element) {
                let el = JSON.parse(element);
                ModuleBuilder.initializeLayout('#layout-widget-wrapper', el.layoutRows, '.resolutions-widget', '#layout-widget-options', function () { return true });
            },
            save: function () {
                let css = '';

                let pageUrl = url;

                let layout = ModuleBuilder.getInstance('#layout-widget-wrapper', 'layout-control').map(function (r) { return { columns: r.columns, tag: (r.tag || 'div'), cssClass: r.cssClass } });

                let model = {
                    PageUrl: pageUrl,
                    css: css,
                    layoutRows: layout
                };

                return JSON.stringify(model);
            }
        }

        initFunctions['navigation'] = {
            init: function () {
                Data.getJson({ url: '/sitetriks/Display/GetAllParentPages' }).then(function (data) {
                    var pages = JSON.parse(data);

                    for (var i = 0; i < pages.length; i++) {
                        var option = $("<option>");
                        option.attr("value", pages[i].Id);
                        option.text(pages[i].Title);

                        $("#multiselect-pages").append(option);
                    }

                    Multiselect.Setup("multiselect-pages", function (option, checked, select) {
                        var opselected = $(option).val();

                        if (!checked) {
                            var el = $("#pages-order").children("li[data-identifier='" + opselected + "']").first();
                            el.remove();
                        }
                        else {
                            let $li = $('<li></li>', {
                                class: 'ui-state-default',
                                'data-identifier': opselected
                            });
                            let $span = $('<span></span>', {
                                class: 'ui-icon ui-icon-arrowthick-2-n-s'
                            });

                            $li.append($span)
                                .append(pages.find(p => p.Id == opselected).Title)
                                .appendTo('#pages-order');
                        }
                    });

                    $("#pages-order").sortable({ opacity: 0.5 });
                    $("#pages-order").disableSelection();
                })
            },
            show: function (element) {
                Data.getJson({ url: '/sitetriks/Display/GetAllParentPages' }).then(function (data) {
                    var pages = JSON.parse(data);

                    for (var i = 0; i < pages.length; i++) {
                        var option = $("<option>");
                        option.attr("value", pages[i].Id);
                        option.text(pages[i].Title);

                        $("#multiselect-pages").append(option);
                    }

                    var selectedOptions = JSON.parse(element).pageIds;

                    for (var i = 0; i < selectedOptions.length; i++) {
                        var li = $("<li>");
                        li.addClass("ui-state-default");
                        var span = $("<span>");
                        span.addClass("ui-icon ui-icon-arrowthick-2-n-s");
                        li.append(span);
                        li.attr("data-identifier", selectedOptions[i]);
                        li.append(pages.find(function (p) {
                            return p.Id == selectedOptions[i];
                        }).Title);

                        $("#multiselect-pages option[value='" + selectedOptions[i] + "']").attr('selected', 'selected');
                        $("#pages-order").append(li);
                    }

                    Multiselect.Setup("multiselect-pages", function (option, checked, select) {
                        var opselected = $(option).val();

                        if (!checked) {
                            var el = $("#pages-order").children("li[data-identifier='" + opselected + "']").first();
                            el.remove();
                        } else {
                            var li = $("<li>");
                            li.addClass("ui-state-default");
                            var span = $("<span>");
                            span.addClass("ui-icon ui-icon-arrowthick-2-n-s");
                            li.append(span);
                            li.attr("data-identifier", opselected);
                            li.append(pages.find(function (p) {
                                return p.Id == opselected;
                            }).Title);

                            $("#pages-order").append(li);
                        }
                    });

                    var depthOption = JSON.parse(element).maxDepth;

                    $("#depth-level option[value='" + depthOption + "']").attr('selected', 'selected');

                    $("#pages-order").sortable({ opacity: 0.5 });
                    $("#pages-order").disableSelection();
                });
            },
            save: function () {
                var ordered = [];

                $("#pages-order").children().each(function () {
                    ordered.push($(this).attr("data-identifier"));
                });

                var depthLevel = $('#depth-level option:selected').val();

                return JSON.stringify({ pageIds: ordered, maxDepth: depthLevel });
            }
        }

        initFunctions['detailedNews'] = {
            init: function () {
                appendNewsTitles('news-list');
            },
            show: function (element) {
                appendNewsTitles('news-list');
            },
            save: function () {
                return $('#news-list').attr('data-id') || null;
            }
        }

        initFunctions['subscription'] = {
            init: function () {

            },
            show: function (element) { },
            save: function () { }
        }

        initFunctions['newsCarousel'] = {
            init: function () { },
            show: function (element) {
                let elements = element.split('/');
                $('#order-by-date').prop('checked', elements[0] === 'true');
                $('input[type="radio"][value="' + elements[1] + '"]').prop('checked', true);
                if ($.isNumeric(elements[2])) {
                    $('#latest-news-count').val(elements[2]);
                }
            },
            save: function () {
                let template = $('input[type="radio"][name="template"]:checked').val() || 'all';
                let isAscending = $('#order-by-date').prop('checked');
                let element = '';

                element = isAscending + '/' + template;

                if (template === 'latest') {
                    // 3 news if it is not specified
                    element += '/' + ($('#latest-news-count').val() || 3);
                }

                return element;
            }
        }

        initFunctions['allNews'] = {
            init: function () { },
            show: function () { },
            save: function () { }
        }

        initFunctions['video'] = {
            init: function () { },
            show: function (element) {
                let elements = element.split('/');
                $('#video-source').val(elements[0]);
                $('#default-video').val(elements[2]);

                if (elements[0] === 'youtube') {
                    $('#video-name').val('https://www.youtube.com/watch?v=' + elements[1]);
                } else {
                    $('#video-name').val(elements[1]);
                }
            },
            save: function () {
                let source = $('#video-source').val();
                let name = '';
                let defaultVideo = '';
                switch (source) {
                    case 'youtube':
                        name = parseYouTubeUrl($('#video-name').val());
                        break;
                    case 'database':
                        name = $('#video-name').val();
                        break;
                    case 'youtubePlaylist':
                        name = $('#video-name').val();
                        break;
                    case 'youtubeCustomPlaylist':
                        name = parseYoutubeVideosList($('#video-name').val()).join(';');
                        break;
                    case 'youtubeMultiplePlaylists':
                        name = $('#video-name').val();
                        defaultVideo = $('#default-video').val();
                        break;
                }
                return '' + source + '/' + name + '/' + defaultVideo;
            }
        }

        initFunctions['presentation'] = {
            init: function () { },
            show: function (element) {
                let elements = element.split('/');
                $('#presentation-type').val(elements[0]);
                $('#presentation-url').val(elements[1]);
            },
            save: function () {
                let type = $('#presentation-type').val();
                let url = $('#presentation-url').val();

                if (url == '') {
                    return null;
                }

                if (url.length >= 3 && isValidUrl('@Url.Action("ValidateUrl", "Pages")?url=' + url, url)) {
                    return '' + type + '/' + url;
                }

                return null;
            }
        }

        initFunctions['dynamic'] = {
            init: function () {
                initDynamic();
            },
            show: function (element) {
                let elements = element.split('/');

                let selectedClass = elements[0];
                let selectedType = elements[1];
                let selectedTemplate = elements[2];

                initDynamic(selectedClass, selectedType, selectedTemplate);
            },
            save: function () {
                let klass = $('#dropdown-classes').val();
                if (!klass) {
                    return null;
                }

                let t = $('#dropdown-types').val() || '';
                let templ = $('#dropdown-templates').val() || '';

                return `${klass}/${t}/${templ}`;
            }
        }

        function initDynamic(selectedClass, selectedType, selectedTemplate) {
            let model;

            Data.getJson({ url: '/sitetriks/widgets/widgettemplates' }).then(function (res) {
                model = res.model;

                let $classes = $(document.createElement('select')).attr('id', 'dropdown-classes');

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

                $classes.appendTo('#dynamic-container')
                $classes.trigger('change');
                selectedClass = '';
            }, Data.defaultError);

            $('#dynamic-container').on('change', '#dropdown-classes', function (ev) {
                $('#dropdown-types').remove();
                $('#dropdown-templates').remove();
                let klass = $('#dropdown-classes').val();

                if (!klass || klass === '') {
                    return;
                }

                let $types = $(document.createElement('select')).attr('id', 'dropdown-types');

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
                let klass = $('#dropdown-classes').val();
                let type = $('#dropdown-types').val();

                if (!type || type === '' || !klass || klass === '') {
                    return;
                }

                let $templates = $(document.createElement('select')).attr('id', 'dropdown-templates');

                $(document.createElement('option'))
                    .val('')
                    .text('-- Select Template --')
                    .appendTo($templates);

                for (var template of model[klass][type]) {
                    $('<option></option>', {
                        text: template,
                        value: template,
                        selected: selectedTemplate === template
                    }).appendTo($templates);
                }

                $templates.appendTo('#dynamic-container');
                selectedTemplate = '';
            });
        }

        initFunctions['market'] = {
            init: function () { },
            show: function (element) { },
            save: function () { }
        }

        initFunctions['userOrders'] = {
            init: function () { },
            show: function (element) { },
            save: function () { }
        }

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
        init,
        createScroll,
        createWidgets,
        initializeLayout,
        getInstance,
        setInstance,
        SCROLL: 'scroll-bar',
        WIDGETS: 'widgets',
        LAYOUT: 'layout-control'
    }
}())