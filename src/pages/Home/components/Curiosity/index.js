import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Curiosities from '../../../../data/curiosity'; 
import CuriosityDetail from './components/CuriosityDetail';

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
  const [visible, setVisible] = useState(false);

  return (

    <TouchableOpacity onPress={() => setVisible(true)} >
      <CuriosityCard style={[styles.shadowCard, { marginLeft: 22 }]}>
        <Glasses width={90} height={90} />
        <CuriosityText style={{
          marginTop: 7,
          marginBottom: -7,
        }}>{ title }</CuriosityText>
        </CuriosityCard > 

        <Modal 
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType='slide'
        >
          <CuriosityDetail title={title} close={() => setVisible(false)}/> 
        </Modal>
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