import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeSection from "./Components/MiniComponents/welcomeSection";
import TrendingSection from "./Components/MiniComponents/trendingSection";
import PopularCategorySection from "./Components/MiniComponents/popularCategory";
import SearchPage from "./Components/SearchPage";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <div>
        <WelcomeSection/>
        <SearchPage/>
      </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
