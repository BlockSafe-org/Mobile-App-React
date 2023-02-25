import {Button, Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import globalStyles from "../../styles/GlobalStyles"
import { AppBar, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function MarketPlace({navigation}) {
    return(
        <TouchableWithoutFeedback onPress={() => navigation.closeDrawer()}>
        <ScrollView style={[styles.container, globalStyles.dashboardColor]}>
            <Image style={{resizeMode:"contain",width:Dimensions.get("screen").width-50, alignSelf:"center"}} source={require("../../assets/blockly.png")}/>
            <AppBar
            style={[globalStyles.dashboardColor, {elevation:0, marginTop:-30}]}
            titleStyle={{color:"#5F9EA0", fontSize:25}}
            leading={<IconButton icon={<Entypo name="menu" size={26} color="black" />} onPress={() => navigation.openDrawer()}/>}
            trailing={<IconButton icon={<AntDesign name="search1" size={26} color="black" />} onPress={() => null}/>}
            />
        </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    }
})