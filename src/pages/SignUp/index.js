import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Platform , KeyboardAvoidingView} from 'react-native';
import { Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar'
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../contexts/auth';

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

export default function SignUp({ navigation }) {
  const [secureText, setSecureText] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { signUp } = useContext(AuthContext);

  const handleSignUp = () => {
    signUp(email, password, name);
  }

  return (
    <Background source={require('../../img/background.png')}>

      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} enableOnAndroid={true} enableAutomaticScroll={(Platform.OS === 'ios')}>
       <KeyboardAvoidingView>

       
      
      <Wrapper>
        
        
     
      
        
        <Description>Crie sua conta e experimente o LovePhysics!</Description>
        
        <Label style={{marginTop: hp('7%')}}>NICKNAME</Label>
        <Input 
          maxLength={8}
          autoCapitalize='none'
          autoCorrect={false}
          containerStyle={{ marginTop: hp('1%') }}
          inputStyle={{ fontFamily: 'Montserrat_500Medium', fontSize: hp('2.2%') }}
          placeholder='Seu Nickname...'
          errorStyle={{ fontFamily: 'Montserrat_600SemiBold' }}
          errorMessage='Até 8 caracteres'
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <Label>EMAIL</Label>
        <Input 
        autoCapitalize='none'
          containerStyle={{ marginTop: hp('1%') }}
          inputStyle={{ fontFamily: 'Montserrat_500Medium', fontSize: hp('2.2%') }}
          placeholder='exemplo@exemplo.com'
          errorStyle={{ fontFamily: 'Montserrat_600SemiBold' }}
          errorMessage='Error Message'
          onChangeText={(text) => setEmail(text)}
          value={email}
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
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
       
          

          <SignInButton 
          onPress={handleSignUp}
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
            <SignInText>Criar Conta</SignInText>
          </SignInButton>
              
          

            <SignUpView>
                <SignUpDescription>
                    Já possui uma conta? 
                </SignUpDescription>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <SignUpText style={{
                      color: '#FF5555',
                      marginLeft: wp('0%'),
                    }}> Fazer login</SignUpText>
                </TouchableOpacity>
            </SignUpView>
        </Wrapper>
        </KeyboardAvoidingView>
        </KeyboardAwareScrollView>
      </Background>
    
  );
}

