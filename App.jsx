// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home';
import createapp   from "./src/creationtask";

const RootStack = createNativeStackNavigator({
  screenOptions: {headerShown: false},
  initialRouteName: 'Home',
  screens: {
    Home: Home,
    Add: createapp
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}