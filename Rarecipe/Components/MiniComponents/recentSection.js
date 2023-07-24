import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import TrendingFoodItemLayout from './trendingFoodItemLayout';
import trendingData from '../../trending_foods.json'; // Replace with your JSON data
import Ic_more from "../../assets/ic_arrow_right.svg";

const RecentSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <Text style={styles.trendingSectionText}>Recent recipes</Text>
                <View style={styles.seeAllView}>
                    <Text style={styles.seeAllText}>See All</Text>
                    <Ic_more style={styles.moreIcon} />
                </View>
            </View>
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
        marginTop: 20,
    },
    trendingSectionText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 12,
        marginStart: 20,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    seeAllView: {
        flexDirection: 'row',
    },
    seeAllText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#772F5E',
        marginHorizontal: 12,
        marginTop: 12,
    },
    moreIcon: {
        marginTop: 12,
        marginHorizontal: 4,
    }
});

export default RecentSection;
