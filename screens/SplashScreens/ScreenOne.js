import { Text, View, Button, StyleSheet, Dimensions } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';


export default function ScreenOne() {
    const navigate = useNavigation()

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
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
        marginTop: Dimensions.get("window").height - 250,
        marginHorizontal: 200,
        textAlign: "center" 
    }
  })