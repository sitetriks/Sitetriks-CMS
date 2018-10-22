'use strict';

var Multiselect = function () {
    function setup(id, onChangeCallback) {
        setupElement($('#' + id), onChangeCallback);
    }

    function setupElement($element, callback) {
        $element.multiselect({
            multiple: true,
            height: '105px',
            header: '',
            noneSelectedText: 'None',
            numberDisplayed: '',
            selectedText: function selectedText(numChecked, numTotal, checkedItems) {
                return numChecked + ' of ' + numTotal + ' checked';
            },
            selectedList: false,
            show: ['blind', 200],
            hide: ['fade', 200],
            position: {
                my: 'left top',
                at: 'left bottom'
            },
            onChange: callback
        });
    }

    function refresh(id) {
        $("#" + id).multiselect("refresh");
    }

    function destroy(id) {
        $('#' + id).multiselect('destroy');
    }

    return {
        Setup: setup,
        SetupElement: setupElement,
        Refresh: refresh,
        Destroy: destroy
    };
}();