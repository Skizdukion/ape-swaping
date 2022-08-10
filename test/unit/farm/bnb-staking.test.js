// const { assert, expect } = require("chai");
// const { network, deployments, ethers } = require("hardhat");
// const { developmentChains } = require("../../../helper-hardhat-config");

// !developmentChains.includes(network.name)
//     ? describe.skip
//     : describe("BNB staking Unit Test", function () {
//         let daoToken, daoSplit, accounts, deployer, alice, bob, wBnb, bnbStaking


//         beforeEach(async () => {
//             await deployments.fixture(["all"]);
//             daoToken = await ethers.getContract("DaoToken")
//             daoSplit = await ethers.getContract("DaoSplit")
//             accounts = await ethers.getSigners();
//             deployer = accounts[0];
//             alice = accounts[1]
//             bob = accounts[2]
//             wBnb = await ethers.getContract("WBNB")
//             bnbStaking = await ethers.getContract("BnbStaking")
//         })

//         it('deposit/withdraw', async () => {
//             const bnbChefWithAlice = await bnbStaking.connect(alice);
//             const bnbChefWithBob = await bnbStaking.connect(bob);

//             await bnbChefWithAlice.deposit({ value: 100 })

//             // console.log('Alice user info: ' + await bnbChefWithAlice.userInfo(alice.address));
//             // console.log('Pool AccCakePerShare: ' + (await bnbChefWithAlice.poolInfo(0)).accCakePerShare.toString());

//             await bnbChefWithBob.deposit({ value: 200 })

//             // console.log('Alice user info: ' + await bnbChefWithAlice.userInfo(alice.address));
//             // console.log('Bob user info: ' + await bnbChefWithAlice.userInfo(bob.address));
//             // console.log('Pool AccCakePerShare: ' + (await bnbChefWithAlice.poolInfo(0)).accCakePerShare);
//             // await bnbStaking.deposit({ value: '300' })
//             // assert.equal(
//             //     (await wBnb.balanceOf(bnbStaking.address)).toString(),
//             //     '300'
//             // );
//             assert.equal((await bnbChefWithAlice.pendingReward(alice.address)).toString(), '1000');
//             await bnbChefWithAlice.deposit({ value: 300 });
//             // console.log('Alice user info: ' + await bnbChefWithAlice.userInfo(alice.address));
//             // console.log('Bob user info: ' + await bnbChefWithAlice.userInfo(bob.address));
//             // console.log('Pool AccCakePerShare: ' + (await bnbChefWithAlice.poolInfo(0)).accCakePerShare.toString());

//             // assert.equal((await bnbChefWithAlice.pendingReward(alice.address)).toString(), '0');
//             // assert.equal((await daoToken.balanceOf(alice.address)).toString(), '1333');
//             // await bnbChefWithAlice.withdraw('100',);
//             // assert.equal(
//             //     (await wBnb.balanceOf(bnbStaking.address)).toString(),
//             //     '500'
//             // );
//             // assert.equal((await bnbStaking.pendingReward(bob.address)).toString(), '999');
//             // await bnbStaking.emergencyRewardWithdraw(1000);
//             // assert.equal((await bnbStaking.pendingReward(bob.address)).toString(), '1399');
//         });
//     });