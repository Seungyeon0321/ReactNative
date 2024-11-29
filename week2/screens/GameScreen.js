import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState, useEffect, useCallback } from "react";
import PrimaryButton from "../componenets/ui/PrimaryButton";
import Title from "../componenets/ui/Title";
import Colors from "../constant/Color";

function createRandomNumber(min, max, exclude) {
  console.log(min, max, exclude);
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exclude) {
    return createRandomNumber(min, max, exclude);
  }
  return rndNum;
}

let min = 1;
let max = 100;

function GameScreen({ chosenNumber, gameOver }) {
  const initialGuess = createRandomNumber(1, 100, chosenNumber);
  const [guessNumber, setGuessNumber] = useState(initialGuess);

  function handleGuessNumber(direction) {
    if (
      (direction === "lower" && guessNumber < chosenNumber) ||
      (direction === "greater" && guessNumber > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      max = guessNumber;
    } else {
      min = guessNumber;
    }
    createRandomNumber(min, max, chosenNumber);
  }

  useEffect(() => {
    if (guessNumber === chosenNumber) {
      gameOver();
    }
  }, [guessNumber, chosenNumber, gameOver]);

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
