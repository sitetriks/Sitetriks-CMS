/* Data, Loader, Utils, Pager, DataSource, HashRouter, Comments, Validator */
import { Data } from './common/data.js';
import { Loader } from './common/loader.js';
import { Utils } from './common/utils.js';
import { Pager } from './modules/pager.js';
import { DataSource } from './modules/data-source.js';
import { Validator } from './common/validator.js';
import { Comments } from './comments.js';
import { HashRouter } from './modules/hash-router.js';
import { loadHandlebarsTemplates } from './common/handlebars.js';
import { textEditor } from './text-editor.js';
import { DateConversion } from './common/date-conversion.js';

export function blogWidget() {
    let $wrapper = $('.st-blog-wrapper');
    if (!$wrapper.length) {
        return;
    }

    let $container = $wrapper.find('.st-blog-container');
    let $pager = $wrapper.find('.blog-pager');
    let source;
    let pager;
    const defaultPageSize = 20;
    let paging = { page: 1, size: defaultPageSize };
    let templatesCache = {};
    let templates = [{ name: 'blog-list', url: '/templates/blog-list.html' }, { name: 'blog-post', url: '/templates/blog-post.html' }];

    loadDependencies().then(function (res) {
        return loadHandlebarsTemplates(templatesCache, templates);
    }).then(function (res) {
        source = DataSource({ url: '/sitetriks/blog/grid', type: 'server' });
        pager = Pager($pager, { pageSizes: [1, 2, 5, 10, 20, 'all'], default: defaultPageSize }, pagingHandler);

        let params = HashRouter.get('blog');
        handleAction(params);
        HashRouter.onChange('blog', handleAction, 'blog-widget');
        bindEvents();
    });

    function loadDependencies() {
        let promises = [];
        promises.push(Utils.loadjscssfileAsync('/css/forum.css', 'css')); // TODO: check if loaded, move comment styles from forum

        if (typeof tinymce === 'undefined') {
            promises.push(Utils.loadjscssfileAsync('/lib/custom/tinymce/tinymce.min.js', 'js'));
        }

        return Promise.all(promises);
    }

    function load() {
        Loader.show('#fff');
        return source.getData({ paging }).then(res => {
            if (res.success) {
				$container.html('');
				res.items.forEach(item => item.dateCreated = DateConversion.convertUtcToLocal(item.dateCreated));
                let html = templatesCache['blog-list'](res);
                $container.append(html);
            }

            if (paging.size !== 'all') {
                pager.setCurrentPage(paging.page);
                pager.setPageSize(paging.size);
                pager.setPagesCount(Math.ceil(res.count / paging.size));
            }

            pager.unlock();
            $pager.show();
            Loader.hide();
            return res;
        });
    }

    function pagingHandler(page, size) {
        if (+page === 1 && +size === defaultPageSize) {
            HashRouter.set('blog');
        } else {
            HashRouter.set('blog', [page, size]);
        }
    }

    function loadPost(id) {
        Loader.show('#fff');
        return Data.getJson({ url: '/sitetriks/blog/getblog?id=' + id }).then(function (res) {
            if (res.success) {
                $pager.hide();
                pager.lock();
				let obj = { item: res.item, isAuthenticated: res.isAuthenticated, paging };
				obj.item.dateCreated = DateConversion.convertUtcToLocal(obj.item.dateCreated);
                let html = templatesCache['blog-post'](obj);
                $container.html(html);
                if (res.isAuthenticated) {
                    Comments.init(id, $container.find('.comments-container'), 'blog-comment-area');
                } else {
                    Comments.loadComments(id, $container.find('.comments-container'));
                }
            }

            Loader.hide();
        });
    }

    function readMore(ev) {
        let id = this.getAttribute('data-id');
        HashRouter.set('blog', [id]);
    }

    function returnToGrid(ev) {
        textEditor.remove('blog-comment-area');//TODO: Find a better way to reinit tinyMCE
        let page = this.getAttribute('data-page') || 1;
        let size = this.getAttribute('data-size') || defaultPageSize;
        pagingHandler(page, size);
    }

    function handleAction(params) {
        if (params && params.length) {
            if (Utils.isGuid(params[0])) {
                loadPost(params[0]);
                return;
            }

            paging.page = Validator.isInteger(params[0]) ? +params[0] : 1;
            paging.size = params.length > 1 && (Validator.isInteger(params[1]) || params[1] === 'all') ? params[1] : defaultPageSize;
        }

        load();
    }

    function bindEvents() {
        $wrapper.on('click', '.btn-back', returnToGrid);
        $wrapper.on('click', '.st-blog-details', readMore);
    }
}
