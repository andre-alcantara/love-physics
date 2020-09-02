import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Leaderboard = ({ nickname, stars }) => {
  return (
    <>
      <Text>{nickname}</Text>
      
      {console.log(nickname)}
    </>
  );
}

export default Leaderboard;