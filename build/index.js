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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/01-static/index.js":
/*!********************************!*\
  !*** ./src/01-static/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\src\\01-static\\index.js: Unexpected token (13:40)\n\n\u001b[0m \u001b[90m 11 | \u001b[39m\u001b[90m// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39mregisterBlockType(\u001b[32m\"bcdesigns/static\"\u001b[39m\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 | \u001b[39m  title\u001b[33m:\u001b[39m \u001b[32m\"Like & Subscribe\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"bcdesigns\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m  icon\u001b[33m:\u001b[39m { src\u001b[33m:\u001b[39m \u001b[33mLogo\u001b[39m }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m  category\u001b[33m:\u001b[39m \u001b[32m\"bcdesigns\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m\u001b[0m\n    at Object.raise (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:3851:17)\n    at Object.unexpected (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5165:16)\n    at Object.parseObjPropValue (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:6796:21)\n    at Object.parseObjectMember (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:6719:10)\n    at Object.parseObj (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:6643:25)\n    at Object.parseExprAtom (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:6276:21)\n    at Object.parseExprAtom (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:3570:20)\n    at Object.parseExprSubscripts (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5916:23)\n    at Object.parseMaybeUnary (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5896:21)\n    at Object.parseExprOps (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5783:23)\n    at Object.parseMaybeConditional (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5756:23)\n    at Object.parseMaybeAssign (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5703:21)\n    at Object.parseExprListItem (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:6979:18)\n    at Object.parseCallExpressionArguments (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:6123:22)\n    at Object.parseSubscript (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:6018:29)\n    at Object.parseSubscripts (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5937:19)\n    at Object.parseExprSubscripts (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5926:17)\n    at Object.parseMaybeUnary (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5896:21)\n    at Object.parseExprOps (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5783:23)\n    at Object.parseMaybeConditional (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5756:23)\n    at Object.parseMaybeAssign (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5703:21)\n    at Object.parseExpression (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:5651:23)\n    at Object.parseStatementContent (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:7422:23)\n    at Object.parseStatement (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:7293:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:7879:25)\n    at Object.parseBlockBody (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:7866:10)\n    at Object.parseTopLevel (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:7222:10)\n    at Object.parse (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:8871:17)\n    at parse (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\parser\\lib\\index.js:11133:38)\n    at parser (C:\\Users\\belin\\Local Sites\\bcdesigns\\app\\public\\wp-content\\plugins\\bcdesigns\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:170:34)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _01_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01-static */ "./src/01-static/index.js");
/**
 * Import blocks as components.
 */


/***/ })

/******/ });
//# sourceMappingURL=index.js.map