webpackHotUpdate(6,{

/***/ 1312:
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

var _Campaign = __webpack_require__(1310);

var _Campaign2 = _interopRequireDefault(_Campaign);

var _campaign = __webpack_require__(1313);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(496);

var _contributeForm = __webpack_require__(1314);

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
          lineNumber: 63
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Campaign'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.renderCard()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_contributeForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
                  minimumContribution: summary[0],
                  balance: summary[0],
                  approversCount: summary[1],
                  requestsCount: summary[2],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0Iiwid2ViMyIsImNvbXBpbGVkQ2FtcGFpZ24iLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnbkluZGV4IiwicHJvcHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsImFwcHJvdmVyc0NvdW50IiwicmVxdWVzdHNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZCIsImFkZHJlc3MiLCJxdWVyeSIsImNhbXBhaWduSW5zdGFuY2UiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBOzs7Ozs7Ozs7OztpQ0FlTzttQkFRVCxLQVJTLEFBUUo7VUFSSSxBQUVULDZCQUZTLEFBRVQ7VUFGUyxBQUdULGlCQUhTLEFBR1Q7VUFIUyxBQUlULHdCQUpTLEFBSVQ7VUFKUyxBQUtULHVCQUxTLEFBS1Q7VUFMUyxBQU1ULGlCQU5TLEFBTVQsQUFJSDs7VUFBTTtnQkFDSixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBSEYsQUFHYyxBQUNaO2VBQU0sRUFBRSxjQUxFLEFBQ1osQUFJUSxBQUFlO0FBSnZCLEFBQ0UsT0FGVTtnQkFPWixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBVlUsQUFPWixBQUdjO0FBSGQsQUFDRTtnQkFJRixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBZlUsQUFZWixBQUdjO0FBSGQsQUFDRTtnQkFJRixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBcEJVLEFBaUJaLEFBR2M7QUFIZCxBQUNFO2dCQUtPLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTJCLEFBQ2xDO2NBRkYsQUFFTyxBQUNMO3FCQXpCSixBQUFjLEFBc0JaLEFBR2MsQUFJakI7QUFQRyxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUixBQUFRLEFBRVA7QUFGTztPQUFBOzs7OzZCQUtHLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRztBQURIO2NBREYsQUFDRSxBQUNHLEFBQUssQUFFUiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBUlIsQUFDRSxBQUVFLEFBSUUsQUFDRSxBQU1UO0FBTlM7QUFBQTs7Ozs7MkcsQUFsRW1COzs7OzttQkFDckI7QSwwQkFBVSxNQUFBLEFBQU0sTSxBQUFNLEFBQ3RCO0EsbUNBQWtCLHdCQUFBLEFBQVMsQTs7dUJBQ1gsaUJBQUEsQUFBaUIsUUFBakIsQUFBeUIsYUFBekIsQUFBc0MsQTs7bUJBQXREO0E7O3VDQUVnQixRQURmLEFBQ2UsQUFBUSxBQUM1QjsyQkFBUSxRQUZILEFBRUcsQUFBUSxBQUNoQjtrQ0FBZSxRQUhWLEFBR1UsQUFBUSxBQUN2QjtpQ0FBYyxRQUpULEFBSVMsQUFBUSxBQUN0QjsyQkFBUSxRQUxILEFBS0csQUFBUSxBO0FBTFgsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVBzQixnQkFBTSxBLEFBNkVsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhbS9LaWNrc3RhcnQifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wZmE3ZDc4ZDU1NTE4NTc0YjJkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MzllOTA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xuaW1wb3J0IGNvbXBpbGVkQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vYnVpbGQvQ2FtcGFpZ24uanNvbic7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHtDYXJkLCBHcmlkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybSc7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcbiAgICBjb25zdCBjYW1wYWlnbkluc3RhbmNlID1DYW1wYWlnbihhZGRyZXNzKTtcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ25JbnN0YW5jZS5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246c3VtbWFyeVswXSxcbiAgICAgIGJhbGFuY2U6c3VtbWFyeVswXSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OnN1bW1hcnlbMV0sXG4gICAgICByZXF1ZXN0c0NvdW50OnN1bW1hcnlbMl0sXG4gICAgICBtYW5hZ2VyOnN1bW1hcnlbNF1cbiAgICB9O1xuICB9XG5cbnJlbmRlckNhcmQoKSB7XG4gIGNvbnN0IHtcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgIGJhbGFuY2UsXG4gICAgYXBwcm92ZXJzQ291bnQsXG4gICAgcmVxdWVzdHNDb3VudCxcbiAgICBtYW5hZ2VyXG5cbiAgfT10aGlzLnByb3BzO1xuXG4gY29uc3QgaXRlbXMgPSBbXG4gICB7XG4gICAgIGhlYWRlcjptYW5hZ2VyLFxuICAgICBtZXRhOidhZGRyZXNzIG9mIG1hbmFnZXInLFxuICAgICBkZXNjcmlwdGlvbjonVGhpcyBjYW1wYWlnbiBpcyBhIHRlc3QgY2FtcGFpZ24nLFxuICAgICBzdHlsZTp7IG92ZXJmbG93V3JhcDonYnJlYWstd29yZCd9XG4gICB9LFxuICAge1xuICAgICBoZWFkZXI6bWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgbWV0YTonbWluaW11bSBjb250cmlidXRpb24gKHdlaSknLFxuICAgICBkZXNjcmlwdGlvbjonWW91IG11c3QgY29udHJpYnV0ZSBhdGxlYXN0IHRoaXMgbXVjaCB0byBiZWNvbWUgYW4gYXBwcm92ZXInXG4gICB9LFxuICAge1xuICAgICBoZWFkZXI6YXBwcm92ZXJzQ291bnQsXG4gICAgIG1ldGE6J051bWJlciBvZiBhcHByb3ZlcnMnLFxuICAgICBkZXNjcmlwdGlvbjonVG90YWwgbnVtYmVyIG9mIHBlb3BsZSBlbnRlcmVkIGludG8gY2FtcGFpZ24nXG4gICB9LFxuICAge1xuICAgICBoZWFkZXI6cmVxdWVzdHNDb3VudCxcbiAgICAgbWV0YTonTnVtYmVyIG9mIHJlcXVlc3RzJyxcbiAgICAgZGVzY3JpcHRpb246J1RvdGFsIG51bWJlciBvZiByZXF1ZXN0IHRvIHNwZW5kIG1vbmV5J1xuICAgfSxcbiAgIHtcbiAgICAgaGVhZGVyOndlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCdldGhlcicpLFxuICAgICBtZXRhOidDYW1wYWlnbiBiYWxhbmNlKGV0aGVyKScsXG4gICAgIGRlc2NyaXB0aW9uOidUb3RhbCBiYWxhbmNlIG9mIHRoZSBjYW1wYWlnbidcbiAgIH1cbiBdO1xuXG5yZXR1cm4gIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG5cbn1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPkNhbXBhaWduPC9oMz5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoID17MTB9PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZCgpfVxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoID17Nn0+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFRQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQUtBO0FBRUE7QUFJQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFGQTtBQUFBOzs7O0FBTUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFNQTtBQU5BO0FBQUE7Ozs7Ozs7Ozs7QUFqRUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVJBO0FBQ0E7QUE0RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==