import Handlebars from 'handlebars/dist/handlebars';
import { Data } from './data.js';

/* ------------------------------------------------
 * custom helpers for handlebars.js
 * ------------------------------------------------ */

var helpers = {
    'switch': function (value, options) {
        this._switch_value_ = value;
        this._switch_break_ = false;
        var html = options.fn(this);
        delete this._switch_break_;
        delete this._switch_value_;
        return html;
    },
    'case': function (value, options) {
        var args = Array.prototype.slice.call(arguments);
        var options = args.pop();
        var caseValues = args;

        if (this._switch_break_ || caseValues.indexOf(this._switch_value_) === -1) {
            return '';
        } else {
            if (options.hash.break === true) {
                this._switch_break_ = true;
            }
            return options.fn(this);
        }
    },
    'default': function (options) {
        if (!this._switch_break_) {
            return options.fn(this);
        }
    },
    // moved select helper from layout
    'select': function (value, options) {
        var $el = $('<select />').html(options.fn(this));
        $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
        return $el.html();
    }
};

for (let key in helpers) {
    Handlebars.registerHelper(key, helpers[key]);
}

export { Handlebars };

export function loadHandlebarsTemplates(templatesCache, templates) {
    let promises = [];

    for (let i = 0; i < templates.length; i += 1) {
        promises.push(Data.getJson({ url: templates[i].url }).then(function (res) {
            let template = Handlebars.compile(res);
            templatesCache[templates[i].name] = template;

            return true;
        }, function (res) { return false; }));
    }

    return Promise.all(promises);
}
