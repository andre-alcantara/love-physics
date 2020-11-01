import React, { useContext, useState } from 'react';
import { Image, TouchableOpacity, Modal} from 'react-native';
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
          <Image
          style={{
            height: 65,
            width: 65,
            
          }} 
            source={{uri :'https://firebasestorage.googleapis.com/v0/b/lovephysics-34f8e.appspot.com/o/images%2FprofilePhotos%2FToyFace_Colored_01.png?alt=media&token=20360901-6689-4201-a23f-0f5370867a80'}}
          />
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