'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClipboardMiniSingle = function () {
  function ClipboardMiniSingle(el) {
    _classCallCheck(this, ClipboardMiniSingle);

    this.el = el;
    this.text = null;
    this.init();
  }

  _createClass(ClipboardMiniSingle, [{
    key: 'getAttributeValue',
    value: function getAttributeValue(suffix) {
      var attribute = 'data-clipboard-' + suffix;
      if (!element.hasAttribute(attribute)) {
        return;
      }
      return element.getAttribute(attribute);
    }
  }, {
    key: 'copy',
    value: function copy(target, beforeRestore) {
      // Preserve previous selection if any
      var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

      target.select();
      var result = document.execCommand('copy');

      if (typeof beforeRestore == 'function') beforeRestore();

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
      var text = this.el.getAttributeValue('text');
      if (!text) return;

      // Creates a ghost textarea to copy from
      var el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);

      return this.copy(target, function () {
        // Remove ghost textare
        document.body.removeChild(el);
      });
    }

    // Detects a selector on 'data-attribute-target' and copies from it

  }, {
    key: 'copyFromSelector',
    value: function copyFromSelector() {
      var selector = this.el.getAttributeValue('target');
      var target = document.querySelector(selector);
      if (!target) return;

      return this.copy(target);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      return this.copyFromHardcoded() || this.copyFromSelector() || false;
    }
  }, {
    key: 'setupClipboard',
    value: function setupClipboard() {
      this.el.addEventListener('click', this.handleClick.bind(this));
    }
  }]);

  return ClipboardMiniSingle;
}();

module.exports = ClipboardMiniSingle;