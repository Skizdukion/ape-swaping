const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();


    // await deploy("DaoToken", {
    //     contract: "AnotherDaoToken",
    //     from: deployer,
    //     log: true,
    // })

    const token = await ethers.getContract("DaoToken")
    const splitBar = await ethers.getContract("DaoSplit")

    // await deploy("DaoSplitBar", {
    //     contract: "AnotherDaoSplitBar",
    //     from: deployer,
    //     log: true,
    //     args: [cake.address],
    // })

    // const syrup = await ethers.getContract("DaoSplitBar")

    // // AnotherDaoToken _banana,
    // //     AnotherDaoSplitBar _bananaSplit,
    // //         address _devaddr,
    // //             uint256 _bananaPerBlock,
    // //                 uint256 _startBlock,
    // //                     uint256 _multiplier

    await deploy("Master", {
        contract: "MasterApe",
        from: deployer,
        log: true,
        args: [token.address, splitBar.address, deployer, 15, 0, 10],
    })

    // // const daoFactory = await ethers.getContractAt("DaoFactory")
};
module.exports.tags = ["all", "masterchef"];