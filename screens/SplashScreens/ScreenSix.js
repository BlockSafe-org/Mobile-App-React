import {Text, View, Button, StyleSheet } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

export default function ScreenSix() {
    const navigate = useNavigation()

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.square, globalStyles.subColor]}>
            <View>
                <Text style={[styles.text]}>
                    Get started on your Blockchain journey today with BlockSafe.
                </Text>
            </View>
            <View style={styles.button}>
                <Button style={styles.button} onPress={() => navigate.navigate("Register")} title='Get Started' color="#1573FE"/>
            </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        padding: 10,
        marginTop: 160,
        marginHorizontal: 10,
        textAlign: "center" 
    },

    text: {
        color: "white",
        position: "absolute",
        textAlign: "center",
        bottom: -90,
        fontSize: 23,
    }
  })