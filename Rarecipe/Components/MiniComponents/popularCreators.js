import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PopularCreatorItemLayout from './popularCreatorItemLayout';
import creatorsData from '../../popular_creators.json'; // Replace with your JSON data

const PopularCreatorsSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.popularCreatorsText}>Popular Creators</Text>
            <FlatList
                data={creatorsData.creators}
                renderItem={({ item }) => <PopularCreatorItemLayout creator={item} />}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        marginTop: 10,
        marginBottom: 90,
    },
    popularCreatorsText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 12,
    }
});

export default PopularCreatorsSection;
