pragma solidity ^0.4.17;

contract CompaignFactory{

    address[] private deployedCampaign;

    function CompaignFactory(uint minimum) public {
        address campaignAddress = new Campaign(minimum,msg.sender);
        deployedCampaign.push(campaignAddress);
    }

    function getDeployedCampaign() public view returns(address[]) {
        return deployedCampaign;
    }
}


contract Campaign {

    struct Request {
       string description;
       uint value;
       address recipient;
       bool complete;
       uint approvalsCount;
       mapping(address=>bool) approvals;
   }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    uint private approversCount;
    mapping(address=>bool) public approvers;


     modifier restricted() {
        require(msg.sender == manager);
        _;
    }


    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalsCount:0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {

        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);

        requests[index].approvals[msg.sender] = true;
        requests[index].approvalsCount++;

    }

    function finilizeRequest(uint index) public restricted {
        require(!requests[index].complete);
        require(requests[index].approvalsCount>(approversCount/2));
        requests[index].complete = true;
        requests[index].recipient.transfer(requests[index].value);
    }


}
