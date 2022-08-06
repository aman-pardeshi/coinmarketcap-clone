const main = async () => {
  const dogeFactory = await hre.ethers.getContractFactory('Dogecoin')
  const dogeContract = await dogeFactory.deploy()
  await dogeContract.deployed()
  console.log('Dogecoin deployed to : ' + dogeContract.address)

  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  console.log('Link deployed to : ' + linkContract.address)

  const daiFactor = await hre.ethers.getContractFactory('Dai')
  const daiContract = await daiFactor.deploy()
  await daiContract.deployed()
  console.log('Dai deployed to : ' + daiContract.address)

  const usdcFactory = await hre.ethers.getContractFactory('Usdc')
  const usdtContract = await usdcFactory.deploy()
  await usdtContract.deployed()
  console.log('USDC deployed to : ' + usdtContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
