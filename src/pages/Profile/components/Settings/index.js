import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Character from '../../../../assets/characters/character1.svg';

import { Wrapper, 
  Header, 
  TitleView,
  Back, 
  Title,
  AvatarView,
  EditButton,
  EditText
} from './styles';

const Settings = ({ close }) => {
  return (
    <Wrapper>
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
            <EditText>Editar</EditText>
          </EditButton>
        </AvatarView>
        
      </Header>
    </Wrapper>
  );
}

export default Settings;