import { Data } from '../common/data.js';
import { Multiselect } from '../common/multiselect-setup.js';

export function navigation() {
    const parentPageOrderClass = '.pages-order';
    const multiSelectParentPagesId = '#multiselect-pages';
    const navigationWidgetClass = '.navigation-widget';
    const navigationTypeSelectClass = '.navigation-type';
    const fileUrlClass = '.file-url';
    const loginBtnInputClass = '.login-btns-input';
    const logoPositionClass = '.logo-position';
    const menuItemsPositionClass = '.menu-items-position';
    const menuTypeClass = '.menu-type';
    const heightClass = '.height-input';
    const templateName = '#template-selector';
    const subLevelMenuClass = '.sub-levels';
    const subLevelMenusContainerClass = '.sub-levels-container';
    const parentPagesSelectSubLevelClassName = 'parent-pages-sub-level-select';
    const parentPagesSelectSubLevelClassSelector = `.${parentPagesSelectSubLevelClassName}`;
    const subLevelSelectClassName = 'sub-level-select';
    const subLevelSelectClassSelector = `.${subLevelSelectClassName}`;

    const getAllParentPagesUrl = '/sitetriks/Display/GetAllParentPages';
    const getChildPages = '/sitetriks/pages/GetAllChildPagesForParent?id=';

    let $navigationTypeSelect;
    let $fileUrlInput;
    let $loginInput;
    let $logoPosition;
    let $menuItemsPosition;
    let $menuType;
    let $heightInput;
    let $templateName;
    let $subLevelMenu;
    let $order;
    let $multiselect;
    let $subLevelContainer;

    function loadJQueryObjects() {
        $navigationTypeSelect = $(navigationWidgetClass).find(navigationTypeSelectClass);
        $fileUrlInput = $(navigationWidgetClass).find(fileUrlClass);
        $loginInput = $(navigationWidgetClass).find(loginBtnInputClass);
        $logoPosition = $(navigationWidgetClass).find(logoPositionClass);
        $menuItemsPosition = $(navigationWidgetClass).find(menuItemsPositionClass);
        $menuType = $(navigationWidgetClass).find(menuTypeClass);
        $heightInput = $(navigationWidgetClass).find(heightClass);
        $templateName = $(navigationWidgetClass).find(templateName);
        $subLevelMenu = $(navigationWidgetClass).find(subLevelMenuClass);
        $order = $(navigationWidgetClass).find(parentPageOrderClass);
        $multiselect = $(navigationWidgetClass).find(multiSelectParentPagesId);
        $subLevelContainer = $(navigationWidgetClass).find(subLevelMenusContainerClass);
    }

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

    function generateSubLevelMenu(count) {
        $subLevelContainer.html('');

        if (count == 0) {
            return;
        }

        for (let i = 1; i <= count; i++) {
            let $selectContainer = $('<div></div>').addClass('sub-level-order-container');
            $selectContainer.attr('data-order', i + 1);
            let $select = $('<select></select>');
            $select.attr('data-sub-level', i.toString());

            if (i == 1) {
                $subLevelContainer.append(`<label>Sub Menu ${i}:</label>`);
                $subLevelContainer.append($select);
                buildSelectWithParentPages();
            }
            else {
                $subLevelContainer.append(`<label>Sub Menu ${i}:</label>`);
                $subLevelContainer.append($select);
                $select.addClass('sub-levels-select');
            }
            $subLevelContainer.append($selectContainer);

            $(navigationWidgetClass).on('change', $select, function (ev) {
                let $selected = $(ev.target);
                let subLevelNumber = $selected.data('sub-level');
                let $select = $(`select[data-sub-level="${subLevelNumber + 1}"]`);
                let $container = $(navigationWidgetClass).find(`div[data-order="${subLevelNumber + 1}"]`);
                let id = $selected.val();

                if (id == '') {
                    $select.html('');
                }

                Data.getJson({ url: getChildPages + id }).then(function (res) {
                    let pages = res.pages;
                    createOrderedListForSubMenus($container, pages, subLevelNumber + 1)

                    apppendPagesOptionsToSelect($select, pages);
                });
            });


        }
    }

    function subLevelMenuInit() {
        if ($subLevelMenu == undefined) {
            loadJQueryObjects();
        }

        $(navigationWidgetClass).on('change', subLevelMenuClass, generateSubLevelMenus);

        function generateSubLevelMenus(ev) {
            let count = $(ev.target).val();
            // console.log($(subLevelMenuClass).find(`option[value="${count}"]`).attr('selected', 'selected'));
            generateSubLevelMenu(count);
        }
    }

    function buildSelectWithParentPages() {
        Data.getJson({ url: getAllParentPagesUrl }).then(function (res) {
            let pages = res.pages;

            let $select = $('select[data-sub-level="1"]');
            // $select.addClass(parentPagesSelectSubLevelClassName);

            apppendPagesOptionsToSelect($select, pages, true);
        });
    }

    function createOrderedListForSubMenus($container, pages, orderNumber) {
        $container.html('');
        let $ul = $('<ul></ul>').addClass('ui-sortable');
        $ul.attr('data-order-menu', orderNumber);

        for (let i = 0; i < pages.length; i++) {
            let $li = createSortablePage(pages[i].title, pages[i].id);

            $ul.append($li);
        }
        $ul.sortable({ opacity: 0.5 });
        $ul.disableSelection();

        $container.append($ul);
    }

    function apppendPagesOptionsToSelect($select, pages, isForParentPages) {
        let selectedPageIds = getSelectedParentPages();
        $select.html('');
        $('<option>', {
            value: '',
            text: ''
        }).appendTo($select);

        for (let i = 0; i < pages.length; i++) {

            if (isForParentPages && selectedPageIds.indexOf(pages[i].id) === -1) {
                continue;
            }

            $('<option>', {
                value: pages[i].id,
                text: pages[i].title
            }).appendTo($select);
        }
    }

    function getSelectedParentPages() {
        let selectedPageIds = [];

        $order.children().each(function () {
            selectedPageIds.push($(this).attr('data-identifier'));
        });

        return selectedPageIds;
    }

    function addSpanActiveFunctionality() {
        let logoPositionSpansSelector = `${logoPositionClass} span`;
        let menuPositionSpanSelector = `${menuItemsPositionClass} span`;
        let menuTypeSelector = `${menuTypeClass} span`;

        $(navigationWidgetClass).on('click', logoPositionSpansSelector, function (ev) {
            let $currElement = $(ev.target);

            $(logoPositionSpansSelector).removeClass('active');
            $currElement.addClass('active');
        });

        $(navigationWidgetClass).on('click', menuPositionSpanSelector, function (ev) {
            let $currElement = $(ev.target);

            $(menuPositionSpanSelector).removeClass('active');
            $currElement.addClass('active');
        });

        $(navigationWidgetClass).on('click', menuTypeSelector, function (ev) {
            let $currElement = $(ev.target);

            $(menuTypeSelector).removeClass('active');
            $currElement.addClass('active');
        });
    }

    function loadMultiselect(pages, selectedIds) {
        for (var i = 0; i < pages.length; i++) {
            let $option = $('<option>', {
                value: pages[i].id,
                text: pages[i].title
            }).appendTo($multiselect);

            if (selectedIds && selectedIds.indexOf(pages[i].id) !== -1) {
                $option.attr('selected', 'selected');
            }
        }

        Multiselect.Destroy($multiselect.attr('id'));
        Multiselect.Setup($multiselect.attr('id'), function (option, checked, select) {
            let $option = $(option);
            if (!checked) {
                $order.children(`li[data-identifier="${$option.val()}"]`).first().remove();
            } else {
                //generateSubLevelMenu(0);
                $order.append(createSortablePage($option.text(), $option.val()));
            }
        });
    }


    function initNavigation() {
        loadJQueryObjects();
        Data.getJson({ url: getAllParentPagesUrl }).then(function (res) {
            let pages = res.pages;

            loadMultiselect(pages);

            addSpanActiveFunctionality();

            // subLevelMenuInit();

            $order.sortable({ opacity: 0.5 });
            $order.disableSelection();

            function disableSelection(ev) {
                if (this.checked) {
                    $order.sortable('disable').parent().hide();
                    $multiselect.multiselect('disable').hide();
                } else {
                    $order.sortable('enable').parent().show();
                    $multiselect.multiselect('enable').show();
                }
            }


        });
    }

    function edit(element) {
        Data.getJson({ url: getAllParentPagesUrl }).then(function (res) {
            loadJQueryObjects();
            let pages = res.pages;
            let content = JSON.parse(element);
            let selectedOptions = content.pageIds;

            loadMultiselect(pages, selectedOptions);
            addSpanActiveFunctionality();

            for (let i = 0; i < selectedOptions.length; i++) {
                let $option = $multiselect.find('option[value="' + selectedOptions[i] + '"]').attr('selected', 'selected');
                $order.append(createSortablePage($option.text(), selectedOptions[i]));
            }

			$order.sortable({ opacity: 0.5 });

            $heightInput.val(content.height);
            $navigationTypeSelect.val(content.navigationType);
            $fileUrlInput.val(content.fileUrl);

            $logoPosition.find('span').removeClass('active');
            $logoPosition.find(`span[data-position="${content.logoPosition}"]`).addClass('active');

            $menuItemsPosition.find('span').removeClass('active');
            $menuItemsPosition.find(`span[data-position="${content.menuPosition}"]`).addClass('active');

            $menuType.find('span').removeClass('active');
            $menuType.find(`span[data-value="${content.navigationMenuType}"]`).addClass('active');

            $subLevelMenu.val(content.maxDepth);

            if (content.includeLoginButtons) {
                $loginInput.prop('checked', true);
            }

            let depthOption = content.maxDepth;
            $(`#depth-level option[value="${depthOption}"]`).attr('selected', 'selected');
        });
    }

    function save() {
        loadJQueryObjects();
        let navigationType = $navigationTypeSelect.val();
        let logoPositionValue = $logoPosition.find('span.active').data('position');
        let menuItemPositionValue = $menuItemsPosition.find('span.active').data('position');
        let menuTypeValue = $menuType.find('span.active').data('value');

        let ordered = [];
        $order.children().each(function () {
            ordered.push($(this).attr('data-identifier'));
        });

        let model = {
            pageIds: ordered,
            height: $heightInput.val(),
            templateName: $templateName.val(),
            navigationType: navigationType,
            fileUrl: $fileUrlInput.val(),
            logoPosition: logoPositionValue,
            menuPosition: menuItemPositionValue,
            navigationMenuType: menuTypeValue,
            includeLoginButtons: $loginInput.is(':checked'),
            maxDepth: $subLevelMenu.val()
        }


        return JSON.stringify(model);



    }

    return {
        add: initNavigation,
        edit: edit,
        save: save
        // save: function () {



        //     var ordered = [];
        //     $('#pages-order').children().each(function () {
        //         ordered.push($(this).attr('data-identifier'));
        //     });

        //     var depthLevel = $('#depth-level option:selected').val();

        //     return JSON.stringify({ pageIds: ordered, maxDepth: depthLevel});
        // }
    };
}
