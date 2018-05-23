var MetaTags = function () {
    function addMetaTag(props) {
        for (var i = 0; i < props.length; i++) {
            if (props[i].property != undefined && props[i].property != null) {
                $('head').append('<meta title="' + props[i].title + '" property="' + props[i].property + '" content="' + props[i].content + '" />');
            }
            else {
                $('head').append('<meta title="' + props[i].title + '" content="' + props[i].content + '" />');
            }
        }
    }

    function editMetaTag(title, content) {
        $("meta[name=" + title + "]").attr("content", content);
    }

    function populateKeyWords(selector) {
        let content = [];
        $(selector).each(function (index, element) {
            let words = $(element).val().split(',');
            for (let i = 0; i < words.length; i++) {
                content.push(words[i].trim());
            }
        }).remove();

        let $meta = $('meta[name=keywords]');
        if (!$meta || $meta.length <= 0) {
            $('<meta/>', {
                name: 'keywords',
                content: content.join(',')
            }).appendTo('head');
        } else {
            $meta.attr('content', content.join(','));
        }
    }

    return {
        add: addMetaTag,
        edit: editMetaTag,
        populateKeyWords: populateKeyWords
    };
}();