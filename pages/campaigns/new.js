import React from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';

class CampaignNew extends React.Component{

  state = {
    minimumContribution:'',
    errorMessage:'',
    loading:false
  };

  onSubmit = async (event)=>{
    event.preventDefault();
    this.setState({loading:true, errorMessage:''});
    try{
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution).send({
      from:accounts[0]
    });
  } catch(err) {
    this.setState({errorMessage:err.message});
  }
  this.setState({loading:false});
  }

  render() {
    return (
      <Layout>
        <h3>New Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label>Minimum contribution</label>
              <Input
                placeholder='Enter minimum amount to enter in campaign'
                label='wei'
                labelPosition='right'
                value = {this.state.minimumContribution}
                onChange = {(event) => {
                  this.setState({minimumContribution:event.target.value});
                }}
                 />
            </Form.Field>
            <Message error>
              <Message.Header>Oops!</Message.Header>
              <p>{this.state.errorMessage}</p>
            </Message>
            <Button loading={this.state.loading} type='submit' primary>Submit</Button>
          </Form>

      </Layout>
    );
  }
}

export default CampaignNew;