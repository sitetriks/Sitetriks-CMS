import { Data } from '../common/data.js';

export function detailedNews() {

    function newsTitles(selectId) {
        
        Data.getJson({ url: '/sitetriks/news/getallnewstitles' }).then(function (res) {
           
            for (let i = 0; i < res.news.length; i++) {
                $('<option>', {
                    value: res.news[i].id,
                    text: res.news[i].label
                }).appendTo($(selectId));
            }
        });
        

        redirectToCreate();
    }
    function editNewsTitles(element,selectId) {

        Data.getJson({ url: '/sitetriks/news/getallnewstitles' }).then(function (res) {

            for (let i = 0; i < res.news.length; i++) {
                $('<option>', {
                    value: res.news[i].id,
                    text: res.news[i].label
                }).appendTo($(selectId));
            }
            var option = $(`option[value=${element}]`);

            option.remove()
            $(`#select-news`).prepend(option.attr('selected','selected'));

        });

        redirectToCreate();
    }

    function redirectToCreate() {
        $(".detailed-news").on('click', '.create-news-button', function (e) {
            window.open('/sitetriks/news/create', '_blank');
        });
    }

    return {
        add: function () {
            newsTitles('#select-news');
        },
        edit: function (element) {
            editNewsTitles(element,'#select-news');
        },
        save: function () {
            return $('#select-news option:selected').val()|| null;
        },
        validate: function () {
            return {
                isValid: !!$('#select-news option:selected').val(),
                message: 'You must select news!'
            };
        }
    };
}
