import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Wrapper, Container, Top, Header, PrimaryText, SecondaryText, TextView, StarView, Divisor, StarCount, HeartView, StatsView, HeartCount, Content, Title, Activities, Activity } from './styles';

import Character from '../../assets/characters/character1.svg';
import Star from '../../assets/characters/star.svg';
import Heart from '../../assets/characters/heart.svg';
import Math from '../../assets/characters/math.svg';

const Home = () => {
  return (
    <Wrapper>

    <StatusBar style='dark' />
    <Container>
      <Top style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
        <Header>
        <TextView>
          <PrimaryText>Olá Cefiroti,</PrimaryText>
          <SecondaryText>Que bom te ver!</SecondaryText>
        </TextView>

        <Character height={hp('20%')} width={wp('20%')} />
        
        </Header>
        <StatsView>
          <StarView>
            <Star height={hp('7.3%')} width={wp('7.3%')} />
            <Divisor></Divisor>
            <StarCount>2000</StarCount>
          </StarView>
          <HeartView>
            <Heart height={hp('7.3%')} width={wp('7.3%')} />
            <HeartCount>0</HeartCount>
            <Divisor></Divisor>
          </HeartView>
          
        </StatsView>
      </Top>
    

      <Content>
        <Title>Atividades</Title>
        <Activities horizontal={true} showsHorizontalScrollIndicator={false}>
          <Activity>
            <Math height={hp('32%')} width={wp('32%')} />
          </Activity>
          <Activity style={{
            marginLeft: wp('3.2%')
          }}>
            <Title>Atividades</Title>
          </Activity>
        </Activities>
      </Content>

      
      
    </Container>

    </Wrapper>
  );
}

export default Home;