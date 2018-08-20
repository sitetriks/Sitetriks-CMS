"use strict";

function builderFields(mappingsUrl, builderName) {
    $(document).ready(function () {
        var mappingDropdownValue = $("#mapping_options").val();

        if (mappingDropdownValue != '') {
            loadMappings(mappingDropdownValue);
        }
    });

    $("#mapping_options").change(function () {
        var value = this.value;
        loadMappings(value);
    });

    function loadMappings(name) {
        $.ajax({
            type: "GET",
            url: mappingsUrl + "?modelName=" + name + "&builderName=" + builderName,
            contentType: 'application/json',
            success: function success() {},
            error: function error() {}
        }).done(function (partialViewResult) {
            $("#mappings").html(partialViewResult);
        });
    }
}

function createRssFeed(validateRssFeedUrl, builderFieldUrl) {
    $(document).ready(function () {
        populateUrl('#title', '#url', validateUrlOnChange);

        var builderName = $("#builder_options").val();
        if (builderName != "") {
            loadFieldsForBuilder(builderName);
        }
    });

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');
    var timer = 0;
    $urlField.on('input', function (e) {
        validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                validateUrl(validateRssFeedUrl + '?url=' + url, $urlField, $urlValidation, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css("border", "1px solid red");
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $("#builder_options").change(function () {
        var value = this.value;
        loadFieldsForBuilder(value);
    });

    function loadFieldsForBuilder(name) {

        var data = JSON.stringify({
            'builderName': name
        });
        $.ajax({
            type: "GET",
            url: builderFieldUrl + name,
            contentType: 'application/json',
            success: function success() {
                console.log("ss");
            },
            error: function error() {
                console.log("error");
            }
        }).done(function (partialViewResult) {
            $("#fieldItems").html(partialViewResult);
        });
    }
}

function editRssFeed(validateRssFeedUrl, builderFieldsUrl) {
    $(document).ready(function () {
        populateUrl('#title', '#url', validateUrlOnChange);
    });

    var $urlField = $('#url');
    var $urlValidation = $('#url-validation');
    var $btnSubmit = $('#submit');
    var timer = 0;
    $urlField.on('input', function (e) {
        validateUrlOnChange(e);
    });

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        var url = $urlField.val();

        if (url.length >= 3) {
            timer = setTimeout(function () {
                validateUrl(validateRssFeedUrl + '?url=' + url, $urlField, $urlValidation, $btnSubmit);
            }, 500);
            $urlValidation.text('');
        } else {
            $urlField.css("border", "1px solid red");
            $urlValidation.text('Url must be atleast 3 symbols!');
        }
    }

    $("#builder_options").change(function () {
        var value = this.value;
        loadFieldsForBuilder(value);
    });

    function loadFieldsForBuilder(name) {

        var data = JSON.stringify({
            'builderName': name
        });

        $.ajax({
            type: "GET",
            url: builderFieldsUrl + "?builderName=" + name,
            contentType: 'application/json',
            success: function success() {
                console.log("ss");
            },
            error: function error() {
                console.log("error");
            }
        }).done(function (partialViewResult) {
            $("#fieldItems").html(partialViewResult);
        });
    }
}