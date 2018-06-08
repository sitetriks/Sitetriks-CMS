

var ModuleBuilder = (function () {
    let mCache = {};

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
        mCache[wrapperId] = scroll;

        return scroll;
    }

    function createWidgets(addWidgetContainerId, customWidgets) {
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

        let widgets = widgetsModule($(addWidgetContainerId), initFunctions);
        mCache[addWidgetContainerId] = widgets;

        return widgets;
    }

    function initializeLayout(wrapperSelector, layout, resolutionsSelector, optionsSelector, resolutionValidation) {
        let $wrapper = $(wrapperSelector);

        initLayout($wrapper, layout, $(resolutionsSelector), $(optionsSelector), resolutionValidation);

        mCache[wrapperSelector] = layout;
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
                catch{
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
                catch{
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

        initFunctions['image'] = {
            init: function () {
                loadUploadTemplate(false, 'main-image', 'image');
            },
            show: function (element) {
                let parsedElement = JSON.parse(element)
                let id = parsedElement.id;  
                loadUploadTemplate(false, 'main-image', 'image');

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
            },
            save: function () {
                let id = $('#image').val();
                if (id) {
                    return JSON.stringify({
                        id: id,
                        width: $('#input-width').val(),
                        height: $('#input-height').val()
                    });
                }

                return null;
            }
        }

        initFunctions['gallery'] = {
            init: function () {
                loadUploadTemplate(true, 'images', 'image').then(function (res) {
                    $('#gallery-source a#images').trigger('click');


                    $('#btn-select-library').on('click', function (e) {
                        $('#image').val($('#gallery-libs').val());
                        Notifier.createAlert({
                            containerId: '#file-handler-notfier',
                            message: 'Library was selected!',
                            status: 'success'
                        });
                    })
                });
            },
            show: function (element) {
                let galleryConfig = JSON.parse(element);
                let fieldId = 'image';
                let $field = $('#' + fieldId);
                $field.val(galleryConfig.ids);

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

                this.init();
            },
            save: function () {
                let currentType = $('#gallery-source').data('source-type');
                let showType = $('#gallery-show-type option:selected').val();
                let ids = $('#image').val();

                if (currentType == 'images' && ids.indexOf(';') !== 0) {
                    ids = ids.substring(ids.indexOf(';'), ids.length);
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

                return JSON.stringify({
                    ids: ids,
                    width: $('#input-width').val(),
                    height: $('#input-height').val(),
                    type: currentType,
                    showType: showType
                });
            }
        }

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

                let layout = ModuleBuilder.getInstance('#layout-widget-wrapper').map(function (r) { return { columns: r.columns, tag: (r.tag || 'div'), cssClass: r.cssClass } });

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
                    $('#news-type').val(elements[3]);
                    $('#latest-news-count').val(elements[2]);
                } else {
                    $('#news-type').val(elements[2]);
                }
            },
            save: function () {
                let template = $('input[type="radio"][name="template"]:checked').val() || 'all';
                let isAscending = $('#order-by-date').prop('checked');
                let element = '';

                element = isAscending + '/' + template;
                let openType = $('#news-type').val();

                if (template === 'latest') {
                    // 3 news if it is not specified
                    element += '/' + ($('#latest-news-count').val() || 3);
                }

                element += '/' + openType;

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
                if (elements[0] === 'youtube') {
                    $('#video-name').val('https://www.youtube.com/watch?v=' + elements[1]);
                } else {
                    $('#video-name').val(elements[1]);
                }
            },
            save: function () {
                let source = $('#video-source').val();
                let name = '';
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
                        break;
                }

                return '' + source + '/' + name;
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
    function getInstance(id) {
        return mCache[id];
    }

    return {
        createScroll,
        createWidgets,
        getInstance,
        initializeLayout
    }
}())