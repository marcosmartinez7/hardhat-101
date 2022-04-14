const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoopToken", function () {
  it("Should get total supply correctly", async function () {
    const LoopToken = await ethers.getContractFactory("LoopToken");
    const loopTokenInstance = await LoopToken.deploy();
    await loopTokenInstance.deployed();

    expect(await loopTokenInstance.totalSupply()).to.equal(
      String(100 * 10 ** 18)
    );
  });

  it("Should transfer balance correctly", async function () {
    const deployerAddress = await (await ethers.getSigner()).getAddress();
    console.log("Deployer address: ", deployerAddress);

    const LoopToken = await ethers.getContractFactory("LoopToken");
    const loopTokenInstance = await LoopToken.deploy();
    await loopTokenInstance.deployed();

    let deployerBalance = await loopTokenInstance.balanceOf(deployerAddress);

    expect(deployerBalance).to.equal(String(100 * 10 ** 18));

    const receiver = ethers.Wallet.createRandom();

    const transferTokenTx = await loopTokenInstance.transfer(
      receiver.address,
      ethers.utils.parseUnits("1", "ether")
    );

    // wait until the transaction is mined
    await transferTokenTx.wait();
    deployerBalance = await loopTokenInstance.balanceOf(deployerAddress);
    receiverBalance = await loopTokenInstance.balanceOf(receiver.address);

    expect(deployerBalance).to.equal(String(99 * 10 ** 18));
    expect(receiverBalance).to.equal(String(1 * 10 ** 18));
  });
});
