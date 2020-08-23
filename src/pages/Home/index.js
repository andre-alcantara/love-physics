import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from  '@expo/vector-icons';

import { Wrapper, Container, Top, 
  Header, PrimaryText, 
  SecondaryText, TextView, 
  StarView, Divisor, 
  StarCount, HeartView, 
  StatsView, HeartCount, 
  Content, Title, 
  Activities, ActivitiesText,
  ScientistCard, ScientistText,
  ScientistDesc,
  CuriosityCard, CuriosityText, 
  StartButton, StartText 
} from './styles';

import MathCard from '../../assets/button/mathCard.svg';
import MathIcon from '../../assets/button/mathIcon.svg';
import SpeedCard from '../../assets/button/speedCard.svg';
import SpeedIcon from '../../assets/button/speedIcon.svg';
import Character from '../../assets/characters/character1.svg';

import Star from '../../assets/characters/star.svg';
import Heart from '../../assets/characters/heart.svg';
import Start from '../../assets/button/start.svg';
import Scientist from '../../assets/scientist/scientist.svg';

import Glasses from '../../assets/curiosity/glasses.svg';
import Sky from '../../assets/curiosity/sky.svg';
import Mirage from '../../assets/curiosity/mirage.svg';
import Fire from '../../assets/curiosity/fire.svg';
import BlackHole from '../../assets/curiosity/blackhole.svg';


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
            marginLeft: -20,
          }} height={330} width={330} />
          <MathIcon style={{
            position: 'absolute',
            marginLeft: 40,
            marginTop: 20,
          }} height={130} width={130} /> 
          <ActivitiesText>Matemática</ActivitiesText>
          <StartButton>
            <StartText>COMECAR</StartText>
            <Start style={{
              marginLeft: 10,
              
            }} height={25} width={25} />
          </StartButton>

          <SpeedCard style={{
            marginLeft: -65
          }} height={330} width={330} />
          <SpeedIcon style={{
            position: 'absolute',
            marginLeft: 310,
            marginTop: 20,
          }} height={130} width={130} />
          <ActivitiesText style={{
            marginLeft: 310,
          }}>Velocidade</ActivitiesText>
          <StartButton style={{
            marginLeft: 310
          }}>
            <StartText>COMECAR</StartText>
            <Start style={{
              marginLeft: 10,
              
            }} height={25} width={25} />
          </StartButton>
                   
        </Activities>
        
        <View style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'flex-end',
          marginTop: 8,
        }}>
          <MaterialCommunityIcons name='brain' size={30} />
          <Title>Cientista do Dia</Title>
        </View>

        <ScientistCard style={styles.shadowCard}>
          <Scientist style={{
            marginLeft: 15,
            marginTop: 25,
          }} height={100} width={100} />
          
            <ScientistText>Marie Cure</ScientistText>
            
            <ScientistDesc>Foi uma física polonesa naturalizada francesa, que conduziu pesquisas pioneiras em todo o mundo no ramo da radioatividade.</ScientistDesc>
            
          <TouchableOpacity style={{
            marginLeft: 16,
            marginTop: 12,
            
            width: 100,
          }}>
            <Text style={{
              color: '#FF5555',
              textAlign: 'center',
              fontFamily: 'Montserrat_600SemiBold'
            }}>Saiba Mais</Text> 
          </TouchableOpacity>  
          
          
        </ScientistCard>

        
          <Title>Curiosidades</Title>
        

        <Activities horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <TouchableOpacity>
            <CuriosityCard style={[styles.shadowCard, {marginLeft: 22}]}>
              <Glasses width={90} height={90} />
              <CuriosityText style={{
                marginTop: 7,
                marginBottom: -7,
              }}>Como funciona o cinema 3D?</CuriosityText>
            </CuriosityCard > 
          </TouchableOpacity>
          
          <TouchableOpacity>
            <CuriosityCard style={styles.shadowCard}>
              <Sky width={90} height={90} />
              <CuriosityText style={{
                marginTop: 7,
                marginBottom: -7,
              }}>Por que o céu é azul?</CuriosityText>
            </CuriosityCard>
          </TouchableOpacity>

          <TouchableOpacity>
            <CuriosityCard style={styles.shadowCard}>
              <Mirage width={75} height={75} />
              <CuriosityText style={{
                marginTop: 15,
                marginBottom: -15,
              }}>O que são miragens?</CuriosityText>
            </CuriosityCard>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <CuriosityCard style={styles.shadowCard}>
              <Fire width={75} height={75} />
              <CuriosityText style={{
                marginTop: 15,
                marginBottom: -15,
              }}>Porque a água apaga o fogo?</CuriosityText>
            </CuriosityCard>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <CuriosityCard style={[styles.shadowCard, {marginRight: 20,}]}>
              <BlackHole width={90} height={90} />
              <CuriosityText style={{
                width: 130,
                marginTop: 9,
                marginBottom: -9,
              }}>O que são buracos negros?</CuriosityText>
            </CuriosityCard>
          </TouchableOpacity>
          

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