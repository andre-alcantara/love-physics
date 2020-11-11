import React, { useEffect } from 'react';
import AuthProvider from './src/contexts/auth';
import ScientistsProvider from './src/contexts/scientist';
import CuriositiesProvider from './src/contexts/curiosity';
import QuestionsProvider from './src/contexts/questions';
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
              <CuriositiesProvider>
                <ScientistsProvider>
                  <QuestionsProvider>
                    <StatusBar 
                      barStyle={state.theme.statusBarStyle}
                      backgroundColor={state.theme.background}
                    />
                    <Routes />
                  </QuestionsProvider>
                </ScientistsProvider>
              </CuriositiesProvider>
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