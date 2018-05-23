var SharedBlocks = function () {
    function addShare ($container, editorSelector) {
        let $input = $("<input></input>", {
            placeholder: "Title of shared block",
            type: "text"
        }).appendTo($container);

        let $button = $("<input></input>", {
            value: "Share",
            type: "button"
        }).appendTo($container);

        $button.on("click", function () {
            let body = {
                Title: $input.val(),
                content: tinymce.get(editorSelector).getContent()
            };

            console.log(body);

            $.ajax({
                url: "/sitetriks/HtmlBlocks/Share",
                type: "post",
                data: JSON.stringify(body),
                cors: true,
                contentType: "application/json",
                success: function (block) {
                    let id = block.id;
                    let placeholder = $('#Dialog-Box').data('placeholder');
                    let cssClass = $('#css-class').val();
                    w.addWidgetLocal("html", block.content, placeholder, cssClass);
                }
            });
        });
    }

    return {
        addShare: addShare,
        addSetup: function ($list, $container, multiselectSelector) {
            $list.change(function () {
                if ($(this).val() === 'new') {
                    let $textarea = $("<textarea></textarea>", {
                        id: "add-html-content"
                    });

                    $container.html($textarea);

                    Utils.addEditor('#add-html-content', 800, 300);

                    addShare($container, "add-html-content");
                }

                if ($(this).val() === 'shared') {
                    let $label = $("<label></label>", {
                        for: "shared-block-id",
                        text: "Shared Block"
                    });

                    let $input = $("<input></input>", {
                        id: "shared-block-id",
                        type: "text",
                        class: "form-control",
                        style: "display:none;"
                    });

                    $container.html($label);
                    $container.append($input);

                    let $select = $("<select></select>", {
                        id: "shared-block-titles",
                        //multiple: true
                    });

                    $.ajax({
                        url: "/sitetriks/HtmlBlocks/GetAllSharedBlocks",
                        type: "get",
                        cors: true,
                        contentType: "application/json",
                        success: function (data) {
                            let items = JSON.parse(data);

                            if (items.length > 0) {
                                $input.val(items[0].Id);
                            }
                            
                            for (let i = 0; i < items.length; i++) {
                                $("<option></option>", {
                                    class: 'shared-block-options',
                                    value: items[i].Id,
                                    text: items[i].Title
                                }).appendTo($select);
                            }

                            $container.append($select);     

                            $($select).on('change', function () {
                                var optionSelected = $("option:selected", this);
                                var valueSelected = this.value;

                                $input.val(valueSelected);
                            });
                        }
                    });
                }
            });
        },
        editSetup: function ($list, $container, multiselectSelector, element) {
            $list.change(function () {
                if ($(this).val() === 'new') {
                    let $textarea = $("<textarea></textarea>", {
                        id: "add-html-content"
                    });

                    $container.html($textarea);

                    if (!Utils.isGuid(element)) {
                        $('#add-html-content').text(element);
                    }

                    Utils.addEditor('#add-html-content', 800, 300);
                }

                if ($(this).val() === 'shared') {
                    let $label = $("<label></label>", {
                        for: "shared-block-id",
                        text: "SharedBlockId"
                    });

                    let $input = $("<input></input>", {
                        id: "shared-block-id",
                        type: "text",
                        class: "form-control",
                        style: "display:none"
                    });

                    if (Utils.isGuid(element)) {
                        $input.val(element);
                    }

                    $container.html($label);
                    $container.append($input);

                    let $select = $("<select></select>", {
                        id: "shared-block-titles"
                    });

                    $.ajax({
                        url: "/sitetriks/HtmlBlocks/GetAllSharedBlocks",
                        type: "get",
                        cors: true,
                        contentType: "application/json",
                        success: function (data) {
                            let items = JSON.parse(data);

                            for (let i = 0; i < items.length; i++) {
                                $("<option></option>", {
                                    class: 'shared-block-options',
                                    value: items[i].Id,
                                    text: items[i].Title
                                }).appendTo($select);
                            }

                            $container.append($select);

                            if (Utils.isGuid(element)) {
                                $select.val(element).change();
                            }

                            $($select).on('change', function () {
                                var optionSelected = $("option:selected", this);
                                var valueSelected = this.value;

                                $input.val(valueSelected);
                            });
                        }
                    });
                }
            });
        }
    };
}();