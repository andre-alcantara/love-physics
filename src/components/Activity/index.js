import React, { useState } from 'react';
import { Modal, View, Image } from 'react-native';


import { useNavigation } from '@react-navigation/native';

import { Activities, 
  ActivitiesText, 
  StartButton, 
  StartText 
} from './styles';

import Start from '../../assets/button/start.svg';

const Activity = ({ question }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  console.log(question.matterIcon)

  return (
    <Activities onPress={() => navigation.navigate('ActivityDetail', {
     question: question
    })}>
      <View style={{
        marginLeft: 20,
        height: 300, 
        width: 260,
        backgroundColor: question.matterColor,
        borderRadius: 20,
        paddingLeft: 25,
        paddingTop: 25,
        
      }} >

      <Image
        style={{
          height: 110,
          width: 114,
            
        }} 
        source={{uri : `${ question.matterIcon }` }}
            
        />
       
      <ActivitiesText>
        {question.matterName}
      </ActivitiesText>


      <StartButton>
        <StartText>ESTUDAR</StartText>
        <Start style={{
            marginLeft: 10,  
        }} height={25} width={25} />
      </StartButton>

      </View>

      
  
    </Activities>

    
    );
    }

export default Activity;

