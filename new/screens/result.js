import React from 'react';
import { Image,SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg' }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
},
bannerContainer:{
    justifyContent:'center',
    alignItems:'center'
}
});
