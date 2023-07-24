import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import WelcomeSection from './MiniComponents/welcomeSection';
import TrendingSection from './MiniComponents/trendingSection';
import PopularCategory from './MiniComponents/popularCategory';
import PopularCreators from './MiniComponents/popularCreators';
import RecentSection from './MiniComponents/recentSection';
import NavigationBar from './MiniComponents/NavigationBar';

const HomeLayout = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <WelcomeSection />
                <TrendingSection />
                <PopularCategory />
                <RecentSection />
                <PopularCreators />
            </ScrollView>
            <NavigationBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeLayout;
