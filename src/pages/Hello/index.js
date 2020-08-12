import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

// import { Container } from './styles';

const Hello = () => {
  return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: '#9BDCEA'}}>
          <Text style>Bem Vindo, Jogador!</Text>
          <LottieView style={{
              height: 800,
              width: 800,
              marginLeft: 10,
              marginTop: 30,
          }} source={require('../../../astronaut.json')} autoPlay loop />
      </View>
  );
}

export default Hello;