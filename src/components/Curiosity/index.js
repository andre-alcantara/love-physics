import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import firebase from '../../services/firebaseConnection'
 
import CuriosityDetail from '../CuriosityDetail';

import { Activities, 
  CuriosityCard, 
  CuriosityText,  
} from './styles';

import Glasses from '../../assets/curiosity/glasses.svg';

const Curiosity = ({ title, desc, image }) => {
  const [visible, setVisible] = useState(false);

  
  return (

    <TouchableOpacity onPress={() => setVisible(true)} >
      <CuriosityCard style={[styles.shadowCard, { marginLeft: 22 }]}>
      <Image
          style={{
            height: 70,
            width: 70,
            marginBottom: 10,
          }} 
          source={{uri : `${ image }` }}
            
          />
        <CuriosityText numberOfLines={2} style={{
          marginTop: 7,
          marginBottom: -7,
        }}>{ title }</CuriosityText>
        </CuriosityCard > 

        <Modal 
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType='slide'
        >
          <CuriosityDetail title={title} desc={desc} image={image} close={() => setVisible(false)}/> 
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