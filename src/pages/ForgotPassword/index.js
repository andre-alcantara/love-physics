import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Wrapper, Title, SubTitle, Input, SendButton, SendText } from './styles';



const ForgotPassword = () => {
  const { updatePassword } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  function send() {
    updatePassword(email);
    setEmail('');
  }

  return (
    <Wrapper>
      <Title>Insira seu email</Title>
      <SubTitle>
        Insira o e-mail de sua conta e nós enviaremos um pedido de troca de senha 🔒.
      </SubTitle>
      <Input 
        autoCapitalize='none'
        placeholder='exemplo@exemplo.com'
        autoCorrect={false}
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <SendButton onPress={send} >
        <SendText>Enviar</SendText>
      </SendButton>
    </Wrapper>
  );
}

export default ForgotPassword;