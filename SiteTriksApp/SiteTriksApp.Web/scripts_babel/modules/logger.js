'use strict';

var Logger = function Logger(config) {
    config = config || 'production';

    function log() {
        if (config === 'debug') {
            var _console;

            (_console = console).log.apply(_console, arguments);
        }

        return this;
    }

    function warn() {
        if (config === 'debug') {
            var _console2;

            (_console2 = console).warn.apply(_console2, arguments);
        }

        return this;
    }

    function error() {
        if (config === 'debug') {
            var _console3;

            (_console3 = console).error.apply(_console3, arguments);
        }

        return this;
    }

    return {
        log: log,
        warn: warn,
        error: error
    };
};