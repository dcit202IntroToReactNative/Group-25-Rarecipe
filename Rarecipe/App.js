import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import CreateAccountPage from './Components/CreateAccountPage';
import SplashScreen from './Components/SplashScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const handleFinishLoading = () => {
    setLoading(false);
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      poppins_light: require('./assets/fonts/Poppins-Light.ttf'), // Replace with the correct path
      poppins_semibold: require('./assets/fonts/Poppins-SemiBold.ttf'), // Replace with the correct path
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <View />; // Render an empty view while the fonts are loading
  }

  return (
      <View style={styles.container}>
        {loading ? (
            <SplashScreen onFinishLoading={handleFinishLoading} />
        ) : (
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
});
