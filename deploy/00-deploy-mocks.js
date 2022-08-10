const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    if (developmentChains.includes(network.name)) {

        await deploy("WBNB", {
            contract: "WBNB",
            from: deployer,
            log: true,
        })

    }
};
module.exports.tags = ["all", "mocks"];