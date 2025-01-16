import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "@/constants/Colors";
import ConvertDate from "@/util/ConvertDate";
import ExpenseItem from "./ExpenseItem";
import { useEffect, useState } from "react";
import { GetExpenses } from "./API/APIRequest";

export default function ExpenseList() {
  const [expensesLists, setExpensesLists] = useState<any[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expenses = await GetExpenses();
        setExpensesLists(expenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  console.log(expensesLists);

  return (
    <FlatList
      style={styles.container}
      data={expensesLists}
      renderItem={({ item }) => (
        <ExpenseItem
          key={item.id}
          date={item.date.value}
          amount={item.amount.value}
          description={item.description.value}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
