import React from 'react';
import { Image,View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Title from './components/title';

const Home = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Title />

            <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://image.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600w-1720665448.jpg' }}
                    style={styles.banner}
                    resizeMode="contain"
                />

            </View>

            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}> 
                <Text>Start</Text> 
            </TouchableOpacity>

        </View>

    )
};

export default Home;

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
