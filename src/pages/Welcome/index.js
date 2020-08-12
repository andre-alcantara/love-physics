import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { Container } from './styles';

const Welcome = () => {
  const [content, setContent] = useState([
    {
      imageURL: require('../../img/img1.png'),
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum est feugiat neque mollis varius. Nullam at nibh placerat, imperdiet lacus id, mattis dui. Suspendisse quis mauris lectus. '
    },
    {
      imageURL: require('../../img/img2.png'),
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum est feugiat neque mollis varius. Nullam at nibh placerat, imperdiet lacus id, mattis dui. Suspendisse quis mauris lectus. '
    },
    {
      imageURL: require('../../img/img3.png'),
      titleLabel: 'Lorem Ipsum', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum est feugiat neque mollis varius. Nullam at nibh placerat, imperdiet lacus id, mattis dui. Suspendisse quis mauris lectus. '
    },
  ])

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <StatusBar style='dark' />
      <View style={{
        width: wp('100%'),
        height: hp('80%')
      }}>
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
            marginTop: hp('0%')
          }}>

            <Image 
              source={item.imageURL}
              style={{
                width: wp('90%'),
                height: hp('50%'),

              }}
            />

            <View style={{width: wp('90%'), marginTop: 60, marginBottom: -30}}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>
                {item.titleLabel}
              </Text>
              <Text style={{
                fontSize: 16,
                width: wp('87%'),
                marginTop: hp('3%')
              }}>
                {item.content}
              </Text>
            </View>

          </View>
        )}
      />
      </View>

  </SafeAreaView>
  );
}   

export default Welcome; 