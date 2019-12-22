import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import campaign from '../ethereum/factory';

class CampaignIndex extends React.Component {



static async getInitialProps() {
  const camp = await campaign.methods.getDeployedCampaign().call();
  return { camp };
}

renderCampaigns() {
  const items = this.props.camp.map((address) => {
    return {
      header:address,
      description:<a>View campaign</a>,
      fluid:true
    };
  });

  return <Card.Group items={items} />;
}


  render() {
    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <div>{this.renderCampaigns()}</div>
       <Button animated='fade' primary>
         <Button.Content visible>Create Campaign</Button.Content>
          <Button.Content hidden>
            <Icon name='add circle' />
          </Button.Content>
        </Button>
      </div>

    );
  }

}

export default CampaignIndex;
