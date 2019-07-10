'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('./clipboard-mini-single');

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
      var i = this.elements.length;
      while (i--) {
        this.list.push(new ClipboardMiniSingle(this.elements[i]));
      }
    }
  }]);

  return ClipboardMini;
}();

module.exports = ClipboardMini;