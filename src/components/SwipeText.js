import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import { Container } from './styles';

const SwipeText = () => {
  return ( 
    <View>
        <Text style={styles.text}>Deslize para continuar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        color: '#FF5555',
        textAlign: 'center',
        fontFamily: 'Montserrat_600SemiBold',
        marginTop: hp('2%'),
        fontSize: hp('2%')
    }
})

export default SwipeText;