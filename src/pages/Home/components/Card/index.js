import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { ScientistCard, 
  ScientistText,
  ScientistDesc 
} from './styles';

import Scientist from '../../../../assets/scientist/scientist.svg';

const Card = () => {
  return (
    <ScientistCard style={styles.shadowCard}>
      <Scientist style={{
        marginLeft: 15,
        marginTop: 25,
      }} height={100} width={100} />
          
      <ScientistText></ScientistText> 
      <ScientistDesc>Foi uma física polonesa naturalizada francesa, 
        que conduziu pesquisas pioneiras em todo o mundo no ramo da radioatividade.
      </ScientistDesc>
            
      <TouchableOpacity style={{
        marginLeft: 16,
        marginTop: 12,  
        width: 100,
      }} onPress={() => alert('Oi')}>
        <Text style={{
          color: '#FF5555',
          textAlign: 'center',
          fontFamily: 'Montserrat_600SemiBold'
        }}>Saiba Mais</Text> 
      </TouchableOpacity>    
    </ScientistCard>
  );
}

export default Card;

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