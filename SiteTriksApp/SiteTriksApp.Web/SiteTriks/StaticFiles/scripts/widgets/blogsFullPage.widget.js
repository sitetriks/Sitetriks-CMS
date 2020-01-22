import { Data } from '../common/data.js';


export function blogsFullPage ({ logger }) {
    logger.log('init blog full page widget');
    let getAllBlogTitleUrl = '/sitetriks/blog/getallblogsTitles'
    let selectTemplateClass = '#template-selector';
    let blogWidgetContainerClass = '.detailed-blog';


    function blogTitles(selectId) {
        
        Data.getJson({ url: getAllBlogTitleUrl }).then(function (res) {
           
            for (let i = 0; i < res.blogs.length; i++) {
                $('<option>', {
                    value: res.blogs[i].id,
                    text: res.blogs[i].label
                }).appendTo($(selectId));
            }
        });
        

        redirectToCreate();
    }
    function editBlogTitles(element,selectId) {

        Data.getJson({ url: getAllBlogTitleUrl }).then(function (res) {

            for (let i = 0; i < res.blogs.length; i++) {
                $('<option>', {
                    value: res.blogs[i].id,
                    text: res.blogs[i].label
                }).appendTo($(selectId));
            }
            var option = $(`option[value=${element}]`);

            option.remove()
            $(`#select-blogs`).prepend(option.attr('selected','selected'));

        });

        redirectToCreate();
    }

    function redirectToCreate() {
        $(".detailed-blogs").on('click', '.create-blogs-button', function (e) {
            window.open('/sitetriks/blogs/create', '_blank');
        });
    }

    return {
        add: function () {
            blogTitles('#select-blogs');
        },
        edit: function (element) {
            editBlogTitles(element,'#select-blogs');
        },
        save: function () {
            console.log('save')
            let model =  {
                templateName: $('#template-selector').val(),
                selectedBlog: $('#select-blogs option:selected').val()
            };

            console.log(model)

            return model;
        },
        validate: function () {
            return {
                isValid: !!$('#select-blogs option:selected').val(),
                message: 'You must select blog!'
            };
        }
    };   
}
