import { View, Text, Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function SettingsButton({title, buttonName, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                <AntDesign style={styles.button} name={buttonName} size={24} color="black" />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
        )
}


const styles = StyleSheet.create({
    container:{ 
        flexDirection:'row',
        marginBottom: 20,
        height: 60, 
        borderRadius: 8, 
        alignSelf: 'center', 
        width: Dimensions.get("screen").width-30, 
        backgroundColor:"#DDE9EA", 
        justifyContent:"flex-start", 
        paddingTop:15
    },

    button: {
        paddingHorizontal:30,
        color: "gray",
    },

    title: {
        fontSize:20,
        color: "gray",
    }

})