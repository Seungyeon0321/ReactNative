import { View, StyleSheet, Text } from "react-native";
import ExpenseForm from "../ExpenseForm";
import { RouteProp } from "@react-navigation/native";
import GalbagyButton from "../ui/GalbagyButton";

const ManageExpense = ({
  route,
}: {
  route: RouteProp<{
    params: { description: string; amount: number; date: string; id: string };
  }>;
}) => {
  return (
    <View style={styles.container}>
      {route.params ? (
        <>
          <ExpenseForm
            description={{ value: route.params.description, isValid: true }}
            amount={{ value: route.params.amount, isValid: true }}
            date={{ value: route.params.date, isValid: true }}
          />
          <View style={styles.buttonContainer}>
            <GalbagyButton expenseId={route.params.id} />
          </View>
        </>
      ) : (
        <ExpenseForm
          description={{ value: "", isValid: false }}
          amount={{ value: 0, isValid: false }}
          date={{ value: "yyyy-mm-dd", isValid: false }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 210,
    left: 0,
    right: 0,
  },
});

export default ManageExpense;
