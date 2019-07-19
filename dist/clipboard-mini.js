/*!
 * clipboard-mini v0.3.0
 * —
 * https://github.com/eola/clipboard-mini
 * Licensed MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clipboardMiniSingle = __webpack_require__(1);

var _clipboardMiniSingle2 = _interopRequireDefault(_clipboardMiniSingle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClipboardMini = function () {
  function ClipboardMini(selector) {
    _classCallCheck(this, ClipboardMini);

    this.elements = document.querySelectorAll(selector);
    this.list = [];
    if (this.elements.length) this.init();
  }

  _createClass(ClipboardMini, [{
    key: 'init',
    value: function init() {
      // Can we copy?
      var canCopy = 'queryCommandSupported' in document && document.queryCommandSupported('copy');
      if (!canCopy) {
        console.log("Copy command can't be executed");
        return;
      }

      var i = this.elements.length;
      while (i--) {
        this.list.push(new _clipboardMiniSingle2.default(this.elements[i]));
      }
    }
  }]);

  return ClipboardMini;
}();

exports.default = ClipboardMini;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClipboardMiniSingle = function () {
  function ClipboardMiniSingle(el) {
    _classCallCheck(this, ClipboardMiniSingle);

    this.el = el;
    this.text = null;
    this.setupClipboard();
  }

  _createClass(ClipboardMiniSingle, [{
    key: 'getAttributeValue',
    value: function getAttributeValue(suffix) {
      var attribute = 'data-clipboard-' + suffix;
      if (!this.el.hasAttribute(attribute)) {
        return;
      }
      return this.el.getAttribute(attribute);
    }
  }, {
    key: 'copy',
    value: function copy(target, beforeRestore) {
      // Preserve previous selection if any
      var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

      target.select();
      var result = document.execCommand('copy');

      if (typeof beforeRestore === 'function') beforeRestore();

      // Restore selection
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }

      return result;
    }

    // Detects a string in 'data-attribute-text' and copies from it

  }, {
    key: 'copyFromHardcoded',
    value: function copyFromHardcoded() {
      var text = this.getAttributeValue('text');
      if (!text) return;

      // Creates a ghost textarea to copy from
      var el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);

      return this.copy(el, function () {
        // Remove ghost textare
        document.body.removeChild(el);
      });
    }

    // Detects a selector on 'data-attribute-target' and copies from it

  }, {
    key: 'copyFromSelector',
    value: function copyFromSelector() {
      var selector = this.getAttributeValue('target');
      var target = document.querySelector(selector);
      if (!target) return;

      return this.copy(target);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _this = this;

      var success = this.copyFromHardcoded() || this.copyFromSelector() || false;
      if (success) {
        var label = this.el.innerHTML;
        this.el.innerHTML = 'Copied!';
        setTimeout(function () {
          _this.el.innerHTML = label;
        }, 2500);
      }
      return success;
    }
  }, {
    key: 'setupClipboard',
    value: function setupClipboard() {
      this.el.addEventListener('click', this.handleClick.bind(this));
    }
  }]);

  return ClipboardMiniSingle;
}();

exports.default = ClipboardMiniSingle;

/***/ })
/******/ ]);
});