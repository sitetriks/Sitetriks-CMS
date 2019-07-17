export function newsCarousel() {
    return {
        add: function () {
            $('select.carousel-count-type').on('change', function (ev) {
                if (ev.target.value === 'all') {
                    $('#latest-news-count').parents('label').first().hide();
                } else {
                    $('#latest-news-count').parents('label').first().show();
                }
            });
        },
        edit: function (element) {
            let model;
            try {
                model = JSON.parse(element);
            } catch (e) {
                // for backwards compatibility
                let elements = element.split('/');
                model = {
                    isAscending: elements[0],
                    template: elements[1],
                    take: elements[2]
                };
            }

            $('#order-by-date').prop('checked', model.isAscending);
            let $newsCount = $('#latest-news-count');
            $newsCount.val(model.take);
            $('select.carousel-count-type').val(model.template).on('change', function (ev) {
                if (ev.target.value === 'all') {
                    $newsCount.parents('label').first().hide();
                } else {
                    $newsCount.parents('label').first().show();
                }
            });

            $('.slides-lg').val(model.slides_lg || 3);
            $('.slides-md').val(model.slides_md || 3);
            $('.slides-sm').val(model.slides_sm || 2);
            $('.slides-xs').val(model.slides_xs || 1);
        },
        save: function () {
            let template = $('select.carousel-count-type').val();
            let isAscending = $('#order-by-date').prop('checked');
            let take = $('#latest-news-count').val() || 3;

            let slides_lg = +$('.slides-lg').val() || 3;
            let slides_md = +$('.slides-md').val() || 3;
            let slides_sm = +$('.slides-sm').val() || 2;
            let slides_xs = +$('.slides-xs').val() || 1;

            return JSON.stringify({ template, isAscending, take, slides_lg, slides_md, slides_sm, slides_xs });
        }
    };
}
