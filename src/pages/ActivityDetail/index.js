import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Lesson from '../../components/Lesson';
import questions from '../../data/answers';

import { Wrapper, 
  ExitButton, 
  Exit, 
  Header, 
  Title,
  TitleView,
} from './styles';

const ActivityDetail = ({ route, navigation }) => {
  const { question } = route?.params;

  

  return (
    <Wrapper style={{
      backgroundColor: question.matterColor
    }}>
      <Exit>
        <ExitButton onPress={() => navigation.goBack()}>
          <AntDesign style={{ alignSelf: 'flex-end' }} name="close" size={28} color="black" />                                          
        </ExitButton>
      </Exit>

      <Header>
        <Image 
        style={{
          width: 103,
          height: 100
        }}
        source={{uri: `https://lovephysics.blob.core.windows.net/`}}
        />
        <TitleView>
          <Title>
            {question.matterName}
          </Title>
        </TitleView>
      </Header>
      
      <Lesson color={question.matterColor} question={question} />
    </Wrapper>
  );
}

export default ActivityDetail;