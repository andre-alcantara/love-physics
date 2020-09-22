import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Button, TextView, Name, Life } from './styles';

import Marie from '../../../../assets/scientist/scientist.svg';

const ScientistList = ({ scientist, life, id, image }) => {
  return (  
    <Button style={styles.button} onPress={() => alert(id)}>
      
      
        { image }
      
        <Name>{scientist}</Name>
        <Life>{life}</Life>
      
    </Button>
  );
}

export default ScientistList;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2, 
    },
    shadowOpacity: 0.40,
    shadowRadius: 5,
    elevation: 5,
  }
})