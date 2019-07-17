<<<<<<< HEAD
﻿import './layout.js';

import { Data } from '../common/data.js';
=======
﻿import { Data } from '../common/data.js';
>>>>>>> origin/master
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
<<<<<<< HEAD
            $siteSyncButton = $('#site-sync-button'),
            $destinationTitle = $('.destination h4'),
            $sourceContainer = $('#source-container');
=======
            $siteSyncButton = $('#site-sync-button');
>>>>>>> origin/master

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
<<<<<<< HEAD

            let $target = $(this);
            let $item = $target.find('.source-checkbox');

            let id = $item.attr('data-id');
            let displayName = $item.parent().parent().parent().attr('data-displayName');
            let title = $item.attr('data-paragraph-title');

            siteSyncModel.addItem(displayName, id);
            siteSyncCore.addElementToSyncData(displayName, id, title);
=======
            console.log('in select for publish');

            let $target = $(this);
            let dataId = $target.attr('data-id');
            let itemName = $target.attr('data-paragraph-title');

            //if (!($target.is(':checked'))) {
            //    return;
            //}

            let id = $target.attr('data-id');
            let displayName = $target.parent().parent().parent().attr('data-displayName');
            let title = $target.attr('data-paragraph-title');

            siteSyncModel.addItem(displayName, id);
            siteSyncCore.addElementToSyncData(displayName, id, title);
            console.log(siteSyncModel.getCurrentModel());
>>>>>>> origin/master
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
<<<<<<< HEAD
            // $('#staged-container').html('');
=======
            $('#staged-container').html('');
>>>>>>> origin/master
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

<<<<<<< HEAD
        function removeCategory() {
            let $mainElement = $(this).parent();
            let displayName = $mainElement.attr('data-displayName');

            siteSyncCore.removeCategoryFromStaged(displayName);
            siteSyncCore.renderStagedContainer();

            let $checkbox = $(`#source-${displayName}`).find('.source-items');

            $checkbox.prop('checked', false);
        }

=======
>>>>>>> origin/master
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

<<<<<<< HEAD
=======
        function displayHistoryContainer() {
            if ($historyButton.hasClass('clicked')) {
                $historyResultsContainer.html('');

                $historyContainer.css('display', 'none');
                $historyButton.removeClass('history-selected');
                $historyButton.removeClass('clicked');
                return;
            } else {
                $historyContainer.css('display', 'block');
                $historyResultsContainer.html('');
                $historyButton.addClass('history-selected');
                $historyButton.addClass('clicked');

                siteSyncCore.getSiteSyncData();
            }
        }

>>>>>>> origin/master
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
<<<<<<< HEAD
=======

>>>>>>> origin/master
            resetHistoryContainer();
            $('#source-container').html('');
            $('#staged-container').html('');
            $('#destination-container').html('');

            $('.edit-target-form').css('display', 'none');
            $('.create-target-form').css('display', 'none');

<<<<<<< HEAD
            let $historyDataLink = $('#history-button a');
=======
            // enable the start button
            $connectTargetButton.removeClass('grayed-out');
            $siteSyncButton.removeClass('grayed-out');
>>>>>>> origin/master

            if ($(this).val() == 0) {
                return;
            }

            let targetDomain = $targetSelect.val();

            siteSyncModel.updateTargetDomain(targetDomain);


            currSelectedSite = $(this).val();
<<<<<<< HEAD
            $destinationTitle.html(currSelectedSite);
            siteSyncCore.fillContainers(currSelectedSite);
            if (currSelectedSite.length > 3) {
                $historyDataLink.attr('href', '/sitetriks/sitesync/historydata?targetSite=' + currSelectedSite);
            } else {
                $historyDataLink.attr('href', '#');
            }

=======
            siteSyncCore.fillContainers(currSelectedSite);
>>>>>>> origin/master
        }

        function onClickSourceContainerDisplayName() {
            let mainContainer = $(this);
            var displayName = $(this).attr('data-displayName');

<<<<<<< HEAD
            siteSyncCore.getDataByDisplayName(displayName).then(function () {
                let content = mainContainer.next();
                content.slideToggle(500, function () {
                });
                var $fas = mainContainer.find('.fa');
                $fas.toggle();
            })

=======
            var $glyphicons = mainContainer.find('.glyphicon');
            $glyphicons.toggle();
            siteSyncCore.getDataByDisplayName(displayName);

            let content = mainContainer.next();

            content.slideToggle(500, function () {

            });
>>>>>>> origin/master
        }

        function onClickStageContainerDisplayName() {
            let mainContainer = $(this);
            var displayName = $(this).attr('data-displayName');
            let content = mainContainer.next();

<<<<<<< HEAD
            var $fas = mainContainer.find('.fa');
            $fas.toggle();
=======
            var $glyphicons = mainContainer.find('.glyphicon');
            $glyphicons.toggle();
>>>>>>> origin/master

            content.slideToggle(500, function () {
            });
        }

        function onClickDestinationContainerDisplayName() {
            let mainContainer = $(this);
            var displayName = $(this).attr('data-displayName');
<<<<<<< HEAD
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


=======
            var $glyphicons = mainContainer.find('.glyphicon');
            $glyphicons.toggle();

            siteSyncCore.getDataFromDestinationSite(displayName);
            let content = mainContainer.next();

            content.slideToggle(500, function () {
            });
        }

>>>>>>> origin/master
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
<<<<<<< HEAD
=======

>>>>>>> origin/master
            if (selection == 0) {
                return false;
            } else if (selection == 1) {
                siteSyncModel.setDependenciesUseToTrue();
            } else if (selection == 2) {
                siteSyncModel.setDependenciesUseToFalse();
            }

            var data = siteSyncModel.getCurrentModel();
<<<<<<< HEAD
            $siteSyncButton.addClass('grayed-out');
            Data.postJson({ url: url, data: data }).then(function (res) {
=======
            console.log(data);
            $siteSyncButton.addClass('grayed-out');
            Data.postJson({ url: url, data: data }).then(function (res) {
                console.log(res);
>>>>>>> origin/master
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
<<<<<<< HEAD

            Data.getJson({ url: url }).then((res) => {

=======
            console.log(url);

            Data.getJson({ url: url }).then((res) => {
                console.log(res);
>>>>>>> origin/master
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
<<<<<<< HEAD
            let url = '/sitetriks/sitesynctargets/create';

            Data.postJson({ url: url, data: data }).then((res) => {
=======
            console.log(data);
            let url = '/sitetriks/sitesynctargets/create';

            Data.postJson({ url: url, data: data }).then((res) => {
                console.log(res);
>>>>>>> origin/master
                if (res.success) {
                    $('.create-target-form').css('display', 'none');

                    //Add to select menu
                    let $selectMenu = $('#targets-select');
                    let $option = $('<option>', {
                        value: $inputUrl.val(),
                        name: $inputUrl.val()
                    });
                    $option.html($inputUrl.val());
<<<<<<< HEAD
=======
                    console.log(res.siteId);
>>>>>>> origin/master
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
<<<<<<< HEAD
            $('#source-container').on('click', '.action', selectItemsForPublish);
=======
            $('#source-container').on('click', '.source-checkbox', selectItemsForPublish);
>>>>>>> origin/master

            $('#source-container').on('click', '.select-all', selectAllItems);

            $('#source-container').on('click', '.source-items', selectAllByDisplayName);

            $('#staged-container').on('click', '.deselect-all', deselectAllItems);

<<<<<<< HEAD
            $('#staged-container').on('click', '.remove-item', removeSingleStagedItem);

            $('#staged-container').on('click', '.remove-category', removeCategory);
=======
            $('#staged-container').on('click', '.glyphicon-remove', removeSingleStagedItem);
>>>>>>> origin/master

            $targetDeleteButton.on('click', displayDeleteMessage);

            $('.btn-yes').on('click', deleteTarget);

            $('.btn-no').on('click', closeDeleteMessage);

<<<<<<< HEAD
      //      $('#history-button').on('click', displayHistoryContainer);
=======
            $('#history-button').on('click', displayHistoryContainer);
>>>>>>> origin/master

            $('.history-data').on('click', '.details', displaySyncedFiles);

            $connectTargetButton.on('click', onConnectTarget);

            $targetSelect.on('change', onTargetSelect);

            $targetSelect.on('change', setEditTarget);

            $siteSyncButton.on('click', onSync);

            /*Slide Events */
            $('#source-container').on('click', '.main-element', onClickSourceContainerDisplayName);

            $('#staged-container').on('click', '.main-element', onClickStageContainerDisplayName);

            $('#destination-container').on('click', '.main-element', onClickDestinationContainerDisplayName);
<<<<<<< HEAD

            $('#destination-container').on('click', '.expand-all', expandAllInDestination);

            $('#destination-container').on('click', '.shrink-all', shrinkAll);
=======
>>>>>>> origin/master
            /* End Slide Events */

            $('.dependencies').on('click', '.btn-dependencies', onClickDependencyRadioButton);

            /*To move*/
<<<<<<< HEAD
=======

>>>>>>> origin/master
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