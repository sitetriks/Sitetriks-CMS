function createNews(validateNewsLinkUrl) {
    $(document).ready(function () {
            populateUrl('#title', '#url', validateUrlOnChange);

            $('#date-picker').datetimepicker({
                minDate: new Date()
            }).val('');

            textEditor.init('#news-en-content', '70%', 500);
            countSEOWords.apply($('#seo-words'));
        });

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

        var $urlFlied = $('#url');
        var $urlValidation = $('#url-validation');
        var $btnSubmit = $('#create-news');

        var timer = 0;
        $urlFlied.on('input', function (e) {
            return validateUrlOnChange(e);
        });

        function validateUrlOnChange(e) {
            if (timer) {
                clearTimeout(timer);
            }
            var url = $urlFlied.val();

            if (url.length >= 3) {
                timer = setTimeout(function () {
                    return validateUrl(validateNewsLinkUrl + '?url=' + url, $urlFlied, $urlValidation, $btnSubmit);
                }, 500);
                $urlValidation.text('');
            } else {
                $urlFlied.css("border", "1px solid red");
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
        $('#create-news-form').on('submit', function (evt) {
            let form = this;
            var url = $urlFlied.val();
            $notfier.text('');

            if (url.length < 3) {
                evt.preventDefault();
                $notfier.text('Please provide valid information in the required fields!');
                return false;
            }
            Loader.show(true);

            $btnSubmit.attr("disabled", true);
            $.ajax({
                method: 'GET',
                url: validateNewsLinkUrl + '?url=' + url,
                contentType: 'application/json',
                success: function success(res) {
                    if (res.success) {
                        $btnSubmit.attr("disabled", false);
                        return res;
                    } else {
                        $urlFlied.css("border", "1px solid red");
                        $urlValidation.text('Url is invalid or already in use!');
                        Loader.hide();
                    }
                }
            }).done(function (res) {
                if (res.success) {
                    $.ajax({
                        url: form.action,
                        type: form.method,
                        data: $(form).serialize(),
                        success: function (res) {
                            if (res.success) {
                                window.location.replace('/sitetriks/news');
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

function editNews(mlf, validateNewsLinkUrl, modelId, newsMlfUrl) {
    $(document).ready(function () {
        populateUrl('#title', '#url', validateUrlOnChange);

        //var mlf = @Html.Raw(Json.Serialize(Model.NewsEN.MultiLingualFieds));
        for (var key in mlf) {
            $('<option></option>', {
                value: key,
                text: key
            }).appendTo('#languages');
        }

        $('#languages').on('change', function (ev) {
            let lang = $(this).val();

            if (!lang) {
                $('#mlf-info').html('');
                $('#backend-info').show();
            } else {
                $('#backend-info').hide();

                let current = mlf[lang];

                $('#mlf-info').html(`<div class="ta-center"><h3>Multilingual Fields</h3></div>
                    <br/>
                    <div class="form-group row">
                        <label class="control-label col-md-2">Title(Multilingual)</label>
                        <div class="col-md-10">
                            <input class="form-control" data-lang="${lang}" data-name="Title" value="${current.Title}"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="control-label col-md-2">Content(Multilingual)</label>
                        <div class="col-md-10">
                            <textarea class="form-control" data-lang="${lang}" data-name="Content" id="content-area">${current.Content}</textarea>
                        </div>
                    </div>`);

                textEditor.remove('content-area');
                textEditor.init('#content-area', '80%', 500);
            }
        })

        textEditor.init('#news-en-content', '80%', 500);

        $('#date-picker').datetimepicker({
            minDate: new Date()
        }).val('');

        $('.date-picker-group span').on('click', function () {
            $('#date-picker').focus();
        })

        countSEOWords.apply($('#seo-words'));
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

        var $urlFlied = $('#url');
        var $urlValidation = $('#url-validation');
        var $btnSubmit = $('#submit-form');

        var timer = 0;
        $urlFlied.on('input', function (e) {
            return validateUrlOnChange(e);
        });

        function validateUrlOnChange(e) {
            if (timer) {
                clearTimeout(timer);
            }
            var url = $urlFlied.val();

            if (url.length >= 3) {
                timer = setTimeout(function () {
                    return validateUrl(validateNewsLinkUrl + '?url=' + url + '&id=' + modelId, $urlFlied, $urlValidation, $btnSubmit);
                }, 500);
                $urlValidation.text('');
            } else {
                $urlFlied.css("border", "1px solid red");
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
        $('#edit-news-form').on('submit', function (evt) {
            let form = this;

            //--------------------------------------------------------
            // multi lingual fields logic
            let lang = $('#languages').val();
            if (lang) {
                Loader.show('#fff');
                let $fields = $(`[data-lang="${lang}"]`);
                let body = { lang: lang, parentId: modelId };
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
                        Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'News updated!', status: 'success' })
                    } else {
                        Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: (res.message || 'News was not updated!'), status: 'danger' })
                    }

                    Loader.hide();
                });

                evt.preventDefault();
                return false;
            }

            //--------------------------------------------------------

            window.onbeforeunload = null;
            var url = $urlFlied.val();
            $notfier.text('');

            if (url.length < 3) {
                evt.preventDefault();
                $notfier.text('Please provide valid information in the required fields!');
                return false;
            }
            Loader.show(true);

            $btnSubmit.attr("disabled", true);
            $.ajax({
                method: 'GET',
                url: validateNewsLinkUrl + '?url=' + url + '&id=' + modelId,
                contentType: 'application/json',
                success: function success(res) {
                    if (res.success) {
                        $btnSubmit.attr("disabled", false);
                        return res;
                    } else {
                        $urlFlied.css("border", "1px solid red");
                        $urlValidation.text('Url is invalid or already in use!');
                        Loader.hide();
                        window.onbeforeunload = onUnload;
                    }
                }
            }).done(function (res) {
                if (res.success) {
                    $.ajax({
                        url: form.action,
                        type: form.method,
                        data: $(form).serialize(),
                        success: function (res) {
                            if (res.success) {
                                Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'News updated!', status: 'success' })
                            } else {
                                Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: res.message, status: 'danger' })
                                window.onbeforeunload = onUnload;
                            }

                            Loader.hide();
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
    });
}