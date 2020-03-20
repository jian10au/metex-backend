const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          "final shed clean basket enjoy town property warm help term differ unable",
          //url to ethereum node
          "https://kovan.infura.io/v3/d191a176eddb4ca39d4626e08e371615"
        );
      },
      gas: 5000000,
      gasPrice: 2500000000,
      network_id: 42
    }
  }
};
