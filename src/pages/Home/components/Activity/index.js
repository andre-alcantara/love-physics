import React from 'react';

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

const Activity = () => {
  return (
    <Activities horizontal={true} showsHorizontalScrollIndicator={false}>
      <MathCard style={{
        marginLeft: -20,
      }} height={330} width={330} />
      <MathIcon style={{
        position: 'absolute',
        marginLeft: 40,
        marginTop: 20,
      }} height={130} width={130} /> 
      <ActivitiesText>Matemática</ActivitiesText>
      <StartButton>
        <StartText>COMECAR</StartText>
        <Start style={{
            marginLeft: 10,  
        }} height={25} width={25} />
      </StartButton>

      <SpeedCard style={{
        marginLeft: -65
      }} height={330} width={330} />
      <SpeedIcon style={{
        position: 'absolute',
        marginLeft: 310,
        marginTop: 20,
      }} height={130} width={130} />
      <ActivitiesText style={{
        marginLeft: 310,
      }}>Velocidade</ActivitiesText>
      <StartButton style={{
        marginLeft: 310
      }}>
      <StartText>COMECAR</StartText>
      <Start style={{
        marginLeft: 10, 
      }} height={25} width={25} />
      </StartButton>           
    </Activities>
  );
}

export default Activity;