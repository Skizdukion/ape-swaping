const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy("DaoFactory", {
        contract: "AnotherDaoFactory",
        from: deployer,
        log: true,
        args: [deployer],
    })

    // const daoFactory = await ethers.getContractAt("DaoFactory")

};
module.exports.tags = ["all", "factory"];