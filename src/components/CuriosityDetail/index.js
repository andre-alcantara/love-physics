import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useStateValue } from '../../contexts/theme';

import { Wrapper, 
  ImageView, 
  Close, 
  Name, 
  Life, 
  Header,
  Content,
  Title,
  Detail } from './styles';
  
import Glasses from '../../assets/curiosity/glasses.svg';

const CuriosityDetail = ({ title, close, desc, image }) => {
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
      <Image
          style={{
            height: 100,
            width: 100,
            
          }} 
          source={{uri : `${ image }` }}
            
          />

        <Name> { title } </Name>
      </ImageView>
      
      
    </Header>
    
    <Content showsVerticalScrollIndicator={false} >
      <Detail>
        {desc}
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