import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      {/* Four buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>aaa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>bbb</Text>
      </TouchableOpacity>
      {/* Floating button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>ccc</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ddd</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>eee</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // Platform-specific shadow property
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  floatingButton: {
    backgroundColor: '#772F5E',
    borderRadius: 50,
    padding: 15,
    bottom: 40,
    marginHorizontal: -25,
    // Platform-specific shadow property
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  floatingButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default NavigationBar;
