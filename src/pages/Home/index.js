import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from  '@expo/vector-icons';

import { Wrapper, 
  Container, Top, Header, PrimaryText, SecondaryText, TextView, StarView, Divisor, StarCount, HeartView, StatsView, HeartCount, Content, Title, Activities, ScientistCard, CuriosityCard } from './styles';
import MathCard from '../../assets/button/mathCard.svg';
import SpeedCard from '../../assets/button/speedCard.svg';

import Character from '../../assets/characters/character1.svg';
import Star from '../../assets/characters/star.svg';
import Heart from '../../assets/characters/heart.svg';

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
        <TouchableOpacity>
          <Character height={hp('20%')} width={wp('20%')} />
        </TouchableOpacity>
        
        
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
  

      <Content showsVerticalScrollIndicator={false}>
        <Title>Atividades</Title>
        <Activities horizontal={true} showsHorizontalScrollIndicator={false}>
           
          <MathCard style={{
            marginLeft: -20
          }} height={330} width={330} />

          <SpeedCard style={{
            marginLeft: -60
          }} height={330} width={330} />
                   
        </Activities>
        
        <View style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'flex-end',
          marginTop: 8,
        }}>
          <MaterialCommunityIcons name='brain' size={30} />
          <Title>Fisico do Dia</Title>
        </View>

        <ScientistCard style={styles.shadowCard}>
          <Title>Fisico</Title>
        </ScientistCard>

        <View style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'flex-end',
        }}>
          <AntDesign name='questioncircleo' size={30} />
          <Title>Curiosidades</Title>
        </View>

        <Activities horizontal={true} showsHorizontalScrollIndicator={false}>
          <CuriosityCard style={[styles.shadowCard, {marginLeft: 22}]}>
            
          </CuriosityCard > 
          <CuriosityCard style={styles.shadowCard}>
            
          </CuriosityCard>
          <CuriosityCard style={styles.shadowCard}>
            
          </CuriosityCard>
        </Activities>
      </Content>
        

      
      
    </Container>

    </Wrapper>
  );
}

export default Home;

const styles = StyleSheet.create({
  shadowCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.40,
    shadowRadius: 5,
    elevation: 6,
  }
  
})