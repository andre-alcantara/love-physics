import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import Scientists from '../../data/scientists';

import firebase from '../../services/firebaseConnection';


import { Feather } from '@expo/vector-icons';
import { Wrapper, Icon,Content, SearchBar,  ListView, Header, TextView, Title, List } from './styles';

import ScientistList from '../../components/ScientistList'; 
import scientists from '../../data/scientists';

const Scientist = () => {   
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

 


  return (
    <Wrapper>      
      
    
      <Header>
        <TextView>
          <Title>Cientistas</Title>
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
            keyExtractor={item => item.key}
            data={scientists}
            renderItem={({ item }) => <ScientistList data={item} />
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