import CfdHelper from './cfdjsHelper';
import CfddlcHelper from './cfddlcjsHelper';

CfdHelper.initialized(() => {
  CfddlcHelper.initialized(async () => {
    const { CreateAddress, CreateKeyPair } = CfdHelper.getCfdjs();
    const cfddlcjs = CfddlcHelper.getCfddlcjs();

    const keyPair = await CreateKeyPair({
      wif: false,
    });

    console.log('Generated oracle keypair', keyPair);

    const rValue = await cfddlcjs.GetSchnorrPublicNonce({
      kValue: keyPair.privkey,
    });

    console.log('Schnoor Public Nonce', rValue);

    console.log('Fully initialized');
  });
});
