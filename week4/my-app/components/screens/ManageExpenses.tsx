import { View, StyleSheet } from "react-native";
import ExpenseForm from "../ExpenseForm";

const ManageExpense = () => {
  return (
    <View style={styles.container}>
      <ExpenseForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ManageExpense;
