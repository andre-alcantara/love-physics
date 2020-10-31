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
  const [checked, setChecked] = useState(false);

  return (
    <ProfileView horizontal={true} showsHorizontalScrollIndicator={false}>
      
      <CheckBox
        style={{flex: 1, marginLeft: 6}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face1.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face1Un.png')} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 15}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face2.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face2Un.png')} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 15}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face3.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face3Un.png')} style={{ width:120, height: 120 }} /> }
      />
      <CheckBox
        style={{flex: 1, marginLeft: 15}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face4.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face4Un.png')} style={{ width:120, height: 120 }} /> }
      />
      <CheckBox
        style={{flex: 1, marginLeft: 15}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face5.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face5Un.png')} style={{ width:120, height: 120 }} /> }
      />
      <CheckBox
        style={{flex: 1, marginLeft: 15}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face6.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face6Un.png')} style={{ width:120, height: 120 }} /> }
      />
      <CheckBox
        style={{flex: 1, marginLeft: 15}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face7.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face7Un.png')} style={{ width:120, height: 120 }} /> }
      />  
      <CheckBox
        style={{flex: 1, marginLeft: 15}}
        onClick={() => setChecked(true)}
        isChecked={checked}
        checkedImage={<Image source={require('../../../../../../assets/users/face8.png')} style={{ width:120, height: 120 }} /> }
        unCheckedImage={<Image source={require('../../../../../../assets/users/face8Un.png')} style={{ width:120, height: 120 }} /> }
      />
      
    </ProfileView>
  );
}


export default Photo;