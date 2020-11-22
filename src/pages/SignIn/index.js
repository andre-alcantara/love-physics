import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, TouchableOpacityBase, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { Feather, AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../contexts/auth';

import { 
    Background,
    Wrapper, 
    Description, 
    Label, 
    ForgotButton,
    ForgotText, 
    SignInButton,
    SignInText,
    SignUpView,
    SignUpDescription,
    SignUpButton,
    Icon,
    SignUpText
} from './styles';

import { Input, Title } from '../ForgotPassword/styles';

import Logo from '../../img/google.svg';

export default function SignIn({ navigation }) {
  const [secureText, setSecureText] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    if(email == '' && password == '') {
      Alert.alert(
        "Ops!",
        "Por favor, digite suas informações!",
        [
          { text: "OK", onPress: () => {} }
        ],
        { cancelable: false }
      );
    } 
    else {
      signIn(email, password);
    }
  }

  return (
    <Background>

      <StatusBar style="dark" />
      <Title>Entre com sua conta</Title>
      <Wrapper>

      <Label style={{marginTop: hp('7%')}}>E-mail</Label>
      <Input 
        placeholder='exemplo@exemplo.com'
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
        <Label>Senha</Label>
        <Input 
          placeholder='Sua senha...'
          errorStyle={{ fontFamily: 'Montserrat_600SemiBold' }}
          inputStyle={{ fontFamily: 'Montserrat_500Medium', fontSize: hp('2.2%') }}
          errorMessage='Error Message'
          secureTextEntry={secureText}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
       
    

       <ForgotButton onPress={() => navigation.navigate('ForgotPassword')}>
            <ForgotText>Esqueceu a senha?</ForgotText>
          </ForgotButton>

          <SignInButton 
          onPress={handleLogin}>
            <SignInText>Entrar</SignInText>
          </SignInButton>
              
            <SignUpView>
                <SignUpDescription>
                    Não possui uma conta? 
                </SignUpDescription>

                <TouchableOpacity onPress={() => navigation.navigate('Criar Conta')}>
                    <SignUpText style={{
                      color: '#FF5555',
                      marginLeft: wp('0%'),
                    }}> Criar Conta</SignUpText>
                </TouchableOpacity>
            </SignUpView>
        </Wrapper>
       
      </Background>
  );
}

