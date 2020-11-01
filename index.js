import React, { useEffect } from 'react';
import AuthProvider from './src/contexts/auth';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import Routes from './src/routes/routes';
import AsyncStorage from '@react-native-community/async-storage';


import { useStateValue } from './src/contexts/theme';

import { useFonts, 
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black
  } from '@expo-google-fonts/montserrat';

  
  
  const App = () => {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
      async function getStorageDarkMode() {
        const darkModeKey = await AsyncStorage.getItem('DarkModeKey');

        if(darkModeKey === 'true') {
          dispatch ({
            type: "enable"
          });
          return;
        }

        dispatch({
          type: "disable"
        });
      }

      getStorageDarkMode();
    }, []);

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
        <ThemeProvider theme={state.theme}>
          <NavigationContainer>
            <AuthProvider>
              <StatusBar 
                barStyle={state.theme.statusBarStyle}
              />
              <Routes />
            </AuthProvider>
          </NavigationContainer>
        </ThemeProvider>
    )
  }
  
  export default App;
  
  console.disableYellowBox = true;

  {
    /*
    <ThemeProvider theme={}>

    </ThemeProvider>
    */
  }