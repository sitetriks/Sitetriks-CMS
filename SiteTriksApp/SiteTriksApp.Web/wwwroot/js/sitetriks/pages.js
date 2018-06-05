function createPage(validateUrlUrl) {
    populateUrl('#title', '#url', validateUrlOnChange);

    Multiselect.Setup("multiselect-roles");

    $('#date-picker').datetimepicker({
        defaultDate: '',
        minDate: new Date()
    });

    $('#date-picker').val('');
    countSEOWords.apply($('#seo-words'));

    Tags.init();

    $('.date-picker-group span').on('click', function () {
        $('#date-picker').focus();
    })

    $('#seo-words').on('input change', countSEOWords);

    function countSEOWords(ev) {
        let $trigger = $(this);
        let words = $trigger.val().split(',');
        if (words.length === 1 && words[0].trim().length === 0) {
            $('#seo-words-counter').text('');
        } else {
            $('#seo-words-counter').text('Words: ' + words.length);
        }
    }

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
                validateUrl(validateUrlUrl + url, $urlField, $urlValidation, $btnSubmit);
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
            $target.next("span").text('');
        } else {
            $target.css("border", "1px solid red");
            $target.next("span").text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#create-page-form').on('submit', function (evt) {
        var _this = this;

        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each((_, element) => {
            if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
                flag = true;
            }
        });

        if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) { return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (flag) {
            evt.preventDefault();
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
        Data.getJson({ url: validateUrlUrl + url }).then(function (res) {
            if (res.success) {
                $btnSubmit.attr("disabled", false);
                return Data.post({ url: _this.action, data: $(_this).serialize() });
            } else {
                Validator.validate($urlField, 'Url is invalid or already in use!', function (val) { return false; })

                Loader.hide();
                return Promise.reject('Url is invalid or already in use!');
            }
        }, Data.defaultError).then(function (res) {
            var style = '';
            if (res.success) {
                window.location.replace('/sitetriks/pages/editcontent?url=' + res.url);
            } else {
                $notfier.text(res.message);
                Loader.hide();
            }

            $btnSubmit.attr("disabled", false);
        }, function (error) {
            console.warn(error);
            $btnSubmit.attr("disabled", false);
            $notfier.text(error);
        });

        evt.preventDefault();
        return false;
    });
}

function editPage(validateUrlUrl, mlf, pageId, mlfUrl, initialUrl) {

    populateUrl('#title', '#url', validateUrlOnChange);
    Multiselect.Setup("multiselect-roles");

    Data.getJson({ url: '/templates/page-multilingual.html' }).then(function (res) {
        for (var key in mlf) {
            $('<option></option>', {
                value: key,
                text: key
            }).appendTo('#languages');
        }

        let template = Handlebars.compile(res);

        $('#languages').on('change', function (ev) {
            let lang = $(this).val();

            if (!lang) {
                $('#mlf-info').html('');
                $('#backend-info').show();
            } else {
                $('#backend-info').hide();

                let current = mlf[lang];
                let html = template({ lang, title: current.Title });

                $('#mlf-info').html(html);
            }
        });
    });

    $('.date-picker-group span').on('click', function () {
        $('#date-picker').focus();
    });

    $('#date-picker').datetimepicker({
        minDate: new Date()
    }).val('');

    Tags.init();

    $('#seo-words').on('input change', countSEOWords);
    countSEOWords.apply($('#seo-words'));

    function countSEOWords(ev) {
        let $trigger = $(this);
        let words = $trigger.val().split(',');
        if (words.length === 1 && words[0].trim().length === 0) {
            $('#seo-words-counter').text('');
        } else {
            $('#seo-words-counter').text('Words: ' + words.length);
        }
    }

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
                return validateUrl(validateUrlUrl + url + '&id=' + pageId, $urlField, $urlValidation, $btnSubmit);
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
            $target.next("span").text('');
        } else {
            $target.css("border", "1px solid red");
            $target.next("span").text('Tittle must be atleast 3 symbols!');
        }
    });

    var $notfier = $('#notifier');
    $('#edit-page-form').on('submit', function (evt) {
        var _this = this;

        //--------------------------------------------------------
        // multi lingual fields logic
        let lang = $('#languages').val();
        if (lang) {
            Loader.show('#fff');

            let $fields = $(`[data-lang="${lang}"]`);
            let body = { lang: lang, parentId: pageId };
            $fields.each(function (index, element) {
                let name = $(element).attr('data-name');
                let value = $(element).val();
                body[name] = value;
            });

            Data.postJson({ url: mlfUrl, data: body }).then(function (res) {
                if (res.success) {
                    mlf = res.mlf;
                    Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' })
                } else {
                    Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: 'Page was not updated!', status: 'danger' })
                }

                Loader.hide();
            });

            evt.preventDefault();
            return false;
        }

        //--------------------------------------------------------

        window.onbeforeunload = null;
        var url = $urlField.val();
        $notfier.text('');
        var flag = false;

        $('.title-field').each(function (index, element) {
            if ($(element).val().length < 3) {
                flag = true;
            }
        });

        $('.title-field').each((_, element) => {
            if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
                flag = true;
            }
        });

        if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) { return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3); })) {
            flag = true;
        }

        if (flag) {
            evt.preventDefault();
            return false;
        }

        if (flag) {
            evt.preventDefault();
            window.onbeforeunload = onUnload;
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
        Data.getJson({ url: validateUrlUrl + url + '&id=' + pageId }).then(function (res) {
            if (res.success) {
                $btnSubmit.attr("disabled", false);
                return Data.post({ url: _this.action, data: $(_this).serialize() });
            } else {
                Validator.validate($urlField, res.message, function (val) { return false; });
                window.onbeforeunload = onUnload;
                Loader.hide();
                return Promise.reject(res.message);
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {
                Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' })
                if (url !== initialUrl) {
                    // update url if
                    if (window.history.replaceState) {
                        window.history.replaceState('', '', '/sitetriks/pages/edit?url=' + url);
                    } else {
                        // reload with new url for older browsers
                        window.location.replace('/sitetriks/pages/edit?url=' + url);
                    }
                }
            } else {
                Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: res.message, status: 'danger' })
                window.onbeforeunload = onUnload;
            }

            $(window).scrollTop(0);
            Loader.hide();

            $btnSubmit.attr("disabled", false);
        }, function (error) {
            console.warn(error);
            $btnSubmit.attr("disabled", false);
            $notfier.text(error);
        });

        evt.preventDefault();
        return false;
    });
}

function editPageContent(url, currentLanguage, currentVersion, currentCulture, currentTemplate, w) {
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

            // w.saveEditWidgetLocal
            saveEditWidgetServer(layoutWidget.type, JSON.stringify(layout), layoutWidget.id, layoutWidget.placeholder, layoutWidget.cssClass, layoutWidget.templateName, layoutWidget.allowedRoles, layoutWidget.allowedGroups);
        });
    } else {
        console.error('Layout was not found!');
    }

    function removeWidgetForPlaceholder(placeholder) {
        let widgets = pageContent.filter(c => c.placeholder === placeholder);

        for (let i = 0; i < widgets.length; i += 1) {
            let index = pageContent.findIndex(c => c.id === widgets[i].id);

            if (index !== -1) {
                pageContent.splice(index, 1);
                if (widgets[i].type === 'layoutBuilder') {
                    let layout = JSON.parse(widgets[i].element);
                    for (let j = 0; j < layout.length; j += 1) {
                        for (let k = 0; k < layout[j].columns.length; k += 1) {
                            removeWidget(layout[j].columns[k].properties.placeholder);
                        }
                    }
                }
            }
        }
    }

    $('body').on('click', '.resolutions-dropdown', function () {
        $(this).next('.triangle').toggleClass('triangle-up');
    });

    let $window = $(window);
    let itemTop = 0;
    $window.on('scroll resize', stickyWidgets);
    $window.trigger('scroll');

    function stickyWidgets() {
        let scrollPosition = $window.scrollTop();
        let $widgetsList = $('.widgets-list');

        if (!itemTop) {
            itemTop = $widgetsList.offset().top;
        }

        if ($widgetsList && $widgetsList.length === 1) {
            if (scrollPosition > (itemTop - 100)) {
                $widgetsList.addClass('scrolling');
            } else {
                $widgetsList.removeClass('scrolling');
            }
        }
    }

    $(document).on("updatePreview", {
    }, function () {
        updatePreview(url);
    });

    $(document).trigger("updatePreview");

    function loadVersions(lang) {
        $('#versions')
            .find('option')
            .remove();

        return Data.getJson({ url: '/sitetriks/pages/getpageversions?url=' + url + '&lang=' + lang, disableCache: true }).then(function (res) {
            if (res.success) {
                res.versions.forEach(function (element) {
                    let $v = $(`<option value="${element}">${element}</option>`)
                    if (element === +currentVersion) {
                        $v.attr('selected', 'selected');
                    }

                    $v.appendTo('#versions');
                })
            }

            return res;
        }, Data.defaultError);
    }

    loadVersions(currentCulture);

    Data.getJson({ url: '/sitetriks/pages/getlanguages', disableCache: true }).then(function (res) {
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
            url: url,
            content: pageContent,
            lang: currentLanguage
        }

        Data.postJson({ url: '/sitetriks/Pages/PublishPageWithContent', data: body }).then(function (res) {
            if (res.success) {
                location.replace('/sitetriks/pages');
            }
        }, Data.defaultError);
    });

    $('#btn-save-draft').on('click', function (evt) {
        saveDraft(function (res) {
            if (res.success) {
                location.replace('/sitetriks/pages');
            }
        });
    });

    function saveDraft(callback) {
        let body = {
            url: url,
            content: pageContent,
            lang: currentLanguage
        }

        Data.postJson({ url: '/sitetriks/Pages/SaveDraft', data: body }).then(function (res) {
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
        let lang = $('#languages').val();
        let body = {
            version: $('#versions').val(),
            url: url,
            lang: lang
        }

        Data.postJson({ url: '/sitetriks/Display/PreviewVersion', data: body }).then(function (res) {
            createPreveiwWindow(res);
        }, Data.defaultError);
    });

    $('#btn-revert-version').on('click', function (evt) {
        let lang = $('#languages').val();
        let body = {
            version: $('#versions').val(),
            url: url,
            lang: lang
        }

        Data.postJson({ url: '/sitetriks/pages/RevertVersion', data: body }).then(function (res) {
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
                isLocked: item.isLocked
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
