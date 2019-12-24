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
        meta: 'contract balance',
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
      }, 'Campaign'), this.renderCard(), _react2.default.createElement(_contributeForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0Iiwid2ViMyIsImNvbXBpbGVkQ2FtcGFpZ24iLCJDYW1wYWlnbiIsIkNhcmQiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduSW5kZXgiLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwiYXBwcm92ZXJzQ291bnQiLCJyZXF1ZXN0c0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkIiwiYWRkcmVzcyIsInF1ZXJ5IiwiY2FtcGFpZ25JbnN0YW5jZSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFROztBQUNSLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBOzs7Ozs7Ozs7OztpQ0FlTzttQkFRVCxLQVJTLEFBUUo7VUFSSSxBQUVULDZCQUZTLEFBRVQ7VUFGUyxBQUdULGlCQUhTLEFBR1Q7VUFIUyxBQUlULHdCQUpTLEFBSVQ7VUFKUyxBQUtULHVCQUxTLEFBS1Q7VUFMUyxBQU1ULGlCQU5TLEFBTVQsQUFJSDs7VUFBTTtnQkFDSixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBSEYsQUFHYyxBQUNaO2VBQU0sRUFBRSxjQUxFLEFBQ1osQUFJUSxBQUFlO0FBSnZCLEFBQ0UsT0FGVTtnQkFPWixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBVlUsQUFPWixBQUdjO0FBSGQsQUFDRTtnQkFJRixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBZlUsQUFZWixBQUdjO0FBSGQsQUFDRTtnQkFJRixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBcEJVLEFBaUJaLEFBR2M7QUFIZCxBQUNFO2dCQUtPLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTJCLEFBQ2xDO2NBRkYsQUFFTyxBQUNMO3FCQXpCSixBQUFjLEFBc0JaLEFBR2MsQUFJakI7QUFQRyxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUixBQUFRLEFBRVA7QUFGTztPQUFBOzs7OzZCQUtHLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Msa0JBRkgsQUFFRyxBQUFLLEFBQ04sOEJBQUEsQUFBQzs7b0JBQUQ7c0JBSkosQUFDRSxBQUdFLEFBR0w7QUFISztBQUFBOzs7OzsyRyxBQTlEdUI7Ozs7O21CQUNyQjtBLDBCQUFVLE1BQUEsQUFBTSxNQUFNLEFBQ3RCLEE7QSxtQ0FBa0Isd0IsQUFBQSxBQUFTOzt1QkFDWCxpQkFBQSxBQUFpQixRQUFqQixBQUF5QixhQUF6QixBLEFBQXNDOzttQkFBdEQ7QTs7dUNBRWdCLFFBRGYsQUFDZSxBQUFRLEFBQzVCOzJCQUFRLFFBRkgsQUFFRyxBQUFRLEFBQ2hCO2tDQUFlLFFBSFYsQUFHVSxBQUFRLEFBQ3ZCO2lDQUFjLFFBSlQsQUFJUyxBQUFRLEFBQ3RCOzJCQUFRLFFBTEgsQUFLRyxBQUFRLEE7QUFMWCxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUHNCLGdCQUFNLEEsQUFzRWxDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hpdmFtL0tpY2tzdGFydCJ9