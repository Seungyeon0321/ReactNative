import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomButton from "./ui/Button";
import InputBox from "./ui/InputBox";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const API_URL = "https://react-project-a3fb8-default-rtdb.firebaseio.com/";

export default function ExpenseForm(props: {
  description: string;
  amount: number;
  date: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  // Save the input values in the state
  const [textInput, setTextInput] = useState({
    description: props.description,
    amount: props.amount,
    date: props.date,
  });

  const navigation = useNavigation();

  const inputChangeHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setTextInput((prevValues) => ({
      ...prevValues,
      [inputIdentifier]: enteredValue,
    }));
  };

  const addExpenseHandler = async (id: string) => {
    try {
      setIsLoading(true);

      const response = await axios.post(API_URL + "expenses.json/" + id, {
        description: textInput.description,
        amount: textInput.amount,
        date: textInput.date,
      });

      if (response.status === 200) {
        setIsLoading(false);
        setTextInput({
          description: "",
          amount: 0,
          date: "",
        });
        Alert.alert("Success", "Expense saved successfully");
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", "Failed to save expense");
    }
  };

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Your Expense</Text>
          </View>
          <View style={styles.inputContainer}>
            <InputBox
              label="Amount"
              textInputConfig={{
                keyboardType: "decimal-pad",
                autoCorrect: false,
                autoCapitalize: "none",
                autoFocus: true,
              }}
              value={props.amount ? props.amount.toString() : textInput.amount}
              onChangeText={(text) => inputChangeHandler("amount", text)}
            />
            <InputBox
              label="Date"
              textInputConfig={{
                maxLength: 10,
              }}
              value={props.date ? props.date : textInput.date}
              onChangeText={(text) => inputChangeHandler("date", text)}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <InputBox
              label="Description"
              textInputConfig={{
                maxLength: 100,
                multiline: true,
              }}
              value={
                props.description ? props.description : textInput.description
              }
              onChangeText={(text) => inputChangeHandler("description", text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Cancel"
              onPress={() => {
                console.log("cancel!");
                navigation.goBack();
              }}
            />
            <CustomButton title="Add" onPress={addExpenseHandler} />
          </View>
        </View>
      )}
    </>
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
