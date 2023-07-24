import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationsView from './Components/NotificationsPage'; // Replace with the actual path to NotificationsView.js

const App = () => {
  return (
    <View style={styles.container}>
      <NotificationsView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
