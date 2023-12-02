// src/CalendarPage.js
import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CalendarPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar Page</Text>
        <Icon name="calendar" size={30} color="black" />
        {/* Your additional Calendar screen content goes here */}
      </View>
    </SafeAreaView>
  );
};

export default CalendarPage;
