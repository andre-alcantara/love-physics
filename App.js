import React from 'react';
import AuthProvider from './src/contexts/auth';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes/routes';

import { useFonts, 
Montserrat_500Medium,
Montserrat_600SemiBold,
Montserrat_700Bold,
Montserrat_800ExtraBold,
Montserrat_900Black
} from '@expo-google-fonts/montserrat';


const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="dark" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;

console.disableYellowBox = true;