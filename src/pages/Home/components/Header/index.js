import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

import Star from '../../../../assets/characters/star.svg';
import Heart from '../../../../assets/characters/heart.svg';
import Character from '../../../../assets/characters/character1.svg';

const Header = () => {
  return (
    <Top style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2, 
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
      <HeaderView>
        <TextView>
          <PrimaryText>Olá Cefiroti,</PrimaryText>
          <SecondaryText>Que bom te ver!</SecondaryText>
        </TextView>
        <TouchableOpacity>
          <Character height={hp('20%')} width={wp('20%')} />
        </TouchableOpacity>    
      </HeaderView>

      <StatsView>
        <StarView>
          <Star height={hp('7.3%')} width={wp('7.3%')} />
              <StarCount>2000</StarCount>
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