import React from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ProgressBar, Colors } from 'react-native-paper';

import questions from '../../data/answers';

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

const Quiz = ({ navigation, route }) => {

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
        >{questions[0].question}
        </Question>
      </QuestionView>

  
        <AnswersView>
          <Answer>
            {questions[0].answers[0].text}
          </Answer>
       </AnswersView>

       <AnswersView>
          <Answer>
            {questions[0].answers[1].text}
          </Answer>
       </AnswersView>
       <AnswersView>
          <Answer>
            {questions[0].answers[2].text}
          </Answer>
       </AnswersView>
       <AnswersView>
          <Answer>
            {questions[0].answers[3].text}
          </Answer>
       </AnswersView>
   
     
  
    </Wrapper>
  );
}

export default Quiz;