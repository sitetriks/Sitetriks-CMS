var News = (function () {
    function createNews(validateNewsLinkUrl, mediator, logger) {
        let $modal = $('#file-upload-modal');
        let $container = $modal.find('.file-handler-wrapper');
        let fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

        let $seoWordsCounter = $('#seo-words-counter');
        let $urlFlied = $('#url');
        let $urlValidation = $('#url-validation');
        let $btnSubmit = $('#create-news');
        let $dateTimePicker = $('#date-picker');
        let $mainImageInput = $('#en-main-image');
        let $imagesInput = $('#en-images');
        let common = newsCommon(mediator, $urlFlied, $urlValidation, $btnSubmit, $dateTimePicker, $seoWordsCounter, $mainImageInput, $imagesInput, validateNewsLinkUrl);

        //------------------------------------------------------------------------------------------------------
        bindEvents();

        common.countSEOWords.apply($('#seo-words'));
        populateUrl('#title', '#url', common.validateUrlOnChange);

        $dateTimePicker.datetimepicker({
            minDate: new Date()
        }).val('');

        //------------------------------------------------------------------------------------------------------
        // event handlers

        function submitCreateNewsForm(evt) {
            let form = this;
            var url = $urlFlied.val();

            if (url.length < 3) {
                evt.preventDefault();
                mediator.dispatch('alert', { selector: '#alerts', message: 'Please provide valid information in the required fields!', status: 'danger' });
                return false;
            }
            Loader.show(true);

            $btnSubmit.attr("disabled", true);
            Data.getJson({ url: validateNewsLinkUrl + '?url=' + url }).then(function success(res) {
                if (res.success) {
                    $btnSubmit.attr("disabled", false);
                    return res;
                } else {
                    $urlFlied.css("border", "1px solid red");
                    $urlValidation.text('Url is invalid or already in use!');
                    Loader.hide();
                }

                return res;
            }, Data.defaultError).then(function (res) {
                if (res.success) {
                    return Data.postForm({ url: form.action, formData: new FormData(form) })
                } else {
                    mediator.dispatch('alert', { selector: '#alerts', message: res.message, status: 'danger' });
                }

                $btnSubmit.attr("disabled", false);
            }, Data.defaultError).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/news');
                } else {
                    mediator.dispatch('alert', { selector: '#alerts', message: res.message, status: 'danger' });
                    Loader.hide();
                }
            }, Data.defaultError);

            evt.preventDefault();
            return false;
        }

        //------------------------------------------------------------------------------------------------------
        function bindEvents() {
            $('#create-news-form').on('submit', submitCreateNewsForm);
            $('.title-field').on('input', common.validateTitle);
            $urlFlied.on('input', common.validateUrlOnChange);
            $('#seo-words').on('input change', common.countSEOWords);
            $('#btn-images').on('click', common.selectImages);
            $('#btn-main-image').on('click', common.selectMainImage);
            $('.date-picker-group span').on('click', common.openDatePicker);
            $(document).on('click', '.news-listed-image-delete', common.removeImage);

            mediator.on('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'CreateNews.cshtml');
            mediator.on('filesSelected', common.selectFiles, 'displaySelectedFiles', 'CreateNews.cshtml');
            mediator.on('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            textEditor.init('#news-en-content', '70%', 500);
        }

        function dispose() {
            $('#create-news-form').off('submit', submitCreateNewsForm);
            $('.title-field').off('input', common.validateTitle);
            $urlFlied.off('input', common.validateUrlOnChange);
            $('#seo-words').off('input change', common.countSEOWords);
            $('#btn-images').off('click', common.selectImages);
            $('#btn-main-image').off('click', common.selectMainImage);
            $('.date-picker-group span').off('click', common.openDatePicker);
            $(document).off('click', '.news-listed-image-delete', common.removeImage);

            mediator.off('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'CreateNews.cshtml');
            mediator.off('filesSelected', common.selectFiles, 'displaySelectedFiles', 'CreateNews.cshtml');
            mediator.off('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            textEditor.remove('#news-en-content');

            fileHandler.dispose();
        }
    }

    function editNews(mlf, validateNewsLinkUrl, newsId, newsMlfUrl, mediator, logger) {

        let $modal = $('#file-upload-modal');
        let $container = $modal.find('.file-handler-wrapper');
        let fileHandler = FileHandler($container, ['Upload', 'Select'], '', mediator, logger, true);

        var $urlFlied = $('#url');
        var $urlValidation = $('#url-validation');
        var $btnSubmit = $('#submit-form');
        let $dateTimePicker = $('#date-picker');
        let $languages = $('#languages');
        let $mlfInfo = $('#mlf-info');
        let $backendInfo = $('#backend-info');
        let $seoWordsCounter = $('#seo-words-counter');
        let $mainImageInput = $('#en-main-image');
        let $imagesInput = $('#en-images');
        let common = newsCommon(mediator, $urlFlied, $urlValidation, $btnSubmit, $dateTimePicker, $seoWordsCounter, $mainImageInput, $imagesInput, validateNewsLinkUrl, newsId);

        //------------------------------------------------------------------------------------------------------
        let templatesCache = {};
        let templates = [{ name: 'news-multilingual', url: '/templates/news-multilingual.html' }];
        Utils.loadHandlebarsTemplates(templatesCache, templates).then(function (res) {
            bindEvents();

            common.countSEOWords.apply($('#seo-words'));

            $dateTimePicker.datetimepicker({
                minDate: new Date()
            }).val('');

            populateUrl('#title', '#url', common.validateUrlOnChange);
        }, Data.defaultError);

        //------------------------------------------------------------------------------------------------------
        // event handlers

        function displayMLF(ev) {
            let lang = $(ev.target).val();

            if (!lang) {
                $mlfInfo.html('');
                $backendInfo.show();
            } else {
                $backendInfo.hide();

                let current = mlf[lang];
                let template = templatesCache['news-multilingual'];
                $mlfInfo.html(template({ lang, title: current.Title, content: current.Content }));

                textEditor.remove('content-area');
                textEditor.init('#content-area', '80%', 500);
            }
        }

        function submitEditNewsForm(evt) {
            let form = this;

            //--------------------------------------------------------
            // multi lingual fields logic
            let lang = $languages.val();
            if (lang) {
                Loader.show('#fff');
                let $fields = $(`[data-lang="${lang}"]`);
                let body = { lang: lang, parentId: newsId };
                $fields.each(function (index, element) {
                    let name = $(element).attr('data-name');
                    if (name === 'Content') {
                        body[name] = textEditor.getContent($(element).attr('id'));
                    } else {
                        body[name] = $(element).val();
                    }
                });

                Data.postJson({ url: newsMlfUrl, data: body }).then(function (res) {
                    if (res.success) {
                        mlf = res.mlf;
                        mediator.dispatch('alert', { selector: '#alerts', title: 'Success', message: 'News updated!', status: 'success' });
                    } else {
                        mediator.dispatch('alert', { selector: '#alerts', title: 'Failed', message: (res.message || 'News was not updated!'), status: 'daneger' });
                    }

                    Loader.hide();
                });

                evt.preventDefault();
                return false;
            }

            //--------------------------------------------------------

            window.onbeforeunload = null;
            var url = $urlFlied.val();

            if (url.length < 3) {
                evt.preventDefault();
                mediator.dispatch('alert', { selector: '#alerts', message: res.message, status: 'daneger' });
                return false;
            }
            Loader.show(true);

            $btnSubmit.attr("disabled", true);
            Data.getJson({ url: validateNewsLinkUrl + '?url=' + url + '&id=' + newsId }).then(function success(res) {
                if (res.success) {
                    $btnSubmit.attr("disabled", false);
                    return res;
                } else {
                    $urlFlied.css("border", "1px solid red");
                    $urlValidation.text('Url is invalid or already in use!');
                    Loader.hide();
                    window.onbeforeunload = onUnload;
                }
            }, Data.defaultError).then(function (res) {
                if (res.success) {
                    return Data.postForm({ url: form.action, formData: new FormData(form) })
                } else {
                    mediator.dispatch('alert', { selector: '#alerts', message: res.message, status: 'daneger' });
                }
                $btnSubmit.attr("disabled", false);
            }, Data.defaultError).then(function (res) {
                if (res.success) {
                    let url = $urlFlied.val();
                    let pageUrl = document.location.href;
                    let newUrl = Utils.updateQueryStringParameter(pageUrl, 'url', url);
                    if (history.pushState) {
                        window.history.replaceState({}, '', newUrl);
                    } else {
                        window.location.href = newUrl;
                    }

                    mediator.dispatch('alert', { selector: '#alerts', title: 'Success', message: 'News updated!', status: 'success' });
                } else {
                    mediator.dispatch('alert', { selector: '#alerts', title: 'Failed', message: res.message, status: 'danger' });
                    window.onbeforeunload = onUnload;
                }

                Loader.hide();
                return res;
            }, Data.defaultError);

            evt.preventDefault();
            return false;
        }

        //------------------------------------------------------------------------------------------------------
        function bindEvents() {
            $('#edit-news-form').on('submit', submitEditNewsForm);
            $('#btn-images').on('click', common.selectImages);
            $('#btn-main-image').on('click', common.selectMainImage);
            $('.title-field').on('input', common.validateTitle);
            $urlFlied.on('input', common.validateUrlOnChange);
            $('#seo-words').on('input change', common.countSEOWords);
            $('.date-picker-group span').on('click', common.openDatePicker);
            $(document).on('click', '.news-listed-image-delete', common.removeImage);
            $languages.on('change', displayMLF);

            mediator.on('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'EditNews.cshtml');
            mediator.on('filesSelected', common.selectFiles, 'displaySelectedFiles', 'EditNews.cshtml');
            mediator.on('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            textEditor.init('#news-en-content', '80%', 500);
        }

        function dispose() {
            $('#edit-news-form').off('submit', submitEditNewsForm);
            $('#btn-images').off('click', common.selectImages);
            $('#btn-main-image').off('click', common.selectMainImage);
            $('.title-field').off('input', common.validateTitle);
            $urlFlied.off('input', common.validateUrlOnChange);
            $('#seo-words').off('input change', common.countSEOWords);
            $('.date-picker-group span').off('click', common.openDatePicker);
            $(document).off('click', '.news-listed-image-delete', common.removeImage);
            $languages.off('change', displayMLF);

            mediator.on('filesUploaded', common.selectFiles, 'displayUploadedFiles', 'EditNews.cshtml');
            mediator.on('filesSelected', common.selectFiles, 'displaySelectedFiles', 'EditNews.cshtml');
            mediator.off('alert', Notifier.createAlert, 'createAlert', 'Notifier');

            textEditor.remove('news-en-content');
            textEditor.remove('content-area');
        }
    }

    function newsCommon(mediator, $urlFlied, $urlValidation, $btnSubmit, $dateTimePicker, $seoWordsCounter, $mainImageInput, $imagesInput, validateNewsLinkUrl, newsId) {
        function selectMainImage(ev) {
            mediator.dispatch('fileHandlerTypeChange', { type: 'single', requester: 'main-image' });
        }

        function selectImages(ev) {
            mediator.dispatch('fileHandlerTypeChange', { type: 'multiple', requester: 'images' });
        }

        function validateTitle(e) {
            var $target = $(e.target);
            if ($target.val().length >= 3) {
                $target.css("border", "1px solid green");
                $target.siblings("strong").children("span").text('');
            } else {
                $target.css("border", "1px solid red");
                $target.siblings("strong").children("span").text('Tittle must be atleast 3 symbols!');
            }
        }

        let timer = 0;
        function validateUrlOnChange(e) {
            if (timer) {
                clearTimeout(timer);
            }
            var url = $urlFlied.val();

            if (url.length >= 3) {
                timer = setTimeout(function () {
                    return validateUrl(validateNewsLinkUrl + '?url=' + url + (newsId ? '&id=' + newsId : ''), $urlFlied, $urlValidation, $btnSubmit);
                }, 500);
                $urlValidation.text('');
            } else {
                $urlFlied.css("border", "1px solid red");
                $urlValidation.text('Url must be atleast 3 symbols!');
            }
        }


        function selectFiles(data) {

            if (data.requester === 'images') {
                let currentImages = $imagesInput.val();
                console.log(currentImages);
                // if (currentImages) {
                //    if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
                //        currentImages += ';';
                //    }

                //    $imagesInput.val(currentImages + data.fileIds.join(';'));
                //} else {
                //    $imagesInput.val(data.fileIds.join(';'));
                //}

                $imagesInput.val('');

                let imagesInputId = $imagesInput.attr('id');
                let $mainContainer = $(`#${imagesInputId}-container`);
                $mainContainer.html('');

                for (let i = 0; i < data.fileIds.length; i += 1) {
                    createImageView(imagesInputId, data.fileIds[i], $mainContainer);
                }
            } else if (data.requester === 'main-image') {
                console.log(data.fileIds[0])

                $mainImageInput.val(data.fileIds[0]);
                let mainImgInputId = $mainImageInput.attr('id');
                console.log(mainImgInputId);
                $(`#${mainImgInputId}-container`).html('');
                createImageView(mainImgInputId, data.fileIds[0], $(`#${mainImgInputId}-container`));
            }

            //  $modal.modal('hide');
        }

        function openDatePicker() {
            $dateTimePicker.focus();
        }

        function countSEOWords(ev) {
            let $trigger = $(this);
            let words = $trigger.val().split(',');
            if (words.length === 1 && words[0].trim().length === 0) {
                $seoWordsCounter.text('');
            } else {
                $seoWordsCounter.text('Words: ' + words.length);
            }
        }

        function removeImage(ev) {
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
            selectMainImage,
            selectImages,
            validateTitle,
            validateUrlOnChange,
            selectFiles,
            openDatePicker,
            countSEOWords,
            createImageView,
            removeImage
        }
    }

    return {
        createNews,
        editNews
    }
})();
