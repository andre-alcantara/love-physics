import React from 'react';
import { Text } from 'react-native';

import { Content, Difficulty, DifficultyText, Card, SubTitle, Description } from './styles';

const Lesson = ({ color }) => {
  return (
    <Content horizontal={true} showsHorizontalScrollIndicator={false}>
      <Card>  
        <Difficulty style={{
          backgroundColor: color
        }}>
          <DifficultyText>
            INTRODUÇÃO
          </DifficultyText>
        </Difficulty>

        <SubTitle>
          Velocidade Média
        </SubTitle>

        <Description>
          Velocidade média é a razão entre o deslocamento e o intervalo de tempo 
          em que um movimento acontece. Deslocamento é uma grandeza vetorial, 
          medida pela diferença entre as posições final e inicial de um movimento.
        </Description>
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