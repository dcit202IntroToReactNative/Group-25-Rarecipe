import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, Button } from 'react-native';

const CreateAccountPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setChecked] = useState(false);

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

            <Text style={{ fontFamily: 'poppins_light', color: '#121212', fontSize: 14, width: 190, marginTop: 4 }}>
                Let's help you set up your account, it won't take long.
            </Text>

            <Text style={{ fontFamily: 'poppins_light', color: '#000000' }}>
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
                value={fullName}
                onChangeText={setFullName}
                // Other TextInput props as needed
            />

            <Text style={{ fontFamily: 'poppins_light', color: '#000000', marginTop: 24 }}>
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
                value={email}
                onChangeText={setEmail}
                // Other TextInput props as needed
            />

            <Text style={{ fontFamily: 'poppins_light', color: '#000000', marginTop: 24 }}>
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
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                // Other TextInput props as needed
            />

            <Text style={{ fontFamily: 'poppins_light', color: '#000000', marginTop: 24 }}>
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
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                // Other TextInput props as needed
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <CheckBox
                    style={{
                        width: 17,
                        height: 17,
                        flexShrink: 0,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#FF9C00', // Updated border color
                        backgroundColor: '#FFF',
                        marginRight: 8,
                    }}
                    value={isChecked}
                    onValueChange={setChecked}
                />
                <Text style={{ fontFamily: 'poppins_light', color: '#FF9C00' }}>Accept terms & Conditions</Text>
            </View>

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
                    Sign Up
                </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <View style={{ width: 50, height: 1, backgroundColor: '#D9D9D9' }} />
                <Text style={{ fontFamily: 'poppins_light', color: '#C5C4C4', marginHorizontal: 8 }}>
                    or Sign in With
                </Text>
                <View style={{ width: 50, height: 1, backgroundColor: '#D9D9D9' }} />
            </View>

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
