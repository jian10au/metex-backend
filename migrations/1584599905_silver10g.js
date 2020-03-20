var MetexSilver10g = artifacts.require("./MetexSilver10g.sol");

module.exports = function(_deployer) {
  _deployer.deploy(
    MetexSilver10g,
    "Silver10",
    "gram",
    "0x9b3a0c1AA312d08a66B323498F9a35F3658B16cC"
  );
  // Use deployer to state migration tasks.
};
