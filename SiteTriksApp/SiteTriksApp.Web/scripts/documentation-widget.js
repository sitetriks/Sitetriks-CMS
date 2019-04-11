/* globals Prism, prettify */
import { Data } from './common/data.js';
import { Utils } from './common/utils.js';
import { HashRouter } from './modules/hash-router.js';

export function documentationModule() {
    let $wrapper = $('.st-documentation-wrapper');
    if ($wrapper.length < 1) {
        return;
    }

    let $docMenu = $wrapper.find('.docs-menu');
    let $btnNext = $wrapper.find('.next-doc').hide();
    let $btnPrev = $wrapper.find('.prev-doc').hide();
    let $versions = $wrapper.find('.documentation-versions');
    let $topicDetails = $wrapper.find('.topic-details');
    let $inputSearch = $wrapper.find('.documentation-search');
    let $searchResults = $wrapper.find('.documentation-search-results');

    let lastVersion = $versions.find('option').first().val();
    $versions.val(lastVersion);
    let currentVersion;
    let currentId;

    init();

    function init() {
        let $first = $docMenu.find('a').first();
        let routeData = HashRouter.get('docs');
        if (!onRouteUpdate(routeData) && $first && $first.length > 0) {
            currentId = $first.attr('data-id');
            openTopic();
        }

        bindEvents();
    }

    function bindEvents() {
        //$docMenu.on('click', '.glyphicon-menu-right', expand);
        //$docMenu.on('click', '.glyphicon-menu-down', collapse);
        $docMenu.on('click', '.documentation-element', toggleDocs);
        $docMenu.on('click', 'li', selectTopic);
        $btnNext.on('click', pageing);
        $btnPrev.on('click', pageing);
        $versions.on('change', loadVersion);
        HashRouter.onChange('docs', onRouteUpdate, 'documentationWidget');

        $searchResults.on('click', pageing);
        $wrapper.on('click', '.result', function (ev) {
            $searchResults.html('');
            $inputSearch.val('');
        });

        $(document).on('click', function (ev) {
            let $target = $(ev.target);
            if ($target.is('.result') || $target.is($inputSearch) || $target.is($searchResults)) {
                return;
            }

            $searchResults.html('');
            $inputSearch.val('');
        });

        $inputSearch.on('keyup', function (ev) {
            if (!this.value || this.value.length < 3) {
                return;
            }

            Data.getJson({ url: '/sitetriks/documentation/search?pattern=' + this.value }).then(function (res) {
                if (res && res.success) {
                    $searchResults.html('');
                    res.items.forEach(e => {
                        $('<li></li>', {
                            'data-id': e.id,
                            text: e.name,
                            class: 'result'
                        }).appendTo($searchResults);
                    });
                }
            });
        });
    }

    function dispose() {
        //$docMenu.off('click', '.glyphicon-menu-right', expand);
        //$docMenu.off('click', '.glyphicon-menu-down', collapse);
        $docMenu.off('click', '.documentation-element', toggleDocs);
        $docMenu.off('click', 'li', selectTopic);
        $btnNext.off('click', pageing);
        $btnPrev.off('click', pageing);
        $versions.off('change', loadVersion);
        HashRouter.offChange('docs', 'documentationWidget');
    }

    function onRouteUpdate(data) {
        if (!data || !data.length || !Utils.isGuid(data[0])) {
            return false;
        }

        currentId = data[0];
        currentVersion = data.length > 1 ? data[1] : undefined;
        if (currentVersion && $versions.val() !== currentVersion && currentVersion !== lastVersion) {
            $versions.val(currentVersion);
        }

        openTopic();
        return true;
    }

    function loadTopic() {
        return Data.postJson({ url: '/sitetriks/documentation/getcontent', data: { id: currentId, version: currentVersion } }).then(function (res) {
            $topicDetails.html(res);
        }, Data.defaultError).then(function () {
            // TODO: dispatch event instead
            if ($('pre').length > 0) {
                Prism.highlightAll();
            }

            if ($('.prettyprint').length > 0) {
                prettify();
            }
        });
    }

    function toggleDocElements(ev) {
        //let $menuItem = $(ev.target);
        //console.log($menuItem);
        //let $icon = $menuItem.find('.glyphicon');
        //if (!$menuItem.hasClass('expanded')) {
        //    $menuItem.next('ul').show();
        //    $icon.removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
        //    $menuItem.addClass('expanded');
        //} else {
        //    let $toHide = $menuItem.next('ul');
        //    $toHide.hide();

        //    let descendants = Array.prototype.slice.call($toHide[0].querySelectorAll('ul'), 0);

        //    descendants.forEach(function (descendant) {
        //        let $item = $(descendant);
        //        $item.hide();
        //        let $icon = $item.prev().find('span.glyphicon');
        //        if ($icon && $icon.length > 0) {
        //            $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
        //        }
        //    });

        //    $menuItem.removeClass('expanded');
        //    $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
        //}
    }

    function toggleDocs(ev) {
        let $target = $(this || ev.target);
        if (!$target.hasClass('documentation-element')) {
            $target = $target.parents('.documentation-element').first();
        }

        let $icon = $target.find('.glyphicon');
        if ($icon.hasClass('glyphicon-menu-right')) {
            $target.next('ul').show();
            $icon.removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
        } else {
            $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
            let $toHide = $target.next('ul');
            $toHide.hide();

            let descendants = Array.prototype.slice.call($toHide[0].querySelectorAll('ul'), 0);

            descendants.forEach(function (descendant) {
                let $item = $(descendant);
                $item.hide();
                let $icon = $item.prev().find('span.glyphicon');
                if ($icon && $icon.length > 0) {
                    $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
                }
            });
        }
    }

    function expand(ev) {
        let $icon = $(ev.target);
        $icon.next('ul').show();
        $icon.parent().next('ul').show();
        $icon.removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
    }

    function collapse(ev) {
        let $icon = $(ev.target);
        $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
        let $toHide = $icon.parent().next('ul');
        $toHide.hide();

        let descendants = Array.prototype.slice.call($toHide[0].querySelectorAll('ul'), 0);

        descendants.forEach(function (descendant) {
            let $item = $(descendant);
            $item.hide();
            let $icon = $item.prev().find('span.glyphicon');
            if ($icon && $icon.length > 0) {
                $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
            }
        });
    }

    function selectTopic(ev) {
        let $trigger = $(ev.target);
        if ($trigger.is('div')) {
            $trigger = $trigger.find('a');
        }

        if ($trigger.is('span.glyphicon')) {
            return;
        }

        if ($trigger.is('span.childless')) {
            $trigger = $trigger.next('a');
        }

        let id = $trigger.attr('data-id');
        HashRouter.set('docs', currentVersion ? [id, currentVersion] : [id]);
    }

    function openTopic() {
        let $target = $docMenu.find('a[data-id="' + currentId + '"]');

        let $allItems = $docMenu.find('a').parent();
        $allItems.removeClass('selected');
        $target.parent().addClass('selected');

        if (!$target.length) {
            return;
        }

        let nextId = $target.attr('data-next');
        let prevId = $target.attr('data-prev');

        $btnNext.toggle(!!nextId).attr('data-id', nextId);
        $btnPrev.toggle(!!prevId).attr('data-id', prevId);

        loadTopic();
        // expand({ target: $target.prev('span.glyphicon') });
    }

    function pageing(ev) {
        let id = ev.target.getAttribute('data-id');
        if (id) {
            HashRouter.set('docs', currentVersion ? [id, currentVersion] : [id]);
        }
    }

    function loadVersion(ev) {
        let version = $versions.val();
        currentVersion = version === lastVersion ? undefined : version;
        HashRouter.set('docs', currentVersion ? [currentId, currentVersion] : [currentId]);
    }
}
