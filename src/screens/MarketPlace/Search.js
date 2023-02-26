import { Entypo } from "@expo/vector-icons";
import { AppBar, IconButton } from "@react-native-material/core";
import { View, StyleSheet, Text, FlatList, TextInput, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/GlobalStyles";
import { Button } from "react-native";


export default function Search({navigation}) {
    return (
        <SafeAreaView style={[styles.container, globalStyles.dashboardColorLight]}>
        <AppBar
        style={[globalStyles.dashboardColorLight, {elevation:0}]}
        titleStyle={{color:"#5F9EA0", fontSize:25}}
        leading={<IconButton icon={<Entypo name="menu" size={26} color="black" />} onPress={() => navigation.openDrawer()}/>}
        />
        <View style={{flexDirection:"row", justifyContent:"center", alignContent:"center"}}>
            <TextInput style={{width:Dimensions.get("screen").width-100, height:35, padding:10, borderWidth:1, borderColor:"black", borderRadius:8, borderColor:"#D3D3D3", backgroundColor:"#FFFFF"}} placeholder="Search..."/>
            <View style={{height:40, marginLeft:10}}>
                <Button title="Search" color="#8EB4B5"/>
            </View>
        </View>
        <FlatList/>
    </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    }
})