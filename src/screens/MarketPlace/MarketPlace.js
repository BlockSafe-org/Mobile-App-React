import {Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import globalStyles from "../../styles/GlobalStyles"
import { useNavigation } from '@react-navigation/native';

export default function MarketPlace() {
    return(
        <View style={[styles.container, globalStyles.dashboardColor]}>
            <Image style={{resizeMode:"contain",width:Dimensions.get("screen").width-50, alignSelf:"center"}} source={require("../../assets/blockly.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    }
})