import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from  '@expo/vector-icons';
import Activities from '../../data/activity';

import { Wrapper, Container, 
  Content, Title, 
  List
} from './styles';

import Header from './components/Header';
import Card from './components/Card';
import Curiosity from './components/Curiosity';
import Curiosities from '../../data/curiosity';
import Activity from './components/Activity';

const Home = () => {
  return (
  <Wrapper>

  <StatusBar style='dark' />
  <Container>
    
  <Header />
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
        keyExtractor={item => item.id}
        data={Activities}
        renderItem={({ item }) => <Activity  
          title={item.title} 
          id={item.id}
          color={item.color}
          icon={item.icon}
          /> } 
    /> 
    </View>
      

      <View style={{
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginTop: 8,
      }}>
        <MaterialCommunityIcons name='brain' size={30} />
        <Title>Cientista do Dia</Title>
      </View>

      <Card />

      <Title>Curiosidades</Title>
      <List 
        horizontal={true}
        contentContainerStyle={{
          paddingBottom: 120,
                
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={Curiosities}
        renderItem={({ item }) => <Curiosity title={item.title} id={item.id}
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