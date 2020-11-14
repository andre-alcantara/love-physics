import React, { useState, useContext, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { ProgressBar, Colors } from 'react-native-paper';


import { Wrapper, 
  StarContainer, 
  StarCount, 
  ExitButton,
  QuestionView,
  Question,
  AnswersView,
  Answer,
  VerifyButton,
  VerifyText
} from './styles';

import { DarkModeView } from '../Settings/styles';
import { set } from 'react-native-reanimated';


const Quiz = ({ navigation, route }) => {
  const { question } = route?.params;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [length, setLength] = useState(question.length - 1)
  const [progressBar, setProgressBar] = useState(0);
  const [color, setColor] = useState('#282A36');


  const modalizeRef = useRef(null);
  const modalizeWrong = useRef(null);
  const modalizeExit = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const onExit = () => {
    modalizeExit.current?.open();
  }

 // answer(question[questionIndex].answers[0].correct)


  const answer = (correct) => {
    if(correct == 'true') {

      if(questionIndex < length){ 
        
        onOpen();
      }

      else if(questionIndex >= length) {
        alert('parabens')
        console.log('Posição: ' + questionIndex);
      }
    }
    
    else {
      modalizeWrong.current?.open();

    }
  } 

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setProgressBar(progressBar + (1 / question.length));
    modalizeRef.current?.close();
    modalizeWrong.current?.close();
  }

  return (
    <Wrapper>

      <DarkModeView>
        <ExitButton onPress={onExit}>
          <AntDesign  name="close" size={28} color="black" />
        </ExitButton>
       
        
      <ProgressBar style={{
        marginTop: 0,
        height: 20,
        width: 300,
        borderRadius: 25, 
        alignSelf: 'center'
      }} progress={progressBar} color={'#339F33'}/>
      </DarkModeView>

      <View style={{height: '40%', alignItems: "center"}}>
      <QuestionView contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}>
        <Question
          numberOfLines={10}
        >
          { question[questionIndex].question }
        </Question>
      </QuestionView>
      </View>
     

        <AnswersView onPress={() => answer(question[questionIndex].answers[0].correct)}>
          <Answer>
          { question[questionIndex].answers[0].answer }
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

       <VerifyButton>
         <VerifyText></VerifyText>
       </VerifyButton>
  
       <Modalize ref={modalizeWrong} 
   
       modalHeight={400}
       closeOnOverlayTap={false} 
       closeSnapPointStraightEnabled={false} 
       panGestureEnabled={false}
       >
            <View style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text>Reposta errada :(</Text>
              <Text>Explicação</Text>
              <Text>{ question[questionIndex].correction }</Text>
              <TouchableOpacity onPress={nextQuestion}>
                <Text>Continuar</Text>
              </TouchableOpacity>
            </View>
         
          </Modalize>


       <Modalize ref={modalizeRef} 
       modalHeight={300}
       closeOnOverlayTap={false} 
       closeSnapPointStraightEnabled={false} 
       panGestureEnabled={false}
       >
            <View style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text>Certa resposta!</Text>
              <TouchableOpacity onPress={nextQuestion}>
                <Text>Continuar</Text>
              </TouchableOpacity>
            </View>
         
          </Modalize>

          <Modalize ref={modalizeExit} snapPoint={180}>
            <View style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text>Certa resposta!</Text>
              <TouchableOpacity onPress={nextQuestion}>
                <Text>Continuar</Text>
              </TouchableOpacity>
            </View>
         
          </Modalize>
     
  
    </Wrapper>
  );
}

export default Quiz;