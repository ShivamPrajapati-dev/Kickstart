'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shivam/Kickstart/pages/campaigns/new.js?entry';


var CampaignNew = function (_React$Component) {
  (0, _inherits3.default)(CampaignNew, _React$Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: '',
      successMesssage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 8:
                _this.setState({ successMesssage: 'Transaction success!!' });
                _routes.Router.push('/');
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                _this.setState({ loading: false });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'New Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, success: !!this.state.successMesssage, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Enter minimum amount to enter in campaign',
        label: 'wei',
        labelPosition: 'right',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Oops!'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.state.errorMessage)), _react2.default.createElement(_semanticUiReact.Message, {
        success: true,
        header: 'Transaction successful',
        content: 'Minimum contribution for this campaign is set.',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Submit')));
    }
  }]);

  return CampaignNew;
}(_react2.default.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsImZhY3RvcnkiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInB1c2giLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBTSxBQUFRLEFBQU87O0FBQzdCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUSxBQUFhOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBRUo7MkJBQVEsQUFDYyxBQUNwQjtvQkFGTSxBQUVPLEFBQ2I7dUJBSE0sQUFHVSxBQUNoQjtlLEFBSk0sQUFJRTtBQUpGLEFBQ04sYUFNRixBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBTSxjQUZwQixBQUVULEFBQWMsQUFBNEI7Z0NBRmpDO2dDQUFBO3VCQUlnQixjQUFBLEFBQUssSUFKckIsQUFJZ0IsQUFBUzs7bUJBQTFCO0FBSkMsb0NBQUE7Z0NBQUE7eUNBS0QsQUFBUSxRQUFSLEFBQWdCLGVBQWUsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLHFCQUExQyxBQUErRDt3QkFDaEUsU0FORSxBQUtELEFBQW9FLEFBQ3JFLEFBQVM7QUFENEQsQUFDMUUsaUJBRE07O21CQUdSO3NCQUFBLEFBQUssU0FBUyxFQUFDLGlCQUFmLEFBQWMsQUFBaUIsQUFDL0I7K0JBQUEsQUFBTyxLQVRFLEFBU1QsQUFBWTtnQ0FUSDtBQUFBOzttQkFBQTtnQ0FBQTtnREFXVDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQVhuQixBQVdULEFBQWMsQUFBa0I7O21CQUVsQztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQWJKLEFBYVgsQUFBYyxBQUFTOzttQkFiWjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQWdCRjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1ELGNBQWMsU0FBVyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQW5GLEFBQXlGO29CQUF6RjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ssY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztxQkFBRCxBQUNjLEFBQ1o7ZUFGRixBQUVRLEFBQ047dUJBSEYsQUFHZ0IsQUFDZDtlQUFTLEtBQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjtrQkFBWSxrQkFBQSxBQUFDLE9BQVUsQUFDckI7aUJBQUEsQUFBSyxTQUFTLEVBQUMscUJBQW9CLE1BQUEsQUFBTSxPQUF6QyxBQUFjLEFBQWtDLEFBQ2pEO0FBUEg7O29CQUFBO3NCQUhOLEFBQ0ksQUFFRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQseUJBQUEsQUFBUzs7b0JBQVQ7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDBCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxNQWZmLEFBYUksQUFFRSxBQUFlLEFBRWpCLGdDQUFBLEFBQUM7aUJBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBSEYsQUFHVTs7b0JBSFY7c0JBakJKLEFBaUJJLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxNQUFyQyxBQUEwQyxVQUFTLFNBQW5EO29CQUFBO3NCQUFBO0FBQUE7U0F6QlIsQUFDRSxBQUVFLEFBc0JJLEFBS1Q7Ozs7O0VBeER1QixnQkFBTSxBLEFBMkRoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hpdmFtL0tpY2tzdGFydCJ9