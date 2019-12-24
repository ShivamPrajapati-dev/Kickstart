import React from 'react';
import {Form,Input,Button, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends React.Component {

  state = {
    value:''
  };


   onSubmit = async (event)=> {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    try {

      await campaign.methods.contribute().send({
        from:accounts[0],
        value:web3.utils.toWei(this.state.value,'ether')
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);

    } catch (err) {

    }

  }


render() {
  return (
    <Form onSubmit={this.onSubmit}>
      <Form.Field>
        <label>Ammount to contribute</label>
        <Input
          onChange={(event) => {
            this.setState({value:event.target.value});
          }}
          value={this.state.value}
          placeholder='Enter amount to enter in campaign'
          label='ether'
          labelPosition='right'/>
      </Form.Field>
        <Button primary>Submit</Button>
    </Form>
  );
}
}

export default ContributeForm;
