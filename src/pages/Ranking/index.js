import React, { useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PlayerCard from './components/PlayerCard';
//import Leaderboard from './components/Leaderboard';

import Leaderboard from 'react-native-leaderboard';

import { useStateValue } from '../../contexts/theme';

import { Content, ListView } from '../Scientist/styles';
import { Wrapper, 
  Header, 
  TextView, 
  Title,
} from './styles';



const Ranking = () => {
  const [state] = useStateValue();


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
        </TextView>  
           
                                       
      </Header>

      <ListView style={{
        marginTop: 30,
        paddingTop: 95
      }}>
        <Content>
          <PlayerCard />
        </Content>
        
      
      <Leaderboard 
        data={players} 
        sortBy='stars' 
        labelBy='nickname'
        icon='avatar'
        oddRowColor= {state.theme.bottomTab}
        evenRowColor= {state.theme.bottomTab}
        scoreStyle={{
          color: '#FEB96C',
          fontSize: 30,
          fontFamily: 'Montserrat_600SemiBold',
          padding: 12
        }}
        rankStyle={{
          fontFamily: 'Montserrat_600SemiBold',
          color: state.theme.title
        }}
        labelStyle={{
          fontFamily: 'Montserrat_600SemiBold',
          marginLeft: 13,
          color: state.theme.title
        }}
      />
      </ListView>

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