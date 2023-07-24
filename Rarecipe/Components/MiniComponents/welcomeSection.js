import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import Ic_filter from "../../assets/ic_filter.svg";
import Ic_search from "../../assets/ic_search.svg";

class WelcomeSection extends Component {

     handleSearch = () => {
        this.props.navigation.navigate('SearchPage');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <View style={styles.greetingsContainer}>
                        <Text style={styles.greeting}>Hello Denna,</Text>
                        <Text style={styles.greeting2}>What are you cooking today?</Text>
                    </View>
                    <Image
                        style={styles.profileImage}
                        source={require("../../assets/profile_photo.jpeg")}
                    />
                </View>
                <View style={styles.secondRow}>
                    <View style={styles.searchInputContainer}>
                        <Ic_search style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search for recipes"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => alert("Filter")}
                    >
                        <Ic_filter style={styles.filterIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginStart: 25,
        marginEnd: 25,
        marginTop: 40,
    },
    firstRow: {
        flexDirection: "row",
        marginBottom: 27,
        justifyContent: "space-between",
    },
    greetingsContainer: {
        marginTop: 5,
        display: "flex",
    },
    greeting: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 24,
    },
    greeting2: {
        textAlign: "left",
        fontSize: 18,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: "#000",
        borderWidth: 0,
        marginTop: 1,
    },
    secondRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchInputContainer: {
        height: 'auto',
        flexDirection: "row",
    },
    searchIcon: {
        alignSelf: "center",
        marginEnd: 10,
        width: 30,
        height: 30,
    },
    searchInput: {
        width: '75%',
        height: 40,
        borderRadius: 12,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    filterButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#772F5E",
        borderColor: "#fff",
        borderWidth: 1,
        padding: 10,
        alignItems: "center",
        marginEnd: 10,
    },
    filterIcon: {
        width: 20,
        height: 20,
        alignSelf: "center",
    },
});

export default WelcomeSection;
