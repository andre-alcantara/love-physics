import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Container } from './styles';

const Hello = () => {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#9BDCEA', alignItems: 'center', justifyContent: 'center'}}>

        <View style={{
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: hp('3%')
        }}>
        <View style={{
            width: wp('80%'),
            marginTop: hp('-5%'),
            marginBottom: hp('5%'),
        }}>
            <Text style={{
                fontSize: hp('4.5%'),
                fontFamily: 'Montserrat_600SemiBold',

            }}>Bem Vindo,</Text>
            <Text style={{
                fontSize: hp('4.5%'),
                fontFamily: 'Montserrat_800ExtraBold',
                marginBottom: hp('55%'),
                color: '#FF5555'
            }}>Jogador</Text>
        </View>
          
          <LottieView style={{
              height: hp('75%'),
              position: 'absolute'
          }} source={require('../../../astronaut.json')} autoPlay loop />

        
          <LinearGradient
            // Button Linear Gradient
            colors={['#FF5555', 'rgba(214, 98, 98, 0.73)']}
            style={{ padding: hp('2%'), alignItems: 'center', borderRadius: 8, width: wp('50%'), marginBottom: hp('1%'), marginTop: hp('-1%') }}>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Montserrat_700Bold'
              }}>
              COMEÇAR
            </Text>
          </LinearGradient>
        </View>
        
      </SafeAreaView>
  );
}

export default Hello;