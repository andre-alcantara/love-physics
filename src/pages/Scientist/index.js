import React from 'react';
import { StyleSheet} from 'react-native';

import { Wrapper, Header, TextView ,Title } from './styles';

const Scientist = () => {
  return (
    <Wrapper>
      <Header style={styles.shadowCard}>
        <TextView>
          <Title>Físicos</Title>
        </TextView>
      </Header>
    </Wrapper>
  ); 
}

export default Scientist;

const styles = StyleSheet.create({
  shadowCard: {
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2, 
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
})