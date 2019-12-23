import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import campaign from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends React.Component {



static async getInitialProps() {
  const camp = await campaign.methods.getDeployedCampaign().call();
  return { camp };
}

renderCampaigns() {
  const items = this.props.camp.map((address) => {
    return {
      header:address,
      description:(
        <Link route={`/campaigns/${address}`}>
          <a>View campaign</a>
        </Link>
        ),
      fluid:true
    };
  });

  return <Card.Group items={items} />;
}


  render() {
    return (

     <Layout>

       <div>
         <h3>Open campaigns</h3>
         <Link route='/campaigns/new'>
           <a>
           <Button floated='right' animated='fade' primary>
             <Button.Content visible>Create Campaign</Button.Content>
             <Button.Content hidden>
               <Icon name='add circle' />
             </Button.Content>
           </Button>
         </a>
       </Link>
          {this.renderCampaigns()}
       </div>

     </Layout>


    );
  }

}

export default CampaignIndex;
