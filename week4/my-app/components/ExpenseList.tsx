import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { ConvertDate } from "@/util/ConvertDate";
import ExpenseItem from "./ExpenseItem";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://react-project-a3fb8-default-rtdb.firebaseio.com/";

export default function ExpenseList() {
  const [expensesLists, setExpensesLists] = useState([]);

  const fetchExpenses = async () => {
    const response = await axios.get(`${API_URL}/expenses.json`);
    setExpensesLists(response.data);
    console.log(expensesLists);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <View style={styles.container}>
      {/* {expensesLists.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          amount={expense.amount}
          description={expense.description}
        />
      ))} */}
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
