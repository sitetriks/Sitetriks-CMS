/* globals tinymce */
import { WarningWindow } from './modules/warning-window.js';

var textEditor = (function () {
    function initInstaceCallback(editor) {
        if (typeof WarningWindow !== 'undefined' && WarningWindow.force) {
            editor.on('NodeChange', function (e) {
                WarningWindow.force();
            });
        }
    }

    function setupEditor(editor, onInitCallback) {
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

        // enable auto-sync with the textarea
        editor.on('change', function () {
            tinymce.triggerSave();
        });
    }

    function image_list(success) {
        $.get('/sitetriks/files/getallimages', function (res) {
            success(res.images);
        });
    }

    function file_picker_callback(cb, value, meta) {
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
    }

    function createBaseConfig(selector, width, height, onInitCallback) {
        return {
            selector: selector,
            verify_html: false,
            extended_valid_elements: 'span',
            extended_valid_elements: 'div[class|id|style|span],span[class|id|style]',
            extended_valid_elements: 'div[*],span[*]',
            theme: 'modern',
            mode: 'textareas',
            force_br_newlines: false,
            force_p_newlines: false,
            forced_root_block: '',
            width: width,
            height: height,
            plugins: ['advlist autolink codesample link image lists charmap print preview hr anchor pagebreak fullscreen',
                'searchreplace wordcount visualblocks visualchars code insertdatetime nonbreaking', 'save table contextmenu directionality paste textcolor'],
            external_plugins: {
                'codeHighl': '/SiteTriks/StaticFiles/plugins/tinymce/code-highlight-tinymce-plugin.js',
                'htmlBlocks': '/SiteTriks/StaticFiles/plugins/tinymce/html-components-tinymce-plugin.js'
            },
            browser_spellcheck: true,
            contextmenu: false,
            paste_as_text: true,
            image_caption: true,
            image_advtab: true,
            file_picker_types: 'file image media',
            file_picker_callback: file_picker_callback,
            toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor code | codeHighl | fontsizeselect | fontselect | custombutton',
            fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 22px 24px 36px 48px',
            setup: editor => setupEditor(editor, onInitCallback),
            init_instance_callback: initInstaceCallback
        };
    }

    function init(selector, width, height, onInitCallback) {
        let cfg = createBaseConfig(selector, width, height, onInitCallback);
        cfg.image_list = image_list;
        tinymce.init(cfg);
    }

    function initWithoutImages(selector, width, height, onInitCallback) {
        tinymce.init(createBaseConfig(selector, width, height, onInitCallback));
    }

    function remove(selector) {
        let editor = tinymce.get(selector);
        if (editor) {
            editor.remove();
        }
    }

    function removeAll() {
        tinymce.remove();
    }

    function clear(selector) {
        let editor = tinymce.get(selector);
        if (editor) {
            editor.setContent('');
        }
    }

    // selector must be Id
    function getContent(id) {
        return tinymce.get(id).getContent();
    }

    function addEditor(id, width, height) {
        if (!id) {
            console.warn('Id for the text editor must be specified!');

            return;
        }
        width = width || 600;
        height = height || 300;
        if (id[0] === '#') {
            textEditor.remove(id.substring(1));
        } else {
            textEditor.remove(id);
        }

        textEditor.init(id, width, height);
    }

    return {
        init,
        initWithoutImages,
        getContent,
        remove,
        removeAll,
        clear,
        addEditor
    };
})();

export { textEditor };
