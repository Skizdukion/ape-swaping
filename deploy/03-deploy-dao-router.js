const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const factory = await ethers.getContract("DaoFactory");
    const wBnb = await ethers.getContract("WBNB");
    await deploy("DaoRouter", {
        contract: "ApeRouter",
        from: deployer,
        log: true,
        args: [factory.address, wBnb.address],
    })

    // const daoFactory = await ethers.getContractAt("DaoFactory")
};
module.exports.tags = ["all", "router"];