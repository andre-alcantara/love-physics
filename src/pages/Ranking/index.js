import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Wrapper, Header, TextView, Title } from './styles';

const Ranking = () => {
  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Ranking</Title>
        </TextView>  
        <LinearGradient
          // Button Linear Gradient
          colors={['#FF5555', '#E38686']}
          style={{ 
            marginTop: 16,
            marginBottom: -16,
            alignSelf: 'center' ,
            alignItems: 'center', 
            borderRadius: 20, 
            height: hp('20%'),
            width: '90%'
            }}>
            </LinearGradient>                                                     
      </Header>
    </Wrapper>  
  );
}

export default Ranking;