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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('../../ethereum/build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _contributeForm = require('../../components/contributeForm');

var _contributeForm2 = _interopRequireDefault(_contributeForm);

var _routes = require('../../routes');

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