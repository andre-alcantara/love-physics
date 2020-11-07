import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import CheckBox from 'react-native-check-box';
import firebase from '../../services/firebaseConnection'

import { AuthContext } from '../../contexts/auth';

import { 
  ProfileView, 
  Current,
  ProfilePhoto,
  Profile,
  ChoosePhoto,
  ChooseText,
} from './styles';

const Photo = ({ photo }) => {
  const [checked, setChecked] = useState(false);
  const [photos, setPhotos] = useState(photo);

  const { user } = useContext(AuthContext);


  

  return (
    <ProfileView horizontal={true} showsHorizontalScrollIndicator={false}>

     
      
      <CheckBox
        style={{flex: 1, marginLeft: 6}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[0].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[0].unchecked}` }} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 10}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[1].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[1].unchecked}` }} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 10}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[2].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[2].unchecked}` }} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 10}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[3].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[3].unchecked}` }} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 10}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[4].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[4].unchecked}` }} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 10}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[5].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[5].unchecked}` }} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 10}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[6].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[6].unchecked}` }} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 10}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={{uri : `${photo[7].checked}` }} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={{uri : `${photo[7].unchecked}` }} style={{ width:120, height: 120 }} /> }
      /> 
     
    </ProfileView>
  );
}


export default Photo;