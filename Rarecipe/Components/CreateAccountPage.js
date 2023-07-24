import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import FacebookIcon from '../assets/facebook_icon.svg';
import GoogleIcon from '../assets/google-svg.svg';
import '../assets/fonts/Poppins-Light.ttf';
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

    const handleSignIn = () => {
        // Handle the action when "Sign In" is clicked
        // For example, navigate to the sign-in page
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 16 }}>
            <Text style={{ fontFamily: 'poppins_semibold', color: '#494949', fontSize: 24, fontWeight: 'bold', marginTop: 24 }}>
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
            />

            {/* Re-implemented Checkbox */}
            <TouchableOpacity
                style={{
                    width: 17,
                    height: 17,
                    flexShrink: 0,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: isChecked ? '#562244FF' : '#FF9C00', // Change border color based on state
                    backgroundColor: isChecked ? '#562244FF' : '#FFF', // Change background color based on state
                    marginRight: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => setChecked(!isChecked)}
            >
                {isChecked && (
                    <View
                        style={{
                            width: 17,
                            height: 17,
                            borderRadius: 5,
                            backgroundColor: '#562244FF',
                        }}
                    />
                )}
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'Poppins',
                fontSize: 11,
                fontWeight: '400',
                lineHeight: 17,
                color: '#FF9C00',
                textAlign: 'center',
            }}>
                Accept terms & Conditions
            </Text>

            {/* Horizontal arrangement of Google and Facebook icons */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity style={styles.iconButton} onPress={() => { /* Handle Google sign-in */ }}>
                    <Image source={GoogleIcon} style={styles.icon} />
                </TouchableOpacity>

                <View style={{ width: 5 }} /> {/* 5px space between icons */}

                <TouchableOpacity style={styles.iconButton} onPress={() => { /* Handle Facebook sign-in */ }}>
                    <Image source={FacebookIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleSignIn} style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        fontFamily: 'Poppins',
                        fontSize: 11,
                        fontWeight: '500',
                        lineHeight: 17,
                        color: '#000', // Updated text color for "Already a member?"
                    }}>
                        Already a member?
                    </Text>
                    <Text style={{
                        fontFamily: 'Poppins',
                        fontSize: 11,
                        fontWeight: '500',
                        lineHeight: 17,
                        color: '#FF9C00', // Updated text color for "Sign In"
                    }} onPress={handleSignIn}>
                        Sign In
                    </Text>
                </View>
            </TouchableOpacity>

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
        </View>
    );
};

export default CreateAccountPage;

const styles = {
    iconButton: {
        marginLeft: 35,
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: 'rgba(105, 105, 105, 0.10)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        width: 44,
        height: 44,
        borderRadius: 10,
    },
};
