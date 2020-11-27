import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Edit, EditView } from '../../pages/Settings/styles';
import { AntDesign } from '@expo/vector-icons';
import { SubTitle, MaterialText } from '../Lesson/styles';

import { useNavigation } from '@react-navigation/native';

import { Activities, 
  ActivitiesText, 
  StartButton, 
  StartText 
} from './styles';

import Start from '../../assets/button/start.svg';

const Activity = ({ question }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);


  const handleEnter = () => {
    if(question.finished == true) {
      navigation.navigate('ActivityDetail', {
        question: question
       })
    }
    else {
      setVisible(true)
    }
  }

  return (
    <Activities onPress={handleEnter}>
      <View style={{
        marginLeft: 20,
        height: 300, 
        width: 260,
        backgroundColor: question.matterColor,
        borderRadius: 20,
        paddingLeft: 25,
        paddingTop: 25,
        
      }} >

      <Image
        style={{
          height: 110,
          width: 114,
            
        }} 
        source={{uri : `${ question.matterIcon }` }}
            
        />
       
      <ActivitiesText>
        {question.matterName}
      </ActivitiesText>


      <StartButton>
        <StartText>ESTUDAR</StartText>
        <Start style={{
            marginLeft: 10,  
        }} height={25} width={25} />
      </StartButton>

      </View>

      <Modal 
      onBackdropPress={() => setVisible(false)}
      isVisible={visible}
      coverScreen={true}
      >
        <EditView style={{ height: 280, alignItems: 'center', paddingRight: 17, paddingLeft: 17 }}>

          <SubTitle style={{ textAlign: 'center' }}>  Acalme-se jovem! ✋</SubTitle>
          <MaterialText style={{ textAlign: 'center', fontSize: 18, marginTop: 19 }}>Parece que está matéria ainda não está disponível. Volte novamente mais tarde.</MaterialText>
          <Edit onPress={() => setVisible(false)}
          style={{ marginBottom: 8, marginTop: 14 }}
          >
            <Text style={{
              fontFamily: 'Montserrat_600SemiBold',
              color: '#FFF',
              fontSize: 16
            }}>OK</Text>
          </Edit>
        </EditView>
    </Modal>
  
    </Activities>

    
    );
    }

export default Activity;

