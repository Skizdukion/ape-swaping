
const { ethers, getNamedAccounts } = require("hardhat");

async function staking() {
    const accounts = await ethers.getSigners();
    const deployer = accounts[0];
    const alice = accounts[1];
    const bob = accounts[2];
    const bnbStaking = await ethers.getContract("BnbStaking")
    const bnbChefWithAlice = await bnbStaking.connect(alice);
    const bnbChefWithBob = await bnbStaking.connect(bob);
    await bnbChefWithAlice.deposit({ value: 100 })
    await bnbChefWithBob.deposit({ value: 200 })
}

staking()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });