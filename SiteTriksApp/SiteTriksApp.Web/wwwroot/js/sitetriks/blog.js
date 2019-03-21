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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/sitetriks/blog.js");
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

/***/ "./scripts/sitetriks/blog.js":
/*!***********************************!*\
  !*** ./scripts/sitetriks/blog.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

var _comments = __webpack_require__(/*! ../comments.js */ "./scripts/comments.js");

var _textEditor = __webpack_require__(/*! ../text-editor.js */ "./scripts/text-editor.js");

var _helpers = __webpack_require__(/*! ./helpers.js */ "./scripts/sitetriks/helpers.js");

function blogDetails(id) {
    _comments.Comments.init(id, $('#comments-container'), 'blog-comment-area');
    _warningWindow.WarningWindow.attach();
}

function blogForm() {
    _textEditor.textEditor.init('#summary-area', 500, 150);
    _textEditor.textEditor.init('#content-area', 500, 300);

    (0, _helpers.setupAjaxForm)('#blog-form', '/sitetriks/blog');
    _warningWindow.WarningWindow.attach();
}

window.blog = {
    details: blogDetails,
    setupForm: blogForm
};

/***/ }),

/***/ "./scripts/sitetriks/helpers.js":
/*!**************************************!*\
  !*** ./scripts/sitetriks/helpers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupAjaxForm = setupAjaxForm;

var _data = __webpack_require__(/*! ../common/data.js */ "./scripts/common/data.js");

var _loader = __webpack_require__(/*! ../common/loader.js */ "./scripts/common/loader.js");

var _validator = __webpack_require__(/*! ../common/validator.js */ "./scripts/common/validator.js");

var _notifier = __webpack_require__(/*! ../common/notifier.js */ "./scripts/common/notifier.js");

var _warningWindow = __webpack_require__(/*! ../modules/warning-window.js */ "./scripts/modules/warning-window.js");

var _textEditor = __webpack_require__(/*! ../text-editor.js */ "./scripts/text-editor.js");

function setupAjaxForm(formSelector, redirectUrl, textEditorAreasIds) {
    _warningWindow.WarningWindow.attach();
    var validation = _validator.Validator.createFieldsValidation();
    if (textEditorAreasIds && textEditorAreasIds.length) {
        for (var i = 0; i < textEditorAreasIds.length; i++) {
            _textEditor.textEditor.init(textEditorAreasIds[i], 500, 300);
        }
    }

    $(formSelector).on('submit', function (evt) {
        evt.preventDefault();
        if (!validation.apply(this)) {
            return false;
        }

        _loader.Loader.show('#fff');
        _data.Data.postForm({ url: this.action, formData: new FormData(this) }).then(function success(res) {
            if (res.success) {
                window.location.replace(redirectUrl);
            } else {
                _notifier.Notifier.createAlert({ containerId: '#alerts', message: res.message, status: 'danger' });
                _loader.Loader.hide();
            }
        });

        return false;
    });
}

window.setupAjaxForm = setupAjaxForm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9jb21tb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvY29tbW9uL2xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi9ub3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbW1vbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9tb2R1bGVzL3dhcm5pbmctd2luZG93LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2l0ZXRyaWtzL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zaXRldHJpa3MvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3RleHQtZWRpdG9yLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicGFyZW50SWQiLCIkY29udGFpbmVyIiwidGVtcGxhdGVzQ2FjaGUiLCJhcmVhSWQiLCJpbml0IiwiaWQiLCIkY29tbWVudHNDb250YWluZXIiLCJ0ZXh0QXJlYUlkIiwiJCIsInRleHRFZGl0b3IiLCJyZW1vdmUiLCJQcm9taXNlIiwiYWxsIiwibmFtZSIsInVybCIsImxvYWRDb21tZW50cyIsInRoZW4iLCJyZXMiLCJiaW5kRXZlbnRzIiwiRGF0YSIsImdldEpzb24iLCJhcHBlbmQiLCJzdWNjZXNzIiwiYWRkQ29tbWVudCIsImV2IiwiTG9hZGVyIiwic2hvdyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYm9keSIsInBvc3RKc29uIiwiZGF0YSIsInZpZXciLCJjbGVhciIsIk5vdGlmaWVyIiwiY3JlYXRlQWxlcnQiLCJjb250YWluZXJJZCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJoaWRlIiwiZWRpdENvbW1lbnQiLCJjbG9zZUVkaXQiLCIkdHJpZ2dlciIsIiRjb250ZW50IiwicGFyZW50cyIsIm5leHQiLCJodG1sIiwicGFyZW50IiwiaW5pdFdpdGhvdXRJbWFnZXMiLCJ0YXJnZXQiLCJmaW5kIiwicHJldiIsImxlbmd0aCIsInNhdmVFZGl0ZWRDb21tZW50IiwiYXR0ciIsImRlbGV0ZUNvbW1lbnQiLCIkcGFyZW50Iiwib24iLCJtYWtlUmVxdWVzdCIsImZldGNoIiwiaXNGdW5jdGlvbiIsIm1ha2VGZXRjaFJlcXVlc3QiLCJtYWtlQWpheFJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiaXNGb3JtIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcmFtcyIsImVycm9yIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImFqYXgiLCJjcmVkZW50aWFscyIsImdldCIsImluZGV4T2YiLCJqc29uIiwidGV4dCIsImRpc2FibGVDYWNoZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0Rm9ybSIsImZvcm1EYXRhIiwiZGVsZXRlSnNvbiIsImRlZmF1bHRFcnJvciIsImkiLCJhcmd1bWVudHMiLCJjb25zb2xlIiwibG9nIiwiZnVuYyIsInRvU3RyaW5nIiwiY2FsbCIsImxvYWRIYW5kbGViYXJzVGVtcGxhdGVzIiwiaGVscGVycyIsInZhbHVlIiwib3B0aW9ucyIsIl9zd2l0Y2hfdmFsdWVfIiwiX3N3aXRjaF9icmVha18iLCJmbiIsImFyZ3MiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwicG9wIiwiY2FzZVZhbHVlcyIsImhhc2giLCJicmVhayIsIiRlbCIsImtleSIsIkhhbmRsZWJhcnMiLCJyZWdpc3RlckhlbHBlciIsInRlbXBsYXRlcyIsInByb21pc2VzIiwicHVzaCIsInRlbXBsYXRlIiwiY29tcGlsZSIsImdpZlNyYyIsImNvbG9yIiwiaW1nU3JjIiwiQmx1ciIsImFkZCIsInNyYyIsImNsYXNzIiwiJHRhcmdldCIsImhpZGVPbkNsaWNrIiwiYXBwZW5kVG8iLCJQUkVWSUVXX0NPTlRBSU5FUl9DTEFTUyIsIlBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MiLCJCTFVSX0VMRU1FTlRfQ0xBU1MiLCJhZGRCbHVyIiwib3BhY2l0eSIsImFkZENsYXNzIiwiJGJsdXJFbGVtZW50IiwiJGl0ZW1Db250YWluZXIiLCIkcHJldmlld0NvbnRhaW5lciIsInJlbW92ZUJsdXIiLCJjc3MiLCJpc05hTiIsInJlbW92ZUNsYXNzIiwidGl0bGUiLCJzZWNvbmRzIiwiaXNQZXJtYW5lbnQiLCJzZWxlY3RvciIsIiR0aXRsZSIsIiRjbG9zZUJ1dHRvbiIsIiRtZXNzYWdlIiwiJGFsZXJ0Iiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0ZSIsIiRlbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGVGdW5jIiwidmFsIiwiaGFzTWluaW11bUxlbmd0aCIsIm1pbkxlbmdodCIsImhhc01heGltdW1MZW5ndGgiLCJtYXhMZW5naHQiLCJpc0FscGhhTnVtZXJpYyIsInBhdHRlcm4iLCJ0ZXN0IiwiaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24iLCJpc1Bhc3NpbmciLCJpc1VybEZyaWVuZGx5IiwiaXNTdGFydGluZ1dpdGhMZXR0ZXIiLCJ2YWxpZGF0ZUVtYWlsIiwiaXNEZWNpbWFsTnVtYmVyIiwibWF0Y2hlc1BhdHRlcm4iLCJpc051bWJlciIsImlzR3VpZCIsInN0cmluZ1RvVGVzdCIsInN1YnN0cmluZyIsInJlZ2V4R3VpZCIsImlzSW50ZWdlciIsInBhcnNlSW50IiwiaXNOdW1iZXJJblJhbmdlIiwibWluIiwibWF4IiwiaXNMZW5naHRJblJhbmdlIiwiY3JlYXRlRmllbGRzVmFsaWRhdGlvbiIsImN1c3RvbVZhbGlkYXRpb25GdW5jIiwidmFsaWRhdGVGaWVsZHMiLCIkZWxlbWVudHNUb1ZhbGlkYXRlIiwiZmxhZyIsImVhY2giLCJfIiwiZWxlbWVudCIsInZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZXMiLCJ2YWxpZGF0aW9uVHlwZXMiLCJzcGxpdCIsImlubmVyRmxhZyIsInZhbGlkYXRpb25NZXNzYWdlIiwicGFyc2VGbG9hdCIsImNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIiLCJjcmVhdGVWYWxpZGF0ZU9uQ2hhbmdlSGFuZGxlciIsImV4dHJhVmFsdWVzIiwidGltZXIiLCJ2YWxpZGF0ZVVybE9uQ2hhbmdlIiwiJGlucHV0IiwiY2xlYXJUaW1lb3V0IiwidmFsaWRhdGVVcmwiLCIkdXJsRmllbGQiLCIkYnRuU3VibWl0IiwiUmVnRXhwIiwidiIsInZhbGlkYXRlVW5pcXVlbmVzIiwiY2xhc3NUb1ZhbGlkYXRlIiwiY291bnRlciIsIiRhbGxOYW1lcyIsIldhcm5pbmdXaW5kb3ciLCJsb2dnZXIiLCJjb25maXJtYXRpb25NZXNzYWdlIiwib25VbmxvYWQiLCJlIiwiaGFzQ2hhbmdlcyIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJsYXN0Q2xpY2tlZEVsZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJldmVudCIsInNyY0VsZW1lbnQiLCJoYXNUZXh0QXJlYXNXaXRoVGV4dCIsIiR0ZXh0YXJlYXMiLCJoYXNJbnB1dHNXaXRoVGV4dCIsImhhc1RleHQiLCIkaW5wdXRzIiwiY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIiLCJhdHRyaWJ1dGUiLCJjaGVja1VybCIsImxpbmtQYXRoIiwiZ2V0TGFzdENsaWNrZWRFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInN1Ym1pdEJ1dHRvbkNoZWNrIiwidGFnTmFtZSIsImhhc0NsYXNzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlucHV0Q2hhbmdlZCIsImRlZmF1bHRTdG9wTGVhdmUiLCJpc1NhdmluZyIsImF0dGFjaCIsIm9uYmVmb3JldW5sb2FkIiwiZGV0YWNoIiwiZm9yY2UiLCJibG9nRGV0YWlscyIsImJsb2dGb3JtIiwiYmxvZyIsImRldGFpbHMiLCJzZXR1cEZvcm0iLCJzZXR1cEFqYXhGb3JtIiwiZm9ybVNlbGVjdG9yIiwicmVkaXJlY3RVcmwiLCJ0ZXh0RWRpdG9yQXJlYXNJZHMiLCJ2YWxpZGF0aW9uIiwiZXZ0IiwiYXBwbHkiLCJhY3Rpb24iLCJGb3JtRGF0YSIsInJlcGxhY2UiLCJpbml0SW5zdGFjZUNhbGxiYWNrIiwiZWRpdG9yIiwic2V0dXBFZGl0b3IiLCJvbkluaXRDYWxsYmFjayIsImFkZEJ1dHRvbiIsInR5cGUiLCJpY29uIiwibWVudSIsIm9uY2xpY2siLCJpbnNlcnRDb250ZW50IiwidGlueW1jZSIsInRyaWdnZXJTYXZlIiwiaW1hZ2VfbGlzdCIsImltYWdlcyIsImZpbGVfcGlja2VyX2NhbGxiYWNrIiwiY2IiLCJtZXRhIiwiaW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiRGF0ZSIsImdldFRpbWUiLCJibG9iQ2FjaGUiLCJhY3RpdmVFZGl0b3IiLCJlZGl0b3JVcGxvYWQiLCJiYXNlNjQiLCJyZXN1bHQiLCJibG9iSW5mbyIsImNyZWF0ZSIsImJsb2JVcmkiLCJyZWFkQXNEYXRhVVJMIiwiY2xpY2siLCJjcmVhdGVCYXNlQ29uZmlnIiwid2lkdGgiLCJoZWlnaHQiLCJ2ZXJpZnlfaHRtbCIsImV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzIiwiY2ZnIiwicmVtb3ZlQWxsIiwic2V0Q29udGVudCIsImFkZEVkaXRvciIsIndhcm4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrREFBK0QsRUFBRTtBQUN2RztBQUNBO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGtCQUFrQixvSkFBb0osR0FBRyxTQUFTLEdBQUcsWUFBWSxHQUFHLHFQQUFxUCxHQUFHLFlBQVksR0FBRyx5S0FBeUssR0FBRyw0SkFBNEosR0FBRyw0SkFBNEosR0FBRyw0SkFBNEosR0FBRyw0SkFBNEosR0FBRyw0SkFBNEosR0FBRyw0SkFBNEosR0FBRyw0SkFBNEosR0FBRyw0SEFBNEgsR0FBRyw0SEFBNEgsR0FBRywwS0FBMEssR0FBRyw2SkFBNkosR0FBRyw4QkFBOEIsR0FBRyx5SkFBeUosR0FBRyxnSkFBZ0osR0FBRyxzTEFBc0wsR0FBRyw0SEFBNEgsR0FBRyw0SEFBNEgsR0FBRyw0SEFBNEgsR0FBRyx5SkFBeUosR0FBRyw4SEFBOEgsR0FBRywwS0FBMEssR0FBRywwS0FBMEssR0FBRywwS0FBMEssR0FBRywwS0FBMEssR0FBRywwS0FBMEssR0FBRywwS0FBMEssR0FBRywwS0FBMEssR0FBRyx1TEFBdUwsR0FBRyxzQkFBc0IsR0FBRyx1TEFBdUwsR0FBRyw4SEFBOEgsR0FBRyx3RUFBd0UsR0FBRywyQ0FBMkMsR0FBRyxtQ0FBbUMsR0FBRywyQkFBMkIsR0FBRyw4SEFBOEgsR0FBRyxzSEFBc0gsR0FBRyxzSEFBc0gsR0FBRyw0SEFBNEgsR0FBRyxzQkFBc0IsR0FBRywySUFBMkksR0FBRywySUFBMkksR0FBRyw4SEFBOEgsR0FBRyw4SEFBOEgsR0FBRyxzTUFBc00sR0FBRyxjQUFjLEdBQUcsdUxBQXVMLEdBQUcsc01BQXNNLEdBQUcsc0JBQXNCLEdBQUcsY0FBYyxHQUFHLDBLQUEwSyxHQUFHLGNBQWMsR0FBRyw0SEFBNEgsR0FBRyxnSkFBZ0osR0FBRyxzQkFBc0IsR0FBRyxjQUFjLEdBQUcseUtBQXlLLEdBQUcsMkJBQTJCLEdBQUcsc01BQXNNLEdBQUcsOEhBQThILEdBQUcseUtBQXlLLEdBQUcsNEhBQTRILEdBQUcsbU5BQW1OLEdBQUcsbU5BQW1OLEdBQUcseU1BQXlNLEdBQUcseU1BQXlNLEdBQUcsZUFBZSxHQUFHLHNIQUFzSCxHQUFHLGNBQWMsR0FBRywwS0FBMEssR0FBRywwS0FBMEssR0FBRyx5RkFBeUYsR0FBRywrRUFBK0UsR0FBRyxxTUFBcU0sR0FBRyx1TEFBdUwsR0FBRyxlQUFlLEdBQUcsc0hBQXNILEdBQUcsY0FBYyxHQUFHLHlLQUF5SyxHQUFHLDBFQUEwRSxHQUFHLDRJQUE0SSxHQUFHLGNBQWMsR0FBRyx5S0FBeUssR0FBRyxlQUFlLEdBQUcsc0hBQXNILEdBQUcsY0FBYyxHQUFHLHlNQUF5TSxHQUFHLGVBQWUsR0FBRyw4Q0FBOEMsR0FBRyxtSUFBbUksR0FBRywyQkFBMkIsR0FBRyw4Q0FBOEMsR0FBRyxtSUFBbUksR0FBRywyQkFBMkIsR0FBRyxlQUFlLEdBQUcsc0hBQXNILEdBQUcsY0FBYyxHQUFHLGVBQWUsR0FBRyxzSEFBc0gsR0FBRyxjQUFjLEdBQUcseUtBQXlLLEdBQUcsK0VBQStFLEdBQUcsZUFBZSxHQUFHLDBKQUEwSixHQUFHLHlLQUF5SyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsc05BQXNOLEdBQUcseUtBQXlLLEdBQUcsZUFBZSxHQUFHLHNIQUFzSCxHQUFHLGNBQWMsR0FBRyx5S0FBeUssR0FBRyxlQUFlLEdBQUcsY0FBYyxHQUFHLHdCQUF3QixHQUFHLGVBQWUsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLG1JQUFtSSxHQUFHLCtFQUErRSxHQUFHLDhDQUE4QyxHQUFHLG1JQUFtSSxHQUFHLDJCQUEyQixHQUFHLDBLQUEwSyxHQUFHLDZKQUE2SixHQUFHLDZCQUE2QixHQUFHLDZCQUE2QixHQUFHLGdKQUFnSixHQUFHLGVBQWUsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLDZCQUE2QixHQUFHLDZKQUE2SjtBQUM1a2QsMEJBQTBCLG1QQUFtUDtBQUM3UTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esa0RBQWtELDhIQUE4SDtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiw4SUFBOEksNkNBQTZDO0FBQzNMO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFLG9DQUFvQyxHQUFHLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixXQUFXLFVBQVUsU0FBUyxFQUFFLEVBQUUsRUFBRSx3QkFBd0IsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsaURBQWlELCtDQUErQyxNQUFNLEVBQUUsZUFBZSxFQUFFLDhFQUE4RSwyQkFBMkIsK0JBQStCLDBCQUEwQiwyQ0FBMkMsMERBQTBELFdBQVcsWUFBWTtBQUMzL0IsNkJBQTZCLFFBQVEscUxBQXFMLFVBQVUsbUNBQW1DLFVBQVUsbUNBQW1DLFVBQVUseUNBQXlDLGNBQWMseUNBQXlDO0FBQzlaO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEJBQTBCO0FBQ2hDO0FBQ0EsRUFBRSxJQUFJO0FBQ047O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5RUFBeUU7O0FBRXpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsS0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHFDQUFxQyxPQUFPLFFBQVEsUUFBUTtBQUM1RDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSx3QkFBd0IsNEVBQTRFO0FBQ3BHLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBLHNDQUFzQzs7QUFFdEM7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw0REFBNEQsU0FBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrSUFBa0k7O0FBRWxJO0FBQ0E7QUFDQTtBQUNB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QixFQUFzQztBQUNsQyxZQUFJLENBQUMxUyxFQUFMLEVBQVM7QUFDTGtGLG9CQUFRK04sSUFBUixDQUFhLDJDQUFiOztBQUVBO0FBQ0g7QUFDRFIsZ0JBQVFBLFNBQVMsR0FBakI7QUFDQUMsaUJBQVNBLFVBQVUsR0FBbkI7QUFDQSxZQUFJMVMsR0FBRyxDQUFILE1BQVUsR0FBZCxFQUFtQjtBQUNmSSx1QkFBV0MsTUFBWCxDQUFrQkwsR0FBR3VLLFNBQUgsQ0FBYSxDQUFiLENBQWxCO0FBQ0gsU0FGRCxNQUVPO0FBQ0huSyx1QkFBV0MsTUFBWCxDQUFrQkwsRUFBbEI7QUFDSDs7QUFFREksbUJBQVdMLElBQVgsQ0FBZ0JDLEVBQWhCLEVBQW9CeVMsS0FBcEIsRUFBMkJDLE1BQTNCO0FBQ0g7O0FBRUQsV0FBTztBQUNIM1Msa0JBREc7QUFFSDRDLDRDQUZHO0FBR0hwQiw4QkFIRztBQUlIbEIsc0JBSkc7QUFLSHlTLDRCQUxHO0FBTUhsUixvQkFORztBQU9Ib1I7QUFQRyxLQUFQO0FBU0gsQ0F4S2dCLEVBQWpCOztRQTBLUzVTLFUsR0FBQUEsVSIsImZpbGUiOiJqcy9zaXRldHJpa3MvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NjcmlwdHMvc2l0ZXRyaWtzL2Jsb2cuanNcIik7XG4iLCIvKiohXG5cbiBAbGljZW5zZVxuIGhhbmRsZWJhcnMgdjQuMS4wXG5cbkNvcHlyaWdodCAoQykgMjAxMS0yMDE3IGJ5IFllaHVkYSBLYXR6XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhhbmRsZWJhcnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGFuZGxlYmFyc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9oYW5kbGViYXJzUnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIF9oYW5kbGViYXJzUnVudGltZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzUnVudGltZSk7XG5cblx0Ly8gQ29tcGlsZXIgaW1wb3J0c1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0NvbXBpbGVyQXN0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckJhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cblx0dmFyIF9jcmVhdGUgPSBfaGFuZGxlYmFyc1J1bnRpbWUyWydkZWZhdWx0J10uY3JlYXRlO1xuXHRmdW5jdGlvbiBjcmVhdGUoKSB7XG5cdCAgdmFyIGhiID0gX2NyZWF0ZSgpO1xuXG5cdCAgaGIuY29tcGlsZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuXHQgICAgcmV0dXJuIF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlci5jb21waWxlKGlucHV0LCBvcHRpb25zLCBoYik7XG5cdCAgfTtcblx0ICBoYi5wcmVjb21waWxlID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLnByZWNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcblx0ICB9O1xuXG5cdCAgaGIuQVNUID0gX2hhbmRsZWJhcnNDb21waWxlckFzdDJbJ2RlZmF1bHQnXTtcblx0ICBoYi5Db21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJDb21waWxlci5Db21waWxlcjtcblx0ICBoYi5KYXZhU2NyaXB0Q29tcGlsZXIgPSBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyMlsnZGVmYXVsdCddO1xuXHQgIGhiLlBhcnNlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJCYXNlLnBhcnNlcjtcblx0ICBoYi5wYXJzZSA9IF9oYW5kbGViYXJzQ29tcGlsZXJCYXNlLnBhcnNlO1xuXG5cdCAgcmV0dXJuIGhiO1xuXHR9XG5cblx0dmFyIGluc3QgPSBjcmVhdGUoKTtcblx0aW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cblx0X2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5cdGluc3QuVmlzaXRvciA9IF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yMlsnZGVmYXVsdCddO1xuXG5cdGluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG5cdCAgICBcImRlZmF1bHRcIjogb2JqXG5cdCAgfTtcblx0fTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9oYW5kbGViYXJzQmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0dmFyIGJhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc0Jhc2UpO1xuXG5cdC8vIEVhY2ggb2YgdGhlc2UgYXVnbWVudCB0aGUgSGFuZGxlYmFycyBvYmplY3QuIE5vIG5lZWQgdG8gc2V0dXAgaGVyZS5cblx0Ly8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcblxuXHR2YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG5cblx0dmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzU2FmZVN0cmluZyk7XG5cblx0dmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0V4Y2VwdGlvbik7XG5cblx0dmFyIF9oYW5kbGViYXJzVXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzVXRpbHMpO1xuXG5cdHZhciBfaGFuZGxlYmFyc1J1bnRpbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxuXHR2YXIgcnVudGltZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzUnVudGltZSk7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc05vQ29uZmxpY3QpO1xuXG5cdC8vIEZvciBjb21wYXRpYmlsaXR5IGFuZCB1c2FnZSBvdXRzaWRlIG9mIG1vZHVsZSBzeXN0ZW1zLCBtYWtlIHRoZSBIYW5kbGViYXJzIG9iamVjdCBhIG5hbWVzcGFjZVxuXHRmdW5jdGlvbiBjcmVhdGUoKSB7XG5cdCAgdmFyIGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cblx0ICBVdGlscy5leHRlbmQoaGIsIGJhc2UpO1xuXHQgIGhiLlNhZmVTdHJpbmcgPSBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyWydkZWZhdWx0J107XG5cdCAgaGIuRXhjZXB0aW9uID0gX2hhbmRsZWJhcnNFeGNlcHRpb24yWydkZWZhdWx0J107XG5cdCAgaGIuVXRpbHMgPSBVdGlscztcblx0ICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcblxuXHQgIGhiLlZNID0gcnVudGltZTtcblx0ICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChzcGVjKSB7XG5cdCAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG5cdCAgfTtcblxuXHQgIHJldHVybiBoYjtcblx0fVxuXG5cdHZhciBpbnN0ID0gY3JlYXRlKCk7XG5cdGluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5cdF9oYW5kbGViYXJzTm9Db25mbGljdDJbJ2RlZmF1bHQnXShpbnN0KTtcblxuXHRpbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG5cdCAgICByZXR1cm4gb2JqO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB2YXIgbmV3T2JqID0ge307XG5cblx0ICAgIGlmIChvYmogIT0gbnVsbCkge1xuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdCAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblx0ICAgIHJldHVybiBuZXdPYmo7XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLkhhbmRsZWJhcnNFbnZpcm9ubWVudCA9IEhhbmRsZWJhcnNFbnZpcm9ubWVudDtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHR2YXIgX2hlbHBlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuXHR2YXIgX2RlY29yYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblxuXHR2YXIgX2xvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXG5cdHZhciBfbG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ2dlcik7XG5cblx0dmFyIFZFUlNJT04gPSAnNC4xLjAnO1xuXHRleHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xuXHR2YXIgQ09NUElMRVJfUkVWSVNJT04gPSA3O1xuXG5cdGV4cG9ydHMuQ09NUElMRVJfUkVWSVNJT04gPSBDT01QSUxFUl9SRVZJU0lPTjtcblx0dmFyIFJFVklTSU9OX0NIQU5HRVMgPSB7XG5cdCAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcblx0ICAyOiAnPT0gMS4wLjAtcmMuMycsXG5cdCAgMzogJz09IDEuMC4wLXJjLjQnLFxuXHQgIDQ6ICc9PSAxLngueCcsXG5cdCAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuXHQgIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuXHQgIDc6ICc+PSA0LjAuMCdcblx0fTtcblxuXHRleHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xuXHR2YXIgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5cdGZ1bmN0aW9uIEhhbmRsZWJhcnNFbnZpcm9ubWVudChoZWxwZXJzLCBwYXJ0aWFscywgZGVjb3JhdG9ycykge1xuXHQgIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG5cdCAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXHQgIHRoaXMuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnMgfHwge307XG5cblx0ICBfaGVscGVycy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuXHQgIF9kZWNvcmF0b3JzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG5cdH1cblxuXHRIYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuXHQgIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cblx0ICBsb2dnZXI6IF9sb2dnZXIyWydkZWZhdWx0J10sXG5cdCAgbG9nOiBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZyxcblxuXHQgIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIGlmIChmbikge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcblx0ICAgICAgfVxuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHVucmVnaXN0ZXJIZWxwZXIobmFtZSkge1xuXHQgICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcblx0ICB9LFxuXG5cdCAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiByZWdpc3RlclBhcnRpYWwobmFtZSwgcGFydGlhbCkge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0F0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIicgKyBuYW1lICsgJ1wiIGFzIHVuZGVmaW5lZCcpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHVucmVnaXN0ZXJQYXJ0aWFsKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLnBhcnRpYWxzW25hbWVdO1xuXHQgIH0sXG5cblx0ICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IobmFtZSwgZm4pIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBpZiAoZm4pIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBkZWNvcmF0b3JzJyk7XG5cdCAgICAgIH1cblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmRlY29yYXRvcnMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiB1bnJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBsb2cgPSBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZztcblxuXHRleHBvcnRzLmxvZyA9IGxvZztcblx0ZXhwb3J0cy5jcmVhdGVGcmFtZSA9IF91dGlscy5jcmVhdGVGcmFtZTtcblx0ZXhwb3J0cy5sb2dnZXIgPSBfbG9nZ2VyMlsnZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5cdGV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XG5cdGV4cG9ydHMuZXNjYXBlRXhwcmVzc2lvbiA9IGVzY2FwZUV4cHJlc3Npb247XG5cdGV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5cdGV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcblx0ZXhwb3J0cy5ibG9ja1BhcmFtcyA9IGJsb2NrUGFyYW1zO1xuXHRleHBvcnRzLmFwcGVuZENvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGg7XG5cdHZhciBlc2NhcGUgPSB7XG5cdCAgJyYnOiAnJmFtcDsnLFxuXHQgICc8JzogJyZsdDsnLFxuXHQgICc+JzogJyZndDsnLFxuXHQgICdcIic6ICcmcXVvdDsnLFxuXHQgIFwiJ1wiOiAnJiN4Mjc7Jyxcblx0ICAnYCc6ICcmI3g2MDsnLFxuXHQgICc9JzogJyYjeDNEOydcblx0fTtcblxuXHR2YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2A9XS9nLFxuXHQgICAgcG9zc2libGUgPSAvWyY8PlwiJ2A9XS87XG5cblx0ZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcblx0ICByZXR1cm4gZXNjYXBlW2Nocl07XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG5cdCAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0ICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcblx0ICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIG9iajtcblx0fVxuXG5cdHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cblx0ZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuXHQvLyBTb3VyY2VkIGZyb20gbG9kYXNoXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcblx0LyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xuXHR2YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuXHR9O1xuXHQvLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0aWYgKGlzRnVuY3Rpb24oL3gvKSkge1xuXHQgIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdCAgfTtcblx0fVxuXHRleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5cdC8qIGVzbGludC1lbmFibGUgZnVuYy1zdHlsZSAqL1xuXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG5cdH07XG5cblx0ZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblx0Ly8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cblxuXHRmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuXHQgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gaTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIC0xO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcblx0ICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0ICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcblx0ICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuXHQgICAgICByZXR1cm4gc3RyaW5nLnRvSFRNTCgpO1xuXHQgICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gJyc7XG5cdCAgICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcblx0ICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcblx0ICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuXHQgICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG5cdCAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcblx0ICB9XG5cblx0ICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuXHQgICAgcmV0dXJuIHN0cmluZztcblx0ICB9XG5cdCAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcblx0ICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcblx0ICB2YXIgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG5cdCAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcblx0ICByZXR1cm4gZnJhbWU7XG5cdH1cblxuXHRmdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuXHQgIHBhcmFtcy5wYXRoID0gaWRzO1xuXHQgIHJldHVybiBwYXJhbXM7XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcblx0ICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cblx0ZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcblx0ICB2YXIgbG9jID0gbm9kZSAmJiBub2RlLmxvYyxcblx0ICAgICAgbGluZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgY29sdW1uID0gdW5kZWZpbmVkO1xuXHQgIGlmIChsb2MpIHtcblx0ICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcblx0ICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cblx0ICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBsaW5lICsgJzonICsgY29sdW1uO1xuXHQgIH1cblxuXHQgIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuXHQgIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuXHQgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuXHQgICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG5cdCAgfVxuXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcblx0ICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEV4Y2VwdGlvbik7XG5cdCAgfVxuXG5cdCAgdHJ5IHtcblx0ICAgIGlmIChsb2MpIHtcblx0ICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuXHQgICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgICAgaWYgKF9PYmplY3QkZGVmaW5lUHJvcGVydHkpIHtcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcblx0ICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG5cdCAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9IGNhdGNoIChub3ApIHtcblx0ICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cblx0ICB9XG5cdH1cblxuXHRFeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gRXhjZXB0aW9uO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcblx0ICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG5cdCAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcblx0ICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcblx0ICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcblx0ICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuXHQgIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcblx0ICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG5cdCAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuXHQgIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuXHQgIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcblx0fTtcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMgPSByZWdpc3RlckRlZmF1bHRIZWxwZXJzO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nKTtcblxuXHR2YXIgX2hlbHBlcnNFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cblx0dmFyIF9oZWxwZXJzRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzRWFjaCk7XG5cblx0dmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5cdHZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xuXG5cdHZhciBfaGVscGVyc0lmID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cblx0dmFyIF9oZWxwZXJzSWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0lmKTtcblxuXHR2YXIgX2hlbHBlcnNMb2cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblxuXHR2YXIgX2hlbHBlcnNMb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvZyk7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb29rdXApO1xuXG5cdHZhciBfaGVscGVyc1dpdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuXHR2YXIgX2hlbHBlcnNXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNXaXRoKTtcblxuXHRmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG5cdCAgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzRWFjaDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0lmMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0xvZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzV2l0aDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgdmFyIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG5cdCAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG5cdCAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuXHQgICAgICByZXR1cm4gZm4odGhpcyk7XG5cdCAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcblx0ICAgIH0gZWxzZSBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcblx0ICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVycy5lYWNoKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgdmFyIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcblx0ICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAoIW9wdGlvbnMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuXHQgICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG5cdCAgICAgICAgaSA9IDAsXG5cdCAgICAgICAgcmV0ID0gJycsXG5cdCAgICAgICAgZGF0YSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjb250ZXh0UGF0aCA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICBjb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcblx0ICAgIH1cblxuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG5cdCAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChvcHRpb25zLmRhdGEpIHtcblx0ICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuXHQgICAgICBpZiAoZGF0YSkge1xuXHQgICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG5cdCAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuXHQgICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcblx0ICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cblx0ICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcblx0ICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG5cdCAgICAgICAgZGF0YTogZGF0YSxcblx0ICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG5cdCAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdmFyIHByaW9yS2V5ID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbnRleHQpIHtcblx0ICAgICAgICAgIGlmIChjb250ZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG5cdCAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcblx0ICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cblx0ICAgICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG5cdCAgICAgICAgICAgIGkrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKGkgPT09IDApIHtcblx0ICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKCkgLyogW2FyZ3MsIF1vcHRpb25zICove1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0ICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG5cdCAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuXHQgICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cblx0ICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG5cdCAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuXHQgICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IF91dGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7IGZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaCB9KTtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb2cnLCBmdW5jdGlvbiAoKSAvKiBtZXNzYWdlLCBvcHRpb25zICove1xuXHQgICAgdmFyIGFyZ3MgPSBbdW5kZWZpbmVkXSxcblx0ICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHQgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxldmVsID0gMTtcblx0ICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuXHQgICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcblx0ICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsKSB7XG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuXHQgICAgfVxuXHQgICAgYXJnc1swXSA9IGxldmVsO1xuXG5cdCAgICBpbnN0YW5jZS5sb2cuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uIChvYmosIGZpZWxkKSB7XG5cdCAgICByZXR1cm4gb2JqICYmIG9ialtmaWVsZF07XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignd2l0aCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcblx0ICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblxuXHQgICAgaWYgKCFfdXRpbHMuaXNFbXB0eShjb250ZXh0KSkge1xuXHQgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcblx0ICAgICAgICBkYXRhOiBkYXRhLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcblx0ICAgICAgfSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XG5cblx0dmFyIF9kZWNvcmF0b3JzSW5saW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cblx0dmFyIF9kZWNvcmF0b3JzSW5saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRvcnNJbmxpbmUpO1xuXG5cdGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcblx0ICBfZGVjb3JhdG9yc0lubGluZTJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbiAoZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcblx0ICAgIHZhciByZXQgPSBmbjtcblx0ICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcblx0ICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcblx0ICAgICAgcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cblx0ICAgICAgICB2YXIgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gX3V0aWxzLmV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcblx0ICAgICAgICB2YXIgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG5cdCAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgbG9nZ2VyID0ge1xuXHQgIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcblx0ICBsZXZlbDogJ2luZm8nLFxuXG5cdCAgLy8gTWFwcyBhIGdpdmVuIGxldmVsIHZhbHVlIHRvIHRoZSBgbWV0aG9kTWFwYCBpbmRleGVzIGFib3ZlLlxuXHQgIGxvb2t1cExldmVsOiBmdW5jdGlvbiBsb29rdXBMZXZlbChsZXZlbCkge1xuXHQgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgdmFyIGxldmVsTWFwID0gX3V0aWxzLmluZGV4T2YobG9nZ2VyLm1ldGhvZE1hcCwgbGV2ZWwudG9Mb3dlckNhc2UoKSk7XG5cdCAgICAgIGlmIChsZXZlbE1hcCA+PSAwKSB7XG5cdCAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBsZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGxldmVsO1xuXHQgIH0sXG5cblx0ICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuXHQgIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XG5cdCAgICBsZXZlbCA9IGxvZ2dlci5sb29rdXBMZXZlbChsZXZlbCk7XG5cblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcblx0ICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuXHQgICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuXHQgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuXHQgICAgICB9XG5cblx0ICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2UgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICAgIH1cblxuXHQgICAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgbWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBsb2dnZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG5cdCAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG5cdH1cblxuXHRTYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRzZWFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcblx0ZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRleHBvcnRzLndyYXBQcm9ncmFtID0gd3JhcFByb2dyYW07XG5cdGV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcblx0ZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcblx0ZXhwb3J0cy5ub29wID0gbm9vcDtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfYmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0ZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcblx0ICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcblx0ICAgICAgY3VycmVudFJldmlzaW9uID0gX2Jhc2UuQ09NUElMRVJfUkVWSVNJT047XG5cblx0ICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG5cdCAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuXHQgICAgICB2YXIgcnVudGltZVZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuXHQgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBydW50aW1lVmVyc2lvbnMgKyAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgKyBjb21waWxlclZlcnNpb25zICsgJykuJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBjb21waWxlckluZm9bMV0gKyAnKS4nKTtcblx0ICAgIH1cblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgaWYgKCFlbnYpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcblx0ICB9XG5cdCAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcblx0ICB9XG5cblx0ICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG5cdCAgLy8gTm90ZTogVXNpbmcgZW52LlZNIHJlZmVyZW5jZXMgcmF0aGVyIHRoYW4gbG9jYWwgdmFyIHJlZmVyZW5jZXMgdGhyb3VnaG91dCB0aGlzIHNlY3Rpb24gdG8gYWxsb3dcblx0ICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuXHQgIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cblx0ICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG5cdCAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG5cdCAgICAgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB2YXIgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG5cdCAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG5cdCAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIH1cblx0ICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuXHQgICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcblx0ICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIEp1c3QgYWRkIHdhdGVyXG5cdCAgdmFyIGNvbnRhaW5lciA9IHtcblx0ICAgIHN0cmljdDogZnVuY3Rpb24gc3RyaWN0KG9iaiwgbmFtZSkge1xuXHQgICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gb2JqW25hbWVdO1xuXHQgICAgfSxcblx0ICAgIGxvb2t1cDogZnVuY3Rpb24gbG9va3VwKGRlcHRocywgbmFtZSkge1xuXHQgICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcblx0ICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9LFxuXHQgICAgbGFtYmRhOiBmdW5jdGlvbiBsYW1iZGEoY3VycmVudCwgY29udGV4dCkge1xuXHQgICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuXHQgICAgfSxcblxuXHQgICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcblx0ICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG5cdCAgICBmbjogZnVuY3Rpb24gZm4oaSkge1xuXHQgICAgICB2YXIgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xuXHQgICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0sXG5cblx0ICAgIHByb2dyYW1zOiBbXSxcblx0ICAgIHByb2dyYW06IGZ1bmN0aW9uIHByb2dyYW0oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuXHQgICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuXHQgICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuXHQgICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuXHQgICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG5cdCAgICB9LFxuXG5cdCAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKHZhbHVlLCBkZXB0aCkge1xuXHQgICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuXHQgICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9LFxuXHQgICAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKHBhcmFtLCBjb21tb24pIHtcblx0ICAgICAgdmFyIG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuXHQgICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcblx0ICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIG9iajtcblx0ICAgIH0sXG5cdCAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG5cdCAgICBudWxsQ29udGV4dDogX09iamVjdCRzZWFsKHt9KSxcblxuXHQgICAgbm9vcDogZW52LlZNLm5vb3AsXG5cdCAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuXHQgIH07XG5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cblx0ICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuXHQgICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG5cdCAgICB9XG5cdCAgICB2YXIgZGVwdGhzID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuXHQgICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcblx0ICAgICAgICBkZXB0aHMgPSBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbWFpbihjb250ZXh0IC8qLCBvcHRpb25zKi8pIHtcblx0ICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgIH1cblx0ICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXHQgICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgfVxuXHQgIHJldC5pc1RvcCA9IHRydWU7XG5cblx0ICByZXQuX3NldHVwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0ICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG5cdCAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG5cdCAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuXHQgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuXHQgICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcblx0ICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcblx0ICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgfTtcblx0ICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG5cdCAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmICEoY29udGV4dCA9PT0gY29udGFpbmVyLm51bGxDb250ZXh0ICYmIGRlcHRoc1swXSA9PT0gbnVsbCkpIHtcblx0ICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcblx0ICB9XG5cblx0ICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cblx0ICBwcm9nLnByb2dyYW0gPSBpO1xuXHQgIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcblx0ICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuXHQgIHJldHVybiBwcm9nO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgIGlmICghcGFydGlhbCkge1xuXHQgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuXHQgICAgICBwYXJ0aWFsID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuXHQgICAgfVxuXHQgIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG5cdCAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcblx0ICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG5cdCAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcblx0ICB9XG5cdCAgcmV0dXJuIHBhcnRpYWw7XG5cdH1cblxuXHRmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAvLyBVc2UgdGhlIGN1cnJlbnQgY2xvc3VyZSBjb250ZXh0IHRvIHNhdmUgdGhlIHBhcnRpYWwtYmxvY2sgaWYgdGhpcyBwYXJ0aWFsXG5cdCAgdmFyIGN1cnJlbnRQYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG5cdCAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcblx0ICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCA9IG9wdGlvbnMuaWRzWzBdIHx8IG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aDtcblx0ICB9XG5cblx0ICB2YXIgcGFydGlhbEJsb2NrID0gdW5kZWZpbmVkO1xuXHQgIGlmIChvcHRpb25zLmZuICYmIG9wdGlvbnMuZm4gIT09IG5vb3ApIHtcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgIC8vIFdyYXBwZXIgZnVuY3Rpb24gdG8gZ2V0IGFjY2VzcyB0byBjdXJyZW50UGFydGlhbEJsb2NrIGZyb20gdGhlIGNsb3N1cmVcblx0ICAgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblx0ICAgICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuXHQgICAgICAgIC8vIGkuZS4gdGhlIHBhcnQgaW5zaWRlIHRoZSBibG9jayBvZiB0aGUgcGFydGlhbCBjYWxsLlxuXHQgICAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuXHQgICAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgfTtcblx0ICAgICAgaWYgKGZuLnBhcnRpYWxzKSB7XG5cdCAgICAgICAgb3B0aW9ucy5wYXJ0aWFscyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucy5wYXJ0aWFscywgZm4ucGFydGlhbHMpO1xuXHQgICAgICB9XG5cdCAgICB9KSgpO1xuXHQgIH1cblxuXHQgIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG5cdCAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuXHQgIH1cblxuXHQgIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcblx0ICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHQgICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gbm9vcCgpIHtcblx0ICByZXR1cm4gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG5cdCAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG5cdCAgICBkYXRhID0gZGF0YSA/IF9iYXNlLmNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG5cdCAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuXHQgIH1cblx0ICByZXR1cm4gZGF0YTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcblx0ICBpZiAoZm4uZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvcHMgPSB7fTtcblx0ICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuXHQgIH1cblx0ICByZXR1cm4gcHJvZztcblx0fVxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCkuT2JqZWN0LnNlYWw7XG5cbi8qKiovIH0pLFxuLyogMjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNykoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuXHQgICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKGl0KSA6IGl0O1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcblx0fTtcblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCBjb3JlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuXHQgIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cblx0ICAgICwgZXhwID0ge307XG5cdCAgZXhwW0tFWV0gPSBleGVjKGZuKTtcblx0ICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSlcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBjdHggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKVxuXHQgICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cblx0dmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuXHQgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG5cdCAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkdcblx0ICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuXHQgICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG5cdCAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcblx0ICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuXHQgICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuXHQgICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG5cdCAgICAsIGtleSwgb3duLCBvdXQ7XG5cdCAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xuXHQgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG5cdCAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuXHQgICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuXHQgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcblx0ICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG5cdCAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcblx0ICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG5cdCAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuXHQgICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcblx0ICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG5cdCAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuXHQgICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcblx0ICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcblx0ICAgICAgfTtcblx0ICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuXHQgICAgICByZXR1cm4gRjtcblx0ICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuXHQgICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuXHQgICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuXHQgIH1cblx0fTtcblx0Ly8gdHlwZSBiaXRtYXBcblx0JGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuXHQkZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG5cdCRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcblx0JGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG5cdCRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG5cdCRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5cdG1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuXHQgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0aWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5cdGlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9KSxcbi8qIDMxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cdHZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcblx0ICBhRnVuY3Rpb24oZm4pO1xuXHQgIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG5cdCAgc3dpdGNoKGxlbmd0aCl7XG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMzIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAzMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAhIWV4ZWMoKTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDM0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgey8qIGdsb2JhbCB3aW5kb3cgKi9cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG5cdCAgICAgICRIYW5kbGViYXJzID0gcm9vdC5IYW5kbGViYXJzO1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgSGFuZGxlYmFycy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKHJvb3QuSGFuZGxlYmFycyA9PT0gSGFuZGxlYmFycykge1xuXHQgICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcblx0ICAgIH1cblx0ICAgIHJldHVybiBIYW5kbGViYXJzO1xuXHQgIH07XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSksXG4vKiAzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHR2YXIgQVNUID0ge1xuXHQgIC8vIFB1YmxpYyBBUEkgdXNlZCB0byBldmFsdWF0ZSBkZXJpdmVkIGF0dHJpYnV0ZXMgcmVnYXJkaW5nIEFTVCBub2Rlc1xuXHQgIGhlbHBlcnM6IHtcblx0ICAgIC8vIGEgbXVzdGFjaGUgaXMgZGVmaW5pdGVseSBhIGhlbHBlciBpZjpcblx0ICAgIC8vICogaXQgaXMgYW4gZWxpZ2libGUgaGVscGVyLCBhbmRcblx0ICAgIC8vICogaXQgaGFzIGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIgb3IgaGFzaCBzZWdtZW50XG5cdCAgICBoZWxwZXJFeHByZXNzaW9uOiBmdW5jdGlvbiBoZWxwZXJFeHByZXNzaW9uKG5vZGUpIHtcblx0ICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nIHx8IChub2RlLnR5cGUgPT09ICdNdXN0YWNoZVN0YXRlbWVudCcgfHwgbm9kZS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSAmJiAhIShub2RlLnBhcmFtcyAmJiBub2RlLnBhcmFtcy5sZW5ndGggfHwgbm9kZS5oYXNoKTtcblx0ICAgIH0sXG5cblx0ICAgIHNjb3BlZElkOiBmdW5jdGlvbiBzY29wZWRJZChwYXRoKSB7XG5cdCAgICAgIHJldHVybiAoL15cXC58dGhpc1xcYi8udGVzdChwYXRoLm9yaWdpbmFsKVxuXHQgICAgICApO1xuXHQgICAgfSxcblxuXHQgICAgLy8gYW4gSUQgaXMgc2ltcGxlIGlmIGl0IG9ubHkgaGFzIG9uZSBwYXJ0LCBhbmQgdGhhdCBwYXJ0IGlzIG5vdFxuXHQgICAgLy8gYC4uYCBvciBgdGhpc2AuXG5cdCAgICBzaW1wbGVJZDogZnVuY3Rpb24gc2ltcGxlSWQocGF0aCkge1xuXHQgICAgICByZXR1cm4gcGF0aC5wYXJ0cy5sZW5ndGggPT09IDEgJiYgIUFTVC5oZWxwZXJzLnNjb3BlZElkKHBhdGgpICYmICFwYXRoLmRlcHRoO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQvLyBNdXN0IGJlIGV4cG9ydGVkIGFzIGFuIG9iamVjdCByYXRoZXIgdGhhbiB0aGUgcm9vdCBvZiB0aGUgbW9kdWxlIGFzIHRoZSBqaXNvbiBsZXhlclxuXHQvLyBtdXN0IG1vZGlmeSB0aGUgb2JqZWN0IHRvIG9wZXJhdGUgcHJvcGVybHkuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFTVDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuXHR2YXIgX3BhcnNlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xuXG5cdHZhciBfcGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlcik7XG5cblx0dmFyIF93aGl0ZXNwYWNlQ29udHJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXG5cdHZhciBfd2hpdGVzcGFjZUNvbnRyb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2hpdGVzcGFjZUNvbnRyb2wpO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXG5cdHZhciBIZWxwZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnMpO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHMucGFyc2VyID0gX3BhcnNlcjJbJ2RlZmF1bHQnXTtcblxuXHR2YXIgeXkgPSB7fTtcblx0X3V0aWxzLmV4dGVuZCh5eSwgSGVscGVycyk7XG5cblx0ZnVuY3Rpb24gcGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAvLyBKdXN0IHJldHVybiBpZiBhbiBhbHJlYWR5LWNvbXBpbGVkIEFTVCB3YXMgcGFzc2VkIGluLlxuXHQgIGlmIChpbnB1dC50eXBlID09PSAnUHJvZ3JhbScpIHtcblx0ICAgIHJldHVybiBpbnB1dDtcblx0ICB9XG5cblx0ICBfcGFyc2VyMlsnZGVmYXVsdCddLnl5ID0geXk7XG5cblx0ICAvLyBBbHRlcmluZyB0aGUgc2hhcmVkIG9iamVjdCBoZXJlLCBidXQgdGhpcyBpcyBvayBhcyBwYXJzZXIgaXMgYSBzeW5jIG9wZXJhdGlvblxuXHQgIHl5LmxvY0luZm8gPSBmdW5jdGlvbiAobG9jSW5mbykge1xuXHQgICAgcmV0dXJuIG5ldyB5eS5Tb3VyY2VMb2NhdGlvbihvcHRpb25zICYmIG9wdGlvbnMuc3JjTmFtZSwgbG9jSW5mbyk7XG5cdCAgfTtcblxuXHQgIHZhciBzdHJpcCA9IG5ldyBfd2hpdGVzcGFjZUNvbnRyb2wyWydkZWZhdWx0J10ob3B0aW9ucyk7XG5cdCAgcmV0dXJuIHN0cmlwLmFjY2VwdChfcGFyc2VyMlsnZGVmYXVsdCddLnBhcnNlKGlucHV0KSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIEZpbGUgaWdub3JlZCBpbiBjb3ZlcmFnZSB0ZXN0cyB2aWEgc2V0dGluZyBpbiAuaXN0YW5idWwueW1sXG5cdC8qIEppc29uIGdlbmVyYXRlZCBwYXJzZXIgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0dmFyIGhhbmRsZWJhcnMgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHBhcnNlciA9IHsgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge30sXG5cdCAgICAgICAgeXk6IHt9LFxuXHQgICAgICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJyb290XCI6IDMsIFwicHJvZ3JhbVwiOiA0LCBcIkVPRlwiOiA1LCBcInByb2dyYW1fcmVwZXRpdGlvbjBcIjogNiwgXCJzdGF0ZW1lbnRcIjogNywgXCJtdXN0YWNoZVwiOiA4LCBcImJsb2NrXCI6IDksIFwicmF3QmxvY2tcIjogMTAsIFwicGFydGlhbFwiOiAxMSwgXCJwYXJ0aWFsQmxvY2tcIjogMTIsIFwiY29udGVudFwiOiAxMywgXCJDT01NRU5UXCI6IDE0LCBcIkNPTlRFTlRcIjogMTUsIFwib3BlblJhd0Jsb2NrXCI6IDE2LCBcInJhd0Jsb2NrX3JlcGV0aXRpb25fcGx1czBcIjogMTcsIFwiRU5EX1JBV19CTE9DS1wiOiAxOCwgXCJPUEVOX1JBV19CTE9DS1wiOiAxOSwgXCJoZWxwZXJOYW1lXCI6IDIwLCBcIm9wZW5SYXdCbG9ja19yZXBldGl0aW9uMFwiOiAyMSwgXCJvcGVuUmF3QmxvY2tfb3B0aW9uMFwiOiAyMiwgXCJDTE9TRV9SQVdfQkxPQ0tcIjogMjMsIFwib3BlbkJsb2NrXCI6IDI0LCBcImJsb2NrX29wdGlvbjBcIjogMjUsIFwiY2xvc2VCbG9ja1wiOiAyNiwgXCJvcGVuSW52ZXJzZVwiOiAyNywgXCJibG9ja19vcHRpb24xXCI6IDI4LCBcIk9QRU5fQkxPQ0tcIjogMjksIFwib3BlbkJsb2NrX3JlcGV0aXRpb24wXCI6IDMwLCBcIm9wZW5CbG9ja19vcHRpb24wXCI6IDMxLCBcIm9wZW5CbG9ja19vcHRpb24xXCI6IDMyLCBcIkNMT1NFXCI6IDMzLCBcIk9QRU5fSU5WRVJTRVwiOiAzNCwgXCJvcGVuSW52ZXJzZV9yZXBldGl0aW9uMFwiOiAzNSwgXCJvcGVuSW52ZXJzZV9vcHRpb24wXCI6IDM2LCBcIm9wZW5JbnZlcnNlX29wdGlvbjFcIjogMzcsIFwib3BlbkludmVyc2VDaGFpblwiOiAzOCwgXCJPUEVOX0lOVkVSU0VfQ0hBSU5cIjogMzksIFwib3BlbkludmVyc2VDaGFpbl9yZXBldGl0aW9uMFwiOiA0MCwgXCJvcGVuSW52ZXJzZUNoYWluX29wdGlvbjBcIjogNDEsIFwib3BlbkludmVyc2VDaGFpbl9vcHRpb24xXCI6IDQyLCBcImludmVyc2VBbmRQcm9ncmFtXCI6IDQzLCBcIklOVkVSU0VcIjogNDQsIFwiaW52ZXJzZUNoYWluXCI6IDQ1LCBcImludmVyc2VDaGFpbl9vcHRpb24wXCI6IDQ2LCBcIk9QRU5fRU5EQkxPQ0tcIjogNDcsIFwiT1BFTlwiOiA0OCwgXCJtdXN0YWNoZV9yZXBldGl0aW9uMFwiOiA0OSwgXCJtdXN0YWNoZV9vcHRpb24wXCI6IDUwLCBcIk9QRU5fVU5FU0NBUEVEXCI6IDUxLCBcIm11c3RhY2hlX3JlcGV0aXRpb24xXCI6IDUyLCBcIm11c3RhY2hlX29wdGlvbjFcIjogNTMsIFwiQ0xPU0VfVU5FU0NBUEVEXCI6IDU0LCBcIk9QRU5fUEFSVElBTFwiOiA1NSwgXCJwYXJ0aWFsTmFtZVwiOiA1NiwgXCJwYXJ0aWFsX3JlcGV0aXRpb24wXCI6IDU3LCBcInBhcnRpYWxfb3B0aW9uMFwiOiA1OCwgXCJvcGVuUGFydGlhbEJsb2NrXCI6IDU5LCBcIk9QRU5fUEFSVElBTF9CTE9DS1wiOiA2MCwgXCJvcGVuUGFydGlhbEJsb2NrX3JlcGV0aXRpb24wXCI6IDYxLCBcIm9wZW5QYXJ0aWFsQmxvY2tfb3B0aW9uMFwiOiA2MiwgXCJwYXJhbVwiOiA2MywgXCJzZXhwclwiOiA2NCwgXCJPUEVOX1NFWFBSXCI6IDY1LCBcInNleHByX3JlcGV0aXRpb24wXCI6IDY2LCBcInNleHByX29wdGlvbjBcIjogNjcsIFwiQ0xPU0VfU0VYUFJcIjogNjgsIFwiaGFzaFwiOiA2OSwgXCJoYXNoX3JlcGV0aXRpb25fcGx1czBcIjogNzAsIFwiaGFzaFNlZ21lbnRcIjogNzEsIFwiSURcIjogNzIsIFwiRVFVQUxTXCI6IDczLCBcImJsb2NrUGFyYW1zXCI6IDc0LCBcIk9QRU5fQkxPQ0tfUEFSQU1TXCI6IDc1LCBcImJsb2NrUGFyYW1zX3JlcGV0aXRpb25fcGx1czBcIjogNzYsIFwiQ0xPU0VfQkxPQ0tfUEFSQU1TXCI6IDc3LCBcInBhdGhcIjogNzgsIFwiZGF0YU5hbWVcIjogNzksIFwiU1RSSU5HXCI6IDgwLCBcIk5VTUJFUlwiOiA4MSwgXCJCT09MRUFOXCI6IDgyLCBcIlVOREVGSU5FRFwiOiA4MywgXCJOVUxMXCI6IDg0LCBcIkRBVEFcIjogODUsIFwicGF0aFNlZ21lbnRzXCI6IDg2LCBcIlNFUFwiOiA4NywgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG5cdCAgICAgICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDU6IFwiRU9GXCIsIDE0OiBcIkNPTU1FTlRcIiwgMTU6IFwiQ09OVEVOVFwiLCAxODogXCJFTkRfUkFXX0JMT0NLXCIsIDE5OiBcIk9QRU5fUkFXX0JMT0NLXCIsIDIzOiBcIkNMT1NFX1JBV19CTE9DS1wiLCAyOTogXCJPUEVOX0JMT0NLXCIsIDMzOiBcIkNMT1NFXCIsIDM0OiBcIk9QRU5fSU5WRVJTRVwiLCAzOTogXCJPUEVOX0lOVkVSU0VfQ0hBSU5cIiwgNDQ6IFwiSU5WRVJTRVwiLCA0NzogXCJPUEVOX0VOREJMT0NLXCIsIDQ4OiBcIk9QRU5cIiwgNTE6IFwiT1BFTl9VTkVTQ0FQRURcIiwgNTQ6IFwiQ0xPU0VfVU5FU0NBUEVEXCIsIDU1OiBcIk9QRU5fUEFSVElBTFwiLCA2MDogXCJPUEVOX1BBUlRJQUxfQkxPQ0tcIiwgNjU6IFwiT1BFTl9TRVhQUlwiLCA2ODogXCJDTE9TRV9TRVhQUlwiLCA3MjogXCJJRFwiLCA3MzogXCJFUVVBTFNcIiwgNzU6IFwiT1BFTl9CTE9DS19QQVJBTVNcIiwgNzc6IFwiQ0xPU0VfQkxPQ0tfUEFSQU1TXCIsIDgwOiBcIlNUUklOR1wiLCA4MTogXCJOVU1CRVJcIiwgODI6IFwiQk9PTEVBTlwiLCA4MzogXCJVTkRFRklORURcIiwgODQ6IFwiTlVMTFwiLCA4NTogXCJEQVRBXCIsIDg3OiBcIlNFUFwiIH0sXG5cdCAgICAgICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDJdLCBbNCwgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzEzLCAxXSwgWzEwLCAzXSwgWzE2LCA1XSwgWzksIDRdLCBbOSwgNF0sIFsyNCwgNl0sIFsyNywgNl0sIFszOCwgNl0sIFs0MywgMl0sIFs0NSwgM10sIFs0NSwgMV0sIFsyNiwgM10sIFs4LCA1XSwgWzgsIDVdLCBbMTEsIDVdLCBbMTIsIDNdLCBbNTksIDVdLCBbNjMsIDFdLCBbNjMsIDFdLCBbNjQsIDVdLCBbNjksIDFdLCBbNzEsIDNdLCBbNzQsIDNdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbNTYsIDFdLCBbNTYsIDFdLCBbNzksIDJdLCBbNzgsIDFdLCBbODYsIDNdLCBbODYsIDFdLCBbNiwgMF0sIFs2LCAyXSwgWzE3LCAxXSwgWzE3LCAyXSwgWzIxLCAwXSwgWzIxLCAyXSwgWzIyLCAwXSwgWzIyLCAxXSwgWzI1LCAwXSwgWzI1LCAxXSwgWzI4LCAwXSwgWzI4LCAxXSwgWzMwLCAwXSwgWzMwLCAyXSwgWzMxLCAwXSwgWzMxLCAxXSwgWzMyLCAwXSwgWzMyLCAxXSwgWzM1LCAwXSwgWzM1LCAyXSwgWzM2LCAwXSwgWzM2LCAxXSwgWzM3LCAwXSwgWzM3LCAxXSwgWzQwLCAwXSwgWzQwLCAyXSwgWzQxLCAwXSwgWzQxLCAxXSwgWzQyLCAwXSwgWzQyLCAxXSwgWzQ2LCAwXSwgWzQ2LCAxXSwgWzQ5LCAwXSwgWzQ5LCAyXSwgWzUwLCAwXSwgWzUwLCAxXSwgWzUyLCAwXSwgWzUyLCAyXSwgWzUzLCAwXSwgWzUzLCAxXSwgWzU3LCAwXSwgWzU3LCAyXSwgWzU4LCAwXSwgWzU4LCAxXSwgWzYxLCAwXSwgWzYxLCAyXSwgWzYyLCAwXSwgWzYyLCAxXSwgWzY2LCAwXSwgWzY2LCAyXSwgWzY3LCAwXSwgWzY3LCAxXSwgWzcwLCAxXSwgWzcwLCAyXSwgWzc2LCAxXSwgWzc2LCAyXV0sXG5cdCAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgeXksIHl5c3RhdGUsICQkLCBfJCkge1xuXG5cdCAgICAgICAgICAgIHZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoeXlzdGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJFskMCAtIDFdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQcm9ncmFtKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ29tbWVudFN0YXRlbWVudCcsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB5eS5zdHJpcENvbW1lbnQoJCRbJDBdKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDBdLCAkJFskMF0pLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NvbnRlbnRTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbDogJCRbJDBdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJCRbJDBdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDExOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVSYXdCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gM10sIHBhcmFtczogJCRbJDAgLSAyXSwgaGFzaDogJCRbJDAgLSAxXSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCBmYWxzZSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRydWUsIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IG9wZW46ICQkWyQwIC0gNV0sIHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE3OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gMV0sICQkWyQwIC0gMV0pLCBwcm9ncmFtOiAkJFskMF0gfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTk6XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGludmVyc2UgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCAkJFskMF0sIGZhbHNlLCB0aGlzLl8kKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbSA9IHl5LnByZXBhcmVQcm9ncmFtKFtpbnZlcnNlXSwgJCRbJDAgLSAxXS5sb2MpO1xuXHQgICAgICAgICAgICAgICAgICAgIHByb2dyYW0uY2hhaW5lZCA9IHRydWU7XG5cblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHN0cmlwOiAkJFskMCAtIDJdLnN0cmlwLCBwcm9ncmFtOiBwcm9ncmFtLCBjaGFpbjogdHJ1ZSB9O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDJdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVNdXN0YWNoZSgkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMCAtIDRdLCB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlTXVzdGFjaGUoJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDAgLSA0XSwgeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUGFydGlhbFN0YXRlbWVudCcsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICQkWyQwIC0gM10sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogJCRbJDAgLSAyXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogJCRbJDAgLSAxXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50OiAnJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGFydGlhbEJsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAzXSwgcGFyYW1zOiAkJFskMCAtIDJdLCBoYXNoOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI3OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTdWJFeHByZXNzaW9uJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJCRbJDAgLSAzXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiAkJFskMCAtIDJdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiAkJFskMCAtIDFdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0hhc2gnLCBwYWlyczogJCRbJDBdLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnSGFzaFBhaXInLCBrZXk6IHl5LmlkKCQkWyQwIC0gMl0pLCB2YWx1ZTogJCRbJDBdLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkuaWQoJCRbJDAgLSAxXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdTdHJpbmdMaXRlcmFsJywgdmFsdWU6ICQkWyQwXSwgb3JpZ2luYWw6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ051bWJlckxpdGVyYWwnLCB2YWx1ZTogTnVtYmVyKCQkWyQwXSksIG9yaWdpbmFsOiBOdW1iZXIoJCRbJDBdKSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM3OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0Jvb2xlYW5MaXRlcmFsJywgdmFsdWU6ICQkWyQwXSA9PT0gJ3RydWUnLCBvcmlnaW5hbDogJCRbJDBdID09PSAndHJ1ZScsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdVbmRlZmluZWRMaXRlcmFsJywgb3JpZ2luYWw6IHVuZGVmaW5lZCwgdmFsdWU6IHVuZGVmaW5lZCwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ051bGxMaXRlcmFsJywgb3JpZ2luYWw6IG51bGwsIHZhbHVlOiBudWxsLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQYXRoKHRydWUsICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQYXRoKGZhbHNlLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0NDpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDJdLnB1c2goeyBwYXJ0OiB5eS5pZCgkJFskMF0pLCBvcmlnaW5hbDogJCRbJDBdLCBzZXBhcmF0b3I6ICQkWyQwIC0gMV0gfSk7dGhpcy4kID0gJCRbJDAgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW3sgcGFydDogeXkuaWQoJCRbJDBdKSwgb3JpZ2luYWw6ICQkWyQwXSB9XTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDUwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1MTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2NDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjU6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDcwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3MTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Mjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODM6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Nzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDkxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5NDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTU6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFskJFskMF1dO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXHQgICAgICAgIHRhYmxlOiBbeyAzOiAxLCA0OiAyLCA1OiBbMiwgNDZdLCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMTogWzNdIH0sIHsgNTogWzEsIDRdIH0sIHsgNTogWzIsIDJdLCA3OiA1LCA4OiA2LCA5OiA3LCAxMDogOCwgMTE6IDksIDEyOiAxMCwgMTM6IDExLCAxNDogWzEsIDEyXSwgMTU6IFsxLCAyMF0sIDE2OiAxNywgMTk6IFsxLCAyM10sIDI0OiAxNSwgMjc6IDE2LCAyOTogWzEsIDIxXSwgMzQ6IFsxLCAyMl0sIDM5OiBbMiwgMl0sIDQ0OiBbMiwgMl0sIDQ3OiBbMiwgMl0sIDQ4OiBbMSwgMTNdLCA1MTogWzEsIDE0XSwgNTU6IFsxLCAxOF0sIDU5OiAxOSwgNjA6IFsxLCAyNF0gfSwgeyAxOiBbMiwgMV0gfSwgeyA1OiBbMiwgNDddLCAxNDogWzIsIDQ3XSwgMTU6IFsyLCA0N10sIDE5OiBbMiwgNDddLCAyOTogWzIsIDQ3XSwgMzQ6IFsyLCA0N10sIDM5OiBbMiwgNDddLCA0NDogWzIsIDQ3XSwgNDc6IFsyLCA0N10sIDQ4OiBbMiwgNDddLCA1MTogWzIsIDQ3XSwgNTU6IFsyLCA0N10sIDYwOiBbMiwgNDddIH0sIHsgNTogWzIsIDNdLCAxNDogWzIsIDNdLCAxNTogWzIsIDNdLCAxOTogWzIsIDNdLCAyOTogWzIsIDNdLCAzNDogWzIsIDNdLCAzOTogWzIsIDNdLCA0NDogWzIsIDNdLCA0NzogWzIsIDNdLCA0ODogWzIsIDNdLCA1MTogWzIsIDNdLCA1NTogWzIsIDNdLCA2MDogWzIsIDNdIH0sIHsgNTogWzIsIDRdLCAxNDogWzIsIDRdLCAxNTogWzIsIDRdLCAxOTogWzIsIDRdLCAyOTogWzIsIDRdLCAzNDogWzIsIDRdLCAzOTogWzIsIDRdLCA0NDogWzIsIDRdLCA0NzogWzIsIDRdLCA0ODogWzIsIDRdLCA1MTogWzIsIDRdLCA1NTogWzIsIDRdLCA2MDogWzIsIDRdIH0sIHsgNTogWzIsIDVdLCAxNDogWzIsIDVdLCAxNTogWzIsIDVdLCAxOTogWzIsIDVdLCAyOTogWzIsIDVdLCAzNDogWzIsIDVdLCAzOTogWzIsIDVdLCA0NDogWzIsIDVdLCA0NzogWzIsIDVdLCA0ODogWzIsIDVdLCA1MTogWzIsIDVdLCA1NTogWzIsIDVdLCA2MDogWzIsIDVdIH0sIHsgNTogWzIsIDZdLCAxNDogWzIsIDZdLCAxNTogWzIsIDZdLCAxOTogWzIsIDZdLCAyOTogWzIsIDZdLCAzNDogWzIsIDZdLCAzOTogWzIsIDZdLCA0NDogWzIsIDZdLCA0NzogWzIsIDZdLCA0ODogWzIsIDZdLCA1MTogWzIsIDZdLCA1NTogWzIsIDZdLCA2MDogWzIsIDZdIH0sIHsgNTogWzIsIDddLCAxNDogWzIsIDddLCAxNTogWzIsIDddLCAxOTogWzIsIDddLCAyOTogWzIsIDddLCAzNDogWzIsIDddLCAzOTogWzIsIDddLCA0NDogWzIsIDddLCA0NzogWzIsIDddLCA0ODogWzIsIDddLCA1MTogWzIsIDddLCA1NTogWzIsIDddLCA2MDogWzIsIDddIH0sIHsgNTogWzIsIDhdLCAxNDogWzIsIDhdLCAxNTogWzIsIDhdLCAxOTogWzIsIDhdLCAyOTogWzIsIDhdLCAzNDogWzIsIDhdLCAzOTogWzIsIDhdLCA0NDogWzIsIDhdLCA0NzogWzIsIDhdLCA0ODogWzIsIDhdLCA1MTogWzIsIDhdLCA1NTogWzIsIDhdLCA2MDogWzIsIDhdIH0sIHsgNTogWzIsIDldLCAxNDogWzIsIDldLCAxNTogWzIsIDldLCAxOTogWzIsIDldLCAyOTogWzIsIDldLCAzNDogWzIsIDldLCAzOTogWzIsIDldLCA0NDogWzIsIDldLCA0NzogWzIsIDldLCA0ODogWzIsIDldLCA1MTogWzIsIDldLCA1NTogWzIsIDldLCA2MDogWzIsIDldIH0sIHsgMjA6IDI1LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiAzNiwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA0OiAzNywgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCAzOTogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDQ6IDM4LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDQ0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyAxMzogNDAsIDE1OiBbMSwgMjBdLCAxNzogMzkgfSwgeyAyMDogNDIsIDU2OiA0MSwgNjQ6IDQzLCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA0OiA0NSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyA1OiBbMiwgMTBdLCAxNDogWzIsIDEwXSwgMTU6IFsyLCAxMF0sIDE4OiBbMiwgMTBdLCAxOTogWzIsIDEwXSwgMjk6IFsyLCAxMF0sIDM0OiBbMiwgMTBdLCAzOTogWzIsIDEwXSwgNDQ6IFsyLCAxMF0sIDQ3OiBbMiwgMTBdLCA0ODogWzIsIDEwXSwgNTE6IFsyLCAxMF0sIDU1OiBbMiwgMTBdLCA2MDogWzIsIDEwXSB9LCB7IDIwOiA0NiwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDcsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQ4LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0MiwgNTY6IDQ5LCA2NDogNDMsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDMzOiBbMiwgNzhdLCA0OTogNTAsIDY1OiBbMiwgNzhdLCA3MjogWzIsIDc4XSwgODA6IFsyLCA3OF0sIDgxOiBbMiwgNzhdLCA4MjogWzIsIDc4XSwgODM6IFsyLCA3OF0sIDg0OiBbMiwgNzhdLCA4NTogWzIsIDc4XSB9LCB7IDIzOiBbMiwgMzNdLCAzMzogWzIsIDMzXSwgNTQ6IFsyLCAzM10sIDY1OiBbMiwgMzNdLCA2ODogWzIsIDMzXSwgNzI6IFsyLCAzM10sIDc1OiBbMiwgMzNdLCA4MDogWzIsIDMzXSwgODE6IFsyLCAzM10sIDgyOiBbMiwgMzNdLCA4MzogWzIsIDMzXSwgODQ6IFsyLCAzM10sIDg1OiBbMiwgMzNdIH0sIHsgMjM6IFsyLCAzNF0sIDMzOiBbMiwgMzRdLCA1NDogWzIsIDM0XSwgNjU6IFsyLCAzNF0sIDY4OiBbMiwgMzRdLCA3MjogWzIsIDM0XSwgNzU6IFsyLCAzNF0sIDgwOiBbMiwgMzRdLCA4MTogWzIsIDM0XSwgODI6IFsyLCAzNF0sIDgzOiBbMiwgMzRdLCA4NDogWzIsIDM0XSwgODU6IFsyLCAzNF0gfSwgeyAyMzogWzIsIDM1XSwgMzM6IFsyLCAzNV0sIDU0OiBbMiwgMzVdLCA2NTogWzIsIDM1XSwgNjg6IFsyLCAzNV0sIDcyOiBbMiwgMzVdLCA3NTogWzIsIDM1XSwgODA6IFsyLCAzNV0sIDgxOiBbMiwgMzVdLCA4MjogWzIsIDM1XSwgODM6IFsyLCAzNV0sIDg0OiBbMiwgMzVdLCA4NTogWzIsIDM1XSB9LCB7IDIzOiBbMiwgMzZdLCAzMzogWzIsIDM2XSwgNTQ6IFsyLCAzNl0sIDY1OiBbMiwgMzZdLCA2ODogWzIsIDM2XSwgNzI6IFsyLCAzNl0sIDc1OiBbMiwgMzZdLCA4MDogWzIsIDM2XSwgODE6IFsyLCAzNl0sIDgyOiBbMiwgMzZdLCA4MzogWzIsIDM2XSwgODQ6IFsyLCAzNl0sIDg1OiBbMiwgMzZdIH0sIHsgMjM6IFsyLCAzN10sIDMzOiBbMiwgMzddLCA1NDogWzIsIDM3XSwgNjU6IFsyLCAzN10sIDY4OiBbMiwgMzddLCA3MjogWzIsIDM3XSwgNzU6IFsyLCAzN10sIDgwOiBbMiwgMzddLCA4MTogWzIsIDM3XSwgODI6IFsyLCAzN10sIDgzOiBbMiwgMzddLCA4NDogWzIsIDM3XSwgODU6IFsyLCAzN10gfSwgeyAyMzogWzIsIDM4XSwgMzM6IFsyLCAzOF0sIDU0OiBbMiwgMzhdLCA2NTogWzIsIDM4XSwgNjg6IFsyLCAzOF0sIDcyOiBbMiwgMzhdLCA3NTogWzIsIDM4XSwgODA6IFsyLCAzOF0sIDgxOiBbMiwgMzhdLCA4MjogWzIsIDM4XSwgODM6IFsyLCAzOF0sIDg0OiBbMiwgMzhdLCA4NTogWzIsIDM4XSB9LCB7IDIzOiBbMiwgMzldLCAzMzogWzIsIDM5XSwgNTQ6IFsyLCAzOV0sIDY1OiBbMiwgMzldLCA2ODogWzIsIDM5XSwgNzI6IFsyLCAzOV0sIDc1OiBbMiwgMzldLCA4MDogWzIsIDM5XSwgODE6IFsyLCAzOV0sIDgyOiBbMiwgMzldLCA4MzogWzIsIDM5XSwgODQ6IFsyLCAzOV0sIDg1OiBbMiwgMzldIH0sIHsgMjM6IFsyLCA0M10sIDMzOiBbMiwgNDNdLCA1NDogWzIsIDQzXSwgNjU6IFsyLCA0M10sIDY4OiBbMiwgNDNdLCA3MjogWzIsIDQzXSwgNzU6IFsyLCA0M10sIDgwOiBbMiwgNDNdLCA4MTogWzIsIDQzXSwgODI6IFsyLCA0M10sIDgzOiBbMiwgNDNdLCA4NDogWzIsIDQzXSwgODU6IFsyLCA0M10sIDg3OiBbMSwgNTFdIH0sIHsgNzI6IFsxLCAzNV0sIDg2OiA1MiB9LCB7IDIzOiBbMiwgNDVdLCAzMzogWzIsIDQ1XSwgNTQ6IFsyLCA0NV0sIDY1OiBbMiwgNDVdLCA2ODogWzIsIDQ1XSwgNzI6IFsyLCA0NV0sIDc1OiBbMiwgNDVdLCA4MDogWzIsIDQ1XSwgODE6IFsyLCA0NV0sIDgyOiBbMiwgNDVdLCA4MzogWzIsIDQ1XSwgODQ6IFsyLCA0NV0sIDg1OiBbMiwgNDVdLCA4NzogWzIsIDQ1XSB9LCB7IDUyOiA1MywgNTQ6IFsyLCA4Ml0sIDY1OiBbMiwgODJdLCA3MjogWzIsIDgyXSwgODA6IFsyLCA4Ml0sIDgxOiBbMiwgODJdLCA4MjogWzIsIDgyXSwgODM6IFsyLCA4Ml0sIDg0OiBbMiwgODJdLCA4NTogWzIsIDgyXSB9LCB7IDI1OiA1NCwgMzg6IDU2LCAzOTogWzEsIDU4XSwgNDM6IDU3LCA0NDogWzEsIDU5XSwgNDU6IDU1LCA0NzogWzIsIDU0XSB9LCB7IDI4OiA2MCwgNDM6IDYxLCA0NDogWzEsIDU5XSwgNDc6IFsyLCA1Nl0gfSwgeyAxMzogNjMsIDE1OiBbMSwgMjBdLCAxODogWzEsIDYyXSB9LCB7IDE1OiBbMiwgNDhdLCAxODogWzIsIDQ4XSB9LCB7IDMzOiBbMiwgODZdLCA1NzogNjQsIDY1OiBbMiwgODZdLCA3MjogWzIsIDg2XSwgODA6IFsyLCA4Nl0sIDgxOiBbMiwgODZdLCA4MjogWzIsIDg2XSwgODM6IFsyLCA4Nl0sIDg0OiBbMiwgODZdLCA4NTogWzIsIDg2XSB9LCB7IDMzOiBbMiwgNDBdLCA2NTogWzIsIDQwXSwgNzI6IFsyLCA0MF0sIDgwOiBbMiwgNDBdLCA4MTogWzIsIDQwXSwgODI6IFsyLCA0MF0sIDgzOiBbMiwgNDBdLCA4NDogWzIsIDQwXSwgODU6IFsyLCA0MF0gfSwgeyAzMzogWzIsIDQxXSwgNjU6IFsyLCA0MV0sIDcyOiBbMiwgNDFdLCA4MDogWzIsIDQxXSwgODE6IFsyLCA0MV0sIDgyOiBbMiwgNDFdLCA4MzogWzIsIDQxXSwgODQ6IFsyLCA0MV0sIDg1OiBbMiwgNDFdIH0sIHsgMjA6IDY1LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDI2OiA2NiwgNDc6IFsxLCA2N10gfSwgeyAzMDogNjgsIDMzOiBbMiwgNThdLCA2NTogWzIsIDU4XSwgNzI6IFsyLCA1OF0sIDc1OiBbMiwgNThdLCA4MDogWzIsIDU4XSwgODE6IFsyLCA1OF0sIDgyOiBbMiwgNThdLCA4MzogWzIsIDU4XSwgODQ6IFsyLCA1OF0sIDg1OiBbMiwgNThdIH0sIHsgMzM6IFsyLCA2NF0sIDM1OiA2OSwgNjU6IFsyLCA2NF0sIDcyOiBbMiwgNjRdLCA3NTogWzIsIDY0XSwgODA6IFsyLCA2NF0sIDgxOiBbMiwgNjRdLCA4MjogWzIsIDY0XSwgODM6IFsyLCA2NF0sIDg0OiBbMiwgNjRdLCA4NTogWzIsIDY0XSB9LCB7IDIxOiA3MCwgMjM6IFsyLCA1MF0sIDY1OiBbMiwgNTBdLCA3MjogWzIsIDUwXSwgODA6IFsyLCA1MF0sIDgxOiBbMiwgNTBdLCA4MjogWzIsIDUwXSwgODM6IFsyLCA1MF0sIDg0OiBbMiwgNTBdLCA4NTogWzIsIDUwXSB9LCB7IDMzOiBbMiwgOTBdLCA2MTogNzEsIDY1OiBbMiwgOTBdLCA3MjogWzIsIDkwXSwgODA6IFsyLCA5MF0sIDgxOiBbMiwgOTBdLCA4MjogWzIsIDkwXSwgODM6IFsyLCA5MF0sIDg0OiBbMiwgOTBdLCA4NTogWzIsIDkwXSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA4MF0sIDUwOiA3MiwgNjM6IDczLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogNzQsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDcyOiBbMSwgODBdIH0sIHsgMjM6IFsyLCA0Ml0sIDMzOiBbMiwgNDJdLCA1NDogWzIsIDQyXSwgNjU6IFsyLCA0Ml0sIDY4OiBbMiwgNDJdLCA3MjogWzIsIDQyXSwgNzU6IFsyLCA0Ml0sIDgwOiBbMiwgNDJdLCA4MTogWzIsIDQyXSwgODI6IFsyLCA0Ml0sIDgzOiBbMiwgNDJdLCA4NDogWzIsIDQyXSwgODU6IFsyLCA0Ml0sIDg3OiBbMSwgNTFdIH0sIHsgMjA6IDc1LCA1MzogODEsIDU0OiBbMiwgODRdLCA2MzogODIsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA4MywgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjY6IDg0LCA0NzogWzEsIDY3XSB9LCB7IDQ3OiBbMiwgNTVdIH0sIHsgNDogODUsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgMzk6IFsyLCA0Nl0sIDQ0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyA0NzogWzIsIDIwXSB9LCB7IDIwOiA4NiwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA0OiA4NywgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyAyNjogODgsIDQ3OiBbMSwgNjddIH0sIHsgNDc6IFsyLCA1N10gfSwgeyA1OiBbMiwgMTFdLCAxNDogWzIsIDExXSwgMTU6IFsyLCAxMV0sIDE5OiBbMiwgMTFdLCAyOTogWzIsIDExXSwgMzQ6IFsyLCAxMV0sIDM5OiBbMiwgMTFdLCA0NDogWzIsIDExXSwgNDc6IFsyLCAxMV0sIDQ4OiBbMiwgMTFdLCA1MTogWzIsIDExXSwgNTU6IFsyLCAxMV0sIDYwOiBbMiwgMTFdIH0sIHsgMTU6IFsyLCA0OV0sIDE4OiBbMiwgNDldIH0sIHsgMjA6IDc1LCAzMzogWzIsIDg4XSwgNTg6IDg5LCA2MzogOTAsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA5MSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNjU6IFsyLCA5NF0sIDY2OiA5MiwgNjg6IFsyLCA5NF0sIDcyOiBbMiwgOTRdLCA4MDogWzIsIDk0XSwgODE6IFsyLCA5NF0sIDgyOiBbMiwgOTRdLCA4MzogWzIsIDk0XSwgODQ6IFsyLCA5NF0sIDg1OiBbMiwgOTRdIH0sIHsgNTogWzIsIDI1XSwgMTQ6IFsyLCAyNV0sIDE1OiBbMiwgMjVdLCAxOTogWzIsIDI1XSwgMjk6IFsyLCAyNV0sIDM0OiBbMiwgMjVdLCAzOTogWzIsIDI1XSwgNDQ6IFsyLCAyNV0sIDQ3OiBbMiwgMjVdLCA0ODogWzIsIDI1XSwgNTE6IFsyLCAyNV0sIDU1OiBbMiwgMjVdLCA2MDogWzIsIDI1XSB9LCB7IDIwOiA5MywgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMxOiA5NCwgMzM6IFsyLCA2MF0sIDYzOiA5NSwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDk2LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc1OiBbMiwgNjBdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMzogWzIsIDY2XSwgMzY6IDk3LCA2MzogOTgsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA5OSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDY2XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMjI6IDEwMCwgMjM6IFsyLCA1Ml0sIDYzOiAxMDEsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiAxMDIsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzM6IFsyLCA5Ml0sIDYyOiAxMDMsIDYzOiAxMDQsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiAxMDUsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDMzOiBbMSwgMTA2XSB9LCB7IDMzOiBbMiwgNzldLCA2NTogWzIsIDc5XSwgNzI6IFsyLCA3OV0sIDgwOiBbMiwgNzldLCA4MTogWzIsIDc5XSwgODI6IFsyLCA3OV0sIDgzOiBbMiwgNzldLCA4NDogWzIsIDc5XSwgODU6IFsyLCA3OV0gfSwgeyAzMzogWzIsIDgxXSB9LCB7IDIzOiBbMiwgMjddLCAzMzogWzIsIDI3XSwgNTQ6IFsyLCAyN10sIDY1OiBbMiwgMjddLCA2ODogWzIsIDI3XSwgNzI6IFsyLCAyN10sIDc1OiBbMiwgMjddLCA4MDogWzIsIDI3XSwgODE6IFsyLCAyN10sIDgyOiBbMiwgMjddLCA4MzogWzIsIDI3XSwgODQ6IFsyLCAyN10sIDg1OiBbMiwgMjddIH0sIHsgMjM6IFsyLCAyOF0sIDMzOiBbMiwgMjhdLCA1NDogWzIsIDI4XSwgNjU6IFsyLCAyOF0sIDY4OiBbMiwgMjhdLCA3MjogWzIsIDI4XSwgNzU6IFsyLCAyOF0sIDgwOiBbMiwgMjhdLCA4MTogWzIsIDI4XSwgODI6IFsyLCAyOF0sIDgzOiBbMiwgMjhdLCA4NDogWzIsIDI4XSwgODU6IFsyLCAyOF0gfSwgeyAyMzogWzIsIDMwXSwgMzM6IFsyLCAzMF0sIDU0OiBbMiwgMzBdLCA2ODogWzIsIDMwXSwgNzE6IDEwNywgNzI6IFsxLCAxMDhdLCA3NTogWzIsIDMwXSB9LCB7IDIzOiBbMiwgOThdLCAzMzogWzIsIDk4XSwgNTQ6IFsyLCA5OF0sIDY4OiBbMiwgOThdLCA3MjogWzIsIDk4XSwgNzU6IFsyLCA5OF0gfSwgeyAyMzogWzIsIDQ1XSwgMzM6IFsyLCA0NV0sIDU0OiBbMiwgNDVdLCA2NTogWzIsIDQ1XSwgNjg6IFsyLCA0NV0sIDcyOiBbMiwgNDVdLCA3MzogWzEsIDEwOV0sIDc1OiBbMiwgNDVdLCA4MDogWzIsIDQ1XSwgODE6IFsyLCA0NV0sIDgyOiBbMiwgNDVdLCA4MzogWzIsIDQ1XSwgODQ6IFsyLCA0NV0sIDg1OiBbMiwgNDVdLCA4NzogWzIsIDQ1XSB9LCB7IDIzOiBbMiwgNDRdLCAzMzogWzIsIDQ0XSwgNTQ6IFsyLCA0NF0sIDY1OiBbMiwgNDRdLCA2ODogWzIsIDQ0XSwgNzI6IFsyLCA0NF0sIDc1OiBbMiwgNDRdLCA4MDogWzIsIDQ0XSwgODE6IFsyLCA0NF0sIDgyOiBbMiwgNDRdLCA4MzogWzIsIDQ0XSwgODQ6IFsyLCA0NF0sIDg1OiBbMiwgNDRdLCA4NzogWzIsIDQ0XSB9LCB7IDU0OiBbMSwgMTEwXSB9LCB7IDU0OiBbMiwgODNdLCA2NTogWzIsIDgzXSwgNzI6IFsyLCA4M10sIDgwOiBbMiwgODNdLCA4MTogWzIsIDgzXSwgODI6IFsyLCA4M10sIDgzOiBbMiwgODNdLCA4NDogWzIsIDgzXSwgODU6IFsyLCA4M10gfSwgeyA1NDogWzIsIDg1XSB9LCB7IDU6IFsyLCAxM10sIDE0OiBbMiwgMTNdLCAxNTogWzIsIDEzXSwgMTk6IFsyLCAxM10sIDI5OiBbMiwgMTNdLCAzNDogWzIsIDEzXSwgMzk6IFsyLCAxM10sIDQ0OiBbMiwgMTNdLCA0NzogWzIsIDEzXSwgNDg6IFsyLCAxM10sIDUxOiBbMiwgMTNdLCA1NTogWzIsIDEzXSwgNjA6IFsyLCAxM10gfSwgeyAzODogNTYsIDM5OiBbMSwgNThdLCA0MzogNTcsIDQ0OiBbMSwgNTldLCA0NTogMTEyLCA0NjogMTExLCA0NzogWzIsIDc2XSB9LCB7IDMzOiBbMiwgNzBdLCA0MDogMTEzLCA2NTogWzIsIDcwXSwgNzI6IFsyLCA3MF0sIDc1OiBbMiwgNzBdLCA4MDogWzIsIDcwXSwgODE6IFsyLCA3MF0sIDgyOiBbMiwgNzBdLCA4MzogWzIsIDcwXSwgODQ6IFsyLCA3MF0sIDg1OiBbMiwgNzBdIH0sIHsgNDc6IFsyLCAxOF0gfSwgeyA1OiBbMiwgMTRdLCAxNDogWzIsIDE0XSwgMTU6IFsyLCAxNF0sIDE5OiBbMiwgMTRdLCAyOTogWzIsIDE0XSwgMzQ6IFsyLCAxNF0sIDM5OiBbMiwgMTRdLCA0NDogWzIsIDE0XSwgNDc6IFsyLCAxNF0sIDQ4OiBbMiwgMTRdLCA1MTogWzIsIDE0XSwgNTU6IFsyLCAxNF0sIDYwOiBbMiwgMTRdIH0sIHsgMzM6IFsxLCAxMTRdIH0sIHsgMzM6IFsyLCA4N10sIDY1OiBbMiwgODddLCA3MjogWzIsIDg3XSwgODA6IFsyLCA4N10sIDgxOiBbMiwgODddLCA4MjogWzIsIDg3XSwgODM6IFsyLCA4N10sIDg0OiBbMiwgODddLCA4NTogWzIsIDg3XSB9LCB7IDMzOiBbMiwgODldIH0sIHsgMjA6IDc1LCA2MzogMTE2LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2NzogMTE1LCA2ODogWzIsIDk2XSwgNjk6IDExNywgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsxLCAxMThdIH0sIHsgMzI6IDExOSwgMzM6IFsyLCA2Ml0sIDc0OiAxMjAsIDc1OiBbMSwgMTIxXSB9LCB7IDMzOiBbMiwgNTldLCA2NTogWzIsIDU5XSwgNzI6IFsyLCA1OV0sIDc1OiBbMiwgNTldLCA4MDogWzIsIDU5XSwgODE6IFsyLCA1OV0sIDgyOiBbMiwgNTldLCA4MzogWzIsIDU5XSwgODQ6IFsyLCA1OV0sIDg1OiBbMiwgNTldIH0sIHsgMzM6IFsyLCA2MV0sIDc1OiBbMiwgNjFdIH0sIHsgMzM6IFsyLCA2OF0sIDM3OiAxMjIsIDc0OiAxMjMsIDc1OiBbMSwgMTIxXSB9LCB7IDMzOiBbMiwgNjVdLCA2NTogWzIsIDY1XSwgNzI6IFsyLCA2NV0sIDc1OiBbMiwgNjVdLCA4MDogWzIsIDY1XSwgODE6IFsyLCA2NV0sIDgyOiBbMiwgNjVdLCA4MzogWzIsIDY1XSwgODQ6IFsyLCA2NV0sIDg1OiBbMiwgNjVdIH0sIHsgMzM6IFsyLCA2N10sIDc1OiBbMiwgNjddIH0sIHsgMjM6IFsxLCAxMjRdIH0sIHsgMjM6IFsyLCA1MV0sIDY1OiBbMiwgNTFdLCA3MjogWzIsIDUxXSwgODA6IFsyLCA1MV0sIDgxOiBbMiwgNTFdLCA4MjogWzIsIDUxXSwgODM6IFsyLCA1MV0sIDg0OiBbMiwgNTFdLCA4NTogWzIsIDUxXSB9LCB7IDIzOiBbMiwgNTNdIH0sIHsgMzM6IFsxLCAxMjVdIH0sIHsgMzM6IFsyLCA5MV0sIDY1OiBbMiwgOTFdLCA3MjogWzIsIDkxXSwgODA6IFsyLCA5MV0sIDgxOiBbMiwgOTFdLCA4MjogWzIsIDkxXSwgODM6IFsyLCA5MV0sIDg0OiBbMiwgOTFdLCA4NTogWzIsIDkxXSB9LCB7IDMzOiBbMiwgOTNdIH0sIHsgNTogWzIsIDIyXSwgMTQ6IFsyLCAyMl0sIDE1OiBbMiwgMjJdLCAxOTogWzIsIDIyXSwgMjk6IFsyLCAyMl0sIDM0OiBbMiwgMjJdLCAzOTogWzIsIDIyXSwgNDQ6IFsyLCAyMl0sIDQ3OiBbMiwgMjJdLCA0ODogWzIsIDIyXSwgNTE6IFsyLCAyMl0sIDU1OiBbMiwgMjJdLCA2MDogWzIsIDIyXSB9LCB7IDIzOiBbMiwgOTldLCAzMzogWzIsIDk5XSwgNTQ6IFsyLCA5OV0sIDY4OiBbMiwgOTldLCA3MjogWzIsIDk5XSwgNzU6IFsyLCA5OV0gfSwgeyA3MzogWzEsIDEwOV0gfSwgeyAyMDogNzUsIDYzOiAxMjYsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNTogWzIsIDIzXSwgMTQ6IFsyLCAyM10sIDE1OiBbMiwgMjNdLCAxOTogWzIsIDIzXSwgMjk6IFsyLCAyM10sIDM0OiBbMiwgMjNdLCAzOTogWzIsIDIzXSwgNDQ6IFsyLCAyM10sIDQ3OiBbMiwgMjNdLCA0ODogWzIsIDIzXSwgNTE6IFsyLCAyM10sIDU1OiBbMiwgMjNdLCA2MDogWzIsIDIzXSB9LCB7IDQ3OiBbMiwgMTldIH0sIHsgNDc6IFsyLCA3N10gfSwgeyAyMDogNzUsIDMzOiBbMiwgNzJdLCA0MTogMTI3LCA2MzogMTI4LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTI5LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc1OiBbMiwgNzJdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNTogWzIsIDI0XSwgMTQ6IFsyLCAyNF0sIDE1OiBbMiwgMjRdLCAxOTogWzIsIDI0XSwgMjk6IFsyLCAyNF0sIDM0OiBbMiwgMjRdLCAzOTogWzIsIDI0XSwgNDQ6IFsyLCAyNF0sIDQ3OiBbMiwgMjRdLCA0ODogWzIsIDI0XSwgNTE6IFsyLCAyNF0sIDU1OiBbMiwgMjRdLCA2MDogWzIsIDI0XSB9LCB7IDY4OiBbMSwgMTMwXSB9LCB7IDY1OiBbMiwgOTVdLCA2ODogWzIsIDk1XSwgNzI6IFsyLCA5NV0sIDgwOiBbMiwgOTVdLCA4MTogWzIsIDk1XSwgODI6IFsyLCA5NV0sIDgzOiBbMiwgOTVdLCA4NDogWzIsIDk1XSwgODU6IFsyLCA5NV0gfSwgeyA2ODogWzIsIDk3XSB9LCB7IDU6IFsyLCAyMV0sIDE0OiBbMiwgMjFdLCAxNTogWzIsIDIxXSwgMTk6IFsyLCAyMV0sIDI5OiBbMiwgMjFdLCAzNDogWzIsIDIxXSwgMzk6IFsyLCAyMV0sIDQ0OiBbMiwgMjFdLCA0NzogWzIsIDIxXSwgNDg6IFsyLCAyMV0sIDUxOiBbMiwgMjFdLCA1NTogWzIsIDIxXSwgNjA6IFsyLCAyMV0gfSwgeyAzMzogWzEsIDEzMV0gfSwgeyAzMzogWzIsIDYzXSB9LCB7IDcyOiBbMSwgMTMzXSwgNzY6IDEzMiB9LCB7IDMzOiBbMSwgMTM0XSB9LCB7IDMzOiBbMiwgNjldIH0sIHsgMTU6IFsyLCAxMl0gfSwgeyAxNDogWzIsIDI2XSwgMTU6IFsyLCAyNl0sIDE5OiBbMiwgMjZdLCAyOTogWzIsIDI2XSwgMzQ6IFsyLCAyNl0sIDQ3OiBbMiwgMjZdLCA0ODogWzIsIDI2XSwgNTE6IFsyLCAyNl0sIDU1OiBbMiwgMjZdLCA2MDogWzIsIDI2XSB9LCB7IDIzOiBbMiwgMzFdLCAzMzogWzIsIDMxXSwgNTQ6IFsyLCAzMV0sIDY4OiBbMiwgMzFdLCA3MjogWzIsIDMxXSwgNzU6IFsyLCAzMV0gfSwgeyAzMzogWzIsIDc0XSwgNDI6IDEzNSwgNzQ6IDEzNiwgNzU6IFsxLCAxMjFdIH0sIHsgMzM6IFsyLCA3MV0sIDY1OiBbMiwgNzFdLCA3MjogWzIsIDcxXSwgNzU6IFsyLCA3MV0sIDgwOiBbMiwgNzFdLCA4MTogWzIsIDcxXSwgODI6IFsyLCA3MV0sIDgzOiBbMiwgNzFdLCA4NDogWzIsIDcxXSwgODU6IFsyLCA3MV0gfSwgeyAzMzogWzIsIDczXSwgNzU6IFsyLCA3M10gfSwgeyAyMzogWzIsIDI5XSwgMzM6IFsyLCAyOV0sIDU0OiBbMiwgMjldLCA2NTogWzIsIDI5XSwgNjg6IFsyLCAyOV0sIDcyOiBbMiwgMjldLCA3NTogWzIsIDI5XSwgODA6IFsyLCAyOV0sIDgxOiBbMiwgMjldLCA4MjogWzIsIDI5XSwgODM6IFsyLCAyOV0sIDg0OiBbMiwgMjldLCA4NTogWzIsIDI5XSB9LCB7IDE0OiBbMiwgMTVdLCAxNTogWzIsIDE1XSwgMTk6IFsyLCAxNV0sIDI5OiBbMiwgMTVdLCAzNDogWzIsIDE1XSwgMzk6IFsyLCAxNV0sIDQ0OiBbMiwgMTVdLCA0NzogWzIsIDE1XSwgNDg6IFsyLCAxNV0sIDUxOiBbMiwgMTVdLCA1NTogWzIsIDE1XSwgNjA6IFsyLCAxNV0gfSwgeyA3MjogWzEsIDEzOF0sIDc3OiBbMSwgMTM3XSB9LCB7IDcyOiBbMiwgMTAwXSwgNzc6IFsyLCAxMDBdIH0sIHsgMTQ6IFsyLCAxNl0sIDE1OiBbMiwgMTZdLCAxOTogWzIsIDE2XSwgMjk6IFsyLCAxNl0sIDM0OiBbMiwgMTZdLCA0NDogWzIsIDE2XSwgNDc6IFsyLCAxNl0sIDQ4OiBbMiwgMTZdLCA1MTogWzIsIDE2XSwgNTU6IFsyLCAxNl0sIDYwOiBbMiwgMTZdIH0sIHsgMzM6IFsxLCAxMzldIH0sIHsgMzM6IFsyLCA3NV0gfSwgeyAzMzogWzIsIDMyXSB9LCB7IDcyOiBbMiwgMTAxXSwgNzc6IFsyLCAxMDFdIH0sIHsgMTQ6IFsyLCAxN10sIDE1OiBbMiwgMTddLCAxOTogWzIsIDE3XSwgMjk6IFsyLCAxN10sIDM0OiBbMiwgMTddLCAzOTogWzIsIDE3XSwgNDQ6IFsyLCAxN10sIDQ3OiBbMiwgMTddLCA0ODogWzIsIDE3XSwgNTE6IFsyLCAxN10sIDU1OiBbMiwgMTddLCA2MDogWzIsIDE3XSB9XSxcblx0ICAgICAgICBkZWZhdWx0QWN0aW9uczogeyA0OiBbMiwgMV0sIDU1OiBbMiwgNTVdLCA1NzogWzIsIDIwXSwgNjE6IFsyLCA1N10sIDc0OiBbMiwgODFdLCA4MzogWzIsIDg1XSwgODc6IFsyLCAxOF0sIDkxOiBbMiwgODldLCAxMDI6IFsyLCA1M10sIDEwNTogWzIsIDkzXSwgMTExOiBbMiwgMTldLCAxMTI6IFsyLCA3N10sIDExNzogWzIsIDk3XSwgMTIwOiBbMiwgNjNdLCAxMjM6IFsyLCA2OV0sIDEyNDogWzIsIDEyXSwgMTM2OiBbMiwgNzVdLCAxMzc6IFsyLCAzMl0gfSxcblx0ICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuXHQgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG5cdCAgICAgICAgICAgICAgICBzdGFjayA9IFswXSxcblx0ICAgICAgICAgICAgICAgIHZzdGFjayA9IFtudWxsXSxcblx0ICAgICAgICAgICAgICAgIGxzdGFjayA9IFtdLFxuXHQgICAgICAgICAgICAgICAgdGFibGUgPSB0aGlzLnRhYmxlLFxuXHQgICAgICAgICAgICAgICAgeXl0ZXh0ID0gXCJcIixcblx0ICAgICAgICAgICAgICAgIHl5bGluZW5vID0gMCxcblx0ICAgICAgICAgICAgICAgIHl5bGVuZyA9IDAsXG5cdCAgICAgICAgICAgICAgICByZWNvdmVyaW5nID0gMCxcblx0ICAgICAgICAgICAgICAgIFRFUlJPUiA9IDIsXG5cdCAgICAgICAgICAgICAgICBFT0YgPSAxO1xuXHQgICAgICAgICAgICB0aGlzLmxleGVyLnNldElucHV0KGlucHV0KTtcblx0ICAgICAgICAgICAgdGhpcy5sZXhlci55eSA9IHRoaXMueXk7XG5cdCAgICAgICAgICAgIHRoaXMueXkubGV4ZXIgPSB0aGlzLmxleGVyO1xuXHQgICAgICAgICAgICB0aGlzLnl5LnBhcnNlciA9IHRoaXM7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5sZXhlci55eWxsb2MgPT0gXCJ1bmRlZmluZWRcIikgdGhpcy5sZXhlci55eWxsb2MgPSB7fTtcblx0ICAgICAgICAgICAgdmFyIHl5bG9jID0gdGhpcy5sZXhlci55eWxsb2M7XG5cdCAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5bG9jKTtcblx0ICAgICAgICAgICAgdmFyIHJhbmdlcyA9IHRoaXMubGV4ZXIub3B0aW9ucyAmJiB0aGlzLmxleGVyLm9wdGlvbnMucmFuZ2VzO1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMueXkucGFyc2VFcnJvciA9PT0gXCJmdW5jdGlvblwiKSB0aGlzLnBhcnNlRXJyb3IgPSB0aGlzLnl5LnBhcnNlRXJyb3I7XG5cdCAgICAgICAgICAgIGZ1bmN0aW9uIHBvcFN0YWNrKG4pIHtcblx0ICAgICAgICAgICAgICAgIHN0YWNrLmxlbmd0aCA9IHN0YWNrLmxlbmd0aCAtIDIgKiBuO1xuXHQgICAgICAgICAgICAgICAgdnN0YWNrLmxlbmd0aCA9IHZzdGFjay5sZW5ndGggLSBuO1xuXHQgICAgICAgICAgICAgICAgbHN0YWNrLmxlbmd0aCA9IGxzdGFjay5sZW5ndGggLSBuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGZ1bmN0aW9uIGxleCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciB0b2tlbjtcblx0ICAgICAgICAgICAgICAgIHRva2VuID0gc2VsZi5sZXhlci5sZXgoKSB8fCAxO1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gXCJudW1iZXJcIikge1xuXHQgICAgICAgICAgICAgICAgICAgIHRva2VuID0gc2VsZi5zeW1ib2xzX1t0b2tlbl0gfHwgdG9rZW47XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdmFyIHN5bWJvbCxcblx0ICAgICAgICAgICAgICAgIHByZUVycm9yU3ltYm9sLFxuXHQgICAgICAgICAgICAgICAgc3RhdGUsXG5cdCAgICAgICAgICAgICAgICBhY3Rpb24sXG5cdCAgICAgICAgICAgICAgICBhLFxuXHQgICAgICAgICAgICAgICAgcixcblx0ICAgICAgICAgICAgICAgIHl5dmFsID0ge30sXG5cdCAgICAgICAgICAgICAgICBwLFxuXHQgICAgICAgICAgICAgICAgbGVuLFxuXHQgICAgICAgICAgICAgICAgbmV3U3RhdGUsXG5cdCAgICAgICAgICAgICAgICBleHBlY3RlZDtcblx0ICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcblx0ICAgICAgICAgICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV0pIHtcblx0ICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gbnVsbCB8fCB0eXBlb2Ygc3ltYm9sID09IFwidW5kZWZpbmVkXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gbGV4KCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRhYmxlW3N0YXRlXSAmJiB0YWJsZVtzdGF0ZV1bc3ltYm9sXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZXJyU3RyID0gXCJcIjtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIXJlY292ZXJpbmcpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwIGluIHRhYmxlW3N0YXRlXSkgaWYgKHRoaXMudGVybWluYWxzX1twXSAmJiBwID4gMikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQucHVzaChcIidcIiArIHRoaXMudGVybWluYWxzX1twXSArIFwiJ1wiKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXhlci5zaG93UG9zaXRpb24pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6XFxuXCIgKyB0aGlzLmxleGVyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOiBVbmV4cGVjdGVkIFwiICsgKHN5bWJvbCA9PSAxID8gXCJlbmQgb2YgaW5wdXRcIiA6IFwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVyclN0ciwgeyB0ZXh0OiB0aGlzLmxleGVyLm1hdGNoLCB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sLCBsaW5lOiB0aGlzLmxleGVyLnl5bGluZW5vLCBsb2M6IHl5bG9jLCBleHBlY3RlZDogZXhwZWN0ZWQgfSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKGFjdGlvblswXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFjdGlvbi5sZW5ndGggPiAxKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2UgRXJyb3I6IG11bHRpcGxlIGFjdGlvbnMgcG9zc2libGUgYXQgc3RhdGU6IFwiICsgc3RhdGUgKyBcIiwgdG9rZW46IFwiICsgc3ltYm9sKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uWzBdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN5bWJvbCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZzdGFjay5wdXNoKHRoaXMubGV4ZXIueXl0ZXh0KTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbHN0YWNrLnB1c2godGhpcy5sZXhlci55eWxsb2MpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGFjdGlvblsxXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IG51bGw7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJlRXJyb3JTeW1ib2wpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGVuZyA9IHRoaXMubGV4ZXIueXlsZW5nO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXl0ZXh0ID0gdGhpcy5sZXhlci55eXRleHQ7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxpbmVubyA9IHRoaXMubGV4ZXIueXlsaW5lbm87XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxvYyA9IHRoaXMubGV4ZXIueXlsbG9jO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY292ZXJpbmcgPiAwKSByZWNvdmVyaW5nLS07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBwcmVFcnJvclN5bWJvbDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZUVycm9yU3ltYm9sID0gbnVsbDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHl5dmFsLiQgPSB2c3RhY2tbdnN0YWNrLmxlbmd0aCAtIGxlbl07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHl5dmFsLl8kID0geyBmaXJzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2xpbmUsIGxhc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2xpbmUsIGZpcnN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9jb2x1bW4sIGxhc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfY29sdW1uIH07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dmFsLl8kLnJhbmdlID0gW2xzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0ucmFuZ2VbMF0sIGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ucmFuZ2VbMV1dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh5eXZhbCwgeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB0aGlzLnl5LCBhY3Rpb25bMV0sIHZzdGFjaywgbHN0YWNrKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKDAsIC0xICogbGVuICogMik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2c3RhY2sgPSB2c3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHN0YWNrID0gbHN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2c3RhY2sucHVzaCh5eXZhbC4kKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbHN0YWNrLnB1c2goeXl2YWwuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZSA9IHRhYmxlW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDJdXVtzdGFja1tzdGFjay5sZW5ndGggLSAxXV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3U3RhdGUpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKiBKaXNvbiBnZW5lcmF0ZWQgbGV4ZXIgKi9cblx0ICAgIHZhciBsZXhlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIGxleGVyID0geyBFT0Y6IDEsXG5cdCAgICAgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKHN0ciwgaGFzaCk7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBzZXRJbnB1dDogZnVuY3Rpb24gc2V0SW5wdXQoaW5wdXQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gdGhpcy5fbGVzcyA9IHRoaXMuZG9uZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxpbmVubyA9IHRoaXMueXlsZW5nID0gMDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9ICcnO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjayA9IFsnSU5JVElBTCddO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IDEsIGZpcnN0X2NvbHVtbjogMCwgbGFzdF9saW5lOiAxLCBsYXN0X2NvbHVtbjogMCB9O1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlID0gWzAsIDBdO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiBpbnB1dCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBjaCA9IHRoaXMuX2lucHV0WzBdO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgKz0gY2g7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGVuZysrO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQrKztcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggKz0gY2g7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gY2g7XG5cdCAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBjaC5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG5cdCAgICAgICAgICAgICAgICBpZiAobGluZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vKys7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9saW5lKys7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKys7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcblxuXHQgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBjaDtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgdW5wdXQ6IGZ1bmN0aW9uIHVucHV0KGNoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbGVuID0gY2gubGVuZ3RoO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcblxuXHQgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSBjaCArIHRoaXMuX2lucHV0O1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLnl5dGV4dC5zdWJzdHIoMCwgdGhpcy55eXRleHQubGVuZ3RoIC0gbGVuIC0gMSk7XG5cdCAgICAgICAgICAgICAgICAvL3RoaXMueXlsZW5nIC09IGxlbjtcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0IC09IGxlbjtcblx0ICAgICAgICAgICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSB0aGlzLm1hdGNoLnN1YnN0cigwLCB0aGlzLm1hdGNoLmxlbmd0aCAtIDEpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gMSk7XG5cblx0ICAgICAgICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggLSAxKSB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG5cdCAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuXG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcblx0ICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuXHQgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uLFxuXHQgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cblx0ICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbGVuXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBtb3JlOiBmdW5jdGlvbiBtb3JlKCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbGVzczogZnVuY3Rpb24gbGVzcyhuKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBwYXN0SW5wdXQ6IGZ1bmN0aW9uIHBhc3RJbnB1dCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwYXN0ID0gdGhpcy5tYXRjaGVkLnN1YnN0cigwLCB0aGlzLm1hdGNoZWQubGVuZ3RoIC0gdGhpcy5tYXRjaC5sZW5ndGgpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIChwYXN0Lmxlbmd0aCA+IDIwID8gJy4uLicgOiAnJykgKyBwYXN0LnN1YnN0cigtMjApLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgdXBjb21pbmdJbnB1dDogZnVuY3Rpb24gdXBjb21pbmdJbnB1dCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gdGhpcy5tYXRjaDtcblx0ICAgICAgICAgICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbmV4dCArPSB0aGlzLl9pbnB1dC5zdWJzdHIoMCwgMjAgLSBuZXh0Lmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gKG5leHQuc3Vic3RyKDAsIDIwKSArIChuZXh0Lmxlbmd0aCA+IDIwID8gJy4uLicgOiAnJykpLnJlcGxhY2UoL1xcbi9nLCBcIlwiKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgc2hvd1Bvc2l0aW9uOiBmdW5jdGlvbiBzaG93UG9zaXRpb24oKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcHJlID0gdGhpcy5wYXN0SW5wdXQoKTtcblx0ICAgICAgICAgICAgICAgIHZhciBjID0gbmV3IEFycmF5KHByZS5sZW5ndGggKyAxKS5qb2luKFwiLVwiKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnB1dCkgdGhpcy5kb25lID0gdHJ1ZTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHRva2VuLCBtYXRjaCwgdGVtcE1hdGNoLCBpbmRleCwgY29sLCBsaW5lcztcblx0ICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbW9yZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ID0gJyc7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCA9ICcnO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gdGhpcy5fY3VycmVudFJ1bGVzKCk7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGVtcE1hdGNoID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tydWxlc1tpXV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wTWF0Y2ggJiYgKCFtYXRjaCB8fCB0ZW1wTWF0Y2hbMF0ubGVuZ3RoID4gbWF0Y2hbMF0ubGVuZ3RoKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5mbGV4KSBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcblx0ICAgICAgICAgICAgICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAobGluZXMpIHRoaXMueXlsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aCAtIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLm1hdGNoKC9cXHI/XFxuPy8pWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uICsgbWF0Y2hbMF0ubGVuZ3RoIH07XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBtYXRjaDtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCArPSBtYXRjaFswXTtcblx0ICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHRoaXMsIHRoaXMueXksIHRoaXMsIHJ1bGVzW2luZGV4XSwgdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB0aGlzLmRvbmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4pIHJldHVybiB0b2tlbjtlbHNlIHJldHVybjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbnB1dCA9PT0gXCJcIikge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcignTGV4aWNhbCBlcnJvciBvbiBsaW5lICcgKyAodGhpcy55eWxpbmVubyArIDEpICsgJy4gVW5yZWNvZ25pemVkIHRleHQuXFxuJyArIHRoaXMuc2hvd1Bvc2l0aW9uKCksIHsgdGV4dDogXCJcIiwgdG9rZW46IG51bGwsIGxpbmU6IHRoaXMueXlsaW5lbm8gfSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGxleDogZnVuY3Rpb24gbGV4KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLm5leHQoKTtcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChjb25kaXRpb24pO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBwb3BTdGF0ZTogZnVuY3Rpb24gcG9wU3RhdGUoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgX2N1cnJlbnRSdWxlczogZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNbdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdXS5ydWxlcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgdG9wU3RhdGU6IGZ1bmN0aW9uIHRvcFN0YXRlKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAyXTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oY29uZGl0aW9uKTtcblx0ICAgICAgICAgICAgfSB9O1xuXHQgICAgICAgIGxleGVyLm9wdGlvbnMgPSB7fTtcblx0ICAgICAgICBsZXhlci5wZXJmb3JtQWN0aW9uID0gZnVuY3Rpb24gYW5vbnltb3VzKHl5LCB5eV8sICRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMsIFlZX1NUQVJUKSB7XG5cblx0ICAgICAgICAgICAgZnVuY3Rpb24gc3RyaXAoc3RhcnQsIGVuZCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnN1YnN0cihzdGFydCwgeXlfLnl5bGVuZyAtIGVuZCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICB2YXIgWVlTVEFURSA9IFlZX1NUQVJUO1xuXHQgICAgICAgICAgICBzd2l0Y2ggKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgMDpcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeXlfLnl5dGV4dC5zbGljZSgtMikgPT09IFwiXFxcXFxcXFxcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcCgwLCAxKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeXlfLnl5dGV4dC5zbGljZSgtMSkgPT09IFwiXFxcXFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwKDAsIDEpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwiZW11XCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJtdVwiKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHl5Xy55eXRleHQpIHJldHVybiAxNTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbigncmF3Jyk7cmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgdXNpbmcgYHRoaXMudG9wU3RhdGUoKWAgYmVsb3csIGJ1dCBpdCBjdXJyZW50bHlcblx0ICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5zIHRoZSBzZWNvbmQgdG9wIGluc3RlYWQgb2YgdGhlIGZpcnN0IHRvcC4gT3BlbmVkIGFuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWUgYWJvdXQgaXQgYXQgaHR0cHM6Ly9naXRodWIuY29tL3phYWNoL2ppc29uL2lzc3Vlcy8yOTFcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDFdID09PSAncmF3Jykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKDUsIHl5Xy55eWxlbmcgLSA5KTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdFTkRfUkFXX0JMT0NLJztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNDtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2NTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE5O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbigncmF3Jyk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDIzO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDExOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA1NTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTI6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDYwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE0OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA0Nztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO3JldHVybiA0NDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO3JldHVybiA0NDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxODpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMzk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE5OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA1MTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjA6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnVucHV0KHl5Xy55eXRleHQpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdjb20nKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE0O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA0ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDczO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI2OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg3O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyODpcblx0ICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgd2hpdGVzcGFjZVxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDU0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDMzO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMTpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0gc3RyaXAoMSwgMikucmVwbGFjZSgvXFxcXFwiL2csICdcIicpO3JldHVybiA4MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzI6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHN0cmlwKDEsIDIpLnJlcGxhY2UoL1xcXFwnL2csIFwiJ1wiKTtyZXR1cm4gODA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4NTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM2OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzODpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODE7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM5OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3NTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDA6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc3O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQyOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnJlcGxhY2UoL1xcXFwoW1xcXFxcXF1dKS9nLCAnJDEnKTtyZXR1cm4gNzI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAnSU5WQUxJRCc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBsZXhlci5ydWxlcyA9IFsvXig/OlteXFx4MDBdKj8oPz0oXFx7XFx7KSkpLywgL14oPzpbXlxceDAwXSspLywgL14oPzpbXlxceDAwXXsyLH0/KD89KFxce1xce3xcXFxcXFx7XFx7fFxcXFxcXFxcXFx7XFx7fCQpKSkvLCAvXig/Olxce1xce1xce1xceyg/PVteXFwvXSkpLywgL14oPzpcXHtcXHtcXHtcXHtcXC9bXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89Wz19XFxzXFwvLl0pXFx9XFx9XFx9XFx9KS8sIC9eKD86W15cXHgwMF0qPyg/PShcXHtcXHtcXHtcXHspKSkvLCAvXig/OltcXHNcXFNdKj8tLSh+KT9cXH1cXH0pLywgL14oPzpcXCgpLywgL14oPzpcXCkpLywgL14oPzpcXHtcXHtcXHtcXHspLywgL14oPzpcXH1cXH1cXH1cXH0pLywgL14oPzpcXHtcXHsofik/PikvLCAvXig/Olxce1xceyh+KT8jPikvLCAvXig/Olxce1xceyh+KT8jXFwqPykvLCAvXig/Olxce1xceyh+KT9cXC8pLywgL14oPzpcXHtcXHsofik/XFxeXFxzKih+KT9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFxzKmVsc2VcXHMqKH4pP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXF4pLywgL14oPzpcXHtcXHsofik/XFxzKmVsc2VcXGIpLywgL14oPzpcXHtcXHsofik/XFx7KS8sIC9eKD86XFx7XFx7KH4pPyYpLywgL14oPzpcXHtcXHsofik/IS0tKS8sIC9eKD86XFx7XFx7KH4pPyFbXFxzXFxTXSo/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xcKj8pLywgL14oPzo9KS8sIC9eKD86XFwuXFwuKS8sIC9eKD86XFwuKD89KFs9fn1cXHNcXC8uKXxdKSkpLywgL14oPzpbXFwvLl0pLywgL14oPzpcXHMrKS8sIC9eKD86XFx9KH4pP1xcfVxcfSkvLCAvXig/Oih+KT9cXH1cXH0pLywgL14oPzpcIihcXFxcW1wiXXxbXlwiXSkqXCIpLywgL14oPzonKFxcXFxbJ118W14nXSkqJykvLCAvXig/OkApLywgL14oPzp0cnVlKD89KFt+fVxccyldKSkpLywgL14oPzpmYWxzZSg/PShbfn1cXHMpXSkpKS8sIC9eKD86dW5kZWZpbmVkKD89KFt+fVxccyldKSkpLywgL14oPzpudWxsKD89KFt+fVxccyldKSkpLywgL14oPzotP1swLTldKyg/OlxcLlswLTldKyk/KD89KFt+fVxccyldKSkpLywgL14oPzphc1xccytcXHwpLywgL14oPzpcXHwpLywgL14oPzooW15cXHMhXCIjJS0sXFwuXFwvOy0+QFxcWy1cXF5gXFx7LX5dKyg/PShbPX59XFxzXFwvLil8XSkpKSkvLCAvXig/OlxcWyhcXFxcXFxdfFteXFxdXSkqXFxdKS8sIC9eKD86LikvLCAvXig/OiQpL107XG5cdCAgICAgICAgbGV4ZXIuY29uZGl0aW9ucyA9IHsgXCJtdVwiOiB7IFwicnVsZXNcIjogWzcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NF0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiZW11XCI6IHsgXCJydWxlc1wiOiBbMl0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiY29tXCI6IHsgXCJydWxlc1wiOiBbNl0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwicmF3XCI6IHsgXCJydWxlc1wiOiBbMywgNCwgNV0sIFwiaW5jbHVzaXZlXCI6IGZhbHNlIH0sIFwiSU5JVElBTFwiOiB7IFwicnVsZXNcIjogWzAsIDEsIDQ0XSwgXCJpbmNsdXNpdmVcIjogdHJ1ZSB9IH07XG5cdCAgICAgICAgcmV0dXJuIGxleGVyO1xuXHQgICAgfSkoKTtcblx0ICAgIHBhcnNlci5sZXhlciA9IGxleGVyO1xuXHQgICAgZnVuY3Rpb24gUGFyc2VyKCkge1xuXHQgICAgICAgIHRoaXMueXkgPSB7fTtcblx0ICAgIH1QYXJzZXIucHJvdG90eXBlID0gcGFyc2VyO3BhcnNlci5QYXJzZXIgPSBQYXJzZXI7XG5cdCAgICByZXR1cm4gbmV3IFBhcnNlcigpO1xuXHR9KSgpO2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gaGFuZGxlYmFycztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSksXG4vKiAzOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdmlzaXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xuXG5cdHZhciBfdmlzaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92aXNpdG9yKTtcblxuXHRmdW5jdGlvbiBXaGl0ZXNwYWNlQ29udHJvbCgpIHtcblx0ICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG5cdCAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxuXHRXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUgPSBuZXcgX3Zpc2l0b3IyWydkZWZhdWx0J10oKTtcblxuXHRXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUHJvZ3JhbSA9IGZ1bmN0aW9uIChwcm9ncmFtKSB7XG5cdCAgdmFyIGRvU3RhbmRhbG9uZSA9ICF0aGlzLm9wdGlvbnMuaWdub3JlU3RhbmRhbG9uZTtcblxuXHQgIHZhciBpc1Jvb3QgPSAhdGhpcy5pc1Jvb3RTZWVuO1xuXHQgIHRoaXMuaXNSb290U2VlbiA9IHRydWU7XG5cblx0ICB2YXIgYm9keSA9IHByb2dyYW0uYm9keTtcblx0ICBmb3IgKHZhciBpID0gMCwgbCA9IGJvZHkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICB2YXIgY3VycmVudCA9IGJvZHlbaV0sXG5cdCAgICAgICAgc3RyaXAgPSB0aGlzLmFjY2VwdChjdXJyZW50KTtcblxuXHQgICAgaWYgKCFzdHJpcCkge1xuXHQgICAgICBjb250aW51ZTtcblx0ICAgIH1cblxuXHQgICAgdmFyIF9pc1ByZXZXaGl0ZXNwYWNlID0gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpLFxuXHQgICAgICAgIF9pc05leHRXaGl0ZXNwYWNlID0gaXNOZXh0V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpLFxuXHQgICAgICAgIG9wZW5TdGFuZGFsb25lID0gc3RyaXAub3BlblN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UsXG5cdCAgICAgICAgY2xvc2VTdGFuZGFsb25lID0gc3RyaXAuY2xvc2VTdGFuZGFsb25lICYmIF9pc05leHRXaGl0ZXNwYWNlLFxuXHQgICAgICAgIGlubGluZVN0YW5kYWxvbmUgPSBzdHJpcC5pbmxpbmVTdGFuZGFsb25lICYmIF9pc1ByZXZXaGl0ZXNwYWNlICYmIF9pc05leHRXaGl0ZXNwYWNlO1xuXG5cdCAgICBpZiAoc3RyaXAuY2xvc2UpIHtcblx0ICAgICAgb21pdFJpZ2h0KGJvZHksIGksIHRydWUpO1xuXHQgICAgfVxuXHQgICAgaWYgKHN0cmlwLm9wZW4pIHtcblx0ICAgICAgb21pdExlZnQoYm9keSwgaSwgdHJ1ZSk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChkb1N0YW5kYWxvbmUgJiYgaW5saW5lU3RhbmRhbG9uZSkge1xuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XG5cblx0ICAgICAgaWYgKG9taXRMZWZ0KGJvZHksIGkpKSB7XG5cdCAgICAgICAgLy8gSWYgd2UgYXJlIG9uIGEgc3RhbmRhbG9uZSBub2RlLCBzYXZlIHRoZSBpbmRlbnQgaW5mbyBmb3IgcGFydGlhbHNcblx0ICAgICAgICBpZiAoY3VycmVudC50eXBlID09PSAnUGFydGlhbFN0YXRlbWVudCcpIHtcblx0ICAgICAgICAgIC8vIFB1bGwgb3V0IHRoZSB3aGl0ZXNwYWNlIGZyb20gdGhlIGZpbmFsIGxpbmVcblx0ICAgICAgICAgIGN1cnJlbnQuaW5kZW50ID0gLyhbIFxcdF0rJCkvLmV4ZWMoYm9keVtpIC0gMV0ub3JpZ2luYWwpWzFdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBvcGVuU3RhbmRhbG9uZSkge1xuXHQgICAgICBvbWl0UmlnaHQoKGN1cnJlbnQucHJvZ3JhbSB8fCBjdXJyZW50LmludmVyc2UpLmJvZHkpO1xuXG5cdCAgICAgIC8vIFN0cmlwIG91dCB0aGUgcHJldmlvdXMgY29udGVudCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5XG5cdCAgICAgIG9taXRMZWZ0KGJvZHksIGkpO1xuXHQgICAgfVxuXHQgICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBjbG9zZVN0YW5kYWxvbmUpIHtcblx0ICAgICAgLy8gQWx3YXlzIHN0cmlwIHRoZSBuZXh0IG5vZGVcblx0ICAgICAgb21pdFJpZ2h0KGJvZHksIGkpO1xuXG5cdCAgICAgIG9taXRMZWZ0KChjdXJyZW50LmludmVyc2UgfHwgY3VycmVudC5wcm9ncmFtKS5ib2R5KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gcHJvZ3JhbTtcblx0fTtcblxuXHRXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuQmxvY2tTdGF0ZW1lbnQgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuRGVjb3JhdG9yQmxvY2sgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUGFydGlhbEJsb2NrU3RhdGVtZW50ID0gZnVuY3Rpb24gKGJsb2NrKSB7XG5cdCAgdGhpcy5hY2NlcHQoYmxvY2sucHJvZ3JhbSk7XG5cdCAgdGhpcy5hY2NlcHQoYmxvY2suaW52ZXJzZSk7XG5cblx0ICAvLyBGaW5kIHRoZSBpbnZlcnNlIHByb2dyYW0gdGhhdCBpcyBpbnZvbGVkIHdpdGggd2hpdGVzcGFjZSBzdHJpcHBpbmcuXG5cdCAgdmFyIHByb2dyYW0gPSBibG9jay5wcm9ncmFtIHx8IGJsb2NrLmludmVyc2UsXG5cdCAgICAgIGludmVyc2UgPSBibG9jay5wcm9ncmFtICYmIGJsb2NrLmludmVyc2UsXG5cdCAgICAgIGZpcnN0SW52ZXJzZSA9IGludmVyc2UsXG5cdCAgICAgIGxhc3RJbnZlcnNlID0gaW52ZXJzZTtcblxuXHQgIGlmIChpbnZlcnNlICYmIGludmVyc2UuY2hhaW5lZCkge1xuXHQgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZS5ib2R5WzBdLnByb2dyYW07XG5cblx0ICAgIC8vIFdhbGsgdGhlIGludmVyc2UgY2hhaW4gdG8gZmluZCB0aGUgbGFzdCBpbnZlcnNlIHRoYXQgaXMgYWN0dWFsbHkgaW4gdGhlIGNoYWluLlxuXHQgICAgd2hpbGUgKGxhc3RJbnZlcnNlLmNoYWluZWQpIHtcblx0ICAgICAgbGFzdEludmVyc2UgPSBsYXN0SW52ZXJzZS5ib2R5W2xhc3RJbnZlcnNlLmJvZHkubGVuZ3RoIC0gMV0ucHJvZ3JhbTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICB2YXIgc3RyaXAgPSB7XG5cdCAgICBvcGVuOiBibG9jay5vcGVuU3RyaXAub3Blbixcblx0ICAgIGNsb3NlOiBibG9jay5jbG9zZVN0cmlwLmNsb3NlLFxuXG5cdCAgICAvLyBEZXRlcm1pbmUgdGhlIHN0YW5kYWxvbmUgY2FuZGlhY3kuIEJhc2ljYWxseSBmbGFnIG91ciBjb250ZW50IGFzIGJlaW5nIHBvc3NpYmx5IHN0YW5kYWxvbmVcblx0ICAgIC8vIHNvIG91ciBwYXJlbnQgY2FuIGRldGVybWluZSBpZiB3ZSBhY3R1YWxseSBhcmUgc3RhbmRhbG9uZVxuXHQgICAgb3BlblN0YW5kYWxvbmU6IGlzTmV4dFdoaXRlc3BhY2UocHJvZ3JhbS5ib2R5KSxcblx0ICAgIGNsb3NlU3RhbmRhbG9uZTogaXNQcmV2V2hpdGVzcGFjZSgoZmlyc3RJbnZlcnNlIHx8IHByb2dyYW0pLmJvZHkpXG5cdCAgfTtcblxuXHQgIGlmIChibG9jay5vcGVuU3RyaXAuY2xvc2UpIHtcblx0ICAgIG9taXRSaWdodChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuXHQgIH1cblxuXHQgIGlmIChpbnZlcnNlKSB7XG5cdCAgICB2YXIgaW52ZXJzZVN0cmlwID0gYmxvY2suaW52ZXJzZVN0cmlwO1xuXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLm9wZW4pIHtcblx0ICAgICAgb21pdExlZnQocHJvZ3JhbS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGludmVyc2VTdHJpcC5jbG9zZSkge1xuXHQgICAgICBvbWl0UmlnaHQoZmlyc3RJbnZlcnNlLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXHQgICAgaWYgKGJsb2NrLmNsb3NlU3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChsYXN0SW52ZXJzZS5ib2R5LCBudWxsLCB0cnVlKTtcblx0ICAgIH1cblxuXHQgICAgLy8gRmluZCBzdGFuZGFsb25lIGVsc2Ugc3RhdG1lbnRzXG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lICYmIGlzUHJldldoaXRlc3BhY2UocHJvZ3JhbS5ib2R5KSAmJiBpc05leHRXaGl0ZXNwYWNlKGZpcnN0SW52ZXJzZS5ib2R5KSkge1xuXHQgICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHkpO1xuXHQgICAgICBvbWl0UmlnaHQoZmlyc3RJbnZlcnNlLmJvZHkpO1xuXHQgICAgfVxuXHQgIH0gZWxzZSBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XG5cdCAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuXHQgIH1cblxuXHQgIHJldHVybiBzdHJpcDtcblx0fTtcblxuXHRXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuRGVjb3JhdG9yID0gV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLk11c3RhY2hlU3RhdGVtZW50ID0gZnVuY3Rpb24gKG11c3RhY2hlKSB7XG5cdCAgcmV0dXJuIG11c3RhY2hlLnN0cmlwO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5QYXJ0aWFsU3RhdGVtZW50ID0gV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkNvbW1lbnRTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgdmFyIHN0cmlwID0gbm9kZS5zdHJpcCB8fCB7fTtcblx0ICByZXR1cm4ge1xuXHQgICAgaW5saW5lU3RhbmRhbG9uZTogdHJ1ZSxcblx0ICAgIG9wZW46IHN0cmlwLm9wZW4sXG5cdCAgICBjbG9zZTogc3RyaXAuY2xvc2Vcblx0ICB9O1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGlzUHJldldoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSB7XG5cdCAgaWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgaSA9IGJvZHkubGVuZ3RoO1xuXHQgIH1cblxuXHQgIC8vIE5vZGVzIHRoYXQgZW5kIHdpdGggbmV3bGluZXMgYXJlIGNvbnNpZGVyZWQgd2hpdGVzcGFjZSAoYnV0IGFyZSBzcGVjaWFsXG5cdCAgLy8gY2FzZWQgZm9yIHN0cmlwIG9wZXJhdGlvbnMpXG5cdCAgdmFyIHByZXYgPSBib2R5W2kgLSAxXSxcblx0ICAgICAgc2libGluZyA9IGJvZHlbaSAtIDJdO1xuXHQgIGlmICghcHJldikge1xuXHQgICAgcmV0dXJuIGlzUm9vdDtcblx0ICB9XG5cblx0ICBpZiAocHJldi50eXBlID09PSAnQ29udGVudFN0YXRlbWVudCcpIHtcblx0ICAgIHJldHVybiAoc2libGluZyB8fCAhaXNSb290ID8gL1xccj9cXG5cXHMqPyQvIDogLyhefFxccj9cXG4pXFxzKj8kLykudGVzdChwcmV2Lm9yaWdpbmFsKTtcblx0ICB9XG5cdH1cblx0ZnVuY3Rpb24gaXNOZXh0V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcblx0ICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICBpID0gLTE7XG5cdCAgfVxuXG5cdCAgdmFyIG5leHQgPSBib2R5W2kgKyAxXSxcblx0ICAgICAgc2libGluZyA9IGJvZHlbaSArIDJdO1xuXHQgIGlmICghbmV4dCkge1xuXHQgICAgcmV0dXJuIGlzUm9vdDtcblx0ICB9XG5cblx0ICBpZiAobmV4dC50eXBlID09PSAnQ29udGVudFN0YXRlbWVudCcpIHtcblx0ICAgIHJldHVybiAoc2libGluZyB8fCAhaXNSb290ID8gL15cXHMqP1xccj9cXG4vIDogL15cXHMqPyhcXHI/XFxufCQpLykudGVzdChuZXh0Lm9yaWdpbmFsKTtcblx0ICB9XG5cdH1cblxuXHQvLyBNYXJrcyB0aGUgbm9kZSB0byB0aGUgcmlnaHQgb2YgdGhlIHBvc2l0aW9uIGFzIG9taXR0ZWQuXG5cdC8vIEkuZS4ge3tmb299fScgJyB3aWxsIG1hcmsgdGhlICcgJyBub2RlIGFzIG9taXR0ZWQuXG5cdC8vXG5cdC8vIElmIGkgaXMgdW5kZWZpbmVkLCB0aGVuIHRoZSBmaXJzdCBjaGlsZCB3aWxsIGJlIG1hcmtlZCBhcyBzdWNoLlxuXHQvL1xuXHQvLyBJZiBtdWxpdHBsZSBpcyB0cnV0aHkgdGhlbiBhbGwgd2hpdGVzcGFjZSB3aWxsIGJlIHN0cmlwcGVkIG91dCB1bnRpbCBub24td2hpdGVzcGFjZVxuXHQvLyBjb250ZW50IGlzIG1ldC5cblx0ZnVuY3Rpb24gb21pdFJpZ2h0KGJvZHksIGksIG11bHRpcGxlKSB7XG5cdCAgdmFyIGN1cnJlbnQgPSBib2R5W2kgPT0gbnVsbCA/IDAgOiBpICsgMV07XG5cdCAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICFtdWx0aXBsZSAmJiBjdXJyZW50LnJpZ2h0U3RyaXBwZWQpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cblx0ICB2YXIgb3JpZ2luYWwgPSBjdXJyZW50LnZhbHVlO1xuXHQgIGN1cnJlbnQudmFsdWUgPSBjdXJyZW50LnZhbHVlLnJlcGxhY2UobXVsdGlwbGUgPyAvXlxccysvIDogL15bIFxcdF0qXFxyP1xcbj8vLCAnJyk7XG5cdCAgY3VycmVudC5yaWdodFN0cmlwcGVkID0gY3VycmVudC52YWx1ZSAhPT0gb3JpZ2luYWw7XG5cdH1cblxuXHQvLyBNYXJrcyB0aGUgbm9kZSB0byB0aGUgbGVmdCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cblx0Ly8gSS5lLiAnICd7e2Zvb319IHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cblx0Ly9cblx0Ly8gSWYgaSBpcyB1bmRlZmluZWQgdGhlbiB0aGUgbGFzdCBjaGlsZCB3aWxsIGJlIG1hcmtlZCBhcyBzdWNoLlxuXHQvL1xuXHQvLyBJZiBtdWxpdHBsZSBpcyB0cnV0aHkgdGhlbiBhbGwgd2hpdGVzcGFjZSB3aWxsIGJlIHN0cmlwcGVkIG91dCB1bnRpbCBub24td2hpdGVzcGFjZVxuXHQvLyBjb250ZW50IGlzIG1ldC5cblx0ZnVuY3Rpb24gb21pdExlZnQoYm9keSwgaSwgbXVsdGlwbGUpIHtcblx0ICB2YXIgY3VycmVudCA9IGJvZHlbaSA9PSBudWxsID8gYm9keS5sZW5ndGggLSAxIDogaSAtIDFdO1xuXHQgIGlmICghY3VycmVudCB8fCBjdXJyZW50LnR5cGUgIT09ICdDb250ZW50U3RhdGVtZW50JyB8fCAhbXVsdGlwbGUgJiYgY3VycmVudC5sZWZ0U3RyaXBwZWQpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cblx0ICAvLyBXZSBvbWl0IHRoZSBsYXN0IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHkgYW5kIG5vdCBwcmVjZWVkZWQgYnkgYSBub24tY29udGVudCBub2RlLlxuXHQgIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XG5cdCAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/IC9cXHMrJC8gOiAvWyBcXHRdKyQvLCAnJyk7XG5cdCAgY3VycmVudC5sZWZ0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcblx0ICByZXR1cm4gY3VycmVudC5sZWZ0U3RyaXBwZWQ7XG5cdH1cblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBXaGl0ZXNwYWNlQ29udHJvbDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMzkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRmdW5jdGlvbiBWaXNpdG9yKCkge1xuXHQgIHRoaXMucGFyZW50cyA9IFtdO1xuXHR9XG5cblx0VmlzaXRvci5wcm90b3R5cGUgPSB7XG5cdCAgY29uc3RydWN0b3I6IFZpc2l0b3IsXG5cdCAgbXV0YXRpbmc6IGZhbHNlLFxuXG5cdCAgLy8gVmlzaXRzIGEgZ2l2ZW4gdmFsdWUuIElmIG11dGF0aW5nLCB3aWxsIHJlcGxhY2UgdGhlIHZhbHVlIGlmIG5lY2Vzc2FyeS5cblx0ICBhY2NlcHRLZXk6IGZ1bmN0aW9uIGFjY2VwdEtleShub2RlLCBuYW1lKSB7XG5cdCAgICB2YXIgdmFsdWUgPSB0aGlzLmFjY2VwdChub2RlW25hbWVdKTtcblx0ICAgIGlmICh0aGlzLm11dGF0aW5nKSB7XG5cdCAgICAgIC8vIEhhY2t5IHNhbml0eSBjaGVjazogVGhpcyBtYXkgaGF2ZSBhIGZldyBmYWxzZSBwb3NpdGl2ZXMgZm9yIHR5cGUgZm9yIHRoZSBoZWxwZXJcblx0ICAgICAgLy8gbWV0aG9kcyBidXQgd2lsbCBnZW5lcmFsbHkgZG8gdGhlIHJpZ2h0IHRoaW5nIHdpdGhvdXQgYSBsb3Qgb2Ygb3ZlcmhlYWQuXG5cdCAgICAgIGlmICh2YWx1ZSAmJiAhVmlzaXRvci5wcm90b3R5cGVbdmFsdWUudHlwZV0pIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5leHBlY3RlZCBub2RlIHR5cGUgXCInICsgdmFsdWUudHlwZSArICdcIiBmb3VuZCB3aGVuIGFjY2VwdGluZyAnICsgbmFtZSArICcgb24gJyArIG5vZGUudHlwZSk7XG5cdCAgICAgIH1cblx0ICAgICAgbm9kZVtuYW1lXSA9IHZhbHVlO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBQZXJmb3JtcyBhbiBhY2NlcHQgb3BlcmF0aW9uIHdpdGggYWRkZWQgc2FuaXR5IGNoZWNrIHRvIGVuc3VyZVxuXHQgIC8vIHJlcXVpcmVkIGtleXMgYXJlIG5vdCByZW1vdmVkLlxuXHQgIGFjY2VwdFJlcXVpcmVkOiBmdW5jdGlvbiBhY2NlcHRSZXF1aXJlZChub2RlLCBuYW1lKSB7XG5cdCAgICB0aGlzLmFjY2VwdEtleShub2RlLCBuYW1lKTtcblxuXHQgICAgaWYgKCFub2RlW25hbWVdKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKG5vZGUudHlwZSArICcgcmVxdWlyZXMgJyArIG5hbWUpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBUcmF2ZXJzZXMgYSBnaXZlbiBhcnJheS4gSWYgbXV0YXRpbmcsIGVtcHR5IHJlc3Buc2VzIHdpbGwgYmUgcmVtb3ZlZFxuXHQgIC8vIGZvciBjaGlsZCBlbGVtZW50cy5cblx0ICBhY2NlcHRBcnJheTogZnVuY3Rpb24gYWNjZXB0QXJyYXkoYXJyYXkpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIHRoaXMuYWNjZXB0S2V5KGFycmF5LCBpKTtcblxuXHQgICAgICBpZiAoIWFycmF5W2ldKSB7XG5cdCAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgIGktLTtcblx0ICAgICAgICBsLS07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQob2JqZWN0KSB7XG5cdCAgICBpZiAoIW9iamVjdCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBTYW5pdHkgY29kZSAqL1xuXHQgICAgaWYgKCF0aGlzW29iamVjdC50eXBlXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0eXBlOiAnICsgb2JqZWN0LnR5cGUsIG9iamVjdCk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcblx0ICAgICAgdGhpcy5wYXJlbnRzLnVuc2hpZnQodGhpcy5jdXJyZW50KTtcblx0ICAgIH1cblx0ICAgIHRoaXMuY3VycmVudCA9IG9iamVjdDtcblxuXHQgICAgdmFyIHJldCA9IHRoaXNbb2JqZWN0LnR5cGVdKG9iamVjdCk7XG5cblx0ICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFyZW50cy5zaGlmdCgpO1xuXG5cdCAgICBpZiAoIXRoaXMubXV0YXRpbmcgfHwgcmV0KSB7XG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9IGVsc2UgaWYgKHJldCAhPT0gZmFsc2UpIHtcblx0ICAgICAgcmV0dXJuIG9iamVjdDtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgUHJvZ3JhbTogZnVuY3Rpb24gUHJvZ3JhbShwcm9ncmFtKSB7XG5cdCAgICB0aGlzLmFjY2VwdEFycmF5KHByb2dyYW0uYm9keSk7XG5cdCAgfSxcblxuXHQgIE11c3RhY2hlU3RhdGVtZW50OiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cdCAgRGVjb3JhdG9yOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cblx0ICBCbG9ja1N0YXRlbWVudDogdmlzaXRCbG9jayxcblx0ICBEZWNvcmF0b3JCbG9jazogdmlzaXRCbG9jayxcblxuXHQgIFBhcnRpYWxTdGF0ZW1lbnQ6IHZpc2l0UGFydGlhbCxcblx0ICBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uIFBhcnRpYWxCbG9ja1N0YXRlbWVudChwYXJ0aWFsKSB7XG5cdCAgICB2aXNpdFBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsKTtcblxuXHQgICAgdGhpcy5hY2NlcHRLZXkocGFydGlhbCwgJ3Byb2dyYW0nKTtcblx0ICB9LFxuXG5cdCAgQ29udGVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29udGVudFN0YXRlbWVudCgpIC8qIGNvbnRlbnQgKi97fSxcblx0ICBDb21tZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb21tZW50U3RhdGVtZW50KCkgLyogY29tbWVudCAqL3t9LFxuXG5cdCAgU3ViRXhwcmVzc2lvbjogdmlzaXRTdWJFeHByZXNzaW9uLFxuXG5cdCAgUGF0aEV4cHJlc3Npb246IGZ1bmN0aW9uIFBhdGhFeHByZXNzaW9uKCkgLyogcGF0aCAqL3t9LFxuXG5cdCAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24gU3RyaW5nTGl0ZXJhbCgpIC8qIHN0cmluZyAqL3t9LFxuXHQgIE51bWJlckxpdGVyYWw6IGZ1bmN0aW9uIE51bWJlckxpdGVyYWwoKSAvKiBudW1iZXIgKi97fSxcblx0ICBCb29sZWFuTGl0ZXJhbDogZnVuY3Rpb24gQm9vbGVhbkxpdGVyYWwoKSAvKiBib29sICove30sXG5cdCAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24gVW5kZWZpbmVkTGl0ZXJhbCgpIC8qIGxpdGVyYWwgKi97fSxcblx0ICBOdWxsTGl0ZXJhbDogZnVuY3Rpb24gTnVsbExpdGVyYWwoKSAvKiBsaXRlcmFsICove30sXG5cblx0ICBIYXNoOiBmdW5jdGlvbiBIYXNoKGhhc2gpIHtcblx0ICAgIHRoaXMuYWNjZXB0QXJyYXkoaGFzaC5wYWlycyk7XG5cdCAgfSxcblx0ICBIYXNoUGFpcjogZnVuY3Rpb24gSGFzaFBhaXIocGFpcikge1xuXHQgICAgdGhpcy5hY2NlcHRSZXF1aXJlZChwYWlyLCAndmFsdWUnKTtcblx0ICB9XG5cdH07XG5cblx0ZnVuY3Rpb24gdmlzaXRTdWJFeHByZXNzaW9uKG11c3RhY2hlKSB7XG5cdCAgdGhpcy5hY2NlcHRSZXF1aXJlZChtdXN0YWNoZSwgJ3BhdGgnKTtcblx0ICB0aGlzLmFjY2VwdEFycmF5KG11c3RhY2hlLnBhcmFtcyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkobXVzdGFjaGUsICdoYXNoJyk7XG5cdH1cblx0ZnVuY3Rpb24gdmlzaXRCbG9jayhibG9jaykge1xuXHQgIHZpc2l0U3ViRXhwcmVzc2lvbi5jYWxsKHRoaXMsIGJsb2NrKTtcblxuXHQgIHRoaXMuYWNjZXB0S2V5KGJsb2NrLCAncHJvZ3JhbScpO1xuXHQgIHRoaXMuYWNjZXB0S2V5KGJsb2NrLCAnaW52ZXJzZScpO1xuXHR9XG5cdGZ1bmN0aW9uIHZpc2l0UGFydGlhbChwYXJ0aWFsKSB7XG5cdCAgdGhpcy5hY2NlcHRSZXF1aXJlZChwYXJ0aWFsLCAnbmFtZScpO1xuXHQgIHRoaXMuYWNjZXB0QXJyYXkocGFydGlhbC5wYXJhbXMpO1xuXHQgIHRoaXMuYWNjZXB0S2V5KHBhcnRpYWwsICdoYXNoJyk7XG5cdH1cblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBWaXNpdG9yO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA0MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLlNvdXJjZUxvY2F0aW9uID0gU291cmNlTG9jYXRpb247XG5cdGV4cG9ydHMuaWQgPSBpZDtcblx0ZXhwb3J0cy5zdHJpcEZsYWdzID0gc3RyaXBGbGFncztcblx0ZXhwb3J0cy5zdHJpcENvbW1lbnQgPSBzdHJpcENvbW1lbnQ7XG5cdGV4cG9ydHMucHJlcGFyZVBhdGggPSBwcmVwYXJlUGF0aDtcblx0ZXhwb3J0cy5wcmVwYXJlTXVzdGFjaGUgPSBwcmVwYXJlTXVzdGFjaGU7XG5cdGV4cG9ydHMucHJlcGFyZVJhd0Jsb2NrID0gcHJlcGFyZVJhd0Jsb2NrO1xuXHRleHBvcnRzLnByZXBhcmVCbG9jayA9IHByZXBhcmVCbG9jaztcblx0ZXhwb3J0cy5wcmVwYXJlUHJvZ3JhbSA9IHByZXBhcmVQcm9ncmFtO1xuXHRleHBvcnRzLnByZXBhcmVQYXJ0aWFsQmxvY2sgPSBwcmVwYXJlUGFydGlhbEJsb2NrO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGZ1bmN0aW9uIHZhbGlkYXRlQ2xvc2Uob3BlbiwgY2xvc2UpIHtcblx0ICBjbG9zZSA9IGNsb3NlLnBhdGggPyBjbG9zZS5wYXRoLm9yaWdpbmFsIDogY2xvc2U7XG5cblx0ICBpZiAob3Blbi5wYXRoLm9yaWdpbmFsICE9PSBjbG9zZSkge1xuXHQgICAgdmFyIGVycm9yTm9kZSA9IHsgbG9jOiBvcGVuLnBhdGgubG9jIH07XG5cblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKG9wZW4ucGF0aC5vcmlnaW5hbCArIFwiIGRvZXNuJ3QgbWF0Y2ggXCIgKyBjbG9zZSwgZXJyb3JOb2RlKTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBTb3VyY2VMb2NhdGlvbihzb3VyY2UsIGxvY0luZm8pIHtcblx0ICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0ICB0aGlzLnN0YXJ0ID0ge1xuXHQgICAgbGluZTogbG9jSW5mby5maXJzdF9saW5lLFxuXHQgICAgY29sdW1uOiBsb2NJbmZvLmZpcnN0X2NvbHVtblxuXHQgIH07XG5cdCAgdGhpcy5lbmQgPSB7XG5cdCAgICBsaW5lOiBsb2NJbmZvLmxhc3RfbGluZSxcblx0ICAgIGNvbHVtbjogbG9jSW5mby5sYXN0X2NvbHVtblxuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBpZCh0b2tlbikge1xuXHQgIGlmICgvXlxcWy4qXFxdJC8udGVzdCh0b2tlbikpIHtcblx0ICAgIHJldHVybiB0b2tlbi5zdWJzdHIoMSwgdG9rZW4ubGVuZ3RoIC0gMik7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiB0b2tlbjtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBzdHJpcEZsYWdzKG9wZW4sIGNsb3NlKSB7XG5cdCAgcmV0dXJuIHtcblx0ICAgIG9wZW46IG9wZW4uY2hhckF0KDIpID09PSAnficsXG5cdCAgICBjbG9zZTogY2xvc2UuY2hhckF0KGNsb3NlLmxlbmd0aCAtIDMpID09PSAnfidcblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gc3RyaXBDb21tZW50KGNvbW1lbnQpIHtcblx0ICByZXR1cm4gY29tbWVudC5yZXBsYWNlKC9eXFx7XFx7fj8hLT8tPy8sICcnKS5yZXBsYWNlKC8tPy0/fj9cXH1cXH0kLywgJycpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZVBhdGgoZGF0YSwgcGFydHMsIGxvYykge1xuXHQgIGxvYyA9IHRoaXMubG9jSW5mbyhsb2MpO1xuXG5cdCAgdmFyIG9yaWdpbmFsID0gZGF0YSA/ICdAJyA6ICcnLFxuXHQgICAgICBkaWcgPSBbXSxcblx0ICAgICAgZGVwdGggPSAwO1xuXG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIHZhciBwYXJ0ID0gcGFydHNbaV0ucGFydCxcblxuXHQgICAgLy8gSWYgd2UgaGF2ZSBbXSBzeW50YXggdGhlbiB3ZSBkbyBub3QgdHJlYXQgcGF0aCByZWZlcmVuY2VzIGFzIG9wZXJhdG9ycyxcblx0ICAgIC8vIGkuZS4gZm9vLlt0aGlzXSByZXNvbHZlcyB0byBhcHByb3hpbWF0ZWx5IGNvbnRleHQuZm9vWyd0aGlzJ11cblx0ICAgIGlzTGl0ZXJhbCA9IHBhcnRzW2ldLm9yaWdpbmFsICE9PSBwYXJ0O1xuXHQgICAgb3JpZ2luYWwgKz0gKHBhcnRzW2ldLnNlcGFyYXRvciB8fCAnJykgKyBwYXJ0O1xuXG5cdCAgICBpZiAoIWlzTGl0ZXJhbCAmJiAocGFydCA9PT0gJy4uJyB8fCBwYXJ0ID09PSAnLicgfHwgcGFydCA9PT0gJ3RoaXMnKSkge1xuXHQgICAgICBpZiAoZGlnLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnSW52YWxpZCBwYXRoOiAnICsgb3JpZ2luYWwsIHsgbG9jOiBsb2MgfSk7XG5cdCAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuXHQgICAgICAgIGRlcHRoKys7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGRpZy5wdXNoKHBhcnQpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnUGF0aEV4cHJlc3Npb24nLFxuXHQgICAgZGF0YTogZGF0YSxcblx0ICAgIGRlcHRoOiBkZXB0aCxcblx0ICAgIHBhcnRzOiBkaWcsXG5cdCAgICBvcmlnaW5hbDogb3JpZ2luYWwsXG5cdCAgICBsb2M6IGxvY1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlTXVzdGFjaGUocGF0aCwgcGFyYW1zLCBoYXNoLCBvcGVuLCBzdHJpcCwgbG9jSW5mbykge1xuXHQgIC8vIE11c3QgdXNlIGNoYXJBdCB0byBzdXBwb3J0IElFIHByZS0xMFxuXHQgIHZhciBlc2NhcGVGbGFnID0gb3Blbi5jaGFyQXQoMykgfHwgb3Blbi5jaGFyQXQoMiksXG5cdCAgICAgIGVzY2FwZWQgPSBlc2NhcGVGbGFnICE9PSAneycgJiYgZXNjYXBlRmxhZyAhPT0gJyYnO1xuXG5cdCAgdmFyIGRlY29yYXRvciA9IC9cXCovLnRlc3Qob3Blbik7XG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6IGRlY29yYXRvciA/ICdEZWNvcmF0b3InIDogJ011c3RhY2hlU3RhdGVtZW50Jyxcblx0ICAgIHBhdGg6IHBhdGgsXG5cdCAgICBwYXJhbXM6IHBhcmFtcyxcblx0ICAgIGhhc2g6IGhhc2gsXG5cdCAgICBlc2NhcGVkOiBlc2NhcGVkLFxuXHQgICAgc3RyaXA6IHN0cmlwLFxuXHQgICAgbG9jOiB0aGlzLmxvY0luZm8obG9jSW5mbylcblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZVJhd0Jsb2NrKG9wZW5SYXdCbG9jaywgY29udGVudHMsIGNsb3NlLCBsb2NJbmZvKSB7XG5cdCAgdmFsaWRhdGVDbG9zZShvcGVuUmF3QmxvY2ssIGNsb3NlKTtcblxuXHQgIGxvY0luZm8gPSB0aGlzLmxvY0luZm8obG9jSW5mbyk7XG5cdCAgdmFyIHByb2dyYW0gPSB7XG5cdCAgICB0eXBlOiAnUHJvZ3JhbScsXG5cdCAgICBib2R5OiBjb250ZW50cyxcblx0ICAgIHN0cmlwOiB7fSxcblx0ICAgIGxvYzogbG9jSW5mb1xuXHQgIH07XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ0Jsb2NrU3RhdGVtZW50Jyxcblx0ICAgIHBhdGg6IG9wZW5SYXdCbG9jay5wYXRoLFxuXHQgICAgcGFyYW1zOiBvcGVuUmF3QmxvY2sucGFyYW1zLFxuXHQgICAgaGFzaDogb3BlblJhd0Jsb2NrLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgb3BlblN0cmlwOiB7fSxcblx0ICAgIGludmVyc2VTdHJpcDoge30sXG5cdCAgICBjbG9zZVN0cmlwOiB7fSxcblx0ICAgIGxvYzogbG9jSW5mb1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlQmxvY2sob3BlbkJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlQW5kUHJvZ3JhbSwgY2xvc2UsIGludmVydGVkLCBsb2NJbmZvKSB7XG5cdCAgaWYgKGNsb3NlICYmIGNsb3NlLnBhdGgpIHtcblx0ICAgIHZhbGlkYXRlQ2xvc2Uob3BlbkJsb2NrLCBjbG9zZSk7XG5cdCAgfVxuXG5cdCAgdmFyIGRlY29yYXRvciA9IC9cXCovLnRlc3Qob3BlbkJsb2NrLm9wZW4pO1xuXG5cdCAgcHJvZ3JhbS5ibG9ja1BhcmFtcyA9IG9wZW5CbG9jay5ibG9ja1BhcmFtcztcblxuXHQgIHZhciBpbnZlcnNlID0gdW5kZWZpbmVkLFxuXHQgICAgICBpbnZlcnNlU3RyaXAgPSB1bmRlZmluZWQ7XG5cblx0ICBpZiAoaW52ZXJzZUFuZFByb2dyYW0pIHtcblx0ICAgIGlmIChkZWNvcmF0b3IpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1VuZXhwZWN0ZWQgaW52ZXJzZSBibG9jayBvbiBkZWNvcmF0b3InLCBpbnZlcnNlQW5kUHJvZ3JhbSk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpbnZlcnNlQW5kUHJvZ3JhbS5jaGFpbikge1xuXHQgICAgICBpbnZlcnNlQW5kUHJvZ3JhbS5wcm9ncmFtLmJvZHlbMF0uY2xvc2VTdHJpcCA9IGNsb3NlLnN0cmlwO1xuXHQgICAgfVxuXG5cdCAgICBpbnZlcnNlU3RyaXAgPSBpbnZlcnNlQW5kUHJvZ3JhbS5zdHJpcDtcblx0ICAgIGludmVyc2UgPSBpbnZlcnNlQW5kUHJvZ3JhbS5wcm9ncmFtO1xuXHQgIH1cblxuXHQgIGlmIChpbnZlcnRlZCkge1xuXHQgICAgaW52ZXJ0ZWQgPSBpbnZlcnNlO1xuXHQgICAgaW52ZXJzZSA9IHByb2dyYW07XG5cdCAgICBwcm9ncmFtID0gaW52ZXJ0ZWQ7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6IGRlY29yYXRvciA/ICdEZWNvcmF0b3JCbG9jaycgOiAnQmxvY2tTdGF0ZW1lbnQnLFxuXHQgICAgcGF0aDogb3BlbkJsb2NrLnBhdGgsXG5cdCAgICBwYXJhbXM6IG9wZW5CbG9jay5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuQmxvY2suaGFzaCxcblx0ICAgIHByb2dyYW06IHByb2dyYW0sXG5cdCAgICBpbnZlcnNlOiBpbnZlcnNlLFxuXHQgICAgb3BlblN0cmlwOiBvcGVuQmxvY2suc3RyaXAsXG5cdCAgICBpbnZlcnNlU3RyaXA6IGludmVyc2VTdHJpcCxcblx0ICAgIGNsb3NlU3RyaXA6IGNsb3NlICYmIGNsb3NlLnN0cmlwLFxuXHQgICAgbG9jOiB0aGlzLmxvY0luZm8obG9jSW5mbylcblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZVByb2dyYW0oc3RhdGVtZW50cywgbG9jKSB7XG5cdCAgaWYgKCFsb2MgJiYgc3RhdGVtZW50cy5sZW5ndGgpIHtcblx0ICAgIHZhciBmaXJzdExvYyA9IHN0YXRlbWVudHNbMF0ubG9jLFxuXHQgICAgICAgIGxhc3RMb2MgPSBzdGF0ZW1lbnRzW3N0YXRlbWVudHMubGVuZ3RoIC0gMV0ubG9jO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXHQgICAgaWYgKGZpcnN0TG9jICYmIGxhc3RMb2MpIHtcblx0ICAgICAgbG9jID0ge1xuXHQgICAgICAgIHNvdXJjZTogZmlyc3RMb2Muc291cmNlLFxuXHQgICAgICAgIHN0YXJ0OiB7XG5cdCAgICAgICAgICBsaW5lOiBmaXJzdExvYy5zdGFydC5saW5lLFxuXHQgICAgICAgICAgY29sdW1uOiBmaXJzdExvYy5zdGFydC5jb2x1bW5cblx0ICAgICAgICB9LFxuXHQgICAgICAgIGVuZDoge1xuXHQgICAgICAgICAgbGluZTogbGFzdExvYy5lbmQubGluZSxcblx0ICAgICAgICAgIGNvbHVtbjogbGFzdExvYy5lbmQuY29sdW1uXG5cdCAgICAgICAgfVxuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnUHJvZ3JhbScsXG5cdCAgICBib2R5OiBzdGF0ZW1lbnRzLFxuXHQgICAgc3RyaXA6IHt9LFxuXHQgICAgbG9jOiBsb2Ncblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZVBhcnRpYWxCbG9jayhvcGVuLCBwcm9ncmFtLCBjbG9zZSwgbG9jSW5mbykge1xuXHQgIHZhbGlkYXRlQ2xvc2Uob3BlbiwgY2xvc2UpO1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQnLFxuXHQgICAgbmFtZTogb3Blbi5wYXRoLFxuXHQgICAgcGFyYW1zOiBvcGVuLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW4uaGFzaCxcblx0ICAgIHByb2dyYW06IHByb2dyYW0sXG5cdCAgICBvcGVuU3RyaXA6IG9wZW4uc3RyaXAsXG5cdCAgICBjbG9zZVN0cmlwOiBjbG9zZSAmJiBjbG9zZS5zdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDQxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbmV3LWNhcCAqL1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLkNvbXBpbGVyID0gQ29tcGlsZXI7XG5cdGV4cG9ydHMucHJlY29tcGlsZSA9IHByZWNvbXBpbGU7XG5cdGV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9hc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHR2YXIgX2FzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3QpO1xuXG5cdHZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG5cdGZ1bmN0aW9uIENvbXBpbGVyKCkge31cblxuXHQvLyB0aGUgZm91bmRIZWxwZXIgcmVnaXN0ZXIgd2lsbCBkaXNhbWJpZ3VhdGUgaGVscGVyIGxvb2t1cCBmcm9tIGZpbmRpbmcgYVxuXHQvLyBmdW5jdGlvbiBpbiBhIGNvbnRleHQuIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBtdXN0YWNoZSBjb21wYXRpYmlsaXR5LCB3aGljaFxuXHQvLyByZXF1aXJlcyB0aGF0IGNvbnRleHQgZnVuY3Rpb25zIGluIGJsb2NrcyBhcmUgZXZhbHVhdGVkIGJ5IGJsb2NrSGVscGVyTWlzc2luZyxcblx0Ly8gYW5kIHRoZW4gcHJvY2VlZCBhcyBpZiB0aGUgcmVzdWx0aW5nIHZhbHVlIHdhcyBwcm92aWRlZCB0byBibG9ja0hlbHBlck1pc3NpbmcuXG5cblx0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuXHQgIGNvbXBpbGVyOiBDb21waWxlcixcblxuXHQgIGVxdWFsczogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG5cdCAgICB2YXIgbGVuID0gdGhpcy5vcGNvZGVzLmxlbmd0aDtcblx0ICAgIGlmIChvdGhlci5vcGNvZGVzLmxlbmd0aCAhPT0gbGVuKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgb3Bjb2RlID0gdGhpcy5vcGNvZGVzW2ldLFxuXHQgICAgICAgICAgb3RoZXJPcGNvZGUgPSBvdGhlci5vcGNvZGVzW2ldO1xuXHQgICAgICBpZiAob3Bjb2RlLm9wY29kZSAhPT0gb3RoZXJPcGNvZGUub3Bjb2RlIHx8ICFhcmdFcXVhbHMob3Bjb2RlLmFyZ3MsIG90aGVyT3Bjb2RlLmFyZ3MpKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIC8vIFdlIGtub3cgdGhhdCBsZW5ndGggaXMgdGhlIHNhbWUgYmV0d2VlbiB0aGUgdHdvIGFycmF5cyBiZWNhdXNlIHRoZXkgYXJlIGRpcmVjdGx5IHRpZWRcblx0ICAgIC8vIHRvIHRoZSBvcGNvZGUgYmVoYXZpb3IgYWJvdmUuXG5cdCAgICBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2ldLmVxdWFscyhvdGhlci5jaGlsZHJlbltpXSkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSxcblxuXHQgIGd1aWQ6IDAsXG5cblx0ICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKHByb2dyYW0sIG9wdGlvbnMpIHtcblx0ICAgIHRoaXMuc291cmNlTm9kZSA9IFtdO1xuXHQgICAgdGhpcy5vcGNvZGVzID0gW107XG5cdCAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cdCAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHQgICAgdGhpcy5zdHJpbmdQYXJhbXMgPSBvcHRpb25zLnN0cmluZ1BhcmFtcztcblx0ICAgIHRoaXMudHJhY2tJZHMgPSBvcHRpb25zLnRyYWNrSWRzO1xuXG5cdCAgICBvcHRpb25zLmJsb2NrUGFyYW1zID0gb3B0aW9ucy5ibG9ja1BhcmFtcyB8fCBbXTtcblxuXHQgICAgLy8gVGhlc2UgY2hhbmdlcyB3aWxsIHByb3BhZ2F0ZSB0byB0aGUgb3RoZXIgY29tcGlsZXIgY29tcG9uZW50c1xuXHQgICAgdmFyIGtub3duSGVscGVycyA9IG9wdGlvbnMua25vd25IZWxwZXJzO1xuXHQgICAgb3B0aW9ucy5rbm93bkhlbHBlcnMgPSB7XG5cdCAgICAgICdoZWxwZXJNaXNzaW5nJzogdHJ1ZSxcblx0ICAgICAgJ2Jsb2NrSGVscGVyTWlzc2luZyc6IHRydWUsXG5cdCAgICAgICdlYWNoJzogdHJ1ZSxcblx0ICAgICAgJ2lmJzogdHJ1ZSxcblx0ICAgICAgJ3VubGVzcyc6IHRydWUsXG5cdCAgICAgICd3aXRoJzogdHJ1ZSxcblx0ICAgICAgJ2xvZyc6IHRydWUsXG5cdCAgICAgICdsb29rdXAnOiB0cnVlXG5cdCAgICB9O1xuXHQgICAgaWYgKGtub3duSGVscGVycykge1xuXHQgICAgICAvLyB0aGUgbmV4dCBsaW5lIHNob3VsZCB1c2UgXCJPYmplY3Qua2V5c1wiLCBidXQgdGhlIGNvZGUgaGFzIGJlZW4gbGlrZSB0aGlzIGEgbG9uZyB0aW1lIGFuZCBjaGFuZ2luZyBpdCwgbWlnaHRcblx0ICAgICAgLy8gY2F1c2UgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgaXNzdWVzLi4uIEl0J3MgYW4gb2xkIGxpYnJhcnkuLi5cblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuXHQgICAgICBmb3IgKHZhciBfbmFtZSBpbiBrbm93bkhlbHBlcnMpIHtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzW19uYW1lXSA9IGtub3duSGVscGVyc1tfbmFtZV07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuYWNjZXB0KHByb2dyYW0pO1xuXHQgIH0sXG5cblx0ICBjb21waWxlUHJvZ3JhbTogZnVuY3Rpb24gY29tcGlsZVByb2dyYW0ocHJvZ3JhbSkge1xuXHQgICAgdmFyIGNoaWxkQ29tcGlsZXIgPSBuZXcgdGhpcy5jb21waWxlcigpLFxuXHQgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXHQgICAgcmVzdWx0ID0gY2hpbGRDb21waWxlci5jb21waWxlKHByb2dyYW0sIHRoaXMub3B0aW9ucyksXG5cdCAgICAgICAgZ3VpZCA9IHRoaXMuZ3VpZCsrO1xuXG5cdCAgICB0aGlzLnVzZVBhcnRpYWwgPSB0aGlzLnVzZVBhcnRpYWwgfHwgcmVzdWx0LnVzZVBhcnRpYWw7XG5cblx0ICAgIHRoaXMuY2hpbGRyZW5bZ3VpZF0gPSByZXN1bHQ7XG5cdCAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IHJlc3VsdC51c2VEZXB0aHM7XG5cblx0ICAgIHJldHVybiBndWlkO1xuXHQgIH0sXG5cblx0ICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChub2RlKSB7XG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogU2FuaXR5IGNvZGUgKi9cblx0ICAgIGlmICghdGhpc1tub2RlLnR5cGVdKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHR5cGU6ICcgKyBub2RlLnR5cGUsIG5vZGUpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnNvdXJjZU5vZGUudW5zaGlmdChub2RlKTtcblx0ICAgIHZhciByZXQgPSB0aGlzW25vZGUudHlwZV0obm9kZSk7XG5cdCAgICB0aGlzLnNvdXJjZU5vZGUuc2hpZnQoKTtcblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIFByb2dyYW06IGZ1bmN0aW9uIFByb2dyYW0ocHJvZ3JhbSkge1xuXHQgICAgdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnVuc2hpZnQocHJvZ3JhbS5ibG9ja1BhcmFtcyk7XG5cblx0ICAgIHZhciBib2R5ID0gcHJvZ3JhbS5ib2R5LFxuXHQgICAgICAgIGJvZHlMZW5ndGggPSBib2R5Lmxlbmd0aDtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keUxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHRoaXMuYWNjZXB0KGJvZHlbaV0pO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMuc2hpZnQoKTtcblxuXHQgICAgdGhpcy5pc1NpbXBsZSA9IGJvZHlMZW5ndGggPT09IDE7XG5cdCAgICB0aGlzLmJsb2NrUGFyYW1zID0gcHJvZ3JhbS5ibG9ja1BhcmFtcyA/IHByb2dyYW0uYmxvY2tQYXJhbXMubGVuZ3RoIDogMDtcblxuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfSxcblxuXHQgIEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbiBCbG9ja1N0YXRlbWVudChibG9jaykge1xuXHQgICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChibG9jayk7XG5cblx0ICAgIHZhciBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSxcblx0ICAgICAgICBpbnZlcnNlID0gYmxvY2suaW52ZXJzZTtcblxuXHQgICAgcHJvZ3JhbSA9IHByb2dyYW0gJiYgdGhpcy5jb21waWxlUHJvZ3JhbShwcm9ncmFtKTtcblx0ICAgIGludmVyc2UgPSBpbnZlcnNlICYmIHRoaXMuY29tcGlsZVByb2dyYW0oaW52ZXJzZSk7XG5cblx0ICAgIHZhciB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKGJsb2NrKTtcblxuXHQgICAgaWYgKHR5cGUgPT09ICdoZWxwZXInKSB7XG5cdCAgICAgIHRoaXMuaGVscGVyU2V4cHIoYmxvY2ssIHByb2dyYW0sIGludmVyc2UpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuXHQgICAgICB0aGlzLnNpbXBsZVNleHByKGJsb2NrKTtcblxuXHQgICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG5cdCAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2Jsb2NrVmFsdWUnLCBibG9jay5wYXRoLm9yaWdpbmFsKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuYW1iaWd1b3VzU2V4cHIoYmxvY2ssIHByb2dyYW0sIGludmVyc2UpO1xuXG5cdCAgICAgIC8vIG5vdyB0aGF0IHRoZSBzaW1wbGUgbXVzdGFjaGUgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG9cblx0ICAgICAgLy8gZXZhbHVhdGUgaXQgYnkgZXhlY3V0aW5nIGBibG9ja0hlbHBlck1pc3NpbmdgXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2VtcHR5SGFzaCcpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnYW1iaWd1b3VzQmxvY2tWYWx1ZScpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XG5cdCAgfSxcblxuXHQgIERlY29yYXRvckJsb2NrOiBmdW5jdGlvbiBEZWNvcmF0b3JCbG9jayhkZWNvcmF0b3IpIHtcblx0ICAgIHZhciBwcm9ncmFtID0gZGVjb3JhdG9yLnByb2dyYW0gJiYgdGhpcy5jb21waWxlUHJvZ3JhbShkZWNvcmF0b3IucHJvZ3JhbSk7XG5cdCAgICB2YXIgcGFyYW1zID0gdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhkZWNvcmF0b3IsIHByb2dyYW0sIHVuZGVmaW5lZCksXG5cdCAgICAgICAgcGF0aCA9IGRlY29yYXRvci5wYXRoO1xuXG5cdCAgICB0aGlzLnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3JlZ2lzdGVyRGVjb3JhdG9yJywgcGFyYW1zLmxlbmd0aCwgcGF0aC5vcmlnaW5hbCk7XG5cdCAgfSxcblxuXHQgIFBhcnRpYWxTdGF0ZW1lbnQ6IGZ1bmN0aW9uIFBhcnRpYWxTdGF0ZW1lbnQocGFydGlhbCkge1xuXHQgICAgdGhpcy51c2VQYXJ0aWFsID0gdHJ1ZTtcblxuXHQgICAgdmFyIHByb2dyYW0gPSBwYXJ0aWFsLnByb2dyYW07XG5cdCAgICBpZiAocHJvZ3JhbSkge1xuXHQgICAgICBwcm9ncmFtID0gdGhpcy5jb21waWxlUHJvZ3JhbShwYXJ0aWFsLnByb2dyYW0pO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFyYW1zID0gcGFydGlhbC5wYXJhbXM7XG5cdCAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vuc3VwcG9ydGVkIG51bWJlciBvZiBwYXJ0aWFsIGFyZ3VtZW50czogJyArIHBhcmFtcy5sZW5ndGgsIHBhcnRpYWwpO1xuXHQgICAgfSBlbHNlIGlmICghcGFyYW1zLmxlbmd0aCkge1xuXHQgICAgICBpZiAodGhpcy5vcHRpb25zLmV4cGxpY2l0UGFydGlhbENvbnRleHQpIHtcblx0ICAgICAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAndW5kZWZpbmVkJyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcGFyYW1zLnB1c2goeyB0eXBlOiAnUGF0aEV4cHJlc3Npb24nLCBwYXJ0czogW10sIGRlcHRoOiAwIH0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJ0aWFsTmFtZSA9IHBhcnRpYWwubmFtZS5vcmlnaW5hbCxcblx0ICAgICAgICBpc0R5bmFtaWMgPSBwYXJ0aWFsLm5hbWUudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nO1xuXHQgICAgaWYgKGlzRHluYW1pYykge1xuXHQgICAgICB0aGlzLmFjY2VwdChwYXJ0aWFsLm5hbWUpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHBhcnRpYWwsIHByb2dyYW0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cblx0ICAgIHZhciBpbmRlbnQgPSBwYXJ0aWFsLmluZGVudCB8fCAnJztcblx0ICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmVudEluZGVudCAmJiBpbmRlbnQpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBpbmRlbnQpO1xuXHQgICAgICBpbmRlbnQgPSAnJztcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZVBhcnRpYWwnLCBpc0R5bmFtaWMsIHBhcnRpYWxOYW1lLCBpbmRlbnQpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgIH0sXG5cdCAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQocGFydGlhbEJsb2NrKSB7XG5cdCAgICB0aGlzLlBhcnRpYWxTdGF0ZW1lbnQocGFydGlhbEJsb2NrKTtcblx0ICB9LFxuXG5cdCAgTXVzdGFjaGVTdGF0ZW1lbnQ6IGZ1bmN0aW9uIE11c3RhY2hlU3RhdGVtZW50KG11c3RhY2hlKSB7XG5cdCAgICB0aGlzLlN1YkV4cHJlc3Npb24obXVzdGFjaGUpO1xuXG5cdCAgICBpZiAobXVzdGFjaGUuZXNjYXBlZCAmJiAhdGhpcy5vcHRpb25zLm5vRXNjYXBlKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRFc2NhcGVkJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XG5cdCAgICB9XG5cdCAgfSxcblx0ICBEZWNvcmF0b3I6IGZ1bmN0aW9uIERlY29yYXRvcihkZWNvcmF0b3IpIHtcblx0ICAgIHRoaXMuRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKTtcblx0ICB9LFxuXG5cdCAgQ29udGVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29udGVudFN0YXRlbWVudChjb250ZW50KSB7XG5cdCAgICBpZiAoY29udGVudC52YWx1ZSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kQ29udGVudCcsIGNvbnRlbnQudmFsdWUpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBDb21tZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb21tZW50U3RhdGVtZW50KCkge30sXG5cblx0ICBTdWJFeHByZXNzaW9uOiBmdW5jdGlvbiBTdWJFeHByZXNzaW9uKHNleHByKSB7XG5cdCAgICB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKHNleHByKTtcblx0ICAgIHZhciB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKHNleHByKTtcblxuXHQgICAgaWYgKHR5cGUgPT09ICdzaW1wbGUnKSB7XG5cdCAgICAgIHRoaXMuc2ltcGxlU2V4cHIoc2V4cHIpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuXHQgICAgICB0aGlzLmhlbHBlclNleHByKHNleHByKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuYW1iaWd1b3VzU2V4cHIoc2V4cHIpO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgYW1iaWd1b3VzU2V4cHI6IGZ1bmN0aW9uIGFtYmlndW91c1NleHByKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSB7XG5cdCAgICB2YXIgcGF0aCA9IHNleHByLnBhdGgsXG5cdCAgICAgICAgbmFtZSA9IHBhdGgucGFydHNbMF0sXG5cdCAgICAgICAgaXNCbG9jayA9IHByb2dyYW0gIT0gbnVsbCB8fCBpbnZlcnNlICE9IG51bGw7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgcGF0aC5kZXB0aCk7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cblx0ICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgnaW52b2tlQW1iaWd1b3VzJywgbmFtZSwgaXNCbG9jayk7XG5cdCAgfSxcblxuXHQgIHNpbXBsZVNleHByOiBmdW5jdGlvbiBzaW1wbGVTZXhwcihzZXhwcikge1xuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoO1xuXHQgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgdGhpcy5hY2NlcHQocGF0aCk7XG5cdCAgICB0aGlzLm9wY29kZSgncmVzb2x2ZVBvc3NpYmxlTGFtYmRhJyk7XG5cdCAgfSxcblxuXHQgIGhlbHBlclNleHByOiBmdW5jdGlvbiBoZWxwZXJTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSkge1xuXHQgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpLFxuXHQgICAgICAgIHBhdGggPSBzZXhwci5wYXRoLFxuXHQgICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdO1xuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmtub3duSGVscGVyc1tuYW1lXSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnaW52b2tlS25vd25IZWxwZXInLCBwYXJhbXMubGVuZ3RoLCBuYW1lKTtcblx0ICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmtub3duSGVscGVyc09ubHkpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1lvdSBzcGVjaWZpZWQga25vd25IZWxwZXJzT25seSwgYnV0IHVzZWQgdGhlIHVua25vd24gaGVscGVyICcgKyBuYW1lLCBzZXhwcik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICAgIHBhdGguZmFsc3kgPSB0cnVlO1xuXG5cdCAgICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnaW52b2tlSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgcGF0aC5vcmlnaW5hbCwgX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLnNpbXBsZUlkKHBhdGgpKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgUGF0aEV4cHJlc3Npb246IGZ1bmN0aW9uIFBhdGhFeHByZXNzaW9uKHBhdGgpIHtcblx0ICAgIHRoaXMuYWRkRGVwdGgocGF0aC5kZXB0aCk7XG5cdCAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHBhdGguZGVwdGgpO1xuXG5cdCAgICB2YXIgbmFtZSA9IHBhdGgucGFydHNbMF0sXG5cdCAgICAgICAgc2NvcGVkID0gX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLnNjb3BlZElkKHBhdGgpLFxuXHQgICAgICAgIGJsb2NrUGFyYW1JZCA9ICFwYXRoLmRlcHRoICYmICFzY29wZWQgJiYgdGhpcy5ibG9ja1BhcmFtSW5kZXgobmFtZSk7XG5cblx0ICAgIGlmIChibG9ja1BhcmFtSWQpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cEJsb2NrUGFyYW0nLCBibG9ja1BhcmFtSWQsIHBhdGgucGFydHMpO1xuXHQgICAgfSBlbHNlIGlmICghbmFtZSkge1xuXHQgICAgICAvLyBDb250ZXh0IHJlZmVyZW5jZSwgaS5lLiBge3tmb28gLn19YCBvciBge3tmb28gLi59fWBcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hDb250ZXh0Jyk7XG5cdCAgICB9IGVsc2UgaWYgKHBhdGguZGF0YSkge1xuXHQgICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IHRydWU7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBEYXRhJywgcGF0aC5kZXB0aCwgcGF0aC5wYXJ0cywgcGF0aC5zdHJpY3QpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cE9uQ29udGV4dCcsIHBhdGgucGFydHMsIHBhdGguZmFsc3ksIHBhdGguc3RyaWN0LCBzY29wZWQpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBTdHJpbmdMaXRlcmFsOiBmdW5jdGlvbiBTdHJpbmdMaXRlcmFsKHN0cmluZykge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hTdHJpbmcnLCBzdHJpbmcudmFsdWUpO1xuXHQgIH0sXG5cblx0ICBOdW1iZXJMaXRlcmFsOiBmdW5jdGlvbiBOdW1iZXJMaXRlcmFsKG51bWJlcikge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgbnVtYmVyLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgQm9vbGVhbkxpdGVyYWw6IGZ1bmN0aW9uIEJvb2xlYW5MaXRlcmFsKGJvb2wpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIGJvb2wudmFsdWUpO1xuXHQgIH0sXG5cblx0ICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbiBVbmRlZmluZWRMaXRlcmFsKCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuXHQgIH0sXG5cblx0ICBOdWxsTGl0ZXJhbDogZnVuY3Rpb24gTnVsbExpdGVyYWwoKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAnbnVsbCcpO1xuXHQgIH0sXG5cblx0ICBIYXNoOiBmdW5jdGlvbiBIYXNoKGhhc2gpIHtcblx0ICAgIHZhciBwYWlycyA9IGhhc2gucGFpcnMsXG5cdCAgICAgICAgaSA9IDAsXG5cdCAgICAgICAgbCA9IHBhaXJzLmxlbmd0aDtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hIYXNoJyk7XG5cblx0ICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIHRoaXMucHVzaFBhcmFtKHBhaXJzW2ldLnZhbHVlKTtcblx0ICAgIH1cblx0ICAgIHdoaWxlIChpLS0pIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2Fzc2lnblRvSGFzaCcsIHBhaXJzW2ldLmtleSk7XG5cdCAgICB9XG5cdCAgICB0aGlzLm9wY29kZSgncG9wSGFzaCcpO1xuXHQgIH0sXG5cblx0ICAvLyBIRUxQRVJTXG5cdCAgb3Bjb2RlOiBmdW5jdGlvbiBvcGNvZGUobmFtZSkge1xuXHQgICAgdGhpcy5vcGNvZGVzLnB1c2goeyBvcGNvZGU6IG5hbWUsIGFyZ3M6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgbG9jOiB0aGlzLnNvdXJjZU5vZGVbMF0ubG9jIH0pO1xuXHQgIH0sXG5cblx0ICBhZGREZXB0aDogZnVuY3Rpb24gYWRkRGVwdGgoZGVwdGgpIHtcblx0ICAgIGlmICghZGVwdGgpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfSxcblxuXHQgIGNsYXNzaWZ5U2V4cHI6IGZ1bmN0aW9uIGNsYXNzaWZ5U2V4cHIoc2V4cHIpIHtcblx0ICAgIHZhciBpc1NpbXBsZSA9IF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zaW1wbGVJZChzZXhwci5wYXRoKTtcblxuXHQgICAgdmFyIGlzQmxvY2tQYXJhbSA9IGlzU2ltcGxlICYmICEhdGhpcy5ibG9ja1BhcmFtSW5kZXgoc2V4cHIucGF0aC5wYXJ0c1swXSk7XG5cblx0ICAgIC8vIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGlmOlxuXHQgICAgLy8gKiBpdHMgaWQgaXMgc2ltcGxlIChhIHNpbmdsZSBwYXJ0LCBub3QgYHRoaXNgIG9yIGAuLmApXG5cdCAgICB2YXIgaXNIZWxwZXIgPSAhaXNCbG9ja1BhcmFtICYmIF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5oZWxwZXJFeHByZXNzaW9uKHNleHByKTtcblxuXHQgICAgLy8gaWYgYSBtdXN0YWNoZSBpcyBhbiBlbGlnaWJsZSBoZWxwZXIgYnV0IG5vdCBhIGRlZmluaXRlXG5cdCAgICAvLyBoZWxwZXIsIGl0IGlzIGFtYmlndW91cywgYW5kIHdpbGwgYmUgcmVzb2x2ZWQgaW4gYSBsYXRlclxuXHQgICAgLy8gcGFzcyBvciBhdCBydW50aW1lLlxuXHQgICAgdmFyIGlzRWxpZ2libGUgPSAhaXNCbG9ja1BhcmFtICYmIChpc0hlbHBlciB8fCBpc1NpbXBsZSk7XG5cblx0ICAgIC8vIGlmIGFtYmlndW91cywgd2UgY2FuIHBvc3NpYmx5IHJlc29sdmUgdGhlIGFtYmlndWl0eSBub3dcblx0ICAgIC8vIEFuIGVsaWdpYmxlIGhlbHBlciBpcyBvbmUgdGhhdCBkb2VzIG5vdCBoYXZlIGEgY29tcGxleCBwYXRoLCBpLmUuIGB0aGlzLmZvb2AsIGAuLi9mb29gIGV0Yy5cblx0ICAgIGlmIChpc0VsaWdpYmxlICYmICFpc0hlbHBlcikge1xuXHQgICAgICB2YXIgX25hbWUyID0gc2V4cHIucGF0aC5wYXJ0c1swXSxcblx0ICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblx0ICAgICAgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzW19uYW1lMl0pIHtcblx0ICAgICAgICBpc0hlbHBlciA9IHRydWU7XG5cdCAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG5cdCAgICAgICAgaXNFbGlnaWJsZSA9IGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmIChpc0hlbHBlcikge1xuXHQgICAgICByZXR1cm4gJ2hlbHBlcic7XG5cdCAgICB9IGVsc2UgaWYgKGlzRWxpZ2libGUpIHtcblx0ICAgICAgcmV0dXJuICdhbWJpZ3VvdXMnO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuICdzaW1wbGUnO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoUGFyYW1zOiBmdW5jdGlvbiBwdXNoUGFyYW1zKHBhcmFtcykge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXJhbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgIHRoaXMucHVzaFBhcmFtKHBhcmFtc1tpXSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHB1c2hQYXJhbTogZnVuY3Rpb24gcHVzaFBhcmFtKHZhbCkge1xuXHQgICAgdmFyIHZhbHVlID0gdmFsLnZhbHVlICE9IG51bGwgPyB2YWwudmFsdWUgOiB2YWwub3JpZ2luYWwgfHwgJyc7XG5cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuXHQgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXihcXC4/XFwuXFwvKSovZywgJycpLnJlcGxhY2UoL1xcLy9nLCAnLicpO1xuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKHZhbC5kZXB0aCkge1xuXHQgICAgICAgIHRoaXMuYWRkRGVwdGgodmFsLmRlcHRoKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHZhbC5kZXB0aCB8fCAwKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hTdHJpbmdQYXJhbScsIHZhbHVlLCB2YWwudHlwZSk7XG5cblx0ICAgICAgaWYgKHZhbC50eXBlID09PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgICAvLyBTdWJFeHByZXNzaW9ucyBnZXQgZXZhbHVhdGVkIGFuZCBwYXNzZWQgaW5cblx0ICAgICAgICAvLyBpbiBzdHJpbmcgcGFyYW1zIG1vZGUuXG5cdCAgICAgICAgdGhpcy5hY2NlcHQodmFsKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgICB2YXIgYmxvY2tQYXJhbUluZGV4ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIGlmICh2YWwucGFydHMgJiYgIV9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zY29wZWRJZCh2YWwpICYmICF2YWwuZGVwdGgpIHtcblx0ICAgICAgICAgIGJsb2NrUGFyYW1JbmRleCA9IHRoaXMuYmxvY2tQYXJhbUluZGV4KHZhbC5wYXJ0c1swXSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChibG9ja1BhcmFtSW5kZXgpIHtcblx0ICAgICAgICAgIHZhciBibG9ja1BhcmFtQ2hpbGQgPSB2YWwucGFydHMuc2xpY2UoMSkuam9pbignLicpO1xuXHQgICAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hJZCcsICdCbG9ja1BhcmFtJywgYmxvY2tQYXJhbUluZGV4LCBibG9ja1BhcmFtQ2hpbGQpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB2YWx1ZSA9IHZhbC5vcmlnaW5hbCB8fCB2YWx1ZTtcblx0ICAgICAgICAgIGlmICh2YWx1ZS5yZXBsYWNlKSB7XG5cdCAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXnRoaXMoPzpcXC58JCkvLCAnJykucmVwbGFjZSgvXlxcLlxcLy8sICcnKS5yZXBsYWNlKC9eXFwuJC8sICcnKTtcblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hJZCcsIHZhbC50eXBlLCB2YWx1ZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuYWNjZXB0KHZhbCk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHNldHVwRnVsbE11c3RhY2hlUGFyYW1zOiBmdW5jdGlvbiBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSwgb21pdEVtcHR5KSB7XG5cdCAgICB2YXIgcGFyYW1zID0gc2V4cHIucGFyYW1zO1xuXHQgICAgdGhpcy5wdXNoUGFyYW1zKHBhcmFtcyk7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cblx0ICAgIGlmIChzZXhwci5oYXNoKSB7XG5cdCAgICAgIHRoaXMuYWNjZXB0KHNleHByLmhhc2gpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2VtcHR5SGFzaCcsIG9taXRFbXB0eSk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBwYXJhbXM7XG5cdCAgfSxcblxuXHQgIGJsb2NrUGFyYW1JbmRleDogZnVuY3Rpb24gYmxvY2tQYXJhbUluZGV4KG5hbWUpIHtcblx0ICAgIGZvciAodmFyIGRlcHRoID0gMCwgbGVuID0gdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLmxlbmd0aDsgZGVwdGggPCBsZW47IGRlcHRoKyspIHtcblx0ICAgICAgdmFyIGJsb2NrUGFyYW1zID0gdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zW2RlcHRoXSxcblx0ICAgICAgICAgIHBhcmFtID0gYmxvY2tQYXJhbXMgJiYgX3V0aWxzLmluZGV4T2YoYmxvY2tQYXJhbXMsIG5hbWUpO1xuXHQgICAgICBpZiAoYmxvY2tQYXJhbXMgJiYgcGFyYW0gPj0gMCkge1xuXHQgICAgICAgIHJldHVybiBbZGVwdGgsIHBhcmFtXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHRmdW5jdGlvbiBwcmVjb21waWxlKGlucHV0LCBvcHRpb25zLCBlbnYpIHtcblx0ICBpZiAoaW5wdXQgPT0gbnVsbCB8fCB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnICYmIGlucHV0LnR5cGUgIT09ICdQcm9ncmFtJykge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1lvdSBtdXN0IHBhc3MgYSBzdHJpbmcgb3IgSGFuZGxlYmFycyBBU1QgdG8gSGFuZGxlYmFycy5wcmVjb21waWxlLiBZb3UgcGFzc2VkICcgKyBpbnB1dCk7XG5cdCAgfVxuXG5cdCAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XG5cdCAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgIH1cblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcblx0ICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9XG5cblx0ICB2YXIgYXN0ID0gZW52LnBhcnNlKGlucHV0LCBvcHRpb25zKSxcblx0ICAgICAgZW52aXJvbm1lbnQgPSBuZXcgZW52LkNvbXBpbGVyKCkuY29tcGlsZShhc3QsIG9wdGlvbnMpO1xuXHQgIHJldHVybiBuZXcgZW52LkphdmFTY3JpcHRDb21waWxlcigpLmNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG5cdCAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgb3B0aW9ucyA9IHt9O1xuXG5cdCAgaWYgKGlucHV0ID09IG51bGwgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyAmJiBpbnB1dC50eXBlICE9PSAnUHJvZ3JhbScpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMuY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xuXHQgIH1cblxuXHQgIG9wdGlvbnMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zKTtcblx0ICBpZiAoISgnZGF0YScgaW4gb3B0aW9ucykpIHtcblx0ICAgIG9wdGlvbnMuZGF0YSA9IHRydWU7XG5cdCAgfVxuXHQgIGlmIChvcHRpb25zLmNvbXBhdCkge1xuXHQgICAgb3B0aW9ucy51c2VEZXB0aHMgPSB0cnVlO1xuXHQgIH1cblxuXHQgIHZhciBjb21waWxlZCA9IHVuZGVmaW5lZDtcblxuXHQgIGZ1bmN0aW9uIGNvbXBpbGVJbnB1dCgpIHtcblx0ICAgIHZhciBhc3QgPSBlbnYucGFyc2UoaW5wdXQsIG9wdGlvbnMpLFxuXHQgICAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKSxcblx0ICAgICAgICB0ZW1wbGF0ZVNwZWMgPSBuZXcgZW52LkphdmFTY3JpcHRDb21waWxlcigpLmNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cdCAgICByZXR1cm4gZW52LnRlbXBsYXRlKHRlbXBsYXRlU3BlYyk7XG5cdCAgfVxuXG5cdCAgLy8gVGVtcGxhdGUgaXMgb25seSBjb21waWxlZCBvbiBmaXJzdCB1c2UgYW5kIGNhY2hlZCBhZnRlciB0aGF0IHBvaW50LlxuXHQgIGZ1bmN0aW9uIHJldChjb250ZXh0LCBleGVjT3B0aW9ucykge1xuXHQgICAgaWYgKCFjb21waWxlZCkge1xuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLmNhbGwodGhpcywgY29udGV4dCwgZXhlY09wdGlvbnMpO1xuXHQgIH1cblx0ICByZXQuX3NldHVwID0gZnVuY3Rpb24gKHNldHVwT3B0aW9ucykge1xuXHQgICAgaWYgKCFjb21waWxlZCkge1xuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLl9zZXR1cChzZXR1cE9wdGlvbnMpO1xuXHQgIH07XG5cdCAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgICBpZiAoIWNvbXBpbGVkKSB7XG5cdCAgICAgIGNvbXBpbGVkID0gY29tcGlsZUlucHV0KCk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY29tcGlsZWQuX2NoaWxkKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgIH07XG5cdCAgcmV0dXJuIHJldDtcblx0fVxuXG5cdGZ1bmN0aW9uIGFyZ0VxdWFscyhhLCBiKSB7XG5cdCAgaWYgKGEgPT09IGIpIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblxuXHQgIGlmIChfdXRpbHMuaXNBcnJheShhKSAmJiBfdXRpbHMuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGgpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHQgICAgICBpZiAoIWFyZ0VxdWFscyhhW2ldLCBiW2ldKSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcikge1xuXHQgIGlmICghc2V4cHIucGF0aC5wYXJ0cykge1xuXHQgICAgdmFyIGxpdGVyYWwgPSBzZXhwci5wYXRoO1xuXHQgICAgLy8gQ2FzdGluZyB0byBzdHJpbmcgaGVyZSB0byBtYWtlIGZhbHNlIGFuZCAwIGxpdGVyYWwgdmFsdWVzIHBsYXkgbmljZWx5IHdpdGggdGhlIHJlc3Rcblx0ICAgIC8vIG9mIHRoZSBzeXN0ZW0uXG5cdCAgICBzZXhwci5wYXRoID0ge1xuXHQgICAgICB0eXBlOiAnUGF0aEV4cHJlc3Npb24nLFxuXHQgICAgICBkYXRhOiBmYWxzZSxcblx0ICAgICAgZGVwdGg6IDAsXG5cdCAgICAgIHBhcnRzOiBbbGl0ZXJhbC5vcmlnaW5hbCArICcnXSxcblx0ICAgICAgb3JpZ2luYWw6IGxpdGVyYWwub3JpZ2luYWwgKyAnJyxcblx0ICAgICAgbG9jOiBsaXRlcmFsLmxvY1xuXHQgICAgfTtcblx0ICB9XG5cdH1cblxuLyoqKi8gfSksXG4vKiA0MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfYmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9jb2RlR2VuID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cblx0dmFyIF9jb2RlR2VuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvZGVHZW4pO1xuXG5cdGZ1bmN0aW9uIExpdGVyYWwodmFsdWUpIHtcblx0ICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBKYXZhU2NyaXB0Q29tcGlsZXIoKSB7fVxuXG5cdEphdmFTY3JpcHRDb21waWxlci5wcm90b3R5cGUgPSB7XG5cdCAgLy8gUFVCTElDIEFQSTogWW91IGNhbiBvdmVycmlkZSB0aGVzZSBtZXRob2RzIGluIGEgc3ViY2xhc3MgdG8gcHJvdmlkZVxuXHQgIC8vIGFsdGVybmF0aXZlIGNvbXBpbGVkIGZvcm1zIGZvciBuYW1lIGxvb2t1cCBhbmQgYnVmZmVyaW5nIHNlbWFudGljc1xuXHQgIG5hbWVMb29rdXA6IGZ1bmN0aW9uIG5hbWVMb29rdXAocGFyZW50LCBuYW1lIC8qICwgdHlwZSovKSB7XG5cdCAgICBpZiAobmFtZSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuXHQgICAgICByZXR1cm4gWycoJywgcGFyZW50LCAnLnByb3BlcnR5SXNFbnVtZXJhYmxlKFxcJ2NvbnN0cnVjdG9yXFwnKSA/ICcsIHBhcmVudCwgJy5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCcsICcpJ107XG5cdCAgICB9XG5cdCAgICBpZiAoSmF2YVNjcmlwdENvbXBpbGVyLmlzVmFsaWRKYXZhU2NyaXB0VmFyaWFibGVOYW1lKG5hbWUpKSB7XG5cdCAgICAgIHJldHVybiBbcGFyZW50LCAnLicsIG5hbWVdO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIFtwYXJlbnQsICdbJywgSlNPTi5zdHJpbmdpZnkobmFtZSksICddJ107XG5cdCAgICB9XG5cdCAgfSxcblx0ICBkZXB0aGVkTG9va3VwOiBmdW5jdGlvbiBkZXB0aGVkTG9va3VwKG5hbWUpIHtcblx0ICAgIHJldHVybiBbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5sb29rdXAnKSwgJyhkZXB0aHMsIFwiJywgbmFtZSwgJ1wiKSddO1xuXHQgIH0sXG5cblx0ICBjb21waWxlckluZm86IGZ1bmN0aW9uIGNvbXBpbGVySW5mbygpIHtcblx0ICAgIHZhciByZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OLFxuXHQgICAgICAgIHZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tyZXZpc2lvbl07XG5cdCAgICByZXR1cm4gW3JldmlzaW9uLCB2ZXJzaW9uc107XG5cdCAgfSxcblxuXHQgIGFwcGVuZFRvQnVmZmVyOiBmdW5jdGlvbiBhcHBlbmRUb0J1ZmZlcihzb3VyY2UsIGxvY2F0aW9uLCBleHBsaWNpdCkge1xuXHQgICAgLy8gRm9yY2UgYSBzb3VyY2UgYXMgdGhpcyBzaW1wbGlmaWVzIHRoZSBtZXJnZSBsb2dpYy5cblx0ICAgIGlmICghX3V0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuXHQgICAgICBzb3VyY2UgPSBbc291cmNlXTtcblx0ICAgIH1cblx0ICAgIHNvdXJjZSA9IHRoaXMuc291cmNlLndyYXAoc291cmNlLCBsb2NhdGlvbik7XG5cblx0ICAgIGlmICh0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlKSB7XG5cdCAgICAgIHJldHVybiBbJ3JldHVybiAnLCBzb3VyY2UsICc7J107XG5cdCAgICB9IGVsc2UgaWYgKGV4cGxpY2l0KSB7XG5cdCAgICAgIC8vIFRoaXMgaXMgYSBjYXNlIHdoZXJlIHRoZSBidWZmZXIgb3BlcmF0aW9uIG9jY3VycyBhcyBhIGNoaWxkIG9mIGFub3RoZXJcblx0ICAgICAgLy8gY29uc3RydWN0LCBnZW5lcmFsbHkgYnJhY2VzLiBXZSBoYXZlIHRvIGV4cGxpY2l0bHkgb3V0cHV0IHRoZXNlIGJ1ZmZlclxuXHQgICAgICAvLyBvcGVyYXRpb25zIHRvIGVuc3VyZSB0aGF0IHRoZSBlbWl0dGVkIGNvZGUgZ29lcyBpbiB0aGUgY29ycmVjdCBsb2NhdGlvbi5cblx0ICAgICAgcmV0dXJuIFsnYnVmZmVyICs9ICcsIHNvdXJjZSwgJzsnXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHNvdXJjZS5hcHBlbmRUb0J1ZmZlciA9IHRydWU7XG5cdCAgICAgIHJldHVybiBzb3VyY2U7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGluaXRpYWxpemVCdWZmZXI6IGZ1bmN0aW9uIGluaXRpYWxpemVCdWZmZXIoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5xdW90ZWRTdHJpbmcoJycpO1xuXHQgIH0sXG5cdCAgLy8gRU5EIFBVQkxJQyBBUElcblxuXHQgIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMsIGNvbnRleHQsIGFzT2JqZWN0KSB7XG5cdCAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdCAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHQgICAgdGhpcy5zdHJpbmdQYXJhbXMgPSB0aGlzLm9wdGlvbnMuc3RyaW5nUGFyYW1zO1xuXHQgICAgdGhpcy50cmFja0lkcyA9IHRoaXMub3B0aW9ucy50cmFja0lkcztcblx0ICAgIHRoaXMucHJlY29tcGlsZSA9ICFhc09iamVjdDtcblxuXHQgICAgdGhpcy5uYW1lID0gdGhpcy5lbnZpcm9ubWVudC5uYW1lO1xuXHQgICAgdGhpcy5pc0NoaWxkID0gISFjb250ZXh0O1xuXHQgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB7XG5cdCAgICAgIGRlY29yYXRvcnM6IFtdLFxuXHQgICAgICBwcm9ncmFtczogW10sXG5cdCAgICAgIGVudmlyb25tZW50czogW11cblx0ICAgIH07XG5cblx0ICAgIHRoaXMucHJlYW1ibGUoKTtcblxuXHQgICAgdGhpcy5zdGFja1Nsb3QgPSAwO1xuXHQgICAgdGhpcy5zdGFja1ZhcnMgPSBbXTtcblx0ICAgIHRoaXMuYWxpYXNlcyA9IHt9O1xuXHQgICAgdGhpcy5yZWdpc3RlcnMgPSB7IGxpc3Q6IFtdIH07XG5cdCAgICB0aGlzLmhhc2hlcyA9IFtdO1xuXHQgICAgdGhpcy5jb21waWxlU3RhY2sgPSBbXTtcblx0ICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcblx0ICAgIHRoaXMuYmxvY2tQYXJhbXMgPSBbXTtcblxuXHQgICAgdGhpcy5jb21waWxlQ2hpbGRyZW4oZW52aXJvbm1lbnQsIG9wdGlvbnMpO1xuXG5cdCAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGVudmlyb25tZW50LnVzZURlcHRocyB8fCBlbnZpcm9ubWVudC51c2VEZWNvcmF0b3JzIHx8IHRoaXMub3B0aW9ucy5jb21wYXQ7XG5cdCAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBlbnZpcm9ubWVudC51c2VCbG9ja1BhcmFtcztcblxuXHQgICAgdmFyIG9wY29kZXMgPSBlbnZpcm9ubWVudC5vcGNvZGVzLFxuXHQgICAgICAgIG9wY29kZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBmaXJzdExvYyA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBpID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGwgPSB1bmRlZmluZWQ7XG5cblx0ICAgIGZvciAoaSA9IDAsIGwgPSBvcGNvZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICBvcGNvZGUgPSBvcGNvZGVzW2ldO1xuXG5cdCAgICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IG9wY29kZS5sb2M7XG5cdCAgICAgIGZpcnN0TG9jID0gZmlyc3RMb2MgfHwgb3Bjb2RlLmxvYztcblx0ICAgICAgdGhpc1tvcGNvZGUub3Bjb2RlXS5hcHBseSh0aGlzLCBvcGNvZGUuYXJncyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZsdXNoIGFueSB0cmFpbGluZyBjb250ZW50IHRoYXQgbWlnaHQgYmUgcGVuZGluZy5cblx0ICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IGZpcnN0TG9jO1xuXHQgICAgdGhpcy5wdXNoU291cmNlKCcnKTtcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgIGlmICh0aGlzLnN0YWNrU2xvdCB8fCB0aGlzLmlubGluZVN0YWNrLmxlbmd0aCB8fCB0aGlzLmNvbXBpbGVTdGFjay5sZW5ndGgpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0NvbXBpbGUgY29tcGxldGVkIHdpdGggY29udGVudCBsZWZ0IG9uIHN0YWNrJyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICghdGhpcy5kZWNvcmF0b3JzLmlzRW1wdHkoKSkge1xuXHQgICAgICB0aGlzLnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKCd2YXIgZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5kZWNvcmF0b3JzO1xcbicpO1xuXHQgICAgICB0aGlzLmRlY29yYXRvcnMucHVzaCgncmV0dXJuIGZuOycpO1xuXG5cdCAgICAgIGlmIChhc09iamVjdCkge1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycyA9IEZ1bmN0aW9uLmFwcGx5KHRoaXMsIFsnZm4nLCAncHJvcHMnLCAnY29udGFpbmVyJywgJ2RlcHRoMCcsICdkYXRhJywgJ2Jsb2NrUGFyYW1zJywgJ2RlcHRocycsIHRoaXMuZGVjb3JhdG9ycy5tZXJnZSgpXSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzLnByZXBlbmQoJ2Z1bmN0aW9uKGZuLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aDAsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcXG4nKTtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMucHVzaCgnfVxcbicpO1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycyA9IHRoaXMuZGVjb3JhdG9ycy5tZXJnZSgpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmRlY29yYXRvcnMgPSB1bmRlZmluZWQ7XG5cdCAgICB9XG5cblx0ICAgIHZhciBmbiA9IHRoaXMuY3JlYXRlRnVuY3Rpb25Db250ZXh0KGFzT2JqZWN0KTtcblx0ICAgIGlmICghdGhpcy5pc0NoaWxkKSB7XG5cdCAgICAgIHZhciByZXQgPSB7XG5cdCAgICAgICAgY29tcGlsZXI6IHRoaXMuY29tcGlsZXJJbmZvKCksXG5cdCAgICAgICAgbWFpbjogZm5cblx0ICAgICAgfTtcblxuXHQgICAgICBpZiAodGhpcy5kZWNvcmF0b3JzKSB7XG5cdCAgICAgICAgcmV0Lm1haW5fZCA9IHRoaXMuZGVjb3JhdG9yczsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2Vcblx0ICAgICAgICByZXQudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgX2NvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cdCAgICAgIHZhciBwcm9ncmFtcyA9IF9jb250ZXh0LnByb2dyYW1zO1xuXHQgICAgICB2YXIgZGVjb3JhdG9ycyA9IF9jb250ZXh0LmRlY29yYXRvcnM7XG5cblx0ICAgICAgZm9yIChpID0gMCwgbCA9IHByb2dyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICAgIGlmIChwcm9ncmFtc1tpXSkge1xuXHQgICAgICAgICAgcmV0W2ldID0gcHJvZ3JhbXNbaV07XG5cdCAgICAgICAgICBpZiAoZGVjb3JhdG9yc1tpXSkge1xuXHQgICAgICAgICAgICByZXRbaSArICdfZCddID0gZGVjb3JhdG9yc1tpXTtcblx0ICAgICAgICAgICAgcmV0LnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICh0aGlzLmVudmlyb25tZW50LnVzZVBhcnRpYWwpIHtcblx0ICAgICAgICByZXQudXNlUGFydGlhbCA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5kYXRhKSB7XG5cdCAgICAgICAgcmV0LnVzZURhdGEgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLnVzZURlcHRocykge1xuXHQgICAgICAgIHJldC51c2VEZXB0aHMgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zKSB7XG5cdCAgICAgICAgcmV0LnVzZUJsb2NrUGFyYW1zID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdCkge1xuXHQgICAgICAgIHJldC5jb21wYXQgPSB0cnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKCFhc09iamVjdCkge1xuXHQgICAgICAgIHJldC5jb21waWxlciA9IEpTT04uc3RyaW5naWZ5KHJldC5jb21waWxlcik7XG5cblx0ICAgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSB7IHN0YXJ0OiB7IGxpbmU6IDEsIGNvbHVtbjogMCB9IH07XG5cdCAgICAgICAgcmV0ID0gdGhpcy5vYmplY3RMaXRlcmFsKHJldCk7XG5cblx0ICAgICAgICBpZiAob3B0aW9ucy5zcmNOYW1lKSB7XG5cdCAgICAgICAgICByZXQgPSByZXQudG9TdHJpbmdXaXRoU291cmNlTWFwKHsgZmlsZTogb3B0aW9ucy5kZXN0TmFtZSB9KTtcblx0ICAgICAgICAgIHJldC5tYXAgPSByZXQubWFwICYmIHJldC5tYXAudG9TdHJpbmcoKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgcmV0ID0gcmV0LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHJldC5jb21waWxlck9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGZuO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwcmVhbWJsZTogZnVuY3Rpb24gcHJlYW1ibGUoKSB7XG5cdCAgICAvLyB0cmFjayB0aGUgbGFzdCBjb250ZXh0IHB1c2hlZCBpbnRvIHBsYWNlIHRvIGFsbG93IHNraXBwaW5nIHRoZVxuXHQgICAgLy8gZ2V0Q29udGV4dCBvcGNvZGUgd2hlbiBpdCB3b3VsZCBiZSBhIG5vb3Bcblx0ICAgIHRoaXMubGFzdENvbnRleHQgPSAwO1xuXHQgICAgdGhpcy5zb3VyY2UgPSBuZXcgX2NvZGVHZW4yWydkZWZhdWx0J10odGhpcy5vcHRpb25zLnNyY05hbWUpO1xuXHQgICAgdGhpcy5kZWNvcmF0b3JzID0gbmV3IF9jb2RlR2VuMlsnZGVmYXVsdCddKHRoaXMub3B0aW9ucy5zcmNOYW1lKTtcblx0ICB9LFxuXG5cdCAgY3JlYXRlRnVuY3Rpb25Db250ZXh0OiBmdW5jdGlvbiBjcmVhdGVGdW5jdGlvbkNvbnRleHQoYXNPYmplY3QpIHtcblx0ICAgIHZhciB2YXJEZWNsYXJhdGlvbnMgPSAnJztcblxuXHQgICAgdmFyIGxvY2FscyA9IHRoaXMuc3RhY2tWYXJzLmNvbmNhdCh0aGlzLnJlZ2lzdGVycy5saXN0KTtcblx0ICAgIGlmIChsb2NhbHMubGVuZ3RoID4gMCkge1xuXHQgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgJyArIGxvY2Fscy5qb2luKCcsICcpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBHZW5lcmF0ZSBtaW5pbWl6ZXIgYWxpYXMgbWFwcGluZ3Ncblx0ICAgIC8vXG5cdCAgICAvLyBXaGVuIHVzaW5nIHRydWUgU291cmNlTm9kZXMsIHRoaXMgd2lsbCB1cGRhdGUgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIGdpdmVuIGFsaWFzXG5cdCAgICAvLyBhcyB0aGUgc291cmNlIG5vZGVzIGFyZSByZXVzZWQgaW4gc2l0dS4gRm9yIHRoZSBub24tc291cmNlIG5vZGUgY29tcGlsYXRpb24gbW9kZSxcblx0ICAgIC8vIGFsaWFzZXMgd2lsbCBub3QgYmUgdXNlZCwgYnV0IHRoaXMgY2FzZSBpcyBhbHJlYWR5IGJlaW5nIHJ1biBvbiB0aGUgY2xpZW50IGFuZFxuXHQgICAgLy8gd2UgYXJlbid0IGNvbmNlcm4gYWJvdXQgbWluaW1pemluZyB0aGUgdGVtcGxhdGUgc2l6ZS5cblx0ICAgIHZhciBhbGlhc0NvdW50ID0gMDtcblx0ICAgIGZvciAodmFyIGFsaWFzIGluIHRoaXMuYWxpYXNlcykge1xuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGd1YXJkLWZvci1pblxuXHQgICAgICB2YXIgbm9kZSA9IHRoaXMuYWxpYXNlc1thbGlhc107XG5cblx0ICAgICAgaWYgKHRoaXMuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShhbGlhcykgJiYgbm9kZS5jaGlsZHJlbiAmJiBub2RlLnJlZmVyZW5jZUNvdW50ID4gMSkge1xuXHQgICAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCBhbGlhcycgKyArK2FsaWFzQ291bnQgKyAnPScgKyBhbGlhcztcblx0ICAgICAgICBub2RlLmNoaWxkcmVuWzBdID0gJ2FsaWFzJyArIGFsaWFzQ291bnQ7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcmFtcyA9IFsnY29udGFpbmVyJywgJ2RlcHRoMCcsICdoZWxwZXJzJywgJ3BhcnRpYWxzJywgJ2RhdGEnXTtcblxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgdGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcGFyYW1zLnB1c2goJ2Jsb2NrUGFyYW1zJyk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcGFyYW1zLnB1c2goJ2RlcHRocycpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBQZXJmb3JtIGEgc2Vjb25kIHBhc3Mgb3ZlciB0aGUgb3V0cHV0IHRvIG1lcmdlIGNvbnRlbnQgd2hlbiBwb3NzaWJsZVxuXHQgICAgdmFyIHNvdXJjZSA9IHRoaXMubWVyZ2VTb3VyY2UodmFyRGVjbGFyYXRpb25zKTtcblxuXHQgICAgaWYgKGFzT2JqZWN0KSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKHNvdXJjZSk7XG5cblx0ICAgICAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uud3JhcChbJ2Z1bmN0aW9uKCcsIHBhcmFtcy5qb2luKCcsJyksICcpIHtcXG4gICcsIHNvdXJjZSwgJ30nXSk7XG5cdCAgICB9XG5cdCAgfSxcblx0ICBtZXJnZVNvdXJjZTogZnVuY3Rpb24gbWVyZ2VTb3VyY2UodmFyRGVjbGFyYXRpb25zKSB7XG5cdCAgICB2YXIgaXNTaW1wbGUgPSB0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlLFxuXHQgICAgICAgIGFwcGVuZE9ubHkgPSAhdGhpcy5mb3JjZUJ1ZmZlcixcblx0ICAgICAgICBhcHBlbmRGaXJzdCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBzb3VyY2VTZWVuID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGJ1ZmZlclN0YXJ0ID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGJ1ZmZlckVuZCA9IHVuZGVmaW5lZDtcblx0ICAgIHRoaXMuc291cmNlLmVhY2goZnVuY3Rpb24gKGxpbmUpIHtcblx0ICAgICAgaWYgKGxpbmUuYXBwZW5kVG9CdWZmZXIpIHtcblx0ICAgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICAgIGxpbmUucHJlcGVuZCgnICArICcpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBidWZmZXJTdGFydCA9IGxpbmU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGJ1ZmZlckVuZCA9IGxpbmU7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgICBpZiAoIXNvdXJjZVNlZW4pIHtcblx0ICAgICAgICAgICAgYXBwZW5kRmlyc3QgPSB0cnVlO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgnYnVmZmVyICs9ICcpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuXHQgICAgICAgICAgYnVmZmVyU3RhcnQgPSBidWZmZXJFbmQgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgc291cmNlU2VlbiA9IHRydWU7XG5cdCAgICAgICAgaWYgKCFpc1NpbXBsZSkge1xuXHQgICAgICAgICAgYXBwZW5kT25seSA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIGlmIChhcHBlbmRPbmx5KSB7XG5cdCAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ3JldHVybiAnKTtcblx0ICAgICAgICBidWZmZXJFbmQuYWRkKCc7Jyk7XG5cdCAgICAgIH0gZWxzZSBpZiAoIXNvdXJjZVNlZW4pIHtcblx0ICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKCdyZXR1cm4gXCJcIjsnKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsIGJ1ZmZlciA9ICcgKyAoYXBwZW5kRmlyc3QgPyAnJyA6IHRoaXMuaW5pdGlhbGl6ZUJ1ZmZlcigpKTtcblxuXHQgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gYnVmZmVyICsgJyk7XG5cdCAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuc291cmNlLnB1c2goJ3JldHVybiBidWZmZXI7Jyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKHZhckRlY2xhcmF0aW9ucykge1xuXHQgICAgICB0aGlzLnNvdXJjZS5wcmVwZW5kKCd2YXIgJyArIHZhckRlY2xhcmF0aW9ucy5zdWJzdHJpbmcoMikgKyAoYXBwZW5kRmlyc3QgPyAnJyA6ICc7XFxuJykpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2UubWVyZ2UoKTtcblx0ICB9LFxuXG5cdCAgLy8gW2Jsb2NrVmFsdWVdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCB2YWx1ZVxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmV0dXJuIHZhbHVlIG9mIGJsb2NrSGVscGVyTWlzc2luZ1xuXHQgIC8vXG5cdCAgLy8gVGhlIHB1cnBvc2Ugb2YgdGhpcyBvcGNvZGUgaXMgdG8gdGFrZSBhIGJsb2NrIG9mIHRoZSBmb3JtXG5cdCAgLy8gYHt7I3RoaXMuZm9vfX0uLi57ey90aGlzLmZvb319YCwgcmVzb2x2ZSB0aGUgdmFsdWUgb2YgYGZvb2AsIGFuZFxuXHQgIC8vIHJlcGxhY2UgaXQgb24gdGhlIHN0YWNrIHdpdGggdGhlIHJlc3VsdCBvZiBwcm9wZXJseVxuXHQgIC8vIGludm9raW5nIGJsb2NrSGVscGVyTWlzc2luZy5cblx0ICBibG9ja1ZhbHVlOiBmdW5jdGlvbiBibG9ja1ZhbHVlKG5hbWUpIHtcblx0ICAgIHZhciBibG9ja0hlbHBlck1pc3NpbmcgPSB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmcnKSxcblx0ICAgICAgICBwYXJhbXMgPSBbdGhpcy5jb250ZXh0TmFtZSgwKV07XG5cdCAgICB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCAwLCBwYXJhbXMpO1xuXG5cdCAgICB2YXIgYmxvY2tOYW1lID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgcGFyYW1zLnNwbGljZSgxLCAwLCBibG9ja05hbWUpO1xuXG5cdCAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGJsb2NrSGVscGVyTWlzc2luZywgJ2NhbGwnLCBwYXJhbXMpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2FtYmlndW91c0Jsb2NrVmFsdWVdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCB2YWx1ZVxuXHQgIC8vIENvbXBpbGVyIHZhbHVlLCBiZWZvcmU6IGxhc3RIZWxwZXI9dmFsdWUgb2YgbGFzdCBmb3VuZCBoZWxwZXIsIGlmIGFueVxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlciwgaWYgbm8gbGFzdEhlbHBlcjogc2FtZSBhcyBbYmxvY2tWYWx1ZV1cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXIsIGlmIGxhc3RIZWxwZXI6IHZhbHVlXG5cdCAgYW1iaWd1b3VzQmxvY2tWYWx1ZTogZnVuY3Rpb24gYW1iaWd1b3VzQmxvY2tWYWx1ZSgpIHtcblx0ICAgIC8vIFdlJ3JlIGJlaW5nIGEgYml0IGNoZWVreSBhbmQgcmV1c2luZyB0aGUgb3B0aW9ucyB2YWx1ZSBmcm9tIHRoZSBwcmlvciBleGVjXG5cdCAgICB2YXIgYmxvY2tIZWxwZXJNaXNzaW5nID0gdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MoJycsIDAsIHBhcmFtcywgdHJ1ZSk7XG5cblx0ICAgIHRoaXMuZmx1c2hJbmxpbmUoKTtcblxuXHQgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnRvcFN0YWNrKCk7XG5cdCAgICBwYXJhbXMuc3BsaWNlKDEsIDAsIGN1cnJlbnQpO1xuXG5cdCAgICB0aGlzLnB1c2hTb3VyY2UoWydpZiAoIScsIHRoaXMubGFzdEhlbHBlciwgJykgeyAnLCBjdXJyZW50LCAnID0gJywgdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGJsb2NrSGVscGVyTWlzc2luZywgJ2NhbGwnLCBwYXJhbXMpLCAnfSddKTtcblx0ICB9LFxuXG5cdCAgLy8gW2FwcGVuZENvbnRlbnRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gQXBwZW5kcyB0aGUgc3RyaW5nIHZhbHVlIG9mIGBjb250ZW50YCB0byB0aGUgY3VycmVudCBidWZmZXJcblx0ICBhcHBlbmRDb250ZW50OiBmdW5jdGlvbiBhcHBlbmRDb250ZW50KGNvbnRlbnQpIHtcblx0ICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XG5cdCAgICAgIGNvbnRlbnQgPSB0aGlzLnBlbmRpbmdDb250ZW50ICsgY29udGVudDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucGVuZGluZ0xvY2F0aW9uID0gdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnBlbmRpbmdDb250ZW50ID0gY29udGVudDtcblx0ICB9LFxuXG5cdCAgLy8gW2FwcGVuZF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gQ29lcmNlcyBgdmFsdWVgIHRvIGEgU3RyaW5nIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjdXJyZW50IGJ1ZmZlci5cblx0ICAvL1xuXHQgIC8vIElmIGB2YWx1ZWAgaXMgdHJ1dGh5LCBvciAwLCBpdCBpcyBjb2VyY2VkIGludG8gYSBzdHJpbmcgYW5kIGFwcGVuZGVkXG5cdCAgLy8gT3RoZXJ3aXNlLCB0aGUgZW1wdHkgc3RyaW5nIGlzIGFwcGVuZGVkXG5cdCAgYXBwZW5kOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG5cdCAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgcmV0dXJuIFsnICE9IG51bGwgPyAnLCBjdXJyZW50LCAnIDogXCJcIiddO1xuXHQgICAgICB9KTtcblxuXHQgICAgICB0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcih0aGlzLnBvcFN0YWNrKCkpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhciBsb2NhbCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgdGhpcy5wdXNoU291cmNlKFsnaWYgKCcsIGxvY2FsLCAnICE9IG51bGwpIHsgJywgdGhpcy5hcHBlbmRUb0J1ZmZlcihsb2NhbCwgdW5kZWZpbmVkLCB0cnVlKSwgJyB9J10pO1xuXHQgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuXHQgICAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2Vsc2UgeyAnLCB0aGlzLmFwcGVuZFRvQnVmZmVyKFwiJydcIiwgdW5kZWZpbmVkLCB0cnVlKSwgJyB9J10pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRFc2NhcGVkXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBFc2NhcGUgYHZhbHVlYCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBidWZmZXJcblx0ICBhcHBlbmRFc2NhcGVkOiBmdW5jdGlvbiBhcHBlbmRFc2NhcGVkKCkge1xuXHQgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIoW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbicpLCAnKCcsIHRoaXMucG9wU3RhY2soKSwgJyknXSkpO1xuXHQgIH0sXG5cblx0ICAvLyBbZ2V0Q29udGV4dF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy8gQ29tcGlsZXIgdmFsdWUsIGFmdGVyOiBsYXN0Q29udGV4dD1kZXB0aFxuXHQgIC8vXG5cdCAgLy8gU2V0IHRoZSB2YWx1ZSBvZiB0aGUgYGxhc3RDb250ZXh0YCBjb21waWxlciB2YWx1ZSB0byB0aGUgZGVwdGhcblx0ICBnZXRDb250ZXh0OiBmdW5jdGlvbiBnZXRDb250ZXh0KGRlcHRoKSB7XG5cdCAgICB0aGlzLmxhc3RDb250ZXh0ID0gZGVwdGg7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoQ29udGV4dF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogY3VycmVudENvbnRleHQsIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaGVzIHRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBjb250ZXh0IG9udG8gdGhlIHN0YWNrLlxuXHQgIHB1c2hDb250ZXh0OiBmdW5jdGlvbiBwdXNoQ29udGV4dCgpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLmNvbnRleHROYW1lKHRoaXMubGFzdENvbnRleHQpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2xvb2t1cE9uQ29udGV4dF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogY3VycmVudENvbnRleHRbbmFtZV0sIC4uLlxuXHQgIC8vXG5cdCAgLy8gTG9va3MgdXAgdGhlIHZhbHVlIG9mIGBuYW1lYCBvbiB0aGUgY3VycmVudCBjb250ZXh0IGFuZCBwdXNoZXNcblx0ICAvLyBpdCBvbnRvIHRoZSBzdGFjay5cblx0ICBsb29rdXBPbkNvbnRleHQ6IGZ1bmN0aW9uIGxvb2t1cE9uQ29udGV4dChwYXJ0cywgZmFsc3ksIHN0cmljdCwgc2NvcGVkKSB7XG5cdCAgICB2YXIgaSA9IDA7XG5cblx0ICAgIGlmICghc2NvcGVkICYmIHRoaXMub3B0aW9ucy5jb21wYXQgJiYgIXRoaXMubGFzdENvbnRleHQpIHtcblx0ICAgICAgLy8gVGhlIGRlcHRoZWQgcXVlcnkgaXMgZXhwZWN0ZWQgdG8gaGFuZGxlIHRoZSB1bmRlZmluZWQgbG9naWMgZm9yIHRoZSByb290IGxldmVsIHRoYXRcblx0ICAgICAgLy8gaXMgaW1wbGVtZW50ZWQgYmVsb3csIHNvIHdlIGV2YWx1YXRlIHRoYXQgZGlyZWN0bHkgaW4gY29tcGF0IG1vZGVcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMuZGVwdGhlZExvb2t1cChwYXJ0c1tpKytdKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hDb250ZXh0KCk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2NvbnRleHQnLCBwYXJ0cywgaSwgZmFsc3ksIHN0cmljdCk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBCbG9ja1BhcmFtXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBibG9ja1BhcmFtW25hbWVdLCAuLi5cblx0ICAvL1xuXHQgIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgcGFydHNgIG9uIHRoZSBnaXZlbiBibG9jayBwYXJhbSBhbmQgcHVzaGVzXG5cdCAgLy8gaXQgb250byB0aGUgc3RhY2suXG5cdCAgbG9va3VwQmxvY2tQYXJhbTogZnVuY3Rpb24gbG9va3VwQmxvY2tQYXJhbShibG9ja1BhcmFtSWQsIHBhcnRzKSB7XG5cdCAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdHJ1ZTtcblxuXHQgICAgdGhpcy5wdXNoKFsnYmxvY2tQYXJhbXNbJywgYmxvY2tQYXJhbUlkWzBdLCAnXVsnLCBibG9ja1BhcmFtSWRbMV0sICddJ10pO1xuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCAxKTtcblx0ICB9LFxuXG5cdCAgLy8gW2xvb2t1cERhdGFdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGRhdGEsIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCB0aGUgZGF0YSBsb29rdXAgb3BlcmF0b3Jcblx0ICBsb29rdXBEYXRhOiBmdW5jdGlvbiBsb29rdXBEYXRhKGRlcHRoLCBwYXJ0cywgc3RyaWN0KSB7XG5cdCAgICBpZiAoIWRlcHRoKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnZGF0YScpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdjb250YWluZXIuZGF0YShkYXRhLCAnICsgZGVwdGggKyAnKScpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdkYXRhJywgcGFydHMsIDAsIHRydWUsIHN0cmljdCk7XG5cdCAgfSxcblxuXHQgIHJlc29sdmVQYXRoOiBmdW5jdGlvbiByZXNvbHZlUGF0aCh0eXBlLCBwYXJ0cywgaSwgZmFsc3ksIHN0cmljdCkge1xuXHQgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXHQgICAgdmFyIF90aGlzID0gdGhpcztcblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5zdHJpY3QgfHwgdGhpcy5vcHRpb25zLmFzc3VtZU9iamVjdHMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHN0cmljdExvb2t1cCh0aGlzLm9wdGlvbnMuc3RyaWN0ICYmIHN0cmljdCwgdGhpcywgcGFydHMsIHR5cGUpKTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgbGVuID0gcGFydHMubGVuZ3RoO1xuXHQgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblx0ICAgICAgdGhpcy5yZXBsYWNlU3RhY2soZnVuY3Rpb24gKGN1cnJlbnQpIHtcblx0ICAgICAgICB2YXIgbG9va3VwID0gX3RoaXMubmFtZUxvb2t1cChjdXJyZW50LCBwYXJ0c1tpXSwgdHlwZSk7XG5cdCAgICAgICAgLy8gV2Ugd2FudCB0byBlbnN1cmUgdGhhdCB6ZXJvIGFuZCBmYWxzZSBhcmUgaGFuZGxlZCBwcm9wZXJseSBpZiB0aGUgY29udGV4dCAoZmFsc3kgZmxhZylcblx0ICAgICAgICAvLyBuZWVkcyB0byBoYXZlIHRoZSBzcGVjaWFsIGhhbmRsaW5nIGZvciB0aGVzZSB2YWx1ZXMuXG5cdCAgICAgICAgaWYgKCFmYWxzeSkge1xuXHQgICAgICAgICAgcmV0dXJuIFsnICE9IG51bGwgPyAnLCBsb29rdXAsICcgOiAnLCBjdXJyZW50XTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbiB1c2UgZ2VuZXJpYyBmYWxzeSBoYW5kbGluZ1xuXHQgICAgICAgICAgcmV0dXJuIFsnICYmICcsIGxvb2t1cF07XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gW3Jlc29sdmVQb3NzaWJsZUxhbWJkYV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc29sdmVkIHZhbHVlLCAuLi5cblx0ICAvL1xuXHQgIC8vIElmIHRoZSBgdmFsdWVgIGlzIGEgbGFtYmRhLCByZXBsYWNlIGl0IG9uIHRoZSBzdGFjayBieVxuXHQgIC8vIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGxhbWJkYVxuXHQgIHJlc29sdmVQb3NzaWJsZUxhbWJkYTogZnVuY3Rpb24gcmVzb2x2ZVBvc3NpYmxlTGFtYmRhKCkge1xuXHQgICAgdGhpcy5wdXNoKFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmxhbWJkYScpLCAnKCcsIHRoaXMucG9wU3RhY2soKSwgJywgJywgdGhpcy5jb250ZXh0TmFtZSgwKSwgJyknXSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoU3RyaW5nUGFyYW1dXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHN0cmluZywgY3VycmVudENvbnRleHQsIC4uLlxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGNvZGUgaXMgZGVzaWduZWQgZm9yIHVzZSBpbiBzdHJpbmcgbW9kZSwgd2hpY2hcblx0ICAvLyBwcm92aWRlcyB0aGUgc3RyaW5nIHZhbHVlIG9mIGEgcGFyYW1ldGVyIGFsb25nIHdpdGggaXRzXG5cdCAgLy8gZGVwdGggcmF0aGVyIHRoYW4gcmVzb2x2aW5nIGl0IGltbWVkaWF0ZWx5LlxuXHQgIHB1c2hTdHJpbmdQYXJhbTogZnVuY3Rpb24gcHVzaFN0cmluZ1BhcmFtKHN0cmluZywgdHlwZSkge1xuXHQgICAgdGhpcy5wdXNoQ29udGV4dCgpO1xuXHQgICAgdGhpcy5wdXNoU3RyaW5nKHR5cGUpO1xuXG5cdCAgICAvLyBJZiBpdCdzIGEgc3ViZXhwcmVzc2lvbiwgdGhlIHN0cmluZyByZXN1bHRcblx0ICAgIC8vIHdpbGwgYmUgcHVzaGVkIGFmdGVyIHRoaXMgb3Bjb2RlLlxuXHQgICAgaWYgKHR5cGUgIT09ICdTdWJFeHByZXNzaW9uJykge1xuXHQgICAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICB0aGlzLnB1c2hTdHJpbmcoc3RyaW5nKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoc3RyaW5nKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBlbXB0eUhhc2g6IGZ1bmN0aW9uIGVtcHR5SGFzaChvbWl0RW1wdHkpIHtcblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIHRoaXMucHVzaCgne30nKTsgLy8gaGFzaElkc1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIHRoaXMucHVzaCgne30nKTsgLy8gaGFzaENvbnRleHRzXG5cdCAgICAgIHRoaXMucHVzaCgne30nKTsgLy8gaGFzaFR5cGVzXG5cdCAgICB9XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwob21pdEVtcHR5ID8gJ3VuZGVmaW5lZCcgOiAne30nKTtcblx0ICB9LFxuXHQgIHB1c2hIYXNoOiBmdW5jdGlvbiBwdXNoSGFzaCgpIHtcblx0ICAgIGlmICh0aGlzLmhhc2gpIHtcblx0ICAgICAgdGhpcy5oYXNoZXMucHVzaCh0aGlzLmhhc2gpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5oYXNoID0geyB2YWx1ZXM6IFtdLCB0eXBlczogW10sIGNvbnRleHRzOiBbXSwgaWRzOiBbXSB9O1xuXHQgIH0sXG5cdCAgcG9wSGFzaDogZnVuY3Rpb24gcG9wSGFzaCgpIHtcblx0ICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuXHQgICAgdGhpcy5oYXNoID0gdGhpcy5oYXNoZXMucG9wKCk7XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC5pZHMpKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2guY29udGV4dHMpKTtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLnR5cGVzKSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC52YWx1ZXMpKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hTdHJpbmddXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHF1b3RlZFN0cmluZyhzdHJpbmcpLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2ggYSBxdW90ZWQgdmVyc2lvbiBvZiBgc3RyaW5nYCBvbnRvIHRoZSBzdGFja1xuXHQgIHB1c2hTdHJpbmc6IGZ1bmN0aW9uIHB1c2hTdHJpbmcoc3RyaW5nKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5xdW90ZWRTdHJpbmcoc3RyaW5nKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoTGl0ZXJhbF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogdmFsdWUsIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaGVzIGEgdmFsdWUgb250byB0aGUgc3RhY2suIFRoaXMgb3BlcmF0aW9uIHByZXZlbnRzXG5cdCAgLy8gdGhlIGNvbXBpbGVyIGZyb20gY3JlYXRpbmcgYSB0ZW1wb3JhcnkgdmFyaWFibGUgdG8gaG9sZFxuXHQgIC8vIGl0LlxuXHQgIHB1c2hMaXRlcmFsOiBmdW5jdGlvbiBwdXNoTGl0ZXJhbCh2YWx1ZSkge1xuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHZhbHVlKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hQcm9ncmFtXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBwcm9ncmFtKGd1aWQpLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2ggYSBwcm9ncmFtIGV4cHJlc3Npb24gb250byB0aGUgc3RhY2suIFRoaXMgdGFrZXNcblx0ICAvLyBhIGNvbXBpbGUtdGltZSBndWlkIGFuZCBjb252ZXJ0cyBpdCBpbnRvIGEgcnVudGltZS1hY2Nlc3NpYmxlXG5cdCAgLy8gZXhwcmVzc2lvbi5cblx0ICBwdXNoUHJvZ3JhbTogZnVuY3Rpb24gcHVzaFByb2dyYW0oZ3VpZCkge1xuXHQgICAgaWYgKGd1aWQgIT0gbnVsbCkge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5wcm9ncmFtRXhwcmVzc2lvbihndWlkKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwobnVsbCk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFtyZWdpc3RlckRlY29yYXRvcl1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIFBvcHMgb2ZmIHRoZSBkZWNvcmF0b3IncyBwYXJhbWV0ZXJzLCBpbnZva2VzIHRoZSBkZWNvcmF0b3IsXG5cdCAgLy8gYW5kIGluc2VydHMgdGhlIGRlY29yYXRvciBpbnRvIHRoZSBkZWNvcmF0b3JzIGxpc3QuXG5cdCAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVjb3JhdG9yKHBhcmFtU2l6ZSwgbmFtZSkge1xuXHQgICAgdmFyIGZvdW5kRGVjb3JhdG9yID0gdGhpcy5uYW1lTG9va3VwKCdkZWNvcmF0b3JzJywgbmFtZSwgJ2RlY29yYXRvcicpLFxuXHQgICAgICAgIG9wdGlvbnMgPSB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCBwYXJhbVNpemUpO1xuXG5cdCAgICB0aGlzLmRlY29yYXRvcnMucHVzaChbJ2ZuID0gJywgdGhpcy5kZWNvcmF0b3JzLmZ1bmN0aW9uQ2FsbChmb3VuZERlY29yYXRvciwgJycsIFsnZm4nLCAncHJvcHMnLCAnY29udGFpbmVyJywgb3B0aW9uc10pLCAnIHx8IGZuOyddKTtcblx0ICB9LFxuXG5cdCAgLy8gW2ludm9rZUhlbHBlcl1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFBvcHMgb2ZmIHRoZSBoZWxwZXIncyBwYXJhbWV0ZXJzLCBpbnZva2VzIHRoZSBoZWxwZXIsXG5cdCAgLy8gYW5kIHB1c2hlcyB0aGUgaGVscGVyJ3MgcmV0dXJuIHZhbHVlIG9udG8gdGhlIHN0YWNrLlxuXHQgIC8vXG5cdCAgLy8gSWYgdGhlIGhlbHBlciBpcyBub3QgZm91bmQsIGBoZWxwZXJNaXNzaW5nYCBpcyBjYWxsZWQuXG5cdCAgaW52b2tlSGVscGVyOiBmdW5jdGlvbiBpbnZva2VIZWxwZXIocGFyYW1TaXplLCBuYW1lLCBpc1NpbXBsZSkge1xuXHQgICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKSxcblx0ICAgICAgICBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSksXG5cdCAgICAgICAgc2ltcGxlID0gaXNTaW1wbGUgPyBbaGVscGVyLm5hbWUsICcgfHwgJ10gOiAnJztcblxuXHQgICAgdmFyIGxvb2t1cCA9IFsnKCddLmNvbmNhdChzaW1wbGUsIG5vbkhlbHBlcik7XG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcblx0ICAgICAgbG9va3VwLnB1c2goJyB8fCAnLCB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5oZWxwZXJNaXNzaW5nJykpO1xuXHQgICAgfVxuXHQgICAgbG9va3VwLnB1c2goJyknKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChsb29rdXAsICdjYWxsJywgaGVscGVyLmNhbGxQYXJhbXMpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2ludm9rZUtub3duSGVscGVyXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBoZWxwZXIgaW52b2NhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIHRoZSBoZWxwZXIgaXMga25vd24gdG8gZXhpc3QsXG5cdCAgLy8gc28gYSBgaGVscGVyTWlzc2luZ2AgZmFsbGJhY2sgaXMgbm90IHJlcXVpcmVkLlxuXHQgIGludm9rZUtub3duSGVscGVyOiBmdW5jdGlvbiBpbnZva2VLbm93bkhlbHBlcihwYXJhbVNpemUsIG5hbWUpIHtcblx0ICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSk7XG5cdCAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGhlbHBlci5uYW1lLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VBbWJpZ3VvdXNdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGRpc2FtYmlndWF0aW9uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBpcyB1c2VkIHdoZW4gYW4gZXhwcmVzc2lvbiBsaWtlIGB7e2Zvb319YFxuXHQgIC8vIGlzIHByb3ZpZGVkLCBidXQgd2UgZG9uJ3Qga25vdyBhdCBjb21waWxlLXRpbWUgd2hldGhlciBpdFxuXHQgIC8vIGlzIGEgaGVscGVyIG9yIGEgcGF0aC5cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGVtaXRzIG1vcmUgY29kZSB0aGFuIHRoZSBvdGhlciBvcHRpb25zLFxuXHQgIC8vIGFuZCBjYW4gYmUgYXZvaWRlZCBieSBwYXNzaW5nIHRoZSBga25vd25IZWxwZXJzYCBhbmRcblx0ICAvLyBga25vd25IZWxwZXJzT25seWAgZmxhZ3MgYXQgY29tcGlsZS10aW1lLlxuXHQgIGludm9rZUFtYmlndW91czogZnVuY3Rpb24gaW52b2tlQW1iaWd1b3VzKG5hbWUsIGhlbHBlckNhbGwpIHtcblx0ICAgIHRoaXMudXNlUmVnaXN0ZXIoJ2hlbHBlcicpO1xuXG5cdCAgICB2YXIgbm9uSGVscGVyID0gdGhpcy5wb3BTdGFjaygpO1xuXG5cdCAgICB0aGlzLmVtcHR5SGFzaCgpO1xuXHQgICAgdmFyIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIoMCwgbmFtZSwgaGVscGVyQ2FsbCk7XG5cblx0ICAgIHZhciBoZWxwZXJOYW1lID0gdGhpcy5sYXN0SGVscGVyID0gdGhpcy5uYW1lTG9va3VwKCdoZWxwZXJzJywgbmFtZSwgJ2hlbHBlcicpO1xuXG5cdCAgICB2YXIgbG9va3VwID0gWycoJywgJyhoZWxwZXIgPSAnLCBoZWxwZXJOYW1lLCAnIHx8ICcsIG5vbkhlbHBlciwgJyknXTtcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLnN0cmljdCkge1xuXHQgICAgICBsb29rdXBbMF0gPSAnKGhlbHBlciA9ICc7XG5cdCAgICAgIGxvb2t1cC5wdXNoKCcgIT0gbnVsbCA/IGhlbHBlciA6ICcsIHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmhlbHBlck1pc3NpbmcnKSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucHVzaChbJygnLCBsb29rdXAsIGhlbHBlci5wYXJhbXNJbml0ID8gWycpLCgnLCBoZWxwZXIucGFyYW1zSW5pdF0gOiBbXSwgJyksJywgJyh0eXBlb2YgaGVscGVyID09PSAnLCB0aGlzLmFsaWFzYWJsZSgnXCJmdW5jdGlvblwiJyksICcgPyAnLCB0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoJ2hlbHBlcicsICdjYWxsJywgaGVscGVyLmNhbGxQYXJhbXMpLCAnIDogaGVscGVyKSknXSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VQYXJ0aWFsXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogY29udGV4dCwgLi4uXG5cdCAgLy8gT24gc3RhY2sgYWZ0ZXI6IHJlc3VsdCBvZiBwYXJ0aWFsIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIHBvcHMgb2ZmIGEgY29udGV4dCwgaW52b2tlcyBhIHBhcnRpYWwgd2l0aCB0aGF0IGNvbnRleHQsXG5cdCAgLy8gYW5kIHB1c2hlcyB0aGUgcmVzdWx0IG9mIHRoZSBpbnZvY2F0aW9uIGJhY2suXG5cdCAgaW52b2tlUGFydGlhbDogZnVuY3Rpb24gaW52b2tlUGFydGlhbChpc0R5bmFtaWMsIG5hbWUsIGluZGVudCkge1xuXHQgICAgdmFyIHBhcmFtcyA9IFtdLFxuXHQgICAgICAgIG9wdGlvbnMgPSB0aGlzLnNldHVwUGFyYW1zKG5hbWUsIDEsIHBhcmFtcyk7XG5cblx0ICAgIGlmIChpc0R5bmFtaWMpIHtcblx0ICAgICAgbmFtZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGluZGVudCkge1xuXHQgICAgICBvcHRpb25zLmluZGVudCA9IEpTT04uc3RyaW5naWZ5KGluZGVudCk7XG5cdCAgICB9XG5cdCAgICBvcHRpb25zLmhlbHBlcnMgPSAnaGVscGVycyc7XG5cdCAgICBvcHRpb25zLnBhcnRpYWxzID0gJ3BhcnRpYWxzJztcblx0ICAgIG9wdGlvbnMuZGVjb3JhdG9ycyA9ICdjb250YWluZXIuZGVjb3JhdG9ycyc7XG5cblx0ICAgIGlmICghaXNEeW5hbWljKSB7XG5cdCAgICAgIHBhcmFtcy51bnNoaWZ0KHRoaXMubmFtZUxvb2t1cCgncGFydGlhbHMnLCBuYW1lLCAncGFydGlhbCcpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBhcmFtcy51bnNoaWZ0KG5hbWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdCkge1xuXHQgICAgICBvcHRpb25zLmRlcHRocyA9ICdkZXB0aHMnO1xuXHQgICAgfVxuXHQgICAgb3B0aW9ucyA9IHRoaXMub2JqZWN0TGl0ZXJhbChvcHRpb25zKTtcblx0ICAgIHBhcmFtcy5wdXNoKG9wdGlvbnMpO1xuXG5cdCAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdjb250YWluZXIuaW52b2tlUGFydGlhbCcsICcnLCBwYXJhbXMpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2Fzc2lnblRvSGFzaF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi4sIGhhc2gsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uLCBoYXNoLCAuLi5cblx0ICAvL1xuXHQgIC8vIFBvcHMgYSB2YWx1ZSBvZmYgdGhlIHN0YWNrIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBjdXJyZW50IGhhc2hcblx0ICBhc3NpZ25Ub0hhc2g6IGZ1bmN0aW9uIGFzc2lnblRvSGFzaChrZXkpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHRoaXMucG9wU3RhY2soKSxcblx0ICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHR5cGUgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgaWQgPSB1bmRlZmluZWQ7XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIGlkID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIHR5cGUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIGNvbnRleHQgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuXHQgICAgaWYgKGNvbnRleHQpIHtcblx0ICAgICAgaGFzaC5jb250ZXh0c1trZXldID0gY29udGV4dDtcblx0ICAgIH1cblx0ICAgIGlmICh0eXBlKSB7XG5cdCAgICAgIGhhc2gudHlwZXNba2V5XSA9IHR5cGU7XG5cdCAgICB9XG5cdCAgICBpZiAoaWQpIHtcblx0ICAgICAgaGFzaC5pZHNba2V5XSA9IGlkO1xuXHQgICAgfVxuXHQgICAgaGFzaC52YWx1ZXNba2V5XSA9IHZhbHVlO1xuXHQgIH0sXG5cblx0ICBwdXNoSWQ6IGZ1bmN0aW9uIHB1c2hJZCh0eXBlLCBuYW1lLCBjaGlsZCkge1xuXHQgICAgaWYgKHR5cGUgPT09ICdCbG9ja1BhcmFtJykge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2Jsb2NrUGFyYW1zWycgKyBuYW1lWzBdICsgJ10ucGF0aFsnICsgbmFtZVsxXSArICddJyArIChjaGlsZCA/ICcgKyAnICsgSlNPTi5zdHJpbmdpZnkoJy4nICsgY2hpbGQpIDogJycpKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1BhdGhFeHByZXNzaW9uJykge1xuXHQgICAgICB0aGlzLnB1c2hTdHJpbmcobmFtZSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTdWJFeHByZXNzaW9uJykge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ3RydWUnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnbnVsbCcpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBIRUxQRVJTXG5cblx0ICBjb21waWxlcjogSmF2YVNjcmlwdENvbXBpbGVyLFxuXG5cdCAgY29tcGlsZUNoaWxkcmVuOiBmdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4oZW52aXJvbm1lbnQsIG9wdGlvbnMpIHtcblx0ICAgIHZhciBjaGlsZHJlbiA9IGVudmlyb25tZW50LmNoaWxkcmVuLFxuXHQgICAgICAgIGNoaWxkID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGNvbXBpbGVyID0gdW5kZWZpbmVkO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXHQgICAgICBjb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXG5cdCAgICAgIHZhciBleGlzdGluZyA9IHRoaXMubWF0Y2hFeGlzdGluZ1Byb2dyYW0oY2hpbGQpO1xuXG5cdCAgICAgIGlmIChleGlzdGluZyA9PSBudWxsKSB7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LnByb2dyYW1zLnB1c2goJycpOyAvLyBQbGFjZWhvbGRlciB0byBwcmV2ZW50IG5hbWUgY29uZmxpY3RzIGZvciBuZXN0ZWQgY2hpbGRyZW5cblx0ICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNvbnRleHQucHJvZ3JhbXMubGVuZ3RoO1xuXHQgICAgICAgIGNoaWxkLmluZGV4ID0gaW5kZXg7XG5cdCAgICAgICAgY2hpbGQubmFtZSA9ICdwcm9ncmFtJyArIGluZGV4O1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtc1tpbmRleF0gPSBjb21waWxlci5jb21waWxlKGNoaWxkLCBvcHRpb25zLCB0aGlzLmNvbnRleHQsICF0aGlzLnByZWNvbXBpbGUpO1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5kZWNvcmF0b3JzW2luZGV4XSA9IGNvbXBpbGVyLmRlY29yYXRvcnM7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LmVudmlyb25tZW50c1tpbmRleF0gPSBjaGlsZDtcblxuXHQgICAgICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgY29tcGlsZXIudXNlRGVwdGhzO1xuXHQgICAgICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IGNvbXBpbGVyLnVzZUJsb2NrUGFyYW1zO1xuXHQgICAgICAgIGNoaWxkLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzO1xuXHQgICAgICAgIGNoaWxkLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBjaGlsZC5pbmRleCA9IGV4aXN0aW5nLmluZGV4O1xuXHQgICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBleGlzdGluZy5pbmRleDtcblxuXHQgICAgICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZXhpc3RpbmcudXNlRGVwdGhzO1xuXHQgICAgICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IGV4aXN0aW5nLnVzZUJsb2NrUGFyYW1zO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBtYXRjaEV4aXN0aW5nUHJvZ3JhbTogZnVuY3Rpb24gbWF0Y2hFeGlzdGluZ1Byb2dyYW0oY2hpbGQpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHZhciBlbnZpcm9ubWVudCA9IHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaV07XG5cdCAgICAgIGlmIChlbnZpcm9ubWVudCAmJiBlbnZpcm9ubWVudC5lcXVhbHMoY2hpbGQpKSB7XG5cdCAgICAgICAgcmV0dXJuIGVudmlyb25tZW50O1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHByb2dyYW1FeHByZXNzaW9uOiBmdW5jdGlvbiBwcm9ncmFtRXhwcmVzc2lvbihndWlkKSB7XG5cdCAgICB2YXIgY2hpbGQgPSB0aGlzLmVudmlyb25tZW50LmNoaWxkcmVuW2d1aWRdLFxuXHQgICAgICAgIHByb2dyYW1QYXJhbXMgPSBbY2hpbGQuaW5kZXgsICdkYXRhJywgY2hpbGQuYmxvY2tQYXJhbXNdO1xuXG5cdCAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcyB8fCB0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwcm9ncmFtUGFyYW1zLnB1c2goJ2Jsb2NrUGFyYW1zJyk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcHJvZ3JhbVBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuICdjb250YWluZXIucHJvZ3JhbSgnICsgcHJvZ3JhbVBhcmFtcy5qb2luKCcsICcpICsgJyknO1xuXHQgIH0sXG5cblx0ICB1c2VSZWdpc3RlcjogZnVuY3Rpb24gdXNlUmVnaXN0ZXIobmFtZSkge1xuXHQgICAgaWYgKCF0aGlzLnJlZ2lzdGVyc1tuYW1lXSkge1xuXHQgICAgICB0aGlzLnJlZ2lzdGVyc1tuYW1lXSA9IHRydWU7XG5cdCAgICAgIHRoaXMucmVnaXN0ZXJzLmxpc3QucHVzaChuYW1lKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaDogZnVuY3Rpb24gcHVzaChleHByKSB7XG5cdCAgICBpZiAoIShleHByIGluc3RhbmNlb2YgTGl0ZXJhbCkpIHtcblx0ICAgICAgZXhwciA9IHRoaXMuc291cmNlLndyYXAoZXhwcik7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMuaW5saW5lU3RhY2sucHVzaChleHByKTtcblx0ICAgIHJldHVybiBleHByO1xuXHQgIH0sXG5cblx0ICBwdXNoU3RhY2tMaXRlcmFsOiBmdW5jdGlvbiBwdXNoU3RhY2tMaXRlcmFsKGl0ZW0pIHtcblx0ICAgIHRoaXMucHVzaChuZXcgTGl0ZXJhbChpdGVtKSk7XG5cdCAgfSxcblxuXHQgIHB1c2hTb3VyY2U6IGZ1bmN0aW9uIHB1c2hTb3VyY2Uoc291cmNlKSB7XG5cdCAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xuXHQgICAgICB0aGlzLnNvdXJjZS5wdXNoKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHRoaXMucGVuZGluZ0NvbnRlbnQpLCB0aGlzLnBlbmRpbmdMb2NhdGlvbikpO1xuXHQgICAgICB0aGlzLnBlbmRpbmdDb250ZW50ID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc291cmNlKSB7XG5cdCAgICAgIHRoaXMuc291cmNlLnB1c2goc291cmNlKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcmVwbGFjZVN0YWNrOiBmdW5jdGlvbiByZXBsYWNlU3RhY2soY2FsbGJhY2spIHtcblx0ICAgIHZhciBwcmVmaXggPSBbJygnXSxcblx0ICAgICAgICBzdGFjayA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjcmVhdGVkU3RhY2sgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgdXNlZExpdGVyYWwgPSB1bmRlZmluZWQ7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICBpZiAoIXRoaXMuaXNJbmxpbmUoKSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgncmVwbGFjZVN0YWNrIG9uIG5vbi1pbmxpbmUnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gV2Ugd2FudCB0byBtZXJnZSB0aGUgaW5saW5lIHN0YXRlbWVudCBpbnRvIHRoZSByZXBsYWNlbWVudCBzdGF0ZW1lbnQgdmlhICcsJ1xuXHQgICAgdmFyIHRvcCA9IHRoaXMucG9wU3RhY2sodHJ1ZSk7XG5cblx0ICAgIGlmICh0b3AgaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIC8vIExpdGVyYWxzIGRvIG5vdCBuZWVkIHRvIGJlIGlubGluZWRcblx0ICAgICAgc3RhY2sgPSBbdG9wLnZhbHVlXTtcblx0ICAgICAgcHJlZml4ID0gWycoJywgc3RhY2tdO1xuXHQgICAgICB1c2VkTGl0ZXJhbCA9IHRydWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBHZXQgb3IgY3JlYXRlIHRoZSBjdXJyZW50IHN0YWNrIG5hbWUgZm9yIHVzZSBieSB0aGUgaW5saW5lXG5cdCAgICAgIGNyZWF0ZWRTdGFjayA9IHRydWU7XG5cdCAgICAgIHZhciBfbmFtZSA9IHRoaXMuaW5jclN0YWNrKCk7XG5cblx0ICAgICAgcHJlZml4ID0gWycoKCcsIHRoaXMucHVzaChfbmFtZSksICcgPSAnLCB0b3AsICcpJ107XG5cdCAgICAgIHN0YWNrID0gdGhpcy50b3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaXRlbSA9IGNhbGxiYWNrLmNhbGwodGhpcywgc3RhY2spO1xuXG5cdCAgICBpZiAoIXVzZWRMaXRlcmFsKSB7XG5cdCAgICAgIHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmIChjcmVhdGVkU3RhY2spIHtcblx0ICAgICAgdGhpcy5zdGFja1Nsb3QtLTtcblx0ICAgIH1cblx0ICAgIHRoaXMucHVzaChwcmVmaXguY29uY2F0KGl0ZW0sICcpJykpO1xuXHQgIH0sXG5cblx0ICBpbmNyU3RhY2s6IGZ1bmN0aW9uIGluY3JTdGFjaygpIHtcblx0ICAgIHRoaXMuc3RhY2tTbG90Kys7XG5cdCAgICBpZiAodGhpcy5zdGFja1Nsb3QgPiB0aGlzLnN0YWNrVmFycy5sZW5ndGgpIHtcblx0ICAgICAgdGhpcy5zdGFja1ZhcnMucHVzaCgnc3RhY2snICsgdGhpcy5zdGFja1Nsb3QpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHRoaXMudG9wU3RhY2tOYW1lKCk7XG5cdCAgfSxcblx0ICB0b3BTdGFja05hbWU6IGZ1bmN0aW9uIHRvcFN0YWNrTmFtZSgpIHtcblx0ICAgIHJldHVybiAnc3RhY2snICsgdGhpcy5zdGFja1Nsb3Q7XG5cdCAgfSxcblx0ICBmbHVzaElubGluZTogZnVuY3Rpb24gZmx1c2hJbmxpbmUoKSB7XG5cdCAgICB2YXIgaW5saW5lU3RhY2sgPSB0aGlzLmlubGluZVN0YWNrO1xuXHQgICAgdGhpcy5pbmxpbmVTdGFjayA9IFtdO1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGlubGluZVN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHZhciBlbnRyeSA9IGlubGluZVN0YWNrW2ldO1xuXHQgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblx0ICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICAgIHRoaXMuY29tcGlsZVN0YWNrLnB1c2goZW50cnkpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhciBzdGFjayA9IHRoaXMuaW5jclN0YWNrKCk7XG5cdCAgICAgICAgdGhpcy5wdXNoU291cmNlKFtzdGFjaywgJyA9ICcsIGVudHJ5LCAnOyddKTtcblx0ICAgICAgICB0aGlzLmNvbXBpbGVTdGFjay5wdXNoKHN0YWNrKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgaXNJbmxpbmU6IGZ1bmN0aW9uIGlzSW5saW5lKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuaW5saW5lU3RhY2subGVuZ3RoO1xuXHQgIH0sXG5cblx0ICBwb3BTdGFjazogZnVuY3Rpb24gcG9wU3RhY2sod3JhcHBlZCkge1xuXHQgICAgdmFyIGlubGluZSA9IHRoaXMuaXNJbmxpbmUoKSxcblx0ICAgICAgICBpdGVtID0gKGlubGluZSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjaykucG9wKCk7XG5cblx0ICAgIGlmICghd3JhcHBlZCAmJiBpdGVtIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICghaW5saW5lKSB7XG5cdCAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgICAgICBpZiAoIXRoaXMuc3RhY2tTbG90KSB7XG5cdCAgICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnSW52YWxpZCBzdGFjayBwb3AnKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5zdGFja1Nsb3QtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gaXRlbTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgdG9wU3RhY2s6IGZ1bmN0aW9uIHRvcFN0YWNrKCkge1xuXHQgICAgdmFyIHN0YWNrID0gdGhpcy5pc0lubGluZSgpID8gdGhpcy5pbmxpbmVTdGFjayA6IHRoaXMuY29tcGlsZVN0YWNrLFxuXHQgICAgICAgIGl0ZW0gPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cdCAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gaXRlbTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgY29udGV4dE5hbWU6IGZ1bmN0aW9uIGNvbnRleHROYW1lKGNvbnRleHQpIHtcblx0ICAgIGlmICh0aGlzLnVzZURlcHRocyAmJiBjb250ZXh0KSB7XG5cdCAgICAgIHJldHVybiAnZGVwdGhzWycgKyBjb250ZXh0ICsgJ10nO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuICdkZXB0aCcgKyBjb250ZXh0O1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uIHF1b3RlZFN0cmluZyhzdHIpIHtcblx0ICAgIHJldHVybiB0aGlzLnNvdXJjZS5xdW90ZWRTdHJpbmcoc3RyKTtcblx0ICB9LFxuXG5cdCAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbChvYmopIHtcblx0ICAgIHJldHVybiB0aGlzLnNvdXJjZS5vYmplY3RMaXRlcmFsKG9iaik7XG5cdCAgfSxcblxuXHQgIGFsaWFzYWJsZTogZnVuY3Rpb24gYWxpYXNhYmxlKG5hbWUpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmFsaWFzZXNbbmFtZV07XG5cdCAgICBpZiAocmV0KSB7XG5cdCAgICAgIHJldC5yZWZlcmVuY2VDb3VudCsrO1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfVxuXG5cdCAgICByZXQgPSB0aGlzLmFsaWFzZXNbbmFtZV0gPSB0aGlzLnNvdXJjZS53cmFwKG5hbWUpO1xuXHQgICAgcmV0LmFsaWFzYWJsZSA9IHRydWU7XG5cdCAgICByZXQucmVmZXJlbmNlQ291bnQgPSAxO1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBzZXR1cEhlbHBlcjogZnVuY3Rpb24gc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lLCBibG9ja0hlbHBlcikge1xuXHQgICAgdmFyIHBhcmFtcyA9IFtdLFxuXHQgICAgICAgIHBhcmFtc0luaXQgPSB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCBwYXJhbVNpemUsIHBhcmFtcywgYmxvY2tIZWxwZXIpO1xuXHQgICAgdmFyIGZvdW5kSGVscGVyID0gdGhpcy5uYW1lTG9va3VwKCdoZWxwZXJzJywgbmFtZSwgJ2hlbHBlcicpLFxuXHQgICAgICAgIGNhbGxDb250ZXh0ID0gdGhpcy5hbGlhc2FibGUodGhpcy5jb250ZXh0TmFtZSgwKSArICcgIT0gbnVsbCA/ICcgKyB0aGlzLmNvbnRleHROYW1lKDApICsgJyA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pJyk7XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIHBhcmFtczogcGFyYW1zLFxuXHQgICAgICBwYXJhbXNJbml0OiBwYXJhbXNJbml0LFxuXHQgICAgICBuYW1lOiBmb3VuZEhlbHBlcixcblx0ICAgICAgY2FsbFBhcmFtczogW2NhbGxDb250ZXh0XS5jb25jYXQocGFyYW1zKVxuXHQgICAgfTtcblx0ICB9LFxuXG5cdCAgc2V0dXBQYXJhbXM6IGZ1bmN0aW9uIHNldHVwUGFyYW1zKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMpIHtcblx0ICAgIHZhciBvcHRpb25zID0ge30sXG5cdCAgICAgICAgY29udGV4dHMgPSBbXSxcblx0ICAgICAgICB0eXBlcyA9IFtdLFxuXHQgICAgICAgIGlkcyA9IFtdLFxuXHQgICAgICAgIG9iamVjdEFyZ3MgPSAhcGFyYW1zLFxuXHQgICAgICAgIHBhcmFtID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAob2JqZWN0QXJncykge1xuXHQgICAgICBwYXJhbXMgPSBbXTtcblx0ICAgIH1cblxuXHQgICAgb3B0aW9ucy5uYW1lID0gdGhpcy5xdW90ZWRTdHJpbmcoaGVscGVyKTtcblx0ICAgIG9wdGlvbnMuaGFzaCA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgb3B0aW9ucy5oYXNoSWRzID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMuaGFzaFR5cGVzID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBvcHRpb25zLmhhc2hDb250ZXh0cyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGludmVyc2UgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgcHJvZ3JhbSA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgLy8gQXZvaWQgc2V0dGluZyBmbiBhbmQgaW52ZXJzZSBpZiBuZWl0aGVyIGFyZSBzZXQuIFRoaXMgYWxsb3dzXG5cdCAgICAvLyBoZWxwZXJzIHRvIGRvIGEgY2hlY2sgZm9yIGBpZiAob3B0aW9ucy5mbilgXG5cdCAgICBpZiAocHJvZ3JhbSB8fCBpbnZlcnNlKSB7XG5cdCAgICAgIG9wdGlvbnMuZm4gPSBwcm9ncmFtIHx8ICdjb250YWluZXIubm9vcCc7XG5cdCAgICAgIG9wdGlvbnMuaW52ZXJzZSA9IGludmVyc2UgfHwgJ2NvbnRhaW5lci5ub29wJztcblx0ICAgIH1cblxuXHQgICAgLy8gVGhlIHBhcmFtZXRlcnMgZ28gb24gdG8gdGhlIHN0YWNrIGluIG9yZGVyIChtYWtpbmcgc3VyZSB0aGF0IHRoZXkgYXJlIGV2YWx1YXRlZCBpbiBvcmRlcilcblx0ICAgIC8vIHNvIHdlIG5lZWQgdG8gcG9wIHRoZW0gb2ZmIHRoZSBzdGFjayBpbiByZXZlcnNlIG9yZGVyXG5cdCAgICB2YXIgaSA9IHBhcmFtU2l6ZTtcblx0ICAgIHdoaWxlIChpLS0pIHtcblx0ICAgICAgcGFyYW0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIHBhcmFtc1tpXSA9IHBhcmFtO1xuXG5cdCAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgICAgaWRzW2ldID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICAgIHR5cGVzW2ldID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICAgIGNvbnRleHRzW2ldID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmIChvYmplY3RBcmdzKSB7XG5cdCAgICAgIG9wdGlvbnMuYXJncyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkocGFyYW1zKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgb3B0aW9ucy5pZHMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGlkcyk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy50eXBlcyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkodHlwZXMpO1xuXHQgICAgICBvcHRpb25zLmNvbnRleHRzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShjb250ZXh0cyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuXHQgICAgICBvcHRpb25zLmRhdGEgPSAnZGF0YSc7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLmJsb2NrUGFyYW1zID0gJ2Jsb2NrUGFyYW1zJztcblx0ICAgIH1cblx0ICAgIHJldHVybiBvcHRpb25zO1xuXHQgIH0sXG5cblx0ICBzZXR1cEhlbHBlckFyZ3M6IGZ1bmN0aW9uIHNldHVwSGVscGVyQXJncyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zLCB1c2VSZWdpc3Rlcikge1xuXHQgICAgdmFyIG9wdGlvbnMgPSB0aGlzLnNldHVwUGFyYW1zKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMpO1xuXHQgICAgb3B0aW9ucyA9IHRoaXMub2JqZWN0TGl0ZXJhbChvcHRpb25zKTtcblx0ICAgIGlmICh1c2VSZWdpc3Rlcikge1xuXHQgICAgICB0aGlzLnVzZVJlZ2lzdGVyKCdvcHRpb25zJyk7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdvcHRpb25zJyk7XG5cdCAgICAgIHJldHVybiBbJ29wdGlvbnM9Jywgb3B0aW9uc107XG5cdCAgICB9IGVsc2UgaWYgKHBhcmFtcykge1xuXHQgICAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcblx0ICAgICAgcmV0dXJuICcnO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnM7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIHJlc2VydmVkV29yZHMgPSAoJ2JyZWFrIGVsc2UgbmV3IHZhcicgKyAnIGNhc2UgZmluYWxseSByZXR1cm4gdm9pZCcgKyAnIGNhdGNoIGZvciBzd2l0Y2ggd2hpbGUnICsgJyBjb250aW51ZSBmdW5jdGlvbiB0aGlzIHdpdGgnICsgJyBkZWZhdWx0IGlmIHRocm93JyArICcgZGVsZXRlIGluIHRyeScgKyAnIGRvIGluc3RhbmNlb2YgdHlwZW9mJyArICcgYWJzdHJhY3QgZW51bSBpbnQgc2hvcnQnICsgJyBib29sZWFuIGV4cG9ydCBpbnRlcmZhY2Ugc3RhdGljJyArICcgYnl0ZSBleHRlbmRzIGxvbmcgc3VwZXInICsgJyBjaGFyIGZpbmFsIG5hdGl2ZSBzeW5jaHJvbml6ZWQnICsgJyBjbGFzcyBmbG9hdCBwYWNrYWdlIHRocm93cycgKyAnIGNvbnN0IGdvdG8gcHJpdmF0ZSB0cmFuc2llbnQnICsgJyBkZWJ1Z2dlciBpbXBsZW1lbnRzIHByb3RlY3RlZCB2b2xhdGlsZScgKyAnIGRvdWJsZSBpbXBvcnQgcHVibGljIGxldCB5aWVsZCBhd2FpdCcgKyAnIG51bGwgdHJ1ZSBmYWxzZScpLnNwbGl0KCcgJyk7XG5cblx0ICB2YXIgY29tcGlsZXJXb3JkcyA9IEphdmFTY3JpcHRDb21waWxlci5SRVNFUlZFRF9XT1JEUyA9IHt9O1xuXG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSByZXNlcnZlZFdvcmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgY29tcGlsZXJXb3Jkc1tyZXNlcnZlZFdvcmRzW2ldXSA9IHRydWU7XG5cdCAgfVxuXHR9KSgpO1xuXG5cdEphdmFTY3JpcHRDb21waWxlci5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgcmV0dXJuICFKYXZhU2NyaXB0Q29tcGlsZXIuUkVTRVJWRURfV09SRFNbbmFtZV0gJiYgL15bYS16QS1aXyRdWzAtOWEtekEtWl8kXSokLy50ZXN0KG5hbWUpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHN0cmljdExvb2t1cChyZXF1aXJlVGVybWluYWwsIGNvbXBpbGVyLCBwYXJ0cywgdHlwZSkge1xuXHQgIHZhciBzdGFjayA9IGNvbXBpbGVyLnBvcFN0YWNrKCksXG5cdCAgICAgIGkgPSAwLFxuXHQgICAgICBsZW4gPSBwYXJ0cy5sZW5ndGg7XG5cdCAgaWYgKHJlcXVpcmVUZXJtaW5hbCkge1xuXHQgICAgbGVuLS07XG5cdCAgfVxuXG5cdCAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgc3RhY2sgPSBjb21waWxlci5uYW1lTG9va3VwKHN0YWNrLCBwYXJ0c1tpXSwgdHlwZSk7XG5cdCAgfVxuXG5cdCAgaWYgKHJlcXVpcmVUZXJtaW5hbCkge1xuXHQgICAgcmV0dXJuIFtjb21waWxlci5hbGlhc2FibGUoJ2NvbnRhaW5lci5zdHJpY3QnKSwgJygnLCBzdGFjaywgJywgJywgY29tcGlsZXIucXVvdGVkU3RyaW5nKHBhcnRzW2ldKSwgJyknXTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIHN0YWNrO1xuXHQgIH1cblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEphdmFTY3JpcHRDb21waWxlcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBnbG9iYWwgZGVmaW5lICovXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBTb3VyY2VOb2RlID0gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBpZiAoZmFsc2UpIHtcblx0ICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgdGhpcyBpbiBBTUQgZW52aXJvbm1lbnRzLiBGb3IgdGhlc2UgZW52aXJvbm1lbnRzLCB3ZSBhc3VzbWUgdGhhdFxuXHQgICAgLy8gdGhleSBhcmUgcnVubmluZyBvbiB0aGUgYnJvd3NlciBhbmQgdGh1cyBoYXZlIG5vIG5lZWQgZm9yIHRoZSBzb3VyY2UtbWFwIGxpYnJhcnkuXG5cdCAgICB2YXIgU291cmNlTWFwID0gcmVxdWlyZSgnc291cmNlLW1hcCcpO1xuXHQgICAgU291cmNlTm9kZSA9IFNvdXJjZU1hcC5Tb3VyY2VOb2RlO1xuXHQgIH1cblx0fSBjYXRjaCAoZXJyKSB7fVxuXHQvKiBOT1AgKi9cblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgaWY6IHRlc3RlZCBidXQgbm90IGNvdmVyZWQgaW4gaXN0YW5idWwgZHVlIHRvIGRpc3QgYnVpbGQgICovXG5cdGlmICghU291cmNlTm9kZSkge1xuXHQgIFNvdXJjZU5vZGUgPSBmdW5jdGlvbiAobGluZSwgY29sdW1uLCBzcmNGaWxlLCBjaHVua3MpIHtcblx0ICAgIHRoaXMuc3JjID0gJyc7XG5cdCAgICBpZiAoY2h1bmtzKSB7XG5cdCAgICAgIHRoaXMuYWRkKGNodW5rcyk7XG5cdCAgICB9XG5cdCAgfTtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIFNvdXJjZU5vZGUucHJvdG90eXBlID0ge1xuXHQgICAgYWRkOiBmdW5jdGlvbiBhZGQoY2h1bmtzKSB7XG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjaHVua3MpKSB7XG5cdCAgICAgICAgY2h1bmtzID0gY2h1bmtzLmpvaW4oJycpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3JjICs9IGNodW5rcztcblx0ICAgIH0sXG5cdCAgICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKGNodW5rcykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmtzKSkge1xuXHQgICAgICAgIGNodW5rcyA9IGNodW5rcy5qb2luKCcnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnNyYyA9IGNodW5rcyArIHRoaXMuc3JjO1xuXHQgICAgfSxcblx0ICAgIHRvU3RyaW5nV2l0aFNvdXJjZU1hcDogZnVuY3Rpb24gdG9TdHJpbmdXaXRoU291cmNlTWFwKCkge1xuXHQgICAgICByZXR1cm4geyBjb2RlOiB0aGlzLnRvU3RyaW5nKCkgfTtcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLnNyYztcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FzdENodW5rKGNodW5rLCBjb2RlR2VuLCBsb2MpIHtcblx0ICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmspKSB7XG5cdCAgICB2YXIgcmV0ID0gW107XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaHVuay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICByZXQucHVzaChjb2RlR2VuLndyYXAoY2h1bmtbaV0sIGxvYykpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9IGVsc2UgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBjaHVuayA9PT0gJ251bWJlcicpIHtcblx0ICAgIC8vIEhhbmRsZSBwcmltaXRpdmVzIHRoYXQgdGhlIFNvdXJjZU5vZGUgd2lsbCB0aHJvdyB1cCBvblxuXHQgICAgcmV0dXJuIGNodW5rICsgJyc7XG5cdCAgfVxuXHQgIHJldHVybiBjaHVuaztcblx0fVxuXG5cdGZ1bmN0aW9uIENvZGVHZW4oc3JjRmlsZSkge1xuXHQgIHRoaXMuc3JjRmlsZSA9IHNyY0ZpbGU7XG5cdCAgdGhpcy5zb3VyY2UgPSBbXTtcblx0fVxuXG5cdENvZGVHZW4ucHJvdG90eXBlID0ge1xuXHQgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG5cdCAgICByZXR1cm4gIXRoaXMuc291cmNlLmxlbmd0aDtcblx0ICB9LFxuXHQgIHByZXBlbmQ6IGZ1bmN0aW9uIHByZXBlbmQoc291cmNlLCBsb2MpIHtcblx0ICAgIHRoaXMuc291cmNlLnVuc2hpZnQodGhpcy53cmFwKHNvdXJjZSwgbG9jKSk7XG5cdCAgfSxcblx0ICBwdXNoOiBmdW5jdGlvbiBwdXNoKHNvdXJjZSwgbG9jKSB7XG5cdCAgICB0aGlzLnNvdXJjZS5wdXNoKHRoaXMud3JhcChzb3VyY2UsIGxvYykpO1xuXHQgIH0sXG5cblx0ICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG5cdCAgICB2YXIgc291cmNlID0gdGhpcy5lbXB0eSgpO1xuXHQgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgIHNvdXJjZS5hZGQoWycgICcsIGxpbmUsICdcXG4nXSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBzb3VyY2U7XG5cdCAgfSxcblxuXHQgIGVhY2g6IGZ1bmN0aW9uIGVhY2goaXRlcikge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuc291cmNlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGl0ZXIodGhpcy5zb3VyY2VbaV0pO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBlbXB0eTogZnVuY3Rpb24gZW1wdHkoKSB7XG5cdCAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYXRpb24gfHwgeyBzdGFydDoge30gfTtcblx0ICAgIHJldHVybiBuZXcgU291cmNlTm9kZShsb2Muc3RhcnQubGluZSwgbG9jLnN0YXJ0LmNvbHVtbiwgdGhpcy5zcmNGaWxlKTtcblx0ICB9LFxuXHQgIHdyYXA6IGZ1bmN0aW9uIHdyYXAoY2h1bmspIHtcblx0ICAgIHZhciBsb2MgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLmN1cnJlbnRMb2NhdGlvbiB8fCB7IHN0YXJ0OiB7fSB9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBTb3VyY2VOb2RlKSB7XG5cdCAgICAgIHJldHVybiBjaHVuaztcblx0ICAgIH1cblxuXHQgICAgY2h1bmsgPSBjYXN0Q2h1bmsoY2h1bmssIHRoaXMsIGxvYyk7XG5cblx0ICAgIHJldHVybiBuZXcgU291cmNlTm9kZShsb2Muc3RhcnQubGluZSwgbG9jLnN0YXJ0LmNvbHVtbiwgdGhpcy5zcmNGaWxlLCBjaHVuayk7XG5cdCAgfSxcblxuXHQgIGZ1bmN0aW9uQ2FsbDogZnVuY3Rpb24gZnVuY3Rpb25DYWxsKGZuLCB0eXBlLCBwYXJhbXMpIHtcblx0ICAgIHBhcmFtcyA9IHRoaXMuZ2VuZXJhdGVMaXN0KHBhcmFtcyk7XG5cdCAgICByZXR1cm4gdGhpcy53cmFwKFtmbiwgdHlwZSA/ICcuJyArIHR5cGUgKyAnKCcgOiAnKCcsIHBhcmFtcywgJyknXSk7XG5cdCAgfSxcblxuXHQgIHF1b3RlZFN0cmluZzogZnVuY3Rpb24gcXVvdGVkU3RyaW5nKHN0cikge1xuXHQgICAgcmV0dXJuICdcIicgKyAoc3RyICsgJycpLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKS5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJykucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JykgLy8gUGVyIEVjbWEtMjYyIDcuMyArIDcuOC40XG5cdCAgICAucmVwbGFjZSgvXFx1MjAyOS9nLCAnXFxcXHUyMDI5JykgKyAnXCInO1xuXHQgIH0sXG5cblx0ICBvYmplY3RMaXRlcmFsOiBmdW5jdGlvbiBvYmplY3RMaXRlcmFsKG9iaikge1xuXHQgICAgdmFyIHBhaXJzID0gW107XG5cblx0ICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0ICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdCAgICAgICAgdmFyIHZhbHVlID0gY2FzdENodW5rKG9ialtrZXldLCB0aGlzKTtcblx0ICAgICAgICBpZiAodmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICBwYWlycy5wdXNoKFt0aGlzLnF1b3RlZFN0cmluZyhrZXkpLCAnOicsIHZhbHVlXSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChwYWlycyk7XG5cdCAgICByZXQucHJlcGVuZCgneycpO1xuXHQgICAgcmV0LmFkZCgnfScpO1xuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgZ2VuZXJhdGVMaXN0OiBmdW5jdGlvbiBnZW5lcmF0ZUxpc3QoZW50cmllcykge1xuXHQgICAgdmFyIHJldCA9IHRoaXMuZW1wdHkoKTtcblxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVudHJpZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgaWYgKGkpIHtcblx0ICAgICAgICByZXQuYWRkKCcsJyk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXQuYWRkKGNhc3RDaHVuayhlbnRyaWVzW2ldLCB0aGlzKSk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIGdlbmVyYXRlQXJyYXk6IGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXkoZW50cmllcykge1xuXHQgICAgdmFyIHJldCA9IHRoaXMuZ2VuZXJhdGVMaXN0KGVudHJpZXMpO1xuXHQgICAgcmV0LnByZXBlbmQoJ1snKTtcblx0ICAgIHJldC5hZGQoJ10nKTtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQ29kZUdlbjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47IiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vY29tbW9uL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyB9IGZyb20gJy4vY29tbW9uL2hhbmRsZWJhcnMuanMnO1xyXG5pbXBvcnQgeyB0ZXh0RWRpdG9yIH0gZnJvbSAnLi90ZXh0LWVkaXRvci5qcyc7XHJcbmltcG9ydCB7IE5vdGlmaWVyIH0gZnJvbSAnLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHBhcmVudElkO1xyXG4gICAgbGV0ICRjb250YWluZXI7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZXNDYWNoZSA9IHt9O1xyXG4gICAgbGV0IGFyZWFJZDtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KGlkLCAkY29tbWVudHNDb250YWluZXIsIHRleHRBcmVhSWQpIHtcclxuICAgICAgICBwYXJlbnRJZCA9IGlkO1xyXG4gICAgICAgICRjb250YWluZXIgPSAkY29tbWVudHNDb250YWluZXIgfHwgJCgnI2NvbW1lbnRzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGFyZWFJZCA9IHRleHRBcmVhSWQgfHwgJ2NvbW1lbnQtYXJlYSc7XHJcbiAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoYXJlYUlkKTtcclxuICAgICAgICB0ZXh0RWRpdG9yLmluaXQoJyMnICsgYXJlYUlkLCA2MDAsIDMwMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKHRlbXBsYXRlc0NhY2hlLCBbeyBuYW1lOiAnY29tbWVudC1lZGl0JywgdXJsOiAnL3RlbXBsYXRlcy9jb21tZW50LWVkaXQuaHRtbCcgfV0pLFxyXG4gICAgICAgICAgICBsb2FkQ29tbWVudHMocGFyZW50SWQpXHJcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQ29tbWVudHMoaWQsICRjb21tZW50c0NvbnRhaW5lcikge1xyXG4gICAgICAgICRjb250YWluZXIgPSAkY29tbWVudHNDb250YWluZXIgfHwgJGNvbnRhaW5lciB8fCAkKCcjY29tbWVudHMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgLy8gVE9ETzogYWRkIGlubGluZSBsb2FkZXJcclxuICAgICAgICByZXR1cm4gRGF0YS5nZXRKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9jb21tZW50cy9sb2FkY29tbWVudHM/aWQ9JyArIGlkIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZChyZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENvbW1lbnQoZXYpIHtcclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gdGV4dEVkaXRvci5nZXRDb250ZW50KGFyZWFJZCk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0geyBpZDogcGFyZW50SWQsIGNvbnRlbnQgfTtcclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9jb21tZW50cy9hZGRjb21tZW50JywgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZChyZXMudmlldyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RWRpdG9yLmNsZWFyKGFyZWFJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0JywgbWVzc2FnZTogJ0NvbW1lbnQgbXVzdCBub3QgYmUgZW1wdHknLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRDb21tZW50KGV2KSB7XHJcbiAgICAgICAgY2xvc2VFZGl0KCk7XHJcbiAgICAgICAgbGV0ICR0cmlnZ2VyID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgJGNvbnRlbnQgPSAkdHJpZ2dlci5wYXJlbnRzKCcucGFuZWwtaGVhZGluZycpLm5leHQoJy5wYW5lbC1ib2R5Jyk7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gdGVtcGxhdGVzQ2FjaGVbJ2NvbW1lbnQtZWRpdCddKHsgY29udGVudDogJGNvbnRlbnQuaHRtbCgpIH0pO1xyXG4gICAgICAgICRjb250ZW50LnBhcmVudCgpLmFwcGVuZChodG1sKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnQuaGlkZSgpO1xyXG4gICAgICAgICR0cmlnZ2VyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgdGV4dEVkaXRvci5pbml0V2l0aG91dEltYWdlcygnI2VkaXQtcG9zdC1jb250ZW50JywgJycsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VFZGl0KGV2LCBjb250ZW50KSB7XHJcbiAgICAgICAgbGV0ICRjb250ZW50ID0gKGV2ICYmIGV2LnRhcmdldCA/ICQoZXYudGFyZ2V0KS5wYXJlbnRzKCcuZWRpdC1wb3N0LWNvbnRhaW5lcicpIDogJGNvbnRhaW5lci5maW5kKCcuZWRpdC1wb3N0LWNvbnRhaW5lcicpKS5wcmV2KCcucGFuZWwtYm9keScpO1xyXG4gICAgICAgIGlmICgkY29udGVudCAmJiAkY29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoJ2VkaXQtcG9zdC1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICRjb250ZW50LnByZXYoJy5wYW5lbC1oZWFkaW5nJykuZmluZCgnLmJ0bi1lZGl0LXBvc3QnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICRjb250ZW50LnNob3coKTtcclxuICAgICAgICAgICAgJCgnLmVkaXQtcG9zdC1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICRjb250ZW50Lmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZUVkaXRlZENvbW1lbnQoZXYpIHtcclxuICAgICAgICBsZXQgJHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgIGxldCBpZCA9ICR0cmlnZ2VyLnBhcmVudHMoJy5jb21tZW50LXdyYXBwZXInKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50ID0gdGV4dEVkaXRvci5nZXRDb250ZW50KCdlZGl0LXBvc3QtY29udGVudCcpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IHsgaWQsIGNvbnRlbnQgfTtcclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIERhdGEucG9zdEpzb24oeyB1cmw6ICcvc2l0ZXRyaWtzL2NvbW1lbnRzL2VkaXRjb21tZW50JywgZGF0YTogYm9keSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUVkaXQoeyB0YXJnZXQ6ICR0cmlnZ2VyIH0sIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNvbW1lbnQoZXYpIHtcclxuICAgICAgICBsZXQgJHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLmNvbW1lbnQtd3JhcHBlcicpO1xyXG4gICAgICAgIGxldCBpZCA9ICRwYXJlbnQuYXR0cignZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICBMb2FkZXIuc2hvdyh0cnVlKTtcclxuICAgICAgICBjbG9zZUVkaXQoKTtcclxuICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiAnL3NpdGV0cmlrcy9jb21tZW50cy9kZWxldGVjb21tZW50JywgZGF0YTogeyBpZCB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICRwYXJlbnQucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuICAgICAgICAkY29udGFpbmVyLnBhcmVudCgpLm9uKCdjbGljaycsICcuYnRuLWFkZC1jb21tZW50JywgYWRkQ29tbWVudCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmJ0bi1lZGl0LXBvc3QnLCBlZGl0Q29tbWVudCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmJ0bi1zYXZlLWVkaXRlZC1wb3N0Jywgc2F2ZUVkaXRlZENvbW1lbnQpO1xyXG4gICAgICAgICRjb250YWluZXIub24oJ2NsaWNrJywgJy5idG4tZGVsZXRlLWNvbW1lbnQnLCBkZWxldGVDb21tZW50KTtcclxuICAgICAgICAkY29udGFpbmVyLm9uKCdjbGljaycsICcuYnRuLWNhbmNlbC1lZGl0ZWQtcG9zdCcsIGNsb3NlRWRpdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgaW5pdCwgbG9hZENvbW1lbnRzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBDb21tZW50cyB9O1xyXG4iLCJ2YXIgRGF0YSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWFrZVJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnICYmIGlzRnVuY3Rpb24oZmV0Y2gpID8gbWFrZUZldGNoUmVxdWVzdCA6IG1ha2VBamF4UmVxdWVzdDsgLy8gZmFsbGJhY2sgdG8gYWpheCBpZiBvbGRlciBicm93c2VyXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFqYXhSZXF1ZXN0KHsgdXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGlzRm9ybSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGJvZHksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudFR5cGUgPSBmYWxzZTsgLy8gdGVsbCBqUXVlcnkgbm90IHRvIHByb2Nlc3MgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wcm9jZXNzRGF0YSA9IGZhbHNlOyAvLyB0ZWxsIGpRdWVyeSBub3QgdG8gc2V0IGNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuYWpheChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VGZXRjaFJlcXVlc3QoeyB1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgaXNGb3JtIH0pIHtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBpZiAoaXNGb3JtKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiYgcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcy50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SnNvbih7IHVybCwgZGlzYWJsZUNhY2hlIH0pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChkaXNhYmxlQ2FjaGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICdQcmFnbWEnOiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QoeyB1cmwsIG1ldGhvZDogJ0dFVCcsIGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdEpzb24oeyB1cmwsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0Rm9ybSh7IHVybCwgZm9ybURhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh7IHVybCwgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhLCBpc0Zvcm06IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSnNvbih7IHVybCwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHsgdXJsLCBtZXRob2Q6ICdERUxFVEUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRFcnJvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEpzb24sXHJcbiAgICAgICAgcG9zdEpzb24sXHJcbiAgICAgICAgcG9zdEZvcm0sXHJcbiAgICAgICAgZGVsZXRlSnNvbixcclxuICAgICAgICBkZWZhdWx0RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMgJiYge30udG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IERhdGEgfTtcclxuIiwiaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycy9kaXN0L2hhbmRsZWJhcnMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBjdXN0b20gaGVscGVycyBmb3IgaGFuZGxlYmFycy5qc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbnZhciBoZWxwZXJzID0ge1xyXG4gICAgJ3N3aXRjaCc6IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3N3aXRjaF92YWx1ZV8gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9zd2l0Y2hfYnJlYWtfID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGh0bWwgPSBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zd2l0Y2hfYnJlYWtfO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zd2l0Y2hfdmFsdWVfO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfSxcclxuICAgICdjYXNlJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gYXJncy5wb3AoKTtcclxuICAgICAgICB2YXIgY2FzZVZhbHVlcyA9IGFyZ3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zd2l0Y2hfYnJlYWtfIHx8IGNhc2VWYWx1ZXMuaW5kZXhPZih0aGlzLl9zd2l0Y2hfdmFsdWVfKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc2guYnJlYWsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N3aXRjaF9icmVha18gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnZGVmYXVsdCc6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zd2l0Y2hfYnJlYWtfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBtb3ZlZCBzZWxlY3QgaGVscGVyIGZyb20gbGF5b3V0XHJcbiAgICAnc2VsZWN0JzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyICRlbCA9ICQoJzxzZWxlY3QgLz4nKS5odG1sKG9wdGlvbnMuZm4odGhpcykpO1xyXG4gICAgICAgICRlbC5maW5kKCdbdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJykuYXR0cih7ICdzZWxlY3RlZCc6ICdzZWxlY3RlZCcgfSk7XHJcbiAgICAgICAgcmV0dXJuICRlbC5odG1sKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mb3IgKGxldCBrZXkgaW4gaGVscGVycykge1xyXG4gICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihrZXksIGhlbHBlcnNba2V5XSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEhhbmRsZWJhcnMgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcyh0ZW1wbGF0ZXNDYWNoZSwgdGVtcGxhdGVzKSB7XHJcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBsYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goRGF0YS5nZXRKc29uKHsgdXJsOiB0ZW1wbGF0ZXNbaV0udXJsIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUocmVzKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzQ2FjaGVbdGVtcGxhdGVzW2ldLm5hbWVdID0gdGVtcGxhdGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7IHJldHVybiBmYWxzZTsgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn1cclxuIiwiLyogTG9hZGVyLmpzIHZlcnNpb24gMS4xICovXHJcbnZhciBMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdpZlNyYyA9ICcvaW1hZ2VzL2xvYWRpbmcuZ2lmJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2hvd1dpdGhQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzQmFyRGF0YSwgY29sb3IpIHtcclxuICAgICAgICAvLyAgICBpZiAoY29sb3IgPT09IHRydWUpIHtcclxuICAgICAgICAvLyAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvLyAgICBsZXQgJHBhcmVudCA9IEJsdXIuYWRkKHsgY29sb3IgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCBiYXIgPSBQcm9ncmVzc0Jhci5idWlsZCh7IGRhdGE6IHByb2dyZXNzQmFyRGF0YSwgJHBhcmVudDogJHBhcmVudCwgY3NzQ2xhc3M6ICdibHVyLWNvbnRlbnQnIH0pWzBdO1xyXG4gICAgICAgIC8vICAgIGxldCBkYXRhID0gJChiYXIpLmRhdGEocHJvZ3Jlc3NCYXJEYXRhLm5hbWUpXHJcbiAgICAgICAgLy8gICAgICAgIC5vblN0YXJ0KCk7XHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIChjb2xvciwgaW1nU3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW1nU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBnaWZTcmM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEJsdXIuYWRkKHsgY29sb3IgfSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGltZy8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogaW1nU3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnYmx1ci1jb250ZW50J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBCbHVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBMb2FkZXIgfTtcclxuXHJcbi8vIEdhbGxlcnkgcmVnaXN0cmF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2ltZy5kaXNwbGF5LWltYWdlLCBpbWcuZ2FsbGVyeS1pbWFnZScsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCAkdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG4gICAgICAgIGxldCBzcmMgPSAkdGFyZ2V0LmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9IEJsdXIuYWRkKHsgaGlkZU9uQ2xpY2s6IHRydWUgfSk7XHJcbiAgICAgICAgJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdibHVyLWNvbnRlbnQgcHJldmlldy1pbWFnZScsXHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbi8vIEhlbHBlciBjbGFzcyBmb3IgbG9hZGVyIGFuZCBnYWxsZXJ5XHJcbnZhciBCbHVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFBSRVZJRVdfQ09OVEFJTkVSX0NMQVNTID0gJ3ByZXZpZXctY29udGFpbmVyJztcclxuICAgIGNvbnN0IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1MgPSAncHJldmlldy1pdGVtLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBCTFVSX0VMRU1FTlRfQ0xBU1MgPSAnYmx1cic7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQmx1cih7IGhpZGVPbkNsaWNrLCBjb2xvciwgb3BhY2l0eSB9KSB7XHJcbiAgICAgICAgaWYgKGhpZGVPbkNsaWNrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3N0LW5vLW92ZXJmbG93Jyk7XHJcblxyXG4gICAgICAgIGxldCAkYmx1ckVsZW1lbnQgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IEJMVVJfRUxFTUVOVF9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgJGl0ZW1Db250YWluZXIgPSAkKCc8ZGl2PjwvZGl2PicsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFBSRVZJRVdfSVRFTV9DT05UQUlORVJfQ0xBU1NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0ICRwcmV2aWV3Q29udGFpbmVyID0gJCgnPGRpdj48L2Rpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBQUkVWSUVXX0NPTlRBSU5FUl9DTEFTU1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaGlkZU9uQ2xpY2spIHtcclxuICAgICAgICAgICAgJHByZXZpZXdDb250YWluZXIub24oJ2NsaWNrJywgcmVtb3ZlQmx1cik7XHJcbiAgICAgICAgICAgICRibHVyRWxlbWVudC5vbignY2xpY2snLCByZW1vdmVCbHVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAkYmx1ckVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgJiYgaXNOYU4oK29wYWNpdHkpICYmIG9wYWNpdHkgPj0gMCAmJiBvcGFjaXR5IDw9IDEpIHtcclxuICAgICAgICAgICAgJGJsdXJFbGVtZW50LmNzcygnb3BhY2l0eScsIG9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByZXZpZXdDb250YWluZXIuYXBwZW5kKCRpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRibHVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAkaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5maW5kKCcuJyArIEJMVVJfRUxFTUVOVF9DTEFTUykucmVtb3ZlKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmZpbmQoJy4nICsgUFJFVklFV19DT05UQUlORVJfQ0xBU1MpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc3Qtbm8tb3ZlcmZsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZDogYWRkQmx1cixcclxuICAgICAgICByZW1vdmU6IHJlbW92ZUJsdXJcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBCbHVyIH07XHJcbiIsInZhciBOb3RpZmllciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc3RhdHVzIGlzIGZvbGxvd2luZyBib290c3RyYXAgY29udmVudGlvbjogJ2RhbmdlcicocmVkKSwgJ3dhcm5pbmcnKHllbGxvdyksICdzdWNjZXNzJyhncmVlbiksICdpbmZvJyhibHVlKVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoeyBjb250YWluZXJJZCwgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc2Vjb25kcywgaXNQZXJtYW5lbnQsIHNlbGVjdG9yIH0pIHtcclxuICAgICAgICBsZXQgJHRpdGxlID0gJCgnPHN0cm9uZz48L3N0cm9uZz4nLCB7IHRleHQ6IHRpdGxlIHx8ICcnIH0pO1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSAkKCc8YT48L2E+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdhbGVydCcsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2Nsb3NlJyxcclxuICAgICAgICAgICAgaHRtbDogJyZ0aW1lczsnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0ICRtZXNzYWdlID0gJCgnPHNwYW4+PC9zcGFuPicsIHsgdGV4dDogJyAnICsgKG1lc3NhZ2UgfHwgJycpIH0pO1xyXG4gICAgICAgIGxldCAkYWxlcnQgPSAkKCc8ZGl2PjwvZGl2PicsIHsgY2xhc3M6ICdhbGVydCBhbGVydC0nICsgKHN0YXR1cyB8fCAnaW5mbycpIH0pO1xyXG5cclxuICAgICAgICAkYWxlcnQuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkbWVzc2FnZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY2xvc2VCdXR0b24pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhzZWxlY3RvciB8fCBjb250YWluZXJJZCB8fCAnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGFsZXJ0LmZhZGVPdXQoNTAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChzZWNvbmRzIHx8IDEwKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFsZXJ0OiBjcmVhdGVBbGVydFxyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbmV4cG9ydCB7IE5vdGlmaWVyIH07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxudmFyIFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoJGVsZW1lbnQsIGVycm9yTWVzc2FnZSwgdmFsaWRhdGVGdW5jKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRnVuYyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnJyk7XHJcbiAgICAgICAgICAgICRlbGVtZW50Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdib3JkZXInLCAnMXB4IHNvbGlkICNmZjY4NjgnKTtcclxuICAgICAgICAgICAgJGVsZW1lbnQubmV4dCgnc3BhbicpLnRleHQoZXJyb3JNZXNzYWdlIHx8ICdJbnZhbGlkIHZhbHVlIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01pbmltdW1MZW5ndGgodmFsdWUsIG1pbkxlbmdodCkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IG1pbkxlbmdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhc01heGltdW1MZW5ndGgodmFsdWUsIG1heExlbmdodCkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4TGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWModmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKFthLXowLTldKykkL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24odmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eW2EtekEtWjAtOTtdKyQvO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1VybEZyaWVuZGx5KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpBLVowLTktX10rJC87XHJcblxyXG4gICAgICAgIHJldHVybiBpc1Bhc3NpbmcodmFsdWUsIHBhdHRlcm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3RhcnRpbmdXaXRoTGV0dGVyKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlthLXpdL2k7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQYXNzaW5nKHZhbHVlLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eXFxkK1xcLlxcZHswLDJ9JC87XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNQYXR0ZXJuKHZhbHVlLCBwYXR0ZXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14tP1xcZCtcXC4/XFxkKiQvO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzUGF0dGVybih2YWx1ZSwgcGF0dGVybik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hlc1BhdHRlcm4odmFsdWUsIHBhdHRlcm4pIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgcGF0dGVybi50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIHJldHVybiBmdW5jICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNHdWlkKHN0cmluZ1RvVGVzdCkge1xyXG4gICAgICAgIGlmIChzdHJpbmdUb1Rlc3RbMF0gPT09ICd7Jykge1xyXG4gICAgICAgICAgICBzdHJpbmdUb1Rlc3QgPSBzdHJpbmdUb1Rlc3Quc3Vic3RyaW5nKDEsIHN0cmluZ1RvVGVzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ2V4R3VpZCA9IC9eKFxceyl7MCwxfVswLTlhLWZBLUZdezh9XFwtWzAtOWEtZkEtRl17NH1cXC1bMC05YS1mQS1GXXs0fVxcLVswLTlhLWZBLUZdezR9XFwtWzAtOWEtZkEtRl17MTJ9KFxcfSl7MCwxfSQvZ2k7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4R3VpZC50ZXN0KHN0cmluZ1RvVGVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHBhcnNlSW50KHZhbHVlKSA9PSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgaWYgKG1pbiAmJiAhdmFsaWRhdGUoJGVsZW1lbnQsIGBUaGUgdmFsdWUgbXVzdCBiZSBsb3dlciBvciBlcXVhbCB0byAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtYXggPyArdmFsdWUgPD0gK21heCA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXggJiYgIXZhbGlkYXRlKCRlbGVtZW50LCBgVGhlIHZhbHVlIG11c3QgYmUgZ3JlYXRlciBvciBlcXVhbCB0byAke21pbn0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBtaW4gPyArdmFsdWUgPj0gK21pbiA6IHRydWU7IH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTGVuZ2h0SW5SYW5nZSgkZWxlbWVudCwgbWluLCBtYXgpIHtcclxuICAgICAgICBpZiAobWluICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzIGxvbmcuYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNaW5pbXVtTGVuZ3RoKHZhbHVlLCBtaW4pOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4ICYmICF2YWxpZGF0ZSgkZWxlbWVudCwgYFRoZSBtYXhpbXVtIHBlcm1pdHRlZCBjaGFyYWN0ZXJzIGxlbmd0aCBpcyAke21heH0uYCwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBoYXNNYXhpbXVtTGVuZ3RoKHZhbHVlLCBtYXgpOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdmFsaWRhdGUgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgJ3ZhbGlkYXRlJyBpbnNpZGUgdGhlIHdyYXBwZXIuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21WYWxpZGF0aW9uRnVuYyBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgc3BlY2lmaWMgbG9naWMuIFdpbGwgcmVjaWV2ZSB0aGUgSFRNTEVsZW1lbnQuXHJcbiAgICAgKiBNdXN0IHJldHVybiB0cnVlIGlmIHZhbGlkYXRpb24gaXMgcGFzc2luZy5cclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmllbGRzVmFsaWRhdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykge1xyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzKGV2KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcyAmJiAhZXYgJiYgIWV2LnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gSFRNTEVsZW1lbnQgaGFzIGJlZW4gcHJvdmlkZWQsICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgJGVsZW1lbnRzVG9WYWxpZGF0ZSA9ICQodGhpcyB8fCBldi50YXJnZXQpLmZpbmQoJy52YWxpZGF0ZScpO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJGVsZW1lbnRzVG9WYWxpZGF0ZS5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKCRlbGVtZW50LCBjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIWZsYWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZCgkZWxlbWVudCwgY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnUmVxdWlyZWQgZmllbGQhJyxcclxuICAgICAgICAgICAgJ2VtYWlsJzogJ0ludmFsaWQgRS1NYWlsIScsXHJcbiAgICAgICAgICAgICdpbnQnOiAnTm90IGFuIGludGVnZXIgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdudW1iZXInOiAnTm90IGEgbnVtYmVyIScsXHJcbiAgICAgICAgICAgICdndWlkJzogJ0ludmFsaWQgZ3VpZCEnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25UeXBlcyA9ICgkZWxlbWVudC5hdHRyKCdkYXRhLXZhbGlkYXRpb24tdHlwZScpIHx8ICcnKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCBpbm5lckZsYWcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWluID0gJGVsZW1lbnQuYXR0cignZGF0YS1taW4nKTtcclxuICAgICAgICBsZXQgbWF4ID0gJGVsZW1lbnQuYXR0cignZGF0YS1tYXgnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0aW9uVHlwZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJGVsZW1lbnQuYXR0cignZGF0YS1tZXNzYWdlLScgKyB2YWxpZGF0aW9uVHlwZXNbaV0pIHx8IHZhbGlkYXRpb25NZXNzYWdlc1t2YWxpZGF0aW9uVHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh2YWxpZGF0aW9uVHlwZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlKCRlbGVtZW50LCB2YWxpZGF0aW9uTWVzc2FnZSwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhIXZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIHZhbGlkYXRlRW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG91YmxlJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zsb2F0JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVZhbGlkYXRvci52YWxpZGF0ZSgkZWxlbWVudCwgbmFtZSArICcgbXVzdCBiZSBkZWNpbWFsIGZsb2F0aW5nIHBvaW50IG51bWJlciEnLCAodmFsdWUpID0+IHsgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUpID09IHZhbHVlOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyRmxhZyA9ICFpc051bWJlckluUmFuZ2UoJGVsZW1lbnQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ludCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzSW50ZWdlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNOdW1iZXJJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3VpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZSgkZWxlbWVudCwgdmFsaWRhdGlvbk1lc3NhZ2UsIGlzR3VpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckZsYWcgPSAhaXNMZW5naHRJblJhbmdlKCRlbGVtZW50LCBtaW4sIG1heCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjdXN0b21WYWxpZGF0aW9uRnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJGbGFnID0gIWN1c3RvbVZhbGlkYXRpb25GdW5jKCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5uZXJGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhaW5uZXJGbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpZWxkVmFsaWRhdGlvbkhhbmRsZXIoY3VzdG9tVmFsaWRhdGlvbkZ1bmMpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gZXYgPyAkKGV2LnRhcmdldCkgOiAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKCR0YXJnZXQsIGN1c3RvbVZhbGlkYXRpb25GdW5jKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRlT25DaGFuZ2VIYW5kbGVyKG5hbWUsIHVybCwgbWluTGVuZ2h0LCBleHRyYVZhbHVlcykge1xyXG4gICAgICAgIGxldCB0aW1lciA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlVXJsT25DaGFuZ2UoZXYpIHtcclxuICAgICAgICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGxldCBtaW4gPSBtaW5MZW5naHQgfHwgJGlucHV0LmF0dHIoJ2RhdGEtbWluJyk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG1pbiAmJiAhVmFsaWRhdG9yLnZhbGlkYXRlKCRpbnB1dCwgYFRoZSB2YWx1ZSBtdXN0IGJlIGF0bGVhc3QgJHttaW59IGNoYXJhY3RlcnMgbG9uZyFgLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBWYWxpZGF0b3IuaGFzTWluaW11bUxlbmd0aCh2YWwsICttaW4pOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGV4dHJhVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5W2tleV0gPSBleHRyYVZhbHVlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBEYXRhLnBvc3RKc29uKHsgdXJsOiB1cmwsIGRhdGE6IGJvZHkgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvci52YWxpZGF0ZSgkaW5wdXQsIHJlcy5tZXNzYWdlIHx8ICdWYWx1ZSBpcyBpbnZhbGlkIG9yIGFscmVhZHkgaW4gdXNlIScsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHJlcy5zdWNjZXNzOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBEYXRhLmRlZmF1bHRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0Lm5leHQoJ3NwYW4nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlVXJsT25DaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVcmwodmFsaWRhdGVVcmwsICR1cmxGaWVsZCwgJGJ0blN1Ym1pdCkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXltcXHdcXC1cXC5dKyQvaSk7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgY2FuIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoKC0pLCBwb2ludCguKSBhbmQgdW5kZXJzY29yZShfKSAhJywgKHYpID0+IG1hdGNoZXNQYXR0ZXJuKHYsIHBhdHRlcm4pKSkge1xyXG4gICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERhdGEuZ2V0SnNvbih7IHVybDogdmFsaWRhdGVVcmwgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZSgkdXJsRmllbGQsICdVcmwgaXMgaW52YWxpZCBvciBhbHJlYWR5IGluIHVzZSEnLCAodik9PiByZXMuc3VjY2VzcykpIHtcclxuICAgICAgICAgICAgICAgICRidG5TdWJtaXQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVVuaXF1ZW5lcyhuYW1lLCBjbGFzc1RvVmFsaWRhdGUpIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgdmFyICRhbGxOYW1lcyA9ICQoJy4nICsgY2xhc3NUb1ZhbGlkYXRlKTtcclxuICAgICAgICBmb3IgKG5hbWUgaW4gJGFsbE5hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICgkYWxsTmFtZXNbbmFtZV0udmFsdWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZGF0ZSxcclxuICAgICAgICBpc0FscGhhTnVtZXJpYyxcclxuICAgICAgICBoYXNNaW5pbXVtTGVuZ3RoLFxyXG4gICAgICAgIHZhbGlkYXRlRW1haWwsXHJcbiAgICAgICAgaXNTdGFydGluZ1dpdGhMZXR0ZXIsXHJcbiAgICAgICAgaXNVcmxGcmllbmRseSxcclxuICAgICAgICBpc051bWJlcixcclxuICAgICAgICBpc0RlY2ltYWxOdW1iZXIsXHJcbiAgICAgICAgaXNBbHBoYU51bWVyaWNBbmRTZW1pY29sb24sXHJcbiAgICAgICAgaXNGdW5jdGlvbixcclxuICAgICAgICBpc0d1aWQsXHJcbiAgICAgICAgY3JlYXRlRmllbGRzVmFsaWRhdGlvbixcclxuICAgICAgICBpc0ludGVnZXIsXHJcbiAgICAgICAgY3JlYXRlVmFsaWRhdGVPbkNoYW5nZUhhbmRsZXIsXHJcbiAgICAgICAgdmFsaWRhdGVGaWVsZCxcclxuICAgICAgICBjcmVhdGVGaWVsZFZhbGlkYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIHZhbGlkYXRlVW5pcXVlbmVzLFxyXG4gICAgICAgIHZhbGlkYXRlVXJsXHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuZXhwb3J0IHsgVmFsaWRhdG9yIH07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBXYXJuaW5nV2luZG93ID0gKGZ1bmN0aW9uIChsb2dnZXIpIHtcclxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCBjb25zb2xlO1xyXG4gICAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9ICdJdCBsb29rcyBsaWtlIHlvdSBoYXZlIGJlZW4gZWRpdGluZyBzb21ldGhpbmcuICdcclxuICAgICAgICArICdJZiB5b3UgbGVhdmUgYmVmb3JlIHNhdmluZywgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uVW5sb2FkKGUpIHtcclxuICAgICAgICBpZiAoIWhhc0NoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBvblVubG9hZDtcclxuICAgIC8vdmFyIGxhc3RDbGlja09uRWxlbWVudDtcclxuICAgIC8vJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICBsYXN0Q2xpY2tPbkVsZW1lbnQ9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIC8vfSk7XHJcblxyXG4gICAgdmFyIGxhc3RDbGlja2VkRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgbGFzdENsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIC8vbGFzdENsaWNrZWQgPSB0YXJnZXQudGV4dENvbnRlbnQgfHwgdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNUZXh0QXJlYXNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgJHRleHRhcmVhcyA9ICQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgLy9BZGQgdGlueW1jZSBnZXQgdGV4dCBmcm9tIHRleHRhcmVhIGxpa2VzIGlucHV0XHJcbiAgICAgICAgaWYgKCR0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNJbnB1dHNXaXRoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkaW5wdXRzID0gJCgnaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgYXR0ciA9ICQobGFzdENsaWNrZWRFbGVtZW50KS5kYXRhKGF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVXJsKGxpbmtQYXRoKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcIkNoZWNrIHVybFwiKTtcclxuICAgICAgICBsZXQgYXR0ciA9IGNoZWNrRWxlbWVudEZvckRhdGFBdHRyKGdldExhc3RDbGlja2VkRWxlbWVudCgpLCBcImRpc2FibGVMaW5rXCIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJVcmwgY2hlY2tpbmcgaXMgZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKFwiVXJsIGNoZWNra2luZyBpcyBlbmFibGVkXCIpXHJcblxyXG4gICAgICAgIGlmIChsaW5rUGF0aC5pbmRleE9mKCdjcmVhdGUnKSA9PSAtMSAmJiBsaW5rUGF0aC5pbmRleE9mKCdlZGl0JykgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENsaWNrZWRFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQobGFzdENsaWNrZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEJ1dHRvbkNoZWNrKGxhc3RDbGlja2VkRWxlbWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGVsZW1lbnQuYXR0cihcInR5cGVcIikgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhc3RDbGlja2VkRWxlbWVudC50YWdOYW1lID09PSBcIkJVVFRPTlwiICYmIGVsZW1lbnQuaGFzQ2xhc3MoXCJidXR0b24tc3VibWl0XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2xpY2tlZEVsZW1lbnQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiAmJiBlbGVtZW50LmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIWVsZW1lbnQuYXR0cignZGF0YS1kaXNhYmxlLXdhcm5pbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghbGFzdENsaWNrZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RDbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJChsYXN0Q2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBsaW5rUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgaWYgKCFzdWJtaXRCdXR0b25DaGVjayhsYXN0Q2xpY2tlZEVsZW1lbnQsICRlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tFbGVtZW50Rm9yRGF0YUF0dHIobGFzdENsaWNrZWRFbGVtZW50LCBcImRpc2FibGUtd2FybmluZ1wiKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tVcmwobGlua1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNDaGFuZ2VzID0gaGFzVGV4dEFyZWFzV2l0aFRleHQoKSB8fCBoYXNJbnB1dHNXaXRoVGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0b3BMZWF2ZShldikge1xyXG4gICAgICAgIGxldCBpc1NhdmluZyA9IGxhc3RDbGlja2VkRWxlbWVudCAmJiAhc3VibWl0QnV0dG9uQ2hlY2sobGFzdENsaWNrZWRFbGVtZW50LCAkKGxhc3RDbGlja2VkRWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChpc1NhdmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlucHV0Q2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1hdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy93aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBkZWZhdWx0U3RvcExlYXZlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LCBcclxuICAgICAgICBmb3JjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgV2FybmluZ1dpbmRvdyB9O1xyXG4iLCJpbXBvcnQgeyBXYXJuaW5nV2luZG93IH0gZnJvbSAnLi4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcbmltcG9ydCB7IENvbW1lbnRzIH0gZnJvbSAnLi4vY29tbWVudHMuanMnO1xyXG5pbXBvcnQgeyB0ZXh0RWRpdG9yIH0gZnJvbSAnLi4vdGV4dC1lZGl0b3IuanMnO1xyXG5pbXBvcnQgeyBzZXR1cEFqYXhGb3JtIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcclxuXHJcbmZ1bmN0aW9uIGJsb2dEZXRhaWxzKGlkKSB7XHJcbiAgICBDb21tZW50cy5pbml0KGlkLCAkKCcjY29tbWVudHMtY29udGFpbmVyJyksICdibG9nLWNvbW1lbnQtYXJlYScpO1xyXG4gICAgV2FybmluZ1dpbmRvdy5hdHRhY2goKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmxvZ0Zvcm0oKSB7XHJcbiAgICB0ZXh0RWRpdG9yLmluaXQoJyNzdW1tYXJ5LWFyZWEnLCA1MDAsIDE1MCk7XHJcbiAgICB0ZXh0RWRpdG9yLmluaXQoJyNjb250ZW50LWFyZWEnLCA1MDAsIDMwMCk7XHJcblxyXG4gICAgc2V0dXBBamF4Rm9ybSgnI2Jsb2ctZm9ybScsICcvc2l0ZXRyaWtzL2Jsb2cnKTtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbn1cclxuXHJcbndpbmRvdy5ibG9nID0ge1xyXG4gICAgZGV0YWlsczogYmxvZ0RldGFpbHMsXHJcbiAgICBzZXR1cEZvcm06IGJsb2dGb3JtXHJcbn07XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9jb21tb24vZGF0YS5qcyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbW1vbi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi9jb21tb24vdmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICcuLi9jb21tb24vbm90aWZpZXIuanMnO1xyXG5pbXBvcnQgeyBXYXJuaW5nV2luZG93IH0gZnJvbSAnLi4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcbmltcG9ydCB7IHRleHRFZGl0b3IgfSBmcm9tICcuLi90ZXh0LWVkaXRvci5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBBamF4Rm9ybShmb3JtU2VsZWN0b3IsIHJlZGlyZWN0VXJsLCB0ZXh0RWRpdG9yQXJlYXNJZHMpIHtcclxuICAgIFdhcm5pbmdXaW5kb3cuYXR0YWNoKCk7XHJcbiAgICBsZXQgdmFsaWRhdGlvbiA9IFZhbGlkYXRvci5jcmVhdGVGaWVsZHNWYWxpZGF0aW9uKCk7XHJcbiAgICBpZiAodGV4dEVkaXRvckFyZWFzSWRzICYmIHRleHRFZGl0b3JBcmVhc0lkcy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRFZGl0b3JBcmVhc0lkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmluaXQodGV4dEVkaXRvckFyZWFzSWRzW2ldLCA1MDAsIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZm9ybVNlbGVjdG9yKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGlvbi5hcHBseSh0aGlzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2FkZXIuc2hvdygnI2ZmZicpO1xyXG4gICAgICAgIERhdGEucG9zdEZvcm0oeyB1cmw6IHRoaXMuYWN0aW9uLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKHRoaXMpIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdFVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmllci5jcmVhdGVBbGVydCh7IGNvbnRhaW5lcklkOiAnI2FsZXJ0cycsIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLCBzdGF0dXM6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LnNldHVwQWpheEZvcm0gPSBzZXR1cEFqYXhGb3JtO1xyXG4iLCIvKiBnbG9iYWxzIHRpbnltY2UgKi9cclxuaW1wb3J0IHsgV2FybmluZ1dpbmRvdyB9IGZyb20gJy4vbW9kdWxlcy93YXJuaW5nLXdpbmRvdy5qcyc7XHJcblxyXG52YXIgdGV4dEVkaXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0SW5zdGFjZUNhbGxiYWNrKGVkaXRvcikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgV2FybmluZ1dpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgV2FybmluZ1dpbmRvdy5mb3JjZSkge1xyXG4gICAgICAgICAgICBlZGl0b3Iub24oJ05vZGVDaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgV2FybmluZ1dpbmRvdy5mb3JjZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIGVkaXRvci5hZGRCdXR0b24oJ2N1c3RvbWJ1dHRvbicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ21lbnVidXR0b24nLFxyXG4gICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tJyxcclxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbnU6IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTG9nb3V0IGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5pbnNlcnRDb250ZW50KCc8YSBocmVmPVwiL2xvZ291dFwiPkxvZ291dDwvYT4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGlmIChvbkluaXRDYWxsYmFjayAmJiB7fS50b1N0cmluZy5jYWxsKG9uSW5pdENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xyXG4gICAgICAgICAgICAgICAgb25Jbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBlbmFibGUgYXV0by1zeW5jIHdpdGggdGhlIHRleHRhcmVhXHJcbiAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbnltY2UudHJpZ2dlclNhdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbWFnZV9saXN0KHN1Y2Nlc3MpIHtcclxuICAgICAgICAkLmdldCgnL3NpdGV0cmlrcy9maWxlcy9nZXRhbGxpbWFnZXMnLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzLmltYWdlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsZV9waWNrZXJfY2FsbGJhY2soY2IsIHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2ltYWdlLyonKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGlucHV0KTtcclxuXHJcbiAgICAgICAgLy8gTm90ZTogSW4gbW9kZXJuIGJyb3dzZXJzIGlucHV0W3R5cGU9XCJmaWxlXCJdIGlzIGZ1bmN0aW9uYWwgd2l0aG91dCBcclxuICAgICAgICAvLyBldmVuIGFkZGluZyBpdCB0byB0aGUgRE9NLCBidXQgdGhhdCBtaWdodCBub3QgYmUgdGhlIGNhc2UgaW4gc29tZSBvbGRlclxyXG4gICAgICAgIC8vIG9yIHF1aXJreSBicm93c2VycyBsaWtlIElFLCBzbyB5b3UgbWlnaHQgd2FudCB0byBhZGQgaXQgdG8gdGhlIERPTVxyXG4gICAgICAgIC8vIGp1c3QgaW4gY2FzZSwgYW5kIHZpc3VhbGx5IGhpZGUgaXQuIEFuZCBkbyBub3QgZm9yZ2V0IGRvIHJlbW92ZSBpdFxyXG4gICAgICAgIC8vIG9uY2UgeW91IGRvIG5vdCBuZWVkIGl0IGFueW1vcmUuXHJcblxyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IE5vdyB3ZSBuZWVkIHRvIHJlZ2lzdGVyIHRoZSBibG9iIGluIFRpbnlNQ0VzIGltYWdlIGJsb2JcclxuICAgICAgICAgICAgICAgIC8vIHJlZ2lzdHJ5LiBJbiB0aGUgbmV4dCByZWxlYXNlIHRoaXMgcGFydCBob3BlZnVsbHkgd29uJ3QgYmVcclxuICAgICAgICAgICAgICAgIC8vIG5lY2Vzc2FyeSwgYXMgd2UgYXJlIGxvb2tpbmcgdG8gaGFuZGxlIGl0IGludGVybmFsbHkuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAnYmxvYmlkJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkNhY2hlID0gdGlueW1jZS5hY3RpdmVFZGl0b3IuZWRpdG9yVXBsb2FkLmJsb2JDYWNoZTtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkluZm8gPSBibG9iQ2FjaGUuY3JlYXRlKGlkLCBmaWxlLCBiYXNlNjQpO1xyXG4gICAgICAgICAgICAgICAgYmxvYkNhY2hlLmFkZChibG9iSW5mbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgYW5kIHBvcHVsYXRlIHRoZSBUaXRsZSBmaWVsZCB3aXRoIHRoZSBmaWxlIG5hbWVcclxuICAgICAgICAgICAgICAgIGNiKGJsb2JJbmZvLmJsb2JVcmkoKSwgeyB0aXRsZTogZmlsZS5uYW1lIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICB2ZXJpZnlfaHRtbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnc3BhbicsXHJcbiAgICAgICAgICAgIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnZGl2W2NsYXNzfGlkfHN0eWxlfHNwYW5dLHNwYW5bY2xhc3N8aWR8c3R5bGVdJyxcclxuICAgICAgICAgICAgZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHM6ICdkaXZbKl0sc3BhblsqXScsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnbW9kZXJuJyxcclxuICAgICAgICAgICAgbW9kZTogJ3RleHRhcmVhcycsXHJcbiAgICAgICAgICAgIGZvcmNlX2JyX25ld2xpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VfcF9uZXdsaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlZF9yb290X2Jsb2NrOiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgcGx1Z2luczogWydhZHZsaXN0IGF1dG9saW5rIGNvZGVzYW1wbGUgbGluayBpbWFnZSBsaXN0cyBjaGFybWFwIHByaW50IHByZXZpZXcgaHIgYW5jaG9yIHBhZ2VicmVhayBmdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHdvcmRjb3VudCB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgY29kZSBpbnNlcnRkYXRldGltZSBub25icmVha2luZycsICdzYXZlIHRhYmxlIGNvbnRleHRtZW51IGRpcmVjdGlvbmFsaXR5IHBhc3RlIHRleHRjb2xvciddLFxyXG4gICAgICAgICAgICBleHRlcm5hbF9wbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAnY29kZUhpZ2hsJzogJy9wbHVnaW5zL3RpbnltY2UvY29kZS1oaWdobGlnaHQtdGlueW1jZS1wbHVnaW4uanMnLFxyXG4gICAgICAgICAgICAgICAgJ2h0bWxCbG9ja3MnOiAnL3BsdWdpbnMvdGlueW1jZS9odG1sLWNvbXBvbmVudHMtdGlueW1jZS1wbHVnaW4uanMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyb3dzZXJfc3BlbGxjaGVjazogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGV4dG1lbnU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXN0ZV9hc190ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9jYXB0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZV9hZHZ0YWI6IHRydWUsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnZmlsZSBpbWFnZSBtZWRpYScsXHJcbiAgICAgICAgICAgIGZpbGVfcGlja2VyX2NhbGxiYWNrOiBmaWxlX3BpY2tlcl9jYWxsYmFjayxcclxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlIHwgcHJpbnQgcHJldmlldyBtZWRpYSBmdWxscGFnZSB8IGZvcmVjb2xvciBiYWNrY29sb3IgY29kZSB8IGNvZGVIaWdobCB8IGZvbnRzaXplc2VsZWN0IHwgZm9udHNlbGVjdCB8IGN1c3RvbWJ1dHRvbicsXHJcbiAgICAgICAgICAgIGZvbnRzaXplX2Zvcm1hdHM6ICc4cHggMTBweCAxMnB4IDE0cHggMTZweCAxOHB4IDIwcHggMjJweCAyNHB4IDM2cHggNDhweCcsXHJcbiAgICAgICAgICAgIHNldHVwOiBlZGl0b3IgPT4gc2V0dXBFZGl0b3IoZWRpdG9yLCBvbkluaXRDYWxsYmFjayksXHJcbiAgICAgICAgICAgIGluaXRfaW5zdGFuY2VfY2FsbGJhY2s6IGluaXRJbnN0YWNlQ2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGNmZyA9IGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKTtcclxuICAgICAgICBjZmcuaW1hZ2VfbGlzdCA9IGltYWdlX2xpc3Q7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFdpdGhvdXRJbWFnZXMoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KGNyZWF0ZUJhc2VDb25maWcoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIG9uSW5pdENhbGxiYWNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGVkaXRvciA9IHRpbnltY2UuZ2V0KHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWRpdG9yKSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIHRpbnltY2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBsZXQgZWRpdG9yID0gdGlueW1jZS5nZXQoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgZWRpdG9yLnNldENvbnRlbnQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3RvciBtdXN0IGJlIElkXHJcbiAgICBmdW5jdGlvbiBnZXRDb250ZW50KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbnltY2UuZ2V0KGlkKS5nZXRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRWRpdG9yKGlkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0lkIGZvciB0aGUgdGV4dCBlZGl0b3IgbXVzdCBiZSBzcGVjaWZpZWQhJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgNjAwO1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAzMDA7XHJcbiAgICAgICAgaWYgKGlkWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgdGV4dEVkaXRvci5yZW1vdmUoaWQuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLnJlbW92ZShpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0RWRpdG9yLmluaXQoaWQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCxcclxuICAgICAgICBpbml0V2l0aG91dEltYWdlcyxcclxuICAgICAgICBnZXRDb250ZW50LFxyXG4gICAgICAgIHJlbW92ZSxcclxuICAgICAgICByZW1vdmVBbGwsXHJcbiAgICAgICAgY2xlYXIsXHJcbiAgICAgICAgYWRkRWRpdG9yXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgdGV4dEVkaXRvciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9