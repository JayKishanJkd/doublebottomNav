// ModalScreen.js
import React from 'react';
import { View, Text, Button, Modal } from 'react-native';

const ModalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          // Handle modal close (Android back button)
          navigation.goBack();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
            <Text>This is a modal</Text>
            <Button
              title="Close Modal"
              onPress={() => {
                // Close the modal
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
