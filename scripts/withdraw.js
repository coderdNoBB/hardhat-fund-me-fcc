const { ethers, getNamedAccounts } = require('hardhat')

async function main() {
    const myContract = await deployments.get('FundMe')

    const fundMe = await ethers.getContractAt(
        myContract.abi,
        myContract.address,
    )
    console.log(`Got contract FundMe at ${fundMe.address}`)
    console.log('Withdrawing from contract...')
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait()
    console.log('Got it back!')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
