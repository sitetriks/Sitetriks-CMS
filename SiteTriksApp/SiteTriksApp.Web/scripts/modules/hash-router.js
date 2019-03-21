import { Utils } from '../common/utils.js';

/**
 * Module for handling multiple hash urls in one page
 */
var HashRouter = (function () {
    let data = {};
    let handlers = {};

    init();
    window.addEventListener('hashchange', init, false);

    /**
     * Handles onhashchange event
     */
    function init() {
        let hash = window.location.hash;
        if (hash && hash[0] === '#') {
            hash = hash.substr(1);
        }

        let newData = hash.split('&').reduce((map, x) => {
            let values = x.split('/');
            if (values[0] && values.length > 1) {
                map[values.splice(0, 1)[0]] = values;
            }

            return map;
        }, {});

        for (let key in newData) {
            if (!data[key] || !newData[key].every((val, index) => val === data[key][index])) {
                data[key] = newData[key];
                dispatchChange(key);
            }
        }

        for (let key in data) {
            if (!newData[key]) {
                delete data[key];
                dispatchChange(key);
            }
        }
    }

    /**
     * Sets arguments for the given typ
     * @param {string} type type
     * @param {Array<String>|String} [items] new arguments, left empty will remove the type
     * @returns {HashRouter} HashRouter
     */
    function set(type, items) {
        if (typeof items === 'string') {
            items = items.split('/');
        }

        let changedValues = {};
        changedValues[type] = items || [];
        buildUrl(changedValues);
        return this;
    }

    /**
     * Replaces the hash url with the changed values
     * @param {{String: Array<String>}} changedValues values to replace {type: values}
     */
    function buildUrl(changedValues) {
        let urls = [];
        let newData = merge_options(data, changedValues || {});
        for (let key in newData) {
            if (newData[key] && newData[key].length) {
                urls.push(key + '/' + newData[key].join('/'));
            }
        }

        window.location.hash = urls.length ? urls.join('&') : '';
    }

    /**
     * Merges two objects, overriding the first
     * @param {Object} obj1 initial object
     * @param {Object} obj2 object with options to override
     * @returns {Object} merged object
     */
    function merge_options(obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
        return obj3;
    }

    /**
     * Dispatches the eventhandlers for the given type
     * @param {any} type type
     */
    function dispatchChange(type) {
        if (!handlers[type]) {
            return;
        }

        for (let key in handlers[type]) {
            handlers[type][key](data[type]);
        }
    }

    /**
     * Attaches change hanlder for the given typ
     * @param {String} type type
     * @param {Function} handler callback function
     * @param {String} name name of the handler
     * @returns {HashRouter} HashRouter
     */
    function onChange(type, handler, name) {
        if (!type || !handler || !name) {
            console.error('Parameters "type", "handler" and "name" are required!');
            return;
        }

        if (!Utils.isFunction(handler)) {
            console.error(`Provided handler for type ${type} with name ${name} is not a function!`);
            return;
        }

        if (!handlers[type]) {
            handlers[type] = {};
        }

        handlers[type][name] = handler;
        return this;
    }

    /**
     * Detaches change hanlder for the given typ
     * @param {String} type type
     * @param {String} name name of the handler
     * @returns {HashRouter} HashRouter
     */
    function offChange(type, name) {
        if (handlers[type]) {
            delete handlers[type][name];
        }

        return this;
    }

    /**
     * Return hash url values for the given type.
     * @param {any} type type
     * @returns {Array<String>} values for the given type
     */
    function get(type) {
        return data[type];
    }

    return {
        get,
        set,
        onChange,
        offChange
    };
})();

export { HashRouter };
