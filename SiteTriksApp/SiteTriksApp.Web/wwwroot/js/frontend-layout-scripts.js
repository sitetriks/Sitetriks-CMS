﻿
function treeItemsSlide() {
    $('body').on('click', '.more-items', function (event, callback, target) {
        console.log('I am in Front-end');
        if (callback && {}.toString.call(callback) === '[object Function]' && target) {
            $('.hidden-section').slideToggle("slow", "swing", function () {
                callback(target);
            });

            if ($(window).width() <= 767) {
                return;

            } else {
                $('.hidden-section-last-body').slideToggle("slow", "swing", function () {
                    callback(target);
                });
            }
        } else {
            $('.hidden-section').slideToggle("slow");
            if ($(window).width() <= 767) {
                return;

            } else {
                $('.hidden-section-last-body').slideToggle("slow");
            }
        }
        $('.more-less-text').toggle();
        $('.more-items').toggleClass('more-clicked');
    })
}

// PrettyPrint call for Tinymc
function prettyPrintInit() {
    if ($('pre').length > 0) {
        Prism.highlightAll();
    }

    if ($('.prettyprint').length > 0) {
        prettify();
    }
};

// 1.1 Video custom playlist logic
function loadMultiplePlaylistsContent() {

    // Add search functionality to the widget
    function getChannelDatails(channelId) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8&part=contentDetails&id=" + channelId,
                method: 'GET',
                contentType: 'json',
                success: resolve,
                error: reject
            })
        })
            .then(function (data) {
                let channelUpload = data.items[0].contentDetails.relatedPlaylists.uploads;
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=" + channelUpload + "&key=AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE&part=snippet&maxResults=50",
                        method: 'GET',
                        contentType: 'json',
                        success: resolve,
                        error: reject
                    })
                });
            })
    };

  

    function searchVideo() {
        $('body').on('click', '.search-video', function () {
            $('.suggestions').css('display', 'block');

            let $container = ($('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail'));
            let fullData;
            let channelId = "UCUsTZWP1OpyBXX2_CfMv1fA";
            let titles = [];

            fullData = getChannelDatails(channelId);
            fullData.then(function (result) {
                var myData = result;

                for (i = 0; i < myData.items.length; i += 1) {
                    titles.push(myData.items[i].snippet.title)
                }

                function findMatches(wordToMatch, videos) {
                    return videos.filter(title => {
                        const regex = new RegExp(wordToMatch, 'gi')
                        return title.match(regex)
                    });
                }

                function displayMatches() {
                    const matchArrays = findMatches(this.value, titles);

                    const html = matchArrays.map(title => {
                        let itemPosition = titles.indexOf(title);
                        let videoId = myData.items[itemPosition].snippet.resourceId.videoId
                        return `                <li class="name" data-id ="${videoId}">${title}</li>
                `;
                    }).join('');
                    suggestions.innerHTML = html;
                }

                const searchInput = document.querySelector('.search-video');
                const suggestions = document.querySelector('.suggestions');

                searchInput.addEventListener('keyup', displayMatches);
            });
        })
    };

    function selectVideo() {
        let selected = $(this).text();

        let videoId = $(this).attr('data-id');

        $('.search-video').val(selected);

        $('.video-container iframe').attr('src', `https://www.youtube.com/embed/${videoId}`);
        console.log(videoId);

        // Clean the input
        $('.search-video').val('');
        $('.suggestions').css('display', 'none');
    }

    function hideSuggestionsOnOutsideClick() {
        $('body').on('click', function (ev) {
            let $target = $(ev.target);
            if (($target.hasClass('search-video')) || ($target.hasClass('suggestions'))) {
                return;
            }
            $('.suggestions').css('display', 'none');
        });
    }

    searchVideo();
    hideSuggestionsOnOutsideClick();
    $('body').on('click', '.name', selectVideo);
}

// custom video playlist
function loadVideoById() {
    $('body').on('click', '.video-thumbnail', function () {
        console.log('func 1');
        var iframeCurrentSource = $('.video-container iframe').attr('src');
        var thunmbnailSource = $(this).attr('data-videoId');

        if (!(iframeCurrentSource == thunmbnailSource)) {
            $('.video-container iframe').attr('src', thunmbnailSource);
        }
    });
};

// multiple playlists
function loadVideoSource() {
    $('body').on('click', '.playlist-thumbnail', function () {
        console.log('func 2');
        var iframeCurrentSource = $('.video-container iframe').attr('src');
        var thunmbnailSource = $(this).attr('data-videosource');

        if (!(iframeCurrentSource == thunmbnailSource)) {
            $('.video-container iframe').attr('src', thunmbnailSource);
        }
    });
};

// Init functions
$(document).ready(function () {
    $(document).trigger("initCarousel");
    MetaTags.populateKeyWords('input[name=SEOKeyword]');
    DocumentationWidget();
    treeItemsSlide();
    loadMultiplePlaylistsContent();
    loadVideoById();
    loadVideoSource();
});
$(window).load(prettyPrintInit());

// Video Multiple playlists logic
$(document).ready(function () {
    if ($('body-content').find('.multiple-playlists')) {
        // get all thumbnails ids
        let $container = ($('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail'));
        let source;

        $container.each(function (_, element) {
            source = $(this).data("videoid");
            console.log(source);
            let url = getYoutubeData(source).then(function (res) {

                let finalUrl = res.items[0].snippet.thumbnails.high.url;
                let title = res.items[0].snippet.title;

                $(element).children('img').attr('src', finalUrl);
                $(element).children('.playlist-title').text(title);
            })
            //,Data.defaultError);

        })
    }

    /*******************Get Youtube Playlist Thumbnails ***********************/

    function getYoutubeData(playlistId) {
        return Data.getJson({ url: "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=" + playlistId + "&key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8" })
    }

});