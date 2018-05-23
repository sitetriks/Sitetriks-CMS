$(document).ready(function () {
    textEditor.init('#comment-area', 600, 300);
})

function initComments(id) {
    $('#btn-comment').on('click', function (ev) {
        Loader.show(true);

        let content = textEditor.getContent('comment-area');

        let body = {
            id: id,
            content: content
        };

        $.ajax({
            method: 'POST',
            url: '/sitetriks/comments/addcomment',
            data: JSON.stringify(body),
            contentType: 'application/json',
            success: function (res) {
                if (res.success) {
                    $('#comments-container').append(res.view);
                    textEditor.clear('comment-area');
                }

                Loader.hide();
            }
        });
    });

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
            .addClass('btn-save-edited-post btn btn-success')
            .text('Save')
            .appendTo($btncontainer);

        $(document.createElement('a'))
            .addClass('btn-cancel-edited-post btn btn-warning')
            .text('Cancel')
            .appendTo($btncontainer);

        $content.hide();
        $trigger.hide();

        textEditor.initWithoutImages('#edit-post-content', '', 300);
    });

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

        $.ajax({
            url: '/sitetriks/comments/editcomment',
            method: 'POST',
            data: JSON.stringify(body),
            contentType: 'application/json',
            success: function (res) {
                console.log(res);
                if (res.success) {
                    textEditor.remove('edit-post-content');
                    let $content = $trigger.parents('.edit-post-container').prev('.panel-body');
                    $content.prev('.panel-heading').find('.btn-edit-post').show();
                    $content.show();
                    $content.html(content);
                    $('.edit-post-container').remove();
                }
            },
            error: function (res) {
                console.log(res);
            }
        })
    });

    $('#comments-container').on('click', '.btn-delete-comment', function (event) {
        let $parent = $(this).parents('.cf_commentWrapper');
        let id = $parent.attr('data-id');

        Loader.show(true);

        $.ajax({
            method: 'POST',
            url: '/sitetriks/comments/deletecomment',
            contentType: 'application/json',
            data: JSON.stringify({ id: id }),
            success: function (res) {
                if (res.success) {
                    $parent.parent().remove();
                }

                Loader.hide();
            }
        })
    });
}