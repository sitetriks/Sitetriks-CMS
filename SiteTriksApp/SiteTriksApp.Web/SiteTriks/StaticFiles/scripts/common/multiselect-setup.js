import 'bootstrap';
import 'bootstrap-select';

var Multiselect = (function () {
    function setup(id, onChangeCallback) {
        setupElement($('#' + id), onChangeCallback);
    }

    function setupElement($element, callback) {
        $element.selectpicker({
            multiple: true,
            height: '105px',
            header: '',
            noneSelectedText: 'None',
            selectedTextFormat: 'count > 3',
            selectedText: function (numChecked, numTotal, checkedItems) {
                return numChecked + ' of ' + numTotal + ' checked';
            },
            selectedList: false,
            show: ['blind', 200],
            hide: ['fade', 200],
            position: {
                my: 'left top',
                at: 'left bottom'
            },
        });
    }

    function refresh(id) {
        $('#' + id).selectpicker('refresh');
    }

    function destroy(id) {
        $('#' + id).selectpicker('destroy');
    }

    return {
        Setup: setup,
        SetupElement: setupElement,
        Refresh: refresh,
        Destroy: destroy
    };
})();

export { Multiselect };