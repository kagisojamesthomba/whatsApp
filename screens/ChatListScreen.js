import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>chatlist</Text>
      <Button
        title='Go to chat screen'
        onPress={() => {
          props.navigation.navigate('ChatScreen');
        }}
      />
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
