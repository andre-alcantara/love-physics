import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Screens
import Home from '../pages/Home';
import Scientist from '../pages/Scientist';
import Ranking from '../pages/Ranking';
import Profile from  '../pages/Profile';

const icons = {
  Home: {
    name: 'md-planet',
  },
  Scientist: {
    name: 'brain',
  },
  Ranking: {
    name: 'barschart',
  },
  Profile: {
    name: 'face-profile',
  }
}

export default function TabRoutes() {
    return (
      <Tab.Navigator tabBarOptions={{
        style: {
          backgroundColor: '#FFF',
        },
        activeTintColor: '#282A36',
        inactiveTintColor: '#C6C2C2',
        showLabel: false,
      }}>
        <Tab.Screen options={ ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Ionicons name={name} size={35} color={color} />
            } 
          }) 
        } 
        name='Home' component={Home} /> 

        <Tab.Screen options={ ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <MaterialCommunityIcons name={name} size={35} color={color} />
            } 
          }) } 
          name='Scientist' component={Scientist} />

        <Tab.Screen options={ ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <AntDesign name={name} size={35} color={color} />
            }, 
          }) 
        } name='Ranking' component={Ranking} />

        <Tab.Screen options={ ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <MaterialCommunityIcons name={name} size={35} color={color} />
            } 
          })
        } name='Profile' component={Profile} />
      </Tab.Navigator>
    )
}