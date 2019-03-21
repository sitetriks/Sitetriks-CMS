export function createSiteSyncModel () {
    var syncModel = {
        'includeDependencies': true,
        'targetDomain': '',
        'itemsForSync': []
    };

    function addItem(displayName, id) {

        if (syncModel.itemsForSync.length == 0) {
            syncModel.itemsForSync.push({
                'displayName': displayName,
                'ids': [id]
            });

            return;
        }

        let currentObj = syncModel.itemsForSync.find(obj => obj.displayName == displayName);

        if (!currentObj) {

            syncModel.itemsForSync.push({
                'displayName': displayName,
                'ids': [id]
            });
            return;
        } else if (currentObj) {

            let currentId = currentObj.ids.indexOf(id);

            if (currentId == -1) {
                currentObj.ids.push(id);
            }
        }

    }

    function removeItem(displayName, id) {
        let currentObj = syncModel.itemsForSync.find(obj => obj.displayName == displayName);

        if (currentObj) {
            var currIndex = syncModel.itemsForSync.find(obj => obj.displayName == displayName).ids.indexOf(id);

            if (currIndex > -1) {
                syncModel.itemsForSync.find(obj => obj.displayName == displayName).ids.splice(currIndex, 1);
            }
        }
    }

    function removeAllItems() {
        syncModel.itemsForSync = [];
    }

    function updateTargetDomain(url) {
        syncModel.targetDomain = url;
    }

    function setDependenciesUseToTrue() {
        syncModel.includeDependencies = true;
    }

    function setDependenciesUseToFalse() {
        syncModel.includeDependencies = false;

    }

    return {
        addItem: addItem,
        removeItem: removeItem,
        removeAllItems: removeAllItems,
        updateTargetDomain: updateTargetDomain,
        setDependenciesUseToTrue: setDependenciesUseToTrue,
        setDependenciesUseToFalse: setDependenciesUseToFalse,
        getCurrentModel: function () {
            return syncModel;
        }
    };
}
