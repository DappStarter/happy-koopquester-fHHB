require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stove response saddle athlete install clog tackle sleep'; 
let testAccounts = [
"0x38de618eecf17c93af94cdee4479c12f938f2e728bc6d6220e60073118fe196d",
"0x9794bb6e9934bbaa4c65c8e62b3906a8068e27f4de0fe6a631bc835c8442c4e0",
"0x887b56679948a65fb3de05e93a64ddee2cfc0ea8f32e1a4d7460d392fdefd0af",
"0x8ed255e6262175e139e302876cc900ad642c944cf433b5c8cab0eb41a591e4b1",
"0x0be4dc489466ed75609abedef2ba666042afb8943762b65e254b2595ab182e6f",
"0x3ede1fdaf060f3a62ad5b825e9c8c5755f52546fd0361d19b3f8b5b873ed4913",
"0x7fc337adfe94cc73a4042908c1626fbb38dd84056ce8f7c432486ef136cdbb98",
"0x8984aadaf7c5cb3421cdd5d4f2c36ecd85c11c449a427c6674d3d08ea9e9df3f",
"0x172e81b5ad8986f9e186608211d2bae435d478b91fc4ef2c6f6591e671a56dd2",
"0x62d82f0fb76bf92c8d367c326fcc501bd393f16285163f158dfdfb56fd99a560"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


