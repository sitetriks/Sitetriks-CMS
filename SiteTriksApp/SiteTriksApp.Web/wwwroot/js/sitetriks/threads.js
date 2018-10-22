function createThread() {
    $('#create-thread').on('submit', function (evt) {
        evt.preventDefault();

        hideError();

        var areFieldsValid = validateAllFields('', '#create-thread');

        if (areFieldsValid === false) {
            return;
        }

        $('#content').val(tinymce.activeEditor.getContent());

        var formData = new FormData(this);                

        Data.postForm({ url: this.action, formData: formData }).then(function (res) {
            if (res.success) {
                window.location.replace('/forum/threads/thread/' + res.threadId);
            } else {
                showError(res.message);                
            }
        });       

        return false;
    });
}

function editThread() {
    $('#edit-thread').on('submit', function (evt) {
        evt.preventDefault();

        hideError();

        var areFieldsValid = validateAllFields('', '#create-thread');

        if (areFieldsValid === false) {
            return;
        }

        $('#content').val(tinymce.activeEditor.getContent());

        var formData = new FormData(this);

        Data.postForm({ url: this.action, formData: formData }).then(function (res) {
            if (res.success) {
                window.location.replace('/forum/threads/thread/' + res.threadId);
            } else {
                showError(res.message);
            }
        });      

        return false;
    });
}

function initThread(modelId) {
    $('#comments-container').on('click', '.btn-edit-post', function (event) {
        let $contentOld = $('.edit-post-container').prev('.panel-body');
        if ($contentOld) {
            textEditor.remove('edit-post-content');
            $contentOld.prev('.panel-heading').find('.btn-edit-post').show();
            $contentOld.show();
            $('.edit-post-container').remove();
        }


        let $trigger = $(this);
        let $content = $trigger.parents('.panel-heading').next('.panel-body');

        let $editContainer = $(document.createElement('div'))
            .addClass('edit-post-container')
            .appendTo($content.parent());

        $(document.createElement('textarea'))
            .attr('id', 'edit-post-content')
            .text($content.html())
            .appendTo($editContainer);

        let $btncontainer = $(document.createElement('div'))
            .addClass('buttons-edit-container')
            .appendTo($editContainer);

        $(document.createElement('a'))
            .addClass('btn-save-edited-post btn btn-backend')
            .text('Save')
            .appendTo($btncontainer);

        $(document.createElement('a'))
            .addClass('btn-cancel-edited-post btn btn-backend')
            .text('Cancel')
            .appendTo($btncontainer);

        $content.hide();
        $trigger.hide();

        textEditor.initWithoutImages('#edit-post-content', '', 300);
    })

    $('#comments-container').on('click', '.btn-cancel-edited-post', function (event) {
        let $trigger = $(this);
        textEditor.remove('edit-post-content');
        let $content = $trigger.parents('.edit-post-container').prev('.panel-body');
        $content.prev('.panel-heading').find('.btn-edit-post').show();
        $content.show();
        $('.edit-post-container').remove();
    });

    $('#comments-container').on('click', '.btn-save-edited-post', function (event) {
        let $trigger = $(this);
        let id = $trigger.parents('.cf_commentWrapper').attr('data-id');

        let content = textEditor.getContent('edit-post-content');

        let body = {
            id: id,
            content: content
        }

        Data.postJson({ url: '/forum/posts/edit', data: body }).then(function (res) {
            console.log(res);
            if (res.success) {
                textEditor.remove('edit-post-content');
                let $content = $trigger.parents('.edit-post-container').prev('.panel-body');
                $content.prev('.panel-heading').find('.btn-edit-post').show();
                $content.show();
                $content.html(content);
                $('.edit-post-container').remove();
            }
        }, Data.defaultError);
    });

    $('#create-post').on('submit', function (evt) {
        evt.preventDefault();

        hideError();

        $('#content').val(tinymce.activeEditor.getContent());

        var areFieldsValid = validateAllFields('', '#create-post');

        if (areFieldsValid === false) {
            return;
        }

        var form = $(this)[0];
        var formData = new FormData(form);
        if (formData.set && {}.toString.call(formData.set) === '[object Function]') {
            formData.set('content', $('#content').val());
            formData.set('threadId', modelId);
        } else {
            formData.append('content', $('#content').val());
            formData.append('threadId', modelId);
        }

        Data.postForm({ url: '/forum/posts/create', formData: formData }).then(function (res) {
            if (res.success) {
                textEditor.clear('content');
                window.location.reload();
            } else {
                showError(res.message);
            }
        });

        return false;
    });
}