import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, TextInput , KeyboardAvoidingView} from 'react-native';
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
    Description, 
    InputView,
    Label, 
    ForgotButton,
    ForgotText, 
    SignUpView,
    SignUpDescription,
    SignUpButton,
    SignUpText
} from './styles';

import { Input, Title } from '../ForgotPassword/styles';
import { SignInButton, SignInText } from '../SignIn/styles';

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
    <Background>


       <KeyboardAvoidingView>

       
       <Title>Crie sua conta</Title>
      <Wrapper>
        
        
     
      <Label style={{marginTop: hp('7%')}}>Nickname</Label>
      <Input 
        maxLength={8}
        placeholder='Seu nickname'
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={true}
        value={name}
        onChangeText={(text) => setName(text)}
      />
        
      <Label>Email</Label>
      <Input 
        placeholder='exemplo@exemplo.com'
        autoCapitalize='none'
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
        <Label>Senha</Label>
        <Input 
          placeholder='Sua senha...'
          secureTextEntry={secureText}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
       
       
          

          <SignInButton 
          onPress={handleSignUp}>
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

      </Background>
    
  );
}

