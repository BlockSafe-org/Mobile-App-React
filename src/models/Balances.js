import { Children } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function Balances({onPress, children}) {
    return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                       {children}
                    </View>
                </View>
            </TouchableOpacity>
        )
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#DDE9EA",
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 160,
        height: 170,
    },

    cardContent: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    }
})