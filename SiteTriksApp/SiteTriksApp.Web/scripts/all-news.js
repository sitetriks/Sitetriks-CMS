import { Data } from './common/data.js';
import { HashRouter } from './modules/hash-router.js';

export function allNewsWidget () {
    if (!document.getElementsByClassName('allnews-container').length) {
        return;
    }

    let $window = $(window);
    let $accordion = $('.accordion');
    let $nestedAccordion = $('.accordion-nested');
    let $detailedNewsContainer = $('#news-view-container');
    let windowWidth = $window.width();

    init();
    bindEvents();

    function init() {
        HashRouter.onChange('news', loadDetailedNews, 'loadDetailedNews');
        let selectedNews = HashRouter.get('news');
        loadDetailedNews(selectedNews);
        let active = 0;
        let activeNested = 0;

        if (windowWidth <= 768) {
            active = false;
            activeNested = false;
        } else if (selectedNews) {
            let $parent = $(`.detailed-news[data-url="${selectedNews}"]`).parent().parent();
            let year = $parent.attr('data-year');
            let month = $parent.attr('data-month');
            active = activateAccordion(year, 'data-year', '.accordion-item');
            activeNested = activateAccordion(month, 'data-month', '.accordion-item-nested-' + year);
        }

        $accordion.accordion({ collapsible: true, active: active });
        $nestedAccordion.accordion({ heightStyle: 'content', collapsible: true, active: activeNested });
    }

    function onSelectNews(e) {
        let url = this.getAttribute('data-url');
        url ? HashRouter.set('news', [url]) : HashRouter.set('news');
        if (windowWidth <= 768) {
            $accordion.accordion('option', { active: false });
            $nestedAccordion.accordion('option', { active: false });
        }

        return false;
    }

    function loadDetailedNews(data) {
        let url = data && data.length ? data[0] : '';
        $detailedNewsContainer.html('Loading...');
        Data.getJson({ url: '/widget/newswidget/DetailedNews/' + url }).then(function (res) {
            $detailedNewsContainer.html(res);
        });
    }

    function activateAccordion(data, attribute, selector) {
        var result = 0;

        $(selector).each(function (index, el) {
            if (el.getAttribute(attribute) === data) {
                result = index;
                return;
            }
        });

        return result;
    }

    function handleResize(ev) {
        if ($window.width() <= 768 && windowWidth > 768) {
            $accordion.accordion('option', { active: false });
            $nestedAccordion.accordion('option', { active: false });
        }

        windowWidth = $window.width();
    }

    function bindEvents() {
        $window.on('resize', handleResize);
        $('.detailed-news').on('click', onSelectNews);
    }
}
