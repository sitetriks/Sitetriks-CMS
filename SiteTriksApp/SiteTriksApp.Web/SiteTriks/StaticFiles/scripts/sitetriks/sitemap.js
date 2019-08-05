var sitemap = (function () {
   
    function setButton() {    
        $('.grid-pages').on('click', '.document', function (e) {            
            var url = $(this).parent().attr('id');               
            $.ajax({
                url: 'SiteMap/GetPageUrl',
                type: 'POST',
                data: { pageurl: url },
                success: function (data)
                {
                    $('img.document').attr('src', '/SiteTriks/StaticFiles/images/sitemap/Documentation.png');
                    $('span#' + data.data + ' > img').attr('src', '/SiteTriks/StaticFiles/images/sitemap/Documentation_selected.png');
                    
                },
            });

        });
    }

    return { setButton: setButton };
})();

window.sitemap = sitemap;
