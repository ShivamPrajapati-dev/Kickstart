const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts','campaign.sol');
const source = fs.readFileSync(campaignPath,'utf-8');
const output = solc.compile(source,1).contracts;
console.log(solc.compile(source,1));
fs.ensureDirSync(buildPath);
for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(__dirname,'build',contract.replace(':','')+'.json'),
    output[contract]
  );
}
