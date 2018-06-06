"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

ace.define("ace/snippets/razor", ["require", "exports", "module"], function (require, exports, module) {
    "use strict";

    exports.snippetText = "snippet if\n\
(${1} == ${2}) {\n\
	${3}\n\
}";
    exports.scope = "razor";
});
(function () {
    ace.require(["ace/snippets/razor"], function (m) {
        if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && module) {
            module.exports = m;
        }
    });
})();