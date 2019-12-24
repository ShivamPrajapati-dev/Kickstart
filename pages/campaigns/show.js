import React from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3'
import compiledCampaign from '../../ethereum/build/Campaign.json';
import Campaign from '../../ethereum/campaign';
import {Card, Grid, Button} from 'semantic-ui-react';
import ContributeForm from '../../components/contributeForm';
import {Link} from '../../routes';

class CampaignIndex extends React.Component {

  static async getInitialProps(props) {
    const address = props.query.address;
    const campaignInstance =Campaign(address);
    const summary = await campaignInstance.methods.getSummary().call();
    return {
      address:address,
      minimumContribution:summary[0],
      balance:summary[1],
      approversCount:summary[2],
      requestsCount:summary[3],
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
          <Grid.Row>
          <Grid.Column width ={10}>
            {this.renderCard()}
          </Grid.Column>
          <Grid.Column width ={6}>
            <ContributeForm address={this.props.address}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link route= {`/campaigns/${this.props.address}/requests`}>
              <a>
              <Button primary>View requests</Button>
              </a>
          </Link>
          </Grid.Column>
        </Grid.Row>
        </Grid>

      </Layout>
    );
  }
}

export default CampaignIndex;
