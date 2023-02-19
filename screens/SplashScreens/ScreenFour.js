import {Text, View, Button, StyleSheet } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

export default function ScreenFour() {
    const navigate = useNavigation()

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.square, globalStyles.subColor]}>
            <View>
                <Text style={[styles.text]}>
                    Earn a reward token on every deposit and swap made. 
                </Text>
            </View>
            <View style={styles.button}>
                <Button style={styles.button} onPress={() => navigate.navigate("ScreenFive")} title='Next' color="#1573FE"/>
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