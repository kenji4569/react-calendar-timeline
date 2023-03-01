"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelineHeadersConsumer = exports.TimelineHeadersProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _generic = require("../utility/generic");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultContextState = {
  registerScroll: function registerScroll() {
    // eslint-disable-next-line
    console.warn('default registerScroll header used');
    return _generic.noop;
  },
  rightSidebarWidth: 0,
  leftSidebarWidth: 150,
  timeSteps: {}
};
var _React$createContext = /*#__PURE__*/_react["default"].createContext(defaultContextState),
  Consumer = _React$createContext.Consumer,
  Provider = _React$createContext.Provider;
var TimelineHeadersProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(TimelineHeadersProvider, _React$Component);
  var _super = _createSuper(TimelineHeadersProvider);
  function TimelineHeadersProvider() {
    _classCallCheck(this, TimelineHeadersProvider);
    return _super.apply(this, arguments);
  }
  _createClass(TimelineHeadersProvider, [{
    key: "render",
    value: function render() {
      var contextValue = {
        rightSidebarWidth: this.props.rightSidebarWidth,
        leftSidebarWidth: this.props.leftSidebarWidth,
        timeSteps: this.props.timeSteps,
        registerScroll: this.props.registerScroll
      };
      return /*#__PURE__*/_react["default"].createElement(Provider, {
        value: contextValue
      }, this.props.children);
    }
  }]);
  return TimelineHeadersProvider;
}(_react["default"].Component);
exports.TimelineHeadersProvider = TimelineHeadersProvider;
_defineProperty(TimelineHeadersProvider, "propTypes", {
  children: _propTypes["default"].element.isRequired,
  rightSidebarWidth: _propTypes["default"].number,
  leftSidebarWidth: _propTypes["default"].number.isRequired,
  //TODO: maybe this should be skipped?
  timeSteps: _propTypes["default"].object.isRequired,
  registerScroll: _propTypes["default"].func.isRequired
});
var TimelineHeadersConsumer = Consumer;
exports.TimelineHeadersConsumer = TimelineHeadersConsumer;