import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Img1 from '../img/img1.svg';
import Img2 from '../img/img2.svg';
import Img3 from '../img/img3.svg';

import Button from '../components/Button';
import SwipeText from '../components/SwipeText';

export default function WelcomeList() {

  const [content, setContent] = useState([
    {
      imageURL: <Img1 width={wp('120%')} height={hp('60%')} />,
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      swipe: <SwipeText />
    },
    {
      imageURL: <Img2 width={wp('120%')} height={hp('60%')} />,
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      swipe: <SwipeText />
    },
    {
      imageURL: <Img3 width={wp('120%')} height={hp('60%')} />,
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      swipe: <Button />
    }
  ])

  return (
    <FlatList
    data={content}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item, index) => index.toString()}
    scrollEventThrottle={16}
    renderItem={({ item, index }) => (
      <View style={{  
        alignItems: 'center',
        height: hp('90%'),
        width: wp('100%'),
        marginTop: hp('10%'),
      }}>
        <View style={{width: wp('90%'), marginBottom: hp('-3%')}}>
          <Text style={{
            fontSize: hp('2.7%'),
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Montserrat_700Bold'
          }}>
            {item.titleLabel}
          </Text>
          <Text style={{
            fontSize: 16,
            width: wp('87%'),
            textAlign: 'center',
            marginTop: hp('3%'),
            marginBottom: hp('5%'),
            fontFamily: 'Montserrat_500Medium'
          }}>
            {item.content}
          </Text>
        </View>
        {item.imageURL}

        <View style={{width: wp('90%'), marginBottom: -40}}>
         
            {item.swipe}
         
  
        </View>
        </View>
      
    )}
  />
  );
}
