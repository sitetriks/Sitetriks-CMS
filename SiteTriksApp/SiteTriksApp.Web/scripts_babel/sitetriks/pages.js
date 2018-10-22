'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* globals Data, Tags, Multiselect */

function createPage(validateUrlUrl) {
    populateUrl('#title', '#url', validateUrlOnChange);

    Multiselect.SetupElement($('.multiselect-roles'));

    $('#date-picker').datetimepicker({
        defaultDate: '',
        minDate: new Date()
    });

    $('#date-picker').val('');
    countSEOWords.apply($('#seo-words'));

    Tags.init();

    $('.date-picker-group span').on('click', function () {
        $('#date-picker').focus();
    });

    $('#seo-words').on('input change', countSEOWords);

    function countSEOWords(ev) {
        var $trigger = $(this);
        var words = $trigger.val().split(',');
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

        $('.title-field').each(function (_, element) {
            if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) {
                return Validator.hasMinimumLength(val, 3);
            })) {
                flag = true;
            }
        });

        if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) {
            return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3);
        })) {
            flag = true;
        }

        if (flag) {
            evt.preventDefault();
            return false;
        }

        var dateVal = $('#date-picker').val();

        if (!!dateVal) {
            var dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan(new Date().addMinutes(10))) {
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
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                Validator.validate($urlField, 'Url is invalid or already in use!', function (val) {
                    return false;
                });

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
    Multiselect.SetupElement($('.multiselect-roles'));

    Data.getJson({ url: '/templates/page-multilingual.html' }).then(function (res) {
        for (var key in mlf) {
            $('<option></option>', {
                value: key,
                text: key
            }).appendTo('#languages');
        }

        var template = Handlebars.compile(res);

        $('#languages').on('change', function (ev) {
            var lang = $(this).val();

            if (!lang) {
                $('#mlf-info').html('');
                $('#backend-info').show();
            } else {
                $('#backend-info').hide();

                var current = mlf[lang];
                var html = template({ lang: lang, title: current.Title });

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
        var $trigger = $(this);
        var words = $trigger.val().split(',');
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

    $('.btn-save-and-exit').on('click', function (ev) {
        $('#edit-page-form').attr('data-exit', true);
    });

    var $notfier = $('#notifier');
    $('#edit-page-form').on('submit', function (evt) {
        var _this = this;
        var $target = $(this);
        var saveAndExit = $target.attr('data-exit');

        //--------------------------------------------------------
        // multi lingual fields logic
        var lang = $('#languages').val();
        if (lang) {
            Loader.show('#fff');

            var $fields = $('[data-lang="' + lang + '"]');
            var body = { lang: lang, parentId: pageId };
            $fields.each(function (index, element) {
                var name = $(element).attr('data-name');
                var value = $(element).val();
                body[name] = value;
            });

            Data.postJson({ url: mlfUrl, data: body }).then(function (res) {
                if (res.success) {
                    if (saveAndExit) {
                        window.location.replace('/sitetriks/pages');
                    }

                    mlf = res.mlf;
                    Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' });
                } else {
                    Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: 'Page was not updated!', status: 'danger' });
                    $target.removeAttr('data-exit');
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

        $('.title-field').each(function (_, element) {
            if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) {
                return Validator.hasMinimumLength(val, 3);
            })) {
                flag = true;
            }
        });

        if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) {
            return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3);
        })) {
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

        var dateVal = $('#date-picker').val();

        if (!!dateVal) {
            var dateToBePublished = new Date(dateVal);

            if (!dateToBePublished.laterThan(new Date().addMinutes(10))) {
                evt.preventDefault();
                $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
                return false;
            }
        }

        Loader.show(true);

        $btnSubmit.attr('disabled', true);
        Data.getJson({ url: validateUrlUrl + url + '&id=' + pageId }).then(function (res) {
            if (res.success) {
                $btnSubmit.attr('disabled', false);
                return Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                Validator.validate($urlField, res.message, function (val) {
                    return false;
                });
                window.onbeforeunload = onUnload;
                $target.removeAttr('data-exit');
                Loader.hide();
                return Promise.reject(res.message);
            }
        }, Data.defaultError).then(function (res) {
            if (res.success) {
                if (saveAndExit) {
                    window.location.replace('/sitetriks/pages');
                }

                Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' });
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
                Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: res.message, status: 'danger' });
                window.onbeforeunload = onUnload;
                $target.removeAttr('data-exit');
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

function editPageContent(url, currentLanguage, currentVersion, currentTemplate, w) {
    // Layout handling
    $('.resolution').on('click', function (ev) {
        var active = $('.selected-option').attr('data-type');
        var $target = $(this);

        if (active === 'content') {
            if ($target.hasClass('selected')) {
                return;
            }

            $('.resolution.selected').each(function (_, element) {
                var $el = $(element);
                $el.removeClass('selected');
                var type = $el.attr('data-type');

                Utils.removejscssfile('/css/sitetriks/st-' + type + '-preview.css', 'css');
            });

            $target.addClass('selected');
            var type = $target.attr('data-type');
            Utils.loadjscssfile('/css/sitetriks/st-' + type + '-preview.css', 'css');
        }
    });

    var $previewContainer = $('#preview-container');
    var $showContent = $('.show-content');
    var $showLayout = $('.show-layout');
    $showLayout.on('click', function (ev) {
        $('#preview-layout').show();
        $('#layout-properties').show();
        $('#widgets-holder').hide();
        $previewContainer.hide();

        // button styles 1.1
        $(this).parent().addClass('selected-option');
        $showContent.parent().removeClass('selected-option');

        //reset resolutions
        $('.resolution').each(function (_, element) {
            element.classList.add('selected');
        });
        ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT).resolutions = ['xs', 'sm', 'md', 'lg'];
    });

    $showContent.on('click', function (ev) {
        $('#preview-layout').hide();
        $('#layout-properties').hide();
        $('#widgets-holder').show();
        $previewContainer.show();

        // button styles 1.1
        $(this).parent().addClass('selected-option');
        $showLayout.parent().removeClass('selected-option');

        $('.resolution.selected').each(function (_, element) {
            var $el = $(element);
            $el.removeClass('selected');
            var type = $el.attr('data-type');

            Utils.removejscssfile('/css/sitetriks/st-' + type + '-preview.css', 'css');
        });

        $('.resolution[data-type="lg"]').trigger('click');
    });

    var layoutWidget = w.getPageContent().find(function (c) {
        return c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0;
    });
    if (layoutWidget) {
        var layout = JSON.parse(layoutWidget.element);

        ModuleBuilder.initializeLayout('#preview-layout', layout.layoutRows, '.resolution', '#main-layout-options', function () {
            return $('.selected-option').attr('data-type') === 'layout';
        });

        $showContent.on('click', saveLayout);
    } else {
        console.error('Layout was not found!');
    }

    function saveLayout() {
        var layoutWidget = w.getPageContent().find(function (c) {
            return c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0;
        });
        var layout = JSON.parse(layoutWidget.element);
        var l = ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT);
        layout.layoutRows = l.map(function (r) {
            return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass };
        });

        ModuleBuilder.renderLayout(layout.layoutRows, $('div.preview-placeholder[data-identifier="' + layoutWidget.id + '"]').find('.layout-content').first(), l.deletedPlaceholders);
        WidgetsDraggable.init(w);

        layoutWidget.element = JSON.stringify(layout);
        if (layoutWidget.IsInherited) {
            layoutWidget.IsModifiedOnChild = true;
        }
    }

    document.addEventListener('checkForContent', function (e) {
        var placeholders = e.detail.placeholders;

        var _loop = function _loop(i) {
            if (typeof w.getPageContent() !== 'undefined' && w.getPageContent().find(function (e) {
                return e.placeholder === placeholders[i];
            })) {
                var $modal = $('#layout-delete-confirmation');
                $modal.modal('show');
                $modal.attr('data-caller-id', e.target.id);
                $modal.attr('data-type', e.detail.type);
                $modal.attr('data-rowindex', e.detail.rowIndex);
                return {
                    v: false
                };
            }
        };

        for (var i = 0; i < placeholders.length; i += 1) {
            var _ret = _loop(i);

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        e.target.dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: e.detail.type, rowIndex: e.detail.rowIndex } }));
    });

    $('#delete-layout-content').on('click', function () {
        var $modal = $('#layout-delete-confirmation');

        var callerId = $modal.attr('data-caller-id');
        var type = $modal.attr('data-type');
        var rowIndex = $modal.attr('data-rowindex');

        document.getElementById(callerId).dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: type, rowIndex: rowIndex } }));
    });

    initStickyWidgets();

    $(document).on('updatePreview', {}, updatePreview.bind(document, url));
    updatePreview(url);
    var $languages = $('#languages');
    var versions = new revisionControl('pages', $languages, $('#versions'), $('#version-control'));
    versions.loadVersions(currentLanguage, currentVersion);

    Data.getJson({ url: '/sitetriks/pages/getlanguages', disableCache: true }).then(function (res) {
        if (res.success) {
            res.cultures.forEach(function (element) {
                var $option = $('<option></option>', {
                    value: element,
                    text: element
                });
                if (element === currentLanguage) {
                    $option.attr('selected', 'selected');
                }

                $option.appendTo($languages);
            });
        }
    }, Data.defaultError);

    $languages.on('change', function (ev) {
        updatePreview(url);
        currentLanguage = $languages.val();
        versions.loadVersions(currentLanguage);
    });

    function updatePreview(url) {
        var lang = $('#languages').val() || '';

        $previewContainer.html('');
        Loader.show(true);

        Data.getJson({ url: '/sitetriks/display/previewpage?url=' + url + '&lang=' + lang, disableCache: true }).then(function (res) {
            $previewContainer.html(res.view);

            $(document).trigger('initCarousel');
            w.setPageContent(res.content);
            $('#alerts').html('');

            if (res.message) {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, isPermanent: true });
            }

            Loader.hide();

            $('#displayed-version').text(res.version);

            WidgetsDraggable.init(w);

            var layoutWidget = w.getPageContent().find(function (c) {
                return c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0;
            });
            if (layoutWidget) {
                var _layout = JSON.parse(layoutWidget.element);

                ModuleBuilder.setInstance('#preview-layout', ModuleBuilder.LAYOUT, _layout.layoutRows);
                document.getElementById('preview-layout').dispatchEvent(new CustomEvent('rebuildLayout', { detail: { l: _layout.layoutRows } }));
            }
        }, Data.defaultError);
    }

    $previewContainer.on('click', '.lock-widget', function (ev) {
        var $caller = $(this);
        var status = $caller.prop('checked');
        var id = $caller.attr('data-id');

        var item = w.getPageContent().find(function (c) {
            return c.id === id;
        });
        item.isLocked = !!status;
    });

    $('#btn-publish').on('click', function (ev) {
        ev.preventDefault();
        Data.postJson({ url: '/sitetriks/Pages/PublishPageWithContent', data: prepareSave() }).then(redirectToPagesGridOnSuccess, Data.defaultError);
    });

    $('#btn-save-draft').on('click', saveDraft);

    function prepareSave() {
        saveLayout();
        return {
            url: url,
            content: w.getPageContent(),
            lang: $languages.val()
        };
    }

    function saveDraft(ev) {
        ev.preventDefault();
        return Data.postJson({ url: '/sitetriks/Pages/SaveDraft', data: prepareSave() }).then(redirectToPagesGridOnSuccess);
    }

    $('#btn-preview-page').on('click', function (ev) {
        Loader.show('#fff');
        saveLayout();
        var body = {
            content: w.getPageContent(),
            template: currentTemplate,
            language: $languages.val()
        };

        Data.postJson({ url: '/sitetriks/Display/Preview', data: body }).then(function (res) {
            Utils.openInNewTab(res);

            Loader.hide();
        }, Data.defaultError);
    });

    $('#btn-reset').on('click', updatePreview.bind(document, url));

    $('.btn-revision').on('click', versions.toggle);
    $('#btn-preview-version').on('click', versions.previewVersion);
    $('#btn-revert-version').on('click', versions.revertVersion);

    function redirectToPagesGridOnSuccess(res) {
        if (res.success) {
            location.replace('/sitetriks/pages');
        }
    }
}

function revisionControl(type, $languages, $versions, $versionControl) {
    function previewVersion(ev) {
        var body = {
            version: $versions.val(),
            url: url,
            lang: $languages.val()
        };

        Data.postJson({ url: '/sitetriks/Display/PreviewVersion', data: body }).then(function (res) {
            Utils.openInNewTab(res);
        }, Data.defaultError);
    }

    function revertVersion(ev) {
        var body = {
            version: $versions.val(),
            url: url,
            lang: $languages.val()
        };

        Data.postJson({ url: '/sitetriks/' + type + '/RevertVersion', data: body }).then(function (res) {
            location.reload(true);
        }, Data.defaultError);
    }

    function toggle(ev) {
        var $span = $(this).children('span');
        if ($span.hasClass('glyphicon-menu-right')) {
            $span.removeClass('glyphicon-menu-right');
            $span.addClass('glyphicon-menu-left');
            $versionControl.css('display', 'inline-block');
        } else {
            $span.removeClass('glyphicon-menu-left');
            $span.addClass('glyphicon-menu-right');
            $versionControl.css('display', 'none');
        }
    }

    function loadVersions(lang, selected) {
        $versions.children().remove();

        return Data.getJson({ url: '/sitetriks/' + type + '/getpageversions?url=' + url + '&lang=' + lang, disableCache: true }).then(function (res) {
            if (res.success) {
                res.versions.forEach(function (element) {
                    var $v = $('<option value="' + element + '">' + element + '</option>');
                    if (selected && element === +selected) {
                        $v.attr('selected', 'selected');
                    }

                    $versions.append($v);
                });
            }

            return res;
        }, Data.defaultError);
    }

    return {
        loadVersions: loadVersions,
        previewVersion: previewVersion,
        revertVersion: revertVersion,
        toggle: toggle
    };
}

function initStickyWidgets() {
    var $window = $(window);
    var itemTop = 0;
    $window.on('scroll resize', stickyWidgets);
    stickyWidgets();

    function stickyWidgets() {
        var scrollPosition = $window.scrollTop();
        var $widgetsList = $('.widgets-list');

        if (!itemTop) {
            itemTop = $widgetsList.offset().top;
        }

        if ($widgetsList && $widgetsList.length === 1) {
            if (scrollPosition > itemTop - 100) {
                $widgetsList.addClass('scrolling');
            } else {
                $widgetsList.removeClass('scrolling');
            }
        }
    }
}