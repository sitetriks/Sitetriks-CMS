import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { HashRouter } from '../modules/hash-router.js';

export function singleBlogHelper() {
    let containerClass = '.blog-single-widget-container';
    let $wrapper = $(containerClass);
    let routeParameter = 'blogId';
    let routerName = 'singleBlogWidget';

    
    if (!$wrapper.length) {
        return;
    }

    console.log('singleBlogWidget load')
    //With the id from the hash router get blog

    init();

    function init() {
        let routeData = HashRouter.get(routeParameter);      

        if (!onRouteUpdate(routeData)) {
            //Not found
            return;
        }

        loadBlog(routeData);

        bindEvents();
    }

    function onRouteUpdate(data) {
        if (!data || !data.length || !Utils.isGuid(data[0])) {
            return false;
        }       

        loadBlog(data);
        return true;
    }

    function loadBlog(data) {
            Data.getJson({ url: `/sitetriks/blogwidget/details?id=${data}` }).then(function (res) {
                if (res.success) {
                    $wrapper.html(res.blog);
                }
                else {
                    //load not found view
                }
            })
    }

    function bindEvents() {
        HashRouter.onChange(routeParameter, onRouteUpdate, routerName);


    }

    function dispose() {
        HashRouter.offChange(routeParameter, routerName);

    }   
}
