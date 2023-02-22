import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator()

export default function AppStack() {
    return (
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
   <Stack.Screen name='Dashboard' component={Dashboard}/>
   </Stack.Navigator>
    )
}