import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Button, TextView, Name, Life } from './styles';

import Marie from '../../../../assets/scientist/scientist.svg';

const ScientistList = ({ scientist, life }) => {
  return (  
    <Button style={styles.button}>
      <Marie width={65} height={65} />
      <TextView>
        <Name>{scientist}</Name>
        <Life>{life}</Life>
      </TextView>
    </Button>
  );
}

export default ScientistList;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2, 
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})