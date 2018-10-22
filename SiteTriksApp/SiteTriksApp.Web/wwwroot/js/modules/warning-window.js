'use strict'

let WarningWindow = function(mediator, logger) {    
    
    function onUnload(e) {
        if(!hasChanges()) {
            return;
        }   
        
        let confirmationMessage = 'It looks like you have been editing something. '
        + 'If you leave before saving, your changes will be lost.';
        
        e.preventDefault();
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }
    
    window.onbeforeunload = onUnload;
    //var lastClickOnElement;
    //$(document).click(function (event) {
    //    lastClickOnElement= $(event.target);
    //});

    var lastClickedElement;
    document.addEventListener('click', function (e) {
        e = e || window.event;
        lastClickedElement = e.target || e.srcElement;
            //lastClicked = target.textContent || target.innerText;
    }, false);
    
    function hasTextAreasWithText() {
        let $textareas = $('textarea');
        //Add tinymce get text from textarea likes input
        if($textareas.length > 0) {
            return true;
        } 
        
        return false;
    }
    
    function hasInputsWithText() {
        let hasText = false;
        let $inputs = $('input[type=text]').each(function() {
            if($(this).val() != '') {
                hasText = true;
                return;
            }        
        });
        
        return hasText;
    }

    function checkElementForDataAttr(lastClickedElement, attribute) {
        let attr = $(lastClickedElement).data(attribute);

        if(attr) {
            return attr;
        }

        return "";
    }

    function checkUrl(linkPath) {
        logger.log("Check url");
        let attr = checkElementForDataAttr(getLastClickedElement(), "disableLink");

        if(attr != "") {
            logger.log("Url checking is disabled");
            return true;
        }
        logger.log("Url checkking is enabled")

        if(linkPath.indexOf('create') == -1 && linkPath.indexOf('edit') == -1) {
            return false;
        }
        
        return true;
    }

    function getLastClickedElement() {
        let lastClickedElement = document.activeElement;    
        let $element = $(lastClickedElement);

        return $element;
    }

    function submitButtonCheck(lastClickedElement, element) {
        if (lastClickedElement.tagName === "INPUT" && element.attr("type") === "submit") {
            return false;
        }
        
        if (lastClickedElement.tagName === "BUTTON" && element.hasClass("button-submit")) {
            return false;
        }
        
        if (lastClickedElement.tagName === "BUTTON" && element.attr('type') == 'submit') {
            return false;
        }

        return true;
    }    
    
    function hasChanges() {
        if (lastClickedElement == undefined) {
            return;
        }
        let $element = $(lastClickedElement);
        let linkPath = window.location.pathname;  

        if(!submitButtonCheck(lastClickedElement, $element)) {
            return false;
        }
        
        if(checkElementForDataAttr(lastClickedElement, "disable-warning") != "") {
            return false;
        }
        
        if(!checkUrl(linkPath)) {
            return false;
        }        
        
        let hasChanges = hasTextAreasWithText() || hasInputsWithText();
        
        return hasChanges;
    }     
}