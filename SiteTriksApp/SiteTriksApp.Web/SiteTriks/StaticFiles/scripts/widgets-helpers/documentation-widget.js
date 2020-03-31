/* globals Prism, prettify */
import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { HashRouter } from '../modules/hash-router.js';

export function documentationModule() {
    let $wrapper = $('.st-documentation-wrapper');
    if ($wrapper.length < 1) {
        return;
    }

    let $docMenu = $wrapper.find('.docs-menu');
    let $btnNext = $wrapper.find('.next-doc').hide();
    let $btnPrev = $wrapper.find('.prev-doc').hide();
    let $btnExport = $wrapper.find('.export-pdf');
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
        $docMenu.on('click', '.documentation-element', toggleDocs);
        $docMenu.on('click', 'li', selectTopic);
        $btnNext.on('click', paging);
        $btnPrev.on('click', paging);
        $versions.on('change', loadVersion);
        $btnExport.on('click', exportDoc);
        HashRouter.onChange('docs', onRouteUpdate, 'documentationWidget');

        // autocomplete search
        $wrapper.on('click', '.result', selectAutocomepleteDoc);
        $(document).on('click', clearAutocomplete);
        $inputSearch.on('keyup', loadAutocompleteDocs);
        $inputSearch.on('keydown', autoCompleteArrowsAndEnterSuggestion);
        $searchResults.on('mouseenter', '.result', autocompleteMouseSuggestion);
    }

    function dispose() {
        $docMenu.off('click', '.documentation-element', toggleDocs);
        $docMenu.off('click', 'li', selectTopic);
        $btnNext.off('click', paging);
        $btnPrev.off('click', paging);
        $versions.off('change', loadVersion);
        HashRouter.offChange('docs', 'documentationWidget');

        $wrapper.off('click', '.result', selectAutocomepleteDoc);
        $(document).off('click', clearAutocomplete);
        $inputSearch.off('keyup', loadAutocompleteDocs);
        $inputSearch.off('keydown', autoCompleteArrowsAndEnterSuggestion);
        $searchResults.off('mouseenter', '.result', autocompleteMouseSuggestion);
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

    function toggleDocs(ev) {
        let $target = $(this || ev.target);
        if (!$target.hasClass('documentation-element')) {
            $target = $target.parents('.documentation-element').first();
        }

        let $icon = $target.find('.fa');
        if ($icon.hasClass('fa-angle-right')) {
            $target.next('ul').show();
            $icon.removeClass('fa-angle-right').addClass('fa-angle-down');
        } else {
            $icon.removeClass('fa-angle-down').addClass('fa-angle-right');
            let $toHide = $target.next('ul');
            $toHide.hide();

            let descendants = Array.prototype.slice.call($toHide[0].querySelectorAll('ul'), 0);

            descendants.forEach(function (descendant) {
                let $item = $(descendant);
                $item.hide();
                let $icon = $item.prev().find('span.fa');
                if ($icon && $icon.length > 0) {
                    $icon.removeClass('fa-angle-down').addClass('fa-angle-right');
                }
            });
        }
    }

    function selectTopic(ev) {
        let $trigger = $(ev.target);
        if ($trigger.is('div')) {
            $trigger = $trigger.find('a');
        }

        if ($trigger.is('span.fa')) {
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
    }

    function paging(ev) {
        let id = (this || ev.target).getAttribute('data-id');
        if (id) {
            HashRouter.set('docs', currentVersion ? [id, currentVersion] : [id]);
        }
    }

    function exportDoc() {
        return Data.postJson({ url: '/sitetriks/documentation/exportpdf', data: { id: currentId, version: currentVersion } }).then(function (res) {

            if (!res.success) {
                console.log(res.message);
            }

            var binaryString = window.atob(res.file);
            var binaryLen = binaryString.length;
            var bytes = new Uint8Array(binaryLen);
            for (var i = 0; i < binaryLen; i++) {
                var ascii = binaryString.charCodeAt(i);
                bytes[i] = ascii;
            }
            let blob = new Blob([bytes], { type: "application/pdf" });
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${res.topicName}.pdf`;
            link.click();
        });
    }

    const SUGGESTED_CLASS = 'suggested';
    function autoCompleteArrowsAndEnterSuggestion(ev) {
        if (ev.keyCode !== 13 && ev.keyCode !== 38 && ev.keyCode !== 40) {
            return;
        }

        let $suggested = $searchResults.find('.' + SUGGESTED_CLASS);
        if (ev.keyCode === 13) {
            if ($suggested.length > 0) {
                selectAutocomepleteDoc.apply($suggested[0]);
            }

            return;
        }

        if (ev.keyCode === 40) {
            if ($suggested.length < 1) {
                $searchResults.children().first().addClass(SUGGESTED_CLASS);
            } else if ($suggested.next().length > 0) {
                $suggested.removeClass(SUGGESTED_CLASS)
                    .next().addClass(SUGGESTED_CLASS);
            }

            return;
        }

        if (ev.keyCode === 38) {
            if ($suggested.length < 1) {
                $searchResults.children().last().addClass(SUGGESTED_CLASS);
            } else if ($suggested.prev().length > 0) {
                $suggested.removeClass(SUGGESTED_CLASS)
                    .prev().addClass(SUGGESTED_CLASS);
            }
        }
    }

    function autocompleteMouseSuggestion(ev) {
        $searchResults.find('.' + SUGGESTED_CLASS).removeClass(SUGGESTED_CLASS);
        $(this || ev.target).addClass(SUGGESTED_CLASS);
    }

    function loadAutocompleteDocs(ev) {
        if (!this.value || this.value.length < 3 || ev.keyCode === 40 || ev.keyCode === 38 || ev.keyCode === 13) {
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
    }

    function clearAutocomplete(ev) {
        let $target = $(ev.target);
        if ($target.is('.result') || $target.is($inputSearch) || $target.is($searchResults)) {
            return;
        }

        $searchResults.html('');
        $inputSearch.val('');
    }

    function selectAutocomepleteDoc(ev) {
        paging.apply(this || ev.target);

        $searchResults.html('');
        $inputSearch.val('');
    }

    function loadVersion(ev) {
        let version = $versions.val();
        currentVersion = version === lastVersion ? undefined : version;
        HashRouter.set('docs', currentVersion ? [currentId, currentVersion] : [currentId]);
    }
}
