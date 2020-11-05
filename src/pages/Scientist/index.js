import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import Scientists from '../../data/scientists';

import firebase from '../../services/firebaseConnection';


import { Feather } from '@expo/vector-icons';
import { Wrapper, Icon,Content, SearchBar,  ListView, Header, TextView, Title, List } from './styles';

import ScientistList from '../../components/ScientistList'; 
import scientists from '../../data/scientists';

const Scientist = () => {   
  const [scientist, setScientist] = useState([]);
 


  useEffect(() => {
    async function loadScientist() {
      await firebase.database().ref('scientists/1/name')
      .once('value').then(snapshot => {
        setScientist([]);

        setScientist(snapshot.val());
      });

    }
  
    loadScientist();
    

  }, []);

  console.log(scientist)


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
            data={scientist}
            renderItem={({ item }) => <ScientistList data={item.name} />
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