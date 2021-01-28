import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, SafeAreaView, Button, Platform, StatusBar as Status } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageScreen from './app/screens/ImageScreen';

export default function App() {


  const { landscape } = useDeviceOrientation();


  return (
    <WelcomeScreen />

    // <ImageScreen />

    // <SafeAreaView style={styles.container}>
    //   <Button title='hello' />
    //   <Text>Hello React Native</Text>
    //   <TouchableWithoutFeedback onPress={() => console.log('img tapped')}>
    //     <Image
    //       fadeDuration={500}
    //       source={{
    //         width: 300,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300"
    //       }} />
    //   </TouchableWithoutFeedback>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? Status.currentHeight : 0
  },
});
