import React, { useState } from 'react';
import { View } from 'react-native';

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
        height: 330, 
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
        <StartText>COMECAR</StartText>
        <Start style={{
            marginLeft: 10,  
        }} height={25} width={25} />
      </StartButton>

      </View>
    </Activities>
  );
}

export default Activity;

