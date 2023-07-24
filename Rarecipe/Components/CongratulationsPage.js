import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const CongratulationsPage = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 90 }}>🤝🏽</Text>
            <Text style={{ fontFamily: 'poppins_semibold', fontSize: 35, marginTop: 20 }}>Congratulations</Text>
            <Text style={{ fontFamily: 'poppins_light', fontSize: 18, marginTop: 20 }}>You can now explore more</Text>
            <Text style={{ fontFamily: 'poppins_light', color: '#701773', fontSize: 20, marginTop: 3 }}>Rarecipe</Text>

            <TouchableOpacity
                style={{
                    marginTop: 50,
                    width: 289,
                    height: 70,
                    backgroundColor: '#FF562244',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontFamily: 'poppins_semibold', color: '#FFFFFF', fontSize: 18 }}>Find Recipe ⇢</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CongratulationsPage;
