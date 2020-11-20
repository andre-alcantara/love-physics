import React, { useContext, useState, useRef, useEffect } from 'react';
import { Image, TouchableOpacity, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection';

import { 
  Top, 
  HeaderView, 
  TextView,
  PrimaryText,
  SecondaryText,
  StatsView,
  StarCount,
  StarView,
  HeartCount, 
  HeartView,
  } from './styles';

import Heart from '../../assets/characters/heart.svg';

const Header = ({ question }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  }


  
  const { user, setUser } = useContext(AuthContext);

  useEffect( () => {
    async function loadUser() {
      await firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
        let data = {
          uid: user.uid,
          name: snapshot.val().name,
          email: user.email,
          image: snapshot.val().image,
          heart: snapshot.val().heart,
        };
        setUser(data);
      })
    }
    loadUser()
  },[]);
  console.log(user.image)
  return (
    <Top>
      <HeaderView>
        <TextView>
          <PrimaryText>Olá { user && user.name },</PrimaryText>
          <SecondaryText>Que bom te ver!</SecondaryText>
        </TextView>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
          style={{
            height: 65,
            width: 65,
            
          }} 
          source={{uri : `${ user.image }` }}
            
          />
         
         
        </TouchableOpacity>    
      </HeaderView>


      <StatsView>
        <StarView onPress={onOpen} style={{marginLeft: 20}}>
        <Heart height={30} width={30} />
            <HeartCount>{ user.heart }</HeartCount>
          </StarView>

          <StarView style={{
            backgroundColor: '#54AD67'
          }} onPress={() => {}}>
          <Entypo name="open-book" size={32} color="white" />
            <HeartCount>0/{question}</HeartCount>
          </StarView>
      
        
      </StatsView>
    </Top>
  );
}

export default Header;