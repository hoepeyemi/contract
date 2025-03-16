/**
* @type import('hardhat/config').HardhatUserConfig
*/


// const { PrivateKey } = require('./secret.json');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-ignition");

module.exports = {
  defaultNetwork: 'base_mainnet',

  networks: {
     hardhat: {
     },
     base_testnet: {
        url: 'https://sepolia.base.org',
        accounts: [""],
        chainId: 84532,
     },
     base_mainnet: {
       url: 'https://mainnet.base.org',
       accounts: [""],
       chainId: 8453,
    },
  },
  etherscan: {
   apiKey: {
     base_testnet: "1X7SMEQISD1CBAABIXJTJC3QQBY3SC7MUT",
     base_mainnet: "1X7SMEQISD1CBAABIXJTJC3QQBY3SC7MUT"
   },
   customChains: [
     {
       network: "base_testnet",
       chainId: 84532,
       urls: {
         apiURL: "https://api-sepolia.basescan.org/api",
         browserURL: "https://sepolia.basescan.org/"
       }
     },
     {
       network: "base_mainnet",
       chainId: 8453,
       urls: {
         apiURL: "https://api.basescan.org/api",
         browserURL: "https://basescan.org/"
       }
     }
   ]
 },
 
  solidity: {
     compilers: [
       {
          version: '0.8.28',
          settings: {
             optimizer: {
                enabled: false,
                runs: 200,
             },
          },
       }
     ],
  },
  paths: {
     sources: './contracts',
     cache: './cache',
     artifacts: './artifacts',
  },
  mocha: {
     timeout: 20000,
  },
  // Ignition configuration
  ignition: {
    // Automatically verify contracts on deployment
    verificationStrategy: {
      enabled: true,
      // Wait for 5 confirmations before verifying
      verifyAfterConfirmations: 5,
      // Retry verification if it fails
      retryCount: 3,
      // Wait 10 seconds between retries
      retryDelay: 10000
    }
  }
};
