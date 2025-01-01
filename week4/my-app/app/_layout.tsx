import AllExpenses from "@/components/screens/AllExpenses";
import RecentExpenses from "@/components/screens/RecentExpenses";
import ManageExpense from "@/components/screens/ManageExpenses";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { View, Text } from "react-native";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RightHeaderButton from "../components/ui/RightHeaderButton";
// Prevent the splash screen from auto-hiding before asset loading is complete.

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const ButtomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          headerRight: RightHeaderButton,
        }}
      />
      <BottomTab.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
          headerRight: RightHeaderButton,
        }}
      />
    </BottomTab.Navigator>
  );
};
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Stack.Navigator>
          {/* <StatusBar style="auto" /> */}
          <Stack.Screen
            name="buttom-selector"
            component={ButtomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="manage-expense" component={ManageExpense} />
        </Stack.Navigator>
      </View>
    </Provider>
  );
}
