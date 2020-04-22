import { FileHandler } from '../modules/file-handler.js';

export function video({ mediator, logger }) {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function parseYouTubeUrl(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        var result = '';
        if (match && match[2].length === 11) {
            result = match[2];
        } else {
            return 'error';
        }

        var t = getParameterByName('t', url);
        if (t) {
            t = t.replace(/\D/g, ':');

            var time = t.split(':').filter(function (n) { return n !== ''; }).reverse();
            var seconds = Date.UTC(1970, 0, 1, time[2] || 0, time[1] || 0, time[0]) / 1000;

            result = result + '?start=' + seconds;
        }

        return result;
    }

    function parseYoutubeVideosList(input) {
        var videosList = Array.isArray(input) ? input : input.split(';');
        var videoIds = [];

        for (var i = 0; i < videosList.length; i++) {
            videoIds.push(videosList[i].length === 11 ? videosList[i] : parseYouTubeUrl(videosList[i]));
        }

        return videoIds;
    }

    let fileHandler;
    function clearFileHandler() {
        if (fileHandler && fileHandler.dispose) {
            fileHandler.dispose();
            fileHandler = undefined;
            mediator.off('selectedFilesChanged', 'videoChange', 'VideoWidget');
        }
    }

    let selectedVideoId;
    function onSourceChange(ev) {
        let source = this.value;
        let config = '';
        clearFileHandler();

        if (source === 'database') {
            config = '<div class="file-handler-wrapper"></div>';
        }
        // multiple playlists should remain the same for the time being
        else if (source === 'youtubeCustomPlaylist') {
            config = `
                <div class="video-selection">
                <div style="margin-bottom: 10px;">*Add the full video urls.</div>
                    <input class="form-control inline-block" style="width: 500px;"/>
                    <button class="btn btn-add-video">Add</button>
                </div>
                <div class="selected-videos"></div>`;
        } else if (source === 'youtubeMultiplePlaylists') {
            config = `
                <div class="video-selection multiple-playlists">
                    <div style="margin-bottom: 10px;">*Add only the Id of the default video and playlists.</div>
                    <input id="video-name" type="text" class="form-control title-field text-box single-line" style="visibility:hidden; height: 0; margin: 0; padding: 0;">
                    <input class="form-control inline-block" style="width: 500px;"/>
                    <button class="btn btn-add-playlist-id">Add Playlist ID</button>
                    <div>
                        <input class="default-video-url"/>
                        <span class="default-video-label"> Default Video Id</span>
                     </div>
                </div>
                <div class="selected-videos"></div>`;
        } else if (source === 'youtubePlaylist') {
            config = `<label for="video-name" class="col-md-5">YouTube Playlist ID: </label>
            <input id="video-name" type="text" class="form-control title-field text-box single-line" />`;
        } else {
            config = `<label for="video-name" class="col-md-5">Full YouTube Video Url: </label>
            <input id="video-name" type="text" class="form-control title-field text-box single-line" />`;
        }

        $('#video-widget-config').html(config);
        if (source === 'database') {
            fileHandler = FileHandler($('.file-handler-wrapper'), ['Select'], '', mediator, logger, false, 3);
            mediator.on('selectedFilesChanged', function (data) {
                if (data.length) {
                    selectedVideoId = data[0];
                } else {
                    selectedVideoId = undefined;
                }
            }, 'videoChange', 'VideoWidget');
        }
    }

    function addVideo(url) {
        $('#video-widget-config').find('.selected-videos').append(`
            <div class="video-container clearfix">
                <span class="video-url">${url}</span>
                <div style="float:right;" class="video-url-control">
                    <span class="edit-video fa fa-pencil"></span>
                    <span class="remove-video fa fa-times"></span>
                </div>
            </div>`);
    }

    function editVideo(ev) {
        let $container = $(this).parents('.video-container');
        let $span = $container.find('.video-url');
        $span.after($('<input/>', { class: 'edit-video-url', value: $span.text(), 'data-url': $span.text() }));
        $span.remove();
        $container.find('.video-url-control').html(`
                    <span class="save-video">save</span>
                    <span class="cancel-edit">cancel</span>`);
    }

    function saveEditedVideo(ev) {
        let $container = $(this).parents('.video-container');
        let $input = $container.find('.edit-video-url');
        $container.html(`
                    <span class="video-url">${$input.val()}</span>
                    <div style="float:right;" class="video-url-control">
                        <span class="edit-video fa fa-pencil"></span>
                        <span class="remove-video fa fa-times"></span>
                    </div>`);
    }

    function cancelEdit(ev) {
        let $container = $(this).parents('.video-container');
        let $input = $container.find('.edit-video-url');
        $container.html(`
                    <span class="video-url">${$input.attr('data-url')}</span>
                    <div style="float:right;" class="video-url-control">
                    <span class="edit-video fa fa-pencil"></span>
                    <span class="remove-video fa fa-times"></span>
                    </div>
                `);
    }

    function bindEvents() {
        $('#video-source').on('change', onSourceChange).trigger('change');
        $('#video-widget-config').on('click', '.btn-add-video', function (ev) {
            let videoUrl = this.previousElementSibling.value;
            if (parseYouTubeUrl(videoUrl) === 'error') {
                alert('invalid youtube url');
                return;
            }

            addVideo(videoUrl);
            this.previousElementSibling.value = '';
        });

        $('#video-widget-config').on('click', '.btn-add-playlist', function (ev) {
            let videoUrl = this.previousElementSibling.value;
            //if (parseYouTubeUrl(videoUrl) === 'error') {
            //    alert('invalid youtube url');
            //    return;
            //}


            addVideo(videoUrl);
            this.previousElementSibling.value = '';
        });

        $('#video-widget-config').on('click', '.btn-add-playlist-id', function (ev) {
            let playlistId = this.previousElementSibling.value;
            //if (parseYouTubeUrl(videoUrl) === 'error') {
            //    alert('invalid youtube url');
            //    return;
            //}
            let currentIds = $('#video-name').val();

            if (currentIds.length > 0) {
                currentIds = currentIds + ';' + playlistId;
            } else {
                currentIds = playlistId;
            }
            $('#video-name').val(currentIds);

            addVideo(playlistId);
            this.previousElementSibling.value = '';
        });

        $('#video-widget-config').on('click', '.btn-add-playlist-id', getAllPlaylistIds);
        $('#video-widget-config').on('click', '.video-url-control', getAllPlaylistIds);
        $('#video-widget-config').on('change', '.default-video-url', getAllPlaylistIds);



        function getAllPlaylistIds() {
            setTimeout(function () {
                $('#video-name').val('');
                let ids = '';
                let $deafaultVideo = $('.default-video-url');
                if ($deafaultVideo.length > 0) {
                    ids += $deafaultVideo.val();
                }

                $('.video-url').each(function () {
                    let idLine = $(this).text();
                    if (idLine.length > 0) {
                        if (ids.length > 0) {

                            ids += ';' + idLine;
                        } else {
                            ids += idLine;
                        }
                    }
                });
                $('#video-name').val(ids);
            }, 500);
        }

        $('#video-widget-config').on('click', '.remove-video', function (ev) {
            $(this).parents('.video-container').remove();
        });

        $('#video-widget-config').on('click', '.edit-video', editVideo);
        $('#video-widget-config').on('click', '.save-video', saveEditedVideo);
        $('#video-widget-config').on('click', '.cancel-edit', cancelEdit);
    }

    return {
        add: bindEvents,
        edit: function (element) {
            let elements = element.split('/');
            let source = elements[0];
            $('#video-source').val(source);
            bindEvents();

            if (source === 'database') {
                selectedVideoId = elements[1];
                let info = {};
                info[selectedVideoId] = { selectedLinkId: selectedVideoId };
                setTimeout(function () {
                    mediator.dispatch('populatedSelected', info);
                }, 500);
            }
            else if (source === 'youtubeMultiplePlaylists') {
                let fullArray = (elements[1] || '').split(';');
                let defaultVideo = fullArray[0];
                if (defaultVideo.length < 20) {

                    $('.default-video-url').val(defaultVideo);
                    fullArray.splice(0, 1);
                    fullArray.forEach(value => {
                        addVideo(value);
                    });
                } else {
                    fullArray.forEach(value => {
                        addVideo(value);
                    });
                }
            }
            else if (source === 'youtubeCustomPlaylist') {
                (elements[1] || '').split(';').forEach(value => {
                    addVideo('https://www.youtube.com/watch?v=' + value);
                });
            } else {
                $('#video-name').val(source === 'youtube' ? 'https://www.youtube.com/watch?v=' + elements[1] : elements[1]);
            }
        },
        save: function () {
            let source = $('#video-source').val();
            let values;
            let urls;

            switch (source) {
                case 'database':
                    values = selectedVideoId;
                    break;
                case 'youtube':
                    values = parseYouTubeUrl($('#video-name').val());
                    break;

                case 'youtubeCustomPlaylist':
                    urls = [];
                    $('#video-widget-config').find('.video-url').each((_, e) => { urls.push(e.innerText); });
                    values = parseYoutubeVideosList(urls).join(';');
                    break;

                case 'youtubeMultiplePlaylists':
                    urls = [];
                    $('#video-widget-config').find('.video-url').each((_, e) => { urls.push(e.innerText); });
                    values = $('.default-video-url').val() + ';' + urls.join(';');
                    //  values = parseYoutubeVideosList(urls).join(';');
                    break;

                default:
                    values = $('#video-name').val();
                    break;
            }

            clearFileHandler();
            return '' + source + '/' + values;
        },
        validate: function () {
            let source = $('#video-source').val();
            let values;
            let urls;

            switch (source) {
                case 'database':
                    values = selectedVideoId;
                    break;

                case 'youtube':
                    values = parseYouTubeUrl($('#video-name').val());
                    break;

                case 'youtubeCustomPlaylist':
                    urls = [];
                    $('#video-widget-config').find('.video-url').each((_, e) => { urls.push(e.innerText); });
                    values = parseYoutubeVideosList(urls).join(';');
                    break;

                case 'youtubeMultiplePlaylists':
                    urls = [];
                    $('#video-widget-config').find('.video-url').each((_, e) => { urls.push(e.innerText); });
                    if ($('.default-video-url').val().length == 0) {
                        values = 'missing default url';
                    } else {

                        values = $('.default-video-url').val() + ';' + urls.join(';');
                        $('#video-name').val(values);
                    }
                    break;

                default:
                    values = $('#video-name').val();
                    break;
            }

            if (!values) {
                return { isValid: false, message: 'Video name is required!' };
            }

            if (values.indexOf('error') > -1) {
                return { isValid: false, message: 'Invalid youtube url!' };
            }

            if (values === 'missing default url') {
                return { isValid: false, message: 'Missing default video Id!' }
            }

            return { isValid: true };
        }
    };
}
