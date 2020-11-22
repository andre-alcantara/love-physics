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

    async function loadUser() {
      await firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
        var data = {
          uid: user.uid,
          name: snapshot.val().name,
          email: user.email,
          image: snapshot.val().image,
          heart: snapshot.val().heart,
          answered: snapshot.val().answered,
        };
        setUser(data);
        storageUser(data);
      })
    }
    loadUser();
  }, []);

  async function signIn(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot) => {
        var data = {
          uid: uid,
          name: snapshot.val().name,
          email: value.user.email,
          image: snapshot.val().image,
          heart: snapshot.val().heart,
          answered: snapshot.val().answered,
        };
        setUser(data);
        storageUser(data);
      })
    })
    .catch((error) => {
      if (error === "auth/invalid-email") {

      }
      else if (error === "auth/user-disabled") {

      }
      else if (error === "auth/user-not-found") {

      }
      else if (error === "auth/wrong-password") {

      }
      else {
        
      }
    })
  }
  
  async function signUp(email, password, name) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await value.user.sendEmailVerification();
      await firebase.database().ref('users').child(uid).set({
        heart: 0,
        name: name,
        image: 'https://firebasestorage.googleapis.com/v0/b/lovephysics-34f8e.appspot.com/o/images%2FprofilePhotos%2Fprofile1Che.png?alt=media&token=dae4ff40-9a8d-4175-a66e-b0a60ba3c3a0',
        answered: 0,
      })
      .then(() => {
        var data = {
          uid: uid,
          name: name,
          email: value.user.email,
          image: 'https://firebasestorage.googleapis.com/v0/b/lovephysics-34f8e.appspot.com/o/images%2FprofilePhotos%2Fprofile1Che.png?alt=media&token=dae4ff40-9a8d-4175-a66e-b0a60ba3c3a0',
          heart: 0,
          answered: 0,
        };
        setUser(data);
        storageUser(data);
      })
    })
    .catch((error) => {
      if (error === "auth/email-already-in-use") {
        
      }
      else if (error === "auth/invalid-email") {

      }
      else if (error === "auth/weak-password") {

      }
      else {

      }
    })
  }

  async function updateUserEmail(email, password){

    let oldEmail = user.email;
    console.log(oldEmail)

    firebase.auth()
    .signInWithEmailAndPassword(oldEmail, password)
    .then(async (userCredential) => {
      await userCredential.user.updateEmail(email)
      .then(() => {
        console.log('Foi irmão')
        var data = {
          uid: user.uid,
          name: user.name,
          email: email,
          image: user.image,
          heart: user.heart,
          answered: user.answered,
        }
        setUser(data);
        storageUser(data);
      })
      .catch((error) => {
        console.log(error)
      })
      await userCredential.user.sendEmailVerification()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function updateNickname(nickname, password) {

    let oldEmail = user.email;
    console.log(oldEmail);

    firebase.auth()
    .signInWithEmailAndPassword(oldEmail, password)
    .then(async () => {
      await firebase.database().ref('users').child(user.uid).update({
        name: nickname,
      })
      .then(() => {
        console.log('Foi irmão')
        var data = {
          uid: user.uid,
          name: nickname,
          email: user.email,
          image: user.image,
          heart: user.heart,
          answered: user.answered,
        }
        setUser(data);
        storageUser(data);
      })
      .catch((error) => {
        console.log(error)
      });
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function updateImage(imageURL){

    await firebase.database().ref('users').child(user.uid).update({
      image: imageURL,
    }).then(() => {
      var data = {
        uid: user.uid,
        name: user.name,
        email: user.email,
        image: imageURL,
        heart: user.heart,
        answered: user.answered,
      }
      setUser(data);
      storageUser(data);
      console.log('Foi irmão')
    }).catch((error) => {
      console.log(error)
    });
  }

  async function updateHeart(heart) {

    await firebase.database().ref('users').child(user.uid).update({
      heart: heart,
    }).then(() => {
      var data = {
        uid: user.uid,
        name: user.name,
        email: user.email,
        image: user.image,
        heart: heart,
        answered: user.answered,
      }
      setUser(data);
      storageUser(data);
      console.log('Foi irmão');
      console.log(heart)
    }).catch((error) => {
      console.log(error)
    });
  }

  async function updateAnswered(qtd) {

    await firebase.database().ref('users').child(user.uid).update({
      answered: qtd
    })
    .then(() => {
      var data = {
        uid: user.uid,
        name: user.name,
        email: user.email,
        image: user.image,
        heart: user.heart,
        answered: qtd,
      }
      setUser(data);
      storageUser(data);
      console.log('Foi irmão')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function updatePassword(email) {
    await firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      console.log("Verifique seu e-mail")
    })
    .catch((error) => {
      console.log(error)
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
    <AuthContext.Provider value={{ signed:!!user, user, setUser, loading, signUp, signIn, signOut, updateUserEmail, updatePassword, updateNickname, updateImage, updateHeart, updateAnswered }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;