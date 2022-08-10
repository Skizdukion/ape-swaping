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

        await deploy("MockBEP20V1", {
            contract: "MockBEP20",
            from: deployer,
            log: true,
            args: ['LPToken', 'LP1', 1000000000]
        })

        await deploy("MockBEP20V2", {
            contract: "MockBEP20",
            from: deployer,
            log: true,
            args: ['LPToken', 'LP2', 1000000000]
        })

        await deploy("MockBEP20V3", {
            contract: "MockBEP20",
            from: deployer,
            log: true,
            args: ['LPToken', 'LP3', 1000000000]
        })
        
        await deploy("MockBEP20V4", {
            contract: "MockBEP20",
            from: deployer,
            log: true,
            args: ['LPToken', 'LP4', 1000000000]
        })

        await deploy("MockBEP20V5", {
            contract: "MockBEP20",
            from: deployer,
            log: true,
            args: ['LPToken', 'LP5', 1000000000]
        })
    }
};
module.exports.tags = ["all", "mocks"];