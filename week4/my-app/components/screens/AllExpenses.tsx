import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "@/components/ExpenseOutput";

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <ExpenseOutput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllExpenses;
