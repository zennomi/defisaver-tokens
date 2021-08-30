const {utils: {bytesToString}} = require('../umd');
const fs = require('fs').promises;

const Web3 = require('web3');

const web3 = new Web3(process.env.RPC);

const ilkContractAbi = [{"inputs":[{"internalType":"address","name":"vat_","type":"address"},{"internalType":"address","name":"dog_","type":"address"},{"internalType":"address","name":"cat_","type":"address"},{"internalType":"address","name":"spot_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"AddIlk","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"usr","type":"address"}],"name":"Deny","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"what","type":"bytes32"},{"indexed":false,"internalType":"address","name":"data","type":"address"}],"name":"File","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"what","type":"bytes32"},{"indexed":false,"internalType":"address","name":"data","type":"address"}],"name":"File","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"what","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"}],"name":"File","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"what","type":"bytes32"},{"indexed":false,"internalType":"string","name":"data","type":"string"}],"name":"File","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"NameError","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"usr","type":"address"}],"name":"Rely","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"RemoveIlk","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"SymbolError","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"UpdateIlk","type":"event"},{"inputs":[{"internalType":"address","name":"adapter","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cat","outputs":[{"internalType":"contract CatLike","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"class","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"dec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"deny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dog","outputs":[{"internalType":"contract DogLike","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"string","name":"data","type":"string"}],"name":"file","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"file","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"file","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"gem","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pos","type":"uint256"}],"name":"get","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"ilkData","outputs":[{"internalType":"uint96","name":"pos","type":"uint96"},{"internalType":"address","name":"join","type":"address"},{"internalType":"address","name":"gem","type":"address"},{"internalType":"uint8","name":"dec","type":"uint8"},{"internalType":"uint96","name":"class","type":"uint96"},{"internalType":"address","name":"pip","type":"address"},{"internalType":"address","name":"xlip","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"info","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"dec","type":"uint256"},{"internalType":"address","name":"gem","type":"address"},{"internalType":"address","name":"pip","type":"address"},{"internalType":"address","name":"join","type":"address"},{"internalType":"address","name":"xlip","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"join","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"list","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"list","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"pip","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"pos","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_ilk","type":"bytes32"},{"internalType":"address","name":"_join","type":"address"},{"internalType":"address","name":"_gem","type":"address"},{"internalType":"uint256","name":"_dec","type":"uint256"},{"internalType":"uint256","name":"_class","type":"uint256"},{"internalType":"address","name":"_pip","type":"address"},{"internalType":"address","name":"_xlip","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"put","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"rely","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"removeAuth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"spot","outputs":[{"internalType":"contract SpotLike","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vat","outputs":[{"internalType":"contract VatLike","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"xlip","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const ilkContractAddress = '0x5a464C28D19848f44199D003BeF5ecc87d090F87';

const ilkContract = new web3.eth.Contract(ilkContractAbi, ilkContractAddress);

(async () => {
  const ilks = await ilkContract.methods.list().call();
  const info = await Promise.all(ilks.map(ilk => (ilkContract.methods.info(ilk).call())));
  const ilkInfo = info
    .map((info, i) => ({...info, ilkBytes: ilks[i]}))
    .filter(ilk => ilk.symbol.substr(0,3) !== 'RWA')
    .filter(ilk => bytesToString(ilk.ilkBytes).replace(/-.*/, '') !== 'PSM')
    .map(ilk => {
      return {
        asset: bytesToString(ilk.ilkBytes).replace(/-.*/, '').replace(/^KNC$/, 'KNCL'),
        ilkLabel: bytesToString(ilk.ilkBytes),
        ilkBytes: ilk.ilkBytes,
        join: ilk.join,
        clip: ilk.xlip,
        pip: ilk.pip,
        isLP: ilk.symbol === 'UNI-V2',
      }
    })

  let fileData = '/** AUTOMATICALLY GENERATED FILE **/\n\n';
  fileData += 'import { IlkData } from \'./types\';\n\nexport const ilks:IlkData[] = ';
  fileData += JSON.stringify(ilkInfo, null, 2) + ';\n';

  const f = await fs.open(__dirname + '/../src/ilks.ts', 'w');
  await f.write(fileData);
  await f.close();
})()
