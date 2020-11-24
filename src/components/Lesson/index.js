import React, { useState, useContext } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { AuthContext } from '../../contexts/auth';

import { useStateValue } from '../../contexts/theme';
import { useNavigation } from '@react-navigation/native';

import { Content, 
  Difficulty, 
  DifficultyText, 
  Card, 
  SubTitle, 
  DescriptionScroll,
  Description,
  MaterialText,
  Material,
  Videos,
  Quiz
} from './styles';
import { Edit, EditView } from '../../pages/Settings/styles';


const Lesson = ({ color, question }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [visibleGo, setVisibleGo] = useState(false);
  const [matter, setMatter] = useState([]);

  const { user } = useContext(AuthContext);

  const heart = user.heart;

  const questions = question.matterContent;
  const [state] = useStateValue();

  return (
    <Content horizontal={true} showsHorizontalScrollIndicator={false}>
      
    <FlatList 
      style={{
        height: '100%',
        marginTop: 60
      }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={questions}
        renderItem={({ item }) => 
        
        <Card>  
        <Difficulty style={{
          backgroundColor: color
        }}>
          <DifficultyText>
            {item.difficulty}
          </DifficultyText>
        </Difficulty>

        <SubTitle>
          {item.title}
        </SubTitle>
          
        <DescriptionScroll>
          <Description>
            {item.description}
          </Description>
        </DescriptionScroll>
       
        <MaterialText>
          📚 Materiais de apoio:
        </MaterialText>
        <Material>
          <Videos>
            <AntDesign name="youtube" size={40} color={state.theme.title} />
            <MaterialText style={{
              color: state.theme.title,
              marginTop: 8,
              marginBottom: 2
            }}>
              Vídeos
            </MaterialText>
          </Videos>
        
          <Quiz onPress={() => {
           
            if(heart >= item.star) {
              setMatter(item.questions);
              setVisibleGo(true)
            } 
            else {
              setHeartCount(item.star);
              
              
              setVisible(true)
            }
          }}>
            <AntDesign name="heart" size={40} color="#FFF" />
            <MaterialText style={{
              color: '#FFF',
              marginTop: 8,
              marginBottom: 2
            }}>
              Praticar
            </MaterialText>
          </Quiz>
        </Material>

        <Modal 
        onBackdropPress={() => setVisible(false)}
        isVisible={visible}
        coverScreen={true}
        >
          <EditView style={{ height: 330, alignItems: 'center', paddingRight: 17, paddingLeft: 17 }}>
            <AntDesign name="heart" size={60} color='#FF5555' />
            <SubTitle style={{ textAlign: 'center' }}>Você não possui corações suficientes!</SubTitle>
            <MaterialText style={{ textAlign: 'center', fontSize: 16 }}>Corações necessários para desbloquear lição: {heartCount}</MaterialText>
            <Edit onPress={() => setVisible(false)}
            style={{ marginBottom: -4, marginTop: 14 }}
            >
              <Text style={{
                fontFamily: 'Montserrat_600SemiBold',
                color: '#FFF',
                fontSize: 16
              }}>OK</Text>
            </Edit>
          </EditView>
      </Modal>


      <Modal 
        onBackdropPress={() => setVisibleGo(false)}
        isVisible={visibleGo}
        coverScreen={true}
        >
          <EditView style={{ height: 330, alignItems: 'center', paddingRight: 17, paddingLeft: 17 }}>
            <AntDesign name="heart" size={60} color='#FF5555' />
            <SubTitle style={{ textAlign: 'center' }}>Tem ceteza que deseja praticar essa lição?</SubTitle>
            <Edit onPress={() =>  navigation.replace('Quiz', {
              question: matter
            })}
            style={{ marginBottom: -4, marginTop: 20 }}
            >
              <Text style={{
                fontFamily: 'Montserrat_600SemiBold',
                color: '#FFF',
                fontSize: 16
              }}>Praticar</Text>
            </Edit>

            <TouchableOpacity onPress={() => setVisibleGo(false)}>
              <Text style={{
                  fontFamily: 'Montserrat_600SemiBold',
                  marginTop: 22,
                  marginBottom: -8,
                  color: state.theme.title,
                  fontSize: 16
                }}>Voltar depois</Text>
            </TouchableOpacity>
          </EditView>
      </Modal>


      </Card>
      } 
    />  

    
    </Content>
    
  );
}

export default Lesson;