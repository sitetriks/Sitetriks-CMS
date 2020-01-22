
export function blogFullPageWidget() {
    let containerClass = '.blog-full-page-widget-container';
    let $wrapper = $(containerClass);

    if (!$wrapper.length) {
        return;
    }

    var columns = [{
        name: "title",
        title: "Title",
        type: 'string',
        filter: true,
        sort: true,
        size: 2,
        headerTemplate: '<strong>#item#</strong>'
    },
    {
        name: "creator",
        title: "Creator",
        type: 'string',
        filter: true,
        sort: true,
        size: 2,
        headerTemplate: '<strong>#item#</strong>'
    },
    {
        name: "dateCreated",
        title: "Date Created",
        type: 'date',
        filter: false,
        sort: true,
        size: 2,
        headerTemplate: '<strong>#item#</strong>'
    },
    {
        name: "summary",
        title: "Summary",
        type: 'string',
        filter: true,
        sort: true,
        size: 2,
        contentTemplate: '<span class="">#item#</span>',
        headerTemplate: '<strong>#item#</strong>'
    },
    {
        name: "id",
        title: "Action",
        type: 'string',
        filter: false,
        sort: false,
        size: 2,
        headerTemplate: '<strong>#item#</strong>',
        contentTemplate: '<a class="btn" href="/sitetriks/blog/edit/#item#">Edit</a> | <a class="btn btn" href="/sitetriks/blog/details/#item#">Read more...</a>'
    }];

    new _Grid({
        wrapperId: '.blog-full-page-grid',
        type: 'table',
        fields: columns,
        sourceConfig: { type: 'client', url: '/sitetriks/blogWidget/grid' }
    }).load(true);
};
