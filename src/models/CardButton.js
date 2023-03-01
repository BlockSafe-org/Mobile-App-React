import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function CardButton({onPress, title, icon}) {
    return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <AntDesign style={{alignSelf:"center", marginBottom:15}} name={icon} size={24} color="#8EB4B5" />
                        <Text style={{textAlign:"center"}}>{title}</Text>
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
        width: 150,
        height: 120,
    },

    cardContent: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    }
})