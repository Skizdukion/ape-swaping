// const { assert, expect } = require("chai");
// const { network, deployments, ethers } = require("hardhat");
// const { developmentChains } = require("../../../helper-hardhat-config");

// !developmentChains.includes(network.name)
//     ? describe.skip
//     : describe("Token Unit Test", function () {
//         let daoToken, daoSplit, accounts, deployer, alice, bob
//         beforeEach(async () => {
//             await deployments.fixture(["all"]);
//             daoToken = await ethers.getContract("DaoToken")
//             daoSplit = await ethers.getContract("DaoSplit")
//             accounts = await ethers.getSigners();
//             deployer = accounts[0];
//             alice = accounts[1]
//             bob = accounts[2]
//         })

//         it("mint to", async function () {
//             await daoToken.mintTo(alice.address, 1000)
//             assert.equal((await daoToken.balanceOf(alice.address)).toString(), '1000')
//         })

//     });