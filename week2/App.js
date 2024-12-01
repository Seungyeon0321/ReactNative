import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import backgroundImage from "./assets/images/1.jpg";
import Colors from "./constant/Color";

export default function App() {
  const [chosenNumber, setChosenNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  function pickedNumberHandler(number) {
    setChosenNumber(number);
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  let screen = !chosenNumber ? (
    <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
  ) : gameOver && chosenNumber ? (
    <GameOverScreen />
  ) : (
    <GameScreen chosenNumber={chosenNumber} gameOver={gameOverHandler} />
  );

  return (
    <LinearGradient
      colors={[`${Colors.primary700}`, `${Colors.primary900}`]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style="auto" />
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
