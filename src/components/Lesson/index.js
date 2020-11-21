import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
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


const Lesson = ({ color, question }) => {
  const navigation = useNavigation();

  const star = '49';


  const questions = question.matterContent;
  const [state] = useStateValue();

  return (
    <Content horizontal={true} showsHorizontalScrollIndicator={false}>
      
    <FlatList 
      style={{
        height: '100%',
        marginTop: 60
      }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={questions}
        renderItem={({ item }) => 
        
        <Card>  
        <Difficulty style={{
          backgroundColor: color
        }}>
          <DifficultyText>
            {item.difficulty}
          </DifficultyText>
        </Difficulty>

        <SubTitle>
          {item.title}
        </SubTitle>
          
        <DescriptionScroll>
          <Description>
            {item.description}
          </Description>
        </DescriptionScroll>
       
        <MaterialText>
          📚 Materiais de apoio:
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
        
          <Quiz onPress={() => {
           
            if(star >= item.star) {
              navigation.navigate('Quiz', {
                question: item.questions
              });
            }
            else {
              alert('Você não tem estrelas suficientes');
              console.log(item.star)
            }
          

          }}>
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
      } 
    />  

     

    
    </Content>
    
  );
}

export default Lesson;