import React from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ProgressBar, Colors } from 'react-native-paper';

import Answers from '../../data/answers';

import { Wrapper, 
  StarContainer, 
  StarCount, 
  ExitButton,
  QuestionView,
  Question,
  AnswersView,
  Answer,
  List
} from './styles';

import { DarkModeView } from '../Settings/styles';

const Quiz = () => {
  return (
    <Wrapper>

      <DarkModeView>
        <ExitButton onPress={() => {}}>
          <AntDesign  name="close" size={28} color="black" />
        </ExitButton>
       
        <StarContainer>
          <AntDesign name="star" size={30} color="#FFC107" />
          <StarCount>30</StarCount>
        </StarContainer>
      </DarkModeView>

      <ProgressBar style={{
        marginTop: 20,
        height: 20,
        width: '90%',
        borderRadius: 25, 
        alignSelf: 'center'
      }} progress={0.25} color={'#008000'} />

      <QuestionView>
        <Question
          numberOfLines={10}
        >Um veículo move-se com velocidade constante de 36 km/h. Ao seu lado, 
        um outro veículo trafega com velocidade constante de 54 km/h. 
        Assinale a alternativa que indica qual será a distância, em km, entre 
        esses veículos após um intervalo de tempo de 5 minutos.
        </Question>
      </QuestionView>


      <List 
        scrollEnabled={false}
        style={{
          heigth: 300,
    
        }}
        contentContainerStyle={{
 
        
          
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={Answers}
        renderItem={({ item }) =>
    
      <AnswersView>
        <Answer>
          { item.answer }
        </Answer>
      </AnswersView>
        } />
    </Wrapper>
  );
}

export default Quiz;