import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// screens
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import ForgotPassword from '../pages/ForgotPassword';

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Voltar' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={SignIn} options={{ headerStyle: {
        backgroundColor: '#C6EFF8'
      } }} />
      <Stack.Screen name='Criar Conta' component={SignUp} options={{ headerStyle: {
        backgroundColor: '#C6EFF8'
      } }} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
    </Stack.Navigator> 
  )
}

export default AuthRoutes;