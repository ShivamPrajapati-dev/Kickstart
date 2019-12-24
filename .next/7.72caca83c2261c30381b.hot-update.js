webpackHotUpdate(7,{

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _Layout = __webpack_require__(1297);

var _Layout2 = _interopRequireDefault(_Layout);

var _web = __webpack_require__(1091);

var _web2 = _interopRequireDefault(_web);

var _Campaign = __webpack_require__(1312);

var _Campaign2 = _interopRequireDefault(_Campaign);

var _campaign = __webpack_require__(1313);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(496);

var _contributeForm = __webpack_require__(1316);

var _contributeForm2 = _interopRequireDefault(_contributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shivam/Kickstart/pages/campaigns/show.js?entry';


var CampaignIndex = function (_React$Component) {
  (0, _inherits3.default)(CampaignIndex, _React$Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCard',
    value: function renderCard() {
      var _props = this.props,
          minimumContribution = _props.minimumContribution,
          balance = _props.balance,
          approversCount = _props.approversCount,
          requestsCount = _props.requestsCount,
          manager = _props.manager;

      var items = [{
        header: manager,
        meta: 'address of manager',
        description: 'This campaign is a test campaign',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'minimum contribution (wei)',
        description: 'You must contribute atleast this much to become an approver'
      }, {
        header: approversCount,
        meta: 'Number of approvers',
        description: 'Total number of people entered into campaign'
      }, {
        header: requestsCount,
        meta: 'Number of requests',
        description: 'Total number of request to spend money'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign balance(ether)',
        description: 'Total balance of the campaign'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Campaign'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.renderCard()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaignInstance, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaignInstance = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaignInstance.methods.getSummary().call();

              case 4:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  approversCount: summary[2],
                  requestsCount: summary[3],
                  manager: summary[4]
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react2.default.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0Iiwid2ViMyIsImNvbXBpbGVkQ2FtcGFpZ24iLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnbkluZGV4IiwicHJvcHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsImFwcHJvdmVyc0NvdW50IiwicmVxdWVzdHNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZCIsImFkZHJlc3MiLCJxdWVyeSIsImNhbXBhaWduSW5zdGFuY2UiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7OztpQ0FnQk87bUJBUVQsS0FSUyxBQVFKO1VBUkksQUFFVCw2QkFGUyxBQUVUO1VBRlMsQUFHVCxpQkFIUyxBQUdUO1VBSFMsQUFJVCx3QkFKUyxBQUlUO1VBSlMsQUFLVCx1QkFMUyxBQUtUO1VBTFMsQUFNVCxpQkFOUyxBQU1ULEFBSUg7O1VBQU07Z0JBQ0osQUFDUyxBQUNQO2NBRkYsQUFFTyxBQUNMO3FCQUhGLEFBR2MsQUFDWjtlQUFNLEVBQUUsY0FMRSxBQUNaLEFBSVEsQUFBZTtBQUp2QixBQUNFLE9BRlU7Z0JBT1osQUFDUyxBQUNQO2NBRkYsQUFFTyxBQUNMO3FCQVZVLEFBT1osQUFHYztBQUhkLEFBQ0U7Z0JBSUYsQUFDUyxBQUNQO2NBRkYsQUFFTyxBQUNMO3FCQWZVLEFBWVosQUFHYztBQUhkLEFBQ0U7Z0JBSUYsQUFDUyxBQUNQO2NBRkYsQUFFTyxBQUNMO3FCQXBCVSxBQWlCWixBQUdjO0FBSGQsQUFDRTtnQkFLTyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FENUIsQUFDUyxBQUEyQixBQUNsQztjQUZGLEFBRU8sQUFDTDtxQkF6QkosQUFBYyxBQXNCWixBQUdjLEFBSWpCO0FBUEcsQUFDRTs7MkNBTUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVIsQUFBUSxBQUVQO0FBRk87T0FBQTs7Ozs2QkFLRyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0c7QUFESDtjQURGLEFBQ0UsQUFDRyxBQUFLLEFBRVIsK0JBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQVJSLEFBQ0UsQUFFRSxBQUlFLEFBQ0UsQUFNVDtBQU5TOzs7Ozs7MkcsQUFuRW1COzs7OzttQkFDckI7QSwwQkFBVSxNQUFBLEFBQU0sTUFBTSxBQUN0QixBO0EsbUNBQWtCLHdCQUFBLEEsQUFBUzs7dUJBQ1gsaUJBQUEsQUFBaUIsUUFBakIsQUFBeUIsYUFBekIsQUFBc0MsQTs7bUJBQXREO0E7OzJCQUNDLEFBQ0csQUFDUjt1Q0FBb0IsUUFGZixBQUVlLEFBQVEsQUFDNUI7MkJBQVEsUUFISCxBQUdHLEFBQVEsQUFDaEI7a0NBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7aUNBQWMsUUFMVCxBQUtTLEFBQVEsQUFDdEI7MkJBQVEsUUFBQSxBQUFRLEEsQUFOWDtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQc0IsZ0JBQU0sQSxBQThFbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YW0vS2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shivam/Kickstart/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shivam/Kickstart/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy43MmNhY2E4M2MyMjYxYzMwMzgxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MTY0ZDE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xuaW1wb3J0IGNvbXBpbGVkQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vYnVpbGQvQ2FtcGFpZ24uanNvbic7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHtDYXJkLCBHcmlkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybSc7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcbiAgICBjb25zdCBjYW1wYWlnbkluc3RhbmNlID1DYW1wYWlnbihhZGRyZXNzKTtcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ25JbnN0YW5jZS5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6YWRkcmVzcyxcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246c3VtbWFyeVswXSxcbiAgICAgIGJhbGFuY2U6c3VtbWFyeVsxXSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OnN1bW1hcnlbMl0sXG4gICAgICByZXF1ZXN0c0NvdW50OnN1bW1hcnlbM10sXG4gICAgICBtYW5hZ2VyOnN1bW1hcnlbNF1cbiAgICB9O1xuICB9XG5cbnJlbmRlckNhcmQoKSB7XG4gIGNvbnN0IHtcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgIGJhbGFuY2UsXG4gICAgYXBwcm92ZXJzQ291bnQsXG4gICAgcmVxdWVzdHNDb3VudCxcbiAgICBtYW5hZ2VyXG5cbiAgfT10aGlzLnByb3BzO1xuXG4gY29uc3QgaXRlbXMgPSBbXG4gICB7XG4gICAgIGhlYWRlcjptYW5hZ2VyLFxuICAgICBtZXRhOidhZGRyZXNzIG9mIG1hbmFnZXInLFxuICAgICBkZXNjcmlwdGlvbjonVGhpcyBjYW1wYWlnbiBpcyBhIHRlc3QgY2FtcGFpZ24nLFxuICAgICBzdHlsZTp7IG92ZXJmbG93V3JhcDonYnJlYWstd29yZCd9XG4gICB9LFxuICAge1xuICAgICBoZWFkZXI6bWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgbWV0YTonbWluaW11bSBjb250cmlidXRpb24gKHdlaSknLFxuICAgICBkZXNjcmlwdGlvbjonWW91IG11c3QgY29udHJpYnV0ZSBhdGxlYXN0IHRoaXMgbXVjaCB0byBiZWNvbWUgYW4gYXBwcm92ZXInXG4gICB9LFxuICAge1xuICAgICBoZWFkZXI6YXBwcm92ZXJzQ291bnQsXG4gICAgIG1ldGE6J051bWJlciBvZiBhcHByb3ZlcnMnLFxuICAgICBkZXNjcmlwdGlvbjonVG90YWwgbnVtYmVyIG9mIHBlb3BsZSBlbnRlcmVkIGludG8gY2FtcGFpZ24nXG4gICB9LFxuICAge1xuICAgICBoZWFkZXI6cmVxdWVzdHNDb3VudCxcbiAgICAgbWV0YTonTnVtYmVyIG9mIHJlcXVlc3RzJyxcbiAgICAgZGVzY3JpcHRpb246J1RvdGFsIG51bWJlciBvZiByZXF1ZXN0IHRvIHNwZW5kIG1vbmV5J1xuICAgfSxcbiAgIHtcbiAgICAgaGVhZGVyOndlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCdldGhlcicpLFxuICAgICBtZXRhOidDYW1wYWlnbiBiYWxhbmNlKGV0aGVyKScsXG4gICAgIGRlc2NyaXB0aW9uOidUb3RhbCBiYWxhbmNlIG9mIHRoZSBjYW1wYWlnbidcbiAgIH1cbiBdO1xuXG5yZXR1cm4gIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG5cbn1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPkNhbXBhaWduPC9oMz5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoID17MTB9PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZCgpfVxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoID17Nn0+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfS8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBUUE7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBSUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUVBO0FBRkE7QUFBQTs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFNQTtBQU5BOzs7Ozs7Ozs7OztBQWxFQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSQTtBQUNBO0FBNkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=