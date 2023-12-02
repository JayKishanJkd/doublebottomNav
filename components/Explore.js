// src/ExplorePage.js
import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExplorePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Explore Page</Text>
        <Icon name="search" size={30} color="black" />
        {/* Your additional Explore screen content goes here */}
      </View>
    </SafeAreaView>
  );
};

export default ExplorePage;
