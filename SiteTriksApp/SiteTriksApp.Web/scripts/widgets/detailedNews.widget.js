import { Data } from '../common/data.js';

export function detailedNews() {
    function newsTitlesInputKeyUp(ev, selectId) {
        var val = $(ev.target).val();

        if (val.length < 3) {
            return;
        }

        Data.getJson({ url: '/sitetriks/news/getallnewstitles?count=10&text=' + val }).then(function (response) {
            $('#' + selectId).autocomplete({
                source: response.suggestions,
                select: function (event, ui) {
                    $('#' + selectId).val(ui.item.label);
                    $('#' + selectId).attr('data-id', ui.item.id);

                    return false;
                }
            }).data('ui-autocomplete')._renderItem = function (ul, item) {
                return $('<li>')
                    .append(`<a data-id=${item.id}>${item.label}</a>`)
                    .appendTo(ul);
            };
        });
    }

    function appendNewsTitles(selectId) {
        $('#' + selectId).unbind('keyup');
        $('#' + selectId).keyup(function (ev) {
            newsTitlesInputKeyUp(ev, selectId);
        });
    }

    return {
        add: function () {
            appendNewsTitles('news-list');
        },
        edit: function (element) {
            appendNewsTitles('news-list');
        },
        save: function () {
            return $('#news-list').attr('data-id') || null;
        },
        validate: function () {
            return {
                isValid: !!$('#news-list').attr('data-id'),
                message: 'You must select news!'
            };
        }
    };
}
