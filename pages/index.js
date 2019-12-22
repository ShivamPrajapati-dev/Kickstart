import React from 'react';
import campaign from '../ethereum/factory';

class CampaignIndex extends React.Component {


  async componentDidMount() {
    const campaings = await campaign.methods.getDeployedCampaign().call();
    console.log(campaings);
  }

  render() {
    return (
      <h1>Hi there !</h1>
    );
  }

}

export default CampaignIndex;
