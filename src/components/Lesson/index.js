import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useStateValue } from '../../contexts/theme';
import { useNavigation } from '@react-navigation/native';

import { Content, 
  Difficulty, 
  DifficultyText, 
  Card, 
  SubTitle, 
  DescriptionScroll,
  Description,
  MaterialText,
  Material,
  Videos,
  Quiz
} from './styles';


const Lesson = ({ color, questions }) => {
  const navigation = useNavigation();


  const [state] = useStateValue();

  return (
    <Content horizontal={true} showsHorizontalScrollIndicator={false}>
      
      <Card>  
        <Difficulty style={{
          backgroundColor: color
        }}>
          <DifficultyText>
            FÁCIL
          </DifficultyText>
        </Difficulty>

        <SubTitle>
          Velocidade Média
        </SubTitle>

        <DescriptionScroll>
          <Description>
            Velocidade média é a razão entre o deslocamento e o intervalo de tempo 
            em que um movimento acontece. Deslocamento é uma grandeza vetorial, 
            medida pela diferença entre as posições final e inicial de um movimento.
          </Description>
        </DescriptionScroll>
       
        <MaterialText>
          Materiais de apoio:
        </MaterialText>
        <Material>
          <Videos>
            <AntDesign name="youtube" size={40} color={state.theme.title} />
            <MaterialText style={{
              color: state.theme.title,
              marginTop: 8,
              marginBottom: 2
            }}>
              Vídeos
            </MaterialText>
          </Videos>
        
          <Quiz onPress={() => navigation.navigate('Quiz', {
            questions: questions
          })}>
            <AntDesign name="star" size={40} color="#FFF" />
            <MaterialText style={{
              color: '#FFF',
              marginTop: 8,
              marginBottom: 2
            }}>
              Praticar
            </MaterialText>
          </Quiz>
        </Material>
      </Card>

      <Card>  
        <Difficulty style={{
          backgroundColor: color
        }}>
          <DifficultyText>
            INTERMEDIÁRIO
          </DifficultyText>
        </Difficulty>
      </Card>

      <Card>  
        <Difficulty style={{
          backgroundColor: color
        }}>
          <DifficultyText>
            AVANÇADO
          </DifficultyText>
        </Difficulty>
      </Card>
    </Content>
    
  );
}

export default Lesson;