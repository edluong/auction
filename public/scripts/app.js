'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuctionApp = function (_React$Component) {
    _inherits(AuctionApp, _React$Component);

    function AuctionApp() {
        _classCallCheck(this, AuctionApp);

        return _possibleConstructorReturn(this, (AuctionApp.__proto__ || Object.getPrototypeOf(AuctionApp)).apply(this, arguments));
    }

    _createClass(AuctionApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Display, null),
                React.createElement(Input, null)
            );
        }
    }]);

    return AuctionApp;
}(React.Component);

;

var Display = function (_React$Component2) {
    _inherits(Display, _React$Component2);

    function Display() {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
    }

    _createClass(Display, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Display component!'
            );
        }
    }]);

    return Display;
}(React.Component);

;

var Input = function (_React$Component3) {
    _inherits(Input, _React$Component3);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Input Component!'
            );
        }
    }]);

    return Input;
}(React.Component);

ReactDOM.render(React.createElement(AuctionApp, null), document.getElementById('app'));
