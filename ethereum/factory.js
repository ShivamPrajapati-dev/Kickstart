import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x7fa3715EC7d8FCc2B1C0B76EB5f95C3F29a1E3D2');

export default instance;
