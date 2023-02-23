import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Button, VirtualizedList } from 'react-native';
import globalStyles from "../styles/GlobalStyles"
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Transfer() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("USDT");
    const [items, setItems] = useState([
      {label: "Tether", value: "USDT", icon: () => <Image style={{width:35, height:35}} source={require('../assets/Dashboard/tether.png')} />},
      {label: 'GenCoin', value: 'GCN', icon: () => <Image  style={{width:35, height:35, alignSelf:"center", resizeMode:"contain"}} source={require('../assets/Dashboard/gencoin.png')} />}
    ]);


    

    return(
        <SafeAreaView style={[styles.container, globalStyles.dashboardColor]}>
            <ScrollView nestedScrollEnabled={true}>
        <Text style={[styles.subTitles, {marginTop: 40}]}>Enter Amount:</Text>
        <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
        <TextInput style={styles.amount} keyboardType="numeric" placeholder='Enter amount'/>
        </View>
        <DropDownPicker
        style={{width:90, height:20, alignSelf:"center", marginTop:10, marginBottom:30}}
        dropDownContainerStyle={{width:160, alignSelf:"center"}}     
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
        <Text style={styles.subTitles}>Enter Email or ethereum address:</Text>
        <View style={{flexDirection:'row', justifyContent:"center"}}>
        <TextInput style={styles.input} placeholder='Email or ethereum address...'/>
        <TouchableOpacity>
        <AntDesign name="qrcode" size={40} color="black" />
        </TouchableOpacity>
        </View>
        <View style={styles.submit}>
            <Button title="Submit" />
           </View>
        <Text style={styles.subTitles}>Recent Transactions:</Text>
        <View>
        <Image style={{alignSelf:"center", resizeMode:"contain", width:160, height:160, marginTop:50}} source={require("../assets/no-data.png")}/>
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
        height: 80,
        width: 250,
        textAlign: "center",
        fontSize: 30,
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: "#8EB4B5",
        borderWidth: 1,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10,
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