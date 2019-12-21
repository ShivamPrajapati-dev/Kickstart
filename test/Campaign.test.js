const ganache = require('ganache-cli');
const Web3 = require('web3');
const assert = require('assert');
const web3 = new Web3(ganache.provider());
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;


beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data:compiledFactory.bytecode}).send({from:accounts[0],gas:'1000000'});

  await factory.methods.createCampaign('100').send({
    from:accounts[0],
    gas:'1000000'
  });

  [campaignAddress] = await factory.methods.getDeployedCampaign().call();
  campaign = await new web3.eth.Contract(
             JSON.parse(compiledCampaign.interface),
             campaignAddress
           );


});


describe('campaings', () => {

  it('deployed factory and campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

it('manager', async() => {
  const manager = await campaign.methods.manager().call();
  assert(manager == accounts[0]);
});

it('is contributed', async() => {

  await campaign.methods.contribute().send({
    from:accounts[1],
    value:'200'
  });

  const isContributed = await campaign.methods.approvers(accounts[1]).call();

  assert(isContributed);
});

it('minimum contribution', async() => {

  try {
    await campaign.methods.contribute().send({
      from:accounts[1],
      value:'10'
    });
    assert(false);

  } catch (e) {
    assert(e);
  }
});

it('creates a request', async() => {
  await campaign.methods.createRequest('description','100',accounts[1]).send({
    from:accounts[0],
    gas:'1000000'
  });

 const requests = await campaign.methods.requests(0).call();

  assert('description' == requests.description);
});

it('complete test', async() => {
  await campaign.methods.contribute().send({
    from:accounts[0],
    value:web3.utils.toWei('10','ether')
  });

  await campaign.methods.createRequest('A',await web3.utils.toWei('5','ether'),accounts[1]).send({
    from:accounts[0],
    gas:'1000000'
  });

  await campaign.methods.approveRequest(0).send({
    from:accounts[0],
    gas:'1000000'
  });

  await campaign.methods.finilizeRequest(0).send({
    from:accounts[0],
    gas:'1000000'
  });

  let balance = await web3.eth.getBalance(accounts[1]);
  balance = web3.utils.fromWei(balance, 'ether');
  balance = parseFloat(balance);
  assert(balance > 104);
});


});
