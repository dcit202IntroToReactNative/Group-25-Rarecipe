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
      <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeSection">
        <Stack.Screen name="WelcomeSection" component={WelcomeSection} options={{ headerShown: false }} />
        <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
