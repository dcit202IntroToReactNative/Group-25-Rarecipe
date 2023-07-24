import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const TrendingFoodItemLayout = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
            <View style={styles.creatorContainer}>
                <Image source={{ uri: item.creatorImageUrl }} style={styles.profileImage} />
                <Text style={styles.creatorName}>{item.creatorName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 12,
        width: 300,
    },
    foodImage: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    foodName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 8,
    },
    creatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    creatorName: {
        fontSize: 16,
        color: '#999',
        marginLeft: 8,
    },
});

export default TrendingFoodItemLayout;
