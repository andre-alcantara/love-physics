import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import Hello from './pages/Hello';

// Tab Navigation
import TabRoutes from './routes/tab.routes';

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='TabRoutes'>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name='Hello' component={Hello} options={{ headerShown: false }} />
      <Stack.Screen name='TabRoutes' component={TabRoutes} options={{ headerShown: false }} />
    </Stack.Navigator> 
  )
}

export default Routes;