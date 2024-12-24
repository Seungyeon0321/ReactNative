import { View, Text, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";
import { Colors } from "@/constants/Colors";
import { ConvertDate } from "@/util/ConvertDate";

const expensesLists = [
  {
    id: "1",
    date: ConvertDate(new Date()),
    amount: 100,
    description: "Expense 1",
  },
  {
    id: "2",
    date: ConvertDate(new Date()),
    amount: 200,
    description: "Expense 2",
  },
  {
    id: "3",
    date: ConvertDate(new Date()),
    amount: 300,
    description: "Expense 3",
  },
];

export default function ExpenseList() {
  return (
    <View style={styles.container}>
      {expensesLists.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          amount={expense.amount}
          description={expense.description}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.light.primary50,
    flexDirection: "column",
  },
});
