import React, { useState, useContext, useEffect } from 'react';
import { Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { AuthContext } from '../../contexts/auth';
import Switch from 'expo-dark-mode-switch';
import Modal from 'react-native-modal';
import Photo from '../../components/Photo';
import { useStateValue } from '../../contexts/theme';
import AsyncStorage from '@react-native-community/async-storage';

import firebase from '../../services/firebaseConnection';

import { useNavigation } from '@react-navigation/native';

import Hello from '../../pages/Goodbye';

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

const Settings = () => {
  const navigation = useNavigation();

  const [photos, setPhotos] = useState([]);

  const [visibleNickname, setVisibleNickname] = useState(false);
  const [visibleEmail, setVisibleEmail] = useState(false);
  const [visiblePhoto, setVisiblePhoto] = useState(false);
  const [state] = useStateValue();
  const [darkMode, setDarkMode] = useState(false);
  const [, dispach] = useStateValue();
  const { loadUser, user, updateUserEmail, updateNickname } = useContext(AuthContext);

  useEffect(() => {
    async function listPhotos() {
      await firebase.database().ref('assets/profilePhotos').on('value', (snapshot)=>{
        setPhotos([]);

        snapshot.forEach((value) =>{
          let photo = {
            key: value.key,
            checked: value.val().checked,
          };
          setPhotos(oldPhotos => [...oldPhotos, photo]);
        })

      });
    }
    listPhotos();
    
    loadUser();
    
  }, []);
 
  useEffect(() => {
    async function getInitialState() {
      const darkModeKey = await AsyncStorage.getItem('DarkModeKey');

      if(darkModeKey === 'true') {
        setDarkMode(true);
        return;
      }
    }

    getInitialState();
  }, []);

  function handleDarkMode() {
    dispach({
      type: !darkMode ? "enable" : "disable"

    })
    setDarkMode(!darkMode)
  }

  
  const [nickname, setNickname] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [password, setPassword] = useState('')

  function updateEmail() {
    if(password === '') {
      Alert.alert(
        "Digite a senha",
        "Por favor, digite sua senha para atualizar seu e-mail",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
      updateUserEmail(email, password);
      setPassword('');
      setVisibleEmail(false);
    }
  }

  function updateNick() {
    if(password === '') {
      alert('Você precisa digitar sua senha!');
    } else {
      updateNickname(nickname, password);
      setPassword('');
      setVisibleNickname(false);
    }
    
  }
  
  return (
    
      <Wrapper>
        <Container>
        <Header>
          <TitleView>
            <Back onPress={navigation.goBack}>
              <Ionicons name="md-arrow-round-back" size={35} color="#5EBACE" />
            </Back>
            <Title>Ajustes</Title>
          </TitleView>

          <AvatarView>
          <EditButton onPress={() => setVisiblePhoto(true)}>
          <Image
          style={{
            height: 100,
            width: 100,
            
          }} 
            source={{uri : `${user.image}` }}
          />
          {console.log(user.image)}
            
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
            placeholderTextColor={state.theme.placeholder}
            disabled={true}
            rightIcon={
              <EditButton onPress={() => setVisibleNickname(true)}>
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
            placeholderTextColor={state.theme.placeholder}
            disabled={true}
            rightIcon={
              <EditButton onPress={() => setVisibleEmail(true)}>
                <EditText>Editar</EditText>
              </EditButton>
            }
          />
        </InputView>
        <DarkModeView>
          <DarkModeText>Modo Escuro</DarkModeText>
          <Switch value={darkMode} onChange={handleDarkMode} />
        </DarkModeView>

        <DarkModeView>
          <TouchableOpacity onPress={() => navigation.navigate('GoodBye')}>
            <DarkModeText style={{
              color: '#FF5555'
            }}>Sair do app</DarkModeText>
          </TouchableOpacity>
        </DarkModeView>

        { /* MODAL EMAIL */ }
        <Modal 
        onBackdropPress={() => setVisibleEmail(false)}
        isVisible={visibleEmail}
        coverScreen={true}
        >
        <EditView>
          <Content>
  
          <Title style={{
          marginTop:-40,
          marginLeft: 7
        }}>Editar e-mail</Title>

        <InputView 
          style={{
            marginTop: 40
          }}
        >
          <Input
            autoCapitalize='none'
            label={'Novo e-mail'}
            labelStyle={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#5EBACE'
            }}
            inputStyle={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: 17,
              marginBottom: -6,
              color: state.theme.placeholder
            }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholderTextColor={state.theme.placeholder}
          />
          <Input
            label={'Sua senha'}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            labelStyle={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#5EBACE'
            }}
            inputStyle={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: 17,
              marginBottom: -6,
              color: state.theme.placeholder
            }}
            
            
            placeholderTextColor={state.theme.placeholder}
          />
          <Edit onPress={updateEmail} >
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

      { /* MODAL NICKNAME */ } 
      <Modal 
        onBackdropPress={() => setVisibleNickname(false)}
        isVisible={visibleNickname}
        coverScreen={true}
        >
        <EditView>
          <Content>
  
          <Title style={{
          marginTop:-40,
          marginLeft: 7
        }}>Editar nickname</Title>

        <InputView 
          style={{
            marginTop: 40
          }}
        >
          <Input
          maxLength={8}
            label={'Novo nickname'}
            labelStyle={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#5EBACE'
            }}
            inputStyle={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: 17,
              marginBottom: -6,
              color: state.theme.placeholder
            }}
            onChangeText={(text) => setNickname(text)}
            value={nickname}
            placeholderTextColor={state.theme.placeholder}
          />
          <Input
            label={'Sua senha'}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            labelStyle={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#5EBACE'
            }}
            inputStyle={{
              fontFamily: 'Montserrat_500Medium',
              fontSize: 17,
              marginBottom: -6,
              color: state.theme.placeholder
            }}
            
            
            placeholderTextColor={state.theme.placeholder}
          />
          <Edit onPress={updateNick}>
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
        <EditView style={{
          height: 280
        }}>
          <Content>
  
          <Title style={{
            marginTop:-20,
            marginBottom: 70, 
            marginLeft: 7
        }}>Alterar carinha</Title>

       <Photo photo={photos} close={() => setVisiblePhoto(false)}/>
       
          </Content>
          

        </EditView>
      </Modal>

        </Container>

        
      </Wrapper>
      
    
  );
}

export default Settings;