import React from 'react';
import { StyleSheet ,View, Text, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import { Container } from './styles';

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5555',
    width: '50%',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: hp('2%')
  },

  text: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold'
  }
})

export default Button;