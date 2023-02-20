import { Text, View, StyleSheet, Image } from 'react-native';
import globalStyles from "../styles/GlobalStyles"
import { useNavigation } from '@react-navigation/native';
import CardButton from '../models/CardButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Balances from '../models/Balances';
  

export default function Home() {
    const navigate = useNavigation()
    return(
        <SafeAreaView style={[globalStyles.dashboardColor, styles.container]}>
                <View style={styles.buttons}>
                    <CardButton title="Deposit" icon="arrowdown" onPress={() => navigate.navigate("")}/>
                    <CardButton title="Swap" icon="swap"/>
                    <CardButton title="Withdraw" icon="arrowup"/>
                </View>
                <View style={styles.buttons}>
                  <Balances>
                    <Image source={require("../assets/Dashboard/tether.png")} style={{width:50, alignSelf:"center", resizeMode:"contain"}}/>
                    <Text style={{textAlign:"center", marginTop: 20}}>Balance</Text>
                  </Balances>
                  <Balances>
                    <Image source={require("../assets/Dashboard/gencoin.png")} style={{width:46, height:46, alignSelf:"center", resizeMode:"contain"}}/>
                    <Text style={{textAlign:"center", marginTop: 20}}>Gencoin</Text>
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