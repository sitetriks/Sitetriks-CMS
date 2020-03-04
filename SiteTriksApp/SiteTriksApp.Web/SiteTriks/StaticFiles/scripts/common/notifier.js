import { Blur } from '../common/loader.js';

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

    function storeAlerts({ containerClass, alertMessage, status, counterClass }) {
        let $container = $(containerClass);
        let $counterContainer = $(counterClass);
        let currentCount = + $counterContainer.html();

        let $message = $('<div></div>', { html: alertMessage, class: 'listed-message alert alert-' + (status || 'light') });

        let current_datetime = new Date()
        let date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()


        let $dateContainer = $('<div></div>', { html: date, class: 'notification-time' });
        $message.append($dateContainer);

        $container.append($message);

        $counterContainer.html(currentCount + 1);
    }

    function displayList() {
        let $notificationsContainer = $('.notifications-list-wrapper');
        let $notificationsListed = $notificationsContainer.find('.notifications-listed');

        $notificationsContainer.find('.notifications-default').css('display', 'none');

        $notificationsListed.show("slide", { direction: "right" }, 700);

        let $blurContainer = Blur.add({ hideOnBlurClick: false, color: '#fff' });
        $('.body').append($blurContainer);
    }

    function hideList() {
        let $notificationsContainer = $('.notifications-list-wrapper');
        $notificationsContainer.find('.notifications-default').css('display', 'block');
        $notificationsContainer.find('.notifications-listed').css('display', 'none');

        Blur.remove();

    }

    return {
        createAlert: createAlert,
        storeAlerts: storeAlerts,
        displayList: displayList,
        hideList: hideList
    };
}());

export { Notifier };
