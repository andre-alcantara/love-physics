import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar'
import { Feather, AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    Background,
    Wrapper, 
    Header,
    TextView,
    Title, 
    Description, 
    InputView,
    Label, 
    ForgotButton,
    ForgotText, 
    SignInButton,
    SignInText,
    SignUpView,
    SignUpDescription,
    SignUpButton,
    SignUpText
} from './styles';

import Logo from '../../img/google.svg';
import Facebook from '../../img/facebook.svg';

export default function SignIn({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <Background source={require('../../img/background.png')}>

      <KeyboardAwareScrollView enableOnAndroid={true}>
      <StatusBar style="dark" />
      <Wrapper>
        
        <Header>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <AntDesign style={{ alignSelf: 'flex-end', marginTop: 12, marginBottom: -12  }} name="close" size={hp('3.5%')} color="black" />                                          
          </TouchableOpacity>
        </Header>
        
      
        <Title>Login</Title>
        <Description>Apenas um minuto para você utilizar o LovePhysics!</Description>
        
        <Label style={{marginTop: hp('7%')}}>EMAIL</Label>
        <Input 
          containerStyle={{ marginTop: hp('1%') }}
          inputStyle={{ fontFamily: 'Montserrat_500Medium', fontSize: hp('2.2%') }}
          placeholder='exemplo@exemplo.com'
          errorStyle={{ fontFamily: 'Montserrat_600SemiBold' }}
          errorMessage='Error Message'
        />

        <Label>SENHA</Label>
        <Input 
          placeholder='Sua senha...'
          errorStyle={{ fontFamily: 'Montserrat_600SemiBold' }}
          inputStyle={{ fontFamily: 'Montserrat_500Medium', fontSize: hp('2.2%') }}
          errorMessage='Error Message'
          rightIcon={
            (secureText) ?
            <TouchableOpacity onPress={() => setSecureText(false)}>
              <Feather name="eye" size={24} color="#A9A9A9" />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => setSecureText(true)}>
              <Feather name="eye-off" size={24} color="#A9A9A9" />
            </TouchableOpacity>
          }
          secureTextEntry={secureText}
        />
       
          <ForgotButton>
            <ForgotText>Esqueceu a senha?</ForgotText>
          </ForgotButton>

          <SignInButton 
          onPress={() => navigation.navigate('Hello')}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <SignInText>Entrar</SignInText>
          </SignInButton>
              
          <SignUpButton style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            
            elevation: 5,
          }}>
            <Logo style={{
              marginLeft: wp('3.3%')
            }} width={40} height={wp('5.5%')} />
            <SignUpText>Entrar com Google</SignUpText>
          </SignUpButton>


            <SignUpView>
                <SignUpDescription>
                    Não possui uma conta? 
                </SignUpDescription>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <SignUpText style={{
                      color: '#FF5555',
                      marginLeft: wp('0%'),
                    }}> Criar Conta</SignUpText>
                </TouchableOpacity>
            </SignUpView>
        </Wrapper>
        </KeyboardAwareScrollView>
      </Background>
  );
}

