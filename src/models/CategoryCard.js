import { View, Text, Image, Dimensions } from "react-native"


export default function CategoryCard({item}) {
    return (
        <View style={{width:Dimensions.get("screen").width-100, height:Dimensions.get("screen").width, borderRadius:8, backgroundColor:"#fff", borderWidth:1, borderColor:"#D3D3D3", margin:10, justifyContent:"center"}}>
              <Image style={{alignSelf:"center", marginBottom:20, resizeMode:"contain", width:Dimensions.get("screen").width-130, height:Dimensions.get("screen").width-130}} source={{uri:""}}/>
            <Text style={{fontSize:28, alignSelf:"center", color:"#5F9EA0", fontWeight:"800", marginBottom:10}}>{item.title}</Text>
        </View>
        )
}