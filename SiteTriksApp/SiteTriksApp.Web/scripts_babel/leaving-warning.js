"use strict";

function onUnload(e) {
    if (sessionStorage.getItem("leaving-warning") === "no") {
        sessionStorage.removeItem("leaving-warning");
        return;
    }

    var lastClickedElement = document.activeElement;

    var $element = $(lastClickedElement);

    if (lastClickedElement.tagName === "INPUT" && $element.attr("type") === "submit") {
        return;
    }

    if (lastClickedElement.tagName === "BUTTON" && $element.hasClass("button-submit")) {
        return;
    }

    var dialogText = 'You may have changes!!!';
    e.returnValue = dialogText;
    return dialogText;
}
window.onbeforeunload = onUnload;