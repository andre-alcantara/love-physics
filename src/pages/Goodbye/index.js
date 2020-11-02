import React, { useContext } from 'react';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../contexts/auth';

import { Wrapper, Container, InputView, Title, Name, TextButton } from './styles';

const Hello = ({ navigation }) => {

  return (
    <Wrapper>
      <Container>

        <InputView>
            <Title>Bem Vindo,</Title>
            <Name>Cefiroti</Name>
        </InputView>
          
          <LottieView style={{
              height: hp('75%'),
              position: 'absolute'
          }} source={require('../../../astronaut.json')} autoPlay loop />

        <TouchableOpacity onPress={() => navigation.replace('TabRoutes')}
        style={{
          padding: 20,
        }}>
          <LinearGradient
            colors={['#FF5555', 'rgba(214, 98, 98, 0.73)']}
            style={{ padding: hp('2%'), alignItems: 'center', borderRadius: 8, width: wp('50%'), marginBottom: hp('1%'), marginTop: hp('-1%') }}>
            <TextButton>COMEÇAR</TextButton>
          </LinearGradient>
        </TouchableOpacity>
         
      </Container>    
    </Wrapper>
  );
}

export default Hello;