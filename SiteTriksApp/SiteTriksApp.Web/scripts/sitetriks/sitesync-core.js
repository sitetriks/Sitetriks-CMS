import { Data } from '../common/data.js';
import { Notifier } from '../common/notifier.js';
import { loadHandlebarsTemplates } from '../common/handlebars.js';

export function createSiteSyncCore (siteSyncModel) {
    let getDisplayNamesUrl;
    let getByDisplayNameUrl;
    let getByDisplayNameTargetUrl;
    let $historyContainer = $('.history-content-results');
    let targetDomain = $('#targets-select').val();
    let templatesCache = {};
    let templates = [{ name: 'sitesync-source', url: '/templates/sitesync-source.html' }, { name: 'sitesync-destination', url: '/templates/sitesync-destination.html' }, { name: 'sitesync-staged', url: '/templates/sitesync-staged.html' }, { name: 'sitesync-history', url: '/templates/sitesync-history.html' }, { name: 'sitesync-source-listed', url: '/templates/sitesync-source-listed.html' }, { name: 'sitesync-destination-listed', url: '/templates/sitesync-destination-listed.html' }];

    loadHandlebarsTemplates(templatesCache, templates).then(() => {
        //   console.log(templatesCache);
    });

    // Data object 

    let siteSyncContainersData = {
        sourceData: {},
        stagedItems: {},
        destinationData: {}
    };

    /* Staged container related functions*/

    function addElementToSyncData(displayName, id, title) {
        console.log(siteSyncContainersData.stagedItems);
        if (!([`${displayName}`] in siteSyncContainersData.stagedItems)) {
            siteSyncContainersData.stagedItems[`${displayName}`] = [{ id: id, title: title }] || [];
        }
        else {
            let containsItem = false;

            for (var i = 0; i < siteSyncContainersData.stagedItems[`${displayName}`].length; i++) {
                if (siteSyncContainersData.stagedItems[`${displayName}`][i].id === id) {
                    containsItem = true;
                }
            }
            if (containsItem === false) {
                siteSyncContainersData.stagedItems[`${displayName}`].push({ id: id, title: title });
            }
        }
        renderStagedContainer();
    }

    function removeElementFromSyncData(displayName, id) {
        if ([`${displayName}`] in siteSyncContainersData.stagedItems && siteSyncContainersData.stagedItems[`${displayName}`].length > 0) {
            siteSyncContainersData.stagedItems[`${displayName}`] = siteSyncContainersData.stagedItems[`${displayName}`].filter(el => el.id !== id);
        }

        if ([`${displayName}`] in siteSyncContainersData.stagedItems && siteSyncContainersData.stagedItems[`${displayName}`] === 0) {
            delete siteSyncContainersData.stagedItems[`${displayName}`];
        }
        renderStagedContainer();
    }

    function selectAllSourceData() {
        var currDomain = getCurrentSelectedSite();
        var displayNamesUrl = `${getDisplayNamesUrl}?targetDomain=` + currDomain;
        let displayNamesArray;

        Data.getJson({ url: displayNamesUrl }).then((res) => {
            if (res.success) {
                displayNamesArray = res.displayNames;
            }
            return displayNamesArray;
        }).then((displayNamesArray) => {
            let promises = [];
            displayNamesArray.forEach((displayName) => {
                var url = `?displayName=${displayName}&domain=${currDomain}`;

                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameUrl + url, siteSyncContainersData.sourceData));
                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameTargetUrl + url, siteSyncContainersData.destinationData));
            });

            return Promise.all(promises).then((res) => console.log(res));
        }).then(function () {
            // let sourceDataHtml = templatesCache['sitesync-source']({ items: siteSyncContainersData.sourceData });
            // let destinationHtml = templatesCache['sitesync-destination']({ items: siteSyncContainersData.destinationData });
            let stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems });

            //  $('#source-container').html(sourceDataHtml);
            //  $('#destination-container').html(destinationHtml);
            $('#staged-container').html(stagedHtml);
            siteSyncContainersData.stagedItems = siteSyncContainersData.sourceData;

            for (const key in siteSyncContainersData.sourceData) {
                let value = siteSyncContainersData.sourceData[key];
                siteSyncModel.addItem(key, value.id);
            }
            renderStagedContainer();

        }, Data.defaultError);

    }

    function deselectAllSourceData() {
        siteSyncContainersData.stagedItems = {};
    }

    function renderStagedContainer() {
        let stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems });
        $('#staged-container').html(stagedHtml);
    }

    function init(getDisplayNames, getByDisplayName, getByDisplayNameTarget) {
        getDisplayNamesUrl = getDisplayNames;
        getByDisplayNameUrl = getByDisplayName;
        getByDisplayNameTargetUrl = getByDisplayNameTarget;
    }


    /* Fill containers */

    /* For get all */
    function fillContainers(domain) {
        var displayNamesUrl = `${getDisplayNamesUrl}?targetDomain=` + domain;
        let displayNamesArray;
        var currDomain = getCurrentSelectedSite();

        Data.getJson({ url: displayNamesUrl }).then((res) => {
            if (res.success) {
                displayNamesArray = res.displayNames;
            }
            return displayNamesArray;
        }).then((displayNamesArray) => {
            let promises = [];
            displayNamesArray.forEach((displayName) => {
                var url = `?displayName=${displayName}&domain=${currDomain}`;
                //  console.log(url);
                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameUrl + url, siteSyncContainersData.sourceData));
                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameTargetUrl + url, siteSyncContainersData.destinationData));

                //  console.log(promises);
            });

            return Promise.all(promises).then((res) => console.log(res));
        }).then(function () {
            let sourceDataHtml = templatesCache['sitesync-source']({ items: siteSyncContainersData.sourceData });
            let destinationHtml = templatesCache['sitesync-destination']({ items: siteSyncContainersData.destinationData });
            let stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems.itemsForSync });

            console.log(siteSyncContainersData);

            $('#source-container').html(sourceDataHtml);
            $('#destination-container').html(destinationHtml);
            $('#staged-container').html(stagedHtml);

        }, Data.defaultError);
    }

    /* End of get all */

    function fillContainers(domain) {
        var displayNamesUrl = `${getDisplayNamesUrl}?targetDomain=` + domain;
        let displayNamesArray;
        var currDomain = getCurrentSelectedSite();

        Data.getJson({ url: displayNamesUrl }).then((res) => {
            if (res.success) {
                displayNamesArray = res.displayNames;
            }
            return displayNamesArray;
        }).then((displayNamesArray) => {

            for (var i = 0; i < displayNamesArray.length; i++) {
                siteSyncContainersData.sourceData[`${displayNamesArray[i]}`] = [];
                siteSyncContainersData.destinationData[`${displayNamesArray[i]}`] = [];
            }

            let sourceDataHtml = templatesCache['sitesync-source']({ items: displayNamesArray });
            let destinationHtml = templatesCache['sitesync-destination']({ items: displayNamesArray });
            let stagedHtml = templatesCache['sitesync-staged']({});

            // console.log(siteSyncContainersData);

            $('#source-container').html(sourceDataHtml);
            $('#destination-container').html(destinationHtml);
            $('#staged-container').html(stagedHtml);

        }, Data.defaultError);
    }

    function getDataByDisplayName(displayName) {
        var currDomain = getCurrentSelectedSite();
        var url = `?displayName=${displayName}&domain=${currDomain}`;
        $(`#source-${displayName}-content`).html('Loading ...');

        return getDisplayNameForCurrentDomain(displayName, getByDisplayNameUrl + url, siteSyncContainersData.sourceData).then((res) => {

            let sourceItemsHtml = templatesCache['sitesync-source-listed']({ items: siteSyncContainersData.sourceData[`${displayName}`] });
            $(`#source-${displayName}-content`).html(sourceItemsHtml);
        });

    }

    function getDataFromDestinationSite(displayName) {

        var currDomain = getCurrentSelectedSite();
        var url = `?displayName=${displayName}&domain=${currDomain}`;

        return getDisplayNameForCurrentDomain(displayName, getByDisplayNameTargetUrl + url, siteSyncContainersData.destinationData).then((res) => {

            let destinationItemsHtml = templatesCache['sitesync-destination-listed']({ items: siteSyncContainersData.destinationData[`${displayName}`] });

            $(`#destination-${displayName}-content`).html(destinationItemsHtml);
        });
    }

    function getDisplayNameForCurrentDomain(displayName, url, elementToStore) {
        return Data.getJson({ url: url }).then((res) => {
            if (!res || !res.success) {
                console.error(res);
                return Promise.reject();
            }

            elementToStore[`${displayName}`] = res.siteSyncItems || [];
        });
    }

    function getItemsByDisplayName(displayName) {
        var currDomain = getCurrentSelectedSite();

        var url = `${getByDisplayNameUrl}?displayName=${displayName}&domain=${currDomain}`;

        let items;
        return Data.getJson({ url: url }).then((res) => {
            if (res.success) {
                items = res.siteSyncItems;
                console.log(items);
            }

            if (items.length > 0) {
                items.forEach((item) => {

                    siteSyncModel.addItem(displayName, item.id);
                    addElementToSyncData(displayName, item.id, item.title);
                });
            }
            return res.siteSyncItems;
        });
    }


    function selectItemsForPublishByParentDisplayName(displayName, itemName, itemId) {
        var $stagedContainer = $('#staged-container');
        let element = '<div class="' + itemName + '"><span class="glyphicon glyphicon-remove"></span> ' + itemName + '</div>';

        let $parent = $stagedContainer.find('#staged-' + displayName + '-content');

        if ($parent.find('.' + itemName).length > 0) {
            return;
        }
        $parent.append(element);
    }

    function checkIfDependencyIsChecked() {
        let $dependencies = $('.btn-dependencies');
        let status = 0;
        if ($($dependencies[0]).prop('checked') !== true && $($dependencies[1]).prop('checked') !== true) {
            Notifier.createAlert({
                containerId: '#alerts',
                message: 'You need to select whether you want the dependencies synced as well.',
                status: 'danger',
                seconds: 5
            });
            status = 0;
            return status;
        } else if ($($dependencies[0]).prop('checked') === true) {
            Notifier.createAlert({
                containerId: '#alerts',
                message: 'Your items are being synced with their related dependencies.',
                status: 'success',
                seconds: 5
            });
            status = 1;
            return status;
        } else if ($($dependencies[1]).prop('checked') === true) {
            Notifier.createAlert({
                containerId: '#alerts',
                message: 'Your items are being synced without their related dependencies.',
                status: 'success',
                seconds: 5
            });
            status = 2;
            return status;
        }
    }

    function getCurrentSelectedSite() {
        let currSelectedSite = $('#targets-select option:selected').val();

        return currSelectedSite;
    }

    function getSiteSyncData() {
        let url = '/sitetriks/sitesync/getsitesyncstatuses?domain=' + $('#targets-select').val();
        // let $container = $('.history-data');
        $historyContainer;

        Data.getJson({ url: url }).then(function (res) {
            //$historyContainer.append('<div class="row"><div class="col-lg-1"> Status </div><div class="col-lg-2"> Origin Site </div><div class="col-lg-2"> Target Site </div><div class="col-lg-2"> Origin User Id </div><div class="col-lg-2"> Date Created </div><div class="col-lg-2"> Date Modified </div><div class="col-lg-1"></div></div>');
            $(res.statuses).each(function (index, el) {

                // add template here

                let stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems });
                console.log(stagedHtml);
                $('#staged-container').html(stagedHtml);



                let detailsButton;
                let itemsArray = el.communicationModels;

                if (itemsArray.length > 0) {
                    detailsButton = '<span class="details">Details</span>';
                } else {
                    detailsButton = '';
                }

                let tableLine = '<div class="row results"><div class="col col-lg-2"> ' + el.status + ' </div><div class="col col-lg-2"> ' + el.originSite + ' </div><div class="col col-lg-2"> ' + el.targetSite + ' </div><div class="col col-lg-2"> ' + el.originUserId + ' </div><div class="col col-lg-2"> ' + el.dateCreated + ' </div><div class="col col-lg-2">' + detailsButton + '</div></div>';

                $historyContainer.append(tableLine);

                if (itemsArray.length > 0) {
                    let $fileDetailsWrapper = $('<div>').addClass('file-details-wrapper').css('display', 'none');
                    $historyContainer.append($fileDetailsWrapper);
                    let categoryTitles = '<div class="row file-details"><div class="col col-lg-2"></div><div class="col col-lg-2"> Title </div><div class="col col-lg-2"> Successful</div><div class="col col-lg-2">Item type</div><div class="col col-lg-2">Message</div></div>';
                    $fileDetailsWrapper.append(categoryTitles);

                    $(itemsArray).each(function (index, syncedFile) {
                        let status = 'yes';
                        if (syncedFile.successful === false) {
                            status = 'no';
                        }

                        let fileDetails = '<div class="row file-details"><div class="col col-lg-2"></div><div class="col col-lg-2">' + syncedFile.title + ' </div><div class="col col-lg-2">' + status + '</div><div class="col col-lg-2">' + syncedFile.itemType + '</div><div class="col col-lg-2">' + syncedFile.message + '</div></div>';

                        $fileDetailsWrapper.append(fileDetails);
                    });
                }
            });
        });
    }

    return {
        init,
        fillContainers,
        getItemsByDisplayName,
        selectItemsForPublishByParentDisplayName,
        getDataFromDestinationSite,
        getDataByDisplayName,
        getSiteSyncData,
        checkIfDependencyIsChecked,
        addElementToSyncData,
        removeElementFromSyncData,
        selectAllSourceData,
        deselectAllSourceData,
        renderStagedContainer
    };
}
