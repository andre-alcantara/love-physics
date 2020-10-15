import React from 'react';
import { View, Text } from 'react-native';
import { Edit } from '../../styles';

import { 
  ProfileView, 
  Current,
  ProfilePhoto,
  Profile,
  ChoosePhoto,
  ChooseText,
} from './styles';

const Photo = () => {
  return (
    <ProfileView>
      <Profile>
        <Current>Sua foto atual:</Current>
        <ProfilePhoto>
          <Text>Foto do cara</Text>
        </ProfilePhoto>
      </Profile>
      
      <ChoosePhoto>
        <ChooseText>
          Selecionar foto
        </ChooseText>
      </ChoosePhoto>

      
      
    </ProfileView>
    );
}

export default Photo;