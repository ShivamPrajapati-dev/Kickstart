webpackHotUpdate(5,{

/***/ 788:
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

var _semanticUiReact = __webpack_require__(789);

var _factory = __webpack_require__(1087);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shivam/Kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shivam/Kickstart/pages/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45ZGI4ODFhMjg1NmVlMGExY2NjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjZkOGI0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgY2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cblxuc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgY29uc3QgY2FtcCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbigpLmNhbGwoKTtcbiAgcmV0dXJuIHsgY2FtcCB9O1xufVxuXG5yZW5kZXJDYW1wYWlnbnMoKSB7XG4gIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wLm1hcCgoYWRkcmVzcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXI6YWRkcmVzcyxcbiAgICAgIGRlc2NyaXB0aW9uOjxhPlZpZXcgY2FtcGFpZ248L2E+LFxuICAgICAgZmx1aWQ6dHJ1ZVxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xufVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cbiAgICAgICAgPGRpdj57dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX08L2Rpdj5cbiAgICAgICA8QnV0dG9uIGFuaW1hdGVkPSdmYWRlJyBwcmltYXJ5PlxuICAgICAgICAgPEJ1dHRvbi5Db250ZW50IHZpc2libGU+Q3JlYXRlIENhbXBhaWduPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgaGlkZGVuPlxuICAgICAgICAgICAgPEljb24gbmFtZT0nYWRkIGNpcmNsZScgLz5cbiAgICAgICAgICA8L0J1dHRvbi5Db250ZW50PlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFBQTs7QUFHQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBS0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFNQTtBQU5BOzs7Ozs7Ozs7Ozs7O0FBekJBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQQTtBQUNBO0FBdUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=