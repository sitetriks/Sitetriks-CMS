import { Data } from '../common/data.js';
import { Multiselect } from '../common/multiselect-setup.js';

export function navigation() {
    function initNavigation(element) {
        Data.getJson({ url: '/sitetriks/Display/GetAllParentPages' }).then(function (res) {
            var pages = res.pages;
            let $order = $('#pages-order');
            let $multiselect = $('#multiselect-pages');
            let $allPages = $('#input-all-pages');

            for (var i = 0; i < pages.length; i++) {
                $('<option>', {
                    value: pages[i].id,
                    text: pages[i].title
                }).appendTo($multiselect);
            }

            Multiselect.Destroy($multiselect.attr('id'));
            Multiselect.Setup($multiselect.attr('id'), function (option, checked, select) {
                let $option = $(option);
                if (!checked) {
                    $order.children(`li[data-identifier="${$option.val()}"]`).first().remove();
                } else {
                    $order.append(createSortablePage($option.text(), $option.val()));
                }
            });

            function createSortablePage(text, id) {
                let $li = $('<li></li>', {
                    'class': 'ui-state-default',
                    'data-identifier': id
                });
                $('<span></span>', {
                    class: 'ui-icon ui-icon-arrowthick-2-n-s'
                }).appendTo($li);

                $li.append(text);
                return $li;
            }

            $order.sortable({ opacity: 0.5 });
            $order.disableSelection();

            $allPages.on('click', disableSelection);
            function disableSelection(ev) {
                if (this.checked) {
                    $order.sortable('disable').parent().hide();
                    $multiselect.multiselect('disable').hide();
                } else {
                    $order.sortable('enable').parent().show();
                    $multiselect.multiselect('enable').show();
                }
            }

            if (element) {
                let content = JSON.parse(element);
                let selectedOptions = content.pageIds;
                for (let i = 0; i < selectedOptions.length; i++) {
                    let $option = $multiselect.find('option[value="' + selectedOptions[i] + '"]').attr('selected', 'selected');
                    $order.append(createSortablePage($option.text(), selectedOptions[i]));
                }

                let depthOption = content.maxDepth;
                $(`#depth-level option[value="${depthOption}"]`).attr('selected', 'selected');
                $allPages[0].checked = !!content.allPages;
                disableSelection.apply($allPages[0]);
            }
        });
    }

    return {
        add: initNavigation,
        edit: initNavigation,
        save: function () {
            var ordered = [];
            $('#pages-order').children().each(function () {
                ordered.push($(this).attr('data-identifier'));
            });

            var depthLevel = $('#depth-level option:selected').val();
            let allPages = $('#input-all-pages')[0].checked;

            return JSON.stringify({ pageIds: ordered, maxDepth: depthLevel, allPages });
        }
    };
}
