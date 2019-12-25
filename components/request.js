import React from 'react';
import {Table} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
class RequestRow extends React.Component {
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
    </Row>
    );
  }
}

export default RequestRow;
