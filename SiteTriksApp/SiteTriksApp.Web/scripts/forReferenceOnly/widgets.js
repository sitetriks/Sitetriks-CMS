/* ----------------------------------------------------------------
	Widgets
-----------------------------------------------------------------*/

function LoadWidget(type) {
    var $widgetContainer = $('#add-widget-container');
    $widgetContainer.html('<p>Loading...</p>');

    Data.getJson({ url: '/sitetriks/widgets/addwidget?name=' + type }).then(function (res) {
        $widgetContainer.html(res);
        if (type === 'navigation') {
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
        }
        if (type === 'html') {
            let $container = $("#html-widget-holder");
            let $list = $("#html-options-list");

            let $textarea = $("<textarea></textarea>", {
                id: "add-html-content"
            });

            $container.html($textarea);

            addEditor('#add-html-content', 800, 300);

            SharedBlocks.addSetup($list, $container, "shared-block-titles");

            SharedBlocks.addShare($container, "add-html-content");
        }
        if (type === 'detailedNews') {
            appendNewsTitles('news-list');
        }
        if (type === 'css') {
            editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                lineNumbers: true,
                mode: 'css'
            });
        }
        if (type === 'javascript') {
            editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                lineNumbers: true,
                mode: 'javascript'
            });
        }

        if (type === 'image') {
            loadUploadTemplate(false, 'main-image', 'image');
        }

        if (type === 'gallery') {
            loadUploadTemplate(true, 'images', 'image');
        }

        if (type === 'contactUs') {
            loadUploadTemplate(false, '', '');
        }

        if (type === 'contactUsAlternative') {
            loadUploadTemplate(false, '', '');
        }

        $('.add-widget-dialog .btn-add-widget').prop('disabled', false);
        $('.add-widget-dialog .btn-add-widget').attr('data-type', type);
    })
}

function makeDrop(target) {
    target.droppable({
        accept: '.drag',
        greedy: true,
        tolerance: 'touch',
        drop: function (event, ui) {

            $('.drop').removeClass('drag-hover');

            if (!ui.draggable.hasClass("preview-placeholder")) {
                ui.helper.detach();

                var placeholder = $(event.target).attr('data-placeholder');
                OpenDialog(placeholder);

                var type = ui.draggable.first().data("type");
                LoadWidget(type);
                return;
            }
            else {
                //ui.helper.detach();
                //$(event.target).append(ui.draggable);
            }
        },
        over: function (event, ui) {
            $('.drop').removeClass('drag-hover');
            $(event.target).addClass('drag-hover');
        }
    });
}

function createAlert(action, data, status, dialogId, modalId, isLocal) {
    Notifier.createAlert({
        containerId: '#alerts',
        title: 'Successfully ',
        message: action + " " + data.type + " widget",
        status: status
    });

    if (dialogId) {
        $(dialogId).dialog('close');
    }
    if (modalId) {
        $(modalId).modal("hide");
    }

    if (!isLocal) {
        $(document).trigger('updatePreview');
    } else {
        $(document).trigger('initCarousel');
    }

    $('#add-widget-container').html('');
    Loader.hide();
}

function createErrorAlert(msg) {
    Notifier.createAlert({
        containerId: '#add-modal-alerts',
        message: msg,
        status: 'danger'
    })
}

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
                .append("<div data-id=" + item.id + ">" + item.label + "</div>")
                .appendTo(ul);
        };;
    })
}

function appendNewsTitles(selectId) {
    $('#' + selectId).unbind('keyup');
    $("#" + selectId).keyup(function (ev) {
        newsTitlesInputKeyUp(ev, selectId)
    });
}

var listIsLoaded = false;

function listLibrariesInGallery() {
    Data.getJson({ url: '/sitetriks/Libraries/GetAllImageLibraries' }).then(function (data) {
        let librariesNames = [];

        let $container = $('<select>');
        $container.addClass('select-dropdown');

        for (i = 0; i < data.libraries.length; i++) {
            librariesNames.push(Object.values(data.libraries[i])[1]);
        }

        for (i = 0; i < librariesNames.length; i++) {
            $container.append("<option value=\"" + librariesNames[i] + "\">" + librariesNames[i] + "</option>");
        }

        if (listIsLoaded == false) {
            $('#libraries-list').append($container);
            listIsLoaded = true;
        }
    });
}

// Detect a change in the dropdown menu



$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}

function getElementForType(widgetType) {
    var element = '';
    switch (widgetType) {

        case "navigation":
            var ordered = [];

            $("#pages-order").children().each(function () {
                ordered.push($(this).attr("data-identifier"));
            });

            //if (ordered.length == 0) {
            //var pages = $('#multiselect-pages option');
            //$(pages).each(function (index, brand) {
            //    ordered.push($(this).val());
            //});
            //}

            var depthLevel = $('#depth-level option:selected').val();

            element = JSON.stringify({ pageIds: ordered, maxDepth: depthLevel });
            break;
        case "html":
            let state = $("#html-options-list").find(":selected").val();

            if (state == "shared") {
                element = $("#shared-block-id").val();
            }
            else {
                element = tinymce.get('add-html-content').getContent();
            }
            break;

        case "detailedNews":
            element = $('#news-list').attr('data-id');

            if (!element) {
                element = null;
            }

            break;

        case "loginRegisterUser":
            var result;
            $('.loginRegister').each(function (index, el) {
                if ($(el).is(':checked')) {
                    result = el.id;
                };
            });

            element = result;
            break;

        case "newsCarousel":
            var template = $('input[type="radio"][name="template"]:checked').val() || 'all';
            var isAscending = $('#order-by-date').prop('checked');

            element = isAscending + '/' + template;
            var openType = $('#news-type').val();

            if (template === 'latest') {
                // 3 news if it is not specified
                element += '/' + ($('#latest-news-count').val() || 3);
            }

            element += '/' + openType;
            break;

        case "video":
            var source = $('#video-source').val();
            switch (source) {
                case 'youtube':
                    var name = parseYouTubeUrl($('#video-name').val());
                    break;
                case 'database':
                    var name = $('#video-name').val();
                    break;
                case 'youtubePlaylist':
                    var name = $('#video-name').val();
                    break;
                case 'youtubeCustomPlaylist':
                    var name = parseYoutubeVideosList($('#video-name').val()).join(';');
                    break;
            }
            element = '' + source + '/' + name;
            break;

        case "presentation":
            let type = $('#presentation-type').val();
            let url = $('#presentation-url').val();
            element = '' + type + '/' + url;
            break;

        case "css":
            if (editor) {
                element = editor.getValue();
            }
            break;

        case "javascript":
            if (editor) {
                element = editor.getValue();
            }
            break;

        case 'dynamic':
            let klass = $('#dropdown-classes').val();
            let t = $('#dropdown-types').val() || '';
            let templ = $('#dropdown-templates').val() || '';

            element = `${klass}/${t}/${templ}`;

            break;

        case 'layoutBuilder':
            let lastPlaceholder = 0;
            $('div.placeholder').each(function () {
                lastPlaceholder++;
            });
            lastPlaceholder++;

            let classNames = [];
            let placeholdersNames = [];
            $(".wrapper-class-name").each(function () {
                classNames.push($(this).val());
                placeholdersNames.push(lastPlaceholder);
                lastPlaceholder++;
            });

            let pageUrl = $.urlParam('url');
            let model = {
                PageUrl: pageUrl,
                Classes: classNames,
                Placeholders: placeholdersNames
            };

            element = JSON.stringify(model);

            break;
        case 'image':
            let id = $('#image').val();
            if (id) {
                element = JSON.stringify({
                    id: id,
                    width: $('#input-width').val(),
                    height: $('#input-height').val()
                });
            }
            break;
        case 'contactUs':
            console.log('contact widget');
            break;
        case 'contactUsAlternative':
            console.log('contact widget');
            break;
        case 'gallery':

            console.log(selectFromLibrary)

            var currentType = "";
            if (selectFromLibrary) {
                currentType = 'library';

            } else {
                currentType = 'images';
            }

            element = JSON.stringify({
                ids: $('#image').val(),
                width: $('#input-width').val(),
                height: $('#input-height').val(),
                type: currentType,
                libraryName: selectedLibrary
            })

            console.log(element);
            //element = JSON.stringify({
            //    id: id2,
            //    width: $('#input-width').val(),
            //    height: $('#input-height').val()
            //});
            break;

        default:
            break;
    }

    return element;
}

function addEditor(id, width, height) {
    width = width || 600;
    height = height || 300;
    tinymce.remove();
    textEditor.init(id, width, height);
}

$('#Dialog-Box').dialog({
    autoOpen: false,
    height: 500,
    width: 800,
    modal: true
});

function OpenDialog(placeholder) {
    $('#add-widget-container').html('');
    $('#Dialog-Box')
        .data('placeholder', placeholder)
        .dialog('option', 'width', '80%')
        .dialog('option', 'height', 700)
        .dialog('option', 'dialogClass', 'add-widget-dialog')
        .dialog('open');

    $('.btn-add-widget').remove();
    $('.btn-edit-widget').remove();

    var $btnAddWidget = $(document.createElement('button'));
    $btnAddWidget.html('<span class="glyphicon glyphicon-edit"></span> Save');
    $btnAddWidget.addClass('btn btn-success btn-sm btn-add-widget');
    $btnAddWidget.prop('disabled', true);
    $btnAddWidget.attr('id', 'btn-save-widget');

    if (!($('.add-widget-dialog .ui-dialog-titlebar-close').hasClass('btn'))) {
        $('.add-widget-dialog .ui-dialog-titlebar-close').addClass('btn');
    }

    $btnAddWidget.appendTo('.ui-dialog-titlebar');
}

$('#Dialog-Box-Edit').dialog({
    autoOpen: false,
    height: 500,
    width: 800,
    modal: true
});

function OpenEditDialog(type, order) {
    $('#Dialog-Box-Edit')
        .dialog('option', 'width', '80%')
        .dialog('option', 'height', 700)
        .dialog('option', 'dialogClass', 'edit-widget-dialog')
        .dialog('open');

    $('.btn-add-widget').remove();
    $('.btn-edit-widget').remove();

    var $btnEditWidget = $(document.createElement('button'));
    $btnEditWidget.html('<span class="glyphicon glyphicon-edit"></span> Save');
    $btnEditWidget.addClass('btn btn-success btn-sm btn-edit-widget');
    $btnEditWidget.prop('disabled', true);
    $btnEditWidget.attr('id', 'btn-edit-widget');

    if (!($('.edit-widget-dialog .ui-dialog-titlebar-close').hasClass('btn'))) {
        $('.edit-widget-dialog .ui-dialog-titlebar-close').addClass('btn');
    }

    $btnEditWidget.appendTo('.edit-widget-dialog .ui-dialog-titlebar');

    editWidget(type, order)
}

var editor;

$('.ui-dialog').on('click', '.btn-add-widget', function () {
    var pathnames = window.location.pathname.split('/');
    //var id = pathnames[pathnames.length - 1];
    var placeholder = $('#Dialog-Box').data('placeholder');
    var type = $(this).attr('data-type');
    if (type === 'css') {
        placeholder = 'css';
    }
    if (type === 'javascript') {
        placeholder = 'javascript';
    }

    var cssClass = $('#css-class').val();
    var allowedRoles = $('#allowed-roles').val();
    var allowedRoles = $('#allowed-groups').val();

    var element = getElementForType(type);

    if (!element) {
        switch (type) {
            case 'detailedNews':
                createErrorAlert('You must select a new!');
                Loader.hide();
                return;
                break;
            case 'image':
                createErrorAlert('You must select an image!');
                Loader.hide();
                return;
                break;
            default:
                break;
        }
    }

    addWidgetLocal(type, element, placeholder, cssClass);
});

function addWidget(type, element, id, placeholder, cssClass) {

    var body = {
        type: type,
        id: id,
        element: element,
        placeholder: placeholder,
        cssClass: cssClass
    }

    Data.postJson({ url: '/sitetriks/Pages/AddWidget', data: body }).then(function (data) {
        createAlert('Added', { type }, 'success', '#Dialog-Box', null);
    });
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function addWidgetLocal(type, element, placeholder, cssClass) {
    let order = Math.max.apply(Math, pageContent.map(function (c) { return c.order; })) + 1;

    if (order == -Infinity) {
        order = 0;
    }
    var id = guid();
    var body = {
        content: {
            type: type,
            id: id,
            element: element,
            placeholder: placeholder,
            cssClass: cssClass,
            order: order || 0
        },
        preview: 'preview'
    }

    Loader.show(true);

    Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {
        $(document).trigger('removeCarousel');

        pageContent.push({
            id: id,
            cssClass: cssClass,
            element: element,
            isLocked: false,
            order: order || 0,
            placeholder: placeholder,
            type: type
        });

        $('.placeholder[data-placeholder="' + placeholder + '"]').append(data);

        createAlert('Added', { type }, 'success', '#Dialog-Box', null, true);
    })
}

/* ----------------------------------------------------------------
	Edit Widgets
-----------------------------------------------------------------*/

function editWidget(type, order) {
    // local
    let item = pageContent.find(e => e.order === +order && e.type === type);
    showWidget({ order: order, type: type, element: item.element, cssClass: item.cssClass, placeholder: item.placeholder, id: item.id });

    // backend
    //let pathnames = window.location.pathname.split('/');
    //let id = pathnames[pathnames.length - 1];

    //let body = {
    //    id: id,
    //    order: +order,
    //    type: type
    //}

    //$.ajax({
    //    url: "/sitetriks/Pages/EditWidget",
    //    type: "post",
    //    cors: true,
    //    contentType: "application/json",
    //    data: JSON.stringify(body),
    //    success: showWidget
    //});
}

function isGuid(stringToTest) {
    if (stringToTest[0] === "{") {
        stringToTest = stringToTest.substring(1, stringToTest.length - 1);
    }
    var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
    return regexGuid.test(stringToTest);
}

function showWidget(data) {
    $("#order").text("Order: " + data.order);
    $("#type").text("Type: " + data.type);

    var type = data.type;
    var $widgetContainer = $('#edit-widget-container');
    $widgetContainer.html('<p>Loading...</p>');
    $('.btn-edit-widget').prop('disabled', true);
    $('.btn-edit-widget').removeAttr('data-type');
    var element = data.element || '';

    Data.getJson({ url: '/sitetriks/widgets/addwidget?name=' + type }).then(function success(res) {
        $widgetContainer.html(res);
        let elements;
        $('#css-class').val(data.cssClass);
        $('#allowed-roles').val(data.allowedRoles);
        $('#allowed-groups').val(data.allowedGroups);

        // TODO: look for better solution
        let header = $('#edit-widget-container h2').text();
        $('#edit-widget-container h2').text(header.replace('Add', 'Edit'));

        switch (type) {

            case 'navigation':
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
                        li.append(pages.find(p => p.Id == selectedOptions[i]).Title);

                        $("#multiselect-pages option[value='" + selectedOptions[i] + "']").attr('selected', 'selected');
                        $("#pages-order").append(li);
                    }

                    Multiselect.Setup("multiselect-pages", function (option, checked, select) {
                        var opselected = $(option).val();

                        if (!checked) {
                            var el = $("#pages-order").children("li[data-identifier='" + opselected + "']").first();
                            el.remove();
                        }
                        else {
                            var li = $("<li>");
                            li.addClass("ui-state-default");
                            var span = $("<span>");
                            span.addClass("ui-icon ui-icon-arrowthick-2-n-s");
                            li.append(span);
                            li.attr("data-identifier", opselected);
                            li.append(pages.find(p => p.Id == opselected).Title);

                            $("#pages-order").append(li);
                        }
                    });

                    var depthOption = JSON.parse(element).maxDepth;

                    $("#depth-level option[value='" + depthOption + "']").attr('selected', 'selected');

                    $("#pages-order").sortable({ opacity: 0.5 });
                    $("#pages-order").disableSelection();
                });
                break;

            case "html":
                let $container = $("#html-widget-holder");
                let $list = $("#html-options-list");

                SharedBlocks.editSetup($list, $container, "shared-block-titles", element);

                if (isGuid(element)) {
                    $("#html-options-list").val("shared").change();
                    $("#shared-block-id").val(element);
                }
                else {
                    let $textarea = $("<textarea></textarea>", {
                        id: "add-html-content"
                    });

                    $container.html($textarea);

                    $('#add-html-content').text(element);
                    addEditor('#add-html-content', 800, 300);

                    $("#html-options-list").val("new").change();
                }

                break;

            case "detailedNews":
                appendNewsTitles('news-list')
                break;

            case "loginRegisterUser":
                $('#' + element).prop('checked', true);
                break;

            case "newsCarousel":
                elements = element.split('/');
                $('#order-by-date').prop('checked', elements[0] === 'true');
                $('input[type="radio"][value="' + elements[1] + '"]').prop('checked', true);
                if ($.isNumeric(elements[2])) {
                    $('#news-type').val(elements[3]);
                    $('#latest-news-count').val(elements[2]);
                } else {
                    $('#news-type').val(elements[2]);
                }

                break;

            case "video":
                elements = element.split('/');
                $('#video-source').val(elements[0]);
                if (elements[0] === 'youtube') {
                    $('#video-name').val('https://www.youtube.com/watch?v=' + elements[1]);
                } else {
                    $('#video-name').val(elements[1]);
                }
                break;

            case "presentation":
                elements = element.split('/');
                $('#presentation-type').val(elements[0]);
                $('#presentation-url').val(elements[1]);
                break;

            case "css":
                editor = CodeMirror.fromTextArea(document.getElementById('css-rules'), {
                    lineNumbers: true,
                    mode: 'css'
                });
                if (editor) {
                    editor.setValue(element);
                }
                break;

            case "javascript":
                editor = CodeMirror.fromTextArea(document.getElementById('js-scripts'), {
                    lineNumbers: true,
                    mode: 'javascript'
                });
                if (editor) {
                    editor.setValue(element);
                }
                break;
            case "layoutBuilder":
                var classes = JSON.parse(element).Classes;
                var placeholdersToSkip = 0;

                for (var i = 0; i < classes.length; i++) {
                    let wrapperHolder = $(document.createElement('div'));
                    let classLabel = $("<label></label>", {
                        text: 'Class name:'
                    });
                    let classInput = $('<input/>', {
                        type: 'text',
                        class: 'wrapper-class-name',
                        val: classes[i]
                    });
                    placeholdersToSkip++;
                    wrapperHolder.append(classLabel, classInput);
                    $(".layout-creation-wrapper").append(wrapperHolder);
                }

                $('.edit-widget-dialog .btn-edit-widget').attr('data-placeholders-skip', placeholdersToSkip);

                break;
            case 'image':
                loadUploadTemplate(false, 'main-image', 'image');

                break;
            case 'gallery':
                loadUploadTemplate(true, 'images', 'image');
                $("#input-width").val(JSON.parse(data.element).width);
                $("#input-height").val(JSON.parse(data.element).height);

                let imagesLinksIds = JSON.parse(data.element).ids.split(';');
                var fieldId = $('#upload-modal').attr('data-id');
                var value = $('#' + fieldId).val();

                for (let i = 0; i < imagesLinksIds.length; i++) {
                    if (imagesLinksIds[i] != "") {
                        $('#' + fieldId).val(value + ';' + imagesLinksIds[i]);
                        createImageView(fieldId, imagesLinksIds[i]);
                    }
                }

                break;
            default:
                break;
        }

        $('.edit-widget-dialog .btn-edit-widget')
            .prop('disabled', false)
            .attr('data-id', data.id)
            .attr('data-placeholder', data.placeholder)
            .attr('data-type', type)
            .attr('data-order', data.order);
    });
}

$('.ui-dialog').on('click', '.btn-edit-widget', function () {
    var id = $(this).attr('data-id');
    var placeholder = $(this).attr('data-placeholder');
    var type = $(this).attr('data-type');
    var order = $(this).attr('data-order');

    if (type === 'css') {
        placeholder = 'css';
    }
    if (type === 'javascript') {
        placeholder = 'javascript';
    }

    let cssClass = $('#css-class').val();
    let allowedRoles = $('#allowed-roles').val();
    let allowedGroups = $('#allowed-groups').val();

    let element = getElementForType(type);

    if (element === null) {
        if (type === 'detailedNews')
            createErrorAlert('You must select a new!');
        return;
    }

    if (type === 'layoutBuilder') {
        var placeholdersToSkip = $(this).attr('data-placeholders-skip');

        var builder = JSON.parse(element);

        for (var i = 0; i < builder.Placeholders.length; i++) {
            builder.Placeholders[i] -= placeholdersToSkip;
        }

        element = JSON.stringify(builder);
    }

    saveEditWidgetLocal(type, order, element, id, placeholder, cssClass);
});

function saveEditWidget(type, order, element, id, placeholder, cssClass) {

    let body = {
        type: type,
        order: order,
        id: id,
        element: element,
        placeholder: placeholder,
        cssClass: cssClass || ''

    }

    Data.postJson({ url: '/sitetriks/Pages/SaveEditedWidget', data: body }).then(function (data) {
        createAlert('Edited', { type }, 'warning', '#Dialog-Box-Edit', null);
    });
}

function saveEditWidgetLocal(type, order, element, id, placeholder, cssClass) {
    let item = pageContent.find(e => e.order === +order && e.type === type);
    item.Element = element;
    item.CssClass = cssClass;

    if (item.IsInherited) {
        item.IsModifiedOnChild = true;
    }

    let $old = $('.delete-widget[data-type=' + type + '][data-order=' + order + ']').parent('.preview-placeholder');

    var body = {
        content: {
            type: type,
            id: id,
            element: element,
            placeholder: placeholder,
            cssClass: cssClass,
            order: order
        },
        preview: 'preview'
    }

    Loader.show(true);

    Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {

        $(document).trigger('removeCarousel');

        $old.after(data);
        $old.remove();

        createAlert('Edited', { type }, 'warning', '#Dialog-Box-Edit', null, true);
    })
}

// Displayavailable lbraries in GalleryWidget

var selectFromLibrary = false;
var selectedLibrary = "";

$('body').on('click', '#btn-show-libraries', function (e) {
    let $libs = $('#libraries-list');
    $('#choice-file').css('display', 'none');
    $libs.css('display', 'block');
    listLibrariesInGallery();
    selectFromLibrary = true;
})

$('body').on('click', '#btn-show-choice', function (e) {
    formData = undefined;
    uploadedFiles = [];
    $('#files-container').html('');
    $('#files-list').html('');
    loadImages();
    $('#choice-file').show();
    $('#upload-file').hide();
    $('#libraries-list').css('display', 'none');
    selectFromLibrary = false;
    cleanUp();
});

$('body').on('click', '#btn-select-library', function (e) {
    selectedLibrary = $(".select-dropdown").val();
})


/* ----------------------------------------------------------------
	Delete Widgets
-----------------------------------------------------------------*/

function removeWidget(element) {
    // local
    let order = $(element).data("order");
    let type = $(element).data("type");
    let id = $(element).parent().data("identifier");
    let item = pageContent.find(e => e.order === order && e.type === type && e.id === id);
    let index = pageContent.indexOf(item);
    pageContent.splice(index, 1);

    $(element).parent('.preview-placeholder').remove();
    createAlert('Removed', { type }, 'danger', null, '#delete-confirm', true);

    // backend
    //let pathnames = window.location.pathname.split('/');
    //let id = pathnames[pathnames.length - 1];
    //let order = $(element).data("order");
    //let type = $(element).data("type");

    //let $btnDelete = $('#delete-confirm-yes');
    //$btnDelete.attr('data-id', id);
    //$btnDelete.attr('data-order', order);
    //$btnDelete.attr('data-type', type);

    //$("#delete-confirm").modal("show");
}

$('#delete-confirm-yes').on('click', function () {
    var $trigger = $(this);
    let id = $trigger.attr('data-id');
    let order = $trigger.attr('data-order');
    let type = $trigger.attr('data-type');

    let body = {
        id: id,
        order: +order,
        type: type
    }

    Data.postJson({ url: '/sitetriks/Pages/DeleteWidget', data: body }).then(function (data) {
        createAlert('Removed', { type }, 'danger', null, '#delete-confirm');
        $trigger.attr('data-id', '')
            .attr('data-order', '')
            .attr('data-type', '');
    });
})
