import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Button, Name, ImageView } from './styles';

import ScientistDetail from '../ScientistDetail';

const ScientistList = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const [scientists, setScientists] = useState([]);

  useEffect(() => {
    async function listScientist() {
      await firebase.database().ref('scientists').on('value', (snapshot)=>{
        setScientists([]);

        snapshot.forEach((value) =>{
          let scientist = {
            key: value.key,
            award: value.val().award,
            image: value.val().image,
            life: value.val().life,
            name: value.val().name,
            who: value.val().who,
          };
          setScientists(oldScientist => [...oldScientist, scientist]);
        })

      });
    }
    listScientist();
  }, []);
  console.log(scientists)
  return (  
    <Button style={styles.button} onPress={() => setVisible(true)}>
      <Modal 
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType='slide'
      >
        <ScientistDetail 
          close={() => setVisible(false)} 
          scientist = {() => {}}
          image = {() => {}}
          life = {() => {}}
          who={() => {}}
          award={() => {}}
        />
      </Modal>

      <ImageView>
        { 
          // FOTO NO BANCO (Gustavo) 
        }
      </ImageView>
        
      
        <Name></Name>
        
      
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