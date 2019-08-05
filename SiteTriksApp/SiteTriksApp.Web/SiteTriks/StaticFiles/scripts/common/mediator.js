'use strict';

export function Mediator (logger) {
    let events = {};

    function on(event, handler, name, subsciber) {
        if (!events[event]) {
            events[event] = [];
        }

        // TODO: validate for string
        if (!event || !name || !subsciber) {
            logger.error('event, name and subsciber are required fields!');
            return this;
        }

        if (!handler || {}.toString.call(handler) !== '[object Function]') {
            logger.error(`handler for ${event} by ${subsciber} with name ${name} must be a function!`);
            return this;
        }

        let found = events[event].find(element => element.name === name && element.subsciber === subsciber);
        if (found) {
            found.handler = handler;
        } else {
            events[event].push({ handler, name, subsciber });
        }

        return this;
    }

    function off(event, name, subsciber) {
        if (!events[event]) {
            events[event] = [];
        }

        let found = events[event].find(element => element.name === name && element.subsciber === subsciber);

        let index = events[event].indexOf(found);
        if (index > -1) {
            events[event].splice(index, 1);
        } else {
            logger.warn(`${name} handler from ${subsciber} was not removed because it was not found in registered events!`);
        }

        return this;
    }

    function dispatch(event, data) {
        if (!events[event]) {
            logger.warn(`${event} is not registered!`);
            return this;
        }

        events[event].forEach(element => {
            element.handler(data);
        });

        return this;
    }

    return {
        on,
        off,
        dispatch
    };
}

window.Mediator = Mediator;
