import {Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsButton from '../../models/SettingsButton';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function Settings() {
    const [isVerified, setIsVerified] = useState(false)
    return(
        <SafeAreaView style={[styles.container, globalStyles.dashboardColor]}>
            <ScrollView>
            <Image style={styles.image} source={require("../../assets/placeholder.jpg")}/>
            { isVerified ?
            <View style={{flexDirection:'row', alignSelf: 'center', justifyContent:"flex-start"}}>
                <AntDesign name="checkcircle" size={24} color="green" />
                <Text style={{fontSize:20, marginLeft:10,color:"green", marginBottom:10}}>User is verified</Text>
            </View>:<View style={{flexDirection:'row', alignSelf: 'center', justifyContent:"flex-start"}}>
                <AntDesign name="closecircle" size={24} color="red" />
                <Text style={{fontSize:20, marginLeft:10, color:"red", marginBottom:10}}>User is not verified</Text>
            </View>
            }
            <SettingsButton title="User Details" buttonName="user"/>
            <SettingsButton title="Display Settings" buttonName="setting"/>
            <SettingsButton title="Terms And Conditions" buttonName="Safety"/>
            <SettingsButton title="Privacy Policy" buttonName="lock"/>
            <SettingsButton title="Contact Us" buttonName="customerservice"/>
            <SettingsButton title="Logout" buttonName="logout"/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },

    image:{
        alignSelf:"center", 
        borderRadius:8, 
        marginVertical:20, 
        borderColor:"#D3D3D3", 
        borderWidth:1, 
        width: 200, 
        height: 200
    }
})