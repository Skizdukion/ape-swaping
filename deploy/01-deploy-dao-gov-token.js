const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    await deploy("DaoToken", {
        contract: "BananaToken",
        from: deployer,
        log: true,
    })

    const daoToken = await ethers.getContract("DaoToken")

    await deploy("DaoSplit", {
        contract: "BananaSplitBar",
        from: deployer,
        log: true,
        args: [daoToken.address],
    })
};
module.exports.tags = ["all", "mocks"];