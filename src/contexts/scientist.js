import React, { useState, createContext, useEffect, useContext } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';


export const ScientistsContext = createContext({});

const ScientistsProvider = ({ children }) => {
  const [scientists, setScientists] = useState([]);

  useEffect(() => {
    async function listScientist() {
      await firebase.database().ref('scientists').on('value', (snapshot)=>{
        setScientists([]);

        snapshot.forEach((value) =>{
          let scientist = {
            key: value.key,
            award: value.val().award,
            image: value.val().image,
            life: value.val().life,
            name: value.val().name,
            who: value.val().who,
          };
          setScientists(oldScientist => [...oldScientist, scientist]);
        })

      });
    }
    listScientist()
  }, []);
  return (
    <ScientistsContext.Provider value={{ scientists }}>
      { children }
    </ScientistsContext.Provider>
  );
}

export default ScientistsProvider;