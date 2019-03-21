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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/dynamics.js");
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

/***/ "./scripts/restart-app.js":
/*!********************************!*\
  !*** ./scripts/restart-app.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleApplicationRestart = handleApplicationRestart;
function handleApplicationRestart(_ref) {
    var url = _ref.url,
        timeout = _ref.timeout,
        cutUrl = _ref.cutUrl;

    if (!url) {
        url = window.location.toString();
        url = removeLastAttributeFromUrl(url);
    }

    if (isNaN(timeout)) {
        timeout = 1000;
    }

    if (cutUrl && url) {
        url = removeLastAttributeFromUrl();
    }

    validateSiteResponds(url, timeout);
}

function removeLastAttributeFromUrl(url) {
    var lastIndexOfSlash = url.lastIndexOf('/');
    url = url.substring(0, lastIndexOfSlash);
    return url;
}

function validateSiteResponds(validateUrl, timeout) {
    setTimeout(function () {
        $.ajax({
            method: 'GET',
            url: validateUrl,
            contentType: 'application/json',
            success: function success(res) {
                window.location = validateUrl;
            },
            error: function error(res) {
                validateSiteResponds(validateUrl, timeout);
            }
        });
    }, timeout);
}

window.handleAppRestart = handleApplicationRestart;

/***/ }),

/***/ "./scripts/sitetriks/dynamics.js":
/*!***************************************!*\
  !*** ./scripts/sitetriks/dynamics.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _restartApp = __webpack_require__(/*! ../restart-app.js */ "./scripts/restart-app.js");

var _fileHandler = __webpack_require__(/*! ../modules/file-handler.js */ "./scripts/modules/file-handler.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

var _textEditor = __webpack_require__(/*! ../text-editor.js */ "./scripts/text-editor.js");

function createClass(assemblyName) {
    var $fieldsContainer = $('#fields-container');
    var $inputTitle = $('#input-class-title');
    var $form = $('#form-create-class');
    var template = '';

    _loader.Loader.show('#fff');
    _data.Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        _loader.Loader.hide();
        template = res;
        bindEvents();
        _warningWindow.WarningWindow.attach();
    });

    function addField(ev) {
        $(document.createElement('div')).html(template).addClass('field-item').appendTo($fieldsContainer);
    }

    function deleteField(ev) {
        $(ev.target).parents('.field-item').remove();
    }

    //A field with this name already exist. Please choose a different name.
    function customValidation($element) {
        if ($element.hasClass('validate-field-name')) {
            return _validator.Validator.validate($element, 'The field name must consist of at least 3 symbols. Please, use only alphanumeric symbols and do not use blank spaces.', function (val) {
                return _validator.Validator.hasMinimumLength(val, 3) && _validator.Validator.isAlphaNumeric(val) && _validator.Validator.isStartingWithLetter(val);
            }) && _validator.Validator.validate($element, 'Title and link are system reserved words.', function (val) {
                return val.toLocaleLowerCase() !== 'link' && val.toLocaleLowerCase() !== 'title';
            }) && _validator.Validator.validate($element, 'A field with this name already exist. Please choose a different name.', function (val) {
                return _validator.Validator.validateUniquenes(val, 'validate-field-name');
            });
        }
    }

    var isFormValid = _validator.Validator.createFieldsValidation(customValidation).bind($form[0]);

    function submitCreateForm(ev) {
        _loader.Loader.show('#fff');

        if (!isFormValid()) {
            _loader.Loader.hide();

            ev.preventDefault();
            return false;
        }

        var formData = new FormData();
        var name = $('#input-class-name').val();
        var properties = [];
        $('.field-item').each(function (_, element) {
            var name = $(element).find('input:text').val();
            var type = $(element).find('select').val();
            properties.push({ name: name, type: type });
        });

        if (_validator.Validator.isFunction(formData.set)) {
            formData.set('name', name);
            formData.set('title', $inputTitle.val());
            formData.set('assemblyName', assemblyName);
            formData.set('properties', JSON.stringify(properties));
        } else {
            formData.append('name', name);
            formData.append('title', $inputTitle.val());
            formData.append('assemblyName', assemblyName);
            formData.append('properties', JSON.stringify(properties));
        }

        _data.Data.postForm({ url: '/sitetriks/dynamic/createclass', formData: formData }).then(function (res) {
            if (res.success) {
                (0, _restartApp.handleApplicationRestart)({});
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: 'Dynamic class with this name already exist.', status: 'danger' });
                _loader.Loader.hide();
            }
        }, _data.Data.defaultError);

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $fieldsContainer.on('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').on('click', addField);
        $form.on('submit', submitCreateForm);
    }

    function dispose() {
        $fieldsContainer.off('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').off('click', addField);
        $form.off('submit', submitCreateForm);
    }
}

function dynamicClassesList() {
    bindEvents();

    function deleteClass(ev) {
        var $target = $(ev.target);
        var assemblyName = $target.data('assemblyName');
        var className = $target.data('className');

        _loader.Loader.show('#fff');
        _data.Data.getJson({ url: '/sitetriks/dynamic/deleteClass?assemblyName=' + assemblyName + '&className=' + className }).then(function success(res) {
            (0, _restartApp.handleApplicationRestart)({ url: '/sitetriks/dynamic' });
        });
    }

    function bindEvents() {
        $('body').on('click', '.delete-dynamic-class', deleteClass);
    }

    function dispose() {
        $('body').off('click', '.delete-dynamic-class', deleteClass);
    }
}

function editClass(modelName, assemblyName) {
    var $fieldsContainer = $('#fields-container');
    var $inputTitle = $('#input-class-title');
    var $form = $('#form-edit-class');
    var template = '';

    _loader.Loader.show('#fff');
    _data.Data.getJson({ url: '/sitetriks/dynamic/AddClassPropertyTemplate' }).then(function (res) {
        _loader.Loader.hide();
        template = res;
        bindEvents();
        _warningWindow.WarningWindow.attach();
    });

    function addField(ev) {
        $(document.createElement('div')).html(template).addClass('field-item').appendTo($fieldsContainer);
    }

    function deleteField(ev) {
        $(ev.target).parents('.field-item').remove();
    }

    function customValidation($element) {
        if ($element.hasClass('validate-field-name')) {
            return _validator.Validator.validate($element, 'Field Name must be atleast 3 symbols and alphanumeric and can not start with number! Whitespace is not alphanumeric! Field name must be different from Title!', function (val) {
                return _validator.Validator.hasMinimumLength(val, 3) && _validator.Validator.isAlphaNumeric(val) && _validator.Validator.isStartingWithLetter(val) && val !== 'Title';
            });
        }
    }

    var isFormValid = _validator.Validator.createFieldsValidation(customValidation).bind($form[0]);

    function submitEditForm(ev) {
        _loader.Loader.show('#fff');

        if (!isFormValid()) {
            _loader.Loader.hide();

            ev.preventDefault();
            return false;
        }

        var formData = new FormData();
        var newName = $('#input-class-name').val();
        var oldName = modelName;
        var properties = [];

        $('.field-item').each(function (_, element) {
            var name = $(element).find('input:text').val();
            var type = $(element).find('select').val();
            properties.push({ name: name, type: type });
        });

        if (_validator.Validator.isFunction(formData.set)) {
            formData.set('oldName', oldName);
            formData.set('newName', newName);
            formData.set('title', $('#input-class-title').val());
            formData.set('assemblyName', assemblyName);
            formData.set('properties', JSON.stringify(properties));
        } else {
            formData.append('oldName', oldName);
            formData.append('newName', newName);
            formData.append('title', $('#input-class-title').val());
            formData.append('assemblyName', assemblyName);
            formData.append('properties', JSON.stringify(properties));
        }

        _data.Data.postForm({ url: '/sitetriks/dynamic/editclass', formData: formData }).then(function (res) {
            if (res.success) {
                (0, _restartApp.handleApplicationRestart)({});
            }
        }, _data.Data.defaultError);

        ev.preventDefault();
        return false;
    }

    function bindEvents() {
        $fieldsContainer.on('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').on('click', addField);
        $form.on('submit', submitEditForm);
    }

    function dispose() {
        $fieldsContainer.off('click', '.btn-delete-field', deleteField);
        $('#btn-add-field').off('click', addField);
        $form.off('submit', submitEditForm);
    }
}

var Dynamics = function () {
    function createItem(modelName, assemblyName, logger, mediator) {
        var $modal = $('#file-upload-modal');
        var $container = $modal.find('.file-handler-wrapper');
        var fileHandler = (0, _fileHandler.FileHandler)($container, ['Upload', 'Select'], '', mediator, logger, true);

        var selectImages = createSelectImagesHandler(mediator);
        var displayImages = createDisplayImagesHandler($modal);

        bindEvents();
        _warningWindow.WarningWindow.attach();
        initHtmlAreas();

        function createDynamicItem(ev) {
            var result = populateProperties($('.class-property'));
            if (result.validationFailed) {
                return;
            }

            var body = {
                className: modelName,
                assemblyName: assemblyName,
                properties: result.properties
            };

            _data.Data.postJson({ url: '/sitetriks/dynamic/createitem', data: body }).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/dynamic/classdetails?assemblyName=' + body.assemblyName + '&className=' + body.className);
                }
            }, _data.Data.defaultError);
        }

        function bindEvents() {
            $('#btn-create-item').on('click', createDynamicItem);
            $('.select-dynamic-images').on('click', selectImages);
            $('body').on('click', '.news-listed-image-delete', removeImage);

            mediator.on('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.on('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }

        function dispose() {
            $('#btn-create-item').off('click', createDynamicItem);
            $('.select-dynamic-images').off('click', selectImages);
            $('body').off('click', '.news-listed-image-delete', removeImage);

            mediator.off('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.off('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }
    }

    function editItem(id, className, assemblyName, logger, mediator) {
        var $modal = $('#file-upload-modal');
        var $container = $modal.find('.file-handler-wrapper');
        var fileHandler = (0, _fileHandler.FileHandler)($container, ['Upload', 'Select'], '', mediator, logger, true);

        var selectImages = createSelectImagesHandler(mediator);
        var displayImages = createDisplayImagesHandler($modal);

        $('input.dynamic-images').each(function (_, element) {
            var $imagesInput = $(element);
            var $imgContainer = $imagesInput.next('.dynamic-images-container');
            var inputSelector = '.dynamic-images[data-name=\'' + $imagesInput.attr('data-name') + '\']';

            var currentImages = $imagesInput.val();
            var fileIds = currentImages.split(';');
            for (var i = 0; i < fileIds.length; i += 1) {
                if (fileIds[i]) {
                    createImageView(inputSelector, fileIds[i], $imgContainer);
                }
            }
        });

        bindEvents();
        _warningWindow.WarningWindow.attach();
        initHtmlAreas();

        function editDynamicItem(ev) {
            var result = populateProperties($('.class-property'));

            if (result.validationFailed) {
                return;
            }

            var body = {
                id: id,
                className: className,
                assemblyName: assemblyName,
                properties: result.properties
            };

            _data.Data.postJson({ url: '/sitetriks/dynamic/edititem', data: body }).then(function (res) {
                if (res.success) {
                    window.location.replace('/sitetriks/dynamic/classdetails?assemblyName=' + body.assemblyName + '&className=' + body.className);
                }

                _loader.Loader.hide();
            }, _data.Data.defaultError);
        }

        function bindEvents() {
            $('#btn-edit-item').on('click', editDynamicItem);
            $('.select-dynamic-images').on('click', selectImages);
            $('body').on('click', '.news-listed-image-delete', removeImage);

            mediator.on('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.on('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }

        function dispose() {
            $('#btn-edit-item').off('click', editDynamicItem);
            $('.select-dynamic-images').off('click', selectImages);
            $('body').off('click', '.news-listed-image-delete', removeImage);

            mediator.off('filesSelected', displayImages, 'displaySelectedFiles', 'CreateItem.cshtml');
            mediator.off('filesUploaded', displayImages, 'displayUploadedFiles', 'CreateItem.cshtml');
        }
    }

    function populateProperties(fields) {
        var properties = [];
        var flag = false;

        for (var i = 0; i < fields.length; i += 1) {
            var $item = $(fields[i]);
            var name = $item.attr('data-name');
            var type = $item.attr('data-type');
            var value = $item.val();
            if (type === 'string-html') {
                value = _textEditor.textEditor.getContent('area-' + name);
            }

            if (!_validator.Validator.validateField($item)) {
                flag = true;
            }

            properties.push(JSON.stringify({
                name: name,
                type: type,
                value: value
            }));
        }

        return {
            properties: properties,
            validationFailed: flag
        };
    }

    function createImageView(fieldId, imgLinkId, $imgContainer) {
        var $container = $('<div class="news-listed-images-container"></div>');
        var $deleteBtn = $('<div class="news-listed-image-delete" data-id="' + imgLinkId + '" data-field="' + fieldId + '"><span class="glyphicon glyphicon-remove"></span></div>');
        var $img = $('<img src="/files/id/' + imgLinkId + '" class="display-image" />');

        $container.append($deleteBtn).append($img).appendTo($imgContainer);
    }

    function removeImage(ev) {
        var $trigger = $(this);
        var imgId = $trigger.attr('data-id');
        var selector = $trigger.attr('data-field');

        if (selector && selector !== '') {
            var $field = $(selector);
            var currentImages = $field.val();
            if (currentImages) {
                $field.val(currentImages.replace(imgId, ''));
            }
        }

        $trigger.parent().remove();
    }

    function createSelectImagesHandler(mediator) {
        return function selectImages(ev) {
            var $target = $(ev.target);
            var requester = $target.attr('data-name');

            mediator.dispatch('fileHandlerTypeChange', { type: 'multiple', requester: requester });
            //let $imagesInput = $(`.dynamic-images[data-name='${requester}']`);
            //mediator.dispatch('populatedSelected', $imagesInput.val());
        };
    }

    function createDisplayImagesHandler($modal) {
        return function displayImages(data) {
            var inputSelector = '.dynamic-images[data-name=\'' + data.requester + '\']';
            var $imagesInput = $(inputSelector);
            var $imgContainer = $imagesInput.next('.dynamic-images-container');

            //let currentImages = $imagesInput.val();
            //if (currentImages) {
            //    if (currentImages.length > 0 && currentImages[currentImages.length - 1] !== ';') {
            //        currentImages += ';';
            //    }

            //    $imagesInput.val(currentImages + data.fileIds.join(';'));
            //} else {
            $imagesInput.val(data.fileIds.join(';'));
            //}
            $imgContainer.html('');
            console.log(data);

            for (var i = 0; i < data.fileIds.length; i += 1) {
                createImageView(inputSelector, data.fileIds[i], $imgContainer);
            }

            $modal.modal('hide');
        };
    }

    function initHtmlAreas() {
        $('textarea.html-area').each(function (_, element) {
            _textEditor.textEditor.init('#' + element.id, 500, 300);
        });
    }

    return {
        createItem: createItem,
        editItem: editItem
    };
}();

window.createClass = createClass;
window.dynamicClassesList = dynamicClassesList;
window.editClass = editClass;
window.Dynamics = Dynamics;

/***/ }),

/***/ "./scripts/text-editor.js":
/*!********************************!*\
  !*** ./scripts/text-editor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.textEditor = undefined;

var _warningWindow = __webpack_require__(/*! ./modules/warning-window.js */ "./scripts/modules/warning-window.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* globals tinymce */


var textEditor = function () {
    function initInstaceCallback(editor) {
        if (typeof _warningWindow.WarningWindow !== 'undefined' && _warningWindow.WarningWindow.force) {
            editor.on('NodeChange', function (e) {
                _warningWindow.WarningWindow.force();
            });
        }
    }

    function setupEditor(editor, onInitCallback) {
        editor.addButton('custombutton', {
            type: 'menubutton',
            text: 'Custom',
            icon: false,
            menu: [{
                text: 'Logout link',
                onclick: function onclick() {
                    editor.insertContent('<a href="/logout">Logout</a>');
                }
            }]
        });

        editor.on('init', function (ev) {
            if (onInitCallback && {}.toString.call(onInitCallback) === '[object Function]') {
                onInitCallback();
            }
        });

        // enable auto-sync with the textarea
        editor.on('change', function () {
            tinymce.triggerSave();
        });
    }

    function image_list(success) {
        $.get('/sitetriks/files/getallimages', function (res) {
            success(res.images);
        });
    }

    function file_picker_callback(cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        $('body').append(input);

        // Note: In modern browsers input[type="file"] is functional without 
        // even adding it to the DOM, but that might not be the case in some older
        // or quirky browsers like IE, so you might want to add it to the DOM
        // just in case, and visually hide it. And do not forget do remove it
        // once you do not need it anymore.

        input.onchange = function () {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function () {
                // Note: Now we need to register the blob in TinyMCEs image blob
                // registry. In the next release this part hopefully won't be
                // necessary, as we are looking to handle it internally.
                var id = 'blobid' + new Date().getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                // call the callback and populate the Title field with the file name
                cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
        };

        input.click();
    }

    function createBaseConfig(selector, width, height, onInitCallback) {
        var _ref;

        return _ref = {
            selector: selector,
            verify_html: false,
            extended_valid_elements: 'span'
        }, _defineProperty(_ref, 'extended_valid_elements', 'div[class|id|style|span],span[class|id|style]'), _defineProperty(_ref, 'extended_valid_elements', 'div[*],span[*]'), _defineProperty(_ref, 'theme', 'modern'), _defineProperty(_ref, 'mode', 'textareas'), _defineProperty(_ref, 'force_br_newlines', false), _defineProperty(_ref, 'force_p_newlines', false), _defineProperty(_ref, 'forced_root_block', ''), _defineProperty(_ref, 'width', width), _defineProperty(_ref, 'height', height), _defineProperty(_ref, 'plugins', ['advlist autolink codesample link image lists charmap print preview hr anchor pagebreak fullscreen', 'searchreplace wordcount visualblocks visualchars code insertdatetime nonbreaking', 'save table contextmenu directionality paste textcolor']), _defineProperty(_ref, 'external_plugins', {
            'codeHighl': '/plugins/tinymce/code-highlight-tinymce-plugin.js',
            'htmlBlocks': '/plugins/tinymce/html-components-tinymce-plugin.js'
        }), _defineProperty(_ref, 'browser_spellcheck', true), _defineProperty(_ref, 'contextmenu', false), _defineProperty(_ref, 'paste_as_text', true), _defineProperty(_ref, 'image_caption', true), _defineProperty(_ref, 'image_advtab', true), _defineProperty(_ref, 'file_picker_types', 'file image media'), _defineProperty(_ref, 'file_picker_callback', file_picker_callback), _defineProperty(_ref, 'toolbar', 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor code | codeHighl | fontsizeselect | fontselect | custombutton'), _defineProperty(_ref, 'fontsize_formats', '8px 10px 12px 14px 16px 18px 20px 22px 24px 36px 48px'), _defineProperty(_ref, 'setup', function setup(editor) {
            return setupEditor(editor, onInitCallback);
        }), _defineProperty(_ref, 'init_instance_callback', initInstaceCallback), _ref;
    }

    function init(selector, width, height, onInitCallback) {
        var cfg = createBaseConfig(selector, width, height, onInitCallback);
        cfg.image_list = image_list;
        tinymce.init(cfg);
    }

    function initWithoutImages(selector, width, height, onInitCallback) {
        tinymce.init(createBaseConfig(selector, width, height, onInitCallback));
    }

    function remove(selector) {
        var editor = tinymce.get(selector);
        if (editor) {
            editor.remove();
        }
    }

    function removeAll() {
        tinymce.remove();
    }

    function clear(selector) {
        var editor = tinymce.get(selector);
        if (editor) {
            editor.setContent('');
        }
    }

    // selector must be Id
    function getContent(id) {
        return tinymce.get(id).getContent();
    }

    function addEditor(id, width, height) {
        if (!id) {
            console.warn('Id for the text editor must be specified!');

            return;
        }
        width = width || 600;
        height = height || 300;
        if (id[0] === '#') {
            textEditor.remove(id.substring(1));
        } else {
            textEditor.remove(id);
        }

        textEditor.init(id, width, height);
    }

    return {
        init: init,
        initWithoutImages: initWithoutImages,
        getContent: getContent,
        remove: remove,
        removeAll: removeAll,
        clear: clear,
        addEditor: addEditor
    };
}();

exports.textEditor = textEditor;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tbW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vaGFuZGxlYmFycy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vbm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy9maWxlLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvcmVzdGFydC1hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zaXRldHJpa3MvZHluYW1pY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy90ZXh0LWVkaXRvci5qcyJdLCJuYW1lcyI6WyJEYXRhIiwibWFrZVJlcXVlc3QiLCJmZXRjaCIsImlzRnVuY3Rpb24iLCJtYWtlRmV0Y2hSZXF1ZXN0IiwibWFrZUFqYXhSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJpc0Zvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcmFtcyIsImRhdGEiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiJCIsImFqYXgiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsInRleHQiLCJnZXRKc29uIiwiZGlzYWJsZUNhY2hlIiwicG9zdEpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdEZvcm0iLCJmb3JtRGF0YSIsImRlbGV0ZUpzb24iLCJkZWZhdWx0RXJyb3IiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJ0b1N0cmluZyIsImNhbGwiLCJsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyIsImhlbHBlcnMiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJfc3dpdGNoX3ZhbHVlXyIsIl9zd2l0Y2hfYnJlYWtfIiwiaHRtbCIsImZuIiwiYXJncyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJwb3AiLCJjYXNlVmFsdWVzIiwiaGFzaCIsImJyZWFrIiwiJGVsIiwiZmluZCIsImF0dHIiLCJrZXkiLCJIYW5kbGViYXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJ0ZW1wbGF0ZXNDYWNoZSIsInRlbXBsYXRlcyIsInByb21pc2VzIiwicHVzaCIsInRlbXBsYXRlIiwiY29tcGlsZSIsIm5hbWUiLCJhbGwiLCJMb2FkZXIiLCJnaWZTcmMiLCJzaG93IiwiY29sb3IiLCJpbWdTcmMiLCJCbHVyIiwiYWRkIiwiYXBwZW5kIiwic3JjIiwiY2xhc3MiLCJoaWRlIiwicmVtb3ZlIiwib24iLCJldiIsIiR0YXJnZXQiLCJ0YXJnZXQiLCIkY29udGFpbmVyIiwiaGlkZU9uQ2xpY2siLCJhcHBlbmRUbyIsIlBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTIiwiUFJFVklFV19JVEVNX0NPTlRBSU5FUl9DTEFTUyIsIkJMVVJfRUxFTUVOVF9DTEFTUyIsImFkZEJsdXIiLCJvcGFjaXR5IiwiYWRkQ2xhc3MiLCIkYmx1ckVsZW1lbnQiLCIkaXRlbUNvbnRhaW5lciIsIiRwcmV2aWV3Q29udGFpbmVyIiwicmVtb3ZlQmx1ciIsImNzcyIsImlzTmFOIiwicmVtb3ZlQ2xhc3MiLCJOb3RpZmllciIsImNyZWF0ZUFsZXJ0IiwiY29udGFpbmVySWQiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzZWNvbmRzIiwiaXNQZXJtYW5lbnQiLCJzZWxlY3RvciIsIiR0aXRsZSIsIiRjbG9zZUJ1dHRvbiIsIiRtZXNzYWdlIiwiJGFsZXJ0Iiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJVdGlscyIsInM0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiZ3VpZCIsImlzR3VpZCIsInN0cmluZ1RvVGVzdCIsInJlZ2V4R3VpZCIsInRlc3QiLCJsb2FkanNjc3NmaWxlIiwiZmlsZW5hbWUiLCJmaWxldHlwZSIsImZpbGVyZWYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwiaXNMb2FkaW5nIiwibG9hZGpzY3NzZmlsZUFzeW5jIiwib25sb2FkIiwib25lcnJvciIsInJlbW92ZWpzY3NzZmlsZSIsInRhcmdldGVsZW1lbnQiLCJ0YXJnZXRhdHRyIiwiYWxsc3VzcGVjdHMiLCJnZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlciIsInVyaSIsInJlIiwiUmVnRXhwIiwic2VwYXJhdG9yIiwibWF0Y2giLCJyZXBsYWNlIiwib3BlbkluTmV3VGFiIiwibmV3V2luZG93Iiwid2luZG93Iiwib3BlbiIsImNsb3NlZCIsIndyaXRlIiwiY2xvc2UiLCJmb2N1cyIsImVzY2FwZVJlZ0V4cCIsInN0ciIsInJlcGxhY2VBbGwiLCJnZXRBbGxTZWxlY3RvcnMiLCJyZXQiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJ4Iiwic2VsZWN0b3JUZXh0IiwiY3NzU2VsZWN0b3JFeGlzdHMiLCJzZWxlY3RvcnMiLCJwb3B1bGF0ZVVybCIsImlucHV0SWQiLCJ1cmxJZCIsImNhbGxiYWNrIiwiJHVybCIsInRpdGxlVmFsdWUiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsInVybFZhbHVlIiwiZXZ0IiwiJHRyaWdnZXIiLCJpcyIsImVhY2giLCJfIiwiZWxlbWVudCIsIlZhbGlkYXRvciIsInZhbGlkYXRlIiwiJGVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZUZ1bmMiLCJuZXh0IiwiaGFzTWluaW11bUxlbmd0aCIsIm1pbkxlbmdodCIsImhhc01heGltdW1MZW5ndGgiLCJtYXhMZW5naHQiLCJpc0FscGhhTnVtZXJpYyIsInBhdHRlcm4iLCJpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbiIsImlzUGFzc2luZyIsImlzVXJsRnJpZW5kbHkiLCJpc1N0YXJ0aW5nV2l0aExldHRlciIsInZhbGlkYXRlRW1haWwiLCJpc0RlY2ltYWxOdW1iZXIiLCJtYXRjaGVzUGF0dGVybiIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwicGFyc2VJbnQiLCJpc051bWJlckluUmFuZ2UiLCJtaW4iLCJtYXgiLCJpc0xlbmdodEluUmFuZ2UiLCJjcmVhdGVGaWVsZHNWYWxpZGF0aW9uIiwiY3VzdG9tVmFsaWRhdGlvbkZ1bmMiLCJ2YWxpZGF0ZUZpZWxkcyIsIiRlbGVtZW50c1RvVmFsaWRhdGUiLCJmbGFnIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlcyIsInZhbGlkYXRpb25UeXBlcyIsInNwbGl0IiwiaW5uZXJGbGFnIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJwYXJzZUZsb2F0IiwiY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlciIsImNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyIiwiZXh0cmFWYWx1ZXMiLCJ0aW1lciIsInZhbGlkYXRlVXJsT25DaGFuZ2UiLCIkaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJ2YWxpZGF0ZVVybCIsIiR1cmxGaWVsZCIsIiRidG5TdWJtaXQiLCJ2IiwidmFsaWRhdGVVbmlxdWVuZXMiLCJjbGFzc1RvVmFsaWRhdGUiLCJjb3VudGVyIiwiJGFsbE5hbWVzIiwiRmlsZUhhbmRsZXIiLCJtb2RlcyIsInNlbGVjdGVkTGlicmFyeSIsIm1lZGlhdG9yIiwibG9nZ2VyIiwibXVsdGlwbGVTZWxlY3Rpb24iLCJtb2R1bGVzIiwiY3RvciIsImZpbGVIYW5kbGVyVXBsb2FkIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJmaWxlSGFuZGxlclNlbGVjdCIsImZpbGVIYW5kbGVyU2VsZWN0ZWQiLCIkbmF2IiwiJGNvbnRlbnRSb3ciLCIkYnRuTmF2Iiwicm9sZSIsIiR3cmFwcGVyIiwib3Blbk1vZHVsZSIsImZpcnN0IiwiYmluZEV2ZW50cyIsIiRzZWxlY3RlZEJ1dHRvbiIsImJpbmQiLCJkaXNwb3NlIiwib2ZmIiwicGFyZW50IiwibGlicmFyeUlkIiwiaXNNdWx0aXBsZSIsIiRpbnB1dEZpbGVzIiwiJG5vdGlmaWVyIiwiJGZpbGVzQ29udGFpbmVyIiwiJGxpYnJhcmllcyIsIiRidG5VcGxvYWQiLCIkZHJvcEFyZWEiLCIkdXBsb2FkQnRuIiwibGlicmFyeVByZWZpeCIsImxpYnJhcnlBbGxvd2VkIiwiZmlsZXMiLCJ1cGxvYWRlZEZpbGVzIiwicmVxdWVzdGVyIiwibG9hZEFsbG93ZWRUeXBlcyIsInJlbmRlckZpbGVzIiwidXBsb2FkRmlsZXMiLCJ2YWxpZGF0ZUZpbGVVcmwiLCJkcmFnT3ZlciIsImRyYWdFbnRlciIsImRyYWdMZWF2ZSIsImRyb3AiLCJzZWxlY3RMaWJyYXJ5IiwidHlwZUNoYW5nZSIsImNsZWFuVXAiLCJ0cmlnZ2VyIiwiU3RyaW5nIiwicGFyc2UiLCJleHQiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJleHRlbnNpb25zIiwicHJlZml4IiwiZGF0ZSIsIkRhdGUiLCJjdXJyZW50RmlsZSIsInJlZ0V4cCIsIiRmcmFnbWVudCIsImZpbGVOYW1lIiwibGFzdEluZGV4T2YiLCJmaWxlVXJsIiwiaWQiLCJpbmRleCIsImFsdCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvcmlnaW5hbE5hbWUiLCJub3RpZmllciIsImRpc3BhdGNoIiwidXJscyIsIm9iaiIsInRyaW0iLCJ1cGRhdGVGaWxlc0luZm8iLCJGb3JtRGF0YSIsImZvckVhY2giLCJmaWxlSWRzIiwiaWRzIiwic2l6ZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhc0NsYXNzIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsImZpbGVzVmFsdWUiLCJwcm9wIiwicmVtb3ZlQXR0ciIsInBhZ2UiLCIkYnRuTmV4dCIsIiRidG5QcmV2IiwiJHBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsIm5leHRQYWdlRXhpc3RzIiwiJGJ0blNlbGVjdCIsInNlbGVjdGVkRmlsZXMiLCJsb2FkSW1hZ2VzIiwiJGJ0blNhdmUiLCIkYnRuRWRpdCIsInNlbGVjdFVwbG9hZGVkRmlsZXMiLCJzZWxlY3RlZExpbmtJZHMiLCJzZWxlY3RlZExpbmtJZCIsImNoYW5nZUxpYnJhcnkiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwic2VsZWN0U2l6ZSIsInRyaWdnZXJDaGVja2JveCIsInRvZ2dsZVNlbGVjdERyb3Bkb3duIiwic2VsZWN0RmlsZXMiLCJwb3B1bGF0ZVNlbGVjdGVkIiwiaW5wdXRUeXBlIiwiZmlsdGVycyIsImNvbXBhcmlzb24iLCJwcm9wZXJ0eU5hbWUiLCJza2lwIiwidGFrZSIsIml0ZW1zIiwidGh1bWJuYWlscyIsImNlaWwiLCJjb3VudCIsInNldFNlbGVjdGVkSW1hZ2VzIiwiJG9wdGlvbiIsInNlbGVjdGVkSWQiLCIkY2hlY2tib3giLCIkc2VsZWN0IiwicGFyZW50cyIsInNlbGVjdEZpbGVVSSIsInNlbGVjdGVkSW1hZ2VzRnVsbEluZm8iLCJzZWxlY3RlZCIsIiRzZWxlY3RlZCIsInNlbGVjdGVkSWRzIiwiT2JqZWN0IiwiZW50cmllcyIsInNlbGVjdGVkSW1hZ2VJZCIsIiRjdXJyZW50VGh1bWJuYWlsIiwiJGNsb25lIiwiY2xvbmUiLCJjaGFuZ2UiLCJ3aGljaCIsIldhcm5pbmdXaW5kb3ciLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJoYXNDaGFuZ2VzIiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaGFzVGV4dEFyZWFzV2l0aFRleHQiLCIkdGV4dGFyZWFzIiwiaGFzSW5wdXRzV2l0aFRleHQiLCJoYXNUZXh0IiwiJGlucHV0cyIsImNoZWNrRWxlbWVudEZvckRhdGFBdHRyIiwiYXR0cmlidXRlIiwiY2hlY2tVcmwiLCJsaW5rUGF0aCIsImdldExhc3RDbGlja2VkRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdWJtaXRCdXR0b25DaGVjayIsInRhZ05hbWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5wdXRDaGFuZ2VkIiwiZGVmYXVsdFN0b3BMZWF2ZSIsImlzU2F2aW5nIiwiYXR0YWNoIiwib25iZWZvcmV1bmxvYWQiLCJkZXRhY2giLCJmb3JjZSIsImhhbmRsZUFwcGxpY2F0aW9uUmVzdGFydCIsInRpbWVvdXQiLCJjdXRVcmwiLCJyZW1vdmVMYXN0QXR0cmlidXRlRnJvbVVybCIsInZhbGlkYXRlU2l0ZVJlc3BvbmRzIiwibGFzdEluZGV4T2ZTbGFzaCIsImhhbmRsZUFwcFJlc3RhcnQiLCJjcmVhdGVDbGFzcyIsImFzc2VtYmx5TmFtZSIsIiRmaWVsZHNDb250YWluZXIiLCIkaW5wdXRUaXRsZSIsIiRmb3JtIiwiYWRkRmllbGQiLCJkZWxldGVGaWVsZCIsImN1c3RvbVZhbGlkYXRpb24iLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImlzRm9ybVZhbGlkIiwic3VibWl0Q3JlYXRlRm9ybSIsInByb3BlcnRpZXMiLCJzZXQiLCJkeW5hbWljQ2xhc3Nlc0xpc3QiLCJkZWxldGVDbGFzcyIsImNsYXNzTmFtZSIsImVkaXRDbGFzcyIsIm1vZGVsTmFtZSIsInN1Ym1pdEVkaXRGb3JtIiwibmV3TmFtZSIsIm9sZE5hbWUiLCJEeW5hbWljcyIsImNyZWF0ZUl0ZW0iLCIkbW9kYWwiLCJmaWxlSGFuZGxlciIsInNlbGVjdEltYWdlcyIsImNyZWF0ZVNlbGVjdEltYWdlc0hhbmRsZXIiLCJkaXNwbGF5SW1hZ2VzIiwiY3JlYXRlRGlzcGxheUltYWdlc0hhbmRsZXIiLCJpbml0SHRtbEFyZWFzIiwiY3JlYXRlRHluYW1pY0l0ZW0iLCJyZXN1bHQiLCJwb3B1bGF0ZVByb3BlcnRpZXMiLCJ2YWxpZGF0aW9uRmFpbGVkIiwicmVtb3ZlSW1hZ2UiLCJlZGl0SXRlbSIsIiRpbWFnZXNJbnB1dCIsIiRpbWdDb250YWluZXIiLCJpbnB1dFNlbGVjdG9yIiwiY3VycmVudEltYWdlcyIsImNyZWF0ZUltYWdlVmlldyIsImVkaXREeW5hbWljSXRlbSIsImZpZWxkcyIsIiRpdGVtIiwidGV4dEVkaXRvciIsImdldENvbnRlbnQiLCJmaWVsZElkIiwiaW1nTGlua0lkIiwiJGRlbGV0ZUJ0biIsIiRpbWciLCJpbWdJZCIsIiRmaWVsZCIsImpvaW4iLCJtb2RhbCIsImluaXQiLCJpbml0SW5zdGFjZUNhbGxiYWNrIiwiZWRpdG9yIiwic2V0dXBFZGl0b3IiLCJvbkluaXRDYWxsYmFjayIsImFkZEJ1dHRvbiIsImljb24iLCJtZW51Iiwib25jbGljayIsImluc2VydENvbnRlbnQiLCJ0aW55bWNlIiwidHJpZ2dlclNhdmUiLCJpbWFnZV9saXN0IiwiaW1hZ2VzIiwiZmlsZV9waWNrZXJfY2FsbGJhY2siLCJjYiIsIm1ldGEiLCJpbnB1dCIsIm9uY2hhbmdlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImdldFRpbWUiLCJibG9iQ2FjaGUiLCJhY3RpdmVFZGl0b3IiLCJlZGl0b3JVcGxvYWQiLCJiYXNlNjQiLCJibG9iSW5mbyIsImNyZWF0ZSIsImJsb2JVcmkiLCJyZWFkQXNEYXRhVVJMIiwiY2xpY2siLCJjcmVhdGVCYXNlQ29uZmlnIiwid2lkdGgiLCJoZWlnaHQiLCJ2ZXJpZnlfaHRtbCIsImV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzIiwiY2ZnIiwiaW5pdFdpdGhvdXRJbWFnZXMiLCJyZW1vdmVBbGwiLCJjbGVhciIsInNldENvbnRlbnQiLCJhZGRFZGl0b3IiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLMkI7QUFDakMsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsNERBQTRELCtEQUErRDtBQUMzSCxJQUFJO0FBQ0o7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RkFBNEYsYUFBYTtBQUN6RztBQUNBOztBQUVBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTs7QUFFM0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRTs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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aEJBQThoQjtBQUNwakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUVBOztBQUVBO0FBQ0EseUVBQXlFOztBQUV6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUixzQkFBc0IsOENBQThDO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTixxQ0FBcUMsT0FBTyxRQUFRLFFBQVE7QUFDNUQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxvQkFBb0IsR0FBRztBQUN2QjtBQUNBO0FBQ0Esb0JBQW9CLEdBQUc7QUFDdkIsb0JBQW9CLEdBQUc7QUFDdkI7QUFDQSx3REFBd0Q7QUFDeEQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFJQUFxSTtBQUNySSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEtBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLE9BQU87QUFDaEQ7QUFDQSxzQ0FBc0M7O0FBRXRDOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNERBQTRELFNBQVM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0lBQWtJOztBQUVsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsU0FBUztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxrQkFLVjtBQUNKLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGVBQWU7QUFDZixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJOztBQUVKO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBLElBQUk7QUFDSjtBQUNBLDhGQUE4RixVQUFVLEVBQUU7O0FBRTFHO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Y7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUEsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3R1SkEsSUFBSUEsT0FBUSxZQUFZO0FBQ3BCLFFBQUlDLGNBQWMsT0FBT0MsS0FBUCxLQUFpQixXQUFqQixJQUFnQ0MsV0FBV0QsS0FBWCxDQUFoQyxHQUFvREUsZ0JBQXBELEdBQXVFQyxlQUF6RixDQURvQixDQUNzRjs7QUFFMUcsYUFBU0EsZUFBVCxPQUFpRTtBQUFBLFlBQXRDQyxHQUFzQyxRQUF0Q0EsR0FBc0M7QUFBQSxZQUFqQ0MsTUFBaUMsUUFBakNBLE1BQWlDO0FBQUEsWUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLFlBQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7QUFBQSxZQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzdELGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxnQkFBSUMsU0FBUztBQUNUUix3QkFEUztBQUVUQyw4QkFGUztBQUdUUSxzQkFBTVAsSUFIRztBQUlUUSx5QkFBU0osT0FKQTtBQUtUSyx1QkFBT0o7QUFMRSxhQUFiO0FBT0EsZ0JBQUlILE1BQUosRUFBWTtBQUNSSSx1QkFBT0ksV0FBUCxHQUFxQixLQUFyQixDQURRLENBQ29CO0FBQzVCSix1QkFBT0ssV0FBUCxHQUFxQixLQUFyQixDQUZRLENBRW9CO0FBQy9CLGFBSEQsTUFHTztBQUNITCx1QkFBT0wsT0FBUCxHQUFpQkEsT0FBakI7QUFDSDs7QUFFRFcsY0FBRUMsSUFBRixDQUFPUCxNQUFQO0FBQ0gsU0FoQk0sQ0FBUDtBQWlCSDs7QUFFRCxhQUFTVixnQkFBVCxRQUFrRTtBQUFBLFlBQXRDRSxHQUFzQyxTQUF0Q0EsR0FBc0M7QUFBQSxZQUFqQ0MsTUFBaUMsU0FBakNBLE1BQWlDO0FBQUEsWUFBekJDLElBQXlCLFNBQXpCQSxJQUF5QjtBQUFBLFlBQW5CQyxPQUFtQixTQUFuQkEsT0FBbUI7QUFBQSxZQUFWQyxNQUFVLFNBQVZBLE1BQVU7O0FBQzlERCxrQkFBVUEsV0FBVyxFQUFyQjtBQUNBLFlBQUlDLE1BQUosRUFBWTtBQUNSLG1CQUFPRCxRQUFRLGNBQVIsQ0FBUDtBQUNILFNBRkQsTUFFTztBQUNIQSxvQkFBUSxjQUFSLElBQTBCLGtCQUExQjtBQUNIOztBQUVELGVBQU9QLE1BQU1JLEdBQU4sRUFBVztBQUNkQywwQkFEYztBQUVkQyxzQkFGYztBQUdkQyw0QkFIYztBQUlkYSx5QkFBYTtBQUpDLFNBQVgsRUFLSkMsSUFMSSxDQUtDLGVBQU87QUFDWCxnQkFBSUMsSUFBSUMsTUFBSixJQUFjLEdBQWQsSUFBcUJELElBQUlDLE1BQUosR0FBYSxHQUF0QyxFQUEyQztBQUN2QyxvQkFBSUQsSUFBSWYsT0FBSixDQUFZaUIsR0FBWixDQUFnQixjQUFoQixLQUFtQ0YsSUFBSWYsT0FBSixDQUFZaUIsR0FBWixDQUFnQixjQUFoQixFQUFnQ0MsT0FBaEMsQ0FBd0Msa0JBQXhDLElBQThELENBQUMsQ0FBdEcsRUFBeUc7QUFDckcsMkJBQU9ILElBQUlJLElBQUosRUFBUDtBQUNIOztBQUVELHVCQUFPSixJQUFJSyxJQUFKLEVBQVA7QUFDSCxhQU5ELE1BTU87QUFDSCx1QkFBT2xCLFFBQVFFLE1BQVIsQ0FBZVcsSUFBSUssSUFBSixFQUFmLENBQVA7QUFDSDtBQUNKLFNBZk0sQ0FBUDtBQWdCSDs7QUFFRCxhQUFTQyxPQUFULFFBQXdDO0FBQUEsWUFBckJ4QixHQUFxQixTQUFyQkEsR0FBcUI7QUFBQSxZQUFoQnlCLFlBQWdCLFNBQWhCQSxZQUFnQjs7QUFDcEMsWUFBSXRCLFVBQVUsRUFBZDtBQUNBLFlBQUlzQixpQkFBaUIsSUFBckIsRUFBMkI7QUFDdkJ0QixzQkFBVTtBQUNOLDBCQUFVLFVBREo7QUFFTixpQ0FBaUI7QUFGWCxhQUFWO0FBSUg7O0FBRUQsZUFBT1IsWUFBWSxFQUFFSyxRQUFGLEVBQU9DLFFBQVEsS0FBZixFQUFzQkUsZ0JBQXRCLEVBQVosQ0FBUDtBQUNIOztBQUVELGFBQVN1QixRQUFULFFBQWlDO0FBQUEsWUFBYjFCLEdBQWEsU0FBYkEsR0FBYTtBQUFBLFlBQVJTLElBQVEsU0FBUkEsSUFBUTs7QUFDN0IsZUFBT2QsWUFBWSxFQUFFSyxRQUFGLEVBQU9DLFFBQVEsTUFBZixFQUF1QkMsTUFBTXlCLEtBQUtDLFNBQUwsQ0FBZW5CLElBQWYsQ0FBN0IsRUFBbUROLFNBQVMsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBQTVELEVBQVosQ0FBUDtBQUNIOztBQUVELGFBQVMwQixRQUFULFFBQXFDO0FBQUEsWUFBakI3QixHQUFpQixTQUFqQkEsR0FBaUI7QUFBQSxZQUFaOEIsUUFBWSxTQUFaQSxRQUFZOztBQUNqQyxlQUFPbkMsWUFBWSxFQUFFSyxRQUFGLEVBQU9DLFFBQVEsTUFBZixFQUF1QkMsTUFBTTRCLFFBQTdCLEVBQXVDMUIsUUFBUSxJQUEvQyxFQUFaLENBQVA7QUFDSDs7QUFFRCxhQUFTMkIsVUFBVCxRQUFtQztBQUFBLFlBQWIvQixHQUFhLFNBQWJBLEdBQWE7QUFBQSxZQUFSUyxJQUFRLFNBQVJBLElBQVE7O0FBQy9CLGVBQU9kLFlBQVksRUFBRUssUUFBRixFQUFPQyxRQUFRLFFBQWYsRUFBeUJDLE1BQU15QixLQUFLQyxTQUFMLENBQWVuQixJQUFmLENBQS9CLEVBQXFETixTQUFTLEVBQUUsZ0JBQWdCLGtCQUFsQixFQUE5RCxFQUFaLENBQVA7QUFDSDs7QUFFRCxhQUFTNkIsWUFBVCxHQUF3QjtBQUNwQixhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUMsVUFBVUMsTUFBOUIsRUFBc0NGLEdBQXRDLEVBQTJDO0FBQ3ZDRyxvQkFBUUMsR0FBUixDQUFZSCxVQUFVRCxDQUFWLENBQVo7QUFDSDtBQUNKOztBQUVELFdBQU87QUFDSFQsd0JBREc7QUFFSEUsMEJBRkc7QUFHSEcsMEJBSEc7QUFJSEUsOEJBSkc7QUFLSEM7QUFMRyxLQUFQOztBQVFBLGFBQVNuQyxVQUFULENBQW9CeUMsSUFBcEIsRUFBMEI7QUFDdEIsZUFBT0EsUUFBUSxHQUFHQyxRQUFILENBQVlDLElBQVosQ0FBaUJGLElBQWpCLE1BQTJCLG1CQUExQztBQUNIO0FBQ0osQ0ExRlcsRUFBWjs7UUE0RlM1QyxJLEdBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQzNDTytDLHVCLEdBQUFBLHVCOztBQWpEaEI7Ozs7QUFDQTs7OztBQUVBOzs7O0FBSUEsSUFBSUMsVUFBVTtBQUNWLGNBQVUsaUJBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ2hDLGFBQUtDLGNBQUwsR0FBc0JGLEtBQXRCO0FBQ0EsYUFBS0csY0FBTCxHQUFzQixLQUF0QjtBQUNBLFlBQUlDLE9BQU9ILFFBQVFJLEVBQVIsQ0FBVyxJQUFYLENBQVg7QUFDQSxlQUFPLEtBQUtGLGNBQVo7QUFDQSxlQUFPLEtBQUtELGNBQVo7QUFDQSxlQUFPRSxJQUFQO0FBQ0gsS0FSUztBQVNWLFlBQVEsZUFBVUosS0FBVixFQUFpQkMsT0FBakIsRUFBMEI7QUFDOUIsWUFBSUssT0FBT0MsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JaLElBQXRCLENBQTJCTixTQUEzQixDQUFYO0FBQ0EsWUFBSVUsVUFBVUssS0FBS0ksR0FBTCxFQUFkO0FBQ0EsWUFBSUMsYUFBYUwsSUFBakI7O0FBRUEsWUFBSSxLQUFLSCxjQUFMLElBQXVCUSxXQUFXakMsT0FBWCxDQUFtQixLQUFLd0IsY0FBeEIsTUFBNEMsQ0FBQyxDQUF4RSxFQUEyRTtBQUN2RSxtQkFBTyxFQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUlELFFBQVFXLElBQVIsQ0FBYUMsS0FBYixLQUF1QixJQUEzQixFQUFpQztBQUM3QixxQkFBS1YsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0QsbUJBQU9GLFFBQVFJLEVBQVIsQ0FBVyxJQUFYLENBQVA7QUFDSDtBQUNKLEtBdEJTO0FBdUJWLGVBQVcsa0JBQVVKLE9BQVYsRUFBbUI7QUFDMUIsWUFBSSxDQUFDLEtBQUtFLGNBQVYsRUFBMEI7QUFDdEIsbUJBQU9GLFFBQVFJLEVBQVIsQ0FBVyxJQUFYLENBQVA7QUFDSDtBQUNKLEtBM0JTO0FBNEJWO0FBQ0EsY0FBVSxnQkFBVUwsS0FBVixFQUFpQkMsT0FBakIsRUFBMEI7QUFDaEMsWUFBSWEsTUFBTTNDLEVBQUUsWUFBRixFQUFnQmlDLElBQWhCLENBQXFCSCxRQUFRSSxFQUFSLENBQVcsSUFBWCxDQUFyQixDQUFWO0FBQ0FTLFlBQUlDLElBQUosQ0FBUyxhQUFhZixLQUFiLEdBQXFCLElBQTlCLEVBQW9DZ0IsSUFBcEMsQ0FBeUMsRUFBRSxZQUFZLFVBQWQsRUFBekM7QUFDQSxlQUFPRixJQUFJVixJQUFKLEVBQVA7QUFDSDtBQWpDUyxDQUFkOztBQW9DQSxLQUFLLElBQUlhLEdBQVQsSUFBZ0JsQixPQUFoQixFQUF5QjtBQUNyQm1CLHlCQUFXQyxjQUFYLENBQTBCRixHQUExQixFQUErQmxCLFFBQVFrQixHQUFSLENBQS9CO0FBQ0g7O1FBRVFDLFUsR0FBQUEsb0I7QUFFRixTQUFTcEIsdUJBQVQsQ0FBaUNzQixjQUFqQyxFQUFpREMsU0FBakQsRUFBNEQ7QUFDL0QsUUFBSUMsV0FBVyxFQUFmOztBQUQrRCwrQkFHdERoQyxDQUhzRDtBQUkzRGdDLGlCQUFTQyxJQUFULENBQWN4RSxXQUFLOEIsT0FBTCxDQUFhLEVBQUV4QixLQUFLZ0UsVUFBVS9CLENBQVYsRUFBYWpDLEdBQXBCLEVBQWIsRUFBd0NpQixJQUF4QyxDQUE2QyxVQUFVQyxHQUFWLEVBQWU7QUFDdEUsZ0JBQUlpRCxXQUFXTixxQkFBV08sT0FBWCxDQUFtQmxELEdBQW5CLENBQWY7QUFDQTZDLDJCQUFlQyxVQUFVL0IsQ0FBVixFQUFhb0MsSUFBNUIsSUFBb0NGLFFBQXBDOztBQUVBLG1CQUFPLElBQVA7QUFDSCxTQUxhLEVBS1gsVUFBVWpELEdBQVYsRUFBZTtBQUFFLG1CQUFPLEtBQVA7QUFBZSxTQUxyQixDQUFkO0FBSjJEOztBQUcvRCxTQUFLLElBQUllLElBQUksQ0FBYixFQUFnQkEsSUFBSStCLFVBQVU3QixNQUE5QixFQUFzQ0YsS0FBSyxDQUEzQyxFQUE4QztBQUFBLGNBQXJDQSxDQUFxQztBQU83Qzs7QUFFRCxXQUFPNUIsUUFBUWlFLEdBQVIsQ0FBWUwsUUFBWixDQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REQ7QUFDQSxJQUFJTSxTQUFVLFlBQVk7QUFDdEIsUUFBSUMsU0FBUyxxQkFBYjs7QUFFQSxXQUFPO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsY0FBTSxjQUFVQyxLQUFWLEVBQWlCQyxNQUFqQixFQUF5QjtBQUMzQixnQkFBSUQsVUFBVSxJQUFkLEVBQW9CO0FBQ2hCQSx3QkFBUSxNQUFSO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1RBLHlCQUFTSCxNQUFUO0FBQ0g7O0FBRURJLGlCQUFLQyxHQUFMLENBQVMsRUFBRUgsWUFBRixFQUFULEVBQ0tJLE1BREwsQ0FDWWhFLEVBQUUsUUFBRixFQUFZO0FBQ2hCaUUscUJBQUtKLE1BRFc7QUFFaEJLLHVCQUFPO0FBRlMsYUFBWixDQURaO0FBS0gsU0ExQkU7QUEyQkhDLGNBQU0sZ0JBQVk7QUFDZEwsaUJBQUtNLE1BQUw7QUFDSDtBQTdCRSxLQUFQO0FBK0JILENBbENZLEVBQWI7O1FBb0NTWCxNLEdBQUFBLE07O0FBRVQ7O0FBQ0EsQ0FBQyxZQUFZO0FBQ1R6RCxNQUFFLE1BQUYsRUFBVXFFLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLHNDQUF0QixFQUE4RCxVQUFVQyxFQUFWLEVBQWM7QUFDeEUsWUFBSUMsVUFBVXZFLEVBQUVzRSxHQUFHRSxNQUFMLENBQWQ7QUFDQSxZQUFJUCxNQUFNTSxRQUFRMUIsSUFBUixDQUFhLEtBQWIsQ0FBVjs7QUFFQSxZQUFJNEIsYUFBYVgsS0FBS0MsR0FBTCxDQUFTLEVBQUVXLGFBQWEsSUFBZixFQUFULENBQWpCO0FBQ0ExRSxVQUFFLFNBQUYsRUFBYTtBQUNUa0UsbUJBQU8sNEJBREU7QUFFVEQsaUJBQUtBO0FBRkksU0FBYixFQUdHVSxRQUhILENBR1lGLFVBSFo7QUFJSCxLQVREO0FBVUgsQ0FYRDs7QUFhQTtBQUNBLElBQUlYLE9BQVEsWUFBWTtBQUNwQixRQUFNYywwQkFBMEIsbUJBQWhDO0FBQ0EsUUFBTUMsK0JBQStCLHdCQUFyQztBQUNBLFFBQU1DLHFCQUFxQixNQUEzQjs7QUFFQSxhQUFTQyxPQUFULE9BQWtEO0FBQUEsWUFBL0JMLFdBQStCLFFBQS9CQSxXQUErQjtBQUFBLFlBQWxCZCxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxZQUFYb0IsT0FBVyxRQUFYQSxPQUFXOztBQUM5QyxZQUFJTixnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDdEJBLDBCQUFjLEtBQWQ7QUFDSDs7QUFFRDFFLFVBQUUsTUFBRixFQUFVaUYsUUFBVixDQUFtQixnQkFBbkI7O0FBRUEsWUFBSUMsZUFBZWxGLEVBQUUsYUFBRixFQUFpQjtBQUNoQ2tFLG1CQUFPWTtBQUR5QixTQUFqQixDQUFuQjs7QUFJQSxZQUFJSyxpQkFBaUJuRixFQUFFLGFBQUYsRUFBaUI7QUFDbENrRSxtQkFBT1c7QUFEMkIsU0FBakIsQ0FBckI7O0FBSUEsWUFBSU8sb0JBQW9CcEYsRUFBRSxhQUFGLEVBQWlCO0FBQ3JDa0UsbUJBQU9VO0FBRDhCLFNBQWpCLENBQXhCOztBQUlBLFlBQUlGLFdBQUosRUFBaUI7QUFDYlUsOEJBQWtCZixFQUFsQixDQUFxQixPQUFyQixFQUE4QmdCLFVBQTlCO0FBQ0FILHlCQUFhYixFQUFiLENBQWdCLE9BQWhCLEVBQXlCZ0IsVUFBekI7QUFDSDs7QUFFRCxZQUFJekIsS0FBSixFQUFXO0FBQ1BzQix5QkFBYUksR0FBYixDQUFpQixrQkFBakIsRUFBcUMxQixLQUFyQztBQUNIOztBQUVELFlBQUlvQixXQUFXTyxNQUFNLENBQUNQLE9BQVAsQ0FBWCxJQUE4QkEsV0FBVyxDQUF6QyxJQUE4Q0EsV0FBVyxDQUE3RCxFQUFnRTtBQUM1REUseUJBQWFJLEdBQWIsQ0FBaUIsU0FBakIsRUFBNEJOLE9BQTVCO0FBQ0g7O0FBRURJLDBCQUFrQnBCLE1BQWxCLENBQXlCbUIsY0FBekI7QUFDQW5GLFVBQUUsTUFBRixFQUFVZ0UsTUFBVixDQUFpQm9CLGlCQUFqQjtBQUNBcEYsVUFBRSxNQUFGLEVBQVVnRSxNQUFWLENBQWlCa0IsWUFBakI7O0FBRUEsZUFBT0MsY0FBUDtBQUNIOztBQUVELGFBQVNFLFVBQVQsR0FBc0I7QUFDbEJyRixVQUFFLE1BQUYsRUFBVTRDLElBQVYsQ0FBZSxNQUFNa0Msa0JBQXJCLEVBQXlDVixNQUF6QztBQUNBcEUsVUFBRSxNQUFGLEVBQVU0QyxJQUFWLENBQWUsTUFBTWdDLHVCQUFyQixFQUE4Q1IsTUFBOUM7QUFDQXBFLFVBQUUsTUFBRixFQUFVd0YsV0FBVixDQUFzQixnQkFBdEI7QUFDSDs7QUFFRCxXQUFPO0FBQ0h6QixhQUFLZ0IsT0FERjtBQUVIWCxnQkFBUWlCO0FBRkwsS0FBUDtBQUlILENBdERVLEVBQVg7O1FBd0RTdkIsSSxHQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlHVCxJQUFJMkIsV0FBWSxZQUFZOztBQUV4QjtBQUNBLGFBQVNDLFdBQVQsT0FBOEY7QUFBQSxZQUF2RUMsV0FBdUUsUUFBdkVBLFdBQXVFO0FBQUEsWUFBMURDLEtBQTBELFFBQTFEQSxLQUEwRDtBQUFBLFlBQW5EQyxPQUFtRCxRQUFuREEsT0FBbUQ7QUFBQSxZQUExQ3hGLE1BQTBDLFFBQTFDQSxNQUEwQztBQUFBLFlBQWxDeUYsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsWUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLFlBQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDMUYsWUFBSUMsU0FBU2pHLEVBQUUsbUJBQUYsRUFBdUIsRUFBRVMsTUFBTW1GLFNBQVMsRUFBakIsRUFBdkIsQ0FBYjtBQUNBLFlBQUlNLGVBQWVsRyxFQUFFLFNBQUYsRUFBYTtBQUM1QmtFLG1CQUFPLE9BRHFCO0FBRTVCLDRCQUFnQixPQUZZO0FBRzVCLDBCQUFjLE9BSGM7QUFJNUJqQyxrQkFBTTtBQUpzQixTQUFiLENBQW5CO0FBTUEsWUFBSWtFLFdBQVduRyxFQUFFLGVBQUYsRUFBbUIsRUFBRVMsTUFBTSxPQUFPb0YsV0FBVyxFQUFsQixDQUFSLEVBQW5CLENBQWY7QUFDQSxZQUFJTyxTQUFTcEcsRUFBRSxhQUFGLEVBQWlCLEVBQUVrRSxPQUFPLGtCQUFrQjdELFVBQVUsTUFBNUIsQ0FBVCxFQUFqQixDQUFiOztBQUVBK0YsZUFBT3BDLE1BQVAsQ0FBY2lDLE1BQWQsRUFDS2pDLE1BREwsQ0FDWW1DLFFBRFosRUFFS25DLE1BRkwsQ0FFWWtDLFlBRlosRUFHS3ZCLFFBSEwsQ0FHY3FCLFlBQVlMLFdBQVosSUFBMkIsTUFIekM7O0FBS0EsWUFBSSxDQUFDSSxXQUFMLEVBQWtCO0FBQ2RNLHVCQUFXLFlBQVk7QUFDbkJELHVCQUFPRSxPQUFQLENBQWUsR0FBZixFQUFvQixZQUFZO0FBQzVCRiwyQkFBT2hDLE1BQVA7QUFDSCxpQkFGRDtBQUdILGFBSkQsRUFJRyxDQUFDMEIsV0FBVyxFQUFaLElBQWtCLElBSnJCO0FBS0g7QUFDSjs7QUFFRCxXQUFPO0FBQ0hKLHFCQUFhQTtBQURWLEtBQVA7QUFHSCxDQS9CZSxFQUFoQjs7UUFpQ1NELFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ1QsSUFBSWMsUUFBUyxZQUFZO0FBQ3JCLGFBQVNDLEVBQVQsR0FBYztBQUNWLGVBQU9DLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLElBQUlELEtBQUtFLE1BQUwsRUFBTCxJQUFzQixPQUFqQyxFQUNGbEYsUUFERSxDQUNPLEVBRFAsRUFFRm1GLFNBRkUsQ0FFUSxDQUZSLENBQVA7QUFHSDs7QUFFRCxhQUFTQyxJQUFULEdBQWdCO0FBQ1osZUFBT0wsT0FBT0EsSUFBUCxHQUFjLEdBQWQsR0FBb0JBLElBQXBCLEdBQTJCLEdBQTNCLEdBQWlDQSxJQUFqQyxHQUF3QyxHQUF4QyxHQUNIQSxJQURHLEdBQ0ksR0FESixHQUNVQSxJQURWLEdBQ2lCQSxJQURqQixHQUN3QkEsSUFEL0I7QUFFSDs7QUFFRCxhQUFTTSxNQUFULENBQWdCQyxZQUFoQixFQUE4QjtBQUMxQixZQUFJQSxhQUFhLENBQWIsTUFBb0IsR0FBeEIsRUFBNkI7QUFDekJBLDJCQUFlQSxhQUFhSCxTQUFiLENBQXVCLENBQXZCLEVBQTBCRyxhQUFhMUYsTUFBYixHQUFzQixDQUFoRCxDQUFmO0FBQ0g7QUFDRCxZQUFJMkYsWUFBWSx1R0FBaEI7QUFDQSxlQUFPQSxVQUFVQyxJQUFWLENBQWVGLFlBQWYsQ0FBUDtBQUNIOztBQUVELGFBQVNHLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUN2QyxZQUFJQyxnQkFBSjtBQUNBLFlBQUlELGFBQWEsSUFBakIsRUFBdUI7QUFBRTtBQUNyQkMsc0JBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVjtBQUNBRixvQkFBUUcsWUFBUixDQUFxQixNQUFyQixFQUE2QixpQkFBN0I7QUFDQUgsb0JBQVFHLFlBQVIsQ0FBcUIsS0FBckIsRUFBNEJMLFFBQTVCO0FBQ0gsU0FKRCxNQUtLLElBQUlDLGFBQWEsS0FBakIsRUFBd0I7QUFBRTtBQUMzQkMsc0JBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBVjtBQUNBRixvQkFBUUcsWUFBUixDQUFxQixLQUFyQixFQUE0QixZQUE1QjtBQUNBSCxvQkFBUUcsWUFBUixDQUFxQixNQUFyQixFQUE2QixVQUE3QjtBQUNBSCxvQkFBUUcsWUFBUixDQUFxQixNQUFyQixFQUE2QkwsUUFBN0I7QUFDSDtBQUNELFlBQUksT0FBT0UsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNoQ0MscUJBQVNHLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDQyxXQUF6QyxDQUFxREwsT0FBckQ7QUFDSDtBQUNKOztBQUVEO0FBQ0EsUUFBSU0sWUFBWSxFQUFoQjtBQUNBLGFBQVNDLGtCQUFULENBQTRCVCxRQUE1QixFQUFzQ0MsUUFBdEMsRUFBZ0Q7QUFDNUNPLGtCQUFVUixRQUFWLElBQXNCUSxVQUFVUixRQUFWLEtBQXVCLElBQUk1SCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzFFLGdCQUFJNEgsZ0JBQUo7QUFDQSxnQkFBSUQsYUFBYSxJQUFqQixFQUF1QjtBQUFFO0FBQ3JCQywwQkFBVUMsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFWO0FBQ0FGLHdCQUFRRyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCLGlCQUE3QjtBQUNBSCx3QkFBUUcsWUFBUixDQUFxQixLQUFyQixFQUE0QkwsUUFBNUI7QUFDSCxhQUpELE1BS0ssSUFBSUMsYUFBYSxLQUFqQixFQUF3QjtBQUFFO0FBQzNCQywwQkFBVUMsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFWO0FBQ0FGLHdCQUFRRyxZQUFSLENBQXFCLEtBQXJCLEVBQTRCLFlBQTVCO0FBQ0FILHdCQUFRRyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCLFVBQTdCO0FBQ0FILHdCQUFRRyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCTCxRQUE3QjtBQUNIO0FBQ0QsZ0JBQUksT0FBT0UsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNoQ0Esd0JBQVFRLE1BQVIsR0FBaUJySSxPQUFqQjtBQUNBNkgsd0JBQVFTLE9BQVIsR0FBa0JySSxNQUFsQjtBQUNBNkgseUJBQVNHLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDQyxXQUF6QyxDQUFxREwsT0FBckQ7QUFDSCxhQUpELE1BSU87QUFDSDVIO0FBQ0g7QUFDSixTQXBCNEMsRUFvQjFDVSxJQXBCMEMsQ0FvQnJDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLG1CQUFPdUgsVUFBVVIsUUFBVixDQUFQLENBQTRCLE9BQU8vRyxHQUFQO0FBQWEsU0FwQnJCLENBQTdDOztBQXNCQSxlQUFPdUgsVUFBVVIsUUFBVixDQUFQO0FBQ0g7O0FBRUQsYUFBU1ksZUFBVCxDQUF5QlosUUFBekIsRUFBbUNDLFFBQW5DLEVBQTZDO0FBQ3pDLFlBQUlZLGdCQUFnQlosYUFBYSxJQUFiLEdBQW9CLFFBQXBCLEdBQStCQSxhQUFhLEtBQWIsR0FBcUIsTUFBckIsR0FBOEIsTUFBakYsQ0FEeUMsQ0FDZ0Q7QUFDekYsWUFBSWEsYUFBYWIsYUFBYSxJQUFiLEdBQW9CLEtBQXBCLEdBQTRCQSxhQUFhLEtBQWIsR0FBcUIsTUFBckIsR0FBOEIsTUFBM0UsQ0FGeUMsQ0FFMEM7QUFDbkYsWUFBSWMsY0FBY1osU0FBU0csb0JBQVQsQ0FBOEJPLGFBQTlCLENBQWxCO0FBQ0EsYUFBSyxJQUFJN0csSUFBSStHLFlBQVk3RyxNQUF6QixFQUFpQ0YsS0FBSyxDQUF0QyxFQUF5Q0EsR0FBekMsRUFBOEM7QUFBRTtBQUM1QyxnQkFBSStHLFlBQVkvRyxDQUFaLEtBQWtCK0csWUFBWS9HLENBQVosRUFBZWdILFlBQWYsQ0FBNEJGLFVBQTVCLE1BQTRDLElBQTlELElBQXNFQyxZQUFZL0csQ0FBWixFQUFlZ0gsWUFBZixDQUE0QkYsVUFBNUIsRUFBd0MxSCxPQUF4QyxDQUFnRDRHLFFBQWhELE1BQThELENBQUMsQ0FBekksRUFBNEk7QUFDeEllLDRCQUFZL0csQ0FBWixFQUFlaUgsVUFBZixDQUEwQkMsV0FBMUIsQ0FBc0NILFlBQVkvRyxDQUFaLENBQXRDLEVBRHdJLENBQ2pGO0FBQzFEO0FBQ0o7QUFDSjs7QUFFRCxhQUFTbUgsMEJBQVQsQ0FBb0NDLEdBQXBDLEVBQXlDekYsR0FBekMsRUFBOENqQixLQUE5QyxFQUFxRDtBQUNqRCxZQUFJMkcsS0FBSyxJQUFJQyxNQUFKLENBQVcsV0FBVzNGLEdBQVgsR0FBaUIsV0FBNUIsRUFBeUMsR0FBekMsQ0FBVDtBQUNBLFlBQUk0RixZQUFZSCxJQUFJaEksT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUF0QixHQUEwQixHQUExQixHQUFnQyxHQUFoRDtBQUNBLFlBQUlnSSxJQUFJSSxLQUFKLENBQVVILEVBQVYsQ0FBSixFQUFtQjtBQUNmLG1CQUFPRCxJQUFJSyxPQUFKLENBQVlKLEVBQVosRUFBZ0IsT0FBTzFGLEdBQVAsR0FBYSxHQUFiLEdBQW1CakIsS0FBbkIsR0FBMkIsSUFBM0MsQ0FBUDtBQUNILFNBRkQsTUFHSztBQUNELG1CQUFPMEcsTUFBTUcsU0FBTixHQUFrQjVGLEdBQWxCLEdBQXdCLEdBQXhCLEdBQThCakIsS0FBckM7QUFDSDtBQUNKOztBQUVELGFBQVM5QyxVQUFULENBQW9CeUMsSUFBcEIsRUFBMEI7QUFDdEIsZUFBT0EsUUFBUSxHQUFHQyxRQUFILENBQVlDLElBQVosQ0FBaUJGLElBQWpCLE1BQTJCLG1CQUExQztBQUNIOztBQUVELGFBQVNxSCxZQUFULENBQXNCNUcsSUFBdEIsRUFBNEI7QUFDeEIsWUFBSTZHLFlBQVlDLE9BQU9DLElBQVAsQ0FBWSxhQUFaLENBQWhCO0FBQ0EsWUFBSSxDQUFDRixTQUFELElBQWNBLFVBQVVHLE1BQXhCLElBQWtDLE9BQU9ILFVBQVVHLE1BQWpCLEtBQTRCLFdBQWxFLEVBQStFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsU0FMRCxNQUtPO0FBQ0hILHNCQUFVeEIsUUFBVixDQUFtQjRCLEtBQW5CLENBQXlCakgsSUFBekI7QUFDQTZHLHNCQUFVeEIsUUFBVixDQUFtQjZCLEtBQW5CO0FBQ0FMLHNCQUFVTSxLQUFWO0FBQ0g7QUFDSjs7QUFFRCxhQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUN2QixlQUFPQSxJQUFJVixPQUFKLENBQVksNkJBQVosRUFBMkMsTUFBM0MsQ0FBUDtBQUNIOztBQUVELGFBQVNXLFVBQVQsQ0FBb0JELEdBQXBCLEVBQXlCMUcsSUFBekIsRUFBK0JnRyxPQUEvQixFQUF3QztBQUNwQyxlQUFPVSxJQUFJVixPQUFKLENBQVksSUFBSUgsTUFBSixDQUFXWSxhQUFhekcsSUFBYixDQUFYLEVBQStCLEdBQS9CLENBQVosRUFBaURnRyxPQUFqRCxDQUFQO0FBQ0g7O0FBRUQsYUFBU1ksZUFBVCxHQUEyQjtBQUN2QixZQUFJQyxNQUFNLEVBQVY7QUFDQSxhQUFLLElBQUl0SSxJQUFJLENBQWIsRUFBZ0JBLElBQUltRyxTQUFTb0MsV0FBVCxDQUFxQnJJLE1BQXpDLEVBQWlERixHQUFqRCxFQUFzRDtBQUNsRCxnQkFBSXdJLFFBQVFyQyxTQUFTb0MsV0FBVCxDQUFxQnZJLENBQXJCLEVBQXdCd0ksS0FBeEIsSUFBaUNyQyxTQUFTb0MsV0FBVCxDQUFxQnZJLENBQXJCLEVBQXdCeUksUUFBckU7QUFDQSxpQkFBSyxJQUFJQyxDQUFULElBQWNGLEtBQWQsRUFBcUI7QUFDakIsb0JBQUksT0FBT0EsTUFBTUUsQ0FBTixFQUFTQyxZQUFoQixLQUFpQyxRQUFyQyxFQUErQ0wsSUFBSXJHLElBQUosQ0FBU3VHLE1BQU1FLENBQU4sRUFBU0MsWUFBbEI7QUFDbEQ7QUFDSjtBQUNELGVBQU9MLEdBQVA7QUFDSDs7QUFFRCxhQUFTTSxpQkFBVCxDQUEyQi9ELFFBQTNCLEVBQXFDO0FBQ2pDLFlBQUlnRSxZQUFZUixpQkFBaEI7QUFDQSxhQUFLLElBQUlySSxJQUFJLENBQWIsRUFBZ0JBLElBQUk2SSxVQUFVM0ksTUFBOUIsRUFBc0NGLEdBQXRDLEVBQTJDO0FBQ3ZDLGdCQUFJNkksVUFBVTdJLENBQVYsTUFBaUI2RSxRQUFyQixFQUErQixPQUFPLElBQVA7QUFDbEM7QUFDRCxlQUFPLEtBQVA7QUFDSDs7QUFFRCxhQUFTaUUsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJDLEtBQTlCLEVBQXFDQyxRQUFyQyxFQUErQztBQUMzQyxZQUFJLENBQUNGLE9BQUQsSUFBWSxDQUFDQyxLQUFqQixFQUF3QjtBQUNwQjtBQUNIOztBQUVELFlBQUlsRSxTQUFTakcsRUFBRWtLLE9BQUYsQ0FBYjtBQUNBLFlBQUlHLE9BQU9ySyxFQUFFbUssS0FBRixDQUFYOztBQUVBLFlBQUlHLGFBQWFyRSxPQUFPc0UsR0FBUCxHQUFhM0IsT0FBYixDQUFxQixNQUFyQixFQUE2QixHQUE3QixFQUFrQ0EsT0FBbEMsQ0FBMEMsS0FBMUMsRUFBaUQsR0FBakQsRUFBc0Q0QixXQUF0RCxFQUFqQjtBQUNBLFlBQUlDLFdBQVdKLEtBQUtFLEdBQUwsR0FBV0MsV0FBWCxFQUFmOztBQUVBLFlBQUlDLFNBQVNsSyxPQUFULENBQWlCK0osVUFBakIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUNyQ0csdUJBQVdBLFNBQVM3QixPQUFULENBQWlCMEIsVUFBakIsRUFBNkIsRUFBN0IsQ0FBWDtBQUNIOztBQUVEckUsZUFBTzVCLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVVxRyxHQUFWLEVBQWU7QUFDOUJKLHlCQUFhckUsT0FBT3NFLEdBQVAsR0FBYUMsV0FBYixFQUFiOztBQUVBSCxpQkFBS0UsR0FBTCxDQUFTRCxXQUFXMUIsT0FBWCxDQUFtQixNQUFuQixFQUEyQixHQUEzQixFQUFnQ0EsT0FBaEMsQ0FBd0MsS0FBeEMsRUFBK0MsR0FBL0MsRUFBb0Q0QixXQUFwRCxFQUFUOztBQUVBLGdCQUFJSixRQUFKLEVBQWM7QUFDVkEseUJBQVNNLEdBQVQ7QUFDSDtBQUNKLFNBUkQ7QUFTSDs7QUFFRCxXQUFPO0FBQ0hsRSxjQURHO0FBRUhLLGtCQUZHO0FBR0hDLHNCQUhHO0FBSUhJLG9DQUpHO0FBS0hVLDhDQUxHO0FBTUhHLHdDQU5HO0FBT0hPLDhEQVBHO0FBUUh2Siw4QkFSRztBQVNIOEosa0NBVEc7QUFVSFUsOEJBVkc7QUFXSFEsNENBWEc7QUFZSEU7QUFaRyxLQUFQO0FBY0gsQ0E3S1ksRUFBYjs7QUErS0E7QUFDQTs7QUFFQWpLLEVBQUUsTUFBRixFQUFVcUUsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBdkIsRUFBcUMsVUFBVUMsRUFBVixFQUFjO0FBQy9DLFFBQUlxRyxXQUFXM0ssRUFBRSxJQUFGLENBQWY7QUFDQSxRQUFJdUUsVUFBVXZFLEVBQUUySyxTQUFTOUgsSUFBVCxDQUFjLGFBQWQsQ0FBRixDQUFkOztBQUVBLFFBQUk4SCxTQUFTQyxFQUFULENBQVksVUFBWixDQUFKLEVBQTZCO0FBQ3pCckcsZ0JBQVFzRyxJQUFSLENBQWEsVUFBVUMsQ0FBVixFQUFhQyxPQUFiLEVBQXNCO0FBQUUvSyxjQUFFK0ssT0FBRixFQUFXcEgsSUFBWDtBQUFvQixTQUF6RDtBQUNILEtBRkQsTUFFTztBQUNIWSxnQkFBUXNHLElBQVIsQ0FBYSxVQUFVQyxDQUFWLEVBQWFDLE9BQWIsRUFBc0I7QUFBRS9LLGNBQUUrSyxPQUFGLEVBQVc1RyxJQUFYO0FBQW9CLFNBQXpEO0FBQ0g7QUFDSixDQVREOztRQVdTb0MsSyxHQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0xUOztBQUVBLElBQUl5RSxZQUFhLFlBQVk7O0FBRXpCLGFBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCQyxZQUE1QixFQUEwQ0MsWUFBMUMsRUFBd0Q7QUFDcEQsWUFBSXZKLFFBQVFxSixTQUFTWCxHQUFULEVBQVo7QUFDQSxZQUFJYSxhQUFhdkosS0FBYixDQUFKLEVBQXlCO0FBQ3JCcUoscUJBQVM1RixHQUFULENBQWEsUUFBYixFQUF1QixFQUF2QjtBQUNBNEYscUJBQVNHLElBQVQsQ0FBYyxNQUFkLEVBQXNCNUssSUFBdEIsQ0FBMkIsRUFBM0I7QUFDQSxtQkFBTyxJQUFQO0FBQ0gsU0FKRCxNQUlPO0FBQ0h5SyxxQkFBUzVGLEdBQVQsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNBNEYscUJBQVNHLElBQVQsQ0FBYyxNQUFkLEVBQXNCNUssSUFBdEIsQ0FBMkIwSyxnQkFBZ0IsZ0JBQTNDO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBU0csZ0JBQVQsQ0FBMEJ6SixLQUExQixFQUFpQzBKLFNBQWpDLEVBQTRDOztBQUV4QyxZQUFJMUosU0FBU0EsTUFBTVIsTUFBTixJQUFnQmtLLFNBQTdCLEVBQXdDO0FBQ3BDLG1CQUFPLElBQVA7QUFDSCxTQUZELE1BRU87QUFDSCxtQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFFRCxhQUFTQyxnQkFBVCxDQUEwQjNKLEtBQTFCLEVBQWlDNEosU0FBakMsRUFBNEM7QUFDeEMsWUFBSTVKLE1BQU1SLE1BQU4sSUFBZ0JvSyxTQUFwQixFQUErQjtBQUMzQixtQkFBTyxJQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBU0MsY0FBVCxDQUF3QjdKLEtBQXhCLEVBQStCO0FBQzNCLFlBQUk4SixVQUFVLGdCQUFkOztBQUVBLFlBQUk5SixTQUFTOEosUUFBUTFFLElBQVIsQ0FBYXBGLEtBQWIsQ0FBYixFQUFrQztBQUM5QixtQkFBTyxJQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBUytKLDBCQUFULENBQW9DL0osS0FBcEMsRUFBMkM7QUFDdkMsWUFBSThKLFVBQVUsaUJBQWQ7O0FBRUEsZUFBT0UsVUFBVWhLLEtBQVYsRUFBaUI4SixPQUFqQixDQUFQO0FBQ0g7O0FBRUQsYUFBU0csYUFBVCxDQUF1QmpLLEtBQXZCLEVBQThCO0FBQzFCLFlBQUk4SixVQUFVLGtCQUFkOztBQUVBLGVBQU9FLFVBQVVoSyxLQUFWLEVBQWlCOEosT0FBakIsQ0FBUDtBQUNIOztBQUVELGFBQVNJLG9CQUFULENBQThCbEssS0FBOUIsRUFBcUM7QUFDakMsWUFBSThKLFVBQVUsU0FBZDs7QUFFQSxZQUFJOUosU0FBUzhKLFFBQVExRSxJQUFSLENBQWFwRixLQUFiLENBQWIsRUFBa0M7QUFDOUIsbUJBQU8sSUFBUDtBQUNILFNBRkQsTUFFTztBQUNILG1CQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELGFBQVNtSyxhQUFULENBQXVCbkssS0FBdkIsRUFBOEI7QUFDMUIsWUFBSThKLFVBQVUseUpBQWQ7QUFDQSxZQUFJOUosU0FBUzhKLFFBQVExRSxJQUFSLENBQWFwRixLQUFiLENBQWIsRUFBa0M7QUFDOUIsbUJBQU8sSUFBUDtBQUNILFNBRkQsTUFFTztBQUNILG1CQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELGFBQVNnSyxTQUFULENBQW1CaEssS0FBbkIsRUFBMEI4SixPQUExQixFQUFtQztBQUMvQixZQUFJOUosU0FBUzhKLFFBQVExRSxJQUFSLENBQWFwRixLQUFiLENBQWIsRUFBa0M7QUFDOUIsbUJBQU8sSUFBUDtBQUNILFNBRkQsTUFFTztBQUNILG1CQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELGFBQVNvSyxlQUFULENBQXlCcEssS0FBekIsRUFBZ0M7QUFDNUIsWUFBSThKLFVBQVUsZ0JBQWQ7QUFDQSxlQUFPTyxlQUFlckssS0FBZixFQUFzQjhKLE9BQXRCLENBQVA7QUFDSDs7QUFFRCxhQUFTUSxRQUFULENBQWtCdEssS0FBbEIsRUFBeUI7QUFDckIsWUFBSThKLFVBQVUsZUFBZDtBQUNBLGVBQU9PLGVBQWVySyxLQUFmLEVBQXNCOEosT0FBdEIsQ0FBUDtBQUNIOztBQUVELGFBQVNPLGNBQVQsQ0FBd0JySyxLQUF4QixFQUErQjhKLE9BQS9CLEVBQXdDO0FBQ3BDLFlBQUk5SixTQUFTOEosUUFBUTFFLElBQVIsQ0FBYXBGLEtBQWIsQ0FBYixFQUFrQztBQUM5QixtQkFBTyxJQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBUzlDLFVBQVQsQ0FBb0J5QyxJQUFwQixFQUEwQjtBQUN0QixlQUFPQSxRQUFRLEdBQUdDLFFBQUgsQ0FBWUMsSUFBWixDQUFpQkYsSUFBakIsTUFBMkIsbUJBQTFDO0FBQ0g7O0FBRUQsYUFBU3NGLE1BQVQsQ0FBZ0JDLFlBQWhCLEVBQThCO0FBQzFCLFlBQUlBLGFBQWEsQ0FBYixNQUFvQixHQUF4QixFQUE2QjtBQUN6QkEsMkJBQWVBLGFBQWFILFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEJHLGFBQWExRixNQUFiLEdBQXNCLENBQWhELENBQWY7QUFDSDtBQUNELFlBQUkyRixZQUFZLHVHQUFoQjtBQUNBLGVBQU9BLFVBQVVDLElBQVYsQ0FBZUYsWUFBZixDQUFQO0FBQ0g7O0FBRUQsYUFBU3FGLFNBQVQsQ0FBbUJ2SyxLQUFuQixFQUEwQjtBQUN0QixlQUFPQSxTQUFTd0ssU0FBU3hLLEtBQVQsS0FBbUJBLEtBQW5DO0FBQ0g7O0FBRUQsYUFBU3lLLGVBQVQsQ0FBeUJwQixRQUF6QixFQUFtQ3FCLEdBQW5DLEVBQXdDQyxHQUF4QyxFQUE2QztBQUN6QyxZQUFJRCxPQUFPLENBQUN0QixTQUFTQyxRQUFULDJDQUEwRHNCLEdBQTFELFFBQWtFLFVBQVUzSyxLQUFWLEVBQWlCO0FBQUUsbUJBQU8ySyxNQUFNLENBQUMzSyxLQUFELElBQVUsQ0FBQzJLLEdBQWpCLEdBQXVCLElBQTlCO0FBQXFDLFNBQTFILENBQVosRUFBeUk7QUFDckksbUJBQU8sS0FBUDtBQUNIOztBQUVELFlBQUlBLE9BQU8sQ0FBQ3ZCLFNBQVNDLFFBQVQsNkNBQTREcUIsR0FBNUQsUUFBb0UsVUFBVTFLLEtBQVYsRUFBaUI7QUFBRSxtQkFBTzBLLE1BQU0sQ0FBQzFLLEtBQUQsSUFBVSxDQUFDMEssR0FBakIsR0FBdUIsSUFBOUI7QUFBcUMsU0FBNUgsQ0FBWixFQUEySTtBQUN2SSxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsYUFBU0UsZUFBVCxDQUF5QnZCLFFBQXpCLEVBQW1DcUIsR0FBbkMsRUFBd0NDLEdBQXhDLEVBQTZDO0FBQ3pDLFlBQUlELE9BQU8sQ0FBQ3RCLFNBQVNDLFFBQVQsa0NBQWlEcUIsR0FBakQsd0JBQXlFLFVBQVUxSyxLQUFWLEVBQWlCO0FBQUUsbUJBQU95SixpQkFBaUJ6SixLQUFqQixFQUF3QjBLLEdBQXhCLENBQVA7QUFBc0MsU0FBbEksQ0FBWixFQUFpSjtBQUM3SSxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSUMsT0FBTyxDQUFDdkIsU0FBU0MsUUFBVCxrREFBaUVzQixHQUFqRSxRQUF5RSxVQUFVM0ssS0FBVixFQUFpQjtBQUFFLG1CQUFPMkosaUJBQWlCM0osS0FBakIsRUFBd0IySyxHQUF4QixDQUFQO0FBQXNDLFNBQWxJLENBQVosRUFBaUo7QUFDN0ksbUJBQU8sS0FBUDtBQUNIOztBQUVELGVBQU8sSUFBUDtBQUNIOztBQUVEOzs7Ozs7QUFNQSxhQUFTRSxzQkFBVCxDQUFnQ0Msb0JBQWhDLEVBQXNEO0FBQ2xELGlCQUFTQyxjQUFULENBQXdCdEksRUFBeEIsRUFBNEI7QUFDeEIsZ0JBQUksQ0FBQyxJQUFELElBQVMsQ0FBQ0EsRUFBVixJQUFnQixDQUFDQSxHQUFHRSxNQUF4QixFQUFnQztBQUM1QmxELHdCQUFRekIsS0FBUixDQUFjLG9DQUFkO0FBQ0EsdUJBQU8sS0FBUDtBQUNIOztBQUVELGdCQUFJZ04sc0JBQXNCN00sRUFBRSxRQUFRc0UsR0FBR0UsTUFBYixFQUFxQjVCLElBQXJCLENBQTBCLFdBQTFCLENBQTFCO0FBQ0EsZ0JBQUlrSyxPQUFPLEtBQVg7O0FBRUFELGdDQUFvQmhDLElBQXBCLENBQXlCLFVBQVVDLENBQVYsRUFBYUMsT0FBYixFQUFzQjtBQUMzQyxvQkFBSUcsV0FBV2xMLEVBQUUrSyxPQUFGLENBQWY7QUFDQSxvQkFBSSxDQUFDZ0MsY0FBYzdCLFFBQWQsRUFBd0J5QixvQkFBeEIsQ0FBTCxFQUFvRDtBQUNoREcsMkJBQU8sSUFBUDtBQUNIO0FBQ0osYUFMRDs7QUFPQSxtQkFBTyxDQUFDQSxJQUFSO0FBQ0g7O0FBRUQsZUFBT0YsY0FBUDtBQUNIOztBQUVELGFBQVNHLGFBQVQsQ0FBdUI3QixRQUF2QixFQUFpQ3lCLG9CQUFqQyxFQUF1RDtBQUNuRCxZQUFJSyxxQkFBcUI7QUFDckIsd0JBQVksaUJBRFM7QUFFckIscUJBQVMsaUJBRlk7QUFHckIsbUJBQU8sd0JBSGM7QUFJckIsc0JBQVUsZUFKVztBQUtyQixvQkFBUTtBQUxhLFNBQXpCOztBQVFBLFlBQUlDLGtCQUFrQixDQUFDL0IsU0FBU3JJLElBQVQsQ0FBYyxzQkFBZCxLQUF5QyxFQUExQyxFQUE4Q3FLLEtBQTlDLENBQW9ELEdBQXBELENBQXRCO0FBQ0EsWUFBSUMsWUFBWSxLQUFoQjtBQUNBLFlBQUlaLE1BQU1yQixTQUFTckksSUFBVCxDQUFjLFVBQWQsQ0FBVjtBQUNBLFlBQUkySixNQUFNdEIsU0FBU3JJLElBQVQsQ0FBYyxVQUFkLENBQVY7O0FBRUEsYUFBSyxJQUFJMUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJOEwsZ0JBQWdCNUwsTUFBcEMsRUFBNENGLEtBQUssQ0FBakQsRUFBb0Q7QUFDaEQsZ0JBQUlpTSxvQkFBb0JsQyxTQUFTckksSUFBVCxDQUFjLGtCQUFrQm9LLGdCQUFnQjlMLENBQWhCLENBQWhDLEtBQXVENkwsbUJBQW1CQyxnQkFBZ0I5TCxDQUFoQixDQUFuQixDQUEvRTs7QUFFQSxvQkFBUThMLGdCQUFnQjlMLENBQWhCLENBQVI7QUFDSSxxQkFBSyxVQUFMO0FBQ0ksd0JBQUksQ0FBQzhKLFNBQVNDLFFBQVQsRUFBbUJrQyxpQkFBbkIsRUFBc0MsVUFBVXZMLEtBQVYsRUFBaUI7QUFBRSwrQkFBTyxDQUFDLENBQUNBLEtBQVQ7QUFBaUIscUJBQTFFLENBQUwsRUFBa0Y7QUFDOUVzTCxvQ0FBWSxJQUFaO0FBQ0g7O0FBRUQ7QUFDSixxQkFBSyxPQUFMO0FBQ0ksd0JBQUksQ0FBQ2xDLFNBQVNDLFFBQVQsRUFBbUJrQyxpQkFBbkIsRUFBc0NwQixhQUF0QyxDQUFMLEVBQTJEO0FBQ3ZEbUIsb0NBQVksSUFBWjtBQUNIOztBQUVEO0FBQ0oscUJBQUssUUFBTDtBQUNJLHdCQUFJLENBQUNsQyxTQUFTQyxRQUFULEVBQW1Ca0MsaUJBQW5CLEVBQXNDakIsUUFBdEMsQ0FBTCxFQUFzRDtBQUNsRGdCLG9DQUFZLElBQVo7QUFDQTtBQUNIOztBQUVEQSxnQ0FBWSxDQUFDYixnQkFBZ0JwQixRQUFoQixFQUEwQnFCLEdBQTFCLEVBQStCQyxHQUEvQixDQUFiO0FBQ0E7QUFDSixxQkFBSyxTQUFMO0FBQ0EscUJBQUssUUFBTDtBQUNBLHFCQUFLLE9BQUw7QUFDSSx3QkFBSSxDQUFDeEIsVUFBVUMsUUFBVixDQUFtQkMsUUFBbkIsRUFBNkIzSCxPQUFPLHlDQUFwQyxFQUErRSxVQUFDMUIsS0FBRCxFQUFXO0FBQUUsK0JBQU9BLFNBQVN3TCxXQUFXeEwsS0FBWCxLQUFxQkEsS0FBckM7QUFBNkMscUJBQXpJLENBQUwsRUFBaUo7QUFDN0lzTCxvQ0FBWSxJQUFaO0FBQ0E7QUFDSDs7QUFFREEsZ0NBQVksQ0FBQ2IsZ0JBQWdCcEIsUUFBaEIsRUFBMEJxQixHQUExQixFQUErQkMsR0FBL0IsQ0FBYjtBQUNBO0FBQ0oscUJBQUssS0FBTDtBQUNJLHdCQUFJLENBQUN2QixTQUFTQyxRQUFULEVBQW1Ca0MsaUJBQW5CLEVBQXNDaEIsU0FBdEMsQ0FBTCxFQUF1RDtBQUNuRGUsb0NBQVksSUFBWjtBQUNBO0FBQ0g7O0FBRURBLGdDQUFZLENBQUNiLGdCQUFnQnBCLFFBQWhCLEVBQTBCcUIsR0FBMUIsRUFBK0JDLEdBQS9CLENBQWI7QUFDQTs7QUFFSixxQkFBSyxNQUFMO0FBQ0ksd0JBQUksQ0FBQ3ZCLFNBQVNDLFFBQVQsRUFBbUJrQyxpQkFBbkIsRUFBc0N0RyxNQUF0QyxDQUFMLEVBQW9EO0FBQ2hEcUcsb0NBQVksSUFBWjtBQUNIOztBQUVEO0FBQ0oscUJBQUssUUFBTDtBQUNJQSxnQ0FBWSxDQUFDVixnQkFBZ0J2QixRQUFoQixFQUEwQnFCLEdBQTFCLEVBQStCQyxHQUEvQixDQUFiOztBQUVBO0FBQ0o7QUFDSSx3QkFBSXpOLFdBQVc0TixvQkFBWCxDQUFKLEVBQXNDO0FBQ2xDUSxvQ0FBWSxDQUFDUixxQkFBcUJ6QixRQUFyQixDQUFiO0FBQ0g7O0FBRUQ7QUF2RFI7O0FBMERBLGdCQUFJaUMsU0FBSixFQUFlO0FBQ1gsdUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxDQUFDQSxTQUFSO0FBQ0g7O0FBRUQsYUFBU0csNEJBQVQsQ0FBc0NYLG9CQUF0QyxFQUE0RDtBQUN4RCxlQUFPLFVBQVVySSxFQUFWLEVBQWM7QUFDakIsZ0JBQUlDLFVBQVVELEtBQUt0RSxFQUFFc0UsR0FBR0UsTUFBTCxDQUFMLEdBQW9CeEUsRUFBRSxJQUFGLENBQWxDO0FBQ0ErTSwwQkFBY3hJLE9BQWQsRUFBdUJvSSxvQkFBdkI7QUFDSCxTQUhEO0FBSUg7O0FBRUQsYUFBU1ksNkJBQVQsQ0FBdUNoSyxJQUF2QyxFQUE2Q3JFLEdBQTdDLEVBQWtEcU0sU0FBbEQsRUFBNkRpQyxXQUE3RCxFQUEwRTtBQUN0RSxZQUFJQyxRQUFRLENBQVo7O0FBRUEsaUJBQVNDLG1CQUFULENBQTZCcEosRUFBN0IsRUFBaUM7QUFDN0IsZ0JBQUlxSixTQUFTM04sRUFBRSxJQUFGLENBQWI7QUFDQSxnQkFBSXVNLE1BQU1oQixhQUFhb0MsT0FBTzlLLElBQVAsQ0FBWSxVQUFaLENBQXZCO0FBQ0EsZ0JBQUk0SyxLQUFKLEVBQVc7QUFDUEcsNkJBQWFILEtBQWI7QUFDSDs7QUFFRCxnQkFBSVgsT0FBTyxLQUFYO0FBQ0EsZ0JBQUlQLE9BQU8sQ0FBQ3ZCLFVBQVVDLFFBQVYsQ0FBbUIwQyxNQUFuQixpQ0FBd0RwQixHQUF4RCx3QkFBZ0YsVUFBVWhDLEdBQVYsRUFBZTtBQUFFLHVCQUFPUyxVQUFVTSxnQkFBVixDQUEyQmYsR0FBM0IsRUFBZ0MsQ0FBQ2dDLEdBQWpDLENBQVA7QUFBK0MsYUFBaEosQ0FBWixFQUErSjtBQUMzSk8sdUJBQU8sSUFBUDtBQUNIOztBQUVELGdCQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLG9CQUFJakwsUUFBUThMLE9BQU9wRCxHQUFQLEVBQVo7QUFDQWtELHdCQUFRcEgsV0FBVyxZQUFZO0FBQzNCLHdCQUFJakgsT0FBTyxFQUFYO0FBQ0FBLHlCQUFLbUUsSUFBTCxJQUFhMUIsS0FBYjtBQUNBLHdCQUFJMkwsV0FBSixFQUFpQjtBQUNiLDZCQUFLLElBQUkxSyxHQUFULElBQWdCMEssV0FBaEIsRUFBNkI7QUFDekJwTyxpQ0FBSzBELEdBQUwsSUFBWTBLLFlBQVkxSyxHQUFaLENBQVo7QUFDSDtBQUNKOztBQUVEbEUsK0JBQUtnQyxRQUFMLENBQWMsRUFBRTFCLEtBQUtBLEdBQVAsRUFBWVMsTUFBTVAsSUFBbEIsRUFBZCxFQUF3Q2UsSUFBeEMsQ0FBNkMsVUFBVUMsR0FBVixFQUFlO0FBQ3hENEssa0NBQVVDLFFBQVYsQ0FBbUIwQyxNQUFuQixFQUEyQnZOLElBQUl5RixPQUFKLElBQWUscUNBQTFDLEVBQWlGLFVBQVUwRSxHQUFWLEVBQWU7QUFBRSxtQ0FBT25LLElBQUlSLE9BQVg7QUFBcUIseUJBQXZIO0FBQ0gscUJBRkQsRUFFR2hCLFdBQUtzQyxZQUZSO0FBR0gsaUJBWk8sRUFZTCxHQVpLLENBQVI7QUFhQXlNLHVCQUFPdEMsSUFBUCxDQUFZLE1BQVosRUFBb0I1SyxJQUFwQixDQUF5QixFQUF6QjtBQUNIO0FBQ0o7O0FBRUQsZUFBT2lOLG1CQUFQO0FBQ0g7O0FBRUQsYUFBU0csV0FBVCxDQUFxQkEsV0FBckIsRUFBa0NDLFNBQWxDLEVBQTZDQyxVQUE3QyxFQUF5RDtBQUNyRCxZQUFJcEMsVUFBVSxJQUFJbEQsTUFBSixDQUFXLGNBQVgsQ0FBZDtBQUNBLFlBQUksQ0FBQ3dDLFNBQVM2QyxTQUFULEVBQW9CLDhFQUFwQixFQUFvRyxVQUFDRSxDQUFEO0FBQUEsbUJBQU85QixlQUFlOEIsQ0FBZixFQUFrQnJDLE9BQWxCLENBQVA7QUFBQSxTQUFwRyxDQUFMLEVBQTZJO0FBQ3pJb0MsdUJBQVdsTCxJQUFYLENBQWdCLFVBQWhCLEVBQTRCLElBQTVCO0FBQ0E7QUFDSDs7QUFFRGpFLG1CQUFLOEIsT0FBTCxDQUFhLEVBQUV4QixLQUFLMk8sV0FBUCxFQUFiLEVBQW1DMU4sSUFBbkMsQ0FBd0MsVUFBVUMsR0FBVixFQUFlO0FBQ25ELGdCQUFJNkssU0FBUzZDLFNBQVQsRUFBb0IsbUNBQXBCLEVBQXlELFVBQUNFLENBQUQ7QUFBQSx1QkFBTTVOLElBQUlSLE9BQVY7QUFBQSxhQUF6RCxDQUFKLEVBQWlGO0FBQzdFbU8sMkJBQVdsTCxJQUFYLENBQWdCLFVBQWhCLEVBQTRCLEtBQTVCO0FBQ0gsYUFGRCxNQUVPO0FBQ0hrTCwyQkFBV2xMLElBQVgsQ0FBZ0IsVUFBaEIsRUFBNEIsSUFBNUI7QUFDSDtBQUNKLFNBTkQ7QUFPSDs7QUFFRCxhQUFTb0wsaUJBQVQsQ0FBMkIxSyxJQUEzQixFQUFpQzJLLGVBQWpDLEVBQWtEO0FBQzlDLFlBQUlDLFVBQVUsQ0FBZDtBQUNBLFlBQUlDLFlBQVlwTyxFQUFFLE1BQU1rTyxlQUFSLENBQWhCO0FBQ0EsYUFBSzNLLElBQUwsSUFBYTZLLFNBQWIsRUFBd0I7QUFDcEIsZ0JBQUlBLFVBQVU3SyxJQUFWLEVBQWdCMUIsS0FBaEIsS0FBMEIwQixJQUE5QixFQUFvQztBQUNoQzRLO0FBQ0g7QUFDSjs7QUFFRCxZQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDYixtQkFBTyxLQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsV0FBTztBQUNIbEQsMEJBREc7QUFFSFMsc0NBRkc7QUFHSEosMENBSEc7QUFJSFUsb0NBSkc7QUFLSEQsa0RBTEc7QUFNSEQsb0NBTkc7QUFPSEssMEJBUEc7QUFRSEYsd0NBUkc7QUFTSEwsOERBVEc7QUFVSDdNLDhCQVZHO0FBV0grSCxzQkFYRztBQVlINEYsc0RBWkc7QUFhSE4sNEJBYkc7QUFjSG1CLG9FQWRHO0FBZUhSLG9DQWZHO0FBZ0JITyxrRUFoQkc7QUFpQkhXLDRDQWpCRztBQWtCSEo7QUFsQkcsS0FBUDtBQW9CSCxDQTNWZ0IsRUFBakI7O1FBNlZTN0MsUyxHQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eXBCQy9WVDs7Ozs7Ozs7O1FBZ0JnQnFELFcsR0FBQUEsVzs7QUFQaEI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRU8sU0FBU0EsV0FBVCxDQUFxQjVKLFVBQXJCLEVBQWlDNkosS0FBakMsRUFBd0NDLGVBQXhDLEVBQXlEQyxRQUF6RCxFQUFtRUMsTUFBbkUsRUFBMkVDLGlCQUEzRSxFQUE4RjtBQUNqRyxRQUFJQyxVQUFVO0FBQ1Ysa0JBQVUsRUFBRUMsTUFBTUMsaUJBQVIsRUFBMkJDLFVBQVVDLFNBQXJDLEVBQWdEMU8sUUFBUSxZQUF4RCxFQURBO0FBRVYsa0JBQVUsRUFBRXVPLE1BQU1JLGlCQUFSLEVBQTJCRixVQUFVQyxTQUFyQyxFQUFnRDFPLFFBQVEsWUFBeEQsRUFGQTtBQUdWLG9CQUFZLEVBQUV1TyxNQUFNSyxtQkFBUixFQUE2QkgsVUFBVUMsU0FBdkMsRUFBa0QxTyxRQUFRLFlBQTFEOztBQUhGLEtBQWQ7O0FBT0EsUUFBSTZPLE9BQU9sUCxFQUFFLFdBQUYsRUFBZSxFQUFFa0UsT0FBTywrQkFBVCxFQUFmLEVBQTJEUyxRQUEzRCxDQUFvRUYsVUFBcEUsQ0FBWDtBQUNBLFFBQUkwSyxjQUFjblAsRUFBRSxhQUFGLEVBQWlCLEVBQUVrRSxPQUFPLDBCQUFULEVBQWpCLEVBQXdEUyxRQUF4RCxDQUFpRUYsVUFBakUsQ0FBbEI7O0FBVGlHO0FBQUE7QUFBQTs7QUFBQTtBQVdqRyw2QkFBZ0I2SixLQUFoQiw4SEFBdUI7QUFBQSxnQkFBZHhMLEdBQWM7O0FBQ25CLGdCQUFJNkwsUUFBUTdMLEdBQVIsQ0FBSixFQUFrQjs7QUFFZCxvQkFBSXNNLFVBQVVwUCxFQUFFLFdBQUYsRUFBZTtBQUN6QmtFLDZCQUR5QjtBQUV6QmpDLDBFQUFvRGEsR0FBcEQsVUFBNERBLEdBQTVELFNBRnlCO0FBR3pCdU0sMEJBQU07QUFIbUIsaUJBQWYsQ0FBZDs7QUFNQUgscUJBQUtsTCxNQUFMLENBQVlvTCxPQUFaOztBQUVBLG9CQUFJRSxXQUFXdFAsRUFBRSxhQUFGLEVBQWlCO0FBQzVCa0Usb0VBQThDcEI7QUFEbEIsaUJBQWpCLENBQWY7O0FBSUFxTSw0QkFBWW5MLE1BQVosQ0FBbUJzTCxRQUFuQjs7QUFFQVgsd0JBQVE3TCxHQUFSLEVBQWFnTSxRQUFiLEdBQXdCSCxRQUFRN0wsR0FBUixFQUFhOEwsSUFBYixDQUFrQkgsTUFBbEIsRUFBMEJhLFFBQTFCLEVBQW9DZCxRQUFwQyxFQUE4Q0QsZUFBOUMsRUFBK0RHLGlCQUEvRCxDQUF4QjtBQUNBQyx3QkFBUTdMLEdBQVIsRUFBYXpDLE1BQWIsR0FBc0IsUUFBdEI7QUFDSDtBQUNKO0FBL0JnRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlDakdrUCxlQUFXLEVBQUUvSyxRQUFRMEssS0FBS3RNLElBQUwsQ0FBVSx1QkFBVixFQUFtQzRNLEtBQW5DLEVBQVYsRUFBWDtBQUNBQzs7QUFFQSxhQUFTQSxVQUFULEdBQXNCO0FBQ2xCLFlBQUlDLGtCQUFrQjFQLEVBQUUsc0JBQUYsQ0FBdEI7QUFDQWtQLGFBQUs3SyxFQUFMLENBQVEsT0FBUixFQUFpQix1QkFBakIsRUFBMENrTCxVQUExQztBQUNBRyx3QkFBZ0JyTCxFQUFoQixDQUFtQixPQUFuQixFQUE0QjRLLG1CQUE1QjtBQUNBVCxpQkFBU25LLEVBQVQsQ0FBWSx1QkFBWixFQUFxQ2tMLFdBQVdJLElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0IsRUFBRW5MLFFBQVEwSyxLQUFLdE0sSUFBTCxDQUFVLHVCQUFWLEVBQW1DNE0sS0FBbkMsRUFBVixFQUF0QixDQUFyQyxFQUFvSCxrQkFBcEgsRUFBd0ksYUFBeEk7QUFDSDs7QUFFRCxhQUFTSSxPQUFULEdBQW1CO0FBQ2ZWLGFBQUtXLEdBQUwsQ0FBUyxPQUFULEVBQWtCLHVCQUFsQixFQUEyQ04sVUFBM0M7QUFDQWYsaUJBQVNxQixHQUFULENBQWEsdUJBQWIsRUFBc0Msa0JBQXRDLEVBQTBELGFBQTFEOztBQUVBLGFBQUssSUFBSS9NLEdBQVQsSUFBZ0I2TCxPQUFoQixFQUF5QjtBQUNyQixnQkFBSUEsUUFBUTdMLEdBQVIsRUFBYXpDLE1BQWIsS0FBd0IsUUFBNUIsRUFBc0M7QUFDbENzTyx3QkFBUTdMLEdBQVIsRUFBYWdNLFFBQWIsQ0FBc0JjLE9BQXRCO0FBQ0FqQix3QkFBUTdMLEdBQVIsRUFBYWdNLFFBQWIsR0FBd0JDLFNBQXhCO0FBQ0FKLHdCQUFRN0wsR0FBUixFQUFhekMsTUFBYixLQUF3QixZQUF4QjtBQUNIO0FBQ0o7O0FBRURvRSxtQkFBV3hDLElBQVgsQ0FBZ0IsRUFBaEI7QUFDSDs7QUFFRCxhQUFTc04sVUFBVCxDQUFvQmpMLEVBQXBCLEVBQXdCO0FBQ3BCLFlBQUlDLFVBQVV2RSxFQUFFc0UsR0FBR0UsTUFBTCxDQUFkOztBQUVBMEssYUFBS3RNLElBQUwsQ0FBVSw4QkFBVixFQUEwQ2lJLElBQTFDLENBQStDLFVBQVVDLENBQVYsRUFBYUMsT0FBYixFQUFzQjtBQUNqRSxnQkFBSUcsV0FBV2xMLEVBQUUrSyxPQUFGLENBQWY7QUFDQUcscUJBQVMxRixXQUFULENBQXFCLFFBQXJCO0FBQ0EwRixxQkFBUzRFLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0J0SyxXQUF0QixDQUFrQyxRQUFsQztBQUNILFNBSkQ7O0FBTUEySixvQkFBWXZNLElBQVosQ0FBaUIsZ0NBQWpCLEVBQW1EaUksSUFBbkQsQ0FBd0QsVUFBVUMsQ0FBVixFQUFhQyxPQUFiLEVBQXNCO0FBQzFFL0ssY0FBRStLLE9BQUYsRUFBV3ZGLFdBQVgsQ0FBdUIsUUFBdkI7QUFDSCxTQUZEOztBQUlBakIsZ0JBQVFVLFFBQVIsQ0FBaUIsUUFBakI7QUFDQVYsZ0JBQVF1TCxNQUFSLENBQWUsSUFBZixFQUFxQjdLLFFBQXJCLENBQThCLFFBQTlCOztBQUVBa0ssb0JBQVl2TSxJQUFaLDJDQUF5RDJCLFFBQVExQixJQUFSLENBQWEsV0FBYixDQUF6RCxFQUFzRm9DLFFBQXRGLENBQStGLFFBQS9GO0FBQ0g7O0FBRUQsV0FBTztBQUNIMks7QUFERyxLQUFQO0FBR0g7O0FBRUQsU0FBU2YsaUJBQVQsQ0FBMkJKLE1BQTNCLEVBQW1DaEssVUFBbkMsRUFBK0MrSixRQUEvQyxFQUF5RHVCLFNBQXpELEVBQW9FQyxVQUFwRSxFQUFnRjtBQUM1RSxRQUFJQyxvQkFBSjtBQUNBLFFBQUlDLGtCQUFKO0FBQ0EsUUFBSUMsd0JBQUo7QUFDQSxRQUFJQyxtQkFBSjtBQUNBLFFBQUlDLG1CQUFKO0FBQ0EsUUFBSUMsa0JBQUo7QUFDQSxRQUFJQyxtQkFBSjs7QUFFQSxRQUFJQyxnQkFBZ0IsRUFBcEI7QUFDQSxRQUFJQyxpQkFBaUIsRUFBckI7QUFDQSxRQUFJQyxRQUFRLEVBQVo7QUFDQSxRQUFJQyxnQkFBZ0IsRUFBcEI7QUFDQSxRQUFJMU4saUJBQWlCLEVBQXJCO0FBQ0EsUUFBSUMsWUFBWSxDQUFDLEVBQUVLLE1BQU0sYUFBUixFQUF1QnJFLEtBQUssNkJBQTVCLEVBQUQsQ0FBaEI7QUFDQSxRQUFJMFIsa0JBQUo7O0FBRUFuQyxXQUFPbE4sR0FBUCxDQUFXLCtCQUFYO0FBQ0EsUUFBSXJDLHNEQUFvRDhRLFVBQXBELG1CQUE0RUQsU0FBaEY7O0FBRUFuUixlQUFLOEIsT0FBTCxDQUFhLEVBQUV4QixLQUFLQSxHQUFQLEVBQVl5QixjQUFjLElBQTFCLEVBQWIsRUFBK0NSLElBQS9DLENBQW9ELFVBQVVDLEdBQVYsRUFBZTtBQUMvRHFFLG1CQUFXeEMsSUFBWCxDQUFnQjdCLEdBQWhCOztBQUVBNlAsc0JBQWN4TCxXQUFXN0IsSUFBWCxDQUFnQixjQUFoQixDQUFkO0FBQ0FzTixvQkFBWXpMLFdBQVc3QixJQUFYLENBQWdCLG1CQUFoQixDQUFaO0FBQ0F1TiwwQkFBa0IxTCxXQUFXN0IsSUFBWCxDQUFnQixrQkFBaEIsQ0FBbEI7QUFDQXdOLHFCQUFhM0wsV0FBVzdCLElBQVgsQ0FBZ0Isc0JBQWhCLENBQWI7QUFDQXlOLHFCQUFhNUwsV0FBVzdCLElBQVgsQ0FBZ0Isb0JBQWhCLENBQWI7QUFDQTBOLG9CQUFZN0wsV0FBVzdCLElBQVgsQ0FBZ0IsWUFBaEIsQ0FBWjtBQUNBMk4scUJBQWE5TCxXQUFXN0IsSUFBWCxDQUFnQixvQkFBaEIsQ0FBYjs7QUFFQSxlQUFPLHlDQUF3QkssY0FBeEIsRUFBd0NDLFNBQXhDLENBQVA7QUFDSCxLQVpELEVBWUd0RSxXQUFLc0MsWUFaUixFQVlzQmYsSUFadEIsQ0FZMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3RDcVA7QUFDSCxLQWRELEVBY0c3USxXQUFLc0MsWUFkUjs7QUFnQkEsYUFBU3VPLFVBQVQsR0FBc0I7QUFDbEJXLG1CQUFXL0wsRUFBWCxDQUFjLFFBQWQsRUFBd0J3TSxnQkFBeEI7QUFDQVosb0JBQVk1TCxFQUFaLENBQWUsUUFBZixFQUF5QnlNLFdBQXpCO0FBQ0FULG1CQUFXaE0sRUFBWCxDQUFjLE9BQWQsRUFBdUIwTSxXQUF2QjtBQUNBdE0sbUJBQVdKLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQXZCLEVBQXFDMk0sZUFBckM7QUFDQVYsa0JBQVVqTSxFQUFWLENBQWEsVUFBYixFQUF5QjRNLFFBQXpCO0FBQ0FYLGtCQUFVak0sRUFBVixDQUFhLFdBQWIsRUFBMEI2TSxTQUExQjtBQUNBWixrQkFBVWpNLEVBQVYsQ0FBYSxXQUFiLEVBQTBCOE0sU0FBMUI7QUFDQWIsa0JBQVVqTSxFQUFWLENBQWEsTUFBYixFQUFxQitNLElBQXJCO0FBQ0E1QyxpQkFBU25LLEVBQVQsQ0FBWSxtQkFBWixFQUFpQ2dOLGFBQWpDLEVBQWdELGVBQWhELEVBQWlFLG1CQUFqRTtBQUNBN0MsaUJBQVNuSyxFQUFULENBQVksdUJBQVosRUFBcUNpTixVQUFyQyxFQUFpRCxrQkFBakQsRUFBcUUsbUJBQXJFO0FBQ0E5QyxpQkFBU25LLEVBQVQsQ0FBWSxrQkFBWixFQUFnQ2tOLE9BQWhDLEVBQXlDLGNBQXpDLEVBQXlELG1CQUF6RDs7QUFFQW5CLG1CQUFXb0IsT0FBWCxDQUFtQixRQUFuQjtBQUNIOztBQUVELGFBQVM1QixPQUFULEdBQW1CO0FBQ2ZRLG1CQUFXUCxHQUFYLENBQWUsUUFBZixFQUF5QmdCLGdCQUF6QjtBQUNBWixvQkFBWUosR0FBWixDQUFnQixRQUFoQixFQUEwQmlCLFdBQTFCO0FBQ0FULG1CQUFXUixHQUFYLENBQWUsT0FBZixFQUF3QmtCLFdBQXhCO0FBQ0F0TSxtQkFBV29MLEdBQVgsQ0FBZSxPQUFmLEVBQXdCLFlBQXhCLEVBQXNDbUIsZUFBdEM7QUFDQVYsa0JBQVVULEdBQVYsQ0FBYyxVQUFkLEVBQTBCb0IsUUFBMUI7QUFDQVgsa0JBQVVULEdBQVYsQ0FBYyxXQUFkLEVBQTJCcUIsU0FBM0I7QUFDQVosa0JBQVVULEdBQVYsQ0FBYyxXQUFkLEVBQTJCc0IsU0FBM0I7QUFDQWIsa0JBQVVqTSxFQUFWLENBQWEsTUFBYixFQUFxQitNLElBQXJCO0FBQ0E1QyxpQkFBU3FCLEdBQVQsQ0FBYSxtQkFBYixFQUFrQyxlQUFsQyxFQUFtRCxtQkFBbkQ7QUFDQXJCLGlCQUFTcUIsR0FBVCxDQUFhLHVCQUFiLEVBQXNDLGtCQUF0QyxFQUEwRCxtQkFBMUQ7QUFDQXJCLGlCQUFTcUIsR0FBVCxDQUFhLGtCQUFiLEVBQWlDLGNBQWpDLEVBQWlELG1CQUFqRDtBQUNIOztBQUVELGFBQVNnQixnQkFBVCxDQUEwQnZNLEVBQTFCLEVBQThCO0FBQzFCeUwsb0JBQVl6TCxHQUFHRSxNQUFILENBQVUzQyxLQUF0QjtBQUNBMFA7O0FBRUEsZUFBTzNTLFdBQUs4QixPQUFMLENBQWEsRUFBRXhCLEtBQUssa0RBQWtENlEsU0FBekQsRUFBYixFQUFtRjVQLElBQW5GLENBQXdGLFVBQVVDLEdBQVYsRUFBZTtBQUMxRyxnQkFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQkEsZUFBZXFSLE1BQTlDLEVBQXNEO0FBQ2xEclIsc0JBQU1TLEtBQUs2USxLQUFMLENBQVd0UixHQUFYLENBQU47QUFDSDs7QUFFRCxnQkFBSUEsSUFBSVIsT0FBUixFQUFpQjtBQUNicVEsNEJBQVlwTixJQUFaLENBQWlCLFVBQWpCLEVBQTZCLEtBQTdCLEVBQ0tBLElBREwsQ0FDVSxRQURWLEVBQ29CekMsSUFBSXVSLEdBRHhCO0FBRUFyQiwwQkFBVTlLLFdBQVYsQ0FBc0IsVUFBdEI7QUFDQTBLLDBCQUFVelAsSUFBVixDQUFlLHNCQUFzQkwsSUFBSXdSLElBQUosQ0FBU0MsV0FBVCxJQUF3QnpSLElBQUl3UixJQUFKLENBQVNFLFVBQXZELENBQWY7QUFDQXJCLGlDQUFpQmxLLGFBQU1nRCxVQUFOLENBQWlCaEQsYUFBTWdELFVBQU4sQ0FBaUJuSixJQUFJdVIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsRUFBL0IsQ0FBakIsRUFBcUQsR0FBckQsRUFBMEQsR0FBMUQsQ0FBakI7QUFDQW5CLGdDQUFnQnBRLElBQUkyUixNQUFwQjtBQUNILGFBUEQsTUFPTztBQUNIOUIsNEJBQVlwTixJQUFaLENBQWlCLFVBQWpCLEVBQTZCLElBQTdCO0FBQ0F5TiwwQkFBVXJMLFFBQVYsQ0FBbUIsVUFBbkI7QUFDSDtBQUNKLFNBaEJNLEVBZ0JKckcsV0FBS3NDLFlBaEJELENBQVA7QUFpQkg7O0FBRUQsYUFBUzRQLFdBQVQsR0FBdUI7QUFDbkJKLGdCQUFRLEVBQVI7QUFDQVAsd0JBQWdCbE8sSUFBaEIsQ0FBcUIsRUFBckI7QUFDQTBPLHdCQUFnQixFQUFoQjtBQUNBLFlBQUlxQixPQUFPQyxLQUFLUCxLQUFMLENBQVcsSUFBSU8sSUFBSixFQUFYLENBQVg7QUFDQSxZQUFJNU8sV0FBV0osZUFBZSxhQUFmLENBQWY7QUFDQSxhQUFLLElBQUk5QixJQUFJLENBQWIsRUFBZ0JBLElBQUk4TyxZQUFZLENBQVosRUFBZVMsS0FBZixDQUFxQnJQLE1BQXpDLEVBQWlERixHQUFqRCxFQUFzRDtBQUNsRCxnQkFBSStRLGNBQWNqQyxZQUFZLENBQVosRUFBZVMsS0FBZixDQUFxQnZQLENBQXJCLENBQWxCO0FBQ0EsZ0JBQUlnUixTQUFTLElBQUkxSixNQUFKLENBQVdnSSxjQUFYLENBQWI7O0FBRUEsZ0JBQUksQ0FBQzBCLE9BQU9sTCxJQUFQLENBQVlpTCxZQUFZM08sSUFBeEIsQ0FBRCxJQUFrQyxDQUFDNE8sT0FBT2xMLElBQVAsQ0FBWWlMLFlBQVlOLElBQXhCLENBQXZDLEVBQXNFO0FBQ2xFekIsZ0NBQWdCbk0sTUFBaEIsMkNBQStEa08sWUFBWTNPLElBQTNFO0FBQ0E7QUFDSDs7QUFFRCxnQkFBSTZPLFlBQVlwUyxFQUFFLGFBQUYsRUFBaUI7QUFDN0JrRSx1QkFBTyx1Q0FBdUMvQztBQURqQixhQUFqQixDQUFoQjs7QUFJQSxnQkFBSWtSLFdBQVdILFlBQVkzTyxJQUFaLENBQWlCcUQsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEJzTCxZQUFZM08sSUFBWixDQUFpQitPLFdBQWpCLENBQTZCLEdBQTdCLENBQTlCLENBQWY7QUFDQSxnQkFBSUMsVUFBVUwsWUFBWTNPLElBQVosQ0FBaUJxRixPQUFqQixDQUF5QixNQUF6QixFQUFpQyxHQUFqQyxFQUFzQ0EsT0FBdEMsQ0FBOEMsS0FBOUMsRUFBcUQsR0FBckQsRUFBMEQ0QixXQUExRCxFQUFkO0FBQ0EsZ0JBQUlnSSxLQUFLak0sYUFBTU0sSUFBTixFQUFUOztBQUVBdUwsc0JBQVVwTyxNQUFWLENBQWlCWCxTQUFTLEVBQUVvUCxPQUFPRCxFQUFULEVBQWFqUCxNQUFNOE8sUUFBbkIsRUFBNkJLLEtBQUtMLFFBQWxDLEVBQTRDblQsS0FBS3FULE9BQWpELEVBQVQsQ0FBakI7O0FBRUEsZ0JBQUlMLFlBQVlOLElBQVosSUFBb0JNLFlBQVlOLElBQVosQ0FBaUJyUixPQUFqQixDQUF5QixRQUF6QixLQUFzQyxDQUE5RCxFQUFpRTtBQUM3RCxvQkFBSW9TLE9BQU81SixPQUFPNkosR0FBUCxDQUFXQyxlQUFYLENBQTJCWCxXQUEzQixDQUFYO0FBQ0FFLDBCQUFVcE8sTUFBVixnQkFBOEIyTyxJQUE5QjtBQUNILGFBSEQsTUFHTztBQUNIUCwwQkFBVXBPLE1BQVYsQ0FBaUIsZ0RBQWpCO0FBQ0g7O0FBRURtTSw0QkFBZ0JuTSxNQUFoQixDQUF1Qm9PLFNBQXZCO0FBQ0FwQiw0QkFBZ0JvQixVQUFVeFAsSUFBVixDQUFlLFlBQWYsQ0FBaEI7O0FBRUE4TixrQkFBTXROLElBQU4sQ0FBVzhPLFdBQVg7QUFDQXZCLDBCQUFjdk4sSUFBZCxDQUFtQjtBQUNmRyxzQkFBTThPLFdBQVcsR0FBWCxHQUFpQkwsSUFEUjtBQUVmOVMscUJBQUtxVCxVQUFVLEdBQVYsR0FBZ0JQLElBRk47QUFHZlUscUJBQUtMLFFBSFU7QUFJZlMsOEJBQWNaLFlBQVkzTyxJQUpYO0FBS2ZpUDtBQUxlLGFBQW5CO0FBT0g7O0FBRUQsWUFBSTlCLE1BQU1yUCxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEJrUCx1QkFBVy9LLFdBQVgsQ0FBdUIsVUFBdkI7QUFDSDtBQUNKOztBQUVELGFBQVN1TCxXQUFULEdBQXVCO0FBQ25CLFlBQUlnQyxXQUFXLHdCQUFmO0FBQ0EsWUFBSXBDLGNBQWN0UCxNQUFkLEtBQXlCLENBQXpCLElBQThCcVAsTUFBTXJQLE1BQU4sS0FBaUIsQ0FBbkQsRUFBc0Q7QUFDbERtTixxQkFBU3dFLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsRUFBRWhOLFVBQVUrTSxRQUFaLEVBQXNCbE4sU0FBUyw4QkFBL0IsRUFBK0R4RixRQUFRLFNBQXZFLEVBQTNCO0FBQ0E7QUFDSDs7QUFFRCxZQUFJNFMsT0FBTyxFQUFYO0FBQ0EsWUFBSW5HLE9BQU8sS0FBWDtBQUNBckksbUJBQVc3QixJQUFYLENBQWdCLFlBQWhCLEVBQThCaUksSUFBOUIsQ0FBbUMsVUFBVTFKLENBQVYsRUFBYStSLEdBQWIsRUFBa0I7QUFDakQsZ0JBQUloSSxXQUFXbEwsRUFBRWtULEdBQUYsQ0FBZjtBQUNBLGdCQUFJaFUsTUFBTWdNLFNBQVNYLEdBQVQsRUFBVjtBQUNBLGdCQUFJckwsSUFBSW1DLE1BQUosR0FBYSxDQUFqQixFQUFvQjtBQUNoQnlMLHVCQUFPLElBQVA7QUFDSDs7QUFFRCxnQkFBSTBELGFBQUosRUFBbUI7QUFDZnRSLHNCQUFNc1IsZ0JBQWdCLEdBQWhCLEdBQXNCdFIsR0FBNUI7QUFDSDs7QUFFRCxnQkFBSStULEtBQUsxUyxPQUFMLENBQWFyQixHQUFiLElBQW9CLENBQUMsQ0FBckIsSUFBMEI0TixJQUE5QixFQUFvQztBQUNoQzVCLHlCQUFTNUYsR0FBVCxDQUFhLFFBQWIsRUFBdUIsZUFBdkIsRUFBd0M4RCxLQUF4QztBQUNBMEQsdUJBQU8sSUFBUDtBQUNBLHVCQUFPLEtBQVA7QUFDSDs7QUFFRG1HLGlCQUFLN1AsSUFBTCxDQUFVbEUsR0FBVjtBQUNILFNBbEJEOztBQW9CQSxZQUFJNE4sSUFBSixFQUFVO0FBQ04wQixxQkFBU3dFLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsRUFBRWhOLFVBQVUrTSxRQUFaLEVBQXNCbE4sU0FBUyxvREFBL0IsRUFBcUZ4RixRQUFRLFFBQTdGLEVBQTNCO0FBQ0E7QUFDSDs7QUFFRG9FLG1CQUFXN0IsSUFBWCxDQUFnQixhQUFoQixFQUErQmlJLElBQS9CLENBQW9DLFVBQVUxSixDQUFWLEVBQWErUixHQUFiLEVBQWtCO0FBQ2xELGdCQUFJM1AsT0FBT3ZELEVBQUVrVCxHQUFGLEVBQU8zSSxHQUFQLEdBQWE0SSxJQUFiLEVBQVg7O0FBRUEsZ0JBQUk1UCxLQUFLbEMsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCeUwsdUJBQU8sSUFBUDtBQUNBO0FBQ0g7QUFDSixTQVBEOztBQVNBLFlBQUlBLElBQUosRUFBVTtBQUNOMEIscUJBQVN3RSxRQUFULENBQWtCLE9BQWxCLEVBQTJCLEVBQUVoTixVQUFVK00sUUFBWixFQUFzQmxOLFNBQVMsb0NBQS9CLEVBQXFFeEYsUUFBUSxRQUE3RSxFQUEzQjtBQUNBO0FBQ0g7O0FBRUQsZUFBT3pCLFdBQUtnQyxRQUFMLENBQWMsRUFBRTFCLEtBQUssK0JBQVAsRUFBd0NTLE1BQU0sRUFBRXNULFVBQUYsRUFBOUMsRUFBZCxFQUF3RTlTLElBQXhFLENBQTZFLFVBQVVDLEdBQVYsRUFBZTs7QUFFL0YsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYndULGdDQUFnQnpDLGFBQWhCOztBQUVBLG9CQUFJM1AsV0FBVyxJQUFJcVMsUUFBSixFQUFmOztBQUVBMUMsOEJBQWMyQyxPQUFkLENBQXNCLFVBQVV2SSxPQUFWLEVBQW1CO0FBQ3JDL0osNkJBQVNnRCxNQUFULENBQWdCLFdBQWhCLEVBQTZCbkQsS0FBS0MsU0FBTCxDQUFlaUssT0FBZixDQUE3QjtBQUNILGlCQUZEOztBQUlBLHFCQUFLLElBQUk1SixJQUFJLENBQWIsRUFBZ0JBLElBQUl1UCxNQUFNclAsTUFBMUIsRUFBa0NGLEdBQWxDLEVBQXVDO0FBQ25DSCw2QkFBU2dELE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUIwTSxNQUFNdlAsQ0FBTixDQUF6QixFQUFtQ3VQLE1BQU12UCxDQUFOLEVBQVNvQyxJQUE1QztBQUNIOztBQUVEdkMseUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCK0wsU0FBM0I7O0FBRUEsdUJBQU9uUixXQUFLbUMsUUFBTCxDQUFjLEVBQUU3QixLQUFLLDZCQUFQLEVBQXNDOEIsVUFBVUEsUUFBaEQsRUFBZCxDQUFQO0FBRUgsYUFqQkQsTUFpQk87QUFDSHdOLHlCQUFTd0UsUUFBVCxDQUFrQixPQUFsQixFQUEyQixFQUFFaE4sVUFBVStNLFFBQVosRUFBc0JuTixPQUFPLHlCQUE3QixFQUF3REMsU0FBU3pGLElBQUl5RixPQUFyRSxFQUE4RXhGLFFBQVEsUUFBdEYsRUFBM0I7QUFDQSx1QkFBT2QsUUFBUUUsTUFBUixFQUFQO0FBQ0g7QUFDSixTQXZCTSxFQXVCSmIsV0FBS3NDLFlBdkJELEVBdUJlZixJQXZCZixDQXVCb0IsVUFBVUMsR0FBVixFQUFlO0FBQ3RDLGdCQUFJQSxJQUFJUixPQUFSLEVBQWlCOztBQUViNE8seUJBQVN3RSxRQUFULENBQWtCLGVBQWxCLEVBQW1DLEVBQUVPLFNBQVNuVCxJQUFJb1QsR0FBZixFQUFvQnpELFdBQVdBLFNBQS9CLEVBQTBDYSxvQkFBMUMsRUFBbkM7QUFDQXBDLHlCQUFTd0UsUUFBVCxDQUFrQixvQkFBbEIsRUFBd0MsRUFBRU8sU0FBU25ULElBQUlvVCxHQUFmLEVBQW9CQyxVQUFVLFVBQTlCLEVBQTBDMUQsV0FBV0EsU0FBckQsRUFBZ0VhLG9CQUFoRSxFQUF4Qzs7QUFFQVc7QUFDSDtBQUNKLFNBL0JNLEVBK0JKM1MsV0FBS3NDLFlBL0JELENBQVA7QUFnQ0g7O0FBRUQsYUFBU2tTLGVBQVQsQ0FBeUIxQyxLQUF6QixFQUFnQztBQUM1QixhQUFLLElBQUl2UCxJQUFJLENBQWIsRUFBZ0JBLElBQUl1UCxNQUFNclAsTUFBMUIsRUFBa0NGLEdBQWxDLEVBQXVDO0FBQ25DdVAsa0JBQU12UCxDQUFOLEVBQVNvQyxJQUFULEdBQWdCa0IsV0FBVzdCLElBQVgsQ0FBZ0IsaUJBQWlCOE4sTUFBTXZQLENBQU4sRUFBU3FSLEVBQTFDLEVBQThDakksR0FBOUMsRUFBaEI7QUFDQW1HLGtCQUFNdlAsQ0FBTixFQUFTakMsR0FBVCxHQUFldUYsV0FBVzdCLElBQVgsQ0FBZ0IsZ0JBQWdCOE4sTUFBTXZQLENBQU4sRUFBU3FSLEVBQXpDLEVBQTZDakksR0FBN0MsRUFBZjtBQUNBbUcsa0JBQU12UCxDQUFOLEVBQVN1UixHQUFULEdBQWVqTyxXQUFXN0IsSUFBWCxDQUFnQixnQkFBZ0I4TixNQUFNdlAsQ0FBTixFQUFTcVIsRUFBekMsRUFBNkNqSSxHQUE3QyxFQUFmO0FBQ0FtRyxrQkFBTXZQLENBQU4sRUFBU3lRLElBQVQsR0FBZ0JuTixXQUFXN0IsSUFBWCxDQUFnQixvQkFBb0I4TixNQUFNdlAsQ0FBTixFQUFTcVIsRUFBN0MsRUFBaURqSSxHQUFqRCxFQUFoQjtBQUNIO0FBQ0o7O0FBRUQsYUFBU3lHLGVBQVQsQ0FBeUIxTSxFQUF6QixFQUE2QjtBQUN6QixZQUFJd0osWUFBWTlOLEVBQUVzRSxHQUFHRSxNQUFILEdBQVlGLEdBQUdFLE1BQWYsR0FBd0JGLEVBQTFCLENBQWhCO0FBQ0EsWUFBSXBGLE1BQU00TyxVQUFVdkQsR0FBVixFQUFWOztBQUVBLFlBQUksQ0FBQ3JMLEdBQUQsSUFBUUEsSUFBSW1DLE1BQUosR0FBYSxDQUF6QixFQUE0QjtBQUN4QnlNLHNCQUFVeEksR0FBVixDQUFjLFFBQWQsRUFBd0IsZUFBeEI7QUFDSCxTQUZELE1BRU87QUFDSDBGLGlDQUFVNkMsV0FBVix1Q0FBMEQzTyxHQUExRCxnQkFBd0VzUixhQUF4RSxFQUF5RjFDLFNBQXpGLEVBQW9HdUMsVUFBcEc7QUFDSDtBQUNKOztBQUVELGFBQVNnQixhQUFULENBQXVCdEIsU0FBdkIsRUFBa0M7QUFDOUJLLG1CQUFXN0YsR0FBWCxDQUFld0YsVUFBVTJELFdBQVYsRUFBZjtBQUNBdEQsbUJBQVdvQixPQUFYLENBQW1CLFFBQW5CO0FBQ0g7O0FBRUQsYUFBU1AsUUFBVCxDQUFrQjBDLENBQWxCLEVBQXFCO0FBQ2pCQSxVQUFFQyxjQUFGO0FBQ0FELFVBQUVFLGVBQUY7QUFDSDs7QUFFRCxhQUFTM0MsU0FBVCxDQUFtQnlDLENBQW5CLEVBQXNCO0FBQ2xCQSxVQUFFQyxjQUFGO0FBQ0FELFVBQUVFLGVBQUY7QUFDSDs7QUFFRCxhQUFTMUMsU0FBVCxDQUFtQndDLENBQW5CLEVBQXNCO0FBQ2xCO0FBQ0FBLFVBQUVDLGNBQUY7QUFDQUQsVUFBRUUsZUFBRjtBQUNIOztBQUVELGFBQVN6QyxJQUFULENBQWN1QyxDQUFkLEVBQWlCO0FBQ2IsWUFBSTNULEVBQUUsWUFBRixFQUFnQjhULFFBQWhCLENBQXlCLFVBQXpCLENBQUosRUFBMEM7QUFDdEMsbUJBQU8sS0FBUDtBQUNIO0FBQ0QsWUFBSUgsRUFBRUksYUFBRixDQUFnQkMsWUFBcEIsRUFBa0M7QUFDOUIsZ0JBQUlMLEVBQUVJLGFBQUYsQ0FBZ0JDLFlBQWhCLENBQTZCdEQsS0FBN0IsQ0FBbUNyUCxNQUF2QyxFQUErQztBQUMzQ3NTLGtCQUFFQyxjQUFGO0FBQ0FELGtCQUFFRSxlQUFGOztBQUVBLG9CQUFJSSxhQUFhTixFQUFFSSxhQUFGLENBQWdCQyxZQUFoQixDQUE2QnRELEtBQTlDO0FBQ0FULDRCQUFZcE4sSUFBWixDQUFpQixVQUFqQixFQUE2QixLQUE3QjtBQUNBb04sNEJBQVlpRSxJQUFaLENBQWlCLE9BQWpCLEVBQTBCRCxVQUExQjtBQUNBbkQ7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsYUFBU1EsVUFBVCxDQUFvQjNSLElBQXBCLEVBQTBCO0FBQ3RCLFlBQUlBLEtBQUtpUyxJQUFMLEtBQWMsVUFBbEIsRUFBOEI7QUFDMUIzQix3QkFBWXBOLElBQVosQ0FBaUIsVUFBakIsRUFBNkJsRCxLQUFLaVMsSUFBbEM7QUFDSCxTQUZELE1BRU87QUFDSDNCLHdCQUFZa0UsVUFBWixDQUF1QixVQUF2QjtBQUNIOztBQUVEdkQsb0JBQVlqUixLQUFLaVIsU0FBakI7QUFDQVc7QUFDSDs7QUFFRCxhQUFTQSxPQUFULEdBQW1CO0FBQ2ZiLGdCQUFRLEVBQVI7QUFDQUMsd0JBQWdCLEVBQWhCO0FBQ0FWLG9CQUFZMUYsR0FBWixDQUFnQixFQUFoQjtBQUNBNEYsd0JBQWdCbE8sSUFBaEIsQ0FBcUIsRUFBckI7QUFDQXNPLG1CQUFXdEwsUUFBWCxDQUFvQixVQUFwQjtBQUNBakYsVUFBRSx3QkFBRixFQUE0QmlDLElBQTVCLENBQWlDLEVBQWpDO0FBQ0g7O0FBRUQsV0FBTztBQUNIMk47QUFERyxLQUFQO0FBR0g7O0FBRUQsU0FBU1osaUJBQVQsQ0FBMkJQLE1BQTNCLEVBQW1DaEssVUFBbkMsRUFBK0MrSixRQUEvQyxFQUF5RHVCLFNBQXpELEVBQW9FQyxVQUFwRSxFQUFnRjtBQUM1RSxRQUFJRyx3QkFBSjtBQUNBLFFBQUlDLG1CQUFKO0FBQ0EsUUFBSW5OLGlCQUFpQixFQUFyQjtBQUNBLFFBQUlDLFlBQVksQ0FBQyxFQUFFSyxNQUFNLGFBQVIsRUFBdUJyRSxLQUFLLDZCQUE1QixFQUFELENBQWhCO0FBQ0EsUUFBSWtWLE9BQU8sQ0FBWDtBQUNBLFFBQUlDLGlCQUFKO0FBQ0EsUUFBSUMsaUJBQUo7QUFDQSxRQUFJQyxvQkFBSjtBQUNBLFFBQU1DLFdBQVcsQ0FBakI7QUFDQSxRQUFJQyxpQkFBaUIsS0FBckI7QUFDQSxRQUFJQyxtQkFBSjtBQUNBLFFBQUk5RCxrQkFBSjtBQUNBLFFBQUkrRCxnQkFBZ0IsRUFBcEI7O0FBRUFsRyxXQUFPbE4sR0FBUCxDQUFXLG9CQUFYOztBQUVBLFFBQUlyQyxxREFBbUQ2USxTQUF2RDtBQUNBblIsZUFBSzhCLE9BQUwsQ0FBYSxFQUFFeEIsS0FBS0EsR0FBUCxFQUFiLEVBQTJCaUIsSUFBM0IsQ0FBZ0MsVUFBVUMsR0FBVixFQUFlO0FBQzNDcU8sZUFBT2xOLEdBQVAsQ0FBV25CLEdBQVg7QUFDQXFFLG1CQUFXeEMsSUFBWCxDQUFnQjdCLEdBQWhCO0FBQ0ErUCwwQkFBa0IxTCxXQUFXN0IsSUFBWCxDQUFnQixrQkFBaEIsQ0FBbEI7QUFDQXdOLHFCQUFhM0wsV0FBVzdCLElBQVgsQ0FBZ0Isc0JBQWhCLENBQWI7QUFDQXlSLG1CQUFXNVAsV0FBVzdCLElBQVgsQ0FBZ0IsWUFBaEIsQ0FBWDtBQUNBMFIsbUJBQVc3UCxXQUFXN0IsSUFBWCxDQUFnQixnQkFBaEIsQ0FBWDtBQUNBMlIsc0JBQWM5UCxXQUFXN0IsSUFBWCxDQUFnQixjQUFoQixDQUFkO0FBQ0E4UixxQkFBYWpRLFdBQVc3QixJQUFYLENBQWdCLGFBQWhCLENBQWI7O0FBRUEsZUFBTyx5Q0FBd0JLLGNBQXhCLEVBQXdDQyxTQUF4QyxDQUFQO0FBQ0gsS0FYRCxFQVdHL0MsSUFYSCxDQVdRLFVBQVVDLEdBQVYsRUFBZTtBQUNuQnFQO0FBQ0FtRjs7QUFFQW5HLGVBQU9sTixHQUFQLENBQVcsMkJBQVg7QUFDSCxLQWhCRCxFQWdCRzNDLFdBQUtzQyxZQWhCUjs7QUFrQkEsUUFBSTJULFdBQVc3VSxFQUFFLGlCQUFGLENBQWY7QUFDQSxRQUFJOFUsV0FBVzlVLEVBQUUsa0JBQUYsQ0FBZjs7QUFFQSxhQUFTK1UsbUJBQVQsQ0FBNkJwVixJQUE3QixFQUFtQztBQUMvQjhPLGVBQU9sTixHQUFQLENBQVcscUJBQVgsRUFBa0M1QixJQUFsQztBQUNBLFlBQUlxVixrQkFBa0JyVixLQUFLNFQsT0FBM0I7O0FBRUE5RSxlQUFPbE4sR0FBUCxDQUFXeVQsZUFBWDtBQUNBLGFBQUssSUFBSTdULElBQUksQ0FBYixFQUFnQkEsSUFBSTZULGdCQUFnQjNULE1BQXBDLEVBQTRDRixLQUFLLENBQWpELEVBQW9EO0FBQ2hEd1QsMEJBQWNLLGdCQUFnQjdULENBQWhCLENBQWQsSUFBb0M7QUFDaEM4VCxnQ0FBZ0JELGdCQUFnQjdULENBQWhCLENBRGdCO0FBRWhDc1MsMEJBQVU7QUFGc0IsYUFBcEM7QUFJSDs7QUFFRG1CO0FBQ0g7O0FBRUQsYUFBU25GLFVBQVQsR0FBc0I7QUFDbEJoQixlQUFPbE4sR0FBUCxDQUFXLDJCQUFYO0FBQ0E2TyxtQkFBVy9MLEVBQVgsQ0FBYyxRQUFkLEVBQXdCNlEsYUFBeEI7QUFDQWIsaUJBQVNoUSxFQUFULENBQVksT0FBWixFQUFxQjhRLFFBQXJCO0FBQ0FiLGlCQUFTalEsRUFBVCxDQUFZLE9BQVosRUFBcUIrUSxRQUFyQjtBQUNBM1EsbUJBQVdKLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLGtCQUF4QixFQUE0Q2dSLFVBQTVDO0FBQ0E7QUFDQTVRLG1CQUFXSixFQUFYLENBQWMsT0FBZCxFQUF1QixrQkFBdkIsRUFBMkNpUixlQUEzQztBQUNBN1EsbUJBQVdKLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLGlCQUF2QixFQUEwQ2tSLG9CQUExQztBQUNBVixpQkFBU3hRLEVBQVQsQ0FBWSxPQUFaLEVBQXFCbVIsV0FBckI7QUFDQVYsaUJBQVN6USxFQUFULENBQVksT0FBWixFQUFxQm1SLFdBQXJCO0FBQ0FkLG1CQUFXclEsRUFBWCxDQUFjLE9BQWQsRUFBdUJtUixXQUF2QjtBQUNBaEgsaUJBQVNuSyxFQUFULENBQVksbUJBQVosRUFBaUNnTixhQUFqQyxFQUFnRCxlQUFoRCxFQUFpRSxtQkFBakU7QUFDQTdDLGlCQUFTbkssRUFBVCxDQUFZLHVCQUFaLEVBQXFDaU4sVUFBckMsRUFBaUQsa0JBQWpELEVBQXFFLG1CQUFyRTtBQUNBOUMsaUJBQVNuSyxFQUFULENBQVksbUJBQVosRUFBaUNvUixnQkFBakMsRUFBbUQsdUJBQW5ELEVBQTRFLG1CQUE1RTtBQUNBakgsaUJBQVNuSyxFQUFULENBQVksb0JBQVosRUFBa0MwUSxtQkFBbEMsRUFBdUQscUJBQXZELEVBQThFLG1CQUE5RTtBQUVIOztBQUVELGFBQVNuRixPQUFULEdBQW1CO0FBQ2ZuQixlQUFPbE4sR0FBUCxDQUFXLHNCQUFYO0FBQ0E2TyxtQkFBV1AsR0FBWCxDQUFlLFFBQWYsRUFBeUJxRixhQUF6QjtBQUNBelEsbUJBQVdvTCxHQUFYLENBQWUsUUFBZixFQUF5QixrQkFBekIsRUFBNkN3RixVQUE3QztBQUNBO0FBQ0E1USxtQkFBV29MLEdBQVgsQ0FBZSxPQUFmLEVBQXdCLGtCQUF4QixFQUE0Q3lGLGVBQTVDO0FBQ0E3USxtQkFBV29MLEdBQVgsQ0FBZSxPQUFmLEVBQXdCLGlCQUF4QixFQUEyQzBGLG9CQUEzQztBQUNBVixpQkFBU2hGLEdBQVQsQ0FBYSxPQUFiLEVBQXNCMkYsV0FBdEI7QUFDQVYsaUJBQVNqRixHQUFULENBQWEsT0FBYixFQUFzQjJGLFdBQXRCO0FBQ0FkLG1CQUFXN0UsR0FBWCxDQUFlLE9BQWYsRUFBd0IyRixXQUF4QjtBQUNBbkIsaUJBQVN4RSxHQUFULENBQWEsT0FBYixFQUFzQnNGLFFBQXRCO0FBQ0FiLGlCQUFTekUsR0FBVCxDQUFhLE9BQWIsRUFBc0J1RixRQUF0QjtBQUNBNUcsaUJBQVNxQixHQUFULENBQWEsbUJBQWIsRUFBa0MsZUFBbEMsRUFBbUQsbUJBQW5EO0FBQ0FyQixpQkFBU3FCLEdBQVQsQ0FBYSx1QkFBYixFQUFzQyxrQkFBdEMsRUFBMEQsbUJBQTFEO0FBQ0FyQixpQkFBU3FCLEdBQVQsQ0FBYSxtQkFBYixFQUFrQyx1QkFBbEMsRUFBMkQsbUJBQTNEO0FBQ0FyQixpQkFBU3FCLEdBQVQsQ0FBYSxvQkFBYixFQUFtQyxxQkFBbkMsRUFBMEQsbUJBQTFEO0FBQ0g7O0FBRUQsYUFBUytFLFVBQVQsR0FBc0I7QUFDbEJ6RSx3QkFBZ0JsTyxJQUFoQixDQUFxQixtQkFBckI7QUFDQSxZQUFJb0IsV0FBV0osZUFBZSxhQUFmLENBQWY7QUFDQSxZQUFJeVMsWUFBWTFGLGFBQWEsVUFBYixHQUEwQixPQUExQzs7QUFFQSxZQUFJMkYsVUFBVSxFQUFkOztBQUVBLFlBQUk1RixTQUFKLEVBQWU7QUFDWDRGLG9CQUFRdlMsSUFBUixDQUFhO0FBQ1R3Uyw0QkFBWSxDQURIO0FBRVRDLDhCQUFjLFdBRkw7QUFHVGhVLHVCQUFPa087QUFIRSxhQUFiO0FBS0g7O0FBRUQsWUFBSStGLE9BQU8xQixPQUFPSSxRQUFsQjtBQUNBNVYsbUJBQUtnQyxRQUFMLENBQWMsRUFBRTFCLEtBQUssdUJBQVAsRUFBZ0NTLE1BQU0sRUFBRWdXLGdCQUFGLEVBQVdJLE1BQU12QixRQUFqQixFQUEyQnNCLFVBQTNCLEVBQXRDLEVBQWQsRUFBeUYzVixJQUF6RixDQUE4RixVQUFVQyxHQUFWLEVBQWU7QUFDekcsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYnVRLGdDQUFnQmxPLElBQWhCLENBQXFCLEVBQXJCO0FBQ0FqQyxrQkFBRUksSUFBSTRWLEtBQU4sRUFBYW5MLElBQWIsQ0FBa0IsVUFBVUMsQ0FBVixFQUFhQyxPQUFiLEVBQXNCO0FBQ3BDLHdCQUFJLENBQUNBLFFBQVE2RyxJQUFULEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCekIsd0NBQWdCbk0sTUFBaEIsQ0FBdUJYLFNBQVM7QUFDNUJ1QyxtQ0FBT21GLFFBQVFuRixLQURhO0FBRTVCNE0sZ0NBQUl6SCxRQUFReUgsRUFGZ0I7QUFHNUJ0VCxpQ0FBSzZMLFFBQVE3TCxHQUhlO0FBSTVCK1csd0NBQVlsTCxRQUFRa0wsVUFKUTtBQUs1QlA7QUFMNEIseUJBQVQsQ0FBdkI7QUFPSDtBQUNKLGlCQVZEOztBQVlBLG9CQUFJdEIsU0FBUyxDQUFiLEVBQWdCO0FBQ1pFLDZCQUFTelIsSUFBVCxDQUFjLFVBQWQsRUFBMEIsSUFBMUIsRUFBZ0NzQixJQUFoQztBQUNILGlCQUZELE1BRU87QUFDSG1RLDZCQUFTelIsSUFBVCxDQUFjLFVBQWQsRUFBMEIsS0FBMUIsRUFBaUNjLElBQWpDO0FBQ0g7O0FBRUQ4USxpQ0FBaUJyVSxJQUFJcVUsY0FBckI7QUFDQSxvQkFBSSxDQUFDclUsSUFBSXFVLGNBQVQsRUFBeUI7QUFDckJKLDZCQUFTeFIsSUFBVCxDQUFjLFVBQWQsRUFBMEIsSUFBMUIsRUFBZ0NzQixJQUFoQztBQUNILGlCQUZELE1BRU87QUFDSGtRLDZCQUFTeFIsSUFBVCxDQUFjLFVBQWQsRUFBMEIsS0FBMUIsRUFBaUNjLElBQWpDO0FBQ0g7O0FBRUQ0USw0QkFBWTlULElBQVosQ0FBb0IyVCxPQUFPLENBQTNCLFNBQWdDM04sS0FBSytGLEdBQUwsQ0FBUy9GLEtBQUt5UCxJQUFMLENBQVU5VixJQUFJK1YsS0FBSixHQUFZM0IsUUFBdEIsQ0FBVCxFQUEwQyxDQUExQyxDQUFoQztBQUNBL0YsdUJBQU9sTixHQUFQLENBQVcsaUJBQVg7O0FBRUE2VTtBQUNIO0FBQ0osU0FqQ0QsRUFpQ0d4WCxXQUFLc0MsWUFqQ1I7QUFrQ0g7O0FBRUQsYUFBU2lVLFFBQVQsR0FBb0I7QUFDaEIsWUFBSSxDQUFDVixjQUFMLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBRURMLGdCQUFRLENBQVI7QUFDQVE7QUFDSDs7QUFFRCxhQUFTUSxRQUFULEdBQW9CO0FBQ2hCLFlBQUloQixRQUFRLENBQVosRUFBZTtBQUNYO0FBQ0g7O0FBRURBLGdCQUFRLENBQVI7QUFDQVE7QUFDSDs7QUFFRCxhQUFTTSxhQUFULENBQXVCNVEsRUFBdkIsRUFBMkI7QUFDdkJ5TCxvQkFBWXpMLEdBQUdFLE1BQUgsQ0FBVTNDLEtBQXRCO0FBQ0ErUztBQUNIOztBQUVELGFBQVNTLFVBQVQsR0FBc0I7QUFDbEIsWUFBSWdCLFVBQVVyVyxFQUFFLElBQUYsQ0FBZDtBQUNBLFlBQUlzVyxhQUFhRCxRQUFROUwsR0FBUixFQUFqQjtBQUNBLFlBQUlpSSxLQUFLNkQsUUFBUXhULElBQVIsQ0FBYSxTQUFiLENBQVQ7QUFDQSxZQUFJNFEsV0FBVzRDLFFBQVF6VCxJQUFSLENBQWEsV0FBYixFQUEwQkMsSUFBMUIsQ0FBK0IsZUFBL0IsQ0FBZjs7QUFFQThSLHNCQUFjbkMsRUFBZCxJQUFvQjtBQUNoQnlDLDRCQUFnQnFCLFVBREE7QUFFaEI3QyxzQkFBVUE7QUFGTSxTQUFwQjtBQUlIOztBQUVELGFBQVM2QixlQUFULENBQXlCaFIsRUFBekIsRUFBNkI7QUFDekIsWUFBSWlTLFlBQVl2VyxFQUFFLElBQUYsRUFBUThQLE1BQVIsR0FBaUJsTixJQUFqQixDQUFzQix5QkFBdEIsRUFBaURBLElBQWpELENBQXNELGlCQUF0RCxDQUFoQjs7QUFFQSxZQUFJMlQsVUFBVXJDLElBQVYsQ0FBZSxTQUFmLE1BQThCLElBQWxDLEVBQXdDO0FBQ3BDcUMsc0JBQVVyQyxJQUFWLENBQWUsU0FBZixFQUEwQixLQUExQjtBQUNILFNBRkQsTUFFTztBQUNIcUMsc0JBQVVyQyxJQUFWLENBQWUsU0FBZixFQUEwQixJQUExQjtBQUVIOztBQUVELFlBQUkxQixLQUFLK0QsVUFBVTFULElBQVYsQ0FBZSxTQUFmLENBQVQ7O0FBRUEsWUFBSTBULFVBQVUzTCxFQUFWLENBQWEsVUFBYixDQUFKLEVBQThCO0FBQzFCLGdCQUFJMEwsYUFBYTlELEVBQWpCO0FBQ0EsZ0JBQUlpQixXQUFXLFVBQWY7QUFDQSxnQkFBSThDLFVBQVUxVCxJQUFWLENBQWUsTUFBZixNQUEyQixPQUEvQixFQUF3QztBQUNwQzhSLGdDQUFnQixFQUFoQjtBQUNIOztBQUVELGdCQUFJNkIsVUFBVUQsVUFBVUUsT0FBVixDQUFrQixtQkFBbEIsRUFBdUM3VCxJQUF2QyxDQUE0QyxrQkFBNUMsQ0FBZDtBQUNBLGdCQUFJNFQsUUFBUW5WLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJpViw2QkFBYUUsUUFBUWpNLEdBQVIsTUFBaUIrTCxVQUE5QjtBQUNBN0MsMkJBQVcrQyxRQUFRNVQsSUFBUixDQUFhLFdBQWIsRUFBMEJDLElBQTFCLENBQStCLGVBQS9CLEtBQW1ENFEsUUFBOUQ7QUFDSDs7QUFFRGtCLDBCQUFjbkMsRUFBZCxJQUFvQjtBQUNoQnlDLGdDQUFnQnFCLFVBREE7QUFFaEI3QywwQkFBVUE7QUFGTSxhQUFwQjtBQUtILFNBbEJELE1Ba0JPO0FBQ0gsbUJBQU9rQixjQUFjbkMsRUFBZCxDQUFQO0FBQ0g7O0FBRURrRTtBQUNIOztBQUVELGFBQVNsQixXQUFULEdBQXVCO0FBQ25CLFlBQUltQix5QkFBeUI5VixLQUFLQyxTQUFMLENBQWU2VCxhQUFmLENBQTdCO0FBQ0EsWUFBSUssa0JBQWtCLEVBQXRCOztBQUVBLGFBQUssSUFBTWxTLEdBQVgsSUFBa0I2UixhQUFsQixFQUFpQztBQUM3QkssNEJBQWdCNVIsSUFBaEIsQ0FBcUJ1UixjQUFjN1IsR0FBZCxFQUFtQm1TLGNBQXhDO0FBQ0g7O0FBRURqVixVQUFFLGlCQUFGLEVBQXFCNkMsSUFBckIsQ0FBMEIscUJBQTFCLEVBQWlEaEMsS0FBS0MsU0FBTCxDQUFlNlYsc0JBQWYsQ0FBakQ7QUFDQTNXLFVBQUUsUUFBRixFQUFZdUssR0FBWixDQUFnQnlLLGVBQWhCOztBQUVBeEcsaUJBQVN3RSxRQUFULENBQWtCLGVBQWxCLEVBQW1DLEVBQUVPLFNBQVN5QixlQUFYLEVBQTRCMkIsd0JBQXdCQSxzQkFBcEQsRUFBNEU1RyxXQUFXQSxTQUF2RixFQUFrR2Esb0JBQWxHLEVBQW5DO0FBQ0g7O0FBRUQsYUFBUzZFLGdCQUFULENBQTBCbUIsUUFBMUIsRUFBb0M7QUFDaENqQyx3QkFBZ0I5VCxLQUFLNlEsS0FBTCxDQUFXN1EsS0FBS0MsU0FBTCxDQUFlOFYsUUFBZixDQUFYLEtBQXdDLEVBQXhEO0FBQ0FoQztBQUNIOztBQUdELGFBQVM4QixZQUFULEdBQXdCO0FBQ3BCMVcsVUFBRSx5QkFBRixFQUE2QjZLLElBQTdCLENBQWtDLFVBQVVDLENBQVYsRUFBYUMsT0FBYixFQUFzQjtBQUNwRCxnQkFBSThMLFlBQVk3VyxFQUFFK0ssT0FBRixDQUFoQjtBQUNBLGdCQUFJOEwsVUFBVWpNLEVBQVYsQ0FBYSxVQUFiLENBQUosRUFBOEI7QUFDMUJpTSwwQkFBVUosT0FBVixDQUFrQixtQkFBbEIsRUFBdUN4UixRQUF2QyxDQUFnRCxVQUFoRDtBQUNILGFBRkQsTUFFTztBQUNINFIsMEJBQVVKLE9BQVYsQ0FBa0IsbUJBQWxCLEVBQXVDalIsV0FBdkMsQ0FBbUQsVUFBbkQ7QUFDSDtBQUNKLFNBUEQ7QUFRSDs7QUFFRCxhQUFTNkwsYUFBVCxDQUF1QnRCLFNBQXZCLEVBQWtDO0FBQzlCSyxtQkFBVzdGLEdBQVgsQ0FBZXdGLFVBQVUyRCxXQUFWLEVBQWY7QUFDQXRELG1CQUFXb0IsT0FBWCxDQUFtQixRQUFuQjtBQUNIOztBQUVELGFBQVNGLFVBQVQsQ0FBb0IzUixJQUFwQixFQUEwQjtBQUN0QnFRLHFCQUFhclEsS0FBS2lTLElBQUwsS0FBYyxVQUEzQjtBQUNBaEIsb0JBQVlqUixLQUFLaVIsU0FBakI7QUFDQXdELGVBQU8sQ0FBUDtBQUNBUTtBQUNIOztBQUdELGFBQVN3QixpQkFBVCxHQUE2QjtBQUN6QixZQUFJTyx5QkFBeUJoQyxhQUE3QjtBQUNBLFlBQUltQyxjQUFjLEVBQWxCOztBQUZ5QjtBQUFBO0FBQUE7O0FBQUE7QUFJekIsa0NBQTJCQyxPQUFPQyxPQUFQLENBQWVMLHNCQUFmLENBQTNCLG1JQUFtRTtBQUFBOztBQUFBOztBQUFBLG9CQUF2RDdULEdBQXVEO0FBQUEsb0JBQWxEakIsS0FBa0Q7O0FBQy9EaVYsNEJBQVkxVCxJQUFaLENBQWlCTixHQUFqQjtBQUNIO0FBTndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFTckIsZ0JBQUltVSxrQkFBa0JILFlBQVkzVixDQUFaLENBQXRCOztBQUVBbkIsY0FBRSx5QkFBRixFQUE2QjZLLElBQTdCLENBQWtDLFVBQVVDLENBQVYsRUFBYUMsT0FBYixFQUFzQjtBQUNwRCxvQkFBSThMLFlBQVk3VyxFQUFFLElBQUYsQ0FBaEI7QUFDQSxvQkFBSXFTLFdBQVdzRSx1QkFBdUJNLGVBQXZCLEVBQXdDaEMsY0FBdkQ7O0FBRUE0QiwwQkFBVWhVLElBQVYsQ0FBZSxhQUFmLEVBQThCd1AsUUFBOUI7QUFDQSxvQkFBSTZFLG9CQUFvQkwsVUFBVS9HLE1BQVYsR0FBbUJBLE1BQW5CLEdBQTRCbE4sSUFBNUIsQ0FBaUMsa0JBQWpDLENBQXhCOztBQUVBLG9CQUFJaVUsVUFBVWhVLElBQVYsQ0FBZSxTQUFmLE1BQThCb1UsZUFBbEMsRUFBbUQ7QUFDL0NKLDhCQUFVM0MsSUFBVixDQUFlLFNBQWYsRUFBMEIsSUFBMUI7O0FBRUFnRCxzQ0FBa0IzTSxHQUFsQixDQUFzQjhILFFBQXRCO0FBQ0g7QUFDRHFFO0FBQ0gsYUFiRDtBQVhxQjs7QUFRekIsYUFBSyxJQUFJdlYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMlYsWUFBWXpWLE1BQWhDLEVBQXdDRixHQUF4QyxFQUE2QztBQUFBO0FBaUI1QztBQUNKOztBQUVELGFBQVNvVSxvQkFBVCxDQUE4QmpSLEVBQTlCLEVBQWtDO0FBQzlCLFlBQUlpUyxZQUFZdlcsRUFBRXNFLEdBQUdFLE1BQUwsQ0FBaEI7QUFDQSxZQUFJK1IsVUFBVTNMLEVBQVYsQ0FBYSxVQUFiLENBQUosRUFBOEI7QUFDMUIsZ0JBQUlyRyxVQUFVZ1MsVUFBVXpHLE1BQVYsR0FBbUJBLE1BQW5CLEdBQTRCbE4sSUFBNUIsQ0FBaUMsMkJBQWpDLENBQWQ7QUFDQSxnQkFBSXVVLFNBQVM1UyxRQUFRNlMsS0FBUixHQUFnQmpELFVBQWhCLENBQTJCLGVBQTNCLENBQWI7QUFDQWdELG1CQUFPNU0sR0FBUCxDQUFXaEcsUUFBUWdHLEdBQVIsRUFBWCxFQUEwQnRGLFFBQTFCLENBQW1DLFFBQW5DLEVBQTZDcEMsSUFBN0MsQ0FBa0QsTUFBbEQsRUFBMERzVSxPQUFPdlUsSUFBUCxDQUFZLFFBQVosRUFBc0J2QixNQUF0QixHQUErQixFQUEvQixHQUFvQyxFQUFwQyxHQUF5QzhWLE9BQU92VSxJQUFQLENBQVksUUFBWixFQUFzQnZCLE1BQXpILEVBQWlJZ1csTUFBakksQ0FBd0ksWUFBWTtBQUNoSjlTLHdCQUFRZ0csR0FBUixDQUFZNE0sT0FBTzVNLEdBQVAsRUFBWjtBQUNILGFBRkQsRUFFR2xHLEVBRkgsQ0FFTSxxQkFGTixFQUU2QixVQUFVc1AsQ0FBVixFQUFhO0FBQ3RDLG9CQUFJQSxFQUFFL0IsSUFBRixLQUFXLFVBQVgsSUFBeUIrQixFQUFFMkQsS0FBRixLQUFZLEVBQXpDLEVBQTZDO0FBQ3pDdFgsc0JBQUUsSUFBRixFQUFRb0UsTUFBUjtBQUNIO0FBQ0osYUFORDtBQU9BbVMsc0JBQVVFLE9BQVYsQ0FBa0IsZ0JBQWxCLEVBQW9DelMsTUFBcEMsQ0FBMkNtVCxNQUEzQztBQUNBQSxtQkFBTy9OLEtBQVA7QUFDSDtBQUNKOztBQUVELFdBQU87QUFDSHdHO0FBREcsS0FBUDtBQUdIOztBQUVELFNBQVNYLG1CQUFULEdBQStCOztBQUUzQixXQUFPLEVBQUVXLFNBQVMsbUJBQVksQ0FBRyxDQUExQixFQUFQO0FBRUgsQzs7Ozs7Ozs7Ozs7O0FDM3NCWTs7Ozs7QUFFYixJQUFJMkgsZ0JBQWlCLFVBQVU5SSxNQUFWLEVBQWtCO0FBQ25DQSxhQUFTQSxVQUFVbk4sT0FBbkI7QUFDQSxRQUFNa1csc0JBQXNCLG9EQUN0Qix3REFETjs7QUFHQSxhQUFTQyxRQUFULENBQWtCOUQsQ0FBbEIsRUFBcUI7QUFDakIsWUFBSSxDQUFDK0QsWUFBTCxFQUFtQjtBQUNmO0FBQ0g7O0FBRUQvRCxVQUFFQyxjQUFGO0FBQ0FELFVBQUVnRSxXQUFGLEdBQWdCSCxtQkFBaEI7QUFDQSxlQUFPQSxtQkFBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBSUksa0JBQUo7QUFDQXRRLGFBQVN1USxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVbEUsQ0FBVixFQUFhO0FBQzVDQSxZQUFJQSxLQUFLNUssT0FBTytPLEtBQWhCO0FBQ0FGLDZCQUFxQmpFLEVBQUVuUCxNQUFGLElBQVltUCxFQUFFb0UsVUFBbkM7QUFDQTtBQUNILEtBSkQsRUFJRyxLQUpIOztBQU1BLGFBQVNDLG9CQUFULEdBQWdDO0FBQzVCLFlBQUlDLGFBQWFqWSxFQUFFLFVBQUYsQ0FBakI7QUFDQTtBQUNBLFlBQUlpWSxXQUFXNVcsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN2QixtQkFBTyxJQUFQO0FBQ0g7O0FBRUQsZUFBTyxLQUFQO0FBQ0g7O0FBRUQsYUFBUzZXLGlCQUFULEdBQTZCO0FBQ3pCLFlBQUlDLFVBQVUsS0FBZDtBQUNBLFlBQUlDLFVBQVVwWSxFQUFFLGtCQUFGLEVBQXNCNkssSUFBdEIsQ0FBMkIsWUFBWTtBQUNqRCxnQkFBSTdLLEVBQUUsSUFBRixFQUFRdUssR0FBUixNQUFpQixFQUFyQixFQUF5QjtBQUNyQjROLDBCQUFVLElBQVY7QUFDQTtBQUNIO0FBQ0osU0FMYSxDQUFkOztBQU9BLGVBQU9BLE9BQVA7QUFDSDs7QUFFRCxhQUFTRSx1QkFBVCxDQUFpQ1Qsa0JBQWpDLEVBQXFEVSxTQUFyRCxFQUFnRTtBQUM1RCxZQUFJelYsT0FBTzdDLEVBQUU0WCxrQkFBRixFQUFzQmpZLElBQXRCLENBQTJCMlksU0FBM0IsQ0FBWDs7QUFFQSxZQUFJelYsSUFBSixFQUFVO0FBQ04sbUJBQU9BLElBQVA7QUFDSDs7QUFFRCxlQUFPLEVBQVA7QUFDSDs7QUFFRCxhQUFTMFYsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDeEIvSixlQUFPbE4sR0FBUCxDQUFXLFdBQVg7QUFDQSxZQUFJc0IsT0FBT3dWLHdCQUF3QkksdUJBQXhCLEVBQWlELGFBQWpELENBQVg7O0FBRUEsWUFBSTVWLFFBQVEsRUFBWixFQUFnQjtBQUNaNEwsbUJBQU9sTixHQUFQLENBQVcsMEJBQVg7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFDRGtOLGVBQU9sTixHQUFQLENBQVcsMEJBQVg7O0FBRUEsWUFBSWlYLFNBQVNqWSxPQUFULENBQWlCLFFBQWpCLEtBQThCLENBQUMsQ0FBL0IsSUFBb0NpWSxTQUFTalksT0FBVCxDQUFpQixNQUFqQixLQUE0QixDQUFDLENBQXJFLEVBQXdFO0FBQ3BFLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxlQUFPLElBQVA7QUFDSDs7QUFFRCxhQUFTa1kscUJBQVQsR0FBaUM7QUFDN0IsWUFBSWIscUJBQXFCdFEsU0FBU29SLGFBQWxDO0FBQ0EsWUFBSXhOLFdBQVdsTCxFQUFFNFgsa0JBQUYsQ0FBZjs7QUFFQSxlQUFPMU0sUUFBUDtBQUNIOztBQUVELGFBQVN5TixpQkFBVCxDQUEyQmYsa0JBQTNCLEVBQStDN00sT0FBL0MsRUFBd0Q7QUFDcEQsWUFBSTZNLG1CQUFtQmdCLE9BQW5CLEtBQStCLE9BQS9CLElBQTBDN04sUUFBUWxJLElBQVIsQ0FBYSxNQUFiLE1BQXlCLFFBQXZFLEVBQWlGO0FBQzdFLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxZQUFJK1UsbUJBQW1CZ0IsT0FBbkIsS0FBK0IsUUFBL0IsSUFBMkM3TixRQUFRK0ksUUFBUixDQUFpQixlQUFqQixDQUEvQyxFQUFrRjtBQUM5RSxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSThELG1CQUFtQmdCLE9BQW5CLEtBQStCLFFBQS9CLElBQTJDN04sUUFBUWxJLElBQVIsQ0FBYSxNQUFiLEtBQXdCLFFBQXZFLEVBQWlGO0FBQzdFLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxlQUFPLENBQUNrSSxRQUFRbEksSUFBUixDQUFhLHNCQUFiLENBQVI7QUFDSDs7QUFFRCxhQUFTNlUsVUFBVCxHQUFzQjtBQUNsQixZQUFJLENBQUNFLGtCQUFMLEVBQXlCO0FBQ3JCO0FBQ0g7O0FBRUR0VyxnQkFBUUMsR0FBUixDQUFZcVcsa0JBQVo7QUFDQSxZQUFJMU0sV0FBV2xMLEVBQUU0WCxrQkFBRixDQUFmO0FBQ0EsWUFBSVksV0FBV3pQLE9BQU84UCxRQUFQLENBQWdCQyxRQUEvQjs7QUFFQSxZQUFJLENBQUNILGtCQUFrQmYsa0JBQWxCLEVBQXNDMU0sUUFBdEMsQ0FBTCxFQUFzRDtBQUNsRCxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSW1OLHdCQUF3QlQsa0JBQXhCLEVBQTRDLGlCQUE1QyxLQUFrRSxFQUF0RSxFQUEwRTtBQUN0RSxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSSxDQUFDVyxTQUFTQyxRQUFULENBQUwsRUFBeUI7QUFDckIsbUJBQU8sS0FBUDtBQUNIOztBQUVELFlBQUlkLGFBQWFNLDBCQUEwQkUsbUJBQTNDOztBQUVBLGVBQU9SLFVBQVA7QUFDSDs7QUFFRDtBQUNBLFFBQUlxQixlQUFlLEtBQW5CO0FBQ0F6UixhQUFTdVEsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVXZULEVBQVYsRUFBYztBQUM3Q3lVLHVCQUFlLElBQWY7QUFDSCxLQUZEOztBQUlBLGFBQVNDLGdCQUFULENBQTBCMVUsRUFBMUIsRUFBOEI7QUFDMUIsWUFBSTJVLFdBQVdyQixzQkFBc0IsQ0FBQ2Usa0JBQWtCZixrQkFBbEIsRUFBc0M1WCxFQUFFNFgsa0JBQUYsQ0FBdEMsQ0FBdEM7QUFDQSxZQUFJcUIsUUFBSixFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxZQUFJLENBQUNGLFlBQUwsRUFBbUI7QUFDZjtBQUNIOztBQUVEelUsV0FBR3NQLGNBQUg7QUFDQXRQLFdBQUdxVCxXQUFILEdBQWlCSCxtQkFBakI7QUFDQSxlQUFPQSxtQkFBUDtBQUNIOztBQUVEOztBQUVBLFdBQU87QUFDSDBCLGdCQUFRLGtCQUFZO0FBQ2hCSCwyQkFBZSxLQUFmO0FBQ0FuQixpQ0FBcUIsSUFBckI7QUFDQTdPLG1CQUFPb1EsY0FBUCxHQUF3QkgsZ0JBQXhCO0FBQ0EsbUJBQU8sSUFBUDtBQUNILFNBTkU7QUFPSEksZ0JBQVEsa0JBQVk7QUFDaEJyUSxtQkFBT29RLGNBQVAsR0FBd0IsSUFBeEI7QUFDQSxtQkFBTyxJQUFQO0FBQ0gsU0FWRTtBQVdIRSxlQUFPLGlCQUFZO0FBQ2ZOLDJCQUFlLElBQWY7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFkRSxLQUFQO0FBZ0JILENBckttQixFQUFwQjs7UUF1S1N4QixhLEdBQUFBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDektPK0Isd0IsR0FBQUEsd0I7QUFBVCxTQUFTQSx3QkFBVCxPQUE0RDtBQUFBLFFBQXhCcGEsR0FBd0IsUUFBeEJBLEdBQXdCO0FBQUEsUUFBbkJxYSxPQUFtQixRQUFuQkEsT0FBbUI7QUFBQSxRQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQy9ELFFBQUksQ0FBQ3RhLEdBQUwsRUFBVTtBQUNOQSxjQUFNNkosT0FBTzhQLFFBQVAsQ0FBZ0JwWCxRQUFoQixFQUFOO0FBQ0F2QyxjQUFNdWEsMkJBQTJCdmEsR0FBM0IsQ0FBTjtBQUNIOztBQUVELFFBQUlxRyxNQUFNZ1UsT0FBTixDQUFKLEVBQW9CO0FBQ2hCQSxrQkFBVSxJQUFWO0FBQ0g7O0FBRUQsUUFBSUMsVUFBVXRhLEdBQWQsRUFBbUI7QUFDZkEsY0FBTXVhLDRCQUFOO0FBQ0g7O0FBRURDLHlCQUFxQnhhLEdBQXJCLEVBQTBCcWEsT0FBMUI7QUFDSDs7QUFFRCxTQUFTRSwwQkFBVCxDQUFvQ3ZhLEdBQXBDLEVBQXlDO0FBQ3JDLFFBQUl5YSxtQkFBbUJ6YSxJQUFJb1QsV0FBSixDQUFnQixHQUFoQixDQUF2QjtBQUNBcFQsVUFBTUEsSUFBSTBILFNBQUosQ0FBYyxDQUFkLEVBQWlCK1MsZ0JBQWpCLENBQU47QUFDQSxXQUFPemEsR0FBUDtBQUNIOztBQUVELFNBQVN3YSxvQkFBVCxDQUE4QjdMLFdBQTlCLEVBQTJDMEwsT0FBM0MsRUFBb0Q7QUFDaERsVCxlQUFXLFlBQVk7QUFDbkJyRyxVQUFFQyxJQUFGLENBQU87QUFDSGQsb0JBQVEsS0FETDtBQUVIRCxpQkFBSzJPLFdBRkY7QUFHSC9OLHlCQUFhLGtCQUhWO0FBSUhGLHFCQUFTLFNBQVNBLE9BQVQsQ0FBaUJRLEdBQWpCLEVBQXNCO0FBQzNCMkksdUJBQU84UCxRQUFQLEdBQWtCaEwsV0FBbEI7QUFDSCxhQU5FO0FBT0hoTyxtQkFBTyxTQUFTQSxLQUFULENBQWVPLEdBQWYsRUFBb0I7QUFDdkJzWixxQ0FBcUI3TCxXQUFyQixFQUFrQzBMLE9BQWxDO0FBQ0g7QUFURSxTQUFQO0FBV0gsS0FaRCxFQVlHQSxPQVpIO0FBYUg7O0FBRUR4USxPQUFPNlEsZ0JBQVAsR0FBMEJOLHdCQUExQixDOzs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTTyxXQUFULENBQXFCQyxZQUFyQixFQUFtQztBQUMvQixRQUFJQyxtQkFBbUIvWixFQUFFLG1CQUFGLENBQXZCO0FBQ0EsUUFBSWdhLGNBQWNoYSxFQUFFLG9CQUFGLENBQWxCO0FBQ0EsUUFBSWlhLFFBQVFqYSxFQUFFLG9CQUFGLENBQVo7QUFDQSxRQUFJcUQsV0FBVyxFQUFmOztBQUVBSSxtQkFBT0UsSUFBUCxDQUFZLE1BQVo7QUFDQS9FLGVBQUs4QixPQUFMLENBQWEsRUFBRXhCLEtBQUssNkNBQVAsRUFBYixFQUFxRWlCLElBQXJFLENBQTBFLFVBQVVDLEdBQVYsRUFBZTtBQUNyRnFELHVCQUFPVSxJQUFQO0FBQ0FkLG1CQUFXakQsR0FBWDtBQUNBcVA7QUFDQThILHFDQUFjMkIsTUFBZDtBQUNILEtBTEQ7O0FBT0EsYUFBU2dCLFFBQVQsQ0FBa0I1VixFQUFsQixFQUFzQjtBQUNsQnRFLFVBQUVzSCxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQUYsRUFBaUN0RixJQUFqQyxDQUFzQ29CLFFBQXRDLEVBQ0s0QixRQURMLENBQ2MsWUFEZCxFQUVLTixRQUZMLENBRWNvVixnQkFGZDtBQUdIOztBQUVELGFBQVNJLFdBQVQsQ0FBcUI3VixFQUFyQixFQUF5QjtBQUNyQnRFLFVBQUVzRSxHQUFHRSxNQUFMLEVBQWFpUyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DclMsTUFBcEM7QUFDSDs7QUFFRDtBQUNBLGFBQVNnVyxnQkFBVCxDQUEwQmxQLFFBQTFCLEVBQW9DO0FBQ2hDLFlBQUlBLFNBQVM0SSxRQUFULENBQWtCLHFCQUFsQixDQUFKLEVBQThDO0FBQzFDLG1CQUFPOUkscUJBQVVDLFFBQVYsQ0FBbUJDLFFBQW5CLEVBQTZCLHVIQUE3QixFQUFzSixVQUFVWCxHQUFWLEVBQWU7QUFDeEssdUJBQU9TLHFCQUFVTSxnQkFBVixDQUEyQmYsR0FBM0IsRUFBZ0MsQ0FBaEMsS0FBc0NTLHFCQUFVVSxjQUFWLENBQXlCbkIsR0FBekIsQ0FBdEMsSUFBdUVTLHFCQUFVZSxvQkFBVixDQUErQnhCLEdBQS9CLENBQTlFO0FBQ0gsYUFGTSxLQUVEUyxxQkFBVUMsUUFBVixDQUFtQkMsUUFBbkIsRUFBNkIsMkNBQTdCLEVBQTBFLFVBQVVYLEdBQVYsRUFBZTtBQUMzRix1QkFBT0EsSUFBSThQLGlCQUFKLE9BQTRCLE1BQTVCLElBQXNDOVAsSUFBSThQLGlCQUFKLE9BQTRCLE9BQXpFO0FBQ0gsYUFGSyxDQUZDLElBSURyUCxxQkFBVUMsUUFBVixDQUFtQkMsUUFBbkIsRUFBNkIsdUVBQTdCLEVBQ0YsVUFBVVgsR0FBVixFQUFlO0FBQ1gsdUJBQU9TLHFCQUFVaUQsaUJBQVYsQ0FBNEIxRCxHQUE1QixFQUFpQyxxQkFBakMsQ0FBUDtBQUNILGFBSEMsQ0FKTjtBQVFIO0FBQ0o7O0FBRUQsUUFBSStQLGNBQWN0UCxxQkFBVTBCLHNCQUFWLENBQWlDME4sZ0JBQWpDLEVBQW1EekssSUFBbkQsQ0FBd0RzSyxNQUFNLENBQU4sQ0FBeEQsQ0FBbEI7O0FBRUEsYUFBU00sZ0JBQVQsQ0FBMEJqVyxFQUExQixFQUE4QjtBQUMxQmIsdUJBQU9FLElBQVAsQ0FBWSxNQUFaOztBQUVBLFlBQUksQ0FBQzJXLGFBQUwsRUFBb0I7QUFDaEI3VywyQkFBT1UsSUFBUDs7QUFFQUcsZUFBR3NQLGNBQUg7QUFDQSxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSTVTLFdBQVcsSUFBSXFTLFFBQUosRUFBZjtBQUNBLFlBQUk5UCxPQUFPdkQsRUFBRSxtQkFBRixFQUF1QnVLLEdBQXZCLEVBQVg7QUFDQSxZQUFJaVEsYUFBYSxFQUFqQjtBQUNBeGEsVUFBRSxhQUFGLEVBQWlCNkssSUFBakIsQ0FBc0IsVUFBQ0MsQ0FBRCxFQUFJQyxPQUFKLEVBQWdCO0FBQ2xDLGdCQUFJeEgsT0FBT3ZELEVBQUUrSyxPQUFGLEVBQVduSSxJQUFYLENBQWdCLFlBQWhCLEVBQThCMkgsR0FBOUIsRUFBWDtBQUNBLGdCQUFJcUgsT0FBTzVSLEVBQUUrSyxPQUFGLEVBQVduSSxJQUFYLENBQWdCLFFBQWhCLEVBQTBCMkgsR0FBMUIsRUFBWDtBQUNBaVEsdUJBQVdwWCxJQUFYLENBQWdCLEVBQUVHLFVBQUYsRUFBUXFPLFVBQVIsRUFBaEI7QUFDSCxTQUpEOztBQU1BLFlBQUk1RyxxQkFBVWpNLFVBQVYsQ0FBcUJpQyxTQUFTeVosR0FBOUIsQ0FBSixFQUF3QztBQUNwQ3paLHFCQUFTeVosR0FBVCxDQUFhLE1BQWIsRUFBcUJsWCxJQUFyQjtBQUNBdkMscUJBQVN5WixHQUFULENBQWEsT0FBYixFQUFzQlQsWUFBWXpQLEdBQVosRUFBdEI7QUFDQXZKLHFCQUFTeVosR0FBVCxDQUFhLGNBQWIsRUFBNkJYLFlBQTdCO0FBQ0E5WSxxQkFBU3laLEdBQVQsQ0FBYSxZQUFiLEVBQTJCNVosS0FBS0MsU0FBTCxDQUFlMFosVUFBZixDQUEzQjtBQUNILFNBTEQsTUFLTztBQUNIeFoscUJBQVNnRCxNQUFULENBQWdCLE1BQWhCLEVBQXdCVCxJQUF4QjtBQUNBdkMscUJBQVNnRCxNQUFULENBQWdCLE9BQWhCLEVBQXlCZ1csWUFBWXpQLEdBQVosRUFBekI7QUFDQXZKLHFCQUFTZ0QsTUFBVCxDQUFnQixjQUFoQixFQUFnQzhWLFlBQWhDO0FBQ0E5WSxxQkFBU2dELE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEJuRCxLQUFLQyxTQUFMLENBQWUwWixVQUFmLENBQTlCO0FBQ0g7O0FBRUQ1YixtQkFBS21DLFFBQUwsQ0FBYyxFQUFFN0IsS0FBSyxnQ0FBUCxFQUF5QzhCLGtCQUF6QyxFQUFkLEVBQW1FYixJQUFuRSxDQUF3RSxVQUFDQyxHQUFELEVBQVM7QUFDN0UsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYiwwREFBeUIsRUFBekI7QUFDSCxhQUZELE1BR0s7QUFDRDZGLG1DQUFTQyxXQUFULENBQXFCLEVBQUVDLGFBQWEsU0FBZixFQUEwQkUsU0FBUyw2Q0FBbkMsRUFBa0Z4RixRQUFRLFFBQTFGLEVBQXJCO0FBQ0FvRCwrQkFBT1UsSUFBUDtBQUNIO0FBQ0osU0FSRCxFQVFHdkYsV0FBS3NDLFlBUlI7O0FBVUFvRCxXQUFHc1AsY0FBSDtBQUNBLGVBQU8sS0FBUDtBQUNIOztBQUVELGFBQVNuRSxVQUFULEdBQXNCO0FBQ2xCc0sseUJBQWlCMVYsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsbUJBQTdCLEVBQWtEOFYsV0FBbEQ7QUFDQW5hLFVBQUUsZ0JBQUYsRUFBb0JxRSxFQUFwQixDQUF1QixPQUF2QixFQUFnQzZWLFFBQWhDO0FBQ0FELGNBQU01VixFQUFOLENBQVMsUUFBVCxFQUFtQmtXLGdCQUFuQjtBQUNIOztBQUVELGFBQVMzSyxPQUFULEdBQW1CO0FBQ2ZtSyx5QkFBaUJsSyxHQUFqQixDQUFxQixPQUFyQixFQUE4QixtQkFBOUIsRUFBbURzSyxXQUFuRDtBQUNBbmEsVUFBRSxnQkFBRixFQUFvQjZQLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDcUssUUFBakM7QUFDQUQsY0FBTXBLLEdBQU4sQ0FBVSxRQUFWLEVBQW9CMEssZ0JBQXBCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTRyxrQkFBVCxHQUE4QjtBQUMxQmpMOztBQUVBLGFBQVNrTCxXQUFULENBQXFCclcsRUFBckIsRUFBeUI7QUFDckIsWUFBSUMsVUFBVXZFLEVBQUVzRSxHQUFHRSxNQUFMLENBQWQ7QUFDQSxZQUFJc1YsZUFBZXZWLFFBQVE1RSxJQUFSLENBQWEsY0FBYixDQUFuQjtBQUNBLFlBQUlpYixZQUFZclcsUUFBUTVFLElBQVIsQ0FBYSxXQUFiLENBQWhCOztBQUVBOEQsdUJBQU9FLElBQVAsQ0FBWSxNQUFaO0FBQ0EvRSxtQkFBSzhCLE9BQUwsQ0FBYSxFQUFFeEIsS0FBSyxpREFBaUQ0YSxZQUFqRCxHQUFnRSxhQUFoRSxHQUFnRmMsU0FBdkYsRUFBYixFQUFpSHphLElBQWpILENBQXNILFNBQVNQLE9BQVQsQ0FBaUJRLEdBQWpCLEVBQXNCO0FBQ3hJLHNEQUF5QixFQUFFbEIsS0FBSyxvQkFBUCxFQUF6QjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTdVEsVUFBVCxHQUFzQjtBQUNsQnpQLFVBQUUsTUFBRixFQUFVcUUsRUFBVixDQUFhLE9BQWIsRUFBc0IsdUJBQXRCLEVBQStDc1csV0FBL0M7QUFDSDs7QUFFRCxhQUFTL0ssT0FBVCxHQUFtQjtBQUNmNVAsVUFBRSxNQUFGLEVBQVU2UCxHQUFWLENBQWMsT0FBZCxFQUF1Qix1QkFBdkIsRUFBZ0Q4SyxXQUFoRDtBQUNIO0FBQ0o7O0FBRUQsU0FBU0UsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEJoQixZQUE5QixFQUE0QztBQUN4QyxRQUFJQyxtQkFBbUIvWixFQUFFLG1CQUFGLENBQXZCO0FBQ0EsUUFBSWdhLGNBQWNoYSxFQUFFLG9CQUFGLENBQWxCO0FBQ0EsUUFBSWlhLFFBQVFqYSxFQUFFLGtCQUFGLENBQVo7QUFDQSxRQUFJcUQsV0FBVyxFQUFmOztBQUVBSSxtQkFBT0UsSUFBUCxDQUFZLE1BQVo7QUFDQS9FLGVBQUs4QixPQUFMLENBQWEsRUFBRXhCLEtBQUssNkNBQVAsRUFBYixFQUFxRWlCLElBQXJFLENBQTBFLFVBQVVDLEdBQVYsRUFBZTtBQUNyRnFELHVCQUFPVSxJQUFQO0FBQ0FkLG1CQUFXakQsR0FBWDtBQUNBcVA7QUFDQThILHFDQUFjMkIsTUFBZDtBQUNILEtBTEQ7O0FBT0EsYUFBU2dCLFFBQVQsQ0FBa0I1VixFQUFsQixFQUFzQjtBQUNsQnRFLFVBQUVzSCxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQUYsRUFBaUN0RixJQUFqQyxDQUFzQ29CLFFBQXRDLEVBQ0s0QixRQURMLENBQ2MsWUFEZCxFQUVLTixRQUZMLENBRWNvVixnQkFGZDtBQUdIOztBQUVELGFBQVNJLFdBQVQsQ0FBcUI3VixFQUFyQixFQUF5QjtBQUNyQnRFLFVBQUVzRSxHQUFHRSxNQUFMLEVBQWFpUyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DclMsTUFBcEM7QUFDSDs7QUFFRCxhQUFTZ1csZ0JBQVQsQ0FBMEJsUCxRQUExQixFQUFvQztBQUNoQyxZQUFJQSxTQUFTNEksUUFBVCxDQUFrQixxQkFBbEIsQ0FBSixFQUE4QztBQUMxQyxtQkFBTzlJLHFCQUFVQyxRQUFWLENBQW1CQyxRQUFuQixFQUE2QiwrSkFBN0IsRUFBOEwsVUFBVVgsR0FBVixFQUFlO0FBQ2hOLHVCQUFPUyxxQkFBVU0sZ0JBQVYsQ0FBMkJmLEdBQTNCLEVBQWdDLENBQWhDLEtBQXNDUyxxQkFBVVUsY0FBVixDQUF5Qm5CLEdBQXpCLENBQXRDLElBQXVFUyxxQkFBVWUsb0JBQVYsQ0FBK0J4QixHQUEvQixDQUF2RSxJQUE4R0EsUUFBUSxPQUE3SDtBQUNILGFBRk0sQ0FBUDtBQUdIO0FBQ0o7O0FBRUQsUUFBSStQLGNBQWN0UCxxQkFBVTBCLHNCQUFWLENBQWlDME4sZ0JBQWpDLEVBQW1EekssSUFBbkQsQ0FBd0RzSyxNQUFNLENBQU4sQ0FBeEQsQ0FBbEI7O0FBRUEsYUFBU2MsY0FBVCxDQUF3QnpXLEVBQXhCLEVBQTRCO0FBQ3hCYix1QkFBT0UsSUFBUCxDQUFZLE1BQVo7O0FBRUEsWUFBSSxDQUFDMlcsYUFBTCxFQUFvQjtBQUNoQjdXLDJCQUFPVSxJQUFQOztBQUVBRyxlQUFHc1AsY0FBSDtBQUNBLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxZQUFJNVMsV0FBVyxJQUFJcVMsUUFBSixFQUFmO0FBQ0EsWUFBSTJILFVBQVVoYixFQUFFLG1CQUFGLEVBQXVCdUssR0FBdkIsRUFBZDtBQUNBLFlBQUkwUSxVQUFVSCxTQUFkO0FBQ0EsWUFBSU4sYUFBYSxFQUFqQjs7QUFFQXhhLFVBQUUsYUFBRixFQUFpQjZLLElBQWpCLENBQXNCLFVBQUNDLENBQUQsRUFBSUMsT0FBSixFQUFnQjtBQUNsQyxnQkFBSXhILE9BQU92RCxFQUFFK0ssT0FBRixFQUFXbkksSUFBWCxDQUFnQixZQUFoQixFQUE4QjJILEdBQTlCLEVBQVg7QUFDQSxnQkFBSXFILE9BQU81UixFQUFFK0ssT0FBRixFQUFXbkksSUFBWCxDQUFnQixRQUFoQixFQUEwQjJILEdBQTFCLEVBQVg7QUFDQWlRLHVCQUFXcFgsSUFBWCxDQUFnQixFQUFFRyxVQUFGLEVBQVFxTyxVQUFSLEVBQWhCO0FBQ0gsU0FKRDs7QUFNQSxZQUFJNUcscUJBQVVqTSxVQUFWLENBQXFCaUMsU0FBU3laLEdBQTlCLENBQUosRUFBd0M7QUFDcEN6WixxQkFBU3laLEdBQVQsQ0FBYSxTQUFiLEVBQXdCUSxPQUF4QjtBQUNBamEscUJBQVN5WixHQUFULENBQWEsU0FBYixFQUF3Qk8sT0FBeEI7QUFDQWhhLHFCQUFTeVosR0FBVCxDQUFhLE9BQWIsRUFBc0J6YSxFQUFFLG9CQUFGLEVBQXdCdUssR0FBeEIsRUFBdEI7QUFDQXZKLHFCQUFTeVosR0FBVCxDQUFhLGNBQWIsRUFBNkJYLFlBQTdCO0FBQ0E5WSxxQkFBU3laLEdBQVQsQ0FBYSxZQUFiLEVBQTJCNVosS0FBS0MsU0FBTCxDQUFlMFosVUFBZixDQUEzQjtBQUNILFNBTkQsTUFNTztBQUNIeFoscUJBQVNnRCxNQUFULENBQWdCLFNBQWhCLEVBQTJCaVgsT0FBM0I7QUFDQWphLHFCQUFTZ0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQmdYLE9BQTNCO0FBQ0FoYSxxQkFBU2dELE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJoRSxFQUFFLG9CQUFGLEVBQXdCdUssR0FBeEIsRUFBekI7QUFDQXZKLHFCQUFTZ0QsTUFBVCxDQUFnQixjQUFoQixFQUFnQzhWLFlBQWhDO0FBQ0E5WSxxQkFBU2dELE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEJuRCxLQUFLQyxTQUFMLENBQWUwWixVQUFmLENBQTlCO0FBQ0g7O0FBRUQ1YixtQkFBS21DLFFBQUwsQ0FBYyxFQUFFN0IsS0FBSyw4QkFBUCxFQUF1QzhCLGtCQUF2QyxFQUFkLEVBQWlFYixJQUFqRSxDQUFzRSxVQUFDQyxHQUFELEVBQVM7QUFDM0UsZ0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYiwwREFBeUIsRUFBekI7QUFDSDtBQUNKLFNBSkQsRUFJR2hCLFdBQUtzQyxZQUpSOztBQU1Bb0QsV0FBR3NQLGNBQUg7QUFDQSxlQUFPLEtBQVA7QUFDSDs7QUFFRCxhQUFTbkUsVUFBVCxHQUFzQjtBQUNsQnNLLHlCQUFpQjFWLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLG1CQUE3QixFQUFrRDhWLFdBQWxEO0FBQ0FuYSxVQUFFLGdCQUFGLEVBQW9CcUUsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0M2VixRQUFoQztBQUNBRCxjQUFNNVYsRUFBTixDQUFTLFFBQVQsRUFBbUIwVyxjQUFuQjtBQUNIOztBQUVELGFBQVNuTCxPQUFULEdBQW1CO0FBQ2ZtSyx5QkFBaUJsSyxHQUFqQixDQUFxQixPQUFyQixFQUE4QixtQkFBOUIsRUFBbURzSyxXQUFuRDtBQUNBbmEsVUFBRSxnQkFBRixFQUFvQjZQLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDcUssUUFBakM7QUFDQUQsY0FBTXBLLEdBQU4sQ0FBVSxRQUFWLEVBQW9Ca0wsY0FBcEI7QUFDSDtBQUNKOztBQUVELElBQUlHLFdBQVksWUFBWTtBQUN4QixhQUFTQyxVQUFULENBQW9CTCxTQUFwQixFQUErQmhCLFlBQS9CLEVBQTZDckwsTUFBN0MsRUFBcURELFFBQXJELEVBQStEO0FBQzNELFlBQUk0TSxTQUFTcGIsRUFBRSxvQkFBRixDQUFiO0FBQ0EsWUFBSXlFLGFBQWEyVyxPQUFPeFksSUFBUCxDQUFZLHVCQUFaLENBQWpCO0FBQ0EsWUFBSXlZLGNBQWMsOEJBQVk1VyxVQUFaLEVBQXdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBeEIsRUFBOEMsRUFBOUMsRUFBa0QrSixRQUFsRCxFQUE0REMsTUFBNUQsRUFBb0UsSUFBcEUsQ0FBbEI7O0FBRUEsWUFBSTZNLGVBQWVDLDBCQUEwQi9NLFFBQTFCLENBQW5CO0FBQ0EsWUFBSWdOLGdCQUFnQkMsMkJBQTJCTCxNQUEzQixDQUFwQjs7QUFFQTNMO0FBQ0E4SCxxQ0FBYzJCLE1BQWQ7QUFDQXdDOztBQUVBLGlCQUFTQyxpQkFBVCxDQUEyQnJYLEVBQTNCLEVBQStCO0FBQzNCLGdCQUFJc1gsU0FBU0MsbUJBQW1CN2IsRUFBRSxpQkFBRixDQUFuQixDQUFiO0FBQ0EsZ0JBQUk0YixPQUFPRSxnQkFBWCxFQUE2QjtBQUN6QjtBQUNIOztBQUVELGdCQUFJMWMsT0FBTztBQUNQd2IsMkJBQVdFLFNBREo7QUFFUGhCLDhCQUFjQSxZQUZQO0FBR1BVLDRCQUFZb0IsT0FBT3BCO0FBSFosYUFBWDs7QUFNQTViLHVCQUFLZ0MsUUFBTCxDQUFjLEVBQUUxQixLQUFLLCtCQUFQLEVBQXdDUyxNQUFNUCxJQUE5QyxFQUFkLEVBQW9FZSxJQUFwRSxDQUF5RSxVQUFVQyxHQUFWLEVBQWU7QUFDcEYsb0JBQUlBLElBQUlSLE9BQVIsRUFBaUI7QUFDYm1KLDJCQUFPOFAsUUFBUCxDQUFnQmpRLE9BQWhCLG1EQUF3RXhKLEtBQUswYSxZQUE3RSxtQkFBdUcxYSxLQUFLd2IsU0FBNUc7QUFDSDtBQUNKLGFBSkQsRUFJR2hjLFdBQUtzQyxZQUpSO0FBS0g7O0FBRUQsaUJBQVN1TyxVQUFULEdBQXNCO0FBQ2xCelAsY0FBRSxrQkFBRixFQUFzQnFFLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDc1gsaUJBQWxDO0FBQ0EzYixjQUFFLHdCQUFGLEVBQTRCcUUsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0NpWCxZQUF4QztBQUNBdGIsY0FBRSxNQUFGLEVBQVVxRSxFQUFWLENBQWEsT0FBYixFQUFzQiwyQkFBdEIsRUFBbUQwWCxXQUFuRDs7QUFFQXZOLHFCQUFTbkssRUFBVCxDQUFZLGVBQVosRUFBNkJtWCxhQUE3QixFQUE0QyxzQkFBNUMsRUFBb0UsbUJBQXBFO0FBQ0FoTixxQkFBU25LLEVBQVQsQ0FBWSxlQUFaLEVBQTZCbVgsYUFBN0IsRUFBNEMsc0JBQTVDLEVBQW9FLG1CQUFwRTtBQUNIOztBQUVELGlCQUFTNUwsT0FBVCxHQUFtQjtBQUNmNVAsY0FBRSxrQkFBRixFQUFzQjZQLEdBQXRCLENBQTBCLE9BQTFCLEVBQW1DOEwsaUJBQW5DO0FBQ0EzYixjQUFFLHdCQUFGLEVBQTRCNlAsR0FBNUIsQ0FBZ0MsT0FBaEMsRUFBeUN5TCxZQUF6QztBQUNBdGIsY0FBRSxNQUFGLEVBQVU2UCxHQUFWLENBQWMsT0FBZCxFQUF1QiwyQkFBdkIsRUFBb0RrTSxXQUFwRDs7QUFFQXZOLHFCQUFTcUIsR0FBVCxDQUFhLGVBQWIsRUFBOEIyTCxhQUE5QixFQUE2QyxzQkFBN0MsRUFBcUUsbUJBQXJFO0FBQ0FoTixxQkFBU3FCLEdBQVQsQ0FBYSxlQUFiLEVBQThCMkwsYUFBOUIsRUFBNkMsc0JBQTdDLEVBQXFFLG1CQUFyRTtBQUNIO0FBQ0o7O0FBRUQsYUFBU1EsUUFBVCxDQUFrQnhKLEVBQWxCLEVBQXNCb0ksU0FBdEIsRUFBaUNkLFlBQWpDLEVBQStDckwsTUFBL0MsRUFBdURELFFBQXZELEVBQWlFO0FBQzdELFlBQUk0TSxTQUFTcGIsRUFBRSxvQkFBRixDQUFiO0FBQ0EsWUFBSXlFLGFBQWEyVyxPQUFPeFksSUFBUCxDQUFZLHVCQUFaLENBQWpCO0FBQ0EsWUFBSXlZLGNBQWMsOEJBQVk1VyxVQUFaLEVBQXdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBeEIsRUFBOEMsRUFBOUMsRUFBa0QrSixRQUFsRCxFQUE0REMsTUFBNUQsRUFBb0UsSUFBcEUsQ0FBbEI7O0FBRUEsWUFBSTZNLGVBQWVDLDBCQUEwQi9NLFFBQTFCLENBQW5CO0FBQ0EsWUFBSWdOLGdCQUFnQkMsMkJBQTJCTCxNQUEzQixDQUFwQjs7QUFFQXBiLFVBQUUsc0JBQUYsRUFBMEI2SyxJQUExQixDQUErQixVQUFVQyxDQUFWLEVBQWFDLE9BQWIsRUFBc0I7QUFDakQsZ0JBQUlrUixlQUFlamMsRUFBRStLLE9BQUYsQ0FBbkI7QUFDQSxnQkFBSW1SLGdCQUFnQkQsYUFBYTVRLElBQWIsQ0FBa0IsMkJBQWxCLENBQXBCO0FBQ0EsZ0JBQUk4USxpREFBOENGLGFBQWFwWixJQUFiLENBQWtCLFdBQWxCLENBQTlDLFFBQUo7O0FBRUEsZ0JBQUl1WixnQkFBZ0JILGFBQWExUixHQUFiLEVBQXBCO0FBQ0EsZ0JBQUlnSixVQUFVNkksY0FBY2xQLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBZDtBQUNBLGlCQUFLLElBQUkvTCxJQUFJLENBQWIsRUFBZ0JBLElBQUlvUyxRQUFRbFMsTUFBNUIsRUFBb0NGLEtBQUssQ0FBekMsRUFBNEM7QUFDeEMsb0JBQUlvUyxRQUFRcFMsQ0FBUixDQUFKLEVBQWdCO0FBQ1prYixvQ0FBZ0JGLGFBQWhCLEVBQStCNUksUUFBUXBTLENBQVIsQ0FBL0IsRUFBMkMrYSxhQUEzQztBQUNIO0FBQ0o7QUFDSixTQVpEOztBQWNBek07QUFDQThILHFDQUFjMkIsTUFBZDtBQUNBd0M7O0FBRUEsaUJBQVNZLGVBQVQsQ0FBeUJoWSxFQUF6QixFQUE2QjtBQUN6QixnQkFBSXNYLFNBQVNDLG1CQUFtQjdiLEVBQUUsaUJBQUYsQ0FBbkIsQ0FBYjs7QUFFQSxnQkFBSTRiLE9BQU9FLGdCQUFYLEVBQTZCO0FBQ3pCO0FBQ0g7O0FBRUQsZ0JBQUkxYyxPQUFPO0FBQ1BvVCxvQkFBSUEsRUFERztBQUVQb0ksMkJBQVdBLFNBRko7QUFHUGQsOEJBQWNBLFlBSFA7QUFJUFUsNEJBQVlvQixPQUFPcEI7QUFKWixhQUFYOztBQU9BNWIsdUJBQUtnQyxRQUFMLENBQWMsRUFBRTFCLEtBQUssNkJBQVAsRUFBc0NTLE1BQU1QLElBQTVDLEVBQWQsRUFBa0VlLElBQWxFLENBQXVFLFVBQVVDLEdBQVYsRUFBZTtBQUNsRixvQkFBSUEsSUFBSVIsT0FBUixFQUFpQjtBQUNibUosMkJBQU84UCxRQUFQLENBQWdCalEsT0FBaEIsbURBQXdFeEosS0FBSzBhLFlBQTdFLG1CQUF1RzFhLEtBQUt3YixTQUE1RztBQUNIOztBQUVEblgsK0JBQU9VLElBQVA7QUFDSCxhQU5ELEVBTUd2RixXQUFLc0MsWUFOUjtBQU9IOztBQUVELGlCQUFTdU8sVUFBVCxHQUFzQjtBQUNsQnpQLGNBQUUsZ0JBQUYsRUFBb0JxRSxFQUFwQixDQUF1QixPQUF2QixFQUFnQ2lZLGVBQWhDO0FBQ0F0YyxjQUFFLHdCQUFGLEVBQTRCcUUsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0NpWCxZQUF4QztBQUNBdGIsY0FBRSxNQUFGLEVBQVVxRSxFQUFWLENBQWEsT0FBYixFQUFzQiwyQkFBdEIsRUFBbUQwWCxXQUFuRDs7QUFFQXZOLHFCQUFTbkssRUFBVCxDQUFZLGVBQVosRUFBNkJtWCxhQUE3QixFQUE0QyxzQkFBNUMsRUFBb0UsbUJBQXBFO0FBQ0FoTixxQkFBU25LLEVBQVQsQ0FBWSxlQUFaLEVBQTZCbVgsYUFBN0IsRUFBNEMsc0JBQTVDLEVBQW9FLG1CQUFwRTtBQUNIOztBQUVELGlCQUFTNUwsT0FBVCxHQUFtQjtBQUNmNVAsY0FBRSxnQkFBRixFQUFvQjZQLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDeU0sZUFBakM7QUFDQXRjLGNBQUUsd0JBQUYsRUFBNEI2UCxHQUE1QixDQUFnQyxPQUFoQyxFQUF5Q3lMLFlBQXpDO0FBQ0F0YixjQUFFLE1BQUYsRUFBVTZQLEdBQVYsQ0FBYyxPQUFkLEVBQXVCLDJCQUF2QixFQUFvRGtNLFdBQXBEOztBQUVBdk4scUJBQVNxQixHQUFULENBQWEsZUFBYixFQUE4QjJMLGFBQTlCLEVBQTZDLHNCQUE3QyxFQUFxRSxtQkFBckU7QUFDQWhOLHFCQUFTcUIsR0FBVCxDQUFhLGVBQWIsRUFBOEIyTCxhQUE5QixFQUE2QyxzQkFBN0MsRUFBcUUsbUJBQXJFO0FBQ0g7QUFDSjs7QUFFRCxhQUFTSyxrQkFBVCxDQUE0QlUsTUFBNUIsRUFBb0M7QUFDaEMsWUFBSS9CLGFBQWEsRUFBakI7QUFDQSxZQUFJMU4sT0FBTyxLQUFYOztBQUVBLGFBQUssSUFBSTNMLElBQUksQ0FBYixFQUFnQkEsSUFBSW9iLE9BQU9sYixNQUEzQixFQUFtQ0YsS0FBSyxDQUF4QyxFQUEyQztBQUN2QyxnQkFBSXFiLFFBQVF4YyxFQUFFdWMsT0FBT3BiLENBQVAsQ0FBRixDQUFaO0FBQ0EsZ0JBQUlvQyxPQUFPaVosTUFBTTNaLElBQU4sQ0FBVyxXQUFYLENBQVg7QUFDQSxnQkFBSStPLE9BQU80SyxNQUFNM1osSUFBTixDQUFXLFdBQVgsQ0FBWDtBQUNBLGdCQUFJaEIsUUFBUTJhLE1BQU1qUyxHQUFOLEVBQVo7QUFDQSxnQkFBSXFILFNBQVMsYUFBYixFQUE0QjtBQUN4Qi9QLHdCQUFRNGEsdUJBQVdDLFVBQVgsQ0FBc0IsVUFBVW5aLElBQWhDLENBQVI7QUFDSDs7QUFFRCxnQkFBSSxDQUFDeUgscUJBQVUrQixhQUFWLENBQXdCeVAsS0FBeEIsQ0FBTCxFQUFxQztBQUNqQzFQLHVCQUFPLElBQVA7QUFDSDs7QUFFRDBOLHVCQUFXcFgsSUFBWCxDQUFnQnZDLEtBQUtDLFNBQUwsQ0FBZTtBQUMzQnlDLHNCQUFNQSxJQURxQjtBQUUzQnFPLHNCQUFNQSxJQUZxQjtBQUczQi9QLHVCQUFPQTtBQUhvQixhQUFmLENBQWhCO0FBS0g7O0FBRUQsZUFBTztBQUNIMlksa0NBREc7QUFFSHNCLDhCQUFrQmhQO0FBRmYsU0FBUDtBQUlIOztBQUVELGFBQVN1UCxlQUFULENBQXlCTSxPQUF6QixFQUFrQ0MsU0FBbEMsRUFBNkNWLGFBQTdDLEVBQTREO0FBQ3hELFlBQUl6WCxhQUFhekUsRUFBRSxrREFBRixDQUFqQjtBQUNBLFlBQUk2YyxhQUFhN2MsRUFBRSxvREFBb0Q0YyxTQUFwRCxHQUFnRSxnQkFBaEUsR0FBbUZELE9BQW5GLEdBQTZGLDBEQUEvRixDQUFqQjtBQUNBLFlBQUlHLE9BQU85YyxFQUFFLHlCQUF5QjRjLFNBQXpCLEdBQXFDLDRCQUF2QyxDQUFYOztBQUVBblksbUJBQVdULE1BQVgsQ0FBa0I2WSxVQUFsQixFQUNLN1ksTUFETCxDQUNZOFksSUFEWixFQUVLblksUUFGTCxDQUVjdVgsYUFGZDtBQUdIOztBQUVELGFBQVNILFdBQVQsQ0FBcUJ6WCxFQUFyQixFQUF5QjtBQUNyQixZQUFJcUcsV0FBVzNLLEVBQUUsSUFBRixDQUFmO0FBQ0EsWUFBSStjLFFBQVFwUyxTQUFTOUgsSUFBVCxDQUFjLFNBQWQsQ0FBWjtBQUNBLFlBQUltRCxXQUFXMkUsU0FBUzlILElBQVQsQ0FBYyxZQUFkLENBQWY7O0FBRUEsWUFBSW1ELFlBQVlBLGFBQWEsRUFBN0IsRUFBaUM7QUFDN0IsZ0JBQUlnWCxTQUFTaGQsRUFBRWdHLFFBQUYsQ0FBYjtBQUNBLGdCQUFJb1csZ0JBQWdCWSxPQUFPelMsR0FBUCxFQUFwQjtBQUNBLGdCQUFJNlIsYUFBSixFQUFtQjtBQUNmWSx1QkFBT3pTLEdBQVAsQ0FBVzZSLGNBQWN4VCxPQUFkLENBQXNCbVUsS0FBdEIsRUFBNkIsRUFBN0IsQ0FBWDtBQUNIO0FBQ0o7O0FBRURwUyxpQkFBU21GLE1BQVQsR0FBa0IxTCxNQUFsQjtBQUNIOztBQUVELGFBQVNtWCx5QkFBVCxDQUFtQy9NLFFBQW5DLEVBQTZDO0FBQ3pDLGVBQU8sU0FBUzhNLFlBQVQsQ0FBc0JoWCxFQUF0QixFQUEwQjtBQUM3QixnQkFBSUMsVUFBVXZFLEVBQUVzRSxHQUFHRSxNQUFMLENBQWQ7QUFDQSxnQkFBSW9NLFlBQVlyTSxRQUFRMUIsSUFBUixDQUFhLFdBQWIsQ0FBaEI7O0FBRUEyTCxxQkFBU3dFLFFBQVQsQ0FBa0IsdUJBQWxCLEVBQTJDLEVBQUVwQixNQUFNLFVBQVIsRUFBb0JoQixvQkFBcEIsRUFBM0M7QUFDQTtBQUNBO0FBQ0gsU0FQRDtBQVFIOztBQUVELGFBQVM2SywwQkFBVCxDQUFvQ0wsTUFBcEMsRUFBNEM7QUFDeEMsZUFBTyxTQUFTSSxhQUFULENBQXVCN2IsSUFBdkIsRUFBNkI7QUFDaEMsZ0JBQUl3YyxpREFBOEN4YyxLQUFLaVIsU0FBbkQsUUFBSjtBQUNBLGdCQUFJcUwsZUFBZWpjLEVBQUVtYyxhQUFGLENBQW5CO0FBQ0EsZ0JBQUlELGdCQUFnQkQsYUFBYTVRLElBQWIsQ0FBa0IsMkJBQWxCLENBQXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBNFEseUJBQWExUixHQUFiLENBQWlCNUssS0FBSzRULE9BQUwsQ0FBYTBKLElBQWIsQ0FBa0IsR0FBbEIsQ0FBakI7QUFDQTtBQUNBZiwwQkFBY2phLElBQWQsQ0FBbUIsRUFBbkI7QUFDQVgsb0JBQVFDLEdBQVIsQ0FBWTVCLElBQVo7O0FBRUEsaUJBQUssSUFBSXdCLElBQUksQ0FBYixFQUFnQkEsSUFBSXhCLEtBQUs0VCxPQUFMLENBQWFsUyxNQUFqQyxFQUF5Q0YsS0FBSyxDQUE5QyxFQUFpRDtBQUM3Q2tiLGdDQUFnQkYsYUFBaEIsRUFBK0J4YyxLQUFLNFQsT0FBTCxDQUFhcFMsQ0FBYixDQUEvQixFQUFnRCthLGFBQWhEO0FBQ0g7O0FBRURkLG1CQUFPOEIsS0FBUCxDQUFhLE1BQWI7QUFDSCxTQXZCRDtBQXdCSDs7QUFFRCxhQUFTeEIsYUFBVCxHQUF5QjtBQUNyQjFiLFVBQUUsb0JBQUYsRUFBd0I2SyxJQUF4QixDQUE2QixVQUFDQyxDQUFELEVBQUlDLE9BQUosRUFBZ0I7QUFDekMwUixtQ0FBV1UsSUFBWCxDQUFnQixNQUFJcFMsUUFBUXlILEVBQTVCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBQ0gsU0FGRDtBQUdIOztBQUVELFdBQU87QUFDSDJJLDhCQURHO0FBRUhhO0FBRkcsS0FBUDtBQUlILENBL05jLEVBQWY7O0FBaU9BalQsT0FBTzhRLFdBQVAsR0FBcUJBLFdBQXJCO0FBQ0E5USxPQUFPMlIsa0JBQVAsR0FBNEJBLGtCQUE1QjtBQUNBM1IsT0FBTzhSLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0E5UixPQUFPbVMsUUFBUCxHQUFrQkEsUUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pjQTs7a05BREE7OztBQUdBLElBQUl1QixhQUFjLFlBQVk7QUFDMUIsYUFBU1csbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDLFlBQUksT0FBTzlGLDRCQUFQLEtBQXlCLFdBQXpCLElBQXdDQSw2QkFBYzhCLEtBQTFELEVBQWlFO0FBQzdEZ0UsbUJBQU9oWixFQUFQLENBQVUsWUFBVixFQUF3QixVQUFVc1AsQ0FBVixFQUFhO0FBQ2pDNEQsNkNBQWM4QixLQUFkO0FBQ0gsYUFGRDtBQUdIO0FBQ0o7O0FBRUQsYUFBU2lFLFdBQVQsQ0FBcUJELE1BQXJCLEVBQTZCRSxjQUE3QixFQUE2QztBQUN6Q0YsZUFBT0csU0FBUCxDQUFpQixjQUFqQixFQUFpQztBQUM3QjVMLGtCQUFNLFlBRHVCO0FBRTdCblIsa0JBQU0sUUFGdUI7QUFHN0JnZCxrQkFBTSxLQUh1QjtBQUk3QkMsa0JBQU0sQ0FBQztBQUNIamQsc0JBQU0sYUFESDtBQUVIa2QseUJBQVMsbUJBQVk7QUFDakJOLDJCQUFPTyxhQUFQLENBQXFCLDhCQUFyQjtBQUNIO0FBSkUsYUFBRDtBQUp1QixTQUFqQzs7QUFZQVAsZUFBT2haLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFVBQVVDLEVBQVYsRUFBYztBQUM1QixnQkFBSWlaLGtCQUFrQixHQUFHOWIsUUFBSCxDQUFZQyxJQUFaLENBQWlCNmIsY0FBakIsTUFBcUMsbUJBQTNELEVBQWdGO0FBQzVFQTtBQUNIO0FBQ0osU0FKRDs7QUFNQTtBQUNBRixlQUFPaFosRUFBUCxDQUFVLFFBQVYsRUFBb0IsWUFBWTtBQUM1QndaLG9CQUFRQyxXQUFSO0FBQ0gsU0FGRDtBQUdIOztBQUVELGFBQVNDLFVBQVQsQ0FBb0JuZSxPQUFwQixFQUE2QjtBQUN6QkksVUFBRU0sR0FBRixDQUFNLCtCQUFOLEVBQXVDLFVBQVVGLEdBQVYsRUFBZTtBQUNsRFIsb0JBQVFRLElBQUk0ZCxNQUFaO0FBQ0gsU0FGRDtBQUdIOztBQUVELGFBQVNDLG9CQUFULENBQThCQyxFQUE5QixFQUFrQ3JjLEtBQWxDLEVBQXlDc2MsSUFBekMsRUFBK0M7QUFDM0MsWUFBSUMsUUFBUTlXLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBNlcsY0FBTTVXLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsTUFBM0I7QUFDQTRXLGNBQU01VyxZQUFOLENBQW1CLFFBQW5CLEVBQTZCLFNBQTdCO0FBQ0F4SCxVQUFFLE1BQUYsRUFBVWdFLE1BQVYsQ0FBaUJvYSxLQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxjQUFNQyxRQUFOLEdBQWlCLFlBQVk7QUFDekIsZ0JBQUkxTCxPQUFPLEtBQUtqQyxLQUFMLENBQVcsQ0FBWCxDQUFYOztBQUVBLGdCQUFJNE4sU0FBUyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsbUJBQU96VyxNQUFQLEdBQWdCLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esb0JBQUkySyxLQUFLLFdBQVksSUFBSVAsSUFBSixFQUFELENBQWF1TSxPQUFiLEVBQXBCO0FBQ0Esb0JBQUlDLFlBQVlaLFFBQVFhLFlBQVIsQ0FBcUJDLFlBQXJCLENBQWtDRixTQUFsRDtBQUNBLG9CQUFJRyxTQUFTTixPQUFPMUMsTUFBUCxDQUFjMU8sS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixDQUFiO0FBQ0Esb0JBQUkyUixXQUFXSixVQUFVSyxNQUFWLENBQWlCdE0sRUFBakIsRUFBcUJHLElBQXJCLEVBQTJCaU0sTUFBM0IsQ0FBZjtBQUNBSCwwQkFBVTFhLEdBQVYsQ0FBYzhhLFFBQWQ7O0FBRUE7QUFDQVgsbUJBQUdXLFNBQVNFLE9BQVQsRUFBSCxFQUF1QixFQUFFblosT0FBTytNLEtBQUtwUCxJQUFkLEVBQXZCO0FBQ0gsYUFaRDtBQWFBK2EsbUJBQU9VLGFBQVAsQ0FBcUJyTSxJQUFyQjtBQUNILFNBbEJEOztBQW9CQXlMLGNBQU1hLEtBQU47QUFDSDs7QUFFRCxhQUFTQyxnQkFBVCxDQUEwQmxaLFFBQTFCLEVBQW9DbVosS0FBcEMsRUFBMkNDLE1BQTNDLEVBQW1EN0IsY0FBbkQsRUFBbUU7QUFBQTs7QUFDL0Q7QUFDSXZYLHNCQUFVQSxRQURkO0FBRUlxWix5QkFBYSxLQUZqQjtBQUdJQyxxQ0FBeUI7QUFIN0IsNERBSTZCLCtDQUo3QixvREFLNkIsZ0JBTDdCLGtDQU1XLFFBTlgsaUNBT1UsV0FQViw4Q0FRdUIsS0FSdkIsNkNBU3NCLEtBVHRCLDhDQVV1QixFQVZ2QixrQ0FXV0gsS0FYWCxtQ0FZWUMsTUFaWixvQ0FhYSxDQUFDLG1HQUFELEVBQ0wsa0ZBREssRUFDK0UsdURBRC9FLENBYmIsNkNBZXNCO0FBQ2QseUJBQWEsbURBREM7QUFFZCwwQkFBYztBQUZBLFNBZnRCLCtDQW1Cd0IsSUFuQnhCLHdDQW9CaUIsS0FwQmpCLDBDQXFCbUIsSUFyQm5CLDBDQXNCbUIsSUF0Qm5CLHlDQXVCa0IsSUF2QmxCLDhDQXdCdUIsa0JBeEJ2QixpREF5QjBCbkIsb0JBekIxQixvQ0EwQmEsd1BBMUJiLDZDQTJCc0IsdURBM0J0QixrQ0E0Qlc7QUFBQSxtQkFBVVgsWUFBWUQsTUFBWixFQUFvQkUsY0FBcEIsQ0FBVjtBQUFBLFNBNUJYLG1EQTZCNEJILG1CQTdCNUI7QUErQkg7O0FBRUQsYUFBU0QsSUFBVCxDQUFjblgsUUFBZCxFQUF3Qm1aLEtBQXhCLEVBQStCQyxNQUEvQixFQUF1QzdCLGNBQXZDLEVBQXVEO0FBQ25ELFlBQUlnQyxNQUFNTCxpQkFBaUJsWixRQUFqQixFQUEyQm1aLEtBQTNCLEVBQWtDQyxNQUFsQyxFQUEwQzdCLGNBQTFDLENBQVY7QUFDQWdDLFlBQUl4QixVQUFKLEdBQWlCQSxVQUFqQjtBQUNBRixnQkFBUVYsSUFBUixDQUFhb0MsR0FBYjtBQUNIOztBQUVELGFBQVNDLGlCQUFULENBQTJCeFosUUFBM0IsRUFBcUNtWixLQUFyQyxFQUE0Q0MsTUFBNUMsRUFBb0Q3QixjQUFwRCxFQUFvRTtBQUNoRU0sZ0JBQVFWLElBQVIsQ0FBYStCLGlCQUFpQmxaLFFBQWpCLEVBQTJCbVosS0FBM0IsRUFBa0NDLE1BQWxDLEVBQTBDN0IsY0FBMUMsQ0FBYjtBQUNIOztBQUVELGFBQVNuWixNQUFULENBQWdCNEIsUUFBaEIsRUFBMEI7QUFDdEIsWUFBSXFYLFNBQVNRLFFBQVF2ZCxHQUFSLENBQVkwRixRQUFaLENBQWI7QUFDQSxZQUFJcVgsTUFBSixFQUFZO0FBQ1JBLG1CQUFPalosTUFBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBU3FiLFNBQVQsR0FBcUI7QUFDakI1QixnQkFBUXpaLE1BQVI7QUFDSDs7QUFFRCxhQUFTc2IsS0FBVCxDQUFlMVosUUFBZixFQUF5QjtBQUNyQixZQUFJcVgsU0FBU1EsUUFBUXZkLEdBQVIsQ0FBWTBGLFFBQVosQ0FBYjtBQUNBLFlBQUlxWCxNQUFKLEVBQVk7QUFDUkEsbUJBQU9zQyxVQUFQLENBQWtCLEVBQWxCO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLGFBQVNqRCxVQUFULENBQW9CbEssRUFBcEIsRUFBd0I7QUFDcEIsZUFBT3FMLFFBQVF2ZCxHQUFSLENBQVlrUyxFQUFaLEVBQWdCa0ssVUFBaEIsRUFBUDtBQUNIOztBQUVELGFBQVNrRCxTQUFULENBQW1CcE4sRUFBbkIsRUFBdUIyTSxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0M7QUFDbEMsWUFBSSxDQUFDNU0sRUFBTCxFQUFTO0FBQ0xsUixvQkFBUXVlLElBQVIsQ0FBYSwyQ0FBYjs7QUFFQTtBQUNIO0FBQ0RWLGdCQUFRQSxTQUFTLEdBQWpCO0FBQ0FDLGlCQUFTQSxVQUFVLEdBQW5CO0FBQ0EsWUFBSTVNLEdBQUcsQ0FBSCxNQUFVLEdBQWQsRUFBbUI7QUFDZmlLLHVCQUFXclksTUFBWCxDQUFrQm9PLEdBQUc1TCxTQUFILENBQWEsQ0FBYixDQUFsQjtBQUNILFNBRkQsTUFFTztBQUNINlYsdUJBQVdyWSxNQUFYLENBQWtCb08sRUFBbEI7QUFDSDs7QUFFRGlLLG1CQUFXVSxJQUFYLENBQWdCM0ssRUFBaEIsRUFBb0IyTSxLQUFwQixFQUEyQkMsTUFBM0I7QUFDSDs7QUFFRCxXQUFPO0FBQ0hqQyxrQkFERztBQUVIcUMsNENBRkc7QUFHSDlDLDhCQUhHO0FBSUh0WSxzQkFKRztBQUtIcWIsNEJBTEc7QUFNSEMsb0JBTkc7QUFPSEU7QUFQRyxLQUFQO0FBU0gsQ0F4S2dCLEVBQWpCOztRQTBLU25ELFUsR0FBQUEsVSIsImZpbGUiOiJqcy9zaXRldHJpa3MvZHluYW1pY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHRzL3NpdGV0cmlrcy9keW5hbWljcy5qc1wiKTtcbiIsIi8qKiFcblxuIEBsaWNlbnNlXG4gaGFuZGxlYmFycyB2NC4xLjBcblxuQ29weXJpZ2h0IChDKSAyMDExLTIwMTcgYnkgWWVodWRhIEthdHpcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFuZGxlYmFyc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHQvLyBDb21waWxlciBpbXBvcnRzXG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckFzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJBc3QpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuXHR2YXIgX2NyZWF0ZSA9IF9oYW5kbGViYXJzUnVudGltZTJbJ2RlZmF1bHQnXS5jcmVhdGU7XG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBfY3JlYXRlKCk7XG5cblx0ICBoYi5jb21waWxlID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLmNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcblx0ICB9O1xuXHQgIGhiLnByZWNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIucHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuXHQgIH07XG5cblx0ICBoYi5BU1QgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MlsnZGVmYXVsdCddO1xuXHQgIGhiLkNvbXBpbGVyID0gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLkNvbXBpbGVyO1xuXHQgIGhiLkphdmFTY3JpcHRDb21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyWydkZWZhdWx0J107XG5cdCAgaGIuUGFyc2VyID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2VyO1xuXHQgIGhiLnBhcnNlID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2U7XG5cblx0ICByZXR1cm4gaGI7XG5cdH1cblxuXHR2YXIgaW5zdCA9IGNyZWF0ZSgpO1xuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuXHRfaGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cblx0aW5zdC5WaXNpdG9yID0gX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyWydkZWZhdWx0J107XG5cblx0aW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcblx0ICAgIFwiZGVmYXVsdFwiOiBvYmpcblx0ICB9O1xuXHR9O1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgYmFzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzQmFzZSk7XG5cblx0Ly8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuXHQvLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG5cdHZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cblx0dmFyIF9oYW5kbGViYXJzUnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG5cdHZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cblx0Ly8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuXHQgIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG5cdCAgaGIuU2FmZVN0cmluZyA9IF9oYW5kbGViYXJzU2FmZVN0cmluZzJbJ2RlZmF1bHQnXTtcblx0ICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcblx0ICBoYi5VdGlscyA9IFV0aWxzO1xuXHQgIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cdCAgaGIuVk0gPSBydW50aW1lO1xuXHQgIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcblx0ICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcblx0ICB9O1xuXG5cdCAgcmV0dXJuIGhiO1xuXHR9XG5cblx0dmFyIGluc3QgPSBjcmVhdGUoKTtcblx0aW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cblx0X2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5cdGluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcblx0ICAgIHJldHVybiBvYmo7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhciBuZXdPYmogPSB7fTtcblxuXHQgICAgaWYgKG9iaiAhPSBudWxsKSB7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0ICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXHQgICAgcmV0dXJuIG5ld09iajtcblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdHZhciBfZGVjb3JhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXG5cdHZhciBfbG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cblx0dmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxuXHR2YXIgVkVSU0lPTiA9ICc0LjEuMCc7XG5cdGV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG5cdHZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cblx0ZXhwb3J0cy5DT01QSUxFUl9SRVZJU0lPTiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXHR2YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcblx0ICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuXHQgIDI6ICc9PSAxLjAuMC1yYy4zJyxcblx0ICAzOiAnPT0gMS4wLjAtcmMuNCcsXG5cdCAgNDogJz09IDEueC54Jyxcblx0ICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG5cdCAgNjogJz49IDIuMC4wLWJldGEuMScsXG5cdCAgNzogJz49IDQuMC4wJ1xuXHR9O1xuXG5cdGV4cG9ydHMuUkVWSVNJT05fQ0hBTkdFUyA9IFJFVklTSU9OX0NIQU5HRVM7XG5cdHZhciBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cblx0ZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG5cdCAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcblx0ICB0aGlzLnBhcnRpYWxzID0gcGFydGlhbHMgfHwge307XG5cdCAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuXHQgIF9oZWxwZXJzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG5cdCAgX2RlY29yYXRvcnMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyh0aGlzKTtcblx0fVxuXG5cdEhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG5cdCAgY29uc3RydWN0b3I6IEhhbmRsZWJhcnNFbnZpcm9ubWVudCxcblxuXHQgIGxvZ2dlcjogX2xvZ2dlcjJbJ2RlZmF1bHQnXSxcblx0ICBsb2c6IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nLFxuXG5cdCAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVyKG5hbWUsIGZuKSB7XG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcblx0ICAgICAgaWYgKGZuKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpO1xuXHQgICAgICB9XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuXHQgIH0sXG5cblx0ICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHJlZ2lzdGVyUGFydGlhbChuYW1lLCBwYXJ0aWFsKSB7XG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJyArIG5hbWUgKyAnXCIgYXMgdW5kZWZpbmVkJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5wYXJ0aWFsc1tuYW1lXSA9IHBhcnRpYWw7XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gdW5yZWdpc3RlclBhcnRpYWwobmFtZSkge1xuXHQgICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG5cdCAgfSxcblxuXHQgIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihuYW1lLCBmbikge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIGlmIChmbikge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTtcblx0ICAgICAgfVxuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmRlY29yYXRvcnNbbmFtZV0gPSBmbjtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHVucmVnaXN0ZXJEZWNvcmF0b3IobmFtZSkge1xuXHQgICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcblx0ICB9XG5cdH07XG5cblx0dmFyIGxvZyA9IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nO1xuXG5cdGV4cG9ydHMubG9nID0gbG9nO1xuXHRleHBvcnRzLmNyZWF0ZUZyYW1lID0gX3V0aWxzLmNyZWF0ZUZyYW1lO1xuXHRleHBvcnRzLmxvZ2dlciA9IF9sb2dnZXIyWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcblx0ZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcblx0ZXhwb3J0cy5lc2NhcGVFeHByZXNzaW9uID0gZXNjYXBlRXhwcmVzc2lvbjtcblx0ZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcblx0ZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xuXHRleHBvcnRzLmJsb2NrUGFyYW1zID0gYmxvY2tQYXJhbXM7XG5cdGV4cG9ydHMuYXBwZW5kQ29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aDtcblx0dmFyIGVzY2FwZSA9IHtcblx0ICAnJic6ICcmYW1wOycsXG5cdCAgJzwnOiAnJmx0OycsXG5cdCAgJz4nOiAnJmd0OycsXG5cdCAgJ1wiJzogJyZxdW90OycsXG5cdCAgXCInXCI6ICcmI3gyNzsnLFxuXHQgICdgJzogJyYjeDYwOycsXG5cdCAgJz0nOiAnJiN4M0Q7J1xuXHR9O1xuXG5cdHZhciBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG5cdCAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuXHRmdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuXHQgIHJldHVybiBlc2NhcGVbY2hyXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcblx0ICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuXHQgICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gb2JqO1xuXHR9XG5cblx0dmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXHRleHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5cdC8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuXHQvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXG5cdHZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuXHQgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cdC8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRpZiAoaXNGdW5jdGlvbigveC8pKSB7XG5cdCAgZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0ICB9O1xuXHR9XG5cdGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cblx0LyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0dmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcblx0fTtcblxuXHRleHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXHQvLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuXG5cdGZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG5cdCAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG5cdCAgICAgIHJldHVybiBpO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gLTE7XG5cdH1cblxuXHRmdW5jdGlvbiBlc2NhcGVFeHByZXNzaW9uKHN0cmluZykge1xuXHQgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHQgICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuXHQgICAgaWYgKHN0cmluZyAmJiBzdHJpbmcudG9IVE1MKSB7XG5cdCAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG5cdCAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuXHQgICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuXHQgICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG5cdCAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cblx0ICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuXHQgIH1cblxuXHQgIGlmICghcG9zc2libGUudGVzdChzdHJpbmcpKSB7XG5cdCAgICByZXR1cm4gc3RyaW5nO1xuXHQgIH1cblx0ICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuXHQgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuXHQgIHZhciBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcblx0ICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuXHQgIHJldHVybiBmcmFtZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG5cdCAgcGFyYW1zLnBhdGggPSBpZHM7XG5cdCAgcmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuXHQgIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNylbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuXHRmdW5jdGlvbiBFeGNlcHRpb24obWVzc2FnZSwgbm9kZSkge1xuXHQgIHZhciBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuXHQgICAgICBsaW5lID0gdW5kZWZpbmVkLFxuXHQgICAgICBjb2x1bW4gPSB1bmRlZmluZWQ7XG5cdCAgaWYgKGxvYykge1xuXHQgICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuXHQgICAgY29sdW1uID0gbG9jLnN0YXJ0LmNvbHVtbjtcblxuXHQgICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG5cdCAgfVxuXG5cdCAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG5cdCAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG5cdCAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG5cdCAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcblx0ICB9XG5cblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXHQgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuXHQgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcblx0ICB9XG5cblx0ICB0cnkge1xuXHQgICAgaWYgKGxvYykge1xuXHQgICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG5cdCAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuXHQgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgICBpZiAoX09iamVjdCRkZWZpbmVQcm9wZXJ0eSkge1xuXHQgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge1xuXHQgICAgICAgICAgdmFsdWU6IGNvbHVtbixcblx0ICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcblx0ICAgICAgICB9KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0gY2F0Y2ggKG5vcCkge1xuXHQgICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuXHQgIH1cblx0fVxuXG5cdEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBFeGNlcHRpb247XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IF9fd2VicGFja19yZXF1aXJlX18oOCksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuXHQgIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcblx0ICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuXHQgIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuXHQgIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuXHQgIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG5cdCAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuXHQgIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcblx0ICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG5cdCAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG5cdCAgZWFjaDogICAgICAgW10uZm9yRWFjaFxuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyA9IHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnM7XG5cblx0dmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0dmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcpO1xuXG5cdHZhciBfaGVscGVyc0VhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxuXHR2YXIgX2hlbHBlcnNFYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNFYWNoKTtcblxuXHR2YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cblx0dmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSGVscGVyTWlzc2luZyk7XG5cblx0dmFyIF9oZWxwZXJzSWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuXHR2YXIgX2hlbHBlcnNJZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSWYpO1xuXG5cdHZhciBfaGVscGVyc0xvZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG5cdHZhciBfaGVscGVyc0xvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9nKTtcblxuXHR2YXIgX2hlbHBlcnNMb29rdXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblxuXHR2YXIgX2hlbHBlcnNMb29rdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvb2t1cCk7XG5cblx0dmFyIF9oZWxwZXJzV2l0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG5cdHZhciBfaGVscGVyc1dpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc1dpdGgpO1xuXG5cdGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcblx0ICBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNFYWNoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzSWYyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzTG9nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0xvb2t1cDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNXaXRoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcblx0ICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cblx0ICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG5cdCAgICAgIHJldHVybiBmbih0aGlzKTtcblx0ICAgIH0gZWxzZSBpZiAoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuXHQgICAgfSBlbHNlIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuXHQgICAgICBpZiAoY29udGV4dC5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICB2YXIgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuXHQgICAgICAgIG9wdGlvbnMgPSB7IGRhdGE6IGRhdGEgfTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIGlmICghb3B0aW9ucykge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBmbiA9IG9wdGlvbnMuZm4sXG5cdCAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcblx0ICAgICAgICBpID0gMCxcblx0ICAgICAgICByZXQgPSAnJyxcblx0ICAgICAgICBkYXRhID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgIGNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcblx0ICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuXHQgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG5cdCAgICAgIGlmIChkYXRhKSB7XG5cdCAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcblx0ICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG5cdCAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuXHQgICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuXHQgICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuXHQgICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcblx0ICAgICAgICBkYXRhOiBkYXRhLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRbZmllbGRdLCBmaWVsZF0sIFtjb250ZXh0UGF0aCArIGZpZWxkLCBudWxsXSlcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcblx0ICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0ICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcblx0ICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgcHJpb3JLZXkgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29udGV4dCkge1xuXHQgICAgICAgICAgaWYgKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3Rcblx0ICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuXHQgICAgICAgICAgICAvLyBhbiBpdGVybWVkaWF0ZSBrZXlzIGFycmF5LlxuXHQgICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBwcmlvcktleSA9IGtleTtcblx0ICAgICAgICAgICAgaSsrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEsIHRydWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaSA9PT0gMCkge1xuXHQgICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSAvKiBbYXJncywgXW9wdGlvbnMgKi97XG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHQgICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0cnVjdC5cblx0ICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFNvbWVvbmUgaXMgYWN0dWFsbHkgdHJ5aW5nIHRvIGNhbGwgc29tZXRoaW5nLCBibG93IHVwLlxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG5cdCAgICAgIGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuXHQgICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcblx0ICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG5cdCAgICBpZiAoIW9wdGlvbnMuaGFzaC5pbmNsdWRlWmVybyAmJiAhY29uZGl0aW9uYWwgfHwgX3V0aWxzLmlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcblx0ICAgIH1cblx0ICB9KTtcblxuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHsgZm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNoIH0pO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uICgpIC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi97XG5cdCAgICB2YXIgYXJncyA9IFt1bmRlZmluZWRdLFxuXHQgICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdCAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgbGV2ZWwgPSAxO1xuXHQgICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xuXHQgICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcblx0ICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG5cdCAgICB9XG5cdCAgICBhcmdzWzBdID0gbGV2ZWw7XG5cblx0ICAgIGluc3RhbmNlLmxvZy5hcHBseShpbnN0YW5jZSwgYXJncyk7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24gKG9iaiwgZmllbGQpIHtcblx0ICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuXHQgICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXG5cdCAgICBpZiAoIV91dGlscy5pc0VtcHR5KGNvbnRleHQpKSB7XG5cdCAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXHQgICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuXHQgICAgICAgIGRhdGE6IGRhdGEsXG5cdCAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuXHQgICAgICB9KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzID0gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycztcblxuXHR2YXIgX2RlY29yYXRvcnNJbmxpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblxuXHR2YXIgX2RlY29yYXRvcnNJbmxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdG9yc0lubGluZSk7XG5cblx0ZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuXHQgIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uIChmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuXHQgICAgdmFyIHJldCA9IGZuO1xuXHQgICAgaWYgKCFwcm9wcy5wYXJ0aWFscykge1xuXHQgICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuXHQgICAgICByZXQgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuXHQgICAgICAgIHZhciBvcmlnaW5hbCA9IGNvbnRhaW5lci5wYXJ0aWFscztcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuXHQgICAgICAgIHZhciByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcblx0ICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBsb2dnZXIgPSB7XG5cdCAgbWV0aG9kTWFwOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuXHQgIGxldmVsOiAnaW5mbycsXG5cblx0ICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG5cdCAgbG9va3VwTGV2ZWw6IGZ1bmN0aW9uIGxvb2t1cExldmVsKGxldmVsKSB7XG5cdCAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuXHQgICAgICB2YXIgbGV2ZWxNYXAgPSBfdXRpbHMuaW5kZXhPZihsb2dnZXIubWV0aG9kTWFwLCBsZXZlbC50b0xvd2VyQ2FzZSgpKTtcblx0ICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcblx0ICAgICAgICBsZXZlbCA9IGxldmVsTWFwO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gbGV2ZWw7XG5cdCAgfSxcblxuXHQgIC8vIENhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBob3N0IGVudmlyb25tZW50XG5cdCAgbG9nOiBmdW5jdGlvbiBsb2cobGV2ZWwpIHtcblx0ICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuXHQgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuXHQgICAgICB2YXIgbWV0aG9kID0gbG9nZ2VyLm1ldGhvZE1hcFtsZXZlbF07XG5cdCAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG5cdCAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdCAgICAgICAgbWV0aG9kID0gJ2xvZyc7XG5cdCAgICAgIH1cblxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgICBtZXNzYWdlW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGxvZ2dlcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcblx0ICB0aGlzLnN0cmluZyA9IHN0cmluZztcblx0fVxuXG5cdFNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNhZmVTdHJpbmc7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfT2JqZWN0JHNlYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmNoZWNrUmV2aXNpb24gPSBjaGVja1JldmlzaW9uO1xuXHRleHBvcnRzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdGV4cG9ydHMud3JhcFByb2dyYW0gPSB3cmFwUHJvZ3JhbTtcblx0ZXhwb3J0cy5yZXNvbHZlUGFydGlhbCA9IHJlc29sdmVQYXJ0aWFsO1xuXHRleHBvcnRzLmludm9rZVBhcnRpYWwgPSBpbnZva2VQYXJ0aWFsO1xuXHRleHBvcnRzLm5vb3AgPSBub29wO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlscyk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0dmFyIF9iYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHRmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuXHQgIHZhciBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuXHQgICAgICBjdXJyZW50UmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTjtcblxuXHQgIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcblx0ICAgIGlmIChjb21waWxlclJldmlzaW9uIDwgY3VycmVudFJldmlzaW9uKSB7XG5cdCAgICAgIHZhciBydW50aW1lVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG5cdCAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFVzZSB0aGUgZW1iZWRkZWQgdmVyc2lvbiBpbmZvIHNpbmNlIHRoZSBydW50aW1lIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHJldmlzaW9uIHlldFxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuXHQgICAgfVxuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRlbXBsYXRlKHRlbXBsYXRlU3BlYywgZW52KSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBpZiAoIWVudikge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuXHQgIH1cblx0ICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuXHQgIH1cblxuXHQgIHRlbXBsYXRlU3BlYy5tYWluLmRlY29yYXRvciA9IHRlbXBsYXRlU3BlYy5tYWluX2Q7XG5cblx0ICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuXHQgIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG5cdCAgZW52LlZNLmNoZWNrUmV2aXNpb24odGVtcGxhdGVTcGVjLmNvbXBpbGVyKTtcblxuXHQgIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIGlmIChvcHRpb25zLmhhc2gpIHtcblx0ICAgICAgY29udGV4dCA9IFV0aWxzLmV4dGVuZCh7fSwgY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcblx0ICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdCAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcblx0ICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcblx0ICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgfVxuXHQgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG5cdCAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuXHQgICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gSnVzdCBhZGQgd2F0ZXJcblx0ICB2YXIgY29udGFpbmVyID0ge1xuXHQgICAgc3RyaWN0OiBmdW5jdGlvbiBzdHJpY3Qob2JqLCBuYW1lKSB7XG5cdCAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBvYmpbbmFtZV07XG5cdCAgICB9LFxuXHQgICAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAoZGVwdGhzLCBuYW1lKSB7XG5cdCAgICAgIHZhciBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuXHQgICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBsYW1iZGE6IGZ1bmN0aW9uIGxhbWJkYShjdXJyZW50LCBjb250ZXh0KSB7XG5cdCAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG5cdCAgICB9LFxuXG5cdCAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuXHQgICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cblx0ICAgIGZuOiBmdW5jdGlvbiBmbihpKSB7XG5cdCAgICAgIHZhciByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG5cdCAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSxcblxuXHQgICAgcHJvZ3JhbXM6IFtdLFxuXHQgICAgcHJvZ3JhbTogZnVuY3Rpb24gcHJvZ3JhbShpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgICAgIHZhciBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG5cdCAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG5cdCAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG5cdCAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG5cdCAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcblx0ICAgIH0sXG5cblx0ICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEodmFsdWUsIGRlcHRoKSB7XG5cdCAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG5cdCAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB2YWx1ZTtcblx0ICAgIH0sXG5cdCAgICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UocGFyYW0sIGNvbW1vbikge1xuXHQgICAgICB2YXIgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG5cdCAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgcGFyYW0gIT09IGNvbW1vbikge1xuXHQgICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gb2JqO1xuXHQgICAgfSxcblx0ICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcblx0ICAgIG51bGxDb250ZXh0OiBfT2JqZWN0JHNlYWwoe30pLFxuXG5cdCAgICBub29wOiBlbnYuVk0ubm9vcCxcblx0ICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG5cdCAgfTtcblxuXHQgIGZ1bmN0aW9uIHJldChjb250ZXh0KSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuXHQgICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcblx0ICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG5cdCAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcblx0ICAgIH1cblx0ICAgIHZhciBkZXB0aHMgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG5cdCAgICAgIGlmIChvcHRpb25zLmRlcHRocykge1xuXHQgICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xuXHQgICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgICAgfVxuXHQgICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cdCAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICB9XG5cdCAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuXHQgIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHQgICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcblx0ICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cblx0ICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG5cdCAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5kZWNvcmF0b3JzLCBlbnYuZGVjb3JhdG9ycyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuXHQgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuXHQgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICB9O1xuXHQgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgZnVuY3Rpb24gcHJvZyhjb250ZXh0KSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICB2YXIgY3VycmVudERlcHRocyA9IGRlcHRocztcblx0ICAgIGlmIChkZXB0aHMgJiYgY29udGV4dCAhPSBkZXB0aHNbMF0gJiYgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKSkge1xuXHQgICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZm4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksIGN1cnJlbnREZXB0aHMpO1xuXHQgIH1cblxuXHQgIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuXHQgIHByb2cucHJvZ3JhbSA9IGk7XG5cdCAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuXHQgIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG5cdCAgcmV0dXJuIHByb2c7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgaWYgKCFwYXJ0aWFsKSB7XG5cdCAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG5cdCAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcblx0ICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuXHQgICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcblx0ICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuXHQgIH1cblx0ICByZXR1cm4gcGFydGlhbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcblx0ICB2YXIgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcblx0ICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuXHQgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuXHQgIH1cblxuXHQgIHZhciBwYXJ0aWFsQmxvY2sgPSB1bmRlZmluZWQ7XG5cdCAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuXHQgICAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXHQgICAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoY29udGV4dCkge1xuXHQgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG5cdCAgICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG5cdCAgICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG5cdCAgICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICB9O1xuXHQgICAgICBpZiAoZm4ucGFydGlhbHMpIHtcblx0ICAgICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG5cdCAgICAgIH1cblx0ICAgIH0pKCk7XG5cdCAgfVxuXG5cdCAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcblx0ICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG5cdCAgfVxuXG5cdCAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuXHQgIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdCAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBub29wKCkge1xuXHQgIHJldHVybiAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcblx0ICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcblx0ICAgIGRhdGEgPSBkYXRhID8gX2Jhc2UuY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcblx0ICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG5cdCAgfVxuXHQgIHJldHVybiBkYXRhO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuXHQgIGlmIChmbi5kZWNvcmF0b3IpIHtcblx0ICAgIHZhciBwcm9wcyA9IHt9O1xuXHQgICAgcHJvZyA9IGZuLmRlY29yYXRvcihwcm9nLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aHMgJiYgZGVwdGhzWzBdLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG5cdCAgfVxuXHQgIHJldHVybiBwcm9nO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IF9fd2VicGFja19yZXF1aXJlX18oMjQpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKS5PYmplY3Quc2VhbDtcblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xNyBPYmplY3Quc2VhbChPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gc2VhbChpdCl7XG5cdCAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwoaXQpIDogaXQ7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIGNvcmUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgZmFpbHMgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG5cdCAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuXHQgICAgLCBleHAgPSB7fTtcblx0ICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuXHQgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAyOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KVxuXHQgICwgY29yZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGN0eCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpXG5cdCAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuXHR2YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG5cdCAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcblx0ICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuXHQgICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG5cdCAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcblx0ICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuXHQgICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG5cdCAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG5cdCAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cblx0ICAgICwga2V5LCBvd24sIG91dDtcblx0ICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcblx0ICBmb3Ioa2V5IGluIHNvdXJjZSl7XG5cdCAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcblx0ICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG5cdCAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG5cdCAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuXHQgICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcblx0ICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuXHQgICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cblx0ICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG5cdCAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuXHQgICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcblx0ICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG5cdCAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuXHQgICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuXHQgICAgICB9O1xuXHQgICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG5cdCAgICAgIHJldHVybiBGO1xuXHQgICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG5cdCAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG5cdCAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG5cdCAgfVxuXHR9O1xuXHQvLyB0eXBlIGJpdG1hcFxuXHQkZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG5cdCRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcblx0JGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuXHQkZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cblx0JGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcblx0JGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcblx0bW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcblx0dmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG5cdCAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHRpZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9KSxcbi8qIDMwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcblx0aWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0pLFxuLyogMzEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcblx0dmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuXHQgIGFGdW5jdGlvbihmbik7XG5cdCAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcblx0ICBzd2l0Y2gobGVuZ3RoKXtcblx0ICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuXHQgICAgfTtcblx0ICB9XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDMzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuICEhZXhlYygpO1xuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoSGFuZGxlYmFycykge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyxcblx0ICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBIYW5kbGViYXJzLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG5cdCAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIEhhbmRsZWJhcnM7XG5cdCAgfTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9KSxcbi8qIDM1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdHZhciBBU1QgPSB7XG5cdCAgLy8gUHVibGljIEFQSSB1c2VkIHRvIGV2YWx1YXRlIGRlcml2ZWQgYXR0cmlidXRlcyByZWdhcmRpbmcgQVNUIG5vZGVzXG5cdCAgaGVscGVyczoge1xuXHQgICAgLy8gYSBtdXN0YWNoZSBpcyBkZWZpbml0ZWx5IGEgaGVscGVyIGlmOlxuXHQgICAgLy8gKiBpdCBpcyBhbiBlbGlnaWJsZSBoZWxwZXIsIGFuZFxuXHQgICAgLy8gKiBpdCBoYXMgYXQgbGVhc3Qgb25lIHBhcmFtZXRlciBvciBoYXNoIHNlZ21lbnRcblx0ICAgIGhlbHBlckV4cHJlc3Npb246IGZ1bmN0aW9uIGhlbHBlckV4cHJlc3Npb24obm9kZSkge1xuXHQgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnU3ViRXhwcmVzc2lvbicgfHwgKG5vZGUudHlwZSA9PT0gJ011c3RhY2hlU3RhdGVtZW50JyB8fCBub2RlLnR5cGUgPT09ICdCbG9ja1N0YXRlbWVudCcpICYmICEhKG5vZGUucGFyYW1zICYmIG5vZGUucGFyYW1zLmxlbmd0aCB8fCBub2RlLmhhc2gpO1xuXHQgICAgfSxcblxuXHQgICAgc2NvcGVkSWQ6IGZ1bmN0aW9uIHNjb3BlZElkKHBhdGgpIHtcblx0ICAgICAgcmV0dXJuICgvXlxcLnx0aGlzXFxiLy50ZXN0KHBhdGgub3JpZ2luYWwpXG5cdCAgICAgICk7XG5cdCAgICB9LFxuXG5cdCAgICAvLyBhbiBJRCBpcyBzaW1wbGUgaWYgaXQgb25seSBoYXMgb25lIHBhcnQsIGFuZCB0aGF0IHBhcnQgaXMgbm90XG5cdCAgICAvLyBgLi5gIG9yIGB0aGlzYC5cblx0ICAgIHNpbXBsZUlkOiBmdW5jdGlvbiBzaW1wbGVJZChwYXRoKSB7XG5cdCAgICAgIHJldHVybiBwYXRoLnBhcnRzLmxlbmd0aCA9PT0gMSAmJiAhQVNULmhlbHBlcnMuc2NvcGVkSWQocGF0aCkgJiYgIXBhdGguZGVwdGg7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdC8vIE11c3QgYmUgZXhwb3J0ZWQgYXMgYW4gb2JqZWN0IHJhdGhlciB0aGFuIHRoZSByb290IG9mIHRoZSBtb2R1bGUgYXMgdGhlIGppc29uIGxleGVyXG5cdC8vIG11c3QgbW9kaWZ5IHRoZSBvYmplY3QgdG8gb3BlcmF0ZSBwcm9wZXJseS5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQVNUO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG5cdHZhciBfcGFyc2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cblx0dmFyIF9wYXJzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VyKTtcblxuXHR2YXIgX3doaXRlc3BhY2VDb250cm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCk7XG5cblx0dmFyIF93aGl0ZXNwYWNlQ29udHJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aGl0ZXNwYWNlQ29udHJvbCk7XG5cblx0dmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG5cblx0dmFyIEhlbHBlcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGVscGVycyk7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0cy5wYXJzZXIgPSBfcGFyc2VyMlsnZGVmYXVsdCddO1xuXG5cdHZhciB5eSA9IHt9O1xuXHRfdXRpbHMuZXh0ZW5kKHl5LCBIZWxwZXJzKTtcblxuXHRmdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuXHQgIC8vIEp1c3QgcmV0dXJuIGlmIGFuIGFscmVhZHktY29tcGlsZWQgQVNUIHdhcyBwYXNzZWQgaW4uXG5cdCAgaWYgKGlucHV0LnR5cGUgPT09ICdQcm9ncmFtJykge1xuXHQgICAgcmV0dXJuIGlucHV0O1xuXHQgIH1cblxuXHQgIF9wYXJzZXIyWydkZWZhdWx0J10ueXkgPSB5eTtcblxuXHQgIC8vIEFsdGVyaW5nIHRoZSBzaGFyZWQgb2JqZWN0IGhlcmUsIGJ1dCB0aGlzIGlzIG9rIGFzIHBhcnNlciBpcyBhIHN5bmMgb3BlcmF0aW9uXG5cdCAgeXkubG9jSW5mbyA9IGZ1bmN0aW9uIChsb2NJbmZvKSB7XG5cdCAgICByZXR1cm4gbmV3IHl5LlNvdXJjZUxvY2F0aW9uKG9wdGlvbnMgJiYgb3B0aW9ucy5zcmNOYW1lLCBsb2NJbmZvKTtcblx0ICB9O1xuXG5cdCAgdmFyIHN0cmlwID0gbmV3IF93aGl0ZXNwYWNlQ29udHJvbDJbJ2RlZmF1bHQnXShvcHRpb25zKTtcblx0ICByZXR1cm4gc3RyaXAuYWNjZXB0KF9wYXJzZXIyWydkZWZhdWx0J10ucGFyc2UoaW5wdXQpKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDM3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gRmlsZSBpZ25vcmVkIGluIGNvdmVyYWdlIHRlc3RzIHZpYSBzZXR0aW5nIGluIC5pc3RhbmJ1bC55bWxcblx0LyogSmlzb24gZ2VuZXJhdGVkIHBhcnNlciAqL1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHR2YXIgaGFuZGxlYmFycyA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgcGFyc2VyID0geyB0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7fSxcblx0ICAgICAgICB5eToge30sXG5cdCAgICAgICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInJvb3RcIjogMywgXCJwcm9ncmFtXCI6IDQsIFwiRU9GXCI6IDUsIFwicHJvZ3JhbV9yZXBldGl0aW9uMFwiOiA2LCBcInN0YXRlbWVudFwiOiA3LCBcIm11c3RhY2hlXCI6IDgsIFwiYmxvY2tcIjogOSwgXCJyYXdCbG9ja1wiOiAxMCwgXCJwYXJ0aWFsXCI6IDExLCBcInBhcnRpYWxCbG9ja1wiOiAxMiwgXCJjb250ZW50XCI6IDEzLCBcIkNPTU1FTlRcIjogMTQsIFwiQ09OVEVOVFwiOiAxNSwgXCJvcGVuUmF3QmxvY2tcIjogMTYsIFwicmF3QmxvY2tfcmVwZXRpdGlvbl9wbHVzMFwiOiAxNywgXCJFTkRfUkFXX0JMT0NLXCI6IDE4LCBcIk9QRU5fUkFXX0JMT0NLXCI6IDE5LCBcImhlbHBlck5hbWVcIjogMjAsIFwib3BlblJhd0Jsb2NrX3JlcGV0aXRpb24wXCI6IDIxLCBcIm9wZW5SYXdCbG9ja19vcHRpb24wXCI6IDIyLCBcIkNMT1NFX1JBV19CTE9DS1wiOiAyMywgXCJvcGVuQmxvY2tcIjogMjQsIFwiYmxvY2tfb3B0aW9uMFwiOiAyNSwgXCJjbG9zZUJsb2NrXCI6IDI2LCBcIm9wZW5JbnZlcnNlXCI6IDI3LCBcImJsb2NrX29wdGlvbjFcIjogMjgsIFwiT1BFTl9CTE9DS1wiOiAyOSwgXCJvcGVuQmxvY2tfcmVwZXRpdGlvbjBcIjogMzAsIFwib3BlbkJsb2NrX29wdGlvbjBcIjogMzEsIFwib3BlbkJsb2NrX29wdGlvbjFcIjogMzIsIFwiQ0xPU0VcIjogMzMsIFwiT1BFTl9JTlZFUlNFXCI6IDM0LCBcIm9wZW5JbnZlcnNlX3JlcGV0aXRpb24wXCI6IDM1LCBcIm9wZW5JbnZlcnNlX29wdGlvbjBcIjogMzYsIFwib3BlbkludmVyc2Vfb3B0aW9uMVwiOiAzNywgXCJvcGVuSW52ZXJzZUNoYWluXCI6IDM4LCBcIk9QRU5fSU5WRVJTRV9DSEFJTlwiOiAzOSwgXCJvcGVuSW52ZXJzZUNoYWluX3JlcGV0aXRpb24wXCI6IDQwLCBcIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOiA0MSwgXCJvcGVuSW52ZXJzZUNoYWluX29wdGlvbjFcIjogNDIsIFwiaW52ZXJzZUFuZFByb2dyYW1cIjogNDMsIFwiSU5WRVJTRVwiOiA0NCwgXCJpbnZlcnNlQ2hhaW5cIjogNDUsIFwiaW52ZXJzZUNoYWluX29wdGlvbjBcIjogNDYsIFwiT1BFTl9FTkRCTE9DS1wiOiA0NywgXCJPUEVOXCI6IDQ4LCBcIm11c3RhY2hlX3JlcGV0aXRpb24wXCI6IDQ5LCBcIm11c3RhY2hlX29wdGlvbjBcIjogNTAsIFwiT1BFTl9VTkVTQ0FQRURcIjogNTEsIFwibXVzdGFjaGVfcmVwZXRpdGlvbjFcIjogNTIsIFwibXVzdGFjaGVfb3B0aW9uMVwiOiA1MywgXCJDTE9TRV9VTkVTQ0FQRURcIjogNTQsIFwiT1BFTl9QQVJUSUFMXCI6IDU1LCBcInBhcnRpYWxOYW1lXCI6IDU2LCBcInBhcnRpYWxfcmVwZXRpdGlvbjBcIjogNTcsIFwicGFydGlhbF9vcHRpb24wXCI6IDU4LCBcIm9wZW5QYXJ0aWFsQmxvY2tcIjogNTksIFwiT1BFTl9QQVJUSUFMX0JMT0NLXCI6IDYwLCBcIm9wZW5QYXJ0aWFsQmxvY2tfcmVwZXRpdGlvbjBcIjogNjEsIFwib3BlblBhcnRpYWxCbG9ja19vcHRpb24wXCI6IDYyLCBcInBhcmFtXCI6IDYzLCBcInNleHByXCI6IDY0LCBcIk9QRU5fU0VYUFJcIjogNjUsIFwic2V4cHJfcmVwZXRpdGlvbjBcIjogNjYsIFwic2V4cHJfb3B0aW9uMFwiOiA2NywgXCJDTE9TRV9TRVhQUlwiOiA2OCwgXCJoYXNoXCI6IDY5LCBcImhhc2hfcmVwZXRpdGlvbl9wbHVzMFwiOiA3MCwgXCJoYXNoU2VnbWVudFwiOiA3MSwgXCJJRFwiOiA3MiwgXCJFUVVBTFNcIjogNzMsIFwiYmxvY2tQYXJhbXNcIjogNzQsIFwiT1BFTl9CTE9DS19QQVJBTVNcIjogNzUsIFwiYmxvY2tQYXJhbXNfcmVwZXRpdGlvbl9wbHVzMFwiOiA3NiwgXCJDTE9TRV9CTE9DS19QQVJBTVNcIjogNzcsIFwicGF0aFwiOiA3OCwgXCJkYXRhTmFtZVwiOiA3OSwgXCJTVFJJTkdcIjogODAsIFwiTlVNQkVSXCI6IDgxLCBcIkJPT0xFQU5cIjogODIsIFwiVU5ERUZJTkVEXCI6IDgzLCBcIk5VTExcIjogODQsIFwiREFUQVwiOiA4NSwgXCJwYXRoU2VnbWVudHNcIjogODYsIFwiU0VQXCI6IDg3LCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcblx0ICAgICAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNTogXCJFT0ZcIiwgMTQ6IFwiQ09NTUVOVFwiLCAxNTogXCJDT05URU5UXCIsIDE4OiBcIkVORF9SQVdfQkxPQ0tcIiwgMTk6IFwiT1BFTl9SQVdfQkxPQ0tcIiwgMjM6IFwiQ0xPU0VfUkFXX0JMT0NLXCIsIDI5OiBcIk9QRU5fQkxPQ0tcIiwgMzM6IFwiQ0xPU0VcIiwgMzQ6IFwiT1BFTl9JTlZFUlNFXCIsIDM5OiBcIk9QRU5fSU5WRVJTRV9DSEFJTlwiLCA0NDogXCJJTlZFUlNFXCIsIDQ3OiBcIk9QRU5fRU5EQkxPQ0tcIiwgNDg6IFwiT1BFTlwiLCA1MTogXCJPUEVOX1VORVNDQVBFRFwiLCA1NDogXCJDTE9TRV9VTkVTQ0FQRURcIiwgNTU6IFwiT1BFTl9QQVJUSUFMXCIsIDYwOiBcIk9QRU5fUEFSVElBTF9CTE9DS1wiLCA2NTogXCJPUEVOX1NFWFBSXCIsIDY4OiBcIkNMT1NFX1NFWFBSXCIsIDcyOiBcIklEXCIsIDczOiBcIkVRVUFMU1wiLCA3NTogXCJPUEVOX0JMT0NLX1BBUkFNU1wiLCA3NzogXCJDTE9TRV9CTE9DS19QQVJBTVNcIiwgODA6IFwiU1RSSU5HXCIsIDgxOiBcIk5VTUJFUlwiLCA4MjogXCJCT09MRUFOXCIsIDgzOiBcIlVOREVGSU5FRFwiLCA4NDogXCJOVUxMXCIsIDg1OiBcIkRBVEFcIiwgODc6IFwiU0VQXCIgfSxcblx0ICAgICAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMl0sIFs0LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbMTMsIDFdLCBbMTAsIDNdLCBbMTYsIDVdLCBbOSwgNF0sIFs5LCA0XSwgWzI0LCA2XSwgWzI3LCA2XSwgWzM4LCA2XSwgWzQzLCAyXSwgWzQ1LCAzXSwgWzQ1LCAxXSwgWzI2LCAzXSwgWzgsIDVdLCBbOCwgNV0sIFsxMSwgNV0sIFsxMiwgM10sIFs1OSwgNV0sIFs2MywgMV0sIFs2MywgMV0sIFs2NCwgNV0sIFs2OSwgMV0sIFs3MSwgM10sIFs3NCwgM10sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFs1NiwgMV0sIFs1NiwgMV0sIFs3OSwgMl0sIFs3OCwgMV0sIFs4NiwgM10sIFs4NiwgMV0sIFs2LCAwXSwgWzYsIDJdLCBbMTcsIDFdLCBbMTcsIDJdLCBbMjEsIDBdLCBbMjEsIDJdLCBbMjIsIDBdLCBbMjIsIDFdLCBbMjUsIDBdLCBbMjUsIDFdLCBbMjgsIDBdLCBbMjgsIDFdLCBbMzAsIDBdLCBbMzAsIDJdLCBbMzEsIDBdLCBbMzEsIDFdLCBbMzIsIDBdLCBbMzIsIDFdLCBbMzUsIDBdLCBbMzUsIDJdLCBbMzYsIDBdLCBbMzYsIDFdLCBbMzcsIDBdLCBbMzcsIDFdLCBbNDAsIDBdLCBbNDAsIDJdLCBbNDEsIDBdLCBbNDEsIDFdLCBbNDIsIDBdLCBbNDIsIDFdLCBbNDYsIDBdLCBbNDYsIDFdLCBbNDksIDBdLCBbNDksIDJdLCBbNTAsIDBdLCBbNTAsIDFdLCBbNTIsIDBdLCBbNTIsIDJdLCBbNTMsIDBdLCBbNTMsIDFdLCBbNTcsIDBdLCBbNTcsIDJdLCBbNTgsIDBdLCBbNTgsIDFdLCBbNjEsIDBdLCBbNjEsIDJdLCBbNjIsIDBdLCBbNjIsIDFdLCBbNjYsIDBdLCBbNjYsIDJdLCBbNjcsIDBdLCBbNjcsIDFdLCBbNzAsIDFdLCBbNzAsIDJdLCBbNzYsIDFdLCBbNzYsIDJdXSxcblx0ICAgICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG5cblx0ICAgICAgICAgICAgdmFyICQwID0gJCQubGVuZ3RoIC0gMTtcblx0ICAgICAgICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkWyQwIC0gMV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVByb2dyYW0oJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb21tZW50U3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHl5LnN0cmlwQ29tbWVudCgkJFskMF0pLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMF0sICQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ29udGVudFN0YXRlbWVudCcsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsOiAkJFskMF0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAkJFskMF0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVJhd0Jsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAzXSwgcGFyYW1zOiAkJFskMCAtIDJdLCBoYXNoOiAkJFskMCAtIDFdIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIGZhbHNlLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgdHJ1ZSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgb3BlbjogJCRbJDAgLSA1XSwgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAxXSwgJCRbJDAgLSAxXSksIHByb2dyYW06ICQkWyQwXSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxOTpcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaW52ZXJzZSA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtID0geXkucHJlcGFyZVByb2dyYW0oW2ludmVyc2VdLCAkJFskMCAtIDFdLmxvYyk7XG5cdCAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS5jaGFpbmVkID0gdHJ1ZTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgc3RyaXA6ICQkWyQwIC0gMl0uc3RyaXAsIHByb2dyYW06IHByb2dyYW0sIGNoYWluOiB0cnVlIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gMl0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVNdXN0YWNoZSgkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMCAtIDRdLCB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQYXJ0aWFsU3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJCRbJDAgLSAzXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiAkJFskMCAtIDJdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiAkJFskMCAtIDFdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpbmRlbnQ6ICcnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQYXJ0aWFsQmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDNdLCBwYXJhbXM6ICQkWyQwIC0gMl0sIGhhc2g6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1N1YkV4cHJlc3Npb24nLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAkJFskMCAtIDNdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6ICQkWyQwIC0gMV0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnSGFzaCcsIHBhaXJzOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdIYXNoUGFpcicsIGtleTogeXkuaWQoJCRbJDAgLSAyXSksIHZhbHVlOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5pZCgkJFskMCAtIDFdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ1N0cmluZ0xpdGVyYWwnLCB2YWx1ZTogJCRbJDBdLCBvcmlnaW5hbDogJCRbJDBdLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnTnVtYmVyTGl0ZXJhbCcsIHZhbHVlOiBOdW1iZXIoJCRbJDBdKSwgb3JpZ2luYWw6IE51bWJlcigkJFskMF0pLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnQm9vbGVhbkxpdGVyYWwnLCB2YWx1ZTogJCRbJDBdID09PSAndHJ1ZScsIG9yaWdpbmFsOiAkJFskMF0gPT09ICd0cnVlJywgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ1VuZGVmaW5lZExpdGVyYWwnLCBvcmlnaW5hbDogdW5kZWZpbmVkLCB2YWx1ZTogdW5kZWZpbmVkLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnTnVsbExpdGVyYWwnLCBvcmlnaW5hbDogbnVsbCwgdmFsdWU6IG51bGwsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhdGgodHJ1ZSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhdGgoZmFsc2UsICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMl0ucHVzaCh7IHBhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0sIHNlcGFyYXRvcjogJCRbJDAgLSAxXSB9KTt0aGlzLiQgPSAkJFskMCAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0NTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbeyBwYXJ0OiB5eS5pZCgkJFskMF0pLCBvcmlnaW5hbDogJCRbJDBdIH1dO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Njpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDc6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDUxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2NTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDcxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDgyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Mzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg3OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5NTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgdGFibGU6IFt7IDM6IDEsIDQ6IDIsIDU6IFsyLCA0Nl0sIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyAxOiBbM10gfSwgeyA1OiBbMSwgNF0gfSwgeyA1OiBbMiwgMl0sIDc6IDUsIDg6IDYsIDk6IDcsIDEwOiA4LCAxMTogOSwgMTI6IDEwLCAxMzogMTEsIDE0OiBbMSwgMTJdLCAxNTogWzEsIDIwXSwgMTY6IDE3LCAxOTogWzEsIDIzXSwgMjQ6IDE1LCAyNzogMTYsIDI5OiBbMSwgMjFdLCAzNDogWzEsIDIyXSwgMzk6IFsyLCAyXSwgNDQ6IFsyLCAyXSwgNDc6IFsyLCAyXSwgNDg6IFsxLCAxM10sIDUxOiBbMSwgMTRdLCA1NTogWzEsIDE4XSwgNTk6IDE5LCA2MDogWzEsIDI0XSB9LCB7IDE6IFsyLCAxXSB9LCB7IDU6IFsyLCA0N10sIDE0OiBbMiwgNDddLCAxNTogWzIsIDQ3XSwgMTk6IFsyLCA0N10sIDI5OiBbMiwgNDddLCAzNDogWzIsIDQ3XSwgMzk6IFsyLCA0N10sIDQ0OiBbMiwgNDddLCA0NzogWzIsIDQ3XSwgNDg6IFsyLCA0N10sIDUxOiBbMiwgNDddLCA1NTogWzIsIDQ3XSwgNjA6IFsyLCA0N10gfSwgeyA1OiBbMiwgM10sIDE0OiBbMiwgM10sIDE1OiBbMiwgM10sIDE5OiBbMiwgM10sIDI5OiBbMiwgM10sIDM0OiBbMiwgM10sIDM5OiBbMiwgM10sIDQ0OiBbMiwgM10sIDQ3OiBbMiwgM10sIDQ4OiBbMiwgM10sIDUxOiBbMiwgM10sIDU1OiBbMiwgM10sIDYwOiBbMiwgM10gfSwgeyA1OiBbMiwgNF0sIDE0OiBbMiwgNF0sIDE1OiBbMiwgNF0sIDE5OiBbMiwgNF0sIDI5OiBbMiwgNF0sIDM0OiBbMiwgNF0sIDM5OiBbMiwgNF0sIDQ0OiBbMiwgNF0sIDQ3OiBbMiwgNF0sIDQ4OiBbMiwgNF0sIDUxOiBbMiwgNF0sIDU1OiBbMiwgNF0sIDYwOiBbMiwgNF0gfSwgeyA1OiBbMiwgNV0sIDE0OiBbMiwgNV0sIDE1OiBbMiwgNV0sIDE5OiBbMiwgNV0sIDI5OiBbMiwgNV0sIDM0OiBbMiwgNV0sIDM5OiBbMiwgNV0sIDQ0OiBbMiwgNV0sIDQ3OiBbMiwgNV0sIDQ4OiBbMiwgNV0sIDUxOiBbMiwgNV0sIDU1OiBbMiwgNV0sIDYwOiBbMiwgNV0gfSwgeyA1OiBbMiwgNl0sIDE0OiBbMiwgNl0sIDE1OiBbMiwgNl0sIDE5OiBbMiwgNl0sIDI5OiBbMiwgNl0sIDM0OiBbMiwgNl0sIDM5OiBbMiwgNl0sIDQ0OiBbMiwgNl0sIDQ3OiBbMiwgNl0sIDQ4OiBbMiwgNl0sIDUxOiBbMiwgNl0sIDU1OiBbMiwgNl0sIDYwOiBbMiwgNl0gfSwgeyA1OiBbMiwgN10sIDE0OiBbMiwgN10sIDE1OiBbMiwgN10sIDE5OiBbMiwgN10sIDI5OiBbMiwgN10sIDM0OiBbMiwgN10sIDM5OiBbMiwgN10sIDQ0OiBbMiwgN10sIDQ3OiBbMiwgN10sIDQ4OiBbMiwgN10sIDUxOiBbMiwgN10sIDU1OiBbMiwgN10sIDYwOiBbMiwgN10gfSwgeyA1OiBbMiwgOF0sIDE0OiBbMiwgOF0sIDE1OiBbMiwgOF0sIDE5OiBbMiwgOF0sIDI5OiBbMiwgOF0sIDM0OiBbMiwgOF0sIDM5OiBbMiwgOF0sIDQ0OiBbMiwgOF0sIDQ3OiBbMiwgOF0sIDQ4OiBbMiwgOF0sIDUxOiBbMiwgOF0sIDU1OiBbMiwgOF0sIDYwOiBbMiwgOF0gfSwgeyA1OiBbMiwgOV0sIDE0OiBbMiwgOV0sIDE1OiBbMiwgOV0sIDE5OiBbMiwgOV0sIDI5OiBbMiwgOV0sIDM0OiBbMiwgOV0sIDM5OiBbMiwgOV0sIDQ0OiBbMiwgOV0sIDQ3OiBbMiwgOV0sIDQ4OiBbMiwgOV0sIDUxOiBbMiwgOV0sIDU1OiBbMiwgOV0sIDYwOiBbMiwgOV0gfSwgeyAyMDogMjUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDM2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDM3LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDogMzgsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDEzOiA0MCwgMTU6IFsxLCAyMF0sIDE3OiAzOSB9LCB7IDIwOiA0MiwgNTY6IDQxLCA2NDogNDMsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDQ1LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDU6IFsyLCAxMF0sIDE0OiBbMiwgMTBdLCAxNTogWzIsIDEwXSwgMTg6IFsyLCAxMF0sIDE5OiBbMiwgMTBdLCAyOTogWzIsIDEwXSwgMzQ6IFsyLCAxMF0sIDM5OiBbMiwgMTBdLCA0NDogWzIsIDEwXSwgNDc6IFsyLCAxMF0sIDQ4OiBbMiwgMTBdLCA1MTogWzIsIDEwXSwgNTU6IFsyLCAxMF0sIDYwOiBbMiwgMTBdIH0sIHsgMjA6IDQ2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0NywgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDgsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQyLCA1NjogNDksIDY0OiA0MywgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsyLCA3OF0sIDQ5OiA1MCwgNjU6IFsyLCA3OF0sIDcyOiBbMiwgNzhdLCA4MDogWzIsIDc4XSwgODE6IFsyLCA3OF0sIDgyOiBbMiwgNzhdLCA4MzogWzIsIDc4XSwgODQ6IFsyLCA3OF0sIDg1OiBbMiwgNzhdIH0sIHsgMjM6IFsyLCAzM10sIDMzOiBbMiwgMzNdLCA1NDogWzIsIDMzXSwgNjU6IFsyLCAzM10sIDY4OiBbMiwgMzNdLCA3MjogWzIsIDMzXSwgNzU6IFsyLCAzM10sIDgwOiBbMiwgMzNdLCA4MTogWzIsIDMzXSwgODI6IFsyLCAzM10sIDgzOiBbMiwgMzNdLCA4NDogWzIsIDMzXSwgODU6IFsyLCAzM10gfSwgeyAyMzogWzIsIDM0XSwgMzM6IFsyLCAzNF0sIDU0OiBbMiwgMzRdLCA2NTogWzIsIDM0XSwgNjg6IFsyLCAzNF0sIDcyOiBbMiwgMzRdLCA3NTogWzIsIDM0XSwgODA6IFsyLCAzNF0sIDgxOiBbMiwgMzRdLCA4MjogWzIsIDM0XSwgODM6IFsyLCAzNF0sIDg0OiBbMiwgMzRdLCA4NTogWzIsIDM0XSB9LCB7IDIzOiBbMiwgMzVdLCAzMzogWzIsIDM1XSwgNTQ6IFsyLCAzNV0sIDY1OiBbMiwgMzVdLCA2ODogWzIsIDM1XSwgNzI6IFsyLCAzNV0sIDc1OiBbMiwgMzVdLCA4MDogWzIsIDM1XSwgODE6IFsyLCAzNV0sIDgyOiBbMiwgMzVdLCA4MzogWzIsIDM1XSwgODQ6IFsyLCAzNV0sIDg1OiBbMiwgMzVdIH0sIHsgMjM6IFsyLCAzNl0sIDMzOiBbMiwgMzZdLCA1NDogWzIsIDM2XSwgNjU6IFsyLCAzNl0sIDY4OiBbMiwgMzZdLCA3MjogWzIsIDM2XSwgNzU6IFsyLCAzNl0sIDgwOiBbMiwgMzZdLCA4MTogWzIsIDM2XSwgODI6IFsyLCAzNl0sIDgzOiBbMiwgMzZdLCA4NDogWzIsIDM2XSwgODU6IFsyLCAzNl0gfSwgeyAyMzogWzIsIDM3XSwgMzM6IFsyLCAzN10sIDU0OiBbMiwgMzddLCA2NTogWzIsIDM3XSwgNjg6IFsyLCAzN10sIDcyOiBbMiwgMzddLCA3NTogWzIsIDM3XSwgODA6IFsyLCAzN10sIDgxOiBbMiwgMzddLCA4MjogWzIsIDM3XSwgODM6IFsyLCAzN10sIDg0OiBbMiwgMzddLCA4NTogWzIsIDM3XSB9LCB7IDIzOiBbMiwgMzhdLCAzMzogWzIsIDM4XSwgNTQ6IFsyLCAzOF0sIDY1OiBbMiwgMzhdLCA2ODogWzIsIDM4XSwgNzI6IFsyLCAzOF0sIDc1OiBbMiwgMzhdLCA4MDogWzIsIDM4XSwgODE6IFsyLCAzOF0sIDgyOiBbMiwgMzhdLCA4MzogWzIsIDM4XSwgODQ6IFsyLCAzOF0sIDg1OiBbMiwgMzhdIH0sIHsgMjM6IFsyLCAzOV0sIDMzOiBbMiwgMzldLCA1NDogWzIsIDM5XSwgNjU6IFsyLCAzOV0sIDY4OiBbMiwgMzldLCA3MjogWzIsIDM5XSwgNzU6IFsyLCAzOV0sIDgwOiBbMiwgMzldLCA4MTogWzIsIDM5XSwgODI6IFsyLCAzOV0sIDgzOiBbMiwgMzldLCA4NDogWzIsIDM5XSwgODU6IFsyLCAzOV0gfSwgeyAyMzogWzIsIDQzXSwgMzM6IFsyLCA0M10sIDU0OiBbMiwgNDNdLCA2NTogWzIsIDQzXSwgNjg6IFsyLCA0M10sIDcyOiBbMiwgNDNdLCA3NTogWzIsIDQzXSwgODA6IFsyLCA0M10sIDgxOiBbMiwgNDNdLCA4MjogWzIsIDQzXSwgODM6IFsyLCA0M10sIDg0OiBbMiwgNDNdLCA4NTogWzIsIDQzXSwgODc6IFsxLCA1MV0gfSwgeyA3MjogWzEsIDM1XSwgODY6IDUyIH0sIHsgMjM6IFsyLCA0NV0sIDMzOiBbMiwgNDVdLCA1NDogWzIsIDQ1XSwgNjU6IFsyLCA0NV0sIDY4OiBbMiwgNDVdLCA3MjogWzIsIDQ1XSwgNzU6IFsyLCA0NV0sIDgwOiBbMiwgNDVdLCA4MTogWzIsIDQ1XSwgODI6IFsyLCA0NV0sIDgzOiBbMiwgNDVdLCA4NDogWzIsIDQ1XSwgODU6IFsyLCA0NV0sIDg3OiBbMiwgNDVdIH0sIHsgNTI6IDUzLCA1NDogWzIsIDgyXSwgNjU6IFsyLCA4Ml0sIDcyOiBbMiwgODJdLCA4MDogWzIsIDgyXSwgODE6IFsyLCA4Ml0sIDgyOiBbMiwgODJdLCA4MzogWzIsIDgyXSwgODQ6IFsyLCA4Ml0sIDg1OiBbMiwgODJdIH0sIHsgMjU6IDU0LCAzODogNTYsIDM5OiBbMSwgNThdLCA0MzogNTcsIDQ0OiBbMSwgNTldLCA0NTogNTUsIDQ3OiBbMiwgNTRdIH0sIHsgMjg6IDYwLCA0MzogNjEsIDQ0OiBbMSwgNTldLCA0NzogWzIsIDU2XSB9LCB7IDEzOiA2MywgMTU6IFsxLCAyMF0sIDE4OiBbMSwgNjJdIH0sIHsgMTU6IFsyLCA0OF0sIDE4OiBbMiwgNDhdIH0sIHsgMzM6IFsyLCA4Nl0sIDU3OiA2NCwgNjU6IFsyLCA4Nl0sIDcyOiBbMiwgODZdLCA4MDogWzIsIDg2XSwgODE6IFsyLCA4Nl0sIDgyOiBbMiwgODZdLCA4MzogWzIsIDg2XSwgODQ6IFsyLCA4Nl0sIDg1OiBbMiwgODZdIH0sIHsgMzM6IFsyLCA0MF0sIDY1OiBbMiwgNDBdLCA3MjogWzIsIDQwXSwgODA6IFsyLCA0MF0sIDgxOiBbMiwgNDBdLCA4MjogWzIsIDQwXSwgODM6IFsyLCA0MF0sIDg0OiBbMiwgNDBdLCA4NTogWzIsIDQwXSB9LCB7IDMzOiBbMiwgNDFdLCA2NTogWzIsIDQxXSwgNzI6IFsyLCA0MV0sIDgwOiBbMiwgNDFdLCA4MTogWzIsIDQxXSwgODI6IFsyLCA0MV0sIDgzOiBbMiwgNDFdLCA4NDogWzIsIDQxXSwgODU6IFsyLCA0MV0gfSwgeyAyMDogNjUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjY6IDY2LCA0NzogWzEsIDY3XSB9LCB7IDMwOiA2OCwgMzM6IFsyLCA1OF0sIDY1OiBbMiwgNThdLCA3MjogWzIsIDU4XSwgNzU6IFsyLCA1OF0sIDgwOiBbMiwgNThdLCA4MTogWzIsIDU4XSwgODI6IFsyLCA1OF0sIDgzOiBbMiwgNThdLCA4NDogWzIsIDU4XSwgODU6IFsyLCA1OF0gfSwgeyAzMzogWzIsIDY0XSwgMzU6IDY5LCA2NTogWzIsIDY0XSwgNzI6IFsyLCA2NF0sIDc1OiBbMiwgNjRdLCA4MDogWzIsIDY0XSwgODE6IFsyLCA2NF0sIDgyOiBbMiwgNjRdLCA4MzogWzIsIDY0XSwgODQ6IFsyLCA2NF0sIDg1OiBbMiwgNjRdIH0sIHsgMjE6IDcwLCAyMzogWzIsIDUwXSwgNjU6IFsyLCA1MF0sIDcyOiBbMiwgNTBdLCA4MDogWzIsIDUwXSwgODE6IFsyLCA1MF0sIDgyOiBbMiwgNTBdLCA4MzogWzIsIDUwXSwgODQ6IFsyLCA1MF0sIDg1OiBbMiwgNTBdIH0sIHsgMzM6IFsyLCA5MF0sIDYxOiA3MSwgNjU6IFsyLCA5MF0sIDcyOiBbMiwgOTBdLCA4MDogWzIsIDkwXSwgODE6IFsyLCA5MF0sIDgyOiBbMiwgOTBdLCA4MzogWzIsIDkwXSwgODQ6IFsyLCA5MF0sIDg1OiBbMiwgOTBdIH0sIHsgMjA6IDc1LCAzMzogWzIsIDgwXSwgNTA6IDcyLCA2MzogNzMsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA3NCwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNzI6IFsxLCA4MF0gfSwgeyAyMzogWzIsIDQyXSwgMzM6IFsyLCA0Ml0sIDU0OiBbMiwgNDJdLCA2NTogWzIsIDQyXSwgNjg6IFsyLCA0Ml0sIDcyOiBbMiwgNDJdLCA3NTogWzIsIDQyXSwgODA6IFsyLCA0Ml0sIDgxOiBbMiwgNDJdLCA4MjogWzIsIDQyXSwgODM6IFsyLCA0Ml0sIDg0OiBbMiwgNDJdLCA4NTogWzIsIDQyXSwgODc6IFsxLCA1MV0gfSwgeyAyMDogNzUsIDUzOiA4MSwgNTQ6IFsyLCA4NF0sIDYzOiA4MiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDgzLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogODQsIDQ3OiBbMSwgNjddIH0sIHsgNDc6IFsyLCA1NV0gfSwgeyA0OiA4NSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCAzOTogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDQ3OiBbMiwgMjBdIH0sIHsgMjA6IDg2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDg3LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDI2OiA4OCwgNDc6IFsxLCA2N10gfSwgeyA0NzogWzIsIDU3XSB9LCB7IDU6IFsyLCAxMV0sIDE0OiBbMiwgMTFdLCAxNTogWzIsIDExXSwgMTk6IFsyLCAxMV0sIDI5OiBbMiwgMTFdLCAzNDogWzIsIDExXSwgMzk6IFsyLCAxMV0sIDQ0OiBbMiwgMTFdLCA0NzogWzIsIDExXSwgNDg6IFsyLCAxMV0sIDUxOiBbMiwgMTFdLCA1NTogWzIsIDExXSwgNjA6IFsyLCAxMV0gfSwgeyAxNTogWzIsIDQ5XSwgMTg6IFsyLCA0OV0gfSwgeyAyMDogNzUsIDMzOiBbMiwgODhdLCA1ODogODksIDYzOiA5MCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDkxLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA2NTogWzIsIDk0XSwgNjY6IDkyLCA2ODogWzIsIDk0XSwgNzI6IFsyLCA5NF0sIDgwOiBbMiwgOTRdLCA4MTogWzIsIDk0XSwgODI6IFsyLCA5NF0sIDgzOiBbMiwgOTRdLCA4NDogWzIsIDk0XSwgODU6IFsyLCA5NF0gfSwgeyA1OiBbMiwgMjVdLCAxNDogWzIsIDI1XSwgMTU6IFsyLCAyNV0sIDE5OiBbMiwgMjVdLCAyOTogWzIsIDI1XSwgMzQ6IFsyLCAyNV0sIDM5OiBbMiwgMjVdLCA0NDogWzIsIDI1XSwgNDc6IFsyLCAyNV0sIDQ4OiBbMiwgMjVdLCA1MTogWzIsIDI1XSwgNTU6IFsyLCAyNV0sIDYwOiBbMiwgMjVdIH0sIHsgMjA6IDkzLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzE6IDk0LCAzMzogWzIsIDYwXSwgNjM6IDk1LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTYsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA2MF0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMzOiBbMiwgNjZdLCAzNjogOTcsIDYzOiA5OCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDk5LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc1OiBbMiwgNjZdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAyMjogMTAwLCAyMzogWzIsIDUyXSwgNjM6IDEwMSwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEwMiwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMzogWzIsIDkyXSwgNjI6IDEwMywgNjM6IDEwNCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEwNSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsxLCAxMDZdIH0sIHsgMzM6IFsyLCA3OV0sIDY1OiBbMiwgNzldLCA3MjogWzIsIDc5XSwgODA6IFsyLCA3OV0sIDgxOiBbMiwgNzldLCA4MjogWzIsIDc5XSwgODM6IFsyLCA3OV0sIDg0OiBbMiwgNzldLCA4NTogWzIsIDc5XSB9LCB7IDMzOiBbMiwgODFdIH0sIHsgMjM6IFsyLCAyN10sIDMzOiBbMiwgMjddLCA1NDogWzIsIDI3XSwgNjU6IFsyLCAyN10sIDY4OiBbMiwgMjddLCA3MjogWzIsIDI3XSwgNzU6IFsyLCAyN10sIDgwOiBbMiwgMjddLCA4MTogWzIsIDI3XSwgODI6IFsyLCAyN10sIDgzOiBbMiwgMjddLCA4NDogWzIsIDI3XSwgODU6IFsyLCAyN10gfSwgeyAyMzogWzIsIDI4XSwgMzM6IFsyLCAyOF0sIDU0OiBbMiwgMjhdLCA2NTogWzIsIDI4XSwgNjg6IFsyLCAyOF0sIDcyOiBbMiwgMjhdLCA3NTogWzIsIDI4XSwgODA6IFsyLCAyOF0sIDgxOiBbMiwgMjhdLCA4MjogWzIsIDI4XSwgODM6IFsyLCAyOF0sIDg0OiBbMiwgMjhdLCA4NTogWzIsIDI4XSB9LCB7IDIzOiBbMiwgMzBdLCAzMzogWzIsIDMwXSwgNTQ6IFsyLCAzMF0sIDY4OiBbMiwgMzBdLCA3MTogMTA3LCA3MjogWzEsIDEwOF0sIDc1OiBbMiwgMzBdIH0sIHsgMjM6IFsyLCA5OF0sIDMzOiBbMiwgOThdLCA1NDogWzIsIDk4XSwgNjg6IFsyLCA5OF0sIDcyOiBbMiwgOThdLCA3NTogWzIsIDk4XSB9LCB7IDIzOiBbMiwgNDVdLCAzMzogWzIsIDQ1XSwgNTQ6IFsyLCA0NV0sIDY1OiBbMiwgNDVdLCA2ODogWzIsIDQ1XSwgNzI6IFsyLCA0NV0sIDczOiBbMSwgMTA5XSwgNzU6IFsyLCA0NV0sIDgwOiBbMiwgNDVdLCA4MTogWzIsIDQ1XSwgODI6IFsyLCA0NV0sIDgzOiBbMiwgNDVdLCA4NDogWzIsIDQ1XSwgODU6IFsyLCA0NV0sIDg3OiBbMiwgNDVdIH0sIHsgMjM6IFsyLCA0NF0sIDMzOiBbMiwgNDRdLCA1NDogWzIsIDQ0XSwgNjU6IFsyLCA0NF0sIDY4OiBbMiwgNDRdLCA3MjogWzIsIDQ0XSwgNzU6IFsyLCA0NF0sIDgwOiBbMiwgNDRdLCA4MTogWzIsIDQ0XSwgODI6IFsyLCA0NF0sIDgzOiBbMiwgNDRdLCA4NDogWzIsIDQ0XSwgODU6IFsyLCA0NF0sIDg3OiBbMiwgNDRdIH0sIHsgNTQ6IFsxLCAxMTBdIH0sIHsgNTQ6IFsyLCA4M10sIDY1OiBbMiwgODNdLCA3MjogWzIsIDgzXSwgODA6IFsyLCA4M10sIDgxOiBbMiwgODNdLCA4MjogWzIsIDgzXSwgODM6IFsyLCA4M10sIDg0OiBbMiwgODNdLCA4NTogWzIsIDgzXSB9LCB7IDU0OiBbMiwgODVdIH0sIHsgNTogWzIsIDEzXSwgMTQ6IFsyLCAxM10sIDE1OiBbMiwgMTNdLCAxOTogWzIsIDEzXSwgMjk6IFsyLCAxM10sIDM0OiBbMiwgMTNdLCAzOTogWzIsIDEzXSwgNDQ6IFsyLCAxM10sIDQ3OiBbMiwgMTNdLCA0ODogWzIsIDEzXSwgNTE6IFsyLCAxM10sIDU1OiBbMiwgMTNdLCA2MDogWzIsIDEzXSB9LCB7IDM4OiA1NiwgMzk6IFsxLCA1OF0sIDQzOiA1NywgNDQ6IFsxLCA1OV0sIDQ1OiAxMTIsIDQ2OiAxMTEsIDQ3OiBbMiwgNzZdIH0sIHsgMzM6IFsyLCA3MF0sIDQwOiAxMTMsIDY1OiBbMiwgNzBdLCA3MjogWzIsIDcwXSwgNzU6IFsyLCA3MF0sIDgwOiBbMiwgNzBdLCA4MTogWzIsIDcwXSwgODI6IFsyLCA3MF0sIDgzOiBbMiwgNzBdLCA4NDogWzIsIDcwXSwgODU6IFsyLCA3MF0gfSwgeyA0NzogWzIsIDE4XSB9LCB7IDU6IFsyLCAxNF0sIDE0OiBbMiwgMTRdLCAxNTogWzIsIDE0XSwgMTk6IFsyLCAxNF0sIDI5OiBbMiwgMTRdLCAzNDogWzIsIDE0XSwgMzk6IFsyLCAxNF0sIDQ0OiBbMiwgMTRdLCA0NzogWzIsIDE0XSwgNDg6IFsyLCAxNF0sIDUxOiBbMiwgMTRdLCA1NTogWzIsIDE0XSwgNjA6IFsyLCAxNF0gfSwgeyAzMzogWzEsIDExNF0gfSwgeyAzMzogWzIsIDg3XSwgNjU6IFsyLCA4N10sIDcyOiBbMiwgODddLCA4MDogWzIsIDg3XSwgODE6IFsyLCA4N10sIDgyOiBbMiwgODddLCA4MzogWzIsIDg3XSwgODQ6IFsyLCA4N10sIDg1OiBbMiwgODddIH0sIHsgMzM6IFsyLCA4OV0gfSwgeyAyMDogNzUsIDYzOiAxMTYsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY3OiAxMTUsIDY4OiBbMiwgOTZdLCA2OTogMTE3LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzEsIDExOF0gfSwgeyAzMjogMTE5LCAzMzogWzIsIDYyXSwgNzQ6IDEyMCwgNzU6IFsxLCAxMjFdIH0sIHsgMzM6IFsyLCA1OV0sIDY1OiBbMiwgNTldLCA3MjogWzIsIDU5XSwgNzU6IFsyLCA1OV0sIDgwOiBbMiwgNTldLCA4MTogWzIsIDU5XSwgODI6IFsyLCA1OV0sIDgzOiBbMiwgNTldLCA4NDogWzIsIDU5XSwgODU6IFsyLCA1OV0gfSwgeyAzMzogWzIsIDYxXSwgNzU6IFsyLCA2MV0gfSwgeyAzMzogWzIsIDY4XSwgMzc6IDEyMiwgNzQ6IDEyMywgNzU6IFsxLCAxMjFdIH0sIHsgMzM6IFsyLCA2NV0sIDY1OiBbMiwgNjVdLCA3MjogWzIsIDY1XSwgNzU6IFsyLCA2NV0sIDgwOiBbMiwgNjVdLCA4MTogWzIsIDY1XSwgODI6IFsyLCA2NV0sIDgzOiBbMiwgNjVdLCA4NDogWzIsIDY1XSwgODU6IFsyLCA2NV0gfSwgeyAzMzogWzIsIDY3XSwgNzU6IFsyLCA2N10gfSwgeyAyMzogWzEsIDEyNF0gfSwgeyAyMzogWzIsIDUxXSwgNjU6IFsyLCA1MV0sIDcyOiBbMiwgNTFdLCA4MDogWzIsIDUxXSwgODE6IFsyLCA1MV0sIDgyOiBbMiwgNTFdLCA4MzogWzIsIDUxXSwgODQ6IFsyLCA1MV0sIDg1OiBbMiwgNTFdIH0sIHsgMjM6IFsyLCA1M10gfSwgeyAzMzogWzEsIDEyNV0gfSwgeyAzMzogWzIsIDkxXSwgNjU6IFsyLCA5MV0sIDcyOiBbMiwgOTFdLCA4MDogWzIsIDkxXSwgODE6IFsyLCA5MV0sIDgyOiBbMiwgOTFdLCA4MzogWzIsIDkxXSwgODQ6IFsyLCA5MV0sIDg1OiBbMiwgOTFdIH0sIHsgMzM6IFsyLCA5M10gfSwgeyA1OiBbMiwgMjJdLCAxNDogWzIsIDIyXSwgMTU6IFsyLCAyMl0sIDE5OiBbMiwgMjJdLCAyOTogWzIsIDIyXSwgMzQ6IFsyLCAyMl0sIDM5OiBbMiwgMjJdLCA0NDogWzIsIDIyXSwgNDc6IFsyLCAyMl0sIDQ4OiBbMiwgMjJdLCA1MTogWzIsIDIyXSwgNTU6IFsyLCAyMl0sIDYwOiBbMiwgMjJdIH0sIHsgMjM6IFsyLCA5OV0sIDMzOiBbMiwgOTldLCA1NDogWzIsIDk5XSwgNjg6IFsyLCA5OV0sIDcyOiBbMiwgOTldLCA3NTogWzIsIDk5XSB9LCB7IDczOiBbMSwgMTA5XSB9LCB7IDIwOiA3NSwgNjM6IDEyNiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA1OiBbMiwgMjNdLCAxNDogWzIsIDIzXSwgMTU6IFsyLCAyM10sIDE5OiBbMiwgMjNdLCAyOTogWzIsIDIzXSwgMzQ6IFsyLCAyM10sIDM5OiBbMiwgMjNdLCA0NDogWzIsIDIzXSwgNDc6IFsyLCAyM10sIDQ4OiBbMiwgMjNdLCA1MTogWzIsIDIzXSwgNTU6IFsyLCAyM10sIDYwOiBbMiwgMjNdIH0sIHsgNDc6IFsyLCAxOV0gfSwgeyA0NzogWzIsIDc3XSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA3Ml0sIDQxOiAxMjcsIDYzOiAxMjgsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiAxMjksIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA3Ml0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA1OiBbMiwgMjRdLCAxNDogWzIsIDI0XSwgMTU6IFsyLCAyNF0sIDE5OiBbMiwgMjRdLCAyOTogWzIsIDI0XSwgMzQ6IFsyLCAyNF0sIDM5OiBbMiwgMjRdLCA0NDogWzIsIDI0XSwgNDc6IFsyLCAyNF0sIDQ4OiBbMiwgMjRdLCA1MTogWzIsIDI0XSwgNTU6IFsyLCAyNF0sIDYwOiBbMiwgMjRdIH0sIHsgNjg6IFsxLCAxMzBdIH0sIHsgNjU6IFsyLCA5NV0sIDY4OiBbMiwgOTVdLCA3MjogWzIsIDk1XSwgODA6IFsyLCA5NV0sIDgxOiBbMiwgOTVdLCA4MjogWzIsIDk1XSwgODM6IFsyLCA5NV0sIDg0OiBbMiwgOTVdLCA4NTogWzIsIDk1XSB9LCB7IDY4OiBbMiwgOTddIH0sIHsgNTogWzIsIDIxXSwgMTQ6IFsyLCAyMV0sIDE1OiBbMiwgMjFdLCAxOTogWzIsIDIxXSwgMjk6IFsyLCAyMV0sIDM0OiBbMiwgMjFdLCAzOTogWzIsIDIxXSwgNDQ6IFsyLCAyMV0sIDQ3OiBbMiwgMjFdLCA0ODogWzIsIDIxXSwgNTE6IFsyLCAyMV0sIDU1OiBbMiwgMjFdLCA2MDogWzIsIDIxXSB9LCB7IDMzOiBbMSwgMTMxXSB9LCB7IDMzOiBbMiwgNjNdIH0sIHsgNzI6IFsxLCAxMzNdLCA3NjogMTMyIH0sIHsgMzM6IFsxLCAxMzRdIH0sIHsgMzM6IFsyLCA2OV0gfSwgeyAxNTogWzIsIDEyXSB9LCB7IDE0OiBbMiwgMjZdLCAxNTogWzIsIDI2XSwgMTk6IFsyLCAyNl0sIDI5OiBbMiwgMjZdLCAzNDogWzIsIDI2XSwgNDc6IFsyLCAyNl0sIDQ4OiBbMiwgMjZdLCA1MTogWzIsIDI2XSwgNTU6IFsyLCAyNl0sIDYwOiBbMiwgMjZdIH0sIHsgMjM6IFsyLCAzMV0sIDMzOiBbMiwgMzFdLCA1NDogWzIsIDMxXSwgNjg6IFsyLCAzMV0sIDcyOiBbMiwgMzFdLCA3NTogWzIsIDMxXSB9LCB7IDMzOiBbMiwgNzRdLCA0MjogMTM1LCA3NDogMTM2LCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDcxXSwgNjU6IFsyLCA3MV0sIDcyOiBbMiwgNzFdLCA3NTogWzIsIDcxXSwgODA6IFsyLCA3MV0sIDgxOiBbMiwgNzFdLCA4MjogWzIsIDcxXSwgODM6IFsyLCA3MV0sIDg0OiBbMiwgNzFdLCA4NTogWzIsIDcxXSB9LCB7IDMzOiBbMiwgNzNdLCA3NTogWzIsIDczXSB9LCB7IDIzOiBbMiwgMjldLCAzMzogWzIsIDI5XSwgNTQ6IFsyLCAyOV0sIDY1OiBbMiwgMjldLCA2ODogWzIsIDI5XSwgNzI6IFsyLCAyOV0sIDc1OiBbMiwgMjldLCA4MDogWzIsIDI5XSwgODE6IFsyLCAyOV0sIDgyOiBbMiwgMjldLCA4MzogWzIsIDI5XSwgODQ6IFsyLCAyOV0sIDg1OiBbMiwgMjldIH0sIHsgMTQ6IFsyLCAxNV0sIDE1OiBbMiwgMTVdLCAxOTogWzIsIDE1XSwgMjk6IFsyLCAxNV0sIDM0OiBbMiwgMTVdLCAzOTogWzIsIDE1XSwgNDQ6IFsyLCAxNV0sIDQ3OiBbMiwgMTVdLCA0ODogWzIsIDE1XSwgNTE6IFsyLCAxNV0sIDU1OiBbMiwgMTVdLCA2MDogWzIsIDE1XSB9LCB7IDcyOiBbMSwgMTM4XSwgNzc6IFsxLCAxMzddIH0sIHsgNzI6IFsyLCAxMDBdLCA3NzogWzIsIDEwMF0gfSwgeyAxNDogWzIsIDE2XSwgMTU6IFsyLCAxNl0sIDE5OiBbMiwgMTZdLCAyOTogWzIsIDE2XSwgMzQ6IFsyLCAxNl0sIDQ0OiBbMiwgMTZdLCA0NzogWzIsIDE2XSwgNDg6IFsyLCAxNl0sIDUxOiBbMiwgMTZdLCA1NTogWzIsIDE2XSwgNjA6IFsyLCAxNl0gfSwgeyAzMzogWzEsIDEzOV0gfSwgeyAzMzogWzIsIDc1XSB9LCB7IDMzOiBbMiwgMzJdIH0sIHsgNzI6IFsyLCAxMDFdLCA3NzogWzIsIDEwMV0gfSwgeyAxNDogWzIsIDE3XSwgMTU6IFsyLCAxN10sIDE5OiBbMiwgMTddLCAyOTogWzIsIDE3XSwgMzQ6IFsyLCAxN10sIDM5OiBbMiwgMTddLCA0NDogWzIsIDE3XSwgNDc6IFsyLCAxN10sIDQ4OiBbMiwgMTddLCA1MTogWzIsIDE3XSwgNTU6IFsyLCAxN10sIDYwOiBbMiwgMTddIH1dLFxuXHQgICAgICAgIGRlZmF1bHRBY3Rpb25zOiB7IDQ6IFsyLCAxXSwgNTU6IFsyLCA1NV0sIDU3OiBbMiwgMjBdLCA2MTogWzIsIDU3XSwgNzQ6IFsyLCA4MV0sIDgzOiBbMiwgODVdLCA4NzogWzIsIDE4XSwgOTE6IFsyLCA4OV0sIDEwMjogWzIsIDUzXSwgMTA1OiBbMiwgOTNdLCAxMTE6IFsyLCAxOV0sIDExMjogWzIsIDc3XSwgMTE3OiBbMiwgOTddLCAxMjA6IFsyLCA2M10sIDEyMzogWzIsIDY5XSwgMTI0OiBbMiwgMTJdLCAxMzY6IFsyLCA3NV0sIDEzNzogWzIsIDMyXSB9LFxuXHQgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG5cdCAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcblx0ICAgICAgICAgICAgICAgIHN0YWNrID0gWzBdLFxuXHQgICAgICAgICAgICAgICAgdnN0YWNrID0gW251bGxdLFxuXHQgICAgICAgICAgICAgICAgbHN0YWNrID0gW10sXG5cdCAgICAgICAgICAgICAgICB0YWJsZSA9IHRoaXMudGFibGUsXG5cdCAgICAgICAgICAgICAgICB5eXRleHQgPSBcIlwiLFxuXHQgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSAwLFxuXHQgICAgICAgICAgICAgICAgeXlsZW5nID0gMCxcblx0ICAgICAgICAgICAgICAgIHJlY292ZXJpbmcgPSAwLFxuXHQgICAgICAgICAgICAgICAgVEVSUk9SID0gMixcblx0ICAgICAgICAgICAgICAgIEVPRiA9IDE7XG5cdCAgICAgICAgICAgIHRoaXMubGV4ZXIuc2V0SW5wdXQoaW5wdXQpO1xuXHQgICAgICAgICAgICB0aGlzLmxleGVyLnl5ID0gdGhpcy55eTtcblx0ICAgICAgICAgICAgdGhpcy55eS5sZXhlciA9IHRoaXMubGV4ZXI7XG5cdCAgICAgICAgICAgIHRoaXMueXkucGFyc2VyID0gdGhpcztcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxleGVyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB0aGlzLmxleGVyLnl5bGxvYyA9IHt9O1xuXHQgICAgICAgICAgICB2YXIgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcblx0ICAgICAgICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuXHQgICAgICAgICAgICB2YXIgcmFuZ2VzID0gdGhpcy5sZXhlci5vcHRpb25zICYmIHRoaXMubGV4ZXIub3B0aW9ucy5yYW5nZXM7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHRoaXMucGFyc2VFcnJvciA9IHRoaXMueXkucGFyc2VFcnJvcjtcblx0ICAgICAgICAgICAgZnVuY3Rpb24gcG9wU3RhY2sobikge1xuXHQgICAgICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gc3RhY2subGVuZ3RoIC0gMiAqIG47XG5cdCAgICAgICAgICAgICAgICB2c3RhY2subGVuZ3RoID0gdnN0YWNrLmxlbmd0aCAtIG47XG5cdCAgICAgICAgICAgICAgICBsc3RhY2subGVuZ3RoID0gbHN0YWNrLmxlbmd0aCAtIG47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZnVuY3Rpb24gbGV4KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHRva2VuO1xuXHQgICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLmxleGVyLmxleCgpIHx8IDE7XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgc3ltYm9sLFxuXHQgICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wsXG5cdCAgICAgICAgICAgICAgICBzdGF0ZSxcblx0ICAgICAgICAgICAgICAgIGFjdGlvbixcblx0ICAgICAgICAgICAgICAgIGEsXG5cdCAgICAgICAgICAgICAgICByLFxuXHQgICAgICAgICAgICAgICAgeXl2YWwgPSB7fSxcblx0ICAgICAgICAgICAgICAgIHAsXG5cdCAgICAgICAgICAgICAgICBsZW4sXG5cdCAgICAgICAgICAgICAgICBuZXdTdGF0ZSxcblx0ICAgICAgICAgICAgICAgIGV4cGVjdGVkO1xuXHQgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghcmVjb3ZlcmluZykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKSBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiAyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleGVyLnNob3dQb3NpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIGV4cGVjdGVkLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIjtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IDEgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7IHRleHQ6IHRoaXMubGV4ZXIubWF0Y2gsIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsIGxpbmU6IHRoaXMubGV4ZXIueXlsaW5lbm8sIGxvYzogeXlsb2MsIGV4cGVjdGVkOiBleHBlY3RlZCB9KTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCB0b2tlbjogXCIgKyBzeW1ib2wpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcblx0ICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3ltYm9sKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2godGhpcy5sZXhlci55eXRleHQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sucHVzaCh0aGlzLmxleGVyLnl5bGxvYyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYWN0aW9uWzFdKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmVFcnJvclN5bWJvbCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsZW5nID0gdGhpcy5sZXhlci55eWxlbmc7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXRleHQgPSB0aGlzLmxleGVyLnl5dGV4dDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGluZW5vID0gdGhpcy5sZXhlci55eWxpbmVubztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bG9jID0gdGhpcy5sZXhlci55eWxsb2M7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3ZlcmluZyA+IDApIHJlY292ZXJpbmctLTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IHByZUVycm9yU3ltYm9sO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wgPSBudWxsO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gdGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVsxXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuJCA9IHZzdGFja1t2c3RhY2subGVuZ3RoIC0gbGVuXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuXyQgPSB7IGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSwgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSwgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbiwgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW4gfTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSwgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHl5dmFsLCB5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHRoaXMueXksIGFjdGlvblsxXSwgdnN0YWNrLCBsc3RhY2spO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZzdGFjayA9IHZzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qIEppc29uIGdlbmVyYXRlZCBsZXhlciAqL1xuXHQgICAgdmFyIGxleGVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgbGV4ZXIgPSB7IEVPRjogMSxcblx0ICAgICAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHNldElucHV0OiBmdW5jdGlvbiBzZXRJbnB1dChpbnB1dCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9sZXNzID0gdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gJyc7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gWydJTklUSUFMJ107XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAwLCBsYXN0X2xpbmU6IDEsIGxhc3RfY29sdW1uOiAwIH07XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykgdGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF07XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uIGlucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nKys7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCsrO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcblx0ICAgICAgICAgICAgICAgIGlmIChsaW5lcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrO1xuXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGNoO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB1bnB1dDogZnVuY3Rpb24gdW5wdXQoY2gpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBsZW4gLSAxKTtcblx0ICAgICAgICAgICAgICAgIC8vdGhpcy55eWxlbmcgLT0gbGVuO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuXHQgICAgICAgICAgICAgICAgdmFyIG9sZExpbmVzID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcblxuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuXHQgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG5cdCAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxuXHQgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIG1vcmU6IGZ1bmN0aW9uIG1vcmUoKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBsZXNzOiBmdW5jdGlvbiBsZXNzKG4pIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24gcGFzdElucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbiB1cGNvbWluZ0lucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIG5leHQgPSB0aGlzLm1hdGNoO1xuXHQgICAgICAgICAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcblx0ICAgICAgICAgICAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIG5leHQubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uIHNob3dQb3NpdGlvbigpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuXHQgICAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocHJlLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMgKyBcIl5cIjtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB0aGlzLmRvbmUgPSB0cnVlO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4LCBjb2wsIGxpbmVzO1xuXHQgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9tb3JlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSAnJztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gJyc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdGVtcE1hdGNoO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGxpbmVzID0gbWF0Y2hbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lcykgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBtYXRjaFswXS5sZW5ndGggfTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IG1hdGNoO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgcnVsZXNbaW5kZXhdLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbikgcmV0dXJuIHRva2VuO2Vsc2UgcmV0dXJuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKCdMZXhpY2FsIGVycm9yIG9uIGxpbmUgJyArICh0aGlzLnl5bGluZW5vICsgMSkgKyAnLiBVbnJlY29nbml6ZWQgdGV4dC5cXG4nICsgdGhpcy5zaG93UG9zaXRpb24oKSwgeyB0ZXh0OiBcIlwiLCB0b2tlbjogbnVsbCwgbGluZTogdGhpcy55eWxpbmVubyB9KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMubmV4dCgpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHBvcFN0YXRlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbiBfY3VycmVudFJ1bGVzKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB0b3BTdGF0ZTogZnVuY3Rpb24gdG9wU3RhdGUoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDJdO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihjb25kaXRpb24pO1xuXHQgICAgICAgICAgICB9IH07XG5cdCAgICAgICAgbGV4ZXIub3B0aW9ucyA9IHt9O1xuXHQgICAgICAgIGxleGVyLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbiBhbm9ueW1vdXMoeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlQpIHtcblxuXHQgICAgICAgICAgICBmdW5jdGlvbiBzdHJpcChzdGFydCwgZW5kKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4geXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKHN0YXJ0LCB5eV8ueXlsZW5nIC0gZW5kKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHZhciBZWVNUQVRFID0gWVlfU1RBUlQ7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAwOlxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0yKSA9PT0gXCJcXFxcXFxcXFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwKDAsIDEpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0xKSA9PT0gXCJcXFxcXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJlbXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeXlfLnl5dGV4dCkgcmV0dXJuIDE1O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtyZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSB1c2luZyBgdGhpcy50b3BTdGF0ZSgpYCBiZWxvdywgYnV0IGl0IGN1cnJlbnRseVxuXHQgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdGhlIHNlY29uZCB0b3AgaW5zdGVhZCBvZiB0aGUgZmlyc3QgdG9wLiBPcGVuZWQgYW5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSBhYm91dCBpdCBhdCBodHRwczovL2dpdGh1Yi5jb20vemFhY2gvamlzb24vaXNzdWVzLzI5MVxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0gPT09ICdyYXcnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zdWJzdHIoNSwgeXlfLnl5bGVuZyAtIDkpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0VORF9SQVdfQkxPQ0snO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE0O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjM7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ3O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMzQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDUxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wdXQoeXlfLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ2NvbScpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTQ7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB3aGl0ZXNwYWNlXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNTQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gMzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSBzdHJpcCgxLCAyKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJyk7cmV0dXJuIDgwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0gc3RyaXAoMSwgMikucmVwbGFjZSgvXFxcXCcvZywgXCInXCIpO3JldHVybiA4MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgzO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4MTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXFxcXChbXFxcXFxcXV0pL2csICckMScpO3JldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdJTlZBTElEJztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIGxleGVyLnJ1bGVzID0gWy9eKD86W15cXHgwMF0qPyg/PShcXHtcXHspKSkvLCAvXig/OlteXFx4MDBdKykvLCAvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sIC9eKD86XFx7XFx7XFx7XFx7KD89W15cXC9dKSkvLCAvXig/Olxce1xce1xce1xce1xcL1teXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz1bPX1cXHNcXC8uXSlcXH1cXH1cXH1cXH0pLywgL14oPzpbXlxceDAwXSo/KD89KFxce1xce1xce1xceykpKS8sIC9eKD86W1xcc1xcU10qPy0tKH4pP1xcfVxcfSkvLCAvXig/OlxcKCkvLCAvXig/OlxcKSkvLCAvXig/Olxce1xce1xce1xceykvLCAvXig/OlxcfVxcfVxcfVxcfSkvLCAvXig/Olxce1xceyh+KT8+KS8sIC9eKD86XFx7XFx7KH4pPyM+KS8sIC9eKD86XFx7XFx7KH4pPyNcXCo/KS8sIC9eKD86XFx7XFx7KH4pP1xcLykvLCAvXig/Olxce1xceyh+KT9cXF5cXHMqKH4pP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xcXikvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxcYikvLCAvXig/Olxce1xceyh+KT9cXHspLywgL14oPzpcXHtcXHsofik/JikvLCAvXig/Olxce1xceyh+KT8hLS0pLywgL14oPzpcXHtcXHsofik/IVtcXHNcXFNdKj9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFwqPykvLCAvXig/Oj0pLywgL14oPzpcXC5cXC4pLywgL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLCAvXig/OltcXC8uXSkvLCAvXig/OlxccyspLywgL14oPzpcXH0ofik/XFx9XFx9KS8sIC9eKD86KH4pP1xcfVxcfSkvLCAvXig/OlwiKFxcXFxbXCJdfFteXCJdKSpcIikvLCAvXig/OicoXFxcXFsnXXxbXiddKSonKS8sIC9eKD86QCkvLCAvXig/OnRydWUoPz0oW359XFxzKV0pKSkvLCAvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywgL14oPzp1bmRlZmluZWQoPz0oW359XFxzKV0pKSkvLCAvXig/Om51bGwoPz0oW359XFxzKV0pKSkvLCAvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLCAvXig/OmFzXFxzK1xcfCkvLCAvXig/OlxcfCkvLCAvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sIC9eKD86XFxbKFxcXFxcXF18W15cXF1dKSpcXF0pLywgL14oPzouKS8sIC9eKD86JCkvXTtcblx0ICAgICAgICBsZXhlci5jb25kaXRpb25zID0geyBcIm11XCI6IHsgXCJydWxlc1wiOiBbNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJlbXVcIjogeyBcInJ1bGVzXCI6IFsyXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb21cIjogeyBcInJ1bGVzXCI6IFs2XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJyYXdcIjogeyBcInJ1bGVzXCI6IFszLCA0LCA1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgNDRdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfTtcblx0ICAgICAgICByZXR1cm4gbGV4ZXI7XG5cdCAgICB9KSgpO1xuXHQgICAgcGFyc2VyLmxleGVyID0gbGV4ZXI7XG5cdCAgICBmdW5jdGlvbiBQYXJzZXIoKSB7XG5cdCAgICAgICAgdGhpcy55eSA9IHt9O1xuXHQgICAgfVBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXI7cGFyc2VyLlBhcnNlciA9IFBhcnNlcjtcblx0ICAgIHJldHVybiBuZXcgUGFyc2VyKCk7XG5cdH0pKCk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBoYW5kbGViYXJzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF92aXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF92aXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Zpc2l0b3IpO1xuXG5cdGZ1bmN0aW9uIFdoaXRlc3BhY2VDb250cm9sKCkge1xuXHQgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cblx0ICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZSA9IG5ldyBfdmlzaXRvcjJbJ2RlZmF1bHQnXSgpO1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Qcm9ncmFtID0gZnVuY3Rpb24gKHByb2dyYW0pIHtcblx0ICB2YXIgZG9TdGFuZGFsb25lID0gIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lO1xuXG5cdCAgdmFyIGlzUm9vdCA9ICF0aGlzLmlzUm9vdFNlZW47XG5cdCAgdGhpcy5pc1Jvb3RTZWVuID0gdHJ1ZTtcblxuXHQgIHZhciBib2R5ID0gcHJvZ3JhbS5ib2R5O1xuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gYm9keS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIHZhciBjdXJyZW50ID0gYm9keVtpXSxcblx0ICAgICAgICBzdHJpcCA9IHRoaXMuYWNjZXB0KGN1cnJlbnQpO1xuXG5cdCAgICBpZiAoIXN0cmlwKSB7XG5cdCAgICAgIGNvbnRpbnVlO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgX2lzTmV4dFdoaXRlc3BhY2UgPSBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgb3BlblN0YW5kYWxvbmUgPSBzdHJpcC5vcGVuU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSxcblx0ICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXG5cdCAgICAgICAgaW5saW5lU3RhbmRhbG9uZSA9IHN0cmlwLmlubGluZVN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UgJiYgX2lzTmV4dFdoaXRlc3BhY2U7XG5cblx0ICAgIGlmIChzdHJpcC5jbG9zZSkge1xuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoc3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChib2R5LCBpLCB0cnVlKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBpbmxpbmVTdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuXHQgICAgICBpZiAob21pdExlZnQoYm9keSwgaSkpIHtcblx0ICAgICAgICAvLyBJZiB3ZSBhcmUgb24gYSBzdGFuZGFsb25lIG5vZGUsIHNhdmUgdGhlIGluZGVudCBpbmZvIGZvciBwYXJ0aWFsc1xuXHQgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdQYXJ0aWFsU3RhdGVtZW50Jykge1xuXHQgICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIHdoaXRlc3BhY2UgZnJvbSB0aGUgZmluYWwgbGluZVxuXHQgICAgICAgICAgY3VycmVudC5pbmRlbnQgPSAvKFsgXFx0XSskKS8uZXhlYyhib2R5W2kgLSAxXS5vcmlnaW5hbClbMV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIG9wZW5TdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodCgoY3VycmVudC5wcm9ncmFtIHx8IGN1cnJlbnQuaW52ZXJzZSkuYm9keSk7XG5cblx0ICAgICAgLy8gU3RyaXAgb3V0IHRoZSBwcmV2aW91cyBjb250ZW50IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHlcblx0ICAgICAgb21pdExlZnQoYm9keSwgaSk7XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGNsb3NlU3RhbmRhbG9uZSkge1xuXHQgICAgICAvLyBBbHdheXMgc3RyaXAgdGhlIG5leHQgbm9kZVxuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XG5cblx0ICAgICAgb21pdExlZnQoKGN1cnJlbnQuaW52ZXJzZSB8fCBjdXJyZW50LnByb2dyYW0pLmJvZHkpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBwcm9ncmFtO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5CbG9ja1N0YXRlbWVudCA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3JCbG9jayA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5QYXJ0aWFsQmxvY2tTdGF0ZW1lbnQgPSBmdW5jdGlvbiAoYmxvY2spIHtcblx0ICB0aGlzLmFjY2VwdChibG9jay5wcm9ncmFtKTtcblx0ICB0aGlzLmFjY2VwdChibG9jay5pbnZlcnNlKTtcblxuXHQgIC8vIEZpbmQgdGhlIGludmVyc2UgcHJvZ3JhbSB0aGF0IGlzIGludm9sZWQgd2l0aCB3aGl0ZXNwYWNlIHN0cmlwcGluZy5cblx0ICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0gfHwgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgaW52ZXJzZSA9IGJsb2NrLnByb2dyYW0gJiYgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZSxcblx0ICAgICAgbGFzdEludmVyc2UgPSBpbnZlcnNlO1xuXG5cdCAgaWYgKGludmVyc2UgJiYgaW52ZXJzZS5jaGFpbmVkKSB7XG5cdCAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLmJvZHlbMF0ucHJvZ3JhbTtcblxuXHQgICAgLy8gV2FsayB0aGUgaW52ZXJzZSBjaGFpbiB0byBmaW5kIHRoZSBsYXN0IGludmVyc2UgdGhhdCBpcyBhY3R1YWxseSBpbiB0aGUgY2hhaW4uXG5cdCAgICB3aGlsZSAobGFzdEludmVyc2UuY2hhaW5lZCkge1xuXHQgICAgICBsYXN0SW52ZXJzZSA9IGxhc3RJbnZlcnNlLmJvZHlbbGFzdEludmVyc2UuYm9keS5sZW5ndGggLSAxXS5wcm9ncmFtO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHZhciBzdHJpcCA9IHtcblx0ICAgIG9wZW46IGJsb2NrLm9wZW5TdHJpcC5vcGVuLFxuXHQgICAgY2xvc2U6IGJsb2NrLmNsb3NlU3RyaXAuY2xvc2UsXG5cblx0ICAgIC8vIERldGVybWluZSB0aGUgc3RhbmRhbG9uZSBjYW5kaWFjeS4gQmFzaWNhbGx5IGZsYWcgb3VyIGNvbnRlbnQgYXMgYmVpbmcgcG9zc2libHkgc3RhbmRhbG9uZVxuXHQgICAgLy8gc28gb3VyIHBhcmVudCBjYW4gZGV0ZXJtaW5lIGlmIHdlIGFjdHVhbGx5IGFyZSBzdGFuZGFsb25lXG5cdCAgICBvcGVuU3RhbmRhbG9uZTogaXNOZXh0V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpLFxuXHQgICAgY2xvc2VTdGFuZGFsb25lOiBpc1ByZXZXaGl0ZXNwYWNlKChmaXJzdEludmVyc2UgfHwgcHJvZ3JhbSkuYm9keSlcblx0ICB9O1xuXG5cdCAgaWYgKGJsb2NrLm9wZW5TdHJpcC5jbG9zZSkge1xuXHQgICAgb21pdFJpZ2h0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgaWYgKGludmVyc2UpIHtcblx0ICAgIHZhciBpbnZlcnNlU3RyaXAgPSBibG9jay5pbnZlcnNlU3RyaXA7XG5cblx0ICAgIGlmIChpbnZlcnNlU3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLmNsb3NlKSB7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KGxhc3RJbnZlcnNlLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGaW5kIHN0YW5kYWxvbmUgZWxzZSBzdGF0bWVudHNcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmUgJiYgaXNQcmV2V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpICYmIGlzTmV4dFdoaXRlc3BhY2UoZmlyc3RJbnZlcnNlLmJvZHkpKSB7XG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSk7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSk7XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcblx0ICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHN0cmlwO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3IgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobXVzdGFjaGUpIHtcblx0ICByZXR1cm4gbXVzdGFjaGUuc3RyaXA7XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuQ29tbWVudFN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgc3RyaXAgPSBub2RlLnN0cmlwIHx8IHt9O1xuXHQgIHJldHVybiB7XG5cdCAgICBpbmxpbmVTdGFuZGFsb25lOiB0cnVlLFxuXHQgICAgb3Blbjogc3RyaXAub3Blbixcblx0ICAgIGNsb3NlOiBzdHJpcC5jbG9zZVxuXHQgIH07XG5cdH07XG5cblx0ZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcblx0ICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICBpID0gYm9keS5sZW5ndGg7XG5cdCAgfVxuXG5cdCAgLy8gTm9kZXMgdGhhdCBlbmQgd2l0aCBuZXdsaW5lcyBhcmUgY29uc2lkZXJlZCB3aGl0ZXNwYWNlIChidXQgYXJlIHNwZWNpYWxcblx0ICAvLyBjYXNlZCBmb3Igc3RyaXAgb3BlcmF0aW9ucylcblx0ICB2YXIgcHJldiA9IGJvZHlbaSAtIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpIC0gMl07XG5cdCAgaWYgKCFwcmV2KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChwcmV2LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXFxyP1xcblxccyo/JC8gOiAvKF58XFxyP1xcbilcXHMqPyQvKS50ZXN0KHByZXYub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXHRmdW5jdGlvbiBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0ICAgIGkgPSAtMTtcblx0ICB9XG5cblx0ICB2YXIgbmV4dCA9IGJvZHlbaSArIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpICsgMl07XG5cdCAgaWYgKCFuZXh0KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChuZXh0LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXlxccyo/XFxyP1xcbi8gOiAvXlxccyo/KFxccj9cXG58JCkvKS50ZXN0KG5leHQub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSByaWdodCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cblx0Ly8gSS5lLiB7e2Zvb319JyAnIHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cblx0Ly9cblx0Ly8gSWYgaSBpcyB1bmRlZmluZWQsIHRoZW4gdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0UmlnaHQoYm9keSwgaSwgbXVsdGlwbGUpIHtcblx0ICB2YXIgY3VycmVudCA9IGJvZHlbaSA9PSBudWxsID8gMCA6IGkgKyAxXTtcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQucmlnaHRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XG5cdCAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/IC9eXFxzKy8gOiAvXlsgXFx0XSpcXHI/XFxuPy8sICcnKTtcblx0ICBjdXJyZW50LnJpZ2h0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuXHQvLyBJLmUuICcgJ3t7Zm9vfX0gd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuXHQvL1xuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0TGVmdChib2R5LCBpLCBtdWx0aXBsZSkge1xuXHQgIHZhciBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyBib2R5Lmxlbmd0aCAtIDEgOiBpIC0gMV07XG5cdCAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICFtdWx0aXBsZSAmJiBjdXJyZW50LmxlZnRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIC8vIFdlIG9taXQgdGhlIGxhc3Qgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seSBhbmQgbm90IHByZWNlZWRlZCBieSBhIG5vbi1jb250ZW50IG5vZGUuXG5cdCAgdmFyIG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcblx0ICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gL1xccyskLyA6IC9bIFxcdF0rJC8sICcnKTtcblx0ICBjdXJyZW50LmxlZnRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xuXHQgIHJldHVybiBjdXJyZW50LmxlZnRTdHJpcHBlZDtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdoaXRlc3BhY2VDb250cm9sO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGZ1bmN0aW9uIFZpc2l0b3IoKSB7XG5cdCAgdGhpcy5wYXJlbnRzID0gW107XG5cdH1cblxuXHRWaXNpdG9yLnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogVmlzaXRvcixcblx0ICBtdXRhdGluZzogZmFsc2UsXG5cblx0ICAvLyBWaXNpdHMgYSBnaXZlbiB2YWx1ZS4gSWYgbXV0YXRpbmcsIHdpbGwgcmVwbGFjZSB0aGUgdmFsdWUgaWYgbmVjZXNzYXJ5LlxuXHQgIGFjY2VwdEtleTogZnVuY3Rpb24gYWNjZXB0S2V5KG5vZGUsIG5hbWUpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHRoaXMuYWNjZXB0KG5vZGVbbmFtZV0pO1xuXHQgICAgaWYgKHRoaXMubXV0YXRpbmcpIHtcblx0ICAgICAgLy8gSGFja3kgc2FuaXR5IGNoZWNrOiBUaGlzIG1heSBoYXZlIGEgZmV3IGZhbHNlIHBvc2l0aXZlcyBmb3IgdHlwZSBmb3IgdGhlIGhlbHBlclxuXHQgICAgICAvLyBtZXRob2RzIGJ1dCB3aWxsIGdlbmVyYWxseSBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aG91dCBhIGxvdCBvZiBvdmVyaGVhZC5cblx0ICAgICAgaWYgKHZhbHVlICYmICFWaXNpdG9yLnByb3RvdHlwZVt2YWx1ZS50eXBlXSkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIG5vZGUgdHlwZSBcIicgKyB2YWx1ZS50eXBlICsgJ1wiIGZvdW5kIHdoZW4gYWNjZXB0aW5nICcgKyBuYW1lICsgJyBvbiAnICsgbm9kZS50eXBlKTtcblx0ICAgICAgfVxuXHQgICAgICBub2RlW25hbWVdID0gdmFsdWU7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFBlcmZvcm1zIGFuIGFjY2VwdCBvcGVyYXRpb24gd2l0aCBhZGRlZCBzYW5pdHkgY2hlY2sgdG8gZW5zdXJlXG5cdCAgLy8gcmVxdWlyZWQga2V5cyBhcmUgbm90IHJlbW92ZWQuXG5cdCAgYWNjZXB0UmVxdWlyZWQ6IGZ1bmN0aW9uIGFjY2VwdFJlcXVpcmVkKG5vZGUsIG5hbWUpIHtcblx0ICAgIHRoaXMuYWNjZXB0S2V5KG5vZGUsIG5hbWUpO1xuXG5cdCAgICBpZiAoIW5vZGVbbmFtZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10obm9kZS50eXBlICsgJyByZXF1aXJlcyAnICsgbmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFRyYXZlcnNlcyBhIGdpdmVuIGFycmF5LiBJZiBtdXRhdGluZywgZW1wdHkgcmVzcG5zZXMgd2lsbCBiZSByZW1vdmVkXG5cdCAgLy8gZm9yIGNoaWxkIGVsZW1lbnRzLlxuXHQgIGFjY2VwdEFycmF5OiBmdW5jdGlvbiBhY2NlcHRBcnJheShhcnJheSkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5hY2NlcHRLZXkoYXJyYXksIGkpO1xuXG5cdCAgICAgIGlmICghYXJyYXlbaV0pIHtcblx0ICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgaS0tO1xuXHQgICAgICAgIGwtLTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChvYmplY3QpIHtcblx0ICAgIGlmICghb2JqZWN0KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbb2JqZWN0LnR5cGVdKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHR5cGU6ICcgKyBvYmplY3QudHlwZSwgb2JqZWN0KTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMuY3VycmVudCkge1xuXHQgICAgICB0aGlzLnBhcmVudHMudW5zaGlmdCh0aGlzLmN1cnJlbnQpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5jdXJyZW50ID0gb2JqZWN0O1xuXG5cdCAgICB2YXIgcmV0ID0gdGhpc1tvYmplY3QudHlwZV0ob2JqZWN0KTtcblxuXHQgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYXJlbnRzLnNoaWZ0KCk7XG5cblx0ICAgIGlmICghdGhpcy5tdXRhdGluZyB8fCByZXQpIHtcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSBpZiAocmV0ICE9PSBmYWxzZSkge1xuXHQgICAgICByZXR1cm4gb2JqZWN0O1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMuYWNjZXB0QXJyYXkocHJvZ3JhbS5ib2R5KTtcblx0ICB9LFxuXG5cdCAgTXVzdGFjaGVTdGF0ZW1lbnQ6IHZpc2l0U3ViRXhwcmVzc2lvbixcblx0ICBEZWNvcmF0b3I6IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuXHQgIEJsb2NrU3RhdGVtZW50OiB2aXNpdEJsb2NrLFxuXHQgIERlY29yYXRvckJsb2NrOiB2aXNpdEJsb2NrLFxuXG5cdCAgUGFydGlhbFN0YXRlbWVudDogdmlzaXRQYXJ0aWFsLFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHZpc2l0UGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwpO1xuXG5cdCAgICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAncHJvZ3JhbScpO1xuXHQgIH0sXG5cblx0ICBDb250ZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb250ZW50U3RhdGVtZW50KCkgLyogY29udGVudCAqL3t9LFxuXHQgIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbW1lbnRTdGF0ZW1lbnQoKSAvKiBjb21tZW50ICove30sXG5cblx0ICBTdWJFeHByZXNzaW9uOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cblx0ICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24gUGF0aEV4cHJlc3Npb24oKSAvKiBwYXRoICove30sXG5cblx0ICBTdHJpbmdMaXRlcmFsOiBmdW5jdGlvbiBTdHJpbmdMaXRlcmFsKCkgLyogc3RyaW5nICove30sXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbCgpIC8qIG51bWJlciAqL3t9LFxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbCgpIC8qIGJvb2wgKi97fSxcblx0ICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbiBVbmRlZmluZWRMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxuXHQgIE51bGxMaXRlcmFsOiBmdW5jdGlvbiBOdWxsTGl0ZXJhbCgpIC8qIGxpdGVyYWwgKi97fSxcblxuXHQgIEhhc2g6IGZ1bmN0aW9uIEhhc2goaGFzaCkge1xuXHQgICAgdGhpcy5hY2NlcHRBcnJheShoYXNoLnBhaXJzKTtcblx0ICB9LFxuXHQgIEhhc2hQYWlyOiBmdW5jdGlvbiBIYXNoUGFpcihwYWlyKSB7XG5cdCAgICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhaXIsICd2YWx1ZScpO1xuXHQgIH1cblx0fTtcblxuXHRmdW5jdGlvbiB2aXNpdFN1YkV4cHJlc3Npb24obXVzdGFjaGUpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKG11c3RhY2hlLCAncGF0aCcpO1xuXHQgIHRoaXMuYWNjZXB0QXJyYXkobXVzdGFjaGUucGFyYW1zKTtcblx0ICB0aGlzLmFjY2VwdEtleShtdXN0YWNoZSwgJ2hhc2gnKTtcblx0fVxuXHRmdW5jdGlvbiB2aXNpdEJsb2NrKGJsb2NrKSB7XG5cdCAgdmlzaXRTdWJFeHByZXNzaW9uLmNhbGwodGhpcywgYmxvY2spO1xuXG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdwcm9ncmFtJyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdpbnZlcnNlJyk7XG5cdH1cblx0ZnVuY3Rpb24gdmlzaXRQYXJ0aWFsKHBhcnRpYWwpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhcnRpYWwsICduYW1lJyk7XG5cdCAgdGhpcy5hY2NlcHRBcnJheShwYXJ0aWFsLnBhcmFtcyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkocGFydGlhbCwgJ2hhc2gnKTtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFZpc2l0b3I7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuU291cmNlTG9jYXRpb24gPSBTb3VyY2VMb2NhdGlvbjtcblx0ZXhwb3J0cy5pZCA9IGlkO1xuXHRleHBvcnRzLnN0cmlwRmxhZ3MgPSBzdHJpcEZsYWdzO1xuXHRleHBvcnRzLnN0cmlwQ29tbWVudCA9IHN0cmlwQ29tbWVudDtcblx0ZXhwb3J0cy5wcmVwYXJlUGF0aCA9IHByZXBhcmVQYXRoO1xuXHRleHBvcnRzLnByZXBhcmVNdXN0YWNoZSA9IHByZXBhcmVNdXN0YWNoZTtcblx0ZXhwb3J0cy5wcmVwYXJlUmF3QmxvY2sgPSBwcmVwYXJlUmF3QmxvY2s7XG5cdGV4cG9ydHMucHJlcGFyZUJsb2NrID0gcHJlcGFyZUJsb2NrO1xuXHRleHBvcnRzLnByZXBhcmVQcm9ncmFtID0gcHJlcGFyZVByb2dyYW07XG5cdGV4cG9ydHMucHJlcGFyZVBhcnRpYWxCbG9jayA9IHByZXBhcmVQYXJ0aWFsQmxvY2s7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVDbG9zZShvcGVuLCBjbG9zZSkge1xuXHQgIGNsb3NlID0gY2xvc2UucGF0aCA/IGNsb3NlLnBhdGgub3JpZ2luYWwgOiBjbG9zZTtcblxuXHQgIGlmIChvcGVuLnBhdGgub3JpZ2luYWwgIT09IGNsb3NlKSB7XG5cdCAgICB2YXIgZXJyb3JOb2RlID0geyBsb2M6IG9wZW4ucGF0aC5sb2MgfTtcblxuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10ob3Blbi5wYXRoLm9yaWdpbmFsICsgXCIgZG9lc24ndCBtYXRjaCBcIiArIGNsb3NlLCBlcnJvck5vZGUpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgbG9jSW5mbykge1xuXHQgIHRoaXMuc291cmNlID0gc291cmNlO1xuXHQgIHRoaXMuc3RhcnQgPSB7XG5cdCAgICBsaW5lOiBsb2NJbmZvLmZpcnN0X2xpbmUsXG5cdCAgICBjb2x1bW46IGxvY0luZm8uZmlyc3RfY29sdW1uXG5cdCAgfTtcblx0ICB0aGlzLmVuZCA9IHtcblx0ICAgIGxpbmU6IGxvY0luZm8ubGFzdF9saW5lLFxuXHQgICAgY29sdW1uOiBsb2NJbmZvLmxhc3RfY29sdW1uXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlkKHRva2VuKSB7XG5cdCAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KHRva2VuKSkge1xuXHQgICAgcmV0dXJuIHRva2VuLnN1YnN0cigxLCB0b2tlbi5sZW5ndGggLSAyKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIHRva2VuO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmlwRmxhZ3Mob3BlbiwgY2xvc2UpIHtcblx0ICByZXR1cm4ge1xuXHQgICAgb3Blbjogb3Blbi5jaGFyQXQoMikgPT09ICd+Jyxcblx0ICAgIGNsb3NlOiBjbG9zZS5jaGFyQXQoY2xvc2UubGVuZ3RoIC0gMykgPT09ICd+J1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBzdHJpcENvbW1lbnQoY29tbWVudCkge1xuXHQgIHJldHVybiBjb21tZW50LnJlcGxhY2UoL15cXHtcXHt+PyEtPy0/LywgJycpLnJlcGxhY2UoLy0/LT9+P1xcfVxcfSQvLCAnJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUGF0aChkYXRhLCBwYXJ0cywgbG9jKSB7XG5cdCAgbG9jID0gdGhpcy5sb2NJbmZvKGxvYyk7XG5cblx0ICB2YXIgb3JpZ2luYWwgPSBkYXRhID8gJ0AnIDogJycsXG5cdCAgICAgIGRpZyA9IFtdLFxuXHQgICAgICBkZXB0aCA9IDA7XG5cblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXS5wYXJ0LFxuXG5cdCAgICAvLyBJZiB3ZSBoYXZlIFtdIHN5bnRheCB0aGVuIHdlIGRvIG5vdCB0cmVhdCBwYXRoIHJlZmVyZW5jZXMgYXMgb3BlcmF0b3JzLFxuXHQgICAgLy8gaS5lLiBmb28uW3RoaXNdIHJlc29sdmVzIHRvIGFwcHJveGltYXRlbHkgY29udGV4dC5mb29bJ3RoaXMnXVxuXHQgICAgaXNMaXRlcmFsID0gcGFydHNbaV0ub3JpZ2luYWwgIT09IHBhcnQ7XG5cdCAgICBvcmlnaW5hbCArPSAocGFydHNbaV0uc2VwYXJhdG9yIHx8ICcnKSArIHBhcnQ7XG5cblx0ICAgIGlmICghaXNMaXRlcmFsICYmIChwYXJ0ID09PSAnLi4nIHx8IHBhcnQgPT09ICcuJyB8fCBwYXJ0ID09PSAndGhpcycpKSB7XG5cdCAgICAgIGlmIChkaWcubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdJbnZhbGlkIHBhdGg6ICcgKyBvcmlnaW5hbCwgeyBsb2M6IGxvYyB9KTtcblx0ICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG5cdCAgICAgICAgZGVwdGgrKztcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgZGlnLnB1c2gocGFydCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXG5cdCAgICBkYXRhOiBkYXRhLFxuXHQgICAgZGVwdGg6IGRlcHRoLFxuXHQgICAgcGFydHM6IGRpZyxcblx0ICAgIG9yaWdpbmFsOiBvcmlnaW5hbCxcblx0ICAgIGxvYzogbG9jXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVNdXN0YWNoZShwYXRoLCBwYXJhbXMsIGhhc2gsIG9wZW4sIHN0cmlwLCBsb2NJbmZvKSB7XG5cdCAgLy8gTXVzdCB1c2UgY2hhckF0IHRvIHN1cHBvcnQgSUUgcHJlLTEwXG5cdCAgdmFyIGVzY2FwZUZsYWcgPSBvcGVuLmNoYXJBdCgzKSB8fCBvcGVuLmNoYXJBdCgyKSxcblx0ICAgICAgZXNjYXBlZCA9IGVzY2FwZUZsYWcgIT09ICd7JyAmJiBlc2NhcGVGbGFnICE9PSAnJic7XG5cblx0ICB2YXIgZGVjb3JhdG9yID0gL1xcKi8udGVzdChvcGVuKTtcblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogZGVjb3JhdG9yID8gJ0RlY29yYXRvcicgOiAnTXVzdGFjaGVTdGF0ZW1lbnQnLFxuXHQgICAgcGF0aDogcGF0aCxcblx0ICAgIHBhcmFtczogcGFyYW1zLFxuXHQgICAgaGFzaDogaGFzaCxcblx0ICAgIGVzY2FwZWQ6IGVzY2FwZWQsXG5cdCAgICBzdHJpcDogc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUmF3QmxvY2sob3BlblJhd0Jsb2NrLCBjb250ZW50cywgY2xvc2UsIGxvY0luZm8pIHtcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW5SYXdCbG9jaywgY2xvc2UpO1xuXG5cdCAgbG9jSW5mbyA9IHRoaXMubG9jSW5mbyhsb2NJbmZvKTtcblx0ICB2YXIgcHJvZ3JhbSA9IHtcblx0ICAgIHR5cGU6ICdQcm9ncmFtJyxcblx0ICAgIGJvZHk6IGNvbnRlbnRzLFxuXHQgICAgc3RyaXA6IHt9LFxuXHQgICAgbG9jOiBsb2NJbmZvXG5cdCAgfTtcblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnQmxvY2tTdGF0ZW1lbnQnLFxuXHQgICAgcGF0aDogb3BlblJhd0Jsb2NrLnBhdGgsXG5cdCAgICBwYXJhbXM6IG9wZW5SYXdCbG9jay5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuUmF3QmxvY2suaGFzaCxcblx0ICAgIHByb2dyYW06IHByb2dyYW0sXG5cdCAgICBvcGVuU3RyaXA6IHt9LFxuXHQgICAgaW52ZXJzZVN0cmlwOiB7fSxcblx0ICAgIGNsb3NlU3RyaXA6IHt9LFxuXHQgICAgbG9jOiBsb2NJbmZvXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVCbG9jayhvcGVuQmxvY2ssIHByb2dyYW0sIGludmVyc2VBbmRQcm9ncmFtLCBjbG9zZSwgaW52ZXJ0ZWQsIGxvY0luZm8pIHtcblx0ICBpZiAoY2xvc2UgJiYgY2xvc2UucGF0aCkge1xuXHQgICAgdmFsaWRhdGVDbG9zZShvcGVuQmxvY2ssIGNsb3NlKTtcblx0ICB9XG5cblx0ICB2YXIgZGVjb3JhdG9yID0gL1xcKi8udGVzdChvcGVuQmxvY2sub3Blbik7XG5cblx0ICBwcm9ncmFtLmJsb2NrUGFyYW1zID0gb3BlbkJsb2NrLmJsb2NrUGFyYW1zO1xuXG5cdCAgdmFyIGludmVyc2UgPSB1bmRlZmluZWQsXG5cdCAgICAgIGludmVyc2VTdHJpcCA9IHVuZGVmaW5lZDtcblxuXHQgIGlmIChpbnZlcnNlQW5kUHJvZ3JhbSkge1xuXHQgICAgaWYgKGRlY29yYXRvcikge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5leHBlY3RlZCBpbnZlcnNlIGJsb2NrIG9uIGRlY29yYXRvcicsIGludmVyc2VBbmRQcm9ncmFtKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGludmVyc2VBbmRQcm9ncmFtLmNoYWluKSB7XG5cdCAgICAgIGludmVyc2VBbmRQcm9ncmFtLnByb2dyYW0uYm9keVswXS5jbG9zZVN0cmlwID0gY2xvc2Uuc3RyaXA7XG5cdCAgICB9XG5cblx0ICAgIGludmVyc2VTdHJpcCA9IGludmVyc2VBbmRQcm9ncmFtLnN0cmlwO1xuXHQgICAgaW52ZXJzZSA9IGludmVyc2VBbmRQcm9ncmFtLnByb2dyYW07XG5cdCAgfVxuXG5cdCAgaWYgKGludmVydGVkKSB7XG5cdCAgICBpbnZlcnRlZCA9IGludmVyc2U7XG5cdCAgICBpbnZlcnNlID0gcHJvZ3JhbTtcblx0ICAgIHByb2dyYW0gPSBpbnZlcnRlZDtcblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogZGVjb3JhdG9yID8gJ0RlY29yYXRvckJsb2NrJyA6ICdCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBvcGVuQmxvY2sucGF0aCxcblx0ICAgIHBhcmFtczogb3BlbkJsb2NrLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW5CbG9jay5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIGludmVyc2U6IGludmVyc2UsXG5cdCAgICBvcGVuU3RyaXA6IG9wZW5CbG9jay5zdHJpcCxcblx0ICAgIGludmVyc2VTdHJpcDogaW52ZXJzZVN0cmlwLFxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUHJvZ3JhbShzdGF0ZW1lbnRzLCBsb2MpIHtcblx0ICBpZiAoIWxvYyAmJiBzdGF0ZW1lbnRzLmxlbmd0aCkge1xuXHQgICAgdmFyIGZpcnN0TG9jID0gc3RhdGVtZW50c1swXS5sb2MsXG5cdCAgICAgICAgbGFzdExvYyA9IHN0YXRlbWVudHNbc3RhdGVtZW50cy5sZW5ndGggLSAxXS5sb2M7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cdCAgICBpZiAoZmlyc3RMb2MgJiYgbGFzdExvYykge1xuXHQgICAgICBsb2MgPSB7XG5cdCAgICAgICAgc291cmNlOiBmaXJzdExvYy5zb3VyY2UsXG5cdCAgICAgICAgc3RhcnQ6IHtcblx0ICAgICAgICAgIGxpbmU6IGZpcnN0TG9jLnN0YXJ0LmxpbmUsXG5cdCAgICAgICAgICBjb2x1bW46IGZpcnN0TG9jLnN0YXJ0LmNvbHVtblxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZW5kOiB7XG5cdCAgICAgICAgICBsaW5lOiBsYXN0TG9jLmVuZC5saW5lLFxuXHQgICAgICAgICAgY29sdW1uOiBsYXN0TG9jLmVuZC5jb2x1bW5cblx0ICAgICAgICB9XG5cdCAgICAgIH07XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdQcm9ncmFtJyxcblx0ICAgIGJvZHk6IHN0YXRlbWVudHMsXG5cdCAgICBzdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUGFydGlhbEJsb2NrKG9wZW4sIHByb2dyYW0sIGNsb3NlLCBsb2NJbmZvKSB7XG5cdCAgdmFsaWRhdGVDbG9zZShvcGVuLCBjbG9zZSk7XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1BhcnRpYWxCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBuYW1lOiBvcGVuLnBhdGgsXG5cdCAgICBwYXJhbXM6IG9wZW4ucGFyYW1zLFxuXHQgICAgaGFzaDogb3Blbi5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIG9wZW5TdHJpcDogb3Blbi5zdHJpcCxcblx0ICAgIGNsb3NlU3RyaXA6IGNsb3NlICYmIGNsb3NlLnN0cmlwLFxuXHQgICAgbG9jOiB0aGlzLmxvY0luZm8obG9jSW5mbylcblx0ICB9O1xuXHR9XG5cbi8qKiovIH0pLFxuLyogNDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuZXctY2FwICovXG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuQ29tcGlsZXIgPSBDb21waWxlcjtcblx0ZXhwb3J0cy5wcmVjb21waWxlID0gcHJlY29tcGlsZTtcblx0ZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2FzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG5cdHZhciBfYXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzdCk7XG5cblx0dmFyIHNsaWNlID0gW10uc2xpY2U7XG5cblx0ZnVuY3Rpb24gQ29tcGlsZXIoKSB7fVxuXG5cdC8vIHRoZSBmb3VuZEhlbHBlciByZWdpc3RlciB3aWxsIGRpc2FtYmlndWF0ZSBoZWxwZXIgbG9va3VwIGZyb20gZmluZGluZyBhXG5cdC8vIGZ1bmN0aW9uIGluIGEgY29udGV4dC4gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIG11c3RhY2hlIGNvbXBhdGliaWxpdHksIHdoaWNoXG5cdC8vIHJlcXVpcmVzIHRoYXQgY29udGV4dCBmdW5jdGlvbnMgaW4gYmxvY2tzIGFyZSBldmFsdWF0ZWQgYnkgYmxvY2tIZWxwZXJNaXNzaW5nLFxuXHQvLyBhbmQgdGhlbiBwcm9jZWVkIGFzIGlmIHRoZSByZXN1bHRpbmcgdmFsdWUgd2FzIHByb3ZpZGVkIHRvIGJsb2NrSGVscGVyTWlzc2luZy5cblxuXHRDb21waWxlci5wcm90b3R5cGUgPSB7XG5cdCAgY29tcGlsZXI6IENvbXBpbGVyLFxuXG5cdCAgZXF1YWxzOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcblx0ICAgIHZhciBsZW4gPSB0aGlzLm9wY29kZXMubGVuZ3RoO1xuXHQgICAgaWYgKG90aGVyLm9wY29kZXMubGVuZ3RoICE9PSBsZW4pIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHZhciBvcGNvZGUgPSB0aGlzLm9wY29kZXNbaV0sXG5cdCAgICAgICAgICBvdGhlck9wY29kZSA9IG90aGVyLm9wY29kZXNbaV07XG5cdCAgICAgIGlmIChvcGNvZGUub3Bjb2RlICE9PSBvdGhlck9wY29kZS5vcGNvZGUgfHwgIWFyZ0VxdWFscyhvcGNvZGUuYXJncywgb3RoZXJPcGNvZGUuYXJncykpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gV2Uga25vdyB0aGF0IGxlbmd0aCBpcyB0aGUgc2FtZSBiZXR3ZWVuIHRoZSB0d28gYXJyYXlzIGJlY2F1c2UgdGhleSBhcmUgZGlyZWN0bHkgdGllZFxuXHQgICAgLy8gdG8gdGhlIG9wY29kZSBiZWhhdmlvciBhYm92ZS5cblx0ICAgIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5baV0uZXF1YWxzKG90aGVyLmNoaWxkcmVuW2ldKSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9LFxuXG5cdCAgZ3VpZDogMCxcblxuXHQgIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUocHJvZ3JhbSwgb3B0aW9ucykge1xuXHQgICAgdGhpcy5zb3VyY2VOb2RlID0gW107XG5cdCAgICB0aGlzLm9wY29kZXMgPSBbXTtcblx0ICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0ICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICB0aGlzLnN0cmluZ1BhcmFtcyA9IG9wdGlvbnMuc3RyaW5nUGFyYW1zO1xuXHQgICAgdGhpcy50cmFja0lkcyA9IG9wdGlvbnMudHJhY2tJZHM7XG5cblx0ICAgIG9wdGlvbnMuYmxvY2tQYXJhbXMgPSBvcHRpb25zLmJsb2NrUGFyYW1zIHx8IFtdO1xuXG5cdCAgICAvLyBUaGVzZSBjaGFuZ2VzIHdpbGwgcHJvcGFnYXRlIHRvIHRoZSBvdGhlciBjb21waWxlciBjb21wb25lbnRzXG5cdCAgICB2YXIga25vd25IZWxwZXJzID0gb3B0aW9ucy5rbm93bkhlbHBlcnM7XG5cdCAgICBvcHRpb25zLmtub3duSGVscGVycyA9IHtcblx0ICAgICAgJ2hlbHBlck1pc3NpbmcnOiB0cnVlLFxuXHQgICAgICAnYmxvY2tIZWxwZXJNaXNzaW5nJzogdHJ1ZSxcblx0ICAgICAgJ2VhY2gnOiB0cnVlLFxuXHQgICAgICAnaWYnOiB0cnVlLFxuXHQgICAgICAndW5sZXNzJzogdHJ1ZSxcblx0ICAgICAgJ3dpdGgnOiB0cnVlLFxuXHQgICAgICAnbG9nJzogdHJ1ZSxcblx0ICAgICAgJ2xvb2t1cCc6IHRydWVcblx0ICAgIH07XG5cdCAgICBpZiAoa25vd25IZWxwZXJzKSB7XG5cdCAgICAgIC8vIHRoZSBuZXh0IGxpbmUgc2hvdWxkIHVzZSBcIk9iamVjdC5rZXlzXCIsIGJ1dCB0aGUgY29kZSBoYXMgYmVlbiBsaWtlIHRoaXMgYSBsb25nIHRpbWUgYW5kIGNoYW5naW5nIGl0LCBtaWdodFxuXHQgICAgICAvLyBjYXVzZSBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBpc3N1ZXMuLi4gSXQncyBhbiBvbGQgbGlicmFyeS4uLlxuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG5cdCAgICAgIGZvciAodmFyIF9uYW1lIGluIGtub3duSGVscGVycykge1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbX25hbWVdID0ga25vd25IZWxwZXJzW19uYW1lXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gdGhpcy5hY2NlcHQocHJvZ3JhbSk7XG5cdCAgfSxcblxuXHQgIGNvbXBpbGVQcm9ncmFtOiBmdW5jdGlvbiBjb21waWxlUHJvZ3JhbShwcm9ncmFtKSB7XG5cdCAgICB2YXIgY2hpbGRDb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCksXG5cdCAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdCAgICByZXN1bHQgPSBjaGlsZENvbXBpbGVyLmNvbXBpbGUocHJvZ3JhbSwgdGhpcy5vcHRpb25zKSxcblx0ICAgICAgICBndWlkID0gdGhpcy5ndWlkKys7XG5cblx0ICAgIHRoaXMudXNlUGFydGlhbCA9IHRoaXMudXNlUGFydGlhbCB8fCByZXN1bHQudXNlUGFydGlhbDtcblxuXHQgICAgdGhpcy5jaGlsZHJlbltndWlkXSA9IHJlc3VsdDtcblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgcmVzdWx0LnVzZURlcHRocztcblxuXHQgICAgcmV0dXJuIGd1aWQ7XG5cdCAgfSxcblxuXHQgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KG5vZGUpIHtcblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBTYW5pdHkgY29kZSAqL1xuXHQgICAgaWYgKCF0aGlzW25vZGUudHlwZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdHlwZTogJyArIG5vZGUudHlwZSwgbm9kZSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMuc291cmNlTm9kZS51bnNoaWZ0KG5vZGUpO1xuXHQgICAgdmFyIHJldCA9IHRoaXNbbm9kZS50eXBlXShub2RlKTtcblx0ICAgIHRoaXMuc291cmNlTm9kZS5zaGlmdCgpO1xuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgUHJvZ3JhbTogZnVuY3Rpb24gUHJvZ3JhbShwcm9ncmFtKSB7XG5cdCAgICB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMudW5zaGlmdChwcm9ncmFtLmJsb2NrUGFyYW1zKTtcblxuXHQgICAgdmFyIGJvZHkgPSBwcm9ncmFtLmJvZHksXG5cdCAgICAgICAgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5TGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdGhpcy5hY2NlcHQoYm9keVtpXSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5zaGlmdCgpO1xuXG5cdCAgICB0aGlzLmlzU2ltcGxlID0gYm9keUxlbmd0aCA9PT0gMTtcblx0ICAgIHRoaXMuYmxvY2tQYXJhbXMgPSBwcm9ncmFtLmJsb2NrUGFyYW1zID8gcHJvZ3JhbS5ibG9ja1BhcmFtcy5sZW5ndGggOiAwO1xuXG5cdCAgICByZXR1cm4gdGhpcztcblx0ICB9LFxuXG5cdCAgQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uIEJsb2NrU3RhdGVtZW50KGJsb2NrKSB7XG5cdCAgICB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKGJsb2NrKTtcblxuXHQgICAgdmFyIHByb2dyYW0gPSBibG9jay5wcm9ncmFtLFxuXHQgICAgICAgIGludmVyc2UgPSBibG9jay5pbnZlcnNlO1xuXG5cdCAgICBwcm9ncmFtID0gcHJvZ3JhbSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKHByb2dyYW0pO1xuXHQgICAgaW52ZXJzZSA9IGludmVyc2UgJiYgdGhpcy5jb21waWxlUHJvZ3JhbShpbnZlcnNlKTtcblxuXHQgICAgdmFyIHR5cGUgPSB0aGlzLmNsYXNzaWZ5U2V4cHIoYmxvY2spO1xuXG5cdCAgICBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihibG9jaywgcHJvZ3JhbSwgaW52ZXJzZSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzaW1wbGUnKSB7XG5cdCAgICAgIHRoaXMuc2ltcGxlU2V4cHIoYmxvY2spO1xuXG5cdCAgICAgIC8vIG5vdyB0aGF0IHRoZSBzaW1wbGUgbXVzdGFjaGUgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG9cblx0ICAgICAgLy8gZXZhbHVhdGUgaXQgYnkgZXhlY3V0aW5nIGBibG9ja0hlbHBlck1pc3NpbmdgXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2VtcHR5SGFzaCcpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnYmxvY2tWYWx1ZScsIGJsb2NrLnBhdGgub3JpZ2luYWwpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5hbWJpZ3VvdXNTZXhwcihibG9jaywgcHJvZ3JhbSwgaW52ZXJzZSk7XG5cblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2Bcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhbWJpZ3VvdXNCbG9ja1ZhbHVlJyk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICB9LFxuXG5cdCAgRGVjb3JhdG9yQmxvY2s6IGZ1bmN0aW9uIERlY29yYXRvckJsb2NrKGRlY29yYXRvcikge1xuXHQgICAgdmFyIHByb2dyYW0gPSBkZWNvcmF0b3IucHJvZ3JhbSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGRlY29yYXRvci5wcm9ncmFtKTtcblx0ICAgIHZhciBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKGRlY29yYXRvciwgcHJvZ3JhbSwgdW5kZWZpbmVkKSxcblx0ICAgICAgICBwYXRoID0gZGVjb3JhdG9yLnBhdGg7XG5cblx0ICAgIHRoaXMudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cdCAgICB0aGlzLm9wY29kZSgncmVnaXN0ZXJEZWNvcmF0b3InLCBwYXJhbXMubGVuZ3RoLCBwYXRoLm9yaWdpbmFsKTtcblx0ICB9LFxuXG5cdCAgUGFydGlhbFN0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbFN0YXRlbWVudChwYXJ0aWFsKSB7XG5cdCAgICB0aGlzLnVzZVBhcnRpYWwgPSB0cnVlO1xuXG5cdCAgICB2YXIgcHJvZ3JhbSA9IHBhcnRpYWwucHJvZ3JhbTtcblx0ICAgIGlmIChwcm9ncmFtKSB7XG5cdCAgICAgIHByb2dyYW0gPSB0aGlzLmNvbXBpbGVQcm9ncmFtKHBhcnRpYWwucHJvZ3JhbSk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJhbXMgPSBwYXJ0aWFsLnBhcmFtcztcblx0ICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5zdXBwb3J0ZWQgbnVtYmVyIG9mIHBhcnRpYWwgYXJndW1lbnRzOiAnICsgcGFyYW1zLmxlbmd0aCwgcGFydGlhbCk7XG5cdCAgICB9IGVsc2UgaWYgKCFwYXJhbXMubGVuZ3RoKSB7XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXhwbGljaXRQYXJ0aWFsQ29udGV4dCkge1xuXHQgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBwYXJhbXMucHVzaCh7IHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsIHBhcnRzOiBbXSwgZGVwdGg6IDAgfSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcnRpYWxOYW1lID0gcGFydGlhbC5uYW1lLm9yaWdpbmFsLFxuXHQgICAgICAgIGlzRHluYW1pYyA9IHBhcnRpYWwubmFtZS50eXBlID09PSAnU3ViRXhwcmVzc2lvbic7XG5cdCAgICBpZiAoaXNEeW5hbWljKSB7XG5cdCAgICAgIHRoaXMuYWNjZXB0KHBhcnRpYWwubmFtZSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMocGFydGlhbCwgcHJvZ3JhbSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuXHQgICAgdmFyIGluZGVudCA9IHBhcnRpYWwuaW5kZW50IHx8ICcnO1xuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50SW5kZW50ICYmIGluZGVudCkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kQ29udGVudCcsIGluZGVudCk7XG5cdCAgICAgIGluZGVudCA9ICcnO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLm9wY29kZSgnaW52b2tlUGFydGlhbCcsIGlzRHluYW1pYywgcGFydGlhbE5hbWUsIGluZGVudCk7XG5cdCAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XG5cdCAgfSxcblx0ICBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uIFBhcnRpYWxCbG9ja1N0YXRlbWVudChwYXJ0aWFsQmxvY2spIHtcblx0ICAgIHRoaXMuUGFydGlhbFN0YXRlbWVudChwYXJ0aWFsQmxvY2spO1xuXHQgIH0sXG5cblx0ICBNdXN0YWNoZVN0YXRlbWVudDogZnVuY3Rpb24gTXVzdGFjaGVTdGF0ZW1lbnQobXVzdGFjaGUpIHtcblx0ICAgIHRoaXMuU3ViRXhwcmVzc2lvbihtdXN0YWNoZSk7XG5cblx0ICAgIGlmIChtdXN0YWNoZS5lc2NhcGVkICYmICF0aGlzLm9wdGlvbnMubm9Fc2NhcGUpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZEVzY2FwZWQnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIERlY29yYXRvcjogZnVuY3Rpb24gRGVjb3JhdG9yKGRlY29yYXRvcikge1xuXHQgICAgdGhpcy5EZWNvcmF0b3JCbG9jayhkZWNvcmF0b3IpO1xuXHQgIH0sXG5cblx0ICBDb250ZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb250ZW50U3RhdGVtZW50KGNvbnRlbnQpIHtcblx0ICAgIGlmIChjb250ZW50LnZhbHVlKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgY29udGVudC52YWx1ZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbW1lbnRTdGF0ZW1lbnQoKSB7fSxcblxuXHQgIFN1YkV4cHJlc3Npb246IGZ1bmN0aW9uIFN1YkV4cHJlc3Npb24oc2V4cHIpIHtcblx0ICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpO1xuXHQgICAgdmFyIHR5cGUgPSB0aGlzLmNsYXNzaWZ5U2V4cHIoc2V4cHIpO1xuXG5cdCAgICBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihzZXhwcik7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoZWxwZXInKSB7XG5cdCAgICAgIHRoaXMuaGVscGVyU2V4cHIoc2V4cHIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5hbWJpZ3VvdXNTZXhwcihzZXhwcik7XG5cdCAgICB9XG5cdCAgfSxcblx0ICBhbWJpZ3VvdXNTZXhwcjogZnVuY3Rpb24gYW1iaWd1b3VzU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcblx0ICAgIHZhciBwYXRoID0gc2V4cHIucGF0aCxcblx0ICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXSxcblx0ICAgICAgICBpc0Jsb2NrID0gcHJvZ3JhbSAhPSBudWxsIHx8IGludmVyc2UgIT0gbnVsbDtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblxuXHQgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgdGhpcy5hY2NlcHQocGF0aCk7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdpbnZva2VBbWJpZ3VvdXMnLCBuYW1lLCBpc0Jsb2NrKTtcblx0ICB9LFxuXG5cdCAgc2ltcGxlU2V4cHI6IGZ1bmN0aW9uIHNpbXBsZVNleHByKHNleHByKSB7XG5cdCAgICB2YXIgcGF0aCA9IHNleHByLnBhdGg7XG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICB0aGlzLmFjY2VwdChwYXRoKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdyZXNvbHZlUG9zc2libGVMYW1iZGEnKTtcblx0ICB9LFxuXG5cdCAgaGVscGVyU2V4cHI6IGZ1bmN0aW9uIGhlbHBlclNleHByKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSB7XG5cdCAgICB2YXIgcGFyYW1zID0gdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSksXG5cdCAgICAgICAgcGF0aCA9IHNleHByLnBhdGgsXG5cdCAgICAgICAgbmFtZSA9IHBhdGgucGFydHNbMF07XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzW25hbWVdKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdpbnZva2VLbm93bkhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIG5hbWUpO1xuXHQgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IHNwZWNpZmllZCBrbm93bkhlbHBlcnNPbmx5LCBidXQgdXNlZCB0aGUgdW5rbm93biBoZWxwZXIgJyArIG5hbWUsIHNleHByKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgICAgcGF0aC5mYWxzeSA9IHRydWU7XG5cblx0ICAgICAgdGhpcy5hY2NlcHQocGF0aCk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdpbnZva2VIZWxwZXInLCBwYXJhbXMubGVuZ3RoLCBwYXRoLm9yaWdpbmFsLCBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2ltcGxlSWQocGF0aCkpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24gUGF0aEV4cHJlc3Npb24ocGF0aCkge1xuXHQgICAgdGhpcy5hZGREZXB0aChwYXRoLmRlcHRoKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgcGF0aC5kZXB0aCk7XG5cblx0ICAgIHZhciBuYW1lID0gcGF0aC5wYXJ0c1swXSxcblx0ICAgICAgICBzY29wZWQgPSBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQocGF0aCksXG5cdCAgICAgICAgYmxvY2tQYXJhbUlkID0gIXBhdGguZGVwdGggJiYgIXNjb3BlZCAmJiB0aGlzLmJsb2NrUGFyYW1JbmRleChuYW1lKTtcblxuXHQgICAgaWYgKGJsb2NrUGFyYW1JZCkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JZCwgcGF0aC5wYXJ0cyk7XG5cdCAgICB9IGVsc2UgaWYgKCFuYW1lKSB7XG5cdCAgICAgIC8vIENvbnRleHQgcmVmZXJlbmNlLCBpLmUuIGB7e2ZvbyAufX1gIG9yIGB7e2ZvbyAuLn19YFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaENvbnRleHQnKTtcblx0ICAgIH0gZWxzZSBpZiAocGF0aC5kYXRhKSB7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cERhdGEnLCBwYXRoLmRlcHRoLCBwYXRoLnBhcnRzLCBwYXRoLnN0cmljdCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwT25Db250ZXh0JywgcGF0aC5wYXJ0cywgcGF0aC5mYWxzeSwgcGF0aC5zdHJpY3QsIHNjb3BlZCk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uIFN0cmluZ0xpdGVyYWwoc3RyaW5nKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZycsIHN0cmluZy52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIE51bWJlckxpdGVyYWw6IGZ1bmN0aW9uIE51bWJlckxpdGVyYWwobnVtYmVyKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBudW1iZXIudmFsdWUpO1xuXHQgIH0sXG5cblx0ICBCb29sZWFuTGl0ZXJhbDogZnVuY3Rpb24gQm9vbGVhbkxpdGVyYWwoYm9vbCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgYm9vbC52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIFVuZGVmaW5lZExpdGVyYWw6IGZ1bmN0aW9uIFVuZGVmaW5lZExpdGVyYWwoKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAndW5kZWZpbmVkJyk7XG5cdCAgfSxcblxuXHQgIE51bGxMaXRlcmFsOiBmdW5jdGlvbiBOdWxsTGl0ZXJhbCgpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICdudWxsJyk7XG5cdCAgfSxcblxuXHQgIEhhc2g6IGZ1bmN0aW9uIEhhc2goaGFzaCkge1xuXHQgICAgdmFyIHBhaXJzID0gaGFzaC5wYWlycyxcblx0ICAgICAgICBpID0gMCxcblx0ICAgICAgICBsID0gcGFpcnMubGVuZ3RoO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaEhhc2gnKTtcblxuXHQgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5wdXNoUGFyYW0ocGFpcnNbaV0udmFsdWUpO1xuXHQgICAgfVxuXHQgICAgd2hpbGUgKGktLSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXNzaWduVG9IYXNoJywgcGFpcnNbaV0ua2V5KTtcblx0ICAgIH1cblx0ICAgIHRoaXMub3Bjb2RlKCdwb3BIYXNoJyk7XG5cdCAgfSxcblxuXHQgIC8vIEhFTFBFUlNcblx0ICBvcGNvZGU6IGZ1bmN0aW9uIG9wY29kZShuYW1lKSB7XG5cdCAgICB0aGlzLm9wY29kZXMucHVzaCh7IG9wY29kZTogbmFtZSwgYXJnczogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBsb2M6IHRoaXMuc291cmNlTm9kZVswXS5sb2MgfSk7XG5cdCAgfSxcblxuXHQgIGFkZERlcHRoOiBmdW5jdGlvbiBhZGREZXB0aChkZXB0aCkge1xuXHQgICAgaWYgKCFkZXB0aCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9LFxuXG5cdCAgY2xhc3NpZnlTZXhwcjogZnVuY3Rpb24gY2xhc3NpZnlTZXhwcihzZXhwcikge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLnNpbXBsZUlkKHNleHByLnBhdGgpO1xuXG5cdCAgICB2YXIgaXNCbG9ja1BhcmFtID0gaXNTaW1wbGUgJiYgISF0aGlzLmJsb2NrUGFyYW1JbmRleChzZXhwci5wYXRoLnBhcnRzWzBdKTtcblxuXHQgICAgLy8gYSBtdXN0YWNoZSBpcyBhbiBlbGlnaWJsZSBoZWxwZXIgaWY6XG5cdCAgICAvLyAqIGl0cyBpZCBpcyBzaW1wbGUgKGEgc2luZ2xlIHBhcnQsIG5vdCBgdGhpc2Agb3IgYC4uYClcblx0ICAgIHZhciBpc0hlbHBlciA9ICFpc0Jsb2NrUGFyYW0gJiYgX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLmhlbHBlckV4cHJlc3Npb24oc2V4cHIpO1xuXG5cdCAgICAvLyBpZiBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBidXQgbm90IGEgZGVmaW5pdGVcblx0ICAgIC8vIGhlbHBlciwgaXQgaXMgYW1iaWd1b3VzLCBhbmQgd2lsbCBiZSByZXNvbHZlZCBpbiBhIGxhdGVyXG5cdCAgICAvLyBwYXNzIG9yIGF0IHJ1bnRpbWUuXG5cdCAgICB2YXIgaXNFbGlnaWJsZSA9ICFpc0Jsb2NrUGFyYW0gJiYgKGlzSGVscGVyIHx8IGlzU2ltcGxlKTtcblxuXHQgICAgLy8gaWYgYW1iaWd1b3VzLCB3ZSBjYW4gcG9zc2libHkgcmVzb2x2ZSB0aGUgYW1iaWd1aXR5IG5vd1xuXHQgICAgLy8gQW4gZWxpZ2libGUgaGVscGVyIGlzIG9uZSB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb21wbGV4IHBhdGgsIGkuZS4gYHRoaXMuZm9vYCwgYC4uL2Zvb2AgZXRjLlxuXHQgICAgaWYgKGlzRWxpZ2libGUgJiYgIWlzSGVscGVyKSB7XG5cdCAgICAgIHZhciBfbmFtZTIgPSBzZXhwci5wYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHQgICAgICBpZiAob3B0aW9ucy5rbm93bkhlbHBlcnNbX25hbWUyXSkge1xuXHQgICAgICAgIGlzSGVscGVyID0gdHJ1ZTtcblx0ICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmtub3duSGVscGVyc09ubHkpIHtcblx0ICAgICAgICBpc0VsaWdpYmxlID0gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKGlzSGVscGVyKSB7XG5cdCAgICAgIHJldHVybiAnaGVscGVyJztcblx0ICAgIH0gZWxzZSBpZiAoaXNFbGlnaWJsZSkge1xuXHQgICAgICByZXR1cm4gJ2FtYmlndW91cyc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gJ3NpbXBsZSc7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHB1c2hQYXJhbXM6IGZ1bmN0aW9uIHB1c2hQYXJhbXMocGFyYW1zKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcmFtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5wdXNoUGFyYW0ocGFyYW1zW2ldKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaFBhcmFtOiBmdW5jdGlvbiBwdXNoUGFyYW0odmFsKSB7XG5cdCAgICB2YXIgdmFsdWUgPSB2YWwudmFsdWUgIT0gbnVsbCA/IHZhbC52YWx1ZSA6IHZhbC5vcmlnaW5hbCB8fCAnJztcblxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIGlmICh2YWx1ZS5yZXBsYWNlKSB7XG5cdCAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eKFxcLj9cXC5cXC8pKi9nLCAnJykucmVwbGFjZSgvXFwvL2csICcuJyk7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAodmFsLmRlcHRoKSB7XG5cdCAgICAgICAgdGhpcy5hZGREZXB0aCh2YWwuZGVwdGgpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgdmFsLmRlcHRoIHx8IDApO1xuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZ1BhcmFtJywgdmFsdWUsIHZhbC50eXBlKTtcblxuXHQgICAgICBpZiAodmFsLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJykge1xuXHQgICAgICAgIC8vIFN1YkV4cHJlc3Npb25zIGdldCBldmFsdWF0ZWQgYW5kIHBhc3NlZCBpblxuXHQgICAgICAgIC8vIGluIHN0cmluZyBwYXJhbXMgbW9kZS5cblx0ICAgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICAgIHZhciBibG9ja1BhcmFtSW5kZXggPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgaWYgKHZhbC5wYXJ0cyAmJiAhX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLnNjb3BlZElkKHZhbCkgJiYgIXZhbC5kZXB0aCkge1xuXHQgICAgICAgICAgYmxvY2tQYXJhbUluZGV4ID0gdGhpcy5ibG9ja1BhcmFtSW5kZXgodmFsLnBhcnRzWzBdKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKGJsb2NrUGFyYW1JbmRleCkge1xuXHQgICAgICAgICAgdmFyIGJsb2NrUGFyYW1DaGlsZCA9IHZhbC5wYXJ0cy5zbGljZSgxKS5qb2luKCcuJyk7XG5cdCAgICAgICAgICB0aGlzLm9wY29kZSgncHVzaElkJywgJ0Jsb2NrUGFyYW0nLCBibG9ja1BhcmFtSW5kZXgsIGJsb2NrUGFyYW1DaGlsZCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHZhbHVlID0gdmFsLm9yaWdpbmFsIHx8IHZhbHVlO1xuXHQgICAgICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcblx0ICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9edGhpcyg/OlxcLnwkKS8sICcnKS5yZXBsYWNlKC9eXFwuXFwvLywgJycpLnJlcGxhY2UoL15cXC4kLywgJycpO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICB0aGlzLm9wY29kZSgncHVzaElkJywgdmFsLnR5cGUsIHZhbHVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5hY2NlcHQodmFsKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXM6IGZ1bmN0aW9uIHNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlLCBvbWl0RW1wdHkpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBzZXhwci5wYXJhbXM7XG5cdCAgICB0aGlzLnB1c2hQYXJhbXMocGFyYW1zKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblxuXHQgICAgaWYgKHNleHByLmhhc2gpIHtcblx0ICAgICAgdGhpcy5hY2NlcHQoc2V4cHIuaGFzaCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJywgb21pdEVtcHR5KTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHBhcmFtcztcblx0ICB9LFxuXG5cdCAgYmxvY2tQYXJhbUluZGV4OiBmdW5jdGlvbiBibG9ja1BhcmFtSW5kZXgobmFtZSkge1xuXHQgICAgZm9yICh2YXIgZGVwdGggPSAwLCBsZW4gPSB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMubGVuZ3RoOyBkZXB0aCA8IGxlbjsgZGVwdGgrKykge1xuXHQgICAgICB2YXIgYmxvY2tQYXJhbXMgPSB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXNbZGVwdGhdLFxuXHQgICAgICAgICAgcGFyYW0gPSBibG9ja1BhcmFtcyAmJiBfdXRpbHMuaW5kZXhPZihibG9ja1BhcmFtcywgbmFtZSk7XG5cdCAgICAgIGlmIChibG9ja1BhcmFtcyAmJiBwYXJhbSA+PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuIFtkZXB0aCwgcGFyYW1dO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHByZWNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLnByZWNvbXBpbGUuIFlvdSBwYXNzZWQgJyArIGlucHV0KTtcblx0ICB9XG5cblx0ICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0ICBpZiAoISgnZGF0YScgaW4gb3B0aW9ucykpIHtcblx0ICAgIG9wdGlvbnMuZGF0YSA9IHRydWU7XG5cdCAgfVxuXHQgIGlmIChvcHRpb25zLmNvbXBhdCkge1xuXHQgICAgb3B0aW9ucy51c2VEZXB0aHMgPSB0cnVlO1xuXHQgIH1cblxuXHQgIHZhciBhc3QgPSBlbnYucGFyc2UoaW5wdXQsIG9wdGlvbnMpLFxuXHQgICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyk7XG5cdCAgcmV0dXJuIG5ldyBlbnYuSmF2YVNjcmlwdENvbXBpbGVyKCkuY29tcGlsZShlbnZpcm9ubWVudCwgb3B0aW9ucyk7XG5cdH1cblxuXHRmdW5jdGlvbiBjb21waWxlKGlucHV0LCBvcHRpb25zLCBlbnYpIHtcblx0ICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSBvcHRpb25zID0ge307XG5cblx0ICBpZiAoaW5wdXQgPT0gbnVsbCB8fCB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnICYmIGlucHV0LnR5cGUgIT09ICdQcm9ncmFtJykge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1lvdSBtdXN0IHBhc3MgYSBzdHJpbmcgb3IgSGFuZGxlYmFycyBBU1QgdG8gSGFuZGxlYmFycy5jb21waWxlLiBZb3UgcGFzc2VkICcgKyBpbnB1dCk7XG5cdCAgfVxuXG5cdCAgb3B0aW9ucyA9IF91dGlscy5leHRlbmQoe30sIG9wdGlvbnMpO1xuXHQgIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuXHQgICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfVxuXG5cdCAgdmFyIGNvbXBpbGVkID0gdW5kZWZpbmVkO1xuXG5cdCAgZnVuY3Rpb24gY29tcGlsZUlucHV0KCkge1xuXHQgICAgdmFyIGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG5cdCAgICAgICAgZW52aXJvbm1lbnQgPSBuZXcgZW52LkNvbXBpbGVyKCkuY29tcGlsZShhc3QsIG9wdGlvbnMpLFxuXHQgICAgICAgIHRlbXBsYXRlU3BlYyA9IG5ldyBlbnYuSmF2YVNjcmlwdENvbXBpbGVyKCkuY29tcGlsZShlbnZpcm9ubWVudCwgb3B0aW9ucywgdW5kZWZpbmVkLCB0cnVlKTtcblx0ICAgIHJldHVybiBlbnYudGVtcGxhdGUodGVtcGxhdGVTcGVjKTtcblx0ICB9XG5cblx0ICAvLyBUZW1wbGF0ZSBpcyBvbmx5IGNvbXBpbGVkIG9uIGZpcnN0IHVzZSBhbmQgY2FjaGVkIGFmdGVyIHRoYXQgcG9pbnQuXG5cdCAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIGV4ZWNPcHRpb25zKSB7XG5cdCAgICBpZiAoIWNvbXBpbGVkKSB7XG5cdCAgICAgIGNvbXBpbGVkID0gY29tcGlsZUlucHV0KCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY29tcGlsZWQuY2FsbCh0aGlzLCBjb250ZXh0LCBleGVjT3B0aW9ucyk7XG5cdCAgfVxuXHQgIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAoc2V0dXBPcHRpb25zKSB7XG5cdCAgICBpZiAoIWNvbXBpbGVkKSB7XG5cdCAgICAgIGNvbXBpbGVkID0gY29tcGlsZUlucHV0KCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY29tcGlsZWQuX3NldHVwKHNldHVwT3B0aW9ucyk7XG5cdCAgfTtcblx0ICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5fY2hpbGQoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgfTtcblx0ICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gYXJnRXF1YWxzKGEsIGIpIHtcblx0ICBpZiAoYSA9PT0gYikge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXG5cdCAgaWYgKF91dGlscy5pc0FycmF5KGEpICYmIF91dGlscy5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIGlmICghYXJnRXF1YWxzKGFbaV0sIGJbaV0pKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKHNleHByKSB7XG5cdCAgaWYgKCFzZXhwci5wYXRoLnBhcnRzKSB7XG5cdCAgICB2YXIgbGl0ZXJhbCA9IHNleHByLnBhdGg7XG5cdCAgICAvLyBDYXN0aW5nIHRvIHN0cmluZyBoZXJlIHRvIG1ha2UgZmFsc2UgYW5kIDAgbGl0ZXJhbCB2YWx1ZXMgcGxheSBuaWNlbHkgd2l0aCB0aGUgcmVzdFxuXHQgICAgLy8gb2YgdGhlIHN5c3RlbS5cblx0ICAgIHNleHByLnBhdGggPSB7XG5cdCAgICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXG5cdCAgICAgIGRhdGE6IGZhbHNlLFxuXHQgICAgICBkZXB0aDogMCxcblx0ICAgICAgcGFydHM6IFtsaXRlcmFsLm9yaWdpbmFsICsgJyddLFxuXHQgICAgICBvcmlnaW5hbDogbGl0ZXJhbC5vcmlnaW5hbCArICcnLFxuXHQgICAgICBsb2M6IGxpdGVyYWwubG9jXG5cdCAgICB9O1xuXHQgIH1cblx0fVxuXG4vKioqLyB9KSxcbi8qIDQyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9iYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2NvZGVHZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblxuXHR2YXIgX2NvZGVHZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29kZUdlbik7XG5cblx0ZnVuY3Rpb24gTGl0ZXJhbCh2YWx1ZSkge1xuXHQgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIEphdmFTY3JpcHRDb21waWxlcigpIHt9XG5cblx0SmF2YVNjcmlwdENvbXBpbGVyLnByb3RvdHlwZSA9IHtcblx0ICAvLyBQVUJMSUMgQVBJOiBZb3UgY2FuIG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMgaW4gYSBzdWJjbGFzcyB0byBwcm92aWRlXG5cdCAgLy8gYWx0ZXJuYXRpdmUgY29tcGlsZWQgZm9ybXMgZm9yIG5hbWUgbG9va3VwIGFuZCBidWZmZXJpbmcgc2VtYW50aWNzXG5cdCAgbmFtZUxvb2t1cDogZnVuY3Rpb24gbmFtZUxvb2t1cChwYXJlbnQsIG5hbWUgLyogLCB0eXBlKi8pIHtcblx0ICAgIGlmIChuYW1lID09PSAnY29uc3RydWN0b3InKSB7XG5cdCAgICAgIHJldHVybiBbJygnLCBwYXJlbnQsICcucHJvcGVydHlJc0VudW1lcmFibGUoXFwnY29uc3RydWN0b3JcXCcpID8gJywgcGFyZW50LCAnLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkJywgJyknXTtcblx0ICAgIH1cblx0ICAgIGlmIChKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUobmFtZSkpIHtcblx0ICAgICAgcmV0dXJuIFtwYXJlbnQsICcuJywgbmFtZV07XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJ1snLCBKU09OLnN0cmluZ2lmeShuYW1lKSwgJ10nXTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGRlcHRoZWRMb29rdXA6IGZ1bmN0aW9uIGRlcHRoZWRMb29rdXAobmFtZSkge1xuXHQgICAgcmV0dXJuIFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmxvb2t1cCcpLCAnKGRlcHRocywgXCInLCBuYW1lLCAnXCIpJ107XG5cdCAgfSxcblxuXHQgIGNvbXBpbGVySW5mbzogZnVuY3Rpb24gY29tcGlsZXJJbmZvKCkge1xuXHQgICAgdmFyIHJldmlzaW9uID0gX2Jhc2UuQ09NUElMRVJfUkVWSVNJT04sXG5cdCAgICAgICAgdmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW3JldmlzaW9uXTtcblx0ICAgIHJldHVybiBbcmV2aXNpb24sIHZlcnNpb25zXTtcblx0ICB9LFxuXG5cdCAgYXBwZW5kVG9CdWZmZXI6IGZ1bmN0aW9uIGFwcGVuZFRvQnVmZmVyKHNvdXJjZSwgbG9jYXRpb24sIGV4cGxpY2l0KSB7XG5cdCAgICAvLyBGb3JjZSBhIHNvdXJjZSBhcyB0aGlzIHNpbXBsaWZpZXMgdGhlIG1lcmdlIGxvZ2ljLlxuXHQgICAgaWYgKCFfdXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG5cdCAgICAgIHNvdXJjZSA9IFtzb3VyY2VdO1xuXHQgICAgfVxuXHQgICAgc291cmNlID0gdGhpcy5zb3VyY2Uud3JhcChzb3VyY2UsIGxvY2F0aW9uKTtcblxuXHQgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUpIHtcblx0ICAgICAgcmV0dXJuIFsncmV0dXJuICcsIHNvdXJjZSwgJzsnXTtcblx0ICAgIH0gZWxzZSBpZiAoZXhwbGljaXQpIHtcblx0ICAgICAgLy8gVGhpcyBpcyBhIGNhc2Ugd2hlcmUgdGhlIGJ1ZmZlciBvcGVyYXRpb24gb2NjdXJzIGFzIGEgY2hpbGQgb2YgYW5vdGhlclxuXHQgICAgICAvLyBjb25zdHJ1Y3QsIGdlbmVyYWxseSBicmFjZXMuIFdlIGhhdmUgdG8gZXhwbGljaXRseSBvdXRwdXQgdGhlc2UgYnVmZmVyXG5cdCAgICAgIC8vIG9wZXJhdGlvbnMgdG8gZW5zdXJlIHRoYXQgdGhlIGVtaXR0ZWQgY29kZSBnb2VzIGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uLlxuXHQgICAgICByZXR1cm4gWydidWZmZXIgKz0gJywgc291cmNlLCAnOyddO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgc291cmNlLmFwcGVuZFRvQnVmZmVyID0gdHJ1ZTtcblx0ICAgICAgcmV0dXJuIHNvdXJjZTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgaW5pdGlhbGl6ZUJ1ZmZlcjogZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1ZmZlcigpIHtcblx0ICAgIHJldHVybiB0aGlzLnF1b3RlZFN0cmluZygnJyk7XG5cdCAgfSxcblx0ICAvLyBFTkQgUFVCTElDIEFQSVxuXG5cdCAgY29tcGlsZTogZnVuY3Rpb24gY29tcGlsZShlbnZpcm9ubWVudCwgb3B0aW9ucywgY29udGV4dCwgYXNPYmplY3QpIHtcblx0ICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0ICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICB0aGlzLnN0cmluZ1BhcmFtcyA9IHRoaXMub3B0aW9ucy5zdHJpbmdQYXJhbXM7XG5cdCAgICB0aGlzLnRyYWNrSWRzID0gdGhpcy5vcHRpb25zLnRyYWNrSWRzO1xuXHQgICAgdGhpcy5wcmVjb21waWxlID0gIWFzT2JqZWN0O1xuXG5cdCAgICB0aGlzLm5hbWUgPSB0aGlzLmVudmlyb25tZW50Lm5hbWU7XG5cdCAgICB0aGlzLmlzQ2hpbGQgPSAhIWNvbnRleHQ7XG5cdCAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHtcblx0ICAgICAgZGVjb3JhdG9yczogW10sXG5cdCAgICAgIHByb2dyYW1zOiBbXSxcblx0ICAgICAgZW52aXJvbm1lbnRzOiBbXVxuXHQgICAgfTtcblxuXHQgICAgdGhpcy5wcmVhbWJsZSgpO1xuXG5cdCAgICB0aGlzLnN0YWNrU2xvdCA9IDA7XG5cdCAgICB0aGlzLnN0YWNrVmFycyA9IFtdO1xuXHQgICAgdGhpcy5hbGlhc2VzID0ge307XG5cdCAgICB0aGlzLnJlZ2lzdGVycyA9IHsgbGlzdDogW10gfTtcblx0ICAgIHRoaXMuaGFzaGVzID0gW107XG5cdCAgICB0aGlzLmNvbXBpbGVTdGFjayA9IFtdO1xuXHQgICAgdGhpcy5pbmxpbmVTdGFjayA9IFtdO1xuXHQgICAgdGhpcy5ibG9ja1BhcmFtcyA9IFtdO1xuXG5cdCAgICB0aGlzLmNvbXBpbGVDaGlsZHJlbihlbnZpcm9ubWVudCwgb3B0aW9ucyk7XG5cblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVwdGhzIHx8IGVudmlyb25tZW50LnVzZURlY29yYXRvcnMgfHwgdGhpcy5vcHRpb25zLmNvbXBhdDtcblx0ICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IGVudmlyb25tZW50LnVzZUJsb2NrUGFyYW1zO1xuXG5cdCAgICB2YXIgb3Bjb2RlcyA9IGVudmlyb25tZW50Lm9wY29kZXMsXG5cdCAgICAgICAgb3Bjb2RlID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGZpcnN0TG9jID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGkgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgbCA9IHVuZGVmaW5lZDtcblxuXHQgICAgZm9yIChpID0gMCwgbCA9IG9wY29kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIG9wY29kZSA9IG9wY29kZXNbaV07XG5cblx0ICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0gb3Bjb2RlLmxvYztcblx0ICAgICAgZmlyc3RMb2MgPSBmaXJzdExvYyB8fCBvcGNvZGUubG9jO1xuXHQgICAgICB0aGlzW29wY29kZS5vcGNvZGVdLmFwcGx5KHRoaXMsIG9wY29kZS5hcmdzKTtcblx0ICAgIH1cblxuXHQgICAgLy8gRmx1c2ggYW55IHRyYWlsaW5nIGNvbnRlbnQgdGhhdCBtaWdodCBiZSBwZW5kaW5nLlxuXHQgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0gZmlyc3RMb2M7XG5cdCAgICB0aGlzLnB1c2hTb3VyY2UoJycpO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgaWYgKHRoaXMuc3RhY2tTbG90IHx8IHRoaXMuaW5saW5lU3RhY2subGVuZ3RoIHx8IHRoaXMuY29tcGlsZVN0YWNrLmxlbmd0aCkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQ29tcGlsZSBjb21wbGV0ZWQgd2l0aCBjb250ZW50IGxlZnQgb24gc3RhY2snKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKCF0aGlzLmRlY29yYXRvcnMuaXNFbXB0eSgpKSB7XG5cdCAgICAgIHRoaXMudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzLnByZXBlbmQoJ3ZhciBkZWNvcmF0b3JzID0gY29udGFpbmVyLmRlY29yYXRvcnM7XFxuJyk7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCdyZXR1cm4gZm47Jyk7XG5cblx0ICAgICAgaWYgKGFzT2JqZWN0KSB7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gRnVuY3Rpb24uYXBwbHkodGhpcywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCAnZGVwdGgwJywgJ2RhdGEnLCAnYmxvY2tQYXJhbXMnLCAnZGVwdGhzJywgdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCldKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMucHJlcGVuZCgnZnVuY3Rpb24oZm4sIHByb3BzLCBjb250YWluZXIsIGRlcHRoMCwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xcbicpO1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCd9XFxuJyk7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycyA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gdGhpcy5jcmVhdGVGdW5jdGlvbkNvbnRleHQoYXNPYmplY3QpO1xuXHQgICAgaWYgKCF0aGlzLmlzQ2hpbGQpIHtcblx0ICAgICAgdmFyIHJldCA9IHtcblx0ICAgICAgICBjb21waWxlcjogdGhpcy5jb21waWxlckluZm8oKSxcblx0ICAgICAgICBtYWluOiBmblxuXHQgICAgICB9O1xuXG5cdCAgICAgIGlmICh0aGlzLmRlY29yYXRvcnMpIHtcblx0ICAgICAgICByZXQubWFpbl9kID0gdGhpcy5kZWNvcmF0b3JzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuXHQgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBfY29udGV4dCA9IHRoaXMuY29udGV4dDtcblx0ICAgICAgdmFyIHByb2dyYW1zID0gX2NvbnRleHQucHJvZ3JhbXM7XG5cdCAgICAgIHZhciBkZWNvcmF0b3JzID0gX2NvbnRleHQuZGVjb3JhdG9ycztcblxuXHQgICAgICBmb3IgKGkgPSAwLCBsID0gcHJvZ3JhbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKHByb2dyYW1zW2ldKSB7XG5cdCAgICAgICAgICByZXRbaV0gPSBwcm9ncmFtc1tpXTtcblx0ICAgICAgICAgIGlmIChkZWNvcmF0b3JzW2ldKSB7XG5cdCAgICAgICAgICAgIHJldFtpICsgJ19kJ10gPSBkZWNvcmF0b3JzW2ldO1xuXHQgICAgICAgICAgICByZXQudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQudXNlUGFydGlhbCkge1xuXHQgICAgICAgIHJldC51c2VQYXJ0aWFsID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcblx0ICAgICAgICByZXQudXNlRGF0YSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgICAgcmV0LnVzZURlcHRocyA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgICByZXQudXNlQmxvY2tQYXJhbXMgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICAgICAgcmV0LmNvbXBhdCA9IHRydWU7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoIWFzT2JqZWN0KSB7XG5cdCAgICAgICAgcmV0LmNvbXBpbGVyID0gSlNPTi5zdHJpbmdpZnkocmV0LmNvbXBpbGVyKTtcblxuXHQgICAgICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IHsgc3RhcnQ6IHsgbGluZTogMSwgY29sdW1uOiAwIH0gfTtcblx0ICAgICAgICByZXQgPSB0aGlzLm9iamVjdExpdGVyYWwocmV0KTtcblxuXHQgICAgICAgIGlmIChvcHRpb25zLnNyY05hbWUpIHtcblx0ICAgICAgICAgIHJldCA9IHJldC50b1N0cmluZ1dpdGhTb3VyY2VNYXAoeyBmaWxlOiBvcHRpb25zLmRlc3ROYW1lIH0pO1xuXHQgICAgICAgICAgcmV0Lm1hcCA9IHJldC5tYXAgJiYgcmV0Lm1hcC50b1N0cmluZygpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXQgPSByZXQudG9TdHJpbmcoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0LmNvbXBpbGVyT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gZm47XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHByZWFtYmxlOiBmdW5jdGlvbiBwcmVhbWJsZSgpIHtcblx0ICAgIC8vIHRyYWNrIHRoZSBsYXN0IGNvbnRleHQgcHVzaGVkIGludG8gcGxhY2UgdG8gYWxsb3cgc2tpcHBpbmcgdGhlXG5cdCAgICAvLyBnZXRDb250ZXh0IG9wY29kZSB3aGVuIGl0IHdvdWxkIGJlIGEgbm9vcFxuXHQgICAgdGhpcy5sYXN0Q29udGV4dCA9IDA7XG5cdCAgICB0aGlzLnNvdXJjZSA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XG5cdCAgICB0aGlzLmRlY29yYXRvcnMgPSBuZXcgX2NvZGVHZW4yWydkZWZhdWx0J10odGhpcy5vcHRpb25zLnNyY05hbWUpO1xuXHQgIH0sXG5cblx0ICBjcmVhdGVGdW5jdGlvbkNvbnRleHQ6IGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCkge1xuXHQgICAgdmFyIHZhckRlY2xhcmF0aW9ucyA9ICcnO1xuXG5cdCAgICB2YXIgbG9jYWxzID0gdGhpcy5zdGFja1ZhcnMuY29uY2F0KHRoaXMucmVnaXN0ZXJzLmxpc3QpO1xuXHQgICAgaWYgKGxvY2Fscy5sZW5ndGggPiAwKSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCAnICsgbG9jYWxzLmpvaW4oJywgJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIEdlbmVyYXRlIG1pbmltaXplciBhbGlhcyBtYXBwaW5nc1xuXHQgICAgLy9cblx0ICAgIC8vIFdoZW4gdXNpbmcgdHJ1ZSBTb3VyY2VOb2RlcywgdGhpcyB3aWxsIHVwZGF0ZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgZ2l2ZW4gYWxpYXNcblx0ICAgIC8vIGFzIHRoZSBzb3VyY2Ugbm9kZXMgYXJlIHJldXNlZCBpbiBzaXR1LiBGb3IgdGhlIG5vbi1zb3VyY2Ugbm9kZSBjb21waWxhdGlvbiBtb2RlLFxuXHQgICAgLy8gYWxpYXNlcyB3aWxsIG5vdCBiZSB1c2VkLCBidXQgdGhpcyBjYXNlIGlzIGFscmVhZHkgYmVpbmcgcnVuIG9uIHRoZSBjbGllbnQgYW5kXG5cdCAgICAvLyB3ZSBhcmVuJ3QgY29uY2VybiBhYm91dCBtaW5pbWl6aW5nIHRoZSB0ZW1wbGF0ZSBzaXplLlxuXHQgICAgdmFyIGFsaWFzQ291bnQgPSAwO1xuXHQgICAgZm9yICh2YXIgYWxpYXMgaW4gdGhpcy5hbGlhc2VzKSB7XG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluXG5cdCAgICAgIHZhciBub2RlID0gdGhpcy5hbGlhc2VzW2FsaWFzXTtcblxuXHQgICAgICBpZiAodGhpcy5hbGlhc2VzLmhhc093blByb3BlcnR5KGFsaWFzKSAmJiBub2RlLmNoaWxkcmVuICYmIG5vZGUucmVmZXJlbmNlQ291bnQgPiAxKSB7XG5cdCAgICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsIGFsaWFzJyArICsrYWxpYXNDb3VudCArICc9JyArIGFsaWFzO1xuXHQgICAgICAgIG5vZGUuY2hpbGRyZW5bMF0gPSAnYWxpYXMnICsgYWxpYXNDb3VudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFyYW1zID0gWydjb250YWluZXInLCAnZGVwdGgwJywgJ2hlbHBlcnMnLCAncGFydGlhbHMnLCAnZGF0YSddO1xuXG5cdCAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcyB8fCB0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwYXJhbXMucHVzaCgnYmxvY2tQYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwYXJhbXMucHVzaCgnZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIFBlcmZvcm0gYSBzZWNvbmQgcGFzcyBvdmVyIHRoZSBvdXRwdXQgdG8gbWVyZ2UgY29udGVudCB3aGVuIHBvc3NpYmxlXG5cdCAgICB2YXIgc291cmNlID0gdGhpcy5tZXJnZVNvdXJjZSh2YXJEZWNsYXJhdGlvbnMpO1xuXG5cdCAgICBpZiAoYXNPYmplY3QpIHtcblx0ICAgICAgcGFyYW1zLnB1c2goc291cmNlKTtcblxuXHQgICAgICByZXR1cm4gRnVuY3Rpb24uYXBwbHkodGhpcywgcGFyYW1zKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiB0aGlzLnNvdXJjZS53cmFwKFsnZnVuY3Rpb24oJywgcGFyYW1zLmpvaW4oJywnKSwgJykge1xcbiAgJywgc291cmNlLCAnfSddKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIG1lcmdlU291cmNlOiBmdW5jdGlvbiBtZXJnZVNvdXJjZSh2YXJEZWNsYXJhdGlvbnMpIHtcblx0ICAgIHZhciBpc1NpbXBsZSA9IHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUsXG5cdCAgICAgICAgYXBwZW5kT25seSA9ICF0aGlzLmZvcmNlQnVmZmVyLFxuXHQgICAgICAgIGFwcGVuZEZpcnN0ID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHNvdXJjZVNlZW4gPSB1bmRlZmluZWQsXG5cdCAgICAgICAgYnVmZmVyU3RhcnQgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuXHQgICAgdGhpcy5zb3VyY2UuZWFjaChmdW5jdGlvbiAobGluZSkge1xuXHQgICAgICBpZiAobGluZS5hcHBlbmRUb0J1ZmZlcikge1xuXHQgICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgICAgbGluZS5wcmVwZW5kKCcgICsgJyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gbGluZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgYnVmZmVyRW5kID0gbGluZTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICAgIGlmICghc291cmNlU2Vlbikge1xuXHQgICAgICAgICAgICBhcHBlbmRGaXJzdCA9IHRydWU7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdidWZmZXIgKz0gJyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBidWZmZXJFbmQuYWRkKCc7Jyk7XG5cdCAgICAgICAgICBidWZmZXJTdGFydCA9IGJ1ZmZlckVuZCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBzb3VyY2VTZWVuID0gdHJ1ZTtcblx0ICAgICAgICBpZiAoIWlzU2ltcGxlKSB7XG5cdCAgICAgICAgICBhcHBlbmRPbmx5ID0gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgaWYgKGFwcGVuZE9ubHkpIHtcblx0ICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuICcpO1xuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgfSBlbHNlIGlmICghc291cmNlU2Vlbikge1xuXHQgICAgICAgIHRoaXMuc291cmNlLnB1c2goJ3JldHVybiBcIlwiOycpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYnVmZmVyID0gJyArIChhcHBlbmRGaXJzdCA/ICcnIDogdGhpcy5pbml0aWFsaXplQnVmZmVyKCkpO1xuXG5cdCAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ3JldHVybiBidWZmZXIgKyAnKTtcblx0ICAgICAgICBidWZmZXJFbmQuYWRkKCc7Jyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIGJ1ZmZlcjsnKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAodmFyRGVjbGFyYXRpb25zKSB7XG5cdCAgICAgIHRoaXMuc291cmNlLnByZXBlbmQoJ3ZhciAnICsgdmFyRGVjbGFyYXRpb25zLnN1YnN0cmluZygyKSArIChhcHBlbmRGaXJzdCA/ICcnIDogJztcXG4nKSk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLnNvdXJjZS5tZXJnZSgpO1xuXHQgIH0sXG5cblx0ICAvLyBbYmxvY2tWYWx1ZV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHZhbHVlXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXR1cm4gdmFsdWUgb2YgYmxvY2tIZWxwZXJNaXNzaW5nXG5cdCAgLy9cblx0ICAvLyBUaGUgcHVycG9zZSBvZiB0aGlzIG9wY29kZSBpcyB0byB0YWtlIGEgYmxvY2sgb2YgdGhlIGZvcm1cblx0ICAvLyBge3sjdGhpcy5mb299fS4uLnt7L3RoaXMuZm9vfX1gLCByZXNvbHZlIHRoZSB2YWx1ZSBvZiBgZm9vYCwgYW5kXG5cdCAgLy8gcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgd2l0aCB0aGUgcmVzdWx0IG9mIHByb3Blcmx5XG5cdCAgLy8gaW52b2tpbmcgYmxvY2tIZWxwZXJNaXNzaW5nLlxuXHQgIGJsb2NrVmFsdWU6IGZ1bmN0aW9uIGJsb2NrVmFsdWUobmFtZSkge1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmJsb2NrSGVscGVyTWlzc2luZycpLFxuXHQgICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcblx0ICAgIHRoaXMuc2V0dXBIZWxwZXJBcmdzKG5hbWUsIDAsIHBhcmFtcyk7XG5cblx0ICAgIHZhciBibG9ja05hbWUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICBwYXJhbXMuc3BsaWNlKDEsIDAsIGJsb2NrTmFtZSk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoYmxvY2tIZWxwZXJNaXNzaW5nLCAnY2FsbCcsIHBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbYW1iaWd1b3VzQmxvY2tWYWx1ZV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHZhbHVlXG5cdCAgLy8gQ29tcGlsZXIgdmFsdWUsIGJlZm9yZTogbGFzdEhlbHBlcj12YWx1ZSBvZiBsYXN0IGZvdW5kIGhlbHBlciwgaWYgYW55XG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBubyBsYXN0SGVscGVyOiBzYW1lIGFzIFtibG9ja1ZhbHVlXVxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlciwgaWYgbGFzdEhlbHBlcjogdmFsdWVcblx0ICBhbWJpZ3VvdXNCbG9ja1ZhbHVlOiBmdW5jdGlvbiBhbWJpZ3VvdXNCbG9ja1ZhbHVlKCkge1xuXHQgICAgLy8gV2UncmUgYmVpbmcgYSBiaXQgY2hlZWt5IGFuZCByZXVzaW5nIHRoZSBvcHRpb25zIHZhbHVlIGZyb20gdGhlIHByaW9yIGV4ZWNcblx0ICAgIHZhciBibG9ja0hlbHBlck1pc3NpbmcgPSB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmcnKSxcblx0ICAgICAgICBwYXJhbXMgPSBbdGhpcy5jb250ZXh0TmFtZSgwKV07XG5cdCAgICB0aGlzLnNldHVwSGVscGVyQXJncygnJywgMCwgcGFyYW1zLCB0cnVlKTtcblxuXHQgICAgdGhpcy5mbHVzaElubGluZSgpO1xuXG5cdCAgICB2YXIgY3VycmVudCA9IHRoaXMudG9wU3RhY2soKTtcblx0ICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgY3VycmVudCk7XG5cblx0ICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICghJywgdGhpcy5sYXN0SGVscGVyLCAnKSB7ICcsIGN1cnJlbnQsICcgPSAnLCB0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoYmxvY2tIZWxwZXJNaXNzaW5nLCAnY2FsbCcsIHBhcmFtcyksICd9J10pO1xuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kQ29udGVudF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBBcHBlbmRzIHRoZSBzdHJpbmcgdmFsdWUgb2YgYGNvbnRlbnRgIHRvIHRoZSBjdXJyZW50IGJ1ZmZlclxuXHQgIGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoY29udGVudCkge1xuXHQgICAgaWYgKHRoaXMucGVuZGluZ0NvbnRlbnQpIHtcblx0ICAgICAgY29udGVudCA9IHRoaXMucGVuZGluZ0NvbnRlbnQgKyBjb250ZW50O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wZW5kaW5nTG9jYXRpb24gPSB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb247XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucGVuZGluZ0NvbnRlbnQgPSBjb250ZW50O1xuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBDb2VyY2VzIGB2YWx1ZWAgdG8gYSBTdHJpbmcgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGN1cnJlbnQgYnVmZmVyLlxuXHQgIC8vXG5cdCAgLy8gSWYgYHZhbHVlYCBpcyB0cnV0aHksIG9yIDAsIGl0IGlzIGNvZXJjZWQgaW50byBhIHN0cmluZyBhbmQgYXBwZW5kZWRcblx0ICAvLyBPdGhlcndpc2UsIHRoZSBlbXB0eSBzdHJpbmcgaXMgYXBwZW5kZWRcblx0ICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcblx0ICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcblx0ICAgICAgdGhpcy5yZXBsYWNlU3RhY2soZnVuY3Rpb24gKGN1cnJlbnQpIHtcblx0ICAgICAgICByZXR1cm4gWycgIT0gbnVsbCA/ICcsIGN1cnJlbnQsICcgOiBcIlwiJ107XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIHRoaXMucHVzaFNvdXJjZSh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMucG9wU3RhY2soKSkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdmFyIGxvY2FsID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICB0aGlzLnB1c2hTb3VyY2UoWydpZiAoJywgbG9jYWwsICcgIT0gbnVsbCkgeyAnLCB0aGlzLmFwcGVuZFRvQnVmZmVyKGxvY2FsLCB1bmRlZmluZWQsIHRydWUpLCAnIH0nXSk7XG5cdCAgICAgIGlmICh0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlKSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU291cmNlKFsnZWxzZSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIoXCInJ1wiLCB1bmRlZmluZWQsIHRydWUpLCAnIH0nXSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gW2FwcGVuZEVzY2FwZWRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIEVzY2FwZSBgdmFsdWVgIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGJ1ZmZlclxuXHQgIGFwcGVuZEVzY2FwZWQ6IGZ1bmN0aW9uIGFwcGVuZEVzY2FwZWQoKSB7XG5cdCAgICB0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcihbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uJyksICcoJywgdGhpcy5wb3BTdGFjaygpLCAnKSddKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtnZXRDb250ZXh0XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYWZ0ZXI6IGxhc3RDb250ZXh0PWRlcHRoXG5cdCAgLy9cblx0ICAvLyBTZXQgdGhlIHZhbHVlIG9mIHRoZSBgbGFzdENvbnRleHRgIGNvbXBpbGVyIHZhbHVlIHRvIHRoZSBkZXB0aFxuXHQgIGdldENvbnRleHQ6IGZ1bmN0aW9uIGdldENvbnRleHQoZGVwdGgpIHtcblx0ICAgIHRoaXMubGFzdENvbnRleHQgPSBkZXB0aDtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hDb250ZXh0XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBjdXJyZW50Q29udGV4dCwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoZXMgdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQgb250byB0aGUgc3RhY2suXG5cdCAgcHVzaENvbnRleHQ6IGZ1bmN0aW9uIHB1c2hDb250ZXh0KCkge1xuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMuY29udGV4dE5hbWUodGhpcy5sYXN0Q29udGV4dCkpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwT25Db250ZXh0XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBjdXJyZW50Q29udGV4dFtuYW1lXSwgLi4uXG5cdCAgLy9cblx0ICAvLyBMb29rcyB1cCB0aGUgdmFsdWUgb2YgYG5hbWVgIG9uIHRoZSBjdXJyZW50IGNvbnRleHQgYW5kIHB1c2hlc1xuXHQgIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuXHQgIGxvb2t1cE9uQ29udGV4dDogZnVuY3Rpb24gbG9va3VwT25Db250ZXh0KHBhcnRzLCBmYWxzeSwgc3RyaWN0LCBzY29wZWQpIHtcblx0ICAgIHZhciBpID0gMDtcblxuXHQgICAgaWYgKCFzY29wZWQgJiYgdGhpcy5vcHRpb25zLmNvbXBhdCAmJiAhdGhpcy5sYXN0Q29udGV4dCkge1xuXHQgICAgICAvLyBUaGUgZGVwdGhlZCBxdWVyeSBpcyBleHBlY3RlZCB0byBoYW5kbGUgdGhlIHVuZGVmaW5lZCBsb2dpYyBmb3IgdGhlIHJvb3QgbGV2ZWwgdGhhdFxuXHQgICAgICAvLyBpcyBpbXBsZW1lbnRlZCBiZWxvdywgc28gd2UgZXZhbHVhdGUgdGhhdCBkaXJlY3RseSBpbiBjb21wYXQgbW9kZVxuXHQgICAgICB0aGlzLnB1c2godGhpcy5kZXB0aGVkTG9va3VwKHBhcnRzW2krK10pKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaENvbnRleHQoKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KTtcblx0ICB9LFxuXG5cdCAgLy8gW2xvb2t1cEJsb2NrUGFyYW1dXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGJsb2NrUGFyYW1bbmFtZV0sIC4uLlxuXHQgIC8vXG5cdCAgLy8gTG9va3MgdXAgdGhlIHZhbHVlIG9mIGBwYXJ0c2Agb24gdGhlIGdpdmVuIGJsb2NrIHBhcmFtIGFuZCBwdXNoZXNcblx0ICAvLyBpdCBvbnRvIHRoZSBzdGFjay5cblx0ICBsb29rdXBCbG9ja1BhcmFtOiBmdW5jdGlvbiBsb29rdXBCbG9ja1BhcmFtKGJsb2NrUGFyYW1JZCwgcGFydHMpIHtcblx0ICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0cnVlO1xuXG5cdCAgICB0aGlzLnB1c2goWydibG9ja1BhcmFtc1snLCBibG9ja1BhcmFtSWRbMF0sICddWycsIGJsb2NrUGFyYW1JZFsxXSwgJ10nXSk7XG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdjb250ZXh0JywgcGFydHMsIDEpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwRGF0YV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogZGF0YSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIHRoZSBkYXRhIGxvb2t1cCBvcGVyYXRvclxuXHQgIGxvb2t1cERhdGE6IGZ1bmN0aW9uIGxvb2t1cERhdGEoZGVwdGgsIHBhcnRzLCBzdHJpY3QpIHtcblx0ICAgIGlmICghZGVwdGgpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdkYXRhJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2NvbnRhaW5lci5kYXRhKGRhdGEsICcgKyBkZXB0aCArICcpJyk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2RhdGEnLCBwYXJ0cywgMCwgdHJ1ZSwgc3RyaWN0KTtcblx0ICB9LFxuXG5cdCAgcmVzb2x2ZVBhdGg6IGZ1bmN0aW9uIHJlc29sdmVQYXRoKHR5cGUsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KSB7XG5cdCAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLnN0cmljdCB8fCB0aGlzLm9wdGlvbnMuYXNzdW1lT2JqZWN0cykge1xuXHQgICAgICB0aGlzLnB1c2goc3RyaWN0TG9va3VwKHRoaXMub3B0aW9ucy5zdHJpY3QgJiYgc3RyaWN0LCB0aGlzLCBwYXJ0cywgdHlwZSkpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHZhciBsZW4gPSBwYXJ0cy5sZW5ndGg7XG5cdCAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXHQgICAgICB0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbiAoY3VycmVudCkge1xuXHQgICAgICAgIHZhciBsb29rdXAgPSBfdGhpcy5uYW1lTG9va3VwKGN1cnJlbnQsIHBhcnRzW2ldLCB0eXBlKTtcblx0ICAgICAgICAvLyBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IHplcm8gYW5kIGZhbHNlIGFyZSBoYW5kbGVkIHByb3Blcmx5IGlmIHRoZSBjb250ZXh0IChmYWxzeSBmbGFnKVxuXHQgICAgICAgIC8vIG5lZWRzIHRvIGhhdmUgdGhlIHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRoZXNlIHZhbHVlcy5cblx0ICAgICAgICBpZiAoIWZhbHN5KSB7XG5cdCAgICAgICAgICByZXR1cm4gWycgIT0gbnVsbCA/ICcsIGxvb2t1cCwgJyA6ICcsIGN1cnJlbnRdO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2FuIHVzZSBnZW5lcmljIGZhbHN5IGhhbmRsaW5nXG5cdCAgICAgICAgICByZXR1cm4gWycgJiYgJywgbG9va3VwXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbcmVzb2x2ZVBvc3NpYmxlTGFtYmRhXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzb2x2ZWQgdmFsdWUsIC4uLlxuXHQgIC8vXG5cdCAgLy8gSWYgdGhlIGB2YWx1ZWAgaXMgYSBsYW1iZGEsIHJlcGxhY2UgaXQgb24gdGhlIHN0YWNrIGJ5XG5cdCAgLy8gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbGFtYmRhXG5cdCAgcmVzb2x2ZVBvc3NpYmxlTGFtYmRhOiBmdW5jdGlvbiByZXNvbHZlUG9zc2libGVMYW1iZGEoKSB7XG5cdCAgICB0aGlzLnB1c2goW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubGFtYmRhJyksICcoJywgdGhpcy5wb3BTdGFjaygpLCAnLCAnLCB0aGlzLmNvbnRleHROYW1lKDApLCAnKSddKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hTdHJpbmdQYXJhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogc3RyaW5nLCBjdXJyZW50Q29udGV4dCwgLi4uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wY29kZSBpcyBkZXNpZ25lZCBmb3IgdXNlIGluIHN0cmluZyBtb2RlLCB3aGljaFxuXHQgIC8vIHByb3ZpZGVzIHRoZSBzdHJpbmcgdmFsdWUgb2YgYSBwYXJhbWV0ZXIgYWxvbmcgd2l0aCBpdHNcblx0ICAvLyBkZXB0aCByYXRoZXIgdGhhbiByZXNvbHZpbmcgaXQgaW1tZWRpYXRlbHkuXG5cdCAgcHVzaFN0cmluZ1BhcmFtOiBmdW5jdGlvbiBwdXNoU3RyaW5nUGFyYW0oc3RyaW5nLCB0eXBlKSB7XG5cdCAgICB0aGlzLnB1c2hDb250ZXh0KCk7XG5cdCAgICB0aGlzLnB1c2hTdHJpbmcodHlwZSk7XG5cblx0ICAgIC8vIElmIGl0J3MgYSBzdWJleHByZXNzaW9uLCB0aGUgc3RyaW5nIHJlc3VsdFxuXHQgICAgLy8gd2lsbCBiZSBwdXNoZWQgYWZ0ZXIgdGhpcyBvcGNvZGUuXG5cdCAgICBpZiAodHlwZSAhPT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHRoaXMucHVzaFN0cmluZyhzdHJpbmcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChzdHJpbmcpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGVtcHR5SGFzaDogZnVuY3Rpb24gZW1wdHlIYXNoKG9taXRFbXB0eSkge1xuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoSWRzXG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoQ29udGV4dHNcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoVHlwZXNcblx0ICAgIH1cblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChvbWl0RW1wdHkgPyAndW5kZWZpbmVkJyA6ICd7fScpO1xuXHQgIH0sXG5cdCAgcHVzaEhhc2g6IGZ1bmN0aW9uIHB1c2hIYXNoKCkge1xuXHQgICAgaWYgKHRoaXMuaGFzaCkge1xuXHQgICAgICB0aGlzLmhhc2hlcy5wdXNoKHRoaXMuaGFzaCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLmhhc2ggPSB7IHZhbHVlczogW10sIHR5cGVzOiBbXSwgY29udGV4dHM6IFtdLCBpZHM6IFtdIH07XG5cdCAgfSxcblx0ICBwb3BIYXNoOiBmdW5jdGlvbiBwb3BIYXNoKCkge1xuXHQgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cdCAgICB0aGlzLmhhc2ggPSB0aGlzLmhhc2hlcy5wb3AoKTtcblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLmlkcykpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC5jb250ZXh0cykpO1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudHlwZXMpKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLnZhbHVlcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFN0cmluZ11cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcXVvdGVkU3RyaW5nKHN0cmluZyksIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCBhIHF1b3RlZCB2ZXJzaW9uIG9mIGBzdHJpbmdgIG9udG8gdGhlIHN0YWNrXG5cdCAgcHVzaFN0cmluZzogZnVuY3Rpb24gcHVzaFN0cmluZyhzdHJpbmcpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnF1b3RlZFN0cmluZyhzdHJpbmcpKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hMaXRlcmFsXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiB2YWx1ZSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoZXMgYSB2YWx1ZSBvbnRvIHRoZSBzdGFjay4gVGhpcyBvcGVyYXRpb24gcHJldmVudHNcblx0ICAvLyB0aGUgY29tcGlsZXIgZnJvbSBjcmVhdGluZyBhIHRlbXBvcmFyeSB2YXJpYWJsZSB0byBob2xkXG5cdCAgLy8gaXQuXG5cdCAgcHVzaExpdGVyYWw6IGZ1bmN0aW9uIHB1c2hMaXRlcmFsKHZhbHVlKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodmFsdWUpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFByb2dyYW1dXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHByb2dyYW0oZ3VpZCksIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCBhIHByb2dyYW0gZXhwcmVzc2lvbiBvbnRvIHRoZSBzdGFjay4gVGhpcyB0YWtlc1xuXHQgIC8vIGEgY29tcGlsZS10aW1lIGd1aWQgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBydW50aW1lLWFjY2Vzc2libGVcblx0ICAvLyBleHByZXNzaW9uLlxuXHQgIHB1c2hQcm9ncmFtOiBmdW5jdGlvbiBwdXNoUHJvZ3JhbShndWlkKSB7XG5cdCAgICBpZiAoZ3VpZCAhPSBudWxsKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnByb2dyYW1FeHByZXNzaW9uKGd1aWQpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChudWxsKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gW3JlZ2lzdGVyRGVjb3JhdG9yXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gUG9wcyBvZmYgdGhlIGRlY29yYXRvcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGRlY29yYXRvcixcblx0ICAvLyBhbmQgaW5zZXJ0cyB0aGUgZGVjb3JhdG9yIGludG8gdGhlIGRlY29yYXRvcnMgbGlzdC5cblx0ICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgZm91bmREZWNvcmF0b3IgPSB0aGlzLm5hbWVMb29rdXAoJ2RlY29yYXRvcnMnLCBuYW1lLCAnZGVjb3JhdG9yJyksXG5cdCAgICAgICAgb3B0aW9ucyA9IHRoaXMuc2V0dXBIZWxwZXJBcmdzKG5hbWUsIHBhcmFtU2l6ZSk7XG5cblx0ICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKFsnZm4gPSAnLCB0aGlzLmRlY29yYXRvcnMuZnVuY3Rpb25DYWxsKGZvdW5kRGVjb3JhdG9yLCAnJywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCBvcHRpb25zXSksICcgfHwgZm47J10pO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlSGVscGVyXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBoZWxwZXIgaW52b2NhdGlvblxuXHQgIC8vXG5cdCAgLy8gUG9wcyBvZmYgdGhlIGhlbHBlcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGhlbHBlcixcblx0ICAvLyBhbmQgcHVzaGVzIHRoZSBoZWxwZXIncyByZXR1cm4gdmFsdWUgb250byB0aGUgc3RhY2suXG5cdCAgLy9cblx0ICAvLyBJZiB0aGUgaGVscGVyIGlzIG5vdCBmb3VuZCwgYGhlbHBlck1pc3NpbmdgIGlzIGNhbGxlZC5cblx0ICBpbnZva2VIZWxwZXI6IGZ1bmN0aW9uIGludm9rZUhlbHBlcihwYXJhbVNpemUsIG5hbWUsIGlzU2ltcGxlKSB7XG5cdCAgICB2YXIgbm9uSGVscGVyID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKSxcblx0ICAgICAgICBzaW1wbGUgPSBpc1NpbXBsZSA/IFtoZWxwZXIubmFtZSwgJyB8fCAnXSA6ICcnO1xuXG5cdCAgICB2YXIgbG9va3VwID0gWycoJ10uY29uY2F0KHNpbXBsZSwgbm9uSGVscGVyKTtcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLnN0cmljdCkge1xuXHQgICAgICBsb29rdXAucHVzaCgnIHx8ICcsIHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmhlbHBlck1pc3NpbmcnKSk7XG5cdCAgICB9XG5cdCAgICBsb29rdXAucHVzaCgnKScpO1xuXG5cdCAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGxvb2t1cCwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlS25vd25IZWxwZXJdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBpcyB1c2VkIHdoZW4gdGhlIGhlbHBlciBpcyBrbm93biB0byBleGlzdCxcblx0ICAvLyBzbyBhIGBoZWxwZXJNaXNzaW5nYCBmYWxsYmFjayBpcyBub3QgcmVxdWlyZWQuXG5cdCAgaW52b2tlS25vd25IZWxwZXI6IGZ1bmN0aW9uIGludm9rZUtub3duSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSkge1xuXHQgICAgdmFyIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKTtcblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoaGVscGVyLm5hbWUsICdjYWxsJywgaGVscGVyLmNhbGxQYXJhbXMpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2ludm9rZUFtYmlndW91c11cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgZGlzYW1iaWd1YXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiBhbiBleHByZXNzaW9uIGxpa2UgYHt7Zm9vfX1gXG5cdCAgLy8gaXMgcHJvdmlkZWQsIGJ1dCB3ZSBkb24ndCBrbm93IGF0IGNvbXBpbGUtdGltZSB3aGV0aGVyIGl0XG5cdCAgLy8gaXMgYSBoZWxwZXIgb3IgYSBwYXRoLlxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gZW1pdHMgbW9yZSBjb2RlIHRoYW4gdGhlIG90aGVyIG9wdGlvbnMsXG5cdCAgLy8gYW5kIGNhbiBiZSBhdm9pZGVkIGJ5IHBhc3NpbmcgdGhlIGBrbm93bkhlbHBlcnNgIGFuZFxuXHQgIC8vIGBrbm93bkhlbHBlcnNPbmx5YCBmbGFncyBhdCBjb21waWxlLXRpbWUuXG5cdCAgaW52b2tlQW1iaWd1b3VzOiBmdW5jdGlvbiBpbnZva2VBbWJpZ3VvdXMobmFtZSwgaGVscGVyQ2FsbCkge1xuXHQgICAgdGhpcy51c2VSZWdpc3RlcignaGVscGVyJyk7XG5cblx0ICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIHRoaXMuZW1wdHlIYXNoKCk7XG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcigwLCBuYW1lLCBoZWxwZXJDYWxsKTtcblxuXHQgICAgdmFyIGhlbHBlck5hbWUgPSB0aGlzLmxhc3RIZWxwZXIgPSB0aGlzLm5hbWVMb29rdXAoJ2hlbHBlcnMnLCBuYW1lLCAnaGVscGVyJyk7XG5cblx0ICAgIHZhciBsb29rdXAgPSBbJygnLCAnKGhlbHBlciA9ICcsIGhlbHBlck5hbWUsICcgfHwgJywgbm9uSGVscGVyLCAnKSddO1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XG5cdCAgICAgIGxvb2t1cFswXSA9ICcoaGVscGVyID0gJztcblx0ICAgICAgbG9va3VwLnB1c2goJyAhPSBudWxsID8gaGVscGVyIDogJywgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wdXNoKFsnKCcsIGxvb2t1cCwgaGVscGVyLnBhcmFtc0luaXQgPyBbJyksKCcsIGhlbHBlci5wYXJhbXNJbml0XSA6IFtdLCAnKSwnLCAnKHR5cGVvZiBoZWxwZXIgPT09ICcsIHRoaXMuYWxpYXNhYmxlKCdcImZ1bmN0aW9uXCInKSwgJyA/ICcsIHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbCgnaGVscGVyJywgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcyksICcgOiBoZWxwZXIpKSddKTtcblx0ICB9LFxuXG5cdCAgLy8gW2ludm9rZVBhcnRpYWxdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBjb250ZXh0LCAuLi5cblx0ICAvLyBPbiBzdGFjayBhZnRlcjogcmVzdWx0IG9mIHBhcnRpYWwgaW52b2NhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gcG9wcyBvZmYgYSBjb250ZXh0LCBpbnZva2VzIGEgcGFydGlhbCB3aXRoIHRoYXQgY29udGV4dCxcblx0ICAvLyBhbmQgcHVzaGVzIHRoZSByZXN1bHQgb2YgdGhlIGludm9jYXRpb24gYmFjay5cblx0ICBpbnZva2VQYXJ0aWFsOiBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKGlzRHluYW1pYywgbmFtZSwgaW5kZW50KSB7XG5cdCAgICB2YXIgcGFyYW1zID0gW10sXG5cdCAgICAgICAgb3B0aW9ucyA9IHRoaXMuc2V0dXBQYXJhbXMobmFtZSwgMSwgcGFyYW1zKTtcblxuXHQgICAgaWYgKGlzRHluYW1pYykge1xuXHQgICAgICBuYW1lID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBkZWxldGUgb3B0aW9ucy5uYW1lO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW5kZW50KSB7XG5cdCAgICAgIG9wdGlvbnMuaW5kZW50ID0gSlNPTi5zdHJpbmdpZnkoaW5kZW50KTtcblx0ICAgIH1cblx0ICAgIG9wdGlvbnMuaGVscGVycyA9ICdoZWxwZXJzJztcblx0ICAgIG9wdGlvbnMucGFydGlhbHMgPSAncGFydGlhbHMnO1xuXHQgICAgb3B0aW9ucy5kZWNvcmF0b3JzID0gJ2NvbnRhaW5lci5kZWNvcmF0b3JzJztcblxuXHQgICAgaWYgKCFpc0R5bmFtaWMpIHtcblx0ICAgICAgcGFyYW1zLnVuc2hpZnQodGhpcy5uYW1lTG9va3VwKCdwYXJ0aWFscycsIG5hbWUsICdwYXJ0aWFsJykpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGFyYW1zLnVuc2hpZnQobmFtZSk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICAgIG9wdGlvbnMuZGVwdGhzID0gJ2RlcHRocyc7XG5cdCAgICB9XG5cdCAgICBvcHRpb25zID0gdGhpcy5vYmplY3RMaXRlcmFsKG9wdGlvbnMpO1xuXHQgICAgcGFyYW1zLnB1c2gob3B0aW9ucyk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoJ2NvbnRhaW5lci5pbnZva2VQYXJ0aWFsJywgJycsIHBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbYXNzaWduVG9IYXNoXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLiwgaGFzaCwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi4sIGhhc2gsIC4uLlxuXHQgIC8vXG5cdCAgLy8gUG9wcyBhIHZhbHVlIG9mZiB0aGUgc3RhY2sgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGN1cnJlbnQgaGFzaFxuXHQgIGFzc2lnblRvSGFzaDogZnVuY3Rpb24gYXNzaWduVG9IYXNoKGtleSkge1xuXHQgICAgdmFyIHZhbHVlID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIGNvbnRleHQgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgdHlwZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBpZCA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgaWQgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdHlwZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgY29udGV4dCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cdCAgICBpZiAoY29udGV4dCkge1xuXHQgICAgICBoYXNoLmNvbnRleHRzW2tleV0gPSBjb250ZXh0O1xuXHQgICAgfVxuXHQgICAgaWYgKHR5cGUpIHtcblx0ICAgICAgaGFzaC50eXBlc1trZXldID0gdHlwZTtcblx0ICAgIH1cblx0ICAgIGlmIChpZCkge1xuXHQgICAgICBoYXNoLmlkc1trZXldID0gaWQ7XG5cdCAgICB9XG5cdCAgICBoYXNoLnZhbHVlc1trZXldID0gdmFsdWU7XG5cdCAgfSxcblxuXHQgIHB1c2hJZDogZnVuY3Rpb24gcHVzaElkKHR5cGUsIG5hbWUsIGNoaWxkKSB7XG5cdCAgICBpZiAodHlwZSA9PT0gJ0Jsb2NrUGFyYW0nKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnYmxvY2tQYXJhbXNbJyArIG5hbWVbMF0gKyAnXS5wYXRoWycgKyBuYW1lWzFdICsgJ10nICsgKGNoaWxkID8gJyArICcgKyBKU09OLnN0cmluZ2lmeSgnLicgKyBjaGlsZCkgOiAnJykpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUGF0aEV4cHJlc3Npb24nKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0cmluZyhuYW1lKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgndHJ1ZScpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdudWxsJyk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIEhFTFBFUlNcblxuXHQgIGNvbXBpbGVyOiBKYXZhU2NyaXB0Q29tcGlsZXIsXG5cblx0ICBjb21waWxlQ2hpbGRyZW46IGZ1bmN0aW9uIGNvbXBpbGVDaGlsZHJlbihlbnZpcm9ubWVudCwgb3B0aW9ucykge1xuXHQgICAgdmFyIGNoaWxkcmVuID0gZW52aXJvbm1lbnQuY2hpbGRyZW4sXG5cdCAgICAgICAgY2hpbGQgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY29tcGlsZXIgPSB1bmRlZmluZWQ7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG5cdCAgICAgIGNvbXBpbGVyID0gbmV3IHRoaXMuY29tcGlsZXIoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cblx0ICAgICAgdmFyIGV4aXN0aW5nID0gdGhpcy5tYXRjaEV4aXN0aW5nUHJvZ3JhbShjaGlsZCk7XG5cblx0ICAgICAgaWYgKGV4aXN0aW5nID09IG51bGwpIHtcblx0ICAgICAgICB0aGlzLmNvbnRleHQucHJvZ3JhbXMucHVzaCgnJyk7IC8vIFBsYWNlaG9sZGVyIHRvIHByZXZlbnQgbmFtZSBjb25mbGljdHMgZm9yIG5lc3RlZCBjaGlsZHJlblxuXHQgICAgICAgIHZhciBpbmRleCA9IHRoaXMuY29udGV4dC5wcm9ncmFtcy5sZW5ndGg7XG5cdCAgICAgICAgY2hpbGQuaW5kZXggPSBpbmRleDtcblx0ICAgICAgICBjaGlsZC5uYW1lID0gJ3Byb2dyYW0nICsgaW5kZXg7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LnByb2dyYW1zW2luZGV4XSA9IGNvbXBpbGVyLmNvbXBpbGUoY2hpbGQsIG9wdGlvbnMsIHRoaXMuY29udGV4dCwgIXRoaXMucHJlY29tcGlsZSk7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LmRlY29yYXRvcnNbaW5kZXhdID0gY29tcGlsZXIuZGVjb3JhdG9ycztcblx0ICAgICAgICB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2luZGV4XSA9IGNoaWxkO1xuXG5cdCAgICAgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBjb21waWxlci51c2VEZXB0aHM7XG5cdCAgICAgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgY29tcGlsZXIudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgICAgY2hpbGQudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHM7XG5cdCAgICAgICAgY2hpbGQudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGNoaWxkLmluZGV4ID0gZXhpc3RpbmcuaW5kZXg7XG5cdCAgICAgICAgY2hpbGQubmFtZSA9ICdwcm9ncmFtJyArIGV4aXN0aW5nLmluZGV4O1xuXG5cdCAgICAgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBleGlzdGluZy51c2VEZXB0aHM7XG5cdCAgICAgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZXhpc3RpbmcudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIG1hdGNoRXhpc3RpbmdQcm9ncmFtOiBmdW5jdGlvbiBtYXRjaEV4aXN0aW5nUHJvZ3JhbShjaGlsZCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIGVudmlyb25tZW50ID0gdGhpcy5jb250ZXh0LmVudmlyb25tZW50c1tpXTtcblx0ICAgICAgaWYgKGVudmlyb25tZW50ICYmIGVudmlyb25tZW50LmVxdWFscyhjaGlsZCkpIHtcblx0ICAgICAgICByZXR1cm4gZW52aXJvbm1lbnQ7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHJvZ3JhbUV4cHJlc3Npb246IGZ1bmN0aW9uIHByb2dyYW1FeHByZXNzaW9uKGd1aWQpIHtcblx0ICAgIHZhciBjaGlsZCA9IHRoaXMuZW52aXJvbm1lbnQuY2hpbGRyZW5bZ3VpZF0sXG5cdCAgICAgICAgcHJvZ3JhbVBhcmFtcyA9IFtjaGlsZC5pbmRleCwgJ2RhdGEnLCBjaGlsZC5ibG9ja1BhcmFtc107XG5cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnYmxvY2tQYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwcm9ncmFtUGFyYW1zLnB1c2goJ2RlcHRocycpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gJ2NvbnRhaW5lci5wcm9ncmFtKCcgKyBwcm9ncmFtUGFyYW1zLmpvaW4oJywgJykgKyAnKSc7XG5cdCAgfSxcblxuXHQgIHVzZVJlZ2lzdGVyOiBmdW5jdGlvbiB1c2VSZWdpc3RlcihuYW1lKSB7XG5cdCAgICBpZiAoIXRoaXMucmVnaXN0ZXJzW25hbWVdKSB7XG5cdCAgICAgIHRoaXMucmVnaXN0ZXJzW25hbWVdID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5yZWdpc3RlcnMubGlzdC5wdXNoKG5hbWUpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoOiBmdW5jdGlvbiBwdXNoKGV4cHIpIHtcblx0ICAgIGlmICghKGV4cHIgaW5zdGFuY2VvZiBMaXRlcmFsKSkge1xuXHQgICAgICBleHByID0gdGhpcy5zb3VyY2Uud3JhcChleHByKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5pbmxpbmVTdGFjay5wdXNoKGV4cHIpO1xuXHQgICAgcmV0dXJuIGV4cHI7XG5cdCAgfSxcblxuXHQgIHB1c2hTdGFja0xpdGVyYWw6IGZ1bmN0aW9uIHB1c2hTdGFja0xpdGVyYWwoaXRlbSkge1xuXHQgICAgdGhpcy5wdXNoKG5ldyBMaXRlcmFsKGl0ZW0pKTtcblx0ICB9LFxuXG5cdCAgcHVzaFNvdXJjZTogZnVuY3Rpb24gcHVzaFNvdXJjZShzb3VyY2UpIHtcblx0ICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XG5cdCAgICAgIHRoaXMuc291cmNlLnB1c2godGhpcy5hcHBlbmRUb0J1ZmZlcih0aGlzLnNvdXJjZS5xdW90ZWRTdHJpbmcodGhpcy5wZW5kaW5nQ29udGVudCksIHRoaXMucGVuZGluZ0xvY2F0aW9uKSk7XG5cdCAgICAgIHRoaXMucGVuZGluZ0NvbnRlbnQgPSB1bmRlZmluZWQ7XG5cdCAgICB9XG5cblx0ICAgIGlmIChzb3VyY2UpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaChzb3VyY2UpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICByZXBsYWNlU3RhY2s6IGZ1bmN0aW9uIHJlcGxhY2VTdGFjayhjYWxsYmFjaykge1xuXHQgICAgdmFyIHByZWZpeCA9IFsnKCddLFxuXHQgICAgICAgIHN0YWNrID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGNyZWF0ZWRTdGFjayA9IHVuZGVmaW5lZCxcblx0ICAgICAgICB1c2VkTGl0ZXJhbCA9IHVuZGVmaW5lZDtcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgIGlmICghdGhpcy5pc0lubGluZSgpKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdyZXBsYWNlU3RhY2sgb24gbm9uLWlubGluZScpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBXZSB3YW50IHRvIG1lcmdlIHRoZSBpbmxpbmUgc3RhdGVtZW50IGludG8gdGhlIHJlcGxhY2VtZW50IHN0YXRlbWVudCB2aWEgJywnXG5cdCAgICB2YXIgdG9wID0gdGhpcy5wb3BTdGFjayh0cnVlKTtcblxuXHQgICAgaWYgKHRvcCBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgLy8gTGl0ZXJhbHMgZG8gbm90IG5lZWQgdG8gYmUgaW5saW5lZFxuXHQgICAgICBzdGFjayA9IFt0b3AudmFsdWVdO1xuXHQgICAgICBwcmVmaXggPSBbJygnLCBzdGFja107XG5cdCAgICAgIHVzZWRMaXRlcmFsID0gdHJ1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIEdldCBvciBjcmVhdGUgdGhlIGN1cnJlbnQgc3RhY2sgbmFtZSBmb3IgdXNlIGJ5IHRoZSBpbmxpbmVcblx0ICAgICAgY3JlYXRlZFN0YWNrID0gdHJ1ZTtcblx0ICAgICAgdmFyIF9uYW1lID0gdGhpcy5pbmNyU3RhY2soKTtcblxuXHQgICAgICBwcmVmaXggPSBbJygoJywgdGhpcy5wdXNoKF9uYW1lKSwgJyA9ICcsIHRvcCwgJyknXTtcblx0ICAgICAgc3RhY2sgPSB0aGlzLnRvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBpdGVtID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdGFjayk7XG5cblx0ICAgIGlmICghdXNlZExpdGVyYWwpIHtcblx0ICAgICAgdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXHQgICAgaWYgKGNyZWF0ZWRTdGFjaykge1xuXHQgICAgICB0aGlzLnN0YWNrU2xvdC0tO1xuXHQgICAgfVxuXHQgICAgdGhpcy5wdXNoKHByZWZpeC5jb25jYXQoaXRlbSwgJyknKSk7XG5cdCAgfSxcblxuXHQgIGluY3JTdGFjazogZnVuY3Rpb24gaW5jclN0YWNrKCkge1xuXHQgICAgdGhpcy5zdGFja1Nsb3QrKztcblx0ICAgIGlmICh0aGlzLnN0YWNrU2xvdCA+IHRoaXMuc3RhY2tWYXJzLmxlbmd0aCkge1xuXHQgICAgICB0aGlzLnN0YWNrVmFycy5wdXNoKCdzdGFjaycgKyB0aGlzLnN0YWNrU2xvdCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gdGhpcy50b3BTdGFja05hbWUoKTtcblx0ICB9LFxuXHQgIHRvcFN0YWNrTmFtZTogZnVuY3Rpb24gdG9wU3RhY2tOYW1lKCkge1xuXHQgICAgcmV0dXJuICdzdGFjaycgKyB0aGlzLnN0YWNrU2xvdDtcblx0ICB9LFxuXHQgIGZsdXNoSW5saW5lOiBmdW5jdGlvbiBmbHVzaElubGluZSgpIHtcblx0ICAgIHZhciBpbmxpbmVTdGFjayA9IHRoaXMuaW5saW5lU3RhY2s7XG5cdCAgICB0aGlzLmlubGluZVN0YWNrID0gW107XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaW5saW5lU3RhY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIGVudHJ5ID0gaW5saW5lU3RhY2tbaV07XG5cdCAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXHQgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChlbnRyeSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5pbmNyU3RhY2soKTtcblx0ICAgICAgICB0aGlzLnB1c2hTb3VyY2UoW3N0YWNrLCAnID0gJywgZW50cnksICc7J10pO1xuXHQgICAgICAgIHRoaXMuY29tcGlsZVN0YWNrLnB1c2goc3RhY2spO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBpc0lubGluZTogZnVuY3Rpb24gaXNJbmxpbmUoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5pbmxpbmVTdGFjay5sZW5ndGg7XG5cdCAgfSxcblxuXHQgIHBvcFN0YWNrOiBmdW5jdGlvbiBwb3BTdGFjayh3cmFwcGVkKSB7XG5cdCAgICB2YXIgaW5saW5lID0gdGhpcy5pc0lubGluZSgpLFxuXHQgICAgICAgIGl0ZW0gPSAoaW5saW5lID8gdGhpcy5pbmxpbmVTdGFjayA6IHRoaXMuY29tcGlsZVN0YWNrKS5wb3AoKTtcblxuXHQgICAgaWYgKCF3cmFwcGVkICYmIGl0ZW0gaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKCFpbmxpbmUpIHtcblx0ICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgICAgIGlmICghdGhpcy5zdGFja1Nsb3QpIHtcblx0ICAgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdJbnZhbGlkIHN0YWNrIHBvcCcpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnN0YWNrU2xvdC0tO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBpdGVtO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICB0b3BTdGFjazogZnVuY3Rpb24gdG9wU3RhY2soKSB7XG5cdCAgICB2YXIgc3RhY2sgPSB0aGlzLmlzSW5saW5lKCkgPyB0aGlzLmlubGluZVN0YWNrIDogdGhpcy5jb21waWxlU3RhY2ssXG5cdCAgICAgICAgaXRlbSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblx0ICAgIGlmIChpdGVtIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBpdGVtO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBjb250ZXh0TmFtZTogZnVuY3Rpb24gY29udGV4dE5hbWUoY29udGV4dCkge1xuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzICYmIGNvbnRleHQpIHtcblx0ICAgICAgcmV0dXJuICdkZXB0aHNbJyArIGNvbnRleHQgKyAnXSc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gJ2RlcHRoJyArIGNvbnRleHQ7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHF1b3RlZFN0cmluZzogZnVuY3Rpb24gcXVvdGVkU3RyaW5nKHN0cikge1xuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyhzdHIpO1xuXHQgIH0sXG5cblx0ICBvYmplY3RMaXRlcmFsOiBmdW5jdGlvbiBvYmplY3RMaXRlcmFsKG9iaikge1xuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLm9iamVjdExpdGVyYWwob2JqKTtcblx0ICB9LFxuXG5cdCAgYWxpYXNhYmxlOiBmdW5jdGlvbiBhbGlhc2FibGUobmFtZSkge1xuXHQgICAgdmFyIHJldCA9IHRoaXMuYWxpYXNlc1tuYW1lXTtcblx0ICAgIGlmIChyZXQpIHtcblx0ICAgICAgcmV0LnJlZmVyZW5jZUNvdW50Kys7XG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9XG5cblx0ICAgIHJldCA9IHRoaXMuYWxpYXNlc1tuYW1lXSA9IHRoaXMuc291cmNlLndyYXAobmFtZSk7XG5cdCAgICByZXQuYWxpYXNhYmxlID0gdHJ1ZTtcblx0ICAgIHJldC5yZWZlcmVuY2VDb3VudCA9IDE7XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIHNldHVwSGVscGVyOiBmdW5jdGlvbiBzZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUsIGJsb2NrSGVscGVyKSB7XG5cdCAgICB2YXIgcGFyYW1zID0gW10sXG5cdCAgICAgICAgcGFyYW1zSW5pdCA9IHRoaXMuc2V0dXBIZWxwZXJBcmdzKG5hbWUsIHBhcmFtU2l6ZSwgcGFyYW1zLCBibG9ja0hlbHBlcik7XG5cdCAgICB2YXIgZm91bmRIZWxwZXIgPSB0aGlzLm5hbWVMb29rdXAoJ2hlbHBlcnMnLCBuYW1lLCAnaGVscGVyJyksXG5cdCAgICAgICAgY2FsbENvbnRleHQgPSB0aGlzLmFsaWFzYWJsZSh0aGlzLmNvbnRleHROYW1lKDApICsgJyAhPSBudWxsID8gJyArIHRoaXMuY29udGV4dE5hbWUoMCkgKyAnIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSknKTtcblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgcGFyYW1zOiBwYXJhbXMsXG5cdCAgICAgIHBhcmFtc0luaXQ6IHBhcmFtc0luaXQsXG5cdCAgICAgIG5hbWU6IGZvdW5kSGVscGVyLFxuXHQgICAgICBjYWxsUGFyYW1zOiBbY2FsbENvbnRleHRdLmNvbmNhdChwYXJhbXMpXG5cdCAgICB9O1xuXHQgIH0sXG5cblx0ICBzZXR1cFBhcmFtczogZnVuY3Rpb24gc2V0dXBQYXJhbXMoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcykge1xuXHQgICAgdmFyIG9wdGlvbnMgPSB7fSxcblx0ICAgICAgICBjb250ZXh0cyA9IFtdLFxuXHQgICAgICAgIHR5cGVzID0gW10sXG5cdCAgICAgICAgaWRzID0gW10sXG5cdCAgICAgICAgb2JqZWN0QXJncyA9ICFwYXJhbXMsXG5cdCAgICAgICAgcGFyYW0gPSB1bmRlZmluZWQ7XG5cblx0ICAgIGlmIChvYmplY3RBcmdzKSB7XG5cdCAgICAgIHBhcmFtcyA9IFtdO1xuXHQgICAgfVxuXG5cdCAgICBvcHRpb25zLm5hbWUgPSB0aGlzLnF1b3RlZFN0cmluZyhoZWxwZXIpO1xuXHQgICAgb3B0aW9ucy5oYXNoID0gdGhpcy5wb3BTdGFjaygpO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBvcHRpb25zLmhhc2hJZHMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy5oYXNoVHlwZXMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIG9wdGlvbnMuaGFzaENvbnRleHRzID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaW52ZXJzZSA9IHRoaXMucG9wU3RhY2soKSxcblx0ICAgICAgICBwcm9ncmFtID0gdGhpcy5wb3BTdGFjaygpO1xuXG5cdCAgICAvLyBBdm9pZCBzZXR0aW5nIGZuIGFuZCBpbnZlcnNlIGlmIG5laXRoZXIgYXJlIHNldC4gVGhpcyBhbGxvd3Ncblx0ICAgIC8vIGhlbHBlcnMgdG8gZG8gYSBjaGVjayBmb3IgYGlmIChvcHRpb25zLmZuKWBcblx0ICAgIGlmIChwcm9ncmFtIHx8IGludmVyc2UpIHtcblx0ICAgICAgb3B0aW9ucy5mbiA9IHByb2dyYW0gfHwgJ2NvbnRhaW5lci5ub29wJztcblx0ICAgICAgb3B0aW9ucy5pbnZlcnNlID0gaW52ZXJzZSB8fCAnY29udGFpbmVyLm5vb3AnO1xuXHQgICAgfVxuXG5cdCAgICAvLyBUaGUgcGFyYW1ldGVycyBnbyBvbiB0byB0aGUgc3RhY2sgaW4gb3JkZXIgKG1ha2luZyBzdXJlIHRoYXQgdGhleSBhcmUgZXZhbHVhdGVkIGluIG9yZGVyKVxuXHQgICAgLy8gc28gd2UgbmVlZCB0byBwb3AgdGhlbSBvZmYgdGhlIHN0YWNrIGluIHJldmVyc2Ugb3JkZXJcblx0ICAgIHZhciBpID0gcGFyYW1TaXplO1xuXHQgICAgd2hpbGUgKGktLSkge1xuXHQgICAgICBwYXJhbSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgcGFyYW1zW2ldID0gcGFyYW07XG5cblx0ICAgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgICBpZHNbaV0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgICAgdHlwZXNbaV0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgICAgY29udGV4dHNbaV0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcblx0ICAgICAgb3B0aW9ucy5hcmdzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShwYXJhbXMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBvcHRpb25zLmlkcyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoaWRzKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLnR5cGVzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheSh0eXBlcyk7XG5cdCAgICAgIG9wdGlvbnMuY29udGV4dHMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGNvbnRleHRzKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5kYXRhKSB7XG5cdCAgICAgIG9wdGlvbnMuZGF0YSA9ICdkYXRhJztcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMuYmxvY2tQYXJhbXMgPSAnYmxvY2tQYXJhbXMnO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIG9wdGlvbnM7XG5cdCAgfSxcblxuXHQgIHNldHVwSGVscGVyQXJnczogZnVuY3Rpb24gc2V0dXBIZWxwZXJBcmdzKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMsIHVzZVJlZ2lzdGVyKSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IHRoaXMuc2V0dXBQYXJhbXMoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcyk7XG5cdCAgICBvcHRpb25zID0gdGhpcy5vYmplY3RMaXRlcmFsKG9wdGlvbnMpO1xuXHQgICAgaWYgKHVzZVJlZ2lzdGVyKSB7XG5cdCAgICAgIHRoaXMudXNlUmVnaXN0ZXIoJ29wdGlvbnMnKTtcblx0ICAgICAgcGFyYW1zLnB1c2goJ29wdGlvbnMnKTtcblx0ICAgICAgcmV0dXJuIFsnb3B0aW9ucz0nLCBvcHRpb25zXTtcblx0ICAgIH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKG9wdGlvbnMpO1xuXHQgICAgICByZXR1cm4gJyc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucztcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgcmVzZXJ2ZWRXb3JkcyA9ICgnYnJlYWsgZWxzZSBuZXcgdmFyJyArICcgY2FzZSBmaW5hbGx5IHJldHVybiB2b2lkJyArICcgY2F0Y2ggZm9yIHN3aXRjaCB3aGlsZScgKyAnIGNvbnRpbnVlIGZ1bmN0aW9uIHRoaXMgd2l0aCcgKyAnIGRlZmF1bHQgaWYgdGhyb3cnICsgJyBkZWxldGUgaW4gdHJ5JyArICcgZG8gaW5zdGFuY2VvZiB0eXBlb2YnICsgJyBhYnN0cmFjdCBlbnVtIGludCBzaG9ydCcgKyAnIGJvb2xlYW4gZXhwb3J0IGludGVyZmFjZSBzdGF0aWMnICsgJyBieXRlIGV4dGVuZHMgbG9uZyBzdXBlcicgKyAnIGNoYXIgZmluYWwgbmF0aXZlIHN5bmNocm9uaXplZCcgKyAnIGNsYXNzIGZsb2F0IHBhY2thZ2UgdGhyb3dzJyArICcgY29uc3QgZ290byBwcml2YXRlIHRyYW5zaWVudCcgKyAnIGRlYnVnZ2VyIGltcGxlbWVudHMgcHJvdGVjdGVkIHZvbGF0aWxlJyArICcgZG91YmxlIGltcG9ydCBwdWJsaWMgbGV0IHlpZWxkIGF3YWl0JyArICcgbnVsbCB0cnVlIGZhbHNlJykuc3BsaXQoJyAnKTtcblxuXHQgIHZhciBjb21waWxlcldvcmRzID0gSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTID0ge307XG5cblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IHJlc2VydmVkV29yZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICBjb21waWxlcldvcmRzW3Jlc2VydmVkV29yZHNbaV1dID0gdHJ1ZTtcblx0ICB9XG5cdH0pKCk7XG5cblx0SmF2YVNjcmlwdENvbXBpbGVyLmlzVmFsaWRKYXZhU2NyaXB0VmFyaWFibGVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0ICByZXR1cm4gIUphdmFTY3JpcHRDb21waWxlci5SRVNFUlZFRF9XT1JEU1tuYW1lXSAmJiAvXlthLXpBLVpfJF1bMC05YS16QS1aXyRdKiQvLnRlc3QobmFtZSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gc3RyaWN0TG9va3VwKHJlcXVpcmVUZXJtaW5hbCwgY29tcGlsZXIsIHBhcnRzLCB0eXBlKSB7XG5cdCAgdmFyIHN0YWNrID0gY29tcGlsZXIucG9wU3RhY2soKSxcblx0ICAgICAgaSA9IDAsXG5cdCAgICAgIGxlbiA9IHBhcnRzLmxlbmd0aDtcblx0ICBpZiAocmVxdWlyZVRlcm1pbmFsKSB7XG5cdCAgICBsZW4tLTtcblx0ICB9XG5cblx0ICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICBzdGFjayA9IGNvbXBpbGVyLm5hbWVMb29rdXAoc3RhY2ssIHBhcnRzW2ldLCB0eXBlKTtcblx0ICB9XG5cblx0ICBpZiAocmVxdWlyZVRlcm1pbmFsKSB7XG5cdCAgICByZXR1cm4gW2NvbXBpbGVyLmFsaWFzYWJsZSgnY29udGFpbmVyLnN0cmljdCcpLCAnKCcsIHN0YWNrLCAnLCAnLCBjb21waWxlci5xdW90ZWRTdHJpbmcocGFydHNbaV0pLCAnKSddO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZXR1cm4gc3RhY2s7XG5cdCAgfVxuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSmF2YVNjcmlwdENvbXBpbGVyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA0MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIGdsb2JhbCBkZWZpbmUgKi9cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFNvdXJjZU5vZGUgPSB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIGlmIChmYWxzZSkge1xuXHQgICAgLy8gV2UgZG9uJ3Qgc3VwcG9ydCB0aGlzIGluIEFNRCBlbnZpcm9ubWVudHMuIEZvciB0aGVzZSBlbnZpcm9ubWVudHMsIHdlIGFzdXNtZSB0aGF0XG5cdCAgICAvLyB0aGV5IGFyZSBydW5uaW5nIG9uIHRoZSBicm93c2VyIGFuZCB0aHVzIGhhdmUgbm8gbmVlZCBmb3IgdGhlIHNvdXJjZS1tYXAgbGlicmFyeS5cblx0ICAgIHZhciBTb3VyY2VNYXAgPSByZXF1aXJlKCdzb3VyY2UtbWFwJyk7XG5cdCAgICBTb3VyY2VOb2RlID0gU291cmNlTWFwLlNvdXJjZU5vZGU7XG5cdCAgfVxuXHR9IGNhdGNoIChlcnIpIHt9XG5cdC8qIE5PUCAqL1xuXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBpZjogdGVzdGVkIGJ1dCBub3QgY292ZXJlZCBpbiBpc3RhbmJ1bCBkdWUgdG8gZGlzdCBidWlsZCAgKi9cblx0aWYgKCFTb3VyY2VOb2RlKSB7XG5cdCAgU291cmNlTm9kZSA9IGZ1bmN0aW9uIChsaW5lLCBjb2x1bW4sIHNyY0ZpbGUsIGNodW5rcykge1xuXHQgICAgdGhpcy5zcmMgPSAnJztcblx0ICAgIGlmIChjaHVua3MpIHtcblx0ICAgICAgdGhpcy5hZGQoY2h1bmtzKTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgU291cmNlTm9kZS5wcm90b3R5cGUgPSB7XG5cdCAgICBhZGQ6IGZ1bmN0aW9uIGFkZChjaHVua3MpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rcykpIHtcblx0ICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zcmMgKz0gY2h1bmtzO1xuXHQgICAgfSxcblx0ICAgIHByZXBlbmQ6IGZ1bmN0aW9uIHByZXBlbmQoY2h1bmtzKSB7XG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjaHVua3MpKSB7XG5cdCAgICAgICAgY2h1bmtzID0gY2h1bmtzLmpvaW4oJycpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3JjID0gY2h1bmtzICsgdGhpcy5zcmM7XG5cdCAgICB9LFxuXHQgICAgdG9TdHJpbmdXaXRoU291cmNlTWFwOiBmdW5jdGlvbiB0b1N0cmluZ1dpdGhTb3VyY2VNYXAoKSB7XG5cdCAgICAgIHJldHVybiB7IGNvZGU6IHRoaXMudG9TdHJpbmcoKSB9O1xuXHQgICAgfSxcblx0ICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc3JjO1xuXHQgICAgfVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBjYXN0Q2h1bmsoY2h1bmssIGNvZGVHZW4sIGxvYykge1xuXHQgIGlmIChfdXRpbHMuaXNBcnJheShjaHVuaykpIHtcblx0ICAgIHZhciByZXQgPSBbXTtcblxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNodW5rLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHJldC5wdXNoKGNvZGVHZW4ud3JhcChjaHVua1tpXSwgbG9jKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0gZWxzZSBpZiAodHlwZW9mIGNodW5rID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGNodW5rID09PSAnbnVtYmVyJykge1xuXHQgICAgLy8gSGFuZGxlIHByaW1pdGl2ZXMgdGhhdCB0aGUgU291cmNlTm9kZSB3aWxsIHRocm93IHVwIG9uXG5cdCAgICByZXR1cm4gY2h1bmsgKyAnJztcblx0ICB9XG5cdCAgcmV0dXJuIGNodW5rO1xuXHR9XG5cblx0ZnVuY3Rpb24gQ29kZUdlbihzcmNGaWxlKSB7XG5cdCAgdGhpcy5zcmNGaWxlID0gc3JjRmlsZTtcblx0ICB0aGlzLnNvdXJjZSA9IFtdO1xuXHR9XG5cblx0Q29kZUdlbi5wcm90b3R5cGUgPSB7XG5cdCAgaXNFbXB0eTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcblx0ICAgIHJldHVybiAhdGhpcy5zb3VyY2UubGVuZ3RoO1xuXHQgIH0sXG5cdCAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChzb3VyY2UsIGxvYykge1xuXHQgICAgdGhpcy5zb3VyY2UudW5zaGlmdCh0aGlzLndyYXAoc291cmNlLCBsb2MpKTtcblx0ICB9LFxuXHQgIHB1c2g6IGZ1bmN0aW9uIHB1c2goc291cmNlLCBsb2MpIHtcblx0ICAgIHRoaXMuc291cmNlLnB1c2godGhpcy53cmFwKHNvdXJjZSwgbG9jKSk7XG5cdCAgfSxcblxuXHQgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcblx0ICAgIHZhciBzb3VyY2UgPSB0aGlzLmVtcHR5KCk7XG5cdCAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGxpbmUpIHtcblx0ICAgICAgc291cmNlLmFkZChbJyAgJywgbGluZSwgJ1xcbiddKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIHNvdXJjZTtcblx0ICB9LFxuXG5cdCAgZWFjaDogZnVuY3Rpb24gZWFjaChpdGVyKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5zb3VyY2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgaXRlcih0aGlzLnNvdXJjZVtpXSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGVtcHR5OiBmdW5jdGlvbiBlbXB0eSgpIHtcblx0ICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhdGlvbiB8fCB7IHN0YXJ0OiB7fSB9O1xuXHQgICAgcmV0dXJuIG5ldyBTb3VyY2VOb2RlKGxvYy5zdGFydC5saW5lLCBsb2Muc3RhcnQuY29sdW1uLCB0aGlzLnNyY0ZpbGUpO1xuXHQgIH0sXG5cdCAgd3JhcDogZnVuY3Rpb24gd3JhcChjaHVuaykge1xuXHQgICAgdmFyIGxvYyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRoaXMuY3VycmVudExvY2F0aW9uIHx8IHsgc3RhcnQ6IHt9IH0gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIFNvdXJjZU5vZGUpIHtcblx0ICAgICAgcmV0dXJuIGNodW5rO1xuXHQgICAgfVxuXG5cdCAgICBjaHVuayA9IGNhc3RDaHVuayhjaHVuaywgdGhpcywgbG9jKTtcblxuXHQgICAgcmV0dXJuIG5ldyBTb3VyY2VOb2RlKGxvYy5zdGFydC5saW5lLCBsb2Muc3RhcnQuY29sdW1uLCB0aGlzLnNyY0ZpbGUsIGNodW5rKTtcblx0ICB9LFxuXG5cdCAgZnVuY3Rpb25DYWxsOiBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoZm4sIHR5cGUsIHBhcmFtcykge1xuXHQgICAgcGFyYW1zID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFyYW1zKTtcblx0ICAgIHJldHVybiB0aGlzLndyYXAoW2ZuLCB0eXBlID8gJy4nICsgdHlwZSArICcoJyA6ICcoJywgcGFyYW1zLCAnKSddKTtcblx0ICB9LFxuXG5cdCAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbiBxdW90ZWRTdHJpbmcoc3RyKSB7XG5cdCAgICByZXR1cm4gJ1wiJyArIChzdHIgKyAnJykucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLnJlcGxhY2UoL1xcci9nLCAnXFxcXHInKS5yZXBsYWNlKC9cXHUyMDI4L2csICdcXFxcdTIwMjgnKSAvLyBQZXIgRWNtYS0yNjIgNy4zICsgNy44LjRcblx0ICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKSArICdcIic7XG5cdCAgfSxcblxuXHQgIG9iamVjdExpdGVyYWw6IGZ1bmN0aW9uIG9iamVjdExpdGVyYWwob2JqKSB7XG5cdCAgICB2YXIgcGFpcnMgPSBbXTtcblxuXHQgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHQgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICB2YXIgdmFsdWUgPSBjYXN0Q2h1bmsob2JqW2tleV0sIHRoaXMpO1xuXHQgICAgICAgIGlmICh2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgIHBhaXJzLnB1c2goW3RoaXMucXVvdGVkU3RyaW5nKGtleSksICc6JywgdmFsdWVdKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgdmFyIHJldCA9IHRoaXMuZ2VuZXJhdGVMaXN0KHBhaXJzKTtcblx0ICAgIHJldC5wcmVwZW5kKCd7Jyk7XG5cdCAgICByZXQuYWRkKCd9Jyk7XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBnZW5lcmF0ZUxpc3Q6IGZ1bmN0aW9uIGdlbmVyYXRlTGlzdChlbnRyaWVzKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5lbXB0eSgpO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoaSkge1xuXHQgICAgICAgIHJldC5hZGQoJywnKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldC5hZGQoY2FzdENodW5rKGVudHJpZXNbaV0sIHRoaXMpKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgZ2VuZXJhdGVBcnJheTogZnVuY3Rpb24gZ2VuZXJhdGVBcnJheShlbnRyaWVzKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QoZW50cmllcyk7XG5cdCAgICByZXQucHJlcGVuZCgnWycpO1xuXHQgICAgcmV0LmFkZCgnXScpO1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH1cblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBDb2RlR2VuO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycy9kaXN0L2hhbmRsZWJhcnMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBjdXN0b20gaGVscGVycyBmb3IgaGFuZGxlYmFycy5qc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbnZhciBoZWxwZXJzID0ge1xyXG4gICAgJ3N3aXRjaCc6IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3N3aXRjaF92YWx1ZV8gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9zd2l0Y2hfYnJlYWtfID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGh0bWwgPSBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zd2l0Y2hfYnJlYWtfO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zd2l0Y2hfdmFsdWVfO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSxcclxuICAgICdjYXNlJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gYXJncy5wb3AoKTtcclxuICAgICAgICB2YXIgY2FzZVZhbHVlcyA9IGFyZ3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zd2l0Y2hfYnJlYWtfIHx8IGNhc2VWYWx1ZXMuaW5kZXhPZih0aGlzLl9zd2l0Y2hfdmFsdWVfKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc2guYnJlYWsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N3aXRjaF9icmVha18gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnZGVmYXVsdCc6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zd2l0Y2hfYnJlYWtfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBtb3ZlZCBzZWxlY3QgaGVscGVyIGZyb20gbGF5b3V0XHJcbiAgICAnc2VsZWN0JzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyICRlbCA9ICQoJzxzZWxlY3QgLz4nKS5odG1sKG9wdGlvbnMuZm4odGhpcykpO1xyXG4gICAgICAgICRlbC5maW5kKCdbdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJykuYXR0cih7ICdzZWxlY3RlZCc6ICdzZWxlY3RlZCcgfSk7XHJcbiAgICAgICAgcmV0dXJuICRlbC5odG1sKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mb3IgKGxldCBrZXkgaW4gaGVscGVycykge1xyXG4gICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihrZXksIGhlbHBlcnNba2V5XSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEhhbmRsZWJhcnMgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyh0ZW1wbGF0ZXNDYWNoZSwgdGVtcGxhdGVzKSB7XHJcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBsYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goRGF0YS5nZXRKc29uKHsgdXJsOiB0ZW1wbGF0ZXNbaV0udXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUocmVzKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzQ2FjaGVbdGVtcGxhdGVzW2ldLm5hbWVdID0gdGVtcGxhdGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7IHJldHVybiBmYWxzZTsgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn1cclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsInZhciBVdGlscyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzR3VpZChzdHJpbmdUb1Rlc3QpIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9UZXN0WzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgc3RyaW5nVG9UZXN0ID0gc3RyaW5nVG9UZXN0LnN1YnN0cmluZygxLCBzdHJpbmdUb1Rlc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWdleEd1aWQgPSAvXihcXHspezAsMX1bMC05YS1mQS1GXXs4fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezEyfShcXH0pezAsMX0kL2dpO1xyXG4gICAgICAgIHJldHVybiByZWdleEd1aWQudGVzdChzdHJpbmdUb1Rlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRqc2Nzc2ZpbGUoZmlsZW5hbWUsIGZpbGV0eXBlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVyZWY7XHJcbiAgICAgICAgaWYgKGZpbGV0eXBlID09PSAnanMnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYSBleHRlcm5hbCBKYXZhU2NyaXB0IGZpbGVcclxuICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZmlsZXR5cGUgPT09ICdjc3MnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYW4gZXh0ZXJuYWwgQ1NTIGZpbGVcclxuICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdocmVmJywgZmlsZW5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGZpbGVyZWYgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZmlsZXJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhY2hpbmcgbG9hZGluZyBwcm9taXNlIHRvIGF2b2lkIGR1cGxpY2F0aW9uc1xyXG4gICAgbGV0IGlzTG9hZGluZyA9IHt9O1xyXG4gICAgZnVuY3Rpb24gbG9hZGpzY3NzZmlsZUFzeW5jKGZpbGVuYW1lLCBmaWxldHlwZSkge1xyXG4gICAgICAgIGlzTG9hZGluZ1tmaWxlbmFtZV0gPSBpc0xvYWRpbmdbZmlsZW5hbWVdIHx8IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpbGVyZWY7XHJcbiAgICAgICAgICAgIGlmIChmaWxldHlwZSA9PT0gJ2pzJykgeyAvL2lmIGZpbGVuYW1lIGlzIGEgZXh0ZXJuYWwgSmF2YVNjcmlwdCBmaWxlXHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZXR5cGUgPT09ICdjc3MnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYW4gZXh0ZXJuYWwgQ1NTIGZpbGVcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVyZWYgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGZpbGVyZWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgZGVsZXRlIGlzTG9hZGluZ1tmaWxlbmFtZV07IHJldHVybiByZXM7IH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNMb2FkaW5nW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVqc2Nzc2ZpbGUoZmlsZW5hbWUsIGZpbGV0eXBlKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldGVsZW1lbnQgPSBmaWxldHlwZSA9PT0gJ2pzJyA/ICdzY3JpcHQnIDogZmlsZXR5cGUgPT09ICdjc3MnID8gJ2xpbmsnIDogJ25vbmUnOyAvL2RldGVybWluZSBlbGVtZW50IHR5cGUgdG8gY3JlYXRlIG5vZGVsaXN0IGZyb21cclxuICAgICAgICBsZXQgdGFyZ2V0YXR0ciA9IGZpbGV0eXBlID09PSAnanMnID8gJ3NyYycgOiBmaWxldHlwZSA9PT0gJ2NzcycgPyAnaHJlZicgOiAnbm9uZSc7IC8vZGV0ZXJtaW5lIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHRvIHRlc3QgZm9yXHJcbiAgICAgICAgbGV0IGFsbHN1c3BlY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFyZ2V0ZWxlbWVudCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGFsbHN1c3BlY3RzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHsgLy9zZWFyY2ggYmFja3dhcmRzIHdpdGhpbiBub2RlbGlzdCBmb3IgbWF0Y2hpbmcgZWxlbWVudHMgdG8gcmVtb3ZlXHJcbiAgICAgICAgICAgIGlmIChhbGxzdXNwZWN0c1tpXSAmJiBhbGxzdXNwZWN0c1tpXS5nZXRBdHRyaWJ1dGUodGFyZ2V0YXR0cikgIT09IG51bGwgJiYgYWxsc3VzcGVjdHNbaV0uZ2V0QXR0cmlidXRlKHRhcmdldGF0dHIpLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYWxsc3VzcGVjdHNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhbGxzdXNwZWN0c1tpXSk7IC8vcmVtb3ZlIGVsZW1lbnQgYnkgY2FsbGluZyBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmksIGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcoWz8mXSknICsga2V5ICsgJz0uKj8oJnwkKScsICdpJyk7XHJcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nO1xyXG4gICAgICAgIGlmICh1cmkubWF0Y2gocmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmkucmVwbGFjZShyZSwgJyQxJyArIGtleSArICc9JyArIHZhbHVlICsgJyQyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJpICsgc2VwYXJhdG9yICsga2V5ICsgJz0nICsgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkluTmV3VGFiKGh0bWwpIHtcclxuICAgICAgICBsZXQgbmV3V2luZG93ID0gd2luZG93Lm9wZW4oJ2Fib3V0OmJsYW5rJyk7XHJcbiAgICAgICAgaWYgKCFuZXdXaW5kb3cgfHwgbmV3V2luZG93LmNsb3NlZCB8fCB0eXBlb2YgbmV3V2luZG93LmNsb3NlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy9QT1BVUCBCTE9DS0VEXHJcbiAgICAgICAgICAgIC8vaWYgKE5vdGlmaWVyKSB7XHJcbiAgICAgICAgICAgIC8vICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgbWVzc2FnZTogJ0Jyb3dzZXIgZG9lcyBub3QgYWxsb3cgb3BlbmluZyBwb3B1cCB3aW5kb3dzIScsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1dpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcclxuICAgICAgICAgICAgbmV3V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIG5ld1dpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQWxsKHN0ciwgZmluZCwgcmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsU2VsZWN0b3JzKCkge1xyXG4gICAgICAgIGxldCByZXQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBydWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLnJ1bGVzIHx8IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLmNzc1J1bGVzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4IGluIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJ1bGVzW3hdLnNlbGVjdG9yVGV4dCA9PT0gJ3N0cmluZycpIHJldC5wdXNoKHJ1bGVzW3hdLnNlbGVjdG9yVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjc3NTZWxlY3RvckV4aXN0cyhzZWxlY3Rvcikge1xyXG4gICAgICAgIGxldCBzZWxlY3RvcnMgPSBnZXRBbGxTZWxlY3RvcnMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzW2ldID09PSBzZWxlY3RvcikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVybChpbnB1dElkLCB1cmxJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWlucHV0SWQgfHwgIXVybElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciAkdGl0bGUgPSAkKGlucHV0SWQpO1xyXG4gICAgICAgIHZhciAkdXJsID0gJCh1cmxJZCk7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZVZhbHVlID0gJHRpdGxlLnZhbCgpLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHVybFZhbHVlID0gJHVybC52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAodXJsVmFsdWUuaW5kZXhPZih0aXRsZVZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdXJsVmFsdWUgPSB1cmxWYWx1ZS5yZXBsYWNlKHRpdGxlVmFsdWUsICcnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkdGl0bGUub24oJ2lucHV0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICB0aXRsZVZhbHVlID0gJHRpdGxlLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAkdXJsLnZhbCh0aXRsZVZhbHVlLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzNCxcclxuICAgICAgICBndWlkLFxyXG4gICAgICAgIGlzR3VpZCxcclxuICAgICAgICBsb2FkanNjc3NmaWxlLFxyXG4gICAgICAgIGxvYWRqc2Nzc2ZpbGVBc3luYyxcclxuICAgICAgICByZW1vdmVqc2Nzc2ZpbGUsXHJcbiAgICAgICAgdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIsXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBvcGVuSW5OZXdUYWIsXHJcbiAgICAgICAgcmVwbGFjZUFsbCxcclxuICAgICAgICBjc3NTZWxlY3RvckV4aXN0cyxcclxuICAgICAgICBwb3B1bGF0ZVVybFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEdsb2JhbCB1dGlsaXRpZXMgZXZlbnRzXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuc3QtdG9nZ2xlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICBsZXQgJHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgbGV0ICR0YXJnZXQgPSAkKCR0cmlnZ2VyLmF0dHIoJ2RhdGEtdG9nZ2xlJykpO1xyXG5cclxuICAgIGlmICgkdHJpZ2dlci5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkgeyAkKGVsZW1lbnQpLnNob3coKTsgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkgeyAkKGVsZW1lbnQpLmhpZGUoKTsgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgVXRpbHMgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vZGF0YS5qcyc7XHJcblxyXG52YXIgVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZSgkZWxlbWVudCwgZXJyb3JNZXNzYWdlLCB2YWxpZGF0ZUZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAkZWxlbWVudC52YWwoKTtcclxuICAgICAgICBpZiAodmFsaWRhdGVGdW5jKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgI2ZmNjg2OCcpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5uZXh0KCdzcGFuJykudGV4dChlcnJvck1lc3NhZ2UgfHwgJ0ludmFsaWQgdmFsdWUhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWluaW11bUxlbmd0aCh2YWx1ZSwgbWluTGVuZ2h0KSB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPj0gbWluTGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWF4aW11bUxlbmd0aCh2YWx1ZSwgbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5naHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpYyh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oW2EtejAtOV0rKSQvaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16QS1aMC05O10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVXJsRnJpZW5kbHkodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOS1fXSskLztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTdGFydGluZ1dpdGhMZXR0ZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2Etel0vaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRGVjaW1hbE51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15cXGQrXFwuXFxkezAsMn0kLztcclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXi0/XFxkK1xcLj9cXGQqJC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0d1aWQoc3RyaW5nVG9UZXN0KSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ1RvVGVzdFswXSA9PT0gJ3snKSB7XHJcbiAgICAgICAgICAgIHN0cmluZ1RvVGVzdCA9IHN0cmluZ1RvVGVzdC5zdWJzdHJpbmcoMSwgc3RyaW5nVG9UZXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVnZXhHdWlkID0gL14oXFx7KXswLDF9WzAtOWEtZkEtRl17OH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXsxMn0oXFx9KXswLDF9JC9naTtcclxuICAgICAgICByZXR1cm4gcmVnZXhHdWlkLnRlc3Qoc3RyaW5nVG9UZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgJiYgcGFyc2VJbnQodmFsdWUpID09IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGxvd2VyIG9yIGVxdWFsIHRvICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1heCA/ICt2YWx1ZSA8PSArbWF4IDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heCAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvICR7bWlufS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1pbiA/ICt2YWx1ZSA+PSArbWluIDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmIChtaW4gJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZy5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbik7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIG1heGltdW0gcGVybWl0dGVkIGNoYXJhY3RlcnMgbGVuZ3RoIGlzICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heCk7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB2YWxpZGF0ZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAndmFsaWRhdGUnIGluc2lkZSB0aGUgd3JhcHBlci5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbVZhbGlkYXRpb25GdW5jIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciBoYW5kbGluZyBzcGVjaWZpYyBsb2dpYy4gV2lsbCByZWNpZXZlIHRoZSBIVE1MRWxlbWVudC5cclxuICAgICAqIE11c3QgcmV0dXJuIHRydWUgaWYgdmFsaWRhdGlvbiBpcyBwYXNzaW5nLlxyXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMoZXYpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzICYmICFldiAmJiAhZXYudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBIVE1MRWxlbWVudCBoYXMgYmVlbiBwcm92aWRlZCwgJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCAkZWxlbWVudHNUb1ZhbGlkYXRlID0gJCh0aGlzIHx8IGV2LnRhcmdldCkuZmluZCgnLnZhbGlkYXRlJyk7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudHNUb1ZhbGlkYXRlLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoJGVsZW1lbnQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhZmxhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZUZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZXMgPSB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCBmaWVsZCEnLFxyXG4gICAgICAgICAgICAnZW1haWwnOiAnSW52YWxpZCBFLU1haWwhJyxcclxuICAgICAgICAgICAgJ2ludCc6ICdOb3QgYW4gaW50ZWdlciBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ251bWJlcic6ICdOb3QgYSBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ2d1aWQnOiAnSW52YWxpZCBndWlkISdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdGlvblR5cGVzID0gKCRlbGVtZW50LmF0dHIoJ2RhdGEtdmFsaWRhdGlvbi10eXBlJykgfHwgJycpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IGlubmVyRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtaW4gPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1pbicpO1xyXG4gICAgICAgIGxldCBtYXggPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1heCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRpb25UeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1lc3NhZ2UtJyArIHZhbGlkYXRpb25UeXBlc1tpXSkgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW3ZhbGlkYXRpb25UeXBlc1tpXV07XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkYXRpb25UeXBlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICEhdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgdmFsaWRhdGVFbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVjaW1hbCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkb3VibGUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmxvYXQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCRlbGVtZW50LCBuYW1lICsgJyBtdXN0IGJlIGRlY2ltYWwgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIScsICh2YWx1ZSkgPT4geyByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZSkgPT0gdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW50JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdndWlkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNHdWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc0xlbmdodEluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhY3VzdG9tVmFsaWRhdGlvbkZ1bmMoJGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbm5lckZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFpbm5lckZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSBldiA/ICQoZXYudGFyZ2V0KSA6ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmllbGQoJHRhcmdldCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIobmFtZSwgdXJsLCBtaW5MZW5naHQsIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVVcmxPbkNoYW5nZShldikge1xyXG4gICAgICAgICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgbGV0IG1pbiA9IG1pbkxlbmdodCB8fCAkaW5wdXQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAobWluICYmICFWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0LCBgVGhlIHZhbHVlIG11c3QgYmUgYXRsZWFzdCAke21pbn0gY2hhcmFjdGVycyBsb25nIWAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgK21pbik7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkaW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRyYVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlba2V5XSA9IGV4dHJhVmFsdWVzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IHVybCwgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgcmVzLm1lc3NhZ2UgfHwgJ1ZhbHVlIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gcmVzLnN1Y2Nlc3M7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVVcmxPbkNoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybCh2YWxpZGF0ZVVybCwgJHVybEZpZWxkLCAkYnRuU3VibWl0KSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eW1xcd1xcLVxcLl0rJC9pKTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBjYW4gb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGRhc2goLSksIHBvaW50KC4pIGFuZCB1bmRlcnNjb3JlKF8pICEnLCAodikgPT4gbWF0Y2hlc1BhdHRlcm4odiwgcGF0dGVybikpKSB7XHJcbiAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiB2YWxpZGF0ZVVybCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsICh2KT0+IHJlcy5zdWNjZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVW5pcXVlbmVzKG5hbWUsIGNsYXNzVG9WYWxpZGF0ZSkge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgJGFsbE5hbWVzID0gJCgnLicgKyBjbGFzc1RvVmFsaWRhdGUpO1xyXG4gICAgICAgIGZvciAobmFtZSBpbiAkYWxsTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKCRhbGxOYW1lc1tuYW1lXS52YWx1ZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbGlkYXRlLFxyXG4gICAgICAgIGlzQWxwaGFOdW1lcmljLFxyXG4gICAgICAgIGhhc01pbmltdW1MZW5ndGgsXHJcbiAgICAgICAgdmFsaWRhdGVFbWFpbCxcclxuICAgICAgICBpc1N0YXJ0aW5nV2l0aExldHRlcixcclxuICAgICAgICBpc1VybEZyaWVuZGx5LFxyXG4gICAgICAgIGlzTnVtYmVyLFxyXG4gICAgICAgIGlzRGVjaW1hbE51bWJlcixcclxuICAgICAgICBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbixcclxuICAgICAgICBpc0Z1bmN0aW9uLFxyXG4gICAgICAgIGlzR3VpZCxcclxuICAgICAgICBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uLFxyXG4gICAgICAgIGlzSW50ZWdlcixcclxuICAgICAgICBjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcixcclxuICAgICAgICB2YWxpZGF0ZUZpZWxkLFxyXG4gICAgICAgIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVVbmlxdWVuZXMsXHJcbiAgICAgICAgdmFsaWRhdGVVcmxcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBWYWxpZGF0b3IgfTtcclxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0tIGZpbGUtaGFuZGxlciAtLS1cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICogIC12My4wIG92ZXJhbGwgcmVmYWN0b3IuXHJcbiAqICAgICAgLSB1cGxvYWQgYW5kIHNlbGVjdCBtb3ZlZCB0byBzZXBhcmV0ZSBtb2R1bGVcclxuICogICAgICAtIHJlbW92ZWQgdXNhZ2Ugc3BlY2lmaWMgbG9naWMsIG5vdyBhY2Nlc3NlZCB2aWEgbWVkaWF0b3JcclxuICogIFxyXG4gKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi9jb21tb24vdXRpbHMuanMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi9jb21tb24vdmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMgfSBmcm9tICcuLi9jb21tb24vaGFuZGxlYmFycy5qcyc7XHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmlsZUhhbmRsZXIoJGNvbnRhaW5lciwgbW9kZXMsIHNlbGVjdGVkTGlicmFyeSwgbWVkaWF0b3IsIGxvZ2dlciwgbXVsdGlwbGVTZWxlY3Rpb24pIHtcclxuICAgIGxldCBtb2R1bGVzID0ge1xyXG4gICAgICAgICdVcGxvYWQnOiB7IGN0b3I6IGZpbGVIYW5kbGVyVXBsb2FkLCBpbnN0YW5jZTogdW5kZWZpbmVkLCBzdGF0dXM6ICdub3QtYWN0aXZlJyB9LFxyXG4gICAgICAgICdTZWxlY3QnOiB7IGN0b3I6IGZpbGVIYW5kbGVyU2VsZWN0LCBpbnN0YW5jZTogdW5kZWZpbmVkLCBzdGF0dXM6ICdub3QtYWN0aXZlJyB9LFxyXG4gICAgICAgICdTZWxlY3RlZCc6IHsgY3RvcjogZmlsZUhhbmRsZXJTZWxlY3RlZCwgaW5zdGFuY2U6IHVuZGVmaW5lZCwgc3RhdHVzOiAnbm90LWFjdGl2ZScgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgbGV0ICRuYXYgPSAkKCc8dWw+PC91bD4nLCB7IGNsYXNzOiAnbmF2IG5hdi10YWJzIGZpbGUtaGFuZGxlci1uYXYnIH0pLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG4gICAgbGV0ICRjb250ZW50Um93ID0gJCgnPGRpdj48L2Rpdj4nLCB7IGNsYXNzOiAnZmlsZS1oYW5kbGVyLWNvbnRlbnQtcm93JyB9KS5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgb2YgbW9kZXMpIHtcclxuICAgICAgICBpZiAobW9kdWxlc1trZXldKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgJGJ0bk5hdiA9ICQoJzxsaT48L2xpPicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBgYCxcclxuICAgICAgICAgICAgICAgIGh0bWw6IGA8YSBjbGFzcz1cImZpbGUtaGFuZGxlci1uYXYtYnRuXCIgZGF0YS10eXBlPVwiJHtrZXl9XCI+JHtrZXl9PC9hPmAsXHJcbiAgICAgICAgICAgICAgICByb2xlOiAncHJlc2VudGF0aW9uJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRuYXYuYXBwZW5kKCRidG5OYXYpO1xyXG5cclxuICAgICAgICAgICAgbGV0ICR3cmFwcGVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogYGZpbGUtaGFuZGxlci1jb250YWluZXIgZmlsZS1oYW5kbGVyLSR7a2V5fWBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkY29udGVudFJvdy5hcHBlbmQoJHdyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgbW9kdWxlc1trZXldLmluc3RhbmNlID0gbW9kdWxlc1trZXldLmN0b3IobG9nZ2VyLCAkd3JhcHBlciwgbWVkaWF0b3IsIHNlbGVjdGVkTGlicmFyeSwgbXVsdGlwbGVTZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICBtb2R1bGVzW2tleV0uc3RhdHVzID0gJ2FjdGl2ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2R1bGUoeyB0YXJnZXQ6ICRuYXYuZmluZCgnLmZpbGUtaGFuZGxlci1uYXYtYnRuJykuZmlyc3QoKSB9KTtcclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGxldCAkc2VsZWN0ZWRCdXR0b24gPSAkKCdbZGF0YS10eXBlPVNlbGVjdGVkXScpO1xyXG4gICAgICAgICRuYXYub24oJ2NsaWNrJywgJy5maWxlLWhhbmRsZXItbmF2LWJ0bicsIG9wZW5Nb2R1bGUpO1xyXG4gICAgICAgICRzZWxlY3RlZEJ1dHRvbi5vbignY2xpY2snLCBmaWxlSGFuZGxlclNlbGVjdGVkKTtcclxuICAgICAgICBtZWRpYXRvci5vbignZmlsZUhhbmRsZXJUeXBlQ2hhbmdlJywgb3Blbk1vZHVsZS5iaW5kKHRoaXMsIHsgdGFyZ2V0OiAkbmF2LmZpbmQoJy5maWxlLWhhbmRsZXItbmF2LWJ0bicpLmZpcnN0KCkgfSksICd1cGxvYWRUeXBlQ2hhbmdlJywgJ0ZpbGVIYW5kbGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICAkbmF2Lm9mZignY2xpY2snLCAnLmZpbGUtaGFuZGxlci1uYXYtYnRuJywgb3Blbk1vZHVsZSk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlSGFuZGxlclR5cGVDaGFuZ2UnLCAndXBsb2FkVHlwZUNoYW5nZScsICdGaWxlSGFuZGxlcicpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlcykge1xyXG4gICAgICAgICAgICBpZiAobW9kdWxlc1trZXldLnN0YXR1cyA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZXNba2V5XS5pbnN0YW5jZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzW2tleV0uaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzW2tleV0uc3RhdHVzID09PSAnbm90LWFjdGl2ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRjb250YWluZXIuaHRtbCgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1vZHVsZShldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG5cclxuICAgICAgICAkbmF2LmZpbmQoJy5maWxlLWhhbmRsZXItbmF2LWJ0bi5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50KCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRSb3cuZmluZCgnLmZpbGUtaGFuZGxlci1jb250YWluZXIuYWN0aXZlJykuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJHRhcmdldC5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkY29udGVudFJvdy5maW5kKGAuZmlsZS1oYW5kbGVyLWNvbnRhaW5lci5maWxlLWhhbmRsZXItJHskdGFyZ2V0LmF0dHIoJ2RhdGEtdHlwZScpfWApLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3Bvc2VcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGVIYW5kbGVyVXBsb2FkKGxvZ2dlciwgJGNvbnRhaW5lciwgbWVkaWF0b3IsIGxpYnJhcnlJZCwgaXNNdWx0aXBsZSkge1xyXG4gICAgbGV0ICRpbnB1dEZpbGVzO1xyXG4gICAgbGV0ICRub3RpZmllcjtcclxuICAgIGxldCAkZmlsZXNDb250YWluZXI7XHJcbiAgICBsZXQgJGxpYnJhcmllcztcclxuICAgIGxldCAkYnRuVXBsb2FkO1xyXG4gICAgbGV0ICRkcm9wQXJlYTtcclxuICAgIGxldCAkdXBsb2FkQnRuO1xyXG5cclxuICAgIGxldCBsaWJyYXJ5UHJlZml4ID0gJyc7XHJcbiAgICBsZXQgbGlicmFyeUFsbG93ZWQgPSAnJztcclxuICAgIGxldCBmaWxlcyA9IFtdO1xyXG4gICAgbGV0IHVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgIGxldCB0ZW1wbGF0ZXNDYWNoZSA9IHt9O1xyXG4gICAgbGV0IHRlbXBsYXRlcyA9IFt7IG5hbWU6ICdmaWxlLXVwbG9hZCcsIHVybDogJy90ZW1wbGF0ZXMvZmlsZS11cGxvYWQuaHRtbCcgfV07XHJcbiAgICBsZXQgcmVxdWVzdGVyO1xyXG5cclxuICAgIGxvZ2dlci5sb2coJ2luaXRpYWxhemluZyB1cGxvYWQgbW9kdWxlLi4uJyk7XHJcbiAgICBsZXQgdXJsID0gYC9zaXRldHJpa3MvZmlsZXMvdXBsb2FkVGVtcGxhdGU/aXNNdWx0aXBsZT0ke2lzTXVsdGlwbGV9JmxpYnJhcnlJZD0ke2xpYnJhcnlJZH1gO1xyXG5cclxuICAgIERhdGEuZ2V0SnNvbih7IHVybDogdXJsLCBkaXNhYmxlQ2FjaGU6IHRydWUgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKHJlcyk7XHJcblxyXG4gICAgICAgICRpbnB1dEZpbGVzID0gJGNvbnRhaW5lci5maW5kKCcuaW5wdXQtZmlsZXMnKTtcclxuICAgICAgICAkbm90aWZpZXIgPSAkY29udGFpbmVyLmZpbmQoJy5hY2NlcHRlZC1mb3JtYXRzJyk7XHJcbiAgICAgICAgJGZpbGVzQ29udGFpbmVyID0gJGNvbnRhaW5lci5maW5kKCcuZmlsZXMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGxpYnJhcmllcyA9ICRjb250YWluZXIuZmluZCgnLmZpbGUtdXBsb2FkLWxpYnJhcnknKTtcclxuICAgICAgICAkYnRuVXBsb2FkID0gJGNvbnRhaW5lci5maW5kKCcuYnRuLXN1Ym1pdC1pbWFnZXMnKTtcclxuICAgICAgICAkZHJvcEFyZWEgPSAkY29udGFpbmVyLmZpbmQoJyNkcm9wLWFyZWEnKTtcclxuICAgICAgICAkdXBsb2FkQnRuID0gJGNvbnRhaW5lci5maW5kKCcuYnRuLXN1Ym1pdC1pbWFnZXMnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKHRlbXBsYXRlc0NhY2hlLCB0ZW1wbGF0ZXMpO1xyXG4gICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICRsaWJyYXJpZXMub24oJ2NoYW5nZScsIGxvYWRBbGxvd2VkVHlwZXMpO1xyXG4gICAgICAgICRpbnB1dEZpbGVzLm9uKCdjaGFuZ2UnLCByZW5kZXJGaWxlcyk7XHJcbiAgICAgICAgJGJ0blVwbG9hZC5vbignY2xpY2snLCB1cGxvYWRGaWxlcyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vbigna2V5dXAnLCAnLmlucHV0LXVybCcsIHZhbGlkYXRlRmlsZVVybCk7XHJcbiAgICAgICAgJGRyb3BBcmVhLm9uKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcclxuICAgICAgICAkZHJvcEFyZWEub24oJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XHJcbiAgICAgICAgJGRyb3BBcmVhLm9uKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xyXG4gICAgICAgICRkcm9wQXJlYS5vbignZHJvcCcsIGRyb3ApO1xyXG4gICAgICAgIG1lZGlhdG9yLm9uKCdmaWxlTGlicmFyeUNoYW5nZScsIHNlbGVjdExpYnJhcnksICdzZWxlY3RMaWJyYXJ5JywgJ0ZpbGVIYW5kbGVyVXBsb2FkJyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub24oJ2ZpbGVIYW5kbGVyVHlwZUNoYW5nZScsIHR5cGVDaGFuZ2UsICd1cGxvYWRUeXBlQ2hhbmdlJywgJ0ZpbGVIYW5kbGVyVXBsb2FkJyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub24oJ2ZpbGVIYW5kbGVyQ2xlYW4nLCBjbGVhblVwLCAnY2xlYW5Db250ZW50JywgJ0ZpbGVIYW5kbGVyVXBsb2FkJyk7XHJcblxyXG4gICAgICAgICRsaWJyYXJpZXMudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICAkbGlicmFyaWVzLm9mZignY2hhbmdlJywgbG9hZEFsbG93ZWRUeXBlcyk7XHJcbiAgICAgICAgJGlucHV0RmlsZXMub2ZmKCdjaGFuZ2UnLCByZW5kZXJGaWxlcyk7XHJcbiAgICAgICAgJGJ0blVwbG9hZC5vZmYoJ2NsaWNrJywgdXBsb2FkRmlsZXMpO1xyXG4gICAgICAgICRjb250YWluZXIub2ZmKCdrZXl1cCcsICcuaW5wdXQtdXJsJywgdmFsaWRhdGVGaWxlVXJsKTtcclxuICAgICAgICAkZHJvcEFyZWEub2ZmKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcclxuICAgICAgICAkZHJvcEFyZWEub2ZmKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xyXG4gICAgICAgICRkcm9wQXJlYS5vZmYoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XHJcbiAgICAgICAgJGRyb3BBcmVhLm9uKCdkcm9wJywgZHJvcCk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlTGlicmFyeUNoYW5nZScsICdzZWxlY3RMaWJyYXJ5JywgJ0ZpbGVIYW5kbGVyVXBsb2FkJyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlSGFuZGxlclR5cGVDaGFuZ2UnLCAndXBsb2FkVHlwZUNoYW5nZScsICdGaWxlSGFuZGxlclVwbG9hZCcpO1xyXG4gICAgICAgIG1lZGlhdG9yLm9mZignZmlsZUhhbmRsZXJDbGVhbicsICdjbGVhbkNvbnRlbnQnLCAnRmlsZUhhbmRsZXJVcGxvYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQWxsb3dlZFR5cGVzKGV2KSB7XHJcbiAgICAgICAgbGlicmFyeUlkID0gZXYudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNsZWFuVXAoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIERhdGEuZ2V0SnNvbih7IHVybDogJy9zaXRldHJpa3MvbGlicmFyaWVzL0dldEFsbG93ZWRGb3JMaWJyYXJ5P2lkPScgKyBsaWJyYXJ5SWQgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJyB8fCByZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UocmVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXRGaWxlcy5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhY2NlcHQnLCByZXMuZXh0KTtcclxuICAgICAgICAgICAgICAgICRkcm9wQXJlYS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICRub3RpZmllci50ZXh0KCdBY2NlcHRlZCBmaWxlczogJyArIChyZXMudHlwZS5kaXNwbGF5TmFtZSB8fCByZXMudHlwZS5leHRlbnNpb25zKSk7XHJcbiAgICAgICAgICAgICAgICBsaWJyYXJ5QWxsb3dlZCA9IFV0aWxzLnJlcGxhY2VBbGwoVXRpbHMucmVwbGFjZUFsbChyZXMuZXh0LCAnKicsICcnKSwgJywnLCAnfCcpO1xyXG4gICAgICAgICAgICAgICAgbGlicmFyeVByZWZpeCA9IHJlcy5wcmVmaXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXRGaWxlcy5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgJGRyb3BBcmVhLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckZpbGVzKCkge1xyXG4gICAgICAgIGZpbGVzID0gW107XHJcbiAgICAgICAgJGZpbGVzQ29udGFpbmVyLmh0bWwoJycpO1xyXG4gICAgICAgIHVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgICAgICBsZXQgZGF0ZSA9IERhdGUucGFyc2UobmV3IERhdGUoKSk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVzQ2FjaGVbJ2ZpbGUtdXBsb2FkJ107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkaW5wdXRGaWxlc1swXS5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEZpbGUgPSAkaW5wdXRGaWxlc1swXS5maWxlc1tpXTtcclxuICAgICAgICAgICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAobGlicmFyeUFsbG93ZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZWdFeHAudGVzdChjdXJyZW50RmlsZS5uYW1lKSAmJiAhcmVnRXhwLnRlc3QoY3VycmVudEZpbGUudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICRmaWxlc0NvbnRhaW5lci5hcHBlbmQoYDxwPjxzdHJvbmc+PHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPiR7Y3VycmVudEZpbGUubmFtZX0gZmlsZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgc2VsZWN0ZWQgbGlicmFyeSBhbmQgd2lsbCBub3QgYmUgdXBsb2FkZWQhPC9zcGFuPjwvc3Ryb25nPjwvcD5gKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgJGZyYWdtZW50ID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2ltZy11cGxvYWQtd3JhcHBlciB1cGxvYWQtZWxlbWVudC0nICsgaVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IGN1cnJlbnRGaWxlLm5hbWUuc3Vic3RyaW5nKDAsIGN1cnJlbnRGaWxlLm5hbWUubGFzdEluZGV4T2YoJy4nKSk7XHJcbiAgICAgICAgICAgIGxldCBmaWxlVXJsID0gY3VycmVudEZpbGUubmFtZS5yZXBsYWNlKC9cXHMrL2csICctJykucmVwbGFjZSgvLSsvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBVdGlscy5ndWlkKCk7XHJcblxyXG4gICAgICAgICAgICAkZnJhZ21lbnQuYXBwZW5kKHRlbXBsYXRlKHsgaW5kZXg6IGlkLCBuYW1lOiBmaWxlTmFtZSwgYWx0OiBmaWxlTmFtZSwgdXJsOiBmaWxlVXJsIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50RmlsZS50eXBlICYmIGN1cnJlbnRGaWxlLnR5cGUuaW5kZXhPZignaW1hZ2UvJykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChjdXJyZW50RmlsZSk7XHJcbiAgICAgICAgICAgICAgICAkZnJhZ21lbnQuYXBwZW5kKGA8aW1nIHNyYz1cIiR7ZmlsZX1cIiBjbGFzcz1cImRpc3BsYXktaW1hZ2VcIj5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRmcmFnbWVudC5hcHBlbmQoJzxpbWcgc3JjPVwiL0ltYWdlcy9kZWZhdWx0LWRvY3VtZW50LWltYWdlLnBuZ1wiPicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkZmlsZXNDb250YWluZXIuYXBwZW5kKCRmcmFnbWVudCk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmlsZVVybCgkZnJhZ21lbnQuZmluZCgnLmlucHV0LXVybCcpKTtcclxuXHJcbiAgICAgICAgICAgIGZpbGVzLnB1c2goY3VycmVudEZpbGUpO1xyXG4gICAgICAgICAgICB1cGxvYWRlZEZpbGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZU5hbWUgKyAnLScgKyBkYXRlLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBmaWxlVXJsICsgJy0nICsgZGF0ZSxcclxuICAgICAgICAgICAgICAgIGFsdDogZmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbE5hbWU6IGN1cnJlbnRGaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICR1cGxvYWRCdG4ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwbG9hZEZpbGVzKCkge1xyXG4gICAgICAgIGxldCBub3RpZmllciA9ICcuZmlsZS1oYW5kbGVyLW5vdGlmaWVyJztcclxuICAgICAgICBpZiAodXBsb2FkZWRGaWxlcy5sZW5ndGggPT09IDAgfHwgZmlsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLmRpc3BhdGNoKCdhbGVydCcsIHsgc2VsZWN0b3I6IG5vdGlmaWVyLCBtZXNzYWdlOiAnTm8gZmlsZXMgaGF2ZSBiZWVuIHNlbGVjdGVkIScsIHN0YXR1czogJ3dhcm5pbmcnIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXJscyA9IFtdO1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKCcuaW5wdXQtdXJsJykuZWFjaChmdW5jdGlvbiAoaSwgb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICQob2JqKTtcclxuICAgICAgICAgICAgbGV0IHVybCA9ICRlbGVtZW50LnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAodXJsLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobGlicmFyeVByZWZpeCkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gbGlicmFyeVByZWZpeCArICcvJyArIHVybDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVybHMuaW5kZXhPZih1cmwpID4gLTEgfHwgZmxhZykge1xyXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkIHJlZCcpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXJscy5wdXNoKHVybCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLmRpc3BhdGNoKCdhbGVydCcsIHsgc2VsZWN0b3I6IG5vdGlmaWVyLCBtZXNzYWdlOiAnVXJscyBtdXN0IGJlIHVuaXF1ZSBhbmQgYWx0ZWFzdCAzIGNoYXJhY3RlcnMgbG9uZyEnLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkY29udGFpbmVyLmZpbmQoJy5pbnB1dC1uYW1lJykuZWFjaChmdW5jdGlvbiAoaSwgb2JqKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gJChvYmopLnZhbCgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLmRpc3BhdGNoKCdhbGVydCcsIHsgc2VsZWN0b3I6IG5vdGlmaWVyLCBtZXNzYWdlOiAnTmFtZSBtdXN0IGJlIGF0bGVhc3QgMyBjaGFyYWN0ZXJzIScsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9wYWdlcy92YWxpZGF0ZVVybHMnLCBkYXRhOiB7IHVybHMgfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRmlsZXNJbmZvKHVwbG9hZGVkRmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHVwbG9hZGVkRmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXNJbmZvJywgSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsaWJyYXJ5JywgbGlicmFyeUlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0YS5wb3N0Rm9ybSh7IHVybDogJy9zaXRldHJpa3MvZmlsZXMvdXBsb2FkZmlsZScsIGZvcm1EYXRhOiBmb3JtRGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZWRpYXRvci5kaXNwYXRjaCgnYWxlcnQnLCB7IHNlbGVjdG9yOiBub3RpZmllciwgdGl0bGU6ICdOb3QgYWxsIHVybHMgYXJlIHZhbGlkIScsIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcikudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG5cclxuICAgICAgICAgICAgICAgIG1lZGlhdG9yLmRpc3BhdGNoKCdmaWxlc1VwbG9hZGVkJywgeyBmaWxlSWRzOiByZXMuaWRzLCBsaWJyYXJ5SWQ6IGxpYnJhcnlJZCwgcmVxdWVzdGVyIH0pO1xyXG4gICAgICAgICAgICAgICAgbWVkaWF0b3IuZGlzcGF0Y2goJ3VwbG9hZGVkRmlsZXNFdmVudCcsIHsgZmlsZUlkczogcmVzLmlkcywgc2l6ZU5hbWU6ICdPcmlnaW5hbCcsIGxpYnJhcnlJZDogbGlicmFyeUlkLCByZXF1ZXN0ZXIgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZpbGVzSW5mbyhmaWxlcykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmlsZXNbaV0ubmFtZSA9ICRjb250YWluZXIuZmluZCgnI2lucHV0LW5hbWUtJyArIGZpbGVzW2ldLmlkKS52YWwoKTtcclxuICAgICAgICAgICAgZmlsZXNbaV0udXJsID0gJGNvbnRhaW5lci5maW5kKCcjaW5wdXQtdXJsLScgKyBmaWxlc1tpXS5pZCkudmFsKCk7XHJcbiAgICAgICAgICAgIGZpbGVzW2ldLmFsdCA9ICRjb250YWluZXIuZmluZCgnI2lucHV0LWFsdC0nICsgZmlsZXNbaV0uaWQpLnZhbCgpO1xyXG4gICAgICAgICAgICBmaWxlc1tpXS50eXBlID0gJGNvbnRhaW5lci5maW5kKCcjZHJvcGRvd24tdHlwZS0nICsgZmlsZXNbaV0uaWQpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpbGVVcmwoZXYpIHtcclxuICAgICAgICBsZXQgJHVybEZpZWxkID0gJChldi50YXJnZXQgPyBldi50YXJnZXQgOiBldik7XHJcbiAgICAgICAgbGV0IHVybCA9ICR1cmxGaWVsZC52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgJHVybEZpZWxkLmNzcygnYm9yZGVyJywgJzFweCBzb2xpZCByZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBWYWxpZGF0b3IudmFsaWRhdGVVcmwoYC9zaXRldHJpa3MvZmlsZXMvVmFsaWRhdGVVcmw/dXJsPSR7dXJsfSZwcmVmaXg9JHtsaWJyYXJ5UHJlZml4fWAsICR1cmxGaWVsZCwgJGJ0blVwbG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdExpYnJhcnkobGlicmFyeUlkKSB7XHJcbiAgICAgICAgJGxpYnJhcmllcy52YWwobGlicmFyeUlkLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICRsaWJyYXJpZXMudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhZ0xlYXZlKGUpIHtcclxuICAgICAgICAvLyAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkcm9wLWhpZ2hsaWdodCcpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyb3AoZSkge1xyXG4gICAgICAgIGlmICgkKCcjZHJvcC1hcmVhJykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVzVmFsdWUgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0RmlsZXMuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXRGaWxlcy5wcm9wKCdmaWxlcycsIGZpbGVzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRmlsZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0eXBlQ2hhbmdlKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnbXVsdGlwbGUnKSB7XHJcbiAgICAgICAgICAgICRpbnB1dEZpbGVzLmF0dHIoJ211bHRpcGxlJywgZGF0YS50eXBlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaW5wdXRGaWxlcy5yZW1vdmVBdHRyKCdtdWx0aXBsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdGVyID0gZGF0YS5yZXF1ZXN0ZXI7XHJcbiAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgZmlsZXMgPSBbXTtcclxuICAgICAgICB1cGxvYWRlZEZpbGVzID0gW107XHJcbiAgICAgICAgJGlucHV0RmlsZXMudmFsKCcnKTtcclxuICAgICAgICAkZmlsZXNDb250YWluZXIuaHRtbCgnJyk7XHJcbiAgICAgICAgJHVwbG9hZEJ0bi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAkKCcuZmlsZS1oYW5kbGVyLW5vdGlmaWVyJykuaHRtbCgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwb3NlXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxlSGFuZGxlclNlbGVjdChsb2dnZXIsICRjb250YWluZXIsIG1lZGlhdG9yLCBsaWJyYXJ5SWQsIGlzTXVsdGlwbGUpIHtcclxuICAgIGxldCAkZmlsZXNDb250YWluZXI7XHJcbiAgICBsZXQgJGxpYnJhcmllcztcclxuICAgIGxldCB0ZW1wbGF0ZXNDYWNoZSA9IHt9O1xyXG4gICAgbGV0IHRlbXBsYXRlcyA9IFt7IG5hbWU6ICdmaWxlLXNlbGVjdCcsIHVybDogJy90ZW1wbGF0ZXMvZmlsZS1zZWxlY3QuaHRtbCcgfV07XHJcbiAgICBsZXQgcGFnZSA9IDA7XHJcbiAgICBsZXQgJGJ0bk5leHQ7XHJcbiAgICBsZXQgJGJ0blByZXY7XHJcbiAgICBsZXQgJHBhZ2VOdW1iZXI7XHJcbiAgICBjb25zdCBwYWdlU2l6ZSA9IDk7XHJcbiAgICBsZXQgbmV4dFBhZ2VFeGlzdHMgPSBmYWxzZTtcclxuICAgIGxldCAkYnRuU2VsZWN0O1xyXG4gICAgbGV0IHJlcXVlc3RlcjtcclxuICAgIGxldCBzZWxlY3RlZEZpbGVzID0ge307XHJcblxyXG4gICAgbG9nZ2VyLmxvZygnaW5pdCBzZWxlY3QgbW9kdWxlJyk7XHJcblxyXG4gICAgbGV0IHVybCA9IGAvc2l0ZXRyaWtzL2ZpbGVzL3NlbGVjdFRlbXBsYXRlP2xpYnJhcnlJZD0ke2xpYnJhcnlJZH1gO1xyXG4gICAgRGF0YS5nZXRKc29uKHsgdXJsOiB1cmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhyZXMpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChyZXMpO1xyXG4gICAgICAgICRmaWxlc0NvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLmZpbGVzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRsaWJyYXJpZXMgPSAkY29udGFpbmVyLmZpbmQoJy5maWxlLXNlbGVjdC1saWJyYXJ5Jyk7XHJcbiAgICAgICAgJGJ0bk5leHQgPSAkY29udGFpbmVyLmZpbmQoJy5uZXh0LXBhZ2UnKTtcclxuICAgICAgICAkYnRuUHJldiA9ICRjb250YWluZXIuZmluZCgnLnByZXZpb3VzLXBhZ2UnKTtcclxuICAgICAgICAkcGFnZU51bWJlciA9ICRjb250YWluZXIuZmluZCgnLnBhZ2UtbnVtYmVyJyk7XHJcbiAgICAgICAgJGJ0blNlbGVjdCA9ICRjb250YWluZXIuZmluZCgnLmJ0bi1zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKHRlbXBsYXRlc0NhY2hlLCB0ZW1wbGF0ZXMpO1xyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIGxvYWRJbWFnZXMoKTtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmxvZygnc2VsZWN0IG1vZHVsZSBpbml0aWFsaXplZCcpO1xyXG4gICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG5cclxuICAgIGxldCAkYnRuU2F2ZSA9ICQoJy5idG4tYWRkLXdpZGdldCcpO1xyXG4gICAgbGV0ICRidG5FZGl0ID0gJCgnLmJ0bi1lZGl0LXdpZGdldCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdFVwbG9hZGVkRmlsZXMoZGF0YSkge1xyXG4gICAgICAgIGxvZ2dlci5sb2coJ2RhdGEtc2VsZWN0LWZpbGVzOiAnLCBkYXRhKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRMaW5rSWRzID0gZGF0YS5maWxlSWRzO1xyXG5cclxuICAgICAgICBsb2dnZXIubG9nKHNlbGVjdGVkTGlua0lkcyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZExpbmtJZHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlc1tzZWxlY3RlZExpbmtJZHNbaV1dID0ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMaW5rSWQ6IHNlbGVjdGVkTGlua0lkc1tpXSxcclxuICAgICAgICAgICAgICAgIHNpemVOYW1lOiAnT3JpZ2luYWwnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkSW1hZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICBsb2dnZXIubG9nKCdiaW5kIHNlbGVjdCBtb2R1bGUgZXZlbnRzJyk7XHJcbiAgICAgICAgJGxpYnJhcmllcy5vbignY2hhbmdlJywgY2hhbmdlTGlicmFyeSk7XHJcbiAgICAgICAgJGJ0bk5leHQub24oJ2NsaWNrJywgbmV4dFBhZ2UpO1xyXG4gICAgICAgICRidG5QcmV2Lm9uKCdjbGljaycsIHByZXZQYWdlKTtcclxuICAgICAgICAkY29udGFpbmVyLm9uKCdjaGFuZ2UnLCAnLnRodW1ibmFpbFNlbGVjdCcsIHNlbGVjdFNpemUpO1xyXG4gICAgICAgIC8vICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmltYWdlLWNoZWNrYm94JywgY2hlY2tDaGVja2JveCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmNoZWNrbWFyay1jb3ZlcicsIHRyaWdnZXJDaGVja2JveCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmltYWdlLWNoZWNrYm94JywgdG9nZ2xlU2VsZWN0RHJvcGRvd24pO1xyXG4gICAgICAgICRidG5TYXZlLm9uKCdjbGljaycsIHNlbGVjdEZpbGVzKTtcclxuICAgICAgICAkYnRuRWRpdC5vbignY2xpY2snLCBzZWxlY3RGaWxlcyk7XHJcbiAgICAgICAgJGJ0blNlbGVjdC5vbignY2xpY2snLCBzZWxlY3RGaWxlcyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub24oJ2ZpbGVMaWJyYXJ5Q2hhbmdlJywgc2VsZWN0TGlicmFyeSwgJ3NlbGVjdExpYnJhcnknLCAnRmlsZUhhbmRsZXJTZWxlY3QnKTtcclxuICAgICAgICBtZWRpYXRvci5vbignZmlsZUhhbmRsZXJUeXBlQ2hhbmdlJywgdHlwZUNoYW5nZSwgJ3NlbGVjdFR5cGVDaGFuZ2UnLCAnRmlsZUhhbmRsZXJTZWxlY3QnKTtcclxuICAgICAgICBtZWRpYXRvci5vbigncG9wdWxhdGVkU2VsZWN0ZWQnLCBwb3B1bGF0ZVNlbGVjdGVkLCAncG9wdWxhdGVTZWxlY3RlZEZpbGVzJywgJ0ZpbGVIYW5kbGVyU2VsZWN0Jyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub24oJ3VwbG9hZGVkRmlsZXNFdmVudCcsIHNlbGVjdFVwbG9hZGVkRmlsZXMsICdzZWxlY3RVcGxvYWRlZEZpbGVzJywgJ0ZpbGVIYW5kbGVyU2VsZWN0Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZygnZGVzdG95IHNlbGVjdCBtb2R1bGUnKTtcclxuICAgICAgICAkbGlicmFyaWVzLm9mZignY2hhbmdlJywgY2hhbmdlTGlicmFyeSk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vZmYoJ2NoYW5nZScsICcudGh1bWJuYWlsU2VsZWN0Jywgc2VsZWN0U2l6ZSk7XHJcbiAgICAgICAgLy8gICAgICAkY29udGFpbmVyLm9mZignY2xpY2snLCAnLmltYWdlLWNoZWNrYm94JywgY2hlY2tDaGVja2JveCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vZmYoJ2NsaWNrJywgJy5jaGVja21hcmstY292ZXInLCB0cmlnZ2VyQ2hlY2tib3gpO1xyXG4gICAgICAgICRjb250YWluZXIub2ZmKCdjbGljaycsICcuaW1hZ2UtY2hlY2tib3gnLCB0b2dnbGVTZWxlY3REcm9wZG93bik7XHJcbiAgICAgICAgJGJ0blNhdmUub2ZmKCdjbGljaycsIHNlbGVjdEZpbGVzKTtcclxuICAgICAgICAkYnRuRWRpdC5vZmYoJ2NsaWNrJywgc2VsZWN0RmlsZXMpO1xyXG4gICAgICAgICRidG5TZWxlY3Qub2ZmKCdjbGljaycsIHNlbGVjdEZpbGVzKTtcclxuICAgICAgICAkYnRuTmV4dC5vZmYoJ2NsaWNrJywgbmV4dFBhZ2UpO1xyXG4gICAgICAgICRidG5QcmV2Lm9mZignY2xpY2snLCBwcmV2UGFnZSk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlTGlicmFyeUNoYW5nZScsICdzZWxlY3RMaWJyYXJ5JywgJ0ZpbGVIYW5kbGVyU2VsZWN0Jyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlSGFuZGxlclR5cGVDaGFuZ2UnLCAnc2VsZWN0VHlwZUNoYW5nZScsICdGaWxlSGFuZGxlclNlbGVjdCcpO1xyXG4gICAgICAgIG1lZGlhdG9yLm9mZigncG9wdWxhdGVkU2VsZWN0ZWQnLCAncG9wdWxhdGVTZWxlY3RlZEZpbGVzJywgJ0ZpbGVIYW5kbGVyU2VsZWN0Jyk7XHJcbiAgICAgICAgbWVkaWF0b3Iub2ZmKCd1cGxvYWRlZEZpbGVzRXZlbnQnLCAnc2VsZWN0VXBsb2FkZWRGaWxlcycsICdGaWxlSGFuZGxlclNlbGVjdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoKSB7XHJcbiAgICAgICAgJGZpbGVzQ29udGFpbmVyLmh0bWwoJzxwPkxvYWRpbmcuLi48L3A+Jyk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVzQ2FjaGVbJ2ZpbGUtc2VsZWN0J107XHJcbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IGlzTXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGxpYnJhcnlJZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY29tcGFyaXNvbjogMSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogJ0xpYnJhcnlJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbGlicmFyeUlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNraXAgPSBwYWdlICogcGFnZVNpemU7XHJcbiAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogJy9zaXRldHJpa3MvZmlsZXMvZ3JpZCcsIGRhdGE6IHsgZmlsdGVycywgdGFrZTogcGFnZVNpemUsIHNraXAgfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkZmlsZXNDb250YWluZXIuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKHJlcy5pdGVtcykuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgrZWxlbWVudC50eXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRmaWxlc0NvbnRhaW5lci5hcHBlbmQodGVtcGxhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVsZW1lbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZWxlbWVudC51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxzOiBlbGVtZW50LnRodW1ibmFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYWdlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJ0blByZXYuYXR0cignZGlzYWJsZWQnLCB0cnVlKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRidG5QcmV2LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZUV4aXN0cyA9IHJlcy5uZXh0UGFnZUV4aXN0cztcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLm5leHRQYWdlRXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJ0bk5leHQuYXR0cignZGlzYWJsZWQnLCB0cnVlKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRidG5OZXh0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkcGFnZU51bWJlci50ZXh0KGAke3BhZ2UgKyAxfS8ke01hdGgubWF4KE1hdGguY2VpbChyZXMuY291bnQgLyBwYWdlU2l6ZSksIDEpfWApO1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnaW1hZ2VzIHJlbmRlcmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbWFnZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0UGFnZSgpIHtcclxuICAgICAgICBpZiAoIW5leHRQYWdlRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhZ2UgKz0gMTtcclxuICAgICAgICBsb2FkSW1hZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldlBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYWdlIC09IDE7XHJcbiAgICAgICAgbG9hZEltYWdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUxpYnJhcnkoZXYpIHtcclxuICAgICAgICBsaWJyYXJ5SWQgPSBldi50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbG9hZEltYWdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdFNpemUoKSB7XHJcbiAgICAgICAgbGV0ICRvcHRpb24gPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZElkID0gJG9wdGlvbi52YWwoKTtcclxuICAgICAgICBsZXQgaWQgPSAkb3B0aW9uLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICBsZXQgc2l6ZU5hbWUgPSAkb3B0aW9uLmZpbmQoJzpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtc2l6ZW5hbWUnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRGaWxlc1tpZF0gPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTGlua0lkOiBzZWxlY3RlZElkLFxyXG4gICAgICAgICAgICBzaXplTmFtZTogc2l6ZU5hbWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXJDaGVja2JveChldikge1xyXG4gICAgICAgIGxldCAkY2hlY2tib3ggPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5pbWFnZS1jaGVja2JveC13cmFwcGVyJykuZmluZCgnLmltYWdlLWNoZWNrYm94Jyk7XHJcblxyXG4gICAgICAgIGlmICgkY2hlY2tib3gucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlkID0gJGNoZWNrYm94LmF0dHIoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRJZCA9IGlkO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZU5hbWUgPSAnT3JpZ2luYWwnO1xyXG4gICAgICAgICAgICBpZiAoJGNoZWNrYm94LmF0dHIoJ3R5cGUnKSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlcyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgJHNlbGVjdCA9ICRjaGVja2JveC5wYXJlbnRzKCcuaW1hZ2UtY29udGFpbmVyMicpLmZpbmQoJy50aHVtYm5haWxTZWxlY3QnKTtcclxuICAgICAgICAgICAgaWYgKCRzZWxlY3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZCA9ICRzZWxlY3QudmFsKCkgfHwgc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgIHNpemVOYW1lID0gJHNlbGVjdC5maW5kKCc6c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLXNpemVuYW1lJykgfHwgc2l6ZU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsZXNbaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMaW5rSWQ6IHNlbGVjdGVkSWQsXHJcbiAgICAgICAgICAgICAgICBzaXplTmFtZTogc2l6ZU5hbWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHNlbGVjdGVkRmlsZXNbaWRdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0RmlsZVVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0RmlsZXMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSW1hZ2VzRnVsbEluZm8gPSBKU09OLnN0cmluZ2lmeShzZWxlY3RlZEZpbGVzKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRMaW5rSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGVjdGVkRmlsZXMpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMaW5rSWRzLnB1c2goc2VsZWN0ZWRGaWxlc1trZXldLnNlbGVjdGVkTGlua0lkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNzZWxlY3RlZEltYWdlcycpLmF0dHIoJ2RhdGEtc2VsZWN0ZWRJbWFnZXMnLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZEltYWdlc0Z1bGxJbmZvKSk7XHJcbiAgICAgICAgJCgnI2ltYWdlJykudmFsKHNlbGVjdGVkTGlua0lkcyk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLmRpc3BhdGNoKCdmaWxlc1NlbGVjdGVkJywgeyBmaWxlSWRzOiBzZWxlY3RlZExpbmtJZHMsIHNlbGVjdGVkSW1hZ2VzRnVsbEluZm86IHNlbGVjdGVkSW1hZ2VzRnVsbEluZm8sIGxpYnJhcnlJZDogbGlicmFyeUlkLCByZXF1ZXN0ZXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVTZWxlY3RlZChzZWxlY3RlZCkge1xyXG4gICAgICAgIHNlbGVjdGVkRmlsZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkKSkgfHwge307XHJcbiAgICAgICAgbG9hZEltYWdlcygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RGaWxlVUkoKSB7XHJcbiAgICAgICAgJCgnaW5wdXRbbmFtZT1pbWFnZXMtbGlzdF0nKS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCAkc2VsZWN0ZWQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoJHNlbGVjdGVkLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWQucGFyZW50cygnLmltYWdlLWNvbnRhaW5lcjInKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RlZC5wYXJlbnRzKCcuaW1hZ2UtY29udGFpbmVyMicpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0TGlicmFyeShsaWJyYXJ5SWQpIHtcclxuICAgICAgICAkbGlicmFyaWVzLnZhbChsaWJyYXJ5SWQudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgJGxpYnJhcmllcy50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0eXBlQ2hhbmdlKGRhdGEpIHtcclxuICAgICAgICBpc011bHRpcGxlID0gZGF0YS50eXBlID09PSAnbXVsdGlwbGUnO1xyXG4gICAgICAgIHJlcXVlc3RlciA9IGRhdGEucmVxdWVzdGVyO1xyXG4gICAgICAgIHBhZ2UgPSAwO1xyXG4gICAgICAgIGxvYWRJbWFnZXMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWRJbWFnZXMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSW1hZ2VzRnVsbEluZm8gPSBzZWxlY3RlZEZpbGVzO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZElkcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzZWxlY3RlZEltYWdlc0Z1bGxJbmZvKSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZElkcy5wdXNoKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkSWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEltYWdlSWQgPSBzZWxlY3RlZElkc1tpXTtcclxuXHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9aW1hZ2VzLWxpc3RdJykuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0ICRzZWxlY3RlZCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsZU5hbWUgPSBzZWxlY3RlZEltYWdlc0Z1bGxJbmZvW3NlbGVjdGVkSW1hZ2VJZF0uc2VsZWN0ZWRMaW5rSWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNlbGVjdGVkLmF0dHIoJ2RhdGEtYWx0LWlkJywgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0ICRjdXJyZW50VGh1bWJuYWlsID0gJHNlbGVjdGVkLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy50aHVtYm5haWxTZWxlY3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdGVkLmF0dHIoJ2RhdGEtaWQnKSA9PT0gc2VsZWN0ZWRJbWFnZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNlbGVjdGVkLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRUaHVtYm5haWwudmFsKGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdEZpbGVVSSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2VsZWN0RHJvcGRvd24oZXYpIHtcclxuICAgICAgICBsZXQgJGNoZWNrYm94ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGlmICgkY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkY2hlY2tib3gucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnRodW1ibmFpbFNlbGVjdC5kcm9wZG93bicpO1xyXG4gICAgICAgICAgICBsZXQgJGNsb25lID0gJHRhcmdldC5jbG9uZSgpLnJlbW92ZUF0dHIoJ2RhdGEtY2xpY2staWQnKTtcclxuICAgICAgICAgICAgJGNsb25lLnZhbCgkdGFyZ2V0LnZhbCgpKS5hZGRDbGFzcygnY2xvbmVkJykuYXR0cignc2l6ZScsICRjbG9uZS5maW5kKCdvcHRpb24nKS5sZW5ndGggPiAxMCA/IDEwIDogJGNsb25lLmZpbmQoJ29wdGlvbicpLmxlbmd0aCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQudmFsKCRjbG9uZS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pLm9uKCdjbGljayBibHVyIGtleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgIT09ICdrZXlwcmVzcycgfHwgZS53aGljaCA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJGNoZWNrYm94LnBhcmVudHMoJy5zZWxlY3QtcGFyZW50JykuYXBwZW5kKCRjbG9uZSk7XHJcbiAgICAgICAgICAgICRjbG9uZS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3Bvc2VcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGVIYW5kbGVyU2VsZWN0ZWQoKSB7XHJcblxyXG4gICAgcmV0dXJuIHsgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9IH07XHJcblxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBXYXJuaW5nV2luZG93ID0gKGZ1bmN0aW9uIChsb2dnZXIpIHtcclxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCBjb25zb2xlO1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9ICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGJlZW4gZWRpdGluZyBzb21ldGhpbmcuICdcclxuICAgICAgICArICdJZiB5b3UgbGVhdmUgYmVmb3JlIHNhdmluZywgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcclxuICAgICAgICBpZiAoIWhhc0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBvblVubG9hZDtcclxuICAgIC8vdmFyIGxhc3RDbGlja09uRWxlbWVudDtcclxuICAgIC8vJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICBsYXN0Q2xpY2tPbkVsZW1lbnQ9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vfSk7XHJcblxyXG4gICAgdmFyIGxhc3RDbGlja2VkRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIC8vbGFzdENsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgJHRleHRhcmVhcyA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgLy9BZGQgdGlueW1jZSBnZXQgdGV4dCBmcm9tIHRleHRhcmVhIGxpa2VzIGlucHV0XHJcbiAgICAgICAgaWYgKCR0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNJbnB1dHNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkaW5wdXRzID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgYXR0ciA9ICQobGFzdENsaWNrZWRFbGVtZW50KS5kYXRhKGF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVXJsKGxpbmtQYXRoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIkNoZWNrIHVybFwiKTtcclxuICAgICAgICBsZXQgYXR0ciA9IGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGdldExhc3RDbGlja2VkRWxlbWVudCgpLCBcImRpc2FibGVMaW5rXCIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2tpbmcgaXMgZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNra2luZyBpcyBlbmFibGVkXCIpXHJcblxyXG4gICAgICAgIGlmIChsaW5rUGF0aC5pbmRleE9mKCdjcmVhdGUnKSA9PSAtMSAmJiBsaW5rUGF0aC5pbmRleE9mKCdlZGl0JykgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuaGFzQ2xhc3MoXCJidXR0b24tc3VibWl0XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50LmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuYXR0cignZGF0YS1kaXNhYmxlLXdhcm5pbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghbGFzdENsaWNrZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBsaW5rUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICRlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBcImRpc2FibGUtd2FybmluZ1wiKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tVcmwobGlua1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNDaGFuZ2VzID0gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB8fCBoYXNJbnB1dHNXaXRoVGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0b3BMZWF2ZShldikge1xyXG4gICAgICAgIGxldCBpc1NhdmluZyA9IGxhc3RDbGlja2VkRWxlbWVudCAmJiAhc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkKGxhc3RDbGlja2VkRWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChpc1NhdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlucHV0Q2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LCBcclxuICAgICAgICBmb3JjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgV2FybmluZ1dpbmRvdyB9O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlQXBwbGljYXRpb25SZXN0YXJ0KHsgdXJsLCB0aW1lb3V0LCBjdXRVcmwgfSkge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKTtcclxuICAgICAgICB1cmwgPSByZW1vdmVMYXN0QXR0cmlidXRlRnJvbVVybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTih0aW1lb3V0KSkge1xyXG4gICAgICAgIHRpbWVvdXQgPSAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXRVcmwgJiYgdXJsKSB7XHJcbiAgICAgICAgdXJsID0gcmVtb3ZlTGFzdEF0dHJpYnV0ZUZyb21VcmwoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpdGVSZXNwb25kcyh1cmwsIHRpbWVvdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVMYXN0QXR0cmlidXRlRnJvbVVybCh1cmwpIHtcclxuICAgIHZhciBsYXN0SW5kZXhPZlNsYXNoID0gdXJsLmxhc3RJbmRleE9mKCcvJyk7XHJcbiAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIGxhc3RJbmRleE9mU2xhc2gpO1xyXG4gICAgcmV0dXJuIHVybDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVTaXRlUmVzcG9uZHModmFsaWRhdGVVcmwsIHRpbWVvdXQpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogdmFsaWRhdGVVcmwsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB2YWxpZGF0ZVVybDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVTaXRlUmVzcG9uZHModmFsaWRhdGVVcmwsIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxufVxyXG5cclxud2luZG93LmhhbmRsZUFwcFJlc3RhcnQgPSBoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQ7XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi9jb21tb24vdmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICcuLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5pbXBvcnQgeyBoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQgfSBmcm9tICcuLi9yZXN0YXJ0LWFwcC5qcyc7XHJcbmltcG9ydCB7IEZpbGVIYW5kbGVyIH0gZnJvbSAnLi4vbW9kdWxlcy9maWxlLWhhbmRsZXIuanMnO1xyXG5pbXBvcnQgeyBXYXJuaW5nV2luZG93IH0gZnJvbSAnLi4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcbmltcG9ydCB7IHRleHRFZGl0b3IgfSBmcm9tICcuLi90ZXh0LWVkaXRvci5qcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhhc3NlbWJseU5hbWUpIHtcclxuICAgIGxldCAkZmllbGRzQ29udGFpbmVyID0gJCgnI2ZpZWxkcy1jb250YWluZXInKTtcclxuICAgIGxldCAkaW5wdXRUaXRsZSA9ICQoJyNpbnB1dC1jbGFzcy10aXRsZScpO1xyXG4gICAgbGV0ICRmb3JtID0gJCgnI2Zvcm0tY3JlYXRlLWNsYXNzJyk7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuXHJcbiAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9keW5hbWljL0FkZENsYXNzUHJvcGVydHlUZW1wbGF0ZScgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICB0ZW1wbGF0ZSA9IHJlcztcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgV2FybmluZ1dpbmRvdy5hdHRhY2goKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEZpZWxkKGV2KSB7XHJcbiAgICAgICAgJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuaHRtbCh0ZW1wbGF0ZSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdmaWVsZC1pdGVtJylcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRmaWVsZHNDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZpZWxkKGV2KSB7XHJcbiAgICAgICAgJChldi50YXJnZXQpLnBhcmVudHMoJy5maWVsZC1pdGVtJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BIGZpZWxkIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3QuIFBsZWFzZSBjaG9vc2UgYSBkaWZmZXJlbnQgbmFtZS5cclxuICAgIGZ1bmN0aW9uIGN1c3RvbVZhbGlkYXRpb24oJGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoJ3ZhbGlkYXRlLWZpZWxkLW5hbWUnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9yLnZhbGlkYXRlKCRlbGVtZW50LCAnVGhlIGZpZWxkIG5hbWUgbXVzdCBjb25zaXN0IG9mIGF0IGxlYXN0IDMgc3ltYm9scy4gUGxlYXNlLCB1c2Ugb25seSBhbHBoYW51bWVyaWMgc3ltYm9scyBhbmQgZG8gbm90IHVzZSBibGFuayBzcGFjZXMuJywgZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgMykgJiYgVmFsaWRhdG9yLmlzQWxwaGFOdW1lcmljKHZhbCkgJiYgVmFsaWRhdG9yLmlzU3RhcnRpbmdXaXRoTGV0dGVyKHZhbCk7XHJcbiAgICAgICAgICAgIH0pICYmIFZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgJ1RpdGxlIGFuZCBsaW5rIGFyZSBzeXN0ZW0gcmVzZXJ2ZWQgd29yZHMuJywgZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b0xvY2FsZUxvd2VyQ2FzZSgpICE9PSAnbGluaycgJiYgdmFsLnRvTG9jYWxlTG93ZXJDYXNlKCkgIT09ICd0aXRsZSc7XHJcbiAgICAgICAgICAgIH0pICYmIFZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgJ0EgZmllbGQgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdC4gUGxlYXNlIGNob29zZSBhIGRpZmZlcmVudCBuYW1lLicsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvci52YWxpZGF0ZVVuaXF1ZW5lcyh2YWwsICd2YWxpZGF0ZS1maWVsZC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlzRm9ybVZhbGlkID0gVmFsaWRhdG9yLmNyZWF0ZUZpZWxkc1ZhbGlkYXRpb24oY3VzdG9tVmFsaWRhdGlvbikuYmluZCgkZm9ybVswXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0Q3JlYXRlRm9ybShldikge1xyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcblxyXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAkKCcjaW5wdXQtY2xhc3MtbmFtZScpLnZhbCgpO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gW107XHJcbiAgICAgICAgJCgnLmZpZWxkLWl0ZW0nKS5lYWNoKChfLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gJChlbGVtZW50KS5maW5kKCdpbnB1dDp0ZXh0JykudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gJChlbGVtZW50KS5maW5kKCdzZWxlY3QnKS52YWwoKTtcclxuICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHsgbmFtZSwgdHlwZSB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKFZhbGlkYXRvci5pc0Z1bmN0aW9uKGZvcm1EYXRhLnNldCkpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuc2V0KCduYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLnNldCgndGl0bGUnLCAkaW5wdXRUaXRsZS52YWwoKSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLnNldCgnYXNzZW1ibHlOYW1lJywgYXNzZW1ibHlOYW1lKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuc2V0KCdwcm9wZXJ0aWVzJywgSlNPTi5zdHJpbmdpZnkocHJvcGVydGllcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgJGlucHV0VGl0bGUudmFsKCkpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Fzc2VtYmx5TmFtZScsIGFzc2VtYmx5TmFtZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvcGVydGllcycsIEpTT04uc3RyaW5naWZ5KHByb3BlcnRpZXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEucG9zdEZvcm0oeyB1cmw6ICcvc2l0ZXRyaWtzL2R5bmFtaWMvY3JlYXRlY2xhc3MnLCBmb3JtRGF0YSB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBcHBsaWNhdGlvblJlc3RhcnQoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNhbGVydHMnLCBtZXNzYWdlOiAnRHluYW1pYyBjbGFzcyB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0LicsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpO1xyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICRmaWVsZHNDb250YWluZXIub24oJ2NsaWNrJywgJy5idG4tZGVsZXRlLWZpZWxkJywgZGVsZXRlRmllbGQpO1xyXG4gICAgICAgICQoJyNidG4tYWRkLWZpZWxkJykub24oJ2NsaWNrJywgYWRkRmllbGQpO1xyXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBzdWJtaXRDcmVhdGVGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG4gICAgICAgICRmaWVsZHNDb250YWluZXIub2ZmKCdjbGljaycsICcuYnRuLWRlbGV0ZS1maWVsZCcsIGRlbGV0ZUZpZWxkKTtcclxuICAgICAgICAkKCcjYnRuLWFkZC1maWVsZCcpLm9mZignY2xpY2snLCBhZGRGaWVsZCk7XHJcbiAgICAgICAgJGZvcm0ub2ZmKCdzdWJtaXQnLCBzdWJtaXRDcmVhdGVGb3JtKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pY0NsYXNzZXNMaXN0KCkge1xyXG4gICAgYmluZEV2ZW50cygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNsYXNzKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgbGV0IGFzc2VtYmx5TmFtZSA9ICR0YXJnZXQuZGF0YSgnYXNzZW1ibHlOYW1lJyk7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICR0YXJnZXQuZGF0YSgnY2xhc3NOYW1lJyk7XHJcblxyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9keW5hbWljL2RlbGV0ZUNsYXNzP2Fzc2VtYmx5TmFtZT0nICsgYXNzZW1ibHlOYW1lICsgJyZjbGFzc05hbWU9JyArIGNsYXNzTmFtZSB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUFwcGxpY2F0aW9uUmVzdGFydCh7IHVybDogJy9zaXRldHJpa3MvZHluYW1pYycgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5kZWxldGUtZHluYW1pYy1jbGFzcycsIGRlbGV0ZUNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vZmYoJ2NsaWNrJywgJy5kZWxldGUtZHluYW1pYy1jbGFzcycsIGRlbGV0ZUNsYXNzKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdENsYXNzKG1vZGVsTmFtZSwgYXNzZW1ibHlOYW1lKSB7XHJcbiAgICBsZXQgJGZpZWxkc0NvbnRhaW5lciA9ICQoJyNmaWVsZHMtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgJGlucHV0VGl0bGUgPSAkKCcjaW5wdXQtY2xhc3MtdGl0bGUnKTtcclxuICAgIGxldCAkZm9ybSA9ICQoJyNmb3JtLWVkaXQtY2xhc3MnKTtcclxuICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG5cclxuICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICBEYXRhLmdldEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2R5bmFtaWMvQWRkQ2xhc3NQcm9wZXJ0eVRlbXBsYXRlJyB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIHRlbXBsYXRlID0gcmVzO1xyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRmllbGQoZXYpIHtcclxuICAgICAgICAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5odG1sKHRlbXBsYXRlKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZpZWxkLWl0ZW0nKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGZpZWxkc0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRmllbGQoZXYpIHtcclxuICAgICAgICAkKGV2LnRhcmdldCkucGFyZW50cygnLmZpZWxkLWl0ZW0nKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjdXN0b21WYWxpZGF0aW9uKCRlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKCd2YWxpZGF0ZS1maWVsZC1uYW1lJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgJ0ZpZWxkIE5hbWUgbXVzdCBiZSBhdGxlYXN0IDMgc3ltYm9scyBhbmQgYWxwaGFudW1lcmljIGFuZCBjYW4gbm90IHN0YXJ0IHdpdGggbnVtYmVyISBXaGl0ZXNwYWNlIGlzIG5vdCBhbHBoYW51bWVyaWMhIEZpZWxkIG5hbWUgbXVzdCBiZSBkaWZmZXJlbnQgZnJvbSBUaXRsZSEnLCBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9yLmhhc01pbmltdW1MZW5ndGgodmFsLCAzKSAmJiBWYWxpZGF0b3IuaXNBbHBoYU51bWVyaWModmFsKSAmJiBWYWxpZGF0b3IuaXNTdGFydGluZ1dpdGhMZXR0ZXIodmFsKSAmJiB2YWwgIT09ICdUaXRsZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNGb3JtVmFsaWQgPSBWYWxpZGF0b3IuY3JlYXRlRmllbGRzVmFsaWRhdGlvbihjdXN0b21WYWxpZGF0aW9uKS5iaW5kKCRmb3JtWzBdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRFZGl0Rm9ybShldikge1xyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcblxyXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgbGV0IG5ld05hbWUgPSAkKCcjaW5wdXQtY2xhc3MtbmFtZScpLnZhbCgpO1xyXG4gICAgICAgIGxldCBvbGROYW1lID0gbW9kZWxOYW1lO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gW107XHJcblxyXG4gICAgICAgICQoJy5maWVsZC1pdGVtJykuZWFjaCgoXywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9ICQoZWxlbWVudCkuZmluZCgnaW5wdXQ6dGV4dCcpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9ICQoZWxlbWVudCkuZmluZCgnc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaCh7IG5hbWUsIHR5cGUgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChWYWxpZGF0b3IuaXNGdW5jdGlvbihmb3JtRGF0YS5zZXQpKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLnNldCgnb2xkTmFtZScsIG9sZE5hbWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5zZXQoJ25ld05hbWUnLCBuZXdOYW1lKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuc2V0KCd0aXRsZScsICQoJyNpbnB1dC1jbGFzcy10aXRsZScpLnZhbCgpKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuc2V0KCdhc3NlbWJseU5hbWUnLCBhc3NlbWJseU5hbWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5zZXQoJ3Byb3BlcnRpZXMnLCBKU09OLnN0cmluZ2lmeShwcm9wZXJ0aWVzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvbGROYW1lJywgb2xkTmFtZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmV3TmFtZScsIG5ld05hbWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgJCgnI2lucHV0LWNsYXNzLXRpdGxlJykudmFsKCkpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Fzc2VtYmx5TmFtZScsIGFzc2VtYmx5TmFtZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvcGVydGllcycsIEpTT04uc3RyaW5naWZ5KHByb3BlcnRpZXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEucG9zdEZvcm0oeyB1cmw6ICcvc2l0ZXRyaWtzL2R5bmFtaWMvZWRpdGNsYXNzJywgZm9ybURhdGEgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQXBwbGljYXRpb25SZXN0YXJ0KHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuXHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICAkZmllbGRzQ29udGFpbmVyLm9uKCdjbGljaycsICcuYnRuLWRlbGV0ZS1maWVsZCcsIGRlbGV0ZUZpZWxkKTtcclxuICAgICAgICAkKCcjYnRuLWFkZC1maWVsZCcpLm9uKCdjbGljaycsIGFkZEZpZWxkKTtcclxuICAgICAgICAkZm9ybS5vbignc3VibWl0Jywgc3VibWl0RWRpdEZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgJGZpZWxkc0NvbnRhaW5lci5vZmYoJ2NsaWNrJywgJy5idG4tZGVsZXRlLWZpZWxkJywgZGVsZXRlRmllbGQpO1xyXG4gICAgICAgICQoJyNidG4tYWRkLWZpZWxkJykub2ZmKCdjbGljaycsIGFkZEZpZWxkKTtcclxuICAgICAgICAkZm9ybS5vZmYoJ3N1Ym1pdCcsIHN1Ym1pdEVkaXRGb3JtKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIER5bmFtaWNzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0obW9kZWxOYW1lLCBhc3NlbWJseU5hbWUsIGxvZ2dlciwgbWVkaWF0b3IpIHtcclxuICAgICAgICBsZXQgJG1vZGFsID0gJCgnI2ZpbGUtdXBsb2FkLW1vZGFsJyk7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkbW9kYWwuZmluZCgnLmZpbGUtaGFuZGxlci13cmFwcGVyJyk7XHJcbiAgICAgICAgbGV0IGZpbGVIYW5kbGVyID0gRmlsZUhhbmRsZXIoJGNvbnRhaW5lciwgWydVcGxvYWQnLCAnU2VsZWN0J10sICcnLCBtZWRpYXRvciwgbG9nZ2VyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdEltYWdlcyA9IGNyZWF0ZVNlbGVjdEltYWdlc0hhbmRsZXIobWVkaWF0b3IpO1xyXG4gICAgICAgIGxldCBkaXNwbGF5SW1hZ2VzID0gY3JlYXRlRGlzcGxheUltYWdlc0hhbmRsZXIoJG1vZGFsKTtcclxuXHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICAgICAgaW5pdEh0bWxBcmVhcygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVEeW5hbWljSXRlbShldikge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcG9wdWxhdGVQcm9wZXJ0aWVzKCQoJy5jbGFzcy1wcm9wZXJ0eScpKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWxpZGF0aW9uRmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBtb2RlbE5hbWUsXHJcbiAgICAgICAgICAgICAgICBhc3NlbWJseU5hbWU6IGFzc2VtYmx5TmFtZSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHJlc3VsdC5wcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9keW5hbWljL2NyZWF0ZWl0ZW0nLCBkYXRhOiBib2R5IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9zaXRldHJpa3MvZHluYW1pYy9jbGFzc2RldGFpbHM/YXNzZW1ibHlOYW1lPSR7Ym9keS5hc3NlbWJseU5hbWV9JmNsYXNzTmFtZT0ke2JvZHkuY2xhc3NOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICAgICAkKCcjYnRuLWNyZWF0ZS1pdGVtJykub24oJ2NsaWNrJywgY3JlYXRlRHluYW1pY0l0ZW0pO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LWR5bmFtaWMtaW1hZ2VzJykub24oJ2NsaWNrJywgc2VsZWN0SW1hZ2VzKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcubmV3cy1saXN0ZWQtaW1hZ2UtZGVsZXRlJywgcmVtb3ZlSW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3Iub24oJ2ZpbGVzU2VsZWN0ZWQnLCBkaXNwbGF5SW1hZ2VzLCAnZGlzcGxheVNlbGVjdGVkRmlsZXMnLCAnQ3JlYXRlSXRlbS5jc2h0bWwnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3Iub24oJ2ZpbGVzVXBsb2FkZWQnLCBkaXNwbGF5SW1hZ2VzLCAnZGlzcGxheVVwbG9hZGVkRmlsZXMnLCAnQ3JlYXRlSXRlbS5jc2h0bWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgICQoJyNidG4tY3JlYXRlLWl0ZW0nKS5vZmYoJ2NsaWNrJywgY3JlYXRlRHluYW1pY0l0ZW0pO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LWR5bmFtaWMtaW1hZ2VzJykub2ZmKCdjbGljaycsIHNlbGVjdEltYWdlcyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5vZmYoJ2NsaWNrJywgJy5uZXdzLWxpc3RlZC1pbWFnZS1kZWxldGUnLCByZW1vdmVJbWFnZSk7XHJcblxyXG4gICAgICAgICAgICBtZWRpYXRvci5vZmYoJ2ZpbGVzU2VsZWN0ZWQnLCBkaXNwbGF5SW1hZ2VzLCAnZGlzcGxheVNlbGVjdGVkRmlsZXMnLCAnQ3JlYXRlSXRlbS5jc2h0bWwnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlc1VwbG9hZGVkJywgZGlzcGxheUltYWdlcywgJ2Rpc3BsYXlVcGxvYWRlZEZpbGVzJywgJ0NyZWF0ZUl0ZW0uY3NodG1sJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRJdGVtKGlkLCBjbGFzc05hbWUsIGFzc2VtYmx5TmFtZSwgbG9nZ2VyLCBtZWRpYXRvcikge1xyXG4gICAgICAgIGxldCAkbW9kYWwgPSAkKCcjZmlsZS11cGxvYWQtbW9kYWwnKTtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICRtb2RhbC5maW5kKCcuZmlsZS1oYW5kbGVyLXdyYXBwZXInKTtcclxuICAgICAgICBsZXQgZmlsZUhhbmRsZXIgPSBGaWxlSGFuZGxlcigkY29udGFpbmVyLCBbJ1VwbG9hZCcsICdTZWxlY3QnXSwgJycsIG1lZGlhdG9yLCBsb2dnZXIsIHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0SW1hZ2VzID0gY3JlYXRlU2VsZWN0SW1hZ2VzSGFuZGxlcihtZWRpYXRvcik7XHJcbiAgICAgICAgbGV0IGRpc3BsYXlJbWFnZXMgPSBjcmVhdGVEaXNwbGF5SW1hZ2VzSGFuZGxlcigkbW9kYWwpO1xyXG5cclxuICAgICAgICAkKCdpbnB1dC5keW5hbWljLWltYWdlcycpLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0ICRpbWFnZXNJbnB1dCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxldCAkaW1nQ29udGFpbmVyID0gJGltYWdlc0lucHV0Lm5leHQoJy5keW5hbWljLWltYWdlcy1jb250YWluZXInKTtcclxuICAgICAgICAgICAgbGV0IGlucHV0U2VsZWN0b3IgPSBgLmR5bmFtaWMtaW1hZ2VzW2RhdGEtbmFtZT0nJHskaW1hZ2VzSW5wdXQuYXR0cignZGF0YS1uYW1lJyl9J11gO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbWFnZXMgPSAkaW1hZ2VzSW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBmaWxlSWRzID0gY3VycmVudEltYWdlcy5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVJZHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlSWRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW1hZ2VWaWV3KGlucHV0U2VsZWN0b3IsIGZpbGVJZHNbaV0sICRpbWdDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICBXYXJuaW5nV2luZG93LmF0dGFjaCgpO1xyXG4gICAgICAgIGluaXRIdG1sQXJlYXMoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZWRpdER5bmFtaWNJdGVtKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBwb3B1bGF0ZVByb3BlcnRpZXMoJCgnLmNsYXNzLXByb3BlcnR5JykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWxpZGF0aW9uRmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICBhc3NlbWJseU5hbWU6IGFzc2VtYmx5TmFtZSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHJlc3VsdC5wcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9keW5hbWljL2VkaXRpdGVtJywgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvc2l0ZXRyaWtzL2R5bmFtaWMvY2xhc3NkZXRhaWxzP2Fzc2VtYmx5TmFtZT0ke2JvZHkuYXNzZW1ibHlOYW1lfSZjbGFzc05hbWU9JHtib2R5LmNsYXNzTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICAgICAkKCcjYnRuLWVkaXQtaXRlbScpLm9uKCdjbGljaycsIGVkaXREeW5hbWljSXRlbSk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3QtZHluYW1pYy1pbWFnZXMnKS5vbignY2xpY2snLCBzZWxlY3RJbWFnZXMpO1xyXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5uZXdzLWxpc3RlZC1pbWFnZS1kZWxldGUnLCByZW1vdmVJbWFnZSk7XHJcblxyXG4gICAgICAgICAgICBtZWRpYXRvci5vbignZmlsZXNTZWxlY3RlZCcsIGRpc3BsYXlJbWFnZXMsICdkaXNwbGF5U2VsZWN0ZWRGaWxlcycsICdDcmVhdGVJdGVtLmNzaHRtbCcpO1xyXG4gICAgICAgICAgICBtZWRpYXRvci5vbignZmlsZXNVcGxvYWRlZCcsIGRpc3BsYXlJbWFnZXMsICdkaXNwbGF5VXBsb2FkZWRGaWxlcycsICdDcmVhdGVJdGVtLmNzaHRtbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgJCgnI2J0bi1lZGl0LWl0ZW0nKS5vZmYoJ2NsaWNrJywgZWRpdER5bmFtaWNJdGVtKTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1keW5hbWljLWltYWdlcycpLm9mZignY2xpY2snLCBzZWxlY3RJbWFnZXMpO1xyXG4gICAgICAgICAgICAkKCdib2R5Jykub2ZmKCdjbGljaycsICcubmV3cy1saXN0ZWQtaW1hZ2UtZGVsZXRlJywgcmVtb3ZlSW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3Iub2ZmKCdmaWxlc1NlbGVjdGVkJywgZGlzcGxheUltYWdlcywgJ2Rpc3BsYXlTZWxlY3RlZEZpbGVzJywgJ0NyZWF0ZUl0ZW0uY3NodG1sJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLm9mZignZmlsZXNVcGxvYWRlZCcsIGRpc3BsYXlJbWFnZXMsICdkaXNwbGF5VXBsb2FkZWRGaWxlcycsICdDcmVhdGVJdGVtLmNzaHRtbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVByb3BlcnRpZXMoZmllbGRzKSB7XHJcbiAgICAgICAgbGV0IHByb3BlcnRpZXMgPSBbXTtcclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBsZXQgJGl0ZW0gPSAkKGZpZWxkc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gJGl0ZW0uYXR0cignZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gJGl0ZW0uYXR0cignZGF0YS10eXBlJyk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICRpdGVtLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZy1odG1sJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0ZXh0RWRpdG9yLmdldENvbnRlbnQoJ2FyZWEtJyArIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZUZpZWxkKCRpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRmFpbGVkOiBmbGFnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJbWFnZVZpZXcoZmllbGRJZCwgaW1nTGlua0lkLCAkaW1nQ29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwibmV3cy1saXN0ZWQtaW1hZ2VzLWNvbnRhaW5lclwiPjwvZGl2PicpO1xyXG4gICAgICAgIGxldCAkZGVsZXRlQnRuID0gJCgnPGRpdiBjbGFzcz1cIm5ld3MtbGlzdGVkLWltYWdlLWRlbGV0ZVwiIGRhdGEtaWQ9XCInICsgaW1nTGlua0lkICsgJ1wiIGRhdGEtZmllbGQ9XCInICsgZmllbGRJZCArICdcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCI+PC9zcGFuPjwvZGl2PicpO1xyXG4gICAgICAgIGxldCAkaW1nID0gJCgnPGltZyBzcmM9XCIvZmlsZXMvaWQvJyArIGltZ0xpbmtJZCArICdcIiBjbGFzcz1cImRpc3BsYXktaW1hZ2VcIiAvPicpO1xyXG5cclxuICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkZGVsZXRlQnRuKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRpbWcpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkaW1nQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVJbWFnZShldikge1xyXG4gICAgICAgIGxldCAkdHJpZ2dlciA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IGltZ0lkID0gJHRyaWdnZXIuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9ICR0cmlnZ2VyLmF0dHIoJ2RhdGEtZmllbGQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yICYmIHNlbGVjdG9yICE9PSAnJykge1xyXG4gICAgICAgICAgICBsZXQgJGZpZWxkID0gJChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW1hZ2VzID0gJGZpZWxkLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEltYWdlcykge1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLnZhbChjdXJyZW50SW1hZ2VzLnJlcGxhY2UoaW1nSWQsICcnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICR0cmlnZ2VyLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEltYWdlc0hhbmRsZXIobWVkaWF0b3IpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc2VsZWN0SW1hZ2VzKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdGVyID0gJHRhcmdldC5hdHRyKCdkYXRhLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgIG1lZGlhdG9yLmRpc3BhdGNoKCdmaWxlSGFuZGxlclR5cGVDaGFuZ2UnLCB7IHR5cGU6ICdtdWx0aXBsZScsIHJlcXVlc3RlciB9KTtcclxuICAgICAgICAgICAgLy9sZXQgJGltYWdlc0lucHV0ID0gJChgLmR5bmFtaWMtaW1hZ2VzW2RhdGEtbmFtZT0nJHtyZXF1ZXN0ZXJ9J11gKTtcclxuICAgICAgICAgICAgLy9tZWRpYXRvci5kaXNwYXRjaCgncG9wdWxhdGVkU2VsZWN0ZWQnLCAkaW1hZ2VzSW5wdXQudmFsKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRGlzcGxheUltYWdlc0hhbmRsZXIoJG1vZGFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRpc3BsYXlJbWFnZXMoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRTZWxlY3RvciA9IGAuZHluYW1pYy1pbWFnZXNbZGF0YS1uYW1lPScke2RhdGEucmVxdWVzdGVyfSddYDtcclxuICAgICAgICAgICAgbGV0ICRpbWFnZXNJbnB1dCA9ICQoaW5wdXRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGxldCAkaW1nQ29udGFpbmVyID0gJGltYWdlc0lucHV0Lm5leHQoJy5keW5hbWljLWltYWdlcy1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgIC8vbGV0IGN1cnJlbnRJbWFnZXMgPSAkaW1hZ2VzSW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgIC8vaWYgKGN1cnJlbnRJbWFnZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgaWYgKGN1cnJlbnRJbWFnZXMubGVuZ3RoID4gMCAmJiBjdXJyZW50SW1hZ2VzW2N1cnJlbnRJbWFnZXMubGVuZ3RoIC0gMV0gIT09ICc7Jykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgY3VycmVudEltYWdlcyArPSAnOyc7XHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICRpbWFnZXNJbnB1dC52YWwoY3VycmVudEltYWdlcyArIGRhdGEuZmlsZUlkcy5qb2luKCc7JykpO1xyXG4gICAgICAgICAgICAvL30gZWxzZSB7XHJcbiAgICAgICAgICAgICRpbWFnZXNJbnB1dC52YWwoZGF0YS5maWxlSWRzLmpvaW4oJzsnKSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAkaW1nQ29udGFpbmVyLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5maWxlSWRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVJbWFnZVZpZXcoaW5wdXRTZWxlY3RvciwgZGF0YS5maWxlSWRzW2ldLCAkaW1nQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJG1vZGFsLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0SHRtbEFyZWFzKCkge1xyXG4gICAgICAgICQoJ3RleHRhcmVhLmh0bWwtYXJlYScpLmVhY2goKF8sIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5pbml0KCcjJytlbGVtZW50LmlkLCA1MDAsIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVJdGVtLFxyXG4gICAgICAgIGVkaXRJdGVtXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxud2luZG93LmNyZWF0ZUNsYXNzID0gY3JlYXRlQ2xhc3M7XHJcbndpbmRvdy5keW5hbWljQ2xhc3Nlc0xpc3QgPSBkeW5hbWljQ2xhc3Nlc0xpc3Q7XHJcbndpbmRvdy5lZGl0Q2xhc3MgPSBlZGl0Q2xhc3M7XHJcbndpbmRvdy5EeW5hbWljcyA9IER5bmFtaWNzO1xyXG4iLCIvKiBnbG9iYWxzIHRpbnltY2UgKi9cclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcblxyXG52YXIgdGV4dEVkaXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0SW5zdGFjZUNhbGxiYWNrKGVkaXRvcikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgV2FybmluZ1dpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgV2FybmluZ1dpbmRvdy5mb3JjZSkge1xyXG4gICAgICAgICAgICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgV2FybmluZ1dpbmRvdy5mb3JjZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIGVkaXRvci5hZGRCdXR0b24oJ2N1c3RvbWJ1dHRvbicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ21lbnVidXR0b24nLFxyXG4gICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tJyxcclxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbnU6IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nb3V0IGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5pbnNlcnRDb250ZW50KCc8YSBocmVmPVwiL2xvZ291dFwiPkxvZ291dDwvYT4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGlmIChvbkluaXRDYWxsYmFjayAmJiB7fS50b1N0cmluZy5jYWxsKG9uSW5pdENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xyXG4gICAgICAgICAgICAgICAgb25Jbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBlbmFibGUgYXV0by1zeW5jIHdpdGggdGhlIHRleHRhcmVhXHJcbiAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbnltY2UudHJpZ2dlclNhdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbWFnZV9saXN0KHN1Y2Nlc3MpIHtcclxuICAgICAgICAkLmdldCgnL3NpdGV0cmlrcy9maWxlcy9nZXRhbGxpbWFnZXMnLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzLmltYWdlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsZV9waWNrZXJfY2FsbGJhY2soY2IsIHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2ltYWdlLyonKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGlucHV0KTtcclxuXHJcbiAgICAgICAgLy8gTm90ZTogSW4gbW9kZXJuIGJyb3dzZXJzIGlucHV0W3R5cGU9XCJmaWxlXCJdIGlzIGZ1bmN0aW9uYWwgd2l0aG91dCBcclxuICAgICAgICAvLyBldmVuIGFkZGluZyBpdCB0byB0aGUgRE9NLCBidXQgdGhhdCBtaWdodCBub3QgYmUgdGhlIGNhc2UgaW4gc29tZSBvbGRlclxyXG4gICAgICAgIC8vIG9yIHF1aXJreSBicm93c2VycyBsaWtlIElFLCBzbyB5b3UgbWlnaHQgd2FudCB0byBhZGQgaXQgdG8gdGhlIERPTVxyXG4gICAgICAgIC8vIGp1c3QgaW4gY2FzZSwgYW5kIHZpc3VhbGx5IGhpZGUgaXQuIEFuZCBkbyBub3QgZm9yZ2V0IGRvIHJlbW92ZSBpdFxyXG4gICAgICAgIC8vIG9uY2UgeW91IGRvIG5vdCBuZWVkIGl0IGFueW1vcmUuXHJcblxyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IE5vdyB3ZSBuZWVkIHRvIHJlZ2lzdGVyIHRoZSBibG9iIGluIFRpbnlNQ0VzIGltYWdlIGJsb2JcclxuICAgICAgICAgICAgICAgIC8vIHJlZ2lzdHJ5LiBJbiB0aGUgbmV4dCByZWxlYXNlIHRoaXMgcGFydCBob3BlZnVsbHkgd29uJ3QgYmVcclxuICAgICAgICAgICAgICAgIC8vIG5lY2Vzc2FyeSwgYXMgd2UgYXJlIGxvb2tpbmcgdG8gaGFuZGxlIGl0IGludGVybmFsbHkuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAnYmxvYmlkJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkNhY2hlID0gdGlueW1jZS5hY3RpdmVFZGl0b3IuZWRpdG9yVXBsb2FkLmJsb2JDYWNoZTtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkluZm8gPSBibG9iQ2FjaGUuY3JlYXRlKGlkLCBmaWxlLCBiYXNlNjQpO1xyXG4gICAgICAgICAgICAgICAgYmxvYkNhY2hlLmFkZChibG9iSW5mbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgYW5kIHBvcHVsYXRlIHRoZSBUaXRsZSBmaWVsZCB3aXRoIHRoZSBmaWxlIG5hbWVcclxuICAgICAgICAgICAgICAgIGNiKGJsb2JJbmZvLmJsb2JVcmkoKSwgeyB0aXRsZTogZmlsZS5uYW1lIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICB2ZXJpZnlfaHRtbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnc3BhbicsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnZGl2W2NsYXNzfGlkfHN0eWxlfHNwYW5dLHNwYW5bY2xhc3N8aWR8c3R5bGVdJyxcclxuICAgICAgICAgICAgZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHM6ICdkaXZbKl0sc3BhblsqXScsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnbW9kZXJuJyxcclxuICAgICAgICAgICAgbW9kZTogJ3RleHRhcmVhcycsXHJcbiAgICAgICAgICAgIGZvcmNlX2JyX25ld2xpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VfcF9uZXdsaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlZF9yb290X2Jsb2NrOiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgcGx1Z2luczogWydhZHZsaXN0IGF1dG9saW5rIGNvZGVzYW1wbGUgbGluayBpbWFnZSBsaXN0cyBjaGFybWFwIHByaW50IHByZXZpZXcgaHIgYW5jaG9yIHBhZ2VicmVhayBmdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHdvcmRjb3VudCB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgY29kZSBpbnNlcnRkYXRldGltZSBub25icmVha2luZycsICdzYXZlIHRhYmxlIGNvbnRleHRtZW51IGRpcmVjdGlvbmFsaXR5IHBhc3RlIHRleHRjb2xvciddLFxyXG4gICAgICAgICAgICBleHRlcm5hbF9wbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAnY29kZUhpZ2hsJzogJy9wbHVnaW5zL3RpbnltY2UvY29kZS1oaWdobGlnaHQtdGlueW1jZS1wbHVnaW4uanMnLFxyXG4gICAgICAgICAgICAgICAgJ2h0bWxCbG9ja3MnOiAnL3BsdWdpbnMvdGlueW1jZS9odG1sLWNvbXBvbmVudHMtdGlueW1jZS1wbHVnaW4uanMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyb3dzZXJfc3BlbGxjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGV4dG1lbnU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXN0ZV9hc190ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9jYXB0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9hZHZ0YWI6IHRydWUsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnZmlsZSBpbWFnZSBtZWRpYScsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX2NhbGxiYWNrOiBmaWxlX3BpY2tlcl9jYWxsYmFjayxcclxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlIHwgcHJpbnQgcHJldmlldyBtZWRpYSBmdWxscGFnZSB8IGZvcmVjb2xvciBiYWNrY29sb3IgY29kZSB8IGNvZGVIaWdobCB8IGZvbnRzaXplc2VsZWN0IHwgZm9udHNlbGVjdCB8IGN1c3RvbWJ1dHRvbicsXHJcbiAgICAgICAgICAgIGZvbnRzaXplX2Zvcm1hdHM6ICc4cHggMTBweCAxMnB4IDE0cHggMTZweCAxOHB4IDIwcHggMjJweCAyNHB4IDM2cHggNDhweCcsXHJcbiAgICAgICAgICAgIHNldHVwOiBlZGl0b3IgPT4gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjayksXHJcbiAgICAgICAgICAgIGluaXRfaW5zdGFuY2VfY2FsbGJhY2s6IGluaXRJbnN0YWNlQ2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGNmZyA9IGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKTtcclxuICAgICAgICBjZmcuaW1hZ2VfbGlzdCA9IGltYWdlX2xpc3Q7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFdpdGhvdXRJbWFnZXMoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGVkaXRvciA9IHRpbnltY2UuZ2V0KHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWRpdG9yKSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIHRpbnltY2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBsZXQgZWRpdG9yID0gdGlueW1jZS5nZXQoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgZWRpdG9yLnNldENvbnRlbnQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3RvciBtdXN0IGJlIElkXHJcbiAgICBmdW5jdGlvbiBnZXRDb250ZW50KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbnltY2UuZ2V0KGlkKS5nZXRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRWRpdG9yKGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0lkIGZvciB0aGUgdGV4dCBlZGl0b3IgbXVzdCBiZSBzcGVjaWZpZWQhJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgNjAwO1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAzMDA7XHJcbiAgICAgICAgaWYgKGlkWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoaWQuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLnJlbW92ZShpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0RWRpdG9yLmluaXQoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCxcclxuICAgICAgICBpbml0V2l0aG91dEltYWdlcyxcclxuICAgICAgICBnZXRDb250ZW50LFxyXG4gICAgICAgIHJlbW92ZSxcclxuICAgICAgICByZW1vdmVBbGwsXHJcbiAgICAgICAgY2xlYXIsXHJcbiAgICAgICAgYWRkRWRpdG9yXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgdGV4dEVkaXRvciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9