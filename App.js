import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// themes
import lightTheme from './src/themes/light';
import darkTheme from './src/themes/dark';

import { StateProvider } from './src/contexts/theme';

import App from './index';

const Index = () => {
  const initialState = { theme: lightTheme };

  async function updateStorage(state) {
    try{
      await AsyncStorage.setItem('DarkModeKey', state.toString());
    }
    catch(err){
      console.log('Error', err)
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "enable":
        updateStorage(true);
        return {
          ...state,
          theme: darkTheme
        };
        case "disable":
          updateStorage(false);
          return {
            ...state,
            theme: lightTheme
          };
          default: 
            return state;
         
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}> 
      <App />
    </StateProvider>
  )
}

export default Index;

