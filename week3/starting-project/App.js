import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealScreen from "./screens/MealScreen";
import MyFavoriteSecreen from "./screens/MyFavoriteScreen";

import FavoritesContextProvider from "./store/context/favorites-context";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function drawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="categories" component={CategoriesScreen} />
      <Drawer.Screen name="MyFavorite" component={MyFavoriteSecreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "black",
              contentStyle: { backgroundColor: "gray" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={drawer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealOverview"
              component={MealOverviewScreen}
              options={{ title: "Meal Overview" }}
            />
            <Stack.Screen
              name="MealScreen"
              component={MealScreen}
              options={{
                title: "Meal Detail",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

