import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Mymoneydapp } from '../target/types/mymoneydapp';

describe('mymoneydapp', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Mymoneydapp as Program<Mymoneydapp>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
