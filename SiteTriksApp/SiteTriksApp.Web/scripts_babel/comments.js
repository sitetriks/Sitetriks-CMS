'use strict';

$(document).ready(function () {
    textEditor.init('#comment-area', 600, 300);
});

function initComments(id) {
    $('#btn-comment').on('click', function (ev) {
        Loader.show(true);

        var content = textEditor.getContent('comment-area');

        var body = {
            id: id,
            content: content
        };

        $.ajax({
            method: 'POST',
            url: '/sitetriks/comments/addcomment',
            data: JSON.stringify(body),
            contentType: 'application/json',
            success: function success(res) {
                if (res.success) {
                    $('#comments-container').append(res.view);
                    textEditor.clear('comment-area');
                }

                Loader.hide();
            }
        });
    });

    $('#comments-container').on('click', '.btn-edit-post', function (event) {
        var $contentOld = $('.edit-post-container').prev('.panel-body');
        if ($contentOld) {
            textEditor.remove('edit-post-content');
            $contentOld.prev('.panel-heading').find('.btn-edit-post').show();
            $contentOld.show();
            $('.edit-post-container').remove();
        }

        var $trigger = $(this);
        var $content = $trigger.parents('.panel-heading').next('.panel-body');

        var $editContainer = $(document.createElement('div')).addClass('edit-post-container').appendTo($content.parent());

        $(document.createElement('textarea')).attr('id', 'edit-post-content').text($content.html()).appendTo($editContainer);

        var $btncontainer = $(document.createElement('div')).addClass('buttons-edit-container').appendTo($editContainer);

        $(document.createElement('a')).addClass('btn-save-edited-post btn btn-success').text('Save').appendTo($btncontainer);

        $(document.createElement('a')).addClass('btn-cancel-edited-post btn btn-warning').text('Cancel').appendTo($btncontainer);

        $content.hide();
        $trigger.hide();

        textEditor.initWithoutImages('#edit-post-content', '', 300);
    });

    $('#comments-container').on('click', '.btn-cancel-edited-post', function (event) {
        var $trigger = $(this);
        textEditor.remove('edit-post-content');
        var $content = $trigger.parents('.edit-post-container').prev('.panel-body');
        $content.prev('.panel-heading').find('.btn-edit-post').show();
        $content.show();
        $('.edit-post-container').remove();
    });

    $('#comments-container').on('click', '.btn-save-edited-post', function (event) {
        var $trigger = $(this);
        var id = $trigger.parents('.cf_commentWrapper').attr('data-id');

        var content = textEditor.getContent('edit-post-content');

        var body = {
            id: id,
            content: content
        };

        $.ajax({
            url: '/sitetriks/comments/editcomment',
            method: 'POST',
            data: JSON.stringify(body),
            contentType: 'application/json',
            success: function success(res) {
                console.log(res);
                if (res.success) {
                    textEditor.remove('edit-post-content');
                    var $content = $trigger.parents('.edit-post-container').prev('.panel-body');
                    $content.prev('.panel-heading').find('.btn-edit-post').show();
                    $content.show();
                    $content.html(content);
                    $('.edit-post-container').remove();
                }
            },
            error: function error(res) {
                console.log(res);
            }
        });
    });

    $('#comments-container').on('click', '.btn-delete-comment', function (event) {
        var $parent = $(this).parents('.cf_commentWrapper');
        var id = $parent.attr('data-id');

        Loader.show(true);

        $.ajax({
            method: 'POST',
            url: '/sitetriks/comments/deletecomment',
            contentType: 'application/json',
            data: JSON.stringify({ id: id }),
            success: function success(res) {
                if (res.success) {
                    $parent.parent().remove();
                }

                Loader.hide();
            }
        });
    });
}