import React from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3'
import compiledCampaign from '../../ethereum/build/Campaign.json';
import Campaign from '../../ethereum/campaign';
class CampaignIndex extends React.Component {

  static async getInitialProps(props) {
    const address = props.query.address;
    const campaignInstance =Campaign(address);
    const summary = await campaignInstance.methods.getSummary().call();
    return {
      minimumContribution:summary[0],
      balance:summary[0],
      approversCount:summary[1],
      requestsLength:summary[2],
      manager:summary[4]
    };
  }
  render() {
    return (
      <Layout>
        <h3>Campaign</h3>
      </Layout>
    );
  }
}

export default CampaignIndex;
