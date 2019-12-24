import React from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3'
import compiledCampaign from '../../ethereum/build/Campaign.json';
import Campaign from '../../ethereum/campaign';
import {Card, Grid} from 'semantic-ui-react';
import ContributeForm from '../../components/contributeForm';

class CampaignIndex extends React.Component {

  static async getInitialProps(props) {
    const address = props.query.address;
    const campaignInstance =Campaign(address);
    const summary = await campaignInstance.methods.getSummary().call();
    return {
      minimumContribution:summary[0],
      balance:summary[0],
      approversCount:summary[1],
      requestsCount:summary[2],
      manager:summary[4]
    };
  }

renderCard() {
  const {
    minimumContribution,
    balance,
    approversCount,
    requestsCount,
    manager

  }=this.props;

 const items = [
   {
     header:manager,
     meta:'address of manager',
     description:'This campaign is a test campaign',
     style:{ overflowWrap:'break-word'}
   },
   {
     header:minimumContribution,
     meta:'minimum contribution (wei)',
     description:'You must contribute atleast this much to become an approver'
   },
   {
     header:approversCount,
     meta:'Number of approvers',
     description:'Total number of people entered into campaign'
   },
   {
     header:requestsCount,
     meta:'Number of requests',
     description:'Total number of request to spend money'
   },
   {
     header:web3.utils.fromWei(balance,'ether'),
     meta:'Campaign balance(ether)',
     description:'Total balance of the campaign'
   }
 ];

return  <Card.Group items={items} />;

}


  render() {
    return (
      <Layout>
        <h3>Campaign</h3>
        <Grid>
          <Grid.Column width ={10}>
            {this.renderCard()}
          </Grid.Column>
          <Grid.Column width ={6}>
            <ContributeForm />
          </Grid.Column>
        </Grid>

      </Layout>
    );
  }
}

export default CampaignIndex;
