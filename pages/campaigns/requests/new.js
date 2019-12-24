import React from 'react';
import Layout from '../../../components/Layout';
import {Form, Button, Input} from 'semantic-ui-react';
import {Link,Router} from '../../../routes';
import web3 from '../../../ethereum/web3'

class NewRequest extends React.Component{

  state={
    description:'',
    recipient:'',
    amount:''
  };

  static async getInitialProps(props){

    const {address} = props.query;

    return {address};

  }

  render(){
    return (
    <Layout>
      <h3>Create a request</h3>
      <Form>
        <Form.Field>
          <label>Description</label>
          <Input
            value={this.state.description}
            onChange={(event)=>{
              this.setState({description:this.state.description});
            }}/>
        </Form.Field>
        <Form.Field>
          <label>Amount</label>
          <Input
            value={this.state.amount}
            onChange={(event)=>{
              this.setState({description:this.state.amount});
            }}/>
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={this.state.recipient}
            onChange={(event)=>{
              this.setState({description:this.state.amount});
            }}/>
        </Form.Field>
        <Button primary>Create</Button>
      </Form>
    </Layout>

    );
  }
}

export default NewRequest;
