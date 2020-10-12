import React, { useContext, useState } from 'react';
import { StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';

import Character from '../../assets/characters/character1.svg';

import Settings from './components/Settings';

import { Content, ListView, Header } from '../Scientist/styles';
import { Wrapper, 
  Title,
  TextView,
  Icon
} from './styles';
import { Nickname } from '../Ranking/components/PlayerCard/styles';

const Profile = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { user, signOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Perfil</Title>
            <Icon onPress={() => setVisible(true)}>
            <Octicons name="settings" size={30} color="black" />
          </Icon>
        </TextView>
       
      </Header>


      <Modal 
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType='slide'
      >
        <Settings close={() => setVisible(false)} />

      </Modal>
      <ListView style={{
        marginTop: 25,
        paddingTop: 95,
        alignItems: 'center',
      }}>
        <Content style={{
          alignItems: 'center',
        }}>
          <Character style={styles.shadow} height={150} width={150} />  
        </Content>
        <Nickname style={{
          marginTop: -15,
          fontSize: 22,
        }}>
          { user.name }
        </Nickname>
        <TouchableOpacity onPress={() => signOut()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </ListView>
      
    </Wrapper>
  );
}

export default Profile;


const styles = StyleSheet.create({
  shadow: {
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  }
})