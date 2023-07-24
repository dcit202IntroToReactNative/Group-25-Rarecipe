import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchIconContainer}>
                        <Icon name="ios-search" size={24} color="#888" />
                    </View>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for recipes"
                        placeholderTextColor="#888"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 40,
    },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        elevation: 3,
    },
    searchIconContainer: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        color: "#000",
        fontSize: 16,
    },
});

export default SearchBar;
