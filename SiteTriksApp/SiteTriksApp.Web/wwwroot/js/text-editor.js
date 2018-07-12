var textEditor = function () {
    return {
        init: function init(selector, width, height, onInitCallback) {
            tinymce.init({
                selector: selector,
                verify_html: false,
                extended_valid_elements: 'span',
                extended_valid_elements: "div[class|id|style|span],span[class|id|style]",
                extended_valid_elements: "div[*],span[*]",
                theme: 'modern',
                mode: "textareas",
                force_br_newlines: false,
                force_p_newlines: false,
                width: width,
                height: height,
                plugins: ['advlist autolink codesample link image lists charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code insertdatetime nonbreaking', 'save table contextmenu directionality paste textcolor', 'directionality'],
                external_plugins: {
                    'codeHighl': '/js/code-highlight-tinymce-plugin.js',
                    'htmlBlocks': '/js/html-components-tinymce-plugin.js'
                },
                image_list: function image_list(success) {
                    $.get('/sitetriks/files/getallimages', function result(jsonResult) {
                        var images = jsonResult.images.map(function (a) {
                            return {
                                title: a.title,
                                value: a.value
                            };
                        });
                        success(images);
                    });
                },
                image_caption: true,
                image_advtab: true,
                file_picker_types: 'file image media',
                file_picker_callback: function (cb, value, meta) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    $('body').append(input);

                    // Note: In modern browsers input[type="file"] is functional without 
                    // even adding it to the DOM, but that might not be the case in some older
                    // or quirky browsers like IE, so you might want to add it to the DOM
                    // just in case, and visually hide it. And do not forget do remove it
                    // once you do not need it anymore.

                    input.onchange = function () {
                        var file = this.files[0];

                        var reader = new FileReader();
                        reader.onload = function () {
                            // Note: Now we need to register the blob in TinyMCEs image blob
                            // registry. In the next release this part hopefully won't be
                            // necessary, as we are looking to handle it internally.
                            var id = 'blobid' + (new Date()).getTime();
                            var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                            var base64 = reader.result.split(',')[1];
                            var blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);

                            // call the callback and populate the Title field with the file name
                            cb(blobInfo.blobUri(), { title: file.name });
                        };
                        reader.readAsDataURL(file);
                    };

                    input.click();
                },
                toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor code | codeHighl | fontsizeselect | fontselect | custombutton | ltr rtl',
                fontsize_formats: '8px 10px 12px 14px 18px 20px 22px 24px 36px 48px',
                setup: function (editor) {
                    editor.addButton('custombutton', {
                        type: 'menubutton',
                        text: 'Custom',
                        icon: false,
                        menu: [{
                            text: 'Logout link',
                            onclick: function () {
                                editor.insertContent('<a href="/logout">Logout</a>');
                            }
                        }]
                    });

                    editor.on('init', function (ev) {
                        if (onInitCallback && {}.toString.call(onInitCallback) === '[object Function]') {
                            onInitCallback();
                        }
                    });
                }
            });
        },
        initWithoutImages: function init(selector, width, height, onInitCallback) {
            tinymce.init({
                verify_html: false,
                selector: selector,
                extended_valid_elements: 'span',
                extended_valid_elements: "div[class|id|style|span],span[class|id|style]",
                extended_valid_elements: "div[*],span[*]",
                theme: 'modern',
                mode: "textareas",
                force_br_newlines: false,
                force_p_newlines: false,
                width: width,
                height: height,
                plugins: ['advlist autolink link image lists charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code insertdatetime nonbreaking', 'save table contextmenu directionality paste textcolor', 'directionality'],
                image_caption: true,
                image_advtab: true,
                file_picker_types: 'file image media',
                file_picker_callback: function (cb, value, meta) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    $('body').append(input);

                    // Note: In modern browsers input[type="file"] is functional without 
                    // even adding it to the DOM, but that might not be the case in some older
                    // or quirky browsers like IE, so you might want to add it to the DOM
                    // just in case, and visually hide it. And do not forget do remove it
                    // once you do not need it anymore.

                    input.onchange = function () {
                        var file = this.files[0];

                        var reader = new FileReader();
                        reader.onload = function () {
                            // Note: Now we need to register the blob in TinyMCEs image blob
                            // registry. In the next release this part hopefully won't be
                            // necessary, as we are looking to handle it internally.
                            var id = 'blobid' + (new Date()).getTime();
                            var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                            var base64 = reader.result.split(',')[1];
                            var blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);

                            // call the callback and populate the Title field with the file name
                            cb(blobInfo.blobUri(), { title: file.name });
                        };
                        reader.readAsDataURL(file);
                    };

                    input.click();
                },
                toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor code | fontsizeselect | fontselect | custombutton | ltr rtl',
                fontsize_formats: '8px 10px 12px 14px 18px 20px 22px 24px 36px 48px',
                setup: function (editor) {
                    editor.addButton('custombutton', {
                        type: 'menubutton',
                        text: 'Custom',
                        icon: false,
                        menu: [{
                            text: 'Logout link',
                            onclick: function () {
                                editor.insertContent('<a href="/logout">Logout</a>');
                            }
                        }]
                    });

                    editor.on('init', function (ev) {
                        if (onInitCallback && {}.toString.call(onInitCallback) === '[object Function]') {
                            onInitCallback();
                        }
                    });
                }
            });
        },
        // selector must be Id
        getContent: function (selector) {
            return tinymce.get(selector).getContent();
        },
        remove: function (selector) {
            let editor = tinymce.get(selector);
            if (editor) {
                editor.remove();
            }
        },
        removeAll: function () {
            tinymce.remove();
        },
        clear: function (selector) {
            let editor = tinymce.get(selector);
            if (editor) {
                editor.setContent('');
            }
        }
    };
}();

var fix = function () {
    $(document).on('focusin', function (e) {
        if ($(e.target).closest(".mce-window").length) {
            e.stopImmediatePropagation();
        }
    });
}