require('dotenv').config();
const private_key = process.env.PRIVATE_KEY
const mainsafe_address = process.env.MAINSAFE_ADDRESS
const gencoin_address = process.env.GENCOIN_ADDRESS
const infura_api_key = process.env.INFURA_API_KEY
const alchemy_api_key = process.env.ALCHEMY_API_KEY
const ethers = require("ethers")
const mainsafe_abi = require("../../assets/Abi/MainSafe.json")

// Provider
const alchemyProvider = new ethers.AlchemyProvider(network="maticmum", alchemy_api_key);
console.log("Provider Connected!")

// Signer
const signer = new ethers.Wallet(private_key, alchemyProvider);
console.log("Signer Connected!")

// Mainsafe address
const mainsafe = new ethers.Contract(mainsafe_address.toString(), mainsafe_abi.abi, signer);
console.log("Contract made!")

async function main() {
    let res = await mainsafe.showNoOfUsers()
    console.log(`${res} is the number of users.`)
}

main()