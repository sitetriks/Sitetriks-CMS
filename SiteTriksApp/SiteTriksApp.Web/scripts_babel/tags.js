'use strict';

var Tags = function () {
    function init(tagsInput) {
        tagsInput = tagsInput || '#tags';
        var $tags = $(tagsInput);

        $tags.on('change keyup', function () {
            var tags = $tags.val().split(',');
            var pattern = '';
            if (tags.length > 0) {
                pattern = tags[tags.length - 1].trim();
            }

            if (pattern.length >= 3) {
                $tags.autocomplete({
                    source: function source(request, response) {
                        Data.getJson({ url: '/sitetriks/tags/gettags?pattern=' + pattern }).then(function (res) {
                            response(res.suggestions);
                        });
                    },
                    select: function select(event, ui) {
                        var terms = [];
                        $.each(this.value.split(','), function () {
                            terms.push($.trim(this));
                        });

                        // remove the current input
                        terms.pop();
                        if (terms.indexOf(ui.item.value) < 0) {
                            // add the selected item
                            terms.push(ui.item.value);
                            // add placeholder to get the comma-and-space at the end
                            terms.push('');
                        }

                        this.value = terms.join(', ');
                        return false;
                    },
                    minLength: 3,
                    focus: function focus(ev, ui) {
                        ev.preventDefault();
                    }
                });
            } else {
                $tags.autocomplete({ source: [] });
            }
        });
    }

    return {
        init: init
    };
}();