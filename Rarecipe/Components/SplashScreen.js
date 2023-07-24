import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ onFinishLoading }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        simulateLoading().then(() => setLoading(false));
    }, []);

    const simulateLoading = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second loading time
    };

    useEffect(() => {
        if (!loading && onFinishLoading) {
            onFinishLoading(); // Notify the parent component that loading is finished
        }
    }, [loading, onFinishLoading]);

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.splashContainer}>
                    <Image source={require('../assets/Splash_image.png')} style={styles.splashImage} />
                    <ActivityIndicator size="large" color="#562244" />
                </View>
            ) : null}
        </View>
    );
};

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

export default SplashScreen;
