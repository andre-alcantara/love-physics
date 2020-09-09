import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PlayerCard from './components/PlayerCard';
//import Leaderboard from './components/Leaderboard';

import Leaderboard from 'react-native-leaderboard';

import { Feather } from '@expo/vector-icons';

import { Wrapper, 
  Header, 
  TextView, 
  Title,
  Scroll
} from './styles';
import { useState } from 'react';

import Character from '../../assets/characters/character1.svg';

const Ranking = () => {
  const [players, setPlayers] = useState([
    {
      id: '1',
      nickname: 'FocaLeonel',
      stars: 140, 
    },
    {
      id: '2',
      nickname: 'BrenoJFS',
      stars: 120
    },
    {
      id: '3',
      nickname: 'BrenoJFS',
      stars: 180
    },
    {
      id: '4',
      nickname: 'BrenoJFS',
      stars: 120
    },
  ]);

  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Ranking</Title>
          <PlayerCard />
        </TextView>  
           
                                       
      </Header>

      <Leaderboard 
        data={players} 
        sortBy='stars' 
        labelBy='nickname'
        icon='avatar'
        scoreStyle={{
          color: '#FEB96C',
          fontSize: 30,
          fontFamily: 'Montserrat_600SemiBold',
          padding: 12
        }}
        rankStyle={{
          fontFamily: 'Montserrat_600SemiBold'
        }}
        labelStyle={{
          fontFamily: 'Montserrat_600SemiBold',
          marginLeft: 13,
        }}
      />

    {/*}
      <Scroll>
        <Feather name="award" size={24} color="#FEB96C" />
        <Feather name="award" size={24} color="#FEB96C" />
        <Feather name="award" size={24} color="#FEB96C" />
        <FlatList 
          keyExtractor={item => item.id}
          data={players}
          renderItem={({ item }) => <Leaderboard nickname={item.nickname} 
          stars={item.stars} /> } 
        />
      </Scroll>
    {*/}
      


      
    </Wrapper>  
  );
}

export default Ranking;

const styles = StyleSheet.create({
  statsView: {
    justifyContent: 'flex-end',
    marginTop: 16,
    marginBottom: -16,
    alignSelf: 'center' ,
    alignItems: 'center', 
    borderRadius: 20, 
    height: hp('20%'),
    width: '90%'
  }
})