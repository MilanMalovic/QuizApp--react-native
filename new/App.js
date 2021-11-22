import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';

const App = () => {
  return (
    <View style = {StyleSheet.container}>
        <Home/>
    </View>

  )
};

export default App;

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:16
  }
})