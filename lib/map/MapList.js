'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapList = function (_React$Component) {
    _inherits(MapList, _React$Component);

    function MapList() {
        _classCallCheck(this, MapList);

        return _possibleConstructorReturn(this, (MapList.__proto__ || Object.getPrototypeOf(MapList)).apply(this, arguments));
    }

    _createClass(MapList, [{
        key: 'render',
        value: function render() {
            var array = [2, 3, 4, 5];
            var first = array[0],
                rest = array[1];

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    ' Map ',
                    first,
                    ' '
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. '
                )
            );
        }
    }]);

    return MapList;
}(_react2.default.Component);

exports.default = MapList;