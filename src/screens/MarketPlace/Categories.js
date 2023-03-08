import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppBar, IconButton } from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";
import globalStyles from "../../styles/GlobalStyles";
import CategoryCard from "../../models/CategoryCard";


export default function Categories({navigation}) {
    let data = [
        {title:"Men's Fashion", img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._UY550_.jpg"},
        {title:"Watches & Jewelry", img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._UY550_.jpg"},
        {title:"Women's Fashion", img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._UY550_.jpg"},
        {title:"Electronics", img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._UY550_.jpg"},
        {title:"Phone Assessories", img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._UY550_.jpg"}
    ]
    return (
        <SafeAreaView style={[styles.container, globalStyles.dashboardColorLight]}>
            <AppBar
            style={[globalStyles.dashboardColorLight, {elevation:0}]}
            titleStyle={{color:"#5F9EA0", fontSize:25}}
            leading={<IconButton icon={<Entypo name="menu" size={26} color="black" />} onPress={() => navigation.openDrawer()}/>}
            />
             <FlatList data={data} contentContainerStyle={{justifyContent:"space-evenly", alignSelf:"center"}} renderItem={({item}) =>{
                return(
                    <CategoryCard category={item}/>
                )
            }}/>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    }
})