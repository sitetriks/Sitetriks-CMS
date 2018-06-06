function editTemplateContent(url, currentLanguage, currentVersion, currentCulture, currentTemplate, w) {
    function loadjscssfile(filename, filetype) {
        if (filetype == "js") { //if filename is a external JavaScript file
            var fileref = document.createElement('script')
            fileref.setAttribute("type", "text/javascript")
            fileref.setAttribute("src", filename)
        }
        else if (filetype == "css") { //if filename is an external CSS file
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    }

    function removejscssfile(filename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
        var allsuspects = document.getElementsByTagName(targetelement)
        for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
                allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
        }
    }

    $('.resolution').on('click', function (ev) {
        let active = $('.selected-option').attr('data-type');
        let $target = $(this);

        if (active === 'content') {
            if ($target.hasClass('selected')) {
                return;
            }

            $('.resolution.selected').each(function (_, element) {
                let $el = $(element);
                $el.removeClass('selected');
                let type = $el.attr('data-type');

                removejscssfile(`/css/sitetriks/st-${type}-preview.css`, 'css')
            });

            $target.addClass('selected');
            let type = $target.attr('data-type');
            loadjscssfile(`/css/sitetriks/st-${type}-preview.css`, 'css');
        }
    });

    $('.show-layout').on('click', function (ev) {
        $('#preview-layout').show();
        $('#layout-properties').show();
        $('#widgets-holder').hide();
        $('#preview-container').hide();

        // button styles 1.1
        $(this).parent().addClass('selected-option');
        $('.show-content').parent().removeClass('selected-option');

        //reset resolutions
        $('.resolution').each(function (_, element) {
            element.classList.add('selected');
        });
        ModuleBuilder.getInstance('#preview-layout').resolutions = ['xs', 'sm', 'md', 'lg'];
    });

    $('.show-content').on('click', function (ev) {
        $('#preview-layout').hide();
        $('#layout-properties').hide();
        $('#widgets-holder').show();
        $('#preview-container').show();

        // button styles 1.1
        $(this).parent().addClass('selected-option');
        $('.show-layout').parent().removeClass('selected-option');

        //save layout on switching back to content
        $('#btn-save-layout').trigger('click');

        $('.resolution.selected').each(function (_, element) {
            let $el = $(element);
            $el.removeClass('selected');
            let type = $el.attr('data-type');

            removejscssfile(`/css/sitetriks/st-${type}-preview.css`, 'css')
        });

        $('.resolution[data-type="lg"]').trigger('click');
    });

    let layoutWidget = pageContent.find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
    if (layoutWidget) {
        let layout = JSON.parse(layoutWidget.element);

        ModuleBuilder.initializeLayout('#preview-layout', layout.layoutRows, '.resolution', '#main-layout-options', function () { return $('.selected-option').attr('data-type') === 'layout' });

        $('#btn-save-layout').on('click', function (ev) {
            let l = ModuleBuilder.getInstance('#preview-layout');
            layout.layoutRows = l.map(function (r) { return { columns: r.columns, tag: (r.tag || 'div'), cssClass: r.cssClass } });
            //$('.show-content').trigger('click');

            console.log(l.deletedPlaceholders);
            for (let i = 0; i < l.deletedPlaceholders.length; i += 1) {
                removeWidgetForPlaceholder(l.deletedPlaceholders[i]);
            }

            saveEditWidgetServer(layoutWidget.type, JSON.stringify(layout), layoutWidget.id, layoutWidget.placeholder, layoutWidget.cssClass, layoutWidget.templateName, layoutWidget.allowedRoles, layoutWidget.allowedGroups);
        });
    } else {
        console.error('Layout was not found!');
    }

    $(document).on("updatePreview", {
    }, function () {
        updatePreview(url);
    });

    $(document).trigger("updatePreview");

    $(document).on('focusin', function (e) {
        if ($(e.target).closest(".mce-window").length) {
            e.stopImmediatePropagation();
        }
    });

    function loadVersions(lang) {
        $('#versions')
            .find('option')
            .remove();

        return Data.getJson({ url: '/sitetriks/templates/getpageversions?url=' + url + '&lang=' + lang, disableCache: true }).then(function (res) {
            if (res.success) {
                res.versions.forEach(function (element) {
                    let $v = $(`<option value="${element}">${element}</option>`)
                    if (element === +currentVersion) {
                        $v.attr('selected', 'selected');
                    }

                    $v.appendTo('#versions');
                })
            }
        }, Data.defaultError);
    }

    loadVersions(currentCulture);

    Data.getJson({ url: '/sitetriks/templates/getlanguages', disableCache: true }).then(function (res) {
        if (res.success) {
            res.cultures.forEach(function (element) {
                let $l = $('<option value="' + element + '">' + element + '</option>')
                if (element === currentLanguage) {
                    $l.attr('selected', 'selected');
                }

                $l.appendTo('#languages');
            })
        }
    }, Data.defaultError)

    $('#languages').on('change', function (ev) {
        updatePreview(url);
        let lang = $('#languages').val();
        currentLanguage = lang;
        loadVersions(lang);
    });

    function updatePreview(url) {
        var fullUrl = "/sitetriks/display/previewpage";
        let lang = $('#languages').val() || '';

        $('#preview-container').html('');
        Loader.show(true);

        Data.getJson({ url: fullUrl + '?url=' + url + '&lang=' + lang, disableCache: true }).then(function (res) {
            $('#preview-container').html(res.view);

            $(document).trigger("initCarousel");
            pageContent = res.content;
            $('#alerts').html('');

            if (res.message) {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, isPermanent: true });
            }

            Loader.hide();

            $('#displayed-version').text(res.version);

            WidgetsDraggable.init(w.makeDrop);
        }, function (data, textStatus, XMLHttpRequest) {
            console.log(data);
            console.log(textStatus);
            console.log(XMLHttpRequest);
        });
    }

    $('#preview-container').on('click', '.lock-widget', function (ev) {
        var $caller = $(this);
        var status = $caller.prop('checked');
        var type = $caller.attr('data-type');
        var order = $caller.attr('data-order');

        let item = pageContent.find(e => e.Order == order && e.Type == type);
        item.IsLocked = !!status;
    });

    $(document).on('keyup', '#video-input', function () {
        validateVideo();
    });

    $('#btn-publish').on('click', function (evt) {
        let body = {
            url: url
        };

        $.ajax({
            url: "/sitetriks/Templates/GetChildren",
            type: "post",
            cors: true,
            data: JSON.stringify(body),
            contentType: "application/json",
            success: function success(res) {
                if (res.success) {
                    var container = $("#warning-modal .modal-body");
                    var childPagesList = $("#child-pages-list");
                    childPagesList.empty();
                    $("#child-pages-container").attr("hidden", "hidden");
                    var childTemplatesList = $("#child-templates-list");
                    childTemplatesList.empty();
                    $("#child-templates-container").attr("hidden", "hidden");

                    if (res.childTemplates.length == 0 && res.childPages.length == 0) {
                        var msg = $("<h5>");
                        msg.text("Publish of this template won't affect any page!");

                        container.html(msg);
                        return;
                    }

                    for (var i = 0; i < res.childPages.length; i++) {
                        var li = $("<li>");
                        li.addClass("list-group-item");
                        li.text(res.childPages[i]);

                        childPagesList.append(li);
                    }

                    for (var i = 0; i < res.childTemplates.length; i++) {
                        var li = $("<li>");
                        li.addClass("list-group-item");
                        li.text(res.childTemplates[i]);

                        childTemplatesList.append(li);
                    }

                    if (res.childPages.length > 0) {
                        $("#child-pages-container").removeAttr("hidden");
                    }

                    if (res.childTemplates.length > 0) {
                        $("#child-templates-container").removeAttr("hidden");
                    }
                }
            }
        });
    });

    $('#warning-modal-publish').on('click', function (evt) {
        publishTemplate();
    });

    function publishTemplate() {
        let body = {
            url: url,
            content: pageContent,
            lang: currentLanguage
        }

        Data.postJson({ url: '/sitetriks/Templates/PublishPageWithContent', data: body }).then(function (res) {
            if (res.success) {
                location.replace('/sitetriks/templates');
            }
        }, Data.defaultError);
    }

    $('#btn-save-draft').on('click', function (evt) {
        saveDraft(function (res) {
            if (res.success) {
                location.replace('/sitetriks/templates');
            }
        });
    });

    function saveDraft(callback) {
        let body = {
            url: url,
            content: pageContent,
            lang: currentLanguage
        }

        Data.postJson({ url: '/sitetriks/Templates/SaveDraft', data: body }).then(function (res) {
            callback(res);
        }, Data.defaultError);
    }

    $('#btn-preview-page').on('click', function (evt) {
        Loader.show('#fff')
        saveDraft(function (res) {
            if (res.success) {
                let body = {
                    content: pageContent,
                    template: currentTemplate,
                    language: currentLanguage
                }

                Data.postJson({ url: '/sitetriks/Display/Preview', data: body }).then(function (res) {
                    createPreveiwWindow(res);

                    Loader.hide();
                }, Data.defaultError);
            }
        });
    });

    $('#btn-preview-version').on('click', function (evt) {
        let body = {
            version: $('#versions').val(),
            url: url
        }
        
        Data.postJson({ url: '/sitetriks/Display/PreviewVersion', data: body }).then(function (res) {
            createPreveiwWindow(res);
        }, Data.defaultError);
    });

    $('#btn-revert-version').on('click', function (evt) {
        let body = {
            version: $('#versions').val(),
            url: url
        }

        Data.postJson({ url: '/sitetriks/templates/RevertVersion', data: body }).then(function (res) {
            location.reload(true);
        }, Data.defaultError);
    });

    $('#btn-reset').on('click', function (evt) {
        $(document).trigger("updatePreview");
    });

    $('.btn-revision').on('click', function (ev) {
        let $span = $(this).children('span');
        if ($span.hasClass('glyphicon-menu-right')) {
            $span.removeClass('glyphicon-menu-right');
            $span.addClass('glyphicon-menu-left');
            $('#version-control').css('display', 'inline-block');
        } else {
            $span.removeClass('glyphicon-menu-left');
            $span.addClass('glyphicon-menu-right');
            $('#version-control').css('display', 'none');
        }
    });

    function saveEditWidgetServer(type, element, id, placeholder, cssClass, templateName, allowedRoles, allowedGroups) {
        var item = pageContent.find(function (e) {
            return e.id === id && e.type === type;
        });
        item.element = element;
        item.cssClass = cssClass;
        item.allowedRoles = allowedRoles;
        item.allowedGroups = allowedGroups;
        item.templateName = templateName;

        let order = item.order;

        if (item.IsInherited) {
            item.IsModifiedOnChild = true;
        }

        var $old = $('.preview-placeholder[data-identifier="' + id + '"]');

        var body = {
            content: {
                type: type,
                id: id,
                element: element,
                placeholder: placeholder,
                cssClass: cssClass,
                templateName: templateName,
                allowedRoles: allowedRoles,
                allowedGroups: allowedGroups,
                order: order,
                isLocked: item.isLocked,
                isStatic: item.isStatic
            },
            preview: 'preview'
        };

        Loader.show(true);

        saveDraft(function (res) {
            if (res.success) {
                Data.postJson({ url: '/sitetriks/Display/RenderSingleWidget', data: body }).then(function (data) {

                    $(document).trigger('removeCarousel');

                    $old.after(data);
                    $old.remove();

                    if (type === 'layoutBuilder') {
                        console.log('init layout')
                        WidgetsDraggable.init(w.makeDrop);
                    }

                    Loader.hide();

                    loadVersions(currentLanguage).then(function (res) {
                        $('#versions').find('option[selected="selected"]').removeAttr('selected');
                        $('#versions').find('option').first().attr('selected', 'selected');
                    });
                });
            }
        });
    }
    
    function createPreveiwWindow(html) {
        let newWindow = window.open("", "Preview");
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            //POPUP BLOCKED
            Notifier.createAlert({ containerId: '#alerts', message: 'Browser does not allow opening popup windows!', status: 'danger' });
        } else {
            newWindow.document.write(html);
            newWindow.document.close();
            newWindow.focus();
        }
    }
}

function createTemplate(checkValidUrlLink) {
    $(document).ready(function () {
        populateUrl('#title', '#url', validateUrlOnChange);
    });

    $(function () {
        $('#date-picker').datetimepicker({
            defaultDate: '',
            minDate: new Date()
        });

        $('#date-picker').val('');
    });

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');

    var timer = 0;
    $urlField.on('input', function (e) {
        validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                validateUrl(checkValidUrlLink + '?url=' + url, $urlField, $urlValidation, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css("border", "1px solid red");
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $('.title-field').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css("border", "1px solid green");
            $target.siblings("strong").children("span").text('');
        } else {
            $target.css("border", "1px solid red");
            $target.siblings("strong").children("span").text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#create-page-form').on('submit', function (evt) {
        var _this = this;

        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        if (flag) {
            evt.preventDefault();
            $notfier.text('Titles are required and must be atleast 3 characters long!');
            return false;
        }

        if (url.length < 3) {
            evt.preventDefault();
            $notfier.text('Please provide valid information in the required fields!');
            return false;
        }

        let dateVal = $('#date-picker').val();

        if (!!dateVal) {
            let dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
                evt.preventDefault();
                $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
                return false;
            }
        }

        Loader.show(true);

        $btnSubmit.attr("disabled", true);
        $.ajax({
            method: 'GET',
            url: checkValidUrlLink + '?url=' + url,
            contentType: 'application/json',
            success: function success(res) {
                if (res.success) {
                    $btnSubmit.attr("disabled", false);
                    return res;
                } else {
                    $urlField.css("border", "1px solid red");
                    $urlValidation.text('Url is invalid or already in use!');
                    Loader.hide();
                }
            }
        }).done(function (res) {
            if (res.success) {
                $.ajax({
                    url: _this.action,
                    type: _this.method,
                    data: $(_this).serialize(),
                    success: function success(res) {
                        var style = '';
                        if (res.success) {
                            window.location.replace('/sitetriks/templates/editcontent?url=' + res.url);
                        } else {
                            $notfier.text(res.message);
                            Loader.hide();
                        }
                    }
                });
            } else {
                $notfier.text(res.message);
            }
            $btnSubmit.attr("disabled", false);
        });

        evt.preventDefault();
        return false;
    });
}

function editTemplate(checkValidUrlLink) {
    $(document).ready(function () {
        populateUrl('#title', '#url', validateUrlOnChange);
    });

    $(function () {
        $('#date-picker').datetimepicker({
            minDate: new Date()
        });

        $('#date-picker').val('');
    });

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');

    var timer = 0;
    $urlField.on('input', function (e) {
        return validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }
        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                return validateUrl(checkValidUrlLink + '?url=' + url + '&id=' + '@Model.PageViewModel.EnId', $urlField, $urlValidation, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css("border", "1px solid red");
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $('.title-field').on('input', function (e) {
        var $target = $(e.target);
        if ($target.val().length >= 3) {
            $target.css("border", "1px solid green");
            $target.siblings("strong").children("span").text('');
        } else {
            $target.css("border", "1px solid red");
            $target.siblings("strong").children("span").text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#edit-page-form').on('submit', function (evt) {
        var _this = this;

        window.onbeforeunload = null;
        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        if (flag) {
            evt.preventDefault();
            window.onbeforeunload = onUnload;
            $notfier.text('Titles required and must be atleast 3 characters long!');
            return false;
        }

        if (url.length < 3) {
            evt.preventDefault();
            window.onbeforeunload = onUnload;
            $notfier.text('Please provide valid information in the required fields!');
            return false;
        }

        let dateVal = $('#date-picker').val();

        if (!!dateVal) {
            let dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
                evt.preventDefault();
                $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
                return false;
            }
        }

        Loader.show(true);

        $btnSubmit.attr("disabled", true);
        $.ajax({
            method: 'GET',
            url: checkValidUrlLink + '?url=' + url + '&id=' + '@Model.PageViewModel.EnId',
            contentType: 'application/json',
            success: function success(res) {
                console.log(res);
                if (res.success) {
                    $btnSubmit.attr("disabled", false);
                    return res;
                } else {
                    $urlField.css("border", "1px solid red");
                    $urlValidation.text('Url is invalid or already in use!');
                    window.onbeforeunload = onUnload;
                    Loader.hide();
                }
            }
        }).done(function (res) {
            if (res.success) {
                $.ajax({
                    url: _this.action,
                    type: _this.method,
                    data: $(_this).serialize(),
                    success: function success(res) {
                        if (res.success) {
                            window.location.replace('/sitetriks/templates');
                        } else {
                            window.onbeforeunload = onUnload;
                            $notfier.text(res.message);
                            Loader.hide();
                        }
                    }
                });
            } else {
                $notfier.text(res.message);
            }
            $btnSubmit.attr("disabled", false);
        });

        evt.preventDefault();
        return false;
    });
}