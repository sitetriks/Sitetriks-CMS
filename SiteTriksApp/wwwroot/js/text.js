"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

ace.define("ace/snippets/text", ["require", "exports", "module"], function (require, exports, module) {
    "use strict";

    exports.snippetText = undefined;
    exports.scope = "text";
});
(function () {
    ace.require(["ace/snippets/text"], function (m) {
        if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && module) {
            module.exports = m;
        }
    });
})();