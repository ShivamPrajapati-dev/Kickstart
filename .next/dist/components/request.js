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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shivam/Kickstart/components/request.js';


var RequestRow = function (_React$Component) {
  (0, _inherits3.default)(RequestRow, _React$Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context.sent;
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context2.sent;
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 6;
              return campaign.methods.finilizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props$request = this.props.request,
          description = _props$request.description,
          recipient = _props$request.recipient,
          value = _props$request.value,
          approvalsCount = _props$request.approvalsCount,
          approvals = _props$request.approvals,
          complete = _props$request.complete;

      return _react2.default.createElement(Row, { disabled: complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.props.id + 1), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _web2.default.utils.fromWei(value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, approvalsCount, '/', this.props.approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react2.default.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluaWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsInZhbHVlIiwiYXBwcm92YWxzQ291bnQiLCJhcHByb3ZhbHMiLCJjb21wbGV0ZSIsInV0aWxzIiwiZnJvbVdlaSIsImFwcHJvdmVyc0NvdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFDZixBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFFSixxRkFBVyxtQkFBQTtvQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDYyxjQUFBLEFBQUssSUFEbkIsQUFDYyxBQUFTOztpQkFBMUI7QUFERyxrQ0FFSDtBQUZHLHlCQUVNLHdCQUFTLE1BQUEsQUFBSyxNQUZwQixBQUVNLEFBQW9COzhCQUYxQjs4QkFHSCxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0JBQzlDLFNBSkUsQUFHSCxBQUFvRCxBQUNuRCxBQUFTO0FBRDBDLEFBQ3hELGVBREk7O2lCQUhHO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0EsZSxBQVFYLHNGQUFZLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBO3FCQUNhLGNBQUEsQUFBSyxJQURsQixBQUNhLEFBQVM7O2lCQUExQjtBQURJLG1DQUVKO0FBRkkseUJBRUssd0JBQVMsTUFBQSxBQUFLLE1BRm5CLEFBRUssQUFBb0I7K0JBRnpCOzhCQUdKLEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NCQUMvQyxTQUpHLEFBR0osQUFBcUQsQUFDcEQsQUFBUztBQUQyQyxBQUN6RCxlQURJOztpQkFISTtpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBOzs7Ozs2QkFRSDtVQUFBLEFBQ0EsTUFEQSxBQUNZLHVCQURaLEFBQ0E7VUFEQSxBQUNLLE9BREwsQUFDWSx1QkFEWixBQUNLOzJCQUMyRCxLQUFBLEFBQUssTUFGckUsQUFFMkU7VUFGM0UsQUFFQSw2QkFGQSxBQUVBO1VBRkEsQUFFWSwyQkFGWixBQUVZO1VBRlosQUFFc0IsdUJBRnRCLEFBRXNCO1VBRnRCLEFBRTRCLGdDQUY1QixBQUU0QjtVQUY1QixBQUUyQywyQkFGM0MsQUFFMkM7VUFGM0MsQUFFc0QsMEJBRnRELEFBRXNELEFBQzdEOzs2QkFDQyxjQUFELE9BQUssVUFBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsS0FEcEIsQUFDRSxBQUFxQixBQUNyQixvQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUZGLEFBRUUsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLE9BSDVCLEFBR0UsQUFBTyxBQUF5QixBQUNoQywyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUpGLEFBSUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUFBLGdCQUF3QixVQUFBLEFBQUssTUFML0IsQUFLRSxBQUFtQyxBQUNuQyxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxvQkFBTyxBQUFTLHVCQUNkLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQztvQkFBMUM7c0JBQUE7QUFBQTtPQUFBLEVBUEosQUFNRSxBQUNFLEFBRUosNkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsb0JBQU8sQUFBVSx1QkFDYixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUFBO0FBQUE7T0FBQSxFQVhKLEFBQ0EsQUFTQSxBQUNJLEFBSUw7Ozs7O0VBcENzQixnQkFBTSxBLEFBdUMvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhbS9LaWNrc3RhcnQifQ==