import React from 'react';
import { Image,SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const Result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: 'https://previews.123rf.com/images/jovanas/jovanas1606/jovanas160600377/58893843-quiz-icon.jpg' }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
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
