import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
import {PRIVATE_KEY, MAINSAFE_ADDRESS, GENCOIN_ADDRESS, ALCHEMY_API_KEY} from "@env"
import FirebaseAuth from "./Authentication";
import moment from "moment";
const userContract = require("../assets/Abi/User.json")
const token = require("../assets/Abi/ERC20.json")
const mainsafe_abi = require("../assets/Abi/MainSafe.json")

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="maticmum", ALCHEMY_API_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Mainsafe address
const mainsafe = new ethers.Contract(MAINSAFE_ADDRESS, mainsafe_abi.abi, signer);

const tokens = [
    {id:"USDT", address:"0x39696b4e8d29400f83922BbE9aE18c447633B117", balance:-1},
    {id:"DAI", address:"0x54ce4cd4424a608B0B1D654dA3BBa68aFdb3e875", balance:-1},
]

const usedTokens = [
    {id:"USDT", name:"tether" , address:"0x39696b4e8d29400f83922BbE9aE18c447633B117", balance:-1},
    {id:"GCN", address:"0xde3A881139d62b024c79d2ED8723A836cd84d0e4", balances:-1},

]

export async function addUser() {
    try {
        let user = await FirebaseAuth.getUser();
        let tx = await mainsafe.addUser(user.email, GENCOIN_ADDRESS);
        let result = await tx.wait()   
    } catch (error) {
        console.log(error)
    }
}

export async function getUserAddress() {
    try {
        let user = await FirebaseAuth.getUser();
        let tx = await mainsafe.emailToUser(user.email);
        return tx   
    } catch (error) {
     console.log(error)   
    }
 }

 export async function checkUserAddress(email) {
    try {
        let tx = await mainsafe.emailToUser(email);
        return tx  
    } catch (error) {
        console.log(error)
    }
 }

 export async function getBalances() {
    for (let x = 0 ; x < usedTokens.length; x++) {
        try {
            const tokenContract = new ethers.Contract(usedTokens[x].address, token.abi, signer);
        let user = await FirebaseAuth.getUser();
        let userAddress = await getUserAddress(user.email);
        let tx = await tokenContract.balanceOf(userAddress);
        const balance= ethers.utils.formatUnits(tx, 18)
        if (usedTokens[x].id == "USDT") {
            let usdValue = await getCurrencyPrice("UGX");
            let tokenValue = await getTokenPrice(usedTokens[x].name);
            usedTokens[x].balance = balance*usdValue*tokenValue
        } else {
            usedTokens[x].balance = balance
        }   
        } catch (error) {
          console.log(error)  
        }
    }
    return usedTokens;
 }

 export async function deposit( currency , amount) {
    try {
        let userAddress = await getUserAddress();
        let user = await FirebaseAuth.getUser();
        const contract = new ethers.Contract(userAddress, userContract.abi, signer);
        let usdValue = await getCurrencyPrice(currency);
        let tokenValue = await getTokenPrice("tether");
        let value = amount/(usdValue*tokenValue)
        let weiValue =  value*10**18
        console.log(`You have deposited ${weiValue} wei in USDT.`)
        //let tx = await contract.deposit("USDT", weiValue, user.email);
    } catch (error) {
        console.log(error)
    }
 }

 export async function withdraw(currency, tokenName, tokenId, amount) {
    try {
    let userAddress = await getUserAddress();
    let user = await FirebaseAuth.getUser();
    const contract = new ethers.Contract(userAddress, userContract.abi, signer);
    let usdValue = await getCurrencyPrice(currency);
    let tokenValue = await getTokenPrice(tokenName);
    let value = amount/(usdValue*tokenValue)
    let weiValue =  value*10**18
    console.log(`You have withdrawn ${weiValue} wei in ${tokenId}.`)
    //let tx = await contract.withdraw(tokenId, weiValue, user.email);   
    } catch (error) {
     console.log(error)   
    }
 }

 export async function swap(currency, from, to, amount) {
    try {
        let userAddress = await getUserAddress();
        let user = await FirebaseAuth.getUser();
        const contract = new ethers.Contract(userAddress, userContract.abi, signer);
        let usdValue = await getCurrencyPrice(currency);
        let value = Math.floor((amount/usdValue)*10**8);
        console.log(`You have swapped ${value} from ${from} to ${to}.`)
        //tx = await contract.swap(from, to, value);
    } catch (error) {
        console.log(error);
    }
 }

 export async function getTokenPrice(tokenName) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${tokenName}`);
        const json = await response.json();
        return json.market_data.current_price.usd;
      } catch (error) {
        console.error(error);
      }
 }

 export async function getCurrencyPrice(symbol) {
    try {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=a0b1ffe3d063455db6f29cda92b93977&base=USD&symbols=${symbol}&prettyprint=false&show_alternative=false`);
        const json = await response.json();
        return json.rates[symbol];
      } catch (error) {
        console.error(error);
      }  
 }

function formatMarketData(data) {
    let formattedData = []
    data.forEach((item) => {
       formattedData.push({x:item[0], y:item[1]})
    })

    return formattedData;
}


 export async function getMarketData() {
    
    try {
        let response = await fetch("https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=7");
        const json = await response.json();
        const data = formatMarketData(json.prices)
        return data;
    } catch (error) {
        console.log(error);
    }
 }

 export async function sendUserEmail(receiver) {
    try {
        
    } catch (error) {
        
    }
 }

 export async function sendUserAddress(receiver) {
    try {
        
    } catch (error) {
        
    }
 }

 export async function addMerchant() {
    try {
        
    } catch (error) {
        
    }
 }

 export async function payMerchantFiat() {
    try {
        
    } catch (error) {
        
    }
 }

 export async function payMerchantCrypto() {
    try {
        
    } catch (error) {
        
    }
 }
