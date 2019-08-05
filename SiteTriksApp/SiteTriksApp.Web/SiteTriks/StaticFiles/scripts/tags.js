import { Data } from './common/data.js';

var Tags = (function () {
    function init(tagsInput) {
        tagsInput = tagsInput || '#tags';
        let $tags = $(tagsInput);

        $tags.on('change keyup', function () {
            let tags = $tags.val().split(',');
            let pattern = '';
            if (tags.length > 0) {
                pattern = tags[tags.length - 1].trim();
            }

            if (pattern.length >= 3) {
                $tags.autocomplete({
                    source: function (request, response) {
                        Data.getJson({ url: '/sitetriks/tags/gettags?pattern=' + pattern }).then(function (res) {
                            response(res.suggestions);
                        });
                    },
                    select: function (event, ui) {
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
                    focus: function (ev, ui) {
                        ev.preventDefault();
                    }
                });
            } else {
                $tags.autocomplete({ source: [] });
            }
        });
    }

    return {
        init
    };
}());

export { Tags };
