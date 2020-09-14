import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Character from '../../../../assets/characters/character1.svg';
import { Input } from 'react-native-elements';
import { AuthContext } from '../../../../contexts/auth';
import { ThemeProvider } from 'styled-components';
import Switch from 'expo-dark-mode-switch';

// themes
import lightTheme from '../../../../themes/light';
import darkTheme from '../../../../themes/dark';

import { Wrapper, 
  Header, 
  TitleView,
  Back, 
  Title,
  AvatarView,
  Container,
  EditButton,
  EditText,
  InputView,
  DarkModeView, 
  DarkModeText,

} from './styles';

const Settings = ({ close }) => {
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState(false);
  const [dark, setDark] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Wrapper>
        <Container>
        <Header>
          <TitleView>
            <Back onPress={close}>
              <Ionicons name="md-arrow-round-back" size={35} color="#5EBACE" />
            </Back>
            <Title>Ajustes</Title>
          </TitleView>

          <AvatarView>
            <Character height={100} width={100} />
            <EditButton>
              <EditText>Alterar</EditText>
            </EditButton>
          </AvatarView>
          
        </Header>

        <InputView>
          <Input
            label={'Nickname'}
            labelStyle={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#5EBACE'
            }}
            inputStyle={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: 17,
              marginBottom: -6
            }}
            placeholder={user && user.name}
            placeholderTextColor={dark ? darkTheme.placeholder : lightTheme.placeholder}
            disabled={disable}
            rightIcon={
              <EditButton onPress={() => setDisable(false)}>
                <EditText>Editar</EditText>
              </EditButton>
            }
          />
          <Input
            label={'E-mail'}
            labelStyle={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#5EBACE'
            }}
            inputStyle={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: 17,
              marginBottom: -6
            }}
            placeholder={user && user.email}
            placeholderTextColor={dark ? darkTheme.placeholder : lightTheme.placeholder}
            disabled={disable}
            rightIcon={
              <EditButton onPress={() => setDisable(false)}>
                <EditText>Editar</EditText>
              </EditButton>
            }
          />
        </InputView>
        <DarkModeView>
          <DarkModeText>Modo Escuro</DarkModeText>
          <Switch value={dark} onChange={() => setDark(!dark)} />
        </DarkModeView>
        
        </Container>
      </Wrapper>
      
    </ThemeProvider>
  );
}

export default Settings;