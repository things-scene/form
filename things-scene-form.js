(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'value',
    name: 'text'
  }],
  'value-property': 'text'
};

var _scene = scene,
    HTMLOverlayElement = _scene.HTMLOverlayElement;

var Button = function (_HTMLOverlayElement) {
  _inherits(Button, _HTMLOverlayElement);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'setElementProperties',
    value: function setElementProperties(button) {

      this.element.textContent = this.value;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'button';
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return Button;
}(HTMLOverlayElement);

exports.default = Button;


scene.Component.register('button', Button);

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'value',
    name: 'value'
  }, {
    type: 'number',
    label: 'size',
    name: 'size'
  }, {
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'checkbox',
    label: 'checked',
    name: 'checked'
  }],
  'value-property': 'value'
};

var _scene = scene,
    Component = _scene.Component;

var CheckBox = function (_Input) {
  _inherits(CheckBox, _Input);

  function CheckBox() {
    _classCallCheck(this, CheckBox);

    return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
  }

  _createClass(CheckBox, [{
    key: 'createElement',
    value: function createElement() {
      this.element = document.createElement('label');
      if (!this.element) return;

      var input = document.createElement('input');
      this.element.appendChild(input);

      var text = document.createTextNode(this.get('text'));
      this.element.appendChild(text);

      this.setElementProperties(this.element);

      if (this.parent.isHTMLElement && this.parent.isHTMLElement()) this.parent.element.appendChild(this.element);else this.root.model_layer.overlay.appendChild(this.element);

      Component.reposition(this);

      this.oncreate_element && this.oncreate_element(this.element);
    }
  }, {
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      var eText = this.element.querySelector('text');
      var eInput = this.element.querySelector('input');

      var _state = this.state,
          text = _state.text,
          checked = _state.checked,
          value = _state.value;


      if (eText) {
        eText.textContent = text;
      }

      if (eInput) {
        eInput.checked = checked;
        eInput.value = value;
      }

      _get(CheckBox.prototype.__proto__ || Object.getPrototypeOf(CheckBox.prototype), 'setElementProperties', this).call(this, eInput);
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'input';
    }
  }, {
    key: 'inputType',
    get: function get() {
      return 'checkbox';
    }
  }, {
    key: 'hasTextProperty',
    get: function get() {
      return true;
    }
  }]);

  return CheckBox;
}(_input2.default);

exports.default = CheckBox;


scene.Component.register('input-checkbox', CheckBox);

},{"./input":14}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true
};

var _scene = scene,
    HTMLOverlayContainer = _scene.HTMLOverlayContainer;

var Div = function (_HTMLOverlayContainer) {
  _inherits(Div, _HTMLOverlayContainer);

  function Div() {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
  }

  _createClass(Div, [{
    key: 'setElementProperties',
    value: function setElementProperties(div) {
      div.textContent = this.text;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'div';
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return Div;
}(HTMLOverlayContainer);

exports.default = Div;


scene.Component.register('div', Div);

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'legend',
    name: 'legend'
  }]
};

var _scene = scene,
    HTMLOverlayContainer = _scene.HTMLOverlayContainer;

var FieldSet = function (_HTMLOverlayContainer) {
  _inherits(FieldSet, _HTMLOverlayContainer);

  function FieldSet() {
    _classCallCheck(this, FieldSet);

    return _possibleConstructorReturn(this, (FieldSet.__proto__ || Object.getPrototypeOf(FieldSet)).apply(this, arguments));
  }

  _createClass(FieldSet, [{
    key: 'setElementProperties',
    value: function setElementProperties(fieldset) {
      var _state$legend = this.state.legend,
          legend = _state$legend === undefined ? '' : _state$legend;


      if (legend) {
        this.legendElement.textContent = legend;
      } else {
        this._legendElement && this.element.removeChild(this._legendElement);
        delete this._legendElement;
      }
    }
  }, {
    key: 'legendElement',
    get: function get() {
      if (!this._legendElement) {
        var legend = document.createElement('legend');
        this.element.appendChild(legend);

        this._legendElement = legend;
      }

      return this._legendElement;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return FieldSet;
}(HTMLOverlayContainer);

exports.default = FieldSet;


scene.Component.register('fieldset', FieldSet);

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright � HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'select',
    label: 'method',
    name: 'method',
    property: {
      options: [{
        display: 'GET',
        value: 'GET'
      }, {
        display: 'POST',
        value: 'POST'
      }]
    }
  }, {
    type: 'string',
    label: 'action',
    name: 'action'
  }, {
    type: 'number',
    label: 'period',
    name: 'period'
  }, {
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'string',
    label: 'authorization',
    name: 'authorization'
  }, {
    type: 'select',
    label: 'format',
    name: 'format',
    property: {
      options: [{
        display: 'JSON',
        value: 'JSON'
      }, {
        display: 'TEXT',
        value: 'TEXT'
      }]
    }
  }, {
    type: 'checkbox',
    label: 'with-credentials',
    name: 'withCredentials'
  }, {
    type: 'checkbox',
    label: 'submit-on-load',
    name: 'submitOnLoad'
  }],
  'value-property': 'action'
};

var _scene = scene,
    Component = _scene.Component,
    HTMLOverlayContainer = _scene.HTMLOverlayContainer,
    warn = _scene.warn;

var Form = function (_HTMLOverlayContainer) {
  _inherits(Form, _HTMLOverlayContainer);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'dispose',
    value: function dispose() {
      _get(Form.prototype.__proto__ || Object.getPrototypeOf(Form.prototype), 'dispose', this).call(this);
      this._stopRepeater();
    }
  }, {
    key: 'setElementProperties',
    value: function setElementProperties(form) {
      var _state = this.state,
          _state$action = _state.action,
          action = _state$action === undefined ? '' : _state$action,
          _state$method = _state.method,
          method = _state$method === undefined ? 'POST' : _state$method,
          _state$name = _state.name,
          name = _state$name === undefined ? '' : _state$name;


      form.action = action;
      form.method = method;
      form.name = name;
    }
  }, {
    key: '_startRepeater',
    value: function _startRepeater() {
      this._stopRepeater();

      if (!this.app.isViewMode) return;

      if (this.period) {
        this._repeatInterval = setInterval(this._submit.bind(this), this.period);
      }
    }
  }, {
    key: '_stopRepeater',
    value: function _stopRepeater() {
      if (this._repeatInterval) clearInterval(this._repeatInterval);
    }
  }, {
    key: '_onload',
    value: function _onload(e) {
      var result = e.target.response;
      try {
        this.setState('data', this.get('format') == 'JSON' ? JSON.parse(result) : result);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: 'oncreate_element',
    value: function oncreate_element(form) {
      var _this2 = this;

      if (!this.app.isViewMode) return;

      var _ = function _(e) {

        var url = form.action;
        var xhr = new XMLHttpRequest();

        var params = [].filter.call(form.elements, function (el) {
          if (el.type == 'radio' || el.type == 'checkbox') return el.checked;
          return true;
        }).filter(function (el) {
          return !!el.name;
        }).filter(function (el) {
          return !el.disabled;
        }).map(function (el) {
          return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
        }).join('&');

        xhr.onloadend = _this2._onload.bind(_this2);

        if (form.method == 'get') xhr.open(form.method, url + '?' + params);else xhr.open(form.method, url);

        xhr.setRequestHeader("Content-Type", ['x-www-form-urlencoded', 'json'].map(function (type) {
          return 'application/' + type;
        }).concat('text/plain').join(';'));

        if (_this2.get('authorization')) xhr.setRequestHeader('Authorization', _this2.get('authorization'));

        if (_this2.get('withCredentials')) xhr.withCredentials = true;

        if (form.method == 'get') xhr.send();else xhr.send(params);

        e.preventDefault();

        return false;
      };

      form.onsubmit = _;

      if (this.getState('submitOnLoad')) {
        setTimeout(this._submit.bind(this), 100);
      }

      this._startRepeater();
    }
  }, {
    key: '_submit',
    value: function _submit() {
      this.element.dispatchEvent(new Event('submit'));
    }
  }, {
    key: 'action',
    get: function get() {
      return this.state.action;
    },
    set: function set(action) {
      this.setState('action', action);
      this._startRepeater();
    }
  }, {
    key: 'period',
    get: function get() {
      return this.state.period * 1000;
    },
    set: function set(period) {
      this.setState('period', period);
      this._startRepeater();
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return Form;
}(HTMLOverlayContainer);

exports.default = Form;


Component.register('form', Form);

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'src',
    name: 'src'
  }],
  'value-property': 'src'
};

var _scene = scene,
    HTMLOverlayElement = _scene.HTMLOverlayElement;

var IFrame = function (_HTMLOverlayElement) {
  _inherits(IFrame, _HTMLOverlayElement);

  function IFrame() {
    _classCallCheck(this, IFrame);

    return _possibleConstructorReturn(this, (IFrame.__proto__ || Object.getPrototypeOf(IFrame)).apply(this, arguments));
  }

  _createClass(IFrame, [{
    key: 'setElementProperties',
    value: function setElementProperties(iframe) {
      var _state$src = this.state.src,
          src = _state$src === undefined ? '' : _state$src;


      if (iframe.src != src) iframe.src = src;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return IFrame;
}(HTMLOverlayElement);

exports.default = IFrame;


scene.Component.register('iframe', IFrame);

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'src',
    name: 'src'
  }],
  'value-property': 'src'
};

var _scene = scene,
    HTMLOverlayElement = _scene.HTMLOverlayElement;

var Img = function (_HTMLOverlayElement) {
  _inherits(Img, _HTMLOverlayElement);

  function Img() {
    _classCallCheck(this, Img);

    return _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).apply(this, arguments));
  }

  _createClass(Img, [{
    key: 'setElementProperties',
    value: function setElementProperties(img) {
      var _state$src = this.state.src,
          src = _state$src === undefined ? '' : _state$src;


      if (img.src != src) img.src = src;
    }
  }, {
    key: 'src',
    get: function get() {
      return this.get('src');
    },
    set: function set(src) {
      this.set('src', src);
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return Img;
}(HTMLOverlayElement);

exports.default = Img;


scene.Component.register('img', Img);

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('./form');

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_form).default;
  }
});

var _fieldset = require('./fieldset');

Object.defineProperty(exports, 'FieldSet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fieldset).default;
  }
});

var _select = require('./select');

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_select).default;
  }
});

var _textarea = require('./textarea');

Object.defineProperty(exports, 'TextArea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_textarea).default;
  }
});

var _button = require('./button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

var _radio = require('./radio');

Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_radio).default;
  }
});

var _checkbox = require('./checkbox');

Object.defineProperty(exports, 'CheckBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_checkbox).default;
  }
});

var _iframe = require('./iframe');

Object.defineProperty(exports, 'IFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_iframe).default;
  }
});

var _img = require('./img');

Object.defineProperty(exports, 'Img', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_img).default;
  }
});

var _link = require('./link');

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_link).default;
  }
});

var _div = require('./div');

Object.defineProperty(exports, 'Div', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_div).default;
  }
});

var _input = require('./input');

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_input).default;
  }
});

var _inputNumber = require('./input-number');

Object.defineProperty(exports, 'InputNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputNumber).default;
  }
});

var _inputDate = require('./input-date');

Object.defineProperty(exports, 'InputDate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputDate).default;
  }
});

var _inputFile = require('./input-file');

Object.defineProperty(exports, 'InputFile', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputFile).default;
  }
});

var _inputColor = require('./input-color');

Object.defineProperty(exports, 'InputColor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputColor).default;
  }
});

var _inputSubmit = require('./input-submit');

Object.defineProperty(exports, 'InputSubmit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputSubmit).default;
  }
});

var _template = require('./template');

Object.defineProperty(exports, 'Template', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_template).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./button":1,"./checkbox":2,"./div":3,"./fieldset":4,"./form":5,"./iframe":6,"./img":7,"./input":14,"./input-color":9,"./input-date":10,"./input-file":11,"./input-number":12,"./input-submit":13,"./link":15,"./radio":16,"./select":17,"./template":18,"./textarea":19}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'color',
    label: 'value',
    name: 'text'
  }],
  'value-property': 'text'
};

var InputColor = function (_Input) {
  _inherits(InputColor, _Input);

  function InputColor() {
    _classCallCheck(this, InputColor);

    return _possibleConstructorReturn(this, (InputColor.__proto__ || Object.getPrototypeOf(InputColor)).apply(this, arguments));
  }

  _createClass(InputColor, [{
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      _get(InputColor.prototype.__proto__ || Object.getPrototypeOf(InputColor.prototype), 'setElementProperties', this).call(this, element);
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return InputColor;
}(_input2.default);

exports.default = InputColor;


scene.Component.register('input-color', InputColor);

},{"./input":14}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'date',
    label: 'value',
    name: 'text'
  }, {
    type: 'date',
    label: 'min',
    name: 'min'
  }, {
    type: 'date',
    label: 'max',
    name: 'max'
  }],
  'value-property': 'text'
};

var InputDate = function (_Input) {
  _inherits(InputDate, _Input);

  function InputDate() {
    _classCallCheck(this, InputDate);

    return _possibleConstructorReturn(this, (InputDate.__proto__ || Object.getPrototypeOf(InputDate)).apply(this, arguments));
  }

  _createClass(InputDate, [{
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      _get(InputDate.prototype.__proto__ || Object.getPrototypeOf(InputDate.prototype), 'setElementProperties', this).call(this, element);

      var _state = this.state,
          min = _state.min,
          max = _state.max;


      element.min = min;
      element.max = max;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return InputDate;
}(_input2.default);

exports.default = InputDate;


scene.Component.register('input-date', InputDate);

},{"./input":14}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'string',
    label: 'value',
    name: 'text'
  }, {
    type: 'checkbox',
    label: 'multiple',
    name: 'multiple'
  }],
  'value-property': 'text'
};

var InputFile = function (_Input) {
  _inherits(InputFile, _Input);

  function InputFile() {
    _classCallCheck(this, InputFile);

    return _possibleConstructorReturn(this, (InputFile.__proto__ || Object.getPrototypeOf(InputFile)).apply(this, arguments));
  }

  _createClass(InputFile, [{
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      _get(InputFile.prototype.__proto__ || Object.getPrototypeOf(InputFile.prototype), 'setElementProperties', this).call(this, element);

      element.multiple = !!this.state.multiple;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return InputFile;
}(_input2.default);

exports.default = InputFile;


scene.Component.register('input-file', InputFile);

},{"./input":14}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'number',
    label: 'value',
    name: 'text'
  }, {
    type: 'number',
    label: 'min',
    name: 'min'
  }, {
    type: 'number',
    label: 'max',
    name: 'max'
  }, {
    type: 'number',
    label: 'step',
    name: 'step'
  }],
  'value-property': 'text'
};

var InputNumber = function (_Input) {
  _inherits(InputNumber, _Input);

  function InputNumber() {
    _classCallCheck(this, InputNumber);

    return _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).apply(this, arguments));
  }

  _createClass(InputNumber, [{
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      _get(InputNumber.prototype.__proto__ || Object.getPrototypeOf(InputNumber.prototype), 'setElementProperties', this).call(this, element);

      var _state = this.state,
          _state$min = _state.min,
          min = _state$min === undefined ? 0 : _state$min,
          _state$max = _state.max,
          max = _state$max === undefined ? 100 : _state$max,
          _state$step = _state.step,
          step = _state$step === undefined ? 1 : _state$step;


      element.min = min;
      element.max = max;
      element.step = step;
      element.value = this.value;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return InputNumber;
}(_input2.default);

exports.default = InputNumber;


scene.Component.register('input-number', InputNumber);
scene.Component.register('input-range', InputNumber);

},{"./input":14}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'string',
    label: 'value',
    name: 'text'
  }],
  'value-property': 'text'
};

var InputSubmit = function (_Input) {
  _inherits(InputSubmit, _Input);

  function InputSubmit() {
    _classCallCheck(this, InputSubmit);

    return _possibleConstructorReturn(this, (InputSubmit.__proto__ || Object.getPrototypeOf(InputSubmit)).apply(this, arguments));
  }

  _createClass(InputSubmit, [{
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      _get(InputSubmit.prototype.__proto__ || Object.getPrototypeOf(InputSubmit.prototype), 'setElementProperties', this).call(this, element);
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return InputSubmit;
}(_input2.default);

exports.default = InputSubmit;


scene.Component.register('input-button', InputSubmit);
scene.Component.register('input-submit', InputSubmit);
scene.Component.register('input-reset', InputSubmit);

},{"./input":14}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'string',
    label: 'value',
    name: 'text'
  }, {
    type: 'string',
    label: 'placeholder',
    name: 'placeholder'
  }, {
    type: 'checkbox',
    label: 'readonly',
    name: 'readonly'
  }, {
    type: 'checkbox',
    label: 'disabled',
    name: 'disabled'
  }, {
    type: 'number',
    label: 'max-length',
    name: 'maxlength'
  }],
  'value-property': 'text'
};

var _scene = scene,
    HTMLOverlayElement = _scene.HTMLOverlayElement,
    error = _scene.error;

var Input = function (_HTMLOverlayElement) {
  _inherits(Input, _HTMLOverlayElement);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'createElement',
    value: function createElement() {
      var _this2 = this;

      _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'createElement', this).call(this);

      /* element.property => component.property */
      this.element.onchange = function (e) {
        _this2.value = _this2.element.value;
      };
    }

    /* component.property => element.property */

  }, {
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      var _state = this.state,
          _state$name = _state.name,
          name = _state$name === undefined ? '' : _state$name,
          _state$placeholder = _state.placeholder,
          placeholder = _state$placeholder === undefined ? '' : _state$placeholder,
          disabled = _state.disabled,
          readonly = _state.readonly,
          maxlength = _state.maxlength;


      try {
        element.type = this.inputType;
        element.name = name;
        element.placeholder = placeholder;
        element.disabled = disabled;
        element.readonly = readonly;
        element.maxlength = maxlength;
        element.value = this.value;
      } catch (e) {
        error(e);
      }

      this.data = this.value;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'input';
    }
  }, {
    key: 'inputType',
    get: function get() {
      return this.get('type').substr(6);
    }
  }]);

  return Input;
}(HTMLOverlayElement);

exports.default = Input;


['input', 'input-text', 'input-password', 'input-email', 'input-search', 'input-time', 'input-datetime-local', 'input-month', 'input-week'].forEach(function (input) {
  return scene.Component.register(input, Input);
});

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'href',
    name: 'href',
    property: 'href'
  }, {
    type: 'select',
    label: 'target',
    name: 'target',
    property: {
      options: [{
        display: 'self',
        value: '_self'
      }, {
        display: 'blank',
        value: '_blank'
      }, {
        display: 'parent',
        value: '_parent'
      }, {
        display: 'top',
        value: '_top'
      }]
    }
  }],
  'value-property': 'href'
};

var _scene = scene,
    HTMLOverlayContainer = _scene.HTMLOverlayContainer;

var Link = function (_HTMLOverlayContainer) {
  _inherits(Link, _HTMLOverlayContainer);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'setElementProperties',
    value: function setElementProperties(link) {
      var _state = this.state,
          _state$href = _state.href,
          href = _state$href === undefined ? '' : _state$href,
          target = _state.target;


      if (link.href != href) link.href = href;

      link.target = target;

      if (this.components.length == 0) this.element.textContent = this.text || href;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'a';
    }
  }, {
    key: 'href',
    get: function get() {
      return this.get('href');
    },
    set: function set(href) {
      this.set('href', href);
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return Link;
}(HTMLOverlayContainer);

exports.default = Link;


scene.Component.register('link', Link);

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'value',
    name: 'value'
  }, {
    type: 'number',
    label: 'size',
    name: 'size'
  }, {
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'checkbox',
    label: 'checked',
    name: 'checked'
  }],
  'value-property': 'value'
};

var _scene = scene,
    Component = _scene.Component;

var Radio = function (_Input) {
  _inherits(Radio, _Input);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'createElement',
    value: function createElement() {
      this.element = document.createElement('label');
      if (!this.element) return;

      var input = document.createElement('input');
      this.element.appendChild(input);

      var text = document.createTextNode(this.get('text'));
      this.element.appendChild(text);

      this.setElementProperties(this.element);

      if (this.parent.isHTMLElement && this.parent.isHTMLElement()) this.parent.element.appendChild(this.element);else this.root.model_layer.overlay.appendChild(this.element);

      Component.reposition(this);

      this.oncreate_element && this.oncreate_element(this.element);
    }
  }, {
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      var eText = this.element.querySelector('text');
      var eInput = this.element.querySelector('input');

      var _state = this.state,
          text = _state.text,
          checked = _state.checked,
          value = _state.value;


      if (eText) {
        eText.textContent = text;
      }

      if (eInput) {
        eInput.checked = checked;
        eInput.value = value;
      }

      _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'setElementProperties', this).call(this, eInput);
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'input';
    }
  }, {
    key: 'inputType',
    get: function get() {
      return 'radio';
    }
  }]);

  return Radio;
}(_input2.default);

exports.default = Radio;


scene.Component.register('input-radio', Radio);

},{"./input":14}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright � HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'value',
    name: 'value'
  }, {
    type: 'number',
    label: 'size',
    name: 'size'
  }, {
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'checkbox',
    label: 'submit-on-change',
    name: 'submitOnChange'
  }, {
    type: 'checkbox',
    label: 'copy-value-to-data',
    name: 'copyValueToData'
  }, {
    type: 'string',
    label: 'text-field',
    name: 'textField'
  }, {
    type: 'string',
    label: 'value-field',
    name: 'valueField'
  }, {
    type: 'options',
    label: 'options',
    name: 'options'
  }],
  'value-property': 'value'
};

var _scene = scene,
    Component = _scene.Component,
    HTMLOverlayElement = _scene.HTMLOverlayElement,
    warn = _scene.warn;

var Select = function (_HTMLOverlayElement) {
  _inherits(Select, _HTMLOverlayElement);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'buildOptions',
    value: function buildOptions() {
      var _this2 = this;

      var _state = this.state,
          _state$options = _state.options,
          options = _state$options === undefined ? [] : _state$options,
          textField = _state.textField,
          valueField = _state.valueField;


      if (!options instanceof Array) options = [];

      this.element.textContent = '';
      var defaultValue;

      options.map && options.map(function (option, index) {
        var text = void 0,
            value = void 0;

        if (!textField) {
          text = option && (option['text'] || option);
        } else if (textField == '(index)') {
          text = index;
        } else {
          text = option && option[textField];
        }

        if (!valueField) {
          value = option && (option['value'] || option);
        } else if (valueField == '(index)') {
          value = index;
        } else {
          value = option && option[valueField];
        }

        if (defaultValue === undefined) defaultValue = value;

        return { text: text, value: value };
      }).forEach(function (option) {
        var el = document.createElement('option');
        el.value = typeof option.value == 'string' ? option.value : JSON.stringify(option.value);
        el.text = option.text;
        _this2.element.appendChild(el);
      });

      this.value = JSON.stringify(defaultValue);
    }
  }, {
    key: 'createElement',
    value: function createElement() {
      var _this3 = this;

      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'createElement', this).call(this);

      this.buildOptions();

      var element = this.element;

      element.value = this.get('value') || '';

      element.onchange = function (e) {
        _this3.set('value', element.value);
        if (_this3.get('submitOnChange') && element.form) element.form.dispatchEvent(new Event('submit'));
      };
    }
  }, {
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      var _state2 = this.state,
          size = _state2.size,
          name = _state2.name;


      element.size = size;
      element.name = name;
    }
  }, {
    key: 'onchange',
    value: function onchange(after, before) {
      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'onchange', this).call(this, after, before);

      if (after.hasOwnProperty('value') && this.element) {
        this.element.value = after.value;
        if (this.get('copyValueToData')) {
          try {
            this.data = JSON.parse(after.value);
          } catch (e) {
            warn(e);
            this.data = after.value;
          }
        }
        if (this.get('submitOnChange') && this.element.form) this.element.form.dispatchEvent(new Event('submit'));
      }

      if (after.hasOwnProperty('options')) this.buildOptions();
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }, {
    key: 'options',
    get: function get() {
      return this.getState('options');
    },
    set: function set(options) {
      this.setState('options', options);
    }
  }]);

  return Select;
}(HTMLOverlayElement);

exports.default = Select;


Component.register('select', Select);

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'textarea',
    label: 'template',
    name: 'template'
  }, {
    type: 'string',
    label: 'apply-to',
    name: 'applyTo'
  }]
};

var _scene = scene,
    HTMLOverlayContainer = _scene.HTMLOverlayContainer,
    ScriptLoader = _scene.ScriptLoader,
    error = _scene.error;


var FILLSTYLE = {
  type: 'pattern',
  fitPattern: true,
  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAMFBMVEUAAAAdHR0AAAAAAAAAAAAREREODg4AAAATExMAAAAAAAAAAAAAAAAAAAAWFhYAAABtUS6TAAAAD3RSTlMArnboZDwVtVUHmMTU9CygGbkuAAABBklEQVR42u3Vy47DMAgFUMbE78f9/7+dqpVKFNUzwKqLnD0RvjGYbrdvF8tK9JBWieTRAO6tdQYyeWS8DfIYeONEdmlCLE+GOClkV3ASyC7gpPn+ouiODAdOeJkjHMAZF2OCE1eHK0BfkLXho5yU8XVsjKWKj7E1iya/44kvpcdLJa3LOdg3zIIr2fg7qEd4umYQXpJqiPZyVbQwsMXJtoq889CwkUknMT6ai5QOfBRcb4oY1fMmiBnV1TFk+YDooST6T30UM7a4h5hoS4r/wjnEusleLeiusPFKFwhXCx0GXHUjZBmrDJNRfQ2IYthDYv/grwmrqG1AtV0ShKuF+ONQ6Hb7Hr9EkkNRgwrYbAAAAABJRU5ErkJggg=='
};

var Template = function (_HTMLOverlayContainer) {
  _inherits(Template, _HTMLOverlayContainer);

  function Template() {
    _classCallCheck(this, Template);

    return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
  }

  _createClass(Template, [{
    key: 'createElement',
    value: function createElement() {
      var _this2 = this;

      _get(Template.prototype.__proto__ || Object.getPrototypeOf(Template.prototype), 'createElement', this).call(this);

      this.element.value = this.get('value') || '';
      this.element.onchange = function (e) {
        _this2.set('value', _this2.element.value);
      };
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _get(Template.prototype.__proto__ || Object.getPrototypeOf(Template.prototype), 'dispose', this).call(this);

      this.targets && this.targets.forEach(function (target) {
        return target.shadowRoot.innerHTML = '<slot></slot>';
      });
      delete this.targets;
    }

    /*
     * 컴포넌트의 생성 또는 속성 변화 시에 호출되며,
     * 그에 따른 html element의 반영이 필요한 부분을 구현한다.
     */

  }, {
    key: 'setElementProperties',
    value: function setElementProperties(template) {
      template.innerHTML = this.state.template;
    }

    /*
     * 컴포넌트가 ready 상태가 되거나, 컴포넌트의 속성이 변화될 시 setElementProperties 뒤에 호출된다.
     * 변화에 따른 기본적인 html 속성이 super.reposition()에서 진행되고, 그 밖의 작업이 필요할 때, 오버라이드 한다.
     */

  }, {
    key: 'reposition',
    value: function reposition() {
      var _this3 = this;

      _get(Template.prototype.__proto__ || Object.getPrototypeOf(Template.prototype), 'reposition', this).call(this);

      var old_targets = this.targets || [];
      var targets = this.rootModel && Array.prototype.slice.call(this.rootModel.overlay.querySelectorAll(this.state.applyTo));

      targets && targets.forEach(function (target) {
        try {
          !target.shadowRoot && target.attachShadow({ mode: 'open' });
          target.shadowRoot.innerHTML = _this3.state.template;
        } catch (e) {
          error(e);
        }

        var idx = old_targets.indexOf(target);
        if (idx >= 0) old_targets.splice(idx, 1);
      });

      old_targets.forEach(function (target) {
        return target.shadowRoot.innerHTML = '<slot></slot>';
      });

      this.targets = targets;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'template';
    }
  }, {
    key: 'fillStyle',
    get: function get() {
      return FILLSTYLE;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }]);

  return Template;
}(HTMLOverlayContainer);

exports.default = Template;


scene.Component.register('template', Template);

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

var NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name'
  }, {
    type: 'string',
    label: 'value',
    name: 'text'
  }, {
    type: 'string',
    label: 'placeholder',
    name: 'placeholder'
  }, {
    type: 'checkbox',
    label: 'readonly',
    name: 'readonly'
  }, {
    type: 'checkbox',
    label: 'disabled',
    name: 'disabled'
  }, {
    type: 'number',
    label: 'max-length',
    name: 'maxlength'
  }],
  'value-property': 'text'
};

var _scene = scene,
    HTMLOverlayElement = _scene.HTMLOverlayElement;

var TextArea = function (_HTMLOverlayElement) {
  _inherits(TextArea, _HTMLOverlayElement);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: 'createElement',
    value: function createElement() {
      var _this2 = this;

      _get(TextArea.prototype.__proto__ || Object.getPrototypeOf(TextArea.prototype), 'createElement', this).call(this);

      this.element.style.resize = 'none';

      /* element.property => component.property */
      this.element.onchange = function (e) {
        _this2.value = _this2.element.value;
      };
    }

    /* component.property => element.property */

  }, {
    key: 'setElementProperties',
    value: function setElementProperties(element) {
      var _state = this.state,
          _state$name = _state.name,
          name = _state$name === undefined ? '' : _state$name,
          _state$placeholder = _state.placeholder,
          placeholder = _state$placeholder === undefined ? '' : _state$placeholder,
          disabled = _state.disabled,
          readonly = _state.readonly,
          maxlength = _state.maxlength;


      try {
        element.name = name;
        element.placeholder = placeholder;
        element.disabled = disabled;
        element.readonly = readonly;
        element.maxlength = maxlength;
        element.value = this.value;
      } catch (e) {
        error(e);
      }

      this.data = this.value;
    }
  }, {
    key: 'nature',
    get: function get() {
      return NATURE;
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'textarea';
    }
  }]);

  return TextArea;
}(HTMLOverlayElement);

exports.default = TextArea;


scene.Component.register('textarea', TextArea);

},{}]},{},[8]);
