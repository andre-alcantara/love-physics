import React, { useContext, useState, } from 'react';
import { StyleSheet, Modal, Image, TouchableOpacity } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Button, Name, ImageView } from './styles';

import ScientistDetail from '../ScientistDetail';

const ScientistList = ({ data }) => {
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
          scientist = {data.name}
          image = {data.image}
          life = {data.life}
          who={data.who}
          award={data.award}
          nationality={data.nationality}
        />
      </Modal>
      

      <ImageView>
      <Image 
          style={{
            height: 45,
            width: 45
          }}
    
          source={{uri : `${data.image}` }}
        />

      </ImageView>
        
      
        <Name>{data.name}</Name>
        
      
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