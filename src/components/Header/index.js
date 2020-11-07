import React, { useContext, useState } from 'react';
import { Image, TouchableOpacity, Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

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

import Star from '../../assets/characters/star.svg';
import Heart from '../../assets/characters/heart.svg';

const Header = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  
  const { user, signOut } = useContext(AuthContext);

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
        <StarView>
          <Star height={hp('7.3%')} width={wp('7.3%')} />
              <StarCount>0</StarCount>
          </StarView>
          <HeartView>
            <Heart height={hp('7.3%')} width={wp('7.3%')} />
            <HeartCount>0</HeartCount>
          </HeartView>
      </StatsView>
    </Top>
  );
}

export default Header;