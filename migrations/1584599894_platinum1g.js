var MetexPlatinum1g = artifacts.require("./MetexPlatinum1g.sol");

module.exports = function(_deployer) {
  _deployer.deploy(
    MetexPlatinum1g,
    "Platinum1",
    "gram",
    "0x9b3a0c1AA312d08a66B323498F9a35F3658B16cC"
  );
  // Use deployer to state migration tasks.
};
