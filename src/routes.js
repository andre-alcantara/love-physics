import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome';
import Hello from './pages/Hello';


const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='Hello'>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name='Hello' component={Hello} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Routes;