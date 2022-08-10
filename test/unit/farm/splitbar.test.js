// const { assert, expect } = require("chai");
// const { network, deployments, ethers } = require("hardhat");
// const { developmentChains } = require("../../../helper-hardhat-config");

// !developmentChains.includes(network.name)
//     ? describe.skip
//     : describe("Split Bar Unit Test", function () {
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
//             await daoSplit.mintTo(alice.address, 1000)
//             assert.equal((await daoSplit.balanceOf(alice.address)).toString(), '1000')
//         })

//         it('burn', async () => {
//             await daoSplit.mintTo(alice.address, 1000,);
//             await daoSplit.mintTo(bob.address, 1000,);
//             assert.equal((await daoSplit.totalSupply()).toString(), '2000');
//             await daoSplit.burn(alice.address, 200,);
//             assert.equal((await daoSplit.balanceOf(alice.address)).toString(), '800');
//             assert.equal((await daoSplit.totalSupply()).toString(), '1800');
//         });

//         it('safeCakeTransfer', async () => {
//             assert.equal(
//                 (await daoToken.balanceOf(daoSplit.address)).toString(),
//                 '0'
//             );
//             await daoToken.mintTo(daoSplit.address, 1000,);
//             await daoSplit.safeCakeTransfer(bob.address, 200,);
//             assert.equal((await daoToken.balanceOf(bob.address)).toString(), '200');
//             assert.equal(
//                 (await daoToken.balanceOf(daoSplit.address)).toString(),
//                 '800'
//             );
//             await daoSplit.safeCakeTransfer(bob.address, 2000,);
//             assert.equal((await daoToken.balanceOf(bob.address)).toString(), '1000');
//         });
//     });