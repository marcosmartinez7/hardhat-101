const { expect } = require("chai");
const { ethers } = require("hardhat");

let loopTokenInstance;
let deployerAddress;
describe("LoopToken", async function () {
  this.beforeEach(async function () {
    const LoopToken = await ethers.getContractFactory("LoopToken");
    loopTokenInstance = await LoopToken.deploy();
    deployerAddress = await (await ethers.getSigner()).getAddress();
    console.log("Deployer address: ", deployerAddress);
  });

  it("Should return the owner balance correctly", async function () {
    expect(await loopTokenInstance.balances(deployerAddress)).to.equal(
      String(100 * 10 ** 18)
    );
  });
});
