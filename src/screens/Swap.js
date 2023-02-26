import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Button, VirtualizedList } from 'react-native';
import globalStyles from "../styles/GlobalStyles"
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppBar, IconButton } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';

export default function Swap() {
    const navigate = useNavigation()
    const [toOpen, setToOpen] = useState(false);
    const [toValue, setToValue] = useState("USDT");
    const [fromOpen, setFromOpen] = useState(false);
    const [fromValue, setFromValue] = useState("USDT");
    const [items, setItems] = useState([
      {label: "Tether", value: "USDT", icon: () => <Image style={{width:35, height:35}} source={require('../assets/Dashboard/tether.png')} />},
      {label: 'GenCoin', value: 'GCN', icon: () => <Image  style={{width:35, height:35, alignSelf:"center", resizeMode:"contain"}} source={require('../assets/Dashboard/gencoin.png')} />}
    ]);

    return(
        <SafeAreaView style={[styles.container, globalStyles.dashboardColorLight]}>
               <AppBar
            title="Swap"
            style={[globalStyles.dashboardColorLight, {elevation:0}]}
            titleStyle={{color:"#5F9EA0", fontSize:25}}
            leading={() => (
                <IconButton icon={<AntDesign name="back" size={24} color="black" />} onPress={() => navigate.goBack()}/>
            )}
            centerTitle={true}
            />
            <ScrollView nestedScrollEnabled={true}>
        <Text style={styles.subTitles}>Token From:</Text>
        <View style={{flexDirection:'row', alignContent:"center"}}>
        <TextInput style={styles.amount} keyboardType="numeric" placeholder='Enter amount...'/>
        <DropDownPicker
        style={{width:90, height:60, marginBottom:20, justifyContent:"center"}}
        dropDownContainerStyle={{width:160, marginLeft:-60}}     
      open={toOpen}
      value={toValue}
      items={items}
      setOpen={setToOpen}
      setValue={setToValue}
      setItems={setItems}
    />
        </View>
        <Text style={styles.subTitles}>Token To:</Text>
        <View style={{flexDirection:'row', alignContent:"center"}}>
        <TextInput style={styles.amount} keyboardType="numeric" placeholder='Enter amount...'/>
        <DropDownPicker
        style={{width:90, height:60, marginBottom:20, justifyContent:"center"}}
        dropDownContainerStyle={{width:160, marginLeft:-60}}     
      open={fromOpen}
      value={fromValue}
      items={items}
      setOpen={setFromOpen}
      setValue={setFromValue}
      setItems={setItems}
    />
        </View>
        <View style={styles.submit}>
            <Button title="Swap tokens" color="#8EB4B5" />
           </View>
        <Text style={styles.subTitles}>Recent Transactions:</Text>
        <View>
        <Image style={{alignSelf:"center", resizeMode:"contain", width:160, height:160, marginTop:20}} source={require("../assets/no-data.png")}/>
        <Text style={styles.nodata}>No Transactions here...</Text>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },
    
    amount: {
        height: 60,
        width: 200,
        textAlign: "center",
        fontSize: 30,
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: "#8EB4B5",
        borderWidth: 1,
        marginHorizontal: 20,
        marginBottom: 10,
      },

      input: {
        height: 40,
        width: 250,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: "#8EB4B5",
        marginRight: 10,
        borderWidth: 1,
        alignSelf: "center",
        marginBottom: 10
      },
  
  
    subTitles: {
        color: "#5F9EA0",
        textAlign: "center",
        marginVertical: 15,
        fontSize: 20,
      },

      nodata: {
        color: "#5F9EA0",
        textAlign: "center",
        marginVertical: 15,
        fontSize: 20,
      },
      submit:{
        marginHorizontal: 120,
        marginTop: 20,
        marginBottom: 10,
    },
})