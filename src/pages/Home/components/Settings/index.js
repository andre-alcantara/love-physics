import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Character from '../../../../assets/characters/character1.svg';
import { Input } from 'react-native-elements';
import { AuthContext } from '../../../../contexts/auth';
import { ThemeProvider } from 'styled-components';
import Switch from 'expo-dark-mode-switch';
import Modal from 'react-native-modal';
import Photo from './components/Photo';

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
  EditView,
  Content,
  Edit
} from './styles';

const Settings = ({ close }) => {
  const [visible, setVisible] = useState(false);
  const [visiblePhoto, setVisiblePhoto] = useState(false);
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
            <Character height={110} width={110} />
            <EditButton onPress={() => setVisiblePhoto(true)}>
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
            disabled={true}
            rightIcon={
              <EditButton onPress={() => setVisible(true)}>
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
            disabled={true}
            rightIcon={
              <EditButton onPress={() => setVisible(true)}>
                <EditText>Editar</EditText>
              </EditButton>
            }
          />
        </InputView>
        <DarkModeView>
          <DarkModeText>Modo Escuro</DarkModeText>
          <Switch value={dark} onChange={() => setDark(!dark)} />
        </DarkModeView>
        
        <DarkModeView>
          <DarkModeText style={{
            color: '#FF5555'
          }}>Sair</DarkModeText>
          
        </DarkModeView>

        <Modal 
        onBackdropPress={() => setVisible(false)}
        isVisible={visible}
        coverScreen={true}
        >
        <EditView>
          <Content>
  
          <Title style={{
          marginTop:-40,
          marginLeft: 7
        }}>Editar dados</Title>

        <InputView 
          style={{
            marginTop: 40
          }}
        >
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
            value={user && user.name}
            placeholderTextColor={dark ? darkTheme.placeholder : lightTheme.placeholder}
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
            value={user && user.email}
            placeholderTextColor={dark ? darkTheme.placeholder : lightTheme.placeholder}
          />
          <Edit>
            <Text style={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#FFF',
              fontSize: 16
            }}>Salvar alterações</Text>
          </Edit>
        </InputView>
          </Content>
          

        </EditView>
      </Modal>
      <Modal 
        onBackdropPress={() => setVisiblePhoto(false)}
        isVisible={visiblePhoto}
        coverScreen={true}
      >
        <EditView>
          <Content>
  
          <Title style={{
            marginTop:20,
            marginBottom: 20, 
            marginLeft: 7
        }}>Alterar carinha</Title>

       <Photo />
       <Edit style={{
         marginBottom: 10,
         marginTop: -30,
       }}>
        <Text style={{
          fontFamily: 'Montserrat_600SemiBold',
          color: '#FFF',
          fontSize: 16,
          
        }}>Salvar alterações</Text>
      </Edit>
          </Content>
          

        </EditView>
      </Modal>

        </Container>
      </Wrapper>
      
    </ThemeProvider>
  );
}

export default Settings;