import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Curiosities from '../../../../data/curiosity'; 

import { Activities, 
  CuriosityCard, 
  CuriosityText,  
} from './styles';

import Glasses from '../../../../assets/curiosity/glasses.svg';
import Sky from '../../../../assets/curiosity/sky.svg';
import Mirage from '../../../../assets/curiosity/mirage.svg';
import Fire from '../../../../assets/curiosity/fire.svg';
import BlackHole from '../../../../assets/curiosity/blackhole.svg';

const Curiosity = ({ title }) => {
  return (

    <TouchableOpacity onPress={() => {}} >
      <CuriosityCard style={[styles.shadowCard, { marginLeft: 22 }]}>
        <Glasses width={90} height={90} />
        <CuriosityText style={{
          marginTop: 7,
          marginBottom: -7,
        }}>{ title }</CuriosityText>
        </CuriosityCard > 
      </TouchableOpacity>
   
  );
}

export default Curiosity;

const styles = StyleSheet.create({
  shadowCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.40,
    shadowRadius: 5,
    elevation: 6,
  }
})