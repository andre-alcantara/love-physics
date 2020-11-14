import React, { useState, useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ProgressBar, Colors } from 'react-native-paper';


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
  const { question } = route?.params;

  

  const [questionIndex, setQuestionIndex] = useState(0);
  const [length, setLength] = useState(question.length - 1)
  const [progressBar, setProgressBar] = useState(0);



  const answer = (correct) => {
    if(correct == 'true') {
      if(questionIndex < length){ 

        setQuestionIndex(questionIndex + 1);
        setProgressBar(progressBar + 0.20)
        console.log('Posição: ' + questionIndex);
       
      }
      else if(questionIndex >= length) {
        alert('parabens')
        console.log('Posição: ' + questionIndex);
      
      }
        

        }
      

    else {
      alert('Você errou')
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
        >
          { question[questionIndex]?.question }
        </Question>
      </QuestionView>

        <AnswersView onPress={() => answer(question[questionIndex].answers[0].correct)}>
          <Answer>
          { question[questionIndex]?.answers[0].answer }
          </Answer>
       </AnswersView>

       <AnswersView onPress={() => answer(question[questionIndex].answers[1].correct)}>
          <Answer>
          { question[questionIndex].answers[1].answer }
          </Answer>
       </AnswersView>

       <AnswersView onPress={() => answer(question[questionIndex].answers[2].correct)}>
          <Answer>
          { question[questionIndex].answers[2].answer }
          </Answer>
       </AnswersView>

       <AnswersView onPress={() => answer(question[questionIndex].answers[3].correct)}>
          <Answer>
            
          { question[questionIndex].answers[3].answer }
          </Answer>
       </AnswersView>
  
      

     
  
    </Wrapper>
  );
}

export default Quiz;