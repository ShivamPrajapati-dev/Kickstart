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

var _routes = __webpack_require__(790);

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
          lineNumber: 65
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Campaign'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.renderCard(), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'View requests')))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0Iiwid2ViMyIsImNvbXBpbGVkQ2FtcGFpZ24iLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJhcHByb3ZlcnNDb3VudCIsInJlcXVlc3RzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmQiLCJhZGRyZXNzIiwicXVlcnkiLCJjYW1wYWlnbkluc3RhbmNlIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVEsQUFBTSxBQUFNOztBQUNwQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O2lDQWdCTzttQkFRVCxLQVJTLEFBUUo7VUFSSSxBQUVULDZCQUZTLEFBRVQ7VUFGUyxBQUdULGlCQUhTLEFBR1Q7VUFIUyxBQUlULHdCQUpTLEFBSVQ7VUFKUyxBQUtULHVCQUxTLEFBS1Q7VUFMUyxBQU1ULGlCQU5TLEFBTVQsQUFJSDs7VUFBTTtnQkFDSixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBSEYsQUFHYyxBQUNaO2VBQU0sRUFBRSxjQUxFLEFBQ1osQUFJUSxBQUFlO0FBSnZCLEFBQ0UsT0FGVTtnQkFPWixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBVlUsQUFPWixBQUdjO0FBSGQsQUFDRTtnQkFJRixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBZlUsQUFZWixBQUdjO0FBSGQsQUFDRTtnQkFJRixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBcEJVLEFBaUJaLEFBR2M7QUFIZCxBQUNFO2dCQUtPLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTJCLEFBQ2xDO2NBRkYsQUFFTyxBQUNMO3FCQXpCSixBQUFjLEFBc0JaLEFBR2MsQUFJakI7QUFQRyxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUixBQUFRLEFBRVA7QUFGTztPQUFBOzs7OzZCQUtHLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRztBQURIO2NBQUEsQUFDRyxBQUFLLEFBQ04sOEJBQUEsQUFBQyw4QkFBSyx1QkFBc0IsS0FBQSxBQUFLLE1BQTNCLEFBQWlDLFVBQXZDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQUxOLEFBQ0UsQUFFRSxBQUNFLEFBQ0EsQUFJSixxQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBYlIsQUFDRSxBQUVFLEFBU0UsQUFDRSxBQU1UO0FBTlM7Ozs7OzsyRyxBQXhFbUI7Ozs7O21CQUNyQjtBLDBCQUFVLE1BQUEsQUFBTSxNLEFBQU0sQUFDdEI7QSxtQ0FBa0Isd0JBQUEsQUFBUyxBOzt1QkFDWCxpQkFBQSxBQUFpQixRQUFqQixBQUF5QixhQUF6QixBQUFzQyxBOzttQkFBdEQ7QTs7MkJBQ0MsQUFDRyxBQUNSO3VDQUFvQixRQUZmLEFBRWUsQUFBUSxBQUM1QjsyQkFBUSxRQUhILEFBR0csQUFBUSxBQUNoQjtrQ0FBZSxRQUpWLEFBSVUsQUFBUSxBQUN2QjtpQ0FBYyxRQUxULEFBS1MsQUFBUSxBQUN0QjsyQkFBUSxRQU5ILEFBTUcsQUFBUSxBO0FBTlgsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVBzQixnQkFBTSxBLEFBbUZsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhbS9LaWNrc3RhcnQifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy43N2ZlMGIyOWFkNzliOTEzYjhiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/OWI0ZmZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xuaW1wb3J0IGNvbXBpbGVkQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vYnVpbGQvQ2FtcGFpZ24uanNvbic7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHtDYXJkLCBHcmlkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRyaWJ1dGVGb3JtJztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xuICAgIGNvbnN0IGNhbXBhaWduSW5zdGFuY2UgPUNhbXBhaWduKGFkZHJlc3MpO1xuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbkluc3RhbmNlLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkcmVzczphZGRyZXNzLFxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjpzdW1tYXJ5WzBdLFxuICAgICAgYmFsYW5jZTpzdW1tYXJ5WzFdLFxuICAgICAgYXBwcm92ZXJzQ291bnQ6c3VtbWFyeVsyXSxcbiAgICAgIHJlcXVlc3RzQ291bnQ6c3VtbWFyeVszXSxcbiAgICAgIG1hbmFnZXI6c3VtbWFyeVs0XVxuICAgIH07XG4gIH1cblxucmVuZGVyQ2FyZCgpIHtcbiAgY29uc3Qge1xuICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgYmFsYW5jZSxcbiAgICBhcHByb3ZlcnNDb3VudCxcbiAgICByZXF1ZXN0c0NvdW50LFxuICAgIG1hbmFnZXJcblxuICB9PXRoaXMucHJvcHM7XG5cbiBjb25zdCBpdGVtcyA9IFtcbiAgIHtcbiAgICAgaGVhZGVyOm1hbmFnZXIsXG4gICAgIG1ldGE6J2FkZHJlc3Mgb2YgbWFuYWdlcicsXG4gICAgIGRlc2NyaXB0aW9uOidUaGlzIGNhbXBhaWduIGlzIGEgdGVzdCBjYW1wYWlnbicsXG4gICAgIHN0eWxlOnsgb3ZlcmZsb3dXcmFwOidicmVhay13b3JkJ31cbiAgIH0sXG4gICB7XG4gICAgIGhlYWRlcjptaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICBtZXRhOidtaW5pbXVtIGNvbnRyaWJ1dGlvbiAod2VpKScsXG4gICAgIGRlc2NyaXB0aW9uOidZb3UgbXVzdCBjb250cmlidXRlIGF0bGVhc3QgdGhpcyBtdWNoIHRvIGJlY29tZSBhbiBhcHByb3ZlcidcbiAgIH0sXG4gICB7XG4gICAgIGhlYWRlcjphcHByb3ZlcnNDb3VudCxcbiAgICAgbWV0YTonTnVtYmVyIG9mIGFwcHJvdmVycycsXG4gICAgIGRlc2NyaXB0aW9uOidUb3RhbCBudW1iZXIgb2YgcGVvcGxlIGVudGVyZWQgaW50byBjYW1wYWlnbidcbiAgIH0sXG4gICB7XG4gICAgIGhlYWRlcjpyZXF1ZXN0c0NvdW50LFxuICAgICBtZXRhOidOdW1iZXIgb2YgcmVxdWVzdHMnLFxuICAgICBkZXNjcmlwdGlvbjonVG90YWwgbnVtYmVyIG9mIHJlcXVlc3QgdG8gc3BlbmQgbW9uZXknXG4gICB9LFxuICAge1xuICAgICBoZWFkZXI6d2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsJ2V0aGVyJyksXG4gICAgIG1ldGE6J0NhbXBhaWduIGJhbGFuY2UoZXRoZXIpJyxcbiAgICAgZGVzY3JpcHRpb246J1RvdGFsIGJhbGFuY2Ugb2YgdGhlIGNhbXBhaWduJ1xuICAgfVxuIF07XG5cbnJldHVybiAgPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcblxufVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+Q2FtcGFpZ248L2gzPlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGggPXsxMH0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkKCl9XG4gICAgICAgICAgICA8TGluayByb3V0ZT0ge2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlZpZXcgcmVxdWVzdHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aCA9ezZ9PlxuICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30vPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFRQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQUtBO0FBRUE7QUFJQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFGQTtBQUFBOzs7O0FBTUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFNQTtBQU5BOzs7Ozs7Ozs7OztBQXZFQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSQTtBQUNBO0FBa0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=