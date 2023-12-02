// src/HomePage.js
import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Page</Text>
        <Icon name="home" size={30} color="black" />
        {/* Your additional Home screen content goes here */}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
