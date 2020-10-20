import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { Edit } from '../../styles';
import User from '../../../../../../data/user';
import CheckBox from 'react-native-check-box'

import { 
  ProfileView, 
  Current,
  ProfilePhoto,
  Profile,
  ChoosePhoto,
  ChooseText,
} from './styles';

const Photo = () => {
  const [checked, setChecked] = useState(User[checked]);

  return (
    <ProfileView>
      
      <FlatList 
        horizontal={true}
        style={{
          marginBottom: -30,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={User}
        renderItem={({ item }) => <CheckBox
        style={{flex: 1, marginRight: 15}}
        onClick={() => setChecked(User[checked])}
        isChecked={item.checked}
        checkedImage={<Image source={item.image} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={item.imageUn} style={{ width:120, height: 120 }} /> }
    /> } 
        
      />
         
      </ProfileView>
  );
}


export default Photo;