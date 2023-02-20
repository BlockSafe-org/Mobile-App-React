import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from './screens/SplashScreens/ScreenOne';
import ScreenTwo from './screens/SplashScreens/ScreenTwo';
import ScreenThree from './screens/SplashScreens/ScreenThree';
import ScreenFour from './screens/SplashScreens/ScreenFour';
import ScreenFive from './screens/SplashScreens/ScreenFive';
import ScreenSix from './screens/SplashScreens/ScreenSix';
import Register from './screens/Authentication/Register';
import Login from './screens/Authentication/Login';
import Dashboard from './screens/Navigation/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, View } from 'react-native';
const Stack = createNativeStackNavigator()

export default function App() {
  const [isFirstTime, setIsFirstTime] = useState(true)

  useEffect(() => {
    const getIsFirstTime = async () => {
      let check =  await AsyncStorage.getItem("isFirstTime");
      if(check == null) {
        setIsFirstTime(false);
        await AsyncStorage.setItem("isFirstTime", false);
      } else {
        setIsFirstTime(false);
      }
    }
    getIsFirstTime()
  }, [])
 if(isFirstTime) {
  return (
    <NavigationContainer>
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
     {isFirstTime? <Stack.Screen name='ScreenOne' component={ScreenOne}/>: <Stack.Screen name='Login' component={Login}/>}
     <Stack.Screen name='ScreenTwo' component={ScreenTwo}/>
     <Stack.Screen name='ScreenThree' component={ScreenThree}/>
     <Stack.Screen name='ScreenFour' component={ScreenFour}/>
     <Stack.Screen name='ScreenFive' component={ScreenFive}/>
     <Stack.Screen name='ScreenSix' component={ScreenSix}/>
     <Stack.Screen name='Register' component={Register}/>
     {isFirstTime? <Stack.Screen name='Login' component={Login}/> : <Stack.Screen name='ScreenOne' component={ScreenOne}/>}
     <Stack.Screen name='Dashboard' component={Dashboard}/>
   </Stack.Navigator>
 </NavigationContainer>
);

 }
  return (
       <NavigationContainer>
      <Stack.Navigator  screenOptions={() => ({
        headerShown: false,
        animation: "none"
      })}>
        {isFirstTime? <Stack.Screen name='ScreenOne' component={ScreenOne}/>: <Stack.Screen name='Login' component={Login}/>}
        <Stack.Screen name='ScreenTwo' component={ScreenTwo}/>
        <Stack.Screen name='ScreenThree' component={ScreenThree}/>
        <Stack.Screen name='ScreenFour' component={ScreenFour}/>
        <Stack.Screen name='ScreenFive' component={ScreenFive}/>
        <Stack.Screen name='ScreenSix' component={ScreenSix}/>
        <Stack.Screen name='Register' component={Register}/>
        {isFirstTime? <Stack.Screen name='Login' component={Login}/> : <Stack.Screen name='ScreenOne' component={ScreenOne}/>}
        <Stack.Screen name='Dashboard' component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
