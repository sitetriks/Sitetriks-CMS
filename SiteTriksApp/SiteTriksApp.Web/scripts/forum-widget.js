import { Data } from './common/data.js';
import { Utils } from './common/utils.js';
import { Notifier } from './common/notifier.js';
import { _Grid } from './modules/grid.js';
import { Comments } from './comments.js';
import { HashRouter } from './modules/hash-router.js';
import { loadHandlebarsTemplates } from './common/handlebars.js';

export function forumWidget () {
    let $wrapper = $('.forum-widget-wrapper');
    if (!$wrapper.length) {
        return;
    }

    let $nav = $('.forum-router');
    let $container = $('.forum-container');
    let $errors = $('.forum-errors');
    let userInfo = {};

    let grid;
    const templatesCache = {};
    const templates = [{ name: 'forum-content', url: '/templates/forum-content.html' }, { name: 'forum-post', url: '/templates/forum-post.html' }];

    loadDependencies().then(function (res) {
        return loadHandlebarsTemplates(templatesCache, templates);
    }).then(function (res) {
        return Data.getJson({ url: '/forum/categories/getuser' }).then(res => userInfo = res.success ? res.userInfo : {});
    }).then(function (res) {
        let params = HashRouter.get('forum');
        handleAction(params);
        HashRouter.onChange('forum', handleAction, 'forumRouteChange');
        $wrapper.on('click', '.forum-nav', forumRouting);
    });

    function forumRouting(ev) {
        let action = this.getAttribute('data-action');
        let type = this.getAttribute('data-type');
        let id = this.getAttribute('data-id');
        let parentId = this.getAttribute('data-parent');
        $errors.html('');

        if (action === 'delete') {
            deleteAction(type, id);
        } else if (action === 'save') {
            save(type, id, parentId);
        } else {
            HashRouter.set('forum', type ? [type, action, id, parentId] : ['home']);
        }
    }

    function loadDependencies() {
        let promises = [];
        if (typeof tinymce === 'undefined') {
            promises.push(Utils.loadjscssfileAsync('/lib/custom/tinymce/tinymce.min.js', 'js'));
        }

        promises.push(Utils.loadjscssfileAsync('/css/grid.css', 'css'));
        promises.push(Utils.loadjscssfileAsync('/css/forum.css', 'css')); // TODO: check if loaded

        return Promise.all(promises);
    }

    function initializeGrid() {
        $container.html('');
        $('<div></div>', {
            class: 'grid'
        }).appendTo($container);

        return new _Grid({
            wrapperId: '.grid',
            type: 'table',
            sourceConfig: { type: 'client', url: '' }
        });
    }

    function loadCategories() {
        let columns = [
            {
                name: 'title',
                extraFields: ['id'],
                title: 'Category',
                type: 'string',
                filter: true,
                sort: true,
                size: 2,
                headerTemplate: '<strong>#item#</strong>',
                contentTemplate: buildActionTemplate({ 'details': { name: '#item#', cssClass: 'grid-item-title' } }, 'category')
            },
            {
                name: 'description',
                title: 'Description',
                type: 'string',
                filter: true,
                sort: true,
                size: 3,
                headerTemplate: '<strong>#item#</strong>'
            },
            {
                name: 'themesCount',
                title: 'Themes Count',
                type: 'number',
                size: 1,
                headerTemplate: '<strong>#item#</strong>'
            },
            {
                name: 'dateCreated',
                title: 'Date Created',
                type: 'date',
                size: 1,
                headerTemplate: '<strong>#item#</strong>'
            },
            {
                name: 'dateModified',
                title: 'Date Modified',
                type: 'date',
                size: 1,
                headerTemplate: '<strong>#item#</strong>'
            },
            {
                name: 'userId',
                extraFields: ['id'],
                type: 'compare',
                size: 2,
                headerTemplate: '<strong>#item#</strong>',
                trueTemplate: buildActionTemplate({ 'edit': { name: 'Edit' }, 'delete': { name: 'Delete' } }, 'category'),
                comparer: () => userInfo.isAuthenticated && userInfo.isModerator
            }
        ];

        let buttons = userInfo.isAuthenticated && userInfo.isModerator ? [{
            title: 'Create',
            iconOnly: true,
            type: 'add',
            class: 'forum-nav',
            attributes: { 'data-action': 'create', 'data-type': 'category' }
        }] : [];

        let sourceConfig = { type: 'client', url: '/forum/categories/grid' };
        updateGrid({ fields: columns, sourceConfig, customActions: buttons });
    }

    function loadThemes(categoryId) {
        let columns = [{
            name: 'title',
            title: 'Themes',
            type: 'string',
            filter: true,
            sort: true,
            size: 2,
            extraFields: ['id'],
            headerTemplate: '<strong>#item#</strong>',
            contentTemplate: buildActionTemplate({ 'details': { name: '#item#', cssClass: 'grid-item-title' } }, 'theme')
        },
        {
            name: 'creator',
            title: 'Creator',
            type: 'string',
            filter: true,
            sort: true,
            size: 2,
            headerTemplate: '<strong>#item#</strong>'
        },
        {
            name: 'dateCreated',
            title: 'Date Created',
            type: 'date',
            size: 2,
            headerTemplate: '<strong>#item#</strong>'
        },
        {
            name: 'dateModified',
            title: 'Date Modified',
            type: 'date',
            size: 2,
            headerTemplate: '<strong>#item#</strong>'
        },
        {
            name: 'userId',
            extraFields: ['id'],
            type: 'compare',
            size: 2,
            headerTemplate: '<strong>#item#</strong>',
            trueTemplate: buildActionTemplate({ 'edit': { name: 'Edit' }, 'delete': { name: 'Delete' } }, 'theme'),
            falseTemplate: userInfo.isAuthenticated && userInfo.isModerator ? buildActionTemplate({ 'delete': { name: 'Delete' } }, 'theme') : '',
            comparer: value => userInfo.isAuthenticated && userInfo.id === value
        }];

        let buttons = userInfo.isAuthenticated ? [{
            title: 'Create',
            iconOnly: true,
            type: 'add',
            class: 'forum-nav',
            attributes: { 'data-action': 'create', 'data-type': 'theme', 'data-parent': categoryId }
        }] : [];

        let sourceConfig = { type: 'client', url: '/forum/themes/grid?categoryId=' + categoryId };
        updateGrid({ fields: columns, sourceConfig, customActions: buttons });
    }

    function loadPosts(themeId) {
        let columns = [{
            name: 'title',
            title: 'Title',
            type: 'string',
            filter: true,
            sort: true,
            size: 3,
            extraFields: ['id'],
            headerTemplate: '<b>#item#</b>',
            headerTemplate: '<strong>#item#</strong>',
            contentTemplate: buildActionTemplate({ 'details': { name: '#item#', cssClass: 'grid-item-title' } }, 'post')
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
            filter: true,
            sort: true,
            size: 2,
            headerTemplate: '<b>#item#</b>'
        },
        {
            name: 'userId',
            extraFields: ['id'],
            type: 'compare',
            headerTemplate: '<b>#item#</b>',
            trueTemplate: buildActionTemplate({ 'edit': { name: 'Edit' }, 'delete': { name: 'Delete' } }, 'post'),
            falseTemplate: userInfo.isAuthenticated && userInfo.isModerator ? buildActionTemplate({ 'delete': { name: 'Delete' } }, 'post') : '',
            comparer: value => userInfo.isAuthenticated && userInfo.id === value
        }];

        let buttons = userInfo.isAuthenticated ? [{
            title: 'Create',
            iconOnly: true,
            type: 'add',
            class: 'forum-nav',
            attributes: { 'data-action': 'create', 'data-type': 'post', 'data-parent': themeId }
        }] : [];

        let sourceConfig = { type: 'client', url: '/forum/posts/grid?themeId=' + themeId };
        updateGrid({ fields: columns, sourceConfig, customActions: buttons });
    }

    function buildActionTemplate(actions, type) {
        let buttons = '';
        for (let key in actions) {
            let cssClass = actions[key].cssClass || 'btn';
            buttons += `<a class="forum-nav ${cssClass}" data-action="${key}" data-type="${type}" data-id="#item0#">${actions[key].name}</a>`;
        }

        return buttons;
    }

    function handleAction(data) {
        let type = data && data.length > 0 ? data[0] : null;
        let action = data && data.length > 1 ? data[1] : null;
        let id = data && data.length > 2 ? data[2] : null;
        let parentId = data && data.length > 3 ? data[3] : null;

        if (!type || type === 'home') {
            loadCategories();
            ForumNavigation.buildNav();
            return;
        }

        if (action === 'create') {
            create(type, parentId);
        }

        if (action === 'details') {
            details(type, id);
        }

        if (action === 'edit') {
            edit(type, id, parentId);
        }

        ForumNavigation.buildNav({ id, action, type, parentId });
        // TODO: add unrecognized action handler
    }

    function create(type, parentId) {
        cleanUp();
        let html = templatesCache['forum-content']({ type, parentId });
        $container.html(html);
    }

    function edit(type, id, parentId) {
        cleanUp();
        let url = (type === 'category' ? '/forum/categories' : `/forum/${type}s`) + `/get${type}?id=${id}`;
        Data.getJson({ url }).then(function (res) {
            if (res.success) {
                let html = templatesCache['forum-content']({ type, id, parentId, title: res.item.title, description: res.item.description || res.item.content });
                $container.html(html);
            }
        });
    }

    function deleteAction(type, id) {
        let body = { ids: [id] };
        let url = (type === 'category' ? '/forum/categories' : `/forum/${type}s`) + '/delete';
        Data.postJson({ url, data: body }).then(function (res) {
            if (res.success) {
                grid = grid || initializeGrid();
                grid.load(true);
            } else {
                displayError(res.message);
            }
        });
    }

    function save(type, id, parentId) {
        let title = $container.find('.input-title').val() || '';
        let description = $container.find('.input-description').val() || '';
        let formData = new FormData();
        if (Utils.isFunction(formData.set)) {
            formData.set('title', title);
            formData.set('description', description);
            formData.set('content', description);
            formData.set('parentId', parentId);
            formData.set('id', id);
        } else {
            formData.append('title', title);
            formData.append('description', description);
            formData.append('content', description);
            formData.append('parentId', parentId);
            formData.append('id', id);
        }

        let url = (type === 'category' ? '/forum/categories' : `/forum/${type}s`) + (id ? '/edit' : `/create?id=${parentId}`);
        Data.postForm({ url, formData }).then(function (res) {
            if (res.success) {
                HashRouter.set('forum', [type, 'details', res.id]);
            } else {
                displayError(res.message);
            }
        });
        // Know when fairy tales cease to be tales? When people start believing in them.
    }

    function details(type, id) {
        switch (type) {
            case 'category':
                loadThemes(id);
                break;
            case 'theme':
                loadPosts(id);

                break;
            case 'post':
                loadPost(id);
                break;

            default:
                loadCategories();
                break;
        }
    }

    function loadPost(id) {
        cleanUp();
        Data.getJson({ url: '/forum/posts/getPost?id=' + id }).then(function (res) {
            if (res.success) {
                let html = templatesCache['forum-post']({ content: res.item.content, isAuthenticated: res.isAuthenticated });
                $container.html(html);
                let $commentsContainer = $container.find('.comments-container');
                return res.isAuthenticated ? Comments.init(id, $commentsContainer, 'forum-comment-area') : Comments.loadComments(id, $commentsContainer);
            }
        });
    }

    function cleanUp() {
        if (grid) {
            grid.dispose();
            grid = null;
        }

        $container.html('');
    }

    function updateGrid(config) {
        grid = grid || initializeGrid();
        grid.updateConfig(config).load(true);
    }

    function displayError(message) {
        Notifier.createAlert({ containerId: $errors, message, status: 'danger' });
    }

    //----------------------------------------------------------------------------------------------
    // navigation logic
    const ForumNavigation = (function () {
        const navigation = {
            'home': {},
            'category': null,
            'theme': null,
            'post': null
        };

        function buildNav(data) {
            $('.action-helper-nav').remove();
            if ($nav.children().length === 0) {
                $('<a></a>', {
                    class: 'forum-nav',
                    text: 'Home'
                }).appendTo($nav);
            }

            if (!data || data.type === 'category') {
                navigation['theme'] = null;
                $nav.find(`.forum-nav[data-type="theme"]`).remove();
            }

            if (!data || data.type === 'category' || data.type === 'theme') {
                navigation['post'] = null;
                $nav.find(`.forum-nav[data-type="post"]`).remove();
            }

            if (!data) {
                navigation['category'] = null;
                $nav.find(`.forum-nav[data-type="category"]`).remove();

                return;
            }

            if (data.action === 'create') {
                if (data.type === 'post') {
                    populateNav(data.parentId, data.action, 'theme', 'Post');
                }

                if (data.type === 'theme') {
                    populateNav(data.parentId, data.action, 'category', 'Theme');
                }

                if (data.type === 'category') {
                    createActionNavElement('Create', 'Category');
                }
            } else {
                populateNav(data.id, data.action, data.type);
            }
        }

        function populateNav(id, action, type, createType) {
            let url = (type === 'category' ? '/forum/categories' : `/forum/${type}s`) + `/get${type}?id=${id}`;
            Data.getJson({ url }).then(function (res) {
                if (res.success) {
                    if (type === 'post' || type === 'theme') {
                        navigation['category'] = { id: res.item.categoryId, title: res.item.categoryTitle, type: 'category', action: 'details' };
                        createNavElement(navigation['category']);
                    }

                    if (type === 'post') {
                        navigation['theme'] = { id: res.item.themeId, title: res.item.themeTitle, type: 'theme', action: 'details' };
                        createNavElement(navigation['theme']);
                    }

                    navigation[type] = { id: res.item.id, title: res.item.title, type, action: 'details' };
                    createNavElement(navigation[type]);
                    if (action === 'edit') {
                        createActionNavElement('Edit');
                    } else if (action === 'create') {
                        createActionNavElement('Create', createType);
                    }
                }
            });
        }

        function createNavElement(info) {
            let $link = $nav.find(`.forum-nav[data-type="${info.type}"]`);
            if ($link.length > 0) {
                $link.attr('data-id', info.id);
                $link.text(info.title || info.id);
            } else {
                $('<a></a>', {
                    text: info.title || info.id,
                    class: 'forum-nav-element forum-nav',
                    'data-id': info.id,
                    'data-action': 'details',
                    'data-type': info.type
                }).appendTo($nav);
            }
        }

        function createActionNavElement(action, type) {
            let text = type ? `${action} ${type}` : action;
            $('<a></a>', {
                text,
                class: 'forum-nav-element action-helper-nav'
            }).appendTo($nav);
        }

        return { buildNav };
    })();
}
