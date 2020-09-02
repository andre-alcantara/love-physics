import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PlayerCard from './components/PlayerCard';
import Leaderboard from './components/Leaderboard';

import { Wrapper, 
  Header, 
  TextView, 
  Title,
} from './styles';

const Ranking = () => {
  const players = [
    {
      id: '1',
      nickname: 'FocaLeonel',
      stars: '140'
    },
    {
      id: '2',
      nickname: 'BrenoJFS',
      stars: '120'
    },
    {
      id: '3',
      nickname: 'BrenoJFS',
      stars: '120'
    },
    {
      id: '4',
      nickname: 'BrenoJFS',
      stars: '120'
    },
  ]

  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Ranking</Title>
        </TextView>  
        <PlayerCard />   
                                       
      </Header>

      <FlatList 
          keyExtractor={item => item.id}
          data={players}
          renderItem={({ item }) => <Leaderboard nickname={item.nickname} 
          stars={item.stars} /> } 
        />


      
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