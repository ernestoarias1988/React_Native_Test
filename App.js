
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Navigation from './components/Navigation';
import UserContext from './UserContext';

export default function App() {
  return (
    
    <UserContext.Provider>
      <Navigation/>
      <StatusBar style="auto"/>
    </UserContext.Provider>
  );
}

