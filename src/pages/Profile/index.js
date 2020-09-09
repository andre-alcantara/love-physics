import React, { useContext, useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';

import Settings from './components/Settings';

import { Wrapper, 
  Header,
  Title,
  TextView,
  Icon
} from './styles';

const Profile = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { user, signOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Perfil</Title>
          <Icon onPress={() => setVisible(true)}>
            <EvilIcons name="gear" size={35} color="black" />
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

      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Wrapper>
  );
}

export default Profile;