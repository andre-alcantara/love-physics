import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Scientists from '../../data/scientists';

import { Wrapper, Header, TextView, Title, List } from './styles';

import ScientistList from './components/ScientistList'; 

const Scientist = () => {   
  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Físicos</Title>
        </TextView>                                                             
      </Header>
   
        <FlatList 
          keyExtractor={item => item.id}
          data={Scientists}
          renderItem={({ item }) => <ScientistList scientist={item.name} 
          life={item.life} id={item.id} />} 
        />
      
      
    </Wrapper>
  ); 
}

export default Scientist;

const styles = StyleSheet.create({
  shadowCard: {
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