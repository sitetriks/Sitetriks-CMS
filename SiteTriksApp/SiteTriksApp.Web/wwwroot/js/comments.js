/* globals Data, Loader, Utils, textEditor */

const Comments = (function () {
    let parentId;
    let $container;
    const templatesCache = {};
    let areaId;

    function init(id, $commentsContainer, textAreaId) {
        parentId = id;
        $container = $commentsContainer || $('#comments-container');
        areaId = textAreaId || 'comment-area';
        textEditor.remove(areaId);
        textEditor.init('#' + areaId, 600, 300);

        return Promise.all([
            Utils.loadHandlebarsTemplates(templatesCache, [{ name: 'comment-edit', url: '/templates/comment-edit.html' }]),
            loadComments(parentId)
        ]).then(function (res) {
            bindEvents();
        });
    }

    function loadComments(id, $commentsContainer) {
        $container = $commentsContainer || $container || $('#comments-container');
        // TODO: add inline loader
        return Data.getJson({ url: '/sitetriks/comments/loadcomments?id=' + id }).then(function (res) {
            if (res) {
                $container.append(res);
                return { success: true };
            }

            return { success: false };
        });
    }

    function addComment(ev) {
        Loader.show('#fff');
        let content = textEditor.getContent(areaId);

        let body = { id: parentId, content };
        Data.postJson({ url: '/sitetriks/comments/addcomment', data: body }).then(function (res) {
            if (res.success) {
                $container.append(res.view);
                textEditor.clear(areaId);
            }

            Loader.hide();
        });
    }

    function editComment(ev) {
        closeEdit();
        let $trigger = $(this);
        let $content = $trigger.parents('.panel-heading').next('.panel-body');

        let html = templatesCache['comment-edit']({ content: $content.html() });
        $content.parent().append(html);

        $content.hide();
        $trigger.hide();

        textEditor.initWithoutImages('#edit-post-content', '', 300);
    }

    function closeEdit(ev, content) {
        let $content = (ev && ev.target ? $(ev.target).parents('.edit-post-container') : $container.find('.edit-post-container')).prev('.panel-body');
        if ($content && $content.length) {
            textEditor.remove('edit-post-content');
            $content.prev('.panel-heading').find('.btn-edit-post').show();
            $content.show();
            $('.edit-post-container').remove();
            if (content) {
                $content.html(content);
            }
        }
    }

    function saveEditedComment(ev) {
        let $trigger = $(this);
        let id = $trigger.parents('.comment-wrapper').attr('data-id');

        let content = textEditor.getContent('edit-post-content');

        let body = { id, content };
        Loader.show('#fff');
        Data.postJson({ url: '/sitetriks/comments/editcomment', data: body }).then(function (res) {
            if (res.success) {
                closeEdit({ target: $trigger }, content);
            }

            Loader.hide();
        });
    }

    function deleteComment(ev) {
        let $parent = $(this).parents('.comment-wrapper');
        let id = $parent.attr('data-id');

        Loader.show(true);
        closeEdit();
        Data.postJson({ url: '/sitetriks/comments/deletecomment', data: { id } }).then(function (res) {
            if (res.success) {
                $parent.parent().remove();
            }

            Loader.hide();
        });
    }

    function bindEvents() {
        $container.parent().on('click', '.btn-add-comment', addComment);
        $container.on('click', '.btn-edit-post', editComment);
        $container.on('click', '.btn-save-edited-post', saveEditedComment);
        $container.on('click', '.btn-delete-comment', deleteComment);
        $container.on('click', '.btn-cancel-edited-post', closeEdit);
    }

    return { init, loadComments };
})();
