import React from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, Button } from 'react-native';

const CreateAccountPage = () => {
    const handleSignUp = () => {
        // Perform the sign-up logic here
        // For example, navigate to the congratulation page
        // You can use navigation libraries like React Navigation
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 16 }}>

            <Text style={{ fontFamily: 'poppins_semibold', color: '#000000', fontSize: 24, fontWeight: 'bold', marginTop: 24 }}>
                Create an account
            </Text>

            <Text style={{ fontFamily: 'poppins_light', color: '#505050', fontSize: 14, width: 190, marginTop: 4 }}>
                Let's help you set up your account, it won't take long.
            </Text>

            <Text style={{ fontFamily: 'poppins_light', color: '#676767', paddingTop:8 }}>
                Full Name
            </Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#D9D9D9', // Updated border color
                    borderRadius: 10,
                    padding: 20,
                    color: 'black',
                    marginTop: 10,
                }}
                placeholder="Enter your name"
                placeholderTextColor="#D9D9D9" // Updated hint text color
                // Other TextInput props as needed
            />

            <Text style={{ fontFamily: 'poppins_light', color: '#676767', marginTop: 24 }}>
                Email
            </Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#D9D9D9', // Updated border color
                    borderRadius: 10,
                    padding: 20,
                    color: 'black',
                    marginTop: 10,
                }}
                placeholder="Enter your email"
                placeholderTextColor="#D9D9D9" // Updated hint text color
                // Other TextInput props as needed
            />

            <Text style={{ fontFamily: 'poppins_light', color: '#676767', marginTop: 24 }}>
                Password
            </Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#D9D9D9', // Updated border color
                    borderRadius: 10,
                    padding: 20,
                    color: 'black',
                    marginTop: 10,
                }}
                placeholder="Create password"
                secureTextEntry
                placeholderTextColor="#D9D9D9" // Updated hint text color
                // Other TextInput props as needed
            />

            <Text style={{ fontFamily: 'poppins_light', color: '#676767', marginTop: 24 }}>
                Confirm Password
            </Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#D9D9D9', // Updated border color
                    borderRadius: 10,
                    padding: 20,
                    color: 'black',
                    marginTop: 10,
                }}
                placeholder="Re-enter password"
                secureTextEntry
                placeholderTextColor="#D9D9D9" // Updated hint text color
                // Other TextInput props as needed
            />

            <CheckBox
                style={{ width: 20, height: 20, marginTop: 8 }}
                // Other CheckBox props as needed
            />

            <TouchableOpacity
                style={{
                    backgroundColor: '#562244', // Background color
                    borderRadius: 10, // Border radius
                    padding: 20,
                    marginTop: 10,
                }}
                onPress={handleSignUp}
            >
                <Text style={{ fontFamily: 'poppins_semibold', color: '#FFFFFF', textAlign: 'center', fontSize: 16 }}>
                    Sign Up   ➜
                </Text>
            </TouchableOpacity>

            <Button
                title="Sign in with Facebook"
                onPress={() => { }}
                color="#FFFFFF"
                // Other Button props as needed
            />

            <Button
                title="Sign in with Google"
                onPress={() => { }}
                color="#FFFFFF"
                // Other Button props as needed
            />
        </View>
    );
};

export default CreateAccountPage;
