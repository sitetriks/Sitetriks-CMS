"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var textEditor = function () {
    return {
        init: function init(selector, width, height, onInitCallback) {
            var _tinymce$init;

            tinymce.init((_tinymce$init = {
                selector: selector,
                verify_html: false,
                extended_valid_elements: 'span'
            }, _defineProperty(_tinymce$init, "extended_valid_elements", "div[class|id|style|span],span[class|id|style]"), _defineProperty(_tinymce$init, "extended_valid_elements", "div[*],span[*]"), _defineProperty(_tinymce$init, "theme", 'modern'), _defineProperty(_tinymce$init, "mode", "textareas"), _defineProperty(_tinymce$init, "force_br_newlines", false), _defineProperty(_tinymce$init, "force_p_newlines", false), _defineProperty(_tinymce$init, "width", width), _defineProperty(_tinymce$init, "height", height), _defineProperty(_tinymce$init, "plugins", ['advlist autolink codesample link image lists charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code insertdatetime nonbreaking', 'save table contextmenu directionality paste textcolor', 'directionality']), _defineProperty(_tinymce$init, "external_plugins", {
                'codeHighl': '/js/code-highlight-tinymce-plugin.js',
                'htmlBlocks': '/js/html-components-tinymce-plugin.js'
            }), _defineProperty(_tinymce$init, "image_list", function image_list(success) {
                $.get('/sitetriks/files/getallimages', function result(jsonResult) {
                    var images = jsonResult.images.map(function (a) {
                        return {
                            title: a.title,
                            value: a.value
                        };
                    });
                    success(images);
                });
            }), _defineProperty(_tinymce$init, "image_caption", true), _defineProperty(_tinymce$init, "image_advtab", true), _defineProperty(_tinymce$init, "file_picker_types", 'file image media'), _defineProperty(_tinymce$init, "file_picker_callback", function file_picker_callback(cb, value, meta) {
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
                        var id = 'blobid' + new Date().getTime();
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
            }), _defineProperty(_tinymce$init, "toolbar", 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor code | codeHighl | fontsizeselect | fontselect | custombutton | ltr rtl'), _defineProperty(_tinymce$init, "fontsize_formats", '8px 10px 12px 14px 18px 20px 22px 24px 36px 48px'), _defineProperty(_tinymce$init, "setup", function setup(editor) {
                editor.addButton('custombutton', {
                    type: 'menubutton',
                    text: 'Custom',
                    icon: false,
                    menu: [{
                        text: 'Logout link',
                        onclick: function onclick() {
                            editor.insertContent('<a href="/logout">Logout</a>');
                        }
                    }]
                });

                editor.on('init', function (ev) {
                    if (onInitCallback && {}.toString.call(onInitCallback) === '[object Function]') {
                        onInitCallback();
                    }
                });
            }), _tinymce$init));
        },
        initWithoutImages: function init(selector, width, height, onInitCallback) {
            var _tinymce$init2;

            tinymce.init((_tinymce$init2 = {
                verify_html: false,
                selector: selector,
                extended_valid_elements: 'span'
            }, _defineProperty(_tinymce$init2, "extended_valid_elements", "div[class|id|style|span],span[class|id|style]"), _defineProperty(_tinymce$init2, "extended_valid_elements", "div[*],span[*]"), _defineProperty(_tinymce$init2, "theme", 'modern'), _defineProperty(_tinymce$init2, "mode", "textareas"), _defineProperty(_tinymce$init2, "force_br_newlines", false), _defineProperty(_tinymce$init2, "force_p_newlines", false), _defineProperty(_tinymce$init2, "width", width), _defineProperty(_tinymce$init2, "height", height), _defineProperty(_tinymce$init2, "plugins", ['advlist autolink link image lists charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code insertdatetime nonbreaking', 'save table contextmenu directionality paste textcolor', 'directionality']), _defineProperty(_tinymce$init2, "image_caption", true), _defineProperty(_tinymce$init2, "image_advtab", true), _defineProperty(_tinymce$init2, "file_picker_types", 'file image media'), _defineProperty(_tinymce$init2, "file_picker_callback", function file_picker_callback(cb, value, meta) {
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
                        var id = 'blobid' + new Date().getTime();
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
            }), _defineProperty(_tinymce$init2, "toolbar", 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor code | fontsizeselect | fontselect | custombutton | ltr rtl'), _defineProperty(_tinymce$init2, "fontsize_formats", '8px 10px 12px 14px 18px 20px 22px 24px 36px 48px'), _defineProperty(_tinymce$init2, "setup", function setup(editor) {
                editor.addButton('custombutton', {
                    type: 'menubutton',
                    text: 'Custom',
                    icon: false,
                    menu: [{
                        text: 'Logout link',
                        onclick: function onclick() {
                            editor.insertContent('<a href="/logout">Logout</a>');
                        }
                    }]
                });

                editor.on('init', function (ev) {
                    if (onInitCallback && {}.toString.call(onInitCallback) === '[object Function]') {
                        onInitCallback();
                    }
                });
            }), _tinymce$init2));
        },
        // selector must be Id
        getContent: function getContent(selector) {
            return tinymce.get(selector).getContent();
        },
        remove: function remove(selector) {
            var editor = tinymce.get(selector);
            if (editor) {
                editor.remove();
            }
        },
        removeAll: function removeAll() {
            tinymce.remove();
        },
        clear: function clear(selector) {
            var editor = tinymce.get(selector);
            if (editor) {
                editor.setContent('');
            }
        }
    };
}();

var fix = function fix() {
    $(document).on('focusin', function (e) {
        if ($(e.target).closest(".mce-window").length) {
            e.stopImmediatePropagation();
        }
    });
};