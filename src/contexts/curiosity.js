import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';


export const CuriositiesContext = createContext({});

const CuriositiesProvider = ({ children }) => {
  const [curiosities, setCuriosities] = useState([]);

  useEffect(() => {
    async function listCuriosities() {
      await firebase.database().ref('curiosity').on('value', (snapshot)=>{
        setCuriosities([]);

        snapshot.forEach((value) =>{
          let curiosity = {
            key: value.key,
            title: value.val().title,
            description: value.val().description,
            image: value.val().image,
          };
          setCuriosities(oldCuriosity => [...oldCuriosity, curiosity]);
        })

      });
    }
    listCuriosities()
  }, []);
  return (
    <CuriositiesContext.Provider value={{ curiosities }}>
      { children }
    </CuriositiesContext.Provider>
  );
}

export default CuriositiesProvider;