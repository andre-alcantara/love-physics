import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';


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