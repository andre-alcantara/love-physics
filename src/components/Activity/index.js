import React, { useState } from 'react';
import { Modal, View, Image } from 'react-native';


import { useNavigation } from '@react-navigation/native';

import { Activities, 
  ActivitiesText, 
  StartButton, 
  StartText 
} from './styles';

import Start from '../../assets/button/start.svg';

const Activity = ({ title, color, icon, id }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <Activities onPress={() => navigation.navigate('ActivityDetail', {
      title: title,
      color: color,
      icon: icon,
      id: id,
    })}>
      <View style={{
        marginLeft: 20,
        height: 300, 
        width: 260,
        backgroundColor: color,
        borderRadius: 20,
        paddingLeft: 25,
        paddingTop: 25,
        
      }} >
       <Image 
        style={{
          width: 135,
          height: 130,
        }}
        source={{uri: `https://lovephysics.blob.core.windows.net/${icon}`}}
        />
      <ActivitiesText>
        {title}
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

