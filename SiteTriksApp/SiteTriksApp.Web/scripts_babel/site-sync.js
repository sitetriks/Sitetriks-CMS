"use strict";

var BaseSyncHandler;
var Connection;
var Sync;
var SyncDynamicModuleConfigsSync;

$(document).ready(function () {
    if (sessionStorage.getItem("site-sync-domain") != null) {
        $("#domain-holder").val(sessionStorage.getItem("site-sync-domain"));
        sessionStorage.removeItem("site-sync-domain");
    }
    BaseSyncHandler = function () {
        var $alert = $("<div>");
        $alert.addClass("update-nag");

        var $iconContainer = $("<div>");
        $iconContainer.addClass("update-split");

        var $icon = $("<i>");
        $icon.addClass("glyphicon");

        var $text = $("<div>");
        $text.addClass("update-text");

        $iconContainer.append($icon);
        $alert.append($iconContainer);
        $alert.append($text);

        function OnBegin(containerId) {
            $iconContainer.removeClass();
            $iconContainer.addClass("update-split");
            $iconContainer.addClass("update-warning");
            $icon.removeClass();
            $icon.addClass("glyphicon");
            $icon.addClass("glyphicon-refresh");
            $text.text("Waiting...");
            $(containerId).html($alert);
        }

        function OnSuccess(containerId, data) {
            if (data.success == true) {
                $iconContainer.removeClass();
                $iconContainer.addClass("update-split");
                $iconContainer.addClass("update-success");
                $icon.removeClass();
                $icon.addClass("glyphicon");
                $icon.addClass("glyphicon-leaf");
                $text.text(data.message);
            } else {
                $iconContainer.removeClass();
                $iconContainer.addClass("update-split");
                $iconContainer.addClass("update-danger");
                $icon.removeClass();
                $icon.addClass("glyphicon");
                $icon.addClass("glyphicon-warning-sign");
                $text.text(data.message);
            }

            $(containerId).html($alert);
        }

        function OnFailure(containerId) {
            $iconContainer.removeClass();
            $iconContainer.addClass("update-split");
            $iconContainer.addClass("update-danger");
            $icon.removeClass();
            $icon.addClass("glyphicon");
            $icon.addClass("glyphicon-warning-sign");
            $text.text("Error");

            $(containerId).html($alert);
        }

        function partial(func) {
            var args = Array.prototype.slice.call(arguments, 1);
            return function () {
                var allArguments = args.concat(Array.prototype.slice.call(arguments));
                return func.apply(this, allArguments);
            };
        }

        return {
            OnBegin: OnBegin,
            OnSuccess: OnSuccess,
            OnFailure: OnFailure,
            Partial: partial
        };
    }();

    Connection = function () {
        var containerId = "#connection-result";
        var onBegin = BaseSyncHandler.Partial(BaseSyncHandler.OnBegin, containerId);
        var onSuccess = BaseSyncHandler.Partial(BaseSyncHandler.OnSuccess, containerId);
        var onFailure = BaseSyncHandler.Partial(BaseSyncHandler.OnFailure, containerId);

        return {
            OnBegin: onBegin,
            OnSuccess: onSuccess,
            OnFailure: onFailure
        };
    }();

    SyncDynamicModuleConfigsSync = function () {
        var containerId = "#dynamic-config-sync-result";
        var onBegin = BaseSyncHandler.Partial(BaseSyncHandler.OnBegin, containerId);
        var onSuccess = BaseSyncHandler.Partial(BaseSyncHandler.OnSuccess, containerId);
        var onFailure = BaseSyncHandler.Partial(BaseSyncHandler.OnFailure, containerId);

        return {
            OnBegin: onBegin,
            OnSuccess: onSuccess,
            OnFailure: onFailure
        };
    }();

    $('.list-group.checked-list-box .list-group-item').each(function () {
        var $widget = $(this),
            $checkbox = $('<input type="checkbox" class="hidden" />'),
            color = $widget.data('color') ? $widget.data('color') : "primary",
            style = $widget.data('style') == "button" ? "btn-" : "list-group-item-",
            settings = {
            on: {
                icon: 'glyphicon glyphicon-check'
            },
            off: {
                icon: 'glyphicon glyphicon-unchecked'
            }
        };

        $widget.css('cursor', 'pointer');
        $widget.append($checkbox);

        $widget.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            $widget.data('state', isChecked ? "on" : "off");

            $widget.find('.state-icon').removeClass().addClass('state-icon ' + settings[$widget.data('state')].icon);

            if (isChecked) {
                $widget.addClass(style + color + ' active');
            } else {
                $widget.removeClass(style + color + ' active');
            }
        }

        function init() {

            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }

            updateDisplay();

            if ($widget.find('.state-icon').length == 0) {
                $widget.prepend('<span class="state-icon ' + settings[$widget.data('state')].icon + '"></span>');
            }
        }
        init();
    });

    $('#select-all').on('click', function () {
        $('a[data-toggle="collapse"]').each(function () {
            var targetId = $(this).attr("href");

            if (!$(targetId).hasClass("in")) {
                $(this).click();
            }
        });

        $('.list-group.checked-list-box .list-group-item').each(function () {
            if (!$(this).hasClass("active")) {
                $(this).click();
            }
        });
    });

    $('#deselect-all').on('click', function () {
        $('a[data-toggle="collapse"]').each(function () {
            var targetId = $(this).attr("href");

            if ($(targetId).hasClass("in")) {
                $(this).click();
            }
        });

        $('.list-group.checked-list-box .list-group-item').each(function () {
            if ($(this).hasClass("active")) {
                $(this).click();
            }
        });
    });

    $('#sync-granular').on('click', function (event) {
        event.preventDefault();
        var $waiting = $("<b>");
        $waiting.css("color", "orange");
        $waiting.text("Waiting...");
        $("#granular-sync-result").html($waiting);

        var checkedPages = [];
        var checkedTemplates = [];
        var checkedNews = [];
        var checkedLibraries = [];
        var checkedFiles = [];
        var checkedDynamicItems = [];
        var checkedBlogPosts = [];
        var checkedCustomModulesItems = [];

        $("#pages-list li.active").each(function (idx, li) {
            checkedPages.push($(li).children(".model-id").text());
            $(this).remove();
        });

        $("#templates-list li.active").each(function (idx, li) {
            checkedTemplates.push($(li).children(".model-id").text());
            $(this).remove();
        });

        $("#blogposts-list li.active").each(function (idx, li) {
            checkedBlogPosts.push($(li).children(".model-id").text());
            $(this).remove();
        });

        $("#news-list li.active").each(function (idx, li) {
            checkedNews.push($(li).children(".model-id").text());
            $(this).remove();
        });

        $("#libraries-list li.active").each(function (idx, li) {
            checkedLibraries.push($(li).children(".model-id").text());
            $(this).remove();
        });

        $("#files-list li.active").each(function (idx, li) {
            checkedFiles.push($(li).children(".model-id").text());
            $(this).remove();
        });

        $(".dynamic-items-panel").each(function (idx, panel) {
            var className = $(panel).children(".dynamic-class-name").first().text();
            var list = $(panel).children(".checked-list-box");
            var item = {
                className: className,
                itemsIds: []
            };

            $($(list).children("li.active")).each(function (idx, li) {
                item.itemsIds.push($(li).children(".model-id").text());
                $(this).remove();
            });

            checkedDynamicItems.push(item);
        });

        $(".custom-module-items-list").each(function (idx, list) {
            var type = $(list).parent().attr("id");
            var item = {
                className: type,
                itemsIds: []
            };

            $(list).children("li.active").each(function (idx, li) {
                item.itemsIds.push($(li).children(".model-id").text());
                $(this).remove();
            });

            checkedCustomModulesItems.push(item);
        });

        var domain = $("#domain-holder").val();

        var body = {
            PagesIds: checkedPages,
            TemplatesIds: checkedTemplates,
            NewsIds: checkedNews,
            LibrariesIds: checkedLibraries,
            FilesIds: checkedFiles,
            BlogPostsIds: checkedBlogPosts,
            DynamicItems: checkedDynamicItems,
            CustomModulesItems: checkedCustomModulesItems,
            Domain: domain
        };
        console.log(body);
        $.ajax({
            url: "/sitetriks/sitesync/SyncGranular",
            type: "post",
            cors: true,
            contentType: "application/json",
            data: JSON.stringify(body),
            success: function success(data) {
                var $alert = $("<div>");
                $alert.addClass("update-nag");

                var $iconContainer = $("<div>");
                $iconContainer.addClass("update-split");

                var $icon = $("<i>");
                $icon.addClass("glyphicon");

                var $text = $("<div>");
                $text.addClass("update-text");

                $iconContainer.append($icon);
                $alert.append($iconContainer);
                $alert.append($text);

                if (data.success) {
                    $iconContainer.removeClass();
                    $iconContainer.addClass("update-split");
                    $iconContainer.addClass("update-success");
                    $icon.removeClass();
                    $icon.addClass("glyphicon");
                    $icon.addClass("glyphicon-leaf");
                    $text.text(data.message);
                    $("#granular-sync-result").html($alert);
                } else {
                    $iconContainer.removeClass();
                    $iconContainer.addClass("update-split");
                    $iconContainer.addClass("update-danger");
                    $icon.removeClass();
                    $icon.addClass("glyphicon");
                    $icon.addClass("glyphicon-warning-sign");
                    $text.text(data.message);
                    $("#granular-sync-result").html($alert);
                }
            }
        });
    });

    $('#submit-connect').click(function () {
        var domain = $("#domain-holder").val();
        Connection.OnBegin();

        var body = {
            Domain: domain
        };

        $.ajax({
            url: "/sitetriks/sitesync/connect",
            type: "post",
            cors: true,
            contentType: "application/json",
            data: JSON.stringify(body),
            success: function success(data) {
                Connection.OnSuccess(data);
            },
            error: function error() {
                Connection.OnFailure();
            }
        });
    });

    $('#submit-dynamic-config').click(function () {
        var domain = $("#domain-holder").val();
        SyncDynamicModuleConfigsSync.OnBegin();

        var body = {
            Domain: domain
        };

        $.ajax({
            url: "/sitetriks/sitesync/syncdynamicmodulesconfigfiles",
            type: "post",
            cors: true,
            contentType: "application/json",
            data: JSON.stringify(body),
            success: function success(data) {
                SyncDynamicModuleConfigsSync.OnSuccess(data);
            },
            error: function error() {
                SyncDynamicModuleConfigsSync.OnFailure();
            }
        });
    });

    $('#submit-history').click(function () {
        var domain = $("#domain-holder").val();
        $("#history-domain-holder").val(domain);
        sessionStorage.setItem("site-sync-domain", domain);
        $('#sync-history-form').submit();
    });

    $(".update-nag > .update-text label").click(function () {
        $(this).parent().parent().hide();
    });
});