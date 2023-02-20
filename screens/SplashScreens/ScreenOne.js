import { Text, View, Button, StyleSheet, Image } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';


export default function ScreenOne() {
    const navigate = useNavigation()

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
            <Image style={{resizeMode: "contain", width : 400, alignSelf:"center", marginTop:-100}} placeholder="Logo" source={require("../../assets/Splashscreen/blocksafe_white.png")}/>
            <View style={styles.button}>
            <Button onPress={() => navigate.navigate("ScreenTwo")} title='Next' color="#1573FE"/>
            </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    button: {
        padding: 10,
        marginHorizontal: 200,
        textAlign: "center" 
    },
  })