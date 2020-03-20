var MetexGold1g = artifacts.require("./MetexGold1g.sol");

module.exports = function(_deployer) {
  _deployer.deploy(
    MetexGold1g,
    "Gold 1",
    "gram",
    "0x9b3a0c1AA312d08a66B323498F9a35F3658B16cC"
  );
  // Use deployer to state migration tasks.
};
