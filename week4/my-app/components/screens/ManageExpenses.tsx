import { View, StyleSheet } from "react-native";
import ExpenseForm from "../ExpenseForm";
import { RouteProp } from "@react-navigation/native";
const ManageExpense = ({
  route,
}: {
  route: RouteProp<{
    params: { description: string; amount: number; date: string };
  }>;
}) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <ExpenseForm
        description={route.params.description}
        amount={route.params.amount}
        date={route.params.date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ManageExpense;
