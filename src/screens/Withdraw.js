import { Text, View, StyleSheet, TextInput, ScrollView, Image, Button } from 'react-native';
import globalStyles from "../styles/GlobalStyles"
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar, IconButton } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { withdraw } from '../services/ContractControl';

export default function Withdraw() {
    const navigate = useNavigation()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("USDT");
    const [items, setItems] = useState([
      {label: "tether", value: "USDT", icon: () => <Image style={{width:35, height:35}} source={require('../assets/Dashboard/tether.png')} />},
      {label: 'GenCoin', value: 'GCN', icon: () => <Image  style={{width:35, height:35, alignSelf:"center", resizeMode:"contain"}} source={require('../assets/Dashboard/gencoin.png')} />}
    ]);

    return(
        <SafeAreaView style={[styles.container, globalStyles.dashboardColorLight]}>
               <AppBar
            title="Withdraw"
            style={[globalStyles.dashboardColorLight, {elevation:0}]}
            titleStyle={{color:"#5F9EA0", fontSize:25}}
            leading={() => (
                <IconButton icon={<AntDesign name="back" size={24} color="black" />} onPress={() => navigate.goBack()}/>
            )}
            centerTitle={true}
            />
            <ScrollView nestedScrollEnabled={true}>
        <Text style={[styles.subTitles, {marginTop: 40}]}>Enter Amount:</Text>
        <Formik 
          initialValues={{amount:""}}
          onSubmit={async (values, actions) => {
            items.forEach(async e => {
              if(e.value == value) {
                await withdraw("UGX", e.label, value, parseInt(values.amount));
              }
            })
            actions.resetForm()
          }}>
            {props => (
              <>
              <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                <TextInput style={styles.amount} onChangeText={props.handleChange("amount")} value={props.values.amount} keyboardType="numeric" placeholder='Enter amount'/>
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
              <View style={styles.submit}>
                <Button title="Proceed" onPress={props.handleSubmit} color="#8EB4B5" />
              </View>
              </>
           )}
           </Formik>
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
        width: 270,
        textAlign: "center",
        fontSize: 30,
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: "#8EB4B5",
        borderWidth: 1,
        alignSelf: "center",
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