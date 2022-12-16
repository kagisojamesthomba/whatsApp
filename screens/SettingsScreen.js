import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>settings</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
