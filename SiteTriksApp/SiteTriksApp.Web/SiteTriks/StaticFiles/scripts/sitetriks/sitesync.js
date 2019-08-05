import './layout.js';

import { Data } from '../common/data.js';
import { Notifier } from '../common/notifier.js';
import { createSiteSyncModel } from './sitesync-model.js';
import { createSiteSyncCore } from './sitesync-core';

window.siteSyncModule = (function () {
    function init(connectToTargetUrl, postSyncUrl, getDisplayNamesUrl, getByDisplayNameUrl, getByDisplayNameTargetUrl) {
        const siteSyncModel = createSiteSyncModel();
        const siteSyncCore = createSiteSyncCore(siteSyncModel);
        siteSyncCore.init(getDisplayNamesUrl, getByDisplayNameUrl, getByDisplayNameTargetUrl);

        let currSelectedSite = $('#targets-select option:selected').val(),
            currentSelectedSiteId = $('#targets-select option:selected').attr('data-id'),
            $targetBox = $('.target-box'),
            $targetEditButton = $('.target-button.edit'),
            $targetAddButton = $('.target-button.add'),
            $targetDeleteButton = $('.target-button.delete'),
            $targetSelect = $targetBox.find('#targets-select'),
            // $targetDeleteButton = $targetBox.find('.delete-target'),
            $connectTargetButton = $('#connect-target'),
            $historyContainer = $('.history-data'),
            $historyButton = $('#history-button'),
            $historyResultsContainer = $('.history-content-results'),
            $alertBox = $('#site-sync-alert'),
            $siteSyncButton = $('#site-sync-button'),
            $destinationTitle = $('.destination h4'),
            $sourceContainer = $('#source-container');

        bindEvents();

        function getCurrentSelectedSite() {
            let currSelectedSite = $('#targets-select option:selected').val();

            return currSelectedSite;
        }

        function resetHistoryContainer() {
            $historyContainer.css('display', 'none');
            $historyButton.removeClass('history-selected');
        }

        /*Events functions */
        function selectItemsForPublish() {

            let $target = $(this);
            let $item = $target.find('.source-checkbox');

            let id = $item.attr('data-id');
            let displayName = $item.parent().parent().parent().attr('data-displayName');
            let title = $item.attr('data-paragraph-title');

            siteSyncModel.addItem(displayName, id);
            siteSyncCore.addElementToSyncData(displayName, id, title);
        }

        function selectAllItems() {
            let $container = $('#source-container');
            let $checkboxes = $container.find('.source-items');

            $checkboxes.prop('checked', true);

            siteSyncCore.selectAllSourceData();
        }


        // checkbox select
        function selectAllByDisplayName() {
            var displayName = $(this).parent().attr('data-displayName');

            siteSyncCore.getItemsByDisplayName(displayName);
        }

        function deselectAllItems() {
            // $('#staged-container').html('');
            uncheckItems();
            siteSyncModel.removeAllItems();
            siteSyncCore.deselectAllSourceData();
        }

        function uncheckItems() {
            $('.source-items').prop('checked', false);
        }

        function removeSingleStagedItem() {
            let $target = $(this);
            let displayName = $target.parent().parent().attr('id').split('-')[1];
            let itemId = $target.parent().attr('data-id');

            $target.parent().remove();

            // add removeItem
            siteSyncCore.removeElementFromSyncData(displayName, itemId);
            siteSyncModel.removeItem(displayName, itemId);
        }

        function removeCategory() {
            let $mainElement = $(this).parent();
            let displayName = $mainElement.attr('data-displayName');

            siteSyncCore.removeCategoryFromStaged(displayName);
            siteSyncCore.renderStagedContainer();

            let $checkbox = $(`#source-${displayName}`).find('.source-items');

            $checkbox.prop('checked', false);
        }

        function displayDeleteMessage() {
            let $popup = $('.delete-popup');
            $popup.css('display', 'block');
        }

        function deleteTarget() {
            let $selectedOption = $targetSelect.find(':selected');
            let targetId = $targetSelect.find(':selected').attr('data-id');

            let url = '/sitetriks/sitesynctargets/delete/' + targetId;

            Data.postJson({ url }).then(function () {
                $targetSelect.val(0);
                $selectedOption.css('display', 'none');
            });

            closeDeleteMessage();
        }

        function displayDeleteMessage() {
            let $popup = $('.delete-popup');
            $popup.css('display', 'block');
        }

        function closeDeleteMessage() {
            let $popup = $('.delete-popup');

            $popup.css('display', 'none');
        }

        function displaySyncedFiles() {
            let $target = $(this);
            let $fileDetails = $target.parent().parent().next();

            $fileDetails.toggle();
        }

        function onConnectTarget(e) {
            var $target = $(e.target);
            resetHistoryContainer();

            if ($target.hasClass('grayed-out')) {
                $target.removeClass('grayed-out');
            }

            currSelectedSite = getCurrentSelectedSite();
            var url = `${connectToTargetUrl}?targetDomain=` + currSelectedSite;
            let status = 'danger';

            Data.getJson({ url: url }).then((res) => {
                if (!(res.success === false)) {
                    $('#connect-target').addClass('grayed-out');
                    status = 'success';
                }

                Notifier.createAlert({
                    containerId: '#alerts',
                    message: res.message,
                    seconds: 5,
                    status: status
                });
            });
        }

        function onTargetSelect() {
            resetHistoryContainer();
            $('#source-container').html('');
            $('#staged-container').html('');
            $('#destination-container').html('');

            $('.edit-target-form').css('display', 'none');
            $('.create-target-form').css('display', 'none');

            let $historyDataLink = $('#history-button a');

            if ($(this).val() == 0) {
                return;
            }

            let targetDomain = $targetSelect.val();

            siteSyncModel.updateTargetDomain(targetDomain);


            currSelectedSite = $(this).val();
            $destinationTitle.html(currSelectedSite);
            siteSyncCore.fillContainers(currSelectedSite);
            if (currSelectedSite.length > 3) {
                $historyDataLink.attr('href', '/sitetriks/sitesync/historydata?targetSite=' + currSelectedSite);
            } else {
                $historyDataLink.attr('href', '#');
            }

        }

        function onClickSourceContainerDisplayName() {
            let mainContainer = $(this);
            var displayName = $(this).attr('data-displayName');

            siteSyncCore.getDataByDisplayName(displayName).then(function () {
                let content = mainContainer.next();
                content.slideToggle(500, function () {
                });
                var $fas = mainContainer.find('.fa');
                $fas.toggle();
            })

        }

        function onClickStageContainerDisplayName() {
            let mainContainer = $(this);
            var displayName = $(this).attr('data-displayName');
            let content = mainContainer.next();

            var $fas = mainContainer.find('.fa');
            $fas.toggle();

            content.slideToggle(500, function () {
            });
        }

        function onClickDestinationContainerDisplayName() {
            let mainContainer = $(this);
            var displayName = $(this).attr('data-displayName');
            var $fas = mainContainer.find('.fa');
            $fas.toggle();

            siteSyncCore.getDataFromDestinationSite(displayName).then(function () {

                let content = mainContainer.next();

                content.slideToggle(500, function () {
                });
            })
        }

        function expandAllInDestination() {
            let $mainElements = $('#destination-container .main-element');

            for (var i = 0; i < $mainElements.length; i++) {
                let displayName = $($mainElements[i]).attr('data-displayName');
                let content = $($mainElements[i]).next();

                siteSyncCore.getDataFromDestinationSite(displayName).then(function () {
                    content.slideToggle(500, function () {
                    });
                })
            }

            $('#destination-container .fa-angle-right').css('display', 'none');
            $('#destination-container .fa-angle-down').css('display', 'inline-block');
        }

        function shrinkAll() {
            $('.content-element').slideToggle(500, function () {
                $('.content-element').html('');
            });
            $('#destination-container .fa-angle-right').css('display', 'inline-block');
            $('#destination-container .fa-angle-down').css('display', 'none');
        }


        function onClickDependencyRadioButton() {
            let $target = $(this);

            if ($target.prop('checked' === true)) {
                return;
            } else {
                $('.btn-dependencies').parent().removeClass('checked');
                $target.parent().addClass('checked');

            }
        }

        function onSync() {
            var selection = siteSyncCore.checkIfDependencyIsChecked();
            var url = postSyncUrl;
            if (selection == 0) {
                return false;
            } else if (selection == 1) {
                siteSyncModel.setDependenciesUseToTrue();
            } else if (selection == 2) {
                siteSyncModel.setDependenciesUseToFalse();
            }

            var data = siteSyncModel.getCurrentModel();
            $siteSyncButton.addClass('grayed-out');
            Data.postJson({ url: url, data: data }).then(function (res) {
                res.message.map(value => {
                    $('<div/>', {
                        class: 'sync-status-item',
                        html: '<span>' + value.split(',')[1] + '</span><span>' + value.split(',')[2].replace(';', ' ') + '</span>'
                    }).appendTo('#site-sync-alert');
                });
            }).then(function (res) {
                deselectAllItems();
                $siteSyncButton.removeClass('grayed-out');
            });
        }

        function setEditTarget() {
            let targetId = $('#targets-select option:selected').attr('data-id');

            $targetEditButton.attr('data-edit-url', '/sitetriks/sitesynctargets/edit?id=' + targetId);
        }

        function displayEditTarget() {

            let url = $targetEditButton.attr('data-edit-url'),
                $editForm = $('.edit-target-form'),
                $inputName = $editForm.find('#Name'),
                $inputUrl = $editForm.find('#Url');

            $editForm.css('display', 'block');
            $('.create-target-form').css('display', 'none');

            Data.getJson({ url: url }).then((res) => {

                $inputName.val(res.targetName);
                $inputUrl.val(res.url);
            });
        }

        function submitEditData(ev) {
            ev.preventDefault();

            let targetId = $('#targets-select option:selected').attr('data-id'),
                $editForm = $('.edit-target-form'),
                $inputName = $editForm.find('#Name'),
                $inputUrl = $editForm.find('#Url');

            let data = {
                name: $inputName.val(),
                url: $inputUrl.val(),
                id: $('#targets-select option:selected').attr('data-id')
            };

            Data.postJson({
                url: '/sitetriks/sitesynctargets/edit?id=' + targetId,
                data: data
            }).then((res) => {
                if (res.success) {
                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: res.message,
                        seconds: 10,
                        status: 'success'
                    });
                    $('.edit-target-form').css('display', 'none');
                } else {
                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: res.message,
                        seconds: 10,
                        status: 'danger'
                    });
                }
            });
        }

        function displayAddForm() {
            $('.create-target-form').css('display', 'block');
            $('.edit-target-form').css('display', 'none');
        }

        function onTargetCreate(ev) {
            ev.preventDefault();
            let $createForm = $('#create-target-form'),
                $inputName = $createForm.find('#name'),
                $inputUrl = $createForm.find('#url'),
                $email = $createForm.find('#email'),
                $password = $createForm.find('#password');

            let data = {
                name: $inputName.val(),
                url: $inputUrl.val(),
                email: $email.val(),
                password: $password.val()
            };
            let url = '/sitetriks/sitesynctargets/create';

            Data.postJson({ url: url, data: data }).then((res) => {
                if (res.success) {
                    $('.create-target-form').css('display', 'none');

                    //Add to select menu
                    let $selectMenu = $('#targets-select');
                    let $option = $('<option>', {
                        value: $inputUrl.val(),
                        name: $inputUrl.val()
                    });
                    $option.html($inputUrl.val());
                    $option.attr('data-id', res.siteId);

                    $selectMenu.append($option);


                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: res.message,
                        seconds: 10,
                        status: 'success'
                    });
                } else {
                    Notifier.createAlert({
                        containerId: '#alerts',
                        message: res.message,
                        seconds: 10,
                        status: 'danger'
                    });
                }
            });
        }
        /* End Events functions */


        function bindEvents() {
            $('#source-container').on('click', '.action', selectItemsForPublish);

            $('#source-container').on('click', '.select-all', selectAllItems);

            $('#source-container').on('click', '.source-items', selectAllByDisplayName);

            $('#staged-container').on('click', '.deselect-all', deselectAllItems);

            $('#staged-container').on('click', '.remove-item', removeSingleStagedItem);

            $('#staged-container').on('click', '.remove-category', removeCategory);

            $targetDeleteButton.on('click', displayDeleteMessage);

            $('.btn-yes').on('click', deleteTarget);

            $('.btn-no').on('click', closeDeleteMessage);

      //      $('#history-button').on('click', displayHistoryContainer);

            $('.history-data').on('click', '.details', displaySyncedFiles);

            $connectTargetButton.on('click', onConnectTarget);

            $targetSelect.on('change', onTargetSelect);

            $targetSelect.on('change', setEditTarget);

            $siteSyncButton.on('click', onSync);

            /*Slide Events */
            $('#source-container').on('click', '.main-element', onClickSourceContainerDisplayName);

            $('#staged-container').on('click', '.main-element', onClickStageContainerDisplayName);

            $('#destination-container').on('click', '.main-element', onClickDestinationContainerDisplayName);

            $('#destination-container').on('click', '.expand-all', expandAllInDestination);

            $('#destination-container').on('click', '.shrink-all', shrinkAll);
            /* End Slide Events */

            $('.dependencies').on('click', '.btn-dependencies', onClickDependencyRadioButton);

            /*To move*/
            $('.edit').on('click', displayEditTarget);

            $('.btn-add-target').on('click', onTargetCreate);

            $('.btn-edit-target').on('click', submitEditData);

            $targetAddButton.on('click', displayAddForm);
        }
    }

    return {
        init
    };
})();