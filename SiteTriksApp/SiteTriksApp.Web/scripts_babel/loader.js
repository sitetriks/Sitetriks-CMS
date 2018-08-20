'use strict';

/* version 1.1 */
var Loader = function () {
    var gifSrc = '/images/loading.gif';

    // DEPRECATED: now using gallery blur functionality
    //var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    //function preventDefault(e) {
    //    e = e || window.event;
    //    if (e.preventDefault)
    //        e.preventDefault();
    //    e.returnValue = false;
    //}

    //function preventDefaultForScrollKeys(e) {
    //    if (keys[e.keyCode]) {
    //        preventDefault(e);
    //        return false;
    //    }
    //}

    //function disableScroll() {
    //    if (window.addEventListener) // older FF
    //        window.addEventListener('DOMMouseScroll', preventDefault, false);
    //    window.onwheel = preventDefault; // modern standard
    //    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    //    window.ontouchmove = preventDefault; // mobile
    //    document.onkeydown = preventDefaultForScrollKeys;

    //    document.body.style.overflow = 'hidden';
    //}

    //function enableScroll() {
    //    if (window.removeEventListener)
    //        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    //    window.onmousewheel = document.onmousewheel = null;
    //    window.onwheel = null;
    //    window.ontouchmove = null;
    //    document.onkeydown = null;

    //    document.body.style.overflow = 'visible';
    //}

    return {
        showWithProgress: function showWithProgress(progressBarData, color) {
            if (color === true) {
                color = '#fff';
            }

            var $parent = Blur.add({ color: color });

            var bar = ProgressBar.build({ data: progressBarData, $parent: $parent, cssClass: 'blur-content' })[0];
            var data = $(bar).data(progressBarData.name).onStart();
        },
        show: function show(color, imgSrc) {
            if (color === true) {
                color = '#fff';
            }

            if (!imgSrc) {
                imgSrc = gifSrc;
            }

            Blur.add({ color: color }).append($('<img/>', {
                src: imgSrc,
                class: 'blur-content'
            }));
        },
        hide: function hide() {
            Blur.remove();
        }
    };
}();