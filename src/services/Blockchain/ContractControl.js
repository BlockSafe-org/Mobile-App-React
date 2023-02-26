import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
import {PRIVATE_KEY, MAINSAFE_ADDRESS, GENCOIN_ADDRESS, ALCHEMY_API_KEY} from "@env"
const user = require("../../assets/Abi/User.json")
const token = require("../../assets/Abi/ERC20.json")
const mainsafe_abi = require("../../assets/Abi/MainSafe.json")

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="maticmum", ALCHEMY_API_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Mainsafe address
const mainsafe = new ethers.Contract(MAINSAFE_ADDRESS, mainsafe_abi.abi, signer);

const tokens = []

export async function addUser(email) {
    let tx = await mainsafe.addUser(email,GENCOIN_ADDRESS);
    let result = await tx.wait()
    console.log(result)
}

export async function getUserAddress(email) {
    let tx = await mainsafe.emailToUser(email);
    console.log(tx)
 }

 export async function getBalances() {

 }

