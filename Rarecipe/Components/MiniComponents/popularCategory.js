import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import TrendingFoodItemLayout from './trendingFoodItemLayout';
import trendingData from '../../trending_foods.json'; // Replace with your JSON data

const categories = ['Breakfast', 'Animalia', 'Salad', 'Snacks', 'Desserts'];

const PopularCategorySection = () => {
    const [activeFilter, setActiveFilter] = React.useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.popularCategoryText}>Popular Category</Text>
            <ScrollView
                horizontal contentContainerStyle={styles.filterButtonsScrollView}
                showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.filterButton,
                            activeFilter === index && styles.activeFilterButton,
                        ]}
                        onPress={() => setActiveFilter(index)}
                    >
                        <Text
                            style={[
                                styles.filterButtonText,
                                activeFilter === index && styles.activeFilterButtonText,
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <FlatList
                data={trendingData.foodItems}
                renderItem={({ item }) => <TrendingFoodItemLayout item={item} />}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.popularSectionRecycler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
    },
    popularCategoryText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 12,
        marginStart: 20,
    },
    filterButtonsScrollView: {
        marginTop: 12,
        marginHorizontal: 12,
    },
    filterButton: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 15,
        backgroundColor: 'white',
        marginRight: 12,
    },
    activeFilterButton: {
        backgroundColor: '#772F5E',
    },
    filterButtonText: {
        fontSize: 16,
        color: '#333',
    },
    activeFilterButtonText: {
        color: '#fff',
    },
    popularSectionRecycler: {
        marginTop: 12,
    }
});

export default PopularCategorySection;
