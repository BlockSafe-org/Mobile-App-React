import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Transfer from '../Transfer';
import Home from '../Home';
import Settings from '../Settings/Settings';
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import MarketDashboard from './MarketDashBoard';


const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#8EB4B5"
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'MarketPlace') {
              return <Entypo name="shop" size={size} color={color} />;
          } else if (route.name === 'Transfer') {
            return <MaterialCommunityIcons name="bank-transfer" size={size} color={color}/>
          }else if (route.name === 'Home') {
            return <Entypo name="home" size={size} color={color} />
          }else if (route.name === 'Settings') {
            return <Ionicons name="settings" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#FFFFFF',
        headerShown: false
      })}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="MarketPlace" component={MarketDashboard}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
  );
}