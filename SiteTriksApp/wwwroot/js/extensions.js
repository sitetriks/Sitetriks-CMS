'use strict';

function initExtensions() {
    $('body').on('change', '.activate-module', function (ev) {
        var isActive = this.checked;
        var name = $(this).attr('data-name');

        Loader.show('#fff');
        Data.postJson({ url: '/sitetriks/extensions/UpdateModule', data: { isActive: isActive, name: name } }).then(function (res) {
            if (res.success) {
                if (res.doNotRefresh) {
                    Loader.hide();
                    return;
                }

                handleAppRestart({ url: '/sitetriks/extensions', timeout: 2000 });

                //window.location.reload(true);
            } else {
                Loader.hide();
                Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                $(ev.target).bootstrapToggle('off');
            }
        }, Data.defaultError);
    });

    $('.drop-info-btn').on('click', function (ev) {
        $('#input-files').trigger('click');
    });

    $('#input-files').on('change', function (ev) {
        upload(this.files);
    });

    function upload(files) {
        var formData = new FormData();

        for (var i = 0; i < files.length; i++) {
            formData.append('files', files[i], files[i].name);
        }

        Loader.show('#fff');
        Data.postForm({ url: '/sitetriks/extensions/index', formData: formData }).then(function (res) {
            var $extensions = $('.extensions-installed');

            if (res.success) {
                for (var _i = 0; _i < res.installed.length; _i += 1) {
                    $extensions.append('<label class="module-name clearfix">' + res.installed[_i].displayName + ' <input class="activate-module" type="checkbox" data-size="mini" data-onstyle="success" data-toggle="toggle"  data-name="' + res.installed[_i].name + '" /></label>');
                }

                $('.activate-module').bootstrapToggle();
            } else {
                Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
            }

            Loader.hide();
        }, Data.defaultError);
    };

    $('#drop-area').on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $('#drop-area').on('dragenter', function (e) {
        $(this).addClass('drop-highlight');
        e.preventDefault();
        e.stopPropagation();
    });

    $('#drop-area').on('dragleave', function (e) {
        $(this).removeClass('drop-highlight');
        e.preventDefault();
        e.stopPropagation();
    });

    $('#drop-area').on('drop', function (e) {
        if (e.originalEvent.dataTransfer) {
            if (e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();

                upload(e.originalEvent.dataTransfer.files);
            }
        }
    });

    $('.upload-tab').on('click', function (ev) {
        $('.upload-tab.active').removeClass('active');
        $(this).addClass('active');
    });
}