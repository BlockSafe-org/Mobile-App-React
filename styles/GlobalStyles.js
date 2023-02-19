import { StyleSheet, Dimensions } from "react-native";


const globalStyles = StyleSheet.create({
    mainColor:{
        backgroundColor: '#ADD8E6',
    },

    subColor: {
        backgroundColor: "#191970",
    },

    circle: {
        padding: 30,
        width : Dimensions.get("window").width*1.8,
        height: Dimensions.get("window").width*2,
        borderRadius: Dimensions.get("window").width,
        position: "absolute",
        bottom:-Dimensions.get("window").height + Dimensions.get("window").width*1.5
    },

    square: {
        padding: 30,
        width : Dimensions.get("window").width,
        height: Dimensions.get("window").width-80,
        position: "absolute",
        bottom:0,
    }
})

export default globalStyles