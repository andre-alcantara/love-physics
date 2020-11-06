import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if(storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signIn(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot) => {
        let data = {
          uid: uid,
          name: snapshot.val().name,
          email: value.user.email,
          image: value.val().image,
        };
        setUser(data);
        storageUser(data);
      })
    })
    .catch((error) => {
      alert(error.code)
    })
  }
  
  async function signUp(email, password, name) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).set({
        star: 0,
        heart: 0,
        name: name,
        image: 'https://firebasestorage.googleapis.com/v0/b/lovephysics-34f8e.appspot.com/o/images%2FprofilePhotos%2FToyFace_Colored_01.png?alt=media&token=20360901-6689-4201-a23f-0f5370867a80',
      })
      .then(() => {
        let data = {
          uid: uid,
          name: name,
          email: value.user.email,
          image: 'https://firebasestorage.googleapis.com/v0/b/lovephysics-34f8e.appspot.com/o/images%2FprofilePhotos%2FToyFace_Colored_01.png?alt=media&token=20360901-6689-4201-a23f-0f5370867a80',
        };
        setUser(data);
        storageUser(data);
      })
    })
    .catch((error) => {
      alert(error.code)
    })
  }

  async function updateUser(email, nickname){
    var user = await firebase.auth().currentUser;
    var uid = user.uid;
    await user.updateEmail(email)
    .then(function() {
      console.log('Foi irmão')
    }).catch(function(error) {
      console.log('INFERNO 1')
    });
  
    await firebase.database.ref('users').child(uid).update({
      name: nickname,
    }).then(function() {
      console.log('Foi irmão')
    }).catch(function(error) {
      console.log('INFERNO 2')
    });
  }

  async function updateImage(imageURL){

    var user = await firebase.auth().currentUser;
    var uid = user.uid;

    await firebase.database().ref('users').child(uid).update({
      image: imageURL,
    }).then(function() {
      console.log('Foi irmão')
    }).catch(function(error) {
      console.log('INFERNO 3')
    });

  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  async function signOut() {
    await firebase.auth().signOut();
    
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed:!!user, user, loading, signUp, signIn, signOut, updateUser, updateImage }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;