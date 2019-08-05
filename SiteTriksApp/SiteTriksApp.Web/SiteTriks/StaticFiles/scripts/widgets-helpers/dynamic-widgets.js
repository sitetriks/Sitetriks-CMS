// Add loader!

function details(event, id, className) {
    let $trigger = $(event);
    Loader.show();

    $.ajax({
        method: 'GET',
        url: '/widget/dynamicwidget/getdetails?className=' + className + '&id=' + id,
        success: function (res) {
            $trigger.parents('.dynamic-widget-wrapper').html(res);
            Loader.hide();
        },
        error: function (res) {
            console.log(res);
            Loader.hide();
        }
    })
}

function backToList(event, className) {
    let $trigger = $(event);
    Loader.show();

    $.ajax({
        method: 'GET',
        url: '/widget/dynamicwidget/getlist?className=' + className,
        success: function (res) {
            $trigger.parents('.dynamic-widget-wrapper').html(res);
            Loader.hide();
        },
        error: function (res) {
            console.log(res);
            Loader.hide();
        }
    })
}