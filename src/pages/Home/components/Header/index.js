import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../../../contexts/auth';
import Settings from '../Settings';

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
  const [visible, setVisible] = useState(false);
  
  const { user, signOut } = useContext(AuthContext);

  return (
    <Top>
      <HeaderView>
        <TextView>
          <PrimaryText>Olá { user && user.name },</PrimaryText>
          <SecondaryText>Que bom te ver!</SecondaryText>
        </TextView>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Character height={hp('20%')} width={wp('20%')} />
        </TouchableOpacity>    
      </HeaderView>

        <Modal 
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType='slide'
        >
          <Settings close={() => setVisible(false)} />
        </Modal>

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