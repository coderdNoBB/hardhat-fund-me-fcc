require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('hardhat-gas-reporter')
require('solidity-coverage')
require('hardhat-deploy')

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ''
const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL ||
    'https://eth-sepolia.g.alchemy.com/v2/your-api-key'
const PRIVATE_KEY = process.env.PRIVATE_KEY || ''
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: '0.8.19',
            },
            {
                version: '0.6.6',
            },
        ],
    },
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {},
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },
        localhost: {
            url: 'http://localhost:8545',
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: 'USD',
        outputFile: 'gas-report.txt',
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    mocha: {
        timeout: 500000,
    },
}
