import React from 'react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import {Button, Table} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends React.Component {

  static async getInitialProps(props){
    const {address}=props.query;
    const campaign = Campaign(address);
    const requestsCount = await campaign.methods.getRequestCount().call();
    const requests = await Promise.all(
      Array(requestsCount).fill().map((element, index)=>{
        return  campaign.methods.requests(index).call();
      })
    );
    console.log(requests);
    return {address, requests, requestsCount};
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
            <HeaderCell>Approvers</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Header>
        </Table>
      </Layout>
    );
  }

}

export default RequestIndex;
