var MetexPalladium1g = artifacts.require("./MetexPalladium1g.sol");

module.exports = function(_deployer) {
  _deployer.deploy(
    MetexPalladium1g,
    "Palladium1",
    "gram",
    "0x9b3a0c1AA312d08a66B323498F9a35F3658B16cC"
  );
  // Use deployer to state migration tasks.
};
