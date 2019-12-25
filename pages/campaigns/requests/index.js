import React from 'react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import {Button, Table} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/request';

class RequestIndex extends React.Component {

  static async getInitialProps(props){
    const {address}=props.query;
    const campaign = Campaign(address);
    const requestsCount = await campaign.methods.getRequestCount().call();
    const summary = await campaign.methods.getSummary().call();
    const approversCount = summary[2];
    console.log(approversCount);
    const requests = await Promise.all(
      Array(parseInt(requestsCount)).fill().map((element, index)=>{
        return  campaign.methods.requests(index).call();
      })
    );
    console.log(requests);
    return {address, requests, requestsCount, approversCount};
  }

  renderRows() {
    return this.props.requests.map((request,index)=>{
      return <RequestRow
        key={index}
        id={index}
        request={request}
        approversCount={this.props.approversCount}
        address={this.props.address}
         />;
    });
  }


  render(){
    const {Header, HeaderCell, Row, Body}=Table;
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Header>
          <Body>
           {this.renderRows()}
          </Body>
        </Table>
        Found {this.props.requestsCount} requests
      </Layout>
    );
  }

}

export default RequestIndex;
