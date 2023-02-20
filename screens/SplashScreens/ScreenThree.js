import {Text, View, Button, StyleSheet, Image } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

export default function ScreenThree() {
    const navigate = useNavigation()

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
         <Image style={{resizeMode: "contain", width : 400, alignSelf:"center", marginTop:-220}} placeholder="Logo" source={require("../../assets/Splashscreen/img2.png")}/>
        <View style={[globalStyles.square, globalStyles.subColor]}>
            <View>
                <Text style={[styles.text]}>
                    Browse through many crypto currencies on the ethereum blockchain and build your portfolio.
                </Text>
            </View>
            <View style={styles.button}>
                <Button style={styles.button} onPress={() => navigate.navigate("ScreenFour")} title='Next' color="#1573FE"/>
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
        bottom: -100,
        fontSize: 23,
    }
  })