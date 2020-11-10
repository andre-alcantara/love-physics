import React, { useState, useContext } from 'react';
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
  const [questionIndex, setQuestionIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  {console.log(questions[questionIndex])}
  console.log(questionIndex)

  const answer = (correct) => {

    {console.log(correct)}
    if(correct == true) {
      alert('Acerto');
      setProgressBar(progressBar + 0.20)
      setQuestionIndex(questionIndex + 1)
    } else {
      return alert('Errou')
    }
    
    
  }

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
      }} progress={progressBar} color={'#008000'} />

      <QuestionView>
        <Question
          numberOfLines={10}
        >{questions[questionIndex].question}
        </Question>
      </QuestionView>

        <AnswersView onPress={() => answer(questions[questionIndex].answers[0].correct)}>
          <Answer>
          {questions[questionIndex].answers[0].text}
          </Answer>
       </AnswersView>

       <AnswersView onPress={() => answer(questions[questionIndex].answers[1].correct)}>
          <Answer>
          {questions[questionIndex].answers[1].text}
          </Answer>
       </AnswersView>

       <AnswersView onPress={() => answer(questions[questionIndex].answers[2].correct)}>
          <Answer>
            {questions[questionIndex].answers[2].text}
          </Answer>
       </AnswersView>

       <AnswersView onPress={() => answer(questions[questionIndex].answers[3].correct)}>
          <Answer>
            {questions[questionIndex].answers[3].text}
           
          </Answer>
       </AnswersView>
  
      

     
  
    </Wrapper>
  );
}

export default Quiz;