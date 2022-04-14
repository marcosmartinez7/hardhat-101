require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("solidity-coverage");
require("@nomiclabs/hardhat-web3");

// Custom task with web3

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `${process.env.ALCHEMY_RINKEBY_URL}`,
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
    },
    hardhat: {
      // forking: {
      //   url: " https://eth-ropsten.alchemyapi.io/v2/L4s_3c9CRpPqUuuz00dmmDeZpqY1vCa1",
      //  blockNumber: 12191610,
      // },
      //mining: {
      //  auto: false,
      //  interval: 5000,
      // },
    },
  },
};
