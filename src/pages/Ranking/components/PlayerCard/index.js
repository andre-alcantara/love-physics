import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Character from '../../../../assets/characters/character1.svg';

import {
  CenterStat, 
  Nickname,
  StartStat,
  Stat,
  Number,
  Position,
  EndStat
} from './styles';

export default function PlayerCard() {
  return (
    <View style={styles.container}>
    <LinearGradient
      colors={['#FF5555', '#E38686']}
      style={styles.statsView}>

      <CenterStat>
        <Character height={65} width={65} />
        <Nickname>Cefiroti</Nickname>
      </CenterStat>

      <StartStat>
        <Position>
          <Stat style={{ color: '#FFF' }}>Posição</Stat>
          <Number style={{ color: '#FFF' }}>8</Number>
        </Position>  
      </StartStat>

      <EndStat>
        <Stat style={{ color: '#FFC107' }}>Estrelas</Stat>
        <Number style={{ color: '#FFC107' }}>100</Number>
      </EndStat>
      

    </LinearGradient>      
    </View>     
  );
};


const styles = StyleSheet.create({
  statsView: {
    justifyContent: 'flex-end',
    
    marginBottom: -16,
    alignSelf: 'center' ,
   
    borderRadius: 20, 
    height: 140,
    width: '100%',
   
  },

  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  }
})
