var WidgetsDraggable = function () {
    return {
        init: function (w) {
            $(document).ready(function () {
                if (typeof w.makeDrop === 'function') {
                    w.makeDrop($('.drop'));
                }

                $('.drop').sortable();

                $('.drag').draggable({
                    revert: 'true',
                    helper: 'clone',
                    opacity: 0.75,
                    start: function (event, ui) {
                        ui.helper.css('width', '85%');
                    }
                });

                $('.connected-widget-container').sortable({
                    appendTo: 'body',
                    helper: 'clone',
                    connectWith: '.connected-widget-container',
                    receive: function (event, ui) {
                        var id = ui.item.data('identifier');

                        var widget = w.getPageContent().find(e => e.id === id);

                        widget.Placeholder = $(event.target).attr('data-placeholder');
                    },
                    stop: function (event, ui) {
                        var containers = $('.drop');
                        var order = 0;

                        containers.each(function () {
                            var children = $(this).children('.preview-placeholder');

                            children.each(function () {
                                var id = $(this).data('identifier');

                                if (!id) {
                                    return;
                                }

                                var widget = w.getPageContent().find(e => e.id === id);
                                widget.order = order;
                                order++;
                            });
                        });
                    },
                    over: function () {
                        $(this).addClass('drag-hover');
                    },
                    out: function () {
                        $(this).removeClass('drag-hover');
                    }
                }).disableSelection();
            });
        }
    };
}();
