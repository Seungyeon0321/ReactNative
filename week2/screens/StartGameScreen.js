import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import { useState } from "react";
import Card from "../componenets/ui/Card";

import PrimaryButton from "../componenets/ui/PrimaryButton";
// import Card from "../componenets/ui/card";
import Colors from "../constant/Color";

function StartGameScreen({ pickedNumberHandler }) {
  const [typedNumber, setTypedNumber] = useState("");

  function resetButtonHandler() {
    setTypedNumber("");
  }

  //need to validate the input
  function confirmButtonHandler() {
    const chosenNumber = parseInt(typedNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetButtonHandler },
      ]);
      return;
    }

    pickedNumberHandler(typedNumber);
  }

  return (
    <Card>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={typedNumber}
          onChangeText={setTypedNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetButtonHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmButtonHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInputContainer: {
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary900,
    borderBottomWidth: 2,
    color: Colors.primary900,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
