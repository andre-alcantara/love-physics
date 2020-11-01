import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useStateValue } from '../../../../../../contexts/theme';

import { Wrapper, 
  ImageView, 
  Close, 
  Name, 
  Life, 
  Header,
  Content,
  Title,
  Detail } from './styles';

import Glasses from '../../../../../../assets/curiosity/glasses.svg';

const CuriosityDetail = ({ title, close }) => {
  const [state] = useStateValue();

  return (
    <Wrapper>
    <Header style={styles.shadow}>
     
   
      <ImageView>
      <Close onPress={close}>
        <Ionicons style={{
            alignSelf: "flex-end",
            
            
          }} name="ios-arrow-down" size={28} color={state.theme.icon} />
      </Close>
        <Glasses width={110} height={110} />
        <Name> { title } </Name>
      </ImageView>
      
      
    </Header>
    
    <Content showsVerticalScrollIndicator={false} >
      <Detail>
        
      </Detail>

    
    </Content>
  </Wrapper>
  
  );
}

export default CuriosityDetail;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  }
})