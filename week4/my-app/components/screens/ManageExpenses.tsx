import { View, StyleSheet, Text } from "react-native";
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
      {route.params ? (
        <ExpenseForm
          description={route.params.description}
          amount={route.params.amount}
          date={route.params.date}
        />
      ) : (
        <ExpenseForm description="" amount={0} date="" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ManageExpense;
