import React from 'react';
import {Form,Input,Button, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends React.Component {

  state = {
    value:'',
    errorMessage:'',
    loading:false
  };


   onSubmit = async (event)=> {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    try {

      this.setState({loading:true,errorMessage:''});
      await campaign.methods.contribute().send({
        from:accounts[0],
        value:web3.utils.toWei(this.state.value,'ether')
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);

    } catch (err) {
      this.setState({errorMessage:err.message});
    }

    this.setState({loading:false,value:''});

  }


render() {
  return (
    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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
      <Message error header='Opps!' content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Submit</Button>
    </Form>
  );
}
}

export default ContributeForm;
