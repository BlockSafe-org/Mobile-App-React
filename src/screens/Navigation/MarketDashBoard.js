import {useState} from 'react';
import { Button, Dimensions, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MarketPlace from '../MarketPlace/MarketPlace';
import Categories from '../MarketPlace/Categories';
import Search from '../MarketPlace/Search';
import Merchant from '../MarketPlace/Merchant';
import CreateMerchant from '../MarketPlace/CreateMerchant';

const Drawer = createDrawerNavigator();


export default function MarketDashboard() {
    const [isMerchant, setIsMerhant] = useState(false)
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={() => ({
          headerShown: false,
          animation: "none",
          drawerActiveTintColor:"#8EB4B5",
        })}>
        <Drawer.Screen name="Search" component={Search}/>
        <Drawer.Screen name="Home" component={MarketPlace} />
        <Drawer.Screen name='Categories' component={Categories}/>
        {isMerchant ? <Drawer.Screen name='Merchant Profile' component={Merchant}/>:<Drawer.Screen name='Become a Merchant' component={CreateMerchant}/>}
        </Drawer.Navigator>
        )
}