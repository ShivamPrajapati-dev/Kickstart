import React from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
class RequestRow extends React.Component {

  onApprove= async ()=>{
    const accounts = await web3.eth.getAccounts();
    const campaign=Campaign(this.props.address);
    await campaign.methods.approveRequest(this.props.id).send({
      from:accounts[0]
    })
  }

  onFinalize= async ()=>{
    const accounts = await web3.eth.getAccounts();
    const campaign=Campaign(this.props.address);
    await campaign.methods.finilizeRequest(this.props.id).send({
      from:accounts[0]
    })
  }

  render() {
    const {Row, Cell} =Table;
    const {description,recipient,value,approvalsCount,approvals}=this.props.request;
    return (
    <Row>
      <Cell>{this.props.id+1}</Cell>
      <Cell>{description}</Cell>
      <Cell>{web3.utils.fromWei(value,'ether')}</Cell>
      <Cell>{recipient}</Cell>
      <Cell>{approvalsCount}/{this.props.approversCount}</Cell>
      <Cell><Button color='green' basic onClick={this.onApprove}>Approve</Button></Cell>
      <Cell><Button color='teal' basic onClick={this.onFinalize}>Finalize</Button></Cell>
    </Row>
    );
  }
}

export default RequestRow;
