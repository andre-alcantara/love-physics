import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import firebase from '../../services/firebaseConnection'

import { AuthContext } from '../../contexts/auth';

import { 
  ProfileView, 
  Current,
  ProfilePhoto,
  Profile,
  ChoosePhoto,
  CurrentView
} from './styles';

const Photo = ({ photo }) => {
  const [checked, setChecked] = useState(false);
  const [currentPhotoPorra, setCurrentPhoto] = useState(photo[0].checked);


  const { updateImage } = useContext(AuthContext);
  console.log('-------------///-------------')


  const renderPhotos = () => {
    return photo.map(currentPhoto => {
      return (
        <TouchableOpacity
        
        key={currentPhoto.checked}
        onPress={() => {
          setCurrentPhoto(currentPhoto);
          updateImage(currentPhotoPorra);
        }
        }
        >
          <Image 
            style={{  
              width: 120,
              height: 120,
              marginLeft: 8,
            }}
            source={{ uri: `${currentPhoto.checked}` }}
          />
        </TouchableOpacity>
      )
    })
  }


  return (
   
    <View>
      <ProfileView horizontal={true}>
      
        {renderPhotos()}
     </ProfileView>
    </View>
    
   
     
  
  );
}


export default Photo;