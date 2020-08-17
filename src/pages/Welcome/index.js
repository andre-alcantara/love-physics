import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Wrapper, Container, Slide, Title, SignInButton, SignInText, SignUpButton, SignUpText } from './styles'

import Img1 from '../../img/img1.svg';
import Img2 from '../../img/img2.svg';
import Img3 from '../../img/img3.svg';

export default function Welcome() {


  return (
    <Wrapper>

      <StatusBar style='auto' />
      <Container>    
        <Swiper autoplayTimeout={4} 
          autoplay={true} 
          autoplayDirection={true} 
          showsButtons={false} 
          dotStyle={{backgroundColor: '#C4C4C4', width: 7, height: 7, marginBottom: hp('-4%'), marginTop: hp('4%')}} 
          activeDotStyle={{width: 9, height: 9, marginBottom: hp('-4%'), marginTop: hp('4%')}}
          activeDotColor='#FF5555'>

          <Slide>
            <Title>Aprenda</Title>
            <Img1 width={wp('100%')} height={hp('50%')} />
          </Slide>
            
          <Slide>
            <Title>Avance</Title>
            <Img2 width={wp('100%')} height={hp('50%')} />
          </Slide>

          <Slide>
            <Title>Conquiste</Title>
            <Img3 width={wp('100%')} height={hp('50%')} />
          </Slide>
        </Swiper>

        </Container>
        

        <SignInButton>
          <SignInText>Entrar</SignInText>
        </SignInButton>

        <SignUpButton>
          <SignUpText>Criar Conta</SignUpText>
        </SignUpButton>
        </Wrapper>
  );
}   

console.disableYellowBox = true;