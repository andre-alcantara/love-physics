import React from 'react';
import { View, Text } from 'react-native';

import { Position, Name, Star } from './styles';

const Leaderboard = ({ nickname, stars }) => {
  return (
    <Position>
      
      <Name>{ nickname }</Name>
      <Star>{ stars }</Star>
    </Position>
      
  );
}

export default Leaderboard;