import React, { useState, useContext, useRef } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { useStateValue } from '../../contexts/theme';

import LottieView from 'lottie-react-native';

import { ProgressBar} from 'react-native-paper';


import { Wrapper, 
  StarContainer, 
  StarCount, 
  ExitButton,
  QuestionView,
  Question,
  AnswersView,
  Answer,
  VerifyButton,
  VerifyText,
  Title,
  SubTitle
} from './styles';

import { Container, DarkModeView } from '../Settings/styles';


const Quiz = ({ navigation, route }) => {
  const { question } = route?.params;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [length, setLength] = useState(question.length - 1)
  const [progressBar, setProgressBar] = useState(0);
  const [count, setCount] = useState(0);
  const [state] = useStateValue();


  const modalizeRef = useRef(null);
  const modalizeWrong = useRef(null);
  const modalizeExit = useRef(null);
  const modalizeEnd = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const onExit = () => {
    modalizeExit.current?.open();
  }

  const onWrong = () => {
    modalizeWrong.current?.open();
  }



  const answer = (correct) => {
    if(correct == 'true') {
      setCount(count + 1);
      if(questionIndex <= length) { 
        onOpen();        
      }
    }
    
    else {
      onWrong();

    } 
  } 

  const nextQuestion = () => {
    if(questionIndex == length) {
      setProgressBar(progressBar + (1 / question.length));
      modalizeEnd.current?.open();
      modalizeRef.current?.close();
      modalizeWrong.current?.close();
    }
    else {
      setQuestionIndex(questionIndex + 1);
      setProgressBar(progressBar + (1 / question.length));
      modalizeRef.current?.close();
      modalizeWrong.current?.close();
    }
   
    
  }

  return (
    <Wrapper>

      <DarkModeView>
        <ExitButton onPress={onExit}>
          <AntDesign  name="close" size={28} color={state.theme.title} />
        </ExitButton>
       
        
      <ProgressBar style={{
        marginTop: -3,
        height: 20,
        width: 300,
        borderRadius: 25, 
        alignSelf: 'center'
      }} progress={progressBar} color={'#9BDCEA'}/>
      </DarkModeView>

      <View style={{height: '40%', alignItems: "center"}}>
      <QuestionView contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: 15
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

       
 
  
       <Modalize ref={modalizeWrong} 
       modalStyle={{
        backgroundColor: state.theme.background,
        
      }}
       modalHeight={ question[questionIndex].correction.length > 300 ? 500 : 250  }

       closeOnOverlayTap={false} 
       closeSnapPointStraightEnabled={false} 
       panGestureEnabled={false}
       >
            <Wrapper>
              <Container style={{
                justifyContent: 'center'
              }}>
                

                <Title style={{
                  color: '#FF5555',   
                  alignSelf: 'flex-start',
                  marginTop: 20,
                  marginBottom: -7 
                }}>💔 Resposta correta:</Title>
                <SubTitle style={{  
                  marginTop: 20,
                  textAlign: 'flex-start', 
                  color: '#FF7676'
                  }}>
                    { question[questionIndex].correction }</SubTitle>
                <VerifyButton style={{
                  backgroundColor: '#CA7B7B',               
                  }} onPress={nextQuestion}>
                  <VerifyText>CONTINUAR</VerifyText>
                </VerifyButton>
                
              </Container>
            
            </Wrapper>
         
          </Modalize>

       <Modalize ref={modalizeRef} 
       modalStyle={{
        backgroundColor: state.theme.background,
        
      }}
       modalHeight={160}
       closeOnOverlayTap={false} 
       closeSnapPointStraightEnabled={false} 
       panGestureEnabled={false}
       >
            <Wrapper>
              <Container style={{
                justifyContent: 'center'
              }}>
                

                <Title style={{
                  color: state.theme.right,   
                  alignSelf: 'flex-start',
                  marginTop: 20,
                  marginBottom: -7 
                }}>❤️ Certa Resposta!</Title>
                <VerifyButton style={{
                  backgroundColor: '#3FDC5F',               
                  }} onPress={nextQuestion}>
                  <VerifyText>CONTINUAR</VerifyText>
                </VerifyButton>
                
              </Container>
            
            </Wrapper>
         
          </Modalize>

          <Modalize ref={modalizeExit} modalHeight={400} 
          
          modalStyle={{
        backgroundColor: state.theme.background
        
      }}>
            <Wrapper style={{
              
            }}>
              <Container>
                {Platform.OS === 'ios' ?
                  <LottieView style={{
                    height: 180,
                    alignSelf: "center"
                    }} source={require('../../../heartCry.json')} autoPlay loop />
                    :
                  <Title>Vai toma no cu</Title>
                }

                

                <Title>Tem certeza que deseja sair?</Title>
                <SubTitle>Todo o seu progresso não será salvo.</SubTitle>
                <VerifyButton onPress={nextQuestion}>
                  <VerifyText>VOLTAR</VerifyText>
                </VerifyButton>
                <TouchableOpacity onPress={() => navigation.goBack()}
                 style={{
                  marginTop: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center"
                }}>
                  <VerifyText style={{
                    color: '#ff5555',
                    textAlign: 'center'
                  }}>SAIR DA LIÇÃO </VerifyText>
                </TouchableOpacity>
              </Container>
            
            </Wrapper>

          </Modalize>

          <Modalize ref={modalizeEnd} modalHeight={360} 
          closeOnOverlayTap={false} 
          closeSnapPointStraightEnabled={false} 
          panGestureEnabled={false}
          modalStyle={{
        backgroundColor: state.theme.background
        
      }}>
            <Wrapper style={{
              
            }}>
              <Container>
              {Platform.OS === 'ios' ?
                  <LottieView style={{
                    height: 180,
                 
                    alignSelf: "center"
                    }} source={require('../../../heart.json')} autoPlay loop />
                    :
                    <Title>Vai toma no cu</Title>
                }
                 
                 <Title>Parabéns 🥳🎉</Title>
                { 
                count == question.length 
                ?       
                  <SubTitle>Você acertou todas as { count } de questões!</SubTitle>
                :
                  <SubTitle>Você acertou { count } de { question.length } questões!</SubTitle>
                }
                
                <VerifyButton onPress={() => navigation.popToTop()}>
                  <VerifyText>OBRIGADO</VerifyText>
                </VerifyButton>
                
              </Container>
            
            </Wrapper>

              
            
         
          </Modalize>
     
  
    </Wrapper>
  );
}

export default Quiz;