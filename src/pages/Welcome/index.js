import React, { useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

import { Wrapper, Container, Slide, Title, SubTitle, SignInButton, SignInText, SignUpButton, SignUpText } from './styles'

import Img1 from '../../img/img1.svg';
import Img2 from '../../img/img2.svg';
import Img3 from '../../img/img3.svg';


export default function Welcome({ navigation }) {

  const navigate = () => {
    navigation.replace('Login')
  }

  return (
    <Wrapper>

      <StatusBar style='auto' />
      
      <Container>    
      
        <Swiper  
          loop={false}
          showsButtons={false} 
          dotStyle={{backgroundColor: '#C4C4C4', width: 7, height: 7, marginBottom: hp('-4%'), marginTop: hp('4%')}} 
          activeDotStyle={{width: 20, height: 7, marginBottom: hp('-4%'), marginTop: hp('4%')}}
          activeDotColor='#FF5555'>

          <Slide>
            <TouchableOpacity style={{ marginBottom: -20 }} onPress={navigate}>
              <SubTitle>Pular</SubTitle>
            </TouchableOpacity>
            <Img1 width={wp('80%')} style={{ alignSelf: 'center', marginTop: 20  }}  />
            <Title>❤️</Title>
            <Title>Ganhe corações com as Atividades</Title>
            <SubTitle>Aprenda física de uma forma fácil e intuitiva, com diversas matérias e lições para escolher.</SubTitle>
            
          </Slide>
            
          <Slide>
          <TouchableOpacity style={{ marginBottom: -20 }} onPress={navigate}>
              <SubTitle>Pular</SubTitle>
            </TouchableOpacity>
            <Title>🌙</Title>
            <Title>Veja as estrelas com o Modo Escuro</Title>
            <SubTitle>Habilite-o em Ajustes > Modo Escuro</SubTitle>
            <Img2 width={wp('100%')} style={{ alignSelf: 'center'  }}/>
          </Slide>

          <Slide>
          <TouchableOpacity style={{ marginBottom: -20 }} onPress={navigate}>
              <SubTitle>Pular</SubTitle>
            </TouchableOpacity>
          <Title>🎨</Title>
            <Title>Se personalize com as Carinhas</Title>
          <Image 
              style={{ height: 420, width: 334, alignSelf: 'center',  marginTop: 40}}
              source={require('../../img/img4.png')}
            />
            
           
          </Slide>

          <Slide>     
          <TouchableOpacity style={{ marginBottom: -20 }} onPress={navigate}>
              <SubTitle>Pular</SubTitle>
            </TouchableOpacity>
            <Image 
              style={{ height: '60%', width: '100%'}}
              source={require('../../img/img3.png')}
            />
            <Title style={{ marginTop: 40 }}>🔬</Title>
            <Title>Conheça os cientistas mais influentes da história</Title>
          </Slide>

          <Slide style={{ marginTop: -40 }}>     
          <Title style={{ marginTop: 40 }}>🏆</Title>
            <Title>Compita com outros jogadores no nosso Ranking </Title>
          <Image 
              style={{ height: '50%', width: '100%', alignSelf: 'center', marginTop: 40}}
              source={require('../../img/img5.png')}
            />

            <SignInButton onPress={navigate}>
              <SignInText>Fazer Login</SignInText>
            </SignInButton>
           
          </Slide>
          
        </Swiper>

       

        </Container>
        
        
        
        </Wrapper>
  );
}   
