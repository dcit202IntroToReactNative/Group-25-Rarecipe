import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CreateAccountPage from './Components/CreateAccountPage';
import SplashScreen from './Components/SplashScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = () => {
    setLoading(false);
  };

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
