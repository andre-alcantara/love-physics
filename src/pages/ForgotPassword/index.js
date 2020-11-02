import React, { useEffect, useState } from 'react';

import { Wrapper, Title, SubTitle, Input, SendButton, SendText } from './styles';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Wrapper>
      <Title>Insira seu email</Title>
      <SubTitle>
        Nós te enviaremos uma senha temporária, uma vez dentro do app para o email inserido,
        clique na sua foto de perfil e atualize sua senha.
      </SubTitle>
      <Input 
        placeholder='exemplo@exemplo.com'
        autoCorrect={false}
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <SendButton>
        <SendText>Enviar</SendText>
      </SendButton>
    </Wrapper>
  );
}

export default ForgotPassword;