import React, { useState } from 'react';
import { Modal, View, Image } from 'react-native';

import Introduce from './components/Introduce';

import { Activities, 
  ActivitiesText, 
  StartButton, 
  StartText 
} from './styles';

import MathCard from '../../../../assets/button/mathCard.svg';
import MathIcon from '../../../../assets/button/mathIcon.svg';
import SpeedCard from '../../../../assets/button/speedCard.svg';
import SpeedIcon from '../../../../assets/button/speedIcon.svg';
import Start from '../../../../assets/button/start.svg';

const Activity = ({ title, color, icon }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Activities onPress={() => setVisible(true)}>
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

      
      <Modal 
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType='slide'
      >
        <Introduce 
          close={() => setVisible(false)} 
          title={title} 
          icon={icon}
          color={color}
          />
      </Modal>
    </Activities>

    
    );
    }

export default Activity;

