import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image } from 'react-native';
import { useStateValue } from '../../contexts/theme';

import { Wrapper, 
  ImageView, 
  Close, 
  Name, 
  Life, 
  Header,
  Content,
  Title,
  Detail,
  TitleView,
  InfoView
} from './styles';

const ScientistDetail = ({ close, life, scientist, image, who, award, nationality }) => {
  const [state] = useStateValue();
  return (
    <Wrapper>
      <Header style={styles.shadow}>
       
      
        <ImageView>
        <Close onPress={close}>
          <Ionicons style={{
              alignSelf: "flex-end",
              
            }} name="ios-arrow-down" size={28} color={state.theme.title} />
        </Close>
        </ImageView>

        <TitleView>
          <Image 
            style={{
              height: 110,
              width: 110
            }}
      
            source={{uri : `${image}` }}
          />

            
          <InfoView>
            <Name>{ scientist }</Name>
            <Life>{ life } </Life>
            <Life>{ nationality }</Life>
          </InfoView>
          
        </TitleView>

      
        
        
      </Header>
      
      <Content showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <Title>🧐 Quem foi? </Title>
        <Detail>
          { who }
        </Detail>
        <Title>🎖 Prêmios </Title>
        <Detail style={{
          width: 240
        }}>
          { award }
        </Detail>
        <Title>💡 Descobertas </Title>
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