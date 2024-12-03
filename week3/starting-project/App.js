import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealScreen from "./screens/MealScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          contentStyle: { backgroundColor: "gray" },
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen
          name="MealOverview"
          component={MealOverviewScreen}
          options={{ title: "Meal Overview" }}
        />
        <Stack.Screen name="MealScreen" component={MealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
