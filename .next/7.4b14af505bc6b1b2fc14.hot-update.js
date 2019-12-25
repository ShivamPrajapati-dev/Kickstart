webpackHotUpdate(7,{

/***/ 1317:
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

var _web = __webpack_require__(1091);

var _web2 = _interopRequireDefault(_web);

var _campaign = __webpack_require__(1311);

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
          approvals = _props$request.approvals;

      return _react2.default.createElement(Row, {
        __source: {
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
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react2.default.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluaWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsInZhbHVlIiwiYXBwcm92YWxzQ291bnQiLCJhcHByb3ZhbHMiLCJ1dGlscyIsImZyb21XZWkiLCJhcHByb3ZlcnNDb3VudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFRLEFBQU87O0FBQ2YsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBQ2YsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBRUoscUZBQVcsbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ2MsY0FBQSxBQUFLLElBRG5CLEFBQ2MsQUFBUzs7aUJBQTFCO0FBREcsa0NBRUg7QUFGRyx5QkFFTSx3QkFBUyxNQUFBLEFBQUssTUFGcEIsQUFFTSxBQUFvQjs4QkFGMUI7OEJBR0gsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM5QyxTQUpFLEFBR0gsQUFBb0QsQUFDbkQsQUFBUztBQUQwQyxBQUN4RCxlQURJOztpQkFIRztpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBLGUsQUFRWCxzRkFBWSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDYSxjQUFBLEFBQUssSUFEbEIsQUFDYSxBQUFTOztpQkFBMUI7QUFESSxtQ0FFSjtBQUZJLHlCQUVLLHdCQUFTLE1BQUEsQUFBSyxNQUZuQixBQUVLLEFBQW9COytCQUZ6Qjs4QkFHSixBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDL0MsU0FKRyxBQUdKLEFBQXFELEFBQ3BELEFBQVM7QUFEMkMsQUFDekQsZUFESTs7aUJBSEk7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTs7Ozs7NkJBUUg7VUFBQSxBQUNBLE1BREEsQUFDWSx1QkFEWixBQUNBO1VBREEsQUFDSyxPQURMLEFBQ1ksdUJBRFosQUFDSzsyQkFDaUQsS0FBQSxBQUFLLE1BRjNELEFBRWlFO1VBRmpFLEFBRUEsNkJBRkEsQUFFQTtVQUZBLEFBRVksMkJBRlosQUFFWTtVQUZaLEFBRXNCLHVCQUZ0QixBQUVzQjtVQUZ0QixBQUU0QixnQ0FGNUIsQUFFNEI7VUFGNUIsQUFFMkMsMkJBRjNDLEFBRTJDLEFBQ2xEOzs2QkFDQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsS0FEcEIsQUFDRSxBQUFxQixBQUNyQixvQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUZGLEFBRUUsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLE9BSDVCLEFBR0UsQUFBTyxBQUF5QixBQUNoQywyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUpGLEFBSUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUFBLGdCQUF3QixVQUFBLEFBQUssTUFML0IsQUFLRSxBQUFtQyxBQUNuQyxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7U0FOUixBQU1FLEFBQU0sQUFDTiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUFBO0FBQUE7U0FSUixBQUNBLEFBT0UsQUFBTSxBQUdUOzs7OztFQWhDc0IsZ0JBQU0sQSxBQW1DL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YW0vS2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shivam/Kickstart/components/request.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shivam/Kickstart/components/request.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy40YjE0YWY1MDViYzZiMWIyZmMxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXF1ZXN0LmpzPzRmMGYwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGFibGUsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgb25BcHByb3ZlPSBhc3luYyAoKT0+e1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBjb25zdCBjYW1wYWlnbj1DYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICBmcm9tOmFjY291bnRzWzBdXG4gICAgfSlcbiAgfVxuXG4gIG9uRmluYWxpemU9IGFzeW5jICgpPT57XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnN0IGNhbXBhaWduPUNhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5pbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICBmcm9tOmFjY291bnRzWzBdXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Um93LCBDZWxsfSA9VGFibGU7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9uLHJlY2lwaWVudCx2YWx1ZSxhcHByb3ZhbHNDb3VudCxhcHByb3ZhbHN9PXRoaXMucHJvcHMucmVxdWVzdDtcbiAgICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q2VsbD57dGhpcy5wcm9wcy5pZCsxfTwvQ2VsbD5cbiAgICAgIDxDZWxsPntkZXNjcmlwdGlvbn08L0NlbGw+XG4gICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHZhbHVlLCdldGhlcicpfTwvQ2VsbD5cbiAgICAgIDxDZWxsPntyZWNpcGllbnR9PC9DZWxsPlxuICAgICAgPENlbGw+e2FwcHJvdmFsc0NvdW50fS97dGhpcy5wcm9wcy5hcHByb3ZlcnNDb3VudH08L0NlbGw+XG4gICAgICA8Q2VsbD48QnV0dG9uIGNvbG9yPSdncmVlbicgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj48L0NlbGw+XG4gICAgICA8Q2VsbD48QnV0dG9uIGNvbG9yPSd0ZWFsJyBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+PC9DZWxsPlxuICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVxdWVzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBaENBO0FBQ0E7QUFrQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==