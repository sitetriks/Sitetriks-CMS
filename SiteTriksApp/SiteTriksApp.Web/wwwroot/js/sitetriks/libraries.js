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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/libraries.js");
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

/***/ "./scripts/common/loader.js":
/*!**********************************!*\
  !*** ./scripts/common/loader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* Loader.js version 1.1 */
var Loader = function () {
    var gifSrc = '/images/loading.gif';

    return {
        //showWithProgress: function (progressBarData, color) {
        //    if (color === true) {
        //        color = '#fff';
        //    }

        //    let $parent = Blur.add({ color });

        //    let bar = ProgressBar.build({ data: progressBarData, $parent: $parent, cssClass: 'blur-content' })[0];
        //    let data = $(bar).data(progressBarData.name)
        //        .onStart();
        //},
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

exports.Loader = Loader;

// Gallery registration

(function () {
    $('body').on('click', 'img.display-image, img.gallery-image', function (ev) {
        var $target = $(ev.target);
        var src = $target.attr('src');

        var $container = Blur.add({ hideOnClick: true });
        $('<img />', {
            class: 'blur-content preview-image',
            src: src
        }).appendTo($container);
    });
})();

// Helper class for loader and gallery
var Blur = function () {
    var PREVIEW_CONTAINER_CLASS = 'preview-container';
    var PREVIEW_ITEM_CONTAINER_CLASS = 'preview-item-container';
    var BLUR_ELEMENT_CLASS = 'blur';

    function addBlur(_ref) {
        var hideOnClick = _ref.hideOnClick,
            color = _ref.color,
            opacity = _ref.opacity;

        if (hideOnClick !== true) {
            hideOnClick = false;
        }

        $('html').addClass('st-no-overflow');

        var $blurElement = $('<div></div>', {
            class: BLUR_ELEMENT_CLASS
        });

        var $itemContainer = $('<div></div>', {
            class: PREVIEW_ITEM_CONTAINER_CLASS
        });

        var $previewContainer = $('<div></div>', {
            class: PREVIEW_CONTAINER_CLASS
        });

        if (hideOnClick) {
            $previewContainer.on('click', removeBlur);
            $blurElement.on('click', removeBlur);
        }

        if (color) {
            $blurElement.css('background-color', color);
        }

        if (opacity && isNaN(+opacity) && opacity >= 0 && opacity <= 1) {
            $blurElement.css('opacity', opacity);
        }

        $previewContainer.append($itemContainer);
        $('body').append($previewContainer);
        $('body').append($blurElement);

        return $itemContainer;
    }

    function removeBlur() {
        $('body').find('.' + BLUR_ELEMENT_CLASS).remove();
        $('body').find('.' + PREVIEW_CONTAINER_CLASS).remove();
        $('html').removeClass('st-no-overflow');
    }

    return {
        add: addBlur,
        remove: removeBlur
    };
}();

exports.Blur = Blur;

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

/***/ "./scripts/common/utils.js":
/*!*********************************!*\
  !*** ./scripts/common/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Utils = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    function guid() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function isGuid(stringToTest) {
        if (stringToTest[0] === '{') {
            stringToTest = stringToTest.substring(1, stringToTest.length - 1);
        }
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(stringToTest);
    }

    function loadjscssfile(filename, filetype) {
        var fileref = void 0;
        if (filetype === 'js') {
            //if filename is a external JavaScript file
            fileref = document.createElement('script');
            fileref.setAttribute('type', 'text/javascript');
            fileref.setAttribute('src', filename);
        } else if (filetype === 'css') {
            //if filename is an external CSS file
            fileref = document.createElement('link');
            fileref.setAttribute('rel', 'stylesheet');
            fileref.setAttribute('type', 'text/css');
            fileref.setAttribute('href', filename);
        }
        if (typeof fileref !== 'undefined') {
            document.getElementsByTagName('head')[0].appendChild(fileref);
        }
    }

    // caching loading promise to avoid duplications
    var isLoading = {};
    function loadjscssfileAsync(filename, filetype) {
        isLoading[filename] = isLoading[filename] || new Promise(function (resolve, reject) {
            var fileref = void 0;
            if (filetype === 'js') {
                //if filename is a external JavaScript file
                fileref = document.createElement('script');
                fileref.setAttribute('type', 'text/javascript');
                fileref.setAttribute('src', filename);
            } else if (filetype === 'css') {
                //if filename is an external CSS file
                fileref = document.createElement('link');
                fileref.setAttribute('rel', 'stylesheet');
                fileref.setAttribute('type', 'text/css');
                fileref.setAttribute('href', filename);
            }
            if (typeof fileref !== 'undefined') {
                fileref.onload = resolve;
                fileref.onerror = reject;
                document.getElementsByTagName('head')[0].appendChild(fileref);
            } else {
                reject();
            }
        }).then(function (res) {
            delete isLoading[filename];return res;
        });

        return isLoading[filename];
    }

    function removejscssfile(filename, filetype) {
        var targetelement = filetype === 'js' ? 'script' : filetype === 'css' ? 'link' : 'none'; //determine element type to create nodelist from
        var targetattr = filetype === 'js' ? 'src' : filetype === 'css' ? 'href' : 'none'; //determine corresponding attribute to test for
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i >= 0; i--) {
            //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) !== null && allsuspects[i].getAttribute(targetattr).indexOf(filename) !== -1) {
                allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
            }
        }
    }

    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
        var separator = uri.indexOf('?') !== -1 ? '&' : '?';
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + '=' + value + '$2');
        } else {
            return uri + separator + key + '=' + value;
        }
    }

    function isFunction(func) {
        return func && {}.toString.call(func) === '[object Function]';
    }

    function openInNewTab(html) {
        var newWindow = window.open('about:blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            //POPUP BLOCKED
            //if (Notifier) {
            //    Notifier.createAlert({ containerId: '#alerts', message: 'Browser does not allow opening popup windows!', status: 'danger' });
            //}
        } else {
            newWindow.document.write(html);
            newWindow.document.close();
            newWindow.focus();
        }
    }

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    }

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }

    function getAllSelectors() {
        var ret = [];
        for (var i = 0; i < document.styleSheets.length; i++) {
            var rules = document.styleSheets[i].rules || document.styleSheets[i].cssRules;
            for (var x in rules) {
                if (typeof rules[x].selectorText === 'string') ret.push(rules[x].selectorText);
            }
        }
        return ret;
    }

    function cssSelectorExists(selector) {
        var selectors = getAllSelectors();
        for (var i = 0; i < selectors.length; i++) {
            if (selectors[i] === selector) return true;
        }
        return false;
    }

    function populateUrl(inputId, urlId, callback) {
        if (!inputId || !urlId) {
            return;
        }

        var $title = $(inputId);
        var $url = $(urlId);

        var titleValue = $title.val().replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();
        var urlValue = $url.val().toLowerCase();

        if (urlValue.indexOf(titleValue) !== -1) {
            urlValue = urlValue.replace(titleValue, '');
        };

        $title.on('input', function (evt) {
            titleValue = $title.val().toLowerCase();

            $url.val(titleValue.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase());

            if (callback) {
                callback(evt);
            }
        });
    }

    return {
        s4: s4,
        guid: guid,
        isGuid: isGuid,
        loadjscssfile: loadjscssfile,
        loadjscssfileAsync: loadjscssfileAsync,
        removejscssfile: removejscssfile,
        updateQueryStringParameter: updateQueryStringParameter,
        isFunction: isFunction,
        openInNewTab: openInNewTab,
        replaceAll: replaceAll,
        cssSelectorExists: cssSelectorExists,
        populateUrl: populateUrl
    };
}();

//---------------------------------------------------------------------------------------------------------------------------
// Global utilities events

$('body').on('change', '.st-toggle', function (ev) {
    var $trigger = $(this);
    var $target = $($trigger.attr('data-toggle'));

    if ($trigger.is(':checked')) {
        $target.each(function (_, element) {
            $(element).show();
        });
    } else {
        $target.each(function (_, element) {
            $(element).hide();
        });
    }
});

exports.Utils = Utils;

/***/ }),

/***/ "./scripts/common/validator.js":
/*!*************************************!*\
  !*** ./scripts/common/validator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validator = undefined;

var _data = __webpack_require__(/*! ./data.js */ "./scripts/common/data.js");

var Validator = function () {

    function validate($element, errorMessage, validateFunc) {
        var value = $element.val();
        if (validateFunc(value)) {
            $element.css('border', '');
            $element.next('span').text('');
            return true;
        } else {
            $element.css('border', '1px solid #ff6868');
            $element.next('span').text(errorMessage || 'Invalid value!');
            return false;
        }
    }

    function hasMinimumLength(value, minLenght) {

        if (value && value.length >= minLenght) {
            return true;
        } else {
            return false;
        }
    }

    function hasMaximumLength(value, maxLenght) {
        if (value.length <= maxLenght) {
            return true;
        } else {
            return false;
        }
    }

    function isAlphaNumeric(value) {
        var pattern = /^([a-z0-9]+)$/i;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isAlphaNumericAndSemicolon(value) {
        var pattern = /^[a-zA-Z0-9;]+$/;

        return isPassing(value, pattern);
    }

    function isUrlFriendly(value) {
        var pattern = /^[a-zA-Z0-9-_]+$/;

        return isPassing(value, pattern);
    }

    function isStartingWithLetter(value) {
        var pattern = /^[a-z]/i;

        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function validateEmail(value) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isPassing(value, pattern) {
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isDecimalNumber(value) {
        var pattern = /^\d+\.\d{0,2}$/;
        return matchesPattern(value, pattern);
    }

    function isNumber(value) {
        var pattern = /^-?\d+\.?\d*$/;
        return matchesPattern(value, pattern);
    }

    function matchesPattern(value, pattern) {
        if (value && pattern.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    function isFunction(func) {
        return func && {}.toString.call(func) === '[object Function]';
    }

    function isGuid(stringToTest) {
        if (stringToTest[0] === '{') {
            stringToTest = stringToTest.substring(1, stringToTest.length - 1);
        }
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(stringToTest);
    }

    function isInteger(value) {
        return value && parseInt(value) == value;
    }

    function isNumberInRange($element, min, max) {
        if (min && !validate($element, 'The value must be lower or equal to ' + max + '.', function (value) {
            return max ? +value <= +max : true;
        })) {
            return false;
        }

        if (max && !validate($element, 'The value must be greater or equal to ' + min + '.', function (value) {
            return min ? +value >= +min : true;
        })) {
            return false;
        }

        return true;
    }

    function isLenghtInRange($element, min, max) {
        if (min && !validate($element, 'The value must be at least ' + min + ' characters long.', function (value) {
            return hasMinimumLength(value, min);
        })) {
            return false;
        }

        if (max && !validate($element, 'The maximum permitted characters length is ' + max + '.', function (value) {
            return hasMaximumLength(value, max);
        })) {
            return false;
        }

        return true;
    }

    /**
     * Creates a function that will validate all elements with class 'validate' inside the wrapper.
     * @param {Function} customValidationFunc custom validation function for handling specific logic. Will recieve the HTMLElement.
     * Must return true if validation is passing.
     * @returns {Function} Function
     */
    function createFieldsValidation(customValidationFunc) {
        function validateFields(ev) {
            if (!this && !ev && !ev.target) {
                console.error('No HTMLElement has been provided, ');
                return false;
            }

            var $elementsToValidate = $(this || ev.target).find('.validate');
            var flag = false;

            $elementsToValidate.each(function (_, element) {
                var $element = $(element);
                if (!validateField($element, customValidationFunc)) {
                    flag = true;
                }
            });

            return !flag;
        }

        return validateFields;
    }

    function validateField($element, customValidationFunc) {
        var validationMessages = {
            'required': 'Required field!',
            'email': 'Invalid E-Mail!',
            'int': 'Not an integer number!',
            'number': 'Not a number!',
            'guid': 'Invalid guid!'
        };

        var validationTypes = ($element.attr('data-validation-type') || '').split(' ');
        var innerFlag = false;
        var min = $element.attr('data-min');
        var max = $element.attr('data-max');

        for (var i = 0; i < validationTypes.length; i += 1) {
            var validationMessage = $element.attr('data-message-' + validationTypes[i]) || validationMessages[validationTypes[i]];

            switch (validationTypes[i]) {
                case 'required':
                    if (!validate($element, validationMessage, function (value) {
                        return !!value;
                    })) {
                        innerFlag = true;
                    }

                    break;
                case 'email':
                    if (!validate($element, validationMessage, validateEmail)) {
                        innerFlag = true;
                    }

                    break;
                case 'number':
                    if (!validate($element, validationMessage, isNumber)) {
                        innerFlag = true;
                        break;
                    }

                    innerFlag = !isNumberInRange($element, min, max);
                    break;
                case 'decimal':
                case 'double':
                case 'float':
                    if (!Validator.validate($element, name + ' must be decimal floating point number!', function (value) {
                        return value && parseFloat(value) == value;
                    })) {
                        innerFlag = true;
                        break;
                    }

                    innerFlag = !isNumberInRange($element, min, max);
                    break;
                case 'int':
                    if (!validate($element, validationMessage, isInteger)) {
                        innerFlag = true;
                        break;
                    }

                    innerFlag = !isNumberInRange($element, min, max);
                    break;

                case 'guid':
                    if (!validate($element, validationMessage, isGuid)) {
                        innerFlag = true;
                    }

                    break;
                case 'length':
                    innerFlag = !isLenghtInRange($element, min, max);

                    break;
                default:
                    if (isFunction(customValidationFunc)) {
                        innerFlag = !customValidationFunc($element);
                    }

                    break;
            }

            if (innerFlag) {
                return false;
            }
        }

        return !innerFlag;
    }

    function createFieldValidationHandler(customValidationFunc) {
        return function (ev) {
            var $target = ev ? $(ev.target) : $(this);
            validateField($target, customValidationFunc);
        };
    }

    function createValidateOnChangeHandler(name, url, minLenght, extraValues) {
        var timer = 0;

        function validateUrlOnChange(ev) {
            var $input = $(this);
            var min = minLenght || $input.attr('data-min');
            if (timer) {
                clearTimeout(timer);
            }

            var flag = false;
            if (min && !Validator.validate($input, 'The value must be atleast ' + min + ' characters long!', function (val) {
                return Validator.hasMinimumLength(val, +min);
            })) {
                flag = true;
            }

            if (!flag) {
                var value = $input.val();
                timer = setTimeout(function () {
                    var body = {};
                    body[name] = value;
                    if (extraValues) {
                        for (var key in extraValues) {
                            body[key] = extraValues[key];
                        }
                    }

                    _data.Data.postJson({ url: url, data: body }).then(function (res) {
                        Validator.validate($input, res.message || 'Value is invalid or already in use!', function (val) {
                            return res.success;
                        });
                    }, _data.Data.defaultError);
                }, 500);
                $input.next('span').text('');
            }
        }

        return validateUrlOnChange;
    }

    function validateUrl(validateUrl, $urlField, $btnSubmit) {
        var pattern = new RegExp(/^[\w\-\.]+$/i);
        if (!validate($urlField, 'Url can only contain letters, numbers, dash(-), point(.) and underscore(_) !', function (v) {
            return matchesPattern(v, pattern);
        })) {
            $btnSubmit.attr('disabled', true);
            return;
        }

        _data.Data.getJson({ url: validateUrl }).then(function (res) {
            if (validate($urlField, 'Url is invalid or already in use!', function (v) {
                return res.success;
            })) {
                $btnSubmit.attr('disabled', false);
            } else {
                $btnSubmit.attr('disabled', true);
            }
        });
    }

    function validateUniquenes(name, classToValidate) {
        var counter = 0;
        var $allNames = $('.' + classToValidate);
        for (name in $allNames) {
            if ($allNames[name].value === name) {
                counter++;
            }
        }

        if (counter > 1) {
            return false;
        } else {
            return true;
        }
    }

    return {
        validate: validate,
        isAlphaNumeric: isAlphaNumeric,
        hasMinimumLength: hasMinimumLength,
        validateEmail: validateEmail,
        isStartingWithLetter: isStartingWithLetter,
        isUrlFriendly: isUrlFriendly,
        isNumber: isNumber,
        isDecimalNumber: isDecimalNumber,
        isAlphaNumericAndSemicolon: isAlphaNumericAndSemicolon,
        isFunction: isFunction,
        isGuid: isGuid,
        createFieldsValidation: createFieldsValidation,
        isInteger: isInteger,
        createValidateOnChangeHandler: createValidateOnChangeHandler,
        validateField: validateField,
        createFieldValidationHandler: createFieldValidationHandler,
        validateUniquenes: validateUniquenes,
        validateUrl: validateUrl
    };
}();

exports.Validator = Validator;

/***/ }),

/***/ "./scripts/modules/file-handler.js":
/*!*****************************************!*\
  !*** ./scripts/modules/file-handler.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *                           --- file-handler ---
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  -v3.0 overall refactor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *      - upload and select moved to separete module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *      - removed usage specific logic, now accessed via mediator
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *============================================================================*/

exports.FileHandler = FileHandler;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _utils = __webpack_require__(/*! ../common/utils.js */ "./scripts/common/utils.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _handlebars = __webpack_require__(/*! ../common/handlebars.js */ "./scripts/common/handlebars.js");

'use strict';

function FileHandler($container, modes, selectedLibrary, mediator, logger, multipleSelection) {
    var modules = {
        'Upload': { ctor: fileHandlerUpload, instance: undefined, status: 'not-active' },
        'Select': { ctor: fileHandlerSelect, instance: undefined, status: 'not-active' },
        'Selected': { ctor: fileHandlerSelected, instance: undefined, status: 'not-active' }

    };

    var $nav = $('<ul></ul>', { class: 'nav nav-tabs file-handler-nav' }).appendTo($container);
    var $contentRow = $('<div></div>', { class: 'file-handler-content-row' }).appendTo($container);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = modes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (modules[key]) {

                var $btnNav = $('<li></li>', {
                    class: '',
                    html: '<a class="file-handler-nav-btn" data-type="' + key + '">' + key + '</a>',
                    role: 'presentation'
                });

                $nav.append($btnNav);

                var $wrapper = $('<div></div>', {
                    class: 'file-handler-container file-handler-' + key
                });

                $contentRow.append($wrapper);

                modules[key].instance = modules[key].ctor(logger, $wrapper, mediator, selectedLibrary, multipleSelection);
                modules[key].status = 'active';
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    openModule({ target: $nav.find('.file-handler-nav-btn').first() });
    bindEvents();

    function bindEvents() {
        var $selectedButton = $('[data-type=Selected]');
        $nav.on('click', '.file-handler-nav-btn', openModule);
        $selectedButton.on('click', fileHandlerSelected);
        mediator.on('fileHandlerTypeChange', openModule.bind(this, { target: $nav.find('.file-handler-nav-btn').first() }), 'uploadTypeChange', 'FileHandler');
    }

    function dispose() {
        $nav.off('click', '.file-handler-nav-btn', openModule);
        mediator.off('fileHandlerTypeChange', 'uploadTypeChange', 'FileHandler');

        for (var key in modules) {
            if (modules[key].status === 'active') {
                modules[key].instance.dispose();
                modules[key].instance = undefined;
                modules[key].status === 'not-active';
            }
        }

        $container.html('');
    }

    function openModule(ev) {
        var $target = $(ev.target);

        $nav.find('.file-handler-nav-btn.active').each(function (_, element) {
            var $element = $(element);
            $element.removeClass('active');
            $element.parent('li').removeClass('active');
        });

        $contentRow.find('.file-handler-container.active').each(function (_, element) {
            $(element).removeClass('active');
        });

        $target.addClass('active');
        $target.parent('li').addClass('active');

        $contentRow.find('.file-handler-container.file-handler-' + $target.attr('data-type')).addClass('active');
    }

    return {
        dispose: dispose
    };
}

function fileHandlerUpload(logger, $container, mediator, libraryId, isMultiple) {
    var $inputFiles = void 0;
    var $notifier = void 0;
    var $filesContainer = void 0;
    var $libraries = void 0;
    var $btnUpload = void 0;
    var $dropArea = void 0;
    var $uploadBtn = void 0;

    var libraryPrefix = '';
    var libraryAllowed = '';
    var files = [];
    var uploadedFiles = [];
    var templatesCache = {};
    var templates = [{ name: 'file-upload', url: '/templates/file-upload.html' }];
    var requester = void 0;

    logger.log('initialazing upload module...');
    var url = '/sitetriks/files/uploadTemplate?isMultiple=' + isMultiple + '&libraryId=' + libraryId;

    _data.Data.getJson({ url: url, disableCache: true }).then(function (res) {
        $container.html(res);

        $inputFiles = $container.find('.input-files');
        $notifier = $container.find('.accepted-formats');
        $filesContainer = $container.find('.files-container');
        $libraries = $container.find('.file-upload-library');
        $btnUpload = $container.find('.btn-submit-images');
        $dropArea = $container.find('#drop-area');
        $uploadBtn = $container.find('.btn-submit-images');

        return (0, _handlebars.loadHandlebarsTemplates)(templatesCache, templates);
    }, _data.Data.defaultError).then(function (res) {
        bindEvents();
    }, _data.Data.defaultError);

    function bindEvents() {
        $libraries.on('change', loadAllowedTypes);
        $inputFiles.on('change', renderFiles);
        $btnUpload.on('click', uploadFiles);
        $container.on('keyup', '.input-url', validateFileUrl);
        $dropArea.on('dragover', dragOver);
        $dropArea.on('dragenter', dragEnter);
        $dropArea.on('dragleave', dragLeave);
        $dropArea.on('drop', drop);
        mediator.on('fileLibraryChange', selectLibrary, 'selectLibrary', 'FileHandlerUpload');
        mediator.on('fileHandlerTypeChange', typeChange, 'uploadTypeChange', 'FileHandlerUpload');
        mediator.on('fileHandlerClean', cleanUp, 'cleanContent', 'FileHandlerUpload');

        $libraries.trigger('change');
    }

    function dispose() {
        $libraries.off('change', loadAllowedTypes);
        $inputFiles.off('change', renderFiles);
        $btnUpload.off('click', uploadFiles);
        $container.off('keyup', '.input-url', validateFileUrl);
        $dropArea.off('dragover', dragOver);
        $dropArea.off('dragenter', dragEnter);
        $dropArea.off('dragleave', dragLeave);
        $dropArea.on('drop', drop);
        mediator.off('fileLibraryChange', 'selectLibrary', 'FileHandlerUpload');
        mediator.off('fileHandlerTypeChange', 'uploadTypeChange', 'FileHandlerUpload');
        mediator.off('fileHandlerClean', 'cleanContent', 'FileHandlerUpload');
    }

    function loadAllowedTypes(ev) {
        libraryId = ev.target.value;
        cleanUp();

        return _data.Data.getJson({ url: '/sitetriks/libraries/GetAllowedForLibrary?id=' + libraryId }).then(function (res) {
            if (typeof res === 'string' || res instanceof String) {
                res = JSON.parse(res);
            }

            if (res.success) {
                $inputFiles.attr('disabled', false).attr('accept', res.ext);
                $dropArea.removeClass('disabled');
                $notifier.text('Accepted files: ' + (res.type.displayName || res.type.extensions));
                libraryAllowed = _utils.Utils.replaceAll(_utils.Utils.replaceAll(res.ext, '*', ''), ',', '|');
                libraryPrefix = res.prefix;
            } else {
                $inputFiles.attr('disabled', true);
                $dropArea.addClass('disabled');
            }
        }, _data.Data.defaultError);
    }

    function renderFiles() {
        files = [];
        $filesContainer.html('');
        uploadedFiles = [];
        var date = Date.parse(new Date());
        var template = templatesCache['file-upload'];
        for (var i = 0; i < $inputFiles[0].files.length; i++) {
            var currentFile = $inputFiles[0].files[i];
            var regExp = new RegExp(libraryAllowed);

            if (!regExp.test(currentFile.name) && !regExp.test(currentFile.type)) {
                $filesContainer.append('<p><strong><span class="text-danger">' + currentFile.name + ' file type is not supported by selected library and will not be uploaded!</span></strong></p>');
                continue;
            }

            var $fragment = $('<div></div>', {
                class: 'img-upload-wrapper upload-element-' + i
            });

            var fileName = currentFile.name.substring(0, currentFile.name.lastIndexOf('.'));
            var fileUrl = currentFile.name.replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();
            var id = _utils.Utils.guid();

            $fragment.append(template({ index: id, name: fileName, alt: fileName, url: fileUrl }));

            if (currentFile.type && currentFile.type.indexOf('image/') >= 0) {
                var file = window.URL.createObjectURL(currentFile);
                $fragment.append('<img src="' + file + '" class="display-image">');
            } else {
                $fragment.append('<img src="/Images/default-document-image.png">');
            }

            $filesContainer.append($fragment);
            validateFileUrl($fragment.find('.input-url'));

            files.push(currentFile);
            uploadedFiles.push({
                name: fileName + '-' + date,
                url: fileUrl + '-' + date,
                alt: fileName,
                originalName: currentFile.name,
                id: id
            });
        }

        if (files.length > 0) {
            $uploadBtn.removeClass('disabled');
        }
    }

    function uploadFiles() {
        var notifier = '.file-handler-notifier';
        if (uploadedFiles.length === 0 || files.length === 0) {
            mediator.dispatch('alert', { selector: notifier, message: 'No files have been selected!', status: 'warning' });
            return;
        }

        var urls = [];
        var flag = false;
        $container.find('.input-url').each(function (i, obj) {
            var $element = $(obj);
            var url = $element.val();
            if (url.length < 3) {
                flag = true;
            }

            if (libraryPrefix) {
                url = libraryPrefix + '/' + url;
            }

            if (urls.indexOf(url) > -1 || flag) {
                $element.css('border', '1px solid red').focus();
                flag = true;
                return false;
            }

            urls.push(url);
        });

        if (flag) {
            mediator.dispatch('alert', { selector: notifier, message: 'Urls must be unique and alteast 3 characters long!', status: 'danger' });
            return;
        }

        $container.find('.input-name').each(function (i, obj) {
            var name = $(obj).val().trim();

            if (name.length < 3) {
                flag = true;
                return;
            }
        });

        if (flag) {
            mediator.dispatch('alert', { selector: notifier, message: 'Name must be atleast 3 characters!', status: 'danger' });
            return;
        }

        return _data.Data.postJson({ url: '/sitetriks/pages/validateUrls', data: { urls: urls } }).then(function (res) {

            if (res.success) {
                updateFilesInfo(uploadedFiles);

                var formData = new FormData();

                uploadedFiles.forEach(function (element) {
                    formData.append('filesInfo', JSON.stringify(element));
                });

                for (var i = 0; i < files.length; i++) {
                    formData.append('files', files[i], files[i].name);
                }

                formData.append('library', libraryId);

                return _data.Data.postForm({ url: '/sitetriks/files/uploadfile', formData: formData });
            } else {
                mediator.dispatch('alert', { selector: notifier, title: 'Not all urls are valid!', message: res.message, status: 'danger' });
                return Promise.reject();
            }
        }, _data.Data.defaultError).then(function (res) {
            if (res.success) {

                mediator.dispatch('filesUploaded', { fileIds: res.ids, libraryId: libraryId, requester: requester });
                mediator.dispatch('uploadedFilesEvent', { fileIds: res.ids, sizeName: 'Original', libraryId: libraryId, requester: requester });

                cleanUp();
            }
        }, _data.Data.defaultError);
    }

    function updateFilesInfo(files) {
        for (var i = 0; i < files.length; i++) {
            files[i].name = $container.find('#input-name-' + files[i].id).val();
            files[i].url = $container.find('#input-url-' + files[i].id).val();
            files[i].alt = $container.find('#input-alt-' + files[i].id).val();
            files[i].type = $container.find('#dropdown-type-' + files[i].id).val();
        }
    }

    function validateFileUrl(ev) {
        var $urlField = $(ev.target ? ev.target : ev);
        var url = $urlField.val();

        if (!url || url.length < 3) {
            $urlField.css('border', '1px solid red');
        } else {
            _validator.Validator.validateUrl('/sitetriks/files/ValidateUrl?url=' + url + '&prefix=' + libraryPrefix, $urlField, $btnUpload);
        }
    }

    function selectLibrary(libraryId) {
        $libraries.val(libraryId.toUpperCase());
        $libraries.trigger('change');
    }

    function dragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function dragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function dragLeave(e) {
        // $(this).removeClass('drop-highlight');
        e.preventDefault();
        e.stopPropagation();
    }

    function drop(e) {
        if ($('#drop-area').hasClass('disabled')) {
            return false;
        }
        if (e.originalEvent.dataTransfer) {
            if (e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();

                var filesValue = e.originalEvent.dataTransfer.files;
                $inputFiles.attr('disabled', false);
                $inputFiles.prop('files', filesValue);
                renderFiles();
            }
        }
    }

    function typeChange(data) {
        if (data.type === 'multiple') {
            $inputFiles.attr('multiple', data.type);
        } else {
            $inputFiles.removeAttr('multiple');
        }

        requester = data.requester;
        cleanUp();
    }

    function cleanUp() {
        files = [];
        uploadedFiles = [];
        $inputFiles.val('');
        $filesContainer.html('');
        $uploadBtn.addClass('disabled');
        $('.file-handler-notifier').html('');
    }

    return {
        dispose: dispose
    };
}

function fileHandlerSelect(logger, $container, mediator, libraryId, isMultiple) {
    var $filesContainer = void 0;
    var $libraries = void 0;
    var templatesCache = {};
    var templates = [{ name: 'file-select', url: '/templates/file-select.html' }];
    var page = 0;
    var $btnNext = void 0;
    var $btnPrev = void 0;
    var $pageNumber = void 0;
    var pageSize = 9;
    var nextPageExists = false;
    var $btnSelect = void 0;
    var requester = void 0;
    var selectedFiles = {};

    logger.log('init select module');

    var url = '/sitetriks/files/selectTemplate?libraryId=' + libraryId;
    _data.Data.getJson({ url: url }).then(function (res) {
        logger.log(res);
        $container.html(res);
        $filesContainer = $container.find('.files-container');
        $libraries = $container.find('.file-select-library');
        $btnNext = $container.find('.next-page');
        $btnPrev = $container.find('.previous-page');
        $pageNumber = $container.find('.page-number');
        $btnSelect = $container.find('.btn-select');

        return (0, _handlebars.loadHandlebarsTemplates)(templatesCache, templates);
    }).then(function (res) {
        bindEvents();
        loadImages();

        logger.log('select module initialized');
    }, _data.Data.defaultError);

    var $btnSave = $('.btn-add-widget');
    var $btnEdit = $('.btn-edit-widget');

    function selectUploadedFiles(data) {
        logger.log('data-select-files: ', data);
        var selectedLinkIds = data.fileIds;

        logger.log(selectedLinkIds);
        for (var i = 0; i < selectedLinkIds.length; i += 1) {
            selectedFiles[selectedLinkIds[i]] = {
                selectedLinkId: selectedLinkIds[i],
                sizeName: 'Original'
            };
        }

        loadImages();
    }

    function bindEvents() {
        logger.log('bind select module events');
        $libraries.on('change', changeLibrary);
        $btnNext.on('click', nextPage);
        $btnPrev.on('click', prevPage);
        $container.on('change', '.thumbnailSelect', selectSize);
        //      $container.on('click', '.image-checkbox', checkCheckbox);
        $container.on('click', '.checkmark-cover', triggerCheckbox);
        $container.on('click', '.image-checkbox', toggleSelectDropdown);
        $btnSave.on('click', selectFiles);
        $btnEdit.on('click', selectFiles);
        $btnSelect.on('click', selectFiles);
        mediator.on('fileLibraryChange', selectLibrary, 'selectLibrary', 'FileHandlerSelect');
        mediator.on('fileHandlerTypeChange', typeChange, 'selectTypeChange', 'FileHandlerSelect');
        mediator.on('populatedSelected', populateSelected, 'populateSelectedFiles', 'FileHandlerSelect');
        mediator.on('uploadedFilesEvent', selectUploadedFiles, 'selectUploadedFiles', 'FileHandlerSelect');
    }

    function dispose() {
        logger.log('destoy select module');
        $libraries.off('change', changeLibrary);
        $container.off('change', '.thumbnailSelect', selectSize);
        //      $container.off('click', '.image-checkbox', checkCheckbox);
        $container.off('click', '.checkmark-cover', triggerCheckbox);
        $container.off('click', '.image-checkbox', toggleSelectDropdown);
        $btnSave.off('click', selectFiles);
        $btnEdit.off('click', selectFiles);
        $btnSelect.off('click', selectFiles);
        $btnNext.off('click', nextPage);
        $btnPrev.off('click', prevPage);
        mediator.off('fileLibraryChange', 'selectLibrary', 'FileHandlerSelect');
        mediator.off('fileHandlerTypeChange', 'selectTypeChange', 'FileHandlerSelect');
        mediator.off('populatedSelected', 'populateSelectedFiles', 'FileHandlerSelect');
        mediator.off('uploadedFilesEvent', 'selectUploadedFiles', 'FileHandlerSelect');
    }

    function loadImages() {
        $filesContainer.html('<p>Loading...</p>');
        var template = templatesCache['file-select'];
        var inputType = isMultiple ? 'checkbox' : 'radio';

        var filters = [];

        if (libraryId) {
            filters.push({
                comparison: 1,
                propertyName: 'LibraryId',
                value: libraryId
            });
        }

        var skip = page * pageSize;
        _data.Data.postJson({ url: '/sitetriks/files/grid', data: { filters: filters, take: pageSize, skip: skip } }).then(function (res) {
            if (res.success) {
                $filesContainer.html('');
                $(res.items).each(function (_, element) {
                    if (+element.type === 0) {
                        $filesContainer.append(template({
                            title: element.title,
                            id: element.id,
                            url: element.url,
                            thumbnails: element.thumbnails,
                            inputType: inputType
                        }));
                    }
                });

                if (page === 0) {
                    $btnPrev.attr('disabled', true).hide();
                } else {
                    $btnPrev.attr('disabled', false).show();
                }

                nextPageExists = res.nextPageExists;
                if (!res.nextPageExists) {
                    $btnNext.attr('disabled', true).hide();
                } else {
                    $btnNext.attr('disabled', false).show();
                }

                $pageNumber.text(page + 1 + '/' + Math.max(Math.ceil(res.count / pageSize), 1));
                logger.log('images rendered');

                setSelectedImages();
            }
        }, _data.Data.defaultError);
    }

    function nextPage() {
        if (!nextPageExists) {
            return;
        }

        page += 1;
        loadImages();
    }

    function prevPage() {
        if (page <= 0) {
            return;
        }

        page -= 1;
        loadImages();
    }

    function changeLibrary(ev) {
        libraryId = ev.target.value;
        loadImages();
    }

    function selectSize() {
        var $option = $(this);
        var selectedId = $option.val();
        var id = $option.attr('data-id');
        var sizeName = $option.find(':selected').attr('data-sizename');

        selectedFiles[id] = {
            selectedLinkId: selectedId,
            sizeName: sizeName
        };
    }

    function triggerCheckbox(ev) {
        var $checkbox = $(this).parent().find('.image-checkbox-wrapper').find('.image-checkbox');

        if ($checkbox.prop('checked') === true) {
            $checkbox.prop('checked', false);
        } else {
            $checkbox.prop('checked', true);
        }

        var id = $checkbox.attr('data-id');

        if ($checkbox.is(':checked')) {
            var selectedId = id;
            var sizeName = 'Original';
            if ($checkbox.attr('type') === 'radio') {
                selectedFiles = {};
            }

            var $select = $checkbox.parents('.image-container2').find('.thumbnailSelect');
            if ($select.length > 0) {
                selectedId = $select.val() || selectedId;
                sizeName = $select.find(':selected').attr('data-sizename') || sizeName;
            }

            selectedFiles[id] = {
                selectedLinkId: selectedId,
                sizeName: sizeName
            };
        } else {
            delete selectedFiles[id];
        }

        selectFileUI();
    }

    function selectFiles() {
        var selectedImagesFullInfo = JSON.stringify(selectedFiles);
        var selectedLinkIds = [];

        for (var key in selectedFiles) {
            selectedLinkIds.push(selectedFiles[key].selectedLinkId);
        }

        $('#selectedImages').attr('data-selectedImages', JSON.stringify(selectedImagesFullInfo));
        $('#image').val(selectedLinkIds);

        mediator.dispatch('filesSelected', { fileIds: selectedLinkIds, selectedImagesFullInfo: selectedImagesFullInfo, libraryId: libraryId, requester: requester });
    }

    function populateSelected(selected) {
        selectedFiles = JSON.parse(JSON.stringify(selected)) || {};
        loadImages();
    }

    function selectFileUI() {
        $('input[name=images-list]').each(function (_, element) {
            var $selected = $(element);
            if ($selected.is(':checked')) {
                $selected.parents('.image-container2').addClass('selected');
            } else {
                $selected.parents('.image-container2').removeClass('selected');
            }
        });
    }

    function selectLibrary(libraryId) {
        $libraries.val(libraryId.toUpperCase());
        $libraries.trigger('change');
    }

    function typeChange(data) {
        isMultiple = data.type === 'multiple';
        requester = data.requester;
        page = 0;
        loadImages();
    }

    function setSelectedImages() {
        var selectedImagesFullInfo = selectedFiles;
        var selectedIds = [];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = Object.entries(selectedImagesFullInfo)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ref = _step2.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var key = _ref2[0];
                var value = _ref2[1];

                selectedIds.push(key);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        var _loop = function _loop() {
            var selectedImageId = selectedIds[i];

            $('input[name=images-list]').each(function (_, element) {
                var $selected = $(this);
                var fileName = selectedImagesFullInfo[selectedImageId].selectedLinkId;

                $selected.attr('data-alt-id', fileName);
                var $currentThumbnail = $selected.parent().parent().find('.thumbnailSelect');

                if ($selected.attr('data-id') === selectedImageId) {
                    $selected.prop('checked', true);

                    $currentThumbnail.val(fileName);
                }
                selectFileUI();
            });
        };

        for (var i = 0; i < selectedIds.length; i++) {
            _loop();
        }
    }

    function toggleSelectDropdown(ev) {
        var $checkbox = $(ev.target);
        if ($checkbox.is(':checked')) {
            var $target = $checkbox.parent().parent().find('.thumbnailSelect.dropdown');
            var $clone = $target.clone().removeAttr('data-click-id');
            $clone.val($target.val()).addClass('cloned').attr('size', $clone.find('option').length > 10 ? 10 : $clone.find('option').length).change(function () {
                $target.val($clone.val());
            }).on('click blur keypress', function (e) {
                if (e.type !== 'keypress' || e.which === 13) {
                    $(this).remove();
                }
            });
            $checkbox.parents('.select-parent').append($clone);
            $clone.focus();
        }
    }

    return {
        dispose: dispose
    };
}

function fileHandlerSelected() {

    return { dispose: function dispose() {} };
}

/***/ }),

/***/ "./scripts/modules/warning-window.js":
/*!*******************************************!*\
  !*** ./scripts/modules/warning-window.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WarningWindow = function (logger) {
    logger = logger || console;
    var confirmationMessage = 'It looks like you have been editing something. ' + 'If you leave before saving, your changes will be lost.';

    function onUnload(e) {
        if (!hasChanges()) {
            return;
        }

        e.preventDefault();
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    //window.onbeforeunload = onUnload;
    //var lastClickOnElement;
    //$(document).click(function (event) {
    //    lastClickOnElement= $(event.target);
    //});

    var lastClickedElement;
    document.addEventListener('click', function (e) {
        e = e || window.event;
        lastClickedElement = e.target || e.srcElement;
        //lastClicked = target.textContent || target.innerText;
    }, false);

    function hasTextAreasWithText() {
        var $textareas = $('textarea');
        //Add tinymce get text from textarea likes input
        if ($textareas.length > 0) {
            return true;
        }

        return false;
    }

    function hasInputsWithText() {
        var hasText = false;
        var $inputs = $('input[type=text]').each(function () {
            if ($(this).val() != '') {
                hasText = true;
                return;
            }
        });

        return hasText;
    }

    function checkElementForDataAttr(lastClickedElement, attribute) {
        var attr = $(lastClickedElement).data(attribute);

        if (attr) {
            return attr;
        }

        return '';
    }

    function checkUrl(linkPath) {
        logger.log("Check url");
        var attr = checkElementForDataAttr(getLastClickedElement(), "disableLink");

        if (attr != "") {
            logger.log("Url checking is disabled");
            return true;
        }
        logger.log("Url checkking is enabled");

        if (linkPath.indexOf('create') == -1 && linkPath.indexOf('edit') == -1) {
            return false;
        }

        return true;
    }

    function getLastClickedElement() {
        var lastClickedElement = document.activeElement;
        var $element = $(lastClickedElement);

        return $element;
    }

    function submitButtonCheck(lastClickedElement, element) {
        if (lastClickedElement.tagName === "INPUT" && element.attr("type") === "submit") {
            return false;
        }

        if (lastClickedElement.tagName === "BUTTON" && element.hasClass("button-submit")) {
            return false;
        }

        if (lastClickedElement.tagName === "BUTTON" && element.attr('type') == 'submit') {
            return false;
        }

        return !element.attr('data-disable-warning');
    }

    function hasChanges() {
        if (!lastClickedElement) {
            return;
        }

        console.log(lastClickedElement);
        var $element = $(lastClickedElement);
        var linkPath = window.location.pathname;

        if (!submitButtonCheck(lastClickedElement, $element)) {
            return false;
        }

        if (checkElementForDataAttr(lastClickedElement, "disable-warning") != "") {
            return false;
        }

        if (!checkUrl(linkPath)) {
            return false;
        }

        var hasChanges = hasTextAreasWithText() || hasInputsWithText();

        return hasChanges;
    }

    //---------------------------------------------------------------------------------------------------------
    var inputChanged = false;
    document.addEventListener('input', function (ev) {
        inputChanged = true;
    });

    function defaultStopLeave(ev) {
        var isSaving = lastClickedElement && !submitButtonCheck(lastClickedElement, $(lastClickedElement));
        if (isSaving) {
            return;
        }

        if (!inputChanged) {
            return;
        }

        ev.preventDefault;
        ev.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    //window.onbeforeunload = defaultStopLeave;

    return {
        attach: function attach() {
            inputChanged = false;
            lastClickedElement = null;
            window.onbeforeunload = defaultStopLeave;
            return this;
        },
        detach: function detach() {
            window.onbeforeunload = null;
            return this;
        },
        force: function force() {
            inputChanged = true;
            return this;
        }
    };
}();

exports.WarningWindow = WarningWindow;

/***/ }),

/***/ "./scripts/sitetriks/libraries.js":
/*!****************************************!*\
  !*** ./scripts/sitetriks/libraries.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initLibraries = initLibraries;
exports.editLibraries = editLibraries;
exports.createLibrary = createLibrary;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _utils = __webpack_require__(/*! ../common/utils.js */ "./scripts/common/utils.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _fileHandler = __webpack_require__(/*! ../modules/file-handler.js */ "./scripts/modules/file-handler.js");

var _tags = __webpack_require__(/*! ../tags.js */ "./scripts/tags.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

var _thumbnailSizes = __webpack_require__(/*! ./thumbnailSizes.js */ "./scripts/sitetriks/thumbnailSizes.js");

function initLibraries(grid, mediator, logger) {
    var $libs = $('#libs');
    var $btnEditLibrary = $('#btn-edit-lib');
    var $btnDeleteLibrary = $('#btn-delete-lib');
    var $deletePopup = $('.delete-popup-wrapper');
    var $removePopup = $('.delete-popup-wrapper .glyphicon-remove');
    var $cancelDeleteButton = $('#cancel-delete');
    var $deleteLibraryButton = $('#delete-library');

    if ($libs.val()) {
        grid.updateDefaultFilters([{
            propertyName: 'libraryId',
            comparison: 1,
            value: $libs.val()
        }]);
    } else {
        $btnEditLibrary.hide();
        $btnDeleteLibrary.hide();
    }

    grid.load(true);
    var $grid = $('.grid');

    var $modal = $('#file-upload-modal');
    var $container = $modal.find('.file-handler-wrapper');
    var fileHandler = (0, _fileHandler.FileHandler)($container, ['Upload'], $libs.val(), mediator, logger, true);

    bindEvents();

    // --------------------------------------------------------
    // event handlers   

    function fileUploadedHandler(data) {
        if (data) {
            var id = data.libraryId.toLowerCase();
            if ($libs.val() !== id) {
                $libs.val(id);
                grid.updateDefaultFilters([{
                    propertyName: 'libraryId',
                    comparison: 1,
                    value: id
                }], true).load(true);
            }

            if (!id) {
                grid.updateDefaultFilters();
            }

            grid.load(true);
            $modal.modal('hide');
        }
    }

    function copyUrl(ev) {
        var $target = $(ev.target);
        var url = location.origin + '/files/' + $target.attr('data-url');

        copyToClipboard(url);
    }

    function selectLibrary(ev) {
        var value = $(this).val();

        if (value) {
            grid.updateDefaultFilters([{
                propertyName: 'libraryId',
                comparison: 1,
                value: value
            }], true).load();

            $btnEditLibrary.show();
            $btnDeleteLibrary.show();
        } else {
            grid.updateDefaultFilters().load();

            $btnEditLibrary.hide();
            $btnDeleteLibrary.hide();
        }

        mediator.dispatch('fileLibraryChange', value);
    }

    function editLibrary(ev) {
        var prefix = $('#libs :selected').attr('data-url');

        if (prefix && prefix.length > 0) {
            window.location.href = '/sitetriks/libraries/edit?url=' + prefix;
        }
    }

    function displayDeleteLibraryPopup(ev) {
        $deletePopup.css('display', 'block');
        var $selectedLib = $('#libs option:selected').html();

        $('.library-name').html('');

        $('.library-name').html($selectedLib);
    }

    function hideDeleteLibraryPopup(ev) {
        $deletePopup.css('display', 'none');
    }

    function deleteLibrary(ev) {
        var id = $('#libs').val();

        _loader.Loader.show('#fff');
        _data.Data.deleteJson({ url: '/sitetriks/libraries/delete/', data: { id: id } }).then(function (res) {
            if (res.success) {
                location.reload(true);
            } else {
                _loader.Loader.hide();
                console.log(res);
            }
        }, _data.Data.defaultError);
    }

    function copyToClipboard(element) {
        var $temp = $('<input/>');
        $('body').append($temp);
        $temp.val(element).select();
        document.execCommand('copy');
        $temp.remove();
    }

    function cleanUp() {
        mediator.dispatch('fileHandlerClean');
    }

    // --------------------------------------------------------
    function bindEvents() {
        $grid.on('click', '.copy', copyUrl);
        $libs.on('change', selectLibrary);
        $btnDeleteLibrary.on('click', displayDeleteLibraryPopup);
        $deleteLibraryButton.on('click', deleteLibrary);
        $removePopup.on('click', hideDeleteLibraryPopup);
        $cancelDeleteButton.on('click', hideDeleteLibraryPopup);
        $btnEditLibrary.on('click', editLibrary);
        $modal.on('show.bs.modal hidden.bs.modal', cleanUp);
        mediator.on('filesUploaded', fileUploadedHandler, 'filesUploaded', 'General');
        mediator.on('alert', _notifier.Notifier.createAlert, 'createAlert', 'Notifier');
    }

    function dispose() {
        $grid.off('click', '.copy', copyUrl);
        $libs.off('change', selectLibrary);
        $btnDeleteLibrary.off('click', displayDeleteLibraryPopup);
        $deleteLibraryButton.off('click', deleteLibrary);
        $removePopup.off('click', hideDeleteLibraryPopup);
        $cancelDeleteButton.on('click', hideDeleteLibraryPopup);
        $btnEditLibrary.off('click', editLibrary);
        $modal.off('show.bs.modal hidden.bs.modal', cleanUp);
        mediator.off('filesUploaded', 'filesUploaded', 'General');
        mediator.off('alert', 'createAlert', 'Notifier');
    }

    return {
        dispose: dispose
    };
}

function editLibraries(isNameAvailableLink, libraryId) {
    var $inputName = $('#input-name');
    var $editForm = $('#create-library-form');

    (0, _thumbnailSizes.createEditThumbnailSize)();
    _warningWindow.WarningWindow.attach();
    _tags.Tags.init();

    bindEvents();

    function validateName(e) {
        var $target = $(e.target);
        var flag = false;

        if (!_validator.Validator.validate($target, 'Title must be atleast 3 characters long!', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = true;
        }

        if (!flag) {
            _data.Data.postJson({ url: isNameAvailableLink, data: { name: $target.val(), id: libraryId } }).then(function (res) {
                _validator.Validator.validate($target, res.message || 'Name is already taken!', function (val) {
                    return res.success;
                });
            }, _data.Data.defaultError);
        }
    }

    //function getSelectedThumbnails() {
    //    let $resultInput = $('#thumnails-result');
    //    let $thumbnailSizes = $('#multiselect-thumbnails');
    //    let $thumbnailsCheckbxes = $('.checkbox input');

    //    let result = [];
    //    for (var i = 0; i < $thumbnailsCheckbxes.length; i += 1) {
    //        console.log($thumbnailsCheckbxes[i]);
    //        if ($($thumbnailsCheckbxes[i]).prop('checked') == true) {
    //            result.push($($thumbnailsCheckbxes[i]).val());
    //        }
    //    }

    //    $resultInput.val(result);
    //    console.log($thumbnailSizes.val());

    //}

    function submitEditForm(ev) {
        var flag = false;
        var _this = this;

        //  getSelectedThumbnails();

        if (!_validator.Validator.validate($inputName, 'Title must be atleast 3 characters long!', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = true;
        }

        if (!flag) {
            _loader.Loader.show('#fff');
            _data.Data.postJson({ url: isNameAvailableLink, data: { name: $inputName.val(), id: libraryId } }).then(function (res) {
                if (res.success) {

                    return _data.Data.postForm({ formData: new FormData(_this) });
                } else {
                    _validator.Validator.validate($inputName, res.message || 'Name is already taken!', function (val) {
                        return res.success;
                    });
                    _loader.Loader.hide();
                }
            }, _data.Data.defaultError).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/libraries/');
                } else {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'Name  is aready in use!' });
                    _loader.Loader.hide();
                }
            }, _data.Data.defaultError);
        }
    }

    function bindEvents() {
        $editForm.on('submit', submitEditForm);
        $inputName.on('input', validateName);
    }

    function dispose() {
        $editForm.on('submit', submitEditForm);
        $inputName.on('input', validateName);
    }
}

function createLibrary(validateUrlLink, isNameAvailableLink) {
    var $btnSubmit = $('input[type="submit"]');
    var $inputName = $('#input-name');
    var $inputPrefix = $('#input-prefix');
    var $prefixValidation = $inputPrefix.next('span.text-danger');
    var $libraryType = $('#library-type');
    var $allowedTypes = $('#allowed-types');
    var $createForm = $('#create-library-form');

    (0, _thumbnailSizes.createEditThumbnailSize)();
    _warningWindow.WarningWindow.attach();
    _tags.Tags.init();

    _utils.Utils.populateUrl($inputName, $inputPrefix, validateUrlOnChange);
    displayAllowedTypes.apply($libraryType[0]);
    var timer = 0;
    bindEvents();

    function displayAllowedTypes(ev) {
        $allowedTypes.html('');

        _loader.Loader.show('#fff');
        _data.Data.getJson({ url: '/sitetriks/libraries/GetAllowedForType?type=' + this.value }).then(function (res) {
            if (res.success) {
                $allowedTypes.html('Allowed files: ' + (res.type.displayName || res.type.extensions));
            }

            _loader.Loader.hide();
        });
    }

    function validateUrlOnChange(e) {
        if (timer) {
            clearTimeout(timer);
        }

        var flag = false;
        if (!_validator.Validator.validate($inputPrefix, 'Prefix must be atleast 3 characters long!', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = true;
        }

        if (!flag) {
            var url = $inputPrefix.val();
            timer = setTimeout(function () {
                _validator.Validator.validateUrl(validateUrlLink + '?url=' + url, $inputPrefix, $btnSubmit);
            }, 500);
            $prefixValidation.text('');
        }
    }

    function validateName(e) {
        var $target = $(e.target);
        var flag = false;

        if (!_validator.Validator.validate($target, 'Title must be atleast 3 characters long!', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = true;
        }

        if (!flag) {
            _data.Data.postJson({ url: isNameAvailableLink, data: { name: $target.val() } }).then(function (res) {
                _validator.Validator.validate($target, res.message || 'Name is already taken!', function (val) {
                    return res.success;
                });
            }, _data.Data.defaultError);
        }
    }

    function submitCreateForm(ev) {
        var flag = false;
        var _this = this;
        //   getSelectedThumbnails();

        if (!_validator.Validator.validate($inputName, 'Title must be atleast 3 characters long!', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = true;
        }

        if (!_validator.Validator.validate($inputPrefix, 'Prefix must be atleast 3 characters long!', function (val) {
            return _validator.Validator.hasMinimumLength(val, 3);
        })) {
            flag = true;
        }

        if (flag) {
            ev.preventDefault();
            return false;
        }

        _loader.Loader.show('#fff');
        _data.Data.getJson({ url: validateUrlLink + '?url=' + $inputPrefix.val() }).then(function (res) {
            if (res.success) {
                return _data.Data.postJson({
                    url: isNameAvailableLink, data: { name: $inputName.val() }
                });
            } else {
                _validator.Validator.validate($inputPrefix, res.message || 'Prefix is invalid or already in use!', function (val) {
                    return false;
                });
                _loader.Loader.hide();
            }
        }, _data.Data.defaultError).then(function (res) {
            if (res.success) {
                return _data.Data.postForm({ url: _this.action, formData: new FormData(_this) });
            } else {
                _validator.Validator.validate($inputName, res.message || 'Name is already taken!', function (val) {
                    return false;
                });
                _loader.Loader.hide();
            }
        }, _data.Data.defaultError).then(function (res) {
            if (res.success) {
                window.location.replace('/sitetriks/libraries/');
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'Name or prefix is aready in use!' });
                _loader.Loader.hide();
            }
        });

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $createForm.on('submit', submitCreateForm);
        $inputPrefix.on('input change', validateUrlOnChange);
        $libraryType.on('change', displayAllowedTypes);
        $inputName.on('input', validateName);
    }

    function dispose() {
        $createForm.on('submit', submitCreateForm);
        $inputPrefix.on('input change', validateUrlOnChange);
        $libraryType.on('change', displayAllowedTypes);
        $inputName.on('input', validateName);
    }
}

// exposing global to support current logic
window.initLibraries = initLibraries;
window.editLibraries = editLibraries;
window.createLibrary = createLibrary;

/***/ }),

/***/ "./scripts/sitetriks/thumbnailSizes.js":
/*!*********************************************!*\
  !*** ./scripts/sitetriks/thumbnailSizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createEditThumbnailSize = createEditThumbnailSize;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

function createEditThumbnailSize() {
    var $thumbSizeId = $('#thumbSizeId');
    var $fullForm = $('.form-horizontal');
    var $sizeType = $('#size-type');
    var $sizeName = $('#size-name');
    var $multiplierY = $('#multipliery');
    var $multiplierX = $('#multiplierx');
    var $offsety = $('#offsety');
    var $offsetx = $('#offsetx');
    var $sizeHeight = $('#size-height');
    var $sizeWidth = $('#size-width');
    var $btndisplayForm = $('.display-add-form');
    var $deletePopup = $('.delete-popup-wrapper');

    $btndisplayForm.on('click', displayForm);
    _warningWindow.WarningWindow.attach();

    function displayForm() {
        $('.create-thumbnail-size-form').css('display', 'block');
        $('.create-thumbnail-size-form input').val('');
    }

    function fillEditForm(id, name, type, width, height, multiplierX, multiplierY, offsetX, offsetY) {
        $thumbSizeId.val(id);
        $sizeType.val(type);
        $sizeName.val(name);
        $multiplierY.val(multiplierY);
        $multiplierX.val(multiplierX);
        $offsety.val(offsetY);
        $offsetx.val(offsetX);
        $sizeHeight.val(height);
        $sizeWidth.val(width);
    }

    $('.thumbnail-sizes-multiselect').on('click', '.glyphicon-pencil', function () {

        var $target = $(this).parent().find('.checkbox');
        var id = $target.find('input').val();
        var url = '/sitetriks/thumbnailssizes/edit?id=';

        _data.Data.getJson({ url: url + id }).then(function (res) {
            // open the 
            console.log(res);
            var model = res.model;
            console.log(model);
            displayForm();

            fillEditForm(model.id, model.name, model.type, model.width, model.height, model.multiplierX, model.multiplierY, model.offsetX, model.offsetY);
            return model;
        });
    });

    $(document).ready(function () {
        var selectionContainer = $('.selected-thumbnail-options');
        var selectedOptions = void 0;

        if (selectionContainer.length > 0) {
            selectedOptions = $('.selected-thumbnail-options').html().trim().split(' ');
        }

        function setSelectedOptions() {
            if (selectedOptions !== undefined && selectedOptions.length > 0) {
                var $multiselectSizes = $('#multiselect-sizes input');
                var $multiselectOptions = $('#multiselect-thumbnails option');

                for (var i = 0; i < $multiselectSizes.length; i += 1) {
                    for (var j = 0; j < selectedOptions.length; j += 1) {

                        if ($($multiselectSizes[i]).val() == selectedOptions[j]) {
                            $($multiselectOptions[i]).prop('selected', true);
                            $($multiselectSizes[i]).prop('checked', true);
                        }
                    }
                }
            }
        }
        setSelectedOptions();
    });

    $('.thumbnail-sizes-multiselect').on('click', 'input[type="checkbox"]', function () {

        var $target = $(this);
        var id = $target.parent().find('input').val();

        var $selectOption = $('#multiselect-thumbnails option[value=' + id + ']');

        if ($selectOption.length > 0 && $selectOption.is(':selected') == false) {
            $selectOption.prop('selected', true);
        } else if ($selectOption.length > 0 && $selectOption.is(':selected') == true) {
            $selectOption.prop('selected', false);
        }
    });

    $('.thumbnails-label-container').on('click', '.glyphicon-remove', displayDeleteThumbSizePopup);
    $('.delete-thumbnail-size').on('click', '.glyphicon-remove', hideDeleteLibraryPopup);

    $('.delete-thumbnail-size').on('click', '#cancel-delete', hideDeleteLibraryPopup);
    $('#delete-thumbnail-size').on('click', deleteThumbnailSize);

    function deleteThumbnailSize() {
        var $target = $(this);

        var id = $('#thumbnailSizeId').val();
        var url = '/sitetriks/thumbnailssizes/DeleteSingleItem?id=';

        if (id.length > 0) {
            _data.Data.postJson({ url: url + id }).then(function (res) {
                if (res.success) {
                    location.reload();
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'success', message: 'The thumbnail size has been deleted successfully.' });
                } else {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'The thumbnail was not deleted.' });
                }
            });
        }
    }

    function displayDeleteThumbSizePopup(ev) {
        var $target = $(this);
        var id = $target.parent().find('input').val();
        $deletePopup.css('display', 'block');
        $('#thumbnailSizeId').val(id);
    }
    function hideDeleteLibraryPopup(ev) {
        $deletePopup.css('display', 'none');
    }

    $('#create-thumbnail-size').on('click', function (ev) {
        var _this = $('.create-thumbnail-size-form');
        ev.preventDefault();

        var flag = true;

        var formData = new FormData();

        formData.append('Id', $thumbSizeId.val());
        formData.append('Name', $sizeName.val());
        formData.append('Height', $sizeHeight.val());
        formData.append('Width', $sizeWidth.val());
        formData.append('multipliery', $multiplierY.val());

        flag = checkInputCombination();

        if (flag) {
            _loader.Loader.show(true);
            _data.Data.postForm({ url: '/sitetriks/thumbnailssizes/createedit', formData: formData }).then(function (res) {
                if (!res.success) {
                    _loader.Loader.hide();
                }
                return res;
            }).then(function (res) {
                if (res.success) {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'success', message: 'The thumbnail size has been created successfully.' });
                    _loader.Loader.hide();
                    $('.create-thumbnail-size-form').css('display', 'none');
                    location.reload();
                } else {
                    _notifier.Notifier.createAlert({ containerId: '#alerts', type: 'danger', message: 'The thumbnail size was not created.' });
                    _loader.Loader.hide();
                }
            });
        }

        return false;
    });

    // Check if the inputs are valid numbers

    // check name
    $sizeName.on('input', function (ev) {
        var $name = $(this);
        var pattern = $name.val();

        if (pattern.length < 3) {
            $name.next().text('Thumbnails name must be atleast 3 charecters');
            $name.addClass('input-error');
        } else {
            $name.next().text('');
            $name.removeClass('input-error');
        }
    });

    $sizeType.on('input', hideOffsetOptions);
    $(window).load(function () {

        hideOffsetOptions();
    });

    // check all numbers
    $fullForm.on('input', 'input', function () {
        var $input = $(this);
        var inputValue = $input.val();

        if ($input.attr('type') === 'number') {
            if (!$(this).hasClass('ratio')) {
                checkIfNumber($input, inputValue);
            }

            if ($(this).hasClass('ratio')) {
                checkRatioValue($input, inputValue);
            }
        }
    });

    // check type
    function hideOffsetOptions() {
        var selection = $sizeType.val();
        var $offsetWrapper = $('.offsets');

        if (selection == '0') {
            $offsetWrapper.css('display', 'none');
        } else {
            $offsetWrapper.css('display', 'block');
        }
    }

    function checkRatioValue(input, value) {
        var regex = /^[0-9/,/.]+$/;

        if (!value.match(regex) || +value > 1 || +value < 0) {
            input.next().text('The input value must be a valid decimal number between 0 and 1 separated by ","');
            input.addClass('input-error');
        } else {
            input.next().text('');
            input.removeClass('input-error');
        }
    }

    function checkIfNumber(input, value) {
        var regex = /^[0-9/,/.]+$/;

        if (!value.match(regex)) {
            input.next().text('The input value must be a valid number');
            input.addClass('input-error');
        } else {
            input.next().text('');
            input.removeClass('input-error');
        }
    }

    function checkInputCombination() {

        var sizeName = $sizeName.val();
        var multiplierY = +$multiplierY.val();
        var multiplierX = +$multiplierX.val();
        var offsety = +$offsety.val();
        var offsetx = +$offsetx.val();
        var sizeHeight = +$sizeHeight.val();
        var sizeWidth = +$sizeWidth.val();
        var type = $sizeType.val();

        var isValidResize = multiplierX * sizeWidth + multiplierY * sizeHeight == 0;
        var isValidCropWindow = sizeWidth * sizeHeight > 0;
        var isValidCropSize = multiplierX * offsetx + multiplierY * offsety == 0;

        if (sizeName.length < 3) {
            $sizeName.next().text('The name should be at least 3 symbols.');
            return false;
        }
        if (type == '1') {
            if (!isValidCropWindow) {
                $sizeHeight.addClass('input-error');
                $sizeWidth.addClass('input-error');
                return false;
            } else {
                $multiplierY.next().text('');
                $sizeHeight.removeClass('input-error');
                $sizeWidth.removeClass('input-error');
            }

            if (!isValidCropSize) {
                $multiplierY.next().text('If you have selected to resize with the use of the multipliers, you cannot use an offset. In case you choose to resize by the offsets the multipliers should be equal to 0.');
                $offsety.addClass('input-error');
                $offsetx.addClass('input-error');
                $multiplierY.addClass('input-error');
                $multiplierX.addClass('input-error');
                return false;
            } else {
                $multiplierY.next().text('');
                $offsety.removeClass('input-error');
                $offsetx.removeClass('input-error');
                $multiplierY.removeClass('input-error');
                $multiplierX.removeClass('input-error');
            }
            return true;
        }

        if (type == '0') {
            if (!isValidResize) {
                $multiplierY.next().text('If you have selected to resize with the use of the multipliers, you cannot set width or height. In case you choose to resize by width and height the multipliers should be equal to 0.');
                $multiplierY.addClass('input-error');
                $multiplierX.addClass('input-error');
                $sizeHeight.addClass('input-error');
                $sizeWidth.addClass('input-error');
                return false;
            } else {
                $multiplierY.next().text('');
                $multiplierY.removeClass('input-error');
                $multiplierX.removeClass('input-error');
                $sizeHeight.removeClass('input-error');
                $sizeWidth.removeClass('input-error');
            }
        }
        return true;
    }
}

window.createEditThumbnailSize = createEditThumbnailSize;

/***/ }),

/***/ "./scripts/tags.js":
/*!*************************!*\
  !*** ./scripts/tags.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tags = undefined;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var Tags = function () {
    function init(tagsInput) {
        tagsInput = tagsInput || '#tags';
        var $tags = $(tagsInput);

        $tags.on('change keyup', function () {
            var tags = $tags.val().split(',');
            var pattern = '';
            if (tags.length > 0) {
                pattern = tags[tags.length - 1].trim();
            }

            if (pattern.length >= 3) {
                $tags.autocomplete({
                    source: function source(request, response) {
                        _data.Data.getJson({ url: '/sitetriks/tags/gettags?pattern=' + pattern }).then(function (res) {
                            response(res.suggestions);
                        });
                    },
                    select: function select(event, ui) {
                        var terms = [];
                        $.each(this.value.split(','), function () {
                            terms.push($.trim(this));
                        });

                        // remove the current input
                        terms.pop();
                        if (terms.indexOf(ui.item.value) < 0) {
                            // add the selected item
                            terms.push(ui.item.value);
                            // add placeholder to get the comma-and-space at the end
                            terms.push('');
                        }

                        this.value = terms.join(', ');
                        return false;
                    },
                    minLength: 3,
                    focus: function focus(ev, ui) {
                        ev.preventDefault();
                    }
                });
            } else {
                $tags.autocomplete({ source: [] });
            }
        });
    }

    return {
        init: init
    };
}();

exports.Tags = Tags;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tbW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vaGFuZGxlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy9maWxlLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL2xpYnJhcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3NpdGV0cmlrcy90aHVtYm5haWxTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3RhZ3MuanMiXSwibmFtZXMiOlsiRGF0YSIsIm1ha2VSZXF1ZXN0IiwiZmV0Y2giLCJpc0Z1bmN0aW9uIiwibWFrZUZldGNoUmVxdWVzdCIsIm1ha2VBamF4UmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiaXNGb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJhbXMiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsIiQiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJ0ZXh0IiwiZ2V0SnNvbiIsImRpc2FibGVDYWNoZSIsInBvc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RGb3JtIiwiZm9ybURhdGEiLCJkZWxldGVKc29uIiwiZGVmYXVsdEVycm9yIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwidG9TdHJpbmciLCJjYWxsIiwibG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMiLCJoZWxwZXJzIiwidmFsdWUiLCJvcHRpb25zIiwiX3N3aXRjaF92YWx1ZV8iLCJfc3dpdGNoX2JyZWFrXyIsImh0bWwiLCJmbiIsImFyZ3MiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwicG9wIiwiY2FzZVZhbHVlcyIsImhhc2giLCJicmVhayIsIiRlbCIsImZpbmQiLCJhdHRyIiwia2V5IiwiSGFuZGxlYmFycyIsInJlZ2lzdGVySGVscGVyIiwidGVtcGxhdGVzQ2FjaGUiLCJ0ZW1wbGF0ZXMiLCJwcm9taXNlcyIsInB1c2giLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJuYW1lIiwiYWxsIiwiTG9hZGVyIiwiZ2lmU3JjIiwic2hvdyIsImNvbG9yIiwiaW1nU3JjIiwiQmx1ciIsImFkZCIsImFwcGVuZCIsInNyYyIsImNsYXNzIiwiaGlkZSIsInJlbW92ZSIsIm9uIiwiZXYiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiJGNvbnRhaW5lciIsImhpZGVPbkNsaWNrIiwiYXBwZW5kVG8iLCJQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyIsIlBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MiLCJCTFVSX0VMRU1FTlRfQ0xBU1MiLCJhZGRCbHVyIiwib3BhY2l0eSIsImFkZENsYXNzIiwiJGJsdXJFbGVtZW50IiwiJGl0ZW1Db250YWluZXIiLCIkcHJldmlld0NvbnRhaW5lciIsInJlbW92ZUJsdXIiLCJjc3MiLCJpc05hTiIsInJlbW92ZUNsYXNzIiwiTm90aWZpZXIiLCJjcmVhdGVBbGVydCIsImNvbnRhaW5lcklkIiwidGl0bGUiLCJtZXNzYWdlIiwic2Vjb25kcyIsImlzUGVybWFuZW50Iiwic2VsZWN0b3IiLCIkdGl0bGUiLCIkY2xvc2VCdXR0b24iLCIkbWVzc2FnZSIsIiRhbGVydCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiVXRpbHMiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1YnN0cmluZyIsImd1aWQiLCJpc0d1aWQiLCJzdHJpbmdUb1Rlc3QiLCJyZWdleEd1aWQiLCJ0ZXN0IiwibG9hZGpzY3NzZmlsZSIsImZpbGVuYW1lIiwiZmlsZXR5cGUiLCJmaWxlcmVmIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsImlzTG9hZGluZyIsImxvYWRqc2Nzc2ZpbGVBc3luYyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJyZW1vdmVqc2Nzc2ZpbGUiLCJ0YXJnZXRlbGVtZW50IiwidGFyZ2V0YXR0ciIsImFsbHN1c3BlY3RzIiwiZ2V0QXR0cmlidXRlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIiLCJ1cmkiLCJyZSIsIlJlZ0V4cCIsInNlcGFyYXRvciIsIm1hdGNoIiwicmVwbGFjZSIsIm9wZW5Jbk5ld1RhYiIsIm5ld1dpbmRvdyIsIndpbmRvdyIsIm9wZW4iLCJjbG9zZWQiLCJ3cml0ZSIsImNsb3NlIiwiZm9jdXMiLCJlc2NhcGVSZWdFeHAiLCJzdHIiLCJyZXBsYWNlQWxsIiwiZ2V0QWxsU2VsZWN0b3JzIiwicmV0Iiwic3R5bGVTaGVldHMiLCJydWxlcyIsImNzc1J1bGVzIiwieCIsInNlbGVjdG9yVGV4dCIsImNzc1NlbGVjdG9yRXhpc3RzIiwic2VsZWN0b3JzIiwicG9wdWxhdGVVcmwiLCJpbnB1dElkIiwidXJsSWQiLCJjYWxsYmFjayIsIiR1cmwiLCJ0aXRsZVZhbHVlIiwidmFsIiwidG9Mb3dlckNhc2UiLCJ1cmxWYWx1ZSIsImV2dCIsIiR0cmlnZ2VyIiwiaXMiLCJlYWNoIiwiXyIsImVsZW1lbnQiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0ZSIsIiRlbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGVGdW5jIiwibmV4dCIsImhhc01pbmltdW1MZW5ndGgiLCJtaW5MZW5naHQiLCJoYXNNYXhpbXVtTGVuZ3RoIiwibWF4TGVuZ2h0IiwiaXNBbHBoYU51bWVyaWMiLCJwYXR0ZXJuIiwiaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24iLCJpc1Bhc3NpbmciLCJpc1VybEZyaWVuZGx5IiwiaXNTdGFydGluZ1dpdGhMZXR0ZXIiLCJ2YWxpZGF0ZUVtYWlsIiwiaXNEZWNpbWFsTnVtYmVyIiwibWF0Y2hlc1BhdHRlcm4iLCJpc051bWJlciIsImlzSW50ZWdlciIsInBhcnNlSW50IiwiaXNOdW1iZXJJblJhbmdlIiwibWluIiwibWF4IiwiaXNMZW5naHRJblJhbmdlIiwiY3JlYXRlRmllbGRzVmFsaWRhdGlvbiIsImN1c3RvbVZhbGlkYXRpb25GdW5jIiwidmFsaWRhdGVGaWVsZHMiLCIkZWxlbWVudHNUb1ZhbGlkYXRlIiwiZmxhZyIsInZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJ2YWxpZGF0aW9uVHlwZXMiLCJzcGxpdCIsImlubmVyRmxhZyIsInZhbGlkYXRpb25NZXNzYWdlIiwicGFyc2VGbG9hdCIsImNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIiLCJjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlciIsImV4dHJhVmFsdWVzIiwidGltZXIiLCJ2YWxpZGF0ZVVybE9uQ2hhbmdlIiwiJGlucHV0IiwiY2xlYXJUaW1lb3V0IiwidmFsaWRhdGVVcmwiLCIkdXJsRmllbGQiLCIkYnRuU3VibWl0IiwidiIsInZhbGlkYXRlVW5pcXVlbmVzIiwiY2xhc3NUb1ZhbGlkYXRlIiwiY291bnRlciIsIiRhbGxOYW1lcyIsIkZpbGVIYW5kbGVyIiwibW9kZXMiLCJzZWxlY3RlZExpYnJhcnkiLCJtZWRpYXRvciIsImxvZ2dlciIsIm11bHRpcGxlU2VsZWN0aW9uIiwibW9kdWxlcyIsImN0b3IiLCJmaWxlSGFuZGxlclVwbG9hZCIsImluc3RhbmNlIiwidW5kZWZpbmVkIiwiZmlsZUhhbmRsZXJTZWxlY3QiLCJmaWxlSGFuZGxlclNlbGVjdGVkIiwiJG5hdiIsIiRjb250ZW50Um93IiwiJGJ0bk5hdiIsInJvbGUiLCIkd3JhcHBlciIsIm9wZW5Nb2R1bGUiLCJmaXJzdCIsImJpbmRFdmVudHMiLCIkc2VsZWN0ZWRCdXR0b24iLCJiaW5kIiwiZGlzcG9zZSIsIm9mZiIsInBhcmVudCIsImxpYnJhcnlJZCIsImlzTXVsdGlwbGUiLCIkaW5wdXRGaWxlcyIsIiRub3RpZmllciIsIiRmaWxlc0NvbnRhaW5lciIsIiRsaWJyYXJpZXMiLCIkYnRuVXBsb2FkIiwiJGRyb3BBcmVhIiwiJHVwbG9hZEJ0biIsImxpYnJhcnlQcmVmaXgiLCJsaWJyYXJ5QWxsb3dlZCIsImZpbGVzIiwidXBsb2FkZWRGaWxlcyIsInJlcXVlc3RlciIsImxvYWRBbGxvd2VkVHlwZXMiLCJyZW5kZXJGaWxlcyIsInVwbG9hZEZpbGVzIiwidmFsaWRhdGVGaWxlVXJsIiwiZHJhZ092ZXIiLCJkcmFnRW50ZXIiLCJkcmFnTGVhdmUiLCJkcm9wIiwic2VsZWN0TGlicmFyeSIsInR5cGVDaGFuZ2UiLCJjbGVhblVwIiwidHJpZ2dlciIsIlN0cmluZyIsInBhcnNlIiwiZXh0IiwidHlwZSIsImRpc3BsYXlOYW1lIiwiZXh0ZW5zaW9ucyIsInByZWZpeCIsImRhdGUiLCJEYXRlIiwiY3VycmVudEZpbGUiLCJyZWdFeHAiLCIkZnJhZ21lbnQiLCJmaWxlTmFtZSIsImxhc3RJbmRleE9mIiwiZmlsZVVybCIsImlkIiwiaW5kZXgiLCJhbHQiLCJmaWxlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib3JpZ2luYWxOYW1lIiwibm90aWZpZXIiLCJkaXNwYXRjaCIsInVybHMiLCJvYmoiLCJ0cmltIiwidXBkYXRlRmlsZXNJbmZvIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiZmlsZUlkcyIsImlkcyIsInNpemVOYW1lIiwidG9VcHBlckNhc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNDbGFzcyIsIm9yaWdpbmFsRXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJmaWxlc1ZhbHVlIiwicHJvcCIsInJlbW92ZUF0dHIiLCJwYWdlIiwiJGJ0bk5leHQiLCIkYnRuUHJldiIsIiRwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJuZXh0UGFnZUV4aXN0cyIsIiRidG5TZWxlY3QiLCJzZWxlY3RlZEZpbGVzIiwibG9hZEltYWdlcyIsIiRidG5TYXZlIiwiJGJ0bkVkaXQiLCJzZWxlY3RVcGxvYWRlZEZpbGVzIiwic2VsZWN0ZWRMaW5rSWRzIiwic2VsZWN0ZWRMaW5rSWQiLCJjaGFuZ2VMaWJyYXJ5IiwibmV4dFBhZ2UiLCJwcmV2UGFnZSIsInNlbGVjdFNpemUiLCJ0cmlnZ2VyQ2hlY2tib3giLCJ0b2dnbGVTZWxlY3REcm9wZG93biIsInNlbGVjdEZpbGVzIiwicG9wdWxhdGVTZWxlY3RlZCIsImlucHV0VHlwZSIsImZpbHRlcnMiLCJjb21wYXJpc29uIiwicHJvcGVydHlOYW1lIiwic2tpcCIsInRha2UiLCJpdGVtcyIsInRodW1ibmFpbHMiLCJjZWlsIiwiY291bnQiLCJzZXRTZWxlY3RlZEltYWdlcyIsIiRvcHRpb24iLCJzZWxlY3RlZElkIiwiJGNoZWNrYm94IiwiJHNlbGVjdCIsInBhcmVudHMiLCJzZWxlY3RGaWxlVUkiLCJzZWxlY3RlZEltYWdlc0Z1bGxJbmZvIiwic2VsZWN0ZWQiLCIkc2VsZWN0ZWQiLCJzZWxlY3RlZElkcyIsIk9iamVjdCIsImVudHJpZXMiLCJzZWxlY3RlZEltYWdlSWQiLCIkY3VycmVudFRodW1ibmFpbCIsIiRjbG9uZSIsImNsb25lIiwiY2hhbmdlIiwid2hpY2giLCJXYXJuaW5nV2luZG93IiwiY29uZmlybWF0aW9uTWVzc2FnZSIsIm9uVW5sb2FkIiwiaGFzQ2hhbmdlcyIsInJldHVyblZhbHVlIiwibGFzdENsaWNrZWRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3JjRWxlbWVudCIsImhhc1RleHRBcmVhc1dpdGhUZXh0IiwiJHRleHRhcmVhcyIsImhhc0lucHV0c1dpdGhUZXh0IiwiaGFzVGV4dCIsIiRpbnB1dHMiLCJjaGVja0VsZW1lbnRGb3JEYXRhQXR0ciIsImF0dHJpYnV0ZSIsImNoZWNrVXJsIiwibGlua1BhdGgiLCJnZXRMYXN0Q2xpY2tlZEVsZW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3VibWl0QnV0dG9uQ2hlY2siLCJ0YWdOYW1lIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlucHV0Q2hhbmdlZCIsImRlZmF1bHRTdG9wTGVhdmUiLCJpc1NhdmluZyIsImF0dGFjaCIsIm9uYmVmb3JldW5sb2FkIiwiZGV0YWNoIiwiZm9yY2UiLCJpbml0TGlicmFyaWVzIiwiZWRpdExpYnJhcmllcyIsImNyZWF0ZUxpYnJhcnkiLCJncmlkIiwiJGxpYnMiLCIkYnRuRWRpdExpYnJhcnkiLCIkYnRuRGVsZXRlTGlicmFyeSIsIiRkZWxldGVQb3B1cCIsIiRyZW1vdmVQb3B1cCIsIiRjYW5jZWxEZWxldGVCdXR0b24iLCIkZGVsZXRlTGlicmFyeUJ1dHRvbiIsInVwZGF0ZURlZmF1bHRGaWx0ZXJzIiwibG9hZCIsIiRncmlkIiwiJG1vZGFsIiwiZmlsZUhhbmRsZXIiLCJmaWxlVXBsb2FkZWRIYW5kbGVyIiwibW9kYWwiLCJjb3B5VXJsIiwib3JpZ2luIiwiY29weVRvQ2xpcGJvYXJkIiwiZWRpdExpYnJhcnkiLCJocmVmIiwiZGlzcGxheURlbGV0ZUxpYnJhcnlQb3B1cCIsIiRzZWxlY3RlZExpYiIsImhpZGVEZWxldGVMaWJyYXJ5UG9wdXAiLCJkZWxldGVMaWJyYXJ5IiwicmVsb2FkIiwiJHRlbXAiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImlzTmFtZUF2YWlsYWJsZUxpbmsiLCIkaW5wdXROYW1lIiwiJGVkaXRGb3JtIiwiVGFncyIsImluaXQiLCJ2YWxpZGF0ZU5hbWUiLCJzdWJtaXRFZGl0Rm9ybSIsIl90aGlzIiwidmFsaWRhdGVVcmxMaW5rIiwiJGlucHV0UHJlZml4IiwiJHByZWZpeFZhbGlkYXRpb24iLCIkbGlicmFyeVR5cGUiLCIkYWxsb3dlZFR5cGVzIiwiJGNyZWF0ZUZvcm0iLCJkaXNwbGF5QWxsb3dlZFR5cGVzIiwiYXBwbHkiLCJzdWJtaXRDcmVhdGVGb3JtIiwiYWN0aW9uIiwiY3JlYXRlRWRpdFRodW1ibmFpbFNpemUiLCIkdGh1bWJTaXplSWQiLCIkZnVsbEZvcm0iLCIkc2l6ZVR5cGUiLCIkc2l6ZU5hbWUiLCIkbXVsdGlwbGllclkiLCIkbXVsdGlwbGllclgiLCIkb2Zmc2V0eSIsIiRvZmZzZXR4IiwiJHNpemVIZWlnaHQiLCIkc2l6ZVdpZHRoIiwiJGJ0bmRpc3BsYXlGb3JtIiwiZGlzcGxheUZvcm0iLCJmaWxsRWRpdEZvcm0iLCJ3aWR0aCIsImhlaWdodCIsIm11bHRpcGxpZXJYIiwibXVsdGlwbGllclkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm1vZGVsIiwicmVhZHkiLCJzZWxlY3Rpb25Db250YWluZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCIkbXVsdGlzZWxlY3RTaXplcyIsIiRtdWx0aXNlbGVjdE9wdGlvbnMiLCJqIiwiJHNlbGVjdE9wdGlvbiIsImRpc3BsYXlEZWxldGVUaHVtYlNpemVQb3B1cCIsImRlbGV0ZVRodW1ibmFpbFNpemUiLCJjaGVja0lucHV0Q29tYmluYXRpb24iLCIkbmFtZSIsImhpZGVPZmZzZXRPcHRpb25zIiwiaW5wdXRWYWx1ZSIsImNoZWNrSWZOdW1iZXIiLCJjaGVja1JhdGlvVmFsdWUiLCJzZWxlY3Rpb24iLCIkb2Zmc2V0V3JhcHBlciIsImlucHV0IiwicmVnZXgiLCJvZmZzZXR5Iiwib2Zmc2V0eCIsInNpemVIZWlnaHQiLCJzaXplV2lkdGgiLCJpc1ZhbGlkUmVzaXplIiwiaXNWYWxpZENyb3BXaW5kb3ciLCJpc1ZhbGlkQ3JvcFNpemUiLCJ0YWdzSW5wdXQiLCIkdGFncyIsInRhZ3MiLCJhdXRvY29tcGxldGUiLCJzb3VyY2UiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzdWdnZXN0aW9ucyIsInVpIiwidGVybXMiLCJpdGVtIiwiam9pbiIsIm1pbkxlbmd0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBSzJCO0FBQ2pDLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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eUMsY0FBYyx5Q0FBeUM7QUFDOVo7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQkFBMEI7QUFDaEM7QUFDQSxFQUFFLElBQUk7QUFDTjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlFQUF5RTs7QUFFekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUosZ0VBQWdFO0FBQ2hFLGdFQUFnRTs7QUFFaEU7O0FBRUEseURBQXlEOztBQUV6RCx5REFBeUQ7QUFDekQseURBQXlEO0FBQ3pELHlEQUF5RDtBQUN6RCxnRUFBZ0U7QUFDaEUsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEVBQUUsK0JBQStCLEVBQUU7QUFDakU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLE9BQU87QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQUF3RSxXQUFXO0FBQ25GLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isc0JBQXNCLDhDQUE4QztBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUNBQXFDLE9BQU8sUUFBUSxRQUFRO0FBQzVEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLHdCQUF3Qiw0RUFBNEU7QUFDcEcsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0EsK0RBQStELGFBQWE7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxSUFBcUk7QUFDckksSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVB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LCtCQUFPLEtBQVA7QUFDSCxxQkF2QmM7QUF3QmZDLCtCQUFXLENBeEJJO0FBeUJmL1csMkJBQU8sZUFBVTlFLEVBQVYsRUFBY3liLEVBQWQsRUFBa0I7QUFDckJ6YiwyQkFBR3NQLGNBQUg7QUFDSDtBQTNCYyxpQkFBbkI7QUE2QkgsYUE5QkQsTUE4Qk87QUFDSDRMLHNCQUFNRSxZQUFOLENBQW1CLEVBQUVDLFFBQVEsRUFBVixFQUFuQjtBQUNIO0FBQ0osU0F4Q0Q7QUF5Q0g7O0FBRUQsV0FBTztBQUNIbEU7QUFERyxLQUFQO0FBR0gsQ0FuRFcsRUFBWjs7UUFxRFNELEksR0FBQUEsSSIsImZpbGUiOiJqcy9zaXRldHJpa3MvbGlicmFyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9zaXRldHJpa3MvbGlicmFyaWVzLmpzXCIpO1xuIiwiLyoqIVxuXG4gQGxpY2Vuc2VcbiBoYW5kbGViYXJzIHY0LjEuMFxuXG5Db3B5cmlnaHQgKEMpIDIwMTEtMjAxNyBieSBZZWh1ZGEgS2F0elxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhhbmRsZWJhcnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfaGFuZGxlYmFyc1J1bnRpbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc1J1bnRpbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc1J1bnRpbWUpO1xuXG5cdC8vIENvbXBpbGVyIGltcG9ydHNcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckFzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlckFzdCk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvcik7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc05vQ29uZmxpY3QpO1xuXG5cdHZhciBfY3JlYXRlID0gX2hhbmRsZWJhcnNSdW50aW1lMlsnZGVmYXVsdCddLmNyZWF0ZTtcblx0ZnVuY3Rpb24gY3JlYXRlKCkge1xuXHQgIHZhciBoYiA9IF9jcmVhdGUoKTtcblxuXHQgIGhiLmNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIuY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuXHQgIH07XG5cdCAgaGIucHJlY29tcGlsZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuXHQgICAgcmV0dXJuIF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlci5wcmVjb21waWxlKGlucHV0LCBvcHRpb25zLCBoYik7XG5cdCAgfTtcblxuXHQgIGhiLkFTVCA9IF9oYW5kbGViYXJzQ29tcGlsZXJBc3QyWydkZWZhdWx0J107XG5cdCAgaGIuQ29tcGlsZXIgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIuQ29tcGlsZXI7XG5cdCAgaGIuSmF2YVNjcmlwdENvbXBpbGVyID0gX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcjJbJ2RlZmF1bHQnXTtcblx0ICBoYi5QYXJzZXIgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZS5wYXJzZXI7XG5cdCAgaGIucGFyc2UgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZS5wYXJzZTtcblxuXHQgIHJldHVybiBoYjtcblx0fVxuXG5cdHZhciBpbnN0ID0gY3JlYXRlKCk7XG5cdGluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5cdF9oYW5kbGViYXJzTm9Db25mbGljdDJbJ2RlZmF1bHQnXShpbnN0KTtcblxuXHRpbnN0LlZpc2l0b3IgPSBfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvcjJbJ2RlZmF1bHQnXTtcblxuXHRpbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuXHQgICAgXCJkZWZhdWx0XCI6IG9ialxuXHQgIH07XG5cdH07XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfaGFuZGxlYmFyc0Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdHZhciBiYXNlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNCYXNlKTtcblxuXHQvLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXG5cdC8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG5cblx0dmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXG5cdHZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc1NhZmVTdHJpbmcpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNFeGNlcHRpb24pO1xuXG5cdHZhciBfaGFuZGxlYmFyc1V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1V0aWxzKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG5cblx0dmFyIHJ1bnRpbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1J1bnRpbWUpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuXHQvLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2Vcblx0ZnVuY3Rpb24gY3JlYXRlKCkge1xuXHQgIHZhciBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG5cdCAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcblx0ICBoYi5TYWZlU3RyaW5nID0gX2hhbmRsZWJhcnNTYWZlU3RyaW5nMlsnZGVmYXVsdCddO1xuXHQgIGhiLkV4Y2VwdGlvbiA9IF9oYW5kbGViYXJzRXhjZXB0aW9uMlsnZGVmYXVsdCddO1xuXHQgIGhiLlV0aWxzID0gVXRpbHM7XG5cdCAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cblx0ICBoYi5WTSA9IHJ1bnRpbWU7XG5cdCAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbiAoc3BlYykge1xuXHQgICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuXHQgIH07XG5cblx0ICByZXR1cm4gaGI7XG5cdH1cblxuXHR2YXIgaW5zdCA9IGNyZWF0ZSgpO1xuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuXHRfaGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cblx0aW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuXHQgICAgcmV0dXJuIG9iajtcblx0ICB9IGVsc2Uge1xuXHQgICAgdmFyIG5ld09iaiA9IHt9O1xuXG5cdCAgICBpZiAob2JqICE9IG51bGwpIHtcblx0ICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHQgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cdCAgICByZXR1cm4gbmV3T2JqO1xuXHQgIH1cblx0fTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5IYW5kbGViYXJzRW52aXJvbm1lbnQgPSBIYW5kbGViYXJzRW52aXJvbm1lbnQ7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0dmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblx0dmFyIF9kZWNvcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cblx0dmFyIF9sb2dnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblxuXHR2YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xuXG5cdHZhciBWRVJTSU9OID0gJzQuMS4wJztcblx0ZXhwb3J0cy5WRVJTSU9OID0gVkVSU0lPTjtcblx0dmFyIENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuXHRleHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG5cdHZhciBSRVZJU0lPTl9DSEFOR0VTID0ge1xuXHQgIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG5cdCAgMjogJz09IDEuMC4wLXJjLjMnLFxuXHQgIDM6ICc9PSAxLjAuMC1yYy40Jyxcblx0ICA0OiAnPT0gMS54LngnLFxuXHQgIDU6ICc9PSAyLjAuMC1hbHBoYS54Jyxcblx0ICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcblx0ICA3OiAnPj0gNC4wLjAnXG5cdH07XG5cblx0ZXhwb3J0cy5SRVZJU0lPTl9DSEFOR0VTID0gUkVWSVNJT05fQ0hBTkdFUztcblx0dmFyIG9iamVjdFR5cGUgPSAnW29iamVjdCBPYmplY3RdJztcblxuXHRmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcblx0ICB0aGlzLmhlbHBlcnMgPSBoZWxwZXJzIHx8IHt9O1xuXHQgIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcblx0ICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG5cdCAgX2hlbHBlcnMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyh0aGlzKTtcblx0ICBfZGVjb3JhdG9ycy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xuXHR9XG5cblx0SGFuZGxlYmFyc0Vudmlyb25tZW50LnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG5cdCAgbG9nZ2VyOiBfbG9nZ2VyMlsnZGVmYXVsdCddLFxuXHQgIGxvZzogX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2csXG5cblx0ICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXIobmFtZSwgZm4pIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBpZiAoZm4pIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7XG5cdCAgICAgIH1cblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVySGVscGVyKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG5cdCAgfSxcblxuXHQgIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gcmVnaXN0ZXJQYXJ0aWFsKG5hbWUsIHBhcnRpYWwpIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCInICsgbmFtZSArICdcIiBhcyB1bmRlZmluZWQnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiB1bnJlZ2lzdGVyUGFydGlhbChuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcblx0ICB9LFxuXG5cdCAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUsIGZuKSB7XG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcblx0ICAgICAgaWYgKGZuKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuXHQgICAgICB9XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gdW5yZWdpc3RlckRlY29yYXRvcihuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5kZWNvcmF0b3JzW25hbWVdO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgbG9nID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2c7XG5cblx0ZXhwb3J0cy5sb2cgPSBsb2c7XG5cdGV4cG9ydHMuY3JlYXRlRnJhbWUgPSBfdXRpbHMuY3JlYXRlRnJhbWU7XG5cdGV4cG9ydHMubG9nZ2VyID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuXHRleHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuXHRleHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO1xuXHRleHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuXHRleHBvcnRzLmNyZWF0ZUZyYW1lID0gY3JlYXRlRnJhbWU7XG5cdGV4cG9ydHMuYmxvY2tQYXJhbXMgPSBibG9ja1BhcmFtcztcblx0ZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoO1xuXHR2YXIgZXNjYXBlID0ge1xuXHQgICcmJzogJyZhbXA7Jyxcblx0ICAnPCc6ICcmbHQ7Jyxcblx0ICAnPic6ICcmZ3Q7Jyxcblx0ICAnXCInOiAnJnF1b3Q7Jyxcblx0ICBcIidcIjogJyYjeDI3OycsXG5cdCAgJ2AnOiAnJiN4NjA7Jyxcblx0ICAnPSc6ICcmI3gzRDsnXG5cdH07XG5cblx0dmFyIGJhZENoYXJzID0gL1smPD5cIidgPV0vZyxcblx0ICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5cdGZ1bmN0aW9uIGVzY2FwZUNoYXIoY2hyKSB7XG5cdCAgcmV0dXJuIGVzY2FwZVtjaHJdO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG9iaiAvKiAsIC4uLnNvdXJjZSAqLykge1xuXHQgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG5cdCAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2ldLCBrZXkpKSB7XG5cdCAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBvYmo7XG5cdH1cblxuXHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5cdGV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcblx0Ly8gU291cmNlZCBmcm9tIGxvZGFzaFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vYmVzdGllanMvbG9kYXNoL2Jsb2IvbWFzdGVyL0xJQ0VOU0UudHh0XG5cdC8qIGVzbGludC1kaXNhYmxlIGZ1bmMtc3R5bGUgKi9cblx0dmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblx0fTtcblx0Ly8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdGlmIChpc0Z1bmN0aW9uKC94LykpIHtcblx0ICBleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHQgIH07XG5cdH1cblx0ZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuXHQvKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHR2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IGZhbHNlO1xuXHR9O1xuXG5cdGV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cdC8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5cblx0ZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcblx0ICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcblx0ICAgICAgcmV0dXJuIGk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiAtMTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG5cdCAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdCAgICAvLyBkb24ndCBlc2NhcGUgU2FmZVN0cmluZ3MsIHNpbmNlIHRoZXkncmUgYWxyZWFkeSBzYWZlXG5cdCAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcblx0ICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcblx0ICAgIH0gZWxzZSBpZiAoc3RyaW5nID09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuICcnO1xuXHQgICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG5cdCAgICAgIHJldHVybiBzdHJpbmcgKyAnJztcblx0ICAgIH1cblxuXHQgICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG5cdCAgICAvLyB0aGUgcmVnZXggdGVzdCB3aWxsIGRvIHRoaXMgdHJhbnNwYXJlbnRseSBiZWhpbmQgdGhlIHNjZW5lcywgY2F1c2luZyBpc3N1ZXMgaWZcblx0ICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuXHQgICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG5cdCAgfVxuXG5cdCAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcblx0ICAgIHJldHVybiBzdHJpbmc7XG5cdCAgfVxuXHQgIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG5cdH1cblxuXHRmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG5cdCAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG5cdCAgdmFyIGZyYW1lID0gZXh0ZW5kKHt9LCBvYmplY3QpO1xuXHQgIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG5cdCAgcmV0dXJuIGZyYW1lO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcblx0ICBwYXJhbXMucGF0aCA9IGlkcztcblx0ICByZXR1cm4gcGFyYW1zO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG5cdCAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG5cdH1cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIGVycm9yUHJvcHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnbWVzc2FnZScsICduYW1lJywgJ251bWJlcicsICdzdGFjayddO1xuXG5cdGZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG5cdCAgdmFyIGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG5cdCAgICAgIGxpbmUgPSB1bmRlZmluZWQsXG5cdCAgICAgIGNvbHVtbiA9IHVuZGVmaW5lZDtcblx0ICBpZiAobG9jKSB7XG5cdCAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG5cdCAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG5cdCAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcblx0ICB9XG5cblx0ICB2YXIgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cblx0ICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cblx0ICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcblx0ICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuXHQgIH1cblxuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cdCAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG5cdCAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuXHQgIH1cblxuXHQgIHRyeSB7XG5cdCAgICBpZiAobG9jKSB7XG5cdCAgICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG5cblx0ICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG5cdCAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICAgIGlmIChfT2JqZWN0JGRlZmluZVByb3BlcnR5KSB7XG5cdCAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG5cdCAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuXHQgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuXHQgICAgICAgIH0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSBjYXRjaCAobm9wKSB7XG5cdCAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG5cdCAgfVxuXHR9XG5cblx0RXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV4Y2VwdGlvbjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXyg4KSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG5cdCAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcblx0fTtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuXHQgIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG5cdCAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG5cdCAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG5cdCAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcblx0ICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG5cdCAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuXHQgIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcblx0ICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcblx0ICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG5cdH07XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzID0gcmVnaXN0ZXJEZWZhdWx0SGVscGVycztcblxuXHR2YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuXHR2YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyk7XG5cblx0dmFyIF9oZWxwZXJzRWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG5cdHZhciBfaGVscGVyc0VhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0VhY2gpO1xuXG5cdHZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuXHR2YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNIZWxwZXJNaXNzaW5nKTtcblxuXHR2YXIgX2hlbHBlcnNJZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG5cdHZhciBfaGVscGVyc0lmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNJZik7XG5cblx0dmFyIF9oZWxwZXJzTG9nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cblx0dmFyIF9oZWxwZXJzTG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb2cpO1xuXG5cdHZhciBfaGVscGVyc0xvb2t1cCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG5cdHZhciBfaGVscGVyc0xvb2t1cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9va3VwKTtcblxuXHR2YXIgX2hlbHBlcnNXaXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cblx0dmFyIF9oZWxwZXJzV2l0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzV2l0aCk7XG5cblx0ZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0SGVscGVycyhpbnN0YW5jZSkge1xuXHQgIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0VhY2gyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNJZjJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNMb2cyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzTG9va3VwMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc1dpdGgyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuXHQgICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuXHQgICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcblx0ICAgICAgcmV0dXJuIGZuKHRoaXMpO1xuXHQgICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG5cdCAgICB9IGVsc2UgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG5cdCAgICAgIGlmIChjb250ZXh0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICAgIG9wdGlvbnMuaWRzID0gW29wdGlvbnMubmFtZV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG5cdCAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2VhY2gnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKCFvcHRpb25zKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gb3B0aW9ucy5mbixcblx0ICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuXHQgICAgICAgIGkgPSAwLFxuXHQgICAgICAgIHJldCA9ICcnLFxuXHQgICAgICAgIGRhdGEgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY29udGV4dFBhdGggPSB1bmRlZmluZWQ7XG5cblx0ICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcblx0ICAgICAgY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG5cdCAgICB9XG5cblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuXHQgICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG5cdCAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcblx0ICAgICAgaWYgKGRhdGEpIHtcblx0ICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuXHQgICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcblx0ICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG5cdCAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG5cdCAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG5cdCAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuXHQgICAgICAgIGRhdGE6IGRhdGEsXG5cdCAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuXHQgICAgICAgIGZvciAodmFyIGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuXHQgICAgICAgICAgaWYgKGkgaW4gY29udGV4dCkge1xuXHQgICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhciBwcmlvcktleSA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgIGZvciAodmFyIGtleSBpbiBjb250ZXh0KSB7XG5cdCAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdCAgICAgICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgdGhlIGl0ZXJhdGlvbnMgb25lIHN0ZXAgb3V0IG9mIHN5bmMgc28gd2UgY2FuIGRldGVjdFxuXHQgICAgICAgICAgICAvLyB0aGUgbGFzdCBpdGVyYXRpb24gd2l0aG91dCBoYXZlIHRvIHNjYW4gdGhlIG9iamVjdCB0d2ljZSBhbmQgY3JlYXRlXG5cdCAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG5cdCAgICAgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHByaW9yS2V5ID0ga2V5O1xuXHQgICAgICAgICAgICBpKys7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmIChpID09PSAwKSB7XG5cdCAgICAgIHJldCA9IGludmVyc2UodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaGVscGVyTWlzc2luZycsIGZ1bmN0aW9uICgpIC8qIFthcmdzLCBdb3B0aW9ucyAqL3tcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdCAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3RydWN0LlxuXHQgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHtcblx0ICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG5cdCAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuXHQgICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cblx0ICAgIGlmICghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCB8fCBfdXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuXHQgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwgeyBmbjogb3B0aW9ucy5pbnZlcnNlLCBpbnZlcnNlOiBvcHRpb25zLmZuLCBoYXNoOiBvcHRpb25zLmhhc2ggfSk7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24gKCkgLyogbWVzc2FnZSwgb3B0aW9ucyAqL3tcblx0ICAgIHZhciBhcmdzID0gW3VuZGVmaW5lZF0sXG5cdCAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0ICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBsZXZlbCA9IDE7XG5cdCAgICBpZiAob3B0aW9ucy5oYXNoLmxldmVsICE9IG51bGwpIHtcblx0ICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG5cdCAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuXHQgICAgICBsZXZlbCA9IG9wdGlvbnMuZGF0YS5sZXZlbDtcblx0ICAgIH1cblx0ICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuXHQgICAgaW5zdGFuY2UubG9nLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbiAob2JqLCBmaWVsZCkge1xuXHQgICAgcmV0dXJuIG9iaiAmJiBvYmpbZmllbGRdO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG5cdCAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cblx0ICAgIGlmICghX3V0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcblx0ICAgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cdCAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG5cdCAgICAgICAgZGF0YTogZGF0YSxcblx0ICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0XSwgW2RhdGEgJiYgZGF0YS5jb250ZXh0UGF0aF0pXG5cdCAgICAgIH0pO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgPSByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzO1xuXG5cdHZhciBfZGVjb3JhdG9yc0lubGluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG5cdHZhciBfZGVjb3JhdG9yc0lubGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNvcmF0b3JzSW5saW5lKTtcblxuXHRmdW5jdGlvbiByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKGluc3RhbmNlKSB7XG5cdCAgX2RlY29yYXRvcnNJbmxpbmUyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckRlY29yYXRvcignaW5saW5lJywgZnVuY3Rpb24gKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG5cdCAgICB2YXIgcmV0ID0gZm47XG5cdCAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG5cdCAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG5cdCAgICAgIHJldCA9IGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcnRpYWxzIHN0YWNrIGZyYW1lIHByaW9yIHRvIGV4ZWMuXG5cdCAgICAgICAgdmFyIG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuXHQgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IF91dGlscy5leHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG5cdCAgICAgICAgdmFyIHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9yaWdpbmFsO1xuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgIH07XG5cdCAgICB9XG5cblx0ICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIGxvZ2dlciA9IHtcblx0ICBtZXRob2RNYXA6IFsnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ10sXG5cdCAgbGV2ZWw6ICdpbmZvJyxcblxuXHQgIC8vIE1hcHMgYSBnaXZlbiBsZXZlbCB2YWx1ZSB0byB0aGUgYG1ldGhvZE1hcGAgaW5kZXhlcyBhYm92ZS5cblx0ICBsb29rdXBMZXZlbDogZnVuY3Rpb24gbG9va3VwTGV2ZWwobGV2ZWwpIHtcblx0ICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIHZhciBsZXZlbE1hcCA9IF91dGlscy5pbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuXHQgICAgICBpZiAobGV2ZWxNYXAgPj0gMCkge1xuXHQgICAgICAgIGxldmVsID0gbGV2ZWxNYXA7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgbGV2ZWwgPSBwYXJzZUludChsZXZlbCwgMTApO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBsZXZlbDtcblx0ICB9LFxuXG5cdCAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcblx0ICBsb2c6IGZ1bmN0aW9uIGxvZyhsZXZlbCkge1xuXHQgICAgbGV2ZWwgPSBsb2dnZXIubG9va3VwTGV2ZWwobGV2ZWwpO1xuXG5cdCAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGxvZ2dlci5sb29rdXBMZXZlbChsb2dnZXIubGV2ZWwpIDw9IGxldmVsKSB7XG5cdCAgICAgIHZhciBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcblx0ICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcblx0ICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0ICAgICAgICBtZXRob2QgPSAnbG9nJztcblx0ICAgICAgfVxuXG5cdCAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgICAgIG1lc3NhZ2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgICB9XG5cblx0ICAgICAgY29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gbG9nZ2VyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIEJ1aWxkIG91dCBvdXIgYmFzaWMgU2FmZVN0cmluZyB0eXBlXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRmdW5jdGlvbiBTYWZlU3RyaW5nKHN0cmluZykge1xuXHQgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuXHR9XG5cblx0U2FmZVN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcgPSBTYWZlU3RyaW5nLnByb3RvdHlwZS50b0hUTUwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XG5cdH07XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU2FmZVN0cmluZztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3Qkc2VhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuY2hlY2tSZXZpc2lvbiA9IGNoZWNrUmV2aXNpb247XG5cdGV4cG9ydHMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0ZXhwb3J0cy53cmFwUHJvZ3JhbSA9IHdyYXBQcm9ncmFtO1xuXHRleHBvcnRzLnJlc29sdmVQYXJ0aWFsID0gcmVzb2x2ZVBhcnRpYWw7XG5cdGV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7XG5cdGV4cG9ydHMubm9vcCA9IG5vb3A7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHR2YXIgX2Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG5cdCAgdmFyIGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG5cdCAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OO1xuXG5cdCAgaWYgKGNvbXBpbGVyUmV2aXNpb24gIT09IGN1cnJlbnRSZXZpc2lvbikge1xuXHQgICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcblx0ICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcblx0ICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIGlmICghZW52KSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG5cdCAgfVxuXHQgIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG5cdCAgfVxuXG5cdCAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuXHQgIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG5cdCAgLy8gZm9yIGV4dGVybmFsIHVzZXJzIHRvIG92ZXJyaWRlIHRoZXNlIGFzIHBzdWVkby1zdXBwb3J0ZWQgQVBJcy5cblx0ICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG5cdCAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKG9wdGlvbnMuaGFzaCkge1xuXHQgICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuXHQgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICBvcHRpb25zLmlkc1swXSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgdmFyIHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0ICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuXHQgICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuXHQgICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB9XG5cdCAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcblx0ICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG5cdCAgICAgICAgdmFyIGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvLyBKdXN0IGFkZCB3YXRlclxuXHQgIHZhciBjb250YWluZXIgPSB7XG5cdCAgICBzdHJpY3Q6IGZ1bmN0aW9uIHN0cmljdChvYmosIG5hbWUpIHtcblx0ICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG9ialtuYW1lXTtcblx0ICAgIH0sXG5cdCAgICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChkZXB0aHMsIG5hbWUpIHtcblx0ICAgICAgdmFyIGxlbiA9IGRlcHRocy5sZW5ndGg7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG5cdCAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGxhbWJkYTogZnVuY3Rpb24gbGFtYmRhKGN1cnJlbnQsIGNvbnRleHQpIHtcblx0ICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcblx0ICAgIH0sXG5cblx0ICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG5cdCAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuXHQgICAgZm46IGZ1bmN0aW9uIGZuKGkpIHtcblx0ICAgICAgdmFyIHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcblx0ICAgICAgcmV0LmRlY29yYXRvciA9IHRlbXBsYXRlU3BlY1tpICsgJ19kJ107XG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9LFxuXG5cdCAgICBwcm9ncmFtczogW10sXG5cdCAgICBwcm9ncmFtOiBmdW5jdGlvbiBwcm9ncmFtKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICAgICAgdmFyIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSxcblx0ICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcblx0ICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcblx0ICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuXHQgICAgfSxcblxuXHQgICAgZGF0YTogZnVuY3Rpb24gZGF0YSh2YWx1ZSwgZGVwdGgpIHtcblx0ICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgfSxcblx0ICAgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShwYXJhbSwgY29tbW9uKSB7XG5cdCAgICAgIHZhciBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cblx0ICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG5cdCAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBvYmo7XG5cdCAgICB9LFxuXHQgICAgLy8gQW4gZW1wdHkgb2JqZWN0IHRvIHVzZSBhcyByZXBsYWNlbWVudCBmb3IgbnVsbC1jb250ZXh0c1xuXHQgICAgbnVsbENvbnRleHQ6IF9PYmplY3Qkc2VhbCh7fSksXG5cblx0ICAgIG5vb3A6IGVudi5WTS5ub29wLFxuXHQgICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcblx0ICB9O1xuXG5cdCAgZnVuY3Rpb24gcmV0KGNvbnRleHQpIHtcblx0ICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG5cdCAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuXHQgICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcblx0ICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuXHQgICAgfVxuXHQgICAgdmFyIGRlcHRocyA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG5cdCAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG5cdCAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICB9XG5cdCAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcblx0ICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgIH1cblx0ICByZXQuaXNUb3AgPSB0cnVlO1xuXG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuXHQgICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuXHQgICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcblx0ICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmRlY29yYXRvcnMsIGVudi5kZWNvcmF0b3JzKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG5cdCAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG5cdCAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG5cdCAgICB9XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgIH07XG5cdCAgcmV0dXJuIHJldDtcblx0fVxuXG5cdGZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICBmdW5jdGlvbiBwcm9nKGNvbnRleHQpIHtcblx0ICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgIHZhciBjdXJyZW50RGVwdGhzID0gZGVwdGhzO1xuXHQgICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG5cdCAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBmbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIG9wdGlvbnMuZGF0YSB8fCBkYXRhLCBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSwgY3VycmVudERlcHRocyk7XG5cdCAgfVxuXG5cdCAgcHJvZyA9IGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXG5cdCAgcHJvZy5wcm9ncmFtID0gaTtcblx0ICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG5cdCAgcHJvZy5ibG9ja1BhcmFtcyA9IGRlY2xhcmVkQmxvY2tQYXJhbXMgfHwgMDtcblx0ICByZXR1cm4gcHJvZztcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICBpZiAoIXBhcnRpYWwpIHtcblx0ICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcblx0ICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXTtcblx0ICAgIH1cblx0ICB9IGVsc2UgaWYgKCFwYXJ0aWFsLmNhbGwgJiYgIW9wdGlvbnMubmFtZSkge1xuXHQgICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG5cdCAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuXHQgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbcGFydGlhbF07XG5cdCAgfVxuXHQgIHJldHVybiBwYXJ0aWFsO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuXHQgIHZhciBjdXJyZW50UGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuXHQgIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG5cdCAgaWYgKG9wdGlvbnMuaWRzKSB7XG5cdCAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG5cdCAgfVxuXG5cdCAgdmFyIHBhcnRpYWxCbG9jayA9IHVuZGVmaW5lZDtcblx0ICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXG5cdCAgICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cdCAgICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gZnVuY3Rpb24gcGFydGlhbEJsb2NrV3JhcHBlcihjb250ZXh0KSB7XG5cdCAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgICAgIC8vIFJlc3RvcmUgdGhlIHBhcnRpYWwtYmxvY2sgZnJvbSB0aGUgY2xvc3VyZSBmb3IgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgYmxvY2tcblx0ICAgICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cblx0ICAgICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAgIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gY3VycmVudFBhcnRpYWxCbG9jaztcblx0ICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICAgIH07XG5cdCAgICAgIGlmIChmbi5wYXJ0aWFscykge1xuXHQgICAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcblx0ICAgICAgfVxuXHQgICAgfSkoKTtcblx0ICB9XG5cblx0ICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuXHQgICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcblx0ICB9XG5cblx0ICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG5cdCAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0ICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIG5vb3AoKSB7XG5cdCAgcmV0dXJuICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuXHQgIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuXHQgICAgZGF0YSA9IGRhdGEgPyBfYmFzZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuXHQgICAgZGF0YS5yb290ID0gY29udGV4dDtcblx0ICB9XG5cdCAgcmV0dXJuIGRhdGE7XG5cdH1cblxuXHRmdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG5cdCAgaWYgKGZuLmRlY29yYXRvcikge1xuXHQgICAgdmFyIHByb3BzID0ge307XG5cdCAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcblx0ICB9XG5cdCAgcmV0dXJuIHByb2c7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXygyNCksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzApLk9iamVjdC5zZWFsO1xuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjcpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcblx0ICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChpdCkgOiBpdDtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgY29yZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBmYWlscyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcblx0ICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG5cdCAgICAsIGV4cCA9IHt9O1xuXHQgIGV4cFtLRVldID0gZXhlYyhmbik7XG5cdCAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDI4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpXG5cdCAgLCBjb3JlICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgY3R4ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSlcblx0ICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG5cdHZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcblx0ICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuXHQgICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG5cdCAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcblx0ICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuXHQgICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG5cdCAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0Lldcblx0ICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcblx0ICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuXHQgICAgLCBrZXksIG93biwgb3V0O1xuXHQgIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuXHQgIGZvcihrZXkgaW4gc291cmNlKXtcblx0ICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuXHQgICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcblx0ICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcblx0ICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG5cdCAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuXHQgICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG5cdCAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuXHQgICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcblx0ICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG5cdCAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuXHQgICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcblx0ICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG5cdCAgICAgIH07XG5cdCAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcblx0ICAgICAgcmV0dXJuIEY7XG5cdCAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcblx0ICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcblx0ICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcblx0ICB9XG5cdH07XG5cdC8vIHR5cGUgYml0bWFwXG5cdCRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcblx0JGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuXHQkZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG5cdCRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuXHQkZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuXHQkZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxuXHRtb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuXHR2YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcblx0ICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdGlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0pLFxuLyogMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuXHRpZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSksXG4vKiAzMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xuXHR2YXIgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG5cdCAgYUZ1bmN0aW9uKGZuKTtcblx0ICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuXHQgIHN3aXRjaChsZW5ndGgpe1xuXHQgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG5cdCAgICB9O1xuXHQgIH1cblx0ICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG5cdCAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDMyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gISFleGVjKCk7XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fTtcblxuLyoqKi8gfSksXG4vKiAzNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvKiBnbG9iYWwgd2luZG93ICovXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuXHQgICAgICAkSGFuZGxlYmFycyA9IHJvb3QuSGFuZGxlYmFycztcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcblx0ICAgICAgcm9vdC5IYW5kbGViYXJzID0gJEhhbmRsZWJhcnM7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gSGFuZGxlYmFycztcblx0ICB9O1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0pLFxuLyogMzUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0dmFyIEFTVCA9IHtcblx0ICAvLyBQdWJsaWMgQVBJIHVzZWQgdG8gZXZhbHVhdGUgZGVyaXZlZCBhdHRyaWJ1dGVzIHJlZ2FyZGluZyBBU1Qgbm9kZXNcblx0ICBoZWxwZXJzOiB7XG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGRlZmluaXRlbHkgYSBoZWxwZXIgaWY6XG5cdCAgICAvLyAqIGl0IGlzIGFuIGVsaWdpYmxlIGhlbHBlciwgYW5kXG5cdCAgICAvLyAqIGl0IGhhcyBhdCBsZWFzdCBvbmUgcGFyYW1ldGVyIG9yIGhhc2ggc2VnbWVudFxuXHQgICAgaGVscGVyRXhwcmVzc2lvbjogZnVuY3Rpb24gaGVscGVyRXhwcmVzc2lvbihub2RlKSB7XG5cdCAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJyB8fCAobm9kZS50eXBlID09PSAnTXVzdGFjaGVTdGF0ZW1lbnQnIHx8IG5vZGUudHlwZSA9PT0gJ0Jsb2NrU3RhdGVtZW50JykgJiYgISEobm9kZS5wYXJhbXMgJiYgbm9kZS5wYXJhbXMubGVuZ3RoIHx8IG5vZGUuaGFzaCk7XG5cdCAgICB9LFxuXG5cdCAgICBzY29wZWRJZDogZnVuY3Rpb24gc2NvcGVkSWQocGF0aCkge1xuXHQgICAgICByZXR1cm4gKC9eXFwufHRoaXNcXGIvLnRlc3QocGF0aC5vcmlnaW5hbClcblx0ICAgICAgKTtcblx0ICAgIH0sXG5cblx0ICAgIC8vIGFuIElEIGlzIHNpbXBsZSBpZiBpdCBvbmx5IGhhcyBvbmUgcGFydCwgYW5kIHRoYXQgcGFydCBpcyBub3Rcblx0ICAgIC8vIGAuLmAgb3IgYHRoaXNgLlxuXHQgICAgc2ltcGxlSWQ6IGZ1bmN0aW9uIHNpbXBsZUlkKHBhdGgpIHtcblx0ICAgICAgcmV0dXJuIHBhdGgucGFydHMubGVuZ3RoID09PSAxICYmICFBU1QuaGVscGVycy5zY29wZWRJZChwYXRoKSAmJiAhcGF0aC5kZXB0aDtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0Ly8gTXVzdCBiZSBleHBvcnRlZCBhcyBhbiBvYmplY3QgcmF0aGVyIHRoYW4gdGhlIHJvb3Qgb2YgdGhlIG1vZHVsZSBhcyB0aGUgamlzb24gbGV4ZXJcblx0Ly8gbXVzdCBtb2RpZnkgdGhlIG9iamVjdCB0byBvcGVyYXRlIHByb3Blcmx5LlxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBU1Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDM2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cblx0dmFyIF9wYXJzZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblxuXHR2YXIgX3BhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZXIpO1xuXG5cdHZhciBfd2hpdGVzcGFjZUNvbnRyb2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcblxuXHR2YXIgX3doaXRlc3BhY2VDb250cm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3doaXRlc3BhY2VDb250cm9sKTtcblxuXHR2YXIgX2hlbHBlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcblxuXHR2YXIgSGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzLnBhcnNlciA9IF9wYXJzZXIyWydkZWZhdWx0J107XG5cblx0dmFyIHl5ID0ge307XG5cdF91dGlscy5leHRlbmQoeXksIEhlbHBlcnMpO1xuXG5cdGZ1bmN0aW9uIHBhcnNlKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgLy8gSnVzdCByZXR1cm4gaWYgYW4gYWxyZWFkeS1jb21waWxlZCBBU1Qgd2FzIHBhc3NlZCBpbi5cblx0ICBpZiAoaW5wdXQudHlwZSA9PT0gJ1Byb2dyYW0nKSB7XG5cdCAgICByZXR1cm4gaW5wdXQ7XG5cdCAgfVxuXG5cdCAgX3BhcnNlcjJbJ2RlZmF1bHQnXS55eSA9IHl5O1xuXG5cdCAgLy8gQWx0ZXJpbmcgdGhlIHNoYXJlZCBvYmplY3QgaGVyZSwgYnV0IHRoaXMgaXMgb2sgYXMgcGFyc2VyIGlzIGEgc3luYyBvcGVyYXRpb25cblx0ICB5eS5sb2NJbmZvID0gZnVuY3Rpb24gKGxvY0luZm8pIHtcblx0ICAgIHJldHVybiBuZXcgeXkuU291cmNlTG9jYXRpb24ob3B0aW9ucyAmJiBvcHRpb25zLnNyY05hbWUsIGxvY0luZm8pO1xuXHQgIH07XG5cblx0ICB2YXIgc3RyaXAgPSBuZXcgX3doaXRlc3BhY2VDb250cm9sMlsnZGVmYXVsdCddKG9wdGlvbnMpO1xuXHQgIHJldHVybiBzdHJpcC5hY2NlcHQoX3BhcnNlcjJbJ2RlZmF1bHQnXS5wYXJzZShpbnB1dCkpO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMzcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBGaWxlIGlnbm9yZWQgaW4gY292ZXJhZ2UgdGVzdHMgdmlhIHNldHRpbmcgaW4gLmlzdGFuYnVsLnltbFxuXHQvKiBKaXNvbiBnZW5lcmF0ZWQgcGFyc2VyICovXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdHZhciBoYW5kbGViYXJzID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBwYXJzZXIgPSB7IHRyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHt9LFxuXHQgICAgICAgIHl5OiB7fSxcblx0ICAgICAgICBzeW1ib2xzXzogeyBcImVycm9yXCI6IDIsIFwicm9vdFwiOiAzLCBcInByb2dyYW1cIjogNCwgXCJFT0ZcIjogNSwgXCJwcm9ncmFtX3JlcGV0aXRpb24wXCI6IDYsIFwic3RhdGVtZW50XCI6IDcsIFwibXVzdGFjaGVcIjogOCwgXCJibG9ja1wiOiA5LCBcInJhd0Jsb2NrXCI6IDEwLCBcInBhcnRpYWxcIjogMTEsIFwicGFydGlhbEJsb2NrXCI6IDEyLCBcImNvbnRlbnRcIjogMTMsIFwiQ09NTUVOVFwiOiAxNCwgXCJDT05URU5UXCI6IDE1LCBcIm9wZW5SYXdCbG9ja1wiOiAxNiwgXCJyYXdCbG9ja19yZXBldGl0aW9uX3BsdXMwXCI6IDE3LCBcIkVORF9SQVdfQkxPQ0tcIjogMTgsIFwiT1BFTl9SQVdfQkxPQ0tcIjogMTksIFwiaGVscGVyTmFtZVwiOiAyMCwgXCJvcGVuUmF3QmxvY2tfcmVwZXRpdGlvbjBcIjogMjEsIFwib3BlblJhd0Jsb2NrX29wdGlvbjBcIjogMjIsIFwiQ0xPU0VfUkFXX0JMT0NLXCI6IDIzLCBcIm9wZW5CbG9ja1wiOiAyNCwgXCJibG9ja19vcHRpb24wXCI6IDI1LCBcImNsb3NlQmxvY2tcIjogMjYsIFwib3BlbkludmVyc2VcIjogMjcsIFwiYmxvY2tfb3B0aW9uMVwiOiAyOCwgXCJPUEVOX0JMT0NLXCI6IDI5LCBcIm9wZW5CbG9ja19yZXBldGl0aW9uMFwiOiAzMCwgXCJvcGVuQmxvY2tfb3B0aW9uMFwiOiAzMSwgXCJvcGVuQmxvY2tfb3B0aW9uMVwiOiAzMiwgXCJDTE9TRVwiOiAzMywgXCJPUEVOX0lOVkVSU0VcIjogMzQsIFwib3BlbkludmVyc2VfcmVwZXRpdGlvbjBcIjogMzUsIFwib3BlbkludmVyc2Vfb3B0aW9uMFwiOiAzNiwgXCJvcGVuSW52ZXJzZV9vcHRpb24xXCI6IDM3LCBcIm9wZW5JbnZlcnNlQ2hhaW5cIjogMzgsIFwiT1BFTl9JTlZFUlNFX0NIQUlOXCI6IDM5LCBcIm9wZW5JbnZlcnNlQ2hhaW5fcmVwZXRpdGlvbjBcIjogNDAsIFwib3BlbkludmVyc2VDaGFpbl9vcHRpb24wXCI6IDQxLCBcIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMVwiOiA0MiwgXCJpbnZlcnNlQW5kUHJvZ3JhbVwiOiA0MywgXCJJTlZFUlNFXCI6IDQ0LCBcImludmVyc2VDaGFpblwiOiA0NSwgXCJpbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOiA0NiwgXCJPUEVOX0VOREJMT0NLXCI6IDQ3LCBcIk9QRU5cIjogNDgsIFwibXVzdGFjaGVfcmVwZXRpdGlvbjBcIjogNDksIFwibXVzdGFjaGVfb3B0aW9uMFwiOiA1MCwgXCJPUEVOX1VORVNDQVBFRFwiOiA1MSwgXCJtdXN0YWNoZV9yZXBldGl0aW9uMVwiOiA1MiwgXCJtdXN0YWNoZV9vcHRpb24xXCI6IDUzLCBcIkNMT1NFX1VORVNDQVBFRFwiOiA1NCwgXCJPUEVOX1BBUlRJQUxcIjogNTUsIFwicGFydGlhbE5hbWVcIjogNTYsIFwicGFydGlhbF9yZXBldGl0aW9uMFwiOiA1NywgXCJwYXJ0aWFsX29wdGlvbjBcIjogNTgsIFwib3BlblBhcnRpYWxCbG9ja1wiOiA1OSwgXCJPUEVOX1BBUlRJQUxfQkxPQ0tcIjogNjAsIFwib3BlblBhcnRpYWxCbG9ja19yZXBldGl0aW9uMFwiOiA2MSwgXCJvcGVuUGFydGlhbEJsb2NrX29wdGlvbjBcIjogNjIsIFwicGFyYW1cIjogNjMsIFwic2V4cHJcIjogNjQsIFwiT1BFTl9TRVhQUlwiOiA2NSwgXCJzZXhwcl9yZXBldGl0aW9uMFwiOiA2NiwgXCJzZXhwcl9vcHRpb24wXCI6IDY3LCBcIkNMT1NFX1NFWFBSXCI6IDY4LCBcImhhc2hcIjogNjksIFwiaGFzaF9yZXBldGl0aW9uX3BsdXMwXCI6IDcwLCBcImhhc2hTZWdtZW50XCI6IDcxLCBcIklEXCI6IDcyLCBcIkVRVUFMU1wiOiA3MywgXCJibG9ja1BhcmFtc1wiOiA3NCwgXCJPUEVOX0JMT0NLX1BBUkFNU1wiOiA3NSwgXCJibG9ja1BhcmFtc19yZXBldGl0aW9uX3BsdXMwXCI6IDc2LCBcIkNMT1NFX0JMT0NLX1BBUkFNU1wiOiA3NywgXCJwYXRoXCI6IDc4LCBcImRhdGFOYW1lXCI6IDc5LCBcIlNUUklOR1wiOiA4MCwgXCJOVU1CRVJcIjogODEsIFwiQk9PTEVBTlwiOiA4MiwgXCJVTkRFRklORURcIjogODMsIFwiTlVMTFwiOiA4NCwgXCJEQVRBXCI6IDg1LCBcInBhdGhTZWdtZW50c1wiOiA4NiwgXCJTRVBcIjogODcsIFwiJGFjY2VwdFwiOiAwLCBcIiRlbmRcIjogMSB9LFxuXHQgICAgICAgIHRlcm1pbmFsc186IHsgMjogXCJlcnJvclwiLCA1OiBcIkVPRlwiLCAxNDogXCJDT01NRU5UXCIsIDE1OiBcIkNPTlRFTlRcIiwgMTg6IFwiRU5EX1JBV19CTE9DS1wiLCAxOTogXCJPUEVOX1JBV19CTE9DS1wiLCAyMzogXCJDTE9TRV9SQVdfQkxPQ0tcIiwgMjk6IFwiT1BFTl9CTE9DS1wiLCAzMzogXCJDTE9TRVwiLCAzNDogXCJPUEVOX0lOVkVSU0VcIiwgMzk6IFwiT1BFTl9JTlZFUlNFX0NIQUlOXCIsIDQ0OiBcIklOVkVSU0VcIiwgNDc6IFwiT1BFTl9FTkRCTE9DS1wiLCA0ODogXCJPUEVOXCIsIDUxOiBcIk9QRU5fVU5FU0NBUEVEXCIsIDU0OiBcIkNMT1NFX1VORVNDQVBFRFwiLCA1NTogXCJPUEVOX1BBUlRJQUxcIiwgNjA6IFwiT1BFTl9QQVJUSUFMX0JMT0NLXCIsIDY1OiBcIk9QRU5fU0VYUFJcIiwgNjg6IFwiQ0xPU0VfU0VYUFJcIiwgNzI6IFwiSURcIiwgNzM6IFwiRVFVQUxTXCIsIDc1OiBcIk9QRU5fQkxPQ0tfUEFSQU1TXCIsIDc3OiBcIkNMT1NFX0JMT0NLX1BBUkFNU1wiLCA4MDogXCJTVFJJTkdcIiwgODE6IFwiTlVNQkVSXCIsIDgyOiBcIkJPT0xFQU5cIiwgODM6IFwiVU5ERUZJTkVEXCIsIDg0OiBcIk5VTExcIiwgODU6IFwiREFUQVwiLCA4NzogXCJTRVBcIiB9LFxuXHQgICAgICAgIHByb2R1Y3Rpb25zXzogWzAsIFszLCAyXSwgWzQsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFsxMywgMV0sIFsxMCwgM10sIFsxNiwgNV0sIFs5LCA0XSwgWzksIDRdLCBbMjQsIDZdLCBbMjcsIDZdLCBbMzgsIDZdLCBbNDMsIDJdLCBbNDUsIDNdLCBbNDUsIDFdLCBbMjYsIDNdLCBbOCwgNV0sIFs4LCA1XSwgWzExLCA1XSwgWzEyLCAzXSwgWzU5LCA1XSwgWzYzLCAxXSwgWzYzLCAxXSwgWzY0LCA1XSwgWzY5LCAxXSwgWzcxLCAzXSwgWzc0LCAzXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzIwLCAxXSwgWzU2LCAxXSwgWzU2LCAxXSwgWzc5LCAyXSwgWzc4LCAxXSwgWzg2LCAzXSwgWzg2LCAxXSwgWzYsIDBdLCBbNiwgMl0sIFsxNywgMV0sIFsxNywgMl0sIFsyMSwgMF0sIFsyMSwgMl0sIFsyMiwgMF0sIFsyMiwgMV0sIFsyNSwgMF0sIFsyNSwgMV0sIFsyOCwgMF0sIFsyOCwgMV0sIFszMCwgMF0sIFszMCwgMl0sIFszMSwgMF0sIFszMSwgMV0sIFszMiwgMF0sIFszMiwgMV0sIFszNSwgMF0sIFszNSwgMl0sIFszNiwgMF0sIFszNiwgMV0sIFszNywgMF0sIFszNywgMV0sIFs0MCwgMF0sIFs0MCwgMl0sIFs0MSwgMF0sIFs0MSwgMV0sIFs0MiwgMF0sIFs0MiwgMV0sIFs0NiwgMF0sIFs0NiwgMV0sIFs0OSwgMF0sIFs0OSwgMl0sIFs1MCwgMF0sIFs1MCwgMV0sIFs1MiwgMF0sIFs1MiwgMl0sIFs1MywgMF0sIFs1MywgMV0sIFs1NywgMF0sIFs1NywgMl0sIFs1OCwgMF0sIFs1OCwgMV0sIFs2MSwgMF0sIFs2MSwgMl0sIFs2MiwgMF0sIFs2MiwgMV0sIFs2NiwgMF0sIFs2NiwgMl0sIFs2NywgMF0sIFs2NywgMV0sIFs3MCwgMV0sIFs3MCwgMl0sIFs3NiwgMV0sIFs3NiwgMl1dLFxuXHQgICAgICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIGFub255bW91cyh5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHl5LCB5eXN0YXRlLCAkJCwgXyQpIHtcblxuXHQgICAgICAgICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCRbJDAgLSAxXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUHJvZ3JhbSgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NvbW1lbnRTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeXkuc3RyaXBDb21tZW50KCQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwXSwgJCRbJDBdKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb250ZW50U3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUmF3QmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDNdLCBwYXJhbXM6ICQkWyQwIC0gMl0sIGhhc2g6ICQkWyQwIC0gMV0gfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0cnVlLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBvcGVuOiAkJFskMCAtIDVdLCBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDFdLCAkJFskMCAtIDFdKSwgcHJvZ3JhbTogJCRbJDBdIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE5OlxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgJCRbJDBdLCBmYWxzZSwgdGhpcy5fJCksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0gPSB5eS5wcmVwYXJlUHJvZ3JhbShbaW52ZXJzZV0sICQkWyQwIC0gMV0ubG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLmNoYWluZWQgPSB0cnVlO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogJCRbJDAgLSAyXS5zdHJpcCwgcHJvZ3JhbTogcHJvZ3JhbSwgY2hhaW46IHRydWUgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAyXSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlTXVzdGFjaGUoJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDAgLSA0XSwgeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BhcnRpYWxTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAkJFskMCAtIDNdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6ICQkWyQwIC0gMV0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudDogJycsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhcnRpYWxCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gM10sIHBhcmFtczogJCRbJDAgLSAyXSwgaGFzaDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU3ViRXhwcmVzc2lvbicsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICQkWyQwIC0gM10sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogJCRbJDAgLSAyXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogJCRbJDAgLSAxXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdIYXNoJywgcGFpcnM6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0hhc2hQYWlyJywga2V5OiB5eS5pZCgkJFskMCAtIDJdKSwgdmFsdWU6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LmlkKCQkWyQwIC0gMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnU3RyaW5nTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0sIG9yaWdpbmFsOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdW1iZXJMaXRlcmFsJywgdmFsdWU6IE51bWJlcigkJFskMF0pLCBvcmlnaW5hbDogTnVtYmVyKCQkWyQwXSksIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdCb29sZWFuTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0gPT09ICd0cnVlJywgb3JpZ2luYWw6ICQkWyQwXSA9PT0gJ3RydWUnLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnVW5kZWZpbmVkTGl0ZXJhbCcsIG9yaWdpbmFsOiB1bmRlZmluZWQsIHZhbHVlOiB1bmRlZmluZWQsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdWxsTGl0ZXJhbCcsIG9yaWdpbmFsOiBudWxsLCB2YWx1ZTogbnVsbCwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aCh0cnVlLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aChmYWxzZSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAyXS5wdXNoKHsgcGFydDogeXkuaWQoJCRbJDBdKSwgb3JpZ2luYWw6ICQkWyQwXSwgc2VwYXJhdG9yOiAkJFskMCAtIDFdIH0pO3RoaXMuJCA9ICQkWyQwIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFt7IHBhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0gfV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Nzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDgzOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Njpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODc6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDkwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5MTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTAxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICB0YWJsZTogW3sgMzogMSwgNDogMiwgNTogWzIsIDQ2XSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDE6IFszXSB9LCB7IDU6IFsxLCA0XSB9LCB7IDU6IFsyLCAyXSwgNzogNSwgODogNiwgOTogNywgMTA6IDgsIDExOiA5LCAxMjogMTAsIDEzOiAxMSwgMTQ6IFsxLCAxMl0sIDE1OiBbMSwgMjBdLCAxNjogMTcsIDE5OiBbMSwgMjNdLCAyNDogMTUsIDI3OiAxNiwgMjk6IFsxLCAyMV0sIDM0OiBbMSwgMjJdLCAzOTogWzIsIDJdLCA0NDogWzIsIDJdLCA0NzogWzIsIDJdLCA0ODogWzEsIDEzXSwgNTE6IFsxLCAxNF0sIDU1OiBbMSwgMThdLCA1OTogMTksIDYwOiBbMSwgMjRdIH0sIHsgMTogWzIsIDFdIH0sIHsgNTogWzIsIDQ3XSwgMTQ6IFsyLCA0N10sIDE1OiBbMiwgNDddLCAxOTogWzIsIDQ3XSwgMjk6IFsyLCA0N10sIDM0OiBbMiwgNDddLCAzOTogWzIsIDQ3XSwgNDQ6IFsyLCA0N10sIDQ3OiBbMiwgNDddLCA0ODogWzIsIDQ3XSwgNTE6IFsyLCA0N10sIDU1OiBbMiwgNDddLCA2MDogWzIsIDQ3XSB9LCB7IDU6IFsyLCAzXSwgMTQ6IFsyLCAzXSwgMTU6IFsyLCAzXSwgMTk6IFsyLCAzXSwgMjk6IFsyLCAzXSwgMzQ6IFsyLCAzXSwgMzk6IFsyLCAzXSwgNDQ6IFsyLCAzXSwgNDc6IFsyLCAzXSwgNDg6IFsyLCAzXSwgNTE6IFsyLCAzXSwgNTU6IFsyLCAzXSwgNjA6IFsyLCAzXSB9LCB7IDU6IFsyLCA0XSwgMTQ6IFsyLCA0XSwgMTU6IFsyLCA0XSwgMTk6IFsyLCA0XSwgMjk6IFsyLCA0XSwgMzQ6IFsyLCA0XSwgMzk6IFsyLCA0XSwgNDQ6IFsyLCA0XSwgNDc6IFsyLCA0XSwgNDg6IFsyLCA0XSwgNTE6IFsyLCA0XSwgNTU6IFsyLCA0XSwgNjA6IFsyLCA0XSB9LCB7IDU6IFsyLCA1XSwgMTQ6IFsyLCA1XSwgMTU6IFsyLCA1XSwgMTk6IFsyLCA1XSwgMjk6IFsyLCA1XSwgMzQ6IFsyLCA1XSwgMzk6IFsyLCA1XSwgNDQ6IFsyLCA1XSwgNDc6IFsyLCA1XSwgNDg6IFsyLCA1XSwgNTE6IFsyLCA1XSwgNTU6IFsyLCA1XSwgNjA6IFsyLCA1XSB9LCB7IDU6IFsyLCA2XSwgMTQ6IFsyLCA2XSwgMTU6IFsyLCA2XSwgMTk6IFsyLCA2XSwgMjk6IFsyLCA2XSwgMzQ6IFsyLCA2XSwgMzk6IFsyLCA2XSwgNDQ6IFsyLCA2XSwgNDc6IFsyLCA2XSwgNDg6IFsyLCA2XSwgNTE6IFsyLCA2XSwgNTU6IFsyLCA2XSwgNjA6IFsyLCA2XSB9LCB7IDU6IFsyLCA3XSwgMTQ6IFsyLCA3XSwgMTU6IFsyLCA3XSwgMTk6IFsyLCA3XSwgMjk6IFsyLCA3XSwgMzQ6IFsyLCA3XSwgMzk6IFsyLCA3XSwgNDQ6IFsyLCA3XSwgNDc6IFsyLCA3XSwgNDg6IFsyLCA3XSwgNTE6IFsyLCA3XSwgNTU6IFsyLCA3XSwgNjA6IFsyLCA3XSB9LCB7IDU6IFsyLCA4XSwgMTQ6IFsyLCA4XSwgMTU6IFsyLCA4XSwgMTk6IFsyLCA4XSwgMjk6IFsyLCA4XSwgMzQ6IFsyLCA4XSwgMzk6IFsyLCA4XSwgNDQ6IFsyLCA4XSwgNDc6IFsyLCA4XSwgNDg6IFsyLCA4XSwgNTE6IFsyLCA4XSwgNTU6IFsyLCA4XSwgNjA6IFsyLCA4XSB9LCB7IDU6IFsyLCA5XSwgMTQ6IFsyLCA5XSwgMTU6IFsyLCA5XSwgMTk6IFsyLCA5XSwgMjk6IFsyLCA5XSwgMzQ6IFsyLCA5XSwgMzk6IFsyLCA5XSwgNDQ6IFsyLCA5XSwgNDc6IFsyLCA5XSwgNDg6IFsyLCA5XSwgNTE6IFsyLCA5XSwgNTU6IFsyLCA5XSwgNjA6IFsyLCA5XSB9LCB7IDIwOiAyNSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogMzYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogMzcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgMzk6IFsyLCA0Nl0sIDQ0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyA0OiAzOCwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMTM6IDQwLCAxNTogWzEsIDIwXSwgMTc6IDM5IH0sIHsgMjA6IDQyLCA1NjogNDEsIDY0OiA0MywgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogNDUsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNTogWzIsIDEwXSwgMTQ6IFsyLCAxMF0sIDE1OiBbMiwgMTBdLCAxODogWzIsIDEwXSwgMTk6IFsyLCAxMF0sIDI5OiBbMiwgMTBdLCAzNDogWzIsIDEwXSwgMzk6IFsyLCAxMF0sIDQ0OiBbMiwgMTBdLCA0NzogWzIsIDEwXSwgNDg6IFsyLCAxMF0sIDUxOiBbMiwgMTBdLCA1NTogWzIsIDEwXSwgNjA6IFsyLCAxMF0gfSwgeyAyMDogNDYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQ3LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0OCwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDIsIDU2OiA0OSwgNjQ6IDQzLCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzIsIDc4XSwgNDk6IDUwLCA2NTogWzIsIDc4XSwgNzI6IFsyLCA3OF0sIDgwOiBbMiwgNzhdLCA4MTogWzIsIDc4XSwgODI6IFsyLCA3OF0sIDgzOiBbMiwgNzhdLCA4NDogWzIsIDc4XSwgODU6IFsyLCA3OF0gfSwgeyAyMzogWzIsIDMzXSwgMzM6IFsyLCAzM10sIDU0OiBbMiwgMzNdLCA2NTogWzIsIDMzXSwgNjg6IFsyLCAzM10sIDcyOiBbMiwgMzNdLCA3NTogWzIsIDMzXSwgODA6IFsyLCAzM10sIDgxOiBbMiwgMzNdLCA4MjogWzIsIDMzXSwgODM6IFsyLCAzM10sIDg0OiBbMiwgMzNdLCA4NTogWzIsIDMzXSB9LCB7IDIzOiBbMiwgMzRdLCAzMzogWzIsIDM0XSwgNTQ6IFsyLCAzNF0sIDY1OiBbMiwgMzRdLCA2ODogWzIsIDM0XSwgNzI6IFsyLCAzNF0sIDc1OiBbMiwgMzRdLCA4MDogWzIsIDM0XSwgODE6IFsyLCAzNF0sIDgyOiBbMiwgMzRdLCA4MzogWzIsIDM0XSwgODQ6IFsyLCAzNF0sIDg1OiBbMiwgMzRdIH0sIHsgMjM6IFsyLCAzNV0sIDMzOiBbMiwgMzVdLCA1NDogWzIsIDM1XSwgNjU6IFsyLCAzNV0sIDY4OiBbMiwgMzVdLCA3MjogWzIsIDM1XSwgNzU6IFsyLCAzNV0sIDgwOiBbMiwgMzVdLCA4MTogWzIsIDM1XSwgODI6IFsyLCAzNV0sIDgzOiBbMiwgMzVdLCA4NDogWzIsIDM1XSwgODU6IFsyLCAzNV0gfSwgeyAyMzogWzIsIDM2XSwgMzM6IFsyLCAzNl0sIDU0OiBbMiwgMzZdLCA2NTogWzIsIDM2XSwgNjg6IFsyLCAzNl0sIDcyOiBbMiwgMzZdLCA3NTogWzIsIDM2XSwgODA6IFsyLCAzNl0sIDgxOiBbMiwgMzZdLCA4MjogWzIsIDM2XSwgODM6IFsyLCAzNl0sIDg0OiBbMiwgMzZdLCA4NTogWzIsIDM2XSB9LCB7IDIzOiBbMiwgMzddLCAzMzogWzIsIDM3XSwgNTQ6IFsyLCAzN10sIDY1OiBbMiwgMzddLCA2ODogWzIsIDM3XSwgNzI6IFsyLCAzN10sIDc1OiBbMiwgMzddLCA4MDogWzIsIDM3XSwgODE6IFsyLCAzN10sIDgyOiBbMiwgMzddLCA4MzogWzIsIDM3XSwgODQ6IFsyLCAzN10sIDg1OiBbMiwgMzddIH0sIHsgMjM6IFsyLCAzOF0sIDMzOiBbMiwgMzhdLCA1NDogWzIsIDM4XSwgNjU6IFsyLCAzOF0sIDY4OiBbMiwgMzhdLCA3MjogWzIsIDM4XSwgNzU6IFsyLCAzOF0sIDgwOiBbMiwgMzhdLCA4MTogWzIsIDM4XSwgODI6IFsyLCAzOF0sIDgzOiBbMiwgMzhdLCA4NDogWzIsIDM4XSwgODU6IFsyLCAzOF0gfSwgeyAyMzogWzIsIDM5XSwgMzM6IFsyLCAzOV0sIDU0OiBbMiwgMzldLCA2NTogWzIsIDM5XSwgNjg6IFsyLCAzOV0sIDcyOiBbMiwgMzldLCA3NTogWzIsIDM5XSwgODA6IFsyLCAzOV0sIDgxOiBbMiwgMzldLCA4MjogWzIsIDM5XSwgODM6IFsyLCAzOV0sIDg0OiBbMiwgMzldLCA4NTogWzIsIDM5XSB9LCB7IDIzOiBbMiwgNDNdLCAzMzogWzIsIDQzXSwgNTQ6IFsyLCA0M10sIDY1OiBbMiwgNDNdLCA2ODogWzIsIDQzXSwgNzI6IFsyLCA0M10sIDc1OiBbMiwgNDNdLCA4MDogWzIsIDQzXSwgODE6IFsyLCA0M10sIDgyOiBbMiwgNDNdLCA4MzogWzIsIDQzXSwgODQ6IFsyLCA0M10sIDg1OiBbMiwgNDNdLCA4NzogWzEsIDUxXSB9LCB7IDcyOiBbMSwgMzVdLCA4NjogNTIgfSwgeyAyMzogWzIsIDQ1XSwgMzM6IFsyLCA0NV0sIDU0OiBbMiwgNDVdLCA2NTogWzIsIDQ1XSwgNjg6IFsyLCA0NV0sIDcyOiBbMiwgNDVdLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyA1MjogNTMsIDU0OiBbMiwgODJdLCA2NTogWzIsIDgyXSwgNzI6IFsyLCA4Ml0sIDgwOiBbMiwgODJdLCA4MTogWzIsIDgyXSwgODI6IFsyLCA4Ml0sIDgzOiBbMiwgODJdLCA4NDogWzIsIDgyXSwgODU6IFsyLCA4Ml0gfSwgeyAyNTogNTQsIDM4OiA1NiwgMzk6IFsxLCA1OF0sIDQzOiA1NywgNDQ6IFsxLCA1OV0sIDQ1OiA1NSwgNDc6IFsyLCA1NF0gfSwgeyAyODogNjAsIDQzOiA2MSwgNDQ6IFsxLCA1OV0sIDQ3OiBbMiwgNTZdIH0sIHsgMTM6IDYzLCAxNTogWzEsIDIwXSwgMTg6IFsxLCA2Ml0gfSwgeyAxNTogWzIsIDQ4XSwgMTg6IFsyLCA0OF0gfSwgeyAzMzogWzIsIDg2XSwgNTc6IDY0LCA2NTogWzIsIDg2XSwgNzI6IFsyLCA4Nl0sIDgwOiBbMiwgODZdLCA4MTogWzIsIDg2XSwgODI6IFsyLCA4Nl0sIDgzOiBbMiwgODZdLCA4NDogWzIsIDg2XSwgODU6IFsyLCA4Nl0gfSwgeyAzMzogWzIsIDQwXSwgNjU6IFsyLCA0MF0sIDcyOiBbMiwgNDBdLCA4MDogWzIsIDQwXSwgODE6IFsyLCA0MF0sIDgyOiBbMiwgNDBdLCA4MzogWzIsIDQwXSwgODQ6IFsyLCA0MF0sIDg1OiBbMiwgNDBdIH0sIHsgMzM6IFsyLCA0MV0sIDY1OiBbMiwgNDFdLCA3MjogWzIsIDQxXSwgODA6IFsyLCA0MV0sIDgxOiBbMiwgNDFdLCA4MjogWzIsIDQxXSwgODM6IFsyLCA0MV0sIDg0OiBbMiwgNDFdLCA4NTogWzIsIDQxXSB9LCB7IDIwOiA2NSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogNjYsIDQ3OiBbMSwgNjddIH0sIHsgMzA6IDY4LCAzMzogWzIsIDU4XSwgNjU6IFsyLCA1OF0sIDcyOiBbMiwgNThdLCA3NTogWzIsIDU4XSwgODA6IFsyLCA1OF0sIDgxOiBbMiwgNThdLCA4MjogWzIsIDU4XSwgODM6IFsyLCA1OF0sIDg0OiBbMiwgNThdLCA4NTogWzIsIDU4XSB9LCB7IDMzOiBbMiwgNjRdLCAzNTogNjksIDY1OiBbMiwgNjRdLCA3MjogWzIsIDY0XSwgNzU6IFsyLCA2NF0sIDgwOiBbMiwgNjRdLCA4MTogWzIsIDY0XSwgODI6IFsyLCA2NF0sIDgzOiBbMiwgNjRdLCA4NDogWzIsIDY0XSwgODU6IFsyLCA2NF0gfSwgeyAyMTogNzAsIDIzOiBbMiwgNTBdLCA2NTogWzIsIDUwXSwgNzI6IFsyLCA1MF0sIDgwOiBbMiwgNTBdLCA4MTogWzIsIDUwXSwgODI6IFsyLCA1MF0sIDgzOiBbMiwgNTBdLCA4NDogWzIsIDUwXSwgODU6IFsyLCA1MF0gfSwgeyAzMzogWzIsIDkwXSwgNjE6IDcxLCA2NTogWzIsIDkwXSwgNzI6IFsyLCA5MF0sIDgwOiBbMiwgOTBdLCA4MTogWzIsIDkwXSwgODI6IFsyLCA5MF0sIDgzOiBbMiwgOTBdLCA4NDogWzIsIDkwXSwgODU6IFsyLCA5MF0gfSwgeyAyMDogNzUsIDMzOiBbMiwgODBdLCA1MDogNzIsIDYzOiA3MywgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDc0LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA3MjogWzEsIDgwXSB9LCB7IDIzOiBbMiwgNDJdLCAzMzogWzIsIDQyXSwgNTQ6IFsyLCA0Ml0sIDY1OiBbMiwgNDJdLCA2ODogWzIsIDQyXSwgNzI6IFsyLCA0Ml0sIDc1OiBbMiwgNDJdLCA4MDogWzIsIDQyXSwgODE6IFsyLCA0Ml0sIDgyOiBbMiwgNDJdLCA4MzogWzIsIDQyXSwgODQ6IFsyLCA0Ml0sIDg1OiBbMiwgNDJdLCA4NzogWzEsIDUxXSB9LCB7IDIwOiA3NSwgNTM6IDgxLCA1NDogWzIsIDg0XSwgNjM6IDgyLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogODMsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDI2OiA4NCwgNDc6IFsxLCA2N10gfSwgeyA0NzogWzIsIDU1XSB9LCB7IDQ6IDg1LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDc6IFsyLCAyMF0gfSwgeyAyMDogODYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogODcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMjY6IDg4LCA0NzogWzEsIDY3XSB9LCB7IDQ3OiBbMiwgNTddIH0sIHsgNTogWzIsIDExXSwgMTQ6IFsyLCAxMV0sIDE1OiBbMiwgMTFdLCAxOTogWzIsIDExXSwgMjk6IFsyLCAxMV0sIDM0OiBbMiwgMTFdLCAzOTogWzIsIDExXSwgNDQ6IFsyLCAxMV0sIDQ3OiBbMiwgMTFdLCA0ODogWzIsIDExXSwgNTE6IFsyLCAxMV0sIDU1OiBbMiwgMTFdLCA2MDogWzIsIDExXSB9LCB7IDE1OiBbMiwgNDldLCAxODogWzIsIDQ5XSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA4OF0sIDU4OiA4OSwgNjM6IDkwLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTEsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDY1OiBbMiwgOTRdLCA2NjogOTIsIDY4OiBbMiwgOTRdLCA3MjogWzIsIDk0XSwgODA6IFsyLCA5NF0sIDgxOiBbMiwgOTRdLCA4MjogWzIsIDk0XSwgODM6IFsyLCA5NF0sIDg0OiBbMiwgOTRdLCA4NTogWzIsIDk0XSB9LCB7IDU6IFsyLCAyNV0sIDE0OiBbMiwgMjVdLCAxNTogWzIsIDI1XSwgMTk6IFsyLCAyNV0sIDI5OiBbMiwgMjVdLCAzNDogWzIsIDI1XSwgMzk6IFsyLCAyNV0sIDQ0OiBbMiwgMjVdLCA0NzogWzIsIDI1XSwgNDg6IFsyLCAyNV0sIDUxOiBbMiwgMjVdLCA1NTogWzIsIDI1XSwgNjA6IFsyLCAyNV0gfSwgeyAyMDogOTMsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMTogOTQsIDMzOiBbMiwgNjBdLCA2MzogOTUsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA5NiwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDYwXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzM6IFsyLCA2Nl0sIDM2OiA5NywgNjM6IDk4LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTksIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA2Nl0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDIyOiAxMDAsIDIzOiBbMiwgNTJdLCA2MzogMTAxLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTAyLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMzOiBbMiwgOTJdLCA2MjogMTAzLCA2MzogMTA0LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTA1LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzEsIDEwNl0gfSwgeyAzMzogWzIsIDc5XSwgNjU6IFsyLCA3OV0sIDcyOiBbMiwgNzldLCA4MDogWzIsIDc5XSwgODE6IFsyLCA3OV0sIDgyOiBbMiwgNzldLCA4MzogWzIsIDc5XSwgODQ6IFsyLCA3OV0sIDg1OiBbMiwgNzldIH0sIHsgMzM6IFsyLCA4MV0gfSwgeyAyMzogWzIsIDI3XSwgMzM6IFsyLCAyN10sIDU0OiBbMiwgMjddLCA2NTogWzIsIDI3XSwgNjg6IFsyLCAyN10sIDcyOiBbMiwgMjddLCA3NTogWzIsIDI3XSwgODA6IFsyLCAyN10sIDgxOiBbMiwgMjddLCA4MjogWzIsIDI3XSwgODM6IFsyLCAyN10sIDg0OiBbMiwgMjddLCA4NTogWzIsIDI3XSB9LCB7IDIzOiBbMiwgMjhdLCAzMzogWzIsIDI4XSwgNTQ6IFsyLCAyOF0sIDY1OiBbMiwgMjhdLCA2ODogWzIsIDI4XSwgNzI6IFsyLCAyOF0sIDc1OiBbMiwgMjhdLCA4MDogWzIsIDI4XSwgODE6IFsyLCAyOF0sIDgyOiBbMiwgMjhdLCA4MzogWzIsIDI4XSwgODQ6IFsyLCAyOF0sIDg1OiBbMiwgMjhdIH0sIHsgMjM6IFsyLCAzMF0sIDMzOiBbMiwgMzBdLCA1NDogWzIsIDMwXSwgNjg6IFsyLCAzMF0sIDcxOiAxMDcsIDcyOiBbMSwgMTA4XSwgNzU6IFsyLCAzMF0gfSwgeyAyMzogWzIsIDk4XSwgMzM6IFsyLCA5OF0sIDU0OiBbMiwgOThdLCA2ODogWzIsIDk4XSwgNzI6IFsyLCA5OF0sIDc1OiBbMiwgOThdIH0sIHsgMjM6IFsyLCA0NV0sIDMzOiBbMiwgNDVdLCA1NDogWzIsIDQ1XSwgNjU6IFsyLCA0NV0sIDY4OiBbMiwgNDVdLCA3MjogWzIsIDQ1XSwgNzM6IFsxLCAxMDldLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyAyMzogWzIsIDQ0XSwgMzM6IFsyLCA0NF0sIDU0OiBbMiwgNDRdLCA2NTogWzIsIDQ0XSwgNjg6IFsyLCA0NF0sIDcyOiBbMiwgNDRdLCA3NTogWzIsIDQ0XSwgODA6IFsyLCA0NF0sIDgxOiBbMiwgNDRdLCA4MjogWzIsIDQ0XSwgODM6IFsyLCA0NF0sIDg0OiBbMiwgNDRdLCA4NTogWzIsIDQ0XSwgODc6IFsyLCA0NF0gfSwgeyA1NDogWzEsIDExMF0gfSwgeyA1NDogWzIsIDgzXSwgNjU6IFsyLCA4M10sIDcyOiBbMiwgODNdLCA4MDogWzIsIDgzXSwgODE6IFsyLCA4M10sIDgyOiBbMiwgODNdLCA4MzogWzIsIDgzXSwgODQ6IFsyLCA4M10sIDg1OiBbMiwgODNdIH0sIHsgNTQ6IFsyLCA4NV0gfSwgeyA1OiBbMiwgMTNdLCAxNDogWzIsIDEzXSwgMTU6IFsyLCAxM10sIDE5OiBbMiwgMTNdLCAyOTogWzIsIDEzXSwgMzQ6IFsyLCAxM10sIDM5OiBbMiwgMTNdLCA0NDogWzIsIDEzXSwgNDc6IFsyLCAxM10sIDQ4OiBbMiwgMTNdLCA1MTogWzIsIDEzXSwgNTU6IFsyLCAxM10sIDYwOiBbMiwgMTNdIH0sIHsgMzg6IDU2LCAzOTogWzEsIDU4XSwgNDM6IDU3LCA0NDogWzEsIDU5XSwgNDU6IDExMiwgNDY6IDExMSwgNDc6IFsyLCA3Nl0gfSwgeyAzMzogWzIsIDcwXSwgNDA6IDExMywgNjU6IFsyLCA3MF0sIDcyOiBbMiwgNzBdLCA3NTogWzIsIDcwXSwgODA6IFsyLCA3MF0sIDgxOiBbMiwgNzBdLCA4MjogWzIsIDcwXSwgODM6IFsyLCA3MF0sIDg0OiBbMiwgNzBdLCA4NTogWzIsIDcwXSB9LCB7IDQ3OiBbMiwgMThdIH0sIHsgNTogWzIsIDE0XSwgMTQ6IFsyLCAxNF0sIDE1OiBbMiwgMTRdLCAxOTogWzIsIDE0XSwgMjk6IFsyLCAxNF0sIDM0OiBbMiwgMTRdLCAzOTogWzIsIDE0XSwgNDQ6IFsyLCAxNF0sIDQ3OiBbMiwgMTRdLCA0ODogWzIsIDE0XSwgNTE6IFsyLCAxNF0sIDU1OiBbMiwgMTRdLCA2MDogWzIsIDE0XSB9LCB7IDMzOiBbMSwgMTE0XSB9LCB7IDMzOiBbMiwgODddLCA2NTogWzIsIDg3XSwgNzI6IFsyLCA4N10sIDgwOiBbMiwgODddLCA4MTogWzIsIDg3XSwgODI6IFsyLCA4N10sIDgzOiBbMiwgODddLCA4NDogWzIsIDg3XSwgODU6IFsyLCA4N10gfSwgeyAzMzogWzIsIDg5XSB9LCB7IDIwOiA3NSwgNjM6IDExNiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjc6IDExNSwgNjg6IFsyLCA5Nl0sIDY5OiAxMTcsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDMzOiBbMSwgMTE4XSB9LCB7IDMyOiAxMTksIDMzOiBbMiwgNjJdLCA3NDogMTIwLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDU5XSwgNjU6IFsyLCA1OV0sIDcyOiBbMiwgNTldLCA3NTogWzIsIDU5XSwgODA6IFsyLCA1OV0sIDgxOiBbMiwgNTldLCA4MjogWzIsIDU5XSwgODM6IFsyLCA1OV0sIDg0OiBbMiwgNTldLCA4NTogWzIsIDU5XSB9LCB7IDMzOiBbMiwgNjFdLCA3NTogWzIsIDYxXSB9LCB7IDMzOiBbMiwgNjhdLCAzNzogMTIyLCA3NDogMTIzLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDY1XSwgNjU6IFsyLCA2NV0sIDcyOiBbMiwgNjVdLCA3NTogWzIsIDY1XSwgODA6IFsyLCA2NV0sIDgxOiBbMiwgNjVdLCA4MjogWzIsIDY1XSwgODM6IFsyLCA2NV0sIDg0OiBbMiwgNjVdLCA4NTogWzIsIDY1XSB9LCB7IDMzOiBbMiwgNjddLCA3NTogWzIsIDY3XSB9LCB7IDIzOiBbMSwgMTI0XSB9LCB7IDIzOiBbMiwgNTFdLCA2NTogWzIsIDUxXSwgNzI6IFsyLCA1MV0sIDgwOiBbMiwgNTFdLCA4MTogWzIsIDUxXSwgODI6IFsyLCA1MV0sIDgzOiBbMiwgNTFdLCA4NDogWzIsIDUxXSwgODU6IFsyLCA1MV0gfSwgeyAyMzogWzIsIDUzXSB9LCB7IDMzOiBbMSwgMTI1XSB9LCB7IDMzOiBbMiwgOTFdLCA2NTogWzIsIDkxXSwgNzI6IFsyLCA5MV0sIDgwOiBbMiwgOTFdLCA4MTogWzIsIDkxXSwgODI6IFsyLCA5MV0sIDgzOiBbMiwgOTFdLCA4NDogWzIsIDkxXSwgODU6IFsyLCA5MV0gfSwgeyAzMzogWzIsIDkzXSB9LCB7IDU6IFsyLCAyMl0sIDE0OiBbMiwgMjJdLCAxNTogWzIsIDIyXSwgMTk6IFsyLCAyMl0sIDI5OiBbMiwgMjJdLCAzNDogWzIsIDIyXSwgMzk6IFsyLCAyMl0sIDQ0OiBbMiwgMjJdLCA0NzogWzIsIDIyXSwgNDg6IFsyLCAyMl0sIDUxOiBbMiwgMjJdLCA1NTogWzIsIDIyXSwgNjA6IFsyLCAyMl0gfSwgeyAyMzogWzIsIDk5XSwgMzM6IFsyLCA5OV0sIDU0OiBbMiwgOTldLCA2ODogWzIsIDk5XSwgNzI6IFsyLCA5OV0sIDc1OiBbMiwgOTldIH0sIHsgNzM6IFsxLCAxMDldIH0sIHsgMjA6IDc1LCA2MzogMTI2LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyM10sIDE0OiBbMiwgMjNdLCAxNTogWzIsIDIzXSwgMTk6IFsyLCAyM10sIDI5OiBbMiwgMjNdLCAzNDogWzIsIDIzXSwgMzk6IFsyLCAyM10sIDQ0OiBbMiwgMjNdLCA0NzogWzIsIDIzXSwgNDg6IFsyLCAyM10sIDUxOiBbMiwgMjNdLCA1NTogWzIsIDIzXSwgNjA6IFsyLCAyM10gfSwgeyA0NzogWzIsIDE5XSB9LCB7IDQ3OiBbMiwgNzddIH0sIHsgMjA6IDc1LCAzMzogWzIsIDcyXSwgNDE6IDEyNywgNjM6IDEyOCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEyOSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDcyXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyNF0sIDE0OiBbMiwgMjRdLCAxNTogWzIsIDI0XSwgMTk6IFsyLCAyNF0sIDI5OiBbMiwgMjRdLCAzNDogWzIsIDI0XSwgMzk6IFsyLCAyNF0sIDQ0OiBbMiwgMjRdLCA0NzogWzIsIDI0XSwgNDg6IFsyLCAyNF0sIDUxOiBbMiwgMjRdLCA1NTogWzIsIDI0XSwgNjA6IFsyLCAyNF0gfSwgeyA2ODogWzEsIDEzMF0gfSwgeyA2NTogWzIsIDk1XSwgNjg6IFsyLCA5NV0sIDcyOiBbMiwgOTVdLCA4MDogWzIsIDk1XSwgODE6IFsyLCA5NV0sIDgyOiBbMiwgOTVdLCA4MzogWzIsIDk1XSwgODQ6IFsyLCA5NV0sIDg1OiBbMiwgOTVdIH0sIHsgNjg6IFsyLCA5N10gfSwgeyA1OiBbMiwgMjFdLCAxNDogWzIsIDIxXSwgMTU6IFsyLCAyMV0sIDE5OiBbMiwgMjFdLCAyOTogWzIsIDIxXSwgMzQ6IFsyLCAyMV0sIDM5OiBbMiwgMjFdLCA0NDogWzIsIDIxXSwgNDc6IFsyLCAyMV0sIDQ4OiBbMiwgMjFdLCA1MTogWzIsIDIxXSwgNTU6IFsyLCAyMV0sIDYwOiBbMiwgMjFdIH0sIHsgMzM6IFsxLCAxMzFdIH0sIHsgMzM6IFsyLCA2M10gfSwgeyA3MjogWzEsIDEzM10sIDc2OiAxMzIgfSwgeyAzMzogWzEsIDEzNF0gfSwgeyAzMzogWzIsIDY5XSB9LCB7IDE1OiBbMiwgMTJdIH0sIHsgMTQ6IFsyLCAyNl0sIDE1OiBbMiwgMjZdLCAxOTogWzIsIDI2XSwgMjk6IFsyLCAyNl0sIDM0OiBbMiwgMjZdLCA0NzogWzIsIDI2XSwgNDg6IFsyLCAyNl0sIDUxOiBbMiwgMjZdLCA1NTogWzIsIDI2XSwgNjA6IFsyLCAyNl0gfSwgeyAyMzogWzIsIDMxXSwgMzM6IFsyLCAzMV0sIDU0OiBbMiwgMzFdLCA2ODogWzIsIDMxXSwgNzI6IFsyLCAzMV0sIDc1OiBbMiwgMzFdIH0sIHsgMzM6IFsyLCA3NF0sIDQyOiAxMzUsIDc0OiAxMzYsIDc1OiBbMSwgMTIxXSB9LCB7IDMzOiBbMiwgNzFdLCA2NTogWzIsIDcxXSwgNzI6IFsyLCA3MV0sIDc1OiBbMiwgNzFdLCA4MDogWzIsIDcxXSwgODE6IFsyLCA3MV0sIDgyOiBbMiwgNzFdLCA4MzogWzIsIDcxXSwgODQ6IFsyLCA3MV0sIDg1OiBbMiwgNzFdIH0sIHsgMzM6IFsyLCA3M10sIDc1OiBbMiwgNzNdIH0sIHsgMjM6IFsyLCAyOV0sIDMzOiBbMiwgMjldLCA1NDogWzIsIDI5XSwgNjU6IFsyLCAyOV0sIDY4OiBbMiwgMjldLCA3MjogWzIsIDI5XSwgNzU6IFsyLCAyOV0sIDgwOiBbMiwgMjldLCA4MTogWzIsIDI5XSwgODI6IFsyLCAyOV0sIDgzOiBbMiwgMjldLCA4NDogWzIsIDI5XSwgODU6IFsyLCAyOV0gfSwgeyAxNDogWzIsIDE1XSwgMTU6IFsyLCAxNV0sIDE5OiBbMiwgMTVdLCAyOTogWzIsIDE1XSwgMzQ6IFsyLCAxNV0sIDM5OiBbMiwgMTVdLCA0NDogWzIsIDE1XSwgNDc6IFsyLCAxNV0sIDQ4OiBbMiwgMTVdLCA1MTogWzIsIDE1XSwgNTU6IFsyLCAxNV0sIDYwOiBbMiwgMTVdIH0sIHsgNzI6IFsxLCAxMzhdLCA3NzogWzEsIDEzN10gfSwgeyA3MjogWzIsIDEwMF0sIDc3OiBbMiwgMTAwXSB9LCB7IDE0OiBbMiwgMTZdLCAxNTogWzIsIDE2XSwgMTk6IFsyLCAxNl0sIDI5OiBbMiwgMTZdLCAzNDogWzIsIDE2XSwgNDQ6IFsyLCAxNl0sIDQ3OiBbMiwgMTZdLCA0ODogWzIsIDE2XSwgNTE6IFsyLCAxNl0sIDU1OiBbMiwgMTZdLCA2MDogWzIsIDE2XSB9LCB7IDMzOiBbMSwgMTM5XSB9LCB7IDMzOiBbMiwgNzVdIH0sIHsgMzM6IFsyLCAzMl0gfSwgeyA3MjogWzIsIDEwMV0sIDc3OiBbMiwgMTAxXSB9LCB7IDE0OiBbMiwgMTddLCAxNTogWzIsIDE3XSwgMTk6IFsyLCAxN10sIDI5OiBbMiwgMTddLCAzNDogWzIsIDE3XSwgMzk6IFsyLCAxN10sIDQ0OiBbMiwgMTddLCA0NzogWzIsIDE3XSwgNDg6IFsyLCAxN10sIDUxOiBbMiwgMTddLCA1NTogWzIsIDE3XSwgNjA6IFsyLCAxN10gfV0sXG5cdCAgICAgICAgZGVmYXVsdEFjdGlvbnM6IHsgNDogWzIsIDFdLCA1NTogWzIsIDU1XSwgNTc6IFsyLCAyMF0sIDYxOiBbMiwgNTddLCA3NDogWzIsIDgxXSwgODM6IFsyLCA4NV0sIDg3OiBbMiwgMThdLCA5MTogWzIsIDg5XSwgMTAyOiBbMiwgNTNdLCAxMDU6IFsyLCA5M10sIDExMTogWzIsIDE5XSwgMTEyOiBbMiwgNzddLCAxMTc6IFsyLCA5N10sIDEyMDogWzIsIDYzXSwgMTIzOiBbMiwgNjldLCAxMjQ6IFsyLCAxMl0sIDEzNjogWzIsIDc1XSwgMTM3OiBbMiwgMzJdIH0sXG5cdCAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcblx0ICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuXHQgICAgICAgICAgICAgICAgc3RhY2sgPSBbMF0sXG5cdCAgICAgICAgICAgICAgICB2c3RhY2sgPSBbbnVsbF0sXG5cdCAgICAgICAgICAgICAgICBsc3RhY2sgPSBbXSxcblx0ICAgICAgICAgICAgICAgIHRhYmxlID0gdGhpcy50YWJsZSxcblx0ICAgICAgICAgICAgICAgIHl5dGV4dCA9IFwiXCIsXG5cdCAgICAgICAgICAgICAgICB5eWxpbmVubyA9IDAsXG5cdCAgICAgICAgICAgICAgICB5eWxlbmcgPSAwLFxuXHQgICAgICAgICAgICAgICAgcmVjb3ZlcmluZyA9IDAsXG5cdCAgICAgICAgICAgICAgICBURVJST1IgPSAyLFxuXHQgICAgICAgICAgICAgICAgRU9GID0gMTtcblx0ICAgICAgICAgICAgdGhpcy5sZXhlci5zZXRJbnB1dChpbnB1dCk7XG5cdCAgICAgICAgICAgIHRoaXMubGV4ZXIueXkgPSB0aGlzLnl5O1xuXHQgICAgICAgICAgICB0aGlzLnl5LmxleGVyID0gdGhpcy5sZXhlcjtcblx0ICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIgPSB0aGlzO1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubGV4ZXIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHRoaXMubGV4ZXIueXlsbG9jID0ge307XG5cdCAgICAgICAgICAgIHZhciB5eWxvYyA9IHRoaXMubGV4ZXIueXlsbG9jO1xuXHQgICAgICAgICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG5cdCAgICAgICAgICAgIHZhciByYW5nZXMgPSB0aGlzLmxleGVyLm9wdGlvbnMgJiYgdGhpcy5sZXhlci5vcHRpb25zLnJhbmdlcztcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5wYXJzZUVycm9yID0gdGhpcy55eS5wYXJzZUVycm9yO1xuXHQgICAgICAgICAgICBmdW5jdGlvbiBwb3BTdGFjayhuKSB7XG5cdCAgICAgICAgICAgICAgICBzdGFjay5sZW5ndGggPSBzdGFjay5sZW5ndGggLSAyICogbjtcblx0ICAgICAgICAgICAgICAgIHZzdGFjay5sZW5ndGggPSB2c3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgICAgIGxzdGFjay5sZW5ndGggPSBsc3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBmdW5jdGlvbiBsZXgoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgdG9rZW47XG5cdCAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYubGV4ZXIubGV4KCkgfHwgMTtcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBzeW1ib2wsXG5cdCAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCxcblx0ICAgICAgICAgICAgICAgIHN0YXRlLFxuXHQgICAgICAgICAgICAgICAgYWN0aW9uLFxuXHQgICAgICAgICAgICAgICAgYSxcblx0ICAgICAgICAgICAgICAgIHIsXG5cdCAgICAgICAgICAgICAgICB5eXZhbCA9IHt9LFxuXHQgICAgICAgICAgICAgICAgcCxcblx0ICAgICAgICAgICAgICAgIGxlbixcblx0ICAgICAgICAgICAgICAgIG5ld1N0YXRlLFxuXHQgICAgICAgICAgICAgICAgZXhwZWN0ZWQ7XG5cdCAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvdmVyaW5nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IDIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgdGhpcy5sZXhlci5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gMSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHsgdGV4dDogdGhpcy5sZXhlci5tYXRjaCwgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCwgbGluZTogdGhpcy5sZXhlci55eWxpbmVubywgbG9jOiB5eWxvYywgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2c3RhY2sucHVzaCh0aGlzLmxleGVyLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHRoaXMubGV4ZXIueXlsbG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByZUVycm9yU3ltYm9sKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxlbmcgPSB0aGlzLmxleGVyLnl5bGVuZztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dGV4dCA9IHRoaXMubGV4ZXIueXl0ZXh0O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSB0aGlzLmxleGVyLnl5bGluZW5vO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvdmVyaW5nID4gMCkgcmVjb3ZlcmluZy0tO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gcHJlRXJyb3JTeW1ib2w7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCA9IG51bGw7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJCA9IHsgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLCBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLCBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLCBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtbiB9O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLCBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwoeXl2YWwsIHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgdGhpcy55eSwgYWN0aW9uWzFdLCB2c3RhY2ssIGxzdGFjayk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyogSmlzb24gZ2VuZXJhdGVkIGxleGVyICovXG5cdCAgICB2YXIgbGV4ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBsZXhlciA9IHsgRU9GOiAxLFxuXHQgICAgICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uIHNldElucHV0KGlucHV0KSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2xlc3MgPSB0aGlzLmRvbmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbJ0lOSVRJQUwnXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiAxLCBmaXJzdF9jb2x1bW46IDAsIGxhc3RfbGluZTogMSwgbGFzdF9jb2x1bW46IDAgfTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gaW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcrKztcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gY2g7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVucHV0OiBmdW5jdGlvbiB1bnB1dChjaCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbiAtIDEpO1xuXHQgICAgICAgICAgICAgICAgLy90aGlzLnl5bGVuZyAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuXG5cdCAgICAgICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcblxuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcblx0ICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcblx0ICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG5cdCAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24gbW9yZSgpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uIGxlc3Mobikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcGFzdElucHV0OiBmdW5jdGlvbiBwYXN0SW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uIHVwY29taW5nSW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG5cdCAgICAgICAgICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYyArIFwiXlwiO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IHRydWU7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXgsIGNvbCwgbGluZXM7XG5cdCAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9ICcnO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aCB9O1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBydWxlc1tpbmRleF0sIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCkgdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSByZXR1cm4gdG9rZW47ZWxzZSByZXR1cm47XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoJ0xleGljYWwgZXJyb3Igb24gbGluZSAnICsgKHRoaXMueXlsaW5lbm8gKyAxKSArICcuIFVucmVjb2duaXplZCB0ZXh0LlxcbicgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7IHRleHQ6IFwiXCIsIHRva2VuOiBudWxsLCBsaW5lOiB0aGlzLnl5bGluZW5vIH0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxleCgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uIF9jdXJyZW50UnVsZXMoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMl07XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG5cdCAgICAgICAgICAgIH0gfTtcblx0ICAgICAgICBsZXhlci5vcHRpb25zID0ge307XG5cdCAgICAgICAgbGV4ZXIucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVCkge1xuXG5cdCAgICAgICAgICAgIGZ1bmN0aW9uIHN0cmlwKHN0YXJ0LCBlbmQpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zdWJzdHIoc3RhcnQsIHl5Xy55eWxlbmcgLSBlbmQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdmFyIFlZU1RBVEUgPSBZWV9TVEFSVDtcblx0ICAgICAgICAgICAgc3dpdGNoICgkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDA6XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHl5Xy55eXRleHQuc2xpY2UoLTIpID09PSBcIlxcXFxcXFxcXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJtdVwiKTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHl5Xy55eXRleHQuc2xpY2UoLTEpID09PSBcIlxcXFxcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcCgwLCAxKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcImVtdVwiKTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0KSByZXR1cm4gMTU7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ3JhdycpO3JldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIHVzaW5nIGB0aGlzLnRvcFN0YXRlKClgIGJlbG93LCBidXQgaXQgY3VycmVudGx5XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJucyB0aGUgc2Vjb25kIHRvcCBpbnN0ZWFkIG9mIHRoZSBmaXJzdCB0b3AuIE9wZW5lZCBhblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlIGFib3V0IGl0IGF0IGh0dHBzOi8vZ2l0aHViLmNvbS96YWFjaC9qaXNvbi9pc3N1ZXMvMjkxXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA9PT0gJ3JhdycpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnN1YnN0cig1LCB5eV8ueXlsZW5nIC0gOSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRU5EX1JBV19CTE9DSyc7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTQ7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ3JhdycpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyMztcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEyOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI5O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNDQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNDQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE3OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzNDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTg6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM5O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTE7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIwOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA0ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh5eV8ueXl0ZXh0KTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbignY29tJyk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNDtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI0OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjU6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI3OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Nztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjg6XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIHdoaXRlc3BhY2Vcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO3JldHVybiA1NDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO3JldHVybiAzMztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzE6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHN0cmlwKDEsIDIpLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKTtyZXR1cm4gODA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSBzdHJpcCgxLCAyKS5yZXBsYWNlKC9cXFxcJy9nLCBcIidcIik7cmV0dXJuIDgwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM3OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4NDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Nztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mjpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5yZXBsYWNlKC9cXFxcKFtcXFxcXFxdXSkvZywgJyQxJyk7cmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0lOVkFMSUQnO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0NDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgbGV4ZXIucnVsZXMgPSBbL14oPzpbXlxceDAwXSo/KD89KFxce1xceykpKS8sIC9eKD86W15cXHgwMF0rKS8sIC9eKD86W15cXHgwMF17Mix9Pyg/PShcXHtcXHt8XFxcXFxce1xce3xcXFxcXFxcXFxce1xce3wkKSkpLywgL14oPzpcXHtcXHtcXHtcXHsoPz1bXlxcL10pKS8sIC9eKD86XFx7XFx7XFx7XFx7XFwvW15cXHMhXCIjJS0sXFwuXFwvOy0+QFxcWy1cXF5gXFx7LX5dKyg/PVs9fVxcc1xcLy5dKVxcfVxcfVxcfVxcfSkvLCAvXig/OlteXFx4MDBdKj8oPz0oXFx7XFx7XFx7XFx7KSkpLywgL14oPzpbXFxzXFxTXSo/LS0ofik/XFx9XFx9KS8sIC9eKD86XFwoKS8sIC9eKD86XFwpKS8sIC9eKD86XFx7XFx7XFx7XFx7KS8sIC9eKD86XFx9XFx9XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pPz4pLywgL14oPzpcXHtcXHsofik/Iz4pLywgL14oPzpcXHtcXHsofik/I1xcKj8pLywgL14oPzpcXHtcXHsofik/XFwvKS8sIC9eKD86XFx7XFx7KH4pP1xcXlxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxzKih+KT9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFxeKS8sIC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxiKS8sIC9eKD86XFx7XFx7KH4pP1xceykvLCAvXig/Olxce1xceyh+KT8mKS8sIC9eKD86XFx7XFx7KH4pPyEtLSkvLCAvXig/Olxce1xceyh+KT8hW1xcc1xcU10qP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXCo/KS8sIC9eKD86PSkvLCAvXig/OlxcLlxcLikvLCAvXig/OlxcLig/PShbPX59XFxzXFwvLil8XSkpKS8sIC9eKD86W1xcLy5dKS8sIC9eKD86XFxzKykvLCAvXig/OlxcfSh+KT9cXH1cXH0pLywgL14oPzoofik/XFx9XFx9KS8sIC9eKD86XCIoXFxcXFtcIl18W15cIl0pKlwiKS8sIC9eKD86JyhcXFxcWyddfFteJ10pKicpLywgL14oPzpAKS8sIC9eKD86dHJ1ZSg/PShbfn1cXHMpXSkpKS8sIC9eKD86ZmFsc2UoPz0oW359XFxzKV0pKSkvLCAvXig/OnVuZGVmaW5lZCg/PShbfn1cXHMpXSkpKS8sIC9eKD86bnVsbCg/PShbfn1cXHMpXSkpKS8sIC9eKD86LT9bMC05XSsoPzpcXC5bMC05XSspPyg/PShbfn1cXHMpXSkpKS8sIC9eKD86YXNcXHMrXFx8KS8sIC9eKD86XFx8KS8sIC9eKD86KFteXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz0oWz1+fVxcc1xcLy4pfF0pKSkpLywgL14oPzpcXFsoXFxcXFxcXXxbXlxcXV0pKlxcXSkvLCAvXig/Oi4pLywgL14oPzokKS9dO1xuXHQgICAgICAgIGxleGVyLmNvbmRpdGlvbnMgPSB7IFwibXVcIjogeyBcInJ1bGVzXCI6IFs3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDRdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImVtdVwiOiB7IFwicnVsZXNcIjogWzJdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcImNvbVwiOiB7IFwicnVsZXNcIjogWzZdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcInJhd1wiOiB7IFwicnVsZXNcIjogWzMsIDQsIDVdLCBcImluY2x1c2l2ZVwiOiBmYWxzZSB9LCBcIklOSVRJQUxcIjogeyBcInJ1bGVzXCI6IFswLCAxLCA0NF0sIFwiaW5jbHVzaXZlXCI6IHRydWUgfSB9O1xuXHQgICAgICAgIHJldHVybiBsZXhlcjtcblx0ICAgIH0pKCk7XG5cdCAgICBwYXJzZXIubGV4ZXIgPSBsZXhlcjtcblx0ICAgIGZ1bmN0aW9uIFBhcnNlcigpIHtcblx0ICAgICAgICB0aGlzLnl5ID0ge307XG5cdCAgICB9UGFyc2VyLnByb3RvdHlwZSA9IHBhcnNlcjtwYXJzZXIuUGFyc2VyID0gUGFyc2VyO1xuXHQgICAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcblx0fSkoKTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGhhbmRsZWJhcnM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0pLFxuLyogMzggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3Zpc2l0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblxuXHR2YXIgX3Zpc2l0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmlzaXRvcik7XG5cblx0ZnVuY3Rpb24gV2hpdGVzcGFjZUNvbnRyb2woKSB7XG5cdCAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuXHQgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlID0gbmV3IF92aXNpdG9yMlsnZGVmYXVsdCddKCk7XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlByb2dyYW0gPSBmdW5jdGlvbiAocHJvZ3JhbSkge1xuXHQgIHZhciBkb1N0YW5kYWxvbmUgPSAhdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmU7XG5cblx0ICB2YXIgaXNSb290ID0gIXRoaXMuaXNSb290U2Vlbjtcblx0ICB0aGlzLmlzUm9vdFNlZW4gPSB0cnVlO1xuXG5cdCAgdmFyIGJvZHkgPSBwcm9ncmFtLmJvZHk7XG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSBib2R5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgdmFyIGN1cnJlbnQgPSBib2R5W2ldLFxuXHQgICAgICAgIHN0cmlwID0gdGhpcy5hY2NlcHQoY3VycmVudCk7XG5cblx0ICAgIGlmICghc3RyaXApIHtcblx0ICAgICAgY29udGludWU7XG5cdCAgICB9XG5cblx0ICAgIHZhciBfaXNQcmV2V2hpdGVzcGFjZSA9IGlzUHJldldoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSxcblx0ICAgICAgICBfaXNOZXh0V2hpdGVzcGFjZSA9IGlzTmV4dFdoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSxcblx0ICAgICAgICBvcGVuU3RhbmRhbG9uZSA9IHN0cmlwLm9wZW5TdGFuZGFsb25lICYmIF9pc1ByZXZXaGl0ZXNwYWNlLFxuXHQgICAgICAgIGNsb3NlU3RhbmRhbG9uZSA9IHN0cmlwLmNsb3NlU3RhbmRhbG9uZSAmJiBfaXNOZXh0V2hpdGVzcGFjZSxcblx0ICAgICAgICBpbmxpbmVTdGFuZGFsb25lID0gc3RyaXAuaW5saW5lU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSAmJiBfaXNOZXh0V2hpdGVzcGFjZTtcblxuXHQgICAgaWYgKHN0cmlwLmNsb3NlKSB7XG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpLCB0cnVlKTtcblx0ICAgIH1cblx0ICAgIGlmIChzdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KGJvZHksIGksIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGlubGluZVN0YW5kYWxvbmUpIHtcblx0ICAgICAgb21pdFJpZ2h0KGJvZHksIGkpO1xuXG5cdCAgICAgIGlmIChvbWl0TGVmdChib2R5LCBpKSkge1xuXHQgICAgICAgIC8vIElmIHdlIGFyZSBvbiBhIHN0YW5kYWxvbmUgbm9kZSwgc2F2ZSB0aGUgaW5kZW50IGluZm8gZm9yIHBhcnRpYWxzXG5cdCAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ1BhcnRpYWxTdGF0ZW1lbnQnKSB7XG5cdCAgICAgICAgICAvLyBQdWxsIG91dCB0aGUgd2hpdGVzcGFjZSBmcm9tIHRoZSBmaW5hbCBsaW5lXG5cdCAgICAgICAgICBjdXJyZW50LmluZGVudCA9IC8oWyBcXHRdKyQpLy5leGVjKGJvZHlbaSAtIDFdLm9yaWdpbmFsKVsxXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIGlmIChkb1N0YW5kYWxvbmUgJiYgb3BlblN0YW5kYWxvbmUpIHtcblx0ICAgICAgb21pdFJpZ2h0KChjdXJyZW50LnByb2dyYW0gfHwgY3VycmVudC5pbnZlcnNlKS5ib2R5KTtcblxuXHQgICAgICAvLyBTdHJpcCBvdXQgdGhlIHByZXZpb3VzIGNvbnRlbnQgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seVxuXHQgICAgICBvbWl0TGVmdChib2R5LCBpKTtcblx0ICAgIH1cblx0ICAgIGlmIChkb1N0YW5kYWxvbmUgJiYgY2xvc2VTdGFuZGFsb25lKSB7XG5cdCAgICAgIC8vIEFsd2F5cyBzdHJpcCB0aGUgbmV4dCBub2RlXG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuXHQgICAgICBvbWl0TGVmdCgoY3VycmVudC5pbnZlcnNlIHx8IGN1cnJlbnQucHJvZ3JhbSkuYm9keSk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHByb2dyYW07XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkJsb2NrU3RhdGVtZW50ID0gV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkRlY29yYXRvckJsb2NrID0gV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxCbG9ja1N0YXRlbWVudCA9IGZ1bmN0aW9uIChibG9jaykge1xuXHQgIHRoaXMuYWNjZXB0KGJsb2NrLnByb2dyYW0pO1xuXHQgIHRoaXMuYWNjZXB0KGJsb2NrLmludmVyc2UpO1xuXG5cdCAgLy8gRmluZCB0aGUgaW52ZXJzZSBwcm9ncmFtIHRoYXQgaXMgaW52b2xlZCB3aXRoIHdoaXRlc3BhY2Ugc3RyaXBwaW5nLlxuXHQgIHZhciBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSB8fCBibG9jay5pbnZlcnNlLFxuXHQgICAgICBpbnZlcnNlID0gYmxvY2sucHJvZ3JhbSAmJiBibG9jay5pbnZlcnNlLFxuXHQgICAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLFxuXHQgICAgICBsYXN0SW52ZXJzZSA9IGludmVyc2U7XG5cblx0ICBpZiAoaW52ZXJzZSAmJiBpbnZlcnNlLmNoYWluZWQpIHtcblx0ICAgIGZpcnN0SW52ZXJzZSA9IGludmVyc2UuYm9keVswXS5wcm9ncmFtO1xuXG5cdCAgICAvLyBXYWxrIHRoZSBpbnZlcnNlIGNoYWluIHRvIGZpbmQgdGhlIGxhc3QgaW52ZXJzZSB0aGF0IGlzIGFjdHVhbGx5IGluIHRoZSBjaGFpbi5cblx0ICAgIHdoaWxlIChsYXN0SW52ZXJzZS5jaGFpbmVkKSB7XG5cdCAgICAgIGxhc3RJbnZlcnNlID0gbGFzdEludmVyc2UuYm9keVtsYXN0SW52ZXJzZS5ib2R5Lmxlbmd0aCAtIDFdLnByb2dyYW07XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgdmFyIHN0cmlwID0ge1xuXHQgICAgb3BlbjogYmxvY2sub3BlblN0cmlwLm9wZW4sXG5cdCAgICBjbG9zZTogYmxvY2suY2xvc2VTdHJpcC5jbG9zZSxcblxuXHQgICAgLy8gRGV0ZXJtaW5lIHRoZSBzdGFuZGFsb25lIGNhbmRpYWN5LiBCYXNpY2FsbHkgZmxhZyBvdXIgY29udGVudCBhcyBiZWluZyBwb3NzaWJseSBzdGFuZGFsb25lXG5cdCAgICAvLyBzbyBvdXIgcGFyZW50IGNhbiBkZXRlcm1pbmUgaWYgd2UgYWN0dWFsbHkgYXJlIHN0YW5kYWxvbmVcblx0ICAgIG9wZW5TdGFuZGFsb25lOiBpc05leHRXaGl0ZXNwYWNlKHByb2dyYW0uYm9keSksXG5cdCAgICBjbG9zZVN0YW5kYWxvbmU6IGlzUHJldldoaXRlc3BhY2UoKGZpcnN0SW52ZXJzZSB8fCBwcm9ncmFtKS5ib2R5KVxuXHQgIH07XG5cblx0ICBpZiAoYmxvY2sub3BlblN0cmlwLmNsb3NlKSB7XG5cdCAgICBvbWl0UmlnaHQocHJvZ3JhbS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICB9XG5cblx0ICBpZiAoaW52ZXJzZSkge1xuXHQgICAgdmFyIGludmVyc2VTdHJpcCA9IGJsb2NrLmludmVyc2VTdHJpcDtcblxuXHQgICAgaWYgKGludmVyc2VTdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpbnZlcnNlU3RyaXAuY2xvc2UpIHtcblx0ICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICAgIH1cblx0ICAgIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcblx0ICAgICAgb21pdExlZnQobGFzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZpbmQgc3RhbmRhbG9uZSBlbHNlIHN0YXRtZW50c1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuaWdub3JlU3RhbmRhbG9uZSAmJiBpc1ByZXZXaGl0ZXNwYWNlKHByb2dyYW0uYm9keSkgJiYgaXNOZXh0V2hpdGVzcGFjZShmaXJzdEludmVyc2UuYm9keSkpIHtcblx0ICAgICAgb21pdExlZnQocHJvZ3JhbS5ib2R5KTtcblx0ICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5KTtcblx0ICAgIH1cblx0ICB9IGVsc2UgaWYgKGJsb2NrLmNsb3NlU3RyaXAub3Blbikge1xuXHQgICAgb21pdExlZnQocHJvZ3JhbS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICB9XG5cblx0ICByZXR1cm4gc3RyaXA7XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkRlY29yYXRvciA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5NdXN0YWNoZVN0YXRlbWVudCA9IGZ1bmN0aW9uIChtdXN0YWNoZSkge1xuXHQgIHJldHVybiBtdXN0YWNoZS5zdHJpcDtcblx0fTtcblxuXHRXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUGFydGlhbFN0YXRlbWVudCA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Db21tZW50U3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIHZhciBzdHJpcCA9IG5vZGUuc3RyaXAgfHwge307XG5cdCAgcmV0dXJuIHtcblx0ICAgIGlubGluZVN0YW5kYWxvbmU6IHRydWUsXG5cdCAgICBvcGVuOiBzdHJpcC5vcGVuLFxuXHQgICAgY2xvc2U6IHN0cmlwLmNsb3NlXG5cdCAgfTtcblx0fTtcblxuXHRmdW5jdGlvbiBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0ICAgIGkgPSBib2R5Lmxlbmd0aDtcblx0ICB9XG5cblx0ICAvLyBOb2RlcyB0aGF0IGVuZCB3aXRoIG5ld2xpbmVzIGFyZSBjb25zaWRlcmVkIHdoaXRlc3BhY2UgKGJ1dCBhcmUgc3BlY2lhbFxuXHQgIC8vIGNhc2VkIGZvciBzdHJpcCBvcGVyYXRpb25zKVxuXHQgIHZhciBwcmV2ID0gYm9keVtpIC0gMV0sXG5cdCAgICAgIHNpYmxpbmcgPSBib2R5W2kgLSAyXTtcblx0ICBpZiAoIXByZXYpIHtcblx0ICAgIHJldHVybiBpc1Jvb3Q7XG5cdCAgfVxuXG5cdCAgaWYgKHByZXYudHlwZSA9PT0gJ0NvbnRlbnRTdGF0ZW1lbnQnKSB7XG5cdCAgICByZXR1cm4gKHNpYmxpbmcgfHwgIWlzUm9vdCA/IC9cXHI/XFxuXFxzKj8kLyA6IC8oXnxcXHI/XFxuKVxccyo/JC8pLnRlc3QocHJldi5vcmlnaW5hbCk7XG5cdCAgfVxuXHR9XG5cdGZ1bmN0aW9uIGlzTmV4dFdoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSB7XG5cdCAgaWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgaSA9IC0xO1xuXHQgIH1cblxuXHQgIHZhciBuZXh0ID0gYm9keVtpICsgMV0sXG5cdCAgICAgIHNpYmxpbmcgPSBib2R5W2kgKyAyXTtcblx0ICBpZiAoIW5leHQpIHtcblx0ICAgIHJldHVybiBpc1Jvb3Q7XG5cdCAgfVxuXG5cdCAgaWYgKG5leHQudHlwZSA9PT0gJ0NvbnRlbnRTdGF0ZW1lbnQnKSB7XG5cdCAgICByZXR1cm4gKHNpYmxpbmcgfHwgIWlzUm9vdCA/IC9eXFxzKj9cXHI/XFxuLyA6IC9eXFxzKj8oXFxyP1xcbnwkKS8pLnRlc3QobmV4dC5vcmlnaW5hbCk7XG5cdCAgfVxuXHR9XG5cblx0Ly8gTWFya3MgdGhlIG5vZGUgdG8gdGhlIHJpZ2h0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuXHQvLyBJLmUuIHt7Zm9vfX0nICcgd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuXHQvL1xuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCwgdGhlbiB0aGUgZmlyc3QgY2hpbGQgd2lsbCBiZSBtYXJrZWQgYXMgc3VjaC5cblx0Ly9cblx0Ly8gSWYgbXVsaXRwbGUgaXMgdHJ1dGh5IHRoZW4gYWxsIHdoaXRlc3BhY2Ugd2lsbCBiZSBzdHJpcHBlZCBvdXQgdW50aWwgbm9uLXdoaXRlc3BhY2Vcblx0Ly8gY29udGVudCBpcyBtZXQuXG5cdGZ1bmN0aW9uIG9taXRSaWdodChib2R5LCBpLCBtdWx0aXBsZSkge1xuXHQgIHZhciBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyAwIDogaSArIDFdO1xuXHQgIGlmICghY3VycmVudCB8fCBjdXJyZW50LnR5cGUgIT09ICdDb250ZW50U3RhdGVtZW50JyB8fCAhbXVsdGlwbGUgJiYgY3VycmVudC5yaWdodFN0cmlwcGVkKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXG5cdCAgdmFyIG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcblx0ICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gL15cXHMrLyA6IC9eWyBcXHRdKlxccj9cXG4/LywgJycpO1xuXHQgIGN1cnJlbnQucmlnaHRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xuXHR9XG5cblx0Ly8gTWFya3MgdGhlIG5vZGUgdG8gdGhlIGxlZnQgb2YgdGhlIHBvc2l0aW9uIGFzIG9taXR0ZWQuXG5cdC8vIEkuZS4gJyAne3tmb299fSB3aWxsIG1hcmsgdGhlICcgJyBub2RlIGFzIG9taXR0ZWQuXG5cdC8vXG5cdC8vIElmIGkgaXMgdW5kZWZpbmVkIHRoZW4gdGhlIGxhc3QgY2hpbGQgd2lsbCBiZSBtYXJrZWQgYXMgc3VjaC5cblx0Ly9cblx0Ly8gSWYgbXVsaXRwbGUgaXMgdHJ1dGh5IHRoZW4gYWxsIHdoaXRlc3BhY2Ugd2lsbCBiZSBzdHJpcHBlZCBvdXQgdW50aWwgbm9uLXdoaXRlc3BhY2Vcblx0Ly8gY29udGVudCBpcyBtZXQuXG5cdGZ1bmN0aW9uIG9taXRMZWZ0KGJvZHksIGksIG11bHRpcGxlKSB7XG5cdCAgdmFyIGN1cnJlbnQgPSBib2R5W2kgPT0gbnVsbCA/IGJvZHkubGVuZ3RoIC0gMSA6IGkgLSAxXTtcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQubGVmdFN0cmlwcGVkKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXG5cdCAgLy8gV2Ugb21pdCB0aGUgbGFzdCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5IGFuZCBub3QgcHJlY2VlZGVkIGJ5IGEgbm9uLWNvbnRlbnQgbm9kZS5cblx0ICB2YXIgb3JpZ2luYWwgPSBjdXJyZW50LnZhbHVlO1xuXHQgIGN1cnJlbnQudmFsdWUgPSBjdXJyZW50LnZhbHVlLnJlcGxhY2UobXVsdGlwbGUgPyAvXFxzKyQvIDogL1sgXFx0XSskLywgJycpO1xuXHQgIGN1cnJlbnQubGVmdFN0cmlwcGVkID0gY3VycmVudC52YWx1ZSAhPT0gb3JpZ2luYWw7XG5cdCAgcmV0dXJuIGN1cnJlbnQubGVmdFN0cmlwcGVkO1xuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gV2hpdGVzcGFjZUNvbnRyb2w7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDM5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZnVuY3Rpb24gVmlzaXRvcigpIHtcblx0ICB0aGlzLnBhcmVudHMgPSBbXTtcblx0fVxuXG5cdFZpc2l0b3IucHJvdG90eXBlID0ge1xuXHQgIGNvbnN0cnVjdG9yOiBWaXNpdG9yLFxuXHQgIG11dGF0aW5nOiBmYWxzZSxcblxuXHQgIC8vIFZpc2l0cyBhIGdpdmVuIHZhbHVlLiBJZiBtdXRhdGluZywgd2lsbCByZXBsYWNlIHRoZSB2YWx1ZSBpZiBuZWNlc3NhcnkuXG5cdCAgYWNjZXB0S2V5OiBmdW5jdGlvbiBhY2NlcHRLZXkobm9kZSwgbmFtZSkge1xuXHQgICAgdmFyIHZhbHVlID0gdGhpcy5hY2NlcHQobm9kZVtuYW1lXSk7XG5cdCAgICBpZiAodGhpcy5tdXRhdGluZykge1xuXHQgICAgICAvLyBIYWNreSBzYW5pdHkgY2hlY2s6IFRoaXMgbWF5IGhhdmUgYSBmZXcgZmFsc2UgcG9zaXRpdmVzIGZvciB0eXBlIGZvciB0aGUgaGVscGVyXG5cdCAgICAgIC8vIG1ldGhvZHMgYnV0IHdpbGwgZ2VuZXJhbGx5IGRvIHRoZSByaWdodCB0aGluZyB3aXRob3V0IGEgbG90IG9mIG92ZXJoZWFkLlxuXHQgICAgICBpZiAodmFsdWUgJiYgIVZpc2l0b3IucHJvdG90eXBlW3ZhbHVlLnR5cGVdKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1VuZXhwZWN0ZWQgbm9kZSB0eXBlIFwiJyArIHZhbHVlLnR5cGUgKyAnXCIgZm91bmQgd2hlbiBhY2NlcHRpbmcgJyArIG5hbWUgKyAnIG9uICcgKyBub2RlLnR5cGUpO1xuXHQgICAgICB9XG5cdCAgICAgIG5vZGVbbmFtZV0gPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gUGVyZm9ybXMgYW4gYWNjZXB0IG9wZXJhdGlvbiB3aXRoIGFkZGVkIHNhbml0eSBjaGVjayB0byBlbnN1cmVcblx0ICAvLyByZXF1aXJlZCBrZXlzIGFyZSBub3QgcmVtb3ZlZC5cblx0ICBhY2NlcHRSZXF1aXJlZDogZnVuY3Rpb24gYWNjZXB0UmVxdWlyZWQobm9kZSwgbmFtZSkge1xuXHQgICAgdGhpcy5hY2NlcHRLZXkobm9kZSwgbmFtZSk7XG5cblx0ICAgIGlmICghbm9kZVtuYW1lXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShub2RlLnR5cGUgKyAnIHJlcXVpcmVzICcgKyBuYW1lKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gVHJhdmVyc2VzIGEgZ2l2ZW4gYXJyYXkuIElmIG11dGF0aW5nLCBlbXB0eSByZXNwbnNlcyB3aWxsIGJlIHJlbW92ZWRcblx0ICAvLyBmb3IgY2hpbGQgZWxlbWVudHMuXG5cdCAgYWNjZXB0QXJyYXk6IGZ1bmN0aW9uIGFjY2VwdEFycmF5KGFycmF5KSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdEtleShhcnJheSwgaSk7XG5cblx0ICAgICAgaWYgKCFhcnJheVtpXSkge1xuXHQgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcblx0ICAgICAgICBpLS07XG5cdCAgICAgICAgbC0tO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KG9iamVjdCkge1xuXHQgICAgaWYgKCFvYmplY3QpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogU2FuaXR5IGNvZGUgKi9cblx0ICAgIGlmICghdGhpc1tvYmplY3QudHlwZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdHlwZTogJyArIG9iamVjdC50eXBlLCBvYmplY3QpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5jdXJyZW50KSB7XG5cdCAgICAgIHRoaXMucGFyZW50cy51bnNoaWZ0KHRoaXMuY3VycmVudCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLmN1cnJlbnQgPSBvYmplY3Q7XG5cblx0ICAgIHZhciByZXQgPSB0aGlzW29iamVjdC50eXBlXShvYmplY3QpO1xuXG5cdCAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhcmVudHMuc2hpZnQoKTtcblxuXHQgICAgaWYgKCF0aGlzLm11dGF0aW5nIHx8IHJldCkge1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSBlbHNlIGlmIChyZXQgIT09IGZhbHNlKSB7XG5cdCAgICAgIHJldHVybiBvYmplY3Q7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFByb2dyYW06IGZ1bmN0aW9uIFByb2dyYW0ocHJvZ3JhbSkge1xuXHQgICAgdGhpcy5hY2NlcHRBcnJheShwcm9ncmFtLmJvZHkpO1xuXHQgIH0sXG5cblx0ICBNdXN0YWNoZVN0YXRlbWVudDogdmlzaXRTdWJFeHByZXNzaW9uLFxuXHQgIERlY29yYXRvcjogdmlzaXRTdWJFeHByZXNzaW9uLFxuXG5cdCAgQmxvY2tTdGF0ZW1lbnQ6IHZpc2l0QmxvY2ssXG5cdCAgRGVjb3JhdG9yQmxvY2s6IHZpc2l0QmxvY2ssXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiB2aXNpdFBhcnRpYWwsXG5cdCAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQocGFydGlhbCkge1xuXHQgICAgdmlzaXRQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCk7XG5cblx0ICAgIHRoaXMuYWNjZXB0S2V5KHBhcnRpYWwsICdwcm9ncmFtJyk7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoKSAvKiBjb250ZW50ICove30sXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIC8qIGNvbW1lbnQgKi97fSxcblxuXHQgIFN1YkV4cHJlc3Npb246IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbigpIC8qIHBhdGggKi97fSxcblxuXHQgIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uIFN0cmluZ0xpdGVyYWwoKSAvKiBzdHJpbmcgKi97fSxcblx0ICBOdW1iZXJMaXRlcmFsOiBmdW5jdGlvbiBOdW1iZXJMaXRlcmFsKCkgLyogbnVtYmVyICove30sXG5cdCAgQm9vbGVhbkxpdGVyYWw6IGZ1bmN0aW9uIEJvb2xlYW5MaXRlcmFsKCkgLyogYm9vbCAqL3t9LFxuXHQgIFVuZGVmaW5lZExpdGVyYWw6IGZ1bmN0aW9uIFVuZGVmaW5lZExpdGVyYWwoKSAvKiBsaXRlcmFsICove30sXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB0aGlzLmFjY2VwdEFycmF5KGhhc2gucGFpcnMpO1xuXHQgIH0sXG5cdCAgSGFzaFBhaXI6IGZ1bmN0aW9uIEhhc2hQYWlyKHBhaXIpIHtcblx0ICAgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFpciwgJ3ZhbHVlJyk7XG5cdCAgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHZpc2l0U3ViRXhwcmVzc2lvbihtdXN0YWNoZSkge1xuXHQgIHRoaXMuYWNjZXB0UmVxdWlyZWQobXVzdGFjaGUsICdwYXRoJyk7XG5cdCAgdGhpcy5hY2NlcHRBcnJheShtdXN0YWNoZS5wYXJhbXMpO1xuXHQgIHRoaXMuYWNjZXB0S2V5KG11c3RhY2hlLCAnaGFzaCcpO1xuXHR9XG5cdGZ1bmN0aW9uIHZpc2l0QmxvY2soYmxvY2spIHtcblx0ICB2aXNpdFN1YkV4cHJlc3Npb24uY2FsbCh0aGlzLCBibG9jayk7XG5cblx0ICB0aGlzLmFjY2VwdEtleShibG9jaywgJ3Byb2dyYW0nKTtcblx0ICB0aGlzLmFjY2VwdEtleShibG9jaywgJ2ludmVyc2UnKTtcblx0fVxuXHRmdW5jdGlvbiB2aXNpdFBhcnRpYWwocGFydGlhbCkge1xuXHQgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFydGlhbCwgJ25hbWUnKTtcblx0ICB0aGlzLmFjY2VwdEFycmF5KHBhcnRpYWwucGFyYW1zKTtcblx0ICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAnaGFzaCcpO1xuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVmlzaXRvcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5Tb3VyY2VMb2NhdGlvbiA9IFNvdXJjZUxvY2F0aW9uO1xuXHRleHBvcnRzLmlkID0gaWQ7XG5cdGV4cG9ydHMuc3RyaXBGbGFncyA9IHN0cmlwRmxhZ3M7XG5cdGV4cG9ydHMuc3RyaXBDb21tZW50ID0gc3RyaXBDb21tZW50O1xuXHRleHBvcnRzLnByZXBhcmVQYXRoID0gcHJlcGFyZVBhdGg7XG5cdGV4cG9ydHMucHJlcGFyZU11c3RhY2hlID0gcHJlcGFyZU11c3RhY2hlO1xuXHRleHBvcnRzLnByZXBhcmVSYXdCbG9jayA9IHByZXBhcmVSYXdCbG9jaztcblx0ZXhwb3J0cy5wcmVwYXJlQmxvY2sgPSBwcmVwYXJlQmxvY2s7XG5cdGV4cG9ydHMucHJlcGFyZVByb2dyYW0gPSBwcmVwYXJlUHJvZ3JhbTtcblx0ZXhwb3J0cy5wcmVwYXJlUGFydGlhbEJsb2NrID0gcHJlcGFyZVBhcnRpYWxCbG9jaztcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRmdW5jdGlvbiB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKSB7XG5cdCAgY2xvc2UgPSBjbG9zZS5wYXRoID8gY2xvc2UucGF0aC5vcmlnaW5hbCA6IGNsb3NlO1xuXG5cdCAgaWYgKG9wZW4ucGF0aC5vcmlnaW5hbCAhPT0gY2xvc2UpIHtcblx0ICAgIHZhciBlcnJvck5vZGUgPSB7IGxvYzogb3Blbi5wYXRoLmxvYyB9O1xuXG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShvcGVuLnBhdGgub3JpZ2luYWwgKyBcIiBkb2Vzbid0IG1hdGNoIFwiICsgY2xvc2UsIGVycm9yTm9kZSk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gU291cmNlTG9jYXRpb24oc291cmNlLCBsb2NJbmZvKSB7XG5cdCAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdCAgdGhpcy5zdGFydCA9IHtcblx0ICAgIGxpbmU6IGxvY0luZm8uZmlyc3RfbGluZSxcblx0ICAgIGNvbHVtbjogbG9jSW5mby5maXJzdF9jb2x1bW5cblx0ICB9O1xuXHQgIHRoaXMuZW5kID0ge1xuXHQgICAgbGluZTogbG9jSW5mby5sYXN0X2xpbmUsXG5cdCAgICBjb2x1bW46IGxvY0luZm8ubGFzdF9jb2x1bW5cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaWQodG9rZW4pIHtcblx0ICBpZiAoL15cXFsuKlxcXSQvLnRlc3QodG9rZW4pKSB7XG5cdCAgICByZXR1cm4gdG9rZW4uc3Vic3RyKDEsIHRva2VuLmxlbmd0aCAtIDIpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZXR1cm4gdG9rZW47XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gc3RyaXBGbGFncyhvcGVuLCBjbG9zZSkge1xuXHQgIHJldHVybiB7XG5cdCAgICBvcGVuOiBvcGVuLmNoYXJBdCgyKSA9PT0gJ34nLFxuXHQgICAgY2xvc2U6IGNsb3NlLmNoYXJBdChjbG9zZS5sZW5ndGggLSAzKSA9PT0gJ34nXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmlwQ29tbWVudChjb21tZW50KSB7XG5cdCAgcmV0dXJuIGNvbW1lbnQucmVwbGFjZSgvXlxce1xce34/IS0/LT8vLCAnJykucmVwbGFjZSgvLT8tP34/XFx9XFx9JC8sICcnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXRoKGRhdGEsIHBhcnRzLCBsb2MpIHtcblx0ICBsb2MgPSB0aGlzLmxvY0luZm8obG9jKTtcblxuXHQgIHZhciBvcmlnaW5hbCA9IGRhdGEgPyAnQCcgOiAnJyxcblx0ICAgICAgZGlnID0gW10sXG5cdCAgICAgIGRlcHRoID0gMDtcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICB2YXIgcGFydCA9IHBhcnRzW2ldLnBhcnQsXG5cblx0ICAgIC8vIElmIHdlIGhhdmUgW10gc3ludGF4IHRoZW4gd2UgZG8gbm90IHRyZWF0IHBhdGggcmVmZXJlbmNlcyBhcyBvcGVyYXRvcnMsXG5cdCAgICAvLyBpLmUuIGZvby5bdGhpc10gcmVzb2x2ZXMgdG8gYXBwcm94aW1hdGVseSBjb250ZXh0LmZvb1sndGhpcyddXG5cdCAgICBpc0xpdGVyYWwgPSBwYXJ0c1tpXS5vcmlnaW5hbCAhPT0gcGFydDtcblx0ICAgIG9yaWdpbmFsICs9IChwYXJ0c1tpXS5zZXBhcmF0b3IgfHwgJycpICsgcGFydDtcblxuXHQgICAgaWYgKCFpc0xpdGVyYWwgJiYgKHBhcnQgPT09ICcuLicgfHwgcGFydCA9PT0gJy4nIHx8IHBhcnQgPT09ICd0aGlzJykpIHtcblx0ICAgICAgaWYgKGRpZy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgcGF0aDogJyArIG9yaWdpbmFsLCB7IGxvYzogbG9jIH0pO1xuXHQgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcblx0ICAgICAgICBkZXB0aCsrO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBkaWcucHVzaChwYXJ0KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgIGRhdGE6IGRhdGEsXG5cdCAgICBkZXB0aDogZGVwdGgsXG5cdCAgICBwYXJ0czogZGlnLFxuXHQgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuXHQgICAgbG9jOiBsb2Ncblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZU11c3RhY2hlKHBhdGgsIHBhcmFtcywgaGFzaCwgb3Blbiwgc3RyaXAsIGxvY0luZm8pIHtcblx0ICAvLyBNdXN0IHVzZSBjaGFyQXQgdG8gc3VwcG9ydCBJRSBwcmUtMTBcblx0ICB2YXIgZXNjYXBlRmxhZyA9IG9wZW4uY2hhckF0KDMpIHx8IG9wZW4uY2hhckF0KDIpLFxuXHQgICAgICBlc2NhcGVkID0gZXNjYXBlRmxhZyAhPT0gJ3snICYmIGVzY2FwZUZsYWcgIT09ICcmJztcblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW4pO1xuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yJyA6ICdNdXN0YWNoZVN0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBwYXRoLFxuXHQgICAgcGFyYW1zOiBwYXJhbXMsXG5cdCAgICBoYXNoOiBoYXNoLFxuXHQgICAgZXNjYXBlZDogZXNjYXBlZCxcblx0ICAgIHN0cmlwOiBzdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVSYXdCbG9jayhvcGVuUmF3QmxvY2ssIGNvbnRlbnRzLCBjbG9zZSwgbG9jSW5mbykge1xuXHQgIHZhbGlkYXRlQ2xvc2Uob3BlblJhd0Jsb2NrLCBjbG9zZSk7XG5cblx0ICBsb2NJbmZvID0gdGhpcy5sb2NJbmZvKGxvY0luZm8pO1xuXHQgIHZhciBwcm9ncmFtID0ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogY29udGVudHMsXG5cdCAgICBzdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBvcGVuUmF3QmxvY2sucGF0aCxcblx0ICAgIHBhcmFtczogb3BlblJhd0Jsb2NrLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW5SYXdCbG9jay5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIG9wZW5TdHJpcDoge30sXG5cdCAgICBpbnZlcnNlU3RyaXA6IHt9LFxuXHQgICAgY2xvc2VTdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZUJsb2NrKG9wZW5CbG9jaywgcHJvZ3JhbSwgaW52ZXJzZUFuZFByb2dyYW0sIGNsb3NlLCBpbnZlcnRlZCwgbG9jSW5mbykge1xuXHQgIGlmIChjbG9zZSAmJiBjbG9zZS5wYXRoKSB7XG5cdCAgICB2YWxpZGF0ZUNsb3NlKG9wZW5CbG9jaywgY2xvc2UpO1xuXHQgIH1cblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW5CbG9jay5vcGVuKTtcblxuXHQgIHByb2dyYW0uYmxvY2tQYXJhbXMgPSBvcGVuQmxvY2suYmxvY2tQYXJhbXM7XG5cblx0ICB2YXIgaW52ZXJzZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgaW52ZXJzZVN0cmlwID0gdW5kZWZpbmVkO1xuXG5cdCAgaWYgKGludmVyc2VBbmRQcm9ncmFtKSB7XG5cdCAgICBpZiAoZGVjb3JhdG9yKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yJywgaW52ZXJzZUFuZFByb2dyYW0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZUFuZFByb2dyYW0uY2hhaW4pIHtcblx0ICAgICAgaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbS5ib2R5WzBdLmNsb3NlU3RyaXAgPSBjbG9zZS5zdHJpcDtcblx0ICAgIH1cblxuXHQgICAgaW52ZXJzZVN0cmlwID0gaW52ZXJzZUFuZFByb2dyYW0uc3RyaXA7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbTtcblx0ICB9XG5cblx0ICBpZiAoaW52ZXJ0ZWQpIHtcblx0ICAgIGludmVydGVkID0gaW52ZXJzZTtcblx0ICAgIGludmVyc2UgPSBwcm9ncmFtO1xuXHQgICAgcHJvZ3JhbSA9IGludmVydGVkO1xuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yQmxvY2snIDogJ0Jsb2NrU3RhdGVtZW50Jyxcblx0ICAgIHBhdGg6IG9wZW5CbG9jay5wYXRoLFxuXHQgICAgcGFyYW1zOiBvcGVuQmxvY2sucGFyYW1zLFxuXHQgICAgaGFzaDogb3BlbkJsb2NrLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgaW52ZXJzZTogaW52ZXJzZSxcblx0ICAgIG9wZW5TdHJpcDogb3BlbkJsb2NrLnN0cmlwLFxuXHQgICAgaW52ZXJzZVN0cmlwOiBpbnZlcnNlU3RyaXAsXG5cdCAgICBjbG9zZVN0cmlwOiBjbG9zZSAmJiBjbG9zZS5zdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQcm9ncmFtKHN0YXRlbWVudHMsIGxvYykge1xuXHQgIGlmICghbG9jICYmIHN0YXRlbWVudHMubGVuZ3RoKSB7XG5cdCAgICB2YXIgZmlyc3RMb2MgPSBzdGF0ZW1lbnRzWzBdLmxvYyxcblx0ICAgICAgICBsYXN0TG9jID0gc3RhdGVtZW50c1tzdGF0ZW1lbnRzLmxlbmd0aCAtIDFdLmxvYztcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICAgIGlmIChmaXJzdExvYyAmJiBsYXN0TG9jKSB7XG5cdCAgICAgIGxvYyA9IHtcblx0ICAgICAgICBzb3VyY2U6IGZpcnN0TG9jLnNvdXJjZSxcblx0ICAgICAgICBzdGFydDoge1xuXHQgICAgICAgICAgbGluZTogZmlyc3RMb2Muc3RhcnQubGluZSxcblx0ICAgICAgICAgIGNvbHVtbjogZmlyc3RMb2Muc3RhcnQuY29sdW1uXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBlbmQ6IHtcblx0ICAgICAgICAgIGxpbmU6IGxhc3RMb2MuZW5kLmxpbmUsXG5cdCAgICAgICAgICBjb2x1bW46IGxhc3RMb2MuZW5kLmNvbHVtblxuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogc3RhdGVtZW50cyxcblx0ICAgIHN0cmlwOiB7fSxcblx0ICAgIGxvYzogbG9jXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXJ0aWFsQmxvY2sob3BlbiwgcHJvZ3JhbSwgY2xvc2UsIGxvY0luZm8pIHtcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKTtcblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnUGFydGlhbEJsb2NrU3RhdGVtZW50Jyxcblx0ICAgIG5hbWU6IG9wZW4ucGF0aCxcblx0ICAgIHBhcmFtczogb3Blbi5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgb3BlblN0cmlwOiBvcGVuLnN0cmlwLFxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5Db21waWxlciA9IENvbXBpbGVyO1xuXHRleHBvcnRzLnByZWNvbXBpbGUgPSBwcmVjb21waWxlO1xuXHRleHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfYXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0dmFyIF9hc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXN0KTtcblxuXHR2YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuXHRmdW5jdGlvbiBDb21waWxlcigpIHt9XG5cblx0Ly8gdGhlIGZvdW5kSGVscGVyIHJlZ2lzdGVyIHdpbGwgZGlzYW1iaWd1YXRlIGhlbHBlciBsb29rdXAgZnJvbSBmaW5kaW5nIGFcblx0Ly8gZnVuY3Rpb24gaW4gYSBjb250ZXh0LiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbXVzdGFjaGUgY29tcGF0aWJpbGl0eSwgd2hpY2hcblx0Ly8gcmVxdWlyZXMgdGhhdCBjb250ZXh0IGZ1bmN0aW9ucyBpbiBibG9ja3MgYXJlIGV2YWx1YXRlZCBieSBibG9ja0hlbHBlck1pc3NpbmcsXG5cdC8vIGFuZCB0aGVuIHByb2NlZWQgYXMgaWYgdGhlIHJlc3VsdGluZyB2YWx1ZSB3YXMgcHJvdmlkZWQgdG8gYmxvY2tIZWxwZXJNaXNzaW5nLlxuXG5cdENvbXBpbGVyLnByb3RvdHlwZSA9IHtcblx0ICBjb21waWxlcjogQ29tcGlsZXIsXG5cblx0ICBlcXVhbHM6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuXHQgICAgdmFyIGxlbiA9IHRoaXMub3Bjb2Rlcy5sZW5ndGg7XG5cdCAgICBpZiAob3RoZXIub3Bjb2Rlcy5sZW5ndGggIT09IGxlbikge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIG9wY29kZSA9IHRoaXMub3Bjb2Rlc1tpXSxcblx0ICAgICAgICAgIG90aGVyT3Bjb2RlID0gb3RoZXIub3Bjb2Rlc1tpXTtcblx0ICAgICAgaWYgKG9wY29kZS5vcGNvZGUgIT09IG90aGVyT3Bjb2RlLm9wY29kZSB8fCAhYXJnRXF1YWxzKG9wY29kZS5hcmdzLCBvdGhlck9wY29kZS5hcmdzKSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBXZSBrbm93IHRoYXQgbGVuZ3RoIGlzIHRoZSBzYW1lIGJldHdlZW4gdGhlIHR3byBhcnJheXMgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSB0aWVkXG5cdCAgICAvLyB0byB0aGUgb3Bjb2RlIGJlaGF2aW9yIGFib3ZlLlxuXHQgICAgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmICghdGhpcy5jaGlsZHJlbltpXS5lcXVhbHMob3RoZXIuY2hpbGRyZW5baV0pKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0sXG5cblx0ICBndWlkOiAwLFxuXG5cdCAgY29tcGlsZTogZnVuY3Rpb24gY29tcGlsZShwcm9ncmFtLCBvcHRpb25zKSB7XG5cdCAgICB0aGlzLnNvdXJjZU5vZGUgPSBbXTtcblx0ICAgIHRoaXMub3Bjb2RlcyA9IFtdO1xuXHQgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gb3B0aW9ucy5zdHJpbmdQYXJhbXM7XG5cdCAgICB0aGlzLnRyYWNrSWRzID0gb3B0aW9ucy50cmFja0lkcztcblxuXHQgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9IG9wdGlvbnMuYmxvY2tQYXJhbXMgfHwgW107XG5cblx0ICAgIC8vIFRoZXNlIGNoYW5nZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIG90aGVyIGNvbXBpbGVyIGNvbXBvbmVudHNcblx0ICAgIHZhciBrbm93bkhlbHBlcnMgPSBvcHRpb25zLmtub3duSGVscGVycztcblx0ICAgIG9wdGlvbnMua25vd25IZWxwZXJzID0ge1xuXHQgICAgICAnaGVscGVyTWlzc2luZyc6IHRydWUsXG5cdCAgICAgICdibG9ja0hlbHBlck1pc3NpbmcnOiB0cnVlLFxuXHQgICAgICAnZWFjaCc6IHRydWUsXG5cdCAgICAgICdpZic6IHRydWUsXG5cdCAgICAgICd1bmxlc3MnOiB0cnVlLFxuXHQgICAgICAnd2l0aCc6IHRydWUsXG5cdCAgICAgICdsb2cnOiB0cnVlLFxuXHQgICAgICAnbG9va3VwJzogdHJ1ZVxuXHQgICAgfTtcblx0ICAgIGlmIChrbm93bkhlbHBlcnMpIHtcblx0ICAgICAgLy8gdGhlIG5leHQgbGluZSBzaG91bGQgdXNlIFwiT2JqZWN0LmtleXNcIiwgYnV0IHRoZSBjb2RlIGhhcyBiZWVuIGxpa2UgdGhpcyBhIGxvbmcgdGltZSBhbmQgY2hhbmdpbmcgaXQsIG1pZ2h0XG5cdCAgICAgIC8vIGNhdXNlIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGlzc3Vlcy4uLiBJdCdzIGFuIG9sZCBsaWJyYXJ5Li4uXG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cblx0ICAgICAgZm9yICh2YXIgX25hbWUgaW4ga25vd25IZWxwZXJzKSB7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLmtub3duSGVscGVyc1tfbmFtZV0gPSBrbm93bkhlbHBlcnNbX25hbWVdO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLmFjY2VwdChwcm9ncmFtKTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZVByb2dyYW06IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHZhciBjaGlsZENvbXBpbGVyID0gbmV3IHRoaXMuY29tcGlsZXIoKSxcblx0ICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0ICAgIHJlc3VsdCA9IGNoaWxkQ29tcGlsZXIuY29tcGlsZShwcm9ncmFtLCB0aGlzLm9wdGlvbnMpLFxuXHQgICAgICAgIGd1aWQgPSB0aGlzLmd1aWQrKztcblxuXHQgICAgdGhpcy51c2VQYXJ0aWFsID0gdGhpcy51c2VQYXJ0aWFsIHx8IHJlc3VsdC51c2VQYXJ0aWFsO1xuXG5cdCAgICB0aGlzLmNoaWxkcmVuW2d1aWRdID0gcmVzdWx0O1xuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCByZXN1bHQudXNlRGVwdGhzO1xuXG5cdCAgICByZXR1cm4gZ3VpZDtcblx0ICB9LFxuXG5cdCAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQobm9kZSkge1xuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbbm9kZS50eXBlXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0eXBlOiAnICsgbm9kZS50eXBlLCBub2RlKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnVuc2hpZnQobm9kZSk7XG5cdCAgICB2YXIgcmV0ID0gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnNoaWZ0KCk7XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KHByb2dyYW0uYmxvY2tQYXJhbXMpO1xuXG5cdCAgICB2YXIgYm9keSA9IHByb2dyYW0uYm9keSxcblx0ICAgICAgICBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHlMZW5ndGg7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdChib2R5W2ldKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnNoaWZ0KCk7XG5cblx0ICAgIHRoaXMuaXNTaW1wbGUgPSBib2R5TGVuZ3RoID09PSAxO1xuXHQgICAgdGhpcy5ibG9ja1BhcmFtcyA9IHByb2dyYW0uYmxvY2tQYXJhbXMgPyBwcm9ncmFtLmJsb2NrUGFyYW1zLmxlbmd0aCA6IDA7XG5cblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH0sXG5cblx0ICBCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gQmxvY2tTdGF0ZW1lbnQoYmxvY2spIHtcblx0ICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoYmxvY2spO1xuXG5cdCAgICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0sXG5cdCAgICAgICAgaW52ZXJzZSA9IGJsb2NrLmludmVyc2U7XG5cblx0ICAgIHByb2dyYW0gPSBwcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0ocHJvZ3JhbSk7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGludmVyc2UpO1xuXG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihibG9jayk7XG5cblx0ICAgIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuXHQgICAgICB0aGlzLmhlbHBlclNleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihibG9jayk7XG5cblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2Bcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdibG9ja1ZhbHVlJywgYmxvY2sucGF0aC5vcmlnaW5hbCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblxuXHQgICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG5cdCAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FtYmlndW91c0Jsb2NrVmFsdWUnKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgIH0sXG5cblx0ICBEZWNvcmF0b3JCbG9jazogZnVuY3Rpb24gRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvZ3JhbSA9IGRlY29yYXRvci5wcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0oZGVjb3JhdG9yLnByb2dyYW0pO1xuXHQgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoZGVjb3JhdG9yLCBwcm9ncmFtLCB1bmRlZmluZWQpLFxuXHQgICAgICAgIHBhdGggPSBkZWNvcmF0b3IucGF0aDtcblxuXHQgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgIHRoaXMub3Bjb2RlKCdyZWdpc3RlckRlY29yYXRvcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwpO1xuXHQgIH0sXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHRoaXMudXNlUGFydGlhbCA9IHRydWU7XG5cblx0ICAgIHZhciBwcm9ncmFtID0gcGFydGlhbC5wcm9ncmFtO1xuXHQgICAgaWYgKHByb2dyYW0pIHtcblx0ICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocGFydGlhbC5wcm9ncmFtKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcmFtcyA9IHBhcnRpYWwucGFyYW1zO1xuXHQgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbnN1cHBvcnRlZCBudW1iZXIgb2YgcGFydGlhbCBhcmd1bWVudHM6ICcgKyBwYXJhbXMubGVuZ3RoLCBwYXJ0aWFsKTtcblx0ICAgIH0gZWxzZSBpZiAoIXBhcmFtcy5sZW5ndGgpIHtcblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHBsaWNpdFBhcnRpYWxDb250ZXh0KSB7XG5cdCAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHBhcmFtcy5wdXNoKHsgdHlwZTogJ1BhdGhFeHByZXNzaW9uJywgcGFydHM6IFtdLCBkZXB0aDogMCB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFydGlhbE5hbWUgPSBwYXJ0aWFsLm5hbWUub3JpZ2luYWwsXG5cdCAgICAgICAgaXNEeW5hbWljID0gcGFydGlhbC5uYW1lLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJztcblx0ICAgIGlmIChpc0R5bmFtaWMpIHtcblx0ICAgICAgdGhpcy5hY2NlcHQocGFydGlhbC5uYW1lKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhwYXJ0aWFsLCBwcm9ncmFtLCB1bmRlZmluZWQsIHRydWUpO1xuXG5cdCAgICB2YXIgaW5kZW50ID0gcGFydGlhbC5pbmRlbnQgfHwgJyc7XG5cdCAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRJbmRlbnQgJiYgaW5kZW50KSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgaW5kZW50KTtcblx0ICAgICAgaW5kZW50ID0gJyc7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdpbnZva2VQYXJ0aWFsJywgaXNEeW5hbWljLCBwYXJ0aWFsTmFtZSwgaW5kZW50KTtcblx0ICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICB9LFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWxCbG9jaykge1xuXHQgICAgdGhpcy5QYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWxCbG9jayk7XG5cdCAgfSxcblxuXHQgIE11c3RhY2hlU3RhdGVtZW50OiBmdW5jdGlvbiBNdXN0YWNoZVN0YXRlbWVudChtdXN0YWNoZSkge1xuXHQgICAgdGhpcy5TdWJFeHByZXNzaW9uKG11c3RhY2hlKTtcblxuXHQgICAgaWYgKG11c3RhY2hlLmVzY2FwZWQgJiYgIXRoaXMub3B0aW9ucy5ub0VzY2FwZSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kRXNjYXBlZCcpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgRGVjb3JhdG9yOiBmdW5jdGlvbiBEZWNvcmF0b3IoZGVjb3JhdG9yKSB7XG5cdCAgICB0aGlzLkRlY29yYXRvckJsb2NrKGRlY29yYXRvcik7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoY29udGVudCkge1xuXHQgICAgaWYgKGNvbnRlbnQudmFsdWUpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBjb250ZW50LnZhbHVlKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIHt9LFxuXG5cdCAgU3ViRXhwcmVzc2lvbjogZnVuY3Rpb24gU3ViRXhwcmVzc2lvbihzZXhwcikge1xuXHQgICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcik7XG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihzZXhwcik7XG5cblx0ICAgIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuXHQgICAgICB0aGlzLnNpbXBsZVNleHByKHNleHByKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihzZXhwcik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKHNleHByKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGFtYmlndW91c1NleHByOiBmdW5jdGlvbiBhbWJpZ3VvdXNTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSkge1xuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoLFxuXHQgICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIGlzQmxvY2sgPSBwcm9ncmFtICE9IG51bGwgfHwgaW52ZXJzZSAhPSBudWxsO1xuXG5cdCAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHBhdGguZGVwdGgpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICB0aGlzLmFjY2VwdChwYXRoKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUFtYmlndW91cycsIG5hbWUsIGlzQmxvY2spO1xuXHQgIH0sXG5cblx0ICBzaW1wbGVTZXhwcjogZnVuY3Rpb24gc2ltcGxlU2V4cHIoc2V4cHIpIHtcblx0ICAgIHZhciBwYXRoID0gc2V4cHIucGF0aDtcblx0ICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3Jlc29sdmVQb3NzaWJsZUxhbWJkYScpO1xuXHQgIH0sXG5cblx0ICBoZWxwZXJTZXhwcjogZnVuY3Rpb24gaGVscGVyU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcblx0ICAgIHZhciBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSxcblx0ICAgICAgICBwYXRoID0gc2V4cHIucGF0aCxcblx0ICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXTtcblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUtub3duSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgbmFtZSk7XG5cdCAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciAnICsgbmFtZSwgc2V4cHIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgICBwYXRoLmZhbHN5ID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmFjY2VwdChwYXRoKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwsIF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zaW1wbGVJZChwYXRoKSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbihwYXRoKSB7XG5cdCAgICB0aGlzLmFkZERlcHRoKHBhdGguZGVwdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuXHQgICAgdmFyIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIHNjb3BlZCA9IF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zY29wZWRJZChwYXRoKSxcblx0ICAgICAgICBibG9ja1BhcmFtSWQgPSAhcGF0aC5kZXB0aCAmJiAhc2NvcGVkICYmIHRoaXMuYmxvY2tQYXJhbUluZGV4KG5hbWUpO1xuXG5cdCAgICBpZiAoYmxvY2tQYXJhbUlkKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBCbG9ja1BhcmFtJywgYmxvY2tQYXJhbUlkLCBwYXRoLnBhcnRzKTtcblx0ICAgIH0gZWxzZSBpZiAoIW5hbWUpIHtcblx0ICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoQ29udGV4dCcpO1xuXHQgICAgfSBlbHNlIGlmIChwYXRoLmRhdGEpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwRGF0YScsIHBhdGguZGVwdGgsIHBhdGgucGFydHMsIHBhdGguc3RyaWN0KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBPbkNvbnRleHQnLCBwYXRoLnBhcnRzLCBwYXRoLmZhbHN5LCBwYXRoLnN0cmljdCwgc2NvcGVkKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24gU3RyaW5nTGl0ZXJhbChzdHJpbmcpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nJywgc3RyaW5nLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbChudW1iZXIpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIG51bWJlci52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbChib29sKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBib29sLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24gVW5kZWZpbmVkTGl0ZXJhbCgpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcblx0ICB9LFxuXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ251bGwnKTtcblx0ICB9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB2YXIgcGFpcnMgPSBoYXNoLnBhaXJzLFxuXHQgICAgICAgIGkgPSAwLFxuXHQgICAgICAgIGwgPSBwYWlycy5sZW5ndGg7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoSGFzaCcpO1xuXG5cdCAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYWlyc1tpXS52YWx1ZSk7XG5cdCAgICB9XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhc3NpZ25Ub0hhc2gnLCBwYWlyc1tpXS5rZXkpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5vcGNvZGUoJ3BvcEhhc2gnKTtcblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXHQgIG9wY29kZTogZnVuY3Rpb24gb3Bjb2RlKG5hbWUpIHtcblx0ICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHsgb3Bjb2RlOiBuYW1lLCBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGxvYzogdGhpcy5zb3VyY2VOb2RlWzBdLmxvYyB9KTtcblx0ICB9LFxuXG5cdCAgYWRkRGVwdGg6IGZ1bmN0aW9uIGFkZERlcHRoKGRlcHRoKSB7XG5cdCAgICBpZiAoIWRlcHRoKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0cnVlO1xuXHQgIH0sXG5cblx0ICBjbGFzc2lmeVNleHByOiBmdW5jdGlvbiBjbGFzc2lmeVNleHByKHNleHByKSB7XG5cdCAgICB2YXIgaXNTaW1wbGUgPSBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2ltcGxlSWQoc2V4cHIucGF0aCk7XG5cblx0ICAgIHZhciBpc0Jsb2NrUGFyYW0gPSBpc1NpbXBsZSAmJiAhIXRoaXMuYmxvY2tQYXJhbUluZGV4KHNleHByLnBhdGgucGFydHNbMF0pO1xuXG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBpZjpcblx0ICAgIC8vICogaXRzIGlkIGlzIHNpbXBsZSAoYSBzaW5nbGUgcGFydCwgbm90IGB0aGlzYCBvciBgLi5gKVxuXHQgICAgdmFyIGlzSGVscGVyID0gIWlzQmxvY2tQYXJhbSAmJiBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuaGVscGVyRXhwcmVzc2lvbihzZXhwcik7XG5cblx0ICAgIC8vIGlmIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGJ1dCBub3QgYSBkZWZpbml0ZVxuXHQgICAgLy8gaGVscGVyLCBpdCBpcyBhbWJpZ3VvdXMsIGFuZCB3aWxsIGJlIHJlc29sdmVkIGluIGEgbGF0ZXJcblx0ICAgIC8vIHBhc3Mgb3IgYXQgcnVudGltZS5cblx0ICAgIHZhciBpc0VsaWdpYmxlID0gIWlzQmxvY2tQYXJhbSAmJiAoaXNIZWxwZXIgfHwgaXNTaW1wbGUpO1xuXG5cdCAgICAvLyBpZiBhbWJpZ3VvdXMsIHdlIGNhbiBwb3NzaWJseSByZXNvbHZlIHRoZSBhbWJpZ3VpdHkgbm93XG5cdCAgICAvLyBBbiBlbGlnaWJsZSBoZWxwZXIgaXMgb25lIHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvbXBsZXggcGF0aCwgaS5lLiBgdGhpcy5mb29gLCBgLi4vZm9vYCBldGMuXG5cdCAgICBpZiAoaXNFbGlnaWJsZSAmJiAhaXNIZWxwZXIpIHtcblx0ICAgICAgdmFyIF9uYW1lMiA9IHNleHByLnBhdGgucGFydHNbMF0sXG5cdCAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdCAgICAgIGlmIChvcHRpb25zLmtub3duSGVscGVyc1tfbmFtZTJdKSB7XG5cdCAgICAgICAgaXNIZWxwZXIgPSB0cnVlO1xuXHQgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuXHQgICAgICAgIGlzRWxpZ2libGUgPSBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaXNIZWxwZXIpIHtcblx0ICAgICAgcmV0dXJuICdoZWxwZXInO1xuXHQgICAgfSBlbHNlIGlmIChpc0VsaWdpYmxlKSB7XG5cdCAgICAgIHJldHVybiAnYW1iaWd1b3VzJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnc2ltcGxlJztcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaFBhcmFtczogZnVuY3Rpb24gcHVzaFBhcmFtcyhwYXJhbXMpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYXJhbXNbaV0pO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoUGFyYW06IGZ1bmN0aW9uIHB1c2hQYXJhbSh2YWwpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHZhbC52YWx1ZSAhPSBudWxsID8gdmFsLnZhbHVlIDogdmFsLm9yaWdpbmFsIHx8ICcnO1xuXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oXFwuP1xcLlxcLykqL2csICcnKS5yZXBsYWNlKC9cXC8vZywgJy4nKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICh2YWwuZGVwdGgpIHtcblx0ICAgICAgICB0aGlzLmFkZERlcHRoKHZhbC5kZXB0aCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCB2YWwuZGVwdGggfHwgMCk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nUGFyYW0nLCB2YWx1ZSwgdmFsLnR5cGUpO1xuXG5cdCAgICAgIGlmICh2YWwudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgICAgLy8gU3ViRXhwcmVzc2lvbnMgZ2V0IGV2YWx1YXRlZCBhbmQgcGFzc2VkIGluXG5cdCAgICAgICAgLy8gaW4gc3RyaW5nIHBhcmFtcyBtb2RlLlxuXHQgICAgICAgIHRoaXMuYWNjZXB0KHZhbCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgICAgdmFyIGJsb2NrUGFyYW1JbmRleCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICBpZiAodmFsLnBhcnRzICYmICFfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQodmFsKSAmJiAhdmFsLmRlcHRoKSB7XG5cdCAgICAgICAgICBibG9ja1BhcmFtSW5kZXggPSB0aGlzLmJsb2NrUGFyYW1JbmRleCh2YWwucGFydHNbMF0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoYmxvY2tQYXJhbUluZGV4KSB7XG5cdCAgICAgICAgICB2YXIgYmxvY2tQYXJhbUNoaWxkID0gdmFsLnBhcnRzLnNsaWNlKDEpLmpvaW4oJy4nKTtcblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCAnQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JbmRleCwgYmxvY2tQYXJhbUNoaWxkKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdmFsdWUgPSB2YWwub3JpZ2luYWwgfHwgdmFsdWU7XG5cdCAgICAgICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL150aGlzKD86XFwufCQpLywgJycpLnJlcGxhY2UoL15cXC5cXC8vLCAnJykucmVwbGFjZSgvXlxcLiQvLCAnJyk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCB2YWwudHlwZSwgdmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24gc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UsIG9taXRFbXB0eSkge1xuXHQgICAgdmFyIHBhcmFtcyA9IHNleHByLnBhcmFtcztcblx0ICAgIHRoaXMucHVzaFBhcmFtcyhwYXJhbXMpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBpZiAoc2V4cHIuaGFzaCkge1xuXHQgICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnLCBvbWl0RW1wdHkpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcGFyYW1zO1xuXHQgIH0sXG5cblx0ICBibG9ja1BhcmFtSW5kZXg6IGZ1bmN0aW9uIGJsb2NrUGFyYW1JbmRleChuYW1lKSB7XG5cdCAgICBmb3IgKHZhciBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XG5cdCAgICAgIHZhciBibG9ja1BhcmFtcyA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtc1tkZXB0aF0sXG5cdCAgICAgICAgICBwYXJhbSA9IGJsb2NrUGFyYW1zICYmIF91dGlscy5pbmRleE9mKGJsb2NrUGFyYW1zLCBuYW1lKTtcblx0ICAgICAgaWYgKGJsb2NrUGFyYW1zICYmIHBhcmFtID49IDApIHtcblx0ICAgICAgICByZXR1cm4gW2RlcHRoLCBwYXJhbV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0ZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG5cdCAgaWYgKGlucHV0ID09IG51bGwgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyAmJiBpbnB1dC50eXBlICE9PSAnUHJvZ3JhbScpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xuXHQgIH1cblxuXHQgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuXHQgICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfVxuXG5cdCAgdmFyIGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG5cdCAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKTtcblx0ICByZXR1cm4gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuXHQgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcblxuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLmNvbXBpbGUuIFlvdSBwYXNzZWQgJyArIGlucHV0KTtcblx0ICB9XG5cblx0ICBvcHRpb25zID0gX3V0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XG5cdCAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgIH1cblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcblx0ICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9XG5cblx0ICB2YXIgY29tcGlsZWQgPSB1bmRlZmluZWQ7XG5cblx0ICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XG5cdCAgICB2YXIgYXN0ID0gZW52LnBhcnNlKGlucHV0LCBvcHRpb25zKSxcblx0ICAgICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyksXG5cdCAgICAgICAgdGVtcGxhdGVTcGVjID0gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCB1bmRlZmluZWQsIHRydWUpO1xuXHQgICAgcmV0dXJuIGVudi50ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMpO1xuXHQgIH1cblxuXHQgIC8vIFRlbXBsYXRlIGlzIG9ubHkgY29tcGlsZWQgb24gZmlyc3QgdXNlIGFuZCBjYWNoZWQgYWZ0ZXIgdGhhdCBwb2ludC5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCwgZXhlY09wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5jYWxsKHRoaXMsIGNvbnRleHQsIGV4ZWNPcHRpb25zKTtcblx0ICB9XG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChzZXR1cE9wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5fc2V0dXAoc2V0dXBPcHRpb25zKTtcblx0ICB9O1xuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKCFjb21waWxlZCkge1xuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLl9jaGlsZChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICB9O1xuXHQgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhcmdFcXVhbHMoYSwgYikge1xuXHQgIGlmIChhID09PSBiKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cblx0ICBpZiAoX3V0aWxzLmlzQXJyYXkoYSkgJiYgX3V0aWxzLmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgaWYgKCFhcmdFcXVhbHMoYVtpXSwgYltpXSkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpIHtcblx0ICBpZiAoIXNleHByLnBhdGgucGFydHMpIHtcblx0ICAgIHZhciBsaXRlcmFsID0gc2V4cHIucGF0aDtcblx0ICAgIC8vIENhc3RpbmcgdG8gc3RyaW5nIGhlcmUgdG8gbWFrZSBmYWxzZSBhbmQgMCBsaXRlcmFsIHZhbHVlcyBwbGF5IG5pY2VseSB3aXRoIHRoZSByZXN0XG5cdCAgICAvLyBvZiB0aGUgc3lzdGVtLlxuXHQgICAgc2V4cHIucGF0aCA9IHtcblx0ICAgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgICAgZGF0YTogZmFsc2UsXG5cdCAgICAgIGRlcHRoOiAwLFxuXHQgICAgICBwYXJ0czogW2xpdGVyYWwub3JpZ2luYWwgKyAnJ10sXG5cdCAgICAgIG9yaWdpbmFsOiBsaXRlcmFsLm9yaWdpbmFsICsgJycsXG5cdCAgICAgIGxvYzogbGl0ZXJhbC5sb2Ncblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0pLFxuLyogNDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfY29kZUdlbiA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXG5cdHZhciBfY29kZUdlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2RlR2VuKTtcblxuXHRmdW5jdGlvbiBMaXRlcmFsKHZhbHVlKSB7XG5cdCAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gSmF2YVNjcmlwdENvbXBpbGVyKCkge31cblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuXHQgIC8vIFBVQkxJQyBBUEk6IFlvdSBjYW4gb3ZlcnJpZGUgdGhlc2UgbWV0aG9kcyBpbiBhIHN1YmNsYXNzIHRvIHByb3ZpZGVcblx0ICAvLyBhbHRlcm5hdGl2ZSBjb21waWxlZCBmb3JtcyBmb3IgbmFtZSBsb29rdXAgYW5kIGJ1ZmZlcmluZyBzZW1hbnRpY3Ncblx0ICBuYW1lTG9va3VwOiBmdW5jdGlvbiBuYW1lTG9va3VwKHBhcmVudCwgbmFtZSAvKiAsIHR5cGUqLykge1xuXHQgICAgaWYgKG5hbWUgPT09ICdjb25zdHJ1Y3RvcicpIHtcblx0ICAgICAgcmV0dXJuIFsnKCcsIHBhcmVudCwgJy5wcm9wZXJ0eUlzRW51bWVyYWJsZShcXCdjb25zdHJ1Y3RvclxcJykgPyAnLCBwYXJlbnQsICcuY29uc3RydWN0b3IgOiB1bmRlZmluZWQnLCAnKSddO1xuXHQgICAgfVxuXHQgICAgaWYgKEphdmFTY3JpcHRDb21waWxlci5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZShuYW1lKSkge1xuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJy4nLCBuYW1lXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBbcGFyZW50LCAnWycsIEpTT04uc3RyaW5naWZ5KG5hbWUpLCAnXSddO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgZGVwdGhlZExvb2t1cDogZnVuY3Rpb24gZGVwdGhlZExvb2t1cChuYW1lKSB7XG5cdCAgICByZXR1cm4gW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubG9va3VwJyksICcoZGVwdGhzLCBcIicsIG5hbWUsICdcIiknXTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZXJJbmZvOiBmdW5jdGlvbiBjb21waWxlckluZm8oKSB7XG5cdCAgICB2YXIgcmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTixcblx0ICAgICAgICB2ZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbcmV2aXNpb25dO1xuXHQgICAgcmV0dXJuIFtyZXZpc2lvbiwgdmVyc2lvbnNdO1xuXHQgIH0sXG5cblx0ICBhcHBlbmRUb0J1ZmZlcjogZnVuY3Rpb24gYXBwZW5kVG9CdWZmZXIoc291cmNlLCBsb2NhdGlvbiwgZXhwbGljaXQpIHtcblx0ICAgIC8vIEZvcmNlIGEgc291cmNlIGFzIHRoaXMgc2ltcGxpZmllcyB0aGUgbWVyZ2UgbG9naWMuXG5cdCAgICBpZiAoIV91dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcblx0ICAgICAgc291cmNlID0gW3NvdXJjZV07XG5cdCAgICB9XG5cdCAgICBzb3VyY2UgPSB0aGlzLnNvdXJjZS53cmFwKHNvdXJjZSwgbG9jYXRpb24pO1xuXG5cdCAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuXHQgICAgICByZXR1cm4gWydyZXR1cm4gJywgc291cmNlLCAnOyddO1xuXHQgICAgfSBlbHNlIGlmIChleHBsaWNpdCkge1xuXHQgICAgICAvLyBUaGlzIGlzIGEgY2FzZSB3aGVyZSB0aGUgYnVmZmVyIG9wZXJhdGlvbiBvY2N1cnMgYXMgYSBjaGlsZCBvZiBhbm90aGVyXG5cdCAgICAgIC8vIGNvbnN0cnVjdCwgZ2VuZXJhbGx5IGJyYWNlcy4gV2UgaGF2ZSB0byBleHBsaWNpdGx5IG91dHB1dCB0aGVzZSBidWZmZXJcblx0ICAgICAgLy8gb3BlcmF0aW9ucyB0byBlbnN1cmUgdGhhdCB0aGUgZW1pdHRlZCBjb2RlIGdvZXMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG5cdCAgICAgIHJldHVybiBbJ2J1ZmZlciArPSAnLCBzb3VyY2UsICc7J107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzb3VyY2UuYXBwZW5kVG9CdWZmZXIgPSB0cnVlO1xuXHQgICAgICByZXR1cm4gc291cmNlO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBpbml0aWFsaXplQnVmZmVyOiBmdW5jdGlvbiBpbml0aWFsaXplQnVmZmVyKCkge1xuXHQgICAgcmV0dXJuIHRoaXMucXVvdGVkU3RyaW5nKCcnKTtcblx0ICB9LFxuXHQgIC8vIEVORCBQVUJMSUMgQVBJXG5cblx0ICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCBjb250ZXh0LCBhc09iamVjdCkge1xuXHQgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gdGhpcy5vcHRpb25zLnN0cmluZ1BhcmFtcztcblx0ICAgIHRoaXMudHJhY2tJZHMgPSB0aGlzLm9wdGlvbnMudHJhY2tJZHM7XG5cdCAgICB0aGlzLnByZWNvbXBpbGUgPSAhYXNPYmplY3Q7XG5cblx0ICAgIHRoaXMubmFtZSA9IHRoaXMuZW52aXJvbm1lbnQubmFtZTtcblx0ICAgIHRoaXMuaXNDaGlsZCA9ICEhY29udGV4dDtcblx0ICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge1xuXHQgICAgICBkZWNvcmF0b3JzOiBbXSxcblx0ICAgICAgcHJvZ3JhbXM6IFtdLFxuXHQgICAgICBlbnZpcm9ubWVudHM6IFtdXG5cdCAgICB9O1xuXG5cdCAgICB0aGlzLnByZWFtYmxlKCk7XG5cblx0ICAgIHRoaXMuc3RhY2tTbG90ID0gMDtcblx0ICAgIHRoaXMuc3RhY2tWYXJzID0gW107XG5cdCAgICB0aGlzLmFsaWFzZXMgPSB7fTtcblx0ICAgIHRoaXMucmVnaXN0ZXJzID0geyBsaXN0OiBbXSB9O1xuXHQgICAgdGhpcy5oYXNoZXMgPSBbXTtcblx0ICAgIHRoaXMuY29tcGlsZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmlubGluZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmJsb2NrUGFyYW1zID0gW107XG5cblx0ICAgIHRoaXMuY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKTtcblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBlbnZpcm9ubWVudC51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVjb3JhdG9ycyB8fCB0aGlzLm9wdGlvbnMuY29tcGF0O1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZW52aXJvbm1lbnQudXNlQmxvY2tQYXJhbXM7XG5cblx0ICAgIHZhciBvcGNvZGVzID0gZW52aXJvbm1lbnQub3Bjb2Rlcyxcblx0ICAgICAgICBvcGNvZGUgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgZmlyc3RMb2MgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgaSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBsID0gdW5kZWZpbmVkO1xuXG5cdCAgICBmb3IgKGkgPSAwLCBsID0gb3Bjb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgb3Bjb2RlID0gb3Bjb2Rlc1tpXTtcblxuXHQgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBvcGNvZGUubG9jO1xuXHQgICAgICBmaXJzdExvYyA9IGZpcnN0TG9jIHx8IG9wY29kZS5sb2M7XG5cdCAgICAgIHRoaXNbb3Bjb2RlLm9wY29kZV0uYXBwbHkodGhpcywgb3Bjb2RlLmFyZ3MpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGbHVzaCBhbnkgdHJhaWxpbmcgY29udGVudCB0aGF0IG1pZ2h0IGJlIHBlbmRpbmcuXG5cdCAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBmaXJzdExvYztcblx0ICAgIHRoaXMucHVzaFNvdXJjZSgnJyk7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICBpZiAodGhpcy5zdGFja1Nsb3QgfHwgdGhpcy5pbmxpbmVTdGFjay5sZW5ndGggfHwgdGhpcy5jb21waWxlU3RhY2subGVuZ3RoKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdDb21waWxlIGNvbXBsZXRlZCB3aXRoIGNvbnRlbnQgbGVmdCBvbiBzdGFjaycpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoIXRoaXMuZGVjb3JhdG9ycy5pc0VtcHR5KCkpIHtcblx0ICAgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmRlY29yYXRvcnMucHJlcGVuZCgndmFyIGRlY29yYXRvcnMgPSBjb250YWluZXIuZGVjb3JhdG9ycztcXG4nKTtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ3JldHVybiBmbjsnKTtcblxuXHQgICAgICBpZiAoYXNPYmplY3QpIHtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSBGdW5jdGlvbi5hcHBseSh0aGlzLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnZGF0YScsICdibG9ja1BhcmFtcycsICdkZXB0aHMnLCB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKV0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKCdmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGgwLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XFxuJyk7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ31cXG4nKTtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSB0aGlzLmNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCk7XG5cdCAgICBpZiAoIXRoaXMuaXNDaGlsZCkge1xuXHQgICAgICB2YXIgcmV0ID0ge1xuXHQgICAgICAgIGNvbXBpbGVyOiB0aGlzLmNvbXBpbGVySW5mbygpLFxuXHQgICAgICAgIG1haW46IGZuXG5cdCAgICAgIH07XG5cblx0ICAgICAgaWYgKHRoaXMuZGVjb3JhdG9ycykge1xuXHQgICAgICAgIHJldC5tYWluX2QgPSB0aGlzLmRlY29yYXRvcnM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG5cdCAgICAgICAgcmV0LnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIF9jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXHQgICAgICB2YXIgcHJvZ3JhbXMgPSBfY29udGV4dC5wcm9ncmFtcztcblx0ICAgICAgdmFyIGRlY29yYXRvcnMgPSBfY29udGV4dC5kZWNvcmF0b3JzO1xuXG5cdCAgICAgIGZvciAoaSA9IDAsIGwgPSBwcm9ncmFtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgICBpZiAocHJvZ3JhbXNbaV0pIHtcblx0ICAgICAgICAgIHJldFtpXSA9IHByb2dyYW1zW2ldO1xuXHQgICAgICAgICAgaWYgKGRlY29yYXRvcnNbaV0pIHtcblx0ICAgICAgICAgICAgcmV0W2kgKyAnX2QnXSA9IGRlY29yYXRvcnNbaV07XG5cdCAgICAgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC51c2VQYXJ0aWFsKSB7XG5cdCAgICAgICAgcmV0LnVzZVBhcnRpYWwgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuXHQgICAgICAgIHJldC51c2VEYXRhID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgICByZXQudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcykge1xuXHQgICAgICAgIHJldC51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgICByZXQuY29tcGF0ID0gdHJ1ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICghYXNPYmplY3QpIHtcblx0ICAgICAgICByZXQuY29tcGlsZXIgPSBKU09OLnN0cmluZ2lmeShyZXQuY29tcGlsZXIpO1xuXG5cdCAgICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0geyBzdGFydDogeyBsaW5lOiAxLCBjb2x1bW46IDAgfSB9O1xuXHQgICAgICAgIHJldCA9IHRoaXMub2JqZWN0TGl0ZXJhbChyZXQpO1xuXG5cdCAgICAgICAgaWYgKG9wdGlvbnMuc3JjTmFtZSkge1xuXHQgICAgICAgICAgcmV0ID0gcmV0LnRvU3RyaW5nV2l0aFNvdXJjZU1hcCh7IGZpbGU6IG9wdGlvbnMuZGVzdE5hbWUgfSk7XG5cdCAgICAgICAgICByZXQubWFwID0gcmV0Lm1hcCAmJiByZXQubWFwLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldCA9IHJldC50b1N0cmluZygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXQuY29tcGlsZXJPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBmbjtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHJlYW1ibGU6IGZ1bmN0aW9uIHByZWFtYmxlKCkge1xuXHQgICAgLy8gdHJhY2sgdGhlIGxhc3QgY29udGV4dCBwdXNoZWQgaW50byBwbGFjZSB0byBhbGxvdyBza2lwcGluZyB0aGVcblx0ICAgIC8vIGdldENvbnRleHQgb3Bjb2RlIHdoZW4gaXQgd291bGQgYmUgYSBub29wXG5cdCAgICB0aGlzLmxhc3RDb250ZXh0ID0gMDtcblx0ICAgIHRoaXMuc291cmNlID0gbmV3IF9jb2RlR2VuMlsnZGVmYXVsdCddKHRoaXMub3B0aW9ucy5zcmNOYW1lKTtcblx0ICAgIHRoaXMuZGVjb3JhdG9ycyA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XG5cdCAgfSxcblxuXHQgIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dDogZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25Db250ZXh0KGFzT2JqZWN0KSB7XG5cdCAgICB2YXIgdmFyRGVjbGFyYXRpb25zID0gJyc7XG5cblx0ICAgIHZhciBsb2NhbHMgPSB0aGlzLnN0YWNrVmFycy5jb25jYXQodGhpcy5yZWdpc3RlcnMubGlzdCk7XG5cdCAgICBpZiAobG9jYWxzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsICcgKyBsb2NhbHMuam9pbignLCAnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gR2VuZXJhdGUgbWluaW1pemVyIGFsaWFzIG1hcHBpbmdzXG5cdCAgICAvL1xuXHQgICAgLy8gV2hlbiB1c2luZyB0cnVlIFNvdXJjZU5vZGVzLCB0aGlzIHdpbGwgdXBkYXRlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSBnaXZlbiBhbGlhc1xuXHQgICAgLy8gYXMgdGhlIHNvdXJjZSBub2RlcyBhcmUgcmV1c2VkIGluIHNpdHUuIEZvciB0aGUgbm9uLXNvdXJjZSBub2RlIGNvbXBpbGF0aW9uIG1vZGUsXG5cdCAgICAvLyBhbGlhc2VzIHdpbGwgbm90IGJlIHVzZWQsIGJ1dCB0aGlzIGNhc2UgaXMgYWxyZWFkeSBiZWluZyBydW4gb24gdGhlIGNsaWVudCBhbmRcblx0ICAgIC8vIHdlIGFyZW4ndCBjb25jZXJuIGFib3V0IG1pbmltaXppbmcgdGhlIHRlbXBsYXRlIHNpemUuXG5cdCAgICB2YXIgYWxpYXNDb3VudCA9IDA7XG5cdCAgICBmb3IgKHZhciBhbGlhcyBpbiB0aGlzLmFsaWFzZXMpIHtcblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cblx0ICAgICAgdmFyIG5vZGUgPSB0aGlzLmFsaWFzZXNbYWxpYXNdO1xuXG5cdCAgICAgIGlmICh0aGlzLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoYWxpYXMpICYmIG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5yZWZlcmVuY2VDb3VudCA+IDEpIHtcblx0ICAgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYWxpYXMnICsgKythbGlhc0NvdW50ICsgJz0nICsgYWxpYXM7XG5cdCAgICAgICAgbm9kZS5jaGlsZHJlblswXSA9ICdhbGlhcycgKyBhbGlhc0NvdW50O1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJhbXMgPSBbJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnaGVscGVycycsICdwYXJ0aWFscycsICdkYXRhJ107XG5cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gUGVyZm9ybSBhIHNlY29uZCBwYXNzIG92ZXIgdGhlIG91dHB1dCB0byBtZXJnZSBjb250ZW50IHdoZW4gcG9zc2libGVcblx0ICAgIHZhciBzb3VyY2UgPSB0aGlzLm1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucyk7XG5cblx0ICAgIGlmIChhc09iamVjdCkge1xuXHQgICAgICBwYXJhbXMucHVzaChzb3VyY2UpO1xuXG5cdCAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseSh0aGlzLCBwYXJhbXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc291cmNlLndyYXAoWydmdW5jdGlvbignLCBwYXJhbXMuam9pbignLCcpLCAnKSB7XFxuICAnLCBzb3VyY2UsICd9J10pO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWVyZ2VTb3VyY2U6IGZ1bmN0aW9uIG1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucykge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSxcblx0ICAgICAgICBhcHBlbmRPbmx5ID0gIXRoaXMuZm9yY2VCdWZmZXIsXG5cdCAgICAgICAgYXBwZW5kRmlyc3QgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgc291cmNlU2VlbiA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJTdGFydCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJFbmQgPSB1bmRlZmluZWQ7XG5cdCAgICB0aGlzLnNvdXJjZS5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgIGlmIChsaW5lLmFwcGVuZFRvQnVmZmVyKSB7XG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgICBsaW5lLnByZXBlbmQoJyAgKyAnKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgYnVmZmVyU3RhcnQgPSBsaW5lO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBidWZmZXJFbmQgPSBsaW5lO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgICAgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgICAgIGFwcGVuZEZpcnN0ID0gdHJ1ZTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ2J1ZmZlciArPSAnKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNvdXJjZVNlZW4gPSB0cnVlO1xuXHQgICAgICAgIGlmICghaXNTaW1wbGUpIHtcblx0ICAgICAgICAgIGFwcGVuZE9ubHkgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBpZiAoYXBwZW5kT25seSkge1xuXHQgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gJyk7XG5cdCAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCBidWZmZXIgPSAnICsgKGFwcGVuZEZpcnN0ID8gJycgOiB0aGlzLmluaXRpYWxpemVCdWZmZXIoKSk7XG5cblx0ICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuIGJ1ZmZlciArICcpO1xuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKCdyZXR1cm4gYnVmZmVyOycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmICh2YXJEZWNsYXJhdGlvbnMpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZCgndmFyICcgKyB2YXJEZWNsYXJhdGlvbnMuc3Vic3RyaW5nKDIpICsgKGFwcGVuZEZpcnN0ID8gJycgOiAnO1xcbicpKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLm1lcmdlKCk7XG5cdCAgfSxcblxuXHQgIC8vIFtibG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJldHVybiB2YWx1ZSBvZiBibG9ja0hlbHBlck1pc3Npbmdcblx0ICAvL1xuXHQgIC8vIFRoZSBwdXJwb3NlIG9mIHRoaXMgb3Bjb2RlIGlzIHRvIHRha2UgYSBibG9jayBvZiB0aGUgZm9ybVxuXHQgIC8vIGB7eyN0aGlzLmZvb319Li4ue3svdGhpcy5mb299fWAsIHJlc29sdmUgdGhlIHZhbHVlIG9mIGBmb29gLCBhbmRcblx0ICAvLyByZXBsYWNlIGl0IG9uIHRoZSBzdGFjayB3aXRoIHRoZSByZXN1bHQgb2YgcHJvcGVybHlcblx0ICAvLyBpbnZva2luZyBibG9ja0hlbHBlck1pc3NpbmcuXG5cdCAgYmxvY2tWYWx1ZTogZnVuY3Rpb24gYmxvY2tWYWx1ZShuYW1lKSB7XG5cdCAgICB2YXIgYmxvY2tIZWxwZXJNaXNzaW5nID0gdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgMCwgcGFyYW1zKTtcblxuXHQgICAgdmFyIGJsb2NrTmFtZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgYmxvY2tOYW1lKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthbWJpZ3VvdXNCbG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYmVmb3JlOiBsYXN0SGVscGVyPXZhbHVlIG9mIGxhc3QgZm91bmQgaGVscGVyLCBpZiBhbnlcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXIsIGlmIG5vIGxhc3RIZWxwZXI6IHNhbWUgYXMgW2Jsb2NrVmFsdWVdXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBsYXN0SGVscGVyOiB2YWx1ZVxuXHQgIGFtYmlndW91c0Jsb2NrVmFsdWU6IGZ1bmN0aW9uIGFtYmlndW91c0Jsb2NrVmFsdWUoKSB7XG5cdCAgICAvLyBXZSdyZSBiZWluZyBhIGJpdCBjaGVla3kgYW5kIHJldXNpbmcgdGhlIG9wdGlvbnMgdmFsdWUgZnJvbSB0aGUgcHJpb3IgZXhlY1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmJsb2NrSGVscGVyTWlzc2luZycpLFxuXHQgICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcblx0ICAgIHRoaXMuc2V0dXBIZWxwZXJBcmdzKCcnLCAwLCBwYXJhbXMsIHRydWUpO1xuXG5cdCAgICB0aGlzLmZsdXNoSW5saW5lKCk7XG5cblx0ICAgIHZhciBjdXJyZW50ID0gdGhpcy50b3BTdGFjaygpO1xuXHQgICAgcGFyYW1zLnNwbGljZSgxLCAwLCBjdXJyZW50KTtcblxuXHQgICAgdGhpcy5wdXNoU291cmNlKFsnaWYgKCEnLCB0aGlzLmxhc3RIZWxwZXIsICcpIHsgJywgY3VycmVudCwgJyA9ICcsIHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSwgJ30nXSk7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRDb250ZW50XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIEFwcGVuZHMgdGhlIHN0cmluZyB2YWx1ZSBvZiBgY29udGVudGAgdG8gdGhlIGN1cnJlbnQgYnVmZmVyXG5cdCAgYXBwZW5kQ29udGVudDogZnVuY3Rpb24gYXBwZW5kQ29udGVudChjb250ZW50KSB7XG5cdCAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xuXHQgICAgICBjb250ZW50ID0gdGhpcy5wZW5kaW5nQ29udGVudCArIGNvbnRlbnQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnBlbmRpbmdMb2NhdGlvbiA9IHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IGNvbnRlbnQ7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIENvZXJjZXMgYHZhbHVlYCB0byBhIFN0cmluZyBhbmQgYXBwZW5kcyBpdCB0byB0aGUgY3VycmVudCBidWZmZXIuXG5cdCAgLy9cblx0ICAvLyBJZiBgdmFsdWVgIGlzIHRydXRoeSwgb3IgMCwgaXQgaXMgY29lcmNlZCBpbnRvIGEgc3RyaW5nIGFuZCBhcHBlbmRlZFxuXHQgIC8vIE90aGVyd2lzZSwgdGhlIGVtcHR5IHN0cmluZyBpcyBhcHBlbmRlZFxuXHQgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuXHQgICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuXHQgICAgICB0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbiAoY3VycmVudCkge1xuXHQgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgY3VycmVudCwgJyA6IFwiXCInXTtcblx0ICAgICAgfSk7XG5cblx0ICAgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5wb3BTdGFjaygpKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgbG9jYWwgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICgnLCBsb2NhbCwgJyAhPSBudWxsKSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIobG9jYWwsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUpIHtcblx0ICAgICAgICB0aGlzLnB1c2hTb3VyY2UoWydlbHNlIHsgJywgdGhpcy5hcHBlbmRUb0J1ZmZlcihcIicnXCIsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kRXNjYXBlZF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gRXNjYXBlIGB2YWx1ZWAgYW5kIGFwcGVuZCBpdCB0byB0aGUgYnVmZmVyXG5cdCAgYXBwZW5kRXNjYXBlZDogZnVuY3Rpb24gYXBwZW5kRXNjYXBlZCgpIHtcblx0ICAgIHRoaXMucHVzaFNvdXJjZSh0aGlzLmFwcGVuZFRvQnVmZmVyKFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24nKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcpJ10pKTtcblx0ICB9LFxuXG5cdCAgLy8gW2dldENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vIENvbXBpbGVyIHZhbHVlLCBhZnRlcjogbGFzdENvbnRleHQ9ZGVwdGhcblx0ICAvL1xuXHQgIC8vIFNldCB0aGUgdmFsdWUgb2YgdGhlIGBsYXN0Q29udGV4dGAgY29tcGlsZXIgdmFsdWUgdG8gdGhlIGRlcHRoXG5cdCAgZ2V0Q29udGV4dDogZnVuY3Rpb24gZ2V0Q29udGV4dChkZXB0aCkge1xuXHQgICAgdGhpcy5sYXN0Q29udGV4dCA9IGRlcHRoO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgY29udGV4dCBvbnRvIHRoZSBzdGFjay5cblx0ICBwdXNoQ29udGV4dDogZnVuY3Rpb24gcHVzaENvbnRleHQoKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5jb250ZXh0TmFtZSh0aGlzLmxhc3RDb250ZXh0KSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBPbkNvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0W25hbWVdLCAuLi5cblx0ICAvL1xuXHQgIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgbmFtZWAgb24gdGhlIGN1cnJlbnQgY29udGV4dCBhbmQgcHVzaGVzXG5cdCAgLy8gaXQgb250byB0aGUgc3RhY2suXG5cdCAgbG9va3VwT25Db250ZXh0OiBmdW5jdGlvbiBsb29rdXBPbkNvbnRleHQocGFydHMsIGZhbHN5LCBzdHJpY3QsIHNjb3BlZCkge1xuXHQgICAgdmFyIGkgPSAwO1xuXG5cdCAgICBpZiAoIXNjb3BlZCAmJiB0aGlzLm9wdGlvbnMuY29tcGF0ICYmICF0aGlzLmxhc3RDb250ZXh0KSB7XG5cdCAgICAgIC8vIFRoZSBkZXB0aGVkIHF1ZXJ5IGlzIGV4cGVjdGVkIHRvIGhhbmRsZSB0aGUgdW5kZWZpbmVkIGxvZ2ljIGZvciB0aGUgcm9vdCBsZXZlbCB0aGF0XG5cdCAgICAgIC8vIGlzIGltcGxlbWVudGVkIGJlbG93LCBzbyB3ZSBldmFsdWF0ZSB0aGF0IGRpcmVjdGx5IGluIGNvbXBhdCBtb2RlXG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLmRlcHRoZWRMb29rdXAocGFydHNbaSsrXSkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoQ29udGV4dCgpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdjb250ZXh0JywgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwQmxvY2tQYXJhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogYmxvY2tQYXJhbVtuYW1lXSwgLi4uXG5cdCAgLy9cblx0ICAvLyBMb29rcyB1cCB0aGUgdmFsdWUgb2YgYHBhcnRzYCBvbiB0aGUgZ2l2ZW4gYmxvY2sgcGFyYW0gYW5kIHB1c2hlc1xuXHQgIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuXHQgIGxvb2t1cEJsb2NrUGFyYW06IGZ1bmN0aW9uIGxvb2t1cEJsb2NrUGFyYW0oYmxvY2tQYXJhbUlkLCBwYXJ0cykge1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cblx0ICAgIHRoaXMucHVzaChbJ2Jsb2NrUGFyYW1zWycsIGJsb2NrUGFyYW1JZFswXSwgJ11bJywgYmxvY2tQYXJhbUlkWzFdLCAnXSddKTtcblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2NvbnRleHQnLCBwYXJ0cywgMSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBEYXRhXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBkYXRhLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2ggdGhlIGRhdGEgbG9va3VwIG9wZXJhdG9yXG5cdCAgbG9va3VwRGF0YTogZnVuY3Rpb24gbG9va3VwRGF0YShkZXB0aCwgcGFydHMsIHN0cmljdCkge1xuXHQgICAgaWYgKCFkZXB0aCkge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2RhdGEnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnY29udGFpbmVyLmRhdGEoZGF0YSwgJyArIGRlcHRoICsgJyknKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnZGF0YScsIHBhcnRzLCAwLCB0cnVlLCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICByZXNvbHZlUGF0aDogZnVuY3Rpb24gcmVzb2x2ZVBhdGgodHlwZSwgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpIHtcblx0ICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cblx0ICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuc3RyaWN0IHx8IHRoaXMub3B0aW9ucy5hc3N1bWVPYmplY3RzKSB7XG5cdCAgICAgIHRoaXMucHVzaChzdHJpY3RMb29rdXAodGhpcy5vcHRpb25zLnN0cmljdCAmJiBzdHJpY3QsIHRoaXMsIHBhcnRzLCB0eXBlKSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aDtcblx0ICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgdmFyIGxvb2t1cCA9IF90aGlzLm5hbWVMb29rdXAoY3VycmVudCwgcGFydHNbaV0sIHR5cGUpO1xuXHQgICAgICAgIC8vIFdlIHdhbnQgdG8gZW5zdXJlIHRoYXQgemVybyBhbmQgZmFsc2UgYXJlIGhhbmRsZWQgcHJvcGVybHkgaWYgdGhlIGNvbnRleHQgKGZhbHN5IGZsYWcpXG5cdCAgICAgICAgLy8gbmVlZHMgdG8gaGF2ZSB0aGUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlc2UgdmFsdWVzLlxuXHQgICAgICAgIGlmICghZmFsc3kpIHtcblx0ICAgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgbG9va3VwLCAnIDogJywgY3VycmVudF07XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW4gdXNlIGdlbmVyaWMgZmFsc3kgaGFuZGxpbmdcblx0ICAgICAgICAgIHJldHVybiBbJyAmJiAnLCBsb29rdXBdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFtyZXNvbHZlUG9zc2libGVMYW1iZGFdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXNvbHZlZCB2YWx1ZSwgLi4uXG5cdCAgLy9cblx0ICAvLyBJZiB0aGUgYHZhbHVlYCBpcyBhIGxhbWJkYSwgcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgYnlcblx0ICAvLyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBsYW1iZGFcblx0ICByZXNvbHZlUG9zc2libGVMYW1iZGE6IGZ1bmN0aW9uIHJlc29sdmVQb3NzaWJsZUxhbWJkYSgpIHtcblx0ICAgIHRoaXMucHVzaChbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5sYW1iZGEnKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcsICcsIHRoaXMuY29udGV4dE5hbWUoMCksICcpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFN0cmluZ1BhcmFtXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBzdHJpbmcsIGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3Bjb2RlIGlzIGRlc2lnbmVkIGZvciB1c2UgaW4gc3RyaW5nIG1vZGUsIHdoaWNoXG5cdCAgLy8gcHJvdmlkZXMgdGhlIHN0cmluZyB2YWx1ZSBvZiBhIHBhcmFtZXRlciBhbG9uZyB3aXRoIGl0c1xuXHQgIC8vIGRlcHRoIHJhdGhlciB0aGFuIHJlc29sdmluZyBpdCBpbW1lZGlhdGVseS5cblx0ICBwdXNoU3RyaW5nUGFyYW06IGZ1bmN0aW9uIHB1c2hTdHJpbmdQYXJhbShzdHJpbmcsIHR5cGUpIHtcblx0ICAgIHRoaXMucHVzaENvbnRleHQoKTtcblx0ICAgIHRoaXMucHVzaFN0cmluZyh0eXBlKTtcblxuXHQgICAgLy8gSWYgaXQncyBhIHN1YmV4cHJlc3Npb24sIHRoZSBzdHJpbmcgcmVzdWx0XG5cdCAgICAvLyB3aWxsIGJlIHB1c2hlZCBhZnRlciB0aGlzIG9wY29kZS5cblx0ICAgIGlmICh0eXBlICE9PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RyaW5nKHN0cmluZyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHN0cmluZyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHlIYXNoOiBmdW5jdGlvbiBlbXB0eUhhc2gob21pdEVtcHR5KSB7XG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hJZHNcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hDb250ZXh0c1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hUeXBlc1xuXHQgICAgfVxuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG9taXRFbXB0eSA/ICd1bmRlZmluZWQnIDogJ3t9Jyk7XG5cdCAgfSxcblx0ICBwdXNoSGFzaDogZnVuY3Rpb24gcHVzaEhhc2goKSB7XG5cdCAgICBpZiAodGhpcy5oYXNoKSB7XG5cdCAgICAgIHRoaXMuaGFzaGVzLnB1c2godGhpcy5oYXNoKTtcblx0ICAgIH1cblx0ICAgIHRoaXMuaGFzaCA9IHsgdmFsdWVzOiBbXSwgdHlwZXM6IFtdLCBjb250ZXh0czogW10sIGlkczogW10gfTtcblx0ICB9LFxuXHQgIHBvcEhhc2g6IGZ1bmN0aW9uIHBvcEhhc2goKSB7XG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaGVzLnBvcCgpO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2guaWRzKSk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLmNvbnRleHRzKSk7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC50eXBlcykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudmFsdWVzKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoU3RyaW5nXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBxdW90ZWRTdHJpbmcoc3RyaW5nKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcXVvdGVkIHZlcnNpb24gb2YgYHN0cmluZ2Agb250byB0aGUgc3RhY2tcblx0ICBwdXNoU3RyaW5nOiBmdW5jdGlvbiBwdXNoU3RyaW5nKHN0cmluZykge1xuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucXVvdGVkU3RyaW5nKHN0cmluZykpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaExpdGVyYWxdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHZhbHVlLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyBhIHZhbHVlIG9udG8gdGhlIHN0YWNrLiBUaGlzIG9wZXJhdGlvbiBwcmV2ZW50c1xuXHQgIC8vIHRoZSBjb21waWxlciBmcm9tIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIHRvIGhvbGRcblx0ICAvLyBpdC5cblx0ICBwdXNoTGl0ZXJhbDogZnVuY3Rpb24gcHVzaExpdGVyYWwodmFsdWUpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh2YWx1ZSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoUHJvZ3JhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcHJvZ3JhbShndWlkKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcHJvZ3JhbSBleHByZXNzaW9uIG9udG8gdGhlIHN0YWNrLiBUaGlzIHRha2VzXG5cdCAgLy8gYSBjb21waWxlLXRpbWUgZ3VpZCBhbmQgY29udmVydHMgaXQgaW50byBhIHJ1bnRpbWUtYWNjZXNzaWJsZVxuXHQgIC8vIGV4cHJlc3Npb24uXG5cdCAgcHVzaFByb2dyYW06IGZ1bmN0aW9uIHB1c2hQcm9ncmFtKGd1aWQpIHtcblx0ICAgIGlmIChndWlkICE9IG51bGwpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG51bGwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbcmVnaXN0ZXJEZWNvcmF0b3JdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgZGVjb3JhdG9yJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgZGVjb3JhdG9yLFxuXHQgIC8vIGFuZCBpbnNlcnRzIHRoZSBkZWNvcmF0b3IgaW50byB0aGUgZGVjb3JhdG9ycyBsaXN0LlxuXHQgIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihwYXJhbVNpemUsIG5hbWUpIHtcblx0ICAgIHZhciBmb3VuZERlY29yYXRvciA9IHRoaXMubmFtZUxvb2t1cCgnZGVjb3JhdG9ycycsIG5hbWUsICdkZWNvcmF0b3InKSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplKTtcblxuXHQgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goWydmbiA9ICcsIHRoaXMuZGVjb3JhdG9ycy5mdW5jdGlvbkNhbGwoZm91bmREZWNvcmF0b3IsICcnLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsIG9wdGlvbnNdKSwgJyB8fCBmbjsnXSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VIZWxwZXJdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgaGVscGVyJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgaGVscGVyLFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIGhlbHBlcidzIHJldHVybiB2YWx1ZSBvbnRvIHRoZSBzdGFjay5cblx0ICAvL1xuXHQgIC8vIElmIHRoZSBoZWxwZXIgaXMgbm90IGZvdW5kLCBgaGVscGVyTWlzc2luZ2AgaXMgY2FsbGVkLlxuXHQgIGludm9rZUhlbHBlcjogZnVuY3Rpb24gaW52b2tlSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgaXNTaW1wbGUpIHtcblx0ICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpLFxuXHQgICAgICAgIHNpbXBsZSA9IGlzU2ltcGxlID8gW2hlbHBlci5uYW1lLCAnIHx8ICddIDogJyc7XG5cblx0ICAgIHZhciBsb29rdXAgPSBbJygnXS5jb25jYXQoc2ltcGxlLCBub25IZWxwZXIpO1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XG5cdCAgICAgIGxvb2t1cC5wdXNoKCcgfHwgJywgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpKTtcblx0ICAgIH1cblx0ICAgIGxvb2t1cC5wdXNoKCcpJyk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwobG9va3VwLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VLbm93bkhlbHBlcl1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiB0aGUgaGVscGVyIGlzIGtub3duIHRvIGV4aXN0LFxuXHQgIC8vIHNvIGEgYGhlbHBlck1pc3NpbmdgIGZhbGxiYWNrIGlzIG5vdCByZXF1aXJlZC5cblx0ICBpbnZva2VLbm93bkhlbHBlcjogZnVuY3Rpb24gaW52b2tlS25vd25IZWxwZXIocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpO1xuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChoZWxwZXIubmFtZSwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlQW1iaWd1b3VzXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBkaXNhbWJpZ3VhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIGFuIGV4cHJlc3Npb24gbGlrZSBge3tmb299fWBcblx0ICAvLyBpcyBwcm92aWRlZCwgYnV0IHdlIGRvbid0IGtub3cgYXQgY29tcGlsZS10aW1lIHdoZXRoZXIgaXRcblx0ICAvLyBpcyBhIGhlbHBlciBvciBhIHBhdGguXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBlbWl0cyBtb3JlIGNvZGUgdGhhbiB0aGUgb3RoZXIgb3B0aW9ucyxcblx0ICAvLyBhbmQgY2FuIGJlIGF2b2lkZWQgYnkgcGFzc2luZyB0aGUgYGtub3duSGVscGVyc2AgYW5kXG5cdCAgLy8gYGtub3duSGVscGVyc09ubHlgIGZsYWdzIGF0IGNvbXBpbGUtdGltZS5cblx0ICBpbnZva2VBbWJpZ3VvdXM6IGZ1bmN0aW9uIGludm9rZUFtYmlndW91cyhuYW1lLCBoZWxwZXJDYWxsKSB7XG5cdCAgICB0aGlzLnVzZVJlZ2lzdGVyKCdoZWxwZXInKTtcblxuXHQgICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgdGhpcy5lbXB0eUhhc2goKTtcblx0ICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKDAsIG5hbWUsIGhlbHBlckNhbGwpO1xuXG5cdCAgICB2YXIgaGVscGVyTmFtZSA9IHRoaXMubGFzdEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKTtcblxuXHQgICAgdmFyIGxvb2t1cCA9IFsnKCcsICcoaGVscGVyID0gJywgaGVscGVyTmFtZSwgJyB8fCAnLCBub25IZWxwZXIsICcpJ107XG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcblx0ICAgICAgbG9va3VwWzBdID0gJyhoZWxwZXIgPSAnO1xuXHQgICAgICBsb29rdXAucHVzaCgnICE9IG51bGwgPyBoZWxwZXIgOiAnLCB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5oZWxwZXJNaXNzaW5nJykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2goWycoJywgbG9va3VwLCBoZWxwZXIucGFyYW1zSW5pdCA/IFsnKSwoJywgaGVscGVyLnBhcmFtc0luaXRdIDogW10sICcpLCcsICcodHlwZW9mIGhlbHBlciA9PT0gJywgdGhpcy5hbGlhc2FibGUoJ1wiZnVuY3Rpb25cIicpLCAnID8gJywgdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdoZWxwZXInLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSwgJyA6IGhlbHBlcikpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlUGFydGlhbF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGNvbnRleHQsIC4uLlxuXHQgIC8vIE9uIHN0YWNrIGFmdGVyOiByZXN1bHQgb2YgcGFydGlhbCBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBwb3BzIG9mZiBhIGNvbnRleHQsIGludm9rZXMgYSBwYXJ0aWFsIHdpdGggdGhhdCBjb250ZXh0LFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIHJlc3VsdCBvZiB0aGUgaW52b2NhdGlvbiBiYWNrLlxuXHQgIGludm9rZVBhcnRpYWw6IGZ1bmN0aW9uIGludm9rZVBhcnRpYWwoaXNEeW5hbWljLCBuYW1lLCBpbmRlbnQpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhuYW1lLCAxLCBwYXJhbXMpO1xuXG5cdCAgICBpZiAoaXNEeW5hbWljKSB7XG5cdCAgICAgIG5hbWUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIGRlbGV0ZSBvcHRpb25zLm5hbWU7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpbmRlbnQpIHtcblx0ICAgICAgb3B0aW9ucy5pbmRlbnQgPSBKU09OLnN0cmluZ2lmeShpbmRlbnQpO1xuXHQgICAgfVxuXHQgICAgb3B0aW9ucy5oZWxwZXJzID0gJ2hlbHBlcnMnO1xuXHQgICAgb3B0aW9ucy5wYXJ0aWFscyA9ICdwYXJ0aWFscyc7XG5cdCAgICBvcHRpb25zLmRlY29yYXRvcnMgPSAnY29udGFpbmVyLmRlY29yYXRvcnMnO1xuXG5cdCAgICBpZiAoIWlzRHluYW1pYykge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdCh0aGlzLm5hbWVMb29rdXAoJ3BhcnRpYWxzJywgbmFtZSwgJ3BhcnRpYWwnKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdChuYW1lKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgb3B0aW9ucy5kZXB0aHMgPSAnZGVwdGhzJztcblx0ICAgIH1cblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbCgnY29udGFpbmVyLmludm9rZVBhcnRpYWwnLCAnJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthc3NpZ25Ub0hhc2hdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uLCBoYXNoLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLiwgaGFzaCwgLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIGEgdmFsdWUgb2ZmIHRoZSBzdGFjayBhbmQgYXNzaWducyBpdCB0byB0aGUgY3VycmVudCBoYXNoXG5cdCAgYXNzaWduVG9IYXNoOiBmdW5jdGlvbiBhc3NpZ25Ub0hhc2goa2V5KSB7XG5cdCAgICB2YXIgdmFsdWUgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgY29udGV4dCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICB0eXBlID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGlkID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBpZCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0eXBlID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBjb250ZXh0ID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIGlmIChjb250ZXh0KSB7XG5cdCAgICAgIGhhc2guY29udGV4dHNba2V5XSA9IGNvbnRleHQ7XG5cdCAgICB9XG5cdCAgICBpZiAodHlwZSkge1xuXHQgICAgICBoYXNoLnR5cGVzW2tleV0gPSB0eXBlO1xuXHQgICAgfVxuXHQgICAgaWYgKGlkKSB7XG5cdCAgICAgIGhhc2guaWRzW2tleV0gPSBpZDtcblx0ICAgIH1cblx0ICAgIGhhc2gudmFsdWVzW2tleV0gPSB2YWx1ZTtcblx0ICB9LFxuXG5cdCAgcHVzaElkOiBmdW5jdGlvbiBwdXNoSWQodHlwZSwgbmFtZSwgY2hpbGQpIHtcblx0ICAgIGlmICh0eXBlID09PSAnQmxvY2tQYXJhbScpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdibG9ja1BhcmFtc1snICsgbmFtZVswXSArICddLnBhdGhbJyArIG5hbWVbMV0gKyAnXScgKyAoY2hpbGQgPyAnICsgJyArIEpTT04uc3RyaW5naWZ5KCcuJyArIGNoaWxkKSA6ICcnKSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQYXRoRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RyaW5nKG5hbWUpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCd0cnVlJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ251bGwnKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXG5cdCAgY29tcGlsZXI6IEphdmFTY3JpcHRDb21waWxlcixcblxuXHQgIGNvbXBpbGVDaGlsZHJlbjogZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKSB7XG5cdCAgICB2YXIgY2hpbGRyZW4gPSBlbnZpcm9ubWVudC5jaGlsZHJlbixcblx0ICAgICAgICBjaGlsZCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjb21waWxlciA9IHVuZGVmaW5lZDtcblxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcblx0ICAgICAgY29tcGlsZXIgPSBuZXcgdGhpcy5jb21waWxlcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblxuXHQgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLm1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKTtcblxuXHQgICAgICBpZiAoZXhpc3RpbmcgPT0gbnVsbCkge1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtcy5wdXNoKCcnKTsgLy8gUGxhY2Vob2xkZXIgdG8gcHJldmVudCBuYW1lIGNvbmZsaWN0cyBmb3IgbmVzdGVkIGNoaWxkcmVuXG5cdCAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jb250ZXh0LnByb2dyYW1zLmxlbmd0aDtcblx0ICAgICAgICBjaGlsZC5pbmRleCA9IGluZGV4O1xuXHQgICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBpbmRleDtcblx0ICAgICAgICB0aGlzLmNvbnRleHQucHJvZ3JhbXNbaW5kZXhdID0gY29tcGlsZXIuY29tcGlsZShjaGlsZCwgb3B0aW9ucywgdGhpcy5jb250ZXh0LCAhdGhpcy5wcmVjb21waWxlKTtcblx0ICAgICAgICB0aGlzLmNvbnRleHQuZGVjb3JhdG9yc1tpbmRleF0gPSBjb21waWxlci5kZWNvcmF0b3JzO1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaW5kZXhdID0gY2hpbGQ7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGNvbXBpbGVyLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBjb21waWxlci51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgICBjaGlsZC51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocztcblx0ICAgICAgICBjaGlsZC51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgY2hpbGQuaW5kZXggPSBleGlzdGluZy5pbmRleDtcblx0ICAgICAgICBjaGlsZC5uYW1lID0gJ3Byb2dyYW0nICsgZXhpc3RpbmcuaW5kZXg7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGV4aXN0aW5nLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBleGlzdGluZy51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWF0Y2hFeGlzdGluZ1Byb2dyYW06IGZ1bmN0aW9uIG1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jb250ZXh0LmVudmlyb25tZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW52aXJvbm1lbnQgPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2ldO1xuXHQgICAgICBpZiAoZW52aXJvbm1lbnQgJiYgZW52aXJvbm1lbnQuZXF1YWxzKGNoaWxkKSkge1xuXHQgICAgICAgIHJldHVybiBlbnZpcm9ubWVudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwcm9ncmFtRXhwcmVzc2lvbjogZnVuY3Rpb24gcHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkge1xuXHQgICAgdmFyIGNoaWxkID0gdGhpcy5lbnZpcm9ubWVudC5jaGlsZHJlbltndWlkXSxcblx0ICAgICAgICBwcm9ncmFtUGFyYW1zID0gW2NoaWxkLmluZGV4LCAnZGF0YScsIGNoaWxkLmJsb2NrUGFyYW1zXTtcblxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgdGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcHJvZ3JhbVBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiAnY29udGFpbmVyLnByb2dyYW0oJyArIHByb2dyYW1QYXJhbXMuam9pbignLCAnKSArICcpJztcblx0ICB9LFxuXG5cdCAgdXNlUmVnaXN0ZXI6IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyKG5hbWUpIHtcblx0ICAgIGlmICghdGhpcy5yZWdpc3RlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5yZWdpc3RlcnNbbmFtZV0gPSB0cnVlO1xuXHQgICAgICB0aGlzLnJlZ2lzdGVycy5saXN0LnB1c2gobmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHB1c2g6IGZ1bmN0aW9uIHB1c2goZXhwcikge1xuXHQgICAgaWYgKCEoZXhwciBpbnN0YW5jZW9mIExpdGVyYWwpKSB7XG5cdCAgICAgIGV4cHIgPSB0aGlzLnNvdXJjZS53cmFwKGV4cHIpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLmlubGluZVN0YWNrLnB1c2goZXhwcik7XG5cdCAgICByZXR1cm4gZXhwcjtcblx0ICB9LFxuXG5cdCAgcHVzaFN0YWNrTGl0ZXJhbDogZnVuY3Rpb24gcHVzaFN0YWNrTGl0ZXJhbChpdGVtKSB7XG5cdCAgICB0aGlzLnB1c2gobmV3IExpdGVyYWwoaXRlbSkpO1xuXHQgIH0sXG5cblx0ICBwdXNoU291cmNlOiBmdW5jdGlvbiBwdXNoU291cmNlKHNvdXJjZSkge1xuXHQgICAgaWYgKHRoaXMucGVuZGluZ0NvbnRlbnQpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyh0aGlzLnBlbmRpbmdDb250ZW50KSwgdGhpcy5wZW5kaW5nTG9jYXRpb24pKTtcblx0ICAgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgaWYgKHNvdXJjZSkge1xuXHQgICAgICB0aGlzLnNvdXJjZS5wdXNoKHNvdXJjZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHJlcGxhY2VTdGFjazogZnVuY3Rpb24gcmVwbGFjZVN0YWNrKGNhbGxiYWNrKSB7XG5cdCAgICB2YXIgcHJlZml4ID0gWycoJ10sXG5cdCAgICAgICAgc3RhY2sgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY3JlYXRlZFN0YWNrID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHVzZWRMaXRlcmFsID0gdW5kZWZpbmVkO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgaWYgKCF0aGlzLmlzSW5saW5lKCkpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ3JlcGxhY2VTdGFjayBvbiBub24taW5saW5lJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIFdlIHdhbnQgdG8gbWVyZ2UgdGhlIGlubGluZSBzdGF0ZW1lbnQgaW50byB0aGUgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHZpYSAnLCdcblx0ICAgIHZhciB0b3AgPSB0aGlzLnBvcFN0YWNrKHRydWUpO1xuXG5cdCAgICBpZiAodG9wIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICAvLyBMaXRlcmFscyBkbyBub3QgbmVlZCB0byBiZSBpbmxpbmVkXG5cdCAgICAgIHN0YWNrID0gW3RvcC52YWx1ZV07XG5cdCAgICAgIHByZWZpeCA9IFsnKCcsIHN0YWNrXTtcblx0ICAgICAgdXNlZExpdGVyYWwgPSB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gR2V0IG9yIGNyZWF0ZSB0aGUgY3VycmVudCBzdGFjayBuYW1lIGZvciB1c2UgYnkgdGhlIGlubGluZVxuXHQgICAgICBjcmVhdGVkU3RhY2sgPSB0cnVlO1xuXHQgICAgICB2YXIgX25hbWUgPSB0aGlzLmluY3JTdGFjaygpO1xuXG5cdCAgICAgIHByZWZpeCA9IFsnKCgnLCB0aGlzLnB1c2goX25hbWUpLCAnID0gJywgdG9wLCAnKSddO1xuXHQgICAgICBzdGFjayA9IHRoaXMudG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGl0ZW0gPSBjYWxsYmFjay5jYWxsKHRoaXMsIHN0YWNrKTtcblxuXHQgICAgaWYgKCF1c2VkTGl0ZXJhbCkge1xuXHQgICAgICB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAoY3JlYXRlZFN0YWNrKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICB9XG5cdCAgICB0aGlzLnB1c2gocHJlZml4LmNvbmNhdChpdGVtLCAnKScpKTtcblx0ICB9LFxuXG5cdCAgaW5jclN0YWNrOiBmdW5jdGlvbiBpbmNyU3RhY2soKSB7XG5cdCAgICB0aGlzLnN0YWNrU2xvdCsrO1xuXHQgICAgaWYgKHRoaXMuc3RhY2tTbG90ID4gdGhpcy5zdGFja1ZhcnMubGVuZ3RoKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tWYXJzLnB1c2goJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLnRvcFN0YWNrTmFtZSgpO1xuXHQgIH0sXG5cdCAgdG9wU3RhY2tOYW1lOiBmdW5jdGlvbiB0b3BTdGFja05hbWUoKSB7XG5cdCAgICByZXR1cm4gJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90O1xuXHQgIH0sXG5cdCAgZmx1c2hJbmxpbmU6IGZ1bmN0aW9uIGZsdXNoSW5saW5lKCkge1xuXHQgICAgdmFyIGlubGluZVN0YWNrID0gdGhpcy5pbmxpbmVTdGFjaztcblx0ICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbmxpbmVTdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW50cnkgPSBpbmxpbmVTdGFja1tpXTtcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cdCAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgICB0aGlzLmNvbXBpbGVTdGFjay5wdXNoKGVudHJ5KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLmluY3JTdGFjaygpO1xuXHQgICAgICAgIHRoaXMucHVzaFNvdXJjZShbc3RhY2ssICcgPSAnLCBlbnRyeSwgJzsnXSk7XG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChzdGFjayk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGlzSW5saW5lOiBmdW5jdGlvbiBpc0lubGluZSgpIHtcblx0ICAgIHJldHVybiB0aGlzLmlubGluZVN0YWNrLmxlbmd0aDtcblx0ICB9LFxuXG5cdCAgcG9wU3RhY2s6IGZ1bmN0aW9uIHBvcFN0YWNrKHdyYXBwZWQpIHtcblx0ICAgIHZhciBpbmxpbmUgPSB0aGlzLmlzSW5saW5lKCksXG5cdCAgICAgICAgaXRlbSA9IChpbmxpbmUgPyB0aGlzLmlubGluZVN0YWNrIDogdGhpcy5jb21waWxlU3RhY2spLnBvcCgpO1xuXG5cdCAgICBpZiAoIXdyYXBwZWQgJiYgaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAoIWlubGluZSkge1xuXHQgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICAgICAgaWYgKCF0aGlzLnN0YWNrU2xvdCkge1xuXHQgICAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgc3RhY2sgcG9wJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHRvcFN0YWNrOiBmdW5jdGlvbiB0b3BTdGFjaygpIHtcblx0ICAgIHZhciBzdGFjayA9IHRoaXMuaXNJbmxpbmUoKSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjayxcblx0ICAgICAgICBpdGVtID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXHQgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGNvbnRleHROYW1lOiBmdW5jdGlvbiBjb250ZXh0TmFtZShjb250ZXh0KSB7XG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMgJiYgY29udGV4dCkge1xuXHQgICAgICByZXR1cm4gJ2RlcHRoc1snICsgY29udGV4dCArICddJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnZGVwdGgnICsgY29udGV4dDtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbiBxdW90ZWRTdHJpbmcoc3RyKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHN0cik7XG5cdCAgfSxcblxuXHQgIG9iamVjdExpdGVyYWw6IGZ1bmN0aW9uIG9iamVjdExpdGVyYWwob2JqKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2Uub2JqZWN0TGl0ZXJhbChvYmopO1xuXHQgIH0sXG5cblx0ICBhbGlhc2FibGU6IGZ1bmN0aW9uIGFsaWFzYWJsZShuYW1lKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdO1xuXHQgICAgaWYgKHJldCkge1xuXHQgICAgICByZXQucmVmZXJlbmNlQ291bnQrKztcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH1cblxuXHQgICAgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdID0gdGhpcy5zb3VyY2Uud3JhcChuYW1lKTtcblx0ICAgIHJldC5hbGlhc2FibGUgPSB0cnVlO1xuXHQgICAgcmV0LnJlZmVyZW5jZUNvdW50ID0gMTtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXI6IGZ1bmN0aW9uIHNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgYmxvY2tIZWxwZXIpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBwYXJhbXNJbml0ID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplLCBwYXJhbXMsIGJsb2NrSGVscGVyKTtcblx0ICAgIHZhciBmb3VuZEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKSxcblx0ICAgICAgICBjYWxsQ29udGV4dCA9IHRoaXMuYWxpYXNhYmxlKHRoaXMuY29udGV4dE5hbWUoMCkgKyAnICE9IG51bGwgPyAnICsgdGhpcy5jb250ZXh0TmFtZSgwKSArICcgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KScpO1xuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBwYXJhbXM6IHBhcmFtcyxcblx0ICAgICAgcGFyYW1zSW5pdDogcGFyYW1zSW5pdCxcblx0ICAgICAgbmFtZTogZm91bmRIZWxwZXIsXG5cdCAgICAgIGNhbGxQYXJhbXM6IFtjYWxsQ29udGV4dF0uY29uY2F0KHBhcmFtcylcblx0ICAgIH07XG5cdCAgfSxcblxuXHQgIHNldHVwUGFyYW1zOiBmdW5jdGlvbiBzZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IHt9LFxuXHQgICAgICAgIGNvbnRleHRzID0gW10sXG5cdCAgICAgICAgdHlwZXMgPSBbXSxcblx0ICAgICAgICBpZHMgPSBbXSxcblx0ICAgICAgICBvYmplY3RBcmdzID0gIXBhcmFtcyxcblx0ICAgICAgICBwYXJhbSA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcblx0ICAgICAgcGFyYW1zID0gW107XG5cdCAgICB9XG5cblx0ICAgIG9wdGlvbnMubmFtZSA9IHRoaXMucXVvdGVkU3RyaW5nKGhlbHBlcik7XG5cdCAgICBvcHRpb25zLmhhc2ggPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaGFzaElkcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLmhhc2hUeXBlcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgb3B0aW9ucy5oYXNoQ29udGV4dHMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBpbnZlcnNlID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIHByb2dyYW0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIC8vIEF2b2lkIHNldHRpbmcgZm4gYW5kIGludmVyc2UgaWYgbmVpdGhlciBhcmUgc2V0LiBUaGlzIGFsbG93c1xuXHQgICAgLy8gaGVscGVycyB0byBkbyBhIGNoZWNrIGZvciBgaWYgKG9wdGlvbnMuZm4pYFxuXHQgICAgaWYgKHByb2dyYW0gfHwgaW52ZXJzZSkge1xuXHQgICAgICBvcHRpb25zLmZuID0gcHJvZ3JhbSB8fCAnY29udGFpbmVyLm5vb3AnO1xuXHQgICAgICBvcHRpb25zLmludmVyc2UgPSBpbnZlcnNlIHx8ICdjb250YWluZXIubm9vcCc7XG5cdCAgICB9XG5cblx0ICAgIC8vIFRoZSBwYXJhbWV0ZXJzIGdvIG9uIHRvIHRoZSBzdGFjayBpbiBvcmRlciAobWFraW5nIHN1cmUgdGhhdCB0aGV5IGFyZSBldmFsdWF0ZWQgaW4gb3JkZXIpXG5cdCAgICAvLyBzbyB3ZSBuZWVkIHRvIHBvcCB0aGVtIG9mZiB0aGUgc3RhY2sgaW4gcmV2ZXJzZSBvcmRlclxuXHQgICAgdmFyIGkgPSBwYXJhbVNpemU7XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHBhcmFtID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBwYXJhbXNbaV0gPSBwYXJhbTtcblxuXHQgICAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICAgIGlkc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgICB0eXBlc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgICBjb250ZXh0c1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAob2JqZWN0QXJncykge1xuXHQgICAgICBvcHRpb25zLmFyZ3MgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHBhcmFtcyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaWRzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShpZHMpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMudHlwZXMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHR5cGVzKTtcblx0ICAgICAgb3B0aW9ucy5jb250ZXh0cyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoY29udGV4dHMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gJ2RhdGEnO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9ICdibG9ja1BhcmFtcyc7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gb3B0aW9ucztcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXJBcmdzOiBmdW5jdGlvbiBzZXR1cEhlbHBlckFyZ3MoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcywgdXNlUmVnaXN0ZXIpIHtcblx0ICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKTtcblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBpZiAodXNlUmVnaXN0ZXIpIHtcblx0ICAgICAgdGhpcy51c2VSZWdpc3Rlcignb3B0aW9ucycpO1xuXHQgICAgICBwYXJhbXMucHVzaCgnb3B0aW9ucycpO1xuXHQgICAgICByZXR1cm4gWydvcHRpb25zPScsIG9wdGlvbnNdO1xuXHQgICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcblx0ICAgICAgcGFyYW1zLnB1c2gob3B0aW9ucyk7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgIHZhciByZXNlcnZlZFdvcmRzID0gKCdicmVhayBlbHNlIG5ldyB2YXInICsgJyBjYXNlIGZpbmFsbHkgcmV0dXJuIHZvaWQnICsgJyBjYXRjaCBmb3Igc3dpdGNoIHdoaWxlJyArICcgY29udGludWUgZnVuY3Rpb24gdGhpcyB3aXRoJyArICcgZGVmYXVsdCBpZiB0aHJvdycgKyAnIGRlbGV0ZSBpbiB0cnknICsgJyBkbyBpbnN0YW5jZW9mIHR5cGVvZicgKyAnIGFic3RyYWN0IGVudW0gaW50IHNob3J0JyArICcgYm9vbGVhbiBleHBvcnQgaW50ZXJmYWNlIHN0YXRpYycgKyAnIGJ5dGUgZXh0ZW5kcyBsb25nIHN1cGVyJyArICcgY2hhciBmaW5hbCBuYXRpdmUgc3luY2hyb25pemVkJyArICcgY2xhc3MgZmxvYXQgcGFja2FnZSB0aHJvd3MnICsgJyBjb25zdCBnb3RvIHByaXZhdGUgdHJhbnNpZW50JyArICcgZGVidWdnZXIgaW1wbGVtZW50cyBwcm90ZWN0ZWQgdm9sYXRpbGUnICsgJyBkb3VibGUgaW1wb3J0IHB1YmxpYyBsZXQgeWllbGQgYXdhaXQnICsgJyBudWxsIHRydWUgZmFsc2UnKS5zcGxpdCgnICcpO1xuXG5cdCAgdmFyIGNvbXBpbGVyV29yZHMgPSBKYXZhU2NyaXB0Q29tcGlsZXIuUkVTRVJWRURfV09SRFMgPSB7fTtcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcmVzZXJ2ZWRXb3Jkcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIGNvbXBpbGVyV29yZHNbcmVzZXJ2ZWRXb3Jkc1tpXV0gPSB0cnVlO1xuXHQgIH1cblx0fSkoKTtcblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgIHJldHVybiAhSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTW25hbWVdICYmIC9eW2EtekEtWl8kXVswLTlhLXpBLVpfJF0qJC8udGVzdChuYW1lKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdHJpY3RMb29rdXAocmVxdWlyZVRlcm1pbmFsLCBjb21waWxlciwgcGFydHMsIHR5cGUpIHtcblx0ICB2YXIgc3RhY2sgPSBjb21waWxlci5wb3BTdGFjaygpLFxuXHQgICAgICBpID0gMCxcblx0ICAgICAgbGVuID0gcGFydHMubGVuZ3RoO1xuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIGxlbi0tO1xuXHQgIH1cblxuXHQgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIHN0YWNrID0gY29tcGlsZXIubmFtZUxvb2t1cChzdGFjaywgcGFydHNbaV0sIHR5cGUpO1xuXHQgIH1cblxuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIHJldHVybiBbY29tcGlsZXIuYWxpYXNhYmxlKCdjb250YWluZXIuc3RyaWN0JyksICcoJywgc3RhY2ssICcsICcsIGNvbXBpbGVyLnF1b3RlZFN0cmluZyhwYXJ0c1tpXSksICcpJ107XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiBzdGFjaztcblx0ICB9XG5cdH1cblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBKYXZhU2NyaXB0Q29tcGlsZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogZ2xvYmFsIGRlZmluZSAqL1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgU291cmNlTm9kZSA9IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgaWYgKGZhbHNlKSB7XG5cdCAgICAvLyBXZSBkb24ndCBzdXBwb3J0IHRoaXMgaW4gQU1EIGVudmlyb25tZW50cy4gRm9yIHRoZXNlIGVudmlyb25tZW50cywgd2UgYXN1c21lIHRoYXRcblx0ICAgIC8vIHRoZXkgYXJlIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIgYW5kIHRodXMgaGF2ZSBubyBuZWVkIGZvciB0aGUgc291cmNlLW1hcCBsaWJyYXJ5LlxuXHQgICAgdmFyIFNvdXJjZU1hcCA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKTtcblx0ICAgIFNvdXJjZU5vZGUgPSBTb3VyY2VNYXAuU291cmNlTm9kZTtcblx0ICB9XG5cdH0gY2F0Y2ggKGVycikge31cblx0LyogTk9QICovXG5cblx0LyogaXN0YW5idWwgaWdub3JlIGlmOiB0ZXN0ZWQgYnV0IG5vdCBjb3ZlcmVkIGluIGlzdGFuYnVsIGR1ZSB0byBkaXN0IGJ1aWxkICAqL1xuXHRpZiAoIVNvdXJjZU5vZGUpIHtcblx0ICBTb3VyY2VOb2RlID0gZnVuY3Rpb24gKGxpbmUsIGNvbHVtbiwgc3JjRmlsZSwgY2h1bmtzKSB7XG5cdCAgICB0aGlzLnNyYyA9ICcnO1xuXHQgICAgaWYgKGNodW5rcykge1xuXHQgICAgICB0aGlzLmFkZChjaHVua3MpO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBTb3VyY2VOb2RlLnByb3RvdHlwZSA9IHtcblx0ICAgIGFkZDogZnVuY3Rpb24gYWRkKGNodW5rcykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmtzKSkge1xuXHQgICAgICAgIGNodW5rcyA9IGNodW5rcy5qb2luKCcnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnNyYyArPSBjaHVua3M7XG5cdCAgICB9LFxuXHQgICAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChjaHVua3MpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rcykpIHtcblx0ICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zcmMgPSBjaHVua3MgKyB0aGlzLnNyYztcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZ1dpdGhTb3VyY2VNYXA6IGZ1bmN0aW9uIHRvU3RyaW5nV2l0aFNvdXJjZU1hcCgpIHtcblx0ICAgICAgcmV0dXJuIHsgY29kZTogdGhpcy50b1N0cmluZygpIH07XG5cdCAgICB9LFxuXHQgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5zcmM7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhc3RDaHVuayhjaHVuaywgY29kZUdlbiwgbG9jKSB7XG5cdCAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rKSkge1xuXHQgICAgdmFyIHJldCA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2h1bmsubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgcmV0LnB1c2goY29kZUdlbi53cmFwKGNodW5rW2ldLCBsb2MpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgY2h1bmsgPT09ICdudW1iZXInKSB7XG5cdCAgICAvLyBIYW5kbGUgcHJpbWl0aXZlcyB0aGF0IHRoZSBTb3VyY2VOb2RlIHdpbGwgdGhyb3cgdXAgb25cblx0ICAgIHJldHVybiBjaHVuayArICcnO1xuXHQgIH1cblx0ICByZXR1cm4gY2h1bms7XG5cdH1cblxuXHRmdW5jdGlvbiBDb2RlR2VuKHNyY0ZpbGUpIHtcblx0ICB0aGlzLnNyY0ZpbGUgPSBzcmNGaWxlO1xuXHQgIHRoaXMuc291cmNlID0gW107XG5cdH1cblxuXHRDb2RlR2VuLnByb3RvdHlwZSA9IHtcblx0ICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuXHQgICAgcmV0dXJuICF0aGlzLnNvdXJjZS5sZW5ndGg7XG5cdCAgfSxcblx0ICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKHNvdXJjZSwgbG9jKSB7XG5cdCAgICB0aGlzLnNvdXJjZS51bnNoaWZ0KHRoaXMud3JhcChzb3VyY2UsIGxvYykpO1xuXHQgIH0sXG5cdCAgcHVzaDogZnVuY3Rpb24gcHVzaChzb3VyY2UsIGxvYykge1xuXHQgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLndyYXAoc291cmNlLCBsb2MpKTtcblx0ICB9LFxuXG5cdCAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKCkge1xuXHQgICAgdmFyIHNvdXJjZSA9IHRoaXMuZW1wdHkoKTtcblx0ICAgIHRoaXMuZWFjaChmdW5jdGlvbiAobGluZSkge1xuXHQgICAgICBzb3VyY2UuYWRkKFsnICAnLCBsaW5lLCAnXFxuJ10pO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gc291cmNlO1xuXHQgIH0sXG5cblx0ICBlYWNoOiBmdW5jdGlvbiBlYWNoKGl0ZXIpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnNvdXJjZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpdGVyKHRoaXMuc291cmNlW2ldKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHQgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2F0aW9uIHx8IHsgc3RhcnQ6IHt9IH07XG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSk7XG5cdCAgfSxcblx0ICB3cmFwOiBmdW5jdGlvbiB3cmFwKGNodW5rKSB7XG5cdCAgICB2YXIgbG9jID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jdXJyZW50TG9jYXRpb24gfHwgeyBzdGFydDoge30gfSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgU291cmNlTm9kZSkge1xuXHQgICAgICByZXR1cm4gY2h1bms7XG5cdCAgICB9XG5cblx0ICAgIGNodW5rID0gY2FzdENodW5rKGNodW5rLCB0aGlzLCBsb2MpO1xuXG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSwgY2h1bmspO1xuXHQgIH0sXG5cblx0ICBmdW5jdGlvbkNhbGw6IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbChmbiwgdHlwZSwgcGFyYW1zKSB7XG5cdCAgICBwYXJhbXMgPSB0aGlzLmdlbmVyYXRlTGlzdChwYXJhbXMpO1xuXHQgICAgcmV0dXJuIHRoaXMud3JhcChbZm4sIHR5cGUgPyAnLicgKyB0eXBlICsgJygnIDogJygnLCBwYXJhbXMsICcpJ10pO1xuXHQgIH0sXG5cblx0ICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uIHF1b3RlZFN0cmluZyhzdHIpIHtcblx0ICAgIHJldHVybiAnXCInICsgKHN0ciArICcnKS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykucmVwbGFjZSgvXFxyL2csICdcXFxccicpLnJlcGxhY2UoL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcpIC8vIFBlciBFY21hLTI2MiA3LjMgKyA3LjguNFxuXHQgICAgLnJlcGxhY2UoL1xcdTIwMjkvZywgJ1xcXFx1MjAyOScpICsgJ1wiJztcblx0ICB9LFxuXG5cdCAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbChvYmopIHtcblx0ICAgIHZhciBwYWlycyA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdCAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IGNhc3RDaHVuayhvYmpba2V5XSwgdGhpcyk7XG5cdCAgICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgcGFpcnMucHVzaChbdGhpcy5xdW90ZWRTdHJpbmcoa2V5KSwgJzonLCB2YWx1ZV0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFpcnMpO1xuXHQgICAgcmV0LnByZXBlbmQoJ3snKTtcblx0ICAgIHJldC5hZGQoJ30nKTtcblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIGdlbmVyYXRlTGlzdDogZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmVtcHR5KCk7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChpKSB7XG5cdCAgICAgICAgcmV0LmFkZCgnLCcpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0LmFkZChjYXN0Q2h1bmsoZW50cmllc1tpXSwgdGhpcykpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBnZW5lcmF0ZUFycmF5OiBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChlbnRyaWVzKTtcblx0ICAgIHJldC5wcmVwZW5kKCdbJyk7XG5cdCAgICByZXQuYWRkKCddJyk7XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvZGVHZW47XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsInZhciBEYXRhID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBtYWtlUmVxdWVzdCA9IHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNGdW5jdGlvbihmZXRjaCkgPyBtYWtlRmV0Y2hSZXF1ZXN0IDogbWFrZUFqYXhSZXF1ZXN0OyAvLyBmYWxsYmFjayB0byBhamF4IGlmIG9sZGVyIGJyb3dzZXJcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlQWpheFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYm9keSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gcHJvY2VzcyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnByb2Nlc3NEYXRhID0gZmFsc2U7IC8vIHRlbGwgalF1ZXJ5IG5vdCB0byBzZXQgY29udGVudFR5cGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHBhcmFtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUZldGNoUmVxdWVzdCh7IHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBpc0Zvcm0gfSkge1xyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIGlmIChpc0Zvcm0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJiByZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzLnRleHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRKc29uKHsgdXJsLCBkaXNhYmxlQ2FjaGUgfSkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGRpc2FibGVDYWNoZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgJ1ByYWdtYSc6ICduby1jYWNoZScsXHJcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnR0VUJywgaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0SnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RGb3JtKHsgdXJsLCBmb3JtRGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEsIGlzRm9ybTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVKc29uKHsgdXJsLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0RFTEVURScsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdEVycm9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0SnNvbixcclxuICAgICAgICBwb3N0SnNvbixcclxuICAgICAgICBwb3N0Rm9ybSxcclxuICAgICAgICBkZWxldGVKc29uLFxyXG4gICAgICAgIGRlZmF1bHRFcnJvclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgRGF0YSB9O1xyXG4iLCJpbXBvcnQgSGFuZGxlYmFycyBmcm9tICdoYW5kbGViYXJzL2Rpc3QvaGFuZGxlYmFycyc7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGN1c3RvbSBoZWxwZXJzIGZvciBoYW5kbGViYXJzLmpzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxudmFyIGhlbHBlcnMgPSB7XHJcbiAgICAnc3dpdGNoJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc3dpdGNoX3ZhbHVlXyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3N3aXRjaF9icmVha18gPSBmYWxzZTtcclxuICAgICAgICB2YXIgaHRtbCA9IG9wdGlvbnMuZm4odGhpcyk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N3aXRjaF9icmVha187XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N3aXRjaF92YWx1ZV87XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9LFxyXG4gICAgJ2Nhc2UnOiBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLnBvcCgpO1xyXG4gICAgICAgIHZhciBjYXNlVmFsdWVzID0gYXJncztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3N3aXRjaF9icmVha18gfHwgY2FzZVZhbHVlcy5pbmRleE9mKHRoaXMuX3N3aXRjaF92YWx1ZV8pID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzaC5icmVhayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3dpdGNoX2JyZWFrXyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICdkZWZhdWx0JzogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3N3aXRjaF9icmVha18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIG1vdmVkIHNlbGVjdCBoZWxwZXIgZnJvbSBsYXlvdXRcclxuICAgICdzZWxlY3QnOiBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgJGVsID0gJCgnPHNlbGVjdCAvPicpLmh0bWwob3B0aW9ucy5mbih0aGlzKSk7XHJcbiAgICAgICAgJGVsLmZpbmQoJ1t2YWx1ZT1cIicgKyB2YWx1ZSArICdcIl0nKS5hdHRyKHsgJ3NlbGVjdGVkJzogJ3NlbGVjdGVkJyB9KTtcclxuICAgICAgICByZXR1cm4gJGVsLmh0bWwoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZvciAobGV0IGtleSBpbiBoZWxwZXJzKSB7XHJcbiAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKGtleSwgaGVscGVyc1trZXldKTtcclxufVxyXG5cclxuZXhwb3J0IHsgSGFuZGxlYmFycyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKHRlbXBsYXRlc0NhY2hlLCB0ZW1wbGF0ZXMpIHtcclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcGxhdGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChEYXRhLmdldEpzb24oeyB1cmw6IHRlbXBsYXRlc1tpXS51cmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShyZXMpO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZXNDYWNoZVt0ZW1wbGF0ZXNbaV0ubmFtZV0gPSB0ZW1wbGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIGZhbHNlOyB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufVxyXG4iLCIvKiBMb2FkZXIuanMgdmVyc2lvbiAxLjEgKi9cclxudmFyIExvYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ2lmU3JjID0gJy9pbWFnZXMvbG9hZGluZy5naWYnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9zaG93V2l0aFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NCYXJEYXRhLCBjb2xvcikge1xyXG4gICAgICAgIC8vICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICBjb2xvciA9ICcjZmZmJztcclxuICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIGxldCAkcGFyZW50ID0gQmx1ci5hZGQoeyBjb2xvciB9KTtcclxuXHJcbiAgICAgICAgLy8gICAgbGV0IGJhciA9IFByb2dyZXNzQmFyLmJ1aWxkKHsgZGF0YTogcHJvZ3Jlc3NCYXJEYXRhLCAkcGFyZW50OiAkcGFyZW50LCBjc3NDbGFzczogJ2JsdXItY29udGVudCcgfSlbMF07XHJcbiAgICAgICAgLy8gICAgbGV0IGRhdGEgPSAkKGJhcikuZGF0YShwcm9ncmVzc0JhckRhdGEubmFtZSlcclxuICAgICAgICAvLyAgICAgICAgLm9uU3RhcnQoKTtcclxuICAgICAgICAvL30sXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKGNvbG9yLCBpbWdTcmMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjZmZmJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWdTcmMpIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IGdpZlNyYztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQmx1ci5hZGQoeyBjb2xvciB9KVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8aW1nLz4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBpbWdTcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEJsdXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IExvYWRlciB9O1xyXG5cclxuLy8gR2FsbGVyeSByZWdpc3RyYXRpb25cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnaW1nLmRpc3BsYXktaW1hZ2UsIGltZy5nYWxsZXJ5LWltYWdlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgbGV0IHNyYyA9ICR0YXJnZXQuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gQmx1ci5hZGQoeyBoaWRlT25DbGljazogdHJ1ZSB9KTtcclxuICAgICAgICAkKCc8aW1nIC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2JsdXItY29udGVudCBwcmV2aWV3LWltYWdlJyxcclxuICAgICAgICAgICAgc3JjOiBzcmNcclxuICAgICAgICB9KS5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gSGVscGVyIGNsYXNzIGZvciBsb2FkZXIgYW5kIGdhbGxlcnlcclxudmFyIEJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgUFJFVklFV19DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1jb250YWluZXInO1xyXG4gICAgY29uc3QgUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTUyA9ICdwcmV2aWV3LWl0ZW0tY29udGFpbmVyJztcclxuICAgIGNvbnN0IEJMVVJfRUxFTUVOVF9DTEFTUyA9ICdibHVyJztcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCbHVyKHsgaGlkZU9uQ2xpY2ssIGNvbG9yLCBvcGFjaXR5IH0pIHtcclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2sgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGlkZU9uQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuXHJcbiAgICAgICAgbGV0ICRibHVyRWxlbWVudCA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogQkxVUl9FTEVNRU5UX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCAkaXRlbUNvbnRhaW5lciA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJHByZXZpZXdDb250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChoaWRlT25DbGljaykge1xyXG4gICAgICAgICAgICAkcHJldmlld0NvbnRhaW5lci5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50Lm9uKCdjbGljaycsIHJlbW92ZUJsdXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSAmJiBpc05hTigrb3BhY2l0eSkgJiYgb3BhY2l0eSA+PSAwICYmIG9wYWNpdHkgPD0gMSkge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHJldmlld0NvbnRhaW5lci5hcHBlbmQoJGl0ZW1Db250YWluZXIpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGJsdXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRpdGVtQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJsdXIoKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgQkxVUl9FTEVNRU5UX0NMQVNTKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCdib2R5JykuZmluZCgnLicgKyBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdzdC1uby1vdmVyZmxvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiBhZGRCbHVyLFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlQmx1clxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IEJsdXIgfTtcclxuIiwidmFyIE5vdGlmaWVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzdGF0dXMgaXMgZm9sbG93aW5nIGJvb3RzdHJhcCBjb252ZW50aW9uOiAnZGFuZ2VyJyhyZWQpLCAnd2FybmluZycoeWVsbG93KSwgJ3N1Y2Nlc3MnKGdyZWVuKSwgJ2luZm8nKGJsdWUpXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkLCB0aXRsZSwgbWVzc2FnZSwgc3RhdHVzLCBzZWNvbmRzLCBpc1Blcm1hbmVudCwgc2VsZWN0b3IgfSkge1xyXG4gICAgICAgIGxldCAkdGl0bGUgPSAkKCc8c3Ryb25nPjwvc3Ryb25nPicsIHsgdGV4dDogdGl0bGUgfHwgJycgfSk7XHJcbiAgICAgICAgbGV0ICRjbG9zZUJ1dHRvbiA9ICQoJzxhPjwvYT4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnY2xvc2UnLFxyXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ2FsZXJ0JyxcclxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2xvc2UnLFxyXG4gICAgICAgICAgICBodG1sOiAnJnRpbWVzOydcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgJG1lc3NhZ2UgPSAkKCc8c3Bhbj48L3NwYW4+JywgeyB0ZXh0OiAnICcgKyAobWVzc2FnZSB8fCAnJykgfSk7XHJcbiAgICAgICAgbGV0ICRhbGVydCA9ICQoJzxkaXY+PC9kaXY+JywgeyBjbGFzczogJ2FsZXJ0IGFsZXJ0LScgKyAoc3RhdHVzIHx8ICdpbmZvJykgfSk7XHJcblxyXG4gICAgICAgICRhbGVydC5hcHBlbmQoJHRpdGxlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRtZXNzYWdlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRjbG9zZUJ1dHRvbilcclxuICAgICAgICAgICAgLmFwcGVuZFRvKHNlbGVjdG9yIHx8IGNvbnRhaW5lcklkIHx8ICdib2R5Jyk7XHJcblxyXG4gICAgICAgIGlmICghaXNQZXJtYW5lbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkYWxlcnQuZmFkZU91dCg1MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkYWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgKHNlY29uZHMgfHwgMTApICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlQWxlcnQ6IGNyZWF0ZUFsZXJ0XHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgTm90aWZpZXIgfTtcclxuIiwidmFyIFV0aWxzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNHdWlkKHN0cmluZ1RvVGVzdCkge1xyXG4gICAgICAgIGlmIChzdHJpbmdUb1Rlc3RbMF0gPT09ICd7Jykge1xyXG4gICAgICAgICAgICBzdHJpbmdUb1Rlc3QgPSBzdHJpbmdUb1Rlc3Quc3Vic3RyaW5nKDEsIHN0cmluZ1RvVGVzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ2V4R3VpZCA9IC9eKFxceyl7MCwxfVswLTlhLWZBLUZdezh9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17MTJ9KFxcfSl7MCwxfSQvZ2k7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4R3VpZC50ZXN0KHN0cmluZ1RvVGVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZGpzY3NzZmlsZShmaWxlbmFtZSwgZmlsZXR5cGUpIHtcclxuICAgICAgICBsZXQgZmlsZXJlZjtcclxuICAgICAgICBpZiAoZmlsZXR5cGUgPT09ICdqcycpIHsgLy9pZiBmaWxlbmFtZSBpcyBhIGV4dGVybmFsIEphdmFTY3JpcHQgZmlsZVxyXG4gICAgICAgICAgICBmaWxlcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xyXG4gICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZW5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmaWxldHlwZSA9PT0gJ2NzcycpIHsgLy9pZiBmaWxlbmFtZSBpcyBhbiBleHRlcm5hbCBDU1MgZmlsZVxyXG4gICAgICAgICAgICBmaWxlcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZXJlZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChmaWxlcmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FjaGluZyBsb2FkaW5nIHByb21pc2UgdG8gYXZvaWQgZHVwbGljYXRpb25zXHJcbiAgICBsZXQgaXNMb2FkaW5nID0ge307XHJcbiAgICBmdW5jdGlvbiBsb2FkanNjc3NmaWxlQXN5bmMoZmlsZW5hbWUsIGZpbGV0eXBlKSB7XHJcbiAgICAgICAgaXNMb2FkaW5nW2ZpbGVuYW1lXSA9IGlzTG9hZGluZ1tmaWxlbmFtZV0gfHwgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlsZXJlZjtcclxuICAgICAgICAgICAgaWYgKGZpbGV0eXBlID09PSAnanMnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYSBleHRlcm5hbCBKYXZhU2NyaXB0IGZpbGVcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWxldHlwZSA9PT0gJ2NzcycpIHsgLy9pZiBmaWxlbmFtZSBpcyBhbiBleHRlcm5hbCBDU1MgZmlsZVxyXG4gICAgICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xyXG4gICAgICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdocmVmJywgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZXJlZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYub25sb2FkID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZmlsZXJlZik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyBkZWxldGUgaXNMb2FkaW5nW2ZpbGVuYW1lXTsgcmV0dXJuIHJlczsgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpc0xvYWRpbmdbZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZWpzY3NzZmlsZShmaWxlbmFtZSwgZmlsZXR5cGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ZWxlbWVudCA9IGZpbGV0eXBlID09PSAnanMnID8gJ3NjcmlwdCcgOiBmaWxldHlwZSA9PT0gJ2NzcycgPyAnbGluaycgOiAnbm9uZSc7IC8vZGV0ZXJtaW5lIGVsZW1lbnQgdHlwZSB0byBjcmVhdGUgbm9kZWxpc3QgZnJvbVxyXG4gICAgICAgIGxldCB0YXJnZXRhdHRyID0gZmlsZXR5cGUgPT09ICdqcycgPyAnc3JjJyA6IGZpbGV0eXBlID09PSAnY3NzJyA/ICdocmVmJyA6ICdub25lJzsgLy9kZXRlcm1pbmUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgdG8gdGVzdCBmb3JcclxuICAgICAgICBsZXQgYWxsc3VzcGVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YXJnZXRlbGVtZW50KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gYWxsc3VzcGVjdHMubGVuZ3RoOyBpID49IDA7IGktLSkgeyAvL3NlYXJjaCBiYWNrd2FyZHMgd2l0aGluIG5vZGVsaXN0IGZvciBtYXRjaGluZyBlbGVtZW50cyB0byByZW1vdmVcclxuICAgICAgICAgICAgaWYgKGFsbHN1c3BlY3RzW2ldICYmIGFsbHN1c3BlY3RzW2ldLmdldEF0dHJpYnV0ZSh0YXJnZXRhdHRyKSAhPT0gbnVsbCAmJiBhbGxzdXNwZWN0c1tpXS5nZXRBdHRyaWJ1dGUodGFyZ2V0YXR0cikuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxzdXNwZWN0c1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFsbHN1c3BlY3RzW2ldKTsgLy9yZW1vdmUgZWxlbWVudCBieSBjYWxsaW5nIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHVyaSwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJyhbPyZdKScgKyBrZXkgKyAnPS4qPygmfCQpJywgJ2knKTtcclxuICAgICAgICB2YXIgc2VwYXJhdG9yID0gdXJpLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPyc7XHJcbiAgICAgICAgaWYgKHVyaS5tYXRjaChyZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVyaS5yZXBsYWNlKHJlLCAnJDEnICsga2V5ICsgJz0nICsgdmFsdWUgKyAnJDInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmkgKyBzZXBhcmF0b3IgKyBrZXkgKyAnPScgKyB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuSW5OZXdUYWIoaHRtbCkge1xyXG4gICAgICAgIGxldCBuZXdXaW5kb3cgPSB3aW5kb3cub3BlbignYWJvdXQ6YmxhbmsnKTtcclxuICAgICAgICBpZiAoIW5ld1dpbmRvdyB8fCBuZXdXaW5kb3cuY2xvc2VkIHx8IHR5cGVvZiBuZXdXaW5kb3cuY2xvc2VkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvL1BPUFVQIEJMT0NLRURcclxuICAgICAgICAgICAgLy9pZiAoTm90aWZpZXIpIHtcclxuICAgICAgICAgICAgLy8gICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNhbGVydHMnLCBtZXNzYWdlOiAnQnJvd3NlciBkb2VzIG5vdCBhbGxvdyBvcGVuaW5nIHBvcHVwIHdpbmRvd3MhJywgc3RhdHVzOiAnZGFuZ2VyJyB9KTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xyXG4gICAgICAgICAgICBuZXdXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcclxuICAgICAgICAgICAgbmV3V2luZG93LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyLCBmaW5kLCByZXBsYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxTZWxlY3RvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHJ1bGVzID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ucnVsZXMgfHwgZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0uY3NzUnVsZXM7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggaW4gcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcnVsZXNbeF0uc2VsZWN0b3JUZXh0ID09PSAnc3RyaW5nJykgcmV0LnB1c2gocnVsZXNbeF0uc2VsZWN0b3JUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNzc1NlbGVjdG9yRXhpc3RzKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9ycyA9IGdldEFsbFNlbGVjdG9ycygpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnNbaV0gPT09IHNlbGVjdG9yKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXJsKGlucHV0SWQsIHVybElkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghaW5wdXRJZCB8fCAhdXJsSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyICR0aXRsZSA9ICQoaW5wdXRJZCk7XHJcbiAgICAgICAgdmFyICR1cmwgPSAkKHVybElkKTtcclxuXHJcbiAgICAgICAgdmFyIHRpdGxlVmFsdWUgPSAkdGl0bGUudmFsKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoLy0rL2csICctJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgdXJsVmFsdWUgPSAkdXJsLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmICh1cmxWYWx1ZS5pbmRleE9mKHRpdGxlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB1cmxWYWx1ZSA9IHVybFZhbHVlLnJlcGxhY2UodGl0bGVWYWx1ZSwgJycpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICR0aXRsZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIHRpdGxlVmFsdWUgPSAkdGl0bGUudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICR1cmwudmFsKHRpdGxlVmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoLy0rL2csICctJykudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHM0LFxyXG4gICAgICAgIGd1aWQsXHJcbiAgICAgICAgaXNHdWlkLFxyXG4gICAgICAgIGxvYWRqc2Nzc2ZpbGUsXHJcbiAgICAgICAgbG9hZGpzY3NzZmlsZUFzeW5jLFxyXG4gICAgICAgIHJlbW92ZWpzY3NzZmlsZSxcclxuICAgICAgICB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcixcclxuICAgICAgICBpc0Z1bmN0aW9uLFxyXG4gICAgICAgIG9wZW5Jbk5ld1RhYixcclxuICAgICAgICByZXBsYWNlQWxsLFxyXG4gICAgICAgIGNzc1NlbGVjdG9yRXhpc3RzLFxyXG4gICAgICAgIHBvcHVsYXRlVXJsXHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gR2xvYmFsIHV0aWxpdGllcyBldmVudHNcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5zdC10b2dnbGUnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgIGxldCAkdHJpZ2dlciA9ICQodGhpcyk7XHJcbiAgICBsZXQgJHRhcmdldCA9ICQoJHRyaWdnZXIuYXR0cignZGF0YS10b2dnbGUnKSk7XHJcblxyXG4gICAgaWYgKCR0cmlnZ2VyLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgJHRhcmdldC5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7ICQoZWxlbWVudCkuc2hvdygpOyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHRhcmdldC5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7ICQoZWxlbWVudCkuaGlkZSgpOyB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgeyBVdGlscyB9O1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbnZhciBWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKCRlbGVtZW50LCBlcnJvck1lc3NhZ2UsIHZhbGlkYXRlRnVuYykge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICRlbGVtZW50LnZhbCgpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUZ1bmModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNzcygnYm9yZGVyJywgJycpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5uZXh0KCdzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNzcygnYm9yZGVyJywgJzFweCBzb2xpZCAjZmY2ODY4Jyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KGVycm9yTWVzc2FnZSB8fCAnSW52YWxpZCB2YWx1ZSEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW5MZW5naHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSBtaW5MZW5naHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXhMZW5naHQpIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IG1heExlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXihbYS16MC05XSspJC9pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTk7XSskLztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNVcmxGcmllbmRseSh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16QS1aMC05LV9dKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1N0YXJ0aW5nV2l0aExldHRlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16XS9pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlxcZCtcXC5cXGR7MCwyfSQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eLT9cXGQrXFwuP1xcZCokLztcclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzR3VpZChzdHJpbmdUb1Rlc3QpIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9UZXN0WzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgc3RyaW5nVG9UZXN0ID0gc3RyaW5nVG9UZXN0LnN1YnN0cmluZygxLCBzdHJpbmdUb1Rlc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWdleEd1aWQgPSAvXihcXHspezAsMX1bMC05YS1mQS1GXXs4fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezEyfShcXH0pezAsMX0kL2dpO1xyXG4gICAgICAgIHJldHVybiByZWdleEd1aWQudGVzdChzdHJpbmdUb1Rlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBwYXJzZUludCh2YWx1ZSkgPT0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmIChtaW4gJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgbG93ZXIgb3IgZXF1YWwgdG8gJHttYXh9LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gbWF4ID8gK3ZhbHVlIDw9ICttYXggOiB0cnVlOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgb3IgZXF1YWwgdG8gJHttaW59LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gbWluID8gK3ZhbHVlID49ICttaW4gOiB0cnVlOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0xlbmdodEluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycyBsb25nLmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaGFzTWluaW11bUxlbmd0aCh2YWx1ZSwgbWluKTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heCAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgbWF4aW11bSBwZXJtaXR0ZWQgY2hhcmFjdGVycyBsZW5ndGggaXMgJHttYXh9LmAsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaGFzTWF4aW11bUxlbmd0aCh2YWx1ZSwgbWF4KTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHZhbGlkYXRlIGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzICd2YWxpZGF0ZScgaW5zaWRlIHRoZSB3cmFwcGVyLlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9tVmFsaWRhdGlvbkZ1bmMgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb24gZm9yIGhhbmRsaW5nIHNwZWNpZmljIGxvZ2ljLiBXaWxsIHJlY2lldmUgdGhlIEhUTUxFbGVtZW50LlxyXG4gICAgICogTXVzdCByZXR1cm4gdHJ1ZSBpZiB2YWxpZGF0aW9uIGlzIHBhc3NpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24oY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkcyhldikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMgJiYgIWV2ICYmICFldi50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIEhUTUxFbGVtZW50IGhhcyBiZWVuIHByb3ZpZGVkLCAnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0ICRlbGVtZW50c1RvVmFsaWRhdGUgPSAkKHRoaXMgfHwgZXYudGFyZ2V0KS5maW5kKCcudmFsaWRhdGUnKTtcclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRlbGVtZW50c1RvVmFsaWRhdGUuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICFmbGFnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlRmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoJGVsZW1lbnQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlcyA9IHtcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ1JlcXVpcmVkIGZpZWxkIScsXHJcbiAgICAgICAgICAgICdlbWFpbCc6ICdJbnZhbGlkIEUtTWFpbCEnLFxyXG4gICAgICAgICAgICAnaW50JzogJ05vdCBhbiBpbnRlZ2VyIG51bWJlciEnLFxyXG4gICAgICAgICAgICAnbnVtYmVyJzogJ05vdCBhIG51bWJlciEnLFxyXG4gICAgICAgICAgICAnZ3VpZCc6ICdJbnZhbGlkIGd1aWQhJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uVHlwZXMgPSAoJGVsZW1lbnQuYXR0cignZGF0YS12YWxpZGF0aW9uLXR5cGUnKSB8fCAnJykuc3BsaXQoJyAnKTtcclxuICAgICAgICBsZXQgaW5uZXJGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1pbiA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgbGV0IG1heCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWF4Jyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdGlvblR5cGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbWVzc2FnZS0nICsgdmFsaWRhdGlvblR5cGVzW2ldKSB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbdmFsaWRhdGlvblR5cGVzW2ldXTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodmFsaWRhdGlvblR5cGVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gISF2YWx1ZTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCB2YWxpZGF0ZUVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc051bWJlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkZWNpbWFsJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RvdWJsZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmbG9hdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJGVsZW1lbnQsIG5hbWUgKyAnIG11c3QgYmUgZGVjaW1hbCBmbG9hdGluZyBwb2ludCBudW1iZXIhJywgKHZhbHVlKSA9PiB7IHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlKSA9PSB2YWx1ZTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc0ludGVnZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2d1aWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBpc0d1aWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY3VzdG9tVmFsaWRhdGlvbkZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFjdXN0b21WYWxpZGF0aW9uRnVuYygkZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlubmVyRmxhZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWlubmVyRmxhZztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyKGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9IGV2ID8gJChldi50YXJnZXQpIDogJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGaWVsZCgkdGFyZ2V0LCBjdXN0b21WYWxpZGF0aW9uRnVuYyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcihuYW1lLCB1cmwsIG1pbkxlbmdodCwgZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICBsZXQgdGltZXIgPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybE9uQ2hhbmdlKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgbWluID0gbWluTGVuZ2h0IHx8ICRpbnB1dC5hdHRyKCdkYXRhLW1pbicpO1xyXG4gICAgICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChtaW4gJiYgIVZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIGBUaGUgdmFsdWUgbXVzdCBiZSBhdGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmchYCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCArbWluKTsgfSkpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICRpbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5W25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBleHRyYVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keVtrZXldID0gZXh0cmFWYWx1ZXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogdXJsLCBkYXRhOiBib2R5IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0LCByZXMubWVzc2FnZSB8fCAnVmFsdWUgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiByZXMuc3VjY2VzczsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dC5uZXh0KCdzcGFuJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVVybE9uQ2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsKHZhbGlkYXRlVXJsLCAkdXJsRmllbGQsICRidG5TdWJtaXQpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoL15bXFx3XFwtXFwuXSskL2kpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGUoJHVybEZpZWxkLCAnVXJsIGNhbiBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgZGFzaCgtKSwgcG9pbnQoLikgYW5kIHVuZGVyc2NvcmUoXykgIScsICh2KSA9PiBtYXRjaGVzUGF0dGVybih2LCBwYXR0ZXJuKSkpIHtcclxuICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6IHZhbGlkYXRlVXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGUoJHVybEZpZWxkLCAnVXJsIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJywgKHYpPT4gcmVzLnN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVbmlxdWVuZXMobmFtZSwgY2xhc3NUb1ZhbGlkYXRlKSB7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHZhciAkYWxsTmFtZXMgPSAkKCcuJyArIGNsYXNzVG9WYWxpZGF0ZSk7XHJcbiAgICAgICAgZm9yIChuYW1lIGluICRhbGxOYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoJGFsbE5hbWVzW25hbWVdLnZhbHVlID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsaWRhdGUsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWMsXHJcbiAgICAgICAgaGFzTWluaW11bUxlbmd0aCxcclxuICAgICAgICB2YWxpZGF0ZUVtYWlsLFxyXG4gICAgICAgIGlzU3RhcnRpbmdXaXRoTGV0dGVyLFxyXG4gICAgICAgIGlzVXJsRnJpZW5kbHksXHJcbiAgICAgICAgaXNOdW1iZXIsXHJcbiAgICAgICAgaXNEZWNpbWFsTnVtYmVyLFxyXG4gICAgICAgIGlzQWxwaGFOdW1lcmljQW5kU2VtaWNvbG9uLFxyXG4gICAgICAgIGlzRnVuY3Rpb24sXHJcbiAgICAgICAgaXNHdWlkLFxyXG4gICAgICAgIGNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24sXHJcbiAgICAgICAgaXNJbnRlZ2VyLFxyXG4gICAgICAgIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlRmllbGQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcixcclxuICAgICAgICB2YWxpZGF0ZVVuaXF1ZW5lcyxcclxuICAgICAgICB2YWxpZGF0ZVVybFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IFZhbGlkYXRvciB9O1xyXG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAtLS0gZmlsZS1oYW5kbGVyIC0tLVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gKiAgLXYzLjAgb3ZlcmFsbCByZWZhY3Rvci5cclxuICogICAgICAtIHVwbG9hZCBhbmQgc2VsZWN0IG1vdmVkIHRvIHNlcGFyZXRlIG1vZHVsZVxyXG4gKiAgICAgIC0gcmVtb3ZlZCB1c2FnZSBzcGVjaWZpYyBsb2dpYywgbm93IGFjY2Vzc2VkIHZpYSBtZWRpYXRvclxyXG4gKiAgXHJcbiAqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5qcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4uL2NvbW1vbi92YWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgeyBsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyB9IGZyb20gJy4uL2NvbW1vbi9oYW5kbGViYXJzLmpzJztcclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGaWxlSGFuZGxlcigkY29udGFpbmVyLCBtb2Rlcywgc2VsZWN0ZWRMaWJyYXJ5LCBtZWRpYXRvciwgbG9nZ2VyLCBtdWx0aXBsZVNlbGVjdGlvbikge1xyXG4gICAgbGV0IG1vZHVsZXMgPSB7XHJcbiAgICAgICAgJ1VwbG9hZCc6IHsgY3RvcjogZmlsZUhhbmRsZXJVcGxvYWQsIGluc3RhbmNlOiB1bmRlZmluZWQsIHN0YXR1czogJ25vdC1hY3RpdmUnIH0sXHJcbiAgICAgICAgJ1NlbGVjdCc6IHsgY3RvcjogZmlsZUhhbmRsZXJTZWxlY3QsIGluc3RhbmNlOiB1bmRlZmluZWQsIHN0YXR1czogJ25vdC1hY3RpdmUnIH0sXHJcbiAgICAgICAgJ1NlbGVjdGVkJzogeyBjdG9yOiBmaWxlSGFuZGxlclNlbGVjdGVkLCBpbnN0YW5jZTogdW5kZWZpbmVkLCBzdGF0dXM6ICdub3QtYWN0aXZlJyB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgJG5hdiA9ICQoJzx1bD48L3VsPicsIHsgY2xhc3M6ICduYXYgbmF2LXRhYnMgZmlsZS1oYW5kbGVyLW5hdicgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICBsZXQgJGNvbnRlbnRSb3cgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdmaWxlLWhhbmRsZXItY29udGVudC1yb3cnIH0pLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG5cclxuICAgIGZvciAodmFyIGtleSBvZiBtb2Rlcykge1xyXG4gICAgICAgIGlmIChtb2R1bGVzW2tleV0pIHtcclxuXHJcbiAgICAgICAgICAgIGxldCAkYnRuTmF2ID0gJCgnPGxpPjwvbGk+Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6IGBgLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogYDxhIGNsYXNzPVwiZmlsZS1oYW5kbGVyLW5hdi1idG5cIiBkYXRhLXR5cGU9XCIke2tleX1cIj4ke2tleX08L2E+YCxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICdwcmVzZW50YXRpb24nXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJG5hdi5hcHBlbmQoJGJ0bk5hdik7XHJcblxyXG4gICAgICAgICAgICBsZXQgJHdyYXBwZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBgZmlsZS1oYW5kbGVyLWNvbnRhaW5lciBmaWxlLWhhbmRsZXItJHtrZXl9YFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRjb250ZW50Um93LmFwcGVuZCgkd3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICBtb2R1bGVzW2tleV0uaW5zdGFuY2UgPSBtb2R1bGVzW2tleV0uY3Rvcihsb2dnZXIsICR3cmFwcGVyLCBtZWRpYXRvciwgc2VsZWN0ZWRMaWJyYXJ5LCBtdWx0aXBsZVNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIG1vZHVsZXNba2V5XS5zdGF0dXMgPSAnYWN0aXZlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZHVsZSh7IHRhcmdldDogJG5hdi5maW5kKCcuZmlsZS1oYW5kbGVyLW5hdi1idG4nKS5maXJzdCgpIH0pO1xyXG4gICAgYmluZEV2ZW50cygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgbGV0ICRzZWxlY3RlZEJ1dHRvbiA9ICQoJ1tkYXRhLXR5cGU9U2VsZWN0ZWRdJyk7XHJcbiAgICAgICAgJG5hdi5vbignY2xpY2snLCAnLmZpbGUtaGFuZGxlci1uYXYtYnRuJywgb3Blbk1vZHVsZSk7XHJcbiAgICAgICAgJHNlbGVjdGVkQnV0dG9uLm9uKCdjbGljaycsIGZpbGVIYW5kbGVyU2VsZWN0ZWQpO1xyXG4gICAgICAgIG1lZGlhdG9yLm9uKCdmaWxlSGFuZGxlclR5cGVDaGFuZ2UnLCBvcGVuTW9kdWxlLmJpbmQodGhpcywgeyB0YXJnZXQ6ICRuYXYuZmluZCgnLmZpbGUtaGFuZGxlci1uYXYtYnRuJykuZmlyc3QoKSB9KSwgJ3VwbG9hZFR5cGVDaGFuZ2UnLCAnRmlsZUhhbmRsZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG4gICAgICAgICRuYXYub2ZmKCdjbGljaycsICcuZmlsZS1oYW5kbGVyLW5hdi1idG4nLCBvcGVuTW9kdWxlKTtcclxuICAgICAgICBtZWRpYXRvci5vZmYoJ2ZpbGVIYW5kbGVyVHlwZUNoYW5nZScsICd1cGxvYWRUeXBlQ2hhbmdlJywgJ0ZpbGVIYW5kbGVyJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2R1bGVzW2tleV0uc3RhdHVzID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlc1trZXldLmluc3RhbmNlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIG1vZHVsZXNba2V5XS5pbnN0YW5jZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG1vZHVsZXNba2V5XS5zdGF0dXMgPT09ICdub3QtYWN0aXZlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kdWxlKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2LnRhcmdldCk7XHJcblxyXG4gICAgICAgICRuYXYuZmluZCgnLmZpbGUtaGFuZGxlci1uYXYtYnRuLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY29udGVudFJvdy5maW5kKCcuZmlsZS1oYW5kbGVyLWNvbnRhaW5lci5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkdGFyZ2V0LnBhcmVudCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICRjb250ZW50Um93LmZpbmQoYC5maWxlLWhhbmRsZXItY29udGFpbmVyLmZpbGUtaGFuZGxlci0keyR0YXJnZXQuYXR0cignZGF0YS10eXBlJyl9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcG9zZVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsZUhhbmRsZXJVcGxvYWQobG9nZ2VyLCAkY29udGFpbmVyLCBtZWRpYXRvciwgbGlicmFyeUlkLCBpc011bHRpcGxlKSB7XHJcbiAgICBsZXQgJGlucHV0RmlsZXM7XHJcbiAgICBsZXQgJG5vdGlmaWVyO1xyXG4gICAgbGV0ICRmaWxlc0NvbnRhaW5lcjtcclxuICAgIGxldCAkbGlicmFyaWVzO1xyXG4gICAgbGV0ICRidG5VcGxvYWQ7XHJcbiAgICBsZXQgJGRyb3BBcmVhO1xyXG4gICAgbGV0ICR1cGxvYWRCdG47XHJcblxyXG4gICAgbGV0IGxpYnJhcnlQcmVmaXggPSAnJztcclxuICAgIGxldCBsaWJyYXJ5QWxsb3dlZCA9ICcnO1xyXG4gICAgbGV0IGZpbGVzID0gW107XHJcbiAgICBsZXQgdXBsb2FkZWRGaWxlcyA9IFtdO1xyXG4gICAgbGV0IHRlbXBsYXRlc0NhY2hlID0ge307XHJcbiAgICBsZXQgdGVtcGxhdGVzID0gW3sgbmFtZTogJ2ZpbGUtdXBsb2FkJywgdXJsOiAnL3RlbXBsYXRlcy9maWxlLXVwbG9hZC5odG1sJyB9XTtcclxuICAgIGxldCByZXF1ZXN0ZXI7XHJcblxyXG4gICAgbG9nZ2VyLmxvZygnaW5pdGlhbGF6aW5nIHVwbG9hZCBtb2R1bGUuLi4nKTtcclxuICAgIGxldCB1cmwgPSBgL3NpdGV0cmlrcy9maWxlcy91cGxvYWRUZW1wbGF0ZT9pc011bHRpcGxlPSR7aXNNdWx0aXBsZX0mbGlicmFyeUlkPSR7bGlicmFyeUlkfWA7XHJcblxyXG4gICAgRGF0YS5nZXRKc29uKHsgdXJsOiB1cmwsIGRpc2FibGVDYWNoZTogdHJ1ZSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwocmVzKTtcclxuXHJcbiAgICAgICAgJGlucHV0RmlsZXMgPSAkY29udGFpbmVyLmZpbmQoJy5pbnB1dC1maWxlcycpO1xyXG4gICAgICAgICRub3RpZmllciA9ICRjb250YWluZXIuZmluZCgnLmFjY2VwdGVkLWZvcm1hdHMnKTtcclxuICAgICAgICAkZmlsZXNDb250YWluZXIgPSAkY29udGFpbmVyLmZpbmQoJy5maWxlcy1jb250YWluZXInKTtcclxuICAgICAgICAkbGlicmFyaWVzID0gJGNvbnRhaW5lci5maW5kKCcuZmlsZS11cGxvYWQtbGlicmFyeScpO1xyXG4gICAgICAgICRidG5VcGxvYWQgPSAkY29udGFpbmVyLmZpbmQoJy5idG4tc3VibWl0LWltYWdlcycpO1xyXG4gICAgICAgICRkcm9wQXJlYSA9ICRjb250YWluZXIuZmluZCgnI2Ryb3AtYXJlYScpO1xyXG4gICAgICAgICR1cGxvYWRCdG4gPSAkY29udGFpbmVyLmZpbmQoJy5idG4tc3VibWl0LWltYWdlcycpO1xyXG5cclxuICAgICAgICByZXR1cm4gbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXModGVtcGxhdGVzQ2FjaGUsIHRlbXBsYXRlcyk7XHJcbiAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcikudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgJGxpYnJhcmllcy5vbignY2hhbmdlJywgbG9hZEFsbG93ZWRUeXBlcyk7XHJcbiAgICAgICAgJGlucHV0RmlsZXMub24oJ2NoYW5nZScsIHJlbmRlckZpbGVzKTtcclxuICAgICAgICAkYnRuVXBsb2FkLm9uKCdjbGljaycsIHVwbG9hZEZpbGVzKTtcclxuICAgICAgICAkY29udGFpbmVyLm9uKCdrZXl1cCcsICcuaW5wdXQtdXJsJywgdmFsaWRhdGVGaWxlVXJsKTtcclxuICAgICAgICAkZHJvcEFyZWEub24oJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xyXG4gICAgICAgICRkcm9wQXJlYS5vbignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcclxuICAgICAgICAkZHJvcEFyZWEub24oJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XHJcbiAgICAgICAgJGRyb3BBcmVhLm9uKCdkcm9wJywgZHJvcCk7XHJcbiAgICAgICAgbWVkaWF0b3Iub24oJ2ZpbGVMaWJyYXJ5Q2hhbmdlJywgc2VsZWN0TGlicmFyeSwgJ3NlbGVjdExpYnJhcnknLCAnRmlsZUhhbmRsZXJVcGxvYWQnKTtcclxuICAgICAgICBtZWRpYXRvci5vbignZmlsZUhhbmRsZXJUeXBlQ2hhbmdlJywgdHlwZUNoYW5nZSwgJ3VwbG9hZFR5cGVDaGFuZ2UnLCAnRmlsZUhhbmRsZXJVcGxvYWQnKTtcclxuICAgICAgICBtZWRpYXRvci5vbignZmlsZUhhbmRsZXJDbGVhbicsIGNsZWFuVXAsICdjbGVhbkNvbnRlbnQnLCAnRmlsZUhhbmRsZXJVcGxvYWQnKTtcclxuXHJcbiAgICAgICAgJGxpYnJhcmllcy50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG4gICAgICAgICRsaWJyYXJpZXMub2ZmKCdjaGFuZ2UnLCBsb2FkQWxsb3dlZFR5cGVzKTtcclxuICAgICAgICAkaW5wdXRGaWxlcy5vZmYoJ2NoYW5nZScsIHJlbmRlckZpbGVzKTtcclxuICAgICAgICAkYnRuVXBsb2FkLm9mZignY2xpY2snLCB1cGxvYWRGaWxlcyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vZmYoJ2tleXVwJywgJy5pbnB1dC11cmwnLCB2YWxpZGF0ZUZpbGVVcmwpO1xyXG4gICAgICAgICRkcm9wQXJlYS5vZmYoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xyXG4gICAgICAgICRkcm9wQXJlYS5vZmYoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XHJcbiAgICAgICAgJGRyb3BBcmVhLm9mZignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcclxuICAgICAgICAkZHJvcEFyZWEub24oJ2Ryb3AnLCBkcm9wKTtcclxuICAgICAgICBtZWRpYXRvci5vZmYoJ2ZpbGVMaWJyYXJ5Q2hhbmdlJywgJ3NlbGVjdExpYnJhcnknLCAnRmlsZUhhbmRsZXJVcGxvYWQnKTtcclxuICAgICAgICBtZWRpYXRvci5vZmYoJ2ZpbGVIYW5kbGVyVHlwZUNoYW5nZScsICd1cGxvYWRUeXBlQ2hhbmdlJywgJ0ZpbGVIYW5kbGVyVXBsb2FkJyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlSGFuZGxlckNsZWFuJywgJ2NsZWFuQ29udGVudCcsICdGaWxlSGFuZGxlclVwbG9hZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRBbGxvd2VkVHlwZXMoZXYpIHtcclxuICAgICAgICBsaWJyYXJ5SWQgPSBldi50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY2xlYW5VcCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9saWJyYXJpZXMvR2V0QWxsb3dlZEZvckxpYnJhcnk/aWQ9JyArIGxpYnJhcnlJZCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnIHx8IHJlcyBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICRpbnB1dEZpbGVzLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FjY2VwdCcsIHJlcy5leHQpO1xyXG4gICAgICAgICAgICAgICAgJGRyb3BBcmVhLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgJG5vdGlmaWVyLnRleHQoJ0FjY2VwdGVkIGZpbGVzOiAnICsgKHJlcy50eXBlLmRpc3BsYXlOYW1lIHx8IHJlcy50eXBlLmV4dGVuc2lvbnMpKTtcclxuICAgICAgICAgICAgICAgIGxpYnJhcnlBbGxvd2VkID0gVXRpbHMucmVwbGFjZUFsbChVdGlscy5yZXBsYWNlQWxsKHJlcy5leHQsICcqJywgJycpLCAnLCcsICd8Jyk7XHJcbiAgICAgICAgICAgICAgICBsaWJyYXJ5UHJlZml4ID0gcmVzLnByZWZpeDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRpbnB1dEZpbGVzLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAkZHJvcEFyZWEuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyRmlsZXMoKSB7XHJcbiAgICAgICAgZmlsZXMgPSBbXTtcclxuICAgICAgICAkZmlsZXNDb250YWluZXIuaHRtbCgnJyk7XHJcbiAgICAgICAgdXBsb2FkZWRGaWxlcyA9IFtdO1xyXG4gICAgICAgIGxldCBkYXRlID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZXNDYWNoZVsnZmlsZS11cGxvYWQnXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRpbnB1dEZpbGVzWzBdLmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RmlsZSA9ICRpbnB1dEZpbGVzWzBdLmZpbGVzW2ldO1xyXG4gICAgICAgICAgICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cChsaWJyYXJ5QWxsb3dlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlZ0V4cC50ZXN0KGN1cnJlbnRGaWxlLm5hbWUpICYmICFyZWdFeHAudGVzdChjdXJyZW50RmlsZS50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgJGZpbGVzQ29udGFpbmVyLmFwcGVuZChgPHA+PHN0cm9uZz48c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+JHtjdXJyZW50RmlsZS5uYW1lfSBmaWxlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCBieSBzZWxlY3RlZCBsaWJyYXJ5IGFuZCB3aWxsIG5vdCBiZSB1cGxvYWRlZCE8L3NwYW4+PC9zdHJvbmc+PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCAkZnJhZ21lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnaW1nLXVwbG9hZC13cmFwcGVyIHVwbG9hZC1lbGVtZW50LScgKyBpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gY3VycmVudEZpbGUubmFtZS5zdWJzdHJpbmcoMCwgY3VycmVudEZpbGUubmFtZS5sYXN0SW5kZXhPZignLicpKTtcclxuICAgICAgICAgICAgbGV0IGZpbGVVcmwgPSBjdXJyZW50RmlsZS5uYW1lLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IFV0aWxzLmd1aWQoKTtcclxuXHJcbiAgICAgICAgICAgICRmcmFnbWVudC5hcHBlbmQodGVtcGxhdGUoeyBpbmRleDogaWQsIG5hbWU6IGZpbGVOYW1lLCBhbHQ6IGZpbGVOYW1lLCB1cmw6IGZpbGVVcmwgfSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlLnR5cGUgJiYgY3VycmVudEZpbGUudHlwZS5pbmRleE9mKCdpbWFnZS8nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGN1cnJlbnRGaWxlKTtcclxuICAgICAgICAgICAgICAgICRmcmFnbWVudC5hcHBlbmQoYDxpbWcgc3JjPVwiJHtmaWxlfVwiIGNsYXNzPVwiZGlzcGxheS1pbWFnZVwiPmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGZyYWdtZW50LmFwcGVuZCgnPGltZyBzcmM9XCIvSW1hZ2VzL2RlZmF1bHQtZG9jdW1lbnQtaW1hZ2UucG5nXCI+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRmaWxlc0NvbnRhaW5lci5hcHBlbmQoJGZyYWdtZW50KTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGaWxlVXJsKCRmcmFnbWVudC5maW5kKCcuaW5wdXQtdXJsJykpO1xyXG5cclxuICAgICAgICAgICAgZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XHJcbiAgICAgICAgICAgIHVwbG9hZGVkRmlsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWxlTmFtZSArICctJyArIGRhdGUsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGZpbGVVcmwgKyAnLScgKyBkYXRlLFxyXG4gICAgICAgICAgICAgICAgYWx0OiBmaWxlTmFtZSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZTogY3VycmVudEZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJHVwbG9hZEJ0bi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBsb2FkRmlsZXMoKSB7XHJcbiAgICAgICAgbGV0IG5vdGlmaWVyID0gJy5maWxlLWhhbmRsZXItbm90aWZpZXInO1xyXG4gICAgICAgIGlmICh1cGxvYWRlZEZpbGVzLmxlbmd0aCA9PT0gMCB8fCBmaWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbWVkaWF0b3IuZGlzcGF0Y2goJ2FsZXJ0JywgeyBzZWxlY3Rvcjogbm90aWZpZXIsIG1lc3NhZ2U6ICdObyBmaWxlcyBoYXZlIGJlZW4gc2VsZWN0ZWQhJywgc3RhdHVzOiAnd2FybmluZycgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB1cmxzID0gW107XHJcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAkY29udGFpbmVyLmZpbmQoJy5pbnB1dC11cmwnKS5lYWNoKGZ1bmN0aW9uIChpLCBvYmopIHtcclxuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJChvYmopO1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsaWJyYXJ5UHJlZml4KSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBsaWJyYXJ5UHJlZml4ICsgJy8nICsgdXJsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXJscy5pbmRleE9mKHVybCkgPiAtMSB8fCBmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgcmVkJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cmxzLnB1c2godXJsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgbWVkaWF0b3IuZGlzcGF0Y2goJ2FsZXJ0JywgeyBzZWxlY3Rvcjogbm90aWZpZXIsIG1lc3NhZ2U6ICdVcmxzIG11c3QgYmUgdW5pcXVlIGFuZCBhbHRlYXN0IDMgY2hhcmFjdGVycyBsb25nIScsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRjb250YWluZXIuZmluZCgnLmlucHV0LW5hbWUnKS5lYWNoKGZ1bmN0aW9uIChpLCBvYmopIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSAkKG9iaikudmFsKCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgbWVkaWF0b3IuZGlzcGF0Y2goJ2FsZXJ0JywgeyBzZWxlY3Rvcjogbm90aWZpZXIsIG1lc3NhZ2U6ICdOYW1lIG11c3QgYmUgYXRsZWFzdCAzIGNoYXJhY3RlcnMhJywgc3RhdHVzOiAnZGFuZ2VyJyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIERhdGEucG9zdEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL3BhZ2VzL3ZhbGlkYXRlVXJscycsIGRhdGE6IHsgdXJscyB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVGaWxlc0luZm8odXBsb2FkZWRGaWxlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBsb2FkZWRGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlc0luZm8nLCBKU09OLnN0cmluZ2lmeShlbGVtZW50KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xpYnJhcnknLCBsaWJyYXJ5SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnBvc3RGb3JtKHsgdXJsOiAnL3NpdGV0cmlrcy9maWxlcy91cGxvYWRmaWxlJywgZm9ybURhdGE6IGZvcm1EYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lZGlhdG9yLmRpc3BhdGNoKCdhbGVydCcsIHsgc2VsZWN0b3I6IG5vdGlmaWVyLCB0aXRsZTogJ05vdCBhbGwgdXJscyBhcmUgdmFsaWQhJywgbWVzc2FnZTogcmVzLm1lc3NhZ2UsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbWVkaWF0b3IuZGlzcGF0Y2goJ2ZpbGVzVXBsb2FkZWQnLCB7IGZpbGVJZHM6IHJlcy5pZHMsIGxpYnJhcnlJZDogbGlicmFyeUlkLCByZXF1ZXN0ZXIgfSk7XHJcbiAgICAgICAgICAgICAgICBtZWRpYXRvci5kaXNwYXRjaCgndXBsb2FkZWRGaWxlc0V2ZW50JywgeyBmaWxlSWRzOiByZXMuaWRzLCBzaXplTmFtZTogJ09yaWdpbmFsJywgbGlicmFyeUlkOiBsaWJyYXJ5SWQsIHJlcXVlc3RlciB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRmlsZXNJbmZvKGZpbGVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmaWxlc1tpXS5uYW1lID0gJGNvbnRhaW5lci5maW5kKCcjaW5wdXQtbmFtZS0nICsgZmlsZXNbaV0uaWQpLnZhbCgpO1xyXG4gICAgICAgICAgICBmaWxlc1tpXS51cmwgPSAkY29udGFpbmVyLmZpbmQoJyNpbnB1dC11cmwtJyArIGZpbGVzW2ldLmlkKS52YWwoKTtcclxuICAgICAgICAgICAgZmlsZXNbaV0uYWx0ID0gJGNvbnRhaW5lci5maW5kKCcjaW5wdXQtYWx0LScgKyBmaWxlc1tpXS5pZCkudmFsKCk7XHJcbiAgICAgICAgICAgIGZpbGVzW2ldLnR5cGUgPSAkY29udGFpbmVyLmZpbmQoJyNkcm9wZG93bi10eXBlLScgKyBmaWxlc1tpXS5pZCkudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmlsZVVybChldikge1xyXG4gICAgICAgIGxldCAkdXJsRmllbGQgPSAkKGV2LnRhcmdldCA/IGV2LnRhcmdldCA6IGV2KTtcclxuICAgICAgICBsZXQgdXJsID0gJHVybEZpZWxkLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAkdXJsRmllbGQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkIHJlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZVVybChgL3NpdGV0cmlrcy9maWxlcy9WYWxpZGF0ZVVybD91cmw9JHt1cmx9JnByZWZpeD0ke2xpYnJhcnlQcmVmaXh9YCwgJHVybEZpZWxkLCAkYnRuVXBsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0TGlicmFyeShsaWJyYXJ5SWQpIHtcclxuICAgICAgICAkbGlicmFyaWVzLnZhbChsaWJyYXJ5SWQudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgJGxpYnJhcmllcy50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xyXG4gICAgICAgIC8vICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Ryb3AtaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJvcChlKSB7XHJcbiAgICAgICAgaWYgKCQoJyNkcm9wLWFyZWEnKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsZXNWYWx1ZSA9IGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXRGaWxlcy5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dEZpbGVzLnByb3AoJ2ZpbGVzJywgZmlsZXNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJGaWxlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHR5cGVDaGFuZ2UoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdtdWx0aXBsZScpIHtcclxuICAgICAgICAgICAgJGlucHV0RmlsZXMuYXR0cignbXVsdGlwbGUnLCBkYXRhLnR5cGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRpbnB1dEZpbGVzLnJlbW92ZUF0dHIoJ211bHRpcGxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0ZXIgPSBkYXRhLnJlcXVlc3RlcjtcclxuICAgICAgICBjbGVhblVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYW5VcCgpIHtcclxuICAgICAgICBmaWxlcyA9IFtdO1xyXG4gICAgICAgIHVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgICAgICAkaW5wdXRGaWxlcy52YWwoJycpO1xyXG4gICAgICAgICRmaWxlc0NvbnRhaW5lci5odG1sKCcnKTtcclxuICAgICAgICAkdXBsb2FkQnRuLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICQoJy5maWxlLWhhbmRsZXItbm90aWZpZXInKS5odG1sKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3Bvc2VcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGVIYW5kbGVyU2VsZWN0KGxvZ2dlciwgJGNvbnRhaW5lciwgbWVkaWF0b3IsIGxpYnJhcnlJZCwgaXNNdWx0aXBsZSkge1xyXG4gICAgbGV0ICRmaWxlc0NvbnRhaW5lcjtcclxuICAgIGxldCAkbGlicmFyaWVzO1xyXG4gICAgbGV0IHRlbXBsYXRlc0NhY2hlID0ge307XHJcbiAgICBsZXQgdGVtcGxhdGVzID0gW3sgbmFtZTogJ2ZpbGUtc2VsZWN0JywgdXJsOiAnL3RlbXBsYXRlcy9maWxlLXNlbGVjdC5odG1sJyB9XTtcclxuICAgIGxldCBwYWdlID0gMDtcclxuICAgIGxldCAkYnRuTmV4dDtcclxuICAgIGxldCAkYnRuUHJldjtcclxuICAgIGxldCAkcGFnZU51bWJlcjtcclxuICAgIGNvbnN0IHBhZ2VTaXplID0gOTtcclxuICAgIGxldCBuZXh0UGFnZUV4aXN0cyA9IGZhbHNlO1xyXG4gICAgbGV0ICRidG5TZWxlY3Q7XHJcbiAgICBsZXQgcmVxdWVzdGVyO1xyXG4gICAgbGV0IHNlbGVjdGVkRmlsZXMgPSB7fTtcclxuXHJcbiAgICBsb2dnZXIubG9nKCdpbml0IHNlbGVjdCBtb2R1bGUnKTtcclxuXHJcbiAgICBsZXQgdXJsID0gYC9zaXRldHJpa3MvZmlsZXMvc2VsZWN0VGVtcGxhdGU/bGlicmFyeUlkPSR7bGlicmFyeUlkfWA7XHJcbiAgICBEYXRhLmdldEpzb24oeyB1cmw6IHVybCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBsb2dnZXIubG9nKHJlcyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKHJlcyk7XHJcbiAgICAgICAgJGZpbGVzQ29udGFpbmVyID0gJGNvbnRhaW5lci5maW5kKCcuZmlsZXMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGxpYnJhcmllcyA9ICRjb250YWluZXIuZmluZCgnLmZpbGUtc2VsZWN0LWxpYnJhcnknKTtcclxuICAgICAgICAkYnRuTmV4dCA9ICRjb250YWluZXIuZmluZCgnLm5leHQtcGFnZScpO1xyXG4gICAgICAgICRidG5QcmV2ID0gJGNvbnRhaW5lci5maW5kKCcucHJldmlvdXMtcGFnZScpO1xyXG4gICAgICAgICRwYWdlTnVtYmVyID0gJGNvbnRhaW5lci5maW5kKCcucGFnZS1udW1iZXInKTtcclxuICAgICAgICAkYnRuU2VsZWN0ID0gJGNvbnRhaW5lci5maW5kKCcuYnRuLXNlbGVjdCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXModGVtcGxhdGVzQ2FjaGUsIHRlbXBsYXRlcyk7XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgbG9hZEltYWdlcygpO1xyXG5cclxuICAgICAgICBsb2dnZXIubG9nKCdzZWxlY3QgbW9kdWxlIGluaXRpYWxpemVkJyk7XHJcbiAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcblxyXG4gICAgbGV0ICRidG5TYXZlID0gJCgnLmJ0bi1hZGQtd2lkZ2V0Jyk7XHJcbiAgICBsZXQgJGJ0bkVkaXQgPSAkKCcuYnRuLWVkaXQtd2lkZ2V0Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0VXBsb2FkZWRGaWxlcyhkYXRhKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZygnZGF0YS1zZWxlY3QtZmlsZXM6ICcsIGRhdGEpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZExpbmtJZHMgPSBkYXRhLmZpbGVJZHM7XHJcblxyXG4gICAgICAgIGxvZ2dlci5sb2coc2VsZWN0ZWRMaW5rSWRzKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTGlua0lkcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEZpbGVzW3NlbGVjdGVkTGlua0lkc1tpXV0gPSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExpbmtJZDogc2VsZWN0ZWRMaW5rSWRzW2ldLFxyXG4gICAgICAgICAgICAgICAgc2l6ZU5hbWU6ICdPcmlnaW5hbCdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvYWRJbWFnZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGxvZ2dlci5sb2coJ2JpbmQgc2VsZWN0IG1vZHVsZSBldmVudHMnKTtcclxuICAgICAgICAkbGlicmFyaWVzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VMaWJyYXJ5KTtcclxuICAgICAgICAkYnRuTmV4dC5vbignY2xpY2snLCBuZXh0UGFnZSk7XHJcbiAgICAgICAgJGJ0blByZXYub24oJ2NsaWNrJywgcHJldlBhZ2UpO1xyXG4gICAgICAgICRjb250YWluZXIub24oJ2NoYW5nZScsICcudGh1bWJuYWlsU2VsZWN0Jywgc2VsZWN0U2l6ZSk7XHJcbiAgICAgICAgLy8gICAgICAkY29udGFpbmVyLm9uKCdjbGljaycsICcuaW1hZ2UtY2hlY2tib3gnLCBjaGVja0NoZWNrYm94KTtcclxuICAgICAgICAkY29udGFpbmVyLm9uKCdjbGljaycsICcuY2hlY2ttYXJrLWNvdmVyJywgdHJpZ2dlckNoZWNrYm94KTtcclxuICAgICAgICAkY29udGFpbmVyLm9uKCdjbGljaycsICcuaW1hZ2UtY2hlY2tib3gnLCB0b2dnbGVTZWxlY3REcm9wZG93bik7XHJcbiAgICAgICAgJGJ0blNhdmUub24oJ2NsaWNrJywgc2VsZWN0RmlsZXMpO1xyXG4gICAgICAgICRidG5FZGl0Lm9uKCdjbGljaycsIHNlbGVjdEZpbGVzKTtcclxuICAgICAgICAkYnRuU2VsZWN0Lm9uKCdjbGljaycsIHNlbGVjdEZpbGVzKTtcclxuICAgICAgICBtZWRpYXRvci5vbignZmlsZUxpYnJhcnlDaGFuZ2UnLCBzZWxlY3RMaWJyYXJ5LCAnc2VsZWN0TGlicmFyeScsICdGaWxlSGFuZGxlclNlbGVjdCcpO1xyXG4gICAgICAgIG1lZGlhdG9yLm9uKCdmaWxlSGFuZGxlclR5cGVDaGFuZ2UnLCB0eXBlQ2hhbmdlLCAnc2VsZWN0VHlwZUNoYW5nZScsICdGaWxlSGFuZGxlclNlbGVjdCcpO1xyXG4gICAgICAgIG1lZGlhdG9yLm9uKCdwb3B1bGF0ZWRTZWxlY3RlZCcsIHBvcHVsYXRlU2VsZWN0ZWQsICdwb3B1bGF0ZVNlbGVjdGVkRmlsZXMnLCAnRmlsZUhhbmRsZXJTZWxlY3QnKTtcclxuICAgICAgICBtZWRpYXRvci5vbigndXBsb2FkZWRGaWxlc0V2ZW50Jywgc2VsZWN0VXBsb2FkZWRGaWxlcywgJ3NlbGVjdFVwbG9hZGVkRmlsZXMnLCAnRmlsZUhhbmRsZXJTZWxlY3QnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICBsb2dnZXIubG9nKCdkZXN0b3kgc2VsZWN0IG1vZHVsZScpO1xyXG4gICAgICAgICRsaWJyYXJpZXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VMaWJyYXJ5KTtcclxuICAgICAgICAkY29udGFpbmVyLm9mZignY2hhbmdlJywgJy50aHVtYm5haWxTZWxlY3QnLCBzZWxlY3RTaXplKTtcclxuICAgICAgICAvLyAgICAgICRjb250YWluZXIub2ZmKCdjbGljaycsICcuaW1hZ2UtY2hlY2tib3gnLCBjaGVja0NoZWNrYm94KTtcclxuICAgICAgICAkY29udGFpbmVyLm9mZignY2xpY2snLCAnLmNoZWNrbWFyay1jb3ZlcicsIHRyaWdnZXJDaGVja2JveCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vZmYoJ2NsaWNrJywgJy5pbWFnZS1jaGVja2JveCcsIHRvZ2dsZVNlbGVjdERyb3Bkb3duKTtcclxuICAgICAgICAkYnRuU2F2ZS5vZmYoJ2NsaWNrJywgc2VsZWN0RmlsZXMpO1xyXG4gICAgICAgICRidG5FZGl0Lm9mZignY2xpY2snLCBzZWxlY3RGaWxlcyk7XHJcbiAgICAgICAgJGJ0blNlbGVjdC5vZmYoJ2NsaWNrJywgc2VsZWN0RmlsZXMpO1xyXG4gICAgICAgICRidG5OZXh0Lm9mZignY2xpY2snLCBuZXh0UGFnZSk7XHJcbiAgICAgICAgJGJ0blByZXYub2ZmKCdjbGljaycsIHByZXZQYWdlKTtcclxuICAgICAgICBtZWRpYXRvci5vZmYoJ2ZpbGVMaWJyYXJ5Q2hhbmdlJywgJ3NlbGVjdExpYnJhcnknLCAnRmlsZUhhbmRsZXJTZWxlY3QnKTtcclxuICAgICAgICBtZWRpYXRvci5vZmYoJ2ZpbGVIYW5kbGVyVHlwZUNoYW5nZScsICdzZWxlY3RUeXBlQ2hhbmdlJywgJ0ZpbGVIYW5kbGVyU2VsZWN0Jyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCdwb3B1bGF0ZWRTZWxlY3RlZCcsICdwb3B1bGF0ZVNlbGVjdGVkRmlsZXMnLCAnRmlsZUhhbmRsZXJTZWxlY3QnKTtcclxuICAgICAgICBtZWRpYXRvci5vZmYoJ3VwbG9hZGVkRmlsZXNFdmVudCcsICdzZWxlY3RVcGxvYWRlZEZpbGVzJywgJ0ZpbGVIYW5kbGVyU2VsZWN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEltYWdlcygpIHtcclxuICAgICAgICAkZmlsZXNDb250YWluZXIuaHRtbCgnPHA+TG9hZGluZy4uLjwvcD4nKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZXNDYWNoZVsnZmlsZS1zZWxlY3QnXTtcclxuICAgICAgICBsZXQgaW5wdXRUeXBlID0gaXNNdWx0aXBsZSA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAobGlicmFyeUlkKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb21wYXJpc29uOiAxLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiAnTGlicmFyeUlkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBsaWJyYXJ5SWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2tpcCA9IHBhZ2UgKiBwYWdlU2l6ZTtcclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9maWxlcy9ncmlkJywgZGF0YTogeyBmaWx0ZXJzLCB0YWtlOiBwYWdlU2l6ZSwgc2tpcCB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICRmaWxlc0NvbnRhaW5lci5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgICQocmVzLml0ZW1zKS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCtlbGVtZW50LnR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGZpbGVzQ29udGFpbmVyLmFwcGVuZCh0ZW1wbGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZWxlbWVudC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBlbGVtZW50LnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbHM6IGVsZW1lbnQudGh1bWJuYWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkYnRuUHJldi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJ0blByZXYuYXR0cignZGlzYWJsZWQnLCBmYWxzZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5leHRQYWdlRXhpc3RzID0gcmVzLm5leHRQYWdlRXhpc3RzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMubmV4dFBhZ2VFeGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkYnRuTmV4dC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJ0bk5leHQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRwYWdlTnVtYmVyLnRleHQoYCR7cGFnZSArIDF9LyR7TWF0aC5tYXgoTWF0aC5jZWlsKHJlcy5jb3VudCAvIHBhZ2VTaXplKSwgMSl9YCk7XHJcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdpbWFnZXMgcmVuZGVyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEltYWdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5leHRQYWdlKCkge1xyXG4gICAgICAgIGlmICghbmV4dFBhZ2VFeGlzdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFnZSArPSAxO1xyXG4gICAgICAgIGxvYWRJbWFnZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2UGFnZSgpIHtcclxuICAgICAgICBpZiAocGFnZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhZ2UgLT0gMTtcclxuICAgICAgICBsb2FkSW1hZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTGlicmFyeShldikge1xyXG4gICAgICAgIGxpYnJhcnlJZCA9IGV2LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsb2FkSW1hZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0U2l6ZSgpIHtcclxuICAgICAgICBsZXQgJG9wdGlvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSWQgPSAkb3B0aW9uLnZhbCgpO1xyXG4gICAgICAgIGxldCBpZCA9ICRvcHRpb24uYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGxldCBzaXplTmFtZSA9ICRvcHRpb24uZmluZCgnOnNlbGVjdGVkJykuYXR0cignZGF0YS1zaXplbmFtZScpO1xyXG5cclxuICAgICAgICBzZWxlY3RlZEZpbGVzW2lkXSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMaW5rSWQ6IHNlbGVjdGVkSWQsXHJcbiAgICAgICAgICAgIHNpemVOYW1lOiBzaXplTmFtZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckNoZWNrYm94KGV2KSB7XHJcbiAgICAgICAgbGV0ICRjaGVja2JveCA9ICQodGhpcykucGFyZW50KCkuZmluZCgnLmltYWdlLWNoZWNrYm94LXdyYXBwZXInKS5maW5kKCcuaW1hZ2UtY2hlY2tib3gnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjaGVja2JveC5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaWQgPSAkY2hlY2tib3guYXR0cignZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICBpZiAoJGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZElkID0gaWQ7XHJcbiAgICAgICAgICAgIGxldCBzaXplTmFtZSA9ICdPcmlnaW5hbCc7XHJcbiAgICAgICAgICAgIGlmICgkY2hlY2tib3guYXR0cigndHlwZScpID09PSAncmFkaW8nKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGVzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCAkc2VsZWN0ID0gJGNoZWNrYm94LnBhcmVudHMoJy5pbWFnZS1jb250YWluZXIyJykuZmluZCgnLnRodW1ibmFpbFNlbGVjdCcpO1xyXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkID0gJHNlbGVjdC52YWwoKSB8fCBzZWxlY3RlZElkO1xyXG4gICAgICAgICAgICAgICAgc2l6ZU5hbWUgPSAkc2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtc2l6ZW5hbWUnKSB8fCBzaXplTmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlc1tpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExpbmtJZDogc2VsZWN0ZWRJZCxcclxuICAgICAgICAgICAgICAgIHNpemVOYW1lOiBzaXplTmFtZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgc2VsZWN0ZWRGaWxlc1tpZF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3RGaWxlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RGaWxlcygpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRJbWFnZXNGdWxsSW5mbyA9IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkRmlsZXMpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZExpbmtJZHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZWN0ZWRGaWxlcykge1xyXG4gICAgICAgICAgICBzZWxlY3RlZExpbmtJZHMucHVzaChzZWxlY3RlZEZpbGVzW2tleV0uc2VsZWN0ZWRMaW5rSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI3NlbGVjdGVkSW1hZ2VzJykuYXR0cignZGF0YS1zZWxlY3RlZEltYWdlcycsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkSW1hZ2VzRnVsbEluZm8pKTtcclxuICAgICAgICAkKCcjaW1hZ2UnKS52YWwoc2VsZWN0ZWRMaW5rSWRzKTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3IuZGlzcGF0Y2goJ2ZpbGVzU2VsZWN0ZWQnLCB7IGZpbGVJZHM6IHNlbGVjdGVkTGlua0lkcywgc2VsZWN0ZWRJbWFnZXNGdWxsSW5mbzogc2VsZWN0ZWRJbWFnZXNGdWxsSW5mbywgbGlicmFyeUlkOiBsaWJyYXJ5SWQsIHJlcXVlc3RlciB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVNlbGVjdGVkKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRGaWxlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWQpKSB8fCB7fTtcclxuICAgICAgICBsb2FkSW1hZ2VzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdEZpbGVVSSgpIHtcclxuICAgICAgICAkKCdpbnB1dFtuYW1lPWltYWdlcy1saXN0XScpLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0ICRzZWxlY3RlZCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICgkc2VsZWN0ZWQuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RlZC5wYXJlbnRzKCcuaW1hZ2UtY29udGFpbmVyMicpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNlbGVjdGVkLnBhcmVudHMoJy5pbWFnZS1jb250YWluZXIyJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RMaWJyYXJ5KGxpYnJhcnlJZCkge1xyXG4gICAgICAgICRsaWJyYXJpZXMudmFsKGxpYnJhcnlJZC50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAkbGlicmFyaWVzLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHR5cGVDaGFuZ2UoZGF0YSkge1xyXG4gICAgICAgIGlzTXVsdGlwbGUgPSBkYXRhLnR5cGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgICAgICAgcmVxdWVzdGVyID0gZGF0YS5yZXF1ZXN0ZXI7XHJcbiAgICAgICAgcGFnZSA9IDA7XHJcbiAgICAgICAgbG9hZEltYWdlcygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTZWxlY3RlZEltYWdlcygpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRJbWFnZXNGdWxsSW5mbyA9IHNlbGVjdGVkRmlsZXM7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNlbGVjdGVkSW1hZ2VzRnVsbEluZm8pKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSWRzLnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkSW1hZ2VJZCA9IHNlbGVjdGVkSWRzW2ldO1xyXG5cclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1pbWFnZXMtbGlzdF0nKS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJHNlbGVjdGVkID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IHNlbGVjdGVkSW1hZ2VzRnVsbEluZm9bc2VsZWN0ZWRJbWFnZUlkXS5zZWxlY3RlZExpbmtJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWQuYXR0cignZGF0YS1hbHQtaWQnLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgJGN1cnJlbnRUaHVtYm5haWwgPSAkc2VsZWN0ZWQucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnRodW1ibmFpbFNlbGVjdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0ZWQuYXR0cignZGF0YS1pZCcpID09PSBzZWxlY3RlZEltYWdlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2VsZWN0ZWQucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFRodW1ibmFpbC52YWwoZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0RmlsZVVJKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTZWxlY3REcm9wZG93bihldikge1xyXG4gICAgICAgIGxldCAkY2hlY2tib3ggPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgaWYgKCRjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9ICRjaGVja2JveC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcudGh1bWJuYWlsU2VsZWN0LmRyb3Bkb3duJyk7XHJcbiAgICAgICAgICAgIGxldCAkY2xvbmUgPSAkdGFyZ2V0LmNsb25lKCkucmVtb3ZlQXR0cignZGF0YS1jbGljay1pZCcpO1xyXG4gICAgICAgICAgICAkY2xvbmUudmFsKCR0YXJnZXQudmFsKCkpLmFkZENsYXNzKCdjbG9uZWQnKS5hdHRyKCdzaXplJywgJGNsb25lLmZpbmQoJ29wdGlvbicpLmxlbmd0aCA+IDEwID8gMTAgOiAkY2xvbmUuZmluZCgnb3B0aW9uJykubGVuZ3RoKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC52YWwoJGNsb25lLnZhbCgpKTtcclxuICAgICAgICAgICAgfSkub24oJ2NsaWNrIGJsdXIga2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSAhPT0gJ2tleXByZXNzJyB8fCBlLndoaWNoID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkY2hlY2tib3gucGFyZW50cygnLnNlbGVjdC1wYXJlbnQnKS5hcHBlbmQoJGNsb25lKTtcclxuICAgICAgICAgICAgJGNsb25lLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcG9zZVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsZUhhbmRsZXJTZWxlY3RlZCgpIHtcclxuXHJcbiAgICByZXR1cm4geyBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IH0gfTtcclxuXHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFdhcm5pbmdXaW5kb3cgPSAoZnVuY3Rpb24gKGxvZ2dlcikge1xyXG4gICAgbG9nZ2VyID0gbG9nZ2VyIHx8IGNvbnNvbGU7XHJcbiAgICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gJ0l0IGxvb2tzIGxpa2UgeW91IGhhdmUgYmVlbiBlZGl0aW5nIHNvbWV0aGluZy4gJ1xyXG4gICAgICAgICsgJ0lmIHlvdSBsZWF2ZSBiZWZvcmUgc2F2aW5nLCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0Lic7XHJcblxyXG4gICAgZnVuY3Rpb24gb25VbmxvYWQoZSkge1xyXG4gICAgICAgIGlmICghaGFzQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG9uVW5sb2FkO1xyXG4gICAgLy92YXIgbGFzdENsaWNrT25FbGVtZW50O1xyXG4gICAgLy8kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgIGxhc3RDbGlja09uRWxlbWVudD0gJChldmVudC50YXJnZXQpO1xyXG4gICAgLy99KTtcclxuXHJcbiAgICB2YXIgbGFzdENsaWNrZWRFbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgLy9sYXN0Q2xpY2tlZCA9IHRhcmdldC50ZXh0Q29udGVudCB8fCB0YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhc1RleHRBcmVhc1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCAkdGV4dGFyZWFzID0gJCgndGV4dGFyZWEnKTtcclxuICAgICAgICAvL0FkZCB0aW55bWNlIGdldCB0ZXh0IGZyb20gdGV4dGFyZWEgbGlrZXMgaW5wdXRcclxuICAgICAgICBpZiAoJHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0lucHV0c1dpdGhUZXh0KCkge1xyXG4gICAgICAgIGxldCBoYXNUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0ICRpbnB1dHMgPSAkKCdpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGxldCBhdHRyID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpLmRhdGEoYXR0cmlidXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVcmwobGlua1BhdGgpIHtcclxuICAgICAgICBsb2dnZXIubG9nKFwiQ2hlY2sgdXJsXCIpO1xyXG4gICAgICAgIGxldCBhdHRyID0gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIoZ2V0TGFzdENsaWNrZWRFbGVtZW50KCksIFwiZGlzYWJsZUxpbmtcIik7XHJcblxyXG4gICAgICAgIGlmIChhdHRyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2luZyBpcyBkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2traW5nIGlzIGVuYWJsZWRcIilcclxuXHJcbiAgICAgICAgaWYgKGxpbmtQYXRoLmluZGV4T2YoJ2NyZWF0ZScpID09IC0xICYmIGxpbmtQYXRoLmluZGV4T2YoJ2VkaXQnKSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSB7XHJcbiAgICAgICAgbGV0IGxhc3RDbGlja2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PT0gXCJzdWJtaXRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5oYXNDbGFzcyhcImJ1dHRvbi1zdWJtaXRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuYXR0cigndHlwZScpID09ICdzdWJtaXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhZWxlbWVudC5hdHRyKCdkYXRhLWRpc2FibGUtd2FybmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc0NoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKCFsYXN0Q2xpY2tlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGxpbmtQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICBpZiAoIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihsYXN0Q2xpY2tlZEVsZW1lbnQsIFwiZGlzYWJsZS13YXJuaW5nXCIpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGVja1VybChsaW5rUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhhc0NoYW5nZXMgPSBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHx8IGhhc0lucHV0c1dpdGhUZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RvcExlYXZlKGV2KSB7XHJcbiAgICAgICAgbGV0IGlzU2F2aW5nID0gbGFzdENsaWNrZWRFbGVtZW50ICYmICFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICQobGFzdENsaWNrZWRFbGVtZW50KSk7XHJcbiAgICAgICAgaWYgKGlzU2F2aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5wdXRDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgIGV2LnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gY29uZmlybWF0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3dpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGRlZmF1bHRTdG9wTGVhdmU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGZvcmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBXYXJuaW5nV2luZG93IH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5qcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4uL2NvbW1vbi92YWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgeyBOb3RpZmllciB9IGZyb20gJy4uL2NvbW1vbi9ub3RpZmllci5qcyc7XHJcbmltcG9ydCB7IEZpbGVIYW5kbGVyIH0gZnJvbSAnLi4vbW9kdWxlcy9maWxlLWhhbmRsZXIuanMnO1xyXG5pbXBvcnQgeyBUYWdzIH0gZnJvbSAnLi4vdGFncy5qcyc7XHJcbmltcG9ydCB7IFdhcm5pbmdXaW5kb3cgfSBmcm9tICcuLi9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzJztcclxuaW1wb3J0IHsgY3JlYXRlRWRpdFRodW1ibmFpbFNpemUgfSBmcm9tICcuL3RodW1ibmFpbFNpemVzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0TGlicmFyaWVzKGdyaWQsIG1lZGlhdG9yLCBsb2dnZXIpIHtcclxuICAgIGxldCAkbGlicyA9ICQoJyNsaWJzJyk7XHJcbiAgICBsZXQgJGJ0bkVkaXRMaWJyYXJ5ID0gJCgnI2J0bi1lZGl0LWxpYicpO1xyXG4gICAgbGV0ICRidG5EZWxldGVMaWJyYXJ5ID0gJCgnI2J0bi1kZWxldGUtbGliJyk7XHJcbiAgICBsZXQgJGRlbGV0ZVBvcHVwID0gJCgnLmRlbGV0ZS1wb3B1cC13cmFwcGVyJyk7XHJcbiAgICBsZXQgJHJlbW92ZVBvcHVwID0gJCgnLmRlbGV0ZS1wb3B1cC13cmFwcGVyIC5nbHlwaGljb24tcmVtb3ZlJyk7XHJcbiAgICBsZXQgJGNhbmNlbERlbGV0ZUJ1dHRvbiA9ICQoJyNjYW5jZWwtZGVsZXRlJyk7XHJcbiAgICBsZXQgJGRlbGV0ZUxpYnJhcnlCdXR0b24gPSAkKCcjZGVsZXRlLWxpYnJhcnknKTtcclxuXHJcbiAgICBpZiAoJGxpYnMudmFsKCkpIHtcclxuICAgICAgICBncmlkLnVwZGF0ZURlZmF1bHRGaWx0ZXJzKFt7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogJ2xpYnJhcnlJZCcsXHJcbiAgICAgICAgICAgIGNvbXBhcmlzb246IDEsXHJcbiAgICAgICAgICAgIHZhbHVlOiAkbGlicy52YWwoKVxyXG4gICAgICAgIH1dKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGJ0bkVkaXRMaWJyYXJ5LmhpZGUoKTtcclxuICAgICAgICAkYnRuRGVsZXRlTGlicmFyeS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JpZC5sb2FkKHRydWUpO1xyXG4gICAgbGV0ICRncmlkID0gJCgnLmdyaWQnKTtcclxuXHJcbiAgICBsZXQgJG1vZGFsID0gJCgnI2ZpbGUtdXBsb2FkLW1vZGFsJyk7XHJcbiAgICBsZXQgJGNvbnRhaW5lciA9ICRtb2RhbC5maW5kKCcuZmlsZS1oYW5kbGVyLXdyYXBwZXInKTtcclxuICAgIGxldCBmaWxlSGFuZGxlciA9IEZpbGVIYW5kbGVyKCRjb250YWluZXIsIFsnVXBsb2FkJ10sICRsaWJzLnZhbCgpLCBtZWRpYXRvciwgbG9nZ2VyLCB0cnVlKTtcclxuXHJcbiAgICBiaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGV2ZW50IGhhbmRsZXJzICAgXHJcblxyXG4gICAgZnVuY3Rpb24gZmlsZVVwbG9hZGVkSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gZGF0YS5saWJyYXJ5SWQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKCRsaWJzLnZhbCgpICE9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgJGxpYnMudmFsKGlkKTtcclxuICAgICAgICAgICAgICAgIGdyaWQudXBkYXRlRGVmYXVsdEZpbHRlcnMoW3tcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6ICdsaWJyYXJ5SWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmlzb246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkXHJcbiAgICAgICAgICAgICAgICB9XSwgdHJ1ZSkubG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC51cGRhdGVEZWZhdWx0RmlsdGVycygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBncmlkLmxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICRtb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb3B5VXJsKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgbGV0IHVybCA9IGxvY2F0aW9uLm9yaWdpbiArICcvZmlsZXMvJyArICR0YXJnZXQuYXR0cignZGF0YS11cmwnKTtcclxuXHJcbiAgICAgICAgY29weVRvQ2xpcGJvYXJkKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0TGlicmFyeShldikge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBncmlkLnVwZGF0ZURlZmF1bHRGaWx0ZXJzKFt7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6ICdsaWJyYXJ5SWQnLFxyXG4gICAgICAgICAgICAgICAgY29tcGFyaXNvbjogMSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XSwgdHJ1ZSkubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgJGJ0bkVkaXRMaWJyYXJ5LnNob3coKTtcclxuICAgICAgICAgICAgJGJ0bkRlbGV0ZUxpYnJhcnkuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdyaWQudXBkYXRlRGVmYXVsdEZpbHRlcnMoKS5sb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAkYnRuRWRpdExpYnJhcnkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkYnRuRGVsZXRlTGlicmFyeS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZWRpYXRvci5kaXNwYXRjaCgnZmlsZUxpYnJhcnlDaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdExpYnJhcnkoZXYpIHtcclxuICAgICAgICBsZXQgcHJlZml4ID0gJCgnI2xpYnMgOnNlbGVjdGVkJykuYXR0cignZGF0YS11cmwnKTtcclxuXHJcbiAgICAgICAgaWYgKHByZWZpeCAmJiBwcmVmaXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc2l0ZXRyaWtzL2xpYnJhcmllcy9lZGl0P3VybD0nICsgcHJlZml4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RGVsZXRlTGlicmFyeVBvcHVwKGV2KSB7XHJcbiAgICAgICAgJGRlbGV0ZVBvcHVwLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIGxldCAkc2VsZWN0ZWRMaWIgPSAkKCcjbGlicyBvcHRpb246c2VsZWN0ZWQnKS5odG1sKCk7XHJcblxyXG4gICAgICAgICQoJy5saWJyYXJ5LW5hbWUnKS5odG1sKCcnKTtcclxuXHJcbiAgICAgICAgJCgnLmxpYnJhcnktbmFtZScpLmh0bWwoJHNlbGVjdGVkTGliKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlRGVsZXRlTGlicmFyeVBvcHVwKGV2KSB7XHJcbiAgICAgICAgJGRlbGV0ZVBvcHVwLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUxpYnJhcnkoZXYpIHtcclxuICAgICAgICBsZXQgaWQgPSAkKCcjbGlicycpLnZhbCgpO1xyXG5cclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIERhdGEuZGVsZXRlSnNvbih7IHVybDogJy9zaXRldHJpa3MvbGlicmFyaWVzL2RlbGV0ZS8nLCBkYXRhOiB7IGlkIH0gfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciAkdGVtcCA9ICQoJzxpbnB1dC8+Jyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkdGVtcCk7XHJcbiAgICAgICAgJHRlbXAudmFsKGVsZW1lbnQpLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgJHRlbXAucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYW5VcCgpIHtcclxuICAgICAgICBtZWRpYXRvci5kaXNwYXRjaCgnZmlsZUhhbmRsZXJDbGVhbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICRncmlkLm9uKCdjbGljaycsICcuY29weScsIGNvcHlVcmwpO1xyXG4gICAgICAgICRsaWJzLm9uKCdjaGFuZ2UnLCBzZWxlY3RMaWJyYXJ5KTtcclxuICAgICAgICAkYnRuRGVsZXRlTGlicmFyeS5vbignY2xpY2snLCBkaXNwbGF5RGVsZXRlTGlicmFyeVBvcHVwKTtcclxuICAgICAgICAkZGVsZXRlTGlicmFyeUJ1dHRvbi5vbignY2xpY2snLCBkZWxldGVMaWJyYXJ5KTtcclxuICAgICAgICAkcmVtb3ZlUG9wdXAub24oJ2NsaWNrJywgaGlkZURlbGV0ZUxpYnJhcnlQb3B1cCk7XHJcbiAgICAgICAgJGNhbmNlbERlbGV0ZUJ1dHRvbi5vbignY2xpY2snLCBoaWRlRGVsZXRlTGlicmFyeVBvcHVwKTtcclxuICAgICAgICAkYnRuRWRpdExpYnJhcnkub24oJ2NsaWNrJywgZWRpdExpYnJhcnkpO1xyXG4gICAgICAgICRtb2RhbC5vbignc2hvdy5icy5tb2RhbCBoaWRkZW4uYnMubW9kYWwnLCBjbGVhblVwKTtcclxuICAgICAgICBtZWRpYXRvci5vbignZmlsZXNVcGxvYWRlZCcsIGZpbGVVcGxvYWRlZEhhbmRsZXIsICdmaWxlc1VwbG9hZGVkJywgJ0dlbmVyYWwnKTtcclxuICAgICAgICBtZWRpYXRvci5vbignYWxlcnQnLCBOb3RpZmllci5jcmVhdGVBbGVydCwgJ2NyZWF0ZUFsZXJ0JywgJ05vdGlmaWVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICAkZ3JpZC5vZmYoJ2NsaWNrJywgJy5jb3B5JywgY29weVVybCk7XHJcbiAgICAgICAgJGxpYnMub2ZmKCdjaGFuZ2UnLCBzZWxlY3RMaWJyYXJ5KTtcclxuICAgICAgICAkYnRuRGVsZXRlTGlicmFyeS5vZmYoJ2NsaWNrJywgZGlzcGxheURlbGV0ZUxpYnJhcnlQb3B1cCk7XHJcbiAgICAgICAgJGRlbGV0ZUxpYnJhcnlCdXR0b24ub2ZmKCdjbGljaycsIGRlbGV0ZUxpYnJhcnkpO1xyXG4gICAgICAgICRyZW1vdmVQb3B1cC5vZmYoJ2NsaWNrJywgaGlkZURlbGV0ZUxpYnJhcnlQb3B1cCk7XHJcbiAgICAgICAgJGNhbmNlbERlbGV0ZUJ1dHRvbi5vbignY2xpY2snLCBoaWRlRGVsZXRlTGlicmFyeVBvcHVwKTtcclxuICAgICAgICAkYnRuRWRpdExpYnJhcnkub2ZmKCdjbGljaycsIGVkaXRMaWJyYXJ5KTtcclxuICAgICAgICAkbW9kYWwub2ZmKCdzaG93LmJzLm1vZGFsIGhpZGRlbi5icy5tb2RhbCcsIGNsZWFuVXApO1xyXG4gICAgICAgIG1lZGlhdG9yLm9mZignZmlsZXNVcGxvYWRlZCcsICdmaWxlc1VwbG9hZGVkJywgJ0dlbmVyYWwnKTtcclxuICAgICAgICBtZWRpYXRvci5vZmYoJ2FsZXJ0JywgJ2NyZWF0ZUFsZXJ0JywgJ05vdGlmaWVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwb3NlXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdExpYnJhcmllcyhpc05hbWVBdmFpbGFibGVMaW5rLCBsaWJyYXJ5SWQpIHtcclxuICAgIGxldCAkaW5wdXROYW1lID0gJCgnI2lucHV0LW5hbWUnKTtcclxuICAgIGxldCAkZWRpdEZvcm0gPSAkKCcjY3JlYXRlLWxpYnJhcnktZm9ybScpO1xyXG5cclxuICAgIGNyZWF0ZUVkaXRUaHVtYm5haWxTaXplKCk7XHJcbiAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgVGFncy5pbml0KCk7XHJcblxyXG4gICAgYmluZEV2ZW50cygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlTmFtZShlKSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkdGFyZ2V0LCAnVGl0bGUgbXVzdCBiZSBhdGxlYXN0IDMgY2hhcmFjdGVycyBsb25nIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgMyk7IH0pKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IGlzTmFtZUF2YWlsYWJsZUxpbmssIGRhdGE6IHsgbmFtZTogJHRhcmdldC52YWwoKSwgaWQ6IGxpYnJhcnlJZCB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlKCR0YXJnZXQsIHJlcy5tZXNzYWdlIHx8ICdOYW1lIGlzIGFscmVhZHkgdGFrZW4hJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gcmVzLnN1Y2Nlc3M7IH0pO1xyXG4gICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vZnVuY3Rpb24gZ2V0U2VsZWN0ZWRUaHVtYm5haWxzKCkge1xyXG4gICAgLy8gICAgbGV0ICRyZXN1bHRJbnB1dCA9ICQoJyN0aHVtbmFpbHMtcmVzdWx0Jyk7XHJcbiAgICAvLyAgICBsZXQgJHRodW1ibmFpbFNpemVzID0gJCgnI211bHRpc2VsZWN0LXRodW1ibmFpbHMnKTtcclxuICAgIC8vICAgIGxldCAkdGh1bWJuYWlsc0NoZWNrYnhlcyA9ICQoJy5jaGVja2JveCBpbnB1dCcpO1xyXG5cclxuICAgIC8vICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIC8vICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHRodW1ibmFpbHNDaGVja2J4ZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZygkdGh1bWJuYWlsc0NoZWNrYnhlc1tpXSk7XHJcbiAgICAvLyAgICAgICAgaWYgKCQoJHRodW1ibmFpbHNDaGVja2J4ZXNbaV0pLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgIHJlc3VsdC5wdXNoKCQoJHRodW1ibmFpbHNDaGVja2J4ZXNbaV0pLnZhbCgpKTtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9XHJcblxyXG4gICAgLy8gICAgJHJlc3VsdElucHV0LnZhbChyZXN1bHQpO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coJHRodW1ibmFpbFNpemVzLnZhbCgpKTtcclxuXHJcbiAgICAvL31cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRFZGl0Rm9ybShldikge1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gIGdldFNlbGVjdGVkVGh1bWJuYWlscygpO1xyXG5cclxuICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXROYW1lLCAnVGl0bGUgbXVzdCBiZSBhdGxlYXN0IDMgY2hhcmFjdGVycyBsb25nIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgMyk7IH0pKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IGlzTmFtZUF2YWlsYWJsZUxpbmssIGRhdGE6IHsgbmFtZTogJGlucHV0TmFtZS52YWwoKSwgaWQ6IGxpYnJhcnlJZCB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnBvc3RGb3JtKHsgZm9ybURhdGE6IG5ldyBGb3JtRGF0YShfdGhpcykgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXROYW1lLCByZXMubWVzc2FnZSB8fCAnTmFtZSBpcyBhbHJlYWR5IHRha2VuIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHJlcy5zdWNjZXNzOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcikudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL3NpdGV0cmlrcy9saWJyYXJpZXMvJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdOYW1lICBpcyBhcmVhZHkgaW4gdXNlIScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICRlZGl0Rm9ybS5vbignc3VibWl0Jywgc3VibWl0RWRpdEZvcm0pO1xyXG4gICAgICAgICRpbnB1dE5hbWUub24oJ2lucHV0JywgdmFsaWRhdGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG4gICAgICAgICRlZGl0Rm9ybS5vbignc3VibWl0Jywgc3VibWl0RWRpdEZvcm0pO1xyXG4gICAgICAgICRpbnB1dE5hbWUub24oJ2lucHV0JywgdmFsaWRhdGVOYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpYnJhcnkodmFsaWRhdGVVcmxMaW5rLCBpc05hbWVBdmFpbGFibGVMaW5rKSB7XHJcbiAgICB2YXIgJGJ0blN1Ym1pdCA9ICQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcclxuICAgIGxldCAkaW5wdXROYW1lID0gJCgnI2lucHV0LW5hbWUnKTtcclxuICAgIGxldCAkaW5wdXRQcmVmaXggPSAkKCcjaW5wdXQtcHJlZml4Jyk7XHJcbiAgICBsZXQgJHByZWZpeFZhbGlkYXRpb24gPSAkaW5wdXRQcmVmaXgubmV4dCgnc3Bhbi50ZXh0LWRhbmdlcicpO1xyXG4gICAgbGV0ICRsaWJyYXJ5VHlwZSA9ICQoJyNsaWJyYXJ5LXR5cGUnKTtcclxuICAgIGxldCAkYWxsb3dlZFR5cGVzID0gJCgnI2FsbG93ZWQtdHlwZXMnKTtcclxuICAgIGxldCAkY3JlYXRlRm9ybSA9ICQoJyNjcmVhdGUtbGlicmFyeS1mb3JtJyk7XHJcblxyXG4gICAgY3JlYXRlRWRpdFRodW1ibmFpbFNpemUoKTtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICBUYWdzLmluaXQoKTtcclxuXHJcbiAgICBVdGlscy5wb3B1bGF0ZVVybCgkaW5wdXROYW1lLCAkaW5wdXRQcmVmaXgsIHZhbGlkYXRlVXJsT25DaGFuZ2UpO1xyXG4gICAgZGlzcGxheUFsbG93ZWRUeXBlcy5hcHBseSgkbGlicmFyeVR5cGVbMF0pO1xyXG4gICAgdmFyIHRpbWVyID0gMDtcclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsb3dlZFR5cGVzKGV2KSB7XHJcbiAgICAgICAgJGFsbG93ZWRUeXBlcy5odG1sKCcnKTtcclxuXHJcbiAgICAgICAgTG9hZGVyLnNob3coJyNmZmYnKTtcclxuICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2xpYnJhcmllcy9HZXRBbGxvd2VkRm9yVHlwZT90eXBlPScgKyB0aGlzLnZhbHVlIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICRhbGxvd2VkVHlwZXMuaHRtbCgnQWxsb3dlZCBmaWxlczogJyArIChyZXMudHlwZS5kaXNwbGF5TmFtZSB8fCByZXMudHlwZS5leHRlbnNpb25zKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVcmxPbkNoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dFByZWZpeCwgJ1ByZWZpeCBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmchJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCAzKTsgfSkpIHtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9ICRpbnB1dFByZWZpeC52YWwoKTtcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZVVybCh2YWxpZGF0ZVVybExpbmsgKyAnP3VybD0nICsgdXJsLCAkaW5wdXRQcmVmaXgsICRidG5TdWJtaXQpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAkcHJlZml4VmFsaWRhdGlvbi50ZXh0KCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVOYW1lKGUpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCR0YXJnZXQsICdUaXRsZSBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmchJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCAzKTsgfSkpIHtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogaXNOYW1lQXZhaWxhYmxlTGluaywgZGF0YTogeyBuYW1lOiAkdGFyZ2V0LnZhbCgpIH0gfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3IudmFsaWRhdGUoJHRhcmdldCwgcmVzLm1lc3NhZ2UgfHwgJ05hbWUgaXMgYWxyZWFkeSB0YWtlbiEnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiByZXMuc3VjY2VzczsgfSk7XHJcbiAgICAgICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0Q3JlYXRlRm9ybShldikge1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyAgIGdldFNlbGVjdGVkVGh1bWJuYWlscygpO1xyXG5cclxuICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXROYW1lLCAnVGl0bGUgbXVzdCBiZSBhdGxlYXN0IDMgY2hhcmFjdGVycyBsb25nIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgMyk7IH0pKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0UHJlZml4LCAnUHJlZml4IG11c3QgYmUgYXRsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZyEnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBWYWxpZGF0b3IuaGFzTWluaW11bUxlbmd0aCh2YWwsIDMpOyB9KSkge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiB2YWxpZGF0ZVVybExpbmsgKyAnP3VybD0nICsgJGlucHV0UHJlZml4LnZhbCgpIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnBvc3RKc29uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGlzTmFtZUF2YWlsYWJsZUxpbmssIGRhdGE6IHsgbmFtZTogJGlucHV0TmFtZS52YWwoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXRQcmVmaXgsIHJlcy5tZXNzYWdlIHx8ICdQcmVmaXggaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBmYWxzZTsgfSk7XHJcbiAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnBvc3RGb3JtKHsgdXJsOiBfdGhpcy5hY3Rpb24sIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoX3RoaXMpIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dE5hbWUsIHJlcy5tZXNzYWdlIHx8ICdOYW1lIGlzIGFscmVhZHkgdGFrZW4hJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gZmFsc2U7IH0pO1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL3NpdGV0cmlrcy9saWJyYXJpZXMvJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIHR5cGU6ICdkYW5nZXInLCBtZXNzYWdlOiAnTmFtZSBvciBwcmVmaXggaXMgYXJlYWR5IGluIHVzZSEnIH0pO1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICRjcmVhdGVGb3JtLm9uKCdzdWJtaXQnLCBzdWJtaXRDcmVhdGVGb3JtKTtcclxuICAgICAgICAkaW5wdXRQcmVmaXgub24oJ2lucHV0IGNoYW5nZScsIHZhbGlkYXRlVXJsT25DaGFuZ2UpO1xyXG4gICAgICAgICRsaWJyYXJ5VHlwZS5vbignY2hhbmdlJywgZGlzcGxheUFsbG93ZWRUeXBlcyk7XHJcbiAgICAgICAgJGlucHV0TmFtZS5vbignaW5wdXQnLCB2YWxpZGF0ZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgJGNyZWF0ZUZvcm0ub24oJ3N1Ym1pdCcsIHN1Ym1pdENyZWF0ZUZvcm0pO1xyXG4gICAgICAgICRpbnB1dFByZWZpeC5vbignaW5wdXQgY2hhbmdlJywgdmFsaWRhdGVVcmxPbkNoYW5nZSk7XHJcbiAgICAgICAgJGxpYnJhcnlUeXBlLm9uKCdjaGFuZ2UnLCBkaXNwbGF5QWxsb3dlZFR5cGVzKTtcclxuICAgICAgICAkaW5wdXROYW1lLm9uKCdpbnB1dCcsIHZhbGlkYXRlTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9zaW5nIGdsb2JhbCB0byBzdXBwb3J0IGN1cnJlbnQgbG9naWNcclxud2luZG93LmluaXRMaWJyYXJpZXMgPSBpbml0TGlicmFyaWVzO1xyXG53aW5kb3cuZWRpdExpYnJhcmllcyA9IGVkaXRMaWJyYXJpZXM7XHJcbndpbmRvdy5jcmVhdGVMaWJyYXJ5ID0gY3JlYXRlTGlicmFyeTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vY29tbW9uL2xvYWRlci5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnLi4vY29tbW9uL25vdGlmaWVyLmpzJztcclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4uL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRUaHVtYm5haWxTaXplKCkge1xyXG4gICAgbGV0ICR0aHVtYlNpemVJZCA9ICQoJyN0aHVtYlNpemVJZCcpO1xyXG4gICAgbGV0ICRmdWxsRm9ybSA9ICQoJy5mb3JtLWhvcml6b250YWwnKTtcclxuICAgIGxldCAkc2l6ZVR5cGUgPSAkKCcjc2l6ZS10eXBlJyk7XHJcbiAgICBsZXQgJHNpemVOYW1lID0gJCgnI3NpemUtbmFtZScpO1xyXG4gICAgbGV0ICRtdWx0aXBsaWVyWSA9ICQoJyNtdWx0aXBsaWVyeScpO1xyXG4gICAgbGV0ICRtdWx0aXBsaWVyWCA9ICQoJyNtdWx0aXBsaWVyeCcpO1xyXG4gICAgbGV0ICRvZmZzZXR5ID0gJCgnI29mZnNldHknKTtcclxuICAgIGxldCAkb2Zmc2V0eCA9ICQoJyNvZmZzZXR4Jyk7XHJcbiAgICBsZXQgJHNpemVIZWlnaHQgPSAkKCcjc2l6ZS1oZWlnaHQnKTtcclxuICAgIGxldCAkc2l6ZVdpZHRoID0gJCgnI3NpemUtd2lkdGgnKTtcclxuICAgIGxldCAkYnRuZGlzcGxheUZvcm0gPSAkKCcuZGlzcGxheS1hZGQtZm9ybScpO1xyXG4gICAgbGV0ICRkZWxldGVQb3B1cCA9ICQoJy5kZWxldGUtcG9wdXAtd3JhcHBlcicpO1xyXG5cclxuICAgICRidG5kaXNwbGF5Rm9ybS5vbignY2xpY2snLCBkaXNwbGF5Rm9ybSk7XHJcbiAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGb3JtKCkge1xyXG4gICAgICAgICQoJy5jcmVhdGUtdGh1bWJuYWlsLXNpemUtZm9ybScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJy5jcmVhdGUtdGh1bWJuYWlsLXNpemUtZm9ybSBpbnB1dCcpLnZhbCgnJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxFZGl0Rm9ybShpZCwgbmFtZSwgdHlwZSwgd2lkdGgsIGhlaWdodCwgbXVsdGlwbGllclgsIG11bHRpcGxpZXJZLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgICAgJHRodW1iU2l6ZUlkLnZhbChpZCk7XHJcbiAgICAgICAgJHNpemVUeXBlLnZhbCh0eXBlKTtcclxuICAgICAgICAkc2l6ZU5hbWUudmFsKG5hbWUpO1xyXG4gICAgICAgICRtdWx0aXBsaWVyWS52YWwobXVsdGlwbGllclkpO1xyXG4gICAgICAgICRtdWx0aXBsaWVyWC52YWwobXVsdGlwbGllclgpO1xyXG4gICAgICAgICRvZmZzZXR5LnZhbChvZmZzZXRZKTtcclxuICAgICAgICAkb2Zmc2V0eC52YWwob2Zmc2V0WCk7XHJcbiAgICAgICAgJHNpemVIZWlnaHQudmFsKGhlaWdodCk7XHJcbiAgICAgICAgJHNpemVXaWR0aC52YWwod2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy50aHVtYm5haWwtc2l6ZXMtbXVsdGlzZWxlY3QnKS5vbignY2xpY2snLCAnLmdseXBoaWNvbi1wZW5jaWwnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY2hlY2tib3gnKTtcclxuICAgICAgICBsZXQgaWQgPSAkdGFyZ2V0LmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgbGV0IHVybCA9ICcvc2l0ZXRyaWtzL3RodW1ibmFpbHNzaXplcy9lZGl0P2lkPSc7XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogdXJsICsgaWQgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIG9wZW4gdGhlIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBsZXQgbW9kZWwgPSByZXMubW9kZWw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxuICAgICAgICAgICAgZGlzcGxheUZvcm0oKTtcclxuXHJcbiAgICAgICAgICAgIGZpbGxFZGl0Rm9ybShtb2RlbC5pZCwgbW9kZWwubmFtZSwgbW9kZWwudHlwZSwgbW9kZWwud2lkdGgsIG1vZGVsLmhlaWdodCwgbW9kZWwubXVsdGlwbGllclgsIG1vZGVsLm11bHRpcGxpZXJZLCBtb2RlbC5vZmZzZXRYLCBtb2RlbC5vZmZzZXRZKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9uQ29udGFpbmVyID0gJCgnLnNlbGVjdGVkLXRodW1ibmFpbC1vcHRpb25zJyk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucztcclxuXHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb25Db250YWluZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnMgPSAkKCcuc2VsZWN0ZWQtdGh1bWJuYWlsLW9wdGlvbnMnKS5odG1sKCkudHJpbSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRTZWxlY3RlZE9wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0ICRtdWx0aXNlbGVjdFNpemVzID0gJCgnI211bHRpc2VsZWN0LXNpemVzIGlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgJG11bHRpc2VsZWN0T3B0aW9ucyA9ICQoJyNtdWx0aXNlbGVjdC10aHVtYm5haWxzIG9wdGlvbicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRtdWx0aXNlbGVjdFNpemVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCRtdWx0aXNlbGVjdFNpemVzW2ldKS52YWwoKSA9PSBzZWxlY3RlZE9wdGlvbnNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJG11bHRpc2VsZWN0T3B0aW9uc1tpXSkucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJG11bHRpc2VsZWN0U2l6ZXNbaV0pLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb25zKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudGh1bWJuYWlsLXNpemVzLW11bHRpc2VsZWN0Jykub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBpZCA9ICR0YXJnZXQucGFyZW50KCkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgbGV0ICRzZWxlY3RPcHRpb24gPSAkKCcjbXVsdGlzZWxlY3QtdGh1bWJuYWlscyBvcHRpb25bdmFsdWU9JyArIGlkICsgJ10nKTtcclxuXHJcbiAgICAgICAgaWYgKCRzZWxlY3RPcHRpb24ubGVuZ3RoID4gMCAmJiAkc2VsZWN0T3B0aW9uLmlzKCc6c2VsZWN0ZWQnKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkc2VsZWN0T3B0aW9uLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2VsZWN0T3B0aW9uLmxlbmd0aCA+IDAgJiYgJHNlbGVjdE9wdGlvbi5pcygnOnNlbGVjdGVkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkc2VsZWN0T3B0aW9uLnByb3AoJ3NlbGVjdGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQoJy50aHVtYm5haWxzLWxhYmVsLWNvbnRhaW5lcicpLm9uKCdjbGljaycsICcuZ2x5cGhpY29uLXJlbW92ZScsIGRpc3BsYXlEZWxldGVUaHVtYlNpemVQb3B1cCk7XHJcbiAgICAkKCcuZGVsZXRlLXRodW1ibmFpbC1zaXplJykub24oJ2NsaWNrJywgJy5nbHlwaGljb24tcmVtb3ZlJywgaGlkZURlbGV0ZUxpYnJhcnlQb3B1cCk7XHJcblxyXG4gICAgJCgnLmRlbGV0ZS10aHVtYm5haWwtc2l6ZScpLm9uKCdjbGljaycsICcjY2FuY2VsLWRlbGV0ZScsIGhpZGVEZWxldGVMaWJyYXJ5UG9wdXApO1xyXG4gICAgJCgnI2RlbGV0ZS10aHVtYm5haWwtc2l6ZScpLm9uKCdjbGljaycsIGRlbGV0ZVRodW1ibmFpbFNpemUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRodW1ibmFpbFNpemUoKSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgaWQgPSAkKCcjdGh1bWJuYWlsU2l6ZUlkJykudmFsKCk7XHJcbiAgICAgICAgbGV0IHVybCA9ICcvc2l0ZXRyaWtzL3RodW1ibmFpbHNzaXplcy9EZWxldGVTaW5nbGVJdGVtP2lkPSc7XHJcblxyXG4gICAgICAgIGlmIChpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IHVybCArIGlkIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNhbGVydHMnLCB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdUaGUgdGh1bWJuYWlsIHNpemUgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkuJyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNhbGVydHMnLCB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ1RoZSB0aHVtYm5haWwgd2FzIG5vdCBkZWxldGVkLicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheURlbGV0ZVRodW1iU2l6ZVBvcHVwKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBpZCA9ICR0YXJnZXQucGFyZW50KCkuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICAkZGVsZXRlUG9wdXAuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnI3RodW1ibmFpbFNpemVJZCcpLnZhbChpZCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaWRlRGVsZXRlTGlicmFyeVBvcHVwKGV2KSB7XHJcbiAgICAgICAgJGRlbGV0ZVBvcHVwLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoJyNjcmVhdGUtdGh1bWJuYWlsLXNpemUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSAkKCcuY3JlYXRlLXRodW1ibmFpbC1zaXplLWZvcm0nKTtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ0lkJywgJHRodW1iU2l6ZUlkLnZhbCgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ05hbWUnLCAkc2l6ZU5hbWUudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnSGVpZ2h0JywgJHNpemVIZWlnaHQudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnV2lkdGgnLCAkc2l6ZVdpZHRoLnZhbCgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ211bHRpcGxpZXJ5JywgJG11bHRpcGxpZXJZLnZhbCgpKTtcclxuXHJcblxyXG4gICAgICAgIGZsYWcgPSBjaGVja0lucHV0Q29tYmluYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgTG9hZGVyLnNob3codHJ1ZSk7XHJcbiAgICAgICAgICAgIERhdGEucG9zdEZvcm0oeyB1cmw6ICcvc2l0ZXRyaWtzL3RodW1ibmFpbHNzaXplcy9jcmVhdGVlZGl0JywgZm9ybURhdGE6IGZvcm1EYXRhIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnVGhlIHRodW1ibmFpbCBzaXplIGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuY3JlYXRlLXRodW1ibmFpbC1zaXplLWZvcm0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNhbGVydHMnLCB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ1RoZSB0aHVtYm5haWwgc2l6ZSB3YXMgbm90IGNyZWF0ZWQuJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGlucHV0cyBhcmUgdmFsaWQgbnVtYmVyc1xyXG5cclxuICAgIC8vIGNoZWNrIG5hbWVcclxuICAgICRzaXplTmFtZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBsZXQgJG5hbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gJG5hbWUudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgJG5hbWUubmV4dCgpLnRleHQoJ1RodW1ibmFpbHMgbmFtZSBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyZWN0ZXJzJyk7XHJcbiAgICAgICAgICAgICRuYW1lLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRuYW1lLm5leHQoKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgJG5hbWUucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICRzaXplVHlwZS5vbignaW5wdXQnLCBoaWRlT2Zmc2V0T3B0aW9ucyk7XHJcbiAgICAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGhpZGVPZmZzZXRPcHRpb25zKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaGVjayBhbGwgbnVtYmVyc1xyXG4gICAgJGZ1bGxGb3JtLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9ICRpbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCRpbnB1dC5hdHRyKCd0eXBlJykgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygncmF0aW8nKSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJZk51bWJlcigkaW5wdXQsIGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygncmF0aW8nKSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tSYXRpb1ZhbHVlKCRpbnB1dCwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaGVjayB0eXBlXHJcbiAgICBmdW5jdGlvbiBoaWRlT2Zmc2V0T3B0aW9ucygpIHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gJHNpemVUeXBlLnZhbCgpO1xyXG4gICAgICAgIGxldCAkb2Zmc2V0V3JhcHBlciA9ICQoJy5vZmZzZXRzJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICRvZmZzZXRXcmFwcGVyLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG9mZnNldFdyYXBwZXIuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrUmF0aW9WYWx1ZShpbnB1dCwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgcmVnZXggPSAvXlswLTkvLC8uXSskLztcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZS5tYXRjaChyZWdleCkgfHwgK3ZhbHVlID4gMSB8fCArdmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGlucHV0Lm5leHQoKS50ZXh0KCdUaGUgaW5wdXQgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGRlY2ltYWwgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBzZXBhcmF0ZWQgYnkgXCIsXCInKTtcclxuICAgICAgICAgICAgaW5wdXQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQubmV4dCgpLnRleHQoJycpO1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tJZk51bWJlcihpbnB1dCwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgcmVnZXggPSAvXlswLTkvLC8uXSskLztcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgICAgICAgaW5wdXQubmV4dCgpLnRleHQoJ1RoZSBpbnB1dCB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyJyk7XHJcbiAgICAgICAgICAgIGlucHV0LmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0Lm5leHQoKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXRDb21iaW5hdGlvbigpIHtcclxuXHJcbiAgICAgICAgbGV0IHNpemVOYW1lID0gJHNpemVOYW1lLnZhbCgpO1xyXG4gICAgICAgIGxldCBtdWx0aXBsaWVyWSA9ICskbXVsdGlwbGllclkudmFsKCk7XHJcbiAgICAgICAgbGV0IG11bHRpcGxpZXJYID0gKyRtdWx0aXBsaWVyWC52YWwoKTtcclxuICAgICAgICBsZXQgb2Zmc2V0eSA9ICskb2Zmc2V0eS52YWwoKTtcclxuICAgICAgICBsZXQgb2Zmc2V0eCA9ICskb2Zmc2V0eC52YWwoKTtcclxuICAgICAgICBsZXQgc2l6ZUhlaWdodCA9ICskc2l6ZUhlaWdodC52YWwoKTtcclxuICAgICAgICBsZXQgc2l6ZVdpZHRoID0gKyRzaXplV2lkdGgudmFsKCk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAkc2l6ZVR5cGUudmFsKCk7XHJcblxyXG5cclxuICAgICAgICB2YXIgaXNWYWxpZFJlc2l6ZSA9IG11bHRpcGxpZXJYICogc2l6ZVdpZHRoICsgbXVsdGlwbGllclkgKiBzaXplSGVpZ2h0ID09IDA7XHJcbiAgICAgICAgdmFyIGlzVmFsaWRDcm9wV2luZG93ID0gc2l6ZVdpZHRoICogc2l6ZUhlaWdodCA+IDA7XHJcbiAgICAgICAgdmFyIGlzVmFsaWRDcm9wU2l6ZSA9IG11bHRpcGxpZXJYICogb2Zmc2V0eCArIG11bHRpcGxpZXJZICogb2Zmc2V0eSA9PSAwO1xyXG5cclxuICAgICAgICBpZiAoc2l6ZU5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAkc2l6ZU5hbWUubmV4dCgpLnRleHQoJ1RoZSBuYW1lIHNob3VsZCBiZSBhdCBsZWFzdCAzIHN5bWJvbHMuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZENyb3BXaW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICRzaXplSGVpZ2h0LmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJHNpemVXaWR0aC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRtdWx0aXBsaWVyWS5uZXh0KCkudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkc2l6ZUhlaWdodC5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRzaXplV2lkdGgucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZENyb3BTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlwbGllclkubmV4dCgpLnRleHQoJ0lmIHlvdSBoYXZlIHNlbGVjdGVkIHRvIHJlc2l6ZSB3aXRoIHRoZSB1c2Ugb2YgdGhlIG11bHRpcGxpZXJzLCB5b3UgY2Fubm90IHVzZSBhbiBvZmZzZXQuIEluIGNhc2UgeW91IGNob29zZSB0byByZXNpemUgYnkgdGhlIG9mZnNldHMgdGhlIG11bHRpcGxpZXJzIHNob3VsZCBiZSBlcXVhbCB0byAwLicpO1xyXG4gICAgICAgICAgICAgICAgJG9mZnNldHkuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkb2Zmc2V0eC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aXBsaWVyWS5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aXBsaWVyWC5hZGRDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRtdWx0aXBsaWVyWS5uZXh0KCkudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkb2Zmc2V0eS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRvZmZzZXR4LnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJYLnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZFJlc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLm5leHQoKS50ZXh0KCdJZiB5b3UgaGF2ZSBzZWxlY3RlZCB0byByZXNpemUgd2l0aCB0aGUgdXNlIG9mIHRoZSBtdWx0aXBsaWVycywgeW91IGNhbm5vdCBzZXQgd2lkdGggb3IgaGVpZ2h0LiBJbiBjYXNlIHlvdSBjaG9vc2UgdG8gcmVzaXplIGJ5IHdpZHRoIGFuZCBoZWlnaHQgdGhlIG11bHRpcGxpZXJzIHNob3VsZCBiZSBlcXVhbCB0byAwLicpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJYLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJHNpemVIZWlnaHQuYWRkQ2xhc3MoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAkc2l6ZVdpZHRoLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJG11bHRpcGxpZXJZLm5leHQoKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aXBsaWVyWS5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aXBsaWVyWC5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICRzaXplSGVpZ2h0LnJlbW92ZUNsYXNzKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgJHNpemVXaWR0aC5yZW1vdmVDbGFzcygnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5jcmVhdGVFZGl0VGh1bWJuYWlsU2l6ZSA9IGNyZWF0ZUVkaXRUaHVtYm5haWxTaXplO1xyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9jb21tb24vZGF0YS5qcyc7XHJcblxyXG52YXIgVGFncyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0KHRhZ3NJbnB1dCkge1xyXG4gICAgICAgIHRhZ3NJbnB1dCA9IHRhZ3NJbnB1dCB8fCAnI3RhZ3MnO1xyXG4gICAgICAgIGxldCAkdGFncyA9ICQodGFnc0lucHV0KTtcclxuXHJcbiAgICAgICAgJHRhZ3Mub24oJ2NoYW5nZSBrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ3MgPSAkdGFncy52YWwoKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9ICcnO1xyXG4gICAgICAgICAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhdHRlcm4ubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgICAgICR0YWdzLmF1dG9jb21wbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy90YWdzL2dldHRhZ3M/cGF0dGVybj0nICsgcGF0dGVybiB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlKHJlcy5zdWdnZXN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXJtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2godGhpcy52YWx1ZS5zcGxpdCgnLCcpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcy5wdXNoKCQudHJpbSh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVybXMuaW5kZXhPZih1aS5pdGVtLnZhbHVlKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybXMucHVzaCh1aS5pdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBwbGFjZWhvbGRlciB0byBnZXQgdGhlIGNvbW1hLWFuZC1zcGFjZSBhdCB0aGUgZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcy5wdXNoKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRlcm1zLmpvaW4oJywgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogZnVuY3Rpb24gKGV2LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHRhZ3MuYXV0b2NvbXBsZXRlKHsgc291cmNlOiBbXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IFRhZ3MgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==