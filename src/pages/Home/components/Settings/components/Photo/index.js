import React from 'react';
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { Edit } from '../../styles';
import User from '../../../../../../data/user';

import { 
  ProfileView, 
  Current,
  ProfilePhoto,
  Profile,
  ChoosePhoto,
  ChooseText,
} from './styles';

const Photo = () => {
  const user = [
    {
      id: 1
    }
  ]

  return (
    <ProfileView>
      
      
      <FlatList 
        horizontal={true}
        style={{
          marginBottom: -30,
        }}
        contentContainerStyle={{
          
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={User}
        renderItem={({ item }) => 
         
            <Image source={item.image} style={{ 
              
              width:130,
              height: 130,
              
              
            }}/>
          
          
        
         } 
    /> 

      
      
    </ProfileView>
    );
}

export default Photo;