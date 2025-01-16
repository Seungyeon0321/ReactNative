import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteExpense } from "../API/APIRequest";
import { useNavigation } from "@react-navigation/native";
type GalbagyButtonProps = {
  expenseId: string;
};

export default function GalbagyButton({ expenseId }: GalbagyButtonProps) {
  const navigation = useNavigation();

  const deleteExpenseHanddler = async (expenseId: string) => {
    console.log(expenseId);
    await deleteExpense(expenseId);
    // navigation.navigate("ExpenseList");
  };

  return (
    <MaterialIcons
      name="delete"
      size={40}
      color="black"
      onPress={() => deleteExpenseHanddler(expenseId)}
    />
  );
}
