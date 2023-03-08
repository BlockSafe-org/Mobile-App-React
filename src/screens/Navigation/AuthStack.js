import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import VerifyStack from "./VerifyStack";

const Stack = createNativeStackNavigator()

export default function AuthStack() {
    return (
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
    <Stack.Screen name='Login' component={Login}/>
     <Stack.Screen name='Register' component={Register}/>
     <Stack.Screen name='Verify' component={VerifyStack}/>
   </Stack.Navigator>
    )
}