import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { CuriositiesContext } from '../../contexts/curiosity';
import { QuestionsContext } from '../../contexts/questions';

import { useStateValue } from '../../contexts/theme';

import { Wrapper, Container, 
  Content, Title, 
  List
} from './styles';

import Header from '../../components/Header';
import Curiosity from '../../components/Curiosity';
import Activity from '../../components/Activity';

const Home = ({ navigation }) => {

  
  const [state] = useStateValue();
  
  const { curiosities } = useContext(CuriositiesContext);
  const { matters } = useContext(QuestionsContext);

  const [position, setPosition]= useState(0);
  
  async function array() {
    var qtd = 0;
    for(var i = 0; i < matters.length; i++ ) {
      for(var j = 0; j < matters[i].matterContent.length; j++) {
        qtd += matters[i].matterContent[j].questions.length;
      }
    }
    setPosition(qtd)
  }
  array();
  
  return (
  <Wrapper>

  <Container>
    
  <Header question={position} />





    <Content showsVerticalScrollIndicator={false}>
      <Title>Atividades</Title>

    <View style={{
      height: 350
    }}>
      <List 
        horizontal={true}
        style={{
          heigth: 300,
          paddingRight: 20,
        }}
        contentContainerStyle={{
          paddingRight: 20,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        data={matters}
        renderItem={({ item }) => <Activity question={item} /> } 
    /> 
    </View>
      

      

      <Title style={{
          marginTop: -10
        }}>Curiosidades</Title>
      <List 
        
        horizontal={true}
        contentContainerStyle={{
          marginBottom: 10,
          paddingRight: 30,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        data={curiosities}
        renderItem={({ item }) => <Curiosity title={item.title} id={item.key}
        desc={item.description} image={item.image}
        /> } 
    /> 

      </Content>
    </Container>

    </Wrapper>
  );
}

export default Home;

const styles = StyleSheet.create({
  shadowCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.40,
    shadowRadius: 5,
    elevation: 6,
  }
})