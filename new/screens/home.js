import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Title from './components/title';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />

            <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://previews.123rf.com/images/jovanas/jovanas1606/jovanas160600377/58893843-quiz-icon.jpg' }}
                    style={styles.banner}
                    resizeMode="contain"
                />

            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
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
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%",
    },
    button: {
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    }
});
