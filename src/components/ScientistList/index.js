import React, { useState } from 'react';
import { StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';

import { Button, Name, ImageView } from './styles';

import ScientistDetail from '../ScientistDetail';

const ScientistList = ({ scientist, life, who, image, award }) => {
  const [visible, setVisible] = useState(false);

  return (  
    <Button style={styles.button} onPress={() => setVisible(true)}>
      <Modal 
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType='slide'
      >
        <ScientistDetail 
          close={() => setVisible(false)} 
          scientist = {scientist}
          image = {image}
          life = {life}
          who={who}
          award={award}
        />
      </Modal>

      <ImageView>
        { 
          // FOTO NO BANCO (Gustavo) 
        }
      </ImageView>
        
      
        <Name>{scientist}</Name>
        
      
    </Button>
  );
}

export default ScientistList;

const styles = StyleSheet.create({
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  }
})