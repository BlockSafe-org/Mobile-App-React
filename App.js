import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import VerifyStack from './src/screens/Navigation/VerifyStack';
import FirstStack from './src/screens/Navigation/FirstStack';
import AppStack from './src/screens/Navigation/AppStack';
import AuthStack from './src/screens/Navigation/AuthStack';
import { Storage } from "expo-storage";
import app from "./src/services/FirebaseConfig"
import { getAuth } from "firebase/auth";
import { View, ActivityIndicator } from 'react-native';
import globalStyles from './src/styles/GlobalStyles';


const Stack = createNativeStackNavigator()

export default function App() {
  const [isFirstTime, setIsFirstTime] = useState(null);
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const _auth = getAuth(app)

  useEffect(() => {
    const getIsFirstTime = async () => {
      let check =  await Storage.getItem("isFirstTime");
      if(check == null) {
        setIsFirstTime("true");
        await Storage.setItem("isFirstTime", "false");
      } else {
        setIsFirstTime("false");
      }
    }
    getIsFirstTime()
    _auth.onAuthStateChanged(async (e) => {
      setUser(e)
      await new Promise(resolve => setTimeout(resolve, 2000)) 
      setIsLoading(false)
    })
  }, [])
if(isLoading) {
  return (
    <View style={[{flex:1, alignContent:"center", justifyContent:"center"}, globalStyles.mainColor]}>
      <ActivityIndicator size={100} color="blue"/>
    </View>
  )
}
    if (isFirstTime == "true") {
      return(
        <NavigationContainer>
        <FirstStack/>
      </NavigationContainer>
      )
    } else if (isFirstTime == "false") {
      if(user == null) {
        return(
          <NavigationContainer>
            <AuthStack/>
          </NavigationContainer>
        )
      } else {
        if (user.emailVerified == true) {
          return(
            <NavigationContainer>
              <AppStack/>
            </NavigationContainer>
          )
        } else {
          return (
            <NavigationContainer>
            <VerifyStack/>
          </NavigationContainer>
          )
        }
      }
    }
}
