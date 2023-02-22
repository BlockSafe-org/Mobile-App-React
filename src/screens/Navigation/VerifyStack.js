import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyEmail from '../Authentication/VerifyEmail';
import TermsAndConditions from '../Legal/AgreeTermsAndConditions';
import CreateProfile from '../CreateProfile';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator()

export default function VerifyStack() {
    return (
   <Stack.Navigator  screenOptions={() => ({
     headerShown: false,
     animation: "none"
   })}>
     <Stack.Screen name='VerifyEmail' component={VerifyEmail}/>
     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions}/>
     <Stack.Screen name='CreateProfile' component={CreateProfile}/>
     <Stack.Screen name='Dashboard' component={Dashboard}/>
   </Stack.Navigator>
    )
}