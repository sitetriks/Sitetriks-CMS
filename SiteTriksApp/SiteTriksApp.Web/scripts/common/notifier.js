var Notifier = (function () {

    // status is following bootstrap convention: 'danger'(red), 'warning'(yellow), 'success'(green), 'info'(blue)
    function createAlert({ containerId, title, message, status, seconds, isPermanent, selector }) {
        let $title = $('<strong></strong>', { text: title || '' });
        let $closeButton = $('<a></a>', {
            class: 'close',
            'data-dismiss': 'alert',
            'aria-label': 'close',
            html: '&times;'
        });
        let $message = $('<span></span>', { text: ' ' + (message || '') });
        let $alert = $('<div></div>', { class: 'alert alert-' + (status || 'info') });

        $alert.append($title)
            .append($message)
            .append($closeButton)
            .appendTo(selector || containerId || 'body');

        if (!isPermanent) {
            setTimeout(function () {
                $alert.fadeOut(500, function () {
                    $alert.remove();
                });
            }, (seconds || 10) * 1000);
        }
    }

    return {
        createAlert: createAlert
    };
}());

export { Notifier };
