require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember pupil hope kitten surge sweet'; 
let testAccounts = [
"0xc4e20fdefbdb1e5f19d1e998971cfec41ed85b24ac47df2cf4576fe069779dba",
"0xc1c09ed743aaaf3ec8ef0ecd54eb4b1a850816f21d406167ed17400c7e2f36c1",
"0x23b3d3167413f127ecd68e3cfb87a75c72378edb29308042a15767e4752cdd6f",
"0x55312e2635b4b77cd431a1c9680972ac218817561a5d2dcc57660d80e37157c2",
"0x0e8371135b539210dff58e256cb7c9d1f69ed569a8833cca668e79cf394b425a",
"0x9f51138b2590d7d2ec8b6b066b21fcbea631732c2f565c7e9d0548ed092dc136",
"0x65bc281cee5d32671f136cce5f298dfcbfd0e2a401c2a18759910fee8e5b83b6",
"0xf6fb6c217ab59035344ca3286b0866d628473653c55bb56097c5dc70ef2a79c2",
"0x79e13fc76ac77a178a2b67fbf65ec3193cee99dad3ce1cf4528805ca9935e660",
"0x9ca4729ff87843efdd5bd059ec92f9b0ce4bdda5a1f1eef91c1174e32aa112da"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

