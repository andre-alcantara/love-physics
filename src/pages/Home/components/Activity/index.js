import React, { useState } from 'react';
import { Modal, View } from 'react-native';

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
    <Activities>
      <View style={{
        marginLeft: 20,
        height: 285, 
        width: 260,
        backgroundColor: color,
        borderRadius: 20,
        paddingLeft: 25,
        paddingTop: 25,
        
      }} >
      {icon}
      <ActivitiesText>
        {title}
      </ActivitiesText>


      <StartButton onPress={() => setVisible(true)}>
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

