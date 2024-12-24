import { View, Text, StyleSheet } from "react-native";
import ExpenseList from "./ExpenseList";
import { Colors } from "@/constants/Colors";

export default function ExpenseOutput() {
  const totalExpenses = 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Last 7 days</Text>
        <Text style={styles.headerText}>{totalExpenses}</Text>
      </View>
      <ExpenseList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
    padding: 24,
    borderWidth: 1,
    borderColor: "red",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: Colors.light.background,
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.text,
  },
});
