import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./ui/Button";
import InputBox from "./ui/InputBox";

export default function ExpenseForm() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Your Expense</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputBox label="Amount" />
        <InputBox label="Date" />
      </View>
      <View style={styles.descriptionContainer}>
        <InputBox label="Description" />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Cancel" />
        <CustomButton title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
  },
  descriptionContainer: {
    width: "100%",
    height: 200,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
