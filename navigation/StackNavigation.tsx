import * as React from 'react';
// @ts-ignore
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
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
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
        initialParams={{
          itemName: 'Item from Drawer',
          itemId: 12,
        }}
      />
      <Stack.Screen name='Home' component={Home} options={{}} />
    </Stack.Navigator>
  );
}
