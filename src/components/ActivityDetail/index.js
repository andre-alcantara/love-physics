import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Lesson from '../Lesson';

import { Wrapper, 
  ExitButton, 
  Exit, 
  Header, 
  Title,
  TitleView,
} from './styles';

const Introduce = ({ close, title, icon, color }) => {
  return (
    <Wrapper style={{
      backgroundColor: color
    }}>
      <Exit>
        <ExitButton onPress={close}>
          <AntDesign style={{ alignSelf: 'flex-end' }} name="close" size={28} color="black" />                                          
        </ExitButton>
      </Exit>

      <Header>
        <Image 
        style={{
          width: 103,
          height: 100
        }}
        source={{uri: `https://lovephysics.blob.core.windows.net/${icon}`}}
        />
        <TitleView>
          <Title>
            {title}
          </Title>
        </TitleView>
      </Header>
      
      <Lesson color={color} />
    </Wrapper>
  );
}

export default Introduce;