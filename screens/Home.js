import {Button, Text, View, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import globalStyles from "../styles/GlobalStyles"
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    return(
        <View style={[styles.container, globalStyles.mainColor]}>
            <Text>Home Page</Text>
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