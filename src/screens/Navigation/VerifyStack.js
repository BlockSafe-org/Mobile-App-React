import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyEmail from '../Authentication/VerifyEmail';
import AgreeTermsAndConditions from '../Legal/AgreeTermsAndConditions';
import CreateProfile from '../CreateProfile';
import Dashboard from './Dashboard';
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator()

export default function VerifyStack() {
    return (
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
     <Stack.Screen name='VerifyEmail' component={VerifyEmail}/>
     <Stack.Screen name="AgreeTermsAndConditions" component={AgreeTermsAndConditions}/>
     <Stack.Screen name='CreateProfile' component={CreateProfile}/>
     <Stack.Screen name='AppStack' component={AppStack}/>
   </Stack.Navigator>
    )
}