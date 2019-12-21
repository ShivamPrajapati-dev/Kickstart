import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0xB468CF0F9eB63275a60535aBa10F2579abd21eE5');

export default instance;
