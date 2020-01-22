/* Data, Loader, Utils, Pager, DataSource, HashRouter, Comments, Validator */
import { Data } from '../common/data.js';
import { Loader } from '../common/loader.js';
import { Utils } from '../common/utils.js';
import { Pager } from '../modules/pager.js';
import { DataSource } from '../modules/data-source.js';
import { Validator } from '../common/validator.js';
import { Comments } from '../comments.js';
import { HashRouter } from '../modules/hash-router.js';
import { loadHandlebarsTemplates } from '../common/handlebars.js';
import { textEditor } from '../text-editor.js';
import { DateConversion } from '../common/date-conversion.js';

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
    let filters = [];
    let templates = [{ name: 'blog-list', url: '/SiteTriks/StaticFiles/templates/blog/blog-list.html' }, { name: 'blog-post', url: '/SiteTriks/StaticFiles/templates/blog/blog-post.html' }, { name:'blog-main-item', url: '/SiteTriks/StaticFiles/templates/blog/blog-main-item.html' }];

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
        promises.push(Utils.loadjscssfileAsync('/SiteTriks/StaticFiles/css/scss/forum.css', 'css')); // TODO: check if loaded, move comment styles from forum

        if (typeof tinymce === 'undefined') {
            promises.push(Utils.loadjscssfileAsync('/SiteTriks/StaticFiles/lib/custom/tinymce/tinymce.min.js', 'js'));
        }

        return Promise.all(promises);
    }

    function load() {
        Loader.show('#fff');
        return source.getData({ paging, filters }).then(res => {
            console.log(res);
            if (res.success) {
				$container.html('');
                res.items.forEach(item => item.dateCreated = DateConversion.convertUtcToLocal(item.dateCreated));
                let html = templatesCache['blog-list'](res);
                let htmlMainItem = templatesCache['blog-main-item'](res.items[0]);
                $container.append(htmlMainItem);
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
        textEditor.remove('blog-comment-area');
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

    //function onSearch(ev) {
    //    let value = $(ev.target).val();
    //    console.log($(ev.target).val());

    //    //if (value.length < 4) {
    //    //    return;
    //    //}

    //    filters.length = 0;
    //    paging.page = 1;
    //    pager.setCurrentPage(1);

    //    filters.push({
    //        propertyName: 'title',
    //        comparison: 7,
    //        value: value
    //    });

    //    load().then(function () {
    //        $('.search-input').val(value);
    //    });
    //}

    function bindEvents() {
        $wrapper.on('click', '.btn-back', returnToGrid);
        $wrapper.on('click', '.st-blog-details', readMore);
        //$wrapper.on('input', '.search-input', onSearch);
    }
}
