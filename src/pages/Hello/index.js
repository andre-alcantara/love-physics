import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import { Container } from './styles';

const Hello = () => {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#9BDCEA', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{
            width: wp('80%'),
            marginTop: hp('2%'),

        }}>
            <Text style={{
                fontSize: 35,
                fontFamily: 'Montserrat_600SemiBold'
            }}>Bem Vindo,</Text>
            <Text style={{
                fontSize: 35,
                fontFamily: 'Montserrat_800ExtraBold'
            }}>Jogador</Text>
        </View>
          
          <LottieView style={{
              height: hp('75%'),
          }} source={require('../../../astronaut.json')} autoPlay loop />
      </SafeAreaView>
  );
}

export default Hello;