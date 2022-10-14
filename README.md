# star_atlas_bot
bot for resupply all ships

run:
0. create key.txt file with private key near project dir
1. npm install
2. node main.js

# Updates

14.10.2022
Changed Solana RPC to https://solana-api.projectserum.com/ in /node_modules/@solana/web3.js/lib/index.cjs.js

Line 8523
const endpoint = {
  http: {
    devnet: 'http://api.devnet.solana.com',
    testnet: 'http://api.testnet.solana.com',
    /**'mainnet-beta': 'http://api.mainnet-beta.solana.com' */
    'mainnet-beta': 'http://solana-api.projectserum.com'
  },
  https: {
    devnet: 'https://api.devnet.solana.com',
    testnet: 'https://api.testnet.solana.com',
    /**'mainnet-beta': 'https://api.mainnet-beta.solana.com'*/
    'mainnet-beta': 'https://solana-api.projectserum.com'
  }