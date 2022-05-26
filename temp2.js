let web3 = require('@solana/web3.js');
let splToken = require('@solana/spl-token');

// load up the first 32 bytes of the 64 byte array that was in our keyfile.json
// Only need the first 32 bytes so I use slice() just to make sure it's the correct length
let firstWinPrivKey = [RAW PK]
    .slice(0,32);
  // print the length of the array so we know it is correct
  // the fromSeed() method requires 32 bytes

 console.log(firstWinPrivKey.length);
  let firstWinWallet = web3.Keypair.fromSeed(Uint8Array.from(firstWinPrivKey));
  console.log(firstWinWallet.secretKey);
  console.log(firstWinWallet.publicKey.toString());