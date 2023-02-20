import { Text, View, Button, StyleSheet, Image } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ScreenOne() {
    const navigate = useNavigation()
    const [isFirstTime, setIsFirstTime] = useState(null)

    useEffect(() => {
      const getIsFirstTime = async () => {
        let check =  await AsyncStorage.getItem("isFirstTime");
        if(check == null) {
          setIsFirstTime(false);
          await AsyncStorage.setItem("isFirstTime", false);
        } else {
          setIsFirstTime(false);
          navigate.navigate("Login");
        }
      }
      getIsFirstTime()
    }, [])
    
    if(isFirstTime == true) {
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