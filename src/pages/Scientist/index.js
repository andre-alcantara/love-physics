import React from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import Scientists from '../../data/scientists';

import { Feather } from '@expo/vector-icons';
import { Wrapper, Icon,Content, SearchBar,  ListView, Header, TextView, Title, List } from './styles';

import ScientistList from '../../components/ScientistList'; 

const Scientist = () => {   

  return (
    <Wrapper>      
      
    
      <Header>
        <TextView>
          <Title>Físicos</Title>
        </TextView>
                                                                 
      </Header>

      
      
      <ListView>
        <Content>
      <SearchBar 
        style={styles.shadow}
        placeholder='Digite para pesquisar...'
        placeholderTextColor="#A9A9A9"
      />    
      <Icon>
        <Feather name="search" size={24} color="#A9A9A9" />
      </Icon>
      
      </Content>
        <FlatList 
            contentContainerStyle={{
              paddingBottom: 145,
              
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={Scientists}
            renderItem={({ item }) => <ScientistList scientist={item.name} 
            life={item.life} id={item.id} image={item.image} who={item.who}
            award={item.award}
            />
          } 
          /> 
      </ListView> 
    </Wrapper>
  ); 
}

const styles = StyleSheet.create({
  shadow: {
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

export default Scientist;