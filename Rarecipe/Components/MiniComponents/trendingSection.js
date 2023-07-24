import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TrendingFoodItemLayout from './trendingFoodItemLayout';
import trendingData from '../../trending_foods.json'; // Replace with your JSON data

const TrendingSection = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={trendingData.foodItems}
                renderItem={({ item }) => <TrendingFoodItemLayout item={item} />}
                keyExtractor={(item) => item.name}
                horizontal // Set FlatList to horizontal mode
                showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
    },
});

export default TrendingSection;
