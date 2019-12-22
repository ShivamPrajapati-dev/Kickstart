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

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shivam/Kickstart/pages/index.js?entry';


var CampaignIndex = function (_React$Component) {
  (0, _inherits3.default)(CampaignIndex, _React$Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.camp.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, 'View campaign'),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.renderCampaigns()), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Create Campaign'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var camp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaign().call();

              case 2:
                camp = _context.sent;
                return _context.abrupt('return', { camp: camp });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react2.default.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJjYW1wYWlnbiIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcCIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ24iLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3NDQVNZLEFBQ2hCO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLElBQUksVUFBQSxBQUFDLFNBQVksQUFDN0M7O2tCQUFPLEFBQ0UsQUFDUDt1Q0FBWSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsV0FBQSxFQUZQLEFBRU8sQUFDWjtpQkFIRixBQUFPLEFBR0MsQUFFVDtBQUxRLEFBQ0w7QUFGSixBQUFjLEFBUWQsT0FSYzs7MkNBUVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFJRSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsMENBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGNBRkYsQUFFRSxBQUFNLEFBQUssQUFDWixvQ0FBQSxBQUFDLHlDQUFPLFVBQVIsQUFBaUIsUUFBTyxTQUF4QjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQyxvQ0FBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBUFIsQUFDRSxBQUdDLEFBRUcsQUFDRSxBQU1UO0FBTlM7Ozs7Ozs7Ozs7Ozs7dUJBekJTLGtCQUFBLEFBQVMsUUFBVCxBQUFpQixzQixBQUFqQixBQUF1Qzs7bUJBQXBEO0E7aURBQ0MsRUFBRSxNQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFObUIsZ0JBQU0sQSxBQXdDbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hpdmFtL0tpY2tzdGFydCJ9