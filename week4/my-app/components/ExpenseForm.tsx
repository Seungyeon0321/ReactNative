import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./ui/Button";
import InputBox from "./ui/InputBox";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseForm(props: {
  description: string;
  amount: number;
  date: string;
}) {
  const navigation = useNavigation();
  return (
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
          value={props.amount ? props.amount.toString() : ""}
        />
        <InputBox
          label="Date"
          textInputConfig={{
            maxLength: 10,
          }}
          value={props.date ? props.date : ""}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <InputBox
          label="Description"
          textInputConfig={{
            maxLength: 100,
            multiline: true,
          }}
          value={props.description ? props.description : ""}
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
        <CustomButton
          title="Add"
          onPress={() => {
            console.log("Add item!!");
          }}
        />
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
