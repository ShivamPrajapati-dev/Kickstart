webpackHotUpdate(7,{

/***/ 1316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(496);

var _campaign = __webpack_require__(1313);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1091);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(790);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shivam/Kickstart/components/contributeForm.js';


var ContributeForm = function (_React$Component) {
  (0, _inherits3.default)(ContributeForm, _React$Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.prev = 5;
                _context.next = 8;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 8:
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                _context.next = 13;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](5);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Ammount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        onChange: function onChange(event) {
          _this3.setState({ value: event.target.value });
        },
        value: this.state.value,
        placeholder: 'Enter amount to enter in campaign',
        label: 'ether',
        labelPosition: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Submit'));
    }
  }]);

  return ContributeForm;
}(_react2.default.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFRLEFBQUssQUFBTSxBQUFROztBQUMzQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozs0TkFFSixBO2EsQUFBUSxBQUNBO0FBREEsQUFDTixhQUlELEE7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNWO3NCQUFBLEFBQU0sQUFDQTtBQUZJLDJCQUVPLHdCQUFTLE1BQUEsQUFBSyxNQUZyQixBQUVPLEFBQW9CO2dDQUYzQjt1QkFHYSxjQUFBLEFBQUssSUFIbEIsQUFHYSxBQUFTOzttQkFBMUI7QUFISSxvQ0FBQTtnQ0FBQTtnQ0FBQTtnQ0FNRixBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7d0JBQzdCLFNBRGtDLEFBQ2xDLEFBQVMsQUFDZDt5QkFBTSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BUjVCLEFBTUYsQUFBbUMsQUFFakMsQUFBa0M7QUFGRCxBQUN2QyxpQkFESTs7bUJBSU47K0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BVi9CLEFBVVIsQUFBNkM7O2dDQVZyQztBQUFBOzttQkFBQTtnQ0FBQTtnREFBQTs7bUJBQUE7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFtQkw7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMENBQUEsQUFBQztrQkFDVyxrQkFBQSxBQUFDLE9BQVUsQUFDbkI7aUJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxNQUFBLEFBQU0sT0FBM0IsQUFBYyxBQUFvQixBQUNuQztBQUhILEFBSUU7ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtxQkFMRixBQUtjLEFBQ1o7ZUFORixBQU1RLEFBQ047dUJBUEYsQUFPZ0I7b0JBUGhCO3NCQUhKLEFBQ0UsQUFFRSxBQVNBO0FBVEE7QUFDRSwyQkFRRixBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWJOLEFBQ0UsQUFZSSxBQUdQOzs7OztFQTNDNEIsZ0JBQU0sQSxBQThDbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hpdmFtL0tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shivam/Kickstart/components/contributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shivam/Kickstart/components/contributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy41Nzc0OGJkZGNkODVjMjRjMTBkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybS5qcz9lZmMxMzBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm0sSW5wdXQsQnV0dG9uLCBNZXNzYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJztcblxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOicnXG4gIH07XG5cblxuICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICB0cnkge1xuXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcbiAgICAgICAgZnJvbTphY2NvdW50c1swXSxcbiAgICAgICAgdmFsdWU6d2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCdldGhlcicpXG4gICAgICB9KTtcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcblxuICAgIH1cblxuICB9XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICA8bGFiZWw+QW1tb3VudCB0byBjb250cmlidXRlPC9sYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgYW1vdW50IHRvIGVudGVyIGluIGNhbXBhaWduJ1xuICAgICAgICAgIGxhYmVsPSdldGhlcidcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPSdyaWdodCcvPlxuICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+U3VibWl0PC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udHJpYnV0ZUZvcm0uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFYQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUdBOzs7OztBQTNDQTtBQUNBO0FBNkNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=