import React from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Input} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';

class CampaignNew extends React.Component{

  state = {
    minimumContribution:''
  };

  onSubmit = async (event)=>{
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(this.state.minimumContribution).send({
      from:accounts[0]
    })
  }

  render() {
    return (
      <Layout>
        <h3>New Campaign</h3>
        <Form onSubmit={this.onSubmit}>
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
            <Button type='submit' primary>Submit</Button>
          </Form>

      </Layout>
    );
  }
}

export default CampaignNew;
