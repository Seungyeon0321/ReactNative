import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function goalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(e) {
    setEnteredGoalText(e);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function cancelGoalHandler() {
    props.onCancelGoal();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputBox}>
        <Image
          style={styles.image}
          source={require("../assets/image/goal.png")}
        />
        <TextInput
          style={styles.input}
          title="Please enter your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          a
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={cancelGoalHandler}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // 이 borderBottmwidth로 인해서 아래의 선이 들어간다
    // borderBottomColor: "#cccccc",
    margin: 20,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  input: {
    height: 40,
    marginRight: 2,
    width: "90%",
    borderWidth: 1,
    padding: 8,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
export default goalInput;
