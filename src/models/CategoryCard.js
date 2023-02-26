import { View, Text } from "react-native"


export default function CategoryCard({category, img}) {
    return (
        <View style={{width:150, height:180, borderRadius:8, backgroundColor:"#fff", borderWidth:1, borderColor:"#D3D3D3", margin:10, justifyContent:"center"}}>
            <Text style={{textAlign:"center", color:"#5F9EA0", fontWeight:"800"}}>{category}</Text>
        </View>
        )
}