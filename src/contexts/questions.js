import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const QuestionsContext = createContext({});

const QuestionsProvider = ({ children }) => {
  const [matters, setMatters] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [questions, setQuestions] = useState([])

  async function listMatters(){
    await firebase.database().ref('matter').once('value')
    .then((snapshot) => {
      setMatters([]);
      snapshot.forEach( (value)=>{
        let matter = {
          key : value.key,
          matterName : value.val().matterName
        }
        setMatters(oldMatter => [...oldMatter, matter]);
      });
    });
  }

  async function listDifficulties(matter){
    matter = matter.toString();

    await firebase.database().ref('matter/'+ matter +'/matterContent/').once('value')
    .then((snapshot) => {
      setDifficulties([])
      snapshot.forEach((value) =>{
        let difficulty = {
          key: value.key,
          difficulty: value.val().difficulty,
          title: value.val().title,
          description: value.val().description
        }
        setDifficulties(oldDifficulty => [...oldDifficulty, difficulty])
      });
    });
  }

  async function listQuestions(matter, difficulty){
    matter = matter.toString();
    difficulty = difficulty.toString();

    await firebase.database().ref('matter/'+matter+'/matterContent/'+difficulty+'/questions').once('value')
    .then((snapshot) => {
      setQuestions([]);
      snapshot.forEach((value) => {
        let question = {
          key: value.key,
          question: value.val().question,
          correction: value.val().correction,
          answers: value.val().answers
        }
        setQuestions(oldQuestion => [...oldQuestion, question])
      });
    });

  }

  return (
    <QuestionsContext.Provider value={{ listMatters, matters, listDifficulties, difficulties, listQuestions, questions}}>
      { children }
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;