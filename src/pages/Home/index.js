import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from  '@expo/vector-icons';

import { Wrapper, Container, 
  Content, Title, 
  Activities, ActivitiesText,
  CuriosityCard, CuriosityText, 
  StartButton, StartText 
} from './styles';

import Header from './components/Header';
import Activity from './components/Activity';
import Card from './components/Card';
import Curiosity from './components/Curiosity';

const Home = () => {
  return (
  <Wrapper>

  <StatusBar style='dark' />
  <Container>
    
  <Header />
    <Content showsVerticalScrollIndicator={false}>
      <Title>Atividades</Title>

      <Activity />
        
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
      <Curiosity />

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