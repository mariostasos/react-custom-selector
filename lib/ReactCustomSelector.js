'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ReactCustomSelector = (function (_Component) {
	_inherits(ReactCustomSelector, _Component);

	function ReactCustomSelector(props) {
		_classCallCheck(this, ReactCustomSelector);

		_get(Object.getPrototypeOf(ReactCustomSelector.prototype), 'constructor', this).call(this, props);
		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			selected: null
		};
	}

	_createClass(ReactCustomSelector, [{
		key: 'handleSelect',
		value: function handleSelect(e) {
			var self = this;
			var selector_val = e.target.value;
			self.setState({ selected: selector_val });

			if (self.props.selectValue) {
				self.props.selectValue(selector_val);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this;

			var classes = ['react-custom-selector', self.props.customClass];
			classes = classes.join(' ');
			var name = self.props.name ? self.props.name : null;
			var placeholder = self.props.placeholder ? self.props.placeholder : null;
			var noContentMsg = self.props.noContentMsg ? self.props.noContentMsg : 'No Content Found';
			var options = self.props.options;

			if (!Array.isArray(options)) {
				console.log('Please provide an array');
				return;
			}

			var dataMapped = options.map(function (item, index) {
				return _react2['default'].createElement(
					'option',
					{ key: item || index, value: item || index },
					item || index
				);
			});

			if (options.length > 0) {
				return _react2['default'].createElement(
					'select',
					_extends({ name: name, value: self.state.selected ? self.state.selected : '', ref: 'react-custom-selector', className: classes, onChange: self.handleSelect }, self.props),
					_react2['default'].createElement(
						'option',
						{ key: '0', value: '0' },
						placeholder
					),
					dataMapped ? dataMapped : null
				);
			} else {
				return _react2['default'].createElement(
					'div',
					null,
					noContentMsg
				);
			}
		}
	}]);

	return ReactCustomSelector;
})(_react.Component);

exports['default'] = ReactCustomSelector;
module.exports = exports['default'];