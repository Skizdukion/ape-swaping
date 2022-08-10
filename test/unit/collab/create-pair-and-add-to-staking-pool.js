const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../../helper-hardhat-config");
const overrides = {
    gasLimit: 9999999
}
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Collab Unit Test", function () {
        let daoToken, daoSplit, accounts, deployer, alice, bob, wBnb, factory, router, master, lp1, lp2, lp3, lp4, lp5
        let pool1Liquidity, pool2Liquidity, pool3Liquidity, pool4Liquidity, pool1Address, pool2Address, pool3Address, pool4Address

        beforeEach(async () => {
            await deployments.fixture(["all"]);
            daoToken = await ethers.getContract("DaoToken")
            daoSplit = await ethers.getContract("DaoSplit")
            factory = await ethers.getContract("DaoFactory")
            router = await ethers.getContract("DaoRouter")
            master = await ethers.getContract("Master")
            accounts = await ethers.getSigners();

            lp1 = await ethers.getContract("MockBEP20V1")
            lp2 = await ethers.getContract("MockBEP20V2")
            lp3 = await ethers.getContract("MockBEP20V3")
            lp4 = await ethers.getContract("MockBEP20V4")
            lp5 = await ethers.getContract("MockBEP20V5")

            deployer = accounts[0];
            alice = accounts[1]
            bob = accounts[2]

            await factory.createPair(lp1.address, lp2.address);
            await factory.createPair(lp1.address, lp3.address);
            await factory.createPair(lp1.address, lp4.address);
            await factory.createPair(lp1.address, lp5.address);

            // add(uint256 _allocPoint, IBEP20 _lpToken, bool _withUpdate)

            pool1Address = await factory.getPair(lp1.address, lp2.address);
            pool2Address = await factory.getPair(lp1.address, lp3.address);
            pool3Address = await factory.getPair(lp1.address, lp4.address);
            pool4Address = await factory.getPair(lp1.address, lp5.address);

            pool1 = await ethers.getContractAt("ApePair", pool1Address)
            pool2 = await ethers.getContractAt("ApePair", pool2Address)
            pool3 = await ethers.getContractAt("ApePair", pool3Address)
            pool4 = await ethers.getContractAt("ApePair", pool4Address)

            master.add(1000, pool1Address, true);
            master.add(1500, pool2Address, true);
            master.add(2000, pool3Address, true);
            master.add(2500, pool4Address, true);

            await lp1.approve(router.address, ethers.BigNumber.from("500000"))
            await lp2.approve(router.address, ethers.BigNumber.from("500000"))
            await lp3.approve(router.address, ethers.BigNumber.from("500000"))
            await lp4.approve(router.address, ethers.BigNumber.from("500000"))
            await lp5.approve(router.address, ethers.BigNumber.from("500000"))

            await router.addLiquidity(lp1.address, lp2.address, ethers.BigNumber.from('10000'), ethers.BigNumber.from('10000'), 0, 0, deployer.address, ethers.constants.MaxUint256, overrides)
            await router.addLiquidity(lp1.address, lp3.address, ethers.BigNumber.from('10000'), ethers.BigNumber.from('10000'), 0, 0, deployer.address, ethers.constants.MaxUint256, overrides)
            await router.addLiquidity(lp1.address, lp4.address, ethers.BigNumber.from('10000'), ethers.BigNumber.from('10000'), 0, 0, deployer.address, ethers.constants.MaxUint256, overrides)
            await router.addLiquidity(lp1.address, lp5.address, ethers.BigNumber.from('10000'), ethers.BigNumber.from('10000'), 0, 0, deployer.address, ethers.constants.MaxUint256, overrides)
        })

        it('should working', async () => {
            // await pool1.approve(master.address, pool1Liquidity);
            // console.log(await router.factory())
            // console.log(await factory.address);
            // console.log(await lp1.balanceOf(pool1.address));
            // console.log(await pool1.balanceOf(deployer.address));
            // console.log(await pool1.totalSupply())
            // console.log(pool1Liquidity)
            const deployerBalancePool1 = await pool1.balanceOf(deployer.address)
            await pool1.approve(master.address, deployerBalancePool1)
            await master.deposit(1, deployerBalancePool1)

            const deployerBalancePool2 = await pool2.balanceOf(deployer.address)
            await pool2.approve(master.address, deployerBalancePool1)
            await master.deposit(2, deployerBalancePool2)
            // await master.deposit(2, pool2Liquidity);
            // await master.deposit(3, pool3Liquidity);
            // await master.deposit(4, pool4Liquidity);

            await master.withdraw(1, deployerBalancePool1);
            await master.withdraw(2, deployerBalancePool2);
            // await master.withdraw(3, pool3Liquidity);
            // await master.withdraw(4, pool4Liquidity);

            console.log(await daoToken.balanceOf(deployer.address));
        });
    });