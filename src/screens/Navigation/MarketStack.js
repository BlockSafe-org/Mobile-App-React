import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MarketPlace from '../MarketPlace/MarketPlace';

const Drawer = createDrawerNavigator();


export default function MarketStack() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={() => ({
          headerShown: false,
          animation: "none"
        })}>
        <Drawer.Screen name="Home" component={MarketPlace} />
        </Drawer.Navigator>
        )
}