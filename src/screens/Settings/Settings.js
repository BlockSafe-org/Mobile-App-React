import {Button, Text, View, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
    return(
        <View style={[styles.container, globalStyles.mainColor]}>
            <Text>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    }
})