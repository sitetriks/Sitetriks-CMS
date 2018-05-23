var Tags = (function () {
    function init() {
        $('#tags').on('change keyup', function () {
            let tags = $('#tags').val().split(',');
            let pattern = '';
            if (tags.length > 0) {
                pattern = tags[tags.length - 1].trim();
            }

            if (pattern.length >= 3) {
                $('#tags').autocomplete({
                    source: function (request, response) {
                        $.ajax({
                            method: "GET",
                            url: '/sitetriks/tags/gettags?pattern=' + pattern,
                            contentType: 'application/json',
                            data: { suggestions: request.suggestions }
                        }).done(function (data) {
                            response(data.suggestions)
                        })
                    },
                    select: function (event, ui) {
                        var terms = [];
                        $.each(this.value.split(','), function () {
                            terms.push($.trim(this));
                        });

                        // remove the current input
                        terms.pop();
                        // add the selected item
                        terms.push(ui.item.value);
                        // add placeholder to get the comma-and-space at the end
                        terms.push('');
                        this.value = terms.join(', ');
                        return false;
                    },
                    minLength: 3
                });
            } else {
                $('#tags').autocomplete({ source: [] });
            }
        });
    }

    return {
        init
    }
}());