import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Scientists from '../../data/scientists';


import { Wrapper, Container,  ListView, Header, TextView, Title, List } from './styles';

import ScientistList from './components/ScientistList'; 

const Scientist = () => {   
  return (
    <Wrapper>      
    <Container>
      <Header>
        <TextView>
          <Title>Físicos</Title>
        </TextView>                                                             
      </Header>
   
      <ListView>
        <FlatList 
            keyExtractor={item => item.id}
            contentContainerStyle={{ 
              alignItems: 'center'
              
            }}
            data={Scientists}
            numColumns={2}
            renderItem={({ item }) => <ScientistList scientist={item.name} 
            life={item.life} id={item.id} image={item.image}/>} 
          />
      </ListView>
        
      
      </Container>  
    </Wrapper>
  ); 
}

export default Scientist;