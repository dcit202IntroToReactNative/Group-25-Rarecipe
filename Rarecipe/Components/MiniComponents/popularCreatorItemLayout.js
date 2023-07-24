import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PopularCreatorItemLayout = ({ creator }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: creator.image_url }} style={styles.creatorImage} />
            <Text style={styles.creatorName}>{creator.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginHorizontal: 12,
        flexDirection: 'column',
        alignItems: 'center',
    },
    creatorImage: {
        width: 95,
        height: 95,
        borderRadius: 50,
        marginStart: 6,
        marginEnd: 6,
        marginTop: 5,
    },
    creatorName: {
        marginTop: 10,
        fontSize: 16,
        color: '#999',
    },
});

export default PopularCreatorItemLayout;
