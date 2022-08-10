const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");


module.exports = async ({ getNamedAccounts, deployments }) => {
    // const { deploy, log } = deployments;
    // const { deployer } = await getNamedAccounts();

    // const token = await ethers.getContract("DaoToken")
    // const splitBar = await ethers.getContract("DaoSplit")
    // const wBnb = await ethers.getContract("WBNB")

    // await deploy("LPToken", {
    //     contract: "MockBEP20",
    //     from: deployer,
    //     log: true,
    //     args: ['LPToken', 'LP1', 1000000],
    // })

    // await deploy("BnbStaking", {
    //     contract: "BnbStaking",
    //     from: deployer,
    //     log: true,
    //     args: [wBnb.address, token.address, 1000, 10, 1010, deployer, wBnb.address],
    // })

    // const bnbStaking = await ethers.getContract("BnbStaking")

    // token.mintTo(bnbStaking.address, 10000)
};
module.exports.tags = ["all", "bnb-staking"];