'use strict';

export function Logger (config) {
    config = config || 'production';

    function log() {
        if (config === 'debug') {
            console.log(...arguments);
        }

        return this;
    }

    function warn() {
        if (config === 'debug') {
            console.warn(...arguments);
        }

        return this;
    }

    function error() {
        if (config === 'debug') {
            console.error(...arguments);
        }

        return this;
    }

    return {
        log,
        warn,
        error
    };
}

window.Logger = Logger;
