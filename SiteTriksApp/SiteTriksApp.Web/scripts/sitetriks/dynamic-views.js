import { RazorViewsEditor } from '../razor-views-editor.js';
import { WarningWindow } from '../modules/warning-window.js';

var DynamicViews = function () {
    function setupWidgetNameDropdown(selector) {
        $(selector).change(function () {
            let value = $(this).val();
            let $location = $('#location');
            let $info = $('#custom-location-info');

            if (value.indexOf('dynamic/') >= 0) {

                let dynamicClassName = value.replace('dynamic/', '');
                $location.show();
                $info.show();

                $location.val('/Views/Shared/Components/DynamicWidget/' + dynamicClassName + '/{ViewType}/{ViewName}.cshtml');
                $info.text('Change {ViewType} and {ViewName} placeholders!');
            }
            else {

                if (value === 'none') {
                    $location.show();
                } else {
                    $location.hide();
                }

                $location.val('');
                $info.hide();
                $info.val('');
            }
        });
    }

    function init(viewsSource, fromSelector, hiddenViewFieldSelector, widgetsDropdownSelector) {
        RazorViewsEditor.init(viewsSource, fromSelector, hiddenViewFieldSelector);
        setupWidgetNameDropdown(widgetsDropdownSelector);
        WarningWindow.attach();
    }

    return {
        init
    };
}();

window.DynamicViews = DynamicViews;
