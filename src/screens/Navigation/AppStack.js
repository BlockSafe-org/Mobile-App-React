import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import Deposit from '../Deposit';
import Withdraw from '../Withdraw';
import Swap from '../Swap';

const Stack = createNativeStackNavigator()

export default function AppStack() {
    return (
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
   <Stack.Screen name='Dashboard' component={Dashboard}/>
   <Stack.Screen name="Deposit" component={Deposit}/>
   <Stack.Screen name="Withdraw" component={Withdraw}/>
   <Stack.Screen name="Swap" component={Swap}/>
   </Stack.Navigator>
    )
}