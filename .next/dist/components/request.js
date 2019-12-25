'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shivam/Kickstart/components/request.js';


var RequestRow = function (_React$Component) {
  (0, _inherits3.default)(RequestRow, _React$Component);

  function RequestRow() {
    (0, _classCallCheck3.default)(this, RequestRow);

    return (0, _possibleConstructorReturn3.default)(this, (RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).apply(this, arguments));
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
          approvals = _props$request.approvals;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, this.props.id + 1), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _web2.default.utils.fromWei(value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, approvalsCount, '/', this.props.approversCount));
    }
  }]);

  return RequestRow;
}(_react2.default.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJyZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJ2YWx1ZSIsImFwcHJvdmFsc0NvdW50IiwiYXBwcm92YWxzIiwiaWQiLCJ1dGlscyIsImZyb21XZWkiLCJhcHByb3ZlcnNDb3VudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUTs7QUFDUixBQUFPLEFBQVU7Ozs7Ozs7OztJQUNYLEE7Ozs7Ozs7Ozs7OzZCQUNLO1VBQUEsQUFDQSxNQURBLEFBQ1ksdUJBRFosQUFDQTtVQURBLEFBQ0ssT0FETCxBQUNZLHVCQURaLEFBQ0s7MkJBQ2lELEtBQUEsQUFBSyxNQUYzRCxBQUVpRTtVQUZqRSxBQUVBLDZCQUZBLEFBRUE7VUFGQSxBQUVZLDJCQUZaLEFBRVk7VUFGWixBQUVzQix1QkFGdEIsQUFFc0I7VUFGdEIsQUFFNEIsZ0NBRjVCLEFBRTRCO1VBRjVCLEFBRTJDLDJCQUYzQyxBQUUyQyxBQUNsRDs7NkJBQ0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLEtBRHBCLEFBQ0UsQUFBcUIsQUFDckIsb0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FGRixBQUVFLEFBQ0EsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixPQUg1QixBQUdFLEFBQU8sQUFBeUIsQUFDaEMsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FKRixBQUlFLEFBQ0EsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FBQSxnQkFBd0IsVUFBQSxBQUFLLE1BTi9CLEFBQ0EsQUFLRSxBQUFtQyxBQUd0Qzs7Ozs7RUFic0IsZ0JBQU0sQSxBQWdCL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YW0vS2lja3N0YXJ0In0=