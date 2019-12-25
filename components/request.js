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
    const {description,recipient,value,approvalsCount,approvals, complete}=this.props.request;
    return (
    <Row disabled={complete}>
      <Cell>{this.props.id+1}</Cell>
      <Cell>{description}</Cell>
      <Cell>{web3.utils.fromWei(value,'ether')}</Cell>
      <Cell>{recipient}</Cell>
      <Cell>{approvalsCount}/{this.props.approversCount}</Cell>
      <Cell>{complete?null:(
        <Button color='green' basic onClick={this.onApprove}>Approve</Button>
      )}</Cell>
    <Cell>{complete? null :(
        <Button color='teal' basic onClick={this.onFinalize}>Finalize</Button>
      )}</Cell>
    </Row>
    );
  }
}

export default RequestRow;
