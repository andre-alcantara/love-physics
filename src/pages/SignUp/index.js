import React, { useState, useContext } from 'react';
import { TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../contexts/auth';

import { 
    Background,
    Wrapper, 
    Label, 
    SignUpView,
    SignUpDescription,
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
    if(email == '' && password == '' && name == '') {
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
      signUp(email, password, name);
      Alert.alert(
        "Verifique seu e-mail",
        "Nós te enviamos um e-mail com a confirmação, caso não recebe, edite seu e-mail nos Ajustes pra um e-mail válido",
        [
          { text: "OK", onPress: () => {} }
        ],
        { cancelable: false }
      );
    } 
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
        
      <Label>E-mail</Label>
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

          <SignInButton onPress={handleSignUp}>
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

