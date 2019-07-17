"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(_ref) {
  var text = _ref.text;
  return _react["default"].createElement("button", null, text);
};

Button.propTypes = {
  text: _propTypes["default"].string.isRequired
};
Button.deaultProps = {
  text: 'Defaul'
};
var _default = Button;
exports["default"] = _default;