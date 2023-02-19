import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from './screens/SplashScreens/ScreenOne';
import ScreenTwo from './screens/SplashScreens/ScreenTwo';
import ScreenThree from './screens/SplashScreens/ScreenThree';
import ScreenFour from './screens/SplashScreens/ScreenFour';
import ScreenFive from './screens/SplashScreens/ScreenFive';
import ScreenSix from './screens/SplashScreens/ScreenSix';
import Register from './screens/Authentication/Register';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ScreenOne' component={ScreenOne} options={{headerShown: false}}/>
        <Stack.Screen name='ScreenTwo' component={ScreenTwo} options={{headerShown: false}}/>
        <Stack.Screen name='ScreenThree' component={ScreenThree} options={{headerShown: false}}/>
        <Stack.Screen name='ScreenFour' component={ScreenFour} options={{headerShown: false}}/>
        <Stack.Screen name='ScreenFive' component={ScreenFive} options={{headerShown: false}}/>
        <Stack.Screen name='ScreenSix' component={ScreenSix} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Register} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
