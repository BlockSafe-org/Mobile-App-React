import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from '../SplashScreens/ScreenOne';
import ScreenTwo from '../SplashScreens/ScreenTwo';
import ScreenThree from '../SplashScreens/ScreenThree';
import ScreenFour from '../SplashScreens/ScreenFour';
import ScreenFive from '../SplashScreens/ScreenFive';
import ScreenSix from '../SplashScreens/ScreenSix';
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import VerifyEmail from '../Authentication/VerifyEmail';

const Stack = createNativeStackNavigator()

export default function FirstStack() {
    return (
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
     <Stack.Screen name='ScreenOne' component={ScreenOne}/>
     <Stack.Screen name='ScreenTwo' component={ScreenTwo}/>
     <Stack.Screen name='ScreenThree' component={ScreenThree}/>
     <Stack.Screen name='ScreenFour' component={ScreenFour}/>
     <Stack.Screen name='ScreenFive' component={ScreenFive}/>
     <Stack.Screen name='ScreenSix' component={ScreenSix}/>
     <Stack.Screen name='Register' component={Register}/>
     <Stack.Screen name='VerifyEmail' component={VerifyEmail}/>
     <Stack.Screen name='Login' component={Login}/>
   </Stack.Navigator>
    )
}