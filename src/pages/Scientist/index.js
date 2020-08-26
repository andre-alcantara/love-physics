import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Wrapper, Header, TextView, Title, List } from './styles';

import ScientistList from './components/ScientistList'; 

const Scientist = () => {   
  const scientist = [
    { id: 1, name: 'Nikola Tesla', life: '1856 - 1943' },
    { id: 2, name: 'Albert Eistein', life: '1879 - 1955' },
    { id: 3, name: 'Marie Cure', life: '1867 - 1934' },
    { id: 4, name: 'Isaac Newton', life: '1642 - 1727' },
    { id: 5, name: 'Marie Cure', life: '1867 - 1934' },
    { id: 6, name: 'Marie Cure', life: '1867 - 1934' },
    { id: 7, name: 'Marie Cure', life: '1867 - 1934' },

  ]

  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Físicos</Title>
        </TextView>                                                             
      </Header>
   
        <FlatList 
          keyExtractor={item => item.id}
          data={scientist}
          renderItem={({ item }) => <ScientistList scientist={item.name} life={item.life} />} 
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