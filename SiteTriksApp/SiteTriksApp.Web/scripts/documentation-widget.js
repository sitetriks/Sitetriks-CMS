/* globals Prism, prettify */
import { Data } from './common/data.js';

export function documentationModule() {
    let $wrapper = $('.st-documentation-wrapper');
    if ($wrapper.length < 1) {
        return;
    }

    let $docMenu = $wrapper.find('.docs-menu');
    let $btnNext = $wrapper.find('.next-doc');
    let $btnPrev = $wrapper.find('.prev-doc');
    let $versions = $wrapper.find('.documentation-versions');
    let $topicDetails = $wrapper.find('.topic-details');

    init();

    function init() {
        let $first = $docMenu.find('a').first();
        if ($first && $first.length > 0) {
            selectTopic({ target: $first });
        }

        if (!$first || !$first.attr('data-next')) {
            $btnNext.hide();
        }

        bindEvents();
    }

    function bindEvents() {
        $docMenu.on('click', '.glyphicon-menu-right', expand);
        $docMenu.on('click', '.glyphicon-menu-down', collapse);
        $docMenu.on('click', 'li', selectTopic);
        $btnNext.on('click', pageing);
        $btnPrev.on('click', pageing);
        $versions.on('change', loadVersion);
    }

    function dispose() {
        $docMenu.off('click', '.glyphicon-menu-right', expand);
        $docMenu.off('click', '.glyphicon-menu-down', collapse);
        $docMenu.off('click', 'li', selectTopic);
        $btnNext.off('click', pageing);
        $btnPrev.off('click', pageing);
        $versions.off('change', loadVersion);
    }

    function loadTopic(id) {
        return Data.postJson({ url: '/sitetriks/documentation/getcontent', data: { id: id, version: $versions.val() } }).then(function (res) {
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

    function expand(ev) {
        let $icon = $(ev.target);
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

        let nextId = $trigger.attr('data-next');
        let prevId = $trigger.attr('data-prev');

        if (!nextId) {
            $btnNext.hide();
        } else {
            $btnNext.show();
        }

        if (!prevId) {
            $btnPrev.hide();
        } else {
            $btnPrev.show();
        }

        $btnNext.attr('data-id', nextId);
        $btnPrev.attr('data-id', prevId);

        let id = $trigger.attr('data-id');
        $docMenu.attr('data-selected', id);

        loadTopic(id);
        expand({ target: $trigger.prev('span.glyphicon') });
    }

    function pageing(ev) {
        let id = $(ev.target).attr('data-id');
        if (!id) {
            return;
        }

        selectTopic({ target: $docMenu.find('a[data-id="' + id + '"]') });
    }

    function loadVersion(ev) {
        let id = $docMenu.attr('data-selected');
        loadTopic(id);
    }
}
