import React, { useEffect, useState, useContext, useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import firebase from '../../services/firebaseConnection'
import { AuthContext } from '../../contexts/auth';
import { QuestionsContext } from '../../contexts/questions';

import { Modalize } from 'react-native-modalize';
import Modal from 'react-native-modal';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PlayerCard from './components/PlayerCard';

import Leaderboard from 'react-native-leaderboard';

import { useStateValue } from '../../contexts/theme';

import { Content, ListView } from '../Scientist/styles';
import { Wrapper, 
  Header, 
  TextView, 
  Title,
} from './styles';
import { EditView } from '../Settings/styles';
import { HeartCount, StarView } from '../../components/Header/styles';

import Heart from '../../assets/characters/heart.svg';
import { Entypo } from '@expo/vector-icons';

const Ranking = () => {
  const [state] = useStateValue();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [heart, setHeart] = useState('');
  const [image, setImage] = useState('');
  const [answered, setAnswered] = useState('');
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState();

  const { user, setUser } = useContext(AuthContext);
  const { matters } = useContext(QuestionsContext);

  const modalizeRef = useRef(null);

  const onOpen = (index) => {
    setName(index.name);
    setHeart(index.heart);
    setAnswered(index.answered);
    setImage(index.image);
    setVisible(true);
    modalizeRef.current?.open();
  }

  useEffect(() => {
    async function listUsers(){
      await firebase.database().ref('users').orderByChild('heart').on('value', (snapshot) => {
        setUsers([]);
        snapshot.forEach((value) => {
          let user = {
            key: value.key,
            image: value.val().image,
            name: value.val().name,
            heart: value.val().heart,
            answered: value.val().answered
          }
          setUsers(oldUser => [...oldUser, user])
        })
      })
    }
    listUsers()
    
  }, [])

  async function array() {
    var qtd = 0;
    for(var i = 0; i < matters.length; i++ ) {
      for(var j = 0; j < matters[i].matterContent.length; j++) {
        qtd += matters[i].matterContent[j].questions.length;
      }
    }
    setPosition(qtd)
  }
  array();

 

  return (
    <Wrapper>
      <Header>
        <TextView>
          <Title>Ranking</Title>
        </TextView>  
           
                                       
      </Header>

      <ListView style={{
        marginTop: 30,
        paddingTop: 95,
        paddingBottom: 145
      }}>
        <Content>
          <PlayerCard />
        </Content>
        
      <Leaderboard 
        data={users} 
        sortBy='heart'
        labelBy='name'
        icon='image'
        onRowPress={(item) => onOpen(item)}
        oddRowColor= {state.theme.bottomTab}
        evenRowColor= {state.theme.bottomTab}
        scoreStyle={{
          color: state.theme.heart,
          fontSize: 30,
          fontFamily: 'Montserrat_600SemiBold',
          padding: 12
        }}
        rankStyle={{
          fontFamily: 'Montserrat_600SemiBold',
          color: state.theme.title
        }}
        labelStyle={{
          fontFamily: 'Montserrat_600SemiBold',
          marginLeft: 13,
          color: state.theme.title
        }}
        containerStyle={{
          paddingLeft: 30
        }}
      />
      </ListView>

      <Modal 
        onBackdropPress={() => setVisible(false)}
        isVisible={visible}
        coverScreen={true}
      >
        <EditView style={{
          alignItems: 'center',
          height: 320,
          width: 320,
        }}>

          <Image
            style={{
              height: 120,
              width: 120,
              marginBottom: 20
            }} 
            source={{uri : `${ image }` }}
          />

          <Title style={{
            marginBottom: 20,
            color: state.theme.title
          }}>{name}</Title>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <StarView style={{
              height: 60,
              paddingLeft: 17 ,
              marginLeft: 0
            }}>
              <Heart height={30} width={30} />
              <HeartCount>{heart}</HeartCount>
            </StarView>

            <StarView style={{
              height: 60,
              backgroundColor: '#54AD67'
            }} onPress={() => {}}>
            <Entypo name="open-book" size={32} color="white" />
              <HeartCount>{answered}</HeartCount>
            </StarView>
          </View>
        </EditView>
      </Modal>
    </Wrapper>  
  );
}

export default Ranking;

const styles = StyleSheet.create({
  statsView: {
    justifyContent: 'flex-end',
    marginTop: 16,
    marginBottom: -16,
    alignSelf: 'center' ,
    alignItems: 'center', 
    borderRadius: 20, 
    height: hp('20%'),
    width: '90%'
  }
})