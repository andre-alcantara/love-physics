import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Activities, 
  CuriosityCard, 
  CuriosityText,  
} from './styles';

import Glasses from '../../../../assets/curiosity/glasses.svg';
import Sky from '../../../../assets/curiosity/sky.svg';
import Mirage from '../../../../assets/curiosity/mirage.svg';
import Fire from '../../../../assets/curiosity/fire.svg';
import BlackHole from '../../../../assets/curiosity/blackhole.svg';

const Curiosity = () => {
  return (
    <Activities horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity>
      <CuriosityCard style={[styles.shadowCard, {marginLeft: 22}]}>
        <Glasses width={90} height={90} />
        <CuriosityText style={{
          marginTop: 7,
          marginBottom: -7,
        }}>Como funciona o cinema 3D?</CuriosityText>
        </CuriosityCard > 
      </TouchableOpacity>
      
      <TouchableOpacity>
        <CuriosityCard style={styles.shadowCard}>
          <Sky width={90} height={90} />
          <CuriosityText style={{
            marginTop: 7,
            marginBottom: -7,
          }}>Por que o céu é azul?</CuriosityText>
        </CuriosityCard>
      </TouchableOpacity>

      <TouchableOpacity>
        <CuriosityCard style={styles.shadowCard}>
          <Mirage width={75} height={75} />
          <CuriosityText style={{
            marginTop: 15,
            marginBottom: -15,
          }}>O que são miragens?</CuriosityText>
        </CuriosityCard>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <CuriosityCard style={styles.shadowCard}>
          <Fire width={75} height={75} />
          <CuriosityText style={{
            marginTop: 15,
            marginBottom: -15,
          }}>Porque a água apaga o fogo?</CuriosityText>
        </CuriosityCard>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <CuriosityCard style={[styles.shadowCard, {marginRight: 20,}]}>
          <BlackHole width={90} height={90} />
          <CuriosityText style={{
            width: 130,
            marginTop: 9,
            marginBottom: -9,
          }}>O que são buracos negros?</CuriosityText>
        </CuriosityCard>
      </TouchableOpacity>
  </Activities>
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