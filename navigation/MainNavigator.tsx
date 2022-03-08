import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Screen_B'
      screenOptions={{
        swipeEdgeWidth: 500,
        overlayColor: '#00000090',
        drawerStyle: { backgroundColor: '#e6e6e6', width: 200 },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name='Screen_A'
        component={ScreenA}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name='autoprefixer'
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}
            />
          ),
          headerTitleStyle: { fontFamily: 'Bebas', fontSize: 30 },
        }}
      />
      <Drawer.Screen
        name='Screen_B'
        component={ScreenB}
        options={{
          //   title: 'Screen B Title',
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name='btc'
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}
            />
          ),
          headerTitleStyle: { fontFamily: 'Bebas', fontSize: 30 },
        }}
        initialParams={{
          itemName: 'Item from Drawer',
          itemId: 12,
        }}
      />
    </Drawer.Navigator>
  );
}
