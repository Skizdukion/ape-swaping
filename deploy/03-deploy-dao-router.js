const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const factory = await ethers.getContract("DaoFactory");
    const wEth = await ethers.getContract("WETH");
    await deploy("DaoRouter", {
        contract: "AnotherDaoRouter",
        from: deployer,
        log: true,
        args: [factory.address, wEth.address],
    })

    // const daoFactory = await ethers.getContractAt("DaoFactory")
};
module.exports.tags = ["all", "router"];