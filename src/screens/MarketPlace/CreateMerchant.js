import { Entypo } from "@expo/vector-icons";
import { AppBar, IconButton } from "@react-native-material/core";
import { Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/GlobalStyles";


export default function CreateMerchant({navigation}) {
    return (
        <SafeAreaView style={[styles.container, globalStyles.dashboardColorLight]}>
        <AppBar
        style={[globalStyles.dashboardColorLight, {elevation:0}]}
        titleStyle={{color:"#5F9EA0", fontSize:25}}
        leading={<IconButton icon={<Entypo name="menu" size={26} color="black" />} onPress={() => navigation.openDrawer()}/>}
        />
         <Text>Create Merchant</Text>
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