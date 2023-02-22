import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import VerifyStack from './src/screens/Navigation/VerifyStack';
import FirstStack from './src/screens/Navigation/FirstStack';
import AppStack from './src/screens/Navigation/AppStack';
import AuthStack
 from './src/screens/Navigation/AuthStack';
import FirebaseAuth from './src/services/Authentication';
import { Storage } from "expo-storage";
import app from "./src/services/FirebaseConfig"
import { getAuth } from "firebase/auth";


const Stack = createNativeStackNavigator()

export default function App() {
  const [isFirstTime, setIsFirstTime] = useState(null);
  const [user, setUser] = useState(null)
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
    _auth.onAuthStateChanged((e) => {
      setUser(e)
    })
  }, [])

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
              <VerifyStack/>
            </NavigationContainer>
          )
        } else {
          return (
            <NavigationContainer>
            <AppStack/>
          </NavigationContainer>
          )
        }
      }
    }
}
