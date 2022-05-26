import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import * as bs58 from "bs58";

(async () => {
  // 1.
  //   const mnemonic = bip39.generateMnemonic();
  //   console.log(mnemonic);
  // 2.
  const mnemonic = "SEED PHRASE";

  const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
  const keypair = Keypair.fromSeed(seed.slice(0, 32));
  console.log(`private key(raw): ${keypair.secretKey}`);
  //console.log(`private key(bs58): ${bs58.encode(keypair.secretKey)}`);
  console.log(`${keypair.publicKey.toBase58()}`); // 5ZWj7a1f8tWkjBESHKgrLmXshuXxqeY9SYcfbshpAqPG
})();