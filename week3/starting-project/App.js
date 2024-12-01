import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
