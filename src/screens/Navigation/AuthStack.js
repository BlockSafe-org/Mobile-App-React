import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import VerifyEmail from '../Authentication/VerifyEmail';

const Stack = createNativeStackNavigator()

export default function AuthStack() {
    return (
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
    <Stack.Screen name='Login' component={Login}/>
     <Stack.Screen name='Register' component={Register}/>
     <Stack.Screen name='VerifyEmail' component={VerifyEmail}/>
   </Stack.Navigator>
    )
}