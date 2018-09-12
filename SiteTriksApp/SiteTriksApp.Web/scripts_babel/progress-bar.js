'use strict';

var ProgressBar = function () {

    function next() {
        $(window).one('animationend', function () {
            start();
        });
    }

    function stop() {
        console.log('stop() is not implemented!');
    }

    function build(_ref) {
        var data = _ref.data,
            $parent = _ref.$parent,
            cssClass = _ref.cssClass;

        var name = data.name;
        if ($('#' + name).length >= 1) {
            console.log('Progress bar with name "' + name + '" already exists!');

            return [];
        }

        var numberSections = data.sections.length;

        var $mainContainer = $('<div>').addClass('main-container');
        if (cssClass) {
            $mainContainer.addClass(cssClass);
        }

        var $barContainer = $('<div>').addClass('bar-container');

        var $progressContainer = $('<ul>').addClass('progress-container').attr('id', name).data(name, {
            currentId: 0,
            onStart: start,
            data: data,
            name: name,
            onForce: force
        });

        var order = 0;
        var defaultSize = Math.round(100 / numberSections);

        for (var section in data.sections) {
            var $listItem = $('<li>').addClass('section').attr('data-section', order.toString()).attr('style', 'width:' + (data.sections[section].size || defaultSize) + '%; height:100%;');
            var $divItem = $('<div>').addClass('progress-bar');

            $listItem.append($divItem).appendTo($progressContainer);

            order++;
        }

        var $progressLabel = $('<div>').addClass('progress-label').html('&nbsp');
        var $progressMessage = $('<div>').addClass('progress-message').html('Loading ...');

        $barContainer.append($progressContainer).append($progressLabel).append($progressMessage).appendTo($mainContainer);

        if ($parent) {
            $parent.append($mainContainer);
        } else {
            $('body').append($mainContainer);
        }

        return $progressContainer;
    }

    function force(currentId) {
        var $bar = $('#' + this.name);
        if (!currentId) {
            currentId = this.currentId;
        }

        var $currentBarSection = $($($bar.find('[data-section="' + currentId + '"]')[0]).find('.progress-bar')[0]);

        forceFinishAnimation($currentBarSection, $bar.next('.progress-label'));
    }

    function start() {
        var $bar = $('#' + this.name);
        var data = this.data;
        var currentId = this.currentId;

        var $currentBarSection = $($($bar.find('[data-section="' + currentId + '"]')[0]).find('.progress-bar')[0]);

        if (data.sections.length <= currentId) {
            if (data.onComplete) {
                data.onComplete();
            }

            return;
        }

        var $messageContainer = $('.progress-message').html('Loading ' + data.sections[currentId].name);

        var $label = $bar.next('.progress-label');
        var progress = 0;
        var defaultSize = Math.round(100 / data.sections.length);

        for (var item in data.sections) {
            if (item > currentId) {
                break;
            }

            progress += data.sections[item].size || defaultSize;
        }

        doAnimation($currentBarSection, data.sections[currentId].estimatedTime, $label, progress);

        var _this = this;
        $currentBarSection.one('animationend', function () {
            _this.currentId = currentId + 1;
            $bar.data(_this.name, _this);
            _this.onStart();
        });

        if (currentId === 2) {
            this.onForce(currentId);
        }

        return this;
    }

    function doAnimation($section, duration, $label, progress) {
        if ($section === null) {
            return;
        }
        if ($section.hasClass('activation') && currentBarSection.css('animation-play-state') === 'running') {
            return;
        }

        $section.addClass('activation').css('animation-play-state', 'running').css('animation-duration', duration + 's');

        $label.animate({ x: progress }, {
            duration: duration * 1000,
            step: function step(now) {
                $(this).text(Math.floor(now) + ' %');
            }
        });
    }

    function forceFinishAnimation($section, $label) {
        $label.finish();
        $section.css('animation-duration', '0s');
    }

    return {
        build: build,
        start: start,
        stop: stop,
        next: next,
        forceCurrent: force
    };
}();

/* Example data:

var data = {
    sections: [
        {
            name: 'First section',
            estimatedTime: 5,
            isLoaded: false
        },
        {
            name: 'Second section',
            estimatedTime: 5,
            isLoaded: false
        },
        {
            name: 'Third section',
            estimatedTime: 5,
            isLoaded: false
        },
        {
            name: 'Four section',
            estimatedTime: 5,
            isLoaded: false
        }
    ],
    name: 'progress-bar-001',
    auto: true,   // automatically start next
    allowForce: false,
    onComplete: function() {
        setTimeout(function () {
            Loader.closeProgressBar();
        }, 500)
    }
};
*/