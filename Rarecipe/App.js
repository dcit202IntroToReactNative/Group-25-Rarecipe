import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import CreateAccountPage from './Components/CreateAccountPage';

// This function simulates the loading process during the splash screen.
// You can replace this with your actual loading process logic, like fetching data or loading fonts.
const simulateLoading = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second loading time
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading process during the splash screen.
    simulateLoading().then(() => setLoading(false));
  }, []);

  return (
      <View style={styles.container}>
        {loading ? (
            // Show the splash screen with an activity indicator while loading.
            <View style={styles.splashContainer}>
              <Image source={require('./assets/Splash_image.png')} style={styles.splashImage} />
              <ActivityIndicator size="large" color="#562244" />
            </View>
        ) : (
            // When loading is complete, render the CreateAccountPage component.
            <>
              <CreateAccountPage />
              <StatusBar style="auto" />
            </>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 200, // Adjust the width and height as per your splash image size
    height: 200,
    marginBottom: 20,
  },
});
