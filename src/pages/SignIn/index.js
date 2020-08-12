import React from 'react';
import { ImageBackground } from 'react-native';
import { Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

import { 
    Background,
    Wrapper, 
    Title, 
    Description, 
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


const SignIn = () => {
  return (
    <Background source={require('../../img/background.png')} >
        <Wrapper>
            <Title>Bem-vindo de volta</Title>
            <Description>Apenas um minuto para você utilizar Love Physics!</Description>

            <Label>Email</Label>
            <Input 
            placeholder='exemplo@exemplo.com'
            errorMessage='Erro'
            rightIcon={
                <Feather name="eye" size={24} color="black" />
            }
            />

            <Label>Senha</Label>
            <Input 
            placeholder='exemplo@exemplo.com'
            errorMessage='Erro'
            rightIcon={
                <Feather name="eye" size={24} color="black" />
            }
            secureTextEntry={true}
            />

            <ForgotButton>
                <ForgotText>Esqueceu a senha?</ForgotText>
            </ForgotButton>

            <SignInButton>
                <SignInText>Entrar</SignInText>
            </SignInButton>

            <SignInButton>
                <SignInText>Entrar com o Google</SignInText>
            </SignInButton>

            <SignUpView>
                <SignUpDescription>
                    Não possui uma conta?
                </SignUpDescription>

                <SignUpButton>
                    <SignUpText>Criar Conta</SignUpText>
                </SignUpButton>
            </SignUpView>
        </Wrapper>
    </Background>
  );
}

export default SignIn;