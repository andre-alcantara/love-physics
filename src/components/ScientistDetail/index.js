import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, Text, SafeAreaView } from 'react-native';

import { Wrapper, 
  ImageView, 
  Close, 
  Name, 
  Life, 
  Header,
  Content,
  Title,
  Detail } from './styles';

const ScientistDetail = ({ close, life, scientist, image, who, award }) => {
  

  return (
    <Wrapper>
      <Header style={styles.shadow}>
       
      
        <ImageView>
        <Close onPress={close}>
          <Ionicons style={{
              alignSelf: "flex-end",
              
            }} name="ios-arrow-down" size={28} color="black" />
        </Close>

        <Image 
          style={{
            height: 110,
            width: 110
          }}
    
          source={{uri : `${image}` }}
        />

          
        </ImageView>
        <Name> { scientist } </Name>
        <Life> { life } </Life>
        <Life>Alemanha</Life>
        
      </Header>
      
      <Content showsVerticalScrollIndicator={false} >
        <Title> Quem foi? </Title>
        <Detail>
          { who }
        </Detail>
        <Title> Prêmios </Title>
        <Detail style={{
          width: 240
        }}>
          { award }
        </Detail>
        <Title> Descobertas </Title>
        <Detail style={{
          width: 240
        }}>
          { award }
        </Detail>
      </Content>
    </Wrapper>
    
  );
}

export default ScientistDetail;

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