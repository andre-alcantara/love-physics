import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { useStateValue } from '../contexts/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
    name: 'trophy-outline',
  },
}

const DashboardRoutes = () => {
  const [state] = useStateValue();

  return (
      <Tab.Navigator tabBarOptions={{
        style: {
          backgroundColor: state.theme.bottomTab,
          borderTopColor: state.theme.bottomTab,
        },
        activeTintColor: state.theme.inactiveTintColor,
        inactiveTintColor: state.theme.activeTintColor,
        showLabel: false,
      }}>
        <Tab.Screen options={ ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Ionicons name={name} size={33} color={color} />
            } 
          }) 
        } 
        name='Home' component={Home} /> 

        <Tab.Screen options={ ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <MaterialCommunityIcons name={name} size={33} color={color} />
            } 
          }) } 
          name='Scientist' component={Scientist} />

        <Tab.Screen options={ ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <MaterialCommunityIcons name={name} size={33} color={color} />
            }, 
          }) 
        } name='Ranking' component={Ranking} />

        
      </Tab.Navigator>
    )
}

export default DashboardRoutes;