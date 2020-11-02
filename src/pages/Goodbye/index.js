import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../contexts/auth';

import { Wrapper, Container, InputView, Title, Name, TextButton } from './styles';

const GoodBye = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>

        <InputView>
          <Title> 👋 </Title>
          <Name>Sentiremos sua falta, volta logo tá?</Name>
        </InputView>
          
          <LottieView style={{
              height: hp('75%'),
              position: 'absolute'
          }} source={require('../../../astronaut.json')} autoPlay loop />

        <TouchableOpacity onPress={signOut}
        style={{
          padding: 20,
        }}>
          <LinearGradient
            colors={['#FF5555', 'rgba(214, 98, 98, 0.73)']}
            style={{ padding: hp('2%'), alignItems: 'center', borderRadius: 8, width: wp('50%'), marginBottom: hp('1%'), marginTop: hp('-1%') }}>
            <TextButton>SAIR</TextButton>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Title>👉  Mudei de ideia  👈</Title> 
        </TouchableOpacity>
         
      </Container>    
    </Wrapper>
  );
}

export default GoodBye;