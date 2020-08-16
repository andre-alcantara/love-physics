import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ViewPager from '@react-native-community/viewpager';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import WelcomeList from '../../components/WelcomeList'
// import { Container } from './styles';

export default function Welcome() {
  return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'}}>
  
        <StatusBar style='dark' />
        <View style={{
          width: wp('100%'),
          height: hp('100%')
        }}>
        <WelcomeList />
      
        </View>
        </SafeAreaView>
  );
}   