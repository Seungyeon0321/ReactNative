import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import { useState, useEffect } from "react";
import PrimaryButton from "../componenets/ui/PrimaryButton";
import Title from "../componenets/ui/Title";
import Colors from "../constant/Color";

function createRandomNumber(min, max, exclude) {
  if (min == max) {
    return createRandomNumber(min, max + 1, exclude);
  }
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum == exclude) {
    return createRandomNumber(min, max, exclude);
  }
  console.log("step2", rndNum);
  return rndNum;
}

let min = 1;
let max = 100;

function GameScreen({ chosenNumber, gameOver }) {
  const initialGuess = createRandomNumber(1, 100, chosenNumber);
  const [guessNumber, setGuessNumber] = useState(initialGuess);
  console.log(guessNumber, chosenNumber);

  useEffect(() => {
    if (guessNumber == chosenNumber) {
      gameOver();
    }
  }, [guessNumber, chosenNumber, gameOver]);

  function handleGuessNumber(direction) {
    if (
      (direction == "lower" && guessNumber < chosenNumber) ||
      (direction == "greater" && guessNumber > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      console.log("lower button is pressed");
      max = guessNumber; //22
    } else {
      console.log("greater button is pressed");
      min = guessNumber; //24
    }

    console.log("step3", min, max); //22, 24

    const newRndNum = createRandomNumber(min, max, guessNumber);
    console.log("step4", newRndNum);
    setGuessNumber(newRndNum);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{guessNumber}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton
            onPress={() => {
              handleGuessNumber("lower");
            }}
          >
            -
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton
            onPress={() => {
              handleGuessNumber("greater");
            }}
          >
            +
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.primary900,
    width: 300,
    height: 100,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary900,
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
});

export default GameScreen;
