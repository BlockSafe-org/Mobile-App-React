import { View, StyleSheet, Dimensions, Text } from "react-native"


export default function Transaction() {
    return (
        <View style={styles.box}>
            <View style={{alignSelf:"center", flex:1,paddingLeft:10}}>
            <Text style={styles.text}>5, Aug, 2023</Text>
            </View>
            <View style={{alignSelf:"center", flex:3, justifyContent:"flex-end", flexDirection:"row", paddingRight:10}}>
            <Text style={styles.text}>5,000 UGX</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width:Dimensions.get("screen").width-30, 
        height:60, 
        borderRadius:10,
        alignSelf:"center", 
        backgroundColor:"#DDE9EA",
        flexDirection:"row",
        justifyContent:"center"
    },

    text: {
        fontSize: 15,
        fontWeight: "700"
    }
})