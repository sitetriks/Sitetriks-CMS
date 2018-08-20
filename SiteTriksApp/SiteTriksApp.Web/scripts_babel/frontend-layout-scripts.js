'use strict';

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
    });
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
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8&part=contentDetails&id=" + channelId,
                method: 'GET',
                contentType: 'json',
                success: resolve,
                error: reject
            });
        }).then(function (data) {
            var channelUpload = data.items[0].contentDetails.relatedPlaylists.uploads;
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=" + channelUpload + "&key=AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE&part=snippet&maxResults=50",
                    method: 'GET',
                    contentType: 'json',
                    success: resolve,
                    error: reject
                });
            });
        });
    };

    function searchVideo() {
        $('body').on('click', '.search-video', function () {
            $('.suggestions').css('display', 'block');

            var $container = $('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail');
            var fullData = void 0;
            var channelId = "UCUsTZWP1OpyBXX2_CfMv1fA";
            var titles = [];

            fullData = getChannelDatails(channelId);
            fullData.then(function (result) {
                var myData = result;

                for (i = 0; i < myData.items.length; i += 1) {
                    titles.push(myData.items[i].snippet.title);
                }

                function findMatches(wordToMatch, videos) {
                    return videos.filter(function (title) {
                        var regex = new RegExp(wordToMatch, 'gi');
                        return title.match(regex);
                    });
                }

                function displayMatches() {
                    var matchArrays = findMatches(this.value, titles);

                    var html = matchArrays.map(function (title) {
                        var itemPosition = titles.indexOf(title);
                        var videoId = myData.items[itemPosition].snippet.resourceId.videoId;
                        return '                <li class="name" data-id ="' + videoId + '">' + title + '</li>\n                ';
                    }).join('');
                    suggestions.innerHTML = html;
                }

                var searchInput = document.querySelector('.search-video');
                var suggestions = document.querySelector('.suggestions');

                searchInput.addEventListener('keyup', displayMatches);
            });
        });
    };

    function selectVideo() {
        var selected = $(this).text();

        var videoId = $(this).attr('data-id');

        $('.search-video').val(selected);

        $('.video-container iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);
        console.log(videoId);

        // Clean the input
        $('.search-video').val('');
        $('.suggestions').css('display', 'none');
    }

    function hideSuggestionsOnOutsideClick() {
        $('body').on('click', function (ev) {
            var $target = $(ev.target);
            if ($target.hasClass('search-video') || $target.hasClass('suggestions')) {
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
        var $container = $('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail');
        var source = void 0;

        $container.each(function (_, element) {
            source = $(this).data("videoid");
            console.log(source);
            var url = getYoutubeData(source).then(function (res) {

                var finalUrl = res.items[0].snippet.thumbnails.high.url;
                var title = res.items[0].snippet.title;

                $(element).children('img').attr('src', finalUrl);
                $(element).children('.playlist-title').text(title);
            });
            //,Data.defaultError);
        });
    }

    /*******************Get Youtube Playlist Thumbnails ***********************/

    function getYoutubeData(playlistId) {
        return Data.getJson({ url: "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=" + playlistId + "&key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8" });
    }
});