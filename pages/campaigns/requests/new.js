import React from 'react';
import Layout from '../../../components/Layout';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import {Link,Router} from '../../../routes';
import web3 from '../../../ethereum/web3'
import Campaign from '../../../ethereum/campaign';

class NewRequest extends React.Component{

  state={
    description:'',
    recipient:'',
    amount:'',
    errorMessage:'',
    loading:false,
    success:''
  };

  static async getInitialProps(props){

    const {address} = props.query;

    return {address};

  }

  onSubmit = async (event) => {
    event.preventDefault();
    const {description,amount,recipient} = this.state;
    const campaign = Campaign(this.props.address);
    this.setState({loading:true,errorMessage:'',success:''});
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description,web3.utils.toWei(amount,'ether'), recipient).send({
        from:accounts[0]
      });
      this.setState({success:'Request created successfully'});
    } catch (e) {
      this.setState({errorMessage:e.message});
    }
    this.setState({loading:false});

  }

  render(){
    return (
    <Layout>
      <Link route={`/campaigns/${this.props.address}/requests`}>
        <a>
          back
        </a>
      </Link>
      <h3>Create a request</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.success}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={this.state.description}
            onChange={(event)=>{
              this.setState({description:event.target.value});
            }}/>
        </Form.Field>
        <Form.Field>
          <label>Amount</label>
          <Input
            value={this.state.amount}
            onChange={(event)=>{
              this.setState({amount:event.target.value});
            }}/>
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={this.state.recipient}
            onChange={(event)=>{
              this.setState({recipient:event.target.value});
            }}/>
        </Form.Field>
        <Message error header="Oops" content = {this.state.errorMessage} />
        <Message success header="Great" content = {this.state.success} />

        <Button loading={this.state.loading} primary>Create</Button>
      </Form>
    </Layout>

    );
  }
}

export default NewRequest;
