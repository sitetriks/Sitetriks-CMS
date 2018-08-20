'use strict';

// Add loader!

function details(event, id, className) {
    var $trigger = $(event);
    Loader.show();

    $.ajax({
        method: 'GET',
        url: '/widget/dynamicwidget/getdetails?className=' + className + '&id=' + id,
        success: function success(res) {
            $trigger.parents('.dynamic-widget-wrapper').html(res);
            Loader.hide();
        },
        error: function error(res) {
            console.log(res);
            Loader.hide();
        }
    });
}

function backToList(event, className) {
    var $trigger = $(event);
    Loader.show();

    $.ajax({
        method: 'GET',
        url: '/widget/dynamicwidget/getlist?className=' + className,
        success: function success(res) {
            $trigger.parents('.dynamic-widget-wrapper').html(res);
            Loader.hide();
        },
        error: function error(res) {
            console.log(res);
            Loader.hide();
        }
    });
}