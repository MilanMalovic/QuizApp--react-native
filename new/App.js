import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import 'react-native-gesture-handler';

const App = () => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

  ) 
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16
  }
})