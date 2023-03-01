import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import globalStyles from "../styles/GlobalStyles"
import { useNavigation } from '@react-navigation/native';
import CardButton from '../models/CardButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Balances from '../models/Balances';
import { useEffect, useState } from 'react';
import { getBalances, deposit, swap, getMarketData } from '../services/ContractControl';
import FirebaseAuth from '../services/Authentication';
import CurrencyFormat from 'react-currency-format';


  

export default function Home() {
    const navigate = useNavigation();
    const [loading, setIsLoading] = useState(true);
    const [balances, setBalances] = useState([{balance:0},{balance:0}])
    useEffect(() => {
      async function getUser() {
        setIsLoading(true)
      let result = await getBalances();
      let response = await getMarketData();
      console.log(response);
      setBalances(result)
      setIsLoading(false)
      }
      getUser()
    },[])
    return(
        <SafeAreaView style={[globalStyles.dashboardColorLight, styles.container]}>
                <View style={styles.buttons}>
                    <CardButton title="Deposit" icon="arrowdown" onPress={() => navigate.navigate("Deposit")}/>
                    <CardButton title="Swap" icon="swap" onPress={() => navigate.navigate("Swap")}/>
                    <CardButton title="Withdraw" icon="arrowup" onPress={() => navigate.navigate("Withdraw")}/>
                </View>
                <View style={styles.buttons}>
                  <Balances>
                    <Image source={require("../assets/Dashboard/tether.png")} style={{width:50, alignSelf:"center", resizeMode:"contain"}}/>
                    <CurrencyFormat value={balances[0].balance} displayType='text' decimalScale={2} thousandSeparator={true} suffix={' UGX'} renderText={value => <Text style={{textAlign:"center", marginTop: 30}}>{loading ? <ActivityIndicator color="green"/>: value}</Text>} />
                  </Balances>
                  <Balances>
                    <Image source={require("../assets/Dashboard/gencoin.png")} style={{width:46, height:46, alignSelf:"center", resizeMode:"contain"}}/>
                    <CurrencyFormat value={balances[1].balance} displayType='text' decimalScale={2} thousandSeparator={true} suffix={' Gencoin'} renderText={value => <Text style={{textAlign:"center", marginTop: 30}}>{loading ? <ActivityIndicator color="green" />: value}</Text>}/>
                  </Balances>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    }
})