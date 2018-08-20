'use strict';

var Multiselect = function () {
    function setup(id, onChangeCallback) {
        $('#' + id).multiselect({
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
            onChange: onChangeCallback
        });
    }

    function refresh(id) {
        $("#" + id).multiselect("refresh");
    }

    return {
        Setup: setup,
        Refresh: refresh
    };
}();