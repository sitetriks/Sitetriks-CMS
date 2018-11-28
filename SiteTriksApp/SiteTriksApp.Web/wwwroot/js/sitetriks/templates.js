/* globals Data, Utils, Loader, ModuleBuilder, Notifier, WidgetsDraggable */

function editTemplateContent(url, currentLanguage, currentVersion, currentCulture, currentTemplate, w) {
    // Layout handling
    Utils.loadjscssfile(`/css/sitetriks/st-lg-preview.css`, 'css');
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

                Utils.removejscssfile(`/css/sitetriks/st-${type}-preview.css`, 'css')
            });

            $target.addClass('selected');
            let type = $target.attr('data-type');
            Utils.loadjscssfile(`/css/sitetriks/st-${type}-preview.css`, 'css');
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

        WarningWindow.force();
        ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT).resolutions = ['xs', 'sm', 'md', 'lg'];
    });

    $('.show-content').on('click', function (ev) {
        $('#preview-layout').hide();
        $('#layout-properties').hide();
        $('#widgets-holder').show();
        $('#preview-container').show();

        // button styles 1.1
        $(this).parent().addClass('selected-option');
        $('.show-layout').parent().removeClass('selected-option');

        $('.resolution.selected').each(function (_, element) {
            let $el = $(element);
            $el.removeClass('selected');
            let type = $el.attr('data-type');

            Utils.removejscssfile(`/css/sitetriks/st-${type}-preview.css`, 'css')
        });

        $('.resolution[data-type="lg"]').trigger('click');
    });

    let layoutWidget = w.getPageContent().find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
    if (layoutWidget) {
        let layout = JSON.parse(layoutWidget.element);

        ModuleBuilder.initializeLayout('#preview-layout', layout.layoutRows, '.resolution', '#main-layout-options', function () { return $('.selected-option').attr('data-type') === 'layout' });

        $('.show-content').on('click', saveLayout.bind($('.show-content'), true));
    } else {
        console.error('Layout was not found!');
    }

    function saveLayout(sendToServer) {
        let layoutWidget = w.getPageContent().find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
        let layout = JSON.parse(layoutWidget.element);
        let l = ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT);
        layout.layoutRows = l.map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });

        ModuleBuilder.renderLayout(layout.layoutRows, $(`div.preview-placeholder[data-identifier="${layoutWidget.id}"]`).find('.layout-content').first(), l.deletedPlaceholders);
        WidgetsDraggable.init(w);

        layoutWidget.element = JSON.stringify(layout);
        if (layoutWidget.IsInherited) {
            layoutWidget.IsModifiedOnChild = true;
        }
    }

    document.addEventListener('checkForContent', function (e) {
        let placeholders = e.detail.placeholders;
        console.log('checking for updateds');

        for (let i = 0; i < placeholders.length; i += 1) {
            if (typeof w.getPageContent() !== 'undefined' && w.getPageContent().find(e => e.placeholder == placeholders[i])) {
                let $modal = $('#layout-delete-confirmation');
                $modal.modal('show');
                $modal.attr('data-caller-id', e.target.id)
                $modal.attr('data-type', e.detail.type);
                $modal.attr("data-rowindex", e.detail.rowIndex);
                return false;
            }
        }

        e.target.dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: e.detail.type, rowIndex: e.detail.rowIndex } }));
    });

    $("#delete-layout-content").on("click", function () {
        let $modal = $('#layout-delete-confirmation');

        let callerId = $modal.attr('data-caller-id')
        let type = $modal.attr('data-type');
        let rowIndex = $modal.attr("data-rowindex");

        document.getElementById(callerId).dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: type, rowIndex: rowIndex } }));
    });

    initStickyWidgets();

    $(document).on('updatePreview', {}, updatePreview.bind(document, url));
    updatePreview(url);
    let versions = new revisionControl(url, 'templates', $('#languages'), $('#versions'), $('#version-control'));
    versions.loadVersions(currentCulture, currentVersion);

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
        versions.loadVersions(lang);
    });

    function updatePreview(url) {
        var fullUrl = "/sitetriks/display/previewpage";
        let lang = $('#languages').val() || '';

        $('#preview-container').html('');
        Loader.show(true);

        Data.getJson({ url: fullUrl + '?url=' + url + '&lang=' + lang, disableCache: true }).then(function (res) {
            $('#preview-container').html(res.view);

            $(document).trigger("initCarousel");
            w.setPageContent(res.content);
            $('#alerts').html('');

            if (res.message) {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, isPermanent: true });
            }

            Loader.hide();

            $('#displayed-version').text(res.version);

            WidgetsDraggable.init(w);
        }, Data.defaultError);
    }

    $('#preview-container').on('click', '.lock-widget', function (ev) {
        var $caller = $(this);
        var status = $caller.prop('checked');
        var id = $caller.attr('data-id');

        let item = w.getPageContent().find(c => c.id === id);
        item.isLocked = !!status;
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

    $('#warning-modal-publish').on('click', publishTemplate);

    function publishTemplate() {
        saveLayout();
        let body = {
            url: url,
            content: w.getPageContent(),
            lang: currentLanguage
        };

        Data.postJson({ url: '/sitetriks/Templates/PublishPageWithContent', data: body }).then(function (res) {
            if (res.success) {
                window.onbeforeunload = null;
                location.replace('/sitetriks/templates');
            }
        }, Data.defaultError);
    }

    $('#btn-save-draft').on('click', function (evt) {
        saveDraft().then(function (res) {
            if (res.success) {
                location.replace('/sitetriks/templates');
            }
        });
    });

    function saveDraft() {
        let body = {
            url: url,
            content: w.getPageContent(),
            lang: currentLanguage
        };

        return Data.postJson({ url: '/sitetriks/Templates/SaveDraft', data: body });
    }

    $('#btn-preview-page').on('click', function (evt) {
        Loader.show('#fff');
        saveLayout();
        let body = {
            content: w.getPageContent(),
            template: currentTemplate,
            language: currentLanguage
        };

        return Data.postJson({ url: '/sitetriks/Display/Preview', data: body }).then(function (res) {
            Utils.openInNewTab(res);

            Loader.hide();
        }, Data.defaultError);
    });

    $('#btn-reset').on('click', updatePreview.bind(document, url));

    $('.btn-revision').on('click', versions.toggle);
    $('#btn-preview-version').on('click', versions.previewVersion);
    $('#btn-revert-version').on('click', versions.revertVersion);
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
            $notfier.text('Titles required and must be atleast 3 characters long!');
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