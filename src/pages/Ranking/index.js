import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import firebase from '../../services/firebaseConnection'

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
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function listUsers(){
      await firebase.database().ref('users').orderByChild('heart').on('value', (snapshot) => {
        setUsers([]);
        snapshot.forEach((value) => {
          let user = {
            key: value.key,
            image: value.val().image,
            name: value.val().name,
            heart: value.val().heart
          }
          setUsers(oldUser => [...oldUser, user])
        })
      })
    }
    listUsers()
    
  }, [])

  console.log(users);

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
        data={users} 
        sortBy='heart' 
        labelBy='name'
        icon='image'
        onRowPress={(item, index) => {}}
        oddRowColor= {state.theme.bottomTab}
        evenRowColor= {state.theme.bottomTab}
        scoreStyle={{
          color: state.theme.heart,
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