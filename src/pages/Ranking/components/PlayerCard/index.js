import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../../../contexts/auth';

import Character from '../../../../assets/characters/character1.svg';

import {
  CenterStat, 
  Nickname,
  Stat,
  Number,
  EndStat
} from './styles';

export default function PlayerCard() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <LinearGradient
      colors={['#FF5555', '#E38686']}
      style={styles.statsView}>

      <CenterStat>
        <Character height={75} width={75} />
        
      </CenterStat>

      

      <EndStat>
        <Number style={{ color: '#FFC107' }}>100</Number>
        <Stat style={{ color: '#FFC107' }}>Estrelas</Stat>
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
    width: 226,
   
  },

  container: {
    alignItems: 'center',
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
