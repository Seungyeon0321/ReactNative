import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomButton from "./ui/Button";
import InputBox from "./ui/InputBox";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const API_URL = "https://react-project-a3fb8-default-rtdb.firebaseio.com/";

export default function ExpenseForm(props: {
  description: {
    value: string;
    isValid: boolean;
  };
  amount: {
    value: number;
    isValid: boolean;
  };
  date: {
    value: string;
    isValid: boolean;
  };
}) {
  const [isLoading, setIsLoading] = useState(false);
  // Save the input values in the state
  const [textInput, setTextInput] = useState({
    description: {
      value: props.description.value,
      isValid: true,
    },
    amount: {
      value: props.amount.value,
      isValid: true,
    },
    date: {
      value: props.date.value,
      isValid: true,
    },
  });

  const navigation = useNavigation();

  // input change handler
  const inputChangeHandler = (
    inputIdentifier: "amount" | "date" | "description",
    enteredValue: string
  ) => {
    setTextInput((prevValues) => ({
      ...prevValues,
      [inputIdentifier]: {
        value:
          inputIdentifier == "date"
            ? enteredValue.split("-").reverse().join("-")
            : enteredValue,
        isValid: true,
      },
    }));
  };

  const checkValidity = () => {
    let validedAmount =
      textInput.amount.value > 0 && !isNaN(Number(textInput.amount.value));
    let validedDate =
      textInput.date.value.trim().length > 0 &&
      textInput.date.value.trim().length < 10 &&
      !isNaN(Number(textInput.date.value));
    let validedDescription = textInput.description.value.trim().length > 0;

    if (!validedAmount || !validedDate || !validedDescription) {
      setTextInput((prevValues) => ({
        ...prevValues,
        amount: { value: textInput.amount.value, isValid: validedAmount },
        date: { value: textInput.date.value, isValid: validedDate },
        description: {
          value: textInput.description.value,
          isValid: validedDescription,
        },
      }));
    }

    return validedAmount && validedDate && validedDescription;
  };

  const addExpenseHandler = async (id: string) => {
    try {
      let isValid = checkValidity();

      if (!isValid) {
        Alert.alert("Invalid input");
        return;
      }

      const response = await axios.post(API_URL + "expenses.json/", {
        description: textInput.description,
        amount: textInput.amount,
        date: textInput.date,
      });

      if (response.status === 200) {
        setIsLoading(false);
        // To reset the input values
        setTextInput({
          description: { value: "", isValid: true },
          amount: { value: 0, isValid: true },
          date: { value: "", isValid: true },
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
              value={
                props.amount
                  ? props.amount.value.toString()
                  : textInput.amount.value
              }
              isValid={textInput.amount.isValid}
              onChangeText={(text) => inputChangeHandler("amount", text)}
            />
            <InputBox
              label="Date"
              textInputConfig={{
                maxLength: 10,
              }}
              isValid={textInput.date.isValid}
              value={props.date ? props.date.value : textInput.date.value}
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
                props.description
                  ? props.description.value
                  : textInput.description.value
              }
              isValid={textInput.description.isValid}
              onChangeText={(text) => inputChangeHandler("description", text)}
            />
          </View>
          {!textInput.amount.isValid ||
          !textInput.date.isValid ||
          !textInput.description.isValid ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Please fill a right value</Text>
            </View>
          ) : (
            ""
          )}
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Cancel"
              onPress={() => {
                navigation.goBack();
              }}
            />
            <CustomButton
              title="Add"
              onPress={() => addExpenseHandler("123")}
            />
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
    alignItems: "center",
    marginTop: 50,
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
    marginTop: 20,
  },
  errorContainer: {
    flex: 1,
    width: "100%",
    height: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
});
