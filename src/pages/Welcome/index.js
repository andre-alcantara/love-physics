import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import WelcomeList from '../../components/WelcomeList'
// import { Container } from './styles';

export default function Welcome() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'}}>

      <StatusBar style='dark' />
      <View style={{
        width: wp('100%'),
        height: hp('80%')
      }}>
      <WelcomeList />
      </View>

  </SafeAreaView>
  );
}   