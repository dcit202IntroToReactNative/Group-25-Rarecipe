import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

const WelcomingSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greetingText}>Welcome to our App!</Text>
            <Text style={styles.greeting2Text}>Explore amazing recipes and more.</Text>
            <View style={styles.profileImageContainer}>
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/profile_photo.jpeg')}
                />
            </View>
            <TextInput
                style={styles.searchView}
                placeholder="Search for recipes"
                placeholderTextColor="#bbb"
            />
            {/* The filter button image should be imported and used here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    greetingText: {
        fontFamily: 'poppins_semibold',
        fontSize: 24,
        color: '#111',
    },
    greeting2Text: {
        color: '#666',
        height: 17,
        marginTop: 8,
    },
    profileImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden', // This makes the container circular
        marginTop: 45,
        marginRight: 35,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // This ensures the image fills the container
    },
    searchView: {
        width: 255,
        height: 40,
        marginTop: 30,
        marginBottom: 8,
        paddingLeft: 40,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        color: '#222',
    },
});

export default WelcomingSection;
