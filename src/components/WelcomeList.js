import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Img1 from '../img/img1.svg';
import Img2 from '../img/img2.svg';
import Img3 from '../img/img3.svg';

export default function WelcomeList() {

  const [content, setContent] = useState([
    {
      imageURL: <Img1 width={wp('100%')} height={hp('60%')} />,
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum est feugiat neque mollis varius. Nullam at nibh placerat, imperdiet lacus id, mattis dui. Suspendisse quis mauris lectus. '
    },
    {
      imageURL: <Img2 width={wp('100%')} height={hp('60%')} />,
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum est feugiat neque mollis varius. Nullam at nibh placerat, imperdiet lacus id, mattis dui. Suspendisse quis mauris lectus. '
    },
    {
      imageURL: <Img3 width={wp('100%')} height={hp('60%')} />,
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum est feugiat neque mollis varius. Nullam at nibh placerat, imperdiet lacus id, mattis dui. Suspendisse quis mauris lectus. '
    },
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
      }}>
        
        {item.imageURL}

        <View style={{width: wp('90%'), marginBottom: -40}}>
          <Text style={{
            fontSize: hp('2.7%'),
            fontWeight: 'bold'
          }}>
            {item.titleLabel}
          </Text>
          <Text style={{
            fontSize: hp('2.3%'),
            width: wp('87%'),
            marginTop: hp('2%'),
          }}>
            {item.content}
          </Text>
        </View>

      </View>
    )}
  />
  );
}
