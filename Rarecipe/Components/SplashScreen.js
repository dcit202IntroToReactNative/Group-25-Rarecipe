import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simulate a delay for the splash screen (e.g., 2 seconds)
        const splashTimer = setTimeout(() => {
            // Navigate to your desired screen after the splash screen
            navigation.replace('CreateAccountPage');
        }, 2000); // Adjust the delay time as needed

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(splashTimer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Add your splash screen image or logo here */}
            <Image source={require('../assets/splash.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF', // Set your desired background color
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain', // Adjust the image's resize mode as needed
    },
});

export default SplashScreen;
