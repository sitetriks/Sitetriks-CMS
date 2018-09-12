"use strict";

var WidgetsDraggable = function () {
    return {
        init: function init(w) {
            $(document).ready(function () {
                if (typeof w.makeDrop === "function") {
                    w.makeDrop($(".drop"));
                }

                $(".drop").sortable();

                $('.drag').draggable({
                    revert: 'true',
                    helper: "clone",
                    opacity: 0.75,
                    appendTo: 'body'
                });

                $(".connected-widget-container").sortable({
                    appendTo: 'body',
                    helper: 'clone',
                    connectWith: ".connected-widget-container",
                    receive: function receive(event, ui) {
                        var id = ui.item.data("identifier");

                        var widget = w.getPageContent().find(function (e) {
                            return e.id === id;
                        });

                        widget.Placeholder = $(event.target).attr("data-placeholder");
                    },
                    stop: function stop(event, ui) {
                        var containers = $('.drop');
                        var order = 0;

                        containers.each(function () {
                            var children = $(this).children('.preview-placeholder');

                            children.each(function () {
                                var id = $(this).data("identifier");

                                if (id == undefined) {
                                    return;
                                }

                                var widget = w.getPageContent().find(function (e) {
                                    return e.id == id;
                                });
                                widget.order = order;
                                order++;
                            });
                        });
                    },
                    over: function over() {
                        $(this).addClass('drag-hover');
                    },
                    out: function out() {
                        $(this).removeClass('drag-hover');
                    }
                }).disableSelection();
            });
        }
    };
}();