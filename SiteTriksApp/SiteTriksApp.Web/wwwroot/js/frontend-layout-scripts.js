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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/frontend-layout-scripts.js");
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

/***/ "./scripts/all-news.js":
/*!*****************************!*\
  !*** ./scripts/all-news.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.allNewsWidget = allNewsWidget;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var _hashRouter = __webpack_require__(/*! ./modules/hash-router.js */ "./scripts/modules/hash-router.js");

function allNewsWidget() {
    if (!document.getElementsByClassName('allnews-container').length) {
        return;
    }

    var $window = $(window);
    var $accordion = $('.accordion');
    var $nestedAccordion = $('.accordion-nested');
    var $detailedNewsContainer = $('#news-view-container');
    var windowWidth = $window.width();

    init();
    bindEvents();

    function init() {
        _hashRouter.HashRouter.onChange('news', loadDetailedNews, 'loadDetailedNews');
        var selectedNews = _hashRouter.HashRouter.get('news');
        loadDetailedNews(selectedNews);
        var active = 0;
        var activeNested = 0;

        if (windowWidth <= 768) {
            active = false;
            activeNested = false;
        } else if (selectedNews) {
            var $parent = $('.detailed-news[data-url="' + selectedNews + '"]').parent().parent();
            var year = $parent.attr('data-year');
            var month = $parent.attr('data-month');
            active = activateAccordion(year, 'data-year', '.accordion-item');
            activeNested = activateAccordion(month, 'data-month', '.accordion-item-nested-' + year);
        }

        $accordion.accordion({ collapsible: true, active: active });
        $nestedAccordion.accordion({ heightStyle: 'content', collapsible: true, active: activeNested });
    }

    function onSelectNews(e) {
        var url = this.getAttribute('data-url');
        url ? _hashRouter.HashRouter.set('news', [url]) : _hashRouter.HashRouter.set('news');
        if (windowWidth <= 768) {
            $accordion.accordion('option', { active: false });
            $nestedAccordion.accordion('option', { active: false });
        }

        return false;
    }

    function loadDetailedNews(data) {
        var url = data && data.length ? data[0] : '';
        $detailedNewsContainer.html('Loading...');
        _data.Data.getJson({ url: '/widget/newswidget/DetailedNews/' + url }).then(function (res) {
            $detailedNewsContainer.html(res);
        });
    }

    function activateAccordion(data, attribute, selector) {
        var result = 0;

        $(selector).each(function (index, el) {
            if (el.getAttribute(attribute) === data) {
                result = index;
                return;
            }
        });

        return result;
    }

    function handleResize(ev) {
        if ($window.width() <= 768 && windowWidth > 768) {
            $accordion.accordion('option', { active: false });
            $nestedAccordion.accordion('option', { active: false });
        }

        windowWidth = $window.width();
    }

    function bindEvents() {
        $window.on('resize', handleResize);
        $('.detailed-news').on('click', onSelectNews);
    }
}

/***/ }),

/***/ "./scripts/blog-widget.js":
/*!********************************!*\
  !*** ./scripts/blog-widget.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blogWidget = blogWidget;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ./common/loader.js */ "./scripts/common/loader.js");

var _utils = __webpack_require__(/*! ./common/utils.js */ "./scripts/common/utils.js");

var _pager = __webpack_require__(/*! ./modules/pager.js */ "./scripts/modules/pager.js");

var _dataSource = __webpack_require__(/*! ./modules/data-source.js */ "./scripts/modules/data-source.js");

var _validator = __webpack_require__(/*! ./common/validator.js */ "./scripts/common/validator.js");

var _comments = __webpack_require__(/*! ./comments.js */ "./scripts/comments.js");

var _hashRouter = __webpack_require__(/*! ./modules/hash-router.js */ "./scripts/modules/hash-router.js");

var _handlebars = __webpack_require__(/*! ./common/handlebars.js */ "./scripts/common/handlebars.js");

var _textEditor = __webpack_require__(/*! ./text-editor.js */ "./scripts/text-editor.js");

/* Data, Loader, Utils, Pager, DataSource, HashRouter, Comments, Validator */
function blogWidget() {
    var $wrapper = $('.st-blog-wrapper');
    if (!$wrapper.length) {
        return;
    }

    var $container = $wrapper.find('.st-blog-container');
    var $pager = $wrapper.find('.blog-pager');
    var source = void 0;
    var pager = void 0;
    var defaultPageSize = 20;
    var paging = { page: 1, size: defaultPageSize };
    var templatesCache = {};
    var templates = [{ name: 'blog-list', url: '/templates/blog-list.html' }, { name: 'blog-post', url: '/templates/blog-post.html' }];

    loadDependencies().then(function (res) {
        return (0, _handlebars.loadHandlebarsTemplates)(templatesCache, templates);
    }).then(function (res) {
        source = (0, _dataSource.DataSource)({ url: '/sitetriks/blog/grid', type: 'server' });
        pager = (0, _pager.Pager)($pager, { pageSizes: [1, 2, 5, 10, 20, 'all'], default: defaultPageSize }, pagingHandler);

        var params = _hashRouter.HashRouter.get('blog');
        handleAction(params);
        _hashRouter.HashRouter.onChange('blog', handleAction, 'blog-widget');
        bindEvents();
    });

    function loadDependencies() {
        var promises = [];
        promises.push(_utils.Utils.loadjscssfileAsync('/css/forum.css', 'css')); // TODO: check if loaded, move comment styles from forum

        if (typeof tinymce === 'undefined') {
            promises.push(_utils.Utils.loadjscssfileAsync('/lib/custom/tinymce/tinymce.min.js', 'js'));
        }

        return Promise.all(promises);
    }

    function load() {
        _loader.Loader.show('#fff');
        return source.getData({ paging: paging }).then(function (res) {
            if (res.success) {
                $container.html('');
                res.items.forEach(function (item) {
                    return item.dateCreated = new Date(item.dateCreated).toDateString();
                });
                var html = templatesCache['blog-list'](res);
                $container.append(html);
            }

            if (paging.size !== 'all') {
                pager.setCurrentPage(paging.page);
                pager.setPageSize(paging.size);
                pager.setPagesCount(Math.ceil(res.count / paging.size));
            }

            pager.unlock();
            $pager.show();
            _loader.Loader.hide();
            return res;
        });
    }

    function pagingHandler(page, size) {
        if (+page === 1 && +size === defaultPageSize) {
            _hashRouter.HashRouter.set('blog');
        } else {
            _hashRouter.HashRouter.set('blog', [page, size]);
        }
    }

    function loadPost(id) {
        _loader.Loader.show('#fff');
        return _data.Data.getJson({ url: '/sitetriks/blog/getblog?id=' + id }).then(function (res) {
            if (res.success) {
                $pager.hide();
                pager.lock();
                var obj = { item: res.item, isAuthenticated: res.isAuthenticated, paging: paging };
                obj.item.dateCreated = new Date(obj.item.dateCreated).toDateString();
                var html = templatesCache['blog-post'](obj);
                $container.html(html);
                if (res.isAuthenticated) {
                    _comments.Comments.init(id, $container.find('.comments-container'), 'blog-comment-area');
                } else {
                    _comments.Comments.loadComments(id, $container.find('.comments-container'));
                }
            }

            _loader.Loader.hide();
        });
    }

    function readMore(ev) {
        var id = this.getAttribute('data-id');
        _hashRouter.HashRouter.set('blog', [id]);
    }

    function returnToGrid(ev) {
        _textEditor.textEditor.remove('blog-comment-area'); //TODO: Find a better way to reinit tinyMCE
        var page = this.getAttribute('data-page') || 1;
        var size = this.getAttribute('data-size') || defaultPageSize;
        pagingHandler(page, size);
    }

    function handleAction(params) {
        if (params && params.length) {
            if (_utils.Utils.isGuid(params[0])) {
                loadPost(params[0]);
                return;
            }

            paging.page = _validator.Validator.isInteger(params[0]) ? +params[0] : 1;
            paging.size = params.length > 1 && (_validator.Validator.isInteger(params[1]) || params[1] === 'all') ? params[1] : defaultPageSize;
        }

        load();
    }

    function bindEvents() {
        $wrapper.on('click', '.btn-back', returnToGrid);
        $wrapper.on('click', '.st-blog-details', readMore);
    }
}

/***/ }),

/***/ "./scripts/carousel.js":
/*!*****************************!*\
  !*** ./scripts/carousel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initCarousel = initCarousel;
function initCarousel() {
    $(document).on('initCarousel', {}, function () {
        var $carousels = $('.carousel');
        if ($carousels.length < 1) {
            return;
        }

        if ($('.slick-initialized').length) {
            $carousels.slick('unslick');
        }

        $carousels.each(function (_, element) {
            var $element = $(element);
            var slides_lg = +$element.attr('data-slides-lg') || 3;
            var slides_md = +$element.attr('data-slides-md') || 3;
            var slides_sm = +$element.attr('data-slides-sm') || 2;
            var slides_xs = +$element.attr('data-slides-xs') || 1;

            $element.slick({
                infinite: false,
                slidesToShow: slides_lg,
                slidesToScroll: slides_lg,
                arrows: false,
                dots: true,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: slides_md,
                        slidesToScroll: slides_md
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: slides_sm,
                        slidesToScroll: slides_sm
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: slides_xs,
                        slidesToScroll: slides_xs
                    }
                }]
            });
        });
    });

    $(document).on('removeCarousel', {}, function () {
        if ($('.slick-initialized').length) {
            $('.carousel').slick('unslick');
        }
    });
}

/***/ }),

/***/ "./scripts/comments.js":
/*!*****************************!*\
  !*** ./scripts/comments.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Comments = undefined;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ./common/loader.js */ "./scripts/common/loader.js");

var _handlebars = __webpack_require__(/*! ./common/handlebars.js */ "./scripts/common/handlebars.js");

var _textEditor = __webpack_require__(/*! ./text-editor.js */ "./scripts/text-editor.js");

var _notifier = __webpack_require__(/*! ./common/notifier.js */ "./scripts/common/notifier.js");

var Comments = function () {
    var parentId = void 0;
    var $container = void 0;
    var templatesCache = {};
    var areaId = void 0;

    function init(id, $commentsContainer, textAreaId) {
        parentId = id;
        $container = $commentsContainer || $('#comments-container');
        areaId = textAreaId || 'comment-area';
        _textEditor.textEditor.remove(areaId);
        _textEditor.textEditor.init('#' + areaId, 600, 300);

        return Promise.all([(0, _handlebars.loadHandlebarsTemplates)(templatesCache, [{ name: 'comment-edit', url: '/templates/comment-edit.html' }]), loadComments(parentId)]).then(function (res) {
            bindEvents();
        });
    }

    function loadComments(id, $commentsContainer) {
        $container = $commentsContainer || $container || $('#comments-container');
        // TODO: add inline loader
        return _data.Data.getJson({ url: '/sitetriks/comments/loadcomments?id=' + id }).then(function (res) {
            if (res) {
                $container.append(res);
                return { success: true };
            }

            return { success: false };
        });
    }

    function addComment(ev) {
        _loader.Loader.show('#fff');
        var content = _textEditor.textEditor.getContent(areaId);

        var body = { id: parentId, content: content };
        _data.Data.postJson({ url: '/sitetriks/comments/addcomment', data: body }).then(function (res) {
            if (res.success) {
                $container.append(res.view);
                _textEditor.textEditor.clear(areaId);
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alert', message: 'Comment must not be empty', status: 'danger' });
            }

            _loader.Loader.hide();
        });
    }

    function editComment(ev) {
        closeEdit();
        var $trigger = $(this);
        var $content = $trigger.parents('.panel-heading').next('.panel-body');

        var html = templatesCache['comment-edit']({ content: $content.html() });
        $content.parent().append(html);

        $content.hide();
        $trigger.hide();

        _textEditor.textEditor.initWithoutImages('#edit-post-content', '', 300);
    }

    function closeEdit(ev, content) {
        var $content = (ev && ev.target ? $(ev.target).parents('.edit-post-container') : $container.find('.edit-post-container')).prev('.panel-body');
        if ($content && $content.length) {
            _textEditor.textEditor.remove('edit-post-content');
            $content.prev('.panel-heading').find('.btn-edit-post').show();
            $content.show();
            $('.edit-post-container').remove();
            if (content) {
                $content.html(content);
            }
        }
    }

    function saveEditedComment(ev) {
        var $trigger = $(this);
        var id = $trigger.parents('.comment-wrapper').attr('data-id');

        var content = _textEditor.textEditor.getContent('edit-post-content');

        var body = { id: id, content: content };
        _loader.Loader.show('#fff');
        _data.Data.postJson({ url: '/sitetriks/comments/editcomment', data: body }).then(function (res) {
            if (res.success) {
                closeEdit({ target: $trigger }, content);
            }

            _loader.Loader.hide();
        });
    }

    function deleteComment(ev) {
        var $parent = $(this).parents('.comment-wrapper');
        var id = $parent.attr('data-id');

        _loader.Loader.show(true);
        closeEdit();
        _data.Data.postJson({ url: '/sitetriks/comments/deletecomment', data: { id: id } }).then(function (res) {
            if (res.success) {
                $parent.parent().remove();
            }

            _loader.Loader.hide();
        });
    }

    function bindEvents() {
        $container.parent().on('click', '.btn-add-comment', addComment);
        $container.on('click', '.btn-edit-post', editComment);
        $container.on('click', '.btn-save-edited-post', saveEditedComment);
        $container.on('click', '.btn-delete-comment', deleteComment);
        $container.on('click', '.btn-cancel-edited-post', closeEdit);
    }

    return { init: init, loadComments: loadComments };
}();

exports.Comments = Comments;

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

/***/ "./scripts/documentation-widget.js":
/*!*****************************************!*\
  !*** ./scripts/documentation-widget.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.documentationModule = documentationModule;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

function documentationModule() {
    var $wrapper = $('.st-documentation-wrapper');
    if ($wrapper.length < 1) {
        return;
    }

    var $docMenu = $wrapper.find('.docs-menu');
    var $btnNext = $wrapper.find('.next-doc');
    var $btnPrev = $wrapper.find('.prev-doc');
    var $versions = $wrapper.find('.documentation-versions');
    var $topicDetails = $wrapper.find('.topic-details');

    init();

    function init() {
        var $first = $docMenu.find('a').first();
        if ($first && $first.length > 0) {
            selectTopic({ target: $first });
        }

        if (!$first || !$first.attr('data-next')) {
            $btnNext.hide();
        }

        bindEvents();
    }

    function bindEvents() {
        $docMenu.on('click', '.glyphicon-menu-right', expand);
        $docMenu.on('click', '.glyphicon-menu-down', collapse);
        $docMenu.on('click', 'li', selectTopic);
        $btnNext.on('click', pageing);
        $btnPrev.on('click', pageing);
        $versions.on('change', loadVersion);
    }

    function dispose() {
        $docMenu.off('click', '.glyphicon-menu-right', expand);
        $docMenu.off('click', '.glyphicon-menu-down', collapse);
        $docMenu.off('click', 'li', selectTopic);
        $btnNext.off('click', pageing);
        $btnPrev.off('click', pageing);
        $versions.off('change', loadVersion);
    }

    function loadTopic(id) {
        return _data.Data.postJson({ url: '/sitetriks/documentation/getcontent', data: { id: id, version: $versions.val() } }).then(function (res) {
            $topicDetails.html(res);
        }, _data.Data.defaultError).then(function () {
            // TODO: dispatch event instead
            if ($('pre').length > 0) {
                Prism.highlightAll();
            }

            if ($('.prettyprint').length > 0) {
                prettify();
            }
        });
    }

    function expand(ev) {
        var $icon = $(ev.target);
        $icon.parent().next('ul').show();
        $icon.removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
    }

    function collapse(ev) {
        var $icon = $(ev.target);
        $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
        var $toHide = $icon.parent().next('ul');
        $toHide.hide();

        var descendants = Array.prototype.slice.call($toHide[0].querySelectorAll('ul'), 0);

        descendants.forEach(function (descendant) {
            var $item = $(descendant);
            $item.hide();
            var $icon = $item.prev().find('span.glyphicon');
            if ($icon && $icon.length > 0) {
                $icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
            }
        });
    }

    function selectTopic(ev) {
        var $trigger = $(ev.target);
        if ($trigger.is('div')) {
            $trigger = $trigger.find('a');
        }

        if ($trigger.is('span.glyphicon')) {
            return;
        }

        if ($trigger.is('span.childless')) {
            $trigger = $trigger.next('a');
        }

        var nextId = $trigger.attr('data-next');
        var prevId = $trigger.attr('data-prev');

        if (!nextId) {
            $btnNext.hide();
        } else {
            $btnNext.show();
        }

        if (!prevId) {
            $btnPrev.hide();
        } else {
            $btnPrev.show();
        }

        $btnNext.attr('data-id', nextId);
        $btnPrev.attr('data-id', prevId);

        var id = $trigger.attr('data-id');
        $docMenu.attr('data-selected', id);

        loadTopic(id);
        expand({ target: $trigger.prev('span.glyphicon') });
    }

    function pageing(ev) {
        var id = $(ev.target).attr('data-id');
        if (!id) {
            return;
        }

        selectTopic({ target: $docMenu.find('a[data-id="' + id + '"]') });
    }

    function loadVersion(ev) {
        var id = $docMenu.attr('data-selected');
        loadTopic(id);
    }
} /* globals Prism, prettify */

/***/ }),

/***/ "./scripts/forum-widget.js":
/*!*********************************!*\
  !*** ./scripts/forum-widget.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forumWidget = forumWidget;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var _utils = __webpack_require__(/*! ./common/utils.js */ "./scripts/common/utils.js");

var _notifier = __webpack_require__(/*! ./common/notifier.js */ "./scripts/common/notifier.js");

var _grid = __webpack_require__(/*! ./modules/grid.js */ "./scripts/modules/grid.js");

var _comments = __webpack_require__(/*! ./comments.js */ "./scripts/comments.js");

var _hashRouter = __webpack_require__(/*! ./modules/hash-router.js */ "./scripts/modules/hash-router.js");

var _handlebars = __webpack_require__(/*! ./common/handlebars.js */ "./scripts/common/handlebars.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function forumWidget() {
    var $wrapper = $('.forum-widget-wrapper');
    if (!$wrapper.length) {
        return;
    }

    var $nav = $('.forum-router');
    var $container = $('.forum-container');
    var $errors = $('.forum-errors');
    var userInfo = {};

    var grid = void 0;
    var templatesCache = {};
    var templates = [{ name: 'forum-content', url: '/templates/forum-content.html' }, { name: 'forum-post', url: '/templates/forum-post.html' }];

    loadDependencies().then(function (res) {
        return (0, _handlebars.loadHandlebarsTemplates)(templatesCache, templates);
    }).then(function (res) {
        return _data.Data.getJson({ url: '/forum/categories/getuser' }).then(function (res) {
            return userInfo = res.success ? res.userInfo : {};
        });
    }).then(function (res) {
        var params = _hashRouter.HashRouter.get('forum');
        handleAction(params);
        _hashRouter.HashRouter.onChange('forum', handleAction, 'forumRouteChange');
        $wrapper.on('click', '.forum-nav', forumRouting);
    });

    function forumRouting(ev) {
        var action = this.getAttribute('data-action');
        var type = this.getAttribute('data-type');
        var id = this.getAttribute('data-id');
        var parentId = this.getAttribute('data-parent');
        $errors.html('');

        if (action === 'delete') {
            deleteAction(type, id);
        } else if (action === 'save') {
            save(type, id, parentId);
        } else {
            _hashRouter.HashRouter.set('forum', type ? [type, action, id, parentId] : ['home']);
        }
    }

    function loadDependencies() {
        var promises = [];
        if (typeof tinymce === 'undefined') {
            promises.push(_utils.Utils.loadjscssfileAsync('/lib/custom/tinymce/tinymce.min.js', 'js'));
        }

        promises.push(_utils.Utils.loadjscssfileAsync('/css/grid.css', 'css'));
        promises.push(_utils.Utils.loadjscssfileAsync('/css/forum.css', 'css')); // TODO: check if loaded

        return Promise.all(promises);
    }

    function initializeGrid() {
        $container.html('');
        $('<div></div>', {
            class: 'grid'
        }).appendTo($container);

        return new _grid._Grid({
            wrapperId: '.grid',
            type: 'table',
            sourceConfig: { type: 'client', url: '' }
        });
    }

    function loadCategories() {
        var columns = [{
            name: 'title',
            extraFields: ['id'],
            title: 'Category',
            type: 'string',
            filter: true,
            sort: true,
            size: 2,
            headerTemplate: '<strong>#item#</strong>',
            contentTemplate: buildActionTemplate({ 'details': { name: '#item#', cssClass: 'grid-item-title' } }, 'category')
        }, {
            name: 'description',
            title: 'Description',
            type: 'string',
            filter: true,
            sort: true,
            size: 3,
            headerTemplate: '<strong>#item#</strong>'
        }, {
            name: 'themesCount',
            title: 'Themes Count',
            type: 'number',
            size: 1,
            headerTemplate: '<strong>#item#</strong>'
        }, {
            name: 'dateCreated',
            title: 'Date Created',
            type: 'date',
            size: 1,
            headerTemplate: '<strong>#item#</strong>'
        }, {
            name: 'dateModified',
            title: 'Date Modified',
            type: 'date',
            size: 1,
            headerTemplate: '<strong>#item#</strong>'
        }, {
            name: 'userId',
            extraFields: ['id'],
            type: 'compare',
            size: 2,
            headerTemplate: '<strong>#item#</strong>',
            trueTemplate: buildActionTemplate({ 'edit': { name: 'Edit' }, 'delete': { name: 'Delete' } }, 'category'),
            comparer: function comparer() {
                return userInfo.isAuthenticated && userInfo.isModerator;
            }
        }];

        var buttons = userInfo.isAuthenticated && userInfo.isModerator ? [{
            title: 'Create',
            iconOnly: true,
            type: 'add',
            class: 'forum-nav',
            attributes: { 'data-action': 'create', 'data-type': 'category' }
        }] : [];

        var sourceConfig = { type: 'client', url: '/forum/categories/grid' };
        updateGrid({ fields: columns, sourceConfig: sourceConfig, customActions: buttons });
    }

    function loadThemes(categoryId) {
        var columns = [{
            name: 'title',
            title: 'Themes',
            type: 'string',
            filter: true,
            sort: true,
            size: 2,
            extraFields: ['id'],
            headerTemplate: '<strong>#item#</strong>',
            contentTemplate: buildActionTemplate({ 'details': { name: '#item#', cssClass: 'grid-item-title' } }, 'theme')
        }, {
            name: 'creator',
            title: 'Creator',
            type: 'string',
            filter: true,
            sort: true,
            size: 2,
            headerTemplate: '<strong>#item#</strong>'
        }, {
            name: 'dateCreated',
            title: 'Date Created',
            type: 'date',
            size: 2,
            headerTemplate: '<strong>#item#</strong>'
        }, {
            name: 'dateModified',
            title: 'Date Modified',
            type: 'date',
            size: 2,
            headerTemplate: '<strong>#item#</strong>'
        }, {
            name: 'userId',
            extraFields: ['id'],
            type: 'compare',
            size: 2,
            headerTemplate: '<strong>#item#</strong>',
            trueTemplate: buildActionTemplate({ 'edit': { name: 'Edit' }, 'delete': { name: 'Delete' } }, 'theme'),
            falseTemplate: userInfo.isAuthenticated && userInfo.isModerator ? buildActionTemplate({ 'delete': { name: 'Delete' } }, 'theme') : '',
            comparer: function comparer(value) {
                return userInfo.isAuthenticated && userInfo.id === value;
            }
        }];

        var buttons = userInfo.isAuthenticated ? [{
            title: 'Create',
            iconOnly: true,
            type: 'add',
            class: 'forum-nav',
            attributes: { 'data-action': 'create', 'data-type': 'theme', 'data-parent': categoryId }
        }] : [];

        var sourceConfig = { type: 'client', url: '/forum/themes/grid?categoryId=' + categoryId };
        updateGrid({ fields: columns, sourceConfig: sourceConfig, customActions: buttons });
    }

    function loadPosts(themeId) {
        var _ref;

        var columns = [(_ref = {
            name: 'title',
            title: 'Title',
            type: 'string',
            filter: true,
            sort: true,
            size: 3,
            extraFields: ['id'],
            headerTemplate: '<b>#item#</b>'
        }, _defineProperty(_ref, 'headerTemplate', '<strong>#item#</strong>'), _defineProperty(_ref, 'contentTemplate', buildActionTemplate({ 'details': { name: '#item#', cssClass: 'grid-item-title' } }, 'post')), _ref), {
            name: 'content',
            title: 'Content',
            type: 'string',
            filter: true,
            sort: true,
            size: 2,
            headerTemplate: '<b>#item#</b>'
        }, {
            name: 'userId',
            extraFields: ['id'],
            type: 'compare',
            headerTemplate: '<b>#item#</b>',
            trueTemplate: buildActionTemplate({ 'edit': { name: 'Edit' }, 'delete': { name: 'Delete' } }, 'post'),
            falseTemplate: userInfo.isAuthenticated && userInfo.isModerator ? buildActionTemplate({ 'delete': { name: 'Delete' } }, 'post') : '',
            comparer: function comparer(value) {
                return userInfo.isAuthenticated && userInfo.id === value;
            }
        }];

        var buttons = userInfo.isAuthenticated ? [{
            title: 'Create',
            iconOnly: true,
            type: 'add',
            class: 'forum-nav',
            attributes: { 'data-action': 'create', 'data-type': 'post', 'data-parent': themeId }
        }] : [];

        var sourceConfig = { type: 'client', url: '/forum/posts/grid?themeId=' + themeId };
        updateGrid({ fields: columns, sourceConfig: sourceConfig, customActions: buttons });
    }

    function buildActionTemplate(actions, type) {
        var buttons = '';
        for (var key in actions) {
            var cssClass = actions[key].cssClass || 'btn';
            buttons += '<a class="forum-nav ' + cssClass + '" data-action="' + key + '" data-type="' + type + '" data-id="#item0#">' + actions[key].name + '</a>';
        }

        return buttons;
    }

    function handleAction(data) {
        var type = data && data.length > 0 ? data[0] : null;
        var action = data && data.length > 1 ? data[1] : null;
        var id = data && data.length > 2 ? data[2] : null;
        var parentId = data && data.length > 3 ? data[3] : null;

        if (!type || type === 'home') {
            loadCategories();
            ForumNavigation.buildNav();
            return;
        }

        if (action === 'create') {
            create(type, parentId);
        }

        if (action === 'details') {
            details(type, id);
        }

        if (action === 'edit') {
            edit(type, id, parentId);
        }

        ForumNavigation.buildNav({ id: id, action: action, type: type, parentId: parentId });
        // TODO: add unrecognized action handler
    }

    function create(type, parentId) {
        cleanUp();
        var html = templatesCache['forum-content']({ type: type, parentId: parentId });
        $container.html(html);
    }

    function edit(type, id, parentId) {
        cleanUp();
        var url = (type === 'category' ? '/forum/categories' : '/forum/' + type + 's') + ('/get' + type + '?id=' + id);
        _data.Data.getJson({ url: url }).then(function (res) {
            if (res.success) {
                var html = templatesCache['forum-content']({ type: type, id: id, parentId: parentId, title: res.item.title, description: res.item.description || res.item.content });
                $container.html(html);
            }
        });
    }

    function deleteAction(type, id) {
        var body = { ids: [id] };
        var url = (type === 'category' ? '/forum/categories' : '/forum/' + type + 's') + '/delete';
        _data.Data.postJson({ url: url, data: body }).then(function (res) {
            if (res.success) {
                grid = grid || initializeGrid();
                grid.load(true);
            } else {
                displayError(res.message);
            }
        });
    }

    function save(type, id, parentId) {
        var title = $container.find('.input-title').val() || '';
        var description = $container.find('.input-description').val() || '';
        var formData = new FormData();
        if (_utils.Utils.isFunction(formData.set)) {
            formData.set('title', title);
            formData.set('description', description);
            formData.set('content', description);
            formData.set('parentId', parentId);
            formData.set('id', id);
        } else {
            formData.append('title', title);
            formData.append('description', description);
            formData.append('content', description);
            formData.append('parentId', parentId);
            formData.append('id', id);
        }

        var url = (type === 'category' ? '/forum/categories' : '/forum/' + type + 's') + (id ? '/edit' : '/create?id=' + parentId);
        _data.Data.postForm({ url: url, formData: formData }).then(function (res) {
            if (res.success) {
                _hashRouter.HashRouter.set('forum', [type, 'details', res.id]);
            } else {
                displayError(res.message);
            }
        });
        // Know when fairy tales cease to be tales? When people start believing in them.
    }

    function details(type, id) {
        switch (type) {
            case 'category':
                loadThemes(id);
                break;
            case 'theme':
                loadPosts(id);

                break;
            case 'post':
                loadPost(id);
                break;

            default:
                loadCategories();
                break;
        }
    }

    function loadPost(id) {
        cleanUp();
        _data.Data.getJson({ url: '/forum/posts/getPost?id=' + id }).then(function (res) {
            if (res.success) {
                var html = templatesCache['forum-post']({ content: res.item.content, isAuthenticated: res.isAuthenticated });
                $container.html(html);
                var $commentsContainer = $container.find('.comments-container');
                return res.isAuthenticated ? _comments.Comments.init(id, $commentsContainer, 'forum-comment-area') : _comments.Comments.loadComments(id, $commentsContainer);
            }
        });
    }

    function cleanUp() {
        if (grid) {
            grid.dispose();
            grid = null;
        }

        $container.html('');
    }

    function updateGrid(config) {
        grid = grid || initializeGrid();
        grid.updateConfig(config).load(true);
    }

    function displayError(message) {
        _notifier.Notifier.createAlert({ containerId: $errors, message: message, status: 'danger' });
    }

    //----------------------------------------------------------------------------------------------
    // navigation logic
    var ForumNavigation = function () {
        var navigation = {
            'home': {},
            'category': null,
            'theme': null,
            'post': null
        };

        function buildNav(data) {
            $('.action-helper-nav').remove();
            if ($nav.children().length === 0) {
                $('<a></a>', {
                    class: 'forum-nav',
                    text: 'Home'
                }).appendTo($nav);
            }

            if (!data || data.type === 'category') {
                navigation['theme'] = null;
                $nav.find('.forum-nav[data-type="theme"]').remove();
            }

            if (!data || data.type === 'category' || data.type === 'theme') {
                navigation['post'] = null;
                $nav.find('.forum-nav[data-type="post"]').remove();
            }

            if (!data) {
                navigation['category'] = null;
                $nav.find('.forum-nav[data-type="category"]').remove();

                return;
            }

            if (data.action === 'create') {
                if (data.type === 'post') {
                    populateNav(data.parentId, data.action, 'theme', 'Post');
                }

                if (data.type === 'theme') {
                    populateNav(data.parentId, data.action, 'category', 'Theme');
                }

                if (data.type === 'category') {
                    createActionNavElement('Create', 'Category');
                }
            } else {
                populateNav(data.id, data.action, data.type);
            }
        }

        function populateNav(id, action, type, createType) {
            var url = (type === 'category' ? '/forum/categories' : '/forum/' + type + 's') + ('/get' + type + '?id=' + id);
            _data.Data.getJson({ url: url }).then(function (res) {
                if (res.success) {
                    if (type === 'post' || type === 'theme') {
                        navigation['category'] = { id: res.item.categoryId, title: res.item.categoryTitle, type: 'category', action: 'details' };
                        createNavElement(navigation['category']);
                    }

                    if (type === 'post') {
                        navigation['theme'] = { id: res.item.themeId, title: res.item.themeTitle, type: 'theme', action: 'details' };
                        createNavElement(navigation['theme']);
                    }

                    navigation[type] = { id: res.item.id, title: res.item.title, type: type, action: 'details' };
                    createNavElement(navigation[type]);
                    if (action === 'edit') {
                        createActionNavElement('Edit');
                    } else if (action === 'create') {
                        createActionNavElement('Create', createType);
                    }
                }
            });
        }

        function createNavElement(info) {
            var $link = $nav.find('.forum-nav[data-type="' + info.type + '"]');
            if ($link.length > 0) {
                $link.attr('data-id', info.id);
                $link.text(info.title || info.id);
            } else {
                $('<a></a>', {
                    text: info.title || info.id,
                    class: 'forum-nav-element forum-nav',
                    'data-id': info.id,
                    'data-action': 'details',
                    'data-type': info.type
                }).appendTo($nav);
            }
        }

        function createActionNavElement(action, type) {
            var text = type ? action + ' ' + type : action;
            $('<a></a>', {
                text: text,
                class: 'forum-nav-element action-helper-nav'
            }).appendTo($nav);
        }

        return { buildNav: buildNav };
    }();
}

/***/ }),

/***/ "./scripts/frontend-layout-scripts.js":
/*!********************************************!*\
  !*** ./scripts/frontend-layout-scripts.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var _documentationWidget = __webpack_require__(/*! ./documentation-widget.js */ "./scripts/documentation-widget.js");

var _carousel = __webpack_require__(/*! ./carousel.js */ "./scripts/carousel.js");

var _blogWidget = __webpack_require__(/*! ./blog-widget.js */ "./scripts/blog-widget.js");

var _contactForm = __webpack_require__(/*! ./sitetriks/contact-form.js */ "./scripts/sitetriks/contact-form.js");

var _forumWidget = __webpack_require__(/*! ./forum-widget.js */ "./scripts/forum-widget.js");

var _allNews = __webpack_require__(/*! ./all-news.js */ "./scripts/all-news.js");

var _licensesWidgets = __webpack_require__(/*! ./licenses-widgets.js */ "./scripts/licenses-widgets.js");

var _subscription = __webpack_require__(/*! ./subscription.js */ "./scripts/subscription.js");

function treeItemsSlide() {
    $('body').on('click', '.more-items', function (event, callback, target) {
        if (callback && {}.toString.call(callback) === '[object Function]' && target) {
            $('.hidden-section').slideToggle('slow', 'swing', function () {
                callback(target);
            });

            if ($(window).width() <= 767) {
                return;
            } else {
                $('.hidden-section-last-body').slideToggle('slow', 'swing', function () {
                    callback(target);
                });
            }
        } else {
            $('.hidden-section').slideToggle('slow');
            if ($(window).width() <= 767) {
                return;
            } else {
                $('.hidden-section-last-body').slideToggle('slow');
            }
        }
        $('.more-less-text').toggle();
        $('.more-items').toggleClass('more-clicked');
    });
} /* globals SkypeWebControl, Prism, prettify */


function readMore() {
    $('body').on('click', '.read-more', function () {
        var $target = $(this);

        var $textBlocks = $target.parents('.tree-row').find('.content');
        var $readMoreText = $target.parents('.tree-row').find('.read-more');

        $textBlocks.each(function () {
            $(this).toggleClass('short-text');
        });

        $readMoreText.each(function () {
            var $currentTarget = $(this);
            $currentTarget.children('.more').toggle();
            $currentTarget.children('.less').toggle();
        });
    });
}

// PrettyPrint call for Tinymc
function prettyPrintInit() {
    if ($('pre').length > 0) {
        Prism.highlightAll();
    }

    if ($('.prettyprint').length > 0) {
        prettify();
    }
}

// 1.1 Video custom playlist logic
function loadMultiplePlaylistsContent() {

    // Add search functionality to the widget
    function getChannelDatails(channelId) {
        return _data.Data.getJson({ url: 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8&part=contentDetails&id=' + channelId }).then(function (data) {
            var channelUpload = data.items[0].contentDetails.relatedPlaylists.uploads;
            return _data.Data.getJson({ url: 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=' + channelUpload + '&key=AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE&part=snippet&maxResults=50' });
        });
    }

    function searchVideo() {
        $('body').on('click', '.search-video', function () {
            $('.suggestions').css('display', 'block');

            var $container = $('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail');
            var fullData = void 0;
            var channelId = 'UCUsTZWP1OpyBXX2_CfMv1fA';
            var titles = [];

            fullData = getChannelDatails(channelId);
            fullData.then(function (result) {
                var myData = result;

                for (var i = 0; i < myData.items.length; i += 1) {
                    titles.push(myData.items[i].snippet.title);
                }

                function findMatches(wordToMatch, videos) {
                    return videos.filter(function (title) {
                        var regex = new RegExp(wordToMatch, 'gi');
                        return title.match(regex);
                    });
                }

                function displayMatches() {
                    var matchArrays = findMatches(this.value, titles);

                    var html = matchArrays.map(function (title) {
                        var itemPosition = titles.indexOf(title);
                        var videoId = myData.items[itemPosition].snippet.resourceId.videoId;
                        return '                <li class="name" data-id ="' + videoId + '">' + title + '</li>\n                ';
                    }).join('');
                    suggestions.innerHTML = html;
                }

                var searchInput = document.querySelector('.search-video');
                var suggestions = document.querySelector('.suggestions');

                searchInput.addEventListener('keyup', displayMatches);
            });
        });
    }

    function selectVideo() {
        var selected = $(this).text();

        var videoId = $(this).attr('data-id');

        $('.search-video').val(selected);

        $('.video-container iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);

        // Clean the input
        $('.search-video').val('');
        $('.suggestions').css('display', 'none');
    }

    function hideSuggestionsOnOutsideClick() {
        $('body').on('click', function (ev) {
            var $target = $(ev.target);
            if ($target.hasClass('search-video') || $target.hasClass('suggestions')) {
                return;
            }
            $('.suggestions').css('display', 'none');
        });
    }

    searchVideo();
    hideSuggestionsOnOutsideClick();
    $('body').on('click', '.name', selectVideo);
}

// custom video playlist
function loadVideoById() {
    $('body').on('click', '.video-thumbnail', function () {
        var iframeCurrentSource = $('.video-container iframe').attr('src');
        var thunmbnailSource = $(this).attr('data-videoId');

        if (!(iframeCurrentSource === thunmbnailSource)) {
            $('.video-container iframe').attr('src', thunmbnailSource);
        }
    });
}

// multiple playlists
function loadVideoSource() {
    $('body').on('click', '.playlist-thumbnail', function () {
        var iframeCurrentSource = $('.video-container iframe').attr('src');
        var thunmbnailSource = $(this).attr('data-videosource');

        if (!(iframeCurrentSource === thunmbnailSource)) {
            $('.video-container iframe').attr('src', thunmbnailSource);
        }
    });
}

// Video Multiple playlists logic
$(document).ready(function () {
    if ($('st-body-content').find('.multiple-playlists')) {
        // get all thumbnails ids
        var $container = $('.multiple-playlists .playlist-thumbnails-list .playlist-thumbnail');
        var source = void 0;

        $container.each(function (_, element) {
            source = $(this).data('videoid');
            var url = getYoutubeData(source).then(function (res) {

                var finalUrl = res.items[0].snippet.thumbnails.high.url;
                var title = res.items[0].snippet.title;

                $(element).children('img').attr('src', finalUrl);
                $(element).children('.playlist-title').text(title);
            });
            //,Data.defaultError);
        });
    }

    /*******************Get Youtube Playlist Thumbnails ***********************/

    function getYoutubeData(playlistId) {
        return _data.Data.getJson({ url: 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=' + playlistId + '&key=AIzaSyCWH87Tm8-WcMBNXi7N1QoK-AYZR3mhmR8' });
    }
});

function initSkype() {
    // skype on demand instead of on load
    var isSkypeLoaded = false;
    var isAttemptingCall = false;

    $('body').on('click', '.skype-call', loadSkype);
    function loadSkype(ev) {
        if (typeof SkypeWebControl === 'undefined' && !isSkypeLoaded) {
            var fileref = document.createElement('script');
            fileref.setAttribute('type', 'text/javascript');
            fileref.setAttribute('src', 'https://swc.cdn.skype.com/sdk/v1/sdk.min.js');
            document.getElementsByTagName('body')[0].appendChild(fileref);

            isSkypeLoaded = true;
        }

        if (!isAttemptingCall) {
            isAttemptingCall = true;
            attemptCall();
        }
    }

    function attemptCall() {
        if (typeof SkypeWebControl === 'undefined') {
            setTimeout(attemptCall, 1000);
            return;
        } else {
            isAttemptingCall = false;
            SkypeWebControl.SDK.Chat.startChat({ ConversationType: 'person', ConversationId: 'live:info_882922' });
        }
    }
}

// Init functions
$(document).ready(function () {
    treeItemsSlide();
    readMore();
    initSkype();
    //MetaTags.populateKeyWords('input[name=SEOKeyword]');
    //MetaTags.populateDescriptions('input[name=SEODescription]');
    loadMultiplePlaylistsContent();
    loadVideoById();
    loadVideoSource();

    // load widgets logic
    (0, _carousel.initCarousel)();
    (0, _documentationWidget.documentationModule)();
    (0, _blogWidget.blogWidget)();
    (0, _forumWidget.forumWidget)();
    (0, _allNews.allNewsWidget)();
    (0, _licensesWidgets.licenseWidget)();
    (0, _subscription.subscriptionWidget)();
    (0, _contactForm.contactFormWidget)();

    $(document).trigger('initCarousel');
});
$(window).load(prettyPrintInit());
window.Data = _data.Data;

/***/ }),

/***/ "./scripts/licenses-widgets.js":
/*!*************************************!*\
  !*** ./scripts/licenses-widgets.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.licenseWidget = licenseWidget;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

function licenseWidget() {
    if ($('.generate-license-form').length < 1) {
        return;
    }

    $('.generate-license-form').on('submit', function (ev) {
        ev.preventDefault();

        var formData = new FormData(this);
        var $notifier = $(ev.target).find('.notifier');
        $notifier.text('');

        _data.Data.postForm({ url: '/widget/licensegeneration/index', formData: formData }).then(function (res) {
            console.log(res);

            if (res) {
                download('license.lic', res);
            }
        }, function (res) {
            $notifier.text(res.responseJSON.message);
        });

        return false;
    });

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
}

/***/ }),

/***/ "./scripts/modules/data-source.js":
/*!****************************************!*\
  !*** ./scripts/modules/data-source.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataSource = DataSource;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

'use strict';

function DataSource(dataSource) {
    var type = dataSource.type;
    var sourceUrl = dataSource.url;
    var defaultFilters = dataSource.defaultFilters || [];
    var cachedData = [];

    var clientFilters = {
        1: function _(item, property, value) {
            // number equal
            return item[property] === value;
        },
        2: function _(item, property, value) {
            // number lower than 
            return +item[property] < +value;
        },
        4: function _(item, property, value) {
            // number greater than
            return +item[property] > +value;
        },
        7: function _(item, property, value) {
            //string contains pattern
            return item[property] && item[property].toLowerCase().includes(value.toLowerCase());
        }
    };

    function getData(_ref) {
        var filters = _ref.filters,
            paging = _ref.paging,
            sorting = _ref.sorting,
            isForced = _ref.isForced;

        var request = void 0;
        if (type === 'server') {
            // pass the filters to server and return data;
            request = loadData({ filters: filters, paging: paging, sorting: sorting });
        } else {
            if (isForced) {
                // pass the filters to server;
                request = loadData({}).then(function (res) {
                    cachedData = res.items;
                    return res;
                });
                // update cached data;
            } else {
                // get cached data;
                request = new Promise(function (resolve, reject) {
                    resolve({ success: true, items: JSON.parse(JSON.stringify(cachedData)) });
                });
            }

            // then apply client side filters

            request = request.then(function (res) {
                var result = filter(res.items, filters);
                result = sort(result, sorting);
                var count = result.length;
                var nextPageExists = false;
                if (paging.size !== 'all' && res.items.length > paging.size && paging.page * paging.size < count) {
                    nextPageExists = true;
                }

                result = page(result, paging);

                return { success: res.success, count: count, items: result, nextPageExists: nextPageExists };
            });
        }

        // return promise with the data
        return request;
    }

    function loadData(_ref2) {
        var filters = _ref2.filters,
            paging = _ref2.paging,
            sorting = _ref2.sorting;

        _loader.Loader.show('#fff');
        var body = { filters: [] };
        if (type === 'server') {
            body.filters = filters || [];
            if (paging.size !== 'all') {
                body.skip = (paging.page - 1) * paging.size;
                body.take = paging.size;
            }

            if (defaultFilters && defaultFilters.length > 0) {
                body.filters = body.filters.concat(defaultFilters);
            }

            if (sorting && sorting.by) {
                body.sortBy = {
                    column: sorting.by,
                    order: sorting.order
                };
            }
        }

        return _data.Data.postJson({ url: sourceUrl, data: body }).then(function (res) {
            _loader.Loader.hide();
            return res;
        });
    }

    // client side method
    function filter(items, filters) {
        filters = (filters || []).concat(defaultFilters);
        var result = items;

        var _loop = function _loop(i) {
            if (typeof filters[i].value === 'undefined' || filters[i].value === null || !clientFilters[filters[i].comparison]) {
                return 'continue';
            }

            result = result.filter(function (item) {
                return clientFilters[filters[i].comparison](item, filters[i].propertyName, filters[i].value);
            });
        };

        for (var i = 0; i < filters.length; i += 1) {
            var _ret = _loop(i);

            if (_ret === 'continue') continue;
        }

        return result;
    }

    function sort(items, sorting) {
        if (!sorting || !sorting.by) {
            return items;
        }

        var direction = 1;
        if (+sorting.order === 1) {
            direction = -1;
        }

        return items.sort(function (a, b) {
            var left = a[sorting.by] || '';
            var right = b[sorting.by] || '';

            return (left > right ? 1 : left < right ? -1 : 0) * direction;
        });
    }

    function page(items, paging) {
        if (paging.size === 'all') {
            return items;
        }

        var start = (paging.page - 1) * paging.size;
        var end = start + +paging.size;
        if (end > items.length) {
            end = items.length;
        }

        return items.slice(start, end);
    }

    function updateDefaultFilters(filters, clear) {
        if (filters) {
            if (clear) {
                defaultFilters = filters;
            } else {
                defaultFilters = defaultFilters.concat(filters);
            }
        } else {
            defaultFilters = [];
        }
    }

    function updateConfig(dataSource) {
        if (dataSource) {
            type = dataSource.type || type;
            sourceUrl = dataSource.url || sourceUrl;
            defaultFilters = dataSource.defaultFilters || defaultFilters || [];
        }
    }

    return {
        getData: getData,
        updateDefaultFilters: updateDefaultFilters,
        updateConfig: updateConfig
    };
}

exports.default = { DataSource: DataSource };

/***/ }),

/***/ "./scripts/modules/grid.js":
/*!*********************************!*\
  !*** ./scripts/modules/grid.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._Grid = undefined;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _pager = __webpack_require__(/*! ./pager.js */ "./scripts/modules/pager.js");

var _dataSource = __webpack_require__(/*! ./data-source.js */ "./scripts/modules/data-source.js");

var _handlebars = __webpack_require__(/*! ../common/handlebars.js */ "./scripts/common/handlebars.js");

'use strict';

function _Grid(_ref) {
    var wrapperId = _ref.wrapperId,
        type = _ref.type,
        sourceConfig = _ref.sourceConfig,
        pagerConfig = _ref.pagerConfig,
        customActions = _ref.customActions,
        fields = _ref.fields,
        nestingProperty = _ref.nestingProperty,
        cellWidth = _ref.cellWidth,
        handlebarsTemplate = _ref.handlebarsTemplate,
        selectAllButton = _ref.selectAllButton;

    var $wrapper = $(wrapperId);
    var config = {
        wrapperId: wrapperId,
        cellWidth: cellWidth,
        type: type,
        customActions: customActions || [],
        fields: fields || []
    };

    if (config.type === 'grid') {
        $wrapper.addClass('grid-view');
        config.isGrid = true;
    }

    if (handlebarsTemplate) {
        config.usingHandlebars = true;
        config.template = _handlebars.Handlebars.compile(handlebarsTemplate);
    }

    var $headerRow = $('<div></div>', { class: 'container-fluid grid-header' });
    var $bodyRow = $('<div></div>', { class: 'container-fluid grid-body' });
    var $pagerRow = $('<div></div>', { class: 'container-fluid grid-pager' });
    render();
    bindEvents();

    var dataSource = new _dataSource.DataSource(sourceConfig);
    pagerConfig = pagerConfig || { pageSizes: [1, 2, 5, 10, 20, 50, 100, 'all'], pageReadOnly: true, default: 20 };
    var pager = new _pager.Pager($pagerRow, pagerConfig, onPageChange);
    var paging = { page: 1, size: pagerConfig.default || 10, default: pagerConfig.default };
    var sorting = {};
    var filters = [];
    var dateFormatOptions = {
        month: 'numeric',
        year: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    function render() {
        $headerRow.append(createButtons()).append(createHeader());
        $wrapper.append($headerRow).append($bodyRow).append($pagerRow);
        $wrapper.addClass('sitetriks-grid');
    }

    // data loading
    function loadData(isForced) {
        $bodyRow.html('');
        return dataSource.getData({
            paging: paging,
            filters: filters,
            sorting: sorting,
            isForced: isForced
        }).then(function (res) {
            if (paging.size !== 'all') {
                pager.setPagesCount(Math.ceil(res.count / paging.size));
            }

            $bodyRow.html(buildBody(res.items));
            pager.unlock();
            return res;
        });
    }

    // event handlers
    function onPageChange(page, size) {
        paging.page = page;
        paging.size = size;

        loadData();
    }

    function onSortHandler(ev) {
        var $target = $(this);
        sorting.by = $target.attr('data-property');
        sorting.order = $target.attr('data-sort') === 'asc' ? 1 : 0;
        paging.page = 1;
        pager.setCurrentPage(1);

        $headerRow.find('button[data-sort="desc"]').attr('data-sort', 'asc');
        $headerRow.find('span.glyphicon-sort-by-attributes-alt').removeClass('glyphicon-sort-by-attributes-alt').addClass('glyphicon-sort-by-attributes');

        if (sorting.order === 1) {
            $target.attr('data-sort', 'desc');
            $target.children('span.glyphicon-sort-by-attributes').removeClass('glyphicon-sort-by-attributes').addClass('glyphicon-sort-by-attributes-alt');
        }

        loadData();
    }

    function showChildren(ev) {
        var $target = $(this);
        var $icon = $target.children('.glyphicon');
        if ($icon.hasClass('glyphicon-plus')) {
            $icon.removeClass('glyphicon-plus').addClass('glyphicon-minus');
            $target.parents('.grid-item').first().children('.nested-grid-items').show();
        } else {
            $icon.removeClass('glyphicon-minus').addClass('glyphicon-plus');
            $target.parents('.grid-item').first().children('.nested-grid-items').hide();
        }
    }

    function searchOnEnter(ev) {
        if (ev.keyCode !== 13) {
            return;
        }

        this.blur();
        onSearch();
    }

    function onSearch(ev) {
        filters.length = 0;
        paging.page = 1;
        pager.setCurrentPage(1);

        $headerRow.find('.search-field').each(function (_, element) {
            var value = element.value;
            if (value && value.length > 0) {
                var property = element.getAttribute('data-property');
                var _type = element.getAttribute('data-type');
                var comparison = void 0;
                switch (_type) {
                    case 'string':
                        comparison = 7;
                        break;
                    case 'number':
                        comparison = 1;
                        break;
                    default:
                }

                filters.push({
                    propertyName: property,
                    comparison: comparison,
                    value: value
                });
            }
        });

        loadData();
    }

    function onCustomAction(ev) {
        var key = this.getAttribute('data-action');
        var action = config.customActions[key];
        if (!action) {
            return;
        }

        var collection = {};
        if (action.extraFields) {
            for (var i = 0; i < action.extraFields.length; i++) {
                collection[action.extraFields[i] + 's'] = [];
            }
        }

        var collectionName = action.collectionName || 'ids';
        collection[collectionName] = [];
        $bodyRow.find('input.st-grid-checkbox[type=checkbox]:checked').each(function (_, el) {
            collection[collectionName].push(el.getAttribute('data-id'));
            if (action.extraFields) {
                for (var _i = 0; _i < action.extraFields.length; _i += 1) {
                    collection[action.extraFields[_i] + 's'].push(el.getAttribute('data-' + action.extraFields[_i].toLowerCase()));
                }
            }
        });

        if (!collection[collectionName].length || !action.postUrl) {
            if (action.callback && {}.toString.call(action.callback) === '[object Function]') {
                action.callback();
            }

            return;
        }

        //Loader.show(true);
        _data.Data.postJson({ url: action.postUrl, data: collection }).then(function (res) {
            return loadData(true);
        }).then(function (res) {
            //Loader.hide();

            if (action.callback && {}.toString.call(action.callback) === '[object Function]') {
                action.callback(res);
            }
        });
    }

    // ui building
    function createHeader() {
        var $filterHeader = $('<div></div>', {
            class: 'row first-header-row'
        });

        var $titleHeader = $('<div></div>', {
            class: 'row title-header'
        });

        for (var i = 0; i < config.fields.length; i += 1) {
            var $cell = $('<div></div>', {
                class: config.isGrid ? 'grid-filter' : 'col-xs-' + config.fields[i].size || 2
            });

            if (config.fields[i].sort) {
                var $ascendingIcon = $('<span></span>', {
                    class: 'glyphicon glyphicon-sort-by-attributes'
                });

                var $filterButton = $('<button></button>', {
                    class: 'btn-sort btn no-sort',
                    'data-property': config.fields[i].name,
                    'data-sort': 'asc'
                }).on('click', onSortHandler);

                $filterButton.append($ascendingIcon).appendTo($cell);
            }

            if (config.fields[i].filter) {
                $('<input/>', {
                    type: 'text',
                    placeholder: 'Search by ' + config.fields[i].title || config.fields[i].type,
                    'data-property': config.fields[i].name,
                    'data-type': config.fields[i].type,
                    class: 'search-field'
                }).appendTo($cell);
            }

            if (!config.isGrid || $cell.children().length) {
                $cell.appendTo($filterHeader);
            }

            if (!config.isGrid) {
                var content = config.fields[i].type === 'checkbox' ? '<input type="checkbox" class="st-select-all-checkbox" />' : config.fields[i].headerTemplate ? replaceAll(config.fields[i].headerTemplate, '#item#', config.fields[i].title || '') : config.fields[i].title || '';

                $('<div></div>', {
                    class: config.isGrid ? 'grid-filter' : 'col-xs-' + config.fields[i].size || 2,
                    html: content
                }).appendTo($titleHeader);
            }
        }

        //attaching search button
        var $lastSearchCell = $filterHeader.find('.search-field').last().parent();
        if ($lastSearchCell.length) {
            $('<div></div>', {
                class: 'search-icon-wrapper'
            }).append($('<img/>', {
                src: '/images/search-icon.svg'
            })).on('click', onSearch).appendTo($lastSearchCell);
            $lastSearchCell.addClass('searh-background last').prevAll().addClass('searh-background');
        }

        if (selectAllButton && config.isGrid) {
            $('<div></div>', {
                class: 'grid-filter searh-background'
            }).css('width', 'auto').append($('<a></a>', {
                class: 'btn',
                text: 'Select All'
            }).on('click', selectAllRows)).prependTo($filterHeader);
        }

        return [$filterHeader, $titleHeader];
    }

    function selectAllRows(ev) {
        var $target = $(this);
        var value = $target.is('input[type="checkbox"]') ? $target[0].checked : true;
        $bodyRow.find('.st-grid-checkbox').each(function (_, element) {
            element.checked = value;
        });
    }

    function createButtons() {
        var $buttonsRow = $('<div></div>', { class: 'row buttons-header' });
        for (var key in config.customActions) {
            if (!config.customActions.hasOwnProperty(key)) continue;

            var $btn = $('<a></a>', {
                class: 'btn btn-grid'
            });

            if (config.customActions[key].iconOnly) {
                $btn.addClass('icon-only');
            } else {
                $btn.text(config.customActions[key].title || key);
            }

            if (config.customActions[key].redirectUrl) {
                $btn.attr('href', config.customActions[key].redirectUrl);
            } else {
                $btn.attr('data-action', key).on('click', onCustomAction);
            }

            if (config.customActions[key].attributes) {
                for (var attribute in config.customActions[key].attributes) {
                    $btn.attr(attribute, config.customActions[key].attributes[attribute]);
                }
            }

            if (config.customActions[key].class) {
                $btn.addClass(config.customActions[key].class);
            }

            switch (config.customActions[key].type) {
                case 'success':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-ok'
                    }).css('color', 'lime').prependTo($btn);
                    break;
                case 'warning':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-ok'
                    }).css('color', 'red').prependTo($btn);
                    break;
                case 'danger':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-remove'
                    }).css('color', 'red').prependTo($btn);
                    break;
                case 'add':
                    $('<span></span>', {
                        class: 'glyphicon glyphicon-plus'
                    }).prependTo($btn);
                    $btn.removeClass('btn-grid').removeClass('btn').addClass('btn-grid-add');

                default:
                    break;
            }

            $btn.appendTo($buttonsRow);
        }

        return $buttonsRow;
    }

    function buildBody(items) {
        var rows = [];
        for (var i = 0; i < items.length; i += 1) {
            var $row = void 0;
            if (config.isGrid) {
                if (config.usingHandlebars) {
                    $row = $('<div></div>', {
                        class: 'grid-item grid-cell',
                        html: config.template(items[i])
                    });
                } else {
                    $row = createItemRow(items[i]);
                }

                if (config.cellWidth) {
                    $row.css('width', config.cellWidth);
                }
            } else {
                $row = createItemRow(items[i]);

                if (nestingProperty && items[i][nestingProperty] && items[i][nestingProperty].length) {
                    $('<div></div>', {
                        class: 'col-xs-12 nested-grid-items'
                    }).hide().append(buildBody(items[i][nestingProperty])).appendTo($row);
                }
            }

            rows.push($row);
        }

        return rows;
    }

    function createItemRow(item) {
        var $bodyRow = $('<div></div>', {
            class: 'grid-item ' + (config.isGrid ? 'grid-cell' : 'row')
        });

        for (var i = 0; i < config.fields.length; i += 1) {
            var columnConfig = config.fields[i];

            var content = void 0;
            var value = item[columnConfig.name];
            if (value === undefined || value === null) {
                var strEnd = columnConfig.name.slice(1);

                value = item[columnConfig.name.charAt(0).toUpperCase() + strEnd];
                if (value === undefined || value === null) {
                    value = item[columnConfig.name.charAt(0).toLowerCase() + strEnd];
                }
            }

            value = value || value === 0 ? value : '';
            switch (columnConfig.type) {
                case 'checkbox':
                    content = '<input type="checkbox" class="st-grid-checkbox" data-id="' + value + '"';
                    if (columnConfig.extraFields) {
                        for (var j = 0; j < columnConfig.extraFields.length; j += 1) {
                            content += ' data-' + columnConfig.extraFields[j] + '="' + item[columnConfig.extraFields[j]] + '"';
                        }
                    }

                    content += '/>';

                    break;

                case 'date':
                    if (!value) break;
                    var str = value;

                    if (str[0] === 'D') {
                        // Handle asp.net framework 4.5.2 weird data format
                        str = parseInt(str.substr(6, str.length - 2 - 6));
                    }

                    // parse date to formated string
                    content = new Date(str).toLocaleString('en', dateFormatOptions);
                    break;

                case 'image':
                    var src = columnConfig.source ? columnConfig.source.replace('#item#', value) : value;
                    if (columnConfig.contentTemplate) {
                        // build image from template using the source
                        content = src;
                    } else {
                        // default template
                        content = '<img src="' + src + '" class="display-image" />';
                    }

                    break;

                case 'bool':
                    if (value) {
                        content = columnConfig.trueTemplate;
                    } else {
                        content = columnConfig.falseTemplate;
                    }

                    break;

                case 'compare':
                    if (columnConfig.comparer && {}.toString.call(columnConfig.comparer) === '[object Function]' && columnConfig.comparer(value)) {
                        content = columnConfig.trueTemplate || '';
                    } else {
                        content = columnConfig.falseTemplate || '';
                    }

                    break;

                case 'list':
                    var list = value;
                    if (list instanceof Array) {
                        content = list.join('; ');
                    } else {
                        content = list || '';
                    }

                    break;

                default:
                    content = value;
                    break;
            }

            if (columnConfig.contentTemplate) {
                content = replaceAll(columnConfig.contentTemplate, '#item#', content);
            }

            if (content && columnConfig.extraFields && columnConfig.extraFields.length > 0) {
                for (var _i2 = 0; _i2 < columnConfig.extraFields.length; _i2++) {
                    content = replaceAll(content, '#item' + _i2 + '#', item[columnConfig.extraFields[_i2]]);
                }
            }

            if (i === 0 && item[nestingProperty] && item[nestingProperty].length > 0) {
                content = '<button class="btn-xs btn-default child-expand"><i class="glyphicon glyphicon-plus" aria-hidden="true"></i></button>' + content;
            }

            $('<div></div>', {
                class: config.isGrid ? '' : 'col-xs-' + (columnConfig.size || 2),
                html: content
            }).appendTo($bodyRow);
        }

        return $bodyRow;
    }

    function updateConfig(_ref2) {
        var fields = _ref2.fields,
            customActions = _ref2.customActions,
            sourceConfig = _ref2.sourceConfig,
            pagerConfig = _ref2.pagerConfig;

        if (sourceConfig) {
            dataSource.updateConfig(sourceConfig);
        }

        if (pagerConfig) {
            pager.updateConfig(pagerConfig);
        }

        var rebuildHeader = false;
        if (customActions) {
            config.customActions = customActions;
            rebuildHeader = true;
        }

        if (fields) {
            config.fields = fields;
            rebuildHeader = true;
        }

        if (rebuildHeader) {
            $headerRow.html('').append(createButtons()).append(createHeader());
            paging.page = 1;
            paging.size = pager.default || 10;
            pager.setPageSize(paging.size);
            pager.setCurrentPage(paging.page);
        }

        return this;
    }

    function bindEvents() {
        $headerRow.on('keypress', '.search-field', searchOnEnter);
        $headerRow.on('click', '.st-select-all-checkbox', selectAllRows);
        $bodyRow.on('click', '.child-expand', showChildren);
    }

    function dispose() {
        $headerRow.off('keypress', '.search-field', searchOnEnter);
        $bodyRow.off('click', '.child-expand', showChildren);
        $headerRow.off('click', '.st-select-all-checkbox', selectAllRows);

        //dataSource.dispose();
        pager.dispose();
    }

    return {
        load: function load(isForced) {
            loadData(isForced);return this;
        },
        updateDefaultFilters: function updateDefaultFilters(filters, clear) {
            dataSource.updateDefaultFilters(filters, clear);return this;
        },
        updateConfig: updateConfig,
        dispose: dispose
    };
}

//=======================================================================================
// TODO: move
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

window._Grid = _Grid;
exports._Grid = _Grid;

/***/ }),

/***/ "./scripts/modules/hash-router.js":
/*!****************************************!*\
  !*** ./scripts/modules/hash-router.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HashRouter = undefined;

var _utils = __webpack_require__(/*! ../common/utils.js */ "./scripts/common/utils.js");

/**
 * Module for handling multiple hash urls in one page
 */
var HashRouter = function () {
    var data = {};
    var handlers = {};

    init();
    window.addEventListener('hashchange', init, false);

    /**
     * Handles onhashchange event
     */
    function init() {
        var hash = window.location.hash;
        if (hash && hash[0] === '#') {
            hash = hash.substr(1);
        }

        var newData = hash.split('&').reduce(function (map, x) {
            var values = x.split('/');
            if (values[0] && values.length > 1) {
                map[values.splice(0, 1)[0]] = values;
            }

            return map;
        }, {});

        var _loop = function _loop(key) {
            if (!data[key] || !newData[key].every(function (val, index) {
                return val === data[key][index];
            })) {
                data[key] = newData[key];
                dispatchChange(key);
            }
        };

        for (var key in newData) {
            _loop(key);
        }

        for (var key in data) {
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

        var changedValues = {};
        changedValues[type] = items || [];
        buildUrl(changedValues);
        return this;
    }

    /**
     * Replaces the hash url with the changed values
     * @param {{String: Array<String>}} changedValues values to replace {type: values}
     */
    function buildUrl(changedValues) {
        var urls = [];
        var newData = merge_options(data, changedValues || {});
        for (var key in newData) {
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
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (var attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
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

        for (var key in handlers[type]) {
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

        if (!_utils.Utils.isFunction(handler)) {
            console.error('Provided handler for type ' + type + ' with name ' + name + ' is not a function!');
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
        get: get,
        set: set,
        onChange: onChange,
        offChange: offChange
    };
}();

exports.HashRouter = HashRouter;

/***/ }),

/***/ "./scripts/modules/pager.js":
/*!**********************************!*\
  !*** ./scripts/modules/pager.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function Pager($container, pager, onPageChangeHandler) {
    var sizes = pager.pageSizes || [10];
    var pageSize = pager.default || sizes[0];
    var currentPage = 1;
    var pagesCount = 1;
    var isLocked = false;

    var $page = $('<span></span>', { text: currentPage, class: 'pageControl pageNumber' });
    var $pagesCount = $('<span></span>', { text: pagesCount, class: 'pageControl pagesCount' });
    var $pageSize = $('<select></select>', { class: 'pageControl pageSize' });
    var $prevPage = $('<span></span>', { class: 'pager-arrow previousPageArrow ' + (currentPage > 1 ? '' : 'btn-disabled') });
    var $nextPage = $('<span></span>', { class: 'pager-arrow nextPageArrow ' + (currentPage < pagesCount ? '' : 'btn-disabled') });

    sizes.forEach(function (element) {
        $('<option></option>', {
            text: element,
            value: element,
            selected: String(pageSize) === String(element)
        }).appendTo($pageSize);
    });

    $container.append($pageSize).append($prevPage).append($page).append($pagesCount).append($nextPage);

    bindEvents();

    function bindEvents() {
        $pageSize.on('change', onSizeChange);
        $prevPage.on('click', onPreviousPage);
        $nextPage.on('click', onNextPage);
    }

    function dispose() {
        $pageSize.off('change', onSizeChange);
        $prevPage.off('click', onPreviousPage);
        $nextPage.off('click', onNextPage);

        $container.children().remove();
    }

    // event handlers
    function onNextPage(ev) {
        if (!isLocked && currentPage < pagesCount) {
            setCurrentPage(currentPage + 1);
            lock();
            onPageChangeHandler(currentPage, pageSize);
        }
    }

    function onPreviousPage(ev) {
        if (!isLocked && currentPage > 1) {
            setCurrentPage(currentPage - 1);
            lock();
            onPageChangeHandler(currentPage, pageSize);
        }
    }

    function onSizeChange(ev) {
        if (!isLocked) {
            setCurrentPage(1);
            setPageSize($pageSize.val());
            lock();
            onPageChangeHandler(currentPage, pageSize);
        } else {
            setPageSize(pageSize);
        }
    }

    // methods
    function setPageSize(size) {
        if (size && size !== pageSize) {
            pageSize = size;
            $pageSize.val(size);
            if (size === 'all') {
                $prevPage.hide();
                $page.hide();
                $pagesCount.hide();
                $nextPage.hide();
            } else {
                $prevPage.show();
                $page.show();
                $pagesCount.show();
                $nextPage.show();
            }
        }

        return this;
    }

    function setCurrentPage(page) {
        if (page && page !== currentPage && pageSize !== 'all') {
            currentPage = page;
            $page.text(page);
            updateArrows();
        }

        return this;
    }

    function setPagesCount(pages) {
        if (pages && pageSize !== 'all') {
            pagesCount = pages;
            $pagesCount.text(pages);
            updateArrows();
        }

        return this;
    }

    function updateArrows() {
        if (currentPage > 1) {
            $prevPage.removeClass('btn-disabled');
        } else {
            $prevPage.addClass('btn-disabled');
        }

        if (currentPage < pagesCount) {
            $nextPage.removeClass('btn-disabled');
        } else {
            $nextPage.addClass('btn-disabled');
        }
    }

    function unlock() {
        isLocked = false;
        return this;
    }

    function lock() {
        isLocked = true;
        return this;
    }

    function updateConfig(pager) {
        sizes = pager.pageSizes || [10];
        pageSize = pager.default || sizes[0];
        this.setCurrentPage(1).setPagesCount(1).unlock();
    }

    return {
        setCurrentPage: setCurrentPage,
        setPagesCount: setPagesCount,
        setPageSize: setPageSize,
        lock: lock,
        unlock: unlock,
        updateConfig: updateConfig,
        dispose: dispose
    };
}

exports.Pager = Pager;

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

/***/ "./scripts/sitetriks/contact-form.js":
/*!*******************************************!*\
  !*** ./scripts/sitetriks/contact-form.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contactFormWidget = contactFormWidget;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _notifier = __webpack_require__(/*! ../common/notifier */ "./scripts/common/notifier.js");

var _validator = __webpack_require__(/*! ../common/validator */ "./scripts/common/validator.js");

function contactFormWidget() {

    var $container = $('#contactForm');
    var $validateFields = $container.find('.validate');
    var $inputFields = $('.form-control');
    var $popup = $('.popup-redirect');
    var homepage = 'https://sitetriks.com';
    var $cancelButton = $('#cancel');
    var $homepageRedirect = $('#homepageRedirect');

    $validateFields.on('input', _validator.Validator.createFieldValidationHandler());

    $('#contactForm').on('submit', function (evt) {
        evt.preventDefault();

        _data.Data.postForm({ url: this.action, formData: new FormData(this) }).then(function success(res) {
            if (res.success) {
                console.log('successful submit');
                $inputFields.val('');
                displayPopup();
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
            }
        });

        return false;
    });

    function displayPopup() {
        $popup.css('display', 'block');
        $container.css('opacity', '0.2');
    }

    function removePopup() {
        $popup.css('display', 'none');
        $container.css('opacity', '1');
    }

    $cancelButton.on('click', removePopup);
    $homepageRedirect.on('click', function () {
        $(location).attr('href', homepage);
    });
}

/***/ }),

/***/ "./scripts/subscription.js":
/*!*********************************!*\
  !*** ./scripts/subscription.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscriptionWidget = subscriptionWidget;

var _data = __webpack_require__(/*! ./common/data.js */ "./scripts/common/data.js");

var _validator = __webpack_require__(/*! ./common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ./common/notifier.js */ "./scripts/common/notifier.js");

function subscriptionWidget() {
    if ($('.subscription-form-wrapper').length < 1) {
        return;
    }

    function toggleForm() {
        $('.subscription-button').on('click', function () {
            $(this).next().toggle();
        });
    }

    $(window).ready(toggleForm());

    $('#subscription-submit').on('click', function (e) {
        var flag = true;
        var $name = $('#subscriptionForm input[name="name"]');
        var $email = $('#subscriptionForm input[name="email"]');
        var $featuresReleases = $('input[name="features-releases"]:checked');
        var $promotionalMaterials = $('input[name="promotional-materials"]:checked');

        if (!_validator.Validator.validate($email, 'Must enter valid email', function (val) {
            return _validator.Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!_validator.Validator.validate($name, 'Name must be at least 3 letters.', function (val) {
            return _validator.Validator.hasMinimumLength(val.trim(), 3) && _validator.Validator.isStartingWithLetter(val.trim());
        })) {
            flag = false;
        }

        if (!$featuresReleases.length > 0) {
            $('#features-releases-group .validation-output').text('Please check one of the options.');
            flag = false;
        } else {
            $('#features-releases-group .validation-output').text('');
        }

        if (!$promotionalMaterials.length > 0) {
            $('#promotional-materials-group .validation-output').text('Please check one of the options.');
            flag = false;
        } else {
            $('#promotional-materials-group .validation-output').text('');
        }

        if (flag) {

            var emailGroups = $featuresReleases.val().toString() + $promotionalMaterials.val().toString() + '0';
            console.log(emailGroups);

            var subscriberData = {
                Name: $name.val(),
                Email: $email.val(),
                MarketingEmailGroups: emailGroups
            };

            _data.Data.postJson({ url: '/sitetriks/marketingEmails/subscribe', data: subscriberData }).then(function (res) {
                _notifier.Notifier.createAlert({ containerId: '#subscription-form-container', message: res.message, status: res.success ? 'info' : 'warning', seconds: 5 });

                $name.val('');
                $email.val('');
                $promotionalMaterials.attr('checked', false);
                $featuresReleases.attr('checked', false);
                $('.subscription-button').click();
            }, _data.Data.defaultError);
        }
    });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvYWxsLW5ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ibG9nLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tbW9uL2xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9ub3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9kb2N1bWVudGF0aW9uLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2ZvcnVtLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2Zyb250ZW5kLWxheW91dC1zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbGljZW5zZXMtd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL21vZHVsZXMvZGF0YS1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL2hhc2gtcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvbW9kdWxlcy9wYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zaXRldHJpa3MvY29udGFjdC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdGV4dC1lZGl0b3IuanMiXSwibmFtZXMiOlsiYWxsTmV3c1dpZGdldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsIiR3aW5kb3ciLCIkIiwid2luZG93IiwiJGFjY29yZGlvbiIsIiRuZXN0ZWRBY2NvcmRpb24iLCIkZGV0YWlsZWROZXdzQ29udGFpbmVyIiwid2luZG93V2lkdGgiLCJ3aWR0aCIsImluaXQiLCJiaW5kRXZlbnRzIiwiSGFzaFJvdXRlciIsIm9uQ2hhbmdlIiwibG9hZERldGFpbGVkTmV3cyIsInNlbGVjdGVkTmV3cyIsImdldCIsImFjdGl2ZSIsImFjdGl2ZU5lc3RlZCIsIiRwYXJlbnQiLCJwYXJlbnQiLCJ5ZWFyIiwiYXR0ciIsIm1vbnRoIiwiYWN0aXZhdGVBY2NvcmRpb24iLCJhY2NvcmRpb24iLCJjb2xsYXBzaWJsZSIsImhlaWdodFN0eWxlIiwib25TZWxlY3ROZXdzIiwiZSIsInVybCIsImdldEF0dHJpYnV0ZSIsInNldCIsImRhdGEiLCJodG1sIiwiRGF0YSIsImdldEpzb24iLCJ0aGVuIiwicmVzIiwiYXR0cmlidXRlIiwic2VsZWN0b3IiLCJyZXN1bHQiLCJlYWNoIiwiaW5kZXgiLCJlbCIsImhhbmRsZVJlc2l6ZSIsImV2Iiwib24iLCJibG9nV2lkZ2V0IiwiJHdyYXBwZXIiLCIkY29udGFpbmVyIiwiZmluZCIsIiRwYWdlciIsInNvdXJjZSIsInBhZ2VyIiwiZGVmYXVsdFBhZ2VTaXplIiwicGFnaW5nIiwicGFnZSIsInNpemUiLCJ0ZW1wbGF0ZXNDYWNoZSIsInRlbXBsYXRlcyIsIm5hbWUiLCJsb2FkRGVwZW5kZW5jaWVzIiwidHlwZSIsInBhZ2VTaXplcyIsImRlZmF1bHQiLCJwYWdpbmdIYW5kbGVyIiwicGFyYW1zIiwiaGFuZGxlQWN0aW9uIiwicHJvbWlzZXMiLCJwdXNoIiwiVXRpbHMiLCJsb2FkanNjc3NmaWxlQXN5bmMiLCJ0aW55bWNlIiwiUHJvbWlzZSIsImFsbCIsImxvYWQiLCJMb2FkZXIiLCJzaG93IiwiZ2V0RGF0YSIsInN1Y2Nlc3MiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiZGF0ZUNyZWF0ZWQiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwiYXBwZW5kIiwic2V0Q3VycmVudFBhZ2UiLCJzZXRQYWdlU2l6ZSIsInNldFBhZ2VzQ291bnQiLCJNYXRoIiwiY2VpbCIsImNvdW50IiwidW5sb2NrIiwiaGlkZSIsImxvYWRQb3N0IiwiaWQiLCJsb2NrIiwib2JqIiwiaXNBdXRoZW50aWNhdGVkIiwiQ29tbWVudHMiLCJsb2FkQ29tbWVudHMiLCJyZWFkTW9yZSIsInJldHVyblRvR3JpZCIsInRleHRFZGl0b3IiLCJyZW1vdmUiLCJpc0d1aWQiLCJWYWxpZGF0b3IiLCJpc0ludGVnZXIiLCJpbml0Q2Fyb3VzZWwiLCIkY2Fyb3VzZWxzIiwic2xpY2siLCJfIiwiZWxlbWVudCIsIiRlbGVtZW50Iiwic2xpZGVzX2xnIiwic2xpZGVzX21kIiwic2xpZGVzX3NtIiwic2xpZGVzX3hzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwicGFyZW50SWQiLCJhcmVhSWQiLCIkY29tbWVudHNDb250YWluZXIiLCJ0ZXh0QXJlYUlkIiwiYWRkQ29tbWVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYm9keSIsInBvc3RKc29uIiwidmlldyIsImNsZWFyIiwiTm90aWZpZXIiLCJjcmVhdGVBbGVydCIsImNvbnRhaW5lcklkIiwibWVzc2FnZSIsInN0YXR1cyIsImVkaXRDb21tZW50IiwiY2xvc2VFZGl0IiwiJHRyaWdnZXIiLCIkY29udGVudCIsInBhcmVudHMiLCJuZXh0IiwiaW5pdFdpdGhvdXRJbWFnZXMiLCJ0YXJnZXQiLCJwcmV2Iiwic2F2ZUVkaXRlZENvbW1lbnQiLCJkZWxldGVDb21tZW50IiwibWFrZVJlcXVlc3QiLCJmZXRjaCIsImlzRnVuY3Rpb24iLCJtYWtlRmV0Y2hSZXF1ZXN0IiwibWFrZUFqYXhSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImlzRm9ybSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnJvciIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJhamF4IiwiY3JlZGVudGlhbHMiLCJpbmRleE9mIiwianNvbiIsInRleHQiLCJkaXNhYmxlQ2FjaGUiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdEZvcm0iLCJmb3JtRGF0YSIsImRlbGV0ZUpzb24iLCJkZWZhdWx0RXJyb3IiLCJpIiwiYXJndW1lbnRzIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJ0b1N0cmluZyIsImNhbGwiLCJsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyIsImhlbHBlcnMiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJfc3dpdGNoX3ZhbHVlXyIsIl9zd2l0Y2hfYnJlYWtfIiwiZm4iLCJhcmdzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsInBvcCIsImNhc2VWYWx1ZXMiLCJoYXNoIiwiYnJlYWsiLCIkZWwiLCJrZXkiLCJIYW5kbGViYXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJnaWZTcmMiLCJjb2xvciIsImltZ1NyYyIsIkJsdXIiLCJhZGQiLCJzcmMiLCJjbGFzcyIsIiR0YXJnZXQiLCJoaWRlT25DbGljayIsImFwcGVuZFRvIiwiUFJFVklFV19DT05UQUlORVJfQ0xBU1MiLCJQUkVWSUVXX0lURU1fQ09OVEFJTkVSX0NMQVNTIiwiQkxVUl9FTEVNRU5UX0NMQVNTIiwiYWRkQmx1ciIsIm9wYWNpdHkiLCJhZGRDbGFzcyIsIiRibHVyRWxlbWVudCIsIiRpdGVtQ29udGFpbmVyIiwiJHByZXZpZXdDb250YWluZXIiLCJyZW1vdmVCbHVyIiwiY3NzIiwiaXNOYU4iLCJyZW1vdmVDbGFzcyIsInRpdGxlIiwic2Vjb25kcyIsImlzUGVybWFuZW50IiwiJHRpdGxlIiwiJGNsb3NlQnV0dG9uIiwiJG1lc3NhZ2UiLCIkYWxlcnQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInM0IiwiZmxvb3IiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJndWlkIiwic3RyaW5nVG9UZXN0IiwicmVnZXhHdWlkIiwidGVzdCIsImxvYWRqc2Nzc2ZpbGUiLCJmaWxlbmFtZSIsImZpbGV0eXBlIiwiZmlsZXJlZiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwiaXNMb2FkaW5nIiwib25sb2FkIiwib25lcnJvciIsInJlbW92ZWpzY3NzZmlsZSIsInRhcmdldGVsZW1lbnQiLCJ0YXJnZXRhdHRyIiwiYWxsc3VzcGVjdHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlciIsInVyaSIsInJlIiwiUmVnRXhwIiwic2VwYXJhdG9yIiwibWF0Y2giLCJyZXBsYWNlIiwib3BlbkluTmV3VGFiIiwibmV3V2luZG93Iiwib3BlbiIsImNsb3NlZCIsIndyaXRlIiwiY2xvc2UiLCJmb2N1cyIsImVzY2FwZVJlZ0V4cCIsInN0ciIsInJlcGxhY2VBbGwiLCJnZXRBbGxTZWxlY3RvcnMiLCJyZXQiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJ4Iiwic2VsZWN0b3JUZXh0IiwiY3NzU2VsZWN0b3JFeGlzdHMiLCJzZWxlY3RvcnMiLCJwb3B1bGF0ZVVybCIsImlucHV0SWQiLCJ1cmxJZCIsImNhbGxiYWNrIiwiJHVybCIsInRpdGxlVmFsdWUiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsInVybFZhbHVlIiwiZXZ0IiwiaXMiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInZhbGlkYXRlRnVuYyIsImhhc01pbmltdW1MZW5ndGgiLCJtaW5MZW5naHQiLCJoYXNNYXhpbXVtTGVuZ3RoIiwibWF4TGVuZ2h0IiwiaXNBbHBoYU51bWVyaWMiLCJwYXR0ZXJuIiwiaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24iLCJpc1Bhc3NpbmciLCJpc1VybEZyaWVuZGx5IiwiaXNTdGFydGluZ1dpdGhMZXR0ZXIiLCJ2YWxpZGF0ZUVtYWlsIiwiaXNEZWNpbWFsTnVtYmVyIiwibWF0Y2hlc1BhdHRlcm4iLCJpc051bWJlciIsInBhcnNlSW50IiwiaXNOdW1iZXJJblJhbmdlIiwibWluIiwibWF4IiwiaXNMZW5naHRJblJhbmdlIiwiY3JlYXRlRmllbGRzVmFsaWRhdGlvbiIsImN1c3RvbVZhbGlkYXRpb25GdW5jIiwidmFsaWRhdGVGaWVsZHMiLCIkZWxlbWVudHNUb1ZhbGlkYXRlIiwiZmxhZyIsInZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJ2YWxpZGF0aW9uVHlwZXMiLCJzcGxpdCIsImlubmVyRmxhZyIsInZhbGlkYXRpb25NZXNzYWdlIiwicGFyc2VGbG9hdCIsImNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIiLCJjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlciIsImV4dHJhVmFsdWVzIiwidGltZXIiLCJ2YWxpZGF0ZVVybE9uQ2hhbmdlIiwiJGlucHV0IiwiY2xlYXJUaW1lb3V0IiwidmFsaWRhdGVVcmwiLCIkdXJsRmllbGQiLCIkYnRuU3VibWl0IiwidiIsInZhbGlkYXRlVW5pcXVlbmVzIiwiY2xhc3NUb1ZhbGlkYXRlIiwiY291bnRlciIsIiRhbGxOYW1lcyIsImRvY3VtZW50YXRpb25Nb2R1bGUiLCIkZG9jTWVudSIsIiRidG5OZXh0IiwiJGJ0blByZXYiLCIkdmVyc2lvbnMiLCIkdG9waWNEZXRhaWxzIiwiJGZpcnN0IiwiZmlyc3QiLCJzZWxlY3RUb3BpYyIsImV4cGFuZCIsImNvbGxhcHNlIiwicGFnZWluZyIsImxvYWRWZXJzaW9uIiwiZGlzcG9zZSIsIm9mZiIsImxvYWRUb3BpYyIsInZlcnNpb24iLCJQcmlzbSIsImhpZ2hsaWdodEFsbCIsInByZXR0aWZ5IiwiJGljb24iLCIkdG9IaWRlIiwiZGVzY2VuZGFudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVzY2VuZGFudCIsIiRpdGVtIiwibmV4dElkIiwicHJldklkIiwiZm9ydW1XaWRnZXQiLCIkbmF2IiwiJGVycm9ycyIsInVzZXJJbmZvIiwiZ3JpZCIsImZvcnVtUm91dGluZyIsImFjdGlvbiIsImRlbGV0ZUFjdGlvbiIsInNhdmUiLCJpbml0aWFsaXplR3JpZCIsIl9HcmlkIiwid3JhcHBlcklkIiwic291cmNlQ29uZmlnIiwibG9hZENhdGVnb3JpZXMiLCJjb2x1bW5zIiwiZXh0cmFGaWVsZHMiLCJmaWx0ZXIiLCJzb3J0IiwiaGVhZGVyVGVtcGxhdGUiLCJjb250ZW50VGVtcGxhdGUiLCJidWlsZEFjdGlvblRlbXBsYXRlIiwiY3NzQ2xhc3MiLCJ0cnVlVGVtcGxhdGUiLCJjb21wYXJlciIsImlzTW9kZXJhdG9yIiwiYnV0dG9ucyIsImljb25Pbmx5IiwiYXR0cmlidXRlcyIsInVwZGF0ZUdyaWQiLCJmaWVsZHMiLCJjdXN0b21BY3Rpb25zIiwibG9hZFRoZW1lcyIsImNhdGVnb3J5SWQiLCJmYWxzZVRlbXBsYXRlIiwibG9hZFBvc3RzIiwidGhlbWVJZCIsImFjdGlvbnMiLCJGb3J1bU5hdmlnYXRpb24iLCJidWlsZE5hdiIsImNyZWF0ZSIsImRldGFpbHMiLCJlZGl0IiwiY2xlYW5VcCIsImRlc2NyaXB0aW9uIiwiaWRzIiwiZGlzcGxheUVycm9yIiwiRm9ybURhdGEiLCJjb25maWciLCJ1cGRhdGVDb25maWciLCJuYXZpZ2F0aW9uIiwiY2hpbGRyZW4iLCJwb3B1bGF0ZU5hdiIsImNyZWF0ZUFjdGlvbk5hdkVsZW1lbnQiLCJjcmVhdGVUeXBlIiwiY2F0ZWdvcnlUaXRsZSIsImNyZWF0ZU5hdkVsZW1lbnQiLCJ0aGVtZVRpdGxlIiwiaW5mbyIsIiRsaW5rIiwidHJlZUl0ZW1zU2xpZGUiLCJldmVudCIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCIkdGV4dEJsb2NrcyIsIiRyZWFkTW9yZVRleHQiLCIkY3VycmVudFRhcmdldCIsInByZXR0eVByaW50SW5pdCIsImxvYWRNdWx0aXBsZVBsYXlsaXN0c0NvbnRlbnQiLCJnZXRDaGFubmVsRGF0YWlscyIsImNoYW5uZWxJZCIsImNoYW5uZWxVcGxvYWQiLCJjb250ZW50RGV0YWlscyIsInJlbGF0ZWRQbGF5bGlzdHMiLCJ1cGxvYWRzIiwic2VhcmNoVmlkZW8iLCJmdWxsRGF0YSIsInRpdGxlcyIsIm15RGF0YSIsInNuaXBwZXQiLCJmaW5kTWF0Y2hlcyIsIndvcmRUb01hdGNoIiwidmlkZW9zIiwicmVnZXgiLCJkaXNwbGF5TWF0Y2hlcyIsIm1hdGNoQXJyYXlzIiwibWFwIiwiaXRlbVBvc2l0aW9uIiwidmlkZW9JZCIsInJlc291cmNlSWQiLCJqb2luIiwic3VnZ2VzdGlvbnMiLCJpbm5lckhUTUwiLCJzZWFyY2hJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0VmlkZW8iLCJzZWxlY3RlZCIsImhpZGVTdWdnZXN0aW9uc09uT3V0c2lkZUNsaWNrIiwiaGFzQ2xhc3MiLCJsb2FkVmlkZW9CeUlkIiwiaWZyYW1lQ3VycmVudFNvdXJjZSIsInRodW5tYm5haWxTb3VyY2UiLCJsb2FkVmlkZW9Tb3VyY2UiLCJyZWFkeSIsImdldFlvdXR1YmVEYXRhIiwiZmluYWxVcmwiLCJ0aHVtYm5haWxzIiwiaGlnaCIsInBsYXlsaXN0SWQiLCJpbml0U2t5cGUiLCJpc1NreXBlTG9hZGVkIiwiaXNBdHRlbXB0aW5nQ2FsbCIsImxvYWRTa3lwZSIsIlNreXBlV2ViQ29udHJvbCIsImF0dGVtcHRDYWxsIiwiU0RLIiwiQ2hhdCIsInN0YXJ0Q2hhdCIsIkNvbnZlcnNhdGlvblR5cGUiLCJDb252ZXJzYXRpb25JZCIsInRyaWdnZXIiLCJsaWNlbnNlV2lkZ2V0IiwicHJldmVudERlZmF1bHQiLCIkbm90aWZpZXIiLCJkb3dubG9hZCIsInJlc3BvbnNlSlNPTiIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0eWxlIiwiZGlzcGxheSIsImNsaWNrIiwiRGF0YVNvdXJjZSIsImRhdGFTb3VyY2UiLCJzb3VyY2VVcmwiLCJkZWZhdWx0RmlsdGVycyIsImNhY2hlZERhdGEiLCJjbGllbnRGaWx0ZXJzIiwicHJvcGVydHkiLCJpbmNsdWRlcyIsImZpbHRlcnMiLCJzb3J0aW5nIiwiaXNGb3JjZWQiLCJyZXF1ZXN0IiwibG9hZERhdGEiLCJwYXJzZSIsIm5leHRQYWdlRXhpc3RzIiwic2tpcCIsInRha2UiLCJjb25jYXQiLCJieSIsInNvcnRCeSIsImNvbHVtbiIsIm9yZGVyIiwiY29tcGFyaXNvbiIsInByb3BlcnR5TmFtZSIsImRpcmVjdGlvbiIsImEiLCJiIiwibGVmdCIsInJpZ2h0Iiwic3RhcnQiLCJlbmQiLCJ1cGRhdGVEZWZhdWx0RmlsdGVycyIsInBhZ2VyQ29uZmlnIiwibmVzdGluZ1Byb3BlcnR5IiwiY2VsbFdpZHRoIiwiaGFuZGxlYmFyc1RlbXBsYXRlIiwic2VsZWN0QWxsQnV0dG9uIiwiaXNHcmlkIiwidXNpbmdIYW5kbGViYXJzIiwiJGhlYWRlclJvdyIsIiRib2R5Um93IiwiJHBhZ2VyUm93IiwicmVuZGVyIiwicGFnZVJlYWRPbmx5IiwiUGFnZXIiLCJvblBhZ2VDaGFuZ2UiLCJkYXRlRm9ybWF0T3B0aW9ucyIsImRheSIsImhvdXIiLCJtaW51dGUiLCJjcmVhdGVCdXR0b25zIiwiY3JlYXRlSGVhZGVyIiwiYnVpbGRCb2R5Iiwib25Tb3J0SGFuZGxlciIsInNob3dDaGlsZHJlbiIsInNlYXJjaE9uRW50ZXIiLCJrZXlDb2RlIiwiYmx1ciIsIm9uU2VhcmNoIiwib25DdXN0b21BY3Rpb24iLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbk5hbWUiLCJwb3N0VXJsIiwiJGZpbHRlckhlYWRlciIsIiR0aXRsZUhlYWRlciIsIiRjZWxsIiwiJGFzY2VuZGluZ0ljb24iLCIkZmlsdGVyQnV0dG9uIiwicGxhY2Vob2xkZXIiLCIkbGFzdFNlYXJjaENlbGwiLCJsYXN0IiwicHJldkFsbCIsInNlbGVjdEFsbFJvd3MiLCJwcmVwZW5kVG8iLCJjaGVja2VkIiwiJGJ1dHRvbnNSb3ciLCJoYXNPd25Qcm9wZXJ0eSIsIiRidG4iLCJyZWRpcmVjdFVybCIsInJvd3MiLCIkcm93IiwiY3JlYXRlSXRlbVJvdyIsImNvbHVtbkNvbmZpZyIsInVuZGVmaW5lZCIsInN0ckVuZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiaiIsInN1YnN0ciIsInRvTG9jYWxlU3RyaW5nIiwibGlzdCIsInJlYnVpbGRIZWFkZXIiLCJoYW5kbGVycyIsImxvY2F0aW9uIiwibmV3RGF0YSIsInJlZHVjZSIsInZhbHVlcyIsInNwbGljZSIsImV2ZXJ5IiwiZGlzcGF0Y2hDaGFuZ2UiLCJjaGFuZ2VkVmFsdWVzIiwiYnVpbGRVcmwiLCJ1cmxzIiwibWVyZ2Vfb3B0aW9ucyIsIm9iajEiLCJvYmoyIiwib2JqMyIsImF0dHJuYW1lIiwiaGFuZGxlciIsIm9mZkNoYW5nZSIsIm9uUGFnZUNoYW5nZUhhbmRsZXIiLCJzaXplcyIsInBhZ2VTaXplIiwiY3VycmVudFBhZ2UiLCJwYWdlc0NvdW50IiwiaXNMb2NrZWQiLCIkcGFnZSIsIiRwYWdlc0NvdW50IiwiJHBhZ2VTaXplIiwiJHByZXZQYWdlIiwiJG5leHRQYWdlIiwiU3RyaW5nIiwib25TaXplQ2hhbmdlIiwib25QcmV2aW91c1BhZ2UiLCJvbk5leHRQYWdlIiwidXBkYXRlQXJyb3dzIiwicGFnZXMiLCJXYXJuaW5nV2luZG93IiwibG9nZ2VyIiwiY29uZmlybWF0aW9uTWVzc2FnZSIsIm9uVW5sb2FkIiwiaGFzQ2hhbmdlcyIsInJldHVyblZhbHVlIiwibGFzdENsaWNrZWRFbGVtZW50Iiwic3JjRWxlbWVudCIsImhhc1RleHRBcmVhc1dpdGhUZXh0IiwiJHRleHRhcmVhcyIsImhhc0lucHV0c1dpdGhUZXh0IiwiaGFzVGV4dCIsIiRpbnB1dHMiLCJjaGVja0VsZW1lbnRGb3JEYXRhQXR0ciIsImNoZWNrVXJsIiwibGlua1BhdGgiLCJnZXRMYXN0Q2xpY2tlZEVsZW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3VibWl0QnV0dG9uQ2hlY2siLCJ0YWdOYW1lIiwicGF0aG5hbWUiLCJpbnB1dENoYW5nZWQiLCJkZWZhdWx0U3RvcExlYXZlIiwiaXNTYXZpbmciLCJhdHRhY2giLCJvbmJlZm9yZXVubG9hZCIsImRldGFjaCIsImZvcmNlIiwiY29udGFjdEZvcm1XaWRnZXQiLCIkdmFsaWRhdGVGaWVsZHMiLCIkaW5wdXRGaWVsZHMiLCIkcG9wdXAiLCJob21lcGFnZSIsIiRjYW5jZWxCdXR0b24iLCIkaG9tZXBhZ2VSZWRpcmVjdCIsImRpc3BsYXlQb3B1cCIsInJlbW92ZVBvcHVwIiwic3Vic2NyaXB0aW9uV2lkZ2V0IiwidG9nZ2xlRm9ybSIsIiRuYW1lIiwiJGVtYWlsIiwiJGZlYXR1cmVzUmVsZWFzZXMiLCIkcHJvbW90aW9uYWxNYXRlcmlhbHMiLCJ0cmltIiwiZW1haWxHcm91cHMiLCJzdWJzY3JpYmVyRGF0YSIsIk5hbWUiLCJFbWFpbCIsIk1hcmtldGluZ0VtYWlsR3JvdXBzIiwiaW5pdEluc3RhY2VDYWxsYmFjayIsImVkaXRvciIsInNldHVwRWRpdG9yIiwib25Jbml0Q2FsbGJhY2siLCJhZGRCdXR0b24iLCJpY29uIiwibWVudSIsIm9uY2xpY2siLCJpbnNlcnRDb250ZW50IiwidHJpZ2dlclNhdmUiLCJpbWFnZV9saXN0IiwiaW1hZ2VzIiwiZmlsZV9waWNrZXJfY2FsbGJhY2siLCJjYiIsIm1ldGEiLCJpbnB1dCIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImdldFRpbWUiLCJibG9iQ2FjaGUiLCJhY3RpdmVFZGl0b3IiLCJlZGl0b3JVcGxvYWQiLCJiYXNlNjQiLCJibG9iSW5mbyIsImJsb2JVcmkiLCJyZWFkQXNEYXRhVVJMIiwiY3JlYXRlQmFzZUNvbmZpZyIsImhlaWdodCIsInZlcmlmeV9odG1sIiwiZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHMiLCJjZmciLCJyZW1vdmVBbGwiLCJzZXRDb250ZW50IiwiYWRkRWRpdG9yIiwid2FybiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBSzJCO0FBQ2pDLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEZBQTRGLGFBQWE7QUFDekc7QUFDQTs7QUFFQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0EsTUFBTSwwQkFBMEI7QUFDaEM7QUFDQSxFQUFFLElBQUk7QUFDTjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlFQUF5RTs7QUFFekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isc0JBQXNCLDhDQUE4QztBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUNBQXFDLE9BQU8sUUFBUSxRQUFRO0FBQzVEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLHdCQUF3Qiw0RUFBNEU7QUFDcEcsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0EsK0RBQStELGFBQWE7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxPQUFPO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNFQUFzRTtBQUN0RSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxRQUFRO0FBQ1IscUdBQXFHO0FBQ3JHLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVMscUJBQXFCO0FBQ3RFOztBQUVBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTixtRUFBbUUsaUJBQWlCO0FBQ3BGO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUixxQ0FBcUM7QUFDckM7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixRQUFRO0FBQ1IseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQSx5RkFBeUY7QUFDekY7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxLQUFLLFdBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvREFBb0Qsb0ZBQW9GO0FBQ3hJLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLE1BQU07QUFDTjtBQUNBLG1EQUFtRCxvREFBb0Q7QUFDdkc7QUFDQSxpQ0FBaUMsbURBQW1EO0FBQ3BGO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0Esb0JBQW9CLEdBQUc7QUFDdkI7QUFDQTtBQUNBLG9CQUFvQixHQUFHO0FBQ3ZCLG9CQUFvQixHQUFHO0FBQ3ZCO0FBQ0Esd0RBQXdEO0FBQ3hELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxSUFBcUk7QUFDckksSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxPQUFPO0FBQ2hE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QU9Id2tCO0FBUEcsS0FBUDtBQVNILENBeEtnQixFQUFqQjs7UUEwS1N6bUIsVSxHQUFBQSxVIiwiZmlsZSI6ImpzL2Zyb250ZW5kLWxheW91dC1zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9mcm9udGVuZC1sYXlvdXQtc2NyaXB0cy5qc1wiKTtcbiIsIi8qKiFcblxuIEBsaWNlbnNlXG4gaGFuZGxlYmFycyB2NC4xLjBcblxuQ29weXJpZ2h0IChDKSAyMDExLTIwMTcgYnkgWWVodWRhIEthdHpcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFuZGxlYmFyc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHQvLyBDb21waWxlciBpbXBvcnRzXG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckFzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJBc3QpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuXHR2YXIgX2NyZWF0ZSA9IF9oYW5kbGViYXJzUnVudGltZTJbJ2RlZmF1bHQnXS5jcmVhdGU7XG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBfY3JlYXRlKCk7XG5cblx0ICBoYi5jb21waWxlID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLmNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcblx0ICB9O1xuXHQgIGhiLnByZWNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIucHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuXHQgIH07XG5cblx0ICBoYi5BU1QgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MlsnZGVmYXVsdCddO1xuXHQgIGhiLkNvbXBpbGVyID0gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLkNvbXBpbGVyO1xuXHQgIGhiLkphdmFTY3JpcHRDb21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyWydkZWZhdWx0J107XG5cdCAgaGIuUGFyc2VyID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2VyO1xuXHQgIGhiLnBhcnNlID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2U7XG5cblx0ICByZXR1cm4gaGI7XG5cdH1cblxuXHR2YXIgaW5zdCA9IGNyZWF0ZSgpO1xuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuXHRfaGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cblx0aW5zdC5WaXNpdG9yID0gX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyWydkZWZhdWx0J107XG5cblx0aW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcblx0ICAgIFwiZGVmYXVsdFwiOiBvYmpcblx0ICB9O1xuXHR9O1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgYmFzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzQmFzZSk7XG5cblx0Ly8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuXHQvLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG5cdHZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cblx0dmFyIF9oYW5kbGViYXJzUnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG5cdHZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cblx0Ly8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuXHQgIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG5cdCAgaGIuU2FmZVN0cmluZyA9IF9oYW5kbGViYXJzU2FmZVN0cmluZzJbJ2RlZmF1bHQnXTtcblx0ICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcblx0ICBoYi5VdGlscyA9IFV0aWxzO1xuXHQgIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cdCAgaGIuVk0gPSBydW50aW1lO1xuXHQgIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcblx0ICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcblx0ICB9O1xuXG5cdCAgcmV0dXJuIGhiO1xuXHR9XG5cblx0dmFyIGluc3QgPSBjcmVhdGUoKTtcblx0aW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cblx0X2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5cdGluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcblx0ICAgIHJldHVybiBvYmo7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhciBuZXdPYmogPSB7fTtcblxuXHQgICAgaWYgKG9iaiAhPSBudWxsKSB7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0ICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXHQgICAgcmV0dXJuIG5ld09iajtcblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdHZhciBfZGVjb3JhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXG5cdHZhciBfbG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cblx0dmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxuXHR2YXIgVkVSU0lPTiA9ICc0LjEuMCc7XG5cdGV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG5cdHZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cblx0ZXhwb3J0cy5DT01QSUxFUl9SRVZJU0lPTiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXHR2YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcblx0ICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuXHQgIDI6ICc9PSAxLjAuMC1yYy4zJyxcblx0ICAzOiAnPT0gMS4wLjAtcmMuNCcsXG5cdCAgNDogJz09IDEueC54Jyxcblx0ICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG5cdCAgNjogJz49IDIuMC4wLWJldGEuMScsXG5cdCAgNzogJz49IDQuMC4wJ1xuXHR9O1xuXG5cdGV4cG9ydHMuUkVWSVNJT05fQ0hBTkdFUyA9IFJFVklTSU9OX0NIQU5HRVM7XG5cdHZhciBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cblx0ZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG5cdCAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcblx0ICB0aGlzLnBhcnRpYWxzID0gcGFydGlhbHMgfHwge307XG5cdCAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuXHQgIF9oZWxwZXJzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG5cdCAgX2RlY29yYXRvcnMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyh0aGlzKTtcblx0fVxuXG5cdEhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG5cdCAgY29uc3RydWN0b3I6IEhhbmRsZWJhcnNFbnZpcm9ubWVudCxcblxuXHQgIGxvZ2dlcjogX2xvZ2dlcjJbJ2RlZmF1bHQnXSxcblx0ICBsb2c6IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nLFxuXG5cdCAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVyKG5hbWUsIGZuKSB7XG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcblx0ICAgICAgaWYgKGZuKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpO1xuXHQgICAgICB9XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuXHQgIH0sXG5cblx0ICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHJlZ2lzdGVyUGFydGlhbChuYW1lLCBwYXJ0aWFsKSB7XG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJyArIG5hbWUgKyAnXCIgYXMgdW5kZWZpbmVkJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5wYXJ0aWFsc1tuYW1lXSA9IHBhcnRpYWw7XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gdW5yZWdpc3RlclBhcnRpYWwobmFtZSkge1xuXHQgICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG5cdCAgfSxcblxuXHQgIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihuYW1lLCBmbikge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIGlmIChmbikge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTtcblx0ICAgICAgfVxuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmRlY29yYXRvcnNbbmFtZV0gPSBmbjtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHVucmVnaXN0ZXJEZWNvcmF0b3IobmFtZSkge1xuXHQgICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcblx0ICB9XG5cdH07XG5cblx0dmFyIGxvZyA9IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nO1xuXG5cdGV4cG9ydHMubG9nID0gbG9nO1xuXHRleHBvcnRzLmNyZWF0ZUZyYW1lID0gX3V0aWxzLmNyZWF0ZUZyYW1lO1xuXHRleHBvcnRzLmxvZ2dlciA9IF9sb2dnZXIyWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcblx0ZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcblx0ZXhwb3J0cy5lc2NhcGVFeHByZXNzaW9uID0gZXNjYXBlRXhwcmVzc2lvbjtcblx0ZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcblx0ZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xuXHRleHBvcnRzLmJsb2NrUGFyYW1zID0gYmxvY2tQYXJhbXM7XG5cdGV4cG9ydHMuYXBwZW5kQ29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aDtcblx0dmFyIGVzY2FwZSA9IHtcblx0ICAnJic6ICcmYW1wOycsXG5cdCAgJzwnOiAnJmx0OycsXG5cdCAgJz4nOiAnJmd0OycsXG5cdCAgJ1wiJzogJyZxdW90OycsXG5cdCAgXCInXCI6ICcmI3gyNzsnLFxuXHQgICdgJzogJyYjeDYwOycsXG5cdCAgJz0nOiAnJiN4M0Q7J1xuXHR9O1xuXG5cdHZhciBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG5cdCAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuXHRmdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuXHQgIHJldHVybiBlc2NhcGVbY2hyXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcblx0ICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuXHQgICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gb2JqO1xuXHR9XG5cblx0dmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXHRleHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5cdC8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuXHQvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXG5cdHZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuXHQgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cdC8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRpZiAoaXNGdW5jdGlvbigveC8pKSB7XG5cdCAgZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0ICB9O1xuXHR9XG5cdGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cblx0LyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0dmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcblx0fTtcblxuXHRleHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXHQvLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuXG5cdGZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG5cdCAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG5cdCAgICAgIHJldHVybiBpO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gLTE7XG5cdH1cblxuXHRmdW5jdGlvbiBlc2NhcGVFeHByZXNzaW9uKHN0cmluZykge1xuXHQgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHQgICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuXHQgICAgaWYgKHN0cmluZyAmJiBzdHJpbmcudG9IVE1MKSB7XG5cdCAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG5cdCAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuXHQgICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuXHQgICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG5cdCAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cblx0ICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuXHQgIH1cblxuXHQgIGlmICghcG9zc2libGUudGVzdChzdHJpbmcpKSB7XG5cdCAgICByZXR1cm4gc3RyaW5nO1xuXHQgIH1cblx0ICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuXHQgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuXHQgIHZhciBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcblx0ICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuXHQgIHJldHVybiBmcmFtZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG5cdCAgcGFyYW1zLnBhdGggPSBpZHM7XG5cdCAgcmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuXHQgIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNylbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuXHRmdW5jdGlvbiBFeGNlcHRpb24obWVzc2FnZSwgbm9kZSkge1xuXHQgIHZhciBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuXHQgICAgICBsaW5lID0gdW5kZWZpbmVkLFxuXHQgICAgICBjb2x1bW4gPSB1bmRlZmluZWQ7XG5cdCAgaWYgKGxvYykge1xuXHQgICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuXHQgICAgY29sdW1uID0gbG9jLnN0YXJ0LmNvbHVtbjtcblxuXHQgICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG5cdCAgfVxuXG5cdCAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG5cdCAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG5cdCAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG5cdCAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcblx0ICB9XG5cblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXHQgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuXHQgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcblx0ICB9XG5cblx0ICB0cnkge1xuXHQgICAgaWYgKGxvYykge1xuXHQgICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG5cdCAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuXHQgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgICBpZiAoX09iamVjdCRkZWZpbmVQcm9wZXJ0eSkge1xuXHQgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge1xuXHQgICAgICAgICAgdmFsdWU6IGNvbHVtbixcblx0ICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcblx0ICAgICAgICB9KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0gY2F0Y2ggKG5vcCkge1xuXHQgICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuXHQgIH1cblx0fVxuXG5cdEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBFeGNlcHRpb247XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IF9fd2VicGFja19yZXF1aXJlX18oOCksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuXHQgIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcblx0ICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuXHQgIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuXHQgIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuXHQgIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG5cdCAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuXHQgIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcblx0ICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG5cdCAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG5cdCAgZWFjaDogICAgICAgW10uZm9yRWFjaFxuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyA9IHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnM7XG5cblx0dmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0dmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcpO1xuXG5cdHZhciBfaGVscGVyc0VhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxuXHR2YXIgX2hlbHBlcnNFYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNFYWNoKTtcblxuXHR2YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cblx0dmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSGVscGVyTWlzc2luZyk7XG5cblx0dmFyIF9oZWxwZXJzSWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuXHR2YXIgX2hlbHBlcnNJZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSWYpO1xuXG5cdHZhciBfaGVscGVyc0xvZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG5cdHZhciBfaGVscGVyc0xvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9nKTtcblxuXHR2YXIgX2hlbHBlcnNMb29rdXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblxuXHR2YXIgX2hlbHBlcnNMb29rdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvb2t1cCk7XG5cblx0dmFyIF9oZWxwZXJzV2l0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG5cdHZhciBfaGVscGVyc1dpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc1dpdGgpO1xuXG5cdGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcblx0ICBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNFYWNoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzSWYyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzTG9nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0xvb2t1cDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNXaXRoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcblx0ICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cblx0ICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG5cdCAgICAgIHJldHVybiBmbih0aGlzKTtcblx0ICAgIH0gZWxzZSBpZiAoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuXHQgICAgfSBlbHNlIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuXHQgICAgICBpZiAoY29udGV4dC5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICB2YXIgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuXHQgICAgICAgIG9wdGlvbnMgPSB7IGRhdGE6IGRhdGEgfTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIGlmICghb3B0aW9ucykge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBmbiA9IG9wdGlvbnMuZm4sXG5cdCAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcblx0ICAgICAgICBpID0gMCxcblx0ICAgICAgICByZXQgPSAnJyxcblx0ICAgICAgICBkYXRhID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgIGNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcblx0ICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuXHQgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG5cdCAgICAgIGlmIChkYXRhKSB7XG5cdCAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcblx0ICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG5cdCAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuXHQgICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuXHQgICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuXHQgICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcblx0ICAgICAgICBkYXRhOiBkYXRhLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRbZmllbGRdLCBmaWVsZF0sIFtjb250ZXh0UGF0aCArIGZpZWxkLCBudWxsXSlcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcblx0ICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0ICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcblx0ICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgcHJpb3JLZXkgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29udGV4dCkge1xuXHQgICAgICAgICAgaWYgKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3Rcblx0ICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuXHQgICAgICAgICAgICAvLyBhbiBpdGVybWVkaWF0ZSBrZXlzIGFycmF5LlxuXHQgICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBwcmlvcktleSA9IGtleTtcblx0ICAgICAgICAgICAgaSsrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEsIHRydWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaSA9PT0gMCkge1xuXHQgICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSAvKiBbYXJncywgXW9wdGlvbnMgKi97XG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHQgICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0cnVjdC5cblx0ICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFNvbWVvbmUgaXMgYWN0dWFsbHkgdHJ5aW5nIHRvIGNhbGwgc29tZXRoaW5nLCBibG93IHVwLlxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG5cdCAgICAgIGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuXHQgICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcblx0ICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG5cdCAgICBpZiAoIW9wdGlvbnMuaGFzaC5pbmNsdWRlWmVybyAmJiAhY29uZGl0aW9uYWwgfHwgX3V0aWxzLmlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcblx0ICAgIH1cblx0ICB9KTtcblxuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHsgZm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNoIH0pO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uICgpIC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi97XG5cdCAgICB2YXIgYXJncyA9IFt1bmRlZmluZWRdLFxuXHQgICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdCAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgbGV2ZWwgPSAxO1xuXHQgICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xuXHQgICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcblx0ICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG5cdCAgICB9XG5cdCAgICBhcmdzWzBdID0gbGV2ZWw7XG5cblx0ICAgIGluc3RhbmNlLmxvZy5hcHBseShpbnN0YW5jZSwgYXJncyk7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24gKG9iaiwgZmllbGQpIHtcblx0ICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuXHQgICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXG5cdCAgICBpZiAoIV91dGlscy5pc0VtcHR5KGNvbnRleHQpKSB7XG5cdCAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXHQgICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuXHQgICAgICAgIGRhdGE6IGRhdGEsXG5cdCAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuXHQgICAgICB9KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzID0gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycztcblxuXHR2YXIgX2RlY29yYXRvcnNJbmxpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblxuXHR2YXIgX2RlY29yYXRvcnNJbmxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdG9yc0lubGluZSk7XG5cblx0ZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuXHQgIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uIChmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuXHQgICAgdmFyIHJldCA9IGZuO1xuXHQgICAgaWYgKCFwcm9wcy5wYXJ0aWFscykge1xuXHQgICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuXHQgICAgICByZXQgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuXHQgICAgICAgIHZhciBvcmlnaW5hbCA9IGNvbnRhaW5lci5wYXJ0aWFscztcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuXHQgICAgICAgIHZhciByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcblx0ICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBsb2dnZXIgPSB7XG5cdCAgbWV0aG9kTWFwOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuXHQgIGxldmVsOiAnaW5mbycsXG5cblx0ICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG5cdCAgbG9va3VwTGV2ZWw6IGZ1bmN0aW9uIGxvb2t1cExldmVsKGxldmVsKSB7XG5cdCAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuXHQgICAgICB2YXIgbGV2ZWxNYXAgPSBfdXRpbHMuaW5kZXhPZihsb2dnZXIubWV0aG9kTWFwLCBsZXZlbC50b0xvd2VyQ2FzZSgpKTtcblx0ICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcblx0ICAgICAgICBsZXZlbCA9IGxldmVsTWFwO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gbGV2ZWw7XG5cdCAgfSxcblxuXHQgIC8vIENhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBob3N0IGVudmlyb25tZW50XG5cdCAgbG9nOiBmdW5jdGlvbiBsb2cobGV2ZWwpIHtcblx0ICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuXHQgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuXHQgICAgICB2YXIgbWV0aG9kID0gbG9nZ2VyLm1ldGhvZE1hcFtsZXZlbF07XG5cdCAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG5cdCAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdCAgICAgICAgbWV0aG9kID0gJ2xvZyc7XG5cdCAgICAgIH1cblxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgICBtZXNzYWdlW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGxvZ2dlcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcblx0ICB0aGlzLnN0cmluZyA9IHN0cmluZztcblx0fVxuXG5cdFNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNhZmVTdHJpbmc7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfT2JqZWN0JHNlYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmNoZWNrUmV2aXNpb24gPSBjaGVja1JldmlzaW9uO1xuXHRleHBvcnRzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdGV4cG9ydHMud3JhcFByb2dyYW0gPSB3cmFwUHJvZ3JhbTtcblx0ZXhwb3J0cy5yZXNvbHZlUGFydGlhbCA9IHJlc29sdmVQYXJ0aWFsO1xuXHRleHBvcnRzLmludm9rZVBhcnRpYWwgPSBpbnZva2VQYXJ0aWFsO1xuXHRleHBvcnRzLm5vb3AgPSBub29wO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlscyk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0dmFyIF9iYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHRmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuXHQgIHZhciBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuXHQgICAgICBjdXJyZW50UmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTjtcblxuXHQgIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcblx0ICAgIGlmIChjb21waWxlclJldmlzaW9uIDwgY3VycmVudFJldmlzaW9uKSB7XG5cdCAgICAgIHZhciBydW50aW1lVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG5cdCAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFVzZSB0aGUgZW1iZWRkZWQgdmVyc2lvbiBpbmZvIHNpbmNlIHRoZSBydW50aW1lIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHJldmlzaW9uIHlldFxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuXHQgICAgfVxuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRlbXBsYXRlKHRlbXBsYXRlU3BlYywgZW52KSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBpZiAoIWVudikge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuXHQgIH1cblx0ICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuXHQgIH1cblxuXHQgIHRlbXBsYXRlU3BlYy5tYWluLmRlY29yYXRvciA9IHRlbXBsYXRlU3BlYy5tYWluX2Q7XG5cblx0ICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuXHQgIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG5cdCAgZW52LlZNLmNoZWNrUmV2aXNpb24odGVtcGxhdGVTcGVjLmNvbXBpbGVyKTtcblxuXHQgIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIGlmIChvcHRpb25zLmhhc2gpIHtcblx0ICAgICAgY29udGV4dCA9IFV0aWxzLmV4dGVuZCh7fSwgY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcblx0ICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdCAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcblx0ICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcblx0ICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgfVxuXHQgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG5cdCAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuXHQgICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gSnVzdCBhZGQgd2F0ZXJcblx0ICB2YXIgY29udGFpbmVyID0ge1xuXHQgICAgc3RyaWN0OiBmdW5jdGlvbiBzdHJpY3Qob2JqLCBuYW1lKSB7XG5cdCAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBvYmpbbmFtZV07XG5cdCAgICB9LFxuXHQgICAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAoZGVwdGhzLCBuYW1lKSB7XG5cdCAgICAgIHZhciBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuXHQgICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBsYW1iZGE6IGZ1bmN0aW9uIGxhbWJkYShjdXJyZW50LCBjb250ZXh0KSB7XG5cdCAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG5cdCAgICB9LFxuXG5cdCAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuXHQgICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cblx0ICAgIGZuOiBmdW5jdGlvbiBmbihpKSB7XG5cdCAgICAgIHZhciByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG5cdCAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSxcblxuXHQgICAgcHJvZ3JhbXM6IFtdLFxuXHQgICAgcHJvZ3JhbTogZnVuY3Rpb24gcHJvZ3JhbShpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgICAgIHZhciBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG5cdCAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG5cdCAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG5cdCAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG5cdCAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcblx0ICAgIH0sXG5cblx0ICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEodmFsdWUsIGRlcHRoKSB7XG5cdCAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG5cdCAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB2YWx1ZTtcblx0ICAgIH0sXG5cdCAgICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UocGFyYW0sIGNvbW1vbikge1xuXHQgICAgICB2YXIgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG5cdCAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgcGFyYW0gIT09IGNvbW1vbikge1xuXHQgICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gb2JqO1xuXHQgICAgfSxcblx0ICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcblx0ICAgIG51bGxDb250ZXh0OiBfT2JqZWN0JHNlYWwoe30pLFxuXG5cdCAgICBub29wOiBlbnYuVk0ubm9vcCxcblx0ICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG5cdCAgfTtcblxuXHQgIGZ1bmN0aW9uIHJldChjb250ZXh0KSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuXHQgICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcblx0ICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG5cdCAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcblx0ICAgIH1cblx0ICAgIHZhciBkZXB0aHMgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG5cdCAgICAgIGlmIChvcHRpb25zLmRlcHRocykge1xuXHQgICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xuXHQgICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgICAgfVxuXHQgICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cdCAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICB9XG5cdCAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuXHQgIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHQgICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcblx0ICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cblx0ICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG5cdCAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5kZWNvcmF0b3JzLCBlbnYuZGVjb3JhdG9ycyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuXHQgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuXHQgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICB9O1xuXHQgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgZnVuY3Rpb24gcHJvZyhjb250ZXh0KSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICB2YXIgY3VycmVudERlcHRocyA9IGRlcHRocztcblx0ICAgIGlmIChkZXB0aHMgJiYgY29udGV4dCAhPSBkZXB0aHNbMF0gJiYgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKSkge1xuXHQgICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZm4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksIGN1cnJlbnREZXB0aHMpO1xuXHQgIH1cblxuXHQgIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuXHQgIHByb2cucHJvZ3JhbSA9IGk7XG5cdCAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuXHQgIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG5cdCAgcmV0dXJuIHByb2c7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgaWYgKCFwYXJ0aWFsKSB7XG5cdCAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG5cdCAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcblx0ICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuXHQgICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcblx0ICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuXHQgIH1cblx0ICByZXR1cm4gcGFydGlhbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcblx0ICB2YXIgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcblx0ICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuXHQgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuXHQgIH1cblxuXHQgIHZhciBwYXJ0aWFsQmxvY2sgPSB1bmRlZmluZWQ7XG5cdCAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuXHQgICAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXHQgICAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoY29udGV4dCkge1xuXHQgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG5cdCAgICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG5cdCAgICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG5cdCAgICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICB9O1xuXHQgICAgICBpZiAoZm4ucGFydGlhbHMpIHtcblx0ICAgICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG5cdCAgICAgIH1cblx0ICAgIH0pKCk7XG5cdCAgfVxuXG5cdCAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcblx0ICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG5cdCAgfVxuXG5cdCAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuXHQgIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdCAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBub29wKCkge1xuXHQgIHJldHVybiAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcblx0ICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcblx0ICAgIGRhdGEgPSBkYXRhID8gX2Jhc2UuY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcblx0ICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG5cdCAgfVxuXHQgIHJldHVybiBkYXRhO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuXHQgIGlmIChmbi5kZWNvcmF0b3IpIHtcblx0ICAgIHZhciBwcm9wcyA9IHt9O1xuXHQgICAgcHJvZyA9IGZuLmRlY29yYXRvcihwcm9nLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aHMgJiYgZGVwdGhzWzBdLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG5cdCAgfVxuXHQgIHJldHVybiBwcm9nO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IF9fd2VicGFja19yZXF1aXJlX18oMjQpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKS5PYmplY3Quc2VhbDtcblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xNyBPYmplY3Quc2VhbChPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gc2VhbChpdCl7XG5cdCAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwoaXQpIDogaXQ7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIGNvcmUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgZmFpbHMgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG5cdCAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuXHQgICAgLCBleHAgPSB7fTtcblx0ICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuXHQgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAyOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnbG9iYWwgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KVxuXHQgICwgY29yZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGN0eCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpXG5cdCAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuXHR2YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG5cdCAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcblx0ICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuXHQgICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG5cdCAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcblx0ICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuXHQgICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG5cdCAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG5cdCAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cblx0ICAgICwga2V5LCBvd24sIG91dDtcblx0ICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcblx0ICBmb3Ioa2V5IGluIHNvdXJjZSl7XG5cdCAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcblx0ICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG5cdCAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG5cdCAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuXHQgICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcblx0ICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuXHQgICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cblx0ICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG5cdCAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuXHQgICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcblx0ICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG5cdCAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuXHQgICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuXHQgICAgICB9O1xuXHQgICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG5cdCAgICAgIHJldHVybiBGO1xuXHQgICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG5cdCAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG5cdCAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG5cdCAgfVxuXHR9O1xuXHQvLyB0eXBlIGJpdG1hcFxuXHQkZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG5cdCRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcblx0JGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuXHQkZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cblx0JGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcblx0JGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcblx0bW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcblx0dmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG5cdCAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHRpZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9KSxcbi8qIDMwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcblx0aWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKiovIH0pLFxuLyogMzEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcblx0dmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuXHQgIGFGdW5jdGlvbihmbik7XG5cdCAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcblx0ICBzd2l0Y2gobGVuZ3RoKXtcblx0ICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuXHQgICAgfTtcblx0ICB9XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDMzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuICEhZXhlYygpO1xuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoSGFuZGxlYmFycykge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyxcblx0ICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBIYW5kbGViYXJzLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG5cdCAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIEhhbmRsZWJhcnM7XG5cdCAgfTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9KSxcbi8qIDM1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdHZhciBBU1QgPSB7XG5cdCAgLy8gUHVibGljIEFQSSB1c2VkIHRvIGV2YWx1YXRlIGRlcml2ZWQgYXR0cmlidXRlcyByZWdhcmRpbmcgQVNUIG5vZGVzXG5cdCAgaGVscGVyczoge1xuXHQgICAgLy8gYSBtdXN0YWNoZSBpcyBkZWZpbml0ZWx5IGEgaGVscGVyIGlmOlxuXHQgICAgLy8gKiBpdCBpcyBhbiBlbGlnaWJsZSBoZWxwZXIsIGFuZFxuXHQgICAgLy8gKiBpdCBoYXMgYXQgbGVhc3Qgb25lIHBhcmFtZXRlciBvciBoYXNoIHNlZ21lbnRcblx0ICAgIGhlbHBlckV4cHJlc3Npb246IGZ1bmN0aW9uIGhlbHBlckV4cHJlc3Npb24obm9kZSkge1xuXHQgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnU3ViRXhwcmVzc2lvbicgfHwgKG5vZGUudHlwZSA9PT0gJ011c3RhY2hlU3RhdGVtZW50JyB8fCBub2RlLnR5cGUgPT09ICdCbG9ja1N0YXRlbWVudCcpICYmICEhKG5vZGUucGFyYW1zICYmIG5vZGUucGFyYW1zLmxlbmd0aCB8fCBub2RlLmhhc2gpO1xuXHQgICAgfSxcblxuXHQgICAgc2NvcGVkSWQ6IGZ1bmN0aW9uIHNjb3BlZElkKHBhdGgpIHtcblx0ICAgICAgcmV0dXJuICgvXlxcLnx0aGlzXFxiLy50ZXN0KHBhdGgub3JpZ2luYWwpXG5cdCAgICAgICk7XG5cdCAgICB9LFxuXG5cdCAgICAvLyBhbiBJRCBpcyBzaW1wbGUgaWYgaXQgb25seSBoYXMgb25lIHBhcnQsIGFuZCB0aGF0IHBhcnQgaXMgbm90XG5cdCAgICAvLyBgLi5gIG9yIGB0aGlzYC5cblx0ICAgIHNpbXBsZUlkOiBmdW5jdGlvbiBzaW1wbGVJZChwYXRoKSB7XG5cdCAgICAgIHJldHVybiBwYXRoLnBhcnRzLmxlbmd0aCA9PT0gMSAmJiAhQVNULmhlbHBlcnMuc2NvcGVkSWQocGF0aCkgJiYgIXBhdGguZGVwdGg7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdC8vIE11c3QgYmUgZXhwb3J0ZWQgYXMgYW4gb2JqZWN0IHJhdGhlciB0aGFuIHRoZSByb290IG9mIHRoZSBtb2R1bGUgYXMgdGhlIGppc29uIGxleGVyXG5cdC8vIG11c3QgbW9kaWZ5IHRoZSBvYmplY3QgdG8gb3BlcmF0ZSBwcm9wZXJseS5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQVNUO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG5cdHZhciBfcGFyc2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cblx0dmFyIF9wYXJzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VyKTtcblxuXHR2YXIgX3doaXRlc3BhY2VDb250cm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCk7XG5cblx0dmFyIF93aGl0ZXNwYWNlQ29udHJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aGl0ZXNwYWNlQ29udHJvbCk7XG5cblx0dmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG5cblx0dmFyIEhlbHBlcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGVscGVycyk7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0cy5wYXJzZXIgPSBfcGFyc2VyMlsnZGVmYXVsdCddO1xuXG5cdHZhciB5eSA9IHt9O1xuXHRfdXRpbHMuZXh0ZW5kKHl5LCBIZWxwZXJzKTtcblxuXHRmdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuXHQgIC8vIEp1c3QgcmV0dXJuIGlmIGFuIGFscmVhZHktY29tcGlsZWQgQVNUIHdhcyBwYXNzZWQgaW4uXG5cdCAgaWYgKGlucHV0LnR5cGUgPT09ICdQcm9ncmFtJykge1xuXHQgICAgcmV0dXJuIGlucHV0O1xuXHQgIH1cblxuXHQgIF9wYXJzZXIyWydkZWZhdWx0J10ueXkgPSB5eTtcblxuXHQgIC8vIEFsdGVyaW5nIHRoZSBzaGFyZWQgb2JqZWN0IGhlcmUsIGJ1dCB0aGlzIGlzIG9rIGFzIHBhcnNlciBpcyBhIHN5bmMgb3BlcmF0aW9uXG5cdCAgeXkubG9jSW5mbyA9IGZ1bmN0aW9uIChsb2NJbmZvKSB7XG5cdCAgICByZXR1cm4gbmV3IHl5LlNvdXJjZUxvY2F0aW9uKG9wdGlvbnMgJiYgb3B0aW9ucy5zcmNOYW1lLCBsb2NJbmZvKTtcblx0ICB9O1xuXG5cdCAgdmFyIHN0cmlwID0gbmV3IF93aGl0ZXNwYWNlQ29udHJvbDJbJ2RlZmF1bHQnXShvcHRpb25zKTtcblx0ICByZXR1cm4gc3RyaXAuYWNjZXB0KF9wYXJzZXIyWydkZWZhdWx0J10ucGFyc2UoaW5wdXQpKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDM3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gRmlsZSBpZ25vcmVkIGluIGNvdmVyYWdlIHRlc3RzIHZpYSBzZXR0aW5nIGluIC5pc3RhbmJ1bC55bWxcblx0LyogSmlzb24gZ2VuZXJhdGVkIHBhcnNlciAqL1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHR2YXIgaGFuZGxlYmFycyA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgcGFyc2VyID0geyB0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7fSxcblx0ICAgICAgICB5eToge30sXG5cdCAgICAgICAgc3ltYm9sc186IHsgXCJlcnJvclwiOiAyLCBcInJvb3RcIjogMywgXCJwcm9ncmFtXCI6IDQsIFwiRU9GXCI6IDUsIFwicHJvZ3JhbV9yZXBldGl0aW9uMFwiOiA2LCBcInN0YXRlbWVudFwiOiA3LCBcIm11c3RhY2hlXCI6IDgsIFwiYmxvY2tcIjogOSwgXCJyYXdCbG9ja1wiOiAxMCwgXCJwYXJ0aWFsXCI6IDExLCBcInBhcnRpYWxCbG9ja1wiOiAxMiwgXCJjb250ZW50XCI6IDEzLCBcIkNPTU1FTlRcIjogMTQsIFwiQ09OVEVOVFwiOiAxNSwgXCJvcGVuUmF3QmxvY2tcIjogMTYsIFwicmF3QmxvY2tfcmVwZXRpdGlvbl9wbHVzMFwiOiAxNywgXCJFTkRfUkFXX0JMT0NLXCI6IDE4LCBcIk9QRU5fUkFXX0JMT0NLXCI6IDE5LCBcImhlbHBlck5hbWVcIjogMjAsIFwib3BlblJhd0Jsb2NrX3JlcGV0aXRpb24wXCI6IDIxLCBcIm9wZW5SYXdCbG9ja19vcHRpb24wXCI6IDIyLCBcIkNMT1NFX1JBV19CTE9DS1wiOiAyMywgXCJvcGVuQmxvY2tcIjogMjQsIFwiYmxvY2tfb3B0aW9uMFwiOiAyNSwgXCJjbG9zZUJsb2NrXCI6IDI2LCBcIm9wZW5JbnZlcnNlXCI6IDI3LCBcImJsb2NrX29wdGlvbjFcIjogMjgsIFwiT1BFTl9CTE9DS1wiOiAyOSwgXCJvcGVuQmxvY2tfcmVwZXRpdGlvbjBcIjogMzAsIFwib3BlbkJsb2NrX29wdGlvbjBcIjogMzEsIFwib3BlbkJsb2NrX29wdGlvbjFcIjogMzIsIFwiQ0xPU0VcIjogMzMsIFwiT1BFTl9JTlZFUlNFXCI6IDM0LCBcIm9wZW5JbnZlcnNlX3JlcGV0aXRpb24wXCI6IDM1LCBcIm9wZW5JbnZlcnNlX29wdGlvbjBcIjogMzYsIFwib3BlbkludmVyc2Vfb3B0aW9uMVwiOiAzNywgXCJvcGVuSW52ZXJzZUNoYWluXCI6IDM4LCBcIk9QRU5fSU5WRVJTRV9DSEFJTlwiOiAzOSwgXCJvcGVuSW52ZXJzZUNoYWluX3JlcGV0aXRpb24wXCI6IDQwLCBcIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOiA0MSwgXCJvcGVuSW52ZXJzZUNoYWluX29wdGlvbjFcIjogNDIsIFwiaW52ZXJzZUFuZFByb2dyYW1cIjogNDMsIFwiSU5WRVJTRVwiOiA0NCwgXCJpbnZlcnNlQ2hhaW5cIjogNDUsIFwiaW52ZXJzZUNoYWluX29wdGlvbjBcIjogNDYsIFwiT1BFTl9FTkRCTE9DS1wiOiA0NywgXCJPUEVOXCI6IDQ4LCBcIm11c3RhY2hlX3JlcGV0aXRpb24wXCI6IDQ5LCBcIm11c3RhY2hlX29wdGlvbjBcIjogNTAsIFwiT1BFTl9VTkVTQ0FQRURcIjogNTEsIFwibXVzdGFjaGVfcmVwZXRpdGlvbjFcIjogNTIsIFwibXVzdGFjaGVfb3B0aW9uMVwiOiA1MywgXCJDTE9TRV9VTkVTQ0FQRURcIjogNTQsIFwiT1BFTl9QQVJUSUFMXCI6IDU1LCBcInBhcnRpYWxOYW1lXCI6IDU2LCBcInBhcnRpYWxfcmVwZXRpdGlvbjBcIjogNTcsIFwicGFydGlhbF9vcHRpb24wXCI6IDU4LCBcIm9wZW5QYXJ0aWFsQmxvY2tcIjogNTksIFwiT1BFTl9QQVJUSUFMX0JMT0NLXCI6IDYwLCBcIm9wZW5QYXJ0aWFsQmxvY2tfcmVwZXRpdGlvbjBcIjogNjEsIFwib3BlblBhcnRpYWxCbG9ja19vcHRpb24wXCI6IDYyLCBcInBhcmFtXCI6IDYzLCBcInNleHByXCI6IDY0LCBcIk9QRU5fU0VYUFJcIjogNjUsIFwic2V4cHJfcmVwZXRpdGlvbjBcIjogNjYsIFwic2V4cHJfb3B0aW9uMFwiOiA2NywgXCJDTE9TRV9TRVhQUlwiOiA2OCwgXCJoYXNoXCI6IDY5LCBcImhhc2hfcmVwZXRpdGlvbl9wbHVzMFwiOiA3MCwgXCJoYXNoU2VnbWVudFwiOiA3MSwgXCJJRFwiOiA3MiwgXCJFUVVBTFNcIjogNzMsIFwiYmxvY2tQYXJhbXNcIjogNzQsIFwiT1BFTl9CTE9DS19QQVJBTVNcIjogNzUsIFwiYmxvY2tQYXJhbXNfcmVwZXRpdGlvbl9wbHVzMFwiOiA3NiwgXCJDTE9TRV9CTE9DS19QQVJBTVNcIjogNzcsIFwicGF0aFwiOiA3OCwgXCJkYXRhTmFtZVwiOiA3OSwgXCJTVFJJTkdcIjogODAsIFwiTlVNQkVSXCI6IDgxLCBcIkJPT0xFQU5cIjogODIsIFwiVU5ERUZJTkVEXCI6IDgzLCBcIk5VTExcIjogODQsIFwiREFUQVwiOiA4NSwgXCJwYXRoU2VnbWVudHNcIjogODYsIFwiU0VQXCI6IDg3LCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcblx0ICAgICAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNTogXCJFT0ZcIiwgMTQ6IFwiQ09NTUVOVFwiLCAxNTogXCJDT05URU5UXCIsIDE4OiBcIkVORF9SQVdfQkxPQ0tcIiwgMTk6IFwiT1BFTl9SQVdfQkxPQ0tcIiwgMjM6IFwiQ0xPU0VfUkFXX0JMT0NLXCIsIDI5OiBcIk9QRU5fQkxPQ0tcIiwgMzM6IFwiQ0xPU0VcIiwgMzQ6IFwiT1BFTl9JTlZFUlNFXCIsIDM5OiBcIk9QRU5fSU5WRVJTRV9DSEFJTlwiLCA0NDogXCJJTlZFUlNFXCIsIDQ3OiBcIk9QRU5fRU5EQkxPQ0tcIiwgNDg6IFwiT1BFTlwiLCA1MTogXCJPUEVOX1VORVNDQVBFRFwiLCA1NDogXCJDTE9TRV9VTkVTQ0FQRURcIiwgNTU6IFwiT1BFTl9QQVJUSUFMXCIsIDYwOiBcIk9QRU5fUEFSVElBTF9CTE9DS1wiLCA2NTogXCJPUEVOX1NFWFBSXCIsIDY4OiBcIkNMT1NFX1NFWFBSXCIsIDcyOiBcIklEXCIsIDczOiBcIkVRVUFMU1wiLCA3NTogXCJPUEVOX0JMT0NLX1BBUkFNU1wiLCA3NzogXCJDTE9TRV9CTE9DS19QQVJBTVNcIiwgODA6IFwiU1RSSU5HXCIsIDgxOiBcIk5VTUJFUlwiLCA4MjogXCJCT09MRUFOXCIsIDgzOiBcIlVOREVGSU5FRFwiLCA4NDogXCJOVUxMXCIsIDg1OiBcIkRBVEFcIiwgODc6IFwiU0VQXCIgfSxcblx0ICAgICAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMl0sIFs0LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbMTMsIDFdLCBbMTAsIDNdLCBbMTYsIDVdLCBbOSwgNF0sIFs5LCA0XSwgWzI0LCA2XSwgWzI3LCA2XSwgWzM4LCA2XSwgWzQzLCAyXSwgWzQ1LCAzXSwgWzQ1LCAxXSwgWzI2LCAzXSwgWzgsIDVdLCBbOCwgNV0sIFsxMSwgNV0sIFsxMiwgM10sIFs1OSwgNV0sIFs2MywgMV0sIFs2MywgMV0sIFs2NCwgNV0sIFs2OSwgMV0sIFs3MSwgM10sIFs3NCwgM10sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFs1NiwgMV0sIFs1NiwgMV0sIFs3OSwgMl0sIFs3OCwgMV0sIFs4NiwgM10sIFs4NiwgMV0sIFs2LCAwXSwgWzYsIDJdLCBbMTcsIDFdLCBbMTcsIDJdLCBbMjEsIDBdLCBbMjEsIDJdLCBbMjIsIDBdLCBbMjIsIDFdLCBbMjUsIDBdLCBbMjUsIDFdLCBbMjgsIDBdLCBbMjgsIDFdLCBbMzAsIDBdLCBbMzAsIDJdLCBbMzEsIDBdLCBbMzEsIDFdLCBbMzIsIDBdLCBbMzIsIDFdLCBbMzUsIDBdLCBbMzUsIDJdLCBbMzYsIDBdLCBbMzYsIDFdLCBbMzcsIDBdLCBbMzcsIDFdLCBbNDAsIDBdLCBbNDAsIDJdLCBbNDEsIDBdLCBbNDEsIDFdLCBbNDIsIDBdLCBbNDIsIDFdLCBbNDYsIDBdLCBbNDYsIDFdLCBbNDksIDBdLCBbNDksIDJdLCBbNTAsIDBdLCBbNTAsIDFdLCBbNTIsIDBdLCBbNTIsIDJdLCBbNTMsIDBdLCBbNTMsIDFdLCBbNTcsIDBdLCBbNTcsIDJdLCBbNTgsIDBdLCBbNTgsIDFdLCBbNjEsIDBdLCBbNjEsIDJdLCBbNjIsIDBdLCBbNjIsIDFdLCBbNjYsIDBdLCBbNjYsIDJdLCBbNjcsIDBdLCBbNjcsIDFdLCBbNzAsIDFdLCBbNzAsIDJdLCBbNzYsIDFdLCBbNzYsIDJdXSxcblx0ICAgICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG5cblx0ICAgICAgICAgICAgdmFyICQwID0gJCQubGVuZ3RoIC0gMTtcblx0ICAgICAgICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkWyQwIC0gMV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVByb2dyYW0oJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb21tZW50U3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHl5LnN0cmlwQ29tbWVudCgkJFskMF0pLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMF0sICQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ29udGVudFN0YXRlbWVudCcsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsOiAkJFskMF0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAkJFskMF0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVJhd0Jsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAzXSwgcGFyYW1zOiAkJFskMCAtIDJdLCBoYXNoOiAkJFskMCAtIDFdIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIGZhbHNlLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgdHJ1ZSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgb3BlbjogJCRbJDAgLSA1XSwgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAxXSwgJCRbJDAgLSAxXSksIHByb2dyYW06ICQkWyQwXSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxOTpcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaW52ZXJzZSA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtID0geXkucHJlcGFyZVByb2dyYW0oW2ludmVyc2VdLCAkJFskMCAtIDFdLmxvYyk7XG5cdCAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS5jaGFpbmVkID0gdHJ1ZTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgc3RyaXA6ICQkWyQwIC0gMl0uc3RyaXAsIHByb2dyYW06IHByb2dyYW0sIGNoYWluOiB0cnVlIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gMl0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVNdXN0YWNoZSgkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMCAtIDRdLCB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQYXJ0aWFsU3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJCRbJDAgLSAzXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiAkJFskMCAtIDJdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiAkJFskMCAtIDFdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpbmRlbnQ6ICcnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQYXJ0aWFsQmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDNdLCBwYXJhbXM6ICQkWyQwIC0gMl0sIGhhc2g6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1N1YkV4cHJlc3Npb24nLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAkJFskMCAtIDNdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6ICQkWyQwIC0gMV0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnSGFzaCcsIHBhaXJzOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdIYXNoUGFpcicsIGtleTogeXkuaWQoJCRbJDAgLSAyXSksIHZhbHVlOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5pZCgkJFskMCAtIDFdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ1N0cmluZ0xpdGVyYWwnLCB2YWx1ZTogJCRbJDBdLCBvcmlnaW5hbDogJCRbJDBdLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnTnVtYmVyTGl0ZXJhbCcsIHZhbHVlOiBOdW1iZXIoJCRbJDBdKSwgb3JpZ2luYWw6IE51bWJlcigkJFskMF0pLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnQm9vbGVhbkxpdGVyYWwnLCB2YWx1ZTogJCRbJDBdID09PSAndHJ1ZScsIG9yaWdpbmFsOiAkJFskMF0gPT09ICd0cnVlJywgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ1VuZGVmaW5lZExpdGVyYWwnLCBvcmlnaW5hbDogdW5kZWZpbmVkLCB2YWx1ZTogdW5kZWZpbmVkLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnTnVsbExpdGVyYWwnLCBvcmlnaW5hbDogbnVsbCwgdmFsdWU6IG51bGwsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhdGgodHJ1ZSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhdGgoZmFsc2UsICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMl0ucHVzaCh7IHBhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0sIHNlcGFyYXRvcjogJCRbJDAgLSAxXSB9KTt0aGlzLiQgPSAkJFskMCAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0NTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbeyBwYXJ0OiB5eS5pZCgkJFskMF0pLCBvcmlnaW5hbDogJCRbJDBdIH1dO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Njpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDc6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDUxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2NTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDcxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDgyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Mzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg3OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5NTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgdGFibGU6IFt7IDM6IDEsIDQ6IDIsIDU6IFsyLCA0Nl0sIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyAxOiBbM10gfSwgeyA1OiBbMSwgNF0gfSwgeyA1OiBbMiwgMl0sIDc6IDUsIDg6IDYsIDk6IDcsIDEwOiA4LCAxMTogOSwgMTI6IDEwLCAxMzogMTEsIDE0OiBbMSwgMTJdLCAxNTogWzEsIDIwXSwgMTY6IDE3LCAxOTogWzEsIDIzXSwgMjQ6IDE1LCAyNzogMTYsIDI5OiBbMSwgMjFdLCAzNDogWzEsIDIyXSwgMzk6IFsyLCAyXSwgNDQ6IFsyLCAyXSwgNDc6IFsyLCAyXSwgNDg6IFsxLCAxM10sIDUxOiBbMSwgMTRdLCA1NTogWzEsIDE4XSwgNTk6IDE5LCA2MDogWzEsIDI0XSB9LCB7IDE6IFsyLCAxXSB9LCB7IDU6IFsyLCA0N10sIDE0OiBbMiwgNDddLCAxNTogWzIsIDQ3XSwgMTk6IFsyLCA0N10sIDI5OiBbMiwgNDddLCAzNDogWzIsIDQ3XSwgMzk6IFsyLCA0N10sIDQ0OiBbMiwgNDddLCA0NzogWzIsIDQ3XSwgNDg6IFsyLCA0N10sIDUxOiBbMiwgNDddLCA1NTogWzIsIDQ3XSwgNjA6IFsyLCA0N10gfSwgeyA1OiBbMiwgM10sIDE0OiBbMiwgM10sIDE1OiBbMiwgM10sIDE5OiBbMiwgM10sIDI5OiBbMiwgM10sIDM0OiBbMiwgM10sIDM5OiBbMiwgM10sIDQ0OiBbMiwgM10sIDQ3OiBbMiwgM10sIDQ4OiBbMiwgM10sIDUxOiBbMiwgM10sIDU1OiBbMiwgM10sIDYwOiBbMiwgM10gfSwgeyA1OiBbMiwgNF0sIDE0OiBbMiwgNF0sIDE1OiBbMiwgNF0sIDE5OiBbMiwgNF0sIDI5OiBbMiwgNF0sIDM0OiBbMiwgNF0sIDM5OiBbMiwgNF0sIDQ0OiBbMiwgNF0sIDQ3OiBbMiwgNF0sIDQ4OiBbMiwgNF0sIDUxOiBbMiwgNF0sIDU1OiBbMiwgNF0sIDYwOiBbMiwgNF0gfSwgeyA1OiBbMiwgNV0sIDE0OiBbMiwgNV0sIDE1OiBbMiwgNV0sIDE5OiBbMiwgNV0sIDI5OiBbMiwgNV0sIDM0OiBbMiwgNV0sIDM5OiBbMiwgNV0sIDQ0OiBbMiwgNV0sIDQ3OiBbMiwgNV0sIDQ4OiBbMiwgNV0sIDUxOiBbMiwgNV0sIDU1OiBbMiwgNV0sIDYwOiBbMiwgNV0gfSwgeyA1OiBbMiwgNl0sIDE0OiBbMiwgNl0sIDE1OiBbMiwgNl0sIDE5OiBbMiwgNl0sIDI5OiBbMiwgNl0sIDM0OiBbMiwgNl0sIDM5OiBbMiwgNl0sIDQ0OiBbMiwgNl0sIDQ3OiBbMiwgNl0sIDQ4OiBbMiwgNl0sIDUxOiBbMiwgNl0sIDU1OiBbMiwgNl0sIDYwOiBbMiwgNl0gfSwgeyA1OiBbMiwgN10sIDE0OiBbMiwgN10sIDE1OiBbMiwgN10sIDE5OiBbMiwgN10sIDI5OiBbMiwgN10sIDM0OiBbMiwgN10sIDM5OiBbMiwgN10sIDQ0OiBbMiwgN10sIDQ3OiBbMiwgN10sIDQ4OiBbMiwgN10sIDUxOiBbMiwgN10sIDU1OiBbMiwgN10sIDYwOiBbMiwgN10gfSwgeyA1OiBbMiwgOF0sIDE0OiBbMiwgOF0sIDE1OiBbMiwgOF0sIDE5OiBbMiwgOF0sIDI5OiBbMiwgOF0sIDM0OiBbMiwgOF0sIDM5OiBbMiwgOF0sIDQ0OiBbMiwgOF0sIDQ3OiBbMiwgOF0sIDQ4OiBbMiwgOF0sIDUxOiBbMiwgOF0sIDU1OiBbMiwgOF0sIDYwOiBbMiwgOF0gfSwgeyA1OiBbMiwgOV0sIDE0OiBbMiwgOV0sIDE1OiBbMiwgOV0sIDE5OiBbMiwgOV0sIDI5OiBbMiwgOV0sIDM0OiBbMiwgOV0sIDM5OiBbMiwgOV0sIDQ0OiBbMiwgOV0sIDQ3OiBbMiwgOV0sIDQ4OiBbMiwgOV0sIDUxOiBbMiwgOV0sIDU1OiBbMiwgOV0sIDYwOiBbMiwgOV0gfSwgeyAyMDogMjUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDM2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDM3LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDogMzgsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDEzOiA0MCwgMTU6IFsxLCAyMF0sIDE3OiAzOSB9LCB7IDIwOiA0MiwgNTY6IDQxLCA2NDogNDMsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDQ1LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDU6IFsyLCAxMF0sIDE0OiBbMiwgMTBdLCAxNTogWzIsIDEwXSwgMTg6IFsyLCAxMF0sIDE5OiBbMiwgMTBdLCAyOTogWzIsIDEwXSwgMzQ6IFsyLCAxMF0sIDM5OiBbMiwgMTBdLCA0NDogWzIsIDEwXSwgNDc6IFsyLCAxMF0sIDQ4OiBbMiwgMTBdLCA1MTogWzIsIDEwXSwgNTU6IFsyLCAxMF0sIDYwOiBbMiwgMTBdIH0sIHsgMjA6IDQ2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0NywgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDgsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQyLCA1NjogNDksIDY0OiA0MywgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsyLCA3OF0sIDQ5OiA1MCwgNjU6IFsyLCA3OF0sIDcyOiBbMiwgNzhdLCA4MDogWzIsIDc4XSwgODE6IFsyLCA3OF0sIDgyOiBbMiwgNzhdLCA4MzogWzIsIDc4XSwgODQ6IFsyLCA3OF0sIDg1OiBbMiwgNzhdIH0sIHsgMjM6IFsyLCAzM10sIDMzOiBbMiwgMzNdLCA1NDogWzIsIDMzXSwgNjU6IFsyLCAzM10sIDY4OiBbMiwgMzNdLCA3MjogWzIsIDMzXSwgNzU6IFsyLCAzM10sIDgwOiBbMiwgMzNdLCA4MTogWzIsIDMzXSwgODI6IFsyLCAzM10sIDgzOiBbMiwgMzNdLCA4NDogWzIsIDMzXSwgODU6IFsyLCAzM10gfSwgeyAyMzogWzIsIDM0XSwgMzM6IFsyLCAzNF0sIDU0OiBbMiwgMzRdLCA2NTogWzIsIDM0XSwgNjg6IFsyLCAzNF0sIDcyOiBbMiwgMzRdLCA3NTogWzIsIDM0XSwgODA6IFsyLCAzNF0sIDgxOiBbMiwgMzRdLCA4MjogWzIsIDM0XSwgODM6IFsyLCAzNF0sIDg0OiBbMiwgMzRdLCA4NTogWzIsIDM0XSB9LCB7IDIzOiBbMiwgMzVdLCAzMzogWzIsIDM1XSwgNTQ6IFsyLCAzNV0sIDY1OiBbMiwgMzVdLCA2ODogWzIsIDM1XSwgNzI6IFsyLCAzNV0sIDc1OiBbMiwgMzVdLCA4MDogWzIsIDM1XSwgODE6IFsyLCAzNV0sIDgyOiBbMiwgMzVdLCA4MzogWzIsIDM1XSwgODQ6IFsyLCAzNV0sIDg1OiBbMiwgMzVdIH0sIHsgMjM6IFsyLCAzNl0sIDMzOiBbMiwgMzZdLCA1NDogWzIsIDM2XSwgNjU6IFsyLCAzNl0sIDY4OiBbMiwgMzZdLCA3MjogWzIsIDM2XSwgNzU6IFsyLCAzNl0sIDgwOiBbMiwgMzZdLCA4MTogWzIsIDM2XSwgODI6IFsyLCAzNl0sIDgzOiBbMiwgMzZdLCA4NDogWzIsIDM2XSwgODU6IFsyLCAzNl0gfSwgeyAyMzogWzIsIDM3XSwgMzM6IFsyLCAzN10sIDU0OiBbMiwgMzddLCA2NTogWzIsIDM3XSwgNjg6IFsyLCAzN10sIDcyOiBbMiwgMzddLCA3NTogWzIsIDM3XSwgODA6IFsyLCAzN10sIDgxOiBbMiwgMzddLCA4MjogWzIsIDM3XSwgODM6IFsyLCAzN10sIDg0OiBbMiwgMzddLCA4NTogWzIsIDM3XSB9LCB7IDIzOiBbMiwgMzhdLCAzMzogWzIsIDM4XSwgNTQ6IFsyLCAzOF0sIDY1OiBbMiwgMzhdLCA2ODogWzIsIDM4XSwgNzI6IFsyLCAzOF0sIDc1OiBbMiwgMzhdLCA4MDogWzIsIDM4XSwgODE6IFsyLCAzOF0sIDgyOiBbMiwgMzhdLCA4MzogWzIsIDM4XSwgODQ6IFsyLCAzOF0sIDg1OiBbMiwgMzhdIH0sIHsgMjM6IFsyLCAzOV0sIDMzOiBbMiwgMzldLCA1NDogWzIsIDM5XSwgNjU6IFsyLCAzOV0sIDY4OiBbMiwgMzldLCA3MjogWzIsIDM5XSwgNzU6IFsyLCAzOV0sIDgwOiBbMiwgMzldLCA4MTogWzIsIDM5XSwgODI6IFsyLCAzOV0sIDgzOiBbMiwgMzldLCA4NDogWzIsIDM5XSwgODU6IFsyLCAzOV0gfSwgeyAyMzogWzIsIDQzXSwgMzM6IFsyLCA0M10sIDU0OiBbMiwgNDNdLCA2NTogWzIsIDQzXSwgNjg6IFsyLCA0M10sIDcyOiBbMiwgNDNdLCA3NTogWzIsIDQzXSwgODA6IFsyLCA0M10sIDgxOiBbMiwgNDNdLCA4MjogWzIsIDQzXSwgODM6IFsyLCA0M10sIDg0OiBbMiwgNDNdLCA4NTogWzIsIDQzXSwgODc6IFsxLCA1MV0gfSwgeyA3MjogWzEsIDM1XSwgODY6IDUyIH0sIHsgMjM6IFsyLCA0NV0sIDMzOiBbMiwgNDVdLCA1NDogWzIsIDQ1XSwgNjU6IFsyLCA0NV0sIDY4OiBbMiwgNDVdLCA3MjogWzIsIDQ1XSwgNzU6IFsyLCA0NV0sIDgwOiBbMiwgNDVdLCA4MTogWzIsIDQ1XSwgODI6IFsyLCA0NV0sIDgzOiBbMiwgNDVdLCA4NDogWzIsIDQ1XSwgODU6IFsyLCA0NV0sIDg3OiBbMiwgNDVdIH0sIHsgNTI6IDUzLCA1NDogWzIsIDgyXSwgNjU6IFsyLCA4Ml0sIDcyOiBbMiwgODJdLCA4MDogWzIsIDgyXSwgODE6IFsyLCA4Ml0sIDgyOiBbMiwgODJdLCA4MzogWzIsIDgyXSwgODQ6IFsyLCA4Ml0sIDg1OiBbMiwgODJdIH0sIHsgMjU6IDU0LCAzODogNTYsIDM5OiBbMSwgNThdLCA0MzogNTcsIDQ0OiBbMSwgNTldLCA0NTogNTUsIDQ3OiBbMiwgNTRdIH0sIHsgMjg6IDYwLCA0MzogNjEsIDQ0OiBbMSwgNTldLCA0NzogWzIsIDU2XSB9LCB7IDEzOiA2MywgMTU6IFsxLCAyMF0sIDE4OiBbMSwgNjJdIH0sIHsgMTU6IFsyLCA0OF0sIDE4OiBbMiwgNDhdIH0sIHsgMzM6IFsyLCA4Nl0sIDU3OiA2NCwgNjU6IFsyLCA4Nl0sIDcyOiBbMiwgODZdLCA4MDogWzIsIDg2XSwgODE6IFsyLCA4Nl0sIDgyOiBbMiwgODZdLCA4MzogWzIsIDg2XSwgODQ6IFsyLCA4Nl0sIDg1OiBbMiwgODZdIH0sIHsgMzM6IFsyLCA0MF0sIDY1OiBbMiwgNDBdLCA3MjogWzIsIDQwXSwgODA6IFsyLCA0MF0sIDgxOiBbMiwgNDBdLCA4MjogWzIsIDQwXSwgODM6IFsyLCA0MF0sIDg0OiBbMiwgNDBdLCA4NTogWzIsIDQwXSB9LCB7IDMzOiBbMiwgNDFdLCA2NTogWzIsIDQxXSwgNzI6IFsyLCA0MV0sIDgwOiBbMiwgNDFdLCA4MTogWzIsIDQxXSwgODI6IFsyLCA0MV0sIDgzOiBbMiwgNDFdLCA4NDogWzIsIDQxXSwgODU6IFsyLCA0MV0gfSwgeyAyMDogNjUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjY6IDY2LCA0NzogWzEsIDY3XSB9LCB7IDMwOiA2OCwgMzM6IFsyLCA1OF0sIDY1OiBbMiwgNThdLCA3MjogWzIsIDU4XSwgNzU6IFsyLCA1OF0sIDgwOiBbMiwgNThdLCA4MTogWzIsIDU4XSwgODI6IFsyLCA1OF0sIDgzOiBbMiwgNThdLCA4NDogWzIsIDU4XSwgODU6IFsyLCA1OF0gfSwgeyAzMzogWzIsIDY0XSwgMzU6IDY5LCA2NTogWzIsIDY0XSwgNzI6IFsyLCA2NF0sIDc1OiBbMiwgNjRdLCA4MDogWzIsIDY0XSwgODE6IFsyLCA2NF0sIDgyOiBbMiwgNjRdLCA4MzogWzIsIDY0XSwgODQ6IFsyLCA2NF0sIDg1OiBbMiwgNjRdIH0sIHsgMjE6IDcwLCAyMzogWzIsIDUwXSwgNjU6IFsyLCA1MF0sIDcyOiBbMiwgNTBdLCA4MDogWzIsIDUwXSwgODE6IFsyLCA1MF0sIDgyOiBbMiwgNTBdLCA4MzogWzIsIDUwXSwgODQ6IFsyLCA1MF0sIDg1OiBbMiwgNTBdIH0sIHsgMzM6IFsyLCA5MF0sIDYxOiA3MSwgNjU6IFsyLCA5MF0sIDcyOiBbMiwgOTBdLCA4MDogWzIsIDkwXSwgODE6IFsyLCA5MF0sIDgyOiBbMiwgOTBdLCA4MzogWzIsIDkwXSwgODQ6IFsyLCA5MF0sIDg1OiBbMiwgOTBdIH0sIHsgMjA6IDc1LCAzMzogWzIsIDgwXSwgNTA6IDcyLCA2MzogNzMsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA3NCwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNzI6IFsxLCA4MF0gfSwgeyAyMzogWzIsIDQyXSwgMzM6IFsyLCA0Ml0sIDU0OiBbMiwgNDJdLCA2NTogWzIsIDQyXSwgNjg6IFsyLCA0Ml0sIDcyOiBbMiwgNDJdLCA3NTogWzIsIDQyXSwgODA6IFsyLCA0Ml0sIDgxOiBbMiwgNDJdLCA4MjogWzIsIDQyXSwgODM6IFsyLCA0Ml0sIDg0OiBbMiwgNDJdLCA4NTogWzIsIDQyXSwgODc6IFsxLCA1MV0gfSwgeyAyMDogNzUsIDUzOiA4MSwgNTQ6IFsyLCA4NF0sIDYzOiA4MiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDgzLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogODQsIDQ3OiBbMSwgNjddIH0sIHsgNDc6IFsyLCA1NV0gfSwgeyA0OiA4NSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCAzOTogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDQ3OiBbMiwgMjBdIH0sIHsgMjA6IDg2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDg3LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDI2OiA4OCwgNDc6IFsxLCA2N10gfSwgeyA0NzogWzIsIDU3XSB9LCB7IDU6IFsyLCAxMV0sIDE0OiBbMiwgMTFdLCAxNTogWzIsIDExXSwgMTk6IFsyLCAxMV0sIDI5OiBbMiwgMTFdLCAzNDogWzIsIDExXSwgMzk6IFsyLCAxMV0sIDQ0OiBbMiwgMTFdLCA0NzogWzIsIDExXSwgNDg6IFsyLCAxMV0sIDUxOiBbMiwgMTFdLCA1NTogWzIsIDExXSwgNjA6IFsyLCAxMV0gfSwgeyAxNTogWzIsIDQ5XSwgMTg6IFsyLCA0OV0gfSwgeyAyMDogNzUsIDMzOiBbMiwgODhdLCA1ODogODksIDYzOiA5MCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDkxLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA2NTogWzIsIDk0XSwgNjY6IDkyLCA2ODogWzIsIDk0XSwgNzI6IFsyLCA5NF0sIDgwOiBbMiwgOTRdLCA4MTogWzIsIDk0XSwgODI6IFsyLCA5NF0sIDgzOiBbMiwgOTRdLCA4NDogWzIsIDk0XSwgODU6IFsyLCA5NF0gfSwgeyA1OiBbMiwgMjVdLCAxNDogWzIsIDI1XSwgMTU6IFsyLCAyNV0sIDE5OiBbMiwgMjVdLCAyOTogWzIsIDI1XSwgMzQ6IFsyLCAyNV0sIDM5OiBbMiwgMjVdLCA0NDogWzIsIDI1XSwgNDc6IFsyLCAyNV0sIDQ4OiBbMiwgMjVdLCA1MTogWzIsIDI1XSwgNTU6IFsyLCAyNV0sIDYwOiBbMiwgMjVdIH0sIHsgMjA6IDkzLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzE6IDk0LCAzMzogWzIsIDYwXSwgNjM6IDk1LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTYsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA2MF0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMzOiBbMiwgNjZdLCAzNjogOTcsIDYzOiA5OCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDk5LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc1OiBbMiwgNjZdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAyMjogMTAwLCAyMzogWzIsIDUyXSwgNjM6IDEwMSwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEwMiwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMzogWzIsIDkyXSwgNjI6IDEwMywgNjM6IDEwNCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEwNSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsxLCAxMDZdIH0sIHsgMzM6IFsyLCA3OV0sIDY1OiBbMiwgNzldLCA3MjogWzIsIDc5XSwgODA6IFsyLCA3OV0sIDgxOiBbMiwgNzldLCA4MjogWzIsIDc5XSwgODM6IFsyLCA3OV0sIDg0OiBbMiwgNzldLCA4NTogWzIsIDc5XSB9LCB7IDMzOiBbMiwgODFdIH0sIHsgMjM6IFsyLCAyN10sIDMzOiBbMiwgMjddLCA1NDogWzIsIDI3XSwgNjU6IFsyLCAyN10sIDY4OiBbMiwgMjddLCA3MjogWzIsIDI3XSwgNzU6IFsyLCAyN10sIDgwOiBbMiwgMjddLCA4MTogWzIsIDI3XSwgODI6IFsyLCAyN10sIDgzOiBbMiwgMjddLCA4NDogWzIsIDI3XSwgODU6IFsyLCAyN10gfSwgeyAyMzogWzIsIDI4XSwgMzM6IFsyLCAyOF0sIDU0OiBbMiwgMjhdLCA2NTogWzIsIDI4XSwgNjg6IFsyLCAyOF0sIDcyOiBbMiwgMjhdLCA3NTogWzIsIDI4XSwgODA6IFsyLCAyOF0sIDgxOiBbMiwgMjhdLCA4MjogWzIsIDI4XSwgODM6IFsyLCAyOF0sIDg0OiBbMiwgMjhdLCA4NTogWzIsIDI4XSB9LCB7IDIzOiBbMiwgMzBdLCAzMzogWzIsIDMwXSwgNTQ6IFsyLCAzMF0sIDY4OiBbMiwgMzBdLCA3MTogMTA3LCA3MjogWzEsIDEwOF0sIDc1OiBbMiwgMzBdIH0sIHsgMjM6IFsyLCA5OF0sIDMzOiBbMiwgOThdLCA1NDogWzIsIDk4XSwgNjg6IFsyLCA5OF0sIDcyOiBbMiwgOThdLCA3NTogWzIsIDk4XSB9LCB7IDIzOiBbMiwgNDVdLCAzMzogWzIsIDQ1XSwgNTQ6IFsyLCA0NV0sIDY1OiBbMiwgNDVdLCA2ODogWzIsIDQ1XSwgNzI6IFsyLCA0NV0sIDczOiBbMSwgMTA5XSwgNzU6IFsyLCA0NV0sIDgwOiBbMiwgNDVdLCA4MTogWzIsIDQ1XSwgODI6IFsyLCA0NV0sIDgzOiBbMiwgNDVdLCA4NDogWzIsIDQ1XSwgODU6IFsyLCA0NV0sIDg3OiBbMiwgNDVdIH0sIHsgMjM6IFsyLCA0NF0sIDMzOiBbMiwgNDRdLCA1NDogWzIsIDQ0XSwgNjU6IFsyLCA0NF0sIDY4OiBbMiwgNDRdLCA3MjogWzIsIDQ0XSwgNzU6IFsyLCA0NF0sIDgwOiBbMiwgNDRdLCA4MTogWzIsIDQ0XSwgODI6IFsyLCA0NF0sIDgzOiBbMiwgNDRdLCA4NDogWzIsIDQ0XSwgODU6IFsyLCA0NF0sIDg3OiBbMiwgNDRdIH0sIHsgNTQ6IFsxLCAxMTBdIH0sIHsgNTQ6IFsyLCA4M10sIDY1OiBbMiwgODNdLCA3MjogWzIsIDgzXSwgODA6IFsyLCA4M10sIDgxOiBbMiwgODNdLCA4MjogWzIsIDgzXSwgODM6IFsyLCA4M10sIDg0OiBbMiwgODNdLCA4NTogWzIsIDgzXSB9LCB7IDU0OiBbMiwgODVdIH0sIHsgNTogWzIsIDEzXSwgMTQ6IFsyLCAxM10sIDE1OiBbMiwgMTNdLCAxOTogWzIsIDEzXSwgMjk6IFsyLCAxM10sIDM0OiBbMiwgMTNdLCAzOTogWzIsIDEzXSwgNDQ6IFsyLCAxM10sIDQ3OiBbMiwgMTNdLCA0ODogWzIsIDEzXSwgNTE6IFsyLCAxM10sIDU1OiBbMiwgMTNdLCA2MDogWzIsIDEzXSB9LCB7IDM4OiA1NiwgMzk6IFsxLCA1OF0sIDQzOiA1NywgNDQ6IFsxLCA1OV0sIDQ1OiAxMTIsIDQ2OiAxMTEsIDQ3OiBbMiwgNzZdIH0sIHsgMzM6IFsyLCA3MF0sIDQwOiAxMTMsIDY1OiBbMiwgNzBdLCA3MjogWzIsIDcwXSwgNzU6IFsyLCA3MF0sIDgwOiBbMiwgNzBdLCA4MTogWzIsIDcwXSwgODI6IFsyLCA3MF0sIDgzOiBbMiwgNzBdLCA4NDogWzIsIDcwXSwgODU6IFsyLCA3MF0gfSwgeyA0NzogWzIsIDE4XSB9LCB7IDU6IFsyLCAxNF0sIDE0OiBbMiwgMTRdLCAxNTogWzIsIDE0XSwgMTk6IFsyLCAxNF0sIDI5OiBbMiwgMTRdLCAzNDogWzIsIDE0XSwgMzk6IFsyLCAxNF0sIDQ0OiBbMiwgMTRdLCA0NzogWzIsIDE0XSwgNDg6IFsyLCAxNF0sIDUxOiBbMiwgMTRdLCA1NTogWzIsIDE0XSwgNjA6IFsyLCAxNF0gfSwgeyAzMzogWzEsIDExNF0gfSwgeyAzMzogWzIsIDg3XSwgNjU6IFsyLCA4N10sIDcyOiBbMiwgODddLCA4MDogWzIsIDg3XSwgODE6IFsyLCA4N10sIDgyOiBbMiwgODddLCA4MzogWzIsIDg3XSwgODQ6IFsyLCA4N10sIDg1OiBbMiwgODddIH0sIHsgMzM6IFsyLCA4OV0gfSwgeyAyMDogNzUsIDYzOiAxMTYsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY3OiAxMTUsIDY4OiBbMiwgOTZdLCA2OTogMTE3LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzEsIDExOF0gfSwgeyAzMjogMTE5LCAzMzogWzIsIDYyXSwgNzQ6IDEyMCwgNzU6IFsxLCAxMjFdIH0sIHsgMzM6IFsyLCA1OV0sIDY1OiBbMiwgNTldLCA3MjogWzIsIDU5XSwgNzU6IFsyLCA1OV0sIDgwOiBbMiwgNTldLCA4MTogWzIsIDU5XSwgODI6IFsyLCA1OV0sIDgzOiBbMiwgNTldLCA4NDogWzIsIDU5XSwgODU6IFsyLCA1OV0gfSwgeyAzMzogWzIsIDYxXSwgNzU6IFsyLCA2MV0gfSwgeyAzMzogWzIsIDY4XSwgMzc6IDEyMiwgNzQ6IDEyMywgNzU6IFsxLCAxMjFdIH0sIHsgMzM6IFsyLCA2NV0sIDY1OiBbMiwgNjVdLCA3MjogWzIsIDY1XSwgNzU6IFsyLCA2NV0sIDgwOiBbMiwgNjVdLCA4MTogWzIsIDY1XSwgODI6IFsyLCA2NV0sIDgzOiBbMiwgNjVdLCA4NDogWzIsIDY1XSwgODU6IFsyLCA2NV0gfSwgeyAzMzogWzIsIDY3XSwgNzU6IFsyLCA2N10gfSwgeyAyMzogWzEsIDEyNF0gfSwgeyAyMzogWzIsIDUxXSwgNjU6IFsyLCA1MV0sIDcyOiBbMiwgNTFdLCA4MDogWzIsIDUxXSwgODE6IFsyLCA1MV0sIDgyOiBbMiwgNTFdLCA4MzogWzIsIDUxXSwgODQ6IFsyLCA1MV0sIDg1OiBbMiwgNTFdIH0sIHsgMjM6IFsyLCA1M10gfSwgeyAzMzogWzEsIDEyNV0gfSwgeyAzMzogWzIsIDkxXSwgNjU6IFsyLCA5MV0sIDcyOiBbMiwgOTFdLCA4MDogWzIsIDkxXSwgODE6IFsyLCA5MV0sIDgyOiBbMiwgOTFdLCA4MzogWzIsIDkxXSwgODQ6IFsyLCA5MV0sIDg1OiBbMiwgOTFdIH0sIHsgMzM6IFsyLCA5M10gfSwgeyA1OiBbMiwgMjJdLCAxNDogWzIsIDIyXSwgMTU6IFsyLCAyMl0sIDE5OiBbMiwgMjJdLCAyOTogWzIsIDIyXSwgMzQ6IFsyLCAyMl0sIDM5OiBbMiwgMjJdLCA0NDogWzIsIDIyXSwgNDc6IFsyLCAyMl0sIDQ4OiBbMiwgMjJdLCA1MTogWzIsIDIyXSwgNTU6IFsyLCAyMl0sIDYwOiBbMiwgMjJdIH0sIHsgMjM6IFsyLCA5OV0sIDMzOiBbMiwgOTldLCA1NDogWzIsIDk5XSwgNjg6IFsyLCA5OV0sIDcyOiBbMiwgOTldLCA3NTogWzIsIDk5XSB9LCB7IDczOiBbMSwgMTA5XSB9LCB7IDIwOiA3NSwgNjM6IDEyNiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA1OiBbMiwgMjNdLCAxNDogWzIsIDIzXSwgMTU6IFsyLCAyM10sIDE5OiBbMiwgMjNdLCAyOTogWzIsIDIzXSwgMzQ6IFsyLCAyM10sIDM5OiBbMiwgMjNdLCA0NDogWzIsIDIzXSwgNDc6IFsyLCAyM10sIDQ4OiBbMiwgMjNdLCA1MTogWzIsIDIzXSwgNTU6IFsyLCAyM10sIDYwOiBbMiwgMjNdIH0sIHsgNDc6IFsyLCAxOV0gfSwgeyA0NzogWzIsIDc3XSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA3Ml0sIDQxOiAxMjcsIDYzOiAxMjgsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiAxMjksIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA3Ml0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA1OiBbMiwgMjRdLCAxNDogWzIsIDI0XSwgMTU6IFsyLCAyNF0sIDE5OiBbMiwgMjRdLCAyOTogWzIsIDI0XSwgMzQ6IFsyLCAyNF0sIDM5OiBbMiwgMjRdLCA0NDogWzIsIDI0XSwgNDc6IFsyLCAyNF0sIDQ4OiBbMiwgMjRdLCA1MTogWzIsIDI0XSwgNTU6IFsyLCAyNF0sIDYwOiBbMiwgMjRdIH0sIHsgNjg6IFsxLCAxMzBdIH0sIHsgNjU6IFsyLCA5NV0sIDY4OiBbMiwgOTVdLCA3MjogWzIsIDk1XSwgODA6IFsyLCA5NV0sIDgxOiBbMiwgOTVdLCA4MjogWzIsIDk1XSwgODM6IFsyLCA5NV0sIDg0OiBbMiwgOTVdLCA4NTogWzIsIDk1XSB9LCB7IDY4OiBbMiwgOTddIH0sIHsgNTogWzIsIDIxXSwgMTQ6IFsyLCAyMV0sIDE1OiBbMiwgMjFdLCAxOTogWzIsIDIxXSwgMjk6IFsyLCAyMV0sIDM0OiBbMiwgMjFdLCAzOTogWzIsIDIxXSwgNDQ6IFsyLCAyMV0sIDQ3OiBbMiwgMjFdLCA0ODogWzIsIDIxXSwgNTE6IFsyLCAyMV0sIDU1OiBbMiwgMjFdLCA2MDogWzIsIDIxXSB9LCB7IDMzOiBbMSwgMTMxXSB9LCB7IDMzOiBbMiwgNjNdIH0sIHsgNzI6IFsxLCAxMzNdLCA3NjogMTMyIH0sIHsgMzM6IFsxLCAxMzRdIH0sIHsgMzM6IFsyLCA2OV0gfSwgeyAxNTogWzIsIDEyXSB9LCB7IDE0OiBbMiwgMjZdLCAxNTogWzIsIDI2XSwgMTk6IFsyLCAyNl0sIDI5OiBbMiwgMjZdLCAzNDogWzIsIDI2XSwgNDc6IFsyLCAyNl0sIDQ4OiBbMiwgMjZdLCA1MTogWzIsIDI2XSwgNTU6IFsyLCAyNl0sIDYwOiBbMiwgMjZdIH0sIHsgMjM6IFsyLCAzMV0sIDMzOiBbMiwgMzFdLCA1NDogWzIsIDMxXSwgNjg6IFsyLCAzMV0sIDcyOiBbMiwgMzFdLCA3NTogWzIsIDMxXSB9LCB7IDMzOiBbMiwgNzRdLCA0MjogMTM1LCA3NDogMTM2LCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDcxXSwgNjU6IFsyLCA3MV0sIDcyOiBbMiwgNzFdLCA3NTogWzIsIDcxXSwgODA6IFsyLCA3MV0sIDgxOiBbMiwgNzFdLCA4MjogWzIsIDcxXSwgODM6IFsyLCA3MV0sIDg0OiBbMiwgNzFdLCA4NTogWzIsIDcxXSB9LCB7IDMzOiBbMiwgNzNdLCA3NTogWzIsIDczXSB9LCB7IDIzOiBbMiwgMjldLCAzMzogWzIsIDI5XSwgNTQ6IFsyLCAyOV0sIDY1OiBbMiwgMjldLCA2ODogWzIsIDI5XSwgNzI6IFsyLCAyOV0sIDc1OiBbMiwgMjldLCA4MDogWzIsIDI5XSwgODE6IFsyLCAyOV0sIDgyOiBbMiwgMjldLCA4MzogWzIsIDI5XSwgODQ6IFsyLCAyOV0sIDg1OiBbMiwgMjldIH0sIHsgMTQ6IFsyLCAxNV0sIDE1OiBbMiwgMTVdLCAxOTogWzIsIDE1XSwgMjk6IFsyLCAxNV0sIDM0OiBbMiwgMTVdLCAzOTogWzIsIDE1XSwgNDQ6IFsyLCAxNV0sIDQ3OiBbMiwgMTVdLCA0ODogWzIsIDE1XSwgNTE6IFsyLCAxNV0sIDU1OiBbMiwgMTVdLCA2MDogWzIsIDE1XSB9LCB7IDcyOiBbMSwgMTM4XSwgNzc6IFsxLCAxMzddIH0sIHsgNzI6IFsyLCAxMDBdLCA3NzogWzIsIDEwMF0gfSwgeyAxNDogWzIsIDE2XSwgMTU6IFsyLCAxNl0sIDE5OiBbMiwgMTZdLCAyOTogWzIsIDE2XSwgMzQ6IFsyLCAxNl0sIDQ0OiBbMiwgMTZdLCA0NzogWzIsIDE2XSwgNDg6IFsyLCAxNl0sIDUxOiBbMiwgMTZdLCA1NTogWzIsIDE2XSwgNjA6IFsyLCAxNl0gfSwgeyAzMzogWzEsIDEzOV0gfSwgeyAzMzogWzIsIDc1XSB9LCB7IDMzOiBbMiwgMzJdIH0sIHsgNzI6IFsyLCAxMDFdLCA3NzogWzIsIDEwMV0gfSwgeyAxNDogWzIsIDE3XSwgMTU6IFsyLCAxN10sIDE5OiBbMiwgMTddLCAyOTogWzIsIDE3XSwgMzQ6IFsyLCAxN10sIDM5OiBbMiwgMTddLCA0NDogWzIsIDE3XSwgNDc6IFsyLCAxN10sIDQ4OiBbMiwgMTddLCA1MTogWzIsIDE3XSwgNTU6IFsyLCAxN10sIDYwOiBbMiwgMTddIH1dLFxuXHQgICAgICAgIGRlZmF1bHRBY3Rpb25zOiB7IDQ6IFsyLCAxXSwgNTU6IFsyLCA1NV0sIDU3OiBbMiwgMjBdLCA2MTogWzIsIDU3XSwgNzQ6IFsyLCA4MV0sIDgzOiBbMiwgODVdLCA4NzogWzIsIDE4XSwgOTE6IFsyLCA4OV0sIDEwMjogWzIsIDUzXSwgMTA1OiBbMiwgOTNdLCAxMTE6IFsyLCAxOV0sIDExMjogWzIsIDc3XSwgMTE3OiBbMiwgOTddLCAxMjA6IFsyLCA2M10sIDEyMzogWzIsIDY5XSwgMTI0OiBbMiwgMTJdLCAxMzY6IFsyLCA3NV0sIDEzNzogWzIsIDMyXSB9LFxuXHQgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG5cdCAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcblx0ICAgICAgICAgICAgICAgIHN0YWNrID0gWzBdLFxuXHQgICAgICAgICAgICAgICAgdnN0YWNrID0gW251bGxdLFxuXHQgICAgICAgICAgICAgICAgbHN0YWNrID0gW10sXG5cdCAgICAgICAgICAgICAgICB0YWJsZSA9IHRoaXMudGFibGUsXG5cdCAgICAgICAgICAgICAgICB5eXRleHQgPSBcIlwiLFxuXHQgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSAwLFxuXHQgICAgICAgICAgICAgICAgeXlsZW5nID0gMCxcblx0ICAgICAgICAgICAgICAgIHJlY292ZXJpbmcgPSAwLFxuXHQgICAgICAgICAgICAgICAgVEVSUk9SID0gMixcblx0ICAgICAgICAgICAgICAgIEVPRiA9IDE7XG5cdCAgICAgICAgICAgIHRoaXMubGV4ZXIuc2V0SW5wdXQoaW5wdXQpO1xuXHQgICAgICAgICAgICB0aGlzLmxleGVyLnl5ID0gdGhpcy55eTtcblx0ICAgICAgICAgICAgdGhpcy55eS5sZXhlciA9IHRoaXMubGV4ZXI7XG5cdCAgICAgICAgICAgIHRoaXMueXkucGFyc2VyID0gdGhpcztcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxleGVyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB0aGlzLmxleGVyLnl5bGxvYyA9IHt9O1xuXHQgICAgICAgICAgICB2YXIgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcblx0ICAgICAgICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuXHQgICAgICAgICAgICB2YXIgcmFuZ2VzID0gdGhpcy5sZXhlci5vcHRpb25zICYmIHRoaXMubGV4ZXIub3B0aW9ucy5yYW5nZXM7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHRoaXMucGFyc2VFcnJvciA9IHRoaXMueXkucGFyc2VFcnJvcjtcblx0ICAgICAgICAgICAgZnVuY3Rpb24gcG9wU3RhY2sobikge1xuXHQgICAgICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gc3RhY2subGVuZ3RoIC0gMiAqIG47XG5cdCAgICAgICAgICAgICAgICB2c3RhY2subGVuZ3RoID0gdnN0YWNrLmxlbmd0aCAtIG47XG5cdCAgICAgICAgICAgICAgICBsc3RhY2subGVuZ3RoID0gbHN0YWNrLmxlbmd0aCAtIG47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZnVuY3Rpb24gbGV4KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHRva2VuO1xuXHQgICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLmxleGVyLmxleCgpIHx8IDE7XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgc3ltYm9sLFxuXHQgICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wsXG5cdCAgICAgICAgICAgICAgICBzdGF0ZSxcblx0ICAgICAgICAgICAgICAgIGFjdGlvbixcblx0ICAgICAgICAgICAgICAgIGEsXG5cdCAgICAgICAgICAgICAgICByLFxuXHQgICAgICAgICAgICAgICAgeXl2YWwgPSB7fSxcblx0ICAgICAgICAgICAgICAgIHAsXG5cdCAgICAgICAgICAgICAgICBsZW4sXG5cdCAgICAgICAgICAgICAgICBuZXdTdGF0ZSxcblx0ICAgICAgICAgICAgICAgIGV4cGVjdGVkO1xuXHQgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghcmVjb3ZlcmluZykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKSBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiAyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleGVyLnNob3dQb3NpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIGV4cGVjdGVkLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIjtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IDEgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7IHRleHQ6IHRoaXMubGV4ZXIubWF0Y2gsIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsIGxpbmU6IHRoaXMubGV4ZXIueXlsaW5lbm8sIGxvYzogeXlsb2MsIGV4cGVjdGVkOiBleHBlY3RlZCB9KTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCB0b2tlbjogXCIgKyBzeW1ib2wpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcblx0ICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3ltYm9sKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2godGhpcy5sZXhlci55eXRleHQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sucHVzaCh0aGlzLmxleGVyLnl5bGxvYyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYWN0aW9uWzFdKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmVFcnJvclN5bWJvbCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsZW5nID0gdGhpcy5sZXhlci55eWxlbmc7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXRleHQgPSB0aGlzLmxleGVyLnl5dGV4dDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGluZW5vID0gdGhpcy5sZXhlci55eWxpbmVubztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bG9jID0gdGhpcy5sZXhlci55eWxsb2M7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3ZlcmluZyA+IDApIHJlY292ZXJpbmctLTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IHByZUVycm9yU3ltYm9sO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wgPSBudWxsO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gdGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVsxXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuJCA9IHZzdGFja1t2c3RhY2subGVuZ3RoIC0gbGVuXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuXyQgPSB7IGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSwgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSwgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbiwgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW4gfTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSwgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHl5dmFsLCB5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHRoaXMueXksIGFjdGlvblsxXSwgdnN0YWNrLCBsc3RhY2spO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZzdGFjayA9IHZzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qIEppc29uIGdlbmVyYXRlZCBsZXhlciAqL1xuXHQgICAgdmFyIGxleGVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgbGV4ZXIgPSB7IEVPRjogMSxcblx0ICAgICAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHNldElucHV0OiBmdW5jdGlvbiBzZXRJbnB1dChpbnB1dCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9sZXNzID0gdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gJyc7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gWydJTklUSUFMJ107XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAwLCBsYXN0X2xpbmU6IDEsIGxhc3RfY29sdW1uOiAwIH07XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykgdGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF07XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uIGlucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nKys7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCsrO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcblx0ICAgICAgICAgICAgICAgIGlmIChsaW5lcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrO1xuXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGNoO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB1bnB1dDogZnVuY3Rpb24gdW5wdXQoY2gpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBsZW4gLSAxKTtcblx0ICAgICAgICAgICAgICAgIC8vdGhpcy55eWxlbmcgLT0gbGVuO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuXHQgICAgICAgICAgICAgICAgdmFyIG9sZExpbmVzID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcblxuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuXHQgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG5cdCAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxuXHQgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIG1vcmU6IGZ1bmN0aW9uIG1vcmUoKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBsZXNzOiBmdW5jdGlvbiBsZXNzKG4pIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24gcGFzdElucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbiB1cGNvbWluZ0lucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIG5leHQgPSB0aGlzLm1hdGNoO1xuXHQgICAgICAgICAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcblx0ICAgICAgICAgICAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIG5leHQubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uIHNob3dQb3NpdGlvbigpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuXHQgICAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocHJlLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMgKyBcIl5cIjtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB0aGlzLmRvbmUgPSB0cnVlO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4LCBjb2wsIGxpbmVzO1xuXHQgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9tb3JlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSAnJztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gJyc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdGVtcE1hdGNoO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGxpbmVzID0gbWF0Y2hbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lcykgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBtYXRjaFswXS5sZW5ndGggfTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IG1hdGNoO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgcnVsZXNbaW5kZXhdLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbikgcmV0dXJuIHRva2VuO2Vsc2UgcmV0dXJuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKCdMZXhpY2FsIGVycm9yIG9uIGxpbmUgJyArICh0aGlzLnl5bGluZW5vICsgMSkgKyAnLiBVbnJlY29nbml6ZWQgdGV4dC5cXG4nICsgdGhpcy5zaG93UG9zaXRpb24oKSwgeyB0ZXh0OiBcIlwiLCB0b2tlbjogbnVsbCwgbGluZTogdGhpcy55eWxpbmVubyB9KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMubmV4dCgpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHBvcFN0YXRlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbiBfY3VycmVudFJ1bGVzKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB0b3BTdGF0ZTogZnVuY3Rpb24gdG9wU3RhdGUoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDJdO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihjb25kaXRpb24pO1xuXHQgICAgICAgICAgICB9IH07XG5cdCAgICAgICAgbGV4ZXIub3B0aW9ucyA9IHt9O1xuXHQgICAgICAgIGxleGVyLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbiBhbm9ueW1vdXMoeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlQpIHtcblxuXHQgICAgICAgICAgICBmdW5jdGlvbiBzdHJpcChzdGFydCwgZW5kKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4geXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKHN0YXJ0LCB5eV8ueXlsZW5nIC0gZW5kKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHZhciBZWVNUQVRFID0gWVlfU1RBUlQ7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAwOlxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0yKSA9PT0gXCJcXFxcXFxcXFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwKDAsIDEpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0xKSA9PT0gXCJcXFxcXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJlbXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeXlfLnl5dGV4dCkgcmV0dXJuIDE1O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtyZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSB1c2luZyBgdGhpcy50b3BTdGF0ZSgpYCBiZWxvdywgYnV0IGl0IGN1cnJlbnRseVxuXHQgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdGhlIHNlY29uZCB0b3AgaW5zdGVhZCBvZiB0aGUgZmlyc3QgdG9wLiBPcGVuZWQgYW5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSBhYm91dCBpdCBhdCBodHRwczovL2dpdGh1Yi5jb20vemFhY2gvamlzb24vaXNzdWVzLzI5MVxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0gPT09ICdyYXcnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zdWJzdHIoNSwgeXlfLnl5bGVuZyAtIDkpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0VORF9SQVdfQkxPQ0snO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE0O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjM7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ3O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMzQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDUxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wdXQoeXlfLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ2NvbScpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTQ7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB3aGl0ZXNwYWNlXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNTQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gMzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSBzdHJpcCgxLCAyKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJyk7cmV0dXJuIDgwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0gc3RyaXAoMSwgMikucmVwbGFjZSgvXFxcXCcvZywgXCInXCIpO3JldHVybiA4MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgzO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4MTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXFxcXChbXFxcXFxcXV0pL2csICckMScpO3JldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdJTlZBTElEJztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIGxleGVyLnJ1bGVzID0gWy9eKD86W15cXHgwMF0qPyg/PShcXHtcXHspKSkvLCAvXig/OlteXFx4MDBdKykvLCAvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sIC9eKD86XFx7XFx7XFx7XFx7KD89W15cXC9dKSkvLCAvXig/Olxce1xce1xce1xce1xcL1teXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz1bPX1cXHNcXC8uXSlcXH1cXH1cXH1cXH0pLywgL14oPzpbXlxceDAwXSo/KD89KFxce1xce1xce1xceykpKS8sIC9eKD86W1xcc1xcU10qPy0tKH4pP1xcfVxcfSkvLCAvXig/OlxcKCkvLCAvXig/OlxcKSkvLCAvXig/Olxce1xce1xce1xceykvLCAvXig/OlxcfVxcfVxcfVxcfSkvLCAvXig/Olxce1xceyh+KT8+KS8sIC9eKD86XFx7XFx7KH4pPyM+KS8sIC9eKD86XFx7XFx7KH4pPyNcXCo/KS8sIC9eKD86XFx7XFx7KH4pP1xcLykvLCAvXig/Olxce1xceyh+KT9cXF5cXHMqKH4pP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xcXikvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxcYikvLCAvXig/Olxce1xceyh+KT9cXHspLywgL14oPzpcXHtcXHsofik/JikvLCAvXig/Olxce1xceyh+KT8hLS0pLywgL14oPzpcXHtcXHsofik/IVtcXHNcXFNdKj9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFwqPykvLCAvXig/Oj0pLywgL14oPzpcXC5cXC4pLywgL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLCAvXig/OltcXC8uXSkvLCAvXig/OlxccyspLywgL14oPzpcXH0ofik/XFx9XFx9KS8sIC9eKD86KH4pP1xcfVxcfSkvLCAvXig/OlwiKFxcXFxbXCJdfFteXCJdKSpcIikvLCAvXig/OicoXFxcXFsnXXxbXiddKSonKS8sIC9eKD86QCkvLCAvXig/OnRydWUoPz0oW359XFxzKV0pKSkvLCAvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywgL14oPzp1bmRlZmluZWQoPz0oW359XFxzKV0pKSkvLCAvXig/Om51bGwoPz0oW359XFxzKV0pKSkvLCAvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLCAvXig/OmFzXFxzK1xcfCkvLCAvXig/OlxcfCkvLCAvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sIC9eKD86XFxbKFxcXFxcXF18W15cXF1dKSpcXF0pLywgL14oPzouKS8sIC9eKD86JCkvXTtcblx0ICAgICAgICBsZXhlci5jb25kaXRpb25zID0geyBcIm11XCI6IHsgXCJydWxlc1wiOiBbNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJlbXVcIjogeyBcInJ1bGVzXCI6IFsyXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb21cIjogeyBcInJ1bGVzXCI6IFs2XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJyYXdcIjogeyBcInJ1bGVzXCI6IFszLCA0LCA1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgNDRdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfTtcblx0ICAgICAgICByZXR1cm4gbGV4ZXI7XG5cdCAgICB9KSgpO1xuXHQgICAgcGFyc2VyLmxleGVyID0gbGV4ZXI7XG5cdCAgICBmdW5jdGlvbiBQYXJzZXIoKSB7XG5cdCAgICAgICAgdGhpcy55eSA9IHt9O1xuXHQgICAgfVBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXI7cGFyc2VyLlBhcnNlciA9IFBhcnNlcjtcblx0ICAgIHJldHVybiBuZXcgUGFyc2VyKCk7XG5cdH0pKCk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBoYW5kbGViYXJzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF92aXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF92aXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Zpc2l0b3IpO1xuXG5cdGZ1bmN0aW9uIFdoaXRlc3BhY2VDb250cm9sKCkge1xuXHQgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cblx0ICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZSA9IG5ldyBfdmlzaXRvcjJbJ2RlZmF1bHQnXSgpO1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Qcm9ncmFtID0gZnVuY3Rpb24gKHByb2dyYW0pIHtcblx0ICB2YXIgZG9TdGFuZGFsb25lID0gIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lO1xuXG5cdCAgdmFyIGlzUm9vdCA9ICF0aGlzLmlzUm9vdFNlZW47XG5cdCAgdGhpcy5pc1Jvb3RTZWVuID0gdHJ1ZTtcblxuXHQgIHZhciBib2R5ID0gcHJvZ3JhbS5ib2R5O1xuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gYm9keS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIHZhciBjdXJyZW50ID0gYm9keVtpXSxcblx0ICAgICAgICBzdHJpcCA9IHRoaXMuYWNjZXB0KGN1cnJlbnQpO1xuXG5cdCAgICBpZiAoIXN0cmlwKSB7XG5cdCAgICAgIGNvbnRpbnVlO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgX2lzTmV4dFdoaXRlc3BhY2UgPSBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgb3BlblN0YW5kYWxvbmUgPSBzdHJpcC5vcGVuU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSxcblx0ICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXG5cdCAgICAgICAgaW5saW5lU3RhbmRhbG9uZSA9IHN0cmlwLmlubGluZVN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UgJiYgX2lzTmV4dFdoaXRlc3BhY2U7XG5cblx0ICAgIGlmIChzdHJpcC5jbG9zZSkge1xuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoc3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChib2R5LCBpLCB0cnVlKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBpbmxpbmVTdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuXHQgICAgICBpZiAob21pdExlZnQoYm9keSwgaSkpIHtcblx0ICAgICAgICAvLyBJZiB3ZSBhcmUgb24gYSBzdGFuZGFsb25lIG5vZGUsIHNhdmUgdGhlIGluZGVudCBpbmZvIGZvciBwYXJ0aWFsc1xuXHQgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdQYXJ0aWFsU3RhdGVtZW50Jykge1xuXHQgICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIHdoaXRlc3BhY2UgZnJvbSB0aGUgZmluYWwgbGluZVxuXHQgICAgICAgICAgY3VycmVudC5pbmRlbnQgPSAvKFsgXFx0XSskKS8uZXhlYyhib2R5W2kgLSAxXS5vcmlnaW5hbClbMV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIG9wZW5TdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodCgoY3VycmVudC5wcm9ncmFtIHx8IGN1cnJlbnQuaW52ZXJzZSkuYm9keSk7XG5cblx0ICAgICAgLy8gU3RyaXAgb3V0IHRoZSBwcmV2aW91cyBjb250ZW50IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHlcblx0ICAgICAgb21pdExlZnQoYm9keSwgaSk7XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGNsb3NlU3RhbmRhbG9uZSkge1xuXHQgICAgICAvLyBBbHdheXMgc3RyaXAgdGhlIG5leHQgbm9kZVxuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XG5cblx0ICAgICAgb21pdExlZnQoKGN1cnJlbnQuaW52ZXJzZSB8fCBjdXJyZW50LnByb2dyYW0pLmJvZHkpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBwcm9ncmFtO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5CbG9ja1N0YXRlbWVudCA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3JCbG9jayA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5QYXJ0aWFsQmxvY2tTdGF0ZW1lbnQgPSBmdW5jdGlvbiAoYmxvY2spIHtcblx0ICB0aGlzLmFjY2VwdChibG9jay5wcm9ncmFtKTtcblx0ICB0aGlzLmFjY2VwdChibG9jay5pbnZlcnNlKTtcblxuXHQgIC8vIEZpbmQgdGhlIGludmVyc2UgcHJvZ3JhbSB0aGF0IGlzIGludm9sZWQgd2l0aCB3aGl0ZXNwYWNlIHN0cmlwcGluZy5cblx0ICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0gfHwgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgaW52ZXJzZSA9IGJsb2NrLnByb2dyYW0gJiYgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZSxcblx0ICAgICAgbGFzdEludmVyc2UgPSBpbnZlcnNlO1xuXG5cdCAgaWYgKGludmVyc2UgJiYgaW52ZXJzZS5jaGFpbmVkKSB7XG5cdCAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLmJvZHlbMF0ucHJvZ3JhbTtcblxuXHQgICAgLy8gV2FsayB0aGUgaW52ZXJzZSBjaGFpbiB0byBmaW5kIHRoZSBsYXN0IGludmVyc2UgdGhhdCBpcyBhY3R1YWxseSBpbiB0aGUgY2hhaW4uXG5cdCAgICB3aGlsZSAobGFzdEludmVyc2UuY2hhaW5lZCkge1xuXHQgICAgICBsYXN0SW52ZXJzZSA9IGxhc3RJbnZlcnNlLmJvZHlbbGFzdEludmVyc2UuYm9keS5sZW5ndGggLSAxXS5wcm9ncmFtO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHZhciBzdHJpcCA9IHtcblx0ICAgIG9wZW46IGJsb2NrLm9wZW5TdHJpcC5vcGVuLFxuXHQgICAgY2xvc2U6IGJsb2NrLmNsb3NlU3RyaXAuY2xvc2UsXG5cblx0ICAgIC8vIERldGVybWluZSB0aGUgc3RhbmRhbG9uZSBjYW5kaWFjeS4gQmFzaWNhbGx5IGZsYWcgb3VyIGNvbnRlbnQgYXMgYmVpbmcgcG9zc2libHkgc3RhbmRhbG9uZVxuXHQgICAgLy8gc28gb3VyIHBhcmVudCBjYW4gZGV0ZXJtaW5lIGlmIHdlIGFjdHVhbGx5IGFyZSBzdGFuZGFsb25lXG5cdCAgICBvcGVuU3RhbmRhbG9uZTogaXNOZXh0V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpLFxuXHQgICAgY2xvc2VTdGFuZGFsb25lOiBpc1ByZXZXaGl0ZXNwYWNlKChmaXJzdEludmVyc2UgfHwgcHJvZ3JhbSkuYm9keSlcblx0ICB9O1xuXG5cdCAgaWYgKGJsb2NrLm9wZW5TdHJpcC5jbG9zZSkge1xuXHQgICAgb21pdFJpZ2h0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgaWYgKGludmVyc2UpIHtcblx0ICAgIHZhciBpbnZlcnNlU3RyaXAgPSBibG9jay5pbnZlcnNlU3RyaXA7XG5cblx0ICAgIGlmIChpbnZlcnNlU3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLmNsb3NlKSB7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KGxhc3RJbnZlcnNlLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGaW5kIHN0YW5kYWxvbmUgZWxzZSBzdGF0bWVudHNcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmUgJiYgaXNQcmV2V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpICYmIGlzTmV4dFdoaXRlc3BhY2UoZmlyc3RJbnZlcnNlLmJvZHkpKSB7XG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSk7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSk7XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcblx0ICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHN0cmlwO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3IgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobXVzdGFjaGUpIHtcblx0ICByZXR1cm4gbXVzdGFjaGUuc3RyaXA7XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuQ29tbWVudFN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgc3RyaXAgPSBub2RlLnN0cmlwIHx8IHt9O1xuXHQgIHJldHVybiB7XG5cdCAgICBpbmxpbmVTdGFuZGFsb25lOiB0cnVlLFxuXHQgICAgb3Blbjogc3RyaXAub3Blbixcblx0ICAgIGNsb3NlOiBzdHJpcC5jbG9zZVxuXHQgIH07XG5cdH07XG5cblx0ZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcblx0ICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICBpID0gYm9keS5sZW5ndGg7XG5cdCAgfVxuXG5cdCAgLy8gTm9kZXMgdGhhdCBlbmQgd2l0aCBuZXdsaW5lcyBhcmUgY29uc2lkZXJlZCB3aGl0ZXNwYWNlIChidXQgYXJlIHNwZWNpYWxcblx0ICAvLyBjYXNlZCBmb3Igc3RyaXAgb3BlcmF0aW9ucylcblx0ICB2YXIgcHJldiA9IGJvZHlbaSAtIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpIC0gMl07XG5cdCAgaWYgKCFwcmV2KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChwcmV2LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXFxyP1xcblxccyo/JC8gOiAvKF58XFxyP1xcbilcXHMqPyQvKS50ZXN0KHByZXYub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXHRmdW5jdGlvbiBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0ICAgIGkgPSAtMTtcblx0ICB9XG5cblx0ICB2YXIgbmV4dCA9IGJvZHlbaSArIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpICsgMl07XG5cdCAgaWYgKCFuZXh0KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChuZXh0LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXlxccyo/XFxyP1xcbi8gOiAvXlxccyo/KFxccj9cXG58JCkvKS50ZXN0KG5leHQub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSByaWdodCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cblx0Ly8gSS5lLiB7e2Zvb319JyAnIHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cblx0Ly9cblx0Ly8gSWYgaSBpcyB1bmRlZmluZWQsIHRoZW4gdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0UmlnaHQoYm9keSwgaSwgbXVsdGlwbGUpIHtcblx0ICB2YXIgY3VycmVudCA9IGJvZHlbaSA9PSBudWxsID8gMCA6IGkgKyAxXTtcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQucmlnaHRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XG5cdCAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/IC9eXFxzKy8gOiAvXlsgXFx0XSpcXHI/XFxuPy8sICcnKTtcblx0ICBjdXJyZW50LnJpZ2h0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuXHQvLyBJLmUuICcgJ3t7Zm9vfX0gd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuXHQvL1xuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0TGVmdChib2R5LCBpLCBtdWx0aXBsZSkge1xuXHQgIHZhciBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyBib2R5Lmxlbmd0aCAtIDEgOiBpIC0gMV07XG5cdCAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICFtdWx0aXBsZSAmJiBjdXJyZW50LmxlZnRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIC8vIFdlIG9taXQgdGhlIGxhc3Qgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seSBhbmQgbm90IHByZWNlZWRlZCBieSBhIG5vbi1jb250ZW50IG5vZGUuXG5cdCAgdmFyIG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcblx0ICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gL1xccyskLyA6IC9bIFxcdF0rJC8sICcnKTtcblx0ICBjdXJyZW50LmxlZnRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xuXHQgIHJldHVybiBjdXJyZW50LmxlZnRTdHJpcHBlZDtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdoaXRlc3BhY2VDb250cm9sO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGZ1bmN0aW9uIFZpc2l0b3IoKSB7XG5cdCAgdGhpcy5wYXJlbnRzID0gW107XG5cdH1cblxuXHRWaXNpdG9yLnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogVmlzaXRvcixcblx0ICBtdXRhdGluZzogZmFsc2UsXG5cblx0ICAvLyBWaXNpdHMgYSBnaXZlbiB2YWx1ZS4gSWYgbXV0YXRpbmcsIHdpbGwgcmVwbGFjZSB0aGUgdmFsdWUgaWYgbmVjZXNzYXJ5LlxuXHQgIGFjY2VwdEtleTogZnVuY3Rpb24gYWNjZXB0S2V5KG5vZGUsIG5hbWUpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHRoaXMuYWNjZXB0KG5vZGVbbmFtZV0pO1xuXHQgICAgaWYgKHRoaXMubXV0YXRpbmcpIHtcblx0ICAgICAgLy8gSGFja3kgc2FuaXR5IGNoZWNrOiBUaGlzIG1heSBoYXZlIGEgZmV3IGZhbHNlIHBvc2l0aXZlcyBmb3IgdHlwZSBmb3IgdGhlIGhlbHBlclxuXHQgICAgICAvLyBtZXRob2RzIGJ1dCB3aWxsIGdlbmVyYWxseSBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aG91dCBhIGxvdCBvZiBvdmVyaGVhZC5cblx0ICAgICAgaWYgKHZhbHVlICYmICFWaXNpdG9yLnByb3RvdHlwZVt2YWx1ZS50eXBlXSkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIG5vZGUgdHlwZSBcIicgKyB2YWx1ZS50eXBlICsgJ1wiIGZvdW5kIHdoZW4gYWNjZXB0aW5nICcgKyBuYW1lICsgJyBvbiAnICsgbm9kZS50eXBlKTtcblx0ICAgICAgfVxuXHQgICAgICBub2RlW25hbWVdID0gdmFsdWU7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFBlcmZvcm1zIGFuIGFjY2VwdCBvcGVyYXRpb24gd2l0aCBhZGRlZCBzYW5pdHkgY2hlY2sgdG8gZW5zdXJlXG5cdCAgLy8gcmVxdWlyZWQga2V5cyBhcmUgbm90IHJlbW92ZWQuXG5cdCAgYWNjZXB0UmVxdWlyZWQ6IGZ1bmN0aW9uIGFjY2VwdFJlcXVpcmVkKG5vZGUsIG5hbWUpIHtcblx0ICAgIHRoaXMuYWNjZXB0S2V5KG5vZGUsIG5hbWUpO1xuXG5cdCAgICBpZiAoIW5vZGVbbmFtZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10obm9kZS50eXBlICsgJyByZXF1aXJlcyAnICsgbmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFRyYXZlcnNlcyBhIGdpdmVuIGFycmF5LiBJZiBtdXRhdGluZywgZW1wdHkgcmVzcG5zZXMgd2lsbCBiZSByZW1vdmVkXG5cdCAgLy8gZm9yIGNoaWxkIGVsZW1lbnRzLlxuXHQgIGFjY2VwdEFycmF5OiBmdW5jdGlvbiBhY2NlcHRBcnJheShhcnJheSkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5hY2NlcHRLZXkoYXJyYXksIGkpO1xuXG5cdCAgICAgIGlmICghYXJyYXlbaV0pIHtcblx0ICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgaS0tO1xuXHQgICAgICAgIGwtLTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChvYmplY3QpIHtcblx0ICAgIGlmICghb2JqZWN0KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbb2JqZWN0LnR5cGVdKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHR5cGU6ICcgKyBvYmplY3QudHlwZSwgb2JqZWN0KTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMuY3VycmVudCkge1xuXHQgICAgICB0aGlzLnBhcmVudHMudW5zaGlmdCh0aGlzLmN1cnJlbnQpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5jdXJyZW50ID0gb2JqZWN0O1xuXG5cdCAgICB2YXIgcmV0ID0gdGhpc1tvYmplY3QudHlwZV0ob2JqZWN0KTtcblxuXHQgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYXJlbnRzLnNoaWZ0KCk7XG5cblx0ICAgIGlmICghdGhpcy5tdXRhdGluZyB8fCByZXQpIHtcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSBpZiAocmV0ICE9PSBmYWxzZSkge1xuXHQgICAgICByZXR1cm4gb2JqZWN0O1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMuYWNjZXB0QXJyYXkocHJvZ3JhbS5ib2R5KTtcblx0ICB9LFxuXG5cdCAgTXVzdGFjaGVTdGF0ZW1lbnQ6IHZpc2l0U3ViRXhwcmVzc2lvbixcblx0ICBEZWNvcmF0b3I6IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuXHQgIEJsb2NrU3RhdGVtZW50OiB2aXNpdEJsb2NrLFxuXHQgIERlY29yYXRvckJsb2NrOiB2aXNpdEJsb2NrLFxuXG5cdCAgUGFydGlhbFN0YXRlbWVudDogdmlzaXRQYXJ0aWFsLFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHZpc2l0UGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwpO1xuXG5cdCAgICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAncHJvZ3JhbScpO1xuXHQgIH0sXG5cblx0ICBDb250ZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb250ZW50U3RhdGVtZW50KCkgLyogY29udGVudCAqL3t9LFxuXHQgIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbW1lbnRTdGF0ZW1lbnQoKSAvKiBjb21tZW50ICove30sXG5cblx0ICBTdWJFeHByZXNzaW9uOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cblx0ICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24gUGF0aEV4cHJlc3Npb24oKSAvKiBwYXRoICove30sXG5cblx0ICBTdHJpbmdMaXRlcmFsOiBmdW5jdGlvbiBTdHJpbmdMaXRlcmFsKCkgLyogc3RyaW5nICove30sXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbCgpIC8qIG51bWJlciAqL3t9LFxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbCgpIC8qIGJvb2wgKi97fSxcblx0ICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbiBVbmRlZmluZWRMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxuXHQgIE51bGxMaXRlcmFsOiBmdW5jdGlvbiBOdWxsTGl0ZXJhbCgpIC8qIGxpdGVyYWwgKi97fSxcblxuXHQgIEhhc2g6IGZ1bmN0aW9uIEhhc2goaGFzaCkge1xuXHQgICAgdGhpcy5hY2NlcHRBcnJheShoYXNoLnBhaXJzKTtcblx0ICB9LFxuXHQgIEhhc2hQYWlyOiBmdW5jdGlvbiBIYXNoUGFpcihwYWlyKSB7XG5cdCAgICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhaXIsICd2YWx1ZScpO1xuXHQgIH1cblx0fTtcblxuXHRmdW5jdGlvbiB2aXNpdFN1YkV4cHJlc3Npb24obXVzdGFjaGUpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKG11c3RhY2hlLCAncGF0aCcpO1xuXHQgIHRoaXMuYWNjZXB0QXJyYXkobXVzdGFjaGUucGFyYW1zKTtcblx0ICB0aGlzLmFjY2VwdEtleShtdXN0YWNoZSwgJ2hhc2gnKTtcblx0fVxuXHRmdW5jdGlvbiB2aXNpdEJsb2NrKGJsb2NrKSB7XG5cdCAgdmlzaXRTdWJFeHByZXNzaW9uLmNhbGwodGhpcywgYmxvY2spO1xuXG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdwcm9ncmFtJyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdpbnZlcnNlJyk7XG5cdH1cblx0ZnVuY3Rpb24gdmlzaXRQYXJ0aWFsKHBhcnRpYWwpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhcnRpYWwsICduYW1lJyk7XG5cdCAgdGhpcy5hY2NlcHRBcnJheShwYXJ0aWFsLnBhcmFtcyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkocGFydGlhbCwgJ2hhc2gnKTtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFZpc2l0b3I7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuU291cmNlTG9jYXRpb24gPSBTb3VyY2VMb2NhdGlvbjtcblx0ZXhwb3J0cy5pZCA9IGlkO1xuXHRleHBvcnRzLnN0cmlwRmxhZ3MgPSBzdHJpcEZsYWdzO1xuXHRleHBvcnRzLnN0cmlwQ29tbWVudCA9IHN0cmlwQ29tbWVudDtcblx0ZXhwb3J0cy5wcmVwYXJlUGF0aCA9IHByZXBhcmVQYXRoO1xuXHRleHBvcnRzLnByZXBhcmVNdXN0YWNoZSA9IHByZXBhcmVNdXN0YWNoZTtcblx0ZXhwb3J0cy5wcmVwYXJlUmF3QmxvY2sgPSBwcmVwYXJlUmF3QmxvY2s7XG5cdGV4cG9ydHMucHJlcGFyZUJsb2NrID0gcHJlcGFyZUJsb2NrO1xuXHRleHBvcnRzLnByZXBhcmVQcm9ncmFtID0gcHJlcGFyZVByb2dyYW07XG5cdGV4cG9ydHMucHJlcGFyZVBhcnRpYWxCbG9jayA9IHByZXBhcmVQYXJ0aWFsQmxvY2s7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVDbG9zZShvcGVuLCBjbG9zZSkge1xuXHQgIGNsb3NlID0gY2xvc2UucGF0aCA/IGNsb3NlLnBhdGgub3JpZ2luYWwgOiBjbG9zZTtcblxuXHQgIGlmIChvcGVuLnBhdGgub3JpZ2luYWwgIT09IGNsb3NlKSB7XG5cdCAgICB2YXIgZXJyb3JOb2RlID0geyBsb2M6IG9wZW4ucGF0aC5sb2MgfTtcblxuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10ob3Blbi5wYXRoLm9yaWdpbmFsICsgXCIgZG9lc24ndCBtYXRjaCBcIiArIGNsb3NlLCBlcnJvck5vZGUpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgbG9jSW5mbykge1xuXHQgIHRoaXMuc291cmNlID0gc291cmNlO1xuXHQgIHRoaXMuc3RhcnQgPSB7XG5cdCAgICBsaW5lOiBsb2NJbmZvLmZpcnN0X2xpbmUsXG5cdCAgICBjb2x1bW46IGxvY0luZm8uZmlyc3RfY29sdW1uXG5cdCAgfTtcblx0ICB0aGlzLmVuZCA9IHtcblx0ICAgIGxpbmU6IGxvY0luZm8ubGFzdF9saW5lLFxuXHQgICAgY29sdW1uOiBsb2NJbmZvLmxhc3RfY29sdW1uXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlkKHRva2VuKSB7XG5cdCAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KHRva2VuKSkge1xuXHQgICAgcmV0dXJuIHRva2VuLnN1YnN0cigxLCB0b2tlbi5sZW5ndGggLSAyKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIHRva2VuO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmlwRmxhZ3Mob3BlbiwgY2xvc2UpIHtcblx0ICByZXR1cm4ge1xuXHQgICAgb3Blbjogb3Blbi5jaGFyQXQoMikgPT09ICd+Jyxcblx0ICAgIGNsb3NlOiBjbG9zZS5jaGFyQXQoY2xvc2UubGVuZ3RoIC0gMykgPT09ICd+J1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBzdHJpcENvbW1lbnQoY29tbWVudCkge1xuXHQgIHJldHVybiBjb21tZW50LnJlcGxhY2UoL15cXHtcXHt+PyEtPy0/LywgJycpLnJlcGxhY2UoLy0/LT9+P1xcfVxcfSQvLCAnJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUGF0aChkYXRhLCBwYXJ0cywgbG9jKSB7XG5cdCAgbG9jID0gdGhpcy5sb2NJbmZvKGxvYyk7XG5cblx0ICB2YXIgb3JpZ2luYWwgPSBkYXRhID8gJ0AnIDogJycsXG5cdCAgICAgIGRpZyA9IFtdLFxuXHQgICAgICBkZXB0aCA9IDA7XG5cblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXS5wYXJ0LFxuXG5cdCAgICAvLyBJZiB3ZSBoYXZlIFtdIHN5bnRheCB0aGVuIHdlIGRvIG5vdCB0cmVhdCBwYXRoIHJlZmVyZW5jZXMgYXMgb3BlcmF0b3JzLFxuXHQgICAgLy8gaS5lLiBmb28uW3RoaXNdIHJlc29sdmVzIHRvIGFwcHJveGltYXRlbHkgY29udGV4dC5mb29bJ3RoaXMnXVxuXHQgICAgaXNMaXRlcmFsID0gcGFydHNbaV0ub3JpZ2luYWwgIT09IHBhcnQ7XG5cdCAgICBvcmlnaW5hbCArPSAocGFydHNbaV0uc2VwYXJhdG9yIHx8ICcnKSArIHBhcnQ7XG5cblx0ICAgIGlmICghaXNMaXRlcmFsICYmIChwYXJ0ID09PSAnLi4nIHx8IHBhcnQgPT09ICcuJyB8fCBwYXJ0ID09PSAndGhpcycpKSB7XG5cdCAgICAgIGlmIChkaWcubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdJbnZhbGlkIHBhdGg6ICcgKyBvcmlnaW5hbCwgeyBsb2M6IGxvYyB9KTtcblx0ICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG5cdCAgICAgICAgZGVwdGgrKztcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgZGlnLnB1c2gocGFydCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXG5cdCAgICBkYXRhOiBkYXRhLFxuXHQgICAgZGVwdGg6IGRlcHRoLFxuXHQgICAgcGFydHM6IGRpZyxcblx0ICAgIG9yaWdpbmFsOiBvcmlnaW5hbCxcblx0ICAgIGxvYzogbG9jXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVNdXN0YWNoZShwYXRoLCBwYXJhbXMsIGhhc2gsIG9wZW4sIHN0cmlwLCBsb2NJbmZvKSB7XG5cdCAgLy8gTXVzdCB1c2UgY2hhckF0IHRvIHN1cHBvcnQgSUUgcHJlLTEwXG5cdCAgdmFyIGVzY2FwZUZsYWcgPSBvcGVuLmNoYXJBdCgzKSB8fCBvcGVuLmNoYXJBdCgyKSxcblx0ICAgICAgZXNjYXBlZCA9IGVzY2FwZUZsYWcgIT09ICd7JyAmJiBlc2NhcGVGbGFnICE9PSAnJic7XG5cblx0ICB2YXIgZGVjb3JhdG9yID0gL1xcKi8udGVzdChvcGVuKTtcblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogZGVjb3JhdG9yID8gJ0RlY29yYXRvcicgOiAnTXVzdGFjaGVTdGF0ZW1lbnQnLFxuXHQgICAgcGF0aDogcGF0aCxcblx0ICAgIHBhcmFtczogcGFyYW1zLFxuXHQgICAgaGFzaDogaGFzaCxcblx0ICAgIGVzY2FwZWQ6IGVzY2FwZWQsXG5cdCAgICBzdHJpcDogc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUmF3QmxvY2sob3BlblJhd0Jsb2NrLCBjb250ZW50cywgY2xvc2UsIGxvY0luZm8pIHtcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW5SYXdCbG9jaywgY2xvc2UpO1xuXG5cdCAgbG9jSW5mbyA9IHRoaXMubG9jSW5mbyhsb2NJbmZvKTtcblx0ICB2YXIgcHJvZ3JhbSA9IHtcblx0ICAgIHR5cGU6ICdQcm9ncmFtJyxcblx0ICAgIGJvZHk6IGNvbnRlbnRzLFxuXHQgICAgc3RyaXA6IHt9LFxuXHQgICAgbG9jOiBsb2NJbmZvXG5cdCAgfTtcblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnQmxvY2tTdGF0ZW1lbnQnLFxuXHQgICAgcGF0aDogb3BlblJhd0Jsb2NrLnBhdGgsXG5cdCAgICBwYXJhbXM6IG9wZW5SYXdCbG9jay5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuUmF3QmxvY2suaGFzaCxcblx0ICAgIHByb2dyYW06IHByb2dyYW0sXG5cdCAgICBvcGVuU3RyaXA6IHt9LFxuXHQgICAgaW52ZXJzZVN0cmlwOiB7fSxcblx0ICAgIGNsb3NlU3RyaXA6IHt9LFxuXHQgICAgbG9jOiBsb2NJbmZvXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVCbG9jayhvcGVuQmxvY2ssIHByb2dyYW0sIGludmVyc2VBbmRQcm9ncmFtLCBjbG9zZSwgaW52ZXJ0ZWQsIGxvY0luZm8pIHtcblx0ICBpZiAoY2xvc2UgJiYgY2xvc2UucGF0aCkge1xuXHQgICAgdmFsaWRhdGVDbG9zZShvcGVuQmxvY2ssIGNsb3NlKTtcblx0ICB9XG5cblx0ICB2YXIgZGVjb3JhdG9yID0gL1xcKi8udGVzdChvcGVuQmxvY2sub3Blbik7XG5cblx0ICBwcm9ncmFtLmJsb2NrUGFyYW1zID0gb3BlbkJsb2NrLmJsb2NrUGFyYW1zO1xuXG5cdCAgdmFyIGludmVyc2UgPSB1bmRlZmluZWQsXG5cdCAgICAgIGludmVyc2VTdHJpcCA9IHVuZGVmaW5lZDtcblxuXHQgIGlmIChpbnZlcnNlQW5kUHJvZ3JhbSkge1xuXHQgICAgaWYgKGRlY29yYXRvcikge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5leHBlY3RlZCBpbnZlcnNlIGJsb2NrIG9uIGRlY29yYXRvcicsIGludmVyc2VBbmRQcm9ncmFtKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGludmVyc2VBbmRQcm9ncmFtLmNoYWluKSB7XG5cdCAgICAgIGludmVyc2VBbmRQcm9ncmFtLnByb2dyYW0uYm9keVswXS5jbG9zZVN0cmlwID0gY2xvc2Uuc3RyaXA7XG5cdCAgICB9XG5cblx0ICAgIGludmVyc2VTdHJpcCA9IGludmVyc2VBbmRQcm9ncmFtLnN0cmlwO1xuXHQgICAgaW52ZXJzZSA9IGludmVyc2VBbmRQcm9ncmFtLnByb2dyYW07XG5cdCAgfVxuXG5cdCAgaWYgKGludmVydGVkKSB7XG5cdCAgICBpbnZlcnRlZCA9IGludmVyc2U7XG5cdCAgICBpbnZlcnNlID0gcHJvZ3JhbTtcblx0ICAgIHByb2dyYW0gPSBpbnZlcnRlZDtcblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogZGVjb3JhdG9yID8gJ0RlY29yYXRvckJsb2NrJyA6ICdCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBvcGVuQmxvY2sucGF0aCxcblx0ICAgIHBhcmFtczogb3BlbkJsb2NrLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW5CbG9jay5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIGludmVyc2U6IGludmVyc2UsXG5cdCAgICBvcGVuU3RyaXA6IG9wZW5CbG9jay5zdHJpcCxcblx0ICAgIGludmVyc2VTdHJpcDogaW52ZXJzZVN0cmlwLFxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUHJvZ3JhbShzdGF0ZW1lbnRzLCBsb2MpIHtcblx0ICBpZiAoIWxvYyAmJiBzdGF0ZW1lbnRzLmxlbmd0aCkge1xuXHQgICAgdmFyIGZpcnN0TG9jID0gc3RhdGVtZW50c1swXS5sb2MsXG5cdCAgICAgICAgbGFzdExvYyA9IHN0YXRlbWVudHNbc3RhdGVtZW50cy5sZW5ndGggLSAxXS5sb2M7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cdCAgICBpZiAoZmlyc3RMb2MgJiYgbGFzdExvYykge1xuXHQgICAgICBsb2MgPSB7XG5cdCAgICAgICAgc291cmNlOiBmaXJzdExvYy5zb3VyY2UsXG5cdCAgICAgICAgc3RhcnQ6IHtcblx0ICAgICAgICAgIGxpbmU6IGZpcnN0TG9jLnN0YXJ0LmxpbmUsXG5cdCAgICAgICAgICBjb2x1bW46IGZpcnN0TG9jLnN0YXJ0LmNvbHVtblxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZW5kOiB7XG5cdCAgICAgICAgICBsaW5lOiBsYXN0TG9jLmVuZC5saW5lLFxuXHQgICAgICAgICAgY29sdW1uOiBsYXN0TG9jLmVuZC5jb2x1bW5cblx0ICAgICAgICB9XG5cdCAgICAgIH07XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdQcm9ncmFtJyxcblx0ICAgIGJvZHk6IHN0YXRlbWVudHMsXG5cdCAgICBzdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlUGFydGlhbEJsb2NrKG9wZW4sIHByb2dyYW0sIGNsb3NlLCBsb2NJbmZvKSB7XG5cdCAgdmFsaWRhdGVDbG9zZShvcGVuLCBjbG9zZSk7XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1BhcnRpYWxCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBuYW1lOiBvcGVuLnBhdGgsXG5cdCAgICBwYXJhbXM6IG9wZW4ucGFyYW1zLFxuXHQgICAgaGFzaDogb3Blbi5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIG9wZW5TdHJpcDogb3Blbi5zdHJpcCxcblx0ICAgIGNsb3NlU3RyaXA6IGNsb3NlICYmIGNsb3NlLnN0cmlwLFxuXHQgICAgbG9jOiB0aGlzLmxvY0luZm8obG9jSW5mbylcblx0ICB9O1xuXHR9XG5cbi8qKiovIH0pLFxuLyogNDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuZXctY2FwICovXG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuQ29tcGlsZXIgPSBDb21waWxlcjtcblx0ZXhwb3J0cy5wcmVjb21waWxlID0gcHJlY29tcGlsZTtcblx0ZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2FzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG5cdHZhciBfYXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzdCk7XG5cblx0dmFyIHNsaWNlID0gW10uc2xpY2U7XG5cblx0ZnVuY3Rpb24gQ29tcGlsZXIoKSB7fVxuXG5cdC8vIHRoZSBmb3VuZEhlbHBlciByZWdpc3RlciB3aWxsIGRpc2FtYmlndWF0ZSBoZWxwZXIgbG9va3VwIGZyb20gZmluZGluZyBhXG5cdC8vIGZ1bmN0aW9uIGluIGEgY29udGV4dC4gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIG11c3RhY2hlIGNvbXBhdGliaWxpdHksIHdoaWNoXG5cdC8vIHJlcXVpcmVzIHRoYXQgY29udGV4dCBmdW5jdGlvbnMgaW4gYmxvY2tzIGFyZSBldmFsdWF0ZWQgYnkgYmxvY2tIZWxwZXJNaXNzaW5nLFxuXHQvLyBhbmQgdGhlbiBwcm9jZWVkIGFzIGlmIHRoZSByZXN1bHRpbmcgdmFsdWUgd2FzIHByb3ZpZGVkIHRvIGJsb2NrSGVscGVyTWlzc2luZy5cblxuXHRDb21waWxlci5wcm90b3R5cGUgPSB7XG5cdCAgY29tcGlsZXI6IENvbXBpbGVyLFxuXG5cdCAgZXF1YWxzOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcblx0ICAgIHZhciBsZW4gPSB0aGlzLm9wY29kZXMubGVuZ3RoO1xuXHQgICAgaWYgKG90aGVyLm9wY29kZXMubGVuZ3RoICE9PSBsZW4pIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHZhciBvcGNvZGUgPSB0aGlzLm9wY29kZXNbaV0sXG5cdCAgICAgICAgICBvdGhlck9wY29kZSA9IG90aGVyLm9wY29kZXNbaV07XG5cdCAgICAgIGlmIChvcGNvZGUub3Bjb2RlICE9PSBvdGhlck9wY29kZS5vcGNvZGUgfHwgIWFyZ0VxdWFscyhvcGNvZGUuYXJncywgb3RoZXJPcGNvZGUuYXJncykpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gV2Uga25vdyB0aGF0IGxlbmd0aCBpcyB0aGUgc2FtZSBiZXR3ZWVuIHRoZSB0d28gYXJyYXlzIGJlY2F1c2UgdGhleSBhcmUgZGlyZWN0bHkgdGllZFxuXHQgICAgLy8gdG8gdGhlIG9wY29kZSBiZWhhdmlvciBhYm92ZS5cblx0ICAgIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5baV0uZXF1YWxzKG90aGVyLmNoaWxkcmVuW2ldKSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9LFxuXG5cdCAgZ3VpZDogMCxcblxuXHQgIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUocHJvZ3JhbSwgb3B0aW9ucykge1xuXHQgICAgdGhpcy5zb3VyY2VOb2RlID0gW107XG5cdCAgICB0aGlzLm9wY29kZXMgPSBbXTtcblx0ICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0ICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICB0aGlzLnN0cmluZ1BhcmFtcyA9IG9wdGlvbnMuc3RyaW5nUGFyYW1zO1xuXHQgICAgdGhpcy50cmFja0lkcyA9IG9wdGlvbnMudHJhY2tJZHM7XG5cblx0ICAgIG9wdGlvbnMuYmxvY2tQYXJhbXMgPSBvcHRpb25zLmJsb2NrUGFyYW1zIHx8IFtdO1xuXG5cdCAgICAvLyBUaGVzZSBjaGFuZ2VzIHdpbGwgcHJvcGFnYXRlIHRvIHRoZSBvdGhlciBjb21waWxlciBjb21wb25lbnRzXG5cdCAgICB2YXIga25vd25IZWxwZXJzID0gb3B0aW9ucy5rbm93bkhlbHBlcnM7XG5cdCAgICBvcHRpb25zLmtub3duSGVscGVycyA9IHtcblx0ICAgICAgJ2hlbHBlck1pc3NpbmcnOiB0cnVlLFxuXHQgICAgICAnYmxvY2tIZWxwZXJNaXNzaW5nJzogdHJ1ZSxcblx0ICAgICAgJ2VhY2gnOiB0cnVlLFxuXHQgICAgICAnaWYnOiB0cnVlLFxuXHQgICAgICAndW5sZXNzJzogdHJ1ZSxcblx0ICAgICAgJ3dpdGgnOiB0cnVlLFxuXHQgICAgICAnbG9nJzogdHJ1ZSxcblx0ICAgICAgJ2xvb2t1cCc6IHRydWVcblx0ICAgIH07XG5cdCAgICBpZiAoa25vd25IZWxwZXJzKSB7XG5cdCAgICAgIC8vIHRoZSBuZXh0IGxpbmUgc2hvdWxkIHVzZSBcIk9iamVjdC5rZXlzXCIsIGJ1dCB0aGUgY29kZSBoYXMgYmVlbiBsaWtlIHRoaXMgYSBsb25nIHRpbWUgYW5kIGNoYW5naW5nIGl0LCBtaWdodFxuXHQgICAgICAvLyBjYXVzZSBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBpc3N1ZXMuLi4gSXQncyBhbiBvbGQgbGlicmFyeS4uLlxuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG5cdCAgICAgIGZvciAodmFyIF9uYW1lIGluIGtub3duSGVscGVycykge1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbX25hbWVdID0ga25vd25IZWxwZXJzW19uYW1lXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gdGhpcy5hY2NlcHQocHJvZ3JhbSk7XG5cdCAgfSxcblxuXHQgIGNvbXBpbGVQcm9ncmFtOiBmdW5jdGlvbiBjb21waWxlUHJvZ3JhbShwcm9ncmFtKSB7XG5cdCAgICB2YXIgY2hpbGRDb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCksXG5cdCAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdCAgICByZXN1bHQgPSBjaGlsZENvbXBpbGVyLmNvbXBpbGUocHJvZ3JhbSwgdGhpcy5vcHRpb25zKSxcblx0ICAgICAgICBndWlkID0gdGhpcy5ndWlkKys7XG5cblx0ICAgIHRoaXMudXNlUGFydGlhbCA9IHRoaXMudXNlUGFydGlhbCB8fCByZXN1bHQudXNlUGFydGlhbDtcblxuXHQgICAgdGhpcy5jaGlsZHJlbltndWlkXSA9IHJlc3VsdDtcblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgcmVzdWx0LnVzZURlcHRocztcblxuXHQgICAgcmV0dXJuIGd1aWQ7XG5cdCAgfSxcblxuXHQgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KG5vZGUpIHtcblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBTYW5pdHkgY29kZSAqL1xuXHQgICAgaWYgKCF0aGlzW25vZGUudHlwZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdHlwZTogJyArIG5vZGUudHlwZSwgbm9kZSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMuc291cmNlTm9kZS51bnNoaWZ0KG5vZGUpO1xuXHQgICAgdmFyIHJldCA9IHRoaXNbbm9kZS50eXBlXShub2RlKTtcblx0ICAgIHRoaXMuc291cmNlTm9kZS5zaGlmdCgpO1xuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgUHJvZ3JhbTogZnVuY3Rpb24gUHJvZ3JhbShwcm9ncmFtKSB7XG5cdCAgICB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMudW5zaGlmdChwcm9ncmFtLmJsb2NrUGFyYW1zKTtcblxuXHQgICAgdmFyIGJvZHkgPSBwcm9ncmFtLmJvZHksXG5cdCAgICAgICAgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5TGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdGhpcy5hY2NlcHQoYm9keVtpXSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5zaGlmdCgpO1xuXG5cdCAgICB0aGlzLmlzU2ltcGxlID0gYm9keUxlbmd0aCA9PT0gMTtcblx0ICAgIHRoaXMuYmxvY2tQYXJhbXMgPSBwcm9ncmFtLmJsb2NrUGFyYW1zID8gcHJvZ3JhbS5ibG9ja1BhcmFtcy5sZW5ndGggOiAwO1xuXG5cdCAgICByZXR1cm4gdGhpcztcblx0ICB9LFxuXG5cdCAgQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uIEJsb2NrU3RhdGVtZW50KGJsb2NrKSB7XG5cdCAgICB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKGJsb2NrKTtcblxuXHQgICAgdmFyIHByb2dyYW0gPSBibG9jay5wcm9ncmFtLFxuXHQgICAgICAgIGludmVyc2UgPSBibG9jay5pbnZlcnNlO1xuXG5cdCAgICBwcm9ncmFtID0gcHJvZ3JhbSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKHByb2dyYW0pO1xuXHQgICAgaW52ZXJzZSA9IGludmVyc2UgJiYgdGhpcy5jb21waWxlUHJvZ3JhbShpbnZlcnNlKTtcblxuXHQgICAgdmFyIHR5cGUgPSB0aGlzLmNsYXNzaWZ5U2V4cHIoYmxvY2spO1xuXG5cdCAgICBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihibG9jaywgcHJvZ3JhbSwgaW52ZXJzZSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzaW1wbGUnKSB7XG5cdCAgICAgIHRoaXMuc2ltcGxlU2V4cHIoYmxvY2spO1xuXG5cdCAgICAgIC8vIG5vdyB0aGF0IHRoZSBzaW1wbGUgbXVzdGFjaGUgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG9cblx0ICAgICAgLy8gZXZhbHVhdGUgaXQgYnkgZXhlY3V0aW5nIGBibG9ja0hlbHBlck1pc3NpbmdgXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2VtcHR5SGFzaCcpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnYmxvY2tWYWx1ZScsIGJsb2NrLnBhdGgub3JpZ2luYWwpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5hbWJpZ3VvdXNTZXhwcihibG9jaywgcHJvZ3JhbSwgaW52ZXJzZSk7XG5cblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2Bcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhbWJpZ3VvdXNCbG9ja1ZhbHVlJyk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICB9LFxuXG5cdCAgRGVjb3JhdG9yQmxvY2s6IGZ1bmN0aW9uIERlY29yYXRvckJsb2NrKGRlY29yYXRvcikge1xuXHQgICAgdmFyIHByb2dyYW0gPSBkZWNvcmF0b3IucHJvZ3JhbSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGRlY29yYXRvci5wcm9ncmFtKTtcblx0ICAgIHZhciBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKGRlY29yYXRvciwgcHJvZ3JhbSwgdW5kZWZpbmVkKSxcblx0ICAgICAgICBwYXRoID0gZGVjb3JhdG9yLnBhdGg7XG5cblx0ICAgIHRoaXMudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cdCAgICB0aGlzLm9wY29kZSgncmVnaXN0ZXJEZWNvcmF0b3InLCBwYXJhbXMubGVuZ3RoLCBwYXRoLm9yaWdpbmFsKTtcblx0ICB9LFxuXG5cdCAgUGFydGlhbFN0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbFN0YXRlbWVudChwYXJ0aWFsKSB7XG5cdCAgICB0aGlzLnVzZVBhcnRpYWwgPSB0cnVlO1xuXG5cdCAgICB2YXIgcHJvZ3JhbSA9IHBhcnRpYWwucHJvZ3JhbTtcblx0ICAgIGlmIChwcm9ncmFtKSB7XG5cdCAgICAgIHByb2dyYW0gPSB0aGlzLmNvbXBpbGVQcm9ncmFtKHBhcnRpYWwucHJvZ3JhbSk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJhbXMgPSBwYXJ0aWFsLnBhcmFtcztcblx0ICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5zdXBwb3J0ZWQgbnVtYmVyIG9mIHBhcnRpYWwgYXJndW1lbnRzOiAnICsgcGFyYW1zLmxlbmd0aCwgcGFydGlhbCk7XG5cdCAgICB9IGVsc2UgaWYgKCFwYXJhbXMubGVuZ3RoKSB7XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXhwbGljaXRQYXJ0aWFsQ29udGV4dCkge1xuXHQgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBwYXJhbXMucHVzaCh7IHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsIHBhcnRzOiBbXSwgZGVwdGg6IDAgfSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcnRpYWxOYW1lID0gcGFydGlhbC5uYW1lLm9yaWdpbmFsLFxuXHQgICAgICAgIGlzRHluYW1pYyA9IHBhcnRpYWwubmFtZS50eXBlID09PSAnU3ViRXhwcmVzc2lvbic7XG5cdCAgICBpZiAoaXNEeW5hbWljKSB7XG5cdCAgICAgIHRoaXMuYWNjZXB0KHBhcnRpYWwubmFtZSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMocGFydGlhbCwgcHJvZ3JhbSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuXHQgICAgdmFyIGluZGVudCA9IHBhcnRpYWwuaW5kZW50IHx8ICcnO1xuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50SW5kZW50ICYmIGluZGVudCkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kQ29udGVudCcsIGluZGVudCk7XG5cdCAgICAgIGluZGVudCA9ICcnO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLm9wY29kZSgnaW52b2tlUGFydGlhbCcsIGlzRHluYW1pYywgcGFydGlhbE5hbWUsIGluZGVudCk7XG5cdCAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XG5cdCAgfSxcblx0ICBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uIFBhcnRpYWxCbG9ja1N0YXRlbWVudChwYXJ0aWFsQmxvY2spIHtcblx0ICAgIHRoaXMuUGFydGlhbFN0YXRlbWVudChwYXJ0aWFsQmxvY2spO1xuXHQgIH0sXG5cblx0ICBNdXN0YWNoZVN0YXRlbWVudDogZnVuY3Rpb24gTXVzdGFjaGVTdGF0ZW1lbnQobXVzdGFjaGUpIHtcblx0ICAgIHRoaXMuU3ViRXhwcmVzc2lvbihtdXN0YWNoZSk7XG5cblx0ICAgIGlmIChtdXN0YWNoZS5lc2NhcGVkICYmICF0aGlzLm9wdGlvbnMubm9Fc2NhcGUpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZEVzY2FwZWQnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIERlY29yYXRvcjogZnVuY3Rpb24gRGVjb3JhdG9yKGRlY29yYXRvcikge1xuXHQgICAgdGhpcy5EZWNvcmF0b3JCbG9jayhkZWNvcmF0b3IpO1xuXHQgIH0sXG5cblx0ICBDb250ZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb250ZW50U3RhdGVtZW50KGNvbnRlbnQpIHtcblx0ICAgIGlmIChjb250ZW50LnZhbHVlKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgY29udGVudC52YWx1ZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbW1lbnRTdGF0ZW1lbnQoKSB7fSxcblxuXHQgIFN1YkV4cHJlc3Npb246IGZ1bmN0aW9uIFN1YkV4cHJlc3Npb24oc2V4cHIpIHtcblx0ICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpO1xuXHQgICAgdmFyIHR5cGUgPSB0aGlzLmNsYXNzaWZ5U2V4cHIoc2V4cHIpO1xuXG5cdCAgICBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihzZXhwcik7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoZWxwZXInKSB7XG5cdCAgICAgIHRoaXMuaGVscGVyU2V4cHIoc2V4cHIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5hbWJpZ3VvdXNTZXhwcihzZXhwcik7XG5cdCAgICB9XG5cdCAgfSxcblx0ICBhbWJpZ3VvdXNTZXhwcjogZnVuY3Rpb24gYW1iaWd1b3VzU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcblx0ICAgIHZhciBwYXRoID0gc2V4cHIucGF0aCxcblx0ICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXSxcblx0ICAgICAgICBpc0Jsb2NrID0gcHJvZ3JhbSAhPSBudWxsIHx8IGludmVyc2UgIT0gbnVsbDtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblxuXHQgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgdGhpcy5hY2NlcHQocGF0aCk7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdpbnZva2VBbWJpZ3VvdXMnLCBuYW1lLCBpc0Jsb2NrKTtcblx0ICB9LFxuXG5cdCAgc2ltcGxlU2V4cHI6IGZ1bmN0aW9uIHNpbXBsZVNleHByKHNleHByKSB7XG5cdCAgICB2YXIgcGF0aCA9IHNleHByLnBhdGg7XG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICB0aGlzLmFjY2VwdChwYXRoKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdyZXNvbHZlUG9zc2libGVMYW1iZGEnKTtcblx0ICB9LFxuXG5cdCAgaGVscGVyU2V4cHI6IGZ1bmN0aW9uIGhlbHBlclNleHByKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSB7XG5cdCAgICB2YXIgcGFyYW1zID0gdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSksXG5cdCAgICAgICAgcGF0aCA9IHNleHByLnBhdGgsXG5cdCAgICAgICAgbmFtZSA9IHBhdGgucGFydHNbMF07XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzW25hbWVdKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdpbnZva2VLbm93bkhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIG5hbWUpO1xuXHQgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IHNwZWNpZmllZCBrbm93bkhlbHBlcnNPbmx5LCBidXQgdXNlZCB0aGUgdW5rbm93biBoZWxwZXIgJyArIG5hbWUsIHNleHByKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgICAgcGF0aC5mYWxzeSA9IHRydWU7XG5cblx0ICAgICAgdGhpcy5hY2NlcHQocGF0aCk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdpbnZva2VIZWxwZXInLCBwYXJhbXMubGVuZ3RoLCBwYXRoLm9yaWdpbmFsLCBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2ltcGxlSWQocGF0aCkpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24gUGF0aEV4cHJlc3Npb24ocGF0aCkge1xuXHQgICAgdGhpcy5hZGREZXB0aChwYXRoLmRlcHRoKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgcGF0aC5kZXB0aCk7XG5cblx0ICAgIHZhciBuYW1lID0gcGF0aC5wYXJ0c1swXSxcblx0ICAgICAgICBzY29wZWQgPSBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQocGF0aCksXG5cdCAgICAgICAgYmxvY2tQYXJhbUlkID0gIXBhdGguZGVwdGggJiYgIXNjb3BlZCAmJiB0aGlzLmJsb2NrUGFyYW1JbmRleChuYW1lKTtcblxuXHQgICAgaWYgKGJsb2NrUGFyYW1JZCkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JZCwgcGF0aC5wYXJ0cyk7XG5cdCAgICB9IGVsc2UgaWYgKCFuYW1lKSB7XG5cdCAgICAgIC8vIENvbnRleHQgcmVmZXJlbmNlLCBpLmUuIGB7e2ZvbyAufX1gIG9yIGB7e2ZvbyAuLn19YFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaENvbnRleHQnKTtcblx0ICAgIH0gZWxzZSBpZiAocGF0aC5kYXRhKSB7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cERhdGEnLCBwYXRoLmRlcHRoLCBwYXRoLnBhcnRzLCBwYXRoLnN0cmljdCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwT25Db250ZXh0JywgcGF0aC5wYXJ0cywgcGF0aC5mYWxzeSwgcGF0aC5zdHJpY3QsIHNjb3BlZCk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uIFN0cmluZ0xpdGVyYWwoc3RyaW5nKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZycsIHN0cmluZy52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIE51bWJlckxpdGVyYWw6IGZ1bmN0aW9uIE51bWJlckxpdGVyYWwobnVtYmVyKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBudW1iZXIudmFsdWUpO1xuXHQgIH0sXG5cblx0ICBCb29sZWFuTGl0ZXJhbDogZnVuY3Rpb24gQm9vbGVhbkxpdGVyYWwoYm9vbCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgYm9vbC52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIFVuZGVmaW5lZExpdGVyYWw6IGZ1bmN0aW9uIFVuZGVmaW5lZExpdGVyYWwoKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAndW5kZWZpbmVkJyk7XG5cdCAgfSxcblxuXHQgIE51bGxMaXRlcmFsOiBmdW5jdGlvbiBOdWxsTGl0ZXJhbCgpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICdudWxsJyk7XG5cdCAgfSxcblxuXHQgIEhhc2g6IGZ1bmN0aW9uIEhhc2goaGFzaCkge1xuXHQgICAgdmFyIHBhaXJzID0gaGFzaC5wYWlycyxcblx0ICAgICAgICBpID0gMCxcblx0ICAgICAgICBsID0gcGFpcnMubGVuZ3RoO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaEhhc2gnKTtcblxuXHQgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5wdXNoUGFyYW0ocGFpcnNbaV0udmFsdWUpO1xuXHQgICAgfVxuXHQgICAgd2hpbGUgKGktLSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXNzaWduVG9IYXNoJywgcGFpcnNbaV0ua2V5KTtcblx0ICAgIH1cblx0ICAgIHRoaXMub3Bjb2RlKCdwb3BIYXNoJyk7XG5cdCAgfSxcblxuXHQgIC8vIEhFTFBFUlNcblx0ICBvcGNvZGU6IGZ1bmN0aW9uIG9wY29kZShuYW1lKSB7XG5cdCAgICB0aGlzLm9wY29kZXMucHVzaCh7IG9wY29kZTogbmFtZSwgYXJnczogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBsb2M6IHRoaXMuc291cmNlTm9kZVswXS5sb2MgfSk7XG5cdCAgfSxcblxuXHQgIGFkZERlcHRoOiBmdW5jdGlvbiBhZGREZXB0aChkZXB0aCkge1xuXHQgICAgaWYgKCFkZXB0aCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9LFxuXG5cdCAgY2xhc3NpZnlTZXhwcjogZnVuY3Rpb24gY2xhc3NpZnlTZXhwcihzZXhwcikge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLnNpbXBsZUlkKHNleHByLnBhdGgpO1xuXG5cdCAgICB2YXIgaXNCbG9ja1BhcmFtID0gaXNTaW1wbGUgJiYgISF0aGlzLmJsb2NrUGFyYW1JbmRleChzZXhwci5wYXRoLnBhcnRzWzBdKTtcblxuXHQgICAgLy8gYSBtdXN0YWNoZSBpcyBhbiBlbGlnaWJsZSBoZWxwZXIgaWY6XG5cdCAgICAvLyAqIGl0cyBpZCBpcyBzaW1wbGUgKGEgc2luZ2xlIHBhcnQsIG5vdCBgdGhpc2Agb3IgYC4uYClcblx0ICAgIHZhciBpc0hlbHBlciA9ICFpc0Jsb2NrUGFyYW0gJiYgX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLmhlbHBlckV4cHJlc3Npb24oc2V4cHIpO1xuXG5cdCAgICAvLyBpZiBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBidXQgbm90IGEgZGVmaW5pdGVcblx0ICAgIC8vIGhlbHBlciwgaXQgaXMgYW1iaWd1b3VzLCBhbmQgd2lsbCBiZSByZXNvbHZlZCBpbiBhIGxhdGVyXG5cdCAgICAvLyBwYXNzIG9yIGF0IHJ1bnRpbWUuXG5cdCAgICB2YXIgaXNFbGlnaWJsZSA9ICFpc0Jsb2NrUGFyYW0gJiYgKGlzSGVscGVyIHx8IGlzU2ltcGxlKTtcblxuXHQgICAgLy8gaWYgYW1iaWd1b3VzLCB3ZSBjYW4gcG9zc2libHkgcmVzb2x2ZSB0aGUgYW1iaWd1aXR5IG5vd1xuXHQgICAgLy8gQW4gZWxpZ2libGUgaGVscGVyIGlzIG9uZSB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb21wbGV4IHBhdGgsIGkuZS4gYHRoaXMuZm9vYCwgYC4uL2Zvb2AgZXRjLlxuXHQgICAgaWYgKGlzRWxpZ2libGUgJiYgIWlzSGVscGVyKSB7XG5cdCAgICAgIHZhciBfbmFtZTIgPSBzZXhwci5wYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHQgICAgICBpZiAob3B0aW9ucy5rbm93bkhlbHBlcnNbX25hbWUyXSkge1xuXHQgICAgICAgIGlzSGVscGVyID0gdHJ1ZTtcblx0ICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmtub3duSGVscGVyc09ubHkpIHtcblx0ICAgICAgICBpc0VsaWdpYmxlID0gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKGlzSGVscGVyKSB7XG5cdCAgICAgIHJldHVybiAnaGVscGVyJztcblx0ICAgIH0gZWxzZSBpZiAoaXNFbGlnaWJsZSkge1xuXHQgICAgICByZXR1cm4gJ2FtYmlndW91cyc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gJ3NpbXBsZSc7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHB1c2hQYXJhbXM6IGZ1bmN0aW9uIHB1c2hQYXJhbXMocGFyYW1zKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcmFtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5wdXNoUGFyYW0ocGFyYW1zW2ldKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaFBhcmFtOiBmdW5jdGlvbiBwdXNoUGFyYW0odmFsKSB7XG5cdCAgICB2YXIgdmFsdWUgPSB2YWwudmFsdWUgIT0gbnVsbCA/IHZhbC52YWx1ZSA6IHZhbC5vcmlnaW5hbCB8fCAnJztcblxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIGlmICh2YWx1ZS5yZXBsYWNlKSB7XG5cdCAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eKFxcLj9cXC5cXC8pKi9nLCAnJykucmVwbGFjZSgvXFwvL2csICcuJyk7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAodmFsLmRlcHRoKSB7XG5cdCAgICAgICAgdGhpcy5hZGREZXB0aCh2YWwuZGVwdGgpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgdmFsLmRlcHRoIHx8IDApO1xuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZ1BhcmFtJywgdmFsdWUsIHZhbC50eXBlKTtcblxuXHQgICAgICBpZiAodmFsLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJykge1xuXHQgICAgICAgIC8vIFN1YkV4cHJlc3Npb25zIGdldCBldmFsdWF0ZWQgYW5kIHBhc3NlZCBpblxuXHQgICAgICAgIC8vIGluIHN0cmluZyBwYXJhbXMgbW9kZS5cblx0ICAgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICAgIHZhciBibG9ja1BhcmFtSW5kZXggPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgaWYgKHZhbC5wYXJ0cyAmJiAhX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLnNjb3BlZElkKHZhbCkgJiYgIXZhbC5kZXB0aCkge1xuXHQgICAgICAgICAgYmxvY2tQYXJhbUluZGV4ID0gdGhpcy5ibG9ja1BhcmFtSW5kZXgodmFsLnBhcnRzWzBdKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKGJsb2NrUGFyYW1JbmRleCkge1xuXHQgICAgICAgICAgdmFyIGJsb2NrUGFyYW1DaGlsZCA9IHZhbC5wYXJ0cy5zbGljZSgxKS5qb2luKCcuJyk7XG5cdCAgICAgICAgICB0aGlzLm9wY29kZSgncHVzaElkJywgJ0Jsb2NrUGFyYW0nLCBibG9ja1BhcmFtSW5kZXgsIGJsb2NrUGFyYW1DaGlsZCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHZhbHVlID0gdmFsLm9yaWdpbmFsIHx8IHZhbHVlO1xuXHQgICAgICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcblx0ICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9edGhpcyg/OlxcLnwkKS8sICcnKS5yZXBsYWNlKC9eXFwuXFwvLywgJycpLnJlcGxhY2UoL15cXC4kLywgJycpO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICB0aGlzLm9wY29kZSgncHVzaElkJywgdmFsLnR5cGUsIHZhbHVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5hY2NlcHQodmFsKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXM6IGZ1bmN0aW9uIHNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlLCBvbWl0RW1wdHkpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBzZXhwci5wYXJhbXM7XG5cdCAgICB0aGlzLnB1c2hQYXJhbXMocGFyYW1zKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblxuXHQgICAgaWYgKHNleHByLmhhc2gpIHtcblx0ICAgICAgdGhpcy5hY2NlcHQoc2V4cHIuaGFzaCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJywgb21pdEVtcHR5KTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHBhcmFtcztcblx0ICB9LFxuXG5cdCAgYmxvY2tQYXJhbUluZGV4OiBmdW5jdGlvbiBibG9ja1BhcmFtSW5kZXgobmFtZSkge1xuXHQgICAgZm9yICh2YXIgZGVwdGggPSAwLCBsZW4gPSB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMubGVuZ3RoOyBkZXB0aCA8IGxlbjsgZGVwdGgrKykge1xuXHQgICAgICB2YXIgYmxvY2tQYXJhbXMgPSB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXNbZGVwdGhdLFxuXHQgICAgICAgICAgcGFyYW0gPSBibG9ja1BhcmFtcyAmJiBfdXRpbHMuaW5kZXhPZihibG9ja1BhcmFtcywgbmFtZSk7XG5cdCAgICAgIGlmIChibG9ja1BhcmFtcyAmJiBwYXJhbSA+PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuIFtkZXB0aCwgcGFyYW1dO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHByZWNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLnByZWNvbXBpbGUuIFlvdSBwYXNzZWQgJyArIGlucHV0KTtcblx0ICB9XG5cblx0ICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0ICBpZiAoISgnZGF0YScgaW4gb3B0aW9ucykpIHtcblx0ICAgIG9wdGlvbnMuZGF0YSA9IHRydWU7XG5cdCAgfVxuXHQgIGlmIChvcHRpb25zLmNvbXBhdCkge1xuXHQgICAgb3B0aW9ucy51c2VEZXB0aHMgPSB0cnVlO1xuXHQgIH1cblxuXHQgIHZhciBhc3QgPSBlbnYucGFyc2UoaW5wdXQsIG9wdGlvbnMpLFxuXHQgICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyk7XG5cdCAgcmV0dXJuIG5ldyBlbnYuSmF2YVNjcmlwdENvbXBpbGVyKCkuY29tcGlsZShlbnZpcm9ubWVudCwgb3B0aW9ucyk7XG5cdH1cblxuXHRmdW5jdGlvbiBjb21waWxlKGlucHV0LCBvcHRpb25zLCBlbnYpIHtcblx0ICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSBvcHRpb25zID0ge307XG5cblx0ICBpZiAoaW5wdXQgPT0gbnVsbCB8fCB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnICYmIGlucHV0LnR5cGUgIT09ICdQcm9ncmFtJykge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1lvdSBtdXN0IHBhc3MgYSBzdHJpbmcgb3IgSGFuZGxlYmFycyBBU1QgdG8gSGFuZGxlYmFycy5jb21waWxlLiBZb3UgcGFzc2VkICcgKyBpbnB1dCk7XG5cdCAgfVxuXG5cdCAgb3B0aW9ucyA9IF91dGlscy5leHRlbmQoe30sIG9wdGlvbnMpO1xuXHQgIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuXHQgICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfVxuXG5cdCAgdmFyIGNvbXBpbGVkID0gdW5kZWZpbmVkO1xuXG5cdCAgZnVuY3Rpb24gY29tcGlsZUlucHV0KCkge1xuXHQgICAgdmFyIGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG5cdCAgICAgICAgZW52aXJvbm1lbnQgPSBuZXcgZW52LkNvbXBpbGVyKCkuY29tcGlsZShhc3QsIG9wdGlvbnMpLFxuXHQgICAgICAgIHRlbXBsYXRlU3BlYyA9IG5ldyBlbnYuSmF2YVNjcmlwdENvbXBpbGVyKCkuY29tcGlsZShlbnZpcm9ubWVudCwgb3B0aW9ucywgdW5kZWZpbmVkLCB0cnVlKTtcblx0ICAgIHJldHVybiBlbnYudGVtcGxhdGUodGVtcGxhdGVTcGVjKTtcblx0ICB9XG5cblx0ICAvLyBUZW1wbGF0ZSBpcyBvbmx5IGNvbXBpbGVkIG9uIGZpcnN0IHVzZSBhbmQgY2FjaGVkIGFmdGVyIHRoYXQgcG9pbnQuXG5cdCAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIGV4ZWNPcHRpb25zKSB7XG5cdCAgICBpZiAoIWNvbXBpbGVkKSB7XG5cdCAgICAgIGNvbXBpbGVkID0gY29tcGlsZUlucHV0KCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY29tcGlsZWQuY2FsbCh0aGlzLCBjb250ZXh0LCBleGVjT3B0aW9ucyk7XG5cdCAgfVxuXHQgIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAoc2V0dXBPcHRpb25zKSB7XG5cdCAgICBpZiAoIWNvbXBpbGVkKSB7XG5cdCAgICAgIGNvbXBpbGVkID0gY29tcGlsZUlucHV0KCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY29tcGlsZWQuX3NldHVwKHNldHVwT3B0aW9ucyk7XG5cdCAgfTtcblx0ICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5fY2hpbGQoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgfTtcblx0ICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gYXJnRXF1YWxzKGEsIGIpIHtcblx0ICBpZiAoYSA9PT0gYikge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXG5cdCAgaWYgKF91dGlscy5pc0FycmF5KGEpICYmIF91dGlscy5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIGlmICghYXJnRXF1YWxzKGFbaV0sIGJbaV0pKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKHNleHByKSB7XG5cdCAgaWYgKCFzZXhwci5wYXRoLnBhcnRzKSB7XG5cdCAgICB2YXIgbGl0ZXJhbCA9IHNleHByLnBhdGg7XG5cdCAgICAvLyBDYXN0aW5nIHRvIHN0cmluZyBoZXJlIHRvIG1ha2UgZmFsc2UgYW5kIDAgbGl0ZXJhbCB2YWx1ZXMgcGxheSBuaWNlbHkgd2l0aCB0aGUgcmVzdFxuXHQgICAgLy8gb2YgdGhlIHN5c3RlbS5cblx0ICAgIHNleHByLnBhdGggPSB7XG5cdCAgICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXG5cdCAgICAgIGRhdGE6IGZhbHNlLFxuXHQgICAgICBkZXB0aDogMCxcblx0ICAgICAgcGFydHM6IFtsaXRlcmFsLm9yaWdpbmFsICsgJyddLFxuXHQgICAgICBvcmlnaW5hbDogbGl0ZXJhbC5vcmlnaW5hbCArICcnLFxuXHQgICAgICBsb2M6IGxpdGVyYWwubG9jXG5cdCAgICB9O1xuXHQgIH1cblx0fVxuXG4vKioqLyB9KSxcbi8qIDQyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9iYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2NvZGVHZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblxuXHR2YXIgX2NvZGVHZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29kZUdlbik7XG5cblx0ZnVuY3Rpb24gTGl0ZXJhbCh2YWx1ZSkge1xuXHQgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIEphdmFTY3JpcHRDb21waWxlcigpIHt9XG5cblx0SmF2YVNjcmlwdENvbXBpbGVyLnByb3RvdHlwZSA9IHtcblx0ICAvLyBQVUJMSUMgQVBJOiBZb3UgY2FuIG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMgaW4gYSBzdWJjbGFzcyB0byBwcm92aWRlXG5cdCAgLy8gYWx0ZXJuYXRpdmUgY29tcGlsZWQgZm9ybXMgZm9yIG5hbWUgbG9va3VwIGFuZCBidWZmZXJpbmcgc2VtYW50aWNzXG5cdCAgbmFtZUxvb2t1cDogZnVuY3Rpb24gbmFtZUxvb2t1cChwYXJlbnQsIG5hbWUgLyogLCB0eXBlKi8pIHtcblx0ICAgIGlmIChuYW1lID09PSAnY29uc3RydWN0b3InKSB7XG5cdCAgICAgIHJldHVybiBbJygnLCBwYXJlbnQsICcucHJvcGVydHlJc0VudW1lcmFibGUoXFwnY29uc3RydWN0b3JcXCcpID8gJywgcGFyZW50LCAnLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkJywgJyknXTtcblx0ICAgIH1cblx0ICAgIGlmIChKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUobmFtZSkpIHtcblx0ICAgICAgcmV0dXJuIFtwYXJlbnQsICcuJywgbmFtZV07XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJ1snLCBKU09OLnN0cmluZ2lmeShuYW1lKSwgJ10nXTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGRlcHRoZWRMb29rdXA6IGZ1bmN0aW9uIGRlcHRoZWRMb29rdXAobmFtZSkge1xuXHQgICAgcmV0dXJuIFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmxvb2t1cCcpLCAnKGRlcHRocywgXCInLCBuYW1lLCAnXCIpJ107XG5cdCAgfSxcblxuXHQgIGNvbXBpbGVySW5mbzogZnVuY3Rpb24gY29tcGlsZXJJbmZvKCkge1xuXHQgICAgdmFyIHJldmlzaW9uID0gX2Jhc2UuQ09NUElMRVJfUkVWSVNJT04sXG5cdCAgICAgICAgdmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW3JldmlzaW9uXTtcblx0ICAgIHJldHVybiBbcmV2aXNpb24sIHZlcnNpb25zXTtcblx0ICB9LFxuXG5cdCAgYXBwZW5kVG9CdWZmZXI6IGZ1bmN0aW9uIGFwcGVuZFRvQnVmZmVyKHNvdXJjZSwgbG9jYXRpb24sIGV4cGxpY2l0KSB7XG5cdCAgICAvLyBGb3JjZSBhIHNvdXJjZSBhcyB0aGlzIHNpbXBsaWZpZXMgdGhlIG1lcmdlIGxvZ2ljLlxuXHQgICAgaWYgKCFfdXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG5cdCAgICAgIHNvdXJjZSA9IFtzb3VyY2VdO1xuXHQgICAgfVxuXHQgICAgc291cmNlID0gdGhpcy5zb3VyY2Uud3JhcChzb3VyY2UsIGxvY2F0aW9uKTtcblxuXHQgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUpIHtcblx0ICAgICAgcmV0dXJuIFsncmV0dXJuICcsIHNvdXJjZSwgJzsnXTtcblx0ICAgIH0gZWxzZSBpZiAoZXhwbGljaXQpIHtcblx0ICAgICAgLy8gVGhpcyBpcyBhIGNhc2Ugd2hlcmUgdGhlIGJ1ZmZlciBvcGVyYXRpb24gb2NjdXJzIGFzIGEgY2hpbGQgb2YgYW5vdGhlclxuXHQgICAgICAvLyBjb25zdHJ1Y3QsIGdlbmVyYWxseSBicmFjZXMuIFdlIGhhdmUgdG8gZXhwbGljaXRseSBvdXRwdXQgdGhlc2UgYnVmZmVyXG5cdCAgICAgIC8vIG9wZXJhdGlvbnMgdG8gZW5zdXJlIHRoYXQgdGhlIGVtaXR0ZWQgY29kZSBnb2VzIGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uLlxuXHQgICAgICByZXR1cm4gWydidWZmZXIgKz0gJywgc291cmNlLCAnOyddO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgc291cmNlLmFwcGVuZFRvQnVmZmVyID0gdHJ1ZTtcblx0ICAgICAgcmV0dXJuIHNvdXJjZTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgaW5pdGlhbGl6ZUJ1ZmZlcjogZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1ZmZlcigpIHtcblx0ICAgIHJldHVybiB0aGlzLnF1b3RlZFN0cmluZygnJyk7XG5cdCAgfSxcblx0ICAvLyBFTkQgUFVCTElDIEFQSVxuXG5cdCAgY29tcGlsZTogZnVuY3Rpb24gY29tcGlsZShlbnZpcm9ubWVudCwgb3B0aW9ucywgY29udGV4dCwgYXNPYmplY3QpIHtcblx0ICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0ICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICB0aGlzLnN0cmluZ1BhcmFtcyA9IHRoaXMub3B0aW9ucy5zdHJpbmdQYXJhbXM7XG5cdCAgICB0aGlzLnRyYWNrSWRzID0gdGhpcy5vcHRpb25zLnRyYWNrSWRzO1xuXHQgICAgdGhpcy5wcmVjb21waWxlID0gIWFzT2JqZWN0O1xuXG5cdCAgICB0aGlzLm5hbWUgPSB0aGlzLmVudmlyb25tZW50Lm5hbWU7XG5cdCAgICB0aGlzLmlzQ2hpbGQgPSAhIWNvbnRleHQ7XG5cdCAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHtcblx0ICAgICAgZGVjb3JhdG9yczogW10sXG5cdCAgICAgIHByb2dyYW1zOiBbXSxcblx0ICAgICAgZW52aXJvbm1lbnRzOiBbXVxuXHQgICAgfTtcblxuXHQgICAgdGhpcy5wcmVhbWJsZSgpO1xuXG5cdCAgICB0aGlzLnN0YWNrU2xvdCA9IDA7XG5cdCAgICB0aGlzLnN0YWNrVmFycyA9IFtdO1xuXHQgICAgdGhpcy5hbGlhc2VzID0ge307XG5cdCAgICB0aGlzLnJlZ2lzdGVycyA9IHsgbGlzdDogW10gfTtcblx0ICAgIHRoaXMuaGFzaGVzID0gW107XG5cdCAgICB0aGlzLmNvbXBpbGVTdGFjayA9IFtdO1xuXHQgICAgdGhpcy5pbmxpbmVTdGFjayA9IFtdO1xuXHQgICAgdGhpcy5ibG9ja1BhcmFtcyA9IFtdO1xuXG5cdCAgICB0aGlzLmNvbXBpbGVDaGlsZHJlbihlbnZpcm9ubWVudCwgb3B0aW9ucyk7XG5cblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVwdGhzIHx8IGVudmlyb25tZW50LnVzZURlY29yYXRvcnMgfHwgdGhpcy5vcHRpb25zLmNvbXBhdDtcblx0ICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IGVudmlyb25tZW50LnVzZUJsb2NrUGFyYW1zO1xuXG5cdCAgICB2YXIgb3Bjb2RlcyA9IGVudmlyb25tZW50Lm9wY29kZXMsXG5cdCAgICAgICAgb3Bjb2RlID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGZpcnN0TG9jID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGkgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgbCA9IHVuZGVmaW5lZDtcblxuXHQgICAgZm9yIChpID0gMCwgbCA9IG9wY29kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIG9wY29kZSA9IG9wY29kZXNbaV07XG5cblx0ICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0gb3Bjb2RlLmxvYztcblx0ICAgICAgZmlyc3RMb2MgPSBmaXJzdExvYyB8fCBvcGNvZGUubG9jO1xuXHQgICAgICB0aGlzW29wY29kZS5vcGNvZGVdLmFwcGx5KHRoaXMsIG9wY29kZS5hcmdzKTtcblx0ICAgIH1cblxuXHQgICAgLy8gRmx1c2ggYW55IHRyYWlsaW5nIGNvbnRlbnQgdGhhdCBtaWdodCBiZSBwZW5kaW5nLlxuXHQgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0gZmlyc3RMb2M7XG5cdCAgICB0aGlzLnB1c2hTb3VyY2UoJycpO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgaWYgKHRoaXMuc3RhY2tTbG90IHx8IHRoaXMuaW5saW5lU3RhY2subGVuZ3RoIHx8IHRoaXMuY29tcGlsZVN0YWNrLmxlbmd0aCkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQ29tcGlsZSBjb21wbGV0ZWQgd2l0aCBjb250ZW50IGxlZnQgb24gc3RhY2snKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKCF0aGlzLmRlY29yYXRvcnMuaXNFbXB0eSgpKSB7XG5cdCAgICAgIHRoaXMudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzLnByZXBlbmQoJ3ZhciBkZWNvcmF0b3JzID0gY29udGFpbmVyLmRlY29yYXRvcnM7XFxuJyk7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCdyZXR1cm4gZm47Jyk7XG5cblx0ICAgICAgaWYgKGFzT2JqZWN0KSB7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gRnVuY3Rpb24uYXBwbHkodGhpcywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCAnZGVwdGgwJywgJ2RhdGEnLCAnYmxvY2tQYXJhbXMnLCAnZGVwdGhzJywgdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCldKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMucHJlcGVuZCgnZnVuY3Rpb24oZm4sIHByb3BzLCBjb250YWluZXIsIGRlcHRoMCwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xcbicpO1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCd9XFxuJyk7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycyA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gdGhpcy5jcmVhdGVGdW5jdGlvbkNvbnRleHQoYXNPYmplY3QpO1xuXHQgICAgaWYgKCF0aGlzLmlzQ2hpbGQpIHtcblx0ICAgICAgdmFyIHJldCA9IHtcblx0ICAgICAgICBjb21waWxlcjogdGhpcy5jb21waWxlckluZm8oKSxcblx0ICAgICAgICBtYWluOiBmblxuXHQgICAgICB9O1xuXG5cdCAgICAgIGlmICh0aGlzLmRlY29yYXRvcnMpIHtcblx0ICAgICAgICByZXQubWFpbl9kID0gdGhpcy5kZWNvcmF0b3JzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuXHQgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBfY29udGV4dCA9IHRoaXMuY29udGV4dDtcblx0ICAgICAgdmFyIHByb2dyYW1zID0gX2NvbnRleHQucHJvZ3JhbXM7XG5cdCAgICAgIHZhciBkZWNvcmF0b3JzID0gX2NvbnRleHQuZGVjb3JhdG9ycztcblxuXHQgICAgICBmb3IgKGkgPSAwLCBsID0gcHJvZ3JhbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKHByb2dyYW1zW2ldKSB7XG5cdCAgICAgICAgICByZXRbaV0gPSBwcm9ncmFtc1tpXTtcblx0ICAgICAgICAgIGlmIChkZWNvcmF0b3JzW2ldKSB7XG5cdCAgICAgICAgICAgIHJldFtpICsgJ19kJ10gPSBkZWNvcmF0b3JzW2ldO1xuXHQgICAgICAgICAgICByZXQudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQudXNlUGFydGlhbCkge1xuXHQgICAgICAgIHJldC51c2VQYXJ0aWFsID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcblx0ICAgICAgICByZXQudXNlRGF0YSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgICAgcmV0LnVzZURlcHRocyA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgICByZXQudXNlQmxvY2tQYXJhbXMgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICAgICAgcmV0LmNvbXBhdCA9IHRydWU7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoIWFzT2JqZWN0KSB7XG5cdCAgICAgICAgcmV0LmNvbXBpbGVyID0gSlNPTi5zdHJpbmdpZnkocmV0LmNvbXBpbGVyKTtcblxuXHQgICAgICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IHsgc3RhcnQ6IHsgbGluZTogMSwgY29sdW1uOiAwIH0gfTtcblx0ICAgICAgICByZXQgPSB0aGlzLm9iamVjdExpdGVyYWwocmV0KTtcblxuXHQgICAgICAgIGlmIChvcHRpb25zLnNyY05hbWUpIHtcblx0ICAgICAgICAgIHJldCA9IHJldC50b1N0cmluZ1dpdGhTb3VyY2VNYXAoeyBmaWxlOiBvcHRpb25zLmRlc3ROYW1lIH0pO1xuXHQgICAgICAgICAgcmV0Lm1hcCA9IHJldC5tYXAgJiYgcmV0Lm1hcC50b1N0cmluZygpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXQgPSByZXQudG9TdHJpbmcoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0LmNvbXBpbGVyT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gZm47XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHByZWFtYmxlOiBmdW5jdGlvbiBwcmVhbWJsZSgpIHtcblx0ICAgIC8vIHRyYWNrIHRoZSBsYXN0IGNvbnRleHQgcHVzaGVkIGludG8gcGxhY2UgdG8gYWxsb3cgc2tpcHBpbmcgdGhlXG5cdCAgICAvLyBnZXRDb250ZXh0IG9wY29kZSB3aGVuIGl0IHdvdWxkIGJlIGEgbm9vcFxuXHQgICAgdGhpcy5sYXN0Q29udGV4dCA9IDA7XG5cdCAgICB0aGlzLnNvdXJjZSA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XG5cdCAgICB0aGlzLmRlY29yYXRvcnMgPSBuZXcgX2NvZGVHZW4yWydkZWZhdWx0J10odGhpcy5vcHRpb25zLnNyY05hbWUpO1xuXHQgIH0sXG5cblx0ICBjcmVhdGVGdW5jdGlvbkNvbnRleHQ6IGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCkge1xuXHQgICAgdmFyIHZhckRlY2xhcmF0aW9ucyA9ICcnO1xuXG5cdCAgICB2YXIgbG9jYWxzID0gdGhpcy5zdGFja1ZhcnMuY29uY2F0KHRoaXMucmVnaXN0ZXJzLmxpc3QpO1xuXHQgICAgaWYgKGxvY2Fscy5sZW5ndGggPiAwKSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCAnICsgbG9jYWxzLmpvaW4oJywgJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIEdlbmVyYXRlIG1pbmltaXplciBhbGlhcyBtYXBwaW5nc1xuXHQgICAgLy9cblx0ICAgIC8vIFdoZW4gdXNpbmcgdHJ1ZSBTb3VyY2VOb2RlcywgdGhpcyB3aWxsIHVwZGF0ZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgZ2l2ZW4gYWxpYXNcblx0ICAgIC8vIGFzIHRoZSBzb3VyY2Ugbm9kZXMgYXJlIHJldXNlZCBpbiBzaXR1LiBGb3IgdGhlIG5vbi1zb3VyY2Ugbm9kZSBjb21waWxhdGlvbiBtb2RlLFxuXHQgICAgLy8gYWxpYXNlcyB3aWxsIG5vdCBiZSB1c2VkLCBidXQgdGhpcyBjYXNlIGlzIGFscmVhZHkgYmVpbmcgcnVuIG9uIHRoZSBjbGllbnQgYW5kXG5cdCAgICAvLyB3ZSBhcmVuJ3QgY29uY2VybiBhYm91dCBtaW5pbWl6aW5nIHRoZSB0ZW1wbGF0ZSBzaXplLlxuXHQgICAgdmFyIGFsaWFzQ291bnQgPSAwO1xuXHQgICAgZm9yICh2YXIgYWxpYXMgaW4gdGhpcy5hbGlhc2VzKSB7XG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluXG5cdCAgICAgIHZhciBub2RlID0gdGhpcy5hbGlhc2VzW2FsaWFzXTtcblxuXHQgICAgICBpZiAodGhpcy5hbGlhc2VzLmhhc093blByb3BlcnR5KGFsaWFzKSAmJiBub2RlLmNoaWxkcmVuICYmIG5vZGUucmVmZXJlbmNlQ291bnQgPiAxKSB7XG5cdCAgICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsIGFsaWFzJyArICsrYWxpYXNDb3VudCArICc9JyArIGFsaWFzO1xuXHQgICAgICAgIG5vZGUuY2hpbGRyZW5bMF0gPSAnYWxpYXMnICsgYWxpYXNDb3VudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFyYW1zID0gWydjb250YWluZXInLCAnZGVwdGgwJywgJ2hlbHBlcnMnLCAncGFydGlhbHMnLCAnZGF0YSddO1xuXG5cdCAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcyB8fCB0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwYXJhbXMucHVzaCgnYmxvY2tQYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwYXJhbXMucHVzaCgnZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIFBlcmZvcm0gYSBzZWNvbmQgcGFzcyBvdmVyIHRoZSBvdXRwdXQgdG8gbWVyZ2UgY29udGVudCB3aGVuIHBvc3NpYmxlXG5cdCAgICB2YXIgc291cmNlID0gdGhpcy5tZXJnZVNvdXJjZSh2YXJEZWNsYXJhdGlvbnMpO1xuXG5cdCAgICBpZiAoYXNPYmplY3QpIHtcblx0ICAgICAgcGFyYW1zLnB1c2goc291cmNlKTtcblxuXHQgICAgICByZXR1cm4gRnVuY3Rpb24uYXBwbHkodGhpcywgcGFyYW1zKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiB0aGlzLnNvdXJjZS53cmFwKFsnZnVuY3Rpb24oJywgcGFyYW1zLmpvaW4oJywnKSwgJykge1xcbiAgJywgc291cmNlLCAnfSddKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIG1lcmdlU291cmNlOiBmdW5jdGlvbiBtZXJnZVNvdXJjZSh2YXJEZWNsYXJhdGlvbnMpIHtcblx0ICAgIHZhciBpc1NpbXBsZSA9IHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUsXG5cdCAgICAgICAgYXBwZW5kT25seSA9ICF0aGlzLmZvcmNlQnVmZmVyLFxuXHQgICAgICAgIGFwcGVuZEZpcnN0ID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHNvdXJjZVNlZW4gPSB1bmRlZmluZWQsXG5cdCAgICAgICAgYnVmZmVyU3RhcnQgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuXHQgICAgdGhpcy5zb3VyY2UuZWFjaChmdW5jdGlvbiAobGluZSkge1xuXHQgICAgICBpZiAobGluZS5hcHBlbmRUb0J1ZmZlcikge1xuXHQgICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgICAgbGluZS5wcmVwZW5kKCcgICsgJyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gbGluZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgYnVmZmVyRW5kID0gbGluZTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICAgIGlmICghc291cmNlU2Vlbikge1xuXHQgICAgICAgICAgICBhcHBlbmRGaXJzdCA9IHRydWU7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdidWZmZXIgKz0gJyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBidWZmZXJFbmQuYWRkKCc7Jyk7XG5cdCAgICAgICAgICBidWZmZXJTdGFydCA9IGJ1ZmZlckVuZCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBzb3VyY2VTZWVuID0gdHJ1ZTtcblx0ICAgICAgICBpZiAoIWlzU2ltcGxlKSB7XG5cdCAgICAgICAgICBhcHBlbmRPbmx5ID0gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgaWYgKGFwcGVuZE9ubHkpIHtcblx0ICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuICcpO1xuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgfSBlbHNlIGlmICghc291cmNlU2Vlbikge1xuXHQgICAgICAgIHRoaXMuc291cmNlLnB1c2goJ3JldHVybiBcIlwiOycpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYnVmZmVyID0gJyArIChhcHBlbmRGaXJzdCA/ICcnIDogdGhpcy5pbml0aWFsaXplQnVmZmVyKCkpO1xuXG5cdCAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ3JldHVybiBidWZmZXIgKyAnKTtcblx0ICAgICAgICBidWZmZXJFbmQuYWRkKCc7Jyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIGJ1ZmZlcjsnKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAodmFyRGVjbGFyYXRpb25zKSB7XG5cdCAgICAgIHRoaXMuc291cmNlLnByZXBlbmQoJ3ZhciAnICsgdmFyRGVjbGFyYXRpb25zLnN1YnN0cmluZygyKSArIChhcHBlbmRGaXJzdCA/ICcnIDogJztcXG4nKSk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLnNvdXJjZS5tZXJnZSgpO1xuXHQgIH0sXG5cblx0ICAvLyBbYmxvY2tWYWx1ZV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHZhbHVlXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXR1cm4gdmFsdWUgb2YgYmxvY2tIZWxwZXJNaXNzaW5nXG5cdCAgLy9cblx0ICAvLyBUaGUgcHVycG9zZSBvZiB0aGlzIG9wY29kZSBpcyB0byB0YWtlIGEgYmxvY2sgb2YgdGhlIGZvcm1cblx0ICAvLyBge3sjdGhpcy5mb299fS4uLnt7L3RoaXMuZm9vfX1gLCByZXNvbHZlIHRoZSB2YWx1ZSBvZiBgZm9vYCwgYW5kXG5cdCAgLy8gcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgd2l0aCB0aGUgcmVzdWx0IG9mIHByb3Blcmx5XG5cdCAgLy8gaW52b2tpbmcgYmxvY2tIZWxwZXJNaXNzaW5nLlxuXHQgIGJsb2NrVmFsdWU6IGZ1bmN0aW9uIGJsb2NrVmFsdWUobmFtZSkge1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmJsb2NrSGVscGVyTWlzc2luZycpLFxuXHQgICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcblx0ICAgIHRoaXMuc2V0dXBIZWxwZXJBcmdzKG5hbWUsIDAsIHBhcmFtcyk7XG5cblx0ICAgIHZhciBibG9ja05hbWUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICBwYXJhbXMuc3BsaWNlKDEsIDAsIGJsb2NrTmFtZSk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoYmxvY2tIZWxwZXJNaXNzaW5nLCAnY2FsbCcsIHBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbYW1iaWd1b3VzQmxvY2tWYWx1ZV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHZhbHVlXG5cdCAgLy8gQ29tcGlsZXIgdmFsdWUsIGJlZm9yZTogbGFzdEhlbHBlcj12YWx1ZSBvZiBsYXN0IGZvdW5kIGhlbHBlciwgaWYgYW55XG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBubyBsYXN0SGVscGVyOiBzYW1lIGFzIFtibG9ja1ZhbHVlXVxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlciwgaWYgbGFzdEhlbHBlcjogdmFsdWVcblx0ICBhbWJpZ3VvdXNCbG9ja1ZhbHVlOiBmdW5jdGlvbiBhbWJpZ3VvdXNCbG9ja1ZhbHVlKCkge1xuXHQgICAgLy8gV2UncmUgYmVpbmcgYSBiaXQgY2hlZWt5IGFuZCByZXVzaW5nIHRoZSBvcHRpb25zIHZhbHVlIGZyb20gdGhlIHByaW9yIGV4ZWNcblx0ICAgIHZhciBibG9ja0hlbHBlck1pc3NpbmcgPSB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmcnKSxcblx0ICAgICAgICBwYXJhbXMgPSBbdGhpcy5jb250ZXh0TmFtZSgwKV07XG5cdCAgICB0aGlzLnNldHVwSGVscGVyQXJncygnJywgMCwgcGFyYW1zLCB0cnVlKTtcblxuXHQgICAgdGhpcy5mbHVzaElubGluZSgpO1xuXG5cdCAgICB2YXIgY3VycmVudCA9IHRoaXMudG9wU3RhY2soKTtcblx0ICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgY3VycmVudCk7XG5cblx0ICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICghJywgdGhpcy5sYXN0SGVscGVyLCAnKSB7ICcsIGN1cnJlbnQsICcgPSAnLCB0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoYmxvY2tIZWxwZXJNaXNzaW5nLCAnY2FsbCcsIHBhcmFtcyksICd9J10pO1xuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kQ29udGVudF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBBcHBlbmRzIHRoZSBzdHJpbmcgdmFsdWUgb2YgYGNvbnRlbnRgIHRvIHRoZSBjdXJyZW50IGJ1ZmZlclxuXHQgIGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoY29udGVudCkge1xuXHQgICAgaWYgKHRoaXMucGVuZGluZ0NvbnRlbnQpIHtcblx0ICAgICAgY29udGVudCA9IHRoaXMucGVuZGluZ0NvbnRlbnQgKyBjb250ZW50O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wZW5kaW5nTG9jYXRpb24gPSB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb247XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucGVuZGluZ0NvbnRlbnQgPSBjb250ZW50O1xuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBDb2VyY2VzIGB2YWx1ZWAgdG8gYSBTdHJpbmcgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGN1cnJlbnQgYnVmZmVyLlxuXHQgIC8vXG5cdCAgLy8gSWYgYHZhbHVlYCBpcyB0cnV0aHksIG9yIDAsIGl0IGlzIGNvZXJjZWQgaW50byBhIHN0cmluZyBhbmQgYXBwZW5kZWRcblx0ICAvLyBPdGhlcndpc2UsIHRoZSBlbXB0eSBzdHJpbmcgaXMgYXBwZW5kZWRcblx0ICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcblx0ICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcblx0ICAgICAgdGhpcy5yZXBsYWNlU3RhY2soZnVuY3Rpb24gKGN1cnJlbnQpIHtcblx0ICAgICAgICByZXR1cm4gWycgIT0gbnVsbCA/ICcsIGN1cnJlbnQsICcgOiBcIlwiJ107XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIHRoaXMucHVzaFNvdXJjZSh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMucG9wU3RhY2soKSkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdmFyIGxvY2FsID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICB0aGlzLnB1c2hTb3VyY2UoWydpZiAoJywgbG9jYWwsICcgIT0gbnVsbCkgeyAnLCB0aGlzLmFwcGVuZFRvQnVmZmVyKGxvY2FsLCB1bmRlZmluZWQsIHRydWUpLCAnIH0nXSk7XG5cdCAgICAgIGlmICh0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlKSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU291cmNlKFsnZWxzZSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIoXCInJ1wiLCB1bmRlZmluZWQsIHRydWUpLCAnIH0nXSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gW2FwcGVuZEVzY2FwZWRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIEVzY2FwZSBgdmFsdWVgIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGJ1ZmZlclxuXHQgIGFwcGVuZEVzY2FwZWQ6IGZ1bmN0aW9uIGFwcGVuZEVzY2FwZWQoKSB7XG5cdCAgICB0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcihbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uJyksICcoJywgdGhpcy5wb3BTdGFjaygpLCAnKSddKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtnZXRDb250ZXh0XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYWZ0ZXI6IGxhc3RDb250ZXh0PWRlcHRoXG5cdCAgLy9cblx0ICAvLyBTZXQgdGhlIHZhbHVlIG9mIHRoZSBgbGFzdENvbnRleHRgIGNvbXBpbGVyIHZhbHVlIHRvIHRoZSBkZXB0aFxuXHQgIGdldENvbnRleHQ6IGZ1bmN0aW9uIGdldENvbnRleHQoZGVwdGgpIHtcblx0ICAgIHRoaXMubGFzdENvbnRleHQgPSBkZXB0aDtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hDb250ZXh0XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBjdXJyZW50Q29udGV4dCwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoZXMgdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQgb250byB0aGUgc3RhY2suXG5cdCAgcHVzaENvbnRleHQ6IGZ1bmN0aW9uIHB1c2hDb250ZXh0KCkge1xuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMuY29udGV4dE5hbWUodGhpcy5sYXN0Q29udGV4dCkpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwT25Db250ZXh0XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBjdXJyZW50Q29udGV4dFtuYW1lXSwgLi4uXG5cdCAgLy9cblx0ICAvLyBMb29rcyB1cCB0aGUgdmFsdWUgb2YgYG5hbWVgIG9uIHRoZSBjdXJyZW50IGNvbnRleHQgYW5kIHB1c2hlc1xuXHQgIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuXHQgIGxvb2t1cE9uQ29udGV4dDogZnVuY3Rpb24gbG9va3VwT25Db250ZXh0KHBhcnRzLCBmYWxzeSwgc3RyaWN0LCBzY29wZWQpIHtcblx0ICAgIHZhciBpID0gMDtcblxuXHQgICAgaWYgKCFzY29wZWQgJiYgdGhpcy5vcHRpb25zLmNvbXBhdCAmJiAhdGhpcy5sYXN0Q29udGV4dCkge1xuXHQgICAgICAvLyBUaGUgZGVwdGhlZCBxdWVyeSBpcyBleHBlY3RlZCB0byBoYW5kbGUgdGhlIHVuZGVmaW5lZCBsb2dpYyBmb3IgdGhlIHJvb3QgbGV2ZWwgdGhhdFxuXHQgICAgICAvLyBpcyBpbXBsZW1lbnRlZCBiZWxvdywgc28gd2UgZXZhbHVhdGUgdGhhdCBkaXJlY3RseSBpbiBjb21wYXQgbW9kZVxuXHQgICAgICB0aGlzLnB1c2godGhpcy5kZXB0aGVkTG9va3VwKHBhcnRzW2krK10pKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaENvbnRleHQoKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KTtcblx0ICB9LFxuXG5cdCAgLy8gW2xvb2t1cEJsb2NrUGFyYW1dXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGJsb2NrUGFyYW1bbmFtZV0sIC4uLlxuXHQgIC8vXG5cdCAgLy8gTG9va3MgdXAgdGhlIHZhbHVlIG9mIGBwYXJ0c2Agb24gdGhlIGdpdmVuIGJsb2NrIHBhcmFtIGFuZCBwdXNoZXNcblx0ICAvLyBpdCBvbnRvIHRoZSBzdGFjay5cblx0ICBsb29rdXBCbG9ja1BhcmFtOiBmdW5jdGlvbiBsb29rdXBCbG9ja1BhcmFtKGJsb2NrUGFyYW1JZCwgcGFydHMpIHtcblx0ICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0cnVlO1xuXG5cdCAgICB0aGlzLnB1c2goWydibG9ja1BhcmFtc1snLCBibG9ja1BhcmFtSWRbMF0sICddWycsIGJsb2NrUGFyYW1JZFsxXSwgJ10nXSk7XG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdjb250ZXh0JywgcGFydHMsIDEpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwRGF0YV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogZGF0YSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIHRoZSBkYXRhIGxvb2t1cCBvcGVyYXRvclxuXHQgIGxvb2t1cERhdGE6IGZ1bmN0aW9uIGxvb2t1cERhdGEoZGVwdGgsIHBhcnRzLCBzdHJpY3QpIHtcblx0ICAgIGlmICghZGVwdGgpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdkYXRhJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2NvbnRhaW5lci5kYXRhKGRhdGEsICcgKyBkZXB0aCArICcpJyk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2RhdGEnLCBwYXJ0cywgMCwgdHJ1ZSwgc3RyaWN0KTtcblx0ICB9LFxuXG5cdCAgcmVzb2x2ZVBhdGg6IGZ1bmN0aW9uIHJlc29sdmVQYXRoKHR5cGUsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KSB7XG5cdCAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLnN0cmljdCB8fCB0aGlzLm9wdGlvbnMuYXNzdW1lT2JqZWN0cykge1xuXHQgICAgICB0aGlzLnB1c2goc3RyaWN0TG9va3VwKHRoaXMub3B0aW9ucy5zdHJpY3QgJiYgc3RyaWN0LCB0aGlzLCBwYXJ0cywgdHlwZSkpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHZhciBsZW4gPSBwYXJ0cy5sZW5ndGg7XG5cdCAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXHQgICAgICB0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbiAoY3VycmVudCkge1xuXHQgICAgICAgIHZhciBsb29rdXAgPSBfdGhpcy5uYW1lTG9va3VwKGN1cnJlbnQsIHBhcnRzW2ldLCB0eXBlKTtcblx0ICAgICAgICAvLyBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IHplcm8gYW5kIGZhbHNlIGFyZSBoYW5kbGVkIHByb3Blcmx5IGlmIHRoZSBjb250ZXh0IChmYWxzeSBmbGFnKVxuXHQgICAgICAgIC8vIG5lZWRzIHRvIGhhdmUgdGhlIHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRoZXNlIHZhbHVlcy5cblx0ICAgICAgICBpZiAoIWZhbHN5KSB7XG5cdCAgICAgICAgICByZXR1cm4gWycgIT0gbnVsbCA/ICcsIGxvb2t1cCwgJyA6ICcsIGN1cnJlbnRdO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2FuIHVzZSBnZW5lcmljIGZhbHN5IGhhbmRsaW5nXG5cdCAgICAgICAgICByZXR1cm4gWycgJiYgJywgbG9va3VwXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbcmVzb2x2ZVBvc3NpYmxlTGFtYmRhXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzb2x2ZWQgdmFsdWUsIC4uLlxuXHQgIC8vXG5cdCAgLy8gSWYgdGhlIGB2YWx1ZWAgaXMgYSBsYW1iZGEsIHJlcGxhY2UgaXQgb24gdGhlIHN0YWNrIGJ5XG5cdCAgLy8gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbGFtYmRhXG5cdCAgcmVzb2x2ZVBvc3NpYmxlTGFtYmRhOiBmdW5jdGlvbiByZXNvbHZlUG9zc2libGVMYW1iZGEoKSB7XG5cdCAgICB0aGlzLnB1c2goW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubGFtYmRhJyksICcoJywgdGhpcy5wb3BTdGFjaygpLCAnLCAnLCB0aGlzLmNvbnRleHROYW1lKDApLCAnKSddKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hTdHJpbmdQYXJhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogc3RyaW5nLCBjdXJyZW50Q29udGV4dCwgLi4uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wY29kZSBpcyBkZXNpZ25lZCBmb3IgdXNlIGluIHN0cmluZyBtb2RlLCB3aGljaFxuXHQgIC8vIHByb3ZpZGVzIHRoZSBzdHJpbmcgdmFsdWUgb2YgYSBwYXJhbWV0ZXIgYWxvbmcgd2l0aCBpdHNcblx0ICAvLyBkZXB0aCByYXRoZXIgdGhhbiByZXNvbHZpbmcgaXQgaW1tZWRpYXRlbHkuXG5cdCAgcHVzaFN0cmluZ1BhcmFtOiBmdW5jdGlvbiBwdXNoU3RyaW5nUGFyYW0oc3RyaW5nLCB0eXBlKSB7XG5cdCAgICB0aGlzLnB1c2hDb250ZXh0KCk7XG5cdCAgICB0aGlzLnB1c2hTdHJpbmcodHlwZSk7XG5cblx0ICAgIC8vIElmIGl0J3MgYSBzdWJleHByZXNzaW9uLCB0aGUgc3RyaW5nIHJlc3VsdFxuXHQgICAgLy8gd2lsbCBiZSBwdXNoZWQgYWZ0ZXIgdGhpcyBvcGNvZGUuXG5cdCAgICBpZiAodHlwZSAhPT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHRoaXMucHVzaFN0cmluZyhzdHJpbmcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChzdHJpbmcpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGVtcHR5SGFzaDogZnVuY3Rpb24gZW1wdHlIYXNoKG9taXRFbXB0eSkge1xuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoSWRzXG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoQ29udGV4dHNcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoVHlwZXNcblx0ICAgIH1cblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChvbWl0RW1wdHkgPyAndW5kZWZpbmVkJyA6ICd7fScpO1xuXHQgIH0sXG5cdCAgcHVzaEhhc2g6IGZ1bmN0aW9uIHB1c2hIYXNoKCkge1xuXHQgICAgaWYgKHRoaXMuaGFzaCkge1xuXHQgICAgICB0aGlzLmhhc2hlcy5wdXNoKHRoaXMuaGFzaCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLmhhc2ggPSB7IHZhbHVlczogW10sIHR5cGVzOiBbXSwgY29udGV4dHM6IFtdLCBpZHM6IFtdIH07XG5cdCAgfSxcblx0ICBwb3BIYXNoOiBmdW5jdGlvbiBwb3BIYXNoKCkge1xuXHQgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cdCAgICB0aGlzLmhhc2ggPSB0aGlzLmhhc2hlcy5wb3AoKTtcblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLmlkcykpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC5jb250ZXh0cykpO1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudHlwZXMpKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLnZhbHVlcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFN0cmluZ11cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcXVvdGVkU3RyaW5nKHN0cmluZyksIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCBhIHF1b3RlZCB2ZXJzaW9uIG9mIGBzdHJpbmdgIG9udG8gdGhlIHN0YWNrXG5cdCAgcHVzaFN0cmluZzogZnVuY3Rpb24gcHVzaFN0cmluZyhzdHJpbmcpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnF1b3RlZFN0cmluZyhzdHJpbmcpKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hMaXRlcmFsXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiB2YWx1ZSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoZXMgYSB2YWx1ZSBvbnRvIHRoZSBzdGFjay4gVGhpcyBvcGVyYXRpb24gcHJldmVudHNcblx0ICAvLyB0aGUgY29tcGlsZXIgZnJvbSBjcmVhdGluZyBhIHRlbXBvcmFyeSB2YXJpYWJsZSB0byBob2xkXG5cdCAgLy8gaXQuXG5cdCAgcHVzaExpdGVyYWw6IGZ1bmN0aW9uIHB1c2hMaXRlcmFsKHZhbHVlKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodmFsdWUpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFByb2dyYW1dXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHByb2dyYW0oZ3VpZCksIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCBhIHByb2dyYW0gZXhwcmVzc2lvbiBvbnRvIHRoZSBzdGFjay4gVGhpcyB0YWtlc1xuXHQgIC8vIGEgY29tcGlsZS10aW1lIGd1aWQgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBydW50aW1lLWFjY2Vzc2libGVcblx0ICAvLyBleHByZXNzaW9uLlxuXHQgIHB1c2hQcm9ncmFtOiBmdW5jdGlvbiBwdXNoUHJvZ3JhbShndWlkKSB7XG5cdCAgICBpZiAoZ3VpZCAhPSBudWxsKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnByb2dyYW1FeHByZXNzaW9uKGd1aWQpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChudWxsKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gW3JlZ2lzdGVyRGVjb3JhdG9yXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gUG9wcyBvZmYgdGhlIGRlY29yYXRvcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGRlY29yYXRvcixcblx0ICAvLyBhbmQgaW5zZXJ0cyB0aGUgZGVjb3JhdG9yIGludG8gdGhlIGRlY29yYXRvcnMgbGlzdC5cblx0ICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgZm91bmREZWNvcmF0b3IgPSB0aGlzLm5hbWVMb29rdXAoJ2RlY29yYXRvcnMnLCBuYW1lLCAnZGVjb3JhdG9yJyksXG5cdCAgICAgICAgb3B0aW9ucyA9IHRoaXMuc2V0dXBIZWxwZXJBcmdzKG5hbWUsIHBhcmFtU2l6ZSk7XG5cblx0ICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKFsnZm4gPSAnLCB0aGlzLmRlY29yYXRvcnMuZnVuY3Rpb25DYWxsKGZvdW5kRGVjb3JhdG9yLCAnJywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCBvcHRpb25zXSksICcgfHwgZm47J10pO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlSGVscGVyXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBoZWxwZXIgaW52b2NhdGlvblxuXHQgIC8vXG5cdCAgLy8gUG9wcyBvZmYgdGhlIGhlbHBlcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGhlbHBlcixcblx0ICAvLyBhbmQgcHVzaGVzIHRoZSBoZWxwZXIncyByZXR1cm4gdmFsdWUgb250byB0aGUgc3RhY2suXG5cdCAgLy9cblx0ICAvLyBJZiB0aGUgaGVscGVyIGlzIG5vdCBmb3VuZCwgYGhlbHBlck1pc3NpbmdgIGlzIGNhbGxlZC5cblx0ICBpbnZva2VIZWxwZXI6IGZ1bmN0aW9uIGludm9rZUhlbHBlcihwYXJhbVNpemUsIG5hbWUsIGlzU2ltcGxlKSB7XG5cdCAgICB2YXIgbm9uSGVscGVyID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKSxcblx0ICAgICAgICBzaW1wbGUgPSBpc1NpbXBsZSA/IFtoZWxwZXIubmFtZSwgJyB8fCAnXSA6ICcnO1xuXG5cdCAgICB2YXIgbG9va3VwID0gWycoJ10uY29uY2F0KHNpbXBsZSwgbm9uSGVscGVyKTtcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLnN0cmljdCkge1xuXHQgICAgICBsb29rdXAucHVzaCgnIHx8ICcsIHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmhlbHBlck1pc3NpbmcnKSk7XG5cdCAgICB9XG5cdCAgICBsb29rdXAucHVzaCgnKScpO1xuXG5cdCAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGxvb2t1cCwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlS25vd25IZWxwZXJdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBpcyB1c2VkIHdoZW4gdGhlIGhlbHBlciBpcyBrbm93biB0byBleGlzdCxcblx0ICAvLyBzbyBhIGBoZWxwZXJNaXNzaW5nYCBmYWxsYmFjayBpcyBub3QgcmVxdWlyZWQuXG5cdCAgaW52b2tlS25vd25IZWxwZXI6IGZ1bmN0aW9uIGludm9rZUtub3duSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSkge1xuXHQgICAgdmFyIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKTtcblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoaGVscGVyLm5hbWUsICdjYWxsJywgaGVscGVyLmNhbGxQYXJhbXMpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2ludm9rZUFtYmlndW91c11cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgZGlzYW1iaWd1YXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiBhbiBleHByZXNzaW9uIGxpa2UgYHt7Zm9vfX1gXG5cdCAgLy8gaXMgcHJvdmlkZWQsIGJ1dCB3ZSBkb24ndCBrbm93IGF0IGNvbXBpbGUtdGltZSB3aGV0aGVyIGl0XG5cdCAgLy8gaXMgYSBoZWxwZXIgb3IgYSBwYXRoLlxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gZW1pdHMgbW9yZSBjb2RlIHRoYW4gdGhlIG90aGVyIG9wdGlvbnMsXG5cdCAgLy8gYW5kIGNhbiBiZSBhdm9pZGVkIGJ5IHBhc3NpbmcgdGhlIGBrbm93bkhlbHBlcnNgIGFuZFxuXHQgIC8vIGBrbm93bkhlbHBlcnNPbmx5YCBmbGFncyBhdCBjb21waWxlLXRpbWUuXG5cdCAgaW52b2tlQW1iaWd1b3VzOiBmdW5jdGlvbiBpbnZva2VBbWJpZ3VvdXMobmFtZSwgaGVscGVyQ2FsbCkge1xuXHQgICAgdGhpcy51c2VSZWdpc3RlcignaGVscGVyJyk7XG5cblx0ICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIHRoaXMuZW1wdHlIYXNoKCk7XG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcigwLCBuYW1lLCBoZWxwZXJDYWxsKTtcblxuXHQgICAgdmFyIGhlbHBlck5hbWUgPSB0aGlzLmxhc3RIZWxwZXIgPSB0aGlzLm5hbWVMb29rdXAoJ2hlbHBlcnMnLCBuYW1lLCAnaGVscGVyJyk7XG5cblx0ICAgIHZhciBsb29rdXAgPSBbJygnLCAnKGhlbHBlciA9ICcsIGhlbHBlck5hbWUsICcgfHwgJywgbm9uSGVscGVyLCAnKSddO1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XG5cdCAgICAgIGxvb2t1cFswXSA9ICcoaGVscGVyID0gJztcblx0ICAgICAgbG9va3VwLnB1c2goJyAhPSBudWxsID8gaGVscGVyIDogJywgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wdXNoKFsnKCcsIGxvb2t1cCwgaGVscGVyLnBhcmFtc0luaXQgPyBbJyksKCcsIGhlbHBlci5wYXJhbXNJbml0XSA6IFtdLCAnKSwnLCAnKHR5cGVvZiBoZWxwZXIgPT09ICcsIHRoaXMuYWxpYXNhYmxlKCdcImZ1bmN0aW9uXCInKSwgJyA/ICcsIHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbCgnaGVscGVyJywgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcyksICcgOiBoZWxwZXIpKSddKTtcblx0ICB9LFxuXG5cdCAgLy8gW2ludm9rZVBhcnRpYWxdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBjb250ZXh0LCAuLi5cblx0ICAvLyBPbiBzdGFjayBhZnRlcjogcmVzdWx0IG9mIHBhcnRpYWwgaW52b2NhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gcG9wcyBvZmYgYSBjb250ZXh0LCBpbnZva2VzIGEgcGFydGlhbCB3aXRoIHRoYXQgY29udGV4dCxcblx0ICAvLyBhbmQgcHVzaGVzIHRoZSByZXN1bHQgb2YgdGhlIGludm9jYXRpb24gYmFjay5cblx0ICBpbnZva2VQYXJ0aWFsOiBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKGlzRHluYW1pYywgbmFtZSwgaW5kZW50KSB7XG5cdCAgICB2YXIgcGFyYW1zID0gW10sXG5cdCAgICAgICAgb3B0aW9ucyA9IHRoaXMuc2V0dXBQYXJhbXMobmFtZSwgMSwgcGFyYW1zKTtcblxuXHQgICAgaWYgKGlzRHluYW1pYykge1xuXHQgICAgICBuYW1lID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBkZWxldGUgb3B0aW9ucy5uYW1lO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW5kZW50KSB7XG5cdCAgICAgIG9wdGlvbnMuaW5kZW50ID0gSlNPTi5zdHJpbmdpZnkoaW5kZW50KTtcblx0ICAgIH1cblx0ICAgIG9wdGlvbnMuaGVscGVycyA9ICdoZWxwZXJzJztcblx0ICAgIG9wdGlvbnMucGFydGlhbHMgPSAncGFydGlhbHMnO1xuXHQgICAgb3B0aW9ucy5kZWNvcmF0b3JzID0gJ2NvbnRhaW5lci5kZWNvcmF0b3JzJztcblxuXHQgICAgaWYgKCFpc0R5bmFtaWMpIHtcblx0ICAgICAgcGFyYW1zLnVuc2hpZnQodGhpcy5uYW1lTG9va3VwKCdwYXJ0aWFscycsIG5hbWUsICdwYXJ0aWFsJykpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGFyYW1zLnVuc2hpZnQobmFtZSk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICAgIG9wdGlvbnMuZGVwdGhzID0gJ2RlcHRocyc7XG5cdCAgICB9XG5cdCAgICBvcHRpb25zID0gdGhpcy5vYmplY3RMaXRlcmFsKG9wdGlvbnMpO1xuXHQgICAgcGFyYW1zLnB1c2gob3B0aW9ucyk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoJ2NvbnRhaW5lci5pbnZva2VQYXJ0aWFsJywgJycsIHBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbYXNzaWduVG9IYXNoXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLiwgaGFzaCwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi4sIGhhc2gsIC4uLlxuXHQgIC8vXG5cdCAgLy8gUG9wcyBhIHZhbHVlIG9mZiB0aGUgc3RhY2sgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGN1cnJlbnQgaGFzaFxuXHQgIGFzc2lnblRvSGFzaDogZnVuY3Rpb24gYXNzaWduVG9IYXNoKGtleSkge1xuXHQgICAgdmFyIHZhbHVlID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIGNvbnRleHQgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgdHlwZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBpZCA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgaWQgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdHlwZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgY29udGV4dCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cdCAgICBpZiAoY29udGV4dCkge1xuXHQgICAgICBoYXNoLmNvbnRleHRzW2tleV0gPSBjb250ZXh0O1xuXHQgICAgfVxuXHQgICAgaWYgKHR5cGUpIHtcblx0ICAgICAgaGFzaC50eXBlc1trZXldID0gdHlwZTtcblx0ICAgIH1cblx0ICAgIGlmIChpZCkge1xuXHQgICAgICBoYXNoLmlkc1trZXldID0gaWQ7XG5cdCAgICB9XG5cdCAgICBoYXNoLnZhbHVlc1trZXldID0gdmFsdWU7XG5cdCAgfSxcblxuXHQgIHB1c2hJZDogZnVuY3Rpb24gcHVzaElkKHR5cGUsIG5hbWUsIGNoaWxkKSB7XG5cdCAgICBpZiAodHlwZSA9PT0gJ0Jsb2NrUGFyYW0nKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnYmxvY2tQYXJhbXNbJyArIG5hbWVbMF0gKyAnXS5wYXRoWycgKyBuYW1lWzFdICsgJ10nICsgKGNoaWxkID8gJyArICcgKyBKU09OLnN0cmluZ2lmeSgnLicgKyBjaGlsZCkgOiAnJykpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUGF0aEV4cHJlc3Npb24nKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0cmluZyhuYW1lKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgndHJ1ZScpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdudWxsJyk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIEhFTFBFUlNcblxuXHQgIGNvbXBpbGVyOiBKYXZhU2NyaXB0Q29tcGlsZXIsXG5cblx0ICBjb21waWxlQ2hpbGRyZW46IGZ1bmN0aW9uIGNvbXBpbGVDaGlsZHJlbihlbnZpcm9ubWVudCwgb3B0aW9ucykge1xuXHQgICAgdmFyIGNoaWxkcmVuID0gZW52aXJvbm1lbnQuY2hpbGRyZW4sXG5cdCAgICAgICAgY2hpbGQgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY29tcGlsZXIgPSB1bmRlZmluZWQ7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG5cdCAgICAgIGNvbXBpbGVyID0gbmV3IHRoaXMuY29tcGlsZXIoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cblx0ICAgICAgdmFyIGV4aXN0aW5nID0gdGhpcy5tYXRjaEV4aXN0aW5nUHJvZ3JhbShjaGlsZCk7XG5cblx0ICAgICAgaWYgKGV4aXN0aW5nID09IG51bGwpIHtcblx0ICAgICAgICB0aGlzLmNvbnRleHQucHJvZ3JhbXMucHVzaCgnJyk7IC8vIFBsYWNlaG9sZGVyIHRvIHByZXZlbnQgbmFtZSBjb25mbGljdHMgZm9yIG5lc3RlZCBjaGlsZHJlblxuXHQgICAgICAgIHZhciBpbmRleCA9IHRoaXMuY29udGV4dC5wcm9ncmFtcy5sZW5ndGg7XG5cdCAgICAgICAgY2hpbGQuaW5kZXggPSBpbmRleDtcblx0ICAgICAgICBjaGlsZC5uYW1lID0gJ3Byb2dyYW0nICsgaW5kZXg7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LnByb2dyYW1zW2luZGV4XSA9IGNvbXBpbGVyLmNvbXBpbGUoY2hpbGQsIG9wdGlvbnMsIHRoaXMuY29udGV4dCwgIXRoaXMucHJlY29tcGlsZSk7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LmRlY29yYXRvcnNbaW5kZXhdID0gY29tcGlsZXIuZGVjb3JhdG9ycztcblx0ICAgICAgICB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2luZGV4XSA9IGNoaWxkO1xuXG5cdCAgICAgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBjb21waWxlci51c2VEZXB0aHM7XG5cdCAgICAgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgY29tcGlsZXIudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgICAgY2hpbGQudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHM7XG5cdCAgICAgICAgY2hpbGQudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGNoaWxkLmluZGV4ID0gZXhpc3RpbmcuaW5kZXg7XG5cdCAgICAgICAgY2hpbGQubmFtZSA9ICdwcm9ncmFtJyArIGV4aXN0aW5nLmluZGV4O1xuXG5cdCAgICAgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBleGlzdGluZy51c2VEZXB0aHM7XG5cdCAgICAgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZXhpc3RpbmcudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIG1hdGNoRXhpc3RpbmdQcm9ncmFtOiBmdW5jdGlvbiBtYXRjaEV4aXN0aW5nUHJvZ3JhbShjaGlsZCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIGVudmlyb25tZW50ID0gdGhpcy5jb250ZXh0LmVudmlyb25tZW50c1tpXTtcblx0ICAgICAgaWYgKGVudmlyb25tZW50ICYmIGVudmlyb25tZW50LmVxdWFscyhjaGlsZCkpIHtcblx0ICAgICAgICByZXR1cm4gZW52aXJvbm1lbnQ7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHJvZ3JhbUV4cHJlc3Npb246IGZ1bmN0aW9uIHByb2dyYW1FeHByZXNzaW9uKGd1aWQpIHtcblx0ICAgIHZhciBjaGlsZCA9IHRoaXMuZW52aXJvbm1lbnQuY2hpbGRyZW5bZ3VpZF0sXG5cdCAgICAgICAgcHJvZ3JhbVBhcmFtcyA9IFtjaGlsZC5pbmRleCwgJ2RhdGEnLCBjaGlsZC5ibG9ja1BhcmFtc107XG5cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnYmxvY2tQYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwcm9ncmFtUGFyYW1zLnB1c2goJ2RlcHRocycpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gJ2NvbnRhaW5lci5wcm9ncmFtKCcgKyBwcm9ncmFtUGFyYW1zLmpvaW4oJywgJykgKyAnKSc7XG5cdCAgfSxcblxuXHQgIHVzZVJlZ2lzdGVyOiBmdW5jdGlvbiB1c2VSZWdpc3RlcihuYW1lKSB7XG5cdCAgICBpZiAoIXRoaXMucmVnaXN0ZXJzW25hbWVdKSB7XG5cdCAgICAgIHRoaXMucmVnaXN0ZXJzW25hbWVdID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5yZWdpc3RlcnMubGlzdC5wdXNoKG5hbWUpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoOiBmdW5jdGlvbiBwdXNoKGV4cHIpIHtcblx0ICAgIGlmICghKGV4cHIgaW5zdGFuY2VvZiBMaXRlcmFsKSkge1xuXHQgICAgICBleHByID0gdGhpcy5zb3VyY2Uud3JhcChleHByKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5pbmxpbmVTdGFjay5wdXNoKGV4cHIpO1xuXHQgICAgcmV0dXJuIGV4cHI7XG5cdCAgfSxcblxuXHQgIHB1c2hTdGFja0xpdGVyYWw6IGZ1bmN0aW9uIHB1c2hTdGFja0xpdGVyYWwoaXRlbSkge1xuXHQgICAgdGhpcy5wdXNoKG5ldyBMaXRlcmFsKGl0ZW0pKTtcblx0ICB9LFxuXG5cdCAgcHVzaFNvdXJjZTogZnVuY3Rpb24gcHVzaFNvdXJjZShzb3VyY2UpIHtcblx0ICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XG5cdCAgICAgIHRoaXMuc291cmNlLnB1c2godGhpcy5hcHBlbmRUb0J1ZmZlcih0aGlzLnNvdXJjZS5xdW90ZWRTdHJpbmcodGhpcy5wZW5kaW5nQ29udGVudCksIHRoaXMucGVuZGluZ0xvY2F0aW9uKSk7XG5cdCAgICAgIHRoaXMucGVuZGluZ0NvbnRlbnQgPSB1bmRlZmluZWQ7XG5cdCAgICB9XG5cblx0ICAgIGlmIChzb3VyY2UpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaChzb3VyY2UpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICByZXBsYWNlU3RhY2s6IGZ1bmN0aW9uIHJlcGxhY2VTdGFjayhjYWxsYmFjaykge1xuXHQgICAgdmFyIHByZWZpeCA9IFsnKCddLFxuXHQgICAgICAgIHN0YWNrID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGNyZWF0ZWRTdGFjayA9IHVuZGVmaW5lZCxcblx0ICAgICAgICB1c2VkTGl0ZXJhbCA9IHVuZGVmaW5lZDtcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgIGlmICghdGhpcy5pc0lubGluZSgpKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdyZXBsYWNlU3RhY2sgb24gbm9uLWlubGluZScpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBXZSB3YW50IHRvIG1lcmdlIHRoZSBpbmxpbmUgc3RhdGVtZW50IGludG8gdGhlIHJlcGxhY2VtZW50IHN0YXRlbWVudCB2aWEgJywnXG5cdCAgICB2YXIgdG9wID0gdGhpcy5wb3BTdGFjayh0cnVlKTtcblxuXHQgICAgaWYgKHRvcCBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgLy8gTGl0ZXJhbHMgZG8gbm90IG5lZWQgdG8gYmUgaW5saW5lZFxuXHQgICAgICBzdGFjayA9IFt0b3AudmFsdWVdO1xuXHQgICAgICBwcmVmaXggPSBbJygnLCBzdGFja107XG5cdCAgICAgIHVzZWRMaXRlcmFsID0gdHJ1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIEdldCBvciBjcmVhdGUgdGhlIGN1cnJlbnQgc3RhY2sgbmFtZSBmb3IgdXNlIGJ5IHRoZSBpbmxpbmVcblx0ICAgICAgY3JlYXRlZFN0YWNrID0gdHJ1ZTtcblx0ICAgICAgdmFyIF9uYW1lID0gdGhpcy5pbmNyU3RhY2soKTtcblxuXHQgICAgICBwcmVmaXggPSBbJygoJywgdGhpcy5wdXNoKF9uYW1lKSwgJyA9ICcsIHRvcCwgJyknXTtcblx0ICAgICAgc3RhY2sgPSB0aGlzLnRvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBpdGVtID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdGFjayk7XG5cblx0ICAgIGlmICghdXNlZExpdGVyYWwpIHtcblx0ICAgICAgdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXHQgICAgaWYgKGNyZWF0ZWRTdGFjaykge1xuXHQgICAgICB0aGlzLnN0YWNrU2xvdC0tO1xuXHQgICAgfVxuXHQgICAgdGhpcy5wdXNoKHByZWZpeC5jb25jYXQoaXRlbSwgJyknKSk7XG5cdCAgfSxcblxuXHQgIGluY3JTdGFjazogZnVuY3Rpb24gaW5jclN0YWNrKCkge1xuXHQgICAgdGhpcy5zdGFja1Nsb3QrKztcblx0ICAgIGlmICh0aGlzLnN0YWNrU2xvdCA+IHRoaXMuc3RhY2tWYXJzLmxlbmd0aCkge1xuXHQgICAgICB0aGlzLnN0YWNrVmFycy5wdXNoKCdzdGFjaycgKyB0aGlzLnN0YWNrU2xvdCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gdGhpcy50b3BTdGFja05hbWUoKTtcblx0ICB9LFxuXHQgIHRvcFN0YWNrTmFtZTogZnVuY3Rpb24gdG9wU3RhY2tOYW1lKCkge1xuXHQgICAgcmV0dXJuICdzdGFjaycgKyB0aGlzLnN0YWNrU2xvdDtcblx0ICB9LFxuXHQgIGZsdXNoSW5saW5lOiBmdW5jdGlvbiBmbHVzaElubGluZSgpIHtcblx0ICAgIHZhciBpbmxpbmVTdGFjayA9IHRoaXMuaW5saW5lU3RhY2s7XG5cdCAgICB0aGlzLmlubGluZVN0YWNrID0gW107XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaW5saW5lU3RhY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIGVudHJ5ID0gaW5saW5lU3RhY2tbaV07XG5cdCAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXHQgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChlbnRyeSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5pbmNyU3RhY2soKTtcblx0ICAgICAgICB0aGlzLnB1c2hTb3VyY2UoW3N0YWNrLCAnID0gJywgZW50cnksICc7J10pO1xuXHQgICAgICAgIHRoaXMuY29tcGlsZVN0YWNrLnB1c2goc3RhY2spO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBpc0lubGluZTogZnVuY3Rpb24gaXNJbmxpbmUoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5pbmxpbmVTdGFjay5sZW5ndGg7XG5cdCAgfSxcblxuXHQgIHBvcFN0YWNrOiBmdW5jdGlvbiBwb3BTdGFjayh3cmFwcGVkKSB7XG5cdCAgICB2YXIgaW5saW5lID0gdGhpcy5pc0lubGluZSgpLFxuXHQgICAgICAgIGl0ZW0gPSAoaW5saW5lID8gdGhpcy5pbmxpbmVTdGFjayA6IHRoaXMuY29tcGlsZVN0YWNrKS5wb3AoKTtcblxuXHQgICAgaWYgKCF3cmFwcGVkICYmIGl0ZW0gaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKCFpbmxpbmUpIHtcblx0ICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgICAgIGlmICghdGhpcy5zdGFja1Nsb3QpIHtcblx0ICAgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdJbnZhbGlkIHN0YWNrIHBvcCcpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnN0YWNrU2xvdC0tO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBpdGVtO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICB0b3BTdGFjazogZnVuY3Rpb24gdG9wU3RhY2soKSB7XG5cdCAgICB2YXIgc3RhY2sgPSB0aGlzLmlzSW5saW5lKCkgPyB0aGlzLmlubGluZVN0YWNrIDogdGhpcy5jb21waWxlU3RhY2ssXG5cdCAgICAgICAgaXRlbSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblx0ICAgIGlmIChpdGVtIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBpdGVtO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBjb250ZXh0TmFtZTogZnVuY3Rpb24gY29udGV4dE5hbWUoY29udGV4dCkge1xuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzICYmIGNvbnRleHQpIHtcblx0ICAgICAgcmV0dXJuICdkZXB0aHNbJyArIGNvbnRleHQgKyAnXSc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gJ2RlcHRoJyArIGNvbnRleHQ7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHF1b3RlZFN0cmluZzogZnVuY3Rpb24gcXVvdGVkU3RyaW5nKHN0cikge1xuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyhzdHIpO1xuXHQgIH0sXG5cblx0ICBvYmplY3RMaXRlcmFsOiBmdW5jdGlvbiBvYmplY3RMaXRlcmFsKG9iaikge1xuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLm9iamVjdExpdGVyYWwob2JqKTtcblx0ICB9LFxuXG5cdCAgYWxpYXNhYmxlOiBmdW5jdGlvbiBhbGlhc2FibGUobmFtZSkge1xuXHQgICAgdmFyIHJldCA9IHRoaXMuYWxpYXNlc1tuYW1lXTtcblx0ICAgIGlmIChyZXQpIHtcblx0ICAgICAgcmV0LnJlZmVyZW5jZUNvdW50Kys7XG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9XG5cblx0ICAgIHJldCA9IHRoaXMuYWxpYXNlc1tuYW1lXSA9IHRoaXMuc291cmNlLndyYXAobmFtZSk7XG5cdCAgICByZXQuYWxpYXNhYmxlID0gdHJ1ZTtcblx0ICAgIHJldC5yZWZlcmVuY2VDb3VudCA9IDE7XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIHNldHVwSGVscGVyOiBmdW5jdGlvbiBzZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUsIGJsb2NrSGVscGVyKSB7XG5cdCAgICB2YXIgcGFyYW1zID0gW10sXG5cdCAgICAgICAgcGFyYW1zSW5pdCA9IHRoaXMuc2V0dXBIZWxwZXJBcmdzKG5hbWUsIHBhcmFtU2l6ZSwgcGFyYW1zLCBibG9ja0hlbHBlcik7XG5cdCAgICB2YXIgZm91bmRIZWxwZXIgPSB0aGlzLm5hbWVMb29rdXAoJ2hlbHBlcnMnLCBuYW1lLCAnaGVscGVyJyksXG5cdCAgICAgICAgY2FsbENvbnRleHQgPSB0aGlzLmFsaWFzYWJsZSh0aGlzLmNvbnRleHROYW1lKDApICsgJyAhPSBudWxsID8gJyArIHRoaXMuY29udGV4dE5hbWUoMCkgKyAnIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSknKTtcblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgcGFyYW1zOiBwYXJhbXMsXG5cdCAgICAgIHBhcmFtc0luaXQ6IHBhcmFtc0luaXQsXG5cdCAgICAgIG5hbWU6IGZvdW5kSGVscGVyLFxuXHQgICAgICBjYWxsUGFyYW1zOiBbY2FsbENvbnRleHRdLmNvbmNhdChwYXJhbXMpXG5cdCAgICB9O1xuXHQgIH0sXG5cblx0ICBzZXR1cFBhcmFtczogZnVuY3Rpb24gc2V0dXBQYXJhbXMoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcykge1xuXHQgICAgdmFyIG9wdGlvbnMgPSB7fSxcblx0ICAgICAgICBjb250ZXh0cyA9IFtdLFxuXHQgICAgICAgIHR5cGVzID0gW10sXG5cdCAgICAgICAgaWRzID0gW10sXG5cdCAgICAgICAgb2JqZWN0QXJncyA9ICFwYXJhbXMsXG5cdCAgICAgICAgcGFyYW0gPSB1bmRlZmluZWQ7XG5cblx0ICAgIGlmIChvYmplY3RBcmdzKSB7XG5cdCAgICAgIHBhcmFtcyA9IFtdO1xuXHQgICAgfVxuXG5cdCAgICBvcHRpb25zLm5hbWUgPSB0aGlzLnF1b3RlZFN0cmluZyhoZWxwZXIpO1xuXHQgICAgb3B0aW9ucy5oYXNoID0gdGhpcy5wb3BTdGFjaygpO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBvcHRpb25zLmhhc2hJZHMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy5oYXNoVHlwZXMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIG9wdGlvbnMuaGFzaENvbnRleHRzID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaW52ZXJzZSA9IHRoaXMucG9wU3RhY2soKSxcblx0ICAgICAgICBwcm9ncmFtID0gdGhpcy5wb3BTdGFjaygpO1xuXG5cdCAgICAvLyBBdm9pZCBzZXR0aW5nIGZuIGFuZCBpbnZlcnNlIGlmIG5laXRoZXIgYXJlIHNldC4gVGhpcyBhbGxvd3Ncblx0ICAgIC8vIGhlbHBlcnMgdG8gZG8gYSBjaGVjayBmb3IgYGlmIChvcHRpb25zLmZuKWBcblx0ICAgIGlmIChwcm9ncmFtIHx8IGludmVyc2UpIHtcblx0ICAgICAgb3B0aW9ucy5mbiA9IHByb2dyYW0gfHwgJ2NvbnRhaW5lci5ub29wJztcblx0ICAgICAgb3B0aW9ucy5pbnZlcnNlID0gaW52ZXJzZSB8fCAnY29udGFpbmVyLm5vb3AnO1xuXHQgICAgfVxuXG5cdCAgICAvLyBUaGUgcGFyYW1ldGVycyBnbyBvbiB0byB0aGUgc3RhY2sgaW4gb3JkZXIgKG1ha2luZyBzdXJlIHRoYXQgdGhleSBhcmUgZXZhbHVhdGVkIGluIG9yZGVyKVxuXHQgICAgLy8gc28gd2UgbmVlZCB0byBwb3AgdGhlbSBvZmYgdGhlIHN0YWNrIGluIHJldmVyc2Ugb3JkZXJcblx0ICAgIHZhciBpID0gcGFyYW1TaXplO1xuXHQgICAgd2hpbGUgKGktLSkge1xuXHQgICAgICBwYXJhbSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgcGFyYW1zW2ldID0gcGFyYW07XG5cblx0ICAgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgICBpZHNbaV0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgICAgdHlwZXNbaV0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgICAgY29udGV4dHNbaV0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcblx0ICAgICAgb3B0aW9ucy5hcmdzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShwYXJhbXMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBvcHRpb25zLmlkcyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoaWRzKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLnR5cGVzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheSh0eXBlcyk7XG5cdCAgICAgIG9wdGlvbnMuY29udGV4dHMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGNvbnRleHRzKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5kYXRhKSB7XG5cdCAgICAgIG9wdGlvbnMuZGF0YSA9ICdkYXRhJztcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMuYmxvY2tQYXJhbXMgPSAnYmxvY2tQYXJhbXMnO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIG9wdGlvbnM7XG5cdCAgfSxcblxuXHQgIHNldHVwSGVscGVyQXJnczogZnVuY3Rpb24gc2V0dXBIZWxwZXJBcmdzKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMsIHVzZVJlZ2lzdGVyKSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IHRoaXMuc2V0dXBQYXJhbXMoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcyk7XG5cdCAgICBvcHRpb25zID0gdGhpcy5vYmplY3RMaXRlcmFsKG9wdGlvbnMpO1xuXHQgICAgaWYgKHVzZVJlZ2lzdGVyKSB7XG5cdCAgICAgIHRoaXMudXNlUmVnaXN0ZXIoJ29wdGlvbnMnKTtcblx0ICAgICAgcGFyYW1zLnB1c2goJ29wdGlvbnMnKTtcblx0ICAgICAgcmV0dXJuIFsnb3B0aW9ucz0nLCBvcHRpb25zXTtcblx0ICAgIH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKG9wdGlvbnMpO1xuXHQgICAgICByZXR1cm4gJyc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucztcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgcmVzZXJ2ZWRXb3JkcyA9ICgnYnJlYWsgZWxzZSBuZXcgdmFyJyArICcgY2FzZSBmaW5hbGx5IHJldHVybiB2b2lkJyArICcgY2F0Y2ggZm9yIHN3aXRjaCB3aGlsZScgKyAnIGNvbnRpbnVlIGZ1bmN0aW9uIHRoaXMgd2l0aCcgKyAnIGRlZmF1bHQgaWYgdGhyb3cnICsgJyBkZWxldGUgaW4gdHJ5JyArICcgZG8gaW5zdGFuY2VvZiB0eXBlb2YnICsgJyBhYnN0cmFjdCBlbnVtIGludCBzaG9ydCcgKyAnIGJvb2xlYW4gZXhwb3J0IGludGVyZmFjZSBzdGF0aWMnICsgJyBieXRlIGV4dGVuZHMgbG9uZyBzdXBlcicgKyAnIGNoYXIgZmluYWwgbmF0aXZlIHN5bmNocm9uaXplZCcgKyAnIGNsYXNzIGZsb2F0IHBhY2thZ2UgdGhyb3dzJyArICcgY29uc3QgZ290byBwcml2YXRlIHRyYW5zaWVudCcgKyAnIGRlYnVnZ2VyIGltcGxlbWVudHMgcHJvdGVjdGVkIHZvbGF0aWxlJyArICcgZG91YmxlIGltcG9ydCBwdWJsaWMgbGV0IHlpZWxkIGF3YWl0JyArICcgbnVsbCB0cnVlIGZhbHNlJykuc3BsaXQoJyAnKTtcblxuXHQgIHZhciBjb21waWxlcldvcmRzID0gSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTID0ge307XG5cblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IHJlc2VydmVkV29yZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICBjb21waWxlcldvcmRzW3Jlc2VydmVkV29yZHNbaV1dID0gdHJ1ZTtcblx0ICB9XG5cdH0pKCk7XG5cblx0SmF2YVNjcmlwdENvbXBpbGVyLmlzVmFsaWRKYXZhU2NyaXB0VmFyaWFibGVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0ICByZXR1cm4gIUphdmFTY3JpcHRDb21waWxlci5SRVNFUlZFRF9XT1JEU1tuYW1lXSAmJiAvXlthLXpBLVpfJF1bMC05YS16QS1aXyRdKiQvLnRlc3QobmFtZSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gc3RyaWN0TG9va3VwKHJlcXVpcmVUZXJtaW5hbCwgY29tcGlsZXIsIHBhcnRzLCB0eXBlKSB7XG5cdCAgdmFyIHN0YWNrID0gY29tcGlsZXIucG9wU3RhY2soKSxcblx0ICAgICAgaSA9IDAsXG5cdCAgICAgIGxlbiA9IHBhcnRzLmxlbmd0aDtcblx0ICBpZiAocmVxdWlyZVRlcm1pbmFsKSB7XG5cdCAgICBsZW4tLTtcblx0ICB9XG5cblx0ICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICBzdGFjayA9IGNvbXBpbGVyLm5hbWVMb29rdXAoc3RhY2ssIHBhcnRzW2ldLCB0eXBlKTtcblx0ICB9XG5cblx0ICBpZiAocmVxdWlyZVRlcm1pbmFsKSB7XG5cdCAgICByZXR1cm4gW2NvbXBpbGVyLmFsaWFzYWJsZSgnY29udGFpbmVyLnN0cmljdCcpLCAnKCcsIHN0YWNrLCAnLCAnLCBjb21waWxlci5xdW90ZWRTdHJpbmcocGFydHNbaV0pLCAnKSddO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZXR1cm4gc3RhY2s7XG5cdCAgfVxuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSmF2YVNjcmlwdENvbXBpbGVyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA0MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIGdsb2JhbCBkZWZpbmUgKi9cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFNvdXJjZU5vZGUgPSB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIGlmIChmYWxzZSkge1xuXHQgICAgLy8gV2UgZG9uJ3Qgc3VwcG9ydCB0aGlzIGluIEFNRCBlbnZpcm9ubWVudHMuIEZvciB0aGVzZSBlbnZpcm9ubWVudHMsIHdlIGFzdXNtZSB0aGF0XG5cdCAgICAvLyB0aGV5IGFyZSBydW5uaW5nIG9uIHRoZSBicm93c2VyIGFuZCB0aHVzIGhhdmUgbm8gbmVlZCBmb3IgdGhlIHNvdXJjZS1tYXAgbGlicmFyeS5cblx0ICAgIHZhciBTb3VyY2VNYXAgPSByZXF1aXJlKCdzb3VyY2UtbWFwJyk7XG5cdCAgICBTb3VyY2VOb2RlID0gU291cmNlTWFwLlNvdXJjZU5vZGU7XG5cdCAgfVxuXHR9IGNhdGNoIChlcnIpIHt9XG5cdC8qIE5PUCAqL1xuXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBpZjogdGVzdGVkIGJ1dCBub3QgY292ZXJlZCBpbiBpc3RhbmJ1bCBkdWUgdG8gZGlzdCBidWlsZCAgKi9cblx0aWYgKCFTb3VyY2VOb2RlKSB7XG5cdCAgU291cmNlTm9kZSA9IGZ1bmN0aW9uIChsaW5lLCBjb2x1bW4sIHNyY0ZpbGUsIGNodW5rcykge1xuXHQgICAgdGhpcy5zcmMgPSAnJztcblx0ICAgIGlmIChjaHVua3MpIHtcblx0ICAgICAgdGhpcy5hZGQoY2h1bmtzKTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgU291cmNlTm9kZS5wcm90b3R5cGUgPSB7XG5cdCAgICBhZGQ6IGZ1bmN0aW9uIGFkZChjaHVua3MpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rcykpIHtcblx0ICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zcmMgKz0gY2h1bmtzO1xuXHQgICAgfSxcblx0ICAgIHByZXBlbmQ6IGZ1bmN0aW9uIHByZXBlbmQoY2h1bmtzKSB7XG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjaHVua3MpKSB7XG5cdCAgICAgICAgY2h1bmtzID0gY2h1bmtzLmpvaW4oJycpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3JjID0gY2h1bmtzICsgdGhpcy5zcmM7XG5cdCAgICB9LFxuXHQgICAgdG9TdHJpbmdXaXRoU291cmNlTWFwOiBmdW5jdGlvbiB0b1N0cmluZ1dpdGhTb3VyY2VNYXAoKSB7XG5cdCAgICAgIHJldHVybiB7IGNvZGU6IHRoaXMudG9TdHJpbmcoKSB9O1xuXHQgICAgfSxcblx0ICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc3JjO1xuXHQgICAgfVxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBjYXN0Q2h1bmsoY2h1bmssIGNvZGVHZW4sIGxvYykge1xuXHQgIGlmIChfdXRpbHMuaXNBcnJheShjaHVuaykpIHtcblx0ICAgIHZhciByZXQgPSBbXTtcblxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNodW5rLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHJldC5wdXNoKGNvZGVHZW4ud3JhcChjaHVua1tpXSwgbG9jKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0gZWxzZSBpZiAodHlwZW9mIGNodW5rID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGNodW5rID09PSAnbnVtYmVyJykge1xuXHQgICAgLy8gSGFuZGxlIHByaW1pdGl2ZXMgdGhhdCB0aGUgU291cmNlTm9kZSB3aWxsIHRocm93IHVwIG9uXG5cdCAgICByZXR1cm4gY2h1bmsgKyAnJztcblx0ICB9XG5cdCAgcmV0dXJuIGNodW5rO1xuXHR9XG5cblx0ZnVuY3Rpb24gQ29kZUdlbihzcmNGaWxlKSB7XG5cdCAgdGhpcy5zcmNGaWxlID0gc3JjRmlsZTtcblx0ICB0aGlzLnNvdXJjZSA9IFtdO1xuXHR9XG5cblx0Q29kZUdlbi5wcm90b3R5cGUgPSB7XG5cdCAgaXNFbXB0eTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcblx0ICAgIHJldHVybiAhdGhpcy5zb3VyY2UubGVuZ3RoO1xuXHQgIH0sXG5cdCAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChzb3VyY2UsIGxvYykge1xuXHQgICAgdGhpcy5zb3VyY2UudW5zaGlmdCh0aGlzLndyYXAoc291cmNlLCBsb2MpKTtcblx0ICB9LFxuXHQgIHB1c2g6IGZ1bmN0aW9uIHB1c2goc291cmNlLCBsb2MpIHtcblx0ICAgIHRoaXMuc291cmNlLnB1c2godGhpcy53cmFwKHNvdXJjZSwgbG9jKSk7XG5cdCAgfSxcblxuXHQgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcblx0ICAgIHZhciBzb3VyY2UgPSB0aGlzLmVtcHR5KCk7XG5cdCAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGxpbmUpIHtcblx0ICAgICAgc291cmNlLmFkZChbJyAgJywgbGluZSwgJ1xcbiddKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIHNvdXJjZTtcblx0ICB9LFxuXG5cdCAgZWFjaDogZnVuY3Rpb24gZWFjaChpdGVyKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5zb3VyY2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgaXRlcih0aGlzLnNvdXJjZVtpXSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGVtcHR5OiBmdW5jdGlvbiBlbXB0eSgpIHtcblx0ICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhdGlvbiB8fCB7IHN0YXJ0OiB7fSB9O1xuXHQgICAgcmV0dXJuIG5ldyBTb3VyY2VOb2RlKGxvYy5zdGFydC5saW5lLCBsb2Muc3RhcnQuY29sdW1uLCB0aGlzLnNyY0ZpbGUpO1xuXHQgIH0sXG5cdCAgd3JhcDogZnVuY3Rpb24gd3JhcChjaHVuaykge1xuXHQgICAgdmFyIGxvYyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRoaXMuY3VycmVudExvY2F0aW9uIHx8IHsgc3RhcnQ6IHt9IH0gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIFNvdXJjZU5vZGUpIHtcblx0ICAgICAgcmV0dXJuIGNodW5rO1xuXHQgICAgfVxuXG5cdCAgICBjaHVuayA9IGNhc3RDaHVuayhjaHVuaywgdGhpcywgbG9jKTtcblxuXHQgICAgcmV0dXJuIG5ldyBTb3VyY2VOb2RlKGxvYy5zdGFydC5saW5lLCBsb2Muc3RhcnQuY29sdW1uLCB0aGlzLnNyY0ZpbGUsIGNodW5rKTtcblx0ICB9LFxuXG5cdCAgZnVuY3Rpb25DYWxsOiBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoZm4sIHR5cGUsIHBhcmFtcykge1xuXHQgICAgcGFyYW1zID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFyYW1zKTtcblx0ICAgIHJldHVybiB0aGlzLndyYXAoW2ZuLCB0eXBlID8gJy4nICsgdHlwZSArICcoJyA6ICcoJywgcGFyYW1zLCAnKSddKTtcblx0ICB9LFxuXG5cdCAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbiBxdW90ZWRTdHJpbmcoc3RyKSB7XG5cdCAgICByZXR1cm4gJ1wiJyArIChzdHIgKyAnJykucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLnJlcGxhY2UoL1xcci9nLCAnXFxcXHInKS5yZXBsYWNlKC9cXHUyMDI4L2csICdcXFxcdTIwMjgnKSAvLyBQZXIgRWNtYS0yNjIgNy4zICsgNy44LjRcblx0ICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKSArICdcIic7XG5cdCAgfSxcblxuXHQgIG9iamVjdExpdGVyYWw6IGZ1bmN0aW9uIG9iamVjdExpdGVyYWwob2JqKSB7XG5cdCAgICB2YXIgcGFpcnMgPSBbXTtcblxuXHQgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHQgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICB2YXIgdmFsdWUgPSBjYXN0Q2h1bmsob2JqW2tleV0sIHRoaXMpO1xuXHQgICAgICAgIGlmICh2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgIHBhaXJzLnB1c2goW3RoaXMucXVvdGVkU3RyaW5nKGtleSksICc6JywgdmFsdWVdKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgdmFyIHJldCA9IHRoaXMuZ2VuZXJhdGVMaXN0KHBhaXJzKTtcblx0ICAgIHJldC5wcmVwZW5kKCd7Jyk7XG5cdCAgICByZXQuYWRkKCd9Jyk7XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBnZW5lcmF0ZUxpc3Q6IGZ1bmN0aW9uIGdlbmVyYXRlTGlzdChlbnRyaWVzKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5lbXB0eSgpO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoaSkge1xuXHQgICAgICAgIHJldC5hZGQoJywnKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldC5hZGQoY2FzdENodW5rKGVudHJpZXNbaV0sIHRoaXMpKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgZ2VuZXJhdGVBcnJheTogZnVuY3Rpb24gZ2VuZXJhdGVBcnJheShlbnRyaWVzKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QoZW50cmllcyk7XG5cdCAgICByZXQucHJlcGVuZCgnWycpO1xuXHQgICAgcmV0LmFkZCgnXScpO1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH1cblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBDb2RlR2VuO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgfSBmcm9tICcuL21vZHVsZXMvaGFzaC1yb3V0ZXIuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsbE5ld3NXaWRnZXQgKCkge1xyXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbGxuZXdzLWNvbnRhaW5lcicpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgJHdpbmRvdyA9ICQod2luZG93KTtcclxuICAgIGxldCAkYWNjb3JkaW9uID0gJCgnLmFjY29yZGlvbicpO1xyXG4gICAgbGV0ICRuZXN0ZWRBY2NvcmRpb24gPSAkKCcuYWNjb3JkaW9uLW5lc3RlZCcpO1xyXG4gICAgbGV0ICRkZXRhaWxlZE5ld3NDb250YWluZXIgPSAkKCcjbmV3cy12aWV3LWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IHdpbmRvd1dpZHRoID0gJHdpbmRvdy53aWR0aCgpO1xyXG5cclxuICAgIGluaXQoKTtcclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIEhhc2hSb3V0ZXIub25DaGFuZ2UoJ25ld3MnLCBsb2FkRGV0YWlsZWROZXdzLCAnbG9hZERldGFpbGVkTmV3cycpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZE5ld3MgPSBIYXNoUm91dGVyLmdldCgnbmV3cycpO1xyXG4gICAgICAgIGxvYWREZXRhaWxlZE5ld3Moc2VsZWN0ZWROZXdzKTtcclxuICAgICAgICBsZXQgYWN0aXZlID0gMDtcclxuICAgICAgICBsZXQgYWN0aXZlTmVzdGVkID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYWN0aXZlTmVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZE5ld3MpIHtcclxuICAgICAgICAgICAgbGV0ICRwYXJlbnQgPSAkKGAuZGV0YWlsZWQtbmV3c1tkYXRhLXVybD1cIiR7c2VsZWN0ZWROZXdzfVwiXWApLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICBsZXQgeWVhciA9ICRwYXJlbnQuYXR0cignZGF0YS15ZWFyJyk7XHJcbiAgICAgICAgICAgIGxldCBtb250aCA9ICRwYXJlbnQuYXR0cignZGF0YS1tb250aCcpO1xyXG4gICAgICAgICAgICBhY3RpdmUgPSBhY3RpdmF0ZUFjY29yZGlvbih5ZWFyLCAnZGF0YS15ZWFyJywgJy5hY2NvcmRpb24taXRlbScpO1xyXG4gICAgICAgICAgICBhY3RpdmVOZXN0ZWQgPSBhY3RpdmF0ZUFjY29yZGlvbihtb250aCwgJ2RhdGEtbW9udGgnLCAnLmFjY29yZGlvbi1pdGVtLW5lc3RlZC0nICsgeWVhcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkYWNjb3JkaW9uLmFjY29yZGlvbih7IGNvbGxhcHNpYmxlOiB0cnVlLCBhY3RpdmU6IGFjdGl2ZSB9KTtcclxuICAgICAgICAkbmVzdGVkQWNjb3JkaW9uLmFjY29yZGlvbih7IGhlaWdodFN0eWxlOiAnY29udGVudCcsIGNvbGxhcHNpYmxlOiB0cnVlLCBhY3RpdmU6IGFjdGl2ZU5lc3RlZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblNlbGVjdE5ld3MoZSkge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKTtcclxuICAgICAgICB1cmwgPyBIYXNoUm91dGVyLnNldCgnbmV3cycsIFt1cmxdKSA6IEhhc2hSb3V0ZXIuc2V0KCduZXdzJyk7XHJcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgICAgICAkYWNjb3JkaW9uLmFjY29yZGlvbignb3B0aW9uJywgeyBhY3RpdmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAkbmVzdGVkQWNjb3JkaW9uLmFjY29yZGlvbignb3B0aW9uJywgeyBhY3RpdmU6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWREZXRhaWxlZE5ld3MoZGF0YSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBkYXRhICYmIGRhdGEubGVuZ3RoID8gZGF0YVswXSA6ICcnO1xyXG4gICAgICAgICRkZXRhaWxlZE5ld3NDb250YWluZXIuaHRtbCgnTG9hZGluZy4uLicpO1xyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogJy93aWRnZXQvbmV3c3dpZGdldC9EZXRhaWxlZE5ld3MvJyArIHVybCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgJGRldGFpbGVkTmV3c0NvbnRhaW5lci5odG1sKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVBY2NvcmRpb24oZGF0YSwgYXR0cmlidXRlLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAwO1xyXG5cclxuICAgICAgICAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcclxuICAgICAgICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpID09PSBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZShldikge1xyXG4gICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgPD0gNzY4ICYmIHdpbmRvd1dpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgICAgICRhY2NvcmRpb24uYWNjb3JkaW9uKCdvcHRpb24nLCB7IGFjdGl2ZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICRuZXN0ZWRBY2NvcmRpb24uYWNjb3JkaW9uKCdvcHRpb24nLCB7IGFjdGl2ZTogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICR3aW5kb3cub24oJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgICAgJCgnLmRldGFpbGVkLW5ld3MnKS5vbignY2xpY2snLCBvblNlbGVjdE5ld3MpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIERhdGEsIExvYWRlciwgVXRpbHMsIFBhZ2VyLCBEYXRhU291cmNlLCBIYXNoUm91dGVyLCBDb21tZW50cywgVmFsaWRhdG9yICovXHJcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi9jb21tb24vbG9hZGVyLmpzJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL2NvbW1vbi91dGlscy5qcyc7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VyLmpzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vbW9kdWxlcy9kYXRhLXNvdXJjZS5qcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vY29tbW9uL3ZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgfSBmcm9tICcuL21vZHVsZXMvaGFzaC1yb3V0ZXIuanMnO1xyXG5pbXBvcnQgeyBsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyB9IGZyb20gJy4vY29tbW9uL2hhbmRsZWJhcnMuanMnO1xyXG5pbXBvcnQgeyB0ZXh0RWRpdG9yIH0gZnJvbSAnLi90ZXh0LWVkaXRvci5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmxvZ1dpZGdldCgpIHtcclxuICAgIGxldCAkd3JhcHBlciA9ICQoJy5zdC1ibG9nLXdyYXBwZXInKTtcclxuICAgIGlmICghJHdyYXBwZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCAkY29udGFpbmVyID0gJHdyYXBwZXIuZmluZCgnLnN0LWJsb2ctY29udGFpbmVyJyk7XHJcbiAgICBsZXQgJHBhZ2VyID0gJHdyYXBwZXIuZmluZCgnLmJsb2ctcGFnZXInKTtcclxuICAgIGxldCBzb3VyY2U7XHJcbiAgICBsZXQgcGFnZXI7XHJcbiAgICBjb25zdCBkZWZhdWx0UGFnZVNpemUgPSAyMDtcclxuICAgIGxldCBwYWdpbmcgPSB7IHBhZ2U6IDEsIHNpemU6IGRlZmF1bHRQYWdlU2l6ZSB9O1xyXG4gICAgbGV0IHRlbXBsYXRlc0NhY2hlID0ge307XHJcbiAgICBsZXQgdGVtcGxhdGVzID0gW3sgbmFtZTogJ2Jsb2ctbGlzdCcsIHVybDogJy90ZW1wbGF0ZXMvYmxvZy1saXN0Lmh0bWwnIH0sIHsgbmFtZTogJ2Jsb2ctcG9zdCcsIHVybDogJy90ZW1wbGF0ZXMvYmxvZy1wb3N0Lmh0bWwnIH1dO1xyXG5cclxuICAgIGxvYWREZXBlbmRlbmNpZXMoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICByZXR1cm4gbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXModGVtcGxhdGVzQ2FjaGUsIHRlbXBsYXRlcyk7XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBzb3VyY2UgPSBEYXRhU291cmNlKHsgdXJsOiAnL3NpdGV0cmlrcy9ibG9nL2dyaWQnLCB0eXBlOiAnc2VydmVyJyB9KTtcclxuICAgICAgICBwYWdlciA9IFBhZ2VyKCRwYWdlciwgeyBwYWdlU2l6ZXM6IFsxLCAyLCA1LCAxMCwgMjAsICdhbGwnXSwgZGVmYXVsdDogZGVmYXVsdFBhZ2VTaXplIH0sIHBhZ2luZ0hhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0gSGFzaFJvdXRlci5nZXQoJ2Jsb2cnKTtcclxuICAgICAgICBoYW5kbGVBY3Rpb24ocGFyYW1zKTtcclxuICAgICAgICBIYXNoUm91dGVyLm9uQ2hhbmdlKCdibG9nJywgaGFuZGxlQWN0aW9uLCAnYmxvZy13aWRnZXQnKTtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRGVwZW5kZW5jaWVzKCkge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goVXRpbHMubG9hZGpzY3NzZmlsZUFzeW5jKCcvY3NzL2ZvcnVtLmNzcycsICdjc3MnKSk7IC8vIFRPRE86IGNoZWNrIGlmIGxvYWRlZCwgbW92ZSBjb21tZW50IHN0eWxlcyBmcm9tIGZvcnVtXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGlueW1jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChVdGlscy5sb2FkanNjc3NmaWxlQXN5bmMoJy9saWIvY3VzdG9tL3RpbnltY2UvdGlueW1jZS5taW4uanMnLCAnanMnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWQoKSB7XHJcbiAgICAgICAgTG9hZGVyLnNob3coJyNmZmYnKTtcclxuICAgICAgICByZXR1cm4gc291cmNlLmdldERhdGEoeyBwYWdpbmcgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICByZXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZShpdGVtLmRhdGVDcmVhdGVkKS50b0RhdGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IHRlbXBsYXRlc0NhY2hlWydibG9nLWxpc3QnXShyZXMpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwYWdpbmcuc2l6ZSAhPT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VyLnNldEN1cnJlbnRQYWdlKHBhZ2luZy5wYWdlKTtcclxuICAgICAgICAgICAgICAgIHBhZ2VyLnNldFBhZ2VTaXplKHBhZ2luZy5zaXplKTtcclxuICAgICAgICAgICAgICAgIHBhZ2VyLnNldFBhZ2VzQ291bnQoTWF0aC5jZWlsKHJlcy5jb3VudCAvIHBhZ2luZy5zaXplKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhZ2VyLnVubG9jaygpO1xyXG4gICAgICAgICAgICAkcGFnZXIuc2hvdygpO1xyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2luZ0hhbmRsZXIocGFnZSwgc2l6ZSkge1xyXG4gICAgICAgIGlmICgrcGFnZSA9PT0gMSAmJiArc2l6ZSA9PT0gZGVmYXVsdFBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAgIEhhc2hSb3V0ZXIuc2V0KCdibG9nJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSGFzaFJvdXRlci5zZXQoJ2Jsb2cnLCBbcGFnZSwgc2l6ZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUG9zdChpZCkge1xyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgcmV0dXJuIERhdGEuZ2V0SnNvbih7IHVybDogJy9zaXRldHJpa3MvYmxvZy9nZXRibG9nP2lkPScgKyBpZCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkcGFnZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgcGFnZXIubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHsgaXRlbTogcmVzLml0ZW0sIGlzQXV0aGVudGljYXRlZDogcmVzLmlzQXV0aGVudGljYXRlZCwgcGFnaW5nIH07XHJcbiAgICAgICAgICAgICAgICBvYmouaXRlbS5kYXRlQ3JlYXRlZCA9IG5ldyBEYXRlKG9iai5pdGVtLmRhdGVDcmVhdGVkKS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gdGVtcGxhdGVzQ2FjaGVbJ2Jsb2ctcG9zdCddKG9iaik7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1lbnRzLmluaXQoaWQsICRjb250YWluZXIuZmluZCgnLmNvbW1lbnRzLWNvbnRhaW5lcicpLCAnYmxvZy1jb21tZW50LWFyZWEnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudHMubG9hZENvbW1lbnRzKGlkLCAkY29udGFpbmVyLmZpbmQoJy5jb21tZW50cy1jb250YWluZXInKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZE1vcmUoZXYpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIEhhc2hSb3V0ZXIuc2V0KCdibG9nJywgW2lkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmV0dXJuVG9HcmlkKGV2KSB7XHJcbiAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoJ2Jsb2ctY29tbWVudC1hcmVhJyk7Ly9UT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWluaXQgdGlueU1DRVxyXG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScpIHx8IDE7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykgfHwgZGVmYXVsdFBhZ2VTaXplO1xyXG4gICAgICAgIHBhZ2luZ0hhbmRsZXIocGFnZSwgc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoVXRpbHMuaXNHdWlkKHBhcmFtc1swXSkpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0KHBhcmFtc1swXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhZ2luZy5wYWdlID0gVmFsaWRhdG9yLmlzSW50ZWdlcihwYXJhbXNbMF0pID8gK3BhcmFtc1swXSA6IDE7XHJcbiAgICAgICAgICAgIHBhZ2luZy5zaXplID0gcGFyYW1zLmxlbmd0aCA+IDEgJiYgKFZhbGlkYXRvci5pc0ludGVnZXIocGFyYW1zWzFdKSB8fCBwYXJhbXNbMV0gPT09ICdhbGwnKSA/IHBhcmFtc1sxXSA6IGRlZmF1bHRQYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICR3cmFwcGVyLm9uKCdjbGljaycsICcuYnRuLWJhY2snLCByZXR1cm5Ub0dyaWQpO1xyXG4gICAgICAgICR3cmFwcGVyLm9uKCdjbGljaycsICcuc3QtYmxvZy1kZXRhaWxzJywgcmVhZE1vcmUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpbml0Q2Fyb3VzZWwoKSB7XHJcbiAgICAkKGRvY3VtZW50KS5vbignaW5pdENhcm91c2VsJywge30sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgJGNhcm91c2VscyA9ICQoJy5jYXJvdXNlbCcpO1xyXG4gICAgICAgIGlmICgkY2Fyb3VzZWxzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoJy5zbGljay1pbml0aWFsaXplZCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkY2Fyb3VzZWxzLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkY2Fyb3VzZWxzLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgbGV0IHNsaWRlc19sZyA9ICskZWxlbWVudC5hdHRyKCdkYXRhLXNsaWRlcy1sZycpIHx8IDM7XHJcbiAgICAgICAgICAgIGxldCBzbGlkZXNfbWQgPSArJGVsZW1lbnQuYXR0cignZGF0YS1zbGlkZXMtbWQnKSB8fCAzO1xyXG4gICAgICAgICAgICBsZXQgc2xpZGVzX3NtID0gKyRlbGVtZW50LmF0dHIoJ2RhdGEtc2xpZGVzLXNtJykgfHwgMjtcclxuICAgICAgICAgICAgbGV0IHNsaWRlc194cyA9ICskZWxlbWVudC5hdHRyKCdkYXRhLXNsaWRlcy14cycpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc19sZyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBzbGlkZXNfbGcsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc19tZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHNsaWRlc19tZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXNfc20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBzbGlkZXNfc21cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc194cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHNsaWRlc194c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ3JlbW92ZUNhcm91c2VsJywge30sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy5jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyB9IGZyb20gJy4vY29tbW9uL2hhbmRsZWJhcnMuanMnO1xyXG5pbXBvcnQgeyB0ZXh0RWRpdG9yIH0gZnJvbSAnLi90ZXh0LWVkaXRvci5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHBhcmVudElkO1xyXG4gICAgbGV0ICRjb250YWluZXI7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZXNDYWNoZSA9IHt9O1xyXG4gICAgbGV0IGFyZWFJZDtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KGlkLCAkY29tbWVudHNDb250YWluZXIsIHRleHRBcmVhSWQpIHtcclxuICAgICAgICBwYXJlbnRJZCA9IGlkO1xyXG4gICAgICAgICRjb250YWluZXIgPSAkY29tbWVudHNDb250YWluZXIgfHwgJCgnI2NvbW1lbnRzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGFyZWFJZCA9IHRleHRBcmVhSWQgfHwgJ2NvbW1lbnQtYXJlYSc7XHJcbiAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoYXJlYUlkKTtcclxuICAgICAgICB0ZXh0RWRpdG9yLmluaXQoJyMnICsgYXJlYUlkLCA2MDAsIDMwMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKHRlbXBsYXRlc0NhY2hlLCBbeyBuYW1lOiAnY29tbWVudC1lZGl0JywgdXJsOiAnL3RlbXBsYXRlcy9jb21tZW50LWVkaXQuaHRtbCcgfV0pLFxyXG4gICAgICAgICAgICBsb2FkQ29tbWVudHMocGFyZW50SWQpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQ29tbWVudHMoaWQsICRjb21tZW50c0NvbnRhaW5lcikge1xyXG4gICAgICAgICRjb250YWluZXIgPSAkY29tbWVudHNDb250YWluZXIgfHwgJGNvbnRhaW5lciB8fCAkKCcjY29tbWVudHMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgLy8gVE9ETzogYWRkIGlubGluZSBsb2FkZXJcclxuICAgICAgICByZXR1cm4gRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9jb21tZW50cy9sb2FkY29tbWVudHM/aWQ9JyArIGlkIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZChyZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENvbW1lbnQoZXYpIHtcclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gdGV4dEVkaXRvci5nZXRDb250ZW50KGFyZWFJZCk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0geyBpZDogcGFyZW50SWQsIGNvbnRlbnQgfTtcclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9jb21tZW50cy9hZGRjb21tZW50JywgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZChyZXMudmlldyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RWRpdG9yLmNsZWFyKGFyZWFJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0JywgbWVzc2FnZTogJ0NvbW1lbnQgbXVzdCBub3QgYmUgZW1wdHknLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRDb21tZW50KGV2KSB7XHJcbiAgICAgICAgY2xvc2VFZGl0KCk7XHJcbiAgICAgICAgbGV0ICR0cmlnZ2VyID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgJGNvbnRlbnQgPSAkdHJpZ2dlci5wYXJlbnRzKCcucGFuZWwtaGVhZGluZycpLm5leHQoJy5wYW5lbC1ib2R5Jyk7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gdGVtcGxhdGVzQ2FjaGVbJ2NvbW1lbnQtZWRpdCddKHsgY29udGVudDogJGNvbnRlbnQuaHRtbCgpIH0pO1xyXG4gICAgICAgICRjb250ZW50LnBhcmVudCgpLmFwcGVuZChodG1sKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnQuaGlkZSgpO1xyXG4gICAgICAgICR0cmlnZ2VyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgdGV4dEVkaXRvci5pbml0V2l0aG91dEltYWdlcygnI2VkaXQtcG9zdC1jb250ZW50JywgJycsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VFZGl0KGV2LCBjb250ZW50KSB7XHJcbiAgICAgICAgbGV0ICRjb250ZW50ID0gKGV2ICYmIGV2LnRhcmdldCA/ICQoZXYudGFyZ2V0KS5wYXJlbnRzKCcuZWRpdC1wb3N0LWNvbnRhaW5lcicpIDogJGNvbnRhaW5lci5maW5kKCcuZWRpdC1wb3N0LWNvbnRhaW5lcicpKS5wcmV2KCcucGFuZWwtYm9keScpO1xyXG4gICAgICAgIGlmICgkY29udGVudCAmJiAkY29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoJ2VkaXQtcG9zdC1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICRjb250ZW50LnByZXYoJy5wYW5lbC1oZWFkaW5nJykuZmluZCgnLmJ0bi1lZGl0LXBvc3QnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICRjb250ZW50LnNob3coKTtcclxuICAgICAgICAgICAgJCgnLmVkaXQtcG9zdC1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICRjb250ZW50Lmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZUVkaXRlZENvbW1lbnQoZXYpIHtcclxuICAgICAgICBsZXQgJHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBpZCA9ICR0cmlnZ2VyLnBhcmVudHMoJy5jb21tZW50LXdyYXBwZXInKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50ID0gdGV4dEVkaXRvci5nZXRDb250ZW50KCdlZGl0LXBvc3QtY29udGVudCcpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IHsgaWQsIGNvbnRlbnQgfTtcclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2NvbW1lbnRzL2VkaXRjb21tZW50JywgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUVkaXQoeyB0YXJnZXQ6ICR0cmlnZ2VyIH0sIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNvbW1lbnQoZXYpIHtcclxuICAgICAgICBsZXQgJHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLmNvbW1lbnQtd3JhcHBlcicpO1xyXG4gICAgICAgIGxldCBpZCA9ICRwYXJlbnQuYXR0cignZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICBMb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICBjbG9zZUVkaXQoKTtcclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9jb21tZW50cy9kZWxldGVjb21tZW50JywgZGF0YTogeyBpZCB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICAkY29udGFpbmVyLnBhcmVudCgpLm9uKCdjbGljaycsICcuYnRuLWFkZC1jb21tZW50JywgYWRkQ29tbWVudCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmJ0bi1lZGl0LXBvc3QnLCBlZGl0Q29tbWVudCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmJ0bi1zYXZlLWVkaXRlZC1wb3N0Jywgc2F2ZUVkaXRlZENvbW1lbnQpO1xyXG4gICAgICAgICRjb250YWluZXIub24oJ2NsaWNrJywgJy5idG4tZGVsZXRlLWNvbW1lbnQnLCBkZWxldGVDb21tZW50KTtcclxuICAgICAgICAkY29udGFpbmVyLm9uKCdjbGljaycsICcuYnRuLWNhbmNlbC1lZGl0ZWQtcG9zdCcsIGNsb3NlRWRpdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgaW5pdCwgbG9hZENvbW1lbnRzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBDb21tZW50cyB9O1xyXG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycy9kaXN0L2hhbmRsZWJhcnMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBjdXN0b20gaGVscGVycyBmb3IgaGFuZGxlYmFycy5qc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbnZhciBoZWxwZXJzID0ge1xyXG4gICAgJ3N3aXRjaCc6IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3N3aXRjaF92YWx1ZV8gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9zd2l0Y2hfYnJlYWtfID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGh0bWwgPSBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zd2l0Y2hfYnJlYWtfO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zd2l0Y2hfdmFsdWVfO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSxcclxuICAgICdjYXNlJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gYXJncy5wb3AoKTtcclxuICAgICAgICB2YXIgY2FzZVZhbHVlcyA9IGFyZ3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zd2l0Y2hfYnJlYWtfIHx8IGNhc2VWYWx1ZXMuaW5kZXhPZih0aGlzLl9zd2l0Y2hfdmFsdWVfKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc2guYnJlYWsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N3aXRjaF9icmVha18gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnZGVmYXVsdCc6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zd2l0Y2hfYnJlYWtfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBtb3ZlZCBzZWxlY3QgaGVscGVyIGZyb20gbGF5b3V0XHJcbiAgICAnc2VsZWN0JzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyICRlbCA9ICQoJzxzZWxlY3QgLz4nKS5odG1sKG9wdGlvbnMuZm4odGhpcykpO1xyXG4gICAgICAgICRlbC5maW5kKCdbdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJykuYXR0cih7ICdzZWxlY3RlZCc6ICdzZWxlY3RlZCcgfSk7XHJcbiAgICAgICAgcmV0dXJuICRlbC5odG1sKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mb3IgKGxldCBrZXkgaW4gaGVscGVycykge1xyXG4gICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihrZXksIGhlbHBlcnNba2V5XSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEhhbmRsZWJhcnMgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyh0ZW1wbGF0ZXNDYWNoZSwgdGVtcGxhdGVzKSB7XHJcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBsYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goRGF0YS5nZXRKc29uKHsgdXJsOiB0ZW1wbGF0ZXNbaV0udXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUocmVzKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzQ2FjaGVbdGVtcGxhdGVzW2ldLm5hbWVdID0gdGVtcGxhdGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7IHJldHVybiBmYWxzZTsgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn1cclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsInZhciBVdGlscyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzR3VpZChzdHJpbmdUb1Rlc3QpIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9UZXN0WzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgc3RyaW5nVG9UZXN0ID0gc3RyaW5nVG9UZXN0LnN1YnN0cmluZygxLCBzdHJpbmdUb1Rlc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWdleEd1aWQgPSAvXihcXHspezAsMX1bMC05YS1mQS1GXXs4fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezEyfShcXH0pezAsMX0kL2dpO1xyXG4gICAgICAgIHJldHVybiByZWdleEd1aWQudGVzdChzdHJpbmdUb1Rlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRqc2Nzc2ZpbGUoZmlsZW5hbWUsIGZpbGV0eXBlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVyZWY7XHJcbiAgICAgICAgaWYgKGZpbGV0eXBlID09PSAnanMnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYSBleHRlcm5hbCBKYXZhU2NyaXB0IGZpbGVcclxuICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZmlsZXR5cGUgPT09ICdjc3MnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYW4gZXh0ZXJuYWwgQ1NTIGZpbGVcclxuICAgICAgICAgICAgZmlsZXJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdocmVmJywgZmlsZW5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGZpbGVyZWYgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZmlsZXJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhY2hpbmcgbG9hZGluZyBwcm9taXNlIHRvIGF2b2lkIGR1cGxpY2F0aW9uc1xyXG4gICAgbGV0IGlzTG9hZGluZyA9IHt9O1xyXG4gICAgZnVuY3Rpb24gbG9hZGpzY3NzZmlsZUFzeW5jKGZpbGVuYW1lLCBmaWxldHlwZSkge1xyXG4gICAgICAgIGlzTG9hZGluZ1tmaWxlbmFtZV0gPSBpc0xvYWRpbmdbZmlsZW5hbWVdIHx8IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpbGVyZWY7XHJcbiAgICAgICAgICAgIGlmIChmaWxldHlwZSA9PT0gJ2pzJykgeyAvL2lmIGZpbGVuYW1lIGlzIGEgZXh0ZXJuYWwgSmF2YVNjcmlwdCBmaWxlXHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZXR5cGUgPT09ICdjc3MnKSB7IC8vaWYgZmlsZW5hbWUgaXMgYW4gZXh0ZXJuYWwgQ1NTIGZpbGVcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICAgICAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLnNldEF0dHJpYnV0ZSgnaHJlZicsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVyZWYgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICBmaWxlcmVmLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGZpbGVyZWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgZGVsZXRlIGlzTG9hZGluZ1tmaWxlbmFtZV07IHJldHVybiByZXM7IH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNMb2FkaW5nW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVqc2Nzc2ZpbGUoZmlsZW5hbWUsIGZpbGV0eXBlKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldGVsZW1lbnQgPSBmaWxldHlwZSA9PT0gJ2pzJyA/ICdzY3JpcHQnIDogZmlsZXR5cGUgPT09ICdjc3MnID8gJ2xpbmsnIDogJ25vbmUnOyAvL2RldGVybWluZSBlbGVtZW50IHR5cGUgdG8gY3JlYXRlIG5vZGVsaXN0IGZyb21cclxuICAgICAgICBsZXQgdGFyZ2V0YXR0ciA9IGZpbGV0eXBlID09PSAnanMnID8gJ3NyYycgOiBmaWxldHlwZSA9PT0gJ2NzcycgPyAnaHJlZicgOiAnbm9uZSc7IC8vZGV0ZXJtaW5lIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHRvIHRlc3QgZm9yXHJcbiAgICAgICAgbGV0IGFsbHN1c3BlY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFyZ2V0ZWxlbWVudCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGFsbHN1c3BlY3RzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHsgLy9zZWFyY2ggYmFja3dhcmRzIHdpdGhpbiBub2RlbGlzdCBmb3IgbWF0Y2hpbmcgZWxlbWVudHMgdG8gcmVtb3ZlXHJcbiAgICAgICAgICAgIGlmIChhbGxzdXNwZWN0c1tpXSAmJiBhbGxzdXNwZWN0c1tpXS5nZXRBdHRyaWJ1dGUodGFyZ2V0YXR0cikgIT09IG51bGwgJiYgYWxsc3VzcGVjdHNbaV0uZ2V0QXR0cmlidXRlKHRhcmdldGF0dHIpLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYWxsc3VzcGVjdHNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhbGxzdXNwZWN0c1tpXSk7IC8vcmVtb3ZlIGVsZW1lbnQgYnkgY2FsbGluZyBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmksIGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcoWz8mXSknICsga2V5ICsgJz0uKj8oJnwkKScsICdpJyk7XHJcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nO1xyXG4gICAgICAgIGlmICh1cmkubWF0Y2gocmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmkucmVwbGFjZShyZSwgJyQxJyArIGtleSArICc9JyArIHZhbHVlICsgJyQyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJpICsgc2VwYXJhdG9yICsga2V5ICsgJz0nICsgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkluTmV3VGFiKGh0bWwpIHtcclxuICAgICAgICBsZXQgbmV3V2luZG93ID0gd2luZG93Lm9wZW4oJ2Fib3V0OmJsYW5rJyk7XHJcbiAgICAgICAgaWYgKCFuZXdXaW5kb3cgfHwgbmV3V2luZG93LmNsb3NlZCB8fCB0eXBlb2YgbmV3V2luZG93LmNsb3NlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy9QT1BVUCBCTE9DS0VEXHJcbiAgICAgICAgICAgIC8vaWYgKE5vdGlmaWVyKSB7XHJcbiAgICAgICAgICAgIC8vICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgbWVzc2FnZTogJ0Jyb3dzZXIgZG9lcyBub3QgYWxsb3cgb3BlbmluZyBwb3B1cCB3aW5kb3dzIScsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1dpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcclxuICAgICAgICAgICAgbmV3V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIG5ld1dpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQWxsKHN0ciwgZmluZCwgcmVwbGFjZSkge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsU2VsZWN0b3JzKCkge1xyXG4gICAgICAgIGxldCByZXQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBydWxlcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLnJ1bGVzIHx8IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLmNzc1J1bGVzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4IGluIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJ1bGVzW3hdLnNlbGVjdG9yVGV4dCA9PT0gJ3N0cmluZycpIHJldC5wdXNoKHJ1bGVzW3hdLnNlbGVjdG9yVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjc3NTZWxlY3RvckV4aXN0cyhzZWxlY3Rvcikge1xyXG4gICAgICAgIGxldCBzZWxlY3RvcnMgPSBnZXRBbGxTZWxlY3RvcnMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzW2ldID09PSBzZWxlY3RvcikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVybChpbnB1dElkLCB1cmxJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWlucHV0SWQgfHwgIXVybElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciAkdGl0bGUgPSAkKGlucHV0SWQpO1xyXG4gICAgICAgIHZhciAkdXJsID0gJCh1cmxJZCk7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZVZhbHVlID0gJHRpdGxlLnZhbCgpLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHVybFZhbHVlID0gJHVybC52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAodXJsVmFsdWUuaW5kZXhPZih0aXRsZVZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdXJsVmFsdWUgPSB1cmxWYWx1ZS5yZXBsYWNlKHRpdGxlVmFsdWUsICcnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkdGl0bGUub24oJ2lucHV0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICB0aXRsZVZhbHVlID0gJHRpdGxlLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAkdXJsLnZhbCh0aXRsZVZhbHVlLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzNCxcclxuICAgICAgICBndWlkLFxyXG4gICAgICAgIGlzR3VpZCxcclxuICAgICAgICBsb2FkanNjc3NmaWxlLFxyXG4gICAgICAgIGxvYWRqc2Nzc2ZpbGVBc3luYyxcclxuICAgICAgICByZW1vdmVqc2Nzc2ZpbGUsXHJcbiAgICAgICAgdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIsXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBvcGVuSW5OZXdUYWIsXHJcbiAgICAgICAgcmVwbGFjZUFsbCxcclxuICAgICAgICBjc3NTZWxlY3RvckV4aXN0cyxcclxuICAgICAgICBwb3B1bGF0ZVVybFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEdsb2JhbCB1dGlsaXRpZXMgZXZlbnRzXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuc3QtdG9nZ2xlJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICBsZXQgJHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgbGV0ICR0YXJnZXQgPSAkKCR0cmlnZ2VyLmF0dHIoJ2RhdGEtdG9nZ2xlJykpO1xyXG5cclxuICAgIGlmICgkdHJpZ2dlci5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkgeyAkKGVsZW1lbnQpLnNob3coKTsgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkgeyAkKGVsZW1lbnQpLmhpZGUoKTsgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgVXRpbHMgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vZGF0YS5qcyc7XHJcblxyXG52YXIgVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZSgkZWxlbWVudCwgZXJyb3JNZXNzYWdlLCB2YWxpZGF0ZUZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAkZWxlbWVudC52YWwoKTtcclxuICAgICAgICBpZiAodmFsaWRhdGVGdW5jKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2JvcmRlcicsICcxcHggc29saWQgI2ZmNjg2OCcpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5uZXh0KCdzcGFuJykudGV4dChlcnJvck1lc3NhZ2UgfHwgJ0ludmFsaWQgdmFsdWUhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWluaW11bUxlbmd0aCh2YWx1ZSwgbWluTGVuZ2h0KSB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPj0gbWluTGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzTWF4aW11bUxlbmd0aCh2YWx1ZSwgbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5naHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpYyh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oW2EtejAtOV0rKSQvaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15bYS16QS1aMC05O10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVXJsRnJpZW5kbHkodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOS1fXSskLztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2luZyh2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTdGFydGluZ1dpdGhMZXR0ZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2Etel0vaTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRGVjaW1hbE51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL15cXGQrXFwuXFxkezAsMn0kLztcclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXi0/XFxkK1xcLj9cXGQqJC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0d1aWQoc3RyaW5nVG9UZXN0KSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ1RvVGVzdFswXSA9PT0gJ3snKSB7XHJcbiAgICAgICAgICAgIHN0cmluZ1RvVGVzdCA9IHN0cmluZ1RvVGVzdC5zdWJzdHJpbmcoMSwgc3RyaW5nVG9UZXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVnZXhHdWlkID0gL14oXFx7KXswLDF9WzAtOWEtZkEtRl17OH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXsxMn0oXFx9KXswLDF9JC9naTtcclxuICAgICAgICByZXR1cm4gcmVnZXhHdWlkLnRlc3Qoc3RyaW5nVG9UZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgJiYgcGFyc2VJbnQodmFsdWUpID09IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGxvd2VyIG9yIGVxdWFsIHRvICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1heCA/ICt2YWx1ZSA8PSArbWF4IDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heCAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvICR7bWlufS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1pbiA/ICt2YWx1ZSA+PSArbWluIDogdHJ1ZTsgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCkge1xyXG4gICAgICAgIGlmIChtaW4gJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZy5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbik7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIG1heGltdW0gcGVybWl0dGVkIGNoYXJhY3RlcnMgbGVuZ3RoIGlzICR7bWF4fS5gLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heCk7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB2YWxpZGF0ZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAndmFsaWRhdGUnIGluc2lkZSB0aGUgd3JhcHBlci5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbVZhbGlkYXRpb25GdW5jIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciBoYW5kbGluZyBzcGVjaWZpYyBsb2dpYy4gV2lsbCByZWNpZXZlIHRoZSBIVE1MRWxlbWVudC5cclxuICAgICAqIE11c3QgcmV0dXJuIHRydWUgaWYgdmFsaWRhdGlvbiBpcyBwYXNzaW5nLlxyXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMoZXYpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzICYmICFldiAmJiAhZXYudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBIVE1MRWxlbWVudCBoYXMgYmVlbiBwcm92aWRlZCwgJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCAkZWxlbWVudHNUb1ZhbGlkYXRlID0gJCh0aGlzIHx8IGV2LnRhcmdldCkuZmluZCgnLnZhbGlkYXRlJyk7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudHNUb1ZhbGlkYXRlLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoJGVsZW1lbnQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhZmxhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZUZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGxldCB2YWxpZGF0aW9uTWVzc2FnZXMgPSB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCBmaWVsZCEnLFxyXG4gICAgICAgICAgICAnZW1haWwnOiAnSW52YWxpZCBFLU1haWwhJyxcclxuICAgICAgICAgICAgJ2ludCc6ICdOb3QgYW4gaW50ZWdlciBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ251bWJlcic6ICdOb3QgYSBudW1iZXIhJyxcclxuICAgICAgICAgICAgJ2d1aWQnOiAnSW52YWxpZCBndWlkISdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdGlvblR5cGVzID0gKCRlbGVtZW50LmF0dHIoJ2RhdGEtdmFsaWRhdGlvbi10eXBlJykgfHwgJycpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IGlubmVyRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtaW4gPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1pbicpO1xyXG4gICAgICAgIGxldCBtYXggPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1heCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRpb25UeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1lc3NhZ2UtJyArIHZhbGlkYXRpb25UeXBlc1tpXSkgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW3ZhbGlkYXRpb25UeXBlc1tpXV07XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkYXRpb25UeXBlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUoJGVsZW1lbnQsIHZhbGlkYXRpb25NZXNzYWdlLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICEhdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgdmFsaWRhdGVFbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVjaW1hbCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkb3VibGUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmxvYXQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCRlbGVtZW50LCBuYW1lICsgJyBtdXN0IGJlIGRlY2ltYWwgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIScsICh2YWx1ZSkgPT4geyByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZSkgPT0gdmFsdWU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWlzTnVtYmVySW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW50JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNJbnRlZ2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdndWlkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgaXNHdWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc0xlbmdodEluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGN1c3RvbVZhbGlkYXRpb25GdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhY3VzdG9tVmFsaWRhdGlvbkZ1bmMoJGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbm5lckZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFpbm5lckZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSBldiA/ICQoZXYudGFyZ2V0KSA6ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmllbGQoJHRhcmdldCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIobmFtZSwgdXJsLCBtaW5MZW5naHQsIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVVcmxPbkNoYW5nZShldikge1xyXG4gICAgICAgICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgbGV0IG1pbiA9IG1pbkxlbmdodCB8fCAkaW5wdXQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAobWluICYmICFWYWxpZGF0b3IudmFsaWRhdGUoJGlucHV0LCBgVGhlIHZhbHVlIG11c3QgYmUgYXRsZWFzdCAke21pbn0gY2hhcmFjdGVycyBsb25nIWAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIFZhbGlkYXRvci5oYXNNaW5pbXVtTGVuZ3RoKHZhbCwgK21pbik7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkaW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRyYVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlba2V5XSA9IGV4dHJhVmFsdWVzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6IHVybCwgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgcmVzLm1lc3NhZ2UgfHwgJ1ZhbHVlIGlzIGludmFsaWQgb3IgYWxyZWFkeSBpbiB1c2UhJywgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gcmVzLnN1Y2Nlc3M7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGEuZGVmYXVsdEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQubmV4dCgnc3BhbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVVcmxPbkNoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVybCh2YWxpZGF0ZVVybCwgJHVybEZpZWxkLCAkYnRuU3VibWl0KSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eW1xcd1xcLVxcLl0rJC9pKTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBjYW4gb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGRhc2goLSksIHBvaW50KC4pIGFuZCB1bmRlcnNjb3JlKF8pICEnLCAodikgPT4gbWF0Y2hlc1BhdHRlcm4odiwgcGF0dGVybikpKSB7XHJcbiAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsOiB2YWxpZGF0ZVVybCB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlKCR1cmxGaWVsZCwgJ1VybCBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsICh2KT0+IHJlcy5zdWNjZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgJGJ0blN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVW5pcXVlbmVzKG5hbWUsIGNsYXNzVG9WYWxpZGF0ZSkge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgJGFsbE5hbWVzID0gJCgnLicgKyBjbGFzc1RvVmFsaWRhdGUpO1xyXG4gICAgICAgIGZvciAobmFtZSBpbiAkYWxsTmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKCRhbGxOYW1lc1tuYW1lXS52YWx1ZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbGlkYXRlLFxyXG4gICAgICAgIGlzQWxwaGFOdW1lcmljLFxyXG4gICAgICAgIGhhc01pbmltdW1MZW5ndGgsXHJcbiAgICAgICAgdmFsaWRhdGVFbWFpbCxcclxuICAgICAgICBpc1N0YXJ0aW5nV2l0aExldHRlcixcclxuICAgICAgICBpc1VybEZyaWVuZGx5LFxyXG4gICAgICAgIGlzTnVtYmVyLFxyXG4gICAgICAgIGlzRGVjaW1hbE51bWJlcixcclxuICAgICAgICBpc0FscGhhTnVtZXJpY0FuZFNlbWljb2xvbixcclxuICAgICAgICBpc0Z1bmN0aW9uLFxyXG4gICAgICAgIGlzR3VpZCxcclxuICAgICAgICBjcmVhdGVGaWVsZHNWYWxpZGF0aW9uLFxyXG4gICAgICAgIGlzSW50ZWdlcixcclxuICAgICAgICBjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlcixcclxuICAgICAgICB2YWxpZGF0ZUZpZWxkLFxyXG4gICAgICAgIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVVbmlxdWVuZXMsXHJcbiAgICAgICAgdmFsaWRhdGVVcmxcclxuICAgIH07XHJcbn0oKSk7XHJcblxyXG5leHBvcnQgeyBWYWxpZGF0b3IgfTtcclxuIiwiLyogZ2xvYmFscyBQcmlzbSwgcHJldHRpZnkgKi9cclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vY29tbW9uL2RhdGEuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvY3VtZW50YXRpb25Nb2R1bGUoKSB7XHJcbiAgICBsZXQgJHdyYXBwZXIgPSAkKCcuc3QtZG9jdW1lbnRhdGlvbi13cmFwcGVyJyk7XHJcbiAgICBpZiAoJHdyYXBwZXIubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgJGRvY01lbnUgPSAkd3JhcHBlci5maW5kKCcuZG9jcy1tZW51Jyk7XHJcbiAgICBsZXQgJGJ0bk5leHQgPSAkd3JhcHBlci5maW5kKCcubmV4dC1kb2MnKTtcclxuICAgIGxldCAkYnRuUHJldiA9ICR3cmFwcGVyLmZpbmQoJy5wcmV2LWRvYycpO1xyXG4gICAgbGV0ICR2ZXJzaW9ucyA9ICR3cmFwcGVyLmZpbmQoJy5kb2N1bWVudGF0aW9uLXZlcnNpb25zJyk7XHJcbiAgICBsZXQgJHRvcGljRGV0YWlscyA9ICR3cmFwcGVyLmZpbmQoJy50b3BpYy1kZXRhaWxzJyk7XHJcblxyXG4gICAgaW5pdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgbGV0ICRmaXJzdCA9ICRkb2NNZW51LmZpbmQoJ2EnKS5maXJzdCgpO1xyXG4gICAgICAgIGlmICgkZmlyc3QgJiYgJGZpcnN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZWN0VG9waWMoeyB0YXJnZXQ6ICRmaXJzdCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghJGZpcnN0IHx8ICEkZmlyc3QuYXR0cignZGF0YS1uZXh0JykpIHtcclxuICAgICAgICAgICAgJGJ0bk5leHQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgJGRvY01lbnUub24oJ2NsaWNrJywgJy5nbHlwaGljb24tbWVudS1yaWdodCcsIGV4cGFuZCk7XHJcbiAgICAgICAgJGRvY01lbnUub24oJ2NsaWNrJywgJy5nbHlwaGljb24tbWVudS1kb3duJywgY29sbGFwc2UpO1xyXG4gICAgICAgICRkb2NNZW51Lm9uKCdjbGljaycsICdsaScsIHNlbGVjdFRvcGljKTtcclxuICAgICAgICAkYnRuTmV4dC5vbignY2xpY2snLCBwYWdlaW5nKTtcclxuICAgICAgICAkYnRuUHJldi5vbignY2xpY2snLCBwYWdlaW5nKTtcclxuICAgICAgICAkdmVyc2lvbnMub24oJ2NoYW5nZScsIGxvYWRWZXJzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xyXG4gICAgICAgICRkb2NNZW51Lm9mZignY2xpY2snLCAnLmdseXBoaWNvbi1tZW51LXJpZ2h0JywgZXhwYW5kKTtcclxuICAgICAgICAkZG9jTWVudS5vZmYoJ2NsaWNrJywgJy5nbHlwaGljb24tbWVudS1kb3duJywgY29sbGFwc2UpO1xyXG4gICAgICAgICRkb2NNZW51Lm9mZignY2xpY2snLCAnbGknLCBzZWxlY3RUb3BpYyk7XHJcbiAgICAgICAgJGJ0bk5leHQub2ZmKCdjbGljaycsIHBhZ2VpbmcpO1xyXG4gICAgICAgICRidG5QcmV2Lm9mZignY2xpY2snLCBwYWdlaW5nKTtcclxuICAgICAgICAkdmVyc2lvbnMub2ZmKCdjaGFuZ2UnLCBsb2FkVmVyc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFRvcGljKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGEucG9zdEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2RvY3VtZW50YXRpb24vZ2V0Y29udGVudCcsIGRhdGE6IHsgaWQ6IGlkLCB2ZXJzaW9uOiAkdmVyc2lvbnMudmFsKCkgfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgJHRvcGljRGV0YWlscy5odG1sKHJlcyk7XHJcbiAgICAgICAgfSwgRGF0YS5kZWZhdWx0RXJyb3IpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBkaXNwYXRjaCBldmVudCBpbnN0ZWFkXHJcbiAgICAgICAgICAgIGlmICgkKCdwcmUnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy5wcmV0dHlwcmludCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByZXR0aWZ5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleHBhbmQoZXYpIHtcclxuICAgICAgICBsZXQgJGljb24gPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgJGljb24ucGFyZW50KCkubmV4dCgndWwnKS5zaG93KCk7XHJcbiAgICAgICAgJGljb24ucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1tZW51LXJpZ2h0JykuYWRkQ2xhc3MoJ2dseXBoaWNvbi1tZW51LWRvd24nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb2xsYXBzZShldikge1xyXG4gICAgICAgIGxldCAkaWNvbiA9ICQoZXYudGFyZ2V0KTtcclxuICAgICAgICAkaWNvbi5yZW1vdmVDbGFzcygnZ2x5cGhpY29uLW1lbnUtZG93bicpLmFkZENsYXNzKCdnbHlwaGljb24tbWVudS1yaWdodCcpO1xyXG4gICAgICAgIGxldCAkdG9IaWRlID0gJGljb24ucGFyZW50KCkubmV4dCgndWwnKTtcclxuICAgICAgICAkdG9IaWRlLmhpZGUoKTtcclxuXHJcbiAgICAgICAgbGV0IGRlc2NlbmRhbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoJHRvSGlkZVswXS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpLCAwKTtcclxuXHJcbiAgICAgICAgZGVzY2VuZGFudHMuZm9yRWFjaChmdW5jdGlvbiAoZGVzY2VuZGFudCkge1xyXG4gICAgICAgICAgICBsZXQgJGl0ZW0gPSAkKGRlc2NlbmRhbnQpO1xyXG4gICAgICAgICAgICAkaXRlbS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGxldCAkaWNvbiA9ICRpdGVtLnByZXYoKS5maW5kKCdzcGFuLmdseXBoaWNvbicpO1xyXG4gICAgICAgICAgICBpZiAoJGljb24gJiYgJGljb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJGljb24ucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1tZW51LWRvd24nKS5hZGRDbGFzcygnZ2x5cGhpY29uLW1lbnUtcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdFRvcGljKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0cmlnZ2VyID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGlmICgkdHJpZ2dlci5pcygnZGl2JykpIHtcclxuICAgICAgICAgICAgJHRyaWdnZXIgPSAkdHJpZ2dlci5maW5kKCdhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHRyaWdnZXIuaXMoJ3NwYW4uZ2x5cGhpY29uJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCR0cmlnZ2VyLmlzKCdzcGFuLmNoaWxkbGVzcycpKSB7XHJcbiAgICAgICAgICAgICR0cmlnZ2VyID0gJHRyaWdnZXIubmV4dCgnYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5leHRJZCA9ICR0cmlnZ2VyLmF0dHIoJ2RhdGEtbmV4dCcpO1xyXG4gICAgICAgIGxldCBwcmV2SWQgPSAkdHJpZ2dlci5hdHRyKCdkYXRhLXByZXYnKTtcclxuXHJcbiAgICAgICAgaWYgKCFuZXh0SWQpIHtcclxuICAgICAgICAgICAgJGJ0bk5leHQuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRidG5OZXh0LnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcHJldklkKSB7XHJcbiAgICAgICAgICAgICRidG5QcmV2LmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYnRuUHJldi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkYnRuTmV4dC5hdHRyKCdkYXRhLWlkJywgbmV4dElkKTtcclxuICAgICAgICAkYnRuUHJldi5hdHRyKCdkYXRhLWlkJywgcHJldklkKTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gJHRyaWdnZXIuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgICRkb2NNZW51LmF0dHIoJ2RhdGEtc2VsZWN0ZWQnLCBpZCk7XHJcblxyXG4gICAgICAgIGxvYWRUb3BpYyhpZCk7XHJcbiAgICAgICAgZXhwYW5kKHsgdGFyZ2V0OiAkdHJpZ2dlci5wcmV2KCdzcGFuLmdseXBoaWNvbicpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2VpbmcoZXYpIHtcclxuICAgICAgICBsZXQgaWQgPSAkKGV2LnRhcmdldCkuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0VG9waWMoeyB0YXJnZXQ6ICRkb2NNZW51LmZpbmQoJ2FbZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkVmVyc2lvbihldikge1xyXG4gICAgICAgIGxldCBpZCA9ICRkb2NNZW51LmF0dHIoJ2RhdGEtc2VsZWN0ZWQnKTtcclxuICAgICAgICBsb2FkVG9waWMoaWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL2NvbW1vbi91dGlscy5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5pbXBvcnQgeyBfR3JpZCB9IGZyb20gJy4vbW9kdWxlcy9ncmlkLmpzJztcclxuaW1wb3J0IHsgQ29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciB9IGZyb20gJy4vbW9kdWxlcy9oYXNoLXJvdXRlci5qcyc7XHJcbmltcG9ydCB7IGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzIH0gZnJvbSAnLi9jb21tb24vaGFuZGxlYmFycy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ydW1XaWRnZXQgKCkge1xyXG4gICAgbGV0ICR3cmFwcGVyID0gJCgnLmZvcnVtLXdpZGdldC13cmFwcGVyJyk7XHJcbiAgICBpZiAoISR3cmFwcGVyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgJG5hdiA9ICQoJy5mb3J1bS1yb3V0ZXInKTtcclxuICAgIGxldCAkY29udGFpbmVyID0gJCgnLmZvcnVtLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0ICRlcnJvcnMgPSAkKCcuZm9ydW0tZXJyb3JzJyk7XHJcbiAgICBsZXQgdXNlckluZm8gPSB7fTtcclxuXHJcbiAgICBsZXQgZ3JpZDtcclxuICAgIGNvbnN0IHRlbXBsYXRlc0NhY2hlID0ge307XHJcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBbeyBuYW1lOiAnZm9ydW0tY29udGVudCcsIHVybDogJy90ZW1wbGF0ZXMvZm9ydW0tY29udGVudC5odG1sJyB9LCB7IG5hbWU6ICdmb3J1bS1wb3N0JywgdXJsOiAnL3RlbXBsYXRlcy9mb3J1bS1wb3N0Lmh0bWwnIH1dO1xyXG5cclxuICAgIGxvYWREZXBlbmRlbmNpZXMoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICByZXR1cm4gbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXModGVtcGxhdGVzQ2FjaGUsIHRlbXBsYXRlcyk7XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICByZXR1cm4gRGF0YS5nZXRKc29uKHsgdXJsOiAnL2ZvcnVtL2NhdGVnb3JpZXMvZ2V0dXNlcicgfSkudGhlbihyZXMgPT4gdXNlckluZm8gPSByZXMuc3VjY2VzcyA/IHJlcy51c2VySW5mbyA6IHt9KTtcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBIYXNoUm91dGVyLmdldCgnZm9ydW0nKTtcclxuICAgICAgICBoYW5kbGVBY3Rpb24ocGFyYW1zKTtcclxuICAgICAgICBIYXNoUm91dGVyLm9uQ2hhbmdlKCdmb3J1bScsIGhhbmRsZUFjdGlvbiwgJ2ZvcnVtUm91dGVDaGFuZ2UnKTtcclxuICAgICAgICAkd3JhcHBlci5vbignY2xpY2snLCAnLmZvcnVtLW5hdicsIGZvcnVtUm91dGluZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBmb3J1bVJvdXRpbmcoZXYpIHtcclxuICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBsZXQgcGFyZW50SWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKTtcclxuICAgICAgICAkZXJyb3JzLmh0bWwoJycpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aW9uID09PSAnZGVsZXRlJykge1xyXG4gICAgICAgICAgICBkZWxldGVBY3Rpb24odHlwZSwgaWQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnc2F2ZScpIHtcclxuICAgICAgICAgICAgc2F2ZSh0eXBlLCBpZCwgcGFyZW50SWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEhhc2hSb3V0ZXIuc2V0KCdmb3J1bScsIHR5cGUgPyBbdHlwZSwgYWN0aW9uLCBpZCwgcGFyZW50SWRdIDogWydob21lJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRGVwZW5kZW5jaWVzKCkge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGlueW1jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChVdGlscy5sb2FkanNjc3NmaWxlQXN5bmMoJy9saWIvY3VzdG9tL3RpbnltY2UvdGlueW1jZS5taW4uanMnLCAnanMnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9taXNlcy5wdXNoKFV0aWxzLmxvYWRqc2Nzc2ZpbGVBc3luYygnL2Nzcy9ncmlkLmNzcycsICdjc3MnKSk7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChVdGlscy5sb2FkanNjc3NmaWxlQXN5bmMoJy9jc3MvZm9ydW0uY3NzJywgJ2NzcycpKTsgLy8gVE9ETzogY2hlY2sgaWYgbG9hZGVkXHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUdyaWQoKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKCcnKTtcclxuICAgICAgICAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdncmlkJ1xyXG4gICAgICAgIH0pLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IF9HcmlkKHtcclxuICAgICAgICAgICAgd3JhcHBlcklkOiAnLmdyaWQnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGFibGUnLFxyXG4gICAgICAgICAgICBzb3VyY2VDb25maWc6IHsgdHlwZTogJ2NsaWVudCcsIHVybDogJycgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yaWVzKCkge1xyXG4gICAgICAgIGxldCBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWVsZHM6IFsnaWQnXSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMixcclxuICAgICAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiAnPHN0cm9uZz4jaXRlbSM8L3N0cm9uZz4nLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFRlbXBsYXRlOiBidWlsZEFjdGlvblRlbXBsYXRlKHsgJ2RldGFpbHMnOiB7IG5hbWU6ICcjaXRlbSMnLCBjc3NDbGFzczogJ2dyaWQtaXRlbS10aXRsZScgfSB9LCAnY2F0ZWdvcnknKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAzLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8c3Ryb25nPiNpdGVtIzwvc3Ryb25nPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RoZW1lc0NvdW50JyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGhlbWVzIENvdW50JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiAnPHN0cm9uZz4jaXRlbSM8L3N0cm9uZz4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRlQ3JlYXRlZCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RhdGUgQ3JlYXRlZCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAxLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8c3Ryb25nPiNpdGVtIzwvc3Ryb25nPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGVNb2RpZmllZCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RhdGUgTW9kaWZpZWQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiAnPHN0cm9uZz4jaXRlbSM8L3N0cm9uZz4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWVsZHM6IFsnaWQnXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjb21wYXJlJyxcclxuICAgICAgICAgICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJUZW1wbGF0ZTogJzxzdHJvbmc+I2l0ZW0jPC9zdHJvbmc+JyxcclxuICAgICAgICAgICAgICAgIHRydWVUZW1wbGF0ZTogYnVpbGRBY3Rpb25UZW1wbGF0ZSh7ICdlZGl0JzogeyBuYW1lOiAnRWRpdCcgfSwgJ2RlbGV0ZSc6IHsgbmFtZTogJ0RlbGV0ZScgfSB9LCAnY2F0ZWdvcnknKSxcclxuICAgICAgICAgICAgICAgIGNvbXBhcmVyOiAoKSA9PiB1c2VySW5mby5pc0F1dGhlbnRpY2F0ZWQgJiYgdXNlckluZm8uaXNNb2RlcmF0b3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBidXR0b25zID0gdXNlckluZm8uaXNBdXRoZW50aWNhdGVkICYmIHVzZXJJbmZvLmlzTW9kZXJhdG9yID8gW3tcclxuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUnLFxyXG4gICAgICAgICAgICBpY29uT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogJ2FkZCcsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnZm9ydW0tbmF2JyxcclxuICAgICAgICAgICAgYXR0cmlidXRlczogeyAnZGF0YS1hY3Rpb24nOiAnY3JlYXRlJywgJ2RhdGEtdHlwZSc6ICdjYXRlZ29yeScgfVxyXG4gICAgICAgIH1dIDogW107XHJcblxyXG4gICAgICAgIGxldCBzb3VyY2VDb25maWcgPSB7IHR5cGU6ICdjbGllbnQnLCB1cmw6ICcvZm9ydW0vY2F0ZWdvcmllcy9ncmlkJyB9O1xyXG4gICAgICAgIHVwZGF0ZUdyaWQoeyBmaWVsZHM6IGNvbHVtbnMsIHNvdXJjZUNvbmZpZywgY3VzdG9tQWN0aW9uczogYnV0dG9ucyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkVGhlbWVzKGNhdGVnb3J5SWQpIHtcclxuICAgICAgICBsZXQgY29sdW1ucyA9IFt7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0aXRsZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGhlbWVzJyxcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgICAgICAgc2l6ZTogMixcclxuICAgICAgICAgICAgZXh0cmFGaWVsZHM6IFsnaWQnXSxcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8c3Ryb25nPiNpdGVtIzwvc3Ryb25nPicsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZTogYnVpbGRBY3Rpb25UZW1wbGF0ZSh7ICdkZXRhaWxzJzogeyBuYW1lOiAnI2l0ZW0jJywgY3NzQ2xhc3M6ICdncmlkLWl0ZW0tdGl0bGUnIH0gfSwgJ3RoZW1lJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2NyZWF0b3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0b3InLFxyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgICAgICBoZWFkZXJUZW1wbGF0ZTogJzxzdHJvbmc+I2l0ZW0jPC9zdHJvbmc+J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZGF0ZUNyZWF0ZWQnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0RhdGUgQ3JlYXRlZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICAgICAgc2l6ZTogMixcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8c3Ryb25nPiNpdGVtIzwvc3Ryb25nPidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2RhdGVNb2RpZmllZCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGF0ZSBNb2RpZmllZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICAgICAgc2l6ZTogMixcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8c3Ryb25nPiNpdGVtIzwvc3Ryb25nPidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgIGV4dHJhRmllbGRzOiBbJ2lkJ10sXHJcbiAgICAgICAgICAgIHR5cGU6ICdjb21wYXJlJyxcclxuICAgICAgICAgICAgc2l6ZTogMixcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8c3Ryb25nPiNpdGVtIzwvc3Ryb25nPicsXHJcbiAgICAgICAgICAgIHRydWVUZW1wbGF0ZTogYnVpbGRBY3Rpb25UZW1wbGF0ZSh7ICdlZGl0JzogeyBuYW1lOiAnRWRpdCcgfSwgJ2RlbGV0ZSc6IHsgbmFtZTogJ0RlbGV0ZScgfSB9LCAndGhlbWUnKSxcclxuICAgICAgICAgICAgZmFsc2VUZW1wbGF0ZTogdXNlckluZm8uaXNBdXRoZW50aWNhdGVkICYmIHVzZXJJbmZvLmlzTW9kZXJhdG9yID8gYnVpbGRBY3Rpb25UZW1wbGF0ZSh7ICdkZWxldGUnOiB7IG5hbWU6ICdEZWxldGUnIH0gfSwgJ3RoZW1lJykgOiAnJyxcclxuICAgICAgICAgICAgY29tcGFyZXI6IHZhbHVlID0+IHVzZXJJbmZvLmlzQXV0aGVudGljYXRlZCAmJiB1c2VySW5mby5pZCA9PT0gdmFsdWVcclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSB1c2VySW5mby5pc0F1dGhlbnRpY2F0ZWQgPyBbe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZScsXHJcbiAgICAgICAgICAgIGljb25Pbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdmb3J1bS1uYXYnLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7ICdkYXRhLWFjdGlvbic6ICdjcmVhdGUnLCAnZGF0YS10eXBlJzogJ3RoZW1lJywgJ2RhdGEtcGFyZW50JzogY2F0ZWdvcnlJZCB9XHJcbiAgICAgICAgfV0gOiBbXTtcclxuXHJcbiAgICAgICAgbGV0IHNvdXJjZUNvbmZpZyA9IHsgdHlwZTogJ2NsaWVudCcsIHVybDogJy9mb3J1bS90aGVtZXMvZ3JpZD9jYXRlZ29yeUlkPScgKyBjYXRlZ29yeUlkIH07XHJcbiAgICAgICAgdXBkYXRlR3JpZCh7IGZpZWxkczogY29sdW1ucywgc291cmNlQ29uZmlnLCBjdXN0b21BY3Rpb25zOiBidXR0b25zIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQb3N0cyh0aGVtZUlkKSB7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbe1xyXG4gICAgICAgICAgICBuYW1lOiAndGl0bGUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RpdGxlJyxcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgICAgICAgc2l6ZTogMyxcclxuICAgICAgICAgICAgZXh0cmFGaWVsZHM6IFsnaWQnXSxcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8Yj4jaXRlbSM8L2I+JyxcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8c3Ryb25nPiNpdGVtIzwvc3Ryb25nPicsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZTogYnVpbGRBY3Rpb25UZW1wbGF0ZSh7ICdkZXRhaWxzJzogeyBuYW1lOiAnI2l0ZW0jJywgY3NzQ2xhc3M6ICdncmlkLWl0ZW0tdGl0bGUnIH0gfSwgJ3Bvc3QnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ29udGVudCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiAnPGI+I2l0ZW0jPC9iPidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgIGV4dHJhRmllbGRzOiBbJ2lkJ10sXHJcbiAgICAgICAgICAgIHR5cGU6ICdjb21wYXJlJyxcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6ICc8Yj4jaXRlbSM8L2I+JyxcclxuICAgICAgICAgICAgdHJ1ZVRlbXBsYXRlOiBidWlsZEFjdGlvblRlbXBsYXRlKHsgJ2VkaXQnOiB7IG5hbWU6ICdFZGl0JyB9LCAnZGVsZXRlJzogeyBuYW1lOiAnRGVsZXRlJyB9IH0sICdwb3N0JyksXHJcbiAgICAgICAgICAgIGZhbHNlVGVtcGxhdGU6IHVzZXJJbmZvLmlzQXV0aGVudGljYXRlZCAmJiB1c2VySW5mby5pc01vZGVyYXRvciA/IGJ1aWxkQWN0aW9uVGVtcGxhdGUoeyAnZGVsZXRlJzogeyBuYW1lOiAnRGVsZXRlJyB9IH0sICdwb3N0JykgOiAnJyxcclxuICAgICAgICAgICAgY29tcGFyZXI6IHZhbHVlID0+IHVzZXJJbmZvLmlzQXV0aGVudGljYXRlZCAmJiB1c2VySW5mby5pZCA9PT0gdmFsdWVcclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSB1c2VySW5mby5pc0F1dGhlbnRpY2F0ZWQgPyBbe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZScsXHJcbiAgICAgICAgICAgIGljb25Pbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdmb3J1bS1uYXYnLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7ICdkYXRhLWFjdGlvbic6ICdjcmVhdGUnLCAnZGF0YS10eXBlJzogJ3Bvc3QnLCAnZGF0YS1wYXJlbnQnOiB0aGVtZUlkIH1cclxuICAgICAgICB9XSA6IFtdO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlQ29uZmlnID0geyB0eXBlOiAnY2xpZW50JywgdXJsOiAnL2ZvcnVtL3Bvc3RzL2dyaWQ/dGhlbWVJZD0nICsgdGhlbWVJZCB9O1xyXG4gICAgICAgIHVwZGF0ZUdyaWQoeyBmaWVsZHM6IGNvbHVtbnMsIHNvdXJjZUNvbmZpZywgY3VzdG9tQWN0aW9uczogYnV0dG9ucyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZEFjdGlvblRlbXBsYXRlKGFjdGlvbnMsIHR5cGUpIHtcclxuICAgICAgICBsZXQgYnV0dG9ucyA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcyA9IGFjdGlvbnNba2V5XS5jc3NDbGFzcyB8fCAnYnRuJztcclxuICAgICAgICAgICAgYnV0dG9ucyArPSBgPGEgY2xhc3M9XCJmb3J1bS1uYXYgJHtjc3NDbGFzc31cIiBkYXRhLWFjdGlvbj1cIiR7a2V5fVwiIGRhdGEtdHlwZT1cIiR7dHlwZX1cIiBkYXRhLWlkPVwiI2l0ZW0wI1wiPiR7YWN0aW9uc1trZXldLm5hbWV9PC9hPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGxldCB0eXBlID0gZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDAgPyBkYXRhWzBdIDogbnVsbDtcclxuICAgICAgICBsZXQgYWN0aW9uID0gZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDEgPyBkYXRhWzFdIDogbnVsbDtcclxuICAgICAgICBsZXQgaWQgPSBkYXRhICYmIGRhdGEubGVuZ3RoID4gMiA/IGRhdGFbMl0gOiBudWxsO1xyXG4gICAgICAgIGxldCBwYXJlbnRJZCA9IGRhdGEgJiYgZGF0YS5sZW5ndGggPiAzID8gZGF0YVszXSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09PSAnaG9tZScpIHtcclxuICAgICAgICAgICAgbG9hZENhdGVnb3JpZXMoKTtcclxuICAgICAgICAgICAgRm9ydW1OYXZpZ2F0aW9uLmJ1aWxkTmF2KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZSh0eXBlLCBwYXJlbnRJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uID09PSAnZGV0YWlscycpIHtcclxuICAgICAgICAgICAgZGV0YWlscyh0eXBlLCBpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uID09PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgZWRpdCh0eXBlLCBpZCwgcGFyZW50SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRm9ydW1OYXZpZ2F0aW9uLmJ1aWxkTmF2KHsgaWQsIGFjdGlvbiwgdHlwZSwgcGFyZW50SWQgfSk7XHJcbiAgICAgICAgLy8gVE9ETzogYWRkIHVucmVjb2duaXplZCBhY3Rpb24gaGFuZGxlclxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0eXBlLCBwYXJlbnRJZCkge1xyXG4gICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICBsZXQgaHRtbCA9IHRlbXBsYXRlc0NhY2hlWydmb3J1bS1jb250ZW50J10oeyB0eXBlLCBwYXJlbnRJZCB9KTtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoaHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdCh0eXBlLCBpZCwgcGFyZW50SWQpIHtcclxuICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgbGV0IHVybCA9ICh0eXBlID09PSAnY2F0ZWdvcnknID8gJy9mb3J1bS9jYXRlZ29yaWVzJyA6IGAvZm9ydW0vJHt0eXBlfXNgKSArIGAvZ2V0JHt0eXBlfT9pZD0ke2lkfWA7XHJcbiAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gdGVtcGxhdGVzQ2FjaGVbJ2ZvcnVtLWNvbnRlbnQnXSh7IHR5cGUsIGlkLCBwYXJlbnRJZCwgdGl0bGU6IHJlcy5pdGVtLnRpdGxlLCBkZXNjcmlwdGlvbjogcmVzLml0ZW0uZGVzY3JpcHRpb24gfHwgcmVzLml0ZW0uY29udGVudCB9KTtcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFjdGlvbih0eXBlLCBpZCkge1xyXG4gICAgICAgIGxldCBib2R5ID0geyBpZHM6IFtpZF0gfTtcclxuICAgICAgICBsZXQgdXJsID0gKHR5cGUgPT09ICdjYXRlZ29yeScgPyAnL2ZvcnVtL2NhdGVnb3JpZXMnIDogYC9mb3J1bS8ke3R5cGV9c2ApICsgJy9kZWxldGUnO1xyXG4gICAgICAgIERhdGEucG9zdEpzb24oeyB1cmwsIGRhdGE6IGJvZHkgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgZ3JpZCA9IGdyaWQgfHwgaW5pdGlhbGl6ZUdyaWQoKTtcclxuICAgICAgICAgICAgICAgIGdyaWQubG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlFcnJvcihyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlKHR5cGUsIGlkLCBwYXJlbnRJZCkge1xyXG4gICAgICAgIGxldCB0aXRsZSA9ICRjb250YWluZXIuZmluZCgnLmlucHV0LXRpdGxlJykudmFsKCkgfHwgJyc7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gJGNvbnRhaW5lci5maW5kKCcuaW5wdXQtZGVzY3JpcHRpb24nKS52YWwoKSB8fCAnJztcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpZiAoVXRpbHMuaXNGdW5jdGlvbihmb3JtRGF0YS5zZXQpKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLnNldCgndGl0bGUnLCB0aXRsZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLnNldCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLnNldCgnY29udGVudCcsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuc2V0KCdwYXJlbnRJZCcsIHBhcmVudElkKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuc2V0KCdpZCcsIGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGl0bGUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFyZW50SWQnLCBwYXJlbnRJZCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gKHR5cGUgPT09ICdjYXRlZ29yeScgPyAnL2ZvcnVtL2NhdGVnb3JpZXMnIDogYC9mb3J1bS8ke3R5cGV9c2ApICsgKGlkID8gJy9lZGl0JyA6IGAvY3JlYXRlP2lkPSR7cGFyZW50SWR9YCk7XHJcbiAgICAgICAgRGF0YS5wb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgSGFzaFJvdXRlci5zZXQoJ2ZvcnVtJywgW3R5cGUsICdkZXRhaWxzJywgcmVzLmlkXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RXJyb3IocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gS25vdyB3aGVuIGZhaXJ5IHRhbGVzIGNlYXNlIHRvIGJlIHRhbGVzPyBXaGVuIHBlb3BsZSBzdGFydCBiZWxpZXZpbmcgaW4gdGhlbS5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZXRhaWxzKHR5cGUsIGlkKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3J5JzpcclxuICAgICAgICAgICAgICAgIGxvYWRUaGVtZXMoaWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RoZW1lJzpcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0cyhpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxyXG4gICAgICAgICAgICAgICAgbG9hZFBvc3QoaWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbG9hZENhdGVnb3JpZXMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUG9zdChpZCkge1xyXG4gICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICBEYXRhLmdldEpzb24oeyB1cmw6ICcvZm9ydW0vcG9zdHMvZ2V0UG9zdD9pZD0nICsgaWQgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSB0ZW1wbGF0ZXNDYWNoZVsnZm9ydW0tcG9zdCddKHsgY29udGVudDogcmVzLml0ZW0uY29udGVudCwgaXNBdXRoZW50aWNhdGVkOiByZXMuaXNBdXRoZW50aWNhdGVkIH0pO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0ICRjb21tZW50c0NvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLmNvbW1lbnRzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5pc0F1dGhlbnRpY2F0ZWQgPyBDb21tZW50cy5pbml0KGlkLCAkY29tbWVudHNDb250YWluZXIsICdmb3J1bS1jb21tZW50LWFyZWEnKSA6IENvbW1lbnRzLmxvYWRDb21tZW50cyhpZCwgJGNvbW1lbnRzQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgaWYgKGdyaWQpIHtcclxuICAgICAgICAgICAgZ3JpZC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGdyaWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVHcmlkKGNvbmZpZykge1xyXG4gICAgICAgIGdyaWQgPSBncmlkIHx8IGluaXRpYWxpemVHcmlkKCk7XHJcbiAgICAgICAgZ3JpZC51cGRhdGVDb25maWcoY29uZmlnKS5sb2FkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlFcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJGVycm9ycywgbWVzc2FnZSwgc3RhdHVzOiAnZGFuZ2VyJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIG5hdmlnYXRpb24gbG9naWNcclxuICAgIGNvbnN0IEZvcnVtTmF2aWdhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IHtcclxuICAgICAgICAgICAgJ2hvbWUnOiB7fSxcclxuICAgICAgICAgICAgJ2NhdGVnb3J5JzogbnVsbCxcclxuICAgICAgICAgICAgJ3RoZW1lJzogbnVsbCxcclxuICAgICAgICAgICAgJ3Bvc3QnOiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGROYXYoZGF0YSkge1xyXG4gICAgICAgICAgICAkKCcuYWN0aW9uLWhlbHBlci1uYXYnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKCRuYXYuY2hpbGRyZW4oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQoJzxhPjwvYT4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdmb3J1bS1uYXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdIb21lJ1xyXG4gICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oJG5hdik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YSB8fCBkYXRhLnR5cGUgPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25bJ3RoZW1lJ10gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJG5hdi5maW5kKGAuZm9ydW0tbmF2W2RhdGEtdHlwZT1cInRoZW1lXCJdYCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YSB8fCBkYXRhLnR5cGUgPT09ICdjYXRlZ29yeScgfHwgZGF0YS50eXBlID09PSAndGhlbWUnKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uWydwb3N0J10gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJG5hdi5maW5kKGAuZm9ydW0tbmF2W2RhdGEtdHlwZT1cInBvc3RcIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uWydjYXRlZ29yeSddID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICRuYXYuZmluZChgLmZvcnVtLW5hdltkYXRhLXR5cGU9XCJjYXRlZ29yeVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3Bvc3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVOYXYoZGF0YS5wYXJlbnRJZCwgZGF0YS5hY3Rpb24sICd0aGVtZScsICdQb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3RoZW1lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlTmF2KGRhdGEucGFyZW50SWQsIGRhdGEuYWN0aW9uLCAnY2F0ZWdvcnknLCAnVGhlbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWN0aW9uTmF2RWxlbWVudCgnQ3JlYXRlJywgJ0NhdGVnb3J5Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZU5hdihkYXRhLmlkLCBkYXRhLmFjdGlvbiwgZGF0YS50eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVOYXYoaWQsIGFjdGlvbiwgdHlwZSwgY3JlYXRlVHlwZSkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gKHR5cGUgPT09ICdjYXRlZ29yeScgPyAnL2ZvcnVtL2NhdGVnb3JpZXMnIDogYC9mb3J1bS8ke3R5cGV9c2ApICsgYC9nZXQke3R5cGV9P2lkPSR7aWR9YDtcclxuICAgICAgICAgICAgRGF0YS5nZXRKc29uKHsgdXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdwb3N0JyB8fCB0eXBlID09PSAndGhlbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25bJ2NhdGVnb3J5J10gPSB7IGlkOiByZXMuaXRlbS5jYXRlZ29yeUlkLCB0aXRsZTogcmVzLml0ZW0uY2F0ZWdvcnlUaXRsZSwgdHlwZTogJ2NhdGVnb3J5JywgYWN0aW9uOiAnZGV0YWlscycgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmF2RWxlbWVudChuYXZpZ2F0aW9uWydjYXRlZ29yeSddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAncG9zdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblsndGhlbWUnXSA9IHsgaWQ6IHJlcy5pdGVtLnRoZW1lSWQsIHRpdGxlOiByZXMuaXRlbS50aGVtZVRpdGxlLCB0eXBlOiAndGhlbWUnLCBhY3Rpb246ICdkZXRhaWxzJyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOYXZFbGVtZW50KG5hdmlnYXRpb25bJ3RoZW1lJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblt0eXBlXSA9IHsgaWQ6IHJlcy5pdGVtLmlkLCB0aXRsZTogcmVzLml0ZW0udGl0bGUsIHR5cGUsIGFjdGlvbjogJ2RldGFpbHMnIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmF2RWxlbWVudChuYXZpZ2F0aW9uW3R5cGVdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWN0aW9uTmF2RWxlbWVudCgnRWRpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVBY3Rpb25OYXZFbGVtZW50KCdDcmVhdGUnLCBjcmVhdGVUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmF2RWxlbWVudChpbmZvKSB7XHJcbiAgICAgICAgICAgIGxldCAkbGluayA9ICRuYXYuZmluZChgLmZvcnVtLW5hdltkYXRhLXR5cGU9XCIke2luZm8udHlwZX1cIl1gKTtcclxuICAgICAgICAgICAgaWYgKCRsaW5rLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRsaW5rLmF0dHIoJ2RhdGEtaWQnLCBpbmZvLmlkKTtcclxuICAgICAgICAgICAgICAgICRsaW5rLnRleHQoaW5mby50aXRsZSB8fCBpbmZvLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJzxhPjwvYT4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5mby50aXRsZSB8fCBpbmZvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZm9ydW0tbmF2LWVsZW1lbnQgZm9ydW0tbmF2JyxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1pZCc6IGluZm8uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtYWN0aW9uJzogJ2RldGFpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhLXR5cGUnOiBpbmZvLnR5cGVcclxuICAgICAgICAgICAgICAgIH0pLmFwcGVuZFRvKCRuYXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVBY3Rpb25OYXZFbGVtZW50KGFjdGlvbiwgdHlwZSkge1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IHR5cGUgPyBgJHthY3Rpb259ICR7dHlwZX1gIDogYWN0aW9uO1xyXG4gICAgICAgICAgICAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnZm9ydW0tbmF2LWVsZW1lbnQgYWN0aW9uLWhlbHBlci1uYXYnXHJcbiAgICAgICAgICAgIH0pLmFwcGVuZFRvKCRuYXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgYnVpbGROYXYgfTtcclxuICAgIH0pKCk7XHJcbn1cclxuIiwiLyogZ2xvYmFscyBTa3lwZVdlYkNvbnRyb2wsIFByaXNtLCBwcmV0dGlmeSAqL1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IGRvY3VtZW50YXRpb25Nb2R1bGUgfSBmcm9tICcuL2RvY3VtZW50YXRpb24td2lkZ2V0LmpzJztcclxuaW1wb3J0IHsgaW5pdENhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbC5qcyc7XHJcbmltcG9ydCB7IGJsb2dXaWRnZXQgfSBmcm9tICcuL2Jsb2ctd2lkZ2V0LmpzJztcclxuaW1wb3J0IHsgY29udGFjdEZvcm1XaWRnZXQgfSBmcm9tICcuL3NpdGV0cmlrcy9jb250YWN0LWZvcm0uanMnO1xyXG5pbXBvcnQgeyBmb3J1bVdpZGdldCB9IGZyb20gJy4vZm9ydW0td2lkZ2V0LmpzJztcclxuaW1wb3J0IHsgYWxsTmV3c1dpZGdldCB9IGZyb20gJy4vYWxsLW5ld3MuanMnO1xyXG5pbXBvcnQgeyBsaWNlbnNlV2lkZ2V0IH0gZnJvbSAnLi9saWNlbnNlcy13aWRnZXRzLmpzJztcclxuaW1wb3J0IHsgc3Vic2NyaXB0aW9uV2lkZ2V0IH0gZnJvbSAnLi9zdWJzY3JpcHRpb24uanMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRyZWVJdGVtc1NsaWRlKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcubW9yZS1pdGVtcycsIGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2ssIHRhcmdldCkge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB7fS50b1N0cmluZy5jYWxsKGNhbGxiYWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyAmJiB0YXJnZXQpIHtcclxuICAgICAgICAgICAgJCgnLmhpZGRlbi1zZWN0aW9uJykuc2xpZGVUb2dnbGUoJ3Nsb3cnLCAnc3dpbmcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA3NjcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuaGlkZGVuLXNlY3Rpb24tbGFzdC1ib2R5Jykuc2xpZGVUb2dnbGUoJ3Nsb3cnLCAnc3dpbmcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhpZGRlbi1zZWN0aW9uJykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2Nykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5oaWRkZW4tc2VjdGlvbi1sYXN0LWJvZHknKS5zbGlkZVRvZ2dsZSgnc2xvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy5tb3JlLWxlc3MtdGV4dCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgICQoJy5tb3JlLWl0ZW1zJykudG9nZ2xlQ2xhc3MoJ21vcmUtY2xpY2tlZCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRNb3JlKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcucmVhZC1tb3JlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0ICR0ZXh0QmxvY2tzID0gJHRhcmdldC5wYXJlbnRzKCcudHJlZS1yb3cnKS5maW5kKCcuY29udGVudCcpO1xyXG4gICAgICAgIGxldCAkcmVhZE1vcmVUZXh0ID0gJHRhcmdldC5wYXJlbnRzKCcudHJlZS1yb3cnKS5maW5kKCcucmVhZC1tb3JlJyk7XHJcblxyXG4gICAgICAgICR0ZXh0QmxvY2tzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzaG9ydC10ZXh0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyZWFkTW9yZVRleHQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCAkY3VycmVudFRhcmdldCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICRjdXJyZW50VGFyZ2V0LmNoaWxkcmVuKCcubW9yZScpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkY3VycmVudFRhcmdldC5jaGlsZHJlbignLmxlc3MnKS50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gUHJldHR5UHJpbnQgY2FsbCBmb3IgVGlueW1jXHJcbmZ1bmN0aW9uIHByZXR0eVByaW50SW5pdCgpIHtcclxuICAgIGlmICgkKCdwcmUnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCQoJy5wcmV0dHlwcmludCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBwcmV0dGlmeSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAxLjEgVmlkZW8gY3VzdG9tIHBsYXlsaXN0IGxvZ2ljXHJcbmZ1bmN0aW9uIGxvYWRNdWx0aXBsZVBsYXlsaXN0c0NvbnRlbnQoKSB7XHJcblxyXG4gICAgLy8gQWRkIHNlYXJjaCBmdW5jdGlvbmFsaXR5IHRvIHRoZSB3aWRnZXRcclxuICAgIGZ1bmN0aW9uIGdldENoYW5uZWxEYXRhaWxzKGNoYW5uZWxJZCkge1xyXG4gICAgICAgIHJldHVybiBEYXRhLmdldEpzb24oeyB1cmw6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NoYW5uZWxzP2tleT1BSXphU3lDV0g4N1RtOC1XY01CTlhpN04xUW9LLUFZWlIzbWhtUjgmcGFydD1jb250ZW50RGV0YWlscyZpZD0nICsgY2hhbm5lbElkIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGNoYW5uZWxVcGxvYWQgPSBkYXRhLml0ZW1zWzBdLmNvbnRlbnREZXRhaWxzLnJlbGF0ZWRQbGF5bGlzdHMudXBsb2FkcztcclxuICAgICAgICAgICAgcmV0dXJuIERhdGEuZ2V0SnNvbih7IHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wbGF5bGlzdElkPScgKyBjaGFubmVsVXBsb2FkICsgJyZrZXk9QUl6YVN5Q1I1SW40RFphVFA2SUVaUTByMUpjZXV2bHVKUnpRTkxFJnBhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTUwJyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2hWaWRlbygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5zZWFyY2gtdmlkZW8nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5zdWdnZXN0aW9ucycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcubXVsdGlwbGUtcGxheWxpc3RzIC5wbGF5bGlzdC10aHVtYm5haWxzLWxpc3QgLnBsYXlsaXN0LXRodW1ibmFpbCcpO1xyXG4gICAgICAgICAgICBsZXQgZnVsbERhdGE7XHJcbiAgICAgICAgICAgIGxldCBjaGFubmVsSWQgPSAnVUNVc1RaV1AxT3B5QlhYMl9DZk12MWZBJztcclxuICAgICAgICAgICAgbGV0IHRpdGxlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZnVsbERhdGEgPSBnZXRDaGFubmVsRGF0YWlscyhjaGFubmVsSWQpO1xyXG4gICAgICAgICAgICBmdWxsRGF0YS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBteURhdGEgPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteURhdGEuaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZXMucHVzaChteURhdGEuaXRlbXNbaV0uc25pcHBldC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmluZE1hdGNoZXMod29yZFRvTWF0Y2gsIHZpZGVvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWRlb3MuZmlsdGVyKHRpdGxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHdvcmRUb01hdGNoLCAnZ2knKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpdGxlLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkaXNwbGF5TWF0Y2hlcygpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaEFycmF5cyA9IGZpbmRNYXRjaGVzKHRoaXMudmFsdWUsIHRpdGxlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBtYXRjaEFycmF5cy5tYXAodGl0bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVBvc2l0aW9uID0gdGl0bGVzLmluZGV4T2YodGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmlkZW9JZCA9IG15RGF0YS5pdGVtc1tpdGVtUG9zaXRpb25dLnNuaXBwZXQucmVzb3VyY2VJZC52aWRlb0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYW1lXCIgZGF0YS1pZCA9XCIke3ZpZGVvSWR9XCI+JHt0aXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucy5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC12aWRlbycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VnZ2VzdGlvbnMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRpc3BsYXlNYXRjaGVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0VmlkZW8oKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gJCh0aGlzKS50ZXh0KCk7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb0lkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgICAgICQoJy5zZWFyY2gtdmlkZW8nKS52YWwoc2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAkKCcudmlkZW8tY29udGFpbmVyIGlmcmFtZScpLmF0dHIoJ3NyYycsIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcblxyXG4gICAgICAgIC8vIENsZWFuIHRoZSBpbnB1dFxyXG4gICAgICAgICQoJy5zZWFyY2gtdmlkZW8nKS52YWwoJycpO1xyXG4gICAgICAgICQoJy5zdWdnZXN0aW9ucycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVN1Z2dlc3Rpb25zT25PdXRzaWRlQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXYudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCR0YXJnZXQuaGFzQ2xhc3MoJ3NlYXJjaC12aWRlbycpIHx8ICR0YXJnZXQuaGFzQ2xhc3MoJ3N1Z2dlc3Rpb25zJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcuc3VnZ2VzdGlvbnMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFZpZGVvKCk7XHJcbiAgICBoaWRlU3VnZ2VzdGlvbnNPbk91dHNpZGVDbGljaygpO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcubmFtZScsIHNlbGVjdFZpZGVvKTtcclxufVxyXG5cclxuLy8gY3VzdG9tIHZpZGVvIHBsYXlsaXN0XHJcbmZ1bmN0aW9uIGxvYWRWaWRlb0J5SWQoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy52aWRlby10aHVtYm5haWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlmcmFtZUN1cnJlbnRTb3VyY2UgPSAkKCcudmlkZW8tY29udGFpbmVyIGlmcmFtZScpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIHZhciB0aHVubWJuYWlsU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXZpZGVvSWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCEoaWZyYW1lQ3VycmVudFNvdXJjZSA9PT0gdGh1bm1ibmFpbFNvdXJjZSkpIHtcclxuICAgICAgICAgICAgJCgnLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUnKS5hdHRyKCdzcmMnLCB0aHVubWJuYWlsU291cmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gbXVsdGlwbGUgcGxheWxpc3RzXHJcbmZ1bmN0aW9uIGxvYWRWaWRlb1NvdXJjZSgpIHtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnBsYXlsaXN0LXRodW1ibmFpbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWZyYW1lQ3VycmVudFNvdXJjZSA9ICQoJy52aWRlby1jb250YWluZXIgaWZyYW1lJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgdmFyIHRodW5tYm5haWxTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmlkZW9zb3VyY2UnKTtcclxuXHJcbiAgICAgICAgaWYgKCEoaWZyYW1lQ3VycmVudFNvdXJjZSA9PT0gdGh1bm1ibmFpbFNvdXJjZSkpIHtcclxuICAgICAgICAgICAgJCgnLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUnKS5hdHRyKCdzcmMnLCB0aHVubWJuYWlsU291cmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIFZpZGVvIE11bHRpcGxlIHBsYXlsaXN0cyBsb2dpY1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnc3QtYm9keS1jb250ZW50JykuZmluZCgnLm11bHRpcGxlLXBsYXlsaXN0cycpKSB7XHJcbiAgICAgICAgLy8gZ2V0IGFsbCB0aHVtYm5haWxzIGlkc1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnLm11bHRpcGxlLXBsYXlsaXN0cyAucGxheWxpc3QtdGh1bWJuYWlscy1saXN0IC5wbGF5bGlzdC10aHVtYm5haWwnKTtcclxuICAgICAgICBsZXQgc291cmNlO1xyXG5cclxuICAgICAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc291cmNlID0gJCh0aGlzKS5kYXRhKCd2aWRlb2lkJyk7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBnZXRZb3V0dWJlRGF0YShzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBmaW5hbFVybCA9IHJlcy5pdGVtc1swXS5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaC51cmw7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSByZXMuaXRlbXNbMF0uc25pcHBldC50aXRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNoaWxkcmVuKCdpbWcnKS5hdHRyKCdzcmMnLCBmaW5hbFVybCk7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNoaWxkcmVuKCcucGxheWxpc3QtdGl0bGUnKS50ZXh0KHRpdGxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vLERhdGEuZGVmYXVsdEVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKipHZXQgWW91dHViZSBQbGF5bGlzdCBUaHVtYm5haWxzICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFlvdXR1YmVEYXRhKHBsYXlsaXN0SWQpIHtcclxuICAgICAgICByZXR1cm4gRGF0YS5nZXRKc29uKHsgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdHM/cGFydD1zbmlwcGV0JmlkPScgKyBwbGF5bGlzdElkICsgJyZrZXk9QUl6YVN5Q1dIODdUbTgtV2NNQk5YaTdOMVFvSy1BWVpSM21obVI4JyB9KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdFNreXBlKCkge1xyXG4gICAgLy8gc2t5cGUgb24gZGVtYW5kIGluc3RlYWQgb2Ygb24gbG9hZFxyXG4gICAgbGV0IGlzU2t5cGVMb2FkZWQgPSBmYWxzZTtcclxuICAgIGxldCBpc0F0dGVtcHRpbmdDYWxsID0gZmFsc2U7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2t5cGUtY2FsbCcsIGxvYWRTa3lwZSk7XHJcbiAgICBmdW5jdGlvbiBsb2FkU2t5cGUoZXYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIFNreXBlV2ViQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgJiYgIWlzU2t5cGVMb2FkZWQpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGVyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgZmlsZXJlZi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIGZpbGVyZWYuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9zd2MuY2RuLnNreXBlLmNvbS9zZGsvdjEvc2RrLm1pbi5qcycpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKGZpbGVyZWYpO1xyXG5cclxuICAgICAgICAgICAgaXNTa3lwZUxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzQXR0ZW1wdGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgaXNBdHRlbXB0aW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGF0dGVtcHRDYWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGF0dGVtcHRDYWxsKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgU2t5cGVXZWJDb250cm9sID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGF0dGVtcHRDYWxsLCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzQXR0ZW1wdGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgU2t5cGVXZWJDb250cm9sLlNESy5DaGF0LnN0YXJ0Q2hhdCh7IENvbnZlcnNhdGlvblR5cGU6ICdwZXJzb24nLCBDb252ZXJzYXRpb25JZDogJ2xpdmU6aW5mb184ODI5MjInIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5pdCBmdW5jdGlvbnNcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdHJlZUl0ZW1zU2xpZGUoKTtcclxuICAgIHJlYWRNb3JlKCk7XHJcbiAgICBpbml0U2t5cGUoKTtcclxuICAgIC8vTWV0YVRhZ3MucG9wdWxhdGVLZXlXb3JkcygnaW5wdXRbbmFtZT1TRU9LZXl3b3JkXScpO1xyXG4gICAgLy9NZXRhVGFncy5wb3B1bGF0ZURlc2NyaXB0aW9ucygnaW5wdXRbbmFtZT1TRU9EZXNjcmlwdGlvbl0nKTtcclxuICAgIGxvYWRNdWx0aXBsZVBsYXlsaXN0c0NvbnRlbnQoKTtcclxuICAgIGxvYWRWaWRlb0J5SWQoKTtcclxuICAgIGxvYWRWaWRlb1NvdXJjZSgpO1xyXG5cclxuICAgIC8vIGxvYWQgd2lkZ2V0cyBsb2dpY1xyXG4gICAgaW5pdENhcm91c2VsKCk7XHJcbiAgICBkb2N1bWVudGF0aW9uTW9kdWxlKCk7XHJcbiAgICBibG9nV2lkZ2V0KCk7XHJcbiAgICBmb3J1bVdpZGdldCgpO1xyXG4gICAgYWxsTmV3c1dpZGdldCgpO1xyXG4gICAgbGljZW5zZVdpZGdldCgpO1xyXG4gICAgc3Vic2NyaXB0aW9uV2lkZ2V0KCk7XHJcbiAgICBjb250YWN0Rm9ybVdpZGdldCgpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2luaXRDYXJvdXNlbCcpO1xyXG59KTtcclxuJCh3aW5kb3cpLmxvYWQocHJldHR5UHJpbnRJbml0KCkpO1xyXG53aW5kb3cuRGF0YSA9IERhdGE7IiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vY29tbW9uL2RhdGEuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpY2Vuc2VXaWRnZXQoKSB7XHJcbiAgICBpZiAoJCgnLmdlbmVyYXRlLWxpY2Vuc2UtZm9ybScpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLmdlbmVyYXRlLWxpY2Vuc2UtZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgbGV0ICRub3RpZmllciA9ICQoZXYudGFyZ2V0KS5maW5kKCcubm90aWZpZXInKTtcclxuICAgICAgICAkbm90aWZpZXIudGV4dCgnJyk7XHJcblxyXG4gICAgICAgIERhdGEucG9zdEZvcm0oeyB1cmw6ICcvd2lkZ2V0L2xpY2Vuc2VnZW5lcmF0aW9uL2luZGV4JywgZm9ybURhdGEgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZCgnbGljZW5zZS5saWMnLCByZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAkbm90aWZpZXIudGV4dChyZXMucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkb3dubG9hZChmaWxlbmFtZSwgdGV4dCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVuYW1lKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xpY2soKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21tb24vbG9hZGVyLmpzJztcclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXRhU291cmNlKGRhdGFTb3VyY2UpIHtcclxuICAgIGxldCB0eXBlID0gZGF0YVNvdXJjZS50eXBlO1xyXG4gICAgbGV0IHNvdXJjZVVybCA9IGRhdGFTb3VyY2UudXJsO1xyXG4gICAgbGV0IGRlZmF1bHRGaWx0ZXJzID0gZGF0YVNvdXJjZS5kZWZhdWx0RmlsdGVycyB8fCBbXTtcclxuICAgIGxldCBjYWNoZWREYXRhID0gW107XHJcblxyXG4gICAgbGV0IGNsaWVudEZpbHRlcnMgPSB7XHJcbiAgICAgICAgMTogZnVuY3Rpb24gKGl0ZW0sIHByb3BlcnR5LCB2YWx1ZSkgeyAvLyBudW1iZXIgZXF1YWxcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bcHJvcGVydHldID09PSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIDI6IGZ1bmN0aW9uIChpdGVtLCBwcm9wZXJ0eSwgdmFsdWUpIHsgLy8gbnVtYmVyIGxvd2VyIHRoYW4gXHJcbiAgICAgICAgICAgIHJldHVybiAraXRlbVtwcm9wZXJ0eV0gPCArdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICA0OiBmdW5jdGlvbiAoaXRlbSwgcHJvcGVydHksIHZhbHVlKSB7IC8vIG51bWJlciBncmVhdGVyIHRoYW5cclxuICAgICAgICAgICAgcmV0dXJuICtpdGVtW3Byb3BlcnR5XSA+ICt2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc6IGZ1bmN0aW9uIChpdGVtLCBwcm9wZXJ0eSwgdmFsdWUpIHsgLy9zdHJpbmcgY29udGFpbnMgcGF0dGVyblxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbVtwcm9wZXJ0eV0gJiYgaXRlbVtwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldERhdGEoeyBmaWx0ZXJzLCBwYWdpbmcsIHNvcnRpbmcsIGlzRm9yY2VkIH0pIHtcclxuICAgICAgICBsZXQgcmVxdWVzdDtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3NlcnZlcicpIHtcclxuICAgICAgICAgICAgLy8gcGFzcyB0aGUgZmlsdGVycyB0byBzZXJ2ZXIgYW5kIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICByZXF1ZXN0ID0gbG9hZERhdGEoeyBmaWx0ZXJzLCBwYWdpbmcsIHNvcnRpbmcgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzRm9yY2VkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXNzIHRoZSBmaWx0ZXJzIHRvIHNlcnZlcjtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSBsb2FkRGF0YSh7fSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlZERhdGEgPSByZXMuaXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNhY2hlZCBkYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGNhY2hlZCBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgaXRlbXM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2FjaGVkRGF0YSkpIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRoZW4gYXBwbHkgY2xpZW50IHNpZGUgZmlsdGVyc1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZpbHRlcihyZXMuaXRlbXMsIGZpbHRlcnMpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc29ydChyZXN1bHQsIHNvcnRpbmcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UGFnZUV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhZ2luZy5zaXplICE9PSAnYWxsJyAmJiByZXMuaXRlbXMubGVuZ3RoID4gcGFnaW5nLnNpemUgJiYgcGFnaW5nLnBhZ2UgKiBwYWdpbmcuc2l6ZSA8IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2VFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBhZ2UocmVzdWx0LCBwYWdpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHJlcy5zdWNjZXNzLCBjb3VudCwgaXRlbXM6IHJlc3VsdCwgbmV4dFBhZ2VFeGlzdHMgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gcHJvbWlzZSB3aXRoIHRoZSBkYXRhXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZERhdGEoeyBmaWx0ZXJzLCBwYWdpbmcsIHNvcnRpbmcgfSkge1xyXG4gICAgICAgIExvYWRlci5zaG93KCcjZmZmJyk7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB7IGZpbHRlcnM6IFtdIH07XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzZXJ2ZXInKSB7XHJcbiAgICAgICAgICAgIGJvZHkuZmlsdGVycyA9IGZpbHRlcnMgfHwgW107XHJcbiAgICAgICAgICAgIGlmIChwYWdpbmcuc2l6ZSAhPT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuc2tpcCA9IChwYWdpbmcucGFnZSAtIDEpICogcGFnaW5nLnNpemU7XHJcbiAgICAgICAgICAgICAgICBib2R5LnRha2UgPSBwYWdpbmcuc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRGaWx0ZXJzICYmIGRlZmF1bHRGaWx0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuZmlsdGVycyA9IGJvZHkuZmlsdGVycy5jb25jYXQoZGVmYXVsdEZpbHRlcnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc29ydGluZyAmJiBzb3J0aW5nLmJ5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnNvcnRCeSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHNvcnRpbmcuYnksXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHNvcnRpbmcub3JkZXJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBEYXRhLnBvc3RKc29uKHsgdXJsOiBzb3VyY2VVcmwsIGRhdGE6IGJvZHkgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xpZW50IHNpZGUgbWV0aG9kXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXIoaXRlbXMsIGZpbHRlcnMpIHtcclxuICAgICAgICBmaWx0ZXJzID0gKGZpbHRlcnMgfHwgW10pLmNvbmNhdChkZWZhdWx0RmlsdGVycyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGl0ZW1zO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbHRlcnNbaV0udmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IGZpbHRlcnNbaV0udmFsdWUgPT09IG51bGwgfHwgIWNsaWVudEZpbHRlcnNbZmlsdGVyc1tpXS5jb21wYXJpc29uXSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBjbGllbnRGaWx0ZXJzW2ZpbHRlcnNbaV0uY29tcGFyaXNvbl0oaXRlbSwgZmlsdGVyc1tpXS5wcm9wZXJ0eU5hbWUsIGZpbHRlcnNbaV0udmFsdWUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc29ydChpdGVtcywgc29ydGluZykge1xyXG4gICAgICAgIGlmICghc29ydGluZyB8fCAhc29ydGluZy5ieSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gMTtcclxuICAgICAgICBpZiAoK3NvcnRpbmcub3JkZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IGFbc29ydGluZy5ieV0gfHwgJyc7XHJcbiAgICAgICAgICAgIGxldCByaWdodCA9IGJbc29ydGluZy5ieV0gfHwgJyc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGxlZnQgPiByaWdodCA/IDEgOiBsZWZ0IDwgcmlnaHQgPyAtMSA6IDApICogZGlyZWN0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2UoaXRlbXMsIHBhZ2luZykge1xyXG4gICAgICAgIGlmIChwYWdpbmcuc2l6ZSA9PT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gKHBhZ2luZy5wYWdlIC0gMSkgKiBwYWdpbmcuc2l6ZTtcclxuICAgICAgICBsZXQgZW5kID0gc3RhcnQgKyArcGFnaW5nLnNpemU7XHJcbiAgICAgICAgaWYgKGVuZCA+IGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbmQgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEZpbHRlcnMoZmlsdGVycywgY2xlYXIpIHtcclxuICAgICAgICBpZiAoZmlsdGVycykge1xyXG4gICAgICAgICAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJzID0gZmlsdGVycztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJzID0gZGVmYXVsdEZpbHRlcnMuY29uY2F0KGZpbHRlcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVmYXVsdEZpbHRlcnMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29uZmlnKGRhdGFTb3VyY2UpIHtcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB0eXBlID0gZGF0YVNvdXJjZS50eXBlIHx8IHR5cGU7XHJcbiAgICAgICAgICAgIHNvdXJjZVVybCA9IGRhdGFTb3VyY2UudXJsIHx8IHNvdXJjZVVybDtcclxuICAgICAgICAgICAgZGVmYXVsdEZpbHRlcnMgPSBkYXRhU291cmNlLmRlZmF1bHRGaWx0ZXJzIHx8IGRlZmF1bHRGaWx0ZXJzIHx8IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldERhdGEsXHJcbiAgICAgICAgdXBkYXRlRGVmYXVsdEZpbHRlcnMsXHJcbiAgICAgICAgdXBkYXRlQ29uZmlnXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IERhdGFTb3VyY2UgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgUGFnZXIgfSBmcm9tICcuL3BhZ2VyLmpzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YS1zb3VyY2UuanMnO1xyXG5pbXBvcnQgeyBIYW5kbGViYXJzIH0gZnJvbSAnLi4vY29tbW9uL2hhbmRsZWJhcnMuanMnO1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gX0dyaWQoeyB3cmFwcGVySWQsIHR5cGUsIHNvdXJjZUNvbmZpZywgcGFnZXJDb25maWcsIGN1c3RvbUFjdGlvbnMsIGZpZWxkcywgbmVzdGluZ1Byb3BlcnR5LCBjZWxsV2lkdGgsIGhhbmRsZWJhcnNUZW1wbGF0ZSwgc2VsZWN0QWxsQnV0dG9uIH0pIHtcclxuICAgIGNvbnN0ICR3cmFwcGVyID0gJCh3cmFwcGVySWQpO1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIHdyYXBwZXJJZCxcclxuICAgICAgICBjZWxsV2lkdGgsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBjdXN0b21BY3Rpb25zOiBjdXN0b21BY3Rpb25zIHx8IFtdLFxyXG4gICAgICAgIGZpZWxkczogZmllbGRzIHx8IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2dyaWQnKSB7XHJcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ2dyaWQtdmlldycpO1xyXG4gICAgICAgIGNvbmZpZy5pc0dyaWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYW5kbGViYXJzVGVtcGxhdGUpIHtcclxuICAgICAgICBjb25maWcudXNpbmdIYW5kbGViYXJzID0gdHJ1ZTtcclxuICAgICAgICBjb25maWcudGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoaGFuZGxlYmFyc1RlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCAkaGVhZGVyUm93ID0gJCgnPGRpdj48L2Rpdj4nLCB7IGNsYXNzOiAnY29udGFpbmVyLWZsdWlkIGdyaWQtaGVhZGVyJyB9KTtcclxuICAgIGNvbnN0ICRib2R5Um93ID0gJCgnPGRpdj48L2Rpdj4nLCB7IGNsYXNzOiAnY29udGFpbmVyLWZsdWlkIGdyaWQtYm9keScgfSk7XHJcbiAgICBjb25zdCAkcGFnZXJSb3cgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdjb250YWluZXItZmx1aWQgZ3JpZC1wYWdlcicgfSk7XHJcbiAgICByZW5kZXIoKTtcclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2Uoc291cmNlQ29uZmlnKTtcclxuICAgIHBhZ2VyQ29uZmlnID0gcGFnZXJDb25maWcgfHwgeyBwYWdlU2l6ZXM6IFsxLCAyLCA1LCAxMCwgMjAsIDUwLCAxMDAsICdhbGwnXSwgcGFnZVJlYWRPbmx5OiB0cnVlLCBkZWZhdWx0OiAyMCB9O1xyXG4gICAgY29uc3QgcGFnZXIgPSBuZXcgUGFnZXIoJHBhZ2VyUm93LCBwYWdlckNvbmZpZywgb25QYWdlQ2hhbmdlKTtcclxuICAgIGNvbnN0IHBhZ2luZyA9IHsgcGFnZTogMSwgc2l6ZTogcGFnZXJDb25maWcuZGVmYXVsdCB8fCAxMCwgZGVmYXVsdDogcGFnZXJDb25maWcuZGVmYXVsdCB9O1xyXG4gICAgY29uc3Qgc29ydGluZyA9IHt9O1xyXG4gICAgY29uc3QgZmlsdGVycyA9IFtdO1xyXG4gICAgY29uc3QgZGF0ZUZvcm1hdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICAkaGVhZGVyUm93LmFwcGVuZChjcmVhdGVCdXR0b25zKCkpLmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICAgICAgJHdyYXBwZXIuYXBwZW5kKCRoZWFkZXJSb3cpLmFwcGVuZCgkYm9keVJvdykuYXBwZW5kKCRwYWdlclJvdyk7XHJcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ3NpdGV0cmlrcy1ncmlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0YSBsb2FkaW5nXHJcbiAgICBmdW5jdGlvbiBsb2FkRGF0YShpc0ZvcmNlZCkge1xyXG4gICAgICAgICRib2R5Um93Lmh0bWwoJycpO1xyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLmdldERhdGEoe1xyXG4gICAgICAgICAgICBwYWdpbmcsXHJcbiAgICAgICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgICAgIHNvcnRpbmcsXHJcbiAgICAgICAgICAgIGlzRm9yY2VkXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFnaW5nLnNpemUgIT09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlci5zZXRQYWdlc0NvdW50KE1hdGguY2VpbChyZXMuY291bnQgLyBwYWdpbmcuc2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkYm9keVJvdy5odG1sKGJ1aWxkQm9keShyZXMuaXRlbXMpKTtcclxuICAgICAgICAgICAgcGFnZXIudW5sb2NrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXZlbnQgaGFuZGxlcnNcclxuICAgIGZ1bmN0aW9uIG9uUGFnZUNoYW5nZShwYWdlLCBzaXplKSB7XHJcbiAgICAgICAgcGFnaW5nLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHBhZ2luZy5zaXplID0gc2l6ZTtcclxuXHJcbiAgICAgICAgbG9hZERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblNvcnRIYW5kbGVyKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIHNvcnRpbmcuYnkgPSAkdGFyZ2V0LmF0dHIoJ2RhdGEtcHJvcGVydHknKTtcclxuICAgICAgICBzb3J0aW5nLm9yZGVyID0gJHRhcmdldC5hdHRyKCdkYXRhLXNvcnQnKSA9PT0gJ2FzYycgPyAxIDogMDtcclxuICAgICAgICBwYWdpbmcucGFnZSA9IDE7XHJcbiAgICAgICAgcGFnZXIuc2V0Q3VycmVudFBhZ2UoMSk7XHJcblxyXG4gICAgICAgICRoZWFkZXJSb3cuZmluZCgnYnV0dG9uW2RhdGEtc29ydD1cImRlc2NcIl0nKS5hdHRyKCdkYXRhLXNvcnQnLCAnYXNjJyk7XHJcbiAgICAgICAgJGhlYWRlclJvdy5maW5kKCdzcGFuLmdseXBoaWNvbi1zb3J0LWJ5LWF0dHJpYnV0ZXMtYWx0JylcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdnbHlwaGljb24tc29ydC1ieS1hdHRyaWJ1dGVzLWFsdCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlcycpO1xyXG5cclxuICAgICAgICBpZiAoc29ydGluZy5vcmRlciA9PT0gMSkge1xyXG4gICAgICAgICAgICAkdGFyZ2V0LmF0dHIoJ2RhdGEtc29ydCcsICdkZXNjJyk7XHJcbiAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oJ3NwYW4uZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlcycpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1zb3J0LWJ5LWF0dHJpYnV0ZXMnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdnbHlwaGljb24tc29ydC1ieS1hdHRyaWJ1dGVzLWFsdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93Q2hpbGRyZW4oZXYpIHtcclxuICAgICAgICBsZXQgJHRhcmdldCA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0ICRpY29uID0gJHRhcmdldC5jaGlsZHJlbignLmdseXBoaWNvbicpO1xyXG4gICAgICAgIGlmICgkaWNvbi5oYXNDbGFzcygnZ2x5cGhpY29uLXBsdXMnKSkge1xyXG4gICAgICAgICAgICAkaWNvbi5yZW1vdmVDbGFzcygnZ2x5cGhpY29uLXBsdXMnKS5hZGRDbGFzcygnZ2x5cGhpY29uLW1pbnVzJyk7XHJcbiAgICAgICAgICAgICR0YXJnZXQucGFyZW50cygnLmdyaWQtaXRlbScpLmZpcnN0KCkuY2hpbGRyZW4oJy5uZXN0ZWQtZ3JpZC1pdGVtcycpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaWNvbi5yZW1vdmVDbGFzcygnZ2x5cGhpY29uLW1pbnVzJykuYWRkQ2xhc3MoJ2dseXBoaWNvbi1wbHVzJyk7XHJcbiAgICAgICAgICAgICR0YXJnZXQucGFyZW50cygnLmdyaWQtaXRlbScpLmZpcnN0KCkuY2hpbGRyZW4oJy5uZXN0ZWQtZ3JpZC1pdGVtcycpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VhcmNoT25FbnRlcihldikge1xyXG4gICAgICAgIGlmIChldi5rZXlDb2RlICE9PSAxMykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJsdXIoKTtcclxuICAgICAgICBvblNlYXJjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU2VhcmNoKGV2KSB7XHJcbiAgICAgICAgZmlsdGVycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHBhZ2luZy5wYWdlID0gMTtcclxuICAgICAgICBwYWdlci5zZXRDdXJyZW50UGFnZSgxKTtcclxuXHJcbiAgICAgICAgJGhlYWRlclJvdy5maW5kKCcuc2VhcmNoLWZpZWxkJykuZWFjaCgoXywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvcGVydHknKTtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBhcmlzb247XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJpc29uID0gNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2FkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ3VzdG9tQWN0aW9uKGV2KSB7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjb25maWcuY3VzdG9tQWN0aW9uc1trZXldO1xyXG4gICAgICAgIGlmICghYWN0aW9uKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IHt9O1xyXG4gICAgICAgIGlmIChhY3Rpb24uZXh0cmFGaWVsZHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24uZXh0cmFGaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25bYWN0aW9uLmV4dHJhRmllbGRzW2ldICsgJ3MnXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29sbGVjdGlvbk5hbWUgPSBhY3Rpb24uY29sbGVjdGlvbk5hbWUgfHwgJ2lkcyc7XHJcbiAgICAgICAgY29sbGVjdGlvbltjb2xsZWN0aW9uTmFtZV0gPSBbXTtcclxuICAgICAgICAkYm9keVJvdy5maW5kKCdpbnB1dC5zdC1ncmlkLWNoZWNrYm94W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChfLCBlbCkge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uW2NvbGxlY3Rpb25OYW1lXS5wdXNoKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5leHRyYUZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24uZXh0cmFGaWVsZHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uW2FjdGlvbi5leHRyYUZpZWxkc1tpXSArICdzJ10ucHVzaChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGFjdGlvbi5leHRyYUZpZWxkc1tpXS50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFjb2xsZWN0aW9uW2NvbGxlY3Rpb25OYW1lXS5sZW5ndGggfHwgIWFjdGlvbi5wb3N0VXJsKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uY2FsbGJhY2sgJiYge30udG9TdHJpbmcuY2FsbChhY3Rpb24uY2FsbGJhY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9Mb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiBhY3Rpb24ucG9zdFVybCwgZGF0YTogY29sbGVjdGlvbiB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvYWREYXRhKHRydWUpO1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvL0xvYWRlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmNhbGxiYWNrICYmIHt9LnRvU3RyaW5nLmNhbGwoYWN0aW9uLmNhbGxiYWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLmNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1aSBidWlsZGluZ1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgICAgIGxldCAkZmlsdGVySGVhZGVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAncm93IGZpcnN0LWhlYWRlci1yb3cnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCAkdGl0bGVIZWFkZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdyb3cgdGl0bGUtaGVhZGVyJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5maWVsZHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0ICRjZWxsID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogY29uZmlnLmlzR3JpZCA/ICdncmlkLWZpbHRlcicgOiAnY29sLXhzLScgKyBjb25maWcuZmllbGRzW2ldLnNpemUgfHwgMlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZmllbGRzW2ldLnNvcnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkYXNjZW5kaW5nSWNvbiA9ICQoJzxzcGFuPjwvc3Bhbj4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlcydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCAkZmlsdGVyQnV0dG9uID0gJCgnPGJ1dHRvbj48L2J1dHRvbj4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4tc29ydCBidG4gbm8tc29ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtcHJvcGVydHknOiBjb25maWcuZmllbGRzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtc29ydCc6ICdhc2MnXHJcbiAgICAgICAgICAgICAgICB9KS5vbignY2xpY2snLCBvblNvcnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZmlsdGVyQnV0dG9uLmFwcGVuZCgkYXNjZW5kaW5nSWNvbikuYXBwZW5kVG8oJGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmZpZWxkc1tpXS5maWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICQoJzxpbnB1dC8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBieSAnICsgY29uZmlnLmZpZWxkc1tpXS50aXRsZSB8fCBjb25maWcuZmllbGRzW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtcHJvcGVydHknOiBjb25maWcuZmllbGRzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdHlwZSc6IGNvbmZpZy5maWVsZHNbaV0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaC1maWVsZCdcclxuICAgICAgICAgICAgICAgIH0pLmFwcGVuZFRvKCRjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuaXNHcmlkIHx8ICRjZWxsLmNoaWxkcmVuKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkY2VsbC5hcHBlbmRUbygkZmlsdGVySGVhZGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuaXNHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGNvbmZpZy5maWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyA/ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzdC1zZWxlY3QtYWxsLWNoZWNrYm94XCIgLz4nIDpcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuZmllbGRzW2ldLmhlYWRlclRlbXBsYXRlID8gcmVwbGFjZUFsbChjb25maWcuZmllbGRzW2ldLmhlYWRlclRlbXBsYXRlLCAnI2l0ZW0jJywgY29uZmlnLmZpZWxkc1tpXS50aXRsZSB8fCAnJykgOiBjb25maWcuZmllbGRzW2ldLnRpdGxlIHx8ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBjb25maWcuaXNHcmlkID8gJ2dyaWQtZmlsdGVyJyA6ICdjb2wteHMtJyArIGNvbmZpZy5maWVsZHNbaV0uc2l6ZSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIH0pLmFwcGVuZFRvKCR0aXRsZUhlYWRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vYXR0YWNoaW5nIHNlYXJjaCBidXR0b25cclxuICAgICAgICBsZXQgJGxhc3RTZWFyY2hDZWxsID0gJGZpbHRlckhlYWRlci5maW5kKCcuc2VhcmNoLWZpZWxkJykubGFzdCgpLnBhcmVudCgpO1xyXG4gICAgICAgIGlmICgkbGFzdFNlYXJjaENlbGwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtaWNvbi13cmFwcGVyJ1xyXG4gICAgICAgICAgICB9KS5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgc3JjOiAnL2ltYWdlcy9zZWFyY2gtaWNvbi5zdmcnXHJcbiAgICAgICAgICAgIH0pKS5vbignY2xpY2snLCBvblNlYXJjaCkuYXBwZW5kVG8oJGxhc3RTZWFyY2hDZWxsKTtcclxuICAgICAgICAgICAgJGxhc3RTZWFyY2hDZWxsLmFkZENsYXNzKCdzZWFyaC1iYWNrZ3JvdW5kIGxhc3QnKS5wcmV2QWxsKCkuYWRkQ2xhc3MoJ3NlYXJoLWJhY2tncm91bmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RBbGxCdXR0b24gJiYgY29uZmlnLmlzR3JpZCkge1xyXG4gICAgICAgICAgICAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnZ3JpZC1maWx0ZXIgc2VhcmgtYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgfSkuY3NzKCd3aWR0aCcsICdhdXRvJykuYXBwZW5kKCQoJzxhPjwvYT4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2J0bicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnU2VsZWN0IEFsbCdcclxuICAgICAgICAgICAgfSkub24oJ2NsaWNrJywgc2VsZWN0QWxsUm93cykpLnByZXBlbmRUbygkZmlsdGVySGVhZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbJGZpbHRlckhlYWRlciwgJHRpdGxlSGVhZGVyXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RBbGxSb3dzKGV2KSB7XHJcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICR0YXJnZXQuaXMoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpID8gJHRhcmdldFswXS5jaGVja2VkIDogdHJ1ZTtcclxuICAgICAgICAkYm9keVJvdy5maW5kKCcuc3QtZ3JpZC1jaGVja2JveCcpLmVhY2goZnVuY3Rpb24gKF8sIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9ucygpIHtcclxuICAgICAgICBsZXQgJGJ1dHRvbnNSb3cgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdyb3cgYnV0dG9ucy1oZWFkZXInIH0pO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbmZpZy5jdXN0b21BY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmN1c3RvbUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgJGJ0biA9ICQoJzxhPjwvYT4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2J0biBidG4tZ3JpZCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmN1c3RvbUFjdGlvbnNba2V5XS5pY29uT25seSkge1xyXG4gICAgICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcygnaWNvbi1vbmx5Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuLnRleHQoY29uZmlnLmN1c3RvbUFjdGlvbnNba2V5XS50aXRsZSB8fCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmN1c3RvbUFjdGlvbnNba2V5XS5yZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgICAgICAgJGJ0bi5hdHRyKCdocmVmJywgY29uZmlnLmN1c3RvbUFjdGlvbnNba2V5XS5yZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuLmF0dHIoJ2RhdGEtYWN0aW9uJywga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBvbkN1c3RvbUFjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY3VzdG9tQWN0aW9uc1trZXldLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBjb25maWcuY3VzdG9tQWN0aW9uc1trZXldLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkYnRuLmF0dHIoYXR0cmlidXRlLCBjb25maWcuY3VzdG9tQWN0aW9uc1trZXldLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY3VzdG9tQWN0aW9uc1trZXldLmNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuLmFkZENsYXNzKGNvbmZpZy5jdXN0b21BY3Rpb25zW2tleV0uY2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbmZpZy5jdXN0b21BY3Rpb25zW2tleV0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPHNwYW4+PC9zcGFuPicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNzcygnY29sb3InLCAnbGltZScpLnByZXBlbmRUbygkYnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgICQoJzxzcGFuPjwvc3Bhbj4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1vaydcclxuICAgICAgICAgICAgICAgICAgICB9KS5jc3MoJ2NvbG9yJywgJ3JlZCcpLnByZXBlbmRUbygkYnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rhbmdlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPHNwYW4+PC9zcGFuPicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSdcclxuICAgICAgICAgICAgICAgICAgICB9KS5jc3MoJ2NvbG9yJywgJ3JlZCcpLnByZXBlbmRUbygkYnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPHNwYW4+PC9zcGFuPicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkucHJlcGVuZFRvKCRidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoJ2J0bi1ncmlkJykucmVtb3ZlQ2xhc3MoJ2J0bicpLmFkZENsYXNzKCdidG4tZ3JpZC1hZGQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkYnRuLmFwcGVuZFRvKCRidXR0b25zUm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAkYnV0dG9uc1JvdztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZEJvZHkoaXRlbXMpIHtcclxuICAgICAgICBsZXQgcm93cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0ICRyb3c7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuaXNHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnVzaW5nSGFuZGxlYmFycykge1xyXG4gICAgICAgICAgICAgICAgICAgICRyb3cgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdncmlkLWl0ZW0gZ3JpZC1jZWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogY29uZmlnLnRlbXBsYXRlKGl0ZW1zW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkcm93ID0gY3JlYXRlSXRlbVJvdyhpdGVtc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5jZWxsV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcm93LmNzcygnd2lkdGgnLCBjb25maWcuY2VsbFdpZHRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRyb3cgPSBjcmVhdGVJdGVtUm93KGl0ZW1zW2ldKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmVzdGluZ1Byb3BlcnR5ICYmIGl0ZW1zW2ldW25lc3RpbmdQcm9wZXJ0eV0gJiYgaXRlbXNbaV1bbmVzdGluZ1Byb3BlcnR5XS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdjb2wteHMtMTIgbmVzdGVkLWdyaWQtaXRlbXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoYnVpbGRCb2R5KGl0ZW1zW2ldW25lc3RpbmdQcm9wZXJ0eV0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJvd3MucHVzaCgkcm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW1Sb3coaXRlbSkge1xyXG4gICAgICAgIGxldCAkYm9keVJvdyA9ICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogYGdyaWQtaXRlbSAke2NvbmZpZy5pc0dyaWQgPyAnZ3JpZC1jZWxsJyA6ICdyb3cnfWBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcuZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5Db25maWcgPSBjb25maWcuZmllbGRzW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW1bY29sdW1uQ29uZmlnLm5hbWVdO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ckVuZCA9IGNvbHVtbkNvbmZpZy5uYW1lLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gaXRlbVtjb2x1bW5Db25maWcubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ckVuZF07XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaXRlbVtjb2x1bW5Db25maWcubmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0ckVuZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbkNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzdC1ncmlkLWNoZWNrYm94XCIgZGF0YS1pZD1cIiR7dmFsdWV9XCJgO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW5Db25maWcuZXh0cmFGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5Db25maWcuZXh0cmFGaWVsZHMubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYCBkYXRhLSR7Y29sdW1uQ29uZmlnLmV4dHJhRmllbGRzW2pdfT1cIiR7aXRlbVtjb2x1bW5Db25maWcuZXh0cmFGaWVsZHNbal1dfVwiYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBgLz5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbMF0gPT09ICdEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYXNwLm5ldCBmcmFtZXdvcmsgNC41LjIgd2VpcmQgZGF0YSBmb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gcGFyc2VJbnQoc3RyLnN1YnN0cig2LCBzdHIubGVuZ3RoIC0gMiAtIDYpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIGRhdGUgdG8gZm9ybWF0ZWQgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IG5ldyBEYXRlKHN0cikudG9Mb2NhbGVTdHJpbmcoJ2VuJywgZGF0ZUZvcm1hdE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gY29sdW1uQ29uZmlnLnNvdXJjZSA/IGNvbHVtbkNvbmZpZy5zb3VyY2UucmVwbGFjZSgnI2l0ZW0jJywgdmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbkNvbmZpZy5jb250ZW50VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnVpbGQgaW1hZ2UgZnJvbSB0ZW1wbGF0ZSB1c2luZyB0aGUgc291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gYDxpbWcgc3JjPVwiJHtzcmN9XCIgY2xhc3M9XCJkaXNwbGF5LWltYWdlXCIgLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm9vbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb2x1bW5Db25maWcudHJ1ZVRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb2x1bW5Db25maWcuZmFsc2VUZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbXBhcmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW5Db25maWcuY29tcGFyZXIgJiYge30udG9TdHJpbmcuY2FsbChjb2x1bW5Db25maWcuY29tcGFyZXIpID09PSAnW29iamVjdCBGdW5jdGlvbl0nICYmIGNvbHVtbkNvbmZpZy5jb21wYXJlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGNvbHVtbkNvbmZpZy50cnVlVGVtcGxhdGUgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGNvbHVtbkNvbmZpZy5mYWxzZVRlbXBsYXRlIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGlzdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBsaXN0LmpvaW4oJzsgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGxpc3QgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbHVtbkNvbmZpZy5jb250ZW50VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSByZXBsYWNlQWxsKGNvbHVtbkNvbmZpZy5jb250ZW50VGVtcGxhdGUsICcjaXRlbSMnLCBjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29sdW1uQ29uZmlnLmV4dHJhRmllbGRzICYmIGNvbHVtbkNvbmZpZy5leHRyYUZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvbmZpZy5leHRyYUZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSByZXBsYWNlQWxsKGNvbnRlbnQsIGAjaXRlbSR7aX0jYCwgaXRlbVtjb2x1bW5Db25maWcuZXh0cmFGaWVsZHNbaV1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkgPT09IDAgJiYgaXRlbVtuZXN0aW5nUHJvcGVydHldICYmIGl0ZW1bbmVzdGluZ1Byb3BlcnR5XS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gJzxidXR0b24gY2xhc3M9XCJidG4teHMgYnRuLWRlZmF1bHQgY2hpbGQtZXhwYW5kXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+JyArIGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJzxkaXY+PC9kaXY+Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6IGNvbmZpZy5pc0dyaWQgPyAnJyA6IGBjb2wteHMtJHtjb2x1bW5Db25maWcuc2l6ZSB8fCAyfWAsXHJcbiAgICAgICAgICAgICAgICBodG1sOiBjb250ZW50XHJcbiAgICAgICAgICAgIH0pLmFwcGVuZFRvKCRib2R5Um93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAkYm9keVJvdztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVDb25maWcoeyBmaWVsZHMsIGN1c3RvbUFjdGlvbnMsIHNvdXJjZUNvbmZpZywgcGFnZXJDb25maWcgfSkge1xyXG4gICAgICAgIGlmIChzb3VyY2VDb25maWcpIHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZS51cGRhdGVDb25maWcoc291cmNlQ29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYWdlckNvbmZpZykge1xyXG4gICAgICAgICAgICBwYWdlci51cGRhdGVDb25maWcocGFnZXJDb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlYnVpbGRIZWFkZXIgPSBmYWxzZTtcclxuICAgICAgICBpZiAoY3VzdG9tQWN0aW9ucykge1xyXG4gICAgICAgICAgICBjb25maWcuY3VzdG9tQWN0aW9ucyA9IGN1c3RvbUFjdGlvbnM7XHJcbiAgICAgICAgICAgIHJlYnVpbGRIZWFkZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgICBjb25maWcuZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICByZWJ1aWxkSGVhZGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZWJ1aWxkSGVhZGVyKSB7XHJcbiAgICAgICAgICAgICRoZWFkZXJSb3cuaHRtbCgnJykuYXBwZW5kKGNyZWF0ZUJ1dHRvbnMoKSkuYXBwZW5kKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgICAgICAgICAgcGFnaW5nLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBwYWdpbmcuc2l6ZSA9IHBhZ2VyLmRlZmF1bHQgfHwgMTA7XHJcbiAgICAgICAgICAgIHBhZ2VyLnNldFBhZ2VTaXplKHBhZ2luZy5zaXplKTtcclxuICAgICAgICAgICAgcGFnZXIuc2V0Q3VycmVudFBhZ2UocGFnaW5nLnBhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICAkaGVhZGVyUm93Lm9uKCdrZXlwcmVzcycsICcuc2VhcmNoLWZpZWxkJywgc2VhcmNoT25FbnRlcik7XHJcbiAgICAgICAgJGhlYWRlclJvdy5vbignY2xpY2snLCAnLnN0LXNlbGVjdC1hbGwtY2hlY2tib3gnLCBzZWxlY3RBbGxSb3dzKTtcclxuICAgICAgICAkYm9keVJvdy5vbignY2xpY2snLCAnLmNoaWxkLWV4cGFuZCcsIHNob3dDaGlsZHJlbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICAkaGVhZGVyUm93Lm9mZigna2V5cHJlc3MnLCAnLnNlYXJjaC1maWVsZCcsIHNlYXJjaE9uRW50ZXIpO1xyXG4gICAgICAgICRib2R5Um93Lm9mZignY2xpY2snLCAnLmNoaWxkLWV4cGFuZCcsIHNob3dDaGlsZHJlbik7XHJcbiAgICAgICAgJGhlYWRlclJvdy5vZmYoJ2NsaWNrJywgJy5zdC1zZWxlY3QtYWxsLWNoZWNrYm94Jywgc2VsZWN0QWxsUm93cyk7XHJcblxyXG4gICAgICAgIC8vZGF0YVNvdXJjZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgcGFnZXIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZDogZnVuY3Rpb24gKGlzRm9yY2VkKSB7IGxvYWREYXRhKGlzRm9yY2VkKTsgcmV0dXJuIHRoaXM7IH0sXHJcbiAgICAgICAgdXBkYXRlRGVmYXVsdEZpbHRlcnM6IGZ1bmN0aW9uIChmaWx0ZXJzLCBjbGVhcikgeyBkYXRhU291cmNlLnVwZGF0ZURlZmF1bHRGaWx0ZXJzKGZpbHRlcnMsIGNsZWFyKTsgcmV0dXJuIHRoaXM7IH0sXHJcbiAgICAgICAgdXBkYXRlQ29uZmlnLFxyXG4gICAgICAgIGRpc3Bvc2VcclxuICAgIH07XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFRPRE86IG1vdmVcclxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUFsbChzdHIsIGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSk7XHJcbn1cclxuXHJcbndpbmRvdy5fR3JpZCA9IF9HcmlkO1xyXG5leHBvcnQgeyBfR3JpZCB9O1xyXG4iLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5qcyc7XHJcblxyXG4vKipcclxuICogTW9kdWxlIGZvciBoYW5kbGluZyBtdWx0aXBsZSBoYXNoIHVybHMgaW4gb25lIHBhZ2VcclxuICovXHJcbnZhciBIYXNoUm91dGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICBsZXQgaGFuZGxlcnMgPSB7fTtcclxuXHJcbiAgICBpbml0KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGluaXQsIGZhbHNlKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgb25oYXNoY2hhbmdlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICBpZiAoaGFzaCAmJiBoYXNoWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgaGFzaCA9IGhhc2guc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBoYXNoLnNwbGl0KCcmJykucmVkdWNlKChtYXAsIHgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHguc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlc1swXSAmJiB2YWx1ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgbWFwW3ZhbHVlcy5zcGxpY2UoMCwgMSlbMF1dID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG5ld0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRhW2tleV0gfHwgIW5ld0RhdGFba2V5XS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBkYXRhW2tleV1baW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gbmV3RGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hDaGFuZ2Uoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaENoYW5nZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhcmd1bWVudHMgZm9yIHRoZSBnaXZlbiB0eXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHR5cGVcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nPnxTdHJpbmd9IFtpdGVtc10gbmV3IGFyZ3VtZW50cywgbGVmdCBlbXB0eSB3aWxsIHJlbW92ZSB0aGUgdHlwZVxyXG4gICAgICogQHJldHVybnMge0hhc2hSb3V0ZXJ9IEhhc2hSb3V0ZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0KHR5cGUsIGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5zcGxpdCgnLycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZWRWYWx1ZXMgPSB7fTtcclxuICAgICAgICBjaGFuZ2VkVmFsdWVzW3R5cGVdID0gaXRlbXMgfHwgW107XHJcbiAgICAgICAgYnVpbGRVcmwoY2hhbmdlZFZhbHVlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyB0aGUgaGFzaCB1cmwgd2l0aCB0aGUgY2hhbmdlZCB2YWx1ZXNcclxuICAgICAqIEBwYXJhbSB7e1N0cmluZzogQXJyYXk8U3RyaW5nPn19IGNoYW5nZWRWYWx1ZXMgdmFsdWVzIHRvIHJlcGxhY2Uge3R5cGU6IHZhbHVlc31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYnVpbGRVcmwoY2hhbmdlZFZhbHVlcykge1xyXG4gICAgICAgIGxldCB1cmxzID0gW107XHJcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBtZXJnZV9vcHRpb25zKGRhdGEsIGNoYW5nZWRWYWx1ZXMgfHwge30pO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBuZXdEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdEYXRhW2tleV0gJiYgbmV3RGF0YVtrZXldLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdXJscy5wdXNoKGtleSArICcvJyArIG5ld0RhdGFba2V5XS5qb2luKCcvJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybHMubGVuZ3RoID8gdXJscy5qb2luKCcmJykgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1lcmdlcyB0d28gb2JqZWN0cywgb3ZlcnJpZGluZyB0aGUgZmlyc3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIGluaXRpYWwgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqMiBvYmplY3Qgd2l0aCBvcHRpb25zIHRvIG92ZXJyaWRlXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtZXJnZWQgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1lcmdlX29wdGlvbnMob2JqMSwgb2JqMikge1xyXG4gICAgICAgIHZhciBvYmozID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgYXR0cm5hbWUgaW4gb2JqMSkgeyBvYmozW2F0dHJuYW1lXSA9IG9iajFbYXR0cm5hbWVdOyB9XHJcbiAgICAgICAgZm9yICh2YXIgYXR0cm5hbWUgaW4gb2JqMikgeyBvYmozW2F0dHJuYW1lXSA9IG9iajJbYXR0cm5hbWVdOyB9XHJcbiAgICAgICAgcmV0dXJuIG9iajM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwYXRjaGVzIHRoZSBldmVudGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZVxyXG4gICAgICogQHBhcmFtIHthbnl9IHR5cGUgdHlwZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkaXNwYXRjaENoYW5nZSh0eXBlKSB7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVyc1t0eXBlXSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaGFuZGxlcnNbdHlwZV0pIHtcclxuICAgICAgICAgICAgaGFuZGxlcnNbdHlwZV1ba2V5XShkYXRhW3R5cGVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2hlcyBjaGFuZ2UgaGFubGRlciBmb3IgdGhlIGdpdmVuIHR5cFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgaGFuZGxlclxyXG4gICAgICogQHJldHVybnMge0hhc2hSb3V0ZXJ9IEhhc2hSb3V0ZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UodHlwZSwgaGFuZGxlciwgbmFtZSkge1xyXG4gICAgICAgIGlmICghdHlwZSB8fCAhaGFuZGxlciB8fCAhbmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXJhbWV0ZXJzIFwidHlwZVwiLCBcImhhbmRsZXJcIiBhbmQgXCJuYW1lXCIgYXJlIHJlcXVpcmVkIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVV0aWxzLmlzRnVuY3Rpb24oaGFuZGxlcikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUHJvdmlkZWQgaGFuZGxlciBmb3IgdHlwZSAke3R5cGV9IHdpdGggbmFtZSAke25hbWV9IGlzIG5vdCBhIGZ1bmN0aW9uIWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhbmRsZXJzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzW3R5cGVdID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGVyc1t0eXBlXVtuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2hlcyBjaGFuZ2UgaGFubGRlciBmb3IgdGhlIGdpdmVuIHR5cFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgaGFuZGxlclxyXG4gICAgICogQHJldHVybnMge0hhc2hSb3V0ZXJ9IEhhc2hSb3V0ZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gb2ZmQ2hhbmdlKHR5cGUsIG5hbWUpIHtcclxuICAgICAgICBpZiAoaGFuZGxlcnNbdHlwZV0pIHtcclxuICAgICAgICAgICAgZGVsZXRlIGhhbmRsZXJzW3R5cGVdW25hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gaGFzaCB1cmwgdmFsdWVzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB7YW55fSB0eXBlIHR5cGVcclxuICAgICAqIEByZXR1cm5zIHtBcnJheTxTdHJpbmc+fSB2YWx1ZXMgZm9yIHRoZSBnaXZlbiB0eXBlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldCh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbdHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXQsXHJcbiAgICAgICAgc2V0LFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIG9mZkNoYW5nZVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IEhhc2hSb3V0ZXIgfTtcclxuIiwiZnVuY3Rpb24gUGFnZXIoJGNvbnRhaW5lciwgcGFnZXIsIG9uUGFnZUNoYW5nZUhhbmRsZXIpIHtcclxuICAgIGxldCBzaXplcyA9IHBhZ2VyLnBhZ2VTaXplcyB8fCBbMTBdO1xyXG4gICAgbGV0IHBhZ2VTaXplID0gcGFnZXIuZGVmYXVsdCB8fCBzaXplc1swXTtcclxuICAgIGxldCBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICBsZXQgcGFnZXNDb3VudCA9IDE7XHJcbiAgICBsZXQgaXNMb2NrZWQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgJHBhZ2UgPSAkKCc8c3Bhbj48L3NwYW4+JywgeyB0ZXh0OiBjdXJyZW50UGFnZSwgY2xhc3M6ICdwYWdlQ29udHJvbCBwYWdlTnVtYmVyJyB9KTtcclxuICAgIGxldCAkcGFnZXNDb3VudCA9ICQoJzxzcGFuPjwvc3Bhbj4nLCB7IHRleHQ6IHBhZ2VzQ291bnQsIGNsYXNzOiAncGFnZUNvbnRyb2wgcGFnZXNDb3VudCcgfSk7XHJcbiAgICBsZXQgJHBhZ2VTaXplID0gJCgnPHNlbGVjdD48L3NlbGVjdD4nLCB7IGNsYXNzOiAncGFnZUNvbnRyb2wgcGFnZVNpemUnIH0pO1xyXG4gICAgbGV0ICRwcmV2UGFnZSA9ICQoJzxzcGFuPjwvc3Bhbj4nLCB7IGNsYXNzOiAncGFnZXItYXJyb3cgcHJldmlvdXNQYWdlQXJyb3cgJyArIChjdXJyZW50UGFnZSA+IDEgPyAnJyA6ICdidG4tZGlzYWJsZWQnKSB9KTtcclxuICAgIGxldCAkbmV4dFBhZ2UgPSAkKCc8c3Bhbj48L3NwYW4+JywgeyBjbGFzczogJ3BhZ2VyLWFycm93IG5leHRQYWdlQXJyb3cgJyArIChjdXJyZW50UGFnZSA8IHBhZ2VzQ291bnQgPyAnJyA6ICdidG4tZGlzYWJsZWQnKSB9KTtcclxuXHJcbiAgICBzaXplcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICQoJzxvcHRpb24+PC9vcHRpb24+Jywge1xyXG4gICAgICAgICAgICB0ZXh0OiBlbGVtZW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogZWxlbWVudCxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IFN0cmluZyhwYWdlU2l6ZSkgPT09IFN0cmluZyhlbGVtZW50KVxyXG4gICAgICAgIH0pLmFwcGVuZFRvKCRwYWdlU2l6ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkY29udGFpbmVyLmFwcGVuZCgkcGFnZVNpemUpXHJcbiAgICAgICAgLmFwcGVuZCgkcHJldlBhZ2UpXHJcbiAgICAgICAgLmFwcGVuZCgkcGFnZSlcclxuICAgICAgICAuYXBwZW5kKCRwYWdlc0NvdW50KVxyXG4gICAgICAgIC5hcHBlbmQoJG5leHRQYWdlKTtcclxuXHJcbiAgICBiaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICAkcGFnZVNpemUub24oJ2NoYW5nZScsIG9uU2l6ZUNoYW5nZSk7XHJcbiAgICAgICAgJHByZXZQYWdlLm9uKCdjbGljaycsIG9uUHJldmlvdXNQYWdlKTtcclxuICAgICAgICAkbmV4dFBhZ2Uub24oJ2NsaWNrJywgb25OZXh0UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgICAkcGFnZVNpemUub2ZmKCdjaGFuZ2UnLCBvblNpemVDaGFuZ2UpO1xyXG4gICAgICAgICRwcmV2UGFnZS5vZmYoJ2NsaWNrJywgb25QcmV2aW91c1BhZ2UpO1xyXG4gICAgICAgICRuZXh0UGFnZS5vZmYoJ2NsaWNrJywgb25OZXh0UGFnZSk7XHJcblxyXG4gICAgICAgICRjb250YWluZXIuY2hpbGRyZW4oKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBldmVudCBoYW5kbGVyc1xyXG4gICAgZnVuY3Rpb24gb25OZXh0UGFnZShldikge1xyXG4gICAgICAgIGlmICghaXNMb2NrZWQgJiYgY3VycmVudFBhZ2UgPCBwYWdlc0NvdW50KSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgIGxvY2soKTtcclxuICAgICAgICAgICAgb25QYWdlQ2hhbmdlSGFuZGxlcihjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblByZXZpb3VzUGFnZShldikge1xyXG4gICAgICAgIGlmICghaXNMb2NrZWQgJiYgY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgICAgICAgICAgIGxvY2soKTtcclxuICAgICAgICAgICAgb25QYWdlQ2hhbmdlSGFuZGxlcihjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblNpemVDaGFuZ2UoZXYpIHtcclxuICAgICAgICBpZiAoIWlzTG9ja2VkKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZSgkcGFnZVNpemUudmFsKCkpO1xyXG4gICAgICAgICAgICBsb2NrKCk7XHJcbiAgICAgICAgICAgIG9uUGFnZUNoYW5nZUhhbmRsZXIoY3VycmVudFBhZ2UsIHBhZ2VTaXplKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShwYWdlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1ldGhvZHNcclxuICAgIGZ1bmN0aW9uIHNldFBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICBpZiAoc2l6ZSAmJiBzaXplICE9PSBwYWdlU2l6ZSkge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgICRwYWdlU2l6ZS52YWwoc2l6ZSk7XHJcbiAgICAgICAgICAgIGlmIChzaXplID09PSAnYWxsJykge1xyXG4gICAgICAgICAgICAgICAgJHByZXZQYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRwYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRwYWdlc0NvdW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRuZXh0UGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcHJldlBhZ2Uuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJHBhZ2Uuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJHBhZ2VzQ291bnQuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJG5leHRQYWdlLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFBhZ2UocGFnZSkge1xyXG4gICAgICAgIGlmIChwYWdlICYmIHBhZ2UgIT09IGN1cnJlbnRQYWdlICYmIHBhZ2VTaXplICE9PSAnYWxsJykge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICRwYWdlLnRleHQocGFnZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUFycm93cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UGFnZXNDb3VudChwYWdlcykge1xyXG4gICAgICAgIGlmIChwYWdlcyAmJiBwYWdlU2l6ZSAhPT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgcGFnZXNDb3VudCA9IHBhZ2VzO1xyXG4gICAgICAgICAgICAkcGFnZXNDb3VudC50ZXh0KHBhZ2VzKTtcclxuICAgICAgICAgICAgdXBkYXRlQXJyb3dzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVBcnJvd3MoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAkcHJldlBhZ2UucmVtb3ZlQ2xhc3MoJ2J0bi1kaXNhYmxlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRwcmV2UGFnZS5hZGRDbGFzcygnYnRuLWRpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBwYWdlc0NvdW50KSB7XHJcbiAgICAgICAgICAgICRuZXh0UGFnZS5yZW1vdmVDbGFzcygnYnRuLWRpc2FibGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG5leHRQYWdlLmFkZENsYXNzKCdidG4tZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdW5sb2NrKCkge1xyXG4gICAgICAgIGlzTG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9jaygpIHtcclxuICAgICAgICBpc0xvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29uZmlnKHBhZ2VyKSB7XHJcbiAgICAgICAgc2l6ZXMgPSBwYWdlci5wYWdlU2l6ZXMgfHwgWzEwXTtcclxuICAgICAgICBwYWdlU2l6ZSA9IHBhZ2VyLmRlZmF1bHQgfHwgc2l6ZXNbMF07XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGFnZSgxKVxyXG4gICAgICAgICAgICAuc2V0UGFnZXNDb3VudCgxKVxyXG4gICAgICAgICAgICAudW5sb2NrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRDdXJyZW50UGFnZSxcclxuICAgICAgICBzZXRQYWdlc0NvdW50LFxyXG4gICAgICAgIHNldFBhZ2VTaXplLFxyXG4gICAgICAgIGxvY2ssXHJcbiAgICAgICAgdW5sb2NrLFxyXG4gICAgICAgIHVwZGF0ZUNvbmZpZyxcclxuICAgICAgICBkaXNwb3NlXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBQYWdlciB9O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgV2FybmluZ1dpbmRvdyA9IChmdW5jdGlvbiAobG9nZ2VyKSB7XHJcbiAgICBsb2dnZXIgPSBsb2dnZXIgfHwgY29uc29sZTtcclxuICAgIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSAnSXQgbG9va3MgbGlrZSB5b3UgaGF2ZSBiZWVuIGVkaXRpbmcgc29tZXRoaW5nLiAnXHJcbiAgICAgICAgKyAnSWYgeW91IGxlYXZlIGJlZm9yZSBzYXZpbmcsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3QuJztcclxuXHJcbiAgICBmdW5jdGlvbiBvblVubG9hZChlKSB7XHJcbiAgICAgICAgaWYgKCFoYXNDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gb25VbmxvYWQ7XHJcbiAgICAvL3ZhciBsYXN0Q2xpY2tPbkVsZW1lbnQ7XHJcbiAgICAvLyQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAgbGFzdENsaWNrT25FbGVtZW50PSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAvL30pO1xyXG5cclxuICAgIHZhciBsYXN0Q2xpY2tlZEVsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGxhc3RDbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICAvL2xhc3RDbGlja2VkID0gdGFyZ2V0LnRleHRDb250ZW50IHx8IHRhcmdldC5pbm5lclRleHQ7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0ICR0ZXh0YXJlYXMgPSAkKCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIC8vQWRkIHRpbnltY2UgZ2V0IHRleHQgZnJvbSB0ZXh0YXJlYSBsaWtlcyBpbnB1dFxyXG4gICAgICAgIGlmICgkdGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzSW5wdXRzV2l0aFRleHQoKSB7XHJcbiAgICAgICAgbGV0IGhhc1RleHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgJGlucHV0cyA9ICQoJ2lucHV0W3R5cGU9dGV4dF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGhhc1RleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgYXR0cmlidXRlKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSAkKGxhc3RDbGlja2VkRWxlbWVudCkuZGF0YShhdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgICBpZiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1VybChsaW5rUGF0aCkge1xyXG4gICAgICAgIGxvZ2dlci5sb2coXCJDaGVjayB1cmxcIik7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBjaGVja0VsZW1lbnRGb3JEYXRhQXR0cihnZXRMYXN0Q2xpY2tlZEVsZW1lbnQoKSwgXCJkaXNhYmxlTGlua1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNraW5nIGlzIGRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIlVybCBjaGVja2tpbmcgaXMgZW5hYmxlZFwiKVxyXG5cclxuICAgICAgICBpZiAobGlua1BhdGguaW5kZXhPZignY3JlYXRlJykgPT0gLTEgJiYgbGlua1BhdGguaW5kZXhPZignZWRpdCcpID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldExhc3RDbGlja2VkRWxlbWVudCgpIHtcclxuICAgICAgICBsZXQgbGFzdENsaWNrZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJiBlbGVtZW50LmF0dHIoXCJ0eXBlXCIpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50Lmhhc0NsYXNzKFwiYnV0dG9uLXN1Ym1pdFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFzdENsaWNrZWRFbGVtZW50LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgJiYgZWxlbWVudC5hdHRyKCd0eXBlJykgPT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFlbGVtZW50LmF0dHIoJ2RhdGEtZGlzYWJsZS13YXJuaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAoIWxhc3RDbGlja2VkRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICBsZXQgbGlua1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgICAgIGlmICghc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGxhc3RDbGlja2VkRWxlbWVudCwgXCJkaXNhYmxlLXdhcm5pbmdcIikgIT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoZWNrVXJsKGxpbmtQYXRoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzQ2hhbmdlcyA9IGhhc1RleHRBcmVhc1dpdGhUZXh0KCkgfHwgaGFzSW5wdXRzV2l0aFRleHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHZhciBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRTdG9wTGVhdmUoZXYpIHtcclxuICAgICAgICBsZXQgaXNTYXZpbmcgPSBsYXN0Q2xpY2tlZEVsZW1lbnQgJiYgIXN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgJChsYXN0Q2xpY2tlZEVsZW1lbnQpKTtcclxuICAgICAgICBpZiAoaXNTYXZpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dENoYW5nZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgZXYucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiBjb25maXJtYXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZGVmYXVsdFN0b3BMZWF2ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXRhY2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZm9yY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IFdhcm5pbmdXaW5kb3cgfTtcclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9kYXRhLmpzJztcclxuaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICcuLi9jb21tb24vbm90aWZpZXInO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi9jb21tb24vdmFsaWRhdG9yJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdEZvcm1XaWRnZXQoKSB7XHJcblxyXG4gICAgbGV0ICRjb250YWluZXIgPSAkKCcjY29udGFjdEZvcm0nKTtcclxuICAgIGxldCAkdmFsaWRhdGVGaWVsZHMgPSAkY29udGFpbmVyLmZpbmQoJy52YWxpZGF0ZScpO1xyXG4gICAgbGV0ICRpbnB1dEZpZWxkcyA9ICQoJy5mb3JtLWNvbnRyb2wnKTtcclxuICAgIGxldCAkcG9wdXAgPSAkKCcucG9wdXAtcmVkaXJlY3QnKTtcclxuICAgIGxldCBob21lcGFnZSA9ICdodHRwczovL3NpdGV0cmlrcy5jb20nO1xyXG4gICAgbGV0ICRjYW5jZWxCdXR0b24gPSAkKCcjY2FuY2VsJyk7XHJcbiAgICBsZXQgJGhvbWVwYWdlUmVkaXJlY3QgPSAkKCcjaG9tZXBhZ2VSZWRpcmVjdCcpO1xyXG5cclxuICAgICR2YWxpZGF0ZUZpZWxkcy5vbignaW5wdXQnLCBWYWxpZGF0b3IuY3JlYXRlRmllbGRWYWxpZGF0aW9uSGFuZGxlcigpKTtcclxuXHJcbiAgICAkKCcjY29udGFjdEZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBEYXRhLnBvc3RGb3JtKHsgdXJsOiB0aGlzLmFjdGlvbiwgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSh0aGlzKSB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWwgc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXRGaWVsZHMudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWVyLmNyZWF0ZUFsZXJ0KHsgY29udGFpbmVySWQ6ICcjYWxlcnRzJywgbWVzc2FnZTogcmVzLm1lc3NhZ2UsIHN0YXR1czogJ2RhbmdlcicgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVBvcHVwKCkge1xyXG4gICAgICAgICRwb3B1cC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAkY29udGFpbmVyLmNzcygnb3BhY2l0eScsICcwLjInKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQb3B1cCgpIHtcclxuICAgICAgICAkcG9wdXAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAkY29udGFpbmVyLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGNhbmNlbEJ1dHRvbi5vbignY2xpY2snLCByZW1vdmVQb3B1cCk7XHJcbiAgICAkaG9tZXBhZ2VSZWRpcmVjdC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChsb2NhdGlvbikuYXR0cignaHJlZicsIGhvbWVwYWdlKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL2NvbW1vbi92YWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgeyBOb3RpZmllciB9IGZyb20gJy4vY29tbW9uL25vdGlmaWVyLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpcHRpb25XaWRnZXQoKSB7XHJcbiAgICBpZiAoJCgnLnN1YnNjcmlwdGlvbi1mb3JtLXdyYXBwZXInKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgJCgnLnN1YnNjcmlwdGlvbi1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS5yZWFkeSh0b2dnbGVGb3JtKCkpO1xyXG5cclxuICAgICQoJyNzdWJzY3JpcHRpb24tc3VibWl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgbGV0ICRuYW1lID0gJCgnI3N1YnNjcmlwdGlvbkZvcm0gaW5wdXRbbmFtZT1cIm5hbWVcIl0nKTtcclxuICAgICAgICBsZXQgJGVtYWlsID0gJCgnI3N1YnNjcmlwdGlvbkZvcm0gaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XHJcbiAgICAgICAgbGV0ICRmZWF0dXJlc1JlbGVhc2VzID0gJCgnaW5wdXRbbmFtZT1cImZlYXR1cmVzLXJlbGVhc2VzXCJdOmNoZWNrZWQnKTtcclxuICAgICAgICBsZXQgJHByb21vdGlvbmFsTWF0ZXJpYWxzID0gJCgnaW5wdXRbbmFtZT1cInByb21vdGlvbmFsLW1hdGVyaWFsc1wiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCRlbWFpbCwgJ011c3QgZW50ZXIgdmFsaWQgZW1haWwnLCBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3IudmFsaWRhdGVFbWFpbCh2YWwpO1xyXG4gICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghVmFsaWRhdG9yLnZhbGlkYXRlKCRuYW1lLCAnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgbGV0dGVycy4nLCBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3IuaGFzTWluaW11bUxlbmd0aCh2YWwudHJpbSgpLCAzKSAmJiBWYWxpZGF0b3IuaXNTdGFydGluZ1dpdGhMZXR0ZXIodmFsLnRyaW0oKSk7XHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEkZmVhdHVyZXNSZWxlYXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQoJyNmZWF0dXJlcy1yZWxlYXNlcy1ncm91cCAudmFsaWRhdGlvbi1vdXRwdXQnKS50ZXh0KCdQbGVhc2UgY2hlY2sgb25lIG9mIHRoZSBvcHRpb25zLicpO1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjZmVhdHVyZXMtcmVsZWFzZXMtZ3JvdXAgLnZhbGlkYXRpb24tb3V0cHV0JykudGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISRwcm9tb3Rpb25hbE1hdGVyaWFscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQoJyNwcm9tb3Rpb25hbC1tYXRlcmlhbHMtZ3JvdXAgLnZhbGlkYXRpb24tb3V0cHV0JykudGV4dCgnUGxlYXNlIGNoZWNrIG9uZSBvZiB0aGUgb3B0aW9ucy4nKTtcclxuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3Byb21vdGlvbmFsLW1hdGVyaWFscy1ncm91cCAudmFsaWRhdGlvbi1vdXRwdXQnKS50ZXh0KCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmbGFnKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZW1haWxHcm91cHMgPSAkZmVhdHVyZXNSZWxlYXNlcy52YWwoKS50b1N0cmluZygpICsgJHByb21vdGlvbmFsTWF0ZXJpYWxzLnZhbCgpLnRvU3RyaW5nKCkgKyAnMCc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsR3JvdXBzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVyRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIE5hbWU6ICRuYW1lLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgRW1haWw6ICRlbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgICAgIE1hcmtldGluZ0VtYWlsR3JvdXBzOiBlbWFpbEdyb3Vwc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgRGF0YS5wb3N0SnNvbih7IHVybDogJy9zaXRldHJpa3MvbWFya2V0aW5nRW1haWxzL3N1YnNjcmliZScsIGRhdGE6IHN1YnNjcmliZXJEYXRhIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpZXIuY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZDogJyNzdWJzY3JpcHRpb24tZm9ybS1jb250YWluZXInLCBtZXNzYWdlOiByZXMubWVzc2FnZSwgc3RhdHVzOiAocmVzLnN1Y2Nlc3MgPyAnaW5mbycgOiAnd2FybmluZycpLCBzZWNvbmRzOiA1fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5hbWUudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICRlbWFpbC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgJHByb21vdGlvbmFsTWF0ZXJpYWxzLmF0dHIoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAkZmVhdHVyZXNSZWxlYXNlcy5hdHRyKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnN1YnNjcmlwdGlvbi1idXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLyogZ2xvYmFscyB0aW55bWNlICovXHJcbmltcG9ydCB7IFdhcm5pbmdXaW5kb3cgfSBmcm9tICcuL21vZHVsZXMvd2FybmluZy13aW5kb3cuanMnO1xyXG5cclxudmFyIHRleHRFZGl0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gaW5pdEluc3RhY2VDYWxsYmFjayhlZGl0b3IpIHtcclxuICAgICAgICBpZiAodHlwZW9mIFdhcm5pbmdXaW5kb3cgIT09ICd1bmRlZmluZWQnICYmIFdhcm5pbmdXaW5kb3cuZm9yY2UpIHtcclxuICAgICAgICAgICAgZWRpdG9yLm9uKCdOb2RlQ2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIFdhcm5pbmdXaW5kb3cuZm9yY2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldHVwRWRpdG9yKGVkaXRvciwgb25Jbml0Q2FsbGJhY2spIHtcclxuICAgICAgICBlZGl0b3IuYWRkQnV0dG9uKCdjdXN0b21idXR0b24nLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdtZW51YnV0dG9uJyxcclxuICAgICAgICAgICAgdGV4dDogJ0N1c3RvbScsXHJcbiAgICAgICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgICAgICBtZW51OiBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0xvZ291dCBsaW5rJyxcclxuICAgICAgICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3IuaW5zZXJ0Q29udGVudCgnPGEgaHJlZj1cIi9sb2dvdXRcIj5Mb2dvdXQ8L2E+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVkaXRvci5vbignaW5pdCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICBpZiAob25Jbml0Q2FsbGJhY2sgJiYge30udG9TdHJpbmcuY2FsbChvbkluaXRDYWxsYmFjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcclxuICAgICAgICAgICAgICAgIG9uSW5pdENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZW5hYmxlIGF1dG8tc3luYyB3aXRoIHRoZSB0ZXh0YXJlYVxyXG4gICAgICAgIGVkaXRvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aW55bWNlLnRyaWdnZXJTYXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW1hZ2VfbGlzdChzdWNjZXNzKSB7XHJcbiAgICAgICAgJC5nZXQoJy9zaXRldHJpa3MvZmlsZXMvZ2V0YWxsaW1hZ2VzJywgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcy5pbWFnZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGVfcGlja2VyX2NhbGxiYWNrKGNiLCB2YWx1ZSwgbWV0YSkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICdpbWFnZS8qJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChpbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIE5vdGU6IEluIG1vZGVybiBicm93c2VycyBpbnB1dFt0eXBlPVwiZmlsZVwiXSBpcyBmdW5jdGlvbmFsIHdpdGhvdXQgXHJcbiAgICAgICAgLy8gZXZlbiBhZGRpbmcgaXQgdG8gdGhlIERPTSwgYnV0IHRoYXQgbWlnaHQgbm90IGJlIHRoZSBjYXNlIGluIHNvbWUgb2xkZXJcclxuICAgICAgICAvLyBvciBxdWlya3kgYnJvd3NlcnMgbGlrZSBJRSwgc28geW91IG1pZ2h0IHdhbnQgdG8gYWRkIGl0IHRvIHRoZSBET01cclxuICAgICAgICAvLyBqdXN0IGluIGNhc2UsIGFuZCB2aXN1YWxseSBoaWRlIGl0LiBBbmQgZG8gbm90IGZvcmdldCBkbyByZW1vdmUgaXRcclxuICAgICAgICAvLyBvbmNlIHlvdSBkbyBub3QgbmVlZCBpdCBhbnltb3JlLlxyXG5cclxuICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBOb3cgd2UgbmVlZCB0byByZWdpc3RlciB0aGUgYmxvYiBpbiBUaW55TUNFcyBpbWFnZSBibG9iXHJcbiAgICAgICAgICAgICAgICAvLyByZWdpc3RyeS4gSW4gdGhlIG5leHQgcmVsZWFzZSB0aGlzIHBhcnQgaG9wZWZ1bGx5IHdvbid0IGJlXHJcbiAgICAgICAgICAgICAgICAvLyBuZWNlc3NhcnksIGFzIHdlIGFyZSBsb29raW5nIHRvIGhhbmRsZSBpdCBpbnRlcm5hbGx5LlxyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gJ2Jsb2JpZCcgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2JDYWNoZSA9IHRpbnltY2UuYWN0aXZlRWRpdG9yLmVkaXRvclVwbG9hZC5ibG9iQ2FjaGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0ID0gcmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2JJbmZvID0gYmxvYkNhY2hlLmNyZWF0ZShpZCwgZmlsZSwgYmFzZTY0KTtcclxuICAgICAgICAgICAgICAgIGJsb2JDYWNoZS5hZGQoYmxvYkluZm8pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGNhbGxiYWNrIGFuZCBwb3B1bGF0ZSB0aGUgVGl0bGUgZmllbGQgd2l0aCB0aGUgZmlsZSBuYW1lXHJcbiAgICAgICAgICAgICAgICBjYihibG9iSW5mby5ibG9iVXJpKCksIHsgdGl0bGU6IGZpbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCYXNlQ29uZmlnKHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBvbkluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcclxuICAgICAgICAgICAgdmVyaWZ5X2h0bWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHRlbmRlZF92YWxpZF9lbGVtZW50czogJ3NwYW4nLFxyXG4gICAgICAgICAgICBleHRlbmRlZF92YWxpZF9lbGVtZW50czogJ2RpdltjbGFzc3xpZHxzdHlsZXxzcGFuXSxzcGFuW2NsYXNzfGlkfHN0eWxlXScsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnZGl2WypdLHNwYW5bKl0nLFxyXG4gICAgICAgICAgICB0aGVtZTogJ21vZGVybicsXHJcbiAgICAgICAgICAgIG1vZGU6ICd0ZXh0YXJlYXMnLFxyXG4gICAgICAgICAgICBmb3JjZV9icl9uZXdsaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlX3BfbmV3bGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JjZWRfcm9vdF9ibG9jazogJycsXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IFsnYWR2bGlzdCBhdXRvbGluayBjb2Rlc2FtcGxlIGxpbmsgaW1hZ2UgbGlzdHMgY2hhcm1hcCBwcmludCBwcmV2aWV3IGhyIGFuY2hvciBwYWdlYnJlYWsgZnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB3b3JkY291bnQgdmlzdWFsYmxvY2tzIHZpc3VhbGNoYXJzIGNvZGUgaW5zZXJ0ZGF0ZXRpbWUgbm9uYnJlYWtpbmcnLCAnc2F2ZSB0YWJsZSBjb250ZXh0bWVudSBkaXJlY3Rpb25hbGl0eSBwYXN0ZSB0ZXh0Y29sb3InXSxcclxuICAgICAgICAgICAgZXh0ZXJuYWxfcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgJ2NvZGVIaWdobCc6ICcvcGx1Z2lucy90aW55bWNlL2NvZGUtaGlnaGxpZ2h0LXRpbnltY2UtcGx1Z2luLmpzJyxcclxuICAgICAgICAgICAgICAgICdodG1sQmxvY2tzJzogJy9wbHVnaW5zL3RpbnltY2UvaHRtbC1jb21wb25lbnRzLXRpbnltY2UtcGx1Z2luLmpzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicm93c2VyX3NwZWxsY2hlY2s6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRleHRtZW51OiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzdGVfYXNfdGV4dDogdHJ1ZSxcclxuICAgICAgICAgICAgaW1hZ2VfY2FwdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgaW1hZ2VfYWR2dGFiOiB0cnVlLFxyXG4gICAgICAgICAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ZpbGUgaW1hZ2UgbWVkaWEnLFxyXG4gICAgICAgICAgICBmaWxlX3BpY2tlcl9jYWxsYmFjazogZmlsZV9waWNrZXJfY2FsbGJhY2ssXHJcbiAgICAgICAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZSB8IHByaW50IHByZXZpZXcgbWVkaWEgZnVsbHBhZ2UgfCBmb3JlY29sb3IgYmFja2NvbG9yIGNvZGUgfCBjb2RlSGlnaGwgfCBmb250c2l6ZXNlbGVjdCB8IGZvbnRzZWxlY3QgfCBjdXN0b21idXR0b24nLFxyXG4gICAgICAgICAgICBmb250c2l6ZV9mb3JtYXRzOiAnOHB4IDEwcHggMTJweCAxNHB4IDE2cHggMThweCAyMHB4IDIycHggMjRweCAzNnB4IDQ4cHgnLFxyXG4gICAgICAgICAgICBzZXR1cDogZWRpdG9yID0+IHNldHVwRWRpdG9yKGVkaXRvciwgb25Jbml0Q2FsbGJhY2spLFxyXG4gICAgICAgICAgICBpbml0X2luc3RhbmNlX2NhbGxiYWNrOiBpbml0SW5zdGFjZUNhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBvbkluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBjZmcgPSBjcmVhdGVCYXNlQ29uZmlnKHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBvbkluaXRDYWxsYmFjayk7XHJcbiAgICAgICAgY2ZnLmltYWdlX2xpc3QgPSBpbWFnZV9saXN0O1xyXG4gICAgICAgIHRpbnltY2UuaW5pdChjZmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRXaXRob3V0SW1hZ2VzKHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBvbkluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIHRpbnltY2UuaW5pdChjcmVhdGVCYXNlQ29uZmlnKHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBvbkluaXRDYWxsYmFjaykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShzZWxlY3Rvcikge1xyXG4gICAgICAgIGxldCBlZGl0b3IgPSB0aW55bWNlLmdldChzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGVkaXRvcikge1xyXG4gICAgICAgICAgICBlZGl0b3IucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcclxuICAgICAgICB0aW55bWNlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGVkaXRvciA9IHRpbnltY2UuZ2V0KHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWRpdG9yKSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5zZXRDb250ZW50KCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWN0b3IgbXVzdCBiZSBJZFxyXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aW55bWNlLmdldChpZCkuZ2V0Q29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEVkaXRvcihpZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdJZCBmb3IgdGhlIHRleHQgZWRpdG9yIG11c3QgYmUgc3BlY2lmaWVkIScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDYwMDtcclxuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMzAwO1xyXG4gICAgICAgIGlmIChpZFswXSA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgIHRleHRFZGl0b3IucmVtb3ZlKGlkLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dEVkaXRvci5pbml0KGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQsXHJcbiAgICAgICAgaW5pdFdpdGhvdXRJbWFnZXMsXHJcbiAgICAgICAgZ2V0Q29udGVudCxcclxuICAgICAgICByZW1vdmUsXHJcbiAgICAgICAgcmVtb3ZlQWxsLFxyXG4gICAgICAgIGNsZWFyLFxyXG4gICAgICAgIGFkZEVkaXRvclxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHRleHRFZGl0b3IgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==