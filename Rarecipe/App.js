import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeSection from "./Components/MiniComponents/welcomeSection";
import TrendingSection from "./Components/MiniComponents/trendingSection";
import PopularCategorySection from "./Components/MiniComponents/popularCategory";

export default function App() {
  return (
    <TrendingSection />
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
