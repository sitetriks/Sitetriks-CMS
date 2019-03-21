/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/sitesync.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/handlebars/dist/handlebars.js":
/*!****************************************************!*\
  !*** ./node_modules/handlebars/dist/handlebars.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**!

 @license
 handlebars v4.1.0

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.1.0';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0;

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      // the next line should use "Object.keys", but the code has been like this a long time and changing it, might
	      // cause backwards-compatibility issues... It's an old library...
	      // eslint-disable-next-line guard-for-in
	      for (var _name in knownHelpers) {
	        this.options.knownHelpers[_name] = knownHelpers[_name];
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (name === 'constructor') {
	      return ['(', parent, '.propertyIsEnumerable(\'constructor\') ? ', parent, '.constructor : undefined', ')'];
	    }
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) { var SourceMap; }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./scripts/common/data.js":
/*!********************************!*\
  !*** ./scripts/common/data.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Data = function () {
    var makeRequest = typeof fetch !== 'undefined' && isFunction(fetch) ? makeFetchRequest : makeAjaxRequest; // fallback to ajax if older browser

    function makeAjaxRequest(_ref) {
        var url = _ref.url,
            method = _ref.method,
            body = _ref.body,
            headers = _ref.headers,
            isForm = _ref.isForm;

        return new Promise(function (resolve, reject) {
            var params = {
                url: url,
                method: method,
                data: body,
                success: resolve,
                error: reject
            };
            if (isForm) {
                params.contentType = false; // tell jQuery not to process the data
                params.processData = false; // tell jQuery not to set contentType
            } else {
                params.headers = headers;
            }

            $.ajax(params);
        });
    }

    function makeFetchRequest(_ref2) {
        var url = _ref2.url,
            method = _ref2.method,
            body = _ref2.body,
            headers = _ref2.headers,
            isForm = _ref2.isForm;

        headers = headers || {};
        if (isForm) {
            delete headers['Content-Type'];
        } else {
            headers['Content-Type'] = 'application/json';
        }

        return fetch(url, {
            method: method,
            body: body,
            headers: headers,
            credentials: 'include'
        }).then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                if (res.headers.get('Content-Type') && res.headers.get('Content-Type').indexOf('application/json') > -1) {
                    return res.json();
                }

                return res.text();
            } else {
                return Promise.reject(res.text());
            }
        });
    }

    function getJson(_ref3) {
        var url = _ref3.url,
            disableCache = _ref3.disableCache;

        var headers = {};
        if (disableCache === true) {
            headers = {
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            };
        }

        return makeRequest({ url: url, method: 'GET', headers: headers });
    }

    function postJson(_ref4) {
        var url = _ref4.url,
            data = _ref4.data;

        return makeRequest({ url: url, method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    }

    function postForm(_ref5) {
        var url = _ref5.url,
            formData = _ref5.formData;

        return makeRequest({ url: url, method: 'POST', body: formData, isForm: true });
    }

    function deleteJson(_ref6) {
        var url = _ref6.url,
            data = _ref6.data;

        return makeRequest({ url: url, method: 'DELETE', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    }

    function defaultError() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    return {
        getJson: getJson,
        postJson: postJson,
        postForm: postForm,
        deleteJson: deleteJson,
        defaultError: defaultError
    };

    function isFunction(func) {
        return func && {}.toString.call(func) === '[object Function]';
    }
}();

exports.Data = Data;

/***/ }),

/***/ "./scripts/common/handlebars.js":
/*!**************************************!*\
  !*** ./scripts/common/handlebars.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Handlebars = undefined;
exports.loadHandlebarsTemplates = loadHandlebarsTemplates;

var _handlebars = __webpack_require__(/*! handlebars/dist/handlebars */ "./node_modules/handlebars/dist/handlebars.js");

var _handlebars2 = _interopRequireDefault(_handlebars);

var _data = __webpack_require__(/*! ./data.js */ "./scripts/common/data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ------------------------------------------------
 * custom helpers for handlebars.js
 * ------------------------------------------------ */

var helpers = {
    'switch': function _switch(value, options) {
        this._switch_value_ = value;
        this._switch_break_ = false;
        var html = options.fn(this);
        delete this._switch_break_;
        delete this._switch_value_;
        return html;
    },
    'case': function _case(value, options) {
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
    'default': function _default(options) {
        if (!this._switch_break_) {
            return options.fn(this);
        }
    },
    // moved select helper from layout
    'select': function select(value, options) {
        var $el = $('<select />').html(options.fn(this));
        $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
        return $el.html();
    }
};

for (var key in helpers) {
    _handlebars2.default.registerHelper(key, helpers[key]);
}

exports.Handlebars = _handlebars2.default;
function loadHandlebarsTemplates(templatesCache, templates) {
    var promises = [];

    var _loop = function _loop(i) {
        promises.push(_data.Data.getJson({ url: templates[i].url }).then(function (res) {
            var template = _handlebars2.default.compile(res);
            templatesCache[templates[i].name] = template;

            return true;
        }, function (res) {
            return false;
        }));
    };

    for (var i = 0; i < templates.length; i += 1) {
        _loop(i);
    }

    return Promise.all(promises);
}

/***/ }),

/***/ "./scripts/common/notifier.js":
/*!************************************!*\
  !*** ./scripts/common/notifier.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Notifier = function () {

    // status is following bootstrap convention: 'danger'(red), 'warning'(yellow), 'success'(green), 'info'(blue)
    function createAlert(_ref) {
        var containerId = _ref.containerId,
            title = _ref.title,
            message = _ref.message,
            status = _ref.status,
            seconds = _ref.seconds,
            isPermanent = _ref.isPermanent,
            selector = _ref.selector;

        var $title = $('<strong></strong>', { text: title || '' });
        var $closeButton = $('<a></a>', {
            class: 'close',
            'data-dismiss': 'alert',
            'aria-label': 'close',
            html: '&times;'
        });
        var $message = $('<span></span>', { text: ' ' + (message || '') });
        var $alert = $('<div></div>', { class: 'alert alert-' + (status || 'info') });

        $alert.append($title).append($message).append($closeButton).appendTo(selector || containerId || 'body');

        if (!isPermanent) {
            setTimeout(function () {
                $alert.fadeOut(500, function () {
                    $alert.remove();
                });
            }, (seconds || 10) * 1000);
        }
    }

    return {
        createAlert: createAlert
    };
}();

exports.Notifier = Notifier;

/***/ }),

/***/ "./scripts/sitetriks/sitesync-core.js":
/*!********************************************!*\
  !*** ./scripts/sitetriks/sitesync-core.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSiteSyncCore = createSiteSyncCore;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _handlebars = __webpack_require__(/*! ../common/handlebars.js */ "./scripts/common/handlebars.js");

function createSiteSyncCore(siteSyncModel) {
    var getDisplayNamesUrl = void 0;
    var getByDisplayNameUrl = void 0;
    var getByDisplayNameTargetUrl = void 0;
    var $historyContainer = $('.history-content-results');
    var targetDomain = $('#targets-select').val();
    var templatesCache = {};
    var templates = [{ name: 'sitesync-source', url: '/templates/sitesync-source.html' }, { name: 'sitesync-destination', url: '/templates/sitesync-destination.html' }, { name: 'sitesync-staged', url: '/templates/sitesync-staged.html' }, { name: 'sitesync-history', url: '/templates/sitesync-history.html' }, { name: 'sitesync-source-listed', url: '/templates/sitesync-source-listed.html' }, { name: 'sitesync-destination-listed', url: '/templates/sitesync-destination-listed.html' }];

    (0, _handlebars.loadHandlebarsTemplates)(templatesCache, templates).then(function () {
        //   console.log(templatesCache);
    });

    // Data object 

    var siteSyncContainersData = {
        sourceData: {},
        stagedItems: {},
        destinationData: {}
    };

    /* Staged container related functions*/

    function addElementToSyncData(displayName, id, title) {
        console.log(siteSyncContainersData.stagedItems);
        if (!(['' + displayName] in siteSyncContainersData.stagedItems)) {
            siteSyncContainersData.stagedItems['' + displayName] = [{ id: id, title: title }] || [];
        } else {
            var containsItem = false;

            for (var i = 0; i < siteSyncContainersData.stagedItems['' + displayName].length; i++) {
                if (siteSyncContainersData.stagedItems['' + displayName][i].id === id) {
                    containsItem = true;
                }
            }
            if (containsItem === false) {
                siteSyncContainersData.stagedItems['' + displayName].push({ id: id, title: title });
            }
        }
        renderStagedContainer();
    }

    function removeElementFromSyncData(displayName, id) {
        if (['' + displayName] in siteSyncContainersData.stagedItems && siteSyncContainersData.stagedItems['' + displayName].length > 0) {
            siteSyncContainersData.stagedItems['' + displayName] = siteSyncContainersData.stagedItems['' + displayName].filter(function (el) {
                return el.id !== id;
            });
        }

        if (['' + displayName] in siteSyncContainersData.stagedItems && siteSyncContainersData.stagedItems['' + displayName] === 0) {
            delete siteSyncContainersData.stagedItems['' + displayName];
        }
        renderStagedContainer();
    }

    function selectAllSourceData() {
        var currDomain = getCurrentSelectedSite();
        var displayNamesUrl = getDisplayNamesUrl + '?targetDomain=' + currDomain;
        var displayNamesArray = void 0;

        _data.Data.getJson({ url: displayNamesUrl }).then(function (res) {
            if (res.success) {
                displayNamesArray = res.displayNames;
            }
            return displayNamesArray;
        }).then(function (displayNamesArray) {
            var promises = [];
            displayNamesArray.forEach(function (displayName) {
                var url = '?displayName=' + displayName + '&domain=' + currDomain;

                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameUrl + url, siteSyncContainersData.sourceData));
                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameTargetUrl + url, siteSyncContainersData.destinationData));
            });

            return Promise.all(promises).then(function (res) {
                return console.log(res);
            });
        }).then(function () {
            // let sourceDataHtml = templatesCache['sitesync-source']({ items: siteSyncContainersData.sourceData });
            // let destinationHtml = templatesCache['sitesync-destination']({ items: siteSyncContainersData.destinationData });
            var stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems });

            //  $('#source-container').html(sourceDataHtml);
            //  $('#destination-container').html(destinationHtml);
            $('#staged-container').html(stagedHtml);
            siteSyncContainersData.stagedItems = siteSyncContainersData.sourceData;

            for (var key in siteSyncContainersData.sourceData) {
                var value = siteSyncContainersData.sourceData[key];
                siteSyncModel.addItem(key, value.id);
            }
            renderStagedContainer();
        }, _data.Data.defaultError);
    }

    function deselectAllSourceData() {
        siteSyncContainersData.stagedItems = {};
    }

    function renderStagedContainer() {
        var stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems });
        $('#staged-container').html(stagedHtml);
    }

    function init(getDisplayNames, getByDisplayName, getByDisplayNameTarget) {
        getDisplayNamesUrl = getDisplayNames;
        getByDisplayNameUrl = getByDisplayName;
        getByDisplayNameTargetUrl = getByDisplayNameTarget;
    }

    /* Fill containers */

    /* For get all */
    function fillContainers(domain) {
        var displayNamesUrl = getDisplayNamesUrl + '?targetDomain=' + domain;
        var displayNamesArray = void 0;
        var currDomain = getCurrentSelectedSite();

        _data.Data.getJson({ url: displayNamesUrl }).then(function (res) {
            if (res.success) {
                displayNamesArray = res.displayNames;
            }
            return displayNamesArray;
        }).then(function (displayNamesArray) {
            var promises = [];
            displayNamesArray.forEach(function (displayName) {
                var url = '?displayName=' + displayName + '&domain=' + currDomain;
                //  console.log(url);
                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameUrl + url, siteSyncContainersData.sourceData));
                promises.push(getDisplayNameForCurrentDomain(displayName, getByDisplayNameTargetUrl + url, siteSyncContainersData.destinationData));

                //  console.log(promises);
            });

            return Promise.all(promises).then(function (res) {
                return console.log(res);
            });
        }).then(function () {
            var sourceDataHtml = templatesCache['sitesync-source']({ items: siteSyncContainersData.sourceData });
            var destinationHtml = templatesCache['sitesync-destination']({ items: siteSyncContainersData.destinationData });
            var stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems.itemsForSync });

            console.log(siteSyncContainersData);

            $('#source-container').html(sourceDataHtml);
            $('#destination-container').html(destinationHtml);
            $('#staged-container').html(stagedHtml);
        }, _data.Data.defaultError);
    }

    /* End of get all */

    function fillContainers(domain) {
        var displayNamesUrl = getDisplayNamesUrl + '?targetDomain=' + domain;
        var displayNamesArray = void 0;
        var currDomain = getCurrentSelectedSite();

        _data.Data.getJson({ url: displayNamesUrl }).then(function (res) {
            if (res.success) {
                displayNamesArray = res.displayNames;
            }
            return displayNamesArray;
        }).then(function (displayNamesArray) {

            for (var i = 0; i < displayNamesArray.length; i++) {
                siteSyncContainersData.sourceData['' + displayNamesArray[i]] = [];
                siteSyncContainersData.destinationData['' + displayNamesArray[i]] = [];
            }

            var sourceDataHtml = templatesCache['sitesync-source']({ items: displayNamesArray });
            var destinationHtml = templatesCache['sitesync-destination']({ items: displayNamesArray });
            var stagedHtml = templatesCache['sitesync-staged']({});

            // console.log(siteSyncContainersData);

            $('#source-container').html(sourceDataHtml);
            $('#destination-container').html(destinationHtml);
            $('#staged-container').html(stagedHtml);
        }, _data.Data.defaultError);
    }

    function getDataByDisplayName(displayName) {
        var currDomain = getCurrentSelectedSite();
        var url = '?displayName=' + displayName + '&domain=' + currDomain;
        $('#source-' + displayName + '-content').html('Loading ...');

        return getDisplayNameForCurrentDomain(displayName, getByDisplayNameUrl + url, siteSyncContainersData.sourceData).then(function (res) {

            var sourceItemsHtml = templatesCache['sitesync-source-listed']({ items: siteSyncContainersData.sourceData['' + displayName] });
            $('#source-' + displayName + '-content').html(sourceItemsHtml);
        });
    }

    function getDataFromDestinationSite(displayName) {

        var currDomain = getCurrentSelectedSite();
        var url = '?displayName=' + displayName + '&domain=' + currDomain;

        return getDisplayNameForCurrentDomain(displayName, getByDisplayNameTargetUrl + url, siteSyncContainersData.destinationData).then(function (res) {

            var destinationItemsHtml = templatesCache['sitesync-destination-listed']({ items: siteSyncContainersData.destinationData['' + displayName] });

            $('#destination-' + displayName + '-content').html(destinationItemsHtml);
        });
    }

    function getDisplayNameForCurrentDomain(displayName, url, elementToStore) {
        return _data.Data.getJson({ url: url }).then(function (res) {
            if (!res || !res.success) {
                console.error(res);
                return Promise.reject();
            }

            elementToStore['' + displayName] = res.siteSyncItems || [];
        });
    }

    function getItemsByDisplayName(displayName) {
        var currDomain = getCurrentSelectedSite();

        var url = getByDisplayNameUrl + '?displayName=' + displayName + '&domain=' + currDomain;

        var items = void 0;
        return _data.Data.getJson({ url: url }).then(function (res) {
            if (res.success) {
                items = res.siteSyncItems;
                console.log(items);
            }

            if (items.length > 0) {
                items.forEach(function (item) {

                    siteSyncModel.addItem(displayName, item.id);
                    addElementToSyncData(displayName, item.id, item.title);
                });
            }
            return res.siteSyncItems;
        });
    }

    function selectItemsForPublishByParentDisplayName(displayName, itemName, itemId) {
        var $stagedContainer = $('#staged-container');
        var element = '<div class="' + itemName + '"><span class="glyphicon glyphicon-remove"></span> ' + itemName + '</div>';

        var $parent = $stagedContainer.find('#staged-' + displayName + '-content');

        if ($parent.find('.' + itemName).length > 0) {
            return;
        }
        $parent.append(element);
    }

    function checkIfDependencyIsChecked() {
        var $dependencies = $('.btn-dependencies');
        var status = 0;
        if ($($dependencies[0]).prop('checked') !== true && $($dependencies[1]).prop('checked') !== true) {
            _notifier.Notifier.createAlert({
                containerId: '#alerts',
                message: 'You need to select whether you want the dependencies synced as well.',
                status: 'danger',
                seconds: 5
            });
            status = 0;
            return status;
        } else if ($($dependencies[0]).prop('checked') === true) {
            _notifier.Notifier.createAlert({
                containerId: '#alerts',
                message: 'Your items are being synced with their related dependencies.',
                status: 'success',
                seconds: 5
            });
            status = 1;
            return status;
        } else if ($($dependencies[1]).prop('checked') === true) {
            _notifier.Notifier.createAlert({
                containerId: '#alerts',
                message: 'Your items are being synced without their related dependencies.',
                status: 'success',
                seconds: 5
            });
            status = 2;
            return status;
        }
    }

    function getCurrentSelectedSite() {
        var currSelectedSite = $('#targets-select option:selected').val();

        return currSelectedSite;
    }

    function getSiteSyncData() {
        var url = '/sitetriks/sitesync/getsitesyncstatuses?domain=' + $('#targets-select').val();
        // let $container = $('.history-data');
        $historyContainer;

        _data.Data.getJson({ url: url }).then(function (res) {
            //$historyContainer.append('<div class="row"><div class="col-lg-1"> Status </div><div class="col-lg-2"> Origin Site </div><div class="col-lg-2"> Target Site </div><div class="col-lg-2"> Origin User Id </div><div class="col-lg-2"> Date Created </div><div class="col-lg-2"> Date Modified </div><div class="col-lg-1"></div></div>');
            $(res.statuses).each(function (index, el) {

                // add template here

                var stagedHtml = templatesCache['sitesync-staged']({ items: siteSyncContainersData.stagedItems });
                console.log(stagedHtml);
                $('#staged-container').html(stagedHtml);

                var detailsButton = void 0;
                var itemsArray = el.communicationModels;

                if (itemsArray.length > 0) {
                    detailsButton = '<span class="details">Details</span>';
                } else {
                    detailsButton = '';
                }

                var tableLine = '<div class="row results"><div class="col col-lg-2"> ' + el.status + ' </div><div class="col col-lg-2"> ' + el.originSite + ' </div><div class="col col-lg-2"> ' + el.targetSite + ' </div><div class="col col-lg-2"> ' + el.originUserId + ' </div><div class="col col-lg-2"> ' + el.dateCreated + ' </div><div class="col col-lg-2">' + detailsButton + '</div></div>';

                $historyContainer.append(tableLine);

                if (itemsArray.length > 0) {
                    var $fileDetailsWrapper = $('<div>').addClass('file-details-wrapper').css('display', 'none');
                    $historyContainer.append($fileDetailsWrapper);
                    var categoryTitles = '<div class="row file-details"><div class="col col-lg-2"></div><div class="col col-lg-2"> Title </div><div class="col col-lg-2"> Successful</div><div class="col col-lg-2">Item type</div><div class="col col-lg-2">Message</div></div>';
                    $fileDetailsWrapper.append(categoryTitles);

                    $(itemsArray).each(function (index, syncedFile) {
                        var status = 'yes';
                        if (syncedFile.successful === false) {
                            status = 'no';
                        }

                        var fileDetails = '<div class="row file-details"><div class="col col-lg-2"></div><div class="col col-lg-2">' + syncedFile.title + ' </div><div class="col col-lg-2">' + status + '</div><div class="col col-lg-2">' + syncedFile.itemType + '</div><div class="col col-lg-2">' + syncedFile.message + '</div></div>';

                        $fileDetailsWrapper.append(fileDetails);
                    });
                }
            });
        });
    }

    return {
        init: init,
        fillContainers: fillContainers,
        getItemsByDisplayName: getItemsByDisplayName,
        selectItemsForPublishByParentDisplayName: selectItemsForPublishByParentDisplayName,
        getDataFromDestinationSite: getDataFromDestinationSite,
        getDataByDisplayName: getDataByDisplayName,
        getSiteSyncData: getSiteSyncData,
        checkIfDependencyIsChecked: checkIfDependencyIsChecked,
        addElementToSyncData: addElementToSyncData,
        removeElementFromSyncData: removeElementFromSyncData,
        selectAllSourceData: selectAllSourceData,
        deselectAllSourceData: deselectAllSourceData,
        renderStagedContainer: renderStagedContainer
    };
}

/***/ }),

/***/ "./scripts/sitetriks/sitesync-model.js":
/*!*********************************************!*\
  !*** ./scripts/sitetriks/sitesync-model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSiteSyncModel = createSiteSyncModel;
function createSiteSyncModel() {
    var syncModel = {
        'includeDependencies': true,
        'targetDomain': '',
        'itemsForSync': []
    };

    function addItem(displayName, id) {

        if (syncModel.itemsForSync.length == 0) {
            syncModel.itemsForSync.push({
                'displayName': displayName,
                'ids': [id]
            });

            return;
        }

        var currentObj = syncModel.itemsForSync.find(function (obj) {
            return obj.displayName == displayName;
        });

        if (!currentObj) {

            syncModel.itemsForSync.push({
                'displayName': displayName,
                'ids': [id]
            });
            return;
        } else if (currentObj) {

            var currentId = currentObj.ids.indexOf(id);

            if (currentId == -1) {
                currentObj.ids.push(id);
            }
        }
    }

    function removeItem(displayName, id) {
        var currentObj = syncModel.itemsForSync.find(function (obj) {
            return obj.displayName == displayName;
        });

        if (currentObj) {
            var currIndex = syncModel.itemsForSync.find(function (obj) {
                return obj.displayName == displayName;
            }).ids.indexOf(id);

            if (currIndex > -1) {
                syncModel.itemsForSync.find(function (obj) {
                    return obj.displayName == displayName;
                }).ids.splice(currIndex, 1);
            }
        }
    }

    function removeAllItems() {
        syncModel.itemsForSync = [];
    }

    function updateTargetDomain(url) {
        syncModel.targetDomain = url;
    }

    function setDependenciesUseToTrue() {
        syncModel.includeDependencies = true;
    }

    function setDependenciesUseToFalse() {
        syncModel.includeDependencies = false;
    }

    return {
        addItem: addItem,
        removeItem: removeItem,
        removeAllItems: removeAllItems,
        updateTargetDomain: updateTargetDomain,
        setDependenciesUseToTrue: setDependenciesUseToTrue,
        setDependenciesUseToFalse: setDependenciesUseToFalse,
        getCurrentModel: function getCurrentModel() {
            return syncModel;
        }
    };
}

/***/ }),

/***/ "./scripts/sitetriks/sitesync.js":
/*!***************************************!*\
  !*** ./scripts/sitetriks/sitesync.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _sitesyncModel = __webpack_require__(/*! ./sitesync-model.js */ "./scripts/sitetriks/sitesync-model.js");

var _sitesyncCore = __webpack_require__(/*! ./sitesync-core */ "./scripts/sitetriks/sitesync-core.js");

window.siteSyncModule = function () {
            function init(connectToTargetUrl, postSyncUrl, getDisplayNamesUrl, getByDisplayNameUrl, getByDisplayNameTargetUrl) {
                        var siteSyncModel = (0, _sitesyncModel.createSiteSyncModel)();
                        var siteSyncCore = (0, _sitesyncCore.createSiteSyncCore)(siteSyncModel);
                        siteSyncCore.init(getDisplayNamesUrl, getByDisplayNameUrl, getByDisplayNameTargetUrl);

                        var currSelectedSite = $('#targets-select option:selected').val(),
                            currentSelectedSiteId = $('#targets-select option:selected').attr('data-id'),
                            $targetBox = $('.target-box'),
                            $targetEditButton = $('.target-button.edit'),
                            $targetAddButton = $('.target-button.add'),
                            $targetDeleteButton = $('.target-button.delete'),
                            $targetSelect = $targetBox.find('#targets-select'),

                        // $targetDeleteButton = $targetBox.find('.delete-target'),
                        $connectTargetButton = $('#connect-target'),
                            $historyContainer = $('.history-data'),
                            $historyButton = $('#history-button'),
                            $historyResultsContainer = $('.history-content-results'),
                            $alertBox = $('#site-sync-alert'),
                            $siteSyncButton = $('#site-sync-button');

                        bindEvents();

                        function getCurrentSelectedSite() {
                                    var currSelectedSite = $('#targets-select option:selected').val();

                                    return currSelectedSite;
                        }

                        function resetHistoryContainer() {
                                    $historyContainer.css('display', 'none');
                                    $historyButton.removeClass('history-selected');
                        }

                        /*Events functions */
                        function selectItemsForPublish() {
                                    console.log('in select for publish');

                                    var $target = $(this);
                                    var dataId = $target.attr('data-id');
                                    var itemName = $target.attr('data-paragraph-title');

                                    //if (!($target.is(':checked'))) {
                                    //    return;
                                    //}

                                    var id = $target.attr('data-id');
                                    var displayName = $target.parent().parent().parent().attr('data-displayName');
                                    var title = $target.attr('data-paragraph-title');

                                    siteSyncModel.addItem(displayName, id);
                                    siteSyncCore.addElementToSyncData(displayName, id, title);
                                    console.log(siteSyncModel.getCurrentModel());
                        }

                        function selectAllItems() {
                                    var $container = $('#source-container');
                                    var $checkboxes = $container.find('.source-items');

                                    $checkboxes.prop('checked', true);

                                    siteSyncCore.selectAllSourceData();
                        }

                        // checkbox select
                        function selectAllByDisplayName() {
                                    var displayName = $(this).parent().attr('data-displayName');

                                    siteSyncCore.getItemsByDisplayName(displayName);
                        }

                        function deselectAllItems() {
                                    $('#staged-container').html('');
                                    uncheckItems();
                                    siteSyncModel.removeAllItems();
                                    siteSyncCore.deselectAllSourceData();
                        }

                        function uncheckItems() {
                                    $('.source-items').prop('checked', false);
                        }

                        function removeSingleStagedItem() {
                                    var $target = $(this);
                                    var displayName = $target.parent().parent().attr('id').split('-')[1];
                                    var itemId = $target.parent().attr('data-id');

                                    $target.parent().remove();

                                    // add removeItem
                                    siteSyncCore.removeElementFromSyncData(displayName, itemId);
                                    siteSyncModel.removeItem(displayName, itemId);
                        }

                        function displayDeleteMessage() {
                                    var $popup = $('.delete-popup');
                                    $popup.css('display', 'block');
                        }

                        function deleteTarget() {
                                    var $selectedOption = $targetSelect.find(':selected');
                                    var targetId = $targetSelect.find(':selected').attr('data-id');

                                    var url = '/sitetriks/sitesynctargets/delete/' + targetId;

                                    _data.Data.postJson({ url: url }).then(function () {
                                                $targetSelect.val(0);
                                                $selectedOption.css('display', 'none');
                                    });

                                    closeDeleteMessage();
                        }

                        function displayDeleteMessage() {
                                    var $popup = $('.delete-popup');
                                    $popup.css('display', 'block');
                        }

                        function closeDeleteMessage() {
                                    var $popup = $('.delete-popup');

                                    $popup.css('display', 'none');
                        }

                        function displayHistoryContainer() {
                                    if ($historyButton.hasClass('clicked')) {
                                                $historyResultsContainer.html('');

                                                $historyContainer.css('display', 'none');
                                                $historyButton.removeClass('history-selected');
                                                $historyButton.removeClass('clicked');
                                                return;
                                    } else {
                                                $historyContainer.css('display', 'block');
                                                $historyResultsContainer.html('');
                                                $historyButton.addClass('history-selected');
                                                $historyButton.addClass('clicked');

                                                siteSyncCore.getSiteSyncData();
                                    }
                        }

                        function displaySyncedFiles() {
                                    var $target = $(this);
                                    var $fileDetails = $target.parent().parent().next();

                                    $fileDetails.toggle();
                        }

                        function onConnectTarget(e) {
                                    var $target = $(e.target);
                                    resetHistoryContainer();

                                    if ($target.hasClass('grayed-out')) {
                                                $target.removeClass('grayed-out');
                                    }

                                    currSelectedSite = getCurrentSelectedSite();
                                    var url = connectToTargetUrl + '?targetDomain=' + currSelectedSite;
                                    var status = 'danger';

                                    _data.Data.getJson({ url: url }).then(function (res) {
                                                if (!(res.success === false)) {
                                                            $('#connect-target').addClass('grayed-out');
                                                            status = 'success';
                                                }

                                                _notifier.Notifier.createAlert({
                                                            containerId: '#alerts',
                                                            message: res.message,
                                                            seconds: 5,
                                                            status: status
                                                });
                                    });
                        }

                        function onTargetSelect() {

                                    resetHistoryContainer();
                                    $('#source-container').html('');
                                    $('#staged-container').html('');
                                    $('#destination-container').html('');

                                    $('.edit-target-form').css('display', 'none');
                                    $('.create-target-form').css('display', 'none');

                                    // enable the start button
                                    $connectTargetButton.removeClass('grayed-out');
                                    $siteSyncButton.removeClass('grayed-out');

                                    if ($(this).val() == 0) {
                                                return;
                                    }

                                    var targetDomain = $targetSelect.val();

                                    siteSyncModel.updateTargetDomain(targetDomain);

                                    currSelectedSite = $(this).val();
                                    siteSyncCore.fillContainers(currSelectedSite);
                        }

                        function onClickSourceContainerDisplayName() {
                                    var mainContainer = $(this);
                                    var displayName = $(this).attr('data-displayName');

                                    var $glyphicons = mainContainer.find('.glyphicon');
                                    $glyphicons.toggle();
                                    siteSyncCore.getDataByDisplayName(displayName);

                                    var content = mainContainer.next();

                                    content.slideToggle(500, function () {});
                        }

                        function onClickStageContainerDisplayName() {
                                    var mainContainer = $(this);
                                    var displayName = $(this).attr('data-displayName');
                                    var content = mainContainer.next();

                                    var $glyphicons = mainContainer.find('.glyphicon');
                                    $glyphicons.toggle();

                                    content.slideToggle(500, function () {});
                        }

                        function onClickDestinationContainerDisplayName() {
                                    var mainContainer = $(this);
                                    var displayName = $(this).attr('data-displayName');
                                    var $glyphicons = mainContainer.find('.glyphicon');
                                    $glyphicons.toggle();

                                    siteSyncCore.getDataFromDestinationSite(displayName);
                                    var content = mainContainer.next();

                                    content.slideToggle(500, function () {});
                        }

                        function onClickDependencyRadioButton() {
                                    var $target = $(this);

                                    if ($target.prop('checked' === true)) {
                                                return;
                                    } else {
                                                $('.btn-dependencies').parent().removeClass('checked');
                                                $target.parent().addClass('checked');
                                    }
                        }

                        function onSync() {
                                    var selection = siteSyncCore.checkIfDependencyIsChecked();
                                    var url = postSyncUrl;

                                    if (selection == 0) {
                                                return false;
                                    } else if (selection == 1) {
                                                siteSyncModel.setDependenciesUseToTrue();
                                    } else if (selection == 2) {
                                                siteSyncModel.setDependenciesUseToFalse();
                                    }

                                    var data = siteSyncModel.getCurrentModel();
                                    console.log(data);
                                    $siteSyncButton.addClass('grayed-out');
                                    _data.Data.postJson({ url: url, data: data }).then(function (res) {
                                                console.log(res);
                                                res.message.map(function (value) {
                                                            $('<div/>', {
                                                                        class: 'sync-status-item',
                                                                        html: '<span>' + value.split(',')[1] + '</span><span>' + value.split(',')[2].replace(';', ' ') + '</span>'
                                                            }).appendTo('#site-sync-alert');
                                                });
                                    }).then(function (res) {
                                                deselectAllItems();
                                                $siteSyncButton.removeClass('grayed-out');
                                    });
                        }

                        function setEditTarget() {
                                    var targetId = $('#targets-select option:selected').attr('data-id');

                                    $targetEditButton.attr('data-edit-url', '/sitetriks/sitesynctargets/edit?id=' + targetId);
                        }

                        function displayEditTarget() {

                                    var url = $targetEditButton.attr('data-edit-url'),
                                        $editForm = $('.edit-target-form'),
                                        $inputName = $editForm.find('#Name'),
                                        $inputUrl = $editForm.find('#Url');

                                    $editForm.css('display', 'block');
                                    $('.create-target-form').css('display', 'none');
                                    console.log(url);

                                    _data.Data.getJson({ url: url }).then(function (res) {
                                                console.log(res);
                                                $inputName.val(res.targetName);
                                                $inputUrl.val(res.url);
                                    });
                        }

                        function submitEditData(ev) {
                                    ev.preventDefault();

                                    var targetId = $('#targets-select option:selected').attr('data-id'),
                                        $editForm = $('.edit-target-form'),
                                        $inputName = $editForm.find('#Name'),
                                        $inputUrl = $editForm.find('#Url');

                                    var data = {
                                                name: $inputName.val(),
                                                url: $inputUrl.val(),
                                                id: $('#targets-select option:selected').attr('data-id')
                                    };

                                    _data.Data.postJson({
                                                url: '/sitetriks/sitesynctargets/edit?id=' + targetId,
                                                data: data
                                    }).then(function (res) {
                                                if (res.success) {
                                                            _notifier.Notifier.createAlert({
                                                                        containerId: '#alerts',
                                                                        message: res.message,
                                                                        seconds: 10,
                                                                        status: 'success'
                                                            });
                                                            $('.edit-target-form').css('display', 'none');
                                                } else {
                                                            _notifier.Notifier.createAlert({
                                                                        containerId: '#alerts',
                                                                        message: res.message,
                                                                        seconds: 10,
                                                                        status: 'danger'
                                                            });
                                                }
                                    });
                        }

                        function displayAddForm() {
                                    $('.create-target-form').css('display', 'block');
                                    $('.edit-target-form').css('display', 'none');
                        }

                        function onTargetCreate(ev) {
                                    ev.preventDefault();
                                    var $createForm = $('#create-target-form'),
                                        $inputName = $createForm.find('#name'),
                                        $inputUrl = $createForm.find('#url'),
                                        $email = $createForm.find('#email'),
                                        $password = $createForm.find('#password');

                                    var data = {
                                                name: $inputName.val(),
                                                url: $inputUrl.val(),
                                                email: $email.val(),
                                                password: $password.val()
                                    };
                                    console.log(data);
                                    var url = '/sitetriks/sitesynctargets/create';

                                    _data.Data.postJson({ url: url, data: data }).then(function (res) {
                                                console.log(res);
                                                if (res.success) {
                                                            $('.create-target-form').css('display', 'none');

                                                            //Add to select menu
                                                            var $selectMenu = $('#targets-select');
                                                            var $option = $('<option>', {
                                                                        value: $inputUrl.val(),
                                                                        name: $inputUrl.val()
                                                            });
                                                            $option.html($inputUrl.val());
                                                            console.log(res.siteId);
                                                            $option.attr('data-id', res.siteId);

                                                            $selectMenu.append($option);

                                                            _notifier.Notifier.createAlert({
                                                                        containerId: '#alerts',
                                                                        message: res.message,
                                                                        seconds: 10,
                                                                        status: 'success'
                                                            });
                                                } else {
                                                            _notifier.Notifier.createAlert({
                                                                        containerId: '#alerts',
                                                                        message: res.message,
                                                                        seconds: 10,
                                                                        status: 'danger'
                                                            });
                                                }
                                    });
                        }
                        /* End Events functions */

                        function bindEvents() {
                                    $('#source-container').on('click', '.source-checkbox', selectItemsForPublish);

                                    $('#source-container').on('click', '.select-all', selectAllItems);

                                    $('#source-container').on('click', '.source-items', selectAllByDisplayName);

                                    $('#staged-container').on('click', '.deselect-all', deselectAllItems);

                                    $('#staged-container').on('click', '.glyphicon-remove', removeSingleStagedItem);

                                    $targetDeleteButton.on('click', displayDeleteMessage);

                                    $('.btn-yes').on('click', deleteTarget);

                                    $('.btn-no').on('click', closeDeleteMessage);

                                    $('#history-button').on('click', displayHistoryContainer);

                                    $('.history-data').on('click', '.details', displaySyncedFiles);

                                    $connectTargetButton.on('click', onConnectTarget);

                                    $targetSelect.on('change', onTargetSelect);

                                    $targetSelect.on('change', setEditTarget);

                                    $siteSyncButton.on('click', onSync);

                                    /*Slide Events */
                                    $('#source-container').on('click', '.main-element', onClickSourceContainerDisplayName);

                                    $('#staged-container').on('click', '.main-element', onClickStageContainerDisplayName);

                                    $('#destination-container').on('click', '.main-element', onClickDestinationContainerDisplayName);
                                    /* End Slide Events */

                                    $('.dependencies').on('click', '.btn-dependencies', onClickDependencyRadioButton);

                                    /*To move*/

                                    $('.edit').on('click', displayEditTarget);

                                    $('.btn-add-target').on('click', onTargetCreate);

                                    $('.btn-edit-target').on('click', submitEditData);

                                    $targetAddButton.on('click', displayAddForm);
                        }
            }

            return {
                        init: init
            };
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tbW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vaGFuZGxlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9ub3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy9zaXRlc3luYy1jb3JlLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL3NpdGVzeW5jLW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL3NpdGVzeW5jLmpzIl0sIm5hbWVzIjpbIkRhdGEiLCJtYWtlUmVxdWVzdCIsImZldGNoIiwiaXNGdW5jdGlvbiIsIm1ha2VGZXRjaFJlcXVlc3QiLCJtYWtlQWpheFJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsImlzRm9ybSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyYW1zIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCIkIiwiYWpheCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImdldCIsImluZGV4T2YiLCJqc29uIiwidGV4dCIsImdldEpzb24iLCJkaXNhYmxlQ2FjaGUiLCJwb3N0SnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0Rm9ybSIsImZvcm1EYXRhIiwiZGVsZXRlSnNvbiIsImRlZmF1bHRFcnJvciIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZnVuYyIsInRvU3RyaW5nIiwiY2FsbCIsImxvYWRIYW5kbGViYXJzVGVtcGxhdGVzIiwiaGVscGVycyIsInZhbHVlIiwib3B0aW9ucyIsIl9zd2l0Y2hfdmFsdWVfIiwiX3N3aXRjaF9icmVha18iLCJodG1sIiwiZm4iLCJhcmdzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsInBvcCIsImNhc2VWYWx1ZXMiLCJoYXNoIiwiYnJlYWsiLCIkZWwiLCJmaW5kIiwiYXR0ciIsImtleSIsIkhhbmRsZWJhcnMiLCJyZWdpc3RlckhlbHBlciIsInRlbXBsYXRlc0NhY2hlIiwidGVtcGxhdGVzIiwicHJvbWlzZXMiLCJwdXNoIiwidGVtcGxhdGUiLCJjb21waWxlIiwibmFtZSIsImFsbCIsIk5vdGlmaWVyIiwiY3JlYXRlQWxlcnQiLCJjb250YWluZXJJZCIsInRpdGxlIiwibWVzc2FnZSIsInNlY29uZHMiLCJpc1Blcm1hbmVudCIsInNlbGVjdG9yIiwiJHRpdGxlIiwiJGNsb3NlQnV0dG9uIiwiY2xhc3MiLCIkbWVzc2FnZSIsIiRhbGVydCIsImFwcGVuZCIsImFwcGVuZFRvIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJyZW1vdmUiLCJjcmVhdGVTaXRlU3luY0NvcmUiLCJzaXRlU3luY01vZGVsIiwiZ2V0RGlzcGxheU5hbWVzVXJsIiwiZ2V0QnlEaXNwbGF5TmFtZVVybCIsImdldEJ5RGlzcGxheU5hbWVUYXJnZXRVcmwiLCIkaGlzdG9yeUNvbnRhaW5lciIsInRhcmdldERvbWFpbiIsInZhbCIsInNpdGVTeW5jQ29udGFpbmVyc0RhdGEiLCJzb3VyY2VEYXRhIiwic3RhZ2VkSXRlbXMiLCJkZXN0aW5hdGlvbkRhdGEiLCJhZGRFbGVtZW50VG9TeW5jRGF0YSIsImRpc3BsYXlOYW1lIiwiaWQiLCJjb250YWluc0l0ZW0iLCJyZW5kZXJTdGFnZWRDb250YWluZXIiLCJyZW1vdmVFbGVtZW50RnJvbVN5bmNEYXRhIiwiZmlsdGVyIiwiZWwiLCJzZWxlY3RBbGxTb3VyY2VEYXRhIiwiY3VyckRvbWFpbiIsImdldEN1cnJlbnRTZWxlY3RlZFNpdGUiLCJkaXNwbGF5TmFtZXNVcmwiLCJkaXNwbGF5TmFtZXNBcnJheSIsImRpc3BsYXlOYW1lcyIsImZvckVhY2giLCJnZXREaXNwbGF5TmFtZUZvckN1cnJlbnREb21haW4iLCJzdGFnZWRIdG1sIiwiaXRlbXMiLCJhZGRJdGVtIiwiZGVzZWxlY3RBbGxTb3VyY2VEYXRhIiwiaW5pdCIsImdldERpc3BsYXlOYW1lcyIsImdldEJ5RGlzcGxheU5hbWUiLCJnZXRCeURpc3BsYXlOYW1lVGFyZ2V0IiwiZmlsbENvbnRhaW5lcnMiLCJkb21haW4iLCJzb3VyY2VEYXRhSHRtbCIsImRlc3RpbmF0aW9uSHRtbCIsIml0ZW1zRm9yU3luYyIsImdldERhdGFCeURpc3BsYXlOYW1lIiwic291cmNlSXRlbXNIdG1sIiwiZ2V0RGF0YUZyb21EZXN0aW5hdGlvblNpdGUiLCJkZXN0aW5hdGlvbkl0ZW1zSHRtbCIsImVsZW1lbnRUb1N0b3JlIiwic2l0ZVN5bmNJdGVtcyIsImdldEl0ZW1zQnlEaXNwbGF5TmFtZSIsIml0ZW0iLCJzZWxlY3RJdGVtc0ZvclB1Ymxpc2hCeVBhcmVudERpc3BsYXlOYW1lIiwiaXRlbU5hbWUiLCJpdGVtSWQiLCIkc3RhZ2VkQ29udGFpbmVyIiwiZWxlbWVudCIsIiRwYXJlbnQiLCJjaGVja0lmRGVwZW5kZW5jeUlzQ2hlY2tlZCIsIiRkZXBlbmRlbmNpZXMiLCJwcm9wIiwiY3VyclNlbGVjdGVkU2l0ZSIsImdldFNpdGVTeW5jRGF0YSIsInN0YXR1c2VzIiwiZWFjaCIsImluZGV4IiwiZGV0YWlsc0J1dHRvbiIsIml0ZW1zQXJyYXkiLCJjb21tdW5pY2F0aW9uTW9kZWxzIiwidGFibGVMaW5lIiwib3JpZ2luU2l0ZSIsInRhcmdldFNpdGUiLCJvcmlnaW5Vc2VySWQiLCJkYXRlQ3JlYXRlZCIsIiRmaWxlRGV0YWlsc1dyYXBwZXIiLCJhZGRDbGFzcyIsImNzcyIsImNhdGVnb3J5VGl0bGVzIiwic3luY2VkRmlsZSIsInN1Y2Nlc3NmdWwiLCJmaWxlRGV0YWlscyIsIml0ZW1UeXBlIiwiY3JlYXRlU2l0ZVN5bmNNb2RlbCIsInN5bmNNb2RlbCIsImN1cnJlbnRPYmoiLCJvYmoiLCJjdXJyZW50SWQiLCJpZHMiLCJyZW1vdmVJdGVtIiwiY3VyckluZGV4Iiwic3BsaWNlIiwicmVtb3ZlQWxsSXRlbXMiLCJ1cGRhdGVUYXJnZXREb21haW4iLCJzZXREZXBlbmRlbmNpZXNVc2VUb1RydWUiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwic2V0RGVwZW5kZW5jaWVzVXNlVG9GYWxzZSIsImdldEN1cnJlbnRNb2RlbCIsIndpbmRvdyIsInNpdGVTeW5jTW9kdWxlIiwiY29ubmVjdFRvVGFyZ2V0VXJsIiwicG9zdFN5bmNVcmwiLCJzaXRlU3luY0NvcmUiLCJjdXJyZW50U2VsZWN0ZWRTaXRlSWQiLCIkdGFyZ2V0Qm94IiwiJHRhcmdldEVkaXRCdXR0b24iLCIkdGFyZ2V0QWRkQnV0dG9uIiwiJHRhcmdldERlbGV0ZUJ1dHRvbiIsIiR0YXJnZXRTZWxlY3QiLCIkY29ubmVjdFRhcmdldEJ1dHRvbiIsIiRoaXN0b3J5QnV0dG9uIiwiJGhpc3RvcnlSZXN1bHRzQ29udGFpbmVyIiwiJGFsZXJ0Qm94IiwiJHNpdGVTeW5jQnV0dG9uIiwiYmluZEV2ZW50cyIsInJlc2V0SGlzdG9yeUNvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwic2VsZWN0SXRlbXNGb3JQdWJsaXNoIiwiJHRhcmdldCIsImRhdGFJZCIsInBhcmVudCIsInNlbGVjdEFsbEl0ZW1zIiwiJGNvbnRhaW5lciIsIiRjaGVja2JveGVzIiwic2VsZWN0QWxsQnlEaXNwbGF5TmFtZSIsImRlc2VsZWN0QWxsSXRlbXMiLCJ1bmNoZWNrSXRlbXMiLCJyZW1vdmVTaW5nbGVTdGFnZWRJdGVtIiwic3BsaXQiLCJkaXNwbGF5RGVsZXRlTWVzc2FnZSIsIiRwb3B1cCIsImRlbGV0ZVRhcmdldCIsIiRzZWxlY3RlZE9wdGlvbiIsInRhcmdldElkIiwiY2xvc2VEZWxldGVNZXNzYWdlIiwiZGlzcGxheUhpc3RvcnlDb250YWluZXIiLCJoYXNDbGFzcyIsImRpc3BsYXlTeW5jZWRGaWxlcyIsIiRmaWxlRGV0YWlscyIsIm5leHQiLCJ0b2dnbGUiLCJvbkNvbm5lY3RUYXJnZXQiLCJlIiwidGFyZ2V0Iiwib25UYXJnZXRTZWxlY3QiLCJvbkNsaWNrU291cmNlQ29udGFpbmVyRGlzcGxheU5hbWUiLCJtYWluQ29udGFpbmVyIiwiJGdseXBoaWNvbnMiLCJjb250ZW50Iiwic2xpZGVUb2dnbGUiLCJvbkNsaWNrU3RhZ2VDb250YWluZXJEaXNwbGF5TmFtZSIsIm9uQ2xpY2tEZXN0aW5hdGlvbkNvbnRhaW5lckRpc3BsYXlOYW1lIiwib25DbGlja0RlcGVuZGVuY3lSYWRpb0J1dHRvbiIsIm9uU3luYyIsInNlbGVjdGlvbiIsIm1hcCIsInJlcGxhY2UiLCJzZXRFZGl0VGFyZ2V0IiwiZGlzcGxheUVkaXRUYXJnZXQiLCIkZWRpdEZvcm0iLCIkaW5wdXROYW1lIiwiJGlucHV0VXJsIiwidGFyZ2V0TmFtZSIsInN1Ym1pdEVkaXREYXRhIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXlBZGRGb3JtIiwib25UYXJnZXRDcmVhdGUiLCIkY3JlYXRlRm9ybSIsIiRlbWFpbCIsIiRwYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCIkc2VsZWN0TWVudSIsIiRvcHRpb24iLCJzaXRlSWQiLCJvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBSzJCO0FBQ2pDLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7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Q0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7O0FBRTNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkU7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTs7QUFFL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUErRCxFQUFFO0FBQ3ZHO0FBQ0E7QUFDQSxnQ0FBZ0Msd0NBQXdDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3Qzs7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O0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0EsK0RBQStELGFBQWE7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0Esc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtJQUFrSTs7QUFFbEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFNBQVM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWMsa0JBS1Y7QUFDSixFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQSxJQUFJO0FBQ0o7QUFDQSw4RkFBOEYsVUFBVSxFQUFFOztBQUUxRztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0dUpBLElBQUlBLE9BQVEsWUFBWTtBQUNwQixRQUFJQyxjQUFjLE9BQU9DLEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NDLFdBQVdELEtBQVgsQ0FBaEMsR0FBb0RFLGdCQUFwRCxHQUF1RUMsZUFBekYsQ0FEb0IsQ0FDc0Y7O0FBRTFHLGFBQVNBLGVBQVQsT0FBaUU7QUFBQSxZQUF0Q0MsR0FBc0MsUUFBdENBLEdBQXNDO0FBQUEsWUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLFlBQXpCQyxJQUF5QixRQUF6QkEsSUFBeUI7QUFBQSxZQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsWUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUM3RCxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsZ0JBQUlDLFNBQVM7QUFDVFIsd0JBRFM7QUFFVEMsOEJBRlM7QUFHVFEsc0JBQU1QLElBSEc7QUFJVFEseUJBQVNKLE9BSkE7QUFLVEssdUJBQU9KO0FBTEUsYUFBYjtBQU9BLGdCQUFJSCxNQUFKLEVBQVk7QUFDUkksdUJBQU9JLFdBQVAsR0FBcUIsS0FBckIsQ0FEUSxDQUNvQjtBQUM1QkosdUJBQU9LLFdBQVAsR0FBcUIsS0FBckIsQ0FGUSxDQUVvQjtBQUMvQixhQUhELE1BR087QUFDSEwsdUJBQU9MLE9BQVAsR0FBaUJBLE9BQWpCO0FBQ0g7O0FBRURXLGNBQUVDLElBQUYsQ0FBT1AsTUFBUDtBQUNILFNBaEJNLENBQVA7QUFpQkg7O0FBRUQsYUFBU1YsZ0JBQVQsUUFBa0U7QUFBQSxZQUF0Q0UsR0FBc0MsU0FBdENBLEdBQXNDO0FBQUEsWUFBakNDLE1BQWlDLFNBQWpDQSxNQUFpQztBQUFBLFlBQXpCQyxJQUF5QixTQUF6QkEsSUFBeUI7QUFBQSxZQUFuQkMsT0FBbUIsU0FBbkJBLE9BQW1CO0FBQUEsWUFBVkMsTUFBVSxTQUFWQSxNQUFVOztBQUM5REQsa0JBQVVBLFdBQVcsRUFBckI7QUFDQSxZQUFJQyxNQUFKLEVBQVk7QUFDUixtQkFBT0QsUUFBUSxjQUFSLENBQVA7QUFDSCxTQUZELE1BRU87QUFDSEEsb0JBQVEsY0FBUixJQUEwQixrQkFBMUI7QUFDSDs7QUFFRCxlQUFPUCxNQUFNSSxHQUFOLEVBQVc7QUFDZEMsMEJBRGM7QUFFZEMsc0JBRmM7QUFHZEMsNEJBSGM7QUFJZGEseUJBQWE7QUFKQyxTQUFYLEVBS0pDLElBTEksQ0FLQyxlQUFPO0FBQ1gsZ0JBQUlDLElBQUlDLE1BQUosSUFBYyxHQUFkLElBQXFCRCxJQUFJQyxNQUFKLEdBQWEsR0FBdEMsRUFBMkM7QUFDdkMsb0JBQUlELElBQUlmLE9BQUosQ0FBWWlCLEdBQVosQ0FBZ0IsY0FBaEIsS0FBbUNGLElBQUlmLE9BQUosQ0FBWWlCLEdBQVosQ0FBZ0IsY0FBaEIsRUFBZ0NDLE9BQWhDLENBQXdDLGtCQUF4QyxJQUE4RCxDQUFDLENBQXRHLEVBQXlHO0FBQ3JHLDJCQUFPSCxJQUFJSSxJQUFKLEVBQVA7QUFDSDs7QUFFRCx1QkFBT0osSUFBSUssSUFBSixFQUFQO0FBQ0gsYUFORCxNQU1PO0FBQ0gsdUJBQU9sQixRQUFRRSxNQUFSLENBQWVXLElBQUlLLElBQUosRUFBZixDQUFQO0FBQ0g7QUFDSixTQWZNLENBQVA7QUFnQkg7O0FBRUQsYUFBU0MsT0FBVCxRQUF3QztBQUFBLFlBQXJCeEIsR0FBcUIsU0FBckJBLEdBQXFCO0FBQUEsWUFBaEJ5QixZQUFnQixTQUFoQkEsWUFBZ0I7O0FBQ3BDLFlBQUl0QixVQUFVLEVBQWQ7QUFDQSxZQUFJc0IsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3ZCdEIsc0JBQVU7QUFDTiwwQkFBVSxVQURKO0FBRU4saUNBQWlCO0FBRlgsYUFBVjtBQUlIOztBQUVELGVBQU9SLFlBQVksRUFBRUssUUFBRixFQUFPQyxRQUFRLEtBQWYsRUFBc0JFLGdCQUF0QixFQUFaLENBQVA7QUFDSDs7QUFFRCxhQUFTdUIsUUFBVCxRQUFpQztBQUFBLFlBQWIxQixHQUFhLFNBQWJBLEdBQWE7QUFBQSxZQUFSUyxJQUFRLFNBQVJBLElBQVE7O0FBQzdCLGVBQU9kLFlBQVksRUFBRUssUUFBRixFQUFPQyxRQUFRLE1BQWYsRUFBdUJDLE1BQU15QixLQUFLQyxTQUFMLENBQWVuQixJQUFmLENBQTdCLEVBQW1ETixTQUFTLEVBQUUsZ0JBQWdCLGtCQUFsQixFQUE1RCxFQUFaLENBQVA7QUFDSDs7QUFFRCxhQUFTMEIsUUFBVCxRQUFxQztBQUFBLFlBQWpCN0IsR0FBaUIsU0FBakJBLEdBQWlCO0FBQUEsWUFBWjhCLFFBQVksU0FBWkEsUUFBWTs7QUFDakMsZUFBT25DLFlBQVksRUFBRUssUUFBRixFQUFPQyxRQUFRLE1BQWYsRUFBdUJDLE1BQU00QixRQUE3QixFQUF1QzFCLFFBQVEsSUFBL0MsRUFBWixDQUFQO0FBQ0g7O0FBRUQsYUFBUzJCLFVBQVQsUUFBbUM7QUFBQSxZQUFiL0IsR0FBYSxTQUFiQSxHQUFhO0FBQUEsWUFBUlMsSUFBUSxTQUFSQSxJQUFROztBQUMvQixlQUFPZCxZQUFZLEVBQUVLLFFBQUYsRUFBT0MsUUFBUSxRQUFmLEVBQXlCQyxNQUFNeUIsS0FBS0MsU0FBTCxDQUFlbkIsSUFBZixDQUEvQixFQUFxRE4sU0FBUyxFQUFFLGdCQUFnQixrQkFBbEIsRUFBOUQsRUFBWixDQUFQO0FBQ0g7O0FBRUQsYUFBUzZCLFlBQVQsR0FBd0I7QUFDcEIsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlDLFVBQVVDLE1BQTlCLEVBQXNDRixHQUF0QyxFQUEyQztBQUN2Q0csb0JBQVFDLEdBQVIsQ0FBWUgsVUFBVUQsQ0FBVixDQUFaO0FBQ0g7QUFDSjs7QUFFRCxXQUFPO0FBQ0hULHdCQURHO0FBRUhFLDBCQUZHO0FBR0hHLDBCQUhHO0FBSUhFLDhCQUpHO0FBS0hDO0FBTEcsS0FBUDs7QUFRQSxhQUFTbkMsVUFBVCxDQUFvQnlDLElBQXBCLEVBQTBCO0FBQ3RCLGVBQU9BLFFBQVEsR0FBR0MsUUFBSCxDQUFZQyxJQUFaLENBQWlCRixJQUFqQixNQUEyQixtQkFBMUM7QUFDSDtBQUNKLENBMUZXLEVBQVo7O1FBNEZTNUMsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUMzQ08rQyx1QixHQUFBQSx1Qjs7QUFqRGhCOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUlBLElBQUlDLFVBQVU7QUFDVixjQUFVLGlCQUFVQyxLQUFWLEVBQWlCQyxPQUFqQixFQUEwQjtBQUNoQyxhQUFLQyxjQUFMLEdBQXNCRixLQUF0QjtBQUNBLGFBQUtHLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxZQUFJQyxPQUFPSCxRQUFRSSxFQUFSLENBQVcsSUFBWCxDQUFYO0FBQ0EsZUFBTyxLQUFLRixjQUFaO0FBQ0EsZUFBTyxLQUFLRCxjQUFaO0FBQ0EsZUFBT0UsSUFBUDtBQUNILEtBUlM7QUFTVixZQUFRLGVBQVVKLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQzlCLFlBQUlLLE9BQU9DLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCWixJQUF0QixDQUEyQk4sU0FBM0IsQ0FBWDtBQUNBLFlBQUlVLFVBQVVLLEtBQUtJLEdBQUwsRUFBZDtBQUNBLFlBQUlDLGFBQWFMLElBQWpCOztBQUVBLFlBQUksS0FBS0gsY0FBTCxJQUF1QlEsV0FBV2pDLE9BQVgsQ0FBbUIsS0FBS3dCLGNBQXhCLE1BQTRDLENBQUMsQ0FBeEUsRUFBMkU7QUFDdkUsbUJBQU8sRUFBUDtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFJRCxRQUFRVyxJQUFSLENBQWFDLEtBQWIsS0FBdUIsSUFBM0IsRUFBaUM7QUFDN0IscUJBQUtWLGNBQUwsR0FBc0IsSUFBdEI7QUFDSDtBQUNELG1CQUFPRixRQUFRSSxFQUFSLENBQVcsSUFBWCxDQUFQO0FBQ0g7QUFDSixLQXRCUztBQXVCVixlQUFXLGtCQUFVSixPQUFWLEVBQW1CO0FBQzFCLFlBQUksQ0FBQyxLQUFLRSxjQUFWLEVBQTBCO0FBQ3RCLG1CQUFPRixRQUFRSSxFQUFSLENBQVcsSUFBWCxDQUFQO0FBQ0g7QUFDSixLQTNCUztBQTRCVjtBQUNBLGNBQVUsZ0JBQVVMLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ2hDLFlBQUlhLE1BQU0zQyxFQUFFLFlBQUYsRUFBZ0JpQyxJQUFoQixDQUFxQkgsUUFBUUksRUFBUixDQUFXLElBQVgsQ0FBckIsQ0FBVjtBQUNBUyxZQUFJQyxJQUFKLENBQVMsYUFBYWYsS0FBYixHQUFxQixJQUE5QixFQUFvQ2dCLElBQXBDLENBQXlDLEVBQUUsWUFBWSxVQUFkLEVBQXpDO0FBQ0EsZUFBT0YsSUFBSVYsSUFBSixFQUFQO0FBQ0g7QUFqQ1MsQ0FBZDs7QUFvQ0EsS0FBSyxJQUFJYSxHQUFULElBQWdCbEIsT0FBaEIsRUFBeUI7QUFDckJtQix5QkFBV0MsY0FBWCxDQUEwQkYsR0FBMUIsRUFBK0JsQixRQUFRa0IsR0FBUixDQUEvQjtBQUNIOztRQUVRQyxVLEdBQUFBLG9CO0FBRUYsU0FBU3BCLHVCQUFULENBQWlDc0IsY0FBakMsRUFBaURDLFNBQWpELEVBQTREO0FBQy9ELFFBQUlDLFdBQVcsRUFBZjs7QUFEK0QsK0JBR3REaEMsQ0FIc0Q7QUFJM0RnQyxpQkFBU0MsSUFBVCxDQUFjeEUsV0FBSzhCLE9BQUwsQ0FBYSxFQUFFeEIsS0FBS2dFLFVBQVUvQixDQUFWLEVBQWFqQyxHQUFwQixFQUFiLEVBQXdDaUIsSUFBeEMsQ0FBNkMsVUFBVUMsR0FBVixFQUFlO0FBQ3RFLGdCQUFJaUQsV0FBV04scUJBQVdPLE9BQVgsQ0FBbUJsRCxHQUFuQixDQUFmO0FBQ0E2QywyQkFBZUMsVUFBVS9CLENBQVYsRUFBYW9DLElBQTVCLElBQW9DRixRQUFwQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0gsU0FMYSxFQUtYLFVBQVVqRCxHQUFWLEVBQWU7QUFBRSxtQkFBTyxLQUFQO0FBQWUsU0FMckIsQ0FBZDtBQUoyRDs7QUFHL0QsU0FBSyxJQUFJZSxJQUFJLENBQWIsRUFBZ0JBLElBQUkrQixVQUFVN0IsTUFBOUIsRUFBc0NGLEtBQUssQ0FBM0MsRUFBOEM7QUFBQSxjQUFyQ0EsQ0FBcUM7QUFPN0M7O0FBRUQsV0FBTzVCLFFBQVFpRSxHQUFSLENBQVlMLFFBQVosQ0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURELElBQUlNLFdBQVksWUFBWTs7QUFFeEI7QUFDQSxhQUFTQyxXQUFULE9BQThGO0FBQUEsWUFBdkVDLFdBQXVFLFFBQXZFQSxXQUF1RTtBQUFBLFlBQTFEQyxLQUEwRCxRQUExREEsS0FBMEQ7QUFBQSxZQUFuREMsT0FBbUQsUUFBbkRBLE9BQW1EO0FBQUEsWUFBMUN4RCxNQUEwQyxRQUExQ0EsTUFBMEM7QUFBQSxZQUFsQ3lELE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLFlBQXpCQyxXQUF5QixRQUF6QkEsV0FBeUI7QUFBQSxZQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQzFGLFlBQUlDLFNBQVNqRSxFQUFFLG1CQUFGLEVBQXVCLEVBQUVTLE1BQU1tRCxTQUFTLEVBQWpCLEVBQXZCLENBQWI7QUFDQSxZQUFJTSxlQUFlbEUsRUFBRSxTQUFGLEVBQWE7QUFDNUJtRSxtQkFBTyxPQURxQjtBQUU1Qiw0QkFBZ0IsT0FGWTtBQUc1QiwwQkFBYyxPQUhjO0FBSTVCbEMsa0JBQU07QUFKc0IsU0FBYixDQUFuQjtBQU1BLFlBQUltQyxXQUFXcEUsRUFBRSxlQUFGLEVBQW1CLEVBQUVTLE1BQU0sT0FBT29ELFdBQVcsRUFBbEIsQ0FBUixFQUFuQixDQUFmO0FBQ0EsWUFBSVEsU0FBU3JFLEVBQUUsYUFBRixFQUFpQixFQUFFbUUsT0FBTyxrQkFBa0I5RCxVQUFVLE1BQTVCLENBQVQsRUFBakIsQ0FBYjs7QUFFQWdFLGVBQU9DLE1BQVAsQ0FBY0wsTUFBZCxFQUNLSyxNQURMLENBQ1lGLFFBRFosRUFFS0UsTUFGTCxDQUVZSixZQUZaLEVBR0tLLFFBSEwsQ0FHY1AsWUFBWUwsV0FBWixJQUEyQixNQUh6Qzs7QUFLQSxZQUFJLENBQUNJLFdBQUwsRUFBa0I7QUFDZFMsdUJBQVcsWUFBWTtBQUNuQkgsdUJBQU9JLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLFlBQVk7QUFDNUJKLDJCQUFPSyxNQUFQO0FBQ0gsaUJBRkQ7QUFHSCxhQUpELEVBSUcsQ0FBQ1osV0FBVyxFQUFaLElBQWtCLElBSnJCO0FBS0g7QUFDSjs7QUFFRCxXQUFPO0FBQ0hKLHFCQUFhQTtBQURWLEtBQVA7QUFHSCxDQS9CZSxFQUFoQjs7UUFpQ1NELFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7UUM3Qk9rQixrQixHQUFBQSxrQjs7QUFKaEI7O0FBQ0E7O0FBQ0E7O0FBRU8sU0FBU0Esa0JBQVQsQ0FBNkJDLGFBQTdCLEVBQTRDO0FBQy9DLFFBQUlDLDJCQUFKO0FBQ0EsUUFBSUMsNEJBQUo7QUFDQSxRQUFJQyxrQ0FBSjtBQUNBLFFBQUlDLG9CQUFvQmhGLEVBQUUsMEJBQUYsQ0FBeEI7QUFDQSxRQUFJaUYsZUFBZWpGLEVBQUUsaUJBQUYsRUFBcUJrRixHQUFyQixFQUFuQjtBQUNBLFFBQUlqQyxpQkFBaUIsRUFBckI7QUFDQSxRQUFJQyxZQUFZLENBQUMsRUFBRUssTUFBTSxpQkFBUixFQUEyQnJFLEtBQUssaUNBQWhDLEVBQUQsRUFBc0UsRUFBRXFFLE1BQU0sc0JBQVIsRUFBZ0NyRSxLQUFLLHNDQUFyQyxFQUF0RSxFQUFxSixFQUFFcUUsTUFBTSxpQkFBUixFQUEyQnJFLEtBQUssaUNBQWhDLEVBQXJKLEVBQTBOLEVBQUVxRSxNQUFNLGtCQUFSLEVBQTRCckUsS0FBSyxrQ0FBakMsRUFBMU4sRUFBaVMsRUFBRXFFLE1BQU0sd0JBQVIsRUFBa0NyRSxLQUFLLHdDQUF2QyxFQUFqUyxFQUFvWCxFQUFFcUUsTUFBTSw2QkFBUixFQUF1Q3JFLEtBQUssNkNBQTVDLEVBQXBYLENBQWhCOztBQUVBLDZDQUF3QitELGNBQXhCLEVBQXdDQyxTQUF4QyxFQUFtRC9DLElBQW5ELENBQXdELFlBQU07QUFDMUQ7QUFDSCxLQUZEOztBQUlBOztBQUVBLFFBQUlnRix5QkFBeUI7QUFDekJDLG9CQUFZLEVBRGE7QUFFekJDLHFCQUFhLEVBRlk7QUFHekJDLHlCQUFpQjtBQUhRLEtBQTdCOztBQU1BOztBQUVBLGFBQVNDLG9CQUFULENBQThCQyxXQUE5QixFQUEyQ0MsRUFBM0MsRUFBK0M3QixLQUEvQyxFQUFzRDtBQUNsRHRDLGdCQUFRQyxHQUFSLENBQVk0RCx1QkFBdUJFLFdBQW5DO0FBQ0EsWUFBSSxFQUFFLE1BQUlHLFdBQUosS0FBc0JMLHVCQUF1QkUsV0FBL0MsQ0FBSixFQUFpRTtBQUM3REYsbUNBQXVCRSxXQUF2QixNQUFzQ0csV0FBdEMsSUFBdUQsQ0FBQyxFQUFFQyxJQUFJQSxFQUFOLEVBQVU3QixPQUFPQSxLQUFqQixFQUFELEtBQThCLEVBQXJGO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsZ0JBQUk4QixlQUFlLEtBQW5COztBQUVBLGlCQUFLLElBQUl2RSxJQUFJLENBQWIsRUFBZ0JBLElBQUlnRSx1QkFBdUJFLFdBQXZCLE1BQXNDRyxXQUF0QyxFQUFxRG5FLE1BQXpFLEVBQWlGRixHQUFqRixFQUFzRjtBQUNsRixvQkFBSWdFLHVCQUF1QkUsV0FBdkIsTUFBc0NHLFdBQXRDLEVBQXFEckUsQ0FBckQsRUFBd0RzRSxFQUF4RCxLQUErREEsRUFBbkUsRUFBdUU7QUFDbkVDLG1DQUFlLElBQWY7QUFDSDtBQUNKO0FBQ0QsZ0JBQUlBLGlCQUFpQixLQUFyQixFQUE0QjtBQUN4QlAsdUNBQXVCRSxXQUF2QixNQUFzQ0csV0FBdEMsRUFBcURwQyxJQUFyRCxDQUEwRCxFQUFFcUMsSUFBSUEsRUFBTixFQUFVN0IsT0FBT0EsS0FBakIsRUFBMUQ7QUFDSDtBQUNKO0FBQ0QrQjtBQUNIOztBQUVELGFBQVNDLHlCQUFULENBQW1DSixXQUFuQyxFQUFnREMsRUFBaEQsRUFBb0Q7QUFDaEQsWUFBSSxNQUFJRCxXQUFKLEtBQXNCTCx1QkFBdUJFLFdBQTdDLElBQTRERix1QkFBdUJFLFdBQXZCLE1BQXNDRyxXQUF0QyxFQUFxRG5FLE1BQXJELEdBQThELENBQTlILEVBQWlJO0FBQzdIOEQsbUNBQXVCRSxXQUF2QixNQUFzQ0csV0FBdEMsSUFBdURMLHVCQUF1QkUsV0FBdkIsTUFBc0NHLFdBQXRDLEVBQXFESyxNQUFyRCxDQUE0RDtBQUFBLHVCQUFNQyxHQUFHTCxFQUFILEtBQVVBLEVBQWhCO0FBQUEsYUFBNUQsQ0FBdkQ7QUFDSDs7QUFFRCxZQUFJLE1BQUlELFdBQUosS0FBc0JMLHVCQUF1QkUsV0FBN0MsSUFBNERGLHVCQUF1QkUsV0FBdkIsTUFBc0NHLFdBQXRDLE1BQXlELENBQXpILEVBQTRIO0FBQ3hILG1CQUFPTCx1QkFBdUJFLFdBQXZCLE1BQXNDRyxXQUF0QyxDQUFQO0FBQ0g7QUFDREc7QUFDSDs7QUFFRCxhQUFTSSxtQkFBVCxHQUErQjtBQUMzQixZQUFJQyxhQUFhQyx3QkFBakI7QUFDQSxZQUFJQyxrQkFBcUJyQixrQkFBSCxzQkFBd0NtQixVQUE5RDtBQUNBLFlBQUlHLDBCQUFKOztBQUVBdkgsbUJBQUs4QixPQUFMLENBQWEsRUFBRXhCLEtBQUtnSCxlQUFQLEVBQWIsRUFBdUMvRixJQUF2QyxDQUE0QyxVQUFDQyxHQUFELEVBQVM7QUFDakQsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYnVHLG9DQUFvQi9GLElBQUlnRyxZQUF4QjtBQUNIO0FBQ0QsbUJBQU9ELGlCQUFQO0FBQ0gsU0FMRCxFQUtHaEcsSUFMSCxDQUtRLFVBQUNnRyxpQkFBRCxFQUF1QjtBQUMzQixnQkFBSWhELFdBQVcsRUFBZjtBQUNBZ0QsOEJBQWtCRSxPQUFsQixDQUEwQixVQUFDYixXQUFELEVBQWlCO0FBQ3ZDLG9CQUFJdEcsd0JBQXNCc0csV0FBdEIsZ0JBQTRDUSxVQUFoRDs7QUFFQTdDLHlCQUFTQyxJQUFULENBQWNrRCwrQkFBK0JkLFdBQS9CLEVBQTRDVixzQkFBc0I1RixHQUFsRSxFQUF1RWlHLHVCQUF1QkMsVUFBOUYsQ0FBZDtBQUNBakMseUJBQVNDLElBQVQsQ0FBY2tELCtCQUErQmQsV0FBL0IsRUFBNENULDRCQUE0QjdGLEdBQXhFLEVBQTZFaUcsdUJBQXVCRyxlQUFwRyxDQUFkO0FBQ0gsYUFMRDs7QUFPQSxtQkFBTy9GLFFBQVFpRSxHQUFSLENBQVlMLFFBQVosRUFBc0JoRCxJQUF0QixDQUEyQixVQUFDQyxHQUFEO0FBQUEsdUJBQVNrQixRQUFRQyxHQUFSLENBQVluQixHQUFaLENBQVQ7QUFBQSxhQUEzQixDQUFQO0FBQ0gsU0FmRCxFQWVHRCxJQWZILENBZVEsWUFBWTtBQUNoQjtBQUNBO0FBQ0EsZ0JBQUlvRyxhQUFhdEQsZUFBZSxpQkFBZixFQUFrQyxFQUFFdUQsT0FBT3JCLHVCQUF1QkUsV0FBaEMsRUFBbEMsQ0FBakI7O0FBRUE7QUFDQTtBQUNBckYsY0FBRSxtQkFBRixFQUF1QmlDLElBQXZCLENBQTRCc0UsVUFBNUI7QUFDQXBCLG1DQUF1QkUsV0FBdkIsR0FBcUNGLHVCQUF1QkMsVUFBNUQ7O0FBRUEsaUJBQUssSUFBTXRDLEdBQVgsSUFBa0JxQyx1QkFBdUJDLFVBQXpDLEVBQXFEO0FBQ2pELG9CQUFJdkQsUUFBUXNELHVCQUF1QkMsVUFBdkIsQ0FBa0N0QyxHQUFsQyxDQUFaO0FBQ0E4Qiw4QkFBYzZCLE9BQWQsQ0FBc0IzRCxHQUF0QixFQUEyQmpCLE1BQU00RCxFQUFqQztBQUNIO0FBQ0RFO0FBRUgsU0EvQkQsRUErQkcvRyxXQUFLc0MsWUEvQlI7QUFpQ0g7O0FBRUQsYUFBU3dGLHFCQUFULEdBQWlDO0FBQzdCdkIsK0JBQXVCRSxXQUF2QixHQUFxQyxFQUFyQztBQUNIOztBQUVELGFBQVNNLHFCQUFULEdBQWlDO0FBQzdCLFlBQUlZLGFBQWF0RCxlQUFlLGlCQUFmLEVBQWtDLEVBQUV1RCxPQUFPckIsdUJBQXVCRSxXQUFoQyxFQUFsQyxDQUFqQjtBQUNBckYsVUFBRSxtQkFBRixFQUF1QmlDLElBQXZCLENBQTRCc0UsVUFBNUI7QUFDSDs7QUFFRCxhQUFTSSxJQUFULENBQWNDLGVBQWQsRUFBK0JDLGdCQUEvQixFQUFpREMsc0JBQWpELEVBQXlFO0FBQ3JFakMsNkJBQXFCK0IsZUFBckI7QUFDQTlCLDhCQUFzQitCLGdCQUF0QjtBQUNBOUIsb0NBQTRCK0Isc0JBQTVCO0FBQ0g7O0FBR0Q7O0FBRUE7QUFDQSxhQUFTQyxjQUFULENBQXdCQyxNQUF4QixFQUFnQztBQUM1QixZQUFJZCxrQkFBcUJyQixrQkFBSCxzQkFBd0NtQyxNQUE5RDtBQUNBLFlBQUliLDBCQUFKO0FBQ0EsWUFBSUgsYUFBYUMsd0JBQWpCOztBQUVBckgsbUJBQUs4QixPQUFMLENBQWEsRUFBRXhCLEtBQUtnSCxlQUFQLEVBQWIsRUFBdUMvRixJQUF2QyxDQUE0QyxVQUFDQyxHQUFELEVBQVM7QUFDakQsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYnVHLG9DQUFvQi9GLElBQUlnRyxZQUF4QjtBQUNIO0FBQ0QsbUJBQU9ELGlCQUFQO0FBQ0gsU0FMRCxFQUtHaEcsSUFMSCxDQUtRLFVBQUNnRyxpQkFBRCxFQUF1QjtBQUMzQixnQkFBSWhELFdBQVcsRUFBZjtBQUNBZ0QsOEJBQWtCRSxPQUFsQixDQUEwQixVQUFDYixXQUFELEVBQWlCO0FBQ3ZDLG9CQUFJdEcsd0JBQXNCc0csV0FBdEIsZ0JBQTRDUSxVQUFoRDtBQUNBO0FBQ0E3Qyx5QkFBU0MsSUFBVCxDQUFja0QsK0JBQStCZCxXQUEvQixFQUE0Q1Ysc0JBQXNCNUYsR0FBbEUsRUFBdUVpRyx1QkFBdUJDLFVBQTlGLENBQWQ7QUFDQWpDLHlCQUFTQyxJQUFULENBQWNrRCwrQkFBK0JkLFdBQS9CLEVBQTRDVCw0QkFBNEI3RixHQUF4RSxFQUE2RWlHLHVCQUF1QkcsZUFBcEcsQ0FBZDs7QUFFQTtBQUNILGFBUEQ7O0FBU0EsbUJBQU8vRixRQUFRaUUsR0FBUixDQUFZTCxRQUFaLEVBQXNCaEQsSUFBdEIsQ0FBMkIsVUFBQ0MsR0FBRDtBQUFBLHVCQUFTa0IsUUFBUUMsR0FBUixDQUFZbkIsR0FBWixDQUFUO0FBQUEsYUFBM0IsQ0FBUDtBQUNILFNBakJELEVBaUJHRCxJQWpCSCxDQWlCUSxZQUFZO0FBQ2hCLGdCQUFJOEcsaUJBQWlCaEUsZUFBZSxpQkFBZixFQUFrQyxFQUFFdUQsT0FBT3JCLHVCQUF1QkMsVUFBaEMsRUFBbEMsQ0FBckI7QUFDQSxnQkFBSThCLGtCQUFrQmpFLGVBQWUsc0JBQWYsRUFBdUMsRUFBRXVELE9BQU9yQix1QkFBdUJHLGVBQWhDLEVBQXZDLENBQXRCO0FBQ0EsZ0JBQUlpQixhQUFhdEQsZUFBZSxpQkFBZixFQUFrQyxFQUFFdUQsT0FBT3JCLHVCQUF1QkUsV0FBdkIsQ0FBbUM4QixZQUE1QyxFQUFsQyxDQUFqQjs7QUFFQTdGLG9CQUFRQyxHQUFSLENBQVk0RCxzQkFBWjs7QUFFQW5GLGNBQUUsbUJBQUYsRUFBdUJpQyxJQUF2QixDQUE0QmdGLGNBQTVCO0FBQ0FqSCxjQUFFLHdCQUFGLEVBQTRCaUMsSUFBNUIsQ0FBaUNpRixlQUFqQztBQUNBbEgsY0FBRSxtQkFBRixFQUF1QmlDLElBQXZCLENBQTRCc0UsVUFBNUI7QUFFSCxTQTVCRCxFQTRCRzNILFdBQUtzQyxZQTVCUjtBQTZCSDs7QUFFRDs7QUFFQSxhQUFTNkYsY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDNUIsWUFBSWQsa0JBQXFCckIsa0JBQUgsc0JBQXdDbUMsTUFBOUQ7QUFDQSxZQUFJYiwwQkFBSjtBQUNBLFlBQUlILGFBQWFDLHdCQUFqQjs7QUFFQXJILG1CQUFLOEIsT0FBTCxDQUFhLEVBQUV4QixLQUFLZ0gsZUFBUCxFQUFiLEVBQXVDL0YsSUFBdkMsQ0FBNEMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pELGdCQUFJQSxJQUFJUixPQUFSLEVBQWlCO0FBQ2J1RyxvQ0FBb0IvRixJQUFJZ0csWUFBeEI7QUFDSDtBQUNELG1CQUFPRCxpQkFBUDtBQUNILFNBTEQsRUFLR2hHLElBTEgsQ0FLUSxVQUFDZ0csaUJBQUQsRUFBdUI7O0FBRTNCLGlCQUFLLElBQUloRixJQUFJLENBQWIsRUFBZ0JBLElBQUlnRixrQkFBa0I5RSxNQUF0QyxFQUE4Q0YsR0FBOUMsRUFBbUQ7QUFDL0NnRSx1Q0FBdUJDLFVBQXZCLE1BQXFDZSxrQkFBa0JoRixDQUFsQixDQUFyQyxJQUErRCxFQUEvRDtBQUNBZ0UsdUNBQXVCRyxlQUF2QixNQUEwQ2Esa0JBQWtCaEYsQ0FBbEIsQ0FBMUMsSUFBb0UsRUFBcEU7QUFDSDs7QUFFRCxnQkFBSThGLGlCQUFpQmhFLGVBQWUsaUJBQWYsRUFBa0MsRUFBRXVELE9BQU9MLGlCQUFULEVBQWxDLENBQXJCO0FBQ0EsZ0JBQUllLGtCQUFrQmpFLGVBQWUsc0JBQWYsRUFBdUMsRUFBRXVELE9BQU9MLGlCQUFULEVBQXZDLENBQXRCO0FBQ0EsZ0JBQUlJLGFBQWF0RCxlQUFlLGlCQUFmLEVBQWtDLEVBQWxDLENBQWpCOztBQUVBOztBQUVBakQsY0FBRSxtQkFBRixFQUF1QmlDLElBQXZCLENBQTRCZ0YsY0FBNUI7QUFDQWpILGNBQUUsd0JBQUYsRUFBNEJpQyxJQUE1QixDQUFpQ2lGLGVBQWpDO0FBQ0FsSCxjQUFFLG1CQUFGLEVBQXVCaUMsSUFBdkIsQ0FBNEJzRSxVQUE1QjtBQUVILFNBdEJELEVBc0JHM0gsV0FBS3NDLFlBdEJSO0FBdUJIOztBQUVELGFBQVNrRyxvQkFBVCxDQUE4QjVCLFdBQTlCLEVBQTJDO0FBQ3ZDLFlBQUlRLGFBQWFDLHdCQUFqQjtBQUNBLFlBQUkvRyx3QkFBc0JzRyxXQUF0QixnQkFBNENRLFVBQWhEO0FBQ0FoRyx1QkFBYXdGLFdBQWIsZUFBb0N2RCxJQUFwQyxDQUF5QyxhQUF6Qzs7QUFFQSxlQUFPcUUsK0JBQStCZCxXQUEvQixFQUE0Q1Ysc0JBQXNCNUYsR0FBbEUsRUFBdUVpRyx1QkFBdUJDLFVBQTlGLEVBQTBHakYsSUFBMUcsQ0FBK0csVUFBQ0MsR0FBRCxFQUFTOztBQUUzSCxnQkFBSWlILGtCQUFrQnBFLGVBQWUsd0JBQWYsRUFBeUMsRUFBRXVELE9BQU9yQix1QkFBdUJDLFVBQXZCLE1BQXFDSSxXQUFyQyxDQUFULEVBQXpDLENBQXRCO0FBQ0F4RiwyQkFBYXdGLFdBQWIsZUFBb0N2RCxJQUFwQyxDQUF5Q29GLGVBQXpDO0FBQ0gsU0FKTSxDQUFQO0FBTUg7O0FBRUQsYUFBU0MsMEJBQVQsQ0FBb0M5QixXQUFwQyxFQUFpRDs7QUFFN0MsWUFBSVEsYUFBYUMsd0JBQWpCO0FBQ0EsWUFBSS9HLHdCQUFzQnNHLFdBQXRCLGdCQUE0Q1EsVUFBaEQ7O0FBRUEsZUFBT00sK0JBQStCZCxXQUEvQixFQUE0Q1QsNEJBQTRCN0YsR0FBeEUsRUFBNkVpRyx1QkFBdUJHLGVBQXBHLEVBQXFIbkYsSUFBckgsQ0FBMEgsVUFBQ0MsR0FBRCxFQUFTOztBQUV0SSxnQkFBSW1ILHVCQUF1QnRFLGVBQWUsNkJBQWYsRUFBOEMsRUFBRXVELE9BQU9yQix1QkFBdUJHLGVBQXZCLE1BQTBDRSxXQUExQyxDQUFULEVBQTlDLENBQTNCOztBQUVBeEYsZ0NBQWtCd0YsV0FBbEIsZUFBeUN2RCxJQUF6QyxDQUE4Q3NGLG9CQUE5QztBQUNILFNBTE0sQ0FBUDtBQU1IOztBQUVELGFBQVNqQiw4QkFBVCxDQUF3Q2QsV0FBeEMsRUFBcUR0RyxHQUFyRCxFQUEwRHNJLGNBQTFELEVBQTBFO0FBQ3RFLGVBQU81SSxXQUFLOEIsT0FBTCxDQUFhLEVBQUV4QixLQUFLQSxHQUFQLEVBQWIsRUFBMkJpQixJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDNUMsZ0JBQUksQ0FBQ0EsR0FBRCxJQUFRLENBQUNBLElBQUlSLE9BQWpCLEVBQTBCO0FBQ3RCMEIsd0JBQVF6QixLQUFSLENBQWNPLEdBQWQ7QUFDQSx1QkFBT2IsUUFBUUUsTUFBUixFQUFQO0FBQ0g7O0FBRUQrSCxnQ0FBa0JoQyxXQUFsQixJQUFtQ3BGLElBQUlxSCxhQUFKLElBQXFCLEVBQXhEO0FBQ0gsU0FQTSxDQUFQO0FBUUg7O0FBRUQsYUFBU0MscUJBQVQsQ0FBK0JsQyxXQUEvQixFQUE0QztBQUN4QyxZQUFJUSxhQUFhQyx3QkFBakI7O0FBRUEsWUFBSS9HLE1BQVM0RixtQkFBVCxxQkFBNENVLFdBQTVDLGdCQUFrRVEsVUFBdEU7O0FBRUEsWUFBSVEsY0FBSjtBQUNBLGVBQU81SCxXQUFLOEIsT0FBTCxDQUFhLEVBQUV4QixLQUFLQSxHQUFQLEVBQWIsRUFBMkJpQixJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDNUMsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYjRHLHdCQUFRcEcsSUFBSXFILGFBQVo7QUFDQW5HLHdCQUFRQyxHQUFSLENBQVlpRixLQUFaO0FBQ0g7O0FBRUQsZ0JBQUlBLE1BQU1uRixNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEJtRixzQkFBTUgsT0FBTixDQUFjLFVBQUNzQixJQUFELEVBQVU7O0FBRXBCL0Msa0NBQWM2QixPQUFkLENBQXNCakIsV0FBdEIsRUFBbUNtQyxLQUFLbEMsRUFBeEM7QUFDQUYseUNBQXFCQyxXQUFyQixFQUFrQ21DLEtBQUtsQyxFQUF2QyxFQUEyQ2tDLEtBQUsvRCxLQUFoRDtBQUNILGlCQUpEO0FBS0g7QUFDRCxtQkFBT3hELElBQUlxSCxhQUFYO0FBQ0gsU0FkTSxDQUFQO0FBZUg7O0FBR0QsYUFBU0csd0NBQVQsQ0FBa0RwQyxXQUFsRCxFQUErRHFDLFFBQS9ELEVBQXlFQyxNQUF6RSxFQUFpRjtBQUM3RSxZQUFJQyxtQkFBbUIvSCxFQUFFLG1CQUFGLENBQXZCO0FBQ0EsWUFBSWdJLFVBQVUsaUJBQWlCSCxRQUFqQixHQUE0QixxREFBNUIsR0FBb0ZBLFFBQXBGLEdBQStGLFFBQTdHOztBQUVBLFlBQUlJLFVBQVVGLGlCQUFpQm5GLElBQWpCLENBQXNCLGFBQWE0QyxXQUFiLEdBQTJCLFVBQWpELENBQWQ7O0FBRUEsWUFBSXlDLFFBQVFyRixJQUFSLENBQWEsTUFBTWlGLFFBQW5CLEVBQTZCeEcsTUFBN0IsR0FBc0MsQ0FBMUMsRUFBNkM7QUFDekM7QUFDSDtBQUNENEcsZ0JBQVEzRCxNQUFSLENBQWUwRCxPQUFmO0FBQ0g7O0FBRUQsYUFBU0UsMEJBQVQsR0FBc0M7QUFDbEMsWUFBSUMsZ0JBQWdCbkksRUFBRSxtQkFBRixDQUFwQjtBQUNBLFlBQUlLLFNBQVMsQ0FBYjtBQUNBLFlBQUlMLEVBQUVtSSxjQUFjLENBQWQsQ0FBRixFQUFvQkMsSUFBcEIsQ0FBeUIsU0FBekIsTUFBd0MsSUFBeEMsSUFBZ0RwSSxFQUFFbUksY0FBYyxDQUFkLENBQUYsRUFBb0JDLElBQXBCLENBQXlCLFNBQXpCLE1BQXdDLElBQTVGLEVBQWtHO0FBQzlGM0UsK0JBQVNDLFdBQVQsQ0FBcUI7QUFDakJDLDZCQUFhLFNBREk7QUFFakJFLHlCQUFTLHNFQUZRO0FBR2pCeEQsd0JBQVEsUUFIUztBQUlqQnlELHlCQUFTO0FBSlEsYUFBckI7QUFNQXpELHFCQUFTLENBQVQ7QUFDQSxtQkFBT0EsTUFBUDtBQUNILFNBVEQsTUFTTyxJQUFJTCxFQUFFbUksY0FBYyxDQUFkLENBQUYsRUFBb0JDLElBQXBCLENBQXlCLFNBQXpCLE1BQXdDLElBQTVDLEVBQWtEO0FBQ3JEM0UsK0JBQVNDLFdBQVQsQ0FBcUI7QUFDakJDLDZCQUFhLFNBREk7QUFFakJFLHlCQUFTLDhEQUZRO0FBR2pCeEQsd0JBQVEsU0FIUztBQUlqQnlELHlCQUFTO0FBSlEsYUFBckI7QUFNQXpELHFCQUFTLENBQVQ7QUFDQSxtQkFBT0EsTUFBUDtBQUNILFNBVE0sTUFTQSxJQUFJTCxFQUFFbUksY0FBYyxDQUFkLENBQUYsRUFBb0JDLElBQXBCLENBQXlCLFNBQXpCLE1BQXdDLElBQTVDLEVBQWtEO0FBQ3JEM0UsK0JBQVNDLFdBQVQsQ0FBcUI7QUFDakJDLDZCQUFhLFNBREk7QUFFakJFLHlCQUFTLGlFQUZRO0FBR2pCeEQsd0JBQVEsU0FIUztBQUlqQnlELHlCQUFTO0FBSlEsYUFBckI7QUFNQXpELHFCQUFTLENBQVQ7QUFDQSxtQkFBT0EsTUFBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBUzRGLHNCQUFULEdBQWtDO0FBQzlCLFlBQUlvQyxtQkFBbUJySSxFQUFFLGlDQUFGLEVBQXFDa0YsR0FBckMsRUFBdkI7O0FBRUEsZUFBT21ELGdCQUFQO0FBQ0g7O0FBRUQsYUFBU0MsZUFBVCxHQUEyQjtBQUN2QixZQUFJcEosTUFBTSxvREFBb0RjLEVBQUUsaUJBQUYsRUFBcUJrRixHQUFyQixFQUE5RDtBQUNBO0FBQ0FGOztBQUVBcEcsbUJBQUs4QixPQUFMLENBQWEsRUFBRXhCLEtBQUtBLEdBQVAsRUFBYixFQUEyQmlCLElBQTNCLENBQWdDLFVBQVVDLEdBQVYsRUFBZTtBQUMzQztBQUNBSixjQUFFSSxJQUFJbUksUUFBTixFQUFnQkMsSUFBaEIsQ0FBcUIsVUFBVUMsS0FBVixFQUFpQjNDLEVBQWpCLEVBQXFCOztBQUV0Qzs7QUFFQSxvQkFBSVMsYUFBYXRELGVBQWUsaUJBQWYsRUFBa0MsRUFBRXVELE9BQU9yQix1QkFBdUJFLFdBQWhDLEVBQWxDLENBQWpCO0FBQ0EvRCx3QkFBUUMsR0FBUixDQUFZZ0YsVUFBWjtBQUNBdkcsa0JBQUUsbUJBQUYsRUFBdUJpQyxJQUF2QixDQUE0QnNFLFVBQTVCOztBQUlBLG9CQUFJbUMsc0JBQUo7QUFDQSxvQkFBSUMsYUFBYTdDLEdBQUc4QyxtQkFBcEI7O0FBRUEsb0JBQUlELFdBQVd0SCxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCcUgsb0NBQWdCLHNDQUFoQjtBQUNILGlCQUZELE1BRU87QUFDSEEsb0NBQWdCLEVBQWhCO0FBQ0g7O0FBRUQsb0JBQUlHLFlBQVkseURBQXlEL0MsR0FBR3pGLE1BQTVELEdBQXFFLG9DQUFyRSxHQUE0R3lGLEdBQUdnRCxVQUEvRyxHQUE0SCxvQ0FBNUgsR0FBbUtoRCxHQUFHaUQsVUFBdEssR0FBbUwsb0NBQW5MLEdBQTBOakQsR0FBR2tELFlBQTdOLEdBQTRPLG9DQUE1TyxHQUFtUmxELEdBQUdtRCxXQUF0UixHQUFvUyxtQ0FBcFMsR0FBMFVQLGFBQTFVLEdBQTBWLGNBQTFXOztBQUVBMUQsa0NBQWtCVixNQUFsQixDQUF5QnVFLFNBQXpCOztBQUVBLG9CQUFJRixXQUFXdEgsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN2Qix3QkFBSTZILHNCQUFzQmxKLEVBQUUsT0FBRixFQUFXbUosUUFBWCxDQUFvQixzQkFBcEIsRUFBNENDLEdBQTVDLENBQWdELFNBQWhELEVBQTJELE1BQTNELENBQTFCO0FBQ0FwRSxzQ0FBa0JWLE1BQWxCLENBQXlCNEUsbUJBQXpCO0FBQ0Esd0JBQUlHLGlCQUFpQix3T0FBckI7QUFDQUgsd0NBQW9CNUUsTUFBcEIsQ0FBMkIrRSxjQUEzQjs7QUFFQXJKLHNCQUFFMkksVUFBRixFQUFjSCxJQUFkLENBQW1CLFVBQVVDLEtBQVYsRUFBaUJhLFVBQWpCLEVBQTZCO0FBQzVDLDRCQUFJakosU0FBUyxLQUFiO0FBQ0EsNEJBQUlpSixXQUFXQyxVQUFYLEtBQTBCLEtBQTlCLEVBQXFDO0FBQ2pDbEoscUNBQVMsSUFBVDtBQUNIOztBQUVELDRCQUFJbUosY0FBYyw2RkFBNkZGLFdBQVcxRixLQUF4RyxHQUFnSCxtQ0FBaEgsR0FBc0p2RCxNQUF0SixHQUErSixrQ0FBL0osR0FBb01pSixXQUFXRyxRQUEvTSxHQUEwTixrQ0FBMU4sR0FBK1BILFdBQVd6RixPQUExUSxHQUFvUixjQUF0Uzs7QUFFQXFGLDRDQUFvQjVFLE1BQXBCLENBQTJCa0YsV0FBM0I7QUFDSCxxQkFURDtBQVVIO0FBQ0osYUF4Q0Q7QUF5Q0gsU0EzQ0Q7QUE0Q0g7O0FBRUQsV0FBTztBQUNIN0Msa0JBREc7QUFFSEksc0NBRkc7QUFHSFcsb0RBSEc7QUFJSEUsMEZBSkc7QUFLSE4sOERBTEc7QUFNSEYsa0RBTkc7QUFPSGtCLHdDQVBHO0FBUUhKLDhEQVJHO0FBU0gzQyxrREFURztBQVVISyw0REFWRztBQVdIRyxnREFYRztBQVlIVyxvREFaRztBQWFIZjtBQWJHLEtBQVA7QUFlSCxDOzs7Ozs7Ozs7Ozs7Ozs7OztRQzNXZStELG1CLEdBQUFBLG1CO0FBQVQsU0FBU0EsbUJBQVQsR0FBZ0M7QUFDbkMsUUFBSUMsWUFBWTtBQUNaLCtCQUF1QixJQURYO0FBRVosd0JBQWdCLEVBRko7QUFHWix3QkFBZ0I7QUFISixLQUFoQjs7QUFNQSxhQUFTbEQsT0FBVCxDQUFpQmpCLFdBQWpCLEVBQThCQyxFQUE5QixFQUFrQzs7QUFFOUIsWUFBSWtFLFVBQVV4QyxZQUFWLENBQXVCOUYsTUFBdkIsSUFBaUMsQ0FBckMsRUFBd0M7QUFDcENzSSxzQkFBVXhDLFlBQVYsQ0FBdUIvRCxJQUF2QixDQUE0QjtBQUN4QiwrQkFBZW9DLFdBRFM7QUFFeEIsdUJBQU8sQ0FBQ0MsRUFBRDtBQUZpQixhQUE1Qjs7QUFLQTtBQUNIOztBQUVELFlBQUltRSxhQUFhRCxVQUFVeEMsWUFBVixDQUF1QnZFLElBQXZCLENBQTRCO0FBQUEsbUJBQU9pSCxJQUFJckUsV0FBSixJQUFtQkEsV0FBMUI7QUFBQSxTQUE1QixDQUFqQjs7QUFFQSxZQUFJLENBQUNvRSxVQUFMLEVBQWlCOztBQUViRCxzQkFBVXhDLFlBQVYsQ0FBdUIvRCxJQUF2QixDQUE0QjtBQUN4QiwrQkFBZW9DLFdBRFM7QUFFeEIsdUJBQU8sQ0FBQ0MsRUFBRDtBQUZpQixhQUE1QjtBQUlBO0FBQ0gsU0FQRCxNQU9PLElBQUltRSxVQUFKLEVBQWdCOztBQUVuQixnQkFBSUUsWUFBWUYsV0FBV0csR0FBWCxDQUFleEosT0FBZixDQUF1QmtGLEVBQXZCLENBQWhCOztBQUVBLGdCQUFJcUUsYUFBYSxDQUFDLENBQWxCLEVBQXFCO0FBQ2pCRiwyQkFBV0csR0FBWCxDQUFlM0csSUFBZixDQUFvQnFDLEVBQXBCO0FBQ0g7QUFDSjtBQUVKOztBQUVELGFBQVN1RSxVQUFULENBQW9CeEUsV0FBcEIsRUFBaUNDLEVBQWpDLEVBQXFDO0FBQ2pDLFlBQUltRSxhQUFhRCxVQUFVeEMsWUFBVixDQUF1QnZFLElBQXZCLENBQTRCO0FBQUEsbUJBQU9pSCxJQUFJckUsV0FBSixJQUFtQkEsV0FBMUI7QUFBQSxTQUE1QixDQUFqQjs7QUFFQSxZQUFJb0UsVUFBSixFQUFnQjtBQUNaLGdCQUFJSyxZQUFZTixVQUFVeEMsWUFBVixDQUF1QnZFLElBQXZCLENBQTRCO0FBQUEsdUJBQU9pSCxJQUFJckUsV0FBSixJQUFtQkEsV0FBMUI7QUFBQSxhQUE1QixFQUFtRXVFLEdBQW5FLENBQXVFeEosT0FBdkUsQ0FBK0VrRixFQUEvRSxDQUFoQjs7QUFFQSxnQkFBSXdFLFlBQVksQ0FBQyxDQUFqQixFQUFvQjtBQUNoQk4sMEJBQVV4QyxZQUFWLENBQXVCdkUsSUFBdkIsQ0FBNEI7QUFBQSwyQkFBT2lILElBQUlyRSxXQUFKLElBQW1CQSxXQUExQjtBQUFBLGlCQUE1QixFQUFtRXVFLEdBQW5FLENBQXVFRyxNQUF2RSxDQUE4RUQsU0FBOUUsRUFBeUYsQ0FBekY7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsYUFBU0UsY0FBVCxHQUEwQjtBQUN0QlIsa0JBQVV4QyxZQUFWLEdBQXlCLEVBQXpCO0FBQ0g7O0FBRUQsYUFBU2lELGtCQUFULENBQTRCbEwsR0FBNUIsRUFBaUM7QUFDN0J5SyxrQkFBVTFFLFlBQVYsR0FBeUIvRixHQUF6QjtBQUNIOztBQUVELGFBQVNtTCx3QkFBVCxHQUFvQztBQUNoQ1Ysa0JBQVVXLG1CQUFWLEdBQWdDLElBQWhDO0FBQ0g7O0FBRUQsYUFBU0MseUJBQVQsR0FBcUM7QUFDakNaLGtCQUFVVyxtQkFBVixHQUFnQyxLQUFoQztBQUVIOztBQUVELFdBQU87QUFDSDdELGlCQUFTQSxPQUROO0FBRUh1RCxvQkFBWUEsVUFGVDtBQUdIRyx3QkFBZ0JBLGNBSGI7QUFJSEMsNEJBQW9CQSxrQkFKakI7QUFLSEMsa0NBQTBCQSx3QkFMdkI7QUFNSEUsbUNBQTJCQSx5QkFOeEI7QUFPSEMseUJBQWlCLDJCQUFZO0FBQ3pCLG1CQUFPYixTQUFQO0FBQ0g7QUFURSxLQUFQO0FBV0gsQzs7Ozs7Ozs7Ozs7Ozs7QUM5RUQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUFjLE9BQU9DLGNBQVAsR0FBeUIsWUFBWTtBQUNqQyxxQkFBUy9ELElBQVQsQ0FBY2dFLGtCQUFkLEVBQWtDQyxXQUFsQyxFQUErQy9GLGtCQUEvQyxFQUFtRUMsbUJBQW5FLEVBQXdGQyx5QkFBeEYsRUFBbUg7QUFDL0csNEJBQU1ILGdCQUFnQix5Q0FBdEI7QUFDQSw0QkFBTWlHLGVBQWUsc0NBQW1CakcsYUFBbkIsQ0FBckI7QUFDQWlHLHFDQUFhbEUsSUFBYixDQUFrQjlCLGtCQUFsQixFQUFzQ0MsbUJBQXRDLEVBQTJEQyx5QkFBM0Q7O0FBRUEsNEJBQUlzRCxtQkFBbUJySSxFQUFFLGlDQUFGLEVBQXFDa0YsR0FBckMsRUFBdkI7QUFBQSw0QkFDSTRGLHdCQUF3QjlLLEVBQUUsaUNBQUYsRUFBcUM2QyxJQUFyQyxDQUEwQyxTQUExQyxDQUQ1QjtBQUFBLDRCQUVJa0ksYUFBYS9LLEVBQUUsYUFBRixDQUZqQjtBQUFBLDRCQUdJZ0wsb0JBQW9CaEwsRUFBRSxxQkFBRixDQUh4QjtBQUFBLDRCQUlJaUwsbUJBQW1CakwsRUFBRSxvQkFBRixDQUp2QjtBQUFBLDRCQUtJa0wsc0JBQXNCbEwsRUFBRSx1QkFBRixDQUwxQjtBQUFBLDRCQU1JbUwsZ0JBQWdCSixXQUFXbkksSUFBWCxDQUFnQixpQkFBaEIsQ0FOcEI7O0FBT0k7QUFDQXdJLCtDQUF1QnBMLEVBQUUsaUJBQUYsQ0FSM0I7QUFBQSw0QkFTSWdGLG9CQUFvQmhGLEVBQUUsZUFBRixDQVR4QjtBQUFBLDRCQVVJcUwsaUJBQWlCckwsRUFBRSxpQkFBRixDQVZyQjtBQUFBLDRCQVdJc0wsMkJBQTJCdEwsRUFBRSwwQkFBRixDQVgvQjtBQUFBLDRCQVlJdUwsWUFBWXZMLEVBQUUsa0JBQUYsQ0FaaEI7QUFBQSw0QkFhSXdMLGtCQUFrQnhMLEVBQUUsbUJBQUYsQ0FidEI7O0FBZUF5TDs7QUFFQSxpQ0FBU3hGLHNCQUFULEdBQWtDO0FBQzlCLHdDQUFJb0MsbUJBQW1CckksRUFBRSxpQ0FBRixFQUFxQ2tGLEdBQXJDLEVBQXZCOztBQUVBLDJDQUFPbUQsZ0JBQVA7QUFDSDs7QUFFRCxpQ0FBU3FELHFCQUFULEdBQWlDO0FBQzdCMUcsc0RBQWtCb0UsR0FBbEIsQ0FBc0IsU0FBdEIsRUFBaUMsTUFBakM7QUFDQWlDLG1EQUFlTSxXQUFmLENBQTJCLGtCQUEzQjtBQUNIOztBQUVEO0FBQ0EsaUNBQVNDLHFCQUFULEdBQWlDO0FBQzdCdEssNENBQVFDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSx3Q0FBSXNLLFVBQVU3TCxFQUFFLElBQUYsQ0FBZDtBQUNBLHdDQUFJOEwsU0FBU0QsUUFBUWhKLElBQVIsQ0FBYSxTQUFiLENBQWI7QUFDQSx3Q0FBSWdGLFdBQVdnRSxRQUFRaEosSUFBUixDQUFhLHNCQUFiLENBQWY7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUFJNEMsS0FBS29HLFFBQVFoSixJQUFSLENBQWEsU0FBYixDQUFUO0FBQ0Esd0NBQUkyQyxjQUFjcUcsUUFBUUUsTUFBUixHQUFpQkEsTUFBakIsR0FBMEJBLE1BQTFCLEdBQW1DbEosSUFBbkMsQ0FBd0Msa0JBQXhDLENBQWxCO0FBQ0Esd0NBQUllLFFBQVFpSSxRQUFRaEosSUFBUixDQUFhLHNCQUFiLENBQVo7O0FBRUErQixrREFBYzZCLE9BQWQsQ0FBc0JqQixXQUF0QixFQUFtQ0MsRUFBbkM7QUFDQW9GLGlEQUFhdEYsb0JBQWIsQ0FBa0NDLFdBQWxDLEVBQStDQyxFQUEvQyxFQUFtRDdCLEtBQW5EO0FBQ0F0Qyw0Q0FBUUMsR0FBUixDQUFZcUQsY0FBYzRGLGVBQWQsRUFBWjtBQUNIOztBQUVELGlDQUFTd0IsY0FBVCxHQUEwQjtBQUN0Qix3Q0FBSUMsYUFBYWpNLEVBQUUsbUJBQUYsQ0FBakI7QUFDQSx3Q0FBSWtNLGNBQWNELFdBQVdySixJQUFYLENBQWdCLGVBQWhCLENBQWxCOztBQUVBc0osZ0RBQVk5RCxJQUFaLENBQWlCLFNBQWpCLEVBQTRCLElBQTVCOztBQUVBeUMsaURBQWE5RSxtQkFBYjtBQUNIOztBQUdEO0FBQ0EsaUNBQVNvRyxzQkFBVCxHQUFrQztBQUM5Qix3Q0FBSTNHLGNBQWN4RixFQUFFLElBQUYsRUFBUStMLE1BQVIsR0FBaUJsSixJQUFqQixDQUFzQixrQkFBdEIsQ0FBbEI7O0FBRUFnSSxpREFBYW5ELHFCQUFiLENBQW1DbEMsV0FBbkM7QUFDSDs7QUFFRCxpQ0FBUzRHLGdCQUFULEdBQTRCO0FBQ3hCcE0sc0NBQUUsbUJBQUYsRUFBdUJpQyxJQUF2QixDQUE0QixFQUE1QjtBQUNBb0s7QUFDQXpILGtEQUFjdUYsY0FBZDtBQUNBVSxpREFBYW5FLHFCQUFiO0FBQ0g7O0FBRUQsaUNBQVMyRixZQUFULEdBQXdCO0FBQ3BCck0sc0NBQUUsZUFBRixFQUFtQm9JLElBQW5CLENBQXdCLFNBQXhCLEVBQW1DLEtBQW5DO0FBQ0g7O0FBRUQsaUNBQVNrRSxzQkFBVCxHQUFrQztBQUM5Qix3Q0FBSVQsVUFBVTdMLEVBQUUsSUFBRixDQUFkO0FBQ0Esd0NBQUl3RixjQUFjcUcsUUFBUUUsTUFBUixHQUFpQkEsTUFBakIsR0FBMEJsSixJQUExQixDQUErQixJQUEvQixFQUFxQzBKLEtBQXJDLENBQTJDLEdBQTNDLEVBQWdELENBQWhELENBQWxCO0FBQ0Esd0NBQUl6RSxTQUFTK0QsUUFBUUUsTUFBUixHQUFpQmxKLElBQWpCLENBQXNCLFNBQXRCLENBQWI7O0FBRUFnSiw0Q0FBUUUsTUFBUixHQUFpQnJILE1BQWpCOztBQUVBO0FBQ0FtRyxpREFBYWpGLHlCQUFiLENBQXVDSixXQUF2QyxFQUFvRHNDLE1BQXBEO0FBQ0FsRCxrREFBY29GLFVBQWQsQ0FBeUJ4RSxXQUF6QixFQUFzQ3NDLE1BQXRDO0FBQ0g7O0FBRUQsaUNBQVMwRSxvQkFBVCxHQUFnQztBQUM1Qix3Q0FBSUMsU0FBU3pNLEVBQUUsZUFBRixDQUFiO0FBQ0F5TSwyQ0FBT3JELEdBQVAsQ0FBVyxTQUFYLEVBQXNCLE9BQXRCO0FBQ0g7O0FBRUQsaUNBQVNzRCxZQUFULEdBQXdCO0FBQ3BCLHdDQUFJQyxrQkFBa0J4QixjQUFjdkksSUFBZCxDQUFtQixXQUFuQixDQUF0QjtBQUNBLHdDQUFJZ0ssV0FBV3pCLGNBQWN2SSxJQUFkLENBQW1CLFdBQW5CLEVBQWdDQyxJQUFoQyxDQUFxQyxTQUFyQyxDQUFmOztBQUVBLHdDQUFJM0QsTUFBTSx1Q0FBdUMwTixRQUFqRDs7QUFFQWhPLCtDQUFLZ0MsUUFBTCxDQUFjLEVBQUUxQixRQUFGLEVBQWQsRUFBdUJpQixJQUF2QixDQUE0QixZQUFZO0FBQ3BDZ0wsOERBQWNqRyxHQUFkLENBQWtCLENBQWxCO0FBQ0F5SCxnRUFBZ0J2RCxHQUFoQixDQUFvQixTQUFwQixFQUErQixNQUEvQjtBQUNILHFDQUhEOztBQUtBeUQ7QUFDSDs7QUFFRCxpQ0FBU0wsb0JBQVQsR0FBZ0M7QUFDNUIsd0NBQUlDLFNBQVN6TSxFQUFFLGVBQUYsQ0FBYjtBQUNBeU0sMkNBQU9yRCxHQUFQLENBQVcsU0FBWCxFQUFzQixPQUF0QjtBQUNIOztBQUVELGlDQUFTeUQsa0JBQVQsR0FBOEI7QUFDMUIsd0NBQUlKLFNBQVN6TSxFQUFFLGVBQUYsQ0FBYjs7QUFFQXlNLDJDQUFPckQsR0FBUCxDQUFXLFNBQVgsRUFBc0IsTUFBdEI7QUFDSDs7QUFFRCxpQ0FBUzBELHVCQUFULEdBQW1DO0FBQy9CLHdDQUFJekIsZUFBZTBCLFFBQWYsQ0FBd0IsU0FBeEIsQ0FBSixFQUF3QztBQUNwQ3pCLHlFQUF5QnJKLElBQXpCLENBQThCLEVBQTlCOztBQUVBK0Msa0VBQWtCb0UsR0FBbEIsQ0FBc0IsU0FBdEIsRUFBaUMsTUFBakM7QUFDQWlDLCtEQUFlTSxXQUFmLENBQTJCLGtCQUEzQjtBQUNBTiwrREFBZU0sV0FBZixDQUEyQixTQUEzQjtBQUNBO0FBQ0gscUNBUEQsTUFPTztBQUNIM0csa0VBQWtCb0UsR0FBbEIsQ0FBc0IsU0FBdEIsRUFBaUMsT0FBakM7QUFDQWtDLHlFQUF5QnJKLElBQXpCLENBQThCLEVBQTlCO0FBQ0FvSiwrREFBZWxDLFFBQWYsQ0FBd0Isa0JBQXhCO0FBQ0FrQywrREFBZWxDLFFBQWYsQ0FBd0IsU0FBeEI7O0FBRUEwQiw2REFBYXZDLGVBQWI7QUFDSDtBQUNKOztBQUVELGlDQUFTMEUsa0JBQVQsR0FBOEI7QUFDMUIsd0NBQUluQixVQUFVN0wsRUFBRSxJQUFGLENBQWQ7QUFDQSx3Q0FBSWlOLGVBQWVwQixRQUFRRSxNQUFSLEdBQWlCQSxNQUFqQixHQUEwQm1CLElBQTFCLEVBQW5COztBQUVBRCxpREFBYUUsTUFBYjtBQUNIOztBQUVELGlDQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUN4Qix3Q0FBSXhCLFVBQVU3TCxFQUFFcU4sRUFBRUMsTUFBSixDQUFkO0FBQ0E1Qjs7QUFFQSx3Q0FBSUcsUUFBUWtCLFFBQVIsQ0FBaUIsWUFBakIsQ0FBSixFQUFvQztBQUNoQ2xCLHdEQUFRRixXQUFSLENBQW9CLFlBQXBCO0FBQ0g7O0FBRUR0RCx1REFBbUJwQyx3QkFBbkI7QUFDQSx3Q0FBSS9HLE1BQVN5TCxrQkFBSCxzQkFBd0N0QyxnQkFBbEQ7QUFDQSx3Q0FBSWhJLFNBQVMsUUFBYjs7QUFFQXpCLCtDQUFLOEIsT0FBTCxDQUFhLEVBQUV4QixLQUFLQSxHQUFQLEVBQWIsRUFBMkJpQixJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDckMsb0RBQUksRUFBRUEsSUFBSVIsT0FBSixLQUFnQixLQUFsQixDQUFKLEVBQThCO0FBQzFCSSw4REFBRSxpQkFBRixFQUFxQm1KLFFBQXJCLENBQThCLFlBQTlCO0FBQ0E5SSxxRUFBUyxTQUFUO0FBQ0g7O0FBRURvRCxtRUFBU0MsV0FBVCxDQUFxQjtBQUNqQkMseUVBQWEsU0FESTtBQUVqQkUscUVBQVN6RCxJQUFJeUQsT0FGSTtBQUdqQkMscUVBQVMsQ0FIUTtBQUlqQnpELG9FQUFRQTtBQUpTLGlEQUFyQjtBQU1ILHFDQVpEO0FBYUg7O0FBRUQsaUNBQVNrTixjQUFULEdBQTBCOztBQUV0QjdCO0FBQ0ExTCxzQ0FBRSxtQkFBRixFQUF1QmlDLElBQXZCLENBQTRCLEVBQTVCO0FBQ0FqQyxzQ0FBRSxtQkFBRixFQUF1QmlDLElBQXZCLENBQTRCLEVBQTVCO0FBQ0FqQyxzQ0FBRSx3QkFBRixFQUE0QmlDLElBQTVCLENBQWlDLEVBQWpDOztBQUVBakMsc0NBQUUsbUJBQUYsRUFBdUJvSixHQUF2QixDQUEyQixTQUEzQixFQUFzQyxNQUF0QztBQUNBcEosc0NBQUUscUJBQUYsRUFBeUJvSixHQUF6QixDQUE2QixTQUE3QixFQUF3QyxNQUF4Qzs7QUFFQTtBQUNBZ0MseURBQXFCTyxXQUFyQixDQUFpQyxZQUFqQztBQUNBSCxvREFBZ0JHLFdBQWhCLENBQTRCLFlBQTVCOztBQUVBLHdDQUFJM0wsRUFBRSxJQUFGLEVBQVFrRixHQUFSLE1BQWlCLENBQXJCLEVBQXdCO0FBQ3BCO0FBQ0g7O0FBRUQsd0NBQUlELGVBQWVrRyxjQUFjakcsR0FBZCxFQUFuQjs7QUFFQU4sa0RBQWN3RixrQkFBZCxDQUFpQ25GLFlBQWpDOztBQUdBb0QsdURBQW1CckksRUFBRSxJQUFGLEVBQVFrRixHQUFSLEVBQW5CO0FBQ0EyRixpREFBYTlELGNBQWIsQ0FBNEJzQixnQkFBNUI7QUFDSDs7QUFFRCxpQ0FBU21GLGlDQUFULEdBQTZDO0FBQ3pDLHdDQUFJQyxnQkFBZ0J6TixFQUFFLElBQUYsQ0FBcEI7QUFDQSx3Q0FBSXdGLGNBQWN4RixFQUFFLElBQUYsRUFBUTZDLElBQVIsQ0FBYSxrQkFBYixDQUFsQjs7QUFFQSx3Q0FBSTZLLGNBQWNELGNBQWM3SyxJQUFkLENBQW1CLFlBQW5CLENBQWxCO0FBQ0E4SyxnREFBWVAsTUFBWjtBQUNBdEMsaURBQWF6RCxvQkFBYixDQUFrQzVCLFdBQWxDOztBQUVBLHdDQUFJbUksVUFBVUYsY0FBY1AsSUFBZCxFQUFkOztBQUVBUyw0Q0FBUUMsV0FBUixDQUFvQixHQUFwQixFQUF5QixZQUFZLENBRXBDLENBRkQ7QUFHSDs7QUFFRCxpQ0FBU0MsZ0NBQVQsR0FBNEM7QUFDeEMsd0NBQUlKLGdCQUFnQnpOLEVBQUUsSUFBRixDQUFwQjtBQUNBLHdDQUFJd0YsY0FBY3hGLEVBQUUsSUFBRixFQUFRNkMsSUFBUixDQUFhLGtCQUFiLENBQWxCO0FBQ0Esd0NBQUk4SyxVQUFVRixjQUFjUCxJQUFkLEVBQWQ7O0FBRUEsd0NBQUlRLGNBQWNELGNBQWM3SyxJQUFkLENBQW1CLFlBQW5CLENBQWxCO0FBQ0E4SyxnREFBWVAsTUFBWjs7QUFFQVEsNENBQVFDLFdBQVIsQ0FBb0IsR0FBcEIsRUFBeUIsWUFBWSxDQUNwQyxDQUREO0FBRUg7O0FBRUQsaUNBQVNFLHNDQUFULEdBQWtEO0FBQzlDLHdDQUFJTCxnQkFBZ0J6TixFQUFFLElBQUYsQ0FBcEI7QUFDQSx3Q0FBSXdGLGNBQWN4RixFQUFFLElBQUYsRUFBUTZDLElBQVIsQ0FBYSxrQkFBYixDQUFsQjtBQUNBLHdDQUFJNkssY0FBY0QsY0FBYzdLLElBQWQsQ0FBbUIsWUFBbkIsQ0FBbEI7QUFDQThLLGdEQUFZUCxNQUFaOztBQUVBdEMsaURBQWF2RCwwQkFBYixDQUF3QzlCLFdBQXhDO0FBQ0Esd0NBQUltSSxVQUFVRixjQUFjUCxJQUFkLEVBQWQ7O0FBRUFTLDRDQUFRQyxXQUFSLENBQW9CLEdBQXBCLEVBQXlCLFlBQVksQ0FDcEMsQ0FERDtBQUVIOztBQUVELGlDQUFTRyw0QkFBVCxHQUF3QztBQUNwQyx3Q0FBSWxDLFVBQVU3TCxFQUFFLElBQUYsQ0FBZDs7QUFFQSx3Q0FBSTZMLFFBQVF6RCxJQUFSLENBQWEsY0FBYyxJQUEzQixDQUFKLEVBQXNDO0FBQ2xDO0FBQ0gscUNBRkQsTUFFTztBQUNIcEksa0RBQUUsbUJBQUYsRUFBdUIrTCxNQUF2QixHQUFnQ0osV0FBaEMsQ0FBNEMsU0FBNUM7QUFDQUUsd0RBQVFFLE1BQVIsR0FBaUI1QyxRQUFqQixDQUEwQixTQUExQjtBQUVIO0FBQ0o7O0FBRUQsaUNBQVM2RSxNQUFULEdBQWtCO0FBQ2Qsd0NBQUlDLFlBQVlwRCxhQUFhM0MsMEJBQWIsRUFBaEI7QUFDQSx3Q0FBSWhKLE1BQU0wTCxXQUFWOztBQUVBLHdDQUFJcUQsYUFBYSxDQUFqQixFQUFvQjtBQUNoQix1REFBTyxLQUFQO0FBQ0gscUNBRkQsTUFFTyxJQUFJQSxhQUFhLENBQWpCLEVBQW9CO0FBQ3ZCckosOERBQWN5Rix3QkFBZDtBQUNILHFDQUZNLE1BRUEsSUFBSTRELGFBQWEsQ0FBakIsRUFBb0I7QUFDdkJySiw4REFBYzJGLHlCQUFkO0FBQ0g7O0FBRUQsd0NBQUk1SyxPQUFPaUYsY0FBYzRGLGVBQWQsRUFBWDtBQUNBbEosNENBQVFDLEdBQVIsQ0FBWTVCLElBQVo7QUFDQTZMLG9EQUFnQnJDLFFBQWhCLENBQXlCLFlBQXpCO0FBQ0F2SywrQ0FBS2dDLFFBQUwsQ0FBYyxFQUFFMUIsS0FBS0EsR0FBUCxFQUFZUyxNQUFNQSxJQUFsQixFQUFkLEVBQXdDUSxJQUF4QyxDQUE2QyxVQUFVQyxHQUFWLEVBQWU7QUFDeERrQix3REFBUUMsR0FBUixDQUFZbkIsR0FBWjtBQUNBQSxvREFBSXlELE9BQUosQ0FBWXFLLEdBQVosQ0FBZ0IsaUJBQVM7QUFDckJsTyw4REFBRSxRQUFGLEVBQVk7QUFDUm1FLCtFQUFPLGtCQURDO0FBRVJsQyw4RUFBTSxXQUFXSixNQUFNMEssS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBWCxHQUFpQyxlQUFqQyxHQUFtRDFLLE1BQU0wSyxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixFQUFvQjRCLE9BQXBCLENBQTRCLEdBQTVCLEVBQWlDLEdBQWpDLENBQW5ELEdBQTJGO0FBRnpGLDZEQUFaLEVBR0c1SixRQUhILENBR1ksa0JBSFo7QUFJSCxpREFMRDtBQU1ILHFDQVJELEVBUUdwRSxJQVJILENBUVEsVUFBVUMsR0FBVixFQUFlO0FBQ25CZ007QUFDQVosZ0VBQWdCRyxXQUFoQixDQUE0QixZQUE1QjtBQUNILHFDQVhEO0FBWUg7O0FBRUQsaUNBQVN5QyxhQUFULEdBQXlCO0FBQ3JCLHdDQUFJeEIsV0FBVzVNLEVBQUUsaUNBQUYsRUFBcUM2QyxJQUFyQyxDQUEwQyxTQUExQyxDQUFmOztBQUVBbUksc0RBQWtCbkksSUFBbEIsQ0FBdUIsZUFBdkIsRUFBd0Msd0NBQXdDK0osUUFBaEY7QUFDSDs7QUFFRCxpQ0FBU3lCLGlCQUFULEdBQTZCOztBQUV6Qix3Q0FBSW5QLE1BQU04TCxrQkFBa0JuSSxJQUFsQixDQUF1QixlQUF2QixDQUFWO0FBQUEsd0NBQ0l5TCxZQUFZdE8sRUFBRSxtQkFBRixDQURoQjtBQUFBLHdDQUVJdU8sYUFBYUQsVUFBVTFMLElBQVYsQ0FBZSxPQUFmLENBRmpCO0FBQUEsd0NBR0k0TCxZQUFZRixVQUFVMUwsSUFBVixDQUFlLE1BQWYsQ0FIaEI7O0FBS0EwTCw4Q0FBVWxGLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLE9BQXpCO0FBQ0FwSixzQ0FBRSxxQkFBRixFQUF5Qm9KLEdBQXpCLENBQTZCLFNBQTdCLEVBQXdDLE1BQXhDO0FBQ0E5SCw0Q0FBUUMsR0FBUixDQUFZckMsR0FBWjs7QUFFQU4sK0NBQUs4QixPQUFMLENBQWEsRUFBRXhCLEtBQUtBLEdBQVAsRUFBYixFQUEyQmlCLElBQTNCLENBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUNyQ2tCLHdEQUFRQyxHQUFSLENBQVluQixHQUFaO0FBQ0FtTywyREFBV3JKLEdBQVgsQ0FBZTlFLElBQUlxTyxVQUFuQjtBQUNBRCwwREFBVXRKLEdBQVYsQ0FBYzlFLElBQUlsQixHQUFsQjtBQUNILHFDQUpEO0FBS0g7O0FBRUQsaUNBQVN3UCxjQUFULENBQXdCQyxFQUF4QixFQUE0QjtBQUN4QkEsdUNBQUdDLGNBQUg7O0FBRUEsd0NBQUloQyxXQUFXNU0sRUFBRSxpQ0FBRixFQUFxQzZDLElBQXJDLENBQTBDLFNBQTFDLENBQWY7QUFBQSx3Q0FDSXlMLFlBQVl0TyxFQUFFLG1CQUFGLENBRGhCO0FBQUEsd0NBRUl1TyxhQUFhRCxVQUFVMUwsSUFBVixDQUFlLE9BQWYsQ0FGakI7QUFBQSx3Q0FHSTRMLFlBQVlGLFVBQVUxTCxJQUFWLENBQWUsTUFBZixDQUhoQjs7QUFLQSx3Q0FBSWpELE9BQU87QUFDUDRELHNEQUFNZ0wsV0FBV3JKLEdBQVgsRUFEQztBQUVQaEcscURBQUtzUCxVQUFVdEosR0FBVixFQUZFO0FBR1BPLG9EQUFJekYsRUFBRSxpQ0FBRixFQUFxQzZDLElBQXJDLENBQTBDLFNBQTFDO0FBSEcscUNBQVg7O0FBTUFqRSwrQ0FBS2dDLFFBQUwsQ0FBYztBQUNWMUIscURBQUssd0NBQXdDME4sUUFEbkM7QUFFVmpOLHNEQUFNQTtBQUZJLHFDQUFkLEVBR0dRLElBSEgsQ0FHUSxVQUFDQyxHQUFELEVBQVM7QUFDYixvREFBSUEsSUFBSVIsT0FBUixFQUFpQjtBQUNiNkQsK0VBQVNDLFdBQVQsQ0FBcUI7QUFDakJDLHFGQUFhLFNBREk7QUFFakJFLGlGQUFTekQsSUFBSXlELE9BRkk7QUFHakJDLGlGQUFTLEVBSFE7QUFJakJ6RCxnRkFBUTtBQUpTLDZEQUFyQjtBQU1BTCw4REFBRSxtQkFBRixFQUF1Qm9KLEdBQXZCLENBQTJCLFNBQTNCLEVBQXNDLE1BQXRDO0FBQ0gsaURBUkQsTUFRTztBQUNIM0YsK0VBQVNDLFdBQVQsQ0FBcUI7QUFDakJDLHFGQUFhLFNBREk7QUFFakJFLGlGQUFTekQsSUFBSXlELE9BRkk7QUFHakJDLGlGQUFTLEVBSFE7QUFJakJ6RCxnRkFBUTtBQUpTLDZEQUFyQjtBQU1IO0FBQ0oscUNBcEJEO0FBcUJIOztBQUVELGlDQUFTd08sY0FBVCxHQUEwQjtBQUN0QjdPLHNDQUFFLHFCQUFGLEVBQXlCb0osR0FBekIsQ0FBNkIsU0FBN0IsRUFBd0MsT0FBeEM7QUFDQXBKLHNDQUFFLG1CQUFGLEVBQXVCb0osR0FBdkIsQ0FBMkIsU0FBM0IsRUFBc0MsTUFBdEM7QUFDSDs7QUFFRCxpQ0FBUzBGLGNBQVQsQ0FBd0JILEVBQXhCLEVBQTRCO0FBQ3hCQSx1Q0FBR0MsY0FBSDtBQUNBLHdDQUFJRyxjQUFjL08sRUFBRSxxQkFBRixDQUFsQjtBQUFBLHdDQUNJdU8sYUFBYVEsWUFBWW5NLElBQVosQ0FBaUIsT0FBakIsQ0FEakI7QUFBQSx3Q0FFSTRMLFlBQVlPLFlBQVluTSxJQUFaLENBQWlCLE1BQWpCLENBRmhCO0FBQUEsd0NBR0lvTSxTQUFTRCxZQUFZbk0sSUFBWixDQUFpQixRQUFqQixDQUhiO0FBQUEsd0NBSUlxTSxZQUFZRixZQUFZbk0sSUFBWixDQUFpQixXQUFqQixDQUpoQjs7QUFNQSx3Q0FBSWpELE9BQU87QUFDUDRELHNEQUFNZ0wsV0FBV3JKLEdBQVgsRUFEQztBQUVQaEcscURBQUtzUCxVQUFVdEosR0FBVixFQUZFO0FBR1BnSyx1REFBT0YsT0FBTzlKLEdBQVAsRUFIQTtBQUlQaUssMERBQVVGLFVBQVUvSixHQUFWO0FBSkgscUNBQVg7QUFNQTVELDRDQUFRQyxHQUFSLENBQVk1QixJQUFaO0FBQ0Esd0NBQUlULE1BQU0sbUNBQVY7O0FBRUFOLCtDQUFLZ0MsUUFBTCxDQUFjLEVBQUUxQixLQUFLQSxHQUFQLEVBQVlTLE1BQU1BLElBQWxCLEVBQWQsRUFBd0NRLElBQXhDLENBQTZDLFVBQUNDLEdBQUQsRUFBUztBQUNsRGtCLHdEQUFRQyxHQUFSLENBQVluQixHQUFaO0FBQ0Esb0RBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYkksOERBQUUscUJBQUYsRUFBeUJvSixHQUF6QixDQUE2QixTQUE3QixFQUF3QyxNQUF4Qzs7QUFFQTtBQUNBLGdFQUFJZ0csY0FBY3BQLEVBQUUsaUJBQUYsQ0FBbEI7QUFDQSxnRUFBSXFQLFVBQVVyUCxFQUFFLFVBQUYsRUFBYztBQUN4QjZCLCtFQUFPMk0sVUFBVXRKLEdBQVYsRUFEaUI7QUFFeEIzQiw4RUFBTWlMLFVBQVV0SixHQUFWO0FBRmtCLDZEQUFkLENBQWQ7QUFJQW1LLG9FQUFRcE4sSUFBUixDQUFhdU0sVUFBVXRKLEdBQVYsRUFBYjtBQUNBNUQsb0VBQVFDLEdBQVIsQ0FBWW5CLElBQUlrUCxNQUFoQjtBQUNBRCxvRUFBUXhNLElBQVIsQ0FBYSxTQUFiLEVBQXdCekMsSUFBSWtQLE1BQTVCOztBQUVBRix3RUFBWTlLLE1BQVosQ0FBbUIrSyxPQUFuQjs7QUFHQTVMLCtFQUFTQyxXQUFULENBQXFCO0FBQ2pCQyxxRkFBYSxTQURJO0FBRWpCRSxpRkFBU3pELElBQUl5RCxPQUZJO0FBR2pCQyxpRkFBUyxFQUhRO0FBSWpCekQsZ0ZBQVE7QUFKUyw2REFBckI7QUFNSCxpREF0QkQsTUFzQk87QUFDSG9ELCtFQUFTQyxXQUFULENBQXFCO0FBQ2pCQyxxRkFBYSxTQURJO0FBRWpCRSxpRkFBU3pELElBQUl5RCxPQUZJO0FBR2pCQyxpRkFBUyxFQUhRO0FBSWpCekQsZ0ZBQVE7QUFKUyw2REFBckI7QUFNSDtBQUNKLHFDQWhDRDtBQWlDSDtBQUNEOztBQUdBLGlDQUFTb0wsVUFBVCxHQUFzQjtBQUNsQnpMLHNDQUFFLG1CQUFGLEVBQXVCdVAsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsa0JBQW5DLEVBQXVEM0QscUJBQXZEOztBQUVBNUwsc0NBQUUsbUJBQUYsRUFBdUJ1UCxFQUF2QixDQUEwQixPQUExQixFQUFtQyxhQUFuQyxFQUFrRHZELGNBQWxEOztBQUVBaE0sc0NBQUUsbUJBQUYsRUFBdUJ1UCxFQUF2QixDQUEwQixPQUExQixFQUFtQyxlQUFuQyxFQUFvRHBELHNCQUFwRDs7QUFFQW5NLHNDQUFFLG1CQUFGLEVBQXVCdVAsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsZUFBbkMsRUFBb0RuRCxnQkFBcEQ7O0FBRUFwTSxzQ0FBRSxtQkFBRixFQUF1QnVQLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLG1CQUFuQyxFQUF3RGpELHNCQUF4RDs7QUFFQXBCLHdEQUFvQnFFLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDL0Msb0JBQWhDOztBQUVBeE0sc0NBQUUsVUFBRixFQUFjdVAsRUFBZCxDQUFpQixPQUFqQixFQUEwQjdDLFlBQTFCOztBQUVBMU0sc0NBQUUsU0FBRixFQUFhdVAsRUFBYixDQUFnQixPQUFoQixFQUF5QjFDLGtCQUF6Qjs7QUFFQTdNLHNDQUFFLGlCQUFGLEVBQXFCdVAsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUN6Qyx1QkFBakM7O0FBRUE5TSxzQ0FBRSxlQUFGLEVBQW1CdVAsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBL0IsRUFBMkN2QyxrQkFBM0M7O0FBRUE1Qix5REFBcUJtRSxFQUFyQixDQUF3QixPQUF4QixFQUFpQ25DLGVBQWpDOztBQUVBakMsa0RBQWNvRSxFQUFkLENBQWlCLFFBQWpCLEVBQTJCaEMsY0FBM0I7O0FBRUFwQyxrREFBY29FLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkJuQixhQUEzQjs7QUFFQTVDLG9EQUFnQitELEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCdkIsTUFBNUI7O0FBRUE7QUFDQWhPLHNDQUFFLG1CQUFGLEVBQXVCdVAsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsZUFBbkMsRUFBb0QvQixpQ0FBcEQ7O0FBRUF4TixzQ0FBRSxtQkFBRixFQUF1QnVQLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLGVBQW5DLEVBQW9EMUIsZ0NBQXBEOztBQUVBN04sc0NBQUUsd0JBQUYsRUFBNEJ1UCxFQUE1QixDQUErQixPQUEvQixFQUF3QyxlQUF4QyxFQUF5RHpCLHNDQUF6RDtBQUNBOztBQUVBOU4sc0NBQUUsZUFBRixFQUFtQnVQLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLG1CQUEvQixFQUFvRHhCLDRCQUFwRDs7QUFFQTs7QUFFQS9OLHNDQUFFLE9BQUYsRUFBV3VQLEVBQVgsQ0FBYyxPQUFkLEVBQXVCbEIsaUJBQXZCOztBQUVBck8sc0NBQUUsaUJBQUYsRUFBcUJ1UCxFQUFyQixDQUF3QixPQUF4QixFQUFpQ1QsY0FBakM7O0FBRUE5TyxzQ0FBRSxrQkFBRixFQUFzQnVQLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDYixjQUFsQzs7QUFFQXpELHFEQUFpQnNFLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCVixjQUE3QjtBQUNIO0FBQ0o7O0FBRUQsbUJBQU87QUFDSGxJO0FBREcsYUFBUDtBQUdILENBM2N1QixFQUF4QixDIiwiZmlsZSI6ImpzL3NpdGV0cmlrcy9zaXRlc3luYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NjcmlwdHMvc2l0ZXRyaWtzL3NpdGVzeW5jLmpzXCIpO1xuIiwiLyoqIVxuXG4gQGxpY2Vuc2VcbiBoYW5kbGViYXJzIHY0LjEuMFxuXG5Db3B5cmlnaHQgKEMpIDIwMTEtMjAxNyBieSBZZWh1ZGEgS2F0elxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhhbmRsZWJhcnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfaGFuZGxlYmFyc1J1bnRpbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc1J1bnRpbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc1J1bnRpbWUpO1xuXG5cdC8vIENvbXBpbGVyIGltcG9ydHNcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckFzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlckFzdCk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvcik7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc05vQ29uZmxpY3QpO1xuXG5cdHZhciBfY3JlYXRlID0gX2hhbmRsZWJhcnNSdW50aW1lMlsnZGVmYXVsdCddLmNyZWF0ZTtcblx0ZnVuY3Rpb24gY3JlYXRlKCkge1xuXHQgIHZhciBoYiA9IF9jcmVhdGUoKTtcblxuXHQgIGhiLmNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIuY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuXHQgIH07XG5cdCAgaGIucHJlY29tcGlsZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuXHQgICAgcmV0dXJuIF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlci5wcmVjb21waWxlKGlucHV0LCBvcHRpb25zLCBoYik7XG5cdCAgfTtcblxuXHQgIGhiLkFTVCA9IF9oYW5kbGViYXJzQ29tcGlsZXJBc3QyWydkZWZhdWx0J107XG5cdCAgaGIuQ29tcGlsZXIgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIuQ29tcGlsZXI7XG5cdCAgaGIuSmF2YVNjcmlwdENvbXBpbGVyID0gX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcjJbJ2RlZmF1bHQnXTtcblx0ICBoYi5QYXJzZXIgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZS5wYXJzZXI7XG5cdCAgaGIucGFyc2UgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZS5wYXJzZTtcblxuXHQgIHJldHVybiBoYjtcblx0fVxuXG5cdHZhciBpbnN0ID0gY3JlYXRlKCk7XG5cdGluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5cdF9oYW5kbGViYXJzTm9Db25mbGljdDJbJ2RlZmF1bHQnXShpbnN0KTtcblxuXHRpbnN0LlZpc2l0b3IgPSBfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvcjJbJ2RlZmF1bHQnXTtcblxuXHRpbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuXHQgICAgXCJkZWZhdWx0XCI6IG9ialxuXHQgIH07XG5cdH07XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfaGFuZGxlYmFyc0Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdHZhciBiYXNlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNCYXNlKTtcblxuXHQvLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXG5cdC8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG5cblx0dmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXG5cdHZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc1NhZmVTdHJpbmcpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNFeGNlcHRpb24pO1xuXG5cdHZhciBfaGFuZGxlYmFyc1V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1V0aWxzKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG5cblx0dmFyIHJ1bnRpbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1J1bnRpbWUpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuXHQvLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2Vcblx0ZnVuY3Rpb24gY3JlYXRlKCkge1xuXHQgIHZhciBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG5cdCAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcblx0ICBoYi5TYWZlU3RyaW5nID0gX2hhbmRsZWJhcnNTYWZlU3RyaW5nMlsnZGVmYXVsdCddO1xuXHQgIGhiLkV4Y2VwdGlvbiA9IF9oYW5kbGViYXJzRXhjZXB0aW9uMlsnZGVmYXVsdCddO1xuXHQgIGhiLlV0aWxzID0gVXRpbHM7XG5cdCAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cblx0ICBoYi5WTSA9IHJ1bnRpbWU7XG5cdCAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbiAoc3BlYykge1xuXHQgICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuXHQgIH07XG5cblx0ICByZXR1cm4gaGI7XG5cdH1cblxuXHR2YXIgaW5zdCA9IGNyZWF0ZSgpO1xuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuXHRfaGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cblx0aW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuXHQgICAgcmV0dXJuIG9iajtcblx0ICB9IGVsc2Uge1xuXHQgICAgdmFyIG5ld09iaiA9IHt9O1xuXG5cdCAgICBpZiAob2JqICE9IG51bGwpIHtcblx0ICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHQgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cdCAgICByZXR1cm4gbmV3T2JqO1xuXHQgIH1cblx0fTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5IYW5kbGViYXJzRW52aXJvbm1lbnQgPSBIYW5kbGViYXJzRW52aXJvbm1lbnQ7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0dmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblx0dmFyIF9kZWNvcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cblx0dmFyIF9sb2dnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblxuXHR2YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xuXG5cdHZhciBWRVJTSU9OID0gJzQuMS4wJztcblx0ZXhwb3J0cy5WRVJTSU9OID0gVkVSU0lPTjtcblx0dmFyIENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuXHRleHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG5cdHZhciBSRVZJU0lPTl9DSEFOR0VTID0ge1xuXHQgIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG5cdCAgMjogJz09IDEuMC4wLXJjLjMnLFxuXHQgIDM6ICc9PSAxLjAuMC1yYy40Jyxcblx0ICA0OiAnPT0gMS54LngnLFxuXHQgIDU6ICc9PSAyLjAuMC1hbHBoYS54Jyxcblx0ICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcblx0ICA3OiAnPj0gNC4wLjAnXG5cdH07XG5cblx0ZXhwb3J0cy5SRVZJU0lPTl9DSEFOR0VTID0gUkVWSVNJT05fQ0hBTkdFUztcblx0dmFyIG9iamVjdFR5cGUgPSAnW29iamVjdCBPYmplY3RdJztcblxuXHRmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcblx0ICB0aGlzLmhlbHBlcnMgPSBoZWxwZXJzIHx8IHt9O1xuXHQgIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcblx0ICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG5cdCAgX2hlbHBlcnMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyh0aGlzKTtcblx0ICBfZGVjb3JhdG9ycy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xuXHR9XG5cblx0SGFuZGxlYmFyc0Vudmlyb25tZW50LnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG5cdCAgbG9nZ2VyOiBfbG9nZ2VyMlsnZGVmYXVsdCddLFxuXHQgIGxvZzogX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2csXG5cblx0ICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXIobmFtZSwgZm4pIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBpZiAoZm4pIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7XG5cdCAgICAgIH1cblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVySGVscGVyKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG5cdCAgfSxcblxuXHQgIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gcmVnaXN0ZXJQYXJ0aWFsKG5hbWUsIHBhcnRpYWwpIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCInICsgbmFtZSArICdcIiBhcyB1bmRlZmluZWQnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiB1bnJlZ2lzdGVyUGFydGlhbChuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcblx0ICB9LFxuXG5cdCAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUsIGZuKSB7XG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcblx0ICAgICAgaWYgKGZuKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuXHQgICAgICB9XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gdW5yZWdpc3RlckRlY29yYXRvcihuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5kZWNvcmF0b3JzW25hbWVdO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgbG9nID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2c7XG5cblx0ZXhwb3J0cy5sb2cgPSBsb2c7XG5cdGV4cG9ydHMuY3JlYXRlRnJhbWUgPSBfdXRpbHMuY3JlYXRlRnJhbWU7XG5cdGV4cG9ydHMubG9nZ2VyID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuXHRleHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuXHRleHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO1xuXHRleHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuXHRleHBvcnRzLmNyZWF0ZUZyYW1lID0gY3JlYXRlRnJhbWU7XG5cdGV4cG9ydHMuYmxvY2tQYXJhbXMgPSBibG9ja1BhcmFtcztcblx0ZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoO1xuXHR2YXIgZXNjYXBlID0ge1xuXHQgICcmJzogJyZhbXA7Jyxcblx0ICAnPCc6ICcmbHQ7Jyxcblx0ICAnPic6ICcmZ3Q7Jyxcblx0ICAnXCInOiAnJnF1b3Q7Jyxcblx0ICBcIidcIjogJyYjeDI3OycsXG5cdCAgJ2AnOiAnJiN4NjA7Jyxcblx0ICAnPSc6ICcmI3gzRDsnXG5cdH07XG5cblx0dmFyIGJhZENoYXJzID0gL1smPD5cIidgPV0vZyxcblx0ICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5cdGZ1bmN0aW9uIGVzY2FwZUNoYXIoY2hyKSB7XG5cdCAgcmV0dXJuIGVzY2FwZVtjaHJdO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG9iaiAvKiAsIC4uLnNvdXJjZSAqLykge1xuXHQgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG5cdCAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2ldLCBrZXkpKSB7XG5cdCAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBvYmo7XG5cdH1cblxuXHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5cdGV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcblx0Ly8gU291cmNlZCBmcm9tIGxvZGFzaFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vYmVzdGllanMvbG9kYXNoL2Jsb2IvbWFzdGVyL0xJQ0VOU0UudHh0XG5cdC8qIGVzbGludC1kaXNhYmxlIGZ1bmMtc3R5bGUgKi9cblx0dmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblx0fTtcblx0Ly8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdGlmIChpc0Z1bmN0aW9uKC94LykpIHtcblx0ICBleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHQgIH07XG5cdH1cblx0ZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuXHQvKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHR2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IGZhbHNlO1xuXHR9O1xuXG5cdGV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cdC8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5cblx0ZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcblx0ICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcblx0ICAgICAgcmV0dXJuIGk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiAtMTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG5cdCAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdCAgICAvLyBkb24ndCBlc2NhcGUgU2FmZVN0cmluZ3MsIHNpbmNlIHRoZXkncmUgYWxyZWFkeSBzYWZlXG5cdCAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcblx0ICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcblx0ICAgIH0gZWxzZSBpZiAoc3RyaW5nID09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuICcnO1xuXHQgICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG5cdCAgICAgIHJldHVybiBzdHJpbmcgKyAnJztcblx0ICAgIH1cblxuXHQgICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG5cdCAgICAvLyB0aGUgcmVnZXggdGVzdCB3aWxsIGRvIHRoaXMgdHJhbnNwYXJlbnRseSBiZWhpbmQgdGhlIHNjZW5lcywgY2F1c2luZyBpc3N1ZXMgaWZcblx0ICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuXHQgICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG5cdCAgfVxuXG5cdCAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcblx0ICAgIHJldHVybiBzdHJpbmc7XG5cdCAgfVxuXHQgIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG5cdH1cblxuXHRmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG5cdCAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG5cdCAgdmFyIGZyYW1lID0gZXh0ZW5kKHt9LCBvYmplY3QpO1xuXHQgIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG5cdCAgcmV0dXJuIGZyYW1lO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcblx0ICBwYXJhbXMucGF0aCA9IGlkcztcblx0ICByZXR1cm4gcGFyYW1zO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG5cdCAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG5cdH1cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIGVycm9yUHJvcHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnbWVzc2FnZScsICduYW1lJywgJ251bWJlcicsICdzdGFjayddO1xuXG5cdGZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG5cdCAgdmFyIGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG5cdCAgICAgIGxpbmUgPSB1bmRlZmluZWQsXG5cdCAgICAgIGNvbHVtbiA9IHVuZGVmaW5lZDtcblx0ICBpZiAobG9jKSB7XG5cdCAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG5cdCAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG5cdCAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcblx0ICB9XG5cblx0ICB2YXIgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cblx0ICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cblx0ICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcblx0ICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuXHQgIH1cblxuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cdCAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG5cdCAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuXHQgIH1cblxuXHQgIHRyeSB7XG5cdCAgICBpZiAobG9jKSB7XG5cdCAgICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG5cblx0ICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG5cdCAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICAgIGlmIChfT2JqZWN0JGRlZmluZVByb3BlcnR5KSB7XG5cdCAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG5cdCAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuXHQgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuXHQgICAgICAgIH0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSBjYXRjaCAobm9wKSB7XG5cdCAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG5cdCAgfVxuXHR9XG5cblx0RXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV4Y2VwdGlvbjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXyg4KSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG5cdCAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcblx0fTtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuXHQgIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG5cdCAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG5cdCAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG5cdCAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcblx0ICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG5cdCAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuXHQgIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcblx0ICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcblx0ICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG5cdH07XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzID0gcmVnaXN0ZXJEZWZhdWx0SGVscGVycztcblxuXHR2YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuXHR2YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyk7XG5cblx0dmFyIF9oZWxwZXJzRWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG5cdHZhciBfaGVscGVyc0VhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0VhY2gpO1xuXG5cdHZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuXHR2YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNIZWxwZXJNaXNzaW5nKTtcblxuXHR2YXIgX2hlbHBlcnNJZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG5cdHZhciBfaGVscGVyc0lmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNJZik7XG5cblx0dmFyIF9oZWxwZXJzTG9nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cblx0dmFyIF9oZWxwZXJzTG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb2cpO1xuXG5cdHZhciBfaGVscGVyc0xvb2t1cCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG5cdHZhciBfaGVscGVyc0xvb2t1cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9va3VwKTtcblxuXHR2YXIgX2hlbHBlcnNXaXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cblx0dmFyIF9oZWxwZXJzV2l0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzV2l0aCk7XG5cblx0ZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0SGVscGVycyhpbnN0YW5jZSkge1xuXHQgIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0VhY2gyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNJZjJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNMb2cyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzTG9va3VwMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc1dpdGgyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuXHQgICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuXHQgICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcblx0ICAgICAgcmV0dXJuIGZuKHRoaXMpO1xuXHQgICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG5cdCAgICB9IGVsc2UgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG5cdCAgICAgIGlmIChjb250ZXh0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICAgIG9wdGlvbnMuaWRzID0gW29wdGlvbnMubmFtZV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG5cdCAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2VhY2gnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKCFvcHRpb25zKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gb3B0aW9ucy5mbixcblx0ICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuXHQgICAgICAgIGkgPSAwLFxuXHQgICAgICAgIHJldCA9ICcnLFxuXHQgICAgICAgIGRhdGEgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY29udGV4dFBhdGggPSB1bmRlZmluZWQ7XG5cblx0ICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcblx0ICAgICAgY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG5cdCAgICB9XG5cblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuXHQgICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG5cdCAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcblx0ICAgICAgaWYgKGRhdGEpIHtcblx0ICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuXHQgICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcblx0ICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG5cdCAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG5cdCAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG5cdCAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuXHQgICAgICAgIGRhdGE6IGRhdGEsXG5cdCAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuXHQgICAgICAgIGZvciAodmFyIGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuXHQgICAgICAgICAgaWYgKGkgaW4gY29udGV4dCkge1xuXHQgICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhciBwcmlvcktleSA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgIGZvciAodmFyIGtleSBpbiBjb250ZXh0KSB7XG5cdCAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdCAgICAgICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgdGhlIGl0ZXJhdGlvbnMgb25lIHN0ZXAgb3V0IG9mIHN5bmMgc28gd2UgY2FuIGRldGVjdFxuXHQgICAgICAgICAgICAvLyB0aGUgbGFzdCBpdGVyYXRpb24gd2l0aG91dCBoYXZlIHRvIHNjYW4gdGhlIG9iamVjdCB0d2ljZSBhbmQgY3JlYXRlXG5cdCAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG5cdCAgICAgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHByaW9yS2V5ID0ga2V5O1xuXHQgICAgICAgICAgICBpKys7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmIChpID09PSAwKSB7XG5cdCAgICAgIHJldCA9IGludmVyc2UodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaGVscGVyTWlzc2luZycsIGZ1bmN0aW9uICgpIC8qIFthcmdzLCBdb3B0aW9ucyAqL3tcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdCAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3RydWN0LlxuXHQgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHtcblx0ICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG5cdCAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuXHQgICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cblx0ICAgIGlmICghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCB8fCBfdXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuXHQgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwgeyBmbjogb3B0aW9ucy5pbnZlcnNlLCBpbnZlcnNlOiBvcHRpb25zLmZuLCBoYXNoOiBvcHRpb25zLmhhc2ggfSk7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24gKCkgLyogbWVzc2FnZSwgb3B0aW9ucyAqL3tcblx0ICAgIHZhciBhcmdzID0gW3VuZGVmaW5lZF0sXG5cdCAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0ICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBsZXZlbCA9IDE7XG5cdCAgICBpZiAob3B0aW9ucy5oYXNoLmxldmVsICE9IG51bGwpIHtcblx0ICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG5cdCAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuXHQgICAgICBsZXZlbCA9IG9wdGlvbnMuZGF0YS5sZXZlbDtcblx0ICAgIH1cblx0ICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuXHQgICAgaW5zdGFuY2UubG9nLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbiAob2JqLCBmaWVsZCkge1xuXHQgICAgcmV0dXJuIG9iaiAmJiBvYmpbZmllbGRdO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG5cdCAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cblx0ICAgIGlmICghX3V0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcblx0ICAgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cdCAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG5cdCAgICAgICAgZGF0YTogZGF0YSxcblx0ICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0XSwgW2RhdGEgJiYgZGF0YS5jb250ZXh0UGF0aF0pXG5cdCAgICAgIH0pO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgPSByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzO1xuXG5cdHZhciBfZGVjb3JhdG9yc0lubGluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG5cdHZhciBfZGVjb3JhdG9yc0lubGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNvcmF0b3JzSW5saW5lKTtcblxuXHRmdW5jdGlvbiByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKGluc3RhbmNlKSB7XG5cdCAgX2RlY29yYXRvcnNJbmxpbmUyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckRlY29yYXRvcignaW5saW5lJywgZnVuY3Rpb24gKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG5cdCAgICB2YXIgcmV0ID0gZm47XG5cdCAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG5cdCAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG5cdCAgICAgIHJldCA9IGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcnRpYWxzIHN0YWNrIGZyYW1lIHByaW9yIHRvIGV4ZWMuXG5cdCAgICAgICAgdmFyIG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuXHQgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IF91dGlscy5leHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG5cdCAgICAgICAgdmFyIHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9yaWdpbmFsO1xuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgIH07XG5cdCAgICB9XG5cblx0ICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIGxvZ2dlciA9IHtcblx0ICBtZXRob2RNYXA6IFsnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ10sXG5cdCAgbGV2ZWw6ICdpbmZvJyxcblxuXHQgIC8vIE1hcHMgYSBnaXZlbiBsZXZlbCB2YWx1ZSB0byB0aGUgYG1ldGhvZE1hcGAgaW5kZXhlcyBhYm92ZS5cblx0ICBsb29rdXBMZXZlbDogZnVuY3Rpb24gbG9va3VwTGV2ZWwobGV2ZWwpIHtcblx0ICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIHZhciBsZXZlbE1hcCA9IF91dGlscy5pbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuXHQgICAgICBpZiAobGV2ZWxNYXAgPj0gMCkge1xuXHQgICAgICAgIGxldmVsID0gbGV2ZWxNYXA7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgbGV2ZWwgPSBwYXJzZUludChsZXZlbCwgMTApO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBsZXZlbDtcblx0ICB9LFxuXG5cdCAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcblx0ICBsb2c6IGZ1bmN0aW9uIGxvZyhsZXZlbCkge1xuXHQgICAgbGV2ZWwgPSBsb2dnZXIubG9va3VwTGV2ZWwobGV2ZWwpO1xuXG5cdCAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGxvZ2dlci5sb29rdXBMZXZlbChsb2dnZXIubGV2ZWwpIDw9IGxldmVsKSB7XG5cdCAgICAgIHZhciBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcblx0ICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcblx0ICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0ICAgICAgICBtZXRob2QgPSAnbG9nJztcblx0ICAgICAgfVxuXG5cdCAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgICAgIG1lc3NhZ2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgICB9XG5cblx0ICAgICAgY29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gbG9nZ2VyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIEJ1aWxkIG91dCBvdXIgYmFzaWMgU2FmZVN0cmluZyB0eXBlXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRmdW5jdGlvbiBTYWZlU3RyaW5nKHN0cmluZykge1xuXHQgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuXHR9XG5cblx0U2FmZVN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcgPSBTYWZlU3RyaW5nLnByb3RvdHlwZS50b0hUTUwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XG5cdH07XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU2FmZVN0cmluZztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3Qkc2VhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuY2hlY2tSZXZpc2lvbiA9IGNoZWNrUmV2aXNpb247XG5cdGV4cG9ydHMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0ZXhwb3J0cy53cmFwUHJvZ3JhbSA9IHdyYXBQcm9ncmFtO1xuXHRleHBvcnRzLnJlc29sdmVQYXJ0aWFsID0gcmVzb2x2ZVBhcnRpYWw7XG5cdGV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7XG5cdGV4cG9ydHMubm9vcCA9IG5vb3A7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHR2YXIgX2Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG5cdCAgdmFyIGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG5cdCAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OO1xuXG5cdCAgaWYgKGNvbXBpbGVyUmV2aXNpb24gIT09IGN1cnJlbnRSZXZpc2lvbikge1xuXHQgICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcblx0ICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcblx0ICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIGlmICghZW52KSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG5cdCAgfVxuXHQgIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG5cdCAgfVxuXG5cdCAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuXHQgIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG5cdCAgLy8gZm9yIGV4dGVybmFsIHVzZXJzIHRvIG92ZXJyaWRlIHRoZXNlIGFzIHBzdWVkby1zdXBwb3J0ZWQgQVBJcy5cblx0ICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG5cdCAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKG9wdGlvbnMuaGFzaCkge1xuXHQgICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuXHQgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICBvcHRpb25zLmlkc1swXSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgdmFyIHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0ICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuXHQgICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuXHQgICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB9XG5cdCAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcblx0ICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG5cdCAgICAgICAgdmFyIGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvLyBKdXN0IGFkZCB3YXRlclxuXHQgIHZhciBjb250YWluZXIgPSB7XG5cdCAgICBzdHJpY3Q6IGZ1bmN0aW9uIHN0cmljdChvYmosIG5hbWUpIHtcblx0ICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG9ialtuYW1lXTtcblx0ICAgIH0sXG5cdCAgICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChkZXB0aHMsIG5hbWUpIHtcblx0ICAgICAgdmFyIGxlbiA9IGRlcHRocy5sZW5ndGg7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG5cdCAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGxhbWJkYTogZnVuY3Rpb24gbGFtYmRhKGN1cnJlbnQsIGNvbnRleHQpIHtcblx0ICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcblx0ICAgIH0sXG5cblx0ICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG5cdCAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuXHQgICAgZm46IGZ1bmN0aW9uIGZuKGkpIHtcblx0ICAgICAgdmFyIHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcblx0ICAgICAgcmV0LmRlY29yYXRvciA9IHRlbXBsYXRlU3BlY1tpICsgJ19kJ107XG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9LFxuXG5cdCAgICBwcm9ncmFtczogW10sXG5cdCAgICBwcm9ncmFtOiBmdW5jdGlvbiBwcm9ncmFtKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICAgICAgdmFyIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSxcblx0ICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcblx0ICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcblx0ICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuXHQgICAgfSxcblxuXHQgICAgZGF0YTogZnVuY3Rpb24gZGF0YSh2YWx1ZSwgZGVwdGgpIHtcblx0ICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgfSxcblx0ICAgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShwYXJhbSwgY29tbW9uKSB7XG5cdCAgICAgIHZhciBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cblx0ICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG5cdCAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBvYmo7XG5cdCAgICB9LFxuXHQgICAgLy8gQW4gZW1wdHkgb2JqZWN0IHRvIHVzZSBhcyByZXBsYWNlbWVudCBmb3IgbnVsbC1jb250ZXh0c1xuXHQgICAgbnVsbENvbnRleHQ6IF9PYmplY3Qkc2VhbCh7fSksXG5cblx0ICAgIG5vb3A6IGVudi5WTS5ub29wLFxuXHQgICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcblx0ICB9O1xuXG5cdCAgZnVuY3Rpb24gcmV0KGNvbnRleHQpIHtcblx0ICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG5cdCAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuXHQgICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcblx0ICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuXHQgICAgfVxuXHQgICAgdmFyIGRlcHRocyA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG5cdCAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG5cdCAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICB9XG5cdCAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcblx0ICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgIH1cblx0ICByZXQuaXNUb3AgPSB0cnVlO1xuXG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuXHQgICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuXHQgICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcblx0ICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmRlY29yYXRvcnMsIGVudi5kZWNvcmF0b3JzKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG5cdCAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG5cdCAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG5cdCAgICB9XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgIH07XG5cdCAgcmV0dXJuIHJldDtcblx0fVxuXG5cdGZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICBmdW5jdGlvbiBwcm9nKGNvbnRleHQpIHtcblx0ICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgIHZhciBjdXJyZW50RGVwdGhzID0gZGVwdGhzO1xuXHQgICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG5cdCAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBmbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIG9wdGlvbnMuZGF0YSB8fCBkYXRhLCBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSwgY3VycmVudERlcHRocyk7XG5cdCAgfVxuXG5cdCAgcHJvZyA9IGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXG5cdCAgcHJvZy5wcm9ncmFtID0gaTtcblx0ICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG5cdCAgcHJvZy5ibG9ja1BhcmFtcyA9IGRlY2xhcmVkQmxvY2tQYXJhbXMgfHwgMDtcblx0ICByZXR1cm4gcHJvZztcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICBpZiAoIXBhcnRpYWwpIHtcblx0ICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcblx0ICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXTtcblx0ICAgIH1cblx0ICB9IGVsc2UgaWYgKCFwYXJ0aWFsLmNhbGwgJiYgIW9wdGlvbnMubmFtZSkge1xuXHQgICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG5cdCAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuXHQgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbcGFydGlhbF07XG5cdCAgfVxuXHQgIHJldHVybiBwYXJ0aWFsO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuXHQgIHZhciBjdXJyZW50UGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuXHQgIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG5cdCAgaWYgKG9wdGlvbnMuaWRzKSB7XG5cdCAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG5cdCAgfVxuXG5cdCAgdmFyIHBhcnRpYWxCbG9jayA9IHVuZGVmaW5lZDtcblx0ICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXG5cdCAgICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cdCAgICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gZnVuY3Rpb24gcGFydGlhbEJsb2NrV3JhcHBlcihjb250ZXh0KSB7XG5cdCAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgICAgIC8vIFJlc3RvcmUgdGhlIHBhcnRpYWwtYmxvY2sgZnJvbSB0aGUgY2xvc3VyZSBmb3IgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgYmxvY2tcblx0ICAgICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cblx0ICAgICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAgIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gY3VycmVudFBhcnRpYWxCbG9jaztcblx0ICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICAgIH07XG5cdCAgICAgIGlmIChmbi5wYXJ0aWFscykge1xuXHQgICAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcblx0ICAgICAgfVxuXHQgICAgfSkoKTtcblx0ICB9XG5cblx0ICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuXHQgICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcblx0ICB9XG5cblx0ICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG5cdCAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0ICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIG5vb3AoKSB7XG5cdCAgcmV0dXJuICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuXHQgIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuXHQgICAgZGF0YSA9IGRhdGEgPyBfYmFzZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuXHQgICAgZGF0YS5yb290ID0gY29udGV4dDtcblx0ICB9XG5cdCAgcmV0dXJuIGRhdGE7XG5cdH1cblxuXHRmdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG5cdCAgaWYgKGZuLmRlY29yYXRvcikge1xuXHQgICAgdmFyIHByb3BzID0ge307XG5cdCAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcblx0ICB9XG5cdCAgcmV0dXJuIHByb2c7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXygyNCksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzApLk9iamVjdC5zZWFsO1xuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjcpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcblx0ICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChpdCkgOiBpdDtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgY29yZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBmYWlscyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcblx0ICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG5cdCAgICAsIGV4cCA9IHt9O1xuXHQgIGV4cFtLRVldID0gZXhlYyhmbik7XG5cdCAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDI4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpXG5cdCAgLCBjb3JlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgY3R4ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSlcblx0ICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG5cdHZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcblx0ICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuXHQgICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG5cdCAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcblx0ICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuXHQgICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG5cdCAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0Lldcblx0ICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcblx0ICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuXHQgICAgLCBrZXksIG93biwgb3V0O1xuXHQgIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuXHQgIGZvcihrZXkgaW4gc291cmNlKXtcblx0ICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuXHQgICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcblx0ICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcblx0ICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG5cdCAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuXHQgICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG5cdCAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuXHQgICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcblx0ICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG5cdCAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuXHQgICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcblx0ICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG5cdCAgICAgIH07XG5cdCAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcblx0ICAgICAgcmV0dXJuIEY7XG5cdCAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcblx0ICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcblx0ICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcblx0ICB9XG5cdH07XG5cdC8vIHR5cGUgYml0bWFwXG5cdCRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcblx0JGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuXHQkZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG5cdCRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuXHQkZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuXHQkZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxuXHRtb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuXHR2YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcblx0ICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdGlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0pLFxuLyogMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuXHRpZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSksXG4vKiAzMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xuXHR2YXIgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG5cdCAgYUZ1bmN0aW9uKGZuKTtcblx0ICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuXHQgIHN3aXRjaChsZW5ndGgpe1xuXHQgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG5cdCAgICB9O1xuXHQgIH1cblx0ICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG5cdCAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDMyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gISFleGVjKCk7XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSksXG4vKiAzNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvKiBnbG9iYWwgd2luZG93ICovXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuXHQgICAgICAkSGFuZGxlYmFycyA9IHJvb3QuSGFuZGxlYmFycztcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcblx0ICAgICAgcm9vdC5IYW5kbGViYXJzID0gJEhhbmRsZWJhcnM7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gSGFuZGxlYmFycztcblx0ICB9O1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0pLFxuLyogMzUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0dmFyIEFTVCA9IHtcblx0ICAvLyBQdWJsaWMgQVBJIHVzZWQgdG8gZXZhbHVhdGUgZGVyaXZlZCBhdHRyaWJ1dGVzIHJlZ2FyZGluZyBBU1Qgbm9kZXNcblx0ICBoZWxwZXJzOiB7XG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGRlZmluaXRlbHkgYSBoZWxwZXIgaWY6XG5cdCAgICAvLyAqIGl0IGlzIGFuIGVsaWdpYmxlIGhlbHBlciwgYW5kXG5cdCAgICAvLyAqIGl0IGhhcyBhdCBsZWFzdCBvbmUgcGFyYW1ldGVyIG9yIGhhc2ggc2VnbWVudFxuXHQgICAgaGVscGVyRXhwcmVzc2lvbjogZnVuY3Rpb24gaGVscGVyRXhwcmVzc2lvbihub2RlKSB7XG5cdCAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJyB8fCAobm9kZS50eXBlID09PSAnTXVzdGFjaGVTdGF0ZW1lbnQnIHx8IG5vZGUudHlwZSA9PT0gJ0Jsb2NrU3RhdGVtZW50JykgJiYgISEobm9kZS5wYXJhbXMgJiYgbm9kZS5wYXJhbXMubGVuZ3RoIHx8IG5vZGUuaGFzaCk7XG5cdCAgICB9LFxuXG5cdCAgICBzY29wZWRJZDogZnVuY3Rpb24gc2NvcGVkSWQocGF0aCkge1xuXHQgICAgICByZXR1cm4gKC9eXFwufHRoaXNcXGIvLnRlc3QocGF0aC5vcmlnaW5hbClcblx0ICAgICAgKTtcblx0ICAgIH0sXG5cblx0ICAgIC8vIGFuIElEIGlzIHNpbXBsZSBpZiBpdCBvbmx5IGhhcyBvbmUgcGFydCwgYW5kIHRoYXQgcGFydCBpcyBub3Rcblx0ICAgIC8vIGAuLmAgb3IgYHRoaXNgLlxuXHQgICAgc2ltcGxlSWQ6IGZ1bmN0aW9uIHNpbXBsZUlkKHBhdGgpIHtcblx0ICAgICAgcmV0dXJuIHBhdGgucGFydHMubGVuZ3RoID09PSAxICYmICFBU1QuaGVscGVycy5zY29wZWRJZChwYXRoKSAmJiAhcGF0aC5kZXB0aDtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0Ly8gTXVzdCBiZSBleHBvcnRlZCBhcyBhbiBvYmplY3QgcmF0aGVyIHRoYW4gdGhlIHJvb3Qgb2YgdGhlIG1vZHVsZSBhcyB0aGUgamlzb24gbGV4ZXJcblx0Ly8gbXVzdCBtb2RpZnkgdGhlIG9iamVjdCB0byBvcGVyYXRlIHByb3Blcmx5LlxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBU1Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDM2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cblx0dmFyIF9wYXJzZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblxuXHR2YXIgX3BhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZXIpO1xuXG5cdHZhciBfd2hpdGVzcGFjZUNvbnRyb2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcblxuXHR2YXIgX3doaXRlc3BhY2VDb250cm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3doaXRlc3BhY2VDb250cm9sKTtcblxuXHR2YXIgX2hlbHBlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcblxuXHR2YXIgSGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzLnBhcnNlciA9IF9wYXJzZXIyWydkZWZhdWx0J107XG5cblx0dmFyIHl5ID0ge307XG5cdF91dGlscy5leHRlbmQoeXksIEhlbHBlcnMpO1xuXG5cdGZ1bmN0aW9uIHBhcnNlKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgLy8gSnVzdCByZXR1cm4gaWYgYW4gYWxyZWFkeS1jb21waWxlZCBBU1Qgd2FzIHBhc3NlZCBpbi5cblx0ICBpZiAoaW5wdXQudHlwZSA9PT0gJ1Byb2dyYW0nKSB7XG5cdCAgICByZXR1cm4gaW5wdXQ7XG5cdCAgfVxuXG5cdCAgX3BhcnNlcjJbJ2RlZmF1bHQnXS55eSA9IHl5O1xuXG5cdCAgLy8gQWx0ZXJpbmcgdGhlIHNoYXJlZCBvYmplY3QgaGVyZSwgYnV0IHRoaXMgaXMgb2sgYXMgcGFyc2VyIGlzIGEgc3luYyBvcGVyYXRpb25cblx0ICB5eS5sb2NJbmZvID0gZnVuY3Rpb24gKGxvY0luZm8pIHtcblx0ICAgIHJldHVybiBuZXcgeXkuU291cmNlTG9jYXRpb24ob3B0aW9ucyAmJiBvcHRpb25zLnNyY05hbWUsIGxvY0luZm8pO1xuXHQgIH07XG5cblx0ICB2YXIgc3RyaXAgPSBuZXcgX3doaXRlc3BhY2VDb250cm9sMlsnZGVmYXVsdCddKG9wdGlvbnMpO1xuXHQgIHJldHVybiBzdHJpcC5hY2NlcHQoX3BhcnNlcjJbJ2RlZmF1bHQnXS5wYXJzZShpbnB1dCkpO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMzcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBGaWxlIGlnbm9yZWQgaW4gY292ZXJhZ2UgdGVzdHMgdmlhIHNldHRpbmcgaW4gLmlzdGFuYnVsLnltbFxuXHQvKiBKaXNvbiBnZW5lcmF0ZWQgcGFyc2VyICovXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdHZhciBoYW5kbGViYXJzID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBwYXJzZXIgPSB7IHRyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHt9LFxuXHQgICAgICAgIHl5OiB7fSxcblx0ICAgICAgICBzeW1ib2xzXzogeyBcImVycm9yXCI6IDIsIFwicm9vdFwiOiAzLCBcInByb2dyYW1cIjogNCwgXCJFT0ZcIjogNSwgXCJwcm9ncmFtX3JlcGV0aXRpb24wXCI6IDYsIFwic3RhdGVtZW50XCI6IDcsIFwibXVzdGFjaGVcIjogOCwgXCJibG9ja1wiOiA5LCBcInJhd0Jsb2NrXCI6IDEwLCBcInBhcnRpYWxcIjogMTEsIFwicGFydGlhbEJsb2NrXCI6IDEyLCBcImNvbnRlbnRcIjogMTMsIFwiQ09NTUVOVFwiOiAxNCwgXCJDT05URU5UXCI6IDE1LCBcIm9wZW5SYXdCbG9ja1wiOiAxNiwgXCJyYXdCbG9ja19yZXBldGl0aW9uX3BsdXMwXCI6IDE3LCBcIkVORF9SQVdfQkxPQ0tcIjogMTgsIFwiT1BFTl9SQVdfQkxPQ0tcIjogMTksIFwiaGVscGVyTmFtZVwiOiAyMCwgXCJvcGVuUmF3QmxvY2tfcmVwZXRpdGlvbjBcIjogMjEsIFwib3BlblJhd0Jsb2NrX29wdGlvbjBcIjogMjIsIFwiQ0xPU0VfUkFXX0JMT0NLXCI6IDIzLCBcIm9wZW5CbG9ja1wiOiAyNCwgXCJibG9ja19vcHRpb24wXCI6IDI1LCBcImNsb3NlQmxvY2tcIjogMjYsIFwib3BlbkludmVyc2VcIjogMjcsIFwiYmxvY2tfb3B0aW9uMVwiOiAyOCwgXCJPUEVOX0JMT0NLXCI6IDI5LCBcIm9wZW5CbG9ja19yZXBldGl0aW9uMFwiOiAzMCwgXCJvcGVuQmxvY2tfb3B0aW9uMFwiOiAzMSwgXCJvcGVuQmxvY2tfb3B0aW9uMVwiOiAzMiwgXCJDTE9TRVwiOiAzMywgXCJPUEVOX0lOVkVSU0VcIjogMzQsIFwib3BlbkludmVyc2VfcmVwZXRpdGlvbjBcIjogMzUsIFwib3BlbkludmVyc2Vfb3B0aW9uMFwiOiAzNiwgXCJvcGVuSW52ZXJzZV9vcHRpb24xXCI6IDM3LCBcIm9wZW5JbnZlcnNlQ2hhaW5cIjogMzgsIFwiT1BFTl9JTlZFUlNFX0NIQUlOXCI6IDM5LCBcIm9wZW5JbnZlcnNlQ2hhaW5fcmVwZXRpdGlvbjBcIjogNDAsIFwib3BlbkludmVyc2VDaGFpbl9vcHRpb24wXCI6IDQxLCBcIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMVwiOiA0MiwgXCJpbnZlcnNlQW5kUHJvZ3JhbVwiOiA0MywgXCJJTlZFUlNFXCI6IDQ0LCBcImludmVyc2VDaGFpblwiOiA0NSwgXCJpbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOiA0NiwgXCJPUEVOX0VOREJMT0NLXCI6IDQ3LCBcIk9QRU5cIjogNDgsIFwibXVzdGFjaGVfcmVwZXRpdGlvbjBcIjogNDksIFwibXVzdGFjaGVfb3B0aW9uMFwiOiA1MCwgXCJPUEVOX1VORVNDQVBFRFwiOiA1MSwgXCJtdXN0YWNoZV9yZXBldGl0aW9uMVwiOiA1MiwgXCJtdXN0YWNoZV9vcHRpb24xXCI6IDUzLCBcIkNMT1NFX1VORVNDQVBFRFwiOiA1NCwgXCJPUEVOX1BBUlRJQUxcIjogNTUsIFwicGFydGlhbE5hbWVcIjogNTYsIFwicGFydGlhbF9yZXBldGl0aW9uMFwiOiA1NywgXCJwYXJ0aWFsX29wdGlvbjBcIjogNTgsIFwib3BlblBhcnRpYWxCbG9ja1wiOiA1OSwgXCJPUEVOX1BBUlRJQUxfQkxPQ0tcIjogNjAsIFwib3BlblBhcnRpYWxCbG9ja19yZXBldGl0aW9uMFwiOiA2MSwgXCJvcGVuUGFydGlhbEJsb2NrX29wdGlvbjBcIjogNjIsIFwicGFyYW1cIjogNjMsIFwic2V4cHJcIjogNjQsIFwiT1BFTl9TRVhQUlwiOiA2NSwgXCJzZXhwcl9yZXBldGl0aW9uMFwiOiA2NiwgXCJzZXhwcl9vcHRpb24wXCI6IDY3LCBcIkNMT1NFX1NFWFBSXCI6IDY4LCBcImhhc2hcIjogNjksIFwiaGFzaF9yZXBldGl0aW9uX3BsdXMwXCI6IDcwLCBcImhhc2hTZWdtZW50XCI6IDcxLCBcIklEXCI6IDcyLCBcIkVRVUFMU1wiOiA3MywgXCJibG9ja1BhcmFtc1wiOiA3NCwgXCJPUEVOX0JMT0NLX1BBUkFNU1wiOiA3NSwgXCJibG9ja1BhcmFtc19yZXBldGl0aW9uX3BsdXMwXCI6IDc2LCBcIkNMT1NFX0JMT0NLX1BBUkFNU1wiOiA3NywgXCJwYXRoXCI6IDc4LCBcImRhdGFOYW1lXCI6IDc5LCBcIlNUUklOR1wiOiA4MCwgXCJOVU1CRVJcIjogODEsIFwiQk9PTEVBTlwiOiA4MiwgXCJVTkRFRklORURcIjogODMsIFwiTlVMTFwiOiA4NCwgXCJEQVRBXCI6IDg1LCBcInBhdGhTZWdtZW50c1wiOiA4NiwgXCJTRVBcIjogODcsIFwiJGFjY2VwdFwiOiAwLCBcIiRlbmRcIjogMSB9LFxuXHQgICAgICAgIHRlcm1pbmFsc186IHsgMjogXCJlcnJvclwiLCA1OiBcIkVPRlwiLCAxNDogXCJDT01NRU5UXCIsIDE1OiBcIkNPTlRFTlRcIiwgMTg6IFwiRU5EX1JBV19CTE9DS1wiLCAxOTogXCJPUEVOX1JBV19CTE9DS1wiLCAyMzogXCJDTE9TRV9SQVdfQkxPQ0tcIiwgMjk6IFwiT1BFTl9CTE9DS1wiLCAzMzogXCJDTE9TRVwiLCAzNDogXCJPUEVOX0lOVkVSU0VcIiwgMzk6IFwiT1BFTl9JTlZFUlNFX0NIQUlOXCIsIDQ0OiBcIklOVkVSU0VcIiwgNDc6IFwiT1BFTl9FTkRCTE9DS1wiLCA0ODogXCJPUEVOXCIsIDUxOiBcIk9QRU5fVU5FU0NBUEVEXCIsIDU0OiBcIkNMT1NFX1VORVNDQVBFRFwiLCA1NTogXCJPUEVOX1BBUlRJQUxcIiwgNjA6IFwiT1BFTl9QQVJUSUFMX0JMT0NLXCIsIDY1OiBcIk9QRU5fU0VYUFJcIiwgNjg6IFwiQ0xPU0VfU0VYUFJcIiwgNzI6IFwiSURcIiwgNzM6IFwiRVFVQUxTXCIsIDc1OiBcIk9QRU5fQkxPQ0tfUEFSQU1TXCIsIDc3OiBcIkNMT1NFX0JMT0NLX1BBUkFNU1wiLCA4MDogXCJTVFJJTkdcIiwgODE6IFwiTlVNQkVSXCIsIDgyOiBcIkJPT0xFQU5cIiwgODM6IFwiVU5ERUZJTkVEXCIsIDg0OiBcIk5VTExcIiwgODU6IFwiREFUQVwiLCA4NzogXCJTRVBcIiB9LFxuXHQgICAgICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAyXSwgWzQsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFsxMywgMV0sIFsxMCwgM10sIFsxNiwgNV0sIFs5LCA0XSwgWzksIDRdLCBbMjQsIDZdLCBbMjcsIDZdLCBbMzgsIDZdLCBbNDMsIDJdLCBbNDUsIDNdLCBbNDUsIDFdLCBbMjYsIDNdLCBbOCwgNV0sIFs4LCA1XSwgWzExLCA1XSwgWzEyLCAzXSwgWzU5LCA1XSwgWzYzLCAxXSwgWzYzLCAxXSwgWzY0LCA1XSwgWzY5LCAxXSwgWzcxLCAzXSwgWzc0LCAzXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzU2LCAxXSwgWzU2LCAxXSwgWzc5LCAyXSwgWzc4LCAxXSwgWzg2LCAzXSwgWzg2LCAxXSwgWzYsIDBdLCBbNiwgMl0sIFsxNywgMV0sIFsxNywgMl0sIFsyMSwgMF0sIFsyMSwgMl0sIFsyMiwgMF0sIFsyMiwgMV0sIFsyNSwgMF0sIFsyNSwgMV0sIFsyOCwgMF0sIFsyOCwgMV0sIFszMCwgMF0sIFszMCwgMl0sIFszMSwgMF0sIFszMSwgMV0sIFszMiwgMF0sIFszMiwgMV0sIFszNSwgMF0sIFszNSwgMl0sIFszNiwgMF0sIFszNiwgMV0sIFszNywgMF0sIFszNywgMV0sIFs0MCwgMF0sIFs0MCwgMl0sIFs0MSwgMF0sIFs0MSwgMV0sIFs0MiwgMF0sIFs0MiwgMV0sIFs0NiwgMF0sIFs0NiwgMV0sIFs0OSwgMF0sIFs0OSwgMl0sIFs1MCwgMF0sIFs1MCwgMV0sIFs1MiwgMF0sIFs1MiwgMl0sIFs1MywgMF0sIFs1MywgMV0sIFs1NywgMF0sIFs1NywgMl0sIFs1OCwgMF0sIFs1OCwgMV0sIFs2MSwgMF0sIFs2MSwgMl0sIFs2MiwgMF0sIFs2MiwgMV0sIFs2NiwgMF0sIFs2NiwgMl0sIFs2NywgMF0sIFs2NywgMV0sIFs3MCwgMV0sIFs3MCwgMl0sIFs3NiwgMV0sIFs3NiwgMl1dLFxuXHQgICAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHl5LCB5eXN0YXRlLCAkJCwgXyQpIHtcblxuXHQgICAgICAgICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCRbJDAgLSAxXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUHJvZ3JhbSgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NvbW1lbnRTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeXkuc3RyaXBDb21tZW50KCQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwXSwgJCRbJDBdKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb250ZW50U3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUmF3QmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDNdLCBwYXJhbXM6ICQkWyQwIC0gMl0sIGhhc2g6ICQkWyQwIC0gMV0gfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0cnVlLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBvcGVuOiAkJFskMCAtIDVdLCBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDFdLCAkJFskMCAtIDFdKSwgcHJvZ3JhbTogJCRbJDBdIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE5OlxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgJCRbJDBdLCBmYWxzZSwgdGhpcy5fJCksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0gPSB5eS5wcmVwYXJlUHJvZ3JhbShbaW52ZXJzZV0sICQkWyQwIC0gMV0ubG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLmNoYWluZWQgPSB0cnVlO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogJCRbJDAgLSAyXS5zdHJpcCwgcHJvZ3JhbTogcHJvZ3JhbSwgY2hhaW46IHRydWUgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAyXSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlTXVzdGFjaGUoJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDAgLSA0XSwgeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BhcnRpYWxTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAkJFskMCAtIDNdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6ICQkWyQwIC0gMV0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudDogJycsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhcnRpYWxCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gM10sIHBhcmFtczogJCRbJDAgLSAyXSwgaGFzaDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU3ViRXhwcmVzc2lvbicsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICQkWyQwIC0gM10sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogJCRbJDAgLSAyXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogJCRbJDAgLSAxXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdIYXNoJywgcGFpcnM6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0hhc2hQYWlyJywga2V5OiB5eS5pZCgkJFskMCAtIDJdKSwgdmFsdWU6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LmlkKCQkWyQwIC0gMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnU3RyaW5nTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0sIG9yaWdpbmFsOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdW1iZXJMaXRlcmFsJywgdmFsdWU6IE51bWJlcigkJFskMF0pLCBvcmlnaW5hbDogTnVtYmVyKCQkWyQwXSksIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdCb29sZWFuTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0gPT09ICd0cnVlJywgb3JpZ2luYWw6ICQkWyQwXSA9PT0gJ3RydWUnLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnVW5kZWZpbmVkTGl0ZXJhbCcsIG9yaWdpbmFsOiB1bmRlZmluZWQsIHZhbHVlOiB1bmRlZmluZWQsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdWxsTGl0ZXJhbCcsIG9yaWdpbmFsOiBudWxsLCB2YWx1ZTogbnVsbCwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aCh0cnVlLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aChmYWxzZSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAyXS5wdXNoKHsgcGFydDogeXkuaWQoJCRbJDBdKSwgb3JpZ2luYWw6ICQkWyQwXSwgc2VwYXJhdG9yOiAkJFskMCAtIDFdIH0pO3RoaXMuJCA9ICQkWyQwIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFt7IHBhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0gfV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Nzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDgzOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Njpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODc6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDkwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5MTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTAxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICB0YWJsZTogW3sgMzogMSwgNDogMiwgNTogWzIsIDQ2XSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDE6IFszXSB9LCB7IDU6IFsxLCA0XSB9LCB7IDU6IFsyLCAyXSwgNzogNSwgODogNiwgOTogNywgMTA6IDgsIDExOiA5LCAxMjogMTAsIDEzOiAxMSwgMTQ6IFsxLCAxMl0sIDE1OiBbMSwgMjBdLCAxNjogMTcsIDE5OiBbMSwgMjNdLCAyNDogMTUsIDI3OiAxNiwgMjk6IFsxLCAyMV0sIDM0OiBbMSwgMjJdLCAzOTogWzIsIDJdLCA0NDogWzIsIDJdLCA0NzogWzIsIDJdLCA0ODogWzEsIDEzXSwgNTE6IFsxLCAxNF0sIDU1OiBbMSwgMThdLCA1OTogMTksIDYwOiBbMSwgMjRdIH0sIHsgMTogWzIsIDFdIH0sIHsgNTogWzIsIDQ3XSwgMTQ6IFsyLCA0N10sIDE1OiBbMiwgNDddLCAxOTogWzIsIDQ3XSwgMjk6IFsyLCA0N10sIDM0OiBbMiwgNDddLCAzOTogWzIsIDQ3XSwgNDQ6IFsyLCA0N10sIDQ3OiBbMiwgNDddLCA0ODogWzIsIDQ3XSwgNTE6IFsyLCA0N10sIDU1OiBbMiwgNDddLCA2MDogWzIsIDQ3XSB9LCB7IDU6IFsyLCAzXSwgMTQ6IFsyLCAzXSwgMTU6IFsyLCAzXSwgMTk6IFsyLCAzXSwgMjk6IFsyLCAzXSwgMzQ6IFsyLCAzXSwgMzk6IFsyLCAzXSwgNDQ6IFsyLCAzXSwgNDc6IFsyLCAzXSwgNDg6IFsyLCAzXSwgNTE6IFsyLCAzXSwgNTU6IFsyLCAzXSwgNjA6IFsyLCAzXSB9LCB7IDU6IFsyLCA0XSwgMTQ6IFsyLCA0XSwgMTU6IFsyLCA0XSwgMTk6IFsyLCA0XSwgMjk6IFsyLCA0XSwgMzQ6IFsyLCA0XSwgMzk6IFsyLCA0XSwgNDQ6IFsyLCA0XSwgNDc6IFsyLCA0XSwgNDg6IFsyLCA0XSwgNTE6IFsyLCA0XSwgNTU6IFsyLCA0XSwgNjA6IFsyLCA0XSB9LCB7IDU6IFsyLCA1XSwgMTQ6IFsyLCA1XSwgMTU6IFsyLCA1XSwgMTk6IFsyLCA1XSwgMjk6IFsyLCA1XSwgMzQ6IFsyLCA1XSwgMzk6IFsyLCA1XSwgNDQ6IFsyLCA1XSwgNDc6IFsyLCA1XSwgNDg6IFsyLCA1XSwgNTE6IFsyLCA1XSwgNTU6IFsyLCA1XSwgNjA6IFsyLCA1XSB9LCB7IDU6IFsyLCA2XSwgMTQ6IFsyLCA2XSwgMTU6IFsyLCA2XSwgMTk6IFsyLCA2XSwgMjk6IFsyLCA2XSwgMzQ6IFsyLCA2XSwgMzk6IFsyLCA2XSwgNDQ6IFsyLCA2XSwgNDc6IFsyLCA2XSwgNDg6IFsyLCA2XSwgNTE6IFsyLCA2XSwgNTU6IFsyLCA2XSwgNjA6IFsyLCA2XSB9LCB7IDU6IFsyLCA3XSwgMTQ6IFsyLCA3XSwgMTU6IFsyLCA3XSwgMTk6IFsyLCA3XSwgMjk6IFsyLCA3XSwgMzQ6IFsyLCA3XSwgMzk6IFsyLCA3XSwgNDQ6IFsyLCA3XSwgNDc6IFsyLCA3XSwgNDg6IFsyLCA3XSwgNTE6IFsyLCA3XSwgNTU6IFsyLCA3XSwgNjA6IFsyLCA3XSB9LCB7IDU6IFsyLCA4XSwgMTQ6IFsyLCA4XSwgMTU6IFsyLCA4XSwgMTk6IFsyLCA4XSwgMjk6IFsyLCA4XSwgMzQ6IFsyLCA4XSwgMzk6IFsyLCA4XSwgNDQ6IFsyLCA4XSwgNDc6IFsyLCA4XSwgNDg6IFsyLCA4XSwgNTE6IFsyLCA4XSwgNTU6IFsyLCA4XSwgNjA6IFsyLCA4XSB9LCB7IDU6IFsyLCA5XSwgMTQ6IFsyLCA5XSwgMTU6IFsyLCA5XSwgMTk6IFsyLCA5XSwgMjk6IFsyLCA5XSwgMzQ6IFsyLCA5XSwgMzk6IFsyLCA5XSwgNDQ6IFsyLCA5XSwgNDc6IFsyLCA5XSwgNDg6IFsyLCA5XSwgNTE6IFsyLCA5XSwgNTU6IFsyLCA5XSwgNjA6IFsyLCA5XSB9LCB7IDIwOiAyNSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogMzYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogMzcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgMzk6IFsyLCA0Nl0sIDQ0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyA0OiAzOCwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMTM6IDQwLCAxNTogWzEsIDIwXSwgMTc6IDM5IH0sIHsgMjA6IDQyLCA1NjogNDEsIDY0OiA0MywgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogNDUsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNTogWzIsIDEwXSwgMTQ6IFsyLCAxMF0sIDE1OiBbMiwgMTBdLCAxODogWzIsIDEwXSwgMTk6IFsyLCAxMF0sIDI5OiBbMiwgMTBdLCAzNDogWzIsIDEwXSwgMzk6IFsyLCAxMF0sIDQ0OiBbMiwgMTBdLCA0NzogWzIsIDEwXSwgNDg6IFsyLCAxMF0sIDUxOiBbMiwgMTBdLCA1NTogWzIsIDEwXSwgNjA6IFsyLCAxMF0gfSwgeyAyMDogNDYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQ3LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0OCwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDIsIDU2OiA0OSwgNjQ6IDQzLCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzIsIDc4XSwgNDk6IDUwLCA2NTogWzIsIDc4XSwgNzI6IFsyLCA3OF0sIDgwOiBbMiwgNzhdLCA4MTogWzIsIDc4XSwgODI6IFsyLCA3OF0sIDgzOiBbMiwgNzhdLCA4NDogWzIsIDc4XSwgODU6IFsyLCA3OF0gfSwgeyAyMzogWzIsIDMzXSwgMzM6IFsyLCAzM10sIDU0OiBbMiwgMzNdLCA2NTogWzIsIDMzXSwgNjg6IFsyLCAzM10sIDcyOiBbMiwgMzNdLCA3NTogWzIsIDMzXSwgODA6IFsyLCAzM10sIDgxOiBbMiwgMzNdLCA4MjogWzIsIDMzXSwgODM6IFsyLCAzM10sIDg0OiBbMiwgMzNdLCA4NTogWzIsIDMzXSB9LCB7IDIzOiBbMiwgMzRdLCAzMzogWzIsIDM0XSwgNTQ6IFsyLCAzNF0sIDY1OiBbMiwgMzRdLCA2ODogWzIsIDM0XSwgNzI6IFsyLCAzNF0sIDc1OiBbMiwgMzRdLCA4MDogWzIsIDM0XSwgODE6IFsyLCAzNF0sIDgyOiBbMiwgMzRdLCA4MzogWzIsIDM0XSwgODQ6IFsyLCAzNF0sIDg1OiBbMiwgMzRdIH0sIHsgMjM6IFsyLCAzNV0sIDMzOiBbMiwgMzVdLCA1NDogWzIsIDM1XSwgNjU6IFsyLCAzNV0sIDY4OiBbMiwgMzVdLCA3MjogWzIsIDM1XSwgNzU6IFsyLCAzNV0sIDgwOiBbMiwgMzVdLCA4MTogWzIsIDM1XSwgODI6IFsyLCAzNV0sIDgzOiBbMiwgMzVdLCA4NDogWzIsIDM1XSwgODU6IFsyLCAzNV0gfSwgeyAyMzogWzIsIDM2XSwgMzM6IFsyLCAzNl0sIDU0OiBbMiwgMzZdLCA2NTogWzIsIDM2XSwgNjg6IFsyLCAzNl0sIDcyOiBbMiwgMzZdLCA3NTogWzIsIDM2XSwgODA6IFsyLCAzNl0sIDgxOiBbMiwgMzZdLCA4MjogWzIsIDM2XSwgODM6IFsyLCAzNl0sIDg0OiBbMiwgMzZdLCA4NTogWzIsIDM2XSB9LCB7IDIzOiBbMiwgMzddLCAzMzogWzIsIDM3XSwgNTQ6IFsyLCAzN10sIDY1OiBbMiwgMzddLCA2ODogWzIsIDM3XSwgNzI6IFsyLCAzN10sIDc1OiBbMiwgMzddLCA4MDogWzIsIDM3XSwgODE6IFsyLCAzN10sIDgyOiBbMiwgMzddLCA4MzogWzIsIDM3XSwgODQ6IFsyLCAzN10sIDg1OiBbMiwgMzddIH0sIHsgMjM6IFsyLCAzOF0sIDMzOiBbMiwgMzhdLCA1NDogWzIsIDM4XSwgNjU6IFsyLCAzOF0sIDY4OiBbMiwgMzhdLCA3MjogWzIsIDM4XSwgNzU6IFsyLCAzOF0sIDgwOiBbMiwgMzhdLCA4MTogWzIsIDM4XSwgODI6IFsyLCAzOF0sIDgzOiBbMiwgMzhdLCA4NDogWzIsIDM4XSwgODU6IFsyLCAzOF0gfSwgeyAyMzogWzIsIDM5XSwgMzM6IFsyLCAzOV0sIDU0OiBbMiwgMzldLCA2NTogWzIsIDM5XSwgNjg6IFsyLCAzOV0sIDcyOiBbMiwgMzldLCA3NTogWzIsIDM5XSwgODA6IFsyLCAzOV0sIDgxOiBbMiwgMzldLCA4MjogWzIsIDM5XSwgODM6IFsyLCAzOV0sIDg0OiBbMiwgMzldLCA4NTogWzIsIDM5XSB9LCB7IDIzOiBbMiwgNDNdLCAzMzogWzIsIDQzXSwgNTQ6IFsyLCA0M10sIDY1OiBbMiwgNDNdLCA2ODogWzIsIDQzXSwgNzI6IFsyLCA0M10sIDc1OiBbMiwgNDNdLCA4MDogWzIsIDQzXSwgODE6IFsyLCA0M10sIDgyOiBbMiwgNDNdLCA4MzogWzIsIDQzXSwgODQ6IFsyLCA0M10sIDg1OiBbMiwgNDNdLCA4NzogWzEsIDUxXSB9LCB7IDcyOiBbMSwgMzVdLCA4NjogNTIgfSwgeyAyMzogWzIsIDQ1XSwgMzM6IFsyLCA0NV0sIDU0OiBbMiwgNDVdLCA2NTogWzIsIDQ1XSwgNjg6IFsyLCA0NV0sIDcyOiBbMiwgNDVdLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyA1MjogNTMsIDU0OiBbMiwgODJdLCA2NTogWzIsIDgyXSwgNzI6IFsyLCA4Ml0sIDgwOiBbMiwgODJdLCA4MTogWzIsIDgyXSwgODI6IFsyLCA4Ml0sIDgzOiBbMiwgODJdLCA4NDogWzIsIDgyXSwgODU6IFsyLCA4Ml0gfSwgeyAyNTogNTQsIDM4OiA1NiwgMzk6IFsxLCA1OF0sIDQzOiA1NywgNDQ6IFsxLCA1OV0sIDQ1OiA1NSwgNDc6IFsyLCA1NF0gfSwgeyAyODogNjAsIDQzOiA2MSwgNDQ6IFsxLCA1OV0sIDQ3OiBbMiwgNTZdIH0sIHsgMTM6IDYzLCAxNTogWzEsIDIwXSwgMTg6IFsxLCA2Ml0gfSwgeyAxNTogWzIsIDQ4XSwgMTg6IFsyLCA0OF0gfSwgeyAzMzogWzIsIDg2XSwgNTc6IDY0LCA2NTogWzIsIDg2XSwgNzI6IFsyLCA4Nl0sIDgwOiBbMiwgODZdLCA4MTogWzIsIDg2XSwgODI6IFsyLCA4Nl0sIDgzOiBbMiwgODZdLCA4NDogWzIsIDg2XSwgODU6IFsyLCA4Nl0gfSwgeyAzMzogWzIsIDQwXSwgNjU6IFsyLCA0MF0sIDcyOiBbMiwgNDBdLCA4MDogWzIsIDQwXSwgODE6IFsyLCA0MF0sIDgyOiBbMiwgNDBdLCA4MzogWzIsIDQwXSwgODQ6IFsyLCA0MF0sIDg1OiBbMiwgNDBdIH0sIHsgMzM6IFsyLCA0MV0sIDY1OiBbMiwgNDFdLCA3MjogWzIsIDQxXSwgODA6IFsyLCA0MV0sIDgxOiBbMiwgNDFdLCA4MjogWzIsIDQxXSwgODM6IFsyLCA0MV0sIDg0OiBbMiwgNDFdLCA4NTogWzIsIDQxXSB9LCB7IDIwOiA2NSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogNjYsIDQ3OiBbMSwgNjddIH0sIHsgMzA6IDY4LCAzMzogWzIsIDU4XSwgNjU6IFsyLCA1OF0sIDcyOiBbMiwgNThdLCA3NTogWzIsIDU4XSwgODA6IFsyLCA1OF0sIDgxOiBbMiwgNThdLCA4MjogWzIsIDU4XSwgODM6IFsyLCA1OF0sIDg0OiBbMiwgNThdLCA4NTogWzIsIDU4XSB9LCB7IDMzOiBbMiwgNjRdLCAzNTogNjksIDY1OiBbMiwgNjRdLCA3MjogWzIsIDY0XSwgNzU6IFsyLCA2NF0sIDgwOiBbMiwgNjRdLCA4MTogWzIsIDY0XSwgODI6IFsyLCA2NF0sIDgzOiBbMiwgNjRdLCA4NDogWzIsIDY0XSwgODU6IFsyLCA2NF0gfSwgeyAyMTogNzAsIDIzOiBbMiwgNTBdLCA2NTogWzIsIDUwXSwgNzI6IFsyLCA1MF0sIDgwOiBbMiwgNTBdLCA4MTogWzIsIDUwXSwgODI6IFsyLCA1MF0sIDgzOiBbMiwgNTBdLCA4NDogWzIsIDUwXSwgODU6IFsyLCA1MF0gfSwgeyAzMzogWzIsIDkwXSwgNjE6IDcxLCA2NTogWzIsIDkwXSwgNzI6IFsyLCA5MF0sIDgwOiBbMiwgOTBdLCA4MTogWzIsIDkwXSwgODI6IFsyLCA5MF0sIDgzOiBbMiwgOTBdLCA4NDogWzIsIDkwXSwgODU6IFsyLCA5MF0gfSwgeyAyMDogNzUsIDMzOiBbMiwgODBdLCA1MDogNzIsIDYzOiA3MywgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDc0LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA3MjogWzEsIDgwXSB9LCB7IDIzOiBbMiwgNDJdLCAzMzogWzIsIDQyXSwgNTQ6IFsyLCA0Ml0sIDY1OiBbMiwgNDJdLCA2ODogWzIsIDQyXSwgNzI6IFsyLCA0Ml0sIDc1OiBbMiwgNDJdLCA4MDogWzIsIDQyXSwgODE6IFsyLCA0Ml0sIDgyOiBbMiwgNDJdLCA4MzogWzIsIDQyXSwgODQ6IFsyLCA0Ml0sIDg1OiBbMiwgNDJdLCA4NzogWzEsIDUxXSB9LCB7IDIwOiA3NSwgNTM6IDgxLCA1NDogWzIsIDg0XSwgNjM6IDgyLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogODMsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDI2OiA4NCwgNDc6IFsxLCA2N10gfSwgeyA0NzogWzIsIDU1XSB9LCB7IDQ6IDg1LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDc6IFsyLCAyMF0gfSwgeyAyMDogODYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogODcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMjY6IDg4LCA0NzogWzEsIDY3XSB9LCB7IDQ3OiBbMiwgNTddIH0sIHsgNTogWzIsIDExXSwgMTQ6IFsyLCAxMV0sIDE1OiBbMiwgMTFdLCAxOTogWzIsIDExXSwgMjk6IFsyLCAxMV0sIDM0OiBbMiwgMTFdLCAzOTogWzIsIDExXSwgNDQ6IFsyLCAxMV0sIDQ3OiBbMiwgMTFdLCA0ODogWzIsIDExXSwgNTE6IFsyLCAxMV0sIDU1OiBbMiwgMTFdLCA2MDogWzIsIDExXSB9LCB7IDE1OiBbMiwgNDldLCAxODogWzIsIDQ5XSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA4OF0sIDU4OiA4OSwgNjM6IDkwLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTEsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDY1OiBbMiwgOTRdLCA2NjogOTIsIDY4OiBbMiwgOTRdLCA3MjogWzIsIDk0XSwgODA6IFsyLCA5NF0sIDgxOiBbMiwgOTRdLCA4MjogWzIsIDk0XSwgODM6IFsyLCA5NF0sIDg0OiBbMiwgOTRdLCA4NTogWzIsIDk0XSB9LCB7IDU6IFsyLCAyNV0sIDE0OiBbMiwgMjVdLCAxNTogWzIsIDI1XSwgMTk6IFsyLCAyNV0sIDI5OiBbMiwgMjVdLCAzNDogWzIsIDI1XSwgMzk6IFsyLCAyNV0sIDQ0OiBbMiwgMjVdLCA0NzogWzIsIDI1XSwgNDg6IFsyLCAyNV0sIDUxOiBbMiwgMjVdLCA1NTogWzIsIDI1XSwgNjA6IFsyLCAyNV0gfSwgeyAyMDogOTMsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMTogOTQsIDMzOiBbMiwgNjBdLCA2MzogOTUsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA5NiwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDYwXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzM6IFsyLCA2Nl0sIDM2OiA5NywgNjM6IDk4LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTksIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA2Nl0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDIyOiAxMDAsIDIzOiBbMiwgNTJdLCA2MzogMTAxLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTAyLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMzOiBbMiwgOTJdLCA2MjogMTAzLCA2MzogMTA0LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTA1LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzEsIDEwNl0gfSwgeyAzMzogWzIsIDc5XSwgNjU6IFsyLCA3OV0sIDcyOiBbMiwgNzldLCA4MDogWzIsIDc5XSwgODE6IFsyLCA3OV0sIDgyOiBbMiwgNzldLCA4MzogWzIsIDc5XSwgODQ6IFsyLCA3OV0sIDg1OiBbMiwgNzldIH0sIHsgMzM6IFsyLCA4MV0gfSwgeyAyMzogWzIsIDI3XSwgMzM6IFsyLCAyN10sIDU0OiBbMiwgMjddLCA2NTogWzIsIDI3XSwgNjg6IFsyLCAyN10sIDcyOiBbMiwgMjddLCA3NTogWzIsIDI3XSwgODA6IFsyLCAyN10sIDgxOiBbMiwgMjddLCA4MjogWzIsIDI3XSwgODM6IFsyLCAyN10sIDg0OiBbMiwgMjddLCA4NTogWzIsIDI3XSB9LCB7IDIzOiBbMiwgMjhdLCAzMzogWzIsIDI4XSwgNTQ6IFsyLCAyOF0sIDY1OiBbMiwgMjhdLCA2ODogWzIsIDI4XSwgNzI6IFsyLCAyOF0sIDc1OiBbMiwgMjhdLCA4MDogWzIsIDI4XSwgODE6IFsyLCAyOF0sIDgyOiBbMiwgMjhdLCA4MzogWzIsIDI4XSwgODQ6IFsyLCAyOF0sIDg1OiBbMiwgMjhdIH0sIHsgMjM6IFsyLCAzMF0sIDMzOiBbMiwgMzBdLCA1NDogWzIsIDMwXSwgNjg6IFsyLCAzMF0sIDcxOiAxMDcsIDcyOiBbMSwgMTA4XSwgNzU6IFsyLCAzMF0gfSwgeyAyMzogWzIsIDk4XSwgMzM6IFsyLCA5OF0sIDU0OiBbMiwgOThdLCA2ODogWzIsIDk4XSwgNzI6IFsyLCA5OF0sIDc1OiBbMiwgOThdIH0sIHsgMjM6IFsyLCA0NV0sIDMzOiBbMiwgNDVdLCA1NDogWzIsIDQ1XSwgNjU6IFsyLCA0NV0sIDY4OiBbMiwgNDVdLCA3MjogWzIsIDQ1XSwgNzM6IFsxLCAxMDldLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyAyMzogWzIsIDQ0XSwgMzM6IFsyLCA0NF0sIDU0OiBbMiwgNDRdLCA2NTogWzIsIDQ0XSwgNjg6IFsyLCA0NF0sIDcyOiBbMiwgNDRdLCA3NTogWzIsIDQ0XSwgODA6IFsyLCA0NF0sIDgxOiBbMiwgNDRdLCA4MjogWzIsIDQ0XSwgODM6IFsyLCA0NF0sIDg0OiBbMiwgNDRdLCA4NTogWzIsIDQ0XSwgODc6IFsyLCA0NF0gfSwgeyA1NDogWzEsIDExMF0gfSwgeyA1NDogWzIsIDgzXSwgNjU6IFsyLCA4M10sIDcyOiBbMiwgODNdLCA4MDogWzIsIDgzXSwgODE6IFsyLCA4M10sIDgyOiBbMiwgODNdLCA4MzogWzIsIDgzXSwgODQ6IFsyLCA4M10sIDg1OiBbMiwgODNdIH0sIHsgNTQ6IFsyLCA4NV0gfSwgeyA1OiBbMiwgMTNdLCAxNDogWzIsIDEzXSwgMTU6IFsyLCAxM10sIDE5OiBbMiwgMTNdLCAyOTogWzIsIDEzXSwgMzQ6IFsyLCAxM10sIDM5OiBbMiwgMTNdLCA0NDogWzIsIDEzXSwgNDc6IFsyLCAxM10sIDQ4OiBbMiwgMTNdLCA1MTogWzIsIDEzXSwgNTU6IFsyLCAxM10sIDYwOiBbMiwgMTNdIH0sIHsgMzg6IDU2LCAzOTogWzEsIDU4XSwgNDM6IDU3LCA0NDogWzEsIDU5XSwgNDU6IDExMiwgNDY6IDExMSwgNDc6IFsyLCA3Nl0gfSwgeyAzMzogWzIsIDcwXSwgNDA6IDExMywgNjU6IFsyLCA3MF0sIDcyOiBbMiwgNzBdLCA3NTogWzIsIDcwXSwgODA6IFsyLCA3MF0sIDgxOiBbMiwgNzBdLCA4MjogWzIsIDcwXSwgODM6IFsyLCA3MF0sIDg0OiBbMiwgNzBdLCA4NTogWzIsIDcwXSB9LCB7IDQ3OiBbMiwgMThdIH0sIHsgNTogWzIsIDE0XSwgMTQ6IFsyLCAxNF0sIDE1OiBbMiwgMTRdLCAxOTogWzIsIDE0XSwgMjk6IFsyLCAxNF0sIDM0OiBbMiwgMTRdLCAzOTogWzIsIDE0XSwgNDQ6IFsyLCAxNF0sIDQ3OiBbMiwgMTRdLCA0ODogWzIsIDE0XSwgNTE6IFsyLCAxNF0sIDU1OiBbMiwgMTRdLCA2MDogWzIsIDE0XSB9LCB7IDMzOiBbMSwgMTE0XSB9LCB7IDMzOiBbMiwgODddLCA2NTogWzIsIDg3XSwgNzI6IFsyLCA4N10sIDgwOiBbMiwgODddLCA4MTogWzIsIDg3XSwgODI6IFsyLCA4N10sIDgzOiBbMiwgODddLCA4NDogWzIsIDg3XSwgODU6IFsyLCA4N10gfSwgeyAzMzogWzIsIDg5XSB9LCB7IDIwOiA3NSwgNjM6IDExNiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjc6IDExNSwgNjg6IFsyLCA5Nl0sIDY5OiAxMTcsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDMzOiBbMSwgMTE4XSB9LCB7IDMyOiAxMTksIDMzOiBbMiwgNjJdLCA3NDogMTIwLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDU5XSwgNjU6IFsyLCA1OV0sIDcyOiBbMiwgNTldLCA3NTogWzIsIDU5XSwgODA6IFsyLCA1OV0sIDgxOiBbMiwgNTldLCA4MjogWzIsIDU5XSwgODM6IFsyLCA1OV0sIDg0OiBbMiwgNTldLCA4NTogWzIsIDU5XSB9LCB7IDMzOiBbMiwgNjFdLCA3NTogWzIsIDYxXSB9LCB7IDMzOiBbMiwgNjhdLCAzNzogMTIyLCA3NDogMTIzLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDY1XSwgNjU6IFsyLCA2NV0sIDcyOiBbMiwgNjVdLCA3NTogWzIsIDY1XSwgODA6IFsyLCA2NV0sIDgxOiBbMiwgNjVdLCA4MjogWzIsIDY1XSwgODM6IFsyLCA2NV0sIDg0OiBbMiwgNjVdLCA4NTogWzIsIDY1XSB9LCB7IDMzOiBbMiwgNjddLCA3NTogWzIsIDY3XSB9LCB7IDIzOiBbMSwgMTI0XSB9LCB7IDIzOiBbMiwgNTFdLCA2NTogWzIsIDUxXSwgNzI6IFsyLCA1MV0sIDgwOiBbMiwgNTFdLCA4MTogWzIsIDUxXSwgODI6IFsyLCA1MV0sIDgzOiBbMiwgNTFdLCA4NDogWzIsIDUxXSwgODU6IFsyLCA1MV0gfSwgeyAyMzogWzIsIDUzXSB9LCB7IDMzOiBbMSwgMTI1XSB9LCB7IDMzOiBbMiwgOTFdLCA2NTogWzIsIDkxXSwgNzI6IFsyLCA5MV0sIDgwOiBbMiwgOTFdLCA4MTogWzIsIDkxXSwgODI6IFsyLCA5MV0sIDgzOiBbMiwgOTFdLCA4NDogWzIsIDkxXSwgODU6IFsyLCA5MV0gfSwgeyAzMzogWzIsIDkzXSB9LCB7IDU6IFsyLCAyMl0sIDE0OiBbMiwgMjJdLCAxNTogWzIsIDIyXSwgMTk6IFsyLCAyMl0sIDI5OiBbMiwgMjJdLCAzNDogWzIsIDIyXSwgMzk6IFsyLCAyMl0sIDQ0OiBbMiwgMjJdLCA0NzogWzIsIDIyXSwgNDg6IFsyLCAyMl0sIDUxOiBbMiwgMjJdLCA1NTogWzIsIDIyXSwgNjA6IFsyLCAyMl0gfSwgeyAyMzogWzIsIDk5XSwgMzM6IFsyLCA5OV0sIDU0OiBbMiwgOTldLCA2ODogWzIsIDk5XSwgNzI6IFsyLCA5OV0sIDc1OiBbMiwgOTldIH0sIHsgNzM6IFsxLCAxMDldIH0sIHsgMjA6IDc1LCA2MzogMTI2LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyM10sIDE0OiBbMiwgMjNdLCAxNTogWzIsIDIzXSwgMTk6IFsyLCAyM10sIDI5OiBbMiwgMjNdLCAzNDogWzIsIDIzXSwgMzk6IFsyLCAyM10sIDQ0OiBbMiwgMjNdLCA0NzogWzIsIDIzXSwgNDg6IFsyLCAyM10sIDUxOiBbMiwgMjNdLCA1NTogWzIsIDIzXSwgNjA6IFsyLCAyM10gfSwgeyA0NzogWzIsIDE5XSB9LCB7IDQ3OiBbMiwgNzddIH0sIHsgMjA6IDc1LCAzMzogWzIsIDcyXSwgNDE6IDEyNywgNjM6IDEyOCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEyOSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDcyXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyNF0sIDE0OiBbMiwgMjRdLCAxNTogWzIsIDI0XSwgMTk6IFsyLCAyNF0sIDI5OiBbMiwgMjRdLCAzNDogWzIsIDI0XSwgMzk6IFsyLCAyNF0sIDQ0OiBbMiwgMjRdLCA0NzogWzIsIDI0XSwgNDg6IFsyLCAyNF0sIDUxOiBbMiwgMjRdLCA1NTogWzIsIDI0XSwgNjA6IFsyLCAyNF0gfSwgeyA2ODogWzEsIDEzMF0gfSwgeyA2NTogWzIsIDk1XSwgNjg6IFsyLCA5NV0sIDcyOiBbMiwgOTVdLCA4MDogWzIsIDk1XSwgODE6IFsyLCA5NV0sIDgyOiBbMiwgOTVdLCA4MzogWzIsIDk1XSwgODQ6IFsyLCA5NV0sIDg1OiBbMiwgOTVdIH0sIHsgNjg6IFsyLCA5N10gfSwgeyA1OiBbMiwgMjFdLCAxNDogWzIsIDIxXSwgMTU6IFsyLCAyMV0sIDE5OiBbMiwgMjFdLCAyOTogWzIsIDIxXSwgMzQ6IFsyLCAyMV0sIDM5OiBbMiwgMjFdLCA0NDogWzIsIDIxXSwgNDc6IFsyLCAyMV0sIDQ4OiBbMiwgMjFdLCA1MTogWzIsIDIxXSwgNTU6IFsyLCAyMV0sIDYwOiBbMiwgMjFdIH0sIHsgMzM6IFsxLCAxMzFdIH0sIHsgMzM6IFsyLCA2M10gfSwgeyA3MjogWzEsIDEzM10sIDc2OiAxMzIgfSwgeyAzMzogWzEsIDEzNF0gfSwgeyAzMzogWzIsIDY5XSB9LCB7IDE1OiBbMiwgMTJdIH0sIHsgMTQ6IFsyLCAyNl0sIDE1OiBbMiwgMjZdLCAxOTogWzIsIDI2XSwgMjk6IFsyLCAyNl0sIDM0OiBbMiwgMjZdLCA0NzogWzIsIDI2XSwgNDg6IFsyLCAyNl0sIDUxOiBbMiwgMjZdLCA1NTogWzIsIDI2XSwgNjA6IFsyLCAyNl0gfSwgeyAyMzogWzIsIDMxXSwgMzM6IFsyLCAzMV0sIDU0OiBbMiwgMzFdLCA2ODogWzIsIDMxXSwgNzI6IFsyLCAzMV0sIDc1OiBbMiwgMzFdIH0sIHsgMzM6IFsyLCA3NF0sIDQyOiAxMzUsIDc0OiAxMzYsIDc1OiBbMSwgMTIxXSB9LCB7IDMzOiBbMiwgNzFdLCA2NTogWzIsIDcxXSwgNzI6IFsyLCA3MV0sIDc1OiBbMiwgNzFdLCA4MDogWzIsIDcxXSwgODE6IFsyLCA3MV0sIDgyOiBbMiwgNzFdLCA4MzogWzIsIDcxXSwgODQ6IFsyLCA3MV0sIDg1OiBbMiwgNzFdIH0sIHsgMzM6IFsyLCA3M10sIDc1OiBbMiwgNzNdIH0sIHsgMjM6IFsyLCAyOV0sIDMzOiBbMiwgMjldLCA1NDogWzIsIDI5XSwgNjU6IFsyLCAyOV0sIDY4OiBbMiwgMjldLCA3MjogWzIsIDI5XSwgNzU6IFsyLCAyOV0sIDgwOiBbMiwgMjldLCA4MTogWzIsIDI5XSwgODI6IFsyLCAyOV0sIDgzOiBbMiwgMjldLCA4NDogWzIsIDI5XSwgODU6IFsyLCAyOV0gfSwgeyAxNDogWzIsIDE1XSwgMTU6IFsyLCAxNV0sIDE5OiBbMiwgMTVdLCAyOTogWzIsIDE1XSwgMzQ6IFsyLCAxNV0sIDM5OiBbMiwgMTVdLCA0NDogWzIsIDE1XSwgNDc6IFsyLCAxNV0sIDQ4OiBbMiwgMTVdLCA1MTogWzIsIDE1XSwgNTU6IFsyLCAxNV0sIDYwOiBbMiwgMTVdIH0sIHsgNzI6IFsxLCAxMzhdLCA3NzogWzEsIDEzN10gfSwgeyA3MjogWzIsIDEwMF0sIDc3OiBbMiwgMTAwXSB9LCB7IDE0OiBbMiwgMTZdLCAxNTogWzIsIDE2XSwgMTk6IFsyLCAxNl0sIDI5OiBbMiwgMTZdLCAzNDogWzIsIDE2XSwgNDQ6IFsyLCAxNl0sIDQ3OiBbMiwgMTZdLCA0ODogWzIsIDE2XSwgNTE6IFsyLCAxNl0sIDU1OiBbMiwgMTZdLCA2MDogWzIsIDE2XSB9LCB7IDMzOiBbMSwgMTM5XSB9LCB7IDMzOiBbMiwgNzVdIH0sIHsgMzM6IFsyLCAzMl0gfSwgeyA3MjogWzIsIDEwMV0sIDc3OiBbMiwgMTAxXSB9LCB7IDE0OiBbMiwgMTddLCAxNTogWzIsIDE3XSwgMTk6IFsyLCAxN10sIDI5OiBbMiwgMTddLCAzNDogWzIsIDE3XSwgMzk6IFsyLCAxN10sIDQ0OiBbMiwgMTddLCA0NzogWzIsIDE3XSwgNDg6IFsyLCAxN10sIDUxOiBbMiwgMTddLCA1NTogWzIsIDE3XSwgNjA6IFsyLCAxN10gfV0sXG5cdCAgICAgICAgZGVmYXVsdEFjdGlvbnM6IHsgNDogWzIsIDFdLCA1NTogWzIsIDU1XSwgNTc6IFsyLCAyMF0sIDYxOiBbMiwgNTddLCA3NDogWzIsIDgxXSwgODM6IFsyLCA4NV0sIDg3OiBbMiwgMThdLCA5MTogWzIsIDg5XSwgMTAyOiBbMiwgNTNdLCAxMDU6IFsyLCA5M10sIDExMTogWzIsIDE5XSwgMTEyOiBbMiwgNzddLCAxMTc6IFsyLCA5N10sIDEyMDogWzIsIDYzXSwgMTIzOiBbMiwgNjldLCAxMjQ6IFsyLCAxMl0sIDEzNjogWzIsIDc1XSwgMTM3OiBbMiwgMzJdIH0sXG5cdCAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcblx0ICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuXHQgICAgICAgICAgICAgICAgc3RhY2sgPSBbMF0sXG5cdCAgICAgICAgICAgICAgICB2c3RhY2sgPSBbbnVsbF0sXG5cdCAgICAgICAgICAgICAgICBsc3RhY2sgPSBbXSxcblx0ICAgICAgICAgICAgICAgIHRhYmxlID0gdGhpcy50YWJsZSxcblx0ICAgICAgICAgICAgICAgIHl5dGV4dCA9IFwiXCIsXG5cdCAgICAgICAgICAgICAgICB5eWxpbmVubyA9IDAsXG5cdCAgICAgICAgICAgICAgICB5eWxlbmcgPSAwLFxuXHQgICAgICAgICAgICAgICAgcmVjb3ZlcmluZyA9IDAsXG5cdCAgICAgICAgICAgICAgICBURVJST1IgPSAyLFxuXHQgICAgICAgICAgICAgICAgRU9GID0gMTtcblx0ICAgICAgICAgICAgdGhpcy5sZXhlci5zZXRJbnB1dChpbnB1dCk7XG5cdCAgICAgICAgICAgIHRoaXMubGV4ZXIueXkgPSB0aGlzLnl5O1xuXHQgICAgICAgICAgICB0aGlzLnl5LmxleGVyID0gdGhpcy5sZXhlcjtcblx0ICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIgPSB0aGlzO1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubGV4ZXIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHRoaXMubGV4ZXIueXlsbG9jID0ge307XG5cdCAgICAgICAgICAgIHZhciB5eWxvYyA9IHRoaXMubGV4ZXIueXlsbG9jO1xuXHQgICAgICAgICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG5cdCAgICAgICAgICAgIHZhciByYW5nZXMgPSB0aGlzLmxleGVyLm9wdGlvbnMgJiYgdGhpcy5sZXhlci5vcHRpb25zLnJhbmdlcztcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5wYXJzZUVycm9yID0gdGhpcy55eS5wYXJzZUVycm9yO1xuXHQgICAgICAgICAgICBmdW5jdGlvbiBwb3BTdGFjayhuKSB7XG5cdCAgICAgICAgICAgICAgICBzdGFjay5sZW5ndGggPSBzdGFjay5sZW5ndGggLSAyICogbjtcblx0ICAgICAgICAgICAgICAgIHZzdGFjay5sZW5ndGggPSB2c3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgICAgIGxzdGFjay5sZW5ndGggPSBsc3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBmdW5jdGlvbiBsZXgoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgdG9rZW47XG5cdCAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYubGV4ZXIubGV4KCkgfHwgMTtcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBzeW1ib2wsXG5cdCAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCxcblx0ICAgICAgICAgICAgICAgIHN0YXRlLFxuXHQgICAgICAgICAgICAgICAgYWN0aW9uLFxuXHQgICAgICAgICAgICAgICAgYSxcblx0ICAgICAgICAgICAgICAgIHIsXG5cdCAgICAgICAgICAgICAgICB5eXZhbCA9IHt9LFxuXHQgICAgICAgICAgICAgICAgcCxcblx0ICAgICAgICAgICAgICAgIGxlbixcblx0ICAgICAgICAgICAgICAgIG5ld1N0YXRlLFxuXHQgICAgICAgICAgICAgICAgZXhwZWN0ZWQ7XG5cdCAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvdmVyaW5nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IDIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgdGhpcy5sZXhlci5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gMSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHsgdGV4dDogdGhpcy5sZXhlci5tYXRjaCwgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCwgbGluZTogdGhpcy5sZXhlci55eWxpbmVubywgbG9jOiB5eWxvYywgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2c3RhY2sucHVzaCh0aGlzLmxleGVyLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHRoaXMubGV4ZXIueXlsbG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByZUVycm9yU3ltYm9sKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxlbmcgPSB0aGlzLmxleGVyLnl5bGVuZztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dGV4dCA9IHRoaXMubGV4ZXIueXl0ZXh0O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSB0aGlzLmxleGVyLnl5bGluZW5vO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvdmVyaW5nID4gMCkgcmVjb3ZlcmluZy0tO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gcHJlRXJyb3JTeW1ib2w7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCA9IG51bGw7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJCA9IHsgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLCBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLCBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLCBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtbiB9O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLCBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwoeXl2YWwsIHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgdGhpcy55eSwgYWN0aW9uWzFdLCB2c3RhY2ssIGxzdGFjayk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyogSmlzb24gZ2VuZXJhdGVkIGxleGVyICovXG5cdCAgICB2YXIgbGV4ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBsZXhlciA9IHsgRU9GOiAxLFxuXHQgICAgICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uIHNldElucHV0KGlucHV0KSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2xlc3MgPSB0aGlzLmRvbmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbJ0lOSVRJQUwnXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiAxLCBmaXJzdF9jb2x1bW46IDAsIGxhc3RfbGluZTogMSwgbGFzdF9jb2x1bW46IDAgfTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gaW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcrKztcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gY2g7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVucHV0OiBmdW5jdGlvbiB1bnB1dChjaCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbiAtIDEpO1xuXHQgICAgICAgICAgICAgICAgLy90aGlzLnl5bGVuZyAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuXG5cdCAgICAgICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcblxuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcblx0ICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcblx0ICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG5cdCAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24gbW9yZSgpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uIGxlc3Mobikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcGFzdElucHV0OiBmdW5jdGlvbiBwYXN0SW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uIHVwY29taW5nSW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG5cdCAgICAgICAgICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYyArIFwiXlwiO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IHRydWU7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXgsIGNvbCwgbGluZXM7XG5cdCAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9ICcnO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aCB9O1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBydWxlc1tpbmRleF0sIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCkgdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSByZXR1cm4gdG9rZW47ZWxzZSByZXR1cm47XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoJ0xleGljYWwgZXJyb3Igb24gbGluZSAnICsgKHRoaXMueXlsaW5lbm8gKyAxKSArICcuIFVucmVjb2duaXplZCB0ZXh0LlxcbicgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7IHRleHQ6IFwiXCIsIHRva2VuOiBudWxsLCBsaW5lOiB0aGlzLnl5bGluZW5vIH0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxleCgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uIF9jdXJyZW50UnVsZXMoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMl07XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG5cdCAgICAgICAgICAgIH0gfTtcblx0ICAgICAgICBsZXhlci5vcHRpb25zID0ge307XG5cdCAgICAgICAgbGV4ZXIucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuXG5cdCAgICAgICAgICAgIGZ1bmN0aW9uIHN0cmlwKHN0YXJ0LCBlbmQpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zdWJzdHIoc3RhcnQsIHl5Xy55eWxlbmcgLSBlbmQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdmFyIFlZU1RBVEUgPSBZWV9TVEFSVDtcblx0ICAgICAgICAgICAgc3dpdGNoICgkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDA6XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHl5Xy55eXRleHQuc2xpY2UoLTIpID09PSBcIlxcXFxcXFxcXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJtdVwiKTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHl5Xy55eXRleHQuc2xpY2UoLTEpID09PSBcIlxcXFxcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcCgwLCAxKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcImVtdVwiKTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0KSByZXR1cm4gMTU7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ3JhdycpO3JldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIHVzaW5nIGB0aGlzLnRvcFN0YXRlKClgIGJlbG93LCBidXQgaXQgY3VycmVudGx5XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJucyB0aGUgc2Vjb25kIHRvcCBpbnN0ZWFkIG9mIHRoZSBmaXJzdCB0b3AuIE9wZW5lZCBhblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlIGFib3V0IGl0IGF0IGh0dHBzOi8vZ2l0aHViLmNvbS96YWFjaC9qaXNvbi9pc3N1ZXMvMjkxXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA9PT0gJ3JhdycpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnN1YnN0cig1LCB5eV8ueXlsZW5nIC0gOSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRU5EX1JBV19CTE9DSyc7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTQ7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ3JhdycpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyMztcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEyOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI5O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNDQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNDQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE3OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzNDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTg6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM5O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTE7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIwOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA0ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh5eV8ueXl0ZXh0KTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbignY29tJyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNDtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI0OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjU6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI3OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Nztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjg6XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIHdoaXRlc3BhY2Vcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO3JldHVybiA1NDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO3JldHVybiAzMztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzE6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHN0cmlwKDEsIDIpLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKTtyZXR1cm4gODA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSBzdHJpcCgxLCAyKS5yZXBsYWNlKC9cXFxcJy9nLCBcIidcIik7cmV0dXJuIDgwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM3OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4NDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Nztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mjpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9cXFxcKFtcXFxcXFxdXSkvZywgJyQxJyk7cmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0lOVkFMSUQnO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0NDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgbGV4ZXIucnVsZXMgPSBbL14oPzpbXlxceDAwXSo/KD89KFxce1xceykpKS8sIC9eKD86W15cXHgwMF0rKS8sIC9eKD86W15cXHgwMF17Mix9Pyg/PShcXHtcXHt8XFxcXFxce1xce3xcXFxcXFxcXFxce1xce3wkKSkpLywgL14oPzpcXHtcXHtcXHtcXHsoPz1bXlxcL10pKS8sIC9eKD86XFx7XFx7XFx7XFx7XFwvW15cXHMhXCIjJS0sXFwuXFwvOy0+QFxcWy1cXF5gXFx7LX5dKyg/PVs9fVxcc1xcLy5dKVxcfVxcfVxcfVxcfSkvLCAvXig/OlteXFx4MDBdKj8oPz0oXFx7XFx7XFx7XFx7KSkpLywgL14oPzpbXFxzXFxTXSo/LS0ofik/XFx9XFx9KS8sIC9eKD86XFwoKS8sIC9eKD86XFwpKS8sIC9eKD86XFx7XFx7XFx7XFx7KS8sIC9eKD86XFx9XFx9XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pPz4pLywgL14oPzpcXHtcXHsofik/Iz4pLywgL14oPzpcXHtcXHsofik/I1xcKj8pLywgL14oPzpcXHtcXHsofik/XFwvKS8sIC9eKD86XFx7XFx7KH4pP1xcXlxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxzKih+KT9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFxeKS8sIC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxiKS8sIC9eKD86XFx7XFx7KH4pP1xceykvLCAvXig/Olxce1xceyh+KT8mKS8sIC9eKD86XFx7XFx7KH4pPyEtLSkvLCAvXig/Olxce1xceyh+KT8hW1xcc1xcU10qP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXCo/KS8sIC9eKD86PSkvLCAvXig/OlxcLlxcLikvLCAvXig/OlxcLig/PShbPX59XFxzXFwvLil8XSkpKS8sIC9eKD86W1xcLy5dKS8sIC9eKD86XFxzKykvLCAvXig/OlxcfSh+KT9cXH1cXH0pLywgL14oPzoofik/XFx9XFx9KS8sIC9eKD86XCIoXFxcXFtcIl18W15cIl0pKlwiKS8sIC9eKD86JyhcXFxcWyddfFteJ10pKicpLywgL14oPzpAKS8sIC9eKD86dHJ1ZSg/PShbfn1cXHMpXSkpKS8sIC9eKD86ZmFsc2UoPz0oW359XFxzKV0pKSkvLCAvXig/OnVuZGVmaW5lZCg/PShbfn1cXHMpXSkpKS8sIC9eKD86bnVsbCg/PShbfn1cXHMpXSkpKS8sIC9eKD86LT9bMC05XSsoPzpcXC5bMC05XSspPyg/PShbfn1cXHMpXSkpKS8sIC9eKD86YXNcXHMrXFx8KS8sIC9eKD86XFx8KS8sIC9eKD86KFteXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz0oWz1+fVxcc1xcLy4pfF0pKSkpLywgL14oPzpcXFsoXFxcXFxcXXxbXlxcXV0pKlxcXSkvLCAvXig/Oi4pLywgL14oPzokKS9dO1xuXHQgICAgICAgIGxleGVyLmNvbmRpdGlvbnMgPSB7IFwibXVcIjogeyBcInJ1bGVzXCI6IFs3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDRdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImVtdVwiOiB7IFwicnVsZXNcIjogWzJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNvbVwiOiB7IFwicnVsZXNcIjogWzZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInJhd1wiOiB7IFwicnVsZXNcIjogWzMsIDQsIDVdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCA0NF0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9O1xuXHQgICAgICAgIHJldHVybiBsZXhlcjtcblx0ICAgIH0pKCk7XG5cdCAgICBwYXJzZXIubGV4ZXIgPSBsZXhlcjtcblx0ICAgIGZ1bmN0aW9uIFBhcnNlcigpIHtcblx0ICAgICAgICB0aGlzLnl5ID0ge307XG5cdCAgICB9UGFyc2VyLnByb3RvdHlwZSA9IHBhcnNlcjtwYXJzZXIuUGFyc2VyID0gUGFyc2VyO1xuXHQgICAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcblx0fSkoKTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGhhbmRsZWJhcnM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0pLFxuLyogMzggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3Zpc2l0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblxuXHR2YXIgX3Zpc2l0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmlzaXRvcik7XG5cblx0ZnVuY3Rpb24gV2hpdGVzcGFjZUNvbnRyb2woKSB7XG5cdCAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuXHQgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlID0gbmV3IF92aXNpdG9yMlsnZGVmYXVsdCddKCk7XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlByb2dyYW0gPSBmdW5jdGlvbiAocHJvZ3JhbSkge1xuXHQgIHZhciBkb1N0YW5kYWxvbmUgPSAhdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmU7XG5cblx0ICB2YXIgaXNSb290ID0gIXRoaXMuaXNSb290U2Vlbjtcblx0ICB0aGlzLmlzUm9vdFNlZW4gPSB0cnVlO1xuXG5cdCAgdmFyIGJvZHkgPSBwcm9ncmFtLmJvZHk7XG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSBib2R5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgdmFyIGN1cnJlbnQgPSBib2R5W2ldLFxuXHQgICAgICAgIHN0cmlwID0gdGhpcy5hY2NlcHQoY3VycmVudCk7XG5cblx0ICAgIGlmICghc3RyaXApIHtcblx0ICAgICAgY29udGludWU7XG5cdCAgICB9XG5cblx0ICAgIHZhciBfaXNQcmV2V2hpdGVzcGFjZSA9IGlzUHJldldoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSxcblx0ICAgICAgICBfaXNOZXh0V2hpdGVzcGFjZSA9IGlzTmV4dFdoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSxcblx0ICAgICAgICBvcGVuU3RhbmRhbG9uZSA9IHN0cmlwLm9wZW5TdGFuZGFsb25lICYmIF9pc1ByZXZXaGl0ZXNwYWNlLFxuXHQgICAgICAgIGNsb3NlU3RhbmRhbG9uZSA9IHN0cmlwLmNsb3NlU3RhbmRhbG9uZSAmJiBfaXNOZXh0V2hpdGVzcGFjZSxcblx0ICAgICAgICBpbmxpbmVTdGFuZGFsb25lID0gc3RyaXAuaW5saW5lU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSAmJiBfaXNOZXh0V2hpdGVzcGFjZTtcblxuXHQgICAgaWYgKHN0cmlwLmNsb3NlKSB7XG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpLCB0cnVlKTtcblx0ICAgIH1cblx0ICAgIGlmIChzdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KGJvZHksIGksIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGlubGluZVN0YW5kYWxvbmUpIHtcblx0ICAgICAgb21pdFJpZ2h0KGJvZHksIGkpO1xuXG5cdCAgICAgIGlmIChvbWl0TGVmdChib2R5LCBpKSkge1xuXHQgICAgICAgIC8vIElmIHdlIGFyZSBvbiBhIHN0YW5kYWxvbmUgbm9kZSwgc2F2ZSB0aGUgaW5kZW50IGluZm8gZm9yIHBhcnRpYWxzXG5cdCAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ1BhcnRpYWxTdGF0ZW1lbnQnKSB7XG5cdCAgICAgICAgICAvLyBQdWxsIG91dCB0aGUgd2hpdGVzcGFjZSBmcm9tIHRoZSBmaW5hbCBsaW5lXG5cdCAgICAgICAgICBjdXJyZW50LmluZGVudCA9IC8oWyBcXHRdKyQpLy5leGVjKGJvZHlbaSAtIDFdLm9yaWdpbmFsKVsxXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIGlmIChkb1N0YW5kYWxvbmUgJiYgb3BlblN0YW5kYWxvbmUpIHtcblx0ICAgICAgb21pdFJpZ2h0KChjdXJyZW50LnByb2dyYW0gfHwgY3VycmVudC5pbnZlcnNlKS5ib2R5KTtcblxuXHQgICAgICAvLyBTdHJpcCBvdXQgdGhlIHByZXZpb3VzIGNvbnRlbnQgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seVxuXHQgICAgICBvbWl0TGVmdChib2R5LCBpKTtcblx0ICAgIH1cblx0ICAgIGlmIChkb1N0YW5kYWxvbmUgJiYgY2xvc2VTdGFuZGFsb25lKSB7XG5cdCAgICAgIC8vIEFsd2F5cyBzdHJpcCB0aGUgbmV4dCBub2RlXG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuXHQgICAgICBvbWl0TGVmdCgoY3VycmVudC5pbnZlcnNlIHx8IGN1cnJlbnQucHJvZ3JhbSkuYm9keSk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHByb2dyYW07XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkJsb2NrU3RhdGVtZW50ID0gV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkRlY29yYXRvckJsb2NrID0gV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxCbG9ja1N0YXRlbWVudCA9IGZ1bmN0aW9uIChibG9jaykge1xuXHQgIHRoaXMuYWNjZXB0KGJsb2NrLnByb2dyYW0pO1xuXHQgIHRoaXMuYWNjZXB0KGJsb2NrLmludmVyc2UpO1xuXG5cdCAgLy8gRmluZCB0aGUgaW52ZXJzZSBwcm9ncmFtIHRoYXQgaXMgaW52b2xlZCB3aXRoIHdoaXRlc3BhY2Ugc3RyaXBwaW5nLlxuXHQgIHZhciBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSB8fCBibG9jay5pbnZlcnNlLFxuXHQgICAgICBpbnZlcnNlID0gYmxvY2sucHJvZ3JhbSAmJiBibG9jay5pbnZlcnNlLFxuXHQgICAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLFxuXHQgICAgICBsYXN0SW52ZXJzZSA9IGludmVyc2U7XG5cblx0ICBpZiAoaW52ZXJzZSAmJiBpbnZlcnNlLmNoYWluZWQpIHtcblx0ICAgIGZpcnN0SW52ZXJzZSA9IGludmVyc2UuYm9keVswXS5wcm9ncmFtO1xuXG5cdCAgICAvLyBXYWxrIHRoZSBpbnZlcnNlIGNoYWluIHRvIGZpbmQgdGhlIGxhc3QgaW52ZXJzZSB0aGF0IGlzIGFjdHVhbGx5IGluIHRoZSBjaGFpbi5cblx0ICAgIHdoaWxlIChsYXN0SW52ZXJzZS5jaGFpbmVkKSB7XG5cdCAgICAgIGxhc3RJbnZlcnNlID0gbGFzdEludmVyc2UuYm9keVtsYXN0SW52ZXJzZS5ib2R5Lmxlbmd0aCAtIDFdLnByb2dyYW07XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgdmFyIHN0cmlwID0ge1xuXHQgICAgb3BlbjogYmxvY2sub3BlblN0cmlwLm9wZW4sXG5cdCAgICBjbG9zZTogYmxvY2suY2xvc2VTdHJpcC5jbG9zZSxcblxuXHQgICAgLy8gRGV0ZXJtaW5lIHRoZSBzdGFuZGFsb25lIGNhbmRpYWN5LiBCYXNpY2FsbHkgZmxhZyBvdXIgY29udGVudCBhcyBiZWluZyBwb3NzaWJseSBzdGFuZGFsb25lXG5cdCAgICAvLyBzbyBvdXIgcGFyZW50IGNhbiBkZXRlcm1pbmUgaWYgd2UgYWN0dWFsbHkgYXJlIHN0YW5kYWxvbmVcblx0ICAgIG9wZW5TdGFuZGFsb25lOiBpc05leHRXaGl0ZXNwYWNlKHByb2dyYW0uYm9keSksXG5cdCAgICBjbG9zZVN0YW5kYWxvbmU6IGlzUHJldldoaXRlc3BhY2UoKGZpcnN0SW52ZXJzZSB8fCBwcm9ncmFtKS5ib2R5KVxuXHQgIH07XG5cblx0ICBpZiAoYmxvY2sub3BlblN0cmlwLmNsb3NlKSB7XG5cdCAgICBvbWl0UmlnaHQocHJvZ3JhbS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICB9XG5cblx0ICBpZiAoaW52ZXJzZSkge1xuXHQgICAgdmFyIGludmVyc2VTdHJpcCA9IGJsb2NrLmludmVyc2VTdHJpcDtcblxuXHQgICAgaWYgKGludmVyc2VTdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpbnZlcnNlU3RyaXAuY2xvc2UpIHtcblx0ICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICAgIH1cblx0ICAgIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcblx0ICAgICAgb21pdExlZnQobGFzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZpbmQgc3RhbmRhbG9uZSBlbHNlIHN0YXRtZW50c1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuaWdub3JlU3RhbmRhbG9uZSAmJiBpc1ByZXZXaGl0ZXNwYWNlKHByb2dyYW0uYm9keSkgJiYgaXNOZXh0V2hpdGVzcGFjZShmaXJzdEludmVyc2UuYm9keSkpIHtcblx0ICAgICAgb21pdExlZnQocHJvZ3JhbS5ib2R5KTtcblx0ICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5KTtcblx0ICAgIH1cblx0ICB9IGVsc2UgaWYgKGJsb2NrLmNsb3NlU3RyaXAub3Blbikge1xuXHQgICAgb21pdExlZnQocHJvZ3JhbS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICB9XG5cblx0ICByZXR1cm4gc3RyaXA7XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkRlY29yYXRvciA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5NdXN0YWNoZVN0YXRlbWVudCA9IGZ1bmN0aW9uIChtdXN0YWNoZSkge1xuXHQgIHJldHVybiBtdXN0YWNoZS5zdHJpcDtcblx0fTtcblxuXHRXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUGFydGlhbFN0YXRlbWVudCA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Db21tZW50U3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIHZhciBzdHJpcCA9IG5vZGUuc3RyaXAgfHwge307XG5cdCAgcmV0dXJuIHtcblx0ICAgIGlubGluZVN0YW5kYWxvbmU6IHRydWUsXG5cdCAgICBvcGVuOiBzdHJpcC5vcGVuLFxuXHQgICAgY2xvc2U6IHN0cmlwLmNsb3NlXG5cdCAgfTtcblx0fTtcblxuXHRmdW5jdGlvbiBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0ICAgIGkgPSBib2R5Lmxlbmd0aDtcblx0ICB9XG5cblx0ICAvLyBOb2RlcyB0aGF0IGVuZCB3aXRoIG5ld2xpbmVzIGFyZSBjb25zaWRlcmVkIHdoaXRlc3BhY2UgKGJ1dCBhcmUgc3BlY2lhbFxuXHQgIC8vIGNhc2VkIGZvciBzdHJpcCBvcGVyYXRpb25zKVxuXHQgIHZhciBwcmV2ID0gYm9keVtpIC0gMV0sXG5cdCAgICAgIHNpYmxpbmcgPSBib2R5W2kgLSAyXTtcblx0ICBpZiAoIXByZXYpIHtcblx0ICAgIHJldHVybiBpc1Jvb3Q7XG5cdCAgfVxuXG5cdCAgaWYgKHByZXYudHlwZSA9PT0gJ0NvbnRlbnRTdGF0ZW1lbnQnKSB7XG5cdCAgICByZXR1cm4gKHNpYmxpbmcgfHwgIWlzUm9vdCA/IC9cXHI/XFxuXFxzKj8kLyA6IC8oXnxcXHI/XFxuKVxccyo/JC8pLnRlc3QocHJldi5vcmlnaW5hbCk7XG5cdCAgfVxuXHR9XG5cdGZ1bmN0aW9uIGlzTmV4dFdoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSB7XG5cdCAgaWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgaSA9IC0xO1xuXHQgIH1cblxuXHQgIHZhciBuZXh0ID0gYm9keVtpICsgMV0sXG5cdCAgICAgIHNpYmxpbmcgPSBib2R5W2kgKyAyXTtcblx0ICBpZiAoIW5leHQpIHtcblx0ICAgIHJldHVybiBpc1Jvb3Q7XG5cdCAgfVxuXG5cdCAgaWYgKG5leHQudHlwZSA9PT0gJ0NvbnRlbnRTdGF0ZW1lbnQnKSB7XG5cdCAgICByZXR1cm4gKHNpYmxpbmcgfHwgIWlzUm9vdCA/IC9eXFxzKj9cXHI/XFxuLyA6IC9eXFxzKj8oXFxyP1xcbnwkKS8pLnRlc3QobmV4dC5vcmlnaW5hbCk7XG5cdCAgfVxuXHR9XG5cblx0Ly8gTWFya3MgdGhlIG5vZGUgdG8gdGhlIHJpZ2h0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuXHQvLyBJLmUuIHt7Zm9vfX0nICcgd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuXHQvL1xuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCwgdGhlbiB0aGUgZmlyc3QgY2hpbGQgd2lsbCBiZSBtYXJrZWQgYXMgc3VjaC5cblx0Ly9cblx0Ly8gSWYgbXVsaXRwbGUgaXMgdHJ1dGh5IHRoZW4gYWxsIHdoaXRlc3BhY2Ugd2lsbCBiZSBzdHJpcHBlZCBvdXQgdW50aWwgbm9uLXdoaXRlc3BhY2Vcblx0Ly8gY29udGVudCBpcyBtZXQuXG5cdGZ1bmN0aW9uIG9taXRSaWdodChib2R5LCBpLCBtdWx0aXBsZSkge1xuXHQgIHZhciBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyAwIDogaSArIDFdO1xuXHQgIGlmICghY3VycmVudCB8fCBjdXJyZW50LnR5cGUgIT09ICdDb250ZW50U3RhdGVtZW50JyB8fCAhbXVsdGlwbGUgJiYgY3VycmVudC5yaWdodFN0cmlwcGVkKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXG5cdCAgdmFyIG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcblx0ICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gL15cXHMrLyA6IC9eWyBcXHRdKlxccj9cXG4/LywgJycpO1xuXHQgIGN1cnJlbnQucmlnaHRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xuXHR9XG5cblx0Ly8gTWFya3MgdGhlIG5vZGUgdG8gdGhlIGxlZnQgb2YgdGhlIHBvc2l0aW9uIGFzIG9taXR0ZWQuXG5cdC8vIEkuZS4gJyAne3tmb299fSB3aWxsIG1hcmsgdGhlICcgJyBub2RlIGFzIG9taXR0ZWQuXG5cdC8vXG5cdC8vIElmIGkgaXMgdW5kZWZpbmVkIHRoZW4gdGhlIGxhc3QgY2hpbGQgd2lsbCBiZSBtYXJrZWQgYXMgc3VjaC5cblx0Ly9cblx0Ly8gSWYgbXVsaXRwbGUgaXMgdHJ1dGh5IHRoZW4gYWxsIHdoaXRlc3BhY2Ugd2lsbCBiZSBzdHJpcHBlZCBvdXQgdW50aWwgbm9uLXdoaXRlc3BhY2Vcblx0Ly8gY29udGVudCBpcyBtZXQuXG5cdGZ1bmN0aW9uIG9taXRMZWZ0KGJvZHksIGksIG11bHRpcGxlKSB7XG5cdCAgdmFyIGN1cnJlbnQgPSBib2R5W2kgPT0gbnVsbCA/IGJvZHkubGVuZ3RoIC0gMSA6IGkgLSAxXTtcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQubGVmdFN0cmlwcGVkKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXG5cdCAgLy8gV2Ugb21pdCB0aGUgbGFzdCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5IGFuZCBub3QgcHJlY2VlZGVkIGJ5IGEgbm9uLWNvbnRlbnQgbm9kZS5cblx0ICB2YXIgb3JpZ2luYWwgPSBjdXJyZW50LnZhbHVlO1xuXHQgIGN1cnJlbnQudmFsdWUgPSBjdXJyZW50LnZhbHVlLnJlcGxhY2UobXVsdGlwbGUgPyAvXFxzKyQvIDogL1sgXFx0XSskLywgJycpO1xuXHQgIGN1cnJlbnQubGVmdFN0cmlwcGVkID0gY3VycmVudC52YWx1ZSAhPT0gb3JpZ2luYWw7XG5cdCAgcmV0dXJuIGN1cnJlbnQubGVmdFN0cmlwcGVkO1xuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gV2hpdGVzcGFjZUNvbnRyb2w7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDM5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZnVuY3Rpb24gVmlzaXRvcigpIHtcblx0ICB0aGlzLnBhcmVudHMgPSBbXTtcblx0fVxuXG5cdFZpc2l0b3IucHJvdG90eXBlID0ge1xuXHQgIGNvbnN0cnVjdG9yOiBWaXNpdG9yLFxuXHQgIG11dGF0aW5nOiBmYWxzZSxcblxuXHQgIC8vIFZpc2l0cyBhIGdpdmVuIHZhbHVlLiBJZiBtdXRhdGluZywgd2lsbCByZXBsYWNlIHRoZSB2YWx1ZSBpZiBuZWNlc3NhcnkuXG5cdCAgYWNjZXB0S2V5OiBmdW5jdGlvbiBhY2NlcHRLZXkobm9kZSwgbmFtZSkge1xuXHQgICAgdmFyIHZhbHVlID0gdGhpcy5hY2NlcHQobm9kZVtuYW1lXSk7XG5cdCAgICBpZiAodGhpcy5tdXRhdGluZykge1xuXHQgICAgICAvLyBIYWNreSBzYW5pdHkgY2hlY2s6IFRoaXMgbWF5IGhhdmUgYSBmZXcgZmFsc2UgcG9zaXRpdmVzIGZvciB0eXBlIGZvciB0aGUgaGVscGVyXG5cdCAgICAgIC8vIG1ldGhvZHMgYnV0IHdpbGwgZ2VuZXJhbGx5IGRvIHRoZSByaWdodCB0aGluZyB3aXRob3V0IGEgbG90IG9mIG92ZXJoZWFkLlxuXHQgICAgICBpZiAodmFsdWUgJiYgIVZpc2l0b3IucHJvdG90eXBlW3ZhbHVlLnR5cGVdKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1VuZXhwZWN0ZWQgbm9kZSB0eXBlIFwiJyArIHZhbHVlLnR5cGUgKyAnXCIgZm91bmQgd2hlbiBhY2NlcHRpbmcgJyArIG5hbWUgKyAnIG9uICcgKyBub2RlLnR5cGUpO1xuXHQgICAgICB9XG5cdCAgICAgIG5vZGVbbmFtZV0gPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gUGVyZm9ybXMgYW4gYWNjZXB0IG9wZXJhdGlvbiB3aXRoIGFkZGVkIHNhbml0eSBjaGVjayB0byBlbnN1cmVcblx0ICAvLyByZXF1aXJlZCBrZXlzIGFyZSBub3QgcmVtb3ZlZC5cblx0ICBhY2NlcHRSZXF1aXJlZDogZnVuY3Rpb24gYWNjZXB0UmVxdWlyZWQobm9kZSwgbmFtZSkge1xuXHQgICAgdGhpcy5hY2NlcHRLZXkobm9kZSwgbmFtZSk7XG5cblx0ICAgIGlmICghbm9kZVtuYW1lXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShub2RlLnR5cGUgKyAnIHJlcXVpcmVzICcgKyBuYW1lKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gVHJhdmVyc2VzIGEgZ2l2ZW4gYXJyYXkuIElmIG11dGF0aW5nLCBlbXB0eSByZXNwbnNlcyB3aWxsIGJlIHJlbW92ZWRcblx0ICAvLyBmb3IgY2hpbGQgZWxlbWVudHMuXG5cdCAgYWNjZXB0QXJyYXk6IGZ1bmN0aW9uIGFjY2VwdEFycmF5KGFycmF5KSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdEtleShhcnJheSwgaSk7XG5cblx0ICAgICAgaWYgKCFhcnJheVtpXSkge1xuXHQgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcblx0ICAgICAgICBpLS07XG5cdCAgICAgICAgbC0tO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KG9iamVjdCkge1xuXHQgICAgaWYgKCFvYmplY3QpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogU2FuaXR5IGNvZGUgKi9cblx0ICAgIGlmICghdGhpc1tvYmplY3QudHlwZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdHlwZTogJyArIG9iamVjdC50eXBlLCBvYmplY3QpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5jdXJyZW50KSB7XG5cdCAgICAgIHRoaXMucGFyZW50cy51bnNoaWZ0KHRoaXMuY3VycmVudCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLmN1cnJlbnQgPSBvYmplY3Q7XG5cblx0ICAgIHZhciByZXQgPSB0aGlzW29iamVjdC50eXBlXShvYmplY3QpO1xuXG5cdCAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhcmVudHMuc2hpZnQoKTtcblxuXHQgICAgaWYgKCF0aGlzLm11dGF0aW5nIHx8IHJldCkge1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSBlbHNlIGlmIChyZXQgIT09IGZhbHNlKSB7XG5cdCAgICAgIHJldHVybiBvYmplY3Q7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFByb2dyYW06IGZ1bmN0aW9uIFByb2dyYW0ocHJvZ3JhbSkge1xuXHQgICAgdGhpcy5hY2NlcHRBcnJheShwcm9ncmFtLmJvZHkpO1xuXHQgIH0sXG5cblx0ICBNdXN0YWNoZVN0YXRlbWVudDogdmlzaXRTdWJFeHByZXNzaW9uLFxuXHQgIERlY29yYXRvcjogdmlzaXRTdWJFeHByZXNzaW9uLFxuXG5cdCAgQmxvY2tTdGF0ZW1lbnQ6IHZpc2l0QmxvY2ssXG5cdCAgRGVjb3JhdG9yQmxvY2s6IHZpc2l0QmxvY2ssXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiB2aXNpdFBhcnRpYWwsXG5cdCAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQocGFydGlhbCkge1xuXHQgICAgdmlzaXRQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCk7XG5cblx0ICAgIHRoaXMuYWNjZXB0S2V5KHBhcnRpYWwsICdwcm9ncmFtJyk7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoKSAvKiBjb250ZW50ICove30sXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIC8qIGNvbW1lbnQgKi97fSxcblxuXHQgIFN1YkV4cHJlc3Npb246IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbigpIC8qIHBhdGggKi97fSxcblxuXHQgIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uIFN0cmluZ0xpdGVyYWwoKSAvKiBzdHJpbmcgKi97fSxcblx0ICBOdW1iZXJMaXRlcmFsOiBmdW5jdGlvbiBOdW1iZXJMaXRlcmFsKCkgLyogbnVtYmVyICove30sXG5cdCAgQm9vbGVhbkxpdGVyYWw6IGZ1bmN0aW9uIEJvb2xlYW5MaXRlcmFsKCkgLyogYm9vbCAqL3t9LFxuXHQgIFVuZGVmaW5lZExpdGVyYWw6IGZ1bmN0aW9uIFVuZGVmaW5lZExpdGVyYWwoKSAvKiBsaXRlcmFsICove30sXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB0aGlzLmFjY2VwdEFycmF5KGhhc2gucGFpcnMpO1xuXHQgIH0sXG5cdCAgSGFzaFBhaXI6IGZ1bmN0aW9uIEhhc2hQYWlyKHBhaXIpIHtcblx0ICAgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFpciwgJ3ZhbHVlJyk7XG5cdCAgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHZpc2l0U3ViRXhwcmVzc2lvbihtdXN0YWNoZSkge1xuXHQgIHRoaXMuYWNjZXB0UmVxdWlyZWQobXVzdGFjaGUsICdwYXRoJyk7XG5cdCAgdGhpcy5hY2NlcHRBcnJheShtdXN0YWNoZS5wYXJhbXMpO1xuXHQgIHRoaXMuYWNjZXB0S2V5KG11c3RhY2hlLCAnaGFzaCcpO1xuXHR9XG5cdGZ1bmN0aW9uIHZpc2l0QmxvY2soYmxvY2spIHtcblx0ICB2aXNpdFN1YkV4cHJlc3Npb24uY2FsbCh0aGlzLCBibG9jayk7XG5cblx0ICB0aGlzLmFjY2VwdEtleShibG9jaywgJ3Byb2dyYW0nKTtcblx0ICB0aGlzLmFjY2VwdEtleShibG9jaywgJ2ludmVyc2UnKTtcblx0fVxuXHRmdW5jdGlvbiB2aXNpdFBhcnRpYWwocGFydGlhbCkge1xuXHQgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFydGlhbCwgJ25hbWUnKTtcblx0ICB0aGlzLmFjY2VwdEFycmF5KHBhcnRpYWwucGFyYW1zKTtcblx0ICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAnaGFzaCcpO1xuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVmlzaXRvcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5Tb3VyY2VMb2NhdGlvbiA9IFNvdXJjZUxvY2F0aW9uO1xuXHRleHBvcnRzLmlkID0gaWQ7XG5cdGV4cG9ydHMuc3RyaXBGbGFncyA9IHN0cmlwRmxhZ3M7XG5cdGV4cG9ydHMuc3RyaXBDb21tZW50ID0gc3RyaXBDb21tZW50O1xuXHRleHBvcnRzLnByZXBhcmVQYXRoID0gcHJlcGFyZVBhdGg7XG5cdGV4cG9ydHMucHJlcGFyZU11c3RhY2hlID0gcHJlcGFyZU11c3RhY2hlO1xuXHRleHBvcnRzLnByZXBhcmVSYXdCbG9jayA9IHByZXBhcmVSYXdCbG9jaztcblx0ZXhwb3J0cy5wcmVwYXJlQmxvY2sgPSBwcmVwYXJlQmxvY2s7XG5cdGV4cG9ydHMucHJlcGFyZVByb2dyYW0gPSBwcmVwYXJlUHJvZ3JhbTtcblx0ZXhwb3J0cy5wcmVwYXJlUGFydGlhbEJsb2NrID0gcHJlcGFyZVBhcnRpYWxCbG9jaztcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRmdW5jdGlvbiB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKSB7XG5cdCAgY2xvc2UgPSBjbG9zZS5wYXRoID8gY2xvc2UucGF0aC5vcmlnaW5hbCA6IGNsb3NlO1xuXG5cdCAgaWYgKG9wZW4ucGF0aC5vcmlnaW5hbCAhPT0gY2xvc2UpIHtcblx0ICAgIHZhciBlcnJvck5vZGUgPSB7IGxvYzogb3Blbi5wYXRoLmxvYyB9O1xuXG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShvcGVuLnBhdGgub3JpZ2luYWwgKyBcIiBkb2Vzbid0IG1hdGNoIFwiICsgY2xvc2UsIGVycm9yTm9kZSk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gU291cmNlTG9jYXRpb24oc291cmNlLCBsb2NJbmZvKSB7XG5cdCAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdCAgdGhpcy5zdGFydCA9IHtcblx0ICAgIGxpbmU6IGxvY0luZm8uZmlyc3RfbGluZSxcblx0ICAgIGNvbHVtbjogbG9jSW5mby5maXJzdF9jb2x1bW5cblx0ICB9O1xuXHQgIHRoaXMuZW5kID0ge1xuXHQgICAgbGluZTogbG9jSW5mby5sYXN0X2xpbmUsXG5cdCAgICBjb2x1bW46IGxvY0luZm8ubGFzdF9jb2x1bW5cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaWQodG9rZW4pIHtcblx0ICBpZiAoL15cXFsuKlxcXSQvLnRlc3QodG9rZW4pKSB7XG5cdCAgICByZXR1cm4gdG9rZW4uc3Vic3RyKDEsIHRva2VuLmxlbmd0aCAtIDIpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZXR1cm4gdG9rZW47XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gc3RyaXBGbGFncyhvcGVuLCBjbG9zZSkge1xuXHQgIHJldHVybiB7XG5cdCAgICBvcGVuOiBvcGVuLmNoYXJBdCgyKSA9PT0gJ34nLFxuXHQgICAgY2xvc2U6IGNsb3NlLmNoYXJBdChjbG9zZS5sZW5ndGggLSAzKSA9PT0gJ34nXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmlwQ29tbWVudChjb21tZW50KSB7XG5cdCAgcmV0dXJuIGNvbW1lbnQucmVwbGFjZSgvXlxce1xce34/IS0/LT8vLCAnJykucmVwbGFjZSgvLT8tP34/XFx9XFx9JC8sICcnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXRoKGRhdGEsIHBhcnRzLCBsb2MpIHtcblx0ICBsb2MgPSB0aGlzLmxvY0luZm8obG9jKTtcblxuXHQgIHZhciBvcmlnaW5hbCA9IGRhdGEgPyAnQCcgOiAnJyxcblx0ICAgICAgZGlnID0gW10sXG5cdCAgICAgIGRlcHRoID0gMDtcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICB2YXIgcGFydCA9IHBhcnRzW2ldLnBhcnQsXG5cblx0ICAgIC8vIElmIHdlIGhhdmUgW10gc3ludGF4IHRoZW4gd2UgZG8gbm90IHRyZWF0IHBhdGggcmVmZXJlbmNlcyBhcyBvcGVyYXRvcnMsXG5cdCAgICAvLyBpLmUuIGZvby5bdGhpc10gcmVzb2x2ZXMgdG8gYXBwcm94aW1hdGVseSBjb250ZXh0LmZvb1sndGhpcyddXG5cdCAgICBpc0xpdGVyYWwgPSBwYXJ0c1tpXS5vcmlnaW5hbCAhPT0gcGFydDtcblx0ICAgIG9yaWdpbmFsICs9IChwYXJ0c1tpXS5zZXBhcmF0b3IgfHwgJycpICsgcGFydDtcblxuXHQgICAgaWYgKCFpc0xpdGVyYWwgJiYgKHBhcnQgPT09ICcuLicgfHwgcGFydCA9PT0gJy4nIHx8IHBhcnQgPT09ICd0aGlzJykpIHtcblx0ICAgICAgaWYgKGRpZy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgcGF0aDogJyArIG9yaWdpbmFsLCB7IGxvYzogbG9jIH0pO1xuXHQgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcblx0ICAgICAgICBkZXB0aCsrO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBkaWcucHVzaChwYXJ0KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgIGRhdGE6IGRhdGEsXG5cdCAgICBkZXB0aDogZGVwdGgsXG5cdCAgICBwYXJ0czogZGlnLFxuXHQgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuXHQgICAgbG9jOiBsb2Ncblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZU11c3RhY2hlKHBhdGgsIHBhcmFtcywgaGFzaCwgb3Blbiwgc3RyaXAsIGxvY0luZm8pIHtcblx0ICAvLyBNdXN0IHVzZSBjaGFyQXQgdG8gc3VwcG9ydCBJRSBwcmUtMTBcblx0ICB2YXIgZXNjYXBlRmxhZyA9IG9wZW4uY2hhckF0KDMpIHx8IG9wZW4uY2hhckF0KDIpLFxuXHQgICAgICBlc2NhcGVkID0gZXNjYXBlRmxhZyAhPT0gJ3snICYmIGVzY2FwZUZsYWcgIT09ICcmJztcblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW4pO1xuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yJyA6ICdNdXN0YWNoZVN0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBwYXRoLFxuXHQgICAgcGFyYW1zOiBwYXJhbXMsXG5cdCAgICBoYXNoOiBoYXNoLFxuXHQgICAgZXNjYXBlZDogZXNjYXBlZCxcblx0ICAgIHN0cmlwOiBzdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVSYXdCbG9jayhvcGVuUmF3QmxvY2ssIGNvbnRlbnRzLCBjbG9zZSwgbG9jSW5mbykge1xuXHQgIHZhbGlkYXRlQ2xvc2Uob3BlblJhd0Jsb2NrLCBjbG9zZSk7XG5cblx0ICBsb2NJbmZvID0gdGhpcy5sb2NJbmZvKGxvY0luZm8pO1xuXHQgIHZhciBwcm9ncmFtID0ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogY29udGVudHMsXG5cdCAgICBzdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBvcGVuUmF3QmxvY2sucGF0aCxcblx0ICAgIHBhcmFtczogb3BlblJhd0Jsb2NrLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW5SYXdCbG9jay5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIG9wZW5TdHJpcDoge30sXG5cdCAgICBpbnZlcnNlU3RyaXA6IHt9LFxuXHQgICAgY2xvc2VTdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZUJsb2NrKG9wZW5CbG9jaywgcHJvZ3JhbSwgaW52ZXJzZUFuZFByb2dyYW0sIGNsb3NlLCBpbnZlcnRlZCwgbG9jSW5mbykge1xuXHQgIGlmIChjbG9zZSAmJiBjbG9zZS5wYXRoKSB7XG5cdCAgICB2YWxpZGF0ZUNsb3NlKG9wZW5CbG9jaywgY2xvc2UpO1xuXHQgIH1cblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW5CbG9jay5vcGVuKTtcblxuXHQgIHByb2dyYW0uYmxvY2tQYXJhbXMgPSBvcGVuQmxvY2suYmxvY2tQYXJhbXM7XG5cblx0ICB2YXIgaW52ZXJzZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgaW52ZXJzZVN0cmlwID0gdW5kZWZpbmVkO1xuXG5cdCAgaWYgKGludmVyc2VBbmRQcm9ncmFtKSB7XG5cdCAgICBpZiAoZGVjb3JhdG9yKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yJywgaW52ZXJzZUFuZFByb2dyYW0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZUFuZFByb2dyYW0uY2hhaW4pIHtcblx0ICAgICAgaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbS5ib2R5WzBdLmNsb3NlU3RyaXAgPSBjbG9zZS5zdHJpcDtcblx0ICAgIH1cblxuXHQgICAgaW52ZXJzZVN0cmlwID0gaW52ZXJzZUFuZFByb2dyYW0uc3RyaXA7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbTtcblx0ICB9XG5cblx0ICBpZiAoaW52ZXJ0ZWQpIHtcblx0ICAgIGludmVydGVkID0gaW52ZXJzZTtcblx0ICAgIGludmVyc2UgPSBwcm9ncmFtO1xuXHQgICAgcHJvZ3JhbSA9IGludmVydGVkO1xuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yQmxvY2snIDogJ0Jsb2NrU3RhdGVtZW50Jyxcblx0ICAgIHBhdGg6IG9wZW5CbG9jay5wYXRoLFxuXHQgICAgcGFyYW1zOiBvcGVuQmxvY2sucGFyYW1zLFxuXHQgICAgaGFzaDogb3BlbkJsb2NrLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgaW52ZXJzZTogaW52ZXJzZSxcblx0ICAgIG9wZW5TdHJpcDogb3BlbkJsb2NrLnN0cmlwLFxuXHQgICAgaW52ZXJzZVN0cmlwOiBpbnZlcnNlU3RyaXAsXG5cdCAgICBjbG9zZVN0cmlwOiBjbG9zZSAmJiBjbG9zZS5zdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQcm9ncmFtKHN0YXRlbWVudHMsIGxvYykge1xuXHQgIGlmICghbG9jICYmIHN0YXRlbWVudHMubGVuZ3RoKSB7XG5cdCAgICB2YXIgZmlyc3RMb2MgPSBzdGF0ZW1lbnRzWzBdLmxvYyxcblx0ICAgICAgICBsYXN0TG9jID0gc3RhdGVtZW50c1tzdGF0ZW1lbnRzLmxlbmd0aCAtIDFdLmxvYztcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICAgIGlmIChmaXJzdExvYyAmJiBsYXN0TG9jKSB7XG5cdCAgICAgIGxvYyA9IHtcblx0ICAgICAgICBzb3VyY2U6IGZpcnN0TG9jLnNvdXJjZSxcblx0ICAgICAgICBzdGFydDoge1xuXHQgICAgICAgICAgbGluZTogZmlyc3RMb2Muc3RhcnQubGluZSxcblx0ICAgICAgICAgIGNvbHVtbjogZmlyc3RMb2Muc3RhcnQuY29sdW1uXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBlbmQ6IHtcblx0ICAgICAgICAgIGxpbmU6IGxhc3RMb2MuZW5kLmxpbmUsXG5cdCAgICAgICAgICBjb2x1bW46IGxhc3RMb2MuZW5kLmNvbHVtblxuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogc3RhdGVtZW50cyxcblx0ICAgIHN0cmlwOiB7fSxcblx0ICAgIGxvYzogbG9jXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXJ0aWFsQmxvY2sob3BlbiwgcHJvZ3JhbSwgY2xvc2UsIGxvY0luZm8pIHtcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKTtcblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnUGFydGlhbEJsb2NrU3RhdGVtZW50Jyxcblx0ICAgIG5hbWU6IG9wZW4ucGF0aCxcblx0ICAgIHBhcmFtczogb3Blbi5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgb3BlblN0cmlwOiBvcGVuLnN0cmlwLFxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5Db21waWxlciA9IENvbXBpbGVyO1xuXHRleHBvcnRzLnByZWNvbXBpbGUgPSBwcmVjb21waWxlO1xuXHRleHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfYXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0dmFyIF9hc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXN0KTtcblxuXHR2YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuXHRmdW5jdGlvbiBDb21waWxlcigpIHt9XG5cblx0Ly8gdGhlIGZvdW5kSGVscGVyIHJlZ2lzdGVyIHdpbGwgZGlzYW1iaWd1YXRlIGhlbHBlciBsb29rdXAgZnJvbSBmaW5kaW5nIGFcblx0Ly8gZnVuY3Rpb24gaW4gYSBjb250ZXh0LiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbXVzdGFjaGUgY29tcGF0aWJpbGl0eSwgd2hpY2hcblx0Ly8gcmVxdWlyZXMgdGhhdCBjb250ZXh0IGZ1bmN0aW9ucyBpbiBibG9ja3MgYXJlIGV2YWx1YXRlZCBieSBibG9ja0hlbHBlck1pc3NpbmcsXG5cdC8vIGFuZCB0aGVuIHByb2NlZWQgYXMgaWYgdGhlIHJlc3VsdGluZyB2YWx1ZSB3YXMgcHJvdmlkZWQgdG8gYmxvY2tIZWxwZXJNaXNzaW5nLlxuXG5cdENvbXBpbGVyLnByb3RvdHlwZSA9IHtcblx0ICBjb21waWxlcjogQ29tcGlsZXIsXG5cblx0ICBlcXVhbHM6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuXHQgICAgdmFyIGxlbiA9IHRoaXMub3Bjb2Rlcy5sZW5ndGg7XG5cdCAgICBpZiAob3RoZXIub3Bjb2Rlcy5sZW5ndGggIT09IGxlbikge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIG9wY29kZSA9IHRoaXMub3Bjb2Rlc1tpXSxcblx0ICAgICAgICAgIG90aGVyT3Bjb2RlID0gb3RoZXIub3Bjb2Rlc1tpXTtcblx0ICAgICAgaWYgKG9wY29kZS5vcGNvZGUgIT09IG90aGVyT3Bjb2RlLm9wY29kZSB8fCAhYXJnRXF1YWxzKG9wY29kZS5hcmdzLCBvdGhlck9wY29kZS5hcmdzKSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBXZSBrbm93IHRoYXQgbGVuZ3RoIGlzIHRoZSBzYW1lIGJldHdlZW4gdGhlIHR3byBhcnJheXMgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSB0aWVkXG5cdCAgICAvLyB0byB0aGUgb3Bjb2RlIGJlaGF2aW9yIGFib3ZlLlxuXHQgICAgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmICghdGhpcy5jaGlsZHJlbltpXS5lcXVhbHMob3RoZXIuY2hpbGRyZW5baV0pKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0sXG5cblx0ICBndWlkOiAwLFxuXG5cdCAgY29tcGlsZTogZnVuY3Rpb24gY29tcGlsZShwcm9ncmFtLCBvcHRpb25zKSB7XG5cdCAgICB0aGlzLnNvdXJjZU5vZGUgPSBbXTtcblx0ICAgIHRoaXMub3Bjb2RlcyA9IFtdO1xuXHQgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gb3B0aW9ucy5zdHJpbmdQYXJhbXM7XG5cdCAgICB0aGlzLnRyYWNrSWRzID0gb3B0aW9ucy50cmFja0lkcztcblxuXHQgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9IG9wdGlvbnMuYmxvY2tQYXJhbXMgfHwgW107XG5cblx0ICAgIC8vIFRoZXNlIGNoYW5nZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIG90aGVyIGNvbXBpbGVyIGNvbXBvbmVudHNcblx0ICAgIHZhciBrbm93bkhlbHBlcnMgPSBvcHRpb25zLmtub3duSGVscGVycztcblx0ICAgIG9wdGlvbnMua25vd25IZWxwZXJzID0ge1xuXHQgICAgICAnaGVscGVyTWlzc2luZyc6IHRydWUsXG5cdCAgICAgICdibG9ja0hlbHBlck1pc3NpbmcnOiB0cnVlLFxuXHQgICAgICAnZWFjaCc6IHRydWUsXG5cdCAgICAgICdpZic6IHRydWUsXG5cdCAgICAgICd1bmxlc3MnOiB0cnVlLFxuXHQgICAgICAnd2l0aCc6IHRydWUsXG5cdCAgICAgICdsb2cnOiB0cnVlLFxuXHQgICAgICAnbG9va3VwJzogdHJ1ZVxuXHQgICAgfTtcblx0ICAgIGlmIChrbm93bkhlbHBlcnMpIHtcblx0ICAgICAgLy8gdGhlIG5leHQgbGluZSBzaG91bGQgdXNlIFwiT2JqZWN0LmtleXNcIiwgYnV0IHRoZSBjb2RlIGhhcyBiZWVuIGxpa2UgdGhpcyBhIGxvbmcgdGltZSBhbmQgY2hhbmdpbmcgaXQsIG1pZ2h0XG5cdCAgICAgIC8vIGNhdXNlIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGlzc3Vlcy4uLiBJdCdzIGFuIG9sZCBsaWJyYXJ5Li4uXG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cblx0ICAgICAgZm9yICh2YXIgX25hbWUgaW4ga25vd25IZWxwZXJzKSB7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLmtub3duSGVscGVyc1tfbmFtZV0gPSBrbm93bkhlbHBlcnNbX25hbWVdO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLmFjY2VwdChwcm9ncmFtKTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZVByb2dyYW06IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHZhciBjaGlsZENvbXBpbGVyID0gbmV3IHRoaXMuY29tcGlsZXIoKSxcblx0ICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0ICAgIHJlc3VsdCA9IGNoaWxkQ29tcGlsZXIuY29tcGlsZShwcm9ncmFtLCB0aGlzLm9wdGlvbnMpLFxuXHQgICAgICAgIGd1aWQgPSB0aGlzLmd1aWQrKztcblxuXHQgICAgdGhpcy51c2VQYXJ0aWFsID0gdGhpcy51c2VQYXJ0aWFsIHx8IHJlc3VsdC51c2VQYXJ0aWFsO1xuXG5cdCAgICB0aGlzLmNoaWxkcmVuW2d1aWRdID0gcmVzdWx0O1xuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCByZXN1bHQudXNlRGVwdGhzO1xuXG5cdCAgICByZXR1cm4gZ3VpZDtcblx0ICB9LFxuXG5cdCAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQobm9kZSkge1xuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbbm9kZS50eXBlXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0eXBlOiAnICsgbm9kZS50eXBlLCBub2RlKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnVuc2hpZnQobm9kZSk7XG5cdCAgICB2YXIgcmV0ID0gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnNoaWZ0KCk7XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KHByb2dyYW0uYmxvY2tQYXJhbXMpO1xuXG5cdCAgICB2YXIgYm9keSA9IHByb2dyYW0uYm9keSxcblx0ICAgICAgICBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHlMZW5ndGg7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdChib2R5W2ldKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnNoaWZ0KCk7XG5cblx0ICAgIHRoaXMuaXNTaW1wbGUgPSBib2R5TGVuZ3RoID09PSAxO1xuXHQgICAgdGhpcy5ibG9ja1BhcmFtcyA9IHByb2dyYW0uYmxvY2tQYXJhbXMgPyBwcm9ncmFtLmJsb2NrUGFyYW1zLmxlbmd0aCA6IDA7XG5cblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH0sXG5cblx0ICBCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gQmxvY2tTdGF0ZW1lbnQoYmxvY2spIHtcblx0ICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoYmxvY2spO1xuXG5cdCAgICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0sXG5cdCAgICAgICAgaW52ZXJzZSA9IGJsb2NrLmludmVyc2U7XG5cblx0ICAgIHByb2dyYW0gPSBwcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0ocHJvZ3JhbSk7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGludmVyc2UpO1xuXG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihibG9jayk7XG5cblx0ICAgIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuXHQgICAgICB0aGlzLmhlbHBlclNleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihibG9jayk7XG5cblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2Bcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdibG9ja1ZhbHVlJywgYmxvY2sucGF0aC5vcmlnaW5hbCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblxuXHQgICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG5cdCAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FtYmlndW91c0Jsb2NrVmFsdWUnKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgIH0sXG5cblx0ICBEZWNvcmF0b3JCbG9jazogZnVuY3Rpb24gRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvZ3JhbSA9IGRlY29yYXRvci5wcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0oZGVjb3JhdG9yLnByb2dyYW0pO1xuXHQgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoZGVjb3JhdG9yLCBwcm9ncmFtLCB1bmRlZmluZWQpLFxuXHQgICAgICAgIHBhdGggPSBkZWNvcmF0b3IucGF0aDtcblxuXHQgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgIHRoaXMub3Bjb2RlKCdyZWdpc3RlckRlY29yYXRvcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwpO1xuXHQgIH0sXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHRoaXMudXNlUGFydGlhbCA9IHRydWU7XG5cblx0ICAgIHZhciBwcm9ncmFtID0gcGFydGlhbC5wcm9ncmFtO1xuXHQgICAgaWYgKHByb2dyYW0pIHtcblx0ICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocGFydGlhbC5wcm9ncmFtKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcmFtcyA9IHBhcnRpYWwucGFyYW1zO1xuXHQgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbnN1cHBvcnRlZCBudW1iZXIgb2YgcGFydGlhbCBhcmd1bWVudHM6ICcgKyBwYXJhbXMubGVuZ3RoLCBwYXJ0aWFsKTtcblx0ICAgIH0gZWxzZSBpZiAoIXBhcmFtcy5sZW5ndGgpIHtcblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHBsaWNpdFBhcnRpYWxDb250ZXh0KSB7XG5cdCAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHBhcmFtcy5wdXNoKHsgdHlwZTogJ1BhdGhFeHByZXNzaW9uJywgcGFydHM6IFtdLCBkZXB0aDogMCB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFydGlhbE5hbWUgPSBwYXJ0aWFsLm5hbWUub3JpZ2luYWwsXG5cdCAgICAgICAgaXNEeW5hbWljID0gcGFydGlhbC5uYW1lLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJztcblx0ICAgIGlmIChpc0R5bmFtaWMpIHtcblx0ICAgICAgdGhpcy5hY2NlcHQocGFydGlhbC5uYW1lKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhwYXJ0aWFsLCBwcm9ncmFtLCB1bmRlZmluZWQsIHRydWUpO1xuXG5cdCAgICB2YXIgaW5kZW50ID0gcGFydGlhbC5pbmRlbnQgfHwgJyc7XG5cdCAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRJbmRlbnQgJiYgaW5kZW50KSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgaW5kZW50KTtcblx0ICAgICAgaW5kZW50ID0gJyc7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdpbnZva2VQYXJ0aWFsJywgaXNEeW5hbWljLCBwYXJ0aWFsTmFtZSwgaW5kZW50KTtcblx0ICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICB9LFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWxCbG9jaykge1xuXHQgICAgdGhpcy5QYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWxCbG9jayk7XG5cdCAgfSxcblxuXHQgIE11c3RhY2hlU3RhdGVtZW50OiBmdW5jdGlvbiBNdXN0YWNoZVN0YXRlbWVudChtdXN0YWNoZSkge1xuXHQgICAgdGhpcy5TdWJFeHByZXNzaW9uKG11c3RhY2hlKTtcblxuXHQgICAgaWYgKG11c3RhY2hlLmVzY2FwZWQgJiYgIXRoaXMub3B0aW9ucy5ub0VzY2FwZSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kRXNjYXBlZCcpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgRGVjb3JhdG9yOiBmdW5jdGlvbiBEZWNvcmF0b3IoZGVjb3JhdG9yKSB7XG5cdCAgICB0aGlzLkRlY29yYXRvckJsb2NrKGRlY29yYXRvcik7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoY29udGVudCkge1xuXHQgICAgaWYgKGNvbnRlbnQudmFsdWUpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBjb250ZW50LnZhbHVlKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIHt9LFxuXG5cdCAgU3ViRXhwcmVzc2lvbjogZnVuY3Rpb24gU3ViRXhwcmVzc2lvbihzZXhwcikge1xuXHQgICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcik7XG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihzZXhwcik7XG5cblx0ICAgIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuXHQgICAgICB0aGlzLnNpbXBsZVNleHByKHNleHByKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihzZXhwcik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKHNleHByKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGFtYmlndW91c1NleHByOiBmdW5jdGlvbiBhbWJpZ3VvdXNTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSkge1xuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoLFxuXHQgICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIGlzQmxvY2sgPSBwcm9ncmFtICE9IG51bGwgfHwgaW52ZXJzZSAhPSBudWxsO1xuXG5cdCAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHBhdGguZGVwdGgpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICB0aGlzLmFjY2VwdChwYXRoKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUFtYmlndW91cycsIG5hbWUsIGlzQmxvY2spO1xuXHQgIH0sXG5cblx0ICBzaW1wbGVTZXhwcjogZnVuY3Rpb24gc2ltcGxlU2V4cHIoc2V4cHIpIHtcblx0ICAgIHZhciBwYXRoID0gc2V4cHIucGF0aDtcblx0ICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3Jlc29sdmVQb3NzaWJsZUxhbWJkYScpO1xuXHQgIH0sXG5cblx0ICBoZWxwZXJTZXhwcjogZnVuY3Rpb24gaGVscGVyU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcblx0ICAgIHZhciBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSxcblx0ICAgICAgICBwYXRoID0gc2V4cHIucGF0aCxcblx0ICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXTtcblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUtub3duSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgbmFtZSk7XG5cdCAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciAnICsgbmFtZSwgc2V4cHIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgICBwYXRoLmZhbHN5ID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmFjY2VwdChwYXRoKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwsIF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zaW1wbGVJZChwYXRoKSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbihwYXRoKSB7XG5cdCAgICB0aGlzLmFkZERlcHRoKHBhdGguZGVwdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuXHQgICAgdmFyIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIHNjb3BlZCA9IF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zY29wZWRJZChwYXRoKSxcblx0ICAgICAgICBibG9ja1BhcmFtSWQgPSAhcGF0aC5kZXB0aCAmJiAhc2NvcGVkICYmIHRoaXMuYmxvY2tQYXJhbUluZGV4KG5hbWUpO1xuXG5cdCAgICBpZiAoYmxvY2tQYXJhbUlkKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBCbG9ja1BhcmFtJywgYmxvY2tQYXJhbUlkLCBwYXRoLnBhcnRzKTtcblx0ICAgIH0gZWxzZSBpZiAoIW5hbWUpIHtcblx0ICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoQ29udGV4dCcpO1xuXHQgICAgfSBlbHNlIGlmIChwYXRoLmRhdGEpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwRGF0YScsIHBhdGguZGVwdGgsIHBhdGgucGFydHMsIHBhdGguc3RyaWN0KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBPbkNvbnRleHQnLCBwYXRoLnBhcnRzLCBwYXRoLmZhbHN5LCBwYXRoLnN0cmljdCwgc2NvcGVkKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24gU3RyaW5nTGl0ZXJhbChzdHJpbmcpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nJywgc3RyaW5nLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbChudW1iZXIpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIG51bWJlci52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbChib29sKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBib29sLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24gVW5kZWZpbmVkTGl0ZXJhbCgpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcblx0ICB9LFxuXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ251bGwnKTtcblx0ICB9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB2YXIgcGFpcnMgPSBoYXNoLnBhaXJzLFxuXHQgICAgICAgIGkgPSAwLFxuXHQgICAgICAgIGwgPSBwYWlycy5sZW5ndGg7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoSGFzaCcpO1xuXG5cdCAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYWlyc1tpXS52YWx1ZSk7XG5cdCAgICB9XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhc3NpZ25Ub0hhc2gnLCBwYWlyc1tpXS5rZXkpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5vcGNvZGUoJ3BvcEhhc2gnKTtcblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXHQgIG9wY29kZTogZnVuY3Rpb24gb3Bjb2RlKG5hbWUpIHtcblx0ICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHsgb3Bjb2RlOiBuYW1lLCBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGxvYzogdGhpcy5zb3VyY2VOb2RlWzBdLmxvYyB9KTtcblx0ICB9LFxuXG5cdCAgYWRkRGVwdGg6IGZ1bmN0aW9uIGFkZERlcHRoKGRlcHRoKSB7XG5cdCAgICBpZiAoIWRlcHRoKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0cnVlO1xuXHQgIH0sXG5cblx0ICBjbGFzc2lmeVNleHByOiBmdW5jdGlvbiBjbGFzc2lmeVNleHByKHNleHByKSB7XG5cdCAgICB2YXIgaXNTaW1wbGUgPSBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2ltcGxlSWQoc2V4cHIucGF0aCk7XG5cblx0ICAgIHZhciBpc0Jsb2NrUGFyYW0gPSBpc1NpbXBsZSAmJiAhIXRoaXMuYmxvY2tQYXJhbUluZGV4KHNleHByLnBhdGgucGFydHNbMF0pO1xuXG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBpZjpcblx0ICAgIC8vICogaXRzIGlkIGlzIHNpbXBsZSAoYSBzaW5nbGUgcGFydCwgbm90IGB0aGlzYCBvciBgLi5gKVxuXHQgICAgdmFyIGlzSGVscGVyID0gIWlzQmxvY2tQYXJhbSAmJiBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuaGVscGVyRXhwcmVzc2lvbihzZXhwcik7XG5cblx0ICAgIC8vIGlmIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGJ1dCBub3QgYSBkZWZpbml0ZVxuXHQgICAgLy8gaGVscGVyLCBpdCBpcyBhbWJpZ3VvdXMsIGFuZCB3aWxsIGJlIHJlc29sdmVkIGluIGEgbGF0ZXJcblx0ICAgIC8vIHBhc3Mgb3IgYXQgcnVudGltZS5cblx0ICAgIHZhciBpc0VsaWdpYmxlID0gIWlzQmxvY2tQYXJhbSAmJiAoaXNIZWxwZXIgfHwgaXNTaW1wbGUpO1xuXG5cdCAgICAvLyBpZiBhbWJpZ3VvdXMsIHdlIGNhbiBwb3NzaWJseSByZXNvbHZlIHRoZSBhbWJpZ3VpdHkgbm93XG5cdCAgICAvLyBBbiBlbGlnaWJsZSBoZWxwZXIgaXMgb25lIHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvbXBsZXggcGF0aCwgaS5lLiBgdGhpcy5mb29gLCBgLi4vZm9vYCBldGMuXG5cdCAgICBpZiAoaXNFbGlnaWJsZSAmJiAhaXNIZWxwZXIpIHtcblx0ICAgICAgdmFyIF9uYW1lMiA9IHNleHByLnBhdGgucGFydHNbMF0sXG5cdCAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdCAgICAgIGlmIChvcHRpb25zLmtub3duSGVscGVyc1tfbmFtZTJdKSB7XG5cdCAgICAgICAgaXNIZWxwZXIgPSB0cnVlO1xuXHQgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuXHQgICAgICAgIGlzRWxpZ2libGUgPSBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaXNIZWxwZXIpIHtcblx0ICAgICAgcmV0dXJuICdoZWxwZXInO1xuXHQgICAgfSBlbHNlIGlmIChpc0VsaWdpYmxlKSB7XG5cdCAgICAgIHJldHVybiAnYW1iaWd1b3VzJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnc2ltcGxlJztcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaFBhcmFtczogZnVuY3Rpb24gcHVzaFBhcmFtcyhwYXJhbXMpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYXJhbXNbaV0pO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoUGFyYW06IGZ1bmN0aW9uIHB1c2hQYXJhbSh2YWwpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHZhbC52YWx1ZSAhPSBudWxsID8gdmFsLnZhbHVlIDogdmFsLm9yaWdpbmFsIHx8ICcnO1xuXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oXFwuP1xcLlxcLykqL2csICcnKS5yZXBsYWNlKC9cXC8vZywgJy4nKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICh2YWwuZGVwdGgpIHtcblx0ICAgICAgICB0aGlzLmFkZERlcHRoKHZhbC5kZXB0aCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCB2YWwuZGVwdGggfHwgMCk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nUGFyYW0nLCB2YWx1ZSwgdmFsLnR5cGUpO1xuXG5cdCAgICAgIGlmICh2YWwudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgICAgLy8gU3ViRXhwcmVzc2lvbnMgZ2V0IGV2YWx1YXRlZCBhbmQgcGFzc2VkIGluXG5cdCAgICAgICAgLy8gaW4gc3RyaW5nIHBhcmFtcyBtb2RlLlxuXHQgICAgICAgIHRoaXMuYWNjZXB0KHZhbCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgICAgdmFyIGJsb2NrUGFyYW1JbmRleCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICBpZiAodmFsLnBhcnRzICYmICFfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQodmFsKSAmJiAhdmFsLmRlcHRoKSB7XG5cdCAgICAgICAgICBibG9ja1BhcmFtSW5kZXggPSB0aGlzLmJsb2NrUGFyYW1JbmRleCh2YWwucGFydHNbMF0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoYmxvY2tQYXJhbUluZGV4KSB7XG5cdCAgICAgICAgICB2YXIgYmxvY2tQYXJhbUNoaWxkID0gdmFsLnBhcnRzLnNsaWNlKDEpLmpvaW4oJy4nKTtcblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCAnQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JbmRleCwgYmxvY2tQYXJhbUNoaWxkKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdmFsdWUgPSB2YWwub3JpZ2luYWwgfHwgdmFsdWU7XG5cdCAgICAgICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL150aGlzKD86XFwufCQpLywgJycpLnJlcGxhY2UoL15cXC5cXC8vLCAnJykucmVwbGFjZSgvXlxcLiQvLCAnJyk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCB2YWwudHlwZSwgdmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24gc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UsIG9taXRFbXB0eSkge1xuXHQgICAgdmFyIHBhcmFtcyA9IHNleHByLnBhcmFtcztcblx0ICAgIHRoaXMucHVzaFBhcmFtcyhwYXJhbXMpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBpZiAoc2V4cHIuaGFzaCkge1xuXHQgICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnLCBvbWl0RW1wdHkpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcGFyYW1zO1xuXHQgIH0sXG5cblx0ICBibG9ja1BhcmFtSW5kZXg6IGZ1bmN0aW9uIGJsb2NrUGFyYW1JbmRleChuYW1lKSB7XG5cdCAgICBmb3IgKHZhciBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XG5cdCAgICAgIHZhciBibG9ja1BhcmFtcyA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtc1tkZXB0aF0sXG5cdCAgICAgICAgICBwYXJhbSA9IGJsb2NrUGFyYW1zICYmIF91dGlscy5pbmRleE9mKGJsb2NrUGFyYW1zLCBuYW1lKTtcblx0ICAgICAgaWYgKGJsb2NrUGFyYW1zICYmIHBhcmFtID49IDApIHtcblx0ICAgICAgICByZXR1cm4gW2RlcHRoLCBwYXJhbV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0ZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG5cdCAgaWYgKGlucHV0ID09IG51bGwgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyAmJiBpbnB1dC50eXBlICE9PSAnUHJvZ3JhbScpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xuXHQgIH1cblxuXHQgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuXHQgICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfVxuXG5cdCAgdmFyIGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG5cdCAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKTtcblx0ICByZXR1cm4gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuXHQgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcblxuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLmNvbXBpbGUuIFlvdSBwYXNzZWQgJyArIGlucHV0KTtcblx0ICB9XG5cblx0ICBvcHRpb25zID0gX3V0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XG5cdCAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgIH1cblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcblx0ICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9XG5cblx0ICB2YXIgY29tcGlsZWQgPSB1bmRlZmluZWQ7XG5cblx0ICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XG5cdCAgICB2YXIgYXN0ID0gZW52LnBhcnNlKGlucHV0LCBvcHRpb25zKSxcblx0ICAgICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyksXG5cdCAgICAgICAgdGVtcGxhdGVTcGVjID0gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCB1bmRlZmluZWQsIHRydWUpO1xuXHQgICAgcmV0dXJuIGVudi50ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMpO1xuXHQgIH1cblxuXHQgIC8vIFRlbXBsYXRlIGlzIG9ubHkgY29tcGlsZWQgb24gZmlyc3QgdXNlIGFuZCBjYWNoZWQgYWZ0ZXIgdGhhdCBwb2ludC5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCwgZXhlY09wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5jYWxsKHRoaXMsIGNvbnRleHQsIGV4ZWNPcHRpb25zKTtcblx0ICB9XG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChzZXR1cE9wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5fc2V0dXAoc2V0dXBPcHRpb25zKTtcblx0ICB9O1xuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKCFjb21waWxlZCkge1xuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLl9jaGlsZChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICB9O1xuXHQgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhcmdFcXVhbHMoYSwgYikge1xuXHQgIGlmIChhID09PSBiKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cblx0ICBpZiAoX3V0aWxzLmlzQXJyYXkoYSkgJiYgX3V0aWxzLmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgaWYgKCFhcmdFcXVhbHMoYVtpXSwgYltpXSkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpIHtcblx0ICBpZiAoIXNleHByLnBhdGgucGFydHMpIHtcblx0ICAgIHZhciBsaXRlcmFsID0gc2V4cHIucGF0aDtcblx0ICAgIC8vIENhc3RpbmcgdG8gc3RyaW5nIGhlcmUgdG8gbWFrZSBmYWxzZSBhbmQgMCBsaXRlcmFsIHZhbHVlcyBwbGF5IG5pY2VseSB3aXRoIHRoZSByZXN0XG5cdCAgICAvLyBvZiB0aGUgc3lzdGVtLlxuXHQgICAgc2V4cHIucGF0aCA9IHtcblx0ICAgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgICAgZGF0YTogZmFsc2UsXG5cdCAgICAgIGRlcHRoOiAwLFxuXHQgICAgICBwYXJ0czogW2xpdGVyYWwub3JpZ2luYWwgKyAnJ10sXG5cdCAgICAgIG9yaWdpbmFsOiBsaXRlcmFsLm9yaWdpbmFsICsgJycsXG5cdCAgICAgIGxvYzogbGl0ZXJhbC5sb2Ncblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0pLFxuLyogNDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfY29kZUdlbiA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXG5cdHZhciBfY29kZUdlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2RlR2VuKTtcblxuXHRmdW5jdGlvbiBMaXRlcmFsKHZhbHVlKSB7XG5cdCAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gSmF2YVNjcmlwdENvbXBpbGVyKCkge31cblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuXHQgIC8vIFBVQkxJQyBBUEk6IFlvdSBjYW4gb3ZlcnJpZGUgdGhlc2UgbWV0aG9kcyBpbiBhIHN1YmNsYXNzIHRvIHByb3ZpZGVcblx0ICAvLyBhbHRlcm5hdGl2ZSBjb21waWxlZCBmb3JtcyBmb3IgbmFtZSBsb29rdXAgYW5kIGJ1ZmZlcmluZyBzZW1hbnRpY3Ncblx0ICBuYW1lTG9va3VwOiBmdW5jdGlvbiBuYW1lTG9va3VwKHBhcmVudCwgbmFtZSAvKiAsIHR5cGUqLykge1xuXHQgICAgaWYgKG5hbWUgPT09ICdjb25zdHJ1Y3RvcicpIHtcblx0ICAgICAgcmV0dXJuIFsnKCcsIHBhcmVudCwgJy5wcm9wZXJ0eUlzRW51bWVyYWJsZShcXCdjb25zdHJ1Y3RvclxcJykgPyAnLCBwYXJlbnQsICcuY29uc3RydWN0b3IgOiB1bmRlZmluZWQnLCAnKSddO1xuXHQgICAgfVxuXHQgICAgaWYgKEphdmFTY3JpcHRDb21waWxlci5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZShuYW1lKSkge1xuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJy4nLCBuYW1lXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBbcGFyZW50LCAnWycsIEpTT04uc3RyaW5naWZ5KG5hbWUpLCAnXSddO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgZGVwdGhlZExvb2t1cDogZnVuY3Rpb24gZGVwdGhlZExvb2t1cChuYW1lKSB7XG5cdCAgICByZXR1cm4gW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubG9va3VwJyksICcoZGVwdGhzLCBcIicsIG5hbWUsICdcIiknXTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZXJJbmZvOiBmdW5jdGlvbiBjb21waWxlckluZm8oKSB7XG5cdCAgICB2YXIgcmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTixcblx0ICAgICAgICB2ZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbcmV2aXNpb25dO1xuXHQgICAgcmV0dXJuIFtyZXZpc2lvbiwgdmVyc2lvbnNdO1xuXHQgIH0sXG5cblx0ICBhcHBlbmRUb0J1ZmZlcjogZnVuY3Rpb24gYXBwZW5kVG9CdWZmZXIoc291cmNlLCBsb2NhdGlvbiwgZXhwbGljaXQpIHtcblx0ICAgIC8vIEZvcmNlIGEgc291cmNlIGFzIHRoaXMgc2ltcGxpZmllcyB0aGUgbWVyZ2UgbG9naWMuXG5cdCAgICBpZiAoIV91dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcblx0ICAgICAgc291cmNlID0gW3NvdXJjZV07XG5cdCAgICB9XG5cdCAgICBzb3VyY2UgPSB0aGlzLnNvdXJjZS53cmFwKHNvdXJjZSwgbG9jYXRpb24pO1xuXG5cdCAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuXHQgICAgICByZXR1cm4gWydyZXR1cm4gJywgc291cmNlLCAnOyddO1xuXHQgICAgfSBlbHNlIGlmIChleHBsaWNpdCkge1xuXHQgICAgICAvLyBUaGlzIGlzIGEgY2FzZSB3aGVyZSB0aGUgYnVmZmVyIG9wZXJhdGlvbiBvY2N1cnMgYXMgYSBjaGlsZCBvZiBhbm90aGVyXG5cdCAgICAgIC8vIGNvbnN0cnVjdCwgZ2VuZXJhbGx5IGJyYWNlcy4gV2UgaGF2ZSB0byBleHBsaWNpdGx5IG91dHB1dCB0aGVzZSBidWZmZXJcblx0ICAgICAgLy8gb3BlcmF0aW9ucyB0byBlbnN1cmUgdGhhdCB0aGUgZW1pdHRlZCBjb2RlIGdvZXMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG5cdCAgICAgIHJldHVybiBbJ2J1ZmZlciArPSAnLCBzb3VyY2UsICc7J107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzb3VyY2UuYXBwZW5kVG9CdWZmZXIgPSB0cnVlO1xuXHQgICAgICByZXR1cm4gc291cmNlO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBpbml0aWFsaXplQnVmZmVyOiBmdW5jdGlvbiBpbml0aWFsaXplQnVmZmVyKCkge1xuXHQgICAgcmV0dXJuIHRoaXMucXVvdGVkU3RyaW5nKCcnKTtcblx0ICB9LFxuXHQgIC8vIEVORCBQVUJMSUMgQVBJXG5cblx0ICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCBjb250ZXh0LCBhc09iamVjdCkge1xuXHQgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gdGhpcy5vcHRpb25zLnN0cmluZ1BhcmFtcztcblx0ICAgIHRoaXMudHJhY2tJZHMgPSB0aGlzLm9wdGlvbnMudHJhY2tJZHM7XG5cdCAgICB0aGlzLnByZWNvbXBpbGUgPSAhYXNPYmplY3Q7XG5cblx0ICAgIHRoaXMubmFtZSA9IHRoaXMuZW52aXJvbm1lbnQubmFtZTtcblx0ICAgIHRoaXMuaXNDaGlsZCA9ICEhY29udGV4dDtcblx0ICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge1xuXHQgICAgICBkZWNvcmF0b3JzOiBbXSxcblx0ICAgICAgcHJvZ3JhbXM6IFtdLFxuXHQgICAgICBlbnZpcm9ubWVudHM6IFtdXG5cdCAgICB9O1xuXG5cdCAgICB0aGlzLnByZWFtYmxlKCk7XG5cblx0ICAgIHRoaXMuc3RhY2tTbG90ID0gMDtcblx0ICAgIHRoaXMuc3RhY2tWYXJzID0gW107XG5cdCAgICB0aGlzLmFsaWFzZXMgPSB7fTtcblx0ICAgIHRoaXMucmVnaXN0ZXJzID0geyBsaXN0OiBbXSB9O1xuXHQgICAgdGhpcy5oYXNoZXMgPSBbXTtcblx0ICAgIHRoaXMuY29tcGlsZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmlubGluZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmJsb2NrUGFyYW1zID0gW107XG5cblx0ICAgIHRoaXMuY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKTtcblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBlbnZpcm9ubWVudC51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVjb3JhdG9ycyB8fCB0aGlzLm9wdGlvbnMuY29tcGF0O1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZW52aXJvbm1lbnQudXNlQmxvY2tQYXJhbXM7XG5cblx0ICAgIHZhciBvcGNvZGVzID0gZW52aXJvbm1lbnQub3Bjb2Rlcyxcblx0ICAgICAgICBvcGNvZGUgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgZmlyc3RMb2MgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgaSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBsID0gdW5kZWZpbmVkO1xuXG5cdCAgICBmb3IgKGkgPSAwLCBsID0gb3Bjb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgb3Bjb2RlID0gb3Bjb2Rlc1tpXTtcblxuXHQgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBvcGNvZGUubG9jO1xuXHQgICAgICBmaXJzdExvYyA9IGZpcnN0TG9jIHx8IG9wY29kZS5sb2M7XG5cdCAgICAgIHRoaXNbb3Bjb2RlLm9wY29kZV0uYXBwbHkodGhpcywgb3Bjb2RlLmFyZ3MpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGbHVzaCBhbnkgdHJhaWxpbmcgY29udGVudCB0aGF0IG1pZ2h0IGJlIHBlbmRpbmcuXG5cdCAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBmaXJzdExvYztcblx0ICAgIHRoaXMucHVzaFNvdXJjZSgnJyk7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICBpZiAodGhpcy5zdGFja1Nsb3QgfHwgdGhpcy5pbmxpbmVTdGFjay5sZW5ndGggfHwgdGhpcy5jb21waWxlU3RhY2subGVuZ3RoKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdDb21waWxlIGNvbXBsZXRlZCB3aXRoIGNvbnRlbnQgbGVmdCBvbiBzdGFjaycpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoIXRoaXMuZGVjb3JhdG9ycy5pc0VtcHR5KCkpIHtcblx0ICAgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmRlY29yYXRvcnMucHJlcGVuZCgndmFyIGRlY29yYXRvcnMgPSBjb250YWluZXIuZGVjb3JhdG9ycztcXG4nKTtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ3JldHVybiBmbjsnKTtcblxuXHQgICAgICBpZiAoYXNPYmplY3QpIHtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSBGdW5jdGlvbi5hcHBseSh0aGlzLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnZGF0YScsICdibG9ja1BhcmFtcycsICdkZXB0aHMnLCB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKV0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKCdmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGgwLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XFxuJyk7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ31cXG4nKTtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSB0aGlzLmNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCk7XG5cdCAgICBpZiAoIXRoaXMuaXNDaGlsZCkge1xuXHQgICAgICB2YXIgcmV0ID0ge1xuXHQgICAgICAgIGNvbXBpbGVyOiB0aGlzLmNvbXBpbGVySW5mbygpLFxuXHQgICAgICAgIG1haW46IGZuXG5cdCAgICAgIH07XG5cblx0ICAgICAgaWYgKHRoaXMuZGVjb3JhdG9ycykge1xuXHQgICAgICAgIHJldC5tYWluX2QgPSB0aGlzLmRlY29yYXRvcnM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG5cdCAgICAgICAgcmV0LnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIF9jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXHQgICAgICB2YXIgcHJvZ3JhbXMgPSBfY29udGV4dC5wcm9ncmFtcztcblx0ICAgICAgdmFyIGRlY29yYXRvcnMgPSBfY29udGV4dC5kZWNvcmF0b3JzO1xuXG5cdCAgICAgIGZvciAoaSA9IDAsIGwgPSBwcm9ncmFtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgICBpZiAocHJvZ3JhbXNbaV0pIHtcblx0ICAgICAgICAgIHJldFtpXSA9IHByb2dyYW1zW2ldO1xuXHQgICAgICAgICAgaWYgKGRlY29yYXRvcnNbaV0pIHtcblx0ICAgICAgICAgICAgcmV0W2kgKyAnX2QnXSA9IGRlY29yYXRvcnNbaV07XG5cdCAgICAgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC51c2VQYXJ0aWFsKSB7XG5cdCAgICAgICAgcmV0LnVzZVBhcnRpYWwgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuXHQgICAgICAgIHJldC51c2VEYXRhID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgICByZXQudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcykge1xuXHQgICAgICAgIHJldC51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgICByZXQuY29tcGF0ID0gdHJ1ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICghYXNPYmplY3QpIHtcblx0ICAgICAgICByZXQuY29tcGlsZXIgPSBKU09OLnN0cmluZ2lmeShyZXQuY29tcGlsZXIpO1xuXG5cdCAgICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0geyBzdGFydDogeyBsaW5lOiAxLCBjb2x1bW46IDAgfSB9O1xuXHQgICAgICAgIHJldCA9IHRoaXMub2JqZWN0TGl0ZXJhbChyZXQpO1xuXG5cdCAgICAgICAgaWYgKG9wdGlvbnMuc3JjTmFtZSkge1xuXHQgICAgICAgICAgcmV0ID0gcmV0LnRvU3RyaW5nV2l0aFNvdXJjZU1hcCh7IGZpbGU6IG9wdGlvbnMuZGVzdE5hbWUgfSk7XG5cdCAgICAgICAgICByZXQubWFwID0gcmV0Lm1hcCAmJiByZXQubWFwLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldCA9IHJldC50b1N0cmluZygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXQuY29tcGlsZXJPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBmbjtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHJlYW1ibGU6IGZ1bmN0aW9uIHByZWFtYmxlKCkge1xuXHQgICAgLy8gdHJhY2sgdGhlIGxhc3QgY29udGV4dCBwdXNoZWQgaW50byBwbGFjZSB0byBhbGxvdyBza2lwcGluZyB0aGVcblx0ICAgIC8vIGdldENvbnRleHQgb3Bjb2RlIHdoZW4gaXQgd291bGQgYmUgYSBub29wXG5cdCAgICB0aGlzLmxhc3RDb250ZXh0ID0gMDtcblx0ICAgIHRoaXMuc291cmNlID0gbmV3IF9jb2RlR2VuMlsnZGVmYXVsdCddKHRoaXMub3B0aW9ucy5zcmNOYW1lKTtcblx0ICAgIHRoaXMuZGVjb3JhdG9ycyA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XG5cdCAgfSxcblxuXHQgIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dDogZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25Db250ZXh0KGFzT2JqZWN0KSB7XG5cdCAgICB2YXIgdmFyRGVjbGFyYXRpb25zID0gJyc7XG5cblx0ICAgIHZhciBsb2NhbHMgPSB0aGlzLnN0YWNrVmFycy5jb25jYXQodGhpcy5yZWdpc3RlcnMubGlzdCk7XG5cdCAgICBpZiAobG9jYWxzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsICcgKyBsb2NhbHMuam9pbignLCAnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gR2VuZXJhdGUgbWluaW1pemVyIGFsaWFzIG1hcHBpbmdzXG5cdCAgICAvL1xuXHQgICAgLy8gV2hlbiB1c2luZyB0cnVlIFNvdXJjZU5vZGVzLCB0aGlzIHdpbGwgdXBkYXRlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSBnaXZlbiBhbGlhc1xuXHQgICAgLy8gYXMgdGhlIHNvdXJjZSBub2RlcyBhcmUgcmV1c2VkIGluIHNpdHUuIEZvciB0aGUgbm9uLXNvdXJjZSBub2RlIGNvbXBpbGF0aW9uIG1vZGUsXG5cdCAgICAvLyBhbGlhc2VzIHdpbGwgbm90IGJlIHVzZWQsIGJ1dCB0aGlzIGNhc2UgaXMgYWxyZWFkeSBiZWluZyBydW4gb24gdGhlIGNsaWVudCBhbmRcblx0ICAgIC8vIHdlIGFyZW4ndCBjb25jZXJuIGFib3V0IG1pbmltaXppbmcgdGhlIHRlbXBsYXRlIHNpemUuXG5cdCAgICB2YXIgYWxpYXNDb3VudCA9IDA7XG5cdCAgICBmb3IgKHZhciBhbGlhcyBpbiB0aGlzLmFsaWFzZXMpIHtcblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cblx0ICAgICAgdmFyIG5vZGUgPSB0aGlzLmFsaWFzZXNbYWxpYXNdO1xuXG5cdCAgICAgIGlmICh0aGlzLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoYWxpYXMpICYmIG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5yZWZlcmVuY2VDb3VudCA+IDEpIHtcblx0ICAgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYWxpYXMnICsgKythbGlhc0NvdW50ICsgJz0nICsgYWxpYXM7XG5cdCAgICAgICAgbm9kZS5jaGlsZHJlblswXSA9ICdhbGlhcycgKyBhbGlhc0NvdW50O1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJhbXMgPSBbJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnaGVscGVycycsICdwYXJ0aWFscycsICdkYXRhJ107XG5cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gUGVyZm9ybSBhIHNlY29uZCBwYXNzIG92ZXIgdGhlIG91dHB1dCB0byBtZXJnZSBjb250ZW50IHdoZW4gcG9zc2libGVcblx0ICAgIHZhciBzb3VyY2UgPSB0aGlzLm1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucyk7XG5cblx0ICAgIGlmIChhc09iamVjdCkge1xuXHQgICAgICBwYXJhbXMucHVzaChzb3VyY2UpO1xuXG5cdCAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseSh0aGlzLCBwYXJhbXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc291cmNlLndyYXAoWydmdW5jdGlvbignLCBwYXJhbXMuam9pbignLCcpLCAnKSB7XFxuICAnLCBzb3VyY2UsICd9J10pO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWVyZ2VTb3VyY2U6IGZ1bmN0aW9uIG1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucykge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSxcblx0ICAgICAgICBhcHBlbmRPbmx5ID0gIXRoaXMuZm9yY2VCdWZmZXIsXG5cdCAgICAgICAgYXBwZW5kRmlyc3QgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgc291cmNlU2VlbiA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJTdGFydCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJFbmQgPSB1bmRlZmluZWQ7XG5cdCAgICB0aGlzLnNvdXJjZS5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgIGlmIChsaW5lLmFwcGVuZFRvQnVmZmVyKSB7XG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgICBsaW5lLnByZXBlbmQoJyAgKyAnKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgYnVmZmVyU3RhcnQgPSBsaW5lO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBidWZmZXJFbmQgPSBsaW5lO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgICAgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgICAgIGFwcGVuZEZpcnN0ID0gdHJ1ZTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ2J1ZmZlciArPSAnKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNvdXJjZVNlZW4gPSB0cnVlO1xuXHQgICAgICAgIGlmICghaXNTaW1wbGUpIHtcblx0ICAgICAgICAgIGFwcGVuZE9ubHkgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBpZiAoYXBwZW5kT25seSkge1xuXHQgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gJyk7XG5cdCAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCBidWZmZXIgPSAnICsgKGFwcGVuZEZpcnN0ID8gJycgOiB0aGlzLmluaXRpYWxpemVCdWZmZXIoKSk7XG5cblx0ICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuIGJ1ZmZlciArICcpO1xuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKCdyZXR1cm4gYnVmZmVyOycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmICh2YXJEZWNsYXJhdGlvbnMpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZCgndmFyICcgKyB2YXJEZWNsYXJhdGlvbnMuc3Vic3RyaW5nKDIpICsgKGFwcGVuZEZpcnN0ID8gJycgOiAnO1xcbicpKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLm1lcmdlKCk7XG5cdCAgfSxcblxuXHQgIC8vIFtibG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJldHVybiB2YWx1ZSBvZiBibG9ja0hlbHBlck1pc3Npbmdcblx0ICAvL1xuXHQgIC8vIFRoZSBwdXJwb3NlIG9mIHRoaXMgb3Bjb2RlIGlzIHRvIHRha2UgYSBibG9jayBvZiB0aGUgZm9ybVxuXHQgIC8vIGB7eyN0aGlzLmZvb319Li4ue3svdGhpcy5mb299fWAsIHJlc29sdmUgdGhlIHZhbHVlIG9mIGBmb29gLCBhbmRcblx0ICAvLyByZXBsYWNlIGl0IG9uIHRoZSBzdGFjayB3aXRoIHRoZSByZXN1bHQgb2YgcHJvcGVybHlcblx0ICAvLyBpbnZva2luZyBibG9ja0hlbHBlck1pc3NpbmcuXG5cdCAgYmxvY2tWYWx1ZTogZnVuY3Rpb24gYmxvY2tWYWx1ZShuYW1lKSB7XG5cdCAgICB2YXIgYmxvY2tIZWxwZXJNaXNzaW5nID0gdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgMCwgcGFyYW1zKTtcblxuXHQgICAgdmFyIGJsb2NrTmFtZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgYmxvY2tOYW1lKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthbWJpZ3VvdXNCbG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYmVmb3JlOiBsYXN0SGVscGVyPXZhbHVlIG9mIGxhc3QgZm91bmQgaGVscGVyLCBpZiBhbnlcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXIsIGlmIG5vIGxhc3RIZWxwZXI6IHNhbWUgYXMgW2Jsb2NrVmFsdWVdXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBsYXN0SGVscGVyOiB2YWx1ZVxuXHQgIGFtYmlndW91c0Jsb2NrVmFsdWU6IGZ1bmN0aW9uIGFtYmlndW91c0Jsb2NrVmFsdWUoKSB7XG5cdCAgICAvLyBXZSdyZSBiZWluZyBhIGJpdCBjaGVla3kgYW5kIHJldXNpbmcgdGhlIG9wdGlvbnMgdmFsdWUgZnJvbSB0aGUgcHJpb3IgZXhlY1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmJsb2NrSGVscGVyTWlzc2luZycpLFxuXHQgICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcblx0ICAgIHRoaXMuc2V0dXBIZWxwZXJBcmdzKCcnLCAwLCBwYXJhbXMsIHRydWUpO1xuXG5cdCAgICB0aGlzLmZsdXNoSW5saW5lKCk7XG5cblx0ICAgIHZhciBjdXJyZW50ID0gdGhpcy50b3BTdGFjaygpO1xuXHQgICAgcGFyYW1zLnNwbGljZSgxLCAwLCBjdXJyZW50KTtcblxuXHQgICAgdGhpcy5wdXNoU291cmNlKFsnaWYgKCEnLCB0aGlzLmxhc3RIZWxwZXIsICcpIHsgJywgY3VycmVudCwgJyA9ICcsIHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSwgJ30nXSk7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRDb250ZW50XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIEFwcGVuZHMgdGhlIHN0cmluZyB2YWx1ZSBvZiBgY29udGVudGAgdG8gdGhlIGN1cnJlbnQgYnVmZmVyXG5cdCAgYXBwZW5kQ29udGVudDogZnVuY3Rpb24gYXBwZW5kQ29udGVudChjb250ZW50KSB7XG5cdCAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xuXHQgICAgICBjb250ZW50ID0gdGhpcy5wZW5kaW5nQ29udGVudCArIGNvbnRlbnQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnBlbmRpbmdMb2NhdGlvbiA9IHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IGNvbnRlbnQ7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIENvZXJjZXMgYHZhbHVlYCB0byBhIFN0cmluZyBhbmQgYXBwZW5kcyBpdCB0byB0aGUgY3VycmVudCBidWZmZXIuXG5cdCAgLy9cblx0ICAvLyBJZiBgdmFsdWVgIGlzIHRydXRoeSwgb3IgMCwgaXQgaXMgY29lcmNlZCBpbnRvIGEgc3RyaW5nIGFuZCBhcHBlbmRlZFxuXHQgIC8vIE90aGVyd2lzZSwgdGhlIGVtcHR5IHN0cmluZyBpcyBhcHBlbmRlZFxuXHQgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuXHQgICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuXHQgICAgICB0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbiAoY3VycmVudCkge1xuXHQgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgY3VycmVudCwgJyA6IFwiXCInXTtcblx0ICAgICAgfSk7XG5cblx0ICAgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5wb3BTdGFjaygpKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgbG9jYWwgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICgnLCBsb2NhbCwgJyAhPSBudWxsKSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIobG9jYWwsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUpIHtcblx0ICAgICAgICB0aGlzLnB1c2hTb3VyY2UoWydlbHNlIHsgJywgdGhpcy5hcHBlbmRUb0J1ZmZlcihcIicnXCIsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kRXNjYXBlZF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gRXNjYXBlIGB2YWx1ZWAgYW5kIGFwcGVuZCBpdCB0byB0aGUgYnVmZmVyXG5cdCAgYXBwZW5kRXNjYXBlZDogZnVuY3Rpb24gYXBwZW5kRXNjYXBlZCgpIHtcblx0ICAgIHRoaXMucHVzaFNvdXJjZSh0aGlzLmFwcGVuZFRvQnVmZmVyKFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24nKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcpJ10pKTtcblx0ICB9LFxuXG5cdCAgLy8gW2dldENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vIENvbXBpbGVyIHZhbHVlLCBhZnRlcjogbGFzdENvbnRleHQ9ZGVwdGhcblx0ICAvL1xuXHQgIC8vIFNldCB0aGUgdmFsdWUgb2YgdGhlIGBsYXN0Q29udGV4dGAgY29tcGlsZXIgdmFsdWUgdG8gdGhlIGRlcHRoXG5cdCAgZ2V0Q29udGV4dDogZnVuY3Rpb24gZ2V0Q29udGV4dChkZXB0aCkge1xuXHQgICAgdGhpcy5sYXN0Q29udGV4dCA9IGRlcHRoO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgY29udGV4dCBvbnRvIHRoZSBzdGFjay5cblx0ICBwdXNoQ29udGV4dDogZnVuY3Rpb24gcHVzaENvbnRleHQoKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5jb250ZXh0TmFtZSh0aGlzLmxhc3RDb250ZXh0KSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBPbkNvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0W25hbWVdLCAuLi5cblx0ICAvL1xuXHQgIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgbmFtZWAgb24gdGhlIGN1cnJlbnQgY29udGV4dCBhbmQgcHVzaGVzXG5cdCAgLy8gaXQgb250byB0aGUgc3RhY2suXG5cdCAgbG9va3VwT25Db250ZXh0OiBmdW5jdGlvbiBsb29rdXBPbkNvbnRleHQocGFydHMsIGZhbHN5LCBzdHJpY3QsIHNjb3BlZCkge1xuXHQgICAgdmFyIGkgPSAwO1xuXG5cdCAgICBpZiAoIXNjb3BlZCAmJiB0aGlzLm9wdGlvbnMuY29tcGF0ICYmICF0aGlzLmxhc3RDb250ZXh0KSB7XG5cdCAgICAgIC8vIFRoZSBkZXB0aGVkIHF1ZXJ5IGlzIGV4cGVjdGVkIHRvIGhhbmRsZSB0aGUgdW5kZWZpbmVkIGxvZ2ljIGZvciB0aGUgcm9vdCBsZXZlbCB0aGF0XG5cdCAgICAgIC8vIGlzIGltcGxlbWVudGVkIGJlbG93LCBzbyB3ZSBldmFsdWF0ZSB0aGF0IGRpcmVjdGx5IGluIGNvbXBhdCBtb2RlXG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLmRlcHRoZWRMb29rdXAocGFydHNbaSsrXSkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoQ29udGV4dCgpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdjb250ZXh0JywgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwQmxvY2tQYXJhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogYmxvY2tQYXJhbVtuYW1lXSwgLi4uXG5cdCAgLy9cblx0ICAvLyBMb29rcyB1cCB0aGUgdmFsdWUgb2YgYHBhcnRzYCBvbiB0aGUgZ2l2ZW4gYmxvY2sgcGFyYW0gYW5kIHB1c2hlc1xuXHQgIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuXHQgIGxvb2t1cEJsb2NrUGFyYW06IGZ1bmN0aW9uIGxvb2t1cEJsb2NrUGFyYW0oYmxvY2tQYXJhbUlkLCBwYXJ0cykge1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cblx0ICAgIHRoaXMucHVzaChbJ2Jsb2NrUGFyYW1zWycsIGJsb2NrUGFyYW1JZFswXSwgJ11bJywgYmxvY2tQYXJhbUlkWzFdLCAnXSddKTtcblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2NvbnRleHQnLCBwYXJ0cywgMSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBEYXRhXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBkYXRhLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2ggdGhlIGRhdGEgbG9va3VwIG9wZXJhdG9yXG5cdCAgbG9va3VwRGF0YTogZnVuY3Rpb24gbG9va3VwRGF0YShkZXB0aCwgcGFydHMsIHN0cmljdCkge1xuXHQgICAgaWYgKCFkZXB0aCkge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2RhdGEnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnY29udGFpbmVyLmRhdGEoZGF0YSwgJyArIGRlcHRoICsgJyknKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnZGF0YScsIHBhcnRzLCAwLCB0cnVlLCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICByZXNvbHZlUGF0aDogZnVuY3Rpb24gcmVzb2x2ZVBhdGgodHlwZSwgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpIHtcblx0ICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cblx0ICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuc3RyaWN0IHx8IHRoaXMub3B0aW9ucy5hc3N1bWVPYmplY3RzKSB7XG5cdCAgICAgIHRoaXMucHVzaChzdHJpY3RMb29rdXAodGhpcy5vcHRpb25zLnN0cmljdCAmJiBzdHJpY3QsIHRoaXMsIHBhcnRzLCB0eXBlKSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aDtcblx0ICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgdmFyIGxvb2t1cCA9IF90aGlzLm5hbWVMb29rdXAoY3VycmVudCwgcGFydHNbaV0sIHR5cGUpO1xuXHQgICAgICAgIC8vIFdlIHdhbnQgdG8gZW5zdXJlIHRoYXQgemVybyBhbmQgZmFsc2UgYXJlIGhhbmRsZWQgcHJvcGVybHkgaWYgdGhlIGNvbnRleHQgKGZhbHN5IGZsYWcpXG5cdCAgICAgICAgLy8gbmVlZHMgdG8gaGF2ZSB0aGUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlc2UgdmFsdWVzLlxuXHQgICAgICAgIGlmICghZmFsc3kpIHtcblx0ICAgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgbG9va3VwLCAnIDogJywgY3VycmVudF07XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW4gdXNlIGdlbmVyaWMgZmFsc3kgaGFuZGxpbmdcblx0ICAgICAgICAgIHJldHVybiBbJyAmJiAnLCBsb29rdXBdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFtyZXNvbHZlUG9zc2libGVMYW1iZGFdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXNvbHZlZCB2YWx1ZSwgLi4uXG5cdCAgLy9cblx0ICAvLyBJZiB0aGUgYHZhbHVlYCBpcyBhIGxhbWJkYSwgcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgYnlcblx0ICAvLyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBsYW1iZGFcblx0ICByZXNvbHZlUG9zc2libGVMYW1iZGE6IGZ1bmN0aW9uIHJlc29sdmVQb3NzaWJsZUxhbWJkYSgpIHtcblx0ICAgIHRoaXMucHVzaChbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5sYW1iZGEnKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcsICcsIHRoaXMuY29udGV4dE5hbWUoMCksICcpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFN0cmluZ1BhcmFtXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBzdHJpbmcsIGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3Bjb2RlIGlzIGRlc2lnbmVkIGZvciB1c2UgaW4gc3RyaW5nIG1vZGUsIHdoaWNoXG5cdCAgLy8gcHJvdmlkZXMgdGhlIHN0cmluZyB2YWx1ZSBvZiBhIHBhcmFtZXRlciBhbG9uZyB3aXRoIGl0c1xuXHQgIC8vIGRlcHRoIHJhdGhlciB0aGFuIHJlc29sdmluZyBpdCBpbW1lZGlhdGVseS5cblx0ICBwdXNoU3RyaW5nUGFyYW06IGZ1bmN0aW9uIHB1c2hTdHJpbmdQYXJhbShzdHJpbmcsIHR5cGUpIHtcblx0ICAgIHRoaXMucHVzaENvbnRleHQoKTtcblx0ICAgIHRoaXMucHVzaFN0cmluZyh0eXBlKTtcblxuXHQgICAgLy8gSWYgaXQncyBhIHN1YmV4cHJlc3Npb24sIHRoZSBzdHJpbmcgcmVzdWx0XG5cdCAgICAvLyB3aWxsIGJlIHB1c2hlZCBhZnRlciB0aGlzIG9wY29kZS5cblx0ICAgIGlmICh0eXBlICE9PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RyaW5nKHN0cmluZyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHN0cmluZyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHlIYXNoOiBmdW5jdGlvbiBlbXB0eUhhc2gob21pdEVtcHR5KSB7XG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hJZHNcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hDb250ZXh0c1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hUeXBlc1xuXHQgICAgfVxuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG9taXRFbXB0eSA/ICd1bmRlZmluZWQnIDogJ3t9Jyk7XG5cdCAgfSxcblx0ICBwdXNoSGFzaDogZnVuY3Rpb24gcHVzaEhhc2goKSB7XG5cdCAgICBpZiAodGhpcy5oYXNoKSB7XG5cdCAgICAgIHRoaXMuaGFzaGVzLnB1c2godGhpcy5oYXNoKTtcblx0ICAgIH1cblx0ICAgIHRoaXMuaGFzaCA9IHsgdmFsdWVzOiBbXSwgdHlwZXM6IFtdLCBjb250ZXh0czogW10sIGlkczogW10gfTtcblx0ICB9LFxuXHQgIHBvcEhhc2g6IGZ1bmN0aW9uIHBvcEhhc2goKSB7XG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaGVzLnBvcCgpO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2guaWRzKSk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLmNvbnRleHRzKSk7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC50eXBlcykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudmFsdWVzKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoU3RyaW5nXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBxdW90ZWRTdHJpbmcoc3RyaW5nKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcXVvdGVkIHZlcnNpb24gb2YgYHN0cmluZ2Agb250byB0aGUgc3RhY2tcblx0ICBwdXNoU3RyaW5nOiBmdW5jdGlvbiBwdXNoU3RyaW5nKHN0cmluZykge1xuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucXVvdGVkU3RyaW5nKHN0cmluZykpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaExpdGVyYWxdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHZhbHVlLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyBhIHZhbHVlIG9udG8gdGhlIHN0YWNrLiBUaGlzIG9wZXJhdGlvbiBwcmV2ZW50c1xuXHQgIC8vIHRoZSBjb21waWxlciBmcm9tIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIHRvIGhvbGRcblx0ICAvLyBpdC5cblx0ICBwdXNoTGl0ZXJhbDogZnVuY3Rpb24gcHVzaExpdGVyYWwodmFsdWUpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh2YWx1ZSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoUHJvZ3JhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcHJvZ3JhbShndWlkKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcHJvZ3JhbSBleHByZXNzaW9uIG9udG8gdGhlIHN0YWNrLiBUaGlzIHRha2VzXG5cdCAgLy8gYSBjb21waWxlLXRpbWUgZ3VpZCBhbmQgY29udmVydHMgaXQgaW50byBhIHJ1bnRpbWUtYWNjZXNzaWJsZVxuXHQgIC8vIGV4cHJlc3Npb24uXG5cdCAgcHVzaFByb2dyYW06IGZ1bmN0aW9uIHB1c2hQcm9ncmFtKGd1aWQpIHtcblx0ICAgIGlmIChndWlkICE9IG51bGwpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG51bGwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbcmVnaXN0ZXJEZWNvcmF0b3JdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgZGVjb3JhdG9yJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgZGVjb3JhdG9yLFxuXHQgIC8vIGFuZCBpbnNlcnRzIHRoZSBkZWNvcmF0b3IgaW50byB0aGUgZGVjb3JhdG9ycyBsaXN0LlxuXHQgIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihwYXJhbVNpemUsIG5hbWUpIHtcblx0ICAgIHZhciBmb3VuZERlY29yYXRvciA9IHRoaXMubmFtZUxvb2t1cCgnZGVjb3JhdG9ycycsIG5hbWUsICdkZWNvcmF0b3InKSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplKTtcblxuXHQgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goWydmbiA9ICcsIHRoaXMuZGVjb3JhdG9ycy5mdW5jdGlvbkNhbGwoZm91bmREZWNvcmF0b3IsICcnLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsIG9wdGlvbnNdKSwgJyB8fCBmbjsnXSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VIZWxwZXJdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgaGVscGVyJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgaGVscGVyLFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIGhlbHBlcidzIHJldHVybiB2YWx1ZSBvbnRvIHRoZSBzdGFjay5cblx0ICAvL1xuXHQgIC8vIElmIHRoZSBoZWxwZXIgaXMgbm90IGZvdW5kLCBgaGVscGVyTWlzc2luZ2AgaXMgY2FsbGVkLlxuXHQgIGludm9rZUhlbHBlcjogZnVuY3Rpb24gaW52b2tlSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgaXNTaW1wbGUpIHtcblx0ICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpLFxuXHQgICAgICAgIHNpbXBsZSA9IGlzU2ltcGxlID8gW2hlbHBlci5uYW1lLCAnIHx8ICddIDogJyc7XG5cblx0ICAgIHZhciBsb29rdXAgPSBbJygnXS5jb25jYXQoc2ltcGxlLCBub25IZWxwZXIpO1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XG5cdCAgICAgIGxvb2t1cC5wdXNoKCcgfHwgJywgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpKTtcblx0ICAgIH1cblx0ICAgIGxvb2t1cC5wdXNoKCcpJyk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwobG9va3VwLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VLbm93bkhlbHBlcl1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiB0aGUgaGVscGVyIGlzIGtub3duIHRvIGV4aXN0LFxuXHQgIC8vIHNvIGEgYGhlbHBlck1pc3NpbmdgIGZhbGxiYWNrIGlzIG5vdCByZXF1aXJlZC5cblx0ICBpbnZva2VLbm93bkhlbHBlcjogZnVuY3Rpb24gaW52b2tlS25vd25IZWxwZXIocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpO1xuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChoZWxwZXIubmFtZSwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlQW1iaWd1b3VzXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBkaXNhbWJpZ3VhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIGFuIGV4cHJlc3Npb24gbGlrZSBge3tmb299fWBcblx0ICAvLyBpcyBwcm92aWRlZCwgYnV0IHdlIGRvbid0IGtub3cgYXQgY29tcGlsZS10aW1lIHdoZXRoZXIgaXRcblx0ICAvLyBpcyBhIGhlbHBlciBvciBhIHBhdGguXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBlbWl0cyBtb3JlIGNvZGUgdGhhbiB0aGUgb3RoZXIgb3B0aW9ucyxcblx0ICAvLyBhbmQgY2FuIGJlIGF2b2lkZWQgYnkgcGFzc2luZyB0aGUgYGtub3duSGVscGVyc2AgYW5kXG5cdCAgLy8gYGtub3duSGVscGVyc09ubHlgIGZsYWdzIGF0IGNvbXBpbGUtdGltZS5cblx0ICBpbnZva2VBbWJpZ3VvdXM6IGZ1bmN0aW9uIGludm9rZUFtYmlndW91cyhuYW1lLCBoZWxwZXJDYWxsKSB7XG5cdCAgICB0aGlzLnVzZVJlZ2lzdGVyKCdoZWxwZXInKTtcblxuXHQgICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgdGhpcy5lbXB0eUhhc2goKTtcblx0ICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKDAsIG5hbWUsIGhlbHBlckNhbGwpO1xuXG5cdCAgICB2YXIgaGVscGVyTmFtZSA9IHRoaXMubGFzdEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKTtcblxuXHQgICAgdmFyIGxvb2t1cCA9IFsnKCcsICcoaGVscGVyID0gJywgaGVscGVyTmFtZSwgJyB8fCAnLCBub25IZWxwZXIsICcpJ107XG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcblx0ICAgICAgbG9va3VwWzBdID0gJyhoZWxwZXIgPSAnO1xuXHQgICAgICBsb29rdXAucHVzaCgnICE9IG51bGwgPyBoZWxwZXIgOiAnLCB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5oZWxwZXJNaXNzaW5nJykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2goWycoJywgbG9va3VwLCBoZWxwZXIucGFyYW1zSW5pdCA/IFsnKSwoJywgaGVscGVyLnBhcmFtc0luaXRdIDogW10sICcpLCcsICcodHlwZW9mIGhlbHBlciA9PT0gJywgdGhpcy5hbGlhc2FibGUoJ1wiZnVuY3Rpb25cIicpLCAnID8gJywgdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdoZWxwZXInLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSwgJyA6IGhlbHBlcikpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlUGFydGlhbF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGNvbnRleHQsIC4uLlxuXHQgIC8vIE9uIHN0YWNrIGFmdGVyOiByZXN1bHQgb2YgcGFydGlhbCBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBwb3BzIG9mZiBhIGNvbnRleHQsIGludm9rZXMgYSBwYXJ0aWFsIHdpdGggdGhhdCBjb250ZXh0LFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIHJlc3VsdCBvZiB0aGUgaW52b2NhdGlvbiBiYWNrLlxuXHQgIGludm9rZVBhcnRpYWw6IGZ1bmN0aW9uIGludm9rZVBhcnRpYWwoaXNEeW5hbWljLCBuYW1lLCBpbmRlbnQpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhuYW1lLCAxLCBwYXJhbXMpO1xuXG5cdCAgICBpZiAoaXNEeW5hbWljKSB7XG5cdCAgICAgIG5hbWUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIGRlbGV0ZSBvcHRpb25zLm5hbWU7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpbmRlbnQpIHtcblx0ICAgICAgb3B0aW9ucy5pbmRlbnQgPSBKU09OLnN0cmluZ2lmeShpbmRlbnQpO1xuXHQgICAgfVxuXHQgICAgb3B0aW9ucy5oZWxwZXJzID0gJ2hlbHBlcnMnO1xuXHQgICAgb3B0aW9ucy5wYXJ0aWFscyA9ICdwYXJ0aWFscyc7XG5cdCAgICBvcHRpb25zLmRlY29yYXRvcnMgPSAnY29udGFpbmVyLmRlY29yYXRvcnMnO1xuXG5cdCAgICBpZiAoIWlzRHluYW1pYykge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdCh0aGlzLm5hbWVMb29rdXAoJ3BhcnRpYWxzJywgbmFtZSwgJ3BhcnRpYWwnKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdChuYW1lKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgb3B0aW9ucy5kZXB0aHMgPSAnZGVwdGhzJztcblx0ICAgIH1cblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbCgnY29udGFpbmVyLmludm9rZVBhcnRpYWwnLCAnJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthc3NpZ25Ub0hhc2hdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uLCBoYXNoLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLiwgaGFzaCwgLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIGEgdmFsdWUgb2ZmIHRoZSBzdGFjayBhbmQgYXNzaWducyBpdCB0byB0aGUgY3VycmVudCBoYXNoXG5cdCAgYXNzaWduVG9IYXNoOiBmdW5jdGlvbiBhc3NpZ25Ub0hhc2goa2V5KSB7XG5cdCAgICB2YXIgdmFsdWUgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgY29udGV4dCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICB0eXBlID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGlkID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBpZCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0eXBlID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBjb250ZXh0ID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIGlmIChjb250ZXh0KSB7XG5cdCAgICAgIGhhc2guY29udGV4dHNba2V5XSA9IGNvbnRleHQ7XG5cdCAgICB9XG5cdCAgICBpZiAodHlwZSkge1xuXHQgICAgICBoYXNoLnR5cGVzW2tleV0gPSB0eXBlO1xuXHQgICAgfVxuXHQgICAgaWYgKGlkKSB7XG5cdCAgICAgIGhhc2guaWRzW2tleV0gPSBpZDtcblx0ICAgIH1cblx0ICAgIGhhc2gudmFsdWVzW2tleV0gPSB2YWx1ZTtcblx0ICB9LFxuXG5cdCAgcHVzaElkOiBmdW5jdGlvbiBwdXNoSWQodHlwZSwgbmFtZSwgY2hpbGQpIHtcblx0ICAgIGlmICh0eXBlID09PSAnQmxvY2tQYXJhbScpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdibG9ja1BhcmFtc1snICsgbmFtZVswXSArICddLnBhdGhbJyArIG5hbWVbMV0gKyAnXScgKyAoY2hpbGQgPyAnICsgJyArIEpTT04uc3RyaW5naWZ5KCcuJyArIGNoaWxkKSA6ICcnKSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQYXRoRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RyaW5nKG5hbWUpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCd0cnVlJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ251bGwnKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXG5cdCAgY29tcGlsZXI6IEphdmFTY3JpcHRDb21waWxlcixcblxuXHQgIGNvbXBpbGVDaGlsZHJlbjogZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKSB7XG5cdCAgICB2YXIgY2hpbGRyZW4gPSBlbnZpcm9ubWVudC5jaGlsZHJlbixcblx0ICAgICAgICBjaGlsZCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjb21waWxlciA9IHVuZGVmaW5lZDtcblxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcblx0ICAgICAgY29tcGlsZXIgPSBuZXcgdGhpcy5jb21waWxlcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblxuXHQgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLm1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKTtcblxuXHQgICAgICBpZiAoZXhpc3RpbmcgPT0gbnVsbCkge1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtcy5wdXNoKCcnKTsgLy8gUGxhY2Vob2xkZXIgdG8gcHJldmVudCBuYW1lIGNvbmZsaWN0cyBmb3IgbmVzdGVkIGNoaWxkcmVuXG5cdCAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jb250ZXh0LnByb2dyYW1zLmxlbmd0aDtcblx0ICAgICAgICBjaGlsZC5pbmRleCA9IGluZGV4O1xuXHQgICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBpbmRleDtcblx0ICAgICAgICB0aGlzLmNvbnRleHQucHJvZ3JhbXNbaW5kZXhdID0gY29tcGlsZXIuY29tcGlsZShjaGlsZCwgb3B0aW9ucywgdGhpcy5jb250ZXh0LCAhdGhpcy5wcmVjb21waWxlKTtcblx0ICAgICAgICB0aGlzLmNvbnRleHQuZGVjb3JhdG9yc1tpbmRleF0gPSBjb21waWxlci5kZWNvcmF0b3JzO1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaW5kZXhdID0gY2hpbGQ7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGNvbXBpbGVyLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBjb21waWxlci51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgICBjaGlsZC51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocztcblx0ICAgICAgICBjaGlsZC51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgY2hpbGQuaW5kZXggPSBleGlzdGluZy5pbmRleDtcblx0ICAgICAgICBjaGlsZC5uYW1lID0gJ3Byb2dyYW0nICsgZXhpc3RpbmcuaW5kZXg7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGV4aXN0aW5nLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBleGlzdGluZy51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWF0Y2hFeGlzdGluZ1Byb2dyYW06IGZ1bmN0aW9uIG1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jb250ZXh0LmVudmlyb25tZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW52aXJvbm1lbnQgPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2ldO1xuXHQgICAgICBpZiAoZW52aXJvbm1lbnQgJiYgZW52aXJvbm1lbnQuZXF1YWxzKGNoaWxkKSkge1xuXHQgICAgICAgIHJldHVybiBlbnZpcm9ubWVudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwcm9ncmFtRXhwcmVzc2lvbjogZnVuY3Rpb24gcHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkge1xuXHQgICAgdmFyIGNoaWxkID0gdGhpcy5lbnZpcm9ubWVudC5jaGlsZHJlbltndWlkXSxcblx0ICAgICAgICBwcm9ncmFtUGFyYW1zID0gW2NoaWxkLmluZGV4LCAnZGF0YScsIGNoaWxkLmJsb2NrUGFyYW1zXTtcblxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgdGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcHJvZ3JhbVBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiAnY29udGFpbmVyLnByb2dyYW0oJyArIHByb2dyYW1QYXJhbXMuam9pbignLCAnKSArICcpJztcblx0ICB9LFxuXG5cdCAgdXNlUmVnaXN0ZXI6IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyKG5hbWUpIHtcblx0ICAgIGlmICghdGhpcy5yZWdpc3RlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5yZWdpc3RlcnNbbmFtZV0gPSB0cnVlO1xuXHQgICAgICB0aGlzLnJlZ2lzdGVycy5saXN0LnB1c2gobmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHB1c2g6IGZ1bmN0aW9uIHB1c2goZXhwcikge1xuXHQgICAgaWYgKCEoZXhwciBpbnN0YW5jZW9mIExpdGVyYWwpKSB7XG5cdCAgICAgIGV4cHIgPSB0aGlzLnNvdXJjZS53cmFwKGV4cHIpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLmlubGluZVN0YWNrLnB1c2goZXhwcik7XG5cdCAgICByZXR1cm4gZXhwcjtcblx0ICB9LFxuXG5cdCAgcHVzaFN0YWNrTGl0ZXJhbDogZnVuY3Rpb24gcHVzaFN0YWNrTGl0ZXJhbChpdGVtKSB7XG5cdCAgICB0aGlzLnB1c2gobmV3IExpdGVyYWwoaXRlbSkpO1xuXHQgIH0sXG5cblx0ICBwdXNoU291cmNlOiBmdW5jdGlvbiBwdXNoU291cmNlKHNvdXJjZSkge1xuXHQgICAgaWYgKHRoaXMucGVuZGluZ0NvbnRlbnQpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyh0aGlzLnBlbmRpbmdDb250ZW50KSwgdGhpcy5wZW5kaW5nTG9jYXRpb24pKTtcblx0ICAgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgaWYgKHNvdXJjZSkge1xuXHQgICAgICB0aGlzLnNvdXJjZS5wdXNoKHNvdXJjZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHJlcGxhY2VTdGFjazogZnVuY3Rpb24gcmVwbGFjZVN0YWNrKGNhbGxiYWNrKSB7XG5cdCAgICB2YXIgcHJlZml4ID0gWycoJ10sXG5cdCAgICAgICAgc3RhY2sgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY3JlYXRlZFN0YWNrID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHVzZWRMaXRlcmFsID0gdW5kZWZpbmVkO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgaWYgKCF0aGlzLmlzSW5saW5lKCkpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ3JlcGxhY2VTdGFjayBvbiBub24taW5saW5lJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIFdlIHdhbnQgdG8gbWVyZ2UgdGhlIGlubGluZSBzdGF0ZW1lbnQgaW50byB0aGUgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHZpYSAnLCdcblx0ICAgIHZhciB0b3AgPSB0aGlzLnBvcFN0YWNrKHRydWUpO1xuXG5cdCAgICBpZiAodG9wIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICAvLyBMaXRlcmFscyBkbyBub3QgbmVlZCB0byBiZSBpbmxpbmVkXG5cdCAgICAgIHN0YWNrID0gW3RvcC52YWx1ZV07XG5cdCAgICAgIHByZWZpeCA9IFsnKCcsIHN0YWNrXTtcblx0ICAgICAgdXNlZExpdGVyYWwgPSB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gR2V0IG9yIGNyZWF0ZSB0aGUgY3VycmVudCBzdGFjayBuYW1lIGZvciB1c2UgYnkgdGhlIGlubGluZVxuXHQgICAgICBjcmVhdGVkU3RhY2sgPSB0cnVlO1xuXHQgICAgICB2YXIgX25hbWUgPSB0aGlzLmluY3JTdGFjaygpO1xuXG5cdCAgICAgIHByZWZpeCA9IFsnKCgnLCB0aGlzLnB1c2goX25hbWUpLCAnID0gJywgdG9wLCAnKSddO1xuXHQgICAgICBzdGFjayA9IHRoaXMudG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGl0ZW0gPSBjYWxsYmFjay5jYWxsKHRoaXMsIHN0YWNrKTtcblxuXHQgICAgaWYgKCF1c2VkTGl0ZXJhbCkge1xuXHQgICAgICB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAoY3JlYXRlZFN0YWNrKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICB9XG5cdCAgICB0aGlzLnB1c2gocHJlZml4LmNvbmNhdChpdGVtLCAnKScpKTtcblx0ICB9LFxuXG5cdCAgaW5jclN0YWNrOiBmdW5jdGlvbiBpbmNyU3RhY2soKSB7XG5cdCAgICB0aGlzLnN0YWNrU2xvdCsrO1xuXHQgICAgaWYgKHRoaXMuc3RhY2tTbG90ID4gdGhpcy5zdGFja1ZhcnMubGVuZ3RoKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tWYXJzLnB1c2goJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLnRvcFN0YWNrTmFtZSgpO1xuXHQgIH0sXG5cdCAgdG9wU3RhY2tOYW1lOiBmdW5jdGlvbiB0b3BTdGFja05hbWUoKSB7XG5cdCAgICByZXR1cm4gJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90O1xuXHQgIH0sXG5cdCAgZmx1c2hJbmxpbmU6IGZ1bmN0aW9uIGZsdXNoSW5saW5lKCkge1xuXHQgICAgdmFyIGlubGluZVN0YWNrID0gdGhpcy5pbmxpbmVTdGFjaztcblx0ICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbmxpbmVTdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW50cnkgPSBpbmxpbmVTdGFja1tpXTtcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cdCAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgICB0aGlzLmNvbXBpbGVTdGFjay5wdXNoKGVudHJ5KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLmluY3JTdGFjaygpO1xuXHQgICAgICAgIHRoaXMucHVzaFNvdXJjZShbc3RhY2ssICcgPSAnLCBlbnRyeSwgJzsnXSk7XG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChzdGFjayk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGlzSW5saW5lOiBmdW5jdGlvbiBpc0lubGluZSgpIHtcblx0ICAgIHJldHVybiB0aGlzLmlubGluZVN0YWNrLmxlbmd0aDtcblx0ICB9LFxuXG5cdCAgcG9wU3RhY2s6IGZ1bmN0aW9uIHBvcFN0YWNrKHdyYXBwZWQpIHtcblx0ICAgIHZhciBpbmxpbmUgPSB0aGlzLmlzSW5saW5lKCksXG5cdCAgICAgICAgaXRlbSA9IChpbmxpbmUgPyB0aGlzLmlubGluZVN0YWNrIDogdGhpcy5jb21waWxlU3RhY2spLnBvcCgpO1xuXG5cdCAgICBpZiAoIXdyYXBwZWQgJiYgaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAoIWlubGluZSkge1xuXHQgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICAgICAgaWYgKCF0aGlzLnN0YWNrU2xvdCkge1xuXHQgICAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgc3RhY2sgcG9wJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHRvcFN0YWNrOiBmdW5jdGlvbiB0b3BTdGFjaygpIHtcblx0ICAgIHZhciBzdGFjayA9IHRoaXMuaXNJbmxpbmUoKSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjayxcblx0ICAgICAgICBpdGVtID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXHQgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGNvbnRleHROYW1lOiBmdW5jdGlvbiBjb250ZXh0TmFtZShjb250ZXh0KSB7XG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMgJiYgY29udGV4dCkge1xuXHQgICAgICByZXR1cm4gJ2RlcHRoc1snICsgY29udGV4dCArICddJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnZGVwdGgnICsgY29udGV4dDtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbiBxdW90ZWRTdHJpbmcoc3RyKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHN0cik7XG5cdCAgfSxcblxuXHQgIG9iamVjdExpdGVyYWw6IGZ1bmN0aW9uIG9iamVjdExpdGVyYWwob2JqKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2Uub2JqZWN0TGl0ZXJhbChvYmopO1xuXHQgIH0sXG5cblx0ICBhbGlhc2FibGU6IGZ1bmN0aW9uIGFsaWFzYWJsZShuYW1lKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdO1xuXHQgICAgaWYgKHJldCkge1xuXHQgICAgICByZXQucmVmZXJlbmNlQ291bnQrKztcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH1cblxuXHQgICAgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdID0gdGhpcy5zb3VyY2Uud3JhcChuYW1lKTtcblx0ICAgIHJldC5hbGlhc2FibGUgPSB0cnVlO1xuXHQgICAgcmV0LnJlZmVyZW5jZUNvdW50ID0gMTtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXI6IGZ1bmN0aW9uIHNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgYmxvY2tIZWxwZXIpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBwYXJhbXNJbml0ID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplLCBwYXJhbXMsIGJsb2NrSGVscGVyKTtcblx0ICAgIHZhciBmb3VuZEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKSxcblx0ICAgICAgICBjYWxsQ29udGV4dCA9IHRoaXMuYWxpYXNhYmxlKHRoaXMuY29udGV4dE5hbWUoMCkgKyAnICE9IG51bGwgPyAnICsgdGhpcy5jb250ZXh0TmFtZSgwKSArICcgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KScpO1xuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBwYXJhbXM6IHBhcmFtcyxcblx0ICAgICAgcGFyYW1zSW5pdDogcGFyYW1zSW5pdCxcblx0ICAgICAgbmFtZTogZm91bmRIZWxwZXIsXG5cdCAgICAgIGNhbGxQYXJhbXM6IFtjYWxsQ29udGV4dF0uY29uY2F0KHBhcmFtcylcblx0ICAgIH07XG5cdCAgfSxcblxuXHQgIHNldHVwUGFyYW1zOiBmdW5jdGlvbiBzZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IHt9LFxuXHQgICAgICAgIGNvbnRleHRzID0gW10sXG5cdCAgICAgICAgdHlwZXMgPSBbXSxcblx0ICAgICAgICBpZHMgPSBbXSxcblx0ICAgICAgICBvYmplY3RBcmdzID0gIXBhcmFtcyxcblx0ICAgICAgICBwYXJhbSA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcblx0ICAgICAgcGFyYW1zID0gW107XG5cdCAgICB9XG5cblx0ICAgIG9wdGlvbnMubmFtZSA9IHRoaXMucXVvdGVkU3RyaW5nKGhlbHBlcik7XG5cdCAgICBvcHRpb25zLmhhc2ggPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaGFzaElkcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLmhhc2hUeXBlcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgb3B0aW9ucy5oYXNoQ29udGV4dHMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBpbnZlcnNlID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIHByb2dyYW0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIC8vIEF2b2lkIHNldHRpbmcgZm4gYW5kIGludmVyc2UgaWYgbmVpdGhlciBhcmUgc2V0LiBUaGlzIGFsbG93c1xuXHQgICAgLy8gaGVscGVycyB0byBkbyBhIGNoZWNrIGZvciBgaWYgKG9wdGlvbnMuZm4pYFxuXHQgICAgaWYgKHByb2dyYW0gfHwgaW52ZXJzZSkge1xuXHQgICAgICBvcHRpb25zLmZuID0gcHJvZ3JhbSB8fCAnY29udGFpbmVyLm5vb3AnO1xuXHQgICAgICBvcHRpb25zLmludmVyc2UgPSBpbnZlcnNlIHx8ICdjb250YWluZXIubm9vcCc7XG5cdCAgICB9XG5cblx0ICAgIC8vIFRoZSBwYXJhbWV0ZXJzIGdvIG9uIHRvIHRoZSBzdGFjayBpbiBvcmRlciAobWFraW5nIHN1cmUgdGhhdCB0aGV5IGFyZSBldmFsdWF0ZWQgaW4gb3JkZXIpXG5cdCAgICAvLyBzbyB3ZSBuZWVkIHRvIHBvcCB0aGVtIG9mZiB0aGUgc3RhY2sgaW4gcmV2ZXJzZSBvcmRlclxuXHQgICAgdmFyIGkgPSBwYXJhbVNpemU7XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHBhcmFtID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBwYXJhbXNbaV0gPSBwYXJhbTtcblxuXHQgICAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICAgIGlkc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgICB0eXBlc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgICBjb250ZXh0c1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAob2JqZWN0QXJncykge1xuXHQgICAgICBvcHRpb25zLmFyZ3MgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHBhcmFtcyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaWRzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShpZHMpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMudHlwZXMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHR5cGVzKTtcblx0ICAgICAgb3B0aW9ucy5jb250ZXh0cyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoY29udGV4dHMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gJ2RhdGEnO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9ICdibG9ja1BhcmFtcyc7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gb3B0aW9ucztcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXJBcmdzOiBmdW5jdGlvbiBzZXR1cEhlbHBlckFyZ3MoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcywgdXNlUmVnaXN0ZXIpIHtcblx0ICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKTtcblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBpZiAodXNlUmVnaXN0ZXIpIHtcblx0ICAgICAgdGhpcy51c2VSZWdpc3Rlcignb3B0aW9ucycpO1xuXHQgICAgICBwYXJhbXMucHVzaCgnb3B0aW9ucycpO1xuXHQgICAgICByZXR1cm4gWydvcHRpb25zPScsIG9wdGlvbnNdO1xuXHQgICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcblx0ICAgICAgcGFyYW1zLnB1c2gob3B0aW9ucyk7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgIHZhciByZXNlcnZlZFdvcmRzID0gKCdicmVhayBlbHNlIG5ldyB2YXInICsgJyBjYXNlIGZpbmFsbHkgcmV0dXJuIHZvaWQnICsgJyBjYXRjaCBmb3Igc3dpdGNoIHdoaWxlJyArICcgY29udGludWUgZnVuY3Rpb24gdGhpcyB3aXRoJyArICcgZGVmYXVsdCBpZiB0aHJvdycgKyAnIGRlbGV0ZSBpbiB0cnknICsgJyBkbyBpbnN0YW5jZW9mIHR5cGVvZicgKyAnIGFic3RyYWN0IGVudW0gaW50IHNob3J0JyArICcgYm9vbGVhbiBleHBvcnQgaW50ZXJmYWNlIHN0YXRpYycgKyAnIGJ5dGUgZXh0ZW5kcyBsb25nIHN1cGVyJyArICcgY2hhciBmaW5hbCBuYXRpdmUgc3luY2hyb25pemVkJyArICcgY2xhc3MgZmxvYXQgcGFja2FnZSB0aHJvd3MnICsgJyBjb25zdCBnb3RvIHByaXZhdGUgdHJhbnNpZW50JyArICcgZGVidWdnZXIgaW1wbGVtZW50cyBwcm90ZWN0ZWQgdm9sYXRpbGUnICsgJyBkb3VibGUgaW1wb3J0IHB1YmxpYyBsZXQgeWllbGQgYXdhaXQnICsgJyBudWxsIHRydWUgZmFsc2UnKS5zcGxpdCgnICcpO1xuXG5cdCAgdmFyIGNvbXBpbGVyV29yZHMgPSBKYXZhU2NyaXB0Q29tcGlsZXIuUkVTRVJWRURfV09SRFMgPSB7fTtcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcmVzZXJ2ZWRXb3Jkcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIGNvbXBpbGVyV29yZHNbcmVzZXJ2ZWRXb3Jkc1tpXV0gPSB0cnVlO1xuXHQgIH1cblx0fSkoKTtcblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgIHJldHVybiAhSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTW25hbWVdICYmIC9eW2EtekEtWl8kXVswLTlhLXpBLVpfJF0qJC8udGVzdChuYW1lKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdHJpY3RMb29rdXAocmVxdWlyZVRlcm1pbmFsLCBjb21waWxlciwgcGFydHMsIHR5cGUpIHtcblx0ICB2YXIgc3RhY2sgPSBjb21waWxlci5wb3BTdGFjaygpLFxuXHQgICAgICBpID0gMCxcblx0ICAgICAgbGVuID0gcGFydHMubGVuZ3RoO1xuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIGxlbi0tO1xuXHQgIH1cblxuXHQgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIHN0YWNrID0gY29tcGlsZXIubmFtZUxvb2t1cChzdGFjaywgcGFydHNbaV0sIHR5cGUpO1xuXHQgIH1cblxuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIHJldHVybiBbY29tcGlsZXIuYWxpYXNhYmxlKCdjb250YWluZXIuc3RyaWN0JyksICcoJywgc3RhY2ssICcsICcsIGNvbXBpbGVyLnF1b3RlZFN0cmluZyhwYXJ0c1tpXSksICcpJ107XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiBzdGFjaztcblx0ICB9XG5cdH1cblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBKYXZhU2NyaXB0Q29tcGlsZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogZ2xvYmFsIGRlZmluZSAqL1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgU291cmNlTm9kZSA9IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgaWYgKGZhbHNlKSB7XG5cdCAgICAvLyBXZSBkb24ndCBzdXBwb3J0IHRoaXMgaW4gQU1EIGVudmlyb25tZW50cy4gRm9yIHRoZXNlIGVudmlyb25tZW50cywgd2UgYXN1c21lIHRoYXRcblx0ICAgIC8vIHRoZXkgYXJlIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIgYW5kIHRodXMgaGF2ZSBubyBuZWVkIGZvciB0aGUgc291cmNlLW1hcCBsaWJyYXJ5LlxuXHQgICAgdmFyIFNvdXJjZU1hcCA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKTtcblx0ICAgIFNvdXJjZU5vZGUgPSBTb3VyY2VNYXAuU291cmNlTm9kZTtcblx0ICB9XG5cdH0gY2F0Y2ggKGVycikge31cblx0LyogTk9QICovXG5cblx0LyogaXN0YW5idWwgaWdub3JlIGlmOiB0ZXN0ZWQgYnV0IG5vdCBjb3ZlcmVkIGluIGlzdGFuYnVsIGR1ZSB0byBkaXN0IGJ1aWxkICAqL1xuXHRpZiAoIVNvdXJjZU5vZGUpIHtcblx0ICBTb3VyY2VOb2RlID0gZnVuY3Rpb24gKGxpbmUsIGNvbHVtbiwgc3JjRmlsZSwgY2h1bmtzKSB7XG5cdCAgICB0aGlzLnNyYyA9ICcnO1xuXHQgICAgaWYgKGNodW5rcykge1xuXHQgICAgICB0aGlzLmFkZChjaHVua3MpO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBTb3VyY2VOb2RlLnByb3RvdHlwZSA9IHtcblx0ICAgIGFkZDogZnVuY3Rpb24gYWRkKGNodW5rcykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmtzKSkge1xuXHQgICAgICAgIGNodW5rcyA9IGNodW5rcy5qb2luKCcnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnNyYyArPSBjaHVua3M7XG5cdCAgICB9LFxuXHQgICAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChjaHVua3MpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rcykpIHtcblx0ICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zcmMgPSBjaHVua3MgKyB0aGlzLnNyYztcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZ1dpdGhTb3VyY2VNYXA6IGZ1bmN0aW9uIHRvU3RyaW5nV2l0aFNvdXJjZU1hcCgpIHtcblx0ICAgICAgcmV0dXJuIHsgY29kZTogdGhpcy50b1N0cmluZygpIH07XG5cdCAgICB9LFxuXHQgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5zcmM7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhc3RDaHVuayhjaHVuaywgY29kZUdlbiwgbG9jKSB7XG5cdCAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rKSkge1xuXHQgICAgdmFyIHJldCA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2h1bmsubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgcmV0LnB1c2goY29kZUdlbi53cmFwKGNodW5rW2ldLCBsb2MpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgY2h1bmsgPT09ICdudW1iZXInKSB7XG5cdCAgICAvLyBIYW5kbGUgcHJpbWl0aXZlcyB0aGF0IHRoZSBTb3VyY2VOb2RlIHdpbGwgdGhyb3cgdXAgb25cblx0ICAgIHJldHVybiBjaHVuayArICcnO1xuXHQgIH1cblx0ICByZXR1cm4gY2h1bms7XG5cdH1cblxuXHRmdW5jdGlvbiBDb2RlR2VuKHNyY0ZpbGUpIHtcblx0ICB0aGlzLnNyY0ZpbGUgPSBzcmNGaWxlO1xuXHQgIHRoaXMuc291cmNlID0gW107XG5cdH1cblxuXHRDb2RlR2VuLnByb3RvdHlwZSA9IHtcblx0ICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuXHQgICAgcmV0dXJuICF0aGlzLnNvdXJjZS5sZW5ndGg7XG5cdCAgfSxcblx0ICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKHNvdXJjZSwgbG9jKSB7XG5cdCAgICB0aGlzLnNvdXJjZS51bnNoaWZ0KHRoaXMud3JhcChzb3VyY2UsIGxvYykpO1xuXHQgIH0sXG5cdCAgcHVzaDogZnVuY3Rpb24gcHVzaChzb3VyY2UsIGxvYykge1xuXHQgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLndyYXAoc291cmNlLCBsb2MpKTtcblx0ICB9LFxuXG5cdCAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKCkge1xuXHQgICAgdmFyIHNvdXJjZSA9IHRoaXMuZW1wdHkoKTtcblx0ICAgIHRoaXMuZWFjaChmdW5jdGlvbiAobGluZSkge1xuXHQgICAgICBzb3VyY2UuYWRkKFsnICAnLCBsaW5lLCAnXFxuJ10pO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gc291cmNlO1xuXHQgIH0sXG5cblx0ICBlYWNoOiBmdW5jdGlvbiBlYWNoKGl0ZXIpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnNvdXJjZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpdGVyKHRoaXMuc291cmNlW2ldKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHQgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2F0aW9uIHx8IHsgc3RhcnQ6IHt9IH07XG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSk7XG5cdCAgfSxcblx0ICB3cmFwOiBmdW5jdGlvbiB3cmFwKGNodW5rKSB7XG5cdCAgICB2YXIgbG9jID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jdXJyZW50TG9jYXRpb24gfHwgeyBzdGFydDoge30gfSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgU291cmNlTm9kZSkge1xuXHQgICAgICByZXR1cm4gY2h1bms7XG5cdCAgICB9XG5cblx0ICAgIGNodW5rID0gY2FzdENodW5rKGNodW5rLCB0aGlzLCBsb2MpO1xuXG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSwgY2h1bmspO1xuXHQgIH0sXG5cblx0ICBmdW5jdGlvbkNhbGw6IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbChmbiwgdHlwZSwgcGFyYW1zKSB7XG5cdCAgICBwYXJhbXMgPSB0aGlzLmdlbmVyYXRlTGlzdChwYXJhbXMpO1xuXHQgICAgcmV0dXJuIHRoaXMud3JhcChbZm4sIHR5cGUgPyAnLicgKyB0eXBlICsgJygnIDogJygnLCBwYXJhbXMsICcpJ10pO1xuXHQgIH0sXG5cblx0ICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uIHF1b3RlZFN0cmluZyhzdHIpIHtcblx0ICAgIHJldHVybiAnXCInICsgKHN0ciArICcnKS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykucmVwbGFjZSgvXFxyL2csICdcXFxccicpLnJlcGxhY2UoL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcpIC8vIFBlciBFY21hLTI2MiA3LjMgKyA3LjguNFxuXHQgICAgLnJlcGxhY2UoL1xcdTIwMjkvZywgJ1xcXFx1MjAyOScpICsgJ1wiJztcblx0ICB9LFxuXG5cdCAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbChvYmopIHtcblx0ICAgIHZhciBwYWlycyA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdCAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IGNhc3RDaHVuayhvYmpba2V5XSwgdGhpcyk7XG5cdCAgICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgcGFpcnMucHVzaChbdGhpcy5xdW90ZWRTdHJpbmcoa2V5KSwgJzonLCB2YWx1ZV0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFpcnMpO1xuXHQgICAgcmV0LnByZXBlbmQoJ3snKTtcblx0ICAgIHJldC5hZGQoJ30nKTtcblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIGdlbmVyYXRlTGlzdDogZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmVtcHR5KCk7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChpKSB7XG5cdCAgICAgICAgcmV0LmFkZCgnLCcpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0LmFkZChjYXN0Q2h1bmsoZW50cmllc1tpXSwgdGhpcykpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBnZW5lcmF0ZUFycmF5OiBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChlbnRyaWVzKTtcblx0ICAgIHJldC5wcmVwZW5kKCdbJyk7XG5cdCAgICByZXQuYWRkKCddJyk7XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvZGVHZW47XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsInZhciBEYXRhID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBtYWtlUmVxdWVzdCA9IHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNGdW5jdGlvbihmZXRjaCkgPyBtYWtlRmV0Y2hSZXF1ZXN0IDogbWFrZUFqYXhSZXF1ZXN0OyAvLyBmYWxsYmFjayB0byBhamF4IGlmIG9sZGVyIGJyb3dzZXJcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlQWpheFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gcHJvY2VzcyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnByb2Nlc3NEYXRhID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBzZXQgY29udGVudFR5cGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHBhcmFtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUZldGNoUmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJiByZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzLnRleHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRKc29uKHsgdXJsLCBkaXNhYmxlQ2FjaGUgfSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGRpc2FibGVDYWNoZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgJ1ByYWdtYSc6ICduby1jYWNoZScsXHJcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnR0VUJywgaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0SnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RGb3JtKHsgdXJsLCBmb3JtRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEsIGlzRm9ybTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0RFTEVURScsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdEVycm9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0SnNvbixcclxuICAgICAgICBwb3N0SnNvbixcclxuICAgICAgICBwb3N0Rm9ybSxcclxuICAgICAgICBkZWxldGVKc29uLFxyXG4gICAgICAgIGRlZmF1bHRFcnJvclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgRGF0YSB9O1xyXG4iLCJpbXBvcnQgSGFuZGxlYmFycyBmcm9tICdoYW5kbGViYXJzL2Rpc3QvaGFuZGxlYmFycyc7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGN1c3RvbSBoZWxwZXJzIGZvciBoYW5kbGViYXJzLmpzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxudmFyIGhlbHBlcnMgPSB7XHJcbiAgICAnc3dpdGNoJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc3dpdGNoX3ZhbHVlXyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3N3aXRjaF9icmVha18gPSBmYWxzZTtcclxuICAgICAgICB2YXIgaHRtbCA9IG9wdGlvbnMuZm4odGhpcyk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N3aXRjaF9icmVha187XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N3aXRjaF92YWx1ZV87XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LFxyXG4gICAgJ2Nhc2UnOiBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLnBvcCgpO1xyXG4gICAgICAgIHZhciBjYXNlVmFsdWVzID0gYXJncztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3N3aXRjaF9icmVha18gfHwgY2FzZVZhbHVlcy5pbmRleE9mKHRoaXMuX3N3aXRjaF92YWx1ZV8pID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzaC5icmVhayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3dpdGNoX2JyZWFrXyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICdkZWZhdWx0JzogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3N3aXRjaF9icmVha18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIG1vdmVkIHNlbGVjdCBoZWxwZXIgZnJvbSBsYXlvdXRcclxuICAgICdzZWxlY3QnOiBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgJGVsID0gJCgnPHNlbGVjdCAvPicpLmh0bWwob3B0aW9ucy5mbih0aGlzKSk7XHJcbiAgICAgICAgJGVsLmZpbmQoJ1t2YWx1ZT1cIicgKyB2YWx1ZSArICdcIl0nKS5hdHRyKHsgJ3NlbGVjdGVkJzogJ3NlbGVjdGVkJyB9KTtcclxuICAgICAgICByZXR1cm4gJGVsLmh0bWwoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZvciAobGV0IGtleSBpbiBoZWxwZXJzKSB7XHJcbiAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKGtleSwgaGVscGVyc1trZXldKTtcclxufVxyXG5cclxuZXhwb3J0IHsgSGFuZGxlYmFycyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKHRlbXBsYXRlc0NhY2hlLCB0ZW1wbGF0ZXMpIHtcclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcGxhdGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChEYXRhLmdldEpzb24oeyB1cmw6IHRlbXBsYXRlc1tpXS51cmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShyZXMpO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZXNDYWNoZVt0ZW1wbGF0ZXNbaV0ubmFtZV0gPSB0ZW1wbGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIGZhbHNlOyB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufVxyXG4iLCJ2YXIgTm90aWZpZXIgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHN0YXR1cyBpcyBmb2xsb3dpbmcgYm9vdHN0cmFwIGNvbnZlbnRpb246ICdkYW5nZXInKHJlZCksICd3YXJuaW5nJyh5ZWxsb3cpLCAnc3VjY2VzcycoZ3JlZW4pLCAnaW5mbycoYmx1ZSlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQsIHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMsIHNlY29uZHMsIGlzUGVybWFuZW50LCBzZWxlY3RvciB9KSB7XHJcbiAgICAgICAgbGV0ICR0aXRsZSA9ICQoJzxzdHJvbmc+PC9zdHJvbmc+JywgeyB0ZXh0OiB0aXRsZSB8fCAnJyB9KTtcclxuICAgICAgICBsZXQgJGNsb3NlQnV0dG9uID0gJCgnPGE+PC9hPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdjbG9zZScsXHJcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnYWxlcnQnLFxyXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdjbG9zZScsXHJcbiAgICAgICAgICAgIGh0bWw6ICcmdGltZXM7J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCAkbWVzc2FnZSA9ICQoJzxzcGFuPjwvc3Bhbj4nLCB7IHRleHQ6ICcgJyArIChtZXNzYWdlIHx8ICcnKSB9KTtcclxuICAgICAgICBsZXQgJGFsZXJ0ID0gJCgnPGRpdj48L2Rpdj4nLCB7IGNsYXNzOiAnYWxlcnQgYWxlcnQtJyArIChzdGF0dXMgfHwgJ2luZm8nKSB9KTtcclxuXHJcbiAgICAgICAgJGFsZXJ0LmFwcGVuZCgkdGl0bGUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJGNsb3NlQnV0dG9uKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oc2VsZWN0b3IgfHwgY29udGFpbmVySWQgfHwgJ2JvZHknKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRhbGVydC5mYWRlT3V0KDUwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRhbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAoc2Vjb25kcyB8fCAxMCkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVBbGVydDogY3JlYXRlQWxlcnRcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBOb3RpZmllciB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBOb3RpZmllciB9IGZyb20gJy4uL2NvbW1vbi9ub3RpZmllci5qcyc7XHJcbmltcG9ydCB7IGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzIH0gZnJvbSAnLi4vY29tbW9uL2hhbmRsZWJhcnMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpdGVTeW5jQ29yZSAoc2l0ZVN5bmNNb2RlbCkge1xyXG4gICAgbGV0IGdldERpc3BsYXlOYW1lc1VybDtcclxuICAgIGxldCBnZXRCeURpc3BsYXlOYW1lVXJsO1xyXG4gICAgbGV0IGdldEJ5RGlzcGxheU5hbWVUYXJnZXRVcmw7XHJcbiAgICBsZXQgJGhpc3RvcnlDb250YWluZXIgPSAkKCcuaGlzdG9yeS1jb250ZW50LXJlc3VsdHMnKTtcclxuICAgIGxldCB0YXJnZXREb21haW4gPSAkKCcjdGFyZ2V0cy1zZWxlY3QnKS52YWwoKTtcclxuICAgIGxldCB0ZW1wbGF0ZXNDYWNoZSA9IHt9O1xyXG4gICAgbGV0IHRlbXBsYXRlcyA9IFt7IG5hbWU6ICdzaXRlc3luYy1zb3VyY2UnLCB1cmw6ICcvdGVtcGxhdGVzL3NpdGVzeW5jLXNvdXJjZS5odG1sJyB9LCB7IG5hbWU6ICdzaXRlc3luYy1kZXN0aW5hdGlvbicsIHVybDogJy90ZW1wbGF0ZXMvc2l0ZXN5bmMtZGVzdGluYXRpb24uaHRtbCcgfSwgeyBuYW1lOiAnc2l0ZXN5bmMtc3RhZ2VkJywgdXJsOiAnL3RlbXBsYXRlcy9zaXRlc3luYy1zdGFnZWQuaHRtbCcgfSwgeyBuYW1lOiAnc2l0ZXN5bmMtaGlzdG9yeScsIHVybDogJy90ZW1wbGF0ZXMvc2l0ZXN5bmMtaGlzdG9yeS5odG1sJyB9LCB7IG5hbWU6ICdzaXRlc3luYy1zb3VyY2UtbGlzdGVkJywgdXJsOiAnL3RlbXBsYXRlcy9zaXRlc3luYy1zb3VyY2UtbGlzdGVkLmh0bWwnIH0sIHsgbmFtZTogJ3NpdGVzeW5jLWRlc3RpbmF0aW9uLWxpc3RlZCcsIHVybDogJy90ZW1wbGF0ZXMvc2l0ZXN5bmMtZGVzdGluYXRpb24tbGlzdGVkLmh0bWwnIH1dO1xyXG5cclxuICAgIGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKHRlbXBsYXRlc0NhY2hlLCB0ZW1wbGF0ZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2codGVtcGxhdGVzQ2FjaGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGF0YSBvYmplY3QgXHJcblxyXG4gICAgbGV0IHNpdGVTeW5jQ29udGFpbmVyc0RhdGEgPSB7XHJcbiAgICAgICAgc291cmNlRGF0YToge30sXHJcbiAgICAgICAgc3RhZ2VkSXRlbXM6IHt9LFxyXG4gICAgICAgIGRlc3RpbmF0aW9uRGF0YToge31cclxuICAgIH07XHJcblxyXG4gICAgLyogU3RhZ2VkIGNvbnRhaW5lciByZWxhdGVkIGZ1bmN0aW9ucyovXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRWxlbWVudFRvU3luY0RhdGEoZGlzcGxheU5hbWUsIGlkLCB0aXRsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXMpO1xyXG4gICAgICAgIGlmICghKFtgJHtkaXNwbGF5TmFtZX1gXSBpbiBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnN0YWdlZEl0ZW1zKSkge1xyXG4gICAgICAgICAgICBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnN0YWdlZEl0ZW1zW2Ake2Rpc3BsYXlOYW1lfWBdID0gW3sgaWQ6IGlkLCB0aXRsZTogdGl0bGUgfV0gfHwgW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbnNJdGVtID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXNbYCR7ZGlzcGxheU5hbWV9YF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnN0YWdlZEl0ZW1zW2Ake2Rpc3BsYXlOYW1lfWBdW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zSXRlbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zSXRlbSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXNbYCR7ZGlzcGxheU5hbWV9YF0ucHVzaCh7IGlkOiBpZCwgdGl0bGU6IHRpdGxlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlclN0YWdlZENvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRGcm9tU3luY0RhdGEoZGlzcGxheU5hbWUsIGlkKSB7XHJcbiAgICAgICAgaWYgKFtgJHtkaXNwbGF5TmFtZX1gXSBpbiBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnN0YWdlZEl0ZW1zICYmIHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXNbYCR7ZGlzcGxheU5hbWV9YF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnN0YWdlZEl0ZW1zW2Ake2Rpc3BsYXlOYW1lfWBdID0gc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zdGFnZWRJdGVtc1tgJHtkaXNwbGF5TmFtZX1gXS5maWx0ZXIoZWwgPT4gZWwuaWQgIT09IGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChbYCR7ZGlzcGxheU5hbWV9YF0gaW4gc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zdGFnZWRJdGVtcyAmJiBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnN0YWdlZEl0ZW1zW2Ake2Rpc3BsYXlOYW1lfWBdID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnN0YWdlZEl0ZW1zW2Ake2Rpc3BsYXlOYW1lfWBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJTdGFnZWRDb250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RBbGxTb3VyY2VEYXRhKCkge1xyXG4gICAgICAgIHZhciBjdXJyRG9tYWluID0gZ2V0Q3VycmVudFNlbGVjdGVkU2l0ZSgpO1xyXG4gICAgICAgIHZhciBkaXNwbGF5TmFtZXNVcmwgPSBgJHtnZXREaXNwbGF5TmFtZXNVcmx9P3RhcmdldERvbWFpbj1gICsgY3VyckRvbWFpbjtcclxuICAgICAgICBsZXQgZGlzcGxheU5hbWVzQXJyYXk7XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogZGlzcGxheU5hbWVzVXJsIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lc0FycmF5ID0gcmVzLmRpc3BsYXlOYW1lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGxheU5hbWVzQXJyYXk7XHJcbiAgICAgICAgfSkudGhlbigoZGlzcGxheU5hbWVzQXJyYXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lc0FycmF5LmZvckVhY2goKGRpc3BsYXlOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gYD9kaXNwbGF5TmFtZT0ke2Rpc3BsYXlOYW1lfSZkb21haW49JHtjdXJyRG9tYWlufWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChnZXREaXNwbGF5TmFtZUZvckN1cnJlbnREb21haW4oZGlzcGxheU5hbWUsIGdldEJ5RGlzcGxheU5hbWVVcmwgKyB1cmwsIHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc291cmNlRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChnZXREaXNwbGF5TmFtZUZvckN1cnJlbnREb21haW4oZGlzcGxheU5hbWUsIGdldEJ5RGlzcGxheU5hbWVUYXJnZXRVcmwgKyB1cmwsIHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuZGVzdGluYXRpb25EYXRhKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBsZXQgc291cmNlRGF0YUh0bWwgPSB0ZW1wbGF0ZXNDYWNoZVsnc2l0ZXN5bmMtc291cmNlJ10oeyBpdGVtczogc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zb3VyY2VEYXRhIH0pO1xyXG4gICAgICAgICAgICAvLyBsZXQgZGVzdGluYXRpb25IdG1sID0gdGVtcGxhdGVzQ2FjaGVbJ3NpdGVzeW5jLWRlc3RpbmF0aW9uJ10oeyBpdGVtczogc2l0ZVN5bmNDb250YWluZXJzRGF0YS5kZXN0aW5hdGlvbkRhdGEgfSk7XHJcbiAgICAgICAgICAgIGxldCBzdGFnZWRIdG1sID0gdGVtcGxhdGVzQ2FjaGVbJ3NpdGVzeW5jLXN0YWdlZCddKHsgaXRlbXM6IHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXMgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgJCgnI3NvdXJjZS1jb250YWluZXInKS5odG1sKHNvdXJjZURhdGFIdG1sKTtcclxuICAgICAgICAgICAgLy8gICQoJyNkZXN0aW5hdGlvbi1jb250YWluZXInKS5odG1sKGRlc3RpbmF0aW9uSHRtbCk7XHJcbiAgICAgICAgICAgICQoJyNzdGFnZWQtY29udGFpbmVyJykuaHRtbChzdGFnZWRIdG1sKTtcclxuICAgICAgICAgICAgc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zdGFnZWRJdGVtcyA9IHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc291cmNlRGF0YTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc291cmNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zb3VyY2VEYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICBzaXRlU3luY01vZGVsLmFkZEl0ZW0oa2V5LCB2YWx1ZS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVuZGVyU3RhZ2VkQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVzZWxlY3RBbGxTb3VyY2VEYXRhKCkge1xyXG4gICAgICAgIHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJTdGFnZWRDb250YWluZXIoKSB7XHJcbiAgICAgICAgbGV0IHN0YWdlZEh0bWwgPSB0ZW1wbGF0ZXNDYWNoZVsnc2l0ZXN5bmMtc3RhZ2VkJ10oeyBpdGVtczogc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zdGFnZWRJdGVtcyB9KTtcclxuICAgICAgICAkKCcjc3RhZ2VkLWNvbnRhaW5lcicpLmh0bWwoc3RhZ2VkSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdChnZXREaXNwbGF5TmFtZXMsIGdldEJ5RGlzcGxheU5hbWUsIGdldEJ5RGlzcGxheU5hbWVUYXJnZXQpIHtcclxuICAgICAgICBnZXREaXNwbGF5TmFtZXNVcmwgPSBnZXREaXNwbGF5TmFtZXM7XHJcbiAgICAgICAgZ2V0QnlEaXNwbGF5TmFtZVVybCA9IGdldEJ5RGlzcGxheU5hbWU7XHJcbiAgICAgICAgZ2V0QnlEaXNwbGF5TmFtZVRhcmdldFVybCA9IGdldEJ5RGlzcGxheU5hbWVUYXJnZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIEZpbGwgY29udGFpbmVycyAqL1xyXG5cclxuICAgIC8qIEZvciBnZXQgYWxsICovXHJcbiAgICBmdW5jdGlvbiBmaWxsQ29udGFpbmVycyhkb21haW4pIHtcclxuICAgICAgICB2YXIgZGlzcGxheU5hbWVzVXJsID0gYCR7Z2V0RGlzcGxheU5hbWVzVXJsfT90YXJnZXREb21haW49YCArIGRvbWFpbjtcclxuICAgICAgICBsZXQgZGlzcGxheU5hbWVzQXJyYXk7XHJcbiAgICAgICAgdmFyIGN1cnJEb21haW4gPSBnZXRDdXJyZW50U2VsZWN0ZWRTaXRlKCk7XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogZGlzcGxheU5hbWVzVXJsIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lc0FycmF5ID0gcmVzLmRpc3BsYXlOYW1lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGxheU5hbWVzQXJyYXk7XHJcbiAgICAgICAgfSkudGhlbigoZGlzcGxheU5hbWVzQXJyYXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lc0FycmF5LmZvckVhY2goKGRpc3BsYXlOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gYD9kaXNwbGF5TmFtZT0ke2Rpc3BsYXlOYW1lfSZkb21haW49JHtjdXJyRG9tYWlufWA7XHJcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goZ2V0RGlzcGxheU5hbWVGb3JDdXJyZW50RG9tYWluKGRpc3BsYXlOYW1lLCBnZXRCeURpc3BsYXlOYW1lVXJsICsgdXJsLCBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnNvdXJjZURhdGEpKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goZ2V0RGlzcGxheU5hbWVGb3JDdXJyZW50RG9tYWluKGRpc3BsYXlOYW1lLCBnZXRCeURpc3BsYXlOYW1lVGFyZ2V0VXJsICsgdXJsLCBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLmRlc3RpbmF0aW9uRGF0YSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc291cmNlRGF0YUh0bWwgPSB0ZW1wbGF0ZXNDYWNoZVsnc2l0ZXN5bmMtc291cmNlJ10oeyBpdGVtczogc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zb3VyY2VEYXRhIH0pO1xyXG4gICAgICAgICAgICBsZXQgZGVzdGluYXRpb25IdG1sID0gdGVtcGxhdGVzQ2FjaGVbJ3NpdGVzeW5jLWRlc3RpbmF0aW9uJ10oeyBpdGVtczogc2l0ZVN5bmNDb250YWluZXJzRGF0YS5kZXN0aW5hdGlvbkRhdGEgfSk7XHJcbiAgICAgICAgICAgIGxldCBzdGFnZWRIdG1sID0gdGVtcGxhdGVzQ2FjaGVbJ3NpdGVzeW5jLXN0YWdlZCddKHsgaXRlbXM6IHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXMuaXRlbXNGb3JTeW5jIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2l0ZVN5bmNDb250YWluZXJzRGF0YSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjc291cmNlLWNvbnRhaW5lcicpLmh0bWwoc291cmNlRGF0YUh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjZGVzdGluYXRpb24tY29udGFpbmVyJykuaHRtbChkZXN0aW5hdGlvbkh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjc3RhZ2VkLWNvbnRhaW5lcicpLmh0bWwoc3RhZ2VkSHRtbCk7XHJcblxyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBFbmQgb2YgZ2V0IGFsbCAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxDb250YWluZXJzKGRvbWFpbikge1xyXG4gICAgICAgIHZhciBkaXNwbGF5TmFtZXNVcmwgPSBgJHtnZXREaXNwbGF5TmFtZXNVcmx9P3RhcmdldERvbWFpbj1gICsgZG9tYWluO1xyXG4gICAgICAgIGxldCBkaXNwbGF5TmFtZXNBcnJheTtcclxuICAgICAgICB2YXIgY3VyckRvbWFpbiA9IGdldEN1cnJlbnRTZWxlY3RlZFNpdGUoKTtcclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiBkaXNwbGF5TmFtZXNVcmwgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWVzQXJyYXkgPSByZXMuZGlzcGxheU5hbWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwbGF5TmFtZXNBcnJheTtcclxuICAgICAgICB9KS50aGVuKChkaXNwbGF5TmFtZXNBcnJheSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNwbGF5TmFtZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zb3VyY2VEYXRhW2Ake2Rpc3BsYXlOYW1lc0FycmF5W2ldfWBdID0gW107XHJcbiAgICAgICAgICAgICAgICBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLmRlc3RpbmF0aW9uRGF0YVtgJHtkaXNwbGF5TmFtZXNBcnJheVtpXX1gXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc291cmNlRGF0YUh0bWwgPSB0ZW1wbGF0ZXNDYWNoZVsnc2l0ZXN5bmMtc291cmNlJ10oeyBpdGVtczogZGlzcGxheU5hbWVzQXJyYXkgfSk7XHJcbiAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvbkh0bWwgPSB0ZW1wbGF0ZXNDYWNoZVsnc2l0ZXN5bmMtZGVzdGluYXRpb24nXSh7IGl0ZW1zOiBkaXNwbGF5TmFtZXNBcnJheSB9KTtcclxuICAgICAgICAgICAgbGV0IHN0YWdlZEh0bWwgPSB0ZW1wbGF0ZXNDYWNoZVsnc2l0ZXN5bmMtc3RhZ2VkJ10oe30pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2l0ZVN5bmNDb250YWluZXJzRGF0YSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjc291cmNlLWNvbnRhaW5lcicpLmh0bWwoc291cmNlRGF0YUh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjZGVzdGluYXRpb24tY29udGFpbmVyJykuaHRtbChkZXN0aW5hdGlvbkh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjc3RhZ2VkLWNvbnRhaW5lcicpLmh0bWwoc3RhZ2VkSHRtbCk7XHJcblxyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREYXRhQnlEaXNwbGF5TmFtZShkaXNwbGF5TmFtZSkge1xyXG4gICAgICAgIHZhciBjdXJyRG9tYWluID0gZ2V0Q3VycmVudFNlbGVjdGVkU2l0ZSgpO1xyXG4gICAgICAgIHZhciB1cmwgPSBgP2Rpc3BsYXlOYW1lPSR7ZGlzcGxheU5hbWV9JmRvbWFpbj0ke2N1cnJEb21haW59YDtcclxuICAgICAgICAkKGAjc291cmNlLSR7ZGlzcGxheU5hbWV9LWNvbnRlbnRgKS5odG1sKCdMb2FkaW5nIC4uLicpO1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0RGlzcGxheU5hbWVGb3JDdXJyZW50RG9tYWluKGRpc3BsYXlOYW1lLCBnZXRCeURpc3BsYXlOYW1lVXJsICsgdXJsLCBzaXRlU3luY0NvbnRhaW5lcnNEYXRhLnNvdXJjZURhdGEpLnRoZW4oKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNvdXJjZUl0ZW1zSHRtbCA9IHRlbXBsYXRlc0NhY2hlWydzaXRlc3luYy1zb3VyY2UtbGlzdGVkJ10oeyBpdGVtczogc2l0ZVN5bmNDb250YWluZXJzRGF0YS5zb3VyY2VEYXRhW2Ake2Rpc3BsYXlOYW1lfWBdIH0pO1xyXG4gICAgICAgICAgICAkKGAjc291cmNlLSR7ZGlzcGxheU5hbWV9LWNvbnRlbnRgKS5odG1sKHNvdXJjZUl0ZW1zSHRtbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERhdGFGcm9tRGVzdGluYXRpb25TaXRlKGRpc3BsYXlOYW1lKSB7XHJcblxyXG4gICAgICAgIHZhciBjdXJyRG9tYWluID0gZ2V0Q3VycmVudFNlbGVjdGVkU2l0ZSgpO1xyXG4gICAgICAgIHZhciB1cmwgPSBgP2Rpc3BsYXlOYW1lPSR7ZGlzcGxheU5hbWV9JmRvbWFpbj0ke2N1cnJEb21haW59YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldERpc3BsYXlOYW1lRm9yQ3VycmVudERvbWFpbihkaXNwbGF5TmFtZSwgZ2V0QnlEaXNwbGF5TmFtZVRhcmdldFVybCArIHVybCwgc2l0ZVN5bmNDb250YWluZXJzRGF0YS5kZXN0aW5hdGlvbkRhdGEpLnRoZW4oKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uSXRlbXNIdG1sID0gdGVtcGxhdGVzQ2FjaGVbJ3NpdGVzeW5jLWRlc3RpbmF0aW9uLWxpc3RlZCddKHsgaXRlbXM6IHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuZGVzdGluYXRpb25EYXRhW2Ake2Rpc3BsYXlOYW1lfWBdIH0pO1xyXG5cclxuICAgICAgICAgICAgJChgI2Rlc3RpbmF0aW9uLSR7ZGlzcGxheU5hbWV9LWNvbnRlbnRgKS5odG1sKGRlc3RpbmF0aW9uSXRlbXNIdG1sKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZUZvckN1cnJlbnREb21haW4oZGlzcGxheU5hbWUsIHVybCwgZWxlbWVudFRvU3RvcmUpIHtcclxuICAgICAgICByZXR1cm4gRGF0YS5nZXRKc29uKHsgdXJsOiB1cmwgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUb1N0b3JlW2Ake2Rpc3BsYXlOYW1lfWBdID0gcmVzLnNpdGVTeW5jSXRlbXMgfHwgW107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SXRlbXNCeURpc3BsYXlOYW1lKGRpc3BsYXlOYW1lKSB7XHJcbiAgICAgICAgdmFyIGN1cnJEb21haW4gPSBnZXRDdXJyZW50U2VsZWN0ZWRTaXRlKCk7XHJcblxyXG4gICAgICAgIHZhciB1cmwgPSBgJHtnZXRCeURpc3BsYXlOYW1lVXJsfT9kaXNwbGF5TmFtZT0ke2Rpc3BsYXlOYW1lfSZkb21haW49JHtjdXJyRG9tYWlufWA7XHJcblxyXG4gICAgICAgIGxldCBpdGVtcztcclxuICAgICAgICByZXR1cm4gRGF0YS5nZXRKc29uKHsgdXJsOiB1cmwgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgPSByZXMuc2l0ZVN5bmNJdGVtcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2l0ZVN5bmNNb2RlbC5hZGRJdGVtKGRpc3BsYXlOYW1lLCBpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRFbGVtZW50VG9TeW5jRGF0YShkaXNwbGF5TmFtZSwgaXRlbS5pZCwgaXRlbS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNpdGVTeW5jSXRlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdEl0ZW1zRm9yUHVibGlzaEJ5UGFyZW50RGlzcGxheU5hbWUoZGlzcGxheU5hbWUsIGl0ZW1OYW1lLCBpdGVtSWQpIHtcclxuICAgICAgICB2YXIgJHN0YWdlZENvbnRhaW5lciA9ICQoJyNzdGFnZWQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSAnPGRpdiBjbGFzcz1cIicgKyBpdGVtTmFtZSArICdcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCI+PC9zcGFuPiAnICsgaXRlbU5hbWUgKyAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgbGV0ICRwYXJlbnQgPSAkc3RhZ2VkQ29udGFpbmVyLmZpbmQoJyNzdGFnZWQtJyArIGRpc3BsYXlOYW1lICsgJy1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIGlmICgkcGFyZW50LmZpbmQoJy4nICsgaXRlbU5hbWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkcGFyZW50LmFwcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0lmRGVwZW5kZW5jeUlzQ2hlY2tlZCgpIHtcclxuICAgICAgICBsZXQgJGRlcGVuZGVuY2llcyA9ICQoJy5idG4tZGVwZW5kZW5jaWVzJyk7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IDA7XHJcbiAgICAgICAgaWYgKCQoJGRlcGVuZGVuY2llc1swXSkucHJvcCgnY2hlY2tlZCcpICE9PSB0cnVlICYmICQoJGRlcGVuZGVuY2llc1sxXSkucHJvcCgnY2hlY2tlZCcpICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91IG5lZWQgdG8gc2VsZWN0IHdoZXRoZXIgeW91IHdhbnQgdGhlIGRlcGVuZGVuY2llcyBzeW5jZWQgYXMgd2VsbC4nLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIHNlY29uZHM6IDVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkKCRkZXBlbmRlbmNpZXNbMF0pLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJJZDogJyNhbGVydHMnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdXIgaXRlbXMgYXJlIGJlaW5nIHN5bmNlZCB3aXRoIHRoZWlyIHJlbGF0ZWQgZGVwZW5kZW5jaWVzLicsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHNlY29uZHM6IDVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkKCRkZXBlbmRlbmNpZXNbMV0pLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJJZDogJyNhbGVydHMnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdXIgaXRlbXMgYXJlIGJlaW5nIHN5bmNlZCB3aXRob3V0IHRoZWlyIHJlbGF0ZWQgZGVwZW5kZW5jaWVzLicsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHNlY29uZHM6IDVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IDI7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTZWxlY3RlZFNpdGUoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJTZWxlY3RlZFNpdGUgPSAkKCcjdGFyZ2V0cy1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyU2VsZWN0ZWRTaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNpdGVTeW5jRGF0YSgpIHtcclxuICAgICAgICBsZXQgdXJsID0gJy9zaXRldHJpa3Mvc2l0ZXN5bmMvZ2V0c2l0ZXN5bmNzdGF0dXNlcz9kb21haW49JyArICQoJyN0YXJnZXRzLXNlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgIC8vIGxldCAkY29udGFpbmVyID0gJCgnLmhpc3RvcnktZGF0YScpO1xyXG4gICAgICAgICRoaXN0b3J5Q29udGFpbmVyO1xyXG5cclxuICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6IHVybCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8kaGlzdG9yeUNvbnRhaW5lci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJyb3dcIj48ZGl2IGNsYXNzPVwiY29sLWxnLTFcIj4gU3RhdHVzIDwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtbGctMlwiPiBPcmlnaW4gU2l0ZSA8L2Rpdj48ZGl2IGNsYXNzPVwiY29sLWxnLTJcIj4gVGFyZ2V0IFNpdGUgPC9kaXY+PGRpdiBjbGFzcz1cImNvbC1sZy0yXCI+IE9yaWdpbiBVc2VyIElkIDwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtbGctMlwiPiBEYXRlIENyZWF0ZWQgPC9kaXY+PGRpdiBjbGFzcz1cImNvbC1sZy0yXCI+IERhdGUgTW9kaWZpZWQgPC9kaXY+PGRpdiBjbGFzcz1cImNvbC1sZy0xXCI+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQocmVzLnN0YXR1c2VzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgdGVtcGxhdGUgaGVyZVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdGFnZWRIdG1sID0gdGVtcGxhdGVzQ2FjaGVbJ3NpdGVzeW5jLXN0YWdlZCddKHsgaXRlbXM6IHNpdGVTeW5jQ29udGFpbmVyc0RhdGEuc3RhZ2VkSXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFnZWRIdG1sKTtcclxuICAgICAgICAgICAgICAgICQoJyNzdGFnZWQtY29udGFpbmVyJykuaHRtbChzdGFnZWRIdG1sKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkZXRhaWxzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zQXJyYXkgPSBlbC5jb21tdW5pY2F0aW9uTW9kZWxzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzQnV0dG9uID0gJzxzcGFuIGNsYXNzPVwiZGV0YWlsc1wiPkRldGFpbHM8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0J1dHRvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0YWJsZUxpbmUgPSAnPGRpdiBjbGFzcz1cInJvdyByZXN1bHRzXCI+PGRpdiBjbGFzcz1cImNvbCBjb2wtbGctMlwiPiAnICsgZWwuc3RhdHVzICsgJyA8L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+ICcgKyBlbC5vcmlnaW5TaXRlICsgJyA8L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+ICcgKyBlbC50YXJnZXRTaXRlICsgJyA8L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+ICcgKyBlbC5vcmlnaW5Vc2VySWQgKyAnIDwvZGl2PjxkaXYgY2xhc3M9XCJjb2wgY29sLWxnLTJcIj4gJyArIGVsLmRhdGVDcmVhdGVkICsgJyA8L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+JyArIGRldGFpbHNCdXR0b24gKyAnPC9kaXY+PC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAkaGlzdG9yeUNvbnRhaW5lci5hcHBlbmQodGFibGVMaW5lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0ICRmaWxlRGV0YWlsc1dyYXBwZXIgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdmaWxlLWRldGFpbHMtd3JhcHBlcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGhpc3RvcnlDb250YWluZXIuYXBwZW5kKCRmaWxlRGV0YWlsc1dyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeVRpdGxlcyA9ICc8ZGl2IGNsYXNzPVwicm93IGZpbGUtZGV0YWlsc1wiPjxkaXYgY2xhc3M9XCJjb2wgY29sLWxnLTJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+IFRpdGxlIDwvZGl2PjxkaXYgY2xhc3M9XCJjb2wgY29sLWxnLTJcIj4gU3VjY2Vzc2Z1bDwvZGl2PjxkaXYgY2xhc3M9XCJjb2wgY29sLWxnLTJcIj5JdGVtIHR5cGU8L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+TWVzc2FnZTwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgJGZpbGVEZXRhaWxzV3JhcHBlci5hcHBlbmQoY2F0ZWdvcnlUaXRsZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGl0ZW1zQXJyYXkpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBzeW5jZWRGaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSAneWVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmNlZEZpbGUuc3VjY2Vzc2Z1bCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdubyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlRGV0YWlscyA9ICc8ZGl2IGNsYXNzPVwicm93IGZpbGUtZGV0YWlsc1wiPjxkaXYgY2xhc3M9XCJjb2wgY29sLWxnLTJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+JyArIHN5bmNlZEZpbGUudGl0bGUgKyAnIDwvZGl2PjxkaXYgY2xhc3M9XCJjb2wgY29sLWxnLTJcIj4nICsgc3RhdHVzICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJjb2wgY29sLWxnLTJcIj4nICsgc3luY2VkRmlsZS5pdGVtVHlwZSArICc8L2Rpdj48ZGl2IGNsYXNzPVwiY29sIGNvbC1sZy0yXCI+JyArIHN5bmNlZEZpbGUubWVzc2FnZSArICc8L2Rpdj48L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJGZpbGVEZXRhaWxzV3JhcHBlci5hcHBlbmQoZmlsZURldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQsXHJcbiAgICAgICAgZmlsbENvbnRhaW5lcnMsXHJcbiAgICAgICAgZ2V0SXRlbXNCeURpc3BsYXlOYW1lLFxyXG4gICAgICAgIHNlbGVjdEl0ZW1zRm9yUHVibGlzaEJ5UGFyZW50RGlzcGxheU5hbWUsXHJcbiAgICAgICAgZ2V0RGF0YUZyb21EZXN0aW5hdGlvblNpdGUsXHJcbiAgICAgICAgZ2V0RGF0YUJ5RGlzcGxheU5hbWUsXHJcbiAgICAgICAgZ2V0U2l0ZVN5bmNEYXRhLFxyXG4gICAgICAgIGNoZWNrSWZEZXBlbmRlbmN5SXNDaGVja2VkLFxyXG4gICAgICAgIGFkZEVsZW1lbnRUb1N5bmNEYXRhLFxyXG4gICAgICAgIHJlbW92ZUVsZW1lbnRGcm9tU3luY0RhdGEsXHJcbiAgICAgICAgc2VsZWN0QWxsU291cmNlRGF0YSxcclxuICAgICAgICBkZXNlbGVjdEFsbFNvdXJjZURhdGEsXHJcbiAgICAgICAgcmVuZGVyU3RhZ2VkQ29udGFpbmVyXHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaXRlU3luY01vZGVsICgpIHtcclxuICAgIHZhciBzeW5jTW9kZWwgPSB7XHJcbiAgICAgICAgJ2luY2x1ZGVEZXBlbmRlbmNpZXMnOiB0cnVlLFxyXG4gICAgICAgICd0YXJnZXREb21haW4nOiAnJyxcclxuICAgICAgICAnaXRlbXNGb3JTeW5jJzogW11cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbShkaXNwbGF5TmFtZSwgaWQpIHtcclxuXHJcbiAgICAgICAgaWYgKHN5bmNNb2RlbC5pdGVtc0ZvclN5bmMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgc3luY01vZGVsLml0ZW1zRm9yU3luYy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6IGRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lkcyc6IFtpZF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3VycmVudE9iaiA9IHN5bmNNb2RlbC5pdGVtc0ZvclN5bmMuZmluZChvYmogPT4gb2JqLmRpc3BsYXlOYW1lID09IGRpc3BsYXlOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCFjdXJyZW50T2JqKSB7XHJcblxyXG4gICAgICAgICAgICBzeW5jTW9kZWwuaXRlbXNGb3JTeW5jLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICAnaWRzJzogW2lkXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudE9iaikge1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IGN1cnJlbnRPYmouaWRzLmluZGV4T2YoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9iai5pZHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oZGlzcGxheU5hbWUsIGlkKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRPYmogPSBzeW5jTW9kZWwuaXRlbXNGb3JTeW5jLmZpbmQob2JqID0+IG9iai5kaXNwbGF5TmFtZSA9PSBkaXNwbGF5TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50T2JqKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJySW5kZXggPSBzeW5jTW9kZWwuaXRlbXNGb3JTeW5jLmZpbmQob2JqID0+IG9iai5kaXNwbGF5TmFtZSA9PSBkaXNwbGF5TmFtZSkuaWRzLmluZGV4T2YoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jTW9kZWwuaXRlbXNGb3JTeW5jLmZpbmQob2JqID0+IG9iai5kaXNwbGF5TmFtZSA9PSBkaXNwbGF5TmFtZSkuaWRzLnNwbGljZShjdXJySW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbEl0ZW1zKCkge1xyXG4gICAgICAgIHN5bmNNb2RlbC5pdGVtc0ZvclN5bmMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUYXJnZXREb21haW4odXJsKSB7XHJcbiAgICAgICAgc3luY01vZGVsLnRhcmdldERvbWFpbiA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZXBlbmRlbmNpZXNVc2VUb1RydWUoKSB7XHJcbiAgICAgICAgc3luY01vZGVsLmluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlcGVuZGVuY2llc1VzZVRvRmFsc2UoKSB7XHJcbiAgICAgICAgc3luY01vZGVsLmluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxyXG4gICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXHJcbiAgICAgICAgcmVtb3ZlQWxsSXRlbXM6IHJlbW92ZUFsbEl0ZW1zLFxyXG4gICAgICAgIHVwZGF0ZVRhcmdldERvbWFpbjogdXBkYXRlVGFyZ2V0RG9tYWluLFxyXG4gICAgICAgIHNldERlcGVuZGVuY2llc1VzZVRvVHJ1ZTogc2V0RGVwZW5kZW5jaWVzVXNlVG9UcnVlLFxyXG4gICAgICAgIHNldERlcGVuZGVuY2llc1VzZVRvRmFsc2U6IHNldERlcGVuZGVuY2llc1VzZVRvRmFsc2UsXHJcbiAgICAgICAgZ2V0Q3VycmVudE1vZGVsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzeW5jTW9kZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBOb3RpZmllciB9IGZyb20gJy4uL2NvbW1vbi9ub3RpZmllci5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNpdGVTeW5jTW9kZWwgfSBmcm9tICcuL3NpdGVzeW5jLW1vZGVsLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlU2l0ZVN5bmNDb3JlIH0gZnJvbSAnLi9zaXRlc3luYy1jb3JlJztcclxuXHJcbndpbmRvdy5zaXRlU3luY01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0KGNvbm5lY3RUb1RhcmdldFVybCwgcG9zdFN5bmNVcmwsIGdldERpc3BsYXlOYW1lc1VybCwgZ2V0QnlEaXNwbGF5TmFtZVVybCwgZ2V0QnlEaXNwbGF5TmFtZVRhcmdldFVybCkge1xyXG4gICAgICAgIGNvbnN0IHNpdGVTeW5jTW9kZWwgPSBjcmVhdGVTaXRlU3luY01vZGVsKCk7XHJcbiAgICAgICAgY29uc3Qgc2l0ZVN5bmNDb3JlID0gY3JlYXRlU2l0ZVN5bmNDb3JlKHNpdGVTeW5jTW9kZWwpO1xyXG4gICAgICAgIHNpdGVTeW5jQ29yZS5pbml0KGdldERpc3BsYXlOYW1lc1VybCwgZ2V0QnlEaXNwbGF5TmFtZVVybCwgZ2V0QnlEaXNwbGF5TmFtZVRhcmdldFVybCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyU2VsZWN0ZWRTaXRlID0gJCgnI3RhcmdldHMtc2VsZWN0IG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpLFxyXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRTaXRlSWQgPSAkKCcjdGFyZ2V0cy1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykuYXR0cignZGF0YS1pZCcpLFxyXG4gICAgICAgICAgICAkdGFyZ2V0Qm94ID0gJCgnLnRhcmdldC1ib3gnKSxcclxuICAgICAgICAgICAgJHRhcmdldEVkaXRCdXR0b24gPSAkKCcudGFyZ2V0LWJ1dHRvbi5lZGl0JyksXHJcbiAgICAgICAgICAgICR0YXJnZXRBZGRCdXR0b24gPSAkKCcudGFyZ2V0LWJ1dHRvbi5hZGQnKSxcclxuICAgICAgICAgICAgJHRhcmdldERlbGV0ZUJ1dHRvbiA9ICQoJy50YXJnZXQtYnV0dG9uLmRlbGV0ZScpLFxyXG4gICAgICAgICAgICAkdGFyZ2V0U2VsZWN0ID0gJHRhcmdldEJveC5maW5kKCcjdGFyZ2V0cy1zZWxlY3QnKSxcclxuICAgICAgICAgICAgLy8gJHRhcmdldERlbGV0ZUJ1dHRvbiA9ICR0YXJnZXRCb3guZmluZCgnLmRlbGV0ZS10YXJnZXQnKSxcclxuICAgICAgICAgICAgJGNvbm5lY3RUYXJnZXRCdXR0b24gPSAkKCcjY29ubmVjdC10YXJnZXQnKSxcclxuICAgICAgICAgICAgJGhpc3RvcnlDb250YWluZXIgPSAkKCcuaGlzdG9yeS1kYXRhJyksXHJcbiAgICAgICAgICAgICRoaXN0b3J5QnV0dG9uID0gJCgnI2hpc3RvcnktYnV0dG9uJyksXHJcbiAgICAgICAgICAgICRoaXN0b3J5UmVzdWx0c0NvbnRhaW5lciA9ICQoJy5oaXN0b3J5LWNvbnRlbnQtcmVzdWx0cycpLFxyXG4gICAgICAgICAgICAkYWxlcnRCb3ggPSAkKCcjc2l0ZS1zeW5jLWFsZXJ0JyksXHJcbiAgICAgICAgICAgICRzaXRlU3luY0J1dHRvbiA9ICQoJyNzaXRlLXN5bmMtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q3VycmVudFNlbGVjdGVkU2l0ZSgpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJTZWxlY3RlZFNpdGUgPSAkKCcjdGFyZ2V0cy1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY3VyclNlbGVjdGVkU2l0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0SGlzdG9yeUNvbnRhaW5lcigpIHtcclxuICAgICAgICAgICAgJGhpc3RvcnlDb250YWluZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgJGhpc3RvcnlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2hpc3Rvcnktc2VsZWN0ZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qRXZlbnRzIGZ1bmN0aW9ucyAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdEl0ZW1zRm9yUHVibGlzaCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIHNlbGVjdCBmb3IgcHVibGlzaCcpO1xyXG5cclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUlkID0gJHRhcmdldC5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9ICR0YXJnZXQuYXR0cignZGF0YS1wYXJhZ3JhcGgtdGl0bGUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgKCEoJHRhcmdldC5pcygnOmNoZWNrZWQnKSkpIHtcclxuICAgICAgICAgICAgLy8gICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIGxldCBpZCA9ICR0YXJnZXQuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxheU5hbWUgPSAkdGFyZ2V0LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoJ2RhdGEtZGlzcGxheU5hbWUnKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gJHRhcmdldC5hdHRyKCdkYXRhLXBhcmFncmFwaC10aXRsZScpO1xyXG5cclxuICAgICAgICAgICAgc2l0ZVN5bmNNb2RlbC5hZGRJdGVtKGRpc3BsYXlOYW1lLCBpZCk7XHJcbiAgICAgICAgICAgIHNpdGVTeW5jQ29yZS5hZGRFbGVtZW50VG9TeW5jRGF0YShkaXNwbGF5TmFtZSwgaWQsIHRpdGxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2l0ZVN5bmNNb2RlbC5nZXRDdXJyZW50TW9kZWwoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZWxlY3RBbGxJdGVtcygpIHtcclxuICAgICAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcjc291cmNlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBsZXQgJGNoZWNrYm94ZXMgPSAkY29udGFpbmVyLmZpbmQoJy5zb3VyY2UtaXRlbXMnKTtcclxuXHJcbiAgICAgICAgICAgICRjaGVja2JveGVzLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHNpdGVTeW5jQ29yZS5zZWxlY3RBbGxTb3VyY2VEYXRhKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gY2hlY2tib3ggc2VsZWN0XHJcbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0QWxsQnlEaXNwbGF5TmFtZSgpIHtcclxuICAgICAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5hdHRyKCdkYXRhLWRpc3BsYXlOYW1lJyk7XHJcblxyXG4gICAgICAgICAgICBzaXRlU3luY0NvcmUuZ2V0SXRlbXNCeURpc3BsYXlOYW1lKGRpc3BsYXlOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc2VsZWN0QWxsSXRlbXMoKSB7XHJcbiAgICAgICAgICAgICQoJyNzdGFnZWQtY29udGFpbmVyJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIHVuY2hlY2tJdGVtcygpO1xyXG4gICAgICAgICAgICBzaXRlU3luY01vZGVsLnJlbW92ZUFsbEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIHNpdGVTeW5jQ29yZS5kZXNlbGVjdEFsbFNvdXJjZURhdGEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVuY2hlY2tJdGVtcygpIHtcclxuICAgICAgICAgICAgJCgnLnNvdXJjZS1pdGVtcycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVTaW5nbGVTdGFnZWRJdGVtKCkge1xyXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGF5TmFtZSA9ICR0YXJnZXQucGFyZW50KCkucGFyZW50KCkuYXR0cignaWQnKS5zcGxpdCgnLScpWzFdO1xyXG4gICAgICAgICAgICBsZXQgaXRlbUlkID0gJHRhcmdldC5wYXJlbnQoKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHJlbW92ZUl0ZW1cclxuICAgICAgICAgICAgc2l0ZVN5bmNDb3JlLnJlbW92ZUVsZW1lbnRGcm9tU3luY0RhdGEoZGlzcGxheU5hbWUsIGl0ZW1JZCk7XHJcbiAgICAgICAgICAgIHNpdGVTeW5jTW9kZWwucmVtb3ZlSXRlbShkaXNwbGF5TmFtZSwgaXRlbUlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlEZWxldGVNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICBsZXQgJHBvcHVwID0gJCgnLmRlbGV0ZS1wb3B1cCcpO1xyXG4gICAgICAgICAgICAkcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkZWxldGVUYXJnZXQoKSB7XHJcbiAgICAgICAgICAgIGxldCAkc2VsZWN0ZWRPcHRpb24gPSAkdGFyZ2V0U2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0SWQgPSAkdGFyZ2V0U2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAnL3NpdGV0cmlrcy9zaXRlc3luY3RhcmdldHMvZGVsZXRlLycgKyB0YXJnZXRJZDtcclxuXHJcbiAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmwgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0U2VsZWN0LnZhbCgwKTtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RlZE9wdGlvbi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlRGVsZXRlTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheURlbGV0ZU1lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgIGxldCAkcG9wdXAgPSAkKCcuZGVsZXRlLXBvcHVwJyk7XHJcbiAgICAgICAgICAgICRwb3B1cC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRGVsZXRlTWVzc2FnZSgpIHtcclxuICAgICAgICAgICAgbGV0ICRwb3B1cCA9ICQoJy5kZWxldGUtcG9wdXAnKTtcclxuXHJcbiAgICAgICAgICAgICRwb3B1cC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheUhpc3RvcnlDb250YWluZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICgkaGlzdG9yeUJ1dHRvbi5oYXNDbGFzcygnY2xpY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkaGlzdG9yeVJlc3VsdHNDb250YWluZXIuaHRtbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGhpc3RvcnlDb250YWluZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICRoaXN0b3J5QnV0dG9uLnJlbW92ZUNsYXNzKCdoaXN0b3J5LXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAkaGlzdG9yeUJ1dHRvbi5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGhpc3RvcnlDb250YWluZXIuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAkaGlzdG9yeVJlc3VsdHNDb250YWluZXIuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkaGlzdG9yeUJ1dHRvbi5hZGRDbGFzcygnaGlzdG9yeS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgJGhpc3RvcnlCdXR0b24uYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzaXRlU3luY0NvcmUuZ2V0U2l0ZVN5bmNEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlTeW5jZWRGaWxlcygpIHtcclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgJGZpbGVEZXRhaWxzID0gJHRhcmdldC5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAkZmlsZURldGFpbHMudG9nZ2xlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkNvbm5lY3RUYXJnZXQoZSkge1xyXG4gICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICByZXNldEhpc3RvcnlDb250YWluZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdncmF5ZWQtb3V0JykpIHtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ2dyYXllZC1vdXQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VyclNlbGVjdGVkU2l0ZSA9IGdldEN1cnJlbnRTZWxlY3RlZFNpdGUoKTtcclxuICAgICAgICAgICAgdmFyIHVybCA9IGAke2Nvbm5lY3RUb1RhcmdldFVybH0/dGFyZ2V0RG9tYWluPWAgKyBjdXJyU2VsZWN0ZWRTaXRlO1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gJ2Rhbmdlcic7XHJcblxyXG4gICAgICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6IHVybCB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKHJlcy5zdWNjZXNzID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY29ubmVjdC10YXJnZXQnKS5hZGRDbGFzcygnZ3JheWVkLW91dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySWQ6ICcjYWxlcnRzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXMubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblRhcmdldFNlbGVjdCgpIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0SGlzdG9yeUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICAkKCcjc291cmNlLWNvbnRhaW5lcicpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjc3RhZ2VkLWNvbnRhaW5lcicpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjZGVzdGluYXRpb24tY29udGFpbmVyJykuaHRtbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAkKCcuZWRpdC10YXJnZXQtZm9ybScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICQoJy5jcmVhdGUtdGFyZ2V0LWZvcm0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gZW5hYmxlIHRoZSBzdGFydCBidXR0b25cclxuICAgICAgICAgICAgJGNvbm5lY3RUYXJnZXRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2dyYXllZC1vdXQnKTtcclxuICAgICAgICAgICAgJHNpdGVTeW5jQnV0dG9uLnJlbW92ZUNsYXNzKCdncmF5ZWQtb3V0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXREb21haW4gPSAkdGFyZ2V0U2VsZWN0LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgc2l0ZVN5bmNNb2RlbC51cGRhdGVUYXJnZXREb21haW4odGFyZ2V0RG9tYWluKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjdXJyU2VsZWN0ZWRTaXRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgc2l0ZVN5bmNDb3JlLmZpbGxDb250YWluZXJzKGN1cnJTZWxlY3RlZFNpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25DbGlja1NvdXJjZUNvbnRhaW5lckRpc3BsYXlOYW1lKCkge1xyXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBkaXNwbGF5TmFtZSA9ICQodGhpcykuYXR0cignZGF0YS1kaXNwbGF5TmFtZScpO1xyXG5cclxuICAgICAgICAgICAgdmFyICRnbHlwaGljb25zID0gbWFpbkNvbnRhaW5lci5maW5kKCcuZ2x5cGhpY29uJyk7XHJcbiAgICAgICAgICAgICRnbHlwaGljb25zLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICBzaXRlU3luY0NvcmUuZ2V0RGF0YUJ5RGlzcGxheU5hbWUoZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBtYWluQ29udGFpbmVyLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnQuc2xpZGVUb2dnbGUoNTAwLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uQ2xpY2tTdGFnZUNvbnRhaW5lckRpc3BsYXlOYW1lKCkge1xyXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBkaXNwbGF5TmFtZSA9ICQodGhpcykuYXR0cignZGF0YS1kaXNwbGF5TmFtZScpO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IG1haW5Db250YWluZXIubmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyICRnbHlwaGljb25zID0gbWFpbkNvbnRhaW5lci5maW5kKCcuZ2x5cGhpY29uJyk7XHJcbiAgICAgICAgICAgICRnbHlwaGljb25zLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgY29udGVudC5zbGlkZVRvZ2dsZSg1MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkNsaWNrRGVzdGluYXRpb25Db250YWluZXJEaXNwbGF5TmFtZSgpIHtcclxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZGlzcGxheU5hbWUnKTtcclxuICAgICAgICAgICAgdmFyICRnbHlwaGljb25zID0gbWFpbkNvbnRhaW5lci5maW5kKCcuZ2x5cGhpY29uJyk7XHJcbiAgICAgICAgICAgICRnbHlwaGljb25zLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgc2l0ZVN5bmNDb3JlLmdldERhdGFGcm9tRGVzdGluYXRpb25TaXRlKGRpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBtYWluQ29udGFpbmVyLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnQuc2xpZGVUb2dnbGUoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25DbGlja0RlcGVuZGVuY3lSYWRpb0J1dHRvbigpIHtcclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCR0YXJnZXQucHJvcCgnY2hlY2tlZCcgPT09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYnRuLWRlcGVuZGVuY2llcycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgpLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblN5bmMoKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSBzaXRlU3luY0NvcmUuY2hlY2tJZkRlcGVuZGVuY3lJc0NoZWNrZWQoKTtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHBvc3RTeW5jVXJsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVTeW5jTW9kZWwuc2V0RGVwZW5kZW5jaWVzVXNlVG9UcnVlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHNpdGVTeW5jTW9kZWwuc2V0RGVwZW5kZW5jaWVzVXNlVG9GYWxzZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHNpdGVTeW5jTW9kZWwuZ2V0Q3VycmVudE1vZGVsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAkc2l0ZVN5bmNCdXR0b24uYWRkQ2xhc3MoJ2dyYXllZC1vdXQnKTtcclxuICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogdXJsLCBkYXRhOiBkYXRhIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIHJlcy5tZXNzYWdlLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3N5bmMtc3RhdHVzLWl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiAnPHNwYW4+JyArIHZhbHVlLnNwbGl0KCcsJylbMV0gKyAnPC9zcGFuPjxzcGFuPicgKyB2YWx1ZS5zcGxpdCgnLCcpWzJdLnJlcGxhY2UoJzsnLCAnICcpICsgJzwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oJyNzaXRlLXN5bmMtYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGRlc2VsZWN0QWxsSXRlbXMoKTtcclxuICAgICAgICAgICAgICAgICRzaXRlU3luY0J1dHRvbi5yZW1vdmVDbGFzcygnZ3JheWVkLW91dCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEVkaXRUYXJnZXQoKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRJZCA9ICQoJyN0YXJnZXRzLXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgICAgICAgICAkdGFyZ2V0RWRpdEJ1dHRvbi5hdHRyKCdkYXRhLWVkaXQtdXJsJywgJy9zaXRldHJpa3Mvc2l0ZXN5bmN0YXJnZXRzL2VkaXQ/aWQ9JyArIHRhcmdldElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlFZGl0VGFyZ2V0KCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHVybCA9ICR0YXJnZXRFZGl0QnV0dG9uLmF0dHIoJ2RhdGEtZWRpdC11cmwnKSxcclxuICAgICAgICAgICAgICAgICRlZGl0Rm9ybSA9ICQoJy5lZGl0LXRhcmdldC1mb3JtJyksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXROYW1lID0gJGVkaXRGb3JtLmZpbmQoJyNOYW1lJyksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXRVcmwgPSAkZWRpdEZvcm0uZmluZCgnI1VybCcpO1xyXG5cclxuICAgICAgICAgICAgJGVkaXRGb3JtLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAkKCcuY3JlYXRlLXRhcmdldC1mb3JtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgICAgICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogdXJsIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dE5hbWUudmFsKHJlcy50YXJnZXROYW1lKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dFVybC52YWwocmVzLnVybCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3VibWl0RWRpdERhdGEoZXYpIHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRJZCA9ICQoJyN0YXJnZXRzLXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICAgICAgICAkZWRpdEZvcm0gPSAkKCcuZWRpdC10YXJnZXQtZm9ybScpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0TmFtZSA9ICRlZGl0Rm9ybS5maW5kKCcjTmFtZScpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0VXJsID0gJGVkaXRGb3JtLmZpbmQoJyNVcmwnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJGlucHV0TmFtZS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHVybDogJGlucHV0VXJsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICQoJyN0YXJnZXRzLXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWlkJylcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIERhdGEucG9zdEpzb24oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3NpdGV0cmlrcy9zaXRlc3luY3RhcmdldHMvZWRpdD9pZD0nICsgdGFyZ2V0SWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJZDogJyNhbGVydHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXMubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVkaXQtdGFyZ2V0LWZvcm0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRGb3JtKCkge1xyXG4gICAgICAgICAgICAkKCcuY3JlYXRlLXRhcmdldC1mb3JtJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICQoJy5lZGl0LXRhcmdldC1mb3JtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFyZ2V0Q3JlYXRlKGV2KSB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCAkY3JlYXRlRm9ybSA9ICQoJyNjcmVhdGUtdGFyZ2V0LWZvcm0nKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dE5hbWUgPSAkY3JlYXRlRm9ybS5maW5kKCcjbmFtZScpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0VXJsID0gJGNyZWF0ZUZvcm0uZmluZCgnI3VybCcpLFxyXG4gICAgICAgICAgICAgICAgJGVtYWlsID0gJGNyZWF0ZUZvcm0uZmluZCgnI2VtYWlsJyksXHJcbiAgICAgICAgICAgICAgICAkcGFzc3dvcmQgPSAkY3JlYXRlRm9ybS5maW5kKCcjcGFzc3dvcmQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJGlucHV0TmFtZS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHVybDogJGlucHV0VXJsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQudmFsKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAnL3NpdGV0cmlrcy9zaXRlc3luY3RhcmdldHMvY3JlYXRlJztcclxuXHJcbiAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IHVybCwgZGF0YTogZGF0YSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuY3JlYXRlLXRhcmdldC1mb3JtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgdG8gc2VsZWN0IG1lbnVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgJHNlbGVjdE1lbnUgPSAkKCcjdGFyZ2V0cy1zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgJG9wdGlvbiA9ICQoJzxvcHRpb24+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJGlucHV0VXJsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAkaW5wdXRVcmwudmFsKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmh0bWwoJGlucHV0VXJsLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuc2l0ZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2RhdGEtaWQnLCByZXMuc2l0ZUlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNlbGVjdE1lbnUuYXBwZW5kKCRvcHRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJZDogJyNhbGVydHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXMubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySWQ6ICcjYWxlcnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHM6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdkYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBFbmQgRXZlbnRzIGZ1bmN0aW9ucyAqL1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICAgICAgJCgnI3NvdXJjZS1jb250YWluZXInKS5vbignY2xpY2snLCAnLnNvdXJjZS1jaGVja2JveCcsIHNlbGVjdEl0ZW1zRm9yUHVibGlzaCk7XHJcblxyXG4gICAgICAgICAgICAkKCcjc291cmNlLWNvbnRhaW5lcicpLm9uKCdjbGljaycsICcuc2VsZWN0LWFsbCcsIHNlbGVjdEFsbEl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNzb3VyY2UtY29udGFpbmVyJykub24oJ2NsaWNrJywgJy5zb3VyY2UtaXRlbXMnLCBzZWxlY3RBbGxCeURpc3BsYXlOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNzdGFnZWQtY29udGFpbmVyJykub24oJ2NsaWNrJywgJy5kZXNlbGVjdC1hbGwnLCBkZXNlbGVjdEFsbEl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNzdGFnZWQtY29udGFpbmVyJykub24oJ2NsaWNrJywgJy5nbHlwaGljb24tcmVtb3ZlJywgcmVtb3ZlU2luZ2xlU3RhZ2VkSXRlbSk7XHJcblxyXG4gICAgICAgICAgICAkdGFyZ2V0RGVsZXRlQnV0dG9uLm9uKCdjbGljaycsIGRpc3BsYXlEZWxldGVNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5idG4teWVzJykub24oJ2NsaWNrJywgZGVsZXRlVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5idG4tbm8nKS5vbignY2xpY2snLCBjbG9zZURlbGV0ZU1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgJCgnI2hpc3RvcnktYnV0dG9uJykub24oJ2NsaWNrJywgZGlzcGxheUhpc3RvcnlDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmhpc3RvcnktZGF0YScpLm9uKCdjbGljaycsICcuZGV0YWlscycsIGRpc3BsYXlTeW5jZWRGaWxlcyk7XHJcblxyXG4gICAgICAgICAgICAkY29ubmVjdFRhcmdldEJ1dHRvbi5vbignY2xpY2snLCBvbkNvbm5lY3RUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgJHRhcmdldFNlbGVjdC5vbignY2hhbmdlJywgb25UYXJnZXRTZWxlY3QpO1xyXG5cclxuICAgICAgICAgICAgJHRhcmdldFNlbGVjdC5vbignY2hhbmdlJywgc2V0RWRpdFRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAkc2l0ZVN5bmNCdXR0b24ub24oJ2NsaWNrJywgb25TeW5jKTtcclxuXHJcbiAgICAgICAgICAgIC8qU2xpZGUgRXZlbnRzICovXHJcbiAgICAgICAgICAgICQoJyNzb3VyY2UtY29udGFpbmVyJykub24oJ2NsaWNrJywgJy5tYWluLWVsZW1lbnQnLCBvbkNsaWNrU291cmNlQ29udGFpbmVyRGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgJCgnI3N0YWdlZC1jb250YWluZXInKS5vbignY2xpY2snLCAnLm1haW4tZWxlbWVudCcsIG9uQ2xpY2tTdGFnZUNvbnRhaW5lckRpc3BsYXlOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNkZXN0aW5hdGlvbi1jb250YWluZXInKS5vbignY2xpY2snLCAnLm1haW4tZWxlbWVudCcsIG9uQ2xpY2tEZXN0aW5hdGlvbkNvbnRhaW5lckRpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgLyogRW5kIFNsaWRlIEV2ZW50cyAqL1xyXG5cclxuICAgICAgICAgICAgJCgnLmRlcGVuZGVuY2llcycpLm9uKCdjbGljaycsICcuYnRuLWRlcGVuZGVuY2llcycsIG9uQ2xpY2tEZXBlbmRlbmN5UmFkaW9CdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgLypUbyBtb3ZlKi9cclxuXHJcbiAgICAgICAgICAgICQoJy5lZGl0Jykub24oJ2NsaWNrJywgZGlzcGxheUVkaXRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmJ0bi1hZGQtdGFyZ2V0Jykub24oJ2NsaWNrJywgb25UYXJnZXRDcmVhdGUpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmJ0bi1lZGl0LXRhcmdldCcpLm9uKCdjbGljaycsIHN1Ym1pdEVkaXREYXRhKTtcclxuXHJcbiAgICAgICAgICAgICR0YXJnZXRBZGRCdXR0b24ub24oJ2NsaWNrJywgZGlzcGxheUFkZEZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRcclxuICAgIH07XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==