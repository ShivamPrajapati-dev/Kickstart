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
      value: '',
      errorMessage: '',
      loading: false
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

                _this.setState({ loading: true, errorMessage: '' });
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 12]]);
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

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
          lineNumber: 43
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Submit'));
    }
  }]);

  return ContributeForm;
}(_react2.default.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVEsQUFBSyxBQUFNLEFBQVE7O0FBQzNCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7OzROQUVKLEE7YUFBUSxBQUNBLEFBQ047b0JBRk0sQUFFTyxBQUNiO2VBSE0sQUFHRSxBO0FBSEYsQUFDTixhLEFBTUQ7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNWO3NCQUFBLEFBQU0sQUFDQTtBQUZJLDJCQUVPLHdCQUFTLE1BQUEsQUFBSyxNQUZyQixBQUVPLEFBQW9CO2dDQUYzQjt1QkFHYSxjQUFBLEFBQUssSUFIbEIsQUFHYSxBQUFTOzttQkFBMUI7QUFISSxvQ0FBQTtnQ0FNUjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssY0FOcEIsQUFNUixBQUFjLEFBQTJCO2dDQU5qQztnQ0FPRixBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7d0JBQzdCLFNBRGtDLEFBQ2xDLEFBQVMsQUFDZDt5QkFBTSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BVDVCLEFBT0YsQUFBbUMsQUFFakMsQUFBa0M7QUFGRCxBQUN2QyxpQkFESTs7bUJBSU47K0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BWC9CLEFBV1IsQUFBNkM7O2dDQVhyQztBQUFBOzttQkFBQTtnQ0FBQTtnREFjUjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQWRwQixBQWNSLEFBQWMsQUFBa0I7O21CQUdsQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sT0FqQm5CLEFBaUJWLEFBQWMsQUFBcUI7O21CQWpCekI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFzQkw7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMENBQUEsQUFBQztrQkFDVyxrQkFBQSxBQUFDLE9BQVUsQUFDbkI7aUJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxNQUFBLEFBQU0sT0FBM0IsQUFBYyxBQUFvQixBQUNuQztBQUhILEFBSUU7ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtxQkFMRixBQUtjLEFBQ1o7ZUFORixBQU1RLEFBQ047dUJBUEYsQUFPZ0I7b0JBUGhCO3NCQUhKLEFBQ0UsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQVpGLEFBWUUsQUFDRTtBQURGOzBCQUNFLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBZE4sQUFDRSxBQWFJLEFBR1A7Ozs7O0VBakQ0QixnQkFBTSxBLEFBb0RuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJjb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YW0vS2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shivam/Kickstart/components/contributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shivam/Kickstart/components/contributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5hNzRmNDFmNmM3ZmI2MjM3NWYwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybS5qcz9jOWI0YzcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm0sSW5wdXQsQnV0dG9uLCBNZXNzYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJztcblxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOicnLFxuICAgIGVycm9yTWVzc2FnZTonJyxcbiAgICBsb2FkaW5nOmZhbHNlXG4gIH07XG5cblxuICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWUsZXJyb3JNZXNzYWdlOicnfSk7XG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcbiAgICAgICAgZnJvbTphY2NvdW50c1swXSxcbiAgICAgICAgdmFsdWU6d2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCdldGhlcicpXG4gICAgICB9KTtcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTplcnIubWVzc2FnZX0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsdmFsdWU6Jyd9KTtcblxuICB9XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPGxhYmVsPkFtbW91bnQgdG8gY29udHJpYnV0ZTwvbGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGFtb3VudCB0byBlbnRlciBpbiBjYW1wYWlnbidcbiAgICAgICAgICBsYWJlbD0nZXRoZXInXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj0ncmlnaHQnLz5cbiAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj0nT3BwcyEnIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gcHJpbWFyeT5TdWJtaXQ8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBWkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQVBBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFqREE7QUFDQTtBQW1EQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9