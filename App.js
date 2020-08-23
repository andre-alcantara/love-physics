import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';

import Routes from './src/routes';

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
      <Routes />
    </NavigationContainer>
  )
}

export default App;