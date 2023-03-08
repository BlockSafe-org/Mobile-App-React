import { View, Text, Dimensions, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"


export default function ItemCard({item}) {
    return (
        <TouchableOpacity onPress={() => null}>
        <View style={{width:Dimensions.get("screen").width-100, height:Dimensions.get("screen").width, borderRadius:8, backgroundColor:"#fff", borderWidth:1, borderColor:"#D3D3D3", margin:10, justifyContent:"flex-end", paddingBottom:10, paddingLeft:10, paddingRight:10}}>
            <Image style={{alignSelf:"center", marginBottom:20, resizeMode:"contain", width:Dimensions.get("screen").width-130, height:Dimensions.get("screen").width-130}} source={{uri:item.img}}/>
            <Text style={{fontSize:28, color:"#5F9EA0", fontWeight:"800", marginBottom:10}}>{item.name}</Text>
            <View  style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row", width:"50%"}}>
                <Image style={{width:25, height:25}} source={require("../assets/Dashboard/tether.png")}/>
            <Text style={{color:"#5F9EA0", fontWeight:"800", fontSize:20}}>{item.prices["crypto"]}</Text>
            </View>
            <View style={{flexDirection:"row", width:"50%"}}>
                <Image style={{width:25, height:25}} source={require("../assets/Dashboard/money.png")}/>
            <Text style={{color:"#5F9EA0", fontWeight:"800", fontSize:20}}>{item.prices["fiat"]}</Text>
            </View>
            </View>
        </View>
        </TouchableOpacity>
        )
}