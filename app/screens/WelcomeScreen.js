import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.slogan}>Discard what you don't need for money!</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    slogan: {
        fontSize: 20,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#fc5c65'
    },

    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4ecdc4',
    }
})

export default WelcomeScreen;