import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import firebase from '../../services/firebaseConnection'

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import { 
  ProfileView, 
  Current,
  ProfilePhoto,
  Profile,
  ChoosePhoto,
  CurrentView
} from './styles';

const Photo = ({ photo, close }) => {
  const [checked, setChecked] = useState(false);
  const [currentPhotoPorra, setCurrentPhoto] = useState(photo[0].checked);

  const navigation = useNavigation();

  const { updateImage } = useContext(AuthContext);

  const handlePhoto = (currentPhoto) => {
    updateImage(currentPhoto);
    close();
  }

  return (
   
    <View>
      <ProfileView horizontal={true} showsHorizontalScrollIndicator={false}>
      
        <TouchableOpacity onPress={() => {handlePhoto(photo[0].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[0].checked}` }}
            />

        </TouchableOpacity>

        <TouchableOpacity 
        style={{
          marginLeft: 6
        }}
        onPress={() => {handlePhoto(photo[1].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[1].checked}` }}
            />

        </TouchableOpacity>
        <TouchableOpacity style={{
          marginLeft: 6
        }}
        onPress={() => {handlePhoto(photo[2].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[2].checked}` }}
            />

        </TouchableOpacity>
        <TouchableOpacity style={{
          marginLeft: 6
        }}
        onPress={() => {handlePhoto(photo[3].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[3].checked}` }}
            />

        </TouchableOpacity>
        <TouchableOpacity style={{
          marginLeft: 6
        }}
        onPress={() => {handlePhoto(photo[4].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[4].checked}` }}
            />

        </TouchableOpacity>
        <TouchableOpacity style={{
          marginLeft: 6
        }}
        onPress={() => {handlePhoto(photo[5].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[5].checked}` }}
            />

        </TouchableOpacity>
        <TouchableOpacity style={{
          marginLeft: 6
        }}
        onPress={() => {handlePhoto(photo[6].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[6].checked}` }}
            />

        </TouchableOpacity>
        <TouchableOpacity style={{
          marginLeft: 6
        }}
        onPress={() => {handlePhoto(photo[7].checked)}}>
          <Image 
              style={{  
                width: 120,
                height: 120,
                marginLeft: 8,
              }}
              source={{ uri: `${photo[7].checked}` }}
            />

        </TouchableOpacity>
     </ProfileView>
    </View>
    
   
     
  
  );
}


export default Photo;